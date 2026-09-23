const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const BATCH_SIZE = 12;

const VERTICALS_ORDER = [
  'airfryer',
  'refrigerator',
  'oven',
  'freezer',
  'dishwasher',
  'microwave',
  'dryer',
  'how-long',
  'refreeze',
  'what-happens',
  'compare',
  'material'
];

function getVerticalConfig(vertical) {
  let dataFile = 'src/data/items.json';
  let isAuxiliary = false;
  let auxKey = '';

  if (vertical === 'how-long') {
    dataFile = 'src/data/how-long.json';
    isAuxiliary = true;
    auxKey = 'how-long';
  } else if (vertical === 'refreeze') {
    dataFile = 'src/data/refreeze.json';
    isAuxiliary = true;
    auxKey = 'refreeze';
  } else if (vertical === 'what-happens') {
    dataFile = 'src/data/what-happens.json';
    isAuxiliary = true;
    auxKey = 'what-happens';
  } else if (vertical === 'compare') {
    dataFile = 'src/data/comparisons.json';
    isAuxiliary = true;
    auxKey = 'compare';
  } else if (vertical === 'material') {
    dataFile = 'src/data/specs/material.json';
    isAuxiliary = true;
    auxKey = 'material';
  }

  const specFile = path.resolve(`src/data/specs/${vertical}.cjs`);
  const fullDataPath = path.resolve(dataFile);

  return { dataFile, fullDataPath, specFile, isAuxiliary, auxKey };
}

function loadDatasetAndItems(vertical) {
  const config = getVerticalConfig(vertical);
  
  if (vertical === 'material') {
    // 8 categories
    const categories = [
      { slug: 'metal', item: 'Metal Cookware & Utensils' },
      { slug: 'plastic', item: 'Polymers & Plastics' },
      { slug: 'glass-ceramic', item: 'Glass & Ceramics' },
      { slug: 'fabric', item: 'Fabrics & Textiles' },
      { slug: 'footwear', item: 'Footwear & Shoes' },
      { slug: 'silicone', item: 'Food-Grade Silicone' },
      { slug: 'wood-paper', item: 'Wood & Paper Products' },
      { slug: 'appliance-components', item: 'Appliance Components' }
    ];
    return { dataset: categories, verticalItems: categories, config };
  }

  const dataset = JSON.parse(fs.readFileSync(config.fullDataPath, 'utf8'));
  let verticalItems = [];
  if (!config.isAuxiliary) {
    verticalItems = dataset.filter(i => i.appliance === vertical);
  } else {
    verticalItems = dataset;
  }
  return { dataset, verticalItems, config };
}

