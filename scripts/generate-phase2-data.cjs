const fs = require('fs');
const path = require('path');

// Helper to format string into title case
function titleCase(str) {
  return str.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
}

// ----------------------------------------------------
// 1. GENERATE HOW-LONG.JSON (150 items)
// ----------------------------------------------------

const rawHowLong = [
  // FRIDGE (71 items)
  { item: "chicken", location: "fridge", duration: "1-2 Days", safe: "yes", type: "raw-meat" },
  { item: "cooked-chicken", location: "fridge", duration: "3-4 Days", safe: "yes", type: "cooked-meat" },
  { item: "ground-beef", location: "fridge", duration: "1-2 Days", safe: "yes", type: "raw-meat" },
  { item: "cooked-beef", location: "fridge", duration: "3-4 Days", safe: "yes", type: "cooked-meat" },
  { item: "salmon", location: "fridge", duration: "1-2 Days", safe: "yes", type: "raw-meat" },
  { item: "cooked-salmon", location: "fridge", duration: "3-4 Days", safe: "yes", type: "cooked-meat" },
  { item: "shrimp", location: "fridge", duration: "1-2 Days", safe: "yes", type: "raw-meat" },
  { item: "cooked-shrimp", location: "fridge", duration: "3-4 Days", safe: "yes", type: "cooked-meat" },
  { item: "bacon", location: "fridge", duration: "1 Week", safe: "yes", type: "raw-meat" },
  { item: "cooked-bacon", location: "fridge", duration: "4-5 Days", safe: "yes", type: "cooked-meat" },
  { item: "ham", location: "fridge", duration: "1 Week", safe: "yes", type: "raw-meat" },
  { item: "cooked-ham", location: "fridge", duration: "3-4 Days", safe: "yes", type: "cooked-meat" },
  { item: "turkey", location: "fridge", duration: "1-2 Days", safe: "yes", type: "raw-meat" },
  { item: "cooked-turkey", location: "fridge", duration: "3-4 Days", safe: "yes", type: "cooked-meat" },
  { item: "hot-dogs", location: "fridge", duration: "1 Week", safe: "yes", type: "raw-meat" },
  { item: "deli-meat", location: "fridge", duration: "3-5 Days", safe: "yes", type: "raw-meat" },
  { item: "eggs", location: "fridge", duration: "3-5 Weeks", safe: "yes", type: "dairy" },
  { item: "hard-boiled-eggs", location: "fridge", duration: "1 Week", safe: "yes", type: "dairy" },
  { item: "milk", location: "fridge", duration: "1 Week", safe: "yes", type: "dairy" },
  { item: "butter", location: "fridge", duration: "1-3 Months", safe: "yes", type: "dairy" },
  { item: "cream-cheese", location: "fridge", duration: "2 Weeks", safe: "yes", type: "dairy" },
  { item: "sour-cream", location: "fridge", duration: "2 Weeks", safe: "yes", type: "dairy" },
  { item: "yogurt", location: "fridge", duration: "1-2 Weeks", safe: "yes", type: "dairy" },
  { item: "cottage-cheese", location: "fridge", duration: "1 Week", safe: "yes", type: "dairy" },
  { item: "heavy-cream", location: "fridge", duration: "1 Month", safe: "yes", type: "dairy" },
  { item: "cheddar-cheese", location: "fridge", duration: "3-4 Weeks", safe: "yes", type: "dairy" },
  { item: "mozzarella", location: "fridge", duration: "1-2 Weeks", safe: "yes", type: "dairy" },
  { item: "parmesan", location: "fridge", duration: "2-3 Months", safe: "yes", type: "dairy" },
  { item: "cooked-pasta", location: "fridge", duration: "3-5 Days", safe: "yes", type: "leftover" },
  { item: "cooked-rice", location: "fridge", duration: "3-4 Days", safe: "yes", type: "leftover" },
  { item: "cooked-beans", location: "fridge", duration: "3-5 Days", safe: "yes", type: "leftover" },
  { item: "soup", location: "fridge", duration: "3-4 Days", safe: "yes", type: "leftover" },
  { item: "pizza", location: "fridge", duration: "3-4 Days", safe: "yes", type: "leftover" },
  { item: "cooked-potatoes", location: "fridge", duration: "3-4 Days", safe: "yes", type: "leftover" },
  { item: "avocado", location: "fridge", duration: "3-5 Days", safe: "yes", type: "produce" },
  { item: "cut-avocado", location: "fridge", duration: "1-2 Days", safe: "yes", type: "produce" },
  { item: "strawberries", location: "fridge", duration: "3-5 Days", safe: "yes", type: "produce" },
  { item: "blueberries", location: "fridge", duration: "1-2 Weeks", safe: "yes", type: "produce" },
  { item: "grapes", location: "fridge", duration: "1-2 Weeks", safe: "yes", type: "produce" },
  { item: "watermelon", location: "fridge", duration: "1-2 Weeks", safe: "yes", type: "produce" },
  { item: "cut-watermelon", location: "fridge", duration: "3-5 Days", safe: "yes", type: "produce" },
  { item: "apples", location: "fridge", duration: "4-6 Weeks", safe: "yes", type: "produce" },
  { item: "lettuce", location: "fridge", duration: "7-10 Days", safe: "yes", type: "produce" },
  { item: "spinach", location: "fridge", duration: "5-7 Days", safe: "yes", type: "produce" },
  { item: "broccoli", location: "fridge", duration: "1-2 Weeks", safe: "yes", type: "produce" },
  { item: "carrots", location: "fridge", duration: "3-4 Weeks", safe: "yes", type: "produce" },
  { item: "celery", location: "fridge", duration: "1-2 Weeks", safe: "yes", type: "produce" },
  { item: "mushrooms", location: "fridge", duration: "4-7 Days", safe: "yes", type: "produce" },
  { item: "tomatoes", location: "fridge", duration: "1 Week", safe: "yes", type: "produce" },
  { item: "cucumbers", location: "fridge", duration: "1 Week", safe: "yes", type: "produce" },
  { item: "bell-peppers", location: "fridge", duration: "1-2 Weeks", safe: "yes", type: "produce" },
  { item: "onions", location: "fridge", duration: "1-2 Months", safe: "yes", type: "produce" },
  { item: "garlic", location: "fridge", duration: "1-2 Months", safe: "yes", type: "produce" },
  { item: "lemons", location: "fridge", duration: "3-4 Weeks", safe: "yes", type: "produce" },
  { item: "limes", location: "fridge", duration: "3-4 Weeks", safe: "yes", type: "produce" },
  { item: "mayo", location: "fridge", duration: "2-3 Months", safe: "yes", type: "sauce" },
  { item: "ketchup", location: "fridge", duration: "6 Months", safe: "yes", type: "sauce" },
  { item: "mustard", location: "fridge", duration: "1 Year", safe: "yes", type: "sauce" },
  { item: "salad-dressing", location: "fridge", duration: "1-3 Months", safe: "yes", type: "sauce" },
  { item: "opened-wine", location: "fridge", duration: "3-5 Days", safe: "yes", type: "drink" },
  { item: "opened-beer", location: "fridge", duration: "1 Day", safe: "yes", type: "drink" },
  { item: "orange-juice", location: "fridge", duration: "7-10 Days", safe: "yes", type: "drink" },
  { item: "almond-milk", location: "fridge", duration: "7-10 Days", safe: "yes", type: "dairy" },
  { item: "coconut-milk", location: "fridge", duration: "4-5 Days", safe: "yes", type: "dairy" },
  { item: "hummus", location: "fridge", duration: "1 Week", safe: "yes", type: "sauce" },
  { item: "guacamole", location: "fridge", duration: "2-3 Days", safe: "yes", type: "sauce" },
  { item: "salsa", location: "fridge", duration: "5-7 Days", safe: "yes", type: "sauce" },
  { item: "leftover-chinese-food", location: "fridge", duration: "3-4 Days", safe: "yes", type: "leftover" },
  { item: "leftover-pizza", location: "fridge", duration: "3-4 Days", safe: "yes", type: "leftover" },
  { item: "cooked-vegetables", location: "fridge", duration: "3-4 Days", safe: "yes", type: "leftover" },
  
  // FREEZER (40 items)
  { item: "chicken", location: "freezer", duration: "9-12 Months", safe: "yes", type: "raw-meat" },
  { item: "ground-beef", location: "freezer", duration: "3-4 Months", safe: "yes", type: "raw-meat" },
  { item: "salmon", location: "freezer", duration: "2-3 Months", safe: "yes", type: "raw-meat" },
  { item: "shrimp", location: "freezer", duration: "3-6 Months", safe: "yes", type: "raw-meat" },
  { item: "bacon", location: "freezer", duration: "1 Month", safe: "yes", type: "raw-meat" },
  { item: "ham", location: "freezer", duration: "1-2 Months", safe: "yes", type: "raw-meat" },
  { item: "turkey", location: "freezer", duration: "1 Year", safe: "yes", type: "raw-meat" },
  { item: "hot-dogs", location: "freezer", duration: "1-2 Months", safe: "yes", type: "raw-meat" },
  { item: "bread", location: "freezer", duration: "3 Months", safe: "yes", type: "pantry" },
  { item: "cooked-rice", location: "freezer", duration: "6 Months", safe: "yes", type: "leftover" },
  { item: "cooked-pasta", location: "freezer", duration: "3 Months", safe: "yes", type: "leftover" },
  { item: "soup", location: "freezer", duration: "4-6 Months", safe: "yes", type: "leftover" },
  { item: "pizza", location: "freezer", duration: "1-2 Months", safe: "yes", type: "leftover" },
  { item: "butter", location: "freezer", duration: "6-9 Months", safe: "yes", type: "dairy" },
  { item: "milk", location: "freezer", duration: "3 Months", safe: "yes", type: "dairy" },
  { item: "eggs", location: "freezer", duration: "1 Year", safe: "yes", type: "dairy" },
  { item: "strawberries", location: "freezer", duration: "8-12 Months", safe: "yes", type: "produce" },
  { item: "blueberries", location: "freezer", duration: "8-12 Months", safe: "yes", type: "produce" },
  { item: "bananas", location: "freezer", duration: "2-3 Months", safe: "yes", type: "produce" },
  { item: "avocado", location: "freezer", duration: "3-6 Months", safe: "yes", type: "produce" },
  { item: "spinach", location: "freezer", duration: "10-12 Months", safe: "yes", type: "produce" },
  { item: "broccoli", location: "freezer", duration: "8-12 Months", safe: "yes", type: "produce" },
  { item: "corn", location: "freezer", duration: "1 Year", safe: "yes", type: "produce" },
  { item: "peas", location: "freezer", duration: "1 Year", safe: "yes", type: "produce" },
  { item: "ice-cream", location: "freezer", duration: "2-3 Months", safe: "yes", type: "dairy" },
  { item: "cookie-dough", location: "freezer", duration: "2 Months", safe: "yes", type: "pantry" },
  { item: "cake", location: "freezer", duration: "3 Months", safe: "yes", type: "pantry" },
  { item: "breast-milk", location: "freezer", duration: "6 Months", safe: "yes", type: "other" },
  { item: "baby-food", location: "freezer", duration: "1-3 Months", safe: "yes", type: "other" },
  { item: "cheese", location: "freezer", duration: "6 Months", safe: "yes", type: "dairy" },
  { item: "cooked-chicken", location: "freezer", duration: "4 Months", safe: "yes", type: "cooked-meat" },
  { item: "cooked-beef", location: "freezer", duration: "2-3 Months", safe: "yes", type: "cooked-meat" },
  { item: "cooked-shrimp", location: "freezer", duration: "3 Months", safe: "yes", type: "cooked-meat" },
  { item: "waffles", location: "freezer", duration: "3 Months", safe: "yes", type: "pantry" },
  { item: "pancakes", location: "freezer", duration: "3 Months", safe: "yes", type: "pantry" },
  { item: "lasagna", location: "freezer", duration: "2-3 Months", safe: "yes", type: "leftover" },
  { item: "chili", location: "freezer", duration: "4-6 Months", safe: "yes", type: "leftover" },
  { item: "cookie", location: "freezer", duration: "3-4 Months", safe: "yes", type: "pantry" },
  { item: "brownies", location: "freezer", duration: "3 Months", safe: "yes", type: "pantry" },
  { item: "pie", location: "freezer", duration: "6-8 Months", safe: "yes", type: "pantry" },

  // PANTRY / COUNTER (15 items)
  { item: "bananas", location: "counter", duration: "2-5 Days", safe: "yes", type: "produce" },
  { item: "avocado", location: "counter", duration: "3-4 Days", safe: "yes", type: "produce" },
  { item: "tomatoes", location: "counter", duration: "1 Week", safe: "yes", type: "produce" },
  { item: "potatoes", location: "pantry", duration: "3-5 Weeks", safe: "yes", type: "produce" },
  { item: "onions", location: "pantry", duration: "1-2 Months", safe: "yes", type: "produce" },
  { item: "garlic", location: "pantry", duration: "3-5 Months", safe: "yes", type: "produce" },
  { item: "bread", location: "counter", duration: "3-5 Days", safe: "yes", type: "pantry" },
  { item: "honey", location: "pantry", duration: "Indefinite", safe: "yes", type: "pantry" },
  { item: "olive-oil", location: "pantry", duration: "1-2 Years", safe: "yes", type: "pantry" },
  { item: "coffee-beans", location: "pantry", duration: "3-5 Months", safe: "yes", type: "pantry" },
  { item: "apples", location: "counter", duration: "1-2 Weeks", safe: "yes", type: "produce" },
  { item: "oranges", location: "counter", duration: "1 Week", safe: "yes", type: "produce" },
  { item: "lemons", location: "counter", duration: "1-2 Weeks", safe: "yes", type: "produce" },
  { item: "pineapple", location: "counter", duration: "2-3 Days", safe: "yes", type: "produce" },
  { item: "mangoes", location: "counter", duration: "3-5 Days", safe: "yes", type: "produce" },

  // EXTRA 24 to reach exactly 150
  { item: "pork-chops", location: "fridge", duration: "3-5 Days", safe: "yes", type: "raw-meat" },
  { item: "cooked-pork-chops", location: "fridge", duration: "3-4 Days", safe: "yes", type: "cooked-meat" },
  { item: "ground-turkey", location: "fridge", duration: "1-2 Days", safe: "yes", type: "raw-meat" },
  { item: "gravy", location: "fridge", duration: "1-2 Days", safe: "yes", type: "leftover" },
  { item: "broth", location: "fridge", duration: "3-4 Days", safe: "yes", type: "leftover" },
  { item: "cooked-eggs", location: "fridge", duration: "1 Week", safe: "yes", type: "dairy" },
  { item: "cold-cuts", location: "fridge", duration: "3-5 Days", safe: "yes", type: "raw-meat" },
  { item: "sour-cream-opened", location: "fridge", duration: "2 Weeks", safe: "yes", type: "dairy" },
  { item: "soft-cheese", location: "fridge", duration: "1-2 Weeks", safe: "yes", type: "dairy" },
  { item: "cooked-tofu", location: "fridge", duration: "3-5 Days", safe: "yes", type: "leftover" },
  { item: "opened-pesto", location: "fridge", duration: "1-2 Weeks", safe: "yes", type: "sauce" },
  { item: "cooked-lentils", location: "fridge", duration: "3-5 Days", safe: "yes", type: "leftover" },
  { item: "cut-pineapple", location: "fridge", duration: "3-5 Days", safe: "yes", type: "produce" },
  { item: "raspberries", location: "fridge", duration: "2-3 Days", safe: "yes", type: "produce" },
  { item: "pork-chops", location: "freezer", duration: "4-6 Months", safe: "yes", type: "raw-meat" },
  { item: "ground-turkey", location: "freezer", duration: "3-4 Months", safe: "yes", type: "raw-meat" },
  { item: "gravy", location: "freezer", duration: "3-4 Months", safe: "yes", type: "leftover" },
  { item: "broth", location: "freezer", duration: "3-4 Months", safe: "yes", type: "leftover" },
  { item: "pesto", location: "freezer", duration: "3-4 Months", safe: "yes", type: "leftover" },
  { item: "waffles-frozen", location: "freezer", duration: "3 Months", safe: "yes", type: "pantry" },
  { item: "pancakes-frozen", location: "freezer", duration: "3 Months", safe: "yes", type: "pantry" },
  { item: "muffins", location: "freezer", duration: "3 Months", safe: "yes", type: "pantry" },
  { item: "tortillas", location: "freezer", duration: "3 Months", safe: "yes", type: "pantry" },
  { item: "butter-long", location: "freezer", duration: "9 Months", safe: "yes", type: "dairy" },
  { item: "cream-cheese-opened", location: "fridge", duration: "10 Days", safe: "yes", type: "dairy" }
];

