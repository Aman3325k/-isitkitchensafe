// Technical Reference Specifications for Refreeze items
// Grounded strictly in USDA FSIS Refreezing Guidelines, FDA Food Code 2022, and food physics literature.

module.exports = {
  "chicken": {
    "materialThermal": {
      "property": "Freeze-Thaw Hysteresis & Sarcolemma Puncture",
      "threshold": "Cumulative Danger Zone Limit: 0 hours >40°F (4.4°C); Freezing Point ~28°F",
      "details": "Repeated ice crystallization punctures avian muscle sarcolemma membranes, increasing purge drip loss by up to 15% and resulting in a dry, stringy cooked texture."
    },
    "safetyStandard": {
      "organization": "USDA FSIS",
      "standard": "FSIS Refreezing Guidelines (Directives on Thawed Meat)",
      "citation": "Raw poultry thawed strictly inside the refrigerator at <=40°F may be safely refrozen without cooking; if thawed on counter or in warm water, cook before refreezing."
    },
    "applianceSpecs": {
      "parameter": "Rapid Sub-Zero Freezing Recovery",
      "guideline": "Refreeze immediately at 0°F (-18°C) wrapped tightly in fresh freezer paper or vacuum bags to minimize secondary ice crystal nucleation size."
    }
  },
  "ground-beef": {
    "materialThermal": {
      "property": "Myofibrillar Protein Drip Loss & Metmyoglobin Oxidation",
      "threshold": "Thermal Danger Zone: Never Exceed 40°F (4.4°C); Drip Loss 8%–12%",
      "details": "Secondary freezing ruptures intracellular water pockets, releasing myoglobin and dissolved mineral nutrients as liquid purge during subsequent cooking."
    },
    "safetyStandard": {
      "organization": "USDA FSIS",
      "standard": "FSIS Food Safety Fact Sheets (Refreezing Meat)",
      "citation": "Meat thawed in the refrigerator at <=40°F can be safely refrozen; meat left at room temperature for over 2 hours must be discarded."
    },
    "applianceSpecs": {
      "parameter": "Deep Freeze 0°F Vapor Barrier",
      "guideline": "Wrap in heavy-duty moisture-vapor-resistant wrap and store at 0°F (-18°C); cook thawed ground meat within 2 days before refreezing."
    }
  },
  "steak": {
    "materialThermal": {
      "property": "Myofibrillar Protein Drip Loss & Metmyoglobin Oxidation",
      "threshold": "Thermal Danger Zone: Never Exceed 40°F (4.4°C); Drip Loss 8%–12%",
      "details": "Secondary freezing ruptures intracellular water pockets, releasing myoglobin and dissolved mineral nutrients as liquid purge during subsequent cooking."
    },
    "safetyStandard": {
      "organization": "USDA FSIS",
      "standard": "FSIS Food Safety Fact Sheets (Refreezing Meat)",
      "citation": "Meat thawed in the refrigerator at <=40°F can be safely refrozen; meat left at room temperature for over 2 hours must be discarded."
    },
    "applianceSpecs": {
      "parameter": "Deep Freeze 0°F Vapor Barrier",
      "guideline": "Wrap in heavy-duty moisture-vapor-resistant wrap and store at 0°F (-18°C); cook thawed ground meat within 2 days before refreezing."
    }
  },
  "pork": {
    "materialThermal": {
      "property": "Myofibrillar Protein Drip Loss & Metmyoglobin Oxidation",
      "threshold": "Thermal Danger Zone: Never Exceed 40°F (4.4°C); Drip Loss 8%–12%",
      "details": "Secondary freezing ruptures intracellular water pockets, releasing myoglobin and dissolved mineral nutrients as liquid purge during subsequent cooking."
    },
    "safetyStandard": {
      "organization": "USDA FSIS",
      "standard": "FSIS Food Safety Fact Sheets (Refreezing Meat)",
      "citation": "Meat thawed in the refrigerator at <=40°F can be safely refrozen; meat left at room temperature for over 2 hours must be discarded."
    },
    "applianceSpecs": {
      "parameter": "Deep Freeze 0°F Vapor Barrier",
      "guideline": "Wrap in heavy-duty moisture-vapor-resistant wrap and store at 0°F (-18°C); cook thawed ground meat within 2 days before refreezing."
    }
  },
  "lamb": {
    "materialThermal": {
      "property": "Myofibrillar Protein Drip Loss & Metmyoglobin Oxidation",
      "threshold": "Thermal Danger Zone: Never Exceed 40°F (4.4°C); Drip Loss 8%–12%",
      "details": "Secondary freezing ruptures intracellular water pockets, releasing myoglobin and dissolved mineral nutrients as liquid purge during subsequent cooking."
    },
    "safetyStandard": {
      "organization": "USDA FSIS",
      "standard": "FSIS Food Safety Fact Sheets (Refreezing Meat)",
      "citation": "Meat thawed in the refrigerator at <=40°F can be safely refrozen; meat left at room temperature for over 2 hours must be discarded."
    },
    "applianceSpecs": {
      "parameter": "Deep Freeze 0°F Vapor Barrier",
      "guideline": "Wrap in heavy-duty moisture-vapor-resistant wrap and store at 0°F (-18°C); cook thawed ground meat within 2 days before refreezing."
    }
  },
  "turkey": {
    "materialThermal": {
      "property": "Freeze-Thaw Hysteresis & Sarcolemma Puncture",
      "threshold": "Cumulative Danger Zone Limit: 0 hours >40°F (4.4°C); Freezing Point ~28°F",
      "details": "Repeated ice crystallization punctures avian muscle sarcolemma membranes, increasing purge drip loss by up to 15% and resulting in a dry, stringy cooked texture."
    },
    "safetyStandard": {
      "organization": "USDA FSIS",
      "standard": "FSIS Refreezing Guidelines (Directives on Thawed Meat)",
      "citation": "Raw poultry thawed strictly inside the refrigerator at <=40°F may be safely refrozen without cooking; if thawed on counter or in warm water, cook before refreezing."
    },
    "applianceSpecs": {
      "parameter": "Rapid Sub-Zero Freezing Recovery",
      "guideline": "Refreeze immediately at 0°F (-18°C) wrapped tightly in fresh freezer paper or vacuum bags to minimize secondary ice crystal nucleation size."
    }
  },
  "salmon": {
    "materialThermal": {
      "property": "Delicate Fish Muscle Cell Rupture & Enzymatic Softening",
      "threshold": "Psychrotrophic Bacterial Activation >32°F (0°C); Safe Refrigerator Hold <=38°F",
      "details": "Seafood muscle fibers are short and fragile. Freezing twice tears connective myocommata sheets, causing delicate fish fillets to become mushy and watery."
    },
    "safetyStandard": {
      "organization": "FDA",
      "standard": "FDA Fish and Fishery Products Hazards and Controls Guidance",
      "citation": "Raw seafood thawed under cold running water or in microwave must be cooked immediately before refreezing."
    },
    "applianceSpecs": {
      "parameter": "Air-Free Packaging Protocol",
      "guideline": "Cook raw seafood first, then freeze cooked portions at 0°F to retain structural integrity and avoid texture degradation."
    }
  },
  "shrimp": {
    "materialThermal": {
      "property": "Delicate Fish Muscle Cell Rupture & Enzymatic Softening",
      "threshold": "Psychrotrophic Bacterial Activation >32°F (0°C); Safe Refrigerator Hold <=38°F",
      "details": "Seafood muscle fibers are short and fragile. Freezing twice tears connective myocommata sheets, causing delicate fish fillets to become mushy and watery."
    },
    "safetyStandard": {
      "organization": "FDA",
      "standard": "FDA Fish and Fishery Products Hazards and Controls Guidance",
      "citation": "Raw seafood thawed under cold running water or in microwave must be cooked immediately before refreezing."
    },
    "applianceSpecs": {
      "parameter": "Air-Free Packaging Protocol",
      "guideline": "Cook raw seafood first, then freeze cooked portions at 0°F to retain structural integrity and avoid texture degradation."
    }
  },
  "lobster": {
    "materialThermal": {
      "property": "Delicate Fish Muscle Cell Rupture & Enzymatic Softening",
      "threshold": "Psychrotrophic Bacterial Activation >32°F (0°C); Safe Refrigerator Hold <=38°F",
      "details": "Seafood muscle fibers are short and fragile. Freezing twice tears connective myocommata sheets, causing delicate fish fillets to become mushy and watery."
    },
    "safetyStandard": {
      "organization": "FDA",
      "standard": "FDA Fish and Fishery Products Hazards and Controls Guidance",
      "citation": "Raw seafood thawed under cold running water or in microwave must be cooked immediately before refreezing."
    },
    "applianceSpecs": {
      "parameter": "Air-Free Packaging Protocol",
      "guideline": "Cook raw seafood first, then freeze cooked portions at 0°F to retain structural integrity and avoid texture degradation."
    }
  },
  "crab": {
    "materialThermal": {
      "property": "Delicate Fish Muscle Cell Rupture & Enzymatic Softening",
      "threshold": "Psychrotrophic Bacterial Activation >32°F (0°C); Safe Refrigerator Hold <=38°F",
      "details": "Seafood muscle fibers are short and fragile. Freezing twice tears connective myocommata sheets, causing delicate fish fillets to become mushy and watery."
    },
    "safetyStandard": {
      "organization": "FDA",
      "standard": "FDA Fish and Fishery Products Hazards and Controls Guidance",
      "citation": "Raw seafood thawed under cold running water or in microwave must be cooked immediately before refreezing."
    },
    "applianceSpecs": {
      "parameter": "Air-Free Packaging Protocol",
      "guideline": "Cook raw seafood first, then freeze cooked portions at 0°F to retain structural integrity and avoid texture degradation."
    }
  },
  "tuna": {
    "materialThermal": {
      "property": "Delicate Fish Muscle Cell Rupture & Enzymatic Softening",
      "threshold": "Psychrotrophic Bacterial Activation >32°F (0°C); Safe Refrigerator Hold <=38°F",
      "details": "Seafood muscle fibers are short and fragile. Freezing twice tears connective myocommata sheets, causing delicate fish fillets to become mushy and watery."
    },
    "safetyStandard": {
      "organization": "FDA",
      "standard": "FDA Fish and Fishery Products Hazards and Controls Guidance",
      "citation": "Raw seafood thawed under cold running water or in microwave must be cooked immediately before refreezing."
    },
    "applianceSpecs": {
      "parameter": "Air-Free Packaging Protocol",
      "guideline": "Cook raw seafood first, then freeze cooked portions at 0°F to retain structural integrity and avoid texture degradation."
    }
  },
  "bacon": {
    "materialThermal": {
      "property": "Myofibrillar Protein Drip Loss & Metmyoglobin Oxidation",
      "threshold": "Thermal Danger Zone: Never Exceed 40°F (4.4°C); Drip Loss 8%–12%",
      "details": "Secondary freezing ruptures intracellular water pockets, releasing myoglobin and dissolved mineral nutrients as liquid purge during subsequent cooking."
    },
    "safetyStandard": {
      "organization": "USDA FSIS",
      "standard": "FSIS Food Safety Fact Sheets (Refreezing Meat)",
      "citation": "Meat thawed in the refrigerator at <=40°F can be safely refrozen; meat left at room temperature for over 2 hours must be discarded."
    },
    "applianceSpecs": {
      "parameter": "Deep Freeze 0°F Vapor Barrier",
      "guideline": "Wrap in heavy-duty moisture-vapor-resistant wrap and store at 0°F (-18°C); cook thawed ground meat within 2 days before refreezing."
    }
  },
  "sausage": {
    "materialThermal": {
      "property": "Myofibrillar Protein Drip Loss & Metmyoglobin Oxidation",
      "threshold": "Thermal Danger Zone: Never Exceed 40°F (4.4°C); Drip Loss 8%–12%",
      "details": "Secondary freezing ruptures intracellular water pockets, releasing myoglobin and dissolved mineral nutrients as liquid purge during subsequent cooking."
    },
    "safetyStandard": {
      "organization": "USDA FSIS",
      "standard": "FSIS Food Safety Fact Sheets (Refreezing Meat)",
      "citation": "Meat thawed in the refrigerator at <=40°F can be safely refrozen; meat left at room temperature for over 2 hours must be discarded."
    },
    "applianceSpecs": {
      "parameter": "Deep Freeze 0°F Vapor Barrier",
      "guideline": "Wrap in heavy-duty moisture-vapor-resistant wrap and store at 0°F (-18°C); cook thawed ground meat within 2 days before refreezing."
    }
  },
  "hot-dogs": {
    "materialThermal": {
      "property": "Secondary Ice Crystal Recrystallization & Vacuolar Collapse",
      "threshold": "Danger Zone Cumulative Time: Max 2 hours between 40°F–140°F",
      "details": "Slow secondary freezing allows ice crystals to fuse into large angular needles that tear plant and animal tissue cell walls, causing moisture loss and limpness."
    },
    "safetyStandard": {
      "organization": "USDA FSIS / FDA",
      "standard": "USDA FSIS Refreezing Guidelines",
      "citation": "Foods safely thawed in the refrigerator at 40°F or below may be safely refrozen without cooking; discard any perishable food thawed at room temperature."
    },
    "applianceSpecs": {
      "parameter": "Sub-Zero Air Blast Freezing",
      "guideline": "Place items on the coldest shelf of the freezer (0°F / -18°C) with good air circulation to freeze as rapidly as possible."
    }
  },
  "deli-meat": {
    "materialThermal": {
      "property": "Myofibrillar Protein Drip Loss & Metmyoglobin Oxidation",
      "threshold": "Thermal Danger Zone: Never Exceed 40°F (4.4°C); Drip Loss 8%–12%",
      "details": "Secondary freezing ruptures intracellular water pockets, releasing myoglobin and dissolved mineral nutrients as liquid purge during subsequent cooking."
    },
    "safetyStandard": {
      "organization": "USDA FSIS",
      "standard": "FSIS Food Safety Fact Sheets (Refreezing Meat)",
      "citation": "Meat thawed in the refrigerator at <=40°F can be safely refrozen; meat left at room temperature for over 2 hours must be discarded."
    },
    "applianceSpecs": {
      "parameter": "Deep Freeze 0°F Vapor Barrier",
      "guideline": "Wrap in heavy-duty moisture-vapor-resistant wrap and store at 0°F (-18°C); cook thawed ground meat within 2 days before refreezing."
    }
  },
  "ham": {
    "materialThermal": {
      "property": "Myofibrillar Protein Drip Loss & Metmyoglobin Oxidation",
      "threshold": "Thermal Danger Zone: Never Exceed 40°F (4.4°C); Drip Loss 8%–12%",
      "details": "Secondary freezing ruptures intracellular water pockets, releasing myoglobin and dissolved mineral nutrients as liquid purge during subsequent cooking."
    },
    "safetyStandard": {
      "organization": "USDA FSIS",
      "standard": "FSIS Food Safety Fact Sheets (Refreezing Meat)",
      "citation": "Meat thawed in the refrigerator at <=40°F can be safely refrozen; meat left at room temperature for over 2 hours must be discarded."
    },
    "applianceSpecs": {
      "parameter": "Deep Freeze 0°F Vapor Barrier",
      "guideline": "Wrap in heavy-duty moisture-vapor-resistant wrap and store at 0°F (-18°C); cook thawed ground meat within 2 days before refreezing."
    }
  },
  "ribs": {
    "materialThermal": {
      "property": "Myofibrillar Protein Drip Loss & Metmyoglobin Oxidation",
      "threshold": "Thermal Danger Zone: Never Exceed 40°F (4.4°C); Drip Loss 8%–12%",
      "details": "Secondary freezing ruptures intracellular water pockets, releasing myoglobin and dissolved mineral nutrients as liquid purge during subsequent cooking."
    },
    "safetyStandard": {
      "organization": "USDA FSIS",
      "standard": "FSIS Food Safety Fact Sheets (Refreezing Meat)",
      "citation": "Meat thawed in the refrigerator at <=40°F can be safely refrozen; meat left at room temperature for over 2 hours must be discarded."
    },
    "applianceSpecs": {
      "parameter": "Deep Freeze 0°F Vapor Barrier",
      "guideline": "Wrap in heavy-duty moisture-vapor-resistant wrap and store at 0°F (-18°C); cook thawed ground meat within 2 days before refreezing."
    }
  },
  "ground-turkey": {
    "materialThermal": {
      "property": "Freeze-Thaw Hysteresis & Sarcolemma Puncture",
      "threshold": "Cumulative Danger Zone Limit: 0 hours >40°F (4.4°C); Freezing Point ~28°F",
      "details": "Repeated ice crystallization punctures avian muscle sarcolemma membranes, increasing purge drip loss by up to 15% and resulting in a dry, stringy cooked texture."
    },
    "safetyStandard": {
      "organization": "USDA FSIS",
      "standard": "FSIS Refreezing Guidelines (Directives on Thawed Meat)",
      "citation": "Raw poultry thawed strictly inside the refrigerator at <=40°F may be safely refrozen without cooking; if thawed on counter or in warm water, cook before refreezing."
    },
    "applianceSpecs": {
      "parameter": "Rapid Sub-Zero Freezing Recovery",
      "guideline": "Refreeze immediately at 0°F (-18°C) wrapped tightly in fresh freezer paper or vacuum bags to minimize secondary ice crystal nucleation size."
    }
  },
  "milk": {
    "materialThermal": {
      "property": "Emulsion Destabilization & Casein Curdling Phase Change",
      "threshold": "Emulsion Separation Point 31°F (-0.5°C)",
      "details": "Dairy emulsions rely on fragile fat globule membranes. Freezing twice permanently breaks the emulsion, separating clear whey liquid from grainy fat clumps."
    },
    "safetyStandard": {
      "organization": "FDA",
      "standard": "FDA Food Code 2022 § 3-501.16",
      "citation": "Refreezing thawed dairy products is safe if kept below 40°F, but physical curdling makes them suitable only for baking and cooked sauces."
    },
    "applianceSpecs": {
      "parameter": "Thawing & Re-blending Protocol",
      "guideline": "Thaw slowly in the refrigerator at 36°F–38°F and whisk vigorously before using in cooked recipes; do not expect original fresh emulsion texture."
    }
  },
  "butter": {
    "materialThermal": {
      "property": "Emulsion Destabilization & Casein Curdling Phase Change",
      "threshold": "Emulsion Separation Point 31°F (-0.5°C)",
      "details": "Dairy emulsions rely on fragile fat globule membranes. Freezing twice permanently breaks the emulsion, separating clear whey liquid from grainy fat clumps."
    },
    "safetyStandard": {
      "organization": "FDA",
      "standard": "FDA Food Code 2022 § 3-501.16",
      "citation": "Refreezing thawed dairy products is safe if kept below 40°F, but physical curdling makes them suitable only for baking and cooked sauces."
    },
    "applianceSpecs": {
      "parameter": "Thawing & Re-blending Protocol",
      "guideline": "Thaw slowly in the refrigerator at 36°F–38°F and whisk vigorously before using in cooked recipes; do not expect original fresh emulsion texture."
    }
  },
  "cheese": {
    "materialThermal": {
      "property": "Emulsion Destabilization & Casein Curdling Phase Change",
      "threshold": "Emulsion Separation Point 31°F (-0.5°C)",
      "details": "Dairy emulsions rely on fragile fat globule membranes. Freezing twice permanently breaks the emulsion, separating clear whey liquid from grainy fat clumps."
    },
    "safetyStandard": {
      "organization": "FDA",
      "standard": "FDA Food Code 2022 § 3-501.16",
      "citation": "Refreezing thawed dairy products is safe if kept below 40°F, but physical curdling makes them suitable only for baking and cooked sauces."
    },
    "applianceSpecs": {
      "parameter": "Thawing & Re-blending Protocol",
      "guideline": "Thaw slowly in the refrigerator at 36°F–38°F and whisk vigorously before using in cooked recipes; do not expect original fresh emulsion texture."
    }
  },
  "cream-cheese": {
    "materialThermal": {
      "property": "Emulsion Destabilization & Casein Curdling Phase Change",
      "threshold": "Emulsion Separation Point 31°F (-0.5°C)",
      "details": "Dairy emulsions rely on fragile fat globule membranes. Freezing twice permanently breaks the emulsion, separating clear whey liquid from grainy fat clumps."
    },
    "safetyStandard": {
      "organization": "FDA",
      "standard": "FDA Food Code 2022 § 3-501.16",
      "citation": "Refreezing thawed dairy products is safe if kept below 40°F, but physical curdling makes them suitable only for baking and cooked sauces."
    },
    "applianceSpecs": {
      "parameter": "Thawing & Re-blending Protocol",
      "guideline": "Thaw slowly in the refrigerator at 36°F–38°F and whisk vigorously before using in cooked recipes; do not expect original fresh emulsion texture."
    }
  },
  "yogurt": {
    "materialThermal": {
      "property": "Emulsion Destabilization & Casein Curdling Phase Change",
      "threshold": "Emulsion Separation Point 31°F (-0.5°C)",
      "details": "Dairy emulsions rely on fragile fat globule membranes. Freezing twice permanently breaks the emulsion, separating clear whey liquid from grainy fat clumps."
    },
    "safetyStandard": {
      "organization": "FDA",
      "standard": "FDA Food Code 2022 § 3-501.16",
      "citation": "Refreezing thawed dairy products is safe if kept below 40°F, but physical curdling makes them suitable only for baking and cooked sauces."
    },
    "applianceSpecs": {
      "parameter": "Thawing & Re-blending Protocol",
      "guideline": "Thaw slowly in the refrigerator at 36°F–38°F and whisk vigorously before using in cooked recipes; do not expect original fresh emulsion texture."
    }
  },
  "sour-cream": {
    "materialThermal": {
      "property": "Emulsion Destabilization & Casein Curdling Phase Change",
      "threshold": "Emulsion Separation Point 31°F (-0.5°C)",
      "details": "Dairy emulsions rely on fragile fat globule membranes. Freezing twice permanently breaks the emulsion, separating clear whey liquid from grainy fat clumps."
    },
    "safetyStandard": {
      "organization": "FDA",
      "standard": "FDA Food Code 2022 § 3-501.16",
      "citation": "Refreezing thawed dairy products is safe if kept below 40°F, but physical curdling makes them suitable only for baking and cooked sauces."
    },
    "applianceSpecs": {
      "parameter": "Thawing & Re-blending Protocol",
      "guideline": "Thaw slowly in the refrigerator at 36°F–38°F and whisk vigorously before using in cooked recipes; do not expect original fresh emulsion texture."
    }
  },
  "heavy-cream": {
    "materialThermal": {
      "property": "Emulsion Destabilization & Casein Curdling Phase Change",
      "threshold": "Emulsion Separation Point 31°F (-0.5°C)",
      "details": "Dairy emulsions rely on fragile fat globule membranes. Freezing twice permanently breaks the emulsion, separating clear whey liquid from grainy fat clumps."
    },
    "safetyStandard": {
      "organization": "FDA",
      "standard": "FDA Food Code 2022 § 3-501.16",
      "citation": "Refreezing thawed dairy products is safe if kept below 40°F, but physical curdling makes them suitable only for baking and cooked sauces."
    },
    "applianceSpecs": {
      "parameter": "Thawing & Re-blending Protocol",
      "guideline": "Thaw slowly in the refrigerator at 36°F–38°F and whisk vigorously before using in cooked recipes; do not expect original fresh emulsion texture."
    }
  },
  "ice-cream": {
    "materialThermal": {
      "property": "Emulsion Destabilization & Casein Curdling Phase Change",
      "threshold": "Emulsion Separation Point 31°F (-0.5°C)",
      "details": "Dairy emulsions rely on fragile fat globule membranes. Freezing twice permanently breaks the emulsion, separating clear whey liquid from grainy fat clumps."
    },
    "safetyStandard": {
      "organization": "FDA",
      "standard": "FDA Food Code 2022 § 3-501.16",
      "citation": "Refreezing thawed dairy products is safe if kept below 40°F, but physical curdling makes them suitable only for baking and cooked sauces."
    },
    "applianceSpecs": {
      "parameter": "Thawing & Re-blending Protocol",
      "guideline": "Thaw slowly in the refrigerator at 36°F–38°F and whisk vigorously before using in cooked recipes; do not expect original fresh emulsion texture."
    }
  },
  "whipped-cream": {
    "materialThermal": {
      "property": "Emulsion Destabilization & Casein Curdling Phase Change",
      "threshold": "Emulsion Separation Point 31°F (-0.5°C)",
      "details": "Dairy emulsions rely on fragile fat globule membranes. Freezing twice permanently breaks the emulsion, separating clear whey liquid from grainy fat clumps."
    },
    "safetyStandard": {
      "organization": "FDA",
      "standard": "FDA Food Code 2022 § 3-501.16",
      "citation": "Refreezing thawed dairy products is safe if kept below 40°F, but physical curdling makes them suitable only for baking and cooked sauces."
    },
    "applianceSpecs": {
      "parameter": "Thawing & Re-blending Protocol",
      "guideline": "Thaw slowly in the refrigerator at 36°F–38°F and whisk vigorously before using in cooked recipes; do not expect original fresh emulsion texture."
    }
  },
  "strawberries": {
    "materialThermal": {
      "property": "Secondary Ice Crystal Recrystallization & Vacuolar Collapse",
      "threshold": "Danger Zone Cumulative Time: Max 2 hours between 40°F–140°F",
      "details": "Slow secondary freezing allows ice crystals to fuse into large angular needles that tear plant and animal tissue cell walls, causing moisture loss and limpness."
    },
    "safetyStandard": {
      "organization": "USDA FSIS / FDA",
      "standard": "USDA FSIS Refreezing Guidelines",
      "citation": "Foods safely thawed in the refrigerator at 40°F or below may be safely refrozen without cooking; discard any perishable food thawed at room temperature."
    },
    "applianceSpecs": {
      "parameter": "Sub-Zero Air Blast Freezing",
      "guideline": "Place items on the coldest shelf of the freezer (0°F / -18°C) with good air circulation to freeze as rapidly as possible."
    }
  },
  "blueberries": {
    "materialThermal": {
      "property": "Secondary Ice Crystal Recrystallization & Vacuolar Collapse",
      "threshold": "Danger Zone Cumulative Time: Max 2 hours between 40°F–140°F",
      "details": "Slow secondary freezing allows ice crystals to fuse into large angular needles that tear plant and animal tissue cell walls, causing moisture loss and limpness."
    },
    "safetyStandard": {
      "organization": "USDA FSIS / FDA",
      "standard": "USDA FSIS Refreezing Guidelines",
      "citation": "Foods safely thawed in the refrigerator at 40°F or below may be safely refrozen without cooking; discard any perishable food thawed at room temperature."
    },
    "applianceSpecs": {
      "parameter": "Sub-Zero Air Blast Freezing",
      "guideline": "Place items on the coldest shelf of the freezer (0°F / -18°C) with good air circulation to freeze as rapidly as possible."
    }
  },
  "bananas": {
    "materialThermal": {
      "property": "Secondary Ice Crystal Recrystallization & Vacuolar Collapse",
      "threshold": "Danger Zone Cumulative Time: Max 2 hours between 40°F–140°F",
      "details": "Slow secondary freezing allows ice crystals to fuse into large angular needles that tear plant and animal tissue cell walls, causing moisture loss and limpness."
    },
    "safetyStandard": {
      "organization": "USDA FSIS / FDA",
      "standard": "USDA FSIS Refreezing Guidelines",
      "citation": "Foods safely thawed in the refrigerator at 40°F or below may be safely refrozen without cooking; discard any perishable food thawed at room temperature."
    },
    "applianceSpecs": {
      "parameter": "Sub-Zero Air Blast Freezing",
      "guideline": "Place items on the coldest shelf of the freezer (0°F / -18°C) with good air circulation to freeze as rapidly as possible."
    }
  },
  "avocado": {
    "materialThermal": {
      "property": "Secondary Ice Crystal Recrystallization & Vacuolar Collapse",
      "threshold": "Danger Zone Cumulative Time: Max 2 hours between 40°F–140°F",
      "details": "Slow secondary freezing allows ice crystals to fuse into large angular needles that tear plant and animal tissue cell walls, causing moisture loss and limpness."
    },
    "safetyStandard": {
      "organization": "USDA FSIS / FDA",
      "standard": "USDA FSIS Refreezing Guidelines",
      "citation": "Foods safely thawed in the refrigerator at 40°F or below may be safely refrozen without cooking; discard any perishable food thawed at room temperature."
    },
    "applianceSpecs": {
      "parameter": "Sub-Zero Air Blast Freezing",
      "guideline": "Place items on the coldest shelf of the freezer (0°F / -18°C) with good air circulation to freeze as rapidly as possible."
    }
  },
  "spinach": {
    "materialThermal": {
      "property": "Secondary Ice Crystal Recrystallization & Vacuolar Collapse",
      "threshold": "Danger Zone Cumulative Time: Max 2 hours between 40°F–140°F",
      "details": "Slow secondary freezing allows ice crystals to fuse into large angular needles that tear plant and animal tissue cell walls, causing moisture loss and limpness."
    },
    "safetyStandard": {
      "organization": "USDA FSIS / FDA",
      "standard": "USDA FSIS Refreezing Guidelines",
      "citation": "Foods safely thawed in the refrigerator at 40°F or below may be safely refrozen without cooking; discard any perishable food thawed at room temperature."
    },
    "applianceSpecs": {
      "parameter": "Sub-Zero Air Blast Freezing",
      "guideline": "Place items on the coldest shelf of the freezer (0°F / -18°C) with good air circulation to freeze as rapidly as possible."
    }
  },
  "broccoli": {
    "materialThermal": {
      "property": "Secondary Ice Crystal Recrystallization & Vacuolar Collapse",
      "threshold": "Danger Zone Cumulative Time: Max 2 hours between 40°F–140°F",
      "details": "Slow secondary freezing allows ice crystals to fuse into large angular needles that tear plant and animal tissue cell walls, causing moisture loss and limpness."
    },
    "safetyStandard": {
      "organization": "USDA FSIS / FDA",
      "standard": "USDA FSIS Refreezing Guidelines",
      "citation": "Foods safely thawed in the refrigerator at 40°F or below may be safely refrozen without cooking; discard any perishable food thawed at room temperature."
    },
    "applianceSpecs": {
      "parameter": "Sub-Zero Air Blast Freezing",
      "guideline": "Place items on the coldest shelf of the freezer (0°F / -18°C) with good air circulation to freeze as rapidly as possible."
    }
  },
  "corn": {
    "materialThermal": {
      "property": "Secondary Ice Crystal Recrystallization & Vacuolar Collapse",
      "threshold": "Danger Zone Cumulative Time: Max 2 hours between 40°F–140°F",
      "details": "Slow secondary freezing allows ice crystals to fuse into large angular needles that tear plant and animal tissue cell walls, causing moisture loss and limpness."
    },
    "safetyStandard": {
      "organization": "USDA FSIS / FDA",
      "standard": "USDA FSIS Refreezing Guidelines",
      "citation": "Foods safely thawed in the refrigerator at 40°F or below may be safely refrozen without cooking; discard any perishable food thawed at room temperature."
    },
    "applianceSpecs": {
      "parameter": "Sub-Zero Air Blast Freezing",
      "guideline": "Place items on the coldest shelf of the freezer (0°F / -18°C) with good air circulation to freeze as rapidly as possible."
    }
  },
  "peas": {
    "materialThermal": {
      "property": "Secondary Ice Crystal Recrystallization & Vacuolar Collapse",
      "threshold": "Danger Zone Cumulative Time: Max 2 hours between 40°F–140°F",
      "details": "Slow secondary freezing allows ice crystals to fuse into large angular needles that tear plant and animal tissue cell walls, causing moisture loss and limpness."
    },
    "safetyStandard": {
      "organization": "USDA FSIS / FDA",
      "standard": "USDA FSIS Refreezing Guidelines",
      "citation": "Foods safely thawed in the refrigerator at 40°F or below may be safely refrozen without cooking; discard any perishable food thawed at room temperature."
    },
    "applianceSpecs": {
      "parameter": "Sub-Zero Air Blast Freezing",
      "guideline": "Place items on the coldest shelf of the freezer (0°F / -18°C) with good air circulation to freeze as rapidly as possible."
    }
  },
  "mangoes": {
    "materialThermal": {
      "property": "Secondary Ice Crystal Recrystallization & Vacuolar Collapse",
      "threshold": "Danger Zone Cumulative Time: Max 2 hours between 40°F–140°F",
      "details": "Slow secondary freezing allows ice crystals to fuse into large angular needles that tear plant and animal tissue cell walls, causing moisture loss and limpness."
    },
    "safetyStandard": {
      "organization": "USDA FSIS / FDA",
      "standard": "USDA FSIS Refreezing Guidelines",
      "citation": "Foods safely thawed in the refrigerator at 40°F or below may be safely refrozen without cooking; discard any perishable food thawed at room temperature."
    },
    "applianceSpecs": {
      "parameter": "Sub-Zero Air Blast Freezing",
      "guideline": "Place items on the coldest shelf of the freezer (0°F / -18°C) with good air circulation to freeze as rapidly as possible."
    }
  },
  "peaches": {
    "materialThermal": {
      "property": "Secondary Ice Crystal Recrystallization & Vacuolar Collapse",
      "threshold": "Danger Zone Cumulative Time: Max 2 hours between 40°F–140°F",
      "details": "Slow secondary freezing allows ice crystals to fuse into large angular needles that tear plant and animal tissue cell walls, causing moisture loss and limpness."
    },
    "safetyStandard": {
      "organization": "USDA FSIS / FDA",
      "standard": "USDA FSIS Refreezing Guidelines",
      "citation": "Foods safely thawed in the refrigerator at 40°F or below may be safely refrozen without cooking; discard any perishable food thawed at room temperature."
    },
    "applianceSpecs": {
      "parameter": "Sub-Zero Air Blast Freezing",
      "guideline": "Place items on the coldest shelf of the freezer (0°F / -18°C) with good air circulation to freeze as rapidly as possible."
    }
  },
  "cooked-chicken": {
    "materialThermal": {
      "property": "Freeze-Thaw Hysteresis & Sarcolemma Puncture",
      "threshold": "Cumulative Danger Zone Limit: 0 hours >40°F (4.4°C); Freezing Point ~28°F",
      "details": "Repeated ice crystallization punctures avian muscle sarcolemma membranes, increasing purge drip loss by up to 15% and resulting in a dry, stringy cooked texture."
    },
    "safetyStandard": {
      "organization": "USDA FSIS",
      "standard": "FSIS Refreezing Guidelines (Directives on Thawed Meat)",
      "citation": "Raw poultry thawed strictly inside the refrigerator at <=40°F may be safely refrozen without cooking; if thawed on counter or in warm water, cook before refreezing."
    },
    "applianceSpecs": {
      "parameter": "Rapid Sub-Zero Freezing Recovery",
      "guideline": "Refreeze immediately at 0°F (-18°C) wrapped tightly in fresh freezer paper or vacuum bags to minimize secondary ice crystal nucleation size."
    }
  },
  "cooked-beef": {
    "materialThermal": {
      "property": "Myofibrillar Protein Drip Loss & Metmyoglobin Oxidation",
      "threshold": "Thermal Danger Zone: Never Exceed 40°F (4.4°C); Drip Loss 8%–12%",
      "details": "Secondary freezing ruptures intracellular water pockets, releasing myoglobin and dissolved mineral nutrients as liquid purge during subsequent cooking."
    },
    "safetyStandard": {
      "organization": "USDA FSIS",
      "standard": "FSIS Food Safety Fact Sheets (Refreezing Meat)",
      "citation": "Meat thawed in the refrigerator at <=40°F can be safely refrozen; meat left at room temperature for over 2 hours must be discarded."
    },
    "applianceSpecs": {
      "parameter": "Deep Freeze 0°F Vapor Barrier",
      "guideline": "Wrap in heavy-duty moisture-vapor-resistant wrap and store at 0°F (-18°C); cook thawed ground meat within 2 days before refreezing."
    }
  },
  "cooked-shrimp": {
    "materialThermal": {
      "property": "Delicate Fish Muscle Cell Rupture & Enzymatic Softening",
      "threshold": "Psychrotrophic Bacterial Activation >32°F (0°C); Safe Refrigerator Hold <=38°F",
      "details": "Seafood muscle fibers are short and fragile. Freezing twice tears connective myocommata sheets, causing delicate fish fillets to become mushy and watery."
    },
    "safetyStandard": {
      "organization": "FDA",
      "standard": "FDA Fish and Fishery Products Hazards and Controls Guidance",
      "citation": "Raw seafood thawed under cold running water or in microwave must be cooked immediately before refreezing."
    },
    "applianceSpecs": {
      "parameter": "Air-Free Packaging Protocol",
      "guideline": "Cook raw seafood first, then freeze cooked portions at 0°F to retain structural integrity and avoid texture degradation."
    }
  },
  "soup": {
    "materialThermal": {
      "property": "Secondary Ice Crystal Recrystallization & Vacuolar Collapse",
      "threshold": "Danger Zone Cumulative Time: Max 2 hours between 40°F–140°F",
      "details": "Slow secondary freezing allows ice crystals to fuse into large angular needles that tear plant and animal tissue cell walls, causing moisture loss and limpness."
    },
    "safetyStandard": {
      "organization": "USDA FSIS / FDA",
      "standard": "USDA FSIS Refreezing Guidelines",
      "citation": "Foods safely thawed in the refrigerator at 40°F or below may be safely refrozen without cooking; discard any perishable food thawed at room temperature."
    },
    "applianceSpecs": {
      "parameter": "Sub-Zero Air Blast Freezing",
      "guideline": "Place items on the coldest shelf of the freezer (0°F / -18°C) with good air circulation to freeze as rapidly as possible."
    }
  },
  "chili": {
    "materialThermal": {
      "property": "Secondary Ice Crystal Recrystallization & Vacuolar Collapse",
      "threshold": "Danger Zone Cumulative Time: Max 2 hours between 40°F–140°F",
      "details": "Slow secondary freezing allows ice crystals to fuse into large angular needles that tear plant and animal tissue cell walls, causing moisture loss and limpness."
    },
    "safetyStandard": {
      "organization": "USDA FSIS / FDA",
      "standard": "USDA FSIS Refreezing Guidelines",
      "citation": "Foods safely thawed in the refrigerator at 40°F or below may be safely refrozen without cooking; discard any perishable food thawed at room temperature."
    },
    "applianceSpecs": {
      "parameter": "Sub-Zero Air Blast Freezing",
      "guideline": "Place items on the coldest shelf of the freezer (0°F / -18°C) with good air circulation to freeze as rapidly as possible."
    }
  },
  "lasagna": {
    "materialThermal": {
      "property": "Secondary Ice Crystal Recrystallization & Vacuolar Collapse",
      "threshold": "Danger Zone Cumulative Time: Max 2 hours between 40°F–140°F",
      "details": "Slow secondary freezing allows ice crystals to fuse into large angular needles that tear plant and animal tissue cell walls, causing moisture loss and limpness."
    },
    "safetyStandard": {
      "organization": "USDA FSIS / FDA",
      "standard": "USDA FSIS Refreezing Guidelines",
      "citation": "Foods safely thawed in the refrigerator at 40°F or below may be safely refrozen without cooking; discard any perishable food thawed at room temperature."
    },
    "applianceSpecs": {
      "parameter": "Sub-Zero Air Blast Freezing",
      "guideline": "Place items on the coldest shelf of the freezer (0°F / -18°C) with good air circulation to freeze as rapidly as possible."
    }
  },
  "pizza": {
    "materialThermal": {
      "property": "Secondary Ice Crystal Recrystallization & Vacuolar Collapse",
      "threshold": "Danger Zone Cumulative Time: Max 2 hours between 40°F–140°F",
      "details": "Slow secondary freezing allows ice crystals to fuse into large angular needles that tear plant and animal tissue cell walls, causing moisture loss and limpness."
    },
    "safetyStandard": {
      "organization": "USDA FSIS / FDA",
      "standard": "USDA FSIS Refreezing Guidelines",
      "citation": "Foods safely thawed in the refrigerator at 40°F or below may be safely refrozen without cooking; discard any perishable food thawed at room temperature."
    },
    "applianceSpecs": {
      "parameter": "Sub-Zero Air Blast Freezing",
      "guideline": "Place items on the coldest shelf of the freezer (0°F / -18°C) with good air circulation to freeze as rapidly as possible."
    }
  },
  "cooked-rice": {
    "materialThermal": {
      "property": "Secondary Ice Crystal Recrystallization & Vacuolar Collapse",
      "threshold": "Danger Zone Cumulative Time: Max 2 hours between 40°F–140°F",
      "details": "Slow secondary freezing allows ice crystals to fuse into large angular needles that tear plant and animal tissue cell walls, causing moisture loss and limpness."
    },
    "safetyStandard": {
      "organization": "USDA FSIS / FDA",
      "standard": "USDA FSIS Refreezing Guidelines",
      "citation": "Foods safely thawed in the refrigerator at 40°F or below may be safely refrozen without cooking; discard any perishable food thawed at room temperature."
    },
    "applianceSpecs": {
      "parameter": "Sub-Zero Air Blast Freezing",
      "guideline": "Place items on the coldest shelf of the freezer (0°F / -18°C) with good air circulation to freeze as rapidly as possible."
    }
  },
  "cooked-pasta": {
    "materialThermal": {
      "property": "Secondary Ice Crystal Recrystallization & Vacuolar Collapse",
      "threshold": "Danger Zone Cumulative Time: Max 2 hours between 40°F–140°F",
      "details": "Slow secondary freezing allows ice crystals to fuse into large angular needles that tear plant and animal tissue cell walls, causing moisture loss and limpness."
    },
    "safetyStandard": {
      "organization": "USDA FSIS / FDA",
      "standard": "USDA FSIS Refreezing Guidelines",
      "citation": "Foods safely thawed in the refrigerator at 40°F or below may be safely refrozen without cooking; discard any perishable food thawed at room temperature."
    },
    "applianceSpecs": {
      "parameter": "Sub-Zero Air Blast Freezing",
      "guideline": "Place items on the coldest shelf of the freezer (0°F / -18°C) with good air circulation to freeze as rapidly as possible."
    }
  },
  "bread": {
    "materialThermal": {
      "property": "Secondary Ice Crystal Recrystallization & Vacuolar Collapse",
      "threshold": "Danger Zone Cumulative Time: Max 2 hours between 40°F–140°F",
      "details": "Slow secondary freezing allows ice crystals to fuse into large angular needles that tear plant and animal tissue cell walls, causing moisture loss and limpness."
    },
    "safetyStandard": {
      "organization": "USDA FSIS / FDA",
      "standard": "USDA FSIS Refreezing Guidelines",
      "citation": "Foods safely thawed in the refrigerator at 40°F or below may be safely refrozen without cooking; discard any perishable food thawed at room temperature."
    },
    "applianceSpecs": {
      "parameter": "Sub-Zero Air Blast Freezing",
      "guideline": "Place items on the coldest shelf of the freezer (0°F / -18°C) with good air circulation to freeze as rapidly as possible."
    }
  },
  "waffles": {
    "materialThermal": {
      "property": "Secondary Ice Crystal Recrystallization & Vacuolar Collapse",
      "threshold": "Danger Zone Cumulative Time: Max 2 hours between 40°F–140°F",
      "details": "Slow secondary freezing allows ice crystals to fuse into large angular needles that tear plant and animal tissue cell walls, causing moisture loss and limpness."
    },
    "safetyStandard": {
      "organization": "USDA FSIS / FDA",
      "standard": "USDA FSIS Refreezing Guidelines",
      "citation": "Foods safely thawed in the refrigerator at 40°F or below may be safely refrozen without cooking; discard any perishable food thawed at room temperature."
    },
    "applianceSpecs": {
      "parameter": "Sub-Zero Air Blast Freezing",
      "guideline": "Place items on the coldest shelf of the freezer (0°F / -18°C) with good air circulation to freeze as rapidly as possible."
    }
  },
  "pancakes": {
    "materialThermal": {
      "property": "Secondary Ice Crystal Recrystallization & Vacuolar Collapse",
      "threshold": "Danger Zone Cumulative Time: Max 2 hours between 40°F–140°F",
      "details": "Slow secondary freezing allows ice crystals to fuse into large angular needles that tear plant and animal tissue cell walls, causing moisture loss and limpness."
    },
    "safetyStandard": {
      "organization": "USDA FSIS / FDA",
      "standard": "USDA FSIS Refreezing Guidelines",
      "citation": "Foods safely thawed in the refrigerator at 40°F or below may be safely refrozen without cooking; discard any perishable food thawed at room temperature."
    },
    "applianceSpecs": {
      "parameter": "Sub-Zero Air Blast Freezing",
      "guideline": "Place items on the coldest shelf of the freezer (0°F / -18°C) with good air circulation to freeze as rapidly as possible."
    }
  },
  "cookie-dough": {
    "materialThermal": {
      "property": "Secondary Ice Crystal Recrystallization & Vacuolar Collapse",
      "threshold": "Danger Zone Cumulative Time: Max 2 hours between 40°F–140°F",
      "details": "Slow secondary freezing allows ice crystals to fuse into large angular needles that tear plant and animal tissue cell walls, causing moisture loss and limpness."
    },
    "safetyStandard": {
      "organization": "USDA FSIS / FDA",
      "standard": "USDA FSIS Refreezing Guidelines",
      "citation": "Foods safely thawed in the refrigerator at 40°F or below may be safely refrozen without cooking; discard any perishable food thawed at room temperature."
    },
    "applianceSpecs": {
      "parameter": "Sub-Zero Air Blast Freezing",
      "guideline": "Place items on the coldest shelf of the freezer (0°F / -18°C) with good air circulation to freeze as rapidly as possible."
    }
  },
  "cake": {
    "materialThermal": {
      "property": "Secondary Ice Crystal Recrystallization & Vacuolar Collapse",
      "threshold": "Danger Zone Cumulative Time: Max 2 hours between 40°F–140°F",
      "details": "Slow secondary freezing allows ice crystals to fuse into large angular needles that tear plant and animal tissue cell walls, causing moisture loss and limpness."
    },
    "safetyStandard": {
      "organization": "USDA FSIS / FDA",
      "standard": "USDA FSIS Refreezing Guidelines",
      "citation": "Foods safely thawed in the refrigerator at 40°F or below may be safely refrozen without cooking; discard any perishable food thawed at room temperature."
    },
    "applianceSpecs": {
      "parameter": "Sub-Zero Air Blast Freezing",
      "guideline": "Place items on the coldest shelf of the freezer (0°F / -18°C) with good air circulation to freeze as rapidly as possible."
    }
  },
  "pie": {
    "materialThermal": {
      "property": "Secondary Ice Crystal Recrystallization & Vacuolar Collapse",
      "threshold": "Danger Zone Cumulative Time: Max 2 hours between 40°F–140°F",
      "details": "Slow secondary freezing allows ice crystals to fuse into large angular needles that tear plant and animal tissue cell walls, causing moisture loss and limpness."
    },
    "safetyStandard": {
      "organization": "USDA FSIS / FDA",
      "standard": "USDA FSIS Refreezing Guidelines",
      "citation": "Foods safely thawed in the refrigerator at 40°F or below may be safely refrozen without cooking; discard any perishable food thawed at room temperature."
    },
    "applianceSpecs": {
      "parameter": "Sub-Zero Air Blast Freezing",
      "guideline": "Place items on the coldest shelf of the freezer (0°F / -18°C) with good air circulation to freeze as rapidly as possible."
    }
  },
  "breast-milk": {
    "materialThermal": {
      "property": "Emulsion Destabilization & Casein Curdling Phase Change",
      "threshold": "Emulsion Separation Point 31°F (-0.5°C)",
      "details": "Dairy emulsions rely on fragile fat globule membranes. Freezing twice permanently breaks the emulsion, separating clear whey liquid from grainy fat clumps."
    },
    "safetyStandard": {
      "organization": "FDA",
      "standard": "FDA Food Code 2022 § 3-501.16",
      "citation": "Refreezing thawed dairy products is safe if kept below 40°F, but physical curdling makes them suitable only for baking and cooked sauces."
    },
    "applianceSpecs": {
      "parameter": "Thawing & Re-blending Protocol",
      "guideline": "Thaw slowly in the refrigerator at 36°F–38°F and whisk vigorously before using in cooked recipes; do not expect original fresh emulsion texture."
    }
  },
  "baby-food": {
    "materialThermal": {
      "property": "Secondary Ice Crystal Recrystallization & Vacuolar Collapse",
      "threshold": "Danger Zone Cumulative Time: Max 2 hours between 40°F–140°F",
      "details": "Slow secondary freezing allows ice crystals to fuse into large angular needles that tear plant and animal tissue cell walls, causing moisture loss and limpness."
    },
    "safetyStandard": {
      "organization": "USDA FSIS / FDA",
      "standard": "USDA FSIS Refreezing Guidelines",
      "citation": "Foods safely thawed in the refrigerator at 40°F or below may be safely refrozen without cooking; discard any perishable food thawed at room temperature."
    },
    "applianceSpecs": {
      "parameter": "Sub-Zero Air Blast Freezing",
      "guideline": "Place items on the coldest shelf of the freezer (0°F / -18°C) with good air circulation to freeze as rapidly as possible."
    }
  },
  "frozen-vegetables": {
    "materialThermal": {
      "property": "Secondary Ice Crystal Recrystallization & Vacuolar Collapse",
      "threshold": "Danger Zone Cumulative Time: Max 2 hours between 40°F–140°F",
      "details": "Slow secondary freezing allows ice crystals to fuse into large angular needles that tear plant and animal tissue cell walls, causing moisture loss and limpness."
    },
    "safetyStandard": {
      "organization": "USDA FSIS / FDA",
      "standard": "USDA FSIS Refreezing Guidelines",
      "citation": "Foods safely thawed in the refrigerator at 40°F or below may be safely refrozen without cooking; discard any perishable food thawed at room temperature."
    },
    "applianceSpecs": {
      "parameter": "Sub-Zero Air Blast Freezing",
      "guideline": "Place items on the coldest shelf of the freezer (0°F / -18°C) with good air circulation to freeze as rapidly as possible."
    }
  },
  "frozen-fruit": {
    "materialThermal": {
      "property": "Secondary Ice Crystal Recrystallization & Vacuolar Collapse",
      "threshold": "Danger Zone Cumulative Time: Max 2 hours between 40°F–140°F",
      "details": "Slow secondary freezing allows ice crystals to fuse into large angular needles that tear plant and animal tissue cell walls, causing moisture loss and limpness."
    },
    "safetyStandard": {
      "organization": "USDA FSIS / FDA",
      "standard": "USDA FSIS Refreezing Guidelines",
      "citation": "Foods safely thawed in the refrigerator at 40°F or below may be safely refrozen without cooking; discard any perishable food thawed at room temperature."
    },
    "applianceSpecs": {
      "parameter": "Sub-Zero Air Blast Freezing",
      "guideline": "Place items on the coldest shelf of the freezer (0°F / -18°C) with good air circulation to freeze as rapidly as possible."
    }
  },
  "pork-chops": {
    "materialThermal": {
      "property": "Myofibrillar Protein Drip Loss & Metmyoglobin Oxidation",
      "threshold": "Thermal Danger Zone: Never Exceed 40°F (4.4°C); Drip Loss 8%–12%",
      "details": "Secondary freezing ruptures intracellular water pockets, releasing myoglobin and dissolved mineral nutrients as liquid purge during subsequent cooking."
    },
    "safetyStandard": {
      "organization": "USDA FSIS",
      "standard": "FSIS Food Safety Fact Sheets (Refreezing Meat)",
      "citation": "Meat thawed in the refrigerator at <=40°F can be safely refrozen; meat left at room temperature for over 2 hours must be discarded."
    },
    "applianceSpecs": {
      "parameter": "Deep Freeze 0°F Vapor Barrier",
      "guideline": "Wrap in heavy-duty moisture-vapor-resistant wrap and store at 0°F (-18°C); cook thawed ground meat within 2 days before refreezing."
    }
  },
  "meatballs": {
    "materialThermal": {
      "property": "Myofibrillar Protein Drip Loss & Metmyoglobin Oxidation",
      "threshold": "Thermal Danger Zone: Never Exceed 40°F (4.4°C); Drip Loss 8%–12%",
      "details": "Secondary freezing ruptures intracellular water pockets, releasing myoglobin and dissolved mineral nutrients as liquid purge during subsequent cooking."
    },
    "safetyStandard": {
      "organization": "USDA FSIS",
      "standard": "FSIS Food Safety Fact Sheets (Refreezing Meat)",
      "citation": "Meat thawed in the refrigerator at <=40°F can be safely refrozen; meat left at room temperature for over 2 hours must be discarded."
    },
    "applianceSpecs": {
      "parameter": "Deep Freeze 0°F Vapor Barrier",
      "guideline": "Wrap in heavy-duty moisture-vapor-resistant wrap and store at 0°F (-18°C); cook thawed ground meat within 2 days before refreezing."
    }
  },
  "gravy": {
    "materialThermal": {
      "property": "Secondary Ice Crystal Recrystallization & Vacuolar Collapse",
      "threshold": "Danger Zone Cumulative Time: Max 2 hours between 40°F–140°F",
      "details": "Slow secondary freezing allows ice crystals to fuse into large angular needles that tear plant and animal tissue cell walls, causing moisture loss and limpness."
    },
    "safetyStandard": {
      "organization": "USDA FSIS / FDA",
      "standard": "USDA FSIS Refreezing Guidelines",
      "citation": "Foods safely thawed in the refrigerator at 40°F or below may be safely refrozen without cooking; discard any perishable food thawed at room temperature."
    },
    "applianceSpecs": {
      "parameter": "Sub-Zero Air Blast Freezing",
      "guideline": "Place items on the coldest shelf of the freezer (0°F / -18°C) with good air circulation to freeze as rapidly as possible."
    }
  },
  "beef-stew": {
    "materialThermal": {
      "property": "Myofibrillar Protein Drip Loss & Metmyoglobin Oxidation",
      "threshold": "Thermal Danger Zone: Never Exceed 40°F (4.4°C); Drip Loss 8%–12%",
      "details": "Secondary freezing ruptures intracellular water pockets, releasing myoglobin and dissolved mineral nutrients as liquid purge during subsequent cooking."
    },
    "safetyStandard": {
      "organization": "USDA FSIS",
      "standard": "FSIS Food Safety Fact Sheets (Refreezing Meat)",
      "citation": "Meat thawed in the refrigerator at <=40°F can be safely refrozen; meat left at room temperature for over 2 hours must be discarded."
    },
    "applianceSpecs": {
      "parameter": "Deep Freeze 0°F Vapor Barrier",
      "guideline": "Wrap in heavy-duty moisture-vapor-resistant wrap and store at 0°F (-18°C); cook thawed ground meat within 2 days before refreezing."
    }
  },
  "chicken-soup": {
    "materialThermal": {
      "property": "Freeze-Thaw Hysteresis & Sarcolemma Puncture",
      "threshold": "Cumulative Danger Zone Limit: 0 hours >40°F (4.4°C); Freezing Point ~28°F",
      "details": "Repeated ice crystallization punctures avian muscle sarcolemma membranes, increasing purge drip loss by up to 15% and resulting in a dry, stringy cooked texture."
    },
    "safetyStandard": {
      "organization": "USDA FSIS",
      "standard": "FSIS Refreezing Guidelines (Directives on Thawed Meat)",
      "citation": "Raw poultry thawed strictly inside the refrigerator at <=40°F may be safely refrozen without cooking; if thawed on counter or in warm water, cook before refreezing."
    },
    "applianceSpecs": {
      "parameter": "Rapid Sub-Zero Freezing Recovery",
      "guideline": "Refreeze immediately at 0°F (-18°C) wrapped tightly in fresh freezer paper or vacuum bags to minimize secondary ice crystal nucleation size."
    }
  },
  "pot-pie": {
    "materialThermal": {
      "property": "Secondary Ice Crystal Recrystallization & Vacuolar Collapse",
      "threshold": "Danger Zone Cumulative Time: Max 2 hours between 40°F–140°F",
      "details": "Slow secondary freezing allows ice crystals to fuse into large angular needles that tear plant and animal tissue cell walls, causing moisture loss and limpness."
    },
    "safetyStandard": {
      "organization": "USDA FSIS / FDA",
      "standard": "USDA FSIS Refreezing Guidelines",
      "citation": "Foods safely thawed in the refrigerator at 40°F or below may be safely refrozen without cooking; discard any perishable food thawed at room temperature."
    },
    "applianceSpecs": {
      "parameter": "Sub-Zero Air Blast Freezing",
      "guideline": "Place items on the coldest shelf of the freezer (0°F / -18°C) with good air circulation to freeze as rapidly as possible."
    }
  },
  "tortillas": {
    "materialThermal": {
      "property": "Secondary Ice Crystal Recrystallization & Vacuolar Collapse",
      "threshold": "Danger Zone Cumulative Time: Max 2 hours between 40°F–140°F",
      "details": "Slow secondary freezing allows ice crystals to fuse into large angular needles that tear plant and animal tissue cell walls, causing moisture loss and limpness."
    },
    "safetyStandard": {
      "organization": "USDA FSIS / FDA",
      "standard": "USDA FSIS Refreezing Guidelines",
      "citation": "Foods safely thawed in the refrigerator at 40°F or below may be safely refrozen without cooking; discard any perishable food thawed at room temperature."
    },
    "applianceSpecs": {
      "parameter": "Sub-Zero Air Blast Freezing",
      "guideline": "Place items on the coldest shelf of the freezer (0°F / -18°C) with good air circulation to freeze as rapidly as possible."
    }
  },
  "muffins": {
    "materialThermal": {
      "property": "Secondary Ice Crystal Recrystallization & Vacuolar Collapse",
      "threshold": "Danger Zone Cumulative Time: Max 2 hours between 40°F–140°F",
      "details": "Slow secondary freezing allows ice crystals to fuse into large angular needles that tear plant and animal tissue cell walls, causing moisture loss and limpness."
    },
    "safetyStandard": {
      "organization": "USDA FSIS / FDA",
      "standard": "USDA FSIS Refreezing Guidelines",
      "citation": "Foods safely thawed in the refrigerator at 40°F or below may be safely refrozen without cooking; discard any perishable food thawed at room temperature."
    },
    "applianceSpecs": {
      "parameter": "Sub-Zero Air Blast Freezing",
      "guideline": "Place items on the coldest shelf of the freezer (0°F / -18°C) with good air circulation to freeze as rapidly as possible."
    }
  },
  "bagels": {
    "materialThermal": {
      "property": "Secondary Ice Crystal Recrystallization & Vacuolar Collapse",
      "threshold": "Danger Zone Cumulative Time: Max 2 hours between 40°F–140°F",
      "details": "Slow secondary freezing allows ice crystals to fuse into large angular needles that tear plant and animal tissue cell walls, causing moisture loss and limpness."
    },
    "safetyStandard": {
      "organization": "USDA FSIS / FDA",
      "standard": "USDA FSIS Refreezing Guidelines",
      "citation": "Foods safely thawed in the refrigerator at 40°F or below may be safely refrozen without cooking; discard any perishable food thawed at room temperature."
    },
    "applianceSpecs": {
      "parameter": "Sub-Zero Air Blast Freezing",
      "guideline": "Place items on the coldest shelf of the freezer (0°F / -18°C) with good air circulation to freeze as rapidly as possible."
    }
  },
  "croissants": {
    "materialThermal": {
      "property": "Secondary Ice Crystal Recrystallization & Vacuolar Collapse",
      "threshold": "Danger Zone Cumulative Time: Max 2 hours between 40°F–140°F",
      "details": "Slow secondary freezing allows ice crystals to fuse into large angular needles that tear plant and animal tissue cell walls, causing moisture loss and limpness."
    },
    "safetyStandard": {
      "organization": "USDA FSIS / FDA",
      "standard": "USDA FSIS Refreezing Guidelines",
      "citation": "Foods safely thawed in the refrigerator at 40°F or below may be safely refrozen without cooking; discard any perishable food thawed at room temperature."
    },
    "applianceSpecs": {
      "parameter": "Sub-Zero Air Blast Freezing",
      "guideline": "Place items on the coldest shelf of the freezer (0°F / -18°C) with good air circulation to freeze as rapidly as possible."
    }
  },
  "pizza-dough": {
    "materialThermal": {
      "property": "Secondary Ice Crystal Recrystallization & Vacuolar Collapse",
      "threshold": "Danger Zone Cumulative Time: Max 2 hours between 40°F–140°F",
      "details": "Slow secondary freezing allows ice crystals to fuse into large angular needles that tear plant and animal tissue cell walls, causing moisture loss and limpness."
    },
    "safetyStandard": {
      "organization": "USDA FSIS / FDA",
      "standard": "USDA FSIS Refreezing Guidelines",
      "citation": "Foods safely thawed in the refrigerator at 40°F or below may be safely refrozen without cooking; discard any perishable food thawed at room temperature."
    },
    "applianceSpecs": {
      "parameter": "Sub-Zero Air Blast Freezing",
      "guideline": "Place items on the coldest shelf of the freezer (0°F / -18°C) with good air circulation to freeze as rapidly as possible."
    }
  },
  "applesauce": {
    "materialThermal": {
      "property": "Secondary Ice Crystal Recrystallization & Vacuolar Collapse",
      "threshold": "Danger Zone Cumulative Time: Max 2 hours between 40°F–140°F",
      "details": "Slow secondary freezing allows ice crystals to fuse into large angular needles that tear plant and animal tissue cell walls, causing moisture loss and limpness."
    },
    "safetyStandard": {
      "organization": "USDA FSIS / FDA",
      "standard": "USDA FSIS Refreezing Guidelines",
      "citation": "Foods safely thawed in the refrigerator at 40°F or below may be safely refrozen without cooking; discard any perishable food thawed at room temperature."
    },
    "applianceSpecs": {
      "parameter": "Sub-Zero Air Blast Freezing",
      "guideline": "Place items on the coldest shelf of the freezer (0°F / -18°C) with good air circulation to freeze as rapidly as possible."
    }
  },
  "mashed-potatoes": {
    "materialThermal": {
      "property": "Secondary Ice Crystal Recrystallization & Vacuolar Collapse",
      "threshold": "Danger Zone Cumulative Time: Max 2 hours between 40°F–140°F",
      "details": "Slow secondary freezing allows ice crystals to fuse into large angular needles that tear plant and animal tissue cell walls, causing moisture loss and limpness."
    },
    "safetyStandard": {
      "organization": "USDA FSIS / FDA",
      "standard": "USDA FSIS Refreezing Guidelines",
      "citation": "Foods safely thawed in the refrigerator at 40°F or below may be safely refrozen without cooking; discard any perishable food thawed at room temperature."
    },
    "applianceSpecs": {
      "parameter": "Sub-Zero Air Blast Freezing",
      "guideline": "Place items on the coldest shelf of the freezer (0°F / -18°C) with good air circulation to freeze as rapidly as possible."
    }
  },
  "green-beans": {
    "materialThermal": {
      "property": "Secondary Ice Crystal Recrystallization & Vacuolar Collapse",
      "threshold": "Danger Zone Cumulative Time: Max 2 hours between 40°F–140°F",
      "details": "Slow secondary freezing allows ice crystals to fuse into large angular needles that tear plant and animal tissue cell walls, causing moisture loss and limpness."
    },
    "safetyStandard": {
      "organization": "USDA FSIS / FDA",
      "standard": "USDA FSIS Refreezing Guidelines",
      "citation": "Foods safely thawed in the refrigerator at 40°F or below may be safely refrozen without cooking; discard any perishable food thawed at room temperature."
    },
    "applianceSpecs": {
      "parameter": "Sub-Zero Air Blast Freezing",
      "guideline": "Place items on the coldest shelf of the freezer (0°F / -18°C) with good air circulation to freeze as rapidly as possible."
    }
  },
  "carrots": {
    "materialThermal": {
      "property": "Secondary Ice Crystal Recrystallization & Vacuolar Collapse",
      "threshold": "Danger Zone Cumulative Time: Max 2 hours between 40°F–140°F",
      "details": "Slow secondary freezing allows ice crystals to fuse into large angular needles that tear plant and animal tissue cell walls, causing moisture loss and limpness."
    },
    "safetyStandard": {
      "organization": "USDA FSIS / FDA",
      "standard": "USDA FSIS Refreezing Guidelines",
      "citation": "Foods safely thawed in the refrigerator at 40°F or below may be safely refrozen without cooking; discard any perishable food thawed at room temperature."
    },
    "applianceSpecs": {
      "parameter": "Sub-Zero Air Blast Freezing",
      "guideline": "Place items on the coldest shelf of the freezer (0°F / -18°C) with good air circulation to freeze as rapidly as possible."
    }
  },
  "cauliflower": {
    "materialThermal": {
      "property": "Secondary Ice Crystal Recrystallization & Vacuolar Collapse",
      "threshold": "Danger Zone Cumulative Time: Max 2 hours between 40°F–140°F",
      "details": "Slow secondary freezing allows ice crystals to fuse into large angular needles that tear plant and animal tissue cell walls, causing moisture loss and limpness."
    },
    "safetyStandard": {
      "organization": "USDA FSIS / FDA",
      "standard": "USDA FSIS Refreezing Guidelines",
      "citation": "Foods safely thawed in the refrigerator at 40°F or below may be safely refrozen without cooking; discard any perishable food thawed at room temperature."
    },
    "applianceSpecs": {
      "parameter": "Sub-Zero Air Blast Freezing",
      "guideline": "Place items on the coldest shelf of the freezer (0°F / -18°C) with good air circulation to freeze as rapidly as possible."
    }
  },
  "shredded-cheese": {
    "materialThermal": {
      "property": "Emulsion Destabilization & Casein Curdling Phase Change",
      "threshold": "Emulsion Separation Point 31°F (-0.5°C)",
      "details": "Dairy emulsions rely on fragile fat globule membranes. Freezing twice permanently breaks the emulsion, separating clear whey liquid from grainy fat clumps."
    },
    "safetyStandard": {
      "organization": "FDA",
      "standard": "FDA Food Code 2022 § 3-501.16",
      "citation": "Refreezing thawed dairy products is safe if kept below 40°F, but physical curdling makes them suitable only for baking and cooked sauces."
    },
    "applianceSpecs": {
      "parameter": "Thawing & Re-blending Protocol",
      "guideline": "Thaw slowly in the refrigerator at 36°F–38°F and whisk vigorously before using in cooked recipes; do not expect original fresh emulsion texture."
    }
  },
  "heavy-whipping-cream": {
    "materialThermal": {
      "property": "Emulsion Destabilization & Casein Curdling Phase Change",
      "threshold": "Emulsion Separation Point 31°F (-0.5°C)",
      "details": "Dairy emulsions rely on fragile fat globule membranes. Freezing twice permanently breaks the emulsion, separating clear whey liquid from grainy fat clumps."
    },
    "safetyStandard": {
      "organization": "FDA",
      "standard": "FDA Food Code 2022 § 3-501.16",
      "citation": "Refreezing thawed dairy products is safe if kept below 40°F, but physical curdling makes them suitable only for baking and cooked sauces."
    },
    "applianceSpecs": {
      "parameter": "Thawing & Re-blending Protocol",
      "guideline": "Thaw slowly in the refrigerator at 36°F–38°F and whisk vigorously before using in cooked recipes; do not expect original fresh emulsion texture."
    }
  },
  "cream-cheese-frosting": {
    "materialThermal": {
      "property": "Emulsion Destabilization & Casein Curdling Phase Change",
      "threshold": "Emulsion Separation Point 31°F (-0.5°C)",
      "details": "Dairy emulsions rely on fragile fat globule membranes. Freezing twice permanently breaks the emulsion, separating clear whey liquid from grainy fat clumps."
    },
    "safetyStandard": {
      "organization": "FDA",
      "standard": "FDA Food Code 2022 § 3-501.16",
      "citation": "Refreezing thawed dairy products is safe if kept below 40°F, but physical curdling makes them suitable only for baking and cooked sauces."
    },
    "applianceSpecs": {
      "parameter": "Thawing & Re-blending Protocol",
      "guideline": "Thaw slowly in the refrigerator at 36°F–38°F and whisk vigorously before using in cooked recipes; do not expect original fresh emulsion texture."
    }
  },
  "casserole": {
    "materialThermal": {
      "property": "Secondary Ice Crystal Recrystallization & Vacuolar Collapse",
      "threshold": "Danger Zone Cumulative Time: Max 2 hours between 40°F–140°F",
      "details": "Slow secondary freezing allows ice crystals to fuse into large angular needles that tear plant and animal tissue cell walls, causing moisture loss and limpness."
    },
    "safetyStandard": {
      "organization": "USDA FSIS / FDA",
      "standard": "USDA FSIS Refreezing Guidelines",
      "citation": "Foods safely thawed in the refrigerator at 40°F or below may be safely refrozen without cooking; discard any perishable food thawed at room temperature."
    },
    "applianceSpecs": {
      "parameter": "Sub-Zero Air Blast Freezing",
      "guideline": "Place items on the coldest shelf of the freezer (0°F / -18°C) with good air circulation to freeze as rapidly as possible."
    }
  },
  "cooked-salmon": {
    "materialThermal": {
      "property": "Delicate Fish Muscle Cell Rupture & Enzymatic Softening",
      "threshold": "Psychrotrophic Bacterial Activation >32°F (0°C); Safe Refrigerator Hold <=38°F",
      "details": "Seafood muscle fibers are short and fragile. Freezing twice tears connective myocommata sheets, causing delicate fish fillets to become mushy and watery."
    },
    "safetyStandard": {
      "organization": "FDA",
      "standard": "FDA Fish and Fishery Products Hazards and Controls Guidance",
      "citation": "Raw seafood thawed under cold running water or in microwave must be cooked immediately before refreezing."
    },
    "applianceSpecs": {
      "parameter": "Air-Free Packaging Protocol",
      "guideline": "Cook raw seafood first, then freeze cooked portions at 0°F to retain structural integrity and avoid texture degradation."
    }
  },
  "cooked-beans": {
    "materialThermal": {
      "property": "Secondary Ice Crystal Recrystallization & Vacuolar Collapse",
      "threshold": "Danger Zone Cumulative Time: Max 2 hours between 40°F–140°F",
      "details": "Slow secondary freezing allows ice crystals to fuse into large angular needles that tear plant and animal tissue cell walls, causing moisture loss and limpness."
    },
    "safetyStandard": {
      "organization": "USDA FSIS / FDA",
      "standard": "USDA FSIS Refreezing Guidelines",
      "citation": "Foods safely thawed in the refrigerator at 40°F or below may be safely refrozen without cooking; discard any perishable food thawed at room temperature."
    },
    "applianceSpecs": {
      "parameter": "Sub-Zero Air Blast Freezing",
      "guideline": "Place items on the coldest shelf of the freezer (0°F / -18°C) with good air circulation to freeze as rapidly as possible."
    }
  },
  "pesto": {
    "materialThermal": {
      "property": "Secondary Ice Crystal Recrystallization & Vacuolar Collapse",
      "threshold": "Danger Zone Cumulative Time: Max 2 hours between 40°F–140°F",
      "details": "Slow secondary freezing allows ice crystals to fuse into large angular needles that tear plant and animal tissue cell walls, causing moisture loss and limpness."
    },
    "safetyStandard": {
      "organization": "USDA FSIS / FDA",
      "standard": "USDA FSIS Refreezing Guidelines",
      "citation": "Foods safely thawed in the refrigerator at 40°F or below may be safely refrozen without cooking; discard any perishable food thawed at room temperature."
    },
    "applianceSpecs": {
      "parameter": "Sub-Zero Air Blast Freezing",
      "guideline": "Place items on the coldest shelf of the freezer (0°F / -18°C) with good air circulation to freeze as rapidly as possible."
    }
  },
  "tofu": {
    "materialThermal": {
      "property": "Secondary Ice Crystal Recrystallization & Vacuolar Collapse",
      "threshold": "Danger Zone Cumulative Time: Max 2 hours between 40°F–140°F",
      "details": "Slow secondary freezing allows ice crystals to fuse into large angular needles that tear plant and animal tissue cell walls, causing moisture loss and limpness."
    },
    "safetyStandard": {
      "organization": "USDA FSIS / FDA",
      "standard": "USDA FSIS Refreezing Guidelines",
      "citation": "Foods safely thawed in the refrigerator at 40°F or below may be safely refrozen without cooking; discard any perishable food thawed at room temperature."
    },
    "applianceSpecs": {
      "parameter": "Sub-Zero Air Blast Freezing",
      "guideline": "Place items on the coldest shelf of the freezer (0°F / -18°C) with good air circulation to freeze as rapidly as possible."
    }
  },
  "cooked-pork": {
    "materialThermal": {
      "property": "Myofibrillar Protein Drip Loss & Metmyoglobin Oxidation",
      "threshold": "Thermal Danger Zone: Never Exceed 40°F (4.4°C); Drip Loss 8%–12%",
      "details": "Secondary freezing ruptures intracellular water pockets, releasing myoglobin and dissolved mineral nutrients as liquid purge during subsequent cooking."
    },
    "safetyStandard": {
      "organization": "USDA FSIS",
      "standard": "FSIS Food Safety Fact Sheets (Refreezing Meat)",
      "citation": "Meat thawed in the refrigerator at <=40°F can be safely refrozen; meat left at room temperature for over 2 hours must be discarded."
    },
    "applianceSpecs": {
      "parameter": "Deep Freeze 0°F Vapor Barrier",
      "guideline": "Wrap in heavy-duty moisture-vapor-resistant wrap and store at 0°F (-18°C); cook thawed ground meat within 2 days before refreezing."
    }
  },
  "cooked-lamb": {
    "materialThermal": {
      "property": "Myofibrillar Protein Drip Loss & Metmyoglobin Oxidation",
      "threshold": "Thermal Danger Zone: Never Exceed 40°F (4.4°C); Drip Loss 8%–12%",
      "details": "Secondary freezing ruptures intracellular water pockets, releasing myoglobin and dissolved mineral nutrients as liquid purge during subsequent cooking."
    },
    "safetyStandard": {
      "organization": "USDA FSIS",
      "standard": "FSIS Food Safety Fact Sheets (Refreezing Meat)",
      "citation": "Meat thawed in the refrigerator at <=40°F can be safely refrozen; meat left at room temperature for over 2 hours must be discarded."
    },
    "applianceSpecs": {
      "parameter": "Deep Freeze 0°F Vapor Barrier",
      "guideline": "Wrap in heavy-duty moisture-vapor-resistant wrap and store at 0°F (-18°C); cook thawed ground meat within 2 days before refreezing."
    }
  },
  "cooked-duck": {
    "materialThermal": {
      "property": "Freeze-Thaw Hysteresis & Sarcolemma Puncture",
      "threshold": "Cumulative Danger Zone Limit: 0 hours >40°F (4.4°C); Freezing Point ~28°F",
      "details": "Repeated ice crystallization punctures avian muscle sarcolemma membranes, increasing purge drip loss by up to 15% and resulting in a dry, stringy cooked texture."
    },
    "safetyStandard": {
      "organization": "USDA FSIS",
      "standard": "FSIS Refreezing Guidelines (Directives on Thawed Meat)",
      "citation": "Raw poultry thawed strictly inside the refrigerator at <=40°F may be safely refrozen without cooking; if thawed on counter or in warm water, cook before refreezing."
    },
    "applianceSpecs": {
      "parameter": "Rapid Sub-Zero Freezing Recovery",
      "guideline": "Refreeze immediately at 0°F (-18°C) wrapped tightly in fresh freezer paper or vacuum bags to minimize secondary ice crystal nucleation size."
    }
  },
  "cooked-crab": {
    "materialThermal": {
      "property": "Delicate Fish Muscle Cell Rupture & Enzymatic Softening",
      "threshold": "Psychrotrophic Bacterial Activation >32°F (0°C); Safe Refrigerator Hold <=38°F",
      "details": "Seafood muscle fibers are short and fragile. Freezing twice tears connective myocommata sheets, causing delicate fish fillets to become mushy and watery."
    },
    "safetyStandard": {
      "organization": "FDA",
      "standard": "FDA Fish and Fishery Products Hazards and Controls Guidance",
      "citation": "Raw seafood thawed under cold running water or in microwave must be cooked immediately before refreezing."
    },
    "applianceSpecs": {
      "parameter": "Air-Free Packaging Protocol",
      "guideline": "Cook raw seafood first, then freeze cooked portions at 0°F to retain structural integrity and avoid texture degradation."
    }
  },
  "cooked-lobster": {
    "materialThermal": {
      "property": "Delicate Fish Muscle Cell Rupture & Enzymatic Softening",
      "threshold": "Psychrotrophic Bacterial Activation >32°F (0°C); Safe Refrigerator Hold <=38°F",
      "details": "Seafood muscle fibers are short and fragile. Freezing twice tears connective myocommata sheets, causing delicate fish fillets to become mushy and watery."
    },
    "safetyStandard": {
      "organization": "FDA",
      "standard": "FDA Fish and Fishery Products Hazards and Controls Guidance",
      "citation": "Raw seafood thawed under cold running water or in microwave must be cooked immediately before refreezing."
    },
    "applianceSpecs": {
      "parameter": "Air-Free Packaging Protocol",
      "guideline": "Cook raw seafood first, then freeze cooked portions at 0°F to retain structural integrity and avoid texture degradation."
    }
  },
  "cooked-scallops": {
    "materialThermal": {
      "property": "Delicate Fish Muscle Cell Rupture & Enzymatic Softening",
      "threshold": "Psychrotrophic Bacterial Activation >32°F (0°C); Safe Refrigerator Hold <=38°F",
      "details": "Seafood muscle fibers are short and fragile. Freezing twice tears connective myocommata sheets, causing delicate fish fillets to become mushy and watery."
    },
    "safetyStandard": {
      "organization": "FDA",
      "standard": "FDA Fish and Fishery Products Hazards and Controls Guidance",
      "citation": "Raw seafood thawed under cold running water or in microwave must be cooked immediately before refreezing."
    },
    "applianceSpecs": {
      "parameter": "Air-Free Packaging Protocol",
      "guideline": "Cook raw seafood first, then freeze cooked portions at 0°F to retain structural integrity and avoid texture degradation."
    }
  },
  "cooked-tilapia": {
    "materialThermal": {
      "property": "Secondary Ice Crystal Recrystallization & Vacuolar Collapse",
      "threshold": "Danger Zone Cumulative Time: Max 2 hours between 40°F–140°F",
      "details": "Slow secondary freezing allows ice crystals to fuse into large angular needles that tear plant and animal tissue cell walls, causing moisture loss and limpness."
    },
    "safetyStandard": {
      "organization": "USDA FSIS / FDA",
      "standard": "USDA FSIS Refreezing Guidelines",
      "citation": "Foods safely thawed in the refrigerator at 40°F or below may be safely refrozen without cooking; discard any perishable food thawed at room temperature."
    },
    "applianceSpecs": {
      "parameter": "Sub-Zero Air Blast Freezing",
      "guideline": "Place items on the coldest shelf of the freezer (0°F / -18°C) with good air circulation to freeze as rapidly as possible."
    }
  },
  "cooked-cod": {
    "materialThermal": {
      "property": "Secondary Ice Crystal Recrystallization & Vacuolar Collapse",
      "threshold": "Danger Zone Cumulative Time: Max 2 hours between 40°F–140°F",
      "details": "Slow secondary freezing allows ice crystals to fuse into large angular needles that tear plant and animal tissue cell walls, causing moisture loss and limpness."
    },
    "safetyStandard": {
      "organization": "USDA FSIS / FDA",
      "standard": "USDA FSIS Refreezing Guidelines",
      "citation": "Foods safely thawed in the refrigerator at 40°F or below may be safely refrozen without cooking; discard any perishable food thawed at room temperature."
    },
    "applianceSpecs": {
      "parameter": "Sub-Zero Air Blast Freezing",
      "guideline": "Place items on the coldest shelf of the freezer (0°F / -18°C) with good air circulation to freeze as rapidly as possible."
    }
  },
  "dumplings": {
    "materialThermal": {
      "property": "Secondary Ice Crystal Recrystallization & Vacuolar Collapse",
      "threshold": "Danger Zone Cumulative Time: Max 2 hours between 40°F–140°F",
      "details": "Slow secondary freezing allows ice crystals to fuse into large angular needles that tear plant and animal tissue cell walls, causing moisture loss and limpness."
    },
    "safetyStandard": {
      "organization": "USDA FSIS / FDA",
      "standard": "USDA FSIS Refreezing Guidelines",
      "citation": "Foods safely thawed in the refrigerator at 40°F or below may be safely refrozen without cooking; discard any perishable food thawed at room temperature."
    },
    "applianceSpecs": {
      "parameter": "Sub-Zero Air Blast Freezing",
      "guideline": "Place items on the coldest shelf of the freezer (0°F / -18°C) with good air circulation to freeze as rapidly as possible."
    }
  },
  "tamales": {
    "materialThermal": {
      "property": "Secondary Ice Crystal Recrystallization & Vacuolar Collapse",
      "threshold": "Danger Zone Cumulative Time: Max 2 hours between 40°F–140°F",
      "details": "Slow secondary freezing allows ice crystals to fuse into large angular needles that tear plant and animal tissue cell walls, causing moisture loss and limpness."
    },
    "safetyStandard": {
      "organization": "USDA FSIS / FDA",
      "standard": "USDA FSIS Refreezing Guidelines",
      "citation": "Foods safely thawed in the refrigerator at 40°F or below may be safely refrozen without cooking; discard any perishable food thawed at room temperature."
    },
    "applianceSpecs": {
      "parameter": "Sub-Zero Air Blast Freezing",
      "guideline": "Place items on the coldest shelf of the freezer (0°F / -18°C) with good air circulation to freeze as rapidly as possible."
    }
  },
  "empanadas": {
    "materialThermal": {
      "property": "Secondary Ice Crystal Recrystallization & Vacuolar Collapse",
      "threshold": "Danger Zone Cumulative Time: Max 2 hours between 40°F–140°F",
      "details": "Slow secondary freezing allows ice crystals to fuse into large angular needles that tear plant and animal tissue cell walls, causing moisture loss and limpness."
    },
    "safetyStandard": {
      "organization": "USDA FSIS / FDA",
      "standard": "USDA FSIS Refreezing Guidelines",
      "citation": "Foods safely thawed in the refrigerator at 40°F or below may be safely refrozen without cooking; discard any perishable food thawed at room temperature."
    },
    "applianceSpecs": {
      "parameter": "Sub-Zero Air Blast Freezing",
      "guideline": "Place items on the coldest shelf of the freezer (0°F / -18°C) with good air circulation to freeze as rapidly as possible."
    }
  },
  "quiche": {
    "materialThermal": {
      "property": "Secondary Ice Crystal Recrystallization & Vacuolar Collapse",
      "threshold": "Danger Zone Cumulative Time: Max 2 hours between 40°F–140°F",
      "details": "Slow secondary freezing allows ice crystals to fuse into large angular needles that tear plant and animal tissue cell walls, causing moisture loss and limpness."
    },
    "safetyStandard": {
      "organization": "USDA FSIS / FDA",
      "standard": "USDA FSIS Refreezing Guidelines",
      "citation": "Foods safely thawed in the refrigerator at 40°F or below may be safely refrozen without cooking; discard any perishable food thawed at room temperature."
    },
    "applianceSpecs": {
      "parameter": "Sub-Zero Air Blast Freezing",
      "guideline": "Place items on the coldest shelf of the freezer (0°F / -18°C) with good air circulation to freeze as rapidly as possible."
    }
  },
  "meatloaf": {
    "materialThermal": {
      "property": "Myofibrillar Protein Drip Loss & Metmyoglobin Oxidation",
      "threshold": "Thermal Danger Zone: Never Exceed 40°F (4.4°C); Drip Loss 8%–12%",
      "details": "Secondary freezing ruptures intracellular water pockets, releasing myoglobin and dissolved mineral nutrients as liquid purge during subsequent cooking."
    },
    "safetyStandard": {
      "organization": "USDA FSIS",
      "standard": "FSIS Food Safety Fact Sheets (Refreezing Meat)",
      "citation": "Meat thawed in the refrigerator at <=40°F can be safely refrozen; meat left at room temperature for over 2 hours must be discarded."
    },
    "applianceSpecs": {
      "parameter": "Deep Freeze 0°F Vapor Barrier",
      "guideline": "Wrap in heavy-duty moisture-vapor-resistant wrap and store at 0°F (-18°C); cook thawed ground meat within 2 days before refreezing."
    }
  },
  "pulled-pork": {
    "materialThermal": {
      "property": "Myofibrillar Protein Drip Loss & Metmyoglobin Oxidation",
      "threshold": "Thermal Danger Zone: Never Exceed 40°F (4.4°C); Drip Loss 8%–12%",
      "details": "Secondary freezing ruptures intracellular water pockets, releasing myoglobin and dissolved mineral nutrients as liquid purge during subsequent cooking."
    },
    "safetyStandard": {
      "organization": "USDA FSIS",
      "standard": "FSIS Food Safety Fact Sheets (Refreezing Meat)",
      "citation": "Meat thawed in the refrigerator at <=40°F can be safely refrozen; meat left at room temperature for over 2 hours must be discarded."
    },
    "applianceSpecs": {
      "parameter": "Deep Freeze 0°F Vapor Barrier",
      "guideline": "Wrap in heavy-duty moisture-vapor-resistant wrap and store at 0°F (-18°C); cook thawed ground meat within 2 days before refreezing."
    }
  },
  "mac-and-cheese": {
    "materialThermal": {
      "property": "Emulsion Destabilization & Casein Curdling Phase Change",
      "threshold": "Emulsion Separation Point 31°F (-0.5°C)",
      "details": "Dairy emulsions rely on fragile fat globule membranes. Freezing twice permanently breaks the emulsion, separating clear whey liquid from grainy fat clumps."
    },
    "safetyStandard": {
      "organization": "FDA",
      "standard": "FDA Food Code 2022 § 3-501.16",
      "citation": "Refreezing thawed dairy products is safe if kept below 40°F, but physical curdling makes them suitable only for baking and cooked sauces."
    },
    "applianceSpecs": {
      "parameter": "Thawing & Re-blending Protocol",
      "guideline": "Thaw slowly in the refrigerator at 36°F–38°F and whisk vigorously before using in cooked recipes; do not expect original fresh emulsion texture."
    }
  },
  "stuffed-peppers": {
    "materialThermal": {
      "property": "Secondary Ice Crystal Recrystallization & Vacuolar Collapse",
      "threshold": "Danger Zone Cumulative Time: Max 2 hours between 40°F–140°F",
      "details": "Slow secondary freezing allows ice crystals to fuse into large angular needles that tear plant and animal tissue cell walls, causing moisture loss and limpness."
    },
    "safetyStandard": {
      "organization": "USDA FSIS / FDA",
      "standard": "USDA FSIS Refreezing Guidelines",
      "citation": "Foods safely thawed in the refrigerator at 40°F or below may be safely refrozen without cooking; discard any perishable food thawed at room temperature."
    },
    "applianceSpecs": {
      "parameter": "Sub-Zero Air Blast Freezing",
      "guideline": "Place items on the coldest shelf of the freezer (0°F / -18°C) with good air circulation to freeze as rapidly as possible."
    }
  },
  "enchiladas": {
    "materialThermal": {
      "property": "Secondary Ice Crystal Recrystallization & Vacuolar Collapse",
      "threshold": "Danger Zone Cumulative Time: Max 2 hours between 40°F–140°F",
      "details": "Slow secondary freezing allows ice crystals to fuse into large angular needles that tear plant and animal tissue cell walls, causing moisture loss and limpness."
    },
    "safetyStandard": {
      "organization": "USDA FSIS / FDA",
      "standard": "USDA FSIS Refreezing Guidelines",
      "citation": "Foods safely thawed in the refrigerator at 40°F or below may be safely refrozen without cooking; discard any perishable food thawed at room temperature."
    },
    "applianceSpecs": {
      "parameter": "Sub-Zero Air Blast Freezing",
      "guideline": "Place items on the coldest shelf of the freezer (0°F / -18°C) with good air circulation to freeze as rapidly as possible."
    }
  },
  "raw-pork": {
    "materialThermal": {
      "property": "Myofibrillar Protein Drip Loss & Metmyoglobin Oxidation",
      "threshold": "Thermal Danger Zone: Never Exceed 40°F (4.4°C); Drip Loss 8%–12%",
      "details": "Secondary freezing ruptures intracellular water pockets, releasing myoglobin and dissolved mineral nutrients as liquid purge during subsequent cooking."
    },
    "safetyStandard": {
      "organization": "USDA FSIS",
      "standard": "FSIS Food Safety Fact Sheets (Refreezing Meat)",
      "citation": "Meat thawed in the refrigerator at <=40°F can be safely refrozen; meat left at room temperature for over 2 hours must be discarded."
    },
    "applianceSpecs": {
      "parameter": "Deep Freeze 0°F Vapor Barrier",
      "guideline": "Wrap in heavy-duty moisture-vapor-resistant wrap and store at 0°F (-18°C); cook thawed ground meat within 2 days before refreezing."
    }
  },
  "raw-lamb": {
    "materialThermal": {
      "property": "Myofibrillar Protein Drip Loss & Metmyoglobin Oxidation",
      "threshold": "Thermal Danger Zone: Never Exceed 40°F (4.4°C); Drip Loss 8%–12%",
      "details": "Secondary freezing ruptures intracellular water pockets, releasing myoglobin and dissolved mineral nutrients as liquid purge during subsequent cooking."
    },
    "safetyStandard": {
      "organization": "USDA FSIS",
      "standard": "FSIS Food Safety Fact Sheets (Refreezing Meat)",
      "citation": "Meat thawed in the refrigerator at <=40°F can be safely refrozen; meat left at room temperature for over 2 hours must be discarded."
    },
    "applianceSpecs": {
      "parameter": "Deep Freeze 0°F Vapor Barrier",
      "guideline": "Wrap in heavy-duty moisture-vapor-resistant wrap and store at 0°F (-18°C); cook thawed ground meat within 2 days before refreezing."
    }
  },
  "raw-duck": {
    "materialThermal": {
      "property": "Freeze-Thaw Hysteresis & Sarcolemma Puncture",
      "threshold": "Cumulative Danger Zone Limit: 0 hours >40°F (4.4°C); Freezing Point ~28°F",
      "details": "Repeated ice crystallization punctures avian muscle sarcolemma membranes, increasing purge drip loss by up to 15% and resulting in a dry, stringy cooked texture."
    },
    "safetyStandard": {
      "organization": "USDA FSIS",
      "standard": "FSIS Refreezing Guidelines (Directives on Thawed Meat)",
      "citation": "Raw poultry thawed strictly inside the refrigerator at <=40°F may be safely refrozen without cooking; if thawed on counter or in warm water, cook before refreezing."
    },
    "applianceSpecs": {
      "parameter": "Rapid Sub-Zero Freezing Recovery",
      "guideline": "Refreeze immediately at 0°F (-18°C) wrapped tightly in fresh freezer paper or vacuum bags to minimize secondary ice crystal nucleation size."
    }
  },
  "ricotta-refreeze": {
    "materialThermal": {
      "property": "Secondary Ice Crystal Recrystallization & Vacuolar Collapse",
      "threshold": "Danger Zone Cumulative Time: Max 2 hours between 40°F–140°F",
      "details": "Slow secondary freezing allows ice crystals to fuse into large angular needles that tear plant and animal tissue cell walls, causing moisture loss and limpness."
    },
    "safetyStandard": {
      "organization": "USDA FSIS / FDA",
      "standard": "USDA FSIS Refreezing Guidelines",
      "citation": "Foods safely thawed in the refrigerator at 40°F or below may be safely refrozen without cooking; discard any perishable food thawed at room temperature."
    },
    "applianceSpecs": {
      "parameter": "Sub-Zero Air Blast Freezing",
      "guideline": "Place items on the coldest shelf of the freezer (0°F / -18°C) with good air circulation to freeze as rapidly as possible."
    }
  },
  "brie-refreeze": {
    "materialThermal": {
      "property": "Secondary Ice Crystal Recrystallization & Vacuolar Collapse",
      "threshold": "Danger Zone Cumulative Time: Max 2 hours between 40°F–140°F",
      "details": "Slow secondary freezing allows ice crystals to fuse into large angular needles that tear plant and animal tissue cell walls, causing moisture loss and limpness."
    },
    "safetyStandard": {
      "organization": "USDA FSIS / FDA",
      "standard": "USDA FSIS Refreezing Guidelines",
      "citation": "Foods safely thawed in the refrigerator at 40°F or below may be safely refrozen without cooking; discard any perishable food thawed at room temperature."
    },
    "applianceSpecs": {
      "parameter": "Sub-Zero Air Blast Freezing",
      "guideline": "Place items on the coldest shelf of the freezer (0°F / -18°C) with good air circulation to freeze as rapidly as possible."
    }
  },
  "feta-refreeze": {
    "materialThermal": {
      "property": "Secondary Ice Crystal Recrystallization & Vacuolar Collapse",
      "threshold": "Danger Zone Cumulative Time: Max 2 hours between 40°F–140°F",
      "details": "Slow secondary freezing allows ice crystals to fuse into large angular needles that tear plant and animal tissue cell walls, causing moisture loss and limpness."
    },
    "safetyStandard": {
      "organization": "USDA FSIS / FDA",
      "standard": "USDA FSIS Refreezing Guidelines",
      "citation": "Foods safely thawed in the refrigerator at 40°F or below may be safely refrozen without cooking; discard any perishable food thawed at room temperature."
    },
    "applianceSpecs": {
      "parameter": "Sub-Zero Air Blast Freezing",
      "guideline": "Place items on the coldest shelf of the freezer (0°F / -18°C) with good air circulation to freeze as rapidly as possible."
    }
  },
  "mixed-vegetables": {
    "materialThermal": {
      "property": "Secondary Ice Crystal Recrystallization & Vacuolar Collapse",
      "threshold": "Danger Zone Cumulative Time: Max 2 hours between 40°F–140°F",
      "details": "Slow secondary freezing allows ice crystals to fuse into large angular needles that tear plant and animal tissue cell walls, causing moisture loss and limpness."
    },
    "safetyStandard": {
      "organization": "USDA FSIS / FDA",
      "standard": "USDA FSIS Refreezing Guidelines",
      "citation": "Foods safely thawed in the refrigerator at 40°F or below may be safely refrozen without cooking; discard any perishable food thawed at room temperature."
    },
    "applianceSpecs": {
      "parameter": "Sub-Zero Air Blast Freezing",
      "guideline": "Place items on the coldest shelf of the freezer (0°F / -18°C) with good air circulation to freeze as rapidly as possible."
    }
  },
  "edamame": {
    "materialThermal": {
      "property": "Secondary Ice Crystal Recrystallization & Vacuolar Collapse",
      "threshold": "Danger Zone Cumulative Time: Max 2 hours between 40°F–140°F",
      "details": "Slow secondary freezing allows ice crystals to fuse into large angular needles that tear plant and animal tissue cell walls, causing moisture loss and limpness."
    },
    "safetyStandard": {
      "organization": "USDA FSIS / FDA",
      "standard": "USDA FSIS Refreezing Guidelines",
      "citation": "Foods safely thawed in the refrigerator at 40°F or below may be safely refrozen without cooking; discard any perishable food thawed at room temperature."
    },
    "applianceSpecs": {
      "parameter": "Sub-Zero Air Blast Freezing",
      "guideline": "Place items on the coldest shelf of the freezer (0°F / -18°C) with good air circulation to freeze as rapidly as possible."
    }
  },
  "tempeh-frozen": {
    "materialThermal": {
      "property": "Secondary Ice Crystal Recrystallization & Vacuolar Collapse",
      "threshold": "Danger Zone Cumulative Time: Max 2 hours between 40°F–140°F",
      "details": "Slow secondary freezing allows ice crystals to fuse into large angular needles that tear plant and animal tissue cell walls, causing moisture loss and limpness."
    },
    "safetyStandard": {
      "organization": "USDA FSIS / FDA",
      "standard": "USDA FSIS Refreezing Guidelines",
      "citation": "Foods safely thawed in the refrigerator at 40°F or below may be safely refrozen without cooking; discard any perishable food thawed at room temperature."
    },
    "applianceSpecs": {
      "parameter": "Sub-Zero Air Blast Freezing",
      "guideline": "Place items on the coldest shelf of the freezer (0°F / -18°C) with good air circulation to freeze as rapidly as possible."
    }
  },
  "smoothie-packs": {
    "materialThermal": {
      "property": "Secondary Ice Crystal Recrystallization & Vacuolar Collapse",
      "threshold": "Danger Zone Cumulative Time: Max 2 hours between 40°F–140°F",
      "details": "Slow secondary freezing allows ice crystals to fuse into large angular needles that tear plant and animal tissue cell walls, causing moisture loss and limpness."
    },
    "safetyStandard": {
      "organization": "USDA FSIS / FDA",
      "standard": "USDA FSIS Refreezing Guidelines",
      "citation": "Foods safely thawed in the refrigerator at 40°F or below may be safely refrozen without cooking; discard any perishable food thawed at room temperature."
    },
    "applianceSpecs": {
      "parameter": "Sub-Zero Air Blast Freezing",
      "guideline": "Place items on the coldest shelf of the freezer (0°F / -18°C) with good air circulation to freeze as rapidly as possible."
    }
  },
  "juice-concentrate": {
    "materialThermal": {
      "property": "Secondary Ice Crystal Recrystallization & Vacuolar Collapse",
      "threshold": "Danger Zone Cumulative Time: Max 2 hours between 40°F–140°F",
      "details": "Slow secondary freezing allows ice crystals to fuse into large angular needles that tear plant and animal tissue cell walls, causing moisture loss and limpness."
    },
    "safetyStandard": {
      "organization": "USDA FSIS / FDA",
      "standard": "USDA FSIS Refreezing Guidelines",
      "citation": "Foods safely thawed in the refrigerator at 40°F or below may be safely refrozen without cooking; discard any perishable food thawed at room temperature."
    },
    "applianceSpecs": {
      "parameter": "Sub-Zero Air Blast Freezing",
      "guideline": "Place items on the coldest shelf of the freezer (0°F / -18°C) with good air circulation to freeze as rapidly as possible."
    }
  },
  "bone-broth-frozen": {
    "materialThermal": {
      "property": "Secondary Ice Crystal Recrystallization & Vacuolar Collapse",
      "threshold": "Danger Zone Cumulative Time: Max 2 hours between 40°F–140°F",
      "details": "Slow secondary freezing allows ice crystals to fuse into large angular needles that tear plant and animal tissue cell walls, causing moisture loss and limpness."
    },
    "safetyStandard": {
      "organization": "USDA FSIS / FDA",
      "standard": "USDA FSIS Refreezing Guidelines",
      "citation": "Foods safely thawed in the refrigerator at 40°F or below may be safely refrozen without cooking; discard any perishable food thawed at room temperature."
    },
    "applianceSpecs": {
      "parameter": "Sub-Zero Air Blast Freezing",
      "guideline": "Place items on the coldest shelf of the freezer (0°F / -18°C) with good air circulation to freeze as rapidly as possible."
    }
  },
  "stock-frozen": {
    "materialThermal": {
      "property": "Secondary Ice Crystal Recrystallization & Vacuolar Collapse",
      "threshold": "Danger Zone Cumulative Time: Max 2 hours between 40°F–140°F",
      "details": "Slow secondary freezing allows ice crystals to fuse into large angular needles that tear plant and animal tissue cell walls, causing moisture loss and limpness."
    },
    "safetyStandard": {
      "organization": "USDA FSIS / FDA",
      "standard": "USDA FSIS Refreezing Guidelines",
      "citation": "Foods safely thawed in the refrigerator at 40°F or below may be safely refrozen without cooking; discard any perishable food thawed at room temperature."
    },
    "applianceSpecs": {
      "parameter": "Sub-Zero Air Blast Freezing",
      "guideline": "Place items on the coldest shelf of the freezer (0°F / -18°C) with good air circulation to freeze as rapidly as possible."
    }
  },
  "cooked-quinoa-refreeze": {
    "materialThermal": {
      "property": "Secondary Ice Crystal Recrystallization & Vacuolar Collapse",
      "threshold": "Danger Zone Cumulative Time: Max 2 hours between 40°F–140°F",
      "details": "Slow secondary freezing allows ice crystals to fuse into large angular needles that tear plant and animal tissue cell walls, causing moisture loss and limpness."
    },
    "safetyStandard": {
      "organization": "USDA FSIS / FDA",
      "standard": "USDA FSIS Refreezing Guidelines",
      "citation": "Foods safely thawed in the refrigerator at 40°F or below may be safely refrozen without cooking; discard any perishable food thawed at room temperature."
    },
    "applianceSpecs": {
      "parameter": "Sub-Zero Air Blast Freezing",
      "guideline": "Place items on the coldest shelf of the freezer (0°F / -18°C) with good air circulation to freeze as rapidly as possible."
    }
  },
  "cooked-lentils-refreeze": {
    "materialThermal": {
      "property": "Secondary Ice Crystal Recrystallization & Vacuolar Collapse",
      "threshold": "Danger Zone Cumulative Time: Max 2 hours between 40°F–140°F",
      "details": "Slow secondary freezing allows ice crystals to fuse into large angular needles that tear plant and animal tissue cell walls, causing moisture loss and limpness."
    },
    "safetyStandard": {
      "organization": "USDA FSIS / FDA",
      "standard": "USDA FSIS Refreezing Guidelines",
      "citation": "Foods safely thawed in the refrigerator at 40°F or below may be safely refrozen without cooking; discard any perishable food thawed at room temperature."
    },
    "applianceSpecs": {
      "parameter": "Sub-Zero Air Blast Freezing",
      "guideline": "Place items on the coldest shelf of the freezer (0°F / -18°C) with good air circulation to freeze as rapidly as possible."
    }
  },
  "bread-dough-refreeze": {
    "materialThermal": {
      "property": "Secondary Ice Crystal Recrystallization & Vacuolar Collapse",
      "threshold": "Danger Zone Cumulative Time: Max 2 hours between 40°F–140°F",
      "details": "Slow secondary freezing allows ice crystals to fuse into large angular needles that tear plant and animal tissue cell walls, causing moisture loss and limpness."
    },
    "safetyStandard": {
      "organization": "USDA FSIS / FDA",
      "standard": "USDA FSIS Refreezing Guidelines",
      "citation": "Foods safely thawed in the refrigerator at 40°F or below may be safely refrozen without cooking; discard any perishable food thawed at room temperature."
    },
    "applianceSpecs": {
      "parameter": "Sub-Zero Air Blast Freezing",
      "guideline": "Place items on the coldest shelf of the freezer (0°F / -18°C) with good air circulation to freeze as rapidly as possible."
    }
  },
  "pie-crust-refreeze": {
    "materialThermal": {
      "property": "Secondary Ice Crystal Recrystallization & Vacuolar Collapse",
      "threshold": "Danger Zone Cumulative Time: Max 2 hours between 40°F–140°F",
      "details": "Slow secondary freezing allows ice crystals to fuse into large angular needles that tear plant and animal tissue cell walls, causing moisture loss and limpness."
    },
    "safetyStandard": {
      "organization": "USDA FSIS / FDA",
      "standard": "USDA FSIS Refreezing Guidelines",
      "citation": "Foods safely thawed in the refrigerator at 40°F or below may be safely refrozen without cooking; discard any perishable food thawed at room temperature."
    },
    "applianceSpecs": {
      "parameter": "Sub-Zero Air Blast Freezing",
      "guideline": "Place items on the coldest shelf of the freezer (0°F / -18°C) with good air circulation to freeze as rapidly as possible."
    }
  }
};
