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
      className="section-padding text-white"
      style={{ backgroundColor: '#B4127B' }}
      aria-label="How It Works"
    >
      <div className="container-custom">
        <FadeInOnScroll>
          <SectionHeading
            title="How It Works"
            subtitle="Start your journey in four simple steps"
          />
        </FadeInOnScroll>

        <StaggerChildren className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8 md:gap-10 relative">
          {/* Connecting line (desktop only) */}
          <div className="hidden xl:block absolute top-24 left-[10%] right-[10%] h-0.5 bg-gradient-to-r from-white/20 via-white/40 to-white/20" />

          {howItWorksSteps.map((step) => (
            <StaggerItem key={step.step}>
              <motion.div
                whileHover={{ y: -10, rotateX: 2, rotateY: -2 }}
                className="relative overflow-visible text-center p-8 rounded-3xl bg-white shadow-card hover:shadow-card-hover transition-all duration-500 border border-transparent hover:border-white/20 text-neutral-900"
              >
                {/* Large faded background number (journey style) */}
                <span
                  aria-hidden="true"
                  className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-[7.5rem] md:text-[8.5rem] leading-none font-extrabold text-neutral-900/[0.04] select-none pointer-events-none"
                >
                  {step.step}
                </span>

                {/* Step Number Circle */}
                <div className="absolute -top-5 left-1/2 -translate-x-1/2 w-11 h-11 rounded-full bg-white text-[#B4127B] text-base font-bold flex items-center justify-center shadow-glow border-2 border-[#B4127B]">
                  {step.step}
                </div>

                {/* Journey pulse ring around step circle */}
                <div className="absolute -top-5 left-1/2 -translate-x-1/2 w-11 h-11 rounded-full border border-white/40 animate-ping" />

                {/* Title */}
                <h3 className="relative z-10 text-xl font-bold text-neutral-900 mb-3">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="relative z-10 text-neutral-600 text-sm leading-relaxed">
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