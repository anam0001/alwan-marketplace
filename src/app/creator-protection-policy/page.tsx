import type { Metadata } from "next";
import InfoPage from "@/components/site/InfoPage";

export const metadata: Metadata = {
  title: "Creator Protection Policy",
  description:
    "Learn how Alwan protects creators from harassment, misuse, and unfair behavior.",
};

export default function CreatorProtectionPolicyPage() {
  return (
    <InfoPage
      eyebrow="Safety"
      title="Creator Protection Policy"
      summary="Creators deserve safe communication, clear expectations, and support when something feels off."
      updatedLabel="Last updated: June 2026"
      primaryCta={{ label: "Report an issue", href: "/contact" }}
      secondaryCta={{ label: "Community Guidelines", href: "/community-guidelines" }}
      sections={[
        {
          title: "Respectful communication",
          paragraphs: [
            "Harassment, threats, spam, and abusive behavior toward creators are not allowed.",
            "Users should keep communication relevant to the service or product being discussed.",
          ],
        },
        {
          title: "Support and escalation",
          paragraphs: [
            "If a creator believes a buyer has acted unfairly or dangerously, they should contact Alwan immediately.",
            "We will review reports, preserve relevant information, and take reasonable action where appropriate.",
          ],
        },
      ]}
    />
  );
}