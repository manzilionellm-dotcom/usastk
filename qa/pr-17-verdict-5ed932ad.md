# PASS

Tip `5ed932ad6bacca797fe42d5da08134280b66f025`, PR brouillon [#17](https://github.com/manzilionellm-dotcom/usastk/pull/17), branche `fix/ops-404-production`. Diff mesuré : `app/ops/page.tsx` **+4 / −27**. Aucun bloquant. Réserve pour le lot suivant : `lib/followup.ts` reste dans le dépôt public, sans être importé ni servi.

#17 reste un brouillon. Ce contrôle ne la fusionne pas et ne pousse rien sur `fix/ops-404-production`.

## 1. Gates et CI

**FAIT.** `npm ci` (npm 10.9.7, Node 22.14.0) s’arrête avec `EUSAGE` : le dépôt n’a ni `package-lock.json` ni `npm-shrinkwrap.json`. Le gestionnaire déclaré est `pnpm@10.6.2`, lockfile `pnpm-lock.yaml`.

**FAIT.** `pnpm install --frozen-lockfile` : code 0, 657 paquets. Avertissement pnpm : scripts de build ignorés pour `sharp` et `unrs-resolver`. `pnpm lint` (`next lint`) : code 0, aucun avertissement ESLint. `pnpm exec tsc --noEmit` : code 0. `pnpm build` (`next build`, Next.js 15.3.8) : code 0, 44 pages statiques. La table des routes liste encore `○ /ops` (prérendu) à côté de `○ /_not-found`. Le fichier `.next/server/app/ops.meta` porte `"status": 404`.

**FAIT.** Checks du commit `5ed932ad` : `Vercel` état `success` (déploiement terminé), `Vercel Preview Comments` conclusion `success`. `gh run list` est vide. Il n’y a pas de répertoire `.github`.

**INFÉRENCE.** La CI verte de ce tip est le check Vercel. Il n’existe pas de workflow GitHub Actions qui relancerait lint ou `tsc`.

**HYPOTHÈSE.** Aucune sur les gates. L’avertissement `sharp` n’a pas empêché le build ni le 404 mesuré.

## 2. `/ops` : `notFound()` et HTTP 404

**FAIT.** Contenu intégral de `app/ops/page.tsx` sur ce tip :

```tsx
import type { Metadata } from "next";
import { notFound } from "next/navigation";

export const metadata: Metadata = {
  title: "Not found",
  robots: { index: false, follow: false },
};

/** Closer copy stays in lib/followup.ts and is not rendered. */
export default function OpsPage() {
  notFound();
}
```

**FAIT.** `next start` local, Next.js 15.3.8, `http://127.0.0.1:3456` (variables WhatsApp absentes de l’environnement). `GET /ops` et `GET /ops/` : **HTTP 404**, `Content-Type: text/html; charset=utf-8`, 9901 octets, `x-nextjs-prerender: 1`, `x-nextjs-cache: HIT`, un seul `x-robots-tag: noindex, nofollow`. Le corps contient `404`, `This page could not be found.` et le digest `NEXT_HTTP_ERROR_FALLBACK;404`.

**FAIT.** Comptages dans ce corps HTML :

| Chaîne | Occurrences |
| --- | ---: |
| `J+0`, `J+1`, `J+2` | 0 |
| `Parrainage`, `parrainage`, `Parrain` | 0 |
| `Ville + appareil`, `Dernier jour`, `1 mois $12`, `3 mois $25`, `6 mois $30`, `1 an $55` | 0 |
| `$25`, `$30`, `$55` | 0 |
| `followup`, `wa.me`, `447307410512`, `AggregateRating`, `M3U` | 0 |
| `from $12/mo` (donc aussi la sous-chaîne `$12`) | 4 |

Les 4 occurrences de `$12` sont toutes l’alt `IPTV For Firestick USA — from $12/mo`, en balise meta et dans le payload RSC. Cette alt est `export const alt` de `app/opengraph-image.tsx` (ligne 3), héritée par le document. Le chunk client du layout référencé par la 404 contient les préremplissages publics de `lib/site.ts` (numéro WhatsApp et prix de plans déjà publiés) et zéro chaîne `Parrainage`, `J+0`, `Ville + appareil` ou `followup`.

**FAIT.** La preview Vercel `https://usastk-git-fix-ops-404-production-manzis-projects-3add5703.vercel.app/ops` répond **302** vers `https://vercel.com/sso-api?...`. Le HTML de preview n’a pas été lu. Le 404 cité est celui de `next start` et du prérendu `.next/server/app/ops.html`.

**INFÉRENCE.** Le même artefact statique 404 est celui que le déploiement de ce commit sert une fois l’authentification SSO levée. Le critère « 0 prix » est tenu pour le barème closer (J+1 et parrainage). Le seul prix restant dans le HTML 404 est l’alt Open Graph globale, déjà présente sur les pages 200, hors diff de #17.

**HYPOTHÈSE.** Aucune sur le code de statut : 404 est observé, pas déduit.

## 3. `robots.txt` et sitemap

**FAIT.** `GET /robots.txt` sur `127.0.0.1:3456` (hôte hors `vercel.app`, donc règles de production) :

```
User-Agent: *
Allow: /
Disallow: /api/
Disallow: /ops

User-Agent: AhrefsBot
Disallow: /

User-Agent: SemrushBot
Disallow: /

Host: https://iptvforfirestickusa.com
Sitemap: https://iptvforfirestickusa.com/sitemap.xml
```

`Disallow: /ops` est présent. Source : `app/robots.ts`, règle `disallow: ["/api/", "/ops"]`.

**FAIT.** `GET /sitemap.xml` : HTTP 200, 5632 octets, 32 balises `<loc>`, **0** occurrence de la sous-chaîne `ops`. `app/sitemap.ts` n’inscrit pas `/ops` dans `staticPaths`.

**INFÉRENCE.** Aucune. **HYPOTHÈSE.** Aucune.

## 4. `/`, `/free-trial`, `/firestick`

**FAIT.** `next start` local, même processus :

| Route | HTTP | `wa.me/447307410512` | autre `wa.me/<digits>` | `AggregateRating` | `M3U` |
| --- | ---: | ---: | ---: | ---: | ---: |
| `/` | 200 | 17 | 0 | 0 | 0 |
| `/free-trial` | 200 | 15 | 0 | 0 | 2 |
| `/firestick` | 200 | 15 | 0 | 0 | 0 |

Aucun `api.whatsapp.com`, aucun `tel:`. Le seul E.164 est `447307410512`. Sur `/`, le JSON-LD `ContactPoint` répète `telephone` `+447307410512` (même numéro). La suite de chiffres `13971731025` est le préfixe du fichier de police `/_next/static/media/13971731025ec697-s.p.woff2`.

Types JSON-LD vus sur `/` : `Answer`, `Brand`, `ContactPoint`, `Country`, `FAQPage`, `HowTo`, `HowToStep`, `ImageObject`, `Offer`, `OfferCatalog`, `Organization`, `Product`, `Question`, `Service`, `WebSite`. `AggregateRating` et `Review` : 0 sur les trois routes.

**FAIT.** Les 2 occurrences `M3U` de `/free-trial` sont la même phrase, une fois dans le HTML visible et une fois dans le payload RSC : « One chat path. We do not publish a public M3U or playlist file on this site. » Aucune URL M3U. Cette phrase est celle de `main` (`942d3e79`) ; `app/free-trial/page.tsx` est hors du diff de #17. L’arbre fusionné avec #15 (`01c9a5f0091770fbe9dcb7cca067852c17b85d8a`) n’a plus `M3U` ni `AggregateRating` dans `app/page.tsx`, `app/free-trial/page.tsx`, `app/firestick/page.tsx`, `app/ops/page.tsx`.

**INFÉRENCE.** Le mot `M3U` sur ce tip isolé est l’état de `main`, retiré par #15. Il ne constitue pas une régression introduite par #17. Après l’ordre de fusion recommandé, les trois routes n’ont plus cette phrase.

**HYPOTHÈSE.** Aucune.

## 5. Chevauchement avec #15

**FAIT.** #15 (`fix/remove-internal-jargon`, tip `305b480e848b6db0b7a6a13f7ca4fa881113d974`, brouillon ouvert) touche 14 fichiers. #17 touche uniquement `app/ops/page.tsx`. Intersection des chemins : vide.

**FAIT.** `git merge-tree --write-tree` dans les deux sens (`#15` puis `#17`, et `#17` puis `#15`) produit le même arbre `01c9a5f0091770fbe9dcb7cca067852c17b85d8a`, code 0, aucun chemin en conflit. Dans cet arbre, `app/ops/page.tsx` est le fichier à `notFound()` ci-dessus.

**FAIT.** Parent de `5ed932ad` : `942d3e79443bc056fd5909924f072785f89741cc` (`main`). #15 et #17 sont toutes deux encore `OPEN` et `isDraft: true`.

**INFÉRENCE.** Git n’impose pas d’ordre. L’ordre recommandé reste **#15 puis #17** : le corps de #17 le demande, et le PASS #16 réservait justement le 404 de `/ops` après le retrait du jargon. Les deux ordres donnent le même arbre.

**HYPOTHÈSE.** Aucune.

## 6. Réserve `lib/followup.ts` — pas un bloquant

**Décision : RÉSERVE (lot suivant). Le verdict reste PASS.**

**FAIT.** Le dépôt `manzilionellm-dotcom/usastk` est `PUBLIC`. `lib/followup.ts` existe déjà sur `main` (commit `31707a6`). `git diff main...5ed932ad -- lib/followup.ts` est vide. Le module exporte `FOLLOWUP` avec les clés `j0`, `j1`, `j2` et `refer` (textes de relance, parrainage, prix). Aucun spécificateur `from "@/lib/followup"` dans le tip. La seule mention est le commentaire de `app/ops/page.tsx` ligne 9. Recherche dans `.next` (hors cache) : aucune chaîne `J+0`, `Parrainage`, `Ville + appareil`, `Dernier jour` ou `lib/followup`. `GET /ops` ne contient pas ces textes.

**FAIT.** Un lecteur du dépôt GitHub peut ouvrir `lib/followup.ts` sur `main` et sur `fix/ops-404-production` sans requêter `/ops`.

**INFÉRENCE.** Le risque que fermait la réserve du PASS #16 était la réponse HTTP 200 de `/ops`. Ce tip la remplace par un 404 dont le corps ne sert pas les scripts. Classer le fichier en bloquant échouerait #17 tout en laissant le même fichier lisible sur `main`. Retirer le fichier de l’arbre ne réécrit pas l’historique déjà public. Le lot suivant peut supprimer `lib/followup.ts` et le commentaire qui le nomme. Une réécriture d’historique, si elle était voulue, est une décision à part.

**HYPOTHÈSE.** Aucune : la lisibilité Git du fichier est observée (dépôt public, fichier présent sur `main` et sur ce tip), pas supposée.
