/* ──────────────────────────────────────────────
 *  Card Component – Marketplace product / service card
 *  Has subtle 3D lift effect on hover.
 * ────────────────────────────────────────────── */
"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { formatPrice } from "@/lib/utils";
import Badge from "./Badge";
import RatingStars from "./RatingStars";
import Link from "next/link";

interface CardProps {
  id: number;
  title: string;
  creator: string;
  creatorId: number;
  category: string;
  price: number;
  rating: number;
  reviews: number;
  image: string;
  description: string;
  className?: string;
}

export default function Card({
  id,
  title,
  creator,
  creatorId,
  category,
  price,
  rating,
  reviews,
  image,
  description,
  className,
}: CardProps) {
  return (
    <motion.article
      className={cn(
        "group relative bg-white rounded-3xl overflow-hidden shadow-card transition-shadow duration-500 hover:shadow-card-hover",
        className
      )}
      whileHover={{ y: -8, rotateX: 2 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      {/* ─── Image ─── */}
      <div className="relative h-52 sm:h-56 bg-secondary overflow-hidden">
        {/* Replace this div with <Image> when you have real images */}
        <div className="w-full h-full bg-gradient-to-br from-primary/10 to-secondary flex items-center justify-center text-4xl">
          🎨
        </div>
        {/* Category badge */}
        <div className="absolute top-3 left-3">
          <Badge>{category}</Badge>
        </div>
      </div>

      {/* ─── Content ─── */}
      <div className="p-5">
        {/* Title */}
        <h3 className="text-lg font-semibold text-neutral-900 line-clamp-1 group-hover:text-primary transition-colors">
          {title}
        </h3>

        {/* Creator */}
        <Link
          href={`/creator/${creatorId}`}
          className="text-sm text-neutral-500 hover:text-primary transition-colors mt-1 inline-block"
        >
          by {creator}
        </Link>

        {/* Description */}
        <p className="text-sm text-neutral-500 mt-2 line-clamp-2">{description}</p>

        {/* Rating & Price */}
        <div className="flex items-center justify-between mt-4 pt-4 border-t border-neutral-100">
          <div className="flex items-center gap-2">
            <RatingStars rating={rating} />
            <span className="text-xs text-neutral-400">({reviews})</span>
          </div>
          <span className="font-bold text-primary text-lg">
            {formatPrice(price)}
          </span>
        </div>

        {/* View button */}
        <Link
          href={`/creator/${creatorId}`}
          className="mt-4 block w-full text-center py-2.5 rounded-xl bg-primary/5 text-primary font-semibold text-sm hover:bg-primary hover:text-white transition-all duration-300"
        >
          View Details
        </Link>
      </div>
    </motion.article>
  );
}
