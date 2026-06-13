const fs = require('fs');
const path = require('path');

// Target file path
const TARGET_PATH = path.join(__dirname, '../src/data/items.json');

// List of all items per appliance
const dataSpecs = {
  dishwasher: [
    // Bottles
    { name: "Hydro Flask", slug: "hydroflask", safe: "no", type: "vacuum-bottle" },
    { name: "Yeti Tumbler", slug: "yeti", safe: "yes", type: "yeti-bottle" },
    { name: "Stanley Cup", slug: "stanley-cup", safe: "no", type: "vacuum-bottle" },
    { name: "Nalgene Bottle", slug: "nalgene", safe: "yes", type: "plastic-bottle" },
    { name: "Contigo Travel Mug", slug: "contigo", safe: "yes", type: "plastic-bottle" },
    { name: "S'well Bottle", slug: "swell-bottle", safe: "no", type: "vacuum-bottle" },
    { name: "Klean Kanteen", slug: "klean-kanteen", safe: "no", type: "vacuum-bottle" },
    { name: "Owala Water Bottle", slug: "owala", safe: "no", type: "vacuum-bottle" },
    { name: "CamelBak Bottle", slug: "camelbak", safe: "yes", type: "plastic-bottle" },
    { name: "Thermos Flask", slug: "thermos", safe: "no", type: "vacuum-bottle" },
    // Cookware
    { name: "Cast Iron Skillet", slug: "cast-iron-skillet", safe: "no", type: "cast-iron" },
    { name: "Non-Stick Pan", slug: "non-stick-pan", safe: "no", type: "non-stick" },
    { name: "Copper Pan", slug: "copper-pan", safe: "no", type: "copper" },
    { name: "Wok", slug: "wok", safe: "no", type: "carbon-steel" },
    { name: "Carbon Steel Pan", slug: "carbon-steel-pan", safe: "no", type: "carbon-steel" },
    { name: "Enameled Cast Iron", slug: "enameled-cast-iron", safe: "no", type: "enameled-iron" },
    { name: "Stainless Steel Pan", slug: "stainless-steel-pan", safe: "yes", type: "metal-cookware" },
    { name: "Aluminum Pan", slug: "aluminum-pan", safe: "no", type: "aluminum" },
    { name: "Ceramic Pan", slug: "ceramic-pan", safe: "no", type: "non-stick" },
    // Knives
    { name: "Chef's Knife", slug: "chefs-knife", safe: "no", type: "sharp-knife" },
    { name: "Bread Knife", slug: "bread-knife", safe: "no", type: "sharp-knife" },
    { name: "Paring Knife", slug: "paring-knife", safe: "no", type: "sharp-knife" },
    { name: "Santoku Knife", slug: "santoku-knife", safe: "no", type: "sharp-knife" },
    { name: "Steak Knives", slug: "steak-knives", safe: "no", type: "sharp-knife" },
    { name: "Pocket Knife", slug: "pocket-knife", safe: "no", type: "sharp-knife" },
    { name: "Kitchen Shears", slug: "kitchen-shears", safe: "no", type: "sharp-knife" },
    // Appliance parts
    { name: "Instant Pot Lid", slug: "instant-pot-lid", safe: "depends", type: "appliance-part" },
    { name: "Ninja Blender Lid", slug: "ninja-blender-lid", safe: "depends", type: "appliance-part" },
    { name: "NutriBullet Cup", slug: "nutribullet-cup", safe: "depends", type: "appliance-part" },
    { name: "Air Fryer Basket", slug: "air-fryer-basket", safe: "no", type: "non-stick" },
    { name: "Instant Pot Inner Pot", slug: "instant-pot-inner-pot", safe: "yes", type: "metal-cookware" },
    { name: "Vitamix Container", slug: "vitamix-container", safe: "depends", type: "appliance-part" },
    { name: "Cuisinart Blade", slug: "cuisinart-blade", safe: "no", type: "sharp-knife" },
    // Drinkware
    { name: "Crystal Glasses", slug: "crystal-glasses", safe: "no", type: "crystal" },
    { name: "Wine Glasses", slug: "wine-glasses", safe: "depends", type: "glassware" },
    { name: "Champagne Flutes", slug: "champagne-flutes", safe: "depends", type: "glassware" },
    { name: "Mason Jars", slug: "mason-jars", safe: "yes", type: "glassware" },
    { name: "Copper Mugs", slug: "copper-mugs", safe: "no", type: "copper" },
    { name: "Travel Mug", slug: "travel-mug", safe: "no", type: "vacuum-bottle" },
    { name: "Plastic Cups", slug: "plastic-cups", safe: "yes", type: "plasticware" },
    { name: "Acrylic Glasses", slug: "acrylic-glasses", safe: "yes", type: "plasticware" },
    { name: "Bamboo Cups", slug: "bamboo-cups", safe: "no", type: "wood-item" },
    // Cookware accessories
    { name: "Wooden Spoon", slug: "wooden-spoon", safe: "no", type: "wood-item" },
    { name: "Wooden Cutting Board", slug: "wooden-cutting-board", safe: "no", type: "wood-item" },
    { name: "Plastic Cutting Board", slug: "plastic-cutting-board", safe: "yes", type: "plasticware" },
    { name: "Bamboo Cutting Board", slug: "bamboo-cutting-board", safe: "no", type: "wood-item" },
    { name: "Silicone Spatula", slug: "silicone-spatula", safe: "yes", type: "silicone-item" },
    { name: "Rubber Spatula", slug: "rubber-spatula", safe: "yes", type: "silicone-item" },
    { name: "Whisk", slug: "whisk", safe: "yes", type: "metal-cookware" },
    { name: "Tongs", slug: "tongs", safe: "yes", type: "metal-cookware" },
    { name: "Measuring Cups", slug: "measuring-cups", safe: "yes", type: "metal-cookware" },
    { name: "Measuring Spoons", slug: "measuring-spoons", safe: "yes", type: "metal-cookware" },
    // Bakeware
    { name: "Muffin Tin", slug: "muffin-tin", safe: "yes", type: "metal-cookware" },
    { name: "Baking Sheet", slug: "baking-sheet", safe: "yes", type: "metal-cookware" },
    { name: "Bundt Pan", slug: "bundt-pan", safe: "no", type: "non-stick" },
    { name: "Springform Pan", slug: "springform-pan", safe: "no", type: "non-stick" },
    { name: "Cast Iron Dutch Oven", slug: "cast-iron-dutch-oven", safe: "no", type: "cast-iron" },
    // Specialty
    { name: "Gold Silverware", slug: "gold-silverware", safe: "no", type: "gold-trim" },
    { name: "Silver Silverware", slug: "silver-silverware", safe: "yes", type: "metal-cookware" },
    { name: "Pewter Dishes", slug: "pewter-dishes", safe: "no", type: "aluminum" },
    { name: "Antique Dishes", slug: "antique-dishes", safe: "no", type: "crystal" },
    { name: "Baby Bottles", slug: "baby-bottles", safe: "yes", type: "plasticware" },
    { name: "Sippy Cups", slug: "sippy-cups", safe: "yes", type: "plasticware" },
    { name: "Pacifiers", slug: "pacifiers", safe: "yes", type: "silicone-item" },
    { name: "Bottle Brush", slug: "bottle-brush", safe: "yes", type: "silicone-item" },
    { name: "Sponges", slug: "sponges", safe: "no", type: "sponge" },
    { name: "Steel Wool", slug: "steel-wool", safe: "no", type: "metal-cookware" },
    // Extra 13
    { name: "Silicone Baking Mat", slug: "silicone-baking-mat", safe: "yes", type: "silicone-item" },
    { name: "Corelle Plates", slug: "corelle-plates", safe: "yes", type: "glassware" },
    { name: "Tupperware Container", slug: "tupperware", safe: "yes", type: "plasticware" },
    { name: "Bento Box", slug: "bento-box", safe: "yes", type: "plasticware" },
    { name: "Paper Plates", slug: "paper-plates", safe: "no", type: "paper-item" },
    { name: "Garlic Press", slug: "garlic-press", safe: "yes", type: "metal-cookware" },
    { name: "Cheese Grater", slug: "cheese-grater", safe: "yes", type: "metal-cookware" },
    { name: "Potato Peeler", slug: "potato-peeler", safe: "yes", type: "metal-cookware" },
    { name: "Meat Thermometer", slug: "meat-thermometer", safe: "no", type: "vacuum-bottle" },
    { name: "Coffee Pot", slug: "coffee-pot", safe: "depends", type: "glassware" },
    { name: "Soda Can", slug: "soda-can", safe: "no", type: "aluminum" },
    { name: "Pyrex Dish", slug: "pyrex-dish", safe: "yes", type: "glassware" },
    { name: "Silicone Ice Cube Trays", slug: "silicone-ice-cube-trays", safe: "yes", type: "silicone-item" }
  ],
  microwave: [
    // Containers
    { name: "Styrofoam Container", slug: "styrofoam", safe: "depends", type: "styrofoam" },
    { name: "Aluminum Foil", slug: "aluminum-foil", safe: "no", type: "metal" },
    { name: "Plastic Wrap", slug: "plastic-wrap", safe: "depends", type: "plastic" },
    { name: "Paper Bag", slug: "paper-bag", safe: "no", type: "paper" },
    { name: "Brown Paper Bag", slug: "brown-paper-bag", safe: "no", type: "paper" },
    { name: "Newspaper", slug: "newspaper", safe: "no", type: "paper" },
    { name: "Cardboard Box", slug: "cardboard-box", safe: "depends", type: "cardboard" },
    { name: "Cardboard Pizza Box", slug: "cardboard-pizza-box", safe: "no", type: "cardboard" },
    { name: "Takeout Container", slug: "takeout-container", safe: "depends", type: "plastic" },
    { name: "Solo Cup", slug: "solo-cup", safe: "no", type: "plastic" },
    // Metals
    { name: "Aluminum Pan", slug: "aluminum-pan", safe: "no", type: "metal" },
    { name: "Metal Spoon", slug: "metal-spoon", safe: "no", type: "metal" },
    { name: "Fork in Microwave", slug: "fork-in-microwave", safe: "no", type: "metal" },
    { name: "Gold-Rimmed Plates", slug: "gold-rimmed-plates", safe: "no", type: "metal" },
    { name: "Stainless Steel Bowl", slug: "stainless-steel-bowl", safe: "no", type: "metal" },
    { name: "Copper Bowl", slug: "copper-bowl", safe: "no", type: "metal" },
    { name: "Cast Iron Microwave", slug: "cast-iron-microwave", safe: "no", type: "metal" },
    // Food items
    { name: "Egg in Shell", slug: "egg-in-shell", safe: "no", type: "food-egg" },
    { name: "Whole Egg", slug: "whole-egg", safe: "no", type: "food-egg" },
    { name: "Grapes", slug: "grapes", safe: "no", type: "food-grape" },
    { name: "Hot Peppers", slug: "hot-peppers", safe: "no", type: "food-pepper" },
    { name: "Frozen Meat", slug: "frozen-meat", safe: "depends", type: "food-item" },
    { name: "Breast Milk", slug: "breast-milk", safe: "no", type: "food-liquid" },
    { name: "Baby Food", slug: "baby-food", safe: "depends", type: "food-liquid" },
    { name: "Ramen Cup", slug: "ramen-cup", safe: "no", type: "styrofoam" },
    { name: "Styrofoam Cup", slug: "styrofoam-cup", safe: "no", type: "styrofoam" },
    { name: "Paper Cup", slug: "paper-cup", safe: "depends", type: "paper" },
    // Containers safe/unsafe
    { name: "Ceramic Mug", slug: "ceramic-mug", safe: "yes", type: "ceramic" },
    { name: "Travel Mug", slug: "travel-mug", safe: "no", type: "metal" },
    { name: "Stainless Steel Cup", slug: "stainless-steel-cup", safe: "no", type: "metal" },
    { name: "Mason Jar", slug: "mason-jar", safe: "yes", type: "glass" },
    { name: "Tupperware", slug: "tupperware", safe: "depends", type: "plastic" },
    { name: "Ziploc Bag", slug: "ziploc-bag", safe: "depends", type: "plastic" },
    { name: "Chinese Takeout Box", slug: "chinese-takeout-box", safe: "no", type: "cardboard" },
    { name: "Paper Plate", slug: "paper-plate", safe: "yes", type: "paper" },
    { name: "Paper Towel", slug: "paper-towel", safe: "yes", type: "paper" },
    { name: "Wax Paper", slug: "wax-paper", safe: "yes", type: "paper" },
    { name: "Parchment Paper", slug: "parchment-paper", safe: "yes", type: "paper" },
    { name: "Plastic Bag", slug: "plastic-bag", safe: "no", type: "plastic" },
    // Specialty items
    { name: "CD Disc", slug: "cd-disc", safe: "no", type: "specialty" },
    { name: "Hand Warmers", slug: "hand-warmers", safe: "no", type: "specialty" },
    { name: "Wet Sponge", slug: "wet-sponge", safe: "yes", type: "specialty" },
    { name: "Soap", slug: "soap", safe: "no", type: "specialty" },
    { name: "Candle", slug: "candle", safe: "no", type: "specialty" },
    { name: "Protein Shaker", slug: "protein-shaker", safe: "depends", type: "plastic" },
    { name: "Yeti in Microwave", slug: "yeti-in-microwave", safe: "no", type: "metal" },
    { name: "Styrofoam Plate", slug: "styrofoam-plate", safe: "no", type: "styrofoam" },
    { name: "Foam Cup", slug: "foam-cup", safe: "no", type: "styrofoam" },
    // Extra 32
    { name: "Butter", slug: "butter", safe: "yes", type: "food-item" },
    { name: "Honey", slug: "honey", safe: "yes", type: "food-item" },
    { name: "Chocolate", slug: "chocolate", safe: "yes", type: "food-item" },
    { name: "Cold Pizza", slug: "cold-pizza", safe: "yes", type: "food-item" },
    { name: "Water in Cup", slug: "water-in-cup", safe: "yes", type: "food-liquid" },
    { name: "Potatoes", slug: "potatoes", safe: "depends", type: "food-item" },
    { name: "Tomatoes", slug: "tomatoes", safe: "depends", type: "food-item" },
    { name: "Bacon", slug: "bacon", safe: "yes", type: "food-item" },
    { name: "Hot Dogs", slug: "hot-dogs", safe: "depends", type: "food-item" },
    { name: "Leftover Rice", slug: "leftover-rice", safe: "yes", type: "food-item" },
    { name: "Marshmallows", slug: "marshmallows", safe: "yes", type: "food-item" },
    { name: "Bread", slug: "bread", safe: "yes", type: "food-item" },
    { name: "Cheese", slug: "cheese", safe: "yes", type: "food-item" },
    { name: "Milk", slug: "milk", safe: "yes", type: "food-liquid" },
    { name: "Frozen Dinners", slug: "frozen-dinners", safe: "yes", type: "food-item" },
    { name: "Mug Cake", slug: "mug-cake", safe: "yes", type: "food-item" },
    { name: "Popcorn Bag", slug: "popcorn-bag", safe: "yes", type: "paper" },
    { name: "Cooking Oil", slug: "cooking-oil", safe: "yes", type: "food-liquid" },
    { name: "Olive Oil", slug: "olive-oil", safe: "yes", type: "food-liquid" },
    { name: "CorningWare", slug: "corningware", safe: "yes", type: "ceramic" },
    { name: "Pyrex Measuring Cup", slug: "pyrex-measuring-cup", safe: "yes", type: "glass" },
    { name: "Fine China", slug: "fine-china", safe: "no", type: "ceramic" },
    { name: "Wood Skewers", slug: "wood-skewers", safe: "yes", type: "specialty" },
    { name: "Plastic Spoon", slug: "plastic-spoon", safe: "depends", type: "plastic" },
    { name: "Silicone Molds", slug: "silicone-molds", safe: "yes", type: "specialty" },
    { name: "Baby Bottle", slug: "baby-bottle", safe: "depends", type: "plastic" },
    { name: "Breastmilk Bags", slug: "breastmilk-bags", safe: "no", type: "plastic" },
    { name: "Paper Cartons", slug: "paper-cartons", safe: "no", type: "cardboard" },
    { name: "Styrofoam Takeout", slug: "styrofoam-takeout", safe: "no", type: "styrofoam" },
    { name: "Acrylic Cups", slug: "acrylic-cups", safe: "no", type: "plastic" },
    { name: "Metal Twist Ties", slug: "metal-twist-ties", safe: "no", type: "metal" },
    { name: "Thermal Carafe", slug: "thermal-carafe", safe: "no", type: "metal" }
  ],
  freezer: [
    // Fruits
    { name: "Avocado", slug: "avocado", safe: "yes", type: "fruit-berry" },
    { name: "Bananas", slug: "bananas", safe: "yes", type: "fruit-thick" },
    { name: "Grapes", slug: "grapes", safe: "yes", type: "fruit-berry" },
    { name: "Watermelon", slug: "watermelon", safe: "yes", type: "fruit-water" },
    { name: "Strawberries", slug: "strawberries", safe: "yes", type: "fruit-berry" },
    { name: "Blueberries", slug: "blueberries", safe: "yes", type: "fruit-berry" },
    { name: "Raspberries", slug: "raspberries", safe: "yes", type: "fruit-berry" },
    { name: "Peaches", slug: "peaches", safe: "yes", type: "fruit-stone" },
    { name: "Mangoes", slug: "mangoes", safe: "yes", type: "fruit-stone" },
    { name: "Pineapple", slug: "pineapple", safe: "yes", type: "fruit-stone" },
    { name: "Apples", slug: "apples", safe: "yes", type: "fruit-thick" },
    { name: "Oranges", slug: "oranges", safe: "yes", type: "fruit-citrus" },
    { name: "Lemons", slug: "lemons", safe: "yes", type: "fruit-citrus" },
    { name: "Limes", slug: "limes", safe: "yes", type: "fruit-citrus" },
    // Dairy
    { name: "Milk", slug: "milk", safe: "yes", type: "dairy-liquid" },
    { name: "Eggs", slug: "eggs", safe: "no", type: "dairy-egg" },
    { name: "Cheese", slug: "cheese", safe: "depends", type: "dairy-cheese" },
    { name: "Butter", slug: "butter", safe: "yes", type: "dairy-fat" },
    { name: "Cream Cheese", slug: "cream-cheese", safe: "depends", type: "dairy-soft" },
    { name: "Sour Cream", slug: "sour-cream", safe: "no", type: "dairy-soft" },
    { name: "Yogurt", slug: "yogurt", safe: "depends", type: "dairy-soft" },
    { name: "Ice Cream Refreezing", slug: "ice-cream-refreezing", safe: "no", type: "dairy-soft" },
    { name: "Whipped Cream", slug: "whipped-cream", safe: "yes", type: "dairy-fat" },
    { name: "Heavy Cream", slug: "heavy-cream", safe: "yes", type: "dairy-liquid" },
    { name: "Cottage Cheese", slug: "cottage-cheese", safe: "no", type: "dairy-soft" },
    // Drinks
    { name: "Wine", slug: "wine", safe: "depends", type: "drink-alcohol" },
    { name: "Beer", slug: "beer", safe: "depends", type: "drink-carbonated" },
    { name: "Soda Cans", slug: "soda-cans", safe: "no", type: "drink-carbonated" },
    { name: "Juice", slug: "juice", safe: "yes", type: "drink-noncarb" },
    { name: "Coffee", slug: "coffee", safe: "yes", type: "drink-noncarb" },
    { name: "Energy Drinks", slug: "energy-drinks", safe: "no", type: "drink-carbonated" },
    { name: "Kombucha", slug: "kombucha", safe: "no", type: "drink-carbonated" },
    { name: "Sparkling Water", slug: "sparkling-water", safe: "no", type: "drink-carbonated" },
    { name: "Protein Shakes", slug: "protein-shakes", safe: "yes", type: "drink-noncarb" },
    { name: "Smoothies", slug: "smoothies", safe: "yes", type: "drink-noncarb" },
    // Proteins
    { name: "Raw Chicken", slug: "raw-chicken", safe: "yes", type: "protein-meat" },
    { name: "Cooked Chicken", slug: "cooked-chicken", safe: "yes", type: "protein-meat" },
    { name: "Salmon", slug: "salmon", safe: "yes", type: "protein-meat" },
    { name: "Shrimp", slug: "shrimp", safe: "yes", type: "protein-meat" },
    { name: "Ground Beef", slug: "ground-beef", safe: "yes", type: "protein-meat" },
    { name: "Bacon", slug: "bacon", safe: "yes", type: "protein-meat" },
    { name: "Deli Meat", slug: "deli-meat", safe: "yes", type: "protein-meat" },
    { name: "Hot Dogs", slug: "hot-dogs", safe: "yes", type: "protein-meat" },
    { name: "Tofu", slug: "tofu", safe: "yes", type: "protein-meat" },
    { name: "Hard Boiled Eggs", slug: "hard-boiled-eggs", safe: "no", type: "dairy-egg" },
    // Vegetables
    { name: "Lettuce", slug: "lettuce", safe: "no", type: "veg-water" },
    { name: "Potatoes", slug: "potatoes", safe: "no", type: "veg-starch" },
    { name: "Onions", slug: "onions", safe: "yes", type: "veg-dry" },
    { name: "Tomatoes", slug: "tomatoes", safe: "no", type: "veg-water" },
    { name: "Cucumbers", slug: "cucumbers", safe: "no", type: "veg-water" },
    { name: "Celery", slug: "celery", safe: "no", type: "veg-water" },
    { name: "Cabbage", slug: "cabbage", safe: "no", type: "veg-water" },
    { name: "Broccoli", slug: "broccoli", safe: "yes", type: "veg-hard" },
    { name: "Carrots", slug: "carrots", safe: "yes", type: "veg-hard" },
    { name: "Peppers", slug: "peppers", safe: "yes", type: "veg-hard" },
    { name: "Mushrooms", slug: "mushrooms", safe: "yes", type: "veg-hard" },
    { name: "Zucchini", slug: "zucchini", safe: "yes", type: "veg-hard" },
    // Pantry
    { name: "Bread", slug: "bread", safe: "yes", type: "pantry-dry" },
    { name: "Cooked Rice", slug: "cooked-rice", safe: "yes", type: "pantry-cooked" },
    { name: "Cooked Pasta", slug: "cooked-pasta", safe: "yes", type: "pantry-cooked" },
    { name: "Mayo", slug: "mayo", safe: "no", type: "pantry-emulsion" },
    { name: "Ketchup", slug: "ketchup", safe: "yes", type: "pantry-dry" },
    { name: "Mustard", slug: "mustard", safe: "yes", type: "pantry-dry" },
    { name: "Peanut Butter", slug: "peanut-butter", safe: "yes", type: "pantry-dry" },
    { name: "Honey", slug: "honey", safe: "yes", type: "pantry-dry" },
    { name: "Chocolate", slug: "chocolate", safe: "yes", type: "pantry-dry" },
    { name: "Cake", slug: "cake", safe: "yes", type: "pantry-dry" },
    { name: "Cookies", slug: "cookies", safe: "yes", type: "pantry-dry" },
    { name: "Mashed Potatoes", slug: "mashed-potatoes", safe: "yes", type: "pantry-cooked" },
    // Other
    { name: "Candles", slug: "candles", safe: "yes", type: "other-wax" },
    { name: "Flowers", slug: "flowers", safe: "no", type: "other-organic" },
    { name: "Lip Gloss", slug: "lip-gloss", safe: "yes", type: "other-wax" },
    { name: "Batteries", slug: "batteries", safe: "no", type: "other-battery" },
    { name: "Seeds", slug: "seeds", safe: "yes", type: "other-organic" },
    // Extra 6
    { name: "Yeast", slug: "yeast", safe: "yes", type: "pantry-dry" },
    { name: "Ginger Root", slug: "ginger-root", safe: "yes", type: "veg-dry" },
    { name: "Nuts", slug: "nuts", safe: "yes", type: "pantry-dry" },
    { name: "Herbs in Oil", slug: "herbs-in-oil", safe: "yes", type: "pantry-cooked" },
    { name: "Pesto", slug: "pesto", safe: "yes", type: "pantry-cooked" },
    { name: "Avocado Oil", slug: "avocado-oil", safe: "yes", type: "pantry-dry" }
  ],
  oven: [
    // Paper products
    { name: "Parchment Paper", slug: "parchment-paper", safe: "yes", type: "paper-safe" },
    { name: "Wax Paper", slug: "wax-paper", safe: "no", type: "paper-wax" },
    { name: "Cardboard", slug: "cardboard", safe: "no", type: "paper-combustible" },
    { name: "Newspaper", slug: "newspaper", safe: "no", type: "paper-combustible" },
    { name: "Paper Plates", slug: "paper-plates", safe: "no", type: "paper-combustible" },
    { name: "Paper Towels", slug: "paper-towels", safe: "no", type: "paper-combustible" },
    { name: "Tissue Paper", slug: "tissue-paper", safe: "no", type: "paper-combustible" },
    { name: "Paper Bags", slug: "paper-bags", safe: "no", type: "paper-combustible" },
    // Plastics
    { name: "Plastic Wrap", slug: "plastic-wrap", safe: "no", type: "plastic-melt" },
    { name: "Tupperware in Oven", slug: "tupperware-in-oven", safe: "no", type: "plastic-melt" },
    { name: "Ziploc in Oven", slug: "ziploc-in-oven", safe: "no", type: "plastic-melt" },
    { name: "Plastic Cutting Board", slug: "plastic-cutting-board", safe: "no", type: "plastic-melt" },
    { name: "Styrofoam in Oven", slug: "styrofoam-in-oven", safe: "no", type: "plastic-melt" },
    { name: "Plastic Bags in Oven", slug: "plastic-bags-in-oven", safe: "no", type: "plastic-melt" },
    // Cookware
    { name: "Glass Dish", slug: "glass-dish", safe: "yes", type: "glass-tempered" },
    { name: "Pyrex", slug: "pyrex", safe: "yes", type: "glass-tempered" },
    { name: "Cast Iron Oven", slug: "cast-iron-oven", safe: "yes", type: "metal-safe" },
    { name: "Stainless Steel Oven", slug: "stainless-steel-oven", safe: "yes", type: "metal-safe" },
    { name: "Aluminum Foil Oven", slug: "aluminum-foil-oven", safe: "yes", type: "metal-safe" },
    { name: "Aluminum Pan Oven", slug: "aluminum-pan-oven", safe: "yes", type: "metal-safe" },
    { name: "Ceramic Dish", slug: "ceramic-dish", safe: "yes", type: "glass-tempered" },
    { name: "Stoneware", slug: "stoneware", safe: "yes", type: "glass-tempered" },
    { name: "Enameled Dutch Oven", slug: "enameled-dutch-oven", safe: "yes", type: "metal-safe" },
    { name: "Copper Pan Oven", slug: "copper-pan-oven", safe: "depends", type: "metal-handles" },
    { name: "Non-Stick Oven", slug: "non-stick-oven", safe: "depends", type: "metal-handles" },
    // Specialty
    { name: "Pizza Box", slug: "pizza-box", safe: "no", type: "paper-combustible" },
    { name: "Frozen Pizza Directly", slug: "frozen-pizza-directly", safe: "yes", type: "food-direct" },
    { name: "Mason Jar in Oven", slug: "mason-jar-in-oven", safe: "no", type: "glass-untempered" },
    { name: "CorningWare", slug: "corningware", safe: "yes", type: "glass-tempered" },
    { name: "Le Creuset", slug: "le-creuset", safe: "yes", type: "metal-safe" },
    { name: "Pampered Chef Stoneware", slug: "pampered-chef-stoneware", safe: "yes", type: "glass-tempered" },
    { name: "Silicone Molds", slug: "silicone-molds", safe: "yes", type: "silicone-safe" },
    { name: "Wooden Spoon in Oven", slug: "wooden-spoon-in-oven", safe: "no", type: "wood-burn" },
    { name: "Bamboo Skewers", slug: "bamboo-skewers", safe: "depends", type: "wood-burn" },
    // Extra 36
    { name: "Carbon Steel Pan", slug: "carbon-steel-pan", safe: "yes", type: "metal-safe" },
    { name: "Non-Stick Baking Sheet", slug: "non-stick-baking-sheet", safe: "yes", type: "metal-safe" },
    { name: "Aluminum Baking Sheet", slug: "aluminum-baking-sheet", safe: "yes", type: "metal-safe" },
    { name: "Terracotta Pots", slug: "terracotta-pots", safe: "yes", type: "glass-tempered" },
    { name: "Metal Skewers", slug: "metal-skewers", safe: "yes", type: "metal-safe" },
    { name: "Silicone Spatula", slug: "silicone-spatula", safe: "no", type: "silicone-melt" },
    { name: "Plastic Handles", slug: "plastic-handles", safe: "no", type: "plastic-melt" },
    { name: "Wooden Skewers", slug: "wooden-skewers", safe: "depends", type: "wood-burn" },
    { name: "Paper Baking Cups", slug: "paper-baking-cups", safe: "yes", type: "paper-safe" },
    { name: "Foil Cupcake Liners", slug: "foil-cupcake-liners", safe: "yes", type: "metal-safe" },
    { name: "Cast Iron Skillet", slug: "cast-iron-skillet", safe: "yes", type: "metal-safe" },
    { name: "Ceramic Mug", slug: "ceramic-mug", safe: "depends", type: "glass-untempered" },
    { name: "China Plates", slug: "china-plates", safe: "depends", type: "glass-untempered" },
    { name: "Porcelain Ramekin", slug: "porcelain-ramekin", safe: "yes", type: "glass-tempered" },
    { name: "Bread Pan", slug: "bread-pan", safe: "yes", type: "metal-safe" },
    { name: "Springform Pan", slug: "springform-pan", safe: "yes", type: "metal-safe" },
    { name: "Bundt Pan", slug: "bundt-pan", safe: "yes", type: "metal-safe" },
    { name: "Muffin Tin", slug: "muffin-tin", safe: "yes", type: "metal-safe" },
    { name: "Cookie Cutters", slug: "cookie-cutters", safe: "yes", type: "metal-safe" },
    { name: "Pie Pan Metal", slug: "pie-pan-metal", safe: "yes", type: "metal-safe" },
    { name: "Pie Pan Glass", slug: "pie-pan-glass", safe: "yes", type: "glass-tempered" },
    { name: "Roasting Pan", slug: "roasting-pan", safe: "yes", type: "metal-safe" },
    { name: "Cookie Sheet", slug: "cookie-sheet", safe: "yes", type: "metal-safe" },
    { name: "Dutch Oven", slug: "dutch-oven", safe: "yes", type: "metal-safe" },
    { name: "Enameled Cast Iron", slug: "enameled-cast-iron", safe: "yes", type: "metal-safe" },
    { name: "Wire Rack", slug: "wire-rack", safe: "yes", type: "metal-safe" },
    { name: "Butter Paper", slug: "butter-paper", safe: "no", type: "paper-combustible" },
    { name: "Tin Foil", slug: "tin-foil", safe: "yes", type: "metal-safe" },
    { name: "Plastic Wrap Oven", slug: "plastic-wrap-oven", safe: "no", type: "plastic-melt" },
    { name: "Butcher Block", slug: "butcher-block", safe: "no", type: "wood-burn" },
    { name: "Wooden Cutting Board", slug: "wooden-cutting-board", safe: "no", type: "wood-burn" },
    { name: "Rubber Spatula", slug: "rubber-spatula", safe: "no", type: "silicone-melt" },
    { name: "Cotton Kitchen Twine", slug: "cotton-kitchen-twine", safe: "yes", type: "wood-burn" },
    { name: "Parchment Paper Sheets", slug: "parchment-paper-sheets", safe: "yes", type: "paper-safe" },
    { name: "Baking Stone", slug: "baking-stone", safe: "yes", type: "glass-tempered" },
    { name: "Steel Pan", slug: "steel-pan", safe: "yes", type: "metal-safe" }
  ],
  dryer: [
    // Shoes
    { name: "Crocs", slug: "crocs", safe: "no", type: "shoe-resin" },
    { name: "Running Shoes", slug: "running-shoes", safe: "no", type: "shoe-tech" },
    { name: "Sneakers", slug: "sneakers", safe: "depends", type: "shoe-canvas" },
    { name: "Converse", slug: "converse", safe: "depends", type: "shoe-canvas" },
    { name: "Vans", slug: "vans", safe: "depends", type: "shoe-canvas" },
    { name: "Ugg Boots", slug: "ugg-boots", safe: "no", type: "shoe-leather" },
    { name: "Leather Shoes", slug: "leather-shoes", safe: "no", type: "shoe-leather" },
    { name: "Flip Flops", slug: "flip-flops", safe: "no", type: "shoe-resin" },
    { name: "Rain Boots", slug: "rain-boots", safe: "no", type: "shoe-resin" },
    { name: "Ballet Flats", slug: "ballet-flats", safe: "no", type: "shoe-leather" },
    { name: "Heels", slug: "heels", safe: "no", type: "shoe-leather" },
    // Clothing
    { name: "Jeans", slug: "jeans", safe: "yes", type: "cloth-sturdy" },
    { name: "Wool Sweater", slug: "wool-sweater", safe: "no", type: "cloth-wool" },
    { name: "Cashmere", slug: "cashmere", safe: "no", type: "cloth-wool" },
    { name: "Silk Dress", slug: "silk-dress", safe: "no", type: "cloth-delicate" },
    { name: "Swimsuit", slug: "swimsuit", safe: "no", type: "cloth-spandex" },
    { name: "Sports Bra", slug: "sports-bra", safe: "no", type: "cloth-spandex" },
    { name: "Leggings", slug: "leggings", safe: "depends", type: "cloth-spandex" },
    { name: "Down Jacket", slug: "down-jacket", safe: "depends", type: "cloth-down" },
    { name: "Leather Jacket", slug: "leather-jacket", safe: "no", type: "shoe-leather" },
    { name: "Bras", slug: "bras", safe: "no", type: "cloth-spandex" },
    { name: "Lululemon", slug: "lululemon", safe: "depends", type: "cloth-spandex" },
    { name: "Athletic Wear", slug: "athletic-wear", safe: "depends", type: "cloth-spandex" },
    { name: "Compression Socks", slug: "compression-socks", safe: "no", type: "cloth-spandex" },
    { name: "Nylon", slug: "nylon", safe: "depends", type: "cloth-spandex" },
    // Bedding
    { name: "Pillows", slug: "pillows", safe: "depends", type: "cloth-down" },
    { name: "Down Comforter", slug: "down-comforter", safe: "depends", type: "cloth-down" },
    { name: "Weighted Blanket", slug: "weighted-blanket", safe: "no", type: "cloth-weighted" },
    { name: "Electric Blanket", slug: "electric-blanket", safe: "no", type: "cloth-electric" },
    { name: "Memory Foam", slug: "memory-foam", safe: "no", type: "shoe-resin" },
    { name: "Wool Blanket", slug: "wool-blanket", safe: "no", type: "cloth-wool" },
    { name: "Silk Pillowcase", slug: "silk-pillowcase", safe: "no", type: "cloth-delicate" },
    { name: "Feather Pillow", slug: "feather-pillow", safe: "depends", type: "cloth-down" },
    // Specialty
    { name: "Backpack", slug: "backpack", safe: "no", type: "cloth-weighted" },
    { name: "Stuffed Animals", slug: "stuffed-animals", safe: "depends", type: "cloth-sturdy" },
    { name: "Hats", slug: "hats", safe: "no", type: "cloth-wool" },
    { name: "Baseball Cap", slug: "baseball-cap", safe: "no", type: "cloth-weighted" },
    { name: "Shower Pouf", slug: "shower-pouf", safe: "no", type: "shoe-resin" },
    { name: "Yoga Mat", slug: "yoga-mat", safe: "no", type: "shoe-resin" },
    { name: "Gym Bag", slug: "gym-bag", safe: "no", type: "cloth-weighted" },
    { name: "Canvas Shoes", slug: "canvas-shoes", safe: "depends", type: "shoe-canvas" },
    // Extra 19
    { name: "Velvet Hanger", slug: "velvet-hanger", safe: "no", type: "cloth-weighted" },
    { name: "Polyester Shirt", slug: "polyester-shirt", safe: "yes", type: "cloth-sturdy" },
    { name: "Cotton T-Shirt", slug: "cotton-tshirt", safe: "yes", type: "cloth-sturdy" },
    { name: "Linen Trousers", slug: "linen-trousers", safe: "yes", type: "cloth-sturdy" },
    { name: "Fleece Blanket", slug: "fleece-blanket", safe: "yes", type: "cloth-sturdy" },
    { name: "Microfiber Towels", slug: "microfiber-towels", safe: "yes", type: "cloth-sturdy" },
    { name: "Bath Mat", slug: "bath-mat", safe: "depends", type: "cloth-weighted" },
    { name: "Sleeping Bag", slug: "sleeping-bag", safe: "depends", type: "cloth-down" },
    { name: "Tablecloth", slug: "tablecloth", safe: "yes", type: "cloth-sturdy" },
    { name: "Cloth Diapers", slug: "cloth-diapers", safe: "yes", type: "cloth-sturdy" },
    { name: "Curtains", slug: "curtains", safe: "depends", type: "cloth-delicate" },
    { name: "Socks", slug: "socks", safe: "yes", type: "cloth-sturdy" },
    { name: "Underwear", slug: "underwear", safe: "yes", type: "cloth-sturdy" },
    { name: "Lace Garments", slug: "lace-garments", safe: "no", type: "cloth-delicate" },
    { name: "Tights", slug: "tights", safe: "no", type: "cloth-delicate" },
    { name: "Denim Jacket", slug: "denim-jacket", safe: "yes", type: "cloth-sturdy" },
    { name: "Acrylic Blanket", slug: "acrylic-blanket", safe: "yes", type: "cloth-sturdy" },
    { name: "Beaded Dress", slug: "beaded-dress", safe: "no", type: "cloth-delicate" },
    { name: "Sequined Top", slug: "sequined-top", safe: "no", type: "cloth-delicate" }
  ],
  airfryer: [
    // Paper/foil
    { name: "Parchment Paper Airfryer", slug: "parchment-paper-airfryer", safe: "depends", type: "paper-fry" },
    { name: "Aluminum Foil Airfryer", slug: "aluminum-foil-airfryer", safe: "depends", type: "foil-fry" },
    { name: "Wax Paper Airfryer", slug: "wax-paper-airfryer", safe: "no", type: "wax-fry" },
    { name: "Paper Towel Airfryer", slug: "paper-towel-airfryer", safe: "no", type: "paper-towel-fry" },
    { name: "Paper Plates Airfryer", slug: "paper-plates-airfryer", safe: "no", type: "paper-towel-fry" },
    // Cookware
    { name: "Glass in Airfryer", slug: "glass-in-airfryer", safe: "no", type: "glass-fry" },
    { name: "Pyrex Airfryer", slug: "pyrex-airfryer", safe: "no", type: "glass-fry" },
    { name: "Ceramic in Airfryer", slug: "ceramic-in-airfryer", safe: "yes", type: "ceramic-fry" },
    { name: "Mason Jar Airfryer", slug: "mason-jar-airfryer", safe: "no", type: "glass-fry" },
    { name: "Ramekin Airfryer", slug: "ramekin-airfryer", safe: "yes", type: "ceramic-fry" },
    { name: "Silicone Molds Airfryer", slug: "silicone-molds-airfryer", safe: "yes", type: "silicone-fry" },
    { name: "Toothpicks Airfryer", slug: "toothpicks-airfryer", safe: "yes", type: "wood-skewer" },
    { name: "Wooden Skewers Airfryer", slug: "wooden-skewers-airfryer", safe: "depends", type: "wood-skewer" },
    // Frozen foods
    { name: "Frozen Pizza Airfryer", slug: "frozen-pizza-airfryer", safe: "yes", type: "frozen-food" },
    { name: "Frozen Fries", slug: "frozen-fries", safe: "yes", type: "frozen-food" },
    { name: "Frozen Chicken Nuggets", slug: "frozen-chicken-nuggets", safe: "yes", type: "frozen-food" },
    { name: "Frozen Fish Sticks", slug: "frozen-fish-sticks", safe: "yes", type: "frozen-food" },
    { name: "Frozen Burritos", slug: "frozen-burritos", safe: "yes", type: "frozen-food" },
    { name: "Frozen Egg Rolls", slug: "frozen-egg-rolls", safe: "yes", type: "frozen-food" },
    { name: "Hot Pockets", slug: "hot-pockets", safe: "yes", type: "frozen-food" },
    // Fresh foods
    { name: "Raw Chicken Airfryer", slug: "raw-chicken-airfryer", safe: "yes", type: "fresh-meat" },
    { name: "Bacon Airfryer", slug: "bacon-airfryer", safe: "yes", type: "fresh-meat" },
    { name: "Steak Airfryer", slug: "steak-airfryer", safe: "yes", type: "fresh-meat" },
    { name: "Eggs Airfryer", slug: "eggs-airfryer", safe: "yes", type: "fresh-egg" },
    { name: "Broccoli Airfryer", slug: "broccoli-airfryer", safe: "yes", type: "fresh-veg" },
    { name: "Asparagus Airfryer", slug: "asparagus-airfryer", safe: "yes", type: "fresh-veg" },
    { name: "Salmon Airfryer", slug: "salmon-airfryer", safe: "yes", type: "fresh-meat" },
    // Specialty
    { name: "Cooking Spray Airfryer", slug: "cooking-spray-airfryer", safe: "no", type: "aerosol-spray" },
    { name: "Butter Airfryer", slug: "butter-airfryer", safe: "yes", type: "oil-fat" },
    { name: "Cheese Airfryer", slug: "cheese-airfryer", safe: "depends", type: "cheese-melt" },
    { name: "Plastic Container Airfryer", slug: "plastic-container-airfryer", safe: "no", type: "plastic-melt" },
    { name: "Styrofoam Airfryer", slug: "styrofoam-airfryer", safe: "no", type: "plastic-melt" },
    { name: "Wet Batter Airfryer", slug: "wet-batter-airfryer", safe: "no", type: "wet-batter" },
    // Extra 37
    { name: "Aluminum Pan", slug: "aluminum-pan", safe: "yes", type: "metal-pan" },
    { name: "Paper Baking Cups", slug: "paper-baking-cups", safe: "depends", type: "paper-fry" },
    { name: "Silicone Tongs", slug: "silicone-tongs", safe: "yes", type: "silicone-fry" },
    { name: "Metal Racks", slug: "metal-racks", safe: "yes", type: "metal-pan" },
    { name: "Cast Iron", slug: "cast-iron", safe: "yes", type: "metal-pan" },
    { name: "Stainless Steel Bowl", slug: "stainless-steel-bowl", safe: "yes", type: "metal-pan" },
    { name: "Plastic Wrap", slug: "plastic-wrap", safe: "no", type: "plastic-melt" },
    { name: "Parchment Paper Liner", slug: "parchment-paper-liner", safe: "depends", type: "paper-fry" },
    { name: "Reusable Silicone Liner", slug: "reusable-silicone-liner", safe: "yes", type: "silicone-fry" },
    { name: "Dry Rub", slug: "dry-rub", safe: "yes", type: "oil-fat" },
    { name: "Olive Oil Mist", slug: "olive-oil-mist", safe: "yes", type: "oil-fat" },
    { name: "Vegetable Oil", slug: "vegetable-oil", safe: "yes", type: "oil-fat" },
    { name: "Frozen Hamburgers", slug: "frozen-hamburgers", safe: "yes", type: "frozen-food" },
    { name: "Frozen Waffles", slug: "frozen-waffles", safe: "yes", type: "frozen-food" },
    { name: "Frozen Onion Rings", slug: "frozen-onion-rings", safe: "yes", type: "frozen-food" },
    { name: "Frozen Tater Tots", slug: "frozen-tater-tots", safe: "yes", type: "frozen-food" },
    { name: "Frozen Hot Dogs", slug: "frozen-hot-dogs", safe: "yes", type: "frozen-food" },
    { name: "Pork Chops", slug: "pork-chops", safe: "yes", type: "fresh-meat" },
    { name: "Chicken Wings", slug: "chicken-wings", safe: "yes", type: "fresh-meat" },
    { name: "Baked Potatoes", slug: "baked-potatoes", safe: "yes", type: "fresh-veg" },
    { name: "Sweet Potatoes", slug: "sweet-potatoes", safe: "yes", type: "fresh-veg" },
    { name: "Brussels Sprouts", slug: "brussels-sprouts", safe: "yes", type: "fresh-veg" },
    { name: "Cauliflower", slug: "cauliflower", safe: "yes", type: "fresh-veg" },
    { name: "Green Beans", slug: "green-beans", safe: "yes", type: "fresh-veg" },
    { name: "Zucchini Fries", slug: "zucchini-fries", safe: "yes", type: "fresh-veg" },
    { name: "Chicken Breast", slug: "chicken-breast", safe: "yes", type: "fresh-meat" },
    { name: "Tofu Cubes", slug: "tofu-cubes", safe: "yes", type: "fresh-meat" },
    { name: "Meatballs", slug: "meatballs", safe: "yes", type: "fresh-meat" },
    { name: "Apple Chips", slug: "apple-chips", safe: "yes", type: "fresh-veg" },
    { name: "Bananas Airfryer", slug: "bananas-airfryer", safe: "yes", type: "fresh-veg" },
    { name: "Kale Chips", slug: "kale-chips", safe: "yes", type: "fresh-veg" },
    { name: "Tortilla Chips", slug: "tortilla-chips", safe: "yes", type: "frozen-food" },
    { name: "Donuts", slug: "donuts", safe: "yes", type: "frozen-food" },
    { name: "Leftover Pizza", slug: "leftover-pizza", safe: "yes", type: "frozen-food" },
    { name: "Leftover Fries", slug: "leftover-fries", safe: "yes", type: "frozen-food" },
    { name: "Egg Rolls", slug: "egg-rolls", safe: "yes", type: "frozen-food" },
    { name: "Pillsbury Biscuits", slug: "pillsbury-biscuits", safe: "yes", type: "frozen-food" }
  ],
  refrigerator: [
    // Should not refrigerate
    { name: "Potatoes", slug: "potatoes", safe: "no", type: "no-fridge-starch" },
    { name: "Bread", slug: "bread", safe: "no", type: "no-fridge-bread" },
    { name: "Onions", slug: "onions", safe: "no", type: "no-fridge-onion" },
    { name: "Tomatoes", slug: "tomatoes", safe: "no", type: "no-fridge-tomato" },
    { name: "Honey", slug: "honey", safe: "no", type: "no-fridge-honey" },
    { name: "Olive Oil", slug: "olive-oil", safe: "no", type: "no-fridge-oil" },
    { name: "Coffee", slug: "coffee", safe: "no", type: "no-fridge-coffee" },
    { name: "Bananas", slug: "bananas", safe: "no", type: "no-fridge-banana" },
    { name: "Avocados", slug: "avocados", safe: "no", type: "no-fridge-avocado" },
    { name: "Garlic", slug: "garlic", safe: "no", type: "no-fridge-onion" },
    { name: "Basil", slug: "basil", safe: "no", type: "no-fridge-basil" },
    { name: "Stone Fruits", slug: "stone-fruits", safe: "no", type: "no-fridge-stone" },
    { name: "Tropical Fruits", slug: "tropical-fruits", safe: "no", type: "no-fridge-tropical" },
    { name: "Peanut Butter", slug: "peanut-butter", safe: "no", type: "no-fridge-pb" },
    { name: "Soy Sauce", slug: "soy-sauce", safe: "no", type: "no-fridge-sauce" },
    { name: "Ketchup", slug: "ketchup", safe: "no", type: "no-fridge-sauce" },
    { name: "Hot Sauce", slug: "hot-sauce", safe: "no", type: "no-fridge-sauce" },
    // Should refrigerate
    { name: "Fresh Meat", slug: "fresh-meat", safe: "yes", type: "yes-fridge-meat" },
    { name: "Leftover Rice", slug: "leftover-rice", safe: "yes", type: "yes-fridge-leftover" },
    { name: "Cooked Pasta", slug: "cooked-pasta", safe: "yes", type: "yes-fridge-leftover" },
    { name: "Cut Fruits", slug: "cut-fruits", safe: "yes", type: "yes-fridge-fruit" },
    { name: "Dairy", slug: "dairy", safe: "yes", type: "yes-fridge-dairy" },
    { name: "Eggs", slug: "eggs", safe: "yes", type: "yes-fridge-eggs" },
    { name: "Fresh Herbs", slug: "fresh-herbs", safe: "yes", type: "yes-fridge-herbs" },
    { name: "Opened Cans", slug: "opened-cans", safe: "yes", type: "yes-fridge-cans" },
    { name: "Deli Meat", slug: "deli-meat", safe: "yes", type: "yes-fridge-meat" },
    // Surprising items
    { name: "Batteries in Fridge", slug: "batteries-in-fridge", safe: "no", type: "surp-battery" },
    { name: "Candles in Fridge", slug: "candles-in-fridge", safe: "yes", type: "surp-candle" },
    { name: "Perfume in Fridge", slug: "perfume-in-fridge", safe: "no", type: "surp-perfume" },
    { name: "Nail Polish in Fridge", slug: "nail-polish-in-fridge", safe: "yes", type: "surp-polish" },
    { name: "Seeds in Fridge", slug: "seeds-in-fridge", safe: "yes", type: "surp-seeds" },
    { name: "Lipstick in Fridge", slug: "lipstick-in-fridge", safe: "yes", type: "surp-lipstick" },
    { name: "Wine After Opening", slug: "wine-after-opening", safe: "yes", type: "yes-fridge-wine" },
    { name: "Champagne After Opening", slug: "champagne-after-opening", safe: "yes", type: "yes-fridge-wine" },
    { name: "Chocolate in Fridge", slug: "chocolate-in-fridge", safe: "no", type: "no-fridge-choc" },
    { name: "Cake in Fridge", slug: "cake-in-fridge", safe: "depends", type: "depends-fridge-cake" },
    { name: "Bread in Fridge", slug: "bread-in-fridge", safe: "no", type: "no-fridge-bread" },
    { name: "Coffee Beans", slug: "coffee-beans", safe: "no", type: "no-fridge-coffee" },
    // Extra 22
    { name: "Apples", slug: "apples", safe: "yes", type: "yes-fridge-fruit" },
    { name: "Oranges", slug: "oranges", safe: "yes", type: "yes-fridge-fruit" },
    { name: "Lemons", slug: "lemons", safe: "yes", type: "yes-fridge-fruit" },
    { name: "Limes", slug: "limes", safe: "yes", type: "yes-fridge-fruit" },
    { name: "Berries", slug: "berries", safe: "yes", type: "yes-fridge-fruit" },
    { name: "Spinach", slug: "spinach", safe: "yes", type: "yes-fridge-veg" },
    { name: "Lettuce", slug: "lettuce", safe: "yes", type: "yes-fridge-veg" },
    { name: "Milk", slug: "milk", safe: "yes", type: "yes-fridge-dairy" },
    { name: "Cheese", slug: "cheese", safe: "yes", type: "yes-fridge-dairy" },
    { name: "Butter", slug: "butter", safe: "yes", type: "yes-fridge-dairy" },
    { name: "Yogurt", slug: "yogurt", safe: "yes", type: "yes-fridge-dairy" },
    { name: "Mayonnaise", slug: "mayonnaise", safe: "yes", type: "yes-fridge-sauce" },
    { name: "Mustard", slug: "mustard", safe: "yes", type: "yes-fridge-sauce" },
    { name: "Maple Syrup", slug: "maple-syrup", safe: "yes", type: "yes-fridge-sauce" },
    { name: "Opened Wine", slug: "opened-wine", safe: "yes", type: "yes-fridge-wine" },
    { name: "Opened Soda", slug: "opened-soda", safe: "yes", type: "yes-fridge-wine" },
    { name: "Cooked Chicken", slug: "cooked-chicken", safe: "yes", type: "yes-fridge-meat" },
    { name: "Raw Beef", slug: "raw-beef", safe: "yes", type: "yes-fridge-meat" },
    { name: "Fish Fillets", slug: "fish-fillets", safe: "yes", type: "yes-fridge-meat" },
    { name: "Carrots", slug: "carrots", safe: "yes", type: "yes-fridge-veg" },
    { name: "Cucumbers", slug: "cucumbers", safe: "yes", type: "yes-fridge-veg" },
    { name: "Bell Peppers", slug: "bell-peppers", safe: "yes", type: "yes-fridge-veg" }
  ]
};

