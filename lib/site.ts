export const SITE_URL = "https://iptvforfirestickusa.com";
export const SITE_NAME = "IPTV For Firestick USA";
export const WHATSAPP_E164 = "447307410512";
export const WHATSAPP_HREF_BASE = `https://wa.me/${WHATSAPP_E164}`;
export const OG_IMAGE = `${SITE_URL}/og-image.jpg`;

export function whatsappHref(message: string) {
  return `${WHATSAPP_HREF_BASE}?text=${encodeURIComponent(message)}`;
}

export const WA_PREFILL = {
  firestick:
    "Hi — IPTV Firestick USA + 24h trial. City + device:",
  faq: "Hi — IPTV USA question (trial / Firestick). City + device:",
  guide: "Hi — Firestick IPTV USA + trial. City + device:",
} as const;

export const PRICING_PATH = "/#premium-channels";
export const PRICING_HREF = `${SITE_URL}${PRICING_PATH}`;
export const GUIDE_PATH = "/blog/firestick-setup-usa";
export const GUIDE_URL = `${SITE_URL}${GUIDE_PATH}`;
export const LLMS_TXT_URL = `${SITE_URL}/llms.txt`;
export const LLMS_FULL_URL = `${SITE_URL}/llms-full.txt`;