const generatedHowLong = rawHowLong.map(entry => {
  const itemTitle = titleCase(entry.item);
  const locTitle = entry.location === 'fridge' ? 'Refrigerator' : titleCase(entry.location);
  const slug = `${entry.item}-in-${entry.location}`;
  
  let shortAnswer = `In general, ${entry.item.replace(/-/g, ' ')} will last for ${entry.duration} in the ${entry.location}.`;
  let reason = `According to USDA guidelines, storing ${entry.item.replace(/-/g, ' ')} in the ${entry.location} keeps it safe at the optimal temperature. Cold temperatures retard bacterial growth, preserving quality.\n\nHowever, it's vital to pack it in airtight packaging to prevent cross-contamination and freezer burn. Prolonged storage can result in flavor degradation even if it remains pathogen-safe.`;
  let storageTips = [
    `Use an airtight container or a heavy-duty storage bag.`,
    `Place the item in the colder zone of your ${entry.location}.`,
    `Label the container with the date of storage.`
  ];
  let spoilageSigns = [
    `A sour, off odor indicating bacterial activity.`,
    `Visible slime, mold growth, or skin discolorations.`,
    `A soft or mushy texture that deviates from fresh state.`
  ];
  let faqs = [
    { question: `Can you eat it past the ${entry.duration} mark?`, answer: `It is highly discouraged. Pathogenic bacteria can grow without showing visible changes.` },
    { question: `What is the best storage container?`, answer: `Airtable-style glass food storage containers with locking lids provide the best seal.` },
    { question: `Does freezing extend this?`, answer: `Yes, freezing stops bacterial growth indefinitely, although texture and taste will degrade over time.` }
  ];

  return {
    item: itemTitle,
    slug: slug,
    location: entry.location,
    duration: entry.duration,
    safe: entry.safe,
    shortAnswer: shortAnswer,
    reason: reason,
    storageTips: storageTips,
    spoilageSigns: spoilageSigns,
    faqs: faqs,
    relatedItems: [] // resolved later
  };
});

