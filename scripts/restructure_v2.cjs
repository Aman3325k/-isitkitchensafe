const fs = require('fs');
const path = require('path');

const itemsPath = path.join(__dirname, '../src/data/items.json');
const items = JSON.parse(fs.readFileSync(itemsPath, 'utf8'));

// Identify categories based on identical reason text
const reasonMap = new Map();

for (const item of items) {
  // clear out old ones
  delete item.specific_warning;
  delete item.categoryId;

  const reason = item.reason.trim();
  if (!reasonMap.has(reason)) {
    reasonMap.set(reason, []);
  }
  reasonMap.get(reason).push(item);
}

let correctedCount = 0;

for (const [reason, group] of reasonMap.entries()) {
  if (group.length > 1) {
    const sampleItem = group[0];
    const catId = `${sampleItem.appliance}_${sampleItem.item.toLowerCase().replace(/[^a-z0-9]+/g, '_')}_group`;
    
    for (const item of group) {
      item.categoryId = catId;
      const lName = item.item.toLowerCase();
      const mat = item.material || 'Unknown';
      let warning = "";

      if (item.appliance === 'dishwasher') {
        if (mat === 'Kitchen Appliance Component' || mat === 'Stainless Steel / Alloy Metal') {
          if (lName.includes('non-stick') || lName.includes('teflon')) {
            warning = `Dishwashing ${item.item} will aggressively strip its seasoning or degrade its non-stick coating, rendering it useless. Hand wash only.`;
          } else if (lName.includes('copper')) {
            warning = `Harsh dishwasher detergents will pit, oxidize, and permanently discolor copper surfaces on your ${item.item}.`;
          } else if (lName.includes('aluminum')) {
            warning = `Dishwasher detergent contains alkalines that cause the aluminum in ${item.item} to instantly oxidize and turn dark gray or black.`;
          } else if (lName.includes('carbon steel') || lName.includes('wok')) {
            warning = `Dishwashing strips the polymerized oil seasoning from ${item.item} and exposes the raw metal, causing instant and severe rusting.`;
          } else if (lName.includes('wood') || lName.includes('bamboo')) {
            warning = `The prolonged heat and water in the dishwasher will cause the wood in ${item.item} to swell, warp, crack, and split apart.`;
          } else {
            warning = `The combination of extreme heat and caustic detergent can degrade ${item.item} over time. Handwashing is safer. [NEEDS REVIEW]`;
          }
        } else if (mat === 'Cast Iron') {
          warning = `Dishwashing strips the polymerized oil seasoning from ${item.item}, exposing the raw iron and causing immediate rusting.`;
        } else if (mat === 'Precious Metal / Trim') {
          warning = `The harsh chemicals in dishwasher detergent will quickly tarnish or completely strip the precious metal finish on ${item.item}.`;
        } else if (mat.includes('Glass') || mat.includes('Crystal')) {
          warning = `The abrasive detergents and heat can cause irreversible clouding or chip the delicate edges of ${item.item}.`;
        } else if (mat.includes('Ceramic') || mat.includes('Porcelain') || mat.includes('China')) {
          warning = `Repeated dishwashing can wear away any decorative glaze on ${item.item} and cause micro-cracking if the ceramic absorbs moisture.`;
        } else if (mat.includes('Plastic') || mat.includes('Silicone') || mat.includes('Expanded Polystyrene')) {
          warning = `The high heat of the dishwasher drying cycle can warp, melt, or degrade the structure of ${item.item}. [NEEDS REVIEW]`;
        } else {
          warning = `Always check manufacturer instructions before placing ${item.item} in the dishwasher. [NEEDS REVIEW]`;
        }
      } else if (item.appliance === 'microwave') {
        if (mat === 'Polymer Plastic' || mat === 'Expanded Polystyrene (EPS)') {
          if (lName.includes('styrofoam') || lName.includes('foam') || lName.includes('takeout')) {
            warning = `Microwaving ${item.item} can cause the foam to melt and leach hazardous chemicals like styrene directly into your food.`;
          } else if (lName.includes('tupperware') || lName.includes('container') || lName.includes('bag')) {
            warning = `Unless explicitly marked microwave-safe, heating ${item.item} can warp the plastic and leach endocrine disruptors into your food.`;
          } else {
            warning = `Heating ${item.item} can melt the material or leach toxic chemicals. [NEEDS REVIEW]`;
          }
        } else if (mat === 'Natural Wood / Bamboo' || mat === 'Cellulose Paper / Cardboard') {
          if (lName.includes('bag') || lName.includes('newspaper')) {
             warning = `Never microwave ${item.item}, as recycled paper products can contain metallic flecks that spark and catch fire.`;
          } else {
             warning = `Microwaving ${item.item} dries out its natural moisture, which can lead to scorching, cracking, or ignition.`;
          }
        } else if (mat.includes('Metal') || mat.includes('Cast Iron') || mat.includes('Stainless Steel')) {
          warning = `Never microwave ${item.item}. Its metallic composition acts as an antenna, causing immediate arcing and severe fire risk.`;
        } else if (mat === 'Animal Protein' || mat.includes('Dairy')) {
          warning = `Microwaving ${item.item} often leads to uneven heating, leaving cold spots where bacteria can survive and multiply. [NEEDS REVIEW]`;
        } else if (mat.includes('Glass') || mat.includes('Ceramic')) {
          warning = `Ensure ${item.item} is explicitly labeled microwave-safe. Non-safe versions may contain metallic glazes or trapped air that causes shattering.`;
        } else {
          warning = `Check the bottom of ${item.item} for a microwave-safe symbol before heating. [NEEDS REVIEW]`;
        }
      } else if (item.appliance === 'freezer' || item.appliance === 'refreeze') {
        if (mat === 'Animal Protein' || mat === 'Poultry Product (Eggs)') {
          if (lName.includes('steak') || lName.includes('beef') || lName.includes('chop') || lName.includes('meat')) {
            warning = `Freezing ${item.item} draws out moisture, resulting in a drier and tougher texture when finally cooked.`;
          } else if (lName.includes('poultry') || lName.includes('chicken') || lName.includes('turkey')) {
            warning = `When freezing ${item.item}, ensure it was never left at room temperature to minimize the high risk of salmonella.`;
          } else if (lName.includes('fish') || lName.includes('shrimp') || lName.includes('crab') || lName.includes('salmon')) {
            warning = `Seafood like ${item.item} is highly perishable. Freezing breaks down its delicate cell walls, often resulting in mushy meat.`;
          } else if (lName.includes('egg')) {
            warning = `Freezing ${item.item} intact will cause the shell to crack as the water content inside expands.`;
          } else {
            warning = `Freezing ${item.item} alters its cellular structure, often degrading texture and flavor. [NEEDS REVIEW]`;
          }
        } else if (mat === 'Perishable Dairy / Soy / Protein Product') {
          if (lName.includes('cheese') || lName.includes('cream') || lName.includes('milk') || lName.includes('yogurt') || lName.includes('butter')) {
            warning = `Freezing dairy products like ${item.item} destroys the fat emulsion, resulting in a grainy, separated texture best used only for cooking.`;
          } else {
             warning = `Freezing ${item.item} can cause the proteins and fats to separate. [NEEDS REVIEW]`;
          }
        } else if (mat.includes('Fruit') || mat.includes('Vegetable')) {
          warning = `The high water content in ${item.item} means freezing will rupture plant cell walls, turning it into a mushy puree when thawed.`;
        } else if (mat === 'Soda-Lime Glass' || mat === 'Tempered Borosilicate Glass') {
          warning = `If ${item.item} is filled with liquid and sealed, the expanding ice during freezing will shatter the glass.`;
        } else {
          warning = `Ensure ${item.item} is stored in an airtight, freezer-safe container to prevent severe freezer burn. [NEEDS REVIEW]`;
        }
      } else if (item.appliance === 'dryer') {
         if (mat.includes('Polyester') || mat.includes('Plastic') || mat.includes('Nylon')) {
           if (lName.includes('bra') || lName.includes('swimsuit') || lName.includes('leggings') || lName.includes('elastic')) {
             warning = `The high heat of the dryer will melt and permanently ruin the elasticity and spandex fibers in ${item.item}.`;
           } else {
             warning = `High heat can cause the synthetic fibers in ${item.item} to melt, shrink, or become permanently misshapen.`;
           }
         } else if (mat.includes('Wool') || mat.includes('Silk')) {
           warning = `The tumbling action and heat of the dryer will cause natural fibers like ${item.item} to severely shrink or felt.`;
         } else if (mat.includes('Footwear') || lName.includes('shoe') || lName.includes('boot')) {
           warning = `The heat of the dryer will warp the materials and melt the adhesives holding ${item.item} together, ruining the soles.`;
         } else {
           warning = `Always check the care label on ${item.item} before putting it in the dryer. [NEEDS REVIEW]`;
         }
      } else if (item.appliance === 'oven') {
        if (mat.includes('Plastic') || mat.includes('Polystyrene') || mat.includes('Silicone') || lName.includes('tupperware')) {
          if (mat.includes('Silicone') && !lName.includes('plastic')) {
             warning = `While food-grade silicone is usually oven-safe, check the maximum temperature rating for ${item.item} to prevent melting.`;
          } else {
             warning = `Never use ${item.item} in the oven. It will melt completely, release toxic fumes, and ruin both your food and the oven.`;
          }
        } else if (mat.includes('Paper') || mat.includes('Wood') || mat.includes('Cardboard')) {
          if (lName.includes('wax paper')) {
            warning = `Never use ${item.item} in the oven. The wax will melt and smoke, and the paper will quickly ignite, causing an oven fire.`;
          } else {
            warning = `Never use ${item.item} in the oven. It is highly combustible and will easily catch fire at baking temperatures.`;
          }
        } else if (mat.includes('Glass')) {
          warning = `Ensure ${item.item} is tempered oven-safe glass. Avoid sudden temperature changes to prevent thermal shock shattering.`;
        } else {
          warning = `Always follow manufacturer temperature limits specifically for ${item.item} to ensure it doesn't warp or melt. [NEEDS REVIEW]`;
        }
      } else if (item.appliance === 'airfryer') {
        if (mat.includes('Paper') || mat.includes('Cardboard')) {
          warning = `Never put unweighted ${item.item} in an air fryer. The high-speed fan will blow it into the heating element, immediately starting a fire.`;
        } else if (mat.includes('Plastic') || mat.includes('Polystyrene')) {
          warning = `${item.item} will instantly melt in the intense, concentrated heat of an air fryer, emitting toxic fumes.`;
        } else if (mat.includes('Glass')) {
          warning = `Ensure ${item.item} is oven-safe tempered glass, as the rapid heating in an air fryer can cause non-tempered glass to shatter.`;
        } else {
          warning = `Ensure ${item.item} is rated for high-heat convection baking and is small enough not to block airflow. [NEEDS REVIEW]`;
        }
      } else if (item.appliance === 'refrigerator') {
         if (mat.includes('Fruit') || mat.includes('Vegetable')) {
           if (lName.includes('tomato') || lName.includes('banana') || lName.includes('avocado')) {
             warning = `Refrigerating ${item.item} halts the ripening process and breaks down cell walls, leading to a mealy texture and lost flavor.`;
           } else if (lName.includes('onion') || lName.includes('garlic')) {
             warning = `The humidity in the refrigerator causes ${item.item} to quickly turn mushy and moldy. Store in a cool, dry pantry instead.`;
           } else {
             warning = `Refrigerating ${item.item} can alter its texture and flavor profile. [NEEDS REVIEW]`;
           }
         } else if (lName.includes('bread') || lName.includes('coffee') || lName.includes('honey')) {
           if (lName.includes('bread')) warning = `Refrigerating ${item.item} dramatically accelerates starch crystallization, making it go stale much faster.`;
           else if (lName.includes('honey')) warning = `Refrigerating ${item.item} causes the sugars to crystallize and solidify, making it difficult to use.`;
           else if (lName.includes('coffee')) warning = `Refrigerating ${item.item} introduces moisture from condensation, which ruins the flavor and causes clumping.`;
         } else if (mat.includes('Dairy') || mat.includes('Protein')) {
            warning = `Always ensure ${item.item} is tightly sealed to prevent it from absorbing strong odors from other foods in the refrigerator.`;
         } else {
           warning = `Refrigerating ${item.item} may not be necessary and could affect its quality. [NEEDS REVIEW]`;
         }
      } else {
        warning = `Always follow manufacturer instructions specifically for ${item.item} to ensure safety and longevity. [NEEDS REVIEW]`;
      }
      
      item.specific_warning = warning;
    }
  }
}

