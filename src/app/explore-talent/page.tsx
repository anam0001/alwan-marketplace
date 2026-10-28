import type { Metadata } from "next";
import { siteConfig } from "@/lib/siteConfig";

export const metadata: Metadata = {
  title: "Explore Talent",
  description:
    "Discover anonymous, curated talent pieces on Alwan. Browse ideas, designs, artwork, and skills without revealing creator identities.",
};

export default function ExploreTalentPage() {
  return (
    <section className="min-h-screen bg-neutral-50 pt-28 pb-16">
      <div className="container-custom">
        <div className="max-w-3xl">
          <p className="text-xs uppercase tracking-[0.2em] text-primary font-semibold">Discovery Collection</p>
          <h1 className="mt-3 text-3xl md:text-5xl font-extrabold text-neutral-900 leading-tight">
            Explore outstanding talent. Identities hidden, creativity revealed.
          </h1>
          <p className="mt-4 text-neutral-600 md:text-lg">
            Browse Alwan&apos;s curated gallery of anonymous creative pieces. You see the talent itself, not names, profiles, or personal details.
          </p>
        </div>

        <div className="mt-10 rounded-3xl border border-dashed border-primary/20 bg-white p-8 text-center shadow-soft">
          <h2 className="text-2xl font-bold text-neutral-900">Real talent will appear here</h2>
          <p className="mt-3 text-neutral-600">
            This gallery will populate from approved creator portfolios. No sample or dummy work is shown.
          </p>
        </div>

        <div className="mt-12 rounded-3xl border border-primary/20 bg-white p-6 md:p-8">
          <h3 className="text-xl md:text-2xl font-bold text-neutral-900">Want to know who made a piece?</h3>
          <p className="mt-2 text-neutral-600">
            Reach out to Alwan and share the talent title. We&apos;ll help you with availability, pricing, and next steps.
          </p>
          <a
            href={siteConfig.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 inline-flex px-5 py-3 rounded-2xl bg-[#25D366] text-white font-semibold"
          >
            Contact Alwan on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}