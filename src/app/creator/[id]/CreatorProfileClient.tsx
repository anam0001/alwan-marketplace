/* ──────────────────────────────────────────────
 *  Creator Profile Client – Interactive profile
 *  Shows bio, skills, portfolio, reviews, contact.
 * ────────────────────────────────────────────── */
"use client";

import { motion } from "framer-motion";
import { creatorReviews, marketplaceItems } from "@/lib/data";
import { getInitials, formatPrice } from "@/lib/utils";
import Badge from "@/components/ui/Badge";
import RatingStars from "@/components/ui/RatingStars";
import Card from "@/components/ui/Card";
import FadeInOnScroll from "@/components/animations/FadeInOnScroll";
import SectionHeading from "@/components/ui/SectionHeading";
import CreatorMessageForm from "@/components/forms/CreatorMessageForm";

interface Creator {
  id: number;
  name: string;
  skill: string;
  city: string;
  rating: number;
  reviews: number;
  image: string;
  bio: string;
  skills: string[];
  portfolio: string[];
}

export default function CreatorProfileClient({ creator }: { creator: Creator }) {
  /* Get this creator's services from marketplace data */
  const creatorServices = marketplaceItems.filter(
    (item) => item.creatorId === creator.id
  );

  return (
    <div className="min-h-screen bg-neutral-50 pt-24">
      {/* ─── Hero / Profile Header ─── */}
      <section className="relative bg-gradient-to-br from-primary/5 via-secondary/50 to-white py-16">
        {/* Decorative shapes */}
        <div className="absolute -top-10 -right-10 w-60 h-60 rounded-full bg-primary/5 blur-xl" />
        <div className="absolute -bottom-10 -left-10 w-48 h-48 rounded-full bg-secondary blur-xl" />

        <div className="container-custom relative z-10">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
            {/* ─── Profile Picture ─── */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="w-32 h-32 md:w-40 md:h-40 rounded-3xl bg-gradient-to-br from-primary to-primary-light flex items-center justify-center text-4xl md:text-5xl font-bold text-white shadow-glow"
            >
              {getInitials(creator.name)}
            </motion.div>

            {/* ─── Profile Info ─── */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="text-center md:text-left flex-1"
            >
              <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4">
                <h1 className="text-3xl md:text-4xl font-extrabold text-neutral-900">
                  {creator.name}
                </h1>
                {creator.rating >= 4.9 && (
                  <Badge variant="gold">⭐ Top Rated</Badge>
                )}
              </div>
              <p className="text-lg text-primary font-semibold mt-1">
                {creator.skill}
              </p>
              <p className="text-sm text-neutral-500 mt-1">
                📍 {creator.city}, Pakistan
              </p>

              {/* Rating summary */}
              <div className="flex items-center justify-center md:justify-start gap-2 mt-3">
                <RatingStars rating={creator.rating} size="md" />
                <span className="text-sm text-neutral-600 font-medium">
                  {creator.rating}
                </span>
                <span className="text-sm text-neutral-400">
                  ({creator.reviews} reviews)
                </span>
              </div>

              {/* Bio */}
              <p className="mt-4 text-neutral-600 max-w-xl leading-relaxed">
                {creator.bio}
              </p>

              {/* Skills tags */}
              <div className="flex flex-wrap justify-center md:justify-start gap-2 mt-4">
                {creator.skills.map((skill) => (
                  <Badge key={skill} variant="primary">
                    {skill}
                  </Badge>
                ))}
              </div>

              {/* Contact button */}
              <CreatorMessageForm creatorId={creator.id} creatorName={creator.name} />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── Portfolio Gallery ─── */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <FadeInOnScroll>
            <SectionHeading
              title="Portfolio"
              subtitle="A showcase of recent work"
            />
          </FadeInOnScroll>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {creator.portfolio.map((img, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="relative aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-primary/10 to-secondary cursor-pointer shadow-card hover:shadow-card-hover transition-shadow"
              >
                {/* Replace with <Image> for real portfolio images */}
                <div className="w-full h-full flex items-center justify-center text-3xl bg-secondary/50">
                  {["🧵", "🎨", "✂️", "👗"][idx % 4]}
                </div>
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-primary/0 hover:bg-primary/20 transition-colors flex items-center justify-center">
                  <span className="text-white opacity-0 hover:opacity-100 transition-opacity font-medium text-sm">
                    View
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Creator's Services ─── */}
      {creatorServices.length > 0 && (
        <section className="section-padding bg-neutral-50">
          <div className="container-custom">
            <FadeInOnScroll>
              <SectionHeading
                title="Services & Products"
                subtitle={`Browse what ${creator.name.split(" ")[0]} offers`}
              />
            </FadeInOnScroll>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {creatorServices.map((item, idx) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                >
                  <Card {...item} />
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ─── Reviews Section ─── */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <FadeInOnScroll>
            <SectionHeading
              title="Customer Reviews"
              subtitle={`What people say about ${creator.name.split(" ")[0]}`}
            />
          </FadeInOnScroll>

          <div className="max-w-3xl mx-auto space-y-6">
            {creatorReviews.map((review, idx) => (
              <motion.div
                key={review.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-neutral-50 rounded-2xl p-6 hover:shadow-card transition-shadow"
              >
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-primary text-white flex items-center justify-center text-sm font-bold">
                      {getInitials(review.reviewer)}
                    </div>
                    <div>
                      <p className="font-semibold text-neutral-800 text-sm">
                        {review.reviewer}
                      </p>
                      <p className="text-xs text-neutral-400">{review.date}</p>
                    </div>
                  </div>
                  <RatingStars rating={review.rating} />
                </div>
                <p className="mt-3 text-neutral-600 text-sm leading-relaxed">
                  {review.comment}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