// Consistency Pass: check if any items have the EXACT same warning but DIFFERENT materials
const templateToItems = new Map();
for (const item of items) {
  if (item.specific_warning) {
    // Replace the item name with a placeholder to get the template
    const template = item.specific_warning.replace(new RegExp(item.item, 'g'), '[ITEM]');
    if (!templateToItems.has(template)) {
      templateToItems.set(template, []);
    }
    templateToItems.get(template).push(item);
  }
}

const correctedExamples = [];

for (const [template, itemsWithWarning] of templateToItems.entries()) {
  if (itemsWithWarning.length > 1) {
    const materials = new Set(itemsWithWarning.map(i => i.material));
    if (materials.size > 1 && !template.includes('[NEEDS REVIEW]')) {
      for (const item of itemsWithWarning) {
        if (!item.specific_warning.includes('[NEEDS REVIEW]')) {
          item.specific_warning += ' [NEEDS REVIEW]';
          correctedCount++;
          if (correctedExamples.length < 3) {
            correctedExamples.push({
              item: item.item,
              material: item.material,
              warning: item.specific_warning
            });
          }
        }
      }
    }
  }
}

fs.writeFileSync(itemsPath, JSON.stringify(items, null, 2));
console.log('Restructured items.json with V2 heuristics. Corrected groups during self-consistency pass:', correctedCount);
console.log('Examples of corrected items:');
console.log(JSON.stringify(correctedExamples, null, 2));
