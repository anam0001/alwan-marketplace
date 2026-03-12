/* ──────────────────────────────────────────────
 *  Hero Section – Landing page hero (ENHANCED)
 *  Features: Animated floating circles, rings,
 *  3D depth, parallax, count-up stats, shimmer.
 * ────────────────────────────────────────────── */
"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Button from "@/components/ui/Button";
import FloatingShapes from "@/components/animations/FloatingShapes";
import AnimatedCounter from "@/components/animations/AnimatedCounter";

export default function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const yBg = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const yContent = useTransform(scrollYProgress, [0, 1], [0, 80]);
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.7], [1, 0.95]);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex items-center overflow-hidden bg-white"
      aria-label="Hero"
    >
      {/* ─── Floating Shapes (parallax layer) ─── */}
      <motion.div style={{ y: yBg }} className="absolute inset-0">
        <FloatingShapes variant="hero" />
      </motion.div>

      {/* ─── Morphing gradient blobs (deep background) ─── */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.15, 0.9, 1.05, 1],
            x: [0, 30, -20, 10, 0],
            y: [0, -40, 20, -10, 0],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-32 -right-32 w-[600px] h-[600px] rounded-full bg-gradient-to-br from-primary/[0.07] to-secondary/40 blur-3xl animate-morph"
        />
        <motion.div
          animate={{
            scale: [1, 0.9, 1.1, 0.95, 1],
            x: [0, -20, 30, -10, 0],
            y: [0, 30, -20, 15, 0],
          }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", delay: 3 }}
          className="absolute -bottom-40 -left-40 w-[700px] h-[700px] rounded-full bg-gradient-to-tr from-secondary/50 to-primary/[0.04] blur-3xl animate-morph animation-delay-3000"
        />
        <motion.div
          animate={{ opacity: [0.3, 0.6, 0.3], scale: [1, 1.1, 1] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[400px] h-[400px] rounded-full bg-accent-gold/[0.03] blur-3xl"
        />
      </div>

      {/* ─── Spinning orbital rings (3D depth) ─── */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full border border-primary/[0.05]"
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border border-dashed border-secondary-dark/15"
        />
        {/* Orbiting dots */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px]"
        >
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-primary/30 shadow-glow" />
        </motion.div>
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px]"
        >
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-accent-gold/40" />
        </motion.div>
      </div>

      {/* ─── Content ─── */}
      <motion.div
        style={{ opacity, scale, y: yContent }}
        className="container-custom relative z-10 pt-28 pb-20"
      >
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ delay: 0.2, type: "spring" }}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/80 backdrop-blur-md border border-primary/10 text-primary text-sm font-medium mb-8 shadow-soft"
          >
            <motion.span
              animate={{ scale: [1, 1.3, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-2 h-2 rounded-full bg-primary"
            />
            Pakistan&apos;s Women Talent Marketplace
            <motion.span
              animate={{ scale: [1, 1.3, 1] }}
              transition={{ duration: 2, repeat: Infinity, delay: 1 }}
              className="w-2 h-2 rounded-full bg-accent-gold"
            />
          </motion.div>

          {/* ─── Staggered word animation tagline ─── */}
          <motion.h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight tracking-tight">
            {["Where Her ", null, " Gets the ", null, " It Deserves"].map((word, i) => {
              if (i === 1) return (
                <motion.span key={i} initial={{ opacity: 0, y: 40, rotateX: -40 }} animate={{ opacity: 1, y: 0, rotateX: 0 }} transition={{ delay: 0.5, duration: 0.7 }} className="inline-block text-gradient-primary">Talent</motion.span>
              );
              if (i === 3) return (
                <motion.span key={i} initial={{ opacity: 0, y: 40, rotateX: -40 }} animate={{ opacity: 1, y: 0, rotateX: 0 }} transition={{ delay: 0.9, duration: 0.7 }} className="inline-block text-gradient-gold">Credit</motion.span>
              );
              return (
                <motion.span key={i} initial={{ opacity: 0, y: 40, rotateX: -40 }} animate={{ opacity: 1, y: 0, rotateX: 0 }} transition={{ delay: 0.3 + i * 0.2, duration: 0.7 }} className="inline-block">{word}</motion.span>
              );
            })}
          </motion.h1>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.3 }}
            className="mt-6 text-lg md:text-xl text-neutral-500 max-w-2xl mx-auto leading-relaxed"
          >
            Discover extraordinary handmade skills from talented women across
            Pakistan — embroidery, mehndi, crochet, fashion design, and more.
            No middlemen, just pure talent.
          </motion.p>

          {/* CTA with glow */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5 }}
            className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-primary rounded-2xl opacity-40 group-hover:opacity-70 blur-lg transition-opacity duration-500" />
              <Button variant="primary" size="lg" href="/explore" className="relative">
                Explore Talent
              </Button>
            </div>
            <Button variant="outline" size="lg" href="/join">
              Join as Creator
            </Button>
          </motion.div>

          {/* ─── Animated count-up stats ─── */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.7 }}
            className="mt-20 flex items-center justify-center gap-6 md:gap-12 flex-wrap"
          >
            {[
              { value: 2500, suffix: "+", label: "Creators", icon: "👩‍🎨" },
              { value: 15000, suffix: "+", label: "Products", icon: "🎨" },
              { value: 50, suffix: "+", label: "Cities", icon: "🏙️" },
            ].map((stat) => (
              <motion.div
                key={stat.label}
                whileHover={{ y: -5, scale: 1.05 }}
                className="relative text-center px-6 py-4 rounded-2xl bg-white/60 backdrop-blur-sm border border-white/40 shadow-soft group hover:shadow-card-hover transition-all duration-300"
              >
                <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-primary/10 rounded-tr-2xl group-hover:border-primary/30 transition-colors" />
                <div className="text-lg mb-1">{stat.icon}</div>
                <AnimatedCounter
                  target={stat.value}
                  suffix={stat.suffix}
                  className="text-2xl md:text-3xl font-bold text-primary"
                />
                <div className="text-xs text-neutral-400 mt-1 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-white via-white/80 to-transparent" />

      {/* ─── Scroll indicator ─── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 rounded-full border-2 border-neutral-300 flex items-start justify-center p-1.5"
        >
          <motion.div
            animate={{ y: [0, 12, 0], opacity: [1, 0.3, 1] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1.5 h-1.5 rounded-full bg-primary"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
