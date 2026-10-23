import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';

const origin = 'https://iptvforfirestickusa.com';
const read = path => readFileSync(`.next/server/app/${path}.html`, 'utf8');
const decode = text => text.replaceAll('&#x27;', "'").replaceAll('&#39;', "'").replaceAll('&amp;', '&').replaceAll('&quot;', '"');
const plain = html => decode(html.replace(/<[^>]+>/g, ' ')).replace(/\s+/g, ' ').trim();
const main = html => html.match(/<main\b[^>]*>([\s\S]*?)<\/main>/)?.[1] ?? '';
function howTo(html) {
  const nodes = [...html.matchAll(/<script\b[^>]*type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/g)].map(match => JSON.parse(match[1]));
  return nodes.flatMap(node => Array.isArray(node) ? node : node['@graph'] ?? [node]).find(node => node['@type'] === 'HowTo');
}

test('the Smart TV device card describes native TV apps', () => {
  const card = read('devices').match(/<a\b[^>]*href="\/devices\/smart-tv"[^>]*>([\s\S]*?)<\/a>/)?.[1];
  assert.ok(card, 'Smart TV card');
  assert.match(plain(card), /Tizen/);
  assert.match(plain(card), /webOS/);
  assert.doesNotMatch(plain(card), /Downloader or the TV/);
});

for (const path of ['devices/smart-tv', 'blog/iptv-smart-tv-usa']) {
  test(`${path} gives compatible steps in both visible HTML and HowTo`, () => {
    const html = read(path);
    const node = howTo(html);
    assert.ok(node?.step?.length, 'HowTo steps');
    const steps = node.step.map(step => step.text).join(' ');
    assert.match(steps, /Samsung Tizen/);
    assert.match(steps, /LG webOS/);
    assert.match(steps, /model/);
    assert.match(steps, /region/);
    assert.doesNotMatch(steps, /Install Downloader|Downloader-style|Buy a Firestick|Firestick\s*\(~?\$25\)/);
    const visible = plain(main(html));
    for (const step of node.step) assert.ok(visible.includes(step.text), `step not rendered: ${step.name}`);
    assert.match(visible, /Android APK/);
  });
}

test('both Smart TV guides render dated manufacturer references', () => {
  for (const path of ['devices/smart-tv', 'blog/iptv-smart-tv-usa']) {
    const visible = main(read(path));
    assert.ok(visible.includes('https://developer.samsung.com/smarttv/develop/faq/application-testing.html'), path);
    assert.ok(visible.includes('https://www.lg.com/au/support/product-support/troubleshoot/help-library/cs-CT52001891-20154548998558/'), path);
    assert.match(visible, /<time\b[^>]*dateTime="2026-10-22"/i, path);
  }
});

for (const path of ['devices', 'devices/smart-tv', 'blog/iptv-smart-tv-usa']) {
  test(`${path} retains canonical, one H1 and official WhatsApp links`, () => {
    const html = read(path);
    assert.equal([...html.matchAll(/<h1\b/g)].length, 1);
    assert.ok(html.includes(`<link rel="canonical" href="${origin}/${path}"`));
    const numbers = [...html.matchAll(/https:\/\/wa\.me\/(\d+)/g)].map(match => match[1]);
    assert.ok(numbers.length > 0);
    assert.deepEqual([...new Set(numbers)], ['447307410512']);
  });
}
