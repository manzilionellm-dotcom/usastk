export const SITE_URL = "https://iptvforfirestickusa.com";
export const SITE_NAME = "IPTV For Firestick USA";

/** Single WhatsApp for every brand. Do not split numbers. */
export const WHATSAPP_E164 =
  process.env.NEXT_PUBLIC_WHATSAPP_USA ||
  process.env.NEXT_PUBLIC_WHATSAPP_PHONE ||
  "447307410512";

export const WHATSAPP_HREF_BASE = `https://wa.me/${WHATSAPP_E164}`;
export const OG_IMAGE = `${SITE_URL}/opengraph-image`;

export const GA4_ID = process.env.NEXT_PUBLIC_GA4_ID || "";
export const META_PIXEL_ID = process.env.NEXT_PUBLIC_META_PIXEL_ID || "";

export function whatsappHref(message: string, ref?: string) {
  const text = ref && !message.includes("Ref:") ? `${message} | Ref: ${ref}` : message;
  return `${WHATSAPP_HREF_BASE}?text=${encodeURIComponent(text)}`;
}

export const WA_PREFILL = {
  firestick: "24h trial IPTV Firestick USA. City + device",
  faq: "24h trial IPTV Firestick USA. City + device",
  guide: "24h trial IPTV Firestick USA. City + device",
  trial: "24h trial IPTV Firestick USA. City + device",
  plan1: "Hi — I want the 1 month IPTV USA plan for $12. City + device:",
  plan3: "Hi — I want the 3 month IPTV USA plan for $25. City + device:",
  plan6: "Hi — I want the 6 month IPTV USA plan for $30. City + device:",
  plan12: "Hi — I want the 1 year IPTV USA plan for $55. City + device:",
  refer: "Hi — referral: 1 extra month on the 12-month plan for me and a friend when they pay. Friend WhatsApp number:",
} as const;

export const PLANS = [
  { key: "p1", name: "1 Month", price: 12, months: 1, perMonth: "$12/mo", badge: "Start here", prefill: WA_PREFILL.plan1 },
  { key: "p3", name: "3 Months", price: 25, months: 3, perMonth: "$8.33/mo", badge: "Popular", prefill: WA_PREFILL.plan3 },
  { key: "p6", name: "6 Months", price: 30, months: 6, perMonth: "$5/mo", badge: "Best value", prefill: WA_PREFILL.plan6 },
  { key: "p12", name: "1 Year", price: 55, months: 12, perMonth: "$4.58/mo", badge: "Lowest monthly", prefill: WA_PREFILL.plan12 },
] as const;

export const PRICING_PATH = "/#plans";
export const PRICING_HREF = `${SITE_URL}${PRICING_PATH}`;
export const GUIDE_PATH = "/blog/firestick-setup-usa";
export const GUIDE_URL = `${SITE_URL}${GUIDE_PATH}`;
export const LLMS_TXT_URL = `${SITE_URL}/llms.txt`;
export const LLMS_FULL_URL = `${SITE_URL}/llms-full.txt`;
