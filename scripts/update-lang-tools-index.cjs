const fs = require('fs');
const filePath = 'src/pages/[lang]/tools/index.astro';
let content = fs.readFileSync(filePath, 'utf8');

const esBlock = `      {
        slug: 'microwave-popcorn-pfas-modeler',
        badge: 'Retirada FDA 2024 · EFSA TWI 4.4 ng/kg · Cinética Susceptor 200°C',
        badgeClass: 'bg-amber-600 text-white',
        title: 'Modelador de Bolsas de Palomitas de Microondas: PFOA, PFAS y Vapores Térmicos',
        desc: 'Simule la migración química de papel tratado con flúor a aceites y mantequilla fundida a 200°C, sobrecalentamiento del susceptor y riesgo por inhalación de vapor.',
        cta: 'Simular PFAS en Palomitas',
        ctaClass: 'bg-amber-600 hover:bg-amber-700 text-white'
      },`;

const ptBlock = `      {
        slug: 'microwave-popcorn-pfas-modeler',
        badge: 'Retirada FDA 2024 · EFSA TWI 4.4 ng/kg · Cinética do Susceptor a 200°C',
        badgeClass: 'bg-amber-600 text-white',
        title: 'Modelador de Pipoca de Micro-ondas: PFOA, PFAS e Vapores Térmicos',
        desc: 'Simule a migração de álcoois fluoroteloméricos (FTOH) e ácidos perfluoroalquílicos para gorduras a 200°C, superaquecimento do susceptor e inalação da pluma de vapor.',
        cta: 'Simular PFAS em Pipoca',
        ctaClass: 'bg-amber-600 hover:bg-amber-700 text-white'
      },`;

const zhBlock = `      {
        slug: 'microwave-popcorn-pfas-modeler',
        badge: 'FDA 2024淘汰 · EFSA TWI 4.4 ng/kg · 200°C感受膜热动力学',
        badgeClass: 'bg-amber-600 text-white',
        title: '微波爆米花包装袋PFAS与全氟表面活性剂蒸汽迁移模型器',
        desc: '模拟200°C熔融油脂中氟调聚醇（FTOH）及全氟烷基酸（PFAA）防油剂的化学溶出、铝化金属感受层热力学失控及开袋高压蒸汽吸入暴露。',
        cta: '模拟爆米花PFAS释放',
        ctaClass: 'bg-amber-600 hover:bg-amber-700 text-white'
      },`;

const jaBlock = `      {
        slug: 'microwave-popcorn-pfas-modeler',
        badge: 'FDA 2024年段階的廃止 · EFSA TWI 4.4 ng/kg · 200℃サセプター熱力学',
        badgeClass: 'bg-amber-600 text-white',
        title: '電子レンジ用ポップコーン袋 PFAS・PFOA界面活性剤移行シミュレーター',
        desc: '200℃の溶融油脂中へのフルオロテロマーアルコール（FTOH）およびPFAS移行、金属サセプターの渦電流発熱、および開封時高温蒸気プームの吸入暴露リスクを解析。',
        cta: 'ポップコーンPFASリスクを診断',
        ctaClass: 'bg-amber-600 hover:bg-amber-700 text-white'
      },`;

// 1. Spanish insert
content = content.replace(/(title: 'Modelador de Degradación de Cestas de Teflón en Freidoras de Aire',[\s\S]*?ctaClass: 'bg-amber-600 hover:bg-amber-700 text-white'\s*\},\s*\n)/, '$1' + esBlock + '\n');

// 2. Portuguese insert
content = content.replace(/(title: 'Modelador de Degradação de Cestos de Teflon em Air Fryers',[\s\S]*?ctaClass: 'bg-amber-600 hover:bg-amber-700 text-white'\s*\},\s*\n)/, '$1' + ptBlock + '\n');

// 3. Chinese inserts (2 places)
let zhCount = 0;
content = content.replace(/(title: '空气炸锅特氟龙涂层热解脱落与微羽流挥发动力学模拟器',[\s\S]*?ctaClass: 'bg-amber-600 hover:bg-amber-700 text-white'\s*\},\s*\n)/g, (match) => {
  zhCount++;
  return match + zhBlock + '\n';
});

// 4. Japanese inserts (2 places)
let jaCount = 0;
content = content.replace(/(title: 'ノンフライヤーのテフロン劣化・微小粒子熱分解シミュレーター',[\s\S]*?ctaClass: 'bg-amber-600 hover:bg-amber-700 text-white'\s*\},\s*\n)/g, (match) => {
  jaCount++;
  return match + jaBlock + '\n';
});

fs.writeFileSync(filePath, content, 'utf8');
console.log('Inserted blocks: ES: 1, PT: 1, ZH:', zhCount, 'JA:', jaCount);
