const fs = require('fs');
const path = require('path');

const locales = ['en', 'es', 'pt', 'zh-cn', 'ja'];

const toolNames = {
  en: {
    t1_1: 'Air Fryer PAH Thermal Resuspension & Inhalation Modeler',
    t1_2: 'Air Fryer Acrylamide & Maillard Reaction Calculator',
    t1_3: 'Air Fryer Liner Fire Hazard & Airflow Impedance Simulator',
    t2_1: 'Induction Cooktop EMF Radiation & Pacemaker Modeler',
    t2_2: 'Glass Cooktop Fracture & Thermal Stress Simulator',
    t2_3: 'Appliance Thermal Shock & Shatter Threshold Simulator',
    t3_1: 'Refrigerator Defrost Safety & Coil Icing Modeler',
    t3_2: 'Refrigerator Crisper Cross-Contamination Modeler',
    t3_3: 'Fridge Organization & Temperature Zone Planner'
  },
  es: {
    t1_1: 'Simulador de Resuspensión Térmica e Inhalación de HAP en Freidoras de Aire',
    t1_2: 'Calculadora de Acrilamida y Reacción de Maillard en Freidoras de Aire',
    t1_3: 'Simulador de Peligro de Incendio por Revestimientos de Freidora de Aire',
    t2_1: 'Modelador de Campos Electromagnéticos en Placas de Inducción',
    t2_2: 'Simulador de Fractura y Estrés Térmico en Placas Vitrocerámicas',
    t2_3: 'Simulador de Choque Térmico y Rotura de Electrodomésticos',
    t3_1: 'Modelador de Seguridad en Descongelación de Frigoríficos',
    t3_2: 'Modelador de Contaminación Cruzada en Cajones de Frigorífico',
    t3_3: 'Planificador de Zonas de Temperatura y Organización de la Nevera'
  },
  pt: {
    t1_1: 'Simulador de Ressuspensão Térmica e Inalação de HAP em Air Fryers',
    t1_2: 'Calculadora de Acrilamida e Reação de Maillard em Air Fryers',
    t1_3: 'Simulador de Risco de Incêndio por Forros de Air Fryer',
    t2_1: 'Modelador de Campos Eletromagnéticos em Cooktops de Indução',
    t2_2: 'Simulador de Fratura e Estresse Térmico em Placas Vitrocerâmicas',
    t2_3: 'Simulador de Choque Térmico e Ruptura em Eletrodomésticos',
    t3_1: 'Modelador de Segurança no Degelo de Geladeiras',
    t3_2: 'Modelador de Contaminação Cruzada em Gavetas de Geladeira',
    t3_3: 'Planejador de Organização e Zonas de Temperatura na Geladeira'
  },
  'zh-cn': {
    t1_1: '空气炸锅残留油脂热重悬与PAH气溶胶吸入暴露模拟器',
    t1_2: '空气炸锅丙烯酰胺与美拉德反应计算器',
    t1_3: '空气炸锅硅胶与烘焙纸阻热起火风险模拟器',
    t2_1: '电磁炉高频辐射与心脏起搏器安全暴露模拟器',
    t2_2: '玻璃微晶灶台热应力与机械冲击碎裂模拟器',
    t2_3: '厨房电器热震阈值与爆裂模拟器',
    t3_1: '冰箱自动除霜系统安全与蒸发器冰堵模拟器',
    t3_2: '冰箱果蔬保鲜盒冷凝水交叉污染模拟器',
    t3_3: '冰箱分温区食物保鲜收纳规划器'
  },
  ja: {
    t1_1: 'ノンフライヤー蓄積油脂熱再浮遊＆PAH吸入リスクモデラー',
    t1_2: 'ノンフライヤーアクリルアミド＆メイラード反応計算機',
    t1_3: 'ノンフライヤーライナー気流阻害＆発火ハザードシミュレーター',
    t2_1: 'IHクッキングヒーター高周波電磁波＆ペースメーカー安全モデラー',
    t2_2: 'ガラストッププレート熱応力＆衝撃破壊シミュレーター',
    t2_3: '調理家電サーマルショック＆熱割れ閾値シミュレーター',
    t3_1: '冷蔵庫自動霜取り機能安全＆氷結トラブルモデラー',
    t3_2: '冷蔵庫野菜室結露水＆細菌交差汚染モデラー',
    t3_3: '冷蔵庫温度ゾーン別収納プランナー'
  }
};

for (const loc of locales) {
  const filePath = path.resolve(loc === 'en' ? 'src/data/blog.json' : `src/data/blog.${loc}.json`);
  const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));
  const prefix = loc === 'en' ? '' : `/${loc}`;
  const names = toolNames[loc];

  // Guide 1
  const g1 = data.find(b => b.slug === 'air-fryer-pah-pyrolysis-aerosol-inhalation-safety');
  if (g1) {
    g1.relatedTools = [
      { name: names.t1_1, url: `${prefix}/tools/air-fryer-pah-resuspension-modeler/` },
      { name: names.t1_2, url: `${prefix}/tools/air-fryer-acrylamide-calculator/` },
      { name: names.t1_3, url: `${prefix}/tools/air-fryer-liner-fire-hazard-simulator/` }
    ];
  }

  // Guide 2
  const g2 = data.find(b => b.slug === 'induction-cooktop-delamination-thermal-stress-safety');
  if (g2) {
    g2.relatedTools = [
      { name: names.t2_1, url: `${prefix}/tools/induction-cooktop-emf-safety-modeler/` },
      { name: names.t2_2, url: `${prefix}/tools/glass-cooktop-fracture-simulator/` },
      { name: names.t2_3, url: `${prefix}/tools/thermal-shock-simulator/` }
    ];
  }

  // Guide 3
  const g3 = data.find(b => b.slug === 'refrigerator-cold-chain-defrost-failure-listeria-safety');
  if (g3) {
    g3.relatedTools = [
      { name: names.t3_1, url: `${prefix}/tools/refrigerator-defrost-safety-modeler/` },
      { name: names.t3_2, url: `${prefix}/tools/refrigerator-cross-contamination-modeler/` },
      { name: names.t3_3, url: `${prefix}/tools/fridge-organization-zone-planner/` }
    ];
  }

  fs.writeFileSync(filePath, JSON.stringify(data, null, 2) + '\n', 'utf8');
  console.log(`✅ Corrected relatedTools in ${loc.toUpperCase()}: ${filePath}`);
}

console.log('=== FIX COMPLETE ===');
