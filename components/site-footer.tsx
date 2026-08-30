import Link from "next/link";
import { LEGAL_DISCLAIMER, SITE_NAME } from "@/lib/site";
import { whatsappLink, WHATSAPP_DISPLAY } from "@/lib/whatsapp";

const guideLinks = [
  { href: "/iptv-for-firestick", label: "IPTV for Firestick" },
  { href: "/best-iptv-for-firestick-2026", label: "Best IPTV for Firestick 2026" },
  { href: "/how-to-install-iptv-on-firestick", label: "How to install on Firestick" },
  { href: "/cheap-iptv-usa", label: "Cheap IPTV USA" },
  { href: "/iptv-no-contract-usa", label: "IPTV with no contract" },
];

const compareLinks = [
  { href: "/iptv-vs-cable-usa", label: "IPTV vs cable" },
  { href: "/iptv-vs-youtube-tv", label: "IPTV vs YouTube TV" },
  { href: "/is-iptv-legal-in-usa", label: "Is IPTV legal in the USA?" },
];

const legalLinks = [
  { href: "/legal/terms", label: "Terms of Service" },
  { href: "/legal/privacy", label: "Privacy Policy" },
  { href: "/legal/disclaimer", label: "Disclaimer" },
  { href: "/references", label: "References & sources" },
];

/**
 * Sitewide footer with the standard legal disclaimer, legal-page links, and
 * WhatsApp contact. Rendered on every public page for consistency.
 */
export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-[#1F2433] bg-[#0B0E16]">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-10 px-5 py-12 md:grid-cols-4 md:px-8">
        <div className="col-span-2 md:col-span-1">
          <span className="font-[family-name:var(--font-display)] text-lg font-medium leading-none tracking-tight">
            {SITE_NAME}
            <span className="text-[#DC2626]">.</span>
          </span>
          <p className="mt-3 text-xs text-[#6E7585]">iptvforfirestickusa.com</p>
          <p className="mt-3 max-w-xs text-sm text-[#A8AEBC]">
            US-focused help for streaming on Amazon Fire TV and Firestick. No
            contract, cancel anytime, activated over WhatsApp.
          </p>
          <a
            href={whatsappLink()}
            target="_blank"
            rel="noopener noreferrer nofollow"
            className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-[#25D366] hover:underline"
          >
            💬 WhatsApp {WHATSAPP_DISPLAY}
          </a>
        </div>

        <div>
          <h4 className="text-sm font-medium text-[#F5F6F8]">Guides</h4>
          <ul className="mt-3 space-y-2 text-sm text-[#A8AEBC]">
            {guideLinks.map((l) => (
              <li key={l.href}>
                <Link className="transition hover:text-[#F5F6F8]" href={l.href}>
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-medium text-[#F5F6F8]">Compare</h4>
          <ul className="mt-3 space-y-2 text-sm text-[#A8AEBC]">
            {compareLinks.map((l) => (
              <li key={l.href}>
                <Link className="transition hover:text-[#F5F6F8]" href={l.href}>
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-medium text-[#F5F6F8]">Legal</h4>
          <ul className="mt-3 space-y-2 text-sm text-[#A8AEBC]">
            {legalLinks.map((l) => (
              <li key={l.href}>
                <Link className="transition hover:text-[#F5F6F8]" href={l.href}>
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-[#1F2433]">
        <div className="mx-auto max-w-6xl px-5 py-6 md:px-8">
          <p className="max-w-4xl text-xs leading-relaxed text-[#6E7585]">
            {LEGAL_DISCLAIMER}
          </p>
          <p className="mt-3 text-xs text-[#6E7585]">
            © {year} {SITE_NAME}. Independent US publication.
          </p>
        </div>
      </div>
    </footer>
  );
}
