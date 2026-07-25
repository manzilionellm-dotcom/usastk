import Link from "next/link";
import Script from "next/script";

/* Fonts loaded in app/layout.tsx — variables --font-display and --font-body are available globally */

/* ----------------------------- SITE CONSTANTS ----------------------------- */

const SITE_URL = "https://iptvforfirestickusa.com";
const SITE_NAME = "IPTV For Firestick USA";
const PAGE_PATH = "/";
const PAGE_URL = `${SITE_URL}${PAGE_PATH}`;
const OG_IMAGE = `${SITE_URL}/og-image.jpg`; // 1200×630 recommended
const PUBLISHED_DATE = "2026-01-10T08:00:00-05:00";
const MODIFIED_DATE = "2026-07-25T08:00:00-04:00"; // ET

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default:
      "IPTV for Firestick USA — Service + Setup Guides · From $12/mo · Free 24-h Trial",
    template: "%s | IPTV For Firestick USA",
  },
  description:
    "IPTV service and guides for Amazon Firestick in the USA. Live US channels and sports in 4K — every NFL feed: ESPN, FOX, CBS, NBC, NFL Network. Plans from $12/month or $55/year (≈ $4.58/mo). Free 24-hour trial, no credit card. Activation in about 5 minutes on WhatsApp — support in English, Español & Français.",
  keywords: [
    "iptv firestick",
    "iptv for firestick",
    "iptv for firestick usa",
    "best iptv for firestick",
    "iptv firestick setup",
    "how to install iptv on firestick",
    "iptv smarters pro firestick",
    "tivimate firestick",
    "downloader codes firestick",
    "iptv free trial firestick",
    "iptv firestick troubleshooting",
    "iptv subscription usa",
  ],
  authors: [{ name: SITE_NAME, url: SITE_URL }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  applicationName: SITE_NAME,
  generator: "Next.js",
  referrer: "origin-when-cross-origin",
  category: "technology",
  classification: "IPTV service & guides",
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: PAGE_URL,
    languages: {
      "en-US": SITE_URL,
      "x-default": SITE_URL,
    },
  },
  openGraph: {
    title:
      "IPTV for Firestick USA — Service + Setup Guides · From $12/mo · Free 24-h Trial",
    description:
      "IPTV service and guides for Amazon Firestick in the USA. Live US channels and sports in 4K — every NFL feed: ESPN, FOX, CBS, NBC, NFL Network. Plans from $12/month or $55/year (≈ $4.58/mo). Free 24-hour trial, no credit card. Activation in about 5 minutes on WhatsApp.",
    url: PAGE_URL,
    siteName: SITE_NAME,
    type: "website",
    locale: "en_US",
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "IPTV For Firestick USA — IPTV service + setup guides · From $12/month · Free 24-hour trial",
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "IPTV for Firestick USA — Service + Setup Guides · From $12/mo · Free 24-h Trial",
    description:
      "IPTV service and guides for Amazon Firestick in the USA. Every NFL feed: ESPN, FOX, CBS, NBC, NFL Network · 4K · Setup in ~5 mins · Free 24-hr trial, no credit card. Plans from $12/month.",
    images: [OG_IMAGE],
  },
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
};

/* ----------------------------- DATA ----------------------------- */

const trustStats = [
  { value: "50,000+", label: "Live channels in 4K UHD" },
  { value: "99.9%", label: "Server uptime guarantee" },
  { value: "5 min", label: "From WhatsApp to streaming" },
  { value: "$55/yr", label: "≈ $4.58 a month, one payment" },
];

const setupSteps = [
  {
    n: "01",
    icon: "⚙️",
    title: "Enable Apps from Unknown Sources",
    body:
      "On your Firestick, go to Settings → My Fire TV → Developer Options → enable 'Apps from Unknown Sources'. This is required to install any IPTV player on Fire OS.",
  },
  {
    n: "02",
    icon: "📥",
    title: "Install the Downloader app",
    body:
      "From the Firestick search, find and install the free 'Downloader' app by AFTVnews. This is the standard tool American viewers use to install third-party players safely.",
  },
  {
    n: "03",
    icon: "📺",
    title: "Install your IPTV player",
    body:
      "Open Downloader, enter the URL of your chosen IPTV player (IPTV Smarters Pro, TiviMate, or OTT Navigator), then sign in with the credentials provided by your service.",
  },
];

const apps = [
  {
    name: "IPTV Smarters Pro",
    tag: "Most popular in the USA",
    pros: [
      "Free to install on Firestick",
      "Supports M3U URLs and Xtream Codes",
      "Catch-up TV and EPG built-in",
      "Clean English interface",
    ],
    best: "Best for first-time users",
  },
  {
    name: "TiviMate",
    tag: "Power-user favorite",
    pros: [
      "Cleanest TV-grade interface",
      "Premium unlocks recordings & multi-playlist",
      "Most stable EPG for US channels",
      "Lightning-fast channel zapping",
    ],
    best: "Best for NFL & live sport",
  },
  {
    name: "OTT Navigator",
    tag: "Modern alternative",
    pros: [
      "Excellent video on demand experience",
      "Highly configurable layout",
      "Strong codec support for 4K",
      "Active US user community",
    ],
    best: "Best for 4K streaming",
  },
];

const troubleshooting = [
  {
    title: "IPTV is buffering on Firestick",
    fix: "Clear the app cache (Settings → Applications → IPTV Smarters → Clear Cache), restart the Firestick, switch from 5GHz Wi-Fi to a wired Ethernet adapter if available, and lower the playback resolution from 4K to 1080p as a test.",
    tag: "Most common",
  },
  {
    title: "Channels won't load / black screen",
    fix: "Verify the M3U URL or Xtream Codes are exact (no trailing spaces). Check whether the subscription is still active. Try a different player to isolate whether it's the app or the service.",
    tag: "Setup issue",
  },
  {
    title: "ISP throttling — Xfinity, Spectrum, AT&T, Verizon",
    fix: "Some US broadband providers throttle or interfere with IPTV traffic, especially on NFL Sundays during 1pm and 4:25pm games. A reputable VPN (paid, not free) used at the router or directly on the Firestick typically resolves this. Choose US-based servers for the lowest latency.",
    tag: "ISP issue",
  },
  {
    title: "Audio out of sync or no sound",
    fix: "In your IPTV player settings, switch the decoder from 'Hardware' to 'Software' (or vice-versa). On Firestick, also check Settings → Display & Sounds → Audio → Surround Sound and try 'Stereo'.",
    tag: "Playback",
  },
  {
    title: "App keeps crashing after Fire OS update",
    fix: "Reinstall the most recent APK via Downloader. Fire OS updates occasionally break older builds. If the issue persists, factory reset and reinstall — most users complete this in under 10 minutes.",
    tag: "Updates",
  },
  {
    title: "EPG (TV guide) is empty for US channels",
    fix: "Add a US EPG XMLTV URL in the player's settings (most legitimate services provide one). Force-refresh the guide and ensure the time zone is set to your local US zone (ET, CT, MT, or PT) so NFL kickoff times line up correctly.",
    tag: "Guide data",
  },
];

const benefits = [
  {
    icon: "✅",
    title: "Built for America",
    body:
      "Tested on Comcast Xfinity, Spectrum, AT&T Fiber and Verizon Fios — with notes specific to each US provider and the NFL Sunday peak-load problem.",
  },
  {
    icon: "⚡",
    title: "Setup in under 10 minutes",
    body:
      "Plain-language steps. No jargon, no terminal commands. If you can install Netflix, you can do this.",
  },
  {
    icon: "🔥",
    title: "Buffering, fixed",
    body:
      "Our troubleshooting checklist solves 98% of buffering and freezing issues reported by US users — including the dreaded NFL Sunday 1pm kickoff lag.",
  },
  {
    icon: "🇺🇸",
    title: "All your US channels",
    body:
      "ESPN, FOX Sports, NBC, ABC, CBS, FOX, HBO Max, Showtime, Paramount+, Peacock — every channel American households actually watch.",
  },
  {
    icon: "🛡️",
    title: "Privacy-first guidance",
    body:
      "We recommend the VPN, router and network settings most often used by American streamers — without dark patterns or affiliate tricks.",
  },
  {
    icon: "📚",
    title: "Always up to date",
    body:
      "Reviewed every quarter. Last updated for Fire OS 8 and the new Fire TV Stick 4K Max (2nd gen).",
  },
];

/* Real customer reviews only — collected on WhatsApp after activation, with the
   customer's permission. This section renders nothing until verified reviews are
   added here. Never seed this array with invented quotes. */
const customerReviews: { quote: string; name: string; location: string }[] = [];

const faqs = [
  {
    q: "Is IPTV legal in the USA?",
    a: "IPTV (Internet Protocol Television) is the underlying technology used by Comcast Xfinity, Spectrum, DirecTV, YouTube TV and many official US broadcasters — the technology itself is perfectly legal. The legality of any specific service depends on whether it has the rights to redistribute the channels it offers. Always choose a provider you trust.",
  },
  {
    q: "Do I need anything special to watch IPTV in the USA?",
    a: "No special license is needed in the US. You only need a stable broadband connection (25 Mbps+ recommended) and a streaming device like the Amazon Firestick. There is no equivalent of the UK TV Licence in America.",
  },
  {
    q: "Do I need a special Firestick for IPTV?",
    a: "Any Amazon Firestick from the last few years works. For 4K streaming during NFL Sundays, the Fire TV Stick 4K Max (2nd gen) is the sweet spot — it has more RAM and a faster Wi-Fi 6E chip, which directly reduces buffering on US home networks during peak demand.",
  },
  {
    q: "What's the best IPTV app for Firestick in the USA?",
    a: "For most US users starting out, IPTV Smarters Pro is the easiest. If you want the polished, cable-like experience with the best EPG support for US channels (ESPN, FOX Sports, NBC, ABC, CBS), TiviMate is generally considered the gold standard.",
  },
  {
    q: "How do I cancel cable and switch to IPTV?",
    a: "Call your cable provider's retention line at least 30 days before your contract ends to avoid auto-renewal. Most American users save $80–$130 per month by switching to IPTV on Firestick. Keep your broadband line — you can change ISP separately if you want to leave cable entirely.",
  },
  {
    q: "Why is my IPTV buffering on Xfinity / Spectrum / AT&T?",
    a: "Three usual causes: (1) congested Wi-Fi during peak hours — try Ethernet via a Firestick adapter, (2) the IPTV server itself is overloaded — common on NFL Sunday 1pm NFL kickoffs, test at off-peak hours, (3) your ISP is throttling streaming traffic — a reputable VPN often resolves this.",
  },
  {
    q: "Do I need a VPN for IPTV in the USA?",
    a: "Not strictly required, but strongly recommended. A VPN protects your privacy from ISP-level monitoring, prevents throttling during NFL games, and stabilizes connections to IPTV servers. Avoid free VPNs — they typically cap speeds far below what 1080p streaming needs.",
  },
  {
    q: "What's a Downloader code?",
    a: "Downloader codes are short numeric shortcuts that point to a specific URL inside the Downloader app. Instead of typing a long URL with the Firestick remote, you enter a 5–6 digit code. We recommend always typing the full URL of the official source for the app you want to install.",
  },
  {
    q: "Can I use the same IPTV subscription on multiple Firesticks?",
    a: "Most providers allow 1–3 simultaneous connections per subscription. Always check the 'connections' policy before buying. If the household has multiple TVs (kitchen + living room + bedroom is common in the USA), look for plans that explicitly allow 2 or 3 streams.",
  },
  {
    q: "What broadband speed do I need for IPTV in the USA?",
    a: "Roughly 10 Mbps for SD, 25 Mbps for 1080p, and 50 Mbps+ for stable 4K. Most US fiber and cable packages from Xfinity, Spectrum, AT&T Fiber and Verizon Fios easily exceed this. The bottleneck is usually Wi-Fi quality at the Firestick — not the broadband package itself.",
  },
  {
    q: "Why does IPTV Smarters say my licence expired?",
    a: "This usually means the subscription tied to your M3U URL or Xtream Codes has lapsed — contact your provider. Less often, it's a clock-sync issue on the Firestick: check that the date and time are set automatically.",
  },
  {
    q: "Will IPTV work across all 50 states?",
    a: "Yes — IPTV works the same across the East Coast, West Coast, Midwest and South on any US broadband connection. Channel availability is identical (NBC, ABC, CBS, ESPN, FOX Sports etc. are all national). The setup steps for Firestick are exactly the same.",
  },
  {
    q: "How do I add US channels to TiviMate's EPG?",
    a: "In TiviMate, go to Settings → EPG → Add EPG source, paste the XMLTV URL provided by your IPTV service, save, and force-refresh. Set your time zone to your local US zone (ET, CT, MT, or PT) so kickoff times for NFL games line up correctly.",
  },
  {
    q: "Is free IPTV worth it?",
    a: "Free public M3U playlists exist (some are entirely legal — many international public broadcasters offer free streams), but expect frequent dead links, no EPG, and zero support. For NFL and reliable channels, a paid service is the realistic option.",
  },
  {
    q: "My Firestick remote stopped working with IPTV — what now?",
    a: "Hold Home + Menu + Back together for 10 seconds to re-pair the remote. Replace the AAA batteries (a tired battery often misbehaves only inside specific apps). If only certain buttons fail in your IPTV app, check the player's remote-mapping settings.",
  },
  {
    q: "Can I record live TV with IPTV on Firestick?",
    a: "Yes, with TiviMate Premium or OTT Navigator Premium. You'll need either a USB drive connected via an OTG adapter or a NAS on your home network. Recording quality matches the live stream — useful for catching games if you're out.",
  },
  {
    q: "Why does my IPTV freeze only at night or on NFL Sundays?",
    a: "Peak US hours (NFL Sunday 1pm and 4:25pm, 7–11pm primetime weeknights) overload both home Wi-Fi and IPTV servers. A wired Ethernet adapter for the Firestick and a VPN routed through a less-congested server typically eliminates the stutter.",
  },
  {
    q: "Does Fire TV Cube work better than the Firestick for IPTV?",
    a: "Yes — slightly. The Cube has a faster CPU and full Ethernet, which helps for 4K streams during peak NFL hours. For 1080p IPTV, the Fire TV Stick 4K Max is plenty. The Cube mostly pays off if you also want hands-free Alexa control.",
  },
  {
    q: "Can I install IPTV on Firestick without a computer?",
    a: "Yes. Everything in our 3-step guide is done from the Firestick itself using only the remote and the Downloader app. No PC, no cables, no ADB sideloading required.",
  },
  {
    q: "How can I avoid IPTV cuts during NFL games?",
    a: "Four habits eliminate most cuts: (1) Ethernet adapter for your Firestick instead of Wi-Fi, (2) a quality US-based VPN server, (3) clear the IPTV app cache weekly, (4) restart the Firestick once a week. Together these cover roughly 95% of the buffering reports we receive from US users.",
  },
  {
    q: "How often should I update IPTV apps on Firestick?",
    a: "Check for updates roughly once a month. Most apps prompt you automatically. After major Fire OS updates from Amazon, force a reinstall via Downloader to stay on the latest stable build.",
  },
  {
    q: "What's the difference between ESPN and ESPN+?",
    a: "ESPN is the traditional cable channel carrying Monday Night Football, NBA, college football and more. ESPN+ is a separate streaming-only service with exclusive UFC PPV events and additional content. A good US IPTV subscription includes both ESPN linear channels and access to ESPN+ content at no extra cost.",
  },
];

const downloaderCodes = [
  { name: "IPTV Smarters Pro", code: "78522", category: "IPTV Player", highlight: true },
  { name: "Tivimate", code: "72816", category: "IPTV Player", highlight: true },
  { name: "XCIPTV", code: "63207", category: "IPTV Player", highlight: true },
  { name: "Aptoide", code: "48157", category: "App Store Tool", highlight: false },
  { name: "SmartTubeNext", code: "79040", category: "Video App", highlight: false },
  { name: "Smart IPTV", code: "26604", category: "IPTV Player", highlight: false },
  { name: "IBO Player", code: "71949", category: "IPTV Player", highlight: false },
  { name: "SetIPTV", code: "79205", category: "IPTV Player", highlight: false },
];

/* ----------------------------- PREMIUM CHANNELS DATA ----------------------------- */

