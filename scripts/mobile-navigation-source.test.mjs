import assert from 'node:assert/strict';
import test from 'node:test';
import {readFileSync} from 'node:fs';
const read=p=>readFileSync(p,'utf8'),source=read('components/site-chrome.tsx'),site=read('lib/site.ts');
const expected=['/firestick','/devices','/cities','/blog','/faq','/refer','/#plans'];
test('mobile header exposes native collapsed disclosure with a keyboard focus target and named navigation',()=>{
 const block=[...source.matchAll(/<details\b[\s\S]*?<\/details>/g)].map(m=>m[0]).find(s=>s.includes('aria-label="Mobile navigation"'));
 assert.ok(block,'mobile visitors need header navigation');assert.match(block,/md:hidden/);assert.doesNotMatch(block.match(/<details\b[^>]*>/)[0],/\sopen(?:[\s=>])/);
 const summary=block.match(/<summary\b[\s\S]*?<\/summary>/)?.[0];assert.ok(summary);assert.match(summary,/>\s*Menu\s*</);assert.match(summary,/min-h-11/);assert.match(summary,/focus-visible:outline/);assert.doesNotMatch(summary,/role="button"|tabIndex/);
 assert.doesNotMatch(block,/onClick|useState|<button/);
});
test('all seven mobile destinations preserve desktop routes and root pricing target with usable focus targets',()=>{
 const nav=source.match(/<nav aria-label="Mobile navigation"[\s\S]*?<\/nav>/)?.[0];assert.ok(nav);
 const tags=[...nav.matchAll(/<Link\b[^>]*>/g)].map(m=>m[0]);assert.equal(tags.length,7);
 const pricing=site.match(/export const PRICING_PATH = "([^"]+)"/)?.[1];
 assert.deepEqual(tags.map(s=>s.match(/href="([^"]+)"/)?.[1]??(/href=\{PRICING_PATH\}/.test(s)?pricing:null)),expected);
 assert.ok(tags.every(s=>s.includes('min-h-11')&&s.includes('focus-visible:outline')));
});
