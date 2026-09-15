import type { Metadata } from "next";
import { FOLLOWUP, LABELS, QUICK_REPLIES, SOP } from "@/lib/followup";
import { WHATSAPP_E164 } from "@/lib/site";

export const metadata: Metadata = {
  title: "Closer scripts",
  robots: { index: false, follow: false },
};

export default function OpsPage() {
  return (
    <main className="mx-auto max-w-2xl px-5 py-12 font-sans text-[#F5F6F8]">
      <h1 className="text-2xl font-semibold">Pack WhatsApp — {WHATSAPP_E164}</h1>
      <p className="mt-2 text-sm text-[#A8AEBC]">
        Page noindex. Copier-coller. Pas d'envoi auto (pas d'API WhatsApp). Un chat = une
        marque.
      </p>

      <section className="mt-8 rounded-xl border border-[#2A3142] bg-[#141824] p-4">
        <h2 className="text-sm font-semibold text-[#25D366]">Étiquettes Business</h2>
        <p className="mt-2 text-sm">{LABELS.join(" · ")}</p>
      </section>

      <section className="mt-6 rounded-xl border border-[#2A3142] bg-[#141824] p-4">
        <h2 className="text-sm font-semibold text-[#25D366]">Réponse rapide 1 — ville + appareil</h2>
        <pre className="mt-2 whitespace-pre-wrap text-sm">{QUICK_REPLIES.askCityDevice}</pre>
      </section>
      <section className="mt-6 rounded-xl border border-[#2A3142] bg-[#141824] p-4">
        <h2 className="text-sm font-semibold text-[#25D366]">Réponse rapide 2 — prix</h2>
        <pre className="mt-2 whitespace-pre-wrap text-sm">{QUICK_REPLIES.prices}</pre>
      </section>

      {(
        [
          ["J+0 essai", FOLLOWUP.j0],
          ["J+1 relance", FOLLOWUP.j1],
          ["J+2 dernier jour", FOLLOWUP.j2],
          ["Parrainage", FOLLOWUP.refer],
        ] as const
      ).map(([label, text]) => (
        <section key={label} className="mt-6 rounded-xl border border-[#2A3142] bg-[#141824] p-4">
          <h2 className="text-sm font-semibold text-[#25D366]">{label}</h2>
          <pre className="mt-2 whitespace-pre-wrap text-sm">{text}</pre>
        </section>
      ))}

      <section className="mt-6 rounded-xl border border-[#2A3142] bg-[#141824] p-4">
        <h2 className="text-sm font-semibold text-[#25D366]">SOP closer</h2>
        <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-[#A8AEBC]">
          {SOP.map((line) => (
            <li key={line}>{line}</li>
          ))}
        </ul>
      </section>
    </main>
  );
}
