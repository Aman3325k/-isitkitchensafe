import fs from 'fs';
import path from 'path';
import itemsData from '../data/items.json';
import howLongData from '../data/how-long.json';
import refreezeData from '../data/refreeze.json';
import washingData from '../data/washing-machine.json';
import whatHappensData from '../data/what-happens.json';

export interface MaterialCategory {
  id: string;
  displayName: string;
  description: string;
  rawMaterials: string[];
  styling: string; // CSS theme classes
  relatedIds: string[];
}

export const CATEGORIES: MaterialCategory[] = [
  {
    id: "metal",
    displayName: "Metal Cookware & Utensils",
    description: "Includes stainless steel, cast iron, copper, aluminum, and metallic trims. Metals are durable but carry high electrical arcing risks in microwaves.",
    rawMaterials: [
      "Stainless Steel / Alloy Metal",
      "Insulated Stainless Steel",
      "Precious Metal / Trim",
      "Cast Iron",
      "Copper Metal",
      "Aluminum Metal"
    ],
    styling: "bg-signature-coral text-white border-signature-coral",
    relatedIds: ["glass-ceramic", "plastic", "silicone"]
  },
  {
    id: "plastic",
    displayName: "Polymers & Plastics",
    description: "Includes polymer plastics and expanded polystyrene (styrofoam). Heat sensitivity makes melting and chemical leaching a primary concern.",
    rawMaterials: [
      "Polymer Plastic",
      "Expanded Polystyrene (EPS)"
    ],
    styling: "bg-signature-forest text-white border-signature-forest",
    relatedIds: ["silicone", "metal", "wood-paper"]
  },
  {
    id: "glass-ceramic",
    displayName: "Glass & Ceramics",
    description: "Includes soda-lime glass, borosilicate glass, ceramic, porcelain, and crystal. Highly heat-resistant but susceptible to thermal shock.",
    rawMaterials: [
      "Clay-Based Ceramic / Stoneware",
      "Soda-Lime Glass",
      "Tempered Borosilicate Glass",
      "Glazed Porcelain / China",
      "Lead Crystal Glass"
    ],
    styling: "bg-signature-peach text-ink border-signature-peach/40",
    relatedIds: ["metal", "silicone", "wood-paper"]
  },
  {
    id: "fabric",
    displayName: "Fabrics & Textiles",
    description: "Includes polyester blends, cotton, wool, and silk. Typically machine-washable but vulnerable to shrinkage and dryer heat.",
    rawMaterials: [
      "Synthetic Polyester Blend",
      "Animal-Fiber Wool",
      "Natural Cotton Fiber",
      "Natural Silk Fiber"
    ],
    styling: "bg-signature-mint text-ink border-signature-mint/40",
    relatedIds: ["footwear", "appliance-components"]
  },
  {
    id: "footwear",
    displayName: "Footwear & Shoes",
    description: "Includes shoe materials and sneakers. Prone to glue degradation and structural warping under high temperature washing and drying.",
    rawMaterials: [
      "Synthetic and Natural Footwear Materials"
    ],
    styling: "bg-signature-mustard text-ink border-signature-mustard/40",
    relatedIds: ["fabric", "appliance-components"]
  },
  {
    id: "silicone",
    displayName: "Food-Grade Silicone",
    description: "Includes food-grade silicone molds and utensils. Known for excellent thermal stability in freezers, ovens, and dishwashers.",
    rawMaterials: [
      "Food-Grade Silicone"
    ],
    styling: "bg-signature-yellow text-ink border-signature-yellow/40",
    relatedIds: ["plastic", "glass-ceramic", "metal"]
  },
  {
    id: "wood-paper",
    displayName: "Wood & Paper Products",
    description: "Includes bamboo, natural wood, paper plates, and cardboard. Susceptible to moisture absorption, warping, cracking, and high fire risks.",
    rawMaterials: [
      "Cellulose Paper / Cardboard",
      "Natural Wood / Bamboo"
    ],
    styling: "bg-signature-cream text-ink border-signature-cream/40",
    relatedIds: ["glass-ceramic", "plastic", "appliance-components"]
  },
  {
    id: "appliance-components",
    displayName: "Appliance Components",
    description: "Includes verified kitchen appliance elements and machine parts. Requires careful checking as cycles can degrade seals and non-stick coatings.",
    rawMaterials: [
      "Kitchen Appliance Component"
    ],
    styling: "bg-surface-dark text-white border-surface-dark",
    relatedIds: ["wood-paper", "fabric", "footwear"]
  }
];

const MATERIAL_TO_CATEGORY: Record<string, string> = {};
CATEGORIES.forEach(c => {
  c.rawMaterials.forEach(m => {
    MATERIAL_TO_CATEGORY[m] = c.id;
  });
});

export function getCategoryForMaterial(material: string | undefined): string | null {
  if (!material) return null;
  const trimmed = material.trim();
  return MATERIAL_TO_CATEGORY[trimmed] || null;
}

