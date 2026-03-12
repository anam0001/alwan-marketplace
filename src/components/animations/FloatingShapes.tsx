/* ──────────────────────────────────────────────
 *  FloatingShapes – Animated decorative background
 *  Renders animated circles, rings, and geometric
 *  shapes that float around sections with parallax.
 *  
 *  CUSTOMIZE:
 *  - variant: "hero" | "light" | "dark" | "minimal"
 *  - Change colors, sizes, and count of shapes
 * ────────────────────────────────────────────── */
"use client";

import { motion } from "framer-motion";

type Variant = "hero" | "light" | "dark" | "minimal";

interface FloatingShapesProps {
  variant?: Variant;
}

/* ─── Shape definitions per variant ─── */
const shapeConfigs: Record<Variant, ShapeConfig[]> = {
  hero: [
    // Large gradient circles
    { type: "circle", size: 500, x: "85%", y: "-5%", color: "bg-primary/[0.06]", blur: true, duration: 18, delay: 0 },
    { type: "circle", size: 600, x: "-10%", y: "70%", color: "bg-secondary/50", blur: true, duration: 22, delay: 2 },
    { type: "circle", size: 350, x: "50%", y: "30%", color: "bg-accent-gold/[0.04]", blur: true, duration: 15, delay: 4 },
    // Animated rings (hollow circles)
    { type: "ring", size: 120, x: "15%", y: "20%", color: "border-primary/10", duration: 12, delay: 0 },
    { type: "ring", size: 80, x: "80%", y: "60%", color: "border-primary/[0.08]", duration: 10, delay: 3 },
    { type: "ring", size: 180, x: "70%", y: "15%", color: "border-accent-gold/10", duration: 16, delay: 1 },
    { type: "ring", size: 60, x: "25%", y: "75%", color: "border-primary/[0.12]", duration: 8, delay: 5 },
    // Small floating dots
    { type: "dot", size: 8, x: "20%", y: "15%", color: "bg-primary/20", duration: 6, delay: 0 },
    { type: "dot", size: 6, x: "75%", y: "25%", color: "bg-accent-gold/30", duration: 5, delay: 1.5 },
    { type: "dot", size: 10, x: "90%", y: "45%", color: "bg-primary/15", duration: 7, delay: 3 },
    { type: "dot", size: 5, x: "10%", y: "55%", color: "bg-primary/25", duration: 4, delay: 2 },
    { type: "dot", size: 7, x: "60%", y: "80%", color: "bg-accent-gold/20", duration: 6, delay: 4 },
    { type: "dot", size: 4, x: "40%", y: "10%", color: "bg-primary/30", duration: 5, delay: 0.5 },
    { type: "dot", size: 12, x: "35%", y: "90%", color: "bg-secondary-dark/20", duration: 8, delay: 1 },
    // Diamond shapes
    { type: "diamond", size: 16, x: "55%", y: "20%", color: "bg-primary/10", duration: 9, delay: 2 },
    { type: "diamond", size: 12, x: "85%", y: "75%", color: "bg-accent-gold/15", duration: 7, delay: 0 },
    // Plus/cross shapes
    { type: "plus", size: 20, x: "30%", y: "40%", color: "bg-primary/[0.08]", duration: 11, delay: 3 },
    { type: "plus", size: 14, x: "70%", y: "50%", color: "bg-accent-gold/10", duration: 9, delay: 1 },
  ],
  light: [
    { type: "circle", size: 300, x: "90%", y: "10%", color: "bg-primary/[0.04]", blur: true, duration: 20, delay: 0 },
    { type: "circle", size: 250, x: "-5%", y: "80%", color: "bg-secondary/30", blur: true, duration: 18, delay: 3 },
    { type: "ring", size: 100, x: "15%", y: "25%", color: "border-primary/[0.08]", duration: 14, delay: 0 },
    { type: "ring", size: 70, x: "85%", y: "70%", color: "border-primary/[0.06]", duration: 10, delay: 2 },
    { type: "dot", size: 6, x: "25%", y: "15%", color: "bg-primary/15", duration: 6, delay: 1 },
    { type: "dot", size: 8, x: "70%", y: "30%", color: "bg-accent-gold/20", duration: 5, delay: 0 },
    { type: "dot", size: 5, x: "50%", y: "85%", color: "bg-primary/20", duration: 7, delay: 3 },
    { type: "diamond", size: 10, x: "80%", y: "20%", color: "bg-primary/[0.08]", duration: 8, delay: 1 },
  ],
  dark: [
    { type: "circle", size: 400, x: "80%", y: "0%", color: "bg-white/[0.03]", blur: true, duration: 20, delay: 0 },
    { type: "circle", size: 300, x: "0%", y: "70%", color: "bg-white/[0.02]", blur: true, duration: 16, delay: 2 },
    { type: "ring", size: 150, x: "20%", y: "30%", color: "border-white/[0.06]", duration: 14, delay: 1 },
    { type: "ring", size: 90, x: "75%", y: "65%", color: "border-accent-gold/10", duration: 11, delay: 0 },
    { type: "dot", size: 6, x: "30%", y: "20%", color: "bg-white/10", duration: 6, delay: 0 },
    { type: "dot", size: 8, x: "65%", y: "40%", color: "bg-accent-gold/15", duration: 5, delay: 2 },
    { type: "dot", size: 4, x: "85%", y: "80%", color: "bg-white/[0.08]", duration: 7, delay: 1 },
  ],
  minimal: [
    { type: "ring", size: 80, x: "10%", y: "20%", color: "border-primary/[0.06]", duration: 12, delay: 0 },
    { type: "ring", size: 60, x: "90%", y: "75%", color: "border-primary/[0.05]", duration: 10, delay: 2 },
    { type: "dot", size: 6, x: "20%", y: "80%", color: "bg-primary/15", duration: 6, delay: 1 },
    { type: "dot", size: 5, x: "75%", y: "15%", color: "bg-accent-gold/20", duration: 5, delay: 0 },
  ],
};

