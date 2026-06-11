import type { Metadata } from "next";
import InfoPage from "@/components/site/InfoPage";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Understand what data Alwan collects, how it is used, and how your information is protected.",
};

export default function PrivacyPolicyPage() {
  return (
    <InfoPage
      eyebrow="Legal"
      title="Privacy Policy"
      summary="We collect only the information needed to operate the marketplace, support creators, and improve the experience."
      updatedLabel="Last updated: June 2026"
      primaryCta={{ label: "Terms & Conditions", href: "/terms-and-conditions" }}
      secondaryCta={{ label: "FAQs", href: "/faqs" }}
      sections={[
        {
          title: "1. Information we may collect",
          paragraphs: [
            "When you contact Alwan, browse the site, or send a creator message, we may collect basic details such as name, contact information, and the content you submit.",
            "If you join as a creator, we may also store the skills, city, and portfolio details you share so your profile can be displayed correctly.",
          ],
          bullets: [
            "Creator profile information and service details",
            "Messages sent through the platform",
            "Basic analytics used to improve the site",
            "Portfolio images or other content you upload",
          ],
        },
        {
          title: "2. How we use information",
          paragraphs: [
            "We use data to connect customers with creators, respond to inquiries, prevent misuse, and improve site performance.",
            "We do not sell your personal information as a business model.",
            "Some information may be used to display your profile, respond to support requests, or keep the marketplace safe and working well.",
          ],
        },
        {
          title: "3. Sharing, retention, and your choices",
          paragraphs: [
            "We share information only when needed to operate the service, follow the law, or support a request you have made.",
            "We keep information only for as long as needed for platform operations, safety, and business records.",
            "If you want an update or correction to your information, contact the Alwan team through the Contact page.",
          ],
        },
      ]}
    />
  );
}