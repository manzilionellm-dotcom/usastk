import { faqItems } from "@/lib/aio";

/** Shared Firestick FAQ — 10 questions from aio.config.json (published facts only). */
export const FAQ_TITLE = "IPTV Firestick USA FAQ";
export const FAQ_H1 = "FAQ — trial & setup";
export const FAQ_META =
  "IPTV Firestick USA FAQ: 24h trial, 7 MOTION setup, buffering, cable vs IPTV, sports, 4K/EPG. WhatsApp only — city + device.";

export const FAQ_BANK: { q: string; a: string }[] = faqItems();
