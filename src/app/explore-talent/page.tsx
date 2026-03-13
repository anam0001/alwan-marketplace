import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Explore Talent",
  description:
    "Discover anonymous, curated talent pieces on Alwan. Browse ideas, designs, artwork, and skills without revealing creator identities.",
};

const hiddenTalent = [
  { id: 1, title: "Royal Thread Bloom", tag: "Embroidery", visual: "🧵" },
  { id: 2, title: "Luminous Bridal Pattern", tag: "Mehndi Art", visual: "✋" },
  { id: 3, title: "Minimal Crochet Geometry", tag: "Crochet", visual: "🧶" },
  { id: 4, title: "Pastel Fashion Moodboard", tag: "Fashion Design", visual: "👗" },
  { id: 5, title: "Structured Learning Blueprint", tag: "Tutoring", visual: "📚" },
  { id: 6, title: "Handmade Texture Concept", tag: "Craft Skills", visual: "🎨" },
  { id: 7, title: "Elegant Stitch Architecture", tag: "Stitching", visual: "✂️" },
  { id: 8, title: "Fine Jewelry Harmony", tag: "Jewelry Making", visual: "💍" },
  { id: 9, title: "Contemporary Pattern Study", tag: "Design Thinking", visual: "🪄" },
];

export default function ExploreTalentPage() {
  return (
    <section className="min-h-screen bg-neutral-50 pt-28 pb-16">
      <div className="container-custom">
        <div className="max-w-3xl">
          <p className="text-xs uppercase tracking-[0.2em] text-primary font-semibold">Discovery Collection</p>
          <h1 className="mt-3 text-3xl md:text-5xl font-extrabold text-neutral-900 leading-tight">
            Explore outstanding talent — identities hidden, creativity revealed.
          </h1>
          <p className="mt-4 text-neutral-600 md:text-lg">
            Browse Alwan&apos;s curated gallery of anonymous creative pieces. You see the talent itself — not names, profiles, or personal details.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {hiddenTalent.map((item) => (
            <article
              key={item.id}
              className="group rounded-3xl border border-neutral-200 bg-white p-6 shadow-soft hover:shadow-card-hover transition-all duration-300"
            >
              <div className="h-36 rounded-2xl bg-gradient-to-br from-secondary to-white border border-primary/10 flex items-center justify-center text-5xl">
                {item.visual}
              </div>
              <div className="mt-4">
                <span className="inline-flex rounded-full px-3 py-1 text-xs font-semibold bg-primary/10 text-primary">
                  {item.tag}
                </span>
                <h2 className="mt-3 text-lg font-bold text-neutral-900">{item.title}</h2>
                <p className="mt-2 text-sm text-neutral-600">
                  Interested in this talent? Contact Alwan and we&apos;ll connect you with verified details.
                </p>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 rounded-3xl border border-primary/20 bg-white p-6 md:p-8">
          <h3 className="text-xl md:text-2xl font-bold text-neutral-900">Want to know who made a piece?</h3>
          <p className="mt-2 text-neutral-600">
            Reach out to Alwan and share the talent title. We&apos;ll help you with availability, pricing, and next steps.
          </p>
          <a
            href="https://wa.me/923133457485"
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