const fs = require('fs');
const path = require('path');

// 1. Update src/pages/tools/index.astro
const enToolsIndex = path.resolve('src/pages/tools/index.astro');
let enContent = fs.readFileSync(enToolsIndex, 'utf8');

const enHeroBlock = `  {
    slug: 'canned-food-bpa-leaching-modeler',
    isNew: true,
    badge: 'EFSA 2023 TDI 0.2 ng/kg · BADGE Hydrolysis · Retort Can Lining Simulator',
    badgeClass: 'bg-rose-600 text-white',
    title: 'Canned Food BPA & Epoxy Phenolic Liner Leaching Modeler',
    desc: 'Model bisphenol A (BPA) and epoxy liner hydrolysis into acidic tomatoes, lipophilic extraction in canned tuna/sardines, dent micro-fracturing, and EFSA 2023 TDI limits.',
    cta: 'Model Can Liner Safety',
    ctaClass: 'bg-rose-600 hover:bg-rose-700 text-white'
  },`;

if (!enContent.includes("slug: 'canned-food-bpa-leaching-modeler',\n    isNew: true")) {
  const target = `  {
    slug: 'microwave-popcorn-pfas-modeler',
    isNew: true,
    badge: 'FDA 2024 Phase-Out · EFSA TWI 4.4 ng/kg · 200°C Susceptor Kinetics',
    badgeClass: 'bg-amber-600 text-white',
    title: 'Microwave Popcorn Bag Fluorinated PFOA / PFAS Surfactant Modeler',
    desc: 'Model fluorotelomer alcohol (FTOH) and perfluoroalkyl acid (PFAA) greaseproofing migration into molten fats at 200°C, microwave susceptor thermal kinetics, and steam puff inhalation exposure.',
    cta: 'Model Popcorn PFAS',
    ctaClass: 'bg-amber-600 hover:bg-amber-700 text-white'
  },`;
  if (enContent.includes(target)) {
    enContent = enContent.replace(target, target + '\n' + enHeroBlock);
    fs.writeFileSync(enToolsIndex, enContent, 'utf8');
    console.log('✅ Added canned-food to featuredHeroTools in src/pages/tools/index.astro');
  } else {
    console.log('⚠️ Target not found in tools/index.astro');
  }
}

// 2. Update src/pages/[lang]/tools/index.astro
const langToolsIndex = path.resolve('src/pages/[lang]/tools/index.astro');
let langContent = fs.readFileSync(langToolsIndex, 'utf8');

const esBlock = `      {
        slug: 'canned-food-bpa-leaching-modeler',
        badge: 'EFSA 2023 TDI 0.2 ng/kg · Hidrólisis BADGE · Simulador de Latas',
        badgeClass: 'bg-rose-600 text-white',
        title: 'Modelador de Lixiviación de BPA y Resina Epoxi en Alimentos Enlatados',
        desc: 'Simule la hidrólisis ácida de recubrimientos epóxicos en tomates, extracción lipofílica en atún en aceite, microfisuras por abolladuras y límites de ingesta diaria tolerable de la EFSA.',
        cta: 'Simular Seguridad de Latas',
        ctaClass: 'bg-rose-600 hover:bg-rose-700 text-white'
      },`;

const ptBlock = `      {
        slug: 'canned-food-bpa-leaching-modeler',
        badge: 'EFSA 2023 TDI 0.2 ng/kg · Hidrólise de BADGE · Simulador de Latas',
        badgeClass: 'bg-rose-600 text-white',
        title: 'Modelador de Lixiviação de BPA e Verniz Epóxi em Alimentos Enlatados',
        desc: 'Simule a degradação de resina epóxi em tomates ácidos, extração lipofílica em peixes oleosos, microfissuras por amassados e conformidade com limites da EFSA.',
        cta: 'Simular Segurança de Enlatados',
        ctaClass: 'bg-rose-600 hover:bg-rose-700 text-white'
      },`;

const zhBlock = `      {
        slug: 'canned-food-bpa-leaching-modeler',
        badge: 'EFSA 2023每日耐受摄入量0.2 ng/kg · 环氧BADGE水解 · 罐头涂层模拟器',
        badgeClass: 'bg-rose-600 text-white',
        title: '罐头食品双酚A（BPA）与环氧树脂内涂层化学溶出模型器',
        desc: '模拟番茄等酸性食品中环氧酚醛涂层的酸催化水解、油浸鱼类中的亲脂性萃取、罐体凹痕微裂纹腐蚀以及欧盟EFSA 2023超低TDI暴露风险。',
        cta: '模拟罐头涂层安全性',
        ctaClass: 'bg-rose-600 hover:bg-rose-700 text-white'
      },`;

