import type { Metadata } from "next";
import Link from "next/link";
import { SiteFooter, SiteHeader } from "@/components/site-chrome";
import { breadcrumbNode } from "@/lib/aio";
import { jsonLdInnerHtml } from "@/lib/json-ld";
import { OG_IMAGE, SITE_NAME, SITE_URL } from "@/lib/site";

/**
 * Neutral editorial guide (licensed services only). No WhatsApp link, no trial or pricing CTA,
 * no affiliate link. Header, footer, floating button, sticky bar and site JSON-LD run in neutral
 * mode on this path (lib/neutral.ts). Every figure was read on its official page on 2026-11-03.
 */

const PATH = "/blog/best-legal-iptv-firestick-usa";
const PAGE_URL = `${SITE_URL}${PATH}`;
const CHECKED = "2026-11-03";
const CHECKED_LABEL = "November 3, 2026";

const TITLE = "Best Legal IPTV for Firestick 2026: 5 Services Compared";
const META =
  "Is IPTV legal in the USA? The best legal IPTV for Firestick in 2026: YouTube TV, Hulu + Live TV, Fubo, Sling and Philo prices, DVR and screens compared.";
const H1 = "Best legal IPTV for Firestick in the USA (2026): 5 licensed live TV apps compared";

const KEYWORDS = [
  "best legal iptv for firestick 2026",
  "is iptv legal in usa",
  "iptv app for firestick",
  "iptv app for fire tv",
  "what is the best iptv player for firestick",
  "how to install iptv on firestick",
  "is iptv safe and legal",
];

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: { absolute: TITLE },
  description: META,
  keywords: KEYWORDS,
  alternates: { canonical: PAGE_URL },
  openGraph: {
    type: "article",
    locale: "en_US",
    url: PAGE_URL,
    siteName: SITE_NAME,
    title: TITLE,
    description: META,
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: TITLE }],
  },
  robots: { index: true, follow: true },
};

type Source = { id: string; label: string; url: string; note: string };

const SOURCES: Source[] = [
  {
    id: "s1",
    label: "USPTO — Protecting Lawful Streaming Act of 2020",
    url: "https://www.uspto.gov/ip-policy/enforcement-policy/protecting-lawful-streaming-act-2020",
    note: "signed December 27, 2020; felony charges against providers, not users",
  },
  {
    id: "s2",
    label: "YouTube TV — plans and FAQ",
    url: "https://tv.youtube.com/welcome/",
    note: "$82.99/mo, 100+ channels, unlimited DVR kept 9 months, 6 accounts, 3 streams, select Fire TV devices",
  },
  {
    id: "s3",
    label: "Hulu + Live TV",
    url: "https://www.hulu.com/live-tv",
    note: "$99.99/mo with Disney+ and ESPN, 100+ channels, 2 screens, 3-day trial, Fire TV and Fire TV Stick",
  },
  {
    id: "s4",
    label: "Fubo — plans",
    url: "https://www.fubo.tv/welcome",
    note: "Pro $88.99/mo, 229 channels, regional sports fee $3.99–$16.99, 5-day trial, Amazon Fire TV app",
  },
  {
    id: "s5",
    label: "Sling TV — 2026 MLB guide (plan prices)",
    url: "https://www.sling.com/whatson/sports/baseball/watch-mlb-on-sling-tv",
    note: "Orange $45.99, Blue from $45.99, Orange + Blue from $60.99, 50 hours DVR",
  },
  {
    id: "s6",
    label: "Sling TV — homepage terms (streams per plan)",
    url: "https://www.sling.com/",
    note: "Orange 1 stream, Blue 3 streams, Orange + Blue up to 4",
  },
  {
    id: "s7",
    label: "Sling TV Help — installing the Sling app",
    url: "https://www.sling.com/help/en/learn-about-sling/get-started/install-sling",
    note: "Amazon Fire TV & Fire TV Stick listed",
  },
  {
    id: "s8",
    label: "Philo",
    url: "https://www.philo.com/",
    note: "Essential $25/mo, 70+ channels, 1-year unlimited DVR, 3 devices, 7-day trial, Fire TV listed",
  },
  {
    id: "s9",
    label: "Nielsen — August 2026 Gauge (published October 22, 2026)",
    url: "https://www.nielsen.com/news-center/2026/tv-viewing-cools-off-in-nielsens-august-gauge-reports-as-sports-take-a-breather-and-school-resumes/",
    note: "streaming 49.6% of US TV watch-time; YouTube 15.8%",
  },
];

