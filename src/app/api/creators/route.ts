import { NextResponse } from "next/server";
import { getSupabaseServerClient } from "@/lib/supabase";
import { getPublicCreators } from "@/lib/creators";

export const runtime = "nodejs";

function isValidPayload(payload: unknown): payload is {
  name: string;
  city: string;
  skill: string;
  description: string;
  portfolioFiles?: string[];
} {
  if (!payload || typeof payload !== "object") return false;
  const value = payload as Record<string, unknown>;
  return (
    typeof value.name === "string" && value.name.trim().length >= 3 &&
    typeof value.city === "string" && value.city.trim().length > 0 &&
    typeof value.skill === "string" && value.skill.trim().length > 0 &&
    typeof value.description === "string" && value.description.trim().length >= 20
  );
}

export async function POST(request: Request) {
  try {
    const payload: unknown = await request.json();
    if (!isValidPayload(payload)) {
      return NextResponse.json({ ok: false, error: "Please complete all required fields." }, { status: 400 });
    }

    const supabase = getSupabaseServerClient();
    if (!supabase) {
      return NextResponse.json(
        { ok: false, error: "The creator database is not configured yet. Please run supabase/creators.sql and check your environment variables." },
        { status: 503 }
      );
    }

    const { data, error } = await supabase
      .from("creators")
      .insert({
        name: payload.name.trim(),
        city: payload.city.trim(),
        skill: payload.skill.trim(),
        description: payload.description.trim(),
        portfolio_files: Array.isArray(payload.portfolioFiles) ? payload.portfolioFiles.slice(0, 6) : [],
        status: "approved",
      })
      .select("id")
      .single();

    if (error) {
      return NextResponse.json({ ok: false, error: error.message || "Could not save creator registration." }, { status: 500 });
    }

    return NextResponse.json({ ok: true, creatorId: data.id, message: "Your creator profile is now live on Alwan." }, { status: 201 });
  } catch {
    return NextResponse.json({ ok: false, error: "Something went wrong while saving your creator profile." }, { status: 500 });
  }
}

export async function GET() {
  const creators = await getPublicCreators();
  return NextResponse.json({ ok: true, count: creators.length, creators }, { headers: { "Cache-Control": "no-store" } });
}
