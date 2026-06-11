import type { Metadata } from "next";
import InfoPage from "@/components/site/InfoPage";

export const metadata: Metadata = {
  title: "Refund Policy",
  description:
    "See when refunds may apply on Alwan and how refund requests are handled.",
};

export default function RefundPolicyPage() {
  return (
    <InfoPage
      eyebrow="Payments"
      title="Refund Policy"
      summary="Because many Alwan services are custom or handmade, refund eligibility depends on the order and the circumstances."
      updatedLabel="Last updated: June 2026"
      primaryCta={{ label: "Contact support", href: "/contact" }}
      secondaryCta={{ label: "Terms & Conditions", href: "/terms-and-conditions" }}
      sections={[
        {
          title: "1. When a refund may be considered",
          paragraphs: [
            "Refunds may be reviewed when an order is canceled before work starts, when there is a clear issue with fulfillment, or when both parties agree to a resolution.",
            "Every request is reviewed case by case because handmade and custom work often involve materials, time, and preparation that cannot be recovered.",
          ],
          bullets: [
            "Work not started yet",
            "Service mismatch or delivery failure",
            "Mutual agreement between creator and customer",
            "Major issue that can be verified by both sides",
          ],
        },
        {
          title: "2. What matters most",
          paragraphs: [
            "Because creators invest time and materials, many orders may not be fully refundable after work begins.",
            "We encourage clear communication before ordering so expectations stay realistic for both sides.",
            "If a dispute happens, keep messages, screenshots, and order details ready so the issue can be reviewed quickly.",
          ],
        },
        {
          title: "3. How to request help",
          paragraphs: [
            "Use the Contact page, share the order details, and explain what happened in a short, clear message.",
            "The team will review the request and respond with the next step as soon as possible.",
          ],
        },
      ]}
    />
  );
}