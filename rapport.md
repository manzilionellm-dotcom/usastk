# RAPPORT — Correction iptvforfirestickusa.com (2026-07-25)

Branche : `claude/correction-firestickusa-cleanup-0lytgz` · Build vert ·
Diff d'URLs : **aucune URL supprimée**, 4 ajoutées (`/terms`, `/privacy`,
`/refund`, `/llms.txt`).

## Ce qui a été purgé (Phase 1 — règle FTC 2024)
| Tromperie | Sort |
|---|---|
| Faux agent « Sofia » (scripté, « Real human, not a bot », « Sofia is typing… ») | Supprimé. Remplacé par « 💬 WhatsApp support — English · Español · Français » avec les 3 vrais boutons wa.me |
| Second faux chat (« Assistant · Online · Replies in minutes ») | Supprimé, panneau honnête |
| « Only 47 spots left today » | Supprimé |
| Prix barrés $30→$12, $300→$55, badges 60–82 % OFF | Supprimés. Prix réel + un seul calcul : $55/an ≈ $4.58/mois |
| « 12,400+ households », « ★4.8 », 4 témoignages nommés, AggregateRating | Supprimés. Composant avis conditionnel prêt (vrais avis WhatsApp uniquement — tableau vide, ne rend rien) |
| « Independent US publication », « Editorial standards », « Made/Built in America · NYC · LA · Dallas », og:type=article, meta DC/geo, sameAs sociaux inexistants | Supprimés. Identité unique : service + guides, og:type=website |
| Liens footer vers `#` | 3 vraies pages légales créées et liées (/terms /privacy /refund, en 200 dans le build) |

Remplacé partout par le vérifiable : **essai 24 h sans carte · activation ~5 min ·
garantie remboursement · support trilingue**.

## Claims & territoires (Phase 2)
- Sunday Ticket / League Pass / MLB.TV / Center Ice / ESPN+ / RSN nommés /
  « every boxing PPV included » → **feeds de diffusion** : « every NFL feed —
  ESPN, FOX, CBS, NBC, NFL Network », « full sports coverage », et renvoi
  WhatsApp pour tout PPV spécifique.
- Keywords : ~670 → **12 termes firestick**. Zéro ville, zéro español dans les
  meta. La section Español on-page reste (elle sert les visiteurs) ; passerelle
  vers le champion latino **préparée en commentaire** — fournir le domaine pour
  l'activer (voir assumptions.md).
- Résidus UK réécrits ; « Copa América 2026 » (inexistante) supprimée ;
  « Mundial 2026 » passé en repeticiones/resúmenes.
- Chiffre canonique unique : **$147/mois = $1,764/an** (est. juillet 2026,
  sourcé sous le tableau) ; variantes $1,709/$1,925 supprimées ; colonne
  comparaison en multiples (coût annuel ÷ $55).
- **Module saison** : kickoff NFL jeudi 10 septembre 2026 — pages à indexer en août.

## Machine à WhatsApp (Phase 3)
- CTA primaire unique = WhatsApp (header, hero, sticky mobile avec prix visible).
- **100 % des wa.me tagués** `| Ref: home-<bloc>` (24 emplacements, messages en
  espagnol pour les blocs ES, en français pour le FR).
- Pitch d'essai (« Test it free Sunday during the 1pm kickoff… ») décliné en fin
  de chaque section : setup, cable, chaînes, providers, apps, troubleshooting, FAQ.
- Friction zéro : achat en 3 étapes affiché + objections (paiement, légalité,
  multi-écrans) juste avant le CTA final + FAQ paiement.

## Relance (Phase 4)
Sitemap régénéré (+3 pages légales) · robots.txt déjà ouvert aux bots IA ·
`llms.txt` créé · schema : FAQPage (23 Q) + HowTo conservés, Article et
AggregateRating retirés · maillage ≤ 3 clics (une page + légales liées).

---

## ✅ CHECKLIST HUMAINE (~5 min)
1. **GSC** : soumettre `https://iptvforfirestickusa.com/sitemap.xml`, puis
   « Demander l'indexation » pour : accueil, `/#premium-channels`, `/#setup`,
   `/#nfl-iptv`, `/#troubleshooting`, `/#apps`, `/#cable-vs-iptv`,
   `/#us-channels`, `/#faq` (l'accueil couvre les ancres — demander au minimum
   l'accueil + les 3 pages légales).
2. **Bing Webmaster Tools** : même sitemap.
3. **Captures GSC** de ce domaine → dossier de triage du portefeuille.
4. **Domaine du champion latino** → décommenter la passerelle dans
   `app/page.tsx` (section Español, bloc marqué « À ACTIVER »).
5. **Vérifier `/refund`** : la politique rédigée (essai 24 h + remboursement
   7 jours) doit correspondre à ce que tu tiens réellement sur WhatsApp.
6. **À chaque activation** : demander l'avis WhatsApp, et noter dans un simple
   tableau : `Ref: | issue (vendu/non)`. En 30 jours tu sauras quelles pages
   VENDENT — l'usine nourrira celles-là. Les vrais avis vont dans
   `customerReviews` (app/page.tsx) : la section se réaffiche toute seule.

## Attente réaliste
La purge ne coûte aucun trafic (la tromperie ne rankait pas — elle risquait).
Le gain vient de la niche assumée « iptv firestick » + guides, avec le pic
saisonnier : **kickoff NFL du 10 septembre** — indexation en août obligatoire.
Chaîne complète : page → CTA → conversation taguée → closing → avis réel →
preuve qui vend la suivante.