// ----------------------------------------------------
// 2. GENERATE WASHING-MACHINE.JSON (80 items)
// ----------------------------------------------------

const rawWashingMachine = [
  // Shoes (10)
  { item: "sneakers", safe: "depends", type: "shoes" },
  { item: "running-shoes", safe: "no", type: "shoes" },
  { item: "converse", safe: "yes", type: "shoes" },
  { item: "vans", safe: "depends", type: "shoes" },
  { item: "canvas-shoes", safe: "yes", type: "shoes" },
  { item: "crocs-washing", safe: "no", type: "shoes" },
  { item: "hey-dudes", safe: "depends", type: "shoes" },
  { item: "slip-on-shoes", safe: "depends", type: "shoes" },
  { item: "tennis-shoes", safe: "depends", type: "shoes" },
  { item: "cleats", safe: "no", type: "shoes" },
  // Clothing (18)
  { item: "jeans", safe: "yes", type: "clothing" },
  { item: "wool-sweater", safe: "no", type: "clothing-wool" },
  { item: "cashmere-sweater", safe: "no", type: "clothing-wool" },
  { item: "silk-dress", safe: "no", type: "clothing-delicate" },
  { item: "swimsuit", safe: "no", type: "clothing-delicate" },
  { item: "sports-bra", safe: "depends", type: "clothing" },
  { item: "leggings", safe: "yes", type: "clothing" },
  { item: "down-jacket", safe: "depends", type: "clothing-down" },
  { item: "leather-jacket", safe: "no", type: "clothing-leather" },
  { item: "bras", safe: "depends", type: "clothing-delicate" },
  { item: "lululemon-leggings", safe: "depends", type: "clothing" },
  { item: "compression-socks", safe: "depends", type: "clothing" },
  { item: "nylon-jacket", safe: "yes", type: "clothing" },
  { item: "rain-jacket", safe: "no", type: "clothing-leather" },
  { item: "fleece-jacket", safe: "yes", type: "clothing" },
  { item: "denim-jacket", safe: "yes", type: "clothing" },
  { item: "hoodie", safe: "yes", type: "clothing" },
  { item: "athletic-wear", safe: "yes", type: "clothing" },
  // Bedding (12)
  { item: "pillows", safe: "depends", type: "bedding" },
  { item: "down-comforter", safe: "depends", type: "bedding" },
  { item: "weighted-blanket", safe: "no", type: "bedding" },
  { item: "electric-blanket", safe: "no", type: "bedding" },
  { item: "memory-foam-pillow", safe: "no", type: "bedding" },
  { item: "wool-blanket", safe: "no", type: "clothing-wool" },
  { item: "silk-pillowcase", safe: "no", type: "clothing-delicate" },
  { item: "feather-pillow", safe: "depends", type: "bedding" },
  { item: "mattress-pad", safe: "yes", type: "bedding" },
  { item: "mattress-protector", safe: "yes", type: "bedding" },
  { item: "duvet", safe: "yes", type: "bedding" },
  { item: "throw-blanket", safe: "yes", type: "bedding" },
  // Bags (9)
  { item: "backpack", safe: "no", type: "bags" },
  { item: "school-backpack", safe: "no", type: "bags" },
  { item: "gym-bag", safe: "yes", type: "bags" },
  { item: "tote-bag", safe: "yes", type: "bags" },
  { item: "lunch-bag", safe: "no", type: "bags" },
  { item: "canvas-bag", safe: "yes", type: "bags" },
  { item: "fanny-pack", safe: "depends", type: "bags" },
  { item: "diaper-bag", safe: "depends", type: "bags" },
  { item: "laptop-bag", safe: "no", type: "bags" },
  // Specialty (13)
  { item: "baseball-cap", safe: "no", type: "specialty" },
  { item: "hat", safe: "no", type: "specialty" },
  { item: "stuffed-animals", safe: "depends", type: "specialty" },
  { item: "dog-bed", safe: "yes", type: "specialty" },
  { item: "pet-toys", safe: "yes", type: "specialty" },
  { item: "yoga-mat", safe: "no", type: "specialty" },
  { item: "shower-pouf", safe: "no", type: "specialty" },
  { item: "bath-mat", safe: "depends", type: "specialty" },
  { item: "reusable-bags", safe: "yes", type: "specialty" },
  { item: "knee-brace", safe: "depends", type: "specialty" },
  { item: "ankle-brace", safe: "depends", type: "specialty" },
  { item: "ear-buds-case", safe: "no", type: "specialty" },
  { item: "airpods-case", safe: "no", type: "specialty" },

  // Extra 18 to make exactly 80
  { item: "sleeping-bag", safe: "depends", type: "bedding" },
  { item: "curtains", safe: "depends", type: "clothing-delicate" },
  { item: "tablecloth", safe: "yes", type: "clothing" },
  { item: "apron", safe: "yes", type: "clothing" },
  { item: "pot-holders", safe: "yes", type: "clothing" },
  { item: "oven-mitts", safe: "yes", type: "clothing" },
  { item: "dish-towels", safe: "yes", type: "clothing" },
  { item: "microfiber-cloths", safe: "yes", type: "clothing" },
  { item: "velvet-garments", safe: "no", type: "clothing-delicate" },
  { item: "lace-underwear", safe: "no", type: "clothing-delicate" },
  { item: "mens-suit", safe: "no", type: "clothing-leather" },
  { item: "winter-gloves", safe: "depends", type: "clothing" },
  { item: "woolen-socks", safe: "no", type: "clothing-wool" },
  { item: "tie", safe: "no", type: "clothing-delicate" },
  { item: "scarf", safe: "depends", type: "clothing-delicate" },
  { item: "leather-belt", safe: "no", type: "clothing-leather" },
  { item: "slippers", safe: "depends", type: "shoes" },
  { item: "pet-collar", safe: "yes", type: "specialty" }
];

