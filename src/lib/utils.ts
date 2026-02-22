/* ──────────────────────────────────────────────
 *  Utility helpers – Alwan Marketplace
 * ────────────────────────────────────────────── */

/** Format price in PKR */
export function formatPrice(price: number): string {
  return `Rs. ${price.toLocaleString("en-PK")}`;
}

/** Generate initials from full name */
export function getInitials(name: string): string {
  return name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase();
}

/** Clamp a value between min and max */
export function clamp(value: number, min: number, max: number): number {
  return Math.min(Math.max(value, min), max);
}

/** CN – merge class names (simple version) */
export function cn(...classes: (string | undefined | false | null)[]): string {
  return classes.filter(Boolean).join(" ");
}
