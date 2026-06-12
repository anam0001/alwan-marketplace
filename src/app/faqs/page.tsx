import type { Metadata } from "next";
import FaqExplorer, { type FaqItem } from "@/components/site/FaqExplorer";

export const metadata: Metadata = {
  title: "FAQs",
  description:
    "Frequently asked questions about how Alwan works for creators and customers.",
};

export default function FaqsPage() {
  return (
    <FaqExplorer
      title="Frequently Asked Questions"
      summary="A real-time support center for creators, customers, payments, security, and policies — designed to help you find answers fast."
      items={faqItems}
    />
  );
}

const faqItems: FaqItem[] = [
  {
    question: "What is Alwan?",
    answer:
      "Alwan is a platform that helps talented creators showcase their skills, products, and services while receiving proper recognition and opportunities to connect directly with customers.",
    category: "Policies",
    popular: true,
  },
  {
    question: "Who can join Alwan?",
    answer:
      "Anyone with genuine skills, products, or services can join Alwan, subject to our platform policies and eligibility requirements.",
    category: "Account Management",
    popular: true,
  },
  {
    question: "Is creating an account free?",
    answer:
      "Yes. Creating an account on Alwan is free unless otherwise stated.",
    category: "Account Management",
    popular: true,
  },
  {
    question: "How do I become a creator?",
    answer:
      "Register an account, complete your profile, and submit your portfolio, products, or services for listing.",
    category: "Creators",
  },
  {
    question: "What types of skills can I showcase on Alwan?",
    answer:
      "You can showcase embroidery, crochet, stitching and tailoring, mehndi art, fashion design, handmade crafts, tutoring, graphic design, web development, digital services, and many more skills.",
    category: "Creators",
    popular: true,
  },
  {
    question: "Do I own my work after uploading it?",
    answer:
      "Yes. Creators retain ownership of their original work. Alwan does not claim ownership of your intellectual property.",
    category: "Creators",
  },
  {
    question: "How does Alwan protect creators?",
    answer:
      "Alwan has a Creator Protection Policy that prohibits copying, impersonation, unauthorized use of creator content, and false ownership claims.",
    category: "Security",
  },
  {
    question: "Can I edit or remove my listings?",
    answer:
      "Yes. Creators can update, edit, or remove their listings subject to platform rules.",
    category: "Creators",
  },
  {
    question: "Will Alwan guarantee sales?",
    answer:
      "No. Alwan provides visibility and opportunities but cannot guarantee sales, clients, or earnings.",
    category: "Policies",
  },
  {
    question: "How do I purchase a product or service?",
    answer:
      "Browse creator profiles, review listings, and follow the purchasing process provided on the platform.",
    category: "Customers",
  },
  {
    question: "Can I contact creators directly?",
    answer:
      "Depending on platform features and policies, communication options may be available to facilitate collaboration and purchases.",
    category: "Customers",
  },
  {
    question: "What if I receive a product different from what was advertised?",
    answer:
      "You may submit a complaint or refund request according to the Refund and Cancellation Policy.",
    category: "Customers",
    popular: true,
  },
  {
    question: "Can I request custom work?",
    answer:
      "If a creator offers custom services, you may contact them to discuss your requirements.",
    category: "Customers",
  },
  {
    question: "Are payments secure?",
    answer:
      "Alwan works to provide secure payment processes and may use trusted third-party payment providers where applicable.",
    category: "Payments",
    popular: true,
  },
  {
    question: "Can I cancel an order?",
    answer:
      "Cancellation eligibility depends on the status of the order and applicable policies.",
    category: "Payments",
  },
  {
    question: "When can I request a refund?",
    answer:
      "Refunds may be available in situations such as non-delivery, significant misrepresentation, or other circumstances outlined in our Refund and Cancellation Policy.",
    category: "Payments",
  },
  {
    question: "How long do refunds take?",
    answer:
      "Refund processing times vary depending on payment providers, financial institutions, and verification procedures.",
    category: "Payments",
  },
  {
    question: "What should I do if I forget my password?",
    answer:
      "Use the password recovery option available on the login page.",
    category: "Account Management",
  },
  {
    question: "Can I have multiple accounts?",
    answer:
      "Users should generally maintain one account unless explicitly permitted by Alwan.",
    category: "Account Management",
  },
  {
    question: "What happens if someone copies my work?",
    answer:
      "You may report intellectual property violations through the platform. Alwan may investigate and take appropriate action.",
    category: "Security",
    popular: true,
  },
  {
    question: "Can my account be suspended?",
    answer:
      "Yes. Accounts that violate platform policies, Terms and Conditions, or Community Guidelines may be suspended or terminated.",
    category: "Security",
  },
  {
    question: "How does Alwan use my information?",
    answer:
      "Your information is used in accordance with our Privacy Policy to provide, improve, and secure platform services.",
    category: "Security",
  },
  {
    question: "Does Alwan sell my personal information?",
    answer:
      "No. Alwan does not sell personal information to third parties.",
    category: "Security",
  },
  {
    question: "Is my personal information visible to everyone?",
    answer:
      "No. Only information intentionally displayed on public profiles or listings will be visible to other users.",
    category: "Security",
  },
  {
    question: "How can I report harassment or inappropriate behavior?",
    answer:
      "You can report violations through the platform or contact the Alwan support team.",
    category: "Policies",
  },
  {
    question: "Will Alwan have a mobile app?",
    answer:
      "A mobile application may be introduced in the future as the platform expands.",
    category: "Policies",
  },
  {
    question: "Will Alwan introduce creator verification?",
    answer:
      "Yes. Verification features may be implemented to improve trust, authenticity, and platform integrity.",
    category: "Policies",
  },
  {
    question: "Will there be premium features?",
    answer:
      "Alwan may introduce premium services, promotional tools, subscriptions, or additional creator features in the future.",
    category: "Policies",
  },
];