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
          {categories.map((cat) => (
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
                  className="group relative min-h-[220px] overflow-hidden rounded-3xl bg-neutral-900 text-left transition-all duration-500 cursor-pointer shadow-soft hover:shadow-card-hover perspective-container"
                  style={{ transformStyle: "preserve-3d" }}
                >
                  <img src={cat.image} alt={`${cat.name} category`} className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent transition group-hover:from-primary/80" />
                  <div className="absolute inset-x-0 bottom-0 z-10 p-5 transition duration-300 group-hover:-translate-y-1">
                    <h3 className="text-xl font-bold text-white">{cat.name}</h3>
                    <p className="mt-1 max-h-0 overflow-hidden text-sm text-white/85 opacity-0 transition-all duration-300 group-hover:max-h-10 group-hover:opacity-100">Explore real creators and listings in this category.</p>
                  </div>
                </motion.div>
              </Link>
            </StaggerItem>
          ))}
        </StaggerChildren>
      </div>
    </section>
  );
}
