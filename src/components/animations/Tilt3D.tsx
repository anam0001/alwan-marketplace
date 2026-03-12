/* ──────────────────────────────────────────────
 *  Tilt3D – 3D perspective tilt on hover
 *  Wraps any child element with a realistic
 *  3D card tilt effect that follows the cursor.
 * ────────────────────────────────────────────── */
"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useRef, ReactNode } from "react";

interface Tilt3DProps {
  children: ReactNode;
  className?: string;
  intensity?: number;      // Tilt intensity (default 15 degrees)
  glare?: boolean;         // Show glare/shine effect
  scale?: number;          // Scale on hover (default 1.02)
  perspective?: number;    // Perspective distance (default 1000px)
}

export default function Tilt3D({
  children,
  className = "",
  intensity = 15,
  glare = true,
  scale = 1.02,
  perspective = 1000,
}: Tilt3DProps) {
  const ref = useRef<HTMLDivElement>(null);

  /* Raw mouse position values */
  const mouseX = useMotionValue(0.5);
  const mouseY = useMotionValue(0.5);

  /* Spring-smoothed rotation */
  const rotateX = useSpring(useTransform(mouseY, [0, 1], [intensity, -intensity]), {
    stiffness: 200,
    damping: 30,
  });
  const rotateY = useSpring(useTransform(mouseX, [0, 1], [-intensity, intensity]), {
    stiffness: 200,
    damping: 30,
  });

  /* Glare position */
  const glareX = useTransform(mouseX, [0, 1], ["-20%", "120%"]);
  const glareY = useTransform(mouseY, [0, 1], ["-20%", "120%"]);

  /* Mouse handlers */
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0.5);
    mouseY.set(0.5);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      whileHover={{ scale }}
      className={`relative ${className}`}
      style={{
        perspective,
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
    >
      {children}

      {/* Glare/shine overlay */}
      {glare && (
        <motion.div
          className="absolute inset-0 rounded-[inherit] pointer-events-none opacity-0 hover:opacity-100 transition-opacity duration-300"
          style={{
            background: `radial-gradient(circle at ${glareX} ${glareY}, rgba(255,255,255,0.15) 0%, transparent 60%)`,
          }}
        />
      )}
    </motion.div>
  );
}
