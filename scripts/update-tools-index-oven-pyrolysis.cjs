const fs = require('fs');
const path = require('path');

console.log('=== UPDATING TOOLS INDEX FOR CONSUMER TOOL #69 (Oven Self-Cleaning Pyrolysis Simulator) ===');

// 1. Update src/pages/tools/index.astro
const enToolsIndex = path.resolve('src/pages/tools/index.astro');
let enContent = fs.readFileSync(enToolsIndex, 'utf8');

const enHeroBlock = `  {
    slug: 'oven-self-cleaning-pyrolysis-simulator',
    isNew: true,
    badge: '500°C Pyrolysis · Carbon Monoxide & PM2.5 · Avian Teflon Toxicosis Simulator',
    badgeClass: 'bg-red-700 text-white',
    title: 'Oven Self-Cleaning Pyrolysis Fume & Off-Gassing Simulator',
    desc: 'Model 500°C pyrolytic thermal decomposition, PTFE gasket fluoropolymer degradation, toxic carbon monoxide spikes, and avian respiratory lethality risks.',
    cta: 'Model Pyrolysis Fumes',
    ctaClass: 'bg-red-700 hover:bg-red-800 text-white'
  },`;

if (!enContent.includes("slug: 'oven-self-cleaning-pyrolysis-simulator',\n    isNew: true")) {
  const target = `  {
    slug: 'air-fryer-lipid-oxidation-modeler',
    isNew: true,
    badge: '4-HNE Cytotoxins · Lipid Peroxidation · High-Velocity Convection Modeler',
    badgeClass: 'bg-amber-600 text-white',
    title: 'Air Fryer vs Deep Fryer Lipid Oxidation & 4-HNE Modeler',
    desc: 'Model forced-air convection oxygen flux, PUFA bis-allylic radical cascades, cytotoxic 4-hydroxy-2-nonenal (4-HNE) generation, and oil reuse degradation thresholds.',
    cta: 'Model Lipid Oxidation',
    ctaClass: 'bg-amber-600 hover:bg-amber-700 text-white'
  },`;
  if (enContent.includes(target)) {
    enContent = enContent.replace(target, target + '\n' + enHeroBlock);
    fs.writeFileSync(enToolsIndex, enContent, 'utf8');
    console.log('✅ Added oven-self-cleaning-pyrolysis-simulator to featuredHeroTools in src/pages/tools/index.astro');
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
        slug: 'oven-self-cleaning-pyrolysis-simulator',
        badge: 'Pirólisis a 500°C · Monóxido de Carbono y PM2.5 · Toxicosis Aviar por Teflón',
        badgeClass: 'bg-red-700 text-white',
        title: 'Simulador de Humos de Autolimpieza Pirolítica y Gases de Horno',
        desc: 'Modela la descomposición térmica a 500°C, degradación de juntas de PTFE, picos de monóxido de carbono y riesgos letales de toxicosis respiratoria en aves.',
        cta: 'Simular Humos de Horno',
        ctaClass: 'bg-red-700 hover:bg-red-800 text-white'
      },`;

const ptBlock = `      {
        slug: 'oven-self-cleaning-pyrolysis-simulator',
        badge: 'Pirólise a 500°C · Monóxido de Carbono e PM2.5 · Toxicose Aviária por Teflon',
        badgeClass: 'bg-red-700 text-white',
        title: 'Simulador de Fumaça de Autolimpeza Pirolítica e Gases Tóxicos no Forno',
        desc: 'Modele a degradação térmica a 500°C, pirólise de vedações de PTFE, picos de monóxido de carbono e risco fatal de toxicose respiratória em aves domésticas.',
        cta: 'Simular Gases da Pirólise',
        ctaClass: 'bg-red-700 hover:bg-red-800 text-white'
      },`;

const zhBlock = `      {
        slug: 'oven-self-cleaning-pyrolysis-simulator',
        badge: '500°C高温热解 · 一氧化碳与PM2.5激增 · 鸟类特氟龙中毒模拟器',
        badgeClass: 'bg-red-700 text-white',
        title: '烤箱高温自清洁热解烟雾与氟聚合物分解气体模拟器',
        desc: '模拟500°C自清洁循环热解反应、PTFE门垫与涂层热裂解气体释放、一氧化碳剧增以及对宠物鸟类致命的急性呼吸窘迫风险。',
        cta: '模拟烤箱自清洁毒气',
        ctaClass: 'bg-red-700 hover:bg-red-800 text-white'
      },`;

const jaBlock = `      {
        slug: 'oven-self-cleaning-pyrolysis-simulator',
        badge: '500℃熱分解 · 一酸化炭素＆PM2.5急上昇 · 愛鳥テフロン中毒シミュレーター',
        badgeClass: 'bg-red-700 text-white',
        title: 'オーブン高温熱分解クリーニング有毒ガス＆PTFE分解熱気シミュレーター',
        desc: '500℃（932°F）の熱分解による油分分解、PTFEパッキン劣化、一氧化炭素スパイク、および小鳥に対する致死的な呼吸器中毒リスクを詳細解析。',
        cta: '熱分解ガスリスクを解析',
        ctaClass: 'bg-red-700 hover:bg-red-800 text-white'
      },`;

// Spanish insert
const esTarget = `title: 'Modelador de Oxidación Lipídica y 4-HNE en Freidora de Aire vs Freidora Tradicional',
        desc: 'Simule el flujo de oxígeno por convección forzada, cascadas de radicales libres en ácidos grasos poliinsaturados, síntesis de 4-hidroxi-2-nonenal y límites de reutilización de aceite.',
        cta: 'Simular Oxidación Lipídica',
        ctaClass: 'bg-amber-600 hover:bg-amber-700 text-white'
      },`;

if (langContent.includes(esTarget) && !langContent.includes("badge: 'Pirólisis a 500°C · Monóxido de Carbono y PM2.5 · Toxicosis Aviar por Teflón'")) {
  langContent = langContent.replace(esTarget, esTarget + '\n' + esBlock);
  console.log('✅ Added ES block to [lang]/tools/index.astro');
}

// Portuguese insert
const ptTarget = `title: 'Modelador de Oxidação Lipídica e Aldeídos 4-HNE em Fritadeira sem Óleo vs Tradicional',
        desc: 'Simule o fluxo de oxigênio sob convecção forçada, cascata de radicais livres em ácidos graxos poli-insaturados, geração de 4-HNE citotóxico e degradação por reutilização de óleo.',
        cta: 'Simular Oxidação de Lipídios',
        ctaClass: 'bg-amber-600 hover:bg-amber-700 text-white'
      },`;

if (langContent.includes(ptTarget) && !langContent.includes("badge: 'Pirólise a 500°C · Monóxido de Carbono e PM2.5 · Toxicose Aviária por Teflon'")) {
  langContent = langContent.replace(ptTarget, ptTarget + '\n' + ptBlock);
  console.log('✅ Added PT block to [lang]/tools/index.astro');
}

// Chinese insert (replace all occurrences of zhTarget)
const zhTarget = `title: '空气炸锅与传统油炸脂质热氧化及4-HNE毒性醛动力学模型器',
        desc: '模拟高速热风对流氧气通量、多不饱和脂肪酸双烯丙基自由基裂解、4-羟基-2-壬烯醛（4-HNE）生成动力学以及重复用油极性化合物（TPC）累积阈值。',
        cta: '模拟油脂氧化与毒性醛',
        ctaClass: 'bg-amber-600 hover:bg-amber-700 text-white'
      },`;

let zhReplaced = 0;
if (!langContent.includes("badge: '500°C高温热解 · 一氧化碳与PM2.5激增 · 鸟类特氟龙中毒模拟器'")) {
  langContent = langContent.replaceAll(zhTarget, () => {
    zhReplaced++;
    return zhTarget + '\n' + zhBlock;
  });
  console.log('✅ Added ZH blocks to [lang]/tools/index.astro, count:', zhReplaced);
}

// Japanese insert (replace all occurrences of jaTarget)
const jaTarget = `title: 'ノンフライヤー vs 揚げ油 脂質熱酸化＆4-HNE細胞毒性アルデヒドモデラー',
        desc: '強制熱風対流下の酸素フラックス、多価不飽和脂肪酸ビスアリル炭素のラジカル分解、4-ヒドロキシ-2-ノネナール（4-HNE）生成、および油の再利用劣化限界を解析。',
        cta: '脂質酸化リスクを解析',
        ctaClass: 'bg-amber-600 hover:bg-amber-700 text-white'
      },`;

let jaReplaced = 0;
if (!langContent.includes("badge: '500℃熱分解 · 一酸化炭素＆PM2.5急上昇 · 愛鳥テフロン中毒シミュレーター'")) {
  langContent = langContent.replaceAll(jaTarget, () => {
    jaReplaced++;
    return jaTarget + '\n' + jaBlock;
  });
  console.log('✅ Added JA blocks to [lang]/tools/index.astro, count:', jaReplaced);
}

fs.writeFileSync(langToolsIndex, langContent, 'utf8');
console.log('✅ Saved src/pages/[lang]/tools/index.astro');
