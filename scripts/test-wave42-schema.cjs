const fs = require('fs');
const path = require('path');

console.log('================================================================');
console.log('WAVE 42 CONSUMER TOOL #65 & SAFETY GUIDES (62->65) AUDIT SUITE');
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
const enPagePath = path.join(__dirname, '../src/pages/tools/microwave-popcorn-pfas-modeler.astro');
const langPagePath = path.join(__dirname, '../src/pages/[lang]/tools/microwave-popcorn-pfas-modeler.astro');
const componentPath = path.join(__dirname, '../src/components/MicrowavePopcornPfasModeler.astro');

assert(fs.existsSync(enPagePath), 'English tool page exists (microwave-popcorn-pfas-modeler.astro)');
assert(fs.existsSync(langPagePath), 'Localized tool page exists ([lang]/tools/microwave-popcorn-pfas-modeler.astro)');
assert(fs.existsSync(componentPath), 'Interactive simulator component exists (MicrowavePopcornPfasModeler.astro)');

const enContent = fs.readFileSync(enPagePath, 'utf8');
const langContent = fs.readFileSync(langPagePath, 'utf8');

assert(enContent.includes('webAppSchema'), 'English page defines webAppSchema');
assert(enContent.includes('breadcrumbSchema'), 'English page defines breadcrumbSchema');
assert(enContent.includes('faqSchema'), 'English page defines faqSchema');
assert(enContent.includes('excludeFaqSchema={true}'), 'English page sets excludeFaqSchema={true}');
assert(enContent.includes('excludeBreadcrumbSchema={true}'), 'English page sets excludeBreadcrumbSchema={true}');
assert(enContent.includes('Marcus Vance'), 'English page includes Lead Hardware Analyst author schema');
assert(enContent.includes('Dr. Elena Rostova'), 'English page includes Toxicology reviewer schema');

assert(langContent.includes('webAppSchema'), 'Localized page defines webAppSchema');
assert(langContent.includes('breadcrumbSchema'), 'Localized page defines breadcrumbSchema');
assert(langContent.includes('faqSchema'), 'Localized page defines faqSchema');
assert(langContent.includes('excludeFaqSchema={true}'), 'Localized page sets excludeFaqSchema={true}');
assert(langContent.includes('excludeBreadcrumbSchema={true}'), 'Localized page sets excludeBreadcrumbSchema={true}');

// 2. Consumer tools allowlist check
console.log('\n--- 2. Testing Consumer Tools Allowlist & Index Spotlights ---');
const allowlistPath = path.join(__dirname, '../src/data/consumer-tools-allowlist.json');
const allowlist = JSON.parse(fs.readFileSync(allowlistPath, 'utf8'));

assert(allowlist.length === 65, `Allowlist has exactly 65 tools (actual: ${allowlist.length})`);
assert(allowlist.includes('microwave-popcorn-pfas-modeler'), 'Allowlist contains microwave-popcorn-pfas-modeler');

const toolsIndexPath = path.join(__dirname, '../src/pages/tools/index.astro');
const toolsIndexContent = fs.readFileSync(toolsIndexPath, 'utf8');
assert(toolsIndexContent.includes("slug: 'microwave-popcorn-pfas-modeler'"), 'Tools index includes spotlight card for microwave-popcorn-pfas-modeler');

const langToolsIndexPath = path.join(__dirname, '../src/pages/[lang]/tools/index.astro');
const langToolsIndexContent = fs.readFileSync(langToolsIndexPath, 'utf8');
const occurrences = (langToolsIndexContent.match(/slug:\s*'microwave-popcorn-pfas-modeler'/g) || []).length;
assert(occurrences >= 6, `Localized tools index includes spotlight entries across locales (occurrences: ${occurrences} >= 6)`);

// 3. Blog Data & Multilingual Parity Checks
console.log('\n--- 3. Testing Blog Guides (62 -> 65) Across 5 Languages ---');
const locales = [
  { code: 'en', file: 'blog.json' },
  { code: 'es', file: 'blog.es.json' },
  { code: 'pt', file: 'blog.pt.json' },
  { code: 'zh-cn', file: 'blog.zh-cn.json' },
  { code: 'ja', file: 'blog.ja.json' },
];

const wave42Slugs = [
  'microwave-popcorn-bag-pfas-steam-toxic-fumes',
  'cast-iron-soap-myth-seasoning-chemistry',
  'canned-food-bpa-liners-acidic-storage-safety'
];

let baseSlugs = [];

