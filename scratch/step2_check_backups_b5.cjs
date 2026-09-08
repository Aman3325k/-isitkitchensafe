const fs = require('fs');
const crypto = require('crypto');

function getFileInfo(path) {
  const buf = fs.readFileSync(path);
  const hash = crypto.createHash('sha256').update(buf).digest('hex');
  const json = JSON.parse(buf.toString('utf8'));
  return {
    path,
    size: buf.length,
    count: json.length,
    sha256: hash
  };
}

console.log('--- Current Live Files ---');
const esLive = getFileInfo('src/data/items.es.json');
const ptLive = getFileInfo('src/data/items.pt.json');
console.log('ES Live:', esLive);
console.log('PT Live:', ptLive);

console.log('\n--- Backup Files ---');
const esBak = getFileInfo('src/data/items.es.json.bak-pre-cat3-batch5');
const ptBak = getFileInfo('src/data/items.pt.json.bak-pre-cat3-batch5');
console.log('ES Bak:', esBak);
console.log('PT Bak:', ptBak);

console.log('\nES match:', esLive.sha256 === esBak.sha256);
console.log('PT match:', ptLive.sha256 === ptBak.sha256);
