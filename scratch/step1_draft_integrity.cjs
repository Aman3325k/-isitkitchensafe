const fs = require('fs');
const crypto = require('crypto');
const raw = fs.readFileSync('scratch/cat2_batch4_translations.json', 'utf8');
console.log('SHA256:', crypto.createHash('sha256').update(raw).digest('hex'));
console.log('Byte length:', raw.length);
const parsed = JSON.parse(raw);
const slugs = Object.keys(parsed);
console.log('Slugs found:', slugs);
console.log('Slug count:', slugs.length);

const expectedSlugs = ['pineapple', 'plum', 'raspberry', 'strawberry', 'watermelon'];
const missing = expectedSlugs.filter(s => !slugs.includes(s));
const extra = slugs.filter(s => !expectedSlugs.includes(s));

if (missing.length > 0 || extra.length > 0) {
  console.error('FAIL: Slug mismatch! Missing:', missing, 'Extra:', extra);
  process.exit(1);
} else {
  console.log('✓ Slugs match expected exactly (5/5).');
}
