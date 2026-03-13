import Link from "next/link";

const phoneE164 = "923133457485";
const defaultMessage = encodeURIComponent(
  "Hi Alwan! I want details about a creator/gig on your platform."
);

export default function WhatsAppFloatingButton() {
  return (
    <Link
      href={`https://wa.me/${phoneE164}?text=${defaultMessage}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contact Alwan on WhatsApp"
      className="fixed bottom-5 right-4 md:bottom-7 md:right-6 z-[60] group"
    >
      <span className="flex items-center gap-2 rounded-full bg-[#25D366] text-white px-4 py-3 shadow-card hover:shadow-card-hover transition-all duration-300 group-hover:scale-[1.04]">
        <span className="text-lg" aria-hidden="true">💬</span>
        <span className="text-sm font-semibold hidden sm:inline">WhatsApp Us</span>
      </span>
    </Link>
  );
}