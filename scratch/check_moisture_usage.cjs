const fs = require('fs');
const es = JSON.parse(fs.readFileSync('src/data/items.es.json', 'utf8'));
const pt = JSON.parse(fs.readFileSync('src/data/items.pt.json', 'utf8'));

console.log('=== ES occurrences of humedad in materials or keyRisks ===');
es.forEach(i => {
  if (i.keyRisk && i.keyRisk.toLowerCase().includes('humedad')) {
    console.log(`[${i.appliance}] ${i.slug}: keyRisk="${i.keyRisk}"`);
  }
});

console.log('=== PT occurrences of umidade in materials or keyRisks ===');
pt.forEach(i => {
  if (i.keyRisk && i.keyRisk.toLowerCase().includes('umidade')) {
    console.log(`[${i.appliance}] ${i.slug}: keyRisk="${i.keyRisk}"`);
  }
});
