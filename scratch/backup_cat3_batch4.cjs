const fs = require('fs');
const crypto = require('crypto');

function hashFile(path) {
  const buf = fs.readFileSync(path);
  return crypto.createHash('sha256').update(buf).digest('hex');
}

const esSrc = 'src/data/items.es.json';
const ptSrc = 'src/data/items.pt.json';
const esBak = 'src/data/items.es.json.bak-pre-cat3-batch4';
const ptBak = 'src/data/items.pt.json.bak-pre-cat3-batch4';

fs.copyFileSync(esSrc, esBak);
fs.copyFileSync(ptSrc, ptBak);

const esItems = JSON.parse(fs.readFileSync(esSrc, 'utf8'));
const ptItems = JSON.parse(fs.readFileSync(ptSrc, 'utf8'));

console.log('ES baseline count:', esItems.length);
console.log('ES src hash:      ', hashFile(esSrc));
console.log('ES bak hash:      ', hashFile(esBak));

console.log('PT baseline count:', ptItems.length);
console.log('PT src hash:      ', hashFile(ptSrc));
console.log('PT bak hash:      ', hashFile(ptBak));
