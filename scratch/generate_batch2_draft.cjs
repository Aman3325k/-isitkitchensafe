const fs = require('fs');

const batch2Translations = {
  es: [
    {
      item: "Zanahoria",
      appliance: "freezer",
      slug: "carrot",
      safe: "yes",
      shortAnswer: "Sí, puedes congelar zanahorias de forma segura.",
      reason: "Congelar zanahorias a 0 °F (-18 °C) detiene la actividad enzimática y la proliferación microbiana, conservando el alimento por tiempo indefinido. Sin embargo, la deshidratación causada por el aire frío del congelador puede provocar quemaduras por congelación que alteran el sabor y la textura, por lo que es esencial un envasado hermético.",
      tips: [
        "Extrae todo el aire de las bolsas para congelar antes de sellarlas para prevenir quemaduras por frío.",
        "Anota la fecha y el nombre del alimento en el recipiente antes de guardarlo en el congelador.",
        "Deja enfriar los alimentos cocidos a temperatura ambiente o refrigéralos antes de introducirlos al congelador."
      ],
      warnings: [
        "Introducir alimentos calientes eleva la temperatura interna del congelador, arriesgando la proliferación bacteriana en alimentos vecinos.",
        "No congeles alimentos en el empaque delgado del supermercado, ya que no es hermético."
      ],
      faqs: [
        {
          question: "¿Se pueden congelar zanahorias crudas enteras?",
          answer: "No se recomienda congelar zanahorias crudas enteras porque la expansión del hielo fractura su densa matriz de pectina, dejándolas gomosas y esponjosas al descongelarse; cortarlas en rodajas y blanquearlas produce una textura muy superior."
        },
        {
          question: "¿Cuánto tiempo se deben blanquear las rodajas o bastones de zanahoria antes de congelar?",
          answer: "Blanquea las zanahorias cortadas en agua hirviendo durante 2 a 3 minutos y sumérgelas de inmediato en agua con hielo por el mismo tiempo para frenar la cocción residual y proteger sus carotenoides y dulzor."
        },
        {
          question: "¿Se pueden usar zanahorias congeladas en ensaladas frescas?",
          answer: "No, las zanahorias congeladas pierden de forma permanente su turgencia celular y su firmeza crujiente; resérvalas para cocinarlas en sopas, guisados, asados de olla y salteados."
        }
      ],
      relatedItems: [
        "celery",
        "onion",
        "peas",
        "green-beans"
      ],
      material: "Verdura Fresca",
      keyRisk: "Colapso de estructura celular y pérdida de humedad",
      tip: "Almacena las verduras enteras en cajones frescos y húmedos; lava justo antes de consumir o preparar.",
      learnMore: "Congelar vegetales cristaliza el agua interna, rompiendo las paredes celulares. Al descongelar o calentar, esto genera una textura blanda idónea para preparaciones cocinadas."
    },
    {
      item: "Apio",
      appliance: "freezer",
      slug: "celery",
      safe: "depends",
      shortAnswer: "Depende. El apio pierde su textura crujiente al descongelarse y no sirve para ensaladas crudas ni crudités, pero el apio picado congelado es excelente para sopas cocidas, guisos y sofritos o mirepoix.",
      reason: "El apio está compuesto aproximadamente por un 95 % de agua contenida en estructuras celulares rígidas y fibrosas. La congelación cristaliza esta humedad interna, perforando irreversiblemente las paredes celulares, por lo que el apio descongelado queda blando y mustio. Sin embargo, congelarlo conserva sus aceites aromáticos, sabor terroso y nutrientes, haciéndolo seguro y muy práctico para bases culinarias, rellenos, caldos y salsas.",
      tips: [
        "Lava, seca y pica el apio en cubos pequeños o rodajas antes de congelarlo para tenerlo listo para tus recetas.",
        "Congela previamente el apio picado en una bandeja para hornear durante 1 hora para que los trozos queden sueltos en la bolsa de almacenamiento.",
        "Echa el apio congelado directamente al aceite caliente o al caldo hirviendo sin descongelar para evitar acumulaciones de agua."
      ],
      warnings: [
        "No intentes utilizar apio descongelado para bandejas de verduras crudas, salsas de untar o ensaladas crujientes.",
        "El apio crudo sin blanquear debe consumirse dentro de los 2 meses, ya que las enzimas activas degradan progresivamente su aroma y color."
      ],
      faqs: [
        {
          question: "¿Se puede comer crudo el apio descongelado?",
          answer: "No, el apio descongelado queda blando y acuoso porque los cristales de hielo rompen su estructura celular, eliminando por completo su característico crujido fresco."
        },
        {
          question: "¿Es necesario blanquear el apio antes de congelarlo?",
          answer: "El blanqueado es opcional si se va a usar en un plazo de 2 meses para sopas, pero blanquear el apio picado durante 3 minutos conserva su sabor y textura hasta por 10 meses."
        },
        {
          question: "¿Se pueden congelar las hojas de apio?",
          answer: "Sí, las hojas de apio se congelan excepcionalmente bien y concentran un intenso sabor herbal para caldos, fondos y mezclas aromáticas de sazón."
        }
      ],
      relatedItems: [
        "carrot",
        "onion",
        "garlic",
        "bell-pepper"
      ],
      material: "Verdura Fresca",
      keyRisk: "Pérdida de turgencia y textura blanda para consumo fresco",
      tip: "Pica el apio y congélalo en porciones individuales para agregarlo directamente a sartenes calientes en sofritos o bases de sopa.",
      learnMore: "Los tallos de apio dependen de la presión hidrostática de turgencia en las células del parénquima para mantener su textura crocante. La congelación bajo cero rompe estas membranas, ablandando los tallos de manera permanente."
    },
    {
      item: "Maíz",
      appliance: "freezer",
      slug: "corn",
      safe: "yes",
      shortAnswer: "Sí, puedes congelar maíz de forma segura.",
      reason: "Congelar maíz a 0 °F (-18 °C) detiene la actividad enzimática y la proliferación microbiana, conservando el alimento por tiempo indefinido. No obstante, la pérdida de humedad por el aire seco del congelador puede provocar quemaduras por frío que alteran el sabor y la textura, por lo que un envasado hermético es imprescindible.",
      tips: [
        "Extrae todo el aire posible de las bolsas para congelar antes de cerrarlas para evitar quemaduras por frío.",
        "Escribe la fecha y el nombre del alimento en el recipiente antes de llevarlo al congelador.",
        "Deja enfriar los alimentos cocinados a temperatura ambiente o en el refrigerador antes de congelarlos."
      ],
      warnings: [
        "Introducir alimentos calientes al congelador eleva la temperatura interna, creando riesgo bacteriano en productos cercanos.",
        "No congeles alimentos en el empaque delgado de la tienda, ya que no ofrece sellado hermético contra el aire seco."
      ],
      faqs: [
        {
          question: "¿Cómo evitar que el maíz dulce se vuelva harinoso en el congelador?",
          answer: "Blanquea las mazorcas enteras en agua hirviendo durante 7 a 11 minutos (o 4 minutos si vas a desgranarlas después) para desactivar las enzimas invertasas que convierten rápidamente la sacarosa dulce en almidones insípidos."
        },
        {
          question: "¿Es mejor congelar el maíz en mazorca o desgranado?",
          answer: "El maíz desgranado se congela mucho mejor y ahorra espacio; congelar la mazorca entera a menudo empapa el corazón fibroso, lo que transmite un sabor leñoso y rancio a los granos durante un almacenamiento prolongado."
        },
        {
          question: "¿Es necesario descongelar los granos de maíz antes de cocinarlos?",
          answer: "No, añade los granos de maíz congelados directamente a sartenes con mantequilla caliente, cremas o guisos hirviendo; su pequeña masa térmica permite que se cocinen perfectamente en solo 2 a 3 minutos."
        }
      ],
      relatedItems: [
        "peas",
        "green-beans",
        "bell-pepper",
        "baking-sheet"
      ],
      material: "Verdura Fresca",
      keyRisk: "Colapso de estructura celular y pérdida de humedad",
      tip: "Almacena las verduras enteras en cajones frescos y húmedos; lava justo antes de consumir o preparar.",
      learnMore: "Congelar vegetales cristaliza el agua interna, rompiendo las paredes celulares. Al descongelar o cocinar, este cambio estructural requiere cocciones directas a alta temperatura."
    },
    {
      item: "Pepino",
      appliance: "freezer",
      slug: "cucumber",
      safe: "depends",
      shortAnswer: "Depende. Los pepinos crudos enteros o en rodajas se convierten en una masa blanda y aguada al descongelarse, pero los encurtidos en salmuera para congelar se conservan bien.",
      reason: "Los pepinos están compuestos por aproximadamente un 96 % de agua contenida en delicadas paredes celulares vegetales. La congelación expande esta agua en afilados cristales de hielo que perforan y rompen la matriz celular. Al descongelarse, la integridad estructural colapsa por completo, transformando el pepino crujiente en una pulpa blanda, traslúcida y acuosa que no sirve para ensaladas frescas. Sin embargo, los pepinos cortados y macerados en una salmuera de vinagre, azúcar y sal (encurtidos de congelador) retienen una textura crujiente agradable.",
      tips: [
        "Prepara los pepinos como encurtidos de congelador en rodajas dentro de una salmuera de vinagre, sal y azúcar para conservar su textura crujiente.",
        "Tritura los pepinos en puré antes de congelarlos en cubiteras para usarlos en gazpachos, batidos o sopas frías de verano.",
        "Descongela lentamente el puré de pepino en el refrigerador justo antes de batir o servir."
      ],
      warnings: [
        "Nunca congeles pepinos crudos enteros para ensaladas frescas o bandejas de verduras; al descongelarse se convierten en una pasta aguada incomestible.",
        "Las quemaduras por congelación aparecen rápidamente en la pulpa expuesta del pepino; sumérgelo por completo en salmuera o envuélvelo muy bien sin bolsas de aire."
      ],
      faqs: [
        {
          question: "¿Se puede comer pepino crudo descongelado en una ensalada?",
          answer: "No, los pepinos crudos descongelados pierden toda su firmeza crujiente y se convierten en una masa acuosa y flácida que arruina las ensaladas frescas."
        },
        {
          question: "¿Qué son los encurtidos de congelador y se mantienen crujientes?",
          answer: "Los encurtidos de congelador son rodajas de pepino curadas en salmuera de sal, azúcar y vinagre; la salmuera extrae el exceso de humedad, permitiendo que sigan agradablemente crujientes al congelarse."
        },
        {
          question: "¿Se puede congelar puré de pepino para bebidas y sopas?",
          answer: "Sí, licuar pepino crudo en puré y congelarlo en bandejas de silicona funciona de maravilla para batidos, sopas frías y bases de coctelería."
        }
      ],
      relatedItems: [
        "zucchini",
        "tomato",
        "bell-pepper",
        "lettuce"
      ],
      material: "Verdura Fresca (Alta Humedad)",
      keyRisk: "Ruptura celular y colapso acuoso",
      tip: "Congela los pepinos únicamente en salmuera como encurtidos o triturados en puré, nunca en rodajas crudas para ensalada.",
      learnMore: "Los pepinos contienen un 96 % de agua. La formación de cristales de hielo rompe las paredes celulares vegetales, provocando la pérdida total de la presión de turgencia y destruyendo su textura crujiente al descongelarse."
    },
    {
      item: "Berenjena",
      appliance: "freezer",
      slug: "eggplant",
      safe: "yes",
      shortAnswer: "Sí, puedes congelar berenjenas de forma segura.",
      reason: "Congelar berenjenas a 0 °F (-18 °C) detiene la actividad enzimática y la proliferación microbiana, conservando el alimento de manera segura. Sin embargo, la pérdida de humedad por el aire frío del congelador puede causar quemaduras por frío que alteran el sabor y la textura, por lo que un envasado hermético adecuado es esencial.",
      tips: [
        "Extrae todo el aire de las bolsas para congelar antes de sellarlas para prevenir quemaduras por frío.",
        "Escribe la fecha y el nombre del alimento en el envase antes de llevarlo al congelador.",
        "Enfría los alimentos cocinados a temperatura ambiente o en el refrigerador antes de congelarlos."
      ],
      warnings: [
        "Introducir alimentos calientes eleva la temperatura interna del congelador, arriesgando la proliferación bacteriana en alimentos vecinos.",
        "No congeles alimentos en el empaque delgado del supermercado, ya que no ofrece sellado hermético contra el aire frío."
      ],
      faqs: [
        {
          question: "¿Por qué no se debe congelar la berenjena cruda?",
          answer: "La berenjena cruda actúa como una esponja llena de aire; al congelarse colapsan sus delicadas células y se desencadena un pardeamiento enzimático rápido por polifenol oxidasas, dejando la pulpa negra, viscosa y amarga al descongelarse."
        },
        {
          question: "¿Cuál es el mejor método para preparar berenjena antes de congelar?",
          answer: "Blanquea al vapor las rodajas durante 3 a 4 minutos en agua con una cucharada de jugo de limón para evitar la oxidación, o asa la berenjena en cubos hasta que quede caramelizada y tierna antes de congelar en recipientes herméticos."
        },
        {
          question: "¿Se pueden usar rodajas de berenjena congeladas para berenjena a la parmesana?",
          answer: "Sí, empana y hornea previamente las rodajas en una bandeja antes de congelarlas; hornéalas directamente congeladas con salsa marinara y queso sin descongelar para evitar que el guiso quede aguado."
        }
      ],
      relatedItems: [
        "zucchini",
        "bell-pepper",
        "tomato",
        "yellow-squash"
      ],
      material: "Verdura Fresca",
      keyRisk: "Pardeamiento enzimático y esponjosidad acuosa",
      tip: "Blanquea al vapor las rodajas de berenjena o ásalas bien antes de congelar, añadiendo un chorrito de jugo de limón para evitar que la pulpa se decolore.",
      learnMore: "La pulpa de berenjena cruda tiene una estructura celular esponjosa cargada de polifenol oxidasa. Congelarla cruda provoca un pardeamiento intenso y textura gomosa; precocinarla o blanquearla al vapor desactiva las enzimas y estabiliza la textura."
    }
  ],
  pt: [
    {
      item: "Cenoura",
      appliance: "freezer",
      slug: "carrot",
      safe: "yes",
      shortAnswer: "Sim, você pode congelar cenouras com total segurança.",
      reason: "Congelar cenouras a 0 °F (-18 °C) paralisa toda atividade enzimática e proliferação microbiana, conservando o alimento indefinidamente. No entanto, a perda de umidade para o ar seco do congelador pode causar queima de gelo, prejudicando sabor e textura, sendo indispensável uma embalagem bem vedada.",
      tips: [
        "Retire todo o ar dos sacos de freezer antes de fechar para evitar a queima de congelamento.",
        "Anote o nome do alimento e a data no recipiente antes de guardá-lo no freezer.",
        "Espere os alimentos cozidos esfriarem à temperatura ambiente ou na geladeira antes de levá-los ao freezer."
      ],
      warnings: [
        "Colocar alimentos quentes eleva a temperatura interna do freezer, provocando risco de multiplicação bacteriana em itens ao redor.",
        "Não congele alimentos na embalagem plástica fina do supermercado, pois ela não impede a passagem de ar seco."
      ],
      faqs: [
        {
          question: "Pode-se congelar cenouras cruas e inteiras?",
          answer: "Não é recomendado congelar cenouras cruas inteiras porque a expansão dos cristais de gelo rompe a matriz de pectina, deixando-as borrachudas e esponjosas após o descongelamento; fatiar e branquear garante textura muito superior."
        },
        {
          question: "Por quanto tempo fatias ou rodelas de cenoura devem ser branqueadas?",
          answer: "Branqueie as cenouras fatiadas ou em cubos em água fervente por 2 a 3 minutos e dê um choque térmico em água gelada pelo mesmo período para interromper o cozimento e preservar o dulçor e os carotenoides."
        },
        {
          question: "Cenouras descongeladas podem ser servidas em saladas cruas?",
          answer: "Não, as cenouras descongeladas perdem para sempre a turgidez celular e a crocância característica; utilize-as diretamente em sopas, cozidos, ensopados e refogados."
        }
      ],
      relatedItems: [
        "celery",
        "onion",
        "peas",
        "green-beans"
      ],
      material: "Vegetal Fresco",
      keyRisk: "Rompimento da estrutura celular e perda de umidade",
      tip: "Armazene os vegetais inteiros na gaveta de legumes refrigerada; lave apenas na hora do consumo ou preparo.",
      learnMore: "O congelamento cristaliza a água nos tecidos vegetais, rompendo paredes celulares. Ao descongelar ou cozinhar, isso gera uma consistência mais macia, ideal para receitas quentes."
    },
    {
      item: "Aipo",
      appliance: "freezer",
      slug: "celery",
      safe: "depends",
      shortAnswer: "Depende. O aipo perde a crocância ao descongelar e não serve para saladas cruas nem crudités, mas o aipo picado congelado é excelente para sopas cozidas, ensopados e mirepoix.",
      reason: "O aipo é composto por cerca de 95% de água envolvida em estruturas celulares rígidas e fibrosas. O congelamento cristaliza essa umidade interna, rompendo irremediavelmente as paredes celulares, fazendo com que o aipo descongelado fique flácido e mole. Contudo, congelá-lo preserva óleos aromáticos, sabor marcante e nutrientes, tornando-o seguro e muito prático para bases de refogados, recheios, caldos e molhos.",
      tips: [
        "Lave, seque e pique o aipo em cubinhos ou fatias antes de congelar para tê-lo pronto para suas receitas.",
        "Congele o aipo picado espalhado numa assadeira por 1 hora para que os pedaços fiquem soltos no saco de armazenamento.",
        "Coloque o aipo congelado direto no azeite quente ou no caldo fervente sem descongelar para evitar acúmulo de líquido."
      ],
      warnings: [
        "Não tente usar aipo descongelado para petiscos crus, pastas ou saladas frescas crocantes.",
        "O aipo congelado cru sem branqueamento deve ser consumido em até 2 meses, pois enzimas ativas deterioram aos poucos seu aroma e sua cor."
      ],
      faqs: [
        {
          question: "Pode-se comer aipo descongelado cru?",
          answer: "Não, o aipo descongelado fica mole e encharcado porque os cristais de gelo rompem sua estrutura celular, acabando totalmente com a mordida crocante."
        },
        {
          question: "É preciso branquear o aipo antes de congelar?",
          answer: "O branqueamento é opcional se o uso for em até 2 meses para sopas, mas branquear o aipo picado por 3 minutos preserva sabor e consistência por até 10 meses."
        },
        {
          question: "Pode-se congelar as folhas do aipo?",
          answer: "Sim, as folhas de aipo congelam extraordinariamente bem e concentram sabor aromático marcante para caldos, fundos e temperos."
        }
      ],
      relatedItems: [
        "carrot",
        "onion",
        "garlic",
        "bell-pepper"
      ],
      material: "Vegetal Fresco",
      keyRisk: "Perda de turgidez e textura mole para consumo fresco",
      tip: "Pique o aipo e congele em porções individuais para despejar diretamente na panela quente para refogados ou bases de sopa.",
      learnMore: "Os talos de aipo dependem da pressão hidrostática de turgor nas células parenquimáticas para manter sua crocância. O congelamento rompe essas membranas, amolecendo os talos de forma irreversível."
    },
    {
      item: "Milho",
      appliance: "freezer",
      slug: "corn",
      safe: "yes",
      shortAnswer: "Sim, você pode congelar milho com total segurança.",
      reason: "Congelar milho a 0 °F (-18 °C) suspende toda atividade enzimática e proliferação microbiana, preservando o alimento por tempo indefinido. Contudo, o ar seco do congelador pode desidratar o produto causando queima de gelo, o que arruína sabor e textura, tornando o uso de embalagens herméticas indispensável.",
      tips: [
        "Retire todo o ar dos sacos de congelamento antes de fechar para impedir queimaduras de gelo.",
        "Rotule o recipiente com o nome do alimento e a data antes de guardá-lo no freezer.",
        "Deixe preparos cozidos quentes atingirem a temperatura ambiente ou esfriarem na geladeira antes de levá-los ao freezer."
      ],
      warnings: [
        "Colocar alimentos quentes eleva a temperatura interna do congelador, gerando perigo de proliferação bacteriana em itens vizinhos.",
        "Não congele alimentos na embalagem plástica fina do mercado, pois ela não impede a passagem de ar seco."
      ],
      faqs: [
        {
          question: "Como evitar que o milho-verde fique farinhento no congelador?",
          answer: "Branqueie as espigas inteiras em água fervente por 7 a 11 minutos (ou 4 minutos antes de debulhar) para inativar enzimas invertases que transformam a sacarose doce em amido insosso."
        },
        {
          question: "É melhor congelar o milho na espiga ou debulhado em grãos?",
          answer: "Os grãos debulhados congelam muito melhor e poupam espaço no freezer; congelar a espiga inteira com frequência encharca o sabugo interno, transmitindo gosto amadeirado aos grãos no armazenamento prolongado."
        },
        {
          question: "É preciso descongelar os grãos de milho antes de cozinhar?",
          answer: "Não, adicione os grãos de milho congelados diretamente a frigideiras quentes com manteiga, caldos ou sopas; por terem massa térmica pequena, eles cozinham por completo em apenas 2 a 3 minutos."
        }
      ],
      relatedItems: [
        "peas",
        "green-beans",
        "bell-pepper",
        "baking-sheet"
      ],
      material: "Vegetal Fresco",
      keyRisk: "Rompimento da estrutura celular e perda de umidade",
      tip: "Mantenha os vegetais inteiros na gaveta de legumes refrigerada; lave somente na hora do consumo ou preparo.",
      learnMore: "O congelamento cristaliza a água nos tecidos vegetais, enfraquecendo as paredes celulares. O cozimento direto em alta temperatura assegura melhor sabor e textura."
    },
    {
      item: "Pepino",
      appliance: "freezer",
      slug: "cucumber",
      safe: "depends",
      shortAnswer: "Depende. Pepinos crus inteiros ou fatiados viram uma papa empapada e mole ao descongelar, mas picles de freezer em salmoura congelam perfeitamente.",
      reason: "Os pepinos são compostos por cerca de 96% de água envolvida em paredes celulares finas e rígidas. O congelamento expande essa água em pontiagudos cristais de gelo que perfuram e rompem a matriz celular. Ao descongelar, a estrutura vegetal colapsa por completo, transformando o pepino crocante numa pasta mole, translúcida e encharcada, imprópria para saladas frescas. Porém, fatias de pepino em conserva de vinagre, açúcar e sal (picles de freezer) mantêm uma textura crocante muito agradável.",
      tips: [
        "Prepare os pepinos em conserva de freezer fatiados em salmoura de vinagre, sal e açúcar para preservar a crocância.",
        "Bata os pepinos em purê antes de congelar em fôrmas de gelo para utilizar em gaspacho, sucos, vitaminas ou sopas frias.",
        "Descongele o purê de pepino lentamente na geladeira antes de bater ou misturar nas receitas."
      ],
      warnings: [
        "Nunca congele pepinos crus inteiros destinados a saladas de folhas ou pratos de legumes crus; ao descongelar eles viram uma gosma aquosa.",
        "A queima de freezer atinge rapidamente a polpa exposta do pepino; mantenha-o sempre submerso em salmoura ou embrulhado a vácuo sem bolhas de ar."
      ],
      faqs: [
        {
          question: "É possível comer pepino cru descongelado em saladas?",
          answer: "Não, pepinos crus descongelados perdem toda a crocância e viram uma polpa aguada e murcha que arruina qualquer salada fresca."
        },
        {
          question: "O que são picles de freezer e eles continuam crocantes?",
          answer: "Picles de freezer são fatias de pepino curadas em salmoura de vinagre, sal e açúcar; o líquido drena o excesso de água, permitindo que fiquem deliciosamente crocantes mesmo congelados."
        },
        {
          question: "Pode-se congelar purê de pepino para bebidas e sopas?",
          answer: "Sim, bater pepino fresco em purê e congelar em fôrmas de silicone funciona perfeitamente para vitaminas, sopas frias e drinques refrescantes."
        }
      ],
      relatedItems: [
        "zucchini",
        "tomato",
        "bell-pepper",
        "lettuce"
      ],
      material: "Vegetal Fresco (Alta Umidade)",
      keyRisk: "Ruptura celular e colapso aquoso",
      tip: "Congele pepinos apenas como picles em salmoura ou batidos em purê, nunca em fatias cruas para salada.",
      learnMore: "Os pepinos são 96% água. A formação de cristais de gelo rompe as paredes das células vegetais, causando perda total de turgor celular e destruindo por completo a crocância no descongelamento."
    },
    {
      item: "Beringela",
      appliance: "freezer",
      slug: "eggplant",
      safe: "yes",
      shortAnswer: "Sim, você pode congelar beringela com total segurança.",
      reason: "Congelar beringela a 0 °F (-18 °C) paralisa toda atividade enzimática e proliferação bacteriana, conservando o alimento com segurança. Entretanto, a desidratação provocada pelo ar seco do congelador pode causar queima de gelo, prejudicando o sabor e a textura, tornando indispensável o uso de embalagens herméticas.",
      tips: [
        "Retire todo o ar dos sacos de freezer antes de vedar para evitar queimaduras por congelamento.",
        "Anote o nome do vegetal e a data na embalagem antes de colocá-la no freezer.",
        "Deixe as porções cozidas atingirem a temperatura ambiente ou esfriarem na geladeira antes de congelar."
      ],
      warnings: [
        "Colocar preparos quentes eleva a temperatura interna do congelador, criando risco de multiplicação microbiana em itens vizinhos.",
        "Não congele em embalagens plásticas finas de mercado, pois elas não vedam o ar seco do congelador."
      ],
      faqs: [
        {
          question: "Por que não se deve congelar beringela crua?",
          answer: "A beringela crua age como uma esponja cheia de ar; o congelamento colapsa seus tecidos celulares e ativa o escurecimento enzimático acelerado pela polifenol oxidase, deixando a polpa escura, viscosa e amarga."
        },
        {
          question: "Qual é a melhor forma de preparar a beringela para o congelamento?",
          answer: "Cozinhe as fatias no vapor por 3 a 4 minutos em água com uma colher de suco de limão para evitar oxidação, ou asse em cubos até caramelizar antes de guardar em potes herméticos."
        },
        {
          question: "Fatias de beringela congeladas podem ser usadas para berinjela à parmegiana?",
          answer: "Sim, empane e pré-asse as fatias em assadeira antes de congelar; leve ao forno direto do freezer cobertas com molho e queijo, sem descongelar antes, para não ensopar a travessa."
        }
      ],
      relatedItems: [
        "zucchini",
        "bell-pepper",
        "tomato",
        "yellow-squash"
      ],
      material: "Vegetal Fresco",
      keyRisk: "Escurecimento enzimático e encharcamento esponjoso",
      tip: "Cozinhe as fatias de beringela no vapor ou asse-as bem antes de congelar, pingando um pouco de suco de limão para impedir o escurecimento.",
      learnMore: "A polpa da beringela crua tem textura esponjosa repleta de polifenol oxidase. Congelá-la crua causa escurecimento severo e textura elástica; pré-cozinhar ou branquear no vapor inativa as enzimas e preserva a textura."
    }
  ]
};

fs.writeFileSync('scratch/cat3_batch2_translations.json', JSON.stringify(batch2Translations, null, 2), 'utf8');
console.log('Saved scratch/cat3_batch2_translations.json successfully.');
