import { categories, type CategoryRecord } from "@/lib/data";
import { getSupabaseServerClient } from "@/lib/supabase";

export type CategoryStats = CategoryRecord & { creatorCount: number; serviceCount: number };

export async function getCategoryStats(): Promise<CategoryStats[]> {
  const supabase = getSupabaseServerClient();
  if (!supabase) return categories.map((category) => ({ ...category, creatorCount: 0, serviceCount: 0 }));
  return Promise.all(categories.map(async (category) => {
    const [{ count: creatorCount }, { count: serviceCount }] = await Promise.all([
      supabase.from("creators").select("id", { count: "exact", head: true }).eq("status", "approved").ilike("skill", `%${category.name}%`),
      supabase.from("services").select("id", { count: "exact", head: true }).eq("status", "published").eq("category", category.name),
    ]);
    return { ...category, creatorCount: creatorCount ?? 0, serviceCount: serviceCount ?? 0 };
  }));
}
