import itemsData from '../data/items.json';
import howLongData from '../data/how-long.json';
import refreezeData from '../data/refreeze.json';
import washingData from '../data/washing-machine.json';
import whatHappensData from '../data/what-happens.json';
import comparisonsData from '../data/comparisons.json';

// Normalize item names to find matches (e.g. Cooked Chicken -> chicken)
export function normalizeItemName(name) {
  return name.toLowerCase()
    .replace(/\b(raw|cooked|fresh|cut|frozen|whole|opened|unopened|ripe|unripe|insulated)\b/g, '')
    .replace(/\s+/g, ' ')
    .trim();
}

// Extract base slug for cross-referencing
export function getBaseSlug(slug) {
  return slug
    .toLowerCase()
    .replace(/-(in|on|if|vs)-.*$/, '')
    .replace(/-(fridge|freezer|counter|pantry|dishwasher|microwave|oven|dryer|airfryer|refrigerator)$/, '');
}

// Find all guides matching an item name and slug
export function resolveAllGuidesForItem(item, slug) {
  const norm = normalizeItemName(item);
  const baseSlug = getBaseSlug(slug);
  
  const results = {
    applianceGuides: [],
    howLongGuides: [],
    refreezeGuides: [],
    washingGuides: [],
    whatHappensGuides: [],
    comparisonGuides: []
  };

  // 1. Appliance Guides (items.json)
  itemsData.forEach(i => {
    const iNorm = normalizeItemName(i.item);
    if (iNorm === norm || i.slug === slug || i.slug.startsWith(baseSlug) || baseSlug.startsWith(i.slug)) {
      results.applianceGuides.push({
        url: `/${i.appliance}/${i.slug}`,
        title: `Can You Put ${i.item} in the ${i.appliance === 'airfryer' ? 'Air Fryer' : i.appliance.charAt(0).toUpperCase() + i.appliance.slice(1)}?`,
        item: i.item,
        appliance: i.appliance,
        safe: i.safe,
        shortAnswer: i.shortAnswer
      });
    }
  });

  // 2. How Long Guides
  howLongData.forEach(h => {
    const hNorm = normalizeItemName(h.item);
    if (hNorm === norm || h.slug.startsWith(baseSlug) || baseSlug.startsWith(h.slug.split('-in-')[0])) {
      results.howLongGuides.push({
        url: `/how-long/${h.slug}`,
        title: `How Long Does ${h.item} Last in the ${h.location === 'fridge' ? 'Refrigerator' : h.location === 'freezer' ? 'Freezer' : 'Countertop'}?`,
        item: h.item,
        location: h.location,
        duration: h.duration
      });
    }
  });

  // 3. Refreeze Guides
  refreezeData.forEach(r => {
    const rNorm = normalizeItemName(r.item);
    if (rNorm === norm || r.slug.startsWith(baseSlug) || baseSlug.startsWith(r.slug)) {
      results.refreezeGuides.push({
        url: `/refreeze/${r.slug}`,
        title: `Can You Refreeze ${r.item}?`,
        item: r.item,
        safe: r.safe
      });
    }
  });

  // 4. Washing Guides
  washingData.forEach(w => {
    const wNorm = normalizeItemName(w.item);
    if (wNorm === norm || w.slug.startsWith(baseSlug) || baseSlug.startsWith(w.slug)) {
      results.washingGuides.push({
        url: `/washing-machine/${w.slug}`,
        title: `Can You Put ${w.item} in the Washing Machine?`,
        item: w.item,
        safe: w.safe
      });
    }
  });

  // 5. What Happens Guides
  whatHappensData.forEach(wh => {
    const whNorm = normalizeItemName(wh.item);
    if (whNorm.includes(norm) || wh.slug.includes(baseSlug) || norm.includes(whNorm)) {
      const parsed = parseScenario(wh.slug);
      results.whatHappensGuides.push({
        url: `/what-happens/${wh.slug}`,
        title: `What Happens If You ${wh.item}?`,
        item: wh.item,
        appliance: parsed.appliance,
        dangerLevel: wh.dangerLevel
      });
    }
  });

  // 6. Comparisons
  comparisonsData.forEach(c => {
    if (c.item1.toLowerCase().includes(norm) || c.item2.toLowerCase().includes(norm) || c.slug.includes(baseSlug)) {
      results.comparisonGuides.push({
        url: `/compare/${c.slug}`,
        title: `${c.item1} vs ${c.item2}: Which Is Better?`,
        item1: c.item1,
        item2: c.item2
      });
    }
  });

  return results;
}