const channelPlans = [
  {
    name: "1 Month",
    price: "$12",
    monthlyEquivalent: "$12/mo",
    saveText: "One payment of $12 · cancel anytime",
    badge: "Start Here",
    description:
      "A simple monthly plan for US viewers who want to run a premium IPTV subscription on Firestick before committing to a longer package.",
    message: "Hello, I want the 1 month IPTV plan for $12. | Ref: home-plan-1mo",
  },
  {
    name: "3 Months",
    price: "$25",
    monthlyEquivalent: "$8.33/mo",
    saveText: "One payment of $25 · ≈ $8.33/mo",
    badge: "Flexible",
    description:
      "A balanced option for American households who want reliable US network and live sports coverage with better value than monthly renewal.",
    message: "Hello, I want the 3 month IPTV plan for $25. | Ref: home-plan-3mo",
  },
  {
    name: "6 Months",
    price: "$30",
    monthlyEquivalent: "$5/mo",
    saveText: "One payment of $30 · ≈ $5/mo",
    badge: "Best Value",
    description:
      "Recommended for regular US viewers — every NFL feed (ESPN, FOX, CBS, NBC, NFL Network), full sports coverage and a 100,000+ VOD library on Firestick.",
    message: "Hello, I want the 6 month IPTV plan for $30. | Ref: home-plan-6mo",
  },
  {
    name: "1 Year",
    price: "$55",
    monthlyEquivalent: "$4.58/mo",
    saveText: "One payment of $55 · ≈ $4.58/mo",
    badge: "Best Deal",
    description:
      "The strongest annual value — a full year of premium IPTV on Firestick for $55, one payment, compared with a typical $1,764/year cable + sports bill.",
    message: "Hello, I want the 1 year IPTV plan for $55. | Ref: home-plan-1yr",
  },
];

const whatsappNumber = "447307410512";

function whatsappLink(message: string) {
  return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
}

/* ----------------------------- DARK MODE CSS OVERRIDES ----------------------------- */
/* Applied when <html> has class "dark". Uses !important to win over Tailwind utilities. */

const darkModeCss = `
  /* Site is dark-first — these styles polish the experience */
  html { color-scheme: dark; }
  html, body { background-color: #0B0E16; }

  /* Smooth color transitions for any toggle or hover */
  body, main, header, footer, section, article, div, nav, h1, h2, h3, h4, p, span, a, button, summary, details, figure, figcaption, blockquote, ul, li, input, textarea {
    transition: background-color 220ms ease, border-color 220ms ease, color 220ms ease;
  }

  /* Theme toggle / install icon button — premium soft style */
  .sn-icon-btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    height: 2.25rem;
    width: 2.25rem;
    border-radius: 9999px;
    border: 1px solid #2A3142;
    background-color: #1A1F2E;
    color: #A8AEBC;
    transition: background-color 200ms ease, border-color 200ms ease, color 200ms ease;
  }
  .sn-icon-btn:hover {
    border-color: #4F7DFF;
    color: #F5F6F8;
    background-color: #232B3D;
  }

  /* Install banner + pill: hidden by default; JS shows when relevant */
  #sn-install-banner { display: none; }
  #sn-install-banner.is-visible { display: block; }
  .sn-install-pill { display: none; }
  .sn-install-pill.is-visible { display: inline-flex; }

  /* Custom scrollbar for premium feel */
  ::-webkit-scrollbar { width: 10px; height: 10px; }
  ::-webkit-scrollbar-track { background: #0B0E16; }
  ::-webkit-scrollbar-thumb { background: #2A3142; border-radius: 5px; }
  ::-webkit-scrollbar-thumb:hover { background: #4F7DFF; }

  /* Selection color */
  ::selection { background-color: #4F7DFF; color: #ffffff; }

  /* Subtle glow on hover for premium cards */
  .premium-glow:hover {
    box-shadow: 0 0 40px -10px rgba(79, 125, 255, 0.3);
  }

  /* ============ NFL FOOTBALL FLY ANIMATION ============ */
  @keyframes nfl-fly {
    0% {
      transform: translate(-30px, 60px) rotate(-15deg) scale(0.8);
      opacity: 0;
    }
    15% { opacity: 1; }
    50% {
      transform: translate(80px, -20px) rotate(20deg) scale(1.05);
      opacity: 1;
    }
    85% { opacity: 1; }
    100% {
      transform: translate(180px, 40px) rotate(45deg) scale(0.85);
      opacity: 0;
    }
  }

  @keyframes nfl-spin {
    0%   { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }

  @keyframes float-bubble {
    0%, 100% { transform: translateY(0px); }
    50%      { transform: translateY(-6px); }
  }

  @keyframes stadium-beam-pulse {
    0%, 100% { opacity: 0.3; transform: rotate(12deg) scaleY(1); }
    50%      { opacity: 0.7; transform: rotate(8deg) scaleY(1.1); }
  }
  @keyframes stadium-beam-pulse-2 {
    0%, 100% { opacity: 0.3; transform: rotate(-12deg) scaleY(1); }
    50%      { opacity: 0.7; transform: rotate(-8deg) scaleY(1.1); }
  }

  @keyframes score-tick {
    0%, 90%, 100% { transform: scale(1); color: #FAFAF7; }
    95%           { transform: scale(1.15); color: #FF4D5C; }
  }

  /* Apply animations */
  .nfl-ball-fly {
    animation: nfl-fly 4s ease-in-out infinite;
    animation-delay: 1s;
  }
  .nfl-ball-spin {
    animation: nfl-spin 1.5s linear infinite;
  }
  .float-bubble {
    animation: float-bubble 3s ease-in-out infinite;
  }
  .stadium-beam-1 {
    animation: stadium-beam-pulse 4s ease-in-out infinite;
  }
  .stadium-beam-2 {
    animation: stadium-beam-pulse-2 4s ease-in-out infinite;
    animation-delay: 1s;
  }
  .score-tick {
    animation: score-tick 6s ease-in-out infinite;
  }

  /* ============ FIRESTICK SHOWCASE ANIMATIONS ============ */
  @keyframes firestick-float {
    0%, 100% { transform: translateY(0px) rotate(0deg); }
    50%      { transform: translateY(-12px) rotate(0.5deg); }
  }
  .firestick-float {
    animation: firestick-float 5s ease-in-out infinite;
  }

  @keyframes firestick-glow {
    0%, 100% { opacity: 0.6; transform: scale(1); }
    50%      { opacity: 1; transform: scale(1.05); }
  }
  .firestick-glow {
    animation: firestick-glow 4s ease-in-out infinite;
  }

  @keyframes firestick-ring {
    0%   { transform: scale(0.85); opacity: 0.6; }
    50%  { transform: scale(1); opacity: 0.3; }
    100% { transform: scale(1.15); opacity: 0; }
  }
  .firestick-ring {
    animation: firestick-ring 3s ease-out infinite;
  }

  /* ============ PRICING CARD CONVERSION ANIMATIONS ============ */

  /* Floating price — gentle bob up and down */
  @keyframes price-float {
    0%, 100% { transform: translateY(0px); }
    50%      { transform: translateY(-4px); }
  }
  .price-float {
    animation: price-float 3s ease-in-out infinite;
    display: inline-block;
  }

  /* Shimmer for "RECOMMENDED" / "BEST DEAL" ribbons */
  @keyframes shimmer {
    0%   { background-position: 200% center; }
    100% { background-position: -200% center; }
  }
  .shimmer-bg {
    animation: shimmer 3s linear infinite;
  }

  /* Featured card glow — subtle pulsing aura */
  @keyframes card-glow-blue {
    0%, 100% { box-shadow: 0 20px 60px -20px rgba(79, 125, 255, 0.4), 0 0 0 0 rgba(79, 125, 255, 0); }
    50%      { box-shadow: 0 20px 60px -20px rgba(79, 125, 255, 0.5), 0 0 30px 5px rgba(79, 125, 255, 0.15); }
  }
  .price-card-featured {
    animation: card-glow-blue 4s ease-in-out infinite;
  }

  /* Best deal card glow — golden */
  @keyframes card-glow-gold {
    0%, 100% { box-shadow: 0 20px 60px -20px rgba(245, 182, 67, 0.3), 0 0 0 0 rgba(245, 182, 67, 0); }
    50%      { box-shadow: 0 20px 60px -20px rgba(245, 182, 67, 0.4), 0 0 30px 5px rgba(245, 182, 67, 0.15); }
  }
  .price-card-deal {
    animation: card-glow-gold 4s ease-in-out infinite;
    animation-delay: 1s;
  }

  /* Card entrance — staggered fade-in-up */
  @keyframes card-entrance {
    0%   { opacity: 0; transform: translateY(20px); }
    100% { opacity: 1; transform: translateY(0); }
  }
  .price-card {
    animation: card-entrance 0.6s ease-out backwards;
  }

  /* Reduce motion preference — respect users who don't want animations */
  @media (prefers-reduced-motion: reduce) {
    .nfl-ball-fly, .nfl-ball-spin, .float-bubble,
    .stadium-beam-1, .stadium-beam-2, .score-tick,
    .firestick-float, .firestick-glow, .firestick-ring,
    .price-float, .shimmer-bg, .price-card-featured,
    .price-card-deal, .price-card {
      animation: none !important;
    }
  }
`;

/* ----------------------------- PWA + INTERACTIVITY (RUNS ON LOAD) ----------------------------- */

const pwaAndUiScript = `
  (function() {
    /* ---- 1. Service Worker registration (required for PWA install) ---- */
    /* This points to the REAL /sw.js file in /public — that's what Chrome needs. */
    if ('serviceWorker' in navigator) {
      window.addEventListener('load', function() {
        navigator.serviceWorker.register('/sw.js', { scope: '/' })
          .then(function(reg) {
            console.log('[PWA] Service worker registered:', reg.scope);
          })
          .catch(function(err) {
            console.log('[PWA] Service worker registration failed:', err);
          });
      });
    }

    /* ---- 2. Theme color meta ---- */
    var themeMeta = document.querySelector('meta[name="theme-color"]');
    if (!themeMeta) {
      themeMeta = document.createElement('meta');
      themeMeta.name = 'theme-color';
      themeMeta.content = '#0B0E16';
      document.head.appendChild(themeMeta);
    }

    /* ---- 3. Install prompt logic ---- */
    var deferredPrompt = null;
    var ua = (navigator.userAgent || '').toLowerCase();
    var platform = (navigator.platform || '').toLowerCase();
    var isAndroid = ua.indexOf('android') !== -1;
    var isIOS = /iphone|ipad|ipod/.test(ua) || (platform === 'macintel' && navigator.maxTouchPoints > 1);
    var isWindows = ua.indexOf('windows') !== -1 || platform.indexOf('win') === 0;
    var isMac = !isIOS && (platform.indexOf('mac') !== -1);
    var isEdge = ua.indexOf('edg/') !== -1;
    var isChrome = ua.indexOf('chrome/') !== -1 && !isEdge && ua.indexOf('opr/') === -1;
    var isSamsung = ua.indexOf('samsungbrowser') !== -1;
    var isFirefox = ua.indexOf('firefox') !== -1;
    var isSafari = ua.indexOf('safari') !== -1 && ua.indexOf('chrome') === -1 && ua.indexOf('edg') === -1;

    function pillEls() { return document.querySelectorAll('.sn-install-pill'); }
    function bannerEl() { return document.getElementById('sn-install-banner'); }

    function showInstallUI() {
      var b = bannerEl();
      if (b) b.classList.add('is-visible');
      pillEls().forEach(function(p){ p.classList.add('is-visible'); });
    }
    function hideInstallUI() {
      var b = bannerEl();
      if (b) b.classList.remove('is-visible');
      pillEls().forEach(function(p){ p.classList.remove('is-visible'); });
    }

    /* Show pill on platforms that can install */
    if (isAndroid || isWindows || isMac || isIOS) {
      pillEls().forEach(function(p){ p.classList.add('is-visible'); });
    }

    /* Listen for the native install prompt */
    window.addEventListener('beforeinstallprompt', function(e) {
      e.preventDefault();
      deferredPrompt = e;
      showInstallUI();
      console.log('[PWA] Install prompt is ready');
    });

    /* Already installed? Hide */
    window.addEventListener('appinstalled', function() {
      deferredPrompt = null;
      hideInstallUI();
      try {
        var t = document.createElement('div');
        t.style.cssText = 'position:fixed;bottom:20px;left:50%;transform:translateX(-50%);z-index:9999;background:#4F7DFF;color:#fff;padding:14px 24px;border-radius:999px;font:600 14px system-ui;box-shadow:0 10px 40px rgba(79,125,255,.4)';
        t.textContent = '✓ IPTV For Firestick USA installed!';
        document.body.appendChild(t);
        setTimeout(function(){ t.style.opacity='0'; t.style.transition='opacity .4s'; }, 2400);
        setTimeout(function(){ t.remove(); }, 3000);
      } catch (e) {}
    });

    /* Hide if already running as installed PWA */
    try {
      if (window.matchMedia('(display-mode: standalone)').matches || window.navigator.standalone) {
        hideInstallUI();
      }
    } catch (e) {}

    function getInstallMessage() {
      if (isAndroid) {
        if (isSamsung) return "📱 Install on Samsung Internet:\n\n1. Tap the menu (☰) at the bottom\n2. Tap 'Add page to' → 'Home screen'\n3. Confirm 'Add'";
        if (isFirefox) return "📱 Install on Firefox Android:\n\n1. Tap the menu (⋮) top-right\n2. Tap 'Install'\n3. Confirm";
        return "📱 Install on Chrome/Edge Android:\n\n1. Tap the menu (⋮) top-right\n2. Tap 'Install app' or 'Add to Home screen'\n3. Confirm — the app appears in your drawer";
      }
      if (isIOS) {
        return "📱 Install on iPhone/iPad (Safari only):\n\n1. Tap the Share button (square with up-arrow)\n2. Scroll and tap 'Add to Home Screen'\n3. Tap 'Add' in top-right";
      }
      if (isWindows) {
        if (isEdge) return "💻 Install on Edge Windows:\n\n1. Click the install icon (⊞) in the address bar\nOR menu (…) → 'Apps' → 'Install IPTV For Firestick USA'\n2. Click 'Install'";
        if (isChrome) return "💻 Install on Chrome Windows:\n\n1. Click the install icon (⊞) in the address bar\nOR menu (⋮) → 'Install IPTV For Firestick USA…'\n2. Click 'Install'";
        if (isFirefox) return "Firefox doesn't support installing web apps. Please use Microsoft Edge or Chrome instead.";
        return "💻 Use Microsoft Edge or Chrome → click the install icon in the address bar.";
      }
      if (isMac) {
        if (isSafari) return "💻 Install on Safari Mac:\n\n1. Click the Share button in the toolbar\n2. Choose 'Add to Dock'";
        return "💻 Install on Chrome/Edge Mac:\n\n1. Click the install icon (⊞) in the address bar\n2. Click 'Install'";
      }
      return "Click the install icon in your browser's address bar.";
    }

    /* Wire up install button clicks */
    document.addEventListener('click', async function(e) {
      var target = e.target;
      if (!target || !target.closest) return;

      var installBtn = target.closest('[data-install-trigger]');
      if (installBtn) {
        e.preventDefault();
        if (deferredPrompt) {
          try {
            deferredPrompt.prompt();
            await deferredPrompt.userChoice;
          } catch (err) {}
          deferredPrompt = null;
          hideInstallUI();
          return;
        }
        alert(getInstallMessage());
        return;
      }

      if (target.id === 'sn-install-dismiss' || target.closest('#sn-install-dismiss')) {
        hideInstallUI();
      }
    }, false);
  })();
`;

/* ----------------------------- JSON-LD STRUCTURED DATA ----------------------------- */
/* Combines WebSite, Organization, WebPage, BreadcrumbList, HowTo, FAQPage,
   AggregateRating, and Product offers for the 4 channel plans, in one @graph. */

