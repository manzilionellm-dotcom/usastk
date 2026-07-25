import type { Metadata } from "next";
import Link from "next/link";
import { LegalPage } from "../legal";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "Terms of Service for IPTV For Firestick USA — how the service is ordered, activated and used.",
  alternates: { canonical: "https://iptvforfirestickusa.com/terms" },
  robots: { index: true, follow: true },
};

export default function TermsPage() {
  return (
    <LegalPage title="Terms of Service" updated="July 25, 2026">
      <p>
        These terms govern your use of iptvforfirestickusa.com (the
        &ldquo;site&rdquo;) and of the IPTV subscription service ordered through
        our WhatsApp support channel (the &ldquo;service&rdquo;). By ordering the
        service you accept these terms.
      </p>

      <h2>1. What the service is</h2>
      <p>
        The service is an IPTV subscription providing access to live television
        channels and on-demand content, delivered over your own internet
        connection to compatible devices (Amazon Firestick and others). Orders,
        activation, support and renewals are handled through WhatsApp.
      </p>

      <h2>2. Free trial</h2>
      <p>
        New customers can request a <strong>free 24-hour trial</strong> before
        any payment. No payment details are required for the trial. The trial is
        limited to one per household.
      </p>

      <h2>3. Payment and renewal</h2>
      <p>
        Plans are one-time payments for a fixed period (1, 3, 6 or 12 months).
        There is <strong>no automatic renewal</strong> and no contract: when your
        period ends, the service stops unless you choose to renew on WhatsApp.
        Available payment methods are confirmed in the WhatsApp conversation
        before any charge.
      </p>

      <h2>4. Fair use</h2>
      <p>
        A subscription covers the number of simultaneous connections stated in
        your plan. Reselling, redistributing or publicly broadcasting the
        service is not permitted.
      </p>

      <h2>5. Availability</h2>
      <p>
        We aim for high availability but cannot guarantee uninterrupted service.
        Channel line-ups can change over time. If specific channels matter to
        you, confirm them on WhatsApp — ideally during your free trial — before
        purchasing.
      </p>

      <h2>6. Refunds</h2>
      <p>
        See our <Link className="underline hover:text-[#F5F6F8]" href="/refund">Refund Policy</Link>.
      </p>

      <h2>7. Your responsibilities</h2>
      <p>
        You are responsible for your own internet connection, devices, and for
        complying with the laws applicable where you live.
      </p>

      <h2>8. Contact</h2>
      <p>
        Questions about these terms: message us on WhatsApp via the buttons on
        the <Link className="underline hover:text-[#F5F6F8]" href="/">home page</Link>.
      </p>
    </LegalPage>
  );
}
