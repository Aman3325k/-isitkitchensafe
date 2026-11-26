// Pre-build and post-build schema & integrity audit for Wave 89
const fs = require('fs');
const path = require('path');

const { wave89Slugs } = require('./generate-wave89-comparisons.cjs');

console.log('================================================================');
console.log('WAVE 89 COMPARISONS (233 -> 238 / 5 LANGS) INTEGRITY AUDIT');
console.log('================================================================\n');

let passCount = 0;
let failCount = 0;

function assert(condition, message) {
  if (condition) {
    console.log(`  [PASS] ${message}`);
    passCount++;
  } else {
    console.error(`  [FAIL] ${message}`);
    failCount++;
  }
}

const VALID_CATEGORIES = ['cooking-method', 'container-material', 'food-storage', 'appliance-safety'];
const locales = ['en', 'es', 'pt', 'zh-cn', 'ja'];
const files = {
  en: 'src/data/comparisons.json',
  es: 'src/data/comparisons.es.json',
  pt: 'src/data/comparisons.pt.json',
  'zh-cn': 'src/data/comparisons.zh-cn.json',
  ja: 'src/data/comparisons.ja.json'
};

const loadedData = {};
for (const locale of locales) {
  const filePath = path.resolve(__dirname, '..', files[locale]);
  assert(fs.existsSync(filePath), `${files[locale]} exists on disk`);
  const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));
  loadedData[locale] = data;
  assert(data.length === 238, `[${locale}] comparisons count is exactly 238 (got: ${data.length})`);
}

const enSlugs = loadedData.en.map(c => c.slug);
assert(new Set(enSlugs).size === 238, `All 238 English slugs are strictly unique`);

for (const locale of ['es', 'pt', 'zh-cn', 'ja']) {
  const locSlugs = loadedData[locale].map(c => c.slug);
  const diff1 = enSlugs.filter(s => !locSlugs.includes(s));
  const diff2 = locSlugs.filter(s => !enSlugs.includes(s));
  assert(diff1.length === 0 && diff2.length === 0, `[${locale}] 100% slug parity with English (0 missing, 0 extra)`);
}

