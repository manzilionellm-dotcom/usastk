import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import test from 'node:test';
const src=readFileSync('app/firestick/page.tsx','utf8');
const steps=new Function('return '+src.match(/const steps = ([\s\S]*?);\n\nconst howToSchema/)[1])();
const why="Confirm the player and current setup timing for your exact device before paying. Test an authorized stream on the connection you intend to use; a home test does not establish availability on a hotel network or guarantee future playback. Login details stay in the same WhatsApp chat. We do not publish a public playlist on this site.";
function guidance(texts){
 assert.match(texts[0],/exact Firestick model and system version/);assert.match(texts[0],/Before paying/);assert.match(texts[0],/regional availability and login format/);
 assert.match(texts[2],/documented requirements/);assert.match(texts[2],/one channel or all channels/);assert.match(texts[2],/If your setup supports it/);assert.match(texts[2],/one variable at a time/);
 assert.match(texts[3],/exact model, system and login format before installing/);assert.match(texts[3],/regional store/);assert.match(texts[3],/source confirmed by the publisher/);assert.match(texts[3],/Mask passwords, tokens and private URLs/);
 for(const i of [0,2,3])assert.doesNotMatch(texts[i],/Put the Firestick on 5 GHz|Lite is fine|4K Max is calmer|faster start, less sideload/);
}
test('Six-step Firestick guide verifies compatibility and qualifies network and installation advice',()=>{
 assert.equal(steps.length,6);guidance(steps.map(x=>x.text));assert.ok(src.includes(why));
 assert.deepEqual(steps.map(x=>x.name),['Message WhatsApp','Take the 24h trial','Prep the stick','Install 7 MOTION','Enter the chat details','Check a night at home']);
 assert.equal(steps[1].text,'You get a 24-hour trial, no card. Check it in your living room at night, not on a screenshot.');
 assert.equal(steps[4].text,'Start data stays on the same WhatsApp thread. Do not hunt a public playlist on the open web.');
 assert.equal(steps[5].text,'A game or a show on your own TV. If it holds, then you pick a plan — not before.');
});
if(!process.env.SOURCE_ONLY)test('Built Firestick guide has matching visible/schema advice and conditional home/travel guidance',()=>{
 const h=readFileSync('.next/server/app/firestick.html','utf8');
 const plain=s=>s.replace(/<[^>]+>/g,'').replace(/&amp;/g,'&').replace(/&#x27;|&#39;|&apos;/g,"'").replace(/&quot;/g,'"').replace(/\s+/g,' ').trim();
 const cards=[...h.matchAll(/<li\b[^>]*id="step-\d+"[^>]*>([\s\S]*?)<\/li>/g)];assert.equal(cards.length,6);
 const visible=cards.map(m=>plain(m[1].match(/<h3\b[^>]*>[\s\S]*?<\/h3>\s*<p\b[^>]*>([\s\S]*?)<\/p>/)[1]));
 guidance(visible);assert.deepEqual(visible,steps.map(x=>x.text));
 const nodes=x=>!x||typeof x!=='object'?[]:[x,...Object.values(x).flatMap(v=>Array.isArray(v)?v.flatMap(nodes):nodes(v))];
 const graph=[...h.matchAll(/<script\b[^>]*type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/g)].map(m=>JSON.parse(m[1])).flatMap(nodes);
 const how=graph.filter(x=>x['@type']==='HowTo');assert.equal(how.length,1);assert.deepEqual(how[0].step.map(x=>x.text),visible);assert.equal(how[0].totalTime,undefined);
 const v=plain(h.replace(/<script\b[\s\S]*?<\/script>/g,''));assert.ok(v.includes(why));assert.doesNotMatch(v,/a short start: same chat, same night/);
});
