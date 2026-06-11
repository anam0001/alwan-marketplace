import type { Metadata } from "next";
import InfoPage from "@/components/site/InfoPage";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description:
    "Read Alwan's terms and conditions for using the marketplace as a creator or customer.",
};

export default function TermsPage() {
  return (
    <InfoPage
      eyebrow="Legal"
      title="Terms & Conditions"
      summary="These terms explain how Alwan works, what we expect from users, and how the marketplace should be used responsibly."
      updatedLabel="Last updated: June 2026"
      primaryCta={{ label: "Privacy Policy", href: "/privacy-policy" }}
      secondaryCta={{ label: "Community Guidelines", href: "/community-guidelines" }}
      sections={[
        {
          title: "1. Using Alwan",
          paragraphs: [
            "By browsing or using the platform, you agree to follow these terms and all applicable policies.",
            "You should use the marketplace only for lawful, respectful, and genuine activity.",
            "Alwan is built to help women showcase handmade skills, services, and creative talent directly to customers.",
          ],
        },
        {
          title: "2. Orders, payments, and creator content",
          paragraphs: [
            "Creators are responsible for accurate service information, fair communication, and honoring agreed delivery timelines.",
            "Customers should review descriptions carefully before placing an order or requesting a booking.",
            "Any payment, delivery, or custom request should match the information shown on the creator profile or gig page.",
          ],
          bullets: [
            "No fake listings or misleading claims",
            "No abusive behavior toward creators or customers",
            "Respect platform policies and applicable law",
            "Keep custom requests clear before work begins",
            "Do not resell or misuse creator work without permission",
          ],
        },
        {
          title: "3. Platform safety and moderation",
          paragraphs: [
            "We may review content, remove harmful listings, limit access, or take other action if we believe platform rules are being broken.",
            "We may also update these terms as the product grows, so it is a good idea to check this page from time to time.",
          ],
        },
        {
          title: "4. Questions or concerns",
          paragraphs: [
            "If something on the platform looks incorrect or unsafe, please contact the Alwan team so we can review it.",
            "For urgent support, use the Contact page or WhatsApp button in the footer.",
          ],
        },
      ]}
    />
  );
}