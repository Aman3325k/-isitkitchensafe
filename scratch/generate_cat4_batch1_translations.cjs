const fs = require('fs');

const batch1 = {
  es: [
    {
      item: "Pollo Crudo",
      appliance: "freezer",
      slug: "raw-chicken",
      safe: "yes",
      shortAnswer: "Sí, el pollo crudo es completamente seguro para congelar.",
      reason: "Este alimento se congela excepcionalmente bien sin perder su valor nutricional ni sus propiedades estructurales.\n\nLa congelación a 0 °F (-18 °C) detiene la proliferación bacteriana y preserva la frescura del pollo crudo durante meses. Solo asegúrate de guardarlo en un recipiente o bolsa hermética para prevenir quemaduras por frío.",
      tips: [
        "Usa bolsas gruesas para congelador y extrae todo el exceso de aire para prevenir quemaduras por frío.",
        "Etiqueta el envase con la fecha y el nombre del alimento antes de guardarlo en el congelador.",
        "Congela en porciones individuales o por comidas para descongelar únicamente lo que necesites."
      ],
      warnings: [
        "Las quemaduras por congelación resecan la superficie del pollo, alterando la textura y el sabor aunque sin comprometer su seguridad.",
        "No dejes las piezas congeladas expuestas al aire dentro del congelador."
      ],
      faqs: [
        {
          question: "¿Cuánto tiempo se puede conservar el pollo crudo entero en el congelador sin perder calidad?",
          answer: "Un pollo crudo entero conserva un sabor y textura óptimos hasta por 12 meses a 0 °F (-18 °C), mientras que las piezas troceadas mantienen su calidad máxima durante 9 meses; aunque el pollo congelado permanece seguro indefinidamente, la oxidación lipídica prolongada acaba alterando el sabor."
        },
        {
          question: "¿Cuál es la forma más segura de descongelar pollo crudo?",
          answer: "Descongela el pollo crudo lentamente en la bandeja inferior del refrigerador dentro de un recipiente con borde para recoger jugos, calculando unas 24 horas por cada 2,3 kg (5 libras); nunca descongeles pollo crudo sobre la encimera, donde la superficie alcanza la zona de peligro térmico (40 °F–140 °F / 4 °C–60 °C) acelerando la multiplicación de Salmonella."
        },
        {
          question: "¿Se puede congelar pollo crudo directamente en su bandeja plástica del supermercado?",
          answer: "El empaque del supermercado es permeable a los gases y contiene bolsas de aire que provocan quemaduras por frío en 1 o 2 meses; para almacenamiento prolongado, envuelve la bandeja en papel de aluminio grueso o pasa el pollo a bolsas de congelador con cierre hermético al vacío."
        }
      ],
      relatedItems: [
        "chicken-breast",
        "chicken-wings",
        "cooked-chicken",
        "ziploc-bag"
      ],
      material: "Carne de Ave Cruda",
      keyRisk: "Contaminación por patógenos (Salmonella, E. coli)",
      tip: "Descongela las carnes crudas en el refrigerador por debajo de 40 °F (4 °C) y cocínalas a temperaturas internas seguras.",
      learnMore: "La carne cruda contiene abundante humedad y nutrientes, siendo un medio idóneo para patógenos. Solo la cocción a temperaturas internas seguras destruye las bacterias."
    },
    {
      item: "Pollo Cocido",
      appliance: "freezer",
      slug: "cooked-chicken",
      safe: "yes",
      shortAnswer: "Sí, el pollo cocido es completamente seguro para congelar.",
      reason: "Este alimento se congela excepcionalmente bien sin perder su valor nutricional ni sus propiedades estructurales.\n\nLa congelación a 0 °F (-18 °C) detiene el crecimiento bacteriano y preserva la frescura del pollo cocido durante meses. Solo asegúrate de almacenarlo en un recipiente hermético para evitar quemaduras por frío.",
      tips: [
        "Usa recipientes herméticos o bolsas gruesas para congelador y retira todo el aire sobrante para prevenir quemaduras por frío.",
        "Etiqueta el envase con la fecha de preparación y el tipo de receta antes de llevarlo al congelador.",
        "Congela porciones individuales listas para calentar y descongelar únicamente lo necesario."
      ],
      warnings: [
        "Las quemaduras por congelación resecan la superficie, afectando la textura y el sabor aunque sin comprometer la seguridad alimentaria.",
        "No dejes alimentos congelados expuestos al aire dentro del congelador."
      ],
      faqs: [
        {
          question: "¿Cuánto tiempo puede durar el pollo cocido en el congelador antes de perder sabor?",
          answer: "El pollo cocido mantiene una calidad óptima durante 3 a 4 meses a 0 °F (-18 °C); más allá de este periodo, la degradación de grasas poliinsaturadas provoca un sabor rancio característico al recalentarlo."
        },
        {
          question: "¿Se puede recalentar pollo cocido congelado directamente sin descongelar?",
          answer: "Sí, el pollo cocido desmenuzado o cortado en cubos se puede incorporar directamente a sopas, guisos y cazuelas hirviendo sin descongelación previa, siempre que alcance una temperatura interna de 165 °F (74 °C)."
        },
        {
          question: "¿Cómo evitar que el pollo cocido quede seco y fibroso tras congelarlo?",
          answer: "Congela el pollo cocido bañado en un poco de caldo, salsa o jugo de cocción en un recipiente hermético; el líquido cubre las fibras musculares magras, protegiéndolas del aire seco y reteniendo su humedad."
        }
      ],
      relatedItems: [
        "raw-chicken",
        "chicken-breast",
        "tupperware",
        "aluminum-foil"
      ],
      material: "Carne de Ave Cocida",
      keyRisk: "Contaminación por patógenos (Salmonella, E. coli)",
      tip: "Descongela las carnes en el refrigerador por debajo de 40 °F (4 °C) y caliéntalas a temperaturas internas seguras.",
      learnMore: "La carne de ave cocida retiene humedad y proteínas. Almacenada herméticamente en el congelador, previene el deterioro por oxidación lipídica y recalienta con excelente jugosidad."
    },
    {
      item: "Pechuga de Pollo",
      appliance: "freezer",
      slug: "chicken-breast",
      safe: "yes",
      shortAnswer: "Sí, puedes congelar pechuga de pollo de forma totalmente segura.",
      reason: "Congelar pechuga de pollo a 0 °F (-18 °C) paraliza toda actividad enzimática y proliferación microbiana, conservando la carne de manera indefinida. Según el USDA, los alimentos congelados se mantienen inocuos por tiempo indefinido.\n\nSin embargo, la pérdida de humedad por el aire seco del congelador puede causar quemaduras por frío que arruinan textura y sabor, por lo que un empaque hermético es indispensable.",
      tips: [
        "Extrae todo el aire de las bolsas de congelador antes de cerrarlas para evitar quemaduras por congelación.",
        "Anota la fecha y el tipo de corte en el recipiente antes de introducirlo en el congelador.",
        "Deja enfriar por completo cualquier preparación antes de llevarla al congelador."
      ],
      warnings: [
        "Introducir comida caliente eleva la temperatura interna del congelador, arriesgando el desarrollo bacteriano en alimentos contiguos.",
        "No congeles carne en el envoltorio delgado del supermercado, ya que no proporciona sellado hermético contra el aire."
      ],
      faqs: [
        {
          question: "¿Cuánto tiempo se mantienen frescas las pechugas de pollo deshuesadas y sin piel en el congelador?",
          answer: "Las pechugas de pollo deshuesadas conservan una humedad y textura óptimas durante 9 meses a 0 °F (-18 °C); al carecer prácticamente de grasa intramuscular, son sumamente propensas a la sublimación y quemaduras por frío si no se sellan al vacío o herméticamente."
        },
        {
          question: "¿Con qué rapidez se pueden descongelar pechugas de pollo de forma segura en agua fría?",
          answer: "Sumerge las pechugas dentro de bolsas herméticas en un tazón con agua fría del grifo, cambiando el agua cada 30 minutos; las pechugas individuales se descongelan en 30 a 45 minutos y deben cocinarse de inmediato tras descongelar."
        },
        {
          question: "¿La congelación ablanda las pechugas de pollo duras o leñosas?",
          answer: "No, congelar no ablanda el tejido muscular del pollo; los cristales de hielo rompen membranas celulares provocando exudación de jugo al descongelar, por lo que las pechugas congeladas pueden quedar más secas si se cocinan de más."
        }
      ],
      relatedItems: [
        "raw-chicken",
        "chicken-wings",
        "turkey-breast",
        "aluminum-foil"
      ],
      material: "Carne de Ave Cruda",
      keyRisk: "Contaminación por patógenos (Salmonella, E. coli)",
      tip: "Descongela las carnes crudas en el refrigerador por debajo de 40 °F (4 °C) y cocínalas a temperaturas internas seguras.",
      learnMore: "La pechuga de pollo cruda posee fibras musculares muy magras sin grasa intramuscular, lo que la hace altamente sensible a la sublimación del agua. Solo una cocción a 165 °F (74 °C) elimina patógenos."
    },
    {
      item: "Alitas de Pollo",
      appliance: "freezer",
      slug: "chicken-wings",
      safe: "yes",
      shortAnswer: "Sí, puedes congelar alitas de pollo de forma totalmente segura.",
      reason: "Congelar alitas de pollo a 0 °F (-18 °C) detiene por completo la actividad enzimática y el desarrollo microbiano, preservando el alimento indefinidamente. De acuerdo con el USDA, los alimentos congelados son seguros para comer indefinidamente.\n\nNo obstante, el contacto con el aire seco del congelador puede causar quemaduras por frío que dañan la piel y la carne, por lo que un empaque protector es esencial.",
      tips: [
        "Extrae todo el aire de las bolsas de congelación antes de sellarlas para prevenir quemaduras por frío.",
        "Apunta la fecha y el nombre del corte en el paquete antes de guardarlo en el congelador.",
        "Enfría los alimentos cocinados a temperatura ambiente o en refrigerador antes de congelar."
      ],
      warnings: [
        "Introducir alimentos calientes eleva la temperatura interna del congelador, arriesgando la multiplicación bacteriana en productos vecinos.",
        "No congeles alimentos en el envase delgado del supermercado, ya que no ofrece sellado hermético contra el aire frío."
      ],
      faqs: [
        {
          question: "¿Cuánto tiempo se pueden congelar alitas de pollo crudas conservando su piel crujiente al cocinarlas?",
          answer: "Las alitas de pollo crudas se conservan muy bien durante 6 a 9 meses a 0 °F (-18 °C); después de 9 meses, los cristales de hielo dañan las capas de la piel, dificultando lograr una textura ampollada y crujiente al freírlas o cocinarlas en freidora de aire."
        },
        {
          question: "¿Cuál es el mejor método para congelar alitas de pollo individuales sin que se peguen en bloque?",
          answer: "Coloca las alitas crudas en una sola capa sobre una bandeja para hornear con papel vegetal y congélalas de 2 a 3 horas hasta que estén duras como piedras; luego pásalas sueltas a una bolsa de congelador para sacar solo las porciones que vayas a usar."
        },
        {
          question: "¿Se pueden cocinar alitas de pollo en la freidora de aire o al horno directamente congeladas?",
          answer: "Sí, las alitas de pollo se pueden hornear o freír con aire directamente congeladas añadiendo de 5 a 10 minutos al tiempo habitual de cocción y comprobando que alcancen una temperatura interna mínima de 165 °F (74 °C) con termómetro."
        }
      ],
      relatedItems: [
        "chicken-breast",
        "raw-chicken",
        "baking-sheet",
        "aluminum-foil"
      ],
      material: "Carne de Ave Cruda",
      keyRisk: "Contaminación por patógenos (Salmonella, E. coli)",
      tip: "Descongela las carnes crudas en el refrigerador por debajo de 40 °F (4 °C) y cocínalas a temperaturas internas seguras.",
      learnMore: "Las alitas poseen una elevada proporción de piel y grasa subcutánea. Mantenerlas protegidas del aire frío evita que la piel se vuelva correosa tras el cocinado."
    },
    {
      item: "Pechuga de Pavo",
      appliance: "freezer",
      slug: "turkey-breast",
      safe: "yes",
      shortAnswer: "Sí, puedes congelar pechuga de pavo de forma totalmente segura.",
      reason: "Congelar pechuga de pavo a 0 °F (-18 °C) detiene por completo la acción enzimática y el crecimiento microbiano, conservando el alimento indefinidamente. Según las pautas del USDA, la comida congelada es segura para su consumo por tiempo indefinido.\n\nSin embargo, la pérdida de humedad provocada por el aire seco del congelador puede causar quemaduras por frío que estropean sabor y textura, haciendo esencial un envasado hermético.",
      tips: [
        "Extrae todo el aire de las bolsas para congelar antes de cerrarlas para impedir quemaduras por frío.",
        "Escribe la fecha y el tipo de corte en el paquete antes de congelarlo.",
        "Enfría las piezas cocinadas a temperatura ambiente o en el refrigerador antes de meterlas al congelador."
      ],
      warnings: [
        "Introducir carne caliente incrementa la temperatura interna del congelador, arriesgando la multiplicación bacteriana en alimentos vecinos.",
        "No congeles carne en el plástico fino del supermercado, ya que no proporciona aislamiento hermético frente al aire frío."
      ],
      faqs: [
        {
          question: "¿Cuánto tiempo se puede conservar una pechuga de pavo entera o deshuesada en el congelador?",
          answer: "Las pechugas de pavo crudas enteras o con hueso conservan su máxima calidad de consumo durante 9 a 12 meses a 0 °F (-18 °C); debido a su gran masa muscular, se recomienda encarecidamente el sellado al vacío para evitar la deshidratación superficial durante periodos largos."
        },
        {
          question: "¿Cuánto tiempo tarda en descongelarse una pechuga de pavo entera dentro del refrigerador?",
          answer: "Una pechuga de pavo congelada de 2 a 4 kg (4 a 8 libras) requiere entre 24 y 48 horas (aproximadamente 24 horas por cada 2 kg) para descongelarse por completo en un refrigerador a 38 °F (3 °C); nunca aceleres la descongelación con agua caliente, ya que genera picos bacterianos en la superficie."
        },
        {
          question: "¿Se pueden congelar pechugas de pavo comerciales preinyectadas con salmuera?",
          answer: "Sí, las pechugas de pavo comerciales con solución salina se congelan extraordinariamente bien porque el sodio y los fosfatos añadidos ayudan a retener el agua dentro de las fibras proteicas, reduciendo la pérdida de jugo y la sequedad al descongelar."
        }
      ],
      relatedItems: [
        "chicken-breast",
        "duck-breast",
        "deli-meat",
        "aluminum-foil"
      ],
      material: "Carne de Ave Cruda",
      keyRisk: "Contaminación por patógenos (Salmonella, E. coli)",
      tip: "Descongela las carnes crudas en el refrigerador por debajo de 40 °F (4 °C) y cocínalas a temperaturas internas seguras.",
      learnMore: "Las piezas grandes de pavo poseen un gran volumen muscular que tarda en congelarse. El sellado al vacío evita la deshidratación superficial durante periodos prolongados de almacenamiento."
    }
  ],
  pt: [
    {
      item: "Frango Cru",
      appliance: "freezer",
      slug: "raw-chicken",
      safe: "yes",
      shortAnswer: "Sim, o frango cru é totalmente seguro para congelar.",
      reason: "Este alimento congela excepcionalmente bem sem perder seu valor nutricional ou propriedades estruturais.\n\nO congelamento a 0 °F (-18 °C) paralisa a proliferação bacteriana e preserva o frescor do frango cru por meses. Apenas certifique-se de embalá-lo em recipientes ou sacos herméticos para evitar a queima de gelo.",
      tips: [
        "Use sacos reforçados próprios para freezer e retire todo o excesso de ar para evitar queimaduras de congelamento.",
        "Rotule a embalagem com a data e o nome do corte antes de levar ao freezer.",
        "Congele em porções individuais ou de uso único para descongelar apenas o necessário."
      ],
      warnings: [
        "A queima de gelo desidrata a superfície do frango, prejudicando textura e sabor, embora não comprometa a segurança alimentar.",
        "Não deixe as peças congeladas expostas diretamente ao ar seco do freezer."
      ],
      faqs: [
        {
          question: "Por quanto tempo o frango cru inteiro pode ficar congelado sem perder a qualidade?",
          answer: "Um frango cru inteiro preserva sabor e textura ideais por até 12 meses a 0 °F (-18 °C), enquanto cortes em pedaços mantêm qualidade de pico por 9 meses; embora aves congeladas continuem seguras indefinidamente, a oxidação de lipídios altera o aroma após esse período."
        },
        {
          question: "Qual é a forma mais segura de descongelar frango cru?",
          answer: "Descongele o frango cru lentamente na prateleira inferior da geladeira dentro de uma travessa para reter líquidos, calculando cerca de 24 horas para cada 2,3 kg (5 libras); nunca descongele frango na bancada, onde a superfície atinge a zona de perigo térmico de 4 °C a 60 °C promovendo proliferação de Salmonella."
        },
        {
          question: "Pode-se congelar o frango cru diretamente na bandeja de isopor do mercado?",
          answer: "A embalagem de mercado é permeável ao ar e retém bolsas de oxigênio que causam queima de gelo em 1 a 2 meses; para períodos longos, envolva a bandeja com papel-alumínio reforçado ou transfira os cortes para sacos herméticos vedados a vácuo."
        }
      ],
      relatedItems: [
        "chicken-breast",
        "chicken-wings",
        "cooked-chicken",
        "ziploc-bag"
      ],
      material: "Carne de Ave Crua",
      keyRisk: "Contaminação por patógenos (Salmonella, E. coli)",
      tip: "Descongele carnes cruas na geladeira abaixo de 4 °C (40 °F) e cozinhe até atingir temperaturas internas seguras.",
      learnMore: "A carne crua concentra umidade e nutrientes ideais para a multiplicação de bactérias. Apenas o cozimento térmico completo destrói esses microrganismos."
    },
    {
      item: "Frango Cozido",
      appliance: "freezer",
      slug: "cooked-chicken",
      safe: "yes",
      shortAnswer: "Sim, o frango cozido é totalmente seguro para congelar.",
      reason: "Este alimento congela excepcionalmente bem sem perder seu valor nutricional ou propriedades estruturais.\n\nO congelamento a 0 °F (-18 °C) paralisa o crescimento bacteriano e preserva o frescor do frango cozido por meses. Apenas certifique-se de armazená-lo em um recipiente hermético para evitar queimaduras de congelamento.",
      tips: [
        "Use potes herméticos ou sacos reforçados para freezer e retire todo o ar para evitar queima de gelo.",
        "Rotule a embalagem com a data de preparo e o prato antes de levar ao freezer.",
        "Congele em porções individuais práticas para descongelar apenas o necessário para a refeição."
      ],
      warnings: [
        "A queima de congelamento resseca as fibras, prejudicando textura e paladar, embora não afete a segurança biológica.",
        "Não deixe preparações congeladas em contato direto com o ar do congelador."
      ],
      faqs: [
        {
          question: "Por quanto tempo o frango cozido pode ficar no freezer sem perder sabor?",
          answer: "O frango cozido mantém qualidade ideal por 3 a 4 meses a 0 °F (-18 °C); após esse prazo, a oxidação de ácidos graxos poli-insaturados gera sabor requentado e rançoso perceptível ao reaquecer."
        },
        {
          question: "Dá para reaquecer frango cozido congelado direto sem descongelar antes?",
          answer: "Sim, frango desfiado ou em cubos já cozido pode ser adicionado diretamente em sopas, molhos e ensopados ferventes sem descongelar, desde que atinja temperatura interna de 74 °C (165 °F)."
        },
        {
          question: "Como evitar que o frango cozido fique seco e fibroso após o congelamento?",
          answer: "Congele o frango cozido submerso em um pouco de caldo, molho ou caldo do próprio cozimento em pote hermético; o líquido envolve as fibras magras, blindando-as contra o ar seco do congelador."
        }
      ],
      relatedItems: [
        "raw-chicken",
        "chicken-breast",
        "tupperware",
        "aluminum-foil"
      ],
      material: "Carne de Ave Cozida",
      keyRisk: "Contaminação por patógenos (Salmonella, E. coli)",
      tip: "Descongele carnes na geladeira abaixo de 4 °C (40 °F) e reaqueça até atingir temperaturas internas seguras.",
      learnMore: "A carne de frango cozida retém água e proteínas. Quando vedada hermeticamente no freezer, evita oxidação lipídica e reaquece com excelente maciez."
    },
    {
      item: "Peito de Frango",
      appliance: "freezer",
      slug: "chicken-breast",
      safe: "yes",
      shortAnswer: "Sim, você pode congelar peito de frango com total segurança.",
      reason: "Congelar peito de frango a 0 °F (-18 °C) interrompe toda atividade enzimática e proliferação microbiana, conservando o alimento indefinidamente. Segundo o USDA, itens congelados permanecem seguros para consumo por tempo ilimitado.\n\nNo entanto, a desidratação provocada pelo ar seco do freezer pode gerar queima de gelo, arruinando sabor e consistência, tornando essencial uma embalagem bem vedada.",
      tips: [
        "Retire todo o ar dos sacos plásticos herméticos antes de vedar para prevenir a queima de frio.",
        "Escreva a data e o tipo de corte no pacote antes de congelar.",
        "Deixe as porções cozidas esfriarem totalmente antes de colocá-las no freezer."
      ],
      warnings: [
        "Guardar alimentos quentes eleva a temperatura interna do freezer, provocando risco de multiplicação bacteriana em itens vizinhos.",
        "Não congele carne no invólucro plástico fino do supermercado, pois ele não veda a passagem do ar."
      ],
      faqs: [
        {
          question: "Por quanto tempo o peito de frango sem osso e sem pele se mantém fresco no congelador?",
          answer: "Peitos de frango sem osso preservam maciez e umidade ideais por 9 meses a 0 °F (-18 °C); por não possuírem quase nenhuma gordura entremeada, desidratam com facilidade no ar seco se não estiverem muito bem vedados."
        },
        {
          question: "Com que rapidez é possível descongelar peito de frango em água fria com segurança?",
          answer: "Submerja o pacote vedado em uma tigela com água fria da torneira, trocando a água a cada 30 minutos; filés individuais descongelam em 30 a 45 minutos e devem ser preparados imediatamente."
        },
        {
          question: "O congelamento ajuda a amaciar peito de frango fibroso ou rígido?",
          answer: "Não, congelar não amacia fibras musculares de aves; na verdade, os cristais de gelo rompem paredes celulares causando perda de líquidos no degelo, podendo deixar a carne ressecada se passar do ponto no cozimento."
        }
      ],
      relatedItems: [
        "raw-chicken",
        "chicken-wings",
        "turkey-breast",
        "aluminum-foil"
      ],
      material: "Carne de Ave Crua",
      keyRisk: "Contaminação por patógenos (Salmonella, E. coli)",
      tip: "Descongele carnes cruas na geladeira abaixo de 4 °C (40 °F) e cozinhe até atingir temperaturas internas seguras.",
      learnMore: "O peito de frango cru possui fibras muito magras sem gordura entremeada, sendo muito suscetível à desidratação por sublimação. O cozimento a 74 °C (165 °F) é necessário para erradicar patógenos."
    },
    {
      item: "Asas de Frango",
      appliance: "freezer",
      slug: "chicken-wings",
      safe: "yes",
      shortAnswer: "Sim, você pode congelar asas de frango com total segurança.",
      reason: "Congelar asas de frango a 0 °F (-18 °C) paralisa totalmente a atividade enzimática e a proliferação bacteriana, conservando o alimento por tempo indeterminado. Conforme o USDA, produtos mantidos congelados são seguros para consumo indefinidamente.\n\nPorém, a perda de umidade para o ar seco pode provocar queimaduras de gelo que prejudicam a pele e a carne, sendo indispensável uma embalagem protetora.",
      tips: [
        "Retire todo o ar dos sacos de freezer antes de lacrar para evitar queimaduras de congelamento.",
        "Anote a data e a identificação do corte na embalagem antes de levar ao freezer.",
        "Espere cortes cozidos esfriarem na geladeira antes de transferi-los para o freezer."
      ],
      warnings: [
        "Colocar comida quente eleva a temperatura interna do congelador, criando risco de multiplicação de microrganismos em itens próximos.",
        "Não congele carne no plástico fino de supermercado, pois ele não veda a passagem do ar seco."
      ],
      faqs: [
        {
          question: "Por quanto tempo asas de frango cruas podem ser congeladas mantendo a pele crocante depois de prontas?",
          answer: "Asas de frango cruas conservam-se bem por 6 a 9 meses a 0 °F (-18 °C); após 9 meses, a cristalização do gelo altera a estrutura da pele, dificultando deixá-la bem dourada e crocante na frigideira ou na air fryer."
        },
        {
          question: "Qual é a melhor forma de congelar asas de frango para que não grudem em um bloco sólido?",
          answer: "Distribua as asas cruas em uma assadeira forrada com papel-manteiga e congele por 2 a 3 horas até endurecerem por completo; depois transfira para sacos plásticos para retirar porções avulsas facilmente."
        },
        {
          question: "Dá para assar ou fazer asas de frango na air fryer diretamente congeladas?",
          answer: "Sim, asas de frango podem ir direto do freezer para o forno ou air fryer; basta adicionar de 5 a 10 minutos ao tempo regular e conferir se a temperatura interna atinge no mínimo 74 °C (165 °F)."
        }
      ],
      relatedItems: [
        "chicken-breast",
        "raw-chicken",
        "baking-sheet",
        "aluminum-foil"
      ],
      material: "Carne de Ave Crua",
      keyRisk: "Contaminação por patógenos (Salmonella, E. coli)",
      tip: "Descongele carnes cruas na geladeira abaixo de 4 °C (40 °F) e cozinhe até atingir temperaturas internas seguras.",
      learnMore: "As asas têm alta proporção de pele e gordura subcutânea. Proteger a superfície do ar do freezer evita que a pele perca crocância após o preparo."
    },
    {
      item: "Peito de Peru",
      appliance: "freezer",
      slug: "turkey-breast",
      safe: "yes",
      shortAnswer: "Sim, você pode congelar peito de peru com total segurança.",
      reason: "Congelar peito de peru a 0 °F (-18 °C) interrompe a atividade enzimática e a proliferação microbiana, preservando a carne por tempo indefinido. De acordo com o USDA, carnes mantidas congeladas permanecem seguras indefinidamente.\n\nContudo, a dessecação provocada pelo ar seco do freezer pode gerar queima de frio que arruína a textura, sendo indispensável uma embalagem reforçada e vedada.",
      tips: [
        "Retire todo o ar dos sacos de congelamento antes de fechar para impedir queimaduras de frio.",
        "Escreva a data e o peso do corte na embalagem antes de colocar no freezer.",
        "Resfrie carnes cozidas na geladeira antes de levá-las ao congelador."
      ],
      warnings: [
        "Armazenar peças quentes eleva a temperatura interna do congelador, arriscando multiplicação bacteriana em alimentos contíguos.",
        "Não congele peças na embalagem frágil do mercado, pois ela não impede a passagem de ar seco."
      ],
      faqs: [
        {
          question: "Por quanto tempo um peito de peru inteiro ou desossado pode ficar no congelador?",
          answer: "Peitos de peru crus inteiros ou com osso mantêm ótima qualidade por 9 a 12 meses a 0 °F (-18 °C); por conta do volume da peça, embalar a vácuo é altamente recomendado para evitar ressecamento superficial ao longo dos meses."
        },
        {
          question: "Quanto tempo um peito de peru inteiro congelado leva para descongelar com segurança na geladeira?",
          answer: "Um peito de peru de 2 a 4 kg (4 a 8 libras) leva de 24 a 48 horas (cerca de 24 horas para cada 2 kg) para descongelar totalmente em geladeira a 3 °C (38 °F); nunca acelere o processo com água morna, pois isso causa proliferação de bactérias na superfície."
        },
        {
          question: "Peitos de peru temperados ou injetados com salmoura de fábrica congelam bem?",
          answer: "Sim, peitos de peru que vêm marinados com salmoura e fosfatos congelam perfeitamente, pois os sais ajudam a reter água nas fibras musculares, reduzindo a perda de líquidos e o ressecamento após o degelo."
        }
      ],
      relatedItems: [
        "chicken-breast",
        "duck-breast",
        "deli-meat",
        "aluminum-foil"
      ],
      material: "Carne de Ave Crua",
      keyRisk: "Contaminação por patógenos (Salmonella, E. coli)",
      tip: "Descongele carnes cruas na geladeira abaixo de 4 °C (40 °F) e cozinhe até atingir temperaturas internas seguras.",
      learnMore: "Grandes peças de peito de peru têm volume muscular denso que exige congelamento rápido. A selagem a vácuo impede a queima de frio em períodos longos de conservação."
    }
  ]
};

fs.writeFileSync('scratch/cat4_batch1_translations.json', JSON.stringify(batch1, null, 2) + '\n', 'utf8');
console.log('Saved scratch/cat4_batch1_translations.json successfully.');
