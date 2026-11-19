import type { Metadata } from "next";
import Link from "next/link";
import { SiteFooter, SiteHeader } from "@/components/site-chrome";
import { SITE_NAME, SITE_URL, whatsappHref } from "@/lib/site";

const pageUrl = `${SITE_URL}/faq/fire-tv-iphone-remote-second-stick`;
const title = "My iPhone remote sees only one of my Fire TV Sticks";
const description = "Add the missing Fire TV Stick to Amazon’s iPhone remote app and check that the intended TV responds.";
const helpUrl = whatsappHref(`Hi, I’m reading ${SITE_NAME}: ${pageUrl}. Can you help me connect the iPhone remote to my second Fire TV Stick?`);

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  alternates: { canonical: pageUrl },
  openGraph: { type: "article", title, description, url: pageUrl },
};

export default function FireTvRemoteGuide() {
  return (
    <>
      <SiteHeader active="guide" />
      <main className="mx-auto max-w-3xl px-5 py-12 pb-32 md:px-8">
        <article className="space-y-6 leading-relaxed">
          <Link className="underline" href="/blog">Fire TV guides</Link>
          <h1 id="page-heading" tabIndex={-1} className="text-3xl font-bold">{title}</h1>
          <p>If the Fire TV app controls the living-room Stick but the bedroom Stick is missing, connect the iPhone to the same Wi-Fi network as the bedroom Stick. Then add that Stick from the app’s remote screen.</p>
          <h2 className="text-xl font-semibold">Connect the iPhone to the missing Stick</h2>
          <ol className="list-decimal space-y-3 pl-6">
            <li>At the TV you want to control, check which Wi-Fi network the Fire TV Stick is using. On the iPhone, join the same network.</li>
            <li>Open Amazon’s Fire TV app on the iPhone and sign in to your Amazon account.</li>
            <li>Tap the remote icon, choose <strong>Set Up New Fire TV</strong> and follow the prompts for the Stick in front of you.</li>
            <li>Use the on-screen directional controls. Confirm the selection moves on that TV before opening your player.</li>
          </ol>
          <h2 className="text-xl font-semibold">If the second TV still does not respond</h2>
          <p>If the other TV responds, return to the remote screen and check which device you selected. If the second Stick never appears after checking Wi-Fi, note whether it is missing from the device list or appears but fails during setup. These describe different points of failure. Amazon’s setup instructions do not identify why a previously paired device disappeared.</p>
          <p>This guide covers the Fire TV Stick and Amazon’s iPhone app. It uses Amazon’s documented procedure. The editorial team has not reproduced the two-Stick problem on hardware.</p>
          <p><strong>Source checked November 19, 2026.</strong>{" "}
            <a className="underline" href="https://digprjsurvey.amazon.com/csad/help/node/GGKS6F6YNYGHK6YG">Amazon’s Fire TV mobile remote instructions</a>.
          </p>
          <p>Prepared with automated assistance for {SITE_NAME}. For personalized help, describe which step failed. Keep account credentials and pairing codes private.</p>
          <a href={helpUrl} data-cta="guide" className="inline-flex min-h-12 items-center rounded-lg bg-white px-5 font-semibold text-black">Get Fire TV remote help on WhatsApp</a>
        </article>
      </main>
      <SiteFooter />
    </>
  );
}
