import assert from 'node:assert/strict';
import test from 'node:test';
import {readFileSync,existsSync} from 'node:fs';
import {join} from 'node:path';
const output='.next/server/app',expected=['/firestick','/devices','/cities','/blog','/faq','/refer','/#plans'];
for(const route of ['index','free-trial','faq/buffering','devices/smart-tv'])test(route+': generated mobile disclosure has seven real destinations without changing trial/contact access',()=>{
 const html=readFileSync(join(output,route+'.html'),'utf8').replace(/<script\b[\s\S]*?<\/script>/g,'');
 const block=[...html.matchAll(/<details\b[\s\S]*?<\/details>/g)].map(m=>m[0]).find(s=>s.includes('aria-label="Mobile navigation"'));
 assert.ok(block,'native menu must be in server HTML, not only serialized data');
 const opening=block.match(/<details\b[^>]*>/)[0];assert.ok(opening.includes('md:hidden'));assert.doesNotMatch(opening,/\sopen(?:[\s=>])/);
 assert.match(block,/<summary\b[^>]*>\s*Menu\s*<\/summary>/);
 const nav=block.match(/<nav\b[^>]*aria-label="Mobile navigation"[\s\S]*?<\/nav>/)?.[0];assert.ok(nav);
 const links=[...nav.matchAll(/<a\b[^>]*href="([^"]+)"[^>]*>/g)].map(m=>m[1]);assert.deepEqual(links,expected);
 for(const href of links){const u=new URL(href,'https://preview.example/'+(route==='index'?'':route));const path=u.pathname==='/'?'index':u.pathname.slice(1);assert.ok(existsSync(join(output,path+'.html')),href);if(u.hash)assert.ok(readFileSync(join(output,path+'.html'),'utf8').includes('id="'+u.hash.slice(1)+'"'));}
 assert.match(html,/data-cta="header"/);assert.ok(html.includes('https://wa.me/447307410512?text='));
});
