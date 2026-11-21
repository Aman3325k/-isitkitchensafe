const fs = require('fs');
const path = require('path');

console.log('=== UPDATING TOOLS INDEX FOR CONSUMER TOOL #67 (Charcoal Grill Modeler) ===');

// 1. Update src/pages/tools/index.astro
const enToolsIndex = path.resolve('src/pages/tools/index.astro');
let enContent = fs.readFileSync(enToolsIndex, 'utf8');

const enHeroBlock = `  {
    slug: 'charcoal-gas-grill-pah-hca-modeler',
    isNew: true,
    badge: 'EU 835/2011 · 750°C Fat Pyrolysis · BaP Smoke & HCA Kinetic Modeler',
    badgeClass: 'bg-rose-700 text-white',
    title: 'Charcoal vs Gas Grill PAH & HCA Carcinogen Modeler',
    desc: 'Model fat drip pyrolysis on 750°C embers, volatile Benzo[a]pyrene convective smoke condensation, surface creatine-amino Maillard condensation (PhIP/MeIQx), and antioxidant marinade reduction.',
    cta: 'Model Grill Carcinogens',
    ctaClass: 'bg-rose-700 hover:bg-rose-800 text-white'
  },`;

if (!enContent.includes("slug: 'charcoal-gas-grill-pah-hca-modeler',\n    isNew: true")) {
  const target = `  {
    slug: 'canned-food-bpa-leaching-modeler',
    isNew: true,
    badge: 'EFSA 2023 TDI 0.2 ng/kg · BADGE Hydrolysis · Retort Can Lining Simulator',
    badgeClass: 'bg-rose-600 text-white',
    title: 'Canned Food BPA & Epoxy Phenolic Liner Leaching Modeler',
    desc: 'Model bisphenol A (BPA) and epoxy liner hydrolysis into acidic tomatoes, lipophilic extraction in canned tuna/sardines, dent micro-fracturing, and EFSA 2023 TDI limits.',
    cta: 'Model Can Liner Safety',
    ctaClass: 'bg-rose-600 hover:bg-rose-700 text-white'
  },`;
  if (enContent.includes(target)) {
    enContent = enContent.replace(target, target + '\n' + enHeroBlock);
    fs.writeFileSync(enToolsIndex, enContent, 'utf8');
    console.log('✅ Added charcoal-gas-grill-pah-hca-modeler to featuredHeroTools in src/pages/tools/index.astro');
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
        slug: 'charcoal-gas-grill-pah-hca-modeler',
        badge: 'UE 835/2011 · Pirólisis de Grasa a 750°C · Modelo Cinético de HPA y HCA',
        badgeClass: 'bg-rose-700 text-white',
        title: 'Modelador de Carcinógenos PAH y HCA en Parrillas de Carbón y Gas',
        desc: 'Simule la pirólisis de grasa sobre brasas a 750°C, condensación de benzo[a]pireno en humo convectivo, síntesis de aminas heterocíclicas (PhIP/MeIQx) y reducción por marinados antioxidantes.',
        cta: 'Simular Carcinógenos en Parrilla',
        ctaClass: 'bg-rose-700 hover:bg-rose-800 text-white'
      },`;

const ptBlock = `      {
        slug: 'charcoal-gas-grill-pah-hca-modeler',
        badge: 'UE 835/2011 · Pirólise de Gordura a 750°C · Modelo Cinético de HPA e HCA',
        badgeClass: 'bg-rose-700 text-white',
        title: 'Modelador de Carcinógenos HPA e HCA em Churrasqueiras a Carvão e Gás',
        desc: 'Simule a pirólise de gordura sobre brasas a 750°C, condensação de benzo[a]pireno na fumaça, formação de aminas heterocíclicas e mitigação com marinadas ricas em polifenóis.',
        cta: 'Simular Carcinógenos do Churrasco',
        ctaClass: 'bg-rose-700 hover:bg-rose-800 text-white'
      },`;

const zhBlock = `      {
        slug: 'charcoal-gas-grill-pah-hca-modeler',
        badge: '欧盟 835/2011 · 750°C油脂裂解 · 苯并芘烟雾与杂环胺动力学模型器',
        badgeClass: 'bg-rose-700 text-white',
        title: '木炭与燃气烤炉多环芳烃（PAH）及杂环胺（HCA）致癌物模型器',
        desc: '模拟肉类滴落油脂在750°C炭火上的热解、挥发性苯并[a]芘烟气冷凝沉积、肌酸美拉德杂环胺（PhIP/MeIQx）生成以及多酚抗氧化腌料的阻断效果。',
        cta: '模拟烧烤致癌物风险',
        ctaClass: 'bg-rose-700 hover:bg-rose-800 text-white'
      },`;

const jaBlock = `      {
        slug: 'charcoal-gas-grill-pah-hca-modeler',
        badge: 'EU 835/2011 · 750℃油脂熱分解 · ベンゾ[a]ピレン煙霧＆HCA動力学モデル',
        badgeClass: 'bg-rose-700 text-white',
        title: '炭火・ガスグリル 多環芳香族炭化水素（PAH）＆ヘテロサイクリックアミン（HCA）発がん性モデラー',
        desc: '750℃炭火での油脂滴下熱分解、対流煙プーム中のベンゾ[a]ピレン沈着、筋組織クレアチンのメイラードHCA（PhIP/MeIQx）合成、および抗酸化マリネによる低減効果を解析。',
        cta: 'グリル発がん性リスクを診断',
        ctaClass: 'bg-rose-700 hover:bg-rose-800 text-white'
      },`;

// Spanish insert
const esTarget = `title: 'Modelador de Lixiviación de BPA y Resina Epoxi en Alimentos Enlatados',
        desc: 'Simule la hidrólisis ácida de recubrimientos epóxicos en tomates, extracción lipofílica en atún en aceite, microfisuras por abolladuras y límites de ingesta diaria tolerable de la EFSA.',
        cta: 'Simular Seguridad de Latas',
        ctaClass: 'bg-rose-600 hover:bg-rose-700 text-white'
      },`;

if (langContent.includes(esTarget) && !langContent.includes("slug: 'charcoal-gas-grill-pah-hca-modeler'")) {
  langContent = langContent.replace(esTarget, esTarget + '\n' + esBlock);
  console.log('✅ Added ES block to [lang]/tools/index.astro');
}

// Portuguese insert
const ptTarget = `title: 'Modelador de Lixiviação de BPA e Verniz Epóxi em Alimentos Enlatados',
        desc: 'Simule a degradação de resina epóxi em tomates ácidos, extração lipofílica em peixes oleosos, microfissuras por amassados e conformidade com limites da EFSA.',
        cta: 'Simular Segurança de Enlatados',
        ctaClass: 'bg-rose-600 hover:bg-rose-700 text-white'
      },`;

if (langContent.includes(ptTarget)) {
  langContent = langContent.replace(ptTarget, ptTarget + '\n' + ptBlock);
  console.log('✅ Added PT block to [lang]/tools/index.astro');
}

// Chinese insert (replace all occurrences of the zhTarget)
const zhTarget = `title: '罐头食品双酚A（BPA）与环氧树脂内涂层化学溶出模型器',
        desc: '模拟番茄等酸性食品中环氧酚醛涂层的酸催化水解、油浸鱼类中的亲脂性萃取、罐体凹痕微裂纹腐蚀以及欧盟EFSA 2023超低TDI暴露风险。',
        cta: '模拟罐头涂层安全性',
        ctaClass: 'bg-rose-600 hover:bg-rose-700 text-white'
      },`;

let zhReplaced = 0;
langContent = langContent.replaceAll(zhTarget, () => {
  zhReplaced++;
  return zhTarget + '\n' + zhBlock;
});
console.log('✅ Added ZH blocks to [lang]/tools/index.astro, count:', zhReplaced);

// Japanese insert (replace all occurrences of the jaTarget)
const jaTarget = `title: '缶詰食品 ビスフェノールA（BPA）＆エポキシ樹脂内面塗膜溶出シミュレーター',
        desc: 'トマト缶の酸加水分解、油漬け魚類の親油性抽出、缶のへこみによるマイクロクラック発生、および欧州EFSA 2023耐容一日摂取量（TDI）超過リスクを厳密計算。',
        cta: '缶詰BPAリスクを診断',
        ctaClass: 'bg-rose-600 hover:bg-rose-700 text-white'
      },`;

let jaReplaced = 0;
langContent = langContent.replaceAll(jaTarget, () => {
  jaReplaced++;
  return jaTarget + '\n' + jaBlock;
});
console.log('✅ Added JA blocks to [lang]/tools/index.astro, count:', jaReplaced);

fs.writeFileSync(langToolsIndex, langContent, 'utf8');
console.log('✅ Saved src/pages/[lang]/tools/index.astro');
