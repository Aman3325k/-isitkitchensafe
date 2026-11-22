/**
 * scripts/test-wave60-schema.cjs
 * Wave 60 Integrity & Schema Verification Test Harness
 * 
 * Verifies:
 * 1. Consumer tools allowlist: exactly 74 tools including 'silicone-spatula-oligomer-leaching-modeler'.
 * 2. Tool #74 localized pages across all 5 languages with valid Schema.org (WebApplication, BreadcrumbList, FAQPage).
 * 3. 5-locale blog files (blog.json, blog.es.json, blog.pt.json, blog.zh-cn.json, blog.ja.json) each have exactly 92 guides (89 + 3).
 * 4. 100% slug symmetry across all locales for the 3 new Wave 60 guides:
 *    - 'silicone-spatula-cooking-oil-leaching-heat-safety'
 *    - 'air-fryer-basket-toxic-fumes-nanoparticle-resuspension-safety'
 *    - 'immersion-blender-food-processor-blade-seal-lubricant-safety'
 * 5. Guide content structure (title, excerpt/description, intro/summary, sections >= 5, faqs >= 5, relatedTools).
 * 6. Cloudflare _redirects line budget strictly under 2,000 lines limit.
 */

const fs = require('fs');
const path = require('path');

console.log('================================================================');
console.log('WAVE 60 CONSUMER TOOL #74 & SAFETY GUIDES (89->92) AUDIT SUITE');
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

// -------------------------------------------------------------
// 1. Consumer Tools Allowlist & Navigation Hub Verification
// -------------------------------------------------------------
console.log('--- 1. Testing Consumer Tools Allowlist (#74) & Tools Index ---');
const allowlistPath = path.join(__dirname, '../src/data/consumer-tools-allowlist.json');
assert(fs.existsSync(allowlistPath), 'consumer-tools-allowlist.json exists');
const allowlist = JSON.parse(fs.readFileSync(allowlistPath, 'utf8'));

assert(allowlist.includes('silicone-spatula-oligomer-leaching-modeler'), 'Allowlist contains "silicone-spatula-oligomer-leaching-modeler"');
assert(allowlist.length === 74, `Allowlist has exactly 74 consumer tools (current: ${allowlist.length})`);

const enToolsIndex = path.join(__dirname, '../src/pages/tools/index.astro');
const enToolsContent = fs.readFileSync(enToolsIndex, 'utf8');
assert(enToolsContent.includes('silicone-spatula-oligomer-leaching-modeler'), 'EN Tools index includes silicone-spatula-oligomer-leaching-modeler card');

const langToolsIndex = path.join(__dirname, '../src/pages/[lang]/tools/index.astro');
const langToolsContent = fs.readFileSync(langToolsIndex, 'utf8');
assert(langToolsContent.includes('silicone-spatula-oligomer-leaching-modeler'), '[lang] Tools index includes silicone-spatula-oligomer-leaching-modeler');

// -------------------------------------------------------------
// 2. Tool #74 Schema Verification (EN & [lang])
// -------------------------------------------------------------
console.log('\n--- 2. Testing Tool #74 Schema Injections ---');
const enToolPage = path.join(__dirname, '../src/pages/tools/silicone-spatula-oligomer-leaching-modeler.astro');
assert(fs.existsSync(enToolPage), 'EN tool page exists');
const enContent = fs.readFileSync(enToolPage, 'utf8');
assert(enContent.includes('webAppSchema'), 'EN tool page contains webAppSchema');
assert(enContent.includes('faqSchema'), 'EN tool page contains faqSchema');
assert(enContent.includes('breadcrumbSchema'), 'EN tool page contains breadcrumbSchema');
assert(enContent.includes('excludeFaqSchema={true}'), 'EN tool page excludes default layout faq schema');
assert(enContent.includes('excludeBreadcrumbSchema={true}'), 'EN tool page excludes default layout breadcrumb schema');

const langToolPage = path.join(__dirname, '../src/pages/[lang]/tools/silicone-spatula-oligomer-leaching-modeler.astro');
assert(fs.existsSync(langToolPage), '[lang] tool page exists');
const langContent = fs.readFileSync(langToolPage, 'utf8');
assert(langContent.includes('webAppSchema'), '[lang] tool page contains webAppSchema');
assert(langContent.includes('faqSchema'), '[lang] tool page contains faqSchema');
assert(langContent.includes('breadcrumbSchema'), '[lang] tool page contains breadcrumbSchema');
assert(langContent.includes('excludeFaqSchema={true}'), '[lang] tool page excludes default layout faq schema');
assert(langContent.includes('excludeBreadcrumbSchema={true}'), '[lang] tool page excludes default layout breadcrumb schema');

