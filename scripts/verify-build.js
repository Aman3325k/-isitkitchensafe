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
        results.push({ path: fullPath, size: stat.size });
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
console.log(`Total HTML files found: ${htmlFiles.length}`);

const oversized = htmlFiles.filter(f => f.size > 15 * 1024);
if (oversized.length > 0) {
  console.log(`\nFound ${oversized.length} HTML files larger than 15KB:`);
  oversized.slice(0, 15).forEach(f => {
    console.log(`- ${path.relative('dist', f.path)}: ${(f.size / 1024).toFixed(2)} KB`);
  });
  if (oversized.length > 15) {
    console.log(`... and ${oversized.length - 15} more.`);
  }
} else {
  console.log('\nSuccess! All built HTML pages are under 15KB.');
}
