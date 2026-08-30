import Link from "next/link";
import { SITE_NAME } from "@/lib/site";
import { whatsappLink, WHATSAPP_PREFILL } from "@/lib/whatsapp";
import { SiteFooter } from "@/components/site-footer";
import { StickyCta } from "@/components/sticky-cta";

const nav = [
  { href: "/iptv-for-firestick", label: "Firestick" },
  { href: "/best-iptv-for-firestick-2026", label: "Best 2026" },
  { href: "/how-to-install-iptv-on-firestick", label: "Install" },
  { href: "/iptv-vs-cable-usa", label: "vs Cable" },
  { href: "/is-iptv-legal-in-usa", label: "Legal" },
];

/**
 * Standard shell for inner routes: sticky header, main content, sitewide
 * footer (with legal disclaimer), and a sticky mobile CTA.
 */
export function PageShell({
  children,
  stickyMessage = WHATSAPP_PREFILL,
}: {
  children: React.ReactNode;
  stickyMessage?: string;
}) {
  return (
    <main className="min-h-screen font-[family-name:var(--font-body)] bg-[#0B0E16] text-[#F5F6F8] antialiased">
      <header className="sticky top-0 z-40 border-b border-[#1F2433] bg-[#0B0E16]/85 backdrop-blur-xl">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 md:px-8">
          <Link
            href="/"
            className="font-[family-name:var(--font-display)] text-base font-medium tracking-tight"
          >
            {SITE_NAME}
            <span className="text-[#DC2626]">.</span>
          </Link>
          <nav className="hidden items-center gap-5 text-sm text-[#A8AEBC] md:flex">
            {nav.map((n) => (
              <Link key={n.href} href={n.href} className="transition hover:text-[#F5F6F8]">
                {n.label}
              </Link>
            ))}
          </nav>
          <a
            href={whatsappLink()}
            target="_blank"
            rel="noopener noreferrer nofollow"
            className="rounded-full bg-[#25D366] px-4 py-1.5 text-sm font-semibold text-[#062712] transition hover:bg-[#20bd5a]"
          >
            WhatsApp
          </a>
        </div>
      </header>

      <div className="pb-24 md:pb-0">{children}</div>

      <SiteFooter />
      <StickyCta message={stickyMessage} />
    </main>
  );
}
