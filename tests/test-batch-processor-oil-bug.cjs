const assert = require('assert');
const path = require('path');
const { classifyItem, generateTieredBoilerplate } = require('../batch-processor.cjs');

console.log('Running unit tests for batch-processor.cjs fixes...\n');

// 1. microwave-aluminum-foil test
const foilResult = classifyItem('aluminum foil', 'microwave', 'what-happens.json', 'microwave', '', 'microwave-aluminum-foil');
console.log('microwave-aluminum-foil result:', foilResult.material);
assert.notStrictEqual(
  foilResult.material,
  'Cooking Oil / Liquid Fat / Seasoning',
  'FAIL: microwave-aluminum-foil should not match oil classifier!'
);
assert.strictEqual(
  foilResult.material,
  'Aluminum Metal',
  'FAIL: microwave-aluminum-foil should classify as Aluminum Metal!'
);

// 2. boil-dry-pot test
const boilResult = classifyItem('boil dry pot', 'cookware', 'what-happens.json', 'stove', '', 'boil-dry-pot');
console.log('boil-dry-pot result:', boilResult.material);
assert.notStrictEqual(
  boilResult.material,
  'Cooking Oil / Liquid Fat / Seasoning',
  'FAIL: boil-dry-pot should not match oil classifier!'
);

// 3. Genuine oil-related slug test
const oilResult = classifyItem('frying oil', 'liquid', 'what-happens.json', 'deep-fryer', '', 'reuse-frying-oil');
console.log('reuse-frying-oil result:', oilResult.material);
assert.strictEqual(
  oilResult.material,
  'Cooking Oil / Liquid Fat / Seasoning',
  'FAIL: reuse-frying-oil should match oil classifier!'
);

// 4. Boilerplate safeguard test: unknown scenario should NOT receive chlorine bleach / ammonia boilerplate
const unknownBoilerplate = generateTieredBoilerplate('strange-gadget-failure', 'dangerous');
console.log('unknown-scenario boilerplate needsReview:', unknownBoilerplate.needsReview);
assert.strictEqual(
  unknownBoilerplate.needsReview,
  true,
  'FAIL: Unknown scenario should have needsReview: true!'
);
assert.strictEqual(
  unknownBoilerplate.reason.includes('chlorine bleach'),
  false,
  'FAIL: Unknown scenario must not contain chlorine bleach boilerplate!'
);

// 5. Legitimate chemical entry test: mix-bleach-and-ammonia
const bleachAmmoniaBoilerplate = generateTieredBoilerplate('mix-bleach-and-ammonia', 'dangerous');
console.log('mix-bleach-and-ammonia reason:', bleachAmmoniaBoilerplate.reason.slice(0, 50) + '...');
assert.strictEqual(
  bleachAmmoniaBoilerplate.reason.includes('chlorine bleach'),
  true,
  'FAIL: mix-bleach-and-ammonia must contain chemical gas warning!'
);
assert.strictEqual(
  bleachAmmoniaBoilerplate.needsReview,
  false,
  'FAIL: mix-bleach-and-ammonia should not need review!'
);

console.log('\n✓ ALL UNIT TESTS PASSED SUCCESSFULLY!');
