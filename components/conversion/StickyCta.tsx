"use client";

import { useEffect, useState } from "react";
import { WA_PREFILL, whatsappHref } from "@/lib/site";

export function StickyCta() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 420);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visible) return null;

  return (
    <div className="sticky-cta" role="region" aria-label="Quick actions">
      <a className="sticky-cta-primary" href={whatsappHref(WA_PREFILL.trial)} target="_blank" rel="noopener noreferrer">
        24h free trial
      </a>
      <a className="sticky-cta-secondary" href="#plans">
        Plans from $12/mo
      </a>
    </div>
  );
}
