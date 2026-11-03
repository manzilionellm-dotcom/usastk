import type { Metadata } from "next";
import Link from "next/link";
import { SiteFooter, SiteHeader } from "@/components/site-chrome";
import { breadcrumbNode } from "@/lib/aio";
import { jsonLdInnerHtml } from "@/lib/json-ld";
import { OG_IMAGE, SITE_NAME, SITE_URL } from "@/lib/site";

/**
 * Neutral editorial guide: "Is IPTV legal in the US?" (licensed services only). No WhatsApp link,
 * no trial or pricing CTA, no affiliate link. Header, footer, floating button, sticky bar and site
 * JSON-LD run in neutral mode on this path (lib/neutral.ts). Every figure was read on its official
 * page on 2026-11-03. Do not add a figure without an opened, dated source.
 */

const PATH = "/blog/is-iptv-legal-in-the-us";
const PAGE_URL = `${SITE_URL}${PATH}`;
const CHECKED = "2026-11-03";
const CHECKED_LABEL = "November 3, 2026";

const TITLE = "Is IPTV Legal in the US? Law, Penalties and How to Check (2026)";
const META =
  "Is IPTV legal in the USA? The technology is legal; unlicensed channel resale is not. Federal penalties, the Jetflicks case and a 5-step check for any streaming service, as of November 3, 2026.";
const H1 = "Is IPTV legal in the US? What the law says in 2026 and how to check a streaming service";

const KEYWORDS = [
  "is iptv legal in the us",
  "is iptv legal in usa",
  "is iptv illegal",
  "can you get in trouble for using iptv",
  "how to tell if iptv is legal",
  "legal iptv usa",
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
    note: "signed December 27, 2020; felony charges against providers, as opposed to users",
  },
  {
    id: "s2",
    label: "18 U.S.C. § 2319C — Illicit digital transmission services (Cornell LII)",
    url: "https://www.law.cornell.edu/uscode/text/18/2319C",
    note: "up to 3 years in prison; 5 years for pre-release works; 10 years for repeat offenses",
  },
  {
    id: "s3",
    label: "17 U.S.C. § 504 — Damages for copyright infringement (Cornell LII)",
    url: "https://www.law.cornell.edu/uscode/text/17/504",
    note: "statutory damages of $750 to $30,000 per work; up to $150,000 if willful",
  },
  {
    id: "s4",
    label: "US Department of Justice — Jetflicks sentencing (July 22, 2025)",
    url: "https://www.justice.gov/opa/pr/five-defendants-sentenced-connection-operating-one-largest-illegal-television-show-streaming",
    note: "up to 84 months in prison; 183,285 episodes claimed; infringement valued at $37.5 million",
  },
  {
    id: "s5",
    label: "Nielsen — August 2026 Gauge (published October 22, 2026)",
    url: "https://www.nielsen.com/news-center/2026/tv-viewing-cools-off-in-nielsens-august-gauge-reports-as-sports-take-a-breather-and-school-resumes/",
    note: "streaming 49.6% of US TV watch-time; YouTube 15.8%",
  },
];

const STEPS = [
  "Find the company behind the service: a legal name, an address and published terms of service.",
  "Check the app store: licensed services ship an official app in the Amazon Appstore, Google Play or the App Store.",
  "Read the channel lineup: licensed services publish it, with local stations by ZIP code.",
  "Compare the price: thousands of premium channels for a few dollars a month is a red flag.",
  "Look at billing: card payments with receipts, not gift cards, crypto or payment by private message.",
];