const jaBlock = `      {
        slug: 'canned-food-bpa-leaching-modeler',
        badge: 'EFSA 2023 TDI 0.2 ng/kg · BADGEエポキシ加水分解 · 缶詰内面塗料シミュレーター',
        badgeClass: 'bg-rose-600 text-white',
        title: '缶詰食品 ビスフェノールA（BPA）＆エポキシ樹脂内面塗膜溶出シミュレーター',
        desc: 'トマト缶の酸加水分解、油漬け魚類の親油性抽出、缶のへこみによるマイクロクラック発生、および欧州EFSA 2023耐容一日摂取量（TDI）超過リスクを厳密計算。',
        cta: '缶詰BPAリスクを診断',
        ctaClass: 'bg-rose-600 hover:bg-rose-700 text-white'
      },`;

// Spanish insert
const esTarget = `title: 'Modelador de Bolsas de Palomitas de Microondas: PFOA, PFAS y Vapores Térmicos',
        desc: 'Simule la migración química de papel tratado con flúor a aceites y mantequilla fundida a 200°C, sobrecalentamiento del susceptor y riesgo por inhalación de vapor.',
        cta: 'Simular PFAS en Palomitas',
        ctaClass: 'bg-amber-600 hover:bg-amber-700 text-white'
      },`;

if (langContent.includes(esTarget)) {
  langContent = langContent.replace(esTarget, esTarget + '\n' + esBlock);
  console.log('✅ Added ES block to [lang]/tools/index.astro');
}

// Portuguese insert
const ptTarget = `title: 'Modelador de Pipoca de Micro-ondas: PFOA, PFAS e Vapores Térmicos',
        desc: 'Simule a migração de álcoois fluoroteloméricos (FTOH) e ácidos perfluoroalquílicos para gorduras a 200°C, superaquecimento do susceptor e inalação da pluma de vapor.',
        cta: 'Simular PFAS em Pipoca',
        ctaClass: 'bg-amber-600 hover:bg-amber-700 text-white'
      },`;

if (langContent.includes(ptTarget)) {
  langContent = langContent.replace(ptTarget, ptTarget + '\n' + ptBlock);
  console.log('✅ Added PT block to [lang]/tools/index.astro');
}

// Chinese insert (replace all occurrences of the zhTarget)
const zhTarget = `title: '微波爆米花包装袋PFAS与全氟表面活性剂蒸汽迁移模型器',
        desc: '模拟200°C熔融油脂中氟调聚醇（FTOH）及全氟烷基酸（PFAA）防油剂的化学溶出、铝化金属感受层热力学失控及开袋高压蒸汽吸入暴露。',
        cta: '模拟爆米花PFAS释放',
        ctaClass: 'bg-amber-600 hover:bg-amber-700 text-white'
      },`;

let zhReplaced = 0;
langContent = langContent.replaceAll(zhTarget, () => {
  zhReplaced++;
  return zhTarget + '\n' + zhBlock;
});
console.log('✅ Added ZH blocks to [lang]/tools/index.astro, count:', zhReplaced);

// Japanese insert (replace all occurrences of the jaTarget)
const jaTarget = `title: '電子レンジ用ポップコーン袋 PFAS・PFOA界面活性剤移行シミュレーター',
        desc: '200℃の溶融油脂中へのフルオロテロマーアルコール（FTOH）およびPFAS移行、金属サセプターの渦電流発熱、および開封時高温蒸気プームの吸入暴露リスクを解析。',
        cta: 'ポップコーンPFASリスクを診断',
        ctaClass: 'bg-amber-600 hover:bg-amber-700 text-white'
      },`;

let jaReplaced = 0;
langContent = langContent.replaceAll(jaTarget, () => {
  jaReplaced++;
  return jaTarget + '\n' + jaBlock;
});
console.log('✅ Added JA blocks to [lang]/tools/index.astro, count:', jaReplaced);

fs.writeFileSync(langToolsIndex, langContent, 'utf8');
console.log('✅ Saved src/pages/[lang]/tools/index.astro');
