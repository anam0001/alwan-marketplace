/* ──────────────────────────────────────────────
 *  Reusable Button Component
 *  Variants: primary | secondary | outline | ghost
 *  Sizes: sm | md | lg
 * ────────────────────────────────────────────── */
"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

type ButtonVariant = "primary" | "secondary" | "outline" | "ghost" | "gold";
type ButtonSize = "sm" | "md" | "lg";

interface ButtonProps {
  children: React.ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  fullWidth?: boolean;
  href?: string;
  className?: string;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  onClick?: () => void;
}

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "bg-gradient-primary text-white hover:shadow-glow active:scale-[0.98]",
  secondary:
    "bg-secondary text-primary hover:bg-secondary-dark active:scale-[0.98]",
  outline:
    "border-2 border-primary text-primary hover:bg-primary hover:text-white active:scale-[0.98]",
  ghost:
    "text-primary hover:bg-primary/5 active:scale-[0.98]",
  gold:
    "bg-gradient-gold text-white hover:shadow-lg active:scale-[0.98]",
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: "px-4 py-2 text-sm rounded-xl",
  md: "px-6 py-3 text-base rounded-2xl",
  lg: "px-8 py-4 text-lg rounded-2xl",
};

export default function Button({
  children,
  variant = "primary",
  size = "md",
  fullWidth = false,
  href,
  className,
  type = "button",
  disabled = false,
  onClick,
}: ButtonProps) {
  const classes = cn(
    "inline-flex items-center justify-center font-semibold transition-all duration-300 cursor-pointer select-none",
    variantStyles[variant],
    sizeStyles[size],
    fullWidth && "w-full",
    disabled && "opacity-60 cursor-not-allowed",
    className
  );

  /* If href is provided, render as a link-styled button */
  if (href) {
    return (
      <motion.a
        href={href}
        className={classes}
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.97 }}
      >
        {children}
      </motion.a>
    );
  }

  return (
    <motion.button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={classes}
      whileHover={disabled ? undefined : { scale: 1.03 }}
      whileTap={disabled ? undefined : { scale: 0.97 }}
    >
      {children}
    </motion.button>
  );
}
