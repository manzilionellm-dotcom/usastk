import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import test from 'node:test';
const read=p=>readFileSync(p,'utf8');
const cities=new Function(read('lib/cities.ts').split('] as const;')[0].replace('export const','const')+'];return CITIES;')();
const expected={"new-york":"Spectrum and Verizon Fios. Check the player and authorized stream requirements, then compare supported Ethernet and Wi-Fi on your own Firestick without assuming either connection will perform better.","los-angeles":"Spectrum / AT&T. Confirm the Firestick model and supported network options before buying an adapter. If supported, compare Ethernet and available Wi-Fi one variable at a time, keeping the original settings for reversal.","houston":"Xfinity and AT&T fiber. Check the documented requirements for your player, authorized stream format and simultaneous use, then measure on the playback device. An advertised speed alone does not guarantee 4K playback.","chicago":"Xfinity. Record the Firestick model, player, time and error before changing network settings. Compare available Wi-Fi bands or Ethernet only when supported, one variable at a time; a dense building alone does not identify the cause.","seattle":"Xfinity / Ziply. Note whether one channel or all channels are affected, then check the player requirements and test on your Firestick at viewing time. A Wi-Fi band alone does not prove the cause of a freeze.","san-diego":"Cox / Spectrum. Test the existing Firestick position and connection before buying hardware. If an adapter is needed, confirm compatibility with the exact device; compare one supported change at a time and restore an unsuccessful change."};
test('Six city network notes check requirements and supported changes before attributing a cause or buying hardware',()=>{
 assert.equal(cities.length,16);
 for(const [slug,note]of Object.entries(expected))assert.equal(cities.find(c=>c.slug===slug).note,note,slug);
 assert.equal(new Set(cities.map(c=>c.slug)).size,16);
 assert.doesNotMatch(Object.values(expected).join(' '),/\$15|25 Mbps is enough|Ethernet to the Firestick beats|2\.4 GHz freezes HD/);
});
const clean=s=>s.replace(/<[^>]*>/g,'').replace(/&amp;/g,'&').replace(/&#x27;|&#39;|&apos;/g,"'").replace(/&quot;/g,'"').replace(/\s+/g,' ').trim();
if(!process.env.SOURCE_ONLY){
 for(const slug of Object.keys(expected))test('Built '+slug+' keeps city identity, qualified visible/meta note, prices and complete WhatsApp attribution',()=>{
  const c=cities.find(c=>c.slug===slug),h=read('.next/server/app/cities/'+slug+'.html');
  const visible=h.replace(/<script\b[^>]*>[\s\S]*?<\/script>/g,'').replace(/<style\b[^>]*>[\s\S]*?<\/style>/g,'');
  assert.ok(clean(visible).includes(c.note));
  const description=h.match(/<meta\b[^>]*name="description"[^>]*content="([^"]+)"/);assert.ok(description);
  assert.equal(clean(description[1]),'Firestick trial in '+c.name+', '+c.state+'. No card. WhatsApp activation. '+c.note);
  assert.equal(clean(visible.match(/<h1\b[^>]*>([\s\S]*?)<\/h1>/)[1]),'Firestick IPTV in '+c.name);
  assert.equal(clean(h.match(/<link\b[^>]*rel="canonical"[^>]*href="([^"]+)"/)[1]),'https://iptvforfirestickusa.com/cities/'+slug);
  assert.ok(clean(visible).includes('Same plans as the rest of the US: $12 / $25 / $30 / $55. 24h trial, no card. Login stays private.'));
  const links=[...visible.matchAll(/<a\b[^>]*href="([^"]+)"/g)].map(m=>m[1].replace(/&amp;/g,'&'));
  const message='Hi — 24h trial IPTV Firestick USA. City: '+c.name+', '+c.state+'. Device: | Ref: city-'+slug;
  assert.ok(links.some(l=>{if(!l.startsWith('https://wa.me/'))return false;const u=new URL(l);return u.pathname==='/447307410512'&&u.searchParams.get('text')===message;}));
  assert.ok(links.includes('/firestick'));assert.ok(links.includes('/cities'));
 });
 test('Built cities index retains all16 city links and exposes all six qualified notes',()=>{
  const h=read('.next/server/app/cities.html'),visible=h.replace(/<script\b[^>]*>[\s\S]*?<\/script>/g,'').replace(/<style\b[^>]*>[\s\S]*?<\/style>/g,'');
  for(const c of cities){assert.ok(visible.includes('href="/cities/'+c.slug+'"'));assert.ok(clean(visible).includes(c.note));}
  assert.equal(clean(h.match(/<link\b[^>]*rel="canonical"[^>]*href="([^"]+)"/)[1]),'https://iptvforfirestickusa.com/cities');
 });
}