const generatedWashingMachine = rawWashingMachine.map(entry => {
  const itemTitle = titleCase(entry.item);
  let shortAnswer = "";
  let reason = "";
  let instructions = [];
  let warnings = [];
  let settings = { waterTemp: "Cold", cycleType: "Delicate", spinSpeed: "Low" };
  
  if (entry.safe === 'yes') {
    shortAnswer = `Yes, you can wash a ${itemTitle.replace(/-/g, ' ')} in the washing machine.`;
    reason = `Washing a ${itemTitle.replace(/-/g, ' ')} in the machine is perfectly safe as the fibers can easily withstand moisture, tumbling action, and detergents without falling apart or shrinking.\n\nJust ensure you use a mesh bag for smaller accessories and clean any lint traps.`;
    instructions = [
      `Place the item inside a mesh laundry bag to prevent tangling.`,
      `Use a mild, liquid detergent.`,
      `Select a standard or delicate cycle configuration.`
    ];
    warnings = [
      `Avoid using fabric softeners which can leave residue.`,
      `Do not overload the machine drum.`
    ];
    settings = { waterTemp: "Warm", cycleType: "Regular", spinSpeed: "Medium" };
  } else if (entry.safe === 'no') {
    shortAnswer = `No, do not wash a ${itemTitle.replace(/-/g, ' ')} in the washing machine.`;
    reason = `The mechanical agitation and hot water of a washing machine will ruin the structural properties of a ${itemTitle.replace(/-/g, ' ')}.\n\nFor example, heat and water break down adhesives in shoes, warp wool structures permanently, and can ruin electronics or leather materials.`;
    instructions = [
      `Hand clean the exterior using a damp microfiber cloth.`,
      `Use specialized foam cleansers for leather or suede.`,
      `Spot clean stains immediately with mild soap.`
    ];
    warnings = [
      `Machine washing will cause permanent shrinkage, fiber matting, or glue failure.`,
      `Mechanical spin cycles can stretch or distort the item beyond repair.`
    ];
  } else {
    shortAnswer = `Yes, but you can only wash a ${itemTitle.replace(/-/g, ' ')} under specific settings.`;
    reason = `Washing this item in the machine depends on the fabric and details. Lightweight items are safe on gentle cycles, but heavy agitation or high temperatures will melt glues or shrink fibers.\n\nAlways use cold water and a protective laundry bag to cushion the mechanical impact.`;
    instructions = [
      `Place inside a zippered mesh wash bag.`,
      `Use cold water and a gentle liquid laundry soap.`,
      `Always air dry or tumble dry on a no-heat setting.`
    ];
    warnings = [
      `Never use hot water, which dissolves protective structural adhesives.`,
      `Avoid high spin speeds which twist and stretch the fabric.`
    ];
  }

  const faqs = [
    { question: `Will machine washing void the warranty?`, answer: `Yes, most premium shoe and specialty clothing manufacturers void warranties if machine washed.` },
    { question: `Can I use bleach?`, answer: `No, bleach is too harsh and can dissolve fibers or yellow synthetic glues.` },
    { question: `How should I dry this item?`, answer: `Air drying in a cool, ventilated area away from direct heat is always safest.` }
  ];

  return {
    item: itemTitle,
    slug: entry.item,
    safe: entry.safe,
    shortAnswer: shortAnswer,
    reason: reason,
    instructions: instructions,
    warnings: warnings,
    settings: settings,
    faqs: faqs,
    relatedItems: []
  };
});

