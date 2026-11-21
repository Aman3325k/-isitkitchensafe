const fs = require('fs');
const path = require('path');

const waveDate = '2026-11-21';

console.log('=== GENERATING WAVE 54 SPANISH SAFETY GUIDES (80 -> 83) ===');

const esGuides = [
  {
    slug: 'carbon-steel-pan-seasoning-blueing-acid-stripping-safety',
    title: 'Química del Curado en Acero al Carbono, Pavonado Térmico y Ataque Ácido: Pasivación por Magnetita (Fe3O4), Reticulación Linoleica y Límites de Lixiviación',
    excerpt: '¿Cocinar con vino o vinagre arruina permanentemente el curado del acero al carbono? Descubra la termodinámica del pavonado con magnetita (Fe3O4), la hidrólisis ácida de ésteres, la biodisponibilidad del hierro y su restauración rápida.',
    date: waveDate,
    readTime: '9 min de lectura',
    author: 'IsItKitchenSafe',
    intro: 'El menaje de acero al carbono ocupa un lugar privilegiado en cocinas profesionales y hogares exigentes, combinando la excelente respuesta térmica del hierro fundido con la ligereza y maniobrabilidad del acero inoxidable. Sin embargo, mantener una pátina antiadherente en acero al carbono plantea desafíos químicos singulares. A diferencia de la textura microscópicamente rugosa y porosa del hierro fundido en arena, el acero laminado en frío posee una superficie ultra lisa (rugosidad Ra ≈ 0.5–1.5 µm). Al exponerse a ácidos culinarios con bajo pH —como desglasar con vino blanco, zumo de limón o reducciones de tomate—, la fina película polimérica reticulada sufre una rápida hidrólisis de ésteres, desnudando el metal reactivo y liberando iones ferrosos (Fe²⁺) y férricos (Fe³⁺) en el alimento.',
    sections: [
      {
        title: '1. Metalurgia y Pavonado Térmico: Pasivación con Magnetita (Fe3O4) vs Hematita (Fe2O3) a 280°C–310°C',
        content: 'Antes de aplicar capas de aceite, las sartenes de acero al carbono pueden someterse al pavonado térmico ("blueing"). Al calentar el hierro puro por encima de 280°C en aire ambiental, el oxígeno se difunde en la red cristalina superficial formando una capa de conversión de óxido ferroso-férrico o magnetita (Fe3O4). A diferencia del óxido común rojizo (hematita, Fe2O3), que es poroso y quebradizo, la magnetita forma una matriz compacta de espinela unida directamente al acero. Esta película azulada cumple dos funciones vitales: previene la oxidación superficial inmediata y aporta micro-rugosidad submicrónica que mejora mecánicamente el anclaje del aceite polimerizado.',
        type: 'info',
        boxText: 'El pavonado térmico a 280°C–310°C genera una capa de magnetita (Fe3O4) que evita el óxido y mejora la adhesión del curado.'
      },
      {
        title: '2. Cinética de Polimerización: Autooxidación de Triglicéridos, Dobles Enlaces Conjugados y Reticulación Radicalaria',
        content: 'La superficie antiadherente del acero curado no es grasa residual, sino una red polimérica tridimensional e insoluble. Cuando aceites secantes o semisecantes ricos en ácidos grasos poliinsaturados (como pepita de uva o canola) se calientan en capas microscópicas más allá de su punto de humo, la autooxidación térmica genera radicales libres. Los ácidos grasos con dienos interrumpidos por metileno (ácido linoleico) sufren abstracción de hidrógeno formando dobles enlaces conjugados. Estos sistemas conjugados se recombinan rápidamente mediante cicloadiciones Diels-Alder, reticulando las cadenas lipídicas en un biopolímero termoestable, vítreo y coordinado al sustrato metálico.',
        type: 'tip',
        boxText: 'La polimerización transforma aceites poliinsaturados en un biopolímero rígido y vítreo mediante autooxidación y reticulación radicalaria.'
      },
      {
        title: '3. Hidrólisis Catalizada por Ácidos: Por Qué Desglasar con Vino, Limón o Tomate Rompe los Enlaces en Segundos',
        content: 'A pesar de su dureza mecánica, el curado es susceptible al ataque de ácidos orgánicos. Los alimentos con pH < 4.0 —salsas desglasadas con vino blanco seco (ácidos tartárico y málico), zumo de limón (ácido cítrico) o tomate (ácido cítrico y málico)— aportan iones hidronio (H+) altamente reactivos. Estos protonan los oxígenos carbonílicos de los enlaces éster (-COO-) de los triglicéridos, catalizando el ataque nucleofílico del agua. Esta hidrólisis ácida escinde el polímero en ácidos grasos libres y glicerol, mientras disuelve simultáneamente el hierro subyacente: Fe + 2H+ → Fe²⁺ + H2. La pérdida de adherencia interfacial hace que el curado se desprenda en copos negros visibles.',
        type: 'warning',
        boxText: 'Los ácidos culinarios hidrolizan los enlaces éster del curado en segundos, atacando el hierro y provocando el desprendimiento de escamas negras.'
      },
      {
        title: '4. Cinética de Lixiviación y Biodisponibilidad: Fe²⁺ vs Fe³⁺ y Umbrales de Seguridad Dietética (UL 45 mg/día)',
        content: 'Al disolverse el acero al carbono bare ante un medio ácido, el hierro entra en la disolución como catión ferroso divalente (Fe²⁺), altamente soluble y absorbible en el duodeno humano mediante el transportador DMT1. Conforme hierve la salsa y absorbe oxígeno atmosférico, se oxida a ion férrico trivalente (Fe³⁺): 4Fe²⁺ + O2 + 4H⁺ → 4Fe³⁺ + 2H2O. Los iones férricos reaccionan con los polifenoles y taninos del alimento formando precipitados insolubles de tanato de hierro, confiriendo un sabor astringente a "moneda metálica" y oscureciendo las salsas. En ensayos de laboratorio, hervir salsa de tomate durante 30 minutos en acero sin curar lixivia entre 20 mg y 50 mg de hierro por ración. Aunque beneficia a personas con anemia ferropénica, supera el Límite Máximo Tolerable (UL) de 45 mg/día para adultos y supone un grave riesgo hepático en pacientes con hemocromatosis hereditaria.',
        type: 'warning',
        boxText: 'Cocinar salsas ácidas en sartenes de acero sin curar puede liberar más de 40 mg de hierro por ración, rebasando el límite tolerable diario de 45 mg.'
      },
      {
        title: '5. Protocolo de Restauración Rápida: Frotado con Microgotas de Aceite y Pasivación en Hornillo en Menos de 5 Minutos',
        content: 'Si una salsa ácida despoja un área gris plateada en el centro de su sartén, una intervención inmediata en el hornillo evita la oxidación repentina por humedad. Lave la sartén con agua caliente y un cepillo no metálico, secándola sobre el quemador a fuego medio-alto (aprox. 200°C). Deposite de 3 a 4 microgotas de un aceite con alto punto de humo (pepita de uva o aguacate). Con una toalla de papel o paño de algodón sin pelusa, frote vigorosamente por toda la superficie interior hasta que el metal luzca totalmente seco y mate, sin gotas visibles. Mantenga a fuego hasta que emita un leve hilo de humo durante 60 segundos y deje enfriar. Esto regenera una película polimérica protectora en cinco minutos.',
        type: 'tip',
        boxText: 'Frote el aceite hasta que la sartén quede totalmente mate y seca antes de calentar; el exceso de aceite produce residuos pegajosos y gomosos.'
      }
    ],
    conclusion: 'El acero al carbono es un material extraordinario si se respetan sus límites químicos y metalúrgicos. El pavonado térmico genera una base protectora de magnetita (Fe3O4), pero los polímeros siguen siendo vulnerables a los ácidos orgánicos. Reserve desglases con vino o salsas de tomate prolongadas para acero inoxidable o hierro esmaltado. Si el curado se desprende, restaure la pátina inmediatamente con un frotado microfino para pasivar el metal y evitar la lixiviación excesiva de hierro.',
    faqs: [
      {
        question: '¿Es peligroso ingerir las escamas negras que se desprenden de una sartén de acero al carbono?',
        answer: 'No. Las escamas de curado están compuestas de aceites vegetales polimerizados inertes y óxidos de hierro no tóxicos (magnetite). Son inocuas biológicamente y se eliminan sin absorberse. No obstante, indican que el curado ha fracasado y los alimentos se pegarán.'
      },
      {
        question: '¿Qué es el pavonado térmico y debo hacerlo antes de curar con aceite?',
        answer: 'El pavonado térmico consiste en calentar la sartén limpia a fuego intenso (280°C–310°C) hasta que el acero desarrolle un tono azul oscuro o negro debido a la formación de magnetita (Fe3O4). Este paso crea una barrera anticorrosión y maximiza la adhesión del aceite.'
      },
      {
        question: '¿Cocinar salsa de tomate en acero al carbono puede causar intoxicación por hierro?',
        answer: 'En adultos sanos, una sola comida no provoca intoxicación aguda. Sin embargo, hervir salsas ácidas en acero despojado de curado puede lixiviar de 20 a 50 mg de hierro por ración, rebasando el límite diario de 45 mg, lo que resulta peligroso para personas con hemocromatosis.'
      },
      {
        question: '¿Por qué el curado del acero al carbono se desprende más fácil que el del hierro fundido?',
        answer: 'El hierro fundido tiene una superficie microscópicamente porosa y rugosa (Ra ≈ 8–12 µm) que ancla mecánicamente el aceite polimerizado. El acero laminado es extremadamente liso (Ra ≈ 0.5–1.5 µm), por lo que depende casi exclusivamente de enlaces superficiales fáciles de quebrar por ácidos.'
      },
      {
        question: '¿Cuál es el mejor aceite para curar sartenes de acero al carbono?',
        answer: 'El aceite de pepita de uva refinado y el aceite de canola son excelentes por su alto contenido en ácidos grasos poliinsaturados, elevado punto de humo (>215°C) y facilidad para formar una película polimérica uniforme y resistente.'
      }
    ],
    relatedTools: [
      {
        name: 'Modelador de Degradación de Curado en Hierro Fundido y Acero al Carbono',
        url: '/es/tools/cast-iron-seasoning-degradation-modeler/'
      },
      {
        name: 'Comparativa de Rejillas de Hierro Fundido vs Acero Inoxidable',
        url: '/es/compare/cast-iron-vs-stainless-steel-grill-grates/'
      },
      {
        name: 'Comparativa de Ollas de Acero Inoxidable vs Aluminio',
        url: '/es/compare/stainless-steel-vs-aluminum-stock-pot/'
      }
    ]
  },
  {
    slug: 'aluminum-cookware-acidic-food-neurotoxicity-leaching-safety',
    title: 'Lixiviación de Menaje de Aluminio en Cocción Ácida: Ingesta Semanal Tolerable EFSA (TWI), Anodizado vs Puro, Cinética Ácida y Seguridad',
    excerpt: '¿Hervir salsa de tomate o marinadas de limón en ollas de aluminio desprende metales tóxicos? Descubra la química del óxido anódico (Al2O3), los límites TWI de EFSA (1 mg/kg peso/semana) y el consenso científico sobre neurotoxicidad.',
    date: waveDate,
    readTime: '9 min de lectura',
    author: 'IsItKitchenSafe',
    intro: 'El aluminio es el segundo metal más empleado en la fabricación global de menaje de cocina, apreciado tanto en hostelería como en hogares por su formidable conductividad térmica (unas 15 veces superior a la del acero inoxidable) y su bajo coste. Sin embargo, el aluminio es un metal anfótero y altamente reactivo. Cuando ollas de aluminio puro, cazuelas o papel de aluminio entran en contacto con alimentos ácidos de bajo pH —como salsa de tomate marinara, glaseados de limón, escabeches de vinagre o chucrut—, el metal se disuelve químicamente. Las autoridades alimentarias europeas y estadounidenses han fijado estrictos límites de exposición para prevenir la bioacumulación crónica.',
    sections: [
      {
        title: '1. Química del Contacto del Aluminio con Alimentos: Películas de Óxido Nativo vs Disolución Ácida (pH < 4.5)',
        content: 'En aire seco a temperatura ambiente, el aluminio puro se oxida de forma espontánea generando una finísima película de óxido de aluminio (Al2O3) amorfo de apenas 2 a 4 nanómetros de espesor. Aunque esta capa nativa brinda protección frente al agua pura neutra (pH 7.0), es termodinámicamente inestable en disoluciones ácidas (pH < 4.5) o alcalinas (pH > 8.5). Los ácidos orgánicos culinarios —como el cítrico (limón, tomate), el acético (vinagre) y el láctico (lácteos, fermentados)— actúan como ligandos quelantes. Los iones hidronio disuelven la capa pasivada liberando cationes de aluminio trivalente: Al2O3 + 6H+ → 2Al³⁺ + 3H2O.',
        type: 'warning',
        boxText: 'El óxido nativo de aluminio tiene solo 2–4 nm de espesor y se disuelve rápidamente con alimentos de pH inferior a 4.5, liberando iones Al³⁺.'
      },
      {
        title: '2. Aluminio Anodizado vs Aluminio Puro: Pasivación Anódica Porosa, Sellado Duro y Resistencia al Rayado',
        content: 'Para superar la fragilidad del aluminio puro, la industria recurre al anodizado electroquímico. En una cuba electrolítica ácida (generalmente ácido sulfúrico), la pieza se somete a alto voltaje anódico, haciendo crecer una gruesa capa de alúmina (Al2O3) de 25 a 50 micrómetros —más de 10.000 veces más gruesa que la película nativa. En el menaje "anodizado duro", el baño se refrigera (0°C–5°C) con densidades de corriente elevadas, logrando una dureza excepcional (Vickers HV > 350, superior al acero inoxidable). Al sellar los poros hexagonales en agua desionizada hirviendo o acetato de níquel, la barrera se vuelve impenetrable e inmune al ataque ácido.',
        type: 'info',
        boxText: 'El anodizado duro genera una capa de alúmina de 50 µm que aísla el alimento del metal y resiste los utensilios metálicos.'
      },
      {
        title: '3. Cinética de Extracción Ácida: Formación de Complejos con Ácido Cítrico, Acético y Málico y Tasas de Migración',
        content: 'Los ensayos de migración según las directrices europeas (Resolución CM/Res(2013)9 del Consejo de Europa) prueban que los ácidos orgánicos aceleran drásticamente la extracción de aluminio. El ácido cítrico forma complejos tridentados solubles y muy estables [Al(C6H5O7)]⁰, acelerando la disolución por quelación. Hervir salsa de tomate (pH 3.8) en aluminio puro durante dos horas arroja concentraciones de migración de entre 20 mg/L y 65 mg/L de aluminio. La sal de mesa (cloruro sódico) agrava la lixiviación mediante corrosión por picaduras (pitting).',
        type: 'warning',
        boxText: 'El ácido cítrico y la sal disuelven el aluminio hasta 60 veces más rápido, transfiriendo decenas de miligramos de metal a salsas de tomate.'
      },
      {
        title: '4. Evaluación Toxicológica: Ingesta Semanal Tolerable de la EFSA (TWI 1 mg/kg peso), Aclaramiento Renal y Neurotoxicidad',
        content: 'La Autoridad Europea de Seguridad Alimentaria (EFSA) fijó una Ingesta Semanal Tolerable (TWI) para el aluminio dietético de 1.0 mg/kg de peso corporal a la semana. Para un adulto de 70 kg, esto representa un tope de 70 mg semanales considerando todas las fuentes dietéticas combinadas; para un niño de 20 kg, el límite es de apenas 20 mg. Si bien los riñones sanos excretan más del 95% del aluminio ingerido, personas con insuficiencia renal, lactantes y ancianos retienen el catión en tejido óseo y cerebral. Décadas de investigación han analizado posibles vínculos con enfermedades neurodegenerativas (como el Alzheimer); el consenso actual (OMS, EFSA, ATSDR) dictamina que, aunque el aluminio dietético no está demostrado como causa primaria de Alzheimer, debe evitarse superar la TWI.',
        type: 'info',
        boxText: 'La EFSA limita la ingesta semanal a 1 mg por kilo de peso; una sola ración ácida en aluminio puro puede superar dicho tope semanal.'
      },
      {
        title: '5. Directrices Culinarias de Seguridad: Cuándo Prohibir el Aluminio Puro, Utensilios y Alternativas Seguras',
        content: 'Para minimizar la exposición al aluminio: Nunca cocine, hierva ni almacene alimentos ácidos o salados en ollas de aluminio puro o papel de aluminio. Las ollas de aluminio sin recubrir deben reservarse estrictamente para hervir agua neutra (huevos duros, pasta en agua sin sal inicial o verduras al vapor). Para hornear o conservar alimentos ácidos (como cítricos o lasañas de tomate), utilice papel de hornear sin blanquear, recipientes de vidrio o silicona platino en lugar de papel de aluminio. Para guisos y salsas ácidas, elija acero inoxidable 304/316 o hierro fundido esmaltado.',
        type: 'tip',
        boxText: 'Nunca hornee pescado con limón ni lasaña con tomate directamente envueltos en papel de aluminio; interponga papel de horno o use vidrio.'
      }
    ],
    conclusion: 'El aluminio ofrece un rendimiento térmico inigualable, pero las superficies desnudas conllevan riesgos reales de lixiviación en cocción ácida. El aluminio anodizado duro es químicamente inerte y seguro para cocinar alimentos ácidos. En cambio, el aluminio puro y el papel de aluminio se disuelven velozmente en medios de bajo pH, superando con facilidad los límites semanales de la EFSA. Reserve el aluminio puro para tareas neutras y recurra al acero inoxidable o al hierro esmaltado para recetas con tomate o vinagre.',
    faqs: [
      {
        question: '¿Cocinar con papel o cazuelas de aluminio causa la enfermedad de Alzheimer?',
        answer: 'El consenso científico internacional (OMS, EFSA, Asociación de Alzheimer) concluye que no existen pruebas causales que vinculen el aluminio del menaje con el Alzheimer. Sin embargo, al ser un elemento neurotóxico en dosis elevadas, se aconseja no rebasar la ingesta semanal tolerable de 1 mg/kg de peso.'
      },
      {
        question: '¿Es seguro el aluminio anodizado duro para cocinar salsas de tomate?',
        answer: 'Sí. El aluminio anodizado duro posee una capa electroquímica gruesa y sellada de óxido de aluminio (Al2O3) tan dura como el zafiro, que impide por completo el contacto del ácido con el metal y evita la migración química.'
      },
      {
        question: '¿Por qué el papel de aluminio se pica y agujerea al tapar una lasaña?',
        answer: 'Se debe a corrosión galvánica y química. El contacto del ácido del tomate y la sal con el papel de aluminio y la bandeja genera una micropila galvánica donde el aluminio actúa como ánodo de sacrificio, disolviéndose en la comida y dejando microperforaciones.'
      },
      {
        question: '¿Puedo asar pescado con limón envuelto directamente en papel de aluminio?',
        answer: 'No es recomendable. El zumo de limón y la sal disuelven rápidamente el papel de aluminio, transfiriendo citrato de aluminio a los alimentos. Coloque siempre una lámina de papel de hornear entre el pescado y el aluminio.'
      },
      {
        question: '¿Cómo distingo si mi olla es de aluminio puro o de aluminio anodizado?',
        answer: 'El aluminio puro es de color plateado brillante, se raya fácilmente y se vuelve gris oscuro o blancuzco en el lavavajillas. El anodizado duro presenta un tono gris carbón o negro mate muy oscuro y una superficie lisa e inmune a arañazos.'
      }
    ],
    relatedTools: [
      {
        name: 'Simulador de Lixiviación Ácida en Papel de Aluminio',
        url: '/es/tools/aluminum-foil-acidic-leaching-simulator/'
      },
      {
        name: 'Comparativa de Ollas de Acero Inoxidable vs Aluminio',
        url: '/es/compare/stainless-steel-vs-aluminum-stock-pot/'
      },
      {
        name: 'Predictor de Migración de Materiales en Contacto con Alimentos',
        url: '/es/tools/food-contact-migration-predictor/'
      }
    ]
  },
  {
    slug: 'enamel-cast-iron-lead-cadmium-glaze-thermal-shock-safety',
    title: 'Seguridad en Hierro Fundido Esmaltado: Plomo y Cadmio en Esmaltes Vintage, Choque Térmico (Crazing) y Peligro de Astillas de Vidrio',
    excerpt: '¿Es peligroso cocinar en hierro fundido esmaltado desportillado? Descubra la ciencia del vidrio borosilicatado vitrificado, el cuarteo por choque térmico, la lixiviación de metales pesados en esmaltes vivos y cuándo retirar una olla.',
    date: waveDate,
    readTime: '9 min de lectura',
    author: 'IsItKitchenSafe',
    intro: 'El hierro fundido esmaltado —famoso en cocottes y cacerolas francesas— representa el culmen de la durabilidad culinaria, retención de calor y diseño. Su recubrimiento de porcelana vitrificada elimina el mantenimiento de curado del hierro fundido tradicional, proporcionando una superficie totalmente inerte ideal para guisos ácidos, reducciones de vino y hogazas de pan. Sin embargo, el esmalte vítreo es esencialmente vidrio de borosilicato fundido sobre hierro a 800°C. Sometido a choques térmicos extremos, impactos o degradación química, el esmalte puede cuartearse, agrietarse o desprenderse en astillas cortantes. Además, piezas antiguas o importaciones no certificadas a menudo ocultan metales pesados tóxicos (plomo y cadmio) en sus pigmentos brillantes.',
    sections: [
      {
        title: '1. Química del Esmalte Vítreo: Fusión de Vidrio Borosilicatado a 800°C e Inercia Química',
        content: 'El esmalte vitrificado se fabrica combinando fritas de vidrio pulverizadas —sílice (SiO2), bórax (B2O3), feldespato y óxidos alcalinos fundentes— con óxidos minerales pigmentarios. Esta barbotina se pulveriza sobre el hierro colado y se hornea entre 780°C y 850°C. A estas temperaturas, el vidrio se funde penetrando en los poros del hierro y formando silicato de hierro interfacial. Cuando el esmalte está intacto, es químicamente neutro, impermeable a los ácidos y carece de porosidad bacteriana, eliminando por completo la lixiviación de hierro.',
        type: 'info',
        boxText: 'El esmalte vítreo es vidrio de borosilicato fusionado al hierro a 800°C, ofreciendo una inercia química total mientras permanezca intacto.'
      },
      {
        title: '2. Pigmentos de Metales Pesados en Menaje Vintage y Bajo Coste: Fundentes de Plomo (Pb) y Sulfuro de Cadmio (Cd)',
        content: 'Históricamente, el óxido de plomo (PbO) se empleaba habitualmente como fundente para rebajar el punto de fusión del vidrio y lograr un acabado ultra brillante. El sulfuro de cadmio (CdS) y el sulfoseleniuro de cadmio eran los pigmentos estándar para lograr tonos vibrantes como naranja llama, amarillo intenso o rojo cereza. Aunque fabricantes reputados modernos cumplen con la Proposición 65 de California y las normativas de la FDA (21 CFR 175.300), el menaje vintage fabricado antes de 1980 e importaciones baratas no reguladas liberan con frecuencia plomo y cadmio al cocinar salsas ácidas.',
        type: 'warning',
        boxText: 'El menaje esmaltado vintage (anterior a 1980) y piezas no certificadas pueden liberar plomo y cadmio presentes en esmaltes amarillos o rojos.'
      },
      {
        title: '3. Mecánica del Choque Térmico: Discrepancia del Coeficiente de Expansión Térmica (CTE) entre Hierro y Vidrio',
        content: 'El fallo estructural del esmalte se debe a la física del choque térmico. El hierro fundido y el vidrio poseen coeficientes de dilatación térmica (CTE) muy distintos: el hierro se expande a 10–12 × 10⁻⁶ /K, mientras que el vidrio lo hace a 6–9 × 10⁻⁶ /K. Si una olla vacía se calienta a fuego vivo o se sumerge caliente en agua fría, el diferencial de contracción genera esfuerzos de tracción que superan la resistencia del vidrio (30–70 MPa), provocando "crazing" o cuarteado: una densa red de microfisuras.',
        type: 'warning',
        boxText: 'Calentar la olla en seco o desglasar con líquido helado provoca un choque por expansión térmica que cuartea irreversiblemente el vidrio.'
      },
      {
        title: '4. Peligro de Ingestión de Astillas de Vidrio: Microfracturas, Fragmentos Afilados y Riesgo Digestivo',
        content: 'Cuando el cuarteado avanza o un golpe mecánico fractura el vidrio, se desprenden microesquirlas de esmalte de bordes cortantes. Ingerir partículas de vidrio entraña riesgos médicos de microlesiones en esófago, estómago y mucosas intestinales. Además, una vez fracturada la capa de vidrio, la humedad penetra bajo el esmalte, oxidando el hierro subyacente y haciendo saltar más astillas durante futuras cocciones.',
        type: 'warning',
        boxText: 'El esmalte desportillado desprende astillas de vidrio en la comida y la corrosión subyacente desmenuza el resto del vitrificado.'
      },
      {
        title: '5. Protocolo de Inspección, Prevención y Retirada: La Prueba de la Uña y Cuándo Descartar la Olla',
        content: 'Para evaluar la seguridad de una cazuela esmaltada: 1) Prueba de la uña: deslice la uña por zonas rugosas o decoloradas; si se engancha en un borde, hay pérdida de vidrio. 2) Frotado con papel blanco: tras lavar, frote enérgicamente un paño blanco; marcas negras delatan hierro expuesto. Prevención: Nunca precaliente en seco; vierta siempre aceite o caldo antes de encender el fuego. Use exclusivamente utensilios de madera o silicona platino. Regla de oro: si el esmalte interior de cocción está picado o astillado, la cazuela debe retirarse definitivamente del uso culinario.',
        type: 'tip',
        boxText: 'Si su uña se traba en una muesca en el fondo interior, retire la olla de la cocina de inmediato; el vidrio desportillado no se puede reparar.'
      }
    ],
    conclusion: 'El hierro fundido esmaltado ofrece unas prestaciones culinarias supremas cuando su superficie vítrea permanece intacta. Proteja su pieza evitando choques térmicos bruscos y utilizando utensilios de madera o silicona. Si una cocotte presenta picaduras o astillas de vidrio en el fondo interior, retírela de inmediato: el esmalte vítreo fracturado no admite parches y arroja riesgos de ingestión de esquirlas.',
    faqs: [
      {
        question: '¿Se puede reparar el esmalte picado en el interior de una olla de hierro?',
        answer: 'No. No existe ningún compuesto, pintura o resina apta para contacto alimentario que soporte el fuego y repare el vidrio vítreo fundido a 800°C. Cualquier parche casero se descompondrá con el calor, liberando toxinas y astillas.'
      },
      {
        question: '¿Es seguro cocinar en una olla con cuarteado fino (crazing)?',
        answer: 'Un cuarteado superficial en telaraña sin bordes afilados ni pérdida de material indica fatiga térmica inicial. Aunque no es una emergencia inmediata, el vidrio terminará por astillarse. Cocine a fuego suave y renueve la olla si nota rugosidad.'
      },
      {
        question: '¿Cómo compruebo si una cazuela vintage contiene plomo o cadmio?',
        answer: 'Puede utilizar hisopos químicos reactivos (como tiras de rodizonato reconocidas por agencias oficiales) frotando las zonas esmaltadas de color amarillo, naranja o rojo y el interior blanco desgastado.'
      },
      {
        question: '¿Por qué se picó el fondo de mi cocotte al hornear pan de masa madre?',
        answer: 'Hornear pan suele exigir precalentar la olla vacía a temperaturas muy altas (230°C–250°C). El precalentamiento en seco genera alta tensión térmica y, al introducir la masa fría, el choque térmico localizado desprende el esmalte.'
      },
      {
        question: '¿Son peligrosos los golpes o desconchones en el exterior de la olla?',
        answer: 'Los golpes en la pared exterior o la tapa no tocan los alimentos, por lo que no implican peligro de ingestión de vidrio. Aplique una pizca de aceite en el hierro expuesto para evitar el óxido.'
      }
    ],
    relatedTools: [
      {
        name: 'Simulador de Choque Térmico y Fractura en Vidrio y Esmalte',
        url: '/es/tools/thermal-shock-simulator/'
      },
      {
        name: 'Índice de Transparencia de Marcas de Menaje de Cocina',
        url: '/es/tools/cookware-brand-transparency-index/'
      },
      {
        name: 'Marcador de Metales Pesados y Lixiviación Tóxica',
        url: '/es/tools/toxic-leaching-scorecard/'
      }
    ]
  }
];

const esBlogPath = path.resolve('src/data/blog.es.json');
const esBlogs = JSON.parse(fs.readFileSync(esBlogPath, 'utf8'));

for (const g of esGuides) {
  if (!esBlogs.some(b => b.slug === g.slug)) {
    esBlogs.push(g);
    console.log(`✅ Added ES guide: ${g.slug}`);
  } else {
    console.log(`ℹ️ ES guide already present: ${g.slug}`);
  }
}

fs.writeFileSync(esBlogPath, JSON.stringify(esBlogs, null, 2) + '\n', 'utf8');
console.log(`✅ Saved src/data/blog.es.json. Total guides: ${esBlogs.length}`);
