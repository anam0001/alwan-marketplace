/* ──────────────────────────────────────────────
 *  Navbar – Sticky + animated on scroll
 *  Links: Home, Explore, Join as Creator
 *  Mobile hamburger menu included.
 * ────────────────────────────────────────────── */
"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import Button from "@/components/ui/Button";

/* ─── Navigation Links (edit here) ─── */
const navLinks = [
  { label: "Home", href: "/" },
  { label: "Explore", href: "/explore" },
  { label: "How It Works", href: "/#how-it-works" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  /* ─── Detect scroll for background change ─── */
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 100, damping: 20 }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        isScrolled
          ? "bg-white/90 backdrop-blur-lg shadow-soft py-3"
          : "bg-transparent py-5"
      )}
    >
      <nav className="container-custom flex items-center justify-between" aria-label="Main navigation">
        {/* ─── Logo ─── */}
        <Link href="/" className="flex items-center gap-2 group">
          <span className="text-2xl md:text-3xl font-bold text-gradient-primary">
            Alwan
          </span>
          {/* Optional: Add a small decorative element */}
          <span className="hidden sm:inline-block w-2 h-2 rounded-full bg-gradient-gold group-hover:scale-125 transition-transform" />
        </Link>

        {/* ─── Desktop Links ─── */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="text-sm font-medium text-neutral-600 hover:text-primary transition-colors relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-0.5 after:bg-primary after:transition-all after:duration-300 hover:after:w-full"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* ─── Desktop CTA ─── */}
        <div className="hidden md:flex items-center gap-3">
          <Button variant="ghost" size="sm" href="/explore">
            Explore
          </Button>
          <Button variant="primary" size="sm" href="/join">
            Join as Creator
          </Button>
        </div>

        {/* ─── Mobile Menu Toggle ─── */}
        <button
          onClick={() => setIsMobileOpen(!isMobileOpen)}
          className="md:hidden flex flex-col gap-1.5 p-2"
          aria-label={isMobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMobileOpen}
        >
          <motion.span
            animate={isMobileOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
            className="block w-6 h-0.5 bg-neutral-800"
          />
          <motion.span
            animate={isMobileOpen ? { opacity: 0 } : { opacity: 1 }}
            className="block w-6 h-0.5 bg-neutral-800"
          />
          <motion.span
            animate={isMobileOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
            className="block w-6 h-0.5 bg-neutral-800"
          />
        </button>
      </nav>

      {/* ─── Mobile Menu ─── */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white/95 backdrop-blur-lg border-t border-neutral-100"
          >
            <div className="container-custom py-6 flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMobileOpen(false)}
                  className="text-base font-medium text-neutral-700 hover:text-primary py-2 transition-colors"
                >
                  {link.label}
                </Link>
              ))}
              <div className="flex flex-col gap-3 pt-4 border-t border-neutral-100">
                <Button variant="outline" size="md" href="/explore" fullWidth>
                  Explore Talent
                </Button>
                <Button variant="primary" size="md" href="/join" fullWidth>
                  Join as Creator
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
