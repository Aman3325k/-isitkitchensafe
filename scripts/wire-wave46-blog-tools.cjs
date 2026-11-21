const fs = require('fs');

['src/pages/blog/[slug].astro', 'src/pages/[lang]/blog/[slug].astro'].forEach(filePath => {
  let content = fs.readFileSync(filePath, 'utf8');
  const target = `} else if (/(air-fryer-preheating|preheating-empty|teflon-fume)/.test(toolMatchSlug)) {
  recommendedToolKey = 'airFryerTeflon';`;
  const addition = `} else if (/(air-fryer-reheating|lipid-oxidation|toxic-aldehydes)/.test(toolMatchSlug)) {
  recommendedToolKey = 'oilSmokePoint';
} else if (/(air-fryer-preheating|preheating-empty|teflon-fume)/.test(toolMatchSlug)) {
  recommendedToolKey = 'airFryerTeflon';`;
  if (!content.includes('air-fryer-reheating')) {
    content = content.replace(target, addition);
    fs.writeFileSync(filePath, content, 'utf8');
    console.log('✅ Added air-fryer-reheating matcher to ' + filePath);
  } else {
    console.log('⚠️ Already includes matcher in ' + filePath);
  }
});
