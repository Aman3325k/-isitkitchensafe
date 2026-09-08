const fs = require('fs');

const batch6 = {
  es: [
    {
      item: "Hierbas en Aceite",
      appliance: "freezer",
      slug: "herbs-in-oil",
      safe: "yes",
      shortAnswer: "Sí, congelar hierbas frescas sumergidas en aceite es seguro y conserva su sabor vibrante.",
      reason: "Congelar hierbas leñosas frescas (como romero, tomillo, orégano y salvia) suspendidas en aceite de oliva o mantequilla derretida dentro de cubiteras de silicona es uno de los métodos de conservación preferidos por los chefs. Sumergir las hierbas en aceite aísla las hojas tiernas del contacto directo con el aire del congelador, previniendo quemaduras por frío y oscurecimiento. Además, la congelación anula el peligro de botulismo que surge al almacenar hierbas frescas crudas en aceite a temperatura ambiente.",
      tips: [
        "Pica las hierbas frescas finamente, colócalas en bandejas de cubitos de hielo de silicona y vierte aceite de oliva virgen extra o mantequilla derretida hasta cubrirlas por completo.",
        "Una vez congelados por completo, desmolda los cubitos de hierbas y aceite y guárdalos en una bolsa para congelar etiquetada para cocinar en porciones individuales.",
        "Añade los cubos congelados directamente a sartenes calientes, salsas de pasta o asados sin necesidad de descongelar previamente."
      ],
      warnings: [
        "Nunca almacenes hierbas frescas en aceite a temperatura ambiente, ya que el entorno anaeróbico crea un riesgo grave de proliferación mortal de Clostridium botulinum; congélalas de inmediato.",
        "Las hierbas tiernas como la albahaca pueden oscurecerse ligeramente en el aceite, aunque su intenso sabor aromático permanece intacto."
      ],
      faqs: [
        {
          question: "¿Es seguro guardar hierbas frescas en aceite de oliva en el congelador?",
          answer: "Sí, la congelación detiene todo crecimiento bacteriano, eliminando por completo el peligro de botulismo asociado a los aceites con ajo o hierbas a temperatura ambiente."
        },
        {
          question: "¿Qué hierbas se congelan mejor en aceite?",
          answer: "Las hierbas duras y leñosas como romero, tomillo, orégano, salvia y estragón se congelan mejor en aceite, aunque el perejil y el cilantro también funcionan bien para platos cocinados."
        },
        {
          question: "¿Cómo se usan los cubitos de hierbas y aceite congelados?",
          answer: "Echa un cubito directamente en una sartén caliente para que se derrita y sirva de base aromática al saltear verduras, dorar carnes o iniciar salsas."
        }
      ],
      relatedItems: [
        "olive-oil",
        "garlic",
        "pesto",
        "butter"
      ],
      material: "Hierbas Frescas en Grasa Vegetal",
      keyRisk: "Riesgo de botulismo si se descongela y almacena a temperatura ambiente",
      tip: "Congela hierbas picadas sumergidas en aceite de oliva en cubiteras de silicona para evitar quemaduras por frío y el riesgo de botulismo.",
      learnMore: "Las hierbas sumergidas en aceite crean un ambiente anaeróbico. A temperatura ambiente, las esporas de Clostridium botulinum pueden germinar y producir toxinas. Congelar a 0 °F (-18 °C) detiene por completo la actividad de las esporas, garantizando inocuidad total."
    }
  ],
  pt: [
    {
      item: "Ervas em Óleo",
      appliance: "freezer",
      slug: "herbs-in-oil",
      safe: "yes",
      shortAnswer: "Sim, congelar ervas frescas submersas em óleo ou azeite é seguro e preserva seu aroma vibrante.",
      reason: "Congelar ervas frescas resistentes (alecrim, tomilho, orégano e sálvia) imersas em azeite de oliva ou manteiga derretida em formas de gelo de silicone é uma técnica favorita dos chefs. Cobrir as ervas com gordura protege as folhas delicadas do ar seco do freezer, evitando queima de gelo e escurecimento oxidativo. Além disso, o congelamento elimina o risco de botulismo associado à conservação de ervas frescas em óleo à temperatura ambiente.",
      tips: [
        "Pique as ervas frescas finamente, preencha forminhas de gelo de silicone e cubra com azeite de oliva extravirgem ou manteiga derretida até cobrir por completo.",
        "Depois de congelados, desenforme os cubos de ervas com azeite e guarde em sacos de freezer identificados para usar em porções práticas no dia a dia.",
        "Adicione os cubos congelados diretamente em frigideiras quentes, molhos de massa ou assadeiras sem necessidade de descongelar antes."
      ],
      warnings: [
        "Nunca armazene ervas frescas em óleo ou azeite em temperatura ambiente, pois o ambiente anaeróbio propicia a proliferação letal de Clostridium botulinum; congele imediatamente.",
        "Ervas de folhas finas como o manjericão podem escurecer levemente no azeite, mas conservam todo o seu aroma e sabor característicos."
      ],
      faqs: [
        {
          question: "É seguro guardar ervas frescas em azeite de oliva no congelador?",
          answer: "Sim, o congelamento paralisa qualquer atividade bacteriana, eliminando por completo o risco de botulismo comum em infusões de alho ou ervas em temperatura ambiente."
        },
        {
          question: "Quais ervas congelam melhor em óleo ou azeite?",
          answer: "Ervas de talo lenhoso como alecrim, tomilho, orégano, sálvia e estragão congelam perfeitamente no azeite, embora salsa e coentro também funcionem bem para pratos cozidos."
        },
        {
          question: "Como utilizar os cubinhos congelados de ervas no azeite?",
          answer: "Coloque um cubo diretamente numa panela ou frigideira quente para derreter e servir de base aromática no refogado de legumes, carnes ou molhos de tomate."
        }
      ],
      relatedItems: [
        "olive-oil",
        "garlic",
        "pesto",
        "butter"
      ],
      material: "Ervas Frescas em Gordura Vegetal",
      keyRisk: "Risco de botulismo se descongelado e mantido em temperatura ambiente",
      tip: "Congele ervas picadas imersas em azeite de oliva em formas de gelo de silicone para evitar a queima de frio e o risco de botulismo.",
      learnMore: "Ervas submersas em óleo criam um meio anaeróbio. Em temperatura ambiente, esporos de Clostridium botulinum podem germinar. O congelamento a 0 °F (-18 °C) paralisa totalmente a atividade dos esporos, garantindo segurança alimentar."
    }
  ]
};

fs.writeFileSync('scratch/cat3_batch6_translations.json', JSON.stringify(batch6, null, 2) + '\n', 'utf8');
console.log('Saved scratch/cat3_batch6_translations.json successfully.');
