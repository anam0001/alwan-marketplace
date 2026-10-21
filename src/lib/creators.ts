import { featuredCreators, type CreatorRecord } from "@/lib/data";
import { getSupabaseServerClient } from "@/lib/supabase";

export type PublicCreator = CreatorRecord;

function mapCreator(row: Record<string, unknown>): PublicCreator {
  const id = Number(row.id);
  const portfolio = Array.isArray(row.portfolio_files)
    ? row.portfolio_files.filter((file): file is string => typeof file === "string")
    : [];

  return {
    id,
    name: String(row.name ?? "Alwan Creator"),
    skill: String(row.skill ?? "Creator"),
    city: String(row.city ?? "Pakistan"),
    rating: Number(row.rating ?? 0),
    reviews: Number(row.reviews ?? 0),
    image: String(row.image ?? ""),
    bio: String(row.description ?? "Talented creator on Alwan."),
    skills: [String(row.skill ?? "Creator")],
    portfolio,
  };
}

export async function getPublicCreators(): Promise<PublicCreator[]> {
  const supabase = getSupabaseServerClient();
  if (!supabase) return featuredCreators;

  const { data, error } = await supabase
    .from("creators")
    .select("id, name, city, skill, description, portfolio_files, rating, reviews, image")
    .eq("status", "approved")
    .order("created_at", { ascending: false });

  if (error || !data || data.length === 0) return featuredCreators;
  return data.map((row) => mapCreator(row as Record<string, unknown>));
}

export async function getPublicCreatorById(id: number): Promise<PublicCreator | null> {
  const supabase = getSupabaseServerClient();
  if (supabase) {
    const { data } = await supabase
      .from("creators")
      .select("id, name, city, skill, description, portfolio_files, rating, reviews, image")
      .eq("id", id)
      .eq("status", "approved")
      .maybeSingle();

    if (data) return mapCreator(data as Record<string, unknown>);
  }

  return featuredCreators.find((creator) => creator.id === id) ?? null;
}