// Helper to parse slug into item and appliance
function parseScenario(slug) {
  let item = "";
  let appliance = "";
  
  if (slug.startsWith("microwave-")) {
    appliance = "Microwave";
    item = slug.replace("microwave-", "").replace(/-/g, " ");
  } else if (slug.startsWith("put-") && slug.includes("-in-dishwasher")) {
    appliance = "Dishwasher";
    item = slug.replace("put-", "").replace("-in-dishwasher", "").replace(/-/g, " ");
  } else if (slug.endsWith("-in-dishwasher")) {
    appliance = "Dishwasher";
    item = slug.replace("-in-dishwasher", "").replace(/-/g, " ");
  } else if (slug.startsWith("run-dishwasher-")) {
    appliance = "Dishwasher";
    item = slug.replace("run-dishwasher-", "").replace(/-/g, " ");
  } else if (slug.startsWith("refreeze-")) {
    appliance = "Freezer";
    item = slug.replace("refreeze-", "").replace(/-/g, " ");
  } else if (slug.startsWith("freeze-")) {
    appliance = "Freezer";
    item = slug.replace("freeze-", "").replace(/-/g, " ");
  } else if (slug.startsWith("leave-freezer-")) {
    appliance = "Freezer";
    item = slug.replace("leave-freezer-", "").replace(/-/g, " ");
  } else if (slug.startsWith("put-") && slug.includes("-in-oven")) {
    appliance = "Oven";
    item = slug.replace("put-", "").replace("-in-oven", "").replace(/-/g, " ");
  } else if (slug.endsWith("-in-oven")) {
    appliance = "Oven";
    item = slug.replace("-in-oven", "").replace(/-/g, " ");
  } else if (slug.startsWith("leave-oven-")) {
    appliance = "Oven";
    item = slug.replace("leave-oven-", "").replace(/-/g, " ");
  } else if (slug.startsWith("use-") && slug.includes("-on-oven-bottom")) {
    appliance = "Oven";
    item = slug.replace("use-", "").replace("-on-oven-bottom", "").replace(/-/g, " ");
  } else if (slug.startsWith("leave-gas-stove-")) {
    appliance = "Stove";
    item = "Gas Stove";
  } else if (slug.startsWith("leave-electric-stove-")) {
    appliance = "Stove";
    item = "Electric Stove";
  } else if (slug.startsWith("boil-dry-")) {
    appliance = "Stove";
    item = slug.replace("boil-dry-", "").replace(/-/g, " ");
  } else if (slug.includes("-on-hot-stove") || slug.includes("-on-cold-counter")) {
    appliance = "Stove";
    item = slug.replace(/-/g, " ");
  } else if (slug.startsWith("mix-")) {
    appliance = "Kitchen";
    item = slug.replace("mix-", "").replace(/-/g, " ");
  } else if (slug.startsWith("eat-") || slug.startsWith("drink-")) {
    appliance = "Kitchen";
    item = slug.replace("eat-", "").replace("drink-", "").replace(/-/g, " ");
  } else if (slug.startsWith("leave-fridge-")) {
    appliance = "Refrigerator";
    item = slug.replace("leave-fridge-", "").replace(/-/g, " ");
  } else {
    appliance = "Kitchen";
    item = slug.replace(/-/g, " ");
  }

  // Capitalize first letters of item
  item = item.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
  return { item, appliance };
}

// Generate PAA questions & links dynamically
export function getPeopleAlsoAsk(item, slug, allGuides, relatedSlugs) {
  const paa = [];
  const addedUrls = new Set();
  
  const addQuestion = (q, url) => {
    if (paa.length >= 3) return;
    if (addedUrls.has(url)) return;
    const cleanQ = q.replace(/\?+/g, '?');
    paa.push({ question: cleanQ, url });
    addedUrls.add(url);
  };

  // 1. First, look for howLongGuides
  allGuides.howLongGuides.forEach(g => {
    const loc = g.location === 'fridge' ? 'refrigerator' : g.location === 'freezer' ? 'freezer' : 'countertop';
    addQuestion(`How long does ${g.item.toLowerCase()} last in the ${loc}?`, g.url);
  });

  // 2. Look for refreezeGuides
  allGuides.refreezeGuides.forEach(g => {
    addQuestion(`Can you refreeze ${g.item.toLowerCase()}?`, g.url);
  });

  // 3. Look for whatHappensGuides
  allGuides.whatHappensGuides.forEach(g => {
    // Clean up title
    let action = g.title.replace('What Happens: ', '').replace('What Happens If You ', '');
    action = action.replace(/\?+$/, '');
    action = action.charAt(0).toLowerCase() + action.slice(1);
    addQuestion(`What happens if you ${action}?`, g.url);
  });

  // 4. Look for washingGuides
  allGuides.washingGuides.forEach(g => {
    addQuestion(`Can you wash ${g.item.toLowerCase()} in the washing machine?`, g.url);
  });

  // 5. Look for applianceGuides
  allGuides.applianceGuides.forEach(g => {
    const app = g.appliance === 'airfryer' ? 'air fryer' : g.appliance;
    addQuestion(`Can you put ${g.item.toLowerCase()} in the ${app}?`, g.url);
  });

  // 6. Look for comparisons
  allGuides.comparisonGuides.forEach(g => {
    addQuestion(`Which is better: ${g.item1} or ${g.item2}?`, g.url);
  });

  // Backfill from relatedSlugs if needed
  if (paa.length < 3 && relatedSlugs) {
    for (const relSlug of relatedSlugs) {
      if (paa.length >= 3) break;
      
      const relItem = itemsData.find(i => i.slug === relSlug) || 
                      howLongData.find(h => h.slug === relSlug) || 
                      refreezeData.find(r => r.slug === relSlug) ||
                      washingData.find(w => w.slug === relSlug) ||
                      whatHappensData.find(wh => wh.slug === relSlug);
      
      if (relItem) {
        if (relItem.appliance) {
          const app = relItem.appliance === 'airfryer' ? 'air fryer' : relItem.appliance;
          addQuestion(`Can you put ${relItem.item.toLowerCase()} in the ${app}?`, `/${relItem.appliance}/${relItem.slug}`);
        } else if (relItem.location) {
          const loc = relItem.location === 'fridge' ? 'refrigerator' : relItem.location === 'freezer' ? 'freezer' : 'countertop';
          addQuestion(`How long does ${relItem.item.toLowerCase()} last in the ${loc}?`, `/how-long/${relItem.slug}`);
        } else if (relItem.dangerLevel) {
          const verbPhrase = relItem.item.toLowerCase();
          addQuestion(`What happens if you ${verbPhrase}?`, `/what-happens/${relItem.slug}`);
        } else if (relItem.safe !== undefined) {
          const isWashing = washingData.some(w => w.slug === relItem.slug);
          if (isWashing) {
            addQuestion(`Can you wash ${relItem.item.toLowerCase()} in the washing machine?`, `/washing-machine/${relItem.slug}`);
          } else {
            addQuestion(`Can you refreeze ${relItem.item.toLowerCase()}?`, `/refreeze/${relItem.slug}`);
          }
        }
      }
    }
  }

  // Hardcoded fallbacks if we still have fewer than 3
  if (paa.length < 3) {
    addQuestion("Is it safe to wash metal in the dishwasher?", "/dishwasher/metal");
    addQuestion("Can you microwave aluminum foil?", "/what-happens/microwave-aluminum-foil");
    addQuestion("How long does raw chicken last in the fridge?", "/how-long/chicken-in-fridge");
  }

  return paa.slice(0, 3);
}

