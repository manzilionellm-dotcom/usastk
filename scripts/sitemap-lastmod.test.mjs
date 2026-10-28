import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import test from 'node:test';
const read=p=>readFileSync(p,'utf8');
const array=(path,name)=>new Function(read(path).split('] as const;')[0].replace('export const','const')+'];return '+name+';')();
const cities=array('lib/cities.ts','CITIES'),devices=array('lib/devices.ts','DEVICES');
const source=read('app/sitemap.ts');
const body=source.replace(/^import .*;\r?\n/gm,'').replace('export default function sitemap(): MetadataRoute.Sitemap','function sitemap()');
const paths=new Function('return '+source.match(/const staticPaths = (\[[\s\S]*?\]);/)[1])();
const expected=[...paths,...devices.filter(d=>d.slug!=='firestick').map(d=>d.path),...cities.map(c=>'/cities/'+c.slug)].map(path=>({url:'https://iptvforfirestickusa.com'+path,changeFrequency:path===''?'daily':'weekly',priority:path===''?1:path==='/refer'?0.7:0.85}));
const generate=new Function('CITIES','DEVICES','Date',body+';return sitemap();');
test('Actual sitemap keeps all 32 URL records without claiming generation time as page modification time',()=>{
 const entries=generate(cities,devices,class {constructor(){throw new Error('Sitemap must not invent a modification date from the build clock');}});
 assert.equal(entries.length,32);assert.deepEqual(entries,expected);assert.equal(new Set(entries.map(x=>x.url)).size,entries.length);
 assert.ok(entries.every(x=>!Object.hasOwn(x,'lastModified')));
 assert.equal(entries.filter(x=>x.url.endsWith('/firestick')).length,1);
 assert.ok(entries.every(x=>!x.url.endsWith('/ops')&&!x.url.includes('/api/')));
});
if(!process.env.SOURCE_ONLY)test('Generated XML preserves every URL, frequency and priority without unsupported lastmod',()=>{
 const xml=read('.next/server/app/sitemap.xml.body');assert.match(xml,/<urlset\b/);assert.doesNotMatch(xml,/<lastmod\b/i);
 const entries=[...xml.matchAll(/<url>([\s\S]*?)<\/url>/g)].map(m=>({url:m[1].match(/<loc>([\s\S]*?)<\/loc>/)[1].replace(/&amp;/g,'&'),changeFrequency:m[1].match(/<changefreq>([\s\S]*?)<\/changefreq>/)[1],priority:Number(m[1].match(/<priority>([\s\S]*?)<\/priority>/)[1])}));
 assert.equal(entries.length,32);assert.deepEqual(entries,expected);assert.equal(new Set(entries.map(x=>x.url)).size,entries.length);
});
