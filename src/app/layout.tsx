/* ──────────────────────────────────────────────
 *  Root Layout – Alwan Marketplace
 *  This is the top-level layout for the entire app.
 *  Google Font (Poppins) & metadata are configured here.
 * ────────────────────────────────────────────── */

import React from "react";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

/* ─── Google Font Setup (change font here) ─── */
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-poppins",
  display: "swap",
});

/* ─── SEO Metadata (customize for production) ─── */
export const metadata: Metadata = {
  title: {
    default: "Alwan – Where Her Talent Gets the Credit It Deserves",
    template: "%s | Alwan Marketplace",
  },
  description:
    "Alwan is Pakistan's premier women-focused talent marketplace. Discover handmade crafts, embroidery, mehndi, crochet, stitching, fashion design, tutoring and more — directly from talented women creators.",
  keywords: [
    "women marketplace",
    "handmade crafts Pakistan",
    "embroidery",
    "mehndi",
    "crochet",
    "stitching",
    "fashion design",
    "tutoring",
    "women empowerment",
    "Alwan",
  ],
  authors: [{ name: "Alwan" }],
  openGraph: {
    title: "Alwan – Where Her Talent Gets the Credit It Deserves",
    description:
      "Pakistan's premier women-focused talent marketplace for handmade skills and services.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={poppins.variable}>
      <body className="min-h-screen flex flex-col">
        {/* ─── Sticky Navbar ─── */}
        <Navbar />

        {/* ─── Main Content ─── */}
        <main className="flex-1">{children}</main>

        {/* ─── Footer ─── */}
        <Footer />
      </body>
    </html>
  );
}
