"use client";

import { useEffect, useState } from "react";

export const CONSENT_KEY = "usa-cookie-consent";
export const CONSENT_EVENT = "usa:consent";

export function CookieConsent() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    try {
      if (!localStorage.getItem(CONSENT_KEY)) setOpen(true);
    } catch {
      setOpen(true);
    }
  }, []);

  function set(value: "accepted" | "rejected") {
    try {
      localStorage.setItem(CONSENT_KEY, value);
    } catch {
      /* ignore */
    }
    window.dispatchEvent(new Event(CONSENT_EVENT));
    setOpen(false);
  }

  if (!open) return null;

  return (
    <div className="cookie-banner" role="dialog" aria-label="Cookie consent">
      <p>
        Essential cookies keep the site working. Analytics (GA4, Meta Pixel) load only if you accept.{" "}
        <a href="/faq">More in FAQ</a>.
      </p>
      <div className="cookie-actions">
        <button type="button" onClick={() => set("rejected")}>
          Reject
        </button>
        <button type="button" className="cookie-accept" onClick={() => set("accepted")}>
          Accept
        </button>
      </div>
    </div>
  );
}
