const fs = require('fs');
const path = require('path');

console.log('================================================================');
console.log('WAVE 46 CONSUMER TOOL #67 & SAFETY GUIDES (68->71) AUDIT SUITE');
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
const enPagePath = path.join(__dirname, '../src/pages/tools/charcoal-gas-grill-pah-hca-modeler.astro');
const langPagePath = path.join(__dirname, '../src/pages/[lang]/tools/charcoal-gas-grill-pah-hca-modeler.astro');
const componentPath = path.join(__dirname, '../src/components/CharcoalGasGrillPahHcaModeler.astro');

assert(fs.existsSync(enPagePath), 'EN tool page exists (src/pages/tools/charcoal-gas-grill-pah-hca-modeler.astro)');
assert(fs.existsSync(langPagePath), 'Localized tool page exists (src/pages/[lang]/tools/charcoal-gas-grill-pah-hca-modeler.astro)');
assert(fs.existsSync(componentPath), 'Interactive component exists (src/components/CharcoalGasGrillPahHcaModeler.astro)');

const enContent = fs.readFileSync(enPagePath, 'utf8');
assert(enContent.includes('webAppSchema'), 'EN page defines webAppSchema');
assert(enContent.includes('faqSchema'), 'EN page defines faqSchema');
assert(enContent.includes('breadcrumbSchema'), 'EN page defines breadcrumbSchema');
assert(enContent.includes('slot="head"'), 'EN page injects schemas in slot="head"');
assert(enContent.includes('excludeFaqSchema={true}'), 'EN page excludes default Layout FAQ schema');
assert(enContent.includes('excludeBreadcrumbSchema={true}'), 'EN page excludes default Layout Breadcrumb schema');
assert(enContent.includes('EFSA CONTAM Panel'), 'EN page includes EFSA CONTAM Panel citation');

const langContent = fs.readFileSync(langPagePath, 'utf8');
assert(langContent.includes('webAppSchema'), 'Localized page defines webAppSchema');
assert(langContent.includes('faqSchema'), 'Localized page defines faqSchema');
assert(langContent.includes('breadcrumbSchema'), 'Localized page defines breadcrumbSchema');
assert(langContent.includes('slot="head"'), 'Localized page injects schemas in slot="head"');
assert(langContent.includes('excludeFaqSchema={true}'), 'Localized page excludes default Layout FAQ schema');
assert(langContent.includes('excludeBreadcrumbSchema={true}'), 'Localized page excludes default Layout Breadcrumb schema');

// 2. Allowlist Check
console.log('\n--- 2. Testing Consumer Tools Allowlist & Indexing ---');
const allowlistPath = path.join(__dirname, '../src/data/consumer-tools-allowlist.json');
const allowlist = JSON.parse(fs.readFileSync(allowlistPath, 'utf8'));
assert(allowlist.includes('charcoal-gas-grill-pah-hca-modeler'), 'charcoal-gas-grill-pah-hca-modeler is present in consumer-tools-allowlist.json');
assert(allowlist.length === 67, `Consumer tools allowlist count is exactly 67 (got: ${allowlist.length})`);

// 3. Blog Data & Multilingual Parity Check (68 -> 71 guides across 5 languages)
console.log('\n--- 3. Testing Blog Guides Count, Schema & Multilingual Parity ---');
const langs = [
  { code: 'en', file: 'blog.json', prefix: '' },
  { code: 'es', file: 'blog.es.json', prefix: '/es' },
  { code: 'pt', file: 'blog.pt.json', prefix: '/pt' },
  { code: 'zh-cn', file: 'blog.zh-cn.json', prefix: '/zh-cn' },
  { code: 'ja', file: 'blog.ja.json', prefix: '/ja' }
];

const newSlugs = [
  'melamine-plate-microwave-formaldehyde-leaching-risks',
  'air-fryer-reheating-oil-lipid-oxidation-toxic-aldehydes',
  'slow-cooker-kidney-bean-phytohaemagglutinin-lectin-safety'
];

const referenceSlugs = JSON.parse(fs.readFileSync(path.join(__dirname, '../src/data/blog.json'), 'utf8')).map(b => b.slug);
assert(referenceSlugs.length === 71, `English blog count is exactly 71 (got: ${referenceSlugs.length})`);

