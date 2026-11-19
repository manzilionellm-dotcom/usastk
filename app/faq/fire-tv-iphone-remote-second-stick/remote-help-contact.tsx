"use client";

import { trackWhatsAppClick } from "@/lib/track";

const label = "Get Fire TV remote help on WhatsApp";
const buttonClass = "inline-flex min-h-12 items-center rounded-lg bg-white px-5 font-semibold text-black";

export function RemoteHelpContact({ href }: { href: string }) {
  function openHelp() {
    trackWhatsAppClick("guide");
    window.location.assign(href);
  }

  // Keep the prefilled message out of GA4's automatic outbound-link measurement.
  // Without JavaScript, analytics is inactive and the normal link works directly.
  return (
    <>
      <button id="remote-help-button" type="button" className={buttonClass} onClick={openHelp}>{label}</button>
      <noscript>
        <style>{"#remote-help-button { display: none; }"}</style>
        <a className={buttonClass} href={href}>{label}</a>
      </noscript>
    </>
  );
}
