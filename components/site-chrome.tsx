import Link from "next/link";
import { GUIDE_PATH, PRICING_PATH, SITE_NAME, WA_PREFILL, whatsappHref } from "@/lib/site";

const waFirestick = whatsappHref(WA_PREFILL.firestick);

export function SiteHeader({
  active,
}: {
  active?: "firestick" | "faq" | "guide";
}) {
  return (
    <header className="sticky top-0 z-50 border-b border-[#1F2433] bg-[#0B0E16]/85 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 md:px-8">
        <Link href="/" className="flex items-center gap-2.5">
          <span className="relative grid h-9 w-9 place-items-center overflow-hidden rounded-xl bg-gradient-to-br from-[#1E3A8A] to-[#0F1B3D] text-white shadow-[0_4px_12px_-4px_rgba(30,58,138,0.5)]">
            <svg viewBox="0 0 36 36" className="h-full w-full" aria-hidden="true">
              <rect width="36" height="36" rx="8" fill="url(#subHeaderGrad)" />
              <defs>
                <linearGradient id="subHeaderGrad" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0" stopColor="#1E3A8A" />
                  <stop offset="1" stopColor="#0F1B3D" />
                </linearGradient>
              </defs>
              <text
                x="18"
                y="24"
                textAnchor="middle"
                fill="#FAFAF7"
                fontFamily="system-ui,-apple-system,Segoe UI,Roboto,sans-serif"
                fontWeight="800"
                fontSize="16"
                letterSpacing="-0.5"
              >
                IF
              </text>
              <circle cx="29" cy="29" r="3.2" fill="#DC2626" />
            </svg>
          </span>
          <span className="font-[family-name:var(--font-display)] text-lg font-medium leading-none tracking-tight">
            <span className="hidden lg:inline">{SITE_NAME}</span>
            <span className="inline lg:hidden">IPTV Firestick</span>
            <span className="text-[#DC2626]">.</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-6 text-sm text-[#A8AEBC] md:flex">
          <Link
            href="/firestick"
            className={
              active === "firestick"
                ? "font-semibold text-[#F5F6F8]"
                : "transition hover:text-[#F5F6F8]"
            }
          >
            Firestick
          </Link>
          <Link
            href="/faq"
            className={
              active === "faq"
                ? "font-semibold text-[#F5F6F8]"
                : "transition hover:text-[#F5F6F8]"
            }
          >
            FAQ
          </Link>
          <Link
            href={GUIDE_PATH}
            className={
              active === "guide"
                ? "font-semibold text-[#F5F6F8]"
                : "transition hover:text-[#F5F6F8]"
            }
          >
            Guide
          </Link>
          <Link href={PRICING_PATH} className="transition hover:text-[#F5F6F8]">
            Pricing
          </Link>
          <Link href="/" className="transition hover:text-[#F5F6F8]">
            Home
          </Link>
        </nav>

        <a
          href={waFirestick}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full bg-[#25D366] px-4 py-2 text-sm font-medium text-white transition hover:bg-[#1FB855]"
        >
          WhatsApp
        </a>
      </div>
    </header>
  );
}

export function SiteFooter() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-[#1F2433] bg-[#0B0E16]">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-10 px-5 py-12 md:grid-cols-4 md:px-8">
        <div className="col-span-2 md:col-span-1">
          <Link href="/" className="font-[family-name:var(--font-display)] text-lg font-medium tracking-tight">
            {SITE_NAME}
            <span className="text-[#DC2626]">.</span>
          </Link>
          <p className="mt-3 text-xs text-[#6E7585]">iptvforfirestickusa.com</p>
          <p className="mt-3 max-w-xs text-sm text-[#A8AEBC]">
            Soft Firestick setup and 24h trial via WhatsApp. City + device — no public playlist.
          </p>
        </div>
        <div>
          <h4 className="text-sm font-medium text-[#F5F6F8]">Pages</h4>
          <ul className="mt-3 space-y-2 text-sm text-[#A8AEBC]">
            <li>
              <Link className="transition hover:text-[#F5F6F8]" href="/">
                Home
              </Link>
            </li>
            <li>
              <Link className="transition hover:text-[#F5F6F8]" href="/firestick">
                Firestick setup
              </Link>
            </li>
            <li>
              <Link className="transition hover:text-[#F5F6F8]" href="/faq">
                FAQ
              </Link>
            </li>
            <li>
              <Link className="transition hover:text-[#F5F6F8]" href={GUIDE_PATH}>
                Firestick setup USA
              </Link>
            </li>
            <li>
              <Link className="transition hover:text-[#F5F6F8]" href={PRICING_PATH}>
                Pricing
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-medium text-[#F5F6F8]">Start</h4>
          <ul className="mt-3 space-y-2 text-sm text-[#A8AEBC]">
            <li>
              <a
                className="transition hover:text-[#F5F6F8]"
                href={whatsappHref(WA_PREFILL.guide)}
                target="_blank"
                rel="noopener noreferrer"
              >
                24h trial on WhatsApp
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-medium text-[#F5F6F8]">Contact</h4>
          <p className="mt-3 text-sm text-[#A8AEBC]">
            Only WhatsApp —{" "}
            <a
              className="font-semibold text-[#25D366] hover:text-[#1FB855]"
              href={whatsappHref(WA_PREFILL.faq)}
              target="_blank"
              rel="noopener noreferrer"
            >
              wa.me/447307410512
            </a>
          </p>
        </div>
      </div>
      <div className="border-t border-[#1F2433]">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-3 px-5 py-6 text-xs text-[#6E7585] md:flex-row md:items-center md:px-8">
          <p>© {year} {SITE_NAME}. Independent US publication.</p>
          <p>Made in America · New York · Los Angeles · Dallas</p>
        </div>
      </div>
    </footer>
  );
}

export function WhatsAppCard({
  prefill,
  surface,
}: {
  prefill: string;
  surface: string;
}) {
  const href = whatsappHref(prefill);
  return (
    <section className="rounded-2xl border border-[#2A3142] bg-[#141824] p-6 md:p-8">
      <h2 className="font-[family-name:var(--font-display)] text-2xl font-medium text-[#F5F6F8]">
        WhatsApp
      </h2>
      <p className="mt-3 text-[#A8AEBC]">
        Only{" "}
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          data-event="cta_primary"
          data-surface={surface}
          className="break-all font-semibold text-[#25D366] hover:text-[#1FB855]"
        >
          https://wa.me/447307410512
        </a>
        . Prefill: city + device. No email orders.
      </p>
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-5 inline-flex items-center justify-center gap-2 rounded-full bg-[#25D366] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#1FB855]"
      >
        Message WhatsApp
      </a>
    </section>
  );
}
