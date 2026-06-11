import type { Metadata } from "next";
import InfoPage from "@/components/site/InfoPage";

export const metadata: Metadata = {
  title: "Press",
  description:
    "Press resources and media updates for Alwan will be shared here in the future.",
};

export default function PressPage() {
  return (
    <InfoPage
      eyebrow="Future page"
      title="Press resources are coming soon."
      summary="When Alwan is ready for media coverage, this page will hold brand notes, announcements, and press contact details."
      updatedLabel="Future page"
      primaryCta={{ label: "Contact us", href: "/contact" }}
      secondaryCta={{ label: "About Alwan", href: "/about" }}
      sections={[
        {
          title: "Media updates",
          paragraphs: [
            "We’ll use this space for launch notes, milestone announcements, and brand assets when they are ready.",
            "Future press materials may include logo files, founder notes, product updates, and campaign highlights.",
          ],
        },
        {
          title: "Press inquiries",
          paragraphs: [
            "Until the page goes live, please use Contact or WhatsApp for partnership and press enquiries.",
            "If you need a fast response, include your publication name, deadline, and the topic you are covering.",
          ],
        },
      ]}
    />
  );
}