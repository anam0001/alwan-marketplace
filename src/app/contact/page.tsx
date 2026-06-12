import type { Metadata } from "next";
import ContactPageClient from "@/components/site/ContactPageClient";

export const metadata: Metadata = {
  title: "Contact Alwan",
  description:
    "Reach Alwan for support, creator help, and partnership questions.",
};

export default function ContactPage() {
  return <ContactPageClient />;
}
