"use client";

import { FormEvent, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { siteConfig } from "@/lib/siteConfig";

type FormState = {
  name: string;
  email: string;
  message: string;
};

type FormErrors = Partial<Record<keyof FormState, string>>;

export default function ContactPageClient() {
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const validate = () => {
    const nextErrors: FormErrors = {};
    if (form.name.trim().length < 3) nextErrors.name = "Please enter your full name.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) nextErrors.email = "Please enter a valid email address.";
    if (form.message.trim().length < 20) nextErrors.message = "Please share a little more detail.";
    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    if (!validate()) return;
    setSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1200));
    setSubmitting(false);
    setSubmitted(true);
  };

  return (
    <section className="bg-gradient-to-b from-white via-secondary/10 to-white pt-28 pb-16">
      <div className="container-custom">
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-[2rem] border border-primary/10 bg-white shadow-card p-6 md:p-8 lg:p-10">
            <p className="text-xs uppercase tracking-[0.3em] font-semibold text-primary">
              Contact Alwan
            </p>
            <h1 className="mt-3 text-3xl md:text-5xl font-extrabold text-neutral-900 leading-tight font-heading">
              Reach out with confidence.
            </h1>
            <p className="mt-4 max-w-2xl text-neutral-600 md:text-lg leading-relaxed">
              Whether you are a creator, customer, or partner, we want to make it easy to start the right conversation.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a
                href={siteConfig.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-2xl bg-[#25D366] px-6 py-3 font-semibold text-white shadow-lg transition-transform hover:scale-[1.01]"
              >
                WhatsApp Support
              </a>
              <Link
                href="/join"
                className="inline-flex items-center justify-center rounded-2xl border border-primary/20 bg-white px-6 py-3 font-semibold text-primary transition-colors hover:bg-primary/5"
              >
                Become a Creator
              </Link>
            </div>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {[
                {
                  title: "Creators",
                  text: "Ask about profiles, listings, pricing, or how to improve visibility.",
                },
                {
                  title: "Customers",
                  text: "Need help with an order, policy, or creator question? We can guide you.",
                },
                {
                  title: "Partnerships",
                  text: "Brand, press, and collaboration inquiries are welcome.",
                },
                {
                  title: "Response time",
                  text: "We aim to reply as quickly as possible during active support hours.",
                },
              ].map((item) => (
                <article key={item.title} className="rounded-3xl border border-neutral-200 bg-neutral-50 p-5">
                  <p className="text-sm font-semibold text-primary">{item.title}</p>
                  <p className="mt-2 text-sm leading-relaxed text-neutral-600">{item.text}</p>
                </article>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <motion.form
              onSubmit={handleSubmit}
              className="rounded-[2rem] border border-neutral-200 bg-white shadow-soft p-6 md:p-8"
            >
              <p className="text-xs uppercase tracking-[0.3em] font-semibold text-primary">
                Send a message
              </p>
              <div className="mt-5 space-y-5">
                <div>
                  <label htmlFor="contact-name" className="block text-sm font-semibold text-neutral-700">
                    Full name
                  </label>
                  <input
                    id="contact-name"
                    value={form.name}
                    onChange={(event) => setForm((current) => ({ ...current, name: event.target.value }))}
                    className="mt-2 w-full rounded-2xl border border-neutral-200 px-4 py-3 outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
                    placeholder="Your name"
                  />
                  {errors.name && <p className="mt-2 text-sm text-red-500">{errors.name}</p>}
                </div>
                <div>
                  <label htmlFor="contact-email" className="block text-sm font-semibold text-neutral-700">
                    Email address
                  </label>
                  <input
                    id="contact-email"
                    value={form.email}
                    onChange={(event) => setForm((current) => ({ ...current, email: event.target.value }))}
                    className="mt-2 w-full rounded-2xl border border-neutral-200 px-4 py-3 outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
                    placeholder="you@example.com"
                  />
                  {errors.email && <p className="mt-2 text-sm text-red-500">{errors.email}</p>}
                </div>
                <div>
                  <label htmlFor="contact-message" className="block text-sm font-semibold text-neutral-700">
                    Message
                  </label>
                  <textarea
                    id="contact-message"
                    rows={5}
                    value={form.message}
                    onChange={(event) => setForm((current) => ({ ...current, message: event.target.value }))}
                    className="mt-2 w-full rounded-2xl border border-neutral-200 px-4 py-3 outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
                    placeholder="Tell us how we can help..."
                  />
                  {errors.message && <p className="mt-2 text-sm text-red-500">{errors.message}</p>}
                </div>
              </div>
              <div className="mt-6 flex flex-col sm:flex-row gap-3">
                <button
                  type="submit"
                  disabled={submitting}
                  className="inline-flex items-center justify-center rounded-2xl bg-gradient-primary px-6 py-3 font-semibold text-white disabled:opacity-60"
                >
                  {submitting ? "Sending..." : "Send message"}
                </button>
                <Link
                  href="/faqs"
                  className="inline-flex items-center justify-center rounded-2xl border border-primary/20 bg-white px-6 py-3 font-semibold text-primary"
                >
                  Browse FAQs
                </Link>
              </div>
            </motion.form>

            <div className="rounded-[2rem] border border-neutral-200 bg-white shadow-soft p-6 md:p-8">
              <p className="text-xs uppercase tracking-[0.3em] font-semibold text-primary">
                Support details
              </p>
              <div className="mt-5 space-y-4 text-sm text-neutral-700">
                <p><span className="font-semibold text-neutral-900">Email:</span> {siteConfig.email}</p>
                <p><span className="font-semibold text-neutral-900">Website:</span> {siteConfig.website}</p>
                <p><span className="font-semibold text-neutral-900">WhatsApp:</span> +92 313 3457485</p>
              </div>
            </div>

            <div className="rounded-[2rem] border border-primary/10 bg-secondary/20 p-6 md:p-8 shadow-soft">
              <p className="text-xs uppercase tracking-[0.3em] font-semibold text-primary">
                Map placeholder
              </p>
              <div className="mt-4 flex h-56 items-center justify-center rounded-3xl border border-dashed border-primary/20 bg-white text-center text-sm text-neutral-500">
                Future map location for Alwan headquarters or support office.
              </div>
            </div>
          </div>
        </div>

        <AnimatePresence>
          {submitted && (
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 12 }}
              className="mt-6 rounded-[2rem] border border-emerald-200 bg-emerald-50 p-5 text-emerald-900 shadow-soft"
            >
              Thanks. Your message has been sent successfully. We&apos;ll get back to you soon.
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
