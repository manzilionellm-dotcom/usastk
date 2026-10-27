import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import test from 'node:test';
const s=readFileSync('app/firestick/page.tsx','utf8');
test('Firestick guide qualifies activation before payment without a ten-minute promise',()=>{
 assert.doesNotMatch(s,/5–10|about 10 minutes|totalTime:/);
 assert.match(s,/confirm setup and activation timing on WhatsApp before paying/);
 assert.match(s,/activation timing on WhatsApp before paying/);
 assert.match(s,/not guarantee future playback/);
 assert.match(s,/6 steps — confirm timing before paying/);
 assert.match(s,/step: steps\.map/);
 assert.match(s,/\{steps\.map/);
});
if(!process.env.SOURCE_ONLY)test('Built Firestick guide retains six matching visible/schema steps, original links and private trial journey',()=>{
 const h=readFileSync('.next/server/app/firestick.html','utf8');
 const decode=s=>s.replace(/&amp;/g,'&').replace(/&#x27;|&#39;/g,"'").replace(/&quot;/g,'"');
 const plain=s=>decode(s.replace(/<script\b[\s\S]*?<\/script>/g,' ').replace(/<[^>]+>/g,' ')).replace(/\s+/g,' ').trim();
 const nodes=x=>!x||typeof x!=='object'?[]:[x,...Object.values(x).flatMap(v=>Array.isArray(v)?v.flatMap(nodes):nodes(v))];
 const graph=[...h.matchAll(/<script\b[^>]*type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/g)].map(m=>JSON.parse(m[1])).flatMap(nodes);
 const how=graph.filter(n=>n['@type']==='HowTo');assert.equal(how.length,1);assert.equal(how[0].totalTime,undefined);
 const names=['Message WhatsApp','Take the 24h trial','Prep the stick','Install 7 MOTION','Enter the chat details','Check a night at home'];
 assert.deepEqual(how[0].step.map(x=>x.name),names);
 const cards=[...h.matchAll(/<li\b[^>]*id="(step-\d+)"[^>]*>([\s\S]*?)<\/li>/g)];assert.equal(cards.length,6);
 how[0].step.forEach((x,i)=>{
  assert.equal(x.position,i+1);assert.equal(x.url,'https://iptvforfirestickusa.com/firestick#'+cards[i][1]);
  assert.equal(plain(cards[i][2].match(/<h3\b[^>]*>([\s\S]*?)<\/h3>/)[1]),x.name);
  assert.equal(plain(cards[i][2].match(/<h3\b[^>]*>[\s\S]*?<\/h3>\s*<p\b[^>]*>([\s\S]*?)<\/p>/)[1]),x.text);
 });
 const v=plain(h);assert.doesNotMatch(v,/5–10|about 10 minutes/);
 assert.match(v,/activation timing on WhatsApp before paying/);
 assert.match(v,/does not guarantee future playback/);
 const meta=decode(h.match(/<meta name="description" content="([^"]*)"/)[1]);assert.match(meta,/confirm setup and activation timing on WhatsApp before paying/);
 assert.equal(how[0].description,meta);
 assert.ok(h.includes('rel="canonical" href="https://iptvforfirestickusa.com/firestick"'));
 const links=[...h.matchAll(/<a\b[^>]*href="([^"]+)"/g)].map(m=>decode(m[1]));
 for(const link of ['/','/faq','/faq/buffering','/blog','/devices'])assert.ok(links.includes(link),link);
 const wa=links.filter(x=>x.startsWith('https://wa.me/')).map(x=>new URL(x));assert.ok(wa.length);assert.ok(wa.every(x=>x.pathname==='/447307410512'));
 assert.ok(wa.some(x=>x.searchParams.get('text')==='Hi — IPTV Firestick USA + 24h trial. City + device:'));
});
