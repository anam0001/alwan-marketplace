import type { Metadata } from "next";
import { marketplaceItems } from "@/lib/data";
import Card from "@/components/ui/Card";

export const metadata: Metadata = {
  title: "Service Gigs",
  description: "Explore service-oriented gigs on Alwan.",
};

const serviceCategories = new Set(["Tutoring", "Stitching", "Fashion Design"]);

export default function ServiceGigsPage() {
  const items = marketplaceItems.filter((item) => serviceCategories.has(item.category));

  return (
    <section className="min-h-screen bg-neutral-50 pt-28 pb-16">
      <div className="container-custom">
        <h1 className="text-3xl md:text-5xl font-extrabold text-neutral-900">Service Gigs</h1>
        <p className="mt-3 text-neutral-600">Book practical services with transparent package pricing.</p>

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {items.map((item) => (
            <Card key={item.id} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
}