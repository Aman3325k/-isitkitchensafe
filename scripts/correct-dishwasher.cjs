const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const itemsPath = path.resolve(__dirname, '../src/data/items.json');
const itemsEsPath = path.resolve(__dirname, '../src/data/items.es.json');
const itemsPtPath = path.resolve(__dirname, '../src/data/items.pt.json');

const items = JSON.parse(fs.readFileSync(itemsPath, 'utf8'));
const itemsEs = JSON.parse(fs.readFileSync(itemsEsPath, 'utf8'));
const itemsPt = JSON.parse(fs.readFileSync(itemsPtPath, 'utf8'));

const dwEn = items.filter(i => i.appliance === 'dishwasher');
const dwEs = itemsEs.filter(i => i.appliance === 'dishwasher');
const dwPt = itemsPt.filter(i => i.appliance === 'dishwasher');

console.log(`Auditing and correcting ${dwEn.length} dishwasher items...`);

// 1. BACKUP INVENTED ITEM-SPECIFIC FAQS TO candidate-faq-upgrades.md
const candidateFaqs = [];
const esMapCurrent = new Map(dwEs.map(i => [i.slug, i]));
const ptMapCurrent = new Map(dwPt.map(i => [i.slug, i]));

for (const enItem of dwEn) {
  if (enItem.slug === 'hydroflask') continue; // Hydroflask is genuine test case

  const esItem = esMapCurrent.get(enItem.slug);
  const ptItem = ptMapCurrent.get(enItem.slug);
  const enFaqs = enItem.faqs || [];
  const esFaqs = (esItem && esItem.faqs) || [];
  const ptFaqs = (ptItem && ptItem.faqs) || [];

  // Check if ES/PT faqs had custom item-specific questions
  // Food items had generic 3 questions matching each other; non-food items had rich custom ones
  const isFood = ['bacon', 'sausage', 'pork-chop', 'beef-steak', 'ground-beef', 'salmon-fillet', 'tuna-steak', 'shrimp', 'lobster-tail', 'crab-legs', 'chicken-breast', 'chicken-wings', 'turkey-breast', 'duck-breast', 'egg', 'milk', 'butter', 'cheddar-cheese', 'mozzarella-cheese', 'cream-cheese', 'yogurt', 'heavy-cream', 'sour-cream', 'tofu', 'tempeh', 'apple', 'banana', 'orange', 'strawberry', 'blueberry', 'raspberry', 'blackberry', 'grape', 'watermelon', 'cantaloupe', 'honeydew', 'peach', 'plum', 'nectarine', 'cherry', 'mango', 'pineapple', 'avocado', 'tomato', 'cucumber', 'bell-pepper', 'spinach', 'lettuce', 'broccoli', 'brussels-sprouts', 'cabbage', 'kale', 'carrot', 'celery', 'onion', 'garlic', 'potato', 'sweet-potato', 'zucchini', 'yellow-squash', 'eggplant', 'asparagus', 'green-beans', 'peas', 'corn', 'mushroom', 'ginger', 'lemon', 'lime', 'white-rice', 'brown-rice', 'quinoa', 'lentils', 'oatmeal', 'spaghetti', 'macaroni', 'white-bread', 'whole-wheat-bread', 'sourdough-bread', 'croissant', 'bagel', 'pita-bread', 'tortilla', 'pizza-dough', 'cookie-dough', 'chocolate-chip-cookies', 'cake', 'muffin', 'pie', 'brownie', 'honey', 'maple-syrup', 'olive-oil', 'vegetable-oil', 'coconut-oil', 'peanut-butter', 'almond-butter', 'nutella', 'jam', 'jelly', 'mayonnaise', 'ketchup', 'mustard', 'soy-sauce', 'hot-sauce', 'salad-dressing', 'hummus', 'guacamole', 'salsa', 'coffee', 'tea', 'soda', 'orange-juice', 'apple-juice', 'wine', 'beer'].includes(enItem.slug);

  if (!isFood) {
    candidateFaqs.push({
      slug: enItem.slug,
      item: enItem.item,
      esFaqs,
      ptFaqs
    });
  }
}

let candidateMd = '# Candidate FAQ Upgrades (Dishwasher Vertical)\n\n';
candidateMd += 'This document archives the item-specific FAQ entries generated during the initial translation phase for future review as potential upgrades to the English dataset in `src/data/items.json`.\n\n';

for (const c of candidateFaqs) {
  candidateMd += `## ${c.item} (\`${c.slug}\`)\n\n`;
  candidateMd += '### Spanish FAQs\n';
  c.esFaqs.forEach((f, idx) => {
    candidateMd += `${idx + 1}. **${f.question}**\n   ${f.answer}\n`;
  });
  candidateMd += '\n### Portuguese FAQs\n';
  c.ptFaqs.forEach((f, idx) => {
    candidateMd += `${idx + 1}. **${f.question}**\n   ${f.answer}\n`;
  });
  candidateMd += '\n---\n\n';
}

const candidatePaths = [
  path.resolve(__dirname, '../candidate-faq-upgrades.md'),
  path.resolve(__dirname, '../../candidate-faq-upgrades.md')
];
for (const p of candidatePaths) {
  fs.writeFileSync(p, candidateMd, 'utf8');
}
console.log(`Saved ${candidateFaqs.length} candidate item-specific FAQ sets to candidate-faq-upgrades.md`);

