/** Copy-paste for the single WhatsApp number +44 7307 410512. Not sent automatically. */

export const LABELS = [
  "USA",
  "Mzansi",
  "VIP",
  "TVKing",
  "Essai",
  "Payé",
  "Parrain",
  "J+1",
  "J+2",
] as const;

export const QUICK_REPLIES = {
  askCityDevice: `Ville + appareil ? Essai 24 h, pas de carte. Je t'envoie le login.`,
  prices: `Prix : USA $12 / $25 / $30 / $55 — Mzansi from R99 / 12 mois — VIP $10 / $25 / $35 / $60. Un chat = une marque.`,
} as const;

export const FOLLOWUP = {
  j0: QUICK_REPLIES.askCityDevice,
  j1: `Ça marche sur ton appareil ? Si l'essai est bon : 1 mois $12 · 3 mois $25 · 6 mois $30 · 1 an $55.`,
  j2: `Dernier jour d'essai. Lien du plan : $12 / $25 / $30 / $55. Tu veux que j'active lequel ?`,
  refer: `Parrainage : 1 mois offert sur le plan 12 mois ($55) pour toi ET pour l'ami, quand il paie. Numéro WhatsApp de l'ami (différent du tien) :`,
} as const;

export const SOP = [
  "Un numéro : +44 7307 410512 (447307410512). Jamais un second.",
  "Réponse < 2 min de 08h à 23h (fuseau du client : US Eastern pour USA).",
  "Essai envoyé < 10 min après ville + appareil.",
  "Un chat = une marque. Jamais « aussi le site SA » dans un fil USA.",
  "J+1 : Ça marche sur ton appareil ?",
  "J+2 : une ligne de prix, pas de négo floue.",
  "Essai→payé < 25 % sur 48h = on corrige le produit, on n'augmente pas les ads.",
] as const;
