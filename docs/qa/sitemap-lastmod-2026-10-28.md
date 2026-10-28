# Sitemap modification dates — 2026-10-28

app/sitemap.ts set every URL lastModified to new Date() on generation, without page-specific update evidence. Remove that local variable and mapped field; omit optional lastmod until accurate significant modification dates are available. No dates invented or copied from unrelated pages.

Primary reference, consulted2026-10-28: https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap — lastmod should reflect significant page updates, be consistently accurate and verifiable. This correction makes no crawling/indexing/traffic claim.

Actual sitemap function test with real city/device arrays and a clock that throws:0/1before,1/1after. It compares all32URL records,frequencies/priorities,uniqueness,oneFirestick andexcludedops/api. Generated XML case compares all32locations/frequencies/priorities andabsence of lastmod. Run after build alongside47unchanged existing cases,lint,independentTypeScript andfrozenpnpm install.

Application diff:two lines removed. Exact inverse restores whole sitemap source.32URLs/order,priorities,changeFrequency,canonicalorigin,robots,allpagecontent,CITIES/DEVICES,USD12/25/30/55,447307410512,prefills/refs,navigation/tracking/consent,dependencies/lockfile andexistingtests preserved. No new route,PR,manualretry,merge orproduction publication. Source/generatedXML only;no browser,device,productionHTTP orGA4/GSC access. CI/preview evidence recorded in existing PR22 andcentral PR63.