// 2. FAITHFUL DICTIONARY FOR ALL 48 ENGLISH FAQS
const faqDictionary = {
  "Is the lid of a Hydro Flask dishwasher safe?": {
    es: {
      question: "¿Se puede lavar la tapa de la botella Hydro Flask en el lavavajillas?",
      answer: "La mayoría de las tapas de plástico pueden ir en la rejilla superior del lavavajillas, pero lavarlas a mano prolonga la vida útil de sus juntas de sellado."
    },
    pt: {
      question: "A tampa da garrafa Hydro Flask pode ser lavada na lava-louças?",
      answer: "A maioria das tampas plásticas pode ir na prateleira superior da lava-louças, mas a lavagem manual prolonga a vida útil das juntas de vedação."
    }
  },
  "What happens if I wash it in the dishwasher once?": {
    es: {
      question: "¿Qué pasa si lo lavo en el lavavajillas una sola vez?",
      answer: "Un solo ciclo podría no arruinarlo al instante, pero puede degradar silenciosamente el sellado o dañar el recubrimiento exterior de pintura."
    },
    pt: {
      question: "O que acontece se eu lavar na lava-louças apenas uma vez?",
      answer: "Um único ciclo pode não estragar instantaneamente, mas pode degradar silenciosamente a vedação ou danificar a pintura externa."
    }
  },
  "How can I tell if the insulation is broken?": {
    es: {
      question: "¿Cómo puedo saber si el aislamiento térmico se ha roto?",
      answer: "Si el exterior de la botella se calienta mucho al llenarla con líquido caliente, significa que el sellado al vacío se ha roto."
    },
    pt: {
      question: "Como saber se o isolamento térmico foi danificado?",
      answer: "Se a parte externa da garrafa esquentar muito ao ser preenchida com líquido quente, o vácuo de isolamento foi perdido."
    }
  },
  "Can this item go on the bottom rack?": {
    es: {
      question: "¿Puede ir este artículo en la rejilla inferior?",
      answer: "El acero inoxidable pesado o el vidrio templado pueden ir en la rejilla inferior, pero los artículos más livianos deben permanecer en la rejilla superior."
    },
    pt: {
      question: "Este item pode ir na prateleira inferior?",
      answer: "Aço inoxidável pesado ou vidro temperado podem ir na prateleira inferior, mas itens mais leves devem ficar na prateleira superior."
    }
  },
  "Does dishwashing shorten its lifespan?": {
    es: {
      question: "¿El lavavajillas acorta su vida útil?",
      answer: "Aunque sea apto para lavavajillas, el lavado a mano es más suave y puede mantener el artículo con aspecto de nuevo por más tiempo."
    },
    pt: {
      question: "A lava-louças reduz a vida útil do item?",
      answer: "Embora seja seguro para lava-louças, a lavagem manual é mais suave e mantém o item com aparência de novo por mais tempo."
    }
  },
  "Should I use a heat-dry cycle?": {
    es: {
      question: "¿Debo usar un ciclo de secado con calor?",
      answer: "Sí, el secado con calor estándar está bien, pero secar al aire es una excelente alternativa para ahorrar energía."
    },
    pt: {
      question: "Devo usar o ciclo de secagem com calor?",
      answer: "Sim, a secagem térmica padrão é aceitável, mas a secagem ao ar livre é uma ótima opção para economizar energia."
    }
  },
  "Is the lid of a Stanley Cup dishwasher safe?": {
    es: {
      question: "¿Se puede lavar la tapa de un vaso Stanley en el lavavajillas?",
      answer: "La mayoría de las tapas de plástico pueden ir en la rejilla superior del lavavajillas, pero lavarlas a mano prolonga la vida útil de sus juntas de sellado."
    },
    pt: {
      question: "A tampa do copo Stanley pode ir na lava-louças?",
      answer: "A maioria das tampas plásticas pode ir na prateleira superior da lava-louças, mas a lavagem manual prolonga a vida útil das juntas de vedação."
    }
  },
  "Is the lid of a S'well Bottle dishwasher safe?": {
    es: {
      question: "¿Se puede lavar la tapa de una botella S'well en el lavavajillas?",
      answer: "La mayoría de las tapas de plástico pueden ir en la rejilla superior del lavavajillas, pero lavarlas a mano prolonga la vida útil de sus juntas de sellado."
    },
    pt: {
      question: "A tampa da garrafa S'well pode ir na lava-louças?",
      answer: "A maioria das tampas plásticas pode ir na prateleira superior da lava-louças, mas a lavagem manual prolonga a vida útil das juntas de vedação."
    }
  },
  "Is the lid of a Klean Kanteen dishwasher safe?": {
    es: {
      question: "¿Se puede lavar la tapa de una botella Klean Kanteen en el lavavajillas?",
      answer: "La mayoría de las tapas de plástico pueden ir en la rejilla superior del lavavajillas, pero lavarlas a mano prolonga la vida útil de sus juntas de sellado."
    },
    pt: {
      question: "A tampa da garrafa Klean Kanteen pode ir na lava-louças?",
      answer: "A maioria das tampas plásticas pode ir na prateleira superior da lava-louças, mas a lavagem manual prolonga a vida útil das juntas de vedação."
    }
  },
  "Is the lid of a Owala Water Bottle dishwasher safe?": {
    es: {
      question: "¿Se puede lavar la tapa de una botella Owala en el lavavajillas?",
      answer: "La mayoría de las tapas de plástico pueden ir en la rejilla superior del lavavajillas, pero lavarlas a mano prolonga la vida útil de sus juntas de sellado."
    },
    pt: {
      question: "A tampa da garrafa Owala pode ir na lava-louças?",
      answer: "A maioria das tampas plásticas pode ir na prateleira superior da lava-louças, mas a lavagem manual prolonga a vida útil das juntas de vedação."
    }
  },
  "Is the lid of a Thermos Flask dishwasher safe?": {
    es: {
      question: "¿Se puede lavar la tapa de un termo Thermos en el lavavajillas?",
      answer: "La mayoría de las tapas de plástico pueden ir en la rejilla superior del lavavajillas, pero lavarlas a mano prolonga la vida útil de sus juntas de sellado."
    },
    pt: {
      question: "A tampa de uma garrafa Thermos pode ir na lava-louças?",
      answer: "A maioria das tampas plásticas pode ir na prateleira superior da lava-louças, mas a lavagem manual prolonga a vida útil das juntas de vedação."
    }
  },
  "Can you restore a rusted cast iron skillet?": {
    es: {
      question: "¿Se puede restaurar una sartén de hierro fundido oxidada?",
      answer: "Sí, debes frotar el óxido con lana de acero, lavarla, secarla muy bien, untarla con aceite y hornearla para volver a curarla."
    },
    pt: {
      question: "É possível recuperar uma frigideira de ferro fundido enferrujada?",
      answer: "Sim, esfregue a ferrugem com esponja de aço, lave, seque totalmente, passe uma camada fina de óleo e asse no forno para recurar."
    }
  },
  "Does soap ruin cast iron?": {
    es: {
      question: "¿El jabón arruina el hierro fundido?",
      answer: "El jabón líquido suave moderno no arruina el curado durante un lavado a mano rápido, pero los detergentes agresivos de lavavajillas sí lo destruirán."
    },
    pt: {
      question: "O sabão estraga o ferro fundido?",
      answer: "Detergente neutro suave não estraga a cura na lavagem manual rápida, mas o sabão alcalino forte da lava-louças destruirá a proteção."
    }
  },
  "Can I soak cast iron?": {
    es: {
      question: "¿Puedo dejar el hierro fundido en remojo?",
      answer: "No, nunca dejes el hierro fundido en remojo en agua, ya que esto provoca la formación rápida de óxido."
    },
    pt: {
      question: "Posso deixar panelas de ferro fundido de molho?",
      answer: "Não, nunca deixe peças de ferro fundido de molho na água, pois isso causa formação rápida de ferrugem."
    }
  },
  "Why did my item change color in the dishwasher?": {
    es: {
      question: "¿Por qué mi artículo cambió de color en el lavavajillas?",
      answer: "Esto se debe a la oxidación química causada por la alta alcalinidad del detergente de lavavajillas al reaccionar con el material."
    },
    pt: {
      question: "Por que meu item mudou de cor na máquina de lavar louça?",
      answer: "Isso ocorre devido à oxidação química causada pela alta alcalinidade do sabão de lava-louças ao reagir com o material."
    }
  },
  "Can I fix a warped wooden item?": {
    es: {
      question: "¿Puedo arreglar un artículo de madera deformado?",
      answer: "Desafortunadamente, la deformación y las grietas en la madera suelen ser permanentes y no se pueden reparar por completo."
    },
    pt: {
      question: "Dá para consertar um utensílio de madeira empenado?",
      answer: "Infelizmente, o empenamento e as rachaduras na madeira costumam ser permanentes e não têm conserto completo."
    }
  },
  "What is the safest alternative to dishwashing?": {
    es: {
      question: "¿Cuál es la alternativa más segura al lavavajillas?",
      answer: "Un lavado a mano rápido con agua tibia, esponja suave y jabón líquido para platos estándar siempre es lo más seguro."
    },
    pt: {
      question: "Qual é a alternativa mais segura à máquina de lavar louça?",
      answer: "Uma lavagem manual rápida com água morna, esponja macia e detergente neutro é sempre a opção mais segura."
    }
  },
  "Why is my food sticking to my ceramic pan?": {
    es: {
      question: "¿Por qué se pega la comida en mi sartén de cerámica?",
      answer: "Es probable que el recubrimiento antiadherente se haya degradado por cocinar a fuego muy alto o por daños causados por el lavavajillas."
    },
    pt: {
      question: "Por que a comida está grudando na minha panela cerâmica?",
      answer: "O revestimento antiaderente provavelmente foi degradado por calor excessivo no fogão ou pelo sabão da lava-louças."
    }
  },
  "Why do stainless steel knives rust in the dishwasher?": {
    es: {
      question: "¿Por qué los cuchillos de acero inoxidable se oxidan en el lavavajillas?",
      answer: "El acero inoxidable es resistente a la oxidación, pero no inmune. La combinación de calor, humedad y sales químicas degrada la capa protectora de óxido de cromo."
    },
    pt: {
      question: "Por que facas de aço inoxidável enferrujam na lava-louças?",
      answer: "O aço inox é resistente à ferrugem, mas não imune. A combinação de calor, umidade e sais do detergente desgasta a camada de óxido de cromo."
    }
  },
  "Is it safe to wash cheap knives in the dishwasher?": {
    es: {
      question: "¿Es seguro lavar cuchillos económicos en el lavavajillas?",
      answer: "Aunque los cuchillos baratos no representen una gran pérdida económica, igualmente se desafilarán y oxidarán con rapidez en el lavavajillas."
    },
    pt: {
      question: "É seguro lavar facas baratas na máquina de lavar louça?",
      answer: "Embora facas baratas não representem grande prejuízo, elas ainda perderão o corte e enferrujarão rapidamente na máquina."
    }
  },
  "Can I put kitchen shears in the dishwasher?": {
    es: {
      question: "¿Puedo meter las tijeras de cocina en el lavavajillas?",
      answer: "No, las tijeras tienen tornillos y articulaciones donde el agua se acumula, provocando óxido interno y endurecimiento al cortar."
    },
    pt: {
      question: "Posso colocar tesouras de cozinha na lava-louças?",
      answer: "Não, as tesouras têm articulações onde a água fica retida, causando ferrugem interna e travamento do mecanismo."
    }
  },
  "Why is the top rack safer for this item?": {
    es: {
      question: "¿Por qué la rejilla superior es más segura para este artículo?",
      answer: "La resistencia calefactora se encuentra en el fondo del lavavajillas, lo que hace que la rejilla inferior esté significativamente más caliente."
    },
    pt: {
      question: "Por que a prateleira superior é mais segura para este item?",
      answer: "A resistência de aquecimento fica no fundo da lava-louças, tornando a prateleira inferior significativamente mais quente."
    }
  },
  "What if the item warps?": {
    es: {
      question: "¿Qué pasa si el artículo se deforma?",
      answer: "Las tapas o recipientes de plástico deformados ya no sellarán correctamente y deberán ser reemplazados."
    },
    pt: {
      question: "O que acontece se o item empenar?",
      answer: "Tampas ou potes plásticos deformados perdem a vedação hermética e devem ser substituídos."
    }
  },
  "Is it safe for hot food if it cannot go on the bottom rack?": {
    es: {
      question: "¿Es seguro para comida caliente si no puede ir en la rejilla inferior?",
      answer: "Sí, es apto para alimentos calientes, pero el ciclo de secado con calor seco del lavavajillas es mucho más agresivo que la comida caliente."
    },
    pt: {
      question: "É seguro para alimentos quentes se não puder ir na prateleira inferior?",
      answer: "Sim, é seguro para servir comida quente, mas o calor seco do ciclo de secagem da máquina é muito mais agressivo."
    }
  },
  "Why is my non-stick coating peeling?": {
    es: {
      question: "¿Por qué se está pelando mi recubrimiento antiadherente?",
      answer: "El uso frecuente del lavavajillas y los estropajos abrasivos descomponen el polímero antiadherente."
    },
    pt: {
      question: "Por que o revestimento antiaderente está descascando?",
      answer: "O uso frequente da lava-louças e esponjas abrasivas degradam o polímero da camada antiaderente."
    }
  },
  "Is the lid of a Travel Mug dishwasher safe?": {
    es: {
      question: "¿Se puede lavar la tapa de una taza térmica de viaje en el lavavajillas?",
      answer: "La mayoría de las tapas de plástico pueden ir en la rejilla superior del lavavajillas, pero lavarlas a mano prolonga la vida útil de sus juntas de sellado."
    },
    pt: {
      question: "A tampa da caneca térmica de viagem pode ir na lava-louças?",
      answer: "A maioria das tampas plásticas pode ir na prateleira superior da lava-louças, mas a lavagem manual prolonga a vida útil das juntas de vedação."
    }
  },
  "What happens if I already washed it in the dishwasher?": {
    es: {
      question: "¿Qué hago si ya lo lavé en el lavavajillas?",
      answer: "Si aún no se ha agrietado, úntalo generosamente con aceite mineral para restaurar la humedad perdida."
    },
    pt: {
      question: "O que fazer se eu já lavei o item na lava-louças?",
      answer: "Se a madeira ainda não rachou, passe óleo mineral generosamente para recuperar a hidratação das fibras."
    }
  },
  "Why does my wooden spoon taste like soap?": {
    es: {
      question: "¿Por qué mi cuchara de madera tiene sabor a jabón?",
      answer: "Debido a que la madera es porosa, absorbió los detergentes fuertemente alcalinos utilizados en el lavavajillas."
    },
    pt: {
      question: "Por que a colher de pau fica com gosto de sabão?",
      answer: "Como a madeira é porosa, ela absorveu os detergentes químicos alcalinos usados na máquina de lavar louça."
    }
  },
  "What if it is a heavy, expensive butcher block?": {
    es: {
      question: "¿Qué pasa si es un bloque de carnicero pesado y costoso?",
      answer: "Las tablas gruesas son aún más propensas a agrietarse porque el exterior se expande más rápido que el núcleo denso."
    },
    pt: {
      question: "E se for uma tábua de corte pesada e profissional?",
      answer: "Tábuas grossas são ainda mais propensas a trincar, pois a parte externa expande mais rápido do que o centro denso."
    }
  },
  "Can I sanitize it with bleach?": {
    es: {
      question: "¿Puedo desinfectarla con lejía o lavandina?",
      answer: "Usa en su lugar una solución diluida de vinagre o agua oxigenada para evitar dañar la madera."
    },
    pt: {
      question: "Posso desinfetar com água sanitária?",
      answer: "Use uma solução diluída de vinagre ou água oxigenada para não agredir as fibras da madeira."
    }
  },
  "Why does my cake always stick now?": {
    es: {
      question: "¿Por qué ahora mi pastel siempre se pega al molde?",
      answer: "Si el molde pasó por el lavavajillas, es probable que la capa antiadherente se haya visto comprometida."
    },
    pt: {
      question: "Por que o bolo sempre gruda na forma agora?",
      answer: "Se a forma foi lavada na máquina de lavar louça, o revestimento antiaderente provavelmente foi danificado."
    }
  },
  "Why does my springform pan leak batter?": {
    es: {
      question: "¿Por qué se sale la masa de mi molde desmontable?",
      answer: "El cierre de palanca puede haberse deformado en el lavavajillas, o la base se insertó al revés."
    },
    pt: {
      question: "Por que a massa vaza da forma desmontável?",
      answer: "A fivela de trava pode ter empenado na máquina, ou a base foi encaixada do lado invertido."
    }
  },
  "Can I polish the dullness away?": {
    es: {
      question: "¿Puedo pulirlo para quitarle lo opaco?",
      answer: "Si sufrió una oxidación severa por el detergente de lavavajillas, un pulido estándar podría no ser suficiente para recuperar el brillo original."
    },
    pt: {
      question: "Dá para polir e tirar a opacidade?",
      answer: "Se o metal oxidou profundamente com o sabão da máquina, o polimento comum pode não recuperar o brilho original."
    }
  },
  "Will it leave rust stains in the dishwasher?": {
    es: {
      question: "¿Dejará manchas de óxido en el lavavajillas?",
      answer: "Sí, si lo dejas húmedo dentro del lavavajillas durante días, dejará una marca permanente de óxido en la rejilla plástica."
    },
    pt: {
      question: "Pode deixar manchas de ferrugem na lava-louças?",
      answer: "Sim, se ficar molhado dentro da máquina por dias, deixará marcas permanentes de ferrugem no cesto plástico."
    }
  },
  "Is the lid of a Meat Thermometer dishwasher safe?": {
    es: {
      question: "¿Se puede lavar la tapa o cabezal de un termómetro para carne en el lavavajillas?",
      answer: "La mayoría de las tapas y cabezales con componentes electrónicos o juntas deben lavarse a mano para proteger su funcionamiento."
    },
    pt: {
      question: "A tampa ou visor do termômetro de carne pode ir na lava-louças?",
      answer: "Visores e módulos eletrônicos de termômetros devem ser lavados à mão para proteger os sensores e vedações."
    }
  },
  "Can you wash vegetables in a dishwasher?": {
    es: {
      question: "¿Se pueden lavar verduras en el lavavajillas?",
      answer: "No, esto está totalmente desaconsejado. El calor y la presión del agua las volverán blandas y los residuos de detergente las hacen inseguras para comer."
    },
    pt: {
      question: "Pode lavar verduras ou legumes na máquina de lavar louça?",
      answer: "Não, isso é fortemente desaconselhado. A água quente e a pressão amolecerão os vegetais e os resíduos químicos de sabão os tornarão impróprios para consumo."
    }
  },
  "Does the dishwasher sterilize food?": {
    es: {
      question: "¿El lavavajillas esteriliza la comida?",
      answer: "No, el lavavajillas utiliza agua recirculada sucia que contaminará los alimentos con bacterias y jabón."
    },
    pt: {
      question: "A lava-louças esteriliza alimentos?",
      answer: "Não, a máquina utiliza água recirculada com gordura e sabão, contaminando a comida com bactérias e produtos químicos."
    }
  },
  "What if I run the dishwasher without soap?": {
    es: {
      question: "¿Qué pasa si enciendo el lavavajillas sin jabón?",
      answer: "Incluso sin jabón, los restos de comida atascarán la bomba y el calor cocinará o estropeará los ingredientes."
    },
    pt: {
      question: "E se eu ligar a máquina sem sabão?",
      answer: "Mesmo sem sabão, resíduos de alimentos entopem a bomba e o calor inadequado estragará o alimento."
    }
  },
  "Is silicone dishwasher safe?": {
    es: {
      question: "¿La silicona es apta para lavavajillas?",
      answer: "Sí, las espátulas y moldes de silicona de grado alimentario de alta calidad pueden soportar fácilmente el calor del lavavajillas."
    },
    pt: {
      question: "O silicone pode ir à máquina de lavar louça?",
      answer: "Sim, espátulas e formas de silicone culinário de alta qualidade suportam facilmente as temperaturas da lava-louças."
    }
  },
  "Can glass turn cloudy in the dishwasher?": {
    es: {
      question: "¿El vidrio puede volverse opaco en el lavavajillas?",
      answer: "Sí, el agua dura o el desgaste por detergentes agresivos pueden volver el vidrio opaco con el tiempo."
    },
    pt: {
      question: "O vidro pode ficar esbranquiçado ou fosco na máquina?",
      answer: "Sim, água dura com minerais ou corrosão por sabão alcalino podem deixar o vidro opaco com o tempo."
    }
  },
  "Is it better to hand wash glassware?": {
    es: {
      question: "¿Es mejor lavar la cristalería a mano?",
      answer: "La cristalería estándar de uso diario va bien en la máquina, pero las copas finas de cristal delicado deben lavarse a mano."
    },
    pt: {
      question: "É melhor lavar copos e taças de vidro à mão?",
      answer: "Copos comuns de vidro resistem bem na máquina, mas taças finas de cristal delicado devem ser lavadas manualmente."
    }
  },
  "Can you wash sneakers in the dishwasher?": {
    es: {
      question: "¿Se pueden lavar zapatillas en el lavavajillas?",
      answer: "No, esto está totalmente desaconsejado, ya que derretirá los pegamentos y dañará tanto el calzado como el electrodoméstico."
    },
    pt: {
      question: "Pode lavar tênis na máquina de lavar louça?",
      answer: "Não, isso é fortemente desaconselhado, pois a água quente derrete as colas e danifica tanto o calçado quanto a máquina."
    }
  },
  "Why does plastic get a white film in the dishwasher?": {
    es: {
      question: "¿Por qué el plástico queda con una película blanca en el lavavajillas?",
      answer: "Suele ser acumulación de minerales de agua dura o grabado por detergentes fuertes. Prueba con un enjuague de vinagre."
    },
    pt: {
      question: "Por que o plástico fica com uma película branca na lava-louças?",
      answer: "Geralmente é acúmulo de minerais da água dura ou ataque químico do sabão. Experimente um enxágue com vinagre."
    }
  },
  "Why did my aluminum pan turn black in the dishwasher?": {
    es: {
      question: "¿Por qué mi sartén de aluminio se puso negra en el lavavajillas?",
      answer: "El detergente alcalino oxidó el aluminio crudo. Por esta razón, todos los utensilios de aluminio sin recubrimiento deben lavarse a mano."
    },
    pt: {
      question: "Por que a panela de alumínio ficou preta na lava-louças?",
      answer: "O sabão alcalino oxidou o alumínio puro. Por isso, panelas e formas de alumínio sem revestimento devem ser lavadas à mão."
    }
  },
  "Why does metal tarnish in the dishwasher?": {
    es: {
      question: "¿Por qué el metal se mancha u oscurece en el lavavajillas?",
      answer: "Los productos químicos agresivos y el agua caliente oxidan metales reactivos como el cobre, el aluminio y el latón."
    },
    pt: {
      question: "Por que o metal mancha e perde o brilho na lava-louças?",
      answer: "Produtos químicos fortes e água quente oxidam metais reativos como cobre, alumínio e latão."
    }
  },
  "Can I save rusted cast iron?": {
    es: {
      question: "¿Puedo recuperar el hierro fundido oxidado?",
      answer: "Sí, frota el óxido y vuelve a curar la sartén con aceite en el horno."
    },
    pt: {
      question: "Posso recuperar uma panela de ferro enferrujada?",
      answer: "Sim, esfregue a ferrugem e refaça a cura da panela com óleo no forno."
    }
  },
  "What happens if a wooden spoon splits?": {
    es: {
      question: "¿Qué pasa si una cuchara de madera se agrieta?",
      answer: "Las cucharas agrietadas pueden albergar bacterias y restos de comida en las fisuras, por lo que deben desecharse."
    },
    pt: {
      question: "O que acontece se a colher de pau rachar?",
      answer: "Colheres rachadas acumulam bactérias e restos de comida nas frestas, devendo ser substituídas."
    }
  },
  "Is it better to hand wash them?": {
    es: {
      question: "¿Es mejor lavarlas a mano?",
      answer: "Sí, lavar a mano con agua tibia y jabón suave prolonga significativamente la vida útil de las bolsas."
    },
    pt: {
      question: "É melhor lavá-los à mão?",
      answer: "Sim, a lavagem manual com água morna e sabão neutro prolonga significativamente a durabilidade das bolsas."
    }
  }
};

