import type { Metadata } from "next";
import InfoPage from "@/components/site/InfoPage";

export const metadata: Metadata = {
  title: "FAQs",
  description:
    "Frequently asked questions about how Alwan works for creators and customers.",
};

export default function FaqsPage() {
  return (
    <InfoPage
      eyebrow="Help"
      title="Frequently Asked Questions"
      summary="A quick guide to the most common questions about creators, discovery, and policies."
      updatedLabel="Last updated: June 2026"
      primaryCta={{ label: "Become a Creator", href: "/join" }}
      secondaryCta={{ label: "Explore Talent", href: "/explore-talent" }}
      sections={[
        {
          title: "General Questions",
          paragraphs: [
            "What is Alwan? Alwan is a platform that helps talented creators showcase their skills, products, and services while receiving proper recognition and opportunities to connect directly with customers.",
            "Who can join Alwan? Anyone with genuine skills, products, or services can join Alwan, subject to our platform policies and eligibility requirements.",
            "Is Alwan only for women? Alwan is designed to empower and highlight talented women creators. However, participation rules may evolve as the platform grows.",
            "Is creating an account free? Yes. Creating an account on Alwan is free unless otherwise stated.",
          ],
        },
        {
          title: "For Creators",
          paragraphs: [
            "What types of skills can I showcase on Alwan? You can showcase a variety of skills and services, including embroidery, crochet, stitching and tailoring, mehndi art, fashion design, handmade crafts, tutoring, graphic design, web development, digital services, and many more.",
            "How do I become a creator? Simply register an account, complete your profile, and submit your portfolio, products, or services for listing.",
            "Do I own my work after uploading it? Yes. Creators retain ownership of their original work. Alwan does not claim ownership of your intellectual property.",
            "How does Alwan protect creators? Alwan has a Creator Protection Policy that prohibits copying, impersonation, unauthorized use of creator content, and false ownership claims.",
            "Can I edit or remove my listings? Yes. Creators can update, edit, or remove their listings subject to platform rules.",
            "Do I need professional experience to join? No. Whether you are a professional, student, freelancer, housewife, or self-taught creator, you are welcome to showcase your talent.",
            "Will Alwan guarantee sales? No. Alwan provides visibility and opportunities but cannot guarantee sales, clients, or earnings.",
          ],
        },
        {
          title: "For Customers",
          paragraphs: [
            "How do I purchase a product or service? Browse creator profiles, review listings, and follow the purchasing process provided on the platform.",
            "Can I contact creators directly? Depending on platform features and policies, communication options may be available to facilitate collaboration and purchases.",
            "How can I verify a creator's quality? You can review portfolios, ratings, reviews, profile information, and any available verification indicators.",
            "What if I receive a product different from what was advertised? You may submit a complaint or refund request according to the Refund and Cancellation Policy.",
            "Can I request custom work? If a creator offers custom services, you may contact them to discuss your requirements.",
          ],
        },
        {
          title: "Payments and Refunds",
          paragraphs: [
            "Are payments secure? Alwan works to provide secure payment processes and may use trusted third-party payment providers where applicable.",
            "Can I cancel an order? Cancellation eligibility depends on the status of the order and applicable policies.",
            "When can I request a refund? Refunds may be available in situations such as non-delivery, significant misrepresentation, or other circumstances outlined in our Refund and Cancellation Policy.",
            "How long do refunds take? Refund processing times vary depending on payment providers, financial institutions, and verification procedures.",
          ],
        },
        {
          title: "Account and Security",
          paragraphs: [
            "What should I do if I forget my password? Use the password recovery option available on the login page.",
            "Can I have multiple accounts? Users should generally maintain one account unless explicitly permitted by Alwan.",
            "What happens if someone copies my work? You may report intellectual property violations through the platform. Alwan may investigate and take appropriate action.",
            "Can my account be suspended? Yes. Accounts that violate platform policies, Terms and Conditions, or Community Guidelines may be suspended or terminated.",
          ],
        },
        {
          title: "Privacy and Safety",
          paragraphs: [
            "How does Alwan use my information? Your information is used in accordance with our Privacy Policy to provide, improve, and secure platform services.",
            "Does Alwan sell my personal information? No. Alwan does not sell personal information to third parties.",
            "Is my personal information visible to everyone? No. Only information intentionally displayed on public profiles or listings will be visible to other users.",
            "How can I report harassment or inappropriate behavior? You can report violations through the platform or contact the Alwan support team.",
          ],
        },
        {
          title: "Future Features",
          paragraphs: [
            "Will Alwan have a mobile app? A mobile application may be introduced in the future as the platform expands.",
            "Will Alwan introduce creator verification? Yes. Verification features may be implemented to improve trust, authenticity, and platform integrity.",
            "Will there be premium features? Alwan may introduce premium services, promotional tools, subscriptions, or additional creator features in the future.",
          ],
        },
        {
          title: "Contact Us",
          paragraphs: [
            "How can I contact Alwan? For support, questions, feedback, or concerns, please contact: Alwan Support Team.",
            "Email: [Insert Email Address] | Website: [Insert Website URL]",
          ],
        },
        {
          title: "Still Have Questions?",
          paragraphs: [
            "If you cannot find the answer you're looking for, please reach out to our support team. We're always happy to help.",
            "Alwan — Her Hands. Her Hustle. Her Future.",
          ],
        },
      ]}
    />
  );
}