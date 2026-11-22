/**
 * scripts/test-wave58-schema.cjs
 * Wave 58 Integrity & Schema Verification Test Harness
 * 
 * Verifies:
 * 1. Consumer tools allowlist: exactly 73 tools including 'stainless-steel-heavy-metal-leaching-modeler'.
 * 2. Tool #73 localized pages across all 5 languages with valid Schema.org (WebApplication, BreadcrumbList, FAQPage).
 * 3. 5-locale blog files (blog.json, blog.es.json, blog.pt.json, blog.zh-cn.json, blog.ja.json) each have exactly 89 guides (86 + 3).
 * 4. 100% slug symmetry across all locales for the 3 new Wave 58 guides:
 *    - 'pressure-canner-vs-pressure-cooker-botulism-safety'
 *    - 'refrigerator-cross-contamination-shelf-hierarchy-safety'
 *    - 'cast-iron-seasoning-smoke-point-acrolein-safety'
 * 5. Guide content structure (title, excerpt/description, intro/summary, sections >= 3, faqs >= 2, relatedTools).
 * 6. Cloudflare _redirects line budget strictly under 2,000 lines limit.
 */

const fs = require('fs');
const path = require('path');

console.log('================================================================');
console.log('WAVE 58 CONSUMER TOOL #73 & SAFETY GUIDES (86->89) AUDIT SUITE');
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
console.log('--- 1. Testing Consumer Tools Allowlist (#73) & Tools Index ---');
const allowlistPath = path.join(__dirname, '../src/data/consumer-tools-allowlist.json');
assert(fs.existsSync(allowlistPath), 'consumer-tools-allowlist.json exists');
const allowlist = JSON.parse(fs.readFileSync(allowlistPath, 'utf8'));

assert(allowlist.includes('stainless-steel-heavy-metal-leaching-modeler'), 'Allowlist contains "stainless-steel-heavy-metal-leaching-modeler"');
assert(allowlist.length === 73, `Allowlist has exactly 73 consumer tools (current: ${allowlist.length})`);

const enToolsIndex = path.join(__dirname, '../src/pages/tools/index.astro');
const enToolsContent = fs.readFileSync(enToolsIndex, 'utf8');
assert(enToolsContent.includes('stainless-steel-heavy-metal-leaching-modeler'), 'EN Tools index includes stainless-steel-heavy-metal-leaching-modeler card');

const langToolsIndex = path.join(__dirname, '../src/pages/[lang]/tools/index.astro');
const langToolsContent = fs.readFileSync(langToolsIndex, 'utf8');
assert(langToolsContent.includes('stainless-steel-heavy-metal-leaching-modeler'), 'Localized Tools index includes stainless-steel-heavy-metal-leaching-modeler card');

// -------------------------------------------------------------
// 2. Tool #73 Template & 5-Language Schema.org Verification
// -------------------------------------------------------------
console.log('\n--- 2. Testing Tool #73 (Stainless Steel Leaching Modeler) 5-Language Schema.org ---');
const enPagePath = path.join(__dirname, '../src/pages/tools/stainless-steel-heavy-metal-leaching-modeler.astro');
const langPagePath = path.join(__dirname, '../src/pages/[lang]/tools/stainless-steel-heavy-metal-leaching-modeler.astro');
const componentPath = path.join(__dirname, '../src/components/StainlessSteelHeavyMetalLeachingModeler.astro');

assert(fs.existsSync(enPagePath), 'EN tool page exists (src/pages/tools/stainless-steel-heavy-metal-leaching-modeler.astro)');
assert(fs.existsSync(langPagePath), 'Localized tool page exists (src/pages/[lang]/tools/stainless-steel-heavy-metal-leaching-modeler.astro)');
assert(fs.existsSync(componentPath), 'Interactive component exists (src/components/StainlessSteelHeavyMetalLeachingModeler.astro)');