type Row = {
  name: string;
  plan: string;
  price: string;
  yearly: string;
  channels: string;
  dvr: string;
  screens: string;
  trial: string;
  src: string;
};

/** List prices from official pages, checked 2026-11-03. 12-month cost = list price x 12, before taxes, promos and fees. */
const ROWS: Row[] = [
  { name: "Philo", plan: "Essential", price: "$25.00", yearly: "$300.00", channels: "70+", dvr: "Unlimited, 1 year", screens: "3", trial: "7 days", src: "s8" },
  { name: "Sling TV", plan: "Orange + Blue", price: "from $60.99", yearly: "from $731.88", channels: "See lineup by ZIP", dvr: "50 hours", screens: "up to 4", trial: "—", src: "s5" },
  { name: "YouTube TV", plan: "Main plan", price: "$82.99", yearly: "$995.88", channels: "100+", dvr: "Unlimited, 9 months", screens: "3", trial: "See site", src: "s2" },
  { name: "Fubo", plan: "Pro", price: "$88.99 + regional sports fee", yearly: "$1,067.88 + fee", channels: "229", dvr: "Unlimited, 9 months", screens: "10 at home + 3 on the go", trial: "5 days", src: "s4" },
  { name: "Hulu + Live TV", plan: "With Disney+ and ESPN", price: "$99.99", yearly: "$1,199.88", channels: "100+", dvr: "Unlimited, 9 months", screens: "2", trial: "3 days", src: "s3" },
];

const FAQ = [
  {
    q: "Is IPTV legal in the USA?",
    a: "Yes, IPTV as a technology is legal. What matters is whether the provider holds the rights to the channels it streams. Licensed services such as YouTube TV, Hulu + Live TV, Fubo, Sling TV and Philo are legal. The Protecting Lawful Streaming Act of 2020 lets the Department of Justice bring felony charges against commercial providers of illegal streams.",
  },
  {
    q: "What is the cheapest legal IPTV app for Firestick?",
    a: "Of the five services compared here, Philo Essential has the lowest list price at $25 per month (checked November 3, 2026). Sling TV Orange or Blue start at $45.99 per month. Philo focuses on entertainment; check its lineup if you need sports networks.",
  },
  {
    q: "Which legal IPTV service is best for sports on Fire TV?",
    a: "Fubo Pro lists 229 channels and unlimited DVR at $88.99 per month, plus a regional sports fee of $3.99 to $16.99 depending on your area. YouTube TV ($82.99) and Hulu + Live TV ($99.99) also carry major broadcast and sports networks. Check your ZIP code on each site, because local channels vary.",
  },
  {
    q: "What is the best IPTV player for Firestick?",
    a: "For licensed live TV, the best player is the service’s own official app from the Amazon Appstore. A stand-alone player app includes no channels: it only plays streams you already have the right to watch. All five services in this comparison have an official Fire TV app.",
  },
  {
    q: "Is IPTV safe and legal to use on a Firestick?",
    a: "It is when the app comes from a licensed provider and the Amazon Appstore. Look for a named company, a published channel lineup with local stations by ZIP code, written terms and normal card billing. Be cautious with services that sell only through private messages and do not name the networks they carry.",
  },
];

