// Wave 87: 5 High-Intent Material & Appliance Comparisons (228 -> 233 / Portuguese - pt)
const newComparisonsPt = [
  {
    slug: "over-the-range-microwave-vs-under-cabinet-range-hood",
    category: "appliance-safety",
    item1: "Coifa Embutida sob Armário com Duto (Cobertura Frontal Completa)",
    item2: "Micro-ondas Depurador sobre o Fogão OTR (Base Plana Curta de 38–40 cm)",
    winner: "item1",
    verdict: "Para remover dióxido de nitrogênio (NO2), benzeno não queimado, monóxido de carbono (CO) de fogões a gás e fumaça PM2.5 de frituras antes que se espalhem pela casa, uma coifa dedicada sob armário com duto externo é decisivamente superior ao micro-ondas instalado sobre o fogão (OTR). Testes do Lawrence Berkeley National Laboratory (LBNL) mostram que micro-ondas OTR avançam apenas 38–40 cm a partir da parede e possuem base plana sem câmara coletora, deixando as bocas frontais expostas e derrubando a Eficiência de Captura frontal (para 40%–85% ou menos), enquanto uma coifa de 50–60 cm de profundidade retém a pluma térmica sobre todos os queimadores. Além disso, muitos micro-ondas OTR operam apenas em modo recirculante (0% de remoção externa de NO2 e CO), e o vapor constante corrói travas de porta e placas eletrônicas. Se precisar cozinhar sob um micro-ondas OTR, priorize sempre as bocas traseiras, ligue o exaustor antes e abra uma janela.",
    table: [
      {
        aspect: "Projeção frontal e Eficiência de Captura (Testes LBNL)",
        item1Value: "Bacia coletora invertida de 50–60 cm cobre bocas traseiras e frontais com 60%–95%+ de captura",
        item2Value: "Fundo plano curto de 38–40 cm sem reservatório deixa fumaça das bocas da frente escapar pela porta"
      },
      {
        aspect: "Remoção de NO2, benzeno e CO de fogão a gás",
        item1Value: "Duto metálico liso expulsa 100% dos gases capturados para fora conforme ASHRAE 62.2 (≥100 CFM)",
        item2Value: "Frequentemente instalado sem duto externo (0% de remoção gasosa) ou freado por dutos estreitos"
      },
      {
        aspect: "Efeito Coanda na parede (bocas traseiras vs. frontais)",
        item1Value: "Cúpula funda e alta pressão estática capturam selagens fortes mesmo nos queimadores dianteiros",
        item2Value: "Bocas traseiras atingem 60%–100% guiadas pelo azulejo, mas bocas frontais espalham poluentes na cozinha"
      },
      {
        aspect: "Vida útil e exposição a vapor e gordura quente",
        item1Value: "Defletores de aço inox e motores vedados suportam vapor contínuo e calor intenso de bocas a gás",
        item2Value: "Vapor de panelas fervendo e névoa gordurosa oxidam microchaves de porta e placas do magnetron"
      },
      {
        aspect: "Ruído (sones), aproveitamento de espaço e instalação",
        item1Value: "Operação mais silenciosa (1–4 sones) e visão desimpedida, exigindo espaço na bancada para o micro-ondas",
        item2Value: "Libera área de bancada em cozinhas compactas, embora trabalhe mais barulhento (5–8+ sones)"
      }
    ],
    item1Pros: [
      "Avanço de 50–60 cm cobre os queimadores dianteiros onde ocorrem frituras e selagens intensas",
      "Suporta o critério HVI de 100 CFM por 10.000 BTU em duto rígido liso de 15–20 cm",
      "Impede que vapor de fervura e gordura saturem circuitos eletrônicos ou estufem armários superiores",
      "Filtros defletores em aço inox laváveis na lava-louças retêm gordura sem acumular combustível junto a placas"
    ],
    item2Pros: [
      "Economiza espaço precioso na bancada de apartamentos pequenos e cozinhas estreitas",
      "Atinge boa captura sobre as bocas traseiras (60%–100% no LBNL) SOMENTE se estiver dutado para fora",
      "Reúne iluminação da chapa, micro-ondas e exaustão básica em um único nicho padrão",
      "Substituição simples quando já há tomada e suporte metálico compatível na parede"
    ],
    useCases: [
      {
        situation: "Fogões a gás natural/GLP, frituras intensas em wok ou moradores com asma",
        scenario: "Fogões a gás natural/GLP, frituras intensas em wok ou moradores com asma",
        recommendation: "Coifa com Duto Externo Rígido Liso (50–60 cm de Profundidade)",
        reason: "Cobertura frontal e vazão constante expulsam picos de NO2 acima do limite EPA de 100 ppb."
      },
      {
        situation: "Apartamentos alugados já equipados com micro-ondas OTR sobre o fogão",
        scenario: "Apartamentos alugados já equipados com micro-ondas OTR sobre o fogão",
        recommendation: "Usar Sempre as Bocas Traseiras + Ligar Ventoinha 2 Min Antes + Abrir Janela Oposta",
        reason: "O efeito de parede canaliza o vapor das bocas de trás direto para a entrada inferior do OTR."
      },
      {
        situation: "Coifas potentes (>400 CFM) em residências bem vedadas com ar-condicionado",
        scenario: "Coifas potentes (>400 CFM) em residências bem vedadas com ar-condicionado",
        recommendation: "Instalar Entrada de Ar de Reposição IRC M1503.6 (ou Entreabrir Janela na Potência Máxima)",
        reason: "Evita pressão negativa que puxa monóxido de carbono de aquecedores a gás de volta para dentro."
      }
    ],
    safetyNotes: [
      "Nunca use dutos sanfonados flexíveis de alumínio em coifas ou micro-ondas OTR: os frisos reduzem a vazão real em 35%–50% e acumulam gordura inflamável oculta dentro da alvenaria.",
      "Em cozinhas a gás com micro-ondas OTR apenas depurador (sem saída externa), mantas finas de carvão não filtram NO2 nem CO: abra sempre uma janela e cozinhe nos queimadores traseiros.",
      "Observe a altura segura de instalação: micro-ondas OTR baixos demais (<35–40 cm das chamas) derretem molduras plásticas e travas; coifas acima de 75–90 cm perdem velocidade de sucção."
    ],
    faqs: [
      {
        question: "Micro-ondas sobre o fogão (OTR) são piores que coifas tradicionais para a qualidade do ar?",
        answer: "Sim. Ensaios do LBNL comprovam que aparelhos OTR avançam apenas 38–40 cm com fundo plano sem câmara de captura, permitindo que fumaça PM2.5 e NO2 das bocas dianteiras escapem para a sala — além de unidades recirculantes removerem 0% de gases tóxicos."
      },
      {
        question: "Quantos CFM ou m³/h uma coifa precisa para um fogão a gás padrão de 4 bocas?",
        answer: "O instituto HVI recomenda 100 CFM reais a cada 10.000 BTU totais: um fogão típico de 40.000 BTU pede cerca de 400 CFM em duto metálico liso (acima de 400 CFM exige-se ar de reposição em códigos residenciais)."
      },
      {
        question: "Como melhorar a exaustão de um micro-ondas OTR se não posso trocá-lo agora?",
        answer: "Verifique se a ventoinha interna pode ser girada para exaustão externa, lave as telas de alumínio mensalmente, ligue o ventilador 2 minutos antes de acender o fogo e cozinhe frituras ou fervuras sempre nas bocas de trás."
      }
    ],
    technicalSpecs: {
      materialThermal: {
        property: "Geometria de Captura LBNL e Arraste da Pluma Térmica",
        threshold: "Coifa sob Armário (50–60 cm prof., 60%–95%+ CE) vs. Micro-ondas OTR (38–40 cm plano, escape frontal)",
        details: "Cúpulas profundas retêm plumas ascendentes mesmo nas bocas frontais, ao passo que bases OTR planas carecem de volume coletor e frequentemente apenas recirculam NO2 e CO."
      },
      safetyStandard: {
        organization: "LBNL / ASHRAE / HVI / IRC",
        standard: "ASHRAE 62.2 (≥100 CFM Exaustão Externa), HVI 100 CFM/10k BTU e Ar de Reposição IRC M1503.6 (>400 CFM)",
        citation: "Normas técnicas residenciais de qualidade do ar interno e ventilação mecânica para controle de poluentes de combustão."
      },
      applianceSpecs: {
        parameter: "Duto Metálico Rígido Liso e Uso Prioritário de Bocas Traseiras",
        guideline: "Empregue duto galvanizado liso de 15–20 cm (jamais tubo sanfonado); acione o exaustor 2 min antes e cozinhe atrás sob aparelhos OTR."
      }
    },
    relatedComparisons: [
      "ducted-range-hood-vs-recirculating-charcoal-filter",
      "gas-oven-vs-electric-convection-oven",
      "induction-vs-gas-stove",
      "microwave-vs-oven"
    ],
    relatedItems: [
      "/tools/range-hood-extraction-efficiency-modeler/",
      "/tools/gas-stove-benzene-no2-calculator/",
      "/tools/air-fryer-pah-resuspension-modeler/"
    ]
  },
  {
    slug: "self-cleaning-pyrolytic-oven-vs-steam-clean-oven",
    category: "appliance-safety",
    item1: "Limpeza a Vapor em Baixa Temperatura + Pasta de Bicarbonato (100°C–120°C)",
    item2: "Ciclo de Autolimpeza Pirolítica em Alta Temperatura (425°C–540°C)",
    winner: "item1",
    verdict: "Para preservar a segurança do ar interno, proteger placas eletrônicas sensíveis do forno e evitar emergências respiratórias fatais em aves de estimação, o ciclo de limpeza a vapor em baixa temperatura combinado com pasta noturna de bicarbonato de sódio é decisivamente mais seguro que o ciclo de autolimpeza pirolítica. A pirólise trava a porta e eleva a cavidade a 425°C–540°C (800°F–1.000°F) por horas para incinerar gordura em cinzas, liberando monóxido de carbono, acroleína, formaldeído e fumaça densa PM2.5 enquanto submete fusíveis térmicos e módulos eletrônicos ao seu estresse máximo. Pior: se alguma forma antiaderente ou tapete de teflon (PTFE) esquecido passar de 260°C, a decomposição fluorada causa febre por fumos de polímero em humanos e hemorragia pulmonar letal em aves em poucos minutos. Já o vapor (~120°C por 25 minutos) com bicarbonato remove respingos com zero fumaça tóxica.",
    table: [
      {
        aspect: "Temperatura operacional e emissões químicas",
        item1Value: "100°C–120°C apenas com água + pasta alcalina de bicarbonato; praticamente zero CO, acroleína ou fumaça",
        item2Value: "425°C–540°C incinera restos liberando monóxido de carbono, acroleína irritante, formaldeído e PM2.5"
      },
      {
        aspect: "Febre do PTFE e letalidade respiratória em aves",
        item1Value: "100% seguro para calopsitas, periquitos, papagaios e pessoas asmáticas (muito abaixo de 260°C)",
        item2Value: "Risco crítico: forros de PTFE esquecidos ou fumaça densa de pirólise podem matar aves em poucos minutos"
      },
      {
        aspect: "Confiabilidade da placa digital, fusível térmico e trava",
        item1Value: "Calor moderado de assamento não gera sobrecarga em placas eletrônicas, relés ou vidros internos",
        item2Value: "Ciclo térmico mais extremo que o forno enfrenta — principal causa de fusíveis queimados e portas travadas"
      },
      {
        aspect: "Preservação de grades cromadas e esmalte porcelanizado",
        item1Value: "Bicarbonato suave preserva o brilho cromado das grades e o deslizamento suave dos trilhos",
        item2Value: "Deixar grades cromadas comuns a ~500°C oxida o aço em tom azulado e destrói o lubrificante seco"
      },
      {
        aspect: "Esforço para remover crostas antigas de gordura",
        item1Value: "Amolece sujeira leve em 25 min; crostas espessas pedem pasta noturna de bicarbonato e esponja macia",
        item2Value: "Reduz crostas antigas de carbono a cinza seca fácil de varrer (com alto custo energético e térmico)"
      }
    ],
    item1Pros: [
      "Zero fumaça de pirólise, picos de monóxido de carbono ou gases de fluoropolímeros",
      "Totalmente seguro em residências com aves domésticas, bebês ou moradores com asma",
      "Evita falhas caras em placas de controle digital, travas motorizadas e fusíveis térmicos",
      "Gasta centavos com água, bicarbonato e vinagre em vez de horas com resistências no máximo"
    ],
    item2Pros: [
      "Transforma gordura carbonizada espessa em cinza solta removível com pano úmido",
      "Construído sob certificação UL 858 de contenção contra incêndios e travamento térmico da porta",
      "Exige esforço físico mínimo em cantos fundos quando excessos são raspados previamente",
      "Aceitável apenas raramente com aves retiradas de casa, grades removidas e janelas/coifa abertas"
    ],
    useCases: [
      {
        situation: "Casas com aves de estimação (calopsitas, periquitos, papagaios) ou asma",
        scenario: "Casas com aves de estimação (calopsitas, periquitos, papagaios) ou asma",
        recommendation: "Usar Exclusivamente Limpeza a Vapor 120°C + Pasta Noturna de Bicarbonato e Vinagre",
        reason: "Zera o risco de edema pulmonar letal por fumaça pirolítica ou vapores de PTFE."
      },
      {
        situation: "Manutenção mensal de rotina e respingos recentes de assados",
        scenario: "Manutenção mensal de rotina e respingos recentes de assados",
        recommendation: "Pasta Noturna Saponificante de Bicarbonato (Forno Frio, Longe das Resistências)",
        reason: "O bicarbonato alcalino quebra ésteres de gordura suavemente sem agredir sensores térmicos."
      },
      {
        situation: "Limpeza rara de forno muito incrustado (sem nenhuma ave no prédio)",
        scenario: "Limpeza rara de forno muito incrustado (sem nenhuma ave no prédio)",
        recommendation: "Retirar Grades e Tapetes, Raspar Gordura Solta, Abrir Janelas e Ligar Coifa Externa",
        reason: "Previne labaredas de gordura acumulada, azulamento de grades e acúmulo de CO/PM2.5."
      }
    ],
    safetyNotes: [
      "NUNCA rode um ciclo de autolimpeza pirolítica com aves dentro de casa: os pulmões parabronquiais dos pássaros sofrem asfixia fatal em minutos diante de fumaça pirolítica ou traços de PTFE (>260°C).",
      "Retire sempre protetores de teflon (PTFE), tapetes de silicone, papel-alumínio e grades cromadas antes da pirólise: papel-alumínio no piso do forno derrete e funde permanentemente ao esmalte.",
      "Jamais force uma porta travada enquanto o forno ainda estiver quente nem aplique limpadores cáusticos com soda diretamente sobre resistências ou acendedores elétricos."
    ],
    faqs: [
      {
        question: "Por que técnicos de assistência desaconselham usar o modo autolimpante do forno?",
        answer: "Elevar o forno a 425°C–540°C por várias horas submete a placa eletrônica superior, o motor de trava da porta e o fusível térmico ao limite absoluto de calor, provocando grande parte dos chamados de defeito após a limpeza."
      },
      {
        question: "A fumaça da autolimpeza do forno faz mal para humanos e pássaros?",
        answer: "Sim. Queimar resíduos gordurosos libera monóxido de carbono, acroleína e PM2.5; além disso, se houver qualquer acessório com PTFE acima de 260°C, gases fluorados geram febre por fumos em humanos e morte rápida em aves."
      },
      {
        question: "Como limpar forno engordurado sem produtos químicos fortes nem pirólise?",
        answer: "Remova as grades, faça uma pasta de 1/2 xícara de bicarbonato com 3 colheres de sopa de água, espalhe nas paredes frias (evitando resistências), aguarde 10–12 horas, limpe com pano úmido e borrife vinagre suave antes do enxágue final."
      }
    ],
    technicalSpecs: {
      materialThermal: {
        property: "Pirólise Extrema vs. Saponificação Alcalina e Vapor Suave",
        threshold: "Ciclo Vapor: 100°C–120°C (0 fumaça pirolítica) vs. Pirólise: 425°C–540°C (supera limite PTFE de 260°C)",
        details: "Vapor brando e bicarbonato saponificam gorduras sem gerar monóxido de carbono nem fadiga térmica em placas eletrônicas."
      },
      safetyStandard: {
        organization: "UL / ASTM / Medicina Veterinária Aviária",
        standard: "UL 858 Contenção de Fogo em Fornos Domésticos e Limite Tóxico PTFE >260°C para Aves",
        citation: "Normas elétricas e de isolamento térmico combinadas a limiares toxicológicos contra emissão pirolítica e fluoropolímeros."
      },
      applianceSpecs: {
        parameter: "Remoção de Grades, Proibição de Alumínio no Piso e Pasta Noturna",
        guideline: "Jamais deixe papel-alumínio ou mantas de teflon no forno durante ciclos altos; higienize regularmente com pasta de bicarbonato e vapor a 120°C."
      }
    },
    relatedComparisons: [
      "oven-vs-toaster-oven",
      "gas-oven-vs-electric-convection-oven",
      "baking-soda-vs-bar-keepers-friend",
      "parchment-paper-vs-aluminum-foil-oven"
    ],
    relatedItems: [
      "/tools/oven-self-cleaning-pyrolysis-simulator/",
      "/tools/kitchen-fire-emergency-guide/",
      "/tools/cookware-oven-temp-lookup/"
    ]
  },
  {
    slug: "microwave-popcorn-bag-vs-borosilicate-glass-popper",
    category: "container-material",
    item1: "Pipoqueira de Vidro Borosilicato Tipo 3.3 (Sem Revestimentos)",
    item2: "Saco Comercial de Pipoca de Micro-ondas (Susceptor PET Metalizado)",
    winner: "item1",
    verdict: "Para eliminar por completo agentes antigordura fluorados, contato de óleo quente com filmes susceptores de poliéster (PET) metalizado acima de 200°C e aditivos industriais, uma pipoqueira de vidro borosilicato Tipo 3.3 é decisivamente mais segura que sacos prontos de micro-ondas. Embora em 28 de fevereiro de 2024 a FDA dos EUA tenha anunciado a conclusão da retirada voluntária de substâncias PFAS antigordura em embalagens americanas novas (e declarado autorizações antigas abandonadas no início de 2025), os sacos ainda dependem de uma faixa susceptor interna de PET metalizado que aquece a 215°C–232°C sob o óleo derretido — muito acima da transição vítrea do PET (70°C–80°C). Estoques antigos ou importados também variam, e abrir o saco quente libera uma nuvem de vapor a 95°C com voláteis aromatizantes. O borosilicato 3.3 é 100% inerte, livre de PFAS e plásticos na câmara de estalo e lavável na lava-louças.",
    table: [
      {
        aspect: "Exposição a PFAS antigordura e migração da embalagem",
        item1Value: "Zero PFAS, zero colas ou papéis tratados: vidro silicatado inerte não libera químicos persistentes",
        item2Value: "Retirada voluntária FDA nos EUA concluída em fev/2024, mas importados e estoques antigos podem variar"
      },
      {
        aspect: "Contato com filme susceptor PET metalizado a >200°C",
        item1Value: "Dispensa susceptor metálico; grãos repousam sobre vidro puro com tampa ventilada de silicone",
        item2Value: "Susceptor de alumínio/PET atinge 215°C–232°C direto sob óleo quente, bem acima da Tg do PET (~75°C)"
      },
      {
        aspect: "Controle de óleos, aromatizantes e pluma de vapor",
        item1Value: "Controle total: estoure a seco ou com óleo puro e adicione manteiga real ou sal marinho depois",
        item2Value: "Pré-carregado com óleo de palma/soja refinado e aromas (diacetil antigo foi trocado, mas emite voláteis)"
      },
      {
        aspect: "Choque térmico e durabilidade em micro-ondas",
        item1Value: "Vidro borosilicato 3.3 suporta ΔT >165°C no micro-ondas (apoiar em descanso seco ao retirar)",
        item2Value: "Embalagem descartável única; falha do prato giratório carboniza o papel em segundos"
      },
      {
        aspect: "Custo por porção, resíduos e praticidade de limpeza",
        item1Value: "Reutilizável por anos, vai à lava-louças e reduz o custo por porção em cerca de 75%–85%",
        item2Value: "Custo recorrente por pacote e papel engordurado impróprio para reciclagem limpa"
      }
    ],
    item1Pros: [
      "100% livre de agentes antigordura fluorados PFAS, fluorotelômeros e adesivos térmicos de saco",
      "Evita contato de gordura quente com filmes plásticos susceptores de PET acima de 215°C",
      "Vidro borosilicato Tipo 3.3 não passa gosto, não tem BPA/ftalatos e limpa fácil na lava-louças",
      "Permite estourar milho orgânico sem óleo ou com óleo de abacate e manteiga pura no final"
    ],
    item2Pros: [
      "Zero louça para lavar — basta descartar o saco após terminar de estourar",
      "Dose pré-medida de milho, gordura e sal em 2 minutos para escritórios ou viagens",
      "Lotes fabricados nos EUA após fev/2024 seguem a retirada voluntária da FDA contra PFAS antigordura",
      "Ocupa espaço mínimo na despensa para consumo eventual"
    ],
    useCases: [
      {
        situation: "Famílias, crianças e fãs frequentes de pipoca evitando químicos de embalagem",
        scenario: "Famílias, crianças e fãs frequentes de pipoca evitando químicos de embalagem",
        recommendation: "Pipoqueira de Vidro Borosilicato 3.3 (Tampa Ventilada de Silicone) + Milho Puro",
        reason: "Elimina superaquecimento de susceptor PET, gorduras refinadas e aditivos aromatizantes."
      },
      {
        situation: "Estourar pipoca crocante no vidro sem queimar grãos nem manteiga",
        scenario: "Estourar pipoca crocante no vidro sem queimar grãos nem manteiga",
        recommendation: "Estourar a Seco (ou 1 col. chá Óleo de Abacate) e Parar com Intervalos de 2 Segundos",
        reason: "Colocar manteiga comum antes de aquecer queima sólidos do leite nas paredes quentes do vidro."
      },
      {
        situation: "Uso eventual de saco pronto reduzindo inalação de vapores quentes",
        scenario: "Uso eventual de saco pronto reduzindo inalação de vapores quentes",
        recommendation: "Checar Lote Recente Sem PFAS, Parar aos 2 Segundos e Abrir Longe do Rosto",
        reason: "Evita queimaduras pelo jato de vapor a 95°C e dispersa aromas voláteis sob a coifa."
      }
    ],
    safetyNotes: [
      "Nunca deixe pipoca no micro-ondas sem supervisão confiando no tempo automático: após parar os estouros, o saco ou grãos secos podem incendiar em 20–30 segundos.",
      "Pegue a tigela de borosilicato sempre com luvas térmicas secas (passa de 150°C) e nunca apoie vidro fervente sobre bancada molhada ou pia fria.",
      "Abra sacos de pipoca de micro-ondas com os braços esticados longe do rosto e coifa ligada: o vapor pressurizado causa escaldaduras e carrega aerossóis aromatizantes."
    ],
    faqs: [
      {
        question: "A FDA proibiu PFAS em todos os sacos de pipoca de micro-ondas em 2024?",
        answer: "Em 28 de fevereiro de 2024 a FDA anunciou a conclusão da retirada voluntária pelos fabricantes de substâncias PFAS antigordura em embalagens novas nos EUA (com autorizações históricas abandonadas até 2025). Porém, sacos seguem usando susceptor plástico PET a >215°C e estoques antigos ou importados variam."
      },
      {
        question: "O que é aquela faixa cinza brilhante dentro do saco de pipoca?",
        answer: "É um susceptor de micro-ondas: fina película de alumínio sobre filme plástico PET que absorve ondas de 2,45 GHz e atinge 215°C–232°C para tostar os grãos no óleo quente, bem acima da temperatura de transição vítrea do PET (70°C–80°C)."
      },
      {
        question: "Uma pipoqueira de vidro borosilicato pode quebrar no micro-ondas?",
        answer: "Vidro borosilicato Tipo 3.3 legítimo suporta calor rápido de micro-ondas com folga graças à baixa expansão térmica (~3,3 × 10^-6/K), bastando evitar choques direto do freezer, usar tampa ventilada sem lacre hermético e apoiar em base seca."
      }
    ],
    technicalSpecs: {
      materialThermal: {
        property: "Borosilicato 3.3 Inerte vs. Susceptor PET Metalizado a 215°C–232°C",
        threshold: "Vidro Borosilicato: Zero migração orgânica, ΔT >165°C vs. Saco: Susceptor 215°C–232°C (Tg PET ~75°C)",
        details: "Dispensar susceptores PET e papéis tratados elimina extração lipofílica em óleo quente e inalação de nuvem de vapor a 95°C."
      },
      safetyStandard: {
        organization: "US FDA / EFSA",
        standard: "Retirada Voluntária PFAS FDA (28 Fev 2024) e TWI Europeu EFSA 4,4 ng/kg pc/semana (4 PFAS)",
        citation: "Marcos regulatórios americanos contra agentes fluorados antigordura junto aos limiares semanais europeus de exposição."
      },
      applianceSpecs: {
        parameter: "Tampa Ventilada Sem Pressão e Manteiga Pós-Estouro",
        guideline: "Use tampa ventilada frouxa, desligue quando espaçar 2 segundos entre estouros, descanse em suporte seco e adicione manteiga só depois."
      }
    },
    relatedComparisons: [
      "borosilicate-glass-vs-silicone-microwave-popcorn-popper",
      "glass-vs-plastic-microwave",
      "vented-microwave-cover-vs-plastic-wrap",
      "pla-bioplastic-vs-borosilicate-glass-containers"
    ],
    relatedItems: [
      "/tools/microwave-popcorn-pfas-modeler/",
      "/tools/kitchen-plastic-leaching-checker/",
      "/tools/thermal-shock-simulator/"
    ]
  },
  {
    slug: "stainless-steel-boiler-vs-aluminum-boiler-espresso-machine",
    category: "appliance-safety",
    item1: "Caldeira e Termobloco de Aço Inoxidável 304 / 316L",
    item2: "Caldeira de Alumínio Nu ou Latão Tradicional com Chumbo",
    winner: "item1",
    verdict: "Para eliminar picos de lixiviação de metais pesados após descalcificação química, resistir ao ácido cítrico ou sulfâmico sem corrosão por pite e atender às normas modernas sem chumbo para água quente, uma caldeira ou termobloque revestido de aço inoxidável 304 ou 316L é decisivamente mais seguro que alumínio nu ou latão tradicional com chumbo. Análises do Instituto Federal Alemão de Avaliação de Riscos (BfR) mostraram que descalcificar máquinas com caldeira de latón — sobretudo a quente — remove a pátina protetora e dispara picos acentuados de chumbo (Pb) e níquel (Ni) nos primeiros cafés seguintes (ligas clássicas CW614N/CW617N levam 1,5%–3,0% de chumbo). Já caldeiras de alumínio nu sofrem ataque da película de Al2O3 por ácido cítrico concentrado, gerando corrosão e água acinzentada metálica. O aço inox 304/316L forma filme passivo autorregenerativo Cr2O3 sem chumbo na liga — bastando enxaguar vários tanques após descalcificar e purgar a água parada da manhã.",
    table: [
      {
        aspect: "Risco de lixiviação de chumbo e metais pesados (NSF/ANSI 372)",
        item1Value: "Praticamente zero chumbo: matriz austenítica 304/316L não contém glóbulos de Pb nos contornos de grão",
        item2Value: "Latão clássico contém 1,5%–3,0% Pb (vs. ≤0,25% Eco Brass); alumínio nu sofre pite com quelantes ácidos"
      },
      {
        aspect: "Tolerância à descalcificação com ácido cítrico ou sulfâmico",
        item1Value: "Filme passivo Cr2O3 autorreparável suporta ciclos ácidos recomendados sem corrosão localizada",
        item2Value: "Ácido cítrico forte remove Al2O3 no alumínio e arranca óxido protetor no latão elevando picos de Pb/Ni"
      },
      {
        aspect: "Danos por vinagre branco (ácido acético)",
        item1Value: "Resiste melhor ao metal, porém o vinagre ainda impregna vedações de silicone/EPDM (evitar)",
        item2Value: "Ácido acético gera acetato de cobre (azinhavre) e acetato de chumbo tóxico no latão e corrói alumínio"
      },
      {
        aspect: "Água estagnada noturna ('primeiro café da manhã')",
        item1Value: "Difusão iônica noturna mínima; descarga rápida de 60–100 mL renova a água antes da extração",
        item2Value: "Água parada por 8–12 h concentra 5×–10× mais cobre, zinco, níquel ou chumbo: purga matinal obrigatória"
      },
      {
        aspect: "Rapidez de aquecimento e massa térmica",
        item1Value: "Excelente estabilidade PID na extração com aquecimento levemente mais lento que blocos finos de alumínio",
        item2Value: "Termoblocos de alumínio esquentam em 30–60 s; caldeiras espessas de latão entregam grande inércia térmica"
      }
    ],
    item1Pros: [
      "Liga isenta de glóbulos de chumbo, zerando picos tóxicos após processos de descalcificação",
      "Resiste a descalcificadores recomendados de ácido cítrico ou sulfâmico sem pite galvânico",
      "Preserva sabor limpo sem retrogosto metálico de alumínio ou cobre em espressos e chás",
      "Filme passivo Cr2O3 autorreparável suporta anos a 9 bar e 92°C–96°C sem desgaste corrosivo"
    ],
    item2Pros: [
      "Termoblocos de alumínio atingem temperatura de preparo em menos de 1 minuto em modelos de entrada",
      "Eco Brass certificado NSF/ANSI 372 (≤0,25% Pb) oferece excelente estabilidade térmica quando comprovado sem chumbo",
      "Grupos clássicos pesados em latão (E61) seguram temperatura estável em cafés em sequência",
      "Vasta disponibilidade de peças de reposição em cafeterias italianas tradicionais"
    ],
    useCases: [
      {
        situation: "Uso diário focado em saúde e locais com água dura exigindo descalcificação frequente",
        scenario: "Uso diário focado em saúde e locais com água dura exigindo descalcificação frequente",
        recommendation: "Caldeira de Aço Inox 304 / 316L + Água Filtrada Branda Remineralizada",
        reason: "Ausência de chumbo e alta passividade ácida mantêm qualquer migração metálica desprezível."
      },
      {
        situation: "Conservação segura de máquina de entrada com caldeira de alumínio",
        scenario: "Conservação segura de máquina de entrada com caldeira de alumínio",
        recommendation: "Usar Descalcificador Tamponado do Fabricante ou Solução Fria Branda + Água Filtrada",
        reason: "Prevenir calcário desde o início evita ataques ácidos severos contra a camada de alumina Al2O3."
      },
      {
        situation: "Extração segura em cafeteira italiana clássica de latão após descalcificar",
        scenario: "Extração segura em cafeteira italiana clássica de latão após descalcificar",
        recommendation: "Descalcificar Morno/Frio, Enxaguar ≥3 Tanques (4,5 L), Descartar 3–4 Cafés e Purgar de Manhã",
        reason: "Elimina picos metálicos pós-ácido apontados pelo BfR e permite aos óleos do café repassivar o metal."
      }
    ],
    safetyNotes: [
      "NUNCA utilize vinagre branco comum (ácido acético) para descalcificar máquinas de espresso: o ácido acético forma acetato de cobre e acetato de chumbo no latão, corrói alumínio e impregna borrachas de silicone com gosto azedo.",
      "Jamais descalcifique caldeiras de latón ou alumínio quentes (>80°C): o calor acelera em até 400% a quelação metálica e a dezincificação do latão.",
      "Após toda descalcificação — e todas as manhãs antes do primeiro café — faça descarga limpa pelo grupo, bico de vapor e água quente (mínimo de 3 reservatórios completos pós-limpeza)."
    ],
    faqs: [
      {
        question: "Máquinas de espresso com caldeira de latão realmente soltam chumbo após descalcificar?",
        answer: "Ligas antigas de latão usinável (1,5%–3,0% de chumbo) podem liberar picos de chumbo e níquel logo após descalcificações ácidas que arrancam a camada mineral protetora — testes do BfR alemão mediram valores muito acima do limite de 10 µg/L da OMS. Optar por aço 304/316L ou latão NSF/ANSI 372 (≤0,25% Pb) com enxágue de 3 tanques evita esse risco."
      },
      {
        question: "Posso usar ácido cítrico em caldeira de alumínio de cafeteira espresso?",
        answer: "Apenas com muita cautela e baixa concentração, ou preferencialmente usando o descalcificador tamponado do fabricante. Ácido cítrico forte ou quente ataca a película de óxido Al2O3, gerando corrosão por pite e vazamentos internos."
      },
      {
        question: "Por que devo purgar água pela manhã antes de tirar o primeiro espresso?",
        answer: "Água parada por 8–12 horas durante a noite dentro de caldeiras ou termoblocos acumula concentrações 5×–10× maiores de íons dissolvidos. Descartar 60–100 mL pelo grupo limpa essa água estancada."
      }
    ],
    technicalSpecs: {
      materialThermal: {
        property: "Passividade Cr2O3 do Inox vs. Dissolução Pb/Ni em Latão e Pite em Al2O3",
        threshold: "Aço 304/316L: <0,01% Pb resistente a ácido vs. Latão Clássico: 1,5%–3% Pb (≤0,25% NSF 372) e Alumínio sensível",
        details: "Aços austeníticos eliminam glóbulos intergranulares de chumbo e corrosão localizada sob ácido cítrico/sulfâmico a 9 bar e 92°C–96°C."
      },
      safetyStandard: {
        organization: "NSF/ANSI 372 / NSF 51 / BfR / OMS",
        standard: "NSF/ANSI 372 Sem Chumbo (≤0,25% Pb Ponderado) e Limite OMS de Chumbo em Água Potável (10 µg/L)",
        citation: "Critérios de certificação de ligas em contato com bebidas quentes e medições laboratoriais alemãs BfR pós-descalcificação."
      },
      applianceSpecs: {
        parameter: "Descalcificação a Frio, Enxágue de 4,5 L e Purga Matinal",
        guideline: "Empregue água filtrada branda (40–70 ppm), jamais use vinagre, descalcifique em temperatura ambiente/morna, enxágue ≥3 tanques e purgue de manhã."
      }
    },
    relatedComparisons: [
      "brass-vs-stainless-steel-espresso-portafilter",
      "citric-acid-vs-vinegar-descaling",
      "stainless-steel-vs-aluminum-moka-pot",
      "single-serve-pod-coffee-maker-vs-glass-pour-over"
    ],
    relatedItems: [
      "/tools/espresso-machine-heavy-metal-modeler/",
      "/tools/appliance-descaling-calculator/",
      "/tools/water-filter-efficiency-analyzer/"
    ]
  },
  {
    slug: "hot-food-in-fridge-vs-counter-cooling",
    category: "food-storage",
    item1: "Potes Rasos Direto na Geladeira (≤5 cm de Altura, em Até 2 Horas)",
    item2: "Deixar Panelas Fundas Esfriando na Bancada Antes de Refrigerar",
    winner: "item1",
    verdict: "Para prevenir intoxicações por Clostridium perfringens, Bacillus cereus e enterotoxinas de Staphylococcus aureus sem prejudicar outros itens da geladeira, dividir alimentos quentes em recipientes rasos (≤5 cm / 2 polegadas de profundidade) e refrigerá-los diretamente em até 2 horas é decisivamente mais seguro que deixar uma panela grande esfriando sobre a bancada. O mito de que 'colocar comida quente estraga a geladeira' vem das antigas caixas de gelo: refrigeradores modernos lidam com cargas térmicas moderadas tranquilamente, ao passo que deixar uma panela funda de ensopado, caldo ou arroz cozido no fogão aprisiona o miolo na Zona de Perigo Bacteriano (4°C–60°C / 40°F–140°F) por 4 a 8 horas — permitindo germinação de esporos resistentes ao calor. Tampouco coloque um caldeirão de 8 litros fervendo direto na geladeira, pois o centro demora demais a esfriar e aquece leites vizinhos; o padrão USDA FSIS é fracionar em travessas rasas (≤5 cm) ou resfriar antes em banho de gelo mexendo até armazenar a ≤4°C.",
    table: [
      {
        aspect: "Passagem pela Zona de Perigo USDA (4°C–60°C)",
        item1Value: "Alta razão superfície-volume derruba o centro abaixo de 4°C rapidamente dentro da janela de 2 horas",
        item2Value: "Miolo isolado em panela funda fica preso entre 21°C e 50°C por 4–8+ horas — incubadora ideal de bactérias"
      },
      {
        aspect: "Risco de toxinas termoestáveis ('síndrome do arroz frito' / Staph)",
        item1Value: "Resfriamento ágil bloqueia síntese de toxina emética de B. cereus e enterotoxinas antes de níveis perigosos",
        item2Value: "Resfriamento lento produz toxinas estáveis ao calor que NÃO são destruídas nem fervendo acima de 74°C"
      },
      {
        aspect: "Impacto na temperatura interna da geladeira",
        item1Value: "Porções rasas espaçadas nas prateleiras quase não alteram a temperatura ambiente do refrigerador",
        item2Value: "Enfiar um panelão gigante fervendo inteiro eleva o ar das prateleiras próximas e força o degelo"
      },
      {
        aspect: "Choque térmico em vidro e vedação das tampas",
        item1Value: "Inox 304 ou vidro borosilicato com tampa entreaberta evitam condensação e quebra (fechar só quando frio)",
        item2Value: "Despejar caldo fervente em vidro sodo-cálcico gelado trinca na hora; tampar quente cria poças de condensação"
      },
      {
        aspect: "Cumprimento da Regra das 2 Horas / 1 Hora (USDA FSIS)",
        item1Value: "Atende com folga ao limite de 2 horas fora da geladeira (ou 1 hora acima de 32°C / 90°F no verão)",
        item2Value: "Esperar um panelão parecer 'frio ao toque' quase sempre ultrapassa 2–4 horas sem perceber"
      }
    ],
    item1Pros: [
      "Segue 100% os protocolos de resfriamento rápido do USDA FSIS e FDA Food Code (camada ≤5 cm / 2 pol.)",
      "Impede germinação de esporos de Clostridium perfringens em sopas e Bacillus cereus em arroz/massas",
      "Protege leite e carnes nas prateleiras próximas ao dissipar calor rapidamente sem sobrecarregar o compressor",
      "Permite saída limpa de vapor com tampa entreaberta até atingir 4°C antes de fechar hermeticamente"
    ],
    item2Pros: [
      "Dispensa potes extras APENAS se a panela for mexida ativamente dentro de pia cheia de água e gelo",
      "Não aquece alimentos ao lado na geladeira após pré-resfriamento ativo em banho de gelo (nunca passivo na bancada)",
      "Facilita retirar gordura solidificada do topo de caldos quando resfriados em banho gelado ágil",
      "Funciona sem risco apenas em xícaras ou porções mínimas que caem abaixo de 21°C em 20–30 minutos"
    ],
    useCases: [
      {
        situation: "Panelas grandes de ensopados, caldos, feijão, curry ou arroz/macarrão cozido",
        scenario: "Panelas grandes de ensopados, caldos, feijão, curry ou arroz/macarrão cozido",
        recommendation: "Dividir na Hora em Travessas Rasas (≤5 cm Altura) e Levar à Geladeira em até 2 Horas",
        reason: "Grandes volumes conservam calor interno por horas; recipientes rasos cortam o resfriamento em >70%."
      },
      {
        situation: "Esfriar caldeirão de 8 litros sem lotar as prateleiras da geladeira",
        scenario: "Esfriar caldeirão de 8 litros sem lotar as prateleiras da geladeira",
        recommendation: "Banho de Água com Gelo na Pia + Mexida Contínua por 20–30 Min Antes de Fracionar",
        reason: "A água conduz calor ~24× mais rápido que o ar, atravessando depressa a faixa crítica bacteriana."
      },
      {
        situation: "Evitar migração de plásticos e excesso de vapor ao guardar sobras quentes",
        scenario: "Evitar migração de plásticos e excesso de vapor ao guardar sobras quentes",
        recommendation: "Usar Potes Rasos de Vidro Borosilicato ou Inox 304 (Tampa Frouxa até Esfriar)",
        reason: "Evita contato de molhos quentes/ácidos com plásticos e impede umidade condensada na comida."
      }
    ],
    safetyNotes: [
      "Cumpra a Regra USDA de 2 Horas / 1 Hora: NUNCA deixe arroz cozido, macarrão, carnes ou caldos esfriando no fogão ou bancada por mais de 2 horas somadas (1 hora se o ambiente passar de 32°C / 90°F).",
      "Reaquecer sobras estragadas NÃO resolve o problema: Bacillus cereus e Staphylococcus aureus geram toxinas termoestáveis no resfriamento lento que resistem mesmo a fervura e aquecimento a >74°C.",
      "Não empilhe potes quentes grudados nem encoste em leite ou frutas frescas: deixe espaço para circulação do ar frio, mantenha tampa entreaberta até gelar e confira ≤4°C (40°F) no termômetro."
    ],
    faqs: [
      {
        question: "Pode colocar comida quente na geladeira ou estraga o motor e os outros alimentos?",
        answer: "Sim, pode e deve colocar sem esperar horas — o USDA confirma que o ideal é dividir lotes grandes em potes rasos (≤5 cm / 2 pol.) e refrigerar dentro de 2 horas. Deixar panelas grandes no fogão prende o miolo na zona bacteriana, enquanto porções rasas gelam rápido sem prejudicar geladeiras modernas."
      },
      {
        question: "Qual o tempo máximo seguro para comida cozida ficar fora da geladeira?",
        answer: "No máximo 2 horas no total (ou apenas 1 hora em dias/cozinhas acima de 32°C / 90°F), segundo o USDA FSIS. A contagem começa assim que desliga o fogo; uma panela funda pode levar 4–6 horas só para amornar por dentro."
      },
      {
        question: "Qual é o jeito mais rápido e seguro de esfriar uma panela grande de sopa ou caldo?",
        answer: "Divida a sopa quente em várias travessas largas e rasas de vidro ou inox (altura ≤5 cm) dispostas com folga na geladeira e tampa entreaberta até gelar, ou coloque a panela numa pia com água e gelo mexendo constantemente."
      }
    ],
    technicalSpecs: {
      materialThermal: {
        property: "Meia-Vida de Difusão Térmica Central (Travessa ≤5 cm vs. Panela Funda)",
        threshold: "Travessa Rasa (≤5 cm): Resfria <4°C em <2h vs. Panela na Bancada: 4–8h presa entre 4°C e 60°C",
        details: "Ampliar a relação área/volume acelera a queda térmica através da faixa crítica de germinação bacteriana (21°C–52°C) antes de formar toxinas."
      },
      safetyStandard: {
        organization: "USDA FSIS / FDA Food Code",
        standard: "Regra USDA 2h / 1h, Refrigeração ≤4°C (40°F) e Resfriamento Rápido FDA § 3-501.14 (57°C→21°C em 2h)",
        citation: "Diretrizes federais de controle tempo-temperatura contra esporos de C. perfringens e toxinas de B. cereus em sobras domésticas."
      },
      applianceSpecs: {
        parameter: "Travessas Rasas de Borosilicato/Inox 304 e Espaçamento Interno",
        guideline: "Fracionar em recipientes ≤5 cm de profundidade, espaçar nas prateleiras para fluxo de ar frio, tampar bem após esfriar e consumir em 3–4 dias."
      }
    },
    relatedComparisons: [
      "freezer-vs-fridge-leftovers",
      "glass-vs-plastic-meal-prep-containers",
      "chest-freezer-vs-frost-free-upright-freezer",
      "vacuum-seal-vs-regular-freezer"
    ],
    relatedItems: [
      "/tools/fridge-organization-zone-planner/",
      "/tools/leftover-shelf-life-calculator/",
      "/tools/power-outage-food-safety-checker/"
    ]
  }
];

module.exports = { newComparisonsPt };
