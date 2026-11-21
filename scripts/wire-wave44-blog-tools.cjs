const fs = require('fs');
const path = require('path');

// 1. Update src/pages/blog/[slug].astro
const enBlogSlugPath = path.resolve('src/pages/blog/[slug].astro');
let enContent = fs.readFileSync(enBlogSlugPath, 'utf8');

const enKeyTarget = `  | 'cannedFoodBpa'
  | 'symbol';`;

const enKeyReplacement = `  | 'cannedFoodBpa'
  | 'woodenUtensilBiofilm'
  | 'charcoalGasGrillPah'
  | 'symbol';`;

const enMatchTarget = `} else if (/(canned-food|bpa-liner|can-opening)/.test(toolMatchSlug)) {
  recommendedToolKey = 'cannedFoodBpa';`;

const enMatchReplacement = `} else if (/(canned-food|bpa-liner|can-opening)/.test(toolMatchSlug)) {
  recommendedToolKey = 'cannedFoodBpa';
} else if (/(wooden-spoon|wooden-utensil|biofilm-dishwasher)/.test(toolMatchSlug)) {
  recommendedToolKey = 'woodenUtensilBiofilm';
} else if (/(charcoal-gas-grill|grill-pah|hca-carcinogen|bbq-carcinogen)/.test(toolMatchSlug)) {
  recommendedToolKey = 'charcoalGasGrillPah';
} else if (/(kitchen-sponge|sponge-bacterial|dish-cloth)/.test(toolMatchSlug)) {
  recommendedToolKey = 'cleaner';`;

const enCatalogTarget = `  cannedFoodBpa: {
    path: '/tools/canned-food-bpa-leaching-modeler/',
    icon: '🥫',
    title: 'Canned Food BPA & Epoxy Liner Hydrolysis Modeler',
    description: 'Model bisphenol A (BPA) and substitute (BPS, BPF) epoxy liner degradation, acidic food migration kinetics, and open-can electrochemical tin dissolution.',
    cta: 'Model Can Liner Safety'
  },`;

const enCatalogReplacement = `  cannedFoodBpa: {
    path: '/tools/canned-food-bpa-leaching-modeler/',
    icon: '🥫',
    title: 'Canned Food BPA & Epoxy Liner Hydrolysis Modeler',
    description: 'Model bisphenol A (BPA) and substitute (BPS, BPF) epoxy liner degradation, acidic food migration kinetics, and open-can electrochemical tin dissolution.',
    cta: 'Model Can Liner Safety'
  },
  woodenUtensilBiofilm: {
    path: '/tools/wooden-utensil-biofilm-modeler/',
    icon: '🪵',
    title: 'Wooden Utensil Biofilm & Dishwasher Delamination Modeler',
    description: 'Model capillary microbial absorption in hardwood pores, alkaline dishwasher lignin hydrolysis, and food-grade mineral oil saturation kinetics.',
    cta: 'Model Utensil Biofilm'
  },
  charcoalGasGrillPah: {
    path: '/tools/charcoal-gas-grill-pah-hca-modeler/',
    icon: '🥩',
    title: 'Charcoal & Gas Grill PAH & HCA Carcinogen Modeler',
    description: 'Model heterocyclic amine (HCA) muscle pyrolysis, fat drip polycyclic aromatic hydrocarbon (PAH) flare-up smoke, and antioxidant marinade reduction.',
    cta: 'Model Grill Carcinogens'
  },`;

if (!enContent.includes('woodenUtensilBiofilm')) {
  enContent = enContent.replace(enKeyTarget, enKeyReplacement);
  enContent = enContent.replace(enMatchTarget, enMatchReplacement);
  enContent = enContent.replace(enCatalogTarget, enCatalogReplacement);
  fs.writeFileSync(enBlogSlugPath, enContent, 'utf8');
  console.log('✅ Updated src/pages/blog/[slug].astro with Wave 44 tool routing');
} else {
  console.log('⚠️ src/pages/blog/[slug].astro already contains woodenUtensilBiofilm');
}

// 2. Update src/pages/[lang]/blog/[slug].astro
const langBlogSlugPath = path.resolve('src/pages/[lang]/blog/[slug].astro');
let langContent = fs.readFileSync(langBlogSlugPath, 'utf8');

const langCatalogTarget = `  cannedFoodBpa: {
    path: '/tools/canned-food-bpa-leaching-modeler/',
    icon: '🥫',
    title: isEs ? 'Modelador de Hidrólisis de Revestimientos Epoxi y BPA en Latas' :
           isPt ? 'Modelador de Hidrólise de Revestimentos Epóxi e BPA em Latas' :
           isZh ? '罐头食品BPA与环氧树脂涂层水解溶出模型器' :
           '缶詰BPA＆内面エポキシ塗膜加水分解・重金属溶出シミュレーター',
    description: isEs ? 'Modela la degradación de resinas epoxi con BPA/BPS, migración en alimentos ácidos y corrosión de estaño en latas abiertas.' :
                 isPt ? 'Modela a degradação de resinas epóxi com BPA/BPS, migração em alimentos ácidos e corrosão de estanho em latas abertas.' :
                 isZh ? '模拟双酚A（BPA）与BPS环氧树脂降解、酸性食物中微量迁移及开盖冷藏马口铁锡溶出动力学。' :
                 'ビスフェノールA（BPA/BPS）エポキシ樹脂の劣化、酸性食品への移行動力学、開封後冷蔵でのスズ溶出を解析。',
    cta: isEs ? 'Modelar Seguridad de Latas' : isPt ? 'Modelar Segurança de Latas' : isZh ? '模拟罐头内壁安全性' : '缶詰の安全性を診断'
  },`;

