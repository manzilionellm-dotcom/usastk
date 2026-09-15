import type { Metadata } from "next";
import { SiteFooter, SiteHeader } from "@/components/site-chrome";
import { SITE_URL, WA_PREFILL, whatsappHref } from "@/lib/site";

const TITLE = "Refer a friend — 1 extra month on the 12-month plan";
const DESCRIPTION =
  "When a friend pays the 12-month plan ($55), you both get 1 extra month. Same WhatsApp number. No fake codes.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: `${SITE_URL}/refer` },
};

export default function ReferPage() {
  return (
    <>
      <SiteHeader />
      <main className="mx-auto max-w-3xl px-5 pb-28 pt-12 font-[family-name:var(--font-body)] md:px-8">
        <p className="text-xs font-semibold tracking-[0.16em] text-[#25D366]">REFERRAL</p>
        <h1 className="mt-3 font-[family-name:var(--font-display)] text-4xl font-medium">
          1 extra month for you and a friend
        </h1>
        <p className="mt-4 text-lg text-[#A8AEBC]">
          Friend pays the 12-month plan ($55). You both get +1 month on that term. The 24h trial alone does not trigger the bonus.
        </p>
        <ol className="mt-10 space-y-4 text-[#F5F6F8]">
          <li className="rounded-2xl border border-[#2A3142] bg-[#141824] p-5">
            <span className="text-xs font-semibold text-[#FF4D5C]">1</span>
            <p className="mt-2">Message WhatsApp with your friend’s number (must be different from yours).</p>
          </li>
          <li className="rounded-2xl border border-[#2A3142] bg-[#141824] p-5">
            <span className="text-xs font-semibold text-[#FF4D5C]">2</span>
            <p className="mt-2">They get the same 24h trial. No card.</p>
          </li>
          <li className="rounded-2xl border border-[#2A3142] bg-[#141824] p-5">
            <span className="text-xs font-semibold text-[#FF4D5C]">3</span>
            <p className="mt-2">When they pay $55 / 12 months, both accounts get +1 month.</p>
          </li>
        </ol>
        <a
          className="mt-10 inline-flex rounded-full bg-[#25D366] px-6 py-3 text-sm font-semibold text-white"
          href={whatsappHref(WA_PREFILL.refer, "refer")}
          target="_blank"
          rel="noopener noreferrer"
          data-cta="refer"
        >
          Start a referral on WhatsApp
        </a>
      </main>
      <SiteFooter />
    </>
  );
}
