/* ──────────────────────────────────────────────
 *  StaggerChildren – Framer Motion container
 *  Staggers the entry animation of child elements.
 * ────────────────────────────────────────────── */
"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface StaggerChildrenProps {
  children: ReactNode;
  staggerDelay?: number;
  className?: string;
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: (staggerDelay: number) => ({
    opacity: 1,
    transition: {
      staggerChildren: staggerDelay,
      delayChildren: 0.1,
    },
  }),
};

export const childVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] },
  },
};

export default function StaggerChildren({
  children,
  staggerDelay = 0.1,
  className,
}: StaggerChildrenProps) {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      custom={staggerDelay}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* Helper wrapper for each child item */
export function StaggerItem({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <motion.div variants={childVariants} className={className}>
      {children}
    </motion.div>
  );
}
