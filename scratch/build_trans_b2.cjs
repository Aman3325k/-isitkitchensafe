const fs = require('fs');

const itemsEn = JSON.parse(fs.readFileSync('src/data/items.json', 'utf8'));
const freezerItems = itemsEn.filter(i => i.appliance === 'freezer');
const freezerSlugs = new Set(freezerItems.map(i => i.slug));

const batch2Translations = {
  cantaloupe: {
    es: {
      item: "Melón Cantalupo",
      appliance: "freezer",
      slug: "cantaloupe",
      safe: "yes",
      shortAnswer: "Sí, el melón cantalupo se puede congelar de forma segura, especialmente sin semillas y cortado en dados.",
      reason: "Congelar melón cantalupo a 0 °F (-18 °C) frena la proliferación microbiana y conserva su sabor dulce hasta por 9 meses. Como contiene cerca de un 90% de agua, los cristales de hielo dilatan y rompen las membranas celulares, haciendo que el melón descongelado quede blando y suelte líquido. Aunque no sirve para macedonias crujientes, es fantástico triturado directamente en batidos, sorbetes, sopas frías o cócteles.",
      tips: [
        "Pela, retira las semillas y corta el cantalupo en dados o bolitas antes de congelar.",
        "Congela los dados en una sola capa sobre una bandeja con papel vegetal durante 2 horas antes de guardarlos en bolsas herméticas.",
        "Tritura los trozos de melón congelados directamente sin descongelar para lograr batidos densos y sorbetes helados."
      ],
      warnings: [
        "Nunca congeles melones cantalupo enteros con cáscara; la expansión del agua interior puede agrietar la fruta y retener bacterias de la corteza rugosa.",
        "El cantalupo descongelado queda blando y acuoso; no esperes que conserve la textura crujiente del melón fresco."
      ],
      faqs: [
        {
          question: "¿Cómo congelar melón cantalupo para que no se pegue en un bloque?",
          answer: "Extiende los dados de melón en una sola capa sobre una bandeja forrada con papel vegetal y congélalos 2 horas hasta que estén firmes antes de embolsarlos."
        },
        {
          question: "¿Se puede comer el melón cantalupo descongelado crudo?",
          answer: "Sí, es completamente seguro, pero su textura será blanda y acuosa; se disfruta mucho más semicongelado o batido en bebidas."
        },
        {
          question: "¿Cuánto tiempo dura el cantalupo congelado en el congelador?",
          answer: "En bolsas herméticas para congelador expulsando todo el aire, el melón cantalupo conserva su sabor y calidad óptimos de 9 a 12 meses a 0 °F (-18 °C)."
        }
      ],
      relatedItems: ["watermelon", "honeydew", "pineapple", "smoothies"],
      material: "Melón fresco",
      keyRisk: "Colapso celular y pérdida abundante de agua al descongelar",
      tip: "Congela los dados de melón en una bandeja antes de embolsarlos para evitar que formen un bloque sólido.",
      learnMore: "El melón cantalupo contiene un 90% de agua. Al congelarse, los cristales de hielo perforan las membranas celulares, ablandando su pulpa pero conservando intacto su sabor dulce y aromático para batidos."
    },
    pt: {
      item: "Melão Cantaloupe",
      appliance: "freezer",
      slug: "cantaloupe",
      safe: "yes",
      shortAnswer: "Sim, o melão cantaloupe pode ser congelado com segurança, especialmente sem sementes e cortado em cubos.",
      reason: "Congelar melão cantaloupe a 0 °F (-18 °C) interrompe a proliferação microbiana e preserva seu sabor doce por até 9 meses. Como é composto por cerca de 90% de água, os cristais de gelo rompem as membranas celulares, fazendo com que o melão descongelado fique macio e verta líquido. Embora não sirva para saladas de frutas crocantes, é perfeito batido diretamente em vitaminas, sorbets, sopas frias ou coquetéis.",
      tips: [
        "Descasque, retire as sementes e corte o melão em cubos pequenos ou bolinhas antes de congelar.",
        "Faça o pré-congelamento dos cubos em camada única em uma assadeira com papel-manteiga por 2 horas antes de ensacar.",
        "Bata os pedaços de melão congelados diretamente no liquidificador sem descongelar para obter vitaminas densas e sorbets."
      ],
      warnings: [
        "Nunca congele melões inteiros com casca; a expansão da água interna pode rachar a fruta e reter bactérias presentes na casca rendilhada.",
        "O cantaloupe descongelado fica mole e aquoso; não espere que mantenha a textura crocante da fruta fresca."
      ],
      faqs: [
        {
          question: "Como congelar melão cantaloupe sem grudar em bloco?",
          answer: "Espalhe os cubos em uma assadeira forrada com papel-manteiga por 2 horas até endurecerem e só depois transfira para o saco próprio para freezer."
        },
        {
          question: "Pode comer o melão cantaloupe descongelado in natura?",
          answer: "Sim, é totalmente seguro, mas a textura fica flácida e aguada; o consumo é muito mais agradável semidescongelado ou batido em bebidas."
        },
        {
          question: "Quanto tempo dura o melão cantaloupe congelado no freezer?",
          answer: "Em sacos herméticos bem fechados e sem ar, o cantaloupe mantém o frescor e o sabor ideais por 9 a 12 meses a 0 °F (-18 °C)."
        }
      ],
      relatedItems: ["watermelon", "honeydew", "pineapple", "smoothies"],
      material: "Melão fresco",
      keyRisk: "Colapso celular e perda de água após descongelar",
      tip: "Faça o pré-congelamento dos cubos de melão em uma assadeira antes de ensacar para que não grudem em bloco.",
      learnMore: "O melão cantaloupe é formado por cerca de 90% de água. O congelamento gera cristais de gelo que rompem as membranas celulares, amolecendo a polpa, mas preservando perfeitamente seu dulçor e aroma para bebidas geladas."
    }
  },
  cherry: {
    es: {
      item: "Cereza",
      appliance: "freezer",
      slug: "cherry",
      safe: "yes",
      shortAnswer: "Sí, se puede congelar cereza de forma segura.",
      reason: "Congelar cerezas es fantástico para conservar las variedades dulces de verano o las ácidas para repostería durante todo el año. Deshuesar las cerezas antes de congelar es imprescindible, ya que retirar huesos congelados es casi imposible y las cerezas descongeladas quedan demasiado blandas para deshuesarse sin perder zumo.",
      tips: [
        "Deshuesa y quita el pedúnculo a las cerezas siempre antes de congelar; usa un deshuesador manual para obtener mitades limpias.",
        "Congela las mitades deshuesadas en una bandeja con papel vegetal durante 2 horas antes de guardarlas en bolsas.",
        "Mezcla las cerezas ácidas para tarta con un poco de azúcar (4 partes de fruta por 1 de azúcar) para mantener su firmeza y color rojo vivo."
      ],
      warnings: [
        "No congeles cerezas enteras con hueso para batidos, repostería o consumo infantil; los huesos congelados suponen riesgo grave de asfixia y fractura dental, y sus semillas contienen amigdalina cianogénica.",
        "Las cerezas descongeladas pierden turgencia celular y sueltan jugo; incorpóralas directamente en tartas, compotas o batidos en lugar de servirlas crudas."
      ],
      faqs: [
        {
          question: "¿Se deben deshuesar las cerezas antes de congelarlas?",
          answer: "Sí, siempre deshuesa antes de congelar; intentar deshuesar cerezas descongeladas aplasta la pulpa y derrocha jugo, mientras que congeladas están demasiado duras para cortarlas."
        },
        {
          question: "¿Necesitan azúcar o almíbar las cerezas dulces para congelarse bien?",
          answer: "No, las cerezas dulces congelan perfectamente en seco para batidos o aperitivos, aunque congelarlas en un almíbar ligero ayuda a conservar mejor la firmeza para postres."
        },
        {
          question: "¿Se pueden congelar cerezas con el rabillo o pedúnculo?",
          answer: "Puedes congelar cerezas enteras con rabillo para decorar cócteles, pero para cocinar, hornear o triturar en batidos es mucho más práctico retirar el pedúnculo y deshuesar primero."
        }
      ],
      relatedItems: ["plum", "peach", "blueberry", "baking-sheet"],
      material: "Fruta fresca",
      keyRisk: "Riesgo de atragantamiento y fractura dental por huesos congelados; sangrado de jugo al descongelar",
      tip: "Corta las cerezas deshuesadas por la mitad y congélalas con el corte hacia abajo en una bandeja para que no se peguen en la bolsa.",
      learnMore: "Las cerezas poseen una alta concentración de azúcar (12–16° Brix) que desciende su punto de congelación, manteniendo una textura densa y masticable muy agradable al morder cuando están congeladas."
    },
    pt: {
      item: "Cereja",
      appliance: "freezer",
      slug: "cherry",
      safe: "yes",
      shortAnswer: "Sim, você pode congelar cereja com total segurança.",
      reason: "Congelar cerejas é uma forma excelente de conservar variedades doces de verão ou azedas para tortas durante o ano todo. Retirar os caroços antes de congelar é indispensável, pois caroços congelados são quase impossíveis de extrair e as cerejas descongeladas amolecem a ponto de perder muito suco ao descaroçar.",
      tips: [
        "Sempre retire os cabos e descaroce as cerejas antes de congelar; utilize um descaroçador manual para manter metades perfeitas.",
        "Faça o pré-congelamento das metades descaroçadas em uma assadeira com papel-manteiga por 2 horas antes de ensacar.",
        "Misture cerejas azedas com um pouco de açúcar (4 partes de fruta para 1 de açúcar) para preservar consistência firme e cor vermelha intensa."
      ],
      warnings: [
        "Não congele cerejas inteiras com caroço para uso em vitaminas, bolos ou consumo por crianças; caroços congelados trazem risco grave de asfixia e fratura dentária, além de conterem amigdalina cianogênica.",
        "Cerejas descongeladas perdem turgor e vertem suco; adicione-as diretamente em tortas, geleias ou vitaminas em vez de tentar servir em saladas cruas."
      ],
      faqs: [
        {
          question: "Deve-se retirar o caroço das cerejas antes de congelar?",
          answer: "Sim, sempre descaroce antes de congelar; tentar retirar o caroço após descongelar esmaga a polpa e desperdiça suco, enquanto congeladas ficam duras demais."
        },
        {
          question: "Cerejas doces precisam de açúcar ou calda para congelar bem?",
          answer: "Não, cerejas doces congelam muito bem a seco para lanches e vitaminas, mas acondicioná-las em calda rala ajuda a preservar o brilho e a firmeza para sobremesas."
        },
        {
          question: "Pode congelar cerejas com o cabinho?",
          answer: "Sim, para enfeitar coquetéis é possível congelar com o cabo, mas para sobremesas, receitas e vitaminas é muito mais prático retirar cabos e caroços antes."
        }
      ],
      relatedItems: ["plum", "peach", "blueberry", "baking-sheet"],
      material: "Fruta fresca",
      keyRisk: "Risco de engasgo e fratura dentária por caroços congelados; perda de suco ao descongelar",
      tip: "Corte as cerejas descaroçadas ao meio e congele com o lado cortado para baixo em uma assadeira para não grudarem no saco.",
      learnMore: "As cerejas contêm alto teor de açúcares naturais (12–16° Brix) que reduz seu ponto de congelamento, garantindo uma consistência firme e mastigável quando congeladas, excelente para sobremesas geladas."
    }
  },
  grape: {
    es: {
      item: "Uva",
      appliance: "freezer",
      slug: "grape",
      safe: "yes",
      shortAnswer: "Sí, se puede congelar uva de forma segura.",
      reason: "Congelar uvas sin semillas produce un bocado refrescante, dulce y crujiente con una textura suave similar a la del sorbete. Su fructosa natural impide que se queden duras como piedras, lo que las convierte en un tentempié saludable muy popular directamente del congelador o en un sustituto original de los cubitos de hielo en vino y cócteles.",
      tips: [
        "Desgrana las uvas del racimo, lávalas con agua fría y sécalas minuciosamente con un paño limpio o papel absorbente.",
        "Congela las uvas en una sola capa sobre una bandeja para hornear durante 2 horas antes de pasarlas a un recipiente hermético.",
        "Usa uvas congeladas en lugar de cubitos de hielo en vino blanco o agua con gas para enfriar las copas sin aguar la bebida."
      ],
      warnings: [
        "No des uvas congeladas enteras a bebés o niños pequeños; son duras, resbaladizas y presentan un riesgo crítico de asfixia.",
        "Las uvas descongeladas quedan blandas y acuosas al derretirse los cristales de hielo; consúmelas siempre directamente congeladas."
      ],
      faqs: [
        {
          question: "¿Se pueden comer las uvas congeladas directamente sin descongelar?",
          answer: "Sí, las uvas congeladas se disfrutan mejor directamente del congelador; su alto contenido en azúcares naturales evita que se petrifiquen, aportando una textura parecida a un sorbete frutal."
        },
        {
          question: "¿Cómo preparar las uvas para congelarlas correctamente?",
          answer: "Separa las uvas del tallo, retira las magulladas, lávalas a fondo, sécalas por completo con papel de cocina y congélalas extendidas en una bandeja plana."
        },
        {
          question: "¿Por qué las uvas se vuelven blandas y acuosas al descongelarse?",
          answer: "El agua interna forma cristales de hielo que perforan las membranas de las vacuolas, destruyendo la presión de turgencia responsable del crujido fresco característico."
        }
      ],
      relatedItems: ["blueberry", "cherry", "strawberry", "baking-sheet"],
      material: "Fruta fresca",
      keyRisk: "Riesgo de asfixia en niños pequeños y pérdida total de tersura crujiente al descongelar",
      tip: "Pasa uvas ligeramente humedecidas por zumo de limón y una pizca de azúcar antes de congelar para lograr uvas ácidas heladas irresistibles.",
      learnMore: "Las uvas contienen entre un 15% y un 18% de azúcares disueltos (glucosa y fructosa). Esta concentración reduce el punto de congelación y genera microcristales de hielo que proporcionan una textura suave similar a la de un sorbete."
    },
    pt: {
      item: "Uva",
      appliance: "freezer",
      slug: "grape",
      safe: "yes",
      shortAnswer: "Sim, você pode congelar uva com total segurança.",
      reason: "Congelar uvas sem sementes cria um lanche refrescante, naturalmente doce e com uma consistência agradável parecida com sorbet. O conteúdo natural de frutose impede que endureçam como pedras, tornando-as um petisco saudável popular direto do congelador ou um substituto inovador para cubos de gelo em vinhos e coquetéis.",
      tips: [
        "Retire as uvas dos cachos, lave bem em água fria e seque completamente com um pano limpo ou papel-toalha.",
        "Faça o pré-congelamento em uma assadeira em camada única por 2 horas antes de armazenar em potes ou sacos herméticos.",
        "Use uvas congeladas no lugar de pedras de gelo em vinho branco ou água com gás para resfriar sem diluir a bebida."
      ],
      warnings: [
        "Nunca ofereça uvas congeladas inteiras para bebês ou crianças pequenas; elas são escorregadias, rígidas e apresentam sério risco de engasgo.",
        "Uvas descongeladas ficam moles e aguadas devido ao rompimento celular; consuma-as sempre ainda congeladas."
      ],
      faqs: [
        {
          question: "Pode comer uvas congeladas direto sem descongelar?",
          answer: "Sim, as uvas congeladas são perfeitas para comer direto do congelador; os açúcares naturais impedem o congelamento rígido, dando uma textura refrescante tipo sorbet."
        },
        {
          question: "Como higienizar e preparar uvas para o freezer?",
          answer: "Retire as uvas do cacho, descarte as moles, lave muito bem, seque perfeitamente com papel-toalha e congele espalhadas em uma assadeira."
        },
        {
          question: "Por que a uva fica murcha e aguada após descongelar?",
          answer: "A água se expande formando cristais de gelo que perfuram as paredes celulares, eliminando a pressão de turgor responsável pela crocância da uva fresca."
        }
      ],
      relatedItems: ["blueberry", "cherry", "strawberry", "baking-sheet"],
      material: "Fruta fresca",
      keyRisk: "Risco de engasgo em crianças pequenas e perda total de crocância após descongelar",
      tip: "Passe uvas levemente úmidas em suco de limão e polvilhe um pouco de açúcar antes de congelar para fazer uvas cítricas azedinhas.",
      learnMore: "A uva contém de 15% a 18% de açúcares naturais (glicose e frutose). Essa concentração dissolvida reduz o ponto de congelamento e forma microcristais de gelo que conferem uma textura cremosa tipo sorbet."
    }
  },
  honeydew: {
    es: {
      item: "Melón Verde",
      appliance: "freezer",
      slug: "honeydew",
      safe: "yes",
      shortAnswer: "Sí, el melón verde se puede congelar de forma segura.",
      reason: "Congelar melón verde es completamente seguro y preserva su delicado dulzor floral durante 9 a 12 meses. Dado que el melón verde contiene alrededor de un 90% de agua, la congelación provoca una descomposición celular notable, por lo que la fruta descongelada queda blanda y acuosa en vez de crujiente. Es ideal consumirlo congelado en batidos, sopas frías, sorbetes o granizados.",
      tips: [
        "Corta el melón verde en dados o bolitas retirando toda la corteza y las semillas.",
        "Congela los trozos de melón en una bandeja forrada con papel vegetal durante 2 horas antes de envasar en bolsas para congelador.",
        "Tritura los dados congelados directamente con zumo de lima y hojas de menta para preparar un granizado veraniego sin añadir hielo."
      ],
      warnings: [
        "Nunca congeles un melón verde entero; su corteza gruesa aísla el centro impidiendo un enfriamiento rápido y cortar un melón congelado resulta muy peligroso.",
        "El melón verde descongelado libera abundante agua y no conservará la consistencia crujiente de la fruta fresca."
      ],
      faqs: [
        {
          question: "¿Se pueden congelar dados o bolitas de melón verde?",
          answer: "Sí, retirar la piel y congelar los dados en una bandeja plana garantiza trozos individuales sueltos que no formarán un bloque en la bolsa."
        },
        {
          question: "¿Mantiene el melón verde su textura crujiente al descongelarse?",
          answer: "No, la descongelación provoca colapso celular y drenaje de agua; el melón descongelado queda blando, por lo que debe usarse congelado en batidos o purés."
        },
        {
          question: "¿Cuánto tiempo se conserva fresco el melón verde en el congelador?",
          answer: "En bolsas herméticas especiales para congelador retirando todo el aire, el melón verde mantiene su sabor aromático de 9 a 12 meses."
        }
      ],
      relatedItems: ["cantaloupe", "watermelon", "smoothies", "pineapple"],
      material: "Melón fresco",
      keyRisk: "Colapso celular y exudación de agua al descongelar",
      tip: "Tritura el melón fresco con un chorrito de zumo de lima y congélalo en cubiteras para tener bases instantáneas de batidos veraniegos.",
      learnMore: "La pulpa del melón verde está compuesta en un 90% por agua contenida en células parenquimáticas de paredes delgadas. La congelación forma agujas de hielo que perforan estas paredes celulares, provocando pérdida de líquido al descongelar sin comprometer su salubridad."
    },
    pt: {
      item: "Melão Honeydew",
      appliance: "freezer",
      slug: "honeydew",
      safe: "yes",
      shortAnswer: "Sim, você pode congelar melão honeydew com total segurança.",
      reason: "Congelar melão honeydew é totalmente seguro e preserva seu dulçor floral suave por 9 a 12 meses. Por possuir cerca de 90% de água, o congelamento rompe as estruturas celulares, tornando a fruta descongelada flácida e aguada em vez de crocante. É melhor aproveitado ainda congelado em smoothies, sopas frias, sorbets ou raspadinhas.",
      tips: [
        "Corte o melão em cubos pequenos ou use um boleador, removendo totalmente as sementes e a casca.",
        "Faça o pré-congelamento dos pedaços em uma assadeira com papel-manteiga por 2 horas antes de transferir para sacos plásticos.",
        "Bata os cubos de melão congelados diretamente com suco de limão e hortelã para uma raspadinha refrescante sem adicionar pedras de gelo."
      ],
      warnings: [
        "Nunca congele um melão inteiro; a casca grossa isola a polpa impedindo o resfriamento rápido e tentar fatiar melão congelado é arriscado.",
        "O melão descongelado perde muito líquido e não mantém a consistência firme e crocante da fruta in natura."
      ],
      faqs: [
        {
          question: "Pode congelar cubos ou bolinhas de melão honeydew?",
          answer: "Sim, retirar a casca e pré-congelar os pedaços em uma assadeira garante porções soltas que não grudam em bloco no freezer."
        },
        {
          question: "O melão honeydew descongelado continua crocante?",
          answer: "Não, o descongelamento causa rompimento celular e drenagem de líquido; o melão fica mole e deve ser usado congelado em vitaminas e sobremesas geladas."
        },
        {
          question: "Quanto tempo dura o melão congelado no freezer?",
          answer: "Em sacos herméticos próprios para congelamento sem ar interno, o melão mantém seu sabor doce e aroma por 9 a 12 meses."
        }
      ],
      relatedItems: ["cantaloupe", "watermelon", "smoothies", "pineapple"],
      material: "Melão fresco",
      keyRisk: "Colapso celular e perda excessiva de água após descongelar",
      tip: "Bata o melão fresco com suco de limão e congele em formas de gelo para ter cubos prontos para smoothies refrescantes.",
      learnMore: "A polpa do melão honeydew é composta por 90% de água armazenada em células de parênquima de paredes finas. O congelamento cria agulhas de gelo que perfuram essas paredes celulares, causando perda abundante de água após o descongelamento sem afetar a segurança alimentar."
    }
  },
  lemon: {
    es: {
      item: "Limón Amarillo",
      appliance: "freezer",
      slug: "lemon",
      safe: "yes",
      shortAnswer: "Sí, se puede congelar limón amarillo de forma segura.",
      reason: "Congelar limones es una manera fantástica de evitar el desperdicio y tener cítricos frescos a mano para recetas y bebidas. Los limones enteros se congelan firmes y son facilísimos de rallar con microplane, mientras que el frío rompe las vesículas de zumo, rindiendo hasta un 20% más de zumo al descongelarse. Las rodajas y el zumo exprimido también conservan un sabor excepcional.",
      tips: [
        "Congela limones enteros en bolsas herméticas; ralla la piel con un rallador fino mientras sigan completamente congelados.",
        "Exprime zumo de limón fresco en cubiteras de hielo, congela y pasa los cubitos a una bolsa para dosificar en tus recetas.",
        "Congela rodajas de limón en una bandeja para usarlas como guarnición helada comestible en agua, té o cócteles."
      ],
      warnings: [
        "Las rodajas de limón almacenadas más de 3 meses pueden volverse amargas debido a la difusión de limonoides desde el albedo blanco hacia la pulpa.",
        "Los limones enteros descongelados quedan muy blandos y esponjosos; úsalos para exprimir zumo en vez de rodajas decorativas."
      ],
      faqs: [
        {
          question: "¿Se pueden congelar limones enteros?",
          answer: "Sí, los limones enteros congelan extraordinariamente bien; facilitan mucho la ralladura fina y al descongelarse sus membranas rotas liberan más zumo."
        },
        {
          question: "¿Cómo congelar el zumo y la ralladura de limón?",
          answer: "Ralla los limones antes de exprimirlos y guarda la ralladura en recipientes pequeños; vierte el zumo colado en cubiteras (unas 2 cucharadas por cubo) para racionar con facilidad."
        },
        {
          question: "¿La congelación reduce la acidez o la vitamina C del zumo de limón?",
          answer: "No, el ácido cítrico y la vitamina C (ácido ascórbico) son químicamente estables a 0 °F (-18 °C), conservando su acidez cítrica y nutrientes durante 6 a 12 meses."
        }
      ],
      relatedItems: ["lime", "orange", "avocado", "ziploc-bag"],
      material: "Fruta cítrica",
      keyRisk: "Amargor por migración de limonoides del albedo en rodajas y pulpa descongelada blanda",
      tip: "Mete el limón entero congelado al microondas durante 15 segundos o déjalo a temperatura ambiente 15 minutos antes de rodarlo y exprimirlo para extraer hasta la última gota.",
      learnMore: "Las vesículas de zumo de los cítricos están formadas por delgadas membranas de celulosa. La congelación por debajo de cero rompe estos sacos internos, permitiendo que el zumo fluya libremente al descongelar sin necesidad de gran esfuerzo mecánico."
    },
    pt: {
      item: "Limão Siciliano",
      appliance: "freezer",
      slug: "lemon",
      safe: "yes",
      shortAnswer: "Sim, você pode congelar limão siciliano com total segurança.",
      reason: "Congelar limões é uma maneira prática de evitar desperdício e ter frutas cítricas sempre à disposição para culinária e bebidas. Limões inteiros congelam firmes e tornam-se incrivelmente fáceis de raspar com zester, enquanto o congelamento rompe as vesículas de suco, rendendo até 20% a mais de suco após o descongelamento. Fatias e suco espremido também congelam mantendo o sabor original.",
      tips: [
        "Congele limões inteiros diretamente em sacos plásticos; raspe as raspas da casca enquanto o limão ainda estiver bem duro.",
        "Esprema o suco fresco em formas de gelo, congele e transfira os cubos para um saco hermético para dosar em porções exatas.",
        "Faça o pré-congelamento de fatias de limão em uma assadeira para usar como pedras de gelo aromáticas em águas, chás e drinques."
      ],
      warnings: [
        "Fatias de limão congeladas por mais de 3 meses podem adquirir sabor amargo devido à migração de compostos limonoides da parte branca para a polpa.",
        "Limões inteiros descongelados ficam muito esponjosos e macios; use-os para extrair suco em vez de tentar cortar fatias firmes."
      ],
      faqs: [
        {
          question: "Pode congelar limões inteiros?",
          answer: "Sim, limões inteiros congelam muito bem; são fáceis de ralar com zester e, ao descongelarem, suas membranas internas macias soltam mais suco."
        },
        {
          question: "Como congelar o suco e as raspas de limão?",
          answer: "Raspe a casca antes de espremer e guarde as raspas em potinhos fechados; despeje o suco coado em formas de gelo (cerca de 2 colheres de sopa por cubo)."
        },
        {
          question: "O congelamento reduz a acidez ou a vitamina C do suco de limão?",
          answer: "Não, o ácido cítrico e a vitamina C (ácido ascórbico) permanecem quimicamente estáveis a 0 °F (-18 °C), mantendo o frescor cítrico e os nutrientes por 6 a 12 meses."
        }
      ],
      relatedItems: ["lime", "orange", "avocado", "ziploc-bag"],
      material: "Fruta cítrica",
      keyRisk: "Amargor decorrente da migração de limonoides da parte branca em fatias e polpa amolecida após descongelar",
      tip: "Aqueça o limão inteiro congelado no micro-ondas por 15 segundos ou deixe repousar por 15 minutos antes de espremer para extrair o máximo de suco.",
      learnMore: "As vesículas de suco dos citrinos são envoltas por finas membranas de celulose. O congelamento abaixo de zero rompe essas bolsinhas internas, permitindo que o suco se solte facilmente ao descongelar sem exigir esforço mecânico excessivo."
    }
  }
};

