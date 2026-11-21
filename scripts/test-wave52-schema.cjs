const fs = require('fs');
const path = require('path');

console.log('================================================================');
console.log('WAVE 52 CONSUMER TOOL #70 & SAFETY GUIDES (77->80) AUDIT SUITE');
console.log('================================================================\n');

let passedTests = 0;
let failedTests = 0;

function assert(condition, testName) {
  if (condition) {
    console.log(`  [PASS] ${testName}`);
    passedTests++;
  } else {
    console.error(`  [FAIL] ${testName}`);
    failedTests++;
  }
}

// 1. Astro template files check
console.log('--- 1. Testing Astro Template & Schema Injection Configuration ---');
const enPagePath = path.join(__dirname, '../src/pages/tools/melamine-tableware-formaldehyde-modeler.astro');
const langPagePath = path.join(__dirname, '../src/pages/[lang]/tools/melamine-tableware-formaldehyde-modeler.astro');
const componentPath = path.join(__dirname, '../src/components/MelamineTablewareSafetyModeler.astro');

assert(fs.existsSync(enPagePath), 'EN tool page exists (src/pages/tools/melamine-tableware-formaldehyde-modeler.astro)');
assert(fs.existsSync(langPagePath), 'Localized tool page exists (src/pages/[lang]/tools/melamine-tableware-formaldehyde-modeler.astro)');
assert(fs.existsSync(componentPath), 'Interactive component exists (src/components/MelamineTablewareSafetyModeler.astro)');

const enContent = fs.readFileSync(enPagePath, 'utf8');
assert(enContent.includes('webAppSchema'), 'EN page defines webAppSchema');
assert(enContent.includes('faqSchema'), 'EN page defines faqSchema');
assert(enContent.includes('breadcrumbSchema'), 'EN page defines breadcrumbSchema');
assert(enContent.includes('excludeFaqSchema={true}'), 'EN page sets excludeFaqSchema={true}');
assert(enContent.includes('excludeBreadcrumbSchema={true}'), 'EN page sets excludeBreadcrumbSchema={true}');

const langContent = fs.readFileSync(langPagePath, 'utf8');
assert(langContent.includes('webAppSchema'), 'Localized page defines webAppSchema');
assert(langContent.includes('faqSchema'), 'Localized page defines faqSchema');
assert(langContent.includes('breadcrumbSchema'), 'Localized page defines breadcrumbSchema');
assert(langContent.includes('excludeFaqSchema={true}'), 'Localized page sets excludeFaqSchema={true}');
assert(langContent.includes('excludeBreadcrumbSchema={true}'), 'Localized page sets excludeBreadcrumbSchema={true}');

// 2. Consumer allowlist
console.log('\n--- 2. Testing Consumer Allowlist ---');
const allowlistPath = path.join(__dirname, '../src/data/consumer-tools-allowlist.json');
const allowlist = JSON.parse(fs.readFileSync(allowlistPath, 'utf8'));
assert(allowlist.includes('melamine-tableware-formaldehyde-modeler'), 'Allowlist contains melamine-tableware-formaldehyde-modeler');
assert(allowlist.length === 70, `Allowlist has exactly 70 items (current: ${allowlist.length})`);

// 3. Tools index cards
console.log('\n--- 3. Testing Tools Index Hub Cards ---');
const enToolsIndex = path.join(__dirname, '../src/pages/tools/index.astro');
const enToolsContent = fs.readFileSync(enToolsIndex, 'utf8');
assert(enToolsContent.includes('melamine-tableware-formaldehyde-modeler'), 'EN Tools index includes melamine-tableware-formaldehyde-modeler card');

const langToolsIndex = path.join(__dirname, '../src/pages/[lang]/tools/index.astro');
const langToolsContent = fs.readFileSync(langToolsIndex, 'utf8');
assert(langToolsContent.includes('melamine-tableware-formaldehyde-modeler'), 'Localized Tools index includes melamine-tableware-formaldehyde-modeler card');

// 4. Multilingual Blog Guides (77 -> 80)
console.log('\n--- 4. Testing Multilingual Safety Guides (80 total, 5 languages) ---');
const newSlugs = [
  'silicone-bakeware-cyclics-oligomer-migration-heat-safety',
  'stainless-steel-cookware-nickel-chromium-acid-leaching-safety',
  'wooden-cutting-board-biofilm-bacteria-microplastics-safety'
];

const langFiles = [
  { lang: 'en', file: 'src/data/blog.json' },
  { lang: 'es', file: 'src/data/blog.es.json' },
  { lang: 'pt', file: 'src/data/blog.pt.json' },
  { lang: 'zh-cn', file: 'src/data/blog.zh-cn.json' },
  { lang: 'ja', file: 'src/data/blog.ja.json' }
];

for (const { lang, file } of langFiles) {
  const blogData = JSON.parse(fs.readFileSync(path.join(__dirname, '..', file), 'utf8'));
  assert(blogData.length === 80, `${file} has exactly 80 articles (current: ${blogData.length})`);
  const slugs = new Set(blogData.map(b => b.slug));
  for (const slug of newSlugs) {
    assert(slugs.has(slug), `${file} contains '${slug}'`);
  }
}

// 5. RSS and llms.txt
console.log('\n--- 5. Testing RSS and llms.txt Syndication ---');
const rssPath = path.join(__dirname, '../src/pages/rss.xml.ts');
const rssContent = fs.readFileSync(rssPath, 'utf8');
assert(rssContent.includes('/tools/melamine-tableware-formaldehyde-modeler/'), 'rss.xml.ts includes melamine-tableware-formaldehyde-modeler');

const llmsPath = path.join(__dirname, '../public/llms.txt');
const llmsContent = fs.readFileSync(llmsPath, 'utf8');
assert(llmsContent.includes('11,667+ static pages'), 'llms.txt reports 11,667+ static pages');
assert(llmsContent.includes('70 Google-indexed everyday consumer tools'), 'llms.txt reports 70 consumer tools');
assert(llmsContent.includes('80 evergreen guides per language'), 'llms.txt reports 80 evergreen guides');
assert(llmsContent.includes('400 localized articles'), 'llms.txt reports 400 localized articles');
assert(llmsContent.includes('melamine-tableware-formaldehyde-modeler'), 'llms.txt includes melamine-tableware-formaldehyde-modeler');
for (const slug of newSlugs) {
  assert(llmsContent.includes(slug), `llms.txt includes '${slug}'`);
}

console.log('\n================================================================');
console.log(`SUMMARY: ${passedTests} PASSED, ${failedTests} FAILED`);
console.log('================================================================\n');

if (failedTests > 0) {
  process.exit(1);
}
