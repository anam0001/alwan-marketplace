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
  const form = await request.formData();
  const title = String(form.get("title") ?? "").trim();
  const category = String(form.get("category") ?? "").trim();
  const description = String(form.get("description") ?? "").trim();
  if (!title || !category || description.length < 20) return NextResponse.json({ ok: false, error: "Complete the service title, category, and description." }, { status: 400 });
  const upload = async (file: File, path: string) => {
    const buffer = Buffer.from(await file.arrayBuffer());
    const { error } = await supabase.storage.from("creator-portfolios").upload(path, buffer, { contentType: file.type, upsert: false });
    if (error) throw new Error(error.message);
    return supabase.storage.from("creator-portfolios").getPublicUrl(path).data.publicUrl;
  };
  const imageFile = form.get("serviceImage");
  const galleryFiles = form.getAll("gallery").filter((value): value is File => value instanceof File && value.size > 0);
  if (!(imageFile instanceof File) || galleryFiles.length < 3) return NextResponse.json({ ok: false, error: "Add one display image and at least three work images." }, { status: 400 });
  const image = await upload(imageFile, `${creator.id}/services/${crypto.randomUUID()}-display`);
  const gallery = await Promise.all(galleryFiles.slice(0, 6).map((file) => upload(file, `${creator.id}/services/${crypto.randomUUID()}-gallery`)));
  const number = (name: string, fallback: number) => Number(form.get(name) ?? fallback);
  const text = (name: string) => String(form.get(name) ?? "");
  const { data, error } = await supabase.from("services").insert({ creator_id: creator.id, title, category, description, image, gallery_files: gallery, basic_price: number("basicPrice", 0), plus_price: number("plusPrice", 0), premium_price: number("premiumPrice", 0), basic_delivery_days: number("basicDeliveryDays", 7), plus_delivery_days: number("plusDeliveryDays", 5), premium_delivery_days: number("premiumDeliveryDays", 3), basic_revisions: number("basicRevisions", 1), plus_revisions: number("plusRevisions", 2), premium_revisions: number("premiumRevisions", 3), basic_details: text("basicDetails"), plus_details: text("plusDetails"), premium_details: text("premiumDetails"), status: "draft" }).select("id").single();
  if (error) return NextResponse.json({ ok: false, error: error.message }, { status: 500 });
  return NextResponse.json({ ok: true, serviceId: data.id }, { status: 201 });
}