for (const loc of locales) {
  const filePath = path.join(__dirname, '../src/data', loc.file);
  assert(fs.existsSync(filePath), `${loc.code} blog file exists (${loc.file})`);
  const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));
  assert(data.length === 65, `${loc.code} has exactly 65 articles (actual: ${data.length})`);
  
  const slugs = data.map(d => d.slug);
  if (loc.code === 'en') {
    baseSlugs = slugs;
  } else {
    const parity = slugs.length === baseSlugs.length && slugs.every((s, i) => s === baseSlugs[i]);
    assert(parity, `${loc.code} has 100% slug parity with English (65 articles)`);
  }

  // Check wave 42 guides exist and have valid structure
  for (const targetSlug of wave42Slugs) {
    const item = data.find(d => d.slug === targetSlug);
    assert(!!item, `${loc.code} contains guide: ${targetSlug}`);
    if (item) {
      assert(item.title && item.title.length > 10, `${loc.code} guide ${targetSlug} has title`);
      assert(item.excerpt && item.excerpt.length > 20, `${loc.code} guide ${targetSlug} has excerpt`);
      assert(item.sections && item.sections.length === 5, `${loc.code} guide ${targetSlug} has 5 sections`);
      assert(item.faqs && item.faqs.length === 5, `${loc.code} guide ${targetSlug} has 5 FAQs`);
      assert(item.relatedTools && item.relatedTools.length >= 2, `${loc.code} guide ${targetSlug} has related tools`);
    }
  }
}

// 4. Blog routing & tool catalog wiring
console.log('\n--- 4. Testing Contextual Interactive Tool Routing in Blog Templates ---');
const blogSlugPath = path.join(__dirname, '../src/pages/blog/[slug].astro');
const langBlogSlugPath = path.join(__dirname, '../src/pages/[lang]/blog/[slug].astro');

const blogSlugContent = fs.readFileSync(blogSlugPath, 'utf8');
const langBlogSlugContent = fs.readFileSync(langBlogSlugPath, 'utf8');

assert(blogSlugContent.includes("'microwavePopcornPfas'"), 'EN blog/[slug].astro includes microwavePopcornPfas key');
assert(blogSlugContent.includes("'cannedFoodBpa'"), 'EN blog/[slug].astro includes cannedFoodBpa key');
assert(blogSlugContent.includes('microwave-popcorn-pfas-modeler'), 'EN blog/[slug].astro routes to microwave-popcorn-pfas-modeler');
assert(blogSlugContent.includes('canned-food-bpa-leaching-modeler'), 'EN blog/[slug].astro routes to canned-food-bpa-leaching-modeler');

assert(langBlogSlugContent.includes("'microwavePopcornPfas'"), 'Localized [lang]/blog/[slug].astro includes microwavePopcornPfas key');
assert(langBlogSlugContent.includes("'cannedFoodBpa'"), 'Localized [lang]/blog/[slug].astro includes cannedFoodBpa key');
assert(langBlogSlugContent.includes('microwave-popcorn-pfas-modeler'), 'Localized [lang]/blog/[slug].astro routes to microwave-popcorn-pfas-modeler');
assert(langBlogSlugContent.includes('canned-food-bpa-leaching-modeler'), 'Localized [lang]/blog/[slug].astro routes to canned-food-bpa-leaching-modeler');

// 5. RSS and llms.txt checks
console.log('\n--- 5. Testing RSS Feed & public/llms.txt ---');
const rssPath = path.join(__dirname, '../src/pages/rss.xml.ts');
const rssContent = fs.readFileSync(rssPath, 'utf8');
assert(rssContent.includes('/tools/microwave-popcorn-pfas-modeler/'), 'RSS curated tools includes microwave-popcorn-pfas-modeler');

const llmsPath = path.join(__dirname, '../public/llms.txt');
const llmsContent = fs.readFileSync(llmsPath, 'utf8');
assert(llmsContent.includes('65 Google-indexed everyday consumer tools'), 'llms.txt mentions 65 consumer tools');
assert(llmsContent.includes('65 evergreen guides per language'), 'llms.txt mentions 65 guides per language');
assert(llmsContent.includes('/tools/microwave-popcorn-pfas-modeler/'), 'llms.txt lists microwave-popcorn-pfas-modeler');

console.log('\n================================================================');
console.log(`AUDIT RESULTS: ${passedTests} PASSED, ${failedTests} FAILED`);
console.log('================================================================');

if (failedTests > 0) {
  process.exit(1);
}
