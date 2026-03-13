import type { Metadata } from "next";
import { marketplaceItems } from "@/lib/data";
import Card from "@/components/ui/Card";

export const metadata: Metadata = {
  title: "Art Gigs",
  description: "Explore artistic gigs on Alwan.",
};

const artCategories = new Set([
  "Embroidery",
  "Mehndi",
  "Crochet",
  "Fashion Design",
  "Handmade Crafts",
  "Jewelry Making",
]);

export default function ArtGigsPage() {
  const items = marketplaceItems.filter((item) => artCategories.has(item.category));

  return (
    <section className="min-h-screen bg-neutral-50 pt-28 pb-16">
      <div className="container-custom">
        <h1 className="text-3xl md:text-5xl font-extrabold text-neutral-900">Art Gigs</h1>
        <p className="mt-3 text-neutral-600">Creative offerings with premium package pricing options.</p>

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {items.map((item) => (
            <Card key={item.id} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
}