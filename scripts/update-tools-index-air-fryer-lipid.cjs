const fs = require('fs');
const path = require('path');

console.log('=== UPDATING TOOLS INDEX FOR CONSUMER TOOL #68 (Air Fryer Lipid Oxidation Modeler) ===');

// 1. Update src/pages/tools/index.astro
const enToolsIndex = path.resolve('src/pages/tools/index.astro');
let enContent = fs.readFileSync(enToolsIndex, 'utf8');

const enHeroBlock = `  {
    slug: 'air-fryer-lipid-oxidation-modeler',
    isNew: true,
    badge: '4-HNE Cytotoxins · Lipid Peroxidation · High-Velocity Convection Modeler',
    badgeClass: 'bg-amber-600 text-white',
    title: 'Air Fryer vs Deep Fryer Lipid Oxidation & 4-HNE Modeler',
    desc: 'Model forced-air convection oxygen flux, PUFA bis-allylic radical cascades, cytotoxic 4-hydroxy-2-nonenal (4-HNE) generation, and oil reuse degradation thresholds.',
    cta: 'Model Lipid Oxidation',
    ctaClass: 'bg-amber-600 hover:bg-amber-700 text-white'
  },`;

if (!enContent.includes("slug: 'air-fryer-lipid-oxidation-modeler',\n    isNew: true")) {
  const target = `  {
    slug: 'charcoal-gas-grill-pah-hca-modeler',
    isNew: true,
    badge: 'EU 835/2011 · 750°C Fat Pyrolysis · BaP Smoke & HCA Kinetic Modeler',
    badgeClass: 'bg-rose-700 text-white',
    title: 'Charcoal vs Gas Grill PAH & HCA Carcinogen Modeler',
    desc: 'Model fat drip pyrolysis on 750°C embers, volatile Benzo[a]pyrene convective smoke condensation, surface creatine-amino Maillard condensation (PhIP/MeIQx), and antioxidant marinade reduction.',
    cta: 'Model Grill Carcinogens',
    ctaClass: 'bg-rose-700 hover:bg-rose-800 text-white'
  },`;
  if (enContent.includes(target)) {
    enContent = enContent.replace(target, target + '\n' + enHeroBlock);
    fs.writeFileSync(enToolsIndex, enContent, 'utf8');
    console.log('✅ Added air-fryer-lipid-oxidation-modeler to featuredHeroTools in src/pages/tools/index.astro');
  } else {
    console.log('⚠️ Target not found in tools/index.astro');
  }
} else {
  console.log('⚠️ Already in tools/index.astro');
}

// 2. Update src/pages/[lang]/tools/index.astro
const langToolsIndex = path.resolve('src/pages/[lang]/tools/index.astro');
let langContent = fs.readFileSync(langToolsIndex, 'utf8');

const esBlock = `      {
        slug: 'air-fryer-lipid-oxidation-modeler',
        badge: 'Citotoxinas 4-HNE · Peroxidación Lipídica · Modelo de Convección de Aire',
        badgeClass: 'bg-amber-600 text-white',
        title: 'Modelador de Oxidación Lipídica y 4-HNE en Freidora de Aire vs Freidora Tradicional',
        desc: 'Simule el flujo de oxígeno por convección forzada, cascadas de radicales libres en ácidos grasos poliinsaturados, síntesis de 4-hidroxi-2-nonenal y límites de reutilización de aceite.',
        cta: 'Simular Oxidación Lipídica',
        ctaClass: 'bg-amber-600 hover:bg-amber-700 text-white'
      },`;

const ptBlock = `      {
        slug: 'air-fryer-lipid-oxidation-modeler',
        badge: 'Citotoxinas 4-HNE · Peroxidação Lipídica · Modelo de Convecção Forçada',
        badgeClass: 'bg-amber-600 text-white',
        title: 'Modelador de Oxidação Lipídica e Aldeídos 4-HNE em Fritadeira sem Óleo vs Tradicional',
        desc: 'Simule o fluxo de oxigênio sob convecção forçada, cascata de radicais livres em ácidos graxos poli-insaturados, geração de 4-HNE citotóxico e degradação por reutilização de óleo.',
        cta: 'Simular Oxidação de Lipídios',
        ctaClass: 'bg-amber-600 hover:bg-amber-700 text-white'
      },`;

