import fs from 'fs';
import path from 'path';
import itemsData from '../data/items.json';
import itemsEs from '../data/items.es.json';
import itemsPt from '../data/items.pt.json';
import itemsZh from '../data/items.zh-cn.json';
import itemsJa from '../data/items.ja.json';
import washingData from '../data/washing-machine.json';
import washingEs from '../data/washing-machine.es.json';
import washingPt from '../data/washing-machine.pt.json';
import type { SupportedLanguage } from '../i18n/ui';

export interface MaterialCategory {
  id: string;
  displayName: string;
  description: string;
  rawMaterials: string[];
  styling: string; // CSS theme classes
  relatedIds: string[];
  technicalSpecs?: {
    materialThermal?: {
      property?: string;
      threshold: string;
      details: string;
    };
    safetyStandard?: {
      organization?: string;
      standard: string;
      citation: string;
    };
    applianceSpecs?: {
      parameter: string;
      guideline: string;
    };
  };
}

export const CATEGORY_LOCALIZATIONS: Record<string, Partial<Record<SupportedLanguage, {
  displayName: string;
  description: string;
}>>> = {
  metal: {
    es: {
      displayName: "Utensilios y Menaje de Metal",
      description: "Incluye acero inoxidable, hierro fundido, cobre, aluminio y adornos metálicos. Los metales son duraderos pero conllevan alto riesgo de chispas en el microondas."
    },
    pt: {
      displayName: "Utensílios e Panelas de Metal",
      description: "Inclui aço inoxidável, ferro fundido, cobre, alumínio e detalhes metálicos. Metais são resistentes mas apresentam alto risco de faíscas no micro-ondas."
    },
    'zh-cn': {
      displayName: "金属锅具与器皿",
      description: "涵盖不锈钢、铸铁、纯铜、铝合金及金属饰边。金属坚固耐用，但在微波炉中存在极高的打火和起火风险。"
    },
    ja: {
      displayName: "金属製調理器具・カトラリー",
      description: "ステンレス、鋳鉄（スキレット）、銅、アルミニウム、金属装飾付き食器を含みます。耐久性に優れますが電子レンジでの放電・火花リスクがあります。"
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
    },
    'zh-cn': {
      displayName: "聚合物与塑料制品",
      description: "涵盖各类食品塑料与发泡聚苯乙烯（泡沫塑料/保丽龙）。由于热敏感性，高温熔化与有害化学物质析出是主要安全隐患。"
    },
    ja: {
      displayName: "プラスチック・ポリマー製品",
      description: "ポリマー樹脂プラスチックおよび発泡スチロールを含みます。耐熱温度を超えた場合の溶融や有害物質の溶出が主な懸念点です。"
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
    },
    'zh-cn': {
      displayName: "玻璃与陶瓷制品",
      description: "涵盖钠钙玻璃、高硼硅耐热玻璃、陶瓷、骨瓷及水晶玻璃。耐高温性能良好，但极易因骤冷骤热发生热冲击破裂。"
    },
    ja: {
      displayName: "ガラス・陶磁器製品",
      description: "ソーダガラス、耐熱ホウケイ酸ガラス、陶器、磁器、クリスタルを含みます。耐熱性は高いものの急激な温度変化によるヒートショック（熱衝撃破損）に注意が必要です。"
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
    },
    'zh-cn': {
      displayName: "织物与纺织品",
      description: "涵盖聚酯纤维混纺、纯棉、羊毛及真丝。通常可机洗，但容易在烘干机的高温翻滚中缩水或损坏面料结构。"
    },
    ja: {
      displayName: "布製品・テキスタイル",
      description: "ポリエステル混紡、綿（コットン）、ウール（羊毛）、シルクを含みます。洗濯機での水洗いは可能ですが、乾燥機の高熱による縮みや傷みに注意が必要です。"
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
    },
    'zh-cn': {
      displayName: "鞋类与运动鞋",
      description: "涵盖鞋履材质与各类运动鞋。在洗衣机剧烈摔打或烘干机高温环境下，鞋底胶水极易开胶，鞋身易发生结构性变形。"
    },
    ja: {
      displayName: "靴・スニーカー",
      description: "シューズ素材およびスニーカーを含みます。高温洗浄や乾燥機の熱風により、ソールの接着剤劣化やアッパーの熱変形が生じやすいカテゴリです。"
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
    },
    'zh-cn': {
      displayName: "食品级硅胶制品",
      description: "涵盖食品级烘焙模具与硅胶厨具。具有优异的高低温热稳定性，可安全适用于冷冻室、烤箱和洗碗机。"
    },
    ja: {
      displayName: "食品衛生法適合シリコン",
      description: "食品グレードのシリコン型やキッチンツールを含みます。優れた耐熱・耐冷安定性を備え、冷凍庫、オーブン、食洗機で安心して使用できます。"
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
    },
    'zh-cn': {
      displayName: "木质与纸制品",
      description: "涵盖天然竹木、原木砧板、纸盘及纸板。极易吸水膨胀、变形开裂，且在微波炉和烤箱中存在极高火灾风险。"
    },
    ja: {
      displayName: "木製品・ペーパー製品",
      description: "竹、天然木、紙皿、ダンボール製品を含みます。吸水による変形やひび割れが起きやすく、電子レンジやオーブンでは発火リスクが極めて高い素材です。"
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
    },
    'zh-cn': {
      displayName: "电器零部件与配件",
      description: "涵盖经验证的厨房电器配件与可拆卸部件。清洗时需仔细确认，某些程序可能会侵蚀密封胶圈或破坏不粘涂层。"
    },
    ja: {
      displayName: "家電部品・パーツ",
      description: "検証済みのキッチン家電アクセサリーや取り外し可能部品を含みます。洗浄コースによりパッキンの劣化やフッ素加工の剥がれを招くため確認が必要です。"
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

export function getCategoryById(id: string, lang: SupportedLanguage = 'en'): MaterialCategory | undefined {
  const cat = CATEGORIES.find(c => c.id === id);
  if (!cat) return undefined;
  if (lang === 'en') return cat;
  const loc = CATEGORY_LOCALIZATIONS[id]?.[lang];
  return loc ? { ...cat, displayName: loc.displayName, description: loc.description } : cat;
}

export function getCategories(lang: SupportedLanguage = 'en'): MaterialCategory[] {
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

export function getCategoryItemsAndStats(categoryId: string, lang: SupportedLanguage = 'en') {
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

  const currentItems = lang === 'es' ? itemsEs : lang === 'pt' ? itemsPt : lang === 'zh-cn' ? itemsZh : lang === 'ja' ? itemsJa : itemsData;
  const currentWashing = lang === 'es' ? washingEs : lang === 'pt' ? washingPt : washingData;
  const prefix = lang === 'en' ? '' : `/${lang}`;
  const washingPrefix = (lang === 'es' || lang === 'pt') ? `/${lang}` : '';

  // Populate from items.json
  itemsData.forEach(item => {
    if (item.material && rawMaterials.includes(item.material)) {
      const locItem = currentItems.find(i => i.appliance === item.appliance && i.slug === item.slug) || item;
      const entry = getOrInitItem(locItem.item, locItem.keyRisk);
      entry.appliances[item.appliance] = {
        safe: item.safe,
        url: `${prefix}/${item.appliance}/${item.slug}/`
      };
    }
  });

  // Populate from washing-machine.json
  washingData.forEach(item => {
    if (item.material && rawMaterials.includes(item.material)) {
      const locItem = (lang === 'es' || lang === 'pt') 
        ? (currentWashing.find(i => i.slug === item.slug) || item) 
        : item;
      const entry = getOrInitItem(locItem.item, locItem.keyRisk);
      entry.appliances["washing-machine"] = {
        safe: item.safe,
        url: `${washingPrefix}/washing-machine/${item.slug}/`
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