function runBatch(vertical, batchNum, isRetry = false) {
  console.log(`\n======================================================`);
  console.log(`🚀 RUNNING ELEVATION BATCH: ${vertical} (Batch ${batchNum})${isRetry ? ' [RETRY]' : ''}`);
  console.log(`======================================================\n`);

  const { dataset, verticalItems, config } = loadDatasetAndItems(vertical);
  const totalItems = verticalItems.length;
  const totalBatches = Math.ceil(totalItems / BATCH_SIZE);

  if (batchNum < 1 || batchNum > totalBatches) {
    console.error(`Invalid batch number ${batchNum}. Total batches: ${totalBatches}`);
    return false;
  }

  const startIndex = (batchNum - 1) * BATCH_SIZE;
  const endIndex = Math.min(startIndex + BATCH_SIZE, totalItems);
  const batchItems = verticalItems.slice(startIndex, endIndex);

  console.log(`📋 Target Items (${startIndex + 1} to ${endIndex} of ${totalItems}):`);
  batchItems.forEach((item, idx) => {
    console.log(`   ${startIndex + idx + 1}. ${item.slug} (${item.item || item.item1 || item.slug})`);
  });

  if (!fs.existsSync(config.specFile)) {
    console.error(`❌ Specs file not found: ${config.specFile}`);
    return false;
  }

  // Clear require cache for spec file
  delete require.cache[require.resolve(config.specFile)];
  const specsMap = require(config.specFile);

  let enhancedCount = 0;
  let skippedCount = 0;
  const appliedSlugs = [];

  if (vertical === 'material') {
    // Update src/utils/materialCategories.ts
    const matCatPath = path.resolve('src/utils/materialCategories.ts');
    let matCatCode = fs.readFileSync(matCatPath, 'utf8');
    
    // Inject technicalSpecs into CATEGORIES in materialCategories.ts if not present
    if (!matCatCode.includes("import materialSpecs from '../data/specs/material.json';")) {
      matCatCode = "import materialSpecs from '../data/specs/material.json';\n" + matCatCode;
    }
    if (!matCatCode.includes("c.technicalSpecs = (materialSpecs as any)[c.id];")) {
      matCatCode = matCatCode.replace(
        "export const CATEGORIES: MaterialCategory[] = [",
        "export const CATEGORIES_BASE: MaterialCategory[] = ["
      );
      matCatCode += `\nexport const CATEGORIES: MaterialCategory[] = CATEGORIES_BASE.map(c => {\n  const s = (materialSpecs as any)[c.id];\n  if (s) c.technicalSpecs = s;\n  return c;\n});\n`;
      fs.writeFileSync(matCatPath, matCatCode, 'utf8');
    }
    
    batchItems.forEach(item => {
      const slug = item.slug;
      if (specsMap[slug]) {
        enhancedCount++;
        appliedSlugs.push(slug);
      } else {
        skippedCount++;
      }
    });
  } else {
    batchItems.forEach(item => {
      const slug = item.slug;
      const spec = specsMap[slug];
      if (spec) {
        item.technicalSpecs = {
          materialThermal: spec.materialThermal,
          safetyStandard: spec.safetyStandard,
          applianceSpecs: spec.applianceSpecs
        };
        enhancedCount++;
        appliedSlugs.push(slug);
      } else {
        skippedCount++;
        console.warn(`⚠️ No spec found for ${slug}, skipping...`);
      }
    });

    fs.writeFileSync(config.fullDataPath, JSON.stringify(dataset, null, 2) + '\n', 'utf8');
  }

  console.log(`\n💾 Saved updated data (${enhancedCount} enhanced, ${skippedCount} skipped).`);

  // Run full build
  console.log(`\n🔨 Running fresh full build: npm run build ...`);
  const startTime = Date.now();
  let buildOutput = '';
  let buildSuccess = false;

  try {
    buildOutput = execSync('npm run build', { encoding: 'utf8', stdio: 'pipe' });
    buildSuccess = true;
  } catch (err) {
    buildOutput = (err.stdout || '') + '\n' + (err.stderr || '');
    buildSuccess = false;
  }

  const buildDuration = ((Date.now() - startTime) / 1000).toFixed(1);
  console.log(`⏱️ Build finished in ${buildDuration}s (Success: ${buildSuccess})`);

  const pageCountMatch = buildOutput.match(/([0-9]+)\s+page\(s\)\s+built/);
  const pageCount = pageCountMatch ? pageCountMatch[1] : 'unknown';

  const deadLinksMatch = buildOutput.match(/Total Dead Link Occurrences:\s*([0-9]+)/);
  const deadLinks = deadLinksMatch ? parseInt(deadLinksMatch[1], 10) : (buildOutput.includes('0 broken links') ? 0 : 999);

  console.log(`📊 Build Stats: ${pageCount} pages built | ${deadLinks} dead links`);

  if (!buildSuccess || deadLinks > 0) {
    console.error(`❌ BUILD FAILED OR BROKEN LINKS DETECTED!`);
    console.error(`Reverting changes...`);
    if (vertical === 'material') {
      execSync(`git checkout -- src/utils/materialCategories.ts`);
    } else {
      execSync(`git checkout -- "${config.fullDataPath}"`);
    }

    if (!isRetry) {
      console.log(`🔄 Retrying batch ${batchNum} once with fresh checkout...`);
      return runBatch(vertical, batchNum, true);
    } else {
      console.error(`🚨 BATCH ${batchNum} FAILED TWICE! Logging as blocked and continuing.`);
      const blockedLog = path.resolve('logs/blocked_batches.jsonl');
      fs.appendFileSync(blockedLog, JSON.stringify({
        timestamp: new Date().toISOString(),
        vertical,
        batch: batchNum,
        reason: 'Build failed or broken links',
        rawOutput: buildOutput.slice(-2000)
      }) + '\n', 'utf8');
      return false;
    }
  }

  // Spot-check at least 2 items in dist/
  console.log(`\n🔍 Performing spot checks on rendered HTML output in dist/...`);
  const spotCheckCount = Math.min(2, appliedSlugs.length);
  for (let i = 0; i < spotCheckCount; i++) {
    const checkSlug = appliedSlugs[i];
    const htmlPath = path.resolve(`dist/${vertical}/${checkSlug}/index.html`);

    if (!fs.existsSync(htmlPath)) {
      console.error(`❌ Spot-check failed: HTML file not found: ${htmlPath}`);
      return false;
    }

    const html = fs.readFileSync(htmlPath, 'utf8');
    if (!html.includes('id="technical-specs"')) {
      console.error(`❌ Spot-check failed: <section id="technical-specs"> missing in ${htmlPath}`);
      return false;
    }

    if (!html.includes('application/ld+json')) {
      console.error(`❌ Spot-check failed: JSON-LD missing in ${htmlPath}`);
      return false;
    }

    console.log(`   ✅ Spot-check passed: ${checkSlug} (specs verified, schema intact)`);
  }

  // Git commit
  const commitMsg = `feat(content): elevate ${vertical} batch ${batchNum} (items ${startIndex + 1}-${endIndex}) with technical reference specs`;
  console.log(`\n📝 Committing changes locally: "${commitMsg}"...`);
  
  if (vertical === 'material') {
    execSync(`git add src/utils/materialCategories.ts src/data/specs/material.json`);
  } else {
    execSync(`git add "${config.fullDataPath}"`);
  }
  execSync(`git commit -m "${commitMsg}"`);

  const gitLog = execSync('git log -1 --oneline', { encoding: 'utf8' }).trim();
  console.log(`🎉 Batch ${batchNum} complete: ${gitLog}`);

  // Record log entry
  const logDir = path.resolve('logs');
  if (!fs.existsSync(logDir)) fs.mkdirSync(logDir);
  const logEntry = {
    timestamp: new Date().toISOString(),
    vertical,
    batch: batchNum,
    startIndex: startIndex + 1,
    endIndex,
    enhancedCount,
    skippedCount,
    pageCount,
    deadLinks,
    durationSec: buildDuration,
    commit: gitLog,
    spotChecked: appliedSlugs.slice(0, 2)
  };
  fs.appendFileSync(path.join(logDir, 'elevation_history.jsonl'), JSON.stringify(logEntry) + '\n', 'utf8');
  console.log(`📋 Log entry recorded.\n`);

  return true;
}

