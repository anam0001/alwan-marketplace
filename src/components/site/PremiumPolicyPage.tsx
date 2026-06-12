"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

export type PolicySection = {
  title: string;
  paragraphs: string[];
  bullets?: string[];
};

export type PolicyCard = {
  title: string;
  description: string;
};

type PremiumPolicyPageProps = {
  eyebrow: string;
  title: string;
  summary: string;
  updatedLabel: string;
  readingTime: string;
  cards?: PolicyCard[];
  sections: PolicySection[];
  primaryCta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
};

function slugify(value: string, index: number) {
  return `${value}`
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "") || `section-${index + 1}`;
}

export default function PremiumPolicyPage({
  eyebrow,
  title,
  summary,
  updatedLabel,
  readingTime,
  cards = [],
  sections,
  primaryCta,
  secondaryCta,
}: PremiumPolicyPageProps) {
  const sectionIds = useMemo(
    () => sections.map((section, index) => slugify(section.title, index)),
    [sections]
  );
  const [activeId, setActiveId] = useState(sectionIds[0] ?? "");
  const [progress, setProgress] = useState(0);
  const [openMap, setOpenMap] = useState<Record<string, boolean>>(() => {
    const initial: Record<string, boolean> = {};
    sectionIds.forEach((id) => {
      initial[id] = true;
    });
    return initial;
  });

  useEffect(() => {
    const updateProgress = () => {
      const scrollTop = window.scrollY;
      const scrollable = document.documentElement.scrollHeight - window.innerHeight;
      const value = scrollable > 0 ? Math.min(100, Math.max(0, (scrollTop / scrollable) * 100)) : 0;
      setProgress(value);
    };

    updateProgress();
    window.addEventListener("scroll", updateProgress, { passive: true });
    window.addEventListener("resize", updateProgress);
    return () => {
      window.removeEventListener("scroll", updateProgress);
      window.removeEventListener("resize", updateProgress);
    };
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visible?.target.id) {
          setActiveId(visible.target.id);
        }
      },
      { rootMargin: "-20% 0px -55% 0px", threshold: [0.1, 0.25, 0.5] }
    );

    sectionIds.forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, [sectionIds]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (!element) return;
    setActiveId(id);
    setOpenMap((current) => ({ ...current, [id]: true }));
    element.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section className="bg-gradient-to-b from-white via-secondary/10 to-white pt-28 pb-16">
      <div className="container-custom">
        <div className="rounded-[2rem] border border-primary/10 bg-white/95 shadow-card p-6 md:p-8 lg:p-10">
          <div className="flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between">
            <div className="max-w-4xl">
              <p className="text-xs uppercase tracking-[0.3em] font-semibold text-primary">
                {eyebrow}
              </p>
              <h1 className="mt-3 text-3xl md:text-5xl font-extrabold text-neutral-900 leading-tight font-heading">
                {title}
              </h1>
              <p className="mt-4 max-w-3xl text-neutral-600 md:text-lg leading-relaxed font-body">
                {summary}
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-2 lg:w-[320px]">
              <div className="rounded-2xl border border-primary/10 bg-secondary/30 px-4 py-3">
                <p className="text-xs uppercase tracking-[0.2em] text-primary font-semibold">Last Updated</p>
                <p className="mt-1 text-sm font-semibold text-neutral-800">{updatedLabel}</p>
              </div>
              <div className="rounded-2xl border border-primary/10 bg-primary/5 px-4 py-3">
                <p className="text-xs uppercase tracking-[0.2em] text-primary font-semibold">Reading Time</p>
                <p className="mt-1 text-sm font-semibold text-neutral-800">{readingTime}</p>
              </div>
            </div>
          </div>

          {cards.length > 0 && (
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
              {cards.map((card) => (
                <motion.article
                  key={card.title}
                  whileHover={{ y: -4 }}
                  className="rounded-3xl border border-neutral-200 bg-white p-5 shadow-soft transition-shadow hover:shadow-card"
                >
                  <p className="text-xs uppercase tracking-[0.25em] text-primary font-semibold">
                    Alwan
                  </p>
                  <h2 className="mt-3 text-lg font-bold text-neutral-900">
                    {card.title}
                  </h2>
                  <p className="mt-2 text-sm leading-relaxed text-neutral-600">
                    {card.description}
                  </p>
                </motion.article>
              ))}
            </div>
          )}

          {(primaryCta || secondaryCta) && (
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              {primaryCta && (
                <Link
                  href={primaryCta.href}
                  className="inline-flex items-center justify-center rounded-2xl bg-gradient-primary px-6 py-3 font-semibold text-white shadow-glow transition-transform hover:scale-[1.01]"
                >
                  {primaryCta.label}
                </Link>
              )}
              {secondaryCta && (
                <Link
                  href={secondaryCta.href}
                  className="inline-flex items-center justify-center rounded-2xl border border-primary/20 bg-white px-6 py-3 font-semibold text-primary transition-colors hover:bg-primary/5"
                >
                  {secondaryCta.label}
                </Link>
              )}
            </div>
          )}
        </div>

        <div className="mt-6 rounded-full border border-primary/10 bg-white px-4 py-3 shadow-soft">
          <div className="flex items-center justify-between gap-4 text-sm">
            <span className="font-semibold text-neutral-700">Reading progress</span>
            <span className="font-semibold text-primary">{Math.round(progress)}%</span>
          </div>
          <div className="mt-3 h-2 rounded-full bg-neutral-100 overflow-hidden">
            <div
              className="h-full rounded-full bg-gradient-primary transition-all duration-300"
              style={{ width: `${progress}%` }}
              aria-hidden="true"
            />
          </div>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-[280px_minmax(0,1fr)]">
          <aside className="lg:sticky lg:top-28 self-start rounded-[2rem] border border-neutral-200 bg-white p-5 shadow-soft">
            <p className="text-xs uppercase tracking-[0.25em] font-semibold text-primary">
              Table of Contents
            </p>
            <div className="mt-4 space-y-2 max-h-[70vh] overflow-auto pr-1">
              {sections.map((section, index) => {
                const id = sectionIds[index];
                const isActive = activeId === id;
                return (
                  <button
                    key={section.title}
                    onClick={() => scrollToSection(id)}
                    className={`w-full text-left rounded-2xl px-4 py-3 transition-all duration-300 ${
                      isActive
                        ? "bg-primary text-white shadow-glow"
                        : "bg-neutral-50 text-neutral-700 hover:bg-primary/5 hover:text-primary"
                    }`}
                  >
                    <span className="block text-sm font-semibold leading-snug">
                      {section.title}
                    </span>
                  </button>
                );
              })}
            </div>
          </aside>

          <div className="space-y-5">
            {sections.map((section, index) => {
              const id = sectionIds[index];
              const isOpen = openMap[id] ?? true;
              return (
                <article
                  key={section.title}
                  id={id}
                  className="scroll-mt-32 rounded-[2rem] border border-neutral-200 bg-white shadow-soft overflow-hidden"
                >
                  <button
                    type="button"
                    onClick={() =>
                      setOpenMap((current) => ({ ...current, [id]: !isOpen }))
                    }
                    className="flex w-full items-center justify-between gap-4 px-5 py-4 md:px-7 md:py-5 text-left hover:bg-primary/5 transition-colors"
                    aria-expanded={isOpen}
                  >
                    <div>
                      <p className="text-xs uppercase tracking-[0.25em] font-semibold text-primary">
                        Section {index + 1}
                      </p>
                      <h2 className="mt-1 text-xl md:text-2xl font-bold text-neutral-900 font-heading">
                        {section.title}
                      </h2>
                    </div>
                    <span className="text-2xl font-light text-primary" aria-hidden="true">
                      {isOpen ? "−" : "+"}
                    </span>
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-5 md:px-7 md:pb-7">
                      <div className="h-px bg-neutral-200" />
                      <div className="mt-5 space-y-4 text-neutral-600 leading-relaxed">
                        {section.paragraphs.map((paragraph) => (
                          <p key={paragraph} className="text-[15px] md:text-base">
                            {paragraph}
                          </p>
                        ))}
                      </div>

                      {section.bullets && section.bullets.length > 0 && (
                        <ul className="mt-5 grid gap-3 sm:grid-cols-2">
                          {section.bullets.map((bullet) => (
                            <li
                              key={bullet}
                              className="rounded-2xl border border-primary/10 bg-secondary/20 px-4 py-3 text-sm text-neutral-700"
                            >
                              {bullet}
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  )}
                </article>
              );
            })}

            <div className="rounded-[2rem] border border-primary/10 bg-gradient-to-br from-primary/5 via-white to-secondary/20 p-6 md:p-8 shadow-card">
              <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                <div className="max-w-2xl">
                  <p className="text-xs uppercase tracking-[0.25em] font-semibold text-primary">
                    Need help with this policy?
                  </p>
                  <h3 className="mt-2 text-2xl font-bold text-neutral-900 font-heading">
                    Reach the Alwan support team.
                  </h3>
                  <p className="mt-2 text-neutral-600 leading-relaxed">
                    If anything here is unclear, we are happy to help clarify the policy or point you to the right next step.
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center rounded-2xl bg-gradient-primary px-5 py-3 font-semibold text-white"
                  >
                    Contact Support
                  </Link>
                  <Link
                    href="/faqs"
                    className="inline-flex items-center justify-center rounded-2xl border border-primary/20 bg-white px-5 py-3 font-semibold text-primary"
                  >
                    Browse FAQs
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
