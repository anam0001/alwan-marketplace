"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { formatPrice } from "@/lib/utils";

type GigPackage = {
  name: string;
  price: number;
  deliveryDays: number;
  revisions: number;
  features: string[];
};

type GigItem = {
  id: number;
  title: string;
  creator: string;
  creatorId: number;
  category: string;
  price: number;
  rating: number;
  reviews: number;
  description: string;
};

function generatePackages(basePrice: number, category: string): GigPackage[] {
  const basic = Math.max(1500, Math.round(basePrice * 0.7));
  const standard = Math.max(2500, Math.round(basePrice));
  const premium = Math.max(3500, Math.round(basePrice * 1.45));

  return [
    {
      name: "Basic",
      price: basic,
      deliveryDays: 5,
      revisions: 1,
      features: [
        `Starter ${category.toLowerCase()} package`,
        "Single concept or base deliverable",
        "Message support",
      ],
    },
    {
      name: "Standard",
      price: standard,
      deliveryDays: 3,
      revisions: 3,
      features: [
        `Complete ${category.toLowerCase()} package`,
        "Priority handling",
        "Commercial usage guidance",
      ],
    },
    {
      name: "Premium",
      price: premium,
      deliveryDays: 2,
      revisions: 5,
      features: [
        "Everything in Standard",
        "Advanced customization",
        "Fast delivery + premium support",
      ],
    },
  ];
}

export default function GigDetailClient({ gig }: { gig: GigItem }) {
  const packages = useMemo(
    () => generatePackages(gig.price, gig.category),
    [gig.price, gig.category]
  );
  const [selected, setSelected] = useState(1);

  return (
    <section className="min-h-screen pt-28 pb-16 bg-neutral-50">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <p className="text-xs uppercase tracking-wider text-primary font-semibold">
              {gig.category} Gig
            </p>
            <h1 className="mt-2 text-3xl md:text-4xl font-extrabold text-neutral-900">
              {gig.title}
            </h1>
            <p className="mt-3 text-neutral-600 max-w-3xl">{gig.description}</p>

            <div className="mt-5 flex flex-wrap items-center gap-3 text-sm text-neutral-600">
              <span>⭐ {gig.rating} ({gig.reviews} reviews)</span>
              <span className="w-1 h-1 rounded-full bg-neutral-300" />
              <Link href={`/creator/${gig.creatorId}`} className="text-primary font-semibold hover:underline">
                by {gig.creator}
              </Link>
            </div>

            <div className="mt-8 rounded-3xl border border-neutral-200 bg-white p-6 md:p-7">
              <h2 className="text-xl font-bold text-neutral-900">What you get</h2>
              <ul className="mt-4 space-y-2 text-sm text-neutral-700">
                {packages[selected].features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2">
                    <span className="text-emerald-600">✓</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <aside className="rounded-3xl border border-primary/15 bg-white p-5 md:p-6 shadow-soft">
            <h3 className="text-lg font-bold text-neutral-900">Set your package</h3>
            <p className="mt-1 text-sm text-neutral-500">
              Fiverr-style pricing tiers for this gig.
            </p>

            <div className="mt-4 space-y-2">
              {packages.map((pkg, index) => (
                <button
                  key={pkg.name}
                  onClick={() => setSelected(index)}
                  className={`w-full text-left rounded-2xl border px-4 py-3 transition-all ${
                    selected === index
                      ? "border-primary bg-primary/5"
                      : "border-neutral-200 hover:border-primary/40"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-neutral-800">{pkg.name}</span>
                    <span className="font-bold text-primary">{formatPrice(pkg.price)}</span>
                  </div>
                  <p className="mt-1 text-xs text-neutral-500">
                    {pkg.deliveryDays} days delivery • {pkg.revisions} revision{pkg.revisions > 1 ? "s" : ""}
                  </p>
                </button>
              ))}
            </div>

            <Link
              href={`/creator/${gig.creatorId}`}
              className="mt-5 block w-full text-center px-4 py-3 rounded-2xl bg-gradient-primary text-white font-semibold"
            >
              Continue to Creator Contact
            </Link>

            <p className="mt-3 text-xs text-neutral-500 text-center">
              Want custom pricing? Message Alwan on WhatsApp for a tailored quote.
            </p>
          </aside>
        </div>
      </div>
    </section>
  );
}