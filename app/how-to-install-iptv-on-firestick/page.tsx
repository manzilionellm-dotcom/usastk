import type { Metadata } from "next";
import Link from "next/link";
import { ArticleTemplate, type Faq } from "@/components/article-template";
import { pageMetadata, SITE_URL } from "@/lib/site";

const PATH = "/how-to-install-iptv-on-firestick";

export const metadata: Metadata = pageMetadata({
  title: "How to Install IPTV on a Firestick (Step by Step)",
  description:
    "Install a media-player app on your Amazon Firestick in a few minutes: enable app installs, add the Downloader app, install your player, and sign in. Generic Fire TV steps, no jargon.",
  path: PATH,
});

const faqs: Faq[] = [
  {
    q: "Do I need a computer to install IPTV on a Firestick?",
    a: "No. Everything is done on the Firestick itself with the remote and the free Downloader app. There's no PC, no cables, and no ADB required.",
  },
  {
    q: "Which player app should I install?",
    a: "IPTV Smarters Pro is the easiest for first-timers. TiviMate has the cleanest interface and best guide handling but unlocks recordings and multi-playlist features with its premium tier. OTT Navigator is a strong modern alternative for on-demand.",
  },
  {
    q: "Why do I have to enable 'Apps from Unknown Sources'?",
    a: "Fire OS blocks installs from outside the Amazon Appstore by default. Turning this on lets you install a standard media player. You can turn it back off after installing if you prefer.",
  },
  {
    q: "The app installed but nothing plays — what now?",
    a: "Double-check the sign-in details for typos or trailing spaces, confirm your subscription is active, and test on Ethernet or a stronger Wi-Fi signal. If it still stalls, message us on WhatsApp and we'll help.",
  },
  {
    q: "Is installing a media player legal?",
    a: "Yes. Media-player apps and sideloading them onto your own device are legal. What you stream and whether that catalog is licensed is the separate question covered in our legality guide.",
  },
];

// HowTo JSON-LD — generic app-install steps only, no piracy instructions.
const howTo = {
  "@type": "HowTo",
  "@id": `${SITE_URL}${PATH}#howto`,
  name: "How to install an IPTV player app on an Amazon Firestick",
  description:
    "Enable app installs, add the Downloader app, install a media player, and sign in with your subscription details.",
  totalTime: "PT10M",
  estimatedCost: { "@type": "MonetaryAmount", currency: "USD", value: "0" },
  tool: [
    { "@type": "HowToTool", name: "Amazon Fire TV Stick or Fire TV Cube" },
    { "@type": "HowToTool", name: "Downloader app by AFTVnews" },
  ],
  supply: [
    { "@type": "HowToSupply", name: "Subscription sign-in details (M3U URL or Xtream Codes)" },
  ],
  step: [
    {
      "@type": "HowToStep",
      position: 1,
      name: "Enable app installs",
      text: "On the Firestick go to Settings, then My Fire TV, then Developer Options, and turn on 'Apps from Unknown Sources'. On newer Fire OS you enable it per app.",
    },
    {
      "@type": "HowToStep",
      position: 2,
      name: "Install the Downloader app",
      text: "From the Fire TV search, find the free Downloader app by AFTVnews and install it. It's a standard sideloading helper.",
    },
    {
      "@type": "HowToStep",
      position: 3,
      name: "Install your media player",
      text: "Open Downloader, enter the official URL for your chosen player (IPTV Smarters Pro, TiviMate, or OTT Navigator), download it, and install.",
    },
    {
      "@type": "HowToStep",
      position: 4,
      name: "Sign in",
      text: "Open the player and enter the sign-in details provided with your subscription. Your channel list and guide load automatically.",
    },
  ],
  inLanguage: "en-US",
};

export default function Page() {
  return (
    <ArticleTemplate
      path={PATH}
      breadcrumbName="Install on Firestick"
      h1="How do I install an IPTV app on a Firestick?"
      answer="Install IPTV on a Firestick in four steps: enable 'Apps from Unknown Sources' in Fire TV settings, install the free Downloader app, use it to download a media player such as IPTV Smarters Pro or TiviMate, then sign in with the details from your subscription. No computer is needed — the whole thing is done with the remote in about ten minutes."
      intro="These are the generic, device-level steps for getting any standard media player onto a Fire TV. They don't involve unlocking, cracking, or bypassing anything — just installing an app and signing in. If you can install Netflix, you can do this."
      extraJsonLd={[howTo]}
      faqs={faqs}
      faqSchema={faqs}
      related={[
        { href: "/iptv-for-firestick", label: "IPTV for Firestick explained" },
        { href: "/best-iptv-for-firestick-2026", label: "Best IPTV for Firestick in 2026" },
        { href: "/is-iptv-legal-in-usa", label: "Is IPTV legal in the USA?" },
        { href: "/cheap-iptv-usa", label: "Cheap IPTV in the USA" },
      ]}
      sections={[
        {
          h2: "Step 1 — Enable app installs",
          paras: [
            "On your Firestick, open Settings, then My Fire TV, then Developer Options, and turn on 'Apps from Unknown Sources'. On newer Fire OS versions you enable this per app the first time you install one. This setting simply lets you install apps that aren't in the Amazon Appstore — a normal thing to do on Android-based devices. You can switch it off again afterward if you like.",
          ],
        },
        {
          h2: "Step 2 — Install the Downloader app",
          paras: [
            "From the Fire TV home screen, use the search icon to find the free Downloader app by AFTVnews and install it. Downloader is a widely used, legitimate helper that lets you type in a web address and download a file directly on the Firestick. Open it once and allow the permission it requests so it can save files.",
          ],
        },
        {
          h2: "Step 3 — Install your media player",
          paras: [
            "Open Downloader and enter the official URL for the player you want. IPTV Smarters Pro is the friendliest starting point; TiviMate is the favorite for a polished, cable-like guide; OTT Navigator is a strong option for on-demand. Download the file and follow the on-screen prompt to install it. Always use the official source for the app you're installing.",
          ],
        },
        {
          h2: "Step 4 — Sign in and watch",
          paras: [
            <>
              Open the player and enter the sign-in details we send with your
              subscription (usually an M3U URL or Xtream Codes login). The channel
              list and program guide load automatically. If something looks empty,
              re-check for typos, confirm the subscription is active, and refresh
              the guide. Full pricing and plans are on our{" "}
              <Link href="/cheap-iptv-usa" className="text-[#4F7DFF] hover:underline">
                pricing guide
              </Link>
              .
            </>,
          ],
        },
        {
          h2: "If a stream stalls",
          paras: [
            "Buffering is almost always about the network between your Firestick and the internet, not the stick itself. The three fixes that solve most cases: use a wired Ethernet adapter or move closer to the router, clear the player's cache, and restart the Firestick. If a specific stream keeps stalling, message us on WhatsApp and we'll help you sort it out — that's what the support line is for.",
          ],
        },
      ]}
    />
  );
}
