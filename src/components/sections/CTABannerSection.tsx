/* ──────────────────────────────────────────────
 *  CTA Banner Section – Call to action
 *  Encourages visitors to join as creators.
 *  
 *  CUSTOMIZE:
 *  - Change headline, subtext, and button labels
 * ────────────────────────────────────────────── */
"use client";

import { motion } from "framer-motion";
import Button from "@/components/ui/Button";
import FadeInOnScroll from "@/components/animations/FadeInOnScroll";

export default function CTABannerSection() {
  return (
    <section className="section-padding bg-white" aria-label="Call to Action">
      <div className="container-custom">
        <FadeInOnScroll>
          <motion.div
            whileHover={{ scale: 1.01 }}
            transition={{ type: "spring", stiffness: 200 }}
            className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-primary via-primary-dark to-primary p-10 md:p-16 text-center text-white"
          >
            {/* ─── Decorative shapes ─── */}
            <div className="absolute -top-20 -right-20 w-60 h-60 rounded-full bg-white/5" />
            <div className="absolute -bottom-16 -left-16 w-48 h-48 rounded-full bg-white/5" />
            <div className="absolute top-1/2 left-1/4 w-32 h-32 rounded-full bg-accent-gold/10" />

            {/* ─── Content ─── */}
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight">
                Ready to Share Your<br />
                <span className="text-gradient-gold">Talent</span> with the World?
              </h2>
              <p className="mt-4 text-white/80 text-lg max-w-xl mx-auto">
                Join thousands of talented women on Alwan. Create your profile,
                showcase your skills, and start earning — all from the comfort
                of your home.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button variant="gold" size="lg" href="/join">
                  Start Your Journey
                </Button>
                <Button
                  variant="ghost"
                  size="lg"
                  href="/explore"
                  className="text-white border-white/30 border hover:bg-white/10"
                >
                  Explore Marketplace
                </Button>
              </div>
            </div>
          </motion.div>
        </FadeInOnScroll>
      </div>
    </section>
  );
}