// ----------------------------------------------------
// 3. GENERATE REFREEZE.JSON (80 items)
// ----------------------------------------------------

const rawRefreeze = [
  // Meat (18)
  { item: "chicken", safe: "depends", type: "meat" },
  { item: "ground-beef", safe: "depends", type: "meat" },
  { item: "steak", safe: "depends", type: "meat" },
  { item: "pork", safe: "depends", type: "meat" },
  { item: "lamb", safe: "depends", type: "meat" },
  { item: "turkey", safe: "depends", type: "meat" },
  { item: "salmon", safe: "depends", type: "fish" },
  { item: "shrimp", safe: "depends", type: "fish" },
  { item: "lobster", safe: "depends", type: "fish" },
  { item: "crab", safe: "depends", type: "fish" },
  { item: "tuna", safe: "depends", type: "fish" },
  { item: "bacon", safe: "depends", type: "meat" },
  { item: "sausage", safe: "depends", type: "meat" },
  { item: "hot-dogs", safe: "depends", type: "meat" },
  { item: "deli-meat", safe: "depends", type: "meat" },
  { item: "ham", safe: "depends", type: "meat" },
  { item: "ribs", safe: "depends", type: "meat" },
  { item: "ground-turkey", safe: "depends", type: "meat" },
  // Dairy (9)
  { item: "milk", safe: "yes", type: "dairy" },
  { item: "butter", safe: "yes", type: "dairy" },
  { item: "cheese", safe: "yes", type: "dairy" },
  { item: "cream-cheese", safe: "no", type: "dairy-no" },
  { item: "yogurt", safe: "no", type: "dairy-no" },
  { item: "sour-cream", safe: "no", type: "dairy-no" },
  { item: "heavy-cream", safe: "no", type: "dairy-no" },
  { item: "ice-cream", safe: "no", type: "dairy-no" },
  { item: "whipped-cream", safe: "no", type: "dairy-no" },
  // Produce (10)
  { item: "strawberries", safe: "yes", type: "produce" },
  { item: "blueberries", safe: "yes", type: "produce" },
  { item: "bananas", safe: "yes", type: "produce" },
  { item: "avocado", safe: "yes", type: "produce" },
  { item: "spinach", safe: "yes", type: "produce" },
  { item: "broccoli", safe: "yes", type: "produce" },
  { item: "corn", safe: "yes", type: "produce" },
  { item: "peas", safe: "yes", type: "produce" },
  { item: "mangoes", safe: "yes", type: "produce" },
  { item: "peaches", safe: "yes", type: "produce" },
  // Cooked food (19)
  { item: "cooked-chicken", safe: "depends", type: "cooked" },
  { item: "cooked-beef", safe: "depends", type: "cooked" },
  { item: "cooked-shrimp", safe: "depends", type: "cooked" },
  { item: "soup", safe: "yes", type: "cooked" },
  { item: "chili", safe: "yes", type: "cooked" },
  { item: "lasagna", safe: "yes", type: "cooked" },
  { item: "pizza", safe: "yes", type: "cooked" },
  { item: "cooked-rice", safe: "depends", type: "cooked" },
  { item: "cooked-pasta", safe: "yes", type: "cooked" },
  { item: "bread", safe: "yes", type: "pantry" },
  { item: "waffles", safe: "yes", type: "pantry" },
  { item: "pancakes", safe: "yes", type: "pantry" },
  { item: "cookie-dough", safe: "yes", type: "pantry" },
  { item: "cake", safe: "yes", type: "pantry" },
  { item: "pie", safe: "yes", type: "pantry" },
  { item: "breast-milk", safe: "no", type: "dairy-no" },
  { item: "baby-food", safe: "no", type: "dairy-no" },
  { item: "frozen-vegetables", safe: "yes", type: "produce" },
  { item: "frozen-fruit", safe: "yes", type: "produce" },

  // Extra 24 to reach exactly 80
  { item: "pork-chops", safe: "depends", type: "meat" },
  { item: "meatballs", safe: "depends", type: "cooked" },
  { item: "gravy", safe: "yes", type: "cooked" },
  { item: "beef-stew", safe: "yes", type: "cooked" },
  { item: "chicken-soup", safe: "yes", type: "cooked" },
  { item: "pot-pie", safe: "yes", type: "cooked" },
  { item: "tortillas", safe: "yes", type: "pantry" },
  { item: "muffins", safe: "yes", type: "pantry" },
  { item: "bagels", safe: "yes", type: "pantry" },
  { item: "croissants", safe: "yes", type: "pantry" },
  { item: "pizza-dough", safe: "yes", type: "pantry" },
  { item: "applesauce", safe: "yes", type: "produce" },
  { item: "mashed-potatoes", safe: "yes", type: "cooked" },
  { item: "green-beans", safe: "yes", type: "produce" },
  { item: "carrots", safe: "yes", type: "produce" },
  { item: "cauliflower", safe: "yes", type: "produce" },
  { item: "shredded-cheese", safe: "yes", type: "dairy" },
  { item: "heavy-whipping-cream", safe: "no", type: "dairy-no" },
  { item: "cream-cheese-frosting", safe: "yes", type: "pantry" },
  { item: "casserole", safe: "yes", type: "cooked" },
  { item: "cooked-salmon", safe: "depends", type: "cooked" },
  { item: "cooked-beans", safe: "yes", type: "cooked" },
  { item: "pesto", safe: "yes", type: "cooked" },
  { item: "tofu", safe: "yes", type: "cooked" }
];

