/* ──────────────────────────────────────────────
 *  Footer – Professional, informative footer
 *  Links now mirror the requested Alwan site pages.
 * ────────────────────────────────────────────── */

import Link from "next/link";

const footerSections = [
  {
    title: "Explore",
    links: [
      { label: "Home", href: "/" },
      { label: "Explore Talent", href: "/explore-talent" },
      { label: "Categories", href: "/categories" },
      { label: "Become a Creator", href: "/join" },
      { label: "Sign In", href: "/sign-in" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About Alwan", href: "/about" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Footer Pages",
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
      { label: "WhatsApp", href: "https://wa.me/923133457485" },
      { label: "Help Center", href: "/under-development" },
    ],
  },
];

const socialLinks = [
  { label: "Facebook", href: "/under-development", icon: "📘" },
  { label: "Instagram", href: "/under-development", icon: "📸" },
  { label: "WhatsApp", href: "https://wa.me/923133457485", icon: "💬" },
  { label: "LinkedIn", href: "/under-development", icon: "💼" },
];

export default function Footer() {
  return (
    <footer className="bg-neutral-900 text-neutral-300" role="contentinfo">
      {/* ─── Main Footer ─── */}
      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-10">
          {/* ─── Brand Column ─── */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-block mb-4">
              <span className="text-3xl font-bold text-gradient-primary">
                Alwan
              </span>
            </Link>
            <p className="text-neutral-400 text-sm leading-relaxed max-w-sm mb-6">
              Empowering women across Pakistan to showcase their handmade
              talents and earn independently. Where her talent gets the credit
              it deserves.
            </p>
            <p className="text-neutral-500 text-xs leading-relaxed max-w-sm mb-6">
              Edit the links below to match your final footer pages, campaign
              content, and future launches without touching the rest of the
              layout.
            </p>
            {/* Social links */}
            <div className="flex items-center gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-xl bg-neutral-800 flex items-center justify-center text-lg hover:bg-primary/20 hover:text-primary transition-colors"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* ─── Link Columns ─── */}
          {footerSections.map((section) => (
            <div key={section.title}>
              <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">
                {section.title}
              </h4>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.label}>
                    {link.href.startsWith("http") ? (
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-neutral-400 hover:text-primary transition-colors"
                      >
                        {link.label}
                      </a>
                    ) : (
                      <Link
                        href={link.href}
                        className="text-sm text-neutral-400 hover:text-primary transition-colors"
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

      {/* ─── Bottom Bar ─── */}
      <div className="border-t border-neutral-800">
        <div className="container-custom py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-neutral-500">
            © {new Date().getFullYear()} Alwan. All rights reserved.
          </p>
          <p className="text-sm text-neutral-500">
            Made with 💜 for the women of Pakistan
          </p>
        </div>
      </div>
    </footer>
  );
}
