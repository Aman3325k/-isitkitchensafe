const { execSync } = require('child_process');

console.log('=== RUNNING WAVE 54 MASTER CONTENT GENERATOR ===');

const scripts = [
  'scripts/generate-wave54-complete-guides.cjs',
  'scripts/generate-wave54-es.cjs',
  'scripts/generate-wave54-pt.cjs',
  'scripts/generate-wave54-zh.cjs',
  'scripts/generate-wave54-ja.cjs'
];

for (const script of scripts) {
  console.log(`\n--- Running ${script} ---`);
  const out = execSync(`node ${script}`, { encoding: 'utf8' });
  console.log(out);
}

console.log('=== ALL 5 LANGUAGE GUIDES GENERATED SUCCESSFULLY ===');
