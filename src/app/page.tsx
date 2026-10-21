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
import { getPublicCreators } from "@/lib/creators";

export const dynamic = "force-dynamic";

export default async function HomePage() {
  const creators = await getPublicCreators();

  return (
    <>
      {/* 1. Hero – Main tagline & CTA */}
      <HeroSection />

      {/* 2. Categories – Browse by skill type */}
      <CategoriesSection />

      {/* 3. How It Works – 3-step explainer */}
      <HowItWorksSection />

      {/* 4. Featured Creators – Top talent showcase */}
      <FeaturedCreatorsSection creators={creators} />

      {/* 5. Testimonials – Community reviews */}
      <TestimonialsSection />

      {/* 6. CTA Banner – Join as creator */}
      <CTABannerSection />
    </>
  );
}
