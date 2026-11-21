const fs = require('fs');
const path = require('path');

console.log('================================================================');
console.log('WAVE 54 CONSUMER TOOL #71 & SAFETY GUIDES (80->83) AUDIT SUITE');
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
const enPagePath = path.join(__dirname, '../src/pages/tools/cast-iron-seasoning-degradation-modeler.astro');
const langPagePath = path.join(__dirname, '../src/pages/[lang]/tools/cast-iron-seasoning-degradation-modeler.astro');
const componentPath = path.join(__dirname, '../src/components/CastIronSeasoningDegradationModeler.astro');

assert(fs.existsSync(enPagePath), 'EN tool page exists (src/pages/tools/cast-iron-seasoning-degradation-modeler.astro)');
assert(fs.existsSync(langPagePath), 'Localized tool page exists (src/pages/[lang]/tools/cast-iron-seasoning-degradation-modeler.astro)');
assert(fs.existsSync(componentPath), 'Interactive component exists (src/components/CastIronSeasoningDegradationModeler.astro)');

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
assert(allowlist.includes('cast-iron-seasoning-degradation-modeler'), 'Allowlist contains cast-iron-seasoning-degradation-modeler');
assert(allowlist.length === 71, `Allowlist has exactly 71 items (current: ${allowlist.length})`);

// 3. Tools index cards
console.log('\n--- 3. Testing Tools Index Hub Cards ---');
const enToolsIndex = path.join(__dirname, '../src/pages/tools/index.astro');
const enToolsContent = fs.readFileSync(enToolsIndex, 'utf8');
assert(enToolsContent.includes('cast-iron-seasoning-degradation-modeler'), 'EN Tools index includes cast-iron-seasoning-degradation-modeler card');

const langToolsIndex = path.join(__dirname, '../src/pages/[lang]/tools/index.astro');
const langToolsContent = fs.readFileSync(langToolsIndex, 'utf8');
assert(langToolsContent.includes('cast-iron-seasoning-degradation-modeler'), 'Localized Tools index includes cast-iron-seasoning-degradation-modeler card');

// 4. Multilingual Blog Guides (80 -> 83)
console.log('\n--- 4. Testing Multilingual Safety Guides (83 total, 5 languages) ---');
const newSlugs = [
  'carbon-steel-pan-seasoning-blueing-acid-stripping-safety',
  'aluminum-cookware-acidic-food-neurotoxicity-leaching-safety',
  'enamel-cast-iron-lead-cadmium-glaze-thermal-shock-safety'
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
  assert(blogData.length === 83, `${file} has exactly 83 articles (current: ${blogData.length})`);
  const slugs = new Set(blogData.map(b => b.slug));
  for (const slug of newSlugs) {
    assert(slugs.has(slug), `${file} contains '${slug}'`);
  }
}

// 5. RSS and llms.txt
console.log('\n--- 5. Testing RSS and llms.txt Syndication ---');
const rssPath = path.join(__dirname, '../src/pages/rss.xml.ts');
const rssContent = fs.readFileSync(rssPath, 'utf8');
assert(rssContent.includes('/tools/cast-iron-seasoning-degradation-modeler/'), 'rss.xml.ts includes cast-iron-seasoning-degradation-modeler');

const llmsPath = path.join(__dirname, '../public/llms.txt');
const llmsContent = fs.readFileSync(llmsPath, 'utf8');
assert(llmsContent.includes('11,707+ static pages'), 'llms.txt reports 11,707+ static pages');
assert(llmsContent.includes('71 Google-indexed everyday consumer tools'), 'llms.txt reports 71 consumer tools');
assert(llmsContent.includes('83 evergreen guides per language'), 'llms.txt reports 83 evergreen guides');
assert(llmsContent.includes('415 localized articles'), 'llms.txt reports 415 localized articles');
assert(llmsContent.includes('cast-iron-seasoning-degradation-modeler'), 'llms.txt includes cast-iron-seasoning-degradation-modeler');
for (const slug of newSlugs) {
  assert(llmsContent.includes(slug), `llms.txt contains '${slug}'`);
}

console.log('\n================================================================');
console.log(`TOTAL TESTS: ${passedTests + failedTests} | PASSED: ${passedTests} | FAILED: ${failedTests}`);
console.log('================================================================\n');

if (failedTests > 0) {
  process.exit(1);
}