const graph = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "@id": `${PAGE_URL}#article`,
      headline: H1,
      description: META,
      inLanguage: "en-US",
      datePublished: CHECKED,
      dateModified: CHECKED,
      mainEntityOfPage: PAGE_URL,
      image: OG_IMAGE,
      keywords: KEYWORDS.join(", "),
      author: { "@id": `${SITE_URL}/#organization` },
      publisher: { "@id": `${SITE_URL}/#organization` },
      citation: SOURCES.map((s) => s.url),
    },
    {
      "@type": "FAQPage",
      "@id": `${PAGE_URL}#faq`,
      inLanguage: "en-US",
      mainEntity: FAQ.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    },
    breadcrumbNode([
      { name: "Guides", path: "/blog" },
      { name: "Best legal IPTV for Firestick", path: PATH },
    ]),
  ],
};

const h2 = "font-[family-name:var(--font-display)] text-2xl font-medium";
const p = "mt-4 leading-relaxed text-[#A8AEBC]";
const a = "text-[#93c5fd] hover:underline";

function Cite({ id }: { id: string }) {
  const n = SOURCES.findIndex((s) => s.id === id) + 1;
  return (
    <sup>
      <a href={`#${id}`} className={a}>
        [{n}]
      </a>
    </sup>
  );
}

