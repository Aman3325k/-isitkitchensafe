const fs = require('fs');
const crypto = require('crypto');

const esPath = 'src/data/items.es.json';
const ptPath = 'src/data/items.pt.json';
const esBakPath = 'src/data/items.es.json.bak-pre-cat3-batch6';
const ptBakPath = 'src/data/items.pt.json.bak-pre-cat3-batch6';

fs.copyFileSync(esPath, esBakPath);
fs.copyFileSync(ptPath, ptBakPath);

function getInfo(file) {
  const buf = fs.readFileSync(file);
  const hash = crypto.createHash('sha256').update(buf).digest('hex');
  const items = JSON.parse(buf.toString('utf8'));
  return {
    file,
    count: items.length,
    sha256: hash
  };
}

console.log('ES Live:', getInfo(esPath));
console.log('ES Bak: ', getInfo(esBakPath));
console.log('PT Live:', getInfo(ptPath));
console.log('PT Bak: ', getInfo(ptBakPath));
