import fs from 'fs';
import path from 'path';
import itemsData from '../data/items.json';
import itemsEs from '../data/items.es.json';
import itemsPt from '../data/items.pt.json';
import howLongData from '../data/how-long.json';
import refreezeData from '../data/refreeze.json';
import washingData from '../data/washing-machine.json';
import washingEs from '../data/washing-machine.es.json';
import washingPt from '../data/washing-machine.pt.json';
import whatHappensData from '../data/what-happens.json';

export interface MaterialCategory {
  id: string;
  displayName: string;
  description: string;
  rawMaterials: string[];
  styling: string; // CSS theme classes
  relatedIds: string[];
}

export const CATEGORY_LOCALIZATIONS: Record<string, {
  es: { displayName: string; description: string };
  pt: { displayName: string; description: string };
}> = {
  metal: {
    es: {
      displayName: "Utensilios y Menaje de Metal",
      description: "Incluye acero inoxidable, hierro fundido, cobre, aluminio y adornos metálicos. Los metales son duraderos pero conllevan alto riesgo de chispas en el microondas."
    },
    pt: {
      displayName: "Utensílios e Panelas de Metal",
      description: "Inclui aço inoxidável, ferro fundido, cobre, alumínio e detalhes metálicos. Metais são resistentes mas apresentam alto risco de faíscas no micro-ondas."
    }
  },
  plastic: {
    es: {
      displayName: "Polímeros y Plásticos",
      description: "Incluye plásticos poliméricos y poliestireno expandido (porexpan). La sensibilidad térmica hace que el derretimiento y la liberación de sustancias químicas sean la principal preocupación."
    },
    pt: {
      displayName: "Polímeros e Plásticos",
      description: "Inclui plásticos poliméricos e poliestireno expandido (isopor). A sensibilidade ao calor torna o derretimento e a lixiviação química as principais preocupações."
    }
  },
  "glass-ceramic": {
    es: {
      displayName: "Vidrio y Cerámica",
      description: "Incluye vidrio sodocálcico, vidrio de borosilicato, cerámica, porcelana y cristal. Altamente resistentes al calor pero susceptibles al choque térmico."
    },
    pt: {
      displayName: "Vidro e Cerâmica",
      description: "Inclui vidro sodo-cálcico, vidro borossilicato, cerâmica, porcelana e cristal. Altamente resistentes ao calor mas suscetíveis ao choque térmico."
    }
  },
  fabric: {
    es: {
      displayName: "Telas y Textiles",
      description: "Incluye mezclas de poliéster, algodón, lana y seda. Habitualmente aptos para lavar a máquina pero vulnerables a encogerse con el calor de la secadora."
    },
    pt: {
      displayName: "Tecidos e Têxteis",
      description: "Inclui misturas de poliéster, algodão, lã e seda. Geralmente laváveis em máquina mas vulneráveis ao encolhimento no calor da secadora."
    }
  },
  footwear: {
    es: {
      displayName: "Calzado y Zapatos",
      description: "Incluye materiales de calzado y zapatillas. Propensos a la degradación del pegamento y deformación estructural bajo calor intenso."
    },
    pt: {
      displayName: "Calçados e Tênis",
      description: "Inclui materiais de calçados e tênis. Suscetíveis à degradação da cola e deformação estrutural sob altas temperaturas de lavagem e secagem."
    }
  },
  silicone: {
    es: {
      displayName: "Silicona Alimentaria",
      description: "Incluye moldes y utensilios de silicona de grado alimentario. Destacan por su excelente estabilidad térmica en congeladores, hornos y lavavajillas."
    },
    pt: {
      displayName: "Silicone de Grau Alimentício",
      description: "Inclui formas e utensílios de silicone culinário. Conhecidos por sua excelente estabilidade térmica em freezers, fornos e lava-louças."
    }
  },
  "wood-paper": {
    es: {
      displayName: "Productos de Madera y Papel",
      description: "Incluye bambú, madera natural, platos de papel y cartón. Susceptibles a la absorción de humedad, deformaciones, grietas y alto riesgo de incendio."
    },
    pt: {
      displayName: "Produtos de Madeira e Papel",
      description: "Inclui bambu, madeira natural, pratos de papel e papelão. Suscetíveis à absorção de umidade, deformação, rachaduras e alto risco de fogo."
    }
  },
  "appliance-components": {
    es: {
      displayName: "Componentes de Electrodomésticos",
      description: "Incluye piezas y accesorios verificados de electrodomésticos. Requieren comprobación cuidadosa ya que los ciclos pueden degradar juntas y capas antiadherentes."
    },
    pt: {
      displayName: "Componentes de Eletrodomésticos",
      description: "Inclui peças e elementos verificados de máquinas e aparelhos. Exigem atenção pois ciclos podem degradar vedações e revestimentos antiaderentes."
    }
  }
};

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

