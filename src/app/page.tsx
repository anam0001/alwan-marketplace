/* ──────────────────────────────────────────────
 *  Landing Page (Home) – /
 *  Composes all home sections together.
 * ────────────────────────────────────────────── */

import HeroSection from "@/components/sections/HeroSection";
import CategoriesSection from "@/components/sections/CategoriesSection";
import HowItWorksSection from "@/components/sections/HowItWorksSection";
import FeaturedCreatorsSection from "@/components/sections/FeaturedCreatorsSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import CTABannerSection from "@/components/sections/CTABannerSection";

export default function HomePage() {
  return (
    <>
      {/* 1. Hero – Main tagline & CTA */}
      <HeroSection />

      {/* 2. Categories – Browse by skill type */}
      <CategoriesSection />

      {/* 3. How It Works – 3-step explainer */}
      <HowItWorksSection />

      {/* 4. Featured Creators – Top talent showcase */}
      <FeaturedCreatorsSection />

      {/* 5. Testimonials – Community reviews */}
      <TestimonialsSection />

      {/* 6. CTA Banner – Join as creator */}
      <CTABannerSection />
    </>
  );
}
