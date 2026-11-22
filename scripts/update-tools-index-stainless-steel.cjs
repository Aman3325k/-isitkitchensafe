const fs = require('fs');
const path = require('path');

console.log('=== UPDATING TOOLS INDEX FOR CONSUMER TOOL #73 (Stainless Steel Heavy Metal Leaching Modeler) ===');

// 1. Update src/pages/tools/index.astro
const enToolsIndex = path.resolve('src/pages/tools/index.astro');
let enContent = fs.readFileSync(enToolsIndex, 'utf8');

const enHeroBlock = `  {
    slug: 'stainless-steel-heavy-metal-leaching-modeler',
    isNew: true,
    badge: 'Nickel & Chromium Leaching · UC Davis Kinetics · SNAS Allergy Thresholds',
    badgeClass: 'bg-slate-800 text-white',
    title: 'Stainless Steel Heavy Metal (Nickel & Chromium) Acidic Leaching Modeler',
    desc: 'Simulate nickel and chromium ion dissolution during acidic simmering (pH < 4.0), compare 304 vs 316 vs 430 alloys, model new pan leaching spikes, and evaluate systemic nickel allergy risks.',
    cta: 'Model Heavy Metal Leaching',
    ctaClass: 'bg-slate-800 hover:bg-slate-900 text-white'
  },`;

const enTarget = `  {
    slug: 'copper-cookware-toxicity-modeler',
    isNew: true,
    badge: 'Acid Leaching · Cupric Emetic Threshold · FDA § 4-101.14 Quarter Rule',
    badgeClass: 'bg-amber-700 text-white',
    title: 'Copper Cookware & Acidic Food Leaching & Verdigris Modeler',
    desc: 'Simulate copper ion dissolution in acidic reductions (pH < 6.0), tin lining erosion, toxic verdigris salt formation, and evaluate gastric irritation thresholds against the FDA Food Code Quarter Rule.',
    cta: 'Model Copper Toxicity',
    ctaClass: 'bg-amber-700 hover:bg-amber-800 text-white'
  },`;

