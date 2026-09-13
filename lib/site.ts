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
  faq: "Hi — IPTV Firestick USA (trial / setup). City + device:",
} as const;
