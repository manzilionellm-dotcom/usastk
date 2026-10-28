import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import test from 'node:test';
const faqs=JSON.parse(readFileSync('aio.config.json','utf8')).i18n.en.bufferingFaq;
function qualified(a){
 assert.match(a[0],/night-time pattern alone does not identify/);assert.match(a[0],/one variable at a time/);
 assert.match(a[1],/channel, programme, time and error/);assert.match(a[1],/Mask passwords, tokens and private URLs/);assert.match(a[1],/does not establish a cause or guarantee a replacement/);
 assert.match(a[2],/documented requirements/);assert.match(a[2],/restore an unsuccessful change/);
 assert.match(a[3],/Before buying hardware/);assert.match(a[3],/regional store, player and login format/);assert.match(a[3],/Age, Wi-Fi band or a model name alone/);
 assert.doesNotMatch(a.join(' '),/usually peak hour wireless|set the DNS to 1\.1\.1\.1|We switch that source|25 Mbps for one stick|fixes most apartments|software decoder overheats|needed only if the stick is a 2018|calmer for sport/);
}
test('Shared buffering FAQ qualifies causes, source changes, decoder settings and hardware purchase',()=>{
 assert.deepEqual(faqs.map(x=>x.q),['Why does it freeze only after 8pm?','One channel only?','4K Max still buffers?','Do I need a new Firestick?']);qualified(faqs.map(x=>x.a));
 assert.ok(readFileSync('app/faq/buffering/page.tsx','utf8').includes("Firestick buffering FAQ: record symptoms, verify device and player requirements, and compare supported settings before buying hardware. 24h trial, no card."));
});
if(!process.env.SOURCE_ONLY)for(const [path,ref] of [['faq/buffering','faq-buffering'],['blog/iptv-buffering-firestick','blog-buffering']])test('Built '+path+' exposes four identical visible/schema FAQ answers and preserved contact',()=>{
 const h=readFileSync('.next/server/app/'+path+'.html','utf8');
 const decode=s=>s.replace(/&amp;/g,'&').replace(/&#x27;|&#39;|&apos;/g,"'").replace(/&quot;/g,'"');
 const plain=s=>decode(s.replace(/<[^>]+>/g,'')).replace(/\s+/g,' ').trim();
 const section=h.match(/<section\b[^>]*id="aio-faq"[^>]*>([\s\S]*?)<\/section>/)[1];
 const cards=[...section.matchAll(/<h3\b[^>]*>([\s\S]*?)<\/h3>\s*<p\b[^>]*>([\s\S]*?)<\/p>/g)].map(m=>({q:plain(m[1]),a:plain(m[2])}));
 assert.deepEqual(cards,faqs);qualified(cards.map(x=>x.a));
 const nodes=x=>!x||typeof x!=='object'?[]:[x,...Object.values(x).flatMap(v=>Array.isArray(v)?v.flatMap(nodes):nodes(v))];
 const graph=[...h.matchAll(/<script\b[^>]*type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/g)].map(m=>JSON.parse(m[1])).flatMap(nodes);
 const faq=graph.filter(x=>x['@type']==='FAQPage');assert.equal(faq.length,1);assert.deepEqual(faq[0].mainEntity.map(x=>({q:x.name,a:x.acceptedAnswer.text})),faqs);
 const links=[...h.matchAll(/<a\b[^>]*href="([^"]+)"/g)].map(m=>decode(m[1]));
 const wa=links.filter(x=>x.startsWith('https://wa.me/')).map(x=>new URL(x));assert.ok(wa.length);assert.ok(wa.every(x=>x.pathname==='/447307410512'));
 assert.ok(wa.some(x=>x.searchParams.get('text')==='Hi — Firestick USA 24h trial. Device: | Ref: '+ref));
 assert.ok(h.includes('rel="canonical" href="https://iptvforfirestickusa.com/'+path+'"'));
 if(path==='faq/buffering'){
  assert.equal(decode(h.match(/<meta name="description" content="([^"]*)"/)[1]),"Firestick buffering FAQ: record symptoms, verify device and player requirements, and compare supported settings before buying hardware. 24h trial, no card.");
  assert.ok(links.includes('/blog/iptv-buffering-firestick'));assert.ok(links.includes('/faq'));
 }
});
