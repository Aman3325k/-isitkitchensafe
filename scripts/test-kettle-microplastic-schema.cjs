const fs = require('fs');
const path = require('path');

console.log('================================================================');
console.log('KETTLE MICROPLASTIC SIMULATOR SCHEMA & E-E-A-T AUDIT TEST SUITE');
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
const enPagePath = path.join(__dirname, '../src/pages/tools/plastic-water-kettle-microplastic-simulator.astro');
const langPagePath = path.join(__dirname, '../src/pages/[lang]/tools/plastic-water-kettle-microplastic-simulator.astro');

assert(fs.existsSync(enPagePath), 'EN Page exists on disk');
assert(fs.existsSync(langPagePath), 'Localized Page exists on disk');

const enContent = fs.readFileSync(enPagePath, 'utf8');
const langContent = fs.readFileSync(langPagePath, 'utf8');

assert(enContent.includes('excludeFaqSchema={true}'), 'EN Page: excludeFaqSchema={true} configured');
assert(enContent.includes('excludeBreadcrumbSchema={true}'), 'EN Page: excludeBreadcrumbSchema={true} configured');
assert(enContent.includes('slot="head"'), 'EN Page: slot="head" used for custom schema injection');
assert(langContent.includes('excludeFaqSchema={true}'), 'Localized Page: excludeFaqSchema={true} configured');
assert(langContent.includes('excludeBreadcrumbSchema={true}'), 'Localized Page: excludeBreadcrumbSchema={true} configured');
assert(langContent.includes('slot="head"'), 'Localized Page: slot="head" used for custom schema injection');

// 2. Data file check
console.log('\n--- 2. Testing Data File Structure & Regulatory Citations ---');
const dataPath = path.join(__dirname, '../src/data/plastic-water-kettle-microplastic-data.json');
assert(fs.existsSync(dataPath), 'Data JSON file exists');
const rawData = JSON.parse(fs.readFileSync(dataPath, 'utf8'));

assert(rawData.kettleMaterials?.length >= 5, 'Contains at least 5 kettle materials');
assert(rawData.kettleAges?.length >= 4, 'Contains at least 4 kettle age tiers');
assert(rawData.waterExposure?.length >= 4, 'Contains at least 4 water exposure scenarios');
assert(rawData.waterChemistry?.length >= 4, 'Contains at least 4 water chemistry scenarios');

// 3. Schema.org validation across all 5 locales
console.log('\n--- 3. Testing Schema.org JSON-LD Objects Across All Locales ---');
const LOCALES = ['en', 'es', 'pt', 'zh-cn', 'ja'];

LOCALES.forEach(locale => {
  const faqs = rawData.faqs[locale];
  assert(Array.isArray(faqs) && faqs.length === 5, `[${locale}] Has exactly 5 scientific FAQs`);
  faqs.forEach((faq, idx) => {
    assert(faq.question?.length > 10, `[${locale}] FAQ #${idx + 1} has valid question`);
    assert(faq.answer?.length > 50, `[${locale}] FAQ #${idx + 1} has authoritative answer (>50 chars)`);
  });
});

// 4. Comparison database check
console.log('\n--- 4. Testing Comparisons Database Parity (98 items) ---');
['comparisons.json', 'comparisons.es.json', 'comparisons.pt.json', 'comparisons.zh-cn.json', 'comparisons.ja.json'].forEach(file => {
  const filePath = path.join(__dirname, '../src/data', file);
  const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));
  assert(data.length === 98, `${file} has exactly 98 comparisons`);
  const slugs = data.map(d => d.slug);
  assert(slugs.includes('glass-vs-plastic-electric-kettle'), `${file} includes glass-vs-plastic-electric-kettle`);
  assert(slugs.includes('enamel-cast-iron-vs-raw-cast-iron'), `${file} includes enamel-cast-iron-vs-raw-cast-iron`);
  assert(slugs.includes('air-fryer-basket-ceramic-vs-teflon'), `${file} includes air-fryer-basket-ceramic-vs-teflon`);
  assert(slugs.includes('titanium-vs-stainless-steel-cookware'), `${file} includes titanium-vs-stainless-steel-cookware`);
  assert(slugs.includes('melamine-vs-bamboo-fiber-dinnerware'), `${file} includes melamine-vs-bamboo-fiber-dinnerware`);
});

console.log('\n================================================================');
console.log(`SUMMARY: ${passedTests} passed, ${failedTests} failed out of ${passedTests + failedTests} tests.`);
console.log('================================================================');

if (failedTests > 0) {
  process.exit(1);
} else {
  console.log('ALL SCHEMA & ROADMAP AUDIT TESTS PASSED SUCCESSFULLY! ✨\n');
}
