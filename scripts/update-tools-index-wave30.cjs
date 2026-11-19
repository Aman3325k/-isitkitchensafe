const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '../src/pages/[lang]/tools/index.astro');
let content = fs.readFileSync(filePath, 'utf8');

const cards = {
  es: `      {
        slug: 'electric-kettle-descaling-leaching-simulator',
        badge: 'Pautas OMS · Instituto BfR · Microplásticos',
        badgeClass: 'bg-signature-coral text-white',
        title: 'Simulador de Lixiviación de Níquel, Microplásticos y Descalcificación en Hervidores',
        desc: 'Calcula la lixiviación de níquel tóxico (>70 µg/L), microplásticos en hervidores de plástico y la descalcificación segura con ácido cítrico frente a vinagre.',
        cta: 'Simular Lixiviación y Descalcificación',
        ctaClass: 'bg-signature-coral hover:bg-signature-coral/90 text-white'
      },
`,
  pt: `      {
        slug: 'electric-kettle-descaling-leaching-simulator',
        badge: 'Diretrizes OMS · Instituto BfR · Microplásticos',
        badgeClass: 'bg-signature-coral text-white',
        title: 'Simulador de Lixiviação de Níquel, Microplásticos e Descalcificação de Chaleiras',
        desc: 'Simule a migração de íons de níquel (>70 µg/L), liberação de microplásticos em chaleiras de plástico e descalcificação segura com ácido cítrico vs vinagre.',
        cta: 'Simular Lixiviação de Chaleira',
        ctaClass: 'bg-signature-coral hover:bg-signature-coral/90 text-white'
      },
`,
  'zh-cn': `      {
        slug: 'electric-kettle-descaling-leaching-simulator',
        badge: 'WHO 饮水标准 · 德国 BfR 报告 · 微塑料测试',
        badgeClass: 'bg-signature-coral text-white',
        title: '电热水壶重金属镍析出、微塑料释放与科学除垢模拟器',
        desc: '测算电水壶发热盘重金属镍析出浓度（>70 µg/L）、塑料内胆 100°C 沸水微塑料脱落量及柠檬酸与白醋除垢化学反应。',
        cta: '模拟电水壶重金属与除垢',
        ctaClass: 'bg-signature-coral hover:bg-signature-coral/90 text-white'
      },
`,
  ja: `      {
        slug: 'electric-kettle-descaling-leaching-simulator',
        badge: 'WHO飲水基準 · ドイツBfR · 微細プラ実証研究',
        badgeClass: 'bg-signature-coral text-white',
        title: '電気ケトルのニッケル溶出・微細プラスチック＆安全除垢シミュレーター',
        desc: '電気ケトルのヒーター底板からのニッケル溶出（>70 µg/L）、プラスチック内壁の微細プラ放出、クエン酸対食酢の脱スケール化学反応をシミュレート。',
        cta: 'ケトル溶出・洗浄診断',
        ctaClass: 'bg-signature-coral hover:bg-signature-coral/90 text-white'
      },
`
};

const pattern = /      \{\r?\n        slug: 'air-fryer-liner-fire-hazard-simulator'/g;
let match;
const indices = [];
while ((match = pattern.exec(content)) !== null) {
  indices.push(match.index);
}
console.log('Found air-fryer-liner matches in [lang]/tools/index.astro:', indices.length);

const toInsert = [];
indices.forEach(idx => {
  const before = content.slice(Math.max(0, idx - 20000), idx);
  let loc = 'es';
  const lastES = before.lastIndexOf('es: {');
  const lastPT = before.lastIndexOf('pt: {');
  const lastZH = before.lastIndexOf("'zh-cn': {");
  const lastJA = before.lastIndexOf('ja: {');
  const maxPos = Math.max(lastES, lastPT, lastZH, lastJA);
  if (maxPos === lastPT) loc = 'pt';
  else if (maxPos === lastZH) loc = 'zh-cn';
  else if (maxPos === lastJA) loc = 'ja';
  else loc = 'es';
  toInsert.push({ idx, loc, card: cards[loc] });
});

for (let i = toInsert.length - 1; i >= 0; i--) {
  const item = toInsert[i];
  content = content.slice(0, item.idx) + item.card + content.slice(item.idx);
}

fs.writeFileSync(filePath, content, 'utf8');
console.log('Successfully updated src/pages/[lang]/tools/index.astro');
