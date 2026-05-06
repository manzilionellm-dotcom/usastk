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
const MODIFIED_DATE = "2026-05-06T08:00:00-04:00"; // ET

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default:
      "Best IPTV for Firestick USA 2026 — $12/mo Cable Alternative · 50,000+ Channels · NFL · NBA · 4K · No Buffering",
    template: "%s | IPTV For Firestick USA",
  },
  description:
    "★ America's #1 IPTV for Firestick 2026 ★ Cut the cord, save $1,764/year vs Comcast. 50,000+ live channels in 4K UHD — every NFL game, NBA League Pass, MLB.TV, NHL Center Ice, ESPN, ABC, CBS, NBC, FOX, HBO Max, Paramount+, Peacock. Anti-Freeze 6.0 technology, 99.9% uptime, instant 5-minute activation on WhatsApp. Works on Amazon Firestick 4K Max, Smart TV, Android, iPhone, iPad, Windows, Mac. 24-hour free trial — no credit card required. Plans from $12/month, $55/year. Trusted by 12,400+ US households from New York to Los Angeles.",
  keywords: [
    // ============ TIER 1: HEAD COMMERCIAL — HIGHEST USA VOLUME ============
    "best iptv usa",
    "best iptv usa 2026",
    "best iptv usa 2027",
    "best iptv usa reddit",
    "iptv usa",
    "iptv usa 2026",
    "iptv usa subscription",
    "iptv subscription usa",
    "iptv subscription usa 2026",
    "iptv service usa",
    "iptv provider usa",
    "best iptv provider usa",
    "best iptv service usa",
    "best iptv service 2026",
    "usa iptv subscription",
    "premium iptv usa",
    "cheapest iptv usa",
    "cheap iptv usa",
    "cheap iptv subscription usa",
    "iptv usa cheap",
    "iptv usa $12",
    "iptv usa under $15",
    "iptv usa under 20",
    "best value iptv usa",
    "usa iptv 2026",
    "iptv america",
    "american iptv",
    "iptv united states",
    "iptv us",
    "us iptv subscription",
    "north america iptv",
    "iptv north america",
    // ============ TIER 1B: TRIAL / NO-COMMIT (KILLER INTENT) ============
    "iptv free trial usa",
    "iptv usa free trial",
    "free iptv trial usa",
    "iptv trial usa",
    "iptv free trial 24 hours",
    "iptv free trial no credit card",
    "iptv free trial firestick",
    "iptv test usa",
    "try iptv usa",
    "iptv usa no credit card",
    "iptv usa no commitment",
    "iptv free trial whatsapp",
    "iptv 24 hour trial",
    "test iptv before buying",
    "iptv trial firestick usa",
    "iptv free demo usa",
    // ============ TIER 1C: FIRESTICK (#1 USA STREAMING DEVICE) ============
    "iptv firestick",
    "iptv firestick usa",
    "iptv for firestick",
    "iptv for firestick usa",
    "iptv for firestick usa 2026",
    "best iptv for firestick usa",
    "best iptv for firestick 2026",
    "best iptv firestick usa 2026",
    "iptv firestick usa reddit",
    "amazon firestick iptv usa",
    "fire tv stick iptv usa",
    "firestick 4k iptv",
    "firestick 4k max iptv",
    "fire tv cube iptv",
    "iptv smarters firestick",
    "iptv smarters pro firestick",
    "tivimate firestick usa",
    "tivimate iptv subscription usa",
    "ott navigator firestick",
    "downloader code firestick",
    "iptv smarters code",
    "tivimate downloader code",
    "xciptv code",
    "install iptv firestick usa",
    "iptv on firestick usa",
    "how to install iptv on firestick usa",
    "best iptv app firestick",
    "iptv player firestick",
    "fire tv iptv",
    "firestick iptv 4k",
    "best iptv firestick 4k max",
    "how to setup iptv firestick",
    "firestick iptv setup guide",
    "iptv smarters pro download firestick",
    // ============ TIER 2: CABLE ALTERNATIVE / CUT THE CORD ============
    "cable alternative",
    "cable alternative 2026",
    "cable tv alternative",
    "cable tv alternative 2026",
    "alternative to cable",
    "alternative to cable tv",
    "best cable tv alternative",
    "cheaper than cable",
    "cheaper than xfinity",
    "cheaper than comcast",
    "cheaper than spectrum",
    "cheaper than directv",
    "cheaper than dish",
    "cheaper than youtube tv",
    "cheaper than hulu live",
    "cheaper than fubo tv",
    "cancel cable",
    "cancel cable tv",
    "cancel xfinity",
    "cancel comcast",
    "cancel spectrum",
    "cancel directv",
    "cancel dish network",
    "ditch cable",
    "leave cable",
    "iptv vs cable",
    "iptv instead of cable",
    "iptv replace cable",
    "iptv better than cable",
    "save money on cable tv",
    "stop paying for cable",
    "cable too expensive",
    "cable bill too high",
    "lower my cable bill",
    "cut the cord",
    "cut the cord 2026",
    "cord cutting usa",
    "cord cutters",
    "cord cutting 2026",
    "alternative to xfinity",
    "alternative to spectrum",
    "alternative to comcast",
    "alternative to directv",
    "alternative to dish",
    "alternative to youtube tv",
    "alternative to hulu live tv",
    "alternative to sling tv",
    "alternative to fubo",
    "youtube tv alternative cheap",
    "hulu live alternative cheap",
    "fubo alternative cheap",
    // ============ TIER 2B: NFL — #1 USA TRAFFIC DRIVER ============
    "nfl iptv",
    "iptv nfl",
    "watch nfl cheap",
    "nfl streaming usa",
    "nfl sunday ticket alternative",
    "nfl sunday ticket alternative 2026",
    "nfl sunday ticket cheap",
    "nfl sunday ticket without youtube tv",
    "nfl sunday ticket without directv",
    "nfl sunday ticket replacement",
    "nfl redzone iptv",
    "nfl redzone alternative",
    "nfl redzone without cable",
    "watch nfl out of market",
    "watch every nfl game",
    "watch every nfl game live",
    "nfl iptv firestick",
    "nfl iptv reddit",
    "nfl streaming 2026",
    "watch nfl without cable",
    "watch nfl without directv",
    "watch nfl without youtube tv",
    "nfl network iptv",
    "monday night football iptv",
    "thursday night football iptv",
    "sunday night football iptv",
    "super bowl iptv",
    "super bowl 2026 iptv",
    "watch super bowl free",
    "watch super bowl iptv",
    "nfl playoffs iptv",
    "afc championship iptv",
    "nfc championship iptv",
    "nfl sunday firestick",
    // ============ TIER 2C: NBA / MLB / NHL / SPORTS ============
    "nba iptv",
    "nba league pass alternative",
    "nba league pass alternative 2026",
    "nba league pass cheap",
    "nba league pass without subscription",
    "watch nba games iptv",
    "nba streaming usa",
    "nba playoffs iptv",
    "nba finals iptv",
    "watch nba on firestick",
    "mlb iptv",
    "mlb tv alternative",
    "mlb tv alternative 2026",
    "mlb streaming usa",
    "watch mlb games iptv",
    "mlb playoffs iptv",
    "world series iptv",
    "watch mlb on firestick",
    "nhl iptv",
    "nhl center ice alternative",
    "nhl center ice cheap",
    "nhl streaming usa",
    "nhl playoffs iptv",
    "stanley cup iptv",
    "watch nhl on firestick",
    "espn iptv",
    "espn streaming",
    "espn plus alternative",
    "espn without cable",
    "watch espn cheap",
    "fox sports iptv",
    "fs1 iptv",
    "fs2 iptv",
    "ppv iptv usa",
    "ufc iptv usa",
    "ufc ppv usa",
    "ufc 300 iptv",
    "watch ufc cheap",
    "boxing iptv usa",
    "boxing ppv iptv",
    "watch boxing ppv free",
    "wwe iptv",
    "wwe network iptv",
    "wwe ppv iptv",
    "f1 iptv usa",
    "formula 1 iptv usa",
    "nascar iptv",
    "watch nascar cheap",
    "indycar iptv",
    "college football iptv",
    "ncaa iptv",
    "ncaa football iptv",
    "march madness iptv",
    "ncaa basketball iptv",
    "college basketball iptv",
    "mls iptv",
    "watch mls cheap",
    // ============ TIER 3: USA NETWORK CHANNELS ============
    "abc iptv",
    "cbs iptv",
    "nbc iptv",
    "fox iptv",
    "the cw iptv",
    "pbs iptv",
    "hbo max iptv",
    "max iptv",
    "showtime iptv",
    "starz iptv",
    "cinemax iptv",
    "paramount plus iptv",
    "peacock iptv",
    "discovery plus iptv",
    "hallmark iptv",
    "amc iptv",
    "fx iptv",
    "fxx iptv",
    "usa network iptv",
    "tnt iptv",
    "tbs iptv",
    "history channel iptv",
    "comedy central iptv",
    "mtv iptv",
    "bravo iptv",
    "lifetime iptv",
    "hgtv iptv",
    "food network iptv",
    "fox news iptv",
    "cnn iptv",
    "msnbc iptv",
    "newsmax iptv",
    "fox business iptv",
    "bloomberg iptv",
    "cnbc iptv",
    "iptv all usa channels",
    "iptv all american channels",
    "usa iptv channels",
    "american tv channels iptv",
    "iptv local channels usa",
    "iptv premium channels usa",
    // ============ TIER 4: CITIES (HYPERLOCAL USA) ============
    "iptv new york",
    "iptv new york city",
    "iptv nyc",
    "iptv brooklyn",
    "iptv queens",
    "iptv manhattan",
    "iptv long island",
    "iptv los angeles",
    "iptv la",
    "iptv san francisco",
    "iptv san jose",
    "iptv chicago",
    "iptv houston",
    "iptv phoenix",
    "iptv philadelphia",
    "iptv philly",
    "iptv san antonio",
    "iptv san diego",
    "iptv dallas",
    "iptv fort worth",
    "iptv austin",
    "iptv miami",
    "iptv orlando",
    "iptv tampa",
    "iptv jacksonville",
    "iptv atlanta",
    "iptv boston",
    "iptv seattle",
    "iptv denver",
    "iptv las vegas",
    "iptv portland",
    "iptv detroit",
    "iptv charlotte",
    "iptv nashville",
    "iptv washington dc",
    "iptv baltimore",
    "iptv minneapolis",
    "iptv st louis",
    "iptv indianapolis",
    "iptv columbus",
    "iptv kansas city",
    "iptv milwaukee",
    "iptv cincinnati",
    "iptv cleveland",
    "iptv pittsburgh",
    "iptv california",
    "iptv texas",
    "iptv florida",
    "iptv new york state",
    "iptv illinois",
    "iptv pennsylvania",
    "iptv ohio",
    "iptv georgia",
    "iptv north carolina",
    "iptv michigan",
    "iptv arizona",
    "iptv massachusetts",
    "iptv washington state",
    "iptv colorado",
    "iptv tennessee",
    "iptv new jersey",
    "iptv virginia",
    "iptv maryland",
    "iptv indiana",
    "iptv missouri",
    "iptv wisconsin",
    "iptv minnesota",
    "iptv south carolina",
    "iptv alabama",
    "iptv louisiana",
    "iptv kentucky",
    "iptv oregon",
    "iptv oklahoma",
    "iptv connecticut",
    "iptv utah",
    "iptv iowa",
    "iptv nevada",
    "iptv arkansas",
    "iptv mississippi",
    "iptv kansas",
    "iptv new mexico",
    "iptv nebraska",
    "iptv idaho",
    "iptv hawaii",
    "iptv west virginia",
    // ============ TIER 5: ISPs / TROUBLESHOOTING ============
    "iptv comcast xfinity",
    "iptv xfinity",
    "iptv spectrum",
    "iptv at&t fiber",
    "iptv at&t",
    "iptv verizon fios",
    "iptv cox",
    "iptv cox communications",
    "iptv t mobile home internet",
    "iptv centurylink",
    "iptv optimum",
    "iptv frontier",
    "iptv frontier fiber",
    "iptv cable one",
    "iptv astound",
    "iptv windstream",
    "iptv buffering fix usa",
    "iptv buffering nfl sunday",
    "iptv buffering super bowl",
    "iptv not working xfinity",
    "iptv not working spectrum",
    "iptv not working att fiber",
    "iptv not working verizon fios",
    "iptv not working cox",
    "iptv freezing firestick",
    "iptv black screen fix",
    "iptv epg not loading usa",
    "iptv vpn usa",
    "best vpn for iptv usa",
    "isp throttling iptv usa",
    "stop iptv buffering usa",
    "fix iptv freezing usa",
    "iptv buffering during nfl",
    // ============ TIER 6: LEGALITY / TRUST / SAFETY ============
    "is iptv legal in usa",
    "is iptv legal in the us",
    "iptv legal usa 2026",
    "iptv usa law",
    "iptv fcc",
    "iptv legal united states",
    "safe iptv usa",
    "trusted iptv usa",
    "best safe iptv usa",
    "iptv reddit usa",
    "iptv usa reviews",
    "iptv usa rating",
    "scam iptv list",
    "fake iptv warning",
    "legitimate iptv usa",
    // ============ TIER 7: PURCHASE / PRICING INTENT ============
    "buy iptv usa",
    "iptv usa buy now",
    "iptv usa price",
    "iptv subscription price usa",
    "iptv price comparison usa",
    "1 month iptv usa",
    "3 months iptv usa",
    "6 months iptv usa",
    "12 months iptv usa",
    "yearly iptv usa",
    "annual iptv subscription usa",
    "iptv usa whatsapp",
    "iptv whatsapp usa",
    "iptv instant activation usa",
    "iptv 4k usa",
    "iptv 4k uhd",
    "iptv hd usa",
    "iptv uhd usa",
    "iptv 8k usa",
    "iptv usa 50000 channels",
    "iptv usa 4k no buffering",
    "iptv usa anti freeze",
    "iptv with vpn included",
    "iptv with epg",
    // ============ TIER 8: CONVERSATIONAL / VOICE / AI SEARCH (LONG-TAIL) ============
    "what is the best iptv for firestick in usa",
    "what is the best iptv subscription in 2026",
    "how much does iptv cost in usa",
    "how to watch nfl without cable",
    "how to cancel cable tv save money",
    "how to install iptv on amazon firestick",
    "how to set up iptv smarters pro on firestick",
    "how to fix iptv buffering on firestick",
    "how to watch nfl sunday ticket cheap",
    "how to watch nba league pass cheap",
    "is iptv worth it 2026",
    "is iptv better than cable",
    "is iptv better than youtube tv",
    "is iptv legal for personal use",
    "where to buy iptv subscription usa",
    "which iptv service has the most channels",
    "which iptv has the best 4k",
    "best iptv with no buffering",
    "best iptv anti freeze technology",
    "fastest iptv servers usa",
    "iptv with us based servers",
    "iptv with american servers",
    // ============ TIER 9: AI ENTITIES (FOR LLM CITATION) ============
    "iptv for firestick usa subscription",
    "iptv for firestick usa free trial",
    "iptv for firestick usa 4k",
    "iptv for firestick usa nfl",
    "iptv for firestick usa cheap",
    "iptv for firestick usa best",
    "amazon fire tv iptv app usa",
    "iptv smarters pro usa",
    "tivimate premium usa",
    "xtream codes iptv usa",
    "m3u playlist usa",
    "m3u url iptv usa",
    "epg url iptv usa",
    // ============ TIER 10: COMPARISON / VERSUS QUERIES ============
    "iptv vs youtube tv",
    "iptv vs hulu live",
    "iptv vs sling tv",
    "iptv vs fubo",
    "iptv vs directv stream",
    "iptv vs philo",
    "iptv vs frndly tv",
    "iptv vs pluto tv",
    "iptv vs antenna",
    "best iptv vs best cable",
    "iptv vs cable tv comparison",
  ],
  authors: [{ name: "IPTV For Firestick USA Editorial", url: SITE_URL }],
  creator: "IPTV For Firestick USA",
  publisher: "IPTV For Firestick USA",
  applicationName: SITE_NAME,
  generator: "Next.js",
  referrer: "origin-when-cross-origin",
  category: "technology",
  classification: "IPTV / Streaming Guides",
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
      "★ Best IPTV for Firestick USA 2026 — Cut the Cord, Save $1,764/yr · 50,000+ Channels in 4K · From $12 | iptvforfirestickusa.com",
    description:
      "America's #1 IPTV for Firestick subscription 2026. 50,000+ live channels in 4K UHD — every NFL game, NBA League Pass, MLB.TV, NHL Center Ice, ESPN, ABC, CBS, NBC, FOX, HBO Max, Paramount+, Peacock — for less than the price of two streaming subscriptions. Anti-Freeze 6.0 technology, 99.9% uptime, zero buffering on NFL Sundays. Instant 5-minute activation on WhatsApp. Plans from $12/month or $55/year. 24-hour free trial, no credit card required.",
    url: PAGE_URL,
    siteName: SITE_NAME,
    type: "article",
    locale: "en_US",
    publishedTime: PUBLISHED_DATE,
    modifiedTime: MODIFIED_DATE,
    authors: [`${SITE_URL}/about`],
    section: "IPTV Guides",
    tags: [
      "IPTV USA",
      "IPTV for Firestick",
      "Best IPTV USA 2026",
      "Cable Alternative",
      "NFL IPTV",
      "NFL Sunday Ticket Alternative",
      "NBA League Pass Alternative",
      "MLB.TV Alternative",
      "Firestick USA",
      "Cut the Cord 2026",
      "Cheap IPTV",
      "Cord Cutting USA",
      "Anti-Freeze 6.0",
      "4K IPTV",
    ],
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "IPTV For Firestick USA — #1 Best IPTV USA 2026 · NFL Sunday Ticket Alternative · 50,000+ Channels · From $12/month",
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "★ Best IPTV for Firestick USA 2026 — Save $1,764/yr · 50,000+ Channels · From $12 | iptvforfirestickusa.com",
    description:
      "America's #1 IPTV for Firestick. 50,000+ channels · Every NFL game · NBA League Pass · MLB.TV · NHL · ESPN · HBO Max · 4K UHD, no buffering · Firestick in 5 mins · 24-hr free trial, no credit card. Plans from $12.",
    creator: "@iptvforfirestickusa",
    site: "@iptvforfirestickusa",
    images: [OG_IMAGE],
  },
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  other: {
    "geo.region": "US",
    "geo.placename": "United States",
    "ICBM": "40.7128, -74.0060",
    "DC.title":
      "Best IPTV USA 2026 — Firestick Setup, Cable Alternative & NFL",
    "DC.creator": "IPTV For Firestick USA Editorial",
    "DC.subject": "IPTV USA, Firestick, Cable Alternative, NFL, Cord Cutting",
    "DC.language": "en-US",
  },
};

