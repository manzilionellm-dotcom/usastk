import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { createRequire } from 'node:module';
import vm from 'node:vm';
import ts from 'typescript';

// Execute the actual delegate and tracker in a small DOM/consent facade.
// React's effect registration is simulated; this is not a browser/GA4 test.
const require = createRequire(new URL('../package.json', import.meta.url));
function hero(route, surface) {
  const html = readFileSync(new URL(`../.next/server/app/${route}.html`, import.meta.url), 'utf8');
  const tag = [...html.matchAll(/<a\b[^>]*>/g)].map(m => m[0]).find(t => t.includes(`data-surface="${surface}"`));
  assert.ok(tag, `missing generated ${surface} link`);
  const attrs = Object.fromEntries([...tag.matchAll(/([\w-]+)="([^"]*)"/g)].map(m => [m[1], m[2]]));
  assert.match(attrs.href, /^https:\/\/wa\.me\/447307410512\?text=/);
  assert.equal(attrs['data-cta'], undefined);
  return attrs;
}
function harness(consent = 'accepted') {
  const events = [], ga = [], meta = [], listeners = new Map();
  let cleanup;
  const window = { location: { pathname: '/free-trial', search: '?private=never-send' },
    dataLayer: events, gtag: (...a) => ga.push(a), fbq: (...a) => meta.push(a) };
  const localStorage = { getItem: () => { if (consent === 'throws') throw Error('blocked'); return consent; } };
  const document = {
    addEventListener: (name, callback, options) => listeners.set(name, { callback, options }),
    removeEventListener: (name, callback, options) => {
      const existing = listeners.get(name);
      if (existing?.callback === callback && existing.options.capture === options.capture) listeners.delete(name);
    },
  };
  const cache = new Map();
  function load(path) {
    if (cache.has(path)) return cache.get(path);
    const source = readFileSync(new URL(`../${path}`, import.meta.url), 'utf8');
    const output = ts.transpileModule(source, { compilerOptions: {
      module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2020,
      jsx: ts.JsxEmit.ReactJSX, esModuleInterop: true,
    } }).outputText;
    const exports = {};
    vm.runInNewContext(output, { exports, window, localStorage, document,
      require: name => name === 'react' ? { useEffect: effect => { cleanup = effect(); } }
        : name === '@/lib/track' ? load('lib/track.ts')
        : name === '@/components/conversion/CookieConsent' ? load('components/conversion/CookieConsent.tsx')
        : require(name),
    }, { filename: path });
    cache.set(path, exports);
    return exports;
  }
  load('components/conversion/WaClickDelegate.tsx').WaClickDelegate();
  return { events, ga, meta, listeners, cleanup: () => cleanup(),
    click: (attrs, nested = false) => {
      const anchor = attrs ? { getAttribute: key => attrs[key] ?? null } : null;
      const target = attrs ? { closest: selector => {
        assert.equal(selector, 'a[href*="wa.me/"], a[href*="api.whatsapp.com/"]');
        return /wa\.me\/|api\.whatsapp\.com\//.test(attrs.href || '') ? anchor : null;
      } } : null;
      // closest() returns the anchor for either the anchor or a child target.
      listeners.get('click').callback({ target: nested && target ? { closest: target.closest } : target });
    } };
}

test('generated free-trial hero keeps its named placement', () => {
  const h = harness(); h.click(hero('free-trial', 'free-trial-hero'));
  assert.equal(h.events.length, 1); assert.equal(h.events[0].placement, 'free-trial-hero');
});
test('generated FAQ hero keeps its named placement for a child click', () => {
  const h = harness(); h.click(hero('faq', 'faq-hero'), true);
  assert.equal(h.events.length, 1); assert.equal(h.events[0].placement, 'faq-hero');
});
test('existing data-cta and data-wa precedence is preserved', () => {
  const h = harness();
  h.click({ href: 'https://wa.me/447307410512', 'data-cta': 'card', 'data-wa': 'old-wa', 'data-surface': 'free-trial-contact' });
  h.click({ href: 'https://wa.me/447307410512', 'data-wa': 'legacy', 'data-surface': 'other' });
  assert.deepEqual(Array.from(h.events, e => e.placement), ['card', 'legacy']);
});
test('an unlabelled WhatsApp link retains the generic fallback', () => {
  const h = harness(); h.click({ href: 'https://api.whatsapp.com/send?phone=447307410512' });
  assert.equal(h.events[0].placement, 'link');
});
test('unrelated links and missing targets emit nothing', () => {
  const h = harness(); h.click({ href: '/faq', 'data-surface': 'faq' }); h.click(null);
  assert.equal(h.events.length, 0); assert.equal(h.ga.length, 0); assert.equal(h.meta.length, 0);
});
test('rejected, absent or inaccessible consent emits nothing', () => {
  for (const consent of ['rejected', null, 'throws']) {
    const h = harness(consent); h.click(hero('free-trial', 'free-trial-hero'));
    assert.equal(h.events.length, 0); assert.equal(h.ga.length, 0); assert.equal(h.meta.length, 0);
  }
});
test('the capture listener is removed by effect cleanup', () => {
  const h = harness(); assert.equal(h.listeners.size, 1); assert.equal(h.listeners.get('click').options.capture, true);
  h.cleanup(); assert.equal(h.listeners.size, 0);
});
test('consented payload stays limited to placement/path, without URL query or message', () => {
  const h = harness(); h.click(hero('free-trial', 'free-trial-hero'));
  assert.deepEqual(Object.keys(h.events[0]).sort(), ['event', 'event_category', 'page', 'placement']);
  assert.equal(h.events[0].event, 'whatsapp_click'); assert.equal(h.events[0].page, '/free-trial');
  assert.equal(h.ga.length, 1); assert.equal(h.ga[0][0], 'event'); assert.equal(h.ga[0][1], 'whatsapp_click');
  assert.deepEqual(JSON.parse(JSON.stringify(h.ga[0][2])), { event_category: 'conversion', placement: h.events[0].placement, page: '/free-trial' });
  assert.equal(h.meta.length, 2); assert.equal(h.meta[0][1], 'Contact'); assert.equal(h.meta[1][1], 'WhatsAppClick');
});
