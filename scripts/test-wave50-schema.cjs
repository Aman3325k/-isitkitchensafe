const fs = require('fs');
const path = require('path');

console.log('================================================================');
console.log('WAVE 50 CONSUMER TOOL #69 & SAFETY GUIDES (74->77) AUDIT SUITE');
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
const enPagePath = path.join(__dirname, '../src/pages/tools/oven-self-cleaning-pyrolysis-simulator.astro');
const langPagePath = path.join(__dirname, '../src/pages/[lang]/tools/oven-self-cleaning-pyrolysis-simulator.astro');
const componentPath = path.join(__dirname, '../src/components/OvenSelfCleaningPyrolysisSimulator.astro');

assert(fs.existsSync(enPagePath), 'EN tool page exists (src/pages/tools/oven-self-cleaning-pyrolysis-simulator.astro)');
assert(fs.existsSync(langPagePath), 'Localized tool page exists (src/pages/[lang]/tools/oven-self-cleaning-pyrolysis-simulator.astro)');
assert(fs.existsSync(componentPath), 'Interactive component exists (src/components/OvenSelfCleaningPyrolysisSimulator.astro)');

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
assert(allowlist.includes('oven-self-cleaning-pyrolysis-simulator'), 'Allowlist contains oven-self-cleaning-pyrolysis-simulator');
assert(allowlist.length === 69, `Allowlist has exactly 69 items (current: ${allowlist.length})`);

// 3. Tools index cards
console.log('\n--- 3. Testing Tools Index Hub Cards ---');
const enToolsIndex = path.join(__dirname, '../src/pages/tools/index.astro');
const enIndexContent = fs.readFileSync(enToolsIndex, 'utf8');
assert(enIndexContent.includes("slug: 'oven-self-cleaning-pyrolysis-simulator'"), 'EN tools/index.astro includes oven-self-cleaning-pyrolysis-simulator card');

const langToolsIndex = path.join(__dirname, '../src/pages/[lang]/tools/index.astro');
const langIndexContent = fs.readFileSync(langToolsIndex, 'utf8');
assert(langIndexContent.includes("slug: 'oven-self-cleaning-pyrolysis-simulator'"), '[lang]/tools/index.astro includes oven-self-cleaning-pyrolysis-simulator card');

// 4. Blog Data Integrity (all 5 languages)
console.log('\n--- 4. Testing Blog Data & 5-Language Slug Parity (74 -> 77) ---');
const languages = ['en', 'es', 'pt', 'zh-cn', 'ja'];
const expectedSlugs = [
  'oven-self-cleaning-pyrolysis-toxic-fumes-bird-safety',
  'melamine-dishes-formaldehyde-migration-microwave-acid-safety',
  'copper-cookware-verdigris-toxicity-acidic-food-leaching-safety'
];

const blogDatasets = {};
for (const lang of languages) {
  const filePath = lang === 'en' ? '../src/data/blog.json' : `../src/data/blog.${lang}.json`;
  const fullPath = path.join(__dirname, filePath);
  assert(fs.existsSync(fullPath), `Blog dataset exists for ${lang}: ${filePath}`);
  const data = JSON.parse(fs.readFileSync(fullPath, 'utf8'));
  blogDatasets[lang] = data;
  assert(data.length === 77, `${lang.toUpperCase()} blog dataset contains exactly 77 articles (current: ${data.length})`);
  
  for (const slug of expectedSlugs) {
    const article = data.find(a => a.slug === slug);
    assert(!!article, `${lang.toUpperCase()} has article with slug: ${slug}`);
    if (article) {
      assert(article.title && article.title.length > 10, `  ${slug} has valid title (${article.title.slice(0, 30)}...)`);
      assert(article.sections && article.sections.length === 5, `  ${slug} has exactly 5 sections`);
      assert(article.faqs && article.faqs.length === 5, `  ${slug} has exactly 5 FAQs`);
      assert(article.relatedTools && article.relatedTools.length === 3, `  ${slug} has 3 related tools`);
      if (lang !== 'en') {
        for (const rt of article.relatedTools) {
          assert(rt.url.startsWith(`/${lang}/`), `  Related tool URL starts with /${lang}/ (${rt.url})`);
        }
      }
    }
  }
}

// 5. RSS & llms.txt
console.log('\n--- 5. Testing RSS and llms.txt Sync ---');
const rssPath = path.join(__dirname, '../src/pages/rss.xml.ts');
const rssContent = fs.readFileSync(rssPath, 'utf8');
assert(rssContent.includes('/tools/oven-self-cleaning-pyrolysis-simulator/'), 'rss.xml.ts includes oven-self-cleaning-pyrolysis-simulator');

const llmsPath = path.join(__dirname, '../public/llms.txt');
const llmsContent = fs.readFileSync(llmsPath, 'utf8');
assert(llmsContent.includes('69 Google-indexed everyday consumer tools'), 'llms.txt reports 69 consumer tools');
assert(llmsContent.includes('77 evergreen guides per language'), 'llms.txt reports 77 evergreen guides');
assert(llmsContent.includes('385 localized articles'), 'llms.txt reports 385 localized articles');
assert(llmsContent.includes('oven-self-cleaning-pyrolysis-toxic-fumes-bird-safety'), 'llms.txt includes oven-self-cleaning guide');
assert(llmsContent.includes('melamine-dishes-formaldehyde-migration-microwave-acid-safety'), 'llms.txt includes melamine guide');
assert(llmsContent.includes('copper-cookware-verdigris-toxicity-acidic-food-leaching-safety'), 'llms.txt includes copper guide');

console.log('================================================================');
console.log(`TOTAL AUDIT RESULTS: ${passedTests} PASSED, ${failedTests} FAILED`);
console.log('================================================================');

if (failedTests > 0) {
  process.exit(1);
} else {
  console.log('🎉 ALL WAVE 50 INTEGRITY AND AUDIT CHECKS PASSED WITH 100% SUCCESS!\n');
}
