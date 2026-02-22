/** @type {import('next').NextConfig} */
const nextConfig = {
  /* ──────────────────────────────────────────────
   *  Image domains – add your production CDN here
   * ────────────────────────────────────────────── */
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "via.placeholder.com" },
    ],
  },
};

module.exports = nextConfig;