export function getCategoryById(id: string, lang: 'en' | 'es' | 'pt' = 'en'): MaterialCategory | undefined {
  const cat = CATEGORIES.find(c => c.id === id);
  if (!cat) return undefined;
  if (lang === 'en') return cat;
  const loc = CATEGORY_LOCALIZATIONS[id]?.[lang];
  return loc ? { ...cat, displayName: loc.displayName, description: loc.description } : cat;
}

export function getCategories(lang: 'en' | 'es' | 'pt' = 'en'): MaterialCategory[] {
  if (lang === 'en') return CATEGORIES;
  return CATEGORIES.map(cat => {
    const loc = CATEGORY_LOCALIZATIONS[cat.id]?.[lang];
    return loc ? { ...cat, displayName: loc.displayName, description: loc.description } : cat;
  });
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

export function getCategoryItemsAndStats(categoryId: string, lang: 'en' | 'es' | 'pt' = 'en') {
  const baseCat = getCategoryById(categoryId, lang);
  if (!baseCat) return null;

  const rawMaterials = baseCat.rawMaterials;
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

  const currentItems = lang === 'es' ? itemsEs : lang === 'pt' ? itemsPt : itemsData;
  const currentWashing = lang === 'es' ? washingEs : lang === 'pt' ? washingPt : washingData;
  const prefix = lang === 'en' ? '' : `/${lang}`;

  // Populate from items.json
  itemsData.forEach(item => {
    if (item.material && rawMaterials.includes(item.material)) {
      const locItem = currentItems.find(i => i.appliance === item.appliance && i.slug === item.slug) || item;
      const entry = getOrInitItem(locItem.item, locItem.keyRisk);
      entry.appliances[item.appliance] = {
        safe: item.safe,
        url: `${prefix}/${item.appliance}/${item.slug}`
      };
    }
  });

  // Populate from washing-machine.json
  washingData.forEach(item => {
    if (item.material && rawMaterials.includes(item.material)) {
      const locItem = currentWashing.find(i => i.slug === item.slug) || item;
      const entry = getOrInitItem(locItem.item, locItem.keyRisk);
      entry.appliances["washing-machine"] = {
        safe: item.safe,
        url: `${prefix}/washing-machine/${item.slug}`
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

  currentItems.forEach(i => {
    const orig = itemsData.find(o => o.appliance === i.appliance && o.slug === i.slug);
    if (orig?.material && rawMaterials.includes(orig.material)) addRisk(i.keyRisk);
  });
  currentWashing.forEach(i => {
    const orig = washingData.find(o => o.slug === i.slug);
    if (orig?.material && rawMaterials.includes(orig.material)) addRisk(i.keyRisk);
  });

  let mostCommonRisk = lang === 'es' ? "Ninguno" : lang === 'pt' ? "Nenhum" : "None";
  let maxCount = 0;
  for (const [risk, count] of Object.entries(riskCounts)) {
    if (count > maxCount) {
      maxCount = count;
      mostCommonRisk = risk;
    }
  }

  return {
    category: baseCat,
    totalItemsTested,
    safePercentage,
    mostCommonRisk,
    items: itemsInCat
  };
}
