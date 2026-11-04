/* ──────────────────────────────────────────────
 *  How It Works Section – 3-step process
 *  Guides users through the onboarding steps.
 *  
 *  CUSTOMIZE:
 *  - Edit steps in src/lib/data.ts → howItWorksSteps
 *  - Adjust card styles and background colors below
 * ────────────────────────────────────────────── */
"use client";

import { motion } from "framer-motion";
import { howItWorksSteps } from "@/lib/data";
import FadeInOnScroll from "@/components/animations/FadeInOnScroll";
import StaggerChildren, {
  StaggerItem,
} from "@/components/animations/StaggerChildren";

export default function HowItWorksSection() {
  return (
    <section className="section-padding bg-white" aria-label="How It Works">
      <div className="container-custom">
        <FadeInOnScroll>
          <motion.div
            whileHover={{ scale: 1.01 }}
            transition={{ type: "spring", stiffness: 200 }}
            className="relative overflow-hidden rounded-[2rem] p-10 md:p-16 shadow-2xl text-white"
            style={{ backgroundColor: "#B4127B" }}
          >
            {/* ─── Decorative background shapes ─── */}
            <div className="absolute -top-20 -right-20 w-60 h-60 rounded-full bg-white/5 pointer-events-none" />
            <div className="absolute -bottom-16 -left-16 w-48 h-48 rounded-full bg-white/5 pointer-events-none" />
            <div className="absolute top-1/2 left-1/4 w-32 h-32 rounded-full bg-yellow-400/10 pointer-events-none" />

            {/* ─── Section Header ─── */}
            <div className="relative z-10 text-center mb-12 md:mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight font-heading text-white">
                How It Works
              </h2>
              <p className="mt-4 text-white/80 text-lg max-w-xl mx-auto">
                Start your journey in four simple steps
              </p>
            </div>

            {/* ─── Step Cards Grid ─── */}
            <div className="relative z-10">
              <StaggerChildren className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8 relative">
                {/* Connecting line (desktop only) */}
                <div className="hidden xl:block absolute top-24 left-[10%] right-[10%] h-0.5 bg-white/20" />

                {howItWorksSteps.map((step) => (
                  <StaggerItem key={step.step}>
                    <motion.div
                      whileHover={{ y: -10, rotateX: 3, rotateY: -3, scale: 1.02 }}
                      transition={{ type: "spring", stiffness: 300, damping: 20 }}
                      className="relative overflow-visible text-center p-8 rounded-3xl bg-white shadow-card hover:shadow-card-hover transition-all duration-500 border border-transparent hover:border-white/20 text-neutral-900 flex flex-col justify-between min-h-[260px]"
                    >
                      {/* Large faded background number (darkened contrast) */}
                      <span
                        aria-hidden="true"
                        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-[7rem] md:text-[8rem] leading-none font-extrabold text-[#B4127B]/[0.22] select-none pointer-events-none"
                      >
                        {step.step}
                      </span>

                      {/* Step Number Circle Badge */}
                      <div className="absolute -top-5 left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-[#B4127B] text-white text-lg font-bold flex items-center justify-center shadow-lg border-2 border-white">
                        {step.step}
                      </div>

                      {/* Pulse ring around step circle */}
                      <div className="absolute -top-5 left-1/2 -translate-x-1/2 w-12 h-12 rounded-full border border-white/60 animate-ping pointer-events-none" />

                      {/* Title */}
                      <h3 className="relative z-10 text-xl font-bold text-neutral-900 mt-3 mb-3">
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
          </motion.div>
        </FadeInOnScroll>
      </div>
    </section>
  );
}