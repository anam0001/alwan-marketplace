import type { Metadata } from "next";
import InfoPage from "@/components/site/InfoPage";

export const metadata: Metadata = {
  title: "Community Guidelines",
  description:
    "Community rules for respectful, safe, and honest participation on Alwan.",
};

export default function CommunityGuidelinesPage() {
  return (
    <InfoPage
      eyebrow="Community"
      title="Community Guidelines"
      summary={`Alwan is a community built to celebrate talent, creativity, entrepreneurship, and opportunity. Our mission is to create a respectful, safe, and empowering environment where creators can showcase their skills, receive recognition for their work, and connect with customers confidently.`}
      updatedLabel="Last Updated: [Insert Date]"
      primaryCta={{ label: "FAQs", href: "/faqs" }}
      secondaryCta={{ label: "Contact", href: "/contact" }}
      sections={[
        {
          title: "1. Our Community Values",
          paragraphs: [
            "At Alwan, we believe in: Respect, Integrity, Creativity, Inclusivity, Fairness, Professionalism, and Recognition of original talent.",
            "Every user contributes to the culture of our community. We expect all members to treat one another with dignity and respect.",
          ],
        },
        {
          title: "2. Respect Others",
          paragraphs: [
            "Users must communicate respectfully and professionally at all times.",
            "Disrespectful conduct may result in content removal, account restrictions, or permanent account suspension.",
          ],
          bullets: [
            "Harass others",
            "Bully others",
            "Intimidate others",
            "Threaten others",
            "Use abusive language",
            "Engage in discriminatory behavior",
            "Encourage harm toward individuals or groups",
          ],
        },
        {
          title: "3. Protect Original Talent",
          paragraphs: [
            "One of Alwan's core missions is to ensure creators receive proper recognition for their work.",
            "Always respect intellectual property and creator ownership rights.",
          ],
          bullets: [
            "Claim another person's work as your own",
            "Copy creator portfolios without permission",
            "Re-upload content belonging to others",
            "Misrepresent your skills using someone else's work",
            "Remove creator credit or attribution",
          ],
        },
        {
          title: "4. Be Honest and Authentic",
          paragraphs: [
            "Trust is essential to the success of our community.",
            "Users must not create fake profiles, use false identities, provide misleading information, falsely advertise products or services, manipulate ratings or reviews, or engage in deceptive practices.",
          ],
        },
        {
          title: "5. Keep Listings Accurate",
          paragraphs: [
            "Creators must ensure that products are accurately described, services are clearly explained, pricing is transparent, and images represent actual work whenever possible.",
            "Misleading listings may be removed.",
          ],
        },
        {
          title: "6. No Fraud or Scams",
          paragraphs: [
            "Fraudulent activities are strictly prohibited and accounts involved may be permanently removed without notice.",
          ],
          bullets: [
            "Fake orders",
            "Payment fraud",
            "Chargeback abuse",
            "Impersonation",
            "Counterfeit products",
            "False promises",
            "Deceptive business practices",
          ],
        },
        {
          title: "7. Maintain Professional Communication",
          paragraphs: [
            "All communication conducted through or related to Alwan should remain professional.",
            "Users should respond respectfully, communicate clearly, avoid offensive language, respect personal boundaries, and resolve disagreements constructively.",
          ],
        },
        {
          title: "8. Protect Privacy and Personal Information",
          paragraphs: [
            "Do not share or request sensitive information unnecessarily.",
            "Examples include national identification numbers, banking credentials, passwords, private financial information, and personal security information.",
          ],
        },
        {
          title: "9. Prohibited Content",
          paragraphs: [
            "The following content is not permitted on Alwan: illegal content, stolen content, counterfeit goods, copyright-infringing material, fraudulent schemes, hate speech, violent threats, harassment, obscene or offensive material, misleading advertisements, or content that violates applicable laws.",
            "Alwan reserves the right to remove prohibited content immediately.",
          ],
        },
        {
          title: "10. Reviews and Ratings",
          paragraphs: [
            "Reviews should be honest, respectful, relevant, and based on actual experiences.",
            "Users may not submit fake reviews, exchange reviews for compensation, manipulate ratings, or use reviews to harass others.",
          ],
        },
        {
          title: "11. Safe and Fair Marketplace Practices",
          paragraphs: [
            "Creators and customers should engage fairly and must not exploit other users or attempt to circumvent platform policies.",
          ],
        },
        {
          title: "12. Reporting Violations",
          paragraphs: [
            "If you encounter content or behavior that violates these Guidelines, you are encouraged to report it.",
            "Alwan may investigate reports and take appropriate action.",
          ],
        },
        {
          title: "13. Enforcement Actions",
          paragraphs: [
            "Depending on the severity of a violation, Alwan may remove content, issue warnings, restrict platform features, suspend accounts, permanently terminate accounts, or report unlawful conduct to appropriate authorities where required.",
          ],
        },
        {
          title: "14. Repeat Violations",
          paragraphs: [
            "Users who repeatedly violate Community Guidelines may face permanent removal from the Platform.",
            "A history of misconduct may be considered when determining enforcement actions.",
          ],
        },
        {
          title: "15. Our Commitment to Women Creators",
          paragraphs: [
            "Alwan was founded with a mission to help talented creators gain visibility, recognition, and opportunities.",
            "We are committed to fostering an environment where creators can showcase their work confidently and build sustainable opportunities.",
          ],
        },
        {
          title: "16. Changes to Community Guidelines",
          paragraphs: [
            "Alwan may update these Community Guidelines from time to time. Updated versions will be published on the Platform with a revised effective date.",
            "Continued use of the Platform after updates become effective constitutes acceptance of the revised Guidelines.",
          ],
        },
        {
          title: "17. Contact Us",
          paragraphs: [
            "If you have questions, concerns, or wish to report a violation of these Community Guidelines, please contact: Alwan Community Support Team.",
            "Email: [Insert Email Address] | Website: [Insert Website URL]",
          ],
        },
        {
          title: "Our Community Promise",
          paragraphs: [
            "At Alwan, we believe that talent deserves recognition, creativity deserves respect, and every creator deserves the opportunity to grow in a safe, professional, and supportive environment.",
            "By being part of Alwan, you help build a community founded on trust, respect, fairness, and empowerment.",
            "Alwan — Her Hands. Her Hustle. Her Future.",
          ],
        },
      ]}
    />
  );
}