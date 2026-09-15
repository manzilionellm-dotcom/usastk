import type { Metadata } from "next";
import Link from "next/link";
import { SiteFooter, SiteHeader } from "@/components/site-chrome";
import { SITE_URL, WA_PREFILL, whatsappHref } from "@/lib/site";

const PATH = "/blog/firestick-24h-trial";
const TITLE = "24h Firestick IPTV trial (USA) — no credit card";
const DESCRIPTION =
  "City + device on WhatsApp. Login in minutes. Test tonight, pay only if it holds. $12 / $25 / $30 / $55.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: `${SITE_URL}${PATH}` },
};

const STEPS = [
  { t: "Send city + device", d: "WhatsApp only. Houston, Firestick 4K Max is enough. No email form, no card." },
  { t: "Install the player", d: "Unknown sources → Downloader → the APK we send. Takes about 10 minutes." },
  { t: "Watch tonight", d: "Test the channels you actually care about at peak hours (8–11pm). Daytime HD is not the test." },
  { t: "Pay only if it holds", d: "1 month $12, 3 months $25, 6 months $30, 1 year $55. Paid once. No auto-renew." },
];

export default function TrialGuide() {
  return (
    <>
      <SiteHeader active="guide" />
      <main className="mx-auto max-w-3xl px-5 pb-28 pt-12 font-[family-name:var(--font-body)] md:px-8">
        <p className="text-xs font-semibold tracking-[0.16em] text-[#4F7DFF]">GUIDE · 15 SEP 2026</p>
        <h1 className="mt-3 font-[family-name:var(--font-display)] text-4xl font-medium">{TITLE}</h1>
        <p className="mt-4 text-lg text-[#A8AEBC]">{DESCRIPTION}</p>
        <ol className="mt-10 space-y-4">
          {STEPS.map((c, i) => (
            <li key={c.t} className="rounded-2xl border border-[#2A3142] bg-[#141824] p-5">
              <h2 className="text-base font-semibold">{i + 1}. {c.t}</h2>
              <p className="mt-2 text-sm text-[#A8AEBC]">{c.d}</p>
            </li>
          ))}
        </ol>
        <a
          className="mt-8 inline-flex rounded-full bg-[#25D366] px-6 py-3 text-sm font-semibold text-white"
          href={whatsappHref(WA_PREFILL.trial, "blog-trial")}
          target="_blank"
          rel="noopener noreferrer"
          data-cta="guide"
        >
          Request the 24h trial
        </a>
        <p className="mt-8 text-sm">
          <Link className="text-[#25D366]" href="/refer">Refer a friend</Link>
          {" · "}
          <Link className="text-[#25D366]" href="/faq">FAQ</Link>
        </p>
      </main>
      <SiteFooter />
    </>
  );
}
