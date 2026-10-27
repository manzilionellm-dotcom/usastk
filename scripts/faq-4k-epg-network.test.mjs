import assert from "node:assert/strict";
import {readFileSync} from "node:fs";
import test from "node:test";
const f=JSON.parse(readFileSync("aio.config.json","utf8")).i18n.en.faq;
test("Shared 4K EPG VPN answer requires specific playback and guide sources before purchase without a blanket VPN rule",()=>{
 assert.equal(f.length,10);assert.equal(f[9].q,"Do I need 4K, a TV guide (EPG), or a VPN?");
 assert.doesNotMatch(f[9].a,/forum myth|VPN is not required|enough for most rooms|7 MOTION includes an EPG/);
 assert.match(f[9].a,/exact device, player, display and authorized stream/);
 assert.match(f[9].a,/authorized source and matching channel identifiers/);
 assert.match(f[9].a,/documented network requirements of your service and player/);
 assert.match(f[9].a,/before paying/);
});
const decode=s=>s.replace(/&amp;/g,"&").replace(/&#x27;|&#39;|&apos;/g,"'").replace(/&quot;/g,'"');
const plain=s=>decode(s.replace(/<script\b[\s\S]*?<\/script>/g," ").replace(/<style\b[\s\S]*?<\/style>/g," ").replace(/<[^>]+>/g," ")).replace(/\s+/g," ");
const nodes=x=>!x||typeof x!=="object"?[]:[x,...Object.values(x).flatMap(v=>Array.isArray(v)?v.flatMap(nodes):nodes(v))];
if(!process.env.SOURCE_ONLY)for(const path of ["index.html","faq.html"])test(path+" exposes one shared 4K/EPG/VPN answer identical to JSON-LD and retains WhatsApp",()=>{
 const html=readFileSync(".next/server/app/"+path,"utf8"),visible=plain(html);
 const graph=[...html.matchAll(/<script\b[^>]*type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/g)].map(m=>JSON.parse(m[1])).flatMap(nodes);
 const faqs=graph.filter(x=>x["@type"]==="FAQPage");assert.equal(faqs.length,1);assert.equal(faqs[0].mainEntity.length,10);
 assert.equal(faqs[0].mainEntity[9].name,f[9].q);assert.equal(faqs[0].mainEntity[9].acceptedAnswer.text,f[9].a);assert.ok(visible.includes(f[9].a));
 assert.doesNotMatch(visible,/A required VPN is a forum myth|7 MOTION includes an EPG/);
 const wa=[...html.matchAll(/<a\b[^>]*href="([^"]+)"/g)].map(m=>decode(m[1])).filter(x=>x.startsWith("https://wa.me/")).map(x=>new URL(x));
 assert.ok(wa.length);assert.ok(wa.every(x=>x.pathname==="/447307410512"));
 assert.ok(wa.some(x=>x.searchParams.get("text")===(path==="index.html"?"Hi — Firestick USA 24h trial. Device:":"Hi — IPTV USA question (trial / Firestick). City + device:")));
});