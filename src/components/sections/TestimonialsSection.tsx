/* ──────────────────────────────────────────────
 *  Testimonials Section – User reviews carousel
 *  
 *  CUSTOMIZE:
 *  - Edit testimonials in src/lib/data.ts
 *  - Replace placeholder images
 * ────────────────────────────────────────────── */
"use client";

import { motion } from "framer-motion";
import { testimonials } from "@/lib/data";
import SectionHeading from "@/components/ui/SectionHeading";
import FadeInOnScroll from "@/components/animations/FadeInOnScroll";
import StaggerChildren, {
  StaggerItem,
} from "@/components/animations/StaggerChildren";
import RatingStars from "@/components/ui/RatingStars";
import { getInitials } from "@/lib/utils";

export default function TestimonialsSection() {
  return (
    <section
      className="section-padding bg-gradient-to-b from-secondary/30 to-white"
      aria-label="Testimonials"
    >
      <div className="container-custom">
        <FadeInOnScroll>
          <SectionHeading
            title="What People Say"
            subtitle="Hear from our community of creators and customers"
          />
        </FadeInOnScroll>

        <StaggerChildren className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((t) => (
            <StaggerItem key={t.id}>
              <motion.blockquote
                whileHover={{ y: -6, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="relative p-8 rounded-3xl bg-white shadow-card hover:shadow-card-hover transition-all duration-500"
              >
                {/* Quotation mark decoration */}
                <span className="absolute top-4 right-6 text-6xl text-primary/10 font-serif leading-none select-none">
                  &ldquo;
                </span>

                {/* Rating */}
                <RatingStars rating={t.rating} size="md" />

                {/* Quote text */}
                <p className="mt-4 text-neutral-600 text-sm leading-relaxed italic">
                  &ldquo;{t.content}&rdquo;
                </p>

                {/* Author */}
                <div className="mt-6 flex items-center gap-3">
                  {/* Avatar placeholder */}
                  <div className="w-10 h-10 rounded-full bg-gradient-primary text-white flex items-center justify-center text-sm font-bold">
                    {getInitials(t.name)}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-neutral-800">
                      {t.name}
                    </p>
                    <p className="text-xs text-neutral-400">
                      {t.role} • {t.city}
                    </p>
                  </div>
                </div>
              </motion.blockquote>
            </StaggerItem>
          ))}
        </StaggerChildren>
      </div>
    </section>
  );
}