// STRICT VALIDATION
const requiredFields = [
  'item', 'appliance', 'slug', 'safe', 'shortAnswer', 'reason',
  'tips', 'warnings', 'faqs', 'relatedItems', 'material',
  'keyRisk', 'tip', 'learnMore'
];

let totalChecks = 0;
let failures = 0;

console.log('=== STRICT VALIDATION PASS: TRANSLATION BATCH 2 (5 ITEMS × 2 LANGUAGES) ===\n');

const slugs = ['cantaloupe', 'cherry', 'grape', 'honeydew', 'lemon'];

slugs.forEach(slug => {
  const enItem = freezerItems.find(i => i.slug === slug);
  const trans = batch2Translations[slug];
  if (!trans) {
    console.error(`FAIL: Missing translations for ${slug}`);
    failures++;
    return;
  }

  ['es', 'pt'].forEach(lang => {
    const obj = trans[lang];
    console.log(`Checking [${slug}] - ${lang.toUpperCase()}:`);
    
    // 1. Check all 14 fields exist and are non-empty
    requiredFields.forEach(field => {
      totalChecks++;
      if (obj[field] === undefined || obj[field] === null) {
        console.error(`  FAIL: Missing field '${field}'`);
        failures++;
      } else if (Array.isArray(obj[field])) {
        if (obj[field].length === 0) {
          console.error(`  FAIL: Empty array field '${field}'`);
          failures++;
        }
      } else if (typeof obj[field] === 'string') {
        if (obj[field].trim() === '') {
          console.error(`  FAIL: Empty string field '${field}'`);
          failures++;
        }
      }
    });

    // 2. Exact match of appliance, slug, safe to EN
    totalChecks += 3;
    if (obj.appliance !== 'freezer') {
      console.error(`  FAIL: appliance mismatch (${obj.appliance})`);
      failures++;
    }
    if (obj.slug !== slug) {
      console.error(`  FAIL: slug mismatch (${obj.slug} !== ${slug})`);
      failures++;
    }
    if (obj.safe !== enItem.safe) {
      console.error(`  FAIL: safe mismatch (${obj.safe} !== ${enItem.safe})`);
      failures++;
    }

    // 3. FAQs check (count and non-empty Q/A)
    totalChecks++;
    if (!Array.isArray(obj.faqs) || obj.faqs.length !== 3) {
      console.error(`  FAIL: FAQ count is ${obj.faqs ? obj.faqs.length : 0}, expected 3`);
      failures++;
    } else {
      obj.faqs.forEach((faq, idx) => {
        totalChecks += 2;
        if (!faq.question || faq.question.trim() === '') {
          console.error(`  FAIL: FAQ[${idx}] missing question`);
          failures++;
        }
        if (!faq.answer || faq.answer.trim() === '') {
          console.error(`  FAIL: FAQ[${idx}] missing answer`);
          failures++;
        }
      });
    }

    // 4. relatedItems slug exact canonical match to EN
    totalChecks++;
    const enRels = JSON.stringify(enItem.relatedItems);
    const langRels = JSON.stringify(obj.relatedItems);
    if (enRels !== langRels) {
      console.error(`  FAIL: relatedItems mismatch with EN. EN: ${enRels}, ${lang.toUpperCase()}: ${langRels}`);
      failures++;
    } else {
      obj.relatedItems.forEach(r => {
        totalChecks++;
        if (!freezerSlugs.has(r)) {
          console.error(`  FAIL: relatedItem '${r}' does not exist in freezer items`);
          failures++;
        }
        if (r === slug) {
          console.error(`  FAIL: self-referential relatedItem '${r}'`);
          failures++;
        }
      });
    }
    console.log(`  -> 14 fields present & non-empty; relatedItems matches EN canonical slugs exactly [${obj.relatedItems.join(', ')}]`);
  });

  // 5. Parity between ES and PT
  totalChecks += 2;
  const esTipsLen = trans.es.tips.length;
  const ptTipsLen = trans.pt.tips.length;
  if (esTipsLen !== ptTipsLen) {
    console.error(`FAIL: Tips length mismatch between ES (${esTipsLen}) and PT (${ptTipsLen}) for ${slug}`);
    failures++;
  } else {
    console.log(`  -> Structural parity: tips count matches (ES: ${esTipsLen}, PT: ${ptTipsLen})`);
  }

  const esWarnLen = trans.es.warnings.length;
  const ptWarnLen = trans.pt.warnings.length;
  if (esWarnLen !== ptWarnLen) {
    console.error(`FAIL: Warnings length mismatch between ES (${esWarnLen}) and PT (${ptWarnLen}) for ${slug}`);
    failures++;
  } else {
    console.log(`  -> Structural parity: warnings count matches (ES: ${esWarnLen}, PT: ${ptWarnLen})`);
  }

  console.log('');
});

console.log(`=== SUMMARY: ${totalChecks} checks run across 10 objects. Failures: ${failures} ===`);
if (failures === 0) {
  console.log('STATUS: 100% CLEAN AND PASSING STRICT VALIDATION');
  fs.writeFileSync('C:/Users/ASUS/.gemini/antigravity-ide/brain/2c8bc618-4548-4760-b0b5-98e267090f20/scratch/cat2_batch2_translations.json', JSON.stringify(batch2Translations, null, 2), 'utf8');
} else {
  process.exit(1);
}
