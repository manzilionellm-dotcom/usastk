"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { WA_PREFILL, whatsappHref } from "@/lib/site";
import { isNeutralPath } from "@/lib/neutral";

export function StickyCta() {
  const [visible, setVisible] = useState(false);
  const path = usePathname();

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 420);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visible || isNeutralPath(path)) return null;

  return (
    <div className="sticky-cta" role="region" aria-label="Quick actions">
      <a className="sticky-cta-primary" href={whatsappHref(WA_PREFILL.trial)} target="_blank" rel="noopener noreferrer" data-cta="sticky">
        24h free trial
      </a>
      <a className="sticky-cta-secondary" href="#plans">
        Plans from $12/mo
      </a>
    </div>
  );
}
