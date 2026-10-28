import type { Metadata } from "next";
import Link from "next/link";
import { AioCitationHooks } from "@/components/aio-citation-hooks";
import { JsonLd } from "@/components/json-ld-script";
import { SiteFooter, SiteHeader } from "@/components/site-chrome";
import { bufferingFaqItems, howToNode, salesGraph } from "@/lib/aio";
import { SITE_URL, WA_PREFILL, whatsappHref } from "@/lib/site";

const PATH = "/blog/iptv-buffering-firestick";
const TITLE = "Firestick buffering — 7 checks before you blame the stream";
const DESCRIPTION =
  "Seven diagnostic checks for Firestick buffering: record symptoms, confirm device and player requirements, compare supported settings one at a time, and protect private login details.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: `${SITE_URL}${PATH}` },
};

const CHECKS = [
  { t: "Speed", d: "Record performance on the actual viewing device at the time of the problem. Compare it with the documented requirements of the player and authorized stream; a speed result alone does not identify the cause." },
  { t: "Band", d: "Note the current band, signal and distance. If the device and router support another band, compare it while keeping other settings unchanged. Do not infer the cause from the band alone." },
  { t: "Ethernet", d: "Check model and adapter compatibility before buying hardware. If your setup supports Ethernet, compare wired and Wi-Fi playback on the same authorized programme and change one variable at a time; no buffering reduction is guaranteed." },
  { t: "DNS", d: "Record the error before changing DNS. Follow the documented network requirements of the device and player; ask support if a change is appropriate. Keep the original settings so an unsuccessful test can be reversed." },
  { t: "Decoder", d: "Confirm the player version, video format and documented decoder support for the exact model. Change a decoder option only when supported, compare the same programme, and restore it if playback worsens. Lag alone does not prove overheating." },
  { t: "Cache", d: "Check the player instructions and available storage before maintenance. Distinguish clearing cache from clearing app data; do not erase login details or playlists as a routine buffering fix." },
  { t: "One channel only", d: "Record the affected channel, programme, time, error and whether other channels work. Share these observations with support and confirm the available diagnostic options; do not assume the cause or promise a source replacement." },
];

export default function BufferingGuide() {
  const pageUrl = `${SITE_URL}${PATH}`;

  return (
    <>
      <JsonLd
        data={howToNode({
          pageUrl,
          name: TITLE,
          description: DESCRIPTION,
          steps: CHECKS.map((c) => ({ name: c.t, text: c.d })),
        })}
      />
      <JsonLd
        data={salesGraph(pageUrl, bufferingFaqItems(), [
          { name: "Guides", path: "/blog" },
          { name: TITLE, path: PATH },
        ])}
      />
      <SiteHeader active="guide" />
      <main className="mx-auto max-w-3xl px-5 pb-28 pt-12 font-[family-name:var(--font-body)] md:px-8">
        <p className="text-xs font-semibold tracking-[0.16em] text-[#4F7DFF]">GUIDE · 15 SEP 2026</p>
        <h1 className="mt-3 font-[family-name:var(--font-display)] text-4xl font-medium">{TITLE}</h1>
        <p className="mt-4 text-lg text-[#A8AEBC]">{DESCRIPTION}</p>
        <ol className="mt-10 space-y-4">
          {CHECKS.map((c, i) => (
            <li id={`step-${i + 1}`} key={c.t} className="rounded-2xl border border-[#2A3142] bg-[#141824] p-5">
              <h2 className="text-base font-semibold">
                {i + 1}. {c.t}
              </h2>
              <p className="mt-2 text-sm text-[#A8AEBC]">{c.d}</p>
            </li>
          ))}
        </ol>
        <AioCitationHooks title="Questions" items={bufferingFaqItems()} />
        <p className="mt-8 text-[#A8AEBC]">
          If symptoms remain, report the results from your own device and connection without assuming the device, provider or service is at fault. Mask passwords, tokens and private URLs in support screenshots. A successful trial does not guarantee future playback.
        </p>
        <a
          className="mt-8 inline-flex rounded-full bg-[#25D366] px-6 py-3 text-sm font-semibold text-white"
          href={whatsappHref(WA_PREFILL.trial, "blog-buffering")}
          target="_blank"
          rel="noopener noreferrer"
          data-cta="guide"
        >
          24h trial on this Firestick
        </a>
        <p className="mt-8 text-sm">
          <Link className="text-[#25D366]" href="/faq/buffering">
            Buffering FAQ — freezes after 8pm
          </Link>
          {" · "}
          <Link className="text-[#25D366]" href="/firestick">
            Firestick setup
          </Link>
          {" · "}
          <Link className="text-[#25D366]" href="/devices">
            Other devices
          </Link>
          {" · "}
          <Link className="text-[#25D366]" href="/blog">
            All guides
          </Link>
          {" · "}
          <Link className="text-[#25D366]" href="/blog/firestick-setup-usa">
            Firestick setup USA
          </Link>
          {" · "}
          <Link className="text-[#25D366]" href="/blog/iptv-smart-tv-usa">
            Smart TV guide
          </Link>
          {" · "}
          <Link className="text-[#25D366]" href="/blog/firestick-24h-trial">
            24h trial guide
          </Link>
        </p>
      </main>
      <SiteFooter />
    </>
  );
}
