const fs = require('node:fs');

const r = JSON.parse(fs.readFileSync('redirects.json', 'utf8'));
const mapContent = fs.readFileSync('functions/_redirects-map.js', 'utf8');
const staticContent = fs.readFileSync('public/_redirects', 'utf8');
const staticLines = staticContent.split('\n').filter(l => l.trim().length > 0 && !l.startsWith('#')).length;
const mapMatches = (mapContent.match(/\[\s*"/g) || []).length;

console.log('redirects.json raw count:', r.length);
console.log('functions/_redirects-map.js entries:', mapMatches);
console.log('public/_redirects active rules count:', staticLines);
console.log('Cloudflare 2000-line budget headroom:', 2000 - staticLines);
