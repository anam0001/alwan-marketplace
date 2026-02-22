/* ──────────────────────────────────────────────
 *  Rating Stars Component
 *  Renders filled, half-filled, and empty stars
 *  based on a rating value (0-5).
 * ────────────────────────────────────────────── */

import { cn } from "@/lib/utils";

interface RatingStarsProps {
  rating: number;
  maxStars?: number;
  size?: "sm" | "md" | "lg";
  className?: string;
}

const sizeMap = {
  sm: "text-xs",
  md: "text-sm",
  lg: "text-lg",
};

export default function RatingStars({
  rating,
  maxStars = 5,
  size = "sm",
  className,
}: RatingStarsProps) {
  return (
    <div
      className={cn("flex items-center gap-0.5", sizeMap[size], className)}
      aria-label={`Rating: ${rating} out of ${maxStars} stars`}
    >
      {Array.from({ length: maxStars }, (_, i) => {
        const starValue = i + 1;
        if (starValue <= Math.floor(rating)) {
          return (
            <span key={i} className="text-accent-gold" aria-hidden="true">
              ★
            </span>
          );
        }
        if (starValue - 0.5 <= rating) {
          return (
            <span key={i} className="text-accent-gold opacity-60" aria-hidden="true">
              ★
            </span>
          );
        }
        return (
          <span key={i} className="text-neutral-300" aria-hidden="true">
            ★
          </span>
        );
      })}
    </div>
  );
}
