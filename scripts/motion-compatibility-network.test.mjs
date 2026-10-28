import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import test from 'node:test';
const src=readFileSync('lib/motion-path.ts','utf8');
const code=src.replace(/^import[^\n]+\n/,'').replaceAll('export ','').replaceAll(' as const','').replace('pageUrl: string','pageUrl');
const steps=new Function(code+';return MOTION_STEPS;')();
const names=['Message WhatsApp','Start the 24-hour trial','Prep the Firestick','Install 7 MOTION','Enter the chat details','Check a night at home','Choose a duration if it holds'];
const unchanged={
 1:'You get a private 24-hour trial, no card. Check it on your own TV. Access stays in the chat — we do not publish a public playlist on this site.',
 4:'Start data stays on WhatsApp. Do not hunt a public playlist file on the open web.',
 5:'A game or a show on your own screen. If it holds, then you pick a duration — not before.',
 6:'If the night at home holds, pick a duration on the same WhatsApp thread. Login details stay in that chat.'
};
function guidance(s){
 assert.match(s[0],/exact Firestick model and system version/);assert.match(s[0],/Before paying, confirm the player/);assert.match(s[0],/region/);assert.match(s[0],/login format/);
 assert.match(s[2],/documented requirements/);assert.match(s[2],/time, error/);assert.match(s[2],/one channel or all channels/);
 assert.match(s[2],/If your setup supports it/);assert.match(s[2],/one variable at a time/);
 assert.match(s[3],/exact model, system and login format before installing/);assert.match(s[3],/regional store/);assert.match(s[3],/source confirmed by the publisher/);
 assert.match(s[3],/Mask passwords, tokens and private URLs/);
 for(const i of [0,2,3])assert.doesNotMatch(s[i],/Put the Firestick on 5 GHz|Lite is fine at 1080p|4K Max is calmer|faster start, less sideload/);
}
test('Shared guide verifies compatibility before payment and qualifies network and installation advice',()=>{
 assert.deepEqual(steps.map(x=>x.name),names);guidance(steps.map(x=>x.text));
 for(const [i,text] of Object.entries(unchanged))assert.equal(steps[Number(i)].text,text);
});
if(!process.env.SOURCE_ONLY)test('Built guide exposes qualified advice in the visible cards and matching HowTo steps',()=>{
 const h=readFileSync('.next/server/app/blog/firestick-setup-usa.html','utf8');
 const plain=s=>s.replace(/<[^>]+>/g,'').replace(/&amp;/g,'&').replace(/&#x27;|&#39;|&apos;/g,"'").replace(/&quot;/g,'"').replace(/\s+/g,' ').trim();
 const cards=[...h.matchAll(/<li\b[^>]*id="step-\d+"[^>]*>([\s\S]*?)<\/li>/g)];
 assert.equal(cards.length,7);
 const visible=cards.map(m=>plain(m[1].match(/<h3\b[^>]*>[\s\S]*?<\/h3>\s*<p\b[^>]*>([\s\S]*?)<\/p>/)[1]));
 guidance(visible);
 assert.deepEqual(visible,steps.map(x=>x.text));
 const nodes=x=>!x||typeof x!=='object'?[]:[x,...Object.values(x).flatMap(v=>Array.isArray(v)?v.flatMap(nodes):nodes(v))];
 const graphs=[...h.matchAll(/<script\b[^>]*type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/g)].map(m=>JSON.parse(m[1])).flatMap(nodes);
 const how=graphs.filter(x=>x['@type']==='HowTo');assert.equal(how.length,1);
 assert.deepEqual(how[0].step.map(x=>x.text),visible);assert.equal(how[0].totalTime,undefined);
 for(const [i,text] of Object.entries(unchanged))assert.equal(visible[Number(i)],text);
});