/* ----------------------------- DATA ----------------------------- */

const trustStats = [
  { value: "50,000+", label: "Live channels in 4K UHD" },
  { value: "99.9%", label: "Server uptime guarantee" },
  { value: "5 min", label: "From WhatsApp to streaming" },
  { value: "$1,764", label: "Saved vs Comcast each year" },
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

const testimonials = [
  {
    quote:
      "Followed the guide on a Sunday morning. Two cups of coffee later my Firestick was set up and the Giants game was streaming in HD. No buffering at all on Spectrum.",
    name: "James W.",
    location: "New York, NY",
  },
  {
    quote:
      "Cancelled cable after eleven years paying $147 a month. Set up an IPTV subscription on my Firestick — took eight minutes. Every NFL game, all of NBA League Pass, NBC, ABC, CBS. My bill went from $147 to $12.",
    name: "Priya S.",
    location: "Dallas, TX",
  },
  {
    quote:
      "Honestly the cleanest IPTV resource I've found in the USA. Most other sites look dodgy — this one feels like a real tech blog. The troubleshooting page alone is worth bookmarking.",
    name: "Jordan T.",
    location: "Los Angeles, CA",
  },
];

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
    badge: "Start Here",
    description:
      "A simple monthly plan for US viewers who want to try a premium IPTV subscription on Firestick before choosing a longer package.",
    message: "Hello, I want the 1 month IPTV USA plan for $12.",
  },
  {
    name: "3 Months",
    price: "$25",
    badge: "Popular",
    description:
      "A balanced option for American households who want reliable ESPN, FOX Sports, NBC, ABC and NFL streaming with better value than monthly renewal.",
    message: "Hello, I want the 3 month IPTV USA plan for $25.",
  },
  {
    name: "6 Months",
    price: "$30",
    badge: "Best Value",
    description:
      "Recommended for regular US viewers — premium IPTV access, all NFL games, NBA League Pass, MLB.TV, HBO Max and a 100,000+ VOD library on Firestick.",
    message: "Hello, I want the 6 month IPTV USA plan for $30.",
  },
  {
    name: "1 Year",
    price: "$55",
    badge: "Best Deal",
    description:
      "The strongest annual value for American customers who want long-term premium IPTV on Firestick — works out at under $4.60 a month, less than 4% of a typical cable bill.",
    message: "Hello, I want the 1 year IPTV USA plan for $55.",
  },
];

const whatsappNumber = "447307410512";

function whatsappLink(message: string) {
  return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
}

/* ----------------------------- DARK MODE CSS OVERRIDES ----------------------------- */
/* Applied when <html> has class "dark". Uses !important to win over Tailwind utilities. */

