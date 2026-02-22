/* ──────────────────────────────────────────────
 *  Hero Section – Landing page hero
 *  Features: Parallax-like background shapes,
 *  animated tagline, CTA buttons.
 *  
 *  CUSTOMIZE:
 *  - Change tagline text below
 *  - Update CTA button labels & links
 *  - Modify animated blob colors in className
 * ────────────────────────────────────────────── */
"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Button from "@/components/ui/Button";

export default function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);

  /* ─── Parallax scroll effect ─── */
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const yBg = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex items-center overflow-hidden bg-white"
      aria-label="Hero"
    >
      {/* ─── Animated Background Shapes ─── */}
      <motion.div style={{ y: yBg }} className="absolute inset-0 pointer-events-none">
        {/* Blob 1 – Top right */}
        <div className="absolute -top-20 -right-20 w-[500px] h-[500px] rounded-full bg-primary/5 animate-blob" />
        {/* Blob 2 – Bottom left */}
        <div className="absolute -bottom-32 -left-32 w-[600px] h-[600px] rounded-full bg-secondary/60 animate-blob animation-delay-2000" />
        {/* Blob 3 – Center accent */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[300px] h-[300px] rounded-full bg-accent-gold/5 animate-blob animation-delay-4000" />
        {/* Decorative dots */}
        <div className="absolute top-20 left-20 w-3 h-3 rounded-full bg-primary/20 animate-float" />
        <div className="absolute bottom-40 right-40 w-4 h-4 rounded-full bg-accent-gold/30 animate-float" style={{ animationDelay: "2s" }} />
        <div className="absolute top-1/2 right-20 w-2 h-2 rounded-full bg-primary/30 animate-float" style={{ animationDelay: "4s" }} />
      </motion.div>

      {/* ─── Content ─── */}
      <motion.div style={{ opacity }} className="container-custom relative z-10 pt-24 pb-16">
        <div className="max-w-4xl mx-auto text-center">
          {/* ─── Pre-heading badge ─── */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary text-primary text-sm font-medium mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            Pakistan&apos;s Women Talent Marketplace
          </motion.div>

          {/* ─── Main Tagline (change text here) ─── */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight tracking-tight"
          >
            Where Her{" "}
            <span className="text-gradient-primary">Talent</span> Gets the{" "}
            <span className="text-gradient-gold">Credit</span> It Deserves
          </motion.h1>

          {/* ─── Subheading ─── */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="mt-6 text-lg md:text-xl text-neutral-500 max-w-2xl mx-auto leading-relaxed"
          >
            Discover extraordinary handmade skills from talented women across
            Pakistan — embroidery, mehndi, crochet, fashion design, and more.
            No middlemen, just pure talent.
          </motion.p>

          {/* ─── CTA Buttons ─── */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Button variant="primary" size="lg" href="/explore">
              Explore Talent
            </Button>
            <Button variant="outline" size="lg" href="/join">
              Join as Creator
            </Button>
          </motion.div>

          {/* ─── Stats ─── */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.0 }}
            className="mt-16 flex items-center justify-center gap-8 md:gap-16 flex-wrap"
          >
            {[
              { value: "2,500+", label: "Creators" },
              { value: "15,000+", label: "Products" },
              { value: "50+", label: "Cities" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-primary">
                  {stat.value}
                </div>
                <div className="text-sm text-neutral-400 mt-1">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </motion.div>

      {/* ─── Bottom gradient fade ─── */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />
    </section>
  );
}
