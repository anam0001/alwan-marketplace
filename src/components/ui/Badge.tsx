/* ──────────────────────────────────────────────
 *  Badge Component – small pill labels
 *  Used for categories, skill tags, etc.
 * ────────────────────────────────────────────── */

import React from "react";
import { cn } from "@/lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "gold" | "outline";
  className?: string;
}

const variantStyles = {
  primary: "bg-primary/10 text-primary",
  secondary: "bg-secondary text-primary",
  gold: "bg-gradient-gold text-white",
  outline: "border border-primary/30 text-primary",
};

export default function Badge({
  children,
  variant = "secondary",
  className,
}: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center px-3 py-1 rounded-full text-xs font-medium",
        variantStyles[variant],
        className
      )}
    >
      {children}
    </span>
  );
}