export default function BestLegalIptvFirestickUsaPage() {
  return (
    <main className="min-h-screen bg-[#0B0E16] font-[family-name:var(--font-body)] text-[#F5F6F8] antialiased">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLdInnerHtml(graph) }}
      />
      <SiteHeader active="guide" neutral />
      <article className="mx-auto max-w-3xl px-5 py-14 md:px-8 md:py-20">
        <p className="text-xs font-semibold tracking-[0.16em] text-[#4F7DFF]">
          GUIDE · FIRE TV · LICENSED SERVICES ONLY · CHECKED {CHECKED_LABEL.toUpperCase()}
        </p>
        <h1 className="mt-4 font-[family-name:var(--font-display)] text-4xl font-normal leading-tight tracking-tight md:text-5xl">
          {H1}
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-[#F5F6F8]">
          The best legal IPTV for Firestick in 2026 depends on budget: Philo is cheapest at $25 a
          month, Sling Orange + Blue starts at $60.99, YouTube TV costs $82.99, Fubo Pro $88.99 plus a
          regional sports fee, and Hulu + Live TV $99.99. All five are licensed and have an official
          Fire TV app (list prices checked {CHECKED_LABEL}).
        </p>
        <p className="mt-4 text-sm text-[#6E7585]">
          By the {SITE_NAME} editorial team · Published and checked {CHECKED_LABEL} · Prices change
          often; confirm on each official site before you subscribe.
        </p>

        <aside className="mt-8 rounded-2xl border border-[#2A3142] bg-[#141824] p-5 text-sm leading-relaxed text-[#A8AEBC]">
          <strong className="text-[#F5F6F8]">Disclosure.</strong> This guide reviews third-party
          licensed services only. None of the links on this page are affiliate links, and we earn no
          commission from the services compared; if we ever add an affiliate link, it will be labeled
          next to the link. The operator of {SITE_NAME} also sells its own IPTV plans elsewhere on this
          site; they are not reviewed or ranked here.
        </aside>

        <section className="mt-14">
          <h2 className={h2}>Is IPTV legal in the USA?</h2>
          <p className={p}>
            Yes. IPTV is simply TV delivered over an internet connection, and it is legal when the
            provider holds the rights to the channels it streams. The five services below are licensed
            distributors with official Fire TV apps, so using them on a Firestick is legal.
          </p>
          <p className={p}>
            The risk sits with unlicensed providers: the Protecting Lawful Streaming Act of 2020,
            signed into law on December 27, 2020, lets the Department of Justice bring felony charges
            against providers (as opposed to users) who stream copyrighted material illegally for
            commercial advantage or private financial gain
            <Cite id="s1" />.
          </p>
          <p className={p}>
            Streaming is now the main way Americans watch TV. Nielsen measured streaming at 49.6% of US
            TV watch-time in August 2026, with YouTube alone at a record 15.8%
            <Cite id="s9" />.
          </p>
        </section>

        <section className="mt-14">
          <h2 className={h2}>What is the best legal IPTV for Firestick in 2026?</h2>
          <p className={p}>
            There is no single winner: Philo has the lowest list price, YouTube TV is the best
            all-rounder, and Fubo lists the most channels in this table. The 12-month figure is the
            monthly list price multiplied by 12, before taxes, intro promotions and add-ons.
          </p>
          <div className="mt-6 overflow-x-auto rounded-2xl border border-[#2A3142]">
            <table className="w-full min-w-[720px] text-left text-sm">
              <caption className="sr-only">
                Legal live TV streaming services for Amazon Fire TV in the USA, list prices checked{" "}
                {CHECKED_LABEL}
              </caption>
              <thead className="bg-[#141824] text-[#F5F6F8]">
                <tr>
                  <th scope="col" className="p-3">Service (plan)</th>
                  <th scope="col" className="p-3">Price / month</th>
                  <th scope="col" className="p-3">12 months</th>
                  <th scope="col" className="p-3">Channels</th>
                  <th scope="col" className="p-3">Cloud DVR</th>
                  <th scope="col" className="p-3">Screens</th>
                  <th scope="col" className="p-3">Trial</th>
                </tr>
              </thead>
              <tbody className="text-[#A8AEBC]">
                {ROWS.map((r) => (
                  <tr key={r.name} className="border-t border-[#2A3142]">
                    <th scope="row" className="p-3 font-semibold text-[#F5F6F8]">
                      {r.name} <span className="font-normal text-[#A8AEBC]">({r.plan})</span>
                      <Cite id={r.src} />
                    </th>
                    <td className="p-3">{r.price}</td>
                    <td className="p-3">{r.yearly}</td>
                    <td className="p-3">{r.channels}</td>
                    <td className="p-3">{r.dvr}</td>
                    <td className="p-3">{r.screens}</td>
                    <td className="p-3">{r.trial}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-xs text-[#6E7585]">
            Sources: official pages listed at the bottom, opened {CHECKED_LABEL}. Sling stream counts
            come from its terms on sling.com
            <Cite id="s6" />. Fubo&apos;s regional sports fee varies by area from $3.99 to $16.99 a month
            <Cite id="s4" />.
          </p>
        </section>

        <section className="mt-14">
          <h2 className={h2}>Which is the cheapest legal IPTV app for Firestick?</h2>
          <p className={p}>
            Philo is the cheapest pick at $25 a month for 70+ live channels, with unlimited DVR kept for
            a year, 3 devices at once and a 7-day trial
            <Cite id="s8" />. Its lineup focuses on entertainment, so check it if sports matter to you.
          </p>
          <p className={p}>
            Sling TV is the budget option with sports networks. Sling Orange costs $45.99 a month,
            Sling Blue starts at $45.99, and Orange + Blue starts at $60.99, with 50 hours of cloud DVR
            included
            <Cite id="s5" />. Orange allows 1 stream, Blue 3, and the bundle up to 4
            <Cite id="s6" />. Sling&apos;s help center lists Amazon Fire TV and Fire TV Stick as
            supported
            <Cite id="s7" />.
          </p>
        </section>

        <section className="mt-14">
          <h2 className={h2}>Which legal IPTV app for Fire TV is the best all-rounder?</h2>
          <p className={p}>
            YouTube TV is the strongest all-rounder: 100+ channels for $82.99 a month, unlimited DVR
            with recordings kept for 9 months, 6 household accounts and 3 simultaneous streams
            <Cite id="s2" />. It says local networks reach over 98% of US TV households and lists
            &quot;select Amazon Fire TV devices&quot; among supported devices.
          </p>
        </section>

        <section className="mt-14">
          <h2 className={h2}>Which legal IPTV service is best for sports on Firestick?</h2>
          <p className={p}>
            Fubo is the sports-first choice. The Pro plan lists 229 channels for $88.99 a month, plus a
            regional sports fee of $3.99 to $16.99 depending on your area, unlimited DVR (9 months) and
            up to 10 devices at home
            <Cite id="s4" />. It lists Amazon Fire TV among its apps and has a 5-day trial.
          </p>
          <p className={p}>
            Hulu + Live TV costs $99.99 a month but bundles 100+ live channels with Disney+ (with ads)
            and ESPN, plus unlimited DVR stored for up to 9 months
            <Cite id="s3" />. The base plan allows 2 screens at a time, Fire TV and Fire TV Stick are
            supported, and there is a 3-day trial.
          </p>
        </section>

        <section className="mt-14">
          <h2 className={h2}>How do you install a legal IPTV app on a Firestick?</h2>
          <p className={p}>
            Install it from the Amazon Appstore in a few minutes: search the service name on your Fire
            TV home screen, install the official app, sign in or start the trial, then enter your ZIP
            code to load local channels. You never need to sideload an app or paste a playlist link to
            use a licensed service.
          </p>
        </section>

        <section className="mt-14">
          <h2 className={h2}>What is the best IPTV player for Firestick?</h2>
          <p className={p}>
            For licensed live TV, the best player is the service&apos;s own official app. A stand-alone
            IPTV player app includes no channels: it only plays streams you already have the right to
            watch, so the question that matters is which licensed service you subscribe to.
          </p>
        </section>

        <section className="mt-14">
          <h2 className={h2}>How do you spot an unlicensed IPTV offer?</h2>
          <p className={p}>
            An unlicensed offer usually hides who runs it. Licensed services name the company, publish a
            channel lineup with local stations by ZIP code, ship an official app in the Amazon Appstore
            and bill through normal payment methods with written terms. Be cautious with offers sold
            only through private messages that do not name the networks they carry.
          </p>
        </section>

        <section className="mt-14" id="faq">
          <h2 className={h2}>FAQ: legal IPTV on Firestick</h2>
          <p className={p}>Short answers to the questions buyers ask most about legal IPTV on Fire TV.</p>
          <div className="mt-6 space-y-4">
            {FAQ.map((f) => (
              <div key={f.q} className="rounded-2xl border border-[#2A3142] bg-[#141824] p-5">
                <h3 className="text-lg font-semibold">{f.q}</h3>
                <p className="mt-3 mb-0 text-sm leading-relaxed text-[#A8AEBC]">{f.a}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-14">
          <h2 className={h2}>Legal disclaimer</h2>
          <p className={p}>
            This page is general information, not legal advice. In the United States, streaming
            copyrighted content without authorization can violate federal law, and the Protecting
            Lawful Streaming Act of 2020 created felony penalties for commercial providers of illegal
            streaming services
            <Cite id="s1" />. Only use services that hold the rights to the content they offer. Brand
            names belong to their owners; {SITE_NAME} is not affiliated with any service listed here.
          </p>
        </section>

        <section className="mt-14">
          <h2 className={h2}>Sources</h2>
          <p className={p}>Every figure on this page comes from these pages, opened on {CHECKED_LABEL}.</p>
          <ol className="mt-4 list-decimal space-y-2 pl-6 text-sm text-[#A8AEBC]">
            {SOURCES.map((s) => (
              <li key={s.id} id={s.id}>
                <a href={s.url} target="_blank" rel="noopener noreferrer" className={a}>
                  {s.label}
                </a>{" "}
                — {s.note}. Accessed {CHECKED}.
              </li>
            ))}
          </ol>
        </section>

        <p className="mt-10 text-sm text-[#A8AEBC]">
          More notes:{" "}
          <Link href="/blog" className={a}>
            all guides
          </Link>
          .
        </p>
      </article>
      <SiteFooter neutral />
    </main>
  );
}
