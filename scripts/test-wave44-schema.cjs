const fs = require('fs');
const path = require('path');

console.log('================================================================');
console.log('WAVE 44 CONSUMER TOOL #66 & SAFETY GUIDES (65->68) AUDIT SUITE');
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
const enPagePath = path.join(__dirname, '../src/pages/tools/canned-food-bpa-leaching-modeler.astro');
const langPagePath = path.join(__dirname, '../src/pages/[lang]/tools/canned-food-bpa-leaching-modeler.astro');
const componentPath = path.join(__dirname, '../src/components/CannedFoodBpaLeachingModeler.astro');

assert(fs.existsSync(enPagePath), 'EN tool page exists (src/pages/tools/canned-food-bpa-leaching-modeler.astro)');
assert(fs.existsSync(langPagePath), 'Localized tool page exists (src/pages/[lang]/tools/canned-food-bpa-leaching-modeler.astro)');
assert(fs.existsSync(componentPath), 'Interactive component exists (src/components/CannedFoodBpaLeachingModeler.astro)');

const enContent = fs.readFileSync(enPagePath, 'utf8');
assert(enContent.includes('webAppSchema'), 'EN page defines webAppSchema');
assert(enContent.includes('faqSchema'), 'EN page defines faqSchema');
assert(enContent.includes('breadcrumbSchema'), 'EN page defines breadcrumbSchema');
assert(enContent.includes('slot="head"'), 'EN page injects schemas in slot="head"');
assert(enContent.includes('excludeFaqSchema={true}'), 'EN page excludes default Layout FAQ schema');
assert(enContent.includes('excludeBreadcrumbSchema={true}'), 'EN page excludes default Layout Breadcrumb schema');
assert(enContent.includes('EFSA 2023'), 'EN page includes EFSA 2023 scholarly citation');

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
assert(allowlist.includes('canned-food-bpa-leaching-modeler'), 'canned-food-bpa-leaching-modeler is present in consumer-tools-allowlist.json');
assert(allowlist.length === 66, `Consumer tools allowlist count is exactly 66 (got: ${allowlist.length})`);

// 3. Blog Data & Multilingual Parity Check (65 -> 68 guides across 5 languages)
console.log('\n--- 3. Testing Blog Guides Count, Schema & Multilingual Parity ---');
const langs = [
  { code: 'en', file: 'blog.json', prefix: '' },
  { code: 'es', file: 'blog.es.json', prefix: '/es' },
  { code: 'pt', file: 'blog.pt.json', prefix: '/pt' },
  { code: 'zh-cn', file: 'blog.zh-cn.json', prefix: '/zh-cn' },
  { code: 'ja', file: 'blog.ja.json', prefix: '/ja' }
];

const targetSlugs = [
  'wooden-spoon-utensil-biofilm-dishwasher-sanitization',
  'kitchen-sponge-bacterial-biofilm-sanitization-science',
  'charcoal-gas-grill-pah-hca-carcinogen-reduction-guide'
];

langs.forEach(({ code, file, prefix }) => {
  const filePath = path.join(__dirname, '../src/data', file);
  assert(fs.existsSync(filePath), `${file} exists on disk`);
  const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));
  assert(data.length === 68, `${file} has exactly 68 guides (got: ${data.length})`);

  targetSlugs.forEach(slug => {
    const post = data.find(p => p.slug === slug);
    assert(!!post, `[${code}] Guide '${slug}' exists in ${file}`);
    if (post) {
      assert(post.title && post.title.length > 15, `[${code}] '${slug}' has non-empty title`);
      assert(post.excerpt && post.excerpt.length > 30, `[${code}] '${slug}' has rich excerpt`);
      assert(post.intro && post.intro.length > 100, `[${code}] '${slug}' has deep introductory overview`);
      assert(Array.isArray(post.sections) && post.sections.length === 5, `[${code}] '${slug}' has exactly 5 deep-dive technical sections`);
      assert(Array.isArray(post.faqs) && post.faqs.length === 5, `[${code}] '${slug}' has exactly 5 evidence-based FAQs`);
      assert(Array.isArray(post.relatedTools) && post.relatedTools.length === 3, `[${code}] '${slug}' has 3 contextual related tools`);
      assert(post.date === '2026-11-21', `[${code}] '${slug}' date is 2026-11-21`);
    }
  });
});

// 4. RSS Feed and llms.txt validation
console.log('\n--- 4. Testing RSS and llms.txt Integration ---');
const rssPath = path.join(__dirname, '../src/pages/rss.xml.ts');
const rssContent = fs.readFileSync(rssPath, 'utf8');
assert(rssContent.includes('/tools/canned-food-bpa-leaching-modeler/'), 'rss.xml.ts includes canned-food-bpa-leaching-modeler');

const llmsPath = path.join(__dirname, '../public/llms.txt');
const llmsContent = fs.readFileSync(llmsPath, 'utf8');
assert(llmsContent.includes('66 Google-indexed everyday consumer'), 'llms.txt reports 66 consumer tools');
assert(llmsContent.includes('68 evergreen guides per language'), 'llms.txt reports 68 evergreen guides');
assert(llmsContent.includes('wooden-spoon-utensil-biofilm-dishwasher-sanitization'), 'llms.txt contains wooden-spoon guide');
assert(llmsContent.includes('kitchen-sponge-bacterial-biofilm-sanitization-science'), 'llms.txt contains kitchen-sponge guide');
assert(llmsContent.includes('charcoal-gas-grill-pah-hca-carcinogen-reduction-guide'), 'llms.txt contains charcoal-grill guide');
assert(llmsContent.includes('/tools/canned-food-bpa-leaching-modeler/'), 'llms.txt contains canned-food tool');

console.log('\n================================================================');
console.log(`AUDIT RESULTS: ${passedTests} PASSED, ${failedTests} FAILED`);
console.log('================================================================\n');

if (failedTests > 0) {
  process.exit(1);
}
