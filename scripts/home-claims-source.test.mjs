import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import test from 'node:test';
test('Homepage qualifies activation timing and device compatibility before payment',()=>{
 const s=readFileSync('app/page.tsx','utf8');
 assert.doesNotMatch(s,/usually under 10 minutes|Works on Firestick, Smart TV, Android, iPhone/);
 assert.match(s,/Confirm activation timing on WhatsApp before paying/);
 assert.match(s,/Confirm your exact model, system and compatible player before paying/);
 assert.match(s,/href=\{whatsappHref\(WA_PREFILL.trial\)\}/);
 assert.match(s,/id="plans"/);
});
