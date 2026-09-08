const fs = require('fs');
const es = JSON.parse(fs.readFileSync('src/data/items.es.json', 'utf8'));
const pt = JSON.parse(fs.readFileSync('src/data/items.pt.json', 'utf8'));
const en = JSON.parse(fs.readFileSync('src/data/items.json', 'utf8'));

const getUniqueMats = (arr) => {
  const s = new Set();
  arr.forEach(i => { if (i.material) s.add(i.material); });
  return Array.from(s).sort();
};

console.log('ES Materials count:', getUniqueMats(es).length);
console.log('ES Materials with parentheses:');
getUniqueMats(es).filter(m => m.includes('(')).forEach(m => console.log('  ', m));

console.log('\nPT Materials count:', getUniqueMats(pt).length);
console.log('PT Materials with parentheses:');
getUniqueMats(pt).filter(m => m.includes('(')).forEach(m => console.log('  ', m));

console.log('\nEN Materials with parentheses:');
getUniqueMats(en).filter(m => m.includes('(')).forEach(m => console.log('  ', m));
