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
      title="Refund and Cancellation Policy"
      summary={`At Alwan, we strive to create a fair and transparent marketplace for both creators and customers. This Refund and Cancellation Policy outlines the conditions under which refunds, cancellations, and dispute resolutions may be handled on the Alwan platform.`}
      updatedLabel="Last Updated: [Insert Date]"
      primaryCta={{ label: "Contact", href: "/contact" }}
      secondaryCta={{ label: "Terms & Conditions", href: "/terms-and-conditions" }}
      sections={[
        {
          title: "1. Purpose of This Policy",
          paragraphs: [
            "Alwan is a marketplace that connects creators and customers. As products and services may vary by creator, refund and cancellation eligibility may differ depending on the nature of the transaction.",
            "This policy establishes general guidelines for handling refunds and cancellations fairly and consistently.",
          ],
        },
        {
          title: "2. Marketplace Role",
          paragraphs: [
            "Unless explicitly stated otherwise, Alwan acts as a platform facilitator and is not the seller, manufacturer, service provider, or owner of products and services listed by creators.",
            "Creators are responsible for fulfilling orders, delivering services, and honoring applicable refund obligations.",
          ],
        },
        {
          title: "3. Order Cancellation by Customers",
          paragraphs: [
            "Customers may request cancellation of an order before production has started, work has commenced, the item has been shipped, or the service has been delivered.",
            "Approval of cancellation requests may depend on the creator's status and the circumstances of the order.",
          ],
        },
        {
          title: "4. Order Cancellation by Creators",
          paragraphs: [
            "Creators may cancel orders when required materials become unavailable, the order cannot be fulfilled as agreed, unexpected circumstances prevent completion, or fraudulent or suspicious activity is detected.",
            "Creators should notify customers promptly when cancellations are necessary.",
          ],
        },
        {
          title: "5. Refund Eligibility for Physical Products",
          paragraphs: [
            "Customers may be eligible for a refund if the product received is significantly different from the description, the wrong item was delivered, the item arrives damaged due to factors attributable to the creator, the order cannot be fulfilled, or the product is proven to be counterfeit or misrepresented.",
            "Supporting evidence such as photographs, videos, and order information may be required.",
          ],
        },
        {
          title: "6. Non-Refundable Physical Products",
          paragraphs: [
            "Refunds may not be granted for change of mind after delivery, incorrect size/color/specifications selected by the customer, minor variations in handmade products, normal wear and tear, customer misuse, or personalized/custom-made products unless defective or misrepresented.",
          ],
        },
        {
          title: "7. Refund Eligibility for Services",
          paragraphs: [
            "Customers may request a refund when the service was not delivered, the delivered service substantially differs from the agreed description, the creator fails to meet agreed requirements without reasonable explanation, or fraudulent conduct is identified.",
            "Each case may be reviewed individually.",
          ],
        },
        {
          title: "8. Non-Refundable Services",
          paragraphs: [
            "Refunds may not be granted when the service has been fully delivered as described, the customer changes their mind after work has begun, dissatisfaction is based solely on personal preference despite delivery according to agreed requirements, or delays are caused by the customer's failure to provide required information, materials, or responses.",
          ],
        },
        {
          title: "9. Custom and Personalized Orders",
          paragraphs: [
            "Custom-made, personalized, or specially commissioned products and services generally cannot be refunded once production or work has begun. Exceptions may apply in cases involving defects, misrepresentation, failure to deliver, or proven creator error.",
          ],
        },
        {
          title: "10. Digital Products",
          paragraphs: [
            "Where digital products are offered, refunds may not be available after successful delivery, download, access, or transfer unless otherwise required by applicable law. Exceptions may apply if the product is inaccessible, differs substantially from its description, or technical issues prevent reasonable use.",
          ],
        },
        {
          title: "11. Refund Request Process",
          paragraphs: [
            "To request a refund, customers should provide order details, a description of the issue, supporting evidence where applicable, and any communication relevant to the dispute. Incomplete or unsupported claims may delay review.",
          ],
        },
        {
          title: "12. Dispute Resolution",
          paragraphs: [
            "Customers and creators are encouraged to communicate and attempt resolution directly before escalating disputes. Where necessary, Alwan may review available information and facilitate resolution efforts. Alwan reserves the right to request additional documentation from either party.",
          ],
        },
        {
          title: "13. Fraudulent Claims",
          paragraphs: [
            "Submitting false, misleading, abusive, or fraudulent refund requests is strictly prohibited. Alwan may take action against users who provide false evidence, abuse refund procedures, engage in chargeback fraud, or repeatedly exploit platform policies. Such actions may result in account suspension or permanent termination.",
          ],
        },
        {
          title: "14. Payment Reversals and Chargebacks",
          paragraphs: [
            "Customers are encouraged to contact creators or Alwan before initiating chargebacks through financial institutions. Alwan reserves the right to investigate chargebacks and may take appropriate action where abuse or fraud is identified.",
          ],
        },
        {
          title: "15. Processing Time",
          paragraphs: [
            "Approved refunds may require reasonable processing time depending on payment method, financial institutions, payment providers, and verification requirements. Actual processing times may vary.",
          ],
        },
        {
          title: "16. Shipping and Delivery Issues",
          paragraphs: [
            "Refund eligibility relating to shipping may depend on the circumstances of the case. Alwan is generally not responsible for delays, losses, or damages caused by courier services, customs procedures, incorrect delivery information provided by customers, or events beyond reasonable control.",
          ],
        },
        {
          title: "17. Exceptional Circumstances",
          paragraphs: [
            "Alwan reserves the right to review unique situations and make reasonable decisions in cases not specifically covered by this Policy. Any decision made to protect users, maintain fairness, or preserve platform integrity shall be considered final unless otherwise required by applicable law.",
          ],
        },
        {
          title: "18. Policy Updates",
          paragraphs: [
            "Alwan may update this Refund and Cancellation Policy from time to time. Updated versions will be published on the Platform with a revised effective date. Continued use of the Platform following updates constitutes acceptance of the revised policy.",
          ],
        },
        {
          title: "19. Contact Us",
          paragraphs: [
            "For refund requests, cancellation inquiries, or dispute-related concerns, please contact Alwan Support:",
            "Email: [Insert Email Address]",
            "Website: [Insert Website URL]",
          ],
        },
        {
          title: "Fairness Commitment",
          paragraphs: [
            "Alwan is committed to creating a marketplace built on trust, transparency, and respect. We encourage both creators and customers to communicate honestly, act in good faith, and work together toward fair resolutions whenever issues arise.",
            "Alwan — Her Hands. Her Hustle. Her Future.",
          ],
        },
      ]}
    />
  );
}
