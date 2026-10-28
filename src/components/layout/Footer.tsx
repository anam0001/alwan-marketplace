import Link from "next/link";
import { siteConfig } from "@/lib/siteConfig";

const footerSections = [
  {
    title: "Pages",
    links: [
      { label: "Terms & Conditions", href: "/terms-and-conditions" },
      { label: "Privacy Policy", href: "/privacy-policy" },
      { label: "Creator Protection Policy", href: "/creator-protection-policy" },
      { label: "Refund Policy", href: "/refund-policy" },
      { label: "Community Guidelines", href: "/community-guidelines" },
      { label: "FAQs", href: "/faqs" },
      { label: "Careers (future)", href: "/careers" },
      { label: "Press (future)", href: "/press" },
    ],
  },
  {
    title: "Support",
    links: [
      { label: "WhatsApp", href: siteConfig.whatsapp },
      { label: "Help Center", href: "/under-development" },
    ],
  },
];

const socialLinks = [
  { label: "Facebook", href: siteConfig.socials.facebook, className: "bg-[#1877F2] text-white hover:bg-[#1668d6]" },
  { label: "Instagram", href: siteConfig.socials.instagram, className: "bg-gradient-to-r from-[#F58529] via-[#DD2A7B] to-[#8134AF] text-white hover:brightness-105" },
  { label: "WhatsApp", href: siteConfig.whatsapp, className: "bg-[#25D366] text-white hover:bg-[#1fb857]" },
  { label: "LinkedIn", href: siteConfig.socials.linkedin, className: "bg-[#0A66C2] text-white hover:bg-[#0959a8]" },
];

export default function Footer() {
  return (
    <footer className="bg-neutral-950 text-neutral-300" role="contentinfo">
      <div className="container-custom section-padding">
        <div className="rounded-[2.5rem] border border-white/10 bg-white/[0.03] p-6 md:p-8 lg:p-10 backdrop-blur-sm">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1.25fr_1.75fr]">
            <div>
              <Link href="/" className="inline-flex items-center gap-3">
                <span className="text-3xl font-extrabold text-gradient-primary">
                  Alwan
                </span>
                <span className="rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                  Marketplace
                </span>
              </Link>
              <p className="mt-5 max-w-md text-sm leading-relaxed text-neutral-400">
                A premium marketplace for women creators to present their work, connect with customers, and grow with confidence.
              </p>
              <p className="mt-4 max-w-md text-sm font-semibold text-white">
                Her Hands. Her Hustle. Her Future.
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <Link
                  href="/join"
                  className="inline-flex items-center rounded-full bg-primary px-4 py-2 text-sm font-semibold text-white transition hover:bg-primary-dark"
                >
                  Become a Creator
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm font-semibold text-neutral-200 transition hover:border-primary/30 hover:text-white"
                >
                  Contact Support
                </Link>
              </div>

              <div className="mt-8 flex flex-wrap gap-2">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target={social.href.startsWith("http") ? "_blank" : undefined}
                    rel={social.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className={`inline-flex items-center rounded-full px-4 py-2 text-sm font-semibold transition transform hover:-translate-y-0.5 hover:shadow-lg ${social.className}`}
                  >
                    {social.label}
                  </a>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              {footerSections.map((section) => (
                <div
                  key={section.title}
                  className="rounded-3xl border border-white/10 bg-white/[0.04] p-5 transition duration-300 hover:-translate-y-1 hover:border-primary/20 hover:bg-white/[0.06]"
                >
                  <h4 className="text-xs uppercase tracking-[0.25em] text-primary font-semibold">
                    {section.title}
                  </h4>
                  <ul className="mt-4 space-y-2.5">
                    {section.links.map((link) => (
                      <li key={link.label}>
                        {link.href.startsWith("http") ? (
                          <a
                            href={link.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block rounded-2xl px-3 py-2 text-sm text-neutral-300 transition hover:bg-white/5 hover:text-white"
                          >
                            {link.label}
                          </a>
                        ) : (
                          <Link
                            href={link.href}
                            className="block rounded-2xl px-3 py-2 text-sm text-neutral-300 transition hover:bg-white/5 hover:text-white"
                          >
                            {link.label}
                          </Link>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-custom py-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between text-sm text-neutral-500">
          <p>© {new Date().getFullYear()} Alwan. All rights reserved.</p>
          <p>Designed for trust, clarity, and creator-first commerce.</p>
        </div>
      </div>
    </footer>
  );
}
