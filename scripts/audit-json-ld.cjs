const fs = require('node:fs');
const path = require('node:path');

function getSampleFiles(dir, max = 100) {
  const files = [];
  function scan(d) {
    if (files.length >= max) return;
    const entries = fs.readdirSync(d, { withFileTypes: true });
    for (const e of entries) {
      if (files.length >= max) return;
      const full = path.join(d, e.name);
      if (e.isDirectory()) {
        scan(full);
      } else if (e.name === 'index.html') {
        files.push(full);
      }
    }
  }
  scan(dir);
  return files;
}

const samples = getSampleFiles(path.resolve('dist'), 200);
console.log(`Inspecting ${samples.length} HTML files for JSON-LD syntax & schema integrity...`);

let totalSchemas = 0;
let schemaErrors = 0;

for (const f of samples) {
  const content = fs.readFileSync(f, 'utf8');
  const matches = Array.from(content.matchAll(/<script[^>]*type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/gi));
  for (const m of matches) {
    totalSchemas++;
    try {
      const data = JSON.parse(m[1]);
      if (!data['@context']) {
        console.log(`❌ Missing @context in ${f}`);
        schemaErrors++;
      }
    } catch (err) {
      console.log(`❌ JSON parse error in ${f}: ${err.message}`);
      schemaErrors++;
    }
  }
}

console.log(`Checked ${totalSchemas} schemas across ${samples.length} pages.`);
console.log(`Schema Errors: ${schemaErrors}`);
