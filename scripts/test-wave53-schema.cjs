// Pre-build schema and integrity audit for Wave 53
const fs = require('fs');
const path = require('path');

const { wave53Slugs } = require('./generate-wave53-comparisons.cjs');

console.log('================================================================');
console.log('WAVE 53 COMPARISONS (143 -> 148 / 5 LANGS) INTEGRITY AUDIT');
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
  assert(data.length === 148, `[${locale}] comparisons count is exactly 148 (got: ${data.length})`);
}

// 2. Audit slug symmetry across locales
const enSlugs = loadedData.en.map(c => c.slug);
for (const locale of ['es', 'pt', 'zh-cn', 'ja']) {
  const locSlugs = loadedData[locale].map(c => c.slug);
  const diff1 = enSlugs.filter(s => !locSlugs.includes(s));
  const diff2 = locSlugs.filter(s => !enSlugs.includes(s));
  assert(diff1.length === 0 && diff2.length === 0, `[${locale}] 100% slug parity with English (0 missing, 0 extra)`);
}

// 3. Deep-dive audit of the 5 new Wave 53 comparisons across all locales
for (const slug of wave53Slugs) {
  for (const locale of locales) {
    const comp = loadedData[locale].find(c => c.slug === slug);
    assert(!!comp, `[${locale}] '${slug}' exists in dataset`);
    if (comp) {
      assert(typeof comp.verdict === 'string' && comp.verdict.length > 100, `[${locale}] '${slug}' has comprehensive verdict`);
      assert(Array.isArray(comp.table) && comp.table.length >= 5, `[${locale}] '${slug}' table has at least 5 rows (got: ${comp.table?.length})`);
      assert(Array.isArray(comp.item1Pros) && comp.item1Pros.length >= 4, `[${locale}] '${slug}' item1Pros has at least 4 bullets (got: ${comp.item1Pros?.length})`);
      assert(Array.isArray(comp.item2Pros) && comp.item2Pros.length >= 4, `[${locale}] '${slug}' item2Pros has at least 4 bullets (got: ${comp.item2Pros?.length})`);
      assert(Array.isArray(comp.useCases) && comp.useCases.length >= 3, `[${locale}] '${slug}' useCases has at least 3 scenarios (got: ${comp.useCases?.length})`);
      assert(Array.isArray(comp.safetyNotes) && comp.safetyNotes.length >= 3, `[${locale}] '${slug}' safetyNotes has at least 3 points (got: ${comp.safetyNotes?.length})`);
      assert(Array.isArray(comp.faqs) && comp.faqs.length >= 2, `[${locale}] '${slug}' faqs has at least 2 Q&As (got: ${comp.faqs?.length})`);
      assert(Array.isArray(comp.technicalSpecs) && comp.technicalSpecs.length >= 3, `[${locale}] '${slug}' technicalSpecs has at least 3 specs (got: ${comp.technicalSpecs?.length})`);
      
      // Check relatedComparisons exist in enSlugs
      if (Array.isArray(comp.relatedComparisons)) {
        const missingRelated = comp.relatedComparisons.filter(s => !enSlugs.includes(s));
        assert(missingRelated.length === 0, `[${locale}] '${slug}' all relatedComparisons exist in DB (missing: ${missingRelated.join(', ')})`);
      }
    }
  }
}

// 4. Audit technical specs in src/data/specs/compare.cjs
const specs = require('../src/data/specs/compare.cjs');
for (const slug of wave53Slugs) {
  assert(!!specs[slug], `src/data/specs/compare.cjs contains spec for '${slug}'`);
  if (specs[slug]) {
    assert(!!specs[slug].materialThermal, `[${slug}] has materialThermal specs`);
    assert(!!specs[slug].safetyStandard, `[${slug}] has safetyStandard specs`);
    assert(!!specs[slug].applianceSpecs, `[${slug}] has applianceSpecs`);
  }
}

console.log('\n----------------------------------------------------------------');
console.log(`TOTAL AUDIT CHECKS: ${passCount + failCount} | PASSED: ${passCount} | FAILED: ${failCount}`);
console.log('----------------------------------------------------------------');

if (failCount > 0) {
  process.exit(1);
} else {
  console.log('>>> WAVE 53 AUDIT PASSED WITH 100% SUCCESS <<<\n');
}