interface ShapeConfig {
  type: "circle" | "ring" | "dot" | "diamond" | "plus";
  size: number;
  x: string;
  y: string;
  color: string;
  blur?: boolean;
  duration: number;
  delay: number;
}

function Shape({ config, index }: { config: ShapeConfig; index: number }) {
  /* Different float patterns based on index for variety */
  const floatVariants = {
    animate: {
      y: [0, -15 - (index % 3) * 8, 0],
      x: [0, (index % 2 === 0 ? 10 : -10), 0],
      rotate: config.type === "diamond" ? [0, 45, 0] : config.type === "ring" ? [0, 360] : 0,
      scale: config.type === "circle" && config.blur ? [1, 1.05, 0.95, 1] : 1,
      transition: {
        duration: config.duration,
        repeat: Infinity,
        ease: "easeInOut",
        delay: config.delay,
      },
    },
  };

  /* Render based on shape type */
  switch (config.type) {
    case "circle":
      return (
        <motion.div
          variants={floatVariants}
          animate="animate"
          className={`absolute rounded-full ${config.color} ${config.blur ? "blur-3xl" : ""}`}
          style={{
            width: config.size,
            height: config.size,
            left: config.x,
            top: config.y,
          }}
        />
      );

    case "ring":
      return (
        <motion.div
          variants={floatVariants}
          animate="animate"
          className={`absolute rounded-full border-2 ${config.color}`}
          style={{
            width: config.size,
            height: config.size,
            left: config.x,
            top: config.y,
          }}
        />
      );

    case "dot":
      return (
        <motion.div
          variants={floatVariants}
          animate="animate"
          className={`absolute rounded-full ${config.color}`}
          style={{
            width: config.size,
            height: config.size,
            left: config.x,
            top: config.y,
          }}
        />
      );

    case "diamond":
      return (
        <motion.div
          variants={floatVariants}
          animate="animate"
          className={`absolute ${config.color} rotate-45`}
          style={{
            width: config.size,
            height: config.size,
            left: config.x,
            top: config.y,
          }}
        />
      );

    case "plus":
      return (
        <motion.div
          variants={floatVariants}
          animate="animate"
          className="absolute"
          style={{ left: config.x, top: config.y }}
        >
          {/* Horizontal bar */}
          <div
            className={`absolute top-1/2 left-0 -translate-y-1/2 rounded-full ${config.color}`}
            style={{ width: config.size, height: config.size / 5 }}
          />
          {/* Vertical bar */}
          <div
            className={`absolute left-1/2 top-0 -translate-x-1/2 rounded-full ${config.color}`}
            style={{ width: config.size / 5, height: config.size }}
          />
        </motion.div>
      );

    default:
      return null;
  }
}

export default function FloatingShapes({ variant = "hero" }: FloatingShapesProps) {
  const shapes = shapeConfigs[variant];

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
      {shapes.map((config, i) => (
        <Shape key={i} config={config} index={i} />
      ))}
    </div>
  );
}
