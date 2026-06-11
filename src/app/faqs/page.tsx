import type { Metadata } from "next";
import InfoPage from "@/components/site/InfoPage";

export const metadata: Metadata = {
  title: "FAQs",
  description:
    "Frequently asked questions about how Alwan works for creators and customers.",
};

export default function FaqsPage() {
  return (
    <InfoPage
      eyebrow="Help"
      title="Frequently Asked Questions"
      summary="A quick guide to the most common questions about creators, discovery, and policies."
      updatedLabel="Last updated: June 2026"
      primaryCta={{ label: "Become a Creator", href: "/join" }}
      secondaryCta={{ label: "Explore Talent", href: "/explore-talent" }}
      sections={[
        {
          title: "How do I contact a creator?",
          paragraphs: [
            "Open a creator profile or gig page and use the message/contact options available on the site.",
            "If contact details are hidden, you can still browse the portfolio and use the platform messaging flow to get started.",
          ],
        },
        {
          title: "Can I browse anonymously?",
          paragraphs: [
            "Yes. Explore Talent lets you see the work first, while creator identities stay hidden until you need more details.",
            "This gives you a faster way to discover talent before committing to a conversation or booking.",
          ],
        },
        {
          title: "How do refunds work?",
          paragraphs: [
            "Refunds depend on the type of order, whether work has started, and whether both sides agree on a resolution.",
            "Check the Refund Policy page for the clearest explanation of when a review may be possible.",
          ],
        },
        {
          title: "Is sign in live yet?",
          paragraphs: [
            "Sign in access is being prepared. For now, join as a creator or use Contact for support.",
            "If you are a future creator or partner, the Contact page is the fastest way to reach the team.",
          ],
        },
      ]}
    />
  );
}