const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '../src/pages/[lang]/tools/index.astro');
let content = fs.readFileSync(filePath, 'utf8');

const cards = {
  es: `      {
        slug: 'dishwasher-melamine-leaching-simulator',
        badge: 'Dictamen BfR Alemán · Reglamento UE 10/2011 · Notificación FDA',
        badgeClass: 'bg-signature-coral text-white',
        title: 'Simulador de Lixiviación de Formaldehído y Melamina en Lavavajillas',
        desc: 'Calcula la migración de formaldehído tóxico (HCHO) y melamina por calor de lavavajillas (>70°C), detergentes alcalinos cáusticos, microfisuras y microondas.',
        cta: 'Simular Lixiviación de Melamina',
        ctaClass: 'bg-signature-coral hover:bg-signature-coral/90 text-white'
      },
`,
  pt: `      {
        slug: 'dishwasher-melamine-leaching-simulator',
        badge: 'Parecer Alemão BfR · Regulamento UE 10/2011 · Notificação FDA',
        badgeClass: 'bg-signature-coral text-white',
        title: 'Simulador de Lixiviação de Formaldeído e Melamina em Lava-Louças',
        desc: 'Simule a migração de formaldeído (HCHO) e monômero de melamina sob ciclos térmicos de lava-louças (>70°C), pastilhas alcalinas, riscos e danos de micro-ondas.',
        cta: 'Simular Lixiviação de Melamina',
        ctaClass: 'bg-signature-coral hover:bg-signature-coral/90 text-white'
      },
`,
  'zh-cn': `      {
        slug: 'dishwasher-melamine-leaching-simulator',
        badge: '德国 BfR 报告 · 欧盟 10/2011 法规 · FDA 通报',
        badgeClass: 'bg-signature-coral text-white',
        title: '洗碗机密胺餐具甲醛与三聚氰胺溶出化学模拟器',
        desc: '科学测算密胺（仿瓷）餐具在洗碗机高温烘干（>70°C）、强碱性洗碗块（pH > 10.5）、刀叉划痕及微波加热下的甲醛与三聚氰胺单体迁移浓度。',
        cta: '模拟密胺甲醛溶出',
        ctaClass: 'bg-signature-coral hover:bg-signature-coral/90 text-white'
      },
`,
  ja: `      {
        slug: 'dishwasher-melamine-leaching-simulator',
        badge: 'ドイツBfR見解 · EU規則 10/2011 · 米国FDAガイダンス',
        badgeClass: 'bg-signature-coral text-white',
        title: '食洗機メラミン食器のホルムアルデヒド・メラミン溶出シミュレーター',
        desc: '食洗機の高温洗浄乾燥（70°C以上）、強アルカリ洗剤、カトラリー傷、電子レンジ誤加熱によるメラミンおよびホルムアルデヒドの食品移行濃度を科学的に予測。',
        cta: 'メラミン溶出診断を開始',
        ctaClass: 'bg-signature-coral hover:bg-signature-coral/90 text-white'
      },
`
};

const pattern = /      \{\r?\n        slug: 'electric-kettle-descaling-leaching-simulator'/g;
let match;
const indices = [];
while ((match = pattern.exec(content)) !== null) {
  indices.push(match.index);
}
console.log('Found electric-kettle matches in [lang]/tools/index.astro:', indices.length);

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
console.log('Successfully updated src/pages/[lang]/tools/index.astro with melamine simulator');