// English page schema assertions
const enContent = fs.readFileSync(enPagePath, 'utf8');
assert(enContent.includes('webAppSchema'), 'EN page defines webAppSchema');
assert(enContent.includes('"@type": "WebApplication"') || enContent.includes("'@type': 'WebApplication'"), 'EN page has WebApplication Schema.org');
assert(enContent.includes('faqSchema'), 'EN page defines faqSchema');
assert(enContent.includes('"@type": "FAQPage"') || enContent.includes("'@type': 'FAQPage'"), 'EN page has FAQPage Schema.org');
assert(enContent.includes('breadcrumbSchema'), 'EN page defines breadcrumbSchema');
assert(enContent.includes('"@type": "BreadcrumbList"') || enContent.includes("'@type': 'BreadcrumbList'"), 'EN page has BreadcrumbList Schema.org');

// Localized [lang] page schema assertions
const langContent = fs.readFileSync(langPagePath, 'utf8');
assert(langContent.includes('webAppSchema'), 'Localized page defines webAppSchema');
assert(langContent.includes('faqSchema'), 'Localized page defines faqSchema');
assert(langContent.includes('breadcrumbSchema'), 'Localized page defines breadcrumbSchema');

// -------------------------------------------------------------
// 3. Blog Datasets File Count Verification (89 guides per language)
// -------------------------------------------------------------
console.log('\n--- 3. Testing 5-Language Blog Catalog Expansion (89 guides) ---');
const blogFiles = [
  { lang: 'en', path: path.join(__dirname, '../src/data/blog.json') },
  { lang: 'es', path: path.join(__dirname, '../src/data/blog.es.json') },
  { lang: 'pt', path: path.join(__dirname, '../src/data/blog.pt.json') },
  { lang: 'zh-cn', path: path.join(__dirname, '../src/data/blog.zh-cn.json') },
  { lang: 'ja', path: path.join(__dirname, '../src/data/blog.ja.json') }
];

const blogDatasets = {};

for (const { lang, path: filePath } of blogFiles) {
  assert(fs.existsSync(filePath), `Blog file exists for ${lang.toUpperCase()} (${path.basename(filePath)})`);
  if (fs.existsSync(filePath)) {
    const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));
    blogDatasets[lang] = data;
    assert(data.length === 89, `[${lang.toUpperCase()}] Has exactly 89 guides (current: ${data.length})`);
  }
}

// -------------------------------------------------------------
// 4. 100% Slug Symmetry Across All 5 Languages
// -------------------------------------------------------------
console.log('\n--- 4. Testing Wave 58 Slugs Symmetry Across 5 Languages ---');
const newSlugs = [
  'pressure-canner-vs-pressure-cooker-botulism-safety',
  'refrigerator-cross-contamination-shelf-hierarchy-safety',
  'cast-iron-seasoning-smoke-point-acrolein-safety'
];

for (const slug of newSlugs) {
  for (const { lang } of blogFiles) {
    if (blogDatasets[lang]) {
      const exists = blogDatasets[lang].some(g => g.slug === slug);
      assert(exists, `[${lang.toUpperCase()}] Contains Wave 58 guide: '${slug}'`);
    }
  }
}

// Global parity check
if (blogDatasets.en) {
  const enSlugs = blogDatasets.en.map(g => g.slug);
  for (const { lang } of blogFiles.filter(b => b.lang !== 'en')) {
    if (blogDatasets[lang]) {
      const locSlugs = blogDatasets[lang].map(g => g.slug);
      const missing = enSlugs.filter(s => !locSlugs.includes(s));
      const extra = locSlugs.filter(s => !enSlugs.includes(s));
      assert(missing.length === 0 && extra.length === 0, `[${lang.toUpperCase()}] 100% slug symmetry with EN (missing: ${missing.length}, extra: ${extra.length})`);
    }
  }
}