const langCatalogReplacement = `  cannedFoodBpa: {
    path: '/tools/canned-food-bpa-leaching-modeler/',
    icon: '🥫',
    title: isEs ? 'Modelador de Hidrólisis de Revestimientos Epoxi y BPA en Latas' :
           isPt ? 'Modelador de Hidrólise de Revestimentos Epóxi e BPA em Latas' :
           isZh ? '罐头食品BPA与环氧树脂涂层水解溶出模型器' :
           '缶詰BPA＆内面エポキシ塗膜加水分解・重金属溶出シミュレーター',
    description: isEs ? 'Modela la degradación de resinas epoxi con BPA/BPS, migración en alimentos ácidos y corrosión de estaño en latas abiertas.' :
                 isPt ? 'Modela a degradação de resinas epóxi com BPA/BPS, migração em alimentos ácidos e corrosão de estanho em latas abertas.' :
                 isZh ? '模拟双酚A（BPA）与BPS环氧树脂降解、酸性食物中微量迁移及开盖冷藏马口铁锡溶出动力学。' :
                 'ビスフェノールA（BPA/BPS）エポキシ樹脂の劣化、酸性食品への移行動力学、開封後冷蔵でのスズ溶出を解析。',
    cta: isEs ? 'Modelar Seguridad de Latas' : isPt ? 'Modelar Segurança de Latas' : isZh ? '模拟罐头内壁安全性' : '缶詰の安全性を診断'
  },
  woodenUtensilBiofilm: {
    path: '/tools/wooden-utensil-biofilm-modeler/',
    icon: '🪵',
    title: isEs ? 'Modelador de Biopelículas y Daño en Utensilios de Madera' :
           isPt ? 'Modelador de Biofilmes e Danos em Utensílios de Madeira' :
           isZh ? '木质餐具导管生物被膜与洗碗机强碱破坏模型器' :
           '木製調理器具バイオフィルム繁殖・食洗機劣化シミュレーター',
    description: isEs ? 'Modela la absorción capilar en poros de madera, hidrólisis alcalina de lignina en lavavajillas y saturación con aceite mineral USP.' :
                 isPt ? 'Modela a absorção capilar em poros de madeira, hidrólise alcalina da lignina na lava-louças e saturação com óleo mineral USP.' :
                 isZh ? '模拟硬木微孔毛细吸水动力学、洗碗机强碱水解木质素脱胶过程及食品级白矿物油饱和封孔机理。' :
                 '木材の毛細管現象による菌の浸透、食洗機アルカリ洗剤によるリグニン分解、食品用ミネラルオイルの保護効果を解析。',
    cta: isEs ? 'Modelar Biopelículas en Madera' : isPt ? 'Modelar Biofilmes em Madeira' : isZh ? '模拟木质餐具微生物状态' : '木製器具の衛生状態を診断'
  },
  charcoalGasGrillPah: {
    path: '/tools/charcoal-gas-grill-pah-hca-modeler/',
    icon: '🥩',
    title: isEs ? 'Modelador de Carcinógenos PAH y HCA en Parrillas de Carbón y Gas' :
           isPt ? 'Modelador de Carcinógenos PAH e HCA no Churrasco a Carvão e Gás' :
           isZh ? '木炭与燃气烧烤多环芳烃（PAH）及杂环胺（HCA）致癌物生成模型器' :
           '炭火・ガスグリルPAH＆HCA発がん物質生成・マリネ抑制シミュレーター',
    description: isEs ? 'Modela la pirólisis de aminoácidos en HCA, humo de grasa con PAH en llamaradas y el bloqueo del 90% con marinados antioxidantes.' :
                 isPt ? 'Modela a pirólise de aminoácidos em HCA, fumaça de gordura com PAH em labaredas e o bloqueio de 90% com marinadas antioxidantes.' :
                 isZh ? '模拟高温肌肉肌酸热解杂环胺（HCA）、滴油起火白烟多环芳烃（PAH）吸附以及啤酒多酚腌料阻断90%致癌物动力学。' :
                 '筋肉クレアチンのHCA熱分解、脂の滴下によるPAH濃煙の付着、および抗酸化マリネによる最大90%の生成抑制効果をシミュレーション。',
    cta: isEs ? 'Modelar Carcinógenos en Parrilla' : isPt ? 'Modelar Carcinógenos no Churrasco' : isZh ? '模拟烧烤致癌物风险' : 'BBQ発がん物質を診断'
  },`;

if (!langContent.includes('woodenUtensilBiofilm')) {
  langContent = langContent.replace(enKeyTarget, enKeyReplacement);
  langContent = langContent.replace(enMatchTarget, enMatchReplacement);
  langContent = langContent.replace(langCatalogTarget, langCatalogReplacement);
  fs.writeFileSync(langBlogSlugPath, langContent, 'utf8');
  console.log('✅ Updated src/pages/[lang]/blog/[slug].astro with Wave 44 tool routing');
} else {
  console.log('⚠️ src/pages/[lang]/blog/[slug].astro already contains woodenUtensilBiofilm');
}