for (const slug of wave89Slugs) {
  for (const locale of locales) {
    const comp = loadedData[locale].find(c => c.slug === slug);
    assert(!!comp, `[${locale}] '${slug}' exists in dataset`);
    if (comp) {
      assert(VALID_CATEGORIES.includes(comp.category), `[${locale}] '${slug}' category '${comp.category}' is an indexed /compare/ category`);
      assert(typeof comp.verdict === 'string' && comp.verdict.length > 100, `[${locale}] '${slug}' has comprehensive verdict`);
      assert(Array.isArray(comp.table) && comp.table.length >= 5, `[${locale}] '${slug}' table has at least 5 rows`);
      const validTableRows = comp.table.every(r => r.aspect && r.item1Value && r.item2Value);
      assert(validTableRows, `[${locale}] '${slug}' every table row uses { aspect, item1Value, item2Value }`);
      assert(Array.isArray(comp.item1Pros) && comp.item1Pros.length >= 4, `[${locale}] '${slug}' item1Pros >= 4`);
      assert(Array.isArray(comp.item2Pros) && comp.item2Pros.length >= 4, `[${locale}] '${slug}' item2Pros >= 4`);
      assert(Array.isArray(comp.useCases) && comp.useCases.length >= 3, `[${locale}] '${slug}' useCases >= 3`);
      assert(Array.isArray(comp.safetyNotes) && comp.safetyNotes.length >= 3, `[${locale}] '${slug}' safetyNotes >= 3`);
      assert(Array.isArray(comp.faqs) && comp.faqs.length >= 3, `[${locale}] '${slug}' faqs >= 3`);

      const ts = comp.technicalSpecs;
      assert(
        ts && !Array.isArray(ts) && ts.materialThermal?.threshold && ts.safetyStandard?.standard && ts.applianceSpecs?.guideline,
        `[${locale}] '${slug}' technicalSpecs matches TechnicalSpecs.astro schema`
      );

      if (Array.isArray(comp.relatedComparisons)) {
        const missingRelated = comp.relatedComparisons.filter(s => !enSlugs.includes(s));
        assert(missingRelated.length === 0, `[${locale}] '${slug}' all relatedComparisons exist in DB`);
      }

      if (Array.isArray(comp.relatedItems)) {
        for (const itemPath of comp.relatedItems) {
          const cleanPath = itemPath.replace(/^\/(?:es|pt|zh-cn|ja)\//, '').replace(/^\/tools\//, '').replace(/\/$/, '');
          const enExists = fs.existsSync(path.resolve(__dirname, `../src/pages/tools/${cleanPath}.astro`));
          const langExists = fs.existsSync(path.resolve(__dirname, `../src/pages/[lang]/tools/${cleanPath}.astro`));
          assert(enExists && langExists, `[${locale}] '${slug}' related tool '${cleanPath}' exists in EN & [lang]`);
        }
      }
    }
  }
}

const specsPath = path.resolve(__dirname, '../src/data/specs/compare.cjs');
delete require.cache[require.resolve(specsPath)];
const specs = require(specsPath);
assert(Object.keys(specs).length === 238, `src/data/specs/compare.cjs contains exactly 238 specs (got: ${Object.keys(specs).length})`);
for (const slug of wave89Slugs) {
  assert(!!specs[slug], `src/data/specs/compare.cjs contains entry for '${slug}'`);
  if (specs[slug]) {
    assert(!!specs[slug].materialThermal?.property, `[${slug}] has materialThermal.property`);
    assert(!!specs[slug].safetyStandard?.standard, `[${slug}] has safetyStandard.standard`);
    assert(!!specs[slug].applianceSpecs?.parameter, `[${slug}] has applianceSpecs.parameter`);
  }
}

const llmsContent = fs.readFileSync(path.resolve(__dirname, '../public/llms.txt'), 'utf8');
for (const slug of wave89Slugs) {
  assert(llmsContent.includes(`/compare/${slug}/`), `public/llms.txt references /compare/${slug}/`);
}

// Post-build dist/ verification when --dist flag is passed
if (process.argv.includes('--dist')) {
  const distPrefixes = ['', 'es/', 'pt/', 'zh-cn/', 'ja/'];
  const expectedToolBySlug = {
    'frost-free-vs-manual-defrost-refrigerator': 'tools/refrigerator-defrost-safety-modeler/',
    'electric-kettle-vs-stovetop-kettle': 'tools/electric-kettle-nickel-modeler/',
    'plastic-wrap-vs-silicone-stretch-lids': 'tools/kitchen-plastic-leaching-checker/',
    'boiling-tap-water-vs-water-filter': 'tools/water-filter-efficiency-analyzer/',
    'induction-adapter-plate-vs-induction-ready-cookware': 'tools/induction-cooktop-delamination-modeler/'
  };

  for (const prefix of distPrefixes) {
    const idxHtmlPath = path.resolve(__dirname, '..', 'dist', `${prefix}compare/index.html`);
    const idxHtml = fs.readFileSync(idxHtmlPath, 'utf8');
    assert(idxHtml.includes('"@type":"ItemList"') || idxHtml.includes('"@type": "ItemList"'), `[dist/${prefix}compare/] renders ItemList schema`);

    for (const slug of wave89Slugs) {
      const htmlPath = path.resolve(__dirname, '..', 'dist', `${prefix}compare/${slug}/index.html`);
      assert(fs.existsSync(htmlPath), `[dist/${prefix}compare/${slug}/] HTML exists`);
      if (fs.existsSync(htmlPath)) {
        const html = fs.readFileSync(htmlPath, 'utf8');
        assert(html.includes('"@type":"BreadcrumbList"') || html.includes('"@type": "BreadcrumbList"'), `[dist/${prefix}${slug}] renders BreadcrumbList schema`);
        assert(html.includes('"@type":"WebPage"') || html.includes('"@type": "WebPage"'), `[dist/${prefix}${slug}] renders WebPage schema`);
        assert(html.includes('"@type":"Article"') || html.includes('"@type": "Article"'), `[dist/${prefix}${slug}] renders Article schema`);
        assert(html.includes('"@type":"FAQPage"') || html.includes('"@type": "FAQPage"'), `[dist/${prefix}${slug}] renders FAQPage schema`);
        assert(html.includes(`/${prefix}${expectedToolBySlug[slug]}`), `[dist/${prefix}${slug}] links contextual tool /${prefix}${expectedToolBySlug[slug]}`);
      }
    }
  }
}

console.log('\n================================================================');
console.log(`AUDIT COMPLETE: ${passCount} PASSED, ${failCount} FAILED`);
console.log('================================================================\n');

if (failCount > 0) {
  process.exit(1);
}
