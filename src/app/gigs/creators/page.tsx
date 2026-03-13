import type { Metadata } from "next";
import Link from "next/link";
import { featuredCreators } from "@/lib/data";
import { getInitials } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Creators Gigs",
  description: "Discover verified creator profiles and their active gigs.",
};

export default function CreatorGigsPage() {
  return (
    <section className="min-h-screen bg-neutral-50 pt-28 pb-16">
      <div className="container-custom">
        <h1 className="text-3xl md:text-5xl font-extrabold text-neutral-900">Creators Gigs</h1>
        <p className="mt-3 text-neutral-600">Browse creators and open their gigs with package pricing.</p>

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredCreators.map((creator) => (
            <Link
              key={creator.id}
              href={`/creator/${creator.id}`}
              className="rounded-3xl border border-neutral-200 bg-white p-5 shadow-soft hover:shadow-card-hover transition-all"
            >
              <div className="w-14 h-14 rounded-2xl bg-gradient-primary text-white flex items-center justify-center font-bold text-lg">
                {getInitials(creator.name)}
              </div>
              <h2 className="mt-4 text-lg font-bold text-neutral-900">{creator.name}</h2>
              <p className="text-sm text-primary font-semibold mt-1">{creator.skill}</p>
              <p className="text-xs text-neutral-500 mt-2">⭐ {creator.rating} • {creator.reviews} reviews</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}