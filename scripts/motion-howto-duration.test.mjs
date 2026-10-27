import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import test from 'node:test';
const src=readFileSync('lib/motion-path.ts','utf8');
const executable=src.replace(/^import[^\n]+\n/,'').replaceAll('export ','').replaceAll(' as const','').replace('pageUrl: string','pageUrl');
const {steps,create}=new Function('SITE_NAME','SITE_URL','WHATSAPP_E164','WHATSAPP_HREF_BASE',executable+';return {steps:MOTION_STEPS,create:motionHowToSchema};')('IPTV For Firestick USA','https://iptvforfirestickusa.com','447307410512','https://wa.me/447307410512');
const page='https://iptvforfirestickusa.com/blog/firestick-setup-usa';
test('Shared seven-step HowTo factory omits unsupported duration and retains exact steps and fragment order',()=>{
 const how=create(page);assert.equal(how.totalTime,undefined);
 assert.equal(how['@type'],'HowTo');assert.equal(how.step.length,7);
 assert.equal(how.inLanguage,'en-US');
 assert.deepEqual(how.step.map(x=>({name:x.name,text:x.text})),steps.map(x=>({name:x.name,text:x.text})));
 how.step.forEach((x,i)=>{assert.equal(x.position,i+1);assert.equal(x.url,page+'#step-'+(i+1));});
 assert.ok(how.description.includes('24h trial'));assert.equal(how.tool.length,2);assert.equal(how.supply.length,1);
});
if(!process.env.SOURCE_ONLY)test('Built seven-step guide matches actual factory output and retains canonical, trial and related navigation',()=>{
 const h=readFileSync('.next/server/app/blog/firestick-setup-usa.html','utf8');
 const decode=s=>s.replace(/&amp;/g,'&').replace(/&#x27;|&#39;/g,"'").replace(/&quot;/g,'"');
 const plain=s=>decode(s.replace(/<[^>]+>/g,'')).replace(/\s+/g,' ').trim();
 const nodes=x=>!x||typeof x!=='object'?[]:[x,...Object.values(x).flatMap(v=>Array.isArray(v)?v.flatMap(nodes):nodes(v))];
 const graph=[...h.matchAll(/<script\b[^>]*type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/g)].map(m=>JSON.parse(m[1])).flatMap(nodes);
 const how=graph.filter(x=>x['@type']==='HowTo');assert.equal(how.length,1);assert.deepEqual(how[0],create(page));
 const cards=[...h.matchAll(/<li\b[^>]*id="(step-\d+)"[^>]*>([\s\S]*?)<\/li>/g)];assert.equal(cards.length,7);
 how[0].step.forEach((s,i)=>{
  assert.equal(s.url,page+'#'+cards[i][1]);
  assert.equal(plain(cards[i][2].match(/<h3\b[^>]*>([\s\S]*?)<\/h3>/)[1]),s.name);
  assert.equal(plain(cards[i][2].match(/<h3\b[^>]*>[\s\S]*?<\/h3>\s*<p\b[^>]*>([\s\S]*?)<\/p>/)[1]),s.text);
 });
 assert.ok(h.includes('rel="canonical" href="'+page+'"'));
 const links=[...h.matchAll(/<a\b[^>]*href="([^"]+)"/g)].map(m=>decode(m[1]));
 for(const path of ['/firestick','/faq/buffering','/blog/iptv-buffering-firestick','/blog'])assert.ok(links.includes(path),path);
 const wa=links.filter(x=>x.startsWith('https://wa.me/')).map(x=>new URL(x));
 assert.ok(wa.length);assert.ok(wa.every(x=>x.pathname==='/447307410512'));assert.ok(wa.some(x=>x.searchParams.get('text')==='Hi — Firestick IPTV USA + trial. City + device:'));
});
