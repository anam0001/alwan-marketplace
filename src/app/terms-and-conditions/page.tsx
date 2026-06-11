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
      title="Terms and Conditions"
      summary={`Welcome to Alwan. These Terms and Conditions ("Terms") govern your access to and use of the Alwan website, platform, products, services, and related features (collectively, the "Platform").

By accessing, browsing, registering for, or using Alwan, you acknowledge that you have read, understood, and agreed to be bound by these Terms. If you do not agree to these Terms, please do not use the Platform.`}
      updatedLabel="Last Updated: [Insert Date]"
      primaryCta={{ label: "Privacy Policy", href: "/privacy-policy" }}
      secondaryCta={{ label: "Community Guidelines", href: "/community-guidelines" }}
      sections={[
        {
          title: "1. About Alwan",
          paragraphs: [
            "Alwan is an online platform dedicated to empowering creators by providing opportunities to showcase their skills, products, services, and creative work to a wider audience.",
            "Alwan facilitates connections between creators and users but does not own, manufacture, create, or directly provide the products or services listed by creators unless explicitly stated.",
          ],
        },
        {
          title: "2. Eligibility",
          paragraphs: [
            "To use Alwan, you must provide accurate and complete information, comply with all applicable laws and regulations, and be legally capable of entering into binding agreements or have permission from a parent or legal guardian where required.",
            "Alwan reserves the right to refuse, suspend, or terminate access to any user at its sole discretion.",
          ],
        },
        {
          title: "3. User Accounts",
          paragraphs: [
            "Users may be required to create an account to access certain features.",
            "By creating an account, you agree to maintain accurate account information, keep login credentials secure and confidential, accept responsibility for activities through your account, and notify Alwan immediately of unauthorized use.",
            "Alwan shall not be liable for losses resulting from unauthorized account access caused by a user's failure to protect account credentials.",
          ],
        },
        {
          title: "4. Creator Accounts",
          paragraphs: [
            "Creators are responsible for ensuring that all information, products, services, portfolios, pricing, and content provided through their accounts are accurate and lawful.",
          ],
          bullets: [
            "Do not misrepresent identity or qualifications",
            "Do not upload content without ownership or permission",
            "Do not engage in deceptive, fraudulent, or misleading practices",
          ],
        },
        {
          title: "5. Intellectual Property and Ownership",
          paragraphs: [
            "Creators retain ownership of their original content, artwork, designs, educational materials, products, portfolios, and other intellectual property uploaded to the Platform.",
            "Alwan respects intellectual property rights and reserves the right to remove content suspected of infringement.",
          ],
          bullets: [
            "Users may not copy or reproduce creator content without permission",
            "Users may not claim ownership of another person's work",
            "Users may not use creator content commercially without authorization",
            "Users may not modify, distribute, or exploit creator content in violation of law",
          ],
        },
        {
          title: "6. License Granted to Alwan",
          paragraphs: [
            "By uploading content to the Platform, users grant Alwan a non-exclusive, worldwide, royalty-free license to host, store, display, reproduce, publish, and promote such content solely for operating, improving, marketing, and maintaining the Platform.",
            "This license does not transfer ownership of the content to Alwan.",
          ],
        },
        {
          title: "7. Creator Recognition Policy",
          paragraphs: [
            "Alwan is committed to protecting creators and ensuring proper recognition of original work.",
            "Verified violations may result in content removal, account suspension, permanent account termination, or legal action where applicable.",
          ],
          bullets: [
            "No false claims of authorship",
            "No copied content presented as original",
            "No misuse of creator portfolios, designs, photographs, or intellectual property",
          ],
        },
        {
          title: "8. Marketplace Conduct",
          paragraphs: [
            "Users agree to interact respectfully and professionally.",
            "Alwan reserves the right to investigate and take appropriate action against violations.",
          ],
          bullets: [
            "No harassment or abuse",
            "No hate speech or discrimination",
            "No threatening behavior",
            "No fraudulent activity or misleading information",
            "No spam or unauthorized advertising",
            "No manipulation of platform features",
            "No unlawful activity",
          ],
        },
        {
          title: "9. Products and Services",
          paragraphs: [
            "Creators are solely responsible for product quality, service quality, pricing, availability, product descriptions, and compliance with applicable laws.",
            "Customers are responsible for reviewing all relevant information before purchasing products or engaging services.",
            "Alwan does not guarantee the quality, suitability, legality, safety, availability, or performance of products and services offered by creators.",
          ],
        },
        {
          title: "10. Payments and Transactions",
          paragraphs: [
            "Where payment functionality is available, users agree to provide valid payment information and use approved payment methods.",
            "Alwan may introduce, modify, or remove service fees, commissions, subscriptions, or transaction charges at any time.",
            "Alwan reserves the right to delay, refuse, suspend, or cancel transactions suspected of fraud, misuse, security concerns, or policy violations.",
          ],
        },
        {
          title: "11. Refunds and Cancellations",
          paragraphs: [
            "Refunds and cancellations are subject to applicable platform policies and the nature of the transaction.",
            "Eligibility for refunds may vary depending on product type, service type, delivery status, and creator-specific policies.",
            "Alwan reserves the right to review disputes and determine appropriate actions where necessary.",
          ],
        },
        {
          title: "12. Reviews and Ratings",
          paragraphs: [
            "Users may submit reviews and ratings based on genuine experiences.",
            "Reviews must be truthful, respectful, and relevant to the transaction.",
            "Alwan may remove reviews that are fraudulent, misleading, abusive, defamatory, irrelevant, or otherwise inappropriate.",
          ],
        },
        {
          title: "13. Verification",
          paragraphs: [
            "To maintain platform integrity and user trust, Alwan may request identity verification, portfolio verification, business verification, or supporting documentation.",
            "Failure to provide requested information may result in restricted access, account suspension, or account termination.",
          ],
        },
        {
          title: "14. Prohibited Content",
          paragraphs: [
            "Users may not upload, promote, sell, or distribute prohibited material.",
            "Alwan may remove prohibited content without notice.",
          ],
          bullets: [
            "Illegal products or services",
            "Counterfeit goods",
            "Stolen property",
            "Infringing content",
            "Fraudulent schemes",
            "Harmful software",
            "Offensive or unlawful content",
            "Material that violates applicable laws or regulations",
          ],
        },
        {
          title: "15. Privacy",
          paragraphs: [
            "User information is collected, processed, and stored in accordance with the Alwan Privacy Policy.",
            "By using the Platform, users consent to the collection and processing of information necessary to provide and improve services.",
          ],
        },
        {
          title: "16. Platform Availability",
          paragraphs: [
            "Alwan strives to maintain reliable access to the Platform but does not guarantee uninterrupted availability.",
            "Access may be affected by maintenance activities, technical issues, security incidents, internet disruptions, and events beyond reasonable control.",
          ],
        },
        {
          title: "17. Third-Party Services",
          paragraphs: [
            "The Platform may integrate third-party services, including payment providers, communication tools, analytics services, hosting providers, and logistics partners.",
            "Alwan is not responsible for the availability, security, performance, or actions of third-party providers.",
          ],
        },
        {
          title: "18. Account Suspension and Termination",
          paragraphs: [
            "Alwan may suspend, restrict, or terminate any account that violates these Terms, engages in fraudulent activity, creates security risks, harms users or the Platform, or violates applicable laws.",
            "Such actions may be taken with or without prior notice where permitted by law.",
          ],
        },
        {
          title: "19. Limitation of Liability",
          paragraphs: [
            "To the fullest extent permitted by law, Alwan shall not be liable for indirect or consequential damages, loss of income or profits, loss of business opportunities, user disputes, product defects, service failures, delivery delays, third-party actions, or data loss resulting from circumstances beyond reasonable control.",
            "Use of the Platform is at the user's own risk.",
          ],
        },
        {
          title: "20. Indemnification",
          paragraphs: [
            "Users agree to indemnify, defend, and hold harmless Alwan, its founders, employees, affiliates, partners, and representatives from any claims, liabilities, losses, damages, costs, or expenses arising from violation of these Terms, misuse of the Platform, infringement of intellectual property rights, or unlawful conduct.",
          ],
        },
        {
          title: "21. Modifications to Terms",
          paragraphs: [
            "Alwan reserves the right to modify these Terms at any time.",
            "Updated versions will be posted on the Platform with a revised effective date.",
            "Continued use of the Platform after changes become effective constitutes acceptance of the revised Terms.",
          ],
        },
        {
          title: "22. Governing Law",
          paragraphs: [
            "These Terms shall be governed by and interpreted in accordance with the laws of Pakistan.",
            "Any dispute arising from or relating to these Terms shall be subject to the exclusive jurisdiction of the competent courts of Pakistan.",
          ],
        },
        {
          title: "23. Contact Information",
          paragraphs: [
            "For questions regarding these Terms and Conditions, please contact:",
            "Alwan Support",
            "Email: [Insert Email Address]",
            "Website: [Insert Website URL]",
          ],
        },
      ]}
    />
  );
}
