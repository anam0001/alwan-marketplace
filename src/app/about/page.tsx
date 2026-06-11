import type { Metadata } from "next";
import InfoPage from "@/components/site/InfoPage";

export const metadata: Metadata = {
  title: "About Alwan",
  description:
    "Learn how Alwan helps women showcase their talent, get discovered, and earn independently across Pakistan.",
};

export default function AboutPage() {
  return (
    <InfoPage
      eyebrow="About Alwan"
      title="A marketplace built to give women’s talent the spotlight it deserves."
      summary="Alwan is designed to help women creators turn skill into income, with a polished marketplace experience that feels modern, respectful, and easy to use."
      updatedLabel="Built for creators, customers, and community"
      primaryCta={{ label: "Become a Creator", href: "/join" }}
      secondaryCta={{ label: "Explore Talent", href: "/explore-talent" }}
      sections={[
        {
          title: "Our mission",
          paragraphs: [
            "We want to make it simple for women in Pakistan to showcase handmade work, creative services, and private home-based talent in one trusted space.",
            "Alwan reduces the friction between discovery and booking so creators can focus on doing their best work.",
          ],
        },
        {
          title: "What makes Alwan different",
          paragraphs: [
            "We combine curated discovery, clear pricing, creator protection, and friendly support into one experience.",
          ],
          bullets: [
            "Premium marketplace presentation with modern design",
            "Creator-friendly discovery and pricing features",
            "Policies and support built around safety and trust",
          ],
        },
      ]}
    />
  );
}