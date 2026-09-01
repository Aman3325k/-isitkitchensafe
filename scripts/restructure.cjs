const fs = require('fs');
const path = require('path');

const itemsPath = path.join(__dirname, '../src/data/items.json');
const items = JSON.parse(fs.readFileSync(itemsPath, 'utf8'));

// Identify categories based on identical reason text
const reasonMap = new Map();
let catCounter = 1;

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
      
      // Generate specific warning
      const itemName = item.item;
      let warning = "";
      
      if (item.appliance === 'refreeze') {
        if (catId.includes('bacon_group')) {
          warning = `When refreezing ${itemName}, ensure it has not sat at room temperature for more than 2 hours. ${itemName} specifically is best used within 2-3 months after refreezing to prevent freezer burn and quality loss.`;
        } else if (itemName.includes('Cheese') || itemName.includes('Cream') || itemName.includes('Yogurt')) {
          warning = `Refreezing ${itemName} can significantly alter its texture, making it crumbly or separated. Best used for cooking or melting rather than eating fresh.`;
        } else if (itemName.includes('Apple') || itemName.includes('Banana') || itemName.includes('Berry') || itemName.includes('Orange')) {
          warning = `${itemName} becomes mushy when thawed and refrozen due to ruptured cell walls. Best used in smoothies or baking.`;
        } else if (itemName.includes('Shrimp') || itemName.includes('Lobster') || itemName.includes('Crab') || itemName.includes('Salmon') || itemName.includes('Tuna')) {
          warning = `Seafood like ${itemName} is highly perishable. Only refreeze if thawed in the refrigerator at 40°F or below, and expect some texture degradation.`;
        } else {
          warning = `For ${itemName}, wrap tightly in freezer-safe material to prevent moisture loss and freezer burn during the second freeze.`;
        }
      } else if (item.appliance === 'microwave') {
        if (catId.includes('aluminum_foil_group')) {
          warning = `Never microwave ${itemName}. Its metallic composition will cause immediate arcing, sparks, and fire risk.`;
        } else if (catId.includes('glass_bowl_group') || catId.includes('paper_plate_group')) {
          warning = `Ensure the specific brand of ${itemName} is marked 'microwave-safe'. Unmarked items may absorb heat, warp, or shatter.`;
        } else {
          warning = `Ensure ${itemName} does not have any hidden metallic trim or non-microwave-safe seals before heating.`;
        }
      } else if (item.appliance === 'dishwasher') {
        if (catId.includes('non_stick_pan_group')) {
          warning = `Dishwashing ${itemName} will strip its seasoning or damage its non-stick coating. Hand wash with mild soap only.`;
        } else if (catId.includes('running_shoes_group')) {
          warning = `The heat of the dishwasher will warp the materials and ruin the adhesives in ${itemName}, causing the soles to detach.`;
        } else {
          warning = `The high heat and harsh detergents can degrade ${itemName} over time.`;
        }
      } else if (item.appliance === 'oven') {
        if (catId.includes('wax_paper_group')) {
          warning = `Never use ${itemName} in the oven. It is not heat resistant and will melt or ignite. Use parchment paper instead.`;
        } else {
          warning = `Always follow manufacturer temperature limits specifically for ${itemName} to ensure safety and longevity.`;
        }
      } else if (item.appliance === 'airfryer') {
        if (catId.includes('wax_paper_airfryer_group')) {
          warning = `Never use ${itemName} in the air fryer. The powerful heating element and fan can blow it around, causing it to catch fire.`;
        } else {
          warning = `Ensure ${itemName} is weighed down by food so it isn't sucked into the heating element.`;
        }
      } else {
        warning = `Always follow manufacturer instructions specifically for ${itemName} to ensure safety and longevity.`;
      }
      
      item.specific_warning = warning;
    }
  }
}

fs.writeFileSync(itemsPath, JSON.stringify(items, null, 2));
console.log('Restructured items.json with categoryId and specific_warning');
