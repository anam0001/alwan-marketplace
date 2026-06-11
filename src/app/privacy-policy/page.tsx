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
      summary={`At Alwan, we value your privacy and are committed to protecting your personal information. This Privacy Policy explains how Alwan collects, uses, stores, shares, and protects information when you use our website, platform, products, and services (collectively, the "Platform").

By accessing or using Alwan, you agree to the practices described in this Privacy Policy.`}
      updatedLabel="Last Updated: [Insert Date]"
      primaryCta={{ label: "Terms & Conditions", href: "/terms-and-conditions" }}
      secondaryCta={{ label: "Contact", href: "/contact" }}
      sections={[
        {
          title: "1. Introduction",
          paragraphs: [
            "Alwan is committed to maintaining the privacy, confidentiality, and security of user information. This Privacy Policy applies to all visitors, registered users, creators, customers, and other individuals who interact with the Platform.",
          ],
        },
        {
          title: "2. Information We Collect",
          paragraphs: [
            "We may collect information you provide voluntarily, information automatically collected when you use the Platform, and information from third parties such as payment, verification, and analytics providers.",
          ],
        },
        {
          title: "2.A. Information You Provide",
          paragraphs: [
            "When you use Alwan, you may voluntarily provide your full name, email address, phone number, username, profile information, portfolio content, product and service listings, business information, messages sent through the Platform, customer support inquiries, and payment-related information where applicable.",
          ],
        },
        {
          title: "2.B. Automatically Collected Information",
          paragraphs: [
            "When you access the Platform, we may automatically collect IP address, device information, browser type, operating system, usage activity, pages visited, referring websites, date and time of access, and information from cookies and similar technologies.",
          ],
        },
        {
          title: "2.C. Information from Third Parties",
          paragraphs: [
            "We may receive information from payment service providers, verification providers, analytics providers, social media integrations, and security and fraud prevention partners.",
          ],
        },
        {
          title: "3. How We Use Your Information",
          paragraphs: [
            "Alwan may use collected information to create and manage user accounts, provide platform services, facilitate communication between users, verify identities and maintain platform security, process transactions and payments, improve platform functionality and user experience, respond to inquiries and support requests, prevent fraud and unauthorized activities, monitor compliance with platform policies, conduct research and analytics, send service-related communications, and comply with legal obligations.",
          ],
        },
        {
          title: "4. Creator Profiles and Public Information",
          paragraphs: [
            "Certain information may be publicly visible on creator profiles, including display name, profile image, portfolio content, skills and categories, product and service listings, reviews and ratings, and location information voluntarily provided by the creator.",
            "Users should avoid sharing sensitive personal information publicly.",
          ],
        },
        {
          title: "5. Cookies and Tracking Technologies",
          paragraphs: [
            "Alwan may use cookies, pixels, and similar technologies to improve website performance, remember user preferences, enhance security, analyze platform usage, and provide personalized experiences.",
            "Users may adjust browser settings to manage cookies; however, some features may not function properly if cookies are disabled.",
          ],
        },
        {
          title: "6. How We Share Information",
          paragraphs: [
            "Alwan does not sell personal information to third parties. We may share information with trusted service providers (hosting, analytics, payment processing, customer support, security), where required by law, to protect rights and safety, and in connection with business transfers such as mergers or sales.",
          ],
        },
        {
          title: "7. Payment Information",
          paragraphs: [
            "Where payment services are offered, payment information may be processed by authorized third-party payment providers. Alwan does not store complete payment card information unless explicitly stated. Payment providers handle payment data under their own privacy and security policies.",
          ],
        },
        {
          title: "8. Data Retention",
          paragraphs: [
            "Alwan retains information for as long as necessary to provide services, maintain business records, resolve disputes, enforce agreements, and comply with legal obligations. Information may be retained after account closure where required by law or legitimate business purposes.",
          ],
        },
        {
          title: "9. Data Security",
          paragraphs: [
            "Alwan implements reasonable administrative, technical, and organizational measures designed to protect user information. However, no method of internet transmission or electronic storage can guarantee absolute security. Users acknowledge that they provide information at their own risk.",
          ],
        },
        {
          title: "10. User Rights",
          paragraphs: [
            "Subject to applicable laws, users may have the right to access personal information, correct inaccurate information, request deletion, withdraw consent, object to certain processing activities, and request information about data usage. Requests may be submitted through the contact information provided below.",
          ],
        },
        {
          title: "11. Account Deletion",
          paragraphs: [
            "Users may request account deletion by contacting Alwan. Certain information may be retained where necessary to comply with legal obligations, prevent fraud, resolve disputes, enforce agreements, or maintain security records.",
          ],
        },
        {
          title: "12. Children's Privacy",
          paragraphs: [
            "Alwan does not knowingly collect personal information from children in violation of applicable laws. Where participation by minors is permitted, parental or guardian consent may be required. If Alwan becomes aware of unauthorized collection from a child, reasonable steps may be taken to remove such information.",
          ],
        },
        {
          title: "13. Third-Party Links",
          paragraphs: [
            "The Platform may contain links to third-party websites, services, or applications. Alwan is not responsible for the privacy practices, content, or policies of third-party services. Users should review privacy policies of external websites before providing information.",
          ],
        },
        {
          title: "14. International Data Transfers",
          paragraphs: [
            "Information may be processed, stored, or transferred to locations where Alwan, its service providers, or partners operate. By using the Platform, users consent to such transfers where permitted by applicable law.",
          ],
        },
        {
          title: "15. Fraud Prevention and Security Monitoring",
          paragraphs: [
            "To protect users and maintain platform integrity, Alwan may monitor activity, investigate suspicious behavior, verify information, and take actions necessary to prevent fraud, abuse, unauthorized access, or policy violations.",
          ],
        },
        {
          title: "16. Marketing Communications",
          paragraphs: [
            "Alwan may send platform updates, service announcements, newsletters, promotional communications, and educational content. Users may opt out of marketing communications at any time by following unsubscribe instructions or contacting Alwan.",
          ],
        },
        {
          title: "17. Changes to This Privacy Policy",
          paragraphs: [
            "Alwan reserves the right to update or modify this Privacy Policy at any time. Updated versions will be published on the Platform with a revised effective date. Continued use of the Platform following changes constitutes acceptance of the updated Privacy Policy.",
          ],
        },
        {
          title: "18. Contact Us",
          paragraphs: [
            "If you have questions, concerns, or requests regarding this Privacy Policy, please contact Alwan Support:",
            "Email: [Insert Email Address]",
            "Website: [Insert Website URL]",
          ],
        },
      ]}
    />
  );
}
