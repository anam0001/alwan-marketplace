/* ──────────────────────────────────────────────
 *  Explore Marketplace Page – /explore
 *  Features: search, category filter, price filter,
 *  responsive product/service grid.
 *  
 *  CUSTOMIZE:
 *  - Edit products in src/lib/data.ts → marketplaceItems
 *  - Adjust price ranges in the filter
 * ────────────────────────────────────────────── */

import type { Metadata } from "next";
import ExploreClient from "./ExploreClient";

export const metadata: Metadata = {
  title: "Explore Marketplace",
  description:
    "Browse handmade crafts, embroidery, mehndi designs, fashion, tutoring and more from talented women across Pakistan.",
};

export default function ExplorePage() {
  return <ExploreClient />;
}
