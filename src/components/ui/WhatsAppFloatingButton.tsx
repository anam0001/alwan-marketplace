import Link from "next/link";
import { siteConfig } from "@/lib/siteConfig";

const defaultMessage = encodeURIComponent(
  "Hi Alwan! I want details about a creator/gig on your platform."
);

export default function WhatsAppFloatingButton() {
  return (
    <Link
      href={`${siteConfig.whatsapp}?text=${defaultMessage}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contact Alwan on WhatsApp"
      className="fixed bottom-5 right-4 md:bottom-7 md:right-6 z-[60] group"
    >
      <span className="relative flex items-center gap-3 overflow-hidden rounded-full bg-[#25D366] text-white px-4 py-3 shadow-card hover:shadow-card-hover transition-all duration-300 group-hover:scale-[1.04] border border-white/20 backdrop-blur-md">
        <span className="absolute inset-0 bg-gradient-to-r from-white/10 via-transparent to-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" aria-hidden="true" />
        <span className="absolute -right-4 -top-4 h-14 w-14 rounded-full border border-white/30 animate-ping opacity-50" aria-hidden="true" />
        <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white/15 text-sm font-bold" aria-hidden="true">
          WA
        </span>
        <span className="relative text-sm font-semibold">WhatsApp Us</span>
      </span>
    </Link>
  );
}