// Generate related category lists for an item
export function getRelatedCategoriesForItem(item, slug, currentPath, allGuides) {
  const categories = [];
  const addedUrls = new Set();

  const addCategory = (name, url) => {
    // Skip if it's the current page we are on
    if (currentPath === url || currentPath.replace(/\/$/, '') === url.replace(/\/$/, '')) return;
    if (addedUrls.has(url)) return;
    categories.push({ name, url });
    addedUrls.add(url);
  };

  // Add other appliances from allGuides.applianceGuides
  allGuides.applianceGuides.forEach(g => {
    const formattedApp = g.appliance === 'airfryer' ? 'Air Fryer' : g.appliance.charAt(0).toUpperCase() + g.appliance.slice(1);
    addCategory(`${formattedApp} Safety Guide`, g.url);
  });

  // Add howLong
  if (allGuides.howLongGuides.length > 0) {
    addCategory('Shelf Life & Storage Guide', allGuides.howLongGuides[0].url);
  }

  // Add refreeze
  if (allGuides.refreezeGuides.length > 0) {
    addCategory('Refreezing Safety Guide', allGuides.refreezeGuides[0].url);
  }

  // Add washing
  if (allGuides.washingGuides.length > 0) {
    addCategory('Washing Machine Safety Guide', allGuides.washingGuides[0].url);
  }

  // Add whatHappens
  if (allGuides.whatHappensGuides.length > 0) {
    addCategory('Accident Prevention Guide', allGuides.whatHappensGuides[0].url);
  }

  return categories;
}

// Inject inline links to items from itemsData into blog text
export function injectInlineLinks(text, itemsToMatch, linksInjected, linkCountRef) {
  let modifiedText = text;
  
  for (const item of itemsToMatch) {
    if (linksInjected.has(item.url)) continue;
    
    // We match word boundaries, case-insensitive
    const escapedName = item.name.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
    const regex = new RegExp(`\\b(${escapedName})\\b`, 'i');
    
    if (regex.test(modifiedText)) {
      const alreadyHasHtml = modifiedText.includes('<a');
      if (alreadyHasHtml) {
        const match = modifiedText.match(regex);
        if (match) {
          const index = match.index;
          const before = modifiedText.substring(0, index);
          const openCount = (before.match(/<a\b/g) || []).length;
          const closeCount = (before.match(/<\/a>/g) || []).length;
          const insideTag = (before.match(/<[^>]*$/) !== null);
          
          // Only replace if we are not inside an active <a> element or another HTML tag
          if (openCount === closeCount && !insideTag) {
            modifiedText = before + `<a href="${item.url}" class="text-link hover:underline font-medium">${match[1]}</a>` + modifiedText.substring(index + match[0].length);
            linksInjected.add(item.url);
            linkCountRef.count++;
          }
        }
      } else {
        modifiedText = modifiedText.replace(regex, `<a href="${item.url}" class="text-link hover:underline font-medium">$1</a>`);
        linksInjected.add(item.url);
        linkCountRef.count++;
      }
    }
  }
  
  return modifiedText;
}
