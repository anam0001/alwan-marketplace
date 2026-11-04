import { NextResponse } from "next/server";
import { getAuthenticatedUser, getSupabaseServerClient } from "@/lib/supabase";

export const runtime = "nodejs";

function token(request: Request) {
  return request.headers.get("authorization")?.replace(/^Bearer\s+/i, "");
}

export async function GET(request: Request) {
  const supabase = getSupabaseServerClient();
  const user = await getAuthenticatedUser(token(request));
  if (!supabase || !user) return NextResponse.json({ ok: false, error: "Sign in required." }, { status: 401 });

  const { data: creator } = await supabase.from("creators").select("id").eq("user_id", user.id).maybeSingle();
  let query = supabase.from("orders").select("id, customer_id, creator_id, title, details, amount, status, created_at, updated_at").order("created_at", { ascending: false });
  query = creator ? query.or(`customer_id.eq.${user.id},creator_id.eq.${creator.id}`) : query.eq("customer_id", user.id);
  const { data, error } = await query;
  if (error) return NextResponse.json({ ok: false, error: error.message }, { status: 500 });
  return NextResponse.json({ ok: true, orders: data ?? [] });
}

export async function POST(request: Request) {
  const supabase = getSupabaseServerClient();
  const user = await getAuthenticatedUser(token(request));
  if (!supabase || !user) return NextResponse.json({ ok: false, error: "Sign in required to place an order." }, { status: 401 });

  const payload = await request.json();
  const creatorId = Number(payload.creatorId);
  const title = String(payload.title ?? "").trim();
  const details = String(payload.details ?? "").trim();
  const amount = Number(payload.amount ?? 0);
  if (!Number.isInteger(creatorId) || !title || details.length < 10 || !Number.isFinite(amount) || amount < 0) {
    return NextResponse.json({ ok: false, error: "Please provide an order title, details, and valid amount." }, { status: 400 });
  }

  const { data: creator, error: creatorError } = await supabase.from("creators").select("id, user_id, name, status").eq("id", creatorId).eq("status", "approved").maybeSingle();
  if (creatorError || !creator) return NextResponse.json({ ok: false, error: "Creator is not available." }, { status: 404 });
  if (creator.user_id === user.id) return NextResponse.json({ ok: false, error: "You cannot place an order with your own profile." }, { status: 400 });

  const { data: order, error } = await supabase.from("orders").insert({ customer_id: user.id, creator_id: creator.id, title, details, amount, status: "requested" }).select("id").single();
  if (error) return NextResponse.json({ ok: false, error: error.message }, { status: 500 });
  await supabase.from("order_notifications").insert({ order_id: order.id, recipient_id: creator.user_id, message: `New order request: ${title}` });
  return NextResponse.json({ ok: true, orderId: order.id }, { status: 201 });
}

export async function PATCH(request: Request) {
  const supabase = getSupabaseServerClient();
  const user = await getAuthenticatedUser(token(request));
  if (!supabase || !user) return NextResponse.json({ ok: false, error: "Sign in required." }, { status: 401 });
  const payload = await request.json();
  const nextStatus = String(payload.status);
  if (!Number.isInteger(payload.id) || !["accepted", "in_progress", "completed", "cancelled", "rejected"].includes(nextStatus)) return NextResponse.json({ ok: false, error: "Invalid order update." }, { status: 400 });

  const { data: order } = await supabase.from("orders").select("id, customer_id, creator_id, title").eq("id", payload.id).maybeSingle();
  const { data: creator } = await supabase.from("creators").select("user_id").eq("id", order?.creator_id).maybeSingle();
  if (!order || (creator?.user_id !== user.id && order.customer_id !== user.id)) return NextResponse.json({ ok: false, error: "Order access denied." }, { status: 403 });
  const { error } = await supabase.from("orders").update({ status: nextStatus, updated_at: new Date().toISOString() }).eq("id", order.id);
  if (error) return NextResponse.json({ ok: false, error: error.message }, { status: 500 });
  const recipient = creator?.user_id === user.id ? order.customer_id : creator?.user_id;
  if (recipient) await supabase.from("order_notifications").insert({ order_id: order.id, recipient_id: recipient, message: `Order ${order.title} is now ${nextStatus.replace("_", " ")}.` });
  return NextResponse.json({ ok: true });
}
