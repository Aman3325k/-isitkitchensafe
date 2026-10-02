const fs = require('fs');
const path = require('path');

function getAllHtml(dir) {
  let results = [];
  for (const file of fs.readdirSync(dir)) {
    const full = path.join(dir, file);
    if (fs.statSync(full).isDirectory()) {
      results = results.concat(getAllHtml(full));
    } else if (file.endsWith('.html')) {
      results.push(full);
    }
  }
  return results;
}

const files = getAllHtml(path.resolve(__dirname, '../dist'));
console.log(`Auditing ALL ${files.length} HTML files in dist...`);

let noTitle = 0;
let noDesc = 0;
let noCanon = 0;
let nonSlashCanon = 0;
let jsonLdErrors = 0;
let totalSchemas = 0;
const missingCanonExamples = [];

for (const f of files) {
  const content = fs.readFileSync(f, 'utf8');
  const rel = path.relative(path.resolve(__dirname, '../dist'), f).replace(/\\/g, '/');
  const is404or500 = rel === '404.html' || rel === '500.html';

  const title = content.match(/<title>([^<]+)<\/title>/i);
  if (!title || !title[1].trim()) noTitle++;

  const desc = content.match(/<meta\s+name="description"\s+content="([^"]*)"/i);
  if (!desc || !desc[1].trim()) noDesc++;

  if (!is404or500) {
    const canon = content.match(/<link\s+rel="canonical"\s+href="([^"]*)"/i);
    if (!canon || !canon[1].trim()) {
      noCanon++;
      if (missingCanonExamples.length < 5) missingCanonExamples.push(rel);
    } else if (!canon[1].endsWith('/')) {
      nonSlashCanon++;
    }
  }

  const ldMatches = content.matchAll(/<script[^>]*type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/gi);
  for (const m of ldMatches) {
    totalSchemas++;
    try {
      JSON.parse(m[1]);
    } catch (e) {
      jsonLdErrors++;
      console.log('JSON-LD parse error in', rel);
    }
  }
}

console.log('--- Comprehensive Audit Results ---');
console.log(`Checked: ${files.length} files`);
console.log(`Missing Title: ${noTitle}`);
console.log(`Missing Description: ${noDesc}`);
console.log(`Missing Canonical (excluding 404/500): ${noCanon}`);
if (missingCanonExamples.length > 0) {
  console.log('Examples of missing canonical:', missingCanonExamples);
}
console.log(`Canonical without trailing slash: ${nonSlashCanon}`);
console.log(`Total JSON-LD schemas validated: ${totalSchemas}`);
console.log(`JSON-LD parse errors: ${jsonLdErrors}`);
