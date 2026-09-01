const foodNames = {
  "bacon": { es: "Tocino / Panceta (Bacon)", pt: "Bacon" },
  "sausage": { es: "Salchicha / Embutido", pt: "Linguiça / Salsicha" },
  "pork-chop": { es: "Chuleta de Cerdo", pt: "Bisteca de Porco" },
  "beef-steak": { es: "Bife / Filete de Ternera", pt: "Bife de Carne Bovina" },
  "ground-beef": { es: "Carne Picada / Molida", pt: "Carne Moída" },
  "salmon-fillet": { es: "Filete de Salmón", pt: "Filé de Salmão" },
  "tuna-steak": { es: "Filete de Atún", pt: "Filé de Atum" },
  "shrimp": { es: "Camarones / Gambas", pt: "Camarão" },
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
  "heavy-cream": { es: "Nata para Montar / Crema de Leche", pt: "Creme de Leite Fresco" },
  "sour-cream": { es: "Crema Agria (Sour Cream)", pt: "Sour Cream (Creme Azedo)" },
  "tofu": { es: "Tofu", pt: "Tofu" },
  "tempeh": { es: "Tempeh", pt: "Tempeh" },
  "apple": { es: "Manzana", pt: "Maçã" },
  "banana": { es: "Plátano / Banana", pt: "Banana" },
  "orange": { es: "Naranja", pt: "Laranja" },
  "strawberry": { es: "Fresa / Frutilla", pt: "Morango" },
  "blueberry": { es: "Arándano Azul", pt: "Mirtilo (Blueberry)" },
  "raspberry": { es: "Frambuesa", pt: "Framboesa" },
  "blackberry": { es: "Mora", pt: "Amora" },
  "grape": { es: "Uva", pt: "Uva" },
  "watermelon": { es: "Sandía", pt: "Melancia" },
  "cantaloupe": { es: "Melón Cantalupo", pt: "Melão Cantaloupe" },
  "honeydew": { es: "Melón Verde (Honeydew)", pt: "Melão Honeydew" },
  "peach": { es: "Melocotón / Durazno", pt: "Pêssego" },
  "plum": { es: "Ciruela", pt: "Ameixa" },
  "nectarine": { es: "Nectarina", pt: "Nectarina" },
  "cherry": { es: "Cereza", pt: "Cereja" },
  "mango": { es: "Mango", pt: "Manga" },
  "pineapple": { es: "Piña / Ananá", pt: "Abacaxi" },
  "avocado": { es: "Aguacate / Palta", pt: "Abacate" },
  "tomato": { es: "Tomate", pt: "Tomate" },
  "cucumber": { es: "Pepino", pt: "Pepino" },
  "bell-pepper": { es: "Pimiento / Morrón", pt: "Pimentão" },
  "spinach": { es: "Espinaca", pt: "Espinafre" },
  "lettuce": { es: "Lechuga", pt: "Alface" },
  "broccoli": { es: "Brócoli", pt: "Brócolis" },
  "brussels-sprouts": { es: "Coles de Bruselas", pt: "Couve-de-Bruxelas" },
  "cabbage": { es: "Repollo / Col", pt: "Repolho" },
  "kale": { es: "Col Rizada (Kale)", pt: "Couve (Kale)" },
  "carrot": { es: "Zanahoria", pt: "Cenoura" },
  "celery": { es: "Apio", pt: "Aipo / Salsão" },
  "onion": { es: "Cebolla", pt: "Cebola" },
  "garlic": { es: "Ajo", pt: "Alho" },
  "potato": { es: "Patata / Papa", pt: "Batata" },
  "sweet-potato": { es: "Boniato / Batata Dulce", pt: "Batata-Doce" },
  "zucchini": { es: "Calabacín", pt: "Abobrinha" },
  "yellow-squash": { es: "Calabaza Amarilla", pt: "Abobrinha Amarela" },
  "eggplant": { es: "Berenjena", pt: "Beringela" },
  "asparagus": { es: "Espárrago", pt: "Aspargo" },
  "green-beans": { es: "Judías Verdes / Chauchas", pt: "Vagem" },
  "peas": { es: "Guisantes / Arvejas", pt: "Ervilhas" },
  "corn": { es: "Maíz / Choclo", pt: "Milho" },
  "mushroom": { es: "Champiñón / Seta", pt: "Cogumelo / Champignon" },
  "ginger": { es: "Jengibre", pt: "Gengibre" },
  "lemon": { es: "Limón Amarillo", pt: "Limão Siciliano" },
  "lime": { es: "Lima / Limón Verde", pt: "Limão Taiti" },
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
  "croissant": { es: "Cruasán / Croissant", pt: "Croissant" },
  "bagel": { es: "Bagel", pt: "Bagel" },
  "pita-bread": { es: "Pan de Pita", pt: "Pão Sírio / Pita" },
  "tortilla": { es: "Tortilla de Maíz o Trigo", pt: "Tortilha" },
  "pizza-dough": { es: "Masa de Pizza", pt: "Massa de Pizza" },
  "cookie-dough": { es: "Masa para Galletas", pt: "Massa de Biscoito / Cookie" },
  "chocolate-chip-cookies": { es: "Galletas con Chispas de Chocolate", pt: "Cookies com Gotas de Chocolate" },
  "cake": { es: "Pastel / Tarta", pt: "Bolo" },
  "muffin": { es: "Muffin / Magdalena", pt: "Muffin" },
  "pie": { es: "Tarta / Pastel Relleno (Pie)", pt: "Torta Doce" },
  "brownie": { es: "Brownie de Chocolate", pt: "Brownie" },
  "honey": { es: "Miel", pt: "Mel" },
  "maple-syrup": { es: "Jarabe de Arce (Maple Syrup)", pt: "Xarope de Bordo (Maple Syrup)" },
  "olive-oil": { es: "Aceite de Oliva", pt: "Azeite de Oliva" },
  "vegetable-oil": { es: "Aceite Vegetal", pt: "Óleo Vegetal" },
  "coconut-oil": { es: "Aceite de Coco", pt: "Óleo de Coco" },
  "peanut-butter": { es: "Mantequilla de Cacahuete / Maní", pt: "Manteiga de Amendoim" },
  "almond-butter": { es: "Mantequilla de Almendra", pt: "Manteiga de Amêndoa" },
  "nutella": { es: "Crema de Avellanas Nutella", pt: "Creme de Avelã Nutella" },
  "jam": { es: "Mermelada", pt: "Geleia de Frutas" },
  "jelly": { es: "Jalea", pt: "Geleia" },
  "mayonnaise": { es: "Mayonesa", pt: "Maionese" },
  "ketchup": { es: "Kétchup", pt: "Ketchup" },
  "mustard": { es: "Mostaza", pt: "Mostarda" },
  "soy-sauce": { es: "Salsa de Soja", pt: "Molho de Soja (Shoyu)" },
  "hot-sauce": { es: "Salsa Picante", pt: "Molho de Pimenta" },
  "salad-dressing": { es: "Aderezo para Ensalada", pt: "Molho de Salada" },
  "hummus": { es: "Hummus de Garbanzo", pt: "Húmus" },
  "guacamole": { es: "Guacamole", pt: "Guacamole" },
  "salsa": { es: "Salsa para Dipear", pt: "Molho Salsa" },
  "coffee": { es: "Café Líquido", pt: "Café" },
  "tea": { es: "Té", pt: "Chá" },
  "soda": { es: "Refresco / Gaseosa", pt: "Refrigerante" },
  "orange-juice": { es: "Zumo / Jugo de Naranja", pt: "Suco de Laranja" },
  "apple-juice": { es: "Zumo / Jugo de Manzana", pt: "Suco de Maçã" },
  "wine": { es: "Vino", pt: "Vinho" },
  "beer": { es: "Cerveza", pt: "Cerveja" }
};

