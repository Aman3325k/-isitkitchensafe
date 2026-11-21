const fs = require('fs');
const path = require('path');

const waveDate = '2026-11-21';

console.log('=== GENERATING WAVE 54 PORTUGUESE SAFETY GUIDES (80 -> 83) ===');

const ptGuides = [
  {
    slug: 'carbon-steel-pan-seasoning-blueing-acid-stripping-safety',
    title: 'Química da Cura em Aço Carbono, Oxidação Térmica (Blueing) e Ataque Ácido: Passivação por Magnetita (Fe3O4), Reticulação Linoleica e Limites de Lixiviação',
    excerpt: 'Cozinhar com vinho ou vinagre estraga permanentemente a cura da frigideira de aço carbono? Descubra a termodinâmica da oxidação por magnetita (Fe3O4), a hidrólise de ésteres sob acidez, a biodisponibilidade do ferro e sua restauração rápida.',
    date: waveDate,
    readTime: '9 min de leitura',
    author: 'IsItKitchenSafe',
    intro: 'O aço carbono ocupa uma posição de prestígio em cozinhas profissionais e residenciais, reunindo a excepcional condutividade e capacidade de selagem do ferro fundido com a leveza e manuseio ágil do aço inoxidável. Contudo, manter uma película antiaderente uniforme em aço carbono impõe desafios químicos e termodinâmicos próprios. Ao contrário da superfície rugosa e porosa do ferro fundido em areia, o aço laminado a frio é extremamente liso (rugosidade Ra ≈ 0.5–1.5 µm). Em contato com ácidos culinários de baixo pH —como deglaçar com vinho branco, suco de limão ou molhos de tomate concentrados—, o filme de polímeros reticulados sofre hidrólise de ésteres imediata, expondo o metal reativo e liberando íons ferrosos (Fe²⁺) e férricos (Fe³⁺) no prato.',
    sections: [
      {
        title: '1. Metalurgia e Oxidação Térmica (Blueing): Passivação com Magnetita (Fe3O4) vs Hematita (Fe2O3) a 280°C–310°C',
        content: 'Antes da queima com óleo vegetal, o aço carbono pode passar pelo processo de azulamento térmico ("blueing"). Ao submeter o metal limpo a temperaturas acima de 280°C sob ar ambiente, o oxigênio difunde-se na estrutura atômica gerando uma camada de conversão de magnetita (Fe3O4). Diferente da ferrugem avermelhada instável (hematita, Fe2O3), que é quebradiça e porosa, a magnetita forma uma malha de espinélio compacta firmemente ancorada ao aço. Essa película preta-azulada desempenha dois papéis essenciais: bloqueia a oxidação espontânea imediata e confere micro-aspereza submícron que aprimora a ancoragem mecânica das camadas polimerizadas.',
        type: 'info',
        boxText: 'O azulamento a 280°C–310°C cria uma camada passivada de magnetita (Fe3O4) que repele a ferrugem e fortalece a aderência da cura.'
      },
      {
        title: '2. Cinética de Polimerização: Auto-oxidação de Triglicerídeos, Duplas Ligações Conjugadas e Reticulação Radicalar',
        content: 'A superfície antiaderente de uma frigideira curada não é gordura endurecida, mas sim uma rede tridimensional insolúvel de biopolímero. Quando óleos insaturados secativos ou semissecaivos (como semente de uva ou canola) são aquecidos além de seu ponto de fumaça em películas finas, a auto-oxidação térmica gera radicais livres. Ácidos graxos poli-insaturados com dienos (ácido linoleico) sofrem abstração de hidrogênio gerando duplas ligações conjugadas. Esses sistemas sofrem adições Diels-Alder rápidas, reticulando as cadeias de ácidos graxos em uma estrutura vítrea, termoestável e covalentemente coordenada ao metal.',
        type: 'tip',
        boxText: 'A polimerização transforma óleos vegetais em um biopolímero vítreo e resistente por meio de radicais livres e reticulação térmica.'
      },
      {
        title: '3. Hidrólise Catalisada por Ácidos: Por Que Deglaçar com Vinho, Limão ou Tomate Rompe as Ligações em Segundos',
        content: 'Apesar de sua dureza mecânica, a película polimerizada é vulnerável a ácidos orgânicos. Alimentos com pH < 4.0 —reduções de vinho branco seco (ácidos tartárico e málico), suco de limão (ácido cítrico) ou extrato de tomate— fornecem íons hidrônio (H+) concentrados. Esses íons protonam os oxigênios das ligações éster (-COO-), facilitando o ataque de moléculas de água. Essa hidrólise ácida degrada a cadeia polimérica em ácidos graxos livres e glicerol, dissolvendo simultaneamente o ferro subjacente: Fe + 2H+ → Fe²⁺ + H2. A perda de coesão interfacial faz com que a cura se solte em escamas pretas visíveis.',
        type: 'warning',
        boxText: 'Ácidos culinários hidrolisam as ligações éster da cura em instantes, desprendendo flocos pretos e expondo o ferro reativo.'
      },
      {
        title: '4. Cinética de Lixiviação e Biodisponibilidade: Fe²⁺ vs Fe³⁺ e Limites de Segurança Dietética (UL 45 mg/dia)',
        content: 'Quando o aço reage com molhos ácidos, o metal dissolve-se inicialmente na forma de íon ferroso divalente (Fe²⁺), altamente solúvel e absorvido eficientemente no duodeno pelo transportador DMT1. Com o cozimento e a absorção de oxigênio atmosférico, oxida-se em íon férrico trivalente (Fe³⁺): 4Fe²⁺ + O2 + 4H⁺ → 4Fe³⁺ + 2H2O. Os íons férricos complexam-se com taninos e polifenóis de tomates e vinhos gerando precipitados escuros de tanato de ferro, provocando um forte gosto adstringente de "moeda de cobre". Ensaios laboratoriais revelam que molhos de tomate cozidos por 30 minutos em aço desprotegido absorvem de 20 mg a 50 mg de ferro por porção. Embora benéfico para casos de anemia, ultrapassa o Limite Superior Tolerável (UL) de 45 mg/dia e oferece sério risco hepático a portadores de hemocromatose hereditária.',
        type: 'warning',
        boxText: 'Cozinhar molhos ácidos em aço carbono sem cura pode lixiviar mais de 40 mg de ferro por porção, superando o teto diário recomendado de 45 mg.'
      },
      {
        title: '5. Protocolo de Restauração Rápida: Polimento com Gotas de Óleo e Repolimerização na Chama em Menos de 5 Minutos',
        content: 'Se uma receita ácida deixou uma mancha cinza no fundo da frigideira, a recuperação imediata no fogão impede a formação de ferrugem. Lave a frigideira com água morna e escova de nylon, secando-a sobre a chama em fogo médio-alto (cerca de 200°C). Pingue de 3 a 4 gotas de óleo de alto ponto de fumaça (como semente de uva ou abacate). Com um papel-toalha resistente, esfregue vigorosamente até que o metal fique totalmente fosco e sem qualquer acúmulo de líquido. Aqueça até observar um fio tênue de fumaça por 60 segundos e deixe esfriar. Isso restaura a camada passivada em cinco minutos.',
        type: 'tip',
        boxText: 'Esfregue o óleo até que o fundo pareça absolutamente seco e fosco antes de aquecer; excesso de óleo cria goma pegajosa.'
      }
    ],
    conclusion: 'O aço carbono é uma ferramenta culinária formidável quando se compreendem suas características físicas e limites químicos. A oxidação prévia (blueing) fornece uma base de magnetita (Fe3O4), mas a película de óleo continua sensível a ácidos orgânicos. Prepare reduções de vinho ou molhos de tomate prolongados em panelas de inox ou ferro esmaltado. Caso a cura seja danificada, execute a técnica de polimento rápido a quente para proteger o metal e prevenir excesso de ferro nos alimentos.',
    faqs: [
      {
        question: 'É perigoso engolir os pedaços pretos de cura que se soltam da frigideira de aço carbono?',
        answer: 'Não. Os flocos de cura são formados por óleos vegetais polimerizados inertes e magnetita de ferro atóxica. Eles não são assimilados pelo organismo e passam sem absorção pelo trato digestivo. Contudo, indicam que a cura falhou e o alimento irá grudar.'
      },
      {
        question: 'O que é o blueing térmico e devo realizá-lo antes da queima com óleo?',
        answer: 'O blueing é o aquecimento da frigideira nua e limpa a altas temperaturas (280°C–310°C) até o aço mudar para tons de azul e cinza-escuro pela formação de magnetita (Fe3O4). Ele bloqueia ferrugem e aprimora a fixação do óleo de cura.'
      },
      {
        question: 'Fazer molho de tomate em frigideira de aço carbono causa intoxicação por ferro?',
        answer: 'Em pessoas saudáveis, uma refeição pontual não causa intoxicação aguda. Todavia, o cozimento prolongado em aço com a cura avariada pode liberar entre 20 mg e 50 mg de ferro por porção, ultrapassando o limite seguro de 45 mg/dia e trazendo riscos a pessoas com hemocromatose.'
      },
      {
        question: 'Por que a cura do aço carbono descasca mais fácil que a do ferro fundido?',
        answer: 'O ferro fundido tem textura áspera e microporosa (Ra ≈ 8–12 µm) resultante dos moldes de areia, garantindo ancoragem física profunda. O aço laminado é extremamente plano e liso (Ra ≈ 0.5–1.5 µm), dependendo quase apenas de ligações superficiais que ácidos quebram com rapidez.'
      },
      {
        question: 'Qual o melhor óleo para curar frigideiras de aço carbono?',
        answer: 'Óleo de semente de uva refinado e óleo de canola com alto teor oleico são as melhores opções devido ao balanço de ácidos poli-insaturados, alto ponto de fulgor (>215°C) e capacidade de gerar um polímero liso, duro e uniforme.'
      }
    ],
    relatedTools: [
      {
        name: 'Modelador de Degradação de Cura em Ferro Fundido e Aço Carbono',
        url: '/pt/tools/cast-iron-seasoning-degradation-modeler/'
      },
      {
        name: 'Comparativo de Grelhas de Ferro Fundido vs Aço Inoxidável',
        url: '/pt/compare/cast-iron-vs-stainless-steel-grill-grates/'
      },
      {
        name: 'Comparativo de Panelas de Caldo: Inox vs Alumínio',
        url: '/pt/compare/stainless-steel-vs-aluminum-stock-pot/'
      }
    ]
  },
  {
    slug: 'aluminum-cookware-acidic-food-neurotoxicity-leaching-safety',
    title: 'Lixiviação de Alumínio em Cozimento Ácido: Limites Semanais da EFSA (TWI), Anodizado vs Comum, Cinética Ácida e Segurança à Saúde',
    excerpt: 'Cozinhar molho de tomate ou marinadas de limão em panelas de alumínio libera metais tóxicos? Entenda a química do óxido anódico (Al2O3), os limites de ingestão semanal da EFSA (1 mg/kg peso) e o consenso médico sobre neurotoxicidade.',
    date: waveDate,
    readTime: '9 min de leitura',
    author: 'IsItKitchenSafe',
    intro: 'O alumínio é o segundo metal mais comum no fabrico de utensílios culinários em todo o mundo, apreciado por cozinhas industriais e lares pela sua condutividade térmica impressionante (cerca de 15 vezes superior à do aço inoxidável) e baixo custo de aquisição. Contudo, o alumínio é um metal anfotérico e quimicamente reativo. Quando caldeirões de alumínio cru ou folhas de papel-alumínio entram em contato com alimentos ácidos de baixo pH —como molho de tomate, limão, vinagretes ou conservas—, o metal dissolve-se quimicamente. Agências sanitárias da União Europeia e dos Estados Unidos regulamentam limites estritos para evitar a bioacumulação no organismo.',
    sections: [
      {
        title: '1. Química do Alumínio em Contato com Alimentos: Óxido Nativo vs Dissolução sob Baixo pH (pH < 4.5)',
        content: 'Ao ar ambiente, o alumínio puro sofre oxidação espontânea, criando uma película ultrafina de óxido de alumínio (Al2O3) com apenas 2 a 4 nanômetros de espessura. Embora essa barreira proteja contra a água neutra pura (pH 7.0), ela é quimicamente instável em soluções ácidas (pH < 4.5) ou alcalinas (pH > 8.5). Ácidos orgânicos dos alimentos —como o ácido cítrico do limão e tomate, o ácido acético do vinagre e o ácido lático de queijos— atuam como agentes quelantes, dissolvendo a camada protetora e liberando íons solúveis de alumínio trivalente: Al2O3 + 6H+ → 2Al³⁺ + 3H2O.',
        type: 'warning',
        boxText: 'O filme de óxido nativo tem apenas 2–4 nm e dissolve-se rapidamente sob alimentos com pH abaixo de 4.5, liberando íons Al³⁺.'
      },
      {
        title: '2. Alumínio Anodizado vs Alumínio Cru: Passivação Anódica Porosa, Selagem Dura e Resistência ao Risco',
        content: 'Para superar a fragilidade do alumínio comum, a indústria aplica a anodização eletroquímica. Em um banho ácido eletrolítico (geralmente ácido sulfúrico), a peça é submetida a alta tensão anódica, gerando uma camada de óxido de alumínio (Al2O3) com espessura de 25 a 50 micrômetros —mais de 10.000 vezes superior à película nativa. No processo de "anodização dura", o eletrólito é resfriado a cerca de 0°C com alta densidade de corrente, atingindo dureza comparável à da safira (Vickers HV > 350, superior ao aço inox). Quando os poros hexagonais são selados em água desionizada fervente, a barreira torna-se impenetrável à dissolução ácida.',
        type: 'info',
        boxText: 'A anodização dura cria uma proteção espessa de 50 µm que isola totalmente os alimentos e suporta atrito de talheres.'
      },
      {
        title: '3. Cinética de Extração Ácida: Complexação por Ácido Cítrico, Acético e Málico e Taxas de Lixiviação',
        content: 'Testes oficiais de migração conforme diretrizes europeias (Resolução CM/Res(2013)9 do Conselho da Europa) confirmam que os ácidos orgânicos aceleram drasticamente a lixiviação de alumínio. O ácido cítrico gera complexos tridentados solúveis e estáveis [Al(C6H5O7)]⁰, acelerando a solubilização do metal. Cozinhar molho de tomate (pH 3.8) em panela de alumínio comum por duas horas gera concentrações de alumínio entre 20 mg/L e 65 mg/L no prato. A presença de cloreto de sódio (sal) piora o quadro provocando corrosão por pite (pitting).',
        type: 'warning',
        boxText: 'O ácido cítrico e o sal combinados multiplicam a lixiviação de alumínio em até 60 vezes em molhos de tomate demorados.'
      },
      {
        title: '4. Avaliação Toxicológica: Ingestão Semanal Tolerável da EFSA (TWI 1 mg/kg peso), Excreção Renal e Doença de Alzheimer',
        content: 'A Autoridade Europeia para a Segurança dos Alimentos (EFSA) estipulou o Limite de Ingestão Semanal Tolerável (TWI) para o alumínio em 1.0 mg/kg de peso corporal por semana. Para um adulto de 70 kg, o teto é de 70 mg por semana somando todas as fontes da dieta; para uma criança de 20 kg, o limite é de apenas 20 mg semanais. Embora rins saudáveis filtrem e eliminem mais de 95% do alumínio ingerido, idosos, bebês e indivíduos com disfunção renal retêm o metal no esqueleto e no tecido cerebral. O consenso internacional atual (OMS, EFSA, ATSDR) estabelece que, embora o alumínio alimentar não seja apontado como gatilho primário do Alzheimer, a ingestão acima da TWI deve ser rigorosamente evitada.',
        type: 'info',
        boxText: 'A EFSA estabelece o teto de 1 mg por quilo de peso por semana; uma refeição ácida em panela crua pode exceder toda a semana de consumo.'
      },
      {
        title: '5. Diretrizes de Segurança na Cozinha: Quando Banir o Alumínio Cru, Utensílios e Melhores Alternativas',
        content: 'Para minimizar a exposição: Jamais ferva, cozinhe ou guarde comidas ácidas ou muito salgadas em panelas de alumínio comum ou folhas de papel-alumínio. Panelas de alumínio cru devem ser usadas apenas para ferver água neutra (ovos cozidos, macarrão em água pura inicial ou vegetais no vapor). Ao assar ou embalar alimentos ácidos (como peixe com limão ou lasanhas de tomate), forre com papel-manteiga vegetal ou utilize travessas de vidro refratário e silicone platina. Para molhos ácidos e ensopados, utilize aço inoxidável 304/316 ou ferro esmaltado.',
        type: 'tip',
        boxText: 'Nunca asse peixe com limão ou carne com tomate encostando diretamente no papel-alumínio; use papel-manteiga como barreira.'
      }
    ],
    conclusion: 'O alumínio oferece excelente condutividade de calor, mas o metal nu traz perigos concretos de contaminação química em preparos ácidos. Panelas de alumínio com anodização dura são seguras e quimicamente inertes. Já o alumínio comum e o papel-alumínio dissolvem-se rapidamente em contato com tomates e limão, superando facilmente a dose semanal segura da EFSA. Reserve o alumínio cru para tarefas de água neutra e utilize aço inox ou ferro esmaltado para receitas ácidas.',
    faqs: [
      {
        question: 'Cozinhar com papel-alumínio ou panelas de alumínio causa Mal de Alzheimer?',
        answer: 'O consenso da comunidade médica e científica internacional (OMS, EFSA, Alzheimer’s Association) não encontrou relação causal direta entre o uso de panelas de alumínio e o Alzheimer. Ainda assim, por ser um metal neurotóxico em doses acumuladas, deve-se respeitar o limite semanal de 1 mg/kg de peso.'
      },
      {
        question: 'Panelas de alumínio anodizado duro são seguras para molho de tomate?',
        answer: 'Sim. A anodização dura cria uma película espessa e selada de óxido de alumínio (Al2O3) com dureza próxima à do diamante, que isola completamente o metal e previne qualquer lixiviação química em pratos ácidos.'
      },
      {
        question: 'Por que o papel-alumínio fica furadinho quando cobre uma lasanha de tomate?',
        answer: 'Isso ocorre devido à corrosão galvânica e ácida. O contato do ácido do tomate com o sal e o metal gera uma micropilha onde o alumínio age como ânodo de sacrifício, dissolvendo-se diretamente no queijo e no molho.'
      },
      {
        question: 'Posso assar frango com limão embrulhado diretamente no papel-alumínio?',
        answer: 'Não é aconselhável. O suco ácido de limão reage rapidamente com a folha de alumínio, liberando íons metálicos solúveis na carne. Use sempre uma folha de papel-manteiga entre a comida e o alumínio.'
      },
      {
        question: 'Como descubro se minha panela é de alumínio comum ou anodizado?',
        answer: 'O alumínio comum é cinza-claro ou prateado brilhante, arranha com facilidade e escurece na máquina de lavar louça. O alumínio anodizado duro tem coloração cinza-chumbo ou preta fosca, textura lisa e altíssima resistência a riscos.'
      }
    ],
    relatedTools: [
      {
        name: 'Simulador de Lixiviação Ácida em Folha de Alumínio',
        url: '/pt/tools/aluminum-foil-acidic-leaching-simulator/'
      },
      {
        name: 'Comparativo de Panelas de Caldo: Inox vs Alumínio',
        url: '/pt/compare/stainless-steel-vs-aluminum-stock-pot/'
      },
      {
        name: 'Preditor de Migração em Materiais de Contato com Alimentos',
        url: '/pt/tools/food-contact-migration-predictor/'
      }
    ]
  },
  {
    slug: 'enamel-cast-iron-lead-cadmium-glaze-thermal-shock-safety',
    title: 'Segurança em Ferro Fundido Esmaltado: Chumbo e Cádmio em Esmaltes Vintage, Choque Térmico (Crazing) e Risco de Estilhaços de Vidro',
    excerpt: 'É perigoso cozinhar em panela de ferro esmaltado lascada? Conheça a química do vidro borossilicatado fundido, as microfissuras por choque térmico, a liberação de metais pesados em tintas vivas e quando descartar uma caçarola.',
    date: waveDate,
    readTime: '9 min de leitura',
    author: 'IsItKitchenSafe',
    intro: 'As panelas de ferro fundido esmaltado —como as célebres cocottes e caçarolas francesas— unem a inigualável retenção térmica do ferro à sofisticação e facilidade de limpeza do vidro vitrificado. Essa camada de esmalte de porcelana elimina a necessidade de cura contínua e cria uma superfície inerte, ideal para cozidos demorados, carnes ao vinho e pães rústicos. No entanto, o esmalte vítreo é essencialmente um vidro borossilicatado fundido ao metal a mais de 800°C. Sob choques térmicos severos, impactos ou desgaste abrasivo, o esmalte pode fissurar, rachar ou soltar lascas microscópicas cortantes. Além disso, panelas antigas ou importações sem certificação podem esconder metais tóxicos (chumbo e cádmio) em suas cores brilhantes.',
    sections: [
      {
        title: '1. Química do Vidro Esmaltado: Fusão de Borossilicato a 800°C e Inércia Química Absoluta',
        content: 'O esmalte vítreo é produzido a partir de uma mistura de pós vítreos (fritas) contendo sílica (SiO2), bórax (B2O3), feldspato e fundentes alcalinos, associados a pigmentos minerais estáveis. Essa suspensão aquosa é borrifada no ferro fundido e levada a fornos industriais a temperaturas entre 780°C e 850°C. Sob esse calor, o vidro derrete e funde-se nos poros do metal, gerando uma interface vítrea de silicato de ferro. Quando perfeito e sem lascas, o esmalte é quimicamente neutro, estanque e à prova de ácidos orgânicos.',
        type: 'info',
        boxText: 'O esmalte vítreo é vidro de borossilicato fundido a 800°C, fornecendo proteção química total enquanto estiver livre de danos.'
      },
      {
        title: '2. Pigmentos com Metais Pesados em Peças Vintage: Fundentes de Chumbo (Pb) e Sulfeto de Cádmio (Cd)',
        content: 'Historicamente, o óxido de chumbo (PbO) era usado como fundente para reduzir a temperatura de fusão do vidro e criar um brilho lustroso. O sulfeto de cádmio (CdS) e o sulfoseleneto de cádmio eram empregados para tingir o exterior com tonalidades vivas como laranja chama, amarelo sol e vermelho escarlate. Enquanto fabricantes conceituados da atualidade cumprem a Proposição 65 da Califórnia e os padrões da FDA (21 CFR 175.300), peças vintage fabricadas antes de 1980 e cópias sem certificação liberam chumbo e cádmio se atingidas por molhos ácidos aquecidos.',
        type: 'warning',
        boxText: 'Panelas esmaltadas vintage (anteriores a 1980) e modelos sem selo sanitário podem lixiviar chumbo e cádmio das tintas externas.'
      },
      {
        title: '3. Dinâmica do Choque Térmico: Diferença no Coeficiente de Dilatação Térmica (CTE) entre Ferro e Vidro',
        content: 'A avaria física do esmalte resulta da física do choque térmico. O ferro fundido e o vidro borossilicatado possuem Coeficientes de Expansão Térmica (CTE) distintos: o ferro dilata-se e contrai-se a 10–12 × 10⁻⁶ /K, enquanto a frita de vidro trabalha a 6–9 × 10⁻⁶ /K. Se uma caçarola vazia é aquecida no fogo alto ou recebe água gelada enquanto está quente, a tensão de tração ultrapassa a resistência do vidro (30–70 MPa), provocando o "crazing" —uma teia de aranha microscópica de fissuras.',
        type: 'warning',
        boxText: 'Preaquecer a panela vazia ou jogar água fria em peça fervendo cria tensões que quebram o esmalte em microfissuras irreversíveis.'
      },
      {
        title: '4. Perigo da Ingestão de Estilhaços de Vidro: Microfraturas, Bordas Cortantes e Riscos ao Aparelho Digestivo',
        content: 'Quando as microfissuras progridem ou sofrem impacto com colheres metálicas, o esmalte solta lascas pontiagudas de vidro na comida. A ingestão de estilhaços microscópicos de esmalte representa risco de cortes internos na garganta, estômago e paredes do intestino. Além do perigo físico, a quebra do esmalte expõe o ferro bruto subjacente; a umidade penetra por baixo da borda lascada, enferrujando o metal e forçando novas lascas de vidro a se soltarem durante as próximas receitas.',
        type: 'warning',
        boxText: 'O esmalte lascado verte lascas de vidro pontiagudas nos alimentos e a ferrugem por baixo descola ainda mais o revestimento.'
      },
      {
        title: '5. Protocolo de Inspeção, Cuidados e Aposentadoria da Panela: O Teste da Unha e Quando Descartar',
        content: 'Para checar a integridade da caçarola: 1) Teste da Unha: passe a unha pelas áreas opacas ou manchadas do fundo; se a unha travar em alguma borda, o vidro lascou até o metal. 2) Teste do Papel Branco: esfregue um papel-toalha úmido na área suspeita; marcas pretas confirmam ferro exposto sob o esmalte danificado. Prevenção: Nunca aqueça a caçarola seca; coloque sempre azeite ou caldo antes de ligar a chama. Use exclusivamente espátulas de silicone ou madeira. Regra definitiva: se o fundo de cozimento apresentar qualquer lasca visível, a panela deve ser aposentada do contato com comida.',
        type: 'tip',
        boxText: 'Se sua unha travar em uma ranhura no fundo interno, suspenda o uso culinário imediatamente; esmalte quebrado não tem conserto.'
      }
    ],
    conclusion: 'O ferro fundido esmaltado proporciona uma experiência culinária extraordinária quando sua barreira vítrea está intacta. Cuide do seu equipamento evitando choques térmicos bruscos e utilizando colheres de madeira ou silicone. Se houver lascas ou desprendimento de vidro na área de cozimento, descarte a panela imediatamente: o vidro vítreo quebrado não pode ser colado e traz riscos reais de ferimentos por estilhaços.',
    faqs: [
      {
        question: 'É possível consertar esmalte lascado no fundo interno de uma panela de ferro?',
        answer: 'Não. Não existe resina, verniz ou cola com grau alimentício capaz de resistir ao fogo e recompor um vidro fundido a 800°C. Qualquer remendo improvisado vai derreter no cozimento, liberando químicos tóxicos e soltando mais vidro na comida.'
      },
      {
        question: 'É seguro cozinhar em panela com fissuras em teia de aranha (crazing)?',
        answer: 'Fissuras muito finas e superficiais sem perda de material indicam estresse térmico inicial. Não é uma emergência no mesmo dia, mas o esmalte irá lascar com o tempo. Cozinhe em fogo baixo e providencie a substituição assim que notar rugosidade ao toque.'
      },
      {
        question: 'Como faço para testar chumbo e cádmio em uma panela antiga?',
        answer: 'Utilize hastes químicas de teste rápido (como testes de rodizonato certificados) esfregando a tinta colorida externa e o esmalte branco interior que esteja desgastado para checar a presença desses metais pesados.'
      },
      {
        question: 'Por que o fundo da minha panela lascou ao assar pão de fermentação natural?',
        answer: 'O pão de fermentação natural exige pré-aquecer a panela vazia a temperaturas extremas (230°C–250°C). Esse calor a seco gera estresse mecânico imenso e, ao despejar a massa fria, o choque térmico pontual faz o vidro saltar.'
      },
      {
        question: 'Lascas na parte externa ou na tampa da panela oferecem perigo?',
        answer: 'Danos externos que não entram em contato com os alimentos não trazem perigo de ingestão de estilhaços. Apenas unte o ferro exposto com uma gota de óleo para evitar ferrugem.'
      }
    ],
    relatedTools: [
      {
        name: 'Simulador de Choque Térmico e Ruptura em Vidro e Esmalte',
        url: '/pt/tools/thermal-shock-simulator/'
      },
      {
        name: 'Índice de Transparência de Marcas de Panelas',
        url: '/pt/tools/cookware-brand-transparency-index/'
      },
      {
        name: 'Placar de Lixiviação Tóxica e Metais Pesados',
        url: '/pt/tools/toxic-leaching-scorecard/'
      }
    ]
  }
];

const ptBlogPath = path.resolve('src/data/blog.pt.json');
const ptBlogs = JSON.parse(fs.readFileSync(ptBlogPath, 'utf8'));

for (const g of ptGuides) {
  if (!ptBlogs.some(b => b.slug === g.slug)) {
    ptBlogs.push(g);
    console.log(`✅ Added PT guide: ${g.slug}`);
  } else {
    console.log(`ℹ️ PT guide already present: ${g.slug}`);
  }
}

fs.writeFileSync(ptBlogPath, JSON.stringify(ptBlogs, null, 2) + '\n', 'utf8');
console.log(`✅ Saved src/data/blog.pt.json. Total guides: ${ptBlogs.length}`);
