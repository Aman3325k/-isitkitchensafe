// Enriches localized Wave 55 comparison modules with complete translated technicalSpecs
const fs = require('fs');
const path = require('path');

const localizedSpecs = {
  es: {
    "stainless-steel-vs-plastic-box-grater": [
      {
        spec: "Liberación de Partículas de Microplásticos por Fricción de Queso (ASTM D8332 / Espectrometría Raman)",
        item1Value: "0,00 partículas/porción (Matriz metálica sólida SUS304; cero desprendimiento por abrasión)",
        item2Value: "85–240 partículas/porción (Virutas de polímeros de polipropileno y ABS del roce con la tolva)",
        advantage: "El acero inoxidable elimina la contaminación por polímeros sintéticos en alimentos lácteos rallados"
      },
      {
        spec: "Límite Elástico Mecánico y Resistencia a la Flexión (ASTM E8M)",
        item1Value: "Límite elástico > 205 MPa (Cero flexión bajo 150 N de presión vertical de la palma)",
        item2Value: "Límite elástico 30–45 MPa (Torsión notable del marco, flexión y deslizamiento bajo carga)",
        advantage: "El marco rígido de acero inoxidable evita resbalones repentinos de nudillos y cortes con las cuchillas"
      },
      {
        spec: "Afilado del Filo de Corte y Retención (Índice CATRA Cutlery Sharpness)",
        item1Value: "ICP > 110 mm (Dientes afilados fotoquímicamente cortan limpiamente sin aplastar células)",
        item2Value: "ICP < 55 mm (Punzones mecánicos desgarran y machacan el queso, perdiendo aromas volátiles)",
        advantage: "Los dientes de acero fotoquímico conservan las grasas lácteas y los aceites aromáticos de los cítricos"
      }
    ],
    "stainless-steel-vs-plastic-mandoline-slicer": [
      {
        spec: "Flexión del Chasis y Rigidez de la Plataforma bajo Carga (ASTM D790)",
        item1Value: "0,02 mm de deflexión (Marco sólido de acero SUS304 laminado en frío bajo 100 N de fuerza)",
        item2Value: "3,5–6,0 mm de deflexión (La plataforma de ABS/policarbonato se hunde, trabando el alimento)",
        advantage: "El chasis metálico rígido elimina la flexión que causa resbalones peligrosos de la mano hacia la cuchilla"
      },
      {
        spec: "Tasa de Liberación de Virutas de Microplásticos (ASTM D8332 / Análisis FTIR)",
        item1Value: "0,00 partículas/kg cortado (La rampa metálica con acabado espejo electropulido no se desgasta)",
        item2Value: "120–450 virutas de microplásticos/kg (Las guías y empujadores rayan las rampas de plástico)",
        advantage: "El acero inoxidable mantiene las ensaladas y carpaccios de verduras 100% libres de microplásticos"
      },
      {
        spec: "Dureza de la Cuchilla y Retención del Filo (Escala Rockwell C - HRC)",
        item1Value: "56–58 HRC (Acero quirúrgico martensítico 420J2/SUS440; conserva el filo tras cortar 500 kg)",
        item2Value: "48–52 HRC (Cuchillas de acero estampado de baja aleación; se desafilan rápidamente)",
        advantage: "El acero templado de calidad quirúrgica ofrece cortes ultrafinos de 0,5 mm con mínimo esfuerzo"
      }
    ],
    "silicone-vs-metal-muffin-pan": [
      {
        spec: "Extracción de Siloxanos Cíclicos Volátiles y Oligómeros (Protocolo LFGB § 31 / BfR XV)",
        item1Value: "<0,1% de compuestos orgánicos volátiles (Red de adición pura de silicona 100% curada con platino)",
        item2Value: "Recubrimiento de fluoropolímeros PTFE; se desconcha y libera partículas al rayarse o sobrecalentarse",
        advantage: "La silicona platino elimina por completo la degradación de fluoropolímeros y la migración de PFAS"
      },
      {
        spec: "Conductividad Térmica y Dorado Maillard de la Corteza (Conducción de Calor de Fourier)",
        item1Value: "k ~ 0,20 W/m·K (Aislante radiante suave; bordes y bases de magdalenas tiernos y sin quemaduras)",
        item2Value: "k ~ 45–60 W/m·K (Alta conducción térmica; proporciona caramelización dorada y copetes crujientes)",
        advantage: "El metal produce copetes de panadería crujientes; la silicona muffins esponjosos y desmoldados enteros"
      },
      {
        spec: "Fuerza de Desmoldeo y Eficiencia de Extracción (ASTM D1894)",
        item1Value: "0,05 N (Los moldes elastoméricos se invierten; desmoldeo 100% íntegro sin cápsulas ni grasa)",
        item2Value: "0,85–2,40 N (Las masas se adhieren al metal; requiere cápsulas de papel desechables o engrasado)",
        advantage: "La silicona flexible elimina el coste y el desperdicio ambiental de cientos de moldes de papel anuales"
      }
    ],
    "ceramic-vs-glass-pie-dish": [
      {
        spec: "Capacidad Térmica Volumétrica e Inercia en la Masa Inferior (C_vol)",
        item1Value: "C_vol ~ 2,8–3,2 J/cm³·K (Gran masa térmica que hornea de forma constante bases de masa crujientes)",
        item2Value: "C_vol ~ 1,8–2,1 J/cm³·K (Transmite calor radiante rápido; riesgo de tostar excesivamente los bordes)",
        advantage: "La cerámica vitrificada evita la temida 'base blanda y cruda' en tartas de frutas y natillas"
      },
      {
        spec: "Umbral de Fractura por Choque Térmico (Gradiente de Temperatura Delta T)",
        item1Value: "Delta T ~ 160°C–200°C (El gres vitrificado a alta temperatura resiste el paso de frío a horno)",
        item2Value: "Delta T ~ 55°C–80°C (El vidrio sodocálcico templado puede fragmentarse sobre encimeras frías)",
        advantage: "La cerámica elimina el riesgo de rotura violenta o estallido explosivo del vidrio sodocálcico templado"
      },
      {
        spec: "Reactividad Química del Esmalte y Resistencia a Ácidos (ASTM C738 / ISO 6486)",
        item1Value: "0,00 ppm Plomo/Cadmio; esmalte vítreo no poroso inmune a los ácidos de frutas (pH 2,8–3,5)",
        item2Value: "Red vítrea de sílice completamente inerte; cero lixiviación elemental ante ácidos orgánicos",
        advantage: "Ambos materiales mantienen una neutralidad química absoluta sin aportar sabores extraños"
      }
    ],
    "stainless-steel-vs-plastic-fine-mesh-strainer": [
      {
        spec: "Extracción de Microplásticos y Fibras en Agua Hirviendo (100°C / ASTM D8332)",
        item1Value: "0,00 partículas/L (Matriz metálica austenítica SUS304 impenetrable; cero desprendimiento térmico)",
        item2Value: "1.500–12.000+ fibras de microplásticos/L (Reblandecimiento térmico de mallas de nailon 6,6 y PP)",
        advantage: "El acero inoxidable elimina el consumo diario de microplásticos al colar caldos hirviendo y té"
      },
      {
        spec: "Límite de Temperatura de Operación Continua y Resistencia a Rotura",
        item1Value: "Soporta temperaturas continuas de hasta 800°C; seguro para aceite caliente y almíbar hirviendo",
        item2Value: "Punto de reblandecimiento 90°C–110°C; se funde al contacto con aceite de fritura (>175°C)",
        advantage: "El acero inoxidable previene derrames peligrosos y quemaduras por fusión del colador con líquidos calientes"
      },
      {
        spec: "Densidad del Trenzado de Malla y Calibración de Apertura (ASTM E11)",
        item1Value: "Malla doble cruzada (<0,25 mm de apertura); resiste el prensado firme con cuchara sin desgarrarse",
        item2Value: "Monofilamento simple (<0,60 mm de apertura); se estira, deforma y separa del borde plástico",
        advantage: "La malla de acero doble crea purés sedosos y ultrafinos sin dejar pasar semillas ni fibras"
      }
    ]
  },
  pt: {
    "stainless-steel-vs-plastic-box-grater": [
      {
        spec: "Liberação de Partículas de Microplásticos por Fricção de Queijo (ASTM D8332 / Espectrometria Raman)",
        item1Value: "0,00 partículas/porção (Matriz metálica sólida SUS304; zero desprendimento por abrasão)",
        item2Value: "85–240 partículas/porção (Raspas de polímeros de polipropileno e ABS pelo atrito no compartimento)",
        advantage: "O aço inoxidável elimina a contaminação por polímeros sintéticos em laticínios ralados"
      },
      {
        spec: "Limite Elástico Mecânico e Resistência à Flexão (ASTM E8M)",
        item1Value: "Limite elástico > 205 MPa (Zero deflexão sob 150 N de pressão vertical com a palma)",
        item2Value: "Limite elástico 30–45 MPa (Torção perceptível da estrutura, flexão e deslizamento sob carga)",
        advantage: "A estrutura rígida de aço inoxidável evita escorregões repentinos dos dedos e cortes graves"
      },
      {
        spec: "Afiação e Retenção do Fio de Corte (Índice CATRA Cutlery Sharpness)",
        item1Value: "ICP > 110 mm (Lâminas fotoquímicas ultra afiadas cortam perfeitamente sem esmagar células)",
        item2Value: "ICP < 55 mm (Punções mecânicos rasgam e esmagam o queijo, perdendo aromas voláteis)",
        advantage: "Os dentes de aço fotoquímico preservam as gorduras lácteas e os óleos aromáticos cítricos"
      }
    ],
    "stainless-steel-vs-plastic-mandoline-slicer": [
      {
        spec: "Flexão do Chassi e Rigidez da Plataforma sob Carga (ASTM D790)",
        item1Value: "0,02 mm de deflexão (Chassi sólido de aço SUS304 laminado a frio sob 100 N de força)",
        item2Value: "3,5–6,0 mm de deflexão (A plataforma de ABS/policarbonato cede, travando o alimento)",
        advantage: "O chassi metálico rígido elimina a flexão que causa deslizamentos perigosos da mão rumo à lâmina"
      },
      {
        spec: "Taxa de Liberação de Raspas de Microplásticos (ASTM D8332 / Análise FTIR)",
        item1Value: "0,00 partículas/kg fatiado (A rampa metálica com acabamento espelhado eletropolido não desgasta)",
        item2Value: "120–450 lascas de microplásticos/kg (Guias plásticas e empurradores desgastam a rampa)",
        advantage: "O aço inoxidável mantém saladas e carpaccios de legumes 100% livres de microplásticos"
      },
      {
        spec: "Dureza da Lâmina e Retenção de Fio (Escala Rockwell C - HRC)",
        item1Value: "56–58 HRC (Aço cirúrgico martensítico 420J2/SUS440; mantém o fio após cortar 500 kg)",
        item2Value: "48–52 HRC (Lâminas de aço estampado simples; perdem o fio rapidamente com raízes duras)",
        advantage: "O aço temperado cirúrgico proporciona cortes ultrafinos de 0,5 mm com esforço mínimo"
      }
    ],
    "silicone-vs-metal-muffin-pan": [
      {
        spec: "Extração de Siloxanos Cíclicos Voláteis e Oligômeros (Protocolo LFGB § 31 / BfR XV)",
        item1Value: "<0,1% de compostos orgânicos voláteis (Rede de adição pura de silicone 100% curada com platina)",
        item2Value: "Revestimento com fluoropolímeros PTFE; lasca e libera partículas se riscado ou superaquecido",
        advantage: "O silicone platina elimina totalmente a degradação de fluoropolímeros e a migração de PFAS"
      },
      {
        spec: "Condutividade Térmica e Douramento Maillard da Crosta (Condução Térmica de Fourier)",
        item1Value: "k ~ 0,20 W/m·K (Isolante radiante suave; bordas e bases de muffins macias e sem queimados)",
        item2Value: "k ~ 45–60 W/m·K (Alta condução térmica; proporciona caramelização dourada e topos crocantes)",
        advantage: "O metal produz topos crocantes de padaria; o silicone garante muffins macios desenformados inteiros"
      },
      {
        spec: "Força de Desenforme e Eficiência de Extração (ASTM D1894)",
        item1Value: "0,05 N (As cavidades elastoméricas invertem-se; desenforme 100% íntegro sem formas de papel)",
        item2Value: "0,85–2,40 N (As massas aderem ao metal; requer forminhas de papel descartáveis ou muita gordura)",
        advantage: "O silicone flexível elimina o custo e o descarte ambiental de centenas de forminhas de papel ao ano"
      }
    ],
    "ceramic-vs-glass-pie-dish": [
      {
        spec: "Capacidade Térmica Volumétrica e Inércia na Massa Inferior (C_vol)",
        item1Value: "C_vol ~ 2,8–3,2 J/cm³·K (Grande massa térmica que assa de forma constante bases crocantes)",
        item2Value: "C_vol ~ 1,8–2,1 J/cm³·K (Transmite calor radiante rápido; risco de tostar excessivamente as bordas)",
        advantage: "A cerâmica vitrificada previne a massa crua e encharcada no fundo de tortas de frutas e cremes"
      },
      {
        spec: "Limite de Fratura por Choque Térmico (Gradiente de Temperatura Delta T)",
        item1Value: "Delta T ~ 160°C–200°C (Grés vitrificado a alta temperatura suporta a transição de frio para forno)",
        item2Value: "Delta T ~ 55°C–80°C (Vidro de cal sodada temperado pode fragmentar-se em bancadas frias)",
        advantage: "A cerâmica elimina o risco de estilhaçamento explosivo do vidro sodocálcico temperado"
      },
      {
        spec: "Reatividade Química do Esmalte e Resistência a Ácidos (ASTM C738 / ISO 6486)",
        item1Value: "0,00 ppm Chumbo/Cádmio; esmalte vítreo não poroso imune aos ácidos de frutas (pH 2,8–3,5)",
        item2Value: "Rede vítrea de sílica totalmente inerte; zero lixiviação elementar com ácidos orgânicos",
        advantage: "Ambos os materiais mantêm neutralidade química absoluta sem alterar os sabores dos alimentos"
      }
    ],
    "stainless-steel-vs-plastic-fine-mesh-strainer": [
      {
        spec: "Extração de Microplásticos e Fibras em Água Fervente (100°C / ASTM D8332)",
        item1Value: "0,00 partículas/L (Matriz metálica austenítica SUS304 impenetrável; zero desprendimento térmico)",
        item2Value: "1.500–12.000+ fibras de microplásticos/L (Amolecimento térmico de malhas de náilon 6,6 e PP)",
        advantage: "O aço inoxidável elimina a ingestão diária de microplásticos ao coar caldos ferventes e chás"
      },
      {
        spec: "Limite de Temperatura de Operação Contínua e Resistência a Ruptura",
        item1Value: "Suporta temperaturas contínuas de até 800°C; seguro para óleo quente e calda fervente",
        item2Value: "Ponto de amolecimento 90°C–110°C; derrete instantaneamente ao contato com óleo de fritura (>175°C)",
        advantage: "O aço inoxidável previne derramamentos perigosos e queimaduras por fusão da peneira plástica"
      },
      {
        spec: "Densidade da Trama da Malha e Calibração de Abertura (ASTM E11)",
        item1Value: "Malha dupla trançada (<0,25 mm de abertura); resiste à pressão com colher sem rasgar",
        item2Value: "Monofilamento simples (<0,60 mm de abertura); estica, deforma e solta-se da borda plástica",
        advantage: "A malha de aço dupla cria purês sedosos e ultrafinos sem deixar passar sementes ou fibras"
      }
    ]
  },
  zh: {
    "stainless-steel-vs-plastic-box-grater": [
      {
        spec: "奶酪研磨摩擦微塑料颗粒释放率（ASTM D8332 拉曼光谱测定法）",
        item1Value: "0.00 颗粒/份（致密奥氏体 SUS304 晶格结构；耐磨损零脱落）",
        item2Value: "85–240 颗粒/份（PP与ABS滑槽与旋转滚筒机械摩擦剥落聚合物碎屑）",
        advantage: "不锈钢彻底阻断了擦丝刨丝过程中的合成聚合物摄入风险"
      },
      {
        spec: "机械屈服强度与抗掌压形变能力（ASTM E8M）",
        item1Value: "屈服强度 > 205 MPa（承受150 N垂直下压力零弯曲变形）",
        item2Value: "屈服强度 30–45 MPa（承受重压时手柄晃动扭曲，极易滑脱擦伤指节）",
        advantage: "坚固的不锈钢箱体消除了刨擦坚硬根茎类蔬菜时的手滑割伤隐患"
      },
      {
        spec: "刀刃锋利度与切削持久度（CATRA Cutlery Sharpness Index）",
        item1Value: "ICP > 110 mm（光化学蚀刻微锯齿刀刃平整切削，绝不挤压破坏植物细胞壁）",
        item2Value: "ICP < 55 mm（冲压钢片与塑料框挤压撕扯食材，导致奶酪出油软化成糊状）",
        advantage: "光化学蚀刻不锈钢刀片完整保留了奶酪脂质风味与柑橘皮精油芳香"
      }
    ],
    "stainless-steel-vs-plastic-mandoline-slicer": [
      {
        spec: "切片负载下底板刚度与下沉挠度（ASTM D790）",
        item1Value: "0.02 mm 挠度（实心冷轧 SUS304 不锈钢框架在 100 N 压力下零形变）",
        item2Value: "3.5–6.0 mm 挠度（注塑 ABS/PC 导轨受压凹陷，切片中途卡顿卡刀）",
        advantage: "刚性金属底盘避免了因面板凹陷阻滞导致的危险冲手滑脱与肌腱割伤"
      },
      {
        spec: "微塑料碎屑脱落率（ASTM D8332 / FTIR 红外光谱法）",
        item1Value: "0.00 颗粒/kg（镜面电解抛光金属导轨表面抗刮擦零剥落）",
        item2Value: "120–450 条聚合物微屑/kg（推料器与金属刀片反复刮伤塑料滑槽道）",
        advantage: "不锈钢切菜机确保鲜切果蔬沙拉与生牛肉薄片达到 100% 无微塑料级别"
      },
      {
        spec: "刀刃硬度与锋利度寿命（洛氏硬度 HRC）",
        item1Value: "56–58 HRC（医用马氏体 420J2/SUS440 刀刃；切削 500 kg 食材保持锋利）",
        item2Value: "48–52 HRC（普通冲压低合金刀片；切削坚硬红薯土豆极速变钝卡顿）",
        advantage: "高硬度外科手术级不锈钢刀刃仅需轻推即可轻松切出 0.5 mm 均匀薄片"
      }
    ],
    "silicone-vs-metal-muffin-pan": [
      {
        spec: "挥发性环状硅氧烷及低聚物溶出量（LFGB § 31 / BfR XV 标准）",
        item1Value: "<0.1% 挥发性有机物（100% 铂金催化加成固化硅胶分子网络）",
        item2Value: "涂覆含氟聚合物 PTFE 涂层；受热过高或被金属刮擦后产生涂层脱落",
        advantage: "铂金硅胶彻底杜绝了特氟龙涂层降解及有毒全氟化合物（PFAS）迁移"
      },
      {
        spec: "热传导率与糕点底部美拉德褐变（傅里叶热传导定律）",
        item1Value: "k ~ 0.20 W/m·K（温和辐射绝热；蛋糕边缘软嫩均匀，无焦糊硬底）",
        item2Value: "k ~ 45–60 W/m·K（极高传导热；赋予传统烘焙标志性的金黄焦香脆顶）",
        advantage: "金属烘焙模具打造酥脆蘑菇头顶，硅胶模具适合温润无焦边的蛋托烘焙"
      },
      {
        spec: "脱模附着力与脱模效率（ASTM D1894）",
        item1Value: "0.05 N（弹性杯体底部可轻松翻转反推；无需纸托或重油即可整粒完整脱模）",
        item2Value: "0.85–2.40 N（面糊黏附金属角落；必须使用一次性纸杯或厚涂黄油防粘）",
        advantage: "高弹硅胶彻底免去了每年购买和丢弃数百个一次性烘焙纸托的浪费"
      }
    ],
    "ceramic-vs-glass-pie-dish": [
      {
        spec: "体积热容与派底酥皮热惯性（C_vol）",
        item1Value: "C_vol ~ 2.8–3.2 J/cm³·K（高蓄热陶瓷恒定辐射热量，彻底烤透酥皮底部）",
        item2Value: "C_vol ~ 1.8–2.1 J/cm³·K（光子辐射穿透快；派边上色过急而底部易残留生面）",
        advantage: "高温烧结陶瓷炻器彻底根除了深盘水果派与蛋奶派底皮发黏夹生的困扰"
      },
      {
        spec: "热震断裂温差阈值（Delta T 急冷急热温差）",
        item1Value: "Delta T ~ 160°C–200°C（高温玻化炻器承受从冰箱冷藏直接送入预热烤箱）",
        item2Value: "Delta T ~ 55°C–80°C（钢化钠钙玻璃在遇冷水或冷湿台面时存在自爆粉碎风险）",
        advantage: "高密度陶瓷彻底消除了普通钢化玻璃盘受冷爆炸碎裂飞溅的安全隐患"
      },
      {
        spec: "釉面化学反应活性与抗酸性（ASTM C738 / ISO 6486）",
        item1Value: "0.00 ppm 铅/镉溶出；无孔玻璃质保护釉完全抵抗酸性水果（pH 2.8–3.5）侵蚀",
        item2Value: "完全惰性的二氧化硅无机玻璃网络；对所有有机食用酸保持零元素溶出",
        advantage: "两种材质均维持极高的化学惰性，绝不给果馅增添任何金属劣味"
      }
    ],
    "stainless-steel-vs-plastic-fine-mesh-strainer": [
      {
        spec: "沸水过滤下微塑料颗粒与纤维析出量（100°C / ASTM D8332）",
        item1Value: "0.00 颗粒/L（致密奥氏体 SUS304 金属晶格；高温沸水零析出）",
        item2Value: "1,500–12,000+ 微塑料纤维/L（尼龙6,6及聚丙烯网丝在沸水冲刷下软化剥离）",
        advantage: "不锈钢超细滤网杜绝了过滤刚煮沸的骨汤、热面汤和浓茶时的微塑料污染"
      },
      {
        spec: "连续使用温度耐受上限与爆网抗性",
        item1Value: "耐受高达 800°C 持续高温；适用于油炸热油捞渣与沸腾糖浆过滤",
        item2Value: "软化点 90°C–110°C；接触油炸锅热油（>175°C）会发生瞬间熔穿化网",
        advantage: "全不锈钢滤网消除了塑料漏勺触碰滚油时化孔烫伤与热油飞溅的重大事故"
      },
      {
        spec: "滤网编织致密度与网孔校准规格（ASTM E11）",
        item1Value: "双层斜纹精密编织（网孔 < 0.25 mm）；承受勺子用力按压挤压果泥绝不破损",
        item2Value: "单层注塑针织单丝（网孔 < 0.60 mm）；重压下网丝拉伸变形，极易从边框脱胶",
        advantage: "双层不锈钢丝网过滤细腻如果泥浓汤，彻底隔绝细小果籽与粗纤维渣滓"
      }
    ]
  },
  ja: {
    "stainless-steel-vs-plastic-box-grater": [
      {
        spec: "チーズ研削摩擦によるマイクロプラスチック粒子脱落率（ASTM D8332 ラマン分光法）",
        item1Value: "0.00 個/食（強固な結晶性 SUS304 金属格子構造；摩耗脱落ゼロ）",
        item2Value: "85〜240 個/食（PPおよびABS製ホッパーとドラムの摩擦によるポリマー削りカス）",
        advantage: "ステンレス製おろし器はすりおろしたチーズへの合成ポリマー混入を完全に防止"
      },
      {
        spec: "機械的降伏強度と荷重たわみ耐性（ASTM E8M）",
        item1Value: "降伏強度 > 205 MPa（手のひらからの 150 N 垂直荷重下でもたわみゼロ）",
        item2Value: "降伏強度 30〜45 MPa（高荷重下でフレームが歪み、刃がブレて手滑りリスク増）",
        advantage: "頑強なステンレスボディが硬い根菜やパルメザン加工時の手滑り怪我を防止"
      },
      {
        spec: "刃先の鋭利度と切れ味維持性能（CATRA カトラリー鋭利度指数）",
        item1Value: "ICP > 110 mm（精密フォトエッチング極小刃が細胞を潰さずスパッと切断）",
        item2Value: "ICP < 55 mm（打ち抜きプレス刃が食材を押し潰し、チーズの油脂や水分が滲出）",
        advantage: "エッチングステンレス刃がチーズのコクと柑橘果皮の芳香アロマオイルを完璧に保持"
      }
    ],
    "stainless-steel-vs-plastic-mandoline-slicer": [
      {
        spec: "スライス荷重下でのデッキ剛性と下沈撓み（ASTM D790）",
        item1Value: "0.02 mm 撓み（100 N の下向き荷重下でも冷間圧延 SUS304 鋼板がビクともせず）",
        item2Value: "3.5〜6.0 mm 撓み（成型 ABS/PC デッキが押し沈み、食材が刃に引っかかり急停止）",
        advantage: "高剛性金属フレームが食材の引っかかりによる手の刃先への滑り込み事故を防止"
      },
      {
        spec: "マイクロプラスチック削りカス発生率（ASTM D8332 / FTIR 分析）",
        item1Value: "0.00 個/kg（電解研磨ミラー仕上げ金属レールは食材摩擦で削れず完全無害）",
        item2Value: "120〜450 個/kg（野菜ホルダーや刃周辺のプラスチックガイドが削れて混入）",
        advantage: "ステンレス製スライサーはサラダやカルパッチョのマイクロプラスチック混入を完全ゼロ化"
      },
      {
        spec: "刃の硬度と刃持ち寿命（ロックウェルCスケール HRC）",
        item1Value: "56〜58 HRC（医療用マルテンサイト鋼 420J2/SUS440；500 kg 切削でも鋭利維持）",
        item2Value: "48〜52 HRC（低品位プレス鋼刃；サツマイモなどの硬質根菜で早期に刃こぼれ鈍化）",
        advantage: "外科医療機器級の高硬度刃により極薄 0.5 mm の均一なスライスを軽い力で実現"
      }
    ],
    "silicone-vs-metal-muffin-pan": [
      {
        spec: "揮発性環状シロキサンおよびオリゴマー溶出（LFGB § 31 / BfR XV 基準）",
        item1Value: "<0.1% 揮発性有機化合物（100% 白金触媒付加重合シリコーン構造）",
        item2Value: "PTFEフッ素樹脂コーティング；傷や過熱によりフッ素微粒子が剥離・混入",
        advantage: "プラチナシリコーンはフッ素樹脂の熱分解や有害なPFASの溶出リスクを完全排除"
      },
      {
        spec: "熱伝導率とクラストのメイラード焼き色（フーリエの熱伝導法則）",
        item1Value: "k ~ 0.20 W/m·K（穏やかな放射断熱；焦げ付かず中までふっくら均一に焼き上げ）",
        item2Value: "k ~ 45〜60 W/m·K（高い伝導熱；ベーカリー特有の香ばしいキノコ型トップを形成）",
        advantage: "金属は香ばしい焼き目を与え、シリコーンは焦げのない繊細なエッグマフィンに最適"
      },
      {
        spec: "離型引き抜き抵抗力と型離れ効率（ASTM D1894）",
        item1Value: "0.05 N（底面を軽く押し上げるだけで崩れずスポッと 100% 綺麗に脱型可能）",
        item2Value: "0.85〜2.40 N（生地が角に焼き付きやすく、使い捨てグラシン紙や多量の油が必須）",
        advantage: "柔軟なシリコーン型は年間数百枚もの使い捨てマフィンカップのゴミを削減"
      }
    ],
    "ceramic-vs-glass-pie-dish": [
      {
        spec: "体積比熱容量とパイ底面クラストの熱慣性（C_vol）",
        item1Value: "C_vol ~ 2.8〜3.2 J/cm³·K（大きな熱質量が底生地へじっくり熱を伝えサクサクに）",
        item2Value: "C_vol ~ 1.8〜2.1 J/cm³·K（放射熱が急激に透過；縁が先に焦げて底が生焼けになりやすい）",
        advantage: "高温焼成の陶器製パイ皿はフルーツパイ特有の底生地の生焼け・ベタつきを解消"
      },
      {
        spec: "耐熱衝撃破壊温度差閾値（急激な温度勾配 Delta T）",
        item1Value: "Delta T ~ 160°C〜200°C（高密度炻器は冷蔵庫から予熱オーブンへの直行にも対応）",
        item2Value: "Delta T ~ 55°C〜80°C（強化ソーダ石灰ガラスは濡れた調理台上で自爆破砕する恐れ）",
        advantage: "陶器は強化ガラス製品にみられる突然の爆発的粉砕・破片飛散事故を完全回避"
      },
      {
        spec: "釉薬の化学的反応性と耐酸性（ASTM C738 / ISO 6486）",
        item1Value: "0.00 ppm 鉛・カドミウム；無孔質ガラス質釉薬が強酸性フルーツ果汁（pH 2.8〜3.5）を遮断",
        item2Value: "完全に不活性なシリカ網目構造；有機食品酸に対しても元素の溶出ゼロ",
        advantage: "両素材とも極めて高い化学的不活性を誇り、パイの風味を損なう金属臭が皆無"
      }
    ],
    "stainless-steel-vs-plastic-fine-mesh-strainer": [
      {
        spec: "沸騰水濾過時のマイクロプラスチック粒子・繊維溶出量（100°C / ASTM D8332）",
        item1Value: "0.00 個/L（緻密なオーステナイト SUS304 結晶格子；熱水でも粒子溶出皆無）",
        item2Value: "1,500〜12,000+ 個/L（ナイロン6,6やPPメッシュが沸騰熱で軟化し微小繊維が剥離）",
        advantage: "ステンレス製極細メッシュは熱々のボーンブロスや出汁漉し時の微小プラ混入を遮断"
      },
      {
        spec: "連続使用耐熱温度上限とメッシュ破断耐性",
        item1Value: "最大 800°C の連続熱に耐え、揚げ物の熱い油切りや煮立ったシロップ漉しも安全",
        item2Value: "軟化点 90°C〜110°C；揚げ油（175°C以上）に触れると一瞬で溶解破断し穴あき",
        advantage: "金属製こし器は熱油や熱湯によるプラスチック融解・火傷事故の危険を未然に防止"
      },
      {
        spec: "金網織り密度とメッシュ目開き精度（ASTM E11）",
        item1Value: "二重綾織り極細メッシュ（目開き < 0.25 mm）；お玉で強く押し付けても破れず漉せる",
        item2Value: "単層ニットモノフィラメント（目開き < 0.60 mm）；圧力で目が伸び、枠から外れやすい",
        advantage: "二重構造のステンレスメッシュが微小な種や粗い繊維を逃さずシルクのように濾過"
      }
    ]
  }
};

for (const lang of ['es', 'pt', 'zh', 'ja']) {
  const filePath = path.resolve(`scripts/build-wave55-${lang}.cjs`);
  if (!fs.existsSync(filePath)) {
    console.log(`File not found: ${filePath}`);
    continue;
  }

  const exportName = 'newComparisons' + lang.charAt(0).toUpperCase() + lang.slice(1);
  const mod = require(filePath);
  const arr = mod[exportName];

  if (!Array.isArray(arr)) {
    console.log(`Array not found in ${filePath}`);
    continue;
  }

  arr.forEach(item => {
    const specsForSlug = localizedSpecs[lang]?.[item.slug];
    if (specsForSlug) {
      item.technicalSpecs = specsForSlug;
    }
  });

  const content = `// Wave 55: 5 High-Intent Material & Appliance Comparisons (${lang.toUpperCase()})\nconst ${exportName} = ${JSON.stringify(arr, null, 2)};\n\nmodule.exports = { ${exportName} };\n`;
  fs.writeFileSync(filePath, content, 'utf8');
  console.log(`✅ Successfully enriched scripts/build-wave55-${lang}.cjs with localized technicalSpecs`);
}
