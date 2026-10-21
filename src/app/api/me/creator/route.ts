import { NextResponse } from "next/server";
import { getAuthenticatedUser, getSupabaseServerClient } from "@/lib/supabase";

export const runtime = "nodejs";

export async function GET(request: Request) {
  const supabase = getSupabaseServerClient();
  const token = request.headers.get("authorization")?.replace(/^Bearer\s+/i, "");
  const user = await getAuthenticatedUser(token);
  if (!supabase || !user) return NextResponse.json({ ok: false, error: "Sign in required." }, { status: 401 });

  const { data, error } = await supabase
    .from("creators")
    .select("id, name, city, skill, description, portfolio_files, image, status, created_at")
    .eq("user_id", user.id)
    .maybeSingle();

  if (error) return NextResponse.json({ ok: false, error: error.message }, { status: 500 });
  return NextResponse.json({ ok: true, creator: data ?? null });
}