// High-quality text generator
function generateItemContent(appliance, item) {
  const name = item.name;
  const slug = item.slug;
  const safe = item.safe;
  const type = item.type;
  
  let shortAnswer = "";
  let reason = "";
  let tips = [];
  let warnings = [];
  let faqs = [];
  
  // Format appliance name
  const appFormat = appliance === 'airfryer' ? 'Air Fryer' : appliance.charAt(0).toUpperCase() + appliance.slice(1);
  
  if (appliance === 'dishwasher') {
    if (safe === 'no') {
      shortAnswer = `No, you should never wash a ${name} in the dishwasher.`;
      if (type === 'vacuum-bottle') {
        reason = `The high heat and prolonged humidity of a dishwasher cycle will compromise or permanently break the vacuum seal inside a ${name}. Once the seal is damaged, the insulation is lost, and the bottle will fail to maintain cold or hot beverage temperatures.\n\nAdditionally, the abrasive detergent particles and high-pressure water sprays will cause the powder-coated exterior finish to chip, fade, or peel off over time, leaving the bottle looking worn.`;
        tips = [
          `Hand wash your insulated bottle using warm water, mild dish soap, and a soft bottle brush.`,
          `Remove any rubber gaskets or seals from the lid and wash them separately to prevent mold.`,
          `Let the bottle air dry completely upside down on a clean rack before putting the lid back on.`
        ];
        warnings = [
          `Dishwashing an insulated bottle will void the manufacturer's lifetime warranty.`,
          `Using the sanitizing cycle is particularly destructive due to temperature limits.`
        ];
        faqs = [
          { question: `Is the lid of a ${name} dishwasher safe?`, answer: `Most plastic lids and caps can go on the top rack of the dishwasher, but hand washing extends their sealing gaskets' lifespan.` },
          { question: `What happens if I wash it in the dishwasher once?`, answer: `A single cycle might not instantly ruin it, but it can silently degrade the seal or damage the exterior powder coating.` },
          { question: `How can I tell if the insulation is broken?`, answer: `If the outside of the bottle gets very hot when filled with hot liquid, the vacuum seal is broken.` }
        ];
      } else if (type === 'cast-iron') {
        reason = `Dishwasher cycles completely strip away the seasoned carbon layer (polymerized oil) that gives the ${name} its natural non-stick property.\n\nOnce the iron is exposed to the harsh, humid, and wet dishwasher environment, it will rust within a single cycle. The aggressive alkaline salts in dishwasher detergents also corrode bare iron, leaving pitted surfaces.`;
        tips = [
          `Clean your cast iron pan with hot water and a stiff bristle brush immediately after cooking.`,
          `Use coarse salt mixed with a tiny bit of water to scrub away stubborn, stuck-on food.`,
          `Always dry the skillet completely on a warm stovetop burner and apply a thin layer of oil before storing.`
        ];
        warnings = [
          `Putting cast iron in the dishwasher causes immediate surface rust.`,
          `A clean skillet exposed to detergent loses its protective oil seasoning entirely.`
        ];
        faqs = [
          { question: `Can you restore a rusted cast iron skillet?`, answer: `Yes, you must scrub the rust off with steel wool, wash it, dry it, coat it with oil, and bake it in the oven to re-season.` },
          { question: `Does soap ruin cast iron?`, answer: `Modern mild dish soap does not ruin seasoning during hand washing, but aggressive dishwasher detergent will.` },
          { question: `Can I soak cast iron?`, answer: `No, never soak cast iron in water as it leads to rust formation.` }
        ];
      } else if (type === 'sharp-knife') {
        reason = `Dishwashers are highly corrosive to the fine edges of professional kitchen knives like a ${name}.\n\nThe high-pressure water sprays rattle the blades against other utensils, causing microscopic chips and dulling the edge. Additionally, the heat and moisture will warp wooden handles and corrode carbon steel.`;
        tips = [
          `Wash knives by hand with warm water and a non-abrasive sponge immediately after use.`,
          `Dry knives instantly with a kitchen towel; never leave them to drip dry.`,
          `Store your knives in a wooden block, sheath, or magnetic strip to protect the blades.`
        ];
        warnings = [
          `Harsh detergent salts corrode stainless steel blades, leaving permanent dark spots.`,
          `Loose blades inside a dishwasher pose a serious safety risk to anyone unloading the machine.`
        ];
        faqs = [
          { question: `Why do stainless steel knives rust in the dishwasher?`, answer: `Stainless steel is rust-resistant, not rust-proof. The combination of heat, moisture, and chemical salts degrades the chromium oxide layer.` },
          { question: `Is it safe to wash cheap knives in the dishwasher?`, answer: `While cheaper knives may not be a major financial loss, they will still dull and rust rapidly in a dishwasher.` },
          { question: `Can I put kitchen shears in the dishwasher?`, answer: `No, shears contain pivots where water pools, leading to internal rust and stiff operation.` }
        ];
      } else {
        reason = `Washing this item in the dishwasher ruins its material properties.\n\nWood absorbs water and cracks under high heat, metals like copper and aluminum oxidize and discolor, and delicate crystal or antique finishes suffer permanent clouding or chipping due to vibrations and aggressive detergents.`;
        tips = [
          `Hand wash with a mild detergent and dry immediately.`,
          `Avoid soaking items for long periods in the sink.`,
          `Treat wood items with mineral oil periodically to preserve their finish.`
        ];
        warnings = [
          `High temperatures cause structural warping and splitting.`,
          `Harsh chemicals leave abrasive residues or etch surfaces permanently.`
        ];
        faqs = [
          { question: `Why did my item change color in the dishwasher?`, answer: `This is due to chemical oxidation from high alkalinity in dishwasher detergent reacting with the material.` },
          { question: `Can I fix a warped wooden item?`, answer: `Unfortunately, warping and cracking in wood are usually permanent and cannot be fully repaired.` },
          { question: `What is the safest alternative to dishwashing?`, answer: `A quick hand wash using warm water, a soft sponge, and standard liquid dish soap is always safest.` }
        ];
      }
    } else if (safe === 'yes') {
      shortAnswer = `Yes, you can safely wash a ${name} in the dishwasher.`;
      reason = `This item is manufactured from highly durable, heat-resistant materials designed to withstand dishwasher environments.\n\nWhether made of thick stainless steel, food-grade silicone, or tempered glass, the ${name} will not warp, rust, or release toxic chemicals when exposed to hot water and dishwasher cleaning agents.`;
      tips = [
        `Secure small items in the silverware basket so they do not fall onto the heating element.`,
        `Place items on the top rack if they are lighter or contain silicone/plastic components.`,
        `Arrange items face-down to prevent water from pooling inside during the wash cycle.`
      ];
      warnings = [
        `Avoid overloading the racks to ensure water can circulate properly and clean effectively.`,
        `Check for a dishwasher-safe logo on the bottom of the item before washing.`
      ];
      faqs = [
        { question: `Can this item go on the bottom rack?`, answer: `Heavy stainless steel or tempered glass can go on the bottom rack, but lighter items should stay on the top rack.` },
        { question: `Does dishwashing shorten its lifespan?`, answer: `While dishwasher-safe, hand washing is gentler and can keep the item looking new for longer.` },
        { question: `Should I use a heat-dry cycle?`, answer: `Yes, standard heat-dry is fine, but air-drying is a great energy-saving alternative.` }
      ];
    } else {
      shortAnswer = `Yes, but it depends on which rack you use and the manufacturer guidelines.`;
      reason = `This item is composed of materials that can tolerate moderate temperatures but may melt, warp, or crack if exposed to the intense heat of the bottom heating element.\n\nPlacing the ${name} on the top rack keeps it safe from direct thermal radiation, ensuring it gets clean without losing its shape or integrity.`;
      tips = [
        `Always place the item on the top rack of the dishwasher.`,
        `Remove any rubber gaskets or loose seals and wash them by hand.`,
        `Avoid using sanitizing cycles, which can exceed the safe temperature limit.`
      ];
      warnings = [
        `Placing this item on the bottom rack risks warping or melting the material.`,
        `Ensure the item is securely placed so it doesn't fall through the rack slots.`
      ];
      faqs = [
        { question: `Why is the top rack safer for this item?`, answer: `The heating element is located at the bottom of the dishwasher, making the bottom rack significantly hotter.` },
        { question: `What if the item warps?`, answer: `Warped lids or plastic containers will no longer seal properly and should be replaced.` },
        { question: `Is it safe for hot food if it cannot go on the bottom rack?`, answer: `Yes, it is food-safe, but the dry heat cycle of a dishwasher is much harsher than hot food.` }
      ];
    }
  } else if (appliance === 'microwave') {
    if (safe === 'no') {
      shortAnswer = `No, never put a ${name} in the microwave.`;
      if (type === 'metal') {
        reason = `Microwaves cannot penetrate metals, and placing a ${name} inside reflects the electromagnetic waves back toward the emitter.\n\nThis reflection creates high electrical voltages on the metal surface. Sharp corners or crinkles cause electric arcing, sparking, and can easily ignite a kitchen fire or destroy the magnetron.`;
        tips = [
          `Transfer your food to a microwave-safe ceramic or glass dish before heating.`,
          `Use parchment paper or a paper towel as a cover to prevent splattering.`,
          `Keep the microwave interior clean to prevent carbon buildup and sparks.`
        ];
        warnings = [
          `Metallic arcs can ignite paper towel linings in seconds.`,
          `Metal forks or spoons left in food create an immediate hazard.`
        ];
        faqs = [
          { question: `Why did my microwave spark when I put metal in it?`, answer: `The electric field in the microwave builds up static charge on the metal surface, which discharges as sparks.` },
          { question: `Are there any microwave-safe metals?`, answer: `Some ovens allow small, flat foil shields, but generally it is best to avoid all metals for safety.` },
          { question: `Can metal damage the microwave permanently?`, answer: `Yes, arcing can burn holes in the inner walls or blow the magnetron tube.` }
        ];
      } else if (type === 'food-egg') {
        reason = `Heating a ${name} in the microwave causes water inside to turn to steam extremely rapidly.\n\nBecause the shell or membrane acts as a pressure vessel, the steam is trapped. When the pressure gets too high, the egg explodes violently, either during cooking or when pierced, risking facial burns.`;
        tips = [
          `Always crack eggs into a cup and pierce the yolk before microwaving.`,
          `To poach an egg in the microwave, submerge it in water and cover the cup.`,
          `If an egg explodes, clean the microwave immediately before food dries.`
        ];
        warnings = [
          `Exploding eggs can cause serious eye injuries and severe skin burns.`,
          `Peeled hard-boiled eggs are still highly explosive if reheated.`
        ];
        faqs = [
          { question: `Why do peeled hard-boiled eggs explode?`, answer: `The yolk contains microscopic pockets of water that become superheated and explode when cut or bitten.` },
          { question: `Can I boil eggs in a microwave egg-cooker?`, answer: `Only use specialized, manufacturer-approved microwave cookers that control pressure safely.` },
          { question: `How do I poach an egg safely in the microwave?`, answer: `Crack the egg into a bowl with 1/3 cup of water, cover with a saucer, and cook for 50-60 seconds.` }
        ];
      } else {
        reason = `Heating this item in the microwave is extremely dangerous.\n\nMaterials like Styrofoam melt and release toxic styrene, thin plastics leach chemicals, and paper bags or dry materials can catch fire under intense electromagnetic waves.`;
        tips = [
          `Only use containers labeled 'Microwave Safe'.`,
          `Reheat food in short intervals and stir to ensure even heating.`,
          `Transfer takeout food to a glass container first.`
        ];
        warnings = [
          `Unsafe containers leach dangerous plasticizers (BPA) into food.`,
          `Heating dry materials like paper bags can ignite a paper fire.`
        ];
        faqs = [
          { question: `How do I test if a container is microwave safe?`, answer: `Microwave the empty container next to a cup of water for 30 seconds. If the container gets hot, it is not safe.` },
          { question: `Why does Styrofoam melt in the microwave?`, answer: `Polystyrene has a low melting point and degrades easily under high fat or sugar temperatures.` },
          { question: `Is plastic wrap microwave safe?`, answer: `Most plastic wraps are safe for short reheating, but should not touch the food directly.` }
        ];
      }
    } else if (safe === 'yes') {
      shortAnswer = `Yes, a ${name} is completely safe to use in the microwave.`;
      reason = `This item is made of materials that do not absorb microwave radiation and have high thermal thresholds.\n\nWhether it is glazed ceramic, tempered glass, or plain paper, the ${name} allows the waves to pass through to heat the food directly without melting, cracking, or releasing toxic chemicals.`;
      tips = [
        `Verify the 'Microwave Safe' label on the bottom of the item.`,
        `Use oven mitts when removing items, as they can absorb heat from the hot food.`,
        `Ensure the item has no metallic accents or gold trim.`
      ];
      warnings = [
        `Do not microwave empty glass or ceramic containers.`,
        `Sudden temperature drops can cause hot glass to break (thermal shock).`
      ];
      faqs = [
        { question: `Why does the plate get hot if it is microwave safe?`, answer: `The plate absorbs heat conducted from the hot food, not from the microwaves themselves.` },
        { question: `Can I microwave this item indefinitely?`, answer: `While safe, extreme exposure can lead to superheating or thermal stress.` },
        { question: `Are all ceramics microwave safe?`, answer: `Glazed ceramics are safe, but unglazed pottery absorbs water and can crack or overheat.` }
      ];
    } else {
      shortAnswer = `Yes, but only if the ${name} is explicitly labeled as microwave safe.`;
      reason = `Some versions of this item are chemically formulated and treated to withstand microwave heat, while others are not.\n\nUsing an unlabeled version risks melting the material, leaching harmful plasticizers like phthalates into your food, or creating a toxic chemical hazard.`;
      tips = [
        `Look for the microwave-safe symbol (three wavy lines) on the packaging.`,
        `Avoid reheating high-fat or high-sugar foods in this container.`,
        `Vent or loosen the lid before heating to prevent pressure buildup.`
      ];
      warnings = [
        `Never microwave single-use containers like yogurt tubs or butter bowls.`,
        `Discard any containers that show signs of warping or staining.`
      ];
      faqs = [
        { question: `What happens if a container melts slightly?`, answer: `The melted plastic has contaminated the food, and the entire meal should be thrown away.` },
        { question: `Is BPA-free the same as microwave-safe?`, answer: `No, BPA-free only means it lacks bisphenol A, but it can still melt or warp under heat.` },
        { question: `Can I microwave the lid?`, answer: `Only if the lid is also labeled microwave safe; otherwise, remove it before heating.` }
      ];
    }
  } else if (appliance === 'freezer') {
    if (safe === 'no') {
      shortAnswer = `No, do not freeze a ${name}.`;
      if (type === 'veg-water' || type === 'fruit-water') {
        reason = `This item contains a very high water content, and freezing it causes ice crystals to expand and rupture the plant cell walls.\n\nWhen thawed, the structural integrity of the ${name} is completely lost, turning the crisp vegetable or fruit into a soggy, limp, and unappealing mush.`;
        tips = [
          `Store fresh leafy greens and high-moisture vegetables in the refrigerator crisper drawer.`,
          `Wrap the items in paper towels to absorb excess moisture and extend freshness.`,
          `If you must freeze, blend into a puree and freeze in ice cube trays for smoothies.`
        ];
        warnings = [
          `Thawed lettuce or cucumbers cannot be used in fresh salads.`,
          `Freezing wilted vegetables accelerates decay and sour odors.`
        ];
        faqs = [
          { question: `Can you freeze spinach or kale instead?`, answer: `Yes, thicker leafy greens freeze well if blanched first, as they are cooked before consumption.` },
          { question: `What happens to cell walls during freezing?`, answer: `Water expands as it freezes, forming sharp ice crystals that puncture the rigid plant cells.` },
          { question: `Can I use thawed high-water vegetables in cooking?`, answer: `Only in blended soups or stews where the crisp texture is not required.` }
        ];
      } else if (type === 'drink-carbonated') {
        reason = `A ${name} contains carbonated liquid under high pressure. As the water content freezes, it expands significantly.\n\nThis expansion forces the carbon dioxide gas out of the liquid, creating immense pressure inside the sealed aluminum can or glass bottle until it violently ruptures or explodes, making a dangerous mess.`;
        tips = [
          `Chill carbonated drinks quickly by wrapping them in a damp paper towel in the fridge.`,
          `If a can has frozen, transfer it to a plastic bucket in the fridge to thaw safely.`,
          `Never open a partially frozen carbonated can, as it will spray forcefully.`
        ];
        warnings = [
          `Exploding cans can damage the interior coils and fans of your freezer.`,
          `Glass bottles freezing can shatter into thousands of dangerous shards.`
        ];
        faqs = [
          { question: `How long does it take for a soda can to explode in the freezer?`, answer: `A standard can will freeze and explode within 2 to 3 hours.` },
          { question: `Can I freeze soda in a plastic bottle?`, answer: `Plastic expands slightly more, but it is still highly pressurized and unsafe to freeze.` },
          { question: `Does freezing change the flavor of soda?`, answer: `Yes, it will go flat when thawed because the carbonation is forced out.` }
        ];
      } else {
        reason = `Freezing this item degrades its quality or creates a safety hazard.\n\nEggs in shells expand and crack, emulsions like mayonnaise separate into oily layers, and glass bottles shatter due to liquid expansion.`;
        tips = [
          `Store items in freezer-safe plastic or silicone bags instead of glass.`,
          `Leave at least one inch of headspace in containers to allow for liquid expansion.`,
          `Whisk egg contents and freeze out of their shells.`
        ];
        warnings = [
          `Cracked eggshells allow freezer bacteria to contaminate the egg yolk.`,
          `Frozen glass shards are extremely difficult to clean up safely.`
        ];
        faqs = [
          { question: `Why do emulsions separate in the freezer?`, answer: `The freezing process breaks the chemical bond between oil and water, causing them to separate.` },
          { question: `Can I reuse a container that cracked?`, answer: `No, cracked containers should be discarded immediately to prevent leaks or cuts.` },
          { question: `Is it safe to freeze cooked eggs?`, answer: `Cooked egg whites become rubbery and watery, though cooked yolks freeze reasonably well.` }
        ];
      }
    } else if (safe === 'yes') {
      shortAnswer = `Yes, a ${name} is completely safe to freeze.`;
      reason = `This item freezes exceptionally well without losing its nutritional value or structural properties.\n\nFreezing halts bacterial growth and preserves the freshness of the ${name} for months. Just ensure it is stored in an airtight container to prevent freezer burn.`;
      tips = [
        `Use thick freezer-safe bags and squeeze out all excess air to prevent freezer burn.`,
        `Label the container with the date and item name before freezing.`,
        `Freeze items in single-use portions so you only thaw what you need.`
      ];
      warnings = [
        `Freezer burn dries out the surface, affecting texture and flavor but not safety.`,
        `Do not leave frozen items exposed to air inside the freezer.`
      ];
      faqs = [
        { question: `How long can I store this item in the freezer?`, answer: `Most foods remain safe indefinitely at 0°F, but quality begins to degrade after 3 to 6 months.` },
        { question: `Should I thaw it at room temperature?`, answer: `No, always thaw food in the refrigerator to prevent bacterial growth.` },
        { question: `Does freezing destroy vitamins?`, answer: `No, freezing locks in vitamins and nutrients at their peak freshness.` }
      ];
    } else {
      shortAnswer = `Yes, but the texture will change, or it requires specific packaging.`;
      reason = `While it is safe to freeze, the low temperature affects the physical structure of the ${name}.\n\nFor example, hard cheese becomes crumbly, milk separates, and fruits lose their firm texture, making them better suited for cooking or blending rather than eating fresh after thawing.`;
      tips = [
        `Shred cheese before freezing to use directly on pizzas or casseroles.`,
        `Shake thawed milk or dairy products vigorously to re-emulsify the fat.`,
        `Wrap blocks of food tightly in plastic wrap and then foil to protect them.`
      ];
      warnings = [
        `Do not freeze soft dairy unless you plan to cook with it.`,
        `Texture changes are permanent and cannot be reversed after thawing.`
      ];
      faqs = [
        { question: `Why does cheese crumble after freezing?`, answer: `Ice crystals break down the protein matrix, reducing the cheese's elasticity.` },
        { question: `Can I refreeze this item if it thaws?`, answer: `Only if it was thawed in the refrigerator and still contains ice crystals.` },
        { question: `Is the flavor affected by freezing?`, answer: `The flavor remains mostly unchanged, though the texture and mouthfeel will be different.` }
      ];
    }
  } else if (appliance === 'oven') {
    if (safe === 'no') {
      shortAnswer = `No, never put a ${name} in the oven.`;
      if (type === 'paper-combustible') {
        reason = `Ovens cook by radiating heat, and a dry ${name} has a very low ignition temperature.\n\nPlacing it inside a hot oven creates a severe fire hazard. The material can quickly scorch, smolder, and ignite into open flames, potentially spreading to the rest of your kitchen.`;
        tips = [
          `Use parchment paper or aluminum foil instead of regular paper products.`,
          `Transfer food to metal or ceramic baking dishes before heating.`,
          `Always keep a fire extinguisher rated for grease and paper fires in your kitchen.`
        ];
        warnings = [
          `Cardboard and paper bags can ignite at standard baking temperatures.`,
          `Placing dry paper near the heating elements invites immediate fire.`
        ];
        faqs = [
          { question: `At what temperature does paper catch fire?`, answer: `Paper ignites at approximately 451°F (233°C), but thin paper can burn at lower temperatures.` },
          { question: `Can I use a pizza box to keep pizza warm in the oven?`, answer: `No, the cardboard will release toxic fumes from ink and glue, and poses a fire hazard.` },
          { question: `What should I do if a paper item catches fire in the oven?`, answer: `Keep the oven door closed, turn off the oven, and let the fire starve of oxygen.` }
        ];
      } else if (type === 'plastic-melt') {
        reason = `All standard plastics, including those rated microwave-safe, will melt in the dry heat of an oven.\n\nMelting ${name} releases highly toxic, carcinogenic fumes into your home. The melted plastic also runs onto the oven floor, coating the surfaces in a hard residue that is nearly impossible to clean and ruins the appliance.`;
        tips = [
          `Always check that no plastic utensils or lids are left in the oven before preheating.`,
          `Use oven-safe silicone mats as a reusable baking surface.`,
          `Use metal or glass pans for all baking and roasting tasks.`
        ];
        warnings = [
          `Fumes from burning plastic are highly toxic and dangerous to breathe.`,
          `Plastic wrap melts instantly onto food, making it inedible.`
        ];
        faqs = [
          { question: `Can microwave-safe plastic go in the oven?`, answer: `No, microwave-safe plastic is only rated for short electromagnetic waves, not dry heat.` },
          { question: `How do I clean melted plastic from my oven?`, answer: `Let it cool, place ice on it to make it brittle, and gently scrape it off with a razor.` },
          { question: `Are plastic handles oven-safe?`, answer: `Only if they are made of specialized phenolic resins, but standard plastics will melt.` }
        ];
      } else {
        reason = `Putting this item in the oven will ruin the item or cause a safety risk.\n\nMaterials like untempered glass will shatter from thermal shock, wood will scorch and warp, and certain non-stick coatings release toxic fumes at high heat.`;
        tips = [
          `Only use bakeware clearly stamped 'Oven Safe'.`,
          `Place bakeware on middle racks to ensure even heat distribution.`,
          `Let items cool down naturally rather than placing them on cold countertops.`
        ];
        warnings = [
          `Thermal shock can explode glass baking dishes into dangerous shards.`,
          `Wooden spoons or boards can crack and catch fire in the oven.`
        ];
        faqs = [
          { question: `Why did my glass dish explode in the oven?`, answer: `It was likely not tempered glass, or it experienced thermal shock from a rapid temperature change.` },
          { question: `Can I bake using wooden skewers?`, answer: `Yes, but they must be soaked in water for at least 30 minutes beforehand to prevent burning.` },
          { question: `Is stoneware safe at high heat?`, answer: `Yes, high-fired stoneware is very heat-resistant, but still vulnerable to thermal shock.` }
        ];
      }
    } else if (safe === 'yes') {
      shortAnswer = `Yes, you can safely use a ${name} in the oven.`;
      reason = `This item is designed to handle high baking and roasting temperatures without melting or releasing chemicals.\n\nWhether composed of tempered borosilicate glass, cast iron, or thick aluminum, the ${name} distributes heat evenly and maintains its structure under high heat.`;
      tips = [
        `Always use dry oven mitts to handle hot pans and dishes.`,
        `Avoid placing hot dishes directly onto cold or wet surfaces.`,
        `Allow the item to preheat gradually if it is made of stoneware or glass.`
      ];
      warnings = [
        `Do not exceed the manufacturer's maximum temperature rating.`,
        `Sudden temperature drops can cause cracks in glass and ceramic.`
      ];
      faqs = [
        { question: `Can this item go under the broiler?`, answer: `Only cast iron and stainless steel can handle the intense direct heat of a broiler. Glass and ceramic cannot.` },
        { question: `Is Pyrex oven safe?`, answer: `Yes, Pyrex is made of tempered glass, but you must still avoid thermal shock.` },
        { question: `What is the maximum safe temperature?`, answer: `Most metal pans are safe up to 500°F, while silicone and glass are rated to 425°F or 450°F.` }
      ];
    } else {
      shortAnswer = `Yes, but only under specific temperature limits or conditions.`;
      reason = `While the material of the ${name} is heat-resistant, it has limits. Exceeding its maximum rated temperature or exposing it to direct flame can cause warping, smoking, or degradation of the material's non-stick properties.`;
      tips = [
        `Check the packaging or bottom of the item for its specific temperature limit.`,
        `Avoid using the broiler setting with this item.`,
        `Trim any edges that overhang the baking sheet.`
      ];
      warnings = [
        `Using this item above its rated temperature can release smoke and ruin the finish.`,
        `Do not use it if it has plastic or wooden handles that are not oven-safe.`
      ];
      faqs = [
        { question: `What happens if I exceed the temperature limit?`, answer: `The material can break down, release fumes, or lose its non-stick coating.` },
        { question: `Can I reuse it if it scorches?`, answer: `If it is scorched or charred, it has degraded and is no longer safe to use.` },
        { question: `Are wooden skewers safe in the oven?`, answer: `They are safe only if soaked in water first, otherwise they will catch fire.` }
      ];
    }
  } else if (appliance === 'dryer') {
    if (safe === 'no') {
      shortAnswer = `No, do not put a ${name} in the clothes dryer.`;
      if (type === 'shoe-resin') {
        reason = `Resin materials like Croslite or rubber are highly sensitive to thermal energy. The high heat of a dryer cycle will cause a ${name} to shrink by multiple sizes and warp permanently.\n\nOnce warped, the resin loses its flexibility and fit, rendering the shoe or item completely unwearable.`;
        tips = [
          `Air dry your resin shoes in a cool, well-ventilated shade.`,
          `Wipe the outside dry with a towel to remove surface water immediately.`,
          `Never leave resin shoes in direct sunlight on hot days, as they can still shrink.`
        ];
        warnings = [
          `One cycle on high heat can permanently shrink Crocs.`,
          `Heat warping is irreversible and ruins the structural fit.`
        ];
        faqs = [
          { question: `Can you unshrink shrunk Crocs?`, answer: `It is very difficult; boiling them and wearing them with thick socks rarely restores the original shape.` },
          { question: `Is it safe to use the 'air fluff' setting?`, answer: `Yes, 'air fluff' uses no heat, making it safe for resin materials, though air drying is safer.` },
          { question: `Why does heat shrink resin?`, answer: `The heat causes the polymer chains in the closed-cell resin to contract.` }
        ];
      } else if (type === 'cloth-wool') {
        reason = `Wool and cashmere fibers are covered in microscopic scales. The combination of heat, moisture, and friction inside the dryer causes these scales to lock together.\n\nThis process, called felting, contracts the fibers tightly, shrinking a ${name} down to a fraction of its original size and making the fabric stiff.`;
        tips = [
          `Lay wet wool garments flat on a clean dry towel and roll them up to squeeze out excess water.`,
          `Reshape the garment while damp and lay it flat on a drying rack to dry naturally.`,
          `Wash wool garments using specialized wool detergent on a gentle cycle.`
        ];
        warnings = [
          `Drying a wool sweater on a regular cycle shrinks it permanently.`,
          `Hanging wet wool garments can stretch the fibers out of shape.`
        ];
        faqs = [
          { question: `Can you unshrink a wool sweater?`, answer: `Sometimes, by soaking it in lukewarm water with hair conditioner and gently stretching it back to shape.` },
          { question: `What is 'superwash' wool?`, answer: `It is wool treated chemically or with a polymer coating to prevent the scales from felting, making it dryer-safe.` },
          { question: `Does cold air drying shrink wool?`, answer: `Tumbling friction alone can cause slight shrinkage, so flat air drying is always best.` }
        ];
      } else {
        reason = `Machine drying this item will ruin the material or damage the dryer.\n\nAdhesives in running shoes melt, delicate fabrics like silk tear, and heavy items like backpacks can damage the dryer drum.`;
        tips = [
          `Always consult the care label on the fabric before drying.`,
          `Use a mesh laundry bag to protect delicate items.`,
          `Hang items on a clothesline or drying rack to dry naturally.`
        ];
        warnings = [
          `Dryer heat melts the glue holding shoe soles and cushions together.`,
          `Heavy items tumbling loosely create loud noise and can dent the metal drum.`
        ];
        faqs = [
          { question: `What happens to adhesives in the dryer?`, answer: `The heat melts rubber cement and structural glues, causing soles to peel.` },
          { question: `Can I dry a delicate dress in a mesh bag?`, answer: `It reduces friction, but the heat can still shrink or wrinkle delicate fabrics like silk.` },
          { question: `How do I dry heavy shoes safely?`, answer: `Tie the laces to the dryer door so the shoes stay pressed against the glass while the drum spins.` }
        ];
      }
    } else if (safe === 'yes') {
      shortAnswer = `Yes, you can safely put a ${name} in the dryer.`;
      reason = `This item is composed of sturdy synthetic or natural fibers like cotton or polyester that can withstand heat and tumbling.\n\nThe fibers do not shrink or break down easily, making the dryer the fastest and most convenient way to dry the ${name}.`;
      tips = [
        `Turn garments inside out to protect colors and prints.`,
        `Clean the lint trap before every cycle to ensure proper airflow.`,
        `Remove items promptly at the end of the cycle to reduce wrinkles.`
      ];
      warnings = [
        `Avoid drying on high heat for long periods, which wears out fabric fibers.`,
        `Ensure there are no metal objects or sharp keys left in pockets.`
      ];
      faqs = [
        { question: `Will cotton items shrink?`, answer: `Yes, 100% cotton can shrink slightly during the first few dries, but usually stretches back with wear.` },
        { question: `Is high heat necessary?`, answer: `Medium or low heat is usually sufficient and is much gentler on fabrics.` },
        { question: `Can I use dryer sheets?`, answer: `Yes, they reduce static, but can leave a film on microfiber towels that reduces absorption.` }
      ];
    } else {
      shortAnswer = `Yes, but it depends on the heat setting and drying accessories used.`;
      reason = `While the material of the ${name} is dryer-safe, it can warp, clump, or lose its shape under high heat or aggressive tumbling.\n\nUsing a low-heat setting and adding dryer balls helps distribute heat and air, protecting the item's shape and integrity.`;
      tips = [
        `Use the low heat or 'delicate' setting on your dryer.`,
        `Add clean tennis balls or dryer balls to fluff up down or fiberfill items.`,
        `Never dry if the care label explicitly forbids tumble drying.`
      ];
      warnings = [
        `High heat can clump down feathers and make them brittle.`,
        `Ensure foam or latex items are never dried on heat, as they pose a fire hazard.`
      ];
      faqs = [
        { question: `How do you fluff pillows in the dryer?`, answer: `Tumble on low heat for 20-30 minutes with two clean tennis balls wrapped in socks.` },
        { question: `Why are foam pillows dangerous in the dryer?`, answer: `Foam traps heat and can smolder or catch fire under dryer temperatures.` },
        { question: `What if the item is still damp?`, answer: `Tumble for another 10 minutes or hang it to finish drying naturally.` }
      ];
    }
  } else if (appliance === 'airfryer') {
    if (safe === 'no') {
      shortAnswer = `No, you should never place a ${name} in the air fryer.`;
      if (type === 'aerosol-spray') {
        reason = `Aerosol cooking sprays contain propellants like butane or lecithin to help disperse the oil. These propellants chemically react with the non-stick coating of your air fryer basket.\n\nOver time, this reaction causes the non-stick layer to bubble, peel, and flake off, permanently ruining the basket and contaminating your food.`;
        tips = [
          `Use a refillable pump oil mister filled with pure olive, canola, or avocado oil.`,
          `Brush oil directly onto food using a silicone pastry brush instead of spraying the basket.`,
          `Clean the basket using a soft sponge to preserve the non-stick surface.`
        ];
        warnings = [
          `Using aerosol spray voids the warranty of many air fryer brands.`,
          `Chemical propellants leave a sticky residue that is hard to clean.`
        ];
        faqs = [
          { question: `Why is my air fryer basket peeling?`, answer: `This is usually caused by aerosol propellants or abrasive scouring pads.` },
          { question: `Are pump misters safe?`, answer: `Yes, pump misters use physical pressure instead of chemical propellants, which is perfectly safe.` },
          { question: `Can I buy replacement baskets?`, answer: `Yes, most manufacturers sell replacement baskets if yours has peeled.` }
        ];
      } else if (type === 'glass-fry') {
        reason = `Air fryers work by circulating extremely hot air at high velocity, causing rapid and localized temperature changes.\n\nMost glass bowls, even those rated oven-safe, are not designed to withstand such rapid and uneven thermal expansion, leading to a high risk of the glass cracking or shattering violently.`;
        tips = [
          `Use metal bakeware, silicone molds, or ceramic ramekins instead of glass.`,
          `Make sure accessories fit easily without blocking the air vents.`,
          `Handle hot accessories with silicone tongs or oven mitts.`
        ];
        warnings = [
          `Shattered glass ruins food and can permanently damage the air fryer heating coils.`,
          `Never place cold glass into a hot preheated air fryer.`
        ];
        faqs = [
          { question: `Can I use Pyrex in the air fryer?`, answer: `Pyrex can technically handle oven heat, but the risk of thermal shock breakage is much higher in an air fryer. Metal or silicone is safer.` },
          { question: `What cookware is safest?`, answer: `Dark metal pans and silicone liners are the safest and most effective choices.` },
          { question: `Can I use ceramic ramekins?`, answer: `Yes, high-fired glazed ceramic ramekins are safe, but heat them gradually.` }
        ];
      } else {
        reason = `Washing or placing this item in the air fryer is highly unsafe.\n\nMaterials like plastic or Styrofoam melt instantly, wet batter drips through the basket grate and burns, and dry paper items can catch fire near the heating element.`;
        tips = [
          `Only use accessories rated for high heat up to 450°F.`,
          `Keep dry paper products weighted down with food.`,
          `Preheat the air fryer empty before adding any liners.`
        ];
        warnings = [
          `Melting plastic wrap releases toxic chemicals and ruins the heating elements.`,
          `Wet batter will drip and burn on the bottom pan, creating smoke.`
        ];
        faqs = [
          { question: `Can I use plastic wrap in the air fryer?`, answer: `No, plastic wrap will melt immediately onto your food and coils.` },
          { question: `Why does my air fryer smoke?`, answer: `Smoking is usually caused by grease splattering onto the heating coil or food drippings burning on the pan.` },
          { question: `How do I cook battered foods?`, answer: `Use a dry flour coating or pre-fried frozen items; wet batter requires deep frying.` }
        ];
      }
    } else if (safe === 'yes') {
      shortAnswer = `Yes, a ${name} is safe and excellent to cook in the air fryer.`;
      reason = `This item is designed to handle rapid convection heating. The high-velocity hot air quickly circulates around the ${name}, evaporating surface moisture to cook it quickly and yield a delicious, crispy texture.`;
      tips = [
        `Space items in a single layer to allow maximum hot air circulation.`,
        `Shake the basket or flip the items halfway through the cooking time.`,
        `Do not overload the basket, as this steams the food instead of frying it.`
      ];
      warnings = [
        `Overcrowded baskets lead to soggy, unevenly cooked food.`,
        `Always clean the drip tray after cooking greasy items to prevent smoke.`
      ];
      faqs = [
        { question: `Do I need to add oil?`, answer: `No, frozen foods are pre-fried, but fresh meats or vegetables benefit from a light toss in oil.` },
        { question: `How does air frying compare to deep frying?`, answer: `Air frying uses hot air and 80% less oil, providing a similar crispiness with fewer calories.` },
        { question: `Can I cook raw meat?`, answer: `Yes, raw chicken, bacon, and steak cook beautifully. Just ensure they reach safe internal temperatures.` }
      ];
    } else {
      shortAnswer = `Yes, but only if it is securely weighted down by food.`;
      reason = `Because air fryers use high-velocity fans, lightweight materials like the ${name} can easily blow upward inside the chamber. If the item touches the exposed heating element at the top, it will scorch, melt, or catch fire.`;
      tips = [
        `Never put this liner or item in the basket during preheating.`,
        `Ensure enough food is placed on top to weigh it down securely.`,
        `Use pre-cut liners with holes to maintain proper air circulation.`
      ];
      warnings = [
        `Unweighted paper or foil is a severe fire hazard in an air fryer.`,
        `Do not cover the entire basket grate, as it blocks cooking airflow.`
      ];
      faqs = [
        { question: `Can I use regular baking parchment paper?`, answer: `Yes, but cut it to fit the basket bottom and poke holes to allow air circulation.` },
        { question: `What if the paper touches the heating coil?`, answer: `It will char and catch fire within seconds. Keep it flat and weighted.` },
        { question: `Are silicone liners safer than paper?`, answer: `Yes, silicone liners are heavier, reusable, and do not fly around as easily.` }
      ];
    }
  } else if (appliance === 'refrigerator') {
    if (safe === 'no') {
      shortAnswer = `No, you should not store a ${name} in the refrigerator.`;
      if (type === 'no-fridge-starch') {
        reason = `Refrigerating raw potatoes triggers a chemical reaction that converts the potato's starches into sugars.\n\nThis ruins their natural flavor and texture, causing them to turn dark and sweet when cooked. It also increases the formation of acrylamide—a chemical compound linked to health risks—when they are fried or baked.`;
        tips = [
          `Store raw potatoes in a cool, dark, well-ventilated space like a pantry or paper bag.`,
          `Keep potatoes away from onions, as they release gases that make each other spoil faster.`,
          `Avoid storing potatoes in plastic bags, which trap moisture and cause rot.`
        ];
        warnings = [
          `Refrigeration makes potatoes gritty and sweet, ruining their cooking properties.`,
          `Do not eat potatoes that have turned green or sprouted significantly.`
        ];
        faqs = [
          { question: `Can I freeze raw potatoes?`, answer: `No, raw potatoes contain too much water and turn black. They must be blanched or cooked first.` },
          { question: `What if my potatoes sprout?`, answer: `Cut away the sprouts; if the potato is still firm, it is safe to eat.` },
          { question: `How long do potatoes last in a pantry?`, answer: `In a cool, dark pantry, potatoes can remain fresh for up to 4 to 6 weeks.` }
        ];
      } else if (type === 'no-fridge-bread') {
        reason = `While the refrigerator prevents mold, the cold and dry air accelerates starch retrogradation in bread.\n\nThis causes the starch molecules to crystallize, drawing moisture out of the crumb and making the loaf go stale, dry, and tough much faster than it would at room temperature.`;
        tips = [
          `Store bread in a breadbox or paper bag on the counter at room temperature.`,
          `Slice and freeze any bread you cannot finish within a few days.`,
          `Toast frozen slices directly without thawing to restore their soft texture.`
        ];
        warnings = [
          `The refrigerator is the worst place to keep bread if you want it to stay soft.`,
          `Store store-bought bread in its original plastic bag, but keep it out of the cold.`
        ];
        faqs = [
          { question: `Does freezing bread make it stale?`, answer: `No, freezing halts the retrogradation process, keeping the bread fresh for months.` },
          { question: `How do I revive stale bread?`, answer: `Sprinkle the loaf with water and bake it in a 350°F oven for 5 to 10 minutes.` },
          { question: `Is sourdough bread different?`, answer: `Sourdough has natural acidity that helps prevent mold, making room-temp storage even more effective.` }
        ];
      } else {
        reason = `Storing this item in the refrigerator ruins its flavor, texture, or causes it to crystallize.\n\nFor example, tomatoes become mealy and tasteless, honey solidifies into a gritty block, and olive oil thickens and turns cloudy, making it impossible to pour.`;
        tips = [
          `Keep tomatoes on the counter stem-side down at room temperature.`,
          `Store honey and olive oil in a dark, dry pantry.`,
          `Let refrigerated oils return to room temperature naturally to pour them.`
        ];
        warnings = [
          `Refrigerating honey does not extend its shelf life but makes it solid.`,
          `Cold temperatures halt the ripening process of stone and tropical fruits.`
        ];
        faqs = [
          { question: `Does honey expire?`, answer: `Pure honey stored in a sealed jar has an indefinite shelf life and never spoils.` },
          { question: `Why did my olive oil turn solid?`, answer: `Monounsaturated fats in olive oil begin to solidify at refrigerator temperatures (around 40°F).` },
          { question: `Can I store cut tomatoes in the fridge?`, answer: `Yes, once sliced, tomatoes must be refrigerated to prevent bacteria and eaten within 2-3 days.` }
        ];
      }
    } else if (safe === 'yes') {
      shortAnswer = `Yes, you should store a ${name} in the refrigerator.`;
      reason = `This item requires cold temperatures to slow bacterial growth and maintain its safety.\n\nStoring the ${name} in the refrigerator preserves its fresh flavor, extends its shelf life, and ensures it remains safe to eat.`;
      tips = [
        `Store raw meat on the bottom shelf to prevent juices from dripping on other foods.`,
        `Keep dairy and eggs on middle shelves where the temperature is most stable.`,
        `Use airtight glass or plastic containers to keep food fresh and prevent odors.`
      ];
      warnings = [
        `Never store perishable items in the refrigerator door, as it is the warmest spot.`,
        `Ensure your refrigerator temperature is set below 40°F (4°C) for food safety.`
      ];
      faqs = [
        { question: `How long do leftovers last in the fridge?`, answer: `Most cooked food remains safe to eat for 3 to 4 days when refrigerated.` },
        { question: `Should eggs be stored in the door?`, answer: `No, keep them in their original carton on an shelf where the temperature is stable.` },
        { question: `Is it safe to store opened cans in the fridge?`, answer: `Yes, but transfer the contents to a plastic or glass container to prevent metallic flavors.` }
      ];
    } else {
      shortAnswer = `Yes, but it depends on the state of the item or its storage container.`;
      reason = `While the ${name} can be refrigerated, doing so is only necessary once it has been opened or cut.\n\nFor example, whole avocados ripen on the counter but should go in the fridge once cut, and items like cake are best stored at room temperature unless they contain perishable cream fillings.`;
      tips = [
        `Store cut items in airtight containers to minimize air exposure and browning.`,
        `Add a squeeze of lemon juice to cut fruit to prevent oxidation.`,
        `Allow warm baked goods to cool completely before refrigerating to avoid condensation.`
      ];
      warnings = [
        `Refrigerating unripe fruit stops the ripening process permanently.`,
        `Keep frosting covered so it doesn't absorb other refrigerator odors.`
      ];
      faqs = [
        { question: `When should I put avocados in the fridge?`, answer: `Put them in the fridge once they are fully ripe to delay spoiling, or after slicing.` },
        { question: `Does cake dry out in the fridge?`, answer: `Yes, the cold air dries out cake sponges. Keep them covered or store them at room temp.` },
        { question: `How do I keep sliced apples from browning?`, answer: `Store them in water with a pinch of salt or lemon juice, then refrigerate.` }
      ];
    }
  }
  
  return {
    item: name,
    appliance: appliance,
    slug: slug,
    safe: safe,
    shortAnswer: shortAnswer,
    reason: reason,
    tips: tips,
    warnings: warnings,
    faqs: faqs,
    relatedItems: []
  };
}

