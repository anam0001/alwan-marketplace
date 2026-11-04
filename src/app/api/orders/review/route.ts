import { NextResponse } from "next/server";
import { getAuthenticatedUser, getSupabaseServerClient } from "@/lib/supabase";

export const runtime = "nodejs";

export async function POST(request: Request) {
  const supabase = getSupabaseServerClient();
  const token = request.headers.get("authorization")?.replace(/^Bearer\s+/i, "");
  const user = await getAuthenticatedUser(token);
  if (!supabase || !user) return NextResponse.json({ ok: false, error: "Sign in required." }, { status: 401 });
  const payload = await request.json();
  const rating = Number(payload.rating);
  const review = String(payload.review ?? "").trim();
  if (!Number.isInteger(payload.orderId) || rating < 1 || rating > 5 || review.length < 5) return NextResponse.json({ ok: false, error: "Please provide a rating and review." }, { status: 400 });

  const { data: order } = await supabase.from("orders").select("id, customer_id, creator_id, status").eq("id", payload.orderId).maybeSingle();
  if (!order || order.customer_id !== user.id || order.status !== "completed") return NextResponse.json({ ok: false, error: "Only completed orders can be reviewed." }, { status: 403 });
  const { data, error } = await supabase.from("order_reviews").insert({ order_id: order.id, customer_id: user.id, creator_id: order.creator_id, rating, review }).select("id").single();
  if (error) return NextResponse.json({ ok: false, error: error.message }, { status: 500 });
  return NextResponse.json({ ok: true, reviewId: data.id }, { status: 201 });
}
