const fs = require('fs');
const path = require('path');

console.log('=== UPDATING TOOLS INDEX FOR CONSUMER TOOL #71 (Cast Iron Seasoning Modeler) ===');

// 1. Update src/pages/tools/index.astro
const enToolsIndex = path.resolve('src/pages/tools/index.astro');
let enContent = fs.readFileSync(enToolsIndex, 'utf8');

const enHeroBlock = `  {
    slug: 'cast-iron-seasoning-degradation-modeler',
    isNew: true,
    badge: 'Acid Hydrolysis · Ferrous vs Ferric Dissolution · EFSA 45 mg/day UL Limit',
    badgeClass: 'bg-amber-700 text-white',
    title: 'Cast Iron & Carbon Steel Seasoning Degradation Modeler',
    desc: 'Simulate ester hydrolysis in pan seasoning under acidic reduction (tomato, wine), calculate Fe²⁺/Fe³⁺ dissolution kinetics, and evaluate dietary iron thresholds against the 45 mg/day UL.',
    cta: 'Model Seasoning Degradation',
    ctaClass: 'bg-amber-700 hover:bg-amber-800 text-white'
  },`;

if (!enContent.includes("slug: 'cast-iron-seasoning-degradation-modeler',\n    isNew: true")) {
  const target = `  {
    slug: 'melamine-tableware-formaldehyde-modeler',
    isNew: true,
    badge: 'Acid Hydrolysis · Microwave Dielectric Superheating · BfR 70°C Migration Limit',
    badgeClass: 'bg-red-800 text-white',
    title: 'Melamine Tableware Formaldehyde & Cyanuric Acid Leaching Modeler',
    desc: 'Model formaldehyde and melamine resin thermal breakdown kinetics, dielectric microwave superheating, acid hydrolysis, and cyanurate nephrolithiasis risk.',
    cta: 'Model Melamine Leaching',
    ctaClass: 'bg-red-800 hover:bg-red-900 text-white'
  },`;
  if (enContent.includes(target)) {
    enContent = enContent.replace(target, target + '\n' + enHeroBlock);
    fs.writeFileSync(enToolsIndex, enContent, 'utf8');
    console.log('✅ Added cast-iron-seasoning-degradation-modeler to featuredHeroTools in src/pages/tools/index.astro');
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
        slug: 'cast-iron-seasoning-degradation-modeler',
        badge: 'Hidrólisis Ácida · Disolución Fe²⁺/Fe³⁺ · Límite EFSA 45 mg/día',
        badgeClass: 'bg-amber-700 text-white',
        title: 'Modelador de Degradación de Curado en Hierro Fundido y Acero al Carbono',
        desc: 'Simule la hidrólisis de ésteres en reducciones ácidas (tomate, vino), calcule la cinética de disolución de iones Fe²⁺/Fe³⁺ y evalúe la ingesta de hierro frente al límite de 45 mg/día.',
        cta: 'Simular Degradación de Curado',
        ctaClass: 'bg-amber-700 hover:bg-amber-800 text-white'
      },`;

const ptBlock = `      {
        slug: 'cast-iron-seasoning-degradation-modeler',
        badge: 'Hidrólise Ácida · Dissolução Fe²⁺/Fe³⁺ · Limite EFSA 45 mg/dia',
        badgeClass: 'bg-amber-700 text-white',
        title: 'Modelador de Degradação de Cura em Ferro Fundido e Aço Carbono',
        desc: 'Simule a hidrólise de ésteres sob reduções ácidas (tomate, vinho), calcule a dissolução de íons Fe²⁺/Fe³⁺ e avalie o risco de sobrecarga de ferro dietético frente ao limite de 45 mg/dia.',
        cta: 'Simular Degradação de Cura',
        ctaClass: 'bg-amber-700 hover:bg-amber-800 text-white'
      },`;

const zhBlock = `      {
        slug: 'cast-iron-seasoning-degradation-modeler',
        badge: '酸催化酯键水解 · 亚铁与三价铁溶出动力学 · EFSA 45毫克/天上限',
        badgeClass: 'bg-amber-700 text-white',
        title: '铸铁与碳钢锅油膜酸性水解脱落与铁离子溶出动力学模型器',
        desc: '模拟番茄及酸性酒水去釉烹饪下的聚合物酯键水解、二价/三价铁离子溶出浓度，评估金属硬币异味及血色病膳食铁超标风险。',
        cta: '模拟油膜酸性降解',
        ctaClass: 'bg-amber-700 hover:bg-amber-800 text-white'
      },`;

const jaBlock = `      {
        slug: 'cast-iron-seasoning-degradation-modeler',
        badge: '酸触媒エステル加水分解 · Fe²⁺/Fe³⁺溶出動態 · EFSA 45 mg/日許容上限',
        badgeClass: 'bg-amber-700 text-white',
        title: '鋳鉄＆炭素鋼フライパン油膜酸性分解＆鉄分溶出モデラー',
        desc: 'トマトやワイン煮込みによる油膜ポリマーのエステル加水分解、二価/三価鉄イオンの溶出動態、金属異臭および血色病過剰摂取リスクをシミュレーション。',
        cta: '油膜劣化リスクを解析',
        ctaClass: 'bg-amber-700 hover:bg-amber-800 text-white'
      },`;

// Spanish insert
const esTarget = `title: 'Modelador de Lixiviación de Formaldehído y Ácido Cianúrico en Melamina',
        desc: 'Simule la hidrólisis ácida, el sobrecalentamiento dieléctrico en microondas, la liberación de formaldehído y melamina, y el riesgo de nefrolitiasis por cianurato.',
        cta: 'Simular Lixiviación en Melamina',
        ctaClass: 'bg-red-800 hover:bg-red-900 text-white'
      },`;

if (langContent.includes(esTarget) && !langContent.includes("badge: 'Hidrólisis Ácida · Disolución Fe²⁺/Fe³⁺ · Límite EFSA 45 mg/día'")) {
  langContent = langContent.replace(esTarget, esTarget + '\n' + esBlock);
  console.log('✅ Added ES block to [lang]/tools/index.astro');
}

// Portuguese insert
const ptTarget = `title: 'Modelador de Lixiviação de Formaldeído e Ácido Cianúrico em Melamina',
        desc: 'Simule a degradação hidrolítica sob calor e acidez, o superaquecimento dielétrico por micro-ondas e a migração de formaldeído e cianurato renal.',
        cta: 'Simular Lixiviação em Melamina',
        ctaClass: 'bg-red-800 hover:bg-red-900 text-white'
      },`;

if (langContent.includes(ptTarget) && !langContent.includes("badge: 'Hidrólise Ácida · Dissolução Fe²⁺/Fe³⁺ · Limite EFSA 45 mg/dia'")) {
  langContent = langContent.replace(ptTarget, ptTarget + '\n' + ptBlock);
  console.log('✅ Added PT block to [lang]/tools/index.astro');
}

// Chinese insert (zh-cn has 2 occurrences or 1 in zh object)
const zhTarget = `title: '密胺餐具甲醛与三聚氰胺微波酸解溶出动力学模型器',
        desc: '模拟高温与酸性环境树脂水解、微波高介电损耗超温裂解、甲醛迁移超标及三聚氰胺氰尿酸晶体急性肾损伤风险。',
        cta: '模拟密胺餐具溶出',
        ctaClass: 'bg-red-800 hover:bg-red-900 text-white'
      },`;

if (langContent.includes(zhTarget) && !langContent.includes("badge: '酸催化酯键水解 · 亚铁与三价铁溶出动力学 · EFSA 45毫克/天上限'")) {
  langContent = langContent.replaceAll(zhTarget, zhTarget + '\n' + zhBlock);
  console.log('✅ Added ZH block to [lang]/tools/index.astro');
}

// Japanese insert
const jaTarget = `title: 'メラミン食器ホルムアルデヒド＆シアヌル酸酸加水分解溶出モデラー',
        desc: '高温および酸性食品下での樹脂加水分解、電子レンジ誘電過熱によるホルムアルデヒド溶出、およびシアヌル酸塩腎結石形成リスクをシミュレーション。',
        cta: 'メラミン溶出リスクを解析',
        ctaClass: 'bg-red-800 hover:bg-red-900 text-white'
      },`;

if (langContent.includes(jaTarget) && !langContent.includes("badge: '酸触媒エステル加水分解 · Fe²⁺/Fe³⁺溶出動態 · EFSA 45 mg/日許容上限'")) {
  langContent = langContent.replaceAll(jaTarget, jaTarget + '\n' + jaBlock);
  console.log('✅ Added JA block to [lang]/tools/index.astro');
}

fs.writeFileSync(langToolsIndex, langContent, 'utf8');
console.log('✅ Successfully updated src/pages/[lang]/tools/index.astro');
