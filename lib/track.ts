"use client";

import { CONSENT_KEY } from "@/components/conversion/CookieConsent";

export type WaPlacement =
  | "fab"
  | "sticky"
  | "hero"
  | "plan"
  | "header"
  | "footer"
  | "refer"
  | "device"
  | "city"
  | "guide"
  | "ops";

function consented(): boolean {
  try {
    return localStorage.getItem(CONSENT_KEY) === "accepted";
  } catch {
    return false;
  }
}

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    fbq?: (...args: unknown[]) => void;
    dataLayer?: unknown[];
  }
}

/** Fire only after cookie consent. Safe no-op otherwise. */
export function trackWhatsAppClick(placement: string, extra?: Record<string, string>) {
  if (typeof window === "undefined" || !consented()) return;

  const payload = {
    event_category: "conversion",
    placement,
    page: window.location.pathname,
    ...extra,
  };

  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ event: "whatsapp_click", ...payload });

  if (typeof window.gtag === "function") {
    window.gtag("event", "whatsapp_click", payload);
  }

  if (typeof window.fbq === "function") {
    window.fbq("track", "Contact");
    window.fbq("trackCustom", "WhatsAppClick", payload);
  }
}
