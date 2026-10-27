import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import test from 'node:test';
test('Built homepage exposes qualified activation/device guidance with original trial and pricing journey',()=>{
 const html=readFileSync('.next/server/app/index.html','utf8');
 const visible=html.replace(/<script\b[\s\S]*?<\/script>/g,' ').replace(/<style\b[\s\S]*?<\/style>/g,' ').replace(/<[^>]+>/g,' ').replace(/\s+/g,' ');
 assert.match(visible,/Confirm activation timing on WhatsApp before paying/);
 assert.match(visible,/Confirm your exact model, system and compatible player before paying/);
 assert.doesNotMatch(visible,/usually under 10 minutes|Works on Firestick, Smart TV, Android, iPhone/);
 assert.match(visible,/Start 24h trial/);
 const hero=[...html.matchAll(/<a\b[^>]*>/g)].map(m=>m[0]).find(t=>t.includes('data-cta="hero"'));
 assert.ok(hero);const href=hero.match(/href="([^"]+)"/)[1].replace(/&amp;/g,'&');
 const url=new URL(href);assert.equal(url.pathname,'/447307410512');
 assert.equal(url.searchParams.get('text'),'Hi — Firestick USA 24h trial. Device:');
 assert.equal((html.match(/id="plans"/g)||[]).length,1);
});
