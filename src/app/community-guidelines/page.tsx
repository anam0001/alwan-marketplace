import type { Metadata } from "next";
import InfoPage from "@/components/site/InfoPage";

export const metadata: Metadata = {
  title: "Community Guidelines",
  description:
    "Community rules for respectful, safe, and honest participation on Alwan.",
};

export default function CommunityGuidelinesPage() {
  return (
    <InfoPage
      eyebrow="Community"
      title="Community Guidelines"
      summary="Alwan works best when people communicate with kindness, honesty, and respect."
      updatedLabel="Last updated: June 2026"
      primaryCta={{ label: "FAQs", href: "/faqs" }}
      secondaryCta={{ label: "Contact", href: "/contact" }}
      sections={[
        {
          title: "1. Be respectful",
          paragraphs: [
            "Treat creators and customers politely. No harassment, hateful language, or threats.",
            "Good communication keeps the marketplace safe and welcoming for everyone.",
          ],
        },
        {
          title: "2. Be honest",
          paragraphs: [
            "Do not post fake profiles, misleading pricing, stolen work, or spam messages.",
            "If a listing changes, update it clearly so buyers can make informed decisions.",
          ],
        },
        {
          title: "3. Keep it safe",
          paragraphs: [
            "Share only the information needed to complete a booking and follow platform guidance when something feels wrong.",
            "Never pressure someone to leave the platform before a request or service has been properly discussed.",
          ],
        },
        {
          title: "4. Respect creator work",
          paragraphs: [
            "Do not copy, resell, or misuse creator content without permission.",
            "Original work should stay credited to the creator who made it.",
          ],
        },
      ]}
    />
  );
}