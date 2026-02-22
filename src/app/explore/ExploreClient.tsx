/* ──────────────────────────────────────────────
 *  Explore Client Component – handles filtering
 *  & search with client-side interactivity.
 * ────────────────────────────────────────────── */
"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { marketplaceItems, categories } from "@/lib/data";
import Card from "@/components/ui/Card";
import SectionHeading from "@/components/ui/SectionHeading";
import FadeInOnScroll from "@/components/animations/FadeInOnScroll";
import { cn } from "@/lib/utils";

/* ─── Price Range Options ─── */
const priceRanges = [
  { label: "All Prices", min: 0, max: Infinity },
  { label: "Under Rs. 5,000", min: 0, max: 5000 },
  { label: "Rs. 5,000 – 10,000", min: 5000, max: 10000 },
  { label: "Rs. 10,000 – 20,000", min: 10000, max: 20000 },
  { label: "Above Rs. 20,000", min: 20000, max: Infinity },
];

export default function ExploreClient() {
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedPriceRange, setSelectedPriceRange] = useState(0);

  /* ─── Filtered items ─── */
  const filteredItems = useMemo(() => {
    const priceRange = priceRanges[selectedPriceRange];
    return marketplaceItems.filter((item) => {
      const matchesSearch =
        item.title.toLowerCase().includes(search.toLowerCase()) ||
        item.creator.toLowerCase().includes(search.toLowerCase()) ||
        item.description.toLowerCase().includes(search.toLowerCase());
      const matchesCategory =
        selectedCategory === "All" || item.category === selectedCategory;
      const matchesPrice =
        item.price >= priceRange.min && item.price <= priceRange.max;
      return matchesSearch && matchesCategory && matchesPrice;
    });
  }, [search, selectedCategory, selectedPriceRange]);

  return (
    <div className="min-h-screen bg-neutral-50 pt-28 pb-20">
      <div className="container-custom">
        {/* ─── Page Header ─── */}
        <FadeInOnScroll>
          <SectionHeading
            title="Explore Marketplace"
            subtitle="Find unique handmade products and services from talented women"
          />
        </FadeInOnScroll>

        {/* ─── Search & Filters ─── */}
        <FadeInOnScroll delay={0.1}>
          <div className="bg-white rounded-3xl shadow-card p-6 md:p-8 mb-10">
            {/* Search Bar */}
            <div className="relative mb-6">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-400 text-lg">
                🔍
              </span>
              <input
                type="search"
                placeholder="Search by name, creator, or keyword..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-12 pr-4 py-3.5 rounded-2xl border border-neutral-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-sm"
                aria-label="Search marketplace"
              />
            </div>

            {/* Filters Row */}
            <div className="flex flex-col md:flex-row gap-4 md:items-center">
              {/* Category Filter */}
              <div className="flex-1">
                <label className="block text-xs font-medium text-neutral-500 mb-2">
                  Category
                </label>
                <div className="flex flex-wrap gap-2">
                  <button
                    onClick={() => setSelectedCategory("All")}
                    className={cn(
                      "px-4 py-2 rounded-xl text-sm font-medium transition-all",
                      selectedCategory === "All"
                        ? "bg-primary text-white shadow-soft"
                        : "bg-neutral-100 text-neutral-600 hover:bg-primary/10 hover:text-primary"
                    )}
                  >
                    All
                  </button>
                  {categories.map((cat) => (
                    <button
                      key={cat.id}
                      onClick={() => setSelectedCategory(cat.name)}
                      className={cn(
                        "px-4 py-2 rounded-xl text-sm font-medium transition-all",
                        selectedCategory === cat.name
                          ? "bg-primary text-white shadow-soft"
                          : "bg-neutral-100 text-neutral-600 hover:bg-primary/10 hover:text-primary"
                      )}
                    >
                      {cat.icon} {cat.name}
                    </button>
                  ))}
                </div>
              </div>

              {/* Price Filter */}
              <div className="md:w-56">
                <label className="block text-xs font-medium text-neutral-500 mb-2">
                  Price Range
                </label>
                <select
                  value={selectedPriceRange}
                  onChange={(e) => setSelectedPriceRange(Number(e.target.value))}
                  className="w-full px-4 py-2.5 rounded-xl border border-neutral-200 text-sm focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                  aria-label="Filter by price"
                >
                  {priceRanges.map((range, idx) => (
                    <option key={idx} value={idx}>
                      {range.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </FadeInOnScroll>

        {/* ─── Results Count ─── */}
        <p className="text-sm text-neutral-500 mb-6">
          Showing <span className="font-semibold text-neutral-800">{filteredItems.length}</span>{" "}
          {filteredItems.length === 1 ? "result" : "results"}
        </p>

        {/* ─── Product/Service Grid ─── */}
        <AnimatePresence mode="wait">
          {filteredItems.length > 0 ? (
            <motion.div
              key="results"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
            >
              {filteredItems.map((item, idx) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.05 }}
                >
                  <Card {...item} />
                </motion.div>
              ))}
            </motion.div>
          ) : (
            <motion.div
              key="empty"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20"
            >
              <div className="text-5xl mb-4">🔍</div>
              <h3 className="text-xl font-semibold text-neutral-700">No results found</h3>
              <p className="text-neutral-400 mt-2">
                Try adjusting your search or filter criteria
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
