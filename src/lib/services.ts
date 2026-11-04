import { getSupabaseServerClient } from "@/lib/supabase";
import type { MarketplaceItem } from "@/lib/data";

export async function getPublicServices(): Promise<MarketplaceItem[]> {
  const supabase = getSupabaseServerClient();
  if (!supabase) return [];
  const { data } = await supabase.from("services").select("id, creator_id, title, category, description, image, basic_price, creators(name)").eq("status", "published").order("created_at", { ascending: false });
  return (data ?? []).map((service: any) => ({
    id: Number(service.id), title: service.title, creator: service.creators?.name ?? "Alwan Creator", creatorId: Number(service.creator_id), category: service.category, price: Number(service.basic_price ?? 0), rating: 0, reviews: 0, image: service.image ?? "", description: service.description,
  }));
}