// 3. CLEAN STANDARDIZED SPANISH & PORTUGUESE ITEM NAMES (FIX 2 & FIX 3)
const cleanItemNames = {
  // Drinkware & Insulated
  "hydroflask": { es: "Botella Hydro Flask", pt: "Garrafa Térmica Hydro Flask" },
  "yeti-tumbler": { es: "Vaso Térmico Yeti", pt: "Copo Térmico Yeti" },
  "stanley-cup": { es: "Vaso Térmico Stanley", pt: "Copo Stanley" },
  "nalgene": { es: "Botella Nalgene", pt: "Garrafa Nalgene" },
  "contigo": { es: "Vaso Térmico Contigo", pt: "Copo Térmico Contigo" },
  "swell": { es: "Botella S'well", pt: "Garrafa S'well" },
  "klean-kanteen": { es: "Botella Klean Kanteen", pt: "Garrafa Klean Kanteen" },
  "owala": { es: "Botella Owala", pt: "Garrafa Owala" },
  "camelbak": { es: "Botella CamelBak", pt: "Garrafa CamelBak" },
  "thermos": { es: "Termo Tradicional", pt: "Garrafa Térmica Tradicional" },
  "travel-mug": { es: "Taza Térmica de Viaje", pt: "Caneca Térmica de Viagem" },

  // Cookware
  "cast-iron-skillet": { es: "Sartén de Hierro Fundido", pt: "Frigideira de Ferro Fundido" },
  "non-stick-pan": { es: "Sartén Antiadherente", pt: "Frigideira Antiaderente" },
  "copper-pan": { es: "Sartén de Cobre", pt: "Frigideira de Cobre" },
  "wok": { es: "Sartén Wok", pt: "Frigideira Wok" },
  "carbon-steel-pan": { es: "Sartén de Acero al Carbono", pt: "Frigideira de Aço Carbono" },
  "enameled-cast-iron": { es: "Hierro Fundido Esmaltado", pt: "Panela de Ferro Esmaltado" },
  "stainless-steel-pan": { es: "Sartén de Acero Inoxidable", pt: "Frigideira de Aço Inoxidável" },
  "aluminum-pan": { es: "Sartén de Aluminio", pt: "Frigideira de Alumínio" },
  "ceramic-pan": { es: "Sartén de Cerámica", pt: "Frigideira de Cerâmica" },
  "muffin-tin": { es: "Molde para Muffins", pt: "Forma de Muffins" },
  "baking-sheet": { es: "Bandeja de Hornear", pt: "Assadeira de Forno" },
  "bundt-pan": { es: "Molde Bundt", pt: "Forma Bundt" },
  "springform-pan": { es: "Molde Desmontable", pt: "Forma Desmontável" },
  "cast-iron-dutch-oven": { es: "Horno Holandés de Hierro Fundido", pt: "Panela Holandesa de Ferro Fundido" },

  // Knives & Cutlery
  "chefs-knife": { es: "Cuchillo de Chef", pt: "Faca de Chef" },
  "bread-knife": { es: "Cuchillo de Pan", pt: "Faca de Pão" },
  "paring-knife": { es: "Cuchillo Mondador", pt: "Faca de Descascar" },
  "santoku-knife": { es: "Cuchillo Santoku", pt: "Faca Santoku" },
  "steak-knives": { es: "Cuchillos de Carne", pt: "Facas de Churrasco" },
  "pocket-knife": { es: "Navaja de Bolsillo", pt: "Canivete de Bolso" },
  "kitchen-shears": { es: "Tijeras de Cocina", pt: "Tesoura de Cozinha" },
  "gold-silverware": { es: "Cubiertos Dorados", pt: "Talheres Dourados" },
  "silver-silverware": { es: "Cubertería de Plata", pt: "Faqueiro de Prata" },
  "pewter-dishes": { es: "Platos de Peltre", pt: "Pratos de Estanho" },
  "antique-dishes": { es: "Vajilla Antigua", pt: "Louça Antiga" },

  // Appliance Parts
  "instant-pot-lid": { es: "Tapa de Instant Pot", pt: "Tampa da Panela Elétrica Instant Pot" },
  "ninja-blender-lid": { es: "Tapa de Licuadora Ninja", pt: "Tampa do Liquidificador Ninja" },
  "nutribullet-cup": { es: "Vaso de NutriBullet", pt: "Copo do NutriBullet" },
  "air-fryer-basket": { es: "Cesta de Freidora de Aire", pt: "Cesto da Fritadeira Sem Óleo" },
  "instant-pot-inner-pot": { es: "Olla Interior de Instant Pot", pt: "Cuba Interna de Inox da Instant Pot" },
  "vitamix-container": { es: "Vaso de Licuadora Vitamix", pt: "Jarra do Liquidificador Vitamix" },
  "cuisinart-blade": { es: "Cuchilla de Procesador de Alimentos Cuisinart", pt: "Lâmina do Processador de Alimentos Cuisinart" },

  // Utensils & Gadgets
  "wooden-spoon": { es: "Cuchara de Madera", pt: "Colher de Pau" },
  "wooden-cutting-board": { es: "Tabla de Cortar de Madera", pt: "Tábua de Corte de Madeira" },
  "plastic-cutting-board": { es: "Tabla de Cortar de Plástico", pt: "Tábua de Corte de Plástico" },
  "bamboo-cutting-board": { es: "Tabla de Cortar de Bambú", pt: "Tábua de Corte de Bambu" },
  "silicone-spatula": { es: "Espátula de Silicona", pt: "Espátula de Silicone" },
  "rubber-spatula": { es: "Espátula de Goma", pt: "Espátula de Borracha" },
  "whisk": { es: "Batidor de Varillas", pt: "Batedor de Arame" },
  "tongs": { es: "Pinzas de Cocina", pt: "Pegador de Cozinha" },
  "measuring-cups": { es: "Tazas Medidoras", pt: "Xícaras Medidoras" },
  "measuring-spoons": { es: "Cucharas Medidoras", pt: "Colheres Medidoras" },
  "garlic-press": { es: "Prensador de Ajos", pt: "Espremedor de Alho" },
  "cheese-grater": { es: "Rallador de Queso", pt: "Ralador de Queijo" },
  "potato-peeler": { es: "Pelador de Papas", pt: "Descascador de Batatas" },
  "meat-thermometer": { es: "Termómetro para Carne", pt: "Termômetro para Carnes" },
  "silicone-baking-mat": { es: "Tapete de Silicona para Hornear", pt: "Tapete de Silicone para Forno" },
  "silicone-ice-cube-trays": { es: "Cubiteras de Silicona", pt: "Formas de Gelo de Silicone" },
  "steel-wool": { es: "Lana de Acero", pt: "Palha de Aço" },

  // Tableware & Glassware
  "crystal-glasses": { es: "Copas de Cristal Fino", pt: "Taças de Cristal Fino" },
  "wine-glasses": { es: "Copas de Vino", pt: "Taças de Vinho" },
  "champagne-flutes": { es: "Copas de Champán", pt: "Taças de Champanhe" },
  "mason-jars": { es: "Frascos Mason", pt: "Potes de Vidro Mason Jar" },
  "copper-mugs": { es: "Tazas de Cobre", pt: "Canecas de Cobre" },
  "plastic-cups": { es: "Vasos de Plástico", pt: "Copos de Plástico" },
  "acrylic-glasses": { es: "Vasos de Acrílico", pt: "Copos de Acrílico" },
  "bamboo-cups": { es: "Vasos de Fibra de Bambú", pt: "Copos de Fibra de Bambu" },
  "corelle-plates": { es: "Platos Corelle", pt: "Pratos Corelle" },
  "tupperware": { es: "Recipientes Tupperware", pt: "Potes Tupperware" },
  "bento-box": { es: "Bento Box", pt: "Marmita Bento Box" },
  "paper-plates": { es: "Platos de Papel", pt: "Pratos de Papel" },
  "coffee-pot": { es: "Jarra de Cafetera", pt: "Jarra de Cafeteira" },
  "pyrex-dish": { es: "Fuente de Vidrio Pyrex", pt: "Travessa de Vidro Pyrex" },
  "glass-bowl": { es: "Tazón de Vidrio", pt: "Tigela de Vidro" },
  "ceramic-plate": { es: "Plato de Cerámica", pt: "Prato de Cerâmica" },
  "paper-plate": { es: "Plato de Papel", pt: "Prato de Papel" },
  "plastic-container": { es: "Contenedor de Plástico", pt: "Pote Plástico" },
  "styrofoam-cup": { es: "Vaso de Unicel", pt: "Copo de Isopor" },
  "aluminum-foil": { es: "Papel de Aluminio", pt: "Papel Alumínio" },
  "copper-mug": { es: "Taza de Cobre", pt: "Caneca de Cobre" },
  "mason-jar": { es: "Tarro de Cristal", pt: "Pote de Vidro Mason Jar" },
  "ziploc-bag": { es: "Bolsas Herméticas tipo Ziploc", pt: "Sacos Plásticos Herméticos tipo Ziploc" },
  "wine-glass": { es: "Copa de Vino", pt: "Taça de Vinho" },

  // Misc Baby & Non-Kitchen
  "baby-bottles": { es: "Biberones", pt: "Mamadeiras" },
  "sippy-cups": { es: "Vasos de Aprendizaje", pt: "Copos de Transição" },
  "pacifiers": { es: "Chupetes", pt: "Chupetas" },
  "memory-foam": { es: "Espuma Viscoelástica", pt: "Espuma Viscoelástica" },
  "crocs-shoes": { es: "Sandalias Crocs", pt: "Calçados Crocs" },
  "running-shoes": { es: "Zapatillas de Correr", pt: "Tênis de Corrida" },
  "wool-sweater": { es: "Suéter de Lana", pt: "Suéter de Lã" },

  // Foods (Standardized Neutral Terms - Fix 2)
  "bacon": { es: "Tocino", pt: "Bacon" },
  "sausage": { es: "Salchicha", pt: "Linguiça" },
  "pork-chop": { es: "Chuleta de Cerdo", pt: "Bisteca de Porco" },
  "beef-steak": { es: "Filete de Res", pt: "Bife de Carne Bovina" },
  "ground-beef": { es: "Carne Molida", pt: "Carne Moída" },
  "salmon-fillet": { es: "Filete de Salmón", pt: "Filé de Salmão" },
  "tuna-steak": { es: "Filete de Atún", pt: "Filé de Atum" },
  "shrimp": { es: "Camarones", pt: "Camarão" },
  "lobster-tail": { es: "Cola de Langosta", pt: "Cauda de Lagosta" },
  "crab-legs": { es: "Patas de Cangrejo", pt: "Pernas de Caranguejo" },
  "chicken-breast": { es: "Pechuga de Pollo", pt: "Peito de Frango" },
  "chicken-wings": { es: "Alitas de Pollo", pt: "Asas de Frango" },
  "turkey-breast": { es: "Pechuga de Pavo", pt: "Peito de Peru" },
  "duck-breast": { es: "Pechuga de Pato", pt: "Peito de Pato" },
  "egg": { es: "Huevo", pt: "Ovo" },
  "milk": { es: "Leche", pt: "Leite" },
  "butter": { es: "Mantequilla", pt: "Manteiga" },
  "cheddar-cheese": { es: "Queso Cheddar", pt: "Queijo Cheddar" },
  "mozzarella-cheese": { es: "Queso Mozzarella", pt: "Queijo Muçarela" },
  "cream-cheese": { es: "Queso Crema", pt: "Cream Cheese" },
  "yogurt": { es: "Yogur", pt: "Iogurte" },
  "heavy-cream": { es: "Crema de Leche", pt: "Creme de Leite Fresco" },
  "sour-cream": { es: "Crema Agria", pt: "Creme Azedo" },
  "tofu": { es: "Tofu", pt: "Tofu" },
  "tempeh": { es: "Tempeh", pt: "Tempeh" },
  "apple": { es: "Manzana", pt: "Maçã" },
  "banana": { es: "Plátano", pt: "Banana" },
  "orange": { es: "Naranja", pt: "Laranja" },
  "strawberry": { es: "Fresa", pt: "Morango" },
  "blueberry": { es: "Arándano Azul", pt: "Mirtilo" },
  "raspberry": { es: "Frambuesa", pt: "Framboesa" },
  "blackberry": { es: "Mora", pt: "Amora" },
  "grape": { es: "Uva", pt: "Uva" },
  "watermelon": { es: "Sandía", pt: "Melancia" },
  "cantaloupe": { es: "Melón Cantalupo", pt: "Melão Cantaloupe" },
  "honeydew": { es: "Melón Verde", pt: "Melão Honeydew" },
  "peach": { es: "Durazno", pt: "Pêssego" },
  "plum": { es: "Ciruela", pt: "Ameixa" },
  "nectarine": { es: "Nectarina", pt: "Nectarina" },
  "cherry": { es: "Cereza", pt: "Cereja" },
  "mango": { es: "Mango", pt: "Manga" },
  "pineapple": { es: "Piña", pt: "Abacaxi" },
  "avocado": { es: "Aguacate", pt: "Abacate" },
  "tomato": { es: "Tomate", pt: "Tomate" },
  "cucumber": { es: "Pepino", pt: "Pepino" },
  "bell-pepper": { es: "Pimiento", pt: "Pimentão" },
  "spinach": { es: "Espinaca", pt: "Espinafre" },
  "lettuce": { es: "Lechuga", pt: "Alface" },
  "broccoli": { es: "Brócoli", pt: "Brócolis" },
  "brussels-sprouts": { es: "Coles de Bruselas", pt: "Couve-de-Bruxelas" },
  "cabbage": { es: "Repollo", pt: "Repolho" },
  "kale": { es: "Col Rizada", pt: "Couve" },
  "carrot": { es: "Zanahoria", pt: "Cenoura" },
  "celery": { es: "Apio", pt: "Aipo" },
  "onion": { es: "Cebolla", pt: "Cebola" },
  "garlic": { es: "Ajo", pt: "Alho" },
  "potato": { es: "Papa", pt: "Batata" },
  "sweet-potato": { es: "Batata Dulce", pt: "Batata-Doce" },
  "zucchini": { es: "Calabacín", pt: "Abobrinha" },
  "yellow-squash": { es: "Calabaza Amarilla", pt: "Abobrinha Amarela" },
  "eggplant": { es: "Berenjena", pt: "Beringela" },
  "asparagus": { es: "Espárrago", pt: "Aspargo" },
  "green-beans": { es: "Judías Verdes", pt: "Vagem" },
  "peas": { es: "Guisantes", pt: "Ervilhas" },
  "corn": { es: "Maíz", pt: "Milho" },
  "mushroom": { es: "Champiñón", pt: "Cogumelo" },
  "ginger": { es: "Jengibre", pt: "Gengibre" },
  "lemon": { es: "Limón Amarillo", pt: "Limão Siciliano" },
  "lime": { es: "Limón Verde", pt: "Limão Taiti" },
  "white-rice": { es: "Arroz Blanco", pt: "Arroz Branco" },
  "brown-rice": { es: "Arroz Integral", pt: "Arroz Integral" },
  "quinoa": { es: "Quinoa", pt: "Quinoa" },
  "lentils": { es: "Lentejas", pt: "Lentilhas" },
  "oatmeal": { es: "Avena", pt: "Aveia" },
  "spaghetti": { es: "Espaguetis", pt: "Espaguete" },
  "macaroni": { es: "Macarrones", pt: "Macarrão" },
  "white-bread": { es: "Pan Blanco", pt: "Pão Branco" },
  "whole-wheat-bread": { es: "Pan Integral", pt: "Pão Integral" },
  "sourdough-bread": { es: "Pan de Masa Madre", pt: "Pão de Fermentação Natural" },
  "croissant": { es: "Croissant", pt: "Croissant" },
  "bagel": { es: "Bagel", pt: "Bagel" },
  "pita-bread": { es: "Pan de Pita", pt: "Pão Sírio" },
  "tortilla": { es: "Tortilla", pt: "Tortilha" },
  "pizza-dough": { es: "Masa de Pizza", pt: "Massa de Pizza" },
  "cookie-dough": { es: "Masa para Galletas", pt: "Massa de Biscoito" },
  "chocolate-chip-cookies": { es: "Galletas con Chispas de Chocolate", pt: "Cookies com Gotas de Chocolate" },
  "cake": { es: "Pastel", pt: "Bolo" },
  "muffin": { es: "Muffin", pt: "Muffin" },
  "pie": { es: "Tarta", pt: "Torta" },
  "brownie": { es: "Brownie de Chocolate", pt: "Brownie" },
  "honey": { es: "Miel", pt: "Mel" },
  "maple-syrup": { es: "Jarabe de Arce", pt: "Xarope de Bordo" },
  "olive-oil": { es: "Aceite de Oliva", pt: "Azeite de Oliva" },
  "vegetable-oil": { es: "Aceite Vegetal", pt: "Óleo Vegetal" },
  "coconut-oil": { es: "Aceite de Coco", pt: "Óleo de Coco" },
  "peanut-butter": { es: "Mantequilla de Maní", pt: "Manteiga de Amendoim" },
  "almond-butter": { es: "Mantequilla de Almendra", pt: "Manteiga de Amêndoa" },
  "nutella": { es: "Crema de Avellanas Nutella", pt: "Creme de Avelã Nutella" },
  "jam": { es: "Mermelada", pt: "Geleia de Frutas" },
  "jelly": { es: "Jalea", pt: "Geleia" },
  "mayonnaise": { es: "Mayonesa", pt: "Maionese" },
  "ketchup": { es: "Kétchup", pt: "Ketchup" },
  "mustard": { es: "Mostaza", pt: "Mostarda" },
  "soy-sauce": { es: "Salsa de Soja", pt: "Molho de Soja" },
  "hot-sauce": { es: "Salsa Picante", pt: "Molho de Pimenta" },
  "salad-dressing": { es: "Aderezo para Ensalada", pt: "Molho de Salada" },
  "hummus": { es: "Hummus", pt: "Húmus" },
  "guacamole": { es: "Guacamole", pt: "Guacamole" },
  "salsa": { es: "Salsa", pt: "Molho Salsa" },
  "coffee": { es: "Café", pt: "Café" },
  "tea": { es: "Té", pt: "Chá" },
  "soda": { es: "Refresco", pt: "Refrigerante" },
  "orange-juice": { es: "Jugo de Naranja", pt: "Suco de Laranja" },
  "apple-juice": { es: "Jugo de Manzana", pt: "Suco de Maçã" },
  "wine": { es: "Vino", pt: "Vinho" },
  "beer": { es: "Cerveza", pt: "Cerveja" }
};

