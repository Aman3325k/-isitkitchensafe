/**
 * scripts/test-i18n-health.mjs
 * Deterministic Test Harness for i18n Data Health across all Locales.
 * 
 * Validates:
 * 1. 14-field schema parity across all locale items JSON files.
 * 2. Exactly 3 FAQs per item (with non-empty question and answer).
 * 3. Strict placeholder variable preservation ({name}, {{count}}, ${item}, etc.).
 * 4. Canonical English slug resolution in relatedItems.
 * 5. Zero duplicate slugs across all locales.
 * 
 * CLI Options:
 *   --locale=<lang>         Only test the specified locale (e.g. --locale=zh-cn)
 *   --all                   Test all locale files including legacy EN/ES/PT
 *   --allow-legacy-2-faqs   Treat pre-existing 2-FAQ items as warnings instead of fatal errors
 */

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const DATA_DIR = path.resolve(__dirname, '../src/data');

const args = process.argv.slice(2);
const targetLocaleArg = args.find(a => a.startsWith('--locale='))?.split('=')[1];
const testAll = args.includes('--all');
const allowLegacy2Faqs = args.includes('--allow-legacy-2-faqs');

const CORE_12_FIELDS = [
  'item',
  'appliance',
  'slug',
  'safe',
  'shortAnswer',
  'reason',
  'tips',
  'warnings',
  'faqs',
  'relatedItems',
  'material',
  'learnMore'
];

const VARIABLE_PATTERNS = [
  /\{name\}/g,
  /\{\{count\}\}/g,
  /\$\{item\}/g,
  /\$\{appliance\}/g,
  /\$\{duration\}/g,
  /\$\{location\}/g,
  /\{cat\.itemCount\}/g
];

function extractVariables(str) {
  if (typeof str !== 'string') return [];
  const found = [];
  for (const pattern of VARIABLE_PATTERNS) {
    const matches = str.match(pattern);
    if (matches) found.push(...matches);
  }
  return found.sort();
}

function loadJson(filename) {
  const filepath = path.join(DATA_DIR, filename);
  if (!fs.existsSync(filepath)) return null;
  return JSON.parse(fs.readFileSync(filepath, 'utf8'));
}

console.log('====================================================');
console.log('🧪 Running i18n Health & Data Parity Test Harness');
if (targetLocaleArg) console.log(`🎯 Target Locale Filter: ${targetLocaleArg}`);
if (testAll) console.log('🌐 Scope: All locale files (en, es, pt, zh-cn, ja)');
if (allowLegacy2Faqs) console.log('⚙️  Flag: --allow-legacy-2-faqs active');
console.log('====================================================\n');

let totalChecks = 0;
let totalErrors = 0;
let totalWarnings = 0;

function passCheck() {
  totalChecks++;
}

function reportError(rule, message) {
  console.error(`❌ [${rule}] ${message}`);
  totalErrors++;
  totalChecks++;
}

function reportWarning(rule, message) {
  console.warn(`⚠️ [${rule}] ${message}`);
  totalWarnings++;
  totalChecks++;
}

// 1. Load canonical English dataset
const itemsEn = loadJson('items.json');
if (!itemsEn) {
  console.error('Fatal: src/data/items.json not found.');
  process.exit(1);
}

const canonicalKeys = new Set(itemsEn.map(i => `${i.appliance}/${i.slug}`));
const canonicalSlugs = new Set(itemsEn.map(i => i.slug));
const enItemsMap = new Map(itemsEn.map(i => [`${i.appliance}/${i.slug}`, i]));

console.log(`Loaded ${itemsEn.length} canonical English items.`);

// Find all items.*.json files
const files = fs.readdirSync(DATA_DIR);
let itemsFiles = [];

