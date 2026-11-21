const fs = require('fs');
const path = require('path');

console.log('=== UPDATING TOOLS INDEX FOR CONSUMER TOOL #70 (Melamine Tableware Modeler) ===');

// 1. Update src/pages/tools/index.astro
const enToolsIndex = path.resolve('src/pages/tools/index.astro');
let enContent = fs.readFileSync(enToolsIndex, 'utf8');

const enHeroBlock = `  {
    slug: 'melamine-tableware-formaldehyde-modeler',
    isNew: true,
    badge: 'Acid Hydrolysis · Microwave Dielectric Superheating · BfR 70°C Migration Limit',
    badgeClass: 'bg-red-800 text-white',
    title: 'Melamine Tableware Formaldehyde & Cyanuric Acid Leaching Modeler',
    desc: 'Model formaldehyde and melamine resin thermal breakdown kinetics, dielectric microwave superheating, acid hydrolysis, and cyanurate nephrolithiasis risk.',
    cta: 'Model Melamine Leaching',
    ctaClass: 'bg-red-800 hover:bg-red-900 text-white'
  },`;

if (!enContent.includes("slug: 'melamine-tableware-formaldehyde-modeler',\n    isNew: true")) {
  const target = `  {
    slug: 'oven-self-cleaning-pyrolysis-simulator',
    isNew: true,
    badge: '500°C Pyrolysis · Carbon Monoxide & PM2.5 · Avian Teflon Toxicosis Simulator',
    badgeClass: 'bg-red-700 text-white',
    title: 'Oven Self-Cleaning Pyrolysis Fume & Off-Gassing Simulator',
    desc: 'Model 500°C pyrolytic thermal decomposition, PTFE gasket fluoropolymer degradation, toxic carbon monoxide spikes, and avian respiratory lethality risks.',
    cta: 'Model Pyrolysis Fumes',
    ctaClass: 'bg-red-700 hover:bg-red-800 text-white'
  },`;
  if (enContent.includes(target)) {
    enContent = enContent.replace(target, target + '\n' + enHeroBlock);
    fs.writeFileSync(enToolsIndex, enContent, 'utf8');
    console.log('✅ Added melamine-tableware-formaldehyde-modeler to featuredHeroTools in src/pages/tools/index.astro');
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
        slug: 'melamine-tableware-formaldehyde-modeler',
        badge: 'Límite BfR 70°C · Calentamiento Dieléctrico por Microondas · Nefrolitiasis por Cianurato',
        badgeClass: 'bg-red-800 text-white',
        title: 'Modelador de Lixiviación de Formaldehído y Ácido Cianúrico en Melamina',
        desc: 'Simule la hidrólisis ácida, el sobrecalentamiento dieléctrico en microondas, la liberación de formaldehído y melamina, y el riesgo de nefrolitiasis por cianurato.',
        cta: 'Simular Lixiviación en Melamina',
        ctaClass: 'bg-red-800 hover:bg-red-900 text-white'
      },`;

const ptBlock = `      {
        slug: 'melamine-tableware-formaldehyde-modeler',
        badge: 'Limite BfR 70°C · Aquecimento Dielétrico por Micro-ondas · Nefrolitíase por Cianurato',
        badgeClass: 'bg-red-800 text-white',
        title: 'Modelador de Lixiviação de Formaldeído e Ácido Cianúrico em Melamina',
        desc: 'Simule a degradação hidrolítica sob calor e acidez, o superaquecimento dielétrico por micro-ondas e a migração de formaldeído e cianurato renal.',
        cta: 'Simular Lixiviação em Melamina',
        ctaClass: 'bg-red-800 hover:bg-red-900 text-white'
      },`;

const zhBlock = `      {
        slug: 'melamine-tableware-formaldehyde-modeler',
        badge: '德国BfR 70°C迁移限值 · 微波介电热损耗 · 三聚氰胺氰尿酸肾结石模型器',
        badgeClass: 'bg-red-800 text-white',
        title: '密胺餐具甲醛与三聚氰胺微波酸解溶出动力学模型器',
        desc: '模拟高温与酸性环境树脂水解、微波高介电损耗超温裂解、甲醛迁移超标及三聚氰胺氰尿酸晶体急性肾损伤风险。',
        cta: '模拟密胺餐具溶出',
        ctaClass: 'bg-red-800 hover:bg-red-900 text-white'
      },`;

const jaBlock = `      {
        slug: 'melamine-tableware-formaldehyde-modeler',
        badge: '独BfR 70℃溶出限界 · 電子レンジ誘電損失加熱 · メラミンシアヌレート腎結石モデラー',
        badgeClass: 'bg-red-800 text-white',
        title: 'メラミン食器ホルムアルデヒド＆シアヌル酸酸加水分解溶出モデラー',
        desc: '高温および酸性食品下での樹脂加水分解、電子レンジ誘電過熱によるホルムアルデヒド溶出、およびシアヌル酸塩腎結石形成リスクをシミュレーション。',
        cta: 'メラミン溶出リスクを解析',
        ctaClass: 'bg-red-800 hover:bg-red-900 text-white'
      },`;

// Spanish insert
const esTarget = `title: 'Simulador de Humos de Autolimpieza Pirolítica y Gases de Horno',
        desc: 'Modela la descomposición térmica a 500°C, degradación de juntas de PTFE, picos de monóxido de carbono y riesgos letales de toxicosis respiratoria en aves.',
        cta: 'Simular Humos de Horno',
        ctaClass: 'bg-red-700 hover:bg-red-800 text-white'
      },`;

if (langContent.includes(esTarget) && !langContent.includes("badge: 'Límite BfR 70°C · Calentamiento Dieléctrico por Microondas · Nefrolitiasis por Cianurato'")) {
  langContent = langContent.replace(esTarget, esTarget + '\n' + esBlock);
  console.log('✅ Added ES block to [lang]/tools/index.astro');
}

// Portuguese insert
const ptTarget = `title: 'Simulador de Fumaça de Autolimpeza Pirolítica e Gases Tóxicos no Forno',
        desc: 'Modele a degradação térmica a 500°C, pirólise de vedações de PTFE, picos de monóxido de carbono e risco fatal de toxicose respiratória em aves domésticas.',
        cta: 'Simular Gases da Pirólise',
        ctaClass: 'bg-red-700 hover:bg-red-800 text-white'
      },`;

if (langContent.includes(ptTarget) && !langContent.includes("badge: 'Limite BfR 70°C · Aquecimento Dielétrico por Micro-ondas · Nefrolitíase por Cianurato'")) {
  langContent = langContent.replace(ptTarget, ptTarget + '\n' + ptBlock);
  console.log('✅ Added PT block to [lang]/tools/index.astro');
}

// Chinese insert (replace all occurrences of zhTarget)
const zhTarget = `title: '烤箱高温自清洁热解烟雾与氟聚合物分解气体模拟器',
        desc: '模拟500°C自清洁循环热解反应、PTFE门垫与涂层热裂解气体释放、一氧化碳剧增以及对宠物鸟类致命的急性呼吸窘迫风险。',
        cta: '模拟烤箱自清洁毒气',
        ctaClass: 'bg-red-700 hover:bg-red-800 text-white'
      },`;

let zhReplaced = 0;
if (!langContent.includes("badge: '德国BfR 70°C迁移限值 · 微波介电热损耗 · 三聚氰胺氰尿酸肾结石模型器'")) {
  langContent = langContent.replaceAll(zhTarget, () => {
    zhReplaced++;
    return zhTarget + '\n' + zhBlock;
  });
  console.log('✅ Added ZH blocks to [lang]/tools/index.astro, count:', zhReplaced);
}

// Japanese insert (replace all occurrences of jaTarget)
const jaTarget = `title: 'オーブン高温熱分解クリーニング有毒ガス＆PTFE分解熱気シミュレーター',
        desc: '500℃（932°F）の熱分解による油分分解、PTFEパッキン劣化、一氧化炭素スパイク、および小鳥に対する致死的な呼吸器中毒リスクを詳細解析。',
        cta: '熱分解ガスリスクを解析',
        ctaClass: 'bg-red-700 hover:bg-red-800 text-white'
      },`;

let jaReplaced = 0;
if (!langContent.includes("badge: '独BfR 70℃溶出限界 · 電子レンジ誘電損失加熱 · メラミンシアヌレート腎結石モデラー'")) {
  langContent = langContent.replaceAll(jaTarget, () => {
    jaReplaced++;
    return jaTarget + '\n' + jaBlock;
  });
  console.log('✅ Added JA blocks to [lang]/tools/index.astro, count:', jaReplaced);
}

fs.writeFileSync(langToolsIndex, langContent, 'utf8');
console.log('✅ Saved src/pages/[lang]/tools/index.astro');