// 4. APPLY CORRECTIONS ACROSS BOTH JSON FILES
const enMap = new Map(dwEn.map(i => [i.slug, i]));
const esMap = new Map(itemsEs.map(i => [`${i.appliance}/${i.slug}`, i]));
const ptMap = new Map(itemsPt.map(i => [`${i.appliance}/${i.slug}`, i]));

const correctedFaqLogs = [];
const correctedRegionalLogs = [];
const correctedEmbellishmentLogs = [];

for (const enItem of dwEn) {
  const key = `${enItem.appliance}/${enItem.slug}`;
  if (enItem.slug === 'hydroflask') continue; // Keep hydroflask byte-identical

  const esEntry = esMap.get(key);
  const ptEntry = ptMap.get(key);
  if (!esEntry || !ptEntry) continue;

  const cleanNames = cleanItemNames[enItem.slug] || { es: esEntry.item, pt: ptEntry.item };

  // FIX 3: Embellishments / Parentheticals log
  if (esEntry.item !== cleanNames.es) {
    correctedEmbellishmentLogs.push({
      slug: enItem.slug,
      locale: 'es',
      old: esEntry.item,
      new: cleanNames.es
    });
    esEntry.item = cleanNames.es;
  }
  if (ptEntry.item !== cleanNames.pt) {
    correctedEmbellishmentLogs.push({
      slug: enItem.slug,
      locale: 'pt',
      old: ptEntry.item,
      new: cleanNames.pt
    });
    ptEntry.item = cleanNames.pt;
  }

  // FIX 1: FAQ Alignment
  const oldEsFaqCount = esEntry.faqs ? esEntry.faqs.length : 0;
  const oldPtFaqCount = ptEntry.faqs ? ptEntry.faqs.length : 0;
  const newFaqCount = enItem.faqs ? enItem.faqs.length : 0;

  const newEsFaqs = [];
  const newPtFaqs = [];

  for (const f of (enItem.faqs || [])) {
    const translation = faqDictionary[f.question];
    if (translation) {
      newEsFaqs.push({
        question: translation.es.question,
        answer: translation.es.answer
      });
      newPtFaqs.push({
        question: translation.pt.question,
        answer: translation.pt.answer
      });
    } else {
      console.warn(`Missing translation in dictionary for FAQ: "${f.question}" on slug ${enItem.slug}`);
      newEsFaqs.push({ question: f.question, answer: f.answer });
      newPtFaqs.push({ question: f.question, answer: f.answer });
    }
  }

  esEntry.faqs = newEsFaqs;
  ptEntry.faqs = newPtFaqs;

  correctedFaqLogs.push({
    slug: enItem.slug,
    oldEsCount: oldEsFaqCount,
    oldPtCount: oldPtFaqCount,
    newCount: newFaqCount,
    enCount: newFaqCount
  });

  // FIX 2: Regional term & Slashed term replacement across all text fields in Spanish
  // Also clean up shortAnswer for food items if it had slashes or old name
  const isFood = ['bacon', 'sausage', 'pork-chop', 'beef-steak', 'ground-beef', 'salmon-fillet', 'tuna-steak', 'shrimp', 'lobster-tail', 'crab-legs', 'chicken-breast', 'chicken-wings', 'turkey-breast', 'duck-breast', 'egg', 'milk', 'butter', 'cheddar-cheese', 'mozzarella-cheese', 'cream-cheese', 'yogurt', 'heavy-cream', 'sour-cream', 'tofu', 'tempeh', 'apple', 'banana', 'orange', 'strawberry', 'blueberry', 'raspberry', 'blackberry', 'grape', 'watermelon', 'cantaloupe', 'honeydew', 'peach', 'plum', 'nectarine', 'cherry', 'mango', 'pineapple', 'avocado', 'tomato', 'cucumber', 'bell-pepper', 'spinach', 'lettuce', 'broccoli', 'brussels-sprouts', 'cabbage', 'kale', 'carrot', 'celery', 'onion', 'garlic', 'potato', 'sweet-potato', 'zucchini', 'yellow-squash', 'eggplant', 'asparagus', 'green-beans', 'peas', 'corn', 'mushroom', 'ginger', 'lemon', 'lime', 'white-rice', 'brown-rice', 'quinoa', 'lentils', 'oatmeal', 'spaghetti', 'macaroni', 'white-bread', 'whole-wheat-bread', 'sourdough-bread', 'croissant', 'bagel', 'pita-bread', 'tortilla', 'pizza-dough', 'cookie-dough', 'chocolate-chip-cookies', 'cake', 'muffin', 'pie', 'brownie', 'honey', 'maple-syrup', 'olive-oil', 'vegetable-oil', 'coconut-oil', 'peanut-butter', 'almond-butter', 'nutella', 'jam', 'jelly', 'mayonnaise', 'ketchup', 'mustard', 'soy-sauce', 'hot-sauce', 'salad-dressing', 'hummus', 'guacamole', 'salsa', 'coffee', 'tea', 'soda', 'orange-juice', 'apple-juice', 'wine', 'beer'].includes(enItem.slug);

  if (isFood) {
    esEntry.shortAnswer = `No, nunca debes meter ${cleanNames.es.toLowerCase()} en el lavavajillas.`;
    ptEntry.shortAnswer = `Não, você nunca deve colocar ${cleanNames.pt.toLowerCase()} na máquina de lavar louça.`;

    esEntry.reason = `Nunca debes introducir alimentos ni ingredientes como ${cleanNames.es.toLowerCase()} en el lavavajillas. Los lavavajillas están diseñados exclusivamente para limpiar vajilla, ollas y cubiertos, no para cocinar, desinfectar ni lavar alimentos.\n\nEl calor intenso, los detergentes cáusticos altamente alcalinos y el agua sucia recirculada arruinarán la comida, dejarán residuos químicos tóxicos e impregnarán las tuberías y filtros de grasa, pudiendo quemar la bomba de desagüe.`;
    ptEntry.reason = `Você nunca deve colocar alimentos ou ingredientes como ${cleanNames.pt.toLowerCase()} dentro da máquina de lavar louça. As lava-louças foram projetadas exclusivamente para a higienização de pratos, panelas e talheres, e não para preparo culinário ou lavagem de comida.\n\nA alta temperatura, os detergentes químicos alcalinos e a água suja recirculada estragarão o alimento, deixarão resíduos tóxicos perigosos e causarão entupimento por gordura nos filtros e na bomba da máquina.`;
  }

  // Sanitize any remaining slash synonyms in Spanish text strings
  const sanitizeSpanishSlashes = (str) => {
    if (!str || typeof str !== 'string') return str;
    return str
      .replace(/Boniato \/ Batata Dulce/gi, 'Batata dulce')
      .replace(/Patata \/ Papa/gi, 'Papa')
      .replace(/Plátano \/ Banana/gi, 'Plátano')
      .replace(/Fresa \/ Frutilla/gi, 'Fresa')
      .replace(/Melocotón \/ Durazno/gi, 'Durazno')
      .replace(/Piña \/ Ananá/gi, 'Piña')
      .replace(/Aguacate \/ Palta/gi, 'Aguacate')
      .replace(/Pimiento \/ Morrón/gi, 'Pimiento')
      .replace(/Pimiento \/ Morrón/gi, 'Pimiento')
      .replace(/Repollo \/ Col/gi, 'Repollo')
      .replace(/Judías Verdes \/ Chauchas/gi, 'Judías verdes')
      .replace(/Guisantes \/ Arvejas/gi, 'Guisantes')
      .replace(/Maíz \/ Choclo/gi, 'Maíz')
      .replace(/Champiñón \/ Seta/gi, 'Champiñón')
      .replace(/Mantequilla de Cacahuete \/ Maní/gi, 'Mantequilla de maní')
      .replace(/Refresco \/ Gaseosa/gi, 'Refresco')
      .replace(/Zumo \/ Jugo de Naranja/gi, 'Jugo de naranja')
      .replace(/Zumo \/ Jugo de Manzana/gi, 'Jugo de manzana')
      .replace(/Nata para Montar \/ Crema de Leche/gi, 'Crema de leche')
      .replace(/Tocino \/ Panceta/gi, 'Tocino')
      .replace(/Bife \/ Filete de Ternera/gi, 'Filete de res')
      .replace(/Carne Picada \/ Molida/gi, 'Carne molida')
      .replace(/Camarones \/ Gambas/gi, 'Camarones')
      .replace(/Lima \/ Limón Verde/gi, 'Limón verde')
      .replace(/Cruasán \/ Croissant/gi, 'Croissant')
      .replace(/Pastel \/ Tarta/gi, 'Pastel')
      .replace(/Muffin \/ Magdalena/gi, 'Muffin')
      .replace(/Tarta \/ Pastel Relleno/gi, 'Tarta')
      .replace(/Platos de Papel \/ Cartón Desechables/gi, 'Platos de papel')
      .replace(/Plato de Papel Desechable/gi, 'Plato de papel')
      .replace(/Contenedor de Plástico \/ Tupper/gi, 'Contenedor de plástico')
      .replace(/Vaso de Unicel \/ Poliestireno Expandido/gi, 'Vaso de unicel')
      .replace(/Frascos Mason \/ Tarros de Cristal/gi, 'Frascos Mason')
      .replace(/Tarro de Cristal \/ Frasco Mason/gi, 'Tarro de cristal')
      .replace(/Espuma Viscoelástica \/ Almohada Memory Foam/gi, 'Espuma viscoelástica')
      .replace(/Zapatos \/ Sandalias Crocs/gi, 'Sandalias Crocs')
      .replace(/Zapatillas de Correr \/ Tenis Deportivos/gi, 'Zapatillas de correr')
      .replace(/Suéter de Lana \/ Ropa de Lana/gi, 'Suéter de lana')
      .replace(/Biberones \/ Mamaderas para Bebé/gi, 'Biberones')
      .replace(/Vasos de Aprendizaje \/ Vasos Antigoteo/gi, 'Vasos de aprendizaje')
      .replace(/Chupetes \/ Chupones para Bebé/gi, 'Chupetes')
      .replace(/Lana de Acero \/ Estropajo Metálico/gi, 'Lana de acero')
      .replace(/Tapete de Silicona para Hornear \(Silpat \/ Baking Mat\)/gi, 'Tapete de silicona para hornear')
      .replace(/Prensador de Ajos \/ Prensa Ajos/gi, 'Prensador de ajos')
      .replace(/Rallador de Queso \(Cheese Grater \/ Microplane\)/gi, 'Rallador de queso')
      .replace(/Pelador de Patatas \/ Pelapapas/gi, 'Pelador de papas')
      .replace(/Jarra de Cafetera de Goteo/gi, 'Jarra de cafetera')
      .replace(/Bandeja de Hornear \/ Placa de Horno/gi, 'Bandeja de hornear')
      .replace(/Molde para Muffins \/ Magdalenas/gi, 'Molde para muffins')
      .replace(/Platos y Recipientes de Peltre \/ Estaño/gi, 'Platos de peltre')
      .replace(/Vajilla Antigua \/ Porcelana Fina/gi, 'Vajilla antigua')
      .replace(/Cuchillo de Pan \/ Cuchillo de Sierra/gi, 'Cuchillo de pan')
      .replace(/Cuchillo Mondador \/ Pelador/gi, 'Cuchillo mondador')
      .replace(/Cuchillos de Carne \/ Chuleteros/gi, 'Cuchillos de carne')
      .replace(/Navaja de Bolsillo \/ Navaja Suiza/gi, 'Navaja de bolsillo')
      .replace(/Copas de Champán \/ Flauta/gi, 'Copas de champán')
      .replace(/Espátula de Goma \/ Caucho Tradicional/gi, 'Espátula de goma')
      .replace(/Batidor de Varillas \/ Globo/gi, 'Batidor de varillas')
      .replace(/Plato de Cerámica \/ Loza/gi, 'Plato de cerámica')
      .replace(/Tazón o Bol de Vidrio/gi, 'Tazón de vidrio')
      .replace(/Sartén Antiadherente \(Teflón \/ Cerámica\)/gi, 'Sartén antiadherente')
      .replace(/Hierro Fundido Esmaltado \(Le Creuset \/ Staub\)/gi, 'Hierro fundido esmaltado');
  };

  ['shortAnswer', 'reason', 'tip', 'learnMore', 'keyRisk', 'material'].forEach(field => {
    if (esEntry[field]) esEntry[field] = sanitizeSpanishSlashes(esEntry[field]);
  });
  if (Array.isArray(esEntry.tips)) {
    esEntry.tips = esEntry.tips.map(sanitizeSpanishSlashes);
  }
  if (Array.isArray(esEntry.warnings)) {
    esEntry.warnings = esEntry.warnings.map(sanitizeSpanishSlashes);
  }
}

// 5. WRITE CORRECTED DATA BACK TO JSON FILES
fs.writeFileSync(itemsEsPath, JSON.stringify(itemsEs, null, 2), 'utf8');
fs.writeFileSync(itemsPtPath, JSON.stringify(itemsPt, null, 2), 'utf8');

console.log(`Saved corrected items.es.json and items.pt.json.`);
console.log(`- FAQ Alignments logged: ${correctedFaqLogs.length}`);
console.log(`- Embellishments/Parentheticals resolved: ${correctedEmbellishmentLogs.length}`);