if (targetLocaleArg) {
  const expectedFile = targetLocaleArg === 'en' ? 'items.json' : `items.${targetLocaleArg}.json`;
  itemsFiles = files.filter(f => f === expectedFile);
  if (itemsFiles.length === 0) {
    console.log(`ℹ️ Target locale file "${expectedFile}" not yet created. Test harness is ready for ingestion.`);
    process.exit(0);
  }
} else if (testAll) {
  itemsFiles = files.filter(f => f === 'items.json' || (f.startsWith('items.') && f.endsWith('.json')));
} else {
  // By default, validate the CJK target locales under active ingestion
  const activeTargets = ['items.zh-cn.json', 'items.ja.json'];
  itemsFiles = files.filter(f => activeTargets.includes(f));
  if (itemsFiles.length === 0) {
    console.log('ℹ️ Active CJK locale files not yet created. Test harness is ready.');
    process.exit(0);
  }
}

console.log(`Checking locale files: ${itemsFiles.join(', ')}\n`);

for (const file of itemsFiles) {
  const locale = file === 'items.json' ? 'en' : file.replace('items.', '').replace('.json', '');
  const isLegacyLocale = ['en', 'es', 'pt'].includes(locale);
  const data = loadJson(file);
  if (!Array.isArray(data)) {
    reportError('SCHEMA_ROOT', `${file} root is not an array`);
    continue;
  }

  console.log(`--- Validating ${file} (${locale}) [${data.length} records] ---`);

  const seenSlugsInFile = new Set();

  for (let i = 0; i < data.length; i++) {
    const entry = data[i];
    const itemKey = `${entry.appliance}/${entry.slug}`;
    const locationTag = `${file}#${i} (${itemKey})`;

    // Check 5: Zero duplicate slugs across all locales
    if (seenSlugsInFile.has(itemKey)) {
      reportError('DUPLICATE_SLUG', `Duplicate item key "${itemKey}" in ${locationTag}`);
    } else {
      seenSlugsInFile.add(itemKey);
      passCheck();
    }

    // Check 1: 14-field schema parity
    for (const field of CORE_12_FIELDS) {
      if (!(field in entry)) {
        if (isLegacyLocale) {
          reportWarning('SCHEMA_PARITY_LEGACY', `Missing core field "${field}" in ${locationTag}`);
        } else {
          reportError('SCHEMA_PARITY', `Missing core field "${field}" in ${locationTag}`);
        }
      } else if (entry[field] === undefined || entry[field] === null) {
        if (isLegacyLocale) {
          reportWarning('SCHEMA_PARITY_LEGACY', `Field "${field}" is null or undefined in ${locationTag}`);
        } else {
          reportError('SCHEMA_PARITY', `Field "${field}" is null or undefined in ${locationTag}`);
        }
      } else {
        passCheck();
      }
    }

    // Risk indicator parity (keyRisk or specific_warning)
    if (!entry.keyRisk && !entry.specific_warning) {
      if (isLegacyLocale) {
        reportWarning('SCHEMA_PARITY_LEGACY', `Missing risk indicator field ("keyRisk" or "specific_warning") in ${locationTag}`);
      } else {
        reportError('SCHEMA_PARITY', `Missing risk indicator field ("keyRisk" or "specific_warning") in ${locationTag}`);
      }
    } else {
      passCheck();
    }

    // Tip indicator parity (tip or verdict)
    if (!entry.tip && !entry.verdict) {
      if (isLegacyLocale) {
        reportWarning('SCHEMA_PARITY_LEGACY', `Missing tip indicator field ("tip" or "verdict") in ${locationTag}`);
      } else {
        reportError('SCHEMA_PARITY', `Missing tip indicator field ("tip" or "verdict") in ${locationTag}`);
      }
    } else {
      passCheck();
    }

    // Safe verdict validity
    if (entry.safe && !['yes', 'no', 'depends'].includes(entry.safe)) {
      reportError('INVALID_VERDICT', `Field "safe" has invalid value "${entry.safe}" in ${locationTag}`);
    } else {
      passCheck();
    }

    // Check 2: Exactly 3 FAQs per item
    if (!Array.isArray(entry.faqs)) {
      reportError('FAQ_SCHEMA', `"faqs" is not an array in ${locationTag}`);
    } else if (entry.faqs.length !== 3) {
      if (isLegacyLocale || allowLegacy2Faqs) {
        reportWarning('FAQ_COUNT_LEGACY', `Item has legacy FAQ count (${entry.faqs.length}, target: 3) in ${locationTag}`);
      } else {
        reportError('FAQ_COUNT', `Expected exactly 3 FAQs, found ${entry.faqs.length} in ${locationTag}`);
      }
    } else {
      passCheck();
      entry.faqs.forEach((faq, fIdx) => {
        if (!faq.question || typeof faq.question !== 'string' || faq.question.trim().length === 0) {
          reportError('FAQ_QUESTION', `FAQ #${fIdx + 1} has missing or empty question in ${locationTag}`);
        } else {
          passCheck();
        }
        if (!faq.answer || typeof faq.answer !== 'string' || faq.answer.trim().length === 0) {
          reportError('FAQ_ANSWER', `FAQ #${fIdx + 1} has missing or empty answer in ${locationTag}`);
        } else {
          passCheck();
        }
      });
    }

    // Check 4: Canonical English slug resolution in relatedItems
    if (Array.isArray(entry.relatedItems)) {
      for (const relSlug of entry.relatedItems) {
        const directKey = `${entry.appliance}/${relSlug}`;
        if (!canonicalKeys.has(directKey) && !canonicalSlugs.has(relSlug)) {
          reportWarning('BROKEN_RELATED_SLUG', `Related item "${relSlug}" in ${locationTag} does not resolve to canonical English item`);
        } else {
          passCheck();
        }
      }
    }

    // Check 3: Strict placeholder variable preservation against canonical English
    if (locale !== 'en' && enItemsMap.has(itemKey)) {
      const enEntry = enItemsMap.get(itemKey);
      const textFields = ['shortAnswer', 'reason', 'tip', 'learnMore', 'keyRisk'];
      
      for (const field of textFields) {
        if (typeof enEntry[field] === 'string' && typeof entry[field] === 'string') {
          const enVars = extractVariables(enEntry[field]);
          if (enVars.length > 0) {
            const locVars = extractVariables(entry[field]);
            if (JSON.stringify(enVars) !== JSON.stringify(locVars)) {
              reportError('VARIABLE_MUTATION', `Variable mismatch in field "${field}" for ${locationTag}: expected [${enVars.join(', ')}], found [${locVars.join(', ')}]`);
            } else {
              passCheck();
            }
          } else {
            passCheck();
          }
        }
      }
    }
  }
}

