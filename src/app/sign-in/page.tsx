import type { Metadata } from "next";
import InfoPage from "@/components/site/InfoPage";

export const metadata: Metadata = {
  title: "Sign In",
  description:
    "Sign in access for Alwan is being prepared. Join as a creator or explore the marketplace while authentication is finalized.",
};

export default function SignInPage() {
  return (
    <InfoPage
      eyebrow="Account Access"
      title="Sign in is on the way."
      summary="We’re setting up secure account access so buyers and creators can manage their profiles, saved items, and updates in one place."
      updatedLabel="Coming soon"
      primaryCta={{ label: "Join Alwan", href: "/join" }}
      secondaryCta={{ label: "Explore Talent", href: "/explore-talent" }}
      sections={[
        {
          title: "What will sign in unlock?",
          paragraphs: [
            "Once live, sign in will support creator dashboards, saved preferences, and faster communication.",
            "For now, the best way to get started is to join as a creator or browse the marketplace.",
          ],
        },
        {
          title: "Need access right now?",
          paragraphs: [
            "If you need help with a listing, a booking, or a policy question, reach out through the Contact page or WhatsApp.",
          ],
        },
      ]}
    />
  );
}