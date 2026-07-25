import type { Metadata } from "next";
import { LegalPage } from "../legal";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Privacy Policy for IPTV For Firestick USA — what data we handle and how.",
  alternates: { canonical: "https://iptvforfirestickusa.com/privacy" },
  robots: { index: true, follow: true },
};

export default function PrivacyPage() {
  return (
    <LegalPage title="Privacy Policy" updated="July 25, 2026">
      <p>
        This policy describes what data is handled when you use
        iptvforfirestickusa.com and when you contact us on WhatsApp.
      </p>

      <h2>1. What we collect on this site</h2>
      <p>
        The site has no user accounts and no checkout. It does not ask for your
        name, email or payment details. The optional &ldquo;install as app&rdquo;
        feature stores a small cache on your device (standard browser/PWA
        storage) so pages load faster; it contains no personal data.
      </p>

      <h2>2. WhatsApp conversations</h2>
      <p>
        Orders and support happen on WhatsApp. In that conversation we see your
        WhatsApp profile (name and number) and what you write to us — including
        the page reference (&ldquo;Ref:&rdquo;) included in pre-filled messages,
        which tells us which page you came from. We use this to activate your
        subscription, provide support and, if you agree, to publish your review.
        WhatsApp itself is governed by{" "}
        <a
          className="underline hover:text-[#F5F6F8]"
          href="https://www.whatsapp.com/legal/privacy-policy"
          target="_blank"
          rel="noopener noreferrer"
        >
          WhatsApp&rsquo;s own privacy policy
        </a>.
      </p>

      <h2>3. What we don&rsquo;t do</h2>
      <p>
        We do not sell or share customer information with third parties for
        marketing. We do not publish reviews or conversation excerpts without
        your permission.
      </p>

      <h2>4. Data retention and deletion</h2>
      <p>
        Subscription records are kept only as long as needed to run your
        service. You can ask us at any time, in the same WhatsApp conversation,
        to delete your data — we will confirm once it&rsquo;s done.
      </p>

      <h2>5. Contact</h2>
      <p>
        Privacy questions: message us on WhatsApp via the buttons on the{" "}
        <a className="underline hover:text-[#F5F6F8]" href="/">home page</a>.
      </p>
    </LegalPage>
  );
}
