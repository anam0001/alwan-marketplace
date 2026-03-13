"use client";

import { FormEvent, useEffect, useMemo, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

const typingTarget = "Oops! The page you’re looking for seems to have wandered off.";

const funnyMessages = [
  "This page is taking a coffee break ☕",
  "Looks like this page is lost in cyberspace 🚀",
  "Our page took a wrong turn at the internet 🤭",
  "This corner is still being stitched together 🧵",
  "Oops! This route is still under creative construction 🎨",
];

export default function NotFound() {
  const router = useRouter();
  const [typedText, setTypedText] = useState("");
  const [randomMessage, setRandomMessage] = useState("");
  const [searchText, setSearchText] = useState("");
  const [dodgeCount, setDodgeCount] = useState(0);
  const [buttonOffset, setButtonOffset] = useState({ x: 0, y: 0 });
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const cardRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    setRandomMessage(funnyMessages[Math.floor(Math.random() * funnyMessages.length)]);

    let i = 0;
    const timer = setInterval(() => {
      i += 1;
      setTypedText(typingTarget.slice(0, i));
      if (i >= typingTarget.length) clearInterval(timer);
    }, 28);

    return () => clearInterval(timer);
  }, []);

  const canGoHome = dodgeCount >= 2;

  function handleGoHomeClick(e: React.MouseEvent<HTMLButtonElement>) {
    if (canGoHome) {
      router.push("/");
      return;
    }

    e.preventDefault();
    const x = Math.random() > 0.5 ? -24 - Math.random() * 32 : 24 + Math.random() * 32;
    const y = Math.random() > 0.5 ? -14 - Math.random() * 18 : 14 + Math.random() * 18;
    setButtonOffset({ x, y });
    setDodgeCount((v) => v + 1);
  }

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width;
    const py = (e.clientY - rect.top) / rect.height;
    const rx = (py - 0.5) * 10;
    const ry = (0.5 - px) * 10;
    setTilt({ x: rx, y: ry });
  }

  function handleMouseLeave() {
    setTilt({ x: 0, y: 0 });
  }

  function onSearchSubmit(e: FormEvent) {
    e.preventDefault();
    const q = searchText.trim();
    if (!q) return;
    router.push(`/explore?q=${encodeURIComponent(q)}`);
  }

  const hintText = useMemo(() => {
    if (dodgeCount === 0) return "Tip: try clicking Go Back Home 😉";
    if (dodgeCount === 1) return "Almost there… one more try!";
    return "Got it! Button unlocked ✅";
  }, [dodgeCount]);

  return (
    <section className="relative min-h-screen pt-36 md:pt-40 pb-10 flex items-center justify-center overflow-hidden bg-gradient-to-b from-white to-secondary/20">
      {/* Background accents */}
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-24 -right-24 w-72 h-72 rounded-full bg-primary/10 blur-3xl animate-float-slow" />
        <div className="absolute -bottom-20 -left-20 w-80 h-80 rounded-full bg-secondary/60 blur-3xl animate-float-reverse" />
        <div className="absolute top-24 left-1/4 w-3 h-3 rounded-full bg-primary/30 animate-pulse-soft" />
        <div className="absolute top-1/3 right-1/4 w-2 h-2 rounded-full bg-accent-gold/40 animate-pulse-soft animation-delay-1000" />
        <div className="absolute bottom-1/4 left-1/3 w-2 h-2 rounded-full bg-primary/25 animate-pulse-soft animation-delay-2000" />
      </div>

      <div className="container-custom relative z-10">
        <motion.div
          ref={cardRef}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          animate={{ rotateX: tilt.x, rotateY: tilt.y }}
          transition={{ type: "spring", stiffness: 180, damping: 20 }}
          style={{ transformStyle: "preserve-3d" }}
          className="max-w-3xl mx-auto text-center rounded-3xl bg-white/90 backdrop-blur-md border border-primary/10 shadow-card p-7 md:p-12"
        >
          {/* Logo + Illustration */}
          <div className="flex items-center justify-center gap-3 mb-2">
            <Image src="/alwan-logo.svg" alt="Alwan logo" width={40} height={40} />
            <span className="text-sm font-semibold text-primary bg-secondary px-3 py-1 rounded-full">
              Alwan Marketplace
            </span>
          </div>

          <div className="text-6xl md:text-7xl" aria-hidden="true">
            <span className="inline-block animate-float">🧭</span>
          </div>

          <h1 className="mt-3 text-4xl md:text-6xl font-extrabold text-gradient-primary">404</h1>

          {/* Typing message */}
          <p className="mt-4 min-h-[56px] text-base md:text-lg text-neutral-700 leading-relaxed font-medium">
            {typedText}
            <span className="inline-block w-[1ch] animate-pulse">|</span>
          </p>

          {/* Random humor */}
          <p className="mt-2 text-sm text-neutral-500 italic">{randomMessage}</p>

          {/* Search */}
          <form onSubmit={onSearchSubmit} className="mt-7 flex flex-col sm:flex-row gap-3 justify-center">
            <input
              type="search"
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
              placeholder="Search services, creators, categories..."
              className="w-full sm:w-[420px] rounded-2xl border border-neutral-200 px-4 py-3 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none"
              aria-label="Search website"
            />
            <button
              type="submit"
              className="px-6 py-3 rounded-2xl border border-primary text-primary font-semibold hover:bg-primary hover:text-white transition-colors"
            >
              Search
            </button>
          </form>

          {/* Buttons */}
          <div className="mt-7 flex flex-col sm:flex-row items-center justify-center gap-3">
            <motion.button
              onClick={handleGoHomeClick}
              animate={{ x: buttonOffset.x, y: buttonOffset.y }}
              transition={{ type: "spring", stiffness: 350, damping: 18 }}
              className="px-6 py-3 rounded-2xl bg-gradient-primary text-white font-semibold shadow-soft hover:shadow-card-hover hover:scale-[1.02] transition-transform"
            >
              Go Back Home
            </motion.button>

            <Link
              href="/explore"
              className="px-6 py-3 rounded-2xl border border-primary text-primary font-semibold hover:bg-primary hover:text-white transition-colors"
            >
              Explore Marketplace
            </Link>
          </div>

          <p className="mt-3 text-xs text-neutral-500">{hintText}</p>

          <div className="mt-6 text-xs text-neutral-400">
            Try these:
            <Link href="/creator/1" className="mx-1 text-primary hover:underline">/creator/1</Link>
            <Link href="/join" className="mx-1 text-primary hover:underline">/join</Link>
            <Link href="/under-development" className="mx-1 text-primary hover:underline">/under-development</Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
