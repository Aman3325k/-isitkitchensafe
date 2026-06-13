import fs from 'fs';
import path from 'path';

const walk = (dir) => {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(file => {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    if (stat && stat.isDirectory()) {
      results = results.concat(walk(fullPath));
    } else {
      if (file.endsWith('.html')) {
        results.push(fullPath);
      }
    }
  });
  return results;
};

if (!fs.existsSync('dist')) {
  console.error('dist folder not found. Build first.');
  process.exit(1);
}

const htmlFiles = walk('dist');
console.log(`Minifying ${htmlFiles.length} HTML files...`);

let minifiedCount = 0;
htmlFiles.forEach(file => {
  let html = fs.readFileSync(file, 'utf8');
  // Remove HTML comments
  html = html.replace(/<!--[\s\S]*?-->/g, '');
  // Collapse spaces and newlines
  html = html.replace(/\s+/g, ' ');
  // Remove spaces between tags
  html = html.replace(/>\s+</g, '><');
  html = html.replace(/\s+>/g, '>');
  fs.writeFileSync(file, html, 'utf8');
  minifiedCount++;
});

console.log(`Minification complete: minified ${minifiedCount} files.`);