langs.forEach(lang => {
  const filePath = path.join(__dirname, `../src/data/${lang.file}`);
  assert(fs.existsSync(filePath), `Data file exists: ${lang.file}`);
  const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));
  assert(data.length === 71, `${lang.code.toUpperCase()} has exactly 71 guides (got: ${data.length})`);

  // Parity with reference
  const currentSlugs = data.map(b => b.slug);
  const parity = referenceSlugs.every((s, idx) => currentSlugs[idx] === s);
  assert(parity, `${lang.code.toUpperCase()} matches 100% slug parity with English reference`);

  // Test new guides content structure
  newSlugs.forEach(slug => {
    const post = data.find(p => p.slug === slug);
    assert(!!post, `${lang.code.toUpperCase()} contains slug: ${slug}`);
    if (post) {
      assert(post.title && post.title.length > 10, `${lang.code.toUpperCase()}: ${slug} has valid title`);
      assert(post.excerpt && post.excerpt.length > 20, `${lang.code.toUpperCase()}: ${slug} has valid excerpt`);
      assert(post.intro && post.intro.length > 50, `${lang.code.toUpperCase()}: ${slug} has valid intro`);
      assert(Array.isArray(post.sections) && post.sections.length >= 5, `${lang.code.toUpperCase()}: ${slug} has >= 5 sections (got: ${post.sections ? post.sections.length : 0})`);
      assert(post.conclusion && post.conclusion.length > 30, `${lang.code.toUpperCase()}: ${slug} has valid conclusion`);
      assert(Array.isArray(post.faqs) && post.faqs.length >= 5, `${lang.code.toUpperCase()}: ${slug} has >= 5 faqs (got: ${post.faqs ? post.faqs.length : 0})`);
      assert(Array.isArray(post.relatedTools) && post.relatedTools.length >= 3, `${lang.code.toUpperCase()}: ${slug} has >= 3 relatedTools (got: ${post.relatedTools ? post.relatedTools.length : 0})`);
    }
  });
});

// 4. Tools Index Check
console.log('\n--- 4. Testing Tools Index Featured Inclusion ---');
const enToolsIndexPath = path.join(__dirname, '../src/pages/tools/index.astro');
const enToolsIndexContent = fs.readFileSync(enToolsIndexPath, 'utf8');
assert(enToolsIndexContent.includes('charcoal-gas-grill-pah-hca-modeler'), 'EN tools/index.astro features charcoal-gas-grill-pah-hca-modeler');

const langToolsIndexPath = path.join(__dirname, '../src/pages/[lang]/tools/index.astro');
const langToolsIndexContent = fs.readFileSync(langToolsIndexPath, 'utf8');
assert(langToolsIndexContent.includes('charcoal-gas-grill-pah-hca-modeler'), '[lang]/tools/index.astro features charcoal-gas-grill-pah-hca-modeler');

// 5. RSS & LLMS.txt Check
console.log('\n--- 5. Testing Feed & Documentation Artifacts ---');
const rssPath = path.join(__dirname, '../src/pages/rss.xml.ts');
const rssContent = fs.readFileSync(rssPath, 'utf8');
assert(rssContent.includes('/tools/charcoal-gas-grill-pah-hca-modeler/'), 'rss.xml.ts includes charcoal grill modeler');

const llmsPath = path.join(__dirname, '../public/llms.txt');
const llmsContent = fs.readFileSync(llmsPath, 'utf8');
assert(llmsContent.includes('67 Google-indexed everyday consumer tools'), 'llms.txt updated to 67 consumer tools');
assert(llmsContent.includes('71 evergreen guides per language'), 'llms.txt updated to 71 evergreen guides');
assert(llmsContent.includes('charcoal-gas-grill-pah-hca-modeler'), 'llms.txt includes charcoal grill modeler');
assert(llmsContent.includes('melamine-plate-microwave-formaldehyde-leaching-risks'), 'llms.txt includes melamine guide');
assert(llmsContent.includes('air-fryer-reheating-oil-lipid-oxidation-toxic-aldehydes'), 'llms.txt includes air fryer lipid guide');
assert(llmsContent.includes('slow-cooker-kidney-bean-phytohaemagglutinin-lectin-safety'), 'llms.txt includes slow cooker bean guide');

console.log('\n================================================================');
console.log(`AUDIT RESULTS: ${passedTests} PASSED, ${failedTests} FAILED`);
console.log('================================================================\n');

if (failedTests > 0) {
  process.exit(1);
} else {
  console.log('🎉 ALL WAVE 46 SCHEMA & DATA INTEGRITY CHECKS PASSED PERFECTLY!\n');
}
