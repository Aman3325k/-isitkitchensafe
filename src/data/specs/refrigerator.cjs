// Technical Reference Specifications for Refrigerator items
// Grounded strictly in USDA FSIS, FDA Food Code 2022, 21 CFR, and food science literature.

module.exports = {
  "ground-beef": {
    "materialThermal": {
      "property": "Comminuted Surface Area Bacterial Proliferation",
      "threshold": "Rapid Aerobic Spoilage >40°F (4.4°C); Freezing Point ~28.6°F (-1.9°C)",
      "details": "Grinding distributes surface bacteria throughout the meat matrix, increasing microbial multiplication rates 4-fold compared to intact steaks."
    },
    "safetyStandard": {
      "organization": "USDA FSIS",
      "standard": "FSIS Directive 5000.1 / Safe Handling",
      "citation": "Comminuted meats must be stored at <=40°F for a maximum of 1–2 days before cooking or freezing."
    },
    "applianceSpecs": {
      "parameter": "Lowest Refrigerator Shelf Thermal Stability",
      "guideline": "Keep in the coldest rear section of the bottom shelf (33°F–36°F) to minimize surface metmyoglobin oxidation and bacterial blooms."
    }
  },
  "cream-cheese": {
    "materialThermal": {
      "property": "High Moisture Soft Casein Matrix Spoilage",
      "threshold": "Psychrotrophic Mold & Spoilage >40°F (4.4°C); Freezing Damage <31°F",
      "details": "Soft, high-moisture cheeses (aw >0.95) spoil rapidly if temperatures exceed 40°F, and freezing separates the delicate whey-casein emulsion."
    },
    "safetyStandard": {
      "organization": "FDA",
      "standard": "FDA Food Code 2022 § 3-501.16(A)(2)",
      "citation": "Soft unripened and moisture-rich cheeses must be held at or below 41°F; consume within 1–2 weeks of opening."
    },
    "applianceSpecs": {
      "parameter": "Middle Shelf Stable Cold Environment",
      "guideline": "Keep on an interior middle shelf at 35°F–38°F; avoid door bins where temperature swings induce premature souring."
    }
  },
  "sour-cream": {
    "materialThermal": {
      "property": "High Moisture Soft Casein Matrix Spoilage",
      "threshold": "Psychrotrophic Mold & Spoilage >40°F (4.4°C); Freezing Damage <31°F",
      "details": "Soft, high-moisture cheeses (aw >0.95) spoil rapidly if temperatures exceed 40°F, and freezing separates the delicate whey-casein emulsion."
    },
    "safetyStandard": {
      "organization": "FDA",
      "standard": "FDA Food Code 2022 § 3-501.16(A)(2)",
      "citation": "Soft unripened and moisture-rich cheeses must be held at or below 41°F; consume within 1–2 weeks of opening."
    },
    "applianceSpecs": {
      "parameter": "Middle Shelf Stable Cold Environment",
      "guideline": "Keep on an interior middle shelf at 35°F–38°F; avoid door bins where temperature swings induce premature souring."
    }
  },
  "raw-chicken-breast": {
    "materialThermal": {
      "property": "Pathogen Proliferation & Freezing Point Depression",
      "threshold": "Bacterial proliferation >40°F (4.4°C); Tissue Freezing Point ~28°F (-2.2°C)",
      "details": "Raw avian muscle tissue supports rapid replication of Salmonella enterica and Campylobacter jejuni above 40°F, doubling every 30 minutes at 50°F."
    },
    "safetyStandard": {
      "organization": "USDA FSIS",
      "standard": "9 CFR § 381.150 / FSIS Directives",
      "citation": "Raw poultry must be held at or below 40°F and cooked or frozen within 1–2 days of purchase."
    },
    "applianceSpecs": {
      "parameter": "Bottom-Shelf Coldest Zone & Drip Containment",
      "guideline": "Keep on the lowest shelf (34°F–36°F) inside a rimmed tray to prevent accidental dripping onto ready-to-eat foods."
    }
  },
  "raw-salmon-fillet": {
    "materialThermal": {
      "property": "Trimethylamine Oxide (TMAO) Reduction & Bacterial Cleavage",
      "threshold": "Psychrotrophic Proteolysis >32°F (0°C); Strict Hold <=38°F (3.3°C)",
      "details": "Marine psychrotrophic bacteria rapidly break down TMAO into pungent trimethylamine above 32°F, degrading delicate fish proteins."
    },
    "safetyStandard": {
      "organization": "FDA",
      "standard": "FDA Food Code 2022 § 3-501.16 & Fish Hazards Guidance",
      "citation": "Raw seafood must be held at or below 38°F (preferably 32°F–34°F on ice) and used within 1–2 days."
    },
    "applianceSpecs": {
      "parameter": "Coldest Refrigerator Zone / Ice Bath",
      "guideline": "Store in the coldest rear section of the bottom shelf at 32°F–34°F, ideally resting on crushed draining ice."
    }
  },
  "pork-chops": {
    "materialThermal": {
      "property": "Myoglobin Oxidation & Microbial Latency",
      "threshold": "Metmyoglobin Browning >38°F (3.3°C); Spoilage Bacteria >40°F (4.4°C)",
      "details": "Intact muscle tissue retains enzymatic freshness at 34°F–36°F; temperatures above 40°F accelerate oxymyoglobin conversion to brown metmyoglobin."
    },
    "safetyStandard": {
      "organization": "USDA FSIS",
      "standard": "FSIS Meat Storage Regulations",
      "citation": "Raw intact steaks and roasts must be stored at or below 40°F and prepared within 3–5 days."
    },
    "applianceSpecs": {
      "parameter": "Lowest Shelf Drainage & Temperature",
      "guideline": "Store raw steaks on the bottom shelf at 34°F–36°F wrapped tightly in moisture-vapor-resistant wrap."
    }
  },
  "raw-shrimp": {
    "materialThermal": {
      "property": "Trimethylamine Oxide (TMAO) Reduction & Bacterial Cleavage",
      "threshold": "Psychrotrophic Proteolysis >32°F (0°C); Strict Hold <=38°F (3.3°C)",
      "details": "Marine psychrotrophic bacteria rapidly break down TMAO into pungent trimethylamine above 32°F, degrading delicate fish proteins."
    },
    "safetyStandard": {
      "organization": "FDA",
      "standard": "FDA Food Code 2022 § 3-501.16 & Fish Hazards Guidance",
      "citation": "Raw seafood must be held at or below 38°F (preferably 32°F–34°F on ice) and used within 1–2 days."
    },
    "applianceSpecs": {
      "parameter": "Coldest Refrigerator Zone / Ice Bath",
      "guideline": "Store in the coldest rear section of the bottom shelf at 32°F–34°F, ideally resting on crushed draining ice."
    }
  },
  "raw-steak": {
    "materialThermal": {
      "property": "Myoglobin Oxidation & Microbial Latency",
      "threshold": "Metmyoglobin Browning >38°F (3.3°C); Spoilage Bacteria >40°F (4.4°C)",
      "details": "Intact muscle tissue retains enzymatic freshness at 34°F–36°F; temperatures above 40°F accelerate oxymyoglobin conversion to brown metmyoglobin."
    },
    "safetyStandard": {
      "organization": "USDA FSIS",
      "standard": "FSIS Meat Storage Regulations",
      "citation": "Raw intact steaks and roasts must be stored at or below 40°F and prepared within 3–5 days."
    },
    "applianceSpecs": {
      "parameter": "Lowest Shelf Drainage & Temperature",
      "guideline": "Store raw steaks on the bottom shelf at 34°F–36°F wrapped tightly in moisture-vapor-resistant wrap."
    }
  },
  "ground-turkey": {
    "materialThermal": {
      "property": "Pathogen Proliferation & Freezing Point Depression",
      "threshold": "Bacterial proliferation >40°F (4.4°C); Tissue Freezing Point ~28°F (-2.2°C)",
      "details": "Raw avian muscle tissue supports rapid replication of Salmonella enterica and Campylobacter jejuni above 40°F, doubling every 30 minutes at 50°F."
    },
    "safetyStandard": {
      "organization": "USDA FSIS",
      "standard": "9 CFR § 381.150 / FSIS Directives",
      "citation": "Raw poultry must be held at or below 40°F and cooked or frozen within 1–2 days of purchase."
    },
    "applianceSpecs": {
      "parameter": "Bottom-Shelf Coldest Zone & Drip Containment",
      "guideline": "Keep on the lowest shelf (34°F–36°F) inside a rimmed tray to prevent accidental dripping onto ready-to-eat foods."
    }
  },
  "raw-bacon": {
    "materialThermal": {
      "property": "Myoglobin Oxidation & Microbial Latency",
      "threshold": "Metmyoglobin Browning >38°F (3.3°C); Spoilage Bacteria >40°F (4.4°C)",
      "details": "Intact muscle tissue retains enzymatic freshness at 34°F–36°F; temperatures above 40°F accelerate oxymyoglobin conversion to brown metmyoglobin."
    },
    "safetyStandard": {
      "organization": "USDA FSIS",
      "standard": "FSIS Meat Storage Regulations",
      "citation": "Raw intact steaks and roasts must be stored at or below 40°F and prepared within 3–5 days."
    },
    "applianceSpecs": {
      "parameter": "Lowest Shelf Drainage & Temperature",
      "guideline": "Store raw steaks on the bottom shelf at 34°F–36°F wrapped tightly in moisture-vapor-resistant wrap."
    }
  },
  "fresh-sausages": {
    "materialThermal": {
      "property": "Comminuted Surface Area Bacterial Proliferation",
      "threshold": "Rapid Aerobic Spoilage >40°F (4.4°C); Freezing Point ~28.6°F (-1.9°C)",
      "details": "Grinding distributes surface bacteria throughout the meat matrix, increasing microbial multiplication rates 4-fold compared to intact steaks."
    },
    "safetyStandard": {
      "organization": "USDA FSIS",
      "standard": "FSIS Directive 5000.1 / Safe Handling",
      "citation": "Comminuted meats must be stored at <=40°F for a maximum of 1–2 days before cooking or freezing."
    },
    "applianceSpecs": {
      "parameter": "Lowest Refrigerator Shelf Thermal Stability",
      "guideline": "Keep in the coldest rear section of the bottom shelf (33°F–36°F) to minimize surface metmyoglobin oxidation and bacterial blooms."
    }
  },
  "raw-lamb-chops": {
    "materialThermal": {
      "property": "Myoglobin Oxidation & Microbial Latency",
      "threshold": "Metmyoglobin Browning >38°F (3.3°C); Spoilage Bacteria >40°F (4.4°C)",
      "details": "Intact muscle tissue retains enzymatic freshness at 34°F–36°F; temperatures above 40°F accelerate oxymyoglobin conversion to brown metmyoglobin."
    },
    "safetyStandard": {
      "organization": "USDA FSIS",
      "standard": "FSIS Meat Storage Regulations",
      "citation": "Raw intact steaks and roasts must be stored at or below 40°F and prepared within 3–5 days."
    },
    "applianceSpecs": {
      "parameter": "Lowest Shelf Drainage & Temperature",
      "guideline": "Store raw steaks on the bottom shelf at 34°F–36°F wrapped tightly in moisture-vapor-resistant wrap."
    }
  },
  "fresh-scallops": {
    "materialThermal": {
      "property": "Trimethylamine Oxide (TMAO) Reduction & Bacterial Cleavage",
      "threshold": "Psychrotrophic Proteolysis >32°F (0°C); Strict Hold <=38°F (3.3°C)",
      "details": "Marine psychrotrophic bacteria rapidly break down TMAO into pungent trimethylamine above 32°F, degrading delicate fish proteins."
    },
    "safetyStandard": {
      "organization": "FDA",
      "standard": "FDA Food Code 2022 § 3-501.16 & Fish Hazards Guidance",
      "citation": "Raw seafood must be held at or below 38°F (preferably 32°F–34°F on ice) and used within 1–2 days."
    },
    "applianceSpecs": {
      "parameter": "Coldest Refrigerator Zone / Ice Bath",
      "guideline": "Store in the coldest rear section of the bottom shelf at 32°F–34°F, ideally resting on crushed draining ice."
    }
  },
  "raw-turkey-breast": {
    "materialThermal": {
      "property": "Pathogen Proliferation & Freezing Point Depression",
      "threshold": "Bacterial proliferation >40°F (4.4°C); Tissue Freezing Point ~28°F (-2.2°C)",
      "details": "Raw avian muscle tissue supports rapid replication of Salmonella enterica and Campylobacter jejuni above 40°F, doubling every 30 minutes at 50°F."
    },
    "safetyStandard": {
      "organization": "USDA FSIS",
      "standard": "9 CFR § 381.150 / FSIS Directives",
      "citation": "Raw poultry must be held at or below 40°F and cooked or frozen within 1–2 days of purchase."
    },
    "applianceSpecs": {
      "parameter": "Bottom-Shelf Coldest Zone & Drip Containment",
      "guideline": "Keep on the lowest shelf (34°F–36°F) inside a rimmed tray to prevent accidental dripping onto ready-to-eat foods."
    }
  },
  "raw-duck-breast": {
    "materialThermal": {
      "property": "Pathogen Proliferation & Freezing Point Depression",
      "threshold": "Bacterial proliferation >40°F (4.4°C); Tissue Freezing Point ~28°F (-2.2°C)",
      "details": "Raw avian muscle tissue supports rapid replication of Salmonella enterica and Campylobacter jejuni above 40°F, doubling every 30 minutes at 50°F."
    },
    "safetyStandard": {
      "organization": "USDA FSIS",
      "standard": "9 CFR § 381.150 / FSIS Directives",
      "citation": "Raw poultry must be held at or below 40°F and cooked or frozen within 1–2 days of purchase."
    },
    "applianceSpecs": {
      "parameter": "Bottom-Shelf Coldest Zone & Drip Containment",
      "guideline": "Keep on the lowest shelf (34°F–36°F) inside a rimmed tray to prevent accidental dripping onto ready-to-eat foods."
    }
  },
  "fresh-mussels-clams": {
    "materialThermal": {
      "property": "Live Bivalve Respiration & Mortality Threshold",
      "threshold": "Optimal Metabolic Slowdown 34°F–38°F (1.1°C–3.3°C); Lethal Freezing <32°F",
      "details": "Live mollusks require oxygen exchange and high humidity; freezing kills them, while warm temps (>40°F) cause rapid pathogen proliferation."
    },
    "safetyStandard": {
      "organization": "FDA / NSSP",
      "standard": "National Shellfish Sanitation Program (NSSP) Model Ordinance",
      "citation": "Shellstock must be refrigerated at 45°F or below immediately upon receipt, preferably maintained at 34°F–38°F."
    },
    "applianceSpecs": {
      "parameter": "Breathable Container Storage",
      "guideline": "Store in a bowl covered with a damp towel on the middle shelf; never submerge in fresh water or seal in airtight bags."
    }
  },
  "raw-beef-roast": {
    "materialThermal": {
      "property": "Myoglobin Oxidation & Microbial Latency",
      "threshold": "Metmyoglobin Browning >38°F (3.3°C); Spoilage Bacteria >40°F (4.4°C)",
      "details": "Intact muscle tissue retains enzymatic freshness at 34°F–36°F; temperatures above 40°F accelerate oxymyoglobin conversion to brown metmyoglobin."
    },
    "safetyStandard": {
      "organization": "USDA FSIS",
      "standard": "FSIS Meat Storage Regulations",
      "citation": "Raw intact steaks and roasts must be stored at or below 40°F and prepared within 3–5 days."
    },
    "applianceSpecs": {
      "parameter": "Lowest Shelf Drainage & Temperature",
      "guideline": "Store raw steaks on the bottom shelf at 34°F–36°F wrapped tightly in moisture-vapor-resistant wrap."
    }
  },
  "fresh-crab-meat": {
    "materialThermal": {
      "property": "Myoglobin Oxidation & Microbial Latency",
      "threshold": "Metmyoglobin Browning >38°F (3.3°C); Spoilage Bacteria >40°F (4.4°C)",
      "details": "Intact muscle tissue retains enzymatic freshness at 34°F–36°F; temperatures above 40°F accelerate oxymyoglobin conversion to brown metmyoglobin."
    },
    "safetyStandard": {
      "organization": "USDA FSIS",
      "standard": "FSIS Meat Storage Regulations",
      "citation": "Raw intact steaks and roasts must be stored at or below 40°F and prepared within 3–5 days."
    },
    "applianceSpecs": {
      "parameter": "Lowest Shelf Drainage & Temperature",
      "guideline": "Store raw steaks on the bottom shelf at 34°F–36°F wrapped tightly in moisture-vapor-resistant wrap."
    }
  },
  "raw-veal-cutlets": {
    "materialThermal": {
      "property": "Myoglobin Oxidation & Microbial Latency",
      "threshold": "Metmyoglobin Browning >38°F (3.3°C); Spoilage Bacteria >40°F (4.4°C)",
      "details": "Intact muscle tissue retains enzymatic freshness at 34°F–36°F; temperatures above 40°F accelerate oxymyoglobin conversion to brown metmyoglobin."
    },
    "safetyStandard": {
      "organization": "USDA FSIS",
      "standard": "FSIS Meat Storage Regulations",
      "citation": "Raw intact steaks and roasts must be stored at or below 40°F and prepared within 3–5 days."
    },
    "applianceSpecs": {
      "parameter": "Lowest Shelf Drainage & Temperature",
      "guideline": "Store raw steaks on the bottom shelf at 34°F–36°F wrapped tightly in moisture-vapor-resistant wrap."
    }
  },
  "organ-meats-liver": {
    "materialThermal": {
      "property": "Comminuted Surface Area Bacterial Proliferation",
      "threshold": "Rapid Aerobic Spoilage >40°F (4.4°C); Freezing Point ~28.6°F (-1.9°C)",
      "details": "Grinding distributes surface bacteria throughout the meat matrix, increasing microbial multiplication rates 4-fold compared to intact steaks."
    },
    "safetyStandard": {
      "organization": "USDA FSIS",
      "standard": "FSIS Directive 5000.1 / Safe Handling",
      "citation": "Comminuted meats must be stored at <=40°F for a maximum of 1–2 days before cooking or freezing."
    },
    "applianceSpecs": {
      "parameter": "Lowest Refrigerator Shelf Thermal Stability",
      "guideline": "Keep in the coldest rear section of the bottom shelf (33°F–36°F) to minimize surface metmyoglobin oxidation and bacterial blooms."
    }
  },
  "cooked-chicken-breast": {
    "materialThermal": {
      "property": "Cooked Protein Degradation & Listeria Growth Threshold",
      "threshold": "Psychrotrophic growth begins at 31°F (-0.5°C); Danger Zone >40°F (4.4°C)",
      "details": "Cooked poultry muscle provides rich water activity (aw ~0.98) for psychrotrophic bacterial outgrowth; cooling rapidly inhibits spore germination."
    },
    "safetyStandard": {
      "organization": "FDA / USDA FSIS",
      "standard": "FDA Food Code 2022 § 3-501.17 / FSIS Guidelines",
      "citation": "Ready-to-eat TCS poultry must be stored at 41°F or below for a maximum of 7 days before discard."
    },
    "applianceSpecs": {
      "parameter": "Middle Refrigerator Shelf Airflow",
      "guideline": "Store in airtight glass or BPA-free containers at 35°F–38°F on upper/middle shelves away from raw meat juices."
    }
  },
  "deli-sliced-turkey": {
    "materialThermal": {
      "property": "Cooked Protein Degradation & Listeria Growth Threshold",
      "threshold": "Psychrotrophic growth begins at 31°F (-0.5°C); Danger Zone >40°F (4.4°C)",
      "details": "Cooked poultry muscle provides rich water activity (aw ~0.98) for psychrotrophic bacterial outgrowth; cooling rapidly inhibits spore germination."
    },
    "safetyStandard": {
      "organization": "FDA / USDA FSIS",
      "standard": "FDA Food Code 2022 § 3-501.17 / FSIS Guidelines",
      "citation": "Ready-to-eat TCS poultry must be stored at 41°F or below for a maximum of 7 days before discard."
    },
    "applianceSpecs": {
      "parameter": "Middle Refrigerator Shelf Airflow",
      "guideline": "Store in airtight glass or BPA-free containers at 35°F–38°F on upper/middle shelves away from raw meat juices."
    }
  },
  "deli-sliced-ham": {
    "materialThermal": {
      "property": "Refrigeration Thermal Threshold",
      "threshold": "Cold Holding Limit <=40°F (4.4°C); Freezing Damage <32°F (0°C)",
      "details": "Maintaining internal core temperature below 40°F suppresses psychrotrophic bacterial replication and slows enzymatic cellular breakdown."
    },
    "safetyStandard": {
      "organization": "FDA / USDA",
      "standard": "FDA Food Code 2022 § 3-501.16 / USDA Cold Storage Guidelines",
      "citation": "Perishable foods must be held continuously at or below 40°F to minimize foodborne illness risks."
    },
    "applianceSpecs": {
      "parameter": "Interior Shelf Temperature Maintenance",
      "guideline": "Store in airtight containers on main refrigerator shelves (34°F–38°F) for optimal quality and freshness."
    }
  },
  "rotisserie-chicken-leftover": {
    "materialThermal": {
      "property": "Cooked Protein Degradation & Listeria Growth Threshold",
      "threshold": "Psychrotrophic growth begins at 31°F (-0.5°C); Danger Zone >40°F (4.4°C)",
      "details": "Cooked poultry muscle provides rich water activity (aw ~0.98) for psychrotrophic bacterial outgrowth; cooling rapidly inhibits spore germination."
    },
    "safetyStandard": {
      "organization": "FDA / USDA FSIS",
      "standard": "FDA Food Code 2022 § 3-501.17 / FSIS Guidelines",
      "citation": "Ready-to-eat TCS poultry must be stored at 41°F or below for a maximum of 7 days before discard."
    },
    "applianceSpecs": {
      "parameter": "Middle Refrigerator Shelf Airflow",
      "guideline": "Store in airtight glass or BPA-free containers at 35°F–38°F on upper/middle shelves away from raw meat juices."
    }
  },
  "cooked-ground-beef": {
    "materialThermal": {
      "property": "Cured / Cooked Lipid Oxidation & Microbial Outgrowth",
      "threshold": "Danger Zone 40°F–140°F (4.4°C–60°C); Emulsion breakdown >45°F",
      "details": "Cooked and cured meats are prone to post-processing contamination by Listeria monocytogenes, which proliferates even under refrigeration if temps exceed 40°F."
    },
    "safetyStandard": {
      "organization": "USDA FSIS",
      "standard": "9 CFR § 318.23 / FSIS Ready-to-Eat Guidance",
      "citation": "Cooked meats must be chilled from 135°F to 40°F within 6 hours and stored at <=40°F for no more than 3–5 days (deli meats 3–5 days post-opening)."
    },
    "applianceSpecs": {
      "parameter": "Internal Chilling Zone Placement",
      "guideline": "Place deli meats in the dedicated meat/deli drawer or middle shelf maintained consistently at 34°F–37°F."
    }
  },
  "hot-dogs": {
    "materialThermal": {
      "property": "Refrigeration Thermal Threshold",
      "threshold": "Cold Holding Limit <=40°F (4.4°C); Freezing Damage <32°F (0°C)",
      "details": "Maintaining internal core temperature below 40°F suppresses psychrotrophic bacterial replication and slows enzymatic cellular breakdown."
    },
    "safetyStandard": {
      "organization": "FDA / USDA",
      "standard": "FDA Food Code 2022 § 3-501.16 / USDA Cold Storage Guidelines",
      "citation": "Perishable foods must be held continuously at or below 40°F to minimize foodborne illness risks."
    },
    "applianceSpecs": {
      "parameter": "Interior Shelf Temperature Maintenance",
      "guideline": "Store in airtight containers on main refrigerator shelves (34°F–38°F) for optimal quality and freshness."
    }
  },
  "cooked-bacon": {
    "materialThermal": {
      "property": "Cured / Cooked Lipid Oxidation & Microbial Outgrowth",
      "threshold": "Danger Zone 40°F–140°F (4.4°C–60°C); Emulsion breakdown >45°F",
      "details": "Cooked and cured meats are prone to post-processing contamination by Listeria monocytogenes, which proliferates even under refrigeration if temps exceed 40°F."
    },
    "safetyStandard": {
      "organization": "USDA FSIS",
      "standard": "9 CFR § 318.23 / FSIS Ready-to-Eat Guidance",
      "citation": "Cooked meats must be chilled from 135°F to 40°F within 6 hours and stored at <=40°F for no more than 3–5 days (deli meats 3–5 days post-opening)."
    },
    "applianceSpecs": {
      "parameter": "Internal Chilling Zone Placement",
      "guideline": "Place deli meats in the dedicated meat/deli drawer or middle shelf maintained consistently at 34°F–37°F."
    }
  },
  "prosciutto-cured-ham": {
    "materialThermal": {
      "property": "Refrigeration Thermal Threshold",
      "threshold": "Cold Holding Limit <=40°F (4.4°C); Freezing Damage <32°F (0°C)",
      "details": "Maintaining internal core temperature below 40°F suppresses psychrotrophic bacterial replication and slows enzymatic cellular breakdown."
    },
    "safetyStandard": {
      "organization": "FDA / USDA",
      "standard": "FDA Food Code 2022 § 3-501.16 / USDA Cold Storage Guidelines",
      "citation": "Perishable foods must be held continuously at or below 40°F to minimize foodborne illness risks."
    },
    "applianceSpecs": {
      "parameter": "Interior Shelf Temperature Maintenance",
      "guideline": "Store in airtight containers on main refrigerator shelves (34°F–38°F) for optimal quality and freshness."
    }
  },
  "cooked-pork-chops": {
    "materialThermal": {
      "property": "Cured / Cooked Lipid Oxidation & Microbial Outgrowth",
      "threshold": "Danger Zone 40°F–140°F (4.4°C–60°C); Emulsion breakdown >45°F",
      "details": "Cooked and cured meats are prone to post-processing contamination by Listeria monocytogenes, which proliferates even under refrigeration if temps exceed 40°F."
    },
    "safetyStandard": {
      "organization": "USDA FSIS",
      "standard": "9 CFR § 318.23 / FSIS Ready-to-Eat Guidance",
      "citation": "Cooked meats must be chilled from 135°F to 40°F within 6 hours and stored at <=40°F for no more than 3–5 days (deli meats 3–5 days post-opening)."
    },
    "applianceSpecs": {
      "parameter": "Internal Chilling Zone Placement",
      "guideline": "Place deli meats in the dedicated meat/deli drawer or middle shelf maintained consistently at 34°F–37°F."
    }
  },
  "cooked-steak": {
    "materialThermal": {
      "property": "Cured / Cooked Lipid Oxidation & Microbial Outgrowth",
      "threshold": "Danger Zone 40°F–140°F (4.4°C–60°C); Emulsion breakdown >45°F",
      "details": "Cooked and cured meats are prone to post-processing contamination by Listeria monocytogenes, which proliferates even under refrigeration if temps exceed 40°F."
    },
    "safetyStandard": {
      "organization": "USDA FSIS",
      "standard": "9 CFR § 318.23 / FSIS Ready-to-Eat Guidance",
      "citation": "Cooked meats must be chilled from 135°F to 40°F within 6 hours and stored at <=40°F for no more than 3–5 days (deli meats 3–5 days post-opening)."
    },
    "applianceSpecs": {
      "parameter": "Internal Chilling Zone Placement",
      "guideline": "Place deli meats in the dedicated meat/deli drawer or middle shelf maintained consistently at 34°F–37°F."
    }
  },
  "cooked-salmon-fillet": {
    "materialThermal": {
      "property": "Histamine Formation & Psychrotrophic Spoilage",
      "threshold": "Scombroid Histamine Production >40°F; Spoilage Threshold 38°F (3.3°C)",
      "details": "Histidine decarboxylation by bacteria can form heat-stable histamine in finfish if held above 40°F for extended periods."
    },
    "safetyStandard": {
      "organization": "FDA",
      "standard": "FDA Fish and Fishery Products Hazards and Controls Guidance",
      "citation": "Cooked and smoked seafood must be refrigerated at <= 38°F for a maximum of 3 days."
    },
    "applianceSpecs": {
      "parameter": "Upper Shelf Controlled Cold Zone",
      "guideline": "Store cooked seafood in sealed containers at 34°F–36°F away from raw food drip paths."
    }
  },
  "cooked-shrimp": {
    "materialThermal": {
      "property": "Histamine Formation & Psychrotrophic Spoilage",
      "threshold": "Scombroid Histamine Production >40°F; Spoilage Threshold 38°F (3.3°C)",
      "details": "Histidine decarboxylation by bacteria can form heat-stable histamine in finfish if held above 40°F for extended periods."
    },
    "safetyStandard": {
      "organization": "FDA",
      "standard": "FDA Fish and Fishery Products Hazards and Controls Guidance",
      "citation": "Cooked and smoked seafood must be refrigerated at <= 38°F for a maximum of 3 days."
    },
    "applianceSpecs": {
      "parameter": "Upper Shelf Controlled Cold Zone",
      "guideline": "Store cooked seafood in sealed containers at 34°F–36°F away from raw food drip paths."
    }
  },
  "pepperoni-salami": {
    "materialThermal": {
      "property": "Chlorophyll Degradation & Transpiration Wilting",
      "threshold": "Optimal Metabolic Slowdown 34°F–38°F (1.1°C–3.3°C); Wilting >40°F",
      "details": "Leafy greens and brassicas transpire water vapor rapidly; lower temperatures suppress enzymatic senescence and vitamin C degradation."
    },
    "safetyStandard": {
      "organization": "FDA / USDA",
      "standard": "FDA Food Code 2022 § 3-501.16(B)",
      "citation": "Cut leafy greens are TCS foods requiring continuous refrigeration at or below 41°F."
    },
    "applianceSpecs": {
      "parameter": "High-Humidity Crisper / Paper Towel Liner",
      "guideline": "Store unwashed in the high-humidity crisper drawer (34°F–37°F) with a paper towel to absorb excess surface condensation."
    }
  },
  "cooked-sausages": {
    "materialThermal": {
      "property": "Cured / Cooked Lipid Oxidation & Microbial Outgrowth",
      "threshold": "Danger Zone 40°F–140°F (4.4°C–60°C); Emulsion breakdown >45°F",
      "details": "Cooked and cured meats are prone to post-processing contamination by Listeria monocytogenes, which proliferates even under refrigeration if temps exceed 40°F."
    },
    "safetyStandard": {
      "organization": "USDA FSIS",
      "standard": "9 CFR § 318.23 / FSIS Ready-to-Eat Guidance",
      "citation": "Cooked meats must be chilled from 135°F to 40°F within 6 hours and stored at <=40°F for no more than 3–5 days (deli meats 3–5 days post-opening)."
    },
    "applianceSpecs": {
      "parameter": "Internal Chilling Zone Placement",
      "guideline": "Place deli meats in the dedicated meat/deli drawer or middle shelf maintained consistently at 34°F–37°F."
    }
  },
  "canned-tuna-opened": {
    "materialThermal": {
      "property": "Histamine Formation & Psychrotrophic Spoilage",
      "threshold": "Scombroid Histamine Production >40°F; Spoilage Threshold 38°F (3.3°C)",
      "details": "Histidine decarboxylation by bacteria can form heat-stable histamine in finfish if held above 40°F for extended periods."
    },
    "safetyStandard": {
      "organization": "FDA",
      "standard": "FDA Fish and Fishery Products Hazards and Controls Guidance",
      "citation": "Cooked and smoked seafood must be refrigerated at <= 38°F for a maximum of 3 days."
    },
    "applianceSpecs": {
      "parameter": "Upper Shelf Controlled Cold Zone",
      "guideline": "Store cooked seafood in sealed containers at 34°F–36°F away from raw food drip paths."
    }
  },
  "cooked-meatballs": {
    "materialThermal": {
      "property": "Cured / Cooked Lipid Oxidation & Microbial Outgrowth",
      "threshold": "Danger Zone 40°F–140°F (4.4°C–60°C); Emulsion breakdown >45°F",
      "details": "Cooked and cured meats are prone to post-processing contamination by Listeria monocytogenes, which proliferates even under refrigeration if temps exceed 40°F."
    },
    "safetyStandard": {
      "organization": "USDA FSIS",
      "standard": "9 CFR § 318.23 / FSIS Ready-to-Eat Guidance",
      "citation": "Cooked meats must be chilled from 135°F to 40°F within 6 hours and stored at <=40°F for no more than 3–5 days (deli meats 3–5 days post-opening)."
    },
    "applianceSpecs": {
      "parameter": "Internal Chilling Zone Placement",
      "guideline": "Place deli meats in the dedicated meat/deli drawer or middle shelf maintained consistently at 34°F–37°F."
    }
  },
  "roast-beef-deli-slices": {
    "materialThermal": {
      "property": "Cured / Cooked Lipid Oxidation & Microbial Outgrowth",
      "threshold": "Danger Zone 40°F–140°F (4.4°C–60°C); Emulsion breakdown >45°F",
      "details": "Cooked and cured meats are prone to post-processing contamination by Listeria monocytogenes, which proliferates even under refrigeration if temps exceed 40°F."
    },
    "safetyStandard": {
      "organization": "USDA FSIS",
      "standard": "9 CFR § 318.23 / FSIS Ready-to-Eat Guidance",
      "citation": "Cooked meats must be chilled from 135°F to 40°F within 6 hours and stored at <=40°F for no more than 3–5 days (deli meats 3–5 days post-opening)."
    },
    "applianceSpecs": {
      "parameter": "Internal Chilling Zone Placement",
      "guideline": "Place deli meats in the dedicated meat/deli drawer or middle shelf maintained consistently at 34°F–37°F."
    }
  },
  "cooked-turkey-leftovers": {
    "materialThermal": {
      "property": "Cooked Protein Degradation & Listeria Growth Threshold",
      "threshold": "Psychrotrophic growth begins at 31°F (-0.5°C); Danger Zone >40°F (4.4°C)",
      "details": "Cooked poultry muscle provides rich water activity (aw ~0.98) for psychrotrophic bacterial outgrowth; cooling rapidly inhibits spore germination."
    },
    "safetyStandard": {
      "organization": "FDA / USDA FSIS",
      "standard": "FDA Food Code 2022 § 3-501.17 / FSIS Guidelines",
      "citation": "Ready-to-eat TCS poultry must be stored at 41°F or below for a maximum of 7 days before discard."
    },
    "applianceSpecs": {
      "parameter": "Middle Refrigerator Shelf Airflow",
      "guideline": "Store in airtight glass or BPA-free containers at 35°F–38°F on upper/middle shelves away from raw meat juices."
    }
  },
  "whole-milk": {
    "materialThermal": {
      "property": "Psychrotrophic Proteolysis & Lactic Acid Dormancy",
      "threshold": "Pseudomonas bacterial multiplication >40°F (4.4°C); Milk Freezing ~31°F (-0.5°C)",
      "details": "Pasteurized milk contains psychrotolerant spore-formers (Bacillus cereus) that replicate rapidly above 40°F, causing curdling and sour off-flavors."
    },
    "safetyStandard": {
      "organization": "FDA / USPHS",
      "standard": "Grade 'A' Pasteurized Milk Ordinance (PMO) 2019 Item 17p",
      "citation": "Grade A milk must be maintained continuously at 40°F (4.4°C) or lower from pasteurization to consumption."
    },
    "applianceSpecs": {
      "parameter": "Interior Main Shelf Placement (Avoid Door Bins)",
      "guideline": "Always store milk on the back of an interior shelf (34°F–37°F); door bins fluctuate up to 45°F during daily openings, cutting shelf life in half."
    }
  },
  "hard-cheddar-cheese": {
    "materialThermal": {
      "property": "Low Water Activity Casein Matrix Preservation",
      "threshold": "Optimal Aging & Preservation 35°F–40°F (1.7°C–4.4°C); Oil Separation >55°F",
      "details": "Hard cheeses have low water activity (aw <0.88), making them resistant to bacterial pathogens but vulnerable to surface mold under moisture condensation."
    },
    "safetyStandard": {
      "organization": "FDA",
      "standard": "21 CFR § 133.150 / FDA Food Code",
      "citation": "Hard and aged cheeses require continuous cold storage to inhibit surface mycotoxin mold growth for 3–6 months."
    },
    "applianceSpecs": {
      "parameter": "Breathable Parchment Storage in Cheese Drawer",
      "guideline": "Wrap in wax/parchment paper followed by loose foil and store in the cheese drawer at 36°F–40°F."
    }
  },
  "shredded-cheese-bagged": {
    "materialThermal": {
      "property": "Psychrotrophic Proteolysis & Lactic Acid Dormancy",
      "threshold": "Pseudomonas bacterial multiplication >40°F (4.4°C); Milk Freezing ~31°F (-0.5°C)",
      "details": "Pasteurized milk contains psychrotolerant spore-formers (Bacillus cereus) that replicate rapidly above 40°F, causing curdling and sour off-flavors."
    },
    "safetyStandard": {
      "organization": "FDA / USPHS",
      "standard": "Grade 'A' Pasteurized Milk Ordinance (PMO) 2019 Item 17p",
      "citation": "Grade A milk must be maintained continuously at 40°F (4.4°C) or lower from pasteurization to consumption."
    },
    "applianceSpecs": {
      "parameter": "Interior Main Shelf Placement (Avoid Door Bins)",
      "guideline": "Always store milk on the back of an interior shelf (34°F–37°F); door bins fluctuate up to 45°F during daily openings, cutting shelf life in half."
    }
  },
  "mozzarella-fresh-water": {
    "materialThermal": {
      "property": "Refrigeration Thermal Threshold",
      "threshold": "Cold Holding Limit <=40°F (4.4°C); Freezing Damage <32°F (0°C)",
      "details": "Maintaining internal core temperature below 40°F suppresses psychrotrophic bacterial replication and slows enzymatic cellular breakdown."
    },
    "safetyStandard": {
      "organization": "FDA / USDA",
      "standard": "FDA Food Code 2022 § 3-501.16 / USDA Cold Storage Guidelines",
      "citation": "Perishable foods must be held continuously at or below 40°F to minimize foodborne illness risks."
    },
    "applianceSpecs": {
      "parameter": "Interior Shelf Temperature Maintenance",
      "guideline": "Store in airtight containers on main refrigerator shelves (34°F–38°F) for optimal quality and freshness."
    }
  },
  "parmesan-parmigiano": {
    "materialThermal": {
      "property": "Refrigeration Thermal Threshold",
      "threshold": "Cold Holding Limit <=40°F (4.4°C); Freezing Damage <32°F (0°C)",
      "details": "Maintaining internal core temperature below 40°F suppresses psychrotrophic bacterial replication and slows enzymatic cellular breakdown."
    },
    "safetyStandard": {
      "organization": "FDA / USDA",
      "standard": "FDA Food Code 2022 § 3-501.16 / USDA Cold Storage Guidelines",
      "citation": "Perishable foods must be held continuously at or below 40°F to minimize foodborne illness risks."
    },
    "applianceSpecs": {
      "parameter": "Interior Shelf Temperature Maintenance",
      "guideline": "Store in airtight containers on main refrigerator shelves (34°F–38°F) for optimal quality and freshness."
    }
  },
  "cottage-cheese": {
    "materialThermal": {
      "property": "High Moisture Soft Casein Matrix Spoilage",
      "threshold": "Psychrotrophic Mold & Spoilage >40°F (4.4°C); Freezing Damage <31°F",
      "details": "Soft, high-moisture cheeses (aw >0.95) spoil rapidly if temperatures exceed 40°F, and freezing separates the delicate whey-casein emulsion."
    },
    "safetyStandard": {
      "organization": "FDA",
      "standard": "FDA Food Code 2022 § 3-501.16(A)(2)",
      "citation": "Soft unripened and moisture-rich cheeses must be held at or below 41°F; consume within 1–2 weeks of opening."
    },
    "applianceSpecs": {
      "parameter": "Middle Shelf Stable Cold Environment",
      "guideline": "Keep on an interior middle shelf at 35°F–38°F; avoid door bins where temperature swings induce premature souring."
    }
  },
  "greek-yogurt": {
    "materialThermal": {
      "property": "Psychrotrophic Proteolysis & Lactic Acid Dormancy",
      "threshold": "Pseudomonas bacterial multiplication >40°F (4.4°C); Milk Freezing ~31°F (-0.5°C)",
      "details": "Pasteurized milk contains psychrotolerant spore-formers (Bacillus cereus) that replicate rapidly above 40°F, causing curdling and sour off-flavors."
    },
    "safetyStandard": {
      "organization": "FDA / USPHS",
      "standard": "Grade 'A' Pasteurized Milk Ordinance (PMO) 2019 Item 17p",
      "citation": "Grade A milk must be maintained continuously at 40°F (4.4°C) or lower from pasteurization to consumption."
    },
    "applianceSpecs": {
      "parameter": "Interior Main Shelf Placement (Avoid Door Bins)",
      "guideline": "Always store milk on the back of an interior shelf (34°F–37°F); door bins fluctuate up to 45°F during daily openings, cutting shelf life in half."
    }
  },
  "butter-salted": {
    "materialThermal": {
      "property": "Bovine Butterfat Solidification & Hydrolytic Rancidity",
      "threshold": "Butterfat Softening 60°F–65°F; Bacterial Dormancy <=40°F (4.4°C)",
      "details": "Butter contains 80% lipid emulsion with low water activity; refrigeration prevents oxygen- and light-induced rancidity of butyric fatty acids."
    },
    "safetyStandard": {
      "organization": "USDA / FDA",
      "standard": "FDA Food Code 2022 § 3-501.16",
      "citation": "Grade AA butter is safe at room temperature for short periods, but 35°F–40°F refrigeration extends quality up to 1–3 months."
    },
    "applianceSpecs": {
      "parameter": "Dairy Compartment Temperature Buffer",
      "guideline": "Butter can be kept in the covered dairy door bin (38°F–42°F) for spreadable consistency while preventing off-flavor absorption."
    }
  },
  "butter-unsalted": {
    "materialThermal": {
      "property": "Bovine Butterfat Solidification & Hydrolytic Rancidity",
      "threshold": "Butterfat Softening 60°F–65°F; Bacterial Dormancy <=40°F (4.4°C)",
      "details": "Butter contains 80% lipid emulsion with low water activity; refrigeration prevents oxygen- and light-induced rancidity of butyric fatty acids."
    },
    "safetyStandard": {
      "organization": "USDA / FDA",
      "standard": "FDA Food Code 2022 § 3-501.16",
      "citation": "Grade AA butter is safe at room temperature for short periods, but 35°F–40°F refrigeration extends quality up to 1–3 months."
    },
    "applianceSpecs": {
      "parameter": "Dairy Compartment Temperature Buffer",
      "guideline": "Butter can be kept in the covered dairy door bin (38°F–42°F) for spreadable consistency while preventing off-flavor absorption."
    }
  },
  "heavy-whipping-cream": {
    "materialThermal": {
      "property": "Psychrotrophic Proteolysis & Lactic Acid Dormancy",
      "threshold": "Pseudomonas bacterial multiplication >40°F (4.4°C); Milk Freezing ~31°F (-0.5°C)",
      "details": "Pasteurized milk contains psychrotolerant spore-formers (Bacillus cereus) that replicate rapidly above 40°F, causing curdling and sour off-flavors."
    },
    "safetyStandard": {
      "organization": "FDA / USPHS",
      "standard": "Grade 'A' Pasteurized Milk Ordinance (PMO) 2019 Item 17p",
      "citation": "Grade A milk must be maintained continuously at 40°F (4.4°C) or lower from pasteurization to consumption."
    },
    "applianceSpecs": {
      "parameter": "Interior Main Shelf Placement (Avoid Door Bins)",
      "guideline": "Always store milk on the back of an interior shelf (34°F–37°F); door bins fluctuate up to 45°F during daily openings, cutting shelf life in half."
    }
  },
  "brie-camembert-cheese": {
    "materialThermal": {
      "property": "High Moisture Soft Casein Matrix Spoilage",
      "threshold": "Psychrotrophic Mold & Spoilage >40°F (4.4°C); Freezing Damage <31°F",
      "details": "Soft, high-moisture cheeses (aw >0.95) spoil rapidly if temperatures exceed 40°F, and freezing separates the delicate whey-casein emulsion."
    },
    "safetyStandard": {
      "organization": "FDA",
      "standard": "FDA Food Code 2022 § 3-501.16(A)(2)",
      "citation": "Soft unripened and moisture-rich cheeses must be held at or below 41°F; consume within 1–2 weeks of opening."
    },
    "applianceSpecs": {
      "parameter": "Middle Shelf Stable Cold Environment",
      "guideline": "Keep on an interior middle shelf at 35°F–38°F; avoid door bins where temperature swings induce premature souring."
    }
  },
  "blue-cheese": {
    "materialThermal": {
      "property": "Psychrotrophic Proteolysis & Lactic Acid Dormancy",
      "threshold": "Pseudomonas bacterial multiplication >40°F (4.4°C); Milk Freezing ~31°F (-0.5°C)",
      "details": "Pasteurized milk contains psychrotolerant spore-formers (Bacillus cereus) that replicate rapidly above 40°F, causing curdling and sour off-flavors."
    },
    "safetyStandard": {
      "organization": "FDA / USPHS",
      "standard": "Grade 'A' Pasteurized Milk Ordinance (PMO) 2019 Item 17p",
      "citation": "Grade A milk must be maintained continuously at 40°F (4.4°C) or lower from pasteurization to consumption."
    },
    "applianceSpecs": {
      "parameter": "Interior Main Shelf Placement (Avoid Door Bins)",
      "guideline": "Always store milk on the back of an interior shelf (34°F–37°F); door bins fluctuate up to 45°F during daily openings, cutting shelf life in half."
    }
  },
  "almond-milk-opened": {
    "materialThermal": {
      "property": "Psychrotrophic Proteolysis & Lactic Acid Dormancy",
      "threshold": "Pseudomonas bacterial multiplication >40°F (4.4°C); Milk Freezing ~31°F (-0.5°C)",
      "details": "Pasteurized milk contains psychrotolerant spore-formers (Bacillus cereus) that replicate rapidly above 40°F, causing curdling and sour off-flavors."
    },
    "safetyStandard": {
      "organization": "FDA / USPHS",
      "standard": "Grade 'A' Pasteurized Milk Ordinance (PMO) 2019 Item 17p",
      "citation": "Grade A milk must be maintained continuously at 40°F (4.4°C) or lower from pasteurization to consumption."
    },
    "applianceSpecs": {
      "parameter": "Interior Main Shelf Placement (Avoid Door Bins)",
      "guideline": "Always store milk on the back of an interior shelf (34°F–37°F); door bins fluctuate up to 45°F during daily openings, cutting shelf life in half."
    }
  },
  "oat-milk-opened": {
    "materialThermal": {
      "property": "Psychrotrophic Proteolysis & Lactic Acid Dormancy",
      "threshold": "Pseudomonas bacterial multiplication >40°F (4.4°C); Milk Freezing ~31°F (-0.5°C)",
      "details": "Pasteurized milk contains psychrotolerant spore-formers (Bacillus cereus) that replicate rapidly above 40°F, causing curdling and sour off-flavors."
    },
    "safetyStandard": {
      "organization": "FDA / USPHS",
      "standard": "Grade 'A' Pasteurized Milk Ordinance (PMO) 2019 Item 17p",
      "citation": "Grade A milk must be maintained continuously at 40°F (4.4°C) or lower from pasteurization to consumption."
    },
    "applianceSpecs": {
      "parameter": "Interior Main Shelf Placement (Avoid Door Bins)",
      "guideline": "Always store milk on the back of an interior shelf (34°F–37°F); door bins fluctuate up to 45°F during daily openings, cutting shelf life in half."
    }
  },
  "eggs-shell-fresh": {
    "materialThermal": {
      "property": "Salmonella enteritidis Multiplication Threshold",
      "threshold": "Multiplication starts >45°F (7.2°C); Optimal Control <=40°F (4.4°C)",
      "details": "Shell eggs maintain albumen viscosity and vitelline membrane strength under cold storage, preventing Salmonella from reaching the nutrient-rich yolk."
    },
    "safetyStandard": {
      "organization": "FDA",
      "standard": "21 CFR Part 118 / Egg Safety Rule",
      "citation": "Shell eggs must be held under continuous refrigeration at an ambient temperature of 45°F (7.2°C) or colder."
    },
    "applianceSpecs": {
      "parameter": "Original Carton Interior Shelf Placement",
      "guideline": "Keep in the original cardboard carton on a middle or bottom shelf (34°F–38°F); avoid door egg cups to prevent temperature shocks and vibration fractures."
    }
  },
  "kefir-fermented-milk": {
    "materialThermal": {
      "property": "Psychrotrophic Proteolysis & Lactic Acid Dormancy",
      "threshold": "Pseudomonas bacterial multiplication >40°F (4.4°C); Milk Freezing ~31°F (-0.5°C)",
      "details": "Pasteurized milk contains psychrotolerant spore-formers (Bacillus cereus) that replicate rapidly above 40°F, causing curdling and sour off-flavors."
    },
    "safetyStandard": {
      "organization": "FDA / USPHS",
      "standard": "Grade 'A' Pasteurized Milk Ordinance (PMO) 2019 Item 17p",
      "citation": "Grade A milk must be maintained continuously at 40°F (4.4°C) or lower from pasteurization to consumption."
    },
    "applianceSpecs": {
      "parameter": "Interior Main Shelf Placement (Avoid Door Bins)",
      "guideline": "Always store milk on the back of an interior shelf (34°F–37°F); door bins fluctuate up to 45°F during daily openings, cutting shelf life in half."
    }
  },
  "spinach-fresh-leaves": {
    "materialThermal": {
      "property": "Chlorophyll Degradation & Transpiration Wilting",
      "threshold": "Optimal Metabolic Slowdown 34°F–38°F (1.1°C–3.3°C); Wilting >40°F",
      "details": "Leafy greens and brassicas transpire water vapor rapidly; lower temperatures suppress enzymatic senescence and vitamin C degradation."
    },
    "safetyStandard": {
      "organization": "FDA / USDA",
      "standard": "FDA Food Code 2022 § 3-501.16(B)",
      "citation": "Cut leafy greens are TCS foods requiring continuous refrigeration at or below 41°F."
    },
    "applianceSpecs": {
      "parameter": "High-Humidity Crisper / Paper Towel Liner",
      "guideline": "Store unwashed in the high-humidity crisper drawer (34°F–37°F) with a paper towel to absorb excess surface condensation."
    }
  },
  "romaine-lettuce-heads": {
    "materialThermal": {
      "property": "Chlorophyll Degradation & Transpiration Wilting",
      "threshold": "Optimal Metabolic Slowdown 34°F–38°F (1.1°C–3.3°C); Wilting >40°F",
      "details": "Leafy greens and brassicas transpire water vapor rapidly; lower temperatures suppress enzymatic senescence and vitamin C degradation."
    },
    "safetyStandard": {
      "organization": "FDA / USDA",
      "standard": "FDA Food Code 2022 § 3-501.16(B)",
      "citation": "Cut leafy greens are TCS foods requiring continuous refrigeration at or below 41°F."
    },
    "applianceSpecs": {
      "parameter": "High-Humidity Crisper / Paper Towel Liner",
      "guideline": "Store unwashed in the high-humidity crisper drawer (34°F–37°F) with a paper towel to absorb excess surface condensation."
    }
  },
  "bagged-salad-greens": {
    "materialThermal": {
      "property": "Refrigeration Thermal Threshold",
      "threshold": "Cold Holding Limit <=40°F (4.4°C); Freezing Damage <32°F (0°C)",
      "details": "Maintaining internal core temperature below 40°F suppresses psychrotrophic bacterial replication and slows enzymatic cellular breakdown."
    },
    "safetyStandard": {
      "organization": "FDA / USDA",
      "standard": "FDA Food Code 2022 § 3-501.16 / USDA Cold Storage Guidelines",
      "citation": "Perishable foods must be held continuously at or below 40°F to minimize foodborne illness risks."
    },
    "applianceSpecs": {
      "parameter": "Interior Shelf Temperature Maintenance",
      "guideline": "Store in airtight containers on main refrigerator shelves (34°F–38°F) for optimal quality and freshness."
    }
  },
  "fresh-broccoli-crowns": {
    "materialThermal": {
      "property": "Chlorophyll Degradation & Transpiration Wilting",
      "threshold": "Optimal Metabolic Slowdown 34°F–38°F (1.1°C–3.3°C); Wilting >40°F",
      "details": "Leafy greens and brassicas transpire water vapor rapidly; lower temperatures suppress enzymatic senescence and vitamin C degradation."
    },
    "safetyStandard": {
      "organization": "FDA / USDA",
      "standard": "FDA Food Code 2022 § 3-501.16(B)",
      "citation": "Cut leafy greens are TCS foods requiring continuous refrigeration at or below 41°F."
    },
    "applianceSpecs": {
      "parameter": "High-Humidity Crisper / Paper Towel Liner",
      "guideline": "Store unwashed in the high-humidity crisper drawer (34°F–37°F) with a paper towel to absorb excess surface condensation."
    }
  },
  "fresh-carrots-raw": {
    "materialThermal": {
      "property": "Cellular Turgor Pressure & Desiccation Limit",
      "threshold": "Vascular Water Loss occurs at RH <90%; Respiration Slows <=36°F",
      "details": "Root vegetables transpire moisture rapidly in dry convective refrigerator air, turning limp and rubbery as xylem cells lose hydrostatic pressure."
    },
    "safetyStandard": {
      "organization": "USDA ARS",
      "standard": "Handbook 66 / Cold Storage of Root Crops",
      "citation": "Maintain root crops at 32°F–36°F with 95% relative humidity for 1–3 months of crisp storage."
    },
    "applianceSpecs": {
      "parameter": "High-Humidity Crisper Drawer (Vent Closed)",
      "guideline": "Place in the crisper drawer with the humidity slide fully closed to trap moisture and prevent vascular desiccation."
    }
  },
  "celery-stalks-fresh": {
    "materialThermal": {
      "property": "Cellular Turgor Pressure & Desiccation Limit",
      "threshold": "Vascular Water Loss occurs at RH <90%; Respiration Slows <=36°F",
      "details": "Root vegetables transpire moisture rapidly in dry convective refrigerator air, turning limp and rubbery as xylem cells lose hydrostatic pressure."
    },
    "safetyStandard": {
      "organization": "USDA ARS",
      "standard": "Handbook 66 / Cold Storage of Root Crops",
      "citation": "Maintain root crops at 32°F–36°F with 95% relative humidity for 1–3 months of crisp storage."
    },
    "applianceSpecs": {
      "parameter": "High-Humidity Crisper Drawer (Vent Closed)",
      "guideline": "Place in the crisper drawer with the humidity slide fully closed to trap moisture and prevent vascular desiccation."
    }
  },
  "fresh-strawberries": {
    "materialThermal": {
      "property": "Botrytis cinerea (Gray Mold) Germination Threshold",
      "threshold": "Mold spore dormancy <=34°F (1.1°C); Rapid growth >40°F (4.4°C)",
      "details": "Berries have high surface moisture and porous skins; washing before storage triggers Botrytis mold hyphae germination within 24 hours."
    },
    "safetyStandard": {
      "organization": "USDA ARS",
      "standard": "Postharvest Handling of Small Fruit Crops",
      "citation": "Store fresh berries immediately upon harvest at 32°F–34°F with 90%–95% RH; do not wash until ready to eat."
    },
    "applianceSpecs": {
      "parameter": "Middle Refrigerator Shelf Air Circulation",
      "guideline": "Keep in original ventilated clamshell on an interior middle shelf (34°F–36°F); keep away from closed high-humidity drawers."
    }
  },
  "fresh-blueberries": {
    "materialThermal": {
      "property": "Botrytis cinerea (Gray Mold) Germination Threshold",
      "threshold": "Mold spore dormancy <=34°F (1.1°C); Rapid growth >40°F (4.4°C)",
      "details": "Berries have high surface moisture and porous skins; washing before storage triggers Botrytis mold hyphae germination within 24 hours."
    },
    "safetyStandard": {
      "organization": "USDA ARS",
      "standard": "Postharvest Handling of Small Fruit Crops",
      "citation": "Store fresh berries immediately upon harvest at 32°F–34°F with 90%–95% RH; do not wash until ready to eat."
    },
    "applianceSpecs": {
      "parameter": "Middle Refrigerator Shelf Air Circulation",
      "guideline": "Keep in original ventilated clamshell on an interior middle shelf (34°F–36°F); keep away from closed high-humidity drawers."
    }
  },
  "fresh-raspberries": {
    "materialThermal": {
      "property": "Botrytis cinerea (Gray Mold) Germination Threshold",
      "threshold": "Mold spore dormancy <=34°F (1.1°C); Rapid growth >40°F (4.4°C)",
      "details": "Berries have high surface moisture and porous skins; washing before storage triggers Botrytis mold hyphae germination within 24 hours."
    },
    "safetyStandard": {
      "organization": "USDA ARS",
      "standard": "Postharvest Handling of Small Fruit Crops",
      "citation": "Store fresh berries immediately upon harvest at 32°F–34°F with 90%–95% RH; do not wash until ready to eat."
    },
    "applianceSpecs": {
      "parameter": "Middle Refrigerator Shelf Air Circulation",
      "guideline": "Keep in original ventilated clamshell on an interior middle shelf (34°F–36°F); keep away from closed high-humidity drawers."
    }
  },
  "fresh-cilantro-coriander": {
    "materialThermal": {
      "property": "Refrigeration Thermal Threshold",
      "threshold": "Cold Holding Limit <=40°F (4.4°C); Freezing Damage <32°F (0°C)",
      "details": "Maintaining internal core temperature below 40°F suppresses psychrotrophic bacterial replication and slows enzymatic cellular breakdown."
    },
    "safetyStandard": {
      "organization": "FDA / USDA",
      "standard": "FDA Food Code 2022 § 3-501.16 / USDA Cold Storage Guidelines",
      "citation": "Perishable foods must be held continuously at or below 40°F to minimize foodborne illness risks."
    },
    "applianceSpecs": {
      "parameter": "Interior Shelf Temperature Maintenance",
      "guideline": "Store in airtight containers on main refrigerator shelves (34°F–38°F) for optimal quality and freshness."
    }
  },
  "fresh-parsley-bunches": {
    "materialThermal": {
      "property": "Refrigeration Thermal Threshold",
      "threshold": "Cold Holding Limit <=40°F (4.4°C); Freezing Damage <32°F (0°C)",
      "details": "Maintaining internal core temperature below 40°F suppresses psychrotrophic bacterial replication and slows enzymatic cellular breakdown."
    },
    "safetyStandard": {
      "organization": "FDA / USDA",
      "standard": "FDA Food Code 2022 § 3-501.16 / USDA Cold Storage Guidelines",
      "citation": "Perishable foods must be held continuously at or below 40°F to minimize foodborne illness risks."
    },
    "applianceSpecs": {
      "parameter": "Interior Shelf Temperature Maintenance",
      "guideline": "Store in airtight containers on main refrigerator shelves (34°F–38°F) for optimal quality and freshness."
    }
  },
  "fresh-basil-leaves": {
    "materialThermal": {
      "property": "Chilling Injury & Epidermal Pitting Threshold",
      "threshold": "Tissue Collapse occurs <45°F–50°F (7.2°C–10°C)",
      "details": "Tropical produce varieties undergo cell wall breakdown, localized pitting, and watery softening when subjected to standard domestic refrigeration."
    },
    "safetyStandard": {
      "organization": "USDA ARS",
      "standard": "Postharvest Technology Center Chilling Guidelines",
      "citation": "Tropical fruits and cucurbits should be held at 50°F–55°F for maximum structural integrity."
    },
    "applianceSpecs": {
      "parameter": "Produce Crisper High Temperature Setting",
      "guideline": "Store in the crisper drawer with humidity vent partially open, or keep at cool room temperature until cut."
    }
  },
  "whole-cucumbers-fresh": {
    "materialThermal": {
      "property": "Chilling Injury & Epidermal Pitting Threshold",
      "threshold": "Tissue Collapse occurs <45°F–50°F (7.2°C–10°C)",
      "details": "Tropical produce varieties undergo cell wall breakdown, localized pitting, and watery softening when subjected to standard domestic refrigeration."
    },
    "safetyStandard": {
      "organization": "USDA ARS",
      "standard": "Postharvest Technology Center Chilling Guidelines",
      "citation": "Tropical fruits and cucurbits should be held at 50°F–55°F for maximum structural integrity."
    },
    "applianceSpecs": {
      "parameter": "Produce Crisper High Temperature Setting",
      "guideline": "Store in the crisper drawer with humidity vent partially open, or keep at cool room temperature until cut."
    }
  },
  "bell-peppers-fresh": {
    "materialThermal": {
      "property": "Chlorophyll Degradation & Transpiration Wilting",
      "threshold": "Optimal Metabolic Slowdown 34°F–38°F (1.1°C–3.3°C); Wilting >40°F",
      "details": "Leafy greens and brassicas transpire water vapor rapidly; lower temperatures suppress enzymatic senescence and vitamin C degradation."
    },
    "safetyStandard": {
      "organization": "FDA / USDA",
      "standard": "FDA Food Code 2022 § 3-501.16(B)",
      "citation": "Cut leafy greens are TCS foods requiring continuous refrigeration at or below 41°F."
    },
    "applianceSpecs": {
      "parameter": "High-Humidity Crisper / Paper Towel Liner",
      "guideline": "Store unwashed in the high-humidity crisper drawer (34°F–37°F) with a paper towel to absorb excess surface condensation."
    }
  },
  "fresh-mushrooms-raw": {
    "materialThermal": {
      "property": "Chitin Hyphae Moisture Transpiration & Slime",
      "threshold": "Optimal Metabolic Dormancy 34°F–36°F (1.1°C–2.2°C); Slime >40°F",
      "details": "Mushrooms are 90% water with no protective cuticle; plastic wrap traps respirated moisture, accelerating bacterial rot (Pseudomonas tolaasii)."
    },
    "safetyStandard": {
      "organization": "USDA ARS",
      "standard": "Mushroom Storage and Postharvest Quality Guide",
      "citation": "Fresh cultivated mushrooms should be held at 34°F with 90% RH in breathable packaging."
    },
    "applianceSpecs": {
      "parameter": "Breathable Paper Bag on Middle Shelf",
      "guideline": "Store in a brown paper bag on a middle shelf (34°F–37°F); never store in an airtight plastic container or high-humidity crisper."
    }
  },
  "fresh-asparagus-spears": {
    "materialThermal": {
      "property": "Chlorophyll Degradation & Transpiration Wilting",
      "threshold": "Optimal Metabolic Slowdown 34°F–38°F (1.1°C–3.3°C); Wilting >40°F",
      "details": "Leafy greens and brassicas transpire water vapor rapidly; lower temperatures suppress enzymatic senescence and vitamin C degradation."
    },
    "safetyStandard": {
      "organization": "FDA / USDA",
      "standard": "FDA Food Code 2022 § 3-501.16(B)",
      "citation": "Cut leafy greens are TCS foods requiring continuous refrigeration at or below 41°F."
    },
    "applianceSpecs": {
      "parameter": "High-Humidity Crisper / Paper Towel Liner",
      "guideline": "Store unwashed in the high-humidity crisper drawer (34°F–37°F) with a paper towel to absorb excess surface condensation."
    }
  },
  "fresh-green-beans": {
    "materialThermal": {
      "property": "Chlorophyll Degradation & Transpiration Wilting",
      "threshold": "Optimal Metabolic Slowdown 34°F–38°F (1.1°C–3.3°C); Wilting >40°F",
      "details": "Leafy greens and brassicas transpire water vapor rapidly; lower temperatures suppress enzymatic senescence and vitamin C degradation."
    },
    "safetyStandard": {
      "organization": "FDA / USDA",
      "standard": "FDA Food Code 2022 § 3-501.16(B)",
      "citation": "Cut leafy greens are TCS foods requiring continuous refrigeration at or below 41°F."
    },
    "applianceSpecs": {
      "parameter": "High-Humidity Crisper / Paper Towel Liner",
      "guideline": "Store unwashed in the high-humidity crisper drawer (34°F–37°F) with a paper towel to absorb excess surface condensation."
    }
  },
  "fresh-cauliflower-head": {
    "materialThermal": {
      "property": "Chlorophyll Degradation & Transpiration Wilting",
      "threshold": "Optimal Metabolic Slowdown 34°F–38°F (1.1°C–3.3°C); Wilting >40°F",
      "details": "Leafy greens and brassicas transpire water vapor rapidly; lower temperatures suppress enzymatic senescence and vitamin C degradation."
    },
    "safetyStandard": {
      "organization": "FDA / USDA",
      "standard": "FDA Food Code 2022 § 3-501.16(B)",
      "citation": "Cut leafy greens are TCS foods requiring continuous refrigeration at or below 41°F."
    },
    "applianceSpecs": {
      "parameter": "High-Humidity Crisper / Paper Towel Liner",
      "guideline": "Store unwashed in the high-humidity crisper drawer (34°F–37°F) with a paper towel to absorb excess surface condensation."
    }
  },
  "fresh-apples-whole": {
    "materialThermal": {
      "property": "Ethylene Gas Emission & Respiration Slowdown",
      "threshold": "Respiration Slowdown 32°F–36°F (0°C–2.2°C); Firmness Retention",
      "details": "Pome fruits produce ethylene gas (C2H4) that accelerates senescence in surrounding produce; cold temperatures suppress ethylene synthesis."
    },
    "safetyStandard": {
      "organization": "USDA ARS",
      "standard": "Apple & Pear Postharvest Storage Handbook",
      "citation": "Store at 32°F–36°F in high humidity to extend crispness for 1–4 months."
    },
    "applianceSpecs": {
      "parameter": "Low-Humidity Crisper (Vent Open)",
      "guideline": "Store in the low-humidity crisper drawer (vent open) to allow ethylene gas to escape without ripening adjacent leafy greens."
    }
  },
  "fresh-pears-whole": {
    "materialThermal": {
      "property": "Refrigeration Thermal Threshold",
      "threshold": "Cold Holding Limit <=40°F (4.4°C); Freezing Damage <32°F (0°C)",
      "details": "Maintaining internal core temperature below 40°F suppresses psychrotrophic bacterial replication and slows enzymatic cellular breakdown."
    },
    "safetyStandard": {
      "organization": "FDA / USDA",
      "standard": "FDA Food Code 2022 § 3-501.16 / USDA Cold Storage Guidelines",
      "citation": "Perishable foods must be held continuously at or below 40°F to minimize foodborne illness risks."
    },
    "applianceSpecs": {
      "parameter": "Interior Shelf Temperature Maintenance",
      "guideline": "Store in airtight containers on main refrigerator shelves (34°F–38°F) for optimal quality and freshness."
    }
  },
  "table-grapes-fresh": {
    "materialThermal": {
      "property": "Citric Acid & Ascorbic Acid Retention",
      "threshold": "Optimal Shelf Life 38°F–42°F (3.3°C–5.6°C); Chilling Injury <35°F",
      "details": "Citrus fruits possess thick oily flavedo rinds that protect juice vesicles; cold storage at 38°F–42°F prevents moisture loss for 3–4 weeks."
    },
    "safetyStandard": {
      "organization": "USDA ARS",
      "standard": "Citrus Storage Manual",
      "citation": "Citrus holds well at 38°F–45°F; standard refrigerator placement prevents mold without inducing chilling injury."
    },
    "applianceSpecs": {
      "parameter": "Crisper or Door Shelf Storage",
      "guideline": "Store loose in the crisper drawer or door shelf at 38°F–42°F in a perforated bag to prevent condensation mold."
    }
  },
  "whole-lemons-fresh": {
    "materialThermal": {
      "property": "Citric Acid & Ascorbic Acid Retention",
      "threshold": "Optimal Shelf Life 38°F–42°F (3.3°C–5.6°C); Chilling Injury <35°F",
      "details": "Citrus fruits possess thick oily flavedo rinds that protect juice vesicles; cold storage at 38°F–42°F prevents moisture loss for 3–4 weeks."
    },
    "safetyStandard": {
      "organization": "USDA ARS",
      "standard": "Citrus Storage Manual",
      "citation": "Citrus holds well at 38°F–45°F; standard refrigerator placement prevents mold without inducing chilling injury."
    },
    "applianceSpecs": {
      "parameter": "Crisper or Door Shelf Storage",
      "guideline": "Store loose in the crisper drawer or door shelf at 38°F–42°F in a perforated bag to prevent condensation mold."
    }
  },
  "whole-limes-fresh": {
    "materialThermal": {
      "property": "Citric Acid & Ascorbic Acid Retention",
      "threshold": "Optimal Shelf Life 38°F–42°F (3.3°C–5.6°C); Chilling Injury <35°F",
      "details": "Citrus fruits possess thick oily flavedo rinds that protect juice vesicles; cold storage at 38°F–42°F prevents moisture loss for 3–4 weeks."
    },
    "safetyStandard": {
      "organization": "USDA ARS",
      "standard": "Citrus Storage Manual",
      "citation": "Citrus holds well at 38°F–45°F; standard refrigerator placement prevents mold without inducing chilling injury."
    },
    "applianceSpecs": {
      "parameter": "Crisper or Door Shelf Storage",
      "guideline": "Store loose in the crisper drawer or door shelf at 38°F–42°F in a perforated bag to prevent condensation mold."
    }
  },
  "fresh-oranges-whole": {
    "materialThermal": {
      "property": "Citric Acid & Ascorbic Acid Retention",
      "threshold": "Optimal Shelf Life 38°F–42°F (3.3°C–5.6°C); Chilling Injury <35°F",
      "details": "Citrus fruits possess thick oily flavedo rinds that protect juice vesicles; cold storage at 38°F–42°F prevents moisture loss for 3–4 weeks."
    },
    "safetyStandard": {
      "organization": "USDA ARS",
      "standard": "Citrus Storage Manual",
      "citation": "Citrus holds well at 38°F–45°F; standard refrigerator placement prevents mold without inducing chilling injury."
    },
    "applianceSpecs": {
      "parameter": "Crisper or Door Shelf Storage",
      "guideline": "Store loose in the crisper drawer or door shelf at 38°F–42°F in a perforated bag to prevent condensation mold."
    }
  },
  "whole-grapefruit-fresh": {
    "materialThermal": {
      "property": "Citric Acid & Ascorbic Acid Retention",
      "threshold": "Optimal Shelf Life 38°F–42°F (3.3°C–5.6°C); Chilling Injury <35°F",
      "details": "Citrus fruits possess thick oily flavedo rinds that protect juice vesicles; cold storage at 38°F–42°F prevents moisture loss for 3–4 weeks."
    },
    "safetyStandard": {
      "organization": "USDA ARS",
      "standard": "Citrus Storage Manual",
      "citation": "Citrus holds well at 38°F–45°F; standard refrigerator placement prevents mold without inducing chilling injury."
    },
    "applianceSpecs": {
      "parameter": "Crisper or Door Shelf Storage",
      "guideline": "Store loose in the crisper drawer or door shelf at 38°F–42°F in a perforated bag to prevent condensation mold."
    }
  },
  "fresh-avocados-ripe": {
    "materialThermal": {
      "property": "Chilling Injury & Epidermal Pitting Threshold",
      "threshold": "Tissue Collapse occurs <45°F–50°F (7.2°C–10°C)",
      "details": "Tropical produce varieties undergo cell wall breakdown, localized pitting, and watery softening when subjected to standard domestic refrigeration."
    },
    "safetyStandard": {
      "organization": "USDA ARS",
      "standard": "Postharvest Technology Center Chilling Guidelines",
      "citation": "Tropical fruits and cucurbits should be held at 50°F–55°F for maximum structural integrity."
    },
    "applianceSpecs": {
      "parameter": "Produce Crisper High Temperature Setting",
      "guideline": "Store in the crisper drawer with humidity vent partially open, or keep at cool room temperature until cut."
    }
  },
  "fresh-avocado-cut-half": {
    "materialThermal": {
      "property": "Chilling Injury & Epidermal Pitting Threshold",
      "threshold": "Tissue Collapse occurs <45°F–50°F (7.2°C–10°C)",
      "details": "Tropical produce varieties undergo cell wall breakdown, localized pitting, and watery softening when subjected to standard domestic refrigeration."
    },
    "safetyStandard": {
      "organization": "USDA ARS",
      "standard": "Postharvest Technology Center Chilling Guidelines",
      "citation": "Tropical fruits and cucurbits should be held at 50°F–55°F for maximum structural integrity."
    },
    "applianceSpecs": {
      "parameter": "Produce Crisper High Temperature Setting",
      "guideline": "Store in the crisper drawer with humidity vent partially open, or keep at cool room temperature until cut."
    }
  },
  "whole-watermelon-fresh": {
    "materialThermal": {
      "property": "Salmonella & Listeria Translocation Across Rind",
      "threshold": "Pathogen Proliferation on Cut Surface >40°F (4.4°C)",
      "details": "Cutting unwashed melons introduces rind-surface Salmonella and Listeria into high-water-activity flesh (aw ~0.99)."
    },
    "safetyStandard": {
      "organization": "FDA",
      "standard": "FDA Food Code 2022 § 3-501.16 / Cut Melon Guidance",
      "citation": "Cut melon is a TCS food requiring continuous cold holding at 41°F or below; consume within 5–7 days."
    },
    "applianceSpecs": {
      "parameter": "Airtight Chilling on Main Shelf",
      "guideline": "Store cut melon chunks in a sealed container on an interior shelf at 34°F–37°F; whole melons can stay at cool room temp until cut."
    }
  },
  "cut-watermelon-slices": {
    "materialThermal": {
      "property": "Salmonella & Listeria Translocation Across Rind",
      "threshold": "Pathogen Proliferation on Cut Surface >40°F (4.4°C)",
      "details": "Cutting unwashed melons introduces rind-surface Salmonella and Listeria into high-water-activity flesh (aw ~0.99)."
    },
    "safetyStandard": {
      "organization": "FDA",
      "standard": "FDA Food Code 2022 § 3-501.16 / Cut Melon Guidance",
      "citation": "Cut melon is a TCS food requiring continuous cold holding at 41°F or below; consume within 5–7 days."
    },
    "applianceSpecs": {
      "parameter": "Airtight Chilling on Main Shelf",
      "guideline": "Store cut melon chunks in a sealed container on an interior shelf at 34°F–37°F; whole melons can stay at cool room temp until cut."
    }
  },
  "whole-cantaloupe-melon": {
    "materialThermal": {
      "property": "Salmonella & Listeria Translocation Across Rind",
      "threshold": "Pathogen Proliferation on Cut Surface >40°F (4.4°C)",
      "details": "Cutting unwashed melons introduces rind-surface Salmonella and Listeria into high-water-activity flesh (aw ~0.99)."
    },
    "safetyStandard": {
      "organization": "FDA",
      "standard": "FDA Food Code 2022 § 3-501.16 / Cut Melon Guidance",
      "citation": "Cut melon is a TCS food requiring continuous cold holding at 41°F or below; consume within 5–7 days."
    },
    "applianceSpecs": {
      "parameter": "Airtight Chilling on Main Shelf",
      "guideline": "Store cut melon chunks in a sealed container on an interior shelf at 34°F–37°F; whole melons can stay at cool room temp until cut."
    }
  },
  "cut-cantaloupe-chunks": {
    "materialThermal": {
      "property": "Refrigeration Thermal Threshold",
      "threshold": "Cold Holding Limit <=40°F (4.4°C); Freezing Damage <32°F (0°C)",
      "details": "Maintaining internal core temperature below 40°F suppresses psychrotrophic bacterial replication and slows enzymatic cellular breakdown."
    },
    "safetyStandard": {
      "organization": "FDA / USDA",
      "standard": "FDA Food Code 2022 § 3-501.16 / USDA Cold Storage Guidelines",
      "citation": "Perishable foods must be held continuously at or below 40°F to minimize foodborne illness risks."
    },
    "applianceSpecs": {
      "parameter": "Interior Shelf Temperature Maintenance",
      "guideline": "Store in airtight containers on main refrigerator shelves (34°F–38°F) for optimal quality and freshness."
    }
  },
  "whole-honeydew-melon": {
    "materialThermal": {
      "property": "Salmonella & Listeria Translocation Across Rind",
      "threshold": "Pathogen Proliferation on Cut Surface >40°F (4.4°C)",
      "details": "Cutting unwashed melons introduces rind-surface Salmonella and Listeria into high-water-activity flesh (aw ~0.99)."
    },
    "safetyStandard": {
      "organization": "FDA",
      "standard": "FDA Food Code 2022 § 3-501.16 / Cut Melon Guidance",
      "citation": "Cut melon is a TCS food requiring continuous cold holding at 41°F or below; consume within 5–7 days."
    },
    "applianceSpecs": {
      "parameter": "Airtight Chilling on Main Shelf",
      "guideline": "Store cut melon chunks in a sealed container on an interior shelf at 34°F–37°F; whole melons can stay at cool room temp until cut."
    }
  },
  "fresh-peaches-whole": {
    "materialThermal": {
      "property": "Citric Acid & Ascorbic Acid Retention",
      "threshold": "Optimal Shelf Life 38°F–42°F (3.3°C–5.6°C); Chilling Injury <35°F",
      "details": "Citrus fruits possess thick oily flavedo rinds that protect juice vesicles; cold storage at 38°F–42°F prevents moisture loss for 3–4 weeks."
    },
    "safetyStandard": {
      "organization": "USDA ARS",
      "standard": "Citrus Storage Manual",
      "citation": "Citrus holds well at 38°F–45°F; standard refrigerator placement prevents mold without inducing chilling injury."
    },
    "applianceSpecs": {
      "parameter": "Crisper or Door Shelf Storage",
      "guideline": "Store loose in the crisper drawer or door shelf at 38°F–42°F in a perforated bag to prevent condensation mold."
    }
  },
  "fresh-plums-whole": {
    "materialThermal": {
      "property": "Citric Acid & Ascorbic Acid Retention",
      "threshold": "Optimal Shelf Life 38°F–42°F (3.3°C–5.6°C); Chilling Injury <35°F",
      "details": "Citrus fruits possess thick oily flavedo rinds that protect juice vesicles; cold storage at 38°F–42°F prevents moisture loss for 3–4 weeks."
    },
    "safetyStandard": {
      "organization": "USDA ARS",
      "standard": "Citrus Storage Manual",
      "citation": "Citrus holds well at 38°F–45°F; standard refrigerator placement prevents mold without inducing chilling injury."
    },
    "applianceSpecs": {
      "parameter": "Crisper or Door Shelf Storage",
      "guideline": "Store loose in the crisper drawer or door shelf at 38°F–42°F in a perforated bag to prevent condensation mold."
    }
  },
  "fresh-cherries-sweet": {
    "materialThermal": {
      "property": "Refrigeration Thermal Threshold",
      "threshold": "Cold Holding Limit <=40°F (4.4°C); Freezing Damage <32°F (0°C)",
      "details": "Maintaining internal core temperature below 40°F suppresses psychrotrophic bacterial replication and slows enzymatic cellular breakdown."
    },
    "safetyStandard": {
      "organization": "FDA / USDA",
      "standard": "FDA Food Code 2022 § 3-501.16 / USDA Cold Storage Guidelines",
      "citation": "Perishable foods must be held continuously at or below 40°F to minimize foodborne illness risks."
    },
    "applianceSpecs": {
      "parameter": "Interior Shelf Temperature Maintenance",
      "guideline": "Store in airtight containers on main refrigerator shelves (34°F–38°F) for optimal quality and freshness."
    }
  },
  "fresh-pineapple-cut": {
    "materialThermal": {
      "property": "Ethylene Gas Emission & Respiration Slowdown",
      "threshold": "Respiration Slowdown 32°F–36°F (0°C–2.2°C); Firmness Retention",
      "details": "Pome fruits produce ethylene gas (C2H4) that accelerates senescence in surrounding produce; cold temperatures suppress ethylene synthesis."
    },
    "safetyStandard": {
      "organization": "USDA ARS",
      "standard": "Apple & Pear Postharvest Storage Handbook",
      "citation": "Store at 32°F–36°F in high humidity to extend crispness for 1–4 months."
    },
    "applianceSpecs": {
      "parameter": "Low-Humidity Crisper (Vent Open)",
      "guideline": "Store in the low-humidity crisper drawer (vent open) to allow ethylene gas to escape without ripening adjacent leafy greens."
    }
  },
  "opened-mayonnaise-jar": {
    "materialThermal": {
      "property": "Low Water Activity & Acidic Equilibrium Preservation",
      "threshold": "Acid Equilibrium (pH <4.0); Water Activity aw <0.85",
      "details": "Commercial acidic condiments resist bacterial pathogens; refrigeration preserves delicate flavor volatiles and prevents surface mold."
    },
    "safetyStandard": {
      "organization": "FDA",
      "standard": "21 CFR Part 114 (Acidified Foods) / FDA Food Code",
      "citation": "Commercial shelf-stable condiments must be refrigerated after opening to preserve organoleptic quality for 1–6 months."
    },
    "applianceSpecs": {
      "parameter": "Door Shelf Temperature Tolerance",
      "guideline": "Condiments tolerate minor temperature fluctuations (38°F–42°F) and belong in the refrigerator door shelves."
    }
  },
  "opened-ketchup-bottle": {
    "materialThermal": {
      "property": "Low Water Activity & Acidic Equilibrium Preservation",
      "threshold": "Acid Equilibrium (pH <4.0); Water Activity aw <0.85",
      "details": "Commercial acidic condiments resist bacterial pathogens; refrigeration preserves delicate flavor volatiles and prevents surface mold."
    },
    "safetyStandard": {
      "organization": "FDA",
      "standard": "21 CFR Part 114 (Acidified Foods) / FDA Food Code",
      "citation": "Commercial shelf-stable condiments must be refrigerated after opening to preserve organoleptic quality for 1–6 months."
    },
    "applianceSpecs": {
      "parameter": "Door Shelf Temperature Tolerance",
      "guideline": "Condiments tolerate minor temperature fluctuations (38°F–42°F) and belong in the refrigerator door shelves."
    }
  },
  "yellow-mustard-opened": {
    "materialThermal": {
      "property": "Low Water Activity & Acidic Equilibrium Preservation",
      "threshold": "Acid Equilibrium (pH <4.0); Water Activity aw <0.85",
      "details": "Commercial acidic condiments resist bacterial pathogens; refrigeration preserves delicate flavor volatiles and prevents surface mold."
    },
    "safetyStandard": {
      "organization": "FDA",
      "standard": "21 CFR Part 114 (Acidified Foods) / FDA Food Code",
      "citation": "Commercial shelf-stable condiments must be refrigerated after opening to preserve organoleptic quality for 1–6 months."
    },
    "applianceSpecs": {
      "parameter": "Door Shelf Temperature Tolerance",
      "guideline": "Condiments tolerate minor temperature fluctuations (38°F–42°F) and belong in the refrigerator door shelves."
    }
  },
  "dijon-mustard-opened": {
    "materialThermal": {
      "property": "Low Water Activity & Acidic Equilibrium Preservation",
      "threshold": "Acid Equilibrium (pH <4.0); Water Activity aw <0.85",
      "details": "Commercial acidic condiments resist bacterial pathogens; refrigeration preserves delicate flavor volatiles and prevents surface mold."
    },
    "safetyStandard": {
      "organization": "FDA",
      "standard": "21 CFR Part 114 (Acidified Foods) / FDA Food Code",
      "citation": "Commercial shelf-stable condiments must be refrigerated after opening to preserve organoleptic quality for 1–6 months."
    },
    "applianceSpecs": {
      "parameter": "Door Shelf Temperature Tolerance",
      "guideline": "Condiments tolerate minor temperature fluctuations (38°F–42°F) and belong in the refrigerator door shelves."
    }
  },
  "soy-sauce-opened": {
    "materialThermal": {
      "property": "Low Water Activity & Acidic Equilibrium Preservation",
      "threshold": "Acid Equilibrium (pH <4.0); Water Activity aw <0.85",
      "details": "Commercial acidic condiments resist bacterial pathogens; refrigeration preserves delicate flavor volatiles and prevents surface mold."
    },
    "safetyStandard": {
      "organization": "FDA",
      "standard": "21 CFR Part 114 (Acidified Foods) / FDA Food Code",
      "citation": "Commercial shelf-stable condiments must be refrigerated after opening to preserve organoleptic quality for 1–6 months."
    },
    "applianceSpecs": {
      "parameter": "Door Shelf Temperature Tolerance",
      "guideline": "Condiments tolerate minor temperature fluctuations (38°F–42°F) and belong in the refrigerator door shelves."
    }
  },
  "hot-sauce-vinegar-opened": {
    "materialThermal": {
      "property": "Low Water Activity & Acidic Equilibrium Preservation",
      "threshold": "Acid Equilibrium (pH <4.0); Water Activity aw <0.85",
      "details": "Commercial acidic condiments resist bacterial pathogens; refrigeration preserves delicate flavor volatiles and prevents surface mold."
    },
    "safetyStandard": {
      "organization": "FDA",
      "standard": "21 CFR Part 114 (Acidified Foods) / FDA Food Code",
      "citation": "Commercial shelf-stable condiments must be refrigerated after opening to preserve organoleptic quality for 1–6 months."
    },
    "applianceSpecs": {
      "parameter": "Door Shelf Temperature Tolerance",
      "guideline": "Condiments tolerate minor temperature fluctuations (38°F–42°F) and belong in the refrigerator door shelves."
    }
  },
  "barbecue-sauce-opened": {
    "materialThermal": {
      "property": "Low Water Activity & Acidic Equilibrium Preservation",
      "threshold": "Acid Equilibrium (pH <4.0); Water Activity aw <0.85",
      "details": "Commercial acidic condiments resist bacterial pathogens; refrigeration preserves delicate flavor volatiles and prevents surface mold."
    },
    "safetyStandard": {
      "organization": "FDA",
      "standard": "21 CFR Part 114 (Acidified Foods) / FDA Food Code",
      "citation": "Commercial shelf-stable condiments must be refrigerated after opening to preserve organoleptic quality for 1–6 months."
    },
    "applianceSpecs": {
      "parameter": "Door Shelf Temperature Tolerance",
      "guideline": "Condiments tolerate minor temperature fluctuations (38°F–42°F) and belong in the refrigerator door shelves."
    }
  },
  "opened-salsa-jar": {
    "materialThermal": {
      "property": "Low Water Activity & Acidic Equilibrium Preservation",
      "threshold": "Acid Equilibrium (pH <4.0); Water Activity aw <0.85",
      "details": "Commercial acidic condiments resist bacterial pathogens; refrigeration preserves delicate flavor volatiles and prevents surface mold."
    },
    "safetyStandard": {
      "organization": "FDA",
      "standard": "21 CFR Part 114 (Acidified Foods) / FDA Food Code",
      "citation": "Commercial shelf-stable condiments must be refrigerated after opening to preserve organoleptic quality for 1–6 months."
    },
    "applianceSpecs": {
      "parameter": "Door Shelf Temperature Tolerance",
      "guideline": "Condiments tolerate minor temperature fluctuations (38°F–42°F) and belong in the refrigerator door shelves."
    }
  },
  "salad-dressing-dairy": {
    "materialThermal": {
      "property": "Refrigeration Thermal Threshold",
      "threshold": "Cold Holding Limit <=40°F (4.4°C); Freezing Damage <32°F (0°C)",
      "details": "Maintaining internal core temperature below 40°F suppresses psychrotrophic bacterial replication and slows enzymatic cellular breakdown."
    },
    "safetyStandard": {
      "organization": "FDA / USDA",
      "standard": "FDA Food Code 2022 § 3-501.16 / USDA Cold Storage Guidelines",
      "citation": "Perishable foods must be held continuously at or below 40°F to minimize foodborne illness risks."
    },
    "applianceSpecs": {
      "parameter": "Interior Shelf Temperature Maintenance",
      "guideline": "Store in airtight containers on main refrigerator shelves (34°F–38°F) for optimal quality and freshness."
    }
  },
  "salad-dressing-vinaigrette": {
    "materialThermal": {
      "property": "Refrigeration Thermal Threshold",
      "threshold": "Cold Holding Limit <=40°F (4.4°C); Freezing Damage <32°F (0°C)",
      "details": "Maintaining internal core temperature below 40°F suppresses psychrotrophic bacterial replication and slows enzymatic cellular breakdown."
    },
    "safetyStandard": {
      "organization": "FDA / USDA",
      "standard": "FDA Food Code 2022 § 3-501.16 / USDA Cold Storage Guidelines",
      "citation": "Perishable foods must be held continuously at or below 40°F to minimize foodborne illness risks."
    },
    "applianceSpecs": {
      "parameter": "Interior Shelf Temperature Maintenance",
      "guideline": "Store in airtight containers on main refrigerator shelves (34°F–38°F) for optimal quality and freshness."
    }
  },
  "opened-jam-jelly": {
    "materialThermal": {
      "property": "Low Water Activity & Acidic Equilibrium Preservation",
      "threshold": "Acid Equilibrium (pH <4.0); Water Activity aw <0.85",
      "details": "Commercial acidic condiments resist bacterial pathogens; refrigeration preserves delicate flavor volatiles and prevents surface mold."
    },
    "safetyStandard": {
      "organization": "FDA",
      "standard": "21 CFR Part 114 (Acidified Foods) / FDA Food Code",
      "citation": "Commercial shelf-stable condiments must be refrigerated after opening to preserve organoleptic quality for 1–6 months."
    },
    "applianceSpecs": {
      "parameter": "Door Shelf Temperature Tolerance",
      "guideline": "Condiments tolerate minor temperature fluctuations (38°F–42°F) and belong in the refrigerator door shelves."
    }
  },
  "pure-maple-syrup-opened": {
    "materialThermal": {
      "property": "Low Water Activity & Acidic Equilibrium Preservation",
      "threshold": "Acid Equilibrium (pH <4.0); Water Activity aw <0.85",
      "details": "Commercial acidic condiments resist bacterial pathogens; refrigeration preserves delicate flavor volatiles and prevents surface mold."
    },
    "safetyStandard": {
      "organization": "FDA",
      "standard": "21 CFR Part 114 (Acidified Foods) / FDA Food Code",
      "citation": "Commercial shelf-stable condiments must be refrigerated after opening to preserve organoleptic quality for 1–6 months."
    },
    "applianceSpecs": {
      "parameter": "Door Shelf Temperature Tolerance",
      "guideline": "Condiments tolerate minor temperature fluctuations (38°F–42°F) and belong in the refrigerator door shelves."
    }
  },
  "raw-honey-jar": {
    "materialThermal": {
      "property": "Moisture Condensation, Sugar Bloom & Aroma Stripping",
      "threshold": "Sugar Bloom Induction upon dew point condensation at RH >70%",
      "details": "Porous roasted coffee beans and tempered chocolate absorb refrigerator odors and moisture condensation, causing fat/sugar bloom and staling."
    },
    "safetyStandard": {
      "organization": "FDA",
      "standard": "21 CFR § 110.80 / NCA Quality Standards",
      "citation": "Store shelf-stable chocolate and dry coffee in a cool, dark, dry pantry (60°F–68°F, <50% RH)."
    },
    "applianceSpecs": {
      "parameter": "Dry Airtight Canister Protocol",
      "guideline": "Keep at stable room temperature; refrigerate only if kitchen exceeds 80°F, using vacuum-sealed glass jars."
    }
  },
  "peanut-butter-natural": {
    "materialThermal": {
      "property": "Bovine Butterfat Solidification & Hydrolytic Rancidity",
      "threshold": "Butterfat Softening 60°F–65°F; Bacterial Dormancy <=40°F (4.4°C)",
      "details": "Butter contains 80% lipid emulsion with low water activity; refrigeration prevents oxygen- and light-induced rancidity of butyric fatty acids."
    },
    "safetyStandard": {
      "organization": "USDA / FDA",
      "standard": "FDA Food Code 2022 § 3-501.16",
      "citation": "Grade AA butter is safe at room temperature for short periods, but 35°F–40°F refrigeration extends quality up to 1–3 months."
    },
    "applianceSpecs": {
      "parameter": "Dairy Compartment Temperature Buffer",
      "guideline": "Butter can be kept in the covered dairy door bin (38°F–42°F) for spreadable consistency while preventing off-flavor absorption."
    }
  },
  "olive-oil-extra-virgin": {
    "materialThermal": {
      "property": "Low Water Activity & Acidic Equilibrium Preservation",
      "threshold": "Acid Equilibrium (pH <4.0); Water Activity aw <0.85",
      "details": "Commercial acidic condiments resist bacterial pathogens; refrigeration preserves delicate flavor volatiles and prevents surface mold."
    },
    "safetyStandard": {
      "organization": "FDA",
      "standard": "21 CFR Part 114 (Acidified Foods) / FDA Food Code",
      "citation": "Commercial shelf-stable condiments must be refrigerated after opening to preserve organoleptic quality for 1–6 months."
    },
    "applianceSpecs": {
      "parameter": "Door Shelf Temperature Tolerance",
      "guideline": "Condiments tolerate minor temperature fluctuations (38°F–42°F) and belong in the refrigerator door shelves."
    }
  },
  "hoisin-sauce-opened": {
    "materialThermal": {
      "property": "Low Water Activity & Acidic Equilibrium Preservation",
      "threshold": "Acid Equilibrium (pH <4.0); Water Activity aw <0.85",
      "details": "Commercial acidic condiments resist bacterial pathogens; refrigeration preserves delicate flavor volatiles and prevents surface mold."
    },
    "safetyStandard": {
      "organization": "FDA",
      "standard": "21 CFR Part 114 (Acidified Foods) / FDA Food Code",
      "citation": "Commercial shelf-stable condiments must be refrigerated after opening to preserve organoleptic quality for 1–6 months."
    },
    "applianceSpecs": {
      "parameter": "Door Shelf Temperature Tolerance",
      "guideline": "Condiments tolerate minor temperature fluctuations (38°F–42°F) and belong in the refrigerator door shelves."
    }
  },
  "opened-pesto-jar": {
    "materialThermal": {
      "property": "Low Water Activity & Acidic Equilibrium Preservation",
      "threshold": "Acid Equilibrium (pH <4.0); Water Activity aw <0.85",
      "details": "Commercial acidic condiments resist bacterial pathogens; refrigeration preserves delicate flavor volatiles and prevents surface mold."
    },
    "safetyStandard": {
      "organization": "FDA",
      "standard": "21 CFR Part 114 (Acidified Foods) / FDA Food Code",
      "citation": "Commercial shelf-stable condiments must be refrigerated after opening to preserve organoleptic quality for 1–6 months."
    },
    "applianceSpecs": {
      "parameter": "Door Shelf Temperature Tolerance",
      "guideline": "Condiments tolerate minor temperature fluctuations (38°F–42°F) and belong in the refrigerator door shelves."
    }
  },
  "commercial-hummus-opened": {
    "materialThermal": {
      "property": "Refrigeration Thermal Threshold",
      "threshold": "Cold Holding Limit <=40°F (4.4°C); Freezing Damage <32°F (0°C)",
      "details": "Maintaining internal core temperature below 40°F suppresses psychrotrophic bacterial replication and slows enzymatic cellular breakdown."
    },
    "safetyStandard": {
      "organization": "FDA / USDA",
      "standard": "FDA Food Code 2022 § 3-501.16 / USDA Cold Storage Guidelines",
      "citation": "Perishable foods must be held continuously at or below 40°F to minimize foodborne illness risks."
    },
    "applianceSpecs": {
      "parameter": "Interior Shelf Temperature Maintenance",
      "guideline": "Store in airtight containers on main refrigerator shelves (34°F–38°F) for optimal quality and freshness."
    }
  },
  "cooked-white-rice": {
    "materialThermal": {
      "property": "Bacillus cereus Spore Germination & Emetic Toxin",
      "threshold": "Spore Germination 50°F–122°F (10°C–50°C); Toxin Heat Stability >250°F",
      "details": "Bacillus cereus endospores survive boiling. If starchy grains cool slowly, spores germinate and produce heat-stable cereulide enterotoxins."
    },
    "safetyStandard": {
      "organization": "FDA",
      "standard": "FDA Food Code 2022 § 3-501.14 & § 3-501.16",
      "citation": "Cooked grains must cool from 135°F to 70°F in 2 hours, and reach <=41°F in 4 additional hours; discard after 3–4 days."
    },
    "applianceSpecs": {
      "parameter": "Shallow Container Rapid Convective Cooling",
      "guideline": "Divide hot cooked rice into shallow containers (<=2 inches depth) on an open middle shelf (34°F–37°F) for rapid core chilling."
    }
  },
  "cooked-brown-rice": {
    "materialThermal": {
      "property": "Bacillus cereus Spore Germination & Emetic Toxin",
      "threshold": "Spore Germination 50°F–122°F (10°C–50°C); Toxin Heat Stability >250°F",
      "details": "Bacillus cereus endospores survive boiling. If starchy grains cool slowly, spores germinate and produce heat-stable cereulide enterotoxins."
    },
    "safetyStandard": {
      "organization": "FDA",
      "standard": "FDA Food Code 2022 § 3-501.14 & § 3-501.16",
      "citation": "Cooked grains must cool from 135°F to 70°F in 2 hours, and reach <=41°F in 4 additional hours; discard after 3–4 days."
    },
    "applianceSpecs": {
      "parameter": "Shallow Container Rapid Convective Cooling",
      "guideline": "Divide hot cooked rice into shallow containers (<=2 inches depth) on an open middle shelf (34°F–37°F) for rapid core chilling."
    }
  },
  "cooked-pasta-plain": {
    "materialThermal": {
      "property": "Bacillus cereus Spore Germination & Emetic Toxin",
      "threshold": "Spore Germination 50°F–122°F (10°C–50°C); Toxin Heat Stability >250°F",
      "details": "Bacillus cereus endospores survive boiling. If starchy grains cool slowly, spores germinate and produce heat-stable cereulide enterotoxins."
    },
    "safetyStandard": {
      "organization": "FDA",
      "standard": "FDA Food Code 2022 § 3-501.14 & § 3-501.16",
      "citation": "Cooked grains must cool from 135°F to 70°F in 2 hours, and reach <=41°F in 4 additional hours; discard after 3–4 days."
    },
    "applianceSpecs": {
      "parameter": "Shallow Container Rapid Convective Cooling",
      "guideline": "Divide hot cooked rice into shallow containers (<=2 inches depth) on an open middle shelf (34°F–37°F) for rapid core chilling."
    }
  },
  "pasta-with-meat-sauce": {
    "materialThermal": {
      "property": "Myoglobin Oxidation & Microbial Latency",
      "threshold": "Metmyoglobin Browning >38°F (3.3°C); Spoilage Bacteria >40°F (4.4°C)",
      "details": "Intact muscle tissue retains enzymatic freshness at 34°F–36°F; temperatures above 40°F accelerate oxymyoglobin conversion to brown metmyoglobin."
    },
    "safetyStandard": {
      "organization": "USDA FSIS",
      "standard": "FSIS Meat Storage Regulations",
      "citation": "Raw intact steaks and roasts must be stored at or below 40°F and prepared within 3–5 days."
    },
    "applianceSpecs": {
      "parameter": "Lowest Shelf Drainage & Temperature",
      "guideline": "Store raw steaks on the bottom shelf at 34°F–36°F wrapped tightly in moisture-vapor-resistant wrap."
    }
  },
  "cooked-pizza-leftover": {
    "materialThermal": {
      "property": "Spore Germination & Microbial Danger Zone",
      "threshold": "Danger Zone 40°F–140°F (4.4°C–60°C); Clostridium perfringens growth",
      "details": "Dense stews, soups, and casseroles retain internal thermal core heat; rapid chilling below 40°F halts bacterial multiplication."
    },
    "safetyStandard": {
      "organization": "USDA FSIS / FDA",
      "standard": "FDA Food Code 2022 § 3-501.14 (Cooling Specifications)",
      "citation": "Cool cooked TCS foods to 70°F within 2 hours, and to <=41°F within an additional 4 hours; store for maximum 3–4 days."
    },
    "applianceSpecs": {
      "parameter": "Rapid Heat Dissipation Protocol",
      "guideline": "Divide large batches into shallow pans; avoid stacking hot containers to allow convective airflow to cool foods rapidly."
    }
  },
  "chicken-noodle-soup": {
    "materialThermal": {
      "property": "Pathogen Proliferation & Freezing Point Depression",
      "threshold": "Bacterial proliferation >40°F (4.4°C); Tissue Freezing Point ~28°F (-2.2°C)",
      "details": "Raw avian muscle tissue supports rapid replication of Salmonella enterica and Campylobacter jejuni above 40°F, doubling every 30 minutes at 50°F."
    },
    "safetyStandard": {
      "organization": "USDA FSIS",
      "standard": "9 CFR § 381.150 / FSIS Directives",
      "citation": "Raw poultry must be held at or below 40°F and cooked or frozen within 1–2 days of purchase."
    },
    "applianceSpecs": {
      "parameter": "Bottom-Shelf Coldest Zone & Drip Containment",
      "guideline": "Keep on the lowest shelf (34°F–36°F) inside a rimmed tray to prevent accidental dripping onto ready-to-eat foods."
    }
  },
  "vegetable-soup-broth": {
    "materialThermal": {
      "property": "Spore Germination & Microbial Danger Zone",
      "threshold": "Danger Zone 40°F–140°F (4.4°C–60°C); Clostridium perfringens growth",
      "details": "Dense stews, soups, and casseroles retain internal thermal core heat; rapid chilling below 40°F halts bacterial multiplication."
    },
    "safetyStandard": {
      "organization": "USDA FSIS / FDA",
      "standard": "FDA Food Code 2022 § 3-501.14 (Cooling Specifications)",
      "citation": "Cool cooked TCS foods to 70°F within 2 hours, and to <=41°F within an additional 4 hours; store for maximum 3–4 days."
    },
    "applianceSpecs": {
      "parameter": "Rapid Heat Dissipation Protocol",
      "guideline": "Divide large batches into shallow pans; avoid stacking hot containers to allow convective airflow to cool foods rapidly."
    }
  },
  "chili-con-carne": {
    "materialThermal": {
      "property": "Spore Germination & Microbial Danger Zone",
      "threshold": "Danger Zone 40°F–140°F (4.4°C–60°C); Clostridium perfringens growth",
      "details": "Dense stews, soups, and casseroles retain internal thermal core heat; rapid chilling below 40°F halts bacterial multiplication."
    },
    "safetyStandard": {
      "organization": "USDA FSIS / FDA",
      "standard": "FDA Food Code 2022 § 3-501.14 (Cooling Specifications)",
      "citation": "Cool cooked TCS foods to 70°F within 2 hours, and to <=41°F within an additional 4 hours; store for maximum 3–4 days."
    },
    "applianceSpecs": {
      "parameter": "Rapid Heat Dissipation Protocol",
      "guideline": "Divide large batches into shallow pans; avoid stacking hot containers to allow convective airflow to cool foods rapidly."
    }
  },
  "beef-stew-cooked": {
    "materialThermal": {
      "property": "Myoglobin Oxidation & Microbial Latency",
      "threshold": "Metmyoglobin Browning >38°F (3.3°C); Spoilage Bacteria >40°F (4.4°C)",
      "details": "Intact muscle tissue retains enzymatic freshness at 34°F–36°F; temperatures above 40°F accelerate oxymyoglobin conversion to brown metmyoglobin."
    },
    "safetyStandard": {
      "organization": "USDA FSIS",
      "standard": "FSIS Meat Storage Regulations",
      "citation": "Raw intact steaks and roasts must be stored at or below 40°F and prepared within 3–5 days."
    },
    "applianceSpecs": {
      "parameter": "Lowest Shelf Drainage & Temperature",
      "guideline": "Store raw steaks on the bottom shelf at 34°F–36°F wrapped tightly in moisture-vapor-resistant wrap."
    }
  },
  "lasagna-cooked-slice": {
    "materialThermal": {
      "property": "Spore Germination & Microbial Danger Zone",
      "threshold": "Danger Zone 40°F–140°F (4.4°C–60°C); Clostridium perfringens growth",
      "details": "Dense stews, soups, and casseroles retain internal thermal core heat; rapid chilling below 40°F halts bacterial multiplication."
    },
    "safetyStandard": {
      "organization": "USDA FSIS / FDA",
      "standard": "FDA Food Code 2022 § 3-501.14 (Cooling Specifications)",
      "citation": "Cool cooked TCS foods to 70°F within 2 hours, and to <=41°F within an additional 4 hours; store for maximum 3–4 days."
    },
    "applianceSpecs": {
      "parameter": "Rapid Heat Dissipation Protocol",
      "guideline": "Divide large batches into shallow pans; avoid stacking hot containers to allow convective airflow to cool foods rapidly."
    }
  },
  "mashed-potatoes-cooked": {
    "materialThermal": {
      "property": "Cold-Induced Sweetening (CIS) & Acrylamide Risk",
      "threshold": "CIS Enzymatic Conversion occurs <45°F (7.2°C); Sprouting >60°F",
      "details": "Refrigerating raw potatoes converts tuber starch into reducing sugars (glucose/fructose), which form carcinogenic acrylamide when later baked or fried."
    },
    "safetyStandard": {
      "organization": "FDA / USDA ARS",
      "standard": "FDA Acrylamide Guidance / USDA ARS Storage Standards",
      "citation": "Raw potatoes should be stored in a cool, dark pantry at 50°F–55°F, never in standard domestic refrigerators."
    },
    "applianceSpecs": {
      "parameter": "Pantry Dark Storage vs. Refrigerator Humidity",
      "guideline": "Domestic refrigerator humidity (85%–90%) triggers solanine greening and rot; store unwashed in a well-ventilated paper bag in a cool pantry."
    }
  },
  "macaroni-and-cheese": {
    "materialThermal": {
      "property": "Psychrotrophic Proteolysis & Lactic Acid Dormancy",
      "threshold": "Pseudomonas bacterial multiplication >40°F (4.4°C); Milk Freezing ~31°F (-0.5°C)",
      "details": "Pasteurized milk contains psychrotolerant spore-formers (Bacillus cereus) that replicate rapidly above 40°F, causing curdling and sour off-flavors."
    },
    "safetyStandard": {
      "organization": "FDA / USPHS",
      "standard": "Grade 'A' Pasteurized Milk Ordinance (PMO) 2019 Item 17p",
      "citation": "Grade A milk must be maintained continuously at 40°F (4.4°C) or lower from pasteurization to consumption."
    },
    "applianceSpecs": {
      "parameter": "Interior Main Shelf Placement (Avoid Door Bins)",
      "guideline": "Always store milk on the back of an interior shelf (34°F–37°F); door bins fluctuate up to 45°F during daily openings, cutting shelf life in half."
    }
  },
  "cooked-quinoa-grain": {
    "materialThermal": {
      "property": "Bacillus cereus Spore Germination & Emetic Toxin",
      "threshold": "Spore Germination 50°F–122°F (10°C–50°C); Toxin Heat Stability >250°F",
      "details": "Bacillus cereus endospores survive boiling. If starchy grains cool slowly, spores germinate and produce heat-stable cereulide enterotoxins."
    },
    "safetyStandard": {
      "organization": "FDA",
      "standard": "FDA Food Code 2022 § 3-501.14 & § 3-501.16",
      "citation": "Cooked grains must cool from 135°F to 70°F in 2 hours, and reach <=41°F in 4 additional hours; discard after 3–4 days."
    },
    "applianceSpecs": {
      "parameter": "Shallow Container Rapid Convective Cooling",
      "guideline": "Divide hot cooked rice into shallow containers (<=2 inches depth) on an open middle shelf (34°F–37°F) for rapid core chilling."
    }
  },
  "cooked-lentils-dal": {
    "materialThermal": {
      "property": "Spore Germination & Microbial Danger Zone",
      "threshold": "Danger Zone 40°F–140°F (4.4°C–60°C); Clostridium perfringens growth",
      "details": "Dense stews, soups, and casseroles retain internal thermal core heat; rapid chilling below 40°F halts bacterial multiplication."
    },
    "safetyStandard": {
      "organization": "USDA FSIS / FDA",
      "standard": "FDA Food Code 2022 § 3-501.14 (Cooling Specifications)",
      "citation": "Cool cooked TCS foods to 70°F within 2 hours, and to <=41°F within an additional 4 hours; store for maximum 3–4 days."
    },
    "applianceSpecs": {
      "parameter": "Rapid Heat Dissipation Protocol",
      "guideline": "Divide large batches into shallow pans; avoid stacking hot containers to allow convective airflow to cool foods rapidly."
    }
  },
  "cooked-beans-chickpeas": {
    "materialThermal": {
      "property": "Spore Germination & Microbial Danger Zone",
      "threshold": "Danger Zone 40°F–140°F (4.4°C–60°C); Clostridium perfringens growth",
      "details": "Dense stews, soups, and casseroles retain internal thermal core heat; rapid chilling below 40°F halts bacterial multiplication."
    },
    "safetyStandard": {
      "organization": "USDA FSIS / FDA",
      "standard": "FDA Food Code 2022 § 3-501.14 (Cooling Specifications)",
      "citation": "Cool cooked TCS foods to 70°F within 2 hours, and to <=41°F within an additional 4 hours; store for maximum 3–4 days."
    },
    "applianceSpecs": {
      "parameter": "Rapid Heat Dissipation Protocol",
      "guideline": "Divide large batches into shallow pans; avoid stacking hot containers to allow convective airflow to cool foods rapidly."
    }
  },
  "enchiladas-casserole": {
    "materialThermal": {
      "property": "Spore Germination & Microbial Danger Zone",
      "threshold": "Danger Zone 40°F–140°F (4.4°C–60°C); Clostridium perfringens growth",
      "details": "Dense stews, soups, and casseroles retain internal thermal core heat; rapid chilling below 40°F halts bacterial multiplication."
    },
    "safetyStandard": {
      "organization": "USDA FSIS / FDA",
      "standard": "FDA Food Code 2022 § 3-501.14 (Cooling Specifications)",
      "citation": "Cool cooked TCS foods to 70°F within 2 hours, and to <=41°F within an additional 4 hours; store for maximum 3–4 days."
    },
    "applianceSpecs": {
      "parameter": "Rapid Heat Dissipation Protocol",
      "guideline": "Divide large batches into shallow pans; avoid stacking hot containers to allow convective airflow to cool foods rapidly."
    }
  },
  "stir-fry-meat-veggies": {
    "materialThermal": {
      "property": "Myoglobin Oxidation & Microbial Latency",
      "threshold": "Metmyoglobin Browning >38°F (3.3°C); Spoilage Bacteria >40°F (4.4°C)",
      "details": "Intact muscle tissue retains enzymatic freshness at 34°F–36°F; temperatures above 40°F accelerate oxymyoglobin conversion to brown metmyoglobin."
    },
    "safetyStandard": {
      "organization": "USDA FSIS",
      "standard": "FSIS Meat Storage Regulations",
      "citation": "Raw intact steaks and roasts must be stored at or below 40°F and prepared within 3–5 days."
    },
    "applianceSpecs": {
      "parameter": "Lowest Shelf Drainage & Temperature",
      "guideline": "Store raw steaks on the bottom shelf at 34°F–36°F wrapped tightly in moisture-vapor-resistant wrap."
    }
  },
  "curry-chicken-meat": {
    "materialThermal": {
      "property": "Pathogen Proliferation & Freezing Point Depression",
      "threshold": "Bacterial proliferation >40°F (4.4°C); Tissue Freezing Point ~28°F (-2.2°C)",
      "details": "Raw avian muscle tissue supports rapid replication of Salmonella enterica and Campylobacter jejuni above 40°F, doubling every 30 minutes at 50°F."
    },
    "safetyStandard": {
      "organization": "USDA FSIS",
      "standard": "9 CFR § 381.150 / FSIS Directives",
      "citation": "Raw poultry must be held at or below 40°F and cooked or frozen within 1–2 days of purchase."
    },
    "applianceSpecs": {
      "parameter": "Bottom-Shelf Coldest Zone & Drip Containment",
      "guideline": "Keep on the lowest shelf (34°F–36°F) inside a rimmed tray to prevent accidental dripping onto ready-to-eat foods."
    }
  },
  "fresh-squeezed-orange-juice": {
    "materialThermal": {
      "property": "Citric Acid & Ascorbic Acid Retention",
      "threshold": "Optimal Shelf Life 38°F–42°F (3.3°C–5.6°C); Chilling Injury <35°F",
      "details": "Citrus fruits possess thick oily flavedo rinds that protect juice vesicles; cold storage at 38°F–42°F prevents moisture loss for 3–4 weeks."
    },
    "safetyStandard": {
      "organization": "USDA ARS",
      "standard": "Citrus Storage Manual",
      "citation": "Citrus holds well at 38°F–45°F; standard refrigerator placement prevents mold without inducing chilling injury."
    },
    "applianceSpecs": {
      "parameter": "Crisper or Door Shelf Storage",
      "guideline": "Store loose in the crisper drawer or door shelf at 38°F–42°F in a perforated bag to prevent condensation mold."
    }
  },
  "apple-cider-fresh": {
    "materialThermal": {
      "property": "Ethylene Gas Emission & Respiration Slowdown",
      "threshold": "Respiration Slowdown 32°F–36°F (0°C–2.2°C); Firmness Retention",
      "details": "Pome fruits produce ethylene gas (C2H4) that accelerates senescence in surrounding produce; cold temperatures suppress ethylene synthesis."
    },
    "safetyStandard": {
      "organization": "USDA ARS",
      "standard": "Apple & Pear Postharvest Storage Handbook",
      "citation": "Store at 32°F–36°F in high humidity to extend crispness for 1–4 months."
    },
    "applianceSpecs": {
      "parameter": "Low-Humidity Crisper (Vent Open)",
      "guideline": "Store in the low-humidity crisper drawer (vent open) to allow ethylene gas to escape without ripening adjacent leafy greens."
    }
  },
  "cold-brew-coffee-pitcher": {
    "materialThermal": {
      "property": "Moisture Condensation, Sugar Bloom & Aroma Stripping",
      "threshold": "Sugar Bloom Induction upon dew point condensation at RH >70%",
      "details": "Porous roasted coffee beans and tempered chocolate absorb refrigerator odors and moisture condensation, causing fat/sugar bloom and staling."
    },
    "safetyStandard": {
      "organization": "FDA",
      "standard": "21 CFR § 110.80 / NCA Quality Standards",
      "citation": "Store shelf-stable chocolate and dry coffee in a cool, dark, dry pantry (60°F–68°F, <50% RH)."
    },
    "applianceSpecs": {
      "parameter": "Dry Airtight Canister Protocol",
      "guideline": "Keep at stable room temperature; refrigerate only if kitchen exceeds 80°F, using vacuum-sealed glass jars."
    }
  },
  "brewed-iced-tea": {
    "materialThermal": {
      "property": "Refrigeration Thermal Threshold",
      "threshold": "Cold Holding Limit <=40°F (4.4°C); Freezing Damage <32°F (0°C)",
      "details": "Maintaining internal core temperature below 40°F suppresses psychrotrophic bacterial replication and slows enzymatic cellular breakdown."
    },
    "safetyStandard": {
      "organization": "FDA / USDA",
      "standard": "FDA Food Code 2022 § 3-501.16 / USDA Cold Storage Guidelines",
      "citation": "Perishable foods must be held continuously at or below 40°F to minimize foodborne illness risks."
    },
    "applianceSpecs": {
      "parameter": "Interior Shelf Temperature Maintenance",
      "guideline": "Store in airtight containers on main refrigerator shelves (34°F–38°F) for optimal quality and freshness."
    }
  },
  "opened-red-wine-bottle": {
    "materialThermal": {
      "property": "Refrigeration Thermal Threshold",
      "threshold": "Cold Holding Limit <=40°F (4.4°C); Freezing Damage <32°F (0°C)",
      "details": "Maintaining internal core temperature below 40°F suppresses psychrotrophic bacterial replication and slows enzymatic cellular breakdown."
    },
    "safetyStandard": {
      "organization": "FDA / USDA",
      "standard": "FDA Food Code 2022 § 3-501.16 / USDA Cold Storage Guidelines",
      "citation": "Perishable foods must be held continuously at or below 40°F to minimize foodborne illness risks."
    },
    "applianceSpecs": {
      "parameter": "Interior Shelf Temperature Maintenance",
      "guideline": "Store in airtight containers on main refrigerator shelves (34°F–38°F) for optimal quality and freshness."
    }
  },
  "opened-white-wine-bottle": {
    "materialThermal": {
      "property": "Refrigeration Thermal Threshold",
      "threshold": "Cold Holding Limit <=40°F (4.4°C); Freezing Damage <32°F (0°C)",
      "details": "Maintaining internal core temperature below 40°F suppresses psychrotrophic bacterial replication and slows enzymatic cellular breakdown."
    },
    "safetyStandard": {
      "organization": "FDA / USDA",
      "standard": "FDA Food Code 2022 § 3-501.16 / USDA Cold Storage Guidelines",
      "citation": "Perishable foods must be held continuously at or below 40°F to minimize foodborne illness risks."
    },
    "applianceSpecs": {
      "parameter": "Interior Shelf Temperature Maintenance",
      "guideline": "Store in airtight containers on main refrigerator shelves (34°F–38°F) for optimal quality and freshness."
    }
  },
  "opened-champagne-prosecco": {
    "materialThermal": {
      "property": "Refrigeration Thermal Threshold",
      "threshold": "Cold Holding Limit <=40°F (4.4°C); Freezing Damage <32°F (0°C)",
      "details": "Maintaining internal core temperature below 40°F suppresses psychrotrophic bacterial replication and slows enzymatic cellular breakdown."
    },
    "safetyStandard": {
      "organization": "FDA / USDA",
      "standard": "FDA Food Code 2022 § 3-501.16 / USDA Cold Storage Guidelines",
      "citation": "Perishable foods must be held continuously at or below 40°F to minimize foodborne illness risks."
    },
    "applianceSpecs": {
      "parameter": "Interior Shelf Temperature Maintenance",
      "guideline": "Store in airtight containers on main refrigerator shelves (34°F–38°F) for optimal quality and freshness."
    }
  },
  "opened-beer-bottle-can": {
    "materialThermal": {
      "property": "Refrigeration Thermal Threshold",
      "threshold": "Cold Holding Limit <=40°F (4.4°C); Freezing Damage <32°F (0°C)",
      "details": "Maintaining internal core temperature below 40°F suppresses psychrotrophic bacterial replication and slows enzymatic cellular breakdown."
    },
    "safetyStandard": {
      "organization": "FDA / USDA",
      "standard": "FDA Food Code 2022 § 3-501.16 / USDA Cold Storage Guidelines",
      "citation": "Perishable foods must be held continuously at or below 40°F to minimize foodborne illness risks."
    },
    "applianceSpecs": {
      "parameter": "Interior Shelf Temperature Maintenance",
      "guideline": "Store in airtight containers on main refrigerator shelves (34°F–38°F) for optimal quality and freshness."
    }
  },
  "coconut-water-opened": {
    "materialThermal": {
      "property": "Refrigeration Thermal Threshold",
      "threshold": "Cold Holding Limit <=40°F (4.4°C); Freezing Damage <32°F (0°C)",
      "details": "Maintaining internal core temperature below 40°F suppresses psychrotrophic bacterial replication and slows enzymatic cellular breakdown."
    },
    "safetyStandard": {
      "organization": "FDA / USDA",
      "standard": "FDA Food Code 2022 § 3-501.16 / USDA Cold Storage Guidelines",
      "citation": "Perishable foods must be held continuously at or below 40°F to minimize foodborne illness risks."
    },
    "applianceSpecs": {
      "parameter": "Interior Shelf Temperature Maintenance",
      "guideline": "Store in airtight containers on main refrigerator shelves (34°F–38°F) for optimal quality and freshness."
    }
  },
  "kombucha-raw-fermented": {
    "materialThermal": {
      "property": "Refrigeration Thermal Threshold",
      "threshold": "Cold Holding Limit <=40°F (4.4°C); Freezing Damage <32°F (0°C)",
      "details": "Maintaining internal core temperature below 40°F suppresses psychrotrophic bacterial replication and slows enzymatic cellular breakdown."
    },
    "safetyStandard": {
      "organization": "FDA / USDA",
      "standard": "FDA Food Code 2022 § 3-501.16 / USDA Cold Storage Guidelines",
      "citation": "Perishable foods must be held continuously at or below 40°F to minimize foodborne illness risks."
    },
    "applianceSpecs": {
      "parameter": "Interior Shelf Temperature Maintenance",
      "guideline": "Store in airtight containers on main refrigerator shelves (34°F–38°F) for optimal quality and freshness."
    }
  },
  "fresh-lemonade-pitcher": {
    "materialThermal": {
      "property": "Citric Acid & Ascorbic Acid Retention",
      "threshold": "Optimal Shelf Life 38°F–42°F (3.3°C–5.6°C); Chilling Injury <35°F",
      "details": "Citrus fruits possess thick oily flavedo rinds that protect juice vesicles; cold storage at 38°F–42°F prevents moisture loss for 3–4 weeks."
    },
    "safetyStandard": {
      "organization": "USDA ARS",
      "standard": "Citrus Storage Manual",
      "citation": "Citrus holds well at 38°F–45°F; standard refrigerator placement prevents mold without inducing chilling injury."
    },
    "applianceSpecs": {
      "parameter": "Crisper or Door Shelf Storage",
      "guideline": "Store loose in the crisper drawer or door shelf at 38°F–42°F in a perforated bag to prevent condensation mold."
    }
  },
  "energy-drink-opened-can": {
    "materialThermal": {
      "property": "Refrigeration Thermal Threshold",
      "threshold": "Cold Holding Limit <=40°F (4.4°C); Freezing Damage <32°F (0°C)",
      "details": "Maintaining internal core temperature below 40°F suppresses psychrotrophic bacterial replication and slows enzymatic cellular breakdown."
    },
    "safetyStandard": {
      "organization": "FDA / USDA",
      "standard": "FDA Food Code 2022 § 3-501.16 / USDA Cold Storage Guidelines",
      "citation": "Perishable foods must be held continuously at or below 40°F to minimize foodborne illness risks."
    },
    "applianceSpecs": {
      "parameter": "Interior Shelf Temperature Maintenance",
      "guideline": "Store in airtight containers on main refrigerator shelves (34°F–38°F) for optimal quality and freshness."
    }
  },
  "opened-soda-can": {
    "materialThermal": {
      "property": "Refrigeration Thermal Threshold",
      "threshold": "Cold Holding Limit <=40°F (4.4°C); Freezing Damage <32°F (0°C)",
      "details": "Maintaining internal core temperature below 40°F suppresses psychrotrophic bacterial replication and slows enzymatic cellular breakdown."
    },
    "safetyStandard": {
      "organization": "FDA / USDA",
      "standard": "FDA Food Code 2022 § 3-501.16 / USDA Cold Storage Guidelines",
      "citation": "Perishable foods must be held continuously at or below 40°F to minimize foodborne illness risks."
    },
    "applianceSpecs": {
      "parameter": "Interior Shelf Temperature Maintenance",
      "guideline": "Store in airtight containers on main refrigerator shelves (34°F–38°F) for optimal quality and freshness."
    }
  },
  "soy-milk-opened-carton": {
    "materialThermal": {
      "property": "Psychrotrophic Proteolysis & Lactic Acid Dormancy",
      "threshold": "Pseudomonas bacterial multiplication >40°F (4.4°C); Milk Freezing ~31°F (-0.5°C)",
      "details": "Pasteurized milk contains psychrotolerant spore-formers (Bacillus cereus) that replicate rapidly above 40°F, causing curdling and sour off-flavors."
    },
    "safetyStandard": {
      "organization": "FDA / USPHS",
      "standard": "Grade 'A' Pasteurized Milk Ordinance (PMO) 2019 Item 17p",
      "citation": "Grade A milk must be maintained continuously at 40°F (4.4°C) or lower from pasteurization to consumption."
    },
    "applianceSpecs": {
      "parameter": "Interior Main Shelf Placement (Avoid Door Bins)",
      "guideline": "Always store milk on the back of an interior shelf (34°F–37°F); door bins fluctuate up to 45°F during daily openings, cutting shelf life in half."
    }
  },
  "almond-milk-opened-carton": {
    "materialThermal": {
      "property": "Psychrotrophic Proteolysis & Lactic Acid Dormancy",
      "threshold": "Pseudomonas bacterial multiplication >40°F (4.4°C); Milk Freezing ~31°F (-0.5°C)",
      "details": "Pasteurized milk contains psychrotolerant spore-formers (Bacillus cereus) that replicate rapidly above 40°F, causing curdling and sour off-flavors."
    },
    "safetyStandard": {
      "organization": "FDA / USPHS",
      "standard": "Grade 'A' Pasteurized Milk Ordinance (PMO) 2019 Item 17p",
      "citation": "Grade A milk must be maintained continuously at 40°F (4.4°C) or lower from pasteurization to consumption."
    },
    "applianceSpecs": {
      "parameter": "Interior Main Shelf Placement (Avoid Door Bins)",
      "guideline": "Always store milk on the back of an interior shelf (34°F–37°F); door bins fluctuate up to 45°F during daily openings, cutting shelf life in half."
    }
  },
  "oat-milk-barista-opened": {
    "materialThermal": {
      "property": "Psychrotrophic Proteolysis & Lactic Acid Dormancy",
      "threshold": "Pseudomonas bacterial multiplication >40°F (4.4°C); Milk Freezing ~31°F (-0.5°C)",
      "details": "Pasteurized milk contains psychrotolerant spore-formers (Bacillus cereus) that replicate rapidly above 40°F, causing curdling and sour off-flavors."
    },
    "safetyStandard": {
      "organization": "FDA / USPHS",
      "standard": "Grade 'A' Pasteurized Milk Ordinance (PMO) 2019 Item 17p",
      "citation": "Grade A milk must be maintained continuously at 40°F (4.4°C) or lower from pasteurization to consumption."
    },
    "applianceSpecs": {
      "parameter": "Interior Main Shelf Placement (Avoid Door Bins)",
      "guideline": "Always store milk on the back of an interior shelf (34°F–37°F); door bins fluctuate up to 45°F during daily openings, cutting shelf life in half."
    }
  },
  "coconut-milk-canned-opened": {
    "materialThermal": {
      "property": "Psychrotrophic Proteolysis & Lactic Acid Dormancy",
      "threshold": "Pseudomonas bacterial multiplication >40°F (4.4°C); Milk Freezing ~31°F (-0.5°C)",
      "details": "Pasteurized milk contains psychrotolerant spore-formers (Bacillus cereus) that replicate rapidly above 40°F, causing curdling and sour off-flavors."
    },
    "safetyStandard": {
      "organization": "FDA / USPHS",
      "standard": "Grade 'A' Pasteurized Milk Ordinance (PMO) 2019 Item 17p",
      "citation": "Grade A milk must be maintained continuously at 40°F (4.4°C) or lower from pasteurization to consumption."
    },
    "applianceSpecs": {
      "parameter": "Interior Main Shelf Placement (Avoid Door Bins)",
      "guideline": "Always store milk on the back of an interior shelf (34°F–37°F); door bins fluctuate up to 45°F during daily openings, cutting shelf life in half."
    }
  },
  "vegetable-juice-blend": {
    "materialThermal": {
      "property": "Refrigeration Thermal Threshold",
      "threshold": "Cold Holding Limit <=40°F (4.4°C); Freezing Damage <32°F (0°C)",
      "details": "Maintaining internal core temperature below 40°F suppresses psychrotrophic bacterial replication and slows enzymatic cellular breakdown."
    },
    "safetyStandard": {
      "organization": "FDA / USDA",
      "standard": "FDA Food Code 2022 § 3-501.16 / USDA Cold Storage Guidelines",
      "citation": "Perishable foods must be held continuously at or below 40°F to minimize foodborne illness risks."
    },
    "applianceSpecs": {
      "parameter": "Interior Shelf Temperature Maintenance",
      "guideline": "Store in airtight containers on main refrigerator shelves (34°F–38°F) for optimal quality and freshness."
    }
  },
  "raw-bread-dough-yeast": {
    "materialThermal": {
      "property": "Starch Retrogradation & Amylopectin Recrystallization",
      "threshold": "Retrogradation Peak Rate at 36°F–40°F (2°C–4.4°C)",
      "details": "Gelatinized wheat starch recrystalizes into rigid amylopectin matrices 6x faster at 40°F than at room temp, causing severe premature staling."
    },
    "safetyStandard": {
      "organization": "USDA ARS / AIB",
      "standard": "AIB International Bakery Science Guidelines",
      "citation": "Commercial bread should be kept at room temperature (68°F–72°F) or frozen at 0°F, not stored in domestic refrigerators."
    },
    "applianceSpecs": {
      "parameter": "Freezer vs. Refrigerator Storage",
      "guideline": "Never store fresh bread in the refrigerator; freeze slices at 0°F to halt staling without inducing crystallization."
    }
  },
  "active-sourdough-starter": {
    "materialThermal": {
      "property": "Refrigeration Thermal Threshold",
      "threshold": "Cold Holding Limit <=40°F (4.4°C); Freezing Damage <32°F (0°C)",
      "details": "Maintaining internal core temperature below 40°F suppresses psychrotrophic bacterial replication and slows enzymatic cellular breakdown."
    },
    "safetyStandard": {
      "organization": "FDA / USDA",
      "standard": "FDA Food Code 2022 § 3-501.16 / USDA Cold Storage Guidelines",
      "citation": "Perishable foods must be held continuously at or below 40°F to minimize foodborne illness risks."
    },
    "applianceSpecs": {
      "parameter": "Interior Shelf Temperature Maintenance",
      "guideline": "Store in airtight containers on main refrigerator shelves (34°F–38°F) for optimal quality and freshness."
    }
  },
  "refrigerated-crescent-rolls-can": {
    "materialThermal": {
      "property": "Refrigeration Thermal Threshold",
      "threshold": "Cold Holding Limit <=40°F (4.4°C); Freezing Damage <32°F (0°C)",
      "details": "Maintaining internal core temperature below 40°F suppresses psychrotrophic bacterial replication and slows enzymatic cellular breakdown."
    },
    "safetyStandard": {
      "organization": "FDA / USDA",
      "standard": "FDA Food Code 2022 § 3-501.16 / USDA Cold Storage Guidelines",
      "citation": "Perishable foods must be held continuously at or below 40°F to minimize foodborne illness risks."
    },
    "applianceSpecs": {
      "parameter": "Interior Shelf Temperature Maintenance",
      "guideline": "Store in airtight containers on main refrigerator shelves (34°F–38°F) for optimal quality and freshness."
    }
  },
  "canned-biscuit-dough": {
    "materialThermal": {
      "property": "Low Water Activity & Acidic Equilibrium Preservation",
      "threshold": "Acid Equilibrium (pH <4.0); Water Activity aw <0.85",
      "details": "Commercial acidic condiments resist bacterial pathogens; refrigeration preserves delicate flavor volatiles and prevents surface mold."
    },
    "safetyStandard": {
      "organization": "FDA",
      "standard": "21 CFR Part 114 (Acidified Foods) / FDA Food Code",
      "citation": "Commercial shelf-stable condiments must be refrigerated after opening to preserve organoleptic quality for 1–6 months."
    },
    "applianceSpecs": {
      "parameter": "Door Shelf Temperature Tolerance",
      "guideline": "Condiments tolerate minor temperature fluctuations (38°F–42°F) and belong in the refrigerator door shelves."
    }
  },
  "fresh-pizza-dough-ball": {
    "materialThermal": {
      "property": "Spore Germination & Microbial Danger Zone",
      "threshold": "Danger Zone 40°F–140°F (4.4°C–60°C); Clostridium perfringens growth",
      "details": "Dense stews, soups, and casseroles retain internal thermal core heat; rapid chilling below 40°F halts bacterial multiplication."
    },
    "safetyStandard": {
      "organization": "USDA FSIS / FDA",
      "standard": "FDA Food Code 2022 § 3-501.14 (Cooling Specifications)",
      "citation": "Cool cooked TCS foods to 70°F within 2 hours, and to <=41°F within an additional 4 hours; store for maximum 3–4 days."
    },
    "applianceSpecs": {
      "parameter": "Rapid Heat Dissipation Protocol",
      "guideline": "Divide large batches into shallow pans; avoid stacking hot containers to allow convective airflow to cool foods rapidly."
    }
  },
  "cookie-dough-commercial-tub": {
    "materialThermal": {
      "property": "Refrigeration Thermal Threshold",
      "threshold": "Cold Holding Limit <=40°F (4.4°C); Freezing Damage <32°F (0°C)",
      "details": "Maintaining internal core temperature below 40°F suppresses psychrotrophic bacterial replication and slows enzymatic cellular breakdown."
    },
    "safetyStandard": {
      "organization": "FDA / USDA",
      "standard": "FDA Food Code 2022 § 3-501.16 / USDA Cold Storage Guidelines",
      "citation": "Perishable foods must be held continuously at or below 40°F to minimize foodborne illness risks."
    },
    "applianceSpecs": {
      "parameter": "Interior Shelf Temperature Maintenance",
      "guideline": "Store in airtight containers on main refrigerator shelves (34°F–38°F) for optimal quality and freshness."
    }
  },
  "homemade-cookie-dough": {
    "materialThermal": {
      "property": "Refrigeration Thermal Threshold",
      "threshold": "Cold Holding Limit <=40°F (4.4°C); Freezing Damage <32°F (0°C)",
      "details": "Maintaining internal core temperature below 40°F suppresses psychrotrophic bacterial replication and slows enzymatic cellular breakdown."
    },
    "safetyStandard": {
      "organization": "FDA / USDA",
      "standard": "FDA Food Code 2022 § 3-501.16 / USDA Cold Storage Guidelines",
      "citation": "Perishable foods must be held continuously at or below 40°F to minimize foodborne illness risks."
    },
    "applianceSpecs": {
      "parameter": "Interior Shelf Temperature Maintenance",
      "guideline": "Store in airtight containers on main refrigerator shelves (34°F–38°F) for optimal quality and freshness."
    }
  },
  "pie-crust-unbaked-pastry": {
    "materialThermal": {
      "property": "Refrigeration Thermal Threshold",
      "threshold": "Cold Holding Limit <=40°F (4.4°C); Freezing Damage <32°F (0°C)",
      "details": "Maintaining internal core temperature below 40°F suppresses psychrotrophic bacterial replication and slows enzymatic cellular breakdown."
    },
    "safetyStandard": {
      "organization": "FDA / USDA",
      "standard": "FDA Food Code 2022 § 3-501.16 / USDA Cold Storage Guidelines",
      "citation": "Perishable foods must be held continuously at or below 40°F to minimize foodborne illness risks."
    },
    "applianceSpecs": {
      "parameter": "Interior Shelf Temperature Maintenance",
      "guideline": "Store in airtight containers on main refrigerator shelves (34°F–38°F) for optimal quality and freshness."
    }
  },
  "fresh-puff-pastry-sheet": {
    "materialThermal": {
      "property": "Refrigeration Thermal Threshold",
      "threshold": "Cold Holding Limit <=40°F (4.4°C); Freezing Damage <32°F (0°C)",
      "details": "Maintaining internal core temperature below 40°F suppresses psychrotrophic bacterial replication and slows enzymatic cellular breakdown."
    },
    "safetyStandard": {
      "organization": "FDA / USDA",
      "standard": "FDA Food Code 2022 § 3-501.16 / USDA Cold Storage Guidelines",
      "citation": "Perishable foods must be held continuously at or below 40°F to minimize foodborne illness risks."
    },
    "applianceSpecs": {
      "parameter": "Interior Shelf Temperature Maintenance",
      "guideline": "Store in airtight containers on main refrigerator shelves (34°F–38°F) for optimal quality and freshness."
    }
  },
  "pancake-waffle-batter": {
    "materialThermal": {
      "property": "Refrigeration Thermal Threshold",
      "threshold": "Cold Holding Limit <=40°F (4.4°C); Freezing Damage <32°F (0°C)",
      "details": "Maintaining internal core temperature below 40°F suppresses psychrotrophic bacterial replication and slows enzymatic cellular breakdown."
    },
    "safetyStandard": {
      "organization": "FDA / USDA",
      "standard": "FDA Food Code 2022 § 3-501.16 / USDA Cold Storage Guidelines",
      "citation": "Perishable foods must be held continuously at or below 40°F to minimize foodborne illness risks."
    },
    "applianceSpecs": {
      "parameter": "Interior Shelf Temperature Maintenance",
      "guideline": "Store in airtight containers on main refrigerator shelves (34°F–38°F) for optimal quality and freshness."
    }
  },
  "fresh-pasta-sheets-raw": {
    "materialThermal": {
      "property": "Bacillus cereus Spore Germination & Emetic Toxin",
      "threshold": "Spore Germination 50°F–122°F (10°C–50°C); Toxin Heat Stability >250°F",
      "details": "Bacillus cereus endospores survive boiling. If starchy grains cool slowly, spores germinate and produce heat-stable cereulide enterotoxins."
    },
    "safetyStandard": {
      "organization": "FDA",
      "standard": "FDA Food Code 2022 § 3-501.14 & § 3-501.16",
      "citation": "Cooked grains must cool from 135°F to 70°F in 2 hours, and reach <=41°F in 4 additional hours; discard after 3–4 days."
    },
    "applianceSpecs": {
      "parameter": "Shallow Container Rapid Convective Cooling",
      "guideline": "Divide hot cooked rice into shallow containers (<=2 inches depth) on an open middle shelf (34°F–37°F) for rapid core chilling."
    }
  },
  "corn-flour-tortillas-fresh": {
    "materialThermal": {
      "property": "Refrigeration Thermal Threshold",
      "threshold": "Cold Holding Limit <=40°F (4.4°C); Freezing Damage <32°F (0°C)",
      "details": "Maintaining internal core temperature below 40°F suppresses psychrotrophic bacterial replication and slows enzymatic cellular breakdown."
    },
    "safetyStandard": {
      "organization": "FDA / USDA",
      "standard": "FDA Food Code 2022 § 3-501.16 / USDA Cold Storage Guidelines",
      "citation": "Perishable foods must be held continuously at or below 40°F to minimize foodborne illness risks."
    },
    "applianceSpecs": {
      "parameter": "Interior Shelf Temperature Maintenance",
      "guideline": "Store in airtight containers on main refrigerator shelves (34°F–38°F) for optimal quality and freshness."
    }
  },
  "custard-cream-pie": {
    "materialThermal": {
      "property": "Psychrotrophic Proteolysis & Lactic Acid Dormancy",
      "threshold": "Pseudomonas bacterial multiplication >40°F (4.4°C); Milk Freezing ~31°F (-0.5°C)",
      "details": "Pasteurized milk contains psychrotolerant spore-formers (Bacillus cereus) that replicate rapidly above 40°F, causing curdling and sour off-flavors."
    },
    "safetyStandard": {
      "organization": "FDA / USPHS",
      "standard": "Grade 'A' Pasteurized Milk Ordinance (PMO) 2019 Item 17p",
      "citation": "Grade A milk must be maintained continuously at 40°F (4.4°C) or lower from pasteurization to consumption."
    },
    "applianceSpecs": {
      "parameter": "Interior Main Shelf Placement (Avoid Door Bins)",
      "guideline": "Always store milk on the back of an interior shelf (34°F–37°F); door bins fluctuate up to 45°F during daily openings, cutting shelf life in half."
    }
  },
  "cheesecake-whole-sliced": {
    "materialThermal": {
      "property": "Psychrotrophic Proteolysis & Lactic Acid Dormancy",
      "threshold": "Pseudomonas bacterial multiplication >40°F (4.4°C); Milk Freezing ~31°F (-0.5°C)",
      "details": "Pasteurized milk contains psychrotolerant spore-formers (Bacillus cereus) that replicate rapidly above 40°F, causing curdling and sour off-flavors."
    },
    "safetyStandard": {
      "organization": "FDA / USPHS",
      "standard": "Grade 'A' Pasteurized Milk Ordinance (PMO) 2019 Item 17p",
      "citation": "Grade A milk must be maintained continuously at 40°F (4.4°C) or lower from pasteurization to consumption."
    },
    "applianceSpecs": {
      "parameter": "Interior Main Shelf Placement (Avoid Door Bins)",
      "guideline": "Always store milk on the back of an interior shelf (34°F–37°F); door bins fluctuate up to 45°F during daily openings, cutting shelf life in half."
    }
  },
  "tiramisu-mascarpone": {
    "materialThermal": {
      "property": "Refrigeration Thermal Threshold",
      "threshold": "Cold Holding Limit <=40°F (4.4°C); Freezing Damage <32°F (0°C)",
      "details": "Maintaining internal core temperature below 40°F suppresses psychrotrophic bacterial replication and slows enzymatic cellular breakdown."
    },
    "safetyStandard": {
      "organization": "FDA / USDA",
      "standard": "FDA Food Code 2022 § 3-501.16 / USDA Cold Storage Guidelines",
      "citation": "Perishable foods must be held continuously at or below 40°F to minimize foodborne illness risks."
    },
    "applianceSpecs": {
      "parameter": "Interior Shelf Temperature Maintenance",
      "guideline": "Store in airtight containers on main refrigerator shelves (34°F–38°F) for optimal quality and freshness."
    }
  },
  "fresh-yeast-cake-block": {
    "materialThermal": {
      "property": "Refrigeration Thermal Threshold",
      "threshold": "Cold Holding Limit <=40°F (4.4°C); Freezing Damage <32°F (0°C)",
      "details": "Maintaining internal core temperature below 40°F suppresses psychrotrophic bacterial replication and slows enzymatic cellular breakdown."
    },
    "safetyStandard": {
      "organization": "FDA / USDA",
      "standard": "FDA Food Code 2022 § 3-501.16 / USDA Cold Storage Guidelines",
      "citation": "Perishable foods must be held continuously at or below 40°F to minimize foodborne illness risks."
    },
    "applianceSpecs": {
      "parameter": "Interior Shelf Temperature Maintenance",
      "guideline": "Store in airtight containers on main refrigerator shelves (34°F–38°F) for optimal quality and freshness."
    }
  },
  "buttercream-frosting-tub": {
    "materialThermal": {
      "property": "Bovine Butterfat Solidification & Hydrolytic Rancidity",
      "threshold": "Butterfat Softening 60°F–65°F; Bacterial Dormancy <=40°F (4.4°C)",
      "details": "Butter contains 80% lipid emulsion with low water activity; refrigeration prevents oxygen- and light-induced rancidity of butyric fatty acids."
    },
    "safetyStandard": {
      "organization": "USDA / FDA",
      "standard": "FDA Food Code 2022 § 3-501.16",
      "citation": "Grade AA butter is safe at room temperature for short periods, but 35°F–40°F refrigeration extends quality up to 1–3 months."
    },
    "applianceSpecs": {
      "parameter": "Dairy Compartment Temperature Buffer",
      "guideline": "Butter can be kept in the covered dairy door bin (38°F–42°F) for spreadable consistency while preventing off-flavor absorption."
    }
  },
  "fresh-fruit-tart": {
    "materialThermal": {
      "property": "Refrigeration Thermal Threshold",
      "threshold": "Cold Holding Limit <=40°F (4.4°C); Freezing Damage <32°F (0°C)",
      "details": "Maintaining internal core temperature below 40°F suppresses psychrotrophic bacterial replication and slows enzymatic cellular breakdown."
    },
    "safetyStandard": {
      "organization": "FDA / USDA",
      "standard": "FDA Food Code 2022 § 3-501.16 / USDA Cold Storage Guidelines",
      "citation": "Perishable foods must be held continuously at or below 40°F to minimize foodborne illness risks."
    },
    "applianceSpecs": {
      "parameter": "Interior Shelf Temperature Maintenance",
      "guideline": "Store in airtight containers on main refrigerator shelves (34°F–38°F) for optimal quality and freshness."
    }
  },
  "dill-pickles-opened-jar": {
    "materialThermal": {
      "property": "Low Water Activity & Acidic Equilibrium Preservation",
      "threshold": "Acid Equilibrium (pH <4.0); Water Activity aw <0.85",
      "details": "Commercial acidic condiments resist bacterial pathogens; refrigeration preserves delicate flavor volatiles and prevents surface mold."
    },
    "safetyStandard": {
      "organization": "FDA",
      "standard": "21 CFR Part 114 (Acidified Foods) / FDA Food Code",
      "citation": "Commercial shelf-stable condiments must be refrigerated after opening to preserve organoleptic quality for 1–6 months."
    },
    "applianceSpecs": {
      "parameter": "Door Shelf Temperature Tolerance",
      "guideline": "Condiments tolerate minor temperature fluctuations (38°F–42°F) and belong in the refrigerator door shelves."
    }
  },
  "sauerkraut-raw-fermented": {
    "materialThermal": {
      "property": "Refrigeration Thermal Threshold",
      "threshold": "Cold Holding Limit <=40°F (4.4°C); Freezing Damage <32°F (0°C)",
      "details": "Maintaining internal core temperature below 40°F suppresses psychrotrophic bacterial replication and slows enzymatic cellular breakdown."
    },
    "safetyStandard": {
      "organization": "FDA / USDA",
      "standard": "FDA Food Code 2022 § 3-501.16 / USDA Cold Storage Guidelines",
      "citation": "Perishable foods must be held continuously at or below 40°F to minimize foodborne illness risks."
    },
    "applianceSpecs": {
      "parameter": "Interior Shelf Temperature Maintenance",
      "guideline": "Store in airtight containers on main refrigerator shelves (34°F–38°F) for optimal quality and freshness."
    }
  },
  "kimchi-fermented-jar": {
    "materialThermal": {
      "property": "Low Water Activity & Acidic Equilibrium Preservation",
      "threshold": "Acid Equilibrium (pH <4.0); Water Activity aw <0.85",
      "details": "Commercial acidic condiments resist bacterial pathogens; refrigeration preserves delicate flavor volatiles and prevents surface mold."
    },
    "safetyStandard": {
      "organization": "FDA",
      "standard": "21 CFR Part 114 (Acidified Foods) / FDA Food Code",
      "citation": "Commercial shelf-stable condiments must be refrigerated after opening to preserve organoleptic quality for 1–6 months."
    },
    "applianceSpecs": {
      "parameter": "Door Shelf Temperature Tolerance",
      "guideline": "Condiments tolerate minor temperature fluctuations (38°F–42°F) and belong in the refrigerator door shelves."
    }
  },
  "pickled-jalapenos-jar": {
    "materialThermal": {
      "property": "Low Water Activity & Acidic Equilibrium Preservation",
      "threshold": "Acid Equilibrium (pH <4.0); Water Activity aw <0.85",
      "details": "Commercial acidic condiments resist bacterial pathogens; refrigeration preserves delicate flavor volatiles and prevents surface mold."
    },
    "safetyStandard": {
      "organization": "FDA",
      "standard": "21 CFR Part 114 (Acidified Foods) / FDA Food Code",
      "citation": "Commercial shelf-stable condiments must be refrigerated after opening to preserve organoleptic quality for 1–6 months."
    },
    "applianceSpecs": {
      "parameter": "Door Shelf Temperature Tolerance",
      "guideline": "Condiments tolerate minor temperature fluctuations (38°F–42°F) and belong in the refrigerator door shelves."
    }
  },
  "kalamata-olives-in-brine": {
    "materialThermal": {
      "property": "Refrigeration Thermal Threshold",
      "threshold": "Cold Holding Limit <=40°F (4.4°C); Freezing Damage <32°F (0°C)",
      "details": "Maintaining internal core temperature below 40°F suppresses psychrotrophic bacterial replication and slows enzymatic cellular breakdown."
    },
    "safetyStandard": {
      "organization": "FDA / USDA",
      "standard": "FDA Food Code 2022 § 3-501.16 / USDA Cold Storage Guidelines",
      "citation": "Perishable foods must be held continuously at or below 40°F to minimize foodborne illness risks."
    },
    "applianceSpecs": {
      "parameter": "Interior Shelf Temperature Maintenance",
      "guideline": "Store in airtight containers on main refrigerator shelves (34°F–38°F) for optimal quality and freshness."
    }
  },
  "green-olives-stuffed": {
    "materialThermal": {
      "property": "Refrigeration Thermal Threshold",
      "threshold": "Cold Holding Limit <=40°F (4.4°C); Freezing Damage <32°F (0°C)",
      "details": "Maintaining internal core temperature below 40°F suppresses psychrotrophic bacterial replication and slows enzymatic cellular breakdown."
    },
    "safetyStandard": {
      "organization": "FDA / USDA",
      "standard": "FDA Food Code 2022 § 3-501.16 / USDA Cold Storage Guidelines",
      "citation": "Perishable foods must be held continuously at or below 40°F to minimize foodborne illness risks."
    },
    "applianceSpecs": {
      "parameter": "Interior Shelf Temperature Maintenance",
      "guideline": "Store in airtight containers on main refrigerator shelves (34°F–38°F) for optimal quality and freshness."
    }
  },
  "capers-in-brine-opened": {
    "materialThermal": {
      "property": "Refrigeration Thermal Threshold",
      "threshold": "Cold Holding Limit <=40°F (4.4°C); Freezing Damage <32°F (0°C)",
      "details": "Maintaining internal core temperature below 40°F suppresses psychrotrophic bacterial replication and slows enzymatic cellular breakdown."
    },
    "safetyStandard": {
      "organization": "FDA / USDA",
      "standard": "FDA Food Code 2022 § 3-501.16 / USDA Cold Storage Guidelines",
      "citation": "Perishable foods must be held continuously at or below 40°F to minimize foodborne illness risks."
    },
    "applianceSpecs": {
      "parameter": "Interior Shelf Temperature Maintenance",
      "guideline": "Store in airtight containers on main refrigerator shelves (34°F–38°F) for optimal quality and freshness."
    }
  },
  "sun-dried-tomatoes-in-oil": {
    "materialThermal": {
      "property": "Volatile Flavor Compound Degradation & Chilling Injury",
      "threshold": "Enzymatic Inactivation <50°F (10°C); Mealiness Induction <40°F",
      "details": "Refrigerating fresh tomatoes permanently suppresses (Z)-3-hexenal aroma enzymes and dissolves cell pectin, resulting in a mealy, watery texture."
    },
    "safetyStandard": {
      "organization": "USDA ARS",
      "standard": "Agriculture Handbook No. 66 (Tomato Storage)",
      "citation": "Fresh tomatoes should be held stem-down at 55°F–65°F to preserve antioxidant lycopene and volatile ester synthesis."
    },
    "applianceSpecs": {
      "parameter": "Countertop Storage vs. Cooked Leftover Chilling",
      "guideline": "Store whole raw tomatoes on the kitchen counter away from sunlight; refrigerate only cut slices or cooked sauces at 35°F–38°F."
    }
  },
  "roasted-red-peppers-jar": {
    "materialThermal": {
      "property": "Chlorophyll Degradation & Transpiration Wilting",
      "threshold": "Optimal Metabolic Slowdown 34°F–38°F (1.1°C–3.3°C); Wilting >40°F",
      "details": "Leafy greens and brassicas transpire water vapor rapidly; lower temperatures suppress enzymatic senescence and vitamin C degradation."
    },
    "safetyStandard": {
      "organization": "FDA / USDA",
      "standard": "FDA Food Code 2022 § 3-501.16(B)",
      "citation": "Cut leafy greens are TCS foods requiring continuous refrigeration at or below 41°F."
    },
    "applianceSpecs": {
      "parameter": "High-Humidity Crisper / Paper Towel Liner",
      "guideline": "Store unwashed in the high-humidity crisper drawer (34°F–37°F) with a paper towel to absorb excess surface condensation."
    }
  },
  "artichoke-hearts-canned-opened": {
    "materialThermal": {
      "property": "Low Water Activity & Acidic Equilibrium Preservation",
      "threshold": "Acid Equilibrium (pH <4.0); Water Activity aw <0.85",
      "details": "Commercial acidic condiments resist bacterial pathogens; refrigeration preserves delicate flavor volatiles and prevents surface mold."
    },
    "safetyStandard": {
      "organization": "FDA",
      "standard": "21 CFR Part 114 (Acidified Foods) / FDA Food Code",
      "citation": "Commercial shelf-stable condiments must be refrigerated after opening to preserve organoleptic quality for 1–6 months."
    },
    "applianceSpecs": {
      "parameter": "Door Shelf Temperature Tolerance",
      "guideline": "Condiments tolerate minor temperature fluctuations (38°F–42°F) and belong in the refrigerator door shelves."
    }
  },
  "marinated-mushrooms-jar": {
    "materialThermal": {
      "property": "Chitin Hyphae Moisture Transpiration & Slime",
      "threshold": "Optimal Metabolic Dormancy 34°F–36°F (1.1°C–2.2°C); Slime >40°F",
      "details": "Mushrooms are 90% water with no protective cuticle; plastic wrap traps respirated moisture, accelerating bacterial rot (Pseudomonas tolaasii)."
    },
    "safetyStandard": {
      "organization": "USDA ARS",
      "standard": "Mushroom Storage and Postharvest Quality Guide",
      "citation": "Fresh cultivated mushrooms should be held at 34°F with 90% RH in breathable packaging."
    },
    "applianceSpecs": {
      "parameter": "Breathable Paper Bag on Middle Shelf",
      "guideline": "Store in a brown paper bag on a middle shelf (34°F–37°F); never store in an airtight plastic container or high-humidity crisper."
    }
  },
  "anchovy-fillets-in-oil-opened": {
    "materialThermal": {
      "property": "Trimethylamine Oxide (TMAO) Reduction & Bacterial Cleavage",
      "threshold": "Psychrotrophic Proteolysis >32°F (0°C); Strict Hold <=38°F (3.3°C)",
      "details": "Marine psychrotrophic bacteria rapidly break down TMAO into pungent trimethylamine above 32°F, degrading delicate fish proteins."
    },
    "safetyStandard": {
      "organization": "FDA",
      "standard": "FDA Food Code 2022 § 3-501.16 & Fish Hazards Guidance",
      "citation": "Raw seafood must be held at or below 38°F (preferably 32°F–34°F on ice) and used within 1–2 days."
    },
    "applianceSpecs": {
      "parameter": "Coldest Refrigerator Zone / Ice Bath",
      "guideline": "Store in the coldest rear section of the bottom shelf at 32°F–34°F, ideally resting on crushed draining ice."
    }
  },
  "sardines-canned-opened": {
    "materialThermal": {
      "property": "Low Water Activity & Acidic Equilibrium Preservation",
      "threshold": "Acid Equilibrium (pH <4.0); Water Activity aw <0.85",
      "details": "Commercial acidic condiments resist bacterial pathogens; refrigeration preserves delicate flavor volatiles and prevents surface mold."
    },
    "safetyStandard": {
      "organization": "FDA",
      "standard": "21 CFR Part 114 (Acidified Foods) / FDA Food Code",
      "citation": "Commercial shelf-stable condiments must be refrigerated after opening to preserve organoleptic quality for 1–6 months."
    },
    "applianceSpecs": {
      "parameter": "Door Shelf Temperature Tolerance",
      "guideline": "Condiments tolerate minor temperature fluctuations (38°F–42°F) and belong in the refrigerator door shelves."
    }
  },
  "miso-paste-fermented-tub": {
    "materialThermal": {
      "property": "Refrigeration Thermal Threshold",
      "threshold": "Cold Holding Limit <=40°F (4.4°C); Freezing Damage <32°F (0°C)",
      "details": "Maintaining internal core temperature below 40°F suppresses psychrotrophic bacterial replication and slows enzymatic cellular breakdown."
    },
    "safetyStandard": {
      "organization": "FDA / USDA",
      "standard": "FDA Food Code 2022 § 3-501.16 / USDA Cold Storage Guidelines",
      "citation": "Perishable foods must be held continuously at or below 40°F to minimize foodborne illness risks."
    },
    "applianceSpecs": {
      "parameter": "Interior Shelf Temperature Maintenance",
      "guideline": "Store in airtight containers on main refrigerator shelves (34°F–38°F) for optimal quality and freshness."
    }
  },
  "gochujang-korean-chili-paste": {
    "materialThermal": {
      "property": "Spore Germination & Microbial Danger Zone",
      "threshold": "Danger Zone 40°F–140°F (4.4°C–60°C); Clostridium perfringens growth",
      "details": "Dense stews, soups, and casseroles retain internal thermal core heat; rapid chilling below 40°F halts bacterial multiplication."
    },
    "safetyStandard": {
      "organization": "USDA FSIS / FDA",
      "standard": "FDA Food Code 2022 § 3-501.14 (Cooling Specifications)",
      "citation": "Cool cooked TCS foods to 70°F within 2 hours, and to <=41°F within an additional 4 hours; store for maximum 3–4 days."
    },
    "applianceSpecs": {
      "parameter": "Rapid Heat Dissipation Protocol",
      "guideline": "Divide large batches into shallow pans; avoid stacking hot containers to allow convective airflow to cool foods rapidly."
    }
  },
  "tahini-sesame-paste-opened": {
    "materialThermal": {
      "property": "Refrigeration Thermal Threshold",
      "threshold": "Cold Holding Limit <=40°F (4.4°C); Freezing Damage <32°F (0°C)",
      "details": "Maintaining internal core temperature below 40°F suppresses psychrotrophic bacterial replication and slows enzymatic cellular breakdown."
    },
    "safetyStandard": {
      "organization": "FDA / USDA",
      "standard": "FDA Food Code 2022 § 3-501.16 / USDA Cold Storage Guidelines",
      "citation": "Perishable foods must be held continuously at or below 40°F to minimize foodborne illness risks."
    },
    "applianceSpecs": {
      "parameter": "Interior Shelf Temperature Maintenance",
      "guideline": "Store in airtight containers on main refrigerator shelves (34°F–38°F) for optimal quality and freshness."
    }
  },
  "curry-paste-thai-opened": {
    "materialThermal": {
      "property": "Refrigeration Thermal Threshold",
      "threshold": "Cold Holding Limit <=40°F (4.4°C); Freezing Damage <32°F (0°C)",
      "details": "Maintaining internal core temperature below 40°F suppresses psychrotrophic bacterial replication and slows enzymatic cellular breakdown."
    },
    "safetyStandard": {
      "organization": "FDA / USDA",
      "standard": "FDA Food Code 2022 § 3-501.16 / USDA Cold Storage Guidelines",
      "citation": "Perishable foods must be held continuously at or below 40°F to minimize foodborne illness risks."
    },
    "applianceSpecs": {
      "parameter": "Interior Shelf Temperature Maintenance",
      "guideline": "Store in airtight containers on main refrigerator shelves (34°F–38°F) for optimal quality and freshness."
    }
  },
  "canned-pumpkin-puree-opened": {
    "materialThermal": {
      "property": "Low Water Activity & Acidic Equilibrium Preservation",
      "threshold": "Acid Equilibrium (pH <4.0); Water Activity aw <0.85",
      "details": "Commercial acidic condiments resist bacterial pathogens; refrigeration preserves delicate flavor volatiles and prevents surface mold."
    },
    "safetyStandard": {
      "organization": "FDA",
      "standard": "21 CFR Part 114 (Acidified Foods) / FDA Food Code",
      "citation": "Commercial shelf-stable condiments must be refrigerated after opening to preserve organoleptic quality for 1–6 months."
    },
    "applianceSpecs": {
      "parameter": "Door Shelf Temperature Tolerance",
      "guideline": "Condiments tolerate minor temperature fluctuations (38°F–42°F) and belong in the refrigerator door shelves."
    }
  },
  "canned-tomato-paste-opened": {
    "materialThermal": {
      "property": "Volatile Flavor Compound Degradation & Chilling Injury",
      "threshold": "Enzymatic Inactivation <50°F (10°C); Mealiness Induction <40°F",
      "details": "Refrigerating fresh tomatoes permanently suppresses (Z)-3-hexenal aroma enzymes and dissolves cell pectin, resulting in a mealy, watery texture."
    },
    "safetyStandard": {
      "organization": "USDA ARS",
      "standard": "Agriculture Handbook No. 66 (Tomato Storage)",
      "citation": "Fresh tomatoes should be held stem-down at 55°F–65°F to preserve antioxidant lycopene and volatile ester synthesis."
    },
    "applianceSpecs": {
      "parameter": "Countertop Storage vs. Cooked Leftover Chilling",
      "guideline": "Store whole raw tomatoes on the kitchen counter away from sunlight; refrigerate only cut slices or cooked sauces at 35°F–38°F."
    }
  },
  "opened-condensed-milk-can": {
    "materialThermal": {
      "property": "Psychrotrophic Proteolysis & Lactic Acid Dormancy",
      "threshold": "Pseudomonas bacterial multiplication >40°F (4.4°C); Milk Freezing ~31°F (-0.5°C)",
      "details": "Pasteurized milk contains psychrotolerant spore-formers (Bacillus cereus) that replicate rapidly above 40°F, causing curdling and sour off-flavors."
    },
    "safetyStandard": {
      "organization": "FDA / USPHS",
      "standard": "Grade 'A' Pasteurized Milk Ordinance (PMO) 2019 Item 17p",
      "citation": "Grade A milk must be maintained continuously at 40°F (4.4°C) or lower from pasteurization to consumption."
    },
    "applianceSpecs": {
      "parameter": "Interior Main Shelf Placement (Avoid Door Bins)",
      "guideline": "Always store milk on the back of an interior shelf (34°F–37°F); door bins fluctuate up to 45°F during daily openings, cutting shelf life in half."
    }
  },
  "opened-evaporated-milk-can": {
    "materialThermal": {
      "property": "Psychrotrophic Proteolysis & Lactic Acid Dormancy",
      "threshold": "Pseudomonas bacterial multiplication >40°F (4.4°C); Milk Freezing ~31°F (-0.5°C)",
      "details": "Pasteurized milk contains psychrotolerant spore-formers (Bacillus cereus) that replicate rapidly above 40°F, causing curdling and sour off-flavors."
    },
    "safetyStandard": {
      "organization": "FDA / USPHS",
      "standard": "Grade 'A' Pasteurized Milk Ordinance (PMO) 2019 Item 17p",
      "citation": "Grade A milk must be maintained continuously at 40°F (4.4°C) or lower from pasteurization to consumption."
    },
    "applianceSpecs": {
      "parameter": "Interior Main Shelf Placement (Avoid Door Bins)",
      "guideline": "Always store milk on the back of an interior shelf (34°F–37°F); door bins fluctuate up to 45°F during daily openings, cutting shelf life in half."
    }
  },
  "potatoes": {
    "materialThermal": {
      "property": "Cold-Induced Sweetening (CIS) & Acrylamide Risk",
      "threshold": "CIS Enzymatic Conversion occurs <45°F (7.2°C); Sprouting >60°F",
      "details": "Refrigerating raw potatoes converts tuber starch into reducing sugars (glucose/fructose), which form carcinogenic acrylamide when later baked or fried."
    },
    "safetyStandard": {
      "organization": "FDA / USDA ARS",
      "standard": "FDA Acrylamide Guidance / USDA ARS Storage Standards",
      "citation": "Raw potatoes should be stored in a cool, dark pantry at 50°F–55°F, never in standard domestic refrigerators."
    },
    "applianceSpecs": {
      "parameter": "Pantry Dark Storage vs. Refrigerator Humidity",
      "guideline": "Domestic refrigerator humidity (85%–90%) triggers solanine greening and rot; store unwashed in a well-ventilated paper bag in a cool pantry."
    }
  },
  "bread": {
    "materialThermal": {
      "property": "Starch Retrogradation & Amylopectin Recrystallization",
      "threshold": "Retrogradation Peak Rate at 36°F–40°F (2°C–4.4°C)",
      "details": "Gelatinized wheat starch recrystalizes into rigid amylopectin matrices 6x faster at 40°F than at room temp, causing severe premature staling."
    },
    "safetyStandard": {
      "organization": "USDA ARS / AIB",
      "standard": "AIB International Bakery Science Guidelines",
      "citation": "Commercial bread should be kept at room temperature (68°F–72°F) or frozen at 0°F, not stored in domestic refrigerators."
    },
    "applianceSpecs": {
      "parameter": "Freezer vs. Refrigerator Storage",
      "guideline": "Never store fresh bread in the refrigerator; freeze slices at 0°F to halt staling without inducing crystallization."
    }
  },
  "onions": {
    "materialThermal": {
      "property": "Allium Tuber Moisture Absorption & Dormancy Breakdown",
      "threshold": "Cold Humidity triggers sprouting <45°F; Mold growth at RH >75%",
      "details": "Whole dry onions and garlic absorb refrigerator humidity through papery skins, softening cell walls and sprouting bitter green shoots."
    },
    "safetyStandard": {
      "organization": "USDA ARS",
      "standard": "Agriculture Handbook No. 66",
      "citation": "Whole alliums require dry, cool, well-ventilated storage (45°F–55°F, 65%–70% RH); refrigerate only once cut or peeled."
    },
    "applianceSpecs": {
      "parameter": "Cut vs. Whole Allium Storage Protocol",
      "guideline": "Refrigerate only peeled or diced alliums in airtight glass containers at 35°F–38°F (use within 7 days); keep whole bulbs in a dry basket."
    }
  },
  "tomatoes": {
    "materialThermal": {
      "property": "Volatile Flavor Compound Degradation & Chilling Injury",
      "threshold": "Enzymatic Inactivation <50°F (10°C); Mealiness Induction <40°F",
      "details": "Refrigerating fresh tomatoes permanently suppresses (Z)-3-hexenal aroma enzymes and dissolves cell pectin, resulting in a mealy, watery texture."
    },
    "safetyStandard": {
      "organization": "USDA ARS",
      "standard": "Agriculture Handbook No. 66 (Tomato Storage)",
      "citation": "Fresh tomatoes should be held stem-down at 55°F–65°F to preserve antioxidant lycopene and volatile ester synthesis."
    },
    "applianceSpecs": {
      "parameter": "Countertop Storage vs. Cooked Leftover Chilling",
      "guideline": "Store whole raw tomatoes on the kitchen counter away from sunlight; refrigerate only cut slices or cooked sauces at 35°F–38°F."
    }
  },
  "chicken-breast": {
    "materialThermal": {
      "property": "Pathogen Proliferation & Freezing Point Depression",
      "threshold": "Bacterial proliferation >40°F (4.4°C); Tissue Freezing Point ~28°F (-2.2°C)",
      "details": "Raw avian muscle tissue supports rapid replication of Salmonella enterica and Campylobacter jejuni above 40°F, doubling every 30 minutes at 50°F."
    },
    "safetyStandard": {
      "organization": "USDA FSIS",
      "standard": "9 CFR § 381.150 / FSIS Directives",
      "citation": "Raw poultry must be held at or below 40°F and cooked or frozen within 1–2 days of purchase."
    },
    "applianceSpecs": {
      "parameter": "Bottom-Shelf Coldest Zone & Drip Containment",
      "guideline": "Keep on the lowest shelf (34°F–36°F) inside a rimmed tray to prevent accidental dripping onto ready-to-eat foods."
    }
  },
  "tomato": {
    "materialThermal": {
      "property": "Volatile Flavor Compound Degradation & Chilling Injury",
      "threshold": "Enzymatic Inactivation <50°F (10°C); Mealiness Induction <40°F",
      "details": "Refrigerating fresh tomatoes permanently suppresses (Z)-3-hexenal aroma enzymes and dissolves cell pectin, resulting in a mealy, watery texture."
    },
    "safetyStandard": {
      "organization": "USDA ARS",
      "standard": "Agriculture Handbook No. 66 (Tomato Storage)",
      "citation": "Fresh tomatoes should be held stem-down at 55°F–65°F to preserve antioxidant lycopene and volatile ester synthesis."
    },
    "applianceSpecs": {
      "parameter": "Countertop Storage vs. Cooked Leftover Chilling",
      "guideline": "Store whole raw tomatoes on the kitchen counter away from sunlight; refrigerate only cut slices or cooked sauces at 35°F–38°F."
    }
  },
  "garlic": {
    "materialThermal": {
      "property": "Allium Tuber Moisture Absorption & Dormancy Breakdown",
      "threshold": "Cold Humidity triggers sprouting <45°F; Mold growth at RH >75%",
      "details": "Whole dry onions and garlic absorb refrigerator humidity through papery skins, softening cell walls and sprouting bitter green shoots."
    },
    "safetyStandard": {
      "organization": "USDA ARS",
      "standard": "Agriculture Handbook No. 66",
      "citation": "Whole alliums require dry, cool, well-ventilated storage (45°F–55°F, 65%–70% RH); refrigerate only once cut or peeled."
    },
    "applianceSpecs": {
      "parameter": "Cut vs. Whole Allium Storage Protocol",
      "guideline": "Refrigerate only peeled or diced alliums in airtight glass containers at 35°F–38°F (use within 7 days); keep whole bulbs in a dry basket."
    }
  },
  "bananas": {
    "materialThermal": {
      "property": "Polyphenol Oxidase (PPO) Chilling Injury",
      "threshold": "PPO Membrane Rupture & Browning <54°F (12.2°C)",
      "details": "Banana peel cells collapse below 54°F, releasing polyphenol oxidase which oxidizes phenols into dark brown/black melanin pigments."
    },
    "safetyStandard": {
      "organization": "USDA ARS",
      "standard": "Postharvest Chilling Injury Guidelines",
      "citation": "Bananas should ripen at 60°F–68°F; ripe bananas can be chilled to slow pulp over-softening despite peel browning."
    },
    "applianceSpecs": {
      "parameter": "Warmest Refrigerator Shelf / Door Compartment",
      "guideline": "If refrigerating fully ripe bananas to halt pulp decay, store on the top door shelf (40°F–42°F) away from cold air vents."
    }
  },
  "coffee-beans": {
    "materialThermal": {
      "property": "Spore Germination & Microbial Danger Zone",
      "threshold": "Danger Zone 40°F–140°F (4.4°C–60°C); Clostridium perfringens growth",
      "details": "Dense stews, soups, and casseroles retain internal thermal core heat; rapid chilling below 40°F halts bacterial multiplication."
    },
    "safetyStandard": {
      "organization": "USDA FSIS / FDA",
      "standard": "FDA Food Code 2022 § 3-501.14 (Cooling Specifications)",
      "citation": "Cool cooked TCS foods to 70°F within 2 hours, and to <=41°F within an additional 4 hours; store for maximum 3–4 days."
    },
    "applianceSpecs": {
      "parameter": "Rapid Heat Dissipation Protocol",
      "guideline": "Divide large batches into shallow pans; avoid stacking hot containers to allow convective airflow to cool foods rapidly."
    }
  },
  "chocolate": {
    "materialThermal": {
      "property": "Moisture Condensation, Sugar Bloom & Aroma Stripping",
      "threshold": "Sugar Bloom Induction upon dew point condensation at RH >70%",
      "details": "Porous roasted coffee beans and tempered chocolate absorb refrigerator odors and moisture condensation, causing fat/sugar bloom and staling."
    },
    "safetyStandard": {
      "organization": "FDA",
      "standard": "21 CFR § 110.80 / NCA Quality Standards",
      "citation": "Store shelf-stable chocolate and dry coffee in a cool, dark, dry pantry (60°F–68°F, <50% RH)."
    },
    "applianceSpecs": {
      "parameter": "Dry Airtight Canister Protocol",
      "guideline": "Keep at stable room temperature; refrigerate only if kitchen exceeds 80°F, using vacuum-sealed glass jars."
    }
  }
};