const FAQ = [
  {
    q: "Is it illegal to watch unlicensed IPTV in the US?",
    a: "Federal criminal cases target the people who run illegal streaming services, not viewers: the USPTO says the 2020 streaming law lets prosecutors bring felony charges against providers, as opposed to users. Viewers can still face civil copyright claims, and paying an unlicensed service funds infringement. The safe choice is a licensed service.",
  },
  {
    q: "Can you go to jail for selling IPTV subscriptions in the US?",
    a: "Yes. Under 18 U.S.C. § 2319C, running an illicit digital transmission service for commercial advantage can bring up to 3 years in prison, 5 years for pre-release works and 10 years for repeat offenses. In the Jetflicks case, the Justice Department announced sentences of up to 84 months on July 22, 2025.",
  },
  {
    q: "How much are copyright damages in the US?",
    a: "Under 17 U.S.C. § 504, a court can award statutory damages of $750 to $30,000 per infringed work instead of actual losses. If the infringement is willful, the court may raise the award to as much as $150,000 per work. These figures come from the federal statute, read on November 3, 2026.",
  },
  {
    q: "Does a VPN make unlicensed IPTV legal?",
    a: "No. A VPN hides your IP address, but it gives you no rights to the channels you watch. If the provider does not hold the licenses, the stream is still unauthorized. Licensed US services work without a VPN, and many restrict playback to the United States under their own terms of service.",
  },
  {
    q: "Is a stand-alone IPTV player app legal?",
    a: "Yes, a player app on its own is legal software: it includes no channels and only plays streams you load into it. What matters is the source. Loading a playlist from a licensed provider you pay is fine; loading one from a service that has no rights to the channels is not.",
  },
  {
    q: "Which IPTV services are legal in the US?",
    a: "Licensed live TV services such as YouTube TV, Hulu + Live TV, Fubo, Sling TV and Philo are legal, as are cable and satellite providers' own streaming apps. We compare their list prices, DVR limits and screens in our guide to the best legal IPTV for Firestick, checked on November 3, 2026.",
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
      author: { "@type": "Organization", "@id": `${SITE_URL}/#organization`, name: `${SITE_NAME} editorial team (Équipe éditoriale)` },
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
      { name: "Is IPTV legal in the US?", path: PATH },
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

export default function IsIptvLegalInTheUsPage() {
  return (
    <main className="min-h-screen bg-[#0B0E16] font-[family-name:var(--font-body)] text-[#F5F6F8] antialiased">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLdInnerHtml(graph) }}
      />
      <SiteHeader active="guide" neutral />
      <article className="mx-auto max-w-3xl px-5 py-14 md:px-8 md:py-20">
        <p className="text-xs font-semibold tracking-[0.16em] text-[#4F7DFF]">
          GUIDE · US LAW · LICENSED SERVICES ONLY · CHECKED {CHECKED_LABEL.toUpperCase()}
        </p>
        <h1 className="mt-4 font-[family-name:var(--font-display)] text-4xl font-normal leading-tight tracking-tight md:text-5xl">
          {H1}
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-[#F5F6F8]">
          Yes, IPTV is legal in the US when the provider holds the rights to its channels, as YouTube TV,
          Hulu + Live TV, Fubo, Sling and Philo do. Selling channels without a license is not: since 2020,
          operators of illegal streaming services face felony charges and up to 3 years in prison, or 10
          years for repeat offenses.
        </p>
        <p className="mt-4 text-sm text-[#6E7585]">
          By the {SITE_NAME} editorial team (Équipe éditoriale) · Published and checked {CHECKED_LABEL} ·
          General information, not legal advice.
        </p>

        <aside className="mt-8 rounded-2xl border border-[#2A3142] bg-[#141824] p-5 text-sm leading-relaxed text-[#A8AEBC]">
          <strong className="text-[#F5F6F8]">Disclosure.</strong> This guide covers US law and licensed
          third-party services only. None of the links on this page are affiliate links, and we earn no
          commission; if we ever add an affiliate link, it will be labeled next to the link. The operator of{" "}
          {SITE_NAME} also sells its own IPTV plans elsewhere on this site; they are not reviewed or ranked here.
        </aside>

        <section className="mt-14">
          <h2 className={h2}>Is IPTV legal in the US?</h2>
          <p className={p}>
            Yes. IPTV simply means TV delivered over an internet connection, and the technology itself is legal
            in the United States. What decides legality is the license: a provider must hold the rights to every
            channel it streams. Licensed live TV services and cable companies&apos; own apps are legal IPTV.
          </p>
          <p className={p}>
            Streaming is now the main way Americans watch TV. Nielsen measured streaming at 49.6% of US TV
            watch-time in August 2026, with YouTube alone at a record 15.8%
            <Cite id="s5" />. Most of that viewing happens on licensed platforms.
          </p>
        </section>

        <section className="mt-14">
          <h2 className={h2}>What does US law say about illegal streaming services?</h2>
          <p className={p}>
            The Protecting Lawful Streaming Act of 2020, signed on December 27, 2020, made running an illegal
            streaming service for profit a federal felony. Before it, illegal streaming was treated as a
            misdemeanor. The USPTO notes that the law targets providers, as opposed to users, of such services
            <Cite id="s1" />.
          </p>
          <div className="mt-6 overflow-x-auto rounded-2xl border border-[#2A3142]">
            <table className="w-full min-w-[640px] text-left text-sm">
              <caption className="sr-only">US penalties for illegal streaming and copyright infringement, read {CHECKED_LABEL}</caption>
              <thead className="bg-[#141824] text-[#F5F6F8]">
                <tr>
                  <th scope="col" className="p-3">Rule</th>
                  <th scope="col" className="p-3">Who it targets</th>
                  <th scope="col" className="p-3">Penalty</th>
                  <th scope="col" className="p-3">Source</th>
                </tr>
              </thead>
              <tbody className="text-[#A8AEBC]">
                <tr className="border-t border-[#2A3142]">
                  <td className="p-3">18 U.S.C. § 2319C (first offense)</td>
                  <td className="p-3">Commercial operators of illicit streaming services</td>
                  <td className="p-3">Fine and up to 3 years in prison</td>
                  <td className="p-3"><Cite id="s2" /></td>
                </tr>
                <tr className="border-t border-[#2A3142]">
                  <td className="p-3">§ 2319C, pre-release works</td>
                  <td className="p-3">Streaming works being prepared for commercial release</td>
                  <td className="p-3">Up to 5 years</td>
                  <td className="p-3"><Cite id="s2" /></td>
                </tr>
                <tr className="border-t border-[#2A3142]">
                  <td className="p-3">§ 2319C, repeat offense</td>
                  <td className="p-3">Second or subsequent offense</td>
                  <td className="p-3">Up to 10 years</td>
                  <td className="p-3"><Cite id="s2" /></td>
                </tr>
                <tr className="border-t border-[#2A3142]">
                  <td className="p-3">17 U.S.C. § 504(c), civil</td>
                  <td className="p-3">Anyone found liable for infringement</td>
                  <td className="p-3">$750 to $30,000 per work; up to $150,000 if willful</td>
                  <td className="p-3"><Cite id="s3" /></td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="mt-14">
          <h2 className={h2}>Can you get in trouble for using IPTV in the US?</h2>
          <p className={p}>
            With a licensed service, no. With an unlicensed one, the criminal law mainly targets sellers, but
            civil copyright claims remain possible, and US statutory damages run from $750 to $30,000 per work,
            or up to $150,000 if willful. You also risk losing what you paid when the service is shut down.
          </p>
          <p className={p}>
            Statutory damages are set by a court case by case, under 17 U.S.C. § 504
            <Cite id="s3" />. This is general information: for a specific situation, talk to a licensed attorney
            in your state.
          </p>
        </section>

        <section className="mt-14">
          <h2 className={h2}>What happened in the Jetflicks case?</h2>
          <p className={p}>
            Jetflicks was a paid streaming service run from Las Vegas without licenses. After a 14-day trial that
            ended in June 2024, a federal jury convicted five men, and in 2025 the court sentenced them to terms
            of up to 84 months in prison, the Justice Department announced on July 22, 2025.
          </p>
          <p className={p}>
            According to the Justice Department, Jetflicks at one point claimed 183,285 TV episodes, more than any
            licensed service, and the government conservatively valued the infringement at $37.5 million. It was
            the first illegal streaming case ever to go to trial
            <Cite id="s4" />.
          </p>
        </section>

        <section className="mt-14">
          <h2 className={h2}>How can you tell if an IPTV service is legal?</h2>
          <p className={p}>
            Check five things before you pay: who runs the service, where its app is distributed, whether it
            publishes a channel lineup, whether the price is realistic and how it bills you. A licensed service
            passes all five checks. An offer sold only through private messages, with no company name, fails
            most of them.
          </p>
          <ol className="mt-4 list-decimal space-y-2 pl-6 text-[#A8AEBC]">
            {STEPS.map((s) => (
              <li key={s} className="leading-relaxed">{s}</li>
            ))}
          </ol>
        </section>

        <section className="mt-14">
          <h2 className={h2}>What are the legal IPTV options in the US?</h2>
          <p className={p}>
            Legal options include licensed live TV services such as YouTube TV, Hulu + Live TV, Fubo, Sling TV and
            Philo, plus the streaming apps of cable and satellite providers. Each one names its company, publishes
            its lineup and has an official app. Our Firestick comparison lists their prices, checked November 3,
            2026.
          </p>
          <p className={p}>
            See the comparison:{" "}
            <Link href="/blog/best-legal-iptv-firestick-usa" className={a}>
              best legal IPTV for Firestick in 2026
            </Link>
            .
          </p>
        </section>

        <section className="mt-14" id="faq">
          <h2 className={h2}>FAQ: IPTV and US law</h2>
          <p className={p}>Short answers to the questions US buyers ask most about IPTV and the law.</p>
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
            This page is general information about US federal law, not legal advice, and it does not create an
            attorney-client relationship. State laws may also apply. Only use services that hold the rights to the
            content they offer. Brand names belong to their owners; {SITE_NAME} is not affiliated with any service
            or agency named here.
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
