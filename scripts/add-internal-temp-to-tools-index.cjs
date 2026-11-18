const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '../src/pages/[lang]/tools/index.astro');
let content = fs.readFileSync(filePath, 'utf8');

// 1. ES essentialTools addition (around line 8562)
const esTarget = `        btn: 'Abrir Buscador de Horno &rarr;',
        btnClass: 'bg-rose-700 hover:bg-rose-800 text-white'
      }
    ]
  },
  pt: {`;

const esReplacement = `        btn: 'Abrir Buscador de Horno &rarr;',
        btnClass: 'bg-rose-700 hover:bg-rose-800 text-white'
      },
      {
        slug: 'internal-cooking-temp-chart',
        badge: 'NUEVO • Temperaturas USDA',
        badgeClass: 'bg-emerald-700 text-white',
        sub: '24 Alimentos • Guía de Sonda',
        title: 'Tabla de Temperaturas Internas Seguras de Cocción (USDA)',
        desc: 'Consulta en vivo de temperaturas mínimas seguras, tiempos de reposo y colocación del termómetro para aves, carnes, pescados, huevos y sobras en °C y °F.',
        meta1Label: 'Alimentos y Cortes:',
        meta1Val: 'Pollo, Pavo, Res, Cerdo, Pescados, Huevos y Sobras',
        meta2Label: 'Pautas Sanitarias:',
        meta2Val: 'Mínimos USDA • Tiempos de Reposo • Sonda Digital',
        btn: 'Abrir Tabla de Temperaturas &rarr;',
        btnClass: 'bg-emerald-700 hover:bg-emerald-800 text-white'
      }
    ]
  },
  pt: {`;

if (!content.includes(esTarget)) {
  console.error('Failed to match ES target');
  process.exit(1);
}
content = content.replace(esTarget, esReplacement);

// 2. PT newTools addition
const ptNewTarget = `        cta: 'Consultar Limites de Forno',
        ctaClass: 'bg-rose-700 hover:bg-rose-800 text-white'
      }
    ],
    essentialTools: [`;

const ptNewReplacement = `        cta: 'Consultar Limites de Forno',
        ctaClass: 'bg-rose-700 hover:bg-rose-800 text-white'
      },
      {
        slug: 'internal-cooking-temp-chart',
        badge: 'USDA FSIS 24 Alimentos',
        badgeClass: 'bg-emerald-700 text-white',
        title: 'Tabela de Temperaturas Internas Seguras de Cozimento (USDA)',
        desc: 'Consulta interativa de temperaturas mínimas seguras, tempo de descanso e uso do termômetro para aves, carnes, peixes, ovos e sobras em °C e °F.',
        cta: 'Consultar Temperaturas USDA',
        ctaClass: 'bg-emerald-700 hover:bg-emerald-800 text-white'
      }
    ],
    essentialTools: [`;

if (!content.includes(ptNewTarget)) {
  console.error('Failed to match PT new target');
  process.exit(1);
}
content = content.replace(ptNewTarget, ptNewReplacement);

// 3. PT essentialTools addition
const ptEssTarget = `        btn: 'Abrir Consulta de Forno &rarr;',
        btnClass: 'bg-rose-700 hover:bg-rose-800 text-white'
      }
    ]
  },
  'zh-cn': {`;

const ptEssReplacement = `        btn: 'Abrir Consulta de Forno &rarr;',
        btnClass: 'bg-rose-700 hover:bg-rose-800 text-white'
      },
      {
        slug: 'internal-cooking-temp-chart',
        badge: 'NOVO • Ponto e Segurança USDA',
        badgeClass: 'bg-emerald-700 text-white',
        sub: '24 Alimentos • Guia de Termômetro',
        title: 'Tabela de Temperaturas Internas Seguras de Cozimento (USDA)',
        desc: 'Verificação em tempo real de temperaturas mínimas seguras oficiais do USDA, ganho residual e posicionamento de sonda para aves, carnes bovinas, suínas, peixes e sobras.',
        meta1Label: 'Alimentos e Cortes:',
        meta1Val: 'Frango, Peru, Bovinos, Suínos, Pescados e Sobras',
        meta2Label: 'Diretrizes Técnicas:',
        meta2Val: 'Mínimos USDA • Tempo de Descanso • Sonda Digital',
        btn: 'Abrir Tabela de Temperaturas &rarr;',
        btnClass: 'bg-emerald-700 hover:bg-emerald-800 text-white'
      }
    ]
  },
  'zh-cn': {`;

if (!content.includes(ptEssTarget)) {
  console.error('Failed to match PT ess target');
  process.exit(1);
}
content = content.replace(ptEssTarget, ptEssReplacement);

// 4. ZH-CN newTools addition
const zhNewTarget = `        cta: '查询烤箱耐温上限',
        ctaClass: 'bg-rose-700 hover:bg-rose-800 text-white'
      }
    ],
    essentialTools: [`;