if (!enContent.includes("slug: 'stainless-steel-heavy-metal-leaching-modeler',\n    isNew: true")) {
  if (enContent.includes(enTarget)) {
    enContent = enContent.replace(enTarget, enTarget + '\n' + enHeroBlock);
    fs.writeFileSync(enToolsIndex, enContent, 'utf8');
    console.log('✅ Added stainless-steel-heavy-metal-leaching-modeler to featuredHeroTools in src/pages/tools/index.astro');
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
        slug: 'stainless-steel-heavy-metal-leaching-modeler',
        badge: 'Lixiviación Ni & Cr · Cinética UC Davis · Umbrales Alergia SNAS',
        badgeClass: 'bg-slate-800 text-white',
        title: 'Modelador de Lixiviación de Metales Pesados en Acero Inoxidable',
        desc: 'Simule la disolución de iones de níquel y cromo en cocciones ácidas (pH < 4.0), compare aleaciones 304, 316 y 430, y evalúe riesgos de alergia sistémica al níquel (SNAS).',
        cta: 'Simular Lixiviación de Metales',
        ctaClass: 'bg-slate-800 hover:bg-slate-900 text-white'
      },`;

const ptBlock = `      {
        slug: 'stainless-steel-heavy-metal-leaching-modeler',
        badge: 'Lixiviação de Ni & Cr · Cinética UC Davis · Limiares de Alergia SNAS',
        badgeClass: 'bg-slate-800 text-white',
        title: 'Modelador de Lixiviação de Metais Pesados em Aço Inoxidável',
        desc: 'Simule a dissolução de íons de níquel e cromo sob cocção ácida prolongada (pH < 4.0), compare ligas 304, 316 e 430 e avalie o risco de síndrome de alergia sistêmica ao níquel.',
        cta: 'Simular Lixiviação de Metais',
        ctaClass: 'bg-slate-800 hover:bg-slate-900 text-white'
      },`;

const zhBlock = `      {
        slug: 'stainless-steel-heavy-metal-leaching-modeler',
        badge: '镍与铬酸性析出 · 加州大学戴维斯分校动力学 · 全身性镍过敏综合征阈值',
        badgeClass: 'bg-slate-800 text-white',
        title: '不锈钢厨具重金属（镍与铬）酸性烹饪溶出与钝化动力学模拟器',
        desc: '模拟长时间熬煮酸性番茄酱（pH < 4.0）下的镍（Ni²⁺）与三价铬（Cr³⁺）析出速率，对比304、316与430材质耐蚀性及新锅钝化前峰值溶出风险。',
        cta: '模拟重金属溶出',
        ctaClass: 'bg-slate-800 hover:bg-slate-900 text-white'
      },`;

const jaBlock = `      {
        slug: 'stainless-steel-heavy-metal-leaching-modeler',
        badge: 'ニッケル・クロム酸性溶出 · UCデービス動力学モデル · 全身性金属アレルギー基準',
        badgeClass: 'bg-slate-800 text-white',
        title: 'ステンレス調理器具 重金属（ニッケル・クロム）酸性溶出＆不働態皮膜シミュレーター',
        desc: 'トマトソース等の酸性煮込み（pH < 4.0）におけるNi²⁺/Cr³⁺の溶出動態、304/316/430鋼種の耐酸比較、新品時の溶出スパイクおよび全身性ニッケルアレルギー（SNAS）リスクを解析。',
        cta: '重金属溶出リスクを解析',
        ctaClass: 'bg-slate-800 hover:bg-slate-900 text-white'
      },`;

const esTarget = `title: 'Modelador de Toxicidad de Cobre y Cardenillo en Menaje Culinario',
        desc: 'Simule la disolución de iones de cobre en reducciones ácidas (pH < 6.0), el desgaste del revestimiento de estaño y los umbrales de gastroenteritis química.',
        cta: 'Simular Toxicidad de Cobre',
        ctaClass: 'bg-amber-700 hover:bg-amber-800 text-white'
      },`;

if (langContent.includes(esTarget) && !langContent.includes("badge: 'Lixiviación Ni & Cr · Cinética UC Davis · Umbrales Alergia SNAS'")) {
  langContent = langContent.replaceAll(esTarget, esTarget + '\n' + esBlock);
  console.log('✅ Added ES block to [lang]/tools/index.astro');
}

const ptTarget = `title: 'Modelador de Toxicidade de Cobre e Azinhavre em Panelas',
        desc: 'Simule a dissolução de íons de cobre sob molhos ácidos (pH < 6.0), a erosão do estanhamento e o risco de náusea e gastroenterite química aguda.',
        cta: 'Simular Toxicidade de Cobre',
        ctaClass: 'bg-amber-700 hover:bg-amber-800 text-white'
      },`;

if (langContent.includes(ptTarget) && !langContent.includes("badge: 'Lixiviação de Ni & Cr · Cinética UC Davis · Limiares de Alergia SNAS'")) {
  langContent = langContent.replaceAll(ptTarget, ptTarget + '\n' + ptBlock);
  console.log('✅ Added PT block to [lang]/tools/index.astro');
}

const zhTarget = `title: '铜质厨具酸性食物浸出与碱式碳酸铜（铜绿）毒理模拟器',
        desc: '模拟酸性酱汁（pH < 6.0）中铜离子（Cu²⁺）析出速率、内壁镀锡层磨损、有毒绿色铜绿溶解及急性迷走神经刺激催吐风险。',
        cta: '模拟铜毒性溶出',
        ctaClass: 'bg-amber-700 hover:bg-amber-800 text-white'
      },`;

if (langContent.includes(zhTarget) && !langContent.includes("badge: '镍与铬酸性析出 · 加州大学戴维斯分校动力学 · 全身性镍过敏综合征阈值'")) {
  langContent = langContent.replaceAll(zhTarget, zhTarget + '\n' + zhBlock);
  console.log('✅ Added ZH block to [lang]/tools/index.astro');
}

const jaTarget = `title: '銅製調理器具の酸性浸出および有毒緑青（ろくしょう）シミュレーター',
        desc: '酸性煮込み料理（pH < 6.0）での銅イオン急速溶出キネティクス、錫引き層摩耗、緑青溶解および急性胃腸刺激嘔吐リスクを解析。',
        cta: '銅溶出リスクを解析',
        ctaClass: 'bg-amber-700 hover:bg-amber-800 text-white'
      },`;

if (langContent.includes(jaTarget) && !langContent.includes("badge: 'ニッケル・クロム酸性溶出 · UCデービス動力学モデル · 全身性金属アレルギー基準'")) {
  langContent = langContent.replaceAll(jaTarget, jaTarget + '\n' + jaBlock);
  console.log('✅ Added JA block to [lang]/tools/index.astro');
}

fs.writeFileSync(langToolsIndex, langContent, 'utf8');
console.log('✅ Successfully updated src/pages/[lang]/tools/index.astro for Stainless Steel Tool');
