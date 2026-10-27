import assert from "node:assert/strict";
import {readFileSync} from "node:fs";
import test from "node:test";
const f=JSON.parse(readFileSync("aio.config.json","utf8")).i18n.en.faq;
test("Shared trial/setup FAQ confirms exact model and system before payment without activation guarantees",()=>{
 assert.equal(f.length,10);
 assert.doesNotMatch(f[1].a,/A Firestick is enough/);
 assert.match(f[1].a,/supported login format/);
 assert.match(f[2].a,/Fire OS and Vega OS need separate checks/);
 assert.match(f[2].a,/before paying/);
 assert.doesNotMatch(f[2].a,/5 to 10 minutes|usually under 10 minutes|Lite is fine|calmer for sport/);
 assert.match(f[2].a,/Ask for current activation timing/);
});
test("Shared buffering FAQ gathers scope, compares one variable conditionally and protects access data",()=>{
 assert.doesNotMatch(f[3].a,/usually the room network|15 Mbps|25 Mbps/);
 assert.match(f[3].a,/whether one programme or all are affected/);
 assert.match(f[3].a,/documented requirements/);
 assert.match(f[3].a,/keeping other settings unchanged/);
 assert.match(f[3].a,/hide usernames, passwords and access tokens/);
});