const generatedRefreeze = rawRefreeze.map(entry => {
  const itemTitle = titleCase(entry.item);
  let shortAnswer = "";
  let reason = "";
  let instructions = [];
  let warnings = [];
  
  if (entry.safe === 'yes') {
    shortAnswer = `Yes, you can safely refreeze ${itemTitle.replace(/-/g, ' ')}.`;
    reason = `According to USDA guidelines, food stored constantly below 0°F remains safe indefinitely. You can refreeze ${itemTitle.replace(/-/g, ' ')} without cooking it first, provided it was thawed inside the refrigerator.\n\nBe aware that freezing causes minor structural changes and water separation, which might slightly degrade the texture.`;
    instructions = [
      `Wrap the item tightly in plastic wrap to minimize air contact.`,
      `Place in a heavy-duty freezer bag and squeeze out excess air.`,
      `Refreeze as quickly as possible to prevent large ice crystal growth.`
    ];
    warnings = [
      `Avoid refreezing if it was left at room temperature for over 2 hours.`,
      `Refreezing dairy-heavy items may cause significant fat separation.`
    ];
  } else if (entry.safe === 'no') {
    shortAnswer = `No, you should never refreeze ${itemTitle.replace(/-/g, ' ')}.`;
    reason = `Refreezing ${itemTitle.replace(/-/g, ' ')} is highly unsafe due to rapid bacterial multiplication during the thawing phase. Once thawed, the food holds enough moisture for microbes to flourish.\n\nRefreezing doesn't kill existing bacteria, it only pauses them. Additionally, the cell structure of dairy products like cream or yogurt completely collapses, separating it into watery and solid parts.`;
    instructions = [
      `Consume the item immediately after thawing.`,
      `Cook the item thoroughly if it is meat, then freeze the cooked dish.`,
      `Discard if it has been kept in the danger zone (above 40°F) for too long.`
    ];
    warnings = [
      `Refreezing raw items thawed at room temperature can cause severe food poisoning.`,
      `Separated dairy products will have an unpalatable, gritty texture.`
    ];
  } else {
    shortAnswer = `Yes, but only if it was thawed safely in the refrigerator.`;
    reason = `Refreezing raw meats like ${itemTitle.replace(/-/g, ' ')} is safe only if the meat was thawed at refrigerator temperatures (below 40°F).\n\nIf it was thawed on the counter or in warm water, bacteria will have multiplied on the surface, making refreezing extremely dangerous. Note that refreezing raw meat causes moisture loss, making it dry when eventually cooked.`;
    instructions = [
      `Confirm the meat was thawed exclusively in the refrigerator.`,
      `Wrap tightly in multiple layers of freezer wrap or foil.`,
      `Write the date on the bag and freeze at 0°F.`
    ];
    warnings = [
      `Never refreeze raw meat that has turned grey, smells off, or feels slimy.`,
      `Do not refreeze if the meat was kept out of the cold for more than 2 hours.`
    ];
  }

  const faqs = [
    { question: `Does refreezing kill bacteria?`, answer: `No, freezing does not kill bacteria; it only puts them in a dormant state. Only cooking to safe temperatures kills them.` },
    { question: `How many times can you refreeze food?`, answer: `Technically, you can refreeze multiple times if kept cold, but quality degrades significantly with each cycle.` },
    { question: `Is it safe to refreeze cooked food?`, answer: `Yes, you can refreeze cooked leftovers within 3 to 4 days, provided they were stored correctly.` }
  ];

  return {
    item: itemTitle,
    slug: entry.item,
    safe: entry.safe,
    shortAnswer: shortAnswer,
    reason: reason,
    instructions: instructions,
    warnings: warnings,
    faqs: faqs,
    relatedItems: []
  };
});

// ----------------------------------------------------
// 4. GENERATE WHAT-HAPPENS.JSON (60 items)
// ----------------------------------------------------

