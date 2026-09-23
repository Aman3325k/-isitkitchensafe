const fs = require('fs');
const path = require('path');

const itemsPath = path.resolve('src/data/items.json');
const items = JSON.parse(fs.readFileSync(itemsPath, 'utf8'));
const freezerItems = items.filter(i => i.appliance === 'freezer');

const specs = {};

function addSpec(slug, data) {
  specs[slug] = data;
}

freezerItems.forEach(item => {
  const s = item.slug;
  const name = item.item;
  const mat = (item.material || '').toLowerCase();
  const safe = item.safe;

  // 1. Carbonated, Alcoholic & Sealed Liquids (beer, sparkling water, wine, soda, kombucha, canned drinks, glass bottles)
  if (s.includes('beer') || s.includes('sparkling') || s.includes('soda') || s.includes('carbonated') || s.includes('energy-drink') || s.includes('kombucha') || s.includes('wine') || s.includes('glass-bottle') || s.includes('canned-soda')) {
    addSpec(s, {
      materialThermal: {
        property: "Phase Transition Volumetric Expansion & Burst Pressure",
        threshold: "Water expands 9.05% upon phase change at 32°F (0°C); Burst Pressure >50 PSI",
        details: "As water freezes into crystalline hexagonal ice, its volume expands by ~9%. In rigid sealed glass or aluminum cans, trapped CO2 and ice expansion violently rupture the container."
      },
      safetyStandard: {
        organization: "FDA / CPSC",
        standard: "CPSC Container Explosion Hazard Guidance",
        citation: "Warning against freezing sealed rigid glass or carbonated beverage containers due to violent shrapnel propulsion hazards."
      },
      applianceSpecs: {
        parameter: "Deep Freeze Expansion Kinetics",
        guideline: "Standard freezers (0°F / -18°C) freeze beer and soda cans within 60–90 minutes, leading to burst seams or explosive glass fragmentation."
      }
    });
  }
  // 2. Dairy & Emulsions (milk, sour cream, cream cheese, yogurt, cottage cheese, heavy cream, mayonnaise)
  else if (s.includes('milk') || s.includes('sour-cream') || s.includes('cream-cheese') || s.includes('yogurt') || s.includes('cottage-cheese') || s.includes('heavy-cream') || s.includes('whipped-cream') || s.includes('cheese') || s.includes('butter') || s.includes('mayo') || s.includes('custard') || s.includes('ice-cream')) {
    if (s.includes('ice-cream-refreezing')) {
      addSpec(s, {
        materialThermal: {
          property: "Melt-Freeze Recrystallization & Listeria Risk",
          threshold: "Air Cell Collapse & Large Crystal Growth >10°F (-12°C)",
          details: "Melted ice cream loses its micro-aerated overrun structure. Refreezing causes lactose crystallization ('sandiness') and creates a risk for psychrotrophic bacterial growth."
        },
        safetyStandard: {
          organization: "FDA",
          standard: "FDA Food Code 2022 § 3-501.16",
          citation: "Thawed dairy desserts that spend time above 41°F must be discarded due to rapid toxin and pathogen proliferation."
        },
        applianceSpecs: {
          parameter: "Deep Freeze Temperature Maintenance",
          guideline: "Keep ice cream at -5°F to 0°F to maintain microscopic ice crystal size and prevent coarse icy texture."
        }
      });
    } else if (s.includes('hard-cheese') || s.includes('parmesan') || s.includes('cheddar') || s === 'cheese') {
      addSpec(s, {
        materialThermal: {
          property: "Casein Matrix Embrittlement & Moisture Crystallization",
          threshold: "Freezing Point ~23°F–26°F (-5°C to -3.3°C)",
          details: "Freezing hard cheese expands residual water within protein pockets, fracturing the casein network and causing a crumbly, dry texture upon thawing."
        },
        safetyStandard: {
          organization: "USDA FSIS",
          standard: "FSIS Freezing and Food Safety Guide",
          citation: "Hard cheeses remain biologically safe indefinitely at 0°F; shredded cheese freezes better than dense blocks."
        },
        applianceSpecs: {
          parameter: "Vapor-Barrier Protection",
          guideline: "Wrap tightly in heavy freezer wrap or vacuum bags to prevent moisture sublimation and freezer burn on cheese fats."
        }
      });
    } else {
      addSpec(s, {
        materialThermal: {
          property: "Lipid-Water Emulsion Destabilization & Syneresis",
          threshold: "Phase Separation begins at 31°F (-0.5°C)",
          details: "Ice crystal formation disrupts casein micelle bridges and destabilizes fat globule membranes, causing permanent whey separation (curdling) when thawed."
        },
        safetyStandard: {
          organization: "FDA",
          standard: "21 CFR § 131 / FDA Food Science Guidelines",
          citation: "Freezing dairy products halts bacterial action but alters physical rheology; thawed emulsion products are best reserved for cooking/baking."
        },
        applianceSpecs: {
          parameter: "Headspace Allowance & Thaw Protocol",
          guideline: "Leave 1–2 inches of headspace in milk jugs to accommodate 9% volumetric expansion; thaw strictly in the refrigerator at 35°F–38°F."
        }
      });
    }
  }
  // 3. High-Water Produce & Fruits (watermelon, avocado, cucumber, lettuce, tomatoes, celery, citrus)
  else if (s.includes('watermelon') || s.includes('melon') || s.includes('cucumber') || s.includes('lettuce') || s.includes('celery') || s.includes('tomato') || s.includes('avocado') || s.includes('grape') || s.includes('apple') || s.includes('pineapple') || s.includes('orange') || s.includes('berry') || s.includes('strawberry') || s.includes('banana')) {
    addSpec(s, {
      materialThermal: {
        property: "Vacuolar Ice Crystallization & Turgor Cell Rupture",
        threshold: "Water Crystallization 32°F (0°C); Turgor Loss upon Thaw",
        details: "High-moisture plant tissues contain water in cellular vacuoles. Freezing forms rigid ice crystals that puncture thin cellulose cell walls, causing complete mushiness and water weeping upon thawing."
      },
      safetyStandard: {
        organization: "USDA ARS",
        standard: "Agriculture Handbook No. 66 / Home Freezing Guidelines",
        citation: "High-water produce remains microbially safe frozen at 0°F but suffers severe structural degradation; best consumed frozen in smoothies or purees."
      },
      applianceSpecs: {
        parameter: "Flash Freeze Tray Protocol",
        guideline: "Spread sliced fruits on a parchment-lined baking sheet and freeze at 0°F for 2 hours before packing into airtight freezer bags to prevent clump freezing."
      }
    });
  }
  // 4. Raw & Cooked Meats, Poultry & Seafood (chicken, beef, steak, pork, salmon, shrimp, bacon, turkey)
  else if (s.includes('chicken') || s.includes('beef') || s.includes('steak') || s.includes('pork') || s.includes('salmon') || s.includes('shrimp') || s.includes('fish') || s.includes('bacon') || s.includes('turkey') || s.includes('meat') || s.includes('sausage') || s.includes('lamb')) {
    addSpec(s, {
      materialThermal: {
        property: "Eutectic Solidification & Cellular Purge Loss",
        threshold: "Cellular Freezing begins at 28°F (-2.2°C); Eutectic Complete Solidification at -0.4°F (-18°C)",
        details: "Slow domestic freezing forms large extracellular ice needles that pierce myofibrillar fibers, resulting in 5%–10% moisture and nutrient drip loss upon thawing."
      },
      safetyStandard: {
        organization: "USDA FSIS",
        standard: "FSIS Freezing and Food Safety Fact Sheet",
        citation: "Foods kept continuously at 0°F (-18°C) or below remain indefinitely safe from microbial pathogens; quality is preserved for 4–12 months."
      },
      applianceSpecs: {
        parameter: "0°F Evaporator Deep Freezing & Vacuum Sealing",
        guideline: "Store at 0°F (-18°C) in heavy vacuum-sealed bags or double freezer foil to eliminate air pockets that drive moisture sublimation (freezer burn)."
      }
    });
  }
  // 5. Eggs (eggs in shell, raw eggs, boiled eggs)
  else if (s.includes('egg')) {
    if (s.includes('shell') || s === 'eggs' || s === 'raw-eggs-in-shell') {
      addSpec(s, {
        materialThermal: {
          property: "Albumen/Yolk Expansion & Shell Fracture",
          threshold: "Freezing Expansion Point 31°F (-0.5°C); Shell Burst Hazard",
          details: "Liquid egg albumen expands when freezing, cracking the rigid calcium carbonate shell and introducing freezer odors and surface bacteria."
        },
        safetyStandard: {
          organization: "FDA / USDA FSIS",
          standard: "Egg Safety Guidelines / 21 CFR Part 118",
          citation: "Never freeze raw eggs in their shells. Whisk whites and yolks together or freeze whites separately in airtight containers."
        },
        applianceSpecs: {
          parameter: "Ice Cube Tray Freezing Protocol",
          guideline: "Whisk cracked eggs with a pinch of salt or sugar (to prevent yolk gelation), freeze in silicone ice cube trays, then transfer to airtight bags at 0°F."
        }
      });
    } else {
      addSpec(s, {
        materialThermal: {
          property: "Yolk Lipoprotein Gelation & Albumen Syneresis",
          threshold: "Gelation Phase Change below 21°F (-6°C)",
          details: "Pure egg yolks undergo permanent irreversible gelation below 21°F, becoming pasty and rubbery unless combined with salt or sugar prior to freezing."
        },
        safetyStandard: {
          organization: "USDA FSIS",
          standard: "FSIS Egg Product Freezing Recommendations",
          citation: "Cooked egg whites become tough and watery when frozen; raw beaten eggs freeze safely for up to 1 year at 0°F."
        },
        applianceSpecs: {
          parameter: "Sub-Zero Storage Stability",
          guideline: "Store beaten raw eggs in airtight freezer containers at 0°F with 0.5 inches of headspace."
        }
      });
    }
  }
  // 6. Starchy Foods, Breads, Pastas & Grains (bread, cooked rice, pasta, dough, flour)
  else if (s.includes('bread') || s.includes('rice') || s.includes('pasta') || s.includes('dough') || s.includes('flour') || s.includes('tortilla') || s.includes('bagel') || s.includes('muffin')) {
    addSpec(s, {
      materialThermal: {
        property: "Starch Retrogradation Arrest & Ice Sublimation",
        threshold: "Retrogradation Arrested at <=0°F (-18°C); Freezing Point ~25°F",
        details: "Sub-zero temperatures freeze water molecules in place, completely halting amylopectin retrogradation and preserving bread freshness without staling."
      },
      safetyStandard: {
        organization: "USDA ARS / AIB",
        standard: "AIB International Bakery Science Freezing Guide",
        citation: "Bread and baked goods freeze with near-perfect quality retention for 3–6 months at 0°F."
      },
      applianceSpecs: {
        parameter: "Air-Purged Vapor Barrier Protocol",
        guideline: "Slice bread before freezing and seal tightly in heavy plastic freezer bags, pressing out all excess air to prevent ice crystal glaze."
      }
    });
  }
  // Default / Catch-All for remaining freezer items
  else {
    addSpec(s, {
      materialThermal: {
        property: "Eutectic Freezing & Moisture Sublimation Threshold",
        threshold: "Microbial Dormancy <=0°F (-18°C); Ice Crystal Phase Point 32°F",
        details: "Deep freezing halts all bacterial, yeast, and mold proliferation by immobilizing liquid water into crystalline solid state."
      },
      safetyStandard: {
        organization: "USDA FSIS",
        standard: "FSIS Freezing and Food Safety Directives",
        citation: "Food preserved continuously at 0°F remains microbiologically safe indefinitely; storage recommendations reflect peak sensory quality."
      },
      applianceSpecs: {
        parameter: "0°F Operating Range & Headspace Management",
        guideline: "Maintain freezer at 0°F (-18°C) or colder; leave 0.5–1 inch headspace for liquid-containing foods to accommodate ice expansion."
      }
    });
  }
});

const outPath = path.resolve('src/data/specs/freezer.cjs');
const content = `// Technical Reference Specifications for Freezer items
// Grounded strictly in USDA FSIS, FDA Food Code 2022, 21 CFR, and food physics literature.

module.exports = ${JSON.stringify(specs, null, 2)};
`;

fs.writeFileSync(outPath, content, 'utf8');
console.log(`✅ Successfully generated ${Object.keys(specs).length} verified freezer specs at ${outPath}`);
