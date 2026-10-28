import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Under Development",
  description:
    "This section of Alwan is currently under development. Please check back soon.",
};

export default function UnderDevelopmentPage() {
  return (
    <section className="min-h-screen bg-gradient-to-b from-white via-secondary/10 to-white pt-28 pb-16 flex items-center">
      <div className="container-custom">
        <div className="mx-auto grid max-w-5xl gap-6 rounded-[2.5rem] border border-primary/10 bg-white shadow-card p-6 md:p-8 lg:grid-cols-[1.2fr_0.8fr] lg:p-10">
          <div className="rounded-[2rem] bg-gradient-to-br from-primary/8 via-white to-secondary/30 p-6 md:p-8">
            <p className="text-xs uppercase tracking-[0.3em] font-semibold text-primary">
              Under development
            </p>
            <h1 className="mt-3 text-3xl md:text-5xl font-extrabold text-neutral-900 leading-tight font-heading">
              This page is being thoughtfully built.
            </h1>
            <p className="mt-4 max-w-2xl text-neutral-600 md:text-lg leading-relaxed">
              We&apos;re polishing this section so it feels as premium as the rest of Alwan. Thanks for your patience. The finished version is on the way.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <Link
                href="/"
                className="inline-flex items-center justify-center rounded-2xl bg-gradient-primary px-6 py-3 font-semibold text-white shadow-glow transition-transform hover:scale-[1.01]"
              >
                Go Home
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-2xl border border-primary/20 bg-white px-6 py-3 font-semibold text-primary transition-colors hover:bg-primary/5"
              >
                Contact Support
              </Link>
            </div>
          </div>

          <div className="space-y-4">
            {[
              {
                title: "Clean layout",
                text: "Spacing, alignment, and hierarchy are being tuned for phone and desktop.",
              },
              {
                title: "Better content",
                text: "We&apos;re replacing placeholder blocks with polished, platform-specific content.",
              },
              {
                title: "Improved experience",
                text: "The finished page will feel more deliberate, readable, and friendly.",
              },
            ].map((item) => (
              <article
                key={item.title}
                className="rounded-3xl border border-neutral-200 bg-neutral-50 p-5 shadow-soft"
              >
                <p className="text-sm font-semibold text-primary">{item.title}</p>
                <p className="mt-2 text-sm leading-relaxed text-neutral-600">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