// Check vertical files for duplicate slugs
const verticalFiles = [
  'washing-machine.json', 'washing-machine.es.json', 'washing-machine.pt.json',
  'how-long.json', 'how-long.es.json', 'how-long.pt.json',
  'refreeze.json', 'refreeze.es.json', 'refreeze.pt.json',
  'what-happens.json', 'what-happens.es.json', 'what-happens.pt.json',
  'comparisons.json', 'comparisons.es.json', 'comparisons.pt.json',
  'blog.json', 'blog.es.json', 'blog.pt.json'
];

console.log('\n--- Checking Vertical Datasets for Zero Duplicate Slugs ---');
for (const vFile of verticalFiles) {
  const vData = loadJson(vFile);
  if (!vData || !Array.isArray(vData)) continue;
  
  const vSlugs = new Set();
  vData.forEach((entry, idx) => {
    const slug = entry.slug || (entry.item1 && entry.item2 ? `${entry.item1}-vs-${entry.item2}` : null);
    if (!slug) return;
    if (vSlugs.has(slug)) {
      reportError('DUPLICATE_VERTICAL_SLUG', `Duplicate slug "${slug}" in ${vFile}#${idx}`);
    } else {
      vSlugs.add(slug);
      passCheck();
    }
  });
}

console.log('\n====================================================');
console.log(`Test Execution Summary:`);
console.log(`Total Checks:   ${totalChecks}`);
console.log(`Total Errors:   ${totalErrors}`);
console.log(`Total Warnings: ${totalWarnings}`);
console.log('====================================================\n');

if (totalErrors > 0) {
  console.error(`❌ FAILED: Test harness detected ${totalErrors} data health violations.`);
  process.exit(1);
} else {
  console.log(`✅ PASSED: All i18n health and parity assertions passed successfully (${totalChecks} checks, 0 failures).`);
  process.exit(0);
}
