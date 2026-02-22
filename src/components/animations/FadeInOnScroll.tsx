/* ──────────────────────────────────────────────
 *  FadeInOnScroll – Framer Motion wrapper
 *  Animates children when they scroll into view.
 *  Use: wrap any section/element for fade-in effect.
 * ────────────────────────────────────────────── */
"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface FadeInOnScrollProps {
  children: ReactNode;
  direction?: "up" | "down" | "left" | "right";
  delay?: number;
  duration?: number;
  className?: string;
}

const directionOffset = {
  up: { y: 40 },
  down: { y: -40 },
  left: { x: 40 },
  right: { x: -40 },
};

export default function FadeInOnScroll({
  children,
  direction = "up",
  delay = 0,
  duration = 0.6,
  className,
}: FadeInOnScrollProps) {
  return (
    <motion.div
      initial={{ opacity: 0, ...directionOffset[direction] }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{
        duration,
        delay,
        ease: [0.25, 0.1, 0.25, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
