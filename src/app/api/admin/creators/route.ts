import { NextResponse } from "next/server";
import { getAdminEmails, getAuthenticatedUser, getSupabaseServerClient } from "@/lib/supabase";

export const runtime = "nodejs";

async function adminClient(request: Request) {
  const token = request.headers.get("authorization")?.replace(/^Bearer\s+/i, "");
  const user = await getAuthenticatedUser(token);
  const email = user?.email?.toLowerCase();
  if (!user || !email || !getAdminEmails().includes(email)) return null;
  return getSupabaseServerClient();
}

export async function GET(request: Request) {
  const supabase = await adminClient(request);
  if (!supabase) return NextResponse.json({ ok: false, error: "Admin access required." }, { status: 403 });
  const { data, error } = await supabase.from("creators").select("id, name, city, skill, description, status, created_at").order("created_at", { ascending: false });
  if (error) return NextResponse.json({ ok: false, error: error.message }, { status: 500 });
  return NextResponse.json({ ok: true, creators: data ?? [] });
}

export async function PATCH(request: Request) {
  const supabase = await adminClient(request);
  if (!supabase) return NextResponse.json({ ok: false, error: "Admin access required." }, { status: 403 });
  const payload = await request.json();
  if (!Number.isInteger(payload.id) || !["pending", "approved", "rejected"].includes(payload.status)) return NextResponse.json({ ok: false, error: "Invalid approval update." }, { status: 400 });
  const { error } = await supabase.from("creators").update({ status: payload.status }).eq("id", payload.id);
  if (error) return NextResponse.json({ ok: false, error: error.message }, { status: 500 });
  return NextResponse.json({ ok: true });
}
