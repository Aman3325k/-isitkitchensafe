const fs = require('fs');
const path = require('path');

console.log('=== WAVE 72 INTEGRITY & SCHEMA VERIFICATION HARNESS ===\n');

let pass = true;

function assert(condition, message) {
  if (!condition) {
    console.error(`❌ FAIL: ${message}`);
    pass = false;
  } else {
    console.log(`✅ PASS: ${message}`);
  }
}

// 1. Allowlist verification
const allowlistPath = path.resolve('src/data/consumer-tools-allowlist.json');
const allowlist = JSON.parse(fs.readFileSync(allowlistPath, 'utf8'));
assert(allowlist.length === 80, `Consumer tools allowlist count must be 80 (got ${allowlist.length})`);
assert(allowlist.includes('air-fryer-pah-resuspension-modeler'), "Allowlist includes 'air-fryer-pah-resuspension-modeler'");

// 2. Tool #80 pages and schemas
const enToolPath = path.resolve('src/pages/tools/air-fryer-pah-resuspension-modeler.astro');
const enToolContent = fs.readFileSync(enToolPath, 'utf8');
assert(enToolContent.includes('webAppSchema'), 'EN Tool #80 includes webAppSchema');
assert(enToolContent.includes('breadcrumbSchema'), 'EN Tool #80 includes breadcrumbSchema');
assert(enToolContent.includes('faqSchema'), 'EN Tool #80 includes faqSchema');

const langToolPath = path.resolve('src/pages/[lang]/tools/air-fryer-pah-resuspension-modeler.astro');
const langToolContent = fs.readFileSync(langToolPath, 'utf8');
assert(langToolContent.includes('webAppSchema'), '[lang] Tool #80 includes webAppSchema');
assert(langToolContent.includes('breadcrumbSchema'), '[lang] Tool #80 includes breadcrumbSchema');
assert(langToolContent.includes('faqSchema'), '[lang] Tool #80 includes faqSchema');

// 3. Blog guide counts across 5 locales
const locales = ['en', 'es', 'pt', 'zh-cn', 'ja'];
const blogData = {};
for (const loc of locales) {
  const filePath = path.resolve(loc === 'en' ? 'src/data/blog.json' : `src/data/blog.${loc}.json`);
  const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));
  blogData[loc] = data;
  assert(data.length === 110, `${loc.toUpperCase()} blog guides count must be 110 (got ${data.length})`);
}

// 4. Slug symmetry for Wave 72 guides
const wave72Slugs = [
  'air-fryer-pah-pyrolysis-aerosol-inhalation-safety',
  'induction-cooktop-delamination-thermal-stress-safety',
  'refrigerator-cold-chain-defrost-failure-listeria-safety'
];

for (const slug of wave72Slugs) {
  for (const loc of locales) {
    const found = blogData[loc].find(b => b.slug === slug);
    assert(!!found, `[${loc}] contains guide: ${slug}`);
    if (found) {
      assert(found.sections && found.sections.length >= 5, `[${loc}] ${slug} has at least 5 sections (${found.sections.length})`);
      assert(found.faqs && found.faqs.length >= 5, `[${loc}] ${slug} has at least 5 FAQs (${found.faqs.length})`);
      assert(found.relatedTools && found.relatedTools.length >= 3, `[${loc}] ${slug} has at least 3 related tools (${found.relatedTools.length})`);
    }
  }
}

console.log('\n======================================================');
if (pass) {
  console.log('🎉 ALL WAVE 72 INTEGRITY CHECKS PASSED PERFECTLY!');
  process.exit(0);
} else {
  console.error('💥 SOME INTEGRITY CHECKS FAILED!');
  process.exit(1);
}