const zhBlock = `      {
        slug: 'air-fryer-lipid-oxidation-modeler',
        badge: '4-HNE细胞毒性醛 · 脂质过氧化 · 高速热风对流模型器',
        badgeClass: 'bg-amber-600 text-white',
        title: '空气炸锅与传统油炸脂质热氧化及4-HNE毒性醛动力学模型器',
        desc: '模拟高速热风对流氧气通量、多不饱和脂肪酸双烯丙基自由基裂解、4-羟基-2-壬烯醛（4-HNE）生成动力学以及重复用油极性化合物（TPC）累积阈值。',
        cta: '模拟油脂氧化与毒性醛',
        ctaClass: 'bg-amber-600 hover:bg-amber-700 text-white'
      },`;

const jaBlock = `      {
        slug: 'air-fryer-lipid-oxidation-modeler',
        badge: '4-HNE細胞毒性アルデヒド · 脂質過酸化 · 高速熱風対流モデラー',
        badgeClass: 'bg-amber-600 text-white',
        title: 'ノンフライヤー vs 揚げ油 脂質熱酸化＆4-HNE細胞毒性アルデヒドモデラー',
        desc: '強制熱風対流下の酸素フラックス、多価不飽和脂肪酸ビスアリル炭素のラジカル分解、4-ヒドロキシ-2-ノネナール（4-HNE）生成、および油の再利用劣化限界を解析。',
        cta: '脂質酸化リスクを解析',
        ctaClass: 'bg-amber-600 hover:bg-amber-700 text-white'
      },`;

// Spanish insert
const esTarget = `title: 'Modelador de Carcinógenos PAH y HCA en Parrillas de Carbón y Gas',
        desc: 'Simule la pirólisis de grasa sobre brasas a 750°C, condensación de benzo[a]pireno en humo convectivo, síntesis de aminas heterocíclicas (PhIP/MeIQx) y reducción por marinados antioxidantes.',
        cta: 'Simular Carcinógenos en Parrilla',
        ctaClass: 'bg-rose-700 hover:bg-rose-800 text-white'
      },`;

if (langContent.includes(esTarget) && !langContent.includes("slug: 'air-fryer-lipid-oxidation-modeler'")) {
  langContent = langContent.replace(esTarget, esTarget + '\n' + esBlock);
  console.log('✅ Added ES block to [lang]/tools/index.astro');
}

// Portuguese insert
const ptTarget = `title: 'Modelador de Carcinógenos HPA e HCA em Churrasqueiras a Carvão e Gás',
        desc: 'Simule a pirólise de gordura sobre brasas a 750°C, condensação de benzo[a]pireno na fumaça, formação de aminas heterocíclicas e mitigação com marinadas ricas em polifenóis.',
        cta: 'Simular Carcinógenos do Churrasco',
        ctaClass: 'bg-rose-700 hover:bg-rose-800 text-white'
      },`;

if (langContent.includes(ptTarget)) {
  langContent = langContent.replace(ptTarget, ptTarget + '\n' + ptBlock);
  console.log('✅ Added PT block to [lang]/tools/index.astro');
}

// Chinese insert (replace all occurrences of the zhTarget)
const zhTarget = `title: '木炭与燃气烤炉多环芳烃（PAH）及杂环胺（HCA）致癌物模型器',
        desc: '模拟肉类滴落油脂在750°C炭火上的热解、挥发性苯并[a]芘烟气冷凝沉积、肌酸美拉德杂环胺（PhIP/MeIQx）生成以及多酚抗氧化腌料的阻断效果。',
        cta: '模拟烧烤致癌物风险',
        ctaClass: 'bg-rose-700 hover:bg-rose-800 text-white'
      },`;

let zhReplaced = 0;
langContent = langContent.replaceAll(zhTarget, () => {
  zhReplaced++;
  return zhTarget + '\n' + zhBlock;
});
console.log('✅ Added ZH blocks to [lang]/tools/index.astro, count:', zhReplaced);

// Japanese insert (replace all occurrences of the jaTarget)
const jaTarget = `title: '炭火・ガスグリル 多環芳香族炭化水素（PAH）＆ヘテロサイクリックアミン（HCA）発がん性モデラー',
        desc: '750℃炭火での油脂滴下熱分解、対流煙プーム中のベンゾ[a]ピレン沈着、筋組織クレアチンのメイラードHCA（PhIP/MeIQx）合成、および抗酸化マリネによる低減効果を解析。',
        cta: 'グリル発がん性リスクを診断',
        ctaClass: 'bg-rose-700 hover:bg-rose-800 text-white'
      },`;

let jaReplaced = 0;
langContent = langContent.replaceAll(jaTarget, () => {
  jaReplaced++;
  return jaTarget + '\n' + jaBlock;
});
console.log('✅ Added JA blocks to [lang]/tools/index.astro, count:', jaReplaced);

fs.writeFileSync(langToolsIndex, langContent, 'utf8');
console.log('✅ Saved src/pages/[lang]/tools/index.astro');