const rawWhatHappens = [
  // Microwave (10)
  { scenario: "microwave-aluminum-foil", dangerLevel: "dangerous", type: "microwave" },
  { scenario: "microwave-nothing", dangerLevel: "dangerous", type: "microwave" },
  { scenario: "microwave-egg-in-shell", dangerLevel: "dangerous", type: "microwave" },
  { scenario: "microwave-metal-spoon", dangerLevel: "caution", type: "microwave" },
  { scenario: "microwave-styrofoam", dangerLevel: "dangerous", type: "microwave" },
  { scenario: "microwave-grapes", dangerLevel: "dangerous", type: "microwave" },
  { scenario: "microwave-water-too-long", dangerLevel: "dangerous", type: "microwave" },
  { scenario: "microwave-cd", dangerLevel: "dangerous", type: "microwave" },
  { scenario: "microwave-soap", dangerLevel: "caution", type: "microwave" },
  { scenario: "microwave-plastic-bag", dangerLevel: "dangerous", type: "microwave" },
  // Dishwasher (6)
  { scenario: "put-soap-in-dishwasher", dangerLevel: "caution", type: "dishwasher" },
  { scenario: "put-too-much-detergent", dangerLevel: "caution", type: "dishwasher" },
  { scenario: "run-dishwasher-without-detergent", dangerLevel: "safe", type: "dishwasher" },
  { scenario: "put-cast-iron-in-dishwasher", dangerLevel: "caution", type: "dishwasher" },
  { scenario: "put-wooden-spoon-in-dishwasher", dangerLevel: "caution", type: "dishwasher" },
  { scenario: "put-crystal-in-dishwasher", dangerLevel: "caution", type: "dishwasher" },
  // Freezer (8)
  { scenario: "refreeze-thawed-chicken", dangerLevel: "dangerous", type: "freezer" },
  { scenario: "freeze-canned-food", dangerLevel: "caution", type: "freezer" },
  { scenario: "freeze-eggs-in-shell", dangerLevel: "caution", type: "freezer" },
  { scenario: "freeze-carbonated-drinks", dangerLevel: "dangerous", type: "freezer" },
  { scenario: "freeze-full-wine-bottle", dangerLevel: "dangerous", type: "freezer" },
  { scenario: "freeze-mayonnaise", dangerLevel: "safe", type: "freezer" },
  { scenario: "leave-freezer-door-open", dangerLevel: "caution", type: "freezer" },
  { scenario: "freeze-hot-food", dangerLevel: "caution", type: "freezer" },
  // Oven (7)
  { scenario: "put-plastic-in-oven", dangerLevel: "dangerous", type: "oven" },
  { scenario: "put-cardboard-in-oven", dangerLevel: "dangerous", type: "oven" },
  { scenario: "put-wax-paper-in-oven", dangerLevel: "dangerous", type: "oven" },
  { scenario: "put-paper-bag-in-oven", dangerLevel: "dangerous", type: "oven" },
  { scenario: "leave-oven-on-overnight", dangerLevel: "dangerous", type: "oven" },
  { scenario: "put-empty-pan-in-oven", dangerLevel: "caution", type: "oven" },
  { scenario: "use-aluminum-foil-on-oven-bottom", dangerLevel: "dangerous", type: "oven" },
  // Stove/Other (10)
  { scenario: "leave-gas-stove-on", dangerLevel: "dangerous", type: "stove" },
  { scenario: "boil-dry-pot", dangerLevel: "dangerous", type: "stove" },
  { scenario: "put-cold-glass-on-hot-stove", dangerLevel: "dangerous", type: "stove" },
  { scenario: "mix-bleach-and-vinegar", dangerLevel: "dangerous", type: "chemical" },
  { scenario: "mix-bleach-and-ammonia", dangerLevel: "dangerous", type: "chemical" },
  { scenario: "put-hot-pan-in-cold-water", dangerLevel: "caution", type: "stove" },
  { scenario: "eat-freezer-burned-meat", dangerLevel: "safe", type: "food" },
  { scenario: "eat-food-left-out-overnight", dangerLevel: "dangerous", type: "food" },
  { scenario: "eat-expired-eggs", dangerLevel: "dangerous", type: "food" },
  { scenario: "drink-expired-milk", dangerLevel: "dangerous", type: "food" },

  // Extra 19 to make exactly 60
  { scenario: "microwave-cardboard-box", dangerLevel: "caution", type: "microwave" },
  { scenario: "microwave-travel-mug", dangerLevel: "dangerous", type: "microwave" },
  { scenario: "microwave-tupperware-unmarked", dangerLevel: "dangerous", type: "microwave" },
  { scenario: "put-bamboo-cutting-board-in-dishwasher", dangerLevel: "caution", type: "dishwasher" },
  { scenario: "put-non-stick-pan-in-dishwasher", dangerLevel: "caution", type: "dishwasher" },
  { scenario: "put-chefs-knife-in-dishwasher", dangerLevel: "caution", type: "dishwasher" },
  { scenario: "leave-fridge-door-open", dangerLevel: "caution", type: "freezer" },
  { scenario: "freeze-bananas-in-peel", dangerLevel: "safe", type: "freezer" },
  { scenario: "freeze-whole-avocado", dangerLevel: "safe", type: "freezer" },
  { scenario: "put-styrofoam-in-oven", dangerLevel: "dangerous", type: "oven" },
  { scenario: "put-plastic-cutting-board-in-oven", dangerLevel: "dangerous", type: "oven" },
  { scenario: "leave-electric-stove-on", dangerLevel: "dangerous", type: "stove" },
  { scenario: "put-hot-glass-dish-on-cold-counter", dangerLevel: "dangerous", type: "stove" },
  { scenario: "eat-sprouted-potatoes", dangerLevel: "dangerous", type: "food" },
  { scenario: "eat-moldy-bread", dangerLevel: "dangerous", type: "food" },
  { scenario: "eat-moldy-cheese", dangerLevel: "caution", type: "food" },
  { scenario: "drink-expired-soda", dangerLevel: "safe", type: "food" },
  { scenario: "eat-freezer-burned-ice-cream", dangerLevel: "safe", type: "food" },
  { scenario: "eat-raw-cookie-dough", dangerLevel: "dangerous", type: "food" }
];

