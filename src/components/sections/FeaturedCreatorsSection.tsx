/* ──────────────────────────────────────────────
 *  Featured Creators Section – Card layout
 *  Showcases top creators with skill & rating.
 *  
 *  CUSTOMIZE:
 *  - Edit creators in src/lib/data.ts → featuredCreators
 *  - Replace placeholder images with real photos
 * ────────────────────────────────────────────── */
"use client";

import { motion } from "framer-motion";
import { featuredCreators } from "@/lib/data";
import SectionHeading from "@/components/ui/SectionHeading";
import FadeInOnScroll from "@/components/animations/FadeInOnScroll";
import StaggerChildren, {
  StaggerItem,
} from "@/components/animations/StaggerChildren";
import Badge from "@/components/ui/Badge";
import RatingStars from "@/components/ui/RatingStars";
import Link from "next/link";
import { getInitials } from "@/lib/utils";

export default function FeaturedCreatorsSection() {
  return (
    <section className="section-padding bg-white" aria-label="Featured Creators">
      <div className="container-custom">
        <FadeInOnScroll>
          <SectionHeading
            title="Meet Our Creators"
            subtitle="Talented women making a difference through their craft"
          />
        </FadeInOnScroll>

        <StaggerChildren className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {featuredCreators.map((creator) => (
            <StaggerItem key={creator.id}>
              <Link href={`/creator/${creator.id}`}>
                <motion.div
                  whileHover={{ y: -10, rotateY: 2 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="group relative bg-white rounded-3xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-500 cursor-pointer"
                >
                  {/* ─── Profile Picture Placeholder ─── */}
                  <div className="relative h-48 bg-gradient-to-br from-primary/10 to-secondary flex items-center justify-center">
                    {/* Replace with <Image> when real photos are available */}
                    <div className="w-20 h-20 rounded-full bg-white shadow-lg flex items-center justify-center text-2xl font-bold text-primary">
                      {getInitials(creator.name)}
                    </div>
                    {/* Gold badge for top rated */}
                    {creator.rating >= 4.9 && (
                      <div className="absolute top-3 right-3">
                        <Badge variant="gold">⭐ Top Rated</Badge>
                      </div>
                    )}
                  </div>

                  {/* ─── Info ─── */}
                  <div className="p-5 text-center">
                    <h3 className="text-lg font-bold text-neutral-900 group-hover:text-primary transition-colors">
                      {creator.name}
                    </h3>
                    <p className="text-sm text-primary font-medium mt-1">
                      {creator.skill}
                    </p>
                    <p className="text-xs text-neutral-400 mt-1">
                      📍 {creator.city}
                    </p>

                    {/* Rating */}
                    <div className="flex items-center justify-center gap-2 mt-3">
                      <RatingStars rating={creator.rating} />
                      <span className="text-xs text-neutral-400">
                        ({creator.reviews} reviews)
                      </span>
                    </div>

                    {/* Skills tags */}
                    <div className="flex flex-wrap justify-center gap-1.5 mt-3">
                      {creator.skills.slice(0, 2).map((skill) => (
                        <Badge key={skill} variant="primary">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </Link>
            </StaggerItem>
          ))}
        </StaggerChildren>

        {/* View all link */}
        <FadeInOnScroll delay={0.3}>
          <div className="text-center mt-12">
            <Link
              href="/explore"
              className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all"
            >
              View all creators
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        </FadeInOnScroll>
      </div>
    </section>
  );
}
