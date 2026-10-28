import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { test } from 'node:test';

// Resolve the actual shared link declarations as browsers resolve hrefs.
// This dependency-free regression check does not simulate React or a browser.
const read = (path) => readFileSync(new URL(`../${path}`, import.meta.url), 'utf8');
const site = read('lib/site.ts');
const pricingPath = site.match(/export const PRICING_PATH = "([^"]+)"/)?.[1];
const home = read('app/page.tsx');
const routes = ['/', '/faq', '/faq?device=firestick', '/faq/buffering', '/firestick', '/free-trial', '/blog', '/blog/firestick-setup-usa', '/devices/smart-tv', '/cities', '/refer'];

function hrefFor(source, className) {
  const tag = [...source.matchAll(/<a\b[^>]*>/g)].map(m => m[0])
    .find(tag => tag.includes(`className="${className}"`));
  assert.ok(tag, `Missing ${className} link`);
  const literal = tag.match(/href="([^"]+)"/)?.[1];
  if (literal) return literal;
  assert.match(tag, /href=\{PRICING_PATH\}/, 'Link must resolve to a known pricing destination');
  assert.match(source, /import\s*\{[^}]*\bPRICING_PATH\b[^}]*\}\s*from\s*["']@\/lib\/site["']/);
  return pricingPath;
}

for (const [file, className] of [
  ['components/conversion/StickyCta.tsx', 'sticky-cta-secondary'],
  ['app/layout.tsx', 'skip-link'],
]) {
  test(`${className} reaches the real home pricing section from every page`, () => {
    const href = hrefFor(read(file), className);
    assert.equal((home.match(/id="plans"/g) || []).length, 1, 'Destination must exist once in the home page');
    for (const origin of ['https://iptvforfirestickusa.com', 'https://preview.example']) {
      for (const route of routes) {
        const destination = new URL(href, origin + route);
        assert.equal(destination.href, origin + '/#plans', `Broken pricing journey from ${route}`);
      }
    }
  });
}