// Generate the full list of items
const itemsList = [];

for (const [appliance, specs] of Object.entries(dataSpecs)) {
  specs.forEach(spec => {
    const itemData = generateItemContent(appliance, spec);
    itemsList.push(itemData);
  });
}

// Generate related items for each item (ensuring they only link to items in the same appliance group)
itemsList.forEach((item, index) => {
  const siblings = itemsList.filter(i => i.appliance === item.appliance && i.slug !== item.slug);
  
  // Select 4 random siblings as related items
  const shuffled = siblings.sort(() => 0.5 - Math.random());
  const selected = shuffled.slice(0, 4).map(i => i.slug);
  item.relatedItems = selected;
});

// Self-validation check
console.log(`Generating items.json...`);
console.log(`Total generated items: ${itemsList.length}`);

const counts = {};
itemsList.forEach(item => {
  counts[item.appliance] = (counts[item.appliance] || 0) + 1;
});
console.log('Appliance counts:', counts);

// Validate relatedItems slugs
let missingSlugs = 0;
itemsList.forEach(item => {
  item.relatedItems.forEach(slug => {
    const exists = itemsList.some(i => i.slug === slug && i.appliance === item.appliance);
    if (!exists) {
      console.error(`Error: Slug '${slug}' in relatedItems of '${item.item}' (${item.appliance}) does not exist in the dataset.`);
      missingSlugs++;
    }
  });
});

if (missingSlugs > 0) {
  console.error(`Validation failed with ${missingSlugs} missing related items.`);
  process.exit(1);
}

// Ensure unique slugs per appliance (or overall unique combinations)
const combinations = new Set();
itemsList.forEach(item => {
  const combo = `${item.appliance}/${item.slug}`;
  if (combinations.has(combo)) {
    console.error(`Error: Duplicate combination found: ${combo}`);
    process.exit(1);
  }
  combinations.add(combo);
});

// Write to files
fs.writeFileSync(TARGET_PATH, JSON.stringify(itemsList, null, 2), 'utf-8');
console.log(`Successfully generated items.json at ${TARGET_PATH}`);
