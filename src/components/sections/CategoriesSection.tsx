/* ──────────────────────────────────────────────
 *  Categories Section – Enhanced with floating
 *  shapes, 3D tilt cards, animated icons.
 * ────────────────────────────────────────────── */
"use client";

import { motion } from "framer-motion";
import { categories } from "@/lib/data";
import SectionHeading from "@/components/ui/SectionHeading";
import FadeInOnScroll from "@/components/animations/FadeInOnScroll";
import StaggerChildren, {
  StaggerItem,
} from "@/components/animations/StaggerChildren";
import FloatingShapes from "@/components/animations/FloatingShapes";
import Link from "next/link";

export default function CategoriesSection() {
  return (
    <section id="categories" className="relative section-padding bg-white overflow-hidden" aria-label="Categories">
      {/* Floating background shapes */}
      <FloatingShapes variant="minimal" />

      <div className="container-custom relative z-10">
        <FadeInOnScroll>
          <SectionHeading
            title="Explore Categories"
            subtitle="Discover talented women creators across diverse skill categories"
          />
        </FadeInOnScroll>

        <StaggerChildren className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {categories.map((cat, idx) => (
            <StaggerItem key={cat.id}>
              <Link href={`/explore?category=${encodeURIComponent(cat.name)}`}>
                <motion.div
                  whileHover={{
                    y: -10,
                    scale: 1.04,
                    rotateY: 5,
                    rotateX: -3,
                  }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="group relative p-6 rounded-3xl bg-white/80 backdrop-blur-sm hover:bg-white border border-neutral-100 hover:border-primary/20 text-center transition-all duration-500 cursor-pointer shadow-soft hover:shadow-card-hover perspective-container"
                  style={{ transformStyle: "preserve-3d" }}
                >
                  {/* Animated glow on hover */}
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/0 to-accent-gold/0 group-hover:from-primary/[0.03] group-hover:to-accent-gold/[0.03] transition-all duration-500" />

                  {/* Floating animated ring behind icon */}
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20 + idx * 3, repeat: Infinity, ease: "linear" }}
                    className="absolute top-3 left-1/2 -translate-x-1/2 w-16 h-16 rounded-full border border-dashed border-primary/[0.08] group-hover:border-primary/20 transition-colors"
                  />

                  {/* Category Icon with bounce */}
                  <motion.span
                    className="text-4xl block mb-3 relative z-10"
                    whileHover={{ scale: 1.3, rotate: [0, -10, 10, 0] }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    {cat.icon}
                  </motion.span>

                  <h3 className="font-semibold text-neutral-800 group-hover:text-primary transition-colors relative z-10">
                    {cat.name}
                  </h3>
                  <p className="text-xs text-neutral-400 mt-1 relative z-10">
                    {cat.count} services
                  </p>

                  {/* Bottom accent line */}
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-primary group-hover:w-2/3 transition-all duration-500 rounded-full" />
                </motion.div>
              </Link>
            </StaggerItem>
          ))}
        </StaggerChildren>
      </div>
    </section>
  );
}
