const fs = require('fs');
const path = require('path');

const waveDate = '2026-11-22';

console.log('=== GENERATING WAVE 56 PORTUGUESE SAFETY GUIDES (83 -> 86) ===');

const newGuidesPt = [
  {
    slug: 'copper-cookware-tin-lining-verdigris-poisoning-safety',
    title: 'Segurança em Utensílios de Cobre com Revestimento de Estanho: Integridade do Estanho (Fusão a 231,9 °C), Intoxicação por Azinhavre e Cinética de Lixiviação Ácida',
    excerpt: 'Cozinhar em panelas de cobre com estanho desgastado é tóxico? Conheça a química do azinhavre (carbonato básico de cobre), o baixo ponto de fusão do estanho (231,9 °C), o critério da moeda para reestanhagem e a toxicologia do cobre.',
    description: 'Guia técnico detalhado sobre segurança em panelas de cobre estanhadas: cinética de dissolução ácida, formação de azinhavre (verdete), limites toxicológicos e normas de reestanhagem artesanal.',
    summary: 'O cobre puro é excepcional condutor térmico, mas quimicamente reativo. O estanho virgem isola o alimento, mas funde a 231,9 °C. Se o cobre exposto ultrapassar 1 cm², ácidos culinários lixiviam íons cúpricos tóxicos, provocando intoxicação aguda.',
    date: waveDate,
    readTime: '9 min de leitura',
    author: 'IsItKitchenSafe',
    keyTakeaways: [
      'O estanho puro (Sn) tem ponto de fusão de apenas 231,9 °C (449,4 °F); pré-aquecer uma panela de cobre vazia derrete o revestimento em menos de 90 segundos.',
      'O azinhavre ou verdete (carbonato básico de cobre [Cu2(OH)2CO3] e acetato cúprico) surge rapidamente pela ação de umidade e ácidos; a ingestão causa toxicose aguda com náuseas severas, vômitos esverdeados e lesão hepatorrenal.',
      'Critério da moeda: se as áreas de cobre cru visíveis no interior da panela somarem mais que o tamanho de uma moeda de 1 real ou 1 euro (>1 cm²), a peça deve ser retirada do fogão e reestanhada.',
      'Ingredientes ácidos com pH < 4,5 (tomate, vinho branco, vinagre, limão) aceleram drasticamente a corrosão do cobre cru, superando com facilidade o limite diário seguro de 10 mg/dia.',
      'A reestanhagem tradicional deve usar exclusivamente estanho virgem de pureza alimentar (>99,75% Sn, norma ASTM B339), estritamente isento de chumbo ou cádmio.'
    ],
    intro: 'As panelas e caçarolas de cobre maciço representam o ápice da precisão culinária profissional graças à sua extraordinária condutividade térmica (cerca de 390 W/m·K), superando amplamente o ferro fundido e o aço inoxidável. Contudo, o cobre metálico é um elemento eletropositivo de transição que reage com extrema facilidade na presença de ácidos orgânicos, umidade e oxigênio. Para evitar a contaminação direta dos alimentos, as caldeirarias artesanais aplicam tradicionalmente uma fina camada de estanho virgem ("estanhagem a fogo"). No entanto, o estanho é um metal macio e de ponto de fusão muito baixo (231,9 °C). Quando o revestimento se desgasta pelo atrito de talheres ou se funde por superaquecimento a seco, o cobre exposto reage rapidamente formando azinhavre (verdete), um sal altamente tóxico capaz de desencadear quadros clínicos agudos de intoxicação gastrointestinal e falência hepática.',
    sections: [
      {
        title: '1. Metalurgia da Estanhagem: Ponto de Fusão Baixo (231,9 °C), Fases Intermetálicas e Choque Térmico',
        content: 'O revestimento de estanho tradicional é aplicado fundindo estanho virgem sobre a superfície aquecida do cobre decapa com cloreto de amônio, espalhando o metal líquido com um chumaço de algodão ou estopa. Esse processo estabelece uma camada de ligação intermetálica tenaz formada pelas fases Cu6Sn5 e Cu3Sn. No entanto, a camada protetora superficial de estanho puro possui um calcanhar de Aquiles termomecânico: ela funde a meros 231,9 °C (449,4 °F). Em uma boca de fogão a gás ou cooktop de indução de alta potência, uma panela de cobre vazia ultrapassa 250 °C em pouco mais de 60 a 90 segundos. A essa temperatura, o estanho entra em estado líquido, aglomera-se em pequenas gotas e oxida-se em dióxido de estanho (SnO2), expondo o cobre subjacente. Por isso, panelas estanhadas nunca devem ser aquecidas vazias nem empregadas para selar carnes em calor extremo.',
        type: 'warning',
        boxText: 'O estanho derrete a 231,9 °C. Aquecer uma panela de cobre vazia liquefaz o revestimento interno em segundos, expondo o metal tóxico.'
      },
      {
        title: '2. Química do Azinhavre (Verdete): Formação de Carbonato Básico de Cobre [Cu2(OH)2CO3] e Acetato Cúprico',
        content: 'Quando o cobre puro entra em contato com o ar ambiente, umidade e dióxido de carbono, ele não cria uma película passiva inerte como o inox. Em vez disso, desenvolve uma camada incrustada verde-azulada e porosa: o azinhavre ou verdete. Quimicamente, trata-se de carbonato básico de cobre [CuCO3·Cu(OH)2] associado a hidróxido de cobre e, se exposto a vapores de vinho ou vinagre, acetato de cobre hidratado [Cu(CH3COO)2·2H2O]. Quando um molho ácido (pH < 4,5, como tomate, reduções de vinho ou suco de limão) entra em contato com essa crosta verde, os íons hidrônio (H⁺) atacam o complexo imediatamente: Cu2(OH)2CO3 + 4H⁺ → 2Cu²⁺ + CO2↑ + 3H2O. Esta reação dissolve instantaneamente o sal insolúvel, inundando a receita com cátions cúpricos livres (Cu²⁺) altamente biodisponíveis.',
        type: 'warning',
        boxText: 'O azinhavre verde se dissolve imediatamente na presença de ácidos culinários (tomate, limão, vinho), liberando íons Cu²⁺ nocivos na comida.'
      },
      {
        title: '3. Toxicologia Médica da Ingestão de Cobre: Absorção Duodenal, Reação de Fenton e Toxicose Cúprica Aguda',
        content: 'O cobre é um micronutriente essencial para enzimas celulares, mas em concentrações elevadas atua como um potente veneno pró-oxidante via reações de Haber-Weiss e Fenton. Doses agudas de cobre solúvel acima de 15 a 30 mg (uma única porção de molho ácido cozido em cobre oxidado pode conter mais de 45 mg) causam queimação epigástrica imediata e corrosão da mucosa gástrica. Os sintomas surgem em 15 a 45 minutos: náuseas intratáveis, cólicas abdominais violentas e vômitos típicos de coloração verde-esmeralda ou azulada (devido aos sais cúpricos), frequentemente acompanhados de diarreia aquosa. A absorção sistêmica sobrecarrega a ceruloplasmina, gerando hemólise intravascular, metemoglobinemia e necrose tubular renal. Para indivíduos com Doença de Wilson (defeito genético na excreção biliar de cobre), essa carga pode desencadear cirrose fulminante e danos neurológicos graves.',
        type: 'warning',
        boxText: 'A intoxicação por cobre causa vômitos azul-esverdeados, cólicas severas e hemólise; portadores de Doença de Wilson correm risco letal.'
      },
      {
        title: '4. Critério de Inspeção da "Regra da Moeda": Como Avaliar o Desgaste e o Momento Exato de Reestanhar',
        content: 'A integridade do estanho deve ser monitorada periodicamente: 1) Limpeza diagnóstica: Lave a panela com detergente neutro e esponja macia. O estanho em uso escurece gradativamente para um tom cinza-chumbo ou grafite; isso é óxido de estanho inofensivo e não indica desgaste. 2) O Critério da Moeda: Observe atentamente o fundo e as laterais internas. Se manchas alaranjadas ou avermelhadas de cobre metálico puro despontarem sob o estanho e a soma de suas áreas ultrapassar a superfície de uma moeda de 1 real ou 1 euro (~1 cm² a 2 cm²), a panela perdeu a barreira de segurança sanitária. 3) Presença de pontos verdes: Qualquer vestígio de pó ou cristal verde de azinhavre exige interrupção imediata do uso da peça até a remoção química e reestanhagem integral.',
        type: 'tip',
        boxText: 'Estanho oxidado cinza escuro é totalmente seguro; porém, manchas alaranjadas de cobre do tamanho de uma moeda de 1 real exigem reestanhagem.'
      },
      {
        title: '5. Normas e Boas Práticas de Reestanhagem: Pureza do Estanho (>99,75% Sn) e Utensílios Recomendados',
        content: 'A reestanhagem profissional preserva panelas de cobre por gerações, desde que respeitados critérios técnicos: 1) Certificação do estanho virgem: Ao contratar um latoeiro ou artesão, exija comprovação de estanho virgem de pureza alimentar (>99,75% de Sn conforme norma ASTM B339 ou BS EN 610), com teores residuais de chumbo inferiores a 0,01% (antigamente usava-se solda de chumbo tóxica). 2) Utensílios não abrasivos: Em panelas estanhadas, use unicamente espátulas de silicone culinário ou colheres de madeira; batedores de arame, colheres de metal e facas riscam facilmente o estanho (dureza Mohs do estanho ≈ 1,5 vs 3,0 do cobre). 3) Controle de temperatura: Cozinhe em fogo baixo a médio e sempre coloque óleo, manteiga ou líquidos antes de acender o queimador.',
        type: 'info',
        boxText: 'Exija sempre estanho virgem certificado (>99,75% Sn, livre de chumbo). Utilize apenas utensílios de madeira ou silicone para evitar riscos.'
      }
    ],
    conclusion: 'As panelas de cobre revestidas de estanho combinam o melhor desempenho térmico do mundo gastronômico com a segurança de um revestimento biocompatível. Entretanto, o estanho é frágil ao calor excessivo e funde a 231,9 °C. Respeite as regras de uso em fogo médio, evite preaquecimento a seco e monitore a regra da moeda: assim que o cobre alaranjado despontar em áreas superiores a 1 cm² ou surgirem vestígios de azinhavre verde, envie a peça para reestanhagem com estanho virgem isento de chumbo.',
    faqs: [
      {
        question: 'O interior da minha panela de cobre estanhada ficou cinza escuro. Preciso mandar estanhar?',
        answer: 'Não. O escurecimento do estanho para um tom cinza opaco ou grafite é uma oxidação superficial natural e totalmente atóxica. Desde que não haja pontos alaranjados de cobre despontando por baixo, a panela está perfeita para cozinhar com segurança.'
      },
      {
        question: 'Posso limpar o azinhavre verde com limão e sal e continuar cozinhando normalmente?',
        answer: 'Limpar com limão e sal remove a crosta verde superficial, mas deixa o cobre cru desprotegido no local. Se você cozinhar novamente sobre essa área exposta com alimentos ácidos, o cobre voltará a lixiviar imediatamente. A limpeza com ácido é apenas o passo inicial antes de enviar para reestanhagem.'
      },
      {
        question: 'Qual a diferença entre cobre estanhado e cobre revestido internamente com aço inoxidável?',
        answer: 'O cobre bi-metal (revestido com lâmina de inox, como Mauviel M250 ou Falk) suporta temperaturas altíssimas e não derrete no fogo, permitindo selar carnes com força. Porém, não pode ser recuperado caso o inox descole. O cobre estanhado possui antiaderência natural superior e pode ser reestanhado infinitas vezes, mas exige calor brando.'
      },
      {
        question: 'Restaurantes profissionais podem utilizar tachos de cobre puro sem revestimento?',
        answer: 'Pelas normas da ANVISA no Brasil, FDA nos EUA e diretivas da UE, é estritamente proibido cozinhar alimentos com pH abaixo de 6,0 em cobre cru. O uso de tachos de cobre sem revestimento é autorizado apenas para caldas de açúcar, geleias e doces tradicionais, onde o alto teor de açúcar inibe a corrosão, ou para bater claras em neve.'
      },
      {
        question: 'Quais os primeiros socorros caso alguém consuma comida contaminada com azinhavre de cobre?',
        answer: 'Interrompa a ingestão imediatamente. Não induza o vômito caso haja sensação de queimação esofágica. Busque atendimento médico hospitalar imediato. O tratamento de emergência envolve lavagem gástrica, reposição hidroeletrolítica e, em casos de toxicose grave, quelação sistêmica com D-penicilamina.'
      }
    ],
    relatedTools: [
      {
        name: 'Modelador de Toxicidade e Lixiviação em Panelas de Cobre',
        url: '/pt/tools/copper-cookware-toxicity-modeler/'
      },
      {
        name: 'Placar de Lixiviação Tóxica e Metais Pesados',
        url: '/pt/tools/toxic-leaching-scorecard/'
      },
      {
        name: 'Índice de Transparência de Marcas de Panelas',
        url: '/pt/tools/cookware-brand-transparency-index/'
      }
    ],
    relatedComparisons: [
      {
        name: 'Comparativo de Cobre Estanhado vs Cobre Revestido de Inox',
        url: '/pt/compare/tin-lined-vs-stainless-lined-copper/'
      },
      {
        name: 'Comparativo de Panelas de Cobre vs Aço Inoxidável',
        url: '/pt/compare/copper-vs-stainless-steel-cookware/'
      },
      {
        name: 'Comparativo de Fundo de Cobre vs Inox Tri-Ply',
        url: '/pt/compare/copper-core-vs-tri-ply-stainless-steel/'
      }
    ]
  },
  {
    slug: 'stainless-steel-nickel-chromium-acid-leaching-safety',
    title: 'Lixiviação de Níquel e Cromo em Panelas de Inox com Alimentos Ácidos: Limites SRL do Conselho da Europa, Alergia SNAS e Alternativas Grau 430',
    excerpt: 'Cozinhar molho de tomate ou reduções com vinagre em panelas de inox libera níquel e cromo tóxicos? Entenda a cinética de dissolução ácida, os limites da Resolução CM/Res(2013)9 e a proteção para alérgicos.',
    description: 'Análise técnica da migração de metais pesados em aço inoxidável: diferenças entre ligas 304, 316 e 430, limites europeus de liberação específica (SRL) e controle da síndrome de alergia ao níquel.',
    summary: 'O aço inox 304/316 possui níquel e cromo protegidos por filme passivo de Cr2O3. Cocções ácidas prolongadas dissolvem esse filme, liberando íons Ni²⁺ e Cr³⁺. Panelas novas liberam até 10 vezes mais metais que panelas já curadas.',
    date: waveDate,
    readTime: '9 min de leitura',
    author: 'IsItKitchenSafe',
    keyTakeaways: [
      'O aço inoxidável austenítico 304 (18/10) possui de 8% a 10,5% de níquel e 18% a 20% de cromo; o ferrítico 430 é praticamente livre de níquel (<0,5% Ni).',
      'Ferver molhos ácidos (tomate, vinho, vinagre, limão, pH 3,0–3,8) a 100 °C por 2 a 6 horas corrói a película de Cr2O3, liberando íons de níquel (Ni²⁺) e cromo trivalente (Cr³⁺).',
      'A Resolução CM/Res(2013)9 do Conselho da Europa fixa Limites de Liberação Específica (SRL) rigorosos: 0,14 mg/kg de alimento para Níquel e 0,25 mg/kg para Cromo.',
      'Panelas de inox novas liberam de 5 a 10 vezes mais metais nos primeiros usos; ferver água com 10% de vinagre antes da primeira utilização acelera a passivação protetora.',
      'Pessoas com Síndrome de Alergia Sistêmica ao Níquel (SNAS) ou eczema disidrótico devem optar por panelas de aço inox 430 sem níquel, vidro borossilicato ou ferro esmaltado.'
    ],
    intro: 'O aço inoxidável consolidou-se como o material padrão da gastronomia moderna mundial por sua durabilidade mecânica, resistência estrutural e aparente inércia química. Não obstante, sob o prisma da ciência dos materiais e da toxicologia dos alimentos, o inox não é completamente inerte. As ligas culinárias mais comuns —o aço austenítico AISI 304 (frequentemente rotulado como 18/8 ou 18/10) e o AISI 316— contêm concentrações expressivas de níquel (8% a 10,5%) e cromo (18% a 20%). Toda a sua resistência à corrosão baseia-se em uma película passiva nanométrica de óxido de cromo (Cr2O3) de meros 1 a 3 nanômetros de espessura. Quando submetida a cozimentos lentos e prolongados de receitas ácidas na presença de sal (íons cloreto), essa camada passiva sofre microdissolução e corrosão por pites, transferindo íons metálicos solúveis para os alimentos.',
    sections: [
      {
        title: '1. Metalurgia e Passivação: Estrutura Austenítica (304/316) vs Ferrítica (430) e Formação do Filme de Cr2O3',
        content: 'O aço inoxidável culinário divide-se primariamente em duas famílias cristalográficas. A série austenítica 300 (AISI 304 com 18% Cr e 8–10% Ni; AISI 316 com 16–18% Cr, 10–14% Ni e 2–3% Mo) adota uma estrutura cúbica de faces centradas (FCC) viabilizada pelo níquel, que estabiliza a fase austenítica em temperatura ambiente, conferindo ductilidade e brilho espelhado. Já a série ferrítica 400 (como o AISI 430, contendo 16–18% Cr e <0,5% Ni) possui estrutura cúbica de corpo centrado (BCC), é magnética e não depende de níquel. Em ambas, a resistência à oxidação provém do cromo, que reage com o oxigênio atmosférico gerando uma película passiva de óxido de cromo (Cr2O3). No entanto, esse filme sofre degradação em ambientes com baixo pH e íons cloreto.',
        type: 'info',
        boxText: 'O inox 304 (18/10) leva de 8% a 10% de níquel para conferir maleabilidade; o inox 430 é ferrítico, magnético e praticamente livre de níquel.'
      },
      {
        title: '2. Cinética de Lixiviação Ácida: Efeito do Tempo de Fervura (2–6 h), Acidez e Corrosão por Pites por Cloretos',
        content: 'A taxa de liberação metálica do inox para os alimentos obedece a uma cinética dependente do pH, temperatura e tempo de cocção. Ao preparar molhos de tomate caseiros (pH 3,8–4,2), vinha-d\'alhos ou reduções ao vinho (pH 3,0–3,5) sob fervura contínua (100 °C), os íons hidrônio atacam microdefeitos no filme de Cr2O3. Adicionar sal refinado (NaCl) na água fria antes de ferver agrava severamente a corrosão: os íons cloreto depositam-se nas imperfeições do metal, provocando microporosidades galvânicas conhecidas como corrosão por pites (pitting). Testes analíticos indicam que após 6 horas de cozimento ácido, a liberação de níquel pode atingir entre 0,12 e 0,35 mg/kg, e a de cromo entre 0,15 e 0,40 mg/kg, beirando ou ultrapassando os tetos europeus regulamentares.',
        type: 'warning',
        boxText: 'Ferver molho de tomate por várias horas e adicionar sal com a água fria corrói o filme de Cr2O3, aumentando a lixiviação de níquel e cromo.'
      },
      {
        title: '3. Parâmetros Regulatórios Internacionais: Limites de Liberação Específica (SRL) do Conselho da Europa',
        content: 'Para salvaguardar os consumidores contra a contaminação crônica por metais de panelas e recipientes, o Conselho da Europa promulgou a Resolução CM/Res(2013)9. Esta norma estabelece Limites de Liberação Específica (SRL, Specific Release Limits) avaliados em ensaios com simulante de ácido cítrico a 0,5% a 100 °C durante 2 horas: o teto máximo de migração para o Níquel é de 0,14 mg/kg de alimento e para o Cromo é de 0,25 mg/kg. Por sua vez, a EFSA (Autoridade Europeia de Segurança dos Alimentos) estabeleceu a Ingestão Diária Tolerável (TDI) de níquel em 13 µg/kg de peso corporal. Para um indivíduo de 60 kg, uma única refeição com molho ácido muito concentrado preparado em panela nova pode corresponder a mais de 50% de todo o níquel tolerável para o dia.',
        type: 'info',
        boxText: 'A norma do Conselho da Europa limita a liberação (SRL) em 0,14 mg/kg para níquel e 0,25 mg/kg para cromo em utensílios culinários.'
      },
      {
        title: '4. Toxicologia e Imunologia: Síndrome de Alergia Sistêmica ao Níquel (SNAS) e Formas de Cromo (Cr³⁺ vs Cr⁶⁺)',
        content: 'O níquel é o alérgeno de contato mais comum no mundo, afetando cerca de 10% a 15% das mulheres adultas. Em pessoas previamente sensibilizadas, o níquel ingerido na alimentação causa a Síndrome de Alergia Sistêmica ao Níquel (SNAS), provocando crises de eczema disidrótico nas mãos, prurido difuso, cólicas e enxaquecas. Por outro lado, quanto ao cromo desprendido em preparações culinárias, análises espectrométricas confirmam que ele se encontra exclusivamente sob a forma de cromo trivalente (Cr³⁺). Esta forma química possui baixíssima absorção intestinal (<1%) e é amplamente atóxica nas doses de cocção. O cromo hexavalente (Cr⁶⁺), conhecido carcinógeno industrial, não se forma nas condições físico-químicas redutoras dos alimentos.',
        type: 'warning',
        boxText: 'O níquel ingerido provoca crises de eczema e dores digestivas em alérgicos (SNAS); o cromo desprendido é Cr³⁺ inofensivo, não o carcinógeno Cr⁶⁺.'
      },
      {
        title: '5. Protocolo de Pré-Passivação com Vinagre e Recomendações para Consumidores Sensíveis',
        content: 'Para minimizar o risco de migração de metais pesados: 1) Passivação de fábrica em casa: Antes do primeiro uso de qualquer panela nova de aço inox, encha-a com água adicionada de 10% de vinagre branco ou suco de limão e ferva por 30 minutos em fogo brando. Descarte o líquido e lave normalmente; esse procedimento remove resíduos de polimento industrial e acelera o adensamento do filme de Cr2O3. 2) Regra do sal fervente: Jamais adicione sal em água fria; adicione o sal somente quando a água estiver em ebulição plena e mexa de imediato para dissolver os grãos. 3) Opção por Inox Grau 430: Pacientes com diagnóstico de SNAS devem migrar seus utensílios para panelas de aço ferrítico AISI 430 (livre de níquel), ferro esmaltado com vidro borossilicato.',
        type: 'tip',
        boxText: 'Ferva água com 10% de vinagre por 30 minutos em qualquer panela de inox nova para criar uma camada passiva espessa e bloquear o níquel.'
      }
    ],
    conclusion: 'O aço inoxidável permanece entre os materiais culinários mais duráveis e higiênicos do mundo, mas exige atenção em preparos ácidos demorados. As ligas 304 e 316 desprendem pequenas quantidades de níquel e cromo, que se reduzem drasticamente com o uso e passivação prévia. Para a maioria das pessoas, esses níveis são perfeitamente seguros perante as normas SRL; porém, para portadores de alergia ao níquel (SNAS), a substituição por aço inoxidável ferrítico 430 ou ferro fundido esmaltado é uma intervenção médica primordial.',
    faqs: [
      {
        question: 'Minha panela de inox nova deixou um gosto metálico na sopa. Por que isso ocorreu?',
        answer: 'Utensílios de inox recém-saídos da fábrica contêm micropartículas superficiais e poeira residual de polimento ricas em níquel e cromo livres. Nas primeiras 2 a 3 utilizações com ácidos, a lixiviação pode ser até 10 vezes maior. Ferver água com vinagre antes da primeira refeição elimina essas impurezas e passiva o metal.'
      },
      {
        question: 'Como descubro em casa se minha panela de inox possui níquel ou não?',
        answer: 'Utilize um ímã de geladeira forte. Se o ímã grudar com firmeza no fundo e também nas paredes laterais da panela, trata-se de inox ferrítico (série 400, como AISI 430, isento de níquel). Se o ímã não grudar nas paredes laterais, é inox austenítico (série 300, como 304 ou 316, contendo 8% a 10% de níquel).'
      },
      {
        question: 'O aço inox 316 libera menos níquel do que o inox 304?',
        answer: 'O aço 316 contém 2% a 3% de molibdênio, o que confere excelente resistência contra corrosão por sal e cloretos. Entretanto, ele contém de 10% a 14% de níquel (ainda mais do que o 304). Se o cozimento for extremamente ácido e prolongado, ele ainda pode liberar pequenas frações de níquel.'
      },
      {
        question: 'É seguro guardar sobras de comida com molho de tomate dentro da panela de inox na geladeira?',
        answer: 'Não é aconselhável. O contato ácido e salino por 24 a 48 horas continuadas corrói o filme de óxido mesmo em temperatura fria, elevando substancialmente a migração de íons metálicos para o alimento. Sempre transfira as sobras para potes de vidro herméticos.'
      },
      {
        question: 'O cromo que se desprende das panelas de aço inox pode causar câncer?',
        answer: 'Não. O cromo cancerígeno é o cromo hexavalente [Cr(VI)], comum em cromagem industrial e tintas. O cromo lixiviado em meio culinário é estritamente cromo trivalente [Cr(III)], que não é carcinogênico e possui taxa de absorção no organismo inferior a 1%.'
      }
    ],
    relatedTools: [
      {
        name: 'Placar de Lixiviação Tóxica e Metais Pesados',
        url: '/pt/tools/toxic-leaching-scorecard/'
      },
      {
        name: 'Índice de Transparência de Marcas de Panelas',
        url: '/pt/tools/cookware-brand-transparency-index/'
      },
      {
        name: 'Simulador de Choque Térmico em Vidro e Esmalte',
        url: '/pt/tools/thermal-shock-simulator/'
      }
    ],
    relatedComparisons: [
      {
        name: 'Comparativo de Inox 304 vs Inox 316',
        url: '/pt/compare/304-vs-316-stainless-steel-cookware/'
      },
      {
        name: 'Comparativo de Panelas de Cobre vs Aço Inoxidável',
        url: '/pt/compare/copper-vs-stainless-steel-cookware/'
      },
      {
        name: 'Comparativo de Aço Inox vs Ferro Fundido Esmaltado',
        url: '/pt/compare/stainless-steel-vs-enamel-cookware/'
      }
    ]
  },
  {
    slug: 'pewter-vintage-cookware-lead-toxicity-safety',
    title: 'Toxicidade do Chumbo em Utensílios de Peltre Vintage: Ligas Históricas (15–40% Pb), Extração por Bebidas Ácidas e Padrões Modernos Livres de Chumbo',
    excerpt: 'Beber vinho, cerveja ou cidra em canecas de peltre antigo é perigoso? Conheça a metalurgia do peltre com chumbo, a formação do acetato de chumbo ("açúcar de chumbo"), os limites de neurotoxicidade do CDC e métodos de teste.',
    description: 'Guia especializado sobre os perigos toxicológicos do peltre antigo: concentração histórica de chumbo, cinética de lixiviação por ácidos, manifestações de saturnismo e normas de aposentadoria de peças.',
    summary: 'O peltre fabricado antes de 1970 continha até 40% de chumbo. Bebidas ácidas como vinho, sidra ou cerveja dissolvem o chumbo formando acetato de chumbo neurotóxico. Louças de peltre vintage devem ser usadas unicamente como decoração.',
    date: waveDate,
    readTime: '9 min de leitura',
    author: 'IsItKitchenSafe',
    keyTakeaways: [
      'O peltre tradicional e vintage produzido antes de 1970 continha comumente entre 15% e 40% de chumbo elementar (Pb) em liga com estanho (Sn) e antimônio (Sb) para reduzir custos.',
      'O peltre culinário contemporâneo regulamentado (normas BS EN 611-1 e ASTM B560) é obrigatoriamente livre de chumbo, limitando o metal residual a menos de 0,05% (<500 ppm Pb).',
      'Bebidas ácidas (vinho, cidra, cerveja artesanal, sucos cítricos, vinagres, pH < 4,2) dissolvem rapidamente o chumbo de taças e canecas de peltre vintage, formando acetato de chumbo ("açúcar de chumbo"), um sal solúvel e adocicado.',
      'O chumbo é uma neurotoxina bioacumulativa sem qualquer limiar seguro de ingestão; o CDC norte-americano adota o Valor de Referência de Chumbo no Sangue (BLRV) de 3,5 µg/dL devido a graves danos cognitivos, renais e cardiovasculares.',
      'Sinais diagnósticos: coloração cinza escura opaca, toque macio e pesado, som abafado ao bater levemente e reação positiva em testes com rodizonato de sódio. Peças antigas devem ser banidas do uso alimentar.'
    ],
    intro: 'O peltre clássico (liga de estanho tradicional ou "pewter") foi uma das ligas metálicas mais populares nas mesas ocidentais da Idade Média até o século XX, valorizado por sua facilidade de moldagem, brilho suave que imitava a prata e custo acessível. Contudo, sob a elegância nostálgica de canecas de taberna, pratos decorativos, cálices e bules herdados de família, oculta-se um dos riscos toxicológicos mais perigosos da culinária doméstica. Até a chegada das regulamentações sanitárias na década de 1970, o peltre comercial não era composto apenas de estanho, mas continha até 40% de chumbo puro (Pb). Quando esses utensílios vintage entram em contato com líquidos ou alimentos ácidos —como vinho, cidra fermentada, cerveja ou conservas—, o chumbo se dissolve formando sais altamente solúveis que contaminam a bebida, induzindo saturnismo e lesões cerebrais irreversíveis.',
    sections: [
      {
        title: '1. Metalurgia do Peltre na História: Peltre Nobre vs "Metal Negro" (15%–40% Pb) e Normas Modernas',
        content: 'Historicamente, as corporações de estanheiros dividiam o peltre em três categorias de qualidade: 1) "Fine Pewter" ou peltre nobre (80–90% Sn, 10% Cu e Sb, com teores mínimos de chumbo), reservado a talheres finos. 2) "Trifle Pewter" ou peltre comum (cerca de 82% Sn e 18% Pb), usado em canecas e pratos de uso diário. 3) "Black Metal" ou metal negro (chegando a 25%–40% de Pb), largamente utilizado em tabernas populares por ser muito barato e ter menor ponto de fusão. Foi apenas no final do século XX que normas de segurança internacionais, como a norma europeia BS EN 611-1 e a norte-americana ASTM B560, baniram formalmente o chumbo de qualquer utensílio para consumo de alimentos, estipulando que o peltre moderno deve conter >91% de estanho, 6–8% de antimônio, 1–2% de cobre e teores de chumbo inferiores a 0,05% (500 ppm).',
        type: 'info',
        boxText: 'O peltre comum de taberna fabricado antes de 1970 continha habitualmente entre 20% e 40% de chumbo puro para baratear a produção.'
      },
      {
        title: '2. Mecânica de Lixiviação Ácida: Vinho, Cidra e a Síntese Involuntária de Acetato de Chumbo ("Açúcar de Chumbo")',
        content: 'O chumbo metálico é altamente vulnerável ao ataque de ácidos orgânicos fracos. Quando se serve vinho tinto ou branco (ácidos tartárico, málico e acético, pH 3,0–3,6), cidra de maçã (ácido málico, pH 3,3) ou cerveja artesanal (ácidos láctico e carbônico, pH 4,0–4,5) em uma caneca ou taça de peltre antigo, ocorre uma reação química espontânea na superfície: Pb(s) + 2H⁺(aq) → Pb²⁺(aq) + H2(g). Com traços de ácido acético, forma-se acetato de chumbo(II) tri-hidratado [Pb(CH3COO)2·3H2O], conhecido historicamente como "açúcar de chumbo" pelo seu sabor intensamente doce. Esse composto mascara a aspereza metálica e adocica a bebida, ocultando o fato de que um único copo de sidra mantido por 30 minutos em um recipiente vintage pode lixiviar de 1.000 a mais de 5.000 µg de chumbo dissolvido.',
        type: 'warning',
        boxText: 'Os ácidos do vinho e da cidra dissolvem o chumbo do peltre transformando-o em acetato de chumbo ("açúcar de chumbo"), veneno solúvel e adocicado.'
      },
      {
        title: '3. Toxicologia Médica do Chumbo: Neurotoxicidade Sem Limiar Seguro, Bioacumulação Óssea e Saturnismo',
        content: 'Diferente de minerais como ferro ou zinco, o chumbo não possui nenhuma utilidade biológica no corpo humano e é considerado pela OMS um dos dez principais agentes químicos de preocupação em saúde pública. Não existe nível seguro de chumbo no sangue: o CDC americano estabelece o Valor de Referência no Sangue (BLRV) em apenas 3,5 µg/dL. Após absorvido no intestino delgado através dos transportadores de cálcio, o chumbo mimetiza o íon cálcio (Ca²⁺), ultrapassa a barreira hematoencefálica e inibe enzimas fundamentais como a ALAD e a ferroquelatase, bloqueando a síntese de hemoglobina. O envenenamento por chumbo (saturnismo) cursa com cólicas abdominais excruciantes ("cólica saturnina"), fraqueza motora periférica, hipertensão arterial, nefropatia crônica e encefalopatia. Em crianças e fetos, exposições mínimas provocam perda irreversível de pontos de QI e transtornos graves de aprendizagem.',
        type: 'warning',
        boxText: 'O chumbo não tem limite seguro; substitui o cálcio nas células, danifica permanentemente o cérebro de crianças e destrói os rins.'
      },
      {
        title: '4. Diagnóstico e Identificação de Peças com Chumbo: Pátina, Densidade e Testes com Cotonetes Químicos',
        content: 'Como avaliar se aquele prato ou caneca antiga de peltre guarda chumbo em sua composição? 1) Exame visual da pátina: O peltre moderno livre de chumbo mantém um brilho prateado claro ao longo dos anos. Já o peltre com alta fração de chumbo desenvolve uma pátina fosca, cinzenta-chumbo ou quase preta, com manchas irregulares e toque levemente oleoso. 2) Teste de peso e ressonância acústica: O chumbo tem alta densidade (11,34 g/cm³ contra 7,31 g/cm³ do estanho puro); a peça antiga é nitidamente pesada e, ao bater suavemente com um objeto plástico, produz um "toque" seco e surdo sem qualquer vibração sonora metálica. 3) Teste químico com rodizonato de sódio: Esfregue uma haste com reagente de rodizonato de sódio sobre uma pequena área limpa na base da peça; a mudança instantânea da cor amarela para vermelho escarlate ou rosa forte denuncia a presença imediata de chumbo livre lixiviável.',
        type: 'tip',
        boxText: 'Peltre escurecido e pesado que emite som surdo costuma ter chumbo. Cotonetes de rodizonato que mudam para vermelho confirmam a toxicidade.'
      },
      {
        title: '5. Diretrizes de Biossegurança Doméstica: Aposentadoria de Peças Vintage e Prevenção de Contaminação',
        content: 'Se você possui peças vintage ou herdadas de peltre em casa, adote imediatamente o protocolo de proteção: 1) Banimento culinário permanente: Nenhuma caneca, cálice, travessa ou bule de peltre fabricado antes de 1980 deve ser utilizado para servir alimentos ou bebidas (nem mesmo água fria). 2) Proibição do lava-louças: Nunca lave peltre antigo na máquina lava-louças; os detergentes alcalinos e a água quente aceleram a corrosão do chumbo, contaminando a máquina e outras louças. 3) Armazenamento decorativo seguro: Exponha as peças exclusivamente em vitrines fechadas para fins ornamentais. Ao manuseá-las, lave as mãos com água e sabão e mantenha-as fora do alcance de crianças pequenas, que poderiam levar as mãos à boca após tocar nas peças.',
        type: 'info',
        boxText: 'Mantenha todo peltre anterior a 1980 em vitrines fechadas. Nunca lave em máquinas de lavar louça nem utilize para servir alimentos.'
      }
    ],
    conclusion: 'O peltre antigo é um testemunho histórico de grande valor cultural e sentimental, mas apresenta um perigo químico inaceitável nas mesas contemporâneas. A presença de até 40% de chumbo em ligas produzidas antes de 1970 transforma qualquer brinde com vinho, sidra ou cerveja em um consumo involuntário de chumbo neurotóxico. Saiba diferenciar o peltre moderno seguro e certificado das peças de época familiares: faça testes com rodizonato e reserve as relíquias de peltre antigo estritamente para a decoração, longe do contato com qualquer alimento.',
    faqs: [
      {
        question: 'Posso beber água gelada de vez em quando em uma caneca antiga de peltre da família?',
        answer: 'Não é seguro. Embora a água neutra fria extraia chumbo mais lentamente do que vinho ou cidra, a água tratada com cloro ou ligeiramente ácida ainda lixivia átomos de chumbo. O chumbo acumula-se nos ossos por décadas; nenhuma quantidade de ingestão é aceitável.'
      },
      {
        question: 'Ferver água na caneca de peltre ou limpá-la com sabão remove o chumbo para sempre?',
        answer: 'Não. O chumbo não é uma sujeira externa nem um banho de superfície, mas sim um metal que integra a própria massa fundida de toda a liga. Toda vez que qualquer líquido tocar a parede da peça, novos átomos de chumbo estarão expostos para se dissolver.'
      },
      {
        question: 'Como saber se uma peça de peltre de antiquário é moderna ou antiga com chumbo?',
        answer: 'Procure marcas de contraste (touchmarks) na base da peça. O peltre contemporâneo seguro costuma trazer inscrições como "Lead-Free", "Pewter 92%", "Zinn 95%" ou selos de guildas modernas reconhecidas. Peças sem marcação, com datação anterior a 1970 ou tom cinza escuro opaco devem ser consideradas portadoras de chumbo.'
      },
      {
        question: 'É perigoso servir pães ou nozes em uma travessa de peltre antigo?',
        answer: 'Alimentos secos não ácidos absorvem menos chumbo líquido, mas o atrito mecânico de pães e frutas pode desprender micropartículas de poeira oxidada de chumbo que aderem à comida. O mais seguro é não utilizar a peça para qualquer tipo de alimento.'
      },
      {
        question: 'Os testes caseiros de cotonete com rodizonato de sódio para chumbo são confiáveis?',
        answer: 'Sim, os testes com rodizonato de sódio certificados por agências ambientais (como a EPA) são extremamente precisos para detectar chumbo metálico lixiviável em concentrações acima de 500 ppm. Se o reagente virar para vermelho ou rosa vivo ao tocar o metal limpo, a peça encerra teor perigoso de chumbo.'
      }
    ],
    relatedTools: [
      {
        name: 'Placar de Lixiviação Tóxica e Metais Pesados',
        url: '/pt/tools/toxic-leaching-scorecard/'
      },
      {
        name: 'Índice de Transparência de Marcas de Panelas',
        url: '/pt/tools/cookware-brand-transparency-index/'
      },
      {
        name: 'Simulador de Choque Térmico em Vidro e Esmalte',
        url: '/pt/tools/thermal-shock-simulator/'
      }
    ],
    relatedComparisons: [
      {
        name: 'Comparativo de Taças de Cristal com Chumbo vs Cristal Livre de Chumbo',
        url: '/pt/compare/lead-free-crystal-vs-lead-crystal-glassware/'
      },
      {
        name: 'Comparativo de Panelas de Cobre vs Aço Inoxidável',
        url: '/pt/compare/copper-vs-stainless-steel-cookware/'
      },
      {
        name: 'Comparativo de Cobre Estanhado vs Cobre Revestido de Inox',
        url: '/pt/compare/tin-lined-vs-stainless-lined-copper/'
      }
    ]
  }
];

const ptBlogPath = path.resolve('src/data/blog.pt.json');
const ptBlogs = JSON.parse(fs.readFileSync(ptBlogPath, 'utf8'));

for (const g of newGuidesPt) {
  if (!ptBlogs.some(b => b.slug === g.slug)) {
    ptBlogs.push(g);
    console.log(`✅ Added PT guide: ${g.slug}`);
  } else {
    console.log(`ℹ️ PT guide already present: ${g.slug}`);
  }
}

fs.writeFileSync(ptBlogPath, JSON.stringify(ptBlogs, null, 2) + '\n', 'utf8');
console.log(`✅ Saved src/data/blog.pt.json. Total guides: ${ptBlogs.length}`);

module.exports = { newGuidesPt, ptGuides: newGuidesPt };
