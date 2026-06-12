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
      <span className="flex items-center gap-3 rounded-full bg-[#25D366] text-white px-4 py-3 shadow-card hover:shadow-card-hover transition-all duration-300 group-hover:scale-[1.04] border border-white/20 backdrop-blur-md">
        <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white/15 text-sm font-bold" aria-hidden="true">
          WA
        </span>
        <span className="hidden sm:flex flex-col leading-tight text-left">
          <span className="text-sm font-semibold">WhatsApp Us</span>
          <span className="text-[11px] opacity-90">+92 313 3457485</span>
        </span>
      </span>
    </Link>
  );
}