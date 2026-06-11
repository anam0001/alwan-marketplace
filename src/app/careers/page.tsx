import type { Metadata } from "next";
import InfoPage from "@/components/site/InfoPage";

export const metadata: Metadata = {
  title: "Careers",
  description:
    "Career opportunities at Alwan will be shared here in the future.",
};

export default function CareersPage() {
  return (
    <InfoPage
      eyebrow="Future page"
      title="Careers are coming soon."
      summary="As Alwan grows, we’ll open roles for product, support, content, and community work."
      updatedLabel="Future page"
      primaryCta={{ label: "Contact us", href: "/contact" }}
      secondaryCta={{ label: "About Alwan", href: "/about" }}
      sections={[
        {
          title: "What to expect",
          paragraphs: [
            "This page will host future hiring updates, role descriptions, and application details once the team expands.",
            "We want the careers page to feel clear, welcoming, and easy to scan for future applicants.",
          ],
        },
        {
          title: "Interested in working with us?",
          paragraphs: [
            "For now, send a message through Contact or WhatsApp and let us know how you’d like to contribute.",
            "If you are a designer, developer, content creator, or community builder, we’d love to hear from you.",
          ],
        },
      ]}
    />
  );
}