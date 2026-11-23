const fs = require('fs');
const path = require('path');

const waveDate = '2026-11-22';

console.log('=== GENERATING WAVE 68 AUTHORITATIVE SAFETY GUIDES (101 -> 104) [PT] ===');

const newGuidesPt = [
  {
    slug: 'dishwasher-thermal-sanitization-nsf184-pathogen-safety',
    title: 'Ciclo de Higienização Térmica na Lava-Louças e Segurança NSF/ANSI 184: Cinética de Inativação (Valores D e Z), Resistência de Norovírus e Toxicidade de Secantes na Barreira Intestinal',
    category: 'appliances',
    excerpt: 'O ciclo de sanitização da sua máquina de lavar louça realmente elimina bactérias e vírus, ou deixa patógenos resistentes e resíduos tóxicos de secante? Descubra a cinética térmica NSF/ANSI 184, a resistência de norovírus e os riscos para a mucosa intestinal.',
    date: waveDate,
    readTime: '15 min de leitura',
    author: 'IsItKitchenSafe',
    intro: 'As máquinas de lavar louça automáticas modernas não são divulgadas apenas como lavadoras de louça, mas como autoclaves domésticas capazes de tornar a louça biologicamente estéril. Fabricantes destacam ciclos de \'Higienização\' ou \'Enxágue a Alta Temperatura\' certificados pelas normas de higiene residencial. No entanto, o microambiente dentro de uma lava-louças fechada representa um campo de batalha complexo entre termofluidodinâmica, saponificação química, sobrevivência microbiana e deposição de surfactantes sintéticos. Enquanto ciclos comuns lavam entre 46°C e 54°C (115°F–130°F)—temperaturas insuficientes para erradicar patógenos bacterianos resistentes—os ciclos de higienização certificados elevam a água para ao menos 65,6°C (150°F) de forma sustentada. Todavia, persistem limites biológicos e toxicológicos sérios: partículas virais sem envelope lipídico como o norovírus humano exibem surpreendente resistência térmica, endósporos bacterianos sobrevivem sem danos, e líquidos secantes deixam películas microscópicas de surfactantes que pesquisas clínicas recentes associam à perda de integridade da barreira epitelial intestinal.',
    sections: [
      {
        title: 'A Norma NSF/ANSI 184 em Detalhes: Redução de 99,999% (5 Log) de Patógenos e Padrões Térmicos',
        content: 'Para ostentar o selo de certificação oficial da NSF (National Sanitation Foundation), uma lava-louças residencial deve atender aos rigorosos critérios do padrão NSF/ANSI 184. Ao contrário de higienizadoras comerciais regidas pela norma NSF/ANSI 3 (que exige redução de 6 log a 99,9999% com água a 82°C ou sanitizantes clorados), o Padrão 184 estipula que modelos residenciais devem atingir no mínimo 99,999% (5 log) de destruição de bactérias vegetativas patogênicas, testado contra Enterobacter aerogenes e Staphylococcus aureus. Para cumprir essa exigência, a água do enxágue final precisa alcançar ao menos 65,6°C (150°F) e sustentar esse patamar até que uma dose letal cumulativa de calor seja aplicada.',
        callout: 'PADRÃO DE CERTIFICAÇÃO: A norma NSF/ANSI 184 exige eliminação comprovada de 5 log (99,999%) com água de enxágue a 65,6°C (150°F) contínuos. Lavagens normais a quente não oferecem esse patamar térmico prolongado.'
      },
      {
        title: 'Cinética de Morte Térmica: Tempo de Redução Decimal (Valor D), Valor Z e Unidades de Calor (HUE)',
        content: 'A inativação térmica microbiana obedece a uma cinética de destruição logarítmica de primeira ordem ditada por dois fatores: o Valor D e o Valor Z. O Valor D é o tempo em minutos a uma temperatura constante para eliminar 90% (1 log) da população microbiana. Para Salmonella enterica a 65,6°C, o valor D varia de 0,2 a 0,4 minutos em solução aquosa; portanto, obter uma redução de 5 log requer entre 1,0 e 2,0 minutos de contato direto. O Valor Z representa a elevação de temperatura em Fahrenheit necessária para reduzir o Valor D em dez vezes. Ciclos residenciais integram essa dosagem computando Unidades de Calor Equivalentes (HUE), exigindo no mínimo 3.600 HUE acumulados para garantir lise celular total em todos os cestos.',
        callout: 'EQUAÇÃO CINÉTICA: A inativação microbiana obedece a log10(N0 / N) = t / D_T. Atingir 5 log de redução requer contato aquoso direto por 5 × D_T na temperatura alvo. Pratos amontoados geram zonas de sombra térmica.'
      },
      {
        title: 'O Paradoxo de Norovírus e Esporos: Vírions sem Envelope vs. Sobrevivência Extrema de Bacillus Cereus',
        content: 'Embora o ciclo NSF 184 destrua patógenos vegetativos como Salmonella, Campylobacter e Listeria, não atinge esterilização hospitalar. Sobrevivem rotineiramente vírus entéricos não envelopados e endósporos bacterianos. O norovírus humano possui capsídeo proteico icosaédrico rígido e não tem envelope lipídico frágil. Ensaios laboratoriais provam que sobrevive a 60°C por até 30 minutos; assim, um jato breve a 65,6°C resulta em inativação viral incompleta. Mais resistentes ainda são os endósporos bacterianos de Bacillus cereus (frequente em sobras de arroz) e Clostridium perfringens, protegidos por desidratação e complexos de dipicolinato de cálcio que resistem à fervura a 100°C por horas.',
        callout: 'LIMITAÇÃO MICROBIOLÓGICA: Lava-louças residenciais NÃO esterilizam. O norovírus resiste a breves jatos a 65,6°C e endósporos de Bacillus cereus suportam até água fervente sem sofrer inativação.'
      },
      {
        title: 'Toxicologia dos Secantes: Etoxilatos de Álcool e Ruptura da Barreira Epitelial Intestinal (SIAF 2023)',
        content: 'Para evitar o acúmulo de gotas e manchas de calcário no vidro durante a secagem rápida, as lava-louças injetam secante líquido no enxágue final. Essas fórmulas combinam surfactantes não iônicos (etoxilatos de álcool e polioxialquilenoglicóis) com ácido cítrico e sulfonatos. Como o secante é introduzido no último enxágue, não ocorre nova lavagem para removê-lo; uma película microscópica seca diretamente sobre pratos e talheres. Em estudo histórico de 2023 publicado no The Journal of Allergy and Clinical Immunology por cientistas do Instituto Suíço SIAF, verificou-se que resíduos de etoxilato de álcool mesmo em diluições de até 1:20.000 destroem junções de oclusão intestinal (claudina-1 e ocludina), provocando toxicidade epitelial e inflamação crônica.',
        callout: 'EVIDÊNCIA TOXICOLÓGICA: Pesquisa do SIAF (2023) comprovou que resíduos de surfactantes etoxilados de secantes danificam a barreira intestinal humana mesmo diluídos a 1:20.000, promovendo permeabilidade celular.'
      },
      {
        title: 'Protocolos de Manutenção: Descalcificação de Resistências, Limpeza de Filtros e Mofo nas Vedações',
        content: 'Uma máquina não mantém a eficiência de higienização se as resistências estiverem incrustadas de calcário (carbonato de cálcio, CaCO3), que atua como barreira térmica isolante. Uma camada de 1,5 mm de calcário eleva o tempo de aquecimento em mais de 40%, podendo impedir que os sensores atinjam os 65,6°C antes do tempo limite programado. Além disso, o microfiltro no fundo retém gorduras e resíduos; quando entupido, a pressão dos braços aspersores cai bruscamente. Por fim, as borrachas de vedação retêm calor e umidade, favorecendo o crescimento de biofilmes fúngicos como Exophiala dermatitidis. Uma limpeza mensal com ácido cítrico alimentar e higienização manual do filtro é fundamental.',
        callout: 'MANUTENÇÃO PERIÓDICA: O calcário na resistência impede a água de atingir a temperatura da norma NSF 184. Realize lavagens mensais com 200 g de ácido cítrico e desobstrua o filtro manualmente.'
      }
    ],
    faqs: [
      {
        question: "Um ciclo normal de lava-louças mata bactérias sem o botão 'Higienizar'?",
        answer: "Um ciclo regular (46°C–54°C) remove a maior parte dos microrganismos por ação mecânica e saponificação do detergente, mas não assegura higienização térmica comprovada. Apenas programas certificados com patamar de 65,6°C (150°F) garantem a destruição de 99,999% (5 log) prescrita pela norma NSF/ANSI 184."
      },
      {
        question: "A lava-louças pode transmitir norovírus humano entre pratos contaminados?",
        answer: "Sim, potencialmente. O norovírus não possui envelope lipídico e tolera calor moderado e detergentes comuns. Pratos ou talheres expostos a episódios de vômito ou diarreia infecciosa devem ser pré-desinfetados com solução diluída de água sanitária antes de entrarem na máquina."
      },
      {
        question: "É perigoso ingerir resíduos de secante de louça que ficam nos pratos?",
        answer: "Estudos clínicos recentes do Instituto Suíço SIAF (2023) mostram que os surfactantes etoxilados presentes em secantes permanecem na louça seca e podem degradar a barreira epitelial intestinal. Para diminuir a exposição, ajuste o dosador para o nível mínimo, utilize vinagre branco destilado alimentar ou opte por secagem por ar quente sem aditivos."
      },
      {
        question: "Por que a lava-louças leva mais de 3 horas ao selecionar o modo Higienização?",
        answer: "A máquina precisa aquecer a água de entrada ativamente até 65,6°C–71°C utilizando resistências de 600 a 1.200 W, que elevam a temperatura em cerca de 0,5°C a 1°C por minuto, mantendo pausas no temporizador até que os sensores confirmem a temperatura exigida de forma sustentada."
      },
      {
        question: "O ciclo de higienização esteriliza mamadeiras e bicos de silicone de bebês?",
        answer: "Ele higieniza (reduz 99,999% de bactérias), mas não esteriliza clinicamente nem elimina endósporos resistentes. Além disso, submeter mamadeiras de polipropileno e bicos de silicone a águas acima de 65°C com detergentes cáusticos causa microfissuras e liberação de oligômeros. É mais seguro usar esterilização a vapor ou fervura em água pura."
      }
    ],
    relatedTools: [
      {
        name: "Modelador de Resíduos de Secante e Surfactantes",
        url: "/pt/tools/dishwasher-rinse-aid-scale-troubleshooter/"
      },
      {
        name: "Calculadora de Higienização Térmica e Inativação de Patógenos",
        url: "/pt/tools/dishwasher-thermal-sanitize-calculator/"
      },
      {
        name: "Simulador de Lixiviação de Melamina e Microplásticos em Lava-Louças",
        url: "/pt/tools/dishwasher-melamine-leaching-simulator/"
      }
    ]
  },
  {
    slug: 'glass-ceramic-cooktop-shatter-thermal-shock-fracture-safety',
    title: 'Fratura e Segurança Térmica em Cooktops Vitrocerâmicos e Indução: Choque Térmico em Aluminossilicato de Lítio, Danos por Açúcar, Trincas em Cone de Hertz e Prevenção de Estilhaçamento',
    category: 'appliances',
    excerpt: 'Por que cooktops vitrocerâmicos e de indução trincam, lascam ou quebram de repente? Explore a estrutura nanocristalina de aluminossilicato de lítio (LAS), o arrancamento de vidro por açúcar e as trincas por impacto mecânico pontual.',
    date: waveDate,
    readTime: '15 min de leitura',
    author: 'IsItKitchenSafe',
    intro: 'Os cooktops vitrocerâmicos lisos transformaram as cozinhas contemporâneas, unindo design sofisticado, rápida condução térmica e controle eletromagnético apurado. Projetados a partir de vitrocerâmicas avançadas de aluminossilicato de lítio (LAS) como Schott Ceran ou EuroKera, esses painéis apresentam coeficiente de expansão térmica próximo de zero, resistindo a gradientes de choque térmico superiores a 700°C sem rachar. No entanto, relatórios de assistência técnica registram milhares de quebras espontâneas anualmente: trincas em teia de aranha, crateras na superfície e partição completa de canto a canto. O paradoxo decorre das propriedades mecânicas intrínsecas desses materiais frágeis: imunes a variações térmicas uniformes, sua superfície depende de um equilíbrio de compressão residual. Impactos pontuais de potes de tempero, peso excessivo de caçarolas de ferro fundido ou derramamento de açúcar líquido podem romper essa camada compressiva, propagando fissuras pelo critério de Griffith.',
    sections: [
      {
        title: 'Ciência dos Materiais Vitrocerâmicos: 70% Nanocristais de Keatita/Espodumena e Expansão Térmica Nula',
        content: 'Vidros comuns como o sodocálcico ou borossilicato expandem-se e contraem-se sob o calor, acumulando tensões que provocam estilhaçamento ante gradientes térmicos repentinos. Em contraste, placas vitrocerâmicas são produzidas a partir de aluminossilicato de lítio (Li2O-Al2O3-SiO2). Durante a ceramização controlada (entre 800°C e 1.000°C), agentes nucleantes (TiO2 e ZrO2) induzem o crescimento de uma fase nanocristalina densa—soluções sólidas de quartzo e beta-espodumena/keatita—que representa 70% do volume total. Esses cristais possuem expansão térmica negativa em um de seus eixos cristalográficos, contrabalançando com precisão a expansão positiva da matriz de sílica amorfa restante. O resultado é uma dilatação térmica líquida nula (alfa ≈ 0 ± 0,15 × 10^-6 / K).',
        callout: 'ARQUITETURA DE MATERIAIS: As vitrocerâmicas LAS aliam 70% de nanocristais de espodumena de contração negativa com matriz de sílica para alcançar dilatação térmica nula, suportando choques térmicos de 700°C.'
      },
      {
        title: 'Resistência ao Choque Térmico vs. Fragilidade Estrutural: Gradientes de 700°C contra Fraturas em Cone de Hertz',
        content: 'Embora uma chapa de vitrocerâmica possa receber água com gelo sobre uma área a 500°C sem sofrer avarias, sua resistência mecânica a pancadas segue os princípios da mecânica de fratura frágil. Os painéis passam por têmpera durante a fabricação, formando uma camada externa sob compressão (20 a 40 µm). Quando um corpo rígido e pesado—uma xícara de cerâmica, uma tampa de ferro fundido ou um moedor de pimenta—cai sobre a superfície, descarrega uma força sobre uma área minúscula inferior a 0,05 mm². Essa pressão desencadeia esforços de cisalhamento e tração radial conhecidos como trincas em cone de Hertz. Ao perfurar a camada compressiva e atingir a zona interna tracionada, a energia acumulada estilhaça a chapa a mais de 1.500 m/s.',
        callout: 'MECÂNICA DE FRATURA: Impactos pontuais geram trincas cônicas de Hertz que furam a camada compressiva de 30 mícrons. Atingido o núcleo sob tensão, a trinca se ramifica instantaneamente em teia de aranha.'
      },
      {
        title: 'A Catástrofe do Açúcar Queimado: Ligação Química a Quente, Polimerização e Arrancamento de Vidro em Crateras',
        content: 'Um dos fatores mais corrosivos e menos compreendidos de avaria em cooktops de vidro é o derramamento de caldas de açúcar fervente (geleias, caramelo, molho agridoce). A sacarose funde-se a cerca de 186°C, decompondo-se e polimerizando rapidamente. A essas temperaturas, as hidroxilas (-OH) do carboidrato formam ligações químicas covalentes com os grupos silanol (Si-OH) da superfície vitrocerâmica. Quando o cooktop é desligado e arrefece, surge um descompasso brutal: o açúcar caramelizado contrai-se intensamente (alfa ≈ 50–80 × 10^-6 / K), enquanto a placa de vidro cerâmico quase não se contrai (alfa ≈ 0). O estresse de cisalhamento interfacial resultante arranca lascas sólidas do vidro ao esfriar, cavando crateras permanentes.',
        callout: 'DANO POR AÇÚCAR: O açúcar fundido liga-se covalentemente à sílica a >180°C. Ao resfriar, a diferença de retração térmica arranca pedaços de vidro maciço do cooktop, destruindo o acabamento.'
      },
      {
        title: 'Impacto Mecânico de Panelas Pesadas: Cargas Pontuais de Ferro Fundido, Microrranhuras e Fratura Tardia',
        content: 'O manuseio de panelas muito pesadas—especialmente caçarolas de ferro fundido bruto de 5 a 10 kg cheias de comida—gera riscos mecânicos constantes. A textura áspera do ferro fundido em areia apresenta milhares de asperezas microscópicas que funcionam como pontas afiadas. Arrastar a panela risca microssulcos na superfície vítrea. De acordo com a fórmula de concentração de tensões de Inglis-Griffith, as tensões nas bordas de microtrincas são altamente amplificadas. Um arranhão invisível de 100 mícrons pode multiplicar por 10 a 20 vezes os esforços térmicos e de flexão posteriores, fazendo o vidro quebrar subitamente semanas depois durante um cozimento corriqueiro.',
        callout: 'CONCENTRAÇÃO DE TENSÕES: O atrito de panelas de ferro ásperas abre microrranhuras que multiplicam tensões térmicas e de flexão, culminando na fratura retardada da chapa sem aviso prévio.'
      },
      {
        title: 'Cuidados, Limpeza e Protocolo de Danos: Ângulo de Raspadores, Tapetes de Silicone em Indução e Risco de Choque',
        content: 'Preservar a integridade da placa exige cuidados diários. Para remover resíduos queimados, use raspadores apropriados com lâmina metálica reta mantida em ângulo constante de 30° a 45°; jamais use esponjas de aço ou pontas afiadas. Em cooktops de indução (onde o calor é gerado por correntes parasitas magnéticas e não por calor radiante da chapa), é possível usar tapetes finos de silicone alimentício de grau platina entre a panela e o vidro para amortecer impactos e impedir riscos, desde que não ultrapasse 230°C. (Atenção: Jamais use silicone em cooktops vitrocerâmicos elétricos radiantes convencionais, pois o calor derreterá o silicone). Se o vidro apresentar trinca aberta, desligue imediatamente o disjuntor geral: líquidos condutores derramados na trinca tocarão circuitos de 220V, trazendo risco fatal de choque elétrico e incêndio.',
        callout: 'RISCO ELÉTRICO: Fissuras abertas expõem fiações energizadas sob 220V ao contato com líquidos condutores. Jamais cozinhe sobre um cooktop rachado; desligue a energia no disjuntor principal.'
      }
    ],
    faqs: [
      {
        question: "É seguro continuar cozinhando em um cooktop de vidro com uma trinca fina?",
        answer: "Não, de forma alguma. Cozinhar sobre vidro trincado é um risco severo de choque elétrico e incêndio. Os cooktops operam conectados a redes de 220V com alta corrente. Caldos derramados ou produtos de limpeza que penetrem pela fissura entram em contato direto com bobinas e circuitos sob tensão, causando curto-circuitos graves."
      },
      {
        question: "Por que meu cooktop estilhaçou do nada sem que nada caísse nele?",
        answer: "O estilhaçamento espontâneo quase sempre é resultado de quebra retardada originada por um microdefeito anterior: um arranhão de panela áspera, uma batida pontual semanas antes ou corrosão por açúcar derramado no passado. A dilatação e contração cíclicas expandem a microtrinca até que a tensão interna supera a resistência do material, partindo o vidro subitamente."
      },
      {
        question: "Como limpar imediatamente açúcar derramado em cooktop quente sem arruiná-lo?",
        answer: "Se calda de açúcar, geleia ou caramelo derramar sobre o vidro quente, aja na hora enquanto a chapa ainda estiver quente. Desligue a boca, vista luvas térmicas de forno e use um raspador metálico próprio para vitrocerâmica em ângulo de 30 graus para raspar o açúcar líquido em direção a uma área fria. Nunca espere o açúcar endurecer, pois ele arrancará lascas do vidro."
      },
      {
        question: "Posso usar panelas de ferro fundido em cooktop de indução sem arranhar?",
        answer: "Sim, tomando o cuidado de levantar a panela sempre na vertical sem arrastá-la. Verifique se o fundo da panela não possui rebarbas ásperas. No cooktop de indução, você pode colocar papel manteiga ou tapete fino de silicone culinário resistente até 230°C sob a panela para amortecer o contato e evitar qualquer risco."
      },
      {
        question: "Qual a diferença entre vidro Schott Ceran e vidro temperado comum?",
        answer: "Schott Ceran é uma vitrocerâmica de aluminossilicato de lítio contendo 70% de nanocristais especialmente desenvolvida para expansão térmica zero (suportando até 700°C contínuos). O vidro temperado convencional é sodocálcico; ele não tolera mais de 250°C e estilhaçaria sob o calor pontual de bocas elétricas."
      }
    ],
    relatedTools: [
      {
        name: "Simulador de Fratura por Choque Térmico em Panelas e Vidros",
        url: "/pt/tools/thermal-shock-simulator/"
      },
      {
        name: "Simulador de Fratura por Impacto e Choque em Cooktops Vitrocerâmicos",
        url: "/pt/tools/glass-cooktop-fracture-simulator/"
      },
      {
        name: "Modelador de Delaminação e Acústica em Cooktops de Indução",
        url: "/pt/tools/induction-cooktop-delamination-modeler/"
      }
    ]
  },
  {
    slug: 'toaster-nichrome-wire-flaking-acrylamide-safety',
    title: 'Desprendimento de Filamentos de Nicromo em Torradeiras e Cinética de Acrilamida: Oxidação de Liga 80/20 Níquel-Cromo, Microaerossóis, Neurotoxicidade de Asparagina e Tostagem Segura',
    category: 'appliances',
    excerpt: 'As resistências incandescentes da torradeira podem soltar partículas de níquel-cromo no pão? Qual o aumento de acrilamida ao torrar demais? Descubra a metalurgia dos filamentos, a reação de Maillard e como prevenir incêndios na bandeja.',
    date: waveDate,
    readTime: '15 min de leitura',
    author: 'IsItKitchenSafe',
    intro: 'A clássica torradeira elétrica vertical está presente em mais de 150 milhões de cozinhas pelo mundo, proporcionando desidratação térmica rápida e caramelização superficial do pão em menos de três minutos. Para alcançar essa velocidade, o aparelho utiliza fitas de resistência elétrica abertas montadas em placas de mica, que brilham incandescentes entre 593°C e 760°C (1.100°F–1.400°F). No entanto, essa facilidade doméstica reúne dois riscos toxicológicos e mecânicos fundamentais: a degradação física de ligas de níquel-cromo que desprendem microescamas metálicas oxidadas sobre o pão, e a rápida cinética de síntese de acrilamida alimentar via reação de Maillard entre asparagina livre e açúcares redutores. Ademais, bandejas de migalhas negligenciadas acumulam gorduras e farelos que sofrem pirólise contínua, emitindo fumaças tóxicas e gerando perigo de incêndio repentino. Conhecer a metalurgia dos fios e a síntese de toxinas é indispensável para um café da manhã mais seguro.',
    sections: [
      {
        title: 'Metalurgia das Resistências: Liga Ni-Cr 80/20 e Película Protetora de Óxido de Cromo(III)',
        content: 'As resistências de torradeiras são feitas de ligas de aquecimento que atendem aos padrões ASTM B344, especialmente Nicromo 80/20 (80% níquel, 20% cromo) ou Kanthal (FeCrAl). O Nicromo 80 é escolhido por sua alta resistividade elétrica (aprox. 1,09 µΩ·m a 20°C), elevado ponto de fusão (1.400°C) e excepcional resistência à oxidação. Com a passagem de corrente elétrica, o aquecimento Joule (P = I²R) eleva o fio ao rubro. A temperaturas superiores a 600°C, o cromo migra para a superfície e reage com o oxigênio atmosférico, constituindo uma camada protetora estável de óxido de cromo(III) (Cr2O3). Essa barreira cerâmica refratária impede a oxidação contínua do núcleo de níquel, prolongando a vida útil do elemento.',
        callout: 'PRINCÍPIO METALÚRGICO: O Nicromo 80/20 cria uma película passivante microscópica de Cr2O3 acima de 600°C que barra a oxidação profunda e permite operar a mais de 700°C com estabilidade.'
      },
      {
        title: 'Degradação e Descamamento da Fita: Choques Térmicos Repetidos, Impacto Mecânico e Ingestão de Níquel',
        content: 'A despeito da robustez do Nicromo 80, cada ciclo de tostagem impõe dilatações térmicas extremas e choques mecânicos. A resistência passa de 20°C para 700°C em menos de 30 segundos, seguida de resfriamento brusco ao ar livre. Esse ciclo contínuo induz dilatação diferencial entre a camada de Cr2O3 e o metal de base, causando tensões de cisalhamento e descamação microscópica. Além disso, o disparo mecânico da mola de ejeção vibra bruscamente os suportes de mica. Ao longo de 3 a 5 anos de uso diário, micropartículas de óxidos de níquel e cromo soltam-se e caem sobre as fatias de pão. Em pessoas com sensibilidade ao níquel (síndrome de alergia sistêmica ao níquel, presente em 10% a 15% das mulheres), ingerir essas partículas pode desencadear dores abdominais e erupções cutâneas.',
        callout: 'MECÂNICA DE DESPRENDIMENTO: Choques térmicos rápidos e o impacto da mola do mecanismo causam fadiga mecânica, soltando microescamas de óxido de níquel sobre o pão, com riscos para alérgicos ao níquel.'
      },
      {
        title: 'Cinética de Formação de Acrilamida: Asparagina Livre, Açúcares Redutores e Síntese Acima de 120°C',
        content: 'O tostado e aroma do pão resultam da reação de Maillard entre aminoácidos e açúcares. Entretanto, quando a asparagina livre (encontrada em cereais como trigo, centeio e cevada) reage com açúcares redutores (glicose e frutose) a temperaturas superiores a 120°C sob baixa umidade, forma-se acrilamida (C3H5NO). A IARC enquadra a acrilamida como provável carcinógeno humano (Grupo 2A) e neurotóxico. No fígado, ela é convertida em glicidamida, que reage com o DNA celular. Em torradas douradas claras, os teores situam-se entre 20 e 50 µg/kg; contudo, à medida que a torrada fica marrom-escura ou queimada, a produção de acrilamida dispara, superando 1.200 a 2.500 µg/kg—uma elevação de até 50 vezes.',
        callout: 'CINÉTICA TOXICOLÓGICA: A acrilamida multiplica-se exponencialmente acima de 120°C. Pães muito escuros ou queimados podem ultrapassar 2.000 µg/kg em comparação a menos de 50 µg/kg em pães levemente dourados.'
      },
      {
        title: 'Pirólise na Bandeja de Farelos e Poluição do Ar: Acroleína, Partículas Finas e Risco de Ignição',
        content: 'Na base de cada torradeira, a bandeja coletora de farelos acumula restos de pão com glúten, sementes e gorduras (manteiga, azeite). Com o uso repetido, a radiação térmica direta submete esses resíduos a pirólise a seco contínua. Acima de 200°C, carboidratos e lipídios queimados liberam acroleína (2-propenal), compostos orgânicos voláteis (COVs), hidrocarbonetos aromáticos policíclicos (HAPs) e material particulado ultrafino (PM2.5) que se espalham pelo ar da cozinha. Além disso, as migalhas podem atingir a temperatura de autoignição (cerca de 300°C), provocando labaredas repentinas que podem derreter o invólucro do aparelho.',
        callout: 'RISCO DE INCÊNDIO E AR: Farelos e manteiga acumulados sofrem combustão incompleta, liberando fumaça com acroleína e partículas PM2.5, criando perigo de fogo espontâneo na base da torradeira.'
      },
      {
        title: 'Diretrizes Práticas para Torrar com Segurança: A Regra do Dourado Claro, Limpeza e Inspeção Periódica',
        content: 'Proteger a saúde e prolongar a durabilidade da torradeira depende de condutas simples. Siga a \'Regra do Dourado Claro\' recomendada pela EFSA e órgãos de vigilância sanitária: busque sempre um tom amarelo dourado e descarte partes escuras ou queimadas. Esvazie e higienize a bandeja de migalhas a cada uma ou duas semanas. Inspecione visualmente as fitas elétricas com uma lanterna anualmente: se notar filamentos caídos, quebras ou crostas esbranquiçadas excessivas soltando-se da mica, substitua a torradeira. E nunca enfie garfos ou facas metálicas nas aberturas: além do choque elétrico potencialmente fatal, utensílios de metal riscam a camada protetora de Cr2O3 dos fios, acelerando a descamação.',
        callout: 'PLANO DE SEGURANÇA: Torre o pão até um tom amarelo-dourado para reduzir a acrilamida em mais de 90%. Esvazie a bandeja semanalmente, evite talheres de metal e aposente aparelhos com fios danificados.'
      }
    ],
    faqs: [
      {
        question: "Pão queimado na torradeira é realmente cancerígeno por causa da acrilamida?",
        answer: "Sim. A acrilamida produzida no pão excessivamente tostado ou queimado é classificada como provável carcinógeno humano (Grupo 2A) pela Agência Internacional de Pesquisa em Câncer (IARC). No organismo, ela gera glicidamida, que induz mutações genéticas. Pães escurecidos ou queimados contêm até 50 vezes mais acrilamida do que torradas douradas claras."
      },
      {
        question: "Partículas de metal que se soltam das resistências podem fazer mal?",
        answer: "As resistências de Nicromo (80% níquel, 20% cromo) podem desprender micropartículas metálicas oxidadas após anos de choque térmico constante. Para pessoas saudáveis, traços minerais não geram intoxicação aguda; porém, para 10% a 15% de pessoas com síndrome alérgica ao níquel, ingerir partículas de níquel pode provocar desconforto digestivo e crises de dermatite."
      },
      {
        question: "Com que frequência devo esvaziar a bandeja de farelos da torradeira?",
        answer: "Em casas onde a torradeira é usada todo dia, ela deve ser esvaziada a cada 1 ou 2 semanas. Deixar farelos acumulados na base leva à pirólise contínua com liberação de fumaça tóxica com acroleína e partículas PM2.5, além de representar risco real de incêndio por autoignição."
      },
      {
        question: "Pão de centeio ou sem glúten forma mais acrilamida do que pão de trigo comum?",
        answer: "Sim. O pão de centeio contém teores naturalmente mais elevados de asparagina livre do que o trigo refinado, formando mais acrilamida em tempos iguais de tostagem. Além disso, muitos pães sem glúten recebem adição de açúcares redutores (mel, dextrose ou melaço) para ajudar a dourar, acelerando a reação de Maillard."
      },
      {
        question: "É perigoso puxar uma fatia presa com faca de metal com a torradeira ligada na tomada?",
        answer: "É extremamente perigoso e pode ser fatal. Vários modelos contam com chaves que mantêm os filamentos sob tensão elétrica total de 127V/220V mesmo quando a alavanca está para cima. Encostar um talher de metal em uma resistência energizada provoca choque elétrico imediato com risco de morte."
      }
    ],
    relatedTools: [
      {
        name: "Simulador de Desprendimento de Nicromo e Acrilamida em Torradeiras",
        url: "/pt/tools/toaster-element-acrylamide-safety-simulator/"
      },
      {
        name: "Calculadora de Acrilamida e Toxinas de Maillard em Fritadeiras Sem Óleo",
        url: "/pt/tools/air-fryer-acrylamide-calculator/"
      },
      {
        name: "Simulador de Oxidação de Resistências e Qualidade do Ar",
        url: "/pt/tools/toaster-element-acrylamide-safety-simulator/"
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
