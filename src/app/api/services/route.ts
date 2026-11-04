import { NextResponse } from "next/server";
import { getAuthenticatedUser, getSupabaseServerClient } from "@/lib/supabase";

export const runtime = "nodejs";
function bearer(request: Request) { return request.headers.get("authorization")?.replace(/^Bearer\s+/i, ""); }

export async function GET() {
  const supabase = getSupabaseServerClient();
  if (!supabase) return NextResponse.json({ ok: true, services: [] });
  const { data, error } = await supabase.from("services").select("id, creator_id, title, category, description, image, basic_price, plus_price, premium_price").eq("status", "published").order("created_at", { ascending: false });
  if (error) return NextResponse.json({ ok: false, error: error.message }, { status: 500 });
  return NextResponse.json({ ok: true, services: data ?? [] }, { headers: { "Cache-Control": "no-store" } });
}

export async function POST(request: Request) {
  const supabase = getSupabaseServerClient();
  const user = await getAuthenticatedUser(bearer(request));
  if (!supabase || !user) return NextResponse.json({ ok: false, error: "Sign in as a creator first." }, { status: 401 });
  const { data: creator } = await supabase.from("creators").select("id, status").eq("user_id", user.id).maybeSingle();
  if (!creator || creator.status !== "approved") return NextResponse.json({ ok: false, error: "Your creator profile must be approved first." }, { status: 403 });
  const payload = await request.json();
  const title = String(payload.title ?? "").trim();
  const category = String(payload.category ?? "").trim();
  const description = String(payload.description ?? "").trim();
  if (!title || !category || description.length < 20) return NextResponse.json({ ok: false, error: "Complete the service title, category, and description." }, { status: 400 });
  const { data, error } = await supabase.from("services").insert({ creator_id: creator.id, title, category, description, image: String(payload.image ?? ""), basic_price: Number(payload.basicPrice ?? 0), plus_price: Number(payload.plusPrice ?? 0), premium_price: Number(payload.premiumPrice ?? 0), basic_delivery_days: Number(payload.basicDeliveryDays ?? 7), plus_delivery_days: Number(payload.plusDeliveryDays ?? 5), premium_delivery_days: Number(payload.premiumDeliveryDays ?? 3), basic_revisions: Number(payload.basicRevisions ?? 1), plus_revisions: Number(payload.plusRevisions ?? 2), premium_revisions: Number(payload.premiumRevisions ?? 3), basic_details: String(payload.basicDetails ?? ""), plus_details: String(payload.plusDetails ?? ""), premium_details: String(payload.premiumDetails ?? ""), status: "published" }).select("id").single();
  if (error) return NextResponse.json({ ok: false, error: error.message }, { status: 500 });
  return NextResponse.json({ ok: true, serviceId: data.id }, { status: 201 });
}