function generateFoodTranslation(slug, originalItem) {
  const names = foodNames[slug] || { es: originalItem.item, pt: originalItem.item };
  
  return {
    es: {
      item: names.es,
      shortAnswer: `No, nunca debes meter ${names.es} en el lavavajillas.`,
      reason: `Nunca debes introducir alimentos ni ingredientes como ${names.es} en el lavavajillas. Los lavavajillas están diseñados exclusivamente para limpiar vajilla, ollas y cubiertos, no para cocinar, desinfectar ni lavar alimentos.\n\nEl calor intenso, los detergentes cáusticos altamente alcalinos y el agua sucia recirculada arruinarán la comida, dejarán residuos químicos tóxicos e impregnarán las tuberías y filtros de grasa, pudiendo quemar la bomba de desagüe.`,
      tips: [
        "Lava las frutas y verduras a mano bajo el chorro de agua fría del grifo.",
        "Retira todos los restos de comida de los platos antes de meterlos al lavavajillas.",
        "Cocina siempre los alimentos con electrodomésticos diseñados para ello (horno, estufa, microondas)."
      ],
      warnings: [
        "Los detergentes para lavavajillas dejan residuos químicos altamente tóxicos en los alimentos.",
        "La grasa y los trozos de comida pueden obstruir los filtros y quemar la bomba de desagüe del lavavajillas."
      ],
      faqs: [
        {
          question: "¿Se pueden lavar verduras o alimentos en el lavavajillas?",
          answer: "No, está totalmente desaconsejado. El agua caliente estropeará la textura y los residuos de jabón los volverán no aptos para el consumo."
        },
        {
          question: "¿El lavavajillas esteriliza la comida?",
          answer: "No, el lavavajillas recircula agua con suciedad y químicos que contaminarán el alimento con bacterias y jabón."
        },
        {
          question: "¿Qué pasa si enciendo el lavavajillas sin jabón para lavar alimentos?",
          answer: "Incluso sin jabón, los restos de comida atascarán el filtro y la bomba de desagüe, y el calor dañará el alimento."
        }
      ],
      material: originalItem.material ? (originalItem.material === 'Animal Protein' ? 'Proteína Animal' : originalItem.material === 'Vegetable / Produce' ? 'Vegetal / Producto Fresco' : 'Ingrediente Alimentario') : 'Ingrediente Alimentario',
      keyRisk: "Contaminación química por detergente cáustico y obstrucción de la bomba de desagüe",
      tip: "Lava los alimentos a mano con agua potable fría; usa el lavavajillas solo para vajilla y ollas.",
      learnMore: "Los lavavajillas domésticos utilizan ciclos de recirculación hidráulica con agentes tensoactivos alcalinos no aptos para el contacto con alimentos para consumo directo."
    },
    pt: {
      item: names.pt,
      shortAnswer: `Não, você nunca deve colocar ${names.pt} na máquina de lavar louça.`,
      reason: `Você nunca deve colocar alimentos ou ingredientes como ${names.pt} dentro da máquina de lavar louça. As lava-louças foram projetadas exclusivamente para a higienização de pratos, panelas e talheres, e não para preparo culinário ou lavagem de comida.\n\nA alta temperatura, os detergentes químicos alcalinos e a água suja recirculada estragarão o alimento, deixarão resíduos tóxicos perigosos e causarão entupimento por gordura nos filtros e na bomba da máquina.`,
      tips: [
        "Lave frutas, legumes e verduras manualmente em água corrente fria na pia.",
        "Raspe e descarte os restos de comida dos pratos antes de colocar na lava-louças.",
        "Cozinhe os alimentos utilizando aparelhos adequados (fogão, forno, micro-ondas ou air fryer)."
      ],
      warnings: [
        "Detergentes para lava-louças deixam resíduos químicos tóxicos sobre alimentos comestíveis.",
        "Pedaços de comida e gordura pesada entopem os filtros e queimam a bomba de drenagem da máquina."
      ],
      faqs: [
        {
          question: "Pode lavar verduras ou legumes na máquina de lavar louça?",
          answer: "Não, isso é fortemente desaconselhado. A água quente amolecerá os vegetais e os resíduos químicos de sabão os tornarão impróprios para consumo."
        },
        {
          question: "A lava-louças esteriliza alimentos?",
          answer: "Não, a máquina utiliza água recirculada com gordura e sabão, contaminando a comida com bactérias e produtos cáusticos."
        },
        {
          question: "E se eu ligar a máquina sem sabão para cozinhar ou lavar comida?",
          answer: "Mesmo sem sabão, resíduos de alimentos entopem os filtros e o calor inadequado estragará o ingrediente."
        }
      ],
      material: originalItem.material ? (originalItem.material === 'Animal Protein' ? 'Proteína Animal' : originalItem.material === 'Vegetable / Produce' ? 'Vegetal / Produto Fresco' : 'Ingrediente Alimentício') : 'Ingrediente Alimentício',
      keyRisk: "Contaminação química por sabão cáustico e entupimento da bomba de drenagem",
      tip: "Higienize alimentos à mão com água potável; reserve a lava-louças apenas para louças e utensílios.",
      learnMore: "Máquinas de lavar louça utilizam água de recirculação sob pressão com tensoativos alcalinos incompatíveis com a segurança alimentar direta."
    }
  };
}

module.exports = {
  foodNames,
  generateFoodTranslation
};
