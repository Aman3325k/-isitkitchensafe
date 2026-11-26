// Master script to execute Wave 89 injection across comparisons (233 -> 238 / 5 langs) and specs
const fs = require('fs');
const path = require('path');

const { wave89Slugs, newComparisonsEn } = require('./generate-wave89-comparisons.cjs');
const { newComparisonsEs } = require('./build-wave89-es.cjs');
const { newComparisonsPt } = require('./build-wave89-pt.cjs');
const { newComparisonsZh } = require('./build-wave89-zh.cjs');
const { newComparisonsJa } = require('./build-wave89-ja.cjs');

console.log('--- STARTING WAVE 89 INJECTION ---');

const langMap = {
  en: { file: 'src/data/comparisons.json', data: newComparisonsEn },
  es: { file: 'src/data/comparisons.es.json', data: newComparisonsEs },
  pt: { file: 'src/data/comparisons.pt.json', data: newComparisonsPt },
  'zh-cn': { file: 'src/data/comparisons.zh-cn.json', data: newComparisonsZh },
  ja: { file: 'src/data/comparisons.ja.json', data: newComparisonsJa }
};

for (const [lang, config] of Object.entries(langMap)) {
  const filePath = path.resolve(config.file);
  const existing = JSON.parse(fs.readFileSync(filePath, 'utf8'));
  console.log(`Current ${lang} count: ${existing.length}`);

  const filtered = existing.filter(item => !wave89Slugs.includes(item.slug));
  const merged = [...filtered, ...config.data];

  fs.writeFileSync(filePath, JSON.stringify(merged, null, 2) + '\n', 'utf8');
  console.log(`Updated ${lang} comparisons to ${merged.length}`);
}

// Update src/data/specs/compare.cjs from canonical English technicalSpecs
const specsPath = path.resolve('src/data/specs/compare.cjs');
delete require.cache[require.resolve(specsPath)];
const existingSpecs = require(specsPath);

const newSpecs = {};
for (const item of newComparisonsEn) {
  newSpecs[item.slug] = item.technicalSpecs;
}

const mergedSpecs = {
  ...existingSpecs,
  ...newSpecs
};

fs.writeFileSync(specsPath, 'module.exports = ' + JSON.stringify(mergedSpecs, null, 2) + ';\n', 'utf8');
console.log(`Updated src/data/specs/compare.cjs to ${Object.keys(mergedSpecs).length} specs`);

console.log('--- WAVE 89 INJECTION COMPLETE ---');
