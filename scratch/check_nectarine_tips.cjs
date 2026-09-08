const fs = require('fs');
const content = fs.readFileSync('src/data/items.json', 'utf8');
const lines = content.split(/\r?\n/);

let necLine = -1;
for (let i = 0; i < lines.length; i++) {
  if (lines[i].includes('"slug": "nectarine"') && lines[i-1] && lines[i-1].includes('"freezer"')) {
    necLine = i;
    break;
  }
}

console.log('Nectarine slug at line:', necLine + 1);
let tipsLine = -1;
for (let i = necLine; i < necLine + 25; i++) {
  if (lines[i].includes('"tips": [')) {
    tipsLine = i;
    break;
  }
}

console.log('--- RAW FILE LINES FROM items.json (Line ' + (tipsLine + 1) + ' to ' + (tipsLine + 5) + ') ---');
for (let i = tipsLine; i <= tipsLine + 4; i++) {
  console.log(`${i+1}: ${lines[i]}`);
}
