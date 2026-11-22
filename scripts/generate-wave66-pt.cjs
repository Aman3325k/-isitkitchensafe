const fs = require('fs');
const path = require('path');

const waveDate = '2026-11-22';

console.log('=== GENERATING WAVE 66 AUTHORITATIVE SAFETY GUIDES (98 -> 101) [PT] ===');

const newGuidesPt = [
  {
    slug: 'food-processor-blade-fatigue-chipping-kinetic-safety',
    title: 'Fadiga de Lâminas em S e Quebra de Copos em Processadores de Alimentos: Microfissuras Cinéticas, Fissuras no Policarbonato e Riscos na Lava-Louças',
    category: 'appliances',
    excerpt: 'Por que lâminas de corte em aço inoxidável trincam ou soltam microfragmentos de metal em massas e pastas, e como o calor da lava-louças racha a tigela de policarbonato? Explore a fadiga mecânica e a prevenção de estilhaçamento.',
    date: waveDate,
    readTime: '14 min de leitura',
    author: 'IsItKitchenSafe',
    intro: 'Processadores de alimentos e robôs de cozinha são equipamentos fundamentais que utilizam motores de indução de alto torque (tipicamente de 600 a 1.200 watts) para movimentar lâminas em S de alta velocidade através de raízes densas, frutas congeladas, massas pesadas e leguminosas cruas. Ao operarem entre 1.500 e 2.000 RPM, os conjuntos de corte em aço inoxidável sofrem severa tensão torsional cíclica, choque cinético intenso e deflexão contínua. Ao longo de centenas de ciclos operacionais, a fadiga metálica microscópica propaga-se na base, rebites e gumes afiados, resultando em fraturas catastróficas ou liberação de microesquírolas cortantes nos alimentos. Simultaneamente, as tigelas transparentes de policarbonato ou copoliéster sofrem microfissuração sob tensão ambiental (ESC) e hidrólise alcalina na lava-louças. Dominar a mecânica de fratura do aço martensítico e a química das resinas é vital para a segurança culinária doméstica.',
    sections: [
      {
        title: 'Metalurgia de Lâminas Culinárias: Dureza do Aço Martensítico AISI 420 vs Tenacidade ao Impacto Cíclico',
        content: 'As lâminas picadoras de processadores de alimentos são usinadas em aços inoxidáveis martensíticos, principalmente AISI 420 ou AISI 440A. Essas ligas contêm entre 0,15% e 0,40% de carbono e de 12% a 14% de cromo, permitindo tratamentos térmicos de têmpera e revenimento para atingir durezas Rockwell de HRC 52 a 56. Embora essa dureza assegure um gume extremamente afiado, ela reduz drasticamente a tenacidade ao impacto Charpy e a ductilidade. Girando a 1.800 RPM, a ponta da lâmina colide com grãos secos, manteiga congelada ou fragmentos de osso. A deflexão cíclica induz fadiga mecânica nos carbonetos de cromo dos contornos de grão, gerando microvazios que se unem em trincas macroscópicas.',
        callout: 'PRINCÍPIO METALÚRGICO: O aço martensítico AISI 420 alcança alta dureza de corte (HRC 54) com redução drástica da ductilidade. Impactos cinéticos repetitivos com ingredientes rígidos iniciam trincas de fadiga nos contornos de grão.'
      },
      {
        title: 'O Histórico Recall da Cuisinart: 4,3 Milhões de Unidades e Propagação de Trincas em Rebites',
        content: 'A fragilidade de conjuntos cortantes foi exposta em dezembro de 2016, quando a Comissão de Segurança de Produtos de Consumo dos EUA (CPSC) anunciou o recall nacional de cerca de 4,3 milhões de lâminas de processadores Cuisinart (Recall Nº 17-061). O projeto empregava rebites para prender duas lâminas de aço a um cubo plástico central. Sob torque contínuo, os furos dos rebites atuaram como concentradores de tensão mecânica. Com o tempo, as vibrações afrouxaram os rebites, permitindo a infiltração de sucos ácidos na fresta. Isso acelerou a corrosão por frestas e a fratura sob tensão, quebrando lâminas e desprendendo fragmentos de metal de 2 a 10 mm em massas e purês.',
        callout: 'ESTUDO DE CASO: O recall CPSC 17-061 recolheu 4,3 milhões de lâminas devido a trincas de fadiga nos furos dos rebites. Lâminas seguras modernas utilizam peças sólidas inteiriças sem rebites mecânicos.'
      },
      {
        title: 'Policarbonato vs Copoliéster Tritan: Microfissuras sob Atrito Rotacional a Alta Velocidade',
        content: 'As tigelas dos processadores suportam forças mecânicas extremas: pressão centrífuga externa, atrito com ingredientes abrasivos (açúcar cristal, sal grosso, grãos) e vibração do motor. Recipientes moldados em policarbonato com BPA ou em copoliéster Tritan são termoplásticos amorfos. Sob tensão cíclica, as cadeias poliméricas se alinham sob esforço, formando vazios microscópicos denominados "micro-crazing" ou microfissuras em teia de aranha. Conforme as microfissuras aumentam, a resistência à tração da tigela cai até 70%, tornando-a frágil e propensa a estilhaçar repentinamente caso a lâmina sofra um impacto.',
        callout: 'ALERTA ESTRUTURAL: As microfissuras em teia de aranha nas paredes da tigela indicam severa degradação das cadeias de polímero. Tigelas fissuradas perdem até 70% de resistência ao impacto e podem quebrar violentamente ao sovar massas.'
      },
      {
        title: 'Hidrólise Alcalina na Lava-Louças: Como os Detergentes Cáusticos Rompem as Cadeias da Tigela',
        content: 'A máquina de lavar louças doméstica é o principal agente acelerador da degradação das tigelas e da liberação de microplásticos. Os detergentes em pó e pastilhas contêm agentes alcalinos concentrados (carbonato de sódio, metassilicato de sódio) que elevam o pH da lavagem para 10,0 a 11,5. Em conjunto com temperaturas de 65°C a 75°C e secagem por resistência elétrica, os íons hidróxido (OH-) atacam as ligações éster da cadeia polimérica. Essa reação de saponificação rompe os polímeros em oligômeros de baixo peso molecular, tornando a tigela leitosa, opaca e microscopicamente áspera, desprendendo milhões de partículas microplásticas nos alimentos.',
        callout: 'DEGRADAÇÃO QUÍMICA: Detergentes alcalinos de lava-louças (pH 10–11,5) hidrolisam quimicamente as ligações éster dos recipientes plásticos. O aspecto opaco e leitoso indica dano molecular irreversível e desprendimento de microplásticos.'
      },
      {
        title: 'Toxicologia Oral e Ingestão de Corpos Estranhos: Microfragmentos Metálicos vs Mucosa Gástrica (FDA 21 CFR § 110.80)',
        content: 'Quando uma lâmina com fadiga se lasca, os microfragmentos de aço inoxidável (de 100 µm a mais de 5 mm) representam sérios perigos de traumatismo físico. De acordo com as normas da FDA (21 CFR § 110.80), fragmentos de metal em alimentos configuram perigo crítico de Classe I. As esquírolas cortantes podem lacerar a mucosa bucal, fraturar o esmalte dentário na mastigação, perfurar o esôfago ou causar hemorragias gastrointestinais. Além disso, no estômago, o ácido clorídrico (pH 1,5–2,0) reage com o aço exposto, acelerando a solubilização de níquel e cromo para a corrente sanguínea.',
        callout: 'IMPACTO TOXICOLÓGICO: A ingestão de fragmentos de lâminas constitui emergência cirúrgica (lacerações bucais, perfuração esofágica) e eleva a dissolução de metais pesados sob a ação do ácido gástrico.'
      }
    ],
    conclusion: 'Processadores de alimentos entregam grande agilidade culinária, mas a sua cinética rotacional extrema exige vigilância mecânica constante. Ao reconhecer que lâminas de aço martensítico são suscetíveis à fadiga cíclica, descartar conjuntos antigos com rebites em favor de lâminas inteiriças fundidas, inspecionar gumes sob luz direta, lavar tigelas plásticas exclusivamente à mão com sabão neutro e substituir recipientes leitosos ou trincados, cozinheiros eliminam riscos de estilhaçamento e evitam a ingestão inadvertida de metais e microplásticos.',
    faqs: [
      {
        question: "Por que a CPSC realizou o recall de 4,3 milhões de lâminas de processadores de alimentos?",
        answer: "O recall (CPSC Nº 17-061) ocorreu porque as lâminas com fixação de quatro rebites da Cuisinart apresentavam fadiga mecânica. O torque causava trincas no metal nos furos dos rebites, quebrando fragmentos cortantes de aço inoxidável para dentro dos alimentos e provocando lacerações na boca e dentes quebrados."
      },
      {
        question: "Como posso inspecionar a lâmina do meu processador de alimentos quanto a microtrincas?",
        answer: "Antes e após cada utilização, lave a lâmina à mão e seque com cuidado. Sob iluminação forte e direta, observe a junção entre a lâmina de aço e o cubo plástico central. Procure linhas finas escuras, folga no eixo, desníveis ou dentes quebrados no fio cortante. Se notar qualquer trinca ou rebite frouxo, substitua a lâmina de imediato."
      },
      {
        question: "Uma tigela de processador com microfissuras em teia de aranha pode explodir durante o uso?",
        answer: "Sim. As microfissuras em teia de aranha e o aspecto leitoso causados pelos detergentes da lava-louças indicam perda de integridade estrutural. Ao sovar massas pesadas ou processar nozes duras, a força centrífuga e a vibração podem fazer com que a tigela enfraquecida se estilhace violentamente."
      },
      {
        question: "Quais alimentos oferecem maior risco de quebrar as lâminas do processador?",
        answer: "Ingredientes densos e rígidos que causam grande resistência cinética: cubos de gelo inteiros, carnes ou frutas congeladas em bloco, leguminosas cruas duras (grão-de-bico/feijão seco), nozes duras com casca, lascas de osso e massas pesadas e geladas de pão. Triture previamente ou use pulsos curtos com esses itens."
      },
      {
        question: "Qual é o protocolo correto de limpeza e conservação para lâminas e tigelas plásticas?",
        answer: "Lave sempre a lâmina e a tigela plástica à mão com água morna, sabão neutro (pH 7–8) e esponja macia de microfibra. Nunca coloque na lava-louças, pois a água cáustica (pH > 10) hidrolisa o plástico e o calor degrada os selos. Guarde a lâmina fora da tigela para evitar colisões acidentais."
      }
    ],
    relatedTools: [
      {
        name: "Modelador de Fadiga de Lâminas de Processador",
        url: "/pt/tools/food-processor-blade-fatigue-modeler/"
      },
      {
        name: "Analisador de Microplásticos em Tábuas de Corte",
        url: "/pt/tools/cutting-board-microplastic-pathogen-analyzer/"
      },
      {
        name: "Verificador de Lixiviação em Plásticos de Cozinha",
        url: "/pt/tools/kitchen-plastic-leaching-checker/"
      }
    ]
  },
  {
    slug: 'ceramic-nonstick-cookware-solgel-degradation-nanoparticle-safety',
    title: 'Degradação Sol-Gel e Segurança de Nanopartículas em Panelas Cerâmicas: Porosidade da Sílica, Carbonização Térmica e Lixiviação do Substrato de Alumínio',
    category: 'materials',
    excerpt: 'Panelas antiaderentes cerâmicas \'ecológicas\' continuam seguras após perderem o efeito antiaderente? Investigue a degradação da matriz sol-gel de sílica, óleos carbonizados presos em microporos e a corrosão do alumínio.',
    date: waveDate,
    readTime: '13 min de leitura',
    author: 'IsItKitchenSafe',
    intro: 'Em meio às preocupações crescentes com fluoropolímeros sintéticos (PTFE/Teflon) e compostos perfluoroalquilados persistentes (PFAS, PFOA), panelas com revestimento cerâmico tornaram-se líderes de vendas como opções antiaderentes "atóxicas e ecológicas". Anunciadas como 100% livres de PTFE, chumbo e cádmio, utilizam revestimentos inorgânicos sol-gel originários de sílica (SiO2). No entanto, milhões de consumidores enfrentam a mesma frustração: em poucos meses, a capacidade antiaderente desaparece, alimentos grudam fortemente e manchas amarronzadas tornam-se indeléveis. Longe de serem esmaltes vítreos indestrutíveis, os revestimentos sol-gel são filmes híbridos organossilícicos de espessura micrométrica e alta fragilidade térmica. Quando aquecidos acima de 230°C ou usados com óleos em spray, a matriz de sílica degrada-se, aprisiona lipídios oxidados e deixa o alumínio base desprotegido.',
    sections: [
      {
        title: 'Química dos Revestimentos Sol-Gel: Redes de Sílica Inorgânica e Metilpolissiloxanos',
        content: 'Diferente dos revestimentos clássicos de PTFE curados a 400°C, os revestimentos "cerâmicos" são sintetizados pelo processo sol-gel. Precursores de alcoxissilano (como tetraetoxissilano [TEOS] e metiltrimetoxissilano [MTMS]) passam por hidrólise ácida para formar uma solução coloidal ("sol"). Esta é pulverizada sobre o alumínio jateado e cozida a temperaturas moderadas (200°C a 250°C), condensando-se em uma rede inorgânica de dióxido de silício ("gel"). Como a sílica pura é altamente aderente aos alimentos, os fabricantes incorporam grupos alquila (sobretudo metila, -CH3), criando um filme híbrido cujos radicais metila antiaderentes apontam para a superfície externa.',
        callout: 'ARQUITETURA QUÍMICA: Revestimentos cerâmicos sol-gel não são esmaltes vítreos fundidos em forno cerâmico. São redes híbridas organossilícicas que unem esqueletos de sílica (SiO2) a cadeias metila (-CH3) hidrofóbicas.'
      },
      {
        title: 'Cinética de Degradação Térmica: Por Que Cozinhar Acima de 230°C Destrói a Antiaderência',
        content: 'O ponto crítico dos revestimentos sol-gel é a sensibilidade térmica de suas ligações orgânicas. Enquanto o esqueleto inorgânico de sílica (Si-O-Si) tolera mais de 500°C, os radicais metila (-CH3) que repelem a comida sofrem oxidação pirolítica e quebra térmica a partir de 230°C. Em queimadores a gás ou placas de indução, uma panela vazia atinge 250°C em menos de 90 segundos. Ao queimar os grupos metila, a malha hidrofílica de sílica fica exposta, transformando a superfície em uma matriz mineral que adere intensamente a proteínas e amidos.',
        callout: 'LIMITE TÉRMICO: Os grupos metila que proporcionam a antiaderência sofrem degradação pirolítica irreversível acima de 230°C. O cozimento em fogo alto destrói a antiaderência da panela cerâmica em poucos minutos.'
      },
      {
        title: 'Aprisionamento Capilar Microporoso: Polimerização de Óleos e Verniz Insolúvel',
        content: 'Mesmo abaixo da quebra térmica, os revestimentos sol-gel contêm microporos formados durante a evaporação dos solventes na cura. Ao aquecer óleos poli-insaturados, os triglicerídeos sofrem auto-oxidação e polimerização, transformando-se em um verniz gomoso aderente. Os microporos da sílica atraem esses óleos líquidos por ação capilar. Uma vez no interior dos poros minerais, o óleo carboniza com os usos seguintes e não sai com lavagens suaves, gerando uma superfície microscopicamente áspera que agarra os alimentos.',
        callout: 'FENÔMENO DO VERNIZ DE ÓLEO: A estrutura microporosa da sílica absorve óleos por capilaridade. O calor subsequente polimeriza esses óleos em vernizes insolúveis que eliminam a antiaderência.'
      },
      {
        title: 'Microfissuras Superficiais e Corrosão Ácida do Substrato de Alumínio',
        content: 'Os revestimentos sol-gel possuem espessura muito fina (apenas 25 a 45 micrômetros) e baixa tenacidade mecânica. O uso de talheres de metal ou esponjas abrasivas gera microrranhuras. Ao preparar receitas ácidas (molho de tomate, reduções de vinho, suco de limão, pH 3,0–4,2), o ácido atinge o corpo de alumínio sob as fendas. O alumínio reage galvanicamente, liberando íons bioassimiláveis nos alimentos e formando bolhas de óxido que provocam o desprendimento de lascas do revestimento cerâmico.',
        callout: 'LIXIVIAÇÃO DO SUBSTRATO: Riscar um revestimento cerâmico de 35 µm expõe o alumínio a molhos ácidos (pH < 4,0), acelerando a migração metálica e provocando o descascamento do revestimento.'
      },
      {
        title: 'Avaliação Toxicológica: Riscos de Nanopartículas vs Metais Pesados (EFSA e BfR)',
        content: 'Do ponto de vista regulatório (segundo a EFSA europeia e o BfR alemão), revestimentos cerâmicos intactos e de grau alimentício são seguros e isentos de compostos fluorados. No entanto, quando sofrem desgaste mecânico e térmico, liberam nanopartículas minerais nos alimentos: sílica amorfa e dióxido de titânio (TiO2, pigmento branco). O dióxido de titânio (E171) foi proibido em alimentos na União Europeia em 2022 por preocupações de genotoxicidade. Além disso, panelas cerâmicas baratas sem certificação podem conter resíduos de chumbo e cádmio nas camadas de primer.',
        callout: 'AUDITORIA TOXICOLÓGICA: Embora livres de PFAS, panelas cerâmicas degradadas desprendem nanopartículas minerais. Prefira modelos com certificação NSF e aposente a panela se o metal base ficar exposto.'
      }
    ],
    conclusion: 'Panelas antiaderentes cerâmicas são uma excelente opção livre de PFAS para cozinhar em fogo baixo a moderado, mas não toleram calor excessivo. Mantendo as temperaturas abaixo de 220°C, evitando óleos em spray com lecitina, lavando sempre à mão com esponjas macias e bicarbonato de sódio e descartando panelas que apresentem riscos profundos com metal visível, é possível desfrutar de refeições saudáveis sem riscos toxicológicos.',
    faqs: [
      {
        question: "Por que as panelas cerâmicas perdem a antiaderência após poucos meses de uso?",
        answer: "A perda decorre de dois fatores principais: (1) o cozimento em temperaturas superiores a 230°C queima os grupos metila hidrofóbicos ligados à sílica, e (2) óleos de cozinha penetram nos microporos do revestimento e se polimerizam em um verniz gomoso que prende os alimentos."
      },
      {
        question: "É seguro continuar cozinhando em uma panela cerâmica quando a comida começa a grudar?",
        answer: "Sim, desde que o revestimento permaneça contínuo e o alumínio do fundo não esteja exposto. A perda de antiaderência decorre de óleos carbonizados e alteração térmica da superfície, e não de toxinas perigosas. Você apenas precisará usar mais óleo para cozinhar."
      },
      {
        question: "Panelas cerâmicas riscadas liberam substâncias PFAS ou 'químicos eternos'?",
        answer: "Não. Os revestimentos cerâmicos sol-gel são 100% livres de PTFE, PFAS, PFOA e fluoropolímeros. Uma panela cerâmica riscada não libera compostos fluorados, embora o alumínio exposto possa lixiviar em preparações ácidas."
      },
      {
        question: "É possível restaurar a antiaderência de uma panela cerâmica com bicarbonato de sódio?",
        answer: "O bicarbonato de sódio ajuda a dissolver o verniz de óleo polimerizado acumulado nos microporos. Faça uma pasta com bicarbonato e água morna, aplique na panela, aguarde 30 minutos e limpe com esponja suave. Isso desobstrui os poros, mas não recupera os grupos químicos destruídos por fogo alto."
      },
      {
        question: "Qual é o protocolo para prolongar a vida útil de panelas cerâmicas?",
        answer: "Para maximizar a durabilidade: (1) Nunca pré-aqueça a panela vazia em fogo alto; (2) Cozinhe apenas em fogo baixo a médio (abaixo de 220°C); (3) Use somente espátulas de silicone ou madeira; (4) Evite sprays de óleo com lecitina; (5) Lave sempre à mão após o resfriamento completo da panela."
      }
    ],
    relatedTools: [
      {
        name: "Calculadora de Substituição Segura de Materiais",
        url: "/pt/tools/material-swap-calculator/"
      },
      {
        name: "Tabela de Pontuação de Lixiviação Tóxica e PFAS",
        url: "/pt/tools/toxic-leaching-scorecard/"
      },
      {
        name: "Índice de Transparência de Marcas de Panelas",
        url: "/pt/tools/cookware-brand-transparency-index/"
      }
    ]
  },
  {
    slug: 'citrus-press-lemon-squeezer-enameled-aluminum-acidic-leaching-safety',
    title: 'Segurança em Espremedores de Limão de Alumínio Esmaltado: Cinética de Lixiviação com Ácido Cítrico, Descascamento de Tinta e Oxidação na Lava-Louças',
    category: 'materials',
    excerpt: 'Por que espremedores manuais de alumínio pintado descascam com suco de limão fresco (pH 2,0)? Analise a quelação por ácido cítrico, a contaminação por pigmentos de metais pesados e a fuligem preta em lava-louças.',
    date: waveDate,
    readTime: '13 min de leitura',
    author: 'IsItKitchenSafe',
    intro: 'Espremedores manuais articulados de citrinos — os populares utensílios coloridos em amarelo, verde ou laranja presentes em cozinhas e bares — são a escolha preferida para extrair suco de limão fresco. A grande maioria dos modelos econômicos é fabricada em ligas de alumínio fundido com acabamento em tinta a pó eletrostática ou esmalte sintético epóxi-poliéster. No entanto, inúmeros usuários observam a tinta descascar e formar bolhas ao redor do rebite articulado e dos orifícios de drenagem, ou a peça ficar cinza e soltar uma fuligem preta após ser lavada na máquina de lavar louças. O suco de limão fresco é um solvente ácido potente, com pH entre 2,0 e 2,4 devido a concentrações de ácido cítrico de até 48 g/L. Sob a pressão do aperto e em contato com essa acidez, espremedores descascados transferem lascas de tinta e metais pesados para o suco.',
    sections: [
      {
        title: 'Termodinâmica da Quelação Ácida: Ataque do Ácido Cítrico ao Alumínio Elementar (pH 2,0–2,4)',
        content: 'O suco de limão fresco é uma das substâncias culinárias mais ácidas e quimicamente reativas, com 5% a 8% de ácido cítrico (C6H8O7) e pH medido de 2,0 a 2,4. O ácido cítrico possui três carboxilas (-COOH) e uma hidroxila (-OH), atuando como um potente quelante natural com alta afinidade por cátions metálicos trivalentes (Al3+). Em contato com o alumínio desprotegido, o ácido cítrico dissolve a película passiva de óxido de alumínio (Al2O3), gerando complexos solúveis de citrato de alumínio [Al(C6H5O7)] altamente assimiláveis. Estudos toxicológicos indicam que a pressão mecânica acelera essa dissolução, superando com facilidade os limites semanais de segurança da EFSA (1 mg/kg de peso corporal).',
        callout: 'QUELAÇÃO POR ÁCIDO CÍTRICO: O suco de limão (pH 2,0–2,4) contém abundante ácido cítrico, um poderoso quelante que corrói o alumínio exposto formando citrato de alumínio altamente solúvel.'
      },
      {
        title: 'Pintura a Pó vs Esmalte Vítreo: Por Que a Tinta Solta na Articulação e nos Orifícios',
        content: 'Espremedores populares são rotulados como "esmaltados", sugerindo acabamento em porcelana vítrea fundida a alta temperatura. Na realidade, quase todos os modelos baratos recebem tinta em pó termoendurecível de poliéster curada a apenas 180°C–200°C. Ao espremer meio limão, o braço de alavanca gera forças pontuais acima de 300–500 Newtons sobre o pino de articulação e a base do espremedor. Sementes duras e cascas rígidas arranham a tinta, e o suco ácido penetra por capilaridade, corroendo o alumínio inferior. Essa corrosão mina a adesão da película de tinta, fazendo com que lascas coloridas caiam diretamente em molhos e bebidas.',
        callout: 'FALHA DE ADESÃO: Espremedores baratos usam tintas em pó frágeis, e não esmalte vítreo cerâmico. O atrito das sementes risca a tinta, o ácido ataca o alumínio base e a tinta se desprende na comida.'
      },
      {
        title: 'Fuligem Preta na Lava-Louças: Saponificação Alcalina e Oxidação Cáustica',
        content: 'Uma reclamação frequente entre consumidores é o surgimento de uma camada preta e empoeirada no espremedor após uma única lavagem na máquina de lavar louças. Os detergentes para lava-louças são altamente alcalinos (pH 10,5 a 11,5 com hidróxido de sódio e silicatos). O alumínio é um metal anfótero que se decompõe tanto em ácidos quanto em álcalis fortes. A água quente cáustica saponifica a tinta e corrói a liga de alumínio fundido, oxidando elementos da liga (silício, cobre, ferro) em uma camada escura insolúvel chamada metalurgicamente de fuligem ("smut"). Esse resíduo escurece as mãos e contamina os alimentos permanentemente.',
        callout: 'DANO CÁUSTICO DA LAVA-LOUÇAS: Detergentes alcalinos (pH > 10,5) atacam o alumínio fundido, gerando uma camada escura e pulverulenta de óxidos metálicos insolúveis conhecida como "smut".'
      },
      {
        title: 'Perfil Toxicológico de Pigmentos: Chumbo e Cádmio em Tintas de Importações Baratas',
        content: 'As lascas de tinta que se soltam do espremedor constituem risco toxicológico severo. Para produzir tonalidades vivas de amarelo e verde em tintas industriais econômicas, produtores sem fiscalização têm historicamente utilizado pigmentos inorgânicos com cromato de chumbo (PbCrO4) e sulfosseleneto de cádmio (CdS/CdSe). Ao ingerir essas partículas junto com o suco cítrico, o suco gástrico (pH 1,5) solubiliza rapidamente os pigmentos em íons livres de chumbo e cádmio. Ambos os metais são neurotoxinas e nefrotoxinas cumulativas sem qualquer limite seguro de exposição humana.',
        callout: 'METAIS PESADOS EM PIGMENTOS: Tintas amarelas e verdes em espremedores baratos podem conter aditivos com chumbo e cádmio. A ingestão de lascas de tinta representa um grave risco toxicológico.'
      },
      {
        title: 'Aço Inoxidável AISI 304 vs Alumínio Fundido: Passivação e Metalurgia Alimentícia (ASTM A967)',
        content: 'Para assegurar inércia química definitiva e durabilidade por toda a vida, cozinheiros e barmen profissionais utilizam espremedores maciços em aço inoxidável de grau alimentício AISI 304 (18/8) ou AISI 316. Ao contrário do alumínio, o aço inoxidável austenítico contém 18% de cromo e 8% a 10% de níquel. Em contato com o oxigênio ou por decapagem industrial (norma ASTM A967), ele desenvolve espontaneamente uma película passiva de óxido de cromo (Cr2O3) totalmente impenetrável pelo ácido cítrico (pH 2,0). Não possui tintas que possam soltar, suporta lavagem em lava-louças e elimina qualquer risco de contaminação por alumínio ou metais pesados.',
        callout: 'PADRÃO OURO METALÚRGICO: Espremedores maciços em aço inoxidável AISI 304 formam camada passiva de óxido de cromo (ASTM A967) imune ao ácido cítrico (pH 2,0), sem lascas de tinta ou contaminação.'
      }
    ],
    conclusion: 'Espremedores manuais enfrentam simultaneamente enorme esforço mecânico e severa quelação por ácido cítrico (pH 2,0). Modelos de alumínio pintado apresentam falhas crônicas de descascamento e corrosão cáustica na lava-louças. Descartar espremedores lascados e adotar prensas maciças em aço inoxidável AISI 304 garante sucos cítricos frescos, limpos e totalmente livres de lascas de tinta e metais pesados.',
    faqs: [
      {
        question: "Por que a tinta está descascando dentro do meu espremedor de limão?",
        answer: "A tinta se desprende porque o suco de limão é muito ácido (pH 2,0–2,4). A pressão mecânica das sementes racha a tinta a pó, permitindo que o ácido cítrico atinja o alumínio da base. O ácido corrói o metal, descolando a camada de tinta em lascas que caem no suco."
      },
      {
        question: "É perigoso consumir suco feito em um espremedor de metal com tinta descascando?",
        answer: "Sim. Fragmentos de tinta podem ser ingeridos e, em espremedores baratos sem procedência, as tintas amarelas e verdes podem conter pigmentos tóxicos de chumbo e cádmio. Além disso, o alumínio exposto reage com a acidez, lixiviando citrato de alumínio para a bebida."
      },
      {
        question: "Por que meu espremedor de alumínio ficou cinza-escuro e soltando pó preto após a lava-louças?",
        answer: "Detergentes de lava-louças são extremamente alcalinos (pH 10,5–11,5). A água quente com agentes cáusticos ataca o alumínio, removendo restos de tinta e precipitando uma fuligem preta metálica ('smut') insolúvel, que mancha as mãos e não pode ser removida."
      },
      {
        question: "Posso raspar toda a tinta restante do espremedor e continuar usando o alumínio puro?",
        answer: "Não é recomendado. O alumínio fundido sem proteção reage de imediato com o ácido cítrico, transferindo grandes quantidades de alumínio para o suco. Além disso, a porosidade do metal fundido pode reter resíduos químicos da tinta original."
      },
      {
        question: "Qual é o material mais seguro e resistente para um espremedor de limão manual?",
        answer: "O aço inoxidável maciço de grau alimentício AISI 304 (18/8) é a melhor escolha. Ele não utiliza tintas ou revestimentos superficiais, é imune à corrosão por ácido cítrico (pH 2,0), é 100% lavável na lava-louças e nunca libera metais tóxicos."
      }
    ],
    relatedTools: [
      {
        name: "Calculadora de Substituição Segura de Materiais",
        url: "/pt/tools/material-swap-calculator/"
      },
      {
        name: "Tabela de Pontuação de Lixiviação Tóxica e PFAS",
        url: "/pt/tools/toxic-leaching-scorecard/"
      },
      {
        name: "Modelador de Lixiviação em Aço Inoxidável",
        url: "/pt/tools/stainless-steel-heavy-metal-leaching-modeler/"
      }
    ]
  }
];

// Append to src/data/blog.pt.json
const blogPath = path.resolve('src/data/blog.pt.json');
const blog = JSON.parse(fs.readFileSync(blogPath, 'utf8'));

let added = 0;
for (const guide of newGuidesPt) {
  if (!blog.find(b => b.slug === guide.slug)) {
    blog.push(guide);
    added++;
    console.log(`✅ Added guide '${guide.slug}' to blog.pt.json`);
  } else {
    console.log(`ℹ️ Guide '${guide.slug}' already exists in blog.pt.json`);
  }
}

fs.writeFileSync(blogPath, JSON.stringify(blog, null, 2) + '\n', 'utf8');
console.log(`✅ Finished PT blog data. Total guides: ${blog.length} (+${added} added)`);
