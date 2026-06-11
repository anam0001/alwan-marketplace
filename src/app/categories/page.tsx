import Link from "next/link";
import type { Metadata } from "next";
import { categories } from "@/lib/data";

export const metadata: Metadata = {
  title: "Categories",
  description:
    "Browse Alwan categories like embroidery, mehndi, crochet, stitching, fashion design, tutoring, and handmade crafts.",
};

export default function CategoriesPage() {
  return (
    <section className="min-h-screen bg-gradient-to-b from-white to-secondary/20 pt-28 pb-16">
      <div className="container-custom">
        <div className="max-w-4xl">
          <p className="text-xs uppercase tracking-[0.25em] font-semibold text-primary">
            Marketplace categories
          </p>
          <h1 className="mt-3 text-3xl md:text-5xl font-extrabold text-neutral-900 leading-tight">
            Explore Alwan by category.
          </h1>
          <p className="mt-4 text-neutral-600 md:text-lg leading-relaxed">
            Find the style or skill you need, then jump into curated talent from creators across Pakistan.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category) => (
            <Link
              key={category.id}
              href={`/explore?category=${encodeURIComponent(category.name)}`}
              className="group rounded-[2rem] border border-neutral-200 bg-white p-6 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover"
            >
              <div className="flex items-center justify-between gap-4">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-secondary text-3xl">
                  {category.icon}
                </div>
                <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                  {category.count} listings
                </span>
              </div>
              <h2 className="mt-5 text-2xl font-bold text-neutral-900">{category.name}</h2>
              <p className="mt-2 text-neutral-600">
                Browse creators, pricing, and available work in this category.
              </p>
            </Link>
          ))}
        </div>

        <div className="mt-12 rounded-[2rem] border border-primary/20 bg-white p-6 md:p-8">
          <h3 className="text-xl md:text-2xl font-bold text-neutral-900">
            Can’t find the right category?
          </h3>
          <p className="mt-2 text-neutral-600">
            Use Explore Talent to discover curated pieces or join as a creator to add a new skill.
          </p>
          <div className="mt-5 flex flex-col sm:flex-row gap-3">
            <Link
              href="/explore-talent"
              className="inline-flex items-center justify-center rounded-2xl bg-gradient-primary px-5 py-3 font-semibold text-white"
            >
              Explore Talent
            </Link>
            <Link
              href="/join"
              className="inline-flex items-center justify-center rounded-2xl border border-primary/20 bg-white px-5 py-3 font-semibold text-primary"
            >
              Become a Creator
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}