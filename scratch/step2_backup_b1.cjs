const fs = require('fs');
const crypto = require('crypto');

// Copy backups
fs.copyFileSync('src/data/items.es.json', 'src/data/items.es.json.bak-pre-cat3-batch1');
fs.copyFileSync('src/data/items.pt.json', 'src/data/items.pt.json.bak-pre-cat3-batch1');

const files = [
  'src/data/items.es.json.bak-pre-cat3-batch1',
  'src/data/items.pt.json.bak-pre-cat3-batch1'
];

console.log('--- BACKUP CHECKSUMS (SHA256) ---');
files.forEach(f => {
  const data = fs.readFileSync(f);
  const hash = crypto.createHash('sha256').update(data).digest('hex');
  console.log(`${hash}  ${f}`);
});

const es = JSON.parse(fs.readFileSync('src/data/items.es.json', 'utf8'));
const pt = JSON.parse(fs.readFileSync('src/data/items.pt.json', 'utf8'));

console.log('\n--- BASELINE ITEM COUNTS ---');
console.log('Baseline items.es.json length:', es.length);
console.log('Baseline items.pt.json length:', pt.length);