// -------------------------------------------------------------
// 5. Guide Structure Verification (title, excerpt/desc, intro/summary, sections, faqs >= 2)
// -------------------------------------------------------------
console.log('\n--- 5. Testing Wave 58 Guide Content Structure ---');
for (const slug of newSlugs) {
  for (const { lang } of blogFiles) {
    if (!blogDatasets[lang]) continue;
    const guide = blogDatasets[lang].find(g => g.slug === slug);
    if (!guide) {
      assert(false, `[${lang.toUpperCase()}] Guide '${slug}' missing for structural check`);
      continue;
    }

    // Title validation
    assert(typeof guide.title === 'string' && guide.title.trim().length > 10, `[${lang.toUpperCase()}] '${slug}' has non-empty title (>10 chars)`);

    // Description / Excerpt validation
    const description = guide.excerpt || guide.description;
    assert(typeof description === 'string' && description.trim().length > 20, `[${lang.toUpperCase()}] '${slug}' has valid description/excerpt (>20 chars)`);

    // Summary / Intro validation
    const summary = guide.intro || guide.summary;
    assert(typeof summary === 'string' && summary.trim().length > 50, `[${lang.toUpperCase()}] '${slug}' has comprehensive summary/intro (>50 chars)`);

    // Sections & Key Takeaways validation (at least 3 sections with title and content)
    assert(Array.isArray(guide.sections) && guide.sections.length >= 3, `[${lang.toUpperCase()}] '${slug}' has >= 3 sections (current: ${guide.sections ? guide.sections.length : 0})`);
    if (Array.isArray(guide.sections)) {
      const validSections = guide.sections.every(s => s.title && (s.content || s.body));
      assert(validSections, `[${lang.toUpperCase()}] '${slug}' all sections have title and content`);
    }

    // FAQs validation (at least 2 Q&As with question and answer)
    assert(Array.isArray(guide.faqs) && guide.faqs.length >= 2, `[${lang.toUpperCase()}] '${slug}' has >= 2 FAQs (current: ${guide.faqs ? guide.faqs.length : 0})`);
    if (Array.isArray(guide.faqs)) {
      const validFaqs = guide.faqs.every(f => f.question && f.answer);
      assert(validFaqs, `[${lang.toUpperCase()}] '${slug}' all FAQs have valid question and answer`);
    }

    // Related tools verification
    if (guide.relatedTools) {
      assert(Array.isArray(guide.relatedTools) && guide.relatedTools.length >= 1, `[${lang.toUpperCase()}] '${slug}' has at least 1 related tool link`);
    }
  }
}

// -------------------------------------------------------------
// 6. Cloudflare _redirects Line Budget Audit (< 2,000 lines limit)
// -------------------------------------------------------------
console.log('\n--- 6. Testing Cloudflare _redirects Line Count Budget ---');
const redirectsPath = path.join(__dirname, '../public/_redirects');
assert(fs.existsSync(redirectsPath), 'public/_redirects exists on disk');
if (fs.existsSync(redirectsPath)) {
  const content = fs.readFileSync(redirectsPath, 'utf8');
  const lines = content.split('\n');
  const lineCount = lines.length;
  assert(lineCount < 2000, `public/_redirects line count (${lineCount}) is strictly under 2,000 lines (headroom: ${2000 - lineCount})`);
}

// Check RSS syndication
const rssPath = path.join(__dirname, '../src/pages/rss.xml.ts');
if (fs.existsSync(rssPath)) {
  const rssContent = fs.readFileSync(rssPath, 'utf8');
  assert(rssContent.includes('/tools/stainless-steel-heavy-metal-leaching-modeler/'), 'rss.xml.ts includes stainless-steel-heavy-metal-leaching-modeler');
}

console.log('\n================================================================');
console.log(`TOTAL TESTS: ${passedTests + failedTests} | PASSED: ${passedTests} | FAILED: ${failedTests}`);
console.log('================================================================\n');

if (failedTests > 0) {
  process.exit(1);
} else {
  console.log('>>> WAVE 58 INTEGRITY AUDIT PASSED WITH 100% SUCCESS <<<\n');
}
