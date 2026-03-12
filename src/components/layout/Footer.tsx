/* ──────────────────────────────────────────────
 *  Footer – Professional, informative footer
 *  Edit links, social URLs, and text below.
 * ────────────────────────────────────────────── */

import Link from "next/link";

/* ─── Footer Links (customize here) ─── */
const footerSections = [
  {
    title: "Platform",
    links: [
      { label: "Explore Marketplace", href: "/explore" },
      { label: "Join as Creator", href: "/join" },
      { label: "How It Works", href: "/#how-it-works" },
      { label: "Categories", href: "/#categories" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About Alwan", href: "/under-development" },
      { label: "Our Mission", href: "/under-development" },
      { label: "Blog", href: "/under-development" },
      { label: "Careers", href: "/under-development" },
    ],
  },
  {
    title: "Support",
    links: [
      { label: "Help Center", href: "/under-development" },
      { label: "Contact Us", href: "/under-development" },
      { label: "Privacy Policy", href: "/under-development" },
      { label: "Terms of Service", href: "/under-development" },
    ],
  },
];

/* ─── Social Links (add your URLs) ─── */
const socialLinks = [
  { label: "Facebook", href: "/under-development", icon: "📘" },
  { label: "Instagram", href: "/under-development", icon: "📸" },
  { label: "Twitter", href: "/under-development", icon: "🐦" },
  { label: "LinkedIn", href: "/under-development", icon: "💼" },
];

export default function Footer() {
  return (
    <footer className="bg-neutral-900 text-neutral-300" role="contentinfo">
      {/* ─── Main Footer ─── */}
      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
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
                    <Link
                      href={link.href}
                      className="text-sm text-neutral-400 hover:text-primary transition-colors"
                    >
                      {link.label}
                    </Link>
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