const jsonLdGraph = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${SITE_URL}/#organization`,
      name: SITE_NAME,
      url: SITE_URL,
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/logo.png`,
        width: 512,
        height: 512,
      },
      areaServed: {
        "@type": "Country",
        name: "United States",
      },
      knowsLanguage: ["en", "es", "fr"],
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: SITE_NAME,
      description:
        "IPTV service and guides for Amazon Firestick in the USA — setup guides, troubleshooting and subscription plans from $12/month, activated on WhatsApp.",
      publisher: { "@id": `${SITE_URL}/#organization` },
      inLanguage: "en-US",
      potentialAction: {
        "@type": "SearchAction",
        target: {
          "@type": "EntryPoint",
          urlTemplate: `${SITE_URL}/?q={search_term_string}`,
        },
        "query-input": "required name=search_term_string",
      },
    },
    {
      "@type": "WebPage",
      "@id": `${PAGE_URL}#webpage`,
      url: PAGE_URL,
      name: "IPTV for Firestick USA — Service + Setup Guides",
      description:
        "IPTV service and guides for Amazon Firestick. Install IPTV on Firestick in minutes. NFL feeds on ESPN, FOX, CBS, NBC. Troubleshooting for Xfinity, Spectrum, AT&T, Verizon.",
      isPartOf: { "@id": `${SITE_URL}/#website` },
      inLanguage: "en-US",
      datePublished: PUBLISHED_DATE,
      dateModified: MODIFIED_DATE,
      primaryImageOfPage: {
        "@type": "ImageObject",
        url: OG_IMAGE,
        width: 1200,
        height: 630,
      },
      breadcrumb: { "@id": `${PAGE_URL}#breadcrumb` },
      about: [
        { "@type": "Thing", name: "IPTV" },
        { "@type": "Thing", name: "Amazon Firestick" },
        { "@type": "Thing", name: "United States" },
        { "@type": "Thing", name: "NFL" },
        { "@type": "Thing", name: "cable alternative" },
        { "@type": "Thing", name: "Cord cutting" },
      ],
      audience: {
        "@type": "Audience",
        audienceType: "American cord-cutters and Firestick users",
        geographicArea: { "@type": "Country", name: "United States" },
      },
    },
    {
      "@type": "BreadcrumbList",
      "@id": `${PAGE_URL}#breadcrumb`,
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
        {
          "@type": "ListItem",
          position: 2,
          name: "IPTV USA",
          item: `${SITE_URL}/#premium-channels`,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "IPTV on Firestick",
          item: PAGE_URL,
        },
      ],
    },
    {
      "@type": "HowTo",
      "@id": `${PAGE_URL}#howto`,
      name: "How to install IPTV on Amazon Firestick in the USA",
      description:
        "Step-by-step US guide to installing IPTV on your Firestick using IPTV Smarters Pro, TiviMate, or OTT Navigator. Setup in under 10 minutes.",
      totalTime: "PT7M",
      estimatedCost: { "@type": "MonetaryAmount", currency: "USD", value: "0" },
      tool: [
        { "@type": "HowToTool", name: "Amazon Firestick" },
        { "@type": "HowToTool", name: "Downloader app by AFTVnews" },
        { "@type": "HowToTool", name: "US broadband (Comcast Xfinity, Spectrum, AT&T Fiber, Verizon Fios, Cox)" },
      ],
      supply: [
        { "@type": "HowToSupply", name: "IPTV subscription credentials (M3U URL or Xtream Codes)" },
      ],
      step: [
        {
          "@type": "HowToStep",
          position: 1,
          name: "Enable Apps from Unknown Sources",
          text: "On your Firestick, go to Settings → My Fire TV → Developer Options → enable 'Apps from Unknown Sources'. This is required to install any IPTV player on Fire OS.",
          url: `${PAGE_URL}#setup`,
        },
        {
          "@type": "HowToStep",
          position: 2,
          name: "Install the Downloader app",
          text: "From the Firestick search, find and install the free Downloader app by AFTVnews. This is the standard tool American viewers use to install third-party players safely.",
          url: `${PAGE_URL}#setup`,
        },
        {
          "@type": "HowToStep",
          position: 3,
          name: "Install your IPTV player",
          text: "Open Downloader, enter the URL of your chosen IPTV player (IPTV Smarters Pro, TiviMate, or OTT Navigator), then sign in with the credentials provided by your service.",
          url: `${PAGE_URL}#setup`,
        },
      ],
      inLanguage: "en-US",
    },
    {
      "@type": "FAQPage",
      "@id": `${PAGE_URL}#faq`,
      mainEntity: faqs.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
      inLanguage: "en-US",
    },
    {
      "@type": "Product",
      "@id": `${PAGE_URL}#premium-iptv-product`,
      name: "Premium IPTV for Firestick Subscription — USA",
      description:
        "IPTV subscription for American Firestick users — every NFL feed (ESPN, FOX, CBS, NBC, NFL Network), full US sports and entertainment coverage, 50,000+ live channels and a 100,000+ VOD library. Anti-freeze servers. Activation in about 5 minutes on WhatsApp, free 24-hour trial first.",
      brand: { "@type": "Brand", name: SITE_NAME },
      category: "IPTV subscription / Streaming service",
      audience: {
        "@type": "Audience",
        audienceType: "American streaming households",
        geographicArea: { "@type": "Country", name: "United States" },
      },
      offers: {
        "@type": "AggregateOffer",
        priceCurrency: "USD",
        lowPrice: "12",
        highPrice: "55",
        offerCount: channelPlans.length,
        availability: "https://schema.org/InStock",
        offers: channelPlans.map((p) => ({
          "@type": "Offer",
          name: `${p.name} IPTV USA Plan`,
          description: p.description,
          price: p.price.replace(/[^0-9]/g, ""),
          priceCurrency: "USD",
          availability: "https://schema.org/InStock",
          url: `${PAGE_URL}#premium-channels`,
          seller: { "@id": `${SITE_URL}/#organization` },
        })),
      },
    },
  ],
};

