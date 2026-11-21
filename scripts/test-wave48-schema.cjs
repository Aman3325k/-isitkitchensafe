const fs = require('fs');
const path = require('path');

console.log('================================================================');
console.log('WAVE 48 CONSUMER TOOL #68 & SAFETY GUIDES (71->74) AUDIT SUITE');
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
const enPagePath = path.join(__dirname, '../src/pages/tools/air-fryer-lipid-oxidation-modeler.astro');
const langPagePath = path.join(__dirname, '../src/pages/[lang]/tools/air-fryer-lipid-oxidation-modeler.astro');
const componentPath = path.join(__dirname, '../src/components/AirFryerLipidOxidationModeler.astro');

assert(fs.existsSync(enPagePath), 'EN tool page exists (src/pages/tools/air-fryer-lipid-oxidation-modeler.astro)');
assert(fs.existsSync(langPagePath), 'Localized tool page exists (src/pages/[lang]/tools/air-fryer-lipid-oxidation-modeler.astro)');
assert(fs.existsSync(componentPath), 'Interactive component exists (src/components/AirFryerLipidOxidationModeler.astro)');

const enContent = fs.readFileSync(enPagePath, 'utf8');
assert(enContent.includes('webAppSchema'), 'EN page defines webAppSchema');
assert(enContent.includes('faqSchema'), 'EN page defines faqSchema');
assert(enContent.includes('breadcrumbSchema'), 'EN page defines breadcrumbSchema');
assert(enContent.includes('slot="head"'), 'EN page injects schemas in slot="head"');
assert(enContent.includes('excludeFaqSchema={true}'), 'EN page excludes default Layout FAQ schema');
assert(enContent.includes('excludeBreadcrumbSchema={true}'), 'EN page excludes default Layout Breadcrumb schema');

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
assert(allowlist.includes('air-fryer-lipid-oxidation-modeler'), 'air-fryer-lipid-oxidation-modeler is present in consumer-tools-allowlist.json');
assert(allowlist.length === 68, `Consumer tools allowlist count is exactly 68 (got: ${allowlist.length})`);

// 3. Blog Data & Multilingual Parity Check (71 -> 74 guides across 5 languages)
console.log('\n--- 3. Testing Blog Guides Count, Schema & Multilingual Parity ---');
const langs = [
  { code: 'en', file: 'blog.json', prefix: '' },
  { code: 'es', file: 'blog.es.json', prefix: '/es' },
  { code: 'pt', file: 'blog.pt.json', prefix: '/pt' },
  { code: 'zh-cn', file: 'blog.zh-cn.json', prefix: '/zh-cn' },
  { code: 'ja', file: 'blog.ja.json', prefix: '/ja' }
];

const newSlugs = [
  'cast-iron-acidic-tomato-sauce-iron-leaching-guide',
  'dishwasher-rinse-aid-detergent-residue-gut-barrier-safety',
  'plastic-cutting-board-knife-grooves-microplastics-bacteria'
];

const referenceSlugs = JSON.parse(fs.readFileSync(path.join(__dirname, '../src/data/blog.json'), 'utf8')).map(b => b.slug);
assert(referenceSlugs.length === 74, `English blog count is exactly 74 (got: ${referenceSlugs.length})`);

langs.forEach(lang => {
  const filePath = path.join(__dirname, `../src/data/${lang.file}`);
  assert(fs.existsSync(filePath), `Data file exists: ${lang.file}`);
  const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));
  assert(data.length === 74, `${lang.code.toUpperCase()} has exactly 74 guides (got: ${data.length})`);

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
assert(enToolsIndexContent.includes('air-fryer-lipid-oxidation-modeler'), 'EN tools/index.astro features air-fryer-lipid-oxidation-modeler');

const langToolsIndexPath = path.join(__dirname, '../src/pages/[lang]/tools/index.astro');
const langToolsIndexContent = fs.readFileSync(langToolsIndexPath, 'utf8');
assert(langToolsIndexContent.includes('air-fryer-lipid-oxidation-modeler'), '[lang]/tools/index.astro features air-fryer-lipid-oxidation-modeler');

// 5. RSS & LLMS.txt Check
console.log('\n--- 5. Testing Feed & Documentation Artifacts ---');
const rssPath = path.join(__dirname, '../src/pages/rss.xml.ts');
const rssContent = fs.readFileSync(rssPath, 'utf8');
assert(rssContent.includes('/tools/air-fryer-lipid-oxidation-modeler/'), 'rss.xml.ts includes air fryer lipid oxidation modeler');

const llmsPath = path.join(__dirname, '../public/llms.txt');
const llmsContent = fs.readFileSync(llmsPath, 'utf8');
assert(llmsContent.includes('68 Google-indexed everyday consumer tools'), 'llms.txt updated to 68 consumer tools');
assert(llmsContent.includes('74 evergreen guides per language'), 'llms.txt updated to 74 evergreen guides');
assert(llmsContent.includes('air-fryer-lipid-oxidation-modeler'), 'llms.txt includes air fryer lipid oxidation modeler');
assert(llmsContent.includes('cast-iron-acidic-tomato-sauce-iron-leaching-guide'), 'llms.txt includes cast iron acidic guide');
assert(llmsContent.includes('dishwasher-rinse-aid-detergent-residue-gut-barrier-safety'), 'llms.txt includes dishwasher rinse aid guide');
assert(llmsContent.includes('plastic-cutting-board-knife-grooves-microplastics-bacteria'), 'llms.txt includes plastic cutting board guide');

console.log('\n================================================================');
console.log(`AUDIT RESULTS: ${passedTests} PASSED, ${failedTests} FAILED`);
console.log('================================================================\n');

if (failedTests > 0) {
  process.exit(1);
} else {
  console.log('🎉 ALL WAVE 48 SCHEMA & DATA INTEGRITY CHECKS PASSED PERFECTLY!\n');
}
