/* ──────────────────────────────────────────────
 *  Navbar – Sticky + animated on scroll
 *  Links: Home, Explore Talent, Categories, Become a Creator, About Alwan, Contact
 *  Right-side buttons: Sign In, Join Alwan
 *  Mobile hamburger menu included.
 * ────────────────────────────────────────────── */
"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import Button from "@/components/ui/Button";

/* ─── Navigation Links (edit here) ─── */
const navLinks = [
  { label: "Home", href: "/" },
  { label: "Explore Talent", href: "/explore-talent" },
  { label: "Categories", href: "/categories" },
  { label: "Become a Creator", href: "/join" },
  { label: "About Alwan", href: "/about" },
  { label: "Contact", href: "/contact" },
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
          ? "py-3"
          : "py-4"
      )}
    >
      <nav
        className={cn(
          "container-custom flex items-center justify-between rounded-2xl border px-4 sm:px-5 transition-all duration-500",
          isScrolled
            ? "bg-white/85 backdrop-blur-xl border-primary/10 shadow-card py-3"
            : "bg-white/70 backdrop-blur-md border-white/50 shadow-soft py-3"
        )}
        aria-label="Main navigation"
      >
        {/* ─── Logo ─── */}
        <Link href="/" className="flex items-center gap-2 group">
          <span className="inline-flex items-center justify-center w-9 h-9 rounded-xl bg-white shadow-soft p-1 border border-primary/10">
            <Image
              src="/alwan-logo.svg"
              alt="Alwan logo"
              width={28}
              height={28}
              priority
            />
          </span>
          <span className="text-xl md:text-2xl font-extrabold text-gradient-primary">
            Alwan
          </span>
          <span className="hidden sm:inline-flex items-center px-2 py-1 rounded-full text-[10px] font-semibold bg-secondary text-primary">
            Marketplace
          </span>
        </Link>

        {/* ─── Desktop Links ─── */}
        <ul className="hidden md:flex items-center gap-6 lg:gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="text-sm font-semibold text-neutral-700 hover:text-primary transition-colors relative after:absolute after:bottom-[-5px] after:left-0 after:w-0 after:h-0.5 after:bg-primary after:transition-all after:duration-300 hover:after:w-full"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* ─── Desktop CTA ─── */}
        <div className="hidden md:flex items-center gap-2 lg:gap-3">
          <Button variant="ghost" size="sm" href="/sign-in">
            Sign In
          </Button>
          <Button variant="brand" size="sm" href="/join">
            Join Alwan
          </Button>
        </div>

        {/* ─── Mobile Menu Toggle ─── */}
        <button
          onClick={() => setIsMobileOpen(!isMobileOpen)}
          className="md:hidden flex flex-col gap-1.5 p-2 rounded-lg hover:bg-primary/5 transition-colors"
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
            className="md:hidden bg-white/95 backdrop-blur-lg border-t border-neutral-100 mt-2 rounded-b-2xl"
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
                <Button variant="ghost" size="md" href="/sign-in" fullWidth>
                  Sign In
                </Button>
                <Button variant="brand" size="md" href="/join" fullWidth>
                  Join Alwan
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
