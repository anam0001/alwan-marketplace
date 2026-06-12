"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

export type FaqItem = {
  question: string;
  answer: string;
  category: string;
  popular?: boolean;
};

type FaqExplorerProps = {
  title: string;
  summary: string;
  items: FaqItem[];
};

const categories = [
  "All Questions",
  "Creators",
  "Customers",
  "Payments",
  "Security",
  "Policies",
  "Account Management",
];

function matchesCategory(item: FaqItem, tab: string) {
  if (tab === "All Questions") return true;
  return item.category === tab;
}

export default function FaqExplorer({ title, summary, items }: FaqExplorerProps) {
  const [query, setQuery] = useState("");
  const [activeTab, setActiveTab] = useState("All Questions");
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const filteredItems = useMemo(() => {
    const q = query.trim().toLowerCase();
    return items.filter((item) => {
      const inTab = matchesCategory(item, activeTab);
      const inQuery =
        q.length === 0 ||
        item.question.toLowerCase().includes(q) ||
        item.answer.toLowerCase().includes(q);
      return inTab && inQuery;
    });
  }, [activeTab, items, query]);

  const popularItems = useMemo(
    () => items.filter((item) => item.popular).slice(0, 4),
    [items]
  );

  return (
    <section className="bg-gradient-to-b from-white via-secondary/10 to-white pt-28 pb-16">
      <div className="container-custom">
        <div className="rounded-[2rem] border border-primary/10 bg-white shadow-card p-6 md:p-8 lg:p-10">
          <p className="text-xs uppercase tracking-[0.3em] font-semibold text-primary">
            Help Center
          </p>
          <h1 className="mt-3 text-3xl md:text-5xl font-extrabold text-neutral-900 leading-tight font-heading">
            {title}
          </h1>
          <p className="mt-4 max-w-3xl text-neutral-600 md:text-lg leading-relaxed">
            {summary}
          </p>

          <div className="mt-8 grid gap-4 lg:grid-cols-[minmax(0,1fr)_280px]">
            <div className="rounded-3xl border border-primary/10 bg-secondary/20 p-4">
              <label htmlFor="faq-search" className="block text-sm font-semibold text-neutral-800">
                Search questions
              </label>
              <input
                id="faq-search"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Search by keyword, topic, or policy"
                className="mt-3 w-full rounded-2xl border border-neutral-200 bg-white px-4 py-3 text-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
              />
              <div className="mt-3 flex flex-wrap gap-2">
                {categories.map((category) => {
                  const active = category === activeTab;
                  return (
                    <button
                      key={category}
                      onClick={() => setActiveTab(category)}
                      className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
                        active
                          ? "bg-primary text-white shadow-glow"
                          : "bg-white text-neutral-700 border border-neutral-200 hover:border-primary/20 hover:text-primary"
                      }`}
                    >
                      {category}
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="rounded-3xl border border-primary/10 bg-white p-5 shadow-soft">
              <p className="text-xs uppercase tracking-[0.25em] font-semibold text-primary">
                Quick help
              </p>
              <p className="mt-2 text-sm text-neutral-600 leading-relaxed">
                Need a human? We’ll get you to the right place quickly.
              </p>
              <div className="mt-4 space-y-3">
                <Link
                  href="/contact"
                  className="block rounded-2xl bg-gradient-primary px-4 py-3 text-center font-semibold text-white"
                >
                  Contact Support
                </Link>
                <Link
                  href="/join"
                  className="block rounded-2xl border border-primary/20 bg-white px-4 py-3 text-center font-semibold text-primary"
                >
                  Become a Creator
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-8 xl:grid-cols-[minmax(0,1fr)_280px]">
          <div className="space-y-8">
            <section className="rounded-[2rem] border border-neutral-200 bg-white p-6 md:p-8 shadow-soft">
              <p className="text-xs uppercase tracking-[0.25em] font-semibold text-primary">
                Most Popular Questions
              </p>
              <div className="mt-5 grid gap-4 md:grid-cols-2">
                {popularItems.map((item) => (
                  <button
                    key={item.question}
                    onClick={() => {
                      const index = filteredItems.findIndex(
                        (entry) => entry.question === item.question
                      );
                      setOpenIndex(index >= 0 ? index : 0);
                      setActiveTab("All Questions");
                      setQuery("");
                    }}
                    className="rounded-2xl border border-primary/10 bg-secondary/20 p-4 text-left transition hover:-translate-y-0.5 hover:shadow-card"
                  >
                    <p className="text-sm font-semibold text-primary">Popular</p>
                    <p className="mt-2 font-semibold text-neutral-900">
                      {item.question}
                    </p>
                    <p className="mt-2 text-sm text-neutral-600 line-clamp-2">
                      {item.answer}
                    </p>
                  </button>
                ))}
              </div>
            </section>

            <div className="space-y-4">
              {filteredItems.length === 0 ? (
                <div className="rounded-[2rem] border border-neutral-200 bg-white p-8 text-center shadow-soft">
                  <p className="text-lg font-semibold text-neutral-900">No matching questions</p>
                  <p className="mt-2 text-neutral-600">
                    Try a different search term or switch to another category.
                  </p>
                </div>
              ) : (
                filteredItems.map((item, index) => {
                  const isOpen = openIndex === index;
                  return (
                    <motion.article
                      key={`${item.category}-${item.question}`}
                      initial={{ opacity: 0, y: 12 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      className="rounded-[2rem] border border-neutral-200 bg-white shadow-soft overflow-hidden"
                    >
                      <button
                        type="button"
                        onClick={() => setOpenIndex(isOpen ? null : index)}
                        className="flex w-full items-center justify-between gap-4 px-5 py-5 md:px-7 md:py-6 text-left hover:bg-primary/5 transition-colors"
                        aria-expanded={isOpen}
                      >
                        <div>
                          <p className="text-xs uppercase tracking-[0.25em] font-semibold text-primary">
                            {item.category}
                          </p>
                          <h2 className="mt-1 text-lg md:text-xl font-bold text-neutral-900 font-heading">
                            {item.question}
                          </h2>
                        </div>
                        <span className="text-2xl font-light text-primary" aria-hidden="true">
                          {isOpen ? "−" : "+"}
                        </span>
                      </button>

                      <AnimatePresence initial={false}>
                        {isOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.28 }}
                            className="overflow-hidden"
                          >
                            <div className="px-5 pb-5 md:px-7 md:pb-7">
                              <div className="h-px bg-neutral-200" />
                              <p className="mt-5 text-[15px] md:text-base leading-relaxed text-neutral-600">
                                {item.answer}
                              </p>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.article>
                  );
                })
              )}
            </div>
          </div>

          <aside className="lg:sticky lg:top-28 self-start rounded-[2rem] border border-neutral-200 bg-white p-5 shadow-soft">
            <p className="text-xs uppercase tracking-[0.25em] font-semibold text-primary">
              Support shortcuts
            </p>
            <div className="mt-4 space-y-3">
              <Link href="/contact" className="block rounded-2xl border border-primary/10 bg-secondary/20 px-4 py-3 font-semibold text-neutral-800 hover:border-primary/20 hover:text-primary transition-colors">
                Contact support
              </Link>
              <Link href="/privacy-policy" className="block rounded-2xl border border-primary/10 bg-secondary/20 px-4 py-3 font-semibold text-neutral-800 hover:border-primary/20 hover:text-primary transition-colors">
                Privacy policy
              </Link>
              <Link href="/refund-policy" className="block rounded-2xl border border-primary/10 bg-secondary/20 px-4 py-3 font-semibold text-neutral-800 hover:border-primary/20 hover:text-primary transition-colors">
                Refund policy
              </Link>
              <Link href="/terms-and-conditions" className="block rounded-2xl border border-primary/10 bg-secondary/20 px-4 py-3 font-semibold text-neutral-800 hover:border-primary/20 hover:text-primary transition-colors">
                Terms & conditions
              </Link>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