export function getCategoryById(id: string): MaterialCategory | undefined {
  return CATEGORIES.find(c => c.id === id);
}

// Function to resolve the true cryptographic last modified date of data sources
export function getLatestDataModifiedTime(): Date {
  const files = [
    'src/data/items.json',
    'src/data/how-long.json',
    'src/data/refreeze.json',
    'src/data/washing-machine.json',
    'src/data/what-happens.json'
  ];
  let maxTime = 0;
  files.forEach(file => {
    try {
      const fullPath = path.resolve(process.cwd(), file);
      if (fs.existsSync(fullPath)) {
        const stats = fs.statSync(fullPath);
        if (stats.mtimeMs > maxTime) {
          maxTime = stats.mtimeMs;
        }
      }
    } catch (e) {
      // Ignore reading errors, fallback to default
    }
  });
  return maxTime > 0 ? new Date(maxTime) : new Date('2026-06-13T12:00:00Z');
}

export interface AggregatedItem {
  name: string;
  keyRisk: string;
  appliances: Record<string, { safe: string; url: string }>;
}

export function getCategoryItemsAndStats(categoryId: string) {
  const cat = getCategoryById(categoryId);
  if (!cat) return null;

  const rawMaterials = cat.rawMaterials;

  // Gather unique items in this category across datasets
  const uniqueItemsMap = new Map<string, AggregatedItem>();

  const getOrInitItem = (name: string, keyRisk: string | undefined) => {
    const key = name.trim().toLowerCase();
    if (!uniqueItemsMap.has(key)) {
      uniqueItemsMap.set(key, {
        name: name.trim(),
        keyRisk: keyRisk || "",
        appliances: {}
      });
    }
    const existing = uniqueItemsMap.get(key)!;
    if (!existing.keyRisk && keyRisk) {
      existing.keyRisk = keyRisk;
    }
    return existing;
  };

  // Populate from items.json
  itemsData.forEach(item => {
    if (item.material && rawMaterials.includes(item.material)) {
      const entry = getOrInitItem(item.item, item.keyRisk);
      entry.appliances[item.appliance] = {
        safe: item.safe,
        url: `/${item.appliance}/${item.slug}`
      };
    }
  });

  // Populate from washing-machine.json
  washingData.forEach(item => {
    if (item.material && rawMaterials.includes(item.material)) {
      const entry = getOrInitItem(item.item, item.keyRisk);
      entry.appliances["washing-machine"] = {
        safe: item.safe,
        url: `/washing-machine/${item.slug}`
      };
    }
  });

  const itemsInCat = Array.from(uniqueItemsMap.values());
  const totalItemsTested = itemsInCat.length;

  // Calculate percentages based on category type
  let safePercentage = 0;
  let isWashingBased = categoryId === 'fabric' || categoryId === 'footwear';

  if (isWashingBased) {
    const washingItems = washingData.filter(i => i.material && rawMaterials.includes(i.material));
    const totalWashing = washingItems.length;
    const safeWashing = washingItems.filter(i => i.safe === "yes" || i.safe === "depends").length; // Safe to put in machine (includes gentle cycles)
    safePercentage = totalWashing > 0 ? Math.round((safeWashing / totalWashing) * 100) : 0;
  } else {
    const dishwasherItems = itemsData.filter(i => i.material && rawMaterials.includes(i.material) && i.appliance === "dishwasher");
    const totalDw = dishwasherItems.length;
    const safeDw = dishwasherItems.filter(i => i.safe === "yes").length;
    safePercentage = totalDw > 0 ? Math.round((safeDw / totalDw) * 100) : 0;
  }

  // Calculate risk counts
  const riskCounts: Record<string, number> = {};
  const addRisk = (risk: string | undefined) => {
    if (!risk) return;
    riskCounts[risk] = (riskCounts[risk] || 0) + 1;
  };

  itemsData.forEach(i => { if (i.material && rawMaterials.includes(i.material)) addRisk(i.keyRisk); });
  howLongData.forEach(i => { if (i.material && rawMaterials.includes(i.material)) addRisk(i.keyRisk); });
  refreezeData.forEach(i => { if (i.material && rawMaterials.includes(i.material)) addRisk(i.keyRisk); });
  washingData.forEach(i => { if (i.material && rawMaterials.includes(i.material)) addRisk(i.keyRisk); });
  whatHappensData.forEach(i => { if (i.material && rawMaterials.includes(i.material)) addRisk(i.keyRisk); });

  let mostCommonRisk = "None";
  let maxCount = 0;
  for (const [risk, count] of Object.entries(riskCounts)) {
    if (count > maxCount) {
      maxCount = count;
      mostCommonRisk = risk;
    }
  }

  return {
    category: cat,
    totalItemsTested,
    safePercentage,
    mostCommonRisk,
    items: itemsInCat
  };
}
