"use client";

import { useEffect } from "react";
import { trackWhatsAppClick } from "@/lib/track";

/** One listener for every wa.me link on the page. */
export function WaClickDelegate() {
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const el = (e.target as Element | null)?.closest?.(
        'a[href*="wa.me/"], a[href*="api.whatsapp.com/"]',
      ) as HTMLAnchorElement | null;
      if (!el) return;
      const placement = el.getAttribute("data-cta") || el.getAttribute("data-wa") || "link";
      trackWhatsAppClick(placement);
    };
    document.addEventListener("click", onClick, { capture: true });
    return () => document.removeEventListener("click", onClick, { capture: true });
  }, []);
  return null;
}
