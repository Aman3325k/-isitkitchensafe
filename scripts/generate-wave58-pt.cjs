const fs = require('fs');
const path = require('path');

const waveDate = '2026-11-22';

console.log('=== GENERATING WAVE 58 PORTUGUESE SAFETY GUIDES (86 -> 89) ===');

const newGuidesPt = [
  {
    slug: 'pressure-canner-vs-pressure-cooker-botulism-safety',
    title: 'Autoclave de Conservas vs Panela de Pressão Comum: Inativação de Esporos de Clostridium botulinum, Termofísica a 116 °C (240 °F) e Alimentos de Baixa Acidez',
    excerpt: 'Por que panelas elétricas multifuncionais (tipo Instant Pot) e panelas de pressão comuns não podem enlatar carnes ou legumes com segurança? Entenda a letalidade botulínica 12D e normas USDA.',
    description: 'Guia técnico definitivo sobre conservas caseiras seguras: cinética de esterilização térmica Fo ≥ 3,0 min, dinâmica de vapor a 15 PSI e prevenção de botulismo alimentar fatal.',
    summary: 'Esporos de Clostridium botulinum resistem à água fervente a 100 °C. Em alimentos de baixa acidez (pH > 4,6: carnes, feijão, caldos), sua destruição exige vapor saturado a 116–121 °C (240–250 °F) sob 10–15 PSI. Panelas elétricas sofrem histerese térmica e falta de massa metálica, sendo incapazes de assegurar a esterilidade comercial.',
    date: waveDate,
    readTime: '11 min de leitura',
    author: 'IsItKitchenSafe',
    keyTakeaways: [
      'Clostridium botulinum produz a neurotoxina mais letal da biologia (DL50 ~1 ng/kg); seus endósporos sobrevivem horas a 100 °C e só morrem entre 116 °C e 121 °C.',
      'Alimentos de baixa acidez (pH > 4,6: carnes, aves, sopas, legumes) exigem obrigatoriamente autoclave ou panela de conservas a pressão homologada.',
      'O padrão científico "Cozimento Botulínico 12D" requer 12 reduções decimais (Fo ≥ 3,0 min a 121,1 °C), inalcançável em panelas domésticas sem manômetro calibrado.',
      'Panelas multifuncionais elétricas operam a apenas 10–11,6 PSI com oscilações térmicas constantes e resfriamento rápido, deixando esporos viáveis no centro do pote.',
      'A purga contínua de vapor por 10 minutos antes de fechar a válvula do autoclave é obrigatória para eliminar bolsões de ar frio que reduzem a esterilização.'
    ],
    intro: 'A produção de conservas caseiras e caldos em potes herméticos vive uma grande popularidade. No entanto, difundiu-se na internet um erro microbiológico fatal: acreditar que panelas de pressão elétricas multifuncionais (como Instant Pot) ou panelas de pressão caseiras pequenas substituem autoclaves tradicionais de conservas (pressure canners). Sob a ótica da microbiologia e da engenharia de processos térmicos, essa prática acarreta o risco biológico mais letal da cozinha: o botulismo alimentar. Os endósporos de Clostridium botulinum suportam a água fervente a 100 °C por horas seguidas. Sua destruição absoluta em alimentos de baixa acidez requer vapor pressurizado estável a 116 °C–121 °C (240 °F–250 °F) sob 10 a 15 PSI.',
    sections: [
      {
        title: '1. Microbiologia de Clostridium botulinum: Arquitetura do Esporo, Limiar de pH 4,6 e Neurotoxinas',
        content: 'Clostridium botulinum é uma bactéria anaeróbia estrita, Gram-positiva e esporulada, comum em solos e sedimentos agrícolas. Enquanto as bactérias ativas morrem no cozimento habitual, os endósporos possuem uma espessa camada de queratina e dipicolinato de cálcio desidratado, tornando-os imunes ao calor moderado. Em potes fechados com ausência de oxigênio, umidade e pH superior a 4,6 (legumes, carnes, caldos, peixes), os esporos germinam e produzem a neurotoxina botulínica (BoNT tipos A, B, E e F). A toxina cliva as proteínas do complexo SNARE nas junções neuromusculares, impedindo a acetilcolina e provocando paralisia flácida progressiva e parada respiratória com mortalidade de até 30% sem UTI.',
        callout: {
          title: 'O Limiar Crítico de pH 4,6',
          content: 'Alimentos com pH ≤ 4,6 (doces, compotas de frutas ácidas, conservas em vinagre) impedem quimicamente a germinação do botulismo e podem ser processados em banho-maria a 100 °C. Acima de pH 4,6, o autoclave a pressão é indispensável.',
          type: 'danger',
          boxText: 'Alimentos de baixa acidez (pH > 4,6) processados abaixo de 116 °C podem conter toxina botulínica invisível e sem sabor.'
        }
      },
      {
        title: '2. Termofísica da Esterilização: Valor D, Valor z e o Cozimento 12D',
        content: 'A inativação de esporos segue cinética logarítmica de primeira ordem. O valor D representa o tempo em minutos a determinada temperatura para exterminar 90% (1 ciclo logarítmico) dos esporos. Para C. botulinum a 121,1 °C (250 °F), D250 = 0,21 minutos (com z = 10 °C). A indústria alimentícia e o USDA exigem o "Cozimento 12D", que garante 12 reduções logarítmicas sucessivas (Fo ≥ 3,0 min). Na água fervente comum a 100 °C, o valor D ultrapassa 100 minutos; seriam necessárias mais de 20 horas ininterruptas de fervura para alcançar a esterilidade, secando a panela. Apenas o vapor saturado a 10–15 PSI atinge 116–121 °C, completando a esterilização segura entre 20 e 100 minutos conforme o alimento.',
        callout: {
          title: 'Pressão como Veículo Térmico',
          content: 'A pressão mecânica em si não destrói os esporos; sua função termodinâmica exclusiva é forçar a água a ferver a 116 °C–121 °C em vez dos 100 °C atmosféricos.',
          type: 'info',
          boxText: 'Reduzir a temperatura do vapor em apenas 5 °C decuplica o tempo exigido para esterilizar com segurança.'
        }
      },
      {
        title: '3. Por Que Panelas Elétricas Multifuncionais Não São Seguras para Conservas',
        content: 'Panelas elétricas multifuncionais são ótimas para cozinhar no dia a dia, mas perigosas para conservas caseiras de baixa acidez. Primeiro, operam com pressão reduzida (10,1 a 11,6 PSI), atingindo somente 115 °C a 116,6 °C, insuficiente para os 15 PSI (121 °C) que garantem margem de segurança térmica em altitudes moderadas. Segundo, o termostato liga e desliga ciclicamente a resistência elétrica, criando oscilações térmicas onde a temperatura interna cai abaixo do limiar letal. Terceiro, possuem paredes finas e massa térmica insignificante; o resfriamento rápido corta a letalidade térmica residual que os autoclaves de paredes grossas acumulam, deixando esporos viáveis no coração do pote. O NCHFP e o USDA proíbem explicitamente o uso de panelas multifuncionais para conservas de baixa acidez.',
        callout: {
          title: 'A Ilusão do Botão "Canning"',
          content: 'Manuais técnicos de panelas elétricas advertem que o botão "Canning" serve somente para frutas de alta acidez e geleias em banho-maria, nunca para carnes ou sopas.',
          type: 'warning',
          boxText: 'Nunca use o botão "Canning" de panelas elétricas para conservar legumes ou carnes; casos fatais de botulismo já foram causados por isso.'
        }
      },
      {
        title: '4. Especificações de Autoclaves: Manômetros, Contrapesos e Altitude',
        content: 'Um autoclave de conservas doméstico autêntico possui capacidade para ao menos 4 potes de 1 litro na vertical sobre grade (volume de 15 a 22 litros). Utiliza contrapeso oscilante calibrado (10 ou 15 PSI) ou manômetro analógico de ponteiro. O manômetro analógico deve ser calibrado anualmente (margem máxima ±1 PSI). Em regiões elevadas, a menor pressão atmosférica reduz a temperatura de fervura da água; acima de 300 metros de altitude, deve-se usar 15 PSI no contrapeso ou acrescentar 0,5 PSI por cada 300 metros no manômetro analógico para assegurar os 116 °C essenciais.',
        callout: {
          title: 'Purga de Vapor por 10 Minutos',
          content: 'Antes de colocar o regulador de peso na chaminé, deixe o vapor escapar em jato vigoroso por 10 minutos ininterruptos para expulsar todo o ar atmosférico da câmara. Ar preso cria bolsões frios que impedem a esterilização completa dos potes.',
          type: 'tip',
          boxText: 'Purgue o vapor por 10 minutos completos antes de presurizar para garantir uma câmara 100% de vapor saturado a 116 °C.'
        }
      },
      {
        title: '5. Diagnóstico de Perigo e Protocolos de Acidificação',
        content: 'A toxina botulínica não produz odor, sabor nem gás visível; um pote mortal pode parecer perfeito e crocante. Se uma conserva de baixa acidez foi feita em panela elétrica ou fervura comum, descarte-a em segurança. Ferver o alimento vigorosamente a 100 °C por 10 minutos (mais 1 minuto por cada 300 m de altitude) desnatura a neurotoxina proteica, embora não mate os esporos. Em molhos de tomate caseiros com pH incerto (4,3–4,9), adicione sempre 2 colheres de sopa de suco de limão engarrafado ou 1/2 colher de chá de ácido cítrico por litro para manter o pH abaixo de 4,6.',
        callout: {
          title: 'Regra de Ouro em Conservas',
          content: 'Nunca prove conservas suspeitas. Uma fração infinitesimal de neurotoxina botulínica absorvida pela mucosa é suficiente para causar paralisia e morte.',
          type: 'danger',
          boxText: 'A toxina botulínica é invisível e inodora. Sem método térmico comprovado por autoclave, descarte o pote sem provar.'
        }
      }
    ],
    conclusion: 'A conservação segura de alimentos exige respeito absoluto à microbiologia. Panelas elétricas multifuncionais são excelentes na rotina culinária, mas desprovidas da capacidade, estabilidade a 15 PSI e inércia térmica que garantem a destruição de esporos botulínicos. Para preservar caldos, feijões, legumes e carnes sem risco de vida, utilize um autoclave genuíno de 15 a 22 litros, purgue o vapor por 10 minutos e ajuste a pressão conforme a altitude.',
    faqs: [
      {
        question: 'Posso enlatar carne ou feijão na Instant Pot se aumentar o tempo de cozimento?',
        answer: 'Não. O USDA e o Centro de Preservação de Alimentos comprovaram que estender o tempo não compensa a pressão insuficiente (10–11,6 PSI vs 15 PSI) e as quedas térmicas de panelas elétricas. Zonas frias no interior do pote permitem a sobrevivência de esporos de Clostridium botulinum.'
      },
      {
        question: 'Qual a diferença entre uma panela de pressão comum e uma autoclave de conservas?',
        answer: 'A panela de pressão do dia a dia possui de 4 a 7 litros e paredes delgadas voltadas a amaciar carnes rapidamente. O autoclave de conservas possui entre 15 e 22 litros para acomodar potes verticais, paredes grossas de alta inércia térmica e regulador calibrado a 15 PSI ou manômetro testado.'
      },
      {
        question: 'Por que o molho de tomate pode ir em banho-maria mas a sopa de legumes exige autoclave?',
        answer: 'Legumes e sopas têm pH entre 5,0 e 6,8 (baixa acidez), onde o botulismo cresce livremente. Tomates possuem pH próximo a 4,5; só podem ir a banho-maria de 100 °C se acidificados com suco de limão ou ácido cítrico para forçar o pH estritamente abaixo de 4,6.'
      },
      {
        question: 'Ferver uma conserva suspeita antes de comer destrói a toxina botulínica?',
        answer: 'Sim. A neurotoxina é uma proteína termossensível que se desnatura e perde a toxicidade se fervida borbulhante por 10 minutos a 100 °C. No entanto, os esporos continuam vivos e podem germinar novamente; trata-se de um recurso de emergência, não de uma técnica correta de produção.'
      },
      {
        question: 'Como saber se o manômetro analógico da minha panela autoclave está descalibrado?',
        answer: 'Manômetros de ponteiro devem ser testados uma vez por ano antes da safra de conservas. Se o mostrador indicar desvio superior a 1 ou 2 PSI em comparação com uma unidade padrão calibrada, deve ser trocado de imediato para evitar subesterilização.'
      }
    ],
    relatedTools: [
      {
        name: 'Simulador de Segurança de Panelas de Pressão e Instant Pot',
        url: '/pt/tools/pressure-cooker-instant-pot-safety-simulator/'
      },
      {
        name: 'Calculadora de Validade de Sobras e Alimentos da USDA',
        url: '/pt/tools/leftover-shelf-life-calculator/'
      },
      {
        name: 'Placar de Lixiviação de Metais Pesados e Toxinas',
        url: '/pt/tools/toxic-leaching-scorecard/'
      }
    ],
    relatedComparisons: [
      {
        name: 'Panela de Pressão vs Panela Elétrica de Cozimento Lento',
        url: '/pt/compare/pressure-cooker-vs-slow-cooker/'
      },
      {
        name: 'Potes de Vidro Mason vs Potes Plásticos de Armazenamento',
        url: '/pt/compare/glass-vs-plastic-food-storage-containers/'
      }
    ]
  },
  {
    slug: 'refrigerator-cross-contamination-shelf-hierarchy-safety',
    title: 'Hierarquia de Prateleiras na Geladeira e Segurança Microbiológica: Biofilmes de Listeria monocytogenes, Gotejamento de Frango Cru e Gestão Térmica',
    excerpt: 'Domine a organização vertical da geladeira conforme as diretrizes do USDA e FDA. Termodinâmica do ar frio, bactérias psicrotolerantes e higiene das gavetas.',
    description: 'Guia técnico sobre armazenamento em refrigeradores: estratificação por temperatura de letalidade bacteriana, contenção de exsudato de aves e desinfecção de biofilmes.',
    summary: 'O frio doméstico (1–4 °C) desacelera micróbios comuns mas permite a multiplicação de Listeria monocytogenes. O gotejamento de purga de frango cru contamina alimentos prontos. Organizar prateleiras de cima a baixo conforme a temperatura de cozimento previne contaminação cruzada severa.',
    date: waveDate,
    readTime: '10 min de leitura',
    author: 'IsItKitchenSafe',
    keyTakeaways: [
      'Listeria monocytogenes é uma bactéria psicrotolerante que se multiplica ativamente entre 1 °C e 4 °C modificando lipídios de sua membrana celular, causando listeriose com letalidade de 20–30%.',
      'Uma única gota de líquido de purga de frango cru contém dezenas de milhares de células de Campylobacter e Salmonella, suficientes para infectar saladas ou sobras.',
      'Hierarquia vertical obrigatória: topo para alimentos prontos para consumo → meio para peças de carne bovina/suína (63 °C) → intermediário para carne moída (71 °C) → base absoluta para frango e aves cruas (74 °C).',
      'A porta é a região mais quente e termoinstável (5–9 °C); nunca guarde leite, ovos ou carnes nos compartimentos da porta.',
      'As gavetas de legumes acumulam condensação e resíduos vegetais propícios a biofilmes, exigindo higienização mensal com diluição leve de água sanitária.'
    ],
    intro: 'A geladeira doméstica é amplamente tida como um cofre estéril onde o tempo biológico congela. Na realidade, trata-se de um ecossistema microbiano e termodinâmico ativo. Manter temperaturas de 1 °C a 4 °C (34 °F a 40 °F) reduz a atividade de germes comuns, mas não impede patógenos psicrotolerantes adaptados ao frio como Listeria monocytogenes. Somado ao gotejamento de líquidos de frango cru e à desorganização das prateleiras, o refrigerador pode se transformar num foco silencioso de intoxicações alimentares graves.',
    sections: [
      {
        title: '1. O Perigo Psicrotolerante: Adaptação de Membrana e Biofilmes de Listeria',
        content: 'Enquanto a maioria das bactérias paralisa sua divisão celular abaixo de 4 °C, Listeria monocytogenes multiplica-se até -0,4 °C. Ela altera os ácidos graxos de sua membrana para cadeias ramificadas anteiso-C15:0, mantendo fluidez e transporte ativo no frio. Além disso, fixa-se no aço inoxidável, no polietileno das gavetas e nas borrachas de vedação formando biofilmes resistentes. Ingerir alimentos contaminados prontos para o consumo (frios, queijos frescos, saladas) causa listeriose invasiva, com mortalidade de até 30% em gestantes, recém-nascidos e idosos.',
        callout: {
          title: 'Multiplicação Invisível',
          content: 'A Listeria não azeda nem deteriora o sabor ou cheiro da comida. Sobras guardadas há mais de 4 dias na geladeira podem conter cargas bacterianas infectantes sem apresentar qualquer alteração perceptível.',
          type: 'danger',
          boxText: 'Listeria monocytogenes multiplica-se ativamente no frio da geladeira. Consuma sobras em no máximo 3 a 4 dias.'
        }
      },
      {
        title: '2. Dinâmica do Líquido de Purga: Campylobacter e Salmonella em Frango Cru',
        content: 'O líquido avermelhado em carnes embaladas é um exsudato celular proteico carregado de Salmonella enterica e Campylobacter jejuni. Uma dose de apenas 500 bactérias de Campylobacter — presente em meia gota de líquido de frango — é suficiente para desencadear gastroenterite severa. Colocar bandejas de frango nas prateleiras superiores permite que o líquido goteje por gravidade sobre legumes, queijos ou sobras guardadas abaixo, alimentos que não sofrerão cozimento posterior para esterilização.',
        callout: {
          title: 'Contenção Secundária Obrigatória',
          content: 'Nunca confie apenas no filme plástico do supermercado. Acomode as carnes cruas em pratos fundos ou assadeiras laváveis com bordas elevadas para reter vazamentos acidentais.',
          type: 'warning',
          boxText: 'Guarde aves cruas exclusivamente na prateleira inferior absoluta, sempre sobre uma bandeja de contenção.'
        }
      },
      {
        title: '3. Hierarquia Vertical do USDA: Estratificação por Temperatura de Cozimento',
        content: 'As normas do USDA e da FDA determinam que as prateleiras sejam organizadas conforme a temperatura interna mínima necessária para exterminar os micróbios de cada alimento:\n\n• Prateleira Superior: Alimentos prontos para consumo (RTE), pratos preparados, sobras, laticínios e embutidos (0 °C de cozimento posterior).\n• Segunda Prateleira: Peças inteiras de carne bovina, suína e peixes (exigem 63 °C / 145 °F no centro).\n• Terceira Prateleira: Carnes moídas (hambúrgueres, almôndegas) e ovos crus (exigem 71 °C / 160 °F para eliminar bactérias misturadas na massa).\n• Prateleira Inferior Absoluta: Frango, peru e carnes de aves cruas (exigem 74 °C / 165 °F para neutralizar sorotipos resistentes de Salmonella).',
        callout: {
          title: 'Regra de Ouro da Posição',
          content: 'Alimentos que exigem maior calor no preparo ficam sempre nas posições mais baixas, protegendo os alimentos que não serão cozidos.',
          type: 'tip',
          boxText: 'Pronto para comer (topo) → Carnes inteiras (63 °C) → Carne moída (71 °C) → Frango cru (74 °C na base absoluta).'
        }
      },
      {
        title: '4. Termodinâmica da Geladeira: Porta Quente e Pontos de Estabilidade',
        content: 'O ar frio desce naturalmente para o fundo da geladeira, enquanto o ar quente sobe. Toda vez que a porta se abre, o ar ambiente entra e aquece os compartimentos da contrapuerta para 5 °C a 9 °C (41 °F–48 °F). Leite, creme de leite, carnes e ovos jamais devem ser mantidos na porta, apesar das formas plásticas dos fabricantes. A zona mais estável e fria fica no fundo da prateleira inferior (1 °C a 3 °C). As gavetas de legumes retêm umidade benéfica para vegetais, mas acumulam biofilmes se não forem higienizadas com frequência.',
        callout: {
          title: 'Termômetro Independente',
          content: 'Botões numerados não representam temperatura exata. Instale um termômetro culinário analógico na prateleira central para assegurar entre 2 °C e 4 °C reais.',
          type: 'info',
          boxText: 'Nunca armazene leite ou ovos na porta da geladeira; mantenha-os no fundo das prateleiras internas.'
        }
      },
      {
        title: '5. Higienização e Remoção Química de Biofilmes',
        content: 'Passar esponja de pia úmida apenas dissemina bactérias pelas prateleiras limpas. Para desinfecção real, retire as prateleiras de vidro (deixando-as atingir a temperatura ambiente para evitar trincas térmicas) e lave-as com água morna e detergente neutro. Em seguida, borrife uma solução de água sanitária diluída (1 colher de sopa de água sanitária para 4 litros de água fria) ou desinfetante clorado para alimentos. Deixe agir por 5 a 10 minutos e seque com toalhas descartáveis de papel.',
        callout: {
          title: 'Vinagre Não Desinfeta Geladeiras',
          content: 'Vinagre branco ameniza odores mas não é desinfetante sanitário comprovado; não inativa esporos nem elimina rapidamente a Listeria.',
          type: 'tip',
          boxText: 'Desinfete as prateleiras e gavetas mensalmente com água sanitária diluída; evite esponjas sujas de pia.'
        }
      }
    ],
    conclusion: 'A conservação doméstica de alimentos exige controle térmico e segregação física rigorosa. Ao adotar a hierarquia vertical do USDA, posicionar frangos em bandejas no estante inferior, manter laticínios longe da porta e garantir 2 °C a 4 °C constantes, o refrigerador cumpre sua função de proteger a saúde de toda a família.',
    faqs: [
      {
        question: 'Por que não é recomendável guardar ovos no suporte da porta da geladeira?',
        answer: 'A porta sofre oscilações térmicas constantes a cada abertura. Essas mudanças de temperatura provocam condensação de microgotas na casca do ovo, permitindo que a Salmonella enteritidis atravesse os poros da casca e contamine a gema.'
      },
      {
        question: 'Quantos dias as sobras de comida cozida duram na geladeira antes de estragar?',
        answer: 'Segundo as diretrizes sanitárias da FDA e USDA, sobras de comida cozida (arroz, massas, feijão e carnes) devem ser consumidas ou congeladas no prazo máximo de 3 a 4 dias. Após esse intervalo, bactérias como Listeria podem atingir níveis patogênicos sem estragar o cheiro da comida.'
      },
      {
        question: 'Pode colocar panela de comida quente diretamente na geladeira?',
        answer: 'Panelas grandes e fundas com comida fumegante aquecem o ar interno da geladeira, elevando a temperatura dos alimentos vizinhos para a "zona de perigo" (>4 °C) por horas. Divida o alimento em potes rasos de até 5 cm, espere amornar por 30 minutos e leve à geladeira.'
      },
      {
        question: 'Qual a temperatura ideal da geladeira e do congelador?',
        answer: 'A geladeira deve operar entre 1,7 °C e 3,3 °C (35 °F a 38 °F). Passar de 4 °C acelera a multiplicação bacteriana. O congelador deve marcar rigorosamente -18 °C (0 °F) ou menos para suspender a atividade microbiana.'
      },
      {
        question: 'O que fazer se o suco de frango cru vazar dentro da geladeira?',
        answer: 'Retire os alimentos próximos imediatamente, lave a prateleira com água morna e sabão, aplique solução com água sanitária por 5 minutos e enxugue com papel-toalha descartável. Jogue fora qualquer alimento pronto que tenha tido contato com o líquido.'
      }
    ],
    relatedTools: [
      {
        name: 'Planejador de Zonas e Organização de Geladeira',
        url: '/pt/tools/fridge-organization-zone-planner/'
      },
      {
        name: 'Calculadora de Validade de Sobras e Alimentos da USDA',
        url: '/pt/tools/leftover-shelf-life-calculator/'
      },
      {
        name: 'Verificador de Contaminação Cruzada e Alérgenos',
        url: '/pt/tools/food-allergy-cross-contact-checker/'
      }
    ],
    relatedComparisons: [
      {
        name: 'Potes de Vidro vs Potes Plásticos de Armazenamento',
        url: '/pt/compare/glass-vs-plastic-food-storage-containers/'
      },
      {
        name: 'Tábua de Corte de Madeira vs Plástico',
        url: '/pt/compare/wood-vs-plastic-cutting-board/'
      }
    ]
  },
  {
    slug: 'cast-iron-seasoning-smoke-point-acrolein-safety',
    title: 'Química da Cura em Ferro Fundido e Pontos de Fumaça: Polimerização por Radicais Livres vs Pirólise de Acroleína, Descascamento do Linho e Óleos Seguros',
    excerpt: 'A ciência molecular da cura de frigideiras de ferro e aço carbono. Reticulação de ácidos linoleico e oleico, por que óleo de linhaça descasca e como evitar fumaça tóxica de acroleína.',
    description: 'Guia técnico definitivo sobre polimerização lipídica em ferro fundido: autoxidação catalisada por Fe, decomposição pirolítica de acroleína e seleção de óleos com alto ponto de fumaça.',
    summary: 'A cura não é gordura seca, mas um polímero termorrígido sintetizado por autoxidação de triglicerídeos sobre ferro. Superar o ponto de decomposição pirolítica degrada os lipídios em acroleína, um aldeído volátil irritante. O óleo de linhaça cria películas hiperdensas que descascam; óleos de semente de uva ou girassol alto oleico garantem elasticidade e durabilidade.',
    date: waveDate,
    readTime: '11 min de leitura',
    author: 'IsItKitchenSafe',
    keyTakeaways: [
      'A cura é um polímero insolúvel formado por ligações cruzadas covalentes entre ácidos graxos insaturados, catalisado por íons de ferro (Fe²⁺/Fe³⁺).',
      'A pirólise térmica acima do ponto de fumaça cliva o glicerol liberando acroleína (propenal), um gás tóxico irritante pulmonar com limite OSHA de 0,1 ppm.',
      'Paradoxo do óleo de linhaça: seu alto índice de iodo forma uma película extremamente dura mas sem elasticidade, que se estilhaça e descasca com a dilatação térmica do ferro.',
      'Os óleos recomendados equilibram ácido linoleico (reticulação) e oleico (flexibilidade) com acidez livre <0,05% e ponto de fumaça >220 °C, como óleo de semente de uva ou girassol alto oleico.',
      'Regra da microcamada: esfregue o óleo até a frigideira parecer totalmente seca antes de assar de cabeça para baixo a 220–230 °C por 60 minutos.'
    ],
    intro: 'Frigideiras de ferro fundido e aço carbono são ícones de culinária saudável e duradoura sem compostos químicos perfluorados (PFAS). Com uma cura bem feita, a superfície adquire uma pátina antiaderente lisa e natural. Contudo, abundam conselhos desprovidos de base química na internet. Muitos cozinheiros queimam panelas em temperaturas excessivas gerando pirólise de acroleína tóxica, ou utilizam óleos de secagem rápida (como linhaça) que logo descascam na comida. Compreender a química orgânica da polimerização de lipídios permite criar uma antiaderência segura e definitiva.',
    sections: [
      {
        title: '1. Química Orgânica da Cura: Autoxidação, Radicais Livres e Catálise Metálica',
        content: 'A cura do ferro não é uma camada de gordura comum nem óleo seco: é uma matriz polimérica termofixa tridimensional insolúvel ancorada na microporosidade do ferro fundido. Sua formação decorre de um processo de autoxidação em três fases:\n\n1. Iniciação: O aquecimento de ácidos graxos insaturados na presença de oxigênio e do substrato de ferro (que atua como catalisador redox) arranca hidrogênios dos carbonos bis-alílicos, gerando radicais livres alquil (R•).\n2. Propagação: Os radicais ligam-se ao oxigênio formando radicais peroxil (ROO•), que atacam cadeias vizinhas gerando hidroperóxidos lipídicos (ROOH) e dienos conjugados.\n3. Terminação e Reticulação: Entre 200 °C e 230 °C (400 °F–450 °F), os hidroperóxidos se quebram em radicais alcoxil e hidroxil, que se recombinam formando fortes ligações covalentes carbono-carbono (C-C) e éter (C-O-C) tridimensionais.',
        callout: {
          title: 'Catálise do Ferro Metálico',
          content: 'O ferro puro atua como acelerador químico potente, promovendo a polimerização dos triglicerídeos em temperaturas bem mais baixas do que em superfícies inertes como cerâmica ou vidro.',
          type: 'info',
          boxText: 'A cura é um polímero termorrígido insolúvel sintetizado pela reticulação de ácidos graxos catalisada pelo ferro.'
        }
      },
      {
        title: '2. Polimerização vs Pirólise: O Risco da Fumaça de Acroleína',
        content: 'Há uma diferença fundamental entre polimerização térmica benéfica e pirólise destrutiva. Ao ultrapassar excessivamente o ponto de fumaça, a energia quebra a molécula de glicerol por desidratação, liberando acroleína (2-propenal, CH2=CH-CHO). A acroleína é um potente lacrimogêneo e tóxico pulmonar com limite de segurança OSHA de meros 0,1 ppm e teto de perigo imediato (IDLH) de 2,0 ppm. Curar panelas a 260 °C+ (500 °F+) libera vapores asfixiantes carregados de acroleína e hidrocarbonetos policíclicos aromáticos (PAHs). A cura deve ocorrer na temperatura exata do ponto de fumaça ou ligeiramente acima (220–232 °C / 425–450 °F), nunca em modo autolimpante pirolítico a 450–500 °C.',
        callout: {
          title: 'Perigo de Inalação',
          content: 'Fumaça branca espessa e ardida na cozinha é sinal de pirólise lipídica com emissão de acroleína. Garanta exaustão potente durante a cura no forno.',
          type: 'danger',
          boxText: 'O calor excessivo quebra o óleo em acroleína, um gás tóxico e sufocante. Cure panelas com ventilação e sem sobreaquecimento.'
        }
      },
      {
        title: '3. O Paradoxo do Óleo de Linhaça: Alto Índice de Iodo vs Fragilidade Mecânica',
        content: 'O óleo de linhaça virgem foi propagado como a melhor opção para curar ferro devido ao seu elevadíssimo Índice de Iodo (175–200), reflexo de mais de 50% de ácido alfa-linolênico (ALA, 18:3). Embora forme inicialmente uma película negra e brilhante, a ciência dos materiais revela sua falha na cozinha: hiper-reticulação. A excessiva densidade de ligações cruzadas eleva a temperatura de transição vítrea (Tg) e zera a elasticidade do filme. Como o ferro fundido dilata no calor e contrai no resfriamento (~12 × 10⁻⁶ /°C), a camada rígida de linhaça não consegue flexionar com o metal; a tensão mecânica gera microfissuras e o polímero se desprende em flocos diretamente sobre a comida.',
        callout: {
          title: 'Por Que Funciona em Madeira e Não em Ferro',
          content: 'O óleo de linhaça cura perfeitamente em móveis de madeira porque as fibras vegetais absorvem o óleo e não sofrem choques de calor a 220 °C. No ferro rígido que dilata no fogão, o linho se estilhaça.',
          type: 'warning',
          boxText: 'O óleo de linhaça gera uma película vítrea quebradiça que se descola e cai em lascas pretas sobre o alimento.'
        }
      },
      {
        title: '4. Seleção Lipídica Ideal: Equilíbrio de Ácidos Linoleico e Oleico',
        content: 'O óleo ideal para cura exige proporções equilibradas: ácido linoleico poli-insaturado (18:2) suficiente para formar ligações cruzadas, compensado por ácido oleico monoinsaturado (18:1) para assegurar flexibilidade ao polímero, com acidez livre inferior a 0,05% e ponto de fumaça elevado (≥220 °C):\n\n• Óleo de Semente de Uva Refinado (Ponto de fumaça 215–230 °C): ~70% linoleico e ~16% oleico. Cura com excelente tenacidade sem descascar.\n• Óleo de Girassol Alto Oleico Refinado (Ponto de fumaça 230–240 °C): Notável estabilidade térmica e baixa emissão de fumaça volátil.\n• Óleo de Abacate Refinado (Ponto de fumaça 250–270 °C): Rico em ácido oleico, gera camadas basais resistentes ao calor sem decomposição em acroleína.\n• Gordura Vegetal Hidrogenada ou Banha Bovina: A mistura natural de palmítico, esteárico e oleico produz pátinas elásticas e resistentes por décadas.',
        callout: {
          title: 'A Regra da Microcamada',
          content: 'O maior erro é deixar óleo líquido em excesso. Esfregue o óleo na panela morna e depois limpe vigorosamente com panos secos até a superfície parecer fosca. Gotas visíveis de óleo resultam em resíduos pegajosos e borrachosos.',
          type: 'tip',
          boxText: 'O óleo de semente de uva refinado oferece o equilíbrio perfeito de tenacidade e flexibilidade. Esfregue até a panela parecer sem brilho.'
        }
      },
      {
        title: '5. Protocolo Científico de Cura Passo a Passo',
        content: 'Para criar uma cura definitiva e antiaderente:\n\n1. Aquecimento Inicial: Lave a panela com água e detergente neutro, seque e coloque no forno a 95 °C (200 °F) por 15 minutos para evaporar a umidade dos microporos metálicos.\n2. Aplicação Microscópica: Aplique 1 colher de chá de óleo de semente de uva refinado. Com pano de algodão ou papel-toalha, espalhe por dentro, por fora e no cabo. Esfregue com um pano limpo como se quisesse remover todo o óleo.\n3. Forno Invertido: Coloque a panela virada de cabeça para baixo na grade central a 220–230 °C (425–450 °F) por 60 minutos (coloque papel-alumínio na base do forno).\n4. Resfriamento Gradual: Desligue o forno e deixe a panela esfriar internamente sem abrir a porta por 2 horas para aliviar as tensões térmicas do polímero.\n5. Camadas: Repita o processo de 3 a 4 vezes para construir uma barreira polimérica densa e hidrofóbica.',
        callout: {
          title: 'O Mito do Detergente',
          content: 'Detergentes líquidos modernos à base de tensoativos suaves NÃO removem a cura polimerizada; apenas lavam a gordura superficial solta. Pode lavar panelas de ferro com detergente neutro e água morna sem medo.',
          type: 'tip',
          boxText: 'Asse de cabeça para baixo a 220–230 °C por 60 minutos e repita 3 a 4 vezes com camadas invisíveis para uma antiaderência eterna.'
        }
      }
    ],
    conclusion: 'A cura de utensílios de ferro fundido é uma união magistral de ciência dos polímeros e metalurgia. Evite óleos secativos excessivamente frágeis como o de linhaça que se descascam na comida e fuja de temperaturas que queimam gordura em acroleína tóxica. Com óleo de semente de uva refinado, camadas finíssimas e queima a 220–230 °C, você conquista uma panela com antiaderência natural para a vida toda.',
    faqs: [
      {
        question: 'Por que a cura com óleo de linhaça sempre acaba descascando da panela de ferro?',
        answer: 'O óleo de linhaça tem mais de 50% de ácido alfa-linolênico, formando um polímero extremamente denso e quebradiço como vidro. Quando o ferro dilata no fogão e contrai ao esfriar, o filme de linhaça não possui elasticidade para acompanhar a deformação metálica, quebrando-se e descascando em poucos meses.'
      },
      {
        question: 'Inalar a fumaça de óleo queimado durante a cura no forno é prejudicial à saúde?',
        answer: 'Sim. Quando o óleo ultrapassa seu ponto de queima, ele sofre pirólise e gera acroleína gasosa. A acroleína é um potente tóxico pulmonar e irritante das mucosas com limite ocupacional de apenas 0,1 ppm. Faça a cura sempre com coifa ligada e janelas abertas.'
      },
      {
        question: 'Qual o melhor óleo comprovado cientificamente para curar ferro fundido e aço carbono?',
        answer: 'O óleo de semente de uva refinado e o óleo de girassol alto oleico refinado são os mais recomendados. Eles reúnem alto ponto de fumaça (220–230 °C), acidez livre insignificante (<0,05%) e equilíbrio ideal entre reticulação e flexibilidade, formando uma cura resistente que não se solta.'
      },
      {
        question: 'Posso usar detergente para lavar frigideiras de ferro fundido curadas?',
        answer: 'Sim. A crença de que sabão estraga o ferro fundido remonta aos sabões antigos com soda cáustica livre (lixívia), que atacava as gorduras. Os detergentes líquidos atuais são tensoativos suaves que só dissolvem a gordura superficial sem romper a cadeia polimerizada da cura.'
      },
      {
        question: 'Por que minha frigideira de ferro ficou grudenta e pegajosa após a cura no forno?',
        answer: 'Superfície pegajosa é sintoma clássico de excesso de óleo. Camadas grossas impedem a penetração do oxigênio até o metal, travando a polimerização e deixando óleo semipolimerizado gomoso. Para consertar, asse de cabeça para baixo a 230 °C por mais uma hora ou esfregue com sal grosso e refaça a cura em camadas microscópicas.'
      }
    ],
    relatedTools: [
      {
        name: 'Modelador de Degradação de Cura em Ferro Fundido e Aço Carbono',
        url: '/pt/tools/cast-iron-seasoning-degradation-modeler/'
      },
      {
        name: 'Solucionador de Problemas de Cura em Ferro Fundido',
        url: '/pt/tools/cast-iron-seasoning-troubleshooter/'
      },
      {
        name: 'Simulador de Ponto de Fumaça de Óleos Culinários',
        url: '/pt/tools/culinary-oil-smoke-point-simulator/'
      }
    ],
    relatedComparisons: [
      {
        name: 'Frigideira de Ferro Fundido vs Aço Carbono',
        url: '/pt/compare/cast-iron-vs-carbon-steel-skillet/'
      },
      {
        name: 'Frigideira de Ferro Fundido vs Aço Inoxidável',
        url: '/pt/compare/cast-iron-vs-stainless-steel-skillet/'
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
