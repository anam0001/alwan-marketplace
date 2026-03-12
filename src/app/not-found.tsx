"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Button from "@/components/ui/Button";
import FloatingShapes from "@/components/animations/FloatingShapes";

export default function NotFound() {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden bg-gradient-to-b from-white to-secondary/20">
      <FloatingShapes variant="light" />

      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl mx-auto text-center rounded-3xl bg-white/80 backdrop-blur-md border border-primary/10 shadow-card p-8 md:p-12"
        >
          <motion.div
            animate={{ y: [0, -8, 0], rotate: [0, 2, -2, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="text-6xl md:text-7xl"
            aria-hidden="true"
          >
            🚧
          </motion.div>

          <h1 className="mt-4 text-4xl md:text-6xl font-extrabold text-gradient-primary">
            404
          </h1>

          <h2 className="mt-2 text-xl md:text-2xl font-bold text-neutral-900">
            This page is not available right now
          </h2>

          <p className="mt-4 text-neutral-600 leading-relaxed">
            Good news: Alwan is actively evolving 💜
            <br />
            The page you tried is either missing or currently under development.
            We’re building new features to make this marketplace even better.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
            <Button href="/" variant="primary">
              Back to Home
            </Button>
            <Button href="/explore" variant="outline">
              Explore Marketplace
            </Button>
          </div>

          <div className="mt-6 text-xs text-neutral-400">
            Tip: Try valid creator profiles like
            <Link href="/creator/1" className="mx-1 text-primary hover:underline">
              /creator/1
            </Link>
            or
            <Link href="/creator/2" className="mx-1 text-primary hover:underline">
              /creator/2
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
