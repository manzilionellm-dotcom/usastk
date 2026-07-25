# Assumptions — correction du 2026-07-25

Mode soldat : zéro question posée. Chaque ambiguïté résolue par l'hypothèse la plus
probable, listée ici pour validation humaine.

## Branche
- Le prompt demande `correction-<date>` ; l'environnement impose la branche
  `claude/correction-firestickusa-cleanup-0lytgz`. **La branche imposée gagne** —
  tout le travail est dessus.

## Offre & prix (supposés réels)
- Les prix affichés ($12 / $25 / $30 / $55) sont les prix réellement pratiqués.
- L'essai 24 h sans carte, l'activation ~5 min et la garantie remboursement sont
  des promesses opérationnelles réelles tenues via WhatsApp.
- **Page /refund** : faute de conditions écrites existantes, la politique rédigée est
  « essai gratuit 24 h avant tout paiement + remboursement intégral sous 7 jours si le
  service ne fonctionne pas comme décrit et que le support ne peut pas le corriger ».
  → À ajuster par l'opérateur si les vraies conditions diffèrent.
- Les chiffres fournisseur (50 000+ chaînes, 100 000+ VOD, 99,9 % uptime) sont
  conservés comme spécifications du service fourni par l'opérateur. « Anti-Freeze 6.0 »
  (pseudo-version marketing) est ramené à « anti-freeze servers » (nom de
  caractéristique, pas de revendication technique chiffrée).

## Chiffre canonique câble
- Base unique partout : **$147/mois ≈ $1,764/an** (facture type câble + sports 2026,
  frais inclus). Les variantes $1,709 et $1,925 sont supprimées.
- Dans le tableau comparatif, la colonne « save up to $X » (qui recréait des variantes)
  est remplacée par un multiple (« 28×–36× le prix de l'IPTV ») — un seul mode de calcul :
  coût annuel ÷ $55.

## Territoires
- Le « champion latino » frère n'a pas de domaine connu dans le repo ni dans le prompt.
  La passerelle « ¿Prefieres un sitio 100 % en español? » est préparée en commentaire
  dans le code (section Español) mais **non rendue** tant que le domaine n'est pas
  fourni — un lien inventé ou mort serait exactement ce qu'on purge.
  → Action humaine : fournir le domaine, décommenter le bloc.
- iptvnyc.us : aucun contenu on-page NYC à migrer ; seul le SEO (keywords villes)
  chassait sur ce territoire → purgé.

## WhatsApp
- Le numéro `447307410512` (indicatif UK) est le vrai canal de vente → conservé.
  Les mentions « US customer support » sont reformulées en « support 24/7
  (English · Español · Français) » pour ne pas impliquer une équipe basée aux USA.

## Divers
- `components/chat.tsx`, `app/api/chat`, `app/api/models`, `lib/gateway.ts` : restes du
  template Vercel AI SDK, non référencés par la page → laissés en place (hors périmètre,
  ne cassent pas le build).
- Réseaux sociaux `sameAs` (Twitter/Facebook/YouTube @iptvforfirestickusa) : comptes
  non vérifiés/probablement inexistants → retirés du JSON-LD (identité fabriquée).
- Kickoff NFL 2026 : jeudi 10 septembre 2026 (jeudi après Labor Day, 7 sept.).
- Dates schema WebPage : datePublished conservée (lancement), dateModified passée au
  2026-07-25 (date de cette correction).
