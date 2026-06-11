import type { Metadata } from "next";
import InfoPage from "@/components/site/InfoPage";

export const metadata: Metadata = {
  title: "Creator Protection Policy",
  description:
    "How Alwan protects creators, enforces recognition, and handles infringement reports.",
};

export default function CreatorProtectionPolicyPage() {
  return (
    <InfoPage
      eyebrow="Safety"
      title="Creator Protection Policy"
      summary={`At Alwan, we believe every creator deserves recognition, respect, and ownership of their work. This Creator Protection Policy outlines the measures, rights, and standards established to protect creators who showcase products, services, skills, portfolios, and creative work on the Alwan platform.`}
      updatedLabel="Last Updated: [Insert Date]"
      primaryCta={{ label: "Report an Issue", href: "/contact" }}
      secondaryCta={{ label: "Terms & Conditions", href: "/terms-and-conditions" }}
      sections={[
        {
          title: "1. Our Commitment",
          paragraphs: [
            "Alwan was built to empower creators and ensure that talent receives the recognition it deserves.",
            "We are committed to protecting creator ownership rights, promoting fair opportunities, preventing exploitation of creative work, supporting ethical interactions between users, and providing a respectful and safe platform environment.",
          ],
        },
        {
          title: "2. Creator Ownership Rights",
          paragraphs: [
            "Creators retain full ownership of their original designs, artwork, embroidery patterns, crochet creations, mehndi designs, fashion concepts, educational materials, portfolios, product photographs, service-related content, written content, and digital creations.",
            "Uploading content to Alwan does not transfer ownership to Alwan, customers, or other users.",
          ],
        },
        {
          title: "3. Protection Against Unauthorized Use",
          paragraphs: [
            "Users may not copy creator work without permission, reproduce creator content for commercial purposes, remove creator attribution or credit, resell creator work as their own, modify creator content and claim ownership, or use creator portfolios to misrepresent their own abilities.",
            "Violations may result in content removal, account suspension, permanent account termination, and legal action where applicable.",
          ],
        },
        {
          title: "4. Creator Recognition",
          paragraphs: [
            "Alwan is committed to ensuring creators receive proper credit for their work. Where applicable, creator names may be displayed alongside listings, creator profiles may showcase ownership of published work, and attribution may be maintained for portfolio materials and creative content.",
            "Users must not falsely claim authorship of another creator's work.",
          ],
        },
        {
          title: "5. Reporting Intellectual Property Violations",
          paragraphs: [
            "Creators who believe their work has been copied, misused, or infringed may submit a report to Alwan. Reports should include a description of the original work, evidence of ownership, location of the allegedly infringing content, and supporting documentation where available.",
            "Alwan reserves the right to investigate reported violations and take appropriate action.",
          ],
        },
        {
          title: "6. Portfolio Protection",
          paragraphs: [
            "Creators may upload portfolio materials to demonstrate their skills and experience. Portfolio content remains the property of the creator.",
            "Users are prohibited from downloading and reusing portfolio content without permission, creating duplicate listings using another creator's work, or presenting another creator's portfolio as their own.",
          ],
        },
        {
          title: "7. Fair Marketplace Practices",
          paragraphs: [
            "Customers and creators must engage honestly and fairly. Prohibited practices include misrepresentation of products or services, false claims regarding experience or qualifications, manipulation of reviews or ratings, deceptive advertising, and fraudulent transactions.",
          ],
        },
        {
          title: "8. Protection Against Harassment",
          paragraphs: [
            "Alwan maintains a zero-tolerance policy toward harassment of creators. Prohibited behavior includes abusive messages, threats, intimidation, discrimination, offensive language, unwanted solicitation, and any conduct intended to harm, pressure, or exploit creators.",
            "Users engaging in such behavior may face immediate account restrictions or permanent removal.",
          ],
        },
        {
          title: "9. Privacy and Safety",
          paragraphs: [
            "Creators are encouraged to protect their personal information. Alwan recommends that creators avoid publicly sharing national identification numbers, banking details, residential addresses, and other sensitive personal information.",
            "Alwan may take reasonable measures to protect creator privacy but cannot guarantee complete protection against misuse by third parties.",
          ],
        },
        {
          title: "10. Verification and Trust Measures",
          paragraphs: [
            "To promote trust and authenticity, Alwan may implement verification measures including identity verification, profile verification, portfolio review, business verification, and contact verification.",
            "Verification does not guarantee future performance, quality, or reliability but may help improve platform integrity.",
          ],
        },
        {
          title: "11. Fraud Prevention",
          paragraphs: [
            "Alwan may monitor activity to identify stolen portfolios, impersonation, fake creator profiles, fraudulent transactions, and suspicious platform activity. Accounts involved in fraudulent conduct may be suspended or permanently removed without prior notice.",
          ],
        },
        {
          title: "12. Creator Responsibilities",
          paragraphs: [
            "Creators are responsible for providing accurate information, delivering products and services as described, maintaining lawful business practices, respecting intellectual property rights, and complying with platform policies and applicable laws.",
            "Failure to meet these responsibilities may result in enforcement actions.",
          ],
        },
        {
          title: "13. Dispute Resolution",
          paragraphs: [
            "In the event of a dispute involving creator content, ownership, products, or services, Alwan may review available information and determine appropriate actions. Alwan reserves the right to request additional evidence, remove disputed content, restrict account access, suspend or terminate accounts, or take other actions necessary to protect platform integrity.",
          ],
        },
        {
          title: "14. Limitations of Protection",
          paragraphs: [
            "While Alwan is committed to protecting creators, no online platform can completely prevent unauthorized copying, misuse, or infringement. Creators acknowledge that internet content may be copied without authorization and that platform monitoring may not identify every violation immediately.",
            "Alwan will make reasonable efforts to investigate and address reported violations but cannot guarantee prevention of all misuse.",
          ],
        },
        {
          title: "15. Policy Updates",
          paragraphs: [
            "Alwan reserves the right to update this Creator Protection Policy at any time. Updated versions will be published on the Platform with a revised effective date. Continued use of the Platform after updates constitutes acceptance of the revised policy.",
          ],
        },
        {
          title: "16. Contact Us",
          paragraphs: [
            "For questions, concerns, infringement reports, or creator protection requests, please contact Alwan Creator Protection Team:",
            "Email: [Insert Email Address]",
            "Website: [Insert Website URL]",
          ],
        },
        {
          title: "Our Promise to Creators",
          paragraphs: [
            "At Alwan, we believe talent deserves recognition, ownership deserves protection, and every creator deserves the opportunity to grow with dignity, confidence, and credit for their work.",
            "Alwan — Her Hands. Her Hustle. Her Future.",
          ],
        },
      ]}
    />
  );
}