// -------------------------------------------------------------
// 3. Blog Data & Guide Count Verification (89 -> 92)
// -------------------------------------------------------------
console.log('\n--- 3. Testing 5-Locale Blog Guides (Count: 92) ---');
const locales = [
  { code: 'en', file: '../src/data/blog.json' },
  { code: 'es', file: '../src/data/blog.es.json' },
  { code: 'pt', file: '../src/data/blog.pt.json' },
  { code: 'zh-cn', file: '../src/data/blog.zh-cn.json' },
  { code: 'ja', file: '../src/data/blog.ja.json' },
];

const wave60Slugs = [
  'silicone-spatula-cooking-oil-leaching-heat-safety',
  'air-fryer-basket-toxic-fumes-nanoparticle-resuspension-safety',
  'immersion-blender-food-processor-blade-seal-lubricant-safety'
];

locales.forEach(loc => {
  const filePath = path.join(__dirname, loc.file);
  assert(fs.existsSync(filePath), `Blog file for ${loc.code} exists`);
  const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));
  assert(data.length === 92, `Locale ${loc.code} has exactly 92 guides (found: ${data.length})`);

  wave60Slugs.forEach(slug => {
    const guide = data.find(g => g.slug === slug);
    assert(!!guide, `Locale ${loc.code} contains guide '${slug}'`);
    if (guide) {
      assert(guide.title && guide.title.length > 20, `Locale ${loc.code} guide '${slug}' has comprehensive title`);
      assert(guide.sections && guide.sections.length >= 5, `Locale ${loc.code} guide '${slug}' has 5 sections`);
      assert(guide.faqs && guide.faqs.length >= 5, `Locale ${loc.code} guide '${slug}' has 5 FAQs`);
      assert(guide.relatedTools && guide.relatedTools.length >= 3, `Locale ${loc.code} guide '${slug}' has relatedTools`);
    }
  });
});

// -------------------------------------------------------------
// 4. Syndication & LLM Discovery (RSS & llms.txt)
// -------------------------------------------------------------
console.log('\n--- 4. Testing LLMS.txt & RSS Syndication ---');
const llmsPath = path.join(__dirname, '../public/llms.txt');
const llms = fs.readFileSync(llmsPath, 'utf8');
assert(llms.includes('11,827+ static pages'), 'llms.txt reflects 11,827+ static pages');
assert(llms.includes('74 Google-indexed everyday consumer tools'), 'llms.txt reflects 74 consumer tools');
assert(llms.includes('92 evergreen guides per language'), 'llms.txt reflects 92 evergreen guides');
assert(llms.includes('silicone-spatula-oligomer-leaching-modeler'), 'llms.txt includes silicone-spatula-oligomer-leaching-modeler');
wave60Slugs.forEach(slug => {
  assert(llms.includes(slug), `llms.txt includes guide '${slug}'`);
});

const rssPath = path.join(__dirname, '../src/pages/rss.xml.ts');
const rss = fs.readFileSync(rssPath, 'utf8');
assert(rss.includes('silicone-spatula-oligomer-leaching-modeler'), 'rss.xml.ts includes curated tool silicone-spatula-oligomer-leaching-modeler');

// -------------------------------------------------------------
// 5. Cloudflare _redirects Budget
// -------------------------------------------------------------
console.log('\n--- 5. Testing Cloudflare _redirects Budget ---');
const redirectsPath = path.join(__dirname, '../public/_redirects');
if (fs.existsSync(redirectsPath)) {
  const lines = fs.readFileSync(redirectsPath, 'utf8').split('\n').filter(l => l.trim().length > 0 && !l.startsWith('#'));
  assert(lines.length < 2000, `_redirects has ${lines.length} lines (budget limit: 2000)`);
} else {
  console.log('  [INFO] No _redirects file found');
}

console.log('\n================================================================');
console.log(`WAVE 60 AUDIT COMPLETE: ${passedTests} PASSED, ${failedTests} FAILED`);
console.log('================================================================\n');

if (failedTests > 0) {
  process.exit(1);
}
