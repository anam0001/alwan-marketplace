import { NextResponse } from "next/server";
import { getPublicCreators } from "@/lib/creators";
import { getAdminEmails, getAuthenticatedUser, getSupabaseServerClient } from "@/lib/supabase";

export const runtime = "nodejs";

function getBearerToken(request: Request) {
  const header = request.headers.get("authorization") ?? "";
  return header.startsWith("Bearer ") ? header.slice(7) : null;
}

async function uploadPortfolioFiles(
  supabase: NonNullable<ReturnType<typeof getSupabaseServerClient>>,
  userId: string,
  files: File[]
) {
  const urls: string[] = [];
  for (const file of files.slice(0, 6)) {
    if (!file.type.startsWith("image/") || file.size > 5 * 1024 * 1024) continue;
    const extension = file.name.split(".").pop()?.toLowerCase() || "jpg";
    const path = `${userId}/${crypto.randomUUID()}.${extension}`;
    const buffer = Buffer.from(await file.arrayBuffer());
    const { error } = await supabase.storage.from("creator-portfolios").upload(path, buffer, {
      contentType: file.type,
      upsert: false,
    });
    if (error) throw new Error(`Portfolio upload failed: ${error.message}`);
    const { data } = supabase.storage.from("creator-portfolios").getPublicUrl(path);
    urls.push(data.publicUrl);
  }
  return urls;
}

export async function POST(request: Request) {
  try {
    const supabase = getSupabaseServerClient();
    const user = await getAuthenticatedUser(getBearerToken(request));
    if (!supabase || !user) {
      return NextResponse.json({ ok: false, error: "Please sign in before creating a profile." }, { status: 401 });
    }
    if (!user.email_confirmed_at) {
      return NextResponse.json({ ok: false, error: "Please verify your email before creating a profile." }, { status: 403 });
    }

    const form = await request.formData();
    const name = String(form.get("name") ?? "").trim();
    const city = String(form.get("city") ?? "").trim();
    const skill = String(form.get("skill") ?? "").trim();
    const description = String(form.get("description") ?? "").trim();
    const files = form.getAll("portfolio").filter((value): value is File => value instanceof File && value.size > 0);

    if (name.length < 3 || !city || !skill || description.length < 20) {
      return NextResponse.json({ ok: false, error: "Please complete all required fields." }, { status: 400 });
    }

    const portfolioUrls = await uploadPortfolioFiles(supabase, user.id, files);
    const { data, error } = await supabase
      .from("creators")
      .upsert(
        {
          user_id: user.id,
          name,
          city,
          skill,
          description,
          portfolio_files: portfolioUrls,
          image: portfolioUrls[0] ?? "",
          status: "pending",
        },
        { onConflict: "user_id" }
      )
      .select("id")
      .single();

    if (error) {
      return NextResponse.json({ ok: false, error: error.message || "Could not save creator profile." }, { status: 500 });
    }

    return NextResponse.json({ ok: true, creatorId: data.id, message: "Your profile was submitted for approval." }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ ok: false, error: error instanceof Error ? error.message : "Could not save creator profile." }, { status: 500 });
  }
}

export async function GET() {
  const creators = await getPublicCreators();
  return NextResponse.json({ ok: true, count: creators.length, creators }, { headers: { "Cache-Control": "no-store" } });
}

export async function PATCH(request: Request) {
  try {
    const supabase = getSupabaseServerClient();
    const user = await getAuthenticatedUser(getBearerToken(request));
    const admins = getAdminEmails();
    if (!supabase || !user || !user.email || !admins.includes(user.email.toLowerCase())) {
      return NextResponse.json({ ok: false, error: "Admin access required." }, { status: 403 });
    }

    const payload = await request.json();
    if (!Number.isInteger(payload.id) || !["pending", "approved", "rejected"].includes(payload.status)) {
      return NextResponse.json({ ok: false, error: "Invalid approval update." }, { status: 400 });
    }

    const { error } = await supabase.from("creators").update({ status: payload.status }).eq("id", payload.id);
    if (error) return NextResponse.json({ ok: false, error: error.message }, { status: 500 });
    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ ok: false, error: "Could not update creator approval." }, { status: 500 });
  }
}
