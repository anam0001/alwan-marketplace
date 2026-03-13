import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gigs",
  description: "Browse Alwan gig categories: creators, art, and services.",
};

const pages = [
  {
    title: "Creators Gigs",
    description: "Explore creator-first gigs and open individual profiles.",
    href: "/gigs/creators",
    emoji: "👩‍🎨",
  },
  {
    title: "Art Gigs",
    description: "Creative and artistic offerings such as design, crafts, and visual work.",
    href: "/gigs/art",
    emoji: "🎨",
  },
  {
    title: "Service Gigs",
    description: "Useful skill-based services for everyday customer needs.",
    href: "/gigs/services",
    emoji: "🛠️",
  },
];

export default function GigsPage() {
  return (
    <section className="min-h-screen bg-neutral-50 pt-28 pb-16">
      <div className="container-custom">
        <h1 className="text-3xl md:text-5xl font-extrabold text-neutral-900">Gig Categories</h1>
        <p className="mt-3 text-neutral-600 max-w-2xl">
          Choose a lane to discover specialized gigs and pricing packages.
        </p>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          {pages.map((page) => (
            <Link
              key={page.href}
              href={page.href}
              className="rounded-3xl border border-neutral-200 bg-white p-6 shadow-soft hover:shadow-card-hover transition-all duration-300"
            >
              <div className="text-4xl" aria-hidden="true">{page.emoji}</div>
              <h2 className="mt-3 text-xl font-bold text-neutral-900">{page.title}</h2>
              <p className="mt-2 text-sm text-neutral-600">{page.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}