import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Under Development",
  description:
    "This section of Alwan is currently under development. Please check back soon.",
};

export default function UnderDevelopmentPage() {
  return (
    <section className="min-h-[70vh] flex items-center justify-center bg-gradient-to-b from-white to-secondary/20">
      <div className="container-custom">
        <div className="max-w-2xl mx-auto text-center rounded-3xl bg-white border border-primary/10 shadow-card p-8 md:p-12">
          <div className="text-5xl" aria-hidden="true">🛠️</div>
          <h1 className="mt-4 text-3xl md:text-4xl font-extrabold text-neutral-900">
            This section is under development
          </h1>
          <p className="mt-4 text-neutral-600">
            We&apos;re actively building this part of Alwan to make your experience
            better. Thanks for your patience — exciting updates are coming soon!
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              href="/"
              className="px-6 py-3 rounded-2xl bg-gradient-primary text-white font-semibold"
            >
              Go Home
            </Link>
            <Link
              href="/explore"
              className="px-6 py-3 rounded-2xl border border-primary text-primary font-semibold"
            >
              Explore Marketplace
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