const zhNewReplacement = `        cta: '查询烤箱耐温上限',
        ctaClass: 'bg-rose-700 hover:bg-rose-800 text-white'
      },
      {
        slug: 'internal-cooking-temp-chart',
        badge: 'USDA FSIS 24 种食材',
        badgeClass: 'bg-emerald-700 text-white',
        title: 'USDA 食品安全烹饪核心温度与熟度速查表',
        desc: '实时查询禽肉、牛肉、猪肉、水产海鲜、蛋品与剩菜的 USDA 安全最低烹饪温度、主厨风味推荐与强制静置时间，支持 °C / °F 双向换算。',
        cta: '查询安全烹饪温度',
        ctaClass: 'bg-emerald-700 hover:bg-emerald-800 text-white'
      }
    ],
    essentialTools: [`;

if (!content.includes(zhNewTarget)) {
  console.error('Failed to match ZH new target');
  process.exit(1);
}
content = content.replace(zhNewTarget, zhNewReplacement);

// 5. ZH-CN essentialTools addition
const zhEssTarget = `        btn: '启动烤箱耐温查询 &rarr;',
        btnClass: 'bg-rose-700 hover:bg-rose-800 text-white'
      }
    ]
  },
  ja: {`;

const zhEssReplacement = `        btn: '启动烤箱耐温查询 &rarr;',
        btnClass: 'bg-rose-700 hover:bg-rose-800 text-white'
      },
      {
        slug: 'internal-cooking-temp-chart',
        badge: '新品 • USDA 烹饪熟度',
        badgeClass: 'bg-emerald-700 text-white',
        sub: '24 种食材 • 探针指南',
        title: 'USDA 食品安全烹饪核心温度与熟度速查表',
        desc: '权威收录美国农业部（USDA）官方认证的 24 类原切肉类、禽肉、水产与日常熟食的安全最低核心温度、主厨风味目标、静置余温增幅与测温探针正确插入位置。',
        meta1Label: '测评食材：',
        meta1Val: '整鸡火鸡、牛排、猪排、三文鱼、汉堡与剩菜',
        meta2Label: '安全指标：',
        meta2Val: 'USDA 灭菌底线 • 强制静置 • 探针测温法',
        btn: '启动安全烹饪温度速查 &rarr;',
        btnClass: 'bg-emerald-700 hover:bg-emerald-800 text-white'
      }
    ]
  },
  ja: {`;

if (!content.includes(zhEssTarget)) {
  console.error('Failed to match ZH ess target');
  process.exit(1);
}
content = content.replace(zhEssTarget, zhEssReplacement);

// 6. JA newTools addition
const jaNewTarget = `        cta: '耐熱上限をチェック',
        ctaClass: 'bg-rose-700 hover:bg-rose-800 text-white'
      }
    ],
    essentialTools: [`;

const jaNewReplacement = `        cta: '耐熱上限をチェック',
        ctaClass: 'bg-rose-700 hover:bg-rose-800 text-white'
      },
      {
        slug: 'internal-cooking-temp-chart',
        badge: 'USDA FSIS 24品目',
        badgeClass: 'bg-emerald-700 text-white',
        title: 'USDA 食品安全中心温度と肉の焼き加減早見表',
        desc: '鶏肉、牛肉、豚肉、魚介類、卵料理、残り物のUSDA公式安全最低中心温度、シェフ推奨目標温度、必須休息時間を°F/°C切り替えで確認。',
        cta: '安全調理温度をチェック',
        ctaClass: 'bg-emerald-700 hover:bg-emerald-800 text-white'
      }
    ],
    essentialTools: [`;

if (!content.includes(jaNewTarget)) {
  console.error('Failed to match JA new target');
  process.exit(1);
}
content = content.replace(jaNewTarget, jaNewReplacement);

// 7. JA essentialTools addition
const jaEssTarget = `        btn: '耐熱ルックアップを開く &rarr;',
        btnClass: 'bg-rose-700 hover:bg-rose-800 text-white'
      }
    ]
  }
};`;

const jaEssReplacement = `        btn: '耐熱ルックアップを開く &rarr;',
        btnClass: 'bg-rose-700 hover:bg-rose-800 text-white'
      },
      {
        slug: 'internal-cooking-temp-chart',
        badge: 'NEW • USDA 安全中心温度',
        badgeClass: 'bg-emerald-700 text-white',
        sub: '24品目 • 温度計プローブガイド',
        title: 'USDA 食品安全中心温度と肉の焼き加減早見表',
        desc: '米国農務省（USDA）公式の安全最低中心温度、旨味を引き出す最適温度、そして肉汁を保つ休息時間を24品目で即座にチェック。プローブの正しい挿入位置も詳しくガイド。',
        meta1Label: '対象食材：',
        meta1Val: '丸鶏・ステーキ・ポークチョップ・サーモン・残り物ほか',
        meta2Label: '衛生基準：',
        meta2Val: 'USDA安全基準 • 必須休息時間 • 中心温度計',
        btn: '安全調理温度早見表を開く &rarr;',
        btnClass: 'bg-emerald-700 hover:bg-emerald-800 text-white'
      }
    ]
  }
};`;

if (!content.includes(jaEssTarget)) {
  console.error('Failed to match JA ess target');
  process.exit(1);
}
content = content.replace(jaEssTarget, jaEssReplacement);

fs.writeFileSync(filePath, content, 'utf8');
console.log('✅ Successfully added internal-cooking-temp-chart to ES, PT, ZH-CN, and JA in [lang]/tools/index.astro');
