const fs = require('fs');
const path = require('path');

const waveDate = '2026-11-23';

console.log('=== GENERATING WAVE 72 AUTHORITATIVE SAFETY GUIDES (107 -> 110) [PT] ===');

const newGuidesPt = [
  {
    slug: 'air-fryer-pah-pyrolysis-aerosol-inhalation-safety',
    title: 'Pirólise de Gordura Incrustada na Resistência de Air Fryers: Hidrocarbonetos Aromáticos Policíclicos (HAP), Aerossolização de Benzo[a]pireno, Inalação de PM2.5 e Diretrizes de Ventilação EPA',
    category: 'appliances',
    excerpt: 'Sua air fryer emite fumaça ácida ou odores tóxicos ao preparar alimentos magros? Conheça a decomposição pirolítica de gorduras incrustadas, a emissão de Benzo[a]pireno, picos de PM2.5 acima de 250 µg/m³ e normas de exaustão externa.',
    date: waveDate,
    readTime: '16 min de leitura',
    author: 'IsItKitchenSafe',
    intro: 'As fritadeiras elétricas sem óleo (air fryers) revolucionaram as cozinhas modernas, oferecendo alimentos crocantes com circulação de ar em alta velocidade e pouco óleo. No entanto, especialistas em qualidade do ar interior alertam para um perigo frequente: a pirólise de gorduras residuais na resistência superior desprotegida (300°C–450°C). Em usos anteriores, microgotículas de óleo espirram na serpentina e formam um verniz carbonizado. Quando reaquecido, esse verniz sofre pirólise liberando Hidrocarbonetos Aromáticos Policíclicos (HAP), Benzo[a]pireno cancerígeno de Grupo 1, acroleína tóxica e picos perigosos de material particulado PM2.5.',
    sections: [
      {
        title: 'Arquitetura Térmica e Cinética de Salpicos Lipídicos por Convecção Ciclônica',
        content: 'Ao contrário dos fornos tradicionais, as air fryers posicionam resistências de alta potência a centímetros do cesto sob fluxo de ar de 5 a 7 m/s. Ao fritar carnes gordurosas, microexplosões de vapor projetam gotículas de gordura na serpentina incandescente a mais de 380°C. Em uma única sessão, até 0,4 g de lipídios se acumulam na resistência, transformando-se rapidamente em um verniz escuro e insolúvel.',
        callout: 'DEPÓSITO LIPÍDICO: O fluxo de ar turbulento deposita até 0,4g de gordura pulverizada diretamente sobre resistências a 380°C, formando camadas carbonizadas resistentes.'
      },
      {
        title: 'Pirólise Flash: Benzo[a]pireno, Formação de HAP e Aldeídos Citotóxicos',
        content: 'Quando os resíduos carbonizados ultrapassam os 300°C em usos seguintes, entram em combustão incompleta. Formam-se compostos mutagênicos como o Benzo[a]pireno (reconhecido como carcinógeno humano Grupo 1 pela IARC) e acroleína gasosa, potente irritante que paralisa os cílios das vias respiratórias.',
        callout: 'PIRÓLISE TÓXICA: O reaquecimento de gordura na resistência gera Benzo[a]pireno cancerígeno e acroleína, liberados diretamente no ar da cozinha.'
      },
      {
        title: 'Picos de Poluição Interna: PM2.5, Partículas Ultrafinas PM0.1 e Absorção Alveolar',
        content: 'Em uma cozinha de 30 m³ sem exaustor ligado, usar uma air fryer suja eleva o PM2.5 de 10 µg/m³ para mais de 250–500 µg/m³ em 15 minutos, superando o teto de segurança da OMS em 25 a 50 vezes. As nanopartículas PM0.1 penetram nos alvéolos pulmonares e atingem a corrente sanguínea.',
        callout: 'EXPLOSÃO DE PM2.5: Uma air fryer suja eleva o PM2.5 para mais de 500 µg/m³ em 15 minutos, atingindo o nível Perigoso do índice da EPA.'
      },
      {
        title: 'Engenharia de Ventilação: Coifas com Duto Externo vs. Filtros de Carvão Ineficazes',
        content: 'Operar a air fryer embaixo de armários superiores gera acúmulo de poluentes na altura da respiração. Depuradores sem duto deixam passar mais de 65% das nanopartículas e gases tóxicos. Somente coifas com duto para o exterior e vazão mínima de 300 CFM capturam mais de 90% dos aerossóis.',
        callout: 'EXAUSTÃO OBRIGATÓRIA: Depuradores recirculantes de carvão deixam passar mais de 65% dos poluentes. Use sempre a air fryer sob coifa com duto externo.'
      },
      {
        title: 'Protocolos Seguros de Limpeza da Resistência e Câmara Superior',
        content: 'Para limpar sem danificar o aparelho, retire da tomada, deixe esfriar e vire de cabeça para baixo sobre um pano macio. Esfregue levemente com escova macia e pasta de bicarbonato com detergente neutro. Para gordura endurecida, aqueça uma tigela refratária com água e rodelas de limão a 180°C por 5 minutos para amaciar o resíduo.',
        callout: 'LIMPEZA PROFUNDA: Vire a air fryer fria para escovar a resistência com pasta de bicarbonato ou use vapor de água com limão a 180°C para amolecer a gordura.'
      }
    ],
    faqs: [
      {
        question: 'Por que minha air fryer cheira a queimado ao preparar alimentos sem óleo?',
        answer: 'O cheiro decorre da queima da gordura espirrada na serpentina superior em preparos anteriores, que atinge mais de 350°C e se vaporiza em fumaça ácida e aldeídos tóxicos.'
      },
      {
        question: 'Inalar a fumaça de uma air fryer suja faz mal à saúde?',
        answer: 'Sim. A fumaça contém nanopartículas PM2.5 e compostos cancerígenos como o Benzo[a]pireno, causando irritação nos brônquios, tosse, dor de cabeça e inflamação pulmonar.'
      },
      {
        question: 'Posso usar produtos limpa-fornos cáusticos na air fryer?',
        answer: 'Nunca use produtos cáusticos em spray na air fryer. Eles corroem peças de alumínio, deterioram o antiaderente e deixam resíduos químicos que se vaporizam na comida.'
      },
      {
        question: 'Qual o melhor local na cozinha para ligar a air fryer?',
        answer: 'O local ideal é sobre o fogão, com a coifa externa ligada na potência máxima, evitando usá-la embaixo de armários fechados.'
      },
      {
        question: 'Com que frequência devo higienizar a resistência superior?',
        answer: 'Ao preparar carnes gordurosas com frequência, limpe a resistência a cada 2 ou 3 semanas. Para alimentos leves, uma limpeza ao vapor mensal é suficiente.'
      }
    ],
    relatedTools: [
      {
        name: 'Simulador de Ressuspensão Térmica e Inalação de HAP em Air Fryers',
        url: '/pt/tools/air-fryer-pah-resuspension-modeler/'
      },
      {
        name: 'Calculadora de Acrilamida e Reação de Maillard em Air Fryers',
        url: '/pt/tools/air-fryer-acrylamide-calculator/'
      },
      {
        name: 'Modelador de Eficiência de Extração de Coifas de Cozinha',
        url: '/pt/tools/range-hood-extraction-modeler/'
      }
    ]
  },
  {
    slug: 'induction-cooktop-delamination-thermal-stress-safety',
    title: 'Delaminação e Estresse Térmico Magnetostritivo em Cooktops de Indução: Empenamento de Panelas, Fraturas por Vibração Acústica e Normas de Isolamento IEC 60335-2-6',
    category: 'cooktops',
    excerpt: 'Cooktops de indução podem trincar ou sofrer delaminação interna? Conheça a ressonância magnética a 20–50 kHz, o estresse acústico, o empenamento de fundos de panelas e os requisitos da norma IEC 60335-2-6.',
    date: waveDate,
    readTime: '15 min de leitura',
    author: 'IsItKitchenSafe',
    intro: 'Os cooktops de indução representam o que há de mais avançado em termos de velocidade, controle térmico e eficiência energética. Ao acoplarem campos eletromagnéticos de alta frequência à base de panelas ferromagnéticas, geram calor diretamente no metal. Contudo, análises forenses de eletrodomésticos indicam um crescimento nas quebras espontâneas da superfície vitrocerâmica e descolamento de bobinas. O uso de panelas empenadas no modo \"Booster\" (3.000W–3.700W) provoca estresse mecânico cortante devido a gradientes de temperatura e vibrações magnetostritivas (20–50 kHz), culminando em fraturas severas.',
    sections: [
      {
        title: 'Arquitetura Eletromagnética: Correntes de Foucault e Vidro de Aluminossilicato',
        content: 'As superfícies de indução usam vitrocerâmica de aluminossilicato de lítio com coeficiente de expansão quase zero. Por baixo, bobinas espirais operam a 20–50 kHz. Embora a placa não aqueça por indução direta, ela absorve calor condutivo do fundo da panela a mais de 250°C, gerando fortes tensões mecânicas transversais.',
        callout: 'DINÂMICA TÉRMICA: A vitrocerâmica suporta condução extrema de panelas a 250°C enquanto transmite campos magnéticos de alta potência.'
      },
      {
        title: 'Microvibração Magnetostritiva e Fratura por Fadiga Acústica',
        content: 'A magnetostrição faz com que os átomos metálicos da panela se expandam e contraiam milhares de vezes por segundo, emitindo zumbidos e microvibrações contínuas. Havendo microarranhões na superfície, as oscilações aceleram a propagação de fissuras até a quebra súbita da placa.',
        callout: 'FADIGA ACÚSTICA: Vibrações magnetostritivas a 20–50 kHz causam microimpactos mecânicos que transformam pequenos arranhões em trincas catastróficas.'
      },
      {
        title: 'Panela Empenada, Falha no Sensor NTC e Superaquecimento Interno',
        content: 'Panelas com fundo curvo tocam o vidro apenas em pontos isolados, enganando o sensor de temperatura NTC. O sistema entrega potência máxima contínua, elevando a temperatura interna das bobinas de indução acima de 180°C e danificando adesivos estruturais.',
        callout: 'SUPERAQUECIMENTO: Fundos deformados criam bolsões de ar que descalibram os sensores, sobreaquecendo as bobinas internas acima de 180°C.'
      },
      {
        title: 'Delaminação em Panelas Multicamadas: Dilatação Desigual dos Metais',
        content: 'Panelas multicamadas fundem aço magnético externo com alumínio interno. O alumínio expande duas vezes mais rápido que o aço. Sob potência máxima, essa diferença pode abaular repentinamente o fundo da panela para fora, impactando e trincando a vitrocerâmica.',
        callout: 'PERIGO MULTICAMADA: A diferença de expansão entre o alumínio e o aço em panelas multicamadas pode deformar a base e quebrar a placa vitrocerâmica.'
      },
      {
        title: 'Norma IEC 60335-2-6: Isolamento Elétrico e Risco de Choque',
        content: 'A norma internacional IEC 60335-2-6 determina que um cooktop quebrado deve ser desligado imediatamente. O vazamento de líquidos condutores (como água fervente com sal) através de rachaduras pode atingir circuitos de alta tensão, gerando choque elétrico e incêndio.',
        callout: 'ISOLAMENTO ELÉTRICO: A norma IEC 60335-2-6 proíbe o uso de cooktops trincados pelo risco imediato de curto-circuito e choque elétrico por vazamentos.'
      }
    ],
    faqs: [
      {
        question: 'Por que o cooktop de indução faz um barulho de zumbido com certas panelas?',
        answer: 'O zumbido é fruto da magnetostrição: as camadas metálicas da panela vibram microscopicamente na frequência do campo magnético (20–50 kHz). Alças frouxas ou fundos multicamadas aumentam o ruído.'
      },
      {
        question: 'É seguro usar um cooktop de indução que tenha uma pequena trinca?',
        answer: 'Não. Jamais use um cooktop trincado. O derramamento de líquidos pode penetrar na placa e entrar em contato com circuitos de 240V, causando choques elétricos graves e curto-circuitos.'
      },
      {
        question: 'Como verificar se uma panela está com o fundo perfeitamente plano?',
        answer: 'Coloque uma régua de metal apoiada no fundo da panela contra a luz. Se houver passagem de luz no centro ou se uma folha de papel passar por baixo, a panela está empenada e não deve ser usada no modo turbo.'
      },
      {
        question: 'Arrastar panelas de ferro fundido pode estragar o cooktop?',
        answer: 'O atrito do ferro fundido causa microarranhões na superfície do vidro que concentram tensões, reduzindo a resistência do cooktop a choques mecânicos e térmicos.'
      },
      {
        question: 'Como utilizar o modo \"Booster\" de indução com total segurança?',
        answer: 'Utilize o modo Booster apenas para ferver grandes volumes de água em panelas pesadas e totalmente planas. Nunca ative em panelas vazias ou com óleo.'
      }
    ],
    relatedTools: [
      {
        name: 'Modelador de Campos Eletromagnéticos e Segurança em Indução',
        url: '/pt/tools/induction-emf-safety-modeler/'
      },
      {
        name: 'Simulador de Fratura e Estresse Térmico em Placas Vitrocerâmicas',
        url: '/pt/tools/glass-cooktop-fracture-simulator/'
      },
      {
        name: 'Simulador de Choque Térmico e Ruptura em Eletrodomésticos',
        url: '/pt/tools/appliance-thermal-shock-simulator/'
      }
    ]
  },
  {
    slug: 'refrigerator-cold-chain-defrost-failure-listeria-safety',
    title: 'Falha no Degelo Automático e Descalibração do Termostato em Geladeiras: Ruptura da Cadeia de Frio, Proliferação de Listeria monocytogenes e Limites da FDA a 4°C',
    category: 'refrigerators',
    excerpt: 'Sua geladeira está funcionando acima de 4°C (40°F) sem você perceber? Entenda o crescimento de bactérias psicrotróficas (Listeria monocytogenes), bloqueio de serpentinas por gelo e normas FDA de conservação.',
    date: waveDate,
    readTime: '16 min de leitura',
    author: 'IsItKitchenSafe',
    intro: 'A refrigeração doméstica é o alicerce da segurança alimentar em qualquer lar, retardando a multiplicação de bactérias nos alimentos. Entretanto, pesquisas da FDA e de órgãos de saúde mostram que mais de 43% das geladeiras residenciais operam acima de 4,4°C (40°F), entrando na perigosa Zona de Perigo. Entre 5°C e 9°C, a comida parece fresca, mas bactérias psicrotróficas como a perigosa Listeria monocytogenes proliferam exponencialmente. Defeitos imperceptíveis no sistema de degelo automático — como resistências queimadas ou termostatos bimetálicos travados — cobrem a serpentina de gelo maciço, impedindo o fluxo de ar frio para o refrigerador.',
    sections: [
      {
        title: 'Cinética Microbiana e o Perigo Oculto da Listeria monocytogenes',
        content: 'Bactérias psicrotróficas como a Listeria monocytogenes adaptam suas membranas lipídicas para continuar se multiplicando mesmo a 2°C. Sob temperatura adequada (2°C–3°C), a duplicação celular leva mais de 24 horas; contudo, se a temperatura sobe para 7°C, esse tempo cai para apenas 6 horas, aumentando drasticamente o risco de contaminação e listeriose grave.',
        callout: 'RISCO DE LISTERIA: A Listeria monocytogenes cresce em ambientes frios. Subir de 3°C para 7°C quadruplica sua velocidade de multiplicação nos alimentos.'
      },
      {
        title: 'Mecânica do Degelo Automático: Resistências, Bimetal e Bloqueio por Gelo',
        content: 'Em geladeiras Frost Free, um ciclo de degelo é ativado a cada 8–12 horas para derreter o gelo da serpentina. Se a resistência de degelo queimar ou o bimetal falhar, a geada acumula-se sem parar. Em 72 horas, forma-se um bloco de gelo sólido que obstrui as passagens de ar, deixando o freezer congelando e o refrigerador quente.',
        callout: 'BLOQUEIO POR GELO: Uma resistência de degelo queimada bloqueia o evaporador em 72 horas, impedindo o ar frio de descer para a área do refrigerador.'
      },
      {
        title: 'Zonas Térmicas e Desvios do Sensor: Prateleiras da Porta e Estratificação',
        content: 'O ar frio desce por ser mais denso, gerando diferenças de temperatura. As prateleiras da porta são o ponto mais quente, funcionando de 3°C a 5°C acima da média devido à abertura constante. Guardar leite, queijos frescos e ovos na porta os mantém permanentemente na Zona de Perigo microbiológico.',
        callout: 'ESTRATIFICAÇÃO: A porta da geladeira opera de 3°C a 5°C mais quente que as prateleiras internas. Evite guardar leite fresco e carnes na porta.'
      },
      {
        title: 'Gavetas de Legumes de Alta Umidade: Condensação e Biofilmes',
        content: 'Gavetas de legumes retêm de 85% a 95% de umidade. Quando há oscilações de temperatura por falha no degelo, ocorre condensação nas paredes e no fundo da gaveta. O acúmulo de água misturada com resíduos vegetais forma biofilmes bacterianos que contaminam verduras frescas.',
        callout: 'BIOFILMES NA GAVETA: Poças de condensação no fundo da gaveta de legumes criam focos bacterianos de contaminação cruzada entre vegetais.'
      },
      {
        title: 'Protocolos de Verificação da FDA: Termômetros Independentes e Calibração',
        content: 'A norma sanitária da FDA exige manter os alimentos a 4°C (40°F) ou menos. Como os botões giratórios com números (de 1 a 7) não indicam graus reais, deve-se colocar um termômetro independente imerso em um copo com água na prateleira central por 24 horas para medir a temperatura interna exata.',
        callout: 'TERMÔMETRO REAL: Os botões de regulagem não marcam graus reais. Use um termômetro independente em um copo com água para garantir temperaturas abaixo de 4°C.'
      }
    ],
    faqs: [
      {
        question: 'Qual é a temperatura segura ideal para a geladeira?',
        answer: 'A faixa ideal de conservação é entre 1,7°C e 3,3°C (35°F–38°F). Acima de 4,4°C (40°F), os alimentos entram na Zona de Perigo de proliferação bacteriana.'
      },
      {
        question: 'Por que o freezer gela normalmente mas a parte de baixo da geladeira fica quente?',
        answer: 'Trata-se de falha clássica no sistema de degelo: o gelo acumulado bloqueia os dutos de ar do evaporador, impedindo o ventilador de enviar ar gelado para baixo.'
      },
      {
        question: 'É seguro guardar leite, iogurte e ovos nas prateleiras da porta?',
        answer: 'Não. A porta é a região mais quente da geladeira e sofre variações térmicas contínuas. Laticínios e ovos devem ficar nas prateleiras centrais ou inferiores.'
      },
      {
        question: 'Quanto tempo os alimentos duram na geladeira durante uma falta de luz?',
        answer: 'Sem abrir a porta, a geladeira mantém os alimentos frios com segurança por até 4 horas. O freezer cheio suporta até 48 horas sem eletricidade.'
      },
      {
        question: 'Como saber se os alimentos ficaram em temperaturas perigosas?',
        answer: 'Se a temperatura interna ultrapassou 4,4°C por mais de 2 horas (ou 1 hora em dias muito quentes), alimentos perecíveis devem ser descartados.'
      }
    ],
    relatedTools: [
      {
        name: 'Modelador de Falha de Termostato de Degelo em Geladeiras',
        url: '/pt/tools/refrigerator-defrost-modeler/'
      },
      {
        name: 'Modelador de Contaminação Cruzada em Gavetas de Geladeira',
        url: '/pt/tools/refrigerator-cross-contamination-modeler/'
      },
      {
        name: 'Simulador de Choque Térmico e Ruptura em Eletrodomésticos',
        url: '/pt/tools/appliance-thermal-shock-simulator/'
      }
    ]
  }
];

const blogPtPath = path.resolve('src/data/blog.pt.json');
const blogPt = JSON.parse(fs.readFileSync(blogPtPath, 'utf8'));

for (const guide of newGuidesPt) {
  if (!blogPt.find(b => b.slug === guide.slug)) {
    blogPt.push(guide);
    console.log(`✅ Appended PT guide: ${guide.slug}`);
  } else {
    console.log(`ℹ️ PT guide already exists: ${guide.slug}`);
  }
}

fs.writeFileSync(blogPtPath, JSON.stringify(blogPt, null, 2) + '\n', 'utf8');
console.log(`✅ Updated src/data/blog.pt.json. Total count: ${blogPt.length}`);
