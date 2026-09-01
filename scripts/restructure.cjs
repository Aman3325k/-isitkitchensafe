const fs = require('fs');
const path = require('path');

const itemsPath = path.join(__dirname, '../src/data/items.json');
const items = JSON.parse(fs.readFileSync(itemsPath, 'utf8'));

// Identify categories based on identical reason text
const reasonMap = new Map();

for (const item of items) {
  const reason = item.reason.trim();
  if (!reasonMap.has(reason)) {
    reasonMap.set(reason, []);
  }
  reasonMap.get(reason).push(item);
}

for (const [reason, group] of reasonMap.entries()) {
  if (group.length > 1) {
    // Generate category ID based on appliance and first item name
    const sampleItem = group[0];
    const catId = `${sampleItem.appliance}_${sampleItem.item.toLowerCase().replace(/[^a-z0-9]+/g, '_')}_group`;
    
    for (const item of group) {
      item.categoryId = catId;
      
      const itemName = item.item;
      let warning = "";
      
      const lName = itemName.toLowerCase();
      
      // Heuristics based on item name and appliance
      if (item.appliance === 'refreeze') {
        if (lName.includes('bacon') || lName.includes('pork') || lName.includes('ham') || lName.includes('sausage')) {
          warning = `Refreezing ${itemName} can cause fat oxidation, changing the flavor. Ensure it hasn't been at room temp for over 2 hours.`;
        } else if (lName.includes('beef') || lName.includes('steak') || lName.includes('burger')) {
          warning = `Refreezing ${itemName} draws out moisture, resulting in a drier and tougher texture when finally cooked.`;
        } else if (lName.includes('chicken') || lName.includes('turkey') || lName.includes('poultry')) {
          warning = `When refreezing ${itemName}, keep in mind that poultry is highly susceptible to salmonella if it was thawed at room temperature.`;
        } else if (lName.includes('cheese') || lName.includes('cream') || lName.includes('milk') || lName.includes('yogurt')) {
          warning = `Refreezing dairy like ${itemName} destroys the emulsion, resulting in a grainy, separated texture best used only for cooking.`;
        } else if (lName.includes('fish') || lName.includes('shrimp') || lName.includes('salmon') || lName.includes('crab') || lName.includes('lobster')) {
          warning = `Seafood like ${itemName} is highly perishable. Refreezing often causes cell wall breakdown, leading to mushy meat. [NEEDS REVIEW]`;
        } else if (lName.includes('fruit') || lName.includes('berry') || lName.includes('apple') || lName.includes('banana')) {
          warning = `Refreezing ${itemName} turns it into a mushy puree because ice crystals rupture the delicate plant cell walls.`;
        } else if (lName.includes('bread') || lName.includes('bagel') || lName.includes('cake') || lName.includes('cookie')) {
          warning = `Refreezing baked goods like ${itemName} accelerates staling as moisture is repeatedly drawn out of the starches.`;
        } else if (lName.includes('rice') || lName.includes('pasta')) {
          warning = `Refreezing cooked ${itemName} changes the starch structure, making it hard or gritty when reheated.`;
        } else if (lName.includes('vegetable') || lName.includes('potato') || lName.includes('carrot')) {
          warning = `The high water content in ${itemName} means refreezing will make it extremely soggy and limp. [NEEDS REVIEW]`;
        } else {
          warning = `Repeatedly freezing ${itemName} degrades its quality, flavor, and texture. Wrap tightly to prevent freezer burn. [NEEDS REVIEW]`;
        }
      } else if (item.appliance === 'microwave') {
        if (lName.includes('foil') || lName.includes('metal') || lName.includes('steel') || lName.includes('silver') || lName.includes('gold') || lName.includes('copper')) {
          warning = `Never microwave ${itemName}. Its metallic composition acts as an antenna, causing immediate arcing and severe fire risk.`;
        } else if (lName.includes('plastic') || lName.includes('styrofoam') || lName.includes('tupperware') || lName.includes('ziploc')) {
          warning = `Unless explicitly marked microwave-safe, heating ${itemName} can cause it to melt and leach harmful endocrine disruptors into your food.`;
        } else if (lName.includes('glass') || lName.includes('ceramic') || lName.includes('mug') || lName.includes('plate') || lName.includes('bowl')) {
          warning = `Ensure ${itemName} is labeled microwave-safe. Non-safe versions may have air bubbles or metallic glazes that cause shattering.`;
        } else if (lName.includes('wood') || lName.includes('bamboo')) {
          warning = `Microwaving ${itemName} dries out the natural moisture in the material, causing it to crack, splinter, or even ignite.`;
        } else {
          warning = `Check the bottom of ${itemName} for a microwave-safe symbol before heating to avoid damage or chemical leaching. [NEEDS REVIEW]`;
        }
      } else if (item.appliance === 'dishwasher') {
        if (lName.includes('non-stick') || lName.includes('teflon') || lName.includes('pan') || lName.includes('skillet')) {
          warning = `Dishwashing ${itemName} will aggressively strip its seasoning or degrade its non-stick coating, rendering it useless. Hand wash only.`;
        } else if (lName.includes('wood') || lName.includes('bamboo') || lName.includes('board')) {
          warning = `The prolonged heat and water in the dishwasher will cause ${itemName} to swell, warp, crack, and eventually split apart.`;
        } else if (lName.includes('cast iron') || lName.includes('carbon steel')) {
          warning = `Dishwashing ${itemName} strips the polymerized oil seasoning and exposes the raw metal, causing instant and severe rusting.`;
        } else if (lName.includes('shoe') || lName.includes('crocs') || lName.includes('sneaker')) {
          warning = `The high heat of the drying cycle will warp the foam/rubber and melt the adhesives in ${itemName}.`;
        } else if (lName.includes('silver') || lName.includes('gold') || lName.includes('pewter') || lName.includes('copper') || lName.includes('brass')) {
          warning = `Harsh dishwasher detergents will pit, oxidize, and permanently discolor ${itemName}.`;
        } else if (lName.includes('crystal') || lName.includes('china') || lName.includes('antique')) {
          warning = `The abrasive detergents and heat can cause irreversible clouding or chip the delicate edges of ${itemName}.`;
        } else if (lName.includes('sponge') || lName.includes('cloth') || lName.includes('towel')) {
          warning = `While some wash ${itemName} in the dishwasher, it may not get fully clean and can trap food particles from other dishes. [NEEDS REVIEW]`;
        } else {
          warning = `The combination of extreme heat and caustic detergent can degrade ${itemName} over time. Handwashing is safer. [NEEDS REVIEW]`;
        }
      } else if (item.appliance === 'oven') {
        if (lName.includes('plastic') || lName.includes('styrofoam') || lName.includes('tupperware')) {
          warning = `Never use ${itemName} in the oven. It will melt completely, release toxic fumes, and ruin both your food and the oven.`;
        } else if (lName.includes('wax') || lName.includes('paper')) {
          warning = `Never use ${itemName} in the oven. It is not heat resistant and will quickly ignite, causing an oven fire.`;
        } else if (lName.includes('glass') || lName.includes('pyrex')) {
          warning = `Ensure ${itemName} is tempered oven-safe glass. Avoid sudden temperature changes (like putting a cold dish in a hot oven) to prevent thermal shock shattering.`;
        } else {
          warning = `Always follow manufacturer temperature limits specifically for ${itemName} to ensure it doesn't warp or melt. [NEEDS REVIEW]`;
        }
      } else if (item.appliance === 'airfryer') {
        if (lName.includes('wax') || lName.includes('parchment') || lName.includes('paper')) {
          warning = `Never put unweighted ${itemName} in an air fryer. The fan will blow it into the heating element, immediately starting a fire.`;
        } else if (lName.includes('plastic') || lName.includes('tupperware')) {
          warning = `${itemName} will instantly melt in the intense, concentrated heat of an air fryer.`;
        } else {
          warning = `Ensure ${itemName} is rated for high-heat convection baking and is small enough not to block airflow. [NEEDS REVIEW]`;
        }
      } else if (item.appliance === 'freezer') {
        if (lName.includes('glass') || lName.includes('bottle') || lName.includes('jar')) {
           warning = `Liquids expand when frozen. If ${itemName} is full and sealed, the expanding ice will shatter it.`;
        } else if (lName.includes('egg') || lName.includes('shell')) {
           warning = `Freezing ${itemName} intact will cause the shell to crack as the insides expand. [NEEDS REVIEW]`;
        } else {
           warning = `Ensure ${itemName} is stored in an airtight, freezer-safe container to prevent severe freezer burn. [NEEDS REVIEW]`;
        }
      } else {
        warning = `Always follow manufacturer instructions specifically for ${itemName} to ensure safety and longevity. [NEEDS REVIEW]`;
      }
      
      item.specific_warning = warning;
    }
  }
}

fs.writeFileSync(itemsPath, JSON.stringify(items, null, 2));
console.log('Restructured items.json with improved specific_warning heuristics');