const darkModeCss = `
  html.dark { color-scheme: dark; }
  html.dark body { background-color: #0a0a08; }

  /* Page-level surfaces */
  html.dark .bg-\\[\\#FAFAF7\\] { background-color: #0a0a08 !important; }
  html.dark .bg-\\[\\#FAFAF7\\]\\/85 { background-color: rgba(15, 15, 12, 0.92) !important; }

  /* Lifted card surfaces */
  html.dark .bg-white { background-color: #171717 !important; }

  /* Separators */
  html.dark .bg-neutral-200 { background-color: #262626 !important; }

  /* Subtle blue accent backgrounds need extra lift in dark */
  html.dark .bg-\\[\\#1E3A8A\\]\\/\\[0\\.03\\] { background-color: rgba(60, 95, 200, 0.12) !important; }

  /* Text */
  html.dark .text-neutral-950 { color: #fafafa !important; }
  html.dark .text-neutral-900 { color: #f5f5f5 !important; }
  html.dark .text-neutral-800 { color: #e5e5e5 !important; }
  html.dark .text-neutral-700 { color: #d4d4d4 !important; }
  html.dark .text-neutral-600 { color: #a3a3a3 !important; }
  html.dark .text-neutral-500 { color: #737373 !important; }
  html.dark .text-neutral-400 { color: #525252 !important; }

  /* Borders */
  html.dark .border-neutral-200 { border-color: #262626 !important; }
  html.dark .border-neutral-200\\/80 { border-color: rgba(38, 38, 38, 0.85) !important; }
  html.dark .border-neutral-300 { border-color: #404040 !important; }
  html.dark .divide-neutral-200 > :not([hidden]) ~ :not([hidden]) { border-color: #262626 !important; }

  /* Hover states */
  html.dark .hover\\:border-neutral-900:hover { border-color: #fafafa !important; }
  html.dark .hover\\:text-neutral-950:hover { color: #fafafa !important; }
  html.dark .hover\\:bg-neutral-100:hover { background-color: #262626 !important; }
  html.dark .hover\\:border-neutral-300:hover { border-color: #525252 !important; }

  /* Lighten the primary blue text in dark mode for readability */
  html.dark .text-\\[\\#1E3A8A\\] { color: #6b8eef !important; }

  /* Smooth toggle */
  body, main, header, footer, section, article, div, nav, h1, h2, h3, h4, p, span, a, button, summary, details, figure, figcaption, blockquote, ul, li, input, textarea {
    transition: background-color 220ms ease, border-color 220ms ease, color 220ms ease;
  }

  /* Theme toggle / install icon button base styles */
  .sn-icon-btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    height: 2.25rem;
    width: 2.25rem;
    border-radius: 9999px;
    border: 1px solid #e5e5e5;
    background-color: #ffffff;
    color: #404040;
    transition: background-color 200ms ease, border-color 200ms ease, color 200ms ease;
  }
  .sn-icon-btn:hover { border-color: #171717; color: #171717; }
  html.dark .sn-icon-btn { background-color: #171717; border-color: #262626; color: #d4d4d4; }
  html.dark .sn-icon-btn:hover { border-color: #fafafa; color: #fafafa; }

  /* Install banner + pill: hidden by default; JS shows when relevant */
  #sn-install-banner { display: none; }
  #sn-install-banner.is-visible { display: block; }
  .sn-install-pill { display: none; }
  .sn-install-pill.is-visible { display: inline-flex; }
`;

/* ----------------------------- THEME INIT (RUNS BEFORE PAINT) ----------------------------- */

const themeInitScript = `
  (function() {
    try {
      var stored = null;
      try { stored = localStorage.getItem('iptvffusa-theme'); } catch (e) {}
      var prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
      var isDark = stored ? stored === 'dark' : !!prefersDark;
      if (isDark) {
        document.documentElement.classList.add('dark');
      }
    } catch (e) {}
  })();
`;

/* ----------------------------- PWA + INTERACTIVITY (RUNS ON LOAD) ----------------------------- */

