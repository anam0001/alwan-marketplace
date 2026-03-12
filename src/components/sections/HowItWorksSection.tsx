/* ──────────────────────────────────────────────
 *  How It Works Section – 3-step process
 *  
 *  CUSTOMIZE:
 *  - Edit steps in src/lib/data.ts → howItWorksSteps
 *  - Change icons (replace emoji with SVG)
 * ────────────────────────────────────────────── */
"use client";

import { motion } from "framer-motion";
import { howItWorksSteps } from "@/lib/data";
import SectionHeading from "@/components/ui/SectionHeading";
import FadeInOnScroll from "@/components/animations/FadeInOnScroll";
import StaggerChildren, {
  StaggerItem,
} from "@/components/animations/StaggerChildren";

export default function HowItWorksSection() {
  return (
    <section
      id="how-it-works"
      className="section-padding bg-gradient-to-b from-white to-secondary/30"
      aria-label="How It Works"
    >
      <div className="container-custom">
        <FadeInOnScroll>
          <SectionHeading
            title="How It Works"
            subtitle="Start your journey in three simple steps"
          />
        </FadeInOnScroll>

        <StaggerChildren className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 relative">
          {/* Connecting line (desktop only) */}
          <div className="hidden md:block absolute top-24 left-[16%] right-[16%] h-0.5 bg-gradient-to-r from-primary/20 via-accent-gold/40 to-primary/20" />

          {howItWorksSteps.map((step) => (
            <StaggerItem key={step.step}>
              <motion.div
                whileHover={{ y: -10, rotateX: 2, rotateY: -2 }}
                className="relative overflow-hidden text-center p-8 rounded-3xl bg-white shadow-card hover:shadow-card-hover transition-all duration-500 border border-transparent hover:border-primary/10"
              >
                {/* Large faded background number (journey style) */}
                <span
                  aria-hidden="true"
                  className="absolute -right-3 -top-9 text-[8rem] leading-none font-extrabold text-primary/[0.06] select-none"
                >
                  {step.step}
                </span>

                {/* Step Number Circle */}
                <div className="absolute -top-5 left-1/2 -translate-x-1/2 w-11 h-11 rounded-full bg-gradient-to-br from-primary to-primary-dark text-white text-base font-bold flex items-center justify-center shadow-glow border-2 border-white">
                  {step.step}
                </div>

                {/* Journey pulse ring around step circle */}
                <div className="absolute -top-5 left-1/2 -translate-x-1/2 w-11 h-11 rounded-full border border-primary/30 animate-ping" />

                {/* Icon */}
                <div className="text-5xl mb-4 mt-4 animate-float-slow">{step.icon}</div>

                {/* Title */}
                <h3 className="text-xl font-bold text-neutral-900 mb-3">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="text-neutral-500 text-sm leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerChildren>
      </div>
    </section>
  );
}
