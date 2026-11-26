export const SITE_URL = "https://iptvforfirestickusa.com";
export const SITE_NAME = "IPTV For Firestick USA";

/** Single WhatsApp for every brand. Do not split numbers. */
export const WHATSAPP_E164 =
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
  firestick: "Hi — IPTV Firestick USA + 24h trial. City + device:",
  faq: "Hi — IPTV USA question (trial / Firestick). City + device:",
  guide: "Hi — Firestick IPTV USA + trial. City + device:",
  trial: "Hi, I am interested in the USD 5 day pass. My Fire TV model and city:",
  day: "Hi, I am interested in the prepaid 24-hour pass at USD 5. Can you confirm my location and device?",
  plan1: "Hi, I am interested in one month at USD 15. Can you confirm my location and device?",
  plan12: "Hi, I am interested in one year at USD 65. Can you confirm my location and device?",
  refer: "Hi — referral: 1 extra month on the 12-month plan for me and a friend when they pay. Friend WhatsApp number:",
} as const;

export const PLANS = [
  { key: "day", name: "24-hour day pass", price: 5, months: 0, perMonth: "24 hours prepaid", badge: "One screen", prefill: WA_PREFILL.day },
  { key: "p1", name: "1 month", price: 15, months: 1, perMonth: "One month prepaid", badge: "One screen", prefill: WA_PREFILL.plan1 },
  { key: "p12", name: "1 year", price: 65, months: 12, perMonth: "One year prepaid", badge: "One screen", prefill: WA_PREFILL.plan12 },
] as const;

export const PRICING_PATH = "/#plans";
export const PRICING_HREF = `${SITE_URL}${PRICING_PATH}`;
export const GUIDE_PATH = "/blog/firestick-setup-usa";
export const GUIDE_URL = `${SITE_URL}${GUIDE_PATH}`;
export const LLMS_TXT_URL = `${SITE_URL}/llms.txt`;
export const LLMS_FULL_URL = `${SITE_URL}/llms-full.txt`;
