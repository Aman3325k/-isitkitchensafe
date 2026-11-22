const fs = require('fs');
const path = require('path');

const waveDate = '2026-11-22';

console.log('=== GENERATING WAVE 56 SPANISH SAFETY GUIDES (83 -> 86) ===');

const newGuidesEs = [
  {
    slug: 'copper-cookware-tin-lining-verdigris-poisoning-safety',
    title: 'Seguridad en Menaje de Cobre con Revestimiento de Estaño: Integridad del Estaño (Fusión a 231,9 °C), Toxicosis por Cardenillo y Cinética de Lixiviación Ácida',
    excerpt: '¿Es tóxico cocinar en cazuelas de cobre con el estaño desgastado? Descubra la química del cardenillo (carbonato básico de cobre), el punto de fusión del estaño (231,9 °C), la regla de la moneda para reestañar y la toxicología cúprica.',
    description: 'Guía técnica definitiva sobre la seguridad del menaje de cobre estañado: cinética de disolución ácida, prevención del cardenillo, límites de ingesta y normas para el reestañado artesanal.',
    summary: 'El cobre puro conduce el calor de forma sobresaliente pero es químicamente reactivo. El estañado virgen aísla los alimentos, pero se funde a 231,9 °C. Si el cobre desnudo supera 1 cm², los ácidos culinarios lixivian iones tóxicos provocando intoxicación aguda.',
    date: waveDate,
    readTime: '9 min de lectura',
    author: 'IsItKitchenSafe',
    keyTakeaways: [
      'El estaño puro (Sn) tiene un punto de fusión bajo de 231,9 °C (449,4 °F); precalentar una cazuela en seco funde y arruina la película protectora en menos de 90 segundos.',
      'El cardenillo o verdín (carbonato básico de cobre [Cu2(OH)2CO3] y acetato cúprico) se genera rápidamente por humedad y ácidos; su ingesta desencadena toxicosis aguda con vómitos violentos, dolor epigástrico y daño hepatorrenal.',
      'Regla de la moneda: si los parches de cobre desnudo expuesto en la zona de cocción superan el tamaño de una moneda de 1 o 2 euros (>1 cm²), la pieza debe retirarse del uso culinario y enviarse a reestañar.',
      'Los alimentos ácidos con pH < 4,5 (tomate, vino blanco, reducciones con vinagre, limón) aceleran exponencialmente la disolución del cobre metálico, rebasando fácilmente el límite diario tolerable de 10 mg/día.',
      'El reestañado tradicional debe realizarse exclusivamente con estaño virgen de grado alimentario (>99,75% Sn, ASTM B339), rigurosamente libre de impurezas de plomo o arsénico.'
    ],
    intro: 'El menaje de cobre macizo constituye la cúspide térmica de la cocina profesional clásica debido a su inigualable difusividad térmica (aproximadamente 390 W/m·K), superando con creces al hierro fundido y al acero inoxidable. Sin embargo, el cobre es un metal de transición químicamente semianfótero y electropositivo que reacciona con avidez ante ácidos orgánicos, oxígeno atmosférico y cloruros. Para evitar que el cobre reactivo entre en contacto directo con los alimentos, los artesanos caldereros aplican tradicionalmente una capa de estaño puro ("estañado a mano"). No obstante, el estaño es un metal blando con un punto de fusión extraordinariamente bajo (231,9 °C). Cuando el revestimiento se desgasta por fricción mecánica o se quema por un calentamiento en seco, el cobre bare expuesto reacciona con la humedad y los ácidos formando cardenillo (verdigris), un complejo altamente tóxico capaz de inducir cuadros clínicos agudos de intoxicación por metales pesados.',
    sections: [
      {
        title: '1. Metalurgia del Revestimiento de Estaño: Punto de Fusión (231,9 °C), Adhesión Intermetálica y Riesgo de Sobrecalentamiento',
        content: 'El revestimiento interior de las cazuelas de cobre clásicas se logra mediante el estañado a fuego: el calderero desengrasa y decapa el cobre con cloruro de amonio (fundente), calienta la pieza y extiende estaño virgen fundido con un tapón de estopa o lino. A nivel microscópico, se genera una zona de unión intermetálica extremadamente adherente compuesta por fases de Cu6Sn5 y Cu3Sn. Sin embargo, la capa superficial de estaño puro libre tiene una limitación termomecánica crítica: su punto de fusión es de apenas 231,9 °C (449,4 °F). En un fogón de gas o inducción de alta potencia, una sartén vacía alcanza los 250 °C en menos de 90 segundos. A esa temperatura, el estaño se licúa instantáneamente, formando microperlas que se oxidan a dióxido de estaño (SnO2) y dejan al descubierto el cobre subyacente. Por este motivo, el menaje estañado jamás debe someterse a precalentamiento en seco ni a técnicas de sellado de carnes a fuego vivo.',
        type: 'warning',
        boxText: 'El estaño se funde a 231,9 °C. Calentar una cazuela de cobre vacía en el fuego licúa el revestimiento en cuestión de segundos, exponiendo el metal base.'
      },
      {
        title: '2. Química del Cardenillo: Formación de Carbonato Básico de Cobre [Cu2(OH)2CO3] y Acetato Cúprico en Medios Ácidos',
        content: 'Cuando el cobre metálico queda al desnudo, no se corroe formando óxidos inertes ordinarios. En presencia de oxígeno atmosférico, humedad y dióxido de carbono, la superficie se oxida formando una costra higroscópica verde-azulada conocida como cardenillo o verdigris. Químicamente, el cardenillo culinario es una mezcla compleja dominada por carbonato básico de cobre [CuCO3·Cu(OH)2], malaquita sintética y, en presencia de vapores de vinagre o vino, acetato de cobre dihidratado [Cu(CH3COO)2·2H2O]. Al verter ingredientes ácidos (pH < 4,5) como salsas de tomate, zumo de limón, vino o marinadas sobre esta pátina, los iones hidronio (H⁺) disuelven de forma vertiginosa el complejo insoluble: Cu2(OH)2CO3 + 4H⁺ → 2Cu²⁺ + CO2↑ + 3H2O. Esta reacción vierte en el guiso concentraciones masivas de cationes cúpricos solubles (Cu²⁺), dotando a la comida de un regusto metálico amargo y una toxicidad inmediata.',
        type: 'warning',
        boxText: 'El cardenillo verde (carbonato y acetato de cobre) se disuelve instantáneamente en salsas ácidas (tomate, vino, limón), inundando el plato de iones Cu²⁺ tóxicos.'
      },
      {
        title: '3. Toxicología Médica de la Ingesta de Cobre: Absorción Duodenal, Estrés Oxidativo (Fenton) y Toxicosis Cúprica Aguda',
        content: 'El ion cobre (Cu²⁺) es un oligoelemento esencial para la citocromo c oxidasa y la superóxido dismutasa, pero en estado libre es un catalizador tóxico de radicales libres mediante la reacción tipo Haber-Weiss/Fenton. Cuando se ingiere una dosis aguda de cobre disuelto superior a 15–30 mg (una sola comida en cobre deteriorado puede lixiviar más de 50 mg), los iones cúpricos corroen la mucosa gástrica y duodenal. El cuadro clínico debuta de forma fulminante (15 a 60 minutos tras la ingesta) con náuseas incoercibles, dolor cólico epigástrico urente, vómitos característicos de color azul verdoso o hematemesis, seguidos de diarrea acuosa profusa. A nivel sistémico, la saturación de la ceruloplasmina plasmática libera cobre iónico libre en el torrente sanguíneo, desencadenando hemólisis intravascular aguda, metahemoglobinemia, necrosis tubular renal aguda e insuficiencia hepática centrolobulillar grave. En pacientes con enfermedad de Wilson (trastorno de excreción biliar de cobre por mutación en ATP7B), cualquier exposición de este tipo resulta potencialmente letal.',
        type: 'warning',
        boxText: 'La ingesta de cobre lixiviado provoca vómitos verdosos, espasmos gástricos y hemólisis; los pacientes con enfermedad de Wilson enfrentan riesgo mortal.'
      },
      {
        title: '4. El Protocolo de Inspección de la "Regla de la Moneda": Cuándo Reestañar y Cuándo Retirar la Pieza',
        content: 'Para determinar si una cazuela o sauté de cobre estañado sigue siendo apta para el contacto alimentario, la inspección visual periódica es obligatoria: 1) Limpieza neutra previa: Lave la pieza con agua tibia y jabón neutro para despejar grasas carbonizadas (el estaño viejo adquiere un tono gris oscuro o pizarra que es químicamente inofensivo y no debe confundirse con cobre expuesto). 2) Examen de desgaste ("Regla de la Moneda"): Examine el fondo y las paredes interiores. Si el color cobrizo anaranjado o rosado del cobre desnudo aflora a través del estaño en parches dispersos que sumados superen la superficie de una moneda de 1 euro o 2 euros (aproximadamente 1 cm² a 2 cm²), la pieza ha perdido su barrera protectora funcional. 3) Presencia de puntos de corrosión verde: Cualquier cristal verde de cardenillo en el interior inhabilita la olla para cocinar hasta su neutralización con ácido acético/sal y posterior reestañado profesional completo.',
        type: 'tip',
        boxText: 'El estaño oxidado gris oscuro es seguro; pero si ve manchas de cobre anaranjado del tamaño de una moneda de 1 euro, la olla debe reestañarse de inmediato.'
      },
      {
        title: '5. Buenas Prácticas Culinarias y Normas de Reestañado Artesanal: Especificación de Estaño Virgen (ASTM B339)',
        content: 'El reestañado tradicional es una práctica de economía circular excepcional, pero exige rigor toxicológico: 1) Calidad del metal aportado: Exija siempre a su artesano calderero certificación de estaño virgen grado alimentario (>99,75% de pureza conforme a ASTM B339 o BS EN 610), verificando que el contenido de plomo sea inferior al 0,01% (antiguamente se añadía plomo para abaratar la soldadura). 2) Utensilios y mantenimiento: En sartenes estañadas utilice exclusivamente espátulas de madera de haya o silicona platino; jamás use batidores de varillas de acero, tenedores o cucharas metálicas, cuya dureza raya el estaño blando (dureza Mohs del estaño ≈ 1,5–1,8 vs cobre ≈ 3,0). 3) Control de temperatura: Cocine siempre a fuego moderado, añadiendo siempre grasa o líquido antes de encender el quemador. No sobrepase nunca los 200 °C.',
        type: 'info',
        boxText: 'Exija siempre estaño virgen certificado (>99,75% Sn, sin plomo). Use solo utensilios de madera o silicona para preservar la capa durante décadas.'
      }
    ],
    conclusion: 'El menaje de cobre estañado ofrece un control culinario sublime pero demanda disciplina en el control térmico y el mantenimiento de su revestimiento. El estaño actúa como un escudo biocompatible frente a la toxicidad del cobre, pero su bajo punto de fusión (231,9 °C) no tolera precalentamientos vacíos ni fuegos agresivos. Supervise el estado interior aplicando la regla de la moneda: en cuanto asomen zonas cobrizas mayores a 1 cm² o cualquier traza de cardenillo, retire la pieza y confíela a un estañador profesional con certificación de estaño virgen libre de plomo.',
    faqs: [
      {
        question: '¿Por qué el interior de mi cazuela de cobre estañada se volvió gris oscuro casi negro?',
        answer: 'El oscurecimiento gradual del estaño a un tono gris pizarra es un fenómeno de pasivación natural debido a la formación de óxidos de estaño superficiales estables. Es completamente inocuo, no transfiere sabor y no requiere reestañado, siempre y cuando no asome el cobre anaranjado de fondo.'
      },
      {
        question: '¿Se puede eliminar el cardenillo verde frotando con sal y vinagre y seguir cocinando?',
        answer: 'Frotar con una pasta de vinagre y sal disuelve el cardenillo superficial, pero deja el cobre desnudo y desprotegido al descubierto. Si cocina de nuevo en esa zona desnuda, los alimentos ácidos volverán a lixiviar cobre iónico tóxico. Limpiar el cardenillo es solo el paso previo indispensable antes de mandar la pieza al taller de reestañado.'
      },
      {
        question: '¿Qué diferencia de seguridad hay entre el cobre revestido con estaño y el forrado con acero inoxidable?',
        answer: 'El cobre con lámina interior de acero inoxidable (bi-metal como Mauviel 150s o Falk Culinair) es indestructible al calor normal y no se funde a 231 °C, permitiendo sellar carnes a fuego vivo. Sin embargo, no se puede reparar si se despega. El cobre estañado es más antiadherente natural y se puede reestañar infinitas veces, pero requiere fuego bajo o medio.'
      },
      {
        question: '¿Puede un restaurante profesional utilizar ollas de cobre sin revestimiento?',
        answer: 'Las normativas sanitarias (como el Código Alimentario de la FDA y directivas de la UE) prohíben taxativamente cocinar alimentos con pH inferior a 6,0 en recipientes de cobre desnudo. El cobre sin revestir solo está autorizado para confitería de alto contenido de azúcar (almíbares, mermeladas, caramelización de fruta) y montado de claras a punto de nieve (donde el cobre estabiliza la conalbúmina).'
      },
      {
        question: '¿Cuáles son los primeros auxilios ante una sospecha de intoxicación por comida cocinada en cobre con cardenillo?',
        answer: 'Suspenda de inmediato la ingesta del alimento. No induzca el vómito si hay quemazón esofágica intensa. Acuda de urgencia a un centro hospitalario aportando muestra del alimento o describiendo el recipiente. El tratamiento médico incluye lavado gástrico, protectores de mucosa y, en casos de absorción sistémica grave, agentes quelantes específicos como la D-penicilamina.'
      }
    ],
    relatedTools: [
      {
        name: 'Modelador de Toxicidad y Lixiviación en Menaje de Cobre',
        url: '/es/tools/copper-cookware-toxicity-modeler/'
      },
      {
        name: 'Marcador de Metales Pesados y Lixiviación Tóxica',
        url: '/es/tools/toxic-leaching-scorecard/'
      },
      {
        name: 'Índice de Transparencia de Marcas de Menaje de Cocina',
        url: '/es/tools/cookware-brand-transparency-index/'
      }
    ],
    relatedComparisons: [
      {
        name: 'Comparativa de Cobre Estañado vs Cobre Forrado de Inox',
        url: '/es/compare/tin-lined-vs-stainless-lined-copper/'
      },
      {
        name: 'Comparativa de Menaje de Cobre vs Acero Inoxidable',
        url: '/es/compare/copper-vs-stainless-steel-cookware/'
      },
      {
        name: 'Comparativa de Fondo de Cobre vs Acero Inoxidable Tri-Ply',
        url: '/es/compare/copper-core-vs-tri-ply-stainless-steel/'
      }
    ]
  },
  {
    slug: 'stainless-steel-nickel-chromium-acid-leaching-safety',
    title: 'Lixiviación de Níquel y Cromo en Acero Inoxidable con Alimentos Ácidos: Límites SRL del Consejo de Europa, Síndrome SNAS y Alternativas Grado 430',
    excerpt: '¿Cocinar salsa de tomate o reducciones de vinagre en ollas de acero inoxidable libera níquel y cromo tóxicos? Conozca la cinética de disolución ácida, los límites SRL (CM/Res(2013)9) y la protección para alérgicos.',
    description: 'Estudio exhaustivo sobre la lixiviación de metales pesados en acero inoxidable: aleaciones 304, 316 y 430, límites europeos de liberación específica (SRL) y mitigación del síndrome de alergia al níquel.',
    summary: 'El acero inoxidable 304/316 contiene níquel y cromo protegidos por una capa pasiva de Cr2O3. Cocciones ácidas prolongadas disuelven esta capa lixiviando Ni²⁺ y Cr³⁺. El menaje nuevo libera hasta 10 veces más metales que el usado.',
    date: waveDate,
    readTime: '9 min de lectura',
    author: 'IsItKitchenSafe',
    keyTakeaways: [
      'El acero inoxidable austenítico 304 (18/10) contiene un 8–10,5% de níquel y un 18–20% de cromo; el ferrítico 430 carece prácticamente de níquel (<0,5% Ni).',
      'Hervir salsas ácidas (tomate, vino, limón, vinagre, pH 3,0–3,8) a 100 °C durante 2 a 6 horas corroe la micropelícula de Cr2O3, lixiviando iones de níquel (Ni²⁺) y cromo trivalente (Cr³⁺).',
      'La Resolución CM/Res(2013)9 del Consejo de Europa establece Límites de Liberación Específica (SRL) estrictos: 0,14 mg/kg de alimento para Níquel y 0,25 mg/kg para Cromo.',
      'Las ollas de acero inoxidable a estrenar liberan entre 5 y 10 veces más metales en sus primeros 2–3 usos; hervir agua con un 5% de vinagre antes del primer uso acelera la pasivación protectora.',
      'Las personas diagnosticadas de Síndrome de Alergia Sistémica al Níquel (SNAS) o eccema dishidrótico deben priorizar ollas de acero 430 sin níquel, vidrio borosilicatado o hierro esmaltado.'
    ],
    intro: 'El acero inoxidable se erige como el estándar de oro en la cocina contemporánea gracias a su resistencia mecánica, acabado inalterable y aparente neutralidad química. Sin embargo, desde una perspectiva de ciencia de materiales y toxicología alimentaria, el acero inoxidable no es químicamente inerte. Las aleaciones más populares en menaje culinario —el acero austenítico AISI 304 (etiquetado comúnmente como 18/8 o 18/10) y el AISI 316— contienen concentraciones sustanciales de níquel (8% a 10,5%) y cromo (18% a 20%). Su resistencia a la corrosión depende exclusivamente de una finísima película pasiva de óxido de cromo (Cr2O3) de 1 a 3 nanómetros de espesor. Cuando se someten a cocciones prolongadas de salsas ácidas con alto contenido en cloruros (sal de mesa), esta película pasiva sufre microdisolución y corrosión por picaduras, transfiriendo iones metálicos solubles al alimento en concentraciones reguladas por las autoridades sanitarias.',
    sections: [
      {
        title: '1. Metalurgia y Pasivación: Estructura Austenítica (304/316) vs Ferrítica (430) y Formación del Film de Cr2O3',
        content: 'El acero inoxidable para cocción se clasifica según su microestructura cristalográfica. Las series austeníticas 300 (AISI 304 con 18% Cr y 8–10% Ni; AISI 316 con 16–18% Cr, 10–14% Ni y 2–3% Mo) deben su estructura cúbica centrada en las caras (FCC) al níquel, que estabiliza la fase austenítica a temperatura ambiente, otorgando ductilidad y brillo. Por el contrario, la serie ferrítica 400 (como AISI 430, con 16–18% Cr y <0,5% Ni) presenta una red cúbica centrada en el cuerpo (BCC), carece de níquel y es magnética. En ambos casos, la resistencia a la oxidación depende de la presencia de más del 10,5% de cromo en solución sólida, el cual reacciona espontáneamente con el oxígeno formando una película nanométrica pasivada de óxido de cromo (Cr2O3). No obstante, este film es susceptible a la reducción ácida y al ataque electroquímico por iones cloruro (Cl⁻).',
        type: 'info',
        boxText: 'El acero 304 (18/10) contiene un 8–10% de níquel para lograr flexibilidad; el acero 430 es ferrítico, magnético y prácticamente libre de níquel.'
      },
      {
        title: '2. Cinética de Lixiviación Ácida: Temperatura, Tiempo de Ebullición (2–6 h) y Corrosión por Picaduras por Cloruros',
        content: 'La transferencia de iones metálicos desde la pared de la olla hacia el alimento sigue una cinética termodinámica dependiente del pH, el tiempo y la temperatura. Al cocinar salsas de tomate (pH 3,8–4,3), escabeches o ragús al vino (pH 3,2–3,5) a temperaturas de ebullición (100 °C), los iones hidronio atacan los microdefectos de la capa de óxido de cromo. La adición prematura de sal común (NaCl) en agua fría empeora radicalmente la situación: los aniones cloruro se adsorben en las microgrietas del metal, impidiendo la repolimerización del oxígeno y provocando corrosión localizada por picaduras (pitting). Ensayos controlados demuestran que tras 6 horas de cocción ácida continua, la liberación de níquel puede alcanzar de 0,10 a 0,35 mg/kg, y la de cromo entre 0,15 y 0,45 mg/kg, alcanzando o rebasando los umbrales europeos de seguridad.',
        type: 'warning',
        boxText: 'Cocer salsas de tomate durante varias horas y añadir sal con agua fría perfora la película pasiva por cloruros, disparando la liberación de níquel y cromo.'
      },
      {
        title: '3. Normativa Internacional: Límites de Liberación Específica (SRL) del Consejo de Europa CM/Res(2013)9',
        content: 'Para salvaguardar la salud pública frente a metales lixiviables de artículos culinarios, el Consejo de Europa promulgó la directriz técnica de referencia CM/Res(2013)9 sobre metales y aleaciones para contacto con alimentos. Esta directiva establece los Límites de Liberación Específica (SRL, Specific Release Limits) analizados mediante disolución simulada con ácido cítrico al 0,5% (pH 2,4) a 100 °C durante 2 horas: el SRL para Níquel es de 0,14 mg/kg de alimento (o simulante) y para Cromo es de 0,25 mg/kg. La Autoridad Europea de Seguridad Alimentaria (EFSA) fijó la Ingesta Diaria Tolerable (TDI) de níquel en 13 µg/kg de peso corporal. Para una persona de 60 kg, una sola porción de salsa de tomate intensamente cocinada en menaje nuevo puede aportar más del 50% de la TDI máxima admisible.',
        type: 'info',
        boxText: 'La normativa europea fija un límite estricto de lixiviación (SRL) de 0,14 mg/kg para níquel y 0,25 mg/kg para cromo en contacto con alimentos.'
      },
      {
        title: '4. Toxicología Clínica: Síndrome de Alergia Sistémica al Níquel (SNAS) y Especies de Cromo (Cr³⁺ vs Cr⁶⁺)',
        content: 'El níquel es el alérgeno por contacto más prevalente en la población occidental (afecta al 10–15% de mujeres y 2–4% de varones). En individuos sensibilizados, la ingesta oral de níquel dietético desencadena el Síndrome de Alergia Sistémica al Níquel (SNAS), manifestándose como eccema dishidrótico vesicular en palmas de manos y dedos, prurito generalizado, reflujo, distensión abdominal y fatiga crónica. En cuanto al cromo lixiviado en cocina, la evidencia analítica confirma que se desprende casi exclusivamente en forma de ion cromo trivalente (Cr³⁺), un catión de muy baja absorción intestinal y prácticamente no tóxico en estas concentraciones. La forma cancerígena y altamente oxidante, el cromo hexavalente (Cr⁶⁺), no se forma en las condiciones reductoras culinarias normales de una matriz alimentaria con materia orgánica.',
        type: 'warning',
        boxText: 'El níquel dietético desencadena brotes de eccema dishidrótico y molestias gástricas en personas alérgicas (SNAS); el cromo desprendido es Cr³⁺, no el temido Cr⁶⁺.'
      },
      {
        title: '5. Protocolo de Pasivación Previa y Alternativas Seguras para Personas Sensibles al Níquel',
        content: 'Para minimizar la exposición a metales pesados en la cocina diaria: 1) Pasivación del menaje nuevo: Antes del primer uso de una olla de acero inoxidable, llénela de agua con un 10% de vinagre blanco o zumo de limón y hiérvala a fuego medio durante 30 minutos. Deseche el líquido y lave la olla; esto elimina las micropartículas metálicas residuales del pulido industrial y genera una capa pasivada densa de Cr2O3. 2) Regla de la sal: Añada sal únicamente cuando el agua ya esté hirviendo activamente y remueva de inmediato para que los cristales de cloruro sódico se disuelvan sin posarse en el fondo. 3) Alternativa Grado 430: Los pacientes con SNAS diagnosticado deben cambiar su menaje de cocción a sartenes de acero ferrítico AISI 430 (libre de níquel), hierro fundido esmaltado vitrificado o vidrio borosilicatado.',
        type: 'tip',
        boxText: 'Hierva agua con vinagre durante 30 minutos en cualquier olla de acero inoxidable a estrenar para pasivar el metal y frenar la lixiviación inicial de níquel.'
      }
    ],
    conclusion: 'El acero inoxidable continúa siendo uno de los materiales más higiénicos y polivalentes de la gastronomía mundial, pero su inocuidad dista de ser absoluta en cocciones ácidas lentas. Las aleaciones clásicas 304 y 316 desprenden níquel y cromo medibles que disminuyen tras varios ciclos de uso y pasivación. Para la población sana, la lixiviación se mantiene dentro de los márgenes SRL; no obstante, para los pacientes con alergia al níquel (SNAS), sustituir las piezas por acero inoxidable ferrítico 430 o hierro fundido esmaltado es una medida médica preventiva indispensable.',
    faqs: [
      {
        question: '¿Por qué mi olla nueva de acero inoxidable dejó un caldo con sabor metálico la primera vez?',
        answer: 'El menaje nuevo presenta microporosidades mecánicas y microresiduos de pulido industrial ricos en níquel y cromo libres. Durante las 2 o 3 primeras cocciones ácidas, la lixiviación puede ser hasta 10 veces mayor que en una olla madura. Hervir agua con vinagre antes de estrenarla soluciona este inconveniente pasivando la superficie.'
      },
      {
        question: '¿Cómo puedo comprobar en casa si mi batería de cocina de acero tiene níquel?',
        answer: 'Utilice un imán doméstico potente. Si el imán se adhiere con firmeza al fondo y a las paredes laterales de la olla, se trata de acero ferrítico (serie 400, como AISI 430, libre de níquel). Si el imán no se pega en las paredes laterales, es acero austenítico (serie 300, como AISI 304 o 316, cargado con 8–10% de níquel).'
      },
      {
        question: '¿Cocinar en acero inoxidable 316 libera menos metales que en 304?',
        answer: 'El acero 316 contiene un 2–3% de molibdeno, lo que le confiere una resistencia superior frente a la corrosión por picaduras por sal (cloruros). Aunque resiste mejor los ácidos con sal, su contenido en níquel (10–14%) es incluso mayor que en el 304, por lo que sigue liberando trazas de níquel si la película se ve comprometida.'
      },
      {
        question: '¿Es peligroso dejar comida ácida guardada en la olla de acero inoxidable dentro del frigorífico?',
        answer: 'Sí, no es una práctica recomendable. El contacto prolongado durante 24–72 horas con salsas ácidas y saladas rompe la película de pasivación incluso a baja temperatura, duplicando o triplicando la concentración de iones de níquel y cromo en el alimento. Trasvase siempre las sobras a recipientes de vidrio herméticos.'
      },
      {
        question: '¿El cromo desprendido por el acero inoxidable es cancerígeno como el de las películas industriales?',
        answer: 'No. El cromo peligroso y carcinógeno es el cromo hexavalente [Cr(VI)], originado en procesos galvánicos e industriales agresivos. Los estudios toxicológicos demuestran que el cromo lixiviado en cocina se encuentra exclusivamente en estado trivalente [Cr(III)], que carece de poder mutagénico y posee una absorción gastrointestinal inferior al 1%.'
      }
    ],
    relatedTools: [
      {
        name: 'Marcador de Metales Pesados y Lixiviación Tóxica',
        url: '/es/tools/toxic-leaching-scorecard/'
      },
      {
        name: 'Índice de Transparencia de Marcas de Menaje de Cocina',
        url: '/es/tools/cookware-brand-transparency-index/'
      },
      {
        name: 'Simulador de Choque Térmico y Fractura en Vidrio y Esmalte',
        url: '/es/tools/thermal-shock-simulator/'
      }
    ],
    relatedComparisons: [
      {
        name: 'Comparativa de Acero Inoxidable 304 vs 316',
        url: '/es/compare/304-vs-316-stainless-steel-cookware/'
      },
      {
        name: 'Comparativa de Menaje de Cobre vs Acero Inoxidable',
        url: '/es/compare/copper-vs-stainless-steel-cookware/'
      },
      {
        name: 'Comparativa de Acero Inoxidable vs Hierro Esmaltado',
        url: '/es/compare/stainless-steel-vs-enamel-cookware/'
      }
    ]
  },
  {
    slug: 'pewter-vintage-cookware-lead-toxicity-safety',
    title: 'Toxicidad por Plomo en Menaje de Peltre Vintage: Aleaciones Históricas (15–40% Pb), Extracción por Bebidas Ácidas y Normas Modernas Libres de Plomo',
    excerpt: '¿Es peligroso beber vino o sidra en jarras de peltre antiguo? Descubra la metalurgia del peltre con plomo, la formación de acetato de plomo ("azúcar de plomo"), los límites de neurotoxicidad de los CDC y los métodos de detección.',
    description: 'Guía pericial sobre el riesgo toxicológico del menaje de peltre antiguo: composición histórica con plomo, cinética de extracción por ácidos culinarios, síntomas de saturnismo y pautas de ensayo.',
    summary: 'El peltre antiguo fabricado antes de 1970 contenía hasta un 40% de plomo. Bebidas ácidas como vino, sidra o cerveza disuelven el plomo formando acetato de plomo neurotóxico. El menaje de peltre vintage debe relegarse exclusivamente a decoración.',
    date: waveDate,
    readTime: '9 min de lectura',
    author: 'IsItKitchenSafe',
    keyTakeaways: [
      'El peltre tradicional y vintage fabricado antes de 1970 solía contener entre un 15% y un 40% de plomo metálico (Pb) aleado con estaño (Sn) y antimonio (Sb) para abaratar costes y mejorar la colada.',
      'El peltre culinario contemporáneo regulado (normas BS EN 611-1 y ASTM B560) es obligatoriamente libre de plomo, con una concentración máxima residual inferior al 0,05% (<500 ppm Pb).',
      'Las bebidas ácidas (vino, sidra, cerveza, zumos de frutas, ponches, vinagre, pH < 4,2) disuelven con rapidez el plomo de las jarras y copas de peltre antiguo, formando acetato de plomo ("azúcar de plomo"), una sal altamente soluble y de sabor dulzón.',
      'El plomo es una neurotoxina sistémica bioacumulable sin umbral seguro de exposición; los CDC establecen un valor de referencia en sangre (BLRV) de 3,5 µg/dL debido a sus graves daños cognitivos, renales y cardiovasculares.',
      'Identificación en casa: pátina gris oscura mate, tacto blando y pesado, sonido sordo al golpe suave y reacción positiva con hisopos reactivos de rodizonato sódico. Las piezas antiguas deben jubilarse definitivamente del uso culinario.'
    ],
    intro: 'El peltre tradicional (pewter) ha sido una de las aleaciones más omnipresentes en la vajilla europea y americana desde la época medieval hasta el siglo XX, apreciado por su maleabilidad, brillo plateado similar a la plata fina y coste asequible. Sin embargo, bajo la apariencia inocua de jarras cerveceras, platos ornamentales, copas y teteras familiares heredadas, se esconde uno de los riesgos de toxicología culinaria más insidiosos. Hasta la implantación de las directivas sanitarias modernas en la década de 1970, el peltre comercial no era estaño puro, sino una aleación cargada con hasta un 40% de plomo elemental (Pb). Cuando estos recipientes vintage entran en contacto con bebidas o alimentos ligeramente ácidos —como vino, sidra fermentada, zumos cítricos o salsas a base de vinagre—, el plomo se disuelve formando sales altamente solubles que se ingieren inadvertidamente, desencadenando saturnismo crónico y secuelas neurológicas irreversibles.',
    sections: [
      {
        title: '1. Metalurgia del Peltre a Través de la Historia: Peltre Fino vs "Metal Negro" (15%–40% Pb) y Estándares Modernos',
        content: 'Históricamente, los gremios de caldereros y estañadores clasificaban el peltre en tres calidades: 1) "Peltre fino" (Fine Pewter), reservado para cubiertos de élite (80–90% Sn, 10–20% Cu y Sb, con poco plomo). 2) "Peltre común" (Trifle Pewter), para jarras y platos habituales (unos 82% Sn y 18% Pb). 3) "Metal negro" o peltre de baja calidad (Ley Metal o Black Metal), empleado masivamente en tabernas para copas y jarrones económicos, que incorporaba entre un 25% y un 40% de plomo para abaratar el coste del estaño y rebajar el punto de fusión de colada. No fue hasta finales del siglo XX cuando normativas internacionales como la BS EN 611-1 europea y la ASTM B560 estadounidense vetaron estrictamente el plomo en peltre de uso culinario, fijando composiciones modernas de >91% estaño, 6–8% antimonio, 1–2% cobre y un límite de plomo inferior al 0,05% (500 ppm).',
        type: 'info',
        boxText: 'El peltre común y de taberna anterior a 1970 contenía habitualmente entre un 20% y un 40% de plomo puro para reducir costes.'
      },
      {
        title: '2. Mecánica de Lixiviación Ácida: Vino, Sidra y la Formación de Acetato de Plomo ("Azúcar de Plomo")',
        content: 'El plomo es termodinámicamente reactivo frente a ácidos orgánicos débiles. Cuando se vierte vino tinto o blanco (ácidos tartárico, málico y acético, pH 3,0–3,6), sidra de manzana (ácido málico, pH 3,3) o cerveza artesanal (ácidos láctico y carbónico, pH 4,0–4,5) en una copa o jarra de peltre con plomo, se desencadena una reacción redox espontánea en la interfaz metal-líquido: Pb(s) + 2H⁺(aq) → Pb²⁺(aq) + H2(g). En presencia de restos de ácido acético, se sintetiza acetato de plomo(II) trihidratado [Pb(CH3COO)2·3H2O], apodado históricamente "azúcar de plomo" por su sabor marcadamente dulce. Este compuesto disimula el amargor del metal y confiere una dulzura apetecible a la bebida, ocultando el hecho de que una sola jarra de sidra reposada 30 minutos en peltre vintage puede lixiviar más de 1.000 a 5.000 µg de plomo biodisponible.',
        type: 'warning',
        boxText: 'Los ácidos del vino y la sidra transforman el plomo del peltre en acetato de plomo ("azúcar de plomo"), un veneno dulce altamente soluble.'
      },
      {
        title: '3. Toxicología Médica del Plomo: Neurotoxicidad Sin Umbral, Bioacumulación Ósea y Saturnismo',
        content: 'A diferencia de otros metales traza, el plomo carece de función biológica en el organismo y es catalogado por la OMS como una de las diez sustancias químicas de mayor preocupación para la salud pública. No existe nivel de plomo en sangre considerado seguro: los CDC fijan su Valor de Referencia en Sangre (BLRV) en apenas 3,5 µg/dL. Una vez absorbido por los transportadores intestinales de calcio (DMT1 y CaT1), el plomo compite con el catión calcio (Ca²⁺), atravesando la barrera hematoencefálica e inhibiendo enzimas clave como la ácido delta-aminolevulínico deshidratasa (ALAD) y la ferroquelatasa, impidiendo la síntesis del grupo hemo. La intoxicación por plomo (saturnismo) se manifiesta clínicamente con cólicos abdominales intensos ("cólico saturnino"), cefaleas, neuropatía periférica motora (debilidad de muñecas y pies), anemia microcítica y nefrotoxicidad crónica. En niños y fetos, incluso microdosis provocan déficit cognitivo irreversible, pérdida permanente de CI y trastornos de conducta.',
        type: 'warning',
        boxText: 'El plomo no tiene umbral seguro; sustituye al calcio celular, daña irreversiblemente el cerebro de los niños y destruye el tejido renal.'
      },
      {
        title: '4. Diagnóstico e Identificación de Piezas con Plomo: Pátina, Densidad y Métodos de Ensayo con Hisopos Químicos',
        content: '¿Cómo identificar si una pieza heredada de peltre encierra plomo tóxico? 1) Examen visual de la pátina: El peltre sin plomo envejece manteniendo un tono grisáceo claro plateado brillante. El peltre con alto contenido en plomo desarrolla con los años una pátina mate oscura, gris plomizo o negruzca, con manchas moteadas y tacto graso o sedoso. 2) Prueba acústica y de masa: El plomo añade una alta densidad física (11,34 g/cm³ vs estaño 7,31 g/cm³); una copa con plomo pesa sensiblemente más de lo esperado y, al golpearla suavemente con un bolígrafo de plástico, emite un "cloc" sordo y apagado sin resonancia, a diferencia del peltre moderno que produce un ligero tintineo cristalino. 3) Ensayo químico con hisopo de rodizonato sódico: Rasque suavemente una zona discreta de la base y frote con un hisopo reactivo comercial de rodizonato sódico; una mutación de color rosa brillante o rojo escarlata confirma la presencia masiva de plomo libre lixiviable.',
        type: 'tip',
        boxText: 'El peltre oscuro y pesado que emite un golpe sordo suele contener plomo. Un hisopo de rodizonato que vira a rojo confirma la toxicidad.'
      },
      {
        title: '5. Protocolo de Seguridad en la Cocina: Retirada Definitiva del Menaje Vintage a Función Exclusivamente Decorativa',
        content: 'Si posee piezas de peltre vintage o heredadas en su hogar, aplique la siguiente directiva de bioseguridad: 1) Regla de jubilación culinaria absoluta: Ninguna jarra, copa, plato, bandeja o tetera de peltre fabricada antes de 1980 debe usarse jamás para servir alimentos, calentar caldos o contener bebidas (ni siquiera agua neutra). 2) Limpieza segura: Nunca introduzca piezas de peltre antiguo en el lavavajillas; los detergentes cáusticos alcalinos aceleran la disolución del plomo y contaminan la cuba del electrodoméstico y la vajilla adyacente. 3) Manipulación y exhibición: Coloque las piezas en vitrinas cerradas con fines exclusivamente ornamentales. Si son manipuladas por adultos, lávese las manos con agua y jabón inmediatamente después y manténgalas fuera del alcance absoluto de niños pequeños, quienes podrían chuparlas o ingerir micropartículas de óxido por vía mano-boca.',
        type: 'info',
        boxText: 'Retire todo el peltre previo a 1980 a vitrinas decorativas. Jamás lo lave en lavavajillas ni lo use para servir comida o bebida.'
      }
    ],
    conclusion: 'Las piezas de peltre antiguo son tesoros de innegable valor estético e histórico, pero representan un riesgo toxicológico inaceptable en la cocina moderna. La presencia de hasta un 40% de plomo en aleaciones previas a 1970 convierte cualquier brindis con vino, sidra o cerveza en una dosis de neurotoxina soluble. Diferencie siempre el peltre moderno certificado y libre de plomo de las piezas vintage familiares: verifique con hisopos de rodizonato y reserve sus reliquias de peltre exclusivamente como joyas decorativas de vitrina, lejos de cualquier contacto culinario.',
    faqs: [
      {
        question: '¿Puedo beber agua fría ocasionalmente en una jarra de peltre heredada de mis abuelos?',
        answer: 'No es seguro. Aunque el agua fría neutra disuelve el plomo más despacio que el vino o la sidra, las aguas de grifo ligeramente ácidas o con cloro libre también extraen plomo. Además, el plomo se acumula en los huesos durante décadas; ningún nivel de ingestión es seguro.'
      },
      {
        question: '¿Hervir agua o lavar la jarra de peltre con jabón elimina el plomo para siempre?',
        answer: 'No. El plomo no es un recubrimiento superficial ni una suciedad que se pueda lavar, sino un componente elemental que integra toda la masa de la aleación metálica. Cada vez que el líquido toque el metal, nuevos átomos de plomo se disolverán en él.'
      },
      {
        question: '¿Cómo sé si una jarra de peltre comprada en un mercado de antigüedades es moderna o antigua?',
        answer: 'Inspeccione las marcas de contraste en la base (touchmarks). El peltre contemporáneo seguro suele llevar inscripciones como "Lead-Free", "Zinn 95%", "Pewter 92%" o sellos de asociaciones internacionales reconocidas (como la American Pewter Guild o marcas de pureza europeas). Si no tiene sello, tiene tono gris oscuro mate o data de antes de 1970, asuma que contiene plomo.'
      },
      {
        question: '¿Es seguro poner frutas secas o pan en un plato decorativo de peltre antiguo?',
        answer: 'Los alimentos secos y sin acidez presentan menor lixiviación que los líquidos, pero el roce mecánico de panes o frutas puede desprender micropartículas pulverulentas de óxido de plomo que se adhieren a la comida. Es preferible no emplearlo para ningún tipo de alimento.'
      },
      {
        question: '¿Qué fiabilidad tienen los hisopos de rodizonato sódico que se venden por internet para probar peltre?',
        answer: 'Los hisopos de rodizonato sódico reconocidos por agencias ambientales (como la EPA) son altamente sensibles para detectar plomo lixiviable en concentraciones superiores a 500–1000 ppm. Si el hisopo pasa de amarillo a rojo intenso tras frotar la superficie limpia, la pieza contiene una concentración peligrosa de plomo metálico.'
      }
    ],
    relatedTools: [
      {
        name: 'Marcador de Metales Pesados y Lixiviación Tóxica',
        url: '/es/tools/toxic-leaching-scorecard/'
      },
      {
        name: 'Índice de Transparencia de Marcas de Menaje de Cocina',
        url: '/es/tools/cookware-brand-transparency-index/'
      },
      {
        name: 'Simulador de Choque Térmico y Fractura en Vidrio y Esmalte',
        url: '/es/tools/thermal-shock-simulator/'
      }
    ],
    relatedComparisons: [
      {
        name: 'Comparativa de Cristalería de Cristal al Plomo vs Cristal Libre de Plomo',
        url: '/es/compare/lead-free-crystal-vs-lead-crystal-glassware/'
      },
      {
        name: 'Comparativa de Menaje de Cobre vs Acero Inoxidable',
        url: '/es/compare/copper-vs-stainless-steel-cookware/'
      },
      {
        name: 'Comparativa de Cobre Estañado vs Cobre Forrado de Inox',
        url: '/es/compare/tin-lined-vs-stainless-lined-copper/'
      }
    ]
  }
];

const esBlogPath = path.resolve('src/data/blog.es.json');
const esBlogs = JSON.parse(fs.readFileSync(esBlogPath, 'utf8'));

for (const g of newGuidesEs) {
  if (!esBlogs.some(b => b.slug === g.slug)) {
    esBlogs.push(g);
    console.log(`✅ Added ES guide: ${g.slug}`);
  } else {
    console.log(`ℹ️ ES guide already present: ${g.slug}`);
  }
}

fs.writeFileSync(esBlogPath, JSON.stringify(esBlogs, null, 2) + '\n', 'utf8');
console.log(`✅ Saved src/data/blog.es.json. Total guides: ${esBlogs.length}`);

module.exports = { newGuidesEs, esGuides: newGuidesEs };
