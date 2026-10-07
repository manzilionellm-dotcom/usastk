# Verdict : PASS

Audit QA white-hat de la PR brouillon [#15](https://github.com/manzilionellm-dotcom/usastk/pull/15) (`fix/remove-internal-jargon`, tip `305b480e848b6db0b7a6a13f7ca4fa881113d974`, base `main` `942d3e79`). Diff annoncé et mesuré : **14 fichiers, +73 / −73**.

**PASS** : gates verts des deux côtés, zéro jeton interdit de la liste sur les pages construites hors `/ops`, un seul numéro WhatsApp, barème USD identique, aucun schéma `AggregateRating` / `Review`, aucun M3U public, aucune URL 404 dans `llms.txt`, `llms-full.txt` et `aio.config.json`. Aucun bloquant.

Les répétitions de chiffres déjà publiés, les phrases « playlist » encore au ton d’une note interne, et la page `/ops` servie en 200 sont des **réserves**, pas des bloquants. Le détail est étiqueté **FAIT** / **INFÉRENCE** / **HYPOTHÈSE**.

Périmètre non fait : cette revue ne fusionne pas #15, ne la sort pas du brouillon, et ne pousse pas sur `fix/remove-internal-jargon`.

## Gates

`validate:content` n’existe pas dans `package.json` (scripts présents : `dev`, `build`, `start`, `lint`, `type-check`, `aio:llms`, `aio:check`). **FAIT.** Il n’a donc pas été exécuté. `aio:check` est un contrôleur HTML unitaire, pas le gate demandé.

`pnpm install --frozen-lockfile`, `pnpm lint`, `pnpm type-check`, `pnpm build` ont été lancés sur le tip et, dans un worktree, sur `main` (`942d3e79`).

| Commande | Tip `305b480e` | `main` `942d3e79` |
| --- | --- | --- |
| `pnpm install --frozen-lockfile` | exit 0 | exit 0 |
| `pnpm lint` | exit 0, aucune alerte | exit 0, aucune alerte |
| `pnpm type-check` | exit 0 | exit 0 |
| `pnpm build` | exit 0, 44 pages | exit 0, 44 pages |

**FAIT.** Même avertissement pnpm des deux côtés : scripts de build `sharp` et `unrs-resolver` ignorés. Ce n’est pas un échec de lockfile.

**FAIT.** Le build du tip et celui de `main` listent les mêmes routes. Quelques tailles de JS de page passent de 208 B à 209 B, et le middleware de 32,2 kB à 32,4 kB. **INFÉRENCE :** écart de copie, pas de régression de compilation.

## 1. Jargon sur les pages construites (hors `/ops`)

Scan insensible à la casse sur `.next/server/app/**/*.html` (33 fichiers, `/ops` exclu), les `.rsc` correspondants, et `public/`. Le HTML pré-rendu est minifié sur une seule ligne : un hit éventuel serait `chemin:1`. **FAIT.**

| Jeton | Occurrences hors `/ops` |
| --- | --- |
| soft-sell, soft trial, mot entier `soft` | 0 |
| no invented | 0 |
| AggregateRating / aggregateRating | 0 |
| M3U, `.m3u`, `.m3u8`, `get.php` | 0 |
| cloak, cloaking, « Google sees », mot `bot` / `bots` | 0 |
| anti-freeze, anti freeze | 0 |
| no buffering | 0 |
| uptime, 99.9 | 0 |
| fleet, fiche | 0 |
| FAIT, INFÉRENCE, À CONFIRMER | 0 |
| TODO, TBD, Lionel | 0 |
| legal, legality | 0 |

**FAIT.** Aucun reste à lister en `chemin:ligne` pour cette liste.

Le seul token `soft*` restant est le mot anglais **software** (décodeur), 30 fois dans 4 fichiers de build : `blog/iptv-buffering-firestick.html`, `blog/iptv-buffering-firestick.rsc`, `faq/buffering.html`, `faq/buffering.rsc`. Exemple de source, inchangé par ce diff : `aio.config.json:129` (« software decoder »). **FAIT.** **INFÉRENCE :** ce n’est pas le jargon Soft FAQ / soft trial / soft-sell.

`lib/json-ld.ts:1` contient encore la chaîne `AggregateRating` comme liste d’interdiction. Elle n’est pas émise dans le HTML ni les RSC. **FAIT.**

## 2. WhatsApp, prix, chiffres, anglais

**FAIT.** Dans le HTML, les RSC et `public/` (hors `/ops`), le seul identifiant `wa.me/` est `447307410512` (547 fois). Les seules formes « + » sont `+44 7307 410512` et `+447307410512` (schéma `telephone`). `/ops` affiche le même `447307410512` via `WHATSAPP_E164`. Aucun autre numéro.

**FAIT.** `https://wa.me/447307410512` répond 302 vers `api.whatsapp.com` (téléphone `447307410512`), qui répond 200. Pas un 404.

Montants `$` du source (`git grep` sur `*.tsx`, `*.ts`, `*.json`, `*.txt`, `*.mjs`) : le jeu de valeurs est le même sur `main` et sur le tip.

`$0` (libellé du script), `$4.58/mo`, `$5/mo`, `$8.33/mo`, `$12`, `$12/mo`, `$15`, `$25`, `$30`, `$55`, et la fourchette `$12–$55`.

**FAIT.** Dans le HTML construit plus `public/`, les comptes de `$12`, `$25`, `$30` et `$55` augmentent de **+2** chacun par rapport au build de `main`. Ces quatre ajouts sont dans `public/llms-full.txt` :

- `public/llms-full.txt:42` — la réponse « How do I start the 24-hour Firestick trial? » répète « 1 month for $12, 3 months for $25, 6 months for $30, and 1 year for $55 ».
- `public/llms-full.txt:62` — « Published plans: 1 month $12, 3 months $25, 6 months $30, 1 year $55 ».

**FAIT.** La même liste `$12 / $25 / $30 / $55` existait déjà sur `main` dans `aio.config.json:85` et sur la home. Ce n’est pas un nouveau tarif. **INFÉRENCE :** une lecture stricte de « aucun chiffre ajouté » voit deux répétitions ; elles ne changent pas le barème publié. Classées en réserve, pas en bloquant.

**FAIT.** Le diff réintroduit aussi les chiffres du numéro déjà unique dans des phrases qui ne les montraient pas, notamment `aio.config.json:8`, `public/llms.txt:5`, `public/llms-full.txt:11`, `lib/motion-path.ts:76`, `scripts/aio-llms.mjs:81`. Aucun second numéro.

**FAIT.** Le diff retire `4.8`, `12,400` et `anti-freeze 6.0`. Aucune ligne ajoutée ne contient `legal`, `guarantee` ou `promise`. La question « Is IPTV legal in the USA? » et la phrase « does not change legality » sont supprimées, pas remplacées par une affirmation de légalité. La phrase « does not promise every kickoff or PPV » est retirée ; le texte nouveau dit que la disponibilité varie selon la semaine.

Cinq avant / après représentatifs. **FAIT** (citations du diff). **INFÉRENCE :** l’anglais est de l’américain courant et lisible.

1. `app/firestick/page.tsx` — titre  
   Avant : `IPTV Firestick USA — soft setup at home or traveling`  
   Après : `IPTV Firestick USA — setup at home or traveling`

2. `app/free-trial/page.tsx` — intertitre  
   Avant : `Soft-sell 7 MOTION`  
   Après : `7 MOTION when offered`

3. `app/blog/iptv-buffering-firestick/page.tsx`  
   Avant : `If those seven still fail on a 24h trial, the stick or the ISP is the bottleneck — we don’t invent “anti-freeze 6.0”. Test first.`  
   Après : `If those seven still fail on a 24h trial, the stick or your internet provider is the bottleneck. Test on your own Wi-Fi first.`

4. `aio.config.json` / `public/llms.txt` — question FAQ  
   Avant : `Is IPTV legal in the USA?` suivi d’un paragraphe qui refuse de donner un avis juridique.  
   Après : `What should I know before I start?` — « Start with a Firestick you already own and the internet in your home. Message WhatsApp with your city and device, then watch a night on your own TV before you pick a duration. »

5. `components/citeable-faq.tsx`  
   Avant : `First sentence is the answer. Same text as the FAQ schema — no cloaking.`  
   Après : `Short answers about setup, the 24 hour trial, and WhatsApp.`

**INFÉRENCE :** une phrase reste télégraphique plutôt que parlée : `lib/motion-path.ts:76`, « Private 24-hour trial on +44 7307 410512 ». Le numéro est le bon ; « trial on » + un numéro est moins naturel que « trial on WhatsApp at ».

## 3. `llms.txt`, `llms-full.txt`, `aio.config.json`

**FAIT.** Aucun jeton de la liste du point 1 dans ces trois fichiers. Le mot `software` n’y apparaît que dans `aio.config.json:129` (décodeur), comme sur les pages buffering.

**FAIT.** Les 10 Q/R de `public/llms.txt` reprennent `aio.config.json` `i18n.en.faq`. Les Q/R de `public/llms-full.txt` reprennent `geoFaq`, et les 7 étapes reprennent `lib/motion-path.ts`. Les prix et le WhatsApp sont les mêmes que sur la home.

**FAIT.** Écart de formulation, pas un 404 : `scripts/aio-llms.mjs:67` et donc `public/llms.txt:45` disent « Do not hunt a public playlist. » La page visible (`lib/motion-path.ts:23`) dit « Do not hunt a public playlist file on the open web. » `llms-full.txt:8` affirme « Visible pages match this copy » pour le fichier long, pas pour cette ligne courte de `llms.txt`.

**FAIT.** Neuf URL dans les trois fichiers. Servies par `next start` du build de production (port local) :

| URL | Statut |
| --- | --- |
| `https://iptvforfirestickusa.com` et `/` et `/#plans` | 200 |
| `/free-trial`, `/firestick`, `/faq`, `/blog/firestick-setup-usa` | 200 |
| `/llms-full.txt` | 200 |
| `https://wa.me/447307410512` | 302, puis 200 sur `api.whatsapp.com` |

`/llms.txt` et `/refer` (cités en chemin relatif) répondent aussi 200. **FAIT.** Aucune URL de ces fichiers ne renvoie 404.

## 4. Schémas, M3U, offres

**FAIT.** Types JSON-LD vus dans le HTML et les RSC hors `/ops` : `Question`, `Answer`, `Offer`, `Product`, `Brand`, `HowToStep`, `Country`, `Organization`, `ContactPoint`, `FAQPage`, `HowTo`, `HowToTool`, `ListItem`, `WebSite`, `HowToSupply`, `BreadcrumbList`, `Article`, `ImageObject`, `Service`, `OfferCatalog`. Zéro `AggregateRating`. Zéro `Review`.

**FAIT.** Prix d’`Offer` extraits : `0.00`, `12.00`, `25.00`, `30.00`, `55.00`, plus les formes `12`, `25`, `30`, `55` de l’`OfferCatalog`. Ce sont l’essai sans carte et les quatre durées de `lib/site.ts` (`12`, `25`, `30`, `55`). **INFÉRENCE :** pas une offre inventée. `lib/aio.ts` et `lib/json-ld.ts` sont hors diff, donc ce graphe n’est pas introduit par #15.

**FAIT.** Zéro `.m3u`, `.m3u8` ou `get.php` dans le build et dans `public/`.

## 5. `/ops`

**FAIT.** `GET /ops` sur le serveur de production local : **200**.

**FAIT.** En-tête de cette réponse : `x-robots-tag: noindex, nofollow` (une seule valeur ; le `index, follow` global de `next.config.ts` ne remplace pas celui-ci sur `/ops`). La home, elle, envoie `X-Robots-Tag: index, follow, max-image-preview:large, max-snippet:-1`.

**FAIT.** Meta dans `.next/server/app/ops.html:1` : `<meta name="robots" content="noindex, nofollow"/>`. Source : `app/ops/page.tsx:7` et `middleware.ts:12-13`.

**FAIT.** `robots.txt` (hôte local, donc règles de production, pas le disallow total `vercel.app`) :

```
User-Agent: *
Allow: /
Disallow: /api/
Disallow: /ops
```

**FAIT.** `sitemap.xml` ne contient pas `/ops` (liste des `<loc>` lue en entier).

**FAIT.** Aucun `href` vers `/ops` dans les HTML construits. Le dépôt ne cite `/ops` que dans `middleware.ts` et `app/robots.ts`. La page n’est pas liée depuis une autre page. Elle est en revanche nommée dans `robots.txt`, que n’importe qui peut lire.

**FAIT.** Le dépôt GitHub `manzilionellm-dotcom/usastk` est **PUBLIC** (`gh repo view`, `visibility: PUBLIC`).

**FAIT** (documentation Google Search Central, « Block Search indexing with noindex », lue pendant l’audit) : pour que `noindex` soit pris en compte, la page ne doit pas être bloquée par `robots.txt`. Si elle l’est, le robot ne voit pas le `noindex`, et l’URL peut quand même apparaître si elle est découverte.

Contenu sensible réellement servi (texte visible de `ops.html`, source `app/ops/page.tsx` et `lib/followup.ts`) :

- **FAIT.** Scripts de closing en français : J+0 « Ville + appareil ? Essai 24 h, pas de carte. Je t'envoie le login. » ; J+1 relance avec les prix ; J+2 « Dernier jour d'essai. Tu veux que j'active quel plan ? » ; parrainage « 1 mois offert sur le plan 12 mois ($55) ».
- **FAIT.** Prix : `$12`, `$25`, `$30`, `$55`. Ce sont les prix déjà publics.
- **FAIT.** Numéro : `447307410512`, le même que le reste du site.
- **FAIT.** Étiquettes internes : « Étiquettes WhatsApp Business : USA · Essai · Payé · Parrain · J+1 · J+2 ». Titre « Closer scripts ».
- **FAIT.** Pas de note de cloaking, pas de « Google sees », pas de « bots » sur cette page.

### Avis

**Recommandation : protéger (404 en production).**

- **Laisser** garde un 200 pour quiconque a l’URL. `Disallow: /ops` publie le chemin dans `robots.txt`, et le `noindex` (meta + en-tête, tous deux présents) ne sera pas vu par Google si le crawl est interdit. **FAIT** pour les contrôles ; **INFÉRENCE** pour l’effet Google, alignée sur la doc citée.
- **Nettoyer** le fichier courant retirerait les scripts du prochain déploiement, mais le dépôt est déjà public et la PR #8 fusionnée (« J+1/J+2 scripts ») les a versés dans l’historique. **FAIT** que #8 est mergée. **INFÉRENCE :** effacer `app/ops/page.tsx` au tip ne retire pas les blobs déjà clonables.
- **Protéger par un 404 en production** coupe le 200 anonyme, qui est l’exposition en plus de GitHub. Une auth devant la même page laisserait le source public et une URL qui répond encore. Le 404 est le contrôle proportionné. Le numéro et les prix de `/ops` ne sont pas des secrets (ils sont sur la home) ; le résidu qui ne devrait pas être servi aux visiteurs, ce sont les scripts de closing.

**HYPOTHÈSE :** peu de monde tombe sur `/ops` aujourd’hui, faute de lien interne. Cette hypothèse ne justifie pas de laisser le 200, parce que `robots.txt` et le dépôt public nomment déjà la route.

## 6. Autres PR ouvertes

**FAIT.** `gh pr list --state open` ne renvoie que la #15 (brouillon, `fix/remove-internal-jargon` → `main`). Aucune autre PR ouverte, donc aucun chevauchement de fichiers avec une autre PR ouverte.

**FAIT.** Le corps de #15 dit qu’aucune PR n’était ouverte avant la création de la branche. Les autres PR du dépôt sont mergées ou fermées ; la plus récente hors #15 est la #14, mergée le 2026-10-06. **INFÉRENCE :** l’annonce était encore vraie au moment de cet audit (aucune PR ouverte en parallèle).

## Bloquants

Aucun.

## Réserves

1. **FAIT.** Phrases « playlist » encore au ton d’une consigne interne, sans le sigle M3U. Les plus visibles, y compris dans un fichier que #15 a déjà touché :
   - `app/firestick/page.tsx:212-213` — « We do not publish a public playlist on this site. » (le diff a réécrit le titre et des intertitres, pas ce paragraphe).
   - `lib/motion-path.ts:11`, `:23`, `:56` — étapes et `HowToSupply` (« we do not publish a public playlist », « Do not hunt a public playlist file », « no public playlist file »). L’étape 7 a été réécrite ; celles-ci non.
   - `components/site-chrome.tsx:59` et `:105` — footer « no public playlist » sur toutes les pages, donc `*.html:1`.
   - `aio.config.json:27`, `:35`, `:99`, `:115` et les miroirs `public/llms.txt:67`, `public/llms-full.txt:20`.
2. **FAIT.** Répétition des prix déjà publiés dans `public/llms-full.txt:42` et `:62` (+2 occurrences de `$12`, `$25`, `$30`, `$55` dans le corpus construit). Pas un nouveau prix.
3. **FAIT.** Répétition du même `+44 7307 410512` dans le lead et la description Organization (`lib/motion-path.ts:76`).
4. **INFÉRENCE.** `lib/motion-path.ts:76` est un peu raide en anglais (« trial on +44… »).
5. **FAIT.** `/ops` reste un 200 public, noindex, hors sitemap, non liée, mais nommée par `robots.txt` et lisible dans le dépôt public. Voir l’avis ci-dessus : protéger par un 404.
