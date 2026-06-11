import Link from "next/link";

type InfoSection = {
  title: string;
  paragraphs: string[];
  bullets?: string[];
};

type InfoPageProps = {
  eyebrow?: string;
  title: string;
  summary: string;
  updatedLabel?: string;
  sections: InfoSection[];
  primaryCta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
};

export default function InfoPage({
  eyebrow,
  title,
  summary,
  updatedLabel,
  sections,
  primaryCta,
  secondaryCta,
}: InfoPageProps) {
  return (
    <section className="min-h-screen bg-gradient-to-b from-white to-secondary/20 pt-28 pb-16">
      <div className="container-custom">
        <div className="max-w-5xl mx-auto rounded-[2rem] border border-primary/10 bg-white shadow-card p-6 md:p-10 lg:p-12">
          {eyebrow && (
            <p className="text-xs uppercase tracking-[0.25em] font-semibold text-primary">
              {eyebrow}
            </p>
          )}

          <div className="mt-3 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div className="max-w-3xl">
              <h1 className="text-3xl md:text-5xl font-extrabold text-neutral-900 leading-tight">
                {title}
              </h1>
              <p className="mt-4 text-neutral-600 md:text-lg leading-relaxed">
                {summary}
              </p>
            </div>

            {updatedLabel && (
              <div className="inline-flex items-center rounded-full bg-secondary px-4 py-2 text-sm font-semibold text-primary self-start">
                {updatedLabel}
              </div>
            )}
          </div>

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

        <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">
          {sections.map((section) => (
            <article
              key={section.title}
              className="rounded-[2rem] border border-neutral-200 bg-white p-6 md:p-8 shadow-soft"
            >
              <h2 className="text-xl md:text-2xl font-bold text-neutral-900">
                {section.title}
              </h2>
              <div className="mt-4 space-y-4 text-neutral-600 leading-relaxed">
                {section.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
              {section.bullets && section.bullets.length > 0 && (
                <ul className="mt-5 space-y-3 text-neutral-700">
                  {section.bullets.map((bullet) => (
                    <li key={bullet} className="flex gap-3">
                      <span className="mt-1 inline-flex h-5 w-5 flex-none items-center justify-center rounded-full bg-primary/10 text-xs font-bold text-primary">
                        ✓
                      </span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}