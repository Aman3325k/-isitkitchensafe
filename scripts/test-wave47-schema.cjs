// Pre-build schema and integrity audit for Wave 47
const fs = require('fs');
const path = require('path');

const { wave47Slugs } = require('./generate-wave47-comparisons.cjs');

console.log('================================================================');
console.log('WAVE 47 COMPARISONS (128 -> 133 / 5 LANGS) INTEGRITY AUDIT');
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

// 1. Audit comparisons counts and parity
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
  const filePath = path.resolve(files[locale]);
  assert(fs.existsSync(filePath), `${files[locale]} exists on disk`);
  const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));
  loadedData[locale] = data;
  assert(data.length === 133, `[${locale}] comparisons count is exactly 133 (got: ${data.length})`);
}

// 2. Audit slug symmetry across locales
const enSlugs = loadedData.en.map(c => c.slug);
for (const locale of ['es', 'pt', 'zh-cn', 'ja']) {
  const locSlugs = loadedData[locale].map(c => c.slug);
  const diff1 = enSlugs.filter(s => !locSlugs.includes(s));
  const diff2 = locSlugs.filter(s => !enSlugs.includes(s));
  assert(diff1.length === 0 && diff2.length === 0, `[${locale}] 100% slug parity with English (0 missing, 0 extra)`);
}

// 3. Deep-dive audit of the 5 new Wave 47 comparisons across all locales
for (const slug of wave47Slugs) {
  for (const locale of locales) {
    const comp = loadedData[locale].find(c => c.slug === slug);
    assert(!!comp, `[${locale}] '${slug}' exists in dataset`);
    if (comp) {
      assert(typeof comp.verdict === 'string' && comp.verdict.length > 100, `[${locale}] '${slug}' has comprehensive verdict`);
      assert(Array.isArray(comp.table) && comp.table.length >= 5, `[${locale}] '${slug}' table has at least 5 rows (got: ${comp.table?.length})`);
      assert(Array.isArray(comp.item1Pros) && comp.item1Pros.length >= 4, `[${locale}] '${slug}' item1Pros has at least 4 bullets (got: ${comp.item1Pros?.length})`);
      assert(Array.isArray(comp.item2Pros) && comp.item2Pros.length >= 4, `[${locale}] '${slug}' item2Pros has at least 4 bullets (got: ${comp.item2Pros?.length})`);
      assert(Array.isArray(comp.useCases) && comp.useCases.length >= 3, `[${locale}] '${slug}' has at least 3 use cases (got: ${comp.useCases?.length})`);
      assert(Array.isArray(comp.safetyNotes) && comp.safetyNotes.length >= 3, `[${locale}] '${slug}' has at least 3 safety notes (got: ${comp.safetyNotes?.length})`);
      assert(Array.isArray(comp.faqs) && comp.faqs.length >= 2, `[${locale}] '${slug}' has at least 2 FAQs (got: ${comp.faqs?.length})`);
      assert(Array.isArray(comp.technicalSpecs) && comp.technicalSpecs.length >= 3, `[${locale}] '${slug}' has at least 3 technical specs (got: ${comp.technicalSpecs?.length})`);
      
      // Check relatedItems tool links exist
      if (Array.isArray(comp.relatedItems)) {
        for (const itemUrl of comp.relatedItems) {
          // Normalize tool link to check if Astro file exists
          const toolSlug = itemUrl.replace(/^\/(?:es|pt|zh-cn|ja)?\/?tools\//, '').replace(/\/$/, '');
          const toolAstro = path.resolve(`src/pages/tools/${toolSlug}.astro`);
          assert(fs.existsSync(toolAstro), `[${locale}] Tool link '${itemUrl}' maps to existing tool template (${toolSlug}.astro)`);
        }
      }
    }
  }
}

// 4. Audit compare.cjs technical specifications
const specs = require('../src/data/specs/compare.cjs');
for (const slug of wave47Slugs) {
  const spec = specs[slug];
  assert(!!spec, `specs/compare.cjs defines specification for '${slug}'`);
  if (spec) {
    assert(!!spec.materialThermal && !!spec.materialThermal.property, `specs/compare.cjs '${slug}' has materialThermal`);
    assert(!!spec.safetyStandard && !!spec.safetyStandard.standard, `specs/compare.cjs '${slug}' has safetyStandard`);
    assert(!!spec.applianceSpecs && !!spec.applianceSpecs.parameter, `specs/compare.cjs '${slug}' has applianceSpecs`);
  }
}

// 5. Audit llms.txt and README.md
const llmsContent = fs.readFileSync(path.resolve('public/llms.txt'), 'utf8');
assert(llmsContent.includes('133 comparisons'), 'public/llms.txt updated to 133 comparisons');

const readmeContent = fs.readFileSync(path.resolve('README.md'), 'utf8');
assert(readmeContent.includes('133 comparisons'), 'README.md updated to 133 comparisons');

console.log('\n================================================================');
console.log(`AUDIT RESULTS: ${passCount} PASSED, ${failCount} FAILED`);
console.log('================================================================\n');

if (failCount > 0) {
  process.exit(1);
}