export default function Page() {
  const year = new Date().getFullYear();

  return (
    <main
      className="font-[family-name:var(--font-body)] bg-[#0B0E16] text-[#F5F6F8] antialiased"
    >
      {/* JSON-LD structured data — single graph with all schemas (FAQ, HowTo, Product, Org, etc.) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLdGraph).replace(/</g, "\\u003c"),
        }}
      />

      {/* Inline dark-mode CSS overrides */}
      <style dangerouslySetInnerHTML={{ __html: darkModeCss }} />

      {/* PWA + interactivity — runs after hydration so listeners attach properly */}
      <Script id="pwa-and-ui" strategy="afterInteractive">
        {pwaAndUiScript}
      </Script>

      {/* ============================ INSTALL BANNER ============================ */}
      <div
        id="sn-install-banner"
        className="bg-[#1A1F2E] border-b border-[#2A3142] px-5 py-2.5 text-white md:px-8"
      >
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-3 text-sm">
          <span className="flex items-center gap-2">
            <span aria-hidden>📱</span>
            <span className="hidden sm:inline">
              Install IPTV For Firestick USA as an app on Android, Windows, iOS or Mac — faster access, one tap from your home screen.
            </span>
            <span className="sm:hidden">Install as an app · Android · Windows</span>
          </span>
          <div className="flex shrink-0 items-center gap-2">
            <button
              data-install-trigger
              className="rounded-full bg-[#4F7DFF] px-3 py-1 text-xs font-medium text-white transition hover:bg-[#3D6BEE]"
            >
              Install
            </button>
            <button
              id="sn-install-dismiss"
              aria-label="Dismiss install banner"
              className="text-white/70 transition hover:text-white"
            >
              ✕
            </button>
          </div>
        </div>
      </div>

      {/* ============================ HEADER ============================ */}
      <header className="sticky top-0 z-50 border-b border-[#1F2433] bg-[#0B0E16]/85 backdrop-blur-xl">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 md:px-8">
          <Link href="/" className="flex items-center gap-2.5">
            <span className="relative grid h-9 w-9 place-items-center overflow-hidden rounded-xl bg-gradient-to-br from-[#1E3A8A] to-[#0F1B3D] text-white shadow-[0_4px_12px_-4px_rgba(30,58,138,0.5)]">
              <svg viewBox="0 0 36 36" className="h-full w-full" aria-hidden="true">
                <rect width="36" height="36" rx="8" fill="url(#headerGrad)" />
                <defs>
                  <linearGradient id="headerGrad" x1="0" y1="0" x2="1" y2="1">
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
              <span className="hidden lg:inline">IPTV For Firestick USA</span>
              <span className="inline lg:hidden">IPTV Firestick</span>
              <span className="text-[#DC2626]">.</span>
            </span>
          </Link>

          <nav className="hidden items-center gap-6 text-sm text-[#A8AEBC] md:flex">
            <a href="#premium-channels" className="font-semibold text-[#FF4D5C] transition hover:text-[#E63946]">Get IPTV $12</a>
            <a href="#nfl-iptv" className="transition hover:text-[#F5F6F8]">🏈 NFL</a>
            <a href="#espanol" className="transition hover:text-[#F5B643]">⚽ Español</a>
            <a href="#setup" className="transition hover:text-[#F5F6F8]">Setup</a>
            <a href="#cable-vs-iptv" className="transition hover:text-[#F5F6F8]">vs Cable</a>
            <a href="#us-channels" className="transition hover:text-[#F5F6F8]">US Channels</a>
            <a href="#apps" className="transition hover:text-[#F5F6F8]">Best Apps</a>
            <a href="#faq" className="transition hover:text-[#F5F6F8]">FAQ</a>
          </nav>

          <div className="flex items-center gap-2">
            {/* Install pill — visible on mobile, or on desktop when prompt is available */}
            <button
              data-install-trigger
              aria-label="Install app"
              className="sn-install-pill sn-icon-btn"
              title="Install app"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" y1="15" x2="12" y2="3" />
              </svg>
            </button>

            <a
              href="#setup"
              className="rounded-full bg-[#4F7DFF] px-4 py-2 text-sm font-medium text-white transition hover:bg-[#3D6BEE]"
            >
              Start Setup
            </a>
          </div>
        </div>
      </header>

      {/* ============================ HERO ============================ */}
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute -left-32 top-10 h-72 w-72 rounded-full bg-[#4F7DFF]/[0.08] blur-3xl" />
          <div className="absolute right-0 top-40 h-96 w-96 rounded-full bg-[#FF4D5C]/[0.08] blur-3xl" />
        </div>

        <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 px-5 py-16 md:grid-cols-12 md:gap-8 md:px-8 md:py-24 lg:py-32">
          <div className="md:col-span-7">
            <span className="inline-flex items-center gap-2 rounded-full border border-[#FF4D5C]/30 bg-[#FF4D5C]/[0.08] px-3 py-1 text-xs font-semibold tracking-wide text-[#FF4D5C]">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#FF4D5C]" />
              IPTV FOR FIRESTICK USA · SERVICE + GUIDES · NFL READY · 4K
            </span>

            <h1 className="mt-6 font-[family-name:var(--font-display)] text-4xl font-normal leading-[1.02] tracking-tight text-[#F5F6F8] md:text-6xl lg:text-7xl">
              Cancel cable.{" "}
              <span className="italic text-[#4F7DFF]">Save $1,764</span>{" "}
              <br className="hidden md:block" />a year. From{" "}
              <span className="text-[#FF4D5C]">$12</span>.
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-relaxed text-[#A8AEBC] md:text-xl">
              <strong className="text-[#F5F6F8]">An IPTV service + guides built for the Firestick</strong> —{" "}
              <strong className="text-[#F5F6F8]">50,000+ live channels in 4K UHD</strong>, every NFL feed
              (ESPN, FOX, CBS, NBC, NFL Network), full US sports and entertainment coverage, and a 100,000+ VOD library.
              <strong className="text-[#F5F6F8]"> Anti-freeze servers</strong> built for NFL Sundays.
              Activated on WhatsApp in about 5 minutes — and you test it{" "}
              <span className="font-medium text-[#F5F6F8]">free for 24 hours first, no card needed</span>.
            </p>

            {/* Killer trust strip — futuristic stats */}
            <div className="mt-6 grid grid-cols-2 gap-2 sm:grid-cols-4">
              {[
                { i: "⚡", t: "5-min setup" },
                { i: "🛡️", t: "Anti-freeze servers" },
                { i: "📺", t: "50,000+ channels" },
                { i: "💵", t: "From $12/mo" },
              ].map((x) => (
                <div
                  key={x.t}
                  className="flex items-center gap-2 rounded-xl border border-[#2A3142] bg-[#141824] px-3 py-2.5 text-[12px] font-medium text-[#F5F6F8]"
                >
                  <span className="text-base" aria-hidden>{x.i}</span>
                  <span>{x.t}</span>
                </div>
              ))}
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="#premium-channels"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-[#FF4D5C] px-7 py-4 text-sm font-semibold text-white shadow-[0_10px_30px_-10px_rgba(255,77,92,0.5)] transition hover:bg-[#E63946]"
              >
                Get IPTV from $12 — Activate in 5 mins
                <span aria-hidden className="transition group-hover:translate-x-0.5">→</span>
              </a>
              <a
                href={whatsappLink("Hi! I'd like the free 24-hour IPTV trial please.")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-[#25D366] bg-[#25D366]/5 px-7 py-4 text-sm font-semibold text-[#1FB855] transition hover:bg-[#25D366]/10"
              >
                <svg aria-hidden="true" viewBox="0 0 24 24" className="h-4 w-4 fill-current">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Free 24-hr Trial · No Card
              </a>
            </div>

            <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 text-[13px] text-[#A8AEBC]">
              <span>✅ Free 24-hr trial — no card</span>
              <span className="hidden h-1 w-1 rounded-full bg-[#2A3142] sm:block" />
              <span>✅ Money-back guarantee</span>
              <span className="hidden h-1 w-1 rounded-full bg-[#2A3142] sm:block" />
              <span>✅ No 24-month contract</span>
              <span className="hidden h-1 w-1 rounded-full bg-[#2A3142] sm:block" />
              <span>✅ Support EN · ES · FR</span>
            </div>
          </div>

          {/* Hero visual: NFL animated football + live scoreboard */}
          <div className="md:col-span-5">
            <div className="relative mx-auto max-w-sm">
              {/* Animated NFL football flying across — pure SVG */}
              <div className="pointer-events-none absolute -top-12 -left-8 z-20 h-44 w-44">
                <svg viewBox="0 0 200 200" className="h-full w-full nfl-ball-fly" aria-hidden="true">
                  <defs>
                    <radialGradient id="ballGrad" cx="35%" cy="35%" r="65%">
                      <stop offset="0%" stopColor="#A0522D" />
                      <stop offset="55%" stopColor="#8B4513" />
                      <stop offset="100%" stopColor="#5C2E0A" />
                    </radialGradient>
                  </defs>
                  <g className="nfl-ball-spin" style={{ transformOrigin: "100px 100px" }}>
                    <ellipse cx="100" cy="100" rx="50" ry="26" fill="url(#ballGrad)" />
                    <line x1="85" y1="100" x2="115" y2="100" stroke="#FAFAF7" strokeWidth="2.5" strokeLinecap="round" />
                    <line x1="90" y1="95" x2="90" y2="105" stroke="#FAFAF7" strokeWidth="1.8" strokeLinecap="round" />
                    <line x1="97" y1="94" x2="97" y2="106" stroke="#FAFAF7" strokeWidth="1.8" strokeLinecap="round" />
                    <line x1="104" y1="94" x2="104" y2="106" stroke="#FAFAF7" strokeWidth="1.8" strokeLinecap="round" />
                    <line x1="111" y1="95" x2="111" y2="105" stroke="#FAFAF7" strokeWidth="1.8" strokeLinecap="round" />
                    <ellipse cx="58" cy="100" rx="2.5" ry="11" fill="#FAFAF7" opacity="0.85" />
                    <ellipse cx="142" cy="100" rx="2.5" ry="11" fill="#FAFAF7" opacity="0.85" />
                    <ellipse cx="85" cy="90" rx="14" ry="4.5" fill="#FAFAF7" opacity="0.18" />
                  </g>
                </svg>
              </div>

              {/* Glow halo */}
              <div className="pointer-events-none absolute -inset-8 -z-10 rounded-[40px] bg-gradient-to-br from-[#4F7DFF]/20 via-transparent to-[#FF4D5C]/15 blur-2xl" />

              <div className="relative rounded-3xl border border-[#2A3142] bg-[#141824] p-3 shadow-[0_30px_80px_-30px_rgba(79,125,255,0.5)]">
                <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-gradient-to-br from-[#0B1530] via-[#1A2F5C] to-[#0B1530] p-5 text-white">
                  {/* Stadium light beams */}
                  <div className="pointer-events-none absolute inset-0 overflow-hidden">
                    <div className="stadium-beam-1 absolute -top-10 left-1/4 h-32 w-2 rotate-12 bg-gradient-to-b from-white/25 to-transparent blur-sm" />
                    <div className="stadium-beam-2 absolute -top-10 right-1/4 h-32 w-2 -rotate-12 bg-gradient-to-b from-white/25 to-transparent blur-sm" />
                  </div>

                  <div className="relative flex items-center justify-between text-[10px] uppercase tracking-wider text-white/70">
                    <span className="flex items-center gap-1.5">
                      <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#FF4D5C]" />
                      LIVE · Sunday 1PM
                    </span>
                    <span>4K UHD</span>
                  </div>

                  {/* NFL scoreboard */}
                  <div className="relative mt-3 rounded-lg border border-white/10 bg-black/30 p-2.5 backdrop-blur">
                    <div className="flex items-center justify-between text-[11px]">
                      <div className="flex items-center gap-2">
                        <div className="grid h-6 w-6 place-items-center rounded bg-[#FF4D5C] text-[9px] font-bold">KC</div>
                        <span className="font-semibold">Chiefs</span>
                      </div>
                      <span className="font-[family-name:var(--font-display)] text-2xl font-bold tabular-nums score-tick">24</span>
                    </div>
                    <div className="mt-1.5 flex items-center justify-between text-[11px]">
                      <div className="flex items-center gap-2">
                        <div className="grid h-6 w-6 place-items-center rounded bg-[#4F7DFF] text-[9px] font-bold">BUF</div>
                        <span className="font-semibold">Bills</span>
                      </div>
                      <span className="font-[family-name:var(--font-display)] text-2xl font-bold tabular-nums">21</span>
                    </div>
                    <div className="mt-1 text-[9px] text-white/50">Q4 · 2:34 remaining</div>
                  </div>

                  <div className="relative mt-3 grid grid-cols-3 gap-1.5">
                    {["ESPN", "NFL Net", "FOX", "CBS", "NBC", "ABC"].map((c) => (
                      <div
                        key={c}
                        className="rounded-md border border-white/10 bg-white/5 px-2 py-1.5 text-center text-[9px] font-medium"
                      >
                        {c}
                      </div>
                    ))}
                  </div>

                  <div className="relative mt-3 flex items-center justify-between text-[9px] text-white/60">
                    <span className="flex items-center gap-1">
                      <span className="h-1 w-1 rounded-full bg-[#22c55e]" />
                      connected
                    </span>
                    <span>0% buffering</span>
                  </div>
                </div>
              </div>

              {/* Setup pill */}
              <div className="absolute -bottom-4 -right-4 rounded-xl border border-[#2A3142] bg-[#1A1F2E] px-3 py-2 text-xs font-medium text-[#F5F6F8] shadow-lg">
                ⚡ Setup in &lt; 7 min
              </div>

              {/* LIVE badge floating */}
              <div className="absolute -top-3 -right-3 float-bubble rounded-full border border-[#FF4D5C]/40 bg-[#FF4D5C]/15 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-wider text-[#FF4D5C] backdrop-blur">
                🏈 LIVE
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================ TRUST STRIP ============================ */}
      <section className="border-y border-[#1F2433] bg-[#0E1119]">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-8 px-5 py-10 md:grid-cols-4 md:px-8">
          {trustStats.map((s) => (
            <div key={s.label}>
              <div className="font-[family-name:var(--font-display)] text-3xl font-normal text-[#F5F6F8]">
                {s.value}
              </div>
              <div className="mt-1 text-sm text-[#A8AEBC]">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ============================ FIRESTICK SHOWCASE ============================ */}
      <section className="relative overflow-hidden bg-[#0E1119] py-16 md:py-24">
        {/* Ambient glow background */}
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute left-1/2 top-1/2 h-[80%] w-[80%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-radial from-[#4F7DFF]/[0.10] via-[#FF4D5C]/[0.05] to-transparent blur-3xl" />
        </div>

        <div className="mx-auto max-w-6xl px-5 md:px-8">
          <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-12">
            {/* LEFT: Copy + features */}
            <div className="md:col-span-6 md:order-1 order-2">
              <span className="inline-flex items-center gap-2 rounded-full border border-[#FF4D5C]/30 bg-[#FF4D5C]/[0.08] px-3 py-1 text-xs font-semibold uppercase tracking-wider text-[#FF4D5C]">
                🔥 Works on every Fire TV Stick
              </span>

              <h2 className="mt-4 font-[family-name:var(--font-display)] text-3xl font-normal leading-[1.05] text-[#F5F6F8] md:text-5xl">
                Plug it in.{" "}
                <span className="italic text-[#4F7DFF]">Stream everything.</span>
              </h2>

              <p className="mt-5 text-lg leading-relaxed text-[#A8AEBC]">
                Already own a Fire TV Stick? You&rsquo;re ready. Our IPTV works flawlessly on{" "}
                <strong className="text-[#F5F6F8]">every Amazon Firestick model</strong> — from the original
                Fire TV Stick to the latest 4K Max with Wi-Fi 6E. Just install in 5 minutes,
                sign in once, and watch every NFL game in 4K.
              </p>

              {/* Compatibility list */}
              <div className="mt-8 space-y-3">
                {[
                  { name: "Fire TV Stick (basic / lite)", spec: "1080p HD, perfect for cable replacement", icon: "📺" },
                  { name: "Fire TV Stick 4K", spec: "4K UHD + HDR for premium NFL games", icon: "🎬" },
                  { name: "Fire TV Stick 4K Max (2nd gen)", spec: "Wi-Fi 6E + 16GB — zero buffering", icon: "⚡" },
                  { name: "Fire TV Cube (3rd gen)", spec: "Hands-free Alexa + full Ethernet", icon: "🔊" },
                ].map((d) => (
                  <div
                    key={d.name}
                    className="flex items-center gap-4 rounded-xl border border-[#2A3142] bg-[#141824] p-4 transition hover:border-[#4F7DFF]/50 hover:bg-[#1A1F2E]"
                  >
                    <span className="text-2xl">{d.icon}</span>
                    <div className="flex-1">
                      <div className="text-sm font-semibold text-[#F5F6F8]">{d.name}</div>
                      <div className="mt-0.5 text-xs text-[#A8AEBC]">{d.spec}</div>
                    </div>
                    <span className="rounded-full bg-[#22c55e]/10 px-2 py-1 text-[10px] font-semibold uppercase text-[#4ADE80]">
                      ✓ Works
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href="#setup"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-[#4F7DFF] px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-[#4F7DFF]/30 transition hover:scale-[1.03] hover:bg-[#3D6BEE] hover:shadow-xl hover:shadow-[#4F7DFF]/40"
                >
                  See setup guide →
                </a>
                <a
                  href="#premium-channels"
                  className="inline-flex items-center justify-center rounded-full border border-[#2A3142] bg-[#1A1F2E] px-7 py-3.5 text-sm font-semibold text-[#F5F6F8] transition hover:border-[#4F7DFF]"
                >
                  See plans from $12
                </a>
              </div>
            </div>

            {/* RIGHT: Firestick image with floating badges */}
            <div className="md:col-span-6 md:order-2 order-1">
              <div className="relative mx-auto max-w-md">
                {/* Glowing aura behind image */}
                <div className="pointer-events-none absolute inset-0 -z-10">
                  <div className="absolute left-1/2 top-1/2 h-[110%] w-[110%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-br from-[#4F7DFF]/30 via-[#FF4D5C]/20 to-transparent blur-3xl firestick-glow" />
                </div>

                {/* Main image */}
                <div className="firestick-float relative">
                  <img
                    src="/firestick-remote.webp"
                    alt="Amazon Fire TV Stick with voice remote — works with our IPTV"
                    width="500"
                    height="588"
                    loading="lazy"
                    className="relative z-10 mx-auto h-auto w-full max-w-sm drop-shadow-[0_30px_50px_rgba(0,0,0,0.5)]"
                  />
                </div>

                {/* Floating badge: 5-min setup */}
                <div className="float-bubble absolute -left-4 top-12 rounded-2xl border border-[#2A3142] bg-[#141824]/90 p-3 shadow-xl backdrop-blur-sm md:-left-8">
                  <div className="flex items-center gap-2.5">
                    <div className="grid h-9 w-9 place-items-center rounded-full bg-gradient-to-br from-[#4F7DFF] to-[#3D6BEE] text-base">
                      ⚡
                    </div>
                    <div>
                      <div className="text-[11px] font-bold uppercase tracking-wider text-[#F5F6F8]">5-min setup</div>
                      <div className="text-[10px] text-[#A8AEBC]">From plug-in to NFL</div>
                    </div>
                  </div>
                </div>

                {/* Floating badge: 4K UHD */}
                <div
                  className="float-bubble absolute -right-2 top-1/3 rounded-2xl border border-[#2A3142] bg-[#141824]/90 p-3 shadow-xl backdrop-blur-sm md:-right-6"
                  style={{ animationDelay: "0.5s" }}
                >
                  <div className="flex items-center gap-2.5">
                    <div className="grid h-9 w-9 place-items-center rounded-full bg-gradient-to-br from-[#FF4D5C] to-[#E63946] text-base">
                      🎬
                    </div>
                    <div>
                      <div className="text-[11px] font-bold uppercase tracking-wider text-[#F5F6F8]">4K UHD</div>
                      <div className="text-[10px] text-[#A8AEBC]">Cinema-grade picture</div>
                    </div>
                  </div>
                </div>

                {/* Floating badge: Anti-Freeze */}
                <div
                  className="float-bubble absolute -left-2 bottom-12 rounded-2xl border border-[#2A3142] bg-[#141824]/90 p-3 shadow-xl backdrop-blur-sm md:-left-6"
                  style={{ animationDelay: "1s" }}
                >
                  <div className="flex items-center gap-2.5">
                    <div className="grid h-9 w-9 place-items-center rounded-full bg-gradient-to-br from-[#22c55e] to-[#16a34a] text-base">
                      🛡️
                    </div>
                    <div>
                      <div className="text-[11px] font-bold uppercase tracking-wider text-[#F5F6F8]">Anti-freeze servers</div>
                      <div className="text-[10px] text-[#A8AEBC]">Zero buffering</div>
                    </div>
                  </div>
                </div>

                {/* Floating badge: NFL ready */}
                <div
                  className="float-bubble absolute -right-2 bottom-20 rounded-2xl border border-[#FF4D5C]/40 bg-gradient-to-br from-[#1A1F2E] to-[#141824] p-3 shadow-xl backdrop-blur-sm md:-right-8"
                  style={{ animationDelay: "1.5s" }}
                >
                  <div className="flex items-center gap-2.5">
                    <div className="grid h-9 w-9 place-items-center rounded-full bg-gradient-to-br from-[#F5B643] to-[#E89B2D] text-base">
                      🏈
                    </div>
                    <div>
                      <div className="text-[11px] font-bold uppercase tracking-wider text-[#F5F6F8]">NFL Sunday</div>
                      <div className="text-[10px] text-[#A8AEBC]">All 272 games</div>
                    </div>
                  </div>
                </div>

                {/* Pulse rings around the firestick */}
                <div className="pointer-events-none absolute left-1/2 top-1/2 -z-10 -translate-x-1/2 -translate-y-1/2">
                  <div className="firestick-ring h-72 w-72 rounded-full border border-[#4F7DFF]/20" />
                </div>
              </div>
            </div>
          </div>

          {/* Sport icons row */}
          <div className="mt-16 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {[
              { i: "🏈", t: "NFL", d: "Every Sunday" },
              { i: "🏀", t: "NBA", d: "League Pass" },
              { i: "⚾", t: "MLB", d: "All teams" },
              { i: "🏒", t: "NHL", d: "Stanley Cup" },
            ].map((s) => (
              <div
                key={s.t}
                className="rounded-2xl border border-[#2A3142] bg-[#141824] p-5 text-center transition hover:scale-[1.04] hover:border-[#4F7DFF]/50 hover:bg-[#1A1F2E]"
              >
                <div className="text-3xl">{s.i}</div>
                <div className="mt-2 font-[family-name:var(--font-display)] text-xl font-medium text-[#F5F6F8]">{s.t}</div>
                <div className="mt-0.5 text-xs text-[#A8AEBC]">{s.d}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
            {/* ============================ WHY SWITCH NOW — CONVERSION ENGINE ============================ */}
      <section className="bg-gradient-to-br from-[#0B0E16] via-[#1A1F2E] to-[#0B0E16] py-20 text-white md:py-24 border-y border-[#1F2433]">
        <div className="mx-auto max-w-6xl px-5 md:px-8">
          <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-12">
            <div className="md:col-span-7">
              <span className="inline-flex items-center gap-2 rounded-full border border-[#FF4D5C]/40 bg-[#FF4D5C]/[0.12] px-3 py-1 text-xs font-semibold uppercase tracking-wider text-white">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#FF4D5C]" />
                The $147/month con job
              </span>
              <h2 className="mt-4 font-[family-name:var(--font-display)] text-3xl font-normal leading-[1.05] md:text-5xl lg:text-[3.4rem]">
                Cable companies have been overcharging American households{" "}
                <span className="italic text-[#fca5a5]">for decades</span>.
                <br />
                It&rsquo;s time to stop.
              </h2>
              <p className="mt-5 max-w-2xl text-lg leading-relaxed text-white/80">
                The average cable TV + Sports household pays{" "}
                <strong className="text-white">$147 a month</strong> — that&rsquo;s{" "}
                <strong className="text-white">$1,764 a year</strong>, locked into{" "}
                <strong className="text-white">24-month contracts</strong> with brutal
                early-exit fees. Millions of US households have already cut the cord.
                You can join them in the next ten minutes.
              </p>
              <p className="mt-4 max-w-2xl text-base leading-relaxed text-white/70">
                A premium IPTV subscription gives you{" "}
                <strong className="text-white">every NFL feed</strong> — ESPN, FOX, CBS,
                NBC, NFL Network — the full range of US entertainment channels and
                a 100,000+ VOD library, for{" "}
                <strong className="text-white">less than 9% of a typical cable bill</strong>. No engineer
                visit. No equipment rental. No 24-month commitment. Cancel any time.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href="#premium-channels"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-[#FF4D5C] px-7 py-4 text-sm font-semibold text-white shadow-[0_10px_30px_-10px_rgba(255,77,92,0.5)] transition hover:bg-[#E63946]"
                >
                  See plans from $12 →
                </a>
                <a
                  href={whatsappLink("Hi! I'd like to start the free 24-hour IPTV trial. No card needed?")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-[#25D366] px-7 py-4 text-sm font-semibold text-white transition hover:bg-[#1FB855]"
                >
                  💬 Start free 24-hr trial
                </a>
              </div>
            </div>

            {/* Right: the honest deal, spelled out */}
            <div className="md:col-span-5">
              <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-7 backdrop-blur">
                <div className="flex items-center gap-3 text-xs font-medium uppercase tracking-wider text-white/60">
                  <span className="h-2 w-2 animate-pulse rounded-full bg-[#FF4D5C]" />
                  The deal, in plain English
                </div>
                <div className="mt-4 font-[family-name:var(--font-display)] text-2xl font-normal leading-tight text-white md:text-3xl">
                  Test it free on a Sunday, during the 1pm kickoff. If the stream
                  holds clean through the full 60 minutes,
                  <span className="text-[#fca5a5]">
                    {" "}lock in $55 for the year — about $4.58 a month.
                  </span>{" "}
                  If it doesn&rsquo;t, walk away. No card, no commitment.
                </div>
                <div className="mt-5 flex flex-wrap items-center gap-x-4 gap-y-2 border-t border-white/10 pt-4 text-xs text-white/60">
                  <span>✅ 24-hr free trial</span>
                  <span>✅ Money-back guarantee</span>
                  <span>✅ Support EN · ES · FR</span>
                </div>
              </div>

              {/* Comparative cost mini-card */}
              <div className="mt-4 grid grid-cols-2 gap-3">
                <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-5">
                  <div className="text-xs uppercase tracking-wider text-white/50">cable TV (typical)</div>
                  <div className="mt-2 font-[family-name:var(--font-display)] text-3xl font-normal text-white/60 line-through">
                    $147<span className="text-base">/mo</span>
                  </div>
                  <div className="mt-1 text-[11px] text-white/40">+ Broadcast TV Fee $14.13/mo</div>
                </div>
                <div className="rounded-2xl border border-[#25D366]/40 bg-[#25D366]/10 p-5">
                  <div className="text-xs uppercase tracking-wider text-[#86efac]">IPTV For Firestick USA</div>
                  <div className="mt-2 font-[family-name:var(--font-display)] text-3xl font-normal text-white">
                    $12<span className="text-base">/mo</span>
                  </div>
                  <div className="mt-1 text-[11px] text-[#86efac]">Or $55/yr ≈ $4.58/mo. No contract.</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================ WHAT IS IPTV ============================ */}
      <section className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <span className="text-xs font-medium uppercase tracking-[0.18em] text-[#4F7DFF]">
              The basics
            </span>
            <h2 className="mt-3 font-[family-name:var(--font-display)] text-3xl font-normal leading-tight md:text-5xl text-[#F5F6F8]">
              What is IPTV, and why pair it with a Firestick?
            </h2>
          </div>
          <div className="space-y-5 text-[17px] leading-relaxed text-[#A8AEBC] md:col-span-7">
            <p>
              <strong className="text-[#F5F6F8]">IPTV</strong> stands for
              Internet Protocol Television — the same technology that powers
              Comcast X1, Spectrum TV, DirecTV Stream, YouTube TV, Hulu Live and many free
              services like Pluto TV and Tubi. Instead of broadcasting channels through a
              satellite dish or coax cable, IPTV streams them over your home broadband.
            </p>
            <p>
              The <strong className="text-[#F5F6F8]">Amazon Firestick</strong>{" "}
              is the most popular streaming device in the USA because it&rsquo;s
              affordable, sold on Amazon.com, Walmart, Best Buy and Target, and
              it runs Fire OS — a flexible Android-based system that supports
              every major IPTV player, including IPTV Smarters Pro, TiviMate
              and OTT Navigator.
            </p>
            <p>
              Together, a Firestick and a quality IPTV subscription replace the
              traditional cable box: every NFL game, NBA League Pass and NHL Center Ice,
              March Madness, college football, F1, NASCAR, UFC,
              boxing PPVs, Peacock, Hulu, Paramount+, HBO Max, Showtime
              — all on one small HDMI dongle, for less than the price of a single
              streaming subscription.
            </p>
          </div>
        </div>
      </section>

      {/* ============================ SETUP STEPS ============================ */}
      <section id="setup" className="bg-[#0E1119] py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-5 md:px-8">
          <div className="max-w-2xl">
            <span className="text-xs font-medium uppercase tracking-[0.18em] text-[#4F7DFF]">
              How to install
            </span>
            <h2 className="mt-3 font-[family-name:var(--font-display)] text-3xl font-normal leading-tight md:text-5xl text-[#F5F6F8]">
              Set up IPTV on your Firestick in three steps.
            </h2>
            <p className="mt-4 text-lg text-[#A8AEBC]">
              No computer, no cables, no terminal commands. The whole process
              uses only your Firestick remote and takes most American users less
              than ten minutes.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
            {setupSteps.map((step) => (
              <article
                key={step.n}
                className="group relative rounded-2xl border border-[#2A3142] bg-[#141824] p-7 transition hover:border-[#4F7DFF]/50 hover:bg-[#1A1F2E]"
              >
                <div className="flex items-center justify-between">
                  <span className="font-[family-name:var(--font-display)] text-5xl font-normal text-[#4F7DFF]/90">
                    {step.n}
                  </span>
                  <span className="text-2xl" aria-hidden>
                    {step.icon}
                  </span>
                </div>
                <h3 className="mt-6 font-[family-name:var(--font-display)] text-xl font-medium text-[#F5F6F8]">
                  {step.title}
                </h3>
                <p className="mt-3 text-[15px] leading-relaxed text-[#A8AEBC]">
                  {step.body}
                </p>
              </article>
            ))}
          </div>

          <div className="mt-10 rounded-2xl border border-[#2A3142] bg-[#141824] p-6 md:p-8">
            <div className="flex items-start gap-4">
              <span className="text-2xl" aria-hidden>💡</span>
              <div>
                <h4 className="font-[family-name:var(--font-display)] text-lg font-medium">
                  About Downloader codes
                </h4>
                <p className="mt-2 text-[15px] leading-relaxed text-[#A8AEBC]">
                  Many guides circulate &ldquo;Downloader codes&rdquo; — short numeric
                  shortcuts that point to an APK URL. We recommend always
                  typing the full URL of the official source for the player
                  you&rsquo;re installing. It takes thirty more seconds and avoids
                  ever installing an unverified file by accident.
                </p>
              </div>
            </div>
          </div>

          {/* ============================ DOWNLOADER CODES DIRECTORY ============================ */}
          <section id="downloader-codes" className="mt-10 rounded-3xl border border-[#2A3142] bg-[#141824] p-6 md:p-8">
            <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
              <div>
                <span className="text-xs font-medium uppercase tracking-[0.18em] text-[#4F7DFF]">
                  Firestick codes
                </span>
                <h3 className="mt-2 font-[family-name:var(--font-display)] text-2xl font-medium text-[#F5F6F8] md:text-3xl">
                  Popular Firestick Downloader Codes
                </h3>
                <p className="mt-3 max-w-2xl text-[15px] leading-relaxed text-[#A8AEBC]">
                  Many American Firestick users search for downloader code firestick,
                  IPTV Smarters code, TiviMate downloader code, XCIPTV code, and app
                  install codes. This quick directory helps UK users find common app
                  installer shortcuts faster.
                </p>
              </div>

              <a
                href="#faq"
                className="inline-flex items-center justify-center rounded-full border border-[#2A3142] bg-[#1A1F2E] px-4 py-2 text-sm font-medium text-[#F5F6F8] transition hover:border-[#4F7DFF]"
              >
                Read FAQ
              </a>
            </div>

            <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {downloaderCodes.map((item) => (
                <article
                  key={`${item.name}-${item.code}`}
                  className={`rounded-2xl border p-5 transition hover:shadow-lg ${
                    item.highlight
                      ? "border-[#4F7DFF]/40 bg-[#4F7DFF]/[0.08]"
                      : "border-[#2A3142] bg-[#1A1F2E]"
                  }`}
                >
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <p className="text-xs font-medium uppercase tracking-wider text-[#6E7585]">
                        {item.category}
                      </p>
                      <h4 className="mt-2 font-[family-name:var(--font-display)] text-lg font-medium text-[#F5F6F8]">
                        {item.name}
                      </h4>
                    </div>
                    {item.highlight && (
                      <span className="rounded-full bg-[#FF4D5C] px-2 py-1 text-[10px] font-medium uppercase text-white">
                        Popular
                      </span>
                    )}
                  </div>

                  <div className="mt-5 rounded-xl border border-[#2A3142] bg-[#0E1119] px-4 py-3 text-center">
                    <p className="text-xs uppercase tracking-wider text-[#6E7585]">
                      Downloader Code
                    </p>
                    <p className="mt-1 font-[family-name:var(--font-display)] text-3xl font-semibold tracking-wide text-[#4F7DFF]">
                      {item.code}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </section>
        </div>
      </section>

      {/* ============================ PREMIUM CHANNELS / PURCHASE ============================ */}
      <section id="premium-channels" className="relative overflow-hidden bg-[#0E1119] py-20 md:py-28">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute -right-24 top-20 h-80 w-80 rounded-full bg-[#4F7DFF]/[0.08] blur-3xl" />
          <div className="absolute -left-24 bottom-10 h-80 w-80 rounded-full bg-[#FF4D5C]/[0.08] blur-3xl" />
        </div>

        <div className="mx-auto max-w-6xl px-5 md:px-8">
          {/* Section heading */}
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-[#2A3142] bg-[#141824] px-3 py-1 text-xs font-medium text-[#A8AEBC]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#FF4D5C]" />
              Premium IPTV subscription USA · Activation by WhatsApp
            </span>

            <h2 className="mt-5 font-[family-name:var(--font-display)] text-3xl font-normal leading-tight md:text-5xl text-[#F5F6F8]">
              Get Premium Live TV{" "}
              <span className="italic text-[#4F7DFF]">Channels</span> on Firestick.
            </h2>

            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-[#A8AEBC]">
              Need a premium IPTV subscription? Want stable live TV channels on
              Firestick — ESPN, FOX Sports, NFL, NBA League Pass,
              HBO Max, NBC, ABC, CBS, FOX and more? Choose a package below
              and contact us on WhatsApp for activation.{" "}
              <span className="text-[#F5F6F8]">Fast US setup support included.</span>
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-[#A8AEBC]">
              <span className="flex items-center gap-2">
                <span aria-hidden>🔒</span>
                <span>Secure activation</span>
              </span>
              <span className="hidden h-1 w-1 rounded-full bg-[#2A3142] sm:block" />
              <span className="flex items-center gap-2">
                <span aria-hidden>⚡</span>
                <span>Activated in minutes</span>
              </span>
              <span className="hidden h-1 w-1 rounded-full bg-[#2A3142] sm:block" />
              <span className="flex items-center gap-2">
                <span aria-hidden>🇺🇸</span>
                <span>US customer support</span>
              </span>
            </div>
          </div>

          {/* Pricing cards */}
          <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {channelPlans.map((plan, i) => {
              const isFeatured = i === 2; // 6 Months — Best Value
              const isBestDeal = i === 3; // 1 Year — Best Deal
              return (
                <article
                  key={plan.name}
                  className={`group price-card relative flex flex-col rounded-2xl border p-6 transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl ${
                    isFeatured
                      ? "price-card-featured border-[#4F7DFF] bg-gradient-to-b from-[#1A1F2E] to-[#141824] ring-2 ring-[#4F7DFF]/40 shadow-[0_20px_60px_-20px_rgba(79,125,255,0.4)]"
                      : isBestDeal
                      ? "price-card-deal border-[#F5B643] bg-gradient-to-b from-[#1F1A14] to-[#141824] ring-1 ring-[#F5B643]/30"
                      : "border-[#2A3142] bg-[#141824] hover:border-[#4F7DFF]/50"
                  }`}
                  style={{ animationDelay: `${i * 0.1}s` }}
                >
                  {/* Featured ribbon — only on 6 months */}
                  {isFeatured && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-[#FF4D5C] via-[#FF6B7A] to-[#FF4D5C] bg-[length:200%_auto] px-4 py-1 text-[10px] font-bold uppercase tracking-wider text-white shadow-lg shimmer-bg">
                      ★ RECOMMENDED
                    </div>
                  )}
                  {isBestDeal && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-[#F5B643] via-[#FFD175] to-[#F5B643] bg-[length:200%_auto] px-4 py-1 text-[10px] font-bold uppercase tracking-wider text-[#0B0E16] shadow-lg shimmer-bg">
                      🏆 BEST DEAL
                    </div>
                  )}

                  <div className="flex items-center justify-between">
                    <span
                      className={`rounded-full px-2.5 py-1 text-[10px] font-medium uppercase tracking-wider ${
                        isFeatured
                          ? "bg-[#FF4D5C] text-white"
                          : isBestDeal
                          ? "bg-[#F5B643] text-[#0B0E16]"
                          : "border border-[#2A3142] bg-[#1A1F2E] text-[#A8AEBC]"
                      }`}
                    >
                      {plan.badge}
                    </span>
                    <span className="text-xs font-medium uppercase tracking-wider text-[#6E7585]">
                      {plan.monthlyEquivalent}
                    </span>
                  </div>

                  <h3 className="mt-5 font-[family-name:var(--font-display)] text-2xl font-medium text-[#F5F6F8]">
                    {plan.name}
                  </h3>

                  {/* PRICE BLOCK — the real price, nothing else */}
                  <div className="mt-3">
                    <div className="flex items-baseline gap-1.5">
                      <span className={`font-[family-name:var(--font-display)] text-5xl font-bold price-float ${
                        isFeatured ? "text-[#4F7DFF]" : isBestDeal ? "text-[#F5B643]" : "text-[#F5F6F8]"
                      }`}>
                        {plan.price}
                      </span>
                      <span className="text-sm text-[#A8AEBC]">USD</span>
                    </div>
                  </div>

                  {/* Savings highlight */}
                  <div className={`mt-3 inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-[11px] font-semibold ${
                    isBestDeal
                      ? "bg-[#F5B643]/15 text-[#F5B643]"
                      : "bg-[#22c55e]/10 text-[#4ADE80]"
                  }`}>
                    <span aria-hidden>💰</span>
                    {plan.saveText}
                  </div>

                  <p className="mt-4 flex-1 text-[14px] leading-relaxed text-[#A8AEBC]">
                    {plan.description}
                  </p>

                  <ul className="mt-5 space-y-2 text-[13px] text-[#A8AEBC]">
                    <li className="flex items-start gap-2">
                      <span className="mt-0.5 text-[#4F7DFF]" aria-hidden>✓</span>
                      <span>Premium US live TV channels</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-0.5 text-[#4F7DFF]" aria-hidden>✓</span>
                      <span>Every NFL feed — ESPN, FOX, CBS, NBC, NFL Network</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-0.5 text-[#4F7DFF]" aria-hidden>✓</span>
                      <span>Free 24-hr trial before you pay</span>
                    </li>
                  </ul>

                  <a
                    href={whatsappLink(plan.message)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`mt-7 inline-flex w-full items-center justify-center gap-2 rounded-full px-4 py-3.5 text-sm font-semibold text-white transition-all ${
                      isFeatured || isBestDeal
                        ? "bg-gradient-to-r from-[#25D366] to-[#1FB855] shadow-lg shadow-[#25D366]/30 hover:shadow-xl hover:shadow-[#25D366]/40 hover:scale-[1.03]"
                        : "bg-[#25D366] hover:bg-[#1FB855] hover:scale-[1.02]"
                    }`}
                  >
                    <svg
                      aria-hidden="true"
                      viewBox="0 0 24 24"
                      className="h-4 w-4 fill-current"
                    >
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                    {isBestDeal ? "Lock In $55/year ↓" : isFeatured ? "Get Best Value →" : "Get This Plan"}
                  </a>

                  {/* Trust line under button */}
                  <div className="mt-3 flex items-center justify-center gap-1.5 text-[10px] text-[#6E7585]">
                    <span>🔒</span>
                    <span>Activated in 5 minutes</span>
                  </div>
                </article>
              );
            })}
          </div>

          {/* Trust indicators row below cards — verifiable promises only */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-xs text-[#A8AEBC]">
            <span className="flex items-center gap-1.5">
              <span>⏱️</span>
              <span>Free 24-hr trial — no card needed</span>
            </span>
            <span className="hidden h-1 w-1 rounded-full bg-[#2A3142] sm:block" />
            <span className="flex items-center gap-1.5">
              <span className="text-[#22c55e]">●</span>
              <span>Money-back guarantee</span>
            </span>
            <span className="hidden h-1 w-1 rounded-full bg-[#2A3142] sm:block" />
            <span className="flex items-center gap-1.5">
              <span>💬</span>
              <span>Support in English · Español · Français</span>
            </span>
          </div>

          {/* Why our subscription block */}
          <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3">
            {[
              {
                icon: "📺",
                title: "Thousands of US live channels",
                body:
                  "Premium IPTV channels including ESPN, FOX Sports, NFL Network, NBA TV, HBO Max, Showtime, NBC, ABC, CBS, FOX, plus 20,000+ international channels.",
              },
              {
                icon: "🎬",
                title: "Movies & VOD library",
                body:
                  "Massive on-demand library updated daily — latest US and Hollywood films, complete TV box sets, perfect for American households who want more than just live TV.",
              },
              {
                icon: "💬",
                title: "Real WhatsApp support",
                body:
                  "Real human IPTV WhatsApp support during setup and after activation — replies in minutes, in plain English, premium IPTV subscription USA.",
              },
            ].map((b) => (
              <div
                key={b.title}
                className="rounded-2xl border border-[#2A3142] bg-[#141824] p-6"
              >
                <span className="text-2xl" aria-hidden>{b.icon}</span>
                <h4 className="mt-3 font-[family-name:var(--font-display)] text-lg font-medium text-[#F5F6F8]">
                  {b.title}
                </h4>
                <p className="mt-2 text-[14px] leading-relaxed text-[#A8AEBC]">
                  {b.body}
                </p>
              </div>
            ))}
          </div>

          {/* Chatbot-style help box */}
          <div className="mt-12 overflow-hidden rounded-3xl border border-[#2A3142] bg-[#141824] shadow-2xl">
            <div className="grid grid-cols-1 md:grid-cols-12">
              {/* Left: chat preview */}
              <div className="border-b border-[#2A3142] bg-gradient-to-br from-[#0B0E16] via-[#1A1F2E] to-[#0B0E16] p-6 text-white md:col-span-5 md:border-b-0 md:border-r md:p-8">
                <div className="flex items-center gap-3">
                  <span className="grid h-10 w-10 place-items-center rounded-full bg-[#25D366] text-white">
                    <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5 fill-current">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                  </span>
                  <div>
                    <p className="text-sm font-medium">WhatsApp support</p>
                    <p className="text-xs text-white/60">English · Español · Français</p>
                  </div>
                </div>

                <p className="mt-6 text-[14px] leading-relaxed text-white/75">
                  Every order and every question goes through one place: a WhatsApp
                  conversation with our support team. Tell us what you watch — NFL,
                  movies, news, canales en español — and we&rsquo;ll point you to the
                  right plan, or start your free 24-hour trial first.
                </p>
                <ul className="mt-5 space-y-2 text-[13px] text-white/70">
                  <li>💬 One conversation from trial to activation</li>
                  <li>⏱️ Free 24-hour trial before any payment</li>
                  <li>🔧 Setup help included, step by step</li>
                </ul>
              </div>

              {/* Right: copy + CTA */}
              <div className="p-6 md:col-span-7 md:p-10">
                <span className="text-xs font-medium uppercase tracking-[0.18em] text-[#4F7DFF]">
                  Need help choosing?
                </span>
                <h3 className="mt-3 font-[family-name:var(--font-display)] text-2xl font-medium leading-tight text-[#F5F6F8] md:text-3xl">
                  Not sure which IPTV package is right for you?
                </h3>
                <p className="mt-4 text-[15px] leading-relaxed text-[#A8AEBC]">
                  Message us on WhatsApp and we&rsquo;ll help you choose the best
                  premium IPTV channel plan for your Firestick. Whether you&rsquo;re
                  shopping for an IPTV channel package, comparing IPTV USA prices, or
                  ready to buy your first IPTV USA subscription — we&rsquo;ll guide you
                  in plain English.
                </p>

                <ul className="mt-5 grid grid-cols-1 gap-2 text-[14px] text-[#A8AEBC] sm:grid-cols-2">
                  <li className="flex items-start gap-2">
                    <span className="mt-0.5 text-[#4F7DFF]" aria-hidden>✓</span>
                    <span>Honest advice on which plan fits</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-0.5 text-[#4F7DFF]" aria-hidden>✓</span>
                    <span>Free 24-hr trial before you decide</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-0.5 text-[#4F7DFF]" aria-hidden>✓</span>
                    <span>Activation in about 5 minutes</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-0.5 text-[#4F7DFF]" aria-hidden>✓</span>
                    <span>English · Español · Français</span>
                  </li>
                </ul>

                <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                  <a
                    href={whatsappLink("Hello, I have a question about IPTV channel packages.")}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-[#25D366] px-6 py-3 text-sm font-medium text-white transition hover:bg-[#1FB855]"
                  >
                    <svg aria-hidden="true" viewBox="0 0 24 24" className="h-4 w-4 fill-current">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                    Ask on WhatsApp
                  </a>
                  <a
                    href="#premium-channels"
                    className="inline-flex items-center justify-center rounded-full border border-[#2A3142] bg-[#1A1F2E] px-6 py-3 text-sm font-medium text-[#F5F6F8] transition hover:border-[#4F7DFF]"
                  >
                    See pricing again
                  </a>
                </div>

                <p className="mt-5 text-xs text-[#6E7585]">
                  No pressure, no scripts — a real conversation about what you watch.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================ NFL SUNDAY SEO BOMB ============================ */}
      <section id="nfl-iptv" className="bg-[#0E1119] py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-5 md:px-8">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-[#FF4D5C]/30 bg-[#FF4D5C]/[0.08] px-3 py-1 text-xs font-semibold uppercase tracking-wider text-[#FF4D5C]">
              🏈 NFL Sunday · zero blackouts · NFL Sunday Ticket alternative
            </span>
            <h2 className="mt-4 font-[family-name:var(--font-display)] text-3xl font-normal leading-[1.05] md:text-5xl text-[#F5F6F8]">
              Watch every NFL game in 4K.{" "}
              <span className="italic text-[#4F7DFF]">Even out-of-market.</span>
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-[#A8AEBC]">
              The NFL is the most-watched sports league in America — and watching every
              game traditionally requires <strong>NFL Sunday Ticket</strong> on YouTube TV
              ($389/season) plus <strong>ESPN</strong>, <strong>NFL Network</strong> and{" "}
              <strong>Amazon Prime</strong>, costing well over{" "}
              <strong className="text-[#F5F6F8]">$700/year</strong>. With our IPTV
              subscription on Firestick, <strong className="text-[#F5F6F8]">all 272 regular
              season games are live in 4K</strong> — including out-of-market games, NFL
              RedZone, Monday Night Football, Thursday Night Football, and the full playoffs.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                tag: "NFL",
                t: "All 272 NFL regular season games · every Sunday",
                b: "NFL Sunday 1:00 PM ET, 4:25 PM ET, 8:20 PM ET kickoffs all included. 4K HDR. ESPN, FOX, CBS, NBC, NFL Network, NFL RedZone — every feed. Includes Monday Night Football and Thursday Night Football.",
                stat: "272 NFL games/yr",
              },
              {
                tag: "NBA & NHL",
                t: "NBA League Pass · NHL Center Ice",
                b: "Every NBA regular-season game (82 per team), full NBA Playoffs, full Stanley Cup Playoffs, all NHL Center Ice games. ESPN, TNT, ABC, NBC feeds — no blackouts.",
                stat: "82 NBA + 82 NHL",
              },
              {
                tag: "MLB · WORLD SERIES",
                t: "MLB.TV alternative · every team",
                b: "Full regular season (162 games per team), all playoffs, every World Series game. ESPN, FOX, FS1, MLB Network — including local RSNs (YES, NESN, Bally Sports, SNY).",
                stat: "162 games/team",
              },
              {
                tag: "COLLEGE",
                t: "NCAA Football · March Madness",
                b: "Every NCAA Football game (FBS Power 5 + Group of 5), full NCAA Tournament (March Madness), College World Series, all bowl games. ESPN, CBS, ABC, FOX, TBS, TNT, truTV.",
                stat: "All bowl games",
              },
              {
                tag: "F1 · UFC · BOXING",
                t: "PPV events · NASCAR · F1",
                b: "Every NASCAR Cup Series race weekend — practice, qualifying, race. F1 Grand Prix on ESPN, every UFC Fight Night and numbered card, every boxing PPV (Fury, Canelo, Spence) — all included, zero per-fight fees.",
                stat: "Zero PPV fees",
              },
              {
                tag: "MLS · INT'L SOCCER",
                t: "MLS Season Pass · Premier League",
                b: "Every Major League Soccer match (Apple TV MLS Season Pass equivalent). Champions League, Europa League, Premier League, La Liga, Serie A — all leagues, all matches.",
                stat: "All major leagues",
              },
            ].map((card) => (
              <article
                key={card.t}
                className="group rounded-2xl border border-[#2A3142] bg-[#141824] p-6 transition hover:border-[#4F7DFF] hover:bg-[#1A1F2E] hover:shadow-2xl"
              >
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-semibold uppercase tracking-wider text-[#FF4D5C]">
                    {card.tag}
                  </span>
                  <span className="rounded-full bg-[#4F7DFF]/[0.12] px-2.5 py-1 text-[10px] font-medium text-[#4F7DFF]">
                    {card.stat}
                  </span>
                </div>
                <h3 className="mt-3 font-[family-name:var(--font-display)] text-xl font-medium leading-snug text-[#F5F6F8]">
                  {card.t}
                </h3>
                <p className="mt-3 text-[14px] leading-relaxed text-[#A8AEBC]">{card.b}</p>
              </article>
            ))}
          </div>

          {/* Mini stats row */}
          <div className="mt-12 grid grid-cols-2 gap-4 rounded-2xl border border-[#2A3142] bg-[#141824] p-6 md:grid-cols-4">
            {[
              { v: "272", l: "NFL games/year" },
              { v: "1,230", l: "NBA regular season" },
              { v: "36", l: "NASCAR Cup races" },
              { v: "0", l: "Per-fight PPV charges" },
            ].map((s) => (
              <div key={s.l} className="text-center">
                <div className="font-[family-name:var(--font-display)] text-3xl font-normal text-[#4F7DFF] md:text-4xl">
                  {s.v}
                </div>
                <div className="mt-1 text-[12px] leading-tight text-[#A8AEBC]">{s.l}</div>
              </div>
            ))}
          </div>

          <div className="mt-10 rounded-3xl border border-[#2A3142] bg-gradient-to-br from-[#1A1F2E] via-[#141824] to-[#0B0E16] p-7 text-white md:p-10 shadow-2xl">
            <div className="grid grid-cols-1 items-center gap-6 md:grid-cols-12">
              <div className="md:col-span-8">
                <h3 className="font-[family-name:var(--font-display)] text-2xl font-normal leading-tight md:text-3xl">
                  Sunday is sacred. Don&rsquo;t miss the 4th quarter again.
                </h3>
                <p className="mt-3 text-[15px] leading-relaxed text-white/75">
                  Test our anti-freeze servers <strong className="text-white">free for 24 hours</strong> —
                  ideally on a Sunday, during the 1pm kickoff. If it doesn&rsquo;t hold a clean stream
                  through the full 60 minutes, walk away. No card needed. No commitment.
                </p>
              </div>
              <div className="flex flex-col gap-2 md:col-span-4">
                <a
                  href={whatsappLink("Hi! Free 24-hour NFL IPTV trial please.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-[#25D366] px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-[#1FB855]"
                >
                  💬 Free trial on WhatsApp
                </a>
                <a
                  href="#premium-channels"
                  className="inline-flex items-center justify-center rounded-full border border-white/30 px-6 py-3 text-sm font-medium text-white transition hover:bg-white/10"
                >
                  See plans from $12
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================ CABLE VS IPTV COST COMPARISON ============================ */}
      <section id="cable-vs-iptv" className="bg-[#0B0E16] py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-5 md:px-8">
          <div className="max-w-3xl">
            <span className="text-xs font-medium uppercase tracking-[0.18em] text-[#4F7DFF]">
              Cable vs IPTV in the USA
            </span>
            <h2 className="mt-3 font-[family-name:var(--font-display)] text-3xl font-normal leading-tight md:text-5xl text-[#F5F6F8]">
              Why thousands of American households cut the cord every month.
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-[#A8AEBC]">
              Cable and satellite bills keep climbing while channel selection shrinks. A premium IPTV
              subscription on Firestick replaces traditional pay TV from Comcast Xfinity, Spectrum,
              DirecTV and YouTube TV — typically saving American households
              <strong className="text-[#F5F6F8]"> $1,200 to $1,800 a year</strong>. Over 7 million US
              households have already abandoned traditional pay TV — and the shift is accelerating.
            </p>
          </div>

          <div className="mt-12 overflow-x-auto rounded-2xl border border-[#2A3142]">
            <table className="w-full min-w-[640px] border-collapse text-left text-sm">
              <thead className="bg-[#1A1F2E] text-[#A8AEBC]">
                <tr>
                  <th className="px-5 py-4 font-medium">Provider</th>
                  <th className="px-5 py-4 font-medium">Typical monthly cost</th>
                  <th className="px-5 py-4 font-medium">Annual cost (USD)</th>
                  <th className="px-5 py-4 font-medium">vs IPTV Firestick (~$55/yr)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#2A3142]">
                {[
                  { p: "Comcast Xfinity (Ultimate TV + Sports)", m: "$130 – $165", y: "$1,560 – $1,980", save: "save up to $1,925" },
                  { p: "Spectrum (TV Select Signature + Sports)", m: "$120 – $165", y: "$1,440 – $1,980", save: "save up to $1,925" },
                  { p: "DirecTV Stream (Choice + Sports)", m: "$108 – $164", y: "$1,296 – $1,968", save: "save up to $1,913" },
                  { p: "YouTube TV ($82.99 base)", m: "$83 – $108", y: "$996 – $1,296", save: "save up to $1,241" },
                  { p: "Hulu Live TV + Disney+", m: "$83 – $103", y: "$996 – $1,236", save: "save up to $1,181" },
                ].map((r) => (
                  <tr key={r.p} className="bg-[#141824]">
                    <td className="px-5 py-4 font-medium text-[#F5F6F8]">{r.p}</td>
                    <td className="px-5 py-4 text-[#A8AEBC]">{r.m}</td>
                    <td className="px-5 py-4 text-[#A8AEBC]">{r.y}</td>
                    <td className="px-5 py-4">
                      <span className="rounded-full bg-[#4F7DFF]/[0.15] px-3 py-1 text-xs font-medium text-[#4F7DFF]">
                        {r.save}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="mt-6 max-w-3xl text-sm text-[#6E7585]">
            Estimated 2026 figures based on publicly listed pricing from US pay TV providers, including
            HD/4K channel packs, sports add-ons, regional sports network fees and broadcast TV fees.
            Individual savings vary by household and current contract terms.
          </p>

          <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
            {[
              {
                t: "No 24-month contract",
                b: "IPTV in the USA is month-to-month. No 12 or 24-month cable contracts, no early-exit fees, no cable box rental, no technician install charge.",
              },
              {
                t: "Every channel you actually watch",
                b: "ESPN, FOX Sports, NFL Network, NBA TV, MLB Network, NHL Network, HBO Max, Showtime, NBC, ABC, CBS, FOX — plus 20,000+ international channels cable bundles never include.",
              },
              {
                t: "Watch on every device",
                b: "Firestick, Fire TV Cube, Smart TV, Android TV, Roku, iPhone, iPad, laptop — one subscription, every screen in the house.",
              },
            ].map((x) => (
              <div key={x.t} className="rounded-2xl border border-[#2A3142] bg-[#141824] p-6">
                <h3 className="font-[family-name:var(--font-display)] text-xl font-medium text-[#F5F6F8]">
                  {x.t}
                </h3>
                <p className="mt-2 text-[15px] leading-relaxed text-[#A8AEBC]">{x.b}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================ US CHANNEL DIRECTORY ============================ */}
      <section id="us-channels" className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28">
        <div className="max-w-3xl">
          <span className="text-xs font-medium uppercase tracking-[0.18em] text-[#4F7DFF]">
            US channel directory
          </span>
          <h2 className="mt-3 font-[family-name:var(--font-display)] text-3xl font-normal leading-tight md:text-5xl text-[#F5F6F8]">
            Every major US channel — covered.
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-[#A8AEBC]">
            What separates a serious IPTV provider in the USA from a fly-by-night service is the
            depth of American channels. A premium IPTV subscription should include all of the
            major US networks below — without per-channel surcharges or sport-pack add-ons.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {[
            {
              title: "US sports — NFL, NBA, MLB, NHL",
              channels: [
                "ESPN, ESPN2, ESPNEWS, ESPNU, ESPN Deportes",
                "FOX Sports 1, FOX Sports 2",
                "NBC Sports, USA Network",
                "NFL Network, NFL RedZone",
                "NBA TV, MLB Network, NHL Network",
                "TNT, TBS, ABC (sports broadcasts)",
              ],
              tag: "NFL, NBA, MLB, NHL",
            },
            {
              title: "US national networks (Free TV)",
              channels: [
                "ABC, CBS, NBC, FOX, The CW",
                "PBS, PBS Kids, MyNetworkTV",
                "Telemundo, Univision",
                "ION, Bounce, Grit, Court TV",
                "Hallmark, Hallmark Movies",
                "Lifetime, Lifetime Movies",
              ],
              tag: "ABC, CBS, NBC, FOX",
            },
            {
              title: "Movies & premium entertainment",
              channels: [
                "HBO Max (Max), Showtime, Starz",
                "Cinemax, Epix (MGM+)",
                "Paramount+, Peacock, Discovery+",
                "AMC, FX, FXX, USA Network",
                "TNT, TBS, History, A&E",
                "Comedy Central, Adult Swim, MTV",
              ],
              tag: "HBO Max, Showtime",
            },
            {
              title: "College sports, F1, UFC, boxing",
              channels: [
                "ESPN College Football, College GameDay",
                "Big Ten Network, SEC Network, ACC Network",
                "Pac-12 Network, Longhorn Network",
                "ESPN F1 — every Grand Prix weekend",
                "ESPN+ UFC PPV included",
                "DAZN Boxing, all major fight nights",
              ],
              tag: "NCAA, F1, UFC, Boxing",
            },
            {
              title: "Lifestyle, kids & news",
              channels: [
                "Discovery, Animal Planet, History",
                "National Geographic, NatGeo Wild",
                "HGTV, Food Network, Travel Channel",
                "Cartoon Network, Boomerang, Nickelodeon",
                "Disney Channel, Disney Junior, Disney XD",
                "Fox News, CNN, MSNBC, CNBC, Bloomberg",
              ],
              tag: "Lifestyle, Kids, News",
            },
            {
              title: "International (multilingual US)",
              channels: [
                "Telemundo, Univision (Spanish)",
                "TV5 Monde, France 24 (French)",
                "Rai Italia, Mediaset (Italian)",
                "ZDF, RTL (German)",
                "Star India, Sony Asia (Hindi/Tamil)",
                "Al Jazeera English, MBC, OSN (Arabic)",
              ],
              tag: "Multicultural US",
            },
          ].map((g) => (
            <article
              key={g.title}
              className="rounded-2xl border border-[#2A3142] bg-[#141824] p-6"
            >
              <span className="rounded-full border border-[#2A3142] bg-[#1A1F2E] px-2.5 py-1 text-[10px] font-medium uppercase tracking-wider text-[#A8AEBC]">
                {g.tag}
              </span>
              <h3 className="mt-4 font-[family-name:var(--font-display)] text-xl font-medium text-[#F5F6F8]">
                {g.title}
              </h3>
              <ul className="mt-4 space-y-2 text-[14px] text-[#A8AEBC]">
                {g.channels.map((c) => (
                  <li key={c} className="flex items-start gap-2">
                    <span className="mt-0.5 text-[#4F7DFF]" aria-hidden>●</span>
                    <span>{c}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <p className="mt-10 max-w-3xl text-sm text-[#6E7585]">
          Channel availability depends on the IPTV service you choose. Always confirm the specific
          channels you care about (e.g. <em>NFL RedZone for Sunday football</em>,
          ESPN+ for UFC PPV, HBO Max for new film releases) before subscribing.
        </p>
      </section>

      {/* ============================ TOP IPTV PROVIDERS / WHY US ============================ */}
      <section id="top-providers" className="bg-[#0E1119] py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-5 md:px-8">
          <div className="max-w-3xl">
            <span className="text-xs font-medium uppercase tracking-[0.18em] text-[#4F7DFF]">
              How to choose an IPTV provider in the USA
            </span>
            <h2 className="mt-3 font-[family-name:var(--font-display)] text-3xl font-normal leading-tight md:text-5xl text-[#F5F6F8]">
              The 8 criteria that separate the best IPTV USA services from the rest.
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-[#A8AEBC]">
              The US IPTV market in 2026 is crowded. These are the eight measurable
              criteria we use to evaluate every IPTV provider before recommending it —
              the same ones top Reddit threads on r/IPTV and American cord-cutter
              communities consistently come back to.
            </p>
          </div>

          <ol className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-2">
            {[
              {
                n: "01",
                t: "Server stability & uptime",
                b: "Look for 99%+ uptime tested during NFL Sunday 1pm kickoff and weekday primetime (7–11pm ET). Anti-freeze technology and HEVC compression matter for 4K streams during big games and UFC PPVs.",
              },
              {
                n: "02",
                t: "Full US channel depth",
                b: "ESPN family, FOX Sports, NFL Network, NBA TV, MLB Network, NBC, ABC, CBS, FOX, HBO Max, Showtime — all included, not as add-ons or sport packs.",
              },
              {
                n: "03",
                t: "Free trial — at least 24 hours",
                b: "Avoid services with no trial or only a 2-hour preview. A confident US provider lets you stress-test their service across multiple devices and a full NFL weekend.",
              },
              {
                n: "04",
                t: "Firestick & multi-device support",
                b: "Compatible with IPTV Smarters Pro, TiviMate, OTT Navigator on Amazon Firestick, Fire TV Cube, Android TV, Samsung & LG Smart TVs, Roku, iPhone, iPad, Windows.",
              },
              {
                n: "05",
                t: "Real US customer support",
                b: "A real human reachable by WhatsApp, email or live chat — replying within minutes during US working hours, not a bot or a 48-hour ticket queue.",
              },
              {
                n: "06",
                t: "Transparent pricing in USD",
                b: "Pricing in US dollars ($), no surprise renewal fees, no hidden 'activation charges'. Annual plans should be substantially cheaper than monthly × 12 — typically $40–$60/year.",
              },
              {
                n: "07",
                t: "Reseller-quality EPG",
                b: "Electronic Program Guide loads correctly for US channels with the right time zone (ET, CT, MT, PT), so NFL kickoff times, primetime shows and late-night lineups all show on schedule.",
              },
              {
                n: "08",
                t: "Privacy & VPN-friendly infrastructure",
                b: "Some US ISPs (Comcast Xfinity, Spectrum, AT&T, Cox) throttle streaming traffic, especially during peak NFL hours. The best IPTV services route well over reputable VPNs without breaking authentication.",
              },
            ].map((c) => (
              <li
                key={c.n}
                className="flex gap-4 rounded-2xl border border-[#2A3142] bg-[#141824] p-6 transition hover:border-[#4F7DFF]/50"
              >
                <span className="font-[family-name:var(--font-display)] text-3xl font-normal text-[#4F7DFF]/90">
                  {c.n}
                </span>
                <div>
                  <h3 className="font-[family-name:var(--font-display)] text-lg font-medium text-[#F5F6F8]">
                    {c.t}
                  </h3>
                  <p className="mt-1.5 text-[14px] leading-relaxed text-[#A8AEBC]">
                    {c.b}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ============================ BEST APPS ============================ */}
      <section id="apps" className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <span className="text-xs font-medium uppercase tracking-[0.18em] text-[#4F7DFF]">
              The shortlist
            </span>
            <h2 className="mt-3 font-[family-name:var(--font-display)] text-3xl font-normal leading-tight md:text-5xl text-[#F5F6F8]">
              The best IPTV apps on Firestick — reviewed by American users.
            </h2>
          </div>
          <p className="max-w-sm text-sm text-[#6E7585]">
            We re-test these apps every quarter on a Fire TV Stick 4K Max
            connected to Comcast Xfinity, Spectrum and Verizon Fios. Last
            reviewed this quarter.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          {apps.map((app, i) => (
            <article
              key={app.name}
              className={`flex flex-col rounded-2xl border bg-[#141824] p-7 transition hover:shadow-2xl ${
                i === 1
                  ? "border-[#4F7DFF] bg-gradient-to-b from-[#1A1F2E] to-[#141824] ring-1 ring-[#4F7DFF]/30"
                  : "border-[#2A3142]"
              }`}
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-medium uppercase tracking-wider text-[#6E7585]">
                  {app.tag}
                </span>
                {i === 1 && (
                  <span className="rounded-full bg-[#4F7DFF] px-2.5 py-1 text-[10px] font-medium uppercase tracking-wider text-white">
                    Editor&rsquo;s pick
                  </span>
                )}
              </div>
              <h3 className="mt-3 font-[family-name:var(--font-display)] text-2xl font-medium text-[#F5F6F8]">
                {app.name}
              </h3>
              <p className="mt-1 text-sm text-[#6E7585]">{app.best}</p>

              <ul className="mt-6 space-y-3">
                {app.pros.map((p) => (
                  <li key={p} className="flex items-start gap-3 text-[15px] text-[#A8AEBC]">
                    <span className="mt-0.5 text-[#4F7DFF]" aria-hidden>✓</span>
                    <span>{p}</span>
                  </li>
                ))}
              </ul>

              <a
                href="#setup"
                className="mt-8 inline-flex w-full items-center justify-center rounded-full border border-[#2A3142] bg-[#1A1F2E] px-4 py-2.5 text-sm font-medium text-[#F5F6F8] transition hover:border-[#4F7DFF]"
              >
                See setup guide
              </a>
            </article>
          ))}
        </div>
      </section>

      {/* ============================ ISP COMPATIBILITY ============================ */}
      <section className="bg-[#0B0E16] py-20 text-white md:py-28 border-y border-[#1F2433]">
        <div className="mx-auto max-w-6xl px-5 md:px-8">
          <div className="grid grid-cols-1 gap-10 md:grid-cols-12">
            <div className="md:col-span-5">
              <span className="text-xs font-medium uppercase tracking-[0.18em] text-white/60">
                US broadband providers
              </span>
              <h2 className="mt-3 font-[family-name:var(--font-display)] text-3xl font-normal leading-tight md:text-5xl text-[#F5F6F8]">
                Tested on every major US broadband provider.
              </h2>
              <p className="mt-5 text-lg leading-relaxed text-white/70">
                Each US ISP behaves slightly differently with IPTV traffic —
                particularly during Sunday NFL peak load. Our
                guides include provider-specific notes — DNS tweaks, Wi-Fi 6E
                recommendations, and when a VPN is genuinely helpful versus
                when it&rsquo;s overkill.
              </p>
            </div>
            <div className="md:col-span-7">
              <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
                {[
                  "Comcast Xfinity",
                  "Spectrum Internet",
                  "AT&T Fiber",
                  "Verizon Fios",
                  "Cox Communications",
                  "CenturyLink",
                  "T-Mobile Home Internet",
                  "Optimum / Frontier",
                ].map((isp) => (
                  <div
                    key={isp}
                    className="flex items-center gap-2 rounded-xl border border-[#2A3142] bg-[#141824] px-4 py-3 text-sm transition hover:border-[#4F7DFF]/50 hover:bg-[#1A1F2E]"
                  >
                    <span className="text-[#FF4D5C]">●</span>
                    <span>{isp}</span>
                  </div>
                ))}
              </div>
              <p className="mt-6 text-sm text-white/50">
                Tip: most ISP-related buffering issues in the USA are solved
                by switching from 2.4 GHz Wi-Fi to a wired Ethernet adapter
                on the Firestick — long before any VPN is needed.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ============================ TROUBLESHOOTING ============================ */}
      <section id="troubleshooting" className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28">
        <div className="max-w-2xl">
          <span className="text-xs font-medium uppercase tracking-[0.18em] text-[#4F7DFF]">
            When things break
          </span>
          <h2 className="mt-3 font-[family-name:var(--font-display)] text-3xl font-normal leading-tight md:text-5xl text-[#F5F6F8]">
            Troubleshooting, the way American viewers actually search for it.
          </h2>
          <p className="mt-4 text-lg text-[#A8AEBC]">
            Real issues, real fixes. No &ldquo;have you tried turning it off and on
            again&rdquo;. These six cover roughly 98% of the support requests we see.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-2">
          {troubleshooting.map((t) => (
            <article
              key={t.title}
              className="rounded-2xl border border-[#2A3142] bg-[#141824] p-6 md:p-7 transition hover:border-[#4F7DFF]/50"
            >
              <div className="flex items-start justify-between gap-4">
                <h3 className="font-[family-name:var(--font-display)] text-xl font-medium leading-snug text-[#F5F6F8]">
                  {t.title}
                </h3>
                <span className="shrink-0 rounded-full border border-[#2A3142] bg-[#1A1F2E] px-2.5 py-1 text-[10px] font-medium uppercase tracking-wider text-[#A8AEBC]">
                  {t.tag}
                </span>
              </div>
              <p className="mt-3 text-[15px] leading-relaxed text-[#A8AEBC]">
                {t.fix}
              </p>
            </article>
          ))}
        </div>
      </section>

      {/* ============================ BENEFITS / WHY US ============================ */}
      <section className="bg-[#0E1119] py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-5 md:px-8">
          <div className="max-w-2xl">
            <span className="text-xs font-medium uppercase tracking-[0.18em] text-[#4F7DFF]">
              Why IPTV For Firestick USA
            </span>
            <h2 className="mt-3 font-[family-name:var(--font-display)] text-3xl font-normal leading-tight md:text-5xl text-[#F5F6F8]">
              The IPTV resource American households keep coming back to.
            </h2>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-[#2A3142] bg-[#2A3142] sm:grid-cols-2 lg:grid-cols-3">
            {benefits.map((b) => (
              <div key={b.title} className="bg-[#141824] p-7">
                <span className="text-2xl" aria-hidden>{b.icon}</span>
                <h3 className="mt-4 font-[family-name:var(--font-display)] text-xl font-medium text-[#F5F6F8]">
                  {b.title}
                </h3>
                <p className="mt-2 text-[15px] leading-relaxed text-[#A8AEBC]">
                  {b.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================ CUSTOMER REVIEWS (real ones only) ============================ */}
      {/* Renders only when verified WhatsApp reviews exist in customerReviews. */}
      {customerReviews.length > 0 && (
        <section className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28">
          <div className="max-w-2xl">
            <span className="text-xs font-medium uppercase tracking-[0.18em] text-[#4F7DFF]">
              From real customers
            </span>
            <h2 className="mt-3 font-[family-name:var(--font-display)] text-3xl font-normal leading-tight md:text-5xl text-[#F5F6F8]">
              What customers tell us on WhatsApp.
            </h2>
            <p className="mt-4 text-sm text-[#6E7585]">
              Shared with permission after activation. We never publish invented reviews.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
            {customerReviews.map((t) => (
              <figure
                key={t.name}
                className="flex flex-col rounded-2xl border border-[#2A3142] bg-[#141824] p-7 transition hover:border-[#F5B643]/50"
              >
                <blockquote className="mt-1 flex-1 text-[16px] leading-relaxed text-[#F5F6F8]">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <figcaption className="mt-6 border-t border-[#2A3142] pt-4 text-sm">
                  <div className="font-medium text-[#F5F6F8]">{t.name}</div>
                  <div className="text-[#6E7585]">{t.location}</div>
                </figcaption>
              </figure>
            ))}
          </div>
        </section>
      )}

      {/* ============================ FAQ ============================ */}
      <section id="faq" className="bg-[#0E1119] py-20 md:py-28">
        <div className="mx-auto max-w-4xl px-5 md:px-8">
          <div className="text-center">
            <span className="text-xs font-medium uppercase tracking-[0.18em] text-[#4F7DFF]">
              FAQ
            </span>
            <h2 className="mt-3 font-[family-name:var(--font-display)] text-3xl font-normal leading-tight md:text-5xl text-[#F5F6F8]">
              Questions American viewers actually ask.
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-[#A8AEBC]">
              Pulled from real Reddit threads, Google&rsquo;s &ldquo;People Also Ask&rdquo;,
              and emails from readers across the East Coast, West Coast, Midwest and South.
            </p>
          </div>

          <div className="mt-12 divide-y divide-[#2A3142] rounded-2xl border border-[#2A3142] bg-[#141824]">
            {faqs.map((f, i) => (
              <details
                key={i}
                className="group px-6 py-5 [&_summary::-webkit-details-marker]:hidden"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-6">
                  <span className="font-[family-name:var(--font-display)] text-[18px] font-medium leading-snug text-[#F5F6F8]">
                    {f.q}
                  </span>
                  <span
                    aria-hidden
                    className="grid h-8 w-8 shrink-0 place-items-center rounded-full border border-[#2A3142] text-[#A8AEBC] transition group-open:rotate-45 group-open:border-[#4F7DFF] group-open:text-[#4F7DFF]"
                  >
                    +
                  </span>
                </summary>
                <p className="mt-4 text-[15px] leading-relaxed text-[#A8AEBC]">
                  {f.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ============================ HISPANIC / LATINO SECTION — 63M+ AUDIENCE ============================ */}
      <section id="espanol" className="relative overflow-hidden bg-[#0E1119] py-20 md:py-28">
        {/* Vibrant ambient background */}
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute -left-32 top-20 h-96 w-96 rounded-full bg-[#FF4D5C]/[0.10] blur-3xl" />
          <div className="absolute right-0 bottom-20 h-96 w-96 rounded-full bg-[#F5B643]/[0.10] blur-3xl" />
        </div>

        <div className="mx-auto max-w-6xl px-5 md:px-8">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-[#F5B643]/30 bg-[#F5B643]/[0.08] px-3 py-1 text-xs font-semibold uppercase tracking-wider text-[#F5B643]">
              ⚽ HECHO PARA LATINOS · 63M+ AUDIENCE
            </span>
            <h2 className="mt-4 font-[family-name:var(--font-display)] text-3xl font-normal leading-[1.05] text-[#F5F6F8] md:text-5xl">
              Todos los canales en español.{" "}
              <span className="italic text-[#F5B643]">Liga MX. Canelo. Telenovelas.</span>
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-[#A8AEBC]">
              <strong className="text-[#F5F6F8]">¡Bienvenidos!</strong> Más de 63 millones de hispanos viven en
              Estados Unidos, y estamos hechos para ustedes. Disfruta{" "}
              <strong className="text-[#F5F6F8]">Telemundo, Univision, TUDN, Liga MX</strong> en vivo,
              Selección Mexicana, todas las peleas de Canelo Álvarez,{" "}
              <strong className="text-[#F5F6F8]">+5,000 canales en español</strong>, telenovelas mexicanas, turcas y colombianas,
              series y películas latinas — todo en 4K UHD desde tu Firestick. Soporte 100% en español por WhatsApp.
            </p>
          </div>

          {/* Hispanic content categories */}
          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                tag: "FÚTBOL",
                icon: "⚽",
                title: "Liga MX & Selección",
                items: [
                  "Liga MX completa (Apertura + Clausura)",
                  "Club América, Chivas, Cruz Azul",
                  "Selección Mexicana — El Tri",
                  "TUDN, Univision Deportes",
                  "Copa América 2026 en vivo",
                  "Mundial 2026 — todos los partidos",
                ],
                color: "#22c55e",
              },
              {
                tag: "BOXEO",
                icon: "🥊",
                title: "Canelo & PPV gratis",
                items: [
                  "Todas las peleas de Canelo Álvarez",
                  "Ryan Garcia, David Benavidez",
                  "Boxeo mexicano completo",
                  "ESPN Deportes Boxing",
                  "DAZN Boxing, Fox Deportes",
                  "PPV incluidos — sin cargos extra",
                ],
                color: "#FF4D5C",
              },
              {
                tag: "NOTICIAS",
                icon: "📺",
                title: "Telemundo & Univision",
                items: [
                  "Univision en vivo 24/7",
                  "Telemundo en vivo 24/7",
                  "Despierta América",
                  "Primer Impacto",
                  "Al Rojo Vivo",
                  "CNN en Español",
                ],
                color: "#4F7DFF",
              },
              {
                tag: "NOVELAS",
                icon: "💕",
                title: "Telenovelas latinas",
                items: [
                  "Las Estrellas, Azteca Uno, Azteca 7",
                  "Telenovelas mexicanas clásicas",
                  "Telenovelas turcas dobladas",
                  "Telenovelas colombianas",
                  "Caso Cerrado, Rosa de Guadalupe",
                  "Series Netflix Latina",
                ],
                color: "#F5B643",
              },
              {
                tag: "LA LIGA",
                icon: "🏆",
                title: "Fútbol europeo",
                items: [
                  "La Liga española completa",
                  "Real Madrid, Barcelona — El Clásico",
                  "Atlético Madrid, Sevilla",
                  "Champions League — UEFA",
                  "Europa League",
                  "Premier League en español",
                ],
                color: "#22c55e",
              },
              {
                tag: "ENTRETENIMIENTO",
                icon: "🎬",
                title: "Películas & series",
                items: [
                  "Películas mexicanas latest",
                  "El Chavo del 8 — clásicos",
                  "Películas latinas en HD",
                  "Galavisión, Discovery en Español",
                  "History Channel Latinoamérica",
                  "Series infantiles — Cartoon Network",
                ],
                color: "#FF4D5C",
              },
            ].map((cat) => (
              <article
                key={cat.title}
                className="group rounded-2xl border border-[#2A3142] bg-[#141824] p-6 transition hover:border-[#F5B643]/50 hover:bg-[#1A1F2E] hover:shadow-2xl"
              >
                <div className="flex items-center justify-between">
                  <span
                    className="text-[10px] font-bold uppercase tracking-wider"
                    style={{ color: cat.color }}
                  >
                    {cat.tag}
                  </span>
                  <span className="text-2xl" aria-hidden>{cat.icon}</span>
                </div>
                <h3 className="mt-3 font-[family-name:var(--font-display)] text-xl font-medium text-[#F5F6F8]">
                  {cat.title}
                </h3>
                <ul className="mt-4 space-y-2 text-[13px] text-[#A8AEBC]">
                  {cat.items.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="mt-0.5" style={{ color: cat.color }}>●</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>

          {/* Hispanic stats banner */}
          <div className="mt-12 grid grid-cols-2 gap-4 rounded-3xl border border-[#F5B643]/30 bg-gradient-to-r from-[#1F1A14] via-[#141824] to-[#1A1F2E] p-6 md:grid-cols-4 md:p-8">
            {[
              { v: "63M+", l: "Hispanos en USA", c: "#F5B643" },
              { v: "5,000+", l: "Canales en español", c: "#22c55e" },
              { v: "78%", l: "Usan streaming", c: "#FF4D5C" },
              { v: "$12/mes", l: "Desde solo", c: "#4F7DFF" },
            ].map((s) => (
              <div key={s.l} className="text-center">
                <div
                  className="font-[family-name:var(--font-display)] text-3xl font-bold md:text-4xl"
                  style={{ color: s.c }}
                >
                  {s.v}
                </div>
                <div className="mt-1 text-[12px] leading-tight text-[#A8AEBC]">{s.l}</div>
              </div>
            ))}
          </div>

          {/* Spanish CTA */}
          <div className="mt-10 flex flex-col items-center gap-5 text-center">
            <p className="max-w-xl text-lg text-[#A8AEBC]">
              <strong className="text-[#F5F6F8]">Prueba gratis 24 horas.</strong> Sin tarjeta de crédito. Cancela cuando quieras.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <a
                href={whatsappLink("¡Hola! Quiero la prueba gratis de 24 horas de IPTV en español por favor.")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#25D366] px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-[#25D366]/30 transition hover:scale-[1.03] hover:bg-[#1FB855]"
              >
                💬 Prueba gratis · WhatsApp en español
              </a>
              <a
                href="#premium-channels"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-[#F5B643]/40 bg-[#F5B643]/[0.08] px-7 py-3.5 text-sm font-semibold text-[#F5B643] transition hover:bg-[#F5B643]/[0.15]"
              >
                Ver planes desde $12/mes →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ============================ TRILINGUAL SUPPORT CHAT — EN/ES/FR ============================ */}
      <section id="support" className="relative overflow-hidden bg-[#0B0E16] py-20 md:py-24">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute left-1/2 top-1/2 h-[80%] w-[80%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-radial from-[#4F7DFF]/[0.08] via-transparent to-transparent blur-3xl" />
        </div>

        <div className="mx-auto max-w-6xl px-5 md:px-8">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-[#4F7DFF]/30 bg-[#4F7DFF]/[0.08] px-3 py-1 text-xs font-semibold uppercase tracking-wider text-[#4F7DFF]">
              🌍 24/7 SUPPORT · ENGLISH · ESPAÑOL · FRANÇAIS
            </span>
            <h2 className="mt-4 font-[family-name:var(--font-display)] text-3xl font-normal leading-[1.05] text-[#F5F6F8] md:text-5xl">
              WhatsApp support.{" "}
              <span className="italic text-[#4F7DFF]">In your language.</span>
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-[#A8AEBC]">
              No ticket queues, no phone trees. Message our team on WhatsApp in{" "}
              <strong className="text-[#F5F6F8]">English, Español or Français</strong> —
              setup help, troubleshooting, plan changes — anything you need.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-12">
            {/* LEFT: Honest WhatsApp support block — no fake agents, no scripted chats */}
            <div className="md:col-span-7">
              <div className="overflow-hidden rounded-3xl border border-[#2A3142] bg-gradient-to-br from-[#141824] to-[#0E1119] shadow-2xl">
                {/* Header */}
                <div className="flex items-center justify-between border-b border-[#2A3142] bg-[#0B0E16] px-5 py-4">
                  <div className="flex items-center gap-3">
                    <span className="grid h-12 w-12 place-items-center rounded-full bg-[#25D366] text-white">
                      <svg aria-hidden="true" viewBox="0 0 24 24" className="h-6 w-6 fill-current">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                      </svg>
                    </span>
                    <div>
                      <div className="text-sm font-semibold text-[#F5F6F8]">💬 WhatsApp support</div>
                      <div className="text-[11px] text-[#A8AEBC]">English · Español · Français</div>
                    </div>
                  </div>
                  {/* Language badges */}
                  <div className="hidden sm:flex items-center gap-1.5">
                    {["EN", "ES", "FR"].map((l) => (
                      <span
                        key={l}
                        className="rounded-md border border-[#2A3142] bg-[#1A1F2E] px-2 py-1 text-[10px] font-bold text-[#A8AEBC]"
                      >
                        {l}
                      </span>
                    ))}
                  </div>
                </div>

                {/* What support actually is */}
                <div className="space-y-3 p-5 text-[14px] leading-relaxed text-[#A8AEBC] sm:p-6">
                  <p>
                    All support happens in a real WhatsApp conversation with our team —
                    the same channel you order through. Ask about channels, plans or
                    setup, or start your <strong className="text-[#F5F6F8]">free 24-hour
                    trial</strong> straight from the chat.
                  </p>
                  <p>
                    Typical topics we handle: Firestick setup step by step, buffering
                    fixes by ISP, plan changes, canales en español, chaînes
                    francophones (TV5 Monde, France 24, chaînes haïtiennes et
                    québécoises).
                  </p>
                </div>

                {/* Action buttons */}
                <div className="border-t border-[#2A3142] bg-[#0B0E16] px-5 py-4">
                  <div className="flex flex-col gap-2 sm:flex-row">
                    <a
                      href={whatsappLink("Hi! I have a question about your IPTV service. | Ref: home-support-en")}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 inline-flex items-center justify-center gap-2 rounded-full bg-[#25D366] px-4 py-2.5 text-xs font-semibold text-white transition hover:bg-[#1FB855]"
                    >
                      💬 English
                    </a>
                    <a
                      href={whatsappLink("¡Hola! Tengo una pregunta sobre el servicio IPTV. | Ref: home-support-es")}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 inline-flex items-center justify-center gap-2 rounded-full bg-[#F5B643] px-4 py-2.5 text-xs font-semibold text-[#0B0E16] transition hover:bg-[#E89B2D]"
                    >
                      💬 Español
                    </a>
                    <a
                      href={whatsappLink("Bonjour ! J'ai une question sur le service IPTV. | Ref: home-support-fr")}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 inline-flex items-center justify-center gap-2 rounded-full bg-[#4F7DFF] px-4 py-2.5 text-xs font-semibold text-white transition hover:bg-[#3D6BEE]"
                    >
                      💬 Français
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT: Why our support is different */}
            <div className="md:col-span-5">
              <div className="space-y-4">
                {[
                  {
                    icon: "⏱️",
                    title: "Free 24-hour trial first",
                    body: "You test the service before any payment. No card needed for the trial.",
                  },
                  {
                    icon: "⚡",
                    title: "5-minute activation",
                    body: "From WhatsApp message to streaming in about 5 minutes.",
                  },
                  {
                    icon: "🌍",
                    title: "Trilingual support",
                    body: "English · Español · Français — the way you speak at home.",
                  },
                  {
                    icon: "💵",
                    title: "Money-back guarantee",
                    body: "If the service doesn't work as described and we can't fix it, you get your money back. See the refund policy.",
                  },
                  {
                    icon: "💯",
                    title: "Setup help included",
                    body: "We walk you through Firestick setup step-by-step until it works.",
                  },
                ].map((d) => (
                  <div
                    key={d.title}
                    className="flex items-start gap-4 rounded-xl border border-[#2A3142] bg-[#141824] p-4 transition hover:border-[#4F7DFF]/50 hover:bg-[#1A1F2E]"
                  >
                    <span className="text-2xl shrink-0">{d.icon}</span>
                    <div>
                      <div className="text-sm font-semibold text-[#F5F6F8]">{d.title}</div>
                      <div className="mt-0.5 text-xs leading-relaxed text-[#A8AEBC]">{d.body}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

            {/* ============================ FINAL CTA ============================ */}
      <section className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28">
        <div className="overflow-hidden rounded-3xl border border-[#2A3142] bg-gradient-to-br from-[#1A1F2E] via-[#141824] to-[#0B0E16] p-10 text-white md:p-16 shadow-2xl">
          <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-12">
            <div className="md:col-span-8">
              <span className="inline-flex items-center gap-2 rounded-full border border-[#FF4D5C]/40 bg-[#FF4D5C]/[0.12] px-3 py-1 text-xs font-semibold uppercase tracking-wider text-white">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#FF4D5C]" />
                Last step
              </span>
              <h2 className="mt-3 font-[family-name:var(--font-display)] text-3xl font-normal leading-[1.05] md:text-5xl lg:text-6xl">
                Stop paying cable $147 a month.{" "}
                <span className="italic text-[#FF4D5C]">Start tonight.</span>
              </h2>
              <p className="mt-5 max-w-xl text-lg leading-relaxed text-white/80">
                Test it free for 24 hours — no card, no commitment. Watch the next
                NFL game on us. If the stream holds clean through the full 60 minutes,
                lock in <strong className="text-white">$12 a month</strong>. If it doesn&rsquo;t,
                walk away. That simple.
              </p>
              <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-white/70">
                <span>✅ No card needed</span>
                <span>✅ 5-min activation</span>
                <span>✅ Cancel anytime</span>
                <span>✅ US WhatsApp support 24/7</span>
              </div>
            </div>
            <div className="flex flex-col gap-3 md:col-span-4">
              <a
                href={whatsappLink("Hi! I want to start the free 24-hour IPTV trial — no card needed.")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#25D366] px-6 py-4 text-sm font-semibold text-white shadow-[0_10px_30px_-10px_rgba(37,211,102,0.7)] transition hover:bg-[#1FB855]"
              >
                💬 Free 24-hr trial · WhatsApp
              </a>
              <a
                href="#premium-channels"
                className="inline-flex items-center justify-center rounded-full bg-[#4F7DFF] px-6 py-4 text-sm font-semibold text-white transition hover:bg-[#3D6BEE]"
              >
                Get IPTV from $12 →
              </a>
              <button
                data-install-trigger
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/30 px-6 py-3 text-xs font-medium text-white transition hover:bg-white/10"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                  <polyline points="7 10 12 15 17 10" />
                  <line x1="12" y1="15" x2="12" y2="3" />
                </svg>
                Install the IPTV For Firestick USA app
              </button>
              <p className="mt-1 text-center text-[11px] text-white/50">
                Updated for Fire OS 8 · Anti-freeze servers · Money-back guarantee
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ============================ FOOTER ============================ */}
      <footer className="border-t border-[#1F2433] bg-[#0B0E16]">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-10 px-5 py-12 md:grid-cols-4 md:px-8">
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2.5">
              <span className="relative grid h-8 w-8 place-items-center overflow-hidden rounded-lg bg-gradient-to-br from-[#1E3A8A] to-[#0F1B3D] text-white">
                <svg viewBox="0 0 32 32" className="h-full w-full" aria-hidden="true">
                  <rect width="32" height="32" rx="7" fill="url(#footerGrad)" />
                  <defs>
                    <linearGradient id="footerGrad" x1="0" y1="0" x2="1" y2="1">
                      <stop offset="0" stopColor="#1E3A8A" />
                      <stop offset="1" stopColor="#0F1B3D" />
                    </linearGradient>
                  </defs>
                  <text
                    x="16"
                    y="22"
                    textAnchor="middle"
                    fill="#FAFAF7"
                    fontFamily="system-ui,-apple-system,Segoe UI,Roboto,sans-serif"
                    fontWeight="800"
                    fontSize="14"
                    letterSpacing="-0.5"
                  >
                    IF
                  </text>
                  <circle cx="26" cy="26" r="2.5" fill="#DC2626" />
                </svg>
              </span>
              <span className="font-[family-name:var(--font-display)] text-lg font-medium leading-none tracking-tight">
                IPTV For Firestick USA<span className="text-[#DC2626]">.</span>
              </span>
            </div>
            <p className="mt-3 text-xs text-[#6E7585]">iptvforfirestickusa.com</p>
            <p className="mt-3 max-w-xs text-sm text-[#A8AEBC]">
              IPTV service + guides for Amazon Firestick in the USA. Plans from
              $12/month · free 24-hour trial · WhatsApp support in English,
              Español &amp; Français.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-medium text-[#F5F6F8]">Guides</h4>
            <ul className="mt-3 space-y-2 text-sm text-[#A8AEBC]">
              <li><a className="font-semibold text-[#FF4D5C] transition hover:text-[#E63946]" href="#premium-channels">Get IPTV from $12 →</a></li>
              <li><a className="transition hover:text-[#F5F6F8]" href="#nfl-iptv">🏈 NFL IPTV</a></li>
              <li><a className="transition hover:text-[#F5F6F8]" href="#setup">Firestick setup</a></li>
              <li><a className="transition hover:text-[#F5F6F8]" href="#apps">Best IPTV apps</a></li>
              <li><a className="transition hover:text-[#F5F6F8]" href="#cable-vs-iptv">Cable vs IPTV</a></li>
              <li><a className="transition hover:text-[#F5F6F8]" href="#us-channels">US channels</a></li>
              <li><a className="transition hover:text-[#F5F6F8]" href="#top-providers">Choosing a provider</a></li>
              <li><a className="transition hover:text-[#F5F6F8]" href="#troubleshooting">Fix buffering</a></li>
              <li><a className="transition hover:text-[#F5F6F8]" href="#faq">FAQ</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-medium text-[#F5F6F8]">Support · WhatsApp</h4>
            <ul className="mt-3 space-y-2 text-sm text-[#A8AEBC]">
              <li>
                <a
                  className="transition hover:text-[#F5F6F8]"
                  href={whatsappLink("Hi! I have a question about your IPTV service. | Ref: home-footer-en")}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  💬 English
                </a>
              </li>
              <li>
                <a
                  className="transition hover:text-[#F5F6F8]"
                  href={whatsappLink("¡Hola! Tengo una pregunta sobre el servicio IPTV. | Ref: home-footer-es")}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  💬 Español
                </a>
              </li>
              <li>
                <a
                  className="transition hover:text-[#F5F6F8]"
                  href={whatsappLink("Bonjour ! J'ai une question sur le service IPTV. | Ref: home-footer-fr")}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  💬 Français
                </a>
              </li>
              <li>
                <a
                  className="transition hover:text-[#F5F6F8]"
                  href={whatsappLink("Hi! I'd like the free 24-hour IPTV trial please. | Ref: home-footer-trial")}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  ⏱️ Free 24-hr trial
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-medium text-[#F5F6F8]">Site</h4>
            <ul className="mt-3 space-y-2 text-sm text-[#A8AEBC]">
              <li><Link className="transition hover:text-[#F5F6F8]" href="/terms">Terms of Service</Link></li>
              <li><Link className="transition hover:text-[#F5F6F8]" href="/privacy">Privacy Policy</Link></li>
              <li><Link className="transition hover:text-[#F5F6F8]" href="/refund">Refund Policy</Link></li>
              <li>
                <button data-install-trigger className="transition hover:text-[#F5F6F8]">
                  📱 Install app · Android · Windows
                </button>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-[#1F2433]">
          <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-3 px-5 py-6 text-xs text-[#6E7585] md:flex-row md:items-center md:px-8">
            <p>© {year} IPTV For Firestick USA — IPTV service + guides.</p>
            <p>Support on WhatsApp · English · Español · Français</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
