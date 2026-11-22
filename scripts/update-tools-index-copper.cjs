const fs = require('fs');
const path = require('path');

console.log('=== UPDATING TOOLS INDEX FOR CONSUMER TOOL #72 (Copper Cookware & Verdigris Modeler) ===');

// 1. Update src/pages/tools/index.astro
const enToolsIndex = path.resolve('src/pages/tools/index.astro');
let enContent = fs.readFileSync(enToolsIndex, 'utf8');

const enHeroBlock = `  {
    slug: 'copper-cookware-toxicity-modeler',
    isNew: true,
    badge: 'Acid Leaching · Cupric Emetic Threshold · FDA § 4-101.14 Quarter Rule',
    badgeClass: 'bg-amber-700 text-white',
    title: 'Copper Cookware & Acidic Food Leaching & Verdigris Modeler',
    desc: 'Simulate copper ion dissolution in acidic reductions (pH < 6.0), tin lining erosion, toxic verdigris salt formation, and evaluate gastric irritation thresholds against the FDA Food Code Quarter Rule.',
    cta: 'Model Copper Toxicity',
    ctaClass: 'bg-amber-700 hover:bg-amber-800 text-white'
  },`;

const enTarget = `  {
    slug: 'cast-iron-seasoning-degradation-modeler',
    isNew: true,
    badge: 'Acid Hydrolysis · Ferrous vs Ferric Dissolution · EFSA 45 mg/day UL Limit',
    badgeClass: 'bg-amber-700 text-white',
    title: 'Cast Iron & Carbon Steel Seasoning Degradation Modeler',
    desc: 'Simulate ester hydrolysis in pan seasoning under acidic reduction (tomato, wine), calculate Fe²⁺/Fe³⁺ dissolution kinetics, and evaluate dietary iron thresholds against the 45 mg/day UL.',
    cta: 'Model Seasoning Degradation',
    ctaClass: 'bg-amber-700 hover:bg-amber-800 text-white'
  },`;

if (!enContent.includes("slug: 'copper-cookware-toxicity-modeler',\n    isNew: true")) {
  if (enContent.includes(enTarget)) {
    enContent = enContent.replace(enTarget, enTarget + '\n' + enHeroBlock);
    fs.writeFileSync(enToolsIndex, enContent, 'utf8');
    console.log('✅ Added copper-cookware-toxicity-modeler to featuredHeroTools in src/pages/tools/index.astro');
  } else {
    console.log('⚠️ Target not found in tools/index.astro');
  }
} else {
  console.log('ℹ️ Already in featuredHeroTools in tools/index.astro');
}

// 2. Update src/pages/[lang]/tools/index.astro
const langToolsIndex = path.resolve('src/pages/[lang]/tools/index.astro');
let langContent = fs.readFileSync(langToolsIndex, 'utf8');

const esBlock = `      {
        slug: 'copper-cookware-toxicity-modeler',
        badge: 'Lixiviación Ácida · Umbral Emético Cu²⁺ · Regla FDA 4-101.14',
        badgeClass: 'bg-amber-700 text-white',
        title: 'Modelador de Toxicidad de Cobre y Cardenillo en Menaje Culinario',
        desc: 'Simule la disolución de iones de cobre en reducciones ácidas (pH < 6.0), el desgaste del revestimiento de estaño y los umbrales de gastroenteritis química.',
        cta: 'Simular Toxicidad de Cobre',
        ctaClass: 'bg-amber-700 hover:bg-amber-800 text-white'
      },`;

const ptBlock = `      {
        slug: 'copper-cookware-toxicity-modeler',
        badge: 'Lixiviação Ácida · Limiar Emético Cu²⁺ · Regra FDA 4-101.14',
        badgeClass: 'bg-amber-700 text-white',
        title: 'Modelador de Toxicidade de Cobre e Azinhavre em Panelas',
        desc: 'Simule a dissolução de íons de cobre sob molhos ácidos (pH < 6.0), a erosão do estanhamento e o risco de náusea e gastroenterite química aguda.',
        cta: 'Simular Toxicidade de Cobre',
        ctaClass: 'bg-amber-700 hover:bg-amber-800 text-white'
      },`;

const zhBlock = `      {
        slug: 'copper-cookware-toxicity-modeler',
        badge: '酸性食物浸出 · 铜离子催吐阈值 · FDA 4-101.14硬币磨损准则',
        badgeClass: 'bg-amber-700 text-white',
        title: '铜质厨具酸性食物浸出与碱式碳酸铜（铜绿）毒理模拟器',
        desc: '模拟酸性酱汁（pH < 6.0）中铜离子（Cu²⁺）析出速率、内壁镀锡层磨损、有毒绿色铜绿溶解及急性迷走神经刺激催吐风险。',
        cta: '模拟铜毒性溶出',
        ctaClass: 'bg-amber-700 hover:bg-amber-800 text-white'
      },`;

