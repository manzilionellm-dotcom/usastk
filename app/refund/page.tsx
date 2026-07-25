import type { Metadata } from "next";
import { LegalPage } from "../legal";

export const metadata: Metadata = {
  title: "Refund Policy",
  description:
    "Refund Policy for IPTV For Firestick USA — free 24-hour trial first, money-back guarantee after activation.",
  alternates: { canonical: "https://iptvforfirestickusa.com/refund" },
  robots: { index: true, follow: true },
};

export default function RefundPage() {
  return (
    <LegalPage title="Refund Policy" updated="July 25, 2026">
      <h2>1. Try before you pay</h2>
      <p>
        Every new customer can take a <strong>free 24-hour trial</strong> before
        any payment — no card required. We encourage you to use it to test the
        channels and picture quality that matter to you, on your own internet
        connection, ideally during a busy window like an NFL Sunday afternoon.
      </p>

      <h2>2. Money-back guarantee</h2>
      <p>
        If, after payment, the service does not work as described on this site
        and our support team cannot fix the problem with you on WhatsApp, you
        can request a <strong>full refund within 7 days of activation</strong>.
      </p>

      <h2>3. How to request a refund</h2>
      <p>
        Message us in the same WhatsApp conversation you ordered in, tell us
        what isn&rsquo;t working, and give us a reasonable chance to fix it
        (most issues — buffering, EPG, logins — are resolved in one exchange).
        If we can&rsquo;t fix it, we refund the full amount to your original
        payment method.
      </p>

      <h2>4. What isn&rsquo;t covered</h2>
      <p>
        Problems caused by your own internet connection or hardware (which the
        free trial lets you rule out in advance), and requests made more than 7
        days after activation, are handled case by case rather than by
        guarantee.
      </p>
    </LegalPage>
  );
}
