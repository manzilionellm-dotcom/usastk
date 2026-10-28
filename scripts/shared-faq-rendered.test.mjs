import assert from "node:assert/strict";
import {readFileSync} from "node:fs";
import test from "node:test";
const f=JSON.parse(readFileSync("aio.config.json","utf8")).i18n.en.faq;
const decode=s=>s.replace(/&amp;/g,"&").replace(/&#x27;|&#39;|&apos;/g,"'").replace(/&quot;/g,'"');
const plain=s=>decode(s.replace(/<script\b[\s\S]*?<\/script>/g," ").replace(/<style\b[\s\S]*?<\/style>/g," ").replace(/<[^>]+>/g," ")).replace(/\s+/g," ");
const nodes=x=>!x||typeof x!=="object"?[]:[x,...Object.values(x).flatMap(v=>Array.isArray(v)?v.flatMap(nodes):nodes(v))];
for(const [path,canonical]of[["index.html","https://iptvforfirestickusa.com"],["faq.html","https://iptvforfirestickusa.com/faq"]])test(path+" keeps ten matching FAQ/schema answers and WhatsApp journey",()=>{
 const html=readFileSync(".next/server/app/"+path,"utf8"),visible=plain(html);
 const graph=[...html.matchAll(/<script\b[^>]*type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/g)].map(m=>JSON.parse(m[1])).flatMap(nodes);
 const faqs=graph.filter(x=>x["@type"]==="FAQPage");assert.equal(faqs.length,1);assert.equal(faqs[0].mainEntity.length,10);
 for(const [i,item]of faqs[0].mainEntity.entries()){assert.equal(item.name,f[i].q);assert.equal(item.acceptedAnswer.text,f[i].a);assert.ok(visible.includes(f[i].a));}
 assert.match(faqs[0].mainEntity[2].acceptedAnswer.text,/Ask for current activation timing/);
 assert.match(faqs[0].mainEntity[3].acceptedAnswer.text,/hide usernames, passwords and access tokens/);
 const links=[...html.matchAll(/<a\b[^>]*href="([^"]+)"/g)].map(m=>decode(m[1]));
 const wa=links.filter(x=>x.startsWith("https://wa.me/")).map(x=>new URL(x));assert.ok(wa.length);assert.ok(wa.every(x=>x.pathname==="/447307410512"));
 assert.ok(wa.some(x=>x.searchParams.get("text")===(path==="index.html"?"Hi — Firestick USA 24h trial. Device:":"Hi — IPTV USA question (trial / Firestick). City + device:")));
 const actual=html.match(/rel="canonical" href="([^"]+)"/)?.[1];assert.ok(actual);assert.equal((actual.endsWith("/")?actual.slice(0,-1):actual),canonical);
});