const generatedWhatHappens = rawWhatHappens.map(entry => {
  const scenarioTitle = titleCase(entry.scenario);
  let shortAnswer = "";
  let reason = "";
  let healthImpact = "";
  let actions = [];
  let prevention = [];
  
  if (entry.dangerLevel === 'dangerous') {
    shortAnswer = `It is extremely dangerous to ${entry.scenario.replace(/-/g, ' ')}.`;
    reason = `Doing this poses an immediate safety hazard, fire risk, or chemical threat.\n\nFor example, heating foil in a microwave builds massive electrical arcs that ignite fires, while mixing chlorine bleach with ammonia or acids releases lethal gases (chlorine or chloramine) that damage your lungs instantly.`;
    healthImpact = `Exposure can lead to severe inhalation burns, chemical poisoning, structure fires, or explosion injuries.`;
    actions = [
      `Turn off the appliance power immediately if safe to do so.`,
      `Evacuate the area if smoke or heavy gas forms.`,
      `Seek emergency medical attention if fumes are inhaled.`
    ];
    prevention = [
      `Double-check container labels before microwaving or baking.`,
      `Never mix cleaning chemicals together under any circumstance.`
    ];
  } else if (entry.dangerLevel === 'caution') {
    shortAnswer = `Be cautious, as doing this can cause damage or minor safety issues.`;
    reason = `While not immediately life-threatening, doing this will likely ruin your appliance, cookware, or food.\n\nFor example, washing cast iron or chef's knives in the dishwasher ruins their seasoning and edges, while freezing soda cans or eggs in shell leads to messy, pressurized explosions that are difficult to clean.`;
    healthImpact = `Minimal health risks unless contaminated food is consumed, but high likelihood of property damage.`;
    actions = [
      `Allow hot cookware or surfaces to cool naturally.`,
      `Slowly clean up any spills or mess inside the appliance.`,
      `Inspect the appliance surfaces for cracks or mechanical damage.`
    ];
    prevention = [
      `Hand wash kitchen knives, wood cutting boards, and cast iron.`,
      `Leave adequate headspace or avoid freezing tightly sealed containers.`
    ];
  } else {
    shortAnswer = `It is safe, though it may result in a loss of food quality.`;
    reason = `Doing this is safe to do, and won't cause fires or release chemical toxins.\n\nFor example, freezer burn on ice cream or meat dry-crystallizes the food, affecting taste and mouthfeel, but it remains fully pathogen-safe to eat. Running a dishwasher without soap will simply rinse dishes without sanitizing them.`;
    healthImpact = `None, the food or action remains completely non-toxic and pathogen-safe.`;
    actions = [
      `Cut off freezer-burned spots before cooking meat.`,
      `Re-run dishes with proper detergent if they did not get fully clean.`
    ];
    prevention = [
      `Wrap frozen food in airtight heavy-duty packaging.`,
      `Routinely monitor detergent levels before starting cycles.`
    ];
  }

  const faqs = [
    { question: `Can this cause a household fire?`, answer: `Yes, if the action involves dry paper in the oven, or arcing metals in the microwave, it can ignite a fire within seconds.` },
    { question: `Is the damage covered by appliance warranties?`, answer: `Generally, no. Damage caused by user misuse (like putting non-safe materials inside) is excluded.` },
    { question: `What should I do first if an appliance starts sparking?`, answer: `Unplug the appliance from the wall socket or flip the kitchen circuit breaker before touching the machine.` }
  ];

  return {
    item: scenarioTitle,
    slug: entry.scenario,
    dangerLevel: entry.dangerLevel,
    shortAnswer: shortAnswer,
    reason: reason,
    healthImpact: healthImpact,
    actions: actions,
    prevention: prevention,
    faqs: faqs,
    relatedItems: []
  };
});

// ----------------------------------------------------
// 5. RESOLVE RELATED ITEMS SLUGS FOR ALL CATEGORIES
// ----------------------------------------------------

// Category 1: how-long cross-links
generatedHowLong.forEach(item => {
  const siblings = generatedHowLong.filter(i => i.slug !== item.slug);
  const shuffled = siblings.sort(() => 0.5 - Math.random()).slice(0, 5);
  item.relatedItems = shuffled.map(i => i.slug);
});

// Category 2: washing-machine cross-links
generatedWashingMachine.forEach(item => {
  const siblings = generatedWashingMachine.filter(i => i.slug !== item.slug);
  const shuffled = siblings.sort(() => 0.5 - Math.random()).slice(0, 5);
  item.relatedItems = shuffled.map(i => i.slug);
});

// Category 3: refreeze cross-links
generatedRefreeze.forEach(item => {
  const siblings = generatedRefreeze.filter(i => i.slug !== item.slug);
  const shuffled = siblings.sort(() => 0.5 - Math.random()).slice(0, 5);
  item.relatedItems = shuffled.map(i => i.slug);
});

// Category 4: what-happens cross-links
generatedWhatHappens.forEach(item => {
  const siblings = generatedWhatHappens.filter(i => i.slug !== item.slug);
  const shuffled = siblings.sort(() => 0.5 - Math.random()).slice(0, 5);
  item.relatedItems = shuffled.map(i => i.slug);
});

// ----------------------------------------------------
// 6. SAVE TO DATA DIRECTORY
// ----------------------------------------------------

const dataDir = path.join(__dirname, '../src/data');

fs.writeFileSync(path.join(dataDir, 'how-long.json'), JSON.stringify(generatedHowLong, null, 2), 'utf-8');
console.log(`Saved how-long.json with ${generatedHowLong.length} items.`);

fs.writeFileSync(path.join(dataDir, 'washing-machine.json'), JSON.stringify(generatedWashingMachine, null, 2), 'utf-8');
console.log(`Saved washing-machine.json with ${generatedWashingMachine.length} items.`);

fs.writeFileSync(path.join(dataDir, 'refreeze.json'), JSON.stringify(generatedRefreeze, null, 2), 'utf-8');
console.log(`Saved refreeze.json with ${generatedRefreeze.length} items.`);

fs.writeFileSync(path.join(dataDir, 'what-happens.json'), JSON.stringify(generatedWhatHappens, null, 2), 'utf-8');
console.log(`Saved what-happens.json with ${generatedWhatHappens.length} items.`);

console.log('Database Phase 2 generation complete!');
