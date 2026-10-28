import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import test from 'node:test';
const source=readFileSync('app/blog/iptv-buffering-firestick/page.tsx','utf8');
const checks=new Function('return '+source.match(/const CHECKS = ([\s\S]*?);\n\nexport default/)[1])();
const description="Seven diagnostic checks for Firestick buffering: record symptoms, confirm device and player requirements, compare supported settings one at a time, and protect private login details.",outro="If symptoms remain, report the results from your own device and connection without assuming the device, provider or service is at fault. Mask passwords, tokens and private URLs in support screenshots. A successful trial does not guarantee future playback.";
function diagnostic(texts){
 assert.match(texts[0],/actual viewing device/);assert.match(texts[0],/documented requirements/);
 assert.match(texts[1],/Do not infer the cause/);assert.match(texts[2],/compatibility before buying/);assert.match(texts[2],/one variable at a time/);
 assert.match(texts[3],/original settings/);assert.match(texts[4],/exact model/);assert.match(texts[4],/restore it/);
 assert.match(texts[5],/clearing cache from clearing app data/);assert.match(texts[6],/channel, programme, time, error/);
 assert.doesNotMatch(texts.join(' '),/Kills 90%|usually the freeze|Software decoder cooks|ISP DNS is often slow|Weekly is enough|we switch the source/);
}
test('Buffering guide replaces presumed causes and guaranteed fixes with conditional diagnostics',()=>{
 assert.deepEqual(checks.map(x=>x.t),['Speed','Band','Ethernet','DNS','Decoder','Cache','One channel only']);diagnostic(checks.map(x=>x.d));
 assert.ok(source.includes(description));assert.ok(source.includes(outro));assert.match(outro,/Mask passwords, tokens and private URLs/);
});
if(!process.env.SOURCE_ONLY)test('Built buffering guide has seven matching visible and HowTo checks, metadata and exact WhatsApp journey',()=>{
 const h=readFileSync('.next/server/app/blog/iptv-buffering-firestick.html','utf8');
 const decode=s=>s.replace(/&amp;/g,'&').replace(/&#x27;|&#39;|&apos;/g,"'").replace(/&quot;/g,'"');
 const plain=s=>decode(s.replace(/<[^>]+>/g,'')).replace(/\s+/g,' ').trim();
 const cards=[...h.matchAll(/<li\b[^>]*id="(step-\d+)"[^>]*>([\s\S]*?)<\/li>/g)];assert.equal(cards.length,7);
 const visible=cards.map(m=>plain(m[2].match(/<h2\b[^>]*>[\s\S]*?<\/h2>\s*<p\b[^>]*>([\s\S]*?)<\/p>/)[1]));diagnostic(visible);assert.deepEqual(visible,checks.map(x=>x.d));
 const nodes=x=>!x||typeof x!=='object'?[]:[x,...Object.values(x).flatMap(v=>Array.isArray(v)?v.flatMap(nodes):nodes(v))];
 const graph=[...h.matchAll(/<script\b[^>]*type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/g)].map(m=>JSON.parse(m[1])).flatMap(nodes);
 const how=graph.filter(x=>x['@type']==='HowTo');assert.equal(how.length,1);assert.equal(how[0].totalTime,undefined);assert.equal(how[0].description,description);
 assert.deepEqual(how[0].step.map(x=>x.text),visible);assert.deepEqual(how[0].step.map(x=>x.name),checks.map(x=>x.t));
 const url='https://iptvforfirestickusa.com/blog/iptv-buffering-firestick';
 how[0].step.forEach((x,i)=>{assert.equal(x.position,i+1);assert.equal(x.url,url+'#'+cards[i][1]);});
 assert.equal(decode(h.match(/<meta name="description" content="([^"]*)"/)[1]),description);
 const v=plain(h.replace(/<script\b[\s\S]*?<\/script>/g,''));assert.ok(v.includes(outro));assert.ok(v.includes(description));assert.doesNotMatch(v,/Kills 90%|the stick or your internet provider is the bottleneck/);
 const links=[...h.matchAll(/<a\b[^>]*href="([^"]+)"/g)].map(m=>decode(m[1]));
 for(const p of ['/faq/buffering','/firestick','/devices','/blog','/blog/firestick-setup-usa','/blog/iptv-smart-tv-usa','/blog/firestick-24h-trial'])assert.ok(links.includes(p),p);
 const wa=links.filter(x=>x.startsWith('https://wa.me/')).map(x=>new URL(x));assert.ok(wa.length);assert.ok(wa.every(x=>x.pathname==='/447307410512'));assert.ok(wa.some(x=>x.searchParams.get('text')==='Hi — Firestick USA 24h trial. Device: | Ref: blog-buffering'));
 assert.ok(h.includes('rel="canonical" href="'+url+'"'));
});
