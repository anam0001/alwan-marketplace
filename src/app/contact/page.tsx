import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Alwan",
  description:
    "Reach Alwan for support, creator help, and partnership questions.",
};

export default function ContactPage() {
  return (
    <section className="min-h-screen bg-gradient-to-b from-white to-secondary/20 pt-28 pb-16">
      <div className="container-custom">
        <div className="max-w-5xl mx-auto rounded-[2rem] border border-primary/10 bg-white shadow-card p-6 md:p-10 lg:p-12">
          <p className="text-xs uppercase tracking-[0.25em] font-semibold text-primary">
            Contact Alwan
          </p>
          <h1 className="mt-3 text-3xl md:text-5xl font-extrabold text-neutral-900 leading-tight">
            Need help? Reach us through the fastest channel available.
          </h1>
          <p className="mt-4 text-neutral-600 md:text-lg leading-relaxed max-w-3xl">
            Whether you are a creator, a customer, or a partner, we want to make it easy to get in touch and get a useful response.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a
              href="https://wa.me/923133457485"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-2xl bg-[#25D366] px-6 py-3 font-semibold text-white shadow-lg transition-transform hover:scale-[1.01]"
            >
              Contact on WhatsApp
            </a>
            <Link
              href="/join"
              className="inline-flex items-center justify-center rounded-2xl border border-primary/20 bg-white px-6 py-3 font-semibold text-primary transition-colors hover:bg-primary/5"
            >
              Become a Creator
            </Link>
          </div>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">
          {[
            {
              title: "For creators",
              text: "Use your creator profile to receive booking inquiries, pricing questions, and order requests.",
            },
            {
              title: "For customers",
              text: "If a creator page or policy page leaves you unsure, send us a message and we’ll guide you.",
            },
            {
              title: "For partnerships",
              text: "Press, collaborations, and business opportunities can start with a WhatsApp message for now.",
            },
            {
              title: "Typical response",
              text: "We aim to reply as quickly as possible during active hours and keep the experience friendly and clear.",
            },
          ].map((item) => (
            <article
              key={item.title}
              className="rounded-[2rem] border border-neutral-200 bg-white p-6 md:p-8 shadow-soft"
            >
              <h2 className="text-xl font-bold text-neutral-900">{item.title}</h2>
              <p className="mt-3 text-neutral-600 leading-relaxed">{item.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}