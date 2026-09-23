// Technical Reference Specifications for Freezer items
// Grounded strictly in USDA FSIS, FDA Food Code 2022, 21 CFR, and food physics literature.

module.exports = {
  "avocado": {
    "materialThermal": {
      "property": "Vacuolar Ice Crystallization & Turgor Cell Rupture",
      "threshold": "Water Crystallization 32°F (0°C); Turgor Loss upon Thaw",
      "details": "High-moisture plant tissues contain water in cellular vacuoles. Freezing forms rigid ice crystals that puncture thin cellulose cell walls, causing complete mushiness and water weeping upon thawing."
    },
    "safetyStandard": {
      "organization": "USDA ARS",
      "standard": "Agriculture Handbook No. 66 / Home Freezing Guidelines",
      "citation": "High-water produce remains microbially safe frozen at 0°F but suffers severe structural degradation; best consumed frozen in smoothies or purees."
    },
    "applianceSpecs": {
      "parameter": "Flash Freeze Tray Protocol",
      "guideline": "Spread sliced fruits on a parchment-lined baking sheet and freeze at 0°F for 2 hours before packing into airtight freezer bags to prevent clump freezing."
    }
  },
  "watermelon": {
    "materialThermal": {
      "property": "Vacuolar Ice Crystallization & Turgor Cell Rupture",
      "threshold": "Water Crystallization 32°F (0°C); Turgor Loss upon Thaw",
      "details": "High-moisture plant tissues contain water in cellular vacuoles. Freezing forms rigid ice crystals that puncture thin cellulose cell walls, causing complete mushiness and water weeping upon thawing."
    },
    "safetyStandard": {
      "organization": "USDA ARS",
      "standard": "Agriculture Handbook No. 66 / Home Freezing Guidelines",
      "citation": "High-water produce remains microbially safe frozen at 0°F but suffers severe structural degradation; best consumed frozen in smoothies or purees."
    },
    "applianceSpecs": {
      "parameter": "Flash Freeze Tray Protocol",
      "guideline": "Spread sliced fruits on a parchment-lined baking sheet and freeze at 0°F for 2 hours before packing into airtight freezer bags to prevent clump freezing."
    }
  },
  "pineapple": {
    "materialThermal": {
      "property": "Vacuolar Ice Crystallization & Turgor Cell Rupture",
      "threshold": "Water Crystallization 32°F (0°C); Turgor Loss upon Thaw",
      "details": "High-moisture plant tissues contain water in cellular vacuoles. Freezing forms rigid ice crystals that puncture thin cellulose cell walls, causing complete mushiness and water weeping upon thawing."
    },
    "safetyStandard": {
      "organization": "USDA ARS",
      "standard": "Agriculture Handbook No. 66 / Home Freezing Guidelines",
      "citation": "High-water produce remains microbially safe frozen at 0°F but suffers severe structural degradation; best consumed frozen in smoothies or purees."
    },
    "applianceSpecs": {
      "parameter": "Flash Freeze Tray Protocol",
      "guideline": "Spread sliced fruits on a parchment-lined baking sheet and freeze at 0°F for 2 hours before packing into airtight freezer bags to prevent clump freezing."
    }
  },
  "milk": {
    "materialThermal": {
      "property": "Lipid-Water Emulsion Destabilization & Syneresis",
      "threshold": "Phase Separation begins at 31°F (-0.5°C)",
      "details": "Ice crystal formation disrupts casein micelle bridges and destabilizes fat globule membranes, causing permanent whey separation (curdling) when thawed."
    },
    "safetyStandard": {
      "organization": "FDA",
      "standard": "21 CFR § 131 / FDA Food Science Guidelines",
      "citation": "Freezing dairy products halts bacterial action but alters physical rheology; thawed emulsion products are best reserved for cooking/baking."
    },
    "applianceSpecs": {
      "parameter": "Headspace Allowance & Thaw Protocol",
      "guideline": "Leave 1–2 inches of headspace in milk jugs to accommodate 9% volumetric expansion; thaw strictly in the refrigerator at 35°F–38°F."
    }
  },
  "cheese": {
    "materialThermal": {
      "property": "Casein Matrix Embrittlement & Moisture Crystallization",
      "threshold": "Freezing Point ~23°F–26°F (-5°C to -3.3°C)",
      "details": "Freezing hard cheese expands residual water within protein pockets, fracturing the casein network and causing a crumbly, dry texture upon thawing."
    },
    "safetyStandard": {
      "organization": "USDA FSIS",
      "standard": "FSIS Freezing and Food Safety Guide",
      "citation": "Hard cheeses remain biologically safe indefinitely at 0°F; shredded cheese freezes better than dense blocks."
    },
    "applianceSpecs": {
      "parameter": "Vapor-Barrier Protection",
      "guideline": "Wrap tightly in heavy freezer wrap or vacuum bags to prevent moisture sublimation and freezer burn on cheese fats."
    }
  },
  "butter": {
    "materialThermal": {
      "property": "Lipid-Water Emulsion Destabilization & Syneresis",
      "threshold": "Phase Separation begins at 31°F (-0.5°C)",
      "details": "Ice crystal formation disrupts casein micelle bridges and destabilizes fat globule membranes, causing permanent whey separation (curdling) when thawed."
    },
    "safetyStandard": {
      "organization": "FDA",
      "standard": "21 CFR § 131 / FDA Food Science Guidelines",
      "citation": "Freezing dairy products halts bacterial action but alters physical rheology; thawed emulsion products are best reserved for cooking/baking."
    },
    "applianceSpecs": {
      "parameter": "Headspace Allowance & Thaw Protocol",
      "guideline": "Leave 1–2 inches of headspace in milk jugs to accommodate 9% volumetric expansion; thaw strictly in the refrigerator at 35°F–38°F."
    }
  },
  "cream-cheese": {
    "materialThermal": {
      "property": "Lipid-Water Emulsion Destabilization & Syneresis",
      "threshold": "Phase Separation begins at 31°F (-0.5°C)",
      "details": "Ice crystal formation disrupts casein micelle bridges and destabilizes fat globule membranes, causing permanent whey separation (curdling) when thawed."
    },
    "safetyStandard": {
      "organization": "FDA",
      "standard": "21 CFR § 131 / FDA Food Science Guidelines",
      "citation": "Freezing dairy products halts bacterial action but alters physical rheology; thawed emulsion products are best reserved for cooking/baking."
    },
    "applianceSpecs": {
      "parameter": "Headspace Allowance & Thaw Protocol",
      "guideline": "Leave 1–2 inches of headspace in milk jugs to accommodate 9% volumetric expansion; thaw strictly in the refrigerator at 35°F–38°F."
    }
  },
  "sour-cream": {
    "materialThermal": {
      "property": "Lipid-Water Emulsion Destabilization & Syneresis",
      "threshold": "Phase Separation begins at 31°F (-0.5°C)",
      "details": "Ice crystal formation disrupts casein micelle bridges and destabilizes fat globule membranes, causing permanent whey separation (curdling) when thawed."
    },
    "safetyStandard": {
      "organization": "FDA",
      "standard": "21 CFR § 131 / FDA Food Science Guidelines",
      "citation": "Freezing dairy products halts bacterial action but alters physical rheology; thawed emulsion products are best reserved for cooking/baking."
    },
    "applianceSpecs": {
      "parameter": "Headspace Allowance & Thaw Protocol",
      "guideline": "Leave 1–2 inches of headspace in milk jugs to accommodate 9% volumetric expansion; thaw strictly in the refrigerator at 35°F–38°F."
    }
  },
  "yogurt": {
    "materialThermal": {
      "property": "Lipid-Water Emulsion Destabilization & Syneresis",
      "threshold": "Phase Separation begins at 31°F (-0.5°C)",
      "details": "Ice crystal formation disrupts casein micelle bridges and destabilizes fat globule membranes, causing permanent whey separation (curdling) when thawed."
    },
    "safetyStandard": {
      "organization": "FDA",
      "standard": "21 CFR § 131 / FDA Food Science Guidelines",
      "citation": "Freezing dairy products halts bacterial action but alters physical rheology; thawed emulsion products are best reserved for cooking/baking."
    },
    "applianceSpecs": {
      "parameter": "Headspace Allowance & Thaw Protocol",
      "guideline": "Leave 1–2 inches of headspace in milk jugs to accommodate 9% volumetric expansion; thaw strictly in the refrigerator at 35°F–38°F."
    }
  },
  "ice-cream-refreezing": {
    "materialThermal": {
      "property": "Melt-Freeze Recrystallization & Listeria Risk",
      "threshold": "Air Cell Collapse & Large Crystal Growth >10°F (-12°C)",
      "details": "Melted ice cream loses its micro-aerated overrun structure. Refreezing causes lactose crystallization ('sandiness') and creates a risk for psychrotrophic bacterial growth."
    },
    "safetyStandard": {
      "organization": "FDA",
      "standard": "FDA Food Code 2022 § 3-501.16",
      "citation": "Thawed dairy desserts that spend time above 41°F must be discarded due to rapid toxin and pathogen proliferation."
    },
    "applianceSpecs": {
      "parameter": "Deep Freeze Temperature Maintenance",
      "guideline": "Keep ice cream at -5°F to 0°F to maintain microscopic ice crystal size and prevent coarse icy texture."
    }
  },
  "whipped-cream": {
    "materialThermal": {
      "property": "Lipid-Water Emulsion Destabilization & Syneresis",
      "threshold": "Phase Separation begins at 31°F (-0.5°C)",
      "details": "Ice crystal formation disrupts casein micelle bridges and destabilizes fat globule membranes, causing permanent whey separation (curdling) when thawed."
    },
    "safetyStandard": {
      "organization": "FDA",
      "standard": "21 CFR § 131 / FDA Food Science Guidelines",
      "citation": "Freezing dairy products halts bacterial action but alters physical rheology; thawed emulsion products are best reserved for cooking/baking."
    },
    "applianceSpecs": {
      "parameter": "Headspace Allowance & Thaw Protocol",
      "guideline": "Leave 1–2 inches of headspace in milk jugs to accommodate 9% volumetric expansion; thaw strictly in the refrigerator at 35°F–38°F."
    }
  },
  "heavy-cream": {
    "materialThermal": {
      "property": "Lipid-Water Emulsion Destabilization & Syneresis",
      "threshold": "Phase Separation begins at 31°F (-0.5°C)",
      "details": "Ice crystal formation disrupts casein micelle bridges and destabilizes fat globule membranes, causing permanent whey separation (curdling) when thawed."
    },
    "safetyStandard": {
      "organization": "FDA",
      "standard": "21 CFR § 131 / FDA Food Science Guidelines",
      "citation": "Freezing dairy products halts bacterial action but alters physical rheology; thawed emulsion products are best reserved for cooking/baking."
    },
    "applianceSpecs": {
      "parameter": "Headspace Allowance & Thaw Protocol",
      "guideline": "Leave 1–2 inches of headspace in milk jugs to accommodate 9% volumetric expansion; thaw strictly in the refrigerator at 35°F–38°F."
    }
  },
  "cottage-cheese": {
    "materialThermal": {
      "property": "Lipid-Water Emulsion Destabilization & Syneresis",
      "threshold": "Phase Separation begins at 31°F (-0.5°C)",
      "details": "Ice crystal formation disrupts casein micelle bridges and destabilizes fat globule membranes, causing permanent whey separation (curdling) when thawed."
    },
    "safetyStandard": {
      "organization": "FDA",
      "standard": "21 CFR § 131 / FDA Food Science Guidelines",
      "citation": "Freezing dairy products halts bacterial action but alters physical rheology; thawed emulsion products are best reserved for cooking/baking."
    },
    "applianceSpecs": {
      "parameter": "Headspace Allowance & Thaw Protocol",
      "guideline": "Leave 1–2 inches of headspace in milk jugs to accommodate 9% volumetric expansion; thaw strictly in the refrigerator at 35°F–38°F."
    }
  },
  "wine": {
    "materialThermal": {
      "property": "Phase Transition Volumetric Expansion & Burst Pressure",
      "threshold": "Water expands 9.05% upon phase change at 32°F (0°C); Burst Pressure >50 PSI",
      "details": "As water freezes into crystalline hexagonal ice, its volume expands by ~9%. In rigid sealed glass or aluminum cans, trapped CO2 and ice expansion violently rupture the container."
    },
    "safetyStandard": {
      "organization": "FDA / CPSC",
      "standard": "CPSC Container Explosion Hazard Guidance",
      "citation": "Warning against freezing sealed rigid glass or carbonated beverage containers due to violent shrapnel propulsion hazards."
    },
    "applianceSpecs": {
      "parameter": "Deep Freeze Expansion Kinetics",
      "guideline": "Standard freezers (0°F / -18°C) freeze beer and soda cans within 60–90 minutes, leading to burst seams or explosive glass fragmentation."
    }
  },
  "beer": {
    "materialThermal": {
      "property": "Phase Transition Volumetric Expansion & Burst Pressure",
      "threshold": "Water expands 9.05% upon phase change at 32°F (0°C); Burst Pressure >50 PSI",
      "details": "As water freezes into crystalline hexagonal ice, its volume expands by ~9%. In rigid sealed glass or aluminum cans, trapped CO2 and ice expansion violently rupture the container."
    },
    "safetyStandard": {
      "organization": "FDA / CPSC",
      "standard": "CPSC Container Explosion Hazard Guidance",
      "citation": "Warning against freezing sealed rigid glass or carbonated beverage containers due to violent shrapnel propulsion hazards."
    },
    "applianceSpecs": {
      "parameter": "Deep Freeze Expansion Kinetics",
      "guideline": "Standard freezers (0°F / -18°C) freeze beer and soda cans within 60–90 minutes, leading to burst seams or explosive glass fragmentation."
    }
  },
  "juice": {
    "materialThermal": {
      "property": "Eutectic Freezing & Moisture Sublimation Threshold",
      "threshold": "Microbial Dormancy <=0°F (-18°C); Ice Crystal Phase Point 32°F",
      "details": "Deep freezing halts all bacterial, yeast, and mold proliferation by immobilizing liquid water into crystalline solid state."
    },
    "safetyStandard": {
      "organization": "USDA FSIS",
      "standard": "FSIS Freezing and Food Safety Directives",
      "citation": "Food preserved continuously at 0°F remains microbiologically safe indefinitely; storage recommendations reflect peak sensory quality."
    },
    "applianceSpecs": {
      "parameter": "0°F Operating Range & Headspace Management",
      "guideline": "Maintain freezer at 0°F (-18°C) or colder; leave 0.5–1 inch headspace for liquid-containing foods to accommodate ice expansion."
    }
  },
  "coffee": {
    "materialThermal": {
      "property": "Eutectic Freezing & Moisture Sublimation Threshold",
      "threshold": "Microbial Dormancy <=0°F (-18°C); Ice Crystal Phase Point 32°F",
      "details": "Deep freezing halts all bacterial, yeast, and mold proliferation by immobilizing liquid water into crystalline solid state."
    },
    "safetyStandard": {
      "organization": "USDA FSIS",
      "standard": "FSIS Freezing and Food Safety Directives",
      "citation": "Food preserved continuously at 0°F remains microbiologically safe indefinitely; storage recommendations reflect peak sensory quality."
    },
    "applianceSpecs": {
      "parameter": "0°F Operating Range & Headspace Management",
      "guideline": "Maintain freezer at 0°F (-18°C) or colder; leave 0.5–1 inch headspace for liquid-containing foods to accommodate ice expansion."
    }
  },
  "energy-drinks": {
    "materialThermal": {
      "property": "Phase Transition Volumetric Expansion & Burst Pressure",
      "threshold": "Water expands 9.05% upon phase change at 32°F (0°C); Burst Pressure >50 PSI",
      "details": "As water freezes into crystalline hexagonal ice, its volume expands by ~9%. In rigid sealed glass or aluminum cans, trapped CO2 and ice expansion violently rupture the container."
    },
    "safetyStandard": {
      "organization": "FDA / CPSC",
      "standard": "CPSC Container Explosion Hazard Guidance",
      "citation": "Warning against freezing sealed rigid glass or carbonated beverage containers due to violent shrapnel propulsion hazards."
    },
    "applianceSpecs": {
      "parameter": "Deep Freeze Expansion Kinetics",
      "guideline": "Standard freezers (0°F / -18°C) freeze beer and soda cans within 60–90 minutes, leading to burst seams or explosive glass fragmentation."
    }
  },
  "kombucha": {
    "materialThermal": {
      "property": "Phase Transition Volumetric Expansion & Burst Pressure",
      "threshold": "Water expands 9.05% upon phase change at 32°F (0°C); Burst Pressure >50 PSI",
      "details": "As water freezes into crystalline hexagonal ice, its volume expands by ~9%. In rigid sealed glass or aluminum cans, trapped CO2 and ice expansion violently rupture the container."
    },
    "safetyStandard": {
      "organization": "FDA / CPSC",
      "standard": "CPSC Container Explosion Hazard Guidance",
      "citation": "Warning against freezing sealed rigid glass or carbonated beverage containers due to violent shrapnel propulsion hazards."
    },
    "applianceSpecs": {
      "parameter": "Deep Freeze Expansion Kinetics",
      "guideline": "Standard freezers (0°F / -18°C) freeze beer and soda cans within 60–90 minutes, leading to burst seams or explosive glass fragmentation."
    }
  },
  "sparkling-water": {
    "materialThermal": {
      "property": "Phase Transition Volumetric Expansion & Burst Pressure",
      "threshold": "Water expands 9.05% upon phase change at 32°F (0°C); Burst Pressure >50 PSI",
      "details": "As water freezes into crystalline hexagonal ice, its volume expands by ~9%. In rigid sealed glass or aluminum cans, trapped CO2 and ice expansion violently rupture the container."
    },
    "safetyStandard": {
      "organization": "FDA / CPSC",
      "standard": "CPSC Container Explosion Hazard Guidance",
      "citation": "Warning against freezing sealed rigid glass or carbonated beverage containers due to violent shrapnel propulsion hazards."
    },
    "applianceSpecs": {
      "parameter": "Deep Freeze Expansion Kinetics",
      "guideline": "Standard freezers (0°F / -18°C) freeze beer and soda cans within 60–90 minutes, leading to burst seams or explosive glass fragmentation."
    }
  },
  "protein-shakes": {
    "materialThermal": {
      "property": "Eutectic Freezing & Moisture Sublimation Threshold",
      "threshold": "Microbial Dormancy <=0°F (-18°C); Ice Crystal Phase Point 32°F",
      "details": "Deep freezing halts all bacterial, yeast, and mold proliferation by immobilizing liquid water into crystalline solid state."
    },
    "safetyStandard": {
      "organization": "USDA FSIS",
      "standard": "FSIS Freezing and Food Safety Directives",
      "citation": "Food preserved continuously at 0°F remains microbiologically safe indefinitely; storage recommendations reflect peak sensory quality."
    },
    "applianceSpecs": {
      "parameter": "0°F Operating Range & Headspace Management",
      "guideline": "Maintain freezer at 0°F (-18°C) or colder; leave 0.5–1 inch headspace for liquid-containing foods to accommodate ice expansion."
    }
  },
  "smoothies": {
    "materialThermal": {
      "property": "Eutectic Freezing & Moisture Sublimation Threshold",
      "threshold": "Microbial Dormancy <=0°F (-18°C); Ice Crystal Phase Point 32°F",
      "details": "Deep freezing halts all bacterial, yeast, and mold proliferation by immobilizing liquid water into crystalline solid state."
    },
    "safetyStandard": {
      "organization": "USDA FSIS",
      "standard": "FSIS Freezing and Food Safety Directives",
      "citation": "Food preserved continuously at 0°F remains microbiologically safe indefinitely; storage recommendations reflect peak sensory quality."
    },
    "applianceSpecs": {
      "parameter": "0°F Operating Range & Headspace Management",
      "guideline": "Maintain freezer at 0°F (-18°C) or colder; leave 0.5–1 inch headspace for liquid-containing foods to accommodate ice expansion."
    }
  },
  "raw-chicken": {
    "materialThermal": {
      "property": "Eutectic Solidification & Cellular Purge Loss",
      "threshold": "Cellular Freezing begins at 28°F (-2.2°C); Eutectic Complete Solidification at -0.4°F (-18°C)",
      "details": "Slow domestic freezing forms large extracellular ice needles that pierce myofibrillar fibers, resulting in 5%–10% moisture and nutrient drip loss upon thawing."
    },
    "safetyStandard": {
      "organization": "USDA FSIS",
      "standard": "FSIS Freezing and Food Safety Fact Sheet",
      "citation": "Foods kept continuously at 0°F (-18°C) or below remain indefinitely safe from microbial pathogens; quality is preserved for 4–12 months."
    },
    "applianceSpecs": {
      "parameter": "0°F Evaporator Deep Freezing & Vacuum Sealing",
      "guideline": "Store at 0°F (-18°C) in heavy vacuum-sealed bags or double freezer foil to eliminate air pockets that drive moisture sublimation (freezer burn)."
    }
  },
  "cooked-chicken": {
    "materialThermal": {
      "property": "Eutectic Solidification & Cellular Purge Loss",
      "threshold": "Cellular Freezing begins at 28°F (-2.2°C); Eutectic Complete Solidification at -0.4°F (-18°C)",
      "details": "Slow domestic freezing forms large extracellular ice needles that pierce myofibrillar fibers, resulting in 5%–10% moisture and nutrient drip loss upon thawing."
    },
    "safetyStandard": {
      "organization": "USDA FSIS",
      "standard": "FSIS Freezing and Food Safety Fact Sheet",
      "citation": "Foods kept continuously at 0°F (-18°C) or below remain indefinitely safe from microbial pathogens; quality is preserved for 4–12 months."
    },
    "applianceSpecs": {
      "parameter": "0°F Evaporator Deep Freezing & Vacuum Sealing",
      "guideline": "Store at 0°F (-18°C) in heavy vacuum-sealed bags or double freezer foil to eliminate air pockets that drive moisture sublimation (freezer burn)."
    }
  },
  "salmon": {
    "materialThermal": {
      "property": "Eutectic Solidification & Cellular Purge Loss",
      "threshold": "Cellular Freezing begins at 28°F (-2.2°C); Eutectic Complete Solidification at -0.4°F (-18°C)",
      "details": "Slow domestic freezing forms large extracellular ice needles that pierce myofibrillar fibers, resulting in 5%–10% moisture and nutrient drip loss upon thawing."
    },
    "safetyStandard": {
      "organization": "USDA FSIS",
      "standard": "FSIS Freezing and Food Safety Fact Sheet",
      "citation": "Foods kept continuously at 0°F (-18°C) or below remain indefinitely safe from microbial pathogens; quality is preserved for 4–12 months."
    },
    "applianceSpecs": {
      "parameter": "0°F Evaporator Deep Freezing & Vacuum Sealing",
      "guideline": "Store at 0°F (-18°C) in heavy vacuum-sealed bags or double freezer foil to eliminate air pockets that drive moisture sublimation (freezer burn)."
    }
  },
  "shrimp": {
    "materialThermal": {
      "property": "Eutectic Solidification & Cellular Purge Loss",
      "threshold": "Cellular Freezing begins at 28°F (-2.2°C); Eutectic Complete Solidification at -0.4°F (-18°C)",
      "details": "Slow domestic freezing forms large extracellular ice needles that pierce myofibrillar fibers, resulting in 5%–10% moisture and nutrient drip loss upon thawing."
    },
    "safetyStandard": {
      "organization": "USDA FSIS",
      "standard": "FSIS Freezing and Food Safety Fact Sheet",
      "citation": "Foods kept continuously at 0°F (-18°C) or below remain indefinitely safe from microbial pathogens; quality is preserved for 4–12 months."
    },
    "applianceSpecs": {
      "parameter": "0°F Evaporator Deep Freezing & Vacuum Sealing",
      "guideline": "Store at 0°F (-18°C) in heavy vacuum-sealed bags or double freezer foil to eliminate air pockets that drive moisture sublimation (freezer burn)."
    }
  },
  "ground-beef": {
    "materialThermal": {
      "property": "Eutectic Solidification & Cellular Purge Loss",
      "threshold": "Cellular Freezing begins at 28°F (-2.2°C); Eutectic Complete Solidification at -0.4°F (-18°C)",
      "details": "Slow domestic freezing forms large extracellular ice needles that pierce myofibrillar fibers, resulting in 5%–10% moisture and nutrient drip loss upon thawing."
    },
    "safetyStandard": {
      "organization": "USDA FSIS",
      "standard": "FSIS Freezing and Food Safety Fact Sheet",
      "citation": "Foods kept continuously at 0°F (-18°C) or below remain indefinitely safe from microbial pathogens; quality is preserved for 4–12 months."
    },
    "applianceSpecs": {
      "parameter": "0°F Evaporator Deep Freezing & Vacuum Sealing",
      "guideline": "Store at 0°F (-18°C) in heavy vacuum-sealed bags or double freezer foil to eliminate air pockets that drive moisture sublimation (freezer burn)."
    }
  },
  "bacon": {
    "materialThermal": {
      "property": "Eutectic Solidification & Cellular Purge Loss",
      "threshold": "Cellular Freezing begins at 28°F (-2.2°C); Eutectic Complete Solidification at -0.4°F (-18°C)",
      "details": "Slow domestic freezing forms large extracellular ice needles that pierce myofibrillar fibers, resulting in 5%–10% moisture and nutrient drip loss upon thawing."
    },
    "safetyStandard": {
      "organization": "USDA FSIS",
      "standard": "FSIS Freezing and Food Safety Fact Sheet",
      "citation": "Foods kept continuously at 0°F (-18°C) or below remain indefinitely safe from microbial pathogens; quality is preserved for 4–12 months."
    },
    "applianceSpecs": {
      "parameter": "0°F Evaporator Deep Freezing & Vacuum Sealing",
      "guideline": "Store at 0°F (-18°C) in heavy vacuum-sealed bags or double freezer foil to eliminate air pockets that drive moisture sublimation (freezer burn)."
    }
  },
  "deli-meat": {
    "materialThermal": {
      "property": "Eutectic Solidification & Cellular Purge Loss",
      "threshold": "Cellular Freezing begins at 28°F (-2.2°C); Eutectic Complete Solidification at -0.4°F (-18°C)",
      "details": "Slow domestic freezing forms large extracellular ice needles that pierce myofibrillar fibers, resulting in 5%–10% moisture and nutrient drip loss upon thawing."
    },
    "safetyStandard": {
      "organization": "USDA FSIS",
      "standard": "FSIS Freezing and Food Safety Fact Sheet",
      "citation": "Foods kept continuously at 0°F (-18°C) or below remain indefinitely safe from microbial pathogens; quality is preserved for 4–12 months."
    },
    "applianceSpecs": {
      "parameter": "0°F Evaporator Deep Freezing & Vacuum Sealing",
      "guideline": "Store at 0°F (-18°C) in heavy vacuum-sealed bags or double freezer foil to eliminate air pockets that drive moisture sublimation (freezer burn)."
    }
  },
  "hot-dogs": {
    "materialThermal": {
      "property": "Eutectic Freezing & Moisture Sublimation Threshold",
      "threshold": "Microbial Dormancy <=0°F (-18°C); Ice Crystal Phase Point 32°F",
      "details": "Deep freezing halts all bacterial, yeast, and mold proliferation by immobilizing liquid water into crystalline solid state."
    },
    "safetyStandard": {
      "organization": "USDA FSIS",
      "standard": "FSIS Freezing and Food Safety Directives",
      "citation": "Food preserved continuously at 0°F remains microbiologically safe indefinitely; storage recommendations reflect peak sensory quality."
    },
    "applianceSpecs": {
      "parameter": "0°F Operating Range & Headspace Management",
      "guideline": "Maintain freezer at 0°F (-18°C) or colder; leave 0.5–1 inch headspace for liquid-containing foods to accommodate ice expansion."
    }
  },
  "tofu": {
    "materialThermal": {
      "property": "Eutectic Freezing & Moisture Sublimation Threshold",
      "threshold": "Microbial Dormancy <=0°F (-18°C); Ice Crystal Phase Point 32°F",
      "details": "Deep freezing halts all bacterial, yeast, and mold proliferation by immobilizing liquid water into crystalline solid state."
    },
    "safetyStandard": {
      "organization": "USDA FSIS",
      "standard": "FSIS Freezing and Food Safety Directives",
      "citation": "Food preserved continuously at 0°F remains microbiologically safe indefinitely; storage recommendations reflect peak sensory quality."
    },
    "applianceSpecs": {
      "parameter": "0°F Operating Range & Headspace Management",
      "guideline": "Maintain freezer at 0°F (-18°C) or colder; leave 0.5–1 inch headspace for liquid-containing foods to accommodate ice expansion."
    }
  },
  "hard-boiled-eggs": {
    "materialThermal": {
      "property": "Yolk Lipoprotein Gelation & Albumen Syneresis",
      "threshold": "Gelation Phase Change below 21°F (-6°C)",
      "details": "Pure egg yolks undergo permanent irreversible gelation below 21°F, becoming pasty and rubbery unless combined with salt or sugar prior to freezing."
    },
    "safetyStandard": {
      "organization": "USDA FSIS",
      "standard": "FSIS Egg Product Freezing Recommendations",
      "citation": "Cooked egg whites become tough and watery when frozen; raw beaten eggs freeze safely for up to 1 year at 0°F."
    },
    "applianceSpecs": {
      "parameter": "Sub-Zero Storage Stability",
      "guideline": "Store beaten raw eggs in airtight freezer containers at 0°F with 0.5 inches of headspace."
    }
  },
  "lettuce": {
    "materialThermal": {
      "property": "Vacuolar Ice Crystallization & Turgor Cell Rupture",
      "threshold": "Water Crystallization 32°F (0°C); Turgor Loss upon Thaw",
      "details": "High-moisture plant tissues contain water in cellular vacuoles. Freezing forms rigid ice crystals that puncture thin cellulose cell walls, causing complete mushiness and water weeping upon thawing."
    },
    "safetyStandard": {
      "organization": "USDA ARS",
      "standard": "Agriculture Handbook No. 66 / Home Freezing Guidelines",
      "citation": "High-water produce remains microbially safe frozen at 0°F but suffers severe structural degradation; best consumed frozen in smoothies or purees."
    },
    "applianceSpecs": {
      "parameter": "Flash Freeze Tray Protocol",
      "guideline": "Spread sliced fruits on a parchment-lined baking sheet and freeze at 0°F for 2 hours before packing into airtight freezer bags to prevent clump freezing."
    }
  },
  "celery": {
    "materialThermal": {
      "property": "Vacuolar Ice Crystallization & Turgor Cell Rupture",
      "threshold": "Water Crystallization 32°F (0°C); Turgor Loss upon Thaw",
      "details": "High-moisture plant tissues contain water in cellular vacuoles. Freezing forms rigid ice crystals that puncture thin cellulose cell walls, causing complete mushiness and water weeping upon thawing."
    },
    "safetyStandard": {
      "organization": "USDA ARS",
      "standard": "Agriculture Handbook No. 66 / Home Freezing Guidelines",
      "citation": "High-water produce remains microbially safe frozen at 0°F but suffers severe structural degradation; best consumed frozen in smoothies or purees."
    },
    "applianceSpecs": {
      "parameter": "Flash Freeze Tray Protocol",
      "guideline": "Spread sliced fruits on a parchment-lined baking sheet and freeze at 0°F for 2 hours before packing into airtight freezer bags to prevent clump freezing."
    }
  },
  "cabbage": {
    "materialThermal": {
      "property": "Eutectic Freezing & Moisture Sublimation Threshold",
      "threshold": "Microbial Dormancy <=0°F (-18°C); Ice Crystal Phase Point 32°F",
      "details": "Deep freezing halts all bacterial, yeast, and mold proliferation by immobilizing liquid water into crystalline solid state."
    },
    "safetyStandard": {
      "organization": "USDA FSIS",
      "standard": "FSIS Freezing and Food Safety Directives",
      "citation": "Food preserved continuously at 0°F remains microbiologically safe indefinitely; storage recommendations reflect peak sensory quality."
    },
    "applianceSpecs": {
      "parameter": "0°F Operating Range & Headspace Management",
      "guideline": "Maintain freezer at 0°F (-18°C) or colder; leave 0.5–1 inch headspace for liquid-containing foods to accommodate ice expansion."
    }
  },
  "broccoli": {
    "materialThermal": {
      "property": "Eutectic Freezing & Moisture Sublimation Threshold",
      "threshold": "Microbial Dormancy <=0°F (-18°C); Ice Crystal Phase Point 32°F",
      "details": "Deep freezing halts all bacterial, yeast, and mold proliferation by immobilizing liquid water into crystalline solid state."
    },
    "safetyStandard": {
      "organization": "USDA FSIS",
      "standard": "FSIS Freezing and Food Safety Directives",
      "citation": "Food preserved continuously at 0°F remains microbiologically safe indefinitely; storage recommendations reflect peak sensory quality."
    },
    "applianceSpecs": {
      "parameter": "0°F Operating Range & Headspace Management",
      "guideline": "Maintain freezer at 0°F (-18°C) or colder; leave 0.5–1 inch headspace for liquid-containing foods to accommodate ice expansion."
    }
  },
  "zucchini": {
    "materialThermal": {
      "property": "Eutectic Freezing & Moisture Sublimation Threshold",
      "threshold": "Microbial Dormancy <=0°F (-18°C); Ice Crystal Phase Point 32°F",
      "details": "Deep freezing halts all bacterial, yeast, and mold proliferation by immobilizing liquid water into crystalline solid state."
    },
    "safetyStandard": {
      "organization": "USDA FSIS",
      "standard": "FSIS Freezing and Food Safety Directives",
      "citation": "Food preserved continuously at 0°F remains microbiologically safe indefinitely; storage recommendations reflect peak sensory quality."
    },
    "applianceSpecs": {
      "parameter": "0°F Operating Range & Headspace Management",
      "guideline": "Maintain freezer at 0°F (-18°C) or colder; leave 0.5–1 inch headspace for liquid-containing foods to accommodate ice expansion."
    }
  },
  "bread": {
    "materialThermal": {
      "property": "Starch Retrogradation Arrest & Ice Sublimation",
      "threshold": "Retrogradation Arrested at <=0°F (-18°C); Freezing Point ~25°F",
      "details": "Sub-zero temperatures freeze water molecules in place, completely halting amylopectin retrogradation and preserving bread freshness without staling."
    },
    "safetyStandard": {
      "organization": "USDA ARS / AIB",
      "standard": "AIB International Bakery Science Freezing Guide",
      "citation": "Bread and baked goods freeze with near-perfect quality retention for 3–6 months at 0°F."
    },
    "applianceSpecs": {
      "parameter": "Air-Purged Vapor Barrier Protocol",
      "guideline": "Slice bread before freezing and seal tightly in heavy plastic freezer bags, pressing out all excess air to prevent ice crystal glaze."
    }
  },
  "cooked-rice": {
    "materialThermal": {
      "property": "Starch Retrogradation Arrest & Ice Sublimation",
      "threshold": "Retrogradation Arrested at <=0°F (-18°C); Freezing Point ~25°F",
      "details": "Sub-zero temperatures freeze water molecules in place, completely halting amylopectin retrogradation and preserving bread freshness without staling."
    },
    "safetyStandard": {
      "organization": "USDA ARS / AIB",
      "standard": "AIB International Bakery Science Freezing Guide",
      "citation": "Bread and baked goods freeze with near-perfect quality retention for 3–6 months at 0°F."
    },
    "applianceSpecs": {
      "parameter": "Air-Purged Vapor Barrier Protocol",
      "guideline": "Slice bread before freezing and seal tightly in heavy plastic freezer bags, pressing out all excess air to prevent ice crystal glaze."
    }
  },
  "cooked-pasta": {
    "materialThermal": {
      "property": "Starch Retrogradation Arrest & Ice Sublimation",
      "threshold": "Retrogradation Arrested at <=0°F (-18°C); Freezing Point ~25°F",
      "details": "Sub-zero temperatures freeze water molecules in place, completely halting amylopectin retrogradation and preserving bread freshness without staling."
    },
    "safetyStandard": {
      "organization": "USDA ARS / AIB",
      "standard": "AIB International Bakery Science Freezing Guide",
      "citation": "Bread and baked goods freeze with near-perfect quality retention for 3–6 months at 0°F."
    },
    "applianceSpecs": {
      "parameter": "Air-Purged Vapor Barrier Protocol",
      "guideline": "Slice bread before freezing and seal tightly in heavy plastic freezer bags, pressing out all excess air to prevent ice crystal glaze."
    }
  },
  "ketchup": {
    "materialThermal": {
      "property": "Eutectic Freezing & Moisture Sublimation Threshold",
      "threshold": "Microbial Dormancy <=0°F (-18°C); Ice Crystal Phase Point 32°F",
      "details": "Deep freezing halts all bacterial, yeast, and mold proliferation by immobilizing liquid water into crystalline solid state."
    },
    "safetyStandard": {
      "organization": "USDA FSIS",
      "standard": "FSIS Freezing and Food Safety Directives",
      "citation": "Food preserved continuously at 0°F remains microbiologically safe indefinitely; storage recommendations reflect peak sensory quality."
    },
    "applianceSpecs": {
      "parameter": "0°F Operating Range & Headspace Management",
      "guideline": "Maintain freezer at 0°F (-18°C) or colder; leave 0.5–1 inch headspace for liquid-containing foods to accommodate ice expansion."
    }
  },
  "mustard": {
    "materialThermal": {
      "property": "Eutectic Freezing & Moisture Sublimation Threshold",
      "threshold": "Microbial Dormancy <=0°F (-18°C); Ice Crystal Phase Point 32°F",
      "details": "Deep freezing halts all bacterial, yeast, and mold proliferation by immobilizing liquid water into crystalline solid state."
    },
    "safetyStandard": {
      "organization": "USDA FSIS",
      "standard": "FSIS Freezing and Food Safety Directives",
      "citation": "Food preserved continuously at 0°F remains microbiologically safe indefinitely; storage recommendations reflect peak sensory quality."
    },
    "applianceSpecs": {
      "parameter": "0°F Operating Range & Headspace Management",
      "guideline": "Maintain freezer at 0°F (-18°C) or colder; leave 0.5–1 inch headspace for liquid-containing foods to accommodate ice expansion."
    }
  },
  "peanut-butter": {
    "materialThermal": {
      "property": "Lipid-Water Emulsion Destabilization & Syneresis",
      "threshold": "Phase Separation begins at 31°F (-0.5°C)",
      "details": "Ice crystal formation disrupts casein micelle bridges and destabilizes fat globule membranes, causing permanent whey separation (curdling) when thawed."
    },
    "safetyStandard": {
      "organization": "FDA",
      "standard": "21 CFR § 131 / FDA Food Science Guidelines",
      "citation": "Freezing dairy products halts bacterial action but alters physical rheology; thawed emulsion products are best reserved for cooking/baking."
    },
    "applianceSpecs": {
      "parameter": "Headspace Allowance & Thaw Protocol",
      "guideline": "Leave 1–2 inches of headspace in milk jugs to accommodate 9% volumetric expansion; thaw strictly in the refrigerator at 35°F–38°F."
    }
  },
  "honey": {
    "materialThermal": {
      "property": "Eutectic Freezing & Moisture Sublimation Threshold",
      "threshold": "Microbial Dormancy <=0°F (-18°C); Ice Crystal Phase Point 32°F",
      "details": "Deep freezing halts all bacterial, yeast, and mold proliferation by immobilizing liquid water into crystalline solid state."
    },
    "safetyStandard": {
      "organization": "USDA FSIS",
      "standard": "FSIS Freezing and Food Safety Directives",
      "citation": "Food preserved continuously at 0°F remains microbiologically safe indefinitely; storage recommendations reflect peak sensory quality."
    },
    "applianceSpecs": {
      "parameter": "0°F Operating Range & Headspace Management",
      "guideline": "Maintain freezer at 0°F (-18°C) or colder; leave 0.5–1 inch headspace for liquid-containing foods to accommodate ice expansion."
    }
  },
  "chocolate": {
    "materialThermal": {
      "property": "Eutectic Freezing & Moisture Sublimation Threshold",
      "threshold": "Microbial Dormancy <=0°F (-18°C); Ice Crystal Phase Point 32°F",
      "details": "Deep freezing halts all bacterial, yeast, and mold proliferation by immobilizing liquid water into crystalline solid state."
    },
    "safetyStandard": {
      "organization": "USDA FSIS",
      "standard": "FSIS Freezing and Food Safety Directives",
      "citation": "Food preserved continuously at 0°F remains microbiologically safe indefinitely; storage recommendations reflect peak sensory quality."
    },
    "applianceSpecs": {
      "parameter": "0°F Operating Range & Headspace Management",
      "guideline": "Maintain freezer at 0°F (-18°C) or colder; leave 0.5–1 inch headspace for liquid-containing foods to accommodate ice expansion."
    }
  },
  "cake": {
    "materialThermal": {
      "property": "Eutectic Freezing & Moisture Sublimation Threshold",
      "threshold": "Microbial Dormancy <=0°F (-18°C); Ice Crystal Phase Point 32°F",
      "details": "Deep freezing halts all bacterial, yeast, and mold proliferation by immobilizing liquid water into crystalline solid state."
    },
    "safetyStandard": {
      "organization": "USDA FSIS",
      "standard": "FSIS Freezing and Food Safety Directives",
      "citation": "Food preserved continuously at 0°F remains microbiologically safe indefinitely; storage recommendations reflect peak sensory quality."
    },
    "applianceSpecs": {
      "parameter": "0°F Operating Range & Headspace Management",
      "guideline": "Maintain freezer at 0°F (-18°C) or colder; leave 0.5–1 inch headspace for liquid-containing foods to accommodate ice expansion."
    }
  },
  "cookies": {
    "materialThermal": {
      "property": "Eutectic Freezing & Moisture Sublimation Threshold",
      "threshold": "Microbial Dormancy <=0°F (-18°C); Ice Crystal Phase Point 32°F",
      "details": "Deep freezing halts all bacterial, yeast, and mold proliferation by immobilizing liquid water into crystalline solid state."
    },
    "safetyStandard": {
      "organization": "USDA FSIS",
      "standard": "FSIS Freezing and Food Safety Directives",
      "citation": "Food preserved continuously at 0°F remains microbiologically safe indefinitely; storage recommendations reflect peak sensory quality."
    },
    "applianceSpecs": {
      "parameter": "0°F Operating Range & Headspace Management",
      "guideline": "Maintain freezer at 0°F (-18°C) or colder; leave 0.5–1 inch headspace for liquid-containing foods to accommodate ice expansion."
    }
  },
  "mashed-potatoes": {
    "materialThermal": {
      "property": "Eutectic Freezing & Moisture Sublimation Threshold",
      "threshold": "Microbial Dormancy <=0°F (-18°C); Ice Crystal Phase Point 32°F",
      "details": "Deep freezing halts all bacterial, yeast, and mold proliferation by immobilizing liquid water into crystalline solid state."
    },
    "safetyStandard": {
      "organization": "USDA FSIS",
      "standard": "FSIS Freezing and Food Safety Directives",
      "citation": "Food preserved continuously at 0°F remains microbiologically safe indefinitely; storage recommendations reflect peak sensory quality."
    },
    "applianceSpecs": {
      "parameter": "0°F Operating Range & Headspace Management",
      "guideline": "Maintain freezer at 0°F (-18°C) or colder; leave 0.5–1 inch headspace for liquid-containing foods to accommodate ice expansion."
    }
  },
  "candles": {
    "materialThermal": {
      "property": "Eutectic Freezing & Moisture Sublimation Threshold",
      "threshold": "Microbial Dormancy <=0°F (-18°C); Ice Crystal Phase Point 32°F",
      "details": "Deep freezing halts all bacterial, yeast, and mold proliferation by immobilizing liquid water into crystalline solid state."
    },
    "safetyStandard": {
      "organization": "USDA FSIS",
      "standard": "FSIS Freezing and Food Safety Directives",
      "citation": "Food preserved continuously at 0°F remains microbiologically safe indefinitely; storage recommendations reflect peak sensory quality."
    },
    "applianceSpecs": {
      "parameter": "0°F Operating Range & Headspace Management",
      "guideline": "Maintain freezer at 0°F (-18°C) or colder; leave 0.5–1 inch headspace for liquid-containing foods to accommodate ice expansion."
    }
  },
  "batteries": {
    "materialThermal": {
      "property": "Eutectic Freezing & Moisture Sublimation Threshold",
      "threshold": "Microbial Dormancy <=0°F (-18°C); Ice Crystal Phase Point 32°F",
      "details": "Deep freezing halts all bacterial, yeast, and mold proliferation by immobilizing liquid water into crystalline solid state."
    },
    "safetyStandard": {
      "organization": "USDA FSIS",
      "standard": "FSIS Freezing and Food Safety Directives",
      "citation": "Food preserved continuously at 0°F remains microbiologically safe indefinitely; storage recommendations reflect peak sensory quality."
    },
    "applianceSpecs": {
      "parameter": "0°F Operating Range & Headspace Management",
      "guideline": "Maintain freezer at 0°F (-18°C) or colder; leave 0.5–1 inch headspace for liquid-containing foods to accommodate ice expansion."
    }
  },
  "yeast": {
    "materialThermal": {
      "property": "Eutectic Freezing & Moisture Sublimation Threshold",
      "threshold": "Microbial Dormancy <=0°F (-18°C); Ice Crystal Phase Point 32°F",
      "details": "Deep freezing halts all bacterial, yeast, and mold proliferation by immobilizing liquid water into crystalline solid state."
    },
    "safetyStandard": {
      "organization": "USDA FSIS",
      "standard": "FSIS Freezing and Food Safety Directives",
      "citation": "Food preserved continuously at 0°F remains microbiologically safe indefinitely; storage recommendations reflect peak sensory quality."
    },
    "applianceSpecs": {
      "parameter": "0°F Operating Range & Headspace Management",
      "guideline": "Maintain freezer at 0°F (-18°C) or colder; leave 0.5–1 inch headspace for liquid-containing foods to accommodate ice expansion."
    }
  },
  "nuts": {
    "materialThermal": {
      "property": "Eutectic Freezing & Moisture Sublimation Threshold",
      "threshold": "Microbial Dormancy <=0°F (-18°C); Ice Crystal Phase Point 32°F",
      "details": "Deep freezing halts all bacterial, yeast, and mold proliferation by immobilizing liquid water into crystalline solid state."
    },
    "safetyStandard": {
      "organization": "USDA FSIS",
      "standard": "FSIS Freezing and Food Safety Directives",
      "citation": "Food preserved continuously at 0°F remains microbiologically safe indefinitely; storage recommendations reflect peak sensory quality."
    },
    "applianceSpecs": {
      "parameter": "0°F Operating Range & Headspace Management",
      "guideline": "Maintain freezer at 0°F (-18°C) or colder; leave 0.5–1 inch headspace for liquid-containing foods to accommodate ice expansion."
    }
  },
  "herbs-in-oil": {
    "materialThermal": {
      "property": "Eutectic Freezing & Moisture Sublimation Threshold",
      "threshold": "Microbial Dormancy <=0°F (-18°C); Ice Crystal Phase Point 32°F",
      "details": "Deep freezing halts all bacterial, yeast, and mold proliferation by immobilizing liquid water into crystalline solid state."
    },
    "safetyStandard": {
      "organization": "USDA FSIS",
      "standard": "FSIS Freezing and Food Safety Directives",
      "citation": "Food preserved continuously at 0°F remains microbiologically safe indefinitely; storage recommendations reflect peak sensory quality."
    },
    "applianceSpecs": {
      "parameter": "0°F Operating Range & Headspace Management",
      "guideline": "Maintain freezer at 0°F (-18°C) or colder; leave 0.5–1 inch headspace for liquid-containing foods to accommodate ice expansion."
    }
  },
  "pesto": {
    "materialThermal": {
      "property": "Eutectic Freezing & Moisture Sublimation Threshold",
      "threshold": "Microbial Dormancy <=0°F (-18°C); Ice Crystal Phase Point 32°F",
      "details": "Deep freezing halts all bacterial, yeast, and mold proliferation by immobilizing liquid water into crystalline solid state."
    },
    "safetyStandard": {
      "organization": "USDA FSIS",
      "standard": "FSIS Freezing and Food Safety Directives",
      "citation": "Food preserved continuously at 0°F remains microbiologically safe indefinitely; storage recommendations reflect peak sensory quality."
    },
    "applianceSpecs": {
      "parameter": "0°F Operating Range & Headspace Management",
      "guideline": "Maintain freezer at 0°F (-18°C) or colder; leave 0.5–1 inch headspace for liquid-containing foods to accommodate ice expansion."
    }
  },
  "avocado-oil": {
    "materialThermal": {
      "property": "Vacuolar Ice Crystallization & Turgor Cell Rupture",
      "threshold": "Water Crystallization 32°F (0°C); Turgor Loss upon Thaw",
      "details": "High-moisture plant tissues contain water in cellular vacuoles. Freezing forms rigid ice crystals that puncture thin cellulose cell walls, causing complete mushiness and water weeping upon thawing."
    },
    "safetyStandard": {
      "organization": "USDA ARS",
      "standard": "Agriculture Handbook No. 66 / Home Freezing Guidelines",
      "citation": "High-water produce remains microbially safe frozen at 0°F but suffers severe structural degradation; best consumed frozen in smoothies or purees."
    },
    "applianceSpecs": {
      "parameter": "Flash Freeze Tray Protocol",
      "guideline": "Spread sliced fruits on a parchment-lined baking sheet and freeze at 0°F for 2 hours before packing into airtight freezer bags to prevent clump freezing."
    }
  },
  "sausage": {
    "materialThermal": {
      "property": "Eutectic Solidification & Cellular Purge Loss",
      "threshold": "Cellular Freezing begins at 28°F (-2.2°C); Eutectic Complete Solidification at -0.4°F (-18°C)",
      "details": "Slow domestic freezing forms large extracellular ice needles that pierce myofibrillar fibers, resulting in 5%–10% moisture and nutrient drip loss upon thawing."
    },
    "safetyStandard": {
      "organization": "USDA FSIS",
      "standard": "FSIS Freezing and Food Safety Fact Sheet",
      "citation": "Foods kept continuously at 0°F (-18°C) or below remain indefinitely safe from microbial pathogens; quality is preserved for 4–12 months."
    },
    "applianceSpecs": {
      "parameter": "0°F Evaporator Deep Freezing & Vacuum Sealing",
      "guideline": "Store at 0°F (-18°C) in heavy vacuum-sealed bags or double freezer foil to eliminate air pockets that drive moisture sublimation (freezer burn)."
    }
  },
  "pork-chop": {
    "materialThermal": {
      "property": "Eutectic Solidification & Cellular Purge Loss",
      "threshold": "Cellular Freezing begins at 28°F (-2.2°C); Eutectic Complete Solidification at -0.4°F (-18°C)",
      "details": "Slow domestic freezing forms large extracellular ice needles that pierce myofibrillar fibers, resulting in 5%–10% moisture and nutrient drip loss upon thawing."
    },
    "safetyStandard": {
      "organization": "USDA FSIS",
      "standard": "FSIS Freezing and Food Safety Fact Sheet",
      "citation": "Foods kept continuously at 0°F (-18°C) or below remain indefinitely safe from microbial pathogens; quality is preserved for 4–12 months."
    },
    "applianceSpecs": {
      "parameter": "0°F Evaporator Deep Freezing & Vacuum Sealing",
      "guideline": "Store at 0°F (-18°C) in heavy vacuum-sealed bags or double freezer foil to eliminate air pockets that drive moisture sublimation (freezer burn)."
    }
  },
  "beef-steak": {
    "materialThermal": {
      "property": "Eutectic Solidification & Cellular Purge Loss",
      "threshold": "Cellular Freezing begins at 28°F (-2.2°C); Eutectic Complete Solidification at -0.4°F (-18°C)",
      "details": "Slow domestic freezing forms large extracellular ice needles that pierce myofibrillar fibers, resulting in 5%–10% moisture and nutrient drip loss upon thawing."
    },
    "safetyStandard": {
      "organization": "USDA FSIS",
      "standard": "FSIS Freezing and Food Safety Fact Sheet",
      "citation": "Foods kept continuously at 0°F (-18°C) or below remain indefinitely safe from microbial pathogens; quality is preserved for 4–12 months."
    },
    "applianceSpecs": {
      "parameter": "0°F Evaporator Deep Freezing & Vacuum Sealing",
      "guideline": "Store at 0°F (-18°C) in heavy vacuum-sealed bags or double freezer foil to eliminate air pockets that drive moisture sublimation (freezer burn)."
    }
  },
  "tuna-steak": {
    "materialThermal": {
      "property": "Eutectic Solidification & Cellular Purge Loss",
      "threshold": "Cellular Freezing begins at 28°F (-2.2°C); Eutectic Complete Solidification at -0.4°F (-18°C)",
      "details": "Slow domestic freezing forms large extracellular ice needles that pierce myofibrillar fibers, resulting in 5%–10% moisture and nutrient drip loss upon thawing."
    },
    "safetyStandard": {
      "organization": "USDA FSIS",
      "standard": "FSIS Freezing and Food Safety Fact Sheet",
      "citation": "Foods kept continuously at 0°F (-18°C) or below remain indefinitely safe from microbial pathogens; quality is preserved for 4–12 months."
    },
    "applianceSpecs": {
      "parameter": "0°F Evaporator Deep Freezing & Vacuum Sealing",
      "guideline": "Store at 0°F (-18°C) in heavy vacuum-sealed bags or double freezer foil to eliminate air pockets that drive moisture sublimation (freezer burn)."
    }
  },
  "lobster-tail": {
    "materialThermal": {
      "property": "Eutectic Freezing & Moisture Sublimation Threshold",
      "threshold": "Microbial Dormancy <=0°F (-18°C); Ice Crystal Phase Point 32°F",
      "details": "Deep freezing halts all bacterial, yeast, and mold proliferation by immobilizing liquid water into crystalline solid state."
    },
    "safetyStandard": {
      "organization": "USDA FSIS",
      "standard": "FSIS Freezing and Food Safety Directives",
      "citation": "Food preserved continuously at 0°F remains microbiologically safe indefinitely; storage recommendations reflect peak sensory quality."
    },
    "applianceSpecs": {
      "parameter": "0°F Operating Range & Headspace Management",
      "guideline": "Maintain freezer at 0°F (-18°C) or colder; leave 0.5–1 inch headspace for liquid-containing foods to accommodate ice expansion."
    }
  },
  "crab-legs": {
    "materialThermal": {
      "property": "Eutectic Freezing & Moisture Sublimation Threshold",
      "threshold": "Microbial Dormancy <=0°F (-18°C); Ice Crystal Phase Point 32°F",
      "details": "Deep freezing halts all bacterial, yeast, and mold proliferation by immobilizing liquid water into crystalline solid state."
    },
    "safetyStandard": {
      "organization": "USDA FSIS",
      "standard": "FSIS Freezing and Food Safety Directives",
      "citation": "Food preserved continuously at 0°F remains microbiologically safe indefinitely; storage recommendations reflect peak sensory quality."
    },
    "applianceSpecs": {
      "parameter": "0°F Operating Range & Headspace Management",
      "guideline": "Maintain freezer at 0°F (-18°C) or colder; leave 0.5–1 inch headspace for liquid-containing foods to accommodate ice expansion."
    }
  },
  "chicken-breast": {
    "materialThermal": {
      "property": "Eutectic Solidification & Cellular Purge Loss",
      "threshold": "Cellular Freezing begins at 28°F (-2.2°C); Eutectic Complete Solidification at -0.4°F (-18°C)",
      "details": "Slow domestic freezing forms large extracellular ice needles that pierce myofibrillar fibers, resulting in 5%–10% moisture and nutrient drip loss upon thawing."
    },
    "safetyStandard": {
      "organization": "USDA FSIS",
      "standard": "FSIS Freezing and Food Safety Fact Sheet",
      "citation": "Foods kept continuously at 0°F (-18°C) or below remain indefinitely safe from microbial pathogens; quality is preserved for 4–12 months."
    },
    "applianceSpecs": {
      "parameter": "0°F Evaporator Deep Freezing & Vacuum Sealing",
      "guideline": "Store at 0°F (-18°C) in heavy vacuum-sealed bags or double freezer foil to eliminate air pockets that drive moisture sublimation (freezer burn)."
    }
  },
  "chicken-wings": {
    "materialThermal": {
      "property": "Eutectic Solidification & Cellular Purge Loss",
      "threshold": "Cellular Freezing begins at 28°F (-2.2°C); Eutectic Complete Solidification at -0.4°F (-18°C)",
      "details": "Slow domestic freezing forms large extracellular ice needles that pierce myofibrillar fibers, resulting in 5%–10% moisture and nutrient drip loss upon thawing."
    },
    "safetyStandard": {
      "organization": "USDA FSIS",
      "standard": "FSIS Freezing and Food Safety Fact Sheet",
      "citation": "Foods kept continuously at 0°F (-18°C) or below remain indefinitely safe from microbial pathogens; quality is preserved for 4–12 months."
    },
    "applianceSpecs": {
      "parameter": "0°F Evaporator Deep Freezing & Vacuum Sealing",
      "guideline": "Store at 0°F (-18°C) in heavy vacuum-sealed bags or double freezer foil to eliminate air pockets that drive moisture sublimation (freezer burn)."
    }
  },
  "turkey-breast": {
    "materialThermal": {
      "property": "Eutectic Solidification & Cellular Purge Loss",
      "threshold": "Cellular Freezing begins at 28°F (-2.2°C); Eutectic Complete Solidification at -0.4°F (-18°C)",
      "details": "Slow domestic freezing forms large extracellular ice needles that pierce myofibrillar fibers, resulting in 5%–10% moisture and nutrient drip loss upon thawing."
    },
    "safetyStandard": {
      "organization": "USDA FSIS",
      "standard": "FSIS Freezing and Food Safety Fact Sheet",
      "citation": "Foods kept continuously at 0°F (-18°C) or below remain indefinitely safe from microbial pathogens; quality is preserved for 4–12 months."
    },
    "applianceSpecs": {
      "parameter": "0°F Evaporator Deep Freezing & Vacuum Sealing",
      "guideline": "Store at 0°F (-18°C) in heavy vacuum-sealed bags or double freezer foil to eliminate air pockets that drive moisture sublimation (freezer burn)."
    }
  },
  "duck-breast": {
    "materialThermal": {
      "property": "Eutectic Freezing & Moisture Sublimation Threshold",
      "threshold": "Microbial Dormancy <=0°F (-18°C); Ice Crystal Phase Point 32°F",
      "details": "Deep freezing halts all bacterial, yeast, and mold proliferation by immobilizing liquid water into crystalline solid state."
    },
    "safetyStandard": {
      "organization": "USDA FSIS",
      "standard": "FSIS Freezing and Food Safety Directives",
      "citation": "Food preserved continuously at 0°F remains microbiologically safe indefinitely; storage recommendations reflect peak sensory quality."
    },
    "applianceSpecs": {
      "parameter": "0°F Operating Range & Headspace Management",
      "guideline": "Maintain freezer at 0°F (-18°C) or colder; leave 0.5–1 inch headspace for liquid-containing foods to accommodate ice expansion."
    }
  },
  "egg": {
    "materialThermal": {
      "property": "Yolk Lipoprotein Gelation & Albumen Syneresis",
      "threshold": "Gelation Phase Change below 21°F (-6°C)",
      "details": "Pure egg yolks undergo permanent irreversible gelation below 21°F, becoming pasty and rubbery unless combined with salt or sugar prior to freezing."
    },
    "safetyStandard": {
      "organization": "USDA FSIS",
      "standard": "FSIS Egg Product Freezing Recommendations",
      "citation": "Cooked egg whites become tough and watery when frozen; raw beaten eggs freeze safely for up to 1 year at 0°F."
    },
    "applianceSpecs": {
      "parameter": "Sub-Zero Storage Stability",
      "guideline": "Store beaten raw eggs in airtight freezer containers at 0°F with 0.5 inches of headspace."
    }
  },
  "cheddar-cheese": {
    "materialThermal": {
      "property": "Casein Matrix Embrittlement & Moisture Crystallization",
      "threshold": "Freezing Point ~23°F–26°F (-5°C to -3.3°C)",
      "details": "Freezing hard cheese expands residual water within protein pockets, fracturing the casein network and causing a crumbly, dry texture upon thawing."
    },
    "safetyStandard": {
      "organization": "USDA FSIS",
      "standard": "FSIS Freezing and Food Safety Guide",
      "citation": "Hard cheeses remain biologically safe indefinitely at 0°F; shredded cheese freezes better than dense blocks."
    },
    "applianceSpecs": {
      "parameter": "Vapor-Barrier Protection",
      "guideline": "Wrap tightly in heavy freezer wrap or vacuum bags to prevent moisture sublimation and freezer burn on cheese fats."
    }
  },
  "mozzarella-cheese": {
    "materialThermal": {
      "property": "Lipid-Water Emulsion Destabilization & Syneresis",
      "threshold": "Phase Separation begins at 31°F (-0.5°C)",
      "details": "Ice crystal formation disrupts casein micelle bridges and destabilizes fat globule membranes, causing permanent whey separation (curdling) when thawed."
    },
    "safetyStandard": {
      "organization": "FDA",
      "standard": "21 CFR § 131 / FDA Food Science Guidelines",
      "citation": "Freezing dairy products halts bacterial action but alters physical rheology; thawed emulsion products are best reserved for cooking/baking."
    },
    "applianceSpecs": {
      "parameter": "Headspace Allowance & Thaw Protocol",
      "guideline": "Leave 1–2 inches of headspace in milk jugs to accommodate 9% volumetric expansion; thaw strictly in the refrigerator at 35°F–38°F."
    }
  },
  "tempeh": {
    "materialThermal": {
      "property": "Eutectic Freezing & Moisture Sublimation Threshold",
      "threshold": "Microbial Dormancy <=0°F (-18°C); Ice Crystal Phase Point 32°F",
      "details": "Deep freezing halts all bacterial, yeast, and mold proliferation by immobilizing liquid water into crystalline solid state."
    },
    "safetyStandard": {
      "organization": "USDA FSIS",
      "standard": "FSIS Freezing and Food Safety Directives",
      "citation": "Food preserved continuously at 0°F remains microbiologically safe indefinitely; storage recommendations reflect peak sensory quality."
    },
    "applianceSpecs": {
      "parameter": "0°F Operating Range & Headspace Management",
      "guideline": "Maintain freezer at 0°F (-18°C) or colder; leave 0.5–1 inch headspace for liquid-containing foods to accommodate ice expansion."
    }
  },
  "apple": {
    "materialThermal": {
      "property": "Vacuolar Ice Crystallization & Turgor Cell Rupture",
      "threshold": "Water Crystallization 32°F (0°C); Turgor Loss upon Thaw",
      "details": "High-moisture plant tissues contain water in cellular vacuoles. Freezing forms rigid ice crystals that puncture thin cellulose cell walls, causing complete mushiness and water weeping upon thawing."
    },
    "safetyStandard": {
      "organization": "USDA ARS",
      "standard": "Agriculture Handbook No. 66 / Home Freezing Guidelines",
      "citation": "High-water produce remains microbially safe frozen at 0°F but suffers severe structural degradation; best consumed frozen in smoothies or purees."
    },
    "applianceSpecs": {
      "parameter": "Flash Freeze Tray Protocol",
      "guideline": "Spread sliced fruits on a parchment-lined baking sheet and freeze at 0°F for 2 hours before packing into airtight freezer bags to prevent clump freezing."
    }
  },
  "banana": {
    "materialThermal": {
      "property": "Vacuolar Ice Crystallization & Turgor Cell Rupture",
      "threshold": "Water Crystallization 32°F (0°C); Turgor Loss upon Thaw",
      "details": "High-moisture plant tissues contain water in cellular vacuoles. Freezing forms rigid ice crystals that puncture thin cellulose cell walls, causing complete mushiness and water weeping upon thawing."
    },
    "safetyStandard": {
      "organization": "USDA ARS",
      "standard": "Agriculture Handbook No. 66 / Home Freezing Guidelines",
      "citation": "High-water produce remains microbially safe frozen at 0°F but suffers severe structural degradation; best consumed frozen in smoothies or purees."
    },
    "applianceSpecs": {
      "parameter": "Flash Freeze Tray Protocol",
      "guideline": "Spread sliced fruits on a parchment-lined baking sheet and freeze at 0°F for 2 hours before packing into airtight freezer bags to prevent clump freezing."
    }
  },
  "orange": {
    "materialThermal": {
      "property": "Vacuolar Ice Crystallization & Turgor Cell Rupture",
      "threshold": "Water Crystallization 32°F (0°C); Turgor Loss upon Thaw",
      "details": "High-moisture plant tissues contain water in cellular vacuoles. Freezing forms rigid ice crystals that puncture thin cellulose cell walls, causing complete mushiness and water weeping upon thawing."
    },
    "safetyStandard": {
      "organization": "USDA ARS",
      "standard": "Agriculture Handbook No. 66 / Home Freezing Guidelines",
      "citation": "High-water produce remains microbially safe frozen at 0°F but suffers severe structural degradation; best consumed frozen in smoothies or purees."
    },
    "applianceSpecs": {
      "parameter": "Flash Freeze Tray Protocol",
      "guideline": "Spread sliced fruits on a parchment-lined baking sheet and freeze at 0°F for 2 hours before packing into airtight freezer bags to prevent clump freezing."
    }
  },
  "strawberry": {
    "materialThermal": {
      "property": "Vacuolar Ice Crystallization & Turgor Cell Rupture",
      "threshold": "Water Crystallization 32°F (0°C); Turgor Loss upon Thaw",
      "details": "High-moisture plant tissues contain water in cellular vacuoles. Freezing forms rigid ice crystals that puncture thin cellulose cell walls, causing complete mushiness and water weeping upon thawing."
    },
    "safetyStandard": {
      "organization": "USDA ARS",
      "standard": "Agriculture Handbook No. 66 / Home Freezing Guidelines",
      "citation": "High-water produce remains microbially safe frozen at 0°F but suffers severe structural degradation; best consumed frozen in smoothies or purees."
    },
    "applianceSpecs": {
      "parameter": "Flash Freeze Tray Protocol",
      "guideline": "Spread sliced fruits on a parchment-lined baking sheet and freeze at 0°F for 2 hours before packing into airtight freezer bags to prevent clump freezing."
    }
  },
  "blueberry": {
    "materialThermal": {
      "property": "Vacuolar Ice Crystallization & Turgor Cell Rupture",
      "threshold": "Water Crystallization 32°F (0°C); Turgor Loss upon Thaw",
      "details": "High-moisture plant tissues contain water in cellular vacuoles. Freezing forms rigid ice crystals that puncture thin cellulose cell walls, causing complete mushiness and water weeping upon thawing."
    },
    "safetyStandard": {
      "organization": "USDA ARS",
      "standard": "Agriculture Handbook No. 66 / Home Freezing Guidelines",
      "citation": "High-water produce remains microbially safe frozen at 0°F but suffers severe structural degradation; best consumed frozen in smoothies or purees."
    },
    "applianceSpecs": {
      "parameter": "Flash Freeze Tray Protocol",
      "guideline": "Spread sliced fruits on a parchment-lined baking sheet and freeze at 0°F for 2 hours before packing into airtight freezer bags to prevent clump freezing."
    }
  },
  "raspberry": {
    "materialThermal": {
      "property": "Vacuolar Ice Crystallization & Turgor Cell Rupture",
      "threshold": "Water Crystallization 32°F (0°C); Turgor Loss upon Thaw",
      "details": "High-moisture plant tissues contain water in cellular vacuoles. Freezing forms rigid ice crystals that puncture thin cellulose cell walls, causing complete mushiness and water weeping upon thawing."
    },
    "safetyStandard": {
      "organization": "USDA ARS",
      "standard": "Agriculture Handbook No. 66 / Home Freezing Guidelines",
      "citation": "High-water produce remains microbially safe frozen at 0°F but suffers severe structural degradation; best consumed frozen in smoothies or purees."
    },
    "applianceSpecs": {
      "parameter": "Flash Freeze Tray Protocol",
      "guideline": "Spread sliced fruits on a parchment-lined baking sheet and freeze at 0°F for 2 hours before packing into airtight freezer bags to prevent clump freezing."
    }
  },
  "blackberry": {
    "materialThermal": {
      "property": "Vacuolar Ice Crystallization & Turgor Cell Rupture",
      "threshold": "Water Crystallization 32°F (0°C); Turgor Loss upon Thaw",
      "details": "High-moisture plant tissues contain water in cellular vacuoles. Freezing forms rigid ice crystals that puncture thin cellulose cell walls, causing complete mushiness and water weeping upon thawing."
    },
    "safetyStandard": {
      "organization": "USDA ARS",
      "standard": "Agriculture Handbook No. 66 / Home Freezing Guidelines",
      "citation": "High-water produce remains microbially safe frozen at 0°F but suffers severe structural degradation; best consumed frozen in smoothies or purees."
    },
    "applianceSpecs": {
      "parameter": "Flash Freeze Tray Protocol",
      "guideline": "Spread sliced fruits on a parchment-lined baking sheet and freeze at 0°F for 2 hours before packing into airtight freezer bags to prevent clump freezing."
    }
  },
  "grape": {
    "materialThermal": {
      "property": "Vacuolar Ice Crystallization & Turgor Cell Rupture",
      "threshold": "Water Crystallization 32°F (0°C); Turgor Loss upon Thaw",
      "details": "High-moisture plant tissues contain water in cellular vacuoles. Freezing forms rigid ice crystals that puncture thin cellulose cell walls, causing complete mushiness and water weeping upon thawing."
    },
    "safetyStandard": {
      "organization": "USDA ARS",
      "standard": "Agriculture Handbook No. 66 / Home Freezing Guidelines",
      "citation": "High-water produce remains microbially safe frozen at 0°F but suffers severe structural degradation; best consumed frozen in smoothies or purees."
    },
    "applianceSpecs": {
      "parameter": "Flash Freeze Tray Protocol",
      "guideline": "Spread sliced fruits on a parchment-lined baking sheet and freeze at 0°F for 2 hours before packing into airtight freezer bags to prevent clump freezing."
    }
  },
  "cantaloupe": {
    "materialThermal": {
      "property": "Eutectic Freezing & Moisture Sublimation Threshold",
      "threshold": "Microbial Dormancy <=0°F (-18°C); Ice Crystal Phase Point 32°F",
      "details": "Deep freezing halts all bacterial, yeast, and mold proliferation by immobilizing liquid water into crystalline solid state."
    },
    "safetyStandard": {
      "organization": "USDA FSIS",
      "standard": "FSIS Freezing and Food Safety Directives",
      "citation": "Food preserved continuously at 0°F remains microbiologically safe indefinitely; storage recommendations reflect peak sensory quality."
    },
    "applianceSpecs": {
      "parameter": "0°F Operating Range & Headspace Management",
      "guideline": "Maintain freezer at 0°F (-18°C) or colder; leave 0.5–1 inch headspace for liquid-containing foods to accommodate ice expansion."
    }
  },
  "honeydew": {
    "materialThermal": {
      "property": "Eutectic Freezing & Moisture Sublimation Threshold",
      "threshold": "Microbial Dormancy <=0°F (-18°C); Ice Crystal Phase Point 32°F",
      "details": "Deep freezing halts all bacterial, yeast, and mold proliferation by immobilizing liquid water into crystalline solid state."
    },
    "safetyStandard": {
      "organization": "USDA FSIS",
      "standard": "FSIS Freezing and Food Safety Directives",
      "citation": "Food preserved continuously at 0°F remains microbiologically safe indefinitely; storage recommendations reflect peak sensory quality."
    },
    "applianceSpecs": {
      "parameter": "0°F Operating Range & Headspace Management",
      "guideline": "Maintain freezer at 0°F (-18°C) or colder; leave 0.5–1 inch headspace for liquid-containing foods to accommodate ice expansion."
    }
  },
  "peach": {
    "materialThermal": {
      "property": "Eutectic Freezing & Moisture Sublimation Threshold",
      "threshold": "Microbial Dormancy <=0°F (-18°C); Ice Crystal Phase Point 32°F",
      "details": "Deep freezing halts all bacterial, yeast, and mold proliferation by immobilizing liquid water into crystalline solid state."
    },
    "safetyStandard": {
      "organization": "USDA FSIS",
      "standard": "FSIS Freezing and Food Safety Directives",
      "citation": "Food preserved continuously at 0°F remains microbiologically safe indefinitely; storage recommendations reflect peak sensory quality."
    },
    "applianceSpecs": {
      "parameter": "0°F Operating Range & Headspace Management",
      "guideline": "Maintain freezer at 0°F (-18°C) or colder; leave 0.5–1 inch headspace for liquid-containing foods to accommodate ice expansion."
    }
  },
  "plum": {
    "materialThermal": {
      "property": "Eutectic Freezing & Moisture Sublimation Threshold",
      "threshold": "Microbial Dormancy <=0°F (-18°C); Ice Crystal Phase Point 32°F",
      "details": "Deep freezing halts all bacterial, yeast, and mold proliferation by immobilizing liquid water into crystalline solid state."
    },
    "safetyStandard": {
      "organization": "USDA FSIS",
      "standard": "FSIS Freezing and Food Safety Directives",
      "citation": "Food preserved continuously at 0°F remains microbiologically safe indefinitely; storage recommendations reflect peak sensory quality."
    },
    "applianceSpecs": {
      "parameter": "0°F Operating Range & Headspace Management",
      "guideline": "Maintain freezer at 0°F (-18°C) or colder; leave 0.5–1 inch headspace for liquid-containing foods to accommodate ice expansion."
    }
  },
  "nectarine": {
    "materialThermal": {
      "property": "Eutectic Freezing & Moisture Sublimation Threshold",
      "threshold": "Microbial Dormancy <=0°F (-18°C); Ice Crystal Phase Point 32°F",
      "details": "Deep freezing halts all bacterial, yeast, and mold proliferation by immobilizing liquid water into crystalline solid state."
    },
    "safetyStandard": {
      "organization": "USDA FSIS",
      "standard": "FSIS Freezing and Food Safety Directives",
      "citation": "Food preserved continuously at 0°F remains microbiologically safe indefinitely; storage recommendations reflect peak sensory quality."
    },
    "applianceSpecs": {
      "parameter": "0°F Operating Range & Headspace Management",
      "guideline": "Maintain freezer at 0°F (-18°C) or colder; leave 0.5–1 inch headspace for liquid-containing foods to accommodate ice expansion."
    }
  },
  "cherry": {
    "materialThermal": {
      "property": "Eutectic Freezing & Moisture Sublimation Threshold",
      "threshold": "Microbial Dormancy <=0°F (-18°C); Ice Crystal Phase Point 32°F",
      "details": "Deep freezing halts all bacterial, yeast, and mold proliferation by immobilizing liquid water into crystalline solid state."
    },
    "safetyStandard": {
      "organization": "USDA FSIS",
      "standard": "FSIS Freezing and Food Safety Directives",
      "citation": "Food preserved continuously at 0°F remains microbiologically safe indefinitely; storage recommendations reflect peak sensory quality."
    },
    "applianceSpecs": {
      "parameter": "0°F Operating Range & Headspace Management",
      "guideline": "Maintain freezer at 0°F (-18°C) or colder; leave 0.5–1 inch headspace for liquid-containing foods to accommodate ice expansion."
    }
  },
  "mango": {
    "materialThermal": {
      "property": "Eutectic Freezing & Moisture Sublimation Threshold",
      "threshold": "Microbial Dormancy <=0°F (-18°C); Ice Crystal Phase Point 32°F",
      "details": "Deep freezing halts all bacterial, yeast, and mold proliferation by immobilizing liquid water into crystalline solid state."
    },
    "safetyStandard": {
      "organization": "USDA FSIS",
      "standard": "FSIS Freezing and Food Safety Directives",
      "citation": "Food preserved continuously at 0°F remains microbiologically safe indefinitely; storage recommendations reflect peak sensory quality."
    },
    "applianceSpecs": {
      "parameter": "0°F Operating Range & Headspace Management",
      "guideline": "Maintain freezer at 0°F (-18°C) or colder; leave 0.5–1 inch headspace for liquid-containing foods to accommodate ice expansion."
    }
  },
  "tomato": {
    "materialThermal": {
      "property": "Vacuolar Ice Crystallization & Turgor Cell Rupture",
      "threshold": "Water Crystallization 32°F (0°C); Turgor Loss upon Thaw",
      "details": "High-moisture plant tissues contain water in cellular vacuoles. Freezing forms rigid ice crystals that puncture thin cellulose cell walls, causing complete mushiness and water weeping upon thawing."
    },
    "safetyStandard": {
      "organization": "USDA ARS",
      "standard": "Agriculture Handbook No. 66 / Home Freezing Guidelines",
      "citation": "High-water produce remains microbially safe frozen at 0°F but suffers severe structural degradation; best consumed frozen in smoothies or purees."
    },
    "applianceSpecs": {
      "parameter": "Flash Freeze Tray Protocol",
      "guideline": "Spread sliced fruits on a parchment-lined baking sheet and freeze at 0°F for 2 hours before packing into airtight freezer bags to prevent clump freezing."
    }
  },
  "cucumber": {
    "materialThermal": {
      "property": "Vacuolar Ice Crystallization & Turgor Cell Rupture",
      "threshold": "Water Crystallization 32°F (0°C); Turgor Loss upon Thaw",
      "details": "High-moisture plant tissues contain water in cellular vacuoles. Freezing forms rigid ice crystals that puncture thin cellulose cell walls, causing complete mushiness and water weeping upon thawing."
    },
    "safetyStandard": {
      "organization": "USDA ARS",
      "standard": "Agriculture Handbook No. 66 / Home Freezing Guidelines",
      "citation": "High-water produce remains microbially safe frozen at 0°F but suffers severe structural degradation; best consumed frozen in smoothies or purees."
    },
    "applianceSpecs": {
      "parameter": "Flash Freeze Tray Protocol",
      "guideline": "Spread sliced fruits on a parchment-lined baking sheet and freeze at 0°F for 2 hours before packing into airtight freezer bags to prevent clump freezing."
    }
  },
  "bell-pepper": {
    "materialThermal": {
      "property": "Eutectic Freezing & Moisture Sublimation Threshold",
      "threshold": "Microbial Dormancy <=0°F (-18°C); Ice Crystal Phase Point 32°F",
      "details": "Deep freezing halts all bacterial, yeast, and mold proliferation by immobilizing liquid water into crystalline solid state."
    },
    "safetyStandard": {
      "organization": "USDA FSIS",
      "standard": "FSIS Freezing and Food Safety Directives",
      "citation": "Food preserved continuously at 0°F remains microbiologically safe indefinitely; storage recommendations reflect peak sensory quality."
    },
    "applianceSpecs": {
      "parameter": "0°F Operating Range & Headspace Management",
      "guideline": "Maintain freezer at 0°F (-18°C) or colder; leave 0.5–1 inch headspace for liquid-containing foods to accommodate ice expansion."
    }
  },
  "spinach": {
    "materialThermal": {
      "property": "Eutectic Freezing & Moisture Sublimation Threshold",
      "threshold": "Microbial Dormancy <=0°F (-18°C); Ice Crystal Phase Point 32°F",
      "details": "Deep freezing halts all bacterial, yeast, and mold proliferation by immobilizing liquid water into crystalline solid state."
    },
    "safetyStandard": {
      "organization": "USDA FSIS",
      "standard": "FSIS Freezing and Food Safety Directives",
      "citation": "Food preserved continuously at 0°F remains microbiologically safe indefinitely; storage recommendations reflect peak sensory quality."
    },
    "applianceSpecs": {
      "parameter": "0°F Operating Range & Headspace Management",
      "guideline": "Maintain freezer at 0°F (-18°C) or colder; leave 0.5–1 inch headspace for liquid-containing foods to accommodate ice expansion."
    }
  },
  "brussels-sprouts": {
    "materialThermal": {
      "property": "Eutectic Freezing & Moisture Sublimation Threshold",
      "threshold": "Microbial Dormancy <=0°F (-18°C); Ice Crystal Phase Point 32°F",
      "details": "Deep freezing halts all bacterial, yeast, and mold proliferation by immobilizing liquid water into crystalline solid state."
    },
    "safetyStandard": {
      "organization": "USDA FSIS",
      "standard": "FSIS Freezing and Food Safety Directives",
      "citation": "Food preserved continuously at 0°F remains microbiologically safe indefinitely; storage recommendations reflect peak sensory quality."
    },
    "applianceSpecs": {
      "parameter": "0°F Operating Range & Headspace Management",
      "guideline": "Maintain freezer at 0°F (-18°C) or colder; leave 0.5–1 inch headspace for liquid-containing foods to accommodate ice expansion."
    }
  },
  "kale": {
    "materialThermal": {
      "property": "Eutectic Freezing & Moisture Sublimation Threshold",
      "threshold": "Microbial Dormancy <=0°F (-18°C); Ice Crystal Phase Point 32°F",
      "details": "Deep freezing halts all bacterial, yeast, and mold proliferation by immobilizing liquid water into crystalline solid state."
    },
    "safetyStandard": {
      "organization": "USDA FSIS",
      "standard": "FSIS Freezing and Food Safety Directives",
      "citation": "Food preserved continuously at 0°F remains microbiologically safe indefinitely; storage recommendations reflect peak sensory quality."
    },
    "applianceSpecs": {
      "parameter": "0°F Operating Range & Headspace Management",
      "guideline": "Maintain freezer at 0°F (-18°C) or colder; leave 0.5–1 inch headspace for liquid-containing foods to accommodate ice expansion."
    }
  },
  "carrot": {
    "materialThermal": {
      "property": "Eutectic Freezing & Moisture Sublimation Threshold",
      "threshold": "Microbial Dormancy <=0°F (-18°C); Ice Crystal Phase Point 32°F",
      "details": "Deep freezing halts all bacterial, yeast, and mold proliferation by immobilizing liquid water into crystalline solid state."
    },
    "safetyStandard": {
      "organization": "USDA FSIS",
      "standard": "FSIS Freezing and Food Safety Directives",
      "citation": "Food preserved continuously at 0°F remains microbiologically safe indefinitely; storage recommendations reflect peak sensory quality."
    },
    "applianceSpecs": {
      "parameter": "0°F Operating Range & Headspace Management",
      "guideline": "Maintain freezer at 0°F (-18°C) or colder; leave 0.5–1 inch headspace for liquid-containing foods to accommodate ice expansion."
    }
  },
  "onion": {
    "materialThermal": {
      "property": "Eutectic Freezing & Moisture Sublimation Threshold",
      "threshold": "Microbial Dormancy <=0°F (-18°C); Ice Crystal Phase Point 32°F",
      "details": "Deep freezing halts all bacterial, yeast, and mold proliferation by immobilizing liquid water into crystalline solid state."
    },
    "safetyStandard": {
      "organization": "USDA FSIS",
      "standard": "FSIS Freezing and Food Safety Directives",
      "citation": "Food preserved continuously at 0°F remains microbiologically safe indefinitely; storage recommendations reflect peak sensory quality."
    },
    "applianceSpecs": {
      "parameter": "0°F Operating Range & Headspace Management",
      "guideline": "Maintain freezer at 0°F (-18°C) or colder; leave 0.5–1 inch headspace for liquid-containing foods to accommodate ice expansion."
    }
  },
  "garlic": {
    "materialThermal": {
      "property": "Eutectic Freezing & Moisture Sublimation Threshold",
      "threshold": "Microbial Dormancy <=0°F (-18°C); Ice Crystal Phase Point 32°F",
      "details": "Deep freezing halts all bacterial, yeast, and mold proliferation by immobilizing liquid water into crystalline solid state."
    },
    "safetyStandard": {
      "organization": "USDA FSIS",
      "standard": "FSIS Freezing and Food Safety Directives",
      "citation": "Food preserved continuously at 0°F remains microbiologically safe indefinitely; storage recommendations reflect peak sensory quality."
    },
    "applianceSpecs": {
      "parameter": "0°F Operating Range & Headspace Management",
      "guideline": "Maintain freezer at 0°F (-18°C) or colder; leave 0.5–1 inch headspace for liquid-containing foods to accommodate ice expansion."
    }
  },
  "potato": {
    "materialThermal": {
      "property": "Eutectic Freezing & Moisture Sublimation Threshold",
      "threshold": "Microbial Dormancy <=0°F (-18°C); Ice Crystal Phase Point 32°F",
      "details": "Deep freezing halts all bacterial, yeast, and mold proliferation by immobilizing liquid water into crystalline solid state."
    },
    "safetyStandard": {
      "organization": "USDA FSIS",
      "standard": "FSIS Freezing and Food Safety Directives",
      "citation": "Food preserved continuously at 0°F remains microbiologically safe indefinitely; storage recommendations reflect peak sensory quality."
    },
    "applianceSpecs": {
      "parameter": "0°F Operating Range & Headspace Management",
      "guideline": "Maintain freezer at 0°F (-18°C) or colder; leave 0.5–1 inch headspace for liquid-containing foods to accommodate ice expansion."
    }
  },
  "sweet-potato": {
    "materialThermal": {
      "property": "Eutectic Freezing & Moisture Sublimation Threshold",
      "threshold": "Microbial Dormancy <=0°F (-18°C); Ice Crystal Phase Point 32°F",
      "details": "Deep freezing halts all bacterial, yeast, and mold proliferation by immobilizing liquid water into crystalline solid state."
    },
    "safetyStandard": {
      "organization": "USDA FSIS",
      "standard": "FSIS Freezing and Food Safety Directives",
      "citation": "Food preserved continuously at 0°F remains microbiologically safe indefinitely; storage recommendations reflect peak sensory quality."
    },
    "applianceSpecs": {
      "parameter": "0°F Operating Range & Headspace Management",
      "guideline": "Maintain freezer at 0°F (-18°C) or colder; leave 0.5–1 inch headspace for liquid-containing foods to accommodate ice expansion."
    }
  },
  "yellow-squash": {
    "materialThermal": {
      "property": "Eutectic Freezing & Moisture Sublimation Threshold",
      "threshold": "Microbial Dormancy <=0°F (-18°C); Ice Crystal Phase Point 32°F",
      "details": "Deep freezing halts all bacterial, yeast, and mold proliferation by immobilizing liquid water into crystalline solid state."
    },
    "safetyStandard": {
      "organization": "USDA FSIS",
      "standard": "FSIS Freezing and Food Safety Directives",
      "citation": "Food preserved continuously at 0°F remains microbiologically safe indefinitely; storage recommendations reflect peak sensory quality."
    },
    "applianceSpecs": {
      "parameter": "0°F Operating Range & Headspace Management",
      "guideline": "Maintain freezer at 0°F (-18°C) or colder; leave 0.5–1 inch headspace for liquid-containing foods to accommodate ice expansion."
    }
  },
  "eggplant": {
    "materialThermal": {
      "property": "Yolk Lipoprotein Gelation & Albumen Syneresis",
      "threshold": "Gelation Phase Change below 21°F (-6°C)",
      "details": "Pure egg yolks undergo permanent irreversible gelation below 21°F, becoming pasty and rubbery unless combined with salt or sugar prior to freezing."
    },
    "safetyStandard": {
      "organization": "USDA FSIS",
      "standard": "FSIS Egg Product Freezing Recommendations",
      "citation": "Cooked egg whites become tough and watery when frozen; raw beaten eggs freeze safely for up to 1 year at 0°F."
    },
    "applianceSpecs": {
      "parameter": "Sub-Zero Storage Stability",
      "guideline": "Store beaten raw eggs in airtight freezer containers at 0°F with 0.5 inches of headspace."
    }
  },
  "asparagus": {
    "materialThermal": {
      "property": "Eutectic Freezing & Moisture Sublimation Threshold",
      "threshold": "Microbial Dormancy <=0°F (-18°C); Ice Crystal Phase Point 32°F",
      "details": "Deep freezing halts all bacterial, yeast, and mold proliferation by immobilizing liquid water into crystalline solid state."
    },
    "safetyStandard": {
      "organization": "USDA FSIS",
      "standard": "FSIS Freezing and Food Safety Directives",
      "citation": "Food preserved continuously at 0°F remains microbiologically safe indefinitely; storage recommendations reflect peak sensory quality."
    },
    "applianceSpecs": {
      "parameter": "0°F Operating Range & Headspace Management",
      "guideline": "Maintain freezer at 0°F (-18°C) or colder; leave 0.5–1 inch headspace for liquid-containing foods to accommodate ice expansion."
    }
  },
  "green-beans": {
    "materialThermal": {
      "property": "Eutectic Freezing & Moisture Sublimation Threshold",
      "threshold": "Microbial Dormancy <=0°F (-18°C); Ice Crystal Phase Point 32°F",
      "details": "Deep freezing halts all bacterial, yeast, and mold proliferation by immobilizing liquid water into crystalline solid state."
    },
    "safetyStandard": {
      "organization": "USDA FSIS",
      "standard": "FSIS Freezing and Food Safety Directives",
      "citation": "Food preserved continuously at 0°F remains microbiologically safe indefinitely; storage recommendations reflect peak sensory quality."
    },
    "applianceSpecs": {
      "parameter": "0°F Operating Range & Headspace Management",
      "guideline": "Maintain freezer at 0°F (-18°C) or colder; leave 0.5–1 inch headspace for liquid-containing foods to accommodate ice expansion."
    }
  },
  "peas": {
    "materialThermal": {
      "property": "Eutectic Freezing & Moisture Sublimation Threshold",
      "threshold": "Microbial Dormancy <=0°F (-18°C); Ice Crystal Phase Point 32°F",
      "details": "Deep freezing halts all bacterial, yeast, and mold proliferation by immobilizing liquid water into crystalline solid state."
    },
    "safetyStandard": {
      "organization": "USDA FSIS",
      "standard": "FSIS Freezing and Food Safety Directives",
      "citation": "Food preserved continuously at 0°F remains microbiologically safe indefinitely; storage recommendations reflect peak sensory quality."
    },
    "applianceSpecs": {
      "parameter": "0°F Operating Range & Headspace Management",
      "guideline": "Maintain freezer at 0°F (-18°C) or colder; leave 0.5–1 inch headspace for liquid-containing foods to accommodate ice expansion."
    }
  },
  "corn": {
    "materialThermal": {
      "property": "Eutectic Freezing & Moisture Sublimation Threshold",
      "threshold": "Microbial Dormancy <=0°F (-18°C); Ice Crystal Phase Point 32°F",
      "details": "Deep freezing halts all bacterial, yeast, and mold proliferation by immobilizing liquid water into crystalline solid state."
    },
    "safetyStandard": {
      "organization": "USDA FSIS",
      "standard": "FSIS Freezing and Food Safety Directives",
      "citation": "Food preserved continuously at 0°F remains microbiologically safe indefinitely; storage recommendations reflect peak sensory quality."
    },
    "applianceSpecs": {
      "parameter": "0°F Operating Range & Headspace Management",
      "guideline": "Maintain freezer at 0°F (-18°C) or colder; leave 0.5–1 inch headspace for liquid-containing foods to accommodate ice expansion."
    }
  },
  "mushroom": {
    "materialThermal": {
      "property": "Eutectic Freezing & Moisture Sublimation Threshold",
      "threshold": "Microbial Dormancy <=0°F (-18°C); Ice Crystal Phase Point 32°F",
      "details": "Deep freezing halts all bacterial, yeast, and mold proliferation by immobilizing liquid water into crystalline solid state."
    },
    "safetyStandard": {
      "organization": "USDA FSIS",
      "standard": "FSIS Freezing and Food Safety Directives",
      "citation": "Food preserved continuously at 0°F remains microbiologically safe indefinitely; storage recommendations reflect peak sensory quality."
    },
    "applianceSpecs": {
      "parameter": "0°F Operating Range & Headspace Management",
      "guideline": "Maintain freezer at 0°F (-18°C) or colder; leave 0.5–1 inch headspace for liquid-containing foods to accommodate ice expansion."
    }
  },
  "ginger": {
    "materialThermal": {
      "property": "Eutectic Freezing & Moisture Sublimation Threshold",
      "threshold": "Microbial Dormancy <=0°F (-18°C); Ice Crystal Phase Point 32°F",
      "details": "Deep freezing halts all bacterial, yeast, and mold proliferation by immobilizing liquid water into crystalline solid state."
    },
    "safetyStandard": {
      "organization": "USDA FSIS",
      "standard": "FSIS Freezing and Food Safety Directives",
      "citation": "Food preserved continuously at 0°F remains microbiologically safe indefinitely; storage recommendations reflect peak sensory quality."
    },
    "applianceSpecs": {
      "parameter": "0°F Operating Range & Headspace Management",
      "guideline": "Maintain freezer at 0°F (-18°C) or colder; leave 0.5–1 inch headspace for liquid-containing foods to accommodate ice expansion."
    }
  },
  "lemon": {
    "materialThermal": {
      "property": "Eutectic Freezing & Moisture Sublimation Threshold",
      "threshold": "Microbial Dormancy <=0°F (-18°C); Ice Crystal Phase Point 32°F",
      "details": "Deep freezing halts all bacterial, yeast, and mold proliferation by immobilizing liquid water into crystalline solid state."
    },
    "safetyStandard": {
      "organization": "USDA FSIS",
      "standard": "FSIS Freezing and Food Safety Directives",
      "citation": "Food preserved continuously at 0°F remains microbiologically safe indefinitely; storage recommendations reflect peak sensory quality."
    },
    "applianceSpecs": {
      "parameter": "0°F Operating Range & Headspace Management",
      "guideline": "Maintain freezer at 0°F (-18°C) or colder; leave 0.5–1 inch headspace for liquid-containing foods to accommodate ice expansion."
    }
  },
  "lime": {
    "materialThermal": {
      "property": "Eutectic Freezing & Moisture Sublimation Threshold",
      "threshold": "Microbial Dormancy <=0°F (-18°C); Ice Crystal Phase Point 32°F",
      "details": "Deep freezing halts all bacterial, yeast, and mold proliferation by immobilizing liquid water into crystalline solid state."
    },
    "safetyStandard": {
      "organization": "USDA FSIS",
      "standard": "FSIS Freezing and Food Safety Directives",
      "citation": "Food preserved continuously at 0°F remains microbiologically safe indefinitely; storage recommendations reflect peak sensory quality."
    },
    "applianceSpecs": {
      "parameter": "0°F Operating Range & Headspace Management",
      "guideline": "Maintain freezer at 0°F (-18°C) or colder; leave 0.5–1 inch headspace for liquid-containing foods to accommodate ice expansion."
    }
  },
  "white-rice": {
    "materialThermal": {
      "property": "Starch Retrogradation Arrest & Ice Sublimation",
      "threshold": "Retrogradation Arrested at <=0°F (-18°C); Freezing Point ~25°F",
      "details": "Sub-zero temperatures freeze water molecules in place, completely halting amylopectin retrogradation and preserving bread freshness without staling."
    },
    "safetyStandard": {
      "organization": "USDA ARS / AIB",
      "standard": "AIB International Bakery Science Freezing Guide",
      "citation": "Bread and baked goods freeze with near-perfect quality retention for 3–6 months at 0°F."
    },
    "applianceSpecs": {
      "parameter": "Air-Purged Vapor Barrier Protocol",
      "guideline": "Slice bread before freezing and seal tightly in heavy plastic freezer bags, pressing out all excess air to prevent ice crystal glaze."
    }
  },
  "brown-rice": {
    "materialThermal": {
      "property": "Starch Retrogradation Arrest & Ice Sublimation",
      "threshold": "Retrogradation Arrested at <=0°F (-18°C); Freezing Point ~25°F",
      "details": "Sub-zero temperatures freeze water molecules in place, completely halting amylopectin retrogradation and preserving bread freshness without staling."
    },
    "safetyStandard": {
      "organization": "USDA ARS / AIB",
      "standard": "AIB International Bakery Science Freezing Guide",
      "citation": "Bread and baked goods freeze with near-perfect quality retention for 3–6 months at 0°F."
    },
    "applianceSpecs": {
      "parameter": "Air-Purged Vapor Barrier Protocol",
      "guideline": "Slice bread before freezing and seal tightly in heavy plastic freezer bags, pressing out all excess air to prevent ice crystal glaze."
    }
  },
  "quinoa": {
    "materialThermal": {
      "property": "Eutectic Freezing & Moisture Sublimation Threshold",
      "threshold": "Microbial Dormancy <=0°F (-18°C); Ice Crystal Phase Point 32°F",
      "details": "Deep freezing halts all bacterial, yeast, and mold proliferation by immobilizing liquid water into crystalline solid state."
    },
    "safetyStandard": {
      "organization": "USDA FSIS",
      "standard": "FSIS Freezing and Food Safety Directives",
      "citation": "Food preserved continuously at 0°F remains microbiologically safe indefinitely; storage recommendations reflect peak sensory quality."
    },
    "applianceSpecs": {
      "parameter": "0°F Operating Range & Headspace Management",
      "guideline": "Maintain freezer at 0°F (-18°C) or colder; leave 0.5–1 inch headspace for liquid-containing foods to accommodate ice expansion."
    }
  },
  "lentils": {
    "materialThermal": {
      "property": "Eutectic Freezing & Moisture Sublimation Threshold",
      "threshold": "Microbial Dormancy <=0°F (-18°C); Ice Crystal Phase Point 32°F",
      "details": "Deep freezing halts all bacterial, yeast, and mold proliferation by immobilizing liquid water into crystalline solid state."
    },
    "safetyStandard": {
      "organization": "USDA FSIS",
      "standard": "FSIS Freezing and Food Safety Directives",
      "citation": "Food preserved continuously at 0°F remains microbiologically safe indefinitely; storage recommendations reflect peak sensory quality."
    },
    "applianceSpecs": {
      "parameter": "0°F Operating Range & Headspace Management",
      "guideline": "Maintain freezer at 0°F (-18°C) or colder; leave 0.5–1 inch headspace for liquid-containing foods to accommodate ice expansion."
    }
  },
  "oatmeal": {
    "materialThermal": {
      "property": "Eutectic Freezing & Moisture Sublimation Threshold",
      "threshold": "Microbial Dormancy <=0°F (-18°C); Ice Crystal Phase Point 32°F",
      "details": "Deep freezing halts all bacterial, yeast, and mold proliferation by immobilizing liquid water into crystalline solid state."
    },
    "safetyStandard": {
      "organization": "USDA FSIS",
      "standard": "FSIS Freezing and Food Safety Directives",
      "citation": "Food preserved continuously at 0°F remains microbiologically safe indefinitely; storage recommendations reflect peak sensory quality."
    },
    "applianceSpecs": {
      "parameter": "0°F Operating Range & Headspace Management",
      "guideline": "Maintain freezer at 0°F (-18°C) or colder; leave 0.5–1 inch headspace for liquid-containing foods to accommodate ice expansion."
    }
  },
  "spaghetti": {
    "materialThermal": {
      "property": "Eutectic Freezing & Moisture Sublimation Threshold",
      "threshold": "Microbial Dormancy <=0°F (-18°C); Ice Crystal Phase Point 32°F",
      "details": "Deep freezing halts all bacterial, yeast, and mold proliferation by immobilizing liquid water into crystalline solid state."
    },
    "safetyStandard": {
      "organization": "USDA FSIS",
      "standard": "FSIS Freezing and Food Safety Directives",
      "citation": "Food preserved continuously at 0°F remains microbiologically safe indefinitely; storage recommendations reflect peak sensory quality."
    },
    "applianceSpecs": {
      "parameter": "0°F Operating Range & Headspace Management",
      "guideline": "Maintain freezer at 0°F (-18°C) or colder; leave 0.5–1 inch headspace for liquid-containing foods to accommodate ice expansion."
    }
  },
  "macaroni": {
    "materialThermal": {
      "property": "Eutectic Freezing & Moisture Sublimation Threshold",
      "threshold": "Microbial Dormancy <=0°F (-18°C); Ice Crystal Phase Point 32°F",
      "details": "Deep freezing halts all bacterial, yeast, and mold proliferation by immobilizing liquid water into crystalline solid state."
    },
    "safetyStandard": {
      "organization": "USDA FSIS",
      "standard": "FSIS Freezing and Food Safety Directives",
      "citation": "Food preserved continuously at 0°F remains microbiologically safe indefinitely; storage recommendations reflect peak sensory quality."
    },
    "applianceSpecs": {
      "parameter": "0°F Operating Range & Headspace Management",
      "guideline": "Maintain freezer at 0°F (-18°C) or colder; leave 0.5–1 inch headspace for liquid-containing foods to accommodate ice expansion."
    }
  },
  "white-bread": {
    "materialThermal": {
      "property": "Starch Retrogradation Arrest & Ice Sublimation",
      "threshold": "Retrogradation Arrested at <=0°F (-18°C); Freezing Point ~25°F",
      "details": "Sub-zero temperatures freeze water molecules in place, completely halting amylopectin retrogradation and preserving bread freshness without staling."
    },
    "safetyStandard": {
      "organization": "USDA ARS / AIB",
      "standard": "AIB International Bakery Science Freezing Guide",
      "citation": "Bread and baked goods freeze with near-perfect quality retention for 3–6 months at 0°F."
    },
    "applianceSpecs": {
      "parameter": "Air-Purged Vapor Barrier Protocol",
      "guideline": "Slice bread before freezing and seal tightly in heavy plastic freezer bags, pressing out all excess air to prevent ice crystal glaze."
    }
  },
  "whole-wheat-bread": {
    "materialThermal": {
      "property": "Starch Retrogradation Arrest & Ice Sublimation",
      "threshold": "Retrogradation Arrested at <=0°F (-18°C); Freezing Point ~25°F",
      "details": "Sub-zero temperatures freeze water molecules in place, completely halting amylopectin retrogradation and preserving bread freshness without staling."
    },
    "safetyStandard": {
      "organization": "USDA ARS / AIB",
      "standard": "AIB International Bakery Science Freezing Guide",
      "citation": "Bread and baked goods freeze with near-perfect quality retention for 3–6 months at 0°F."
    },
    "applianceSpecs": {
      "parameter": "Air-Purged Vapor Barrier Protocol",
      "guideline": "Slice bread before freezing and seal tightly in heavy plastic freezer bags, pressing out all excess air to prevent ice crystal glaze."
    }
  },
  "sourdough-bread": {
    "materialThermal": {
      "property": "Starch Retrogradation Arrest & Ice Sublimation",
      "threshold": "Retrogradation Arrested at <=0°F (-18°C); Freezing Point ~25°F",
      "details": "Sub-zero temperatures freeze water molecules in place, completely halting amylopectin retrogradation and preserving bread freshness without staling."
    },
    "safetyStandard": {
      "organization": "USDA ARS / AIB",
      "standard": "AIB International Bakery Science Freezing Guide",
      "citation": "Bread and baked goods freeze with near-perfect quality retention for 3–6 months at 0°F."
    },
    "applianceSpecs": {
      "parameter": "Air-Purged Vapor Barrier Protocol",
      "guideline": "Slice bread before freezing and seal tightly in heavy plastic freezer bags, pressing out all excess air to prevent ice crystal glaze."
    }
  },
  "croissant": {
    "materialThermal": {
      "property": "Eutectic Freezing & Moisture Sublimation Threshold",
      "threshold": "Microbial Dormancy <=0°F (-18°C); Ice Crystal Phase Point 32°F",
      "details": "Deep freezing halts all bacterial, yeast, and mold proliferation by immobilizing liquid water into crystalline solid state."
    },
    "safetyStandard": {
      "organization": "USDA FSIS",
      "standard": "FSIS Freezing and Food Safety Directives",
      "citation": "Food preserved continuously at 0°F remains microbiologically safe indefinitely; storage recommendations reflect peak sensory quality."
    },
    "applianceSpecs": {
      "parameter": "0°F Operating Range & Headspace Management",
      "guideline": "Maintain freezer at 0°F (-18°C) or colder; leave 0.5–1 inch headspace for liquid-containing foods to accommodate ice expansion."
    }
  },
  "bagel": {
    "materialThermal": {
      "property": "Starch Retrogradation Arrest & Ice Sublimation",
      "threshold": "Retrogradation Arrested at <=0°F (-18°C); Freezing Point ~25°F",
      "details": "Sub-zero temperatures freeze water molecules in place, completely halting amylopectin retrogradation and preserving bread freshness without staling."
    },
    "safetyStandard": {
      "organization": "USDA ARS / AIB",
      "standard": "AIB International Bakery Science Freezing Guide",
      "citation": "Bread and baked goods freeze with near-perfect quality retention for 3–6 months at 0°F."
    },
    "applianceSpecs": {
      "parameter": "Air-Purged Vapor Barrier Protocol",
      "guideline": "Slice bread before freezing and seal tightly in heavy plastic freezer bags, pressing out all excess air to prevent ice crystal glaze."
    }
  },
  "pita-bread": {
    "materialThermal": {
      "property": "Starch Retrogradation Arrest & Ice Sublimation",
      "threshold": "Retrogradation Arrested at <=0°F (-18°C); Freezing Point ~25°F",
      "details": "Sub-zero temperatures freeze water molecules in place, completely halting amylopectin retrogradation and preserving bread freshness without staling."
    },
    "safetyStandard": {
      "organization": "USDA ARS / AIB",
      "standard": "AIB International Bakery Science Freezing Guide",
      "citation": "Bread and baked goods freeze with near-perfect quality retention for 3–6 months at 0°F."
    },
    "applianceSpecs": {
      "parameter": "Air-Purged Vapor Barrier Protocol",
      "guideline": "Slice bread before freezing and seal tightly in heavy plastic freezer bags, pressing out all excess air to prevent ice crystal glaze."
    }
  },
  "tortilla": {
    "materialThermal": {
      "property": "Starch Retrogradation Arrest & Ice Sublimation",
      "threshold": "Retrogradation Arrested at <=0°F (-18°C); Freezing Point ~25°F",
      "details": "Sub-zero temperatures freeze water molecules in place, completely halting amylopectin retrogradation and preserving bread freshness without staling."
    },
    "safetyStandard": {
      "organization": "USDA ARS / AIB",
      "standard": "AIB International Bakery Science Freezing Guide",
      "citation": "Bread and baked goods freeze with near-perfect quality retention for 3–6 months at 0°F."
    },
    "applianceSpecs": {
      "parameter": "Air-Purged Vapor Barrier Protocol",
      "guideline": "Slice bread before freezing and seal tightly in heavy plastic freezer bags, pressing out all excess air to prevent ice crystal glaze."
    }
  },
  "pizza-dough": {
    "materialThermal": {
      "property": "Starch Retrogradation Arrest & Ice Sublimation",
      "threshold": "Retrogradation Arrested at <=0°F (-18°C); Freezing Point ~25°F",
      "details": "Sub-zero temperatures freeze water molecules in place, completely halting amylopectin retrogradation and preserving bread freshness without staling."
    },
    "safetyStandard": {
      "organization": "USDA ARS / AIB",
      "standard": "AIB International Bakery Science Freezing Guide",
      "citation": "Bread and baked goods freeze with near-perfect quality retention for 3–6 months at 0°F."
    },
    "applianceSpecs": {
      "parameter": "Air-Purged Vapor Barrier Protocol",
      "guideline": "Slice bread before freezing and seal tightly in heavy plastic freezer bags, pressing out all excess air to prevent ice crystal glaze."
    }
  },
  "cookie-dough": {
    "materialThermal": {
      "property": "Starch Retrogradation Arrest & Ice Sublimation",
      "threshold": "Retrogradation Arrested at <=0°F (-18°C); Freezing Point ~25°F",
      "details": "Sub-zero temperatures freeze water molecules in place, completely halting amylopectin retrogradation and preserving bread freshness without staling."
    },
    "safetyStandard": {
      "organization": "USDA ARS / AIB",
      "standard": "AIB International Bakery Science Freezing Guide",
      "citation": "Bread and baked goods freeze with near-perfect quality retention for 3–6 months at 0°F."
    },
    "applianceSpecs": {
      "parameter": "Air-Purged Vapor Barrier Protocol",
      "guideline": "Slice bread before freezing and seal tightly in heavy plastic freezer bags, pressing out all excess air to prevent ice crystal glaze."
    }
  },
  "chocolate-chip-cookies": {
    "materialThermal": {
      "property": "Eutectic Freezing & Moisture Sublimation Threshold",
      "threshold": "Microbial Dormancy <=0°F (-18°C); Ice Crystal Phase Point 32°F",
      "details": "Deep freezing halts all bacterial, yeast, and mold proliferation by immobilizing liquid water into crystalline solid state."
    },
    "safetyStandard": {
      "organization": "USDA FSIS",
      "standard": "FSIS Freezing and Food Safety Directives",
      "citation": "Food preserved continuously at 0°F remains microbiologically safe indefinitely; storage recommendations reflect peak sensory quality."
    },
    "applianceSpecs": {
      "parameter": "0°F Operating Range & Headspace Management",
      "guideline": "Maintain freezer at 0°F (-18°C) or colder; leave 0.5–1 inch headspace for liquid-containing foods to accommodate ice expansion."
    }
  },
  "muffin": {
    "materialThermal": {
      "property": "Starch Retrogradation Arrest & Ice Sublimation",
      "threshold": "Retrogradation Arrested at <=0°F (-18°C); Freezing Point ~25°F",
      "details": "Sub-zero temperatures freeze water molecules in place, completely halting amylopectin retrogradation and preserving bread freshness without staling."
    },
    "safetyStandard": {
      "organization": "USDA ARS / AIB",
      "standard": "AIB International Bakery Science Freezing Guide",
      "citation": "Bread and baked goods freeze with near-perfect quality retention for 3–6 months at 0°F."
    },
    "applianceSpecs": {
      "parameter": "Air-Purged Vapor Barrier Protocol",
      "guideline": "Slice bread before freezing and seal tightly in heavy plastic freezer bags, pressing out all excess air to prevent ice crystal glaze."
    }
  },
  "pie": {
    "materialThermal": {
      "property": "Eutectic Freezing & Moisture Sublimation Threshold",
      "threshold": "Microbial Dormancy <=0°F (-18°C); Ice Crystal Phase Point 32°F",
      "details": "Deep freezing halts all bacterial, yeast, and mold proliferation by immobilizing liquid water into crystalline solid state."
    },
    "safetyStandard": {
      "organization": "USDA FSIS",
      "standard": "FSIS Freezing and Food Safety Directives",
      "citation": "Food preserved continuously at 0°F remains microbiologically safe indefinitely; storage recommendations reflect peak sensory quality."
    },
    "applianceSpecs": {
      "parameter": "0°F Operating Range & Headspace Management",
      "guideline": "Maintain freezer at 0°F (-18°C) or colder; leave 0.5–1 inch headspace for liquid-containing foods to accommodate ice expansion."
    }
  },
  "brownie": {
    "materialThermal": {
      "property": "Eutectic Freezing & Moisture Sublimation Threshold",
      "threshold": "Microbial Dormancy <=0°F (-18°C); Ice Crystal Phase Point 32°F",
      "details": "Deep freezing halts all bacterial, yeast, and mold proliferation by immobilizing liquid water into crystalline solid state."
    },
    "safetyStandard": {
      "organization": "USDA FSIS",
      "standard": "FSIS Freezing and Food Safety Directives",
      "citation": "Food preserved continuously at 0°F remains microbiologically safe indefinitely; storage recommendations reflect peak sensory quality."
    },
    "applianceSpecs": {
      "parameter": "0°F Operating Range & Headspace Management",
      "guideline": "Maintain freezer at 0°F (-18°C) or colder; leave 0.5–1 inch headspace for liquid-containing foods to accommodate ice expansion."
    }
  },
  "maple-syrup": {
    "materialThermal": {
      "property": "Eutectic Freezing & Moisture Sublimation Threshold",
      "threshold": "Microbial Dormancy <=0°F (-18°C); Ice Crystal Phase Point 32°F",
      "details": "Deep freezing halts all bacterial, yeast, and mold proliferation by immobilizing liquid water into crystalline solid state."
    },
    "safetyStandard": {
      "organization": "USDA FSIS",
      "standard": "FSIS Freezing and Food Safety Directives",
      "citation": "Food preserved continuously at 0°F remains microbiologically safe indefinitely; storage recommendations reflect peak sensory quality."
    },
    "applianceSpecs": {
      "parameter": "0°F Operating Range & Headspace Management",
      "guideline": "Maintain freezer at 0°F (-18°C) or colder; leave 0.5–1 inch headspace for liquid-containing foods to accommodate ice expansion."
    }
  },
  "olive-oil": {
    "materialThermal": {
      "property": "Eutectic Freezing & Moisture Sublimation Threshold",
      "threshold": "Microbial Dormancy <=0°F (-18°C); Ice Crystal Phase Point 32°F",
      "details": "Deep freezing halts all bacterial, yeast, and mold proliferation by immobilizing liquid water into crystalline solid state."
    },
    "safetyStandard": {
      "organization": "USDA FSIS",
      "standard": "FSIS Freezing and Food Safety Directives",
      "citation": "Food preserved continuously at 0°F remains microbiologically safe indefinitely; storage recommendations reflect peak sensory quality."
    },
    "applianceSpecs": {
      "parameter": "0°F Operating Range & Headspace Management",
      "guideline": "Maintain freezer at 0°F (-18°C) or colder; leave 0.5–1 inch headspace for liquid-containing foods to accommodate ice expansion."
    }
  },
  "vegetable-oil": {
    "materialThermal": {
      "property": "Eutectic Freezing & Moisture Sublimation Threshold",
      "threshold": "Microbial Dormancy <=0°F (-18°C); Ice Crystal Phase Point 32°F",
      "details": "Deep freezing halts all bacterial, yeast, and mold proliferation by immobilizing liquid water into crystalline solid state."
    },
    "safetyStandard": {
      "organization": "USDA FSIS",
      "standard": "FSIS Freezing and Food Safety Directives",
      "citation": "Food preserved continuously at 0°F remains microbiologically safe indefinitely; storage recommendations reflect peak sensory quality."
    },
    "applianceSpecs": {
      "parameter": "0°F Operating Range & Headspace Management",
      "guideline": "Maintain freezer at 0°F (-18°C) or colder; leave 0.5–1 inch headspace for liquid-containing foods to accommodate ice expansion."
    }
  },
  "coconut-oil": {
    "materialThermal": {
      "property": "Eutectic Freezing & Moisture Sublimation Threshold",
      "threshold": "Microbial Dormancy <=0°F (-18°C); Ice Crystal Phase Point 32°F",
      "details": "Deep freezing halts all bacterial, yeast, and mold proliferation by immobilizing liquid water into crystalline solid state."
    },
    "safetyStandard": {
      "organization": "USDA FSIS",
      "standard": "FSIS Freezing and Food Safety Directives",
      "citation": "Food preserved continuously at 0°F remains microbiologically safe indefinitely; storage recommendations reflect peak sensory quality."
    },
    "applianceSpecs": {
      "parameter": "0°F Operating Range & Headspace Management",
      "guideline": "Maintain freezer at 0°F (-18°C) or colder; leave 0.5–1 inch headspace for liquid-containing foods to accommodate ice expansion."
    }
  },
  "almond-butter": {
    "materialThermal": {
      "property": "Lipid-Water Emulsion Destabilization & Syneresis",
      "threshold": "Phase Separation begins at 31°F (-0.5°C)",
      "details": "Ice crystal formation disrupts casein micelle bridges and destabilizes fat globule membranes, causing permanent whey separation (curdling) when thawed."
    },
    "safetyStandard": {
      "organization": "FDA",
      "standard": "21 CFR § 131 / FDA Food Science Guidelines",
      "citation": "Freezing dairy products halts bacterial action but alters physical rheology; thawed emulsion products are best reserved for cooking/baking."
    },
    "applianceSpecs": {
      "parameter": "Headspace Allowance & Thaw Protocol",
      "guideline": "Leave 1–2 inches of headspace in milk jugs to accommodate 9% volumetric expansion; thaw strictly in the refrigerator at 35°F–38°F."
    }
  },
  "nutella": {
    "materialThermal": {
      "property": "Eutectic Freezing & Moisture Sublimation Threshold",
      "threshold": "Microbial Dormancy <=0°F (-18°C); Ice Crystal Phase Point 32°F",
      "details": "Deep freezing halts all bacterial, yeast, and mold proliferation by immobilizing liquid water into crystalline solid state."
    },
    "safetyStandard": {
      "organization": "USDA FSIS",
      "standard": "FSIS Freezing and Food Safety Directives",
      "citation": "Food preserved continuously at 0°F remains microbiologically safe indefinitely; storage recommendations reflect peak sensory quality."
    },
    "applianceSpecs": {
      "parameter": "0°F Operating Range & Headspace Management",
      "guideline": "Maintain freezer at 0°F (-18°C) or colder; leave 0.5–1 inch headspace for liquid-containing foods to accommodate ice expansion."
    }
  },
  "jam": {
    "materialThermal": {
      "property": "Eutectic Freezing & Moisture Sublimation Threshold",
      "threshold": "Microbial Dormancy <=0°F (-18°C); Ice Crystal Phase Point 32°F",
      "details": "Deep freezing halts all bacterial, yeast, and mold proliferation by immobilizing liquid water into crystalline solid state."
    },
    "safetyStandard": {
      "organization": "USDA FSIS",
      "standard": "FSIS Freezing and Food Safety Directives",
      "citation": "Food preserved continuously at 0°F remains microbiologically safe indefinitely; storage recommendations reflect peak sensory quality."
    },
    "applianceSpecs": {
      "parameter": "0°F Operating Range & Headspace Management",
      "guideline": "Maintain freezer at 0°F (-18°C) or colder; leave 0.5–1 inch headspace for liquid-containing foods to accommodate ice expansion."
    }
  },
  "jelly": {
    "materialThermal": {
      "property": "Eutectic Freezing & Moisture Sublimation Threshold",
      "threshold": "Microbial Dormancy <=0°F (-18°C); Ice Crystal Phase Point 32°F",
      "details": "Deep freezing halts all bacterial, yeast, and mold proliferation by immobilizing liquid water into crystalline solid state."
    },
    "safetyStandard": {
      "organization": "USDA FSIS",
      "standard": "FSIS Freezing and Food Safety Directives",
      "citation": "Food preserved continuously at 0°F remains microbiologically safe indefinitely; storage recommendations reflect peak sensory quality."
    },
    "applianceSpecs": {
      "parameter": "0°F Operating Range & Headspace Management",
      "guideline": "Maintain freezer at 0°F (-18°C) or colder; leave 0.5–1 inch headspace for liquid-containing foods to accommodate ice expansion."
    }
  },
  "mayonnaise": {
    "materialThermal": {
      "property": "Lipid-Water Emulsion Destabilization & Syneresis",
      "threshold": "Phase Separation begins at 31°F (-0.5°C)",
      "details": "Ice crystal formation disrupts casein micelle bridges and destabilizes fat globule membranes, causing permanent whey separation (curdling) when thawed."
    },
    "safetyStandard": {
      "organization": "FDA",
      "standard": "21 CFR § 131 / FDA Food Science Guidelines",
      "citation": "Freezing dairy products halts bacterial action but alters physical rheology; thawed emulsion products are best reserved for cooking/baking."
    },
    "applianceSpecs": {
      "parameter": "Headspace Allowance & Thaw Protocol",
      "guideline": "Leave 1–2 inches of headspace in milk jugs to accommodate 9% volumetric expansion; thaw strictly in the refrigerator at 35°F–38°F."
    }
  },
  "soy-sauce": {
    "materialThermal": {
      "property": "Eutectic Freezing & Moisture Sublimation Threshold",
      "threshold": "Microbial Dormancy <=0°F (-18°C); Ice Crystal Phase Point 32°F",
      "details": "Deep freezing halts all bacterial, yeast, and mold proliferation by immobilizing liquid water into crystalline solid state."
    },
    "safetyStandard": {
      "organization": "USDA FSIS",
      "standard": "FSIS Freezing and Food Safety Directives",
      "citation": "Food preserved continuously at 0°F remains microbiologically safe indefinitely; storage recommendations reflect peak sensory quality."
    },
    "applianceSpecs": {
      "parameter": "0°F Operating Range & Headspace Management",
      "guideline": "Maintain freezer at 0°F (-18°C) or colder; leave 0.5–1 inch headspace for liquid-containing foods to accommodate ice expansion."
    }
  },
  "hot-sauce": {
    "materialThermal": {
      "property": "Eutectic Freezing & Moisture Sublimation Threshold",
      "threshold": "Microbial Dormancy <=0°F (-18°C); Ice Crystal Phase Point 32°F",
      "details": "Deep freezing halts all bacterial, yeast, and mold proliferation by immobilizing liquid water into crystalline solid state."
    },
    "safetyStandard": {
      "organization": "USDA FSIS",
      "standard": "FSIS Freezing and Food Safety Directives",
      "citation": "Food preserved continuously at 0°F remains microbiologically safe indefinitely; storage recommendations reflect peak sensory quality."
    },
    "applianceSpecs": {
      "parameter": "0°F Operating Range & Headspace Management",
      "guideline": "Maintain freezer at 0°F (-18°C) or colder; leave 0.5–1 inch headspace for liquid-containing foods to accommodate ice expansion."
    }
  },
  "salad-dressing": {
    "materialThermal": {
      "property": "Eutectic Freezing & Moisture Sublimation Threshold",
      "threshold": "Microbial Dormancy <=0°F (-18°C); Ice Crystal Phase Point 32°F",
      "details": "Deep freezing halts all bacterial, yeast, and mold proliferation by immobilizing liquid water into crystalline solid state."
    },
    "safetyStandard": {
      "organization": "USDA FSIS",
      "standard": "FSIS Freezing and Food Safety Directives",
      "citation": "Food preserved continuously at 0°F remains microbiologically safe indefinitely; storage recommendations reflect peak sensory quality."
    },
    "applianceSpecs": {
      "parameter": "0°F Operating Range & Headspace Management",
      "guideline": "Maintain freezer at 0°F (-18°C) or colder; leave 0.5–1 inch headspace for liquid-containing foods to accommodate ice expansion."
    }
  },
  "hummus": {
    "materialThermal": {
      "property": "Eutectic Freezing & Moisture Sublimation Threshold",
      "threshold": "Microbial Dormancy <=0°F (-18°C); Ice Crystal Phase Point 32°F",
      "details": "Deep freezing halts all bacterial, yeast, and mold proliferation by immobilizing liquid water into crystalline solid state."
    },
    "safetyStandard": {
      "organization": "USDA FSIS",
      "standard": "FSIS Freezing and Food Safety Directives",
      "citation": "Food preserved continuously at 0°F remains microbiologically safe indefinitely; storage recommendations reflect peak sensory quality."
    },
    "applianceSpecs": {
      "parameter": "0°F Operating Range & Headspace Management",
      "guideline": "Maintain freezer at 0°F (-18°C) or colder; leave 0.5–1 inch headspace for liquid-containing foods to accommodate ice expansion."
    }
  },
  "guacamole": {
    "materialThermal": {
      "property": "Eutectic Freezing & Moisture Sublimation Threshold",
      "threshold": "Microbial Dormancy <=0°F (-18°C); Ice Crystal Phase Point 32°F",
      "details": "Deep freezing halts all bacterial, yeast, and mold proliferation by immobilizing liquid water into crystalline solid state."
    },
    "safetyStandard": {
      "organization": "USDA FSIS",
      "standard": "FSIS Freezing and Food Safety Directives",
      "citation": "Food preserved continuously at 0°F remains microbiologically safe indefinitely; storage recommendations reflect peak sensory quality."
    },
    "applianceSpecs": {
      "parameter": "0°F Operating Range & Headspace Management",
      "guideline": "Maintain freezer at 0°F (-18°C) or colder; leave 0.5–1 inch headspace for liquid-containing foods to accommodate ice expansion."
    }
  },
  "salsa": {
    "materialThermal": {
      "property": "Eutectic Freezing & Moisture Sublimation Threshold",
      "threshold": "Microbial Dormancy <=0°F (-18°C); Ice Crystal Phase Point 32°F",
      "details": "Deep freezing halts all bacterial, yeast, and mold proliferation by immobilizing liquid water into crystalline solid state."
    },
    "safetyStandard": {
      "organization": "USDA FSIS",
      "standard": "FSIS Freezing and Food Safety Directives",
      "citation": "Food preserved continuously at 0°F remains microbiologically safe indefinitely; storage recommendations reflect peak sensory quality."
    },
    "applianceSpecs": {
      "parameter": "0°F Operating Range & Headspace Management",
      "guideline": "Maintain freezer at 0°F (-18°C) or colder; leave 0.5–1 inch headspace for liquid-containing foods to accommodate ice expansion."
    }
  },
  "tea": {
    "materialThermal": {
      "property": "Eutectic Freezing & Moisture Sublimation Threshold",
      "threshold": "Microbial Dormancy <=0°F (-18°C); Ice Crystal Phase Point 32°F",
      "details": "Deep freezing halts all bacterial, yeast, and mold proliferation by immobilizing liquid water into crystalline solid state."
    },
    "safetyStandard": {
      "organization": "USDA FSIS",
      "standard": "FSIS Freezing and Food Safety Directives",
      "citation": "Food preserved continuously at 0°F remains microbiologically safe indefinitely; storage recommendations reflect peak sensory quality."
    },
    "applianceSpecs": {
      "parameter": "0°F Operating Range & Headspace Management",
      "guideline": "Maintain freezer at 0°F (-18°C) or colder; leave 0.5–1 inch headspace for liquid-containing foods to accommodate ice expansion."
    }
  },
  "soda": {
    "materialThermal": {
      "property": "Phase Transition Volumetric Expansion & Burst Pressure",
      "threshold": "Water expands 9.05% upon phase change at 32°F (0°C); Burst Pressure >50 PSI",
      "details": "As water freezes into crystalline hexagonal ice, its volume expands by ~9%. In rigid sealed glass or aluminum cans, trapped CO2 and ice expansion violently rupture the container."
    },
    "safetyStandard": {
      "organization": "FDA / CPSC",
      "standard": "CPSC Container Explosion Hazard Guidance",
      "citation": "Warning against freezing sealed rigid glass or carbonated beverage containers due to violent shrapnel propulsion hazards."
    },
    "applianceSpecs": {
      "parameter": "Deep Freeze Expansion Kinetics",
      "guideline": "Standard freezers (0°F / -18°C) freeze beer and soda cans within 60–90 minutes, leading to burst seams or explosive glass fragmentation."
    }
  },
  "orange-juice": {
    "materialThermal": {
      "property": "Vacuolar Ice Crystallization & Turgor Cell Rupture",
      "threshold": "Water Crystallization 32°F (0°C); Turgor Loss upon Thaw",
      "details": "High-moisture plant tissues contain water in cellular vacuoles. Freezing forms rigid ice crystals that puncture thin cellulose cell walls, causing complete mushiness and water weeping upon thawing."
    },
    "safetyStandard": {
      "organization": "USDA ARS",
      "standard": "Agriculture Handbook No. 66 / Home Freezing Guidelines",
      "citation": "High-water produce remains microbially safe frozen at 0°F but suffers severe structural degradation; best consumed frozen in smoothies or purees."
    },
    "applianceSpecs": {
      "parameter": "Flash Freeze Tray Protocol",
      "guideline": "Spread sliced fruits on a parchment-lined baking sheet and freeze at 0°F for 2 hours before packing into airtight freezer bags to prevent clump freezing."
    }
  },
  "apple-juice": {
    "materialThermal": {
      "property": "Vacuolar Ice Crystallization & Turgor Cell Rupture",
      "threshold": "Water Crystallization 32°F (0°C); Turgor Loss upon Thaw",
      "details": "High-moisture plant tissues contain water in cellular vacuoles. Freezing forms rigid ice crystals that puncture thin cellulose cell walls, causing complete mushiness and water weeping upon thawing."
    },
    "safetyStandard": {
      "organization": "USDA ARS",
      "standard": "Agriculture Handbook No. 66 / Home Freezing Guidelines",
      "citation": "High-water produce remains microbially safe frozen at 0°F but suffers severe structural degradation; best consumed frozen in smoothies or purees."
    },
    "applianceSpecs": {
      "parameter": "Flash Freeze Tray Protocol",
      "guideline": "Spread sliced fruits on a parchment-lined baking sheet and freeze at 0°F for 2 hours before packing into airtight freezer bags to prevent clump freezing."
    }
  },
  "glass-bowl": {
    "materialThermal": {
      "property": "Eutectic Freezing & Moisture Sublimation Threshold",
      "threshold": "Microbial Dormancy <=0°F (-18°C); Ice Crystal Phase Point 32°F",
      "details": "Deep freezing halts all bacterial, yeast, and mold proliferation by immobilizing liquid water into crystalline solid state."
    },
    "safetyStandard": {
      "organization": "USDA FSIS",
      "standard": "FSIS Freezing and Food Safety Directives",
      "citation": "Food preserved continuously at 0°F remains microbiologically safe indefinitely; storage recommendations reflect peak sensory quality."
    },
    "applianceSpecs": {
      "parameter": "0°F Operating Range & Headspace Management",
      "guideline": "Maintain freezer at 0°F (-18°C) or colder; leave 0.5–1 inch headspace for liquid-containing foods to accommodate ice expansion."
    }
  },
  "ceramic-plate": {
    "materialThermal": {
      "property": "Eutectic Freezing & Moisture Sublimation Threshold",
      "threshold": "Microbial Dormancy <=0°F (-18°C); Ice Crystal Phase Point 32°F",
      "details": "Deep freezing halts all bacterial, yeast, and mold proliferation by immobilizing liquid water into crystalline solid state."
    },
    "safetyStandard": {
      "organization": "USDA FSIS",
      "standard": "FSIS Freezing and Food Safety Directives",
      "citation": "Food preserved continuously at 0°F remains microbiologically safe indefinitely; storage recommendations reflect peak sensory quality."
    },
    "applianceSpecs": {
      "parameter": "0°F Operating Range & Headspace Management",
      "guideline": "Maintain freezer at 0°F (-18°C) or colder; leave 0.5–1 inch headspace for liquid-containing foods to accommodate ice expansion."
    }
  },
  "paper-plate": {
    "materialThermal": {
      "property": "Eutectic Freezing & Moisture Sublimation Threshold",
      "threshold": "Microbial Dormancy <=0°F (-18°C); Ice Crystal Phase Point 32°F",
      "details": "Deep freezing halts all bacterial, yeast, and mold proliferation by immobilizing liquid water into crystalline solid state."
    },
    "safetyStandard": {
      "organization": "USDA FSIS",
      "standard": "FSIS Freezing and Food Safety Directives",
      "citation": "Food preserved continuously at 0°F remains microbiologically safe indefinitely; storage recommendations reflect peak sensory quality."
    },
    "applianceSpecs": {
      "parameter": "0°F Operating Range & Headspace Management",
      "guideline": "Maintain freezer at 0°F (-18°C) or colder; leave 0.5–1 inch headspace for liquid-containing foods to accommodate ice expansion."
    }
  },
  "plastic-container": {
    "materialThermal": {
      "property": "Eutectic Freezing & Moisture Sublimation Threshold",
      "threshold": "Microbial Dormancy <=0°F (-18°C); Ice Crystal Phase Point 32°F",
      "details": "Deep freezing halts all bacterial, yeast, and mold proliferation by immobilizing liquid water into crystalline solid state."
    },
    "safetyStandard": {
      "organization": "USDA FSIS",
      "standard": "FSIS Freezing and Food Safety Directives",
      "citation": "Food preserved continuously at 0°F remains microbiologically safe indefinitely; storage recommendations reflect peak sensory quality."
    },
    "applianceSpecs": {
      "parameter": "0°F Operating Range & Headspace Management",
      "guideline": "Maintain freezer at 0°F (-18°C) or colder; leave 0.5–1 inch headspace for liquid-containing foods to accommodate ice expansion."
    }
  },
  "styrofoam-cup": {
    "materialThermal": {
      "property": "Eutectic Freezing & Moisture Sublimation Threshold",
      "threshold": "Microbial Dormancy <=0°F (-18°C); Ice Crystal Phase Point 32°F",
      "details": "Deep freezing halts all bacterial, yeast, and mold proliferation by immobilizing liquid water into crystalline solid state."
    },
    "safetyStandard": {
      "organization": "USDA FSIS",
      "standard": "FSIS Freezing and Food Safety Directives",
      "citation": "Food preserved continuously at 0°F remains microbiologically safe indefinitely; storage recommendations reflect peak sensory quality."
    },
    "applianceSpecs": {
      "parameter": "0°F Operating Range & Headspace Management",
      "guideline": "Maintain freezer at 0°F (-18°C) or colder; leave 0.5–1 inch headspace for liquid-containing foods to accommodate ice expansion."
    }
  },
  "aluminum-foil": {
    "materialThermal": {
      "property": "Eutectic Freezing & Moisture Sublimation Threshold",
      "threshold": "Microbial Dormancy <=0°F (-18°C); Ice Crystal Phase Point 32°F",
      "details": "Deep freezing halts all bacterial, yeast, and mold proliferation by immobilizing liquid water into crystalline solid state."
    },
    "safetyStandard": {
      "organization": "USDA FSIS",
      "standard": "FSIS Freezing and Food Safety Directives",
      "citation": "Food preserved continuously at 0°F remains microbiologically safe indefinitely; storage recommendations reflect peak sensory quality."
    },
    "applianceSpecs": {
      "parameter": "0°F Operating Range & Headspace Management",
      "guideline": "Maintain freezer at 0°F (-18°C) or colder; leave 0.5–1 inch headspace for liquid-containing foods to accommodate ice expansion."
    }
  },
  "stainless-steel-pan": {
    "materialThermal": {
      "property": "Eutectic Freezing & Moisture Sublimation Threshold",
      "threshold": "Microbial Dormancy <=0°F (-18°C); Ice Crystal Phase Point 32°F",
      "details": "Deep freezing halts all bacterial, yeast, and mold proliferation by immobilizing liquid water into crystalline solid state."
    },
    "safetyStandard": {
      "organization": "USDA FSIS",
      "standard": "FSIS Freezing and Food Safety Directives",
      "citation": "Food preserved continuously at 0°F remains microbiologically safe indefinitely; storage recommendations reflect peak sensory quality."
    },
    "applianceSpecs": {
      "parameter": "0°F Operating Range & Headspace Management",
      "guideline": "Maintain freezer at 0°F (-18°C) or colder; leave 0.5–1 inch headspace for liquid-containing foods to accommodate ice expansion."
    }
  },
  "cast-iron-skillet": {
    "materialThermal": {
      "property": "Eutectic Freezing & Moisture Sublimation Threshold",
      "threshold": "Microbial Dormancy <=0°F (-18°C); Ice Crystal Phase Point 32°F",
      "details": "Deep freezing halts all bacterial, yeast, and mold proliferation by immobilizing liquid water into crystalline solid state."
    },
    "safetyStandard": {
      "organization": "USDA FSIS",
      "standard": "FSIS Freezing and Food Safety Directives",
      "citation": "Food preserved continuously at 0°F remains microbiologically safe indefinitely; storage recommendations reflect peak sensory quality."
    },
    "applianceSpecs": {
      "parameter": "0°F Operating Range & Headspace Management",
      "guideline": "Maintain freezer at 0°F (-18°C) or colder; leave 0.5–1 inch headspace for liquid-containing foods to accommodate ice expansion."
    }
  },
  "copper-mug": {
    "materialThermal": {
      "property": "Eutectic Freezing & Moisture Sublimation Threshold",
      "threshold": "Microbial Dormancy <=0°F (-18°C); Ice Crystal Phase Point 32°F",
      "details": "Deep freezing halts all bacterial, yeast, and mold proliferation by immobilizing liquid water into crystalline solid state."
    },
    "safetyStandard": {
      "organization": "USDA FSIS",
      "standard": "FSIS Freezing and Food Safety Directives",
      "citation": "Food preserved continuously at 0°F remains microbiologically safe indefinitely; storage recommendations reflect peak sensory quality."
    },
    "applianceSpecs": {
      "parameter": "0°F Operating Range & Headspace Management",
      "guideline": "Maintain freezer at 0°F (-18°C) or colder; leave 0.5–1 inch headspace for liquid-containing foods to accommodate ice expansion."
    }
  },
  "wooden-spoon": {
    "materialThermal": {
      "property": "Eutectic Freezing & Moisture Sublimation Threshold",
      "threshold": "Microbial Dormancy <=0°F (-18°C); Ice Crystal Phase Point 32°F",
      "details": "Deep freezing halts all bacterial, yeast, and mold proliferation by immobilizing liquid water into crystalline solid state."
    },
    "safetyStandard": {
      "organization": "USDA FSIS",
      "standard": "FSIS Freezing and Food Safety Directives",
      "citation": "Food preserved continuously at 0°F remains microbiologically safe indefinitely; storage recommendations reflect peak sensory quality."
    },
    "applianceSpecs": {
      "parameter": "0°F Operating Range & Headspace Management",
      "guideline": "Maintain freezer at 0°F (-18°C) or colder; leave 0.5–1 inch headspace for liquid-containing foods to accommodate ice expansion."
    }
  },
  "wooden-cutting-board": {
    "materialThermal": {
      "property": "Eutectic Freezing & Moisture Sublimation Threshold",
      "threshold": "Microbial Dormancy <=0°F (-18°C); Ice Crystal Phase Point 32°F",
      "details": "Deep freezing halts all bacterial, yeast, and mold proliferation by immobilizing liquid water into crystalline solid state."
    },
    "safetyStandard": {
      "organization": "USDA FSIS",
      "standard": "FSIS Freezing and Food Safety Directives",
      "citation": "Food preserved continuously at 0°F remains microbiologically safe indefinitely; storage recommendations reflect peak sensory quality."
    },
    "applianceSpecs": {
      "parameter": "0°F Operating Range & Headspace Management",
      "guideline": "Maintain freezer at 0°F (-18°C) or colder; leave 0.5–1 inch headspace for liquid-containing foods to accommodate ice expansion."
    }
  },
  "silicone-spatula": {
    "materialThermal": {
      "property": "Eutectic Freezing & Moisture Sublimation Threshold",
      "threshold": "Microbial Dormancy <=0°F (-18°C); Ice Crystal Phase Point 32°F",
      "details": "Deep freezing halts all bacterial, yeast, and mold proliferation by immobilizing liquid water into crystalline solid state."
    },
    "safetyStandard": {
      "organization": "USDA FSIS",
      "standard": "FSIS Freezing and Food Safety Directives",
      "citation": "Food preserved continuously at 0°F remains microbiologically safe indefinitely; storage recommendations reflect peak sensory quality."
    },
    "applianceSpecs": {
      "parameter": "0°F Operating Range & Headspace Management",
      "guideline": "Maintain freezer at 0°F (-18°C) or colder; leave 0.5–1 inch headspace for liquid-containing foods to accommodate ice expansion."
    }
  },
  "mason-jar": {
    "materialThermal": {
      "property": "Eutectic Freezing & Moisture Sublimation Threshold",
      "threshold": "Microbial Dormancy <=0°F (-18°C); Ice Crystal Phase Point 32°F",
      "details": "Deep freezing halts all bacterial, yeast, and mold proliferation by immobilizing liquid water into crystalline solid state."
    },
    "safetyStandard": {
      "organization": "USDA FSIS",
      "standard": "FSIS Freezing and Food Safety Directives",
      "citation": "Food preserved continuously at 0°F remains microbiologically safe indefinitely; storage recommendations reflect peak sensory quality."
    },
    "applianceSpecs": {
      "parameter": "0°F Operating Range & Headspace Management",
      "guideline": "Maintain freezer at 0°F (-18°C) or colder; leave 0.5–1 inch headspace for liquid-containing foods to accommodate ice expansion."
    }
  },
  "ziploc-bag": {
    "materialThermal": {
      "property": "Eutectic Freezing & Moisture Sublimation Threshold",
      "threshold": "Microbial Dormancy <=0°F (-18°C); Ice Crystal Phase Point 32°F",
      "details": "Deep freezing halts all bacterial, yeast, and mold proliferation by immobilizing liquid water into crystalline solid state."
    },
    "safetyStandard": {
      "organization": "USDA FSIS",
      "standard": "FSIS Freezing and Food Safety Directives",
      "citation": "Food preserved continuously at 0°F remains microbiologically safe indefinitely; storage recommendations reflect peak sensory quality."
    },
    "applianceSpecs": {
      "parameter": "0°F Operating Range & Headspace Management",
      "guideline": "Maintain freezer at 0°F (-18°C) or colder; leave 0.5–1 inch headspace for liquid-containing foods to accommodate ice expansion."
    }
  },
  "tupperware": {
    "materialThermal": {
      "property": "Eutectic Freezing & Moisture Sublimation Threshold",
      "threshold": "Microbial Dormancy <=0°F (-18°C); Ice Crystal Phase Point 32°F",
      "details": "Deep freezing halts all bacterial, yeast, and mold proliferation by immobilizing liquid water into crystalline solid state."
    },
    "safetyStandard": {
      "organization": "USDA FSIS",
      "standard": "FSIS Freezing and Food Safety Directives",
      "citation": "Food preserved continuously at 0°F remains microbiologically safe indefinitely; storage recommendations reflect peak sensory quality."
    },
    "applianceSpecs": {
      "parameter": "0°F Operating Range & Headspace Management",
      "guideline": "Maintain freezer at 0°F (-18°C) or colder; leave 0.5–1 inch headspace for liquid-containing foods to accommodate ice expansion."
    }
  },
  "bento-box": {
    "materialThermal": {
      "property": "Eutectic Freezing & Moisture Sublimation Threshold",
      "threshold": "Microbial Dormancy <=0°F (-18°C); Ice Crystal Phase Point 32°F",
      "details": "Deep freezing halts all bacterial, yeast, and mold proliferation by immobilizing liquid water into crystalline solid state."
    },
    "safetyStandard": {
      "organization": "USDA FSIS",
      "standard": "FSIS Freezing and Food Safety Directives",
      "citation": "Food preserved continuously at 0°F remains microbiologically safe indefinitely; storage recommendations reflect peak sensory quality."
    },
    "applianceSpecs": {
      "parameter": "0°F Operating Range & Headspace Management",
      "guideline": "Maintain freezer at 0°F (-18°C) or colder; leave 0.5–1 inch headspace for liquid-containing foods to accommodate ice expansion."
    }
  },
  "wine-glass": {
    "materialThermal": {
      "property": "Phase Transition Volumetric Expansion & Burst Pressure",
      "threshold": "Water expands 9.05% upon phase change at 32°F (0°C); Burst Pressure >50 PSI",
      "details": "As water freezes into crystalline hexagonal ice, its volume expands by ~9%. In rigid sealed glass or aluminum cans, trapped CO2 and ice expansion violently rupture the container."
    },
    "safetyStandard": {
      "organization": "FDA / CPSC",
      "standard": "CPSC Container Explosion Hazard Guidance",
      "citation": "Warning against freezing sealed rigid glass or carbonated beverage containers due to violent shrapnel propulsion hazards."
    },
    "applianceSpecs": {
      "parameter": "Deep Freeze Expansion Kinetics",
      "guideline": "Standard freezers (0°F / -18°C) freeze beer and soda cans within 60–90 minutes, leading to burst seams or explosive glass fragmentation."
    }
  },
  "travel-mug": {
    "materialThermal": {
      "property": "Eutectic Freezing & Moisture Sublimation Threshold",
      "threshold": "Microbial Dormancy <=0°F (-18°C); Ice Crystal Phase Point 32°F",
      "details": "Deep freezing halts all bacterial, yeast, and mold proliferation by immobilizing liquid water into crystalline solid state."
    },
    "safetyStandard": {
      "organization": "USDA FSIS",
      "standard": "FSIS Freezing and Food Safety Directives",
      "citation": "Food preserved continuously at 0°F remains microbiologically safe indefinitely; storage recommendations reflect peak sensory quality."
    },
    "applianceSpecs": {
      "parameter": "0°F Operating Range & Headspace Management",
      "guideline": "Maintain freezer at 0°F (-18°C) or colder; leave 0.5–1 inch headspace for liquid-containing foods to accommodate ice expansion."
    }
  },
  "yeti-tumbler": {
    "materialThermal": {
      "property": "Eutectic Freezing & Moisture Sublimation Threshold",
      "threshold": "Microbial Dormancy <=0°F (-18°C); Ice Crystal Phase Point 32°F",
      "details": "Deep freezing halts all bacterial, yeast, and mold proliferation by immobilizing liquid water into crystalline solid state."
    },
    "safetyStandard": {
      "organization": "USDA FSIS",
      "standard": "FSIS Freezing and Food Safety Directives",
      "citation": "Food preserved continuously at 0°F remains microbiologically safe indefinitely; storage recommendations reflect peak sensory quality."
    },
    "applianceSpecs": {
      "parameter": "0°F Operating Range & Headspace Management",
      "guideline": "Maintain freezer at 0°F (-18°C) or colder; leave 0.5–1 inch headspace for liquid-containing foods to accommodate ice expansion."
    }
  },
  "hydro-flask-bottle": {
    "materialThermal": {
      "property": "Eutectic Freezing & Moisture Sublimation Threshold",
      "threshold": "Microbial Dormancy <=0°F (-18°C); Ice Crystal Phase Point 32°F",
      "details": "Deep freezing halts all bacterial, yeast, and mold proliferation by immobilizing liquid water into crystalline solid state."
    },
    "safetyStandard": {
      "organization": "USDA FSIS",
      "standard": "FSIS Freezing and Food Safety Directives",
      "citation": "Food preserved continuously at 0°F remains microbiologically safe indefinitely; storage recommendations reflect peak sensory quality."
    },
    "applianceSpecs": {
      "parameter": "0°F Operating Range & Headspace Management",
      "guideline": "Maintain freezer at 0°F (-18°C) or colder; leave 0.5–1 inch headspace for liquid-containing foods to accommodate ice expansion."
    }
  },
  "stanley-cup-tumbler": {
    "materialThermal": {
      "property": "Eutectic Freezing & Moisture Sublimation Threshold",
      "threshold": "Microbial Dormancy <=0°F (-18°C); Ice Crystal Phase Point 32°F",
      "details": "Deep freezing halts all bacterial, yeast, and mold proliferation by immobilizing liquid water into crystalline solid state."
    },
    "safetyStandard": {
      "organization": "USDA FSIS",
      "standard": "FSIS Freezing and Food Safety Directives",
      "citation": "Food preserved continuously at 0°F remains microbiologically safe indefinitely; storage recommendations reflect peak sensory quality."
    },
    "applianceSpecs": {
      "parameter": "0°F Operating Range & Headspace Management",
      "guideline": "Maintain freezer at 0°F (-18°C) or colder; leave 0.5–1 inch headspace for liquid-containing foods to accommodate ice expansion."
    }
  },
  "muffin-tin": {
    "materialThermal": {
      "property": "Starch Retrogradation Arrest & Ice Sublimation",
      "threshold": "Retrogradation Arrested at <=0°F (-18°C); Freezing Point ~25°F",
      "details": "Sub-zero temperatures freeze water molecules in place, completely halting amylopectin retrogradation and preserving bread freshness without staling."
    },
    "safetyStandard": {
      "organization": "USDA ARS / AIB",
      "standard": "AIB International Bakery Science Freezing Guide",
      "citation": "Bread and baked goods freeze with near-perfect quality retention for 3–6 months at 0°F."
    },
    "applianceSpecs": {
      "parameter": "Air-Purged Vapor Barrier Protocol",
      "guideline": "Slice bread before freezing and seal tightly in heavy plastic freezer bags, pressing out all excess air to prevent ice crystal glaze."
    }
  },
  "baking-sheet": {
    "materialThermal": {
      "property": "Eutectic Freezing & Moisture Sublimation Threshold",
      "threshold": "Microbial Dormancy <=0°F (-18°C); Ice Crystal Phase Point 32°F",
      "details": "Deep freezing halts all bacterial, yeast, and mold proliferation by immobilizing liquid water into crystalline solid state."
    },
    "safetyStandard": {
      "organization": "USDA FSIS",
      "standard": "FSIS Freezing and Food Safety Directives",
      "citation": "Food preserved continuously at 0°F remains microbiologically safe indefinitely; storage recommendations reflect peak sensory quality."
    },
    "applianceSpecs": {
      "parameter": "0°F Operating Range & Headspace Management",
      "guideline": "Maintain freezer at 0°F (-18°C) or colder; leave 0.5–1 inch headspace for liquid-containing foods to accommodate ice expansion."
    }
  },
  "bundt-pan": {
    "materialThermal": {
      "property": "Eutectic Freezing & Moisture Sublimation Threshold",
      "threshold": "Microbial Dormancy <=0°F (-18°C); Ice Crystal Phase Point 32°F",
      "details": "Deep freezing halts all bacterial, yeast, and mold proliferation by immobilizing liquid water into crystalline solid state."
    },
    "safetyStandard": {
      "organization": "USDA FSIS",
      "standard": "FSIS Freezing and Food Safety Directives",
      "citation": "Food preserved continuously at 0°F remains microbiologically safe indefinitely; storage recommendations reflect peak sensory quality."
    },
    "applianceSpecs": {
      "parameter": "0°F Operating Range & Headspace Management",
      "guideline": "Maintain freezer at 0°F (-18°C) or colder; leave 0.5–1 inch headspace for liquid-containing foods to accommodate ice expansion."
    }
  },
  "gold-silverware": {
    "materialThermal": {
      "property": "Eutectic Freezing & Moisture Sublimation Threshold",
      "threshold": "Microbial Dormancy <=0°F (-18°C); Ice Crystal Phase Point 32°F",
      "details": "Deep freezing halts all bacterial, yeast, and mold proliferation by immobilizing liquid water into crystalline solid state."
    },
    "safetyStandard": {
      "organization": "USDA FSIS",
      "standard": "FSIS Freezing and Food Safety Directives",
      "citation": "Food preserved continuously at 0°F remains microbiologically safe indefinitely; storage recommendations reflect peak sensory quality."
    },
    "applianceSpecs": {
      "parameter": "0°F Operating Range & Headspace Management",
      "guideline": "Maintain freezer at 0°F (-18°C) or colder; leave 0.5–1 inch headspace for liquid-containing foods to accommodate ice expansion."
    }
  },
  "silver-silverware": {
    "materialThermal": {
      "property": "Eutectic Freezing & Moisture Sublimation Threshold",
      "threshold": "Microbial Dormancy <=0°F (-18°C); Ice Crystal Phase Point 32°F",
      "details": "Deep freezing halts all bacterial, yeast, and mold proliferation by immobilizing liquid water into crystalline solid state."
    },
    "safetyStandard": {
      "organization": "USDA FSIS",
      "standard": "FSIS Freezing and Food Safety Directives",
      "citation": "Food preserved continuously at 0°F remains microbiologically safe indefinitely; storage recommendations reflect peak sensory quality."
    },
    "applianceSpecs": {
      "parameter": "0°F Operating Range & Headspace Management",
      "guideline": "Maintain freezer at 0°F (-18°C) or colder; leave 0.5–1 inch headspace for liquid-containing foods to accommodate ice expansion."
    }
  },
  "baby-bottles-pack": {
    "materialThermal": {
      "property": "Eutectic Freezing & Moisture Sublimation Threshold",
      "threshold": "Microbial Dormancy <=0°F (-18°C); Ice Crystal Phase Point 32°F",
      "details": "Deep freezing halts all bacterial, yeast, and mold proliferation by immobilizing liquid water into crystalline solid state."
    },
    "safetyStandard": {
      "organization": "USDA FSIS",
      "standard": "FSIS Freezing and Food Safety Directives",
      "citation": "Food preserved continuously at 0°F remains microbiologically safe indefinitely; storage recommendations reflect peak sensory quality."
    },
    "applianceSpecs": {
      "parameter": "0°F Operating Range & Headspace Management",
      "guideline": "Maintain freezer at 0°F (-18°C) or colder; leave 0.5–1 inch headspace for liquid-containing foods to accommodate ice expansion."
    }
  },
  "pacifiers-silicone": {
    "materialThermal": {
      "property": "Eutectic Freezing & Moisture Sublimation Threshold",
      "threshold": "Microbial Dormancy <=0°F (-18°C); Ice Crystal Phase Point 32°F",
      "details": "Deep freezing halts all bacterial, yeast, and mold proliferation by immobilizing liquid water into crystalline solid state."
    },
    "safetyStandard": {
      "organization": "USDA FSIS",
      "standard": "FSIS Freezing and Food Safety Directives",
      "citation": "Food preserved continuously at 0°F remains microbiologically safe indefinitely; storage recommendations reflect peak sensory quality."
    },
    "applianceSpecs": {
      "parameter": "0°F Operating Range & Headspace Management",
      "guideline": "Maintain freezer at 0°F (-18°C) or colder; leave 0.5–1 inch headspace for liquid-containing foods to accommodate ice expansion."
    }
  },
  "memory-foam": {
    "materialThermal": {
      "property": "Eutectic Freezing & Moisture Sublimation Threshold",
      "threshold": "Microbial Dormancy <=0°F (-18°C); Ice Crystal Phase Point 32°F",
      "details": "Deep freezing halts all bacterial, yeast, and mold proliferation by immobilizing liquid water into crystalline solid state."
    },
    "safetyStandard": {
      "organization": "USDA FSIS",
      "standard": "FSIS Freezing and Food Safety Directives",
      "citation": "Food preserved continuously at 0°F remains microbiologically safe indefinitely; storage recommendations reflect peak sensory quality."
    },
    "applianceSpecs": {
      "parameter": "0°F Operating Range & Headspace Management",
      "guideline": "Maintain freezer at 0°F (-18°C) or colder; leave 0.5–1 inch headspace for liquid-containing foods to accommodate ice expansion."
    }
  },
  "crocs-shoes": {
    "materialThermal": {
      "property": "Eutectic Freezing & Moisture Sublimation Threshold",
      "threshold": "Microbial Dormancy <=0°F (-18°C); Ice Crystal Phase Point 32°F",
      "details": "Deep freezing halts all bacterial, yeast, and mold proliferation by immobilizing liquid water into crystalline solid state."
    },
    "safetyStandard": {
      "organization": "USDA FSIS",
      "standard": "FSIS Freezing and Food Safety Directives",
      "citation": "Food preserved continuously at 0°F remains microbiologically safe indefinitely; storage recommendations reflect peak sensory quality."
    },
    "applianceSpecs": {
      "parameter": "0°F Operating Range & Headspace Management",
      "guideline": "Maintain freezer at 0°F (-18°C) or colder; leave 0.5–1 inch headspace for liquid-containing foods to accommodate ice expansion."
    }
  },
  "running-shoes": {
    "materialThermal": {
      "property": "Eutectic Freezing & Moisture Sublimation Threshold",
      "threshold": "Microbial Dormancy <=0°F (-18°C); Ice Crystal Phase Point 32°F",
      "details": "Deep freezing halts all bacterial, yeast, and mold proliferation by immobilizing liquid water into crystalline solid state."
    },
    "safetyStandard": {
      "organization": "USDA FSIS",
      "standard": "FSIS Freezing and Food Safety Directives",
      "citation": "Food preserved continuously at 0°F remains microbiologically safe indefinitely; storage recommendations reflect peak sensory quality."
    },
    "applianceSpecs": {
      "parameter": "0°F Operating Range & Headspace Management",
      "guideline": "Maintain freezer at 0°F (-18°C) or colder; leave 0.5–1 inch headspace for liquid-containing foods to accommodate ice expansion."
    }
  },
  "wool-sweater": {
    "materialThermal": {
      "property": "Eutectic Freezing & Moisture Sublimation Threshold",
      "threshold": "Microbial Dormancy <=0°F (-18°C); Ice Crystal Phase Point 32°F",
      "details": "Deep freezing halts all bacterial, yeast, and mold proliferation by immobilizing liquid water into crystalline solid state."
    },
    "safetyStandard": {
      "organization": "USDA FSIS",
      "standard": "FSIS Freezing and Food Safety Directives",
      "citation": "Food preserved continuously at 0°F remains microbiologically safe indefinitely; storage recommendations reflect peak sensory quality."
    },
    "applianceSpecs": {
      "parameter": "0°F Operating Range & Headspace Management",
      "guideline": "Maintain freezer at 0°F (-18°C) or colder; leave 0.5–1 inch headspace for liquid-containing foods to accommodate ice expansion."
    }
  }
};
