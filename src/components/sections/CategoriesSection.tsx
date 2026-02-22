/* ──────────────────────────────────────────────
 *  Categories Section – Featured skill categories
 *  Displays category cards with icons and counts.
 *  
 *  CUSTOMIZE:
 *  - Edit categories in src/lib/data.ts
 *  - Change grid columns in className
 * ────────────────────────────────────────────── */
"use client";

import { motion } from "framer-motion";
import { categories } from "@/lib/data";
import SectionHeading from "@/components/ui/SectionHeading";
import FadeInOnScroll from "@/components/animations/FadeInOnScroll";
import StaggerChildren, {
  StaggerItem,
} from "@/components/animations/StaggerChildren";
import Link from "next/link";

export default function CategoriesSection() {
  return (
    <section id="categories" className="section-padding bg-white" aria-label="Categories">
      <div className="container-custom">
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
                  whileHover={{ y: -6, scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="group relative p-6 rounded-3xl bg-secondary/40 hover:bg-white hover:shadow-card-hover border border-transparent hover:border-primary/10 text-center transition-all duration-300 cursor-pointer"
                >
                  {/* Category Icon (replace with custom SVGs/images) */}
                  <span className="text-4xl block mb-3">{cat.icon}</span>
                  <h3 className="font-semibold text-neutral-800 group-hover:text-primary transition-colors">
                    {cat.name}
                  </h3>
                  <p className="text-xs text-neutral-400 mt-1">
                    {cat.count} services
                  </p>
                </motion.div>
              </Link>
            </StaggerItem>
          ))}
        </StaggerChildren>
      </div>
    </section>
  );
}
