#!/usr/bin/env node
// Génère public/llms.txt depuis aio.config.json (source unique). Usage: node scripts/aio-llms.mjs
// Complète le llms.txt existant : prix, technique, 10 Q/R. N'invente pas les null.
import fs from "node:fs";

const c = JSON.parse(fs.readFileSync(new URL("../aio.config.json", import.meta.url), "utf8"));
const L = c.defaultLang;
const i = c.i18n[L];

const wc = (s) => [
  (s.match(/\S+/g) || []).length,
  (s.match(/[\p{L}\p{N}€$%]+(?:['’][\p{L}]+)?/gu) || []).length,
];

function assertHooks(list, label) {
  for (const f of list) {
    if (!/\?\s*$/.test(f.q)) {
      console.error(`${label} question sans ? final: ${f.q}`);
      process.exit(1);
    }
    const [w1, w2] = wc(f.a);
    if (!(w1 >= 40 && w1 <= 60 && w2 >= 40 && w2 <= 60)) {
      console.error(`${label} hors 40–60 mots (${w1}/${w2}): ${f.q}`);
      process.exit(1);
    }
  }
}

assertHooks(i.faq, "faq");
assertHooks(i.geoFaq, "geoFaq");
assertHooks(i.trialFaq, "trialFaq");
assertHooks(i.bufferingFaq, "bufferingFaq");

const usd = (n) => (n === 0 ? "free (no card, $0)" : `$${n}`);
const lines = [];
lines.push(`# ${c.siteName}`, "", `> ${i.description}`, "", c.lead, "");
lines.push("## Start", "");
lines.push(`- WhatsApp: ${c.contact.whatsapp}`);
lines.push("- Prefill: Firestick IPTV USA + trial. City + device.");
lines.push(`- Free trial page: ${c.siteUrl}/free-trial`, "");
lines.push("## Services", "");
lines.push(
  `- Firestick IPTV setup for US households. Preferred player: 7 MOTION. Private 24 hour trial and support on WhatsApp: ${c.contact.whatsapp}`,
);
lines.push("- Login details stay in the WhatsApp chat. There is no playlist file to download on this site.");
lines.push(
  `- Referral, as published on /refer: when a friend pays the 12 month plan ($55), both people get 1 extra month. The 24 hour trial alone does not trigger the bonus.`,
);
lines.push(`- Website: ${c.siteUrl}/`, "");
lines.push("## Prices", "");
for (const p of c.plans) lines.push(`- ${p.name}: ${p.price === 0 ? "free (no card)" : usd(p.price)}`);
lines.push("- Each paid term is paid once. The home page states there is no auto renew contract.");
lines.push("- Displayed per-month labels on the plan cards: $12/mo, $8.33/mo, $5/mo, $4.58/mo.");
lines.push("", "## Technical characteristics", "");
const t = c.tech;
lines.push(`- Maximum picture quality: ${t.maxResolution ?? "not stated"}`);
lines.push(`- Devices: ${t.devices.join(", ")}`);
lines.push(`- Activation: ${t.activationMinutes ?? "not stated"}`);
lines.push(`- Stream bitrate: ${t.bitrate ?? "not stated"}`);
lines.push(`- Minimum bandwidth stated on the site: ${t.minBandwidth ?? "not stated"}`);
lines.push(`- Channel count: ${t.channelCount ?? "not stated"}`, "");
lines.push("## 7 MOTION path", "");
lines.push("1. Message WhatsApp with your US city and that you have a Firestick.");
lines.push("2. Start the private 24-hour trial — no card.");
lines.push("3. Prep the stick (5 GHz Wi-Fi or a short Ethernet adapter).");
lines.push("4. Install 7 MOTION — the player we prefer on Firestick.");
lines.push("5. Enter the chat details. Do not hunt a public playlist.");
lines.push("6. Check a night at home on your own TV.");
lines.push("7. Choose a duration on WhatsApp only if it holds.", "");
lines.push("## Pages", "");
lines.push(`- [Home](${c.siteUrl}/): Firestick IPTV USA overview, pricing cards, trial.`);
lines.push(`- [Free trial](${c.siteUrl}/free-trial): 24h Firestick trial on WhatsApp only.`);
lines.push(`- [Pricing](${c.siteUrl}/#plans): Plan cards on the home page.`);
lines.push(`- [Firestick HowTo](${c.siteUrl}/firestick): Short 7 MOTION setup.`);
lines.push(`- [Firestick setup USA (guide)](${c.siteUrl}/blog/firestick-setup-usa): Longer 7-step MOTION guide for AI citations.`);
lines.push(`- [FAQ](${c.siteUrl}/faq): Trial, Firestick, 7 MOTION, WhatsApp.`);
lines.push(`- [Full text](${c.siteUrl}/llms-full.txt): Longer machine-readable copy.`, "");
lines.push(`## Frequently asked questions (${i.faq.length})`, "");
i.faq.forEach((f) => lines.push(`### ${f.q}`, "", f.a, ""));
lines.push("## Optional", "");
lines.push("- Contact is WhatsApp only: +44 7307 410512.");
fs.mkdirSync(new URL("../public/", import.meta.url), { recursive: true });
fs.writeFileSync(new URL("../public/llms.txt", import.meta.url), lines.join("\n").trimEnd() + "\n");
console.log("public/llms.txt écrit (" + i.faq.length + " Q/R)");