function runVertical(vertical, startBatch = 1, endBatch = null) {
  const { verticalItems } = loadDatasetAndItems(vertical);
  const totalBatches = Math.ceil(verticalItems.length / BATCH_SIZE);
  const finishBatch = endBatch ? Math.min(parseInt(endBatch, 10), totalBatches) : totalBatches;

  console.log(`\n=================================================================`);
  console.log(`🎯 STARTING VERTICAL: ${vertical.toUpperCase()} (${verticalItems.length} items, Batches ${startBatch} to ${finishBatch})`);
  console.log(`=================================================================\n`);

  for (let b = startBatch; b <= finishBatch; b++) {
    const success = runBatch(vertical, b);
    if (!success) {
      console.warn(`⚠️ Batch ${b} did not complete successfully. Continuing loop...`);
    }
  }

  console.log(`\n✨ FINISHED VERTICAL: ${vertical.toUpperCase()}\n`);
}

// -------------------------------------------------------------
// CLI Dispatcher
// -------------------------------------------------------------
const arg2 = process.argv[2];
const arg3 = process.argv[3];
const arg4 = process.argv[4];

if (arg2 === '--all' || arg2 === '--all-verticals') {
  console.log('🚀 MASTER AUTONOMOUS RUN: ALL 12 VERTICALS IN SEQUENCE');
  for (const v of VERTICALS_ORDER) {
    // Check how many items already have technicalSpecs to determine startBatch
    const { verticalItems } = loadDatasetAndItems(v);
    let startBatch = 1;
    if (v !== 'material') {
      const itemsWithSpecs = verticalItems.filter(i => i.technicalSpecs).length;
      startBatch = Math.floor(itemsWithSpecs / BATCH_SIZE) + 1;
    }
    const totalBatches = Math.ceil(verticalItems.length / BATCH_SIZE);
    if (startBatch <= totalBatches) {
      runVertical(v, startBatch);
    } else {
      console.log(`✅ Vertical ${v} is already 100% complete (${verticalItems.length}/${verticalItems.length} items).`);
    }
  }
} else if (arg2 && arg3 === 'all') {
  runVertical(arg2, 1);
} else if (arg2 && !isNaN(parseInt(arg3, 10)) && arg4 && !isNaN(parseInt(arg4, 10))) {
  runVertical(arg2, parseInt(arg3, 10), parseInt(arg4, 10));
} else if (arg2 && !isNaN(parseInt(arg3, 10))) {
  runBatch(arg2, parseInt(arg3, 10));
} else {
  console.log('Usage:');
  console.log('  node scripts/batch-runner.cjs <vertical> <batch_number>');
  console.log('  node scripts/batch-runner.cjs <vertical> <start_batch> <end_batch>');
  console.log('  node scripts/batch-runner.cjs <vertical> all');
  console.log('  node scripts/batch-runner.cjs --all');
}