const jaBlock = `      {
        slug: 'copper-cookware-toxicity-modeler',
        badge: '酸性浸出動態 · Cu²⁺催吐限界値 · FDA 4-101.14硬貨摩耗基準',
        badgeClass: 'bg-amber-700 text-white',
        title: '銅製調理器具の酸性浸出および有毒緑青（ろくしょう）シミュレーター',
        desc: '酸性煮込み料理（pH < 6.0）での銅イオン急速溶出キネティクス、錫引き層摩耗、緑青溶解および急性胃腸刺激嘔吐リスクを解析。',
        cta: '銅溶出リスクを解析',
        ctaClass: 'bg-amber-700 hover:bg-amber-800 text-white'
      },`;

const esTarget = `title: 'Modelador de Degradación de Curado en Hierro Fundido y Acero al Carbono',
        desc: 'Simule la hidrólisis de ésteres en reducciones ácidas (tomate, vino), calcule la cinética de disolución de iones Fe²⁺/Fe³⁺ y evalúe la ingesta de hierro frente al límite de 45 mg/día.',
        cta: 'Simular Degradación de Curado',
        ctaClass: 'bg-amber-700 hover:bg-amber-800 text-white'
      },`;

if (langContent.includes(esTarget) && !langContent.includes("badge: 'Lixiviación Ácida · Umbral Emético Cu²⁺ · Regla FDA 4-101.14'")) {
  langContent = langContent.replaceAll(esTarget, esTarget + '\n' + esBlock);
  console.log('✅ Added ES block to [lang]/tools/index.astro');
}

const ptTarget = `title: 'Modelador de Degradação de Cura em Ferro Fundido e Aço Carbono',
        desc: 'Simule a hidrólise de ésteres sob reduções ácidas (tomate, vinho), calcule a dissolução de íons Fe²⁺/Fe³⁺ e avalie o risco de sobrecarga de ferro dietético frente ao limite de 45 mg/dia.',
        cta: 'Simular Degradação de Cura',
        ctaClass: 'bg-amber-700 hover:bg-amber-800 text-white'
      },`;

if (langContent.includes(ptTarget) && !langContent.includes("badge: 'Lixiviação Ácida · Limiar Emético Cu²⁺ · Regra FDA 4-101.14'")) {
  langContent = langContent.replaceAll(ptTarget, ptTarget + '\n' + ptBlock);
  console.log('✅ Added PT block to [lang]/tools/index.astro');
}

const zhTarget = `title: '铸铁与碳钢锅油膜酸性水解脱落与铁离子溶出动力学模型器',
        desc: '模拟番茄及酸性酒水去釉烹饪下的聚合物酯键水解、二价/三价铁离子溶出浓度，评估金属硬币异味及血色病膳食铁超标风险。',
        cta: '模拟油膜酸性降解',
        ctaClass: 'bg-amber-700 hover:bg-amber-800 text-white'
      },`;

if (langContent.includes(zhTarget) && !langContent.includes("badge: '酸性食物浸出 · 铜离子催吐阈值 · FDA 4-101.14硬币磨损准则'")) {
  langContent = langContent.replaceAll(zhTarget, zhTarget + '\n' + zhBlock);
  console.log('✅ Added ZH block to [lang]/tools/index.astro');
}

const jaTarget = `title: '鋳鉄＆炭素鋼フライパン油膜酸性分解＆鉄分溶出モデラー',
        desc: 'トマトやワイン煮込みによる油膜ポリマーのエステル加水分解、二価/三価鉄イオンの溶出動態、金属異臭および血色病過剰摂取リスクをシミュレーション。',
        cta: '油膜劣化リスクを解析',
        ctaClass: 'bg-amber-700 hover:bg-amber-800 text-white'
      },`;

if (langContent.includes(jaTarget) && !langContent.includes("badge: '酸性浸出動態 · Cu²⁺催吐限界値 · FDA 4-101.14硬貨摩耗基準'")) {
  langContent = langContent.replaceAll(jaTarget, jaTarget + '\n' + jaBlock);
  console.log('✅ Added JA block to [lang]/tools/index.astro');
}

fs.writeFileSync(langToolsIndex, langContent, 'utf8');
console.log('✅ Successfully updated src/pages/[lang]/tools/index.astro for Copper Tool');
