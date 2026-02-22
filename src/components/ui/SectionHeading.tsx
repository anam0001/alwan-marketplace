/* ──────────────────────────────────────────────
 *  Section Heading – reusable section title block
 * ────────────────────────────────────────────── */

import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
}

export default function SectionHeading({
  title,
  subtitle,
  centered = true,
  className,
}: SectionHeadingProps) {
  return (
    <div className={cn(centered && "text-center", "mb-12 md:mb-16", className)}>
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-900">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-lg text-neutral-500 max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
      {/* Decorative underline */}
      <div
        className={cn(
          "mt-4 h-1 w-16 rounded-full bg-gradient-primary",
          centered && "mx-auto"
        )}
      />
    </div>
  );
}