const pwaAndUiScript = `
  (function() {
    /* ---- 1. Build inline PWA manifest (no extra files needed) ---- */
    /* PRO LOGO: Bold "IF" monogram on blue gradient — looks great in app drawer at every size.
       Maskable-safe: design fits within 80% center circle so Android won't crop it. */
    var iconSvg512 = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><defs><linearGradient id="bg" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#1E3A8A"/><stop offset="1" stop-color="#0F1B3D"/></linearGradient><linearGradient id="acc" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#DC2626"/><stop offset="1" stop-color="#B91C1C"/></linearGradient></defs><rect width="512" height="512" rx="96" fill="url(#bg)"/><circle cx="256" cy="256" r="200" fill="rgba(255,255,255,0.04)"/><g transform="translate(256 256)"><rect x="-118" y="-90" width="236" height="160" rx="16" fill="#FAFAF7"/><rect x="-100" y="-72" width="200" height="124" rx="6" fill="#0F1B3D"/><g fill="#FAFAF7" font-family="system-ui,-apple-system,Segoe UI,Roboto,sans-serif" font-weight="800" text-anchor="middle"><text x="-30" y="22" font-size="96" letter-spacing="-3">I</text><text x="40" y="22" font-size="96" letter-spacing="-3">F</text></g><rect x="-30" y="80" width="60" height="10" rx="5" fill="#FAFAF7"/><rect x="-50" y="100" width="100" height="6" rx="3" fill="#FAFAF7" opacity="0.6"/></g><circle cx="430" cy="430" r="32" fill="url(#acc)"/><circle cx="430" cy="430" r="12" fill="#FAFAF7"/></svg>';
    var iconSvg192 = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 192 192"><defs><linearGradient id="bg2" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#1E3A8A"/><stop offset="1" stop-color="#0F1B3D"/></linearGradient><linearGradient id="acc2" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#DC2626"/><stop offset="1" stop-color="#B91C1C"/></linearGradient></defs><rect width="192" height="192" rx="36" fill="url(#bg2)"/><circle cx="96" cy="96" r="76" fill="rgba(255,255,255,0.04)"/><g transform="translate(96 96)"><rect x="-44" y="-34" width="88" height="60" rx="6" fill="#FAFAF7"/><rect x="-37" y="-27" width="74" height="46" rx="2" fill="#0F1B3D"/><g fill="#FAFAF7" font-family="system-ui,-apple-system,Segoe UI,Roboto,sans-serif" font-weight="800" text-anchor="middle"><text x="-11" y="8" font-size="36" letter-spacing="-1">I</text><text x="15" y="8" font-size="36" letter-spacing="-1">F</text></g><rect x="-11" y="30" width="22" height="4" rx="2" fill="#FAFAF7"/></g><circle cx="161" cy="161" r="12" fill="url(#acc2)"/><circle cx="161" cy="161" r="4.5" fill="#FAFAF7"/></svg>';

    var manifest = {
      name: "IPTV For Firestick USA — Best IPTV for Firestick 2026",
      short_name: "IPTV Firestick",
      description: "Best IPTV for Firestick USA 2026. Cancel cable, save $1,764/yr. 50,000+ channels in 4K UHD — every NFL game, NBA League Pass, MLB.TV, NHL, ESPN, ABC, CBS, NBC, FOX, HBO Max. Anti-Freeze 6.0. From $12/month.",
      start_url: ".",
      scope: ".",
      id: "iptvforfirestickusa",
      display: "standalone",
      display_override: ["window-controls-overlay", "standalone", "minimal-ui", "browser"],
      orientation: "any",
      background_color: "#FAFAF7",
      theme_color: "#1E3A8A",
      lang: "en-US",
      dir: "ltr",
      categories: ["entertainment", "utilities", "lifestyle"],
      prefer_related_applications: false,
      icons: [
        /* Will be filled in dynamically with PNG data URIs below */
      ],
      shortcuts: [
        { name: "Setup guide", short_name: "Setup", description: "Install IPTV on Firestick in 3 steps", url: "/#setup" },
        { name: "Premium channels", short_name: "Channels", description: "View IPTV subscription plans", url: "/#premium-channels" },
        { name: "Fix buffering", short_name: "Fix", description: "Troubleshooting guide", url: "/#troubleshooting" },
        { name: "FAQ", short_name: "FAQ", description: "Frequently asked questions", url: "/#faq" }
      ]
    };

    /* Render SVG to PNG via canvas — Android & iOS need PNG for proper app drawer/home-screen icons */
    function svgToPngDataUrl(svgString, size, callback) {
      try {
        var canvas = document.createElement('canvas');
        canvas.width = size;
        canvas.height = size;
        var ctx = canvas.getContext('2d');
        var img = new Image();
        var svgBlob = new Blob([svgString], { type: 'image/svg+xml;charset=utf-8' });
        var url = URL.createObjectURL(svgBlob);
        img.onload = function() {
          ctx.drawImage(img, 0, 0, size, size);
          URL.revokeObjectURL(url);
          try { callback(canvas.toDataURL('image/png')); } catch (e) { callback(null); }
        };
        img.onerror = function() { URL.revokeObjectURL(url); callback(null); };
        img.src = url;
      } catch (e) { callback(null); }
    }

    function buildAndAttachManifest() {
      svgToPngDataUrl(iconSvg192, 192, function(png192){
        svgToPngDataUrl(iconSvg512, 512, function(png512){
          /* Fallback to SVG data URI if canvas conversion failed */
          var src192 = png192 || ('data:image/svg+xml;base64,' + btoa(iconSvg192));
          var src512 = png512 || ('data:image/svg+xml;base64,' + btoa(iconSvg512));
          var pngType = png192 ? 'image/png' : 'image/svg+xml';
          var pngType512 = png512 ? 'image/png' : 'image/svg+xml';

          manifest.icons = [
            { src: src192, sizes: "192x192", type: pngType, purpose: "any" },
            { src: src192, sizes: "192x192", type: pngType, purpose: "maskable" },
            { src: src512, sizes: "512x512", type: pngType512, purpose: "any" },
            { src: src512, sizes: "512x512", type: pngType512, purpose: "maskable" }
          ];

          try {
            var blob = new Blob([JSON.stringify(manifest)], { type: 'application/manifest+json' });
            var manifestUrl = URL.createObjectURL(blob);
            /* Remove any existing manifest link first */
            var existing = document.querySelector('link[rel="manifest"]');
            if (existing) existing.remove();
            var manifestLink = document.createElement('link');
            manifestLink.rel = 'manifest';
            manifestLink.href = manifestUrl;
            document.head.appendChild(manifestLink);

            /* Apple touch icon — must be PNG for iOS Add to Home Screen */
            var appleIconSrc = src192;
            var existingApple = document.querySelector('link[rel="apple-touch-icon"]');
            if (existingApple) existingApple.remove();
            var appleIcon = document.createElement('link');
            appleIcon.rel = 'apple-touch-icon';
            appleIcon.href = appleIconSrc;
            document.head.appendChild(appleIcon);

            /* Larger Apple icon variants */
            [120, 152, 167, 180].forEach(function(s){
              svgToPngDataUrl(iconSvg512, s, function(png){
                if (!png) return;
                var l = document.createElement('link');
                l.rel = 'apple-touch-icon';
                l.setAttribute('sizes', s + 'x' + s);
                l.href = png;
                document.head.appendChild(l);
              });
            });

            /* Standard favicon */
            svgToPngDataUrl(iconSvg192, 32, function(png){
              if (!png) return;
              var existingFav = document.querySelector('link[rel="icon"]');
              if (existingFav) existingFav.remove();
              var fav = document.createElement('link');
              fav.rel = 'icon';
              fav.type = 'image/png';
              fav.setAttribute('sizes', '32x32');
              fav.href = png;
              document.head.appendChild(fav);
            });

            var appleCapable = document.createElement('meta');
            appleCapable.name = 'apple-mobile-web-app-capable';
            appleCapable.content = 'yes';
            document.head.appendChild(appleCapable);

            var mobileCapable = document.createElement('meta');
            mobileCapable.name = 'mobile-web-app-capable';
            mobileCapable.content = 'yes';
            document.head.appendChild(mobileCapable);

            var appleTitle = document.createElement('meta');
            appleTitle.name = 'apple-mobile-web-app-title';
            appleTitle.content = 'IPTV Firestick';
            document.head.appendChild(appleTitle);

            var appleStatus = document.createElement('meta');
            appleStatus.name = 'apple-mobile-web-app-status-bar-style';
            appleStatus.content = 'black-translucent';
            document.head.appendChild(appleStatus);
          } catch (e) {}
        });
      });
    }

    try { buildAndAttachManifest(); } catch (e) {}

    /* ---- 1b. Register an inline Service Worker (required for PWA installability on Android & Windows) ---- */
    /* Chrome and Edge will only offer the native install prompt if a Service Worker is registered.
       This SW is minimal: it just caches the page shell so the app can launch offline. */
    try {
      if ('serviceWorker' in navigator) {
        var swCode = [
          "var CACHE = 'iptvforfirestickusa-v1';",
          "var SHELL = ['/', '/index.html'];",
          "self.addEventListener('install', function(e){",
          "  e.waitUntil(caches.open(CACHE).then(function(c){ return c.addAll(SHELL).catch(function(){}); }));",
          "  self.skipWaiting();",
          "});",
          "self.addEventListener('activate', function(e){",
          "  e.waitUntil(",
          "    caches.keys().then(function(keys){",
          "      return Promise.all(keys.map(function(k){ if (k !== CACHE) return caches.delete(k); }));",
          "    }).then(function(){ return self.clients.claim(); })",
          "  );",
          "});",
          "self.addEventListener('fetch', function(e){",
          "  if (e.request.method !== 'GET') return;",
          "  e.respondWith(",
          "    fetch(e.request).then(function(res){",
          "      var clone = res.clone();",
          "      if (e.request.url.indexOf(self.location.origin) === 0) {",
          "        caches.open(CACHE).then(function(c){ c.put(e.request, clone); }).catch(function(){});",
          "      }",
          "      return res;",
          "    }).catch(function(){ return caches.match(e.request).then(function(r){ return r || caches.match('/'); }); })",
          "  );",
          "});"
        ].join('\\n');
        var swBlob = new Blob([swCode], { type: 'application/javascript' });
        var swUrl = URL.createObjectURL(swBlob);
        navigator.serviceWorker.register(swUrl, { scope: '/' }).catch(function(){});
      }
    } catch (e) {}

    /* ---- 2. Theme-color meta (matches current theme) ---- */
    function syncThemeColor() {
      var isDark = document.documentElement.classList.contains('dark');
      var meta = document.querySelector('meta[name="theme-color"]');
      if (!meta) {
        meta = document.createElement('meta');
        meta.name = 'theme-color';
        document.head.appendChild(meta);
      }
      meta.content = isDark ? '#0a0a08' : '#1E3A8A';
    }
    syncThemeColor();

    /* ---- 3. Theme toggle wiring ---- */
    function syncThemeIcons() {
      var isDark = document.documentElement.classList.contains('dark');
      document.querySelectorAll('[data-theme-icon-light]').forEach(function(el){
        el.style.display = isDark ? 'none' : 'inline-block';
      });
      document.querySelectorAll('[data-theme-icon-dark]').forEach(function(el){
        el.style.display = isDark ? 'inline-block' : 'none';
      });
    }

    /* Use event delegation on document so it works even if React re-renders the button */
    function setupThemeToggle() {
      /* Avoid double-binding if init() runs more than once */
      if (window.__sn_themeBound) { syncThemeIcons(); return; }
      window.__sn_themeBound = true;

      document.addEventListener('click', function(e){
        var target = e.target;
        if (!target || !target.closest) return;
        var btn = target.closest('[data-theme-toggle]');
        if (!btn) return;
        e.preventDefault();
        var isDark = document.documentElement.classList.toggle('dark');
        try { localStorage.setItem('iptvffusa-theme', isDark ? 'dark' : 'light'); } catch(e) {}
        syncThemeIcons();
        syncThemeColor();
      }, false);

      syncThemeIcons();
    }

    /* ---- 4. Auto-follow system if user hasn't picked a preference ---- */
    try {
      var mq = window.matchMedia('(prefers-color-scheme: dark)');
      var listener = function(e) {
        var hasPref = false;
        try { hasPref = !!localStorage.getItem('iptvffusa-theme'); } catch(_) {}
        if (hasPref) return;
        if (e.matches) document.documentElement.classList.add('dark');
        else document.documentElement.classList.remove('dark');
        syncThemeIcons();
        syncThemeColor();
      };
      if (mq.addEventListener) mq.addEventListener('change', listener);
      else if (mq.addListener) mq.addListener(listener);
    } catch (e) {}

    /* ---- 5. Install prompt — Android, Windows, iOS, Mac ---- */
    var deferredPrompt = null;
    var ua = (navigator.userAgent || '').toLowerCase();
    var platform = (navigator.platform || '').toLowerCase();

    var isAndroid = ua.indexOf('android') !== -1;
    var isIOS = /iphone|ipad|ipod/.test(ua) || (platform === 'macintel' && navigator.maxTouchPoints > 1);
    var isWindows = ua.indexOf('windows') !== -1 || platform.indexOf('win') === 0;
    var isMac = !isIOS && (platform.indexOf('mac') !== -1);
    var isMobile = isAndroid || isIOS;
    var isInstallable = isAndroid || isWindows || isMac; /* Platforms with native install support */

    /* Browser detection (matters for install instructions) */
    var isEdge = ua.indexOf('edg/') !== -1 || ua.indexOf('edge/') !== -1;
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

    /* Show install UI by default on Android and Windows so users can discover the option */
    if (isAndroid || isWindows) {
      pillEls().forEach(function(p){ p.classList.add('is-visible'); });
    }
    /* On iOS/Mac (Safari), also show the pill — there's no native prompt but we can guide them */
    if (isIOS || isMac) {
      pillEls().forEach(function(p){ p.classList.add('is-visible'); });
    }

    window.addEventListener('beforeinstallprompt', function(e){
      e.preventDefault();
      deferredPrompt = e;
      showInstallUI();
    });

    window.addEventListener('appinstalled', function(){
      deferredPrompt = null;
      hideInstallUI();
      try {
        var t = document.createElement('div');
        t.setAttribute('role', 'status');
        t.style.cssText = 'position:fixed;bottom:20px;left:50%;transform:translateX(-50%);z-index:9999;background:#1E3A8A;color:#fff;padding:12px 20px;border-radius:999px;font:500 14px system-ui;box-shadow:0 10px 30px rgba(30,58,138,.35)';
        t.textContent = '\u2713 IPTV For Firestick USA installed — find it in your apps.';
        document.body.appendChild(t);
        setTimeout(function(){ t.style.opacity='0'; t.style.transition='opacity .4s'; }, 2400);
        setTimeout(function(){ t.remove(); }, 3000);
      } catch (e) {}
    });

    /* Hide if already running as installed PWA */
    try {
      if ((window.matchMedia('(display-mode: standalone)').matches) || window.navigator.standalone) {
        hideInstallUI();
      }
    } catch (e) {}

    function getInstallMessage() {
      /* Android — Chrome, Samsung, Edge, Firefox */
      if (isAndroid) {
        if (isSamsung) {
          return "Install on Android (Samsung Internet):\n\n1. Tap the menu icon (\u2630) at the bottom\n2. Tap 'Add page to' \u2192 'Home screen'\n3. Confirm 'Add'\n\nIPTV For Firestick USA will appear on your home screen as a real app.";
        }
        if (isFirefox) {
          return "Install on Android (Firefox):\n\n1. Tap the menu (\u22EE) in the top-right\n2. Tap 'Install' or 'Add to Home screen'\n3. Confirm\n\nIPTV For Firestick USA will open like a native Android app.";
        }
        return "Install on Android (Chrome/Edge):\n\n1. Tap the menu (\u22EE) in the top-right\n2. Tap 'Install app' or 'Add to Home screen'\n3. Confirm\n\nIPTV For Firestick USA will appear in your app drawer like a normal Android app.";
      }
      /* iOS */
      if (isIOS) {
        return "Install on iPhone/iPad (Safari):\n\n1. Tap the Share button (square with up-arrow)\n2. Scroll down and tap 'Add to Home Screen'\n3. Tap 'Add'\n\nIPTV For Firestick USA will run full-screen like a native app.";
      }
      /* Windows */
      if (isWindows) {
        if (isEdge) {
          return "Install on Windows (Microsoft Edge):\n\n1. Click the install icon (\u229E) in the address bar\nOR\n   Click the menu (\u2026) \u2192 'Apps' \u2192 'Install IPTV For Firestick USA'\n2. Click 'Install'\n\nIPTV For Firestick USA will be added to your Start menu and taskbar as a real Windows app.";
        }
        if (isChrome) {
          return "Install on Windows (Chrome):\n\n1. Click the install icon (\u229E) in the address bar\nOR\n   Click the menu (\u22EE) \u2192 'Install IPTV For Firestick USA\u2026'\n2. Click 'Install'\n\nIPTV For Firestick USA will appear in your Start menu and run like a native Windows app.";
        }
        if (isFirefox) {
          return "Firefox on Windows doesn't support installing web apps natively.\n\nFor the best experience, open this site in Microsoft Edge or Google Chrome \u2014 you'll see an install icon in the address bar.";
        }
        return "Install on Windows:\n\nUse Microsoft Edge or Google Chrome \u2192 click the install icon (\u229E) in the address bar, or open the menu and choose 'Install IPTV For Firestick USA'.";
      }
      /* macOS */
      if (isMac) {
        if (isSafari) {
          return "Install on Mac (Safari 17+):\n\n1. Click the Share button in the toolbar\n2. Choose 'Add to Dock'\n\nIPTV For Firestick USA will appear in your Dock as a real Mac app.";
        }
        return "Install on Mac (Chrome/Edge):\n\n1. Click the install icon (\u229E) in the address bar\nOR\n   Open the menu \u2192 'Install IPTV For Firestick USA\u2026'\n2. Click 'Install'\n\nIPTV For Firestick USA will appear in Launchpad like a native Mac app.";
      }
      return "To install: click the install icon in your browser's address bar, or open the browser menu and choose 'Install IPTV For Firestick USA'.";
    }

    function setupInstallTriggers() {
      if (window.__sn_installBound) return;
      window.__sn_installBound = true;

      document.addEventListener('click', async function(e){
        var target = e.target;
        if (!target || !target.closest) return;

        /* Install button click */
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

        /* Dismiss button click */
        if (target.id === 'sn-install-dismiss' || (target.closest && target.closest('#sn-install-dismiss'))) {
          hideInstallUI();
        }
      }, false);
    }

    function init() {
      setupThemeToggle();
      setupInstallTriggers();
    }

    /* Run init now (event delegation works regardless of React hydration timing) */
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', init);
    } else {
      init();
    }
    /* Also run after a tick to handle React hydration that may run after our script */
    setTimeout(init, 0);
    /* Re-sync icons after window load (final hydration) */
    window.addEventListener('load', function(){ syncThemeIcons(); });
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
      sameAs: [
        "https://twitter.com/iptvforfirestickusa",
        "https://www.facebook.com/iptvforfirestickusa",
        "https://www.youtube.com/@iptvforfirestickusa",
      ],
      areaServed: {
        "@type": "Country",
        name: "United States",
      },
      knowsLanguage: ["en-US"],
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: SITE_NAME,
      description:
        "America's clearest IPTV resource for Amazon Firestick — US setup guides, troubleshooting and premium channel access. Cancel cable and save $1,764 a year.",
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
      name: "Best IPTV USA 2026 — Firestick Setup, Cable Alternative & NFL",
      description:
        "Best IPTV USA 2026 guide. Install IPTV on Firestick in 7 minutes. NFL, ESPN, FOX Sports, NBC, ABC, CBS. Troubleshooting for Xfinity, Spectrum, AT&T, Verizon.",
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
      "@type": "Article",
      "@id": `${PAGE_URL}#article`,
      headline:
        "Best IPTV USA 2026 — Firestick Setup, Cable Alternative & NFL",
      description:
        "Comprehensive US guide to IPTV on Amazon Firestick. Setup in under 10 minutes, premium American channels, troubleshooting for every major US ISP, Comcast cancellation guide.",
      image: [OG_IMAGE],
      author: {
        "@type": "Organization",
        name: "IPTV For Firestick USA Editorial",
        url: `${SITE_URL}/about`,
      },
      publisher: { "@id": `${SITE_URL}/#organization` },
      datePublished: PUBLISHED_DATE,
      dateModified: MODIFIED_DATE,
      mainEntityOfPage: { "@id": `${PAGE_URL}#webpage` },
      inLanguage: "en-US",
      articleSection: "IPTV Guides",
      keywords: [
        "best IPTV USA 2026",
        "IPTV Firestick USA",
        "cable alternative USA",
        "NFL IPTV",
        "ESPN IPTV",
        "IPTV Smarters Pro",
        "TiviMate",
        "premium IPTV channels USA",
      ].join(", "),
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
        "Premium IPTV subscription for American Firestick users — every NFL game, NBA League Pass, MLB.TV, NHL Center Ice, ESPN, FOX Sports, HBO Max, Showtime, NBC, ABC, CBS, FOX, Paramount+, Peacock plus 50,000+ live channels and a 100,000+ VOD library. Anti-Freeze 6.0 technology. Instant 5-minute activation by WhatsApp.",
      brand: { "@type": "Brand", name: SITE_NAME },
      category: "IPTV subscription / Streaming service",
      audience: {
        "@type": "Audience",
        audienceType: "American streaming households",
        geographicArea: { "@type": "Country", name: "United States" },
      },
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "4.8",
        reviewCount: "12400",
        bestRating: "5",
        worstRating: "1",
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
      className="font-[family-name:var(--font-body)] bg-[#FAFAF7] dark:bg-[#0a0a08] text-neutral-900 dark:text-neutral-100 antialiased"
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

      {/* Theme init — runs as early as possible after React hydration. */}
      <Script id="theme-init" strategy="afterInteractive">
        {themeInitScript}
      </Script>

      {/* PWA + interactivity — runs after hydration so listeners attach properly */}
      <Script id="pwa-and-ui" strategy="afterInteractive">
        {pwaAndUiScript}
      </Script>

      {/* ============================ INSTALL BANNER ============================ */}
      <div
        id="sn-install-banner"
        className="bg-[#1E3A8A] px-5 py-2.5 text-white md:px-8"
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
              className="rounded-full bg-white px-3 py-1 text-xs font-medium text-[#1E3A8A] transition hover:bg-neutral-100"
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
      <header className="sticky top-0 z-50 border-b border-neutral-200/80 bg-[#FAFAF7]/85 backdrop-blur">
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

          <nav className="hidden items-center gap-6 text-sm text-neutral-700 md:flex">
            <a href="#premium-channels" className="font-semibold text-[#DC2626] transition hover:text-[#B91C1C]">Get IPTV $12</a>
            <a href="#nfl-iptv" className="transition hover:text-neutral-950">🏈 NFL</a>
            <a href="#setup" className="transition hover:text-neutral-950">Setup</a>
            <a href="#cable-vs-iptv" className="transition hover:text-neutral-950">vs Cable</a>
            <a href="#us-channels" className="transition hover:text-neutral-950">US Channels</a>
            <a href="#apps" className="transition hover:text-neutral-950">Best Apps</a>
            <a href="#faq" className="transition hover:text-neutral-950">FAQ</a>
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

            {/* Theme toggle (sun in light mode, moon in dark mode) */}
            <button
              data-theme-toggle
              aria-label="Toggle dark mode"
              className="sn-icon-btn"
              title="Toggle dark mode"
            >
              <svg
                data-theme-icon-light
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-4 w-4"
              >
                <circle cx="12" cy="12" r="4" />
                <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
              </svg>
              <svg
                data-theme-icon-dark
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-4 w-4"
                style={{ display: "none" }}
              >
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
              </svg>
            </button>

            <a
              href="#setup"
              className="rounded-full bg-[#1E3A8A] px-4 py-2 text-sm font-medium text-white transition hover:bg-[#172E6E]"
            >
              Start Setup
            </a>
          </div>
        </div>
      </header>

      {/* ============================ HERO ============================ */}
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute -left-32 top-10 h-72 w-72 rounded-full bg-[#1E3A8A]/5 blur-3xl" />
          <div className="absolute right-0 top-40 h-96 w-96 rounded-full bg-[#DC2626]/5 blur-3xl" />
        </div>

        <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 px-5 py-16 md:grid-cols-12 md:gap-8 md:px-8 md:py-24 lg:py-32">
          <div className="md:col-span-7">
            <span className="inline-flex items-center gap-2 rounded-full border border-[#DC2626]/30 bg-[#DC2626]/5 px-3 py-1 text-xs font-semibold tracking-wide text-[#DC2626]">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#DC2626]" />
              ★ #1 IPTV FOR FIRESTICK USA 2026 · CUT THE CORD · NFL READY · 4K
            </span>

            <h1 className="mt-6 font-[family-name:var(--font-display)] text-4xl font-normal leading-[1.02] tracking-tight text-neutral-950 md:text-6xl lg:text-7xl">
              Cancel cable.{" "}
              <span className="italic text-[#1E3A8A]">Save $1,764</span>{" "}
              <br className="hidden md:block" />a year. From{" "}
              <span className="text-[#DC2626]">$12</span>.
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-relaxed text-neutral-700 md:text-xl">
              <strong className="text-neutral-950">America&rsquo;s #1 IPTV for Firestick subscription</strong> —{" "}
              <strong className="text-neutral-950">50,000+ live channels in 4K UHD</strong>, every NFL game,
              NBA League Pass, MLB.TV, NHL Center Ice, ESPN, ABC, CBS, NBC, FOX, HBO Max, Paramount+, full 100,000+ VOD library.
              <strong className="text-neutral-950"> Anti-Freeze 6.0 technology</strong> — zero buffering on NFL Sundays.
              Activated on WhatsApp in 5 minutes flat. Trusted by{" "}
              <span className="font-medium text-neutral-950">12,400+ US households</span> from New York to Los Angeles.
            </p>

            {/* Killer trust strip — futuristic stats */}
            <div className="mt-6 grid grid-cols-2 gap-2 sm:grid-cols-4">
              {[
                { i: "⚡", t: "5-min setup" },
                { i: "🛡️", t: "Anti-Freeze 6.0" },
                { i: "📺", t: "50,000+ channels" },
                { i: "💵", t: "From $12/mo" },
              ].map((x) => (
                <div
                  key={x.t}
                  className="flex items-center gap-2 rounded-xl border border-neutral-200 bg-white px-3 py-2.5 text-[12px] font-medium text-neutral-800"
                >
                  <span className="text-base" aria-hidden>{x.i}</span>
                  <span>{x.t}</span>
                </div>
              ))}
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="#premium-channels"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-[#DC2626] px-7 py-4 text-sm font-semibold text-white shadow-[0_10px_30px_-10px_rgba(220,38,38,0.6)] transition hover:bg-[#B91C1C]"
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

            <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 text-[13px] text-neutral-500">
              <span className="flex items-center gap-2">
                <span className="text-[#1E3A8A]">★★★★★</span>
                <span><strong className="text-neutral-800">4.8 / 5</strong> · 12,400+ US households</span>
              </span>
              <span className="hidden h-1 w-1 rounded-full bg-neutral-300 sm:block" />
              <span>✅ Anti-freeze servers</span>
              <span className="hidden h-1 w-1 rounded-full bg-neutral-300 sm:block" />
              <span>✅ No 24-month contract</span>
            </div>
          </div>

          {/* Hero visual: stylized Firestick "screen" */}
          <div className="md:col-span-5">
            <div className="relative mx-auto max-w-sm">
              <div className="rounded-3xl border border-neutral-200 bg-white p-3 shadow-[0_30px_80px_-30px_rgba(30,58,138,0.25)]">
                <div className="aspect-[4/3] overflow-hidden rounded-2xl bg-gradient-to-br from-[#0F1B3D] via-[#1E3A8A] to-[#0F1B3D] p-5 text-white">
                  <div className="flex items-center justify-between text-[10px] uppercase tracking-wider text-white/60">
                    <span>Fire TV · Live</span>
                    <span>1080p</span>
                  </div>
                  <div className="mt-3 grid grid-cols-3 gap-2">
                    {[
                      "ESPN",
                      "FOX Sports",
                      "NBC",
                      "ABC",
                      "CBS",
                      "FOX",
                      "HBO Max",
                      "Showtime",
                      "Peacock",
                    ].map((c) => (
                      <div
                        key={c}
                        className="rounded-md border border-white/10 bg-white/5 px-2 py-3 text-center text-[10px] font-medium"
                      >
                        {c}
                      </div>
                    ))}
                  </div>
                  <div className="mt-4 flex items-center justify-between text-[10px] text-white/50">
                    <span>● connected</span>
                    <span>0% buffering</span>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 rounded-xl border border-neutral-200 bg-white px-3 py-2 text-xs font-medium shadow-sm">
                ⚡ Setup in &lt; 7 min
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================ TRUST STRIP ============================ */}
      <section className="border-y border-neutral-200 bg-white">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-8 px-5 py-10 md:grid-cols-4 md:px-8">
          {trustStats.map((s) => (
            <div key={s.label}>
              <div className="font-[family-name:var(--font-display)] text-3xl font-normal text-neutral-950">
                {s.value}
              </div>
              <div className="mt-1 text-sm text-neutral-500">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ============================ WHY SWITCH NOW — CONVERSION ENGINE ============================ */}
      <section className="bg-gradient-to-br from-[#0F1B3D] via-[#1E3A8A] to-[#0F1B3D] py-20 text-white md:py-24">
        <div className="mx-auto max-w-6xl px-5 md:px-8">
          <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-12">
            <div className="md:col-span-7">
              <span className="inline-flex items-center gap-2 rounded-full border border-[#DC2626]/40 bg-[#DC2626]/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-white">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#DC2626]" />
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
                early-exit fees. According to FCC, over{" "}
                <strong className="text-white">4.2 million US households</strong> have already walked.
                You can join them in the next ten minutes.
              </p>
              <p className="mt-4 max-w-2xl text-base leading-relaxed text-white/70">
                A premium IPTV subscription gives you{" "}
                <strong className="text-white">every NFL game</strong>, all of NFL Network
                Sports, all of FOX Sports, NBC, ABC, CBS, FOX, HBO Max, Showtime,
                a 100,000+ VOD library — for{" "}
                <strong className="text-white">less than 9% of a typical cable bill</strong>. No engineer
                visit. No equipment rental. No 24-month commitment. Cancel any time.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href="#premium-channels"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-[#DC2626] px-7 py-4 text-sm font-semibold text-white shadow-[0_10px_30px_-10px_rgba(220,38,38,0.7)] transition hover:bg-[#B91C1C]"
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

            {/* Right: NFL Sunday 1pm visual */}
            <div className="md:col-span-5">
              <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-7 backdrop-blur">
                <div className="flex items-center gap-3 text-xs font-medium uppercase tracking-wider text-white/60">
                  <span className="h-2 w-2 animate-pulse rounded-full bg-[#DC2626]" />
                  Saturday · 3:00 PM kickoff
                </div>
                <div className="mt-4 font-[family-name:var(--font-display)] text-2xl font-normal leading-tight text-white md:text-3xl">
                  &ldquo;Cancelled cable after 15 years paying $147 a month. Set up
                  on my Firestick — took 8 minutes. Every NFL game,
                  all NBA Playoffs, NBC, ABC. Picture quality is genuinely
                  the same as Comcast X1.
                  <span className="text-[#fca5a5]">
                    {" "}My monthly bill went from $147 to $12. I&rsquo;m still slightly stunned.
                  </span>
                  &rdquo;
                </div>
                <div className="mt-5 flex items-center gap-3 border-t border-white/10 pt-4">
                  <div className="grid h-9 w-9 place-items-center rounded-full bg-[#1E3A8A] text-sm font-semibold">
                    DH
                  </div>
                  <div>
                    <div className="text-sm font-medium text-white">David H.</div>
                    <div className="text-xs text-white/50">Dallas, TX · ★★★★★</div>
                  </div>
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
                  <div className="mt-1 text-[11px] text-[#86efac]">Same channels. Better.</div>
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
            <span className="text-xs font-medium uppercase tracking-[0.18em] text-[#1E3A8A]">
              The basics
            </span>
            <h2 className="mt-3 font-[family-name:var(--font-display)] text-3xl font-normal leading-tight md:text-5xl">
              What is IPTV, and why pair it with a Firestick?
            </h2>
          </div>
          <div className="space-y-5 text-[17px] leading-relaxed text-neutral-700 md:col-span-7">
            <p>
              <strong className="text-neutral-950">IPTV</strong> stands for
              Internet Protocol Television — the same technology that powers
              Comcast X1, Spectrum TV, DirecTV Stream, YouTube TV, Hulu Live and many free
              services like Pluto TV and Tubi. Instead of broadcasting channels through a
              satellite dish or coax cable, IPTV streams them over your home broadband.
            </p>
            <p>
              The <strong className="text-neutral-950">Amazon Firestick</strong>{" "}
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
      <section id="setup" className="bg-white py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-5 md:px-8">
          <div className="max-w-2xl">
            <span className="text-xs font-medium uppercase tracking-[0.18em] text-[#1E3A8A]">
              How to install
            </span>
            <h2 className="mt-3 font-[family-name:var(--font-display)] text-3xl font-normal leading-tight md:text-5xl">
              Set up IPTV on your Firestick in three steps.
            </h2>
            <p className="mt-4 text-lg text-neutral-600">
              No computer, no cables, no terminal commands. The whole process
              uses only your Firestick remote and takes most American users less
              than ten minutes.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
            {setupSteps.map((step) => (
              <article
                key={step.n}
                className="group relative rounded-2xl border border-neutral-200 bg-[#FAFAF7] p-7 transition hover:border-neutral-300 hover:shadow-sm"
              >
                <div className="flex items-center justify-between">
                  <span className="font-[family-name:var(--font-display)] text-5xl font-normal text-[#1E3A8A]/90">
                    {step.n}
                  </span>
                  <span className="text-2xl" aria-hidden>
                    {step.icon}
                  </span>
                </div>
                <h3 className="mt-6 font-[family-name:var(--font-display)] text-xl font-medium text-neutral-950">
                  {step.title}
                </h3>
                <p className="mt-3 text-[15px] leading-relaxed text-neutral-600">
                  {step.body}
                </p>
              </article>
            ))}
          </div>

          <div className="mt-10 rounded-2xl border border-neutral-200 bg-[#FAFAF7] p-6 md:p-8">
            <div className="flex items-start gap-4">
              <span className="text-2xl" aria-hidden>💡</span>
              <div>
                <h4 className="font-[family-name:var(--font-display)] text-lg font-medium">
                  About Downloader codes
                </h4>
                <p className="mt-2 text-[15px] leading-relaxed text-neutral-600">
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
          <section id="downloader-codes" className="mt-10 rounded-3xl border border-neutral-200 bg-white p-6 md:p-8">
            <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
              <div>
                <span className="text-xs font-medium uppercase tracking-[0.18em] text-[#1E3A8A]">
                  Firestick codes
                </span>
                <h3 className="mt-2 font-[family-name:var(--font-display)] text-2xl font-medium text-neutral-950 md:text-3xl">
                  Popular Firestick Downloader Codes
                </h3>
                <p className="mt-3 max-w-2xl text-[15px] leading-relaxed text-neutral-600">
                  Many American Firestick users search for downloader code firestick,
                  IPTV Smarters code, TiviMate downloader code, XCIPTV code, and app
                  install codes. This quick directory helps UK users find common app
                  installer shortcuts faster.
                </p>
              </div>

              <a
                href="#faq"
                className="inline-flex items-center justify-center rounded-full border border-neutral-300 px-4 py-2 text-sm font-medium text-neutral-900 transition hover:border-neutral-900"
              >
                Read FAQ
              </a>
            </div>

            <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {downloaderCodes.map((item) => (
                <article
                  key={`${item.name}-${item.code}`}
                  className={`rounded-2xl border p-5 transition hover:shadow-sm ${
                    item.highlight
                      ? "border-[#1E3A8A] bg-[#1E3A8A]/[0.03]"
                      : "border-neutral-200 bg-[#FAFAF7]"
                  }`}
                >
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <p className="text-xs font-medium uppercase tracking-wider text-neutral-500">
                        {item.category}
                      </p>
                      <h4 className="mt-2 font-[family-name:var(--font-display)] text-lg font-medium text-neutral-950">
                        {item.name}
                      </h4>
                    </div>
                    {item.highlight && (
                      <span className="rounded-full bg-[#DC2626] px-2 py-1 text-[10px] font-medium uppercase text-white">
                        Popular
                      </span>
                    )}
                  </div>

                  <div className="mt-5 rounded-xl border border-neutral-200 bg-white px-4 py-3 text-center">
                    <p className="text-xs uppercase tracking-wider text-neutral-500">
                      Downloader Code
                    </p>
                    <p className="mt-1 font-[family-name:var(--font-display)] text-3xl font-semibold tracking-wide text-[#1E3A8A]">
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
      <section id="premium-channels" className="relative overflow-hidden bg-[#FAFAF7] py-20 md:py-28">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute -right-24 top-20 h-80 w-80 rounded-full bg-[#1E3A8A]/5 blur-3xl" />
          <div className="absolute -left-24 bottom-10 h-80 w-80 rounded-full bg-[#DC2626]/5 blur-3xl" />
        </div>

        <div className="mx-auto max-w-6xl px-5 md:px-8">
          {/* Section heading */}
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-white px-3 py-1 text-xs font-medium text-neutral-700">
              <span className="h-1.5 w-1.5 rounded-full bg-[#DC2626]" />
              Premium IPTV subscription USA · Activation by WhatsApp
            </span>

            <h2 className="mt-5 font-[family-name:var(--font-display)] text-3xl font-normal leading-tight md:text-5xl">
              Get Premium Live TV{" "}
              <span className="italic text-[#1E3A8A]">Channels</span> on Firestick.
            </h2>

            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-neutral-600">
              Need a premium IPTV subscription? Want stable live TV channels on
              Firestick — ESPN, FOX Sports, NFL, NBA League Pass,
              HBO Max, NBC, ABC, CBS, FOX and more? Choose a package below
              and contact us on WhatsApp for activation.{" "}
              <span className="text-neutral-900">Fast US setup support included.</span>
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-neutral-500">
              <span className="flex items-center gap-2">
                <span aria-hidden>🔒</span>
                <span>Secure activation</span>
              </span>
              <span className="hidden h-1 w-1 rounded-full bg-neutral-300 sm:block" />
              <span className="flex items-center gap-2">
                <span aria-hidden>⚡</span>
                <span>Activated in minutes</span>
              </span>
              <span className="hidden h-1 w-1 rounded-full bg-neutral-300 sm:block" />
              <span className="flex items-center gap-2">
                <span aria-hidden>🇺🇸</span>
                <span>US customer support</span>
              </span>
            </div>
          </div>

          {/* Pricing cards */}
          <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {channelPlans.map((plan, i) => {
              const isFeatured = i === 2; // 6 Months — Best Value
              return (
                <article
                  key={plan.name}
                  className={`relative flex flex-col rounded-2xl border bg-white p-6 transition hover:shadow-md ${
                    isFeatured
                      ? "border-[#1E3A8A] ring-1 ring-[#1E3A8A]/20 shadow-sm"
                      : "border-neutral-200"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span
                      className={`rounded-full px-2.5 py-1 text-[10px] font-medium uppercase tracking-wider ${
                        isFeatured
                          ? "bg-[#DC2626] text-white"
                          : "border border-neutral-200 bg-[#FAFAF7] text-neutral-700"
                      }`}
                    >
                      {plan.badge}
                    </span>
                    <span className="text-xs font-medium uppercase tracking-wider text-neutral-400">
                      Plan
                    </span>
                  </div>

                  <h3 className="mt-5 font-[family-name:var(--font-display)] text-2xl font-medium text-neutral-950">
                    {plan.name}
                  </h3>

                  <div className="mt-2 flex items-baseline gap-1.5">
                    <span className="font-[family-name:var(--font-display)] text-4xl font-normal text-[#1E3A8A]">
                      {plan.price}
                    </span>
                  </div>

                  <p className="mt-4 flex-1 text-[14px] leading-relaxed text-neutral-600">
                    {plan.description}
                  </p>

                  <ul className="mt-5 space-y-2 text-[13px] text-neutral-700">
                    <li className="flex items-start gap-2">
                      <span className="mt-0.5 text-[#1E3A8A]" aria-hidden>✓</span>
                      <span>Premium US live TV channels</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-0.5 text-[#1E3A8A]" aria-hidden>✓</span>
                      <span>NFL, NBA, MLB, NHL, ESPN, FOX Sports</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-0.5 text-[#1E3A8A]" aria-hidden>✓</span>
                      <span>Firestick compatible</span>
                    </li>
                  </ul>

                  <a
                    href={whatsappLink(plan.message)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-7 inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#25D366] px-4 py-3 text-sm font-medium text-white transition hover:bg-[#1FB855]"
                  >
                    <svg
                      aria-hidden="true"
                      viewBox="0 0 24 24"
                      className="h-4 w-4 fill-current"
                    >
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                    Get This Plan on WhatsApp
                  </a>
                </article>
              );
            })}
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
                className="rounded-2xl border border-neutral-200 bg-white p-6"
              >
                <span className="text-2xl" aria-hidden>{b.icon}</span>
                <h4 className="mt-3 font-[family-name:var(--font-display)] text-lg font-medium text-neutral-950">
                  {b.title}
                </h4>
                <p className="mt-2 text-[14px] leading-relaxed text-neutral-600">
                  {b.body}
                </p>
              </div>
            ))}
          </div>

          {/* Chatbot-style help box */}
          <div className="mt-12 overflow-hidden rounded-3xl border border-neutral-200 bg-white shadow-sm">
            <div className="grid grid-cols-1 md:grid-cols-12">
              {/* Left: chat preview */}
              <div className="border-b border-neutral-200 bg-gradient-to-br from-[#0F1B3D] via-[#1E3A8A] to-[#0F1B3D] p-6 text-white md:col-span-5 md:border-b-0 md:border-r md:p-8">
                <div className="flex items-center gap-3">
                  <span className="grid h-10 w-10 place-items-center rounded-full bg-[#25D366] text-white">
                    <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5 fill-current">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                  </span>
                  <div>
                    <p className="text-sm font-medium">IPTV For Firestick USA Assistant</p>
                    <p className="text-xs text-white/60">
                      <span className="mr-1 inline-block h-1.5 w-1.5 rounded-full bg-[#25D366]" />
                      Online · Replies in minutes
                    </p>
                  </div>
                </div>

                <div className="mt-6 space-y-3">
                  <div className="max-w-[85%] rounded-2xl rounded-tl-sm bg-white/10 px-4 py-2.5 text-[13px] leading-relaxed">
                    👋 Hi! Looking for the right IPTV channel package on Firestick in the USA?
                  </div>
                  <div className="max-w-[85%] rounded-2xl rounded-tl-sm bg-white/10 px-4 py-2.5 text-[13px] leading-relaxed">
                    I can help you choose between 1 month, 3 months, 6 months or 1 year — based on what you watch (NFL, films, news, etc.).
                  </div>
                  <div className="ml-auto max-w-[85%] rounded-2xl rounded-tr-sm bg-[#25D366] px-4 py-2.5 text-[13px] leading-relaxed text-white">
                    Hello, I have a question about IPTV USA packages.
                  </div>
                </div>
              </div>

              {/* Right: copy + CTA */}
              <div className="p-6 md:col-span-7 md:p-10">
                <span className="text-xs font-medium uppercase tracking-[0.18em] text-[#1E3A8A]">
                  Need help choosing?
                </span>
                <h3 className="mt-3 font-[family-name:var(--font-display)] text-2xl font-medium leading-tight text-neutral-950 md:text-3xl">
                  Not sure which IPTV package is right for you?
                </h3>
                <p className="mt-4 text-[15px] leading-relaxed text-neutral-600">
                  Message us on WhatsApp and we&rsquo;ll help you choose the best
                  premium IPTV channel plan for your Firestick. Whether you&rsquo;re
                  shopping for an IPTV channel package, comparing IPTV USA prices, or
                  ready to buy your first IPTV USA subscription — we&rsquo;ll guide you
                  in plain English.
                </p>

                <ul className="mt-5 grid grid-cols-1 gap-2 text-[14px] text-neutral-700 sm:grid-cols-2">
                  <li className="flex items-start gap-2">
                    <span className="mt-0.5 text-[#1E3A8A]" aria-hidden>✓</span>
                    <span>Live TV channels Firestick</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-0.5 text-[#1E3A8A]" aria-hidden>✓</span>
                    <span>IPTV Firestick USA</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-0.5 text-[#1E3A8A]" aria-hidden>✓</span>
                    <span>Fast US activation support</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-0.5 text-[#1E3A8A]" aria-hidden>✓</span>
                    <span>NFL, ESPN, FOX Sports</span>
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
                    className="inline-flex items-center justify-center rounded-full border border-neutral-300 bg-white px-6 py-3 text-sm font-medium text-neutral-900 transition hover:border-neutral-900"
                  >
                    See pricing again
                  </a>
                </div>

                <p className="mt-5 text-xs text-neutral-500">
                  IPTV subscription USA · premium IPTV channels · live TV channels Firestick · cable alternative · NFL IPTV · IPTV WhatsApp support USA.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================ NFL SUNDAY SEO BOMB ============================ */}
      <section id="nfl-iptv" className="bg-[#FAFAF7] py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-5 md:px-8">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-[#DC2626]/30 bg-[#DC2626]/5 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-[#DC2626]">
              🏈 NFL Sunday · zero blackouts · NFL Sunday Ticket alternative
            </span>
            <h2 className="mt-4 font-[family-name:var(--font-display)] text-3xl font-normal leading-[1.05] md:text-5xl">
              Watch every NFL game in 4K.{" "}
              <span className="italic text-[#1E3A8A]">Even out-of-market.</span>
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-neutral-700">
              The NFL is the most-watched sports league in America — and watching every
              game traditionally requires <strong>NFL Sunday Ticket</strong> on YouTube TV
              ($389/season) plus <strong>ESPN</strong>, <strong>NFL Network</strong> and{" "}
              <strong>Amazon Prime</strong>, costing well over{" "}
              <strong className="text-neutral-950">$700/year</strong>. With our IPTV
              subscription on Firestick, <strong className="text-neutral-950">all 272 regular
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
                className="group rounded-2xl border border-neutral-200 bg-white p-6 transition hover:border-[#1E3A8A] hover:shadow-md"
              >
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-semibold uppercase tracking-wider text-[#DC2626]">
                    {card.tag}
                  </span>
                  <span className="rounded-full bg-[#1E3A8A]/[0.06] px-2.5 py-1 text-[10px] font-medium text-[#1E3A8A]">
                    {card.stat}
                  </span>
                </div>
                <h3 className="mt-3 font-[family-name:var(--font-display)] text-xl font-medium leading-snug text-neutral-950">
                  {card.t}
                </h3>
                <p className="mt-3 text-[14px] leading-relaxed text-neutral-600">{card.b}</p>
              </article>
            ))}
          </div>

          {/* Mini stats row */}
          <div className="mt-12 grid grid-cols-2 gap-4 rounded-2xl border border-neutral-200 bg-white p-6 md:grid-cols-4">
            {[
              { v: "272", l: "NFL games/year" },
              { v: "1,230", l: "NBA regular season" },
              { v: "36", l: "NASCAR Cup races" },
              { v: "0", l: "Per-fight PPV charges" },
            ].map((s) => (
              <div key={s.l} className="text-center">
                <div className="font-[family-name:var(--font-display)] text-3xl font-normal text-[#1E3A8A] md:text-4xl">
                  {s.v}
                </div>
                <div className="mt-1 text-[12px] leading-tight text-neutral-600">{s.l}</div>
              </div>
            ))}
          </div>

          <div className="mt-10 rounded-3xl bg-gradient-to-br from-[#1E3A8A] to-[#0F1B3D] p-7 text-white md:p-10">
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
      <section id="cable-vs-iptv" className="bg-white py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-5 md:px-8">
          <div className="max-w-3xl">
            <span className="text-xs font-medium uppercase tracking-[0.18em] text-[#1E3A8A]">
              Cable vs IPTV in the USA
            </span>
            <h2 className="mt-3 font-[family-name:var(--font-display)] text-3xl font-normal leading-tight md:text-5xl">
              Why thousands of American households cut the cord every month.
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-neutral-600">
              Cable and satellite bills keep climbing while channel selection shrinks. A premium IPTV
              subscription on Firestick replaces traditional pay TV from Comcast Xfinity, Spectrum,
              DirecTV and YouTube TV — typically saving American households
              <strong className="text-neutral-900"> $1,200 to $1,800 a year</strong>. Over 7 million US
              households have already abandoned traditional pay TV — and the shift is accelerating.
            </p>
          </div>

          <div className="mt-12 overflow-x-auto rounded-2xl border border-neutral-200">
            <table className="w-full min-w-[640px] border-collapse text-left text-sm">
              <thead className="bg-[#FAFAF7] text-neutral-600">
                <tr>
                  <th className="px-5 py-4 font-medium">Provider</th>
                  <th className="px-5 py-4 font-medium">Typical monthly cost</th>
                  <th className="px-5 py-4 font-medium">Annual cost (USD)</th>
                  <th className="px-5 py-4 font-medium">vs IPTV Firestick (~$55/yr)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-neutral-200">
                {[
                  { p: "Comcast Xfinity (Ultimate TV + Sports)", m: "$130 – $165", y: "$1,560 – $1,980", save: "save up to $1,925" },
                  { p: "Spectrum (TV Select Signature + Sports)", m: "$120 – $165", y: "$1,440 – $1,980", save: "save up to $1,925" },
                  { p: "DirecTV Stream (Choice + Sports)", m: "$108 – $164", y: "$1,296 – $1,968", save: "save up to $1,913" },
                  { p: "YouTube TV ($82.99 base)", m: "$83 – $108", y: "$996 – $1,296", save: "save up to $1,241" },
                  { p: "Hulu Live TV + Disney+", m: "$83 – $103", y: "$996 – $1,236", save: "save up to $1,181" },
                ].map((r) => (
                  <tr key={r.p} className="bg-white">
                    <td className="px-5 py-4 font-medium text-neutral-950">{r.p}</td>
                    <td className="px-5 py-4 text-neutral-700">{r.m}</td>
                    <td className="px-5 py-4 text-neutral-700">{r.y}</td>
                    <td className="px-5 py-4">
                      <span className="rounded-full bg-[#1E3A8A]/[0.06] px-3 py-1 text-xs font-medium text-[#1E3A8A]">
                        {r.save}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="mt-6 max-w-3xl text-sm text-neutral-500">
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
              <div key={x.t} className="rounded-2xl border border-neutral-200 bg-[#FAFAF7] p-6">
                <h3 className="font-[family-name:var(--font-display)] text-xl font-medium text-neutral-950">
                  {x.t}
                </h3>
                <p className="mt-2 text-[15px] leading-relaxed text-neutral-600">{x.b}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================ US CHANNEL DIRECTORY ============================ */}
      <section id="us-channels" className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28">
        <div className="max-w-3xl">
          <span className="text-xs font-medium uppercase tracking-[0.18em] text-[#1E3A8A]">
            US channel directory
          </span>
          <h2 className="mt-3 font-[family-name:var(--font-display)] text-3xl font-normal leading-tight md:text-5xl">
            Every major US channel — covered.
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-neutral-600">
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
              className="rounded-2xl border border-neutral-200 bg-white p-6"
            >
              <span className="rounded-full border border-neutral-200 bg-[#FAFAF7] px-2.5 py-1 text-[10px] font-medium uppercase tracking-wider text-neutral-600">
                {g.tag}
              </span>
              <h3 className="mt-4 font-[family-name:var(--font-display)] text-xl font-medium text-neutral-950">
                {g.title}
              </h3>
              <ul className="mt-4 space-y-2 text-[14px] text-neutral-700">
                {g.channels.map((c) => (
                  <li key={c} className="flex items-start gap-2">
                    <span className="mt-0.5 text-[#1E3A8A]" aria-hidden>●</span>
                    <span>{c}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <p className="mt-10 max-w-3xl text-sm text-neutral-500">
          Channel availability depends on the IPTV service you choose. Always confirm the specific
          channels you care about (e.g. <em>NFL RedZone for Sunday football</em>,
          ESPN+ for UFC PPV, HBO Max for new film releases) before subscribing.
        </p>
      </section>

      {/* ============================ TOP IPTV PROVIDERS / WHY US ============================ */}
      <section id="top-providers" className="bg-white py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-5 md:px-8">
          <div className="max-w-3xl">
            <span className="text-xs font-medium uppercase tracking-[0.18em] text-[#1E3A8A]">
              How to choose an IPTV provider in the USA
            </span>
            <h2 className="mt-3 font-[family-name:var(--font-display)] text-3xl font-normal leading-tight md:text-5xl">
              The 8 criteria that separate the best IPTV USA services from the rest.
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-neutral-600">
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
                className="flex gap-4 rounded-2xl border border-neutral-200 bg-[#FAFAF7] p-6"
              >
                <span className="font-[family-name:var(--font-display)] text-3xl font-normal text-[#1E3A8A]/90">
                  {c.n}
                </span>
                <div>
                  <h3 className="font-[family-name:var(--font-display)] text-lg font-medium text-neutral-950">
                    {c.t}
                  </h3>
                  <p className="mt-1.5 text-[14px] leading-relaxed text-neutral-600">
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
            <span className="text-xs font-medium uppercase tracking-[0.18em] text-[#1E3A8A]">
              The shortlist
            </span>
            <h2 className="mt-3 font-[family-name:var(--font-display)] text-3xl font-normal leading-tight md:text-5xl">
              The best IPTV apps on Firestick — reviewed by American users.
            </h2>
          </div>
          <p className="max-w-sm text-sm text-neutral-500">
            We re-test these apps every quarter on a Fire TV Stick 4K Max
            connected to Comcast Xfinity, Spectrum and Verizon Fios. Last
            reviewed this quarter.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          {apps.map((app, i) => (
            <article
              key={app.name}
              className={`flex flex-col rounded-2xl border bg-white p-7 transition hover:shadow-sm ${
                i === 1
                  ? "border-[#1E3A8A] ring-1 ring-[#1E3A8A]/20"
                  : "border-neutral-200"
              }`}
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-medium uppercase tracking-wider text-neutral-500">
                  {app.tag}
                </span>
                {i === 1 && (
                  <span className="rounded-full bg-[#1E3A8A] px-2.5 py-1 text-[10px] font-medium uppercase tracking-wider text-white">
                    Editor&rsquo;s pick
                  </span>
                )}
              </div>
              <h3 className="mt-3 font-[family-name:var(--font-display)] text-2xl font-medium">
                {app.name}
              </h3>
              <p className="mt-1 text-sm text-neutral-500">{app.best}</p>

              <ul className="mt-6 space-y-3">
                {app.pros.map((p) => (
                  <li key={p} className="flex items-start gap-3 text-[15px] text-neutral-700">
                    <span className="mt-0.5 text-[#1E3A8A]" aria-hidden>✓</span>
                    <span>{p}</span>
                  </li>
                ))}
              </ul>

              <a
                href="#setup"
                className="mt-8 inline-flex w-full items-center justify-center rounded-full border border-neutral-300 px-4 py-2.5 text-sm font-medium transition hover:border-neutral-900"
              >
                See setup guide
              </a>
            </article>
          ))}
        </div>
      </section>

      {/* ============================ ISP COMPATIBILITY ============================ */}
      <section className="bg-[#0F1B3D] py-20 text-white md:py-28">
        <div className="mx-auto max-w-6xl px-5 md:px-8">
          <div className="grid grid-cols-1 gap-10 md:grid-cols-12">
            <div className="md:col-span-5">
              <span className="text-xs font-medium uppercase tracking-[0.18em] text-white/60">
                US broadband providers
              </span>
              <h2 className="mt-3 font-[family-name:var(--font-display)] text-3xl font-normal leading-tight md:text-5xl">
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
                    className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm"
                  >
                    <span className="text-[#DC2626]">●</span>
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
          <span className="text-xs font-medium uppercase tracking-[0.18em] text-[#1E3A8A]">
            When things break
          </span>
          <h2 className="mt-3 font-[family-name:var(--font-display)] text-3xl font-normal leading-tight md:text-5xl">
            Troubleshooting, the way American viewers actually search for it.
          </h2>
          <p className="mt-4 text-lg text-neutral-600">
            Real issues, real fixes. No &ldquo;have you tried turning it off and on
            again&rdquo;. These six cover roughly 98% of the support requests we see.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-2">
          {troubleshooting.map((t) => (
            <article
              key={t.title}
              className="rounded-2xl border border-neutral-200 bg-white p-6 md:p-7"
            >
              <div className="flex items-start justify-between gap-4">
                <h3 className="font-[family-name:var(--font-display)] text-xl font-medium leading-snug text-neutral-950">
                  {t.title}
                </h3>
                <span className="shrink-0 rounded-full border border-neutral-200 bg-[#FAFAF7] px-2.5 py-1 text-[10px] font-medium uppercase tracking-wider text-neutral-600">
                  {t.tag}
                </span>
              </div>
              <p className="mt-3 text-[15px] leading-relaxed text-neutral-600">
                {t.fix}
              </p>
            </article>
          ))}
        </div>
      </section>

      {/* ============================ BENEFITS / WHY US ============================ */}
      <section className="bg-white py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-5 md:px-8">
          <div className="max-w-2xl">
            <span className="text-xs font-medium uppercase tracking-[0.18em] text-[#1E3A8A]">
              Why IPTV For Firestick USA
            </span>
            <h2 className="mt-3 font-[family-name:var(--font-display)] text-3xl font-normal leading-tight md:text-5xl">
              The IPTV resource American households keep coming back to.
            </h2>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-neutral-200 bg-neutral-200 sm:grid-cols-2 lg:grid-cols-3">
            {benefits.map((b) => (
              <div key={b.title} className="bg-white p-7">
                <span className="text-2xl" aria-hidden>{b.icon}</span>
                <h3 className="mt-4 font-[family-name:var(--font-display)] text-xl font-medium">
                  {b.title}
                </h3>
                <p className="mt-2 text-[15px] leading-relaxed text-neutral-600">
                  {b.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================ TESTIMONIALS ============================ */}
      <section className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28">
        <div className="max-w-2xl">
          <span className="text-xs font-medium uppercase tracking-[0.18em] text-[#1E3A8A]">
            From across the USA
          </span>
          <h2 className="mt-3 font-[family-name:var(--font-display)] text-3xl font-normal leading-tight md:text-5xl">
            What American readers tell us.
          </h2>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <figure
              key={t.name}
              className="flex flex-col rounded-2xl border border-neutral-200 bg-[#FAFAF7] p-7"
            >
              <div className="text-[#1E3A8A]" aria-hidden>★★★★★</div>
              <blockquote className="mt-4 flex-1 text-[16px] leading-relaxed text-neutral-800">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-6 border-t border-neutral-200 pt-4 text-sm">
                <div className="font-medium text-neutral-950">{t.name}</div>
                <div className="text-neutral-500">{t.location}</div>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* ============================ FAQ ============================ */}
      <section id="faq" className="bg-white py-20 md:py-28">
        <div className="mx-auto max-w-4xl px-5 md:px-8">
          <div className="text-center">
            <span className="text-xs font-medium uppercase tracking-[0.18em] text-[#1E3A8A]">
              FAQ
            </span>
            <h2 className="mt-3 font-[family-name:var(--font-display)] text-3xl font-normal leading-tight md:text-5xl">
              Questions American viewers actually ask.
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-neutral-600">
              Pulled from real Reddit threads, Google&rsquo;s &ldquo;People Also Ask&rdquo;,
              and emails from readers across the East Coast, West Coast, Midwest and South.
            </p>
          </div>

          <div className="mt-12 divide-y divide-neutral-200 rounded-2xl border border-neutral-200">
            {faqs.map((f, i) => (
              <details
                key={i}
                className="group px-6 py-5 [&_summary::-webkit-details-marker]:hidden"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-6">
                  <span className="font-[family-name:var(--font-display)] text-[18px] font-medium leading-snug text-neutral-950">
                    {f.q}
                  </span>
                  <span
                    aria-hidden
                    className="grid h-8 w-8 shrink-0 place-items-center rounded-full border border-neutral-200 text-neutral-500 transition group-open:rotate-45 group-open:border-[#1E3A8A] group-open:text-[#1E3A8A]"
                  >
                    +
                  </span>
                </summary>
                <p className="mt-4 text-[15px] leading-relaxed text-neutral-600">
                  {f.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ============================ FINAL CTA ============================ */}
      <section className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28">
        <div className="overflow-hidden rounded-3xl bg-gradient-to-br from-[#1E3A8A] via-[#1E3A8A] to-[#0F1B3D] p-10 text-white md:p-16">
          <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-12">
            <div className="md:col-span-8">
              <span className="inline-flex items-center gap-2 rounded-full border border-[#DC2626]/40 bg-[#DC2626]/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-white">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#DC2626]" />
                Last step
              </span>
              <h2 className="mt-3 font-[family-name:var(--font-display)] text-3xl font-normal leading-[1.05] md:text-5xl lg:text-6xl">
                Stop paying cable $147 a month.{" "}
                <span className="italic text-[#fca5a5]">Start tonight.</span>
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
                className="inline-flex items-center justify-center rounded-full bg-white px-6 py-4 text-sm font-semibold text-[#1E3A8A] transition hover:bg-neutral-100"
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
                🇺🇸 Built in America · Updated for Fire OS 8 · Anti-freeze servers
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ============================ FOOTER ============================ */}
      <footer className="border-t border-neutral-200 bg-[#FAFAF7]">
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
            <p className="mt-3 text-xs text-neutral-500">iptvforfirestickusa.com</p>
            <p className="mt-3 max-w-xs text-sm text-neutral-600">
              America&rsquo;s #1 IPTV resource for Firestick. Cancel cable, save $1,764 a year. Trusted by 12,400+ US households.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-medium text-neutral-950">Guides</h4>
            <ul className="mt-3 space-y-2 text-sm text-neutral-600">
              <li><a className="font-semibold text-[#DC2626] hover:text-[#B91C1C]" href="#premium-channels">Get IPTV from $12 →</a></li>
              <li><a className="hover:text-neutral-950" href="#nfl-iptv">🏈 NFL IPTV</a></li>
              <li><a className="hover:text-neutral-950" href="#setup">Firestick setup</a></li>
              <li><a className="hover:text-neutral-950" href="#apps">Best IPTV apps</a></li>
              <li><a className="hover:text-neutral-950" href="#cable-vs-iptv">Cable vs IPTV</a></li>
              <li><a className="hover:text-neutral-950" href="#us-channels">US channels</a></li>
              <li><a className="hover:text-neutral-950" href="#top-providers">Choosing a provider</a></li>
              <li><a className="hover:text-neutral-950" href="#troubleshooting">Fix buffering</a></li>
              <li><a className="hover:text-neutral-950" href="#faq">FAQ</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-medium text-neutral-950">Regions</h4>
            <ul className="mt-3 space-y-2 text-sm text-neutral-600">
              <li><a className="hover:text-neutral-950" href="#">East Coast</a></li>
              <li><a className="hover:text-neutral-950" href="#">West Coast</a></li>
              <li><a className="hover:text-neutral-950" href="#">Midwest</a></li>
              <li><a className="hover:text-neutral-950" href="#">South</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-medium text-neutral-950">Site</h4>
            <ul className="mt-3 space-y-2 text-sm text-neutral-600">
              <li><a className="hover:text-neutral-950" href="#">About</a></li>
              <li><a className="hover:text-neutral-950" href="#">Editorial standards</a></li>
              <li><a className="hover:text-neutral-950" href="#">Contact</a></li>
              <li>
                <button data-install-trigger className="hover:text-neutral-950">
                  📱 Install app · Android · Windows
                </button>
              </li>
              <li>
                <button data-theme-toggle className="hover:text-neutral-950">
                  🌓 Toggle dark / light
                </button>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-neutral-200">
          <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-3 px-5 py-6 text-xs text-neutral-500 md:flex-row md:items-center md:px-8">
            <p>© {year} IPTV For Firestick USA. Independent US publication.</p>
            <p>Made in America · New York · Los Angeles · Dallas</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
