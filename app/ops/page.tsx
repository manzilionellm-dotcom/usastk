import type { Metadata } from "next";
import { FOLLOWUP } from "@/lib/followup";
import { WHATSAPP_E164 } from "@/lib/site";

export const metadata: Metadata = {
  title: "Closer scripts",
  robots: { index: false, follow: false },
};

export default function OpsPage() {
  return (
    <main className="mx-auto max-w-2xl px-5 py-12 font-sans text-[#F5F6F8]">
      <h1 className="text-2xl font-semibold">Scripts — un numéro {WHATSAPP_E164}</h1>
      <p className="mt-2 text-sm text-[#A8AEBC]">
        Page noindex. Copier-coller. Pas d’envoi auto (pas d’API WhatsApp).
      </p>
      {(
        [
          ["J+0 essai", FOLLOWUP.j0],
          ["J+1 relance", FOLLOWUP.j1],
          ["J+2 dernier jour", FOLLOWUP.j2],
          ["Parrainage", FOLLOWUP.refer],
        ] as const
      ).map(([label, text]) => (
        <section key={label} className="mt-8 rounded-xl border border-[#2A3142] bg-[#141824] p-4">
          <h2 className="text-sm font-semibold text-[#25D366]">{label}</h2>
          <pre className="mt-2 whitespace-pre-wrap text-sm">{text}</pre>
        </section>
      ))}
      <p className="mt-8 text-xs text-[#6E7585]">
        Étiquettes WhatsApp Business : USA · Essai · Payé · Parrain · J+1 · J+2
      </p>
    </main>
  );
}
