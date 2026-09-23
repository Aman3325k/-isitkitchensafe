// Technical Reference Specifications for How-Long items
// Grounded strictly in USDA FSIS, FDA Food Code 2022, 21 CFR, and food preservation literature.

module.exports = {
  "chicken-in-fridge": {
    "materialThermal": {
      "property": "Raw Poultry Psychrotrophic Replication Limit",
      "threshold": "Rapid Salmonella / Campylobacter Growth >40°F; Shelf Life: 1–2 Days",
      "details": "Surface moisture on raw poultry supports rapid psychrotrophic bacterial growth even at refrigerated temperatures, doubling bacterial count every 30 minutes at 50°F."
    },
    "safetyStandard": {
      "organization": "USDA FSIS",
      "standard": "FSIS Food Safety Guidelines (Poultry Storage)",
      "citation": "Raw poultry must be held at or below 40°F and prepared within 1–2 days of purchase, or frozen at 0°F for up to 9–12 months."
    },
    "applianceSpecs": {
      "parameter": "Bottom Shelf Coldest Placement (34°F–36°F)",
      "guideline": "Keep on the lowest shelf in a leak-proof container to prevent drippage onto ready-to-eat foods; cook or freeze within 48 hours."
    }
  },
  "cooked-chicken-in-fridge": {
    "materialThermal": {
      "property": "Cooked Avian Protein Microbial Lag-Phase",
      "threshold": "Listeria Monocytogenes Proliferation >40°F (4.4°C); Safe Storage 3–4 Days",
      "details": "Cooked poultry has high water activity (aw ~0.98); refrigerating below 40°F prolongs the bacterial lag phase, preventing rapid vegetative replication."
    },
    "safetyStandard": {
      "organization": "FDA / USDA FSIS",
      "standard": "FDA Food Code 2022 § 3-501.17 / FSIS Cold Storage Chart",
      "citation": "Ready-to-eat cooked poultry must be refrigerated at <=40°F for a maximum of 3–4 days, or frozen at 0°F for 2–6 months."
    },
    "applianceSpecs": {
      "parameter": "Middle Refrigerator Shelf Temperature",
      "guideline": "Store in shallow airtight containers at 35°F–38°F; divide large portions so food drops below 40°F within 2 hours."
    }
  },
  "ground-beef-in-fridge": {
    "materialThermal": {
      "property": "Comminuted Meat Aerobic Spoilage Kinetics",
      "threshold": "High Surface Area Aerobic Spoilage >40°F; Shelf Life: 1–2 Days",
      "details": "Grinding incorporates air and mixes surface pathogens throughout the meat, drastically shortening microbial lag time compared to whole muscle cuts."
    },
    "safetyStandard": {
      "organization": "USDA FSIS",
      "standard": "FSIS Directive 5000.1 / Meat Storage Chart",
      "citation": "Ground beef and pork should be stored at <=40°F for no more than 1–2 days, or frozen at 0°F for 3–4 months."
    },
    "applianceSpecs": {
      "parameter": "Back of Refrigerator Cold Stability",
      "guideline": "Store raw ground meats in the coldest rear section of the bottom shelf at 33°F–36°F; never leave on door shelves."
    }
  },
  "cooked-beef-in-fridge": {
    "materialThermal": {
      "property": "Cured / Cooked Meat Spoilage & Nitrate Stability",
      "threshold": "Listeria Proliferation >40°F (4.4°C); Shelf Life: 3–5 Days",
      "details": "Cooked meats are sterile initially, but exposure to room air post-cooking introduces spoilage bacteria that replicate in the 40°F–140°F Danger Zone."
    },
    "safetyStandard": {
      "organization": "USDA FSIS",
      "standard": "9 CFR § 318.23 / FSIS Leftover Storage Guidelines",
      "citation": "Refrigerate cooked meats within 2 hours at <=40°F; consume within 3–4 days (opened deli meats 3–5 days)."
    },
    "applianceSpecs": {
      "parameter": "Meat Drawer Chilling Zone",
      "guideline": "Store in a dedicated meat drawer or middle shelf (34°F–37°F) sealed in airtight containers or original resealed pouches."
    }
  },
  "salmon-in-fridge": {
    "materialThermal": {
      "property": "Psychrotrophic Proteolysis & TMAO Breakdown",
      "threshold": "Psychrotolerant Spoilage >32°F (0°C); Shelf Life: 1–2 Days",
      "details": "Marine bacteria (Pseudomonas, Shewanella) remain active even near 32°F, breaking down trimethylamine oxide and producing ammonia-like off-odors."
    },
    "safetyStandard": {
      "organization": "FDA",
      "standard": "FDA Fish and Fishery Products Hazards and Controls Guidance",
      "citation": "Raw fresh seafood must be stored at <=38°F (ideally 32°F–34°F) and consumed within 1–2 days, or frozen at 0°F for up to 6 months."
    },
    "applianceSpecs": {
      "parameter": "Crushed Ice Drain Pan / Coldest Zone",
      "guideline": "Store on the bottom shelf resting over a bowl of crushed draining ice (32°F–34°F) to maximize freshness."
    }
  },
  "cooked-salmon-in-fridge": {
    "materialThermal": {
      "property": "Psychrotrophic Proteolysis & TMAO Breakdown",
      "threshold": "Psychrotolerant Spoilage >32°F (0°C); Shelf Life: 1–2 Days",
      "details": "Marine bacteria (Pseudomonas, Shewanella) remain active even near 32°F, breaking down trimethylamine oxide and producing ammonia-like off-odors."
    },
    "safetyStandard": {
      "organization": "FDA",
      "standard": "FDA Fish and Fishery Products Hazards and Controls Guidance",
      "citation": "Raw fresh seafood must be stored at <=38°F (ideally 32°F–34°F) and consumed within 1–2 days, or frozen at 0°F for up to 6 months."
    },
    "applianceSpecs": {
      "parameter": "Crushed Ice Drain Pan / Coldest Zone",
      "guideline": "Store on the bottom shelf resting over a bowl of crushed draining ice (32°F–34°F) to maximize freshness."
    }
  },
  "shrimp-in-fridge": {
    "materialThermal": {
      "property": "Psychrotrophic Proteolysis & TMAO Breakdown",
      "threshold": "Psychrotolerant Spoilage >32°F (0°C); Shelf Life: 1–2 Days",
      "details": "Marine bacteria (Pseudomonas, Shewanella) remain active even near 32°F, breaking down trimethylamine oxide and producing ammonia-like off-odors."
    },
    "safetyStandard": {
      "organization": "FDA",
      "standard": "FDA Fish and Fishery Products Hazards and Controls Guidance",
      "citation": "Raw fresh seafood must be stored at <=38°F (ideally 32°F–34°F) and consumed within 1–2 days, or frozen at 0°F for up to 6 months."
    },
    "applianceSpecs": {
      "parameter": "Crushed Ice Drain Pan / Coldest Zone",
      "guideline": "Store on the bottom shelf resting over a bowl of crushed draining ice (32°F–34°F) to maximize freshness."
    }
  },
  "cooked-shrimp-in-fridge": {
    "materialThermal": {
      "property": "Psychrotrophic Proteolysis & TMAO Breakdown",
      "threshold": "Psychrotolerant Spoilage >32°F (0°C); Shelf Life: 1–2 Days",
      "details": "Marine bacteria (Pseudomonas, Shewanella) remain active even near 32°F, breaking down trimethylamine oxide and producing ammonia-like off-odors."
    },
    "safetyStandard": {
      "organization": "FDA",
      "standard": "FDA Fish and Fishery Products Hazards and Controls Guidance",
      "citation": "Raw fresh seafood must be stored at <=38°F (ideally 32°F–34°F) and consumed within 1–2 days, or frozen at 0°F for up to 6 months."
    },
    "applianceSpecs": {
      "parameter": "Crushed Ice Drain Pan / Coldest Zone",
      "guideline": "Store on the bottom shelf resting over a bowl of crushed draining ice (32°F–34°F) to maximize freshness."
    }
  },
  "bacon-in-fridge": {
    "materialThermal": {
      "property": "Whole Muscle Myoglobin Oxidation & Microbial Latency",
      "threshold": "Browning Oxidation >38°F (3.3°C); Shelf Life: 3–5 Days",
      "details": "Intact muscle tissue has an internal sterile environment; surface bacteria are delayed at 34°F–38°F, giving intact steaks and roasts 3–5 days of safe storage."
    },
    "safetyStandard": {
      "organization": "USDA FSIS",
      "standard": "FSIS Cold Storage Specifications",
      "citation": "Raw steaks, chops, and roasts remain safe for 3–5 days at <=40°F, or 6–12 months frozen at 0°F."
    },
    "applianceSpecs": {
      "parameter": "Lowest Shelf Drip Protection",
      "guideline": "Place on the lowest shelf in original butcher wrap or rimmed plate at 34°F–36°F to contain juices."
    }
  },
  "cooked-bacon-in-fridge": {
    "materialThermal": {
      "property": "Cured / Cooked Meat Spoilage & Nitrate Stability",
      "threshold": "Listeria Proliferation >40°F (4.4°C); Shelf Life: 3–5 Days",
      "details": "Cooked meats are sterile initially, but exposure to room air post-cooking introduces spoilage bacteria that replicate in the 40°F–140°F Danger Zone."
    },
    "safetyStandard": {
      "organization": "USDA FSIS",
      "standard": "9 CFR § 318.23 / FSIS Leftover Storage Guidelines",
      "citation": "Refrigerate cooked meats within 2 hours at <=40°F; consume within 3–4 days (opened deli meats 3–5 days)."
    },
    "applianceSpecs": {
      "parameter": "Meat Drawer Chilling Zone",
      "guideline": "Store in a dedicated meat drawer or middle shelf (34°F–37°F) sealed in airtight containers or original resealed pouches."
    }
  },
  "ham-in-fridge": {
    "materialThermal": {
      "property": "Whole Muscle Myoglobin Oxidation & Microbial Latency",
      "threshold": "Browning Oxidation >38°F (3.3°C); Shelf Life: 3–5 Days",
      "details": "Intact muscle tissue has an internal sterile environment; surface bacteria are delayed at 34°F–38°F, giving intact steaks and roasts 3–5 days of safe storage."
    },
    "safetyStandard": {
      "organization": "USDA FSIS",
      "standard": "FSIS Cold Storage Specifications",
      "citation": "Raw steaks, chops, and roasts remain safe for 3–5 days at <=40°F, or 6–12 months frozen at 0°F."
    },
    "applianceSpecs": {
      "parameter": "Lowest Shelf Drip Protection",
      "guideline": "Place on the lowest shelf in original butcher wrap or rimmed plate at 34°F–36°F to contain juices."
    }
  },
  "cooked-ham-in-fridge": {
    "materialThermal": {
      "property": "Cured / Cooked Meat Spoilage & Nitrate Stability",
      "threshold": "Listeria Proliferation >40°F (4.4°C); Shelf Life: 3–5 Days",
      "details": "Cooked meats are sterile initially, but exposure to room air post-cooking introduces spoilage bacteria that replicate in the 40°F–140°F Danger Zone."
    },
    "safetyStandard": {
      "organization": "USDA FSIS",
      "standard": "9 CFR § 318.23 / FSIS Leftover Storage Guidelines",
      "citation": "Refrigerate cooked meats within 2 hours at <=40°F; consume within 3–4 days (opened deli meats 3–5 days)."
    },
    "applianceSpecs": {
      "parameter": "Meat Drawer Chilling Zone",
      "guideline": "Store in a dedicated meat drawer or middle shelf (34°F–37°F) sealed in airtight containers or original resealed pouches."
    }
  },
  "turkey-in-fridge": {
    "materialThermal": {
      "property": "Raw Poultry Psychrotrophic Replication Limit",
      "threshold": "Rapid Salmonella / Campylobacter Growth >40°F; Shelf Life: 1–2 Days",
      "details": "Surface moisture on raw poultry supports rapid psychrotrophic bacterial growth even at refrigerated temperatures, doubling bacterial count every 30 minutes at 50°F."
    },
    "safetyStandard": {
      "organization": "USDA FSIS",
      "standard": "FSIS Food Safety Guidelines (Poultry Storage)",
      "citation": "Raw poultry must be held at or below 40°F and prepared within 1–2 days of purchase, or frozen at 0°F for up to 9–12 months."
    },
    "applianceSpecs": {
      "parameter": "Bottom Shelf Coldest Placement (34°F–36°F)",
      "guideline": "Keep on the lowest shelf in a leak-proof container to prevent drippage onto ready-to-eat foods; cook or freeze within 48 hours."
    }
  },
  "cooked-turkey-in-fridge": {
    "materialThermal": {
      "property": "Cooked Avian Protein Microbial Lag-Phase",
      "threshold": "Listeria Monocytogenes Proliferation >40°F (4.4°C); Safe Storage 3–4 Days",
      "details": "Cooked poultry has high water activity (aw ~0.98); refrigerating below 40°F prolongs the bacterial lag phase, preventing rapid vegetative replication."
    },
    "safetyStandard": {
      "organization": "FDA / USDA FSIS",
      "standard": "FDA Food Code 2022 § 3-501.17 / FSIS Cold Storage Chart",
      "citation": "Ready-to-eat cooked poultry must be refrigerated at <=40°F for a maximum of 3–4 days, or frozen at 0°F for 2–6 months."
    },
    "applianceSpecs": {
      "parameter": "Middle Refrigerator Shelf Temperature",
      "guideline": "Store in shallow airtight containers at 35°F–38°F; divide large portions so food drops below 40°F within 2 hours."
    }
  },
  "hot-dogs-in-fridge": {
    "materialThermal": {
      "property": "Cured / Cooked Meat Spoilage & Nitrate Stability",
      "threshold": "Listeria Proliferation >40°F (4.4°C); Shelf Life: 3–5 Days",
      "details": "Cooked meats are sterile initially, but exposure to room air post-cooking introduces spoilage bacteria that replicate in the 40°F–140°F Danger Zone."
    },
    "safetyStandard": {
      "organization": "USDA FSIS",
      "standard": "9 CFR § 318.23 / FSIS Leftover Storage Guidelines",
      "citation": "Refrigerate cooked meats within 2 hours at <=40°F; consume within 3–4 days (opened deli meats 3–5 days)."
    },
    "applianceSpecs": {
      "parameter": "Meat Drawer Chilling Zone",
      "guideline": "Store in a dedicated meat drawer or middle shelf (34°F–37°F) sealed in airtight containers or original resealed pouches."
    }
  },
  "deli-meat-in-fridge": {
    "materialThermal": {
      "property": "Cured / Cooked Meat Spoilage & Nitrate Stability",
      "threshold": "Listeria Proliferation >40°F (4.4°C); Shelf Life: 3–5 Days",
      "details": "Cooked meats are sterile initially, but exposure to room air post-cooking introduces spoilage bacteria that replicate in the 40°F–140°F Danger Zone."
    },
    "safetyStandard": {
      "organization": "USDA FSIS",
      "standard": "9 CFR § 318.23 / FSIS Leftover Storage Guidelines",
      "citation": "Refrigerate cooked meats within 2 hours at <=40°F; consume within 3–4 days (opened deli meats 3–5 days)."
    },
    "applianceSpecs": {
      "parameter": "Meat Drawer Chilling Zone",
      "guideline": "Store in a dedicated meat drawer or middle shelf (34°F–37°F) sealed in airtight containers or original resealed pouches."
    }
  },
  "eggs-in-fridge": {
    "materialThermal": {
      "property": "Vitelline Membrane Integrity & Salmonella Dormancy",
      "threshold": "Refrigerated Dormancy <=45°F (7.2°C); Shelf Life: 3–5 Weeks",
      "details": "Intact shell eggs maintain strong albumen antimicrobial enzymes (lysozyme) and vitelline membranes for over a month when kept cold and unwashed."
    },
    "safetyStandard": {
      "organization": "FDA",
      "standard": "21 CFR Part 118 (Egg Safety Rule)",
      "citation": "Store shell eggs continuously at or below 45°F (7.2°C); hard-boiled eggs must be refrigerated and consumed within 7 days."
    },
    "applianceSpecs": {
      "parameter": "Original Carton Main Shelf Placement",
      "guideline": "Store in original cardboard carton on a middle shelf (35°F–38°F); carton shields porous shells from odors and humidity loss."
    }
  },
  "hard-boiled-eggs-in-fridge": {
    "materialThermal": {
      "property": "Vitelline Membrane Integrity & Salmonella Dormancy",
      "threshold": "Refrigerated Dormancy <=45°F (7.2°C); Shelf Life: 3–5 Weeks",
      "details": "Intact shell eggs maintain strong albumen antimicrobial enzymes (lysozyme) and vitelline membranes for over a month when kept cold and unwashed."
    },
    "safetyStandard": {
      "organization": "FDA",
      "standard": "21 CFR Part 118 (Egg Safety Rule)",
      "citation": "Store shell eggs continuously at or below 45°F (7.2°C); hard-boiled eggs must be refrigerated and consumed within 7 days."
    },
    "applianceSpecs": {
      "parameter": "Original Carton Main Shelf Placement",
      "guideline": "Store in original cardboard carton on a middle shelf (35°F–38°F); carton shields porous shells from odors and humidity loss."
    }
  },
  "milk-in-fridge": {
    "materialThermal": {
      "property": "Lactic Acid Bacteria Inactivation & Lipolysis",
      "threshold": "Psychrotrophic Spore Outgrowth >40°F (4.4°C); Shelf Life: 7 Days (Milk)",
      "details": "Pasteurized dairy holds cold-tolerant spore-formers that slowly metabolize lactose; steady cold suppresses souring and whey separation."
    },
    "safetyStandard": {
      "organization": "FDA",
      "standard": "Grade 'A' Pasteurized Milk Ordinance (PMO) 2019",
      "citation": "Maintain pasteurized milk at 40°F or lower; consume within 7 days of opening."
    },
    "applianceSpecs": {
      "parameter": "Main Interior Shelf (Avoid Door Bins)",
      "guideline": "Never store milk in door shelves where temperatures regularly reach 45°F; place in the coldest interior center shelf."
    }
  },
  "butter-in-fridge": {
    "materialThermal": {
      "property": "Lactic Acid Bacteria Inactivation & Lipolysis",
      "threshold": "Psychrotrophic Spore Outgrowth >40°F (4.4°C); Shelf Life: 7 Days (Milk)",
      "details": "Pasteurized dairy holds cold-tolerant spore-formers that slowly metabolize lactose; steady cold suppresses souring and whey separation."
    },
    "safetyStandard": {
      "organization": "FDA",
      "standard": "Grade 'A' Pasteurized Milk Ordinance (PMO) 2019",
      "citation": "Maintain pasteurized milk at 40°F or lower; consume within 7 days of opening."
    },
    "applianceSpecs": {
      "parameter": "Main Interior Shelf (Avoid Door Bins)",
      "guideline": "Never store milk in door shelves where temperatures regularly reach 45°F; place in the coldest interior center shelf."
    }
  },
  "cream-cheese-in-fridge": {
    "materialThermal": {
      "property": "Lactic Acid Bacteria Inactivation & Lipolysis",
      "threshold": "Psychrotrophic Spore Outgrowth >40°F (4.4°C); Shelf Life: 7 Days (Milk)",
      "details": "Pasteurized dairy holds cold-tolerant spore-formers that slowly metabolize lactose; steady cold suppresses souring and whey separation."
    },
    "safetyStandard": {
      "organization": "FDA",
      "standard": "Grade 'A' Pasteurized Milk Ordinance (PMO) 2019",
      "citation": "Maintain pasteurized milk at 40°F or lower; consume within 7 days of opening."
    },
    "applianceSpecs": {
      "parameter": "Main Interior Shelf (Avoid Door Bins)",
      "guideline": "Never store milk in door shelves where temperatures regularly reach 45°F; place in the coldest interior center shelf."
    }
  },
  "sour-cream-in-fridge": {
    "materialThermal": {
      "property": "Lactic Acid Bacteria Inactivation & Lipolysis",
      "threshold": "Psychrotrophic Spore Outgrowth >40°F (4.4°C); Shelf Life: 7 Days (Milk)",
      "details": "Pasteurized dairy holds cold-tolerant spore-formers that slowly metabolize lactose; steady cold suppresses souring and whey separation."
    },
    "safetyStandard": {
      "organization": "FDA",
      "standard": "Grade 'A' Pasteurized Milk Ordinance (PMO) 2019",
      "citation": "Maintain pasteurized milk at 40°F or lower; consume within 7 days of opening."
    },
    "applianceSpecs": {
      "parameter": "Main Interior Shelf (Avoid Door Bins)",
      "guideline": "Never store milk in door shelves where temperatures regularly reach 45°F; place in the coldest interior center shelf."
    }
  },
  "yogurt-in-fridge": {
    "materialThermal": {
      "property": "Lactic Acid Bacteria Inactivation & Lipolysis",
      "threshold": "Psychrotrophic Spore Outgrowth >40°F (4.4°C); Shelf Life: 7 Days (Milk)",
      "details": "Pasteurized dairy holds cold-tolerant spore-formers that slowly metabolize lactose; steady cold suppresses souring and whey separation."
    },
    "safetyStandard": {
      "organization": "FDA",
      "standard": "Grade 'A' Pasteurized Milk Ordinance (PMO) 2019",
      "citation": "Maintain pasteurized milk at 40°F or lower; consume within 7 days of opening."
    },
    "applianceSpecs": {
      "parameter": "Main Interior Shelf (Avoid Door Bins)",
      "guideline": "Never store milk in door shelves where temperatures regularly reach 45°F; place in the coldest interior center shelf."
    }
  },
  "cottage-cheese-in-fridge": {
    "materialThermal": {
      "property": "Lactic Acid Bacteria Inactivation & Lipolysis",
      "threshold": "Psychrotrophic Spore Outgrowth >40°F (4.4°C); Shelf Life: 7 Days (Milk)",
      "details": "Pasteurized dairy holds cold-tolerant spore-formers that slowly metabolize lactose; steady cold suppresses souring and whey separation."
    },
    "safetyStandard": {
      "organization": "FDA",
      "standard": "Grade 'A' Pasteurized Milk Ordinance (PMO) 2019",
      "citation": "Maintain pasteurized milk at 40°F or lower; consume within 7 days of opening."
    },
    "applianceSpecs": {
      "parameter": "Main Interior Shelf (Avoid Door Bins)",
      "guideline": "Never store milk in door shelves where temperatures regularly reach 45°F; place in the coldest interior center shelf."
    }
  },
  "heavy-cream-in-fridge": {
    "materialThermal": {
      "property": "Lactic Acid Bacteria Inactivation & Lipolysis",
      "threshold": "Psychrotrophic Spore Outgrowth >40°F (4.4°C); Shelf Life: 7 Days (Milk)",
      "details": "Pasteurized dairy holds cold-tolerant spore-formers that slowly metabolize lactose; steady cold suppresses souring and whey separation."
    },
    "safetyStandard": {
      "organization": "FDA",
      "standard": "Grade 'A' Pasteurized Milk Ordinance (PMO) 2019",
      "citation": "Maintain pasteurized milk at 40°F or lower; consume within 7 days of opening."
    },
    "applianceSpecs": {
      "parameter": "Main Interior Shelf (Avoid Door Bins)",
      "guideline": "Never store milk in door shelves where temperatures regularly reach 45°F; place in the coldest interior center shelf."
    }
  },
  "cheddar-cheese-in-fridge": {
    "materialThermal": {
      "property": "Lactic Acid Bacteria Inactivation & Lipolysis",
      "threshold": "Psychrotrophic Spore Outgrowth >40°F (4.4°C); Shelf Life: 7 Days (Milk)",
      "details": "Pasteurized dairy holds cold-tolerant spore-formers that slowly metabolize lactose; steady cold suppresses souring and whey separation."
    },
    "safetyStandard": {
      "organization": "FDA",
      "standard": "Grade 'A' Pasteurized Milk Ordinance (PMO) 2019",
      "citation": "Maintain pasteurized milk at 40°F or lower; consume within 7 days of opening."
    },
    "applianceSpecs": {
      "parameter": "Main Interior Shelf (Avoid Door Bins)",
      "guideline": "Never store milk in door shelves where temperatures regularly reach 45°F; place in the coldest interior center shelf."
    }
  },
  "mozzarella-in-fridge": {
    "materialThermal": {
      "property": "Cold-Holding Microbial Latency Threshold",
      "threshold": "Danger Zone Threshold 40°F (4.4°C); Freezing Solidification 32°F",
      "details": "Continuous temperature control below 40°F drastically slows enzyme kinetics and microbiological spoilage rates in perishable food matrices."
    },
    "safetyStandard": {
      "organization": "FDA / USDA FSIS",
      "standard": "FDA Food Code 2022 § 3-501.16 / USDA Cold Storage Guidelines",
      "citation": "Perishable foods must be held continuously at or below 40°F (4.4°C) to maintain food safety."
    },
    "applianceSpecs": {
      "parameter": "Consistent Interior Cold Maintenance",
      "guideline": "Store on interior refrigerator shelves (34°F–38°F) in airtight sealed containers to prevent cross-contamination and moisture loss."
    }
  },
  "parmesan-in-fridge": {
    "materialThermal": {
      "property": "Cold-Holding Microbial Latency Threshold",
      "threshold": "Danger Zone Threshold 40°F (4.4°C); Freezing Solidification 32°F",
      "details": "Continuous temperature control below 40°F drastically slows enzyme kinetics and microbiological spoilage rates in perishable food matrices."
    },
    "safetyStandard": {
      "organization": "FDA / USDA FSIS",
      "standard": "FDA Food Code 2022 § 3-501.16 / USDA Cold Storage Guidelines",
      "citation": "Perishable foods must be held continuously at or below 40°F (4.4°C) to maintain food safety."
    },
    "applianceSpecs": {
      "parameter": "Consistent Interior Cold Maintenance",
      "guideline": "Store on interior refrigerator shelves (34°F–38°F) in airtight sealed containers to prevent cross-contamination and moisture loss."
    }
  },
  "cooked-pasta-in-fridge": {
    "materialThermal": {
      "property": "Spore-Forming Bacterial Growth & Enterotoxin Production",
      "threshold": "Danger Zone 40°F–140°F (4.4°C–60°C); Safe Storage 3–4 Days",
      "details": "Bacillus cereus and Clostridium perfringens survive initial cooking. Once food cools into the Danger Zone, vegetative cells proliferate and produce toxins."
    },
    "safetyStandard": {
      "organization": "FDA",
      "standard": "FDA Food Code 2022 § 3-501.17 (TCS Food Date Marking)",
      "citation": "Cooked ready-to-eat leftovers must be stored at 41°F or below and discarded after a maximum of 4 days."
    },
    "applianceSpecs": {
      "parameter": "Shallow Container Cooling Protocol",
      "guideline": "Refrigerate leftovers within 2 hours of cooking in containers no deeper than 2 inches to ensure rapid temperature drop below 40°F."
    }
  },
  "cooked-rice-in-fridge": {
    "materialThermal": {
      "property": "Spore-Forming Bacterial Growth & Enterotoxin Production",
      "threshold": "Danger Zone 40°F–140°F (4.4°C–60°C); Safe Storage 3–4 Days",
      "details": "Bacillus cereus and Clostridium perfringens survive initial cooking. Once food cools into the Danger Zone, vegetative cells proliferate and produce toxins."
    },
    "safetyStandard": {
      "organization": "FDA",
      "standard": "FDA Food Code 2022 § 3-501.17 (TCS Food Date Marking)",
      "citation": "Cooked ready-to-eat leftovers must be stored at 41°F or below and discarded after a maximum of 4 days."
    },
    "applianceSpecs": {
      "parameter": "Shallow Container Cooling Protocol",
      "guideline": "Refrigerate leftovers within 2 hours of cooking in containers no deeper than 2 inches to ensure rapid temperature drop below 40°F."
    }
  },
  "cooked-beans-in-fridge": {
    "materialThermal": {
      "property": "Cold-Holding Microbial Latency Threshold",
      "threshold": "Danger Zone Threshold 40°F (4.4°C); Freezing Solidification 32°F",
      "details": "Continuous temperature control below 40°F drastically slows enzyme kinetics and microbiological spoilage rates in perishable food matrices."
    },
    "safetyStandard": {
      "organization": "FDA / USDA FSIS",
      "standard": "FDA Food Code 2022 § 3-501.16 / USDA Cold Storage Guidelines",
      "citation": "Perishable foods must be held continuously at or below 40°F (4.4°C) to maintain food safety."
    },
    "applianceSpecs": {
      "parameter": "Consistent Interior Cold Maintenance",
      "guideline": "Store on interior refrigerator shelves (34°F–38°F) in airtight sealed containers to prevent cross-contamination and moisture loss."
    }
  },
  "soup-in-fridge": {
    "materialThermal": {
      "property": "Spore-Forming Bacterial Growth & Enterotoxin Production",
      "threshold": "Danger Zone 40°F–140°F (4.4°C–60°C); Safe Storage 3–4 Days",
      "details": "Bacillus cereus and Clostridium perfringens survive initial cooking. Once food cools into the Danger Zone, vegetative cells proliferate and produce toxins."
    },
    "safetyStandard": {
      "organization": "FDA",
      "standard": "FDA Food Code 2022 § 3-501.17 (TCS Food Date Marking)",
      "citation": "Cooked ready-to-eat leftovers must be stored at 41°F or below and discarded after a maximum of 4 days."
    },
    "applianceSpecs": {
      "parameter": "Shallow Container Cooling Protocol",
      "guideline": "Refrigerate leftovers within 2 hours of cooking in containers no deeper than 2 inches to ensure rapid temperature drop below 40°F."
    }
  },
  "pizza-in-fridge": {
    "materialThermal": {
      "property": "Spore-Forming Bacterial Growth & Enterotoxin Production",
      "threshold": "Danger Zone 40°F–140°F (4.4°C–60°C); Safe Storage 3–4 Days",
      "details": "Bacillus cereus and Clostridium perfringens survive initial cooking. Once food cools into the Danger Zone, vegetative cells proliferate and produce toxins."
    },
    "safetyStandard": {
      "organization": "FDA",
      "standard": "FDA Food Code 2022 § 3-501.17 (TCS Food Date Marking)",
      "citation": "Cooked ready-to-eat leftovers must be stored at 41°F or below and discarded after a maximum of 4 days."
    },
    "applianceSpecs": {
      "parameter": "Shallow Container Cooling Protocol",
      "guideline": "Refrigerate leftovers within 2 hours of cooking in containers no deeper than 2 inches to ensure rapid temperature drop below 40°F."
    }
  },
  "cooked-potatoes-in-fridge": {
    "materialThermal": {
      "property": "Cold-Holding Microbial Latency Threshold",
      "threshold": "Danger Zone Threshold 40°F (4.4°C); Freezing Solidification 32°F",
      "details": "Continuous temperature control below 40°F drastically slows enzyme kinetics and microbiological spoilage rates in perishable food matrices."
    },
    "safetyStandard": {
      "organization": "FDA / USDA FSIS",
      "standard": "FDA Food Code 2022 § 3-501.16 / USDA Cold Storage Guidelines",
      "citation": "Perishable foods must be held continuously at or below 40°F (4.4°C) to maintain food safety."
    },
    "applianceSpecs": {
      "parameter": "Consistent Interior Cold Maintenance",
      "guideline": "Store on interior refrigerator shelves (34°F–38°F) in airtight sealed containers to prevent cross-contamination and moisture loss."
    }
  },
  "avocado-in-fridge": {
    "materialThermal": {
      "property": "Cold-Holding Microbial Latency Threshold",
      "threshold": "Danger Zone Threshold 40°F (4.4°C); Freezing Solidification 32°F",
      "details": "Continuous temperature control below 40°F drastically slows enzyme kinetics and microbiological spoilage rates in perishable food matrices."
    },
    "safetyStandard": {
      "organization": "FDA / USDA FSIS",
      "standard": "FDA Food Code 2022 § 3-501.16 / USDA Cold Storage Guidelines",
      "citation": "Perishable foods must be held continuously at or below 40°F (4.4°C) to maintain food safety."
    },
    "applianceSpecs": {
      "parameter": "Consistent Interior Cold Maintenance",
      "guideline": "Store on interior refrigerator shelves (34°F–38°F) in airtight sealed containers to prevent cross-contamination and moisture loss."
    }
  },
  "cut-avocado-in-fridge": {
    "materialThermal": {
      "property": "Cold-Holding Microbial Latency Threshold",
      "threshold": "Danger Zone Threshold 40°F (4.4°C); Freezing Solidification 32°F",
      "details": "Continuous temperature control below 40°F drastically slows enzyme kinetics and microbiological spoilage rates in perishable food matrices."
    },
    "safetyStandard": {
      "organization": "FDA / USDA FSIS",
      "standard": "FDA Food Code 2022 § 3-501.16 / USDA Cold Storage Guidelines",
      "citation": "Perishable foods must be held continuously at or below 40°F (4.4°C) to maintain food safety."
    },
    "applianceSpecs": {
      "parameter": "Consistent Interior Cold Maintenance",
      "guideline": "Store on interior refrigerator shelves (34°F–38°F) in airtight sealed containers to prevent cross-contamination and moisture loss."
    }
  },
  "strawberries-in-fridge": {
    "materialThermal": {
      "property": "Cold-Holding Microbial Latency Threshold",
      "threshold": "Danger Zone Threshold 40°F (4.4°C); Freezing Solidification 32°F",
      "details": "Continuous temperature control below 40°F drastically slows enzyme kinetics and microbiological spoilage rates in perishable food matrices."
    },
    "safetyStandard": {
      "organization": "FDA / USDA FSIS",
      "standard": "FDA Food Code 2022 § 3-501.16 / USDA Cold Storage Guidelines",
      "citation": "Perishable foods must be held continuously at or below 40°F (4.4°C) to maintain food safety."
    },
    "applianceSpecs": {
      "parameter": "Consistent Interior Cold Maintenance",
      "guideline": "Store on interior refrigerator shelves (34°F–38°F) in airtight sealed containers to prevent cross-contamination and moisture loss."
    }
  },
  "blueberries-in-fridge": {
    "materialThermal": {
      "property": "Cold-Holding Microbial Latency Threshold",
      "threshold": "Danger Zone Threshold 40°F (4.4°C); Freezing Solidification 32°F",
      "details": "Continuous temperature control below 40°F drastically slows enzyme kinetics and microbiological spoilage rates in perishable food matrices."
    },
    "safetyStandard": {
      "organization": "FDA / USDA FSIS",
      "standard": "FDA Food Code 2022 § 3-501.16 / USDA Cold Storage Guidelines",
      "citation": "Perishable foods must be held continuously at or below 40°F (4.4°C) to maintain food safety."
    },
    "applianceSpecs": {
      "parameter": "Consistent Interior Cold Maintenance",
      "guideline": "Store on interior refrigerator shelves (34°F–38°F) in airtight sealed containers to prevent cross-contamination and moisture loss."
    }
  },
  "grapes-in-fridge": {
    "materialThermal": {
      "property": "Cold-Holding Microbial Latency Threshold",
      "threshold": "Danger Zone Threshold 40°F (4.4°C); Freezing Solidification 32°F",
      "details": "Continuous temperature control below 40°F drastically slows enzyme kinetics and microbiological spoilage rates in perishable food matrices."
    },
    "safetyStandard": {
      "organization": "FDA / USDA FSIS",
      "standard": "FDA Food Code 2022 § 3-501.16 / USDA Cold Storage Guidelines",
      "citation": "Perishable foods must be held continuously at or below 40°F (4.4°C) to maintain food safety."
    },
    "applianceSpecs": {
      "parameter": "Consistent Interior Cold Maintenance",
      "guideline": "Store on interior refrigerator shelves (34°F–38°F) in airtight sealed containers to prevent cross-contamination and moisture loss."
    }
  },
  "watermelon-in-fridge": {
    "materialThermal": {
      "property": "Cold-Holding Microbial Latency Threshold",
      "threshold": "Danger Zone Threshold 40°F (4.4°C); Freezing Solidification 32°F",
      "details": "Continuous temperature control below 40°F drastically slows enzyme kinetics and microbiological spoilage rates in perishable food matrices."
    },
    "safetyStandard": {
      "organization": "FDA / USDA FSIS",
      "standard": "FDA Food Code 2022 § 3-501.16 / USDA Cold Storage Guidelines",
      "citation": "Perishable foods must be held continuously at or below 40°F (4.4°C) to maintain food safety."
    },
    "applianceSpecs": {
      "parameter": "Consistent Interior Cold Maintenance",
      "guideline": "Store on interior refrigerator shelves (34°F–38°F) in airtight sealed containers to prevent cross-contamination and moisture loss."
    }
  },
  "cut-watermelon-in-fridge": {
    "materialThermal": {
      "property": "Cold-Holding Microbial Latency Threshold",
      "threshold": "Danger Zone Threshold 40°F (4.4°C); Freezing Solidification 32°F",
      "details": "Continuous temperature control below 40°F drastically slows enzyme kinetics and microbiological spoilage rates in perishable food matrices."
    },
    "safetyStandard": {
      "organization": "FDA / USDA FSIS",
      "standard": "FDA Food Code 2022 § 3-501.16 / USDA Cold Storage Guidelines",
      "citation": "Perishable foods must be held continuously at or below 40°F (4.4°C) to maintain food safety."
    },
    "applianceSpecs": {
      "parameter": "Consistent Interior Cold Maintenance",
      "guideline": "Store on interior refrigerator shelves (34°F–38°F) in airtight sealed containers to prevent cross-contamination and moisture loss."
    }
  },
  "apples-in-fridge": {
    "materialThermal": {
      "property": "Cold-Holding Microbial Latency Threshold",
      "threshold": "Danger Zone Threshold 40°F (4.4°C); Freezing Solidification 32°F",
      "details": "Continuous temperature control below 40°F drastically slows enzyme kinetics and microbiological spoilage rates in perishable food matrices."
    },
    "safetyStandard": {
      "organization": "FDA / USDA FSIS",
      "standard": "FDA Food Code 2022 § 3-501.16 / USDA Cold Storage Guidelines",
      "citation": "Perishable foods must be held continuously at or below 40°F (4.4°C) to maintain food safety."
    },
    "applianceSpecs": {
      "parameter": "Consistent Interior Cold Maintenance",
      "guideline": "Store on interior refrigerator shelves (34°F–38°F) in airtight sealed containers to prevent cross-contamination and moisture loss."
    }
  },
  "lettuce-in-fridge": {
    "materialThermal": {
      "property": "Cold-Holding Microbial Latency Threshold",
      "threshold": "Danger Zone Threshold 40°F (4.4°C); Freezing Solidification 32°F",
      "details": "Continuous temperature control below 40°F drastically slows enzyme kinetics and microbiological spoilage rates in perishable food matrices."
    },
    "safetyStandard": {
      "organization": "FDA / USDA FSIS",
      "standard": "FDA Food Code 2022 § 3-501.16 / USDA Cold Storage Guidelines",
      "citation": "Perishable foods must be held continuously at or below 40°F (4.4°C) to maintain food safety."
    },
    "applianceSpecs": {
      "parameter": "Consistent Interior Cold Maintenance",
      "guideline": "Store on interior refrigerator shelves (34°F–38°F) in airtight sealed containers to prevent cross-contamination and moisture loss."
    }
  },
  "spinach-in-fridge": {
    "materialThermal": {
      "property": "Cold-Holding Microbial Latency Threshold",
      "threshold": "Danger Zone Threshold 40°F (4.4°C); Freezing Solidification 32°F",
      "details": "Continuous temperature control below 40°F drastically slows enzyme kinetics and microbiological spoilage rates in perishable food matrices."
    },
    "safetyStandard": {
      "organization": "FDA / USDA FSIS",
      "standard": "FDA Food Code 2022 § 3-501.16 / USDA Cold Storage Guidelines",
      "citation": "Perishable foods must be held continuously at or below 40°F (4.4°C) to maintain food safety."
    },
    "applianceSpecs": {
      "parameter": "Consistent Interior Cold Maintenance",
      "guideline": "Store on interior refrigerator shelves (34°F–38°F) in airtight sealed containers to prevent cross-contamination and moisture loss."
    }
  },
  "broccoli-in-fridge": {
    "materialThermal": {
      "property": "Cold-Holding Microbial Latency Threshold",
      "threshold": "Danger Zone Threshold 40°F (4.4°C); Freezing Solidification 32°F",
      "details": "Continuous temperature control below 40°F drastically slows enzyme kinetics and microbiological spoilage rates in perishable food matrices."
    },
    "safetyStandard": {
      "organization": "FDA / USDA FSIS",
      "standard": "FDA Food Code 2022 § 3-501.16 / USDA Cold Storage Guidelines",
      "citation": "Perishable foods must be held continuously at or below 40°F (4.4°C) to maintain food safety."
    },
    "applianceSpecs": {
      "parameter": "Consistent Interior Cold Maintenance",
      "guideline": "Store on interior refrigerator shelves (34°F–38°F) in airtight sealed containers to prevent cross-contamination and moisture loss."
    }
  },
  "carrots-in-fridge": {
    "materialThermal": {
      "property": "Cold-Holding Microbial Latency Threshold",
      "threshold": "Danger Zone Threshold 40°F (4.4°C); Freezing Solidification 32°F",
      "details": "Continuous temperature control below 40°F drastically slows enzyme kinetics and microbiological spoilage rates in perishable food matrices."
    },
    "safetyStandard": {
      "organization": "FDA / USDA FSIS",
      "standard": "FDA Food Code 2022 § 3-501.16 / USDA Cold Storage Guidelines",
      "citation": "Perishable foods must be held continuously at or below 40°F (4.4°C) to maintain food safety."
    },
    "applianceSpecs": {
      "parameter": "Consistent Interior Cold Maintenance",
      "guideline": "Store on interior refrigerator shelves (34°F–38°F) in airtight sealed containers to prevent cross-contamination and moisture loss."
    }
  },
  "celery-in-fridge": {
    "materialThermal": {
      "property": "Cold-Holding Microbial Latency Threshold",
      "threshold": "Danger Zone Threshold 40°F (4.4°C); Freezing Solidification 32°F",
      "details": "Continuous temperature control below 40°F drastically slows enzyme kinetics and microbiological spoilage rates in perishable food matrices."
    },
    "safetyStandard": {
      "organization": "FDA / USDA FSIS",
      "standard": "FDA Food Code 2022 § 3-501.16 / USDA Cold Storage Guidelines",
      "citation": "Perishable foods must be held continuously at or below 40°F (4.4°C) to maintain food safety."
    },
    "applianceSpecs": {
      "parameter": "Consistent Interior Cold Maintenance",
      "guideline": "Store on interior refrigerator shelves (34°F–38°F) in airtight sealed containers to prevent cross-contamination and moisture loss."
    }
  },
  "mushrooms-in-fridge": {
    "materialThermal": {
      "property": "Cold-Holding Microbial Latency Threshold",
      "threshold": "Danger Zone Threshold 40°F (4.4°C); Freezing Solidification 32°F",
      "details": "Continuous temperature control below 40°F drastically slows enzyme kinetics and microbiological spoilage rates in perishable food matrices."
    },
    "safetyStandard": {
      "organization": "FDA / USDA FSIS",
      "standard": "FDA Food Code 2022 § 3-501.16 / USDA Cold Storage Guidelines",
      "citation": "Perishable foods must be held continuously at or below 40°F (4.4°C) to maintain food safety."
    },
    "applianceSpecs": {
      "parameter": "Consistent Interior Cold Maintenance",
      "guideline": "Store on interior refrigerator shelves (34°F–38°F) in airtight sealed containers to prevent cross-contamination and moisture loss."
    }
  },
  "tomatoes-in-fridge": {
    "materialThermal": {
      "property": "Cold-Holding Microbial Latency Threshold",
      "threshold": "Danger Zone Threshold 40°F (4.4°C); Freezing Solidification 32°F",
      "details": "Continuous temperature control below 40°F drastically slows enzyme kinetics and microbiological spoilage rates in perishable food matrices."
    },
    "safetyStandard": {
      "organization": "FDA / USDA FSIS",
      "standard": "FDA Food Code 2022 § 3-501.16 / USDA Cold Storage Guidelines",
      "citation": "Perishable foods must be held continuously at or below 40°F (4.4°C) to maintain food safety."
    },
    "applianceSpecs": {
      "parameter": "Consistent Interior Cold Maintenance",
      "guideline": "Store on interior refrigerator shelves (34°F–38°F) in airtight sealed containers to prevent cross-contamination and moisture loss."
    }
  },
  "cucumbers-in-fridge": {
    "materialThermal": {
      "property": "Cold-Holding Microbial Latency Threshold",
      "threshold": "Danger Zone Threshold 40°F (4.4°C); Freezing Solidification 32°F",
      "details": "Continuous temperature control below 40°F drastically slows enzyme kinetics and microbiological spoilage rates in perishable food matrices."
    },
    "safetyStandard": {
      "organization": "FDA / USDA FSIS",
      "standard": "FDA Food Code 2022 § 3-501.16 / USDA Cold Storage Guidelines",
      "citation": "Perishable foods must be held continuously at or below 40°F (4.4°C) to maintain food safety."
    },
    "applianceSpecs": {
      "parameter": "Consistent Interior Cold Maintenance",
      "guideline": "Store on interior refrigerator shelves (34°F–38°F) in airtight sealed containers to prevent cross-contamination and moisture loss."
    }
  },
  "bell-peppers-in-fridge": {
    "materialThermal": {
      "property": "Cold-Holding Microbial Latency Threshold",
      "threshold": "Danger Zone Threshold 40°F (4.4°C); Freezing Solidification 32°F",
      "details": "Continuous temperature control below 40°F drastically slows enzyme kinetics and microbiological spoilage rates in perishable food matrices."
    },
    "safetyStandard": {
      "organization": "FDA / USDA FSIS",
      "standard": "FDA Food Code 2022 § 3-501.16 / USDA Cold Storage Guidelines",
      "citation": "Perishable foods must be held continuously at or below 40°F (4.4°C) to maintain food safety."
    },
    "applianceSpecs": {
      "parameter": "Consistent Interior Cold Maintenance",
      "guideline": "Store on interior refrigerator shelves (34°F–38°F) in airtight sealed containers to prevent cross-contamination and moisture loss."
    }
  },
  "onions-in-fridge": {
    "materialThermal": {
      "property": "Cold-Holding Microbial Latency Threshold",
      "threshold": "Danger Zone Threshold 40°F (4.4°C); Freezing Solidification 32°F",
      "details": "Continuous temperature control below 40°F drastically slows enzyme kinetics and microbiological spoilage rates in perishable food matrices."
    },
    "safetyStandard": {
      "organization": "FDA / USDA FSIS",
      "standard": "FDA Food Code 2022 § 3-501.16 / USDA Cold Storage Guidelines",
      "citation": "Perishable foods must be held continuously at or below 40°F (4.4°C) to maintain food safety."
    },
    "applianceSpecs": {
      "parameter": "Consistent Interior Cold Maintenance",
      "guideline": "Store on interior refrigerator shelves (34°F–38°F) in airtight sealed containers to prevent cross-contamination and moisture loss."
    }
  },
  "garlic-in-fridge": {
    "materialThermal": {
      "property": "Cold-Holding Microbial Latency Threshold",
      "threshold": "Danger Zone Threshold 40°F (4.4°C); Freezing Solidification 32°F",
      "details": "Continuous temperature control below 40°F drastically slows enzyme kinetics and microbiological spoilage rates in perishable food matrices."
    },
    "safetyStandard": {
      "organization": "FDA / USDA FSIS",
      "standard": "FDA Food Code 2022 § 3-501.16 / USDA Cold Storage Guidelines",
      "citation": "Perishable foods must be held continuously at or below 40°F (4.4°C) to maintain food safety."
    },
    "applianceSpecs": {
      "parameter": "Consistent Interior Cold Maintenance",
      "guideline": "Store on interior refrigerator shelves (34°F–38°F) in airtight sealed containers to prevent cross-contamination and moisture loss."
    }
  },
  "lemons-in-fridge": {
    "materialThermal": {
      "property": "Cold-Holding Microbial Latency Threshold",
      "threshold": "Danger Zone Threshold 40°F (4.4°C); Freezing Solidification 32°F",
      "details": "Continuous temperature control below 40°F drastically slows enzyme kinetics and microbiological spoilage rates in perishable food matrices."
    },
    "safetyStandard": {
      "organization": "FDA / USDA FSIS",
      "standard": "FDA Food Code 2022 § 3-501.16 / USDA Cold Storage Guidelines",
      "citation": "Perishable foods must be held continuously at or below 40°F (4.4°C) to maintain food safety."
    },
    "applianceSpecs": {
      "parameter": "Consistent Interior Cold Maintenance",
      "guideline": "Store on interior refrigerator shelves (34°F–38°F) in airtight sealed containers to prevent cross-contamination and moisture loss."
    }
  },
  "limes-in-fridge": {
    "materialThermal": {
      "property": "Cold-Holding Microbial Latency Threshold",
      "threshold": "Danger Zone Threshold 40°F (4.4°C); Freezing Solidification 32°F",
      "details": "Continuous temperature control below 40°F drastically slows enzyme kinetics and microbiological spoilage rates in perishable food matrices."
    },
    "safetyStandard": {
      "organization": "FDA / USDA FSIS",
      "standard": "FDA Food Code 2022 § 3-501.16 / USDA Cold Storage Guidelines",
      "citation": "Perishable foods must be held continuously at or below 40°F (4.4°C) to maintain food safety."
    },
    "applianceSpecs": {
      "parameter": "Consistent Interior Cold Maintenance",
      "guideline": "Store on interior refrigerator shelves (34°F–38°F) in airtight sealed containers to prevent cross-contamination and moisture loss."
    }
  },
  "mayo-in-fridge": {
    "materialThermal": {
      "property": "Cold-Holding Microbial Latency Threshold",
      "threshold": "Danger Zone Threshold 40°F (4.4°C); Freezing Solidification 32°F",
      "details": "Continuous temperature control below 40°F drastically slows enzyme kinetics and microbiological spoilage rates in perishable food matrices."
    },
    "safetyStandard": {
      "organization": "FDA / USDA FSIS",
      "standard": "FDA Food Code 2022 § 3-501.16 / USDA Cold Storage Guidelines",
      "citation": "Perishable foods must be held continuously at or below 40°F (4.4°C) to maintain food safety."
    },
    "applianceSpecs": {
      "parameter": "Consistent Interior Cold Maintenance",
      "guideline": "Store on interior refrigerator shelves (34°F–38°F) in airtight sealed containers to prevent cross-contamination and moisture loss."
    }
  },
  "ketchup-in-fridge": {
    "materialThermal": {
      "property": "Cold-Holding Microbial Latency Threshold",
      "threshold": "Danger Zone Threshold 40°F (4.4°C); Freezing Solidification 32°F",
      "details": "Continuous temperature control below 40°F drastically slows enzyme kinetics and microbiological spoilage rates in perishable food matrices."
    },
    "safetyStandard": {
      "organization": "FDA / USDA FSIS",
      "standard": "FDA Food Code 2022 § 3-501.16 / USDA Cold Storage Guidelines",
      "citation": "Perishable foods must be held continuously at or below 40°F (4.4°C) to maintain food safety."
    },
    "applianceSpecs": {
      "parameter": "Consistent Interior Cold Maintenance",
      "guideline": "Store on interior refrigerator shelves (34°F–38°F) in airtight sealed containers to prevent cross-contamination and moisture loss."
    }
  },
  "mustard-in-fridge": {
    "materialThermal": {
      "property": "Cold-Holding Microbial Latency Threshold",
      "threshold": "Danger Zone Threshold 40°F (4.4°C); Freezing Solidification 32°F",
      "details": "Continuous temperature control below 40°F drastically slows enzyme kinetics and microbiological spoilage rates in perishable food matrices."
    },
    "safetyStandard": {
      "organization": "FDA / USDA FSIS",
      "standard": "FDA Food Code 2022 § 3-501.16 / USDA Cold Storage Guidelines",
      "citation": "Perishable foods must be held continuously at or below 40°F (4.4°C) to maintain food safety."
    },
    "applianceSpecs": {
      "parameter": "Consistent Interior Cold Maintenance",
      "guideline": "Store on interior refrigerator shelves (34°F–38°F) in airtight sealed containers to prevent cross-contamination and moisture loss."
    }
  },
  "salad-dressing-in-fridge": {
    "materialThermal": {
      "property": "Cold-Holding Microbial Latency Threshold",
      "threshold": "Danger Zone Threshold 40°F (4.4°C); Freezing Solidification 32°F",
      "details": "Continuous temperature control below 40°F drastically slows enzyme kinetics and microbiological spoilage rates in perishable food matrices."
    },
    "safetyStandard": {
      "organization": "FDA / USDA FSIS",
      "standard": "FDA Food Code 2022 § 3-501.16 / USDA Cold Storage Guidelines",
      "citation": "Perishable foods must be held continuously at or below 40°F (4.4°C) to maintain food safety."
    },
    "applianceSpecs": {
      "parameter": "Consistent Interior Cold Maintenance",
      "guideline": "Store on interior refrigerator shelves (34°F–38°F) in airtight sealed containers to prevent cross-contamination and moisture loss."
    }
  },
  "opened-wine-in-fridge": {
    "materialThermal": {
      "property": "Cold-Holding Microbial Latency Threshold",
      "threshold": "Danger Zone Threshold 40°F (4.4°C); Freezing Solidification 32°F",
      "details": "Continuous temperature control below 40°F drastically slows enzyme kinetics and microbiological spoilage rates in perishable food matrices."
    },
    "safetyStandard": {
      "organization": "FDA / USDA FSIS",
      "standard": "FDA Food Code 2022 § 3-501.16 / USDA Cold Storage Guidelines",
      "citation": "Perishable foods must be held continuously at or below 40°F (4.4°C) to maintain food safety."
    },
    "applianceSpecs": {
      "parameter": "Consistent Interior Cold Maintenance",
      "guideline": "Store on interior refrigerator shelves (34°F–38°F) in airtight sealed containers to prevent cross-contamination and moisture loss."
    }
  },
  "opened-beer-in-fridge": {
    "materialThermal": {
      "property": "Cold-Holding Microbial Latency Threshold",
      "threshold": "Danger Zone Threshold 40°F (4.4°C); Freezing Solidification 32°F",
      "details": "Continuous temperature control below 40°F drastically slows enzyme kinetics and microbiological spoilage rates in perishable food matrices."
    },
    "safetyStandard": {
      "organization": "FDA / USDA FSIS",
      "standard": "FDA Food Code 2022 § 3-501.16 / USDA Cold Storage Guidelines",
      "citation": "Perishable foods must be held continuously at or below 40°F (4.4°C) to maintain food safety."
    },
    "applianceSpecs": {
      "parameter": "Consistent Interior Cold Maintenance",
      "guideline": "Store on interior refrigerator shelves (34°F–38°F) in airtight sealed containers to prevent cross-contamination and moisture loss."
    }
  },
  "orange-juice-in-fridge": {
    "materialThermal": {
      "property": "Cold-Holding Microbial Latency Threshold",
      "threshold": "Danger Zone Threshold 40°F (4.4°C); Freezing Solidification 32°F",
      "details": "Continuous temperature control below 40°F drastically slows enzyme kinetics and microbiological spoilage rates in perishable food matrices."
    },
    "safetyStandard": {
      "organization": "FDA / USDA FSIS",
      "standard": "FDA Food Code 2022 § 3-501.16 / USDA Cold Storage Guidelines",
      "citation": "Perishable foods must be held continuously at or below 40°F (4.4°C) to maintain food safety."
    },
    "applianceSpecs": {
      "parameter": "Consistent Interior Cold Maintenance",
      "guideline": "Store on interior refrigerator shelves (34°F–38°F) in airtight sealed containers to prevent cross-contamination and moisture loss."
    }
  },
  "almond-milk-in-fridge": {
    "materialThermal": {
      "property": "Lactic Acid Bacteria Inactivation & Lipolysis",
      "threshold": "Psychrotrophic Spore Outgrowth >40°F (4.4°C); Shelf Life: 7 Days (Milk)",
      "details": "Pasteurized dairy holds cold-tolerant spore-formers that slowly metabolize lactose; steady cold suppresses souring and whey separation."
    },
    "safetyStandard": {
      "organization": "FDA",
      "standard": "Grade 'A' Pasteurized Milk Ordinance (PMO) 2019",
      "citation": "Maintain pasteurized milk at 40°F or lower; consume within 7 days of opening."
    },
    "applianceSpecs": {
      "parameter": "Main Interior Shelf (Avoid Door Bins)",
      "guideline": "Never store milk in door shelves where temperatures regularly reach 45°F; place in the coldest interior center shelf."
    }
  },
  "coconut-milk-in-fridge": {
    "materialThermal": {
      "property": "Lactic Acid Bacteria Inactivation & Lipolysis",
      "threshold": "Psychrotrophic Spore Outgrowth >40°F (4.4°C); Shelf Life: 7 Days (Milk)",
      "details": "Pasteurized dairy holds cold-tolerant spore-formers that slowly metabolize lactose; steady cold suppresses souring and whey separation."
    },
    "safetyStandard": {
      "organization": "FDA",
      "standard": "Grade 'A' Pasteurized Milk Ordinance (PMO) 2019",
      "citation": "Maintain pasteurized milk at 40°F or lower; consume within 7 days of opening."
    },
    "applianceSpecs": {
      "parameter": "Main Interior Shelf (Avoid Door Bins)",
      "guideline": "Never store milk in door shelves where temperatures regularly reach 45°F; place in the coldest interior center shelf."
    }
  },
  "hummus-in-fridge": {
    "materialThermal": {
      "property": "Cold-Holding Microbial Latency Threshold",
      "threshold": "Danger Zone Threshold 40°F (4.4°C); Freezing Solidification 32°F",
      "details": "Continuous temperature control below 40°F drastically slows enzyme kinetics and microbiological spoilage rates in perishable food matrices."
    },
    "safetyStandard": {
      "organization": "FDA / USDA FSIS",
      "standard": "FDA Food Code 2022 § 3-501.16 / USDA Cold Storage Guidelines",
      "citation": "Perishable foods must be held continuously at or below 40°F (4.4°C) to maintain food safety."
    },
    "applianceSpecs": {
      "parameter": "Consistent Interior Cold Maintenance",
      "guideline": "Store on interior refrigerator shelves (34°F–38°F) in airtight sealed containers to prevent cross-contamination and moisture loss."
    }
  },
  "guacamole-in-fridge": {
    "materialThermal": {
      "property": "Cold-Holding Microbial Latency Threshold",
      "threshold": "Danger Zone Threshold 40°F (4.4°C); Freezing Solidification 32°F",
      "details": "Continuous temperature control below 40°F drastically slows enzyme kinetics and microbiological spoilage rates in perishable food matrices."
    },
    "safetyStandard": {
      "organization": "FDA / USDA FSIS",
      "standard": "FDA Food Code 2022 § 3-501.16 / USDA Cold Storage Guidelines",
      "citation": "Perishable foods must be held continuously at or below 40°F (4.4°C) to maintain food safety."
    },
    "applianceSpecs": {
      "parameter": "Consistent Interior Cold Maintenance",
      "guideline": "Store on interior refrigerator shelves (34°F–38°F) in airtight sealed containers to prevent cross-contamination and moisture loss."
    }
  },
  "salsa-in-fridge": {
    "materialThermal": {
      "property": "Cold-Holding Microbial Latency Threshold",
      "threshold": "Danger Zone Threshold 40°F (4.4°C); Freezing Solidification 32°F",
      "details": "Continuous temperature control below 40°F drastically slows enzyme kinetics and microbiological spoilage rates in perishable food matrices."
    },
    "safetyStandard": {
      "organization": "FDA / USDA FSIS",
      "standard": "FDA Food Code 2022 § 3-501.16 / USDA Cold Storage Guidelines",
      "citation": "Perishable foods must be held continuously at or below 40°F (4.4°C) to maintain food safety."
    },
    "applianceSpecs": {
      "parameter": "Consistent Interior Cold Maintenance",
      "guideline": "Store on interior refrigerator shelves (34°F–38°F) in airtight sealed containers to prevent cross-contamination and moisture loss."
    }
  },
  "leftover-chinese-food-in-fridge": {
    "materialThermal": {
      "property": "Spore-Forming Bacterial Growth & Enterotoxin Production",
      "threshold": "Danger Zone 40°F–140°F (4.4°C–60°C); Safe Storage 3–4 Days",
      "details": "Bacillus cereus and Clostridium perfringens survive initial cooking. Once food cools into the Danger Zone, vegetative cells proliferate and produce toxins."
    },
    "safetyStandard": {
      "organization": "FDA",
      "standard": "FDA Food Code 2022 § 3-501.17 (TCS Food Date Marking)",
      "citation": "Cooked ready-to-eat leftovers must be stored at 41°F or below and discarded after a maximum of 4 days."
    },
    "applianceSpecs": {
      "parameter": "Shallow Container Cooling Protocol",
      "guideline": "Refrigerate leftovers within 2 hours of cooking in containers no deeper than 2 inches to ensure rapid temperature drop below 40°F."
    }
  },
  "leftover-pizza-in-fridge": {
    "materialThermal": {
      "property": "Spore-Forming Bacterial Growth & Enterotoxin Production",
      "threshold": "Danger Zone 40°F–140°F (4.4°C–60°C); Safe Storage 3–4 Days",
      "details": "Bacillus cereus and Clostridium perfringens survive initial cooking. Once food cools into the Danger Zone, vegetative cells proliferate and produce toxins."
    },
    "safetyStandard": {
      "organization": "FDA",
      "standard": "FDA Food Code 2022 § 3-501.17 (TCS Food Date Marking)",
      "citation": "Cooked ready-to-eat leftovers must be stored at 41°F or below and discarded after a maximum of 4 days."
    },
    "applianceSpecs": {
      "parameter": "Shallow Container Cooling Protocol",
      "guideline": "Refrigerate leftovers within 2 hours of cooking in containers no deeper than 2 inches to ensure rapid temperature drop below 40°F."
    }
  },
  "cooked-vegetables-in-fridge": {
    "materialThermal": {
      "property": "Cold-Holding Microbial Latency Threshold",
      "threshold": "Danger Zone Threshold 40°F (4.4°C); Freezing Solidification 32°F",
      "details": "Continuous temperature control below 40°F drastically slows enzyme kinetics and microbiological spoilage rates in perishable food matrices."
    },
    "safetyStandard": {
      "organization": "FDA / USDA FSIS",
      "standard": "FDA Food Code 2022 § 3-501.16 / USDA Cold Storage Guidelines",
      "citation": "Perishable foods must be held continuously at or below 40°F (4.4°C) to maintain food safety."
    },
    "applianceSpecs": {
      "parameter": "Consistent Interior Cold Maintenance",
      "guideline": "Store on interior refrigerator shelves (34°F–38°F) in airtight sealed containers to prevent cross-contamination and moisture loss."
    }
  },
  "chicken-in-freezer": {
    "materialThermal": {
      "property": "Raw Poultry Psychrotrophic Replication Limit",
      "threshold": "Rapid Salmonella / Campylobacter Growth >40°F; Shelf Life: 1–2 Days",
      "details": "Surface moisture on raw poultry supports rapid psychrotrophic bacterial growth even at refrigerated temperatures, doubling bacterial count every 30 minutes at 50°F."
    },
    "safetyStandard": {
      "organization": "USDA FSIS",
      "standard": "FSIS Food Safety Guidelines (Poultry Storage)",
      "citation": "Raw poultry must be held at or below 40°F and prepared within 1–2 days of purchase, or frozen at 0°F for up to 9–12 months."
    },
    "applianceSpecs": {
      "parameter": "Bottom Shelf Coldest Placement (34°F–36°F)",
      "guideline": "Keep on the lowest shelf in a leak-proof container to prevent drippage onto ready-to-eat foods; cook or freeze within 48 hours."
    }
  },
  "ground-beef-in-freezer": {
    "materialThermal": {
      "property": "Comminuted Meat Aerobic Spoilage Kinetics",
      "threshold": "High Surface Area Aerobic Spoilage >40°F; Shelf Life: 1–2 Days",
      "details": "Grinding incorporates air and mixes surface pathogens throughout the meat, drastically shortening microbial lag time compared to whole muscle cuts."
    },
    "safetyStandard": {
      "organization": "USDA FSIS",
      "standard": "FSIS Directive 5000.1 / Meat Storage Chart",
      "citation": "Ground beef and pork should be stored at <=40°F for no more than 1–2 days, or frozen at 0°F for 3–4 months."
    },
    "applianceSpecs": {
      "parameter": "Back of Refrigerator Cold Stability",
      "guideline": "Store raw ground meats in the coldest rear section of the bottom shelf at 33°F–36°F; never leave on door shelves."
    }
  },
  "salmon-in-freezer": {
    "materialThermal": {
      "property": "Psychrotrophic Proteolysis & TMAO Breakdown",
      "threshold": "Psychrotolerant Spoilage >32°F (0°C); Shelf Life: 1–2 Days",
      "details": "Marine bacteria (Pseudomonas, Shewanella) remain active even near 32°F, breaking down trimethylamine oxide and producing ammonia-like off-odors."
    },
    "safetyStandard": {
      "organization": "FDA",
      "standard": "FDA Fish and Fishery Products Hazards and Controls Guidance",
      "citation": "Raw fresh seafood must be stored at <=38°F (ideally 32°F–34°F) and consumed within 1–2 days, or frozen at 0°F for up to 6 months."
    },
    "applianceSpecs": {
      "parameter": "Crushed Ice Drain Pan / Coldest Zone",
      "guideline": "Store on the bottom shelf resting over a bowl of crushed draining ice (32°F–34°F) to maximize freshness."
    }
  },
  "shrimp-in-freezer": {
    "materialThermal": {
      "property": "Psychrotrophic Proteolysis & TMAO Breakdown",
      "threshold": "Psychrotolerant Spoilage >32°F (0°C); Shelf Life: 1–2 Days",
      "details": "Marine bacteria (Pseudomonas, Shewanella) remain active even near 32°F, breaking down trimethylamine oxide and producing ammonia-like off-odors."
    },
    "safetyStandard": {
      "organization": "FDA",
      "standard": "FDA Fish and Fishery Products Hazards and Controls Guidance",
      "citation": "Raw fresh seafood must be stored at <=38°F (ideally 32°F–34°F) and consumed within 1–2 days, or frozen at 0°F for up to 6 months."
    },
    "applianceSpecs": {
      "parameter": "Crushed Ice Drain Pan / Coldest Zone",
      "guideline": "Store on the bottom shelf resting over a bowl of crushed draining ice (32°F–34°F) to maximize freshness."
    }
  },
  "bacon-in-freezer": {
    "materialThermal": {
      "property": "Whole Muscle Myoglobin Oxidation & Microbial Latency",
      "threshold": "Browning Oxidation >38°F (3.3°C); Shelf Life: 3–5 Days",
      "details": "Intact muscle tissue has an internal sterile environment; surface bacteria are delayed at 34°F–38°F, giving intact steaks and roasts 3–5 days of safe storage."
    },
    "safetyStandard": {
      "organization": "USDA FSIS",
      "standard": "FSIS Cold Storage Specifications",
      "citation": "Raw steaks, chops, and roasts remain safe for 3–5 days at <=40°F, or 6–12 months frozen at 0°F."
    },
    "applianceSpecs": {
      "parameter": "Lowest Shelf Drip Protection",
      "guideline": "Place on the lowest shelf in original butcher wrap or rimmed plate at 34°F–36°F to contain juices."
    }
  },
  "ham-in-freezer": {
    "materialThermal": {
      "property": "Whole Muscle Myoglobin Oxidation & Microbial Latency",
      "threshold": "Browning Oxidation >38°F (3.3°C); Shelf Life: 3–5 Days",
      "details": "Intact muscle tissue has an internal sterile environment; surface bacteria are delayed at 34°F–38°F, giving intact steaks and roasts 3–5 days of safe storage."
    },
    "safetyStandard": {
      "organization": "USDA FSIS",
      "standard": "FSIS Cold Storage Specifications",
      "citation": "Raw steaks, chops, and roasts remain safe for 3–5 days at <=40°F, or 6–12 months frozen at 0°F."
    },
    "applianceSpecs": {
      "parameter": "Lowest Shelf Drip Protection",
      "guideline": "Place on the lowest shelf in original butcher wrap or rimmed plate at 34°F–36°F to contain juices."
    }
  },
  "turkey-in-freezer": {
    "materialThermal": {
      "property": "Raw Poultry Psychrotrophic Replication Limit",
      "threshold": "Rapid Salmonella / Campylobacter Growth >40°F; Shelf Life: 1–2 Days",
      "details": "Surface moisture on raw poultry supports rapid psychrotrophic bacterial growth even at refrigerated temperatures, doubling bacterial count every 30 minutes at 50°F."
    },
    "safetyStandard": {
      "organization": "USDA FSIS",
      "standard": "FSIS Food Safety Guidelines (Poultry Storage)",
      "citation": "Raw poultry must be held at or below 40°F and prepared within 1–2 days of purchase, or frozen at 0°F for up to 9–12 months."
    },
    "applianceSpecs": {
      "parameter": "Bottom Shelf Coldest Placement (34°F–36°F)",
      "guideline": "Keep on the lowest shelf in a leak-proof container to prevent drippage onto ready-to-eat foods; cook or freeze within 48 hours."
    }
  },
  "hot-dogs-in-freezer": {
    "materialThermal": {
      "property": "Cured / Cooked Meat Spoilage & Nitrate Stability",
      "threshold": "Listeria Proliferation >40°F (4.4°C); Shelf Life: 3–5 Days",
      "details": "Cooked meats are sterile initially, but exposure to room air post-cooking introduces spoilage bacteria that replicate in the 40°F–140°F Danger Zone."
    },
    "safetyStandard": {
      "organization": "USDA FSIS",
      "standard": "9 CFR § 318.23 / FSIS Leftover Storage Guidelines",
      "citation": "Refrigerate cooked meats within 2 hours at <=40°F; consume within 3–4 days (opened deli meats 3–5 days)."
    },
    "applianceSpecs": {
      "parameter": "Meat Drawer Chilling Zone",
      "guideline": "Store in a dedicated meat drawer or middle shelf (34°F–37°F) sealed in airtight containers or original resealed pouches."
    }
  },
  "bread-in-freezer": {
    "materialThermal": {
      "property": "Cold-Holding Microbial Latency Threshold",
      "threshold": "Danger Zone Threshold 40°F (4.4°C); Freezing Solidification 32°F",
      "details": "Continuous temperature control below 40°F drastically slows enzyme kinetics and microbiological spoilage rates in perishable food matrices."
    },
    "safetyStandard": {
      "organization": "FDA / USDA FSIS",
      "standard": "FDA Food Code 2022 § 3-501.16 / USDA Cold Storage Guidelines",
      "citation": "Perishable foods must be held continuously at or below 40°F (4.4°C) to maintain food safety."
    },
    "applianceSpecs": {
      "parameter": "Consistent Interior Cold Maintenance",
      "guideline": "Store on interior refrigerator shelves (34°F–38°F) in airtight sealed containers to prevent cross-contamination and moisture loss."
    }
  },
  "cooked-rice-in-freezer": {
    "materialThermal": {
      "property": "Spore-Forming Bacterial Growth & Enterotoxin Production",
      "threshold": "Danger Zone 40°F–140°F (4.4°C–60°C); Safe Storage 3–4 Days",
      "details": "Bacillus cereus and Clostridium perfringens survive initial cooking. Once food cools into the Danger Zone, vegetative cells proliferate and produce toxins."
    },
    "safetyStandard": {
      "organization": "FDA",
      "standard": "FDA Food Code 2022 § 3-501.17 (TCS Food Date Marking)",
      "citation": "Cooked ready-to-eat leftovers must be stored at 41°F or below and discarded after a maximum of 4 days."
    },
    "applianceSpecs": {
      "parameter": "Shallow Container Cooling Protocol",
      "guideline": "Refrigerate leftovers within 2 hours of cooking in containers no deeper than 2 inches to ensure rapid temperature drop below 40°F."
    }
  },
  "cooked-pasta-in-freezer": {
    "materialThermal": {
      "property": "Spore-Forming Bacterial Growth & Enterotoxin Production",
      "threshold": "Danger Zone 40°F–140°F (4.4°C–60°C); Safe Storage 3–4 Days",
      "details": "Bacillus cereus and Clostridium perfringens survive initial cooking. Once food cools into the Danger Zone, vegetative cells proliferate and produce toxins."
    },
    "safetyStandard": {
      "organization": "FDA",
      "standard": "FDA Food Code 2022 § 3-501.17 (TCS Food Date Marking)",
      "citation": "Cooked ready-to-eat leftovers must be stored at 41°F or below and discarded after a maximum of 4 days."
    },
    "applianceSpecs": {
      "parameter": "Shallow Container Cooling Protocol",
      "guideline": "Refrigerate leftovers within 2 hours of cooking in containers no deeper than 2 inches to ensure rapid temperature drop below 40°F."
    }
  },
  "soup-in-freezer": {
    "materialThermal": {
      "property": "Spore-Forming Bacterial Growth & Enterotoxin Production",
      "threshold": "Danger Zone 40°F–140°F (4.4°C–60°C); Safe Storage 3–4 Days",
      "details": "Bacillus cereus and Clostridium perfringens survive initial cooking. Once food cools into the Danger Zone, vegetative cells proliferate and produce toxins."
    },
    "safetyStandard": {
      "organization": "FDA",
      "standard": "FDA Food Code 2022 § 3-501.17 (TCS Food Date Marking)",
      "citation": "Cooked ready-to-eat leftovers must be stored at 41°F or below and discarded after a maximum of 4 days."
    },
    "applianceSpecs": {
      "parameter": "Shallow Container Cooling Protocol",
      "guideline": "Refrigerate leftovers within 2 hours of cooking in containers no deeper than 2 inches to ensure rapid temperature drop below 40°F."
    }
  },
  "pizza-in-freezer": {
    "materialThermal": {
      "property": "Spore-Forming Bacterial Growth & Enterotoxin Production",
      "threshold": "Danger Zone 40°F–140°F (4.4°C–60°C); Safe Storage 3–4 Days",
      "details": "Bacillus cereus and Clostridium perfringens survive initial cooking. Once food cools into the Danger Zone, vegetative cells proliferate and produce toxins."
    },
    "safetyStandard": {
      "organization": "FDA",
      "standard": "FDA Food Code 2022 § 3-501.17 (TCS Food Date Marking)",
      "citation": "Cooked ready-to-eat leftovers must be stored at 41°F or below and discarded after a maximum of 4 days."
    },
    "applianceSpecs": {
      "parameter": "Shallow Container Cooling Protocol",
      "guideline": "Refrigerate leftovers within 2 hours of cooking in containers no deeper than 2 inches to ensure rapid temperature drop below 40°F."
    }
  },
  "butter-in-freezer": {
    "materialThermal": {
      "property": "Lactic Acid Bacteria Inactivation & Lipolysis",
      "threshold": "Psychrotrophic Spore Outgrowth >40°F (4.4°C); Shelf Life: 7 Days (Milk)",
      "details": "Pasteurized dairy holds cold-tolerant spore-formers that slowly metabolize lactose; steady cold suppresses souring and whey separation."
    },
    "safetyStandard": {
      "organization": "FDA",
      "standard": "Grade 'A' Pasteurized Milk Ordinance (PMO) 2019",
      "citation": "Maintain pasteurized milk at 40°F or lower; consume within 7 days of opening."
    },
    "applianceSpecs": {
      "parameter": "Main Interior Shelf (Avoid Door Bins)",
      "guideline": "Never store milk in door shelves where temperatures regularly reach 45°F; place in the coldest interior center shelf."
    }
  },
  "milk-in-freezer": {
    "materialThermal": {
      "property": "Lactic Acid Bacteria Inactivation & Lipolysis",
      "threshold": "Psychrotrophic Spore Outgrowth >40°F (4.4°C); Shelf Life: 7 Days (Milk)",
      "details": "Pasteurized dairy holds cold-tolerant spore-formers that slowly metabolize lactose; steady cold suppresses souring and whey separation."
    },
    "safetyStandard": {
      "organization": "FDA",
      "standard": "Grade 'A' Pasteurized Milk Ordinance (PMO) 2019",
      "citation": "Maintain pasteurized milk at 40°F or lower; consume within 7 days of opening."
    },
    "applianceSpecs": {
      "parameter": "Main Interior Shelf (Avoid Door Bins)",
      "guideline": "Never store milk in door shelves where temperatures regularly reach 45°F; place in the coldest interior center shelf."
    }
  },
  "eggs-in-freezer": {
    "materialThermal": {
      "property": "Vitelline Membrane Integrity & Salmonella Dormancy",
      "threshold": "Refrigerated Dormancy <=45°F (7.2°C); Shelf Life: 3–5 Weeks",
      "details": "Intact shell eggs maintain strong albumen antimicrobial enzymes (lysozyme) and vitelline membranes for over a month when kept cold and unwashed."
    },
    "safetyStandard": {
      "organization": "FDA",
      "standard": "21 CFR Part 118 (Egg Safety Rule)",
      "citation": "Store shell eggs continuously at or below 45°F (7.2°C); hard-boiled eggs must be refrigerated and consumed within 7 days."
    },
    "applianceSpecs": {
      "parameter": "Original Carton Main Shelf Placement",
      "guideline": "Store in original cardboard carton on a middle shelf (35°F–38°F); carton shields porous shells from odors and humidity loss."
    }
  },
  "strawberries-in-freezer": {
    "materialThermal": {
      "property": "Cold-Holding Microbial Latency Threshold",
      "threshold": "Danger Zone Threshold 40°F (4.4°C); Freezing Solidification 32°F",
      "details": "Continuous temperature control below 40°F drastically slows enzyme kinetics and microbiological spoilage rates in perishable food matrices."
    },
    "safetyStandard": {
      "organization": "FDA / USDA FSIS",
      "standard": "FDA Food Code 2022 § 3-501.16 / USDA Cold Storage Guidelines",
      "citation": "Perishable foods must be held continuously at or below 40°F (4.4°C) to maintain food safety."
    },
    "applianceSpecs": {
      "parameter": "Consistent Interior Cold Maintenance",
      "guideline": "Store on interior refrigerator shelves (34°F–38°F) in airtight sealed containers to prevent cross-contamination and moisture loss."
    }
  },
  "blueberries-in-freezer": {
    "materialThermal": {
      "property": "Cold-Holding Microbial Latency Threshold",
      "threshold": "Danger Zone Threshold 40°F (4.4°C); Freezing Solidification 32°F",
      "details": "Continuous temperature control below 40°F drastically slows enzyme kinetics and microbiological spoilage rates in perishable food matrices."
    },
    "safetyStandard": {
      "organization": "FDA / USDA FSIS",
      "standard": "FDA Food Code 2022 § 3-501.16 / USDA Cold Storage Guidelines",
      "citation": "Perishable foods must be held continuously at or below 40°F (4.4°C) to maintain food safety."
    },
    "applianceSpecs": {
      "parameter": "Consistent Interior Cold Maintenance",
      "guideline": "Store on interior refrigerator shelves (34°F–38°F) in airtight sealed containers to prevent cross-contamination and moisture loss."
    }
  },
  "bananas-in-freezer": {
    "materialThermal": {
      "property": "Cold-Holding Microbial Latency Threshold",
      "threshold": "Danger Zone Threshold 40°F (4.4°C); Freezing Solidification 32°F",
      "details": "Continuous temperature control below 40°F drastically slows enzyme kinetics and microbiological spoilage rates in perishable food matrices."
    },
    "safetyStandard": {
      "organization": "FDA / USDA FSIS",
      "standard": "FDA Food Code 2022 § 3-501.16 / USDA Cold Storage Guidelines",
      "citation": "Perishable foods must be held continuously at or below 40°F (4.4°C) to maintain food safety."
    },
    "applianceSpecs": {
      "parameter": "Consistent Interior Cold Maintenance",
      "guideline": "Store on interior refrigerator shelves (34°F–38°F) in airtight sealed containers to prevent cross-contamination and moisture loss."
    }
  },
  "avocado-in-freezer": {
    "materialThermal": {
      "property": "Cold-Holding Microbial Latency Threshold",
      "threshold": "Danger Zone Threshold 40°F (4.4°C); Freezing Solidification 32°F",
      "details": "Continuous temperature control below 40°F drastically slows enzyme kinetics and microbiological spoilage rates in perishable food matrices."
    },
    "safetyStandard": {
      "organization": "FDA / USDA FSIS",
      "standard": "FDA Food Code 2022 § 3-501.16 / USDA Cold Storage Guidelines",
      "citation": "Perishable foods must be held continuously at or below 40°F (4.4°C) to maintain food safety."
    },
    "applianceSpecs": {
      "parameter": "Consistent Interior Cold Maintenance",
      "guideline": "Store on interior refrigerator shelves (34°F–38°F) in airtight sealed containers to prevent cross-contamination and moisture loss."
    }
  },
  "spinach-in-freezer": {
    "materialThermal": {
      "property": "Cold-Holding Microbial Latency Threshold",
      "threshold": "Danger Zone Threshold 40°F (4.4°C); Freezing Solidification 32°F",
      "details": "Continuous temperature control below 40°F drastically slows enzyme kinetics and microbiological spoilage rates in perishable food matrices."
    },
    "safetyStandard": {
      "organization": "FDA / USDA FSIS",
      "standard": "FDA Food Code 2022 § 3-501.16 / USDA Cold Storage Guidelines",
      "citation": "Perishable foods must be held continuously at or below 40°F (4.4°C) to maintain food safety."
    },
    "applianceSpecs": {
      "parameter": "Consistent Interior Cold Maintenance",
      "guideline": "Store on interior refrigerator shelves (34°F–38°F) in airtight sealed containers to prevent cross-contamination and moisture loss."
    }
  },
  "broccoli-in-freezer": {
    "materialThermal": {
      "property": "Cold-Holding Microbial Latency Threshold",
      "threshold": "Danger Zone Threshold 40°F (4.4°C); Freezing Solidification 32°F",
      "details": "Continuous temperature control below 40°F drastically slows enzyme kinetics and microbiological spoilage rates in perishable food matrices."
    },
    "safetyStandard": {
      "organization": "FDA / USDA FSIS",
      "standard": "FDA Food Code 2022 § 3-501.16 / USDA Cold Storage Guidelines",
      "citation": "Perishable foods must be held continuously at or below 40°F (4.4°C) to maintain food safety."
    },
    "applianceSpecs": {
      "parameter": "Consistent Interior Cold Maintenance",
      "guideline": "Store on interior refrigerator shelves (34°F–38°F) in airtight sealed containers to prevent cross-contamination and moisture loss."
    }
  },
  "corn-in-freezer": {
    "materialThermal": {
      "property": "Cold-Holding Microbial Latency Threshold",
      "threshold": "Danger Zone Threshold 40°F (4.4°C); Freezing Solidification 32°F",
      "details": "Continuous temperature control below 40°F drastically slows enzyme kinetics and microbiological spoilage rates in perishable food matrices."
    },
    "safetyStandard": {
      "organization": "FDA / USDA FSIS",
      "standard": "FDA Food Code 2022 § 3-501.16 / USDA Cold Storage Guidelines",
      "citation": "Perishable foods must be held continuously at or below 40°F (4.4°C) to maintain food safety."
    },
    "applianceSpecs": {
      "parameter": "Consistent Interior Cold Maintenance",
      "guideline": "Store on interior refrigerator shelves (34°F–38°F) in airtight sealed containers to prevent cross-contamination and moisture loss."
    }
  },
  "peas-in-freezer": {
    "materialThermal": {
      "property": "Cold-Holding Microbial Latency Threshold",
      "threshold": "Danger Zone Threshold 40°F (4.4°C); Freezing Solidification 32°F",
      "details": "Continuous temperature control below 40°F drastically slows enzyme kinetics and microbiological spoilage rates in perishable food matrices."
    },
    "safetyStandard": {
      "organization": "FDA / USDA FSIS",
      "standard": "FDA Food Code 2022 § 3-501.16 / USDA Cold Storage Guidelines",
      "citation": "Perishable foods must be held continuously at or below 40°F (4.4°C) to maintain food safety."
    },
    "applianceSpecs": {
      "parameter": "Consistent Interior Cold Maintenance",
      "guideline": "Store on interior refrigerator shelves (34°F–38°F) in airtight sealed containers to prevent cross-contamination and moisture loss."
    }
  },
  "ice-cream-in-freezer": {
    "materialThermal": {
      "property": "Lactic Acid Bacteria Inactivation & Lipolysis",
      "threshold": "Psychrotrophic Spore Outgrowth >40°F (4.4°C); Shelf Life: 7 Days (Milk)",
      "details": "Pasteurized dairy holds cold-tolerant spore-formers that slowly metabolize lactose; steady cold suppresses souring and whey separation."
    },
    "safetyStandard": {
      "organization": "FDA",
      "standard": "Grade 'A' Pasteurized Milk Ordinance (PMO) 2019",
      "citation": "Maintain pasteurized milk at 40°F or lower; consume within 7 days of opening."
    },
    "applianceSpecs": {
      "parameter": "Main Interior Shelf (Avoid Door Bins)",
      "guideline": "Never store milk in door shelves where temperatures regularly reach 45°F; place in the coldest interior center shelf."
    }
  },
  "cookie-dough-in-freezer": {
    "materialThermal": {
      "property": "Cold-Holding Microbial Latency Threshold",
      "threshold": "Danger Zone Threshold 40°F (4.4°C); Freezing Solidification 32°F",
      "details": "Continuous temperature control below 40°F drastically slows enzyme kinetics and microbiological spoilage rates in perishable food matrices."
    },
    "safetyStandard": {
      "organization": "FDA / USDA FSIS",
      "standard": "FDA Food Code 2022 § 3-501.16 / USDA Cold Storage Guidelines",
      "citation": "Perishable foods must be held continuously at or below 40°F (4.4°C) to maintain food safety."
    },
    "applianceSpecs": {
      "parameter": "Consistent Interior Cold Maintenance",
      "guideline": "Store on interior refrigerator shelves (34°F–38°F) in airtight sealed containers to prevent cross-contamination and moisture loss."
    }
  },
  "cake-in-freezer": {
    "materialThermal": {
      "property": "Cold-Holding Microbial Latency Threshold",
      "threshold": "Danger Zone Threshold 40°F (4.4°C); Freezing Solidification 32°F",
      "details": "Continuous temperature control below 40°F drastically slows enzyme kinetics and microbiological spoilage rates in perishable food matrices."
    },
    "safetyStandard": {
      "organization": "FDA / USDA FSIS",
      "standard": "FDA Food Code 2022 § 3-501.16 / USDA Cold Storage Guidelines",
      "citation": "Perishable foods must be held continuously at or below 40°F (4.4°C) to maintain food safety."
    },
    "applianceSpecs": {
      "parameter": "Consistent Interior Cold Maintenance",
      "guideline": "Store on interior refrigerator shelves (34°F–38°F) in airtight sealed containers to prevent cross-contamination and moisture loss."
    }
  },
  "breast-milk-in-freezer": {
    "materialThermal": {
      "property": "Lactic Acid Bacteria Inactivation & Lipolysis",
      "threshold": "Psychrotrophic Spore Outgrowth >40°F (4.4°C); Shelf Life: 7 Days (Milk)",
      "details": "Pasteurized dairy holds cold-tolerant spore-formers that slowly metabolize lactose; steady cold suppresses souring and whey separation."
    },
    "safetyStandard": {
      "organization": "FDA",
      "standard": "Grade 'A' Pasteurized Milk Ordinance (PMO) 2019",
      "citation": "Maintain pasteurized milk at 40°F or lower; consume within 7 days of opening."
    },
    "applianceSpecs": {
      "parameter": "Main Interior Shelf (Avoid Door Bins)",
      "guideline": "Never store milk in door shelves where temperatures regularly reach 45°F; place in the coldest interior center shelf."
    }
  },
  "baby-food-in-freezer": {
    "materialThermal": {
      "property": "Cold-Holding Microbial Latency Threshold",
      "threshold": "Danger Zone Threshold 40°F (4.4°C); Freezing Solidification 32°F",
      "details": "Continuous temperature control below 40°F drastically slows enzyme kinetics and microbiological spoilage rates in perishable food matrices."
    },
    "safetyStandard": {
      "organization": "FDA / USDA FSIS",
      "standard": "FDA Food Code 2022 § 3-501.16 / USDA Cold Storage Guidelines",
      "citation": "Perishable foods must be held continuously at or below 40°F (4.4°C) to maintain food safety."
    },
    "applianceSpecs": {
      "parameter": "Consistent Interior Cold Maintenance",
      "guideline": "Store on interior refrigerator shelves (34°F–38°F) in airtight sealed containers to prevent cross-contamination and moisture loss."
    }
  },
  "cheese-in-freezer": {
    "materialThermal": {
      "property": "Lactic Acid Bacteria Inactivation & Lipolysis",
      "threshold": "Psychrotrophic Spore Outgrowth >40°F (4.4°C); Shelf Life: 7 Days (Milk)",
      "details": "Pasteurized dairy holds cold-tolerant spore-formers that slowly metabolize lactose; steady cold suppresses souring and whey separation."
    },
    "safetyStandard": {
      "organization": "FDA",
      "standard": "Grade 'A' Pasteurized Milk Ordinance (PMO) 2019",
      "citation": "Maintain pasteurized milk at 40°F or lower; consume within 7 days of opening."
    },
    "applianceSpecs": {
      "parameter": "Main Interior Shelf (Avoid Door Bins)",
      "guideline": "Never store milk in door shelves where temperatures regularly reach 45°F; place in the coldest interior center shelf."
    }
  },
  "cooked-chicken-in-freezer": {
    "materialThermal": {
      "property": "Cooked Avian Protein Microbial Lag-Phase",
      "threshold": "Listeria Monocytogenes Proliferation >40°F (4.4°C); Safe Storage 3–4 Days",
      "details": "Cooked poultry has high water activity (aw ~0.98); refrigerating below 40°F prolongs the bacterial lag phase, preventing rapid vegetative replication."
    },
    "safetyStandard": {
      "organization": "FDA / USDA FSIS",
      "standard": "FDA Food Code 2022 § 3-501.17 / FSIS Cold Storage Chart",
      "citation": "Ready-to-eat cooked poultry must be refrigerated at <=40°F for a maximum of 3–4 days, or frozen at 0°F for 2–6 months."
    },
    "applianceSpecs": {
      "parameter": "Middle Refrigerator Shelf Temperature",
      "guideline": "Store in shallow airtight containers at 35°F–38°F; divide large portions so food drops below 40°F within 2 hours."
    }
  },
  "cooked-beef-in-freezer": {
    "materialThermal": {
      "property": "Cured / Cooked Meat Spoilage & Nitrate Stability",
      "threshold": "Listeria Proliferation >40°F (4.4°C); Shelf Life: 3–5 Days",
      "details": "Cooked meats are sterile initially, but exposure to room air post-cooking introduces spoilage bacteria that replicate in the 40°F–140°F Danger Zone."
    },
    "safetyStandard": {
      "organization": "USDA FSIS",
      "standard": "9 CFR § 318.23 / FSIS Leftover Storage Guidelines",
      "citation": "Refrigerate cooked meats within 2 hours at <=40°F; consume within 3–4 days (opened deli meats 3–5 days)."
    },
    "applianceSpecs": {
      "parameter": "Meat Drawer Chilling Zone",
      "guideline": "Store in a dedicated meat drawer or middle shelf (34°F–37°F) sealed in airtight containers or original resealed pouches."
    }
  },
  "cooked-shrimp-in-freezer": {
    "materialThermal": {
      "property": "Psychrotrophic Proteolysis & TMAO Breakdown",
      "threshold": "Psychrotolerant Spoilage >32°F (0°C); Shelf Life: 1–2 Days",
      "details": "Marine bacteria (Pseudomonas, Shewanella) remain active even near 32°F, breaking down trimethylamine oxide and producing ammonia-like off-odors."
    },
    "safetyStandard": {
      "organization": "FDA",
      "standard": "FDA Fish and Fishery Products Hazards and Controls Guidance",
      "citation": "Raw fresh seafood must be stored at <=38°F (ideally 32°F–34°F) and consumed within 1–2 days, or frozen at 0°F for up to 6 months."
    },
    "applianceSpecs": {
      "parameter": "Crushed Ice Drain Pan / Coldest Zone",
      "guideline": "Store on the bottom shelf resting over a bowl of crushed draining ice (32°F–34°F) to maximize freshness."
    }
  },
  "waffles-in-freezer": {
    "materialThermal": {
      "property": "Cold-Holding Microbial Latency Threshold",
      "threshold": "Danger Zone Threshold 40°F (4.4°C); Freezing Solidification 32°F",
      "details": "Continuous temperature control below 40°F drastically slows enzyme kinetics and microbiological spoilage rates in perishable food matrices."
    },
    "safetyStandard": {
      "organization": "FDA / USDA FSIS",
      "standard": "FDA Food Code 2022 § 3-501.16 / USDA Cold Storage Guidelines",
      "citation": "Perishable foods must be held continuously at or below 40°F (4.4°C) to maintain food safety."
    },
    "applianceSpecs": {
      "parameter": "Consistent Interior Cold Maintenance",
      "guideline": "Store on interior refrigerator shelves (34°F–38°F) in airtight sealed containers to prevent cross-contamination and moisture loss."
    }
  },
  "pancakes-in-freezer": {
    "materialThermal": {
      "property": "Cold-Holding Microbial Latency Threshold",
      "threshold": "Danger Zone Threshold 40°F (4.4°C); Freezing Solidification 32°F",
      "details": "Continuous temperature control below 40°F drastically slows enzyme kinetics and microbiological spoilage rates in perishable food matrices."
    },
    "safetyStandard": {
      "organization": "FDA / USDA FSIS",
      "standard": "FDA Food Code 2022 § 3-501.16 / USDA Cold Storage Guidelines",
      "citation": "Perishable foods must be held continuously at or below 40°F (4.4°C) to maintain food safety."
    },
    "applianceSpecs": {
      "parameter": "Consistent Interior Cold Maintenance",
      "guideline": "Store on interior refrigerator shelves (34°F–38°F) in airtight sealed containers to prevent cross-contamination and moisture loss."
    }
  },
  "lasagna-in-freezer": {
    "materialThermal": {
      "property": "Cold-Holding Microbial Latency Threshold",
      "threshold": "Danger Zone Threshold 40°F (4.4°C); Freezing Solidification 32°F",
      "details": "Continuous temperature control below 40°F drastically slows enzyme kinetics and microbiological spoilage rates in perishable food matrices."
    },
    "safetyStandard": {
      "organization": "FDA / USDA FSIS",
      "standard": "FDA Food Code 2022 § 3-501.16 / USDA Cold Storage Guidelines",
      "citation": "Perishable foods must be held continuously at or below 40°F (4.4°C) to maintain food safety."
    },
    "applianceSpecs": {
      "parameter": "Consistent Interior Cold Maintenance",
      "guideline": "Store on interior refrigerator shelves (34°F–38°F) in airtight sealed containers to prevent cross-contamination and moisture loss."
    }
  },
  "chili-in-freezer": {
    "materialThermal": {
      "property": "Spore-Forming Bacterial Growth & Enterotoxin Production",
      "threshold": "Danger Zone 40°F–140°F (4.4°C–60°C); Safe Storage 3–4 Days",
      "details": "Bacillus cereus and Clostridium perfringens survive initial cooking. Once food cools into the Danger Zone, vegetative cells proliferate and produce toxins."
    },
    "safetyStandard": {
      "organization": "FDA",
      "standard": "FDA Food Code 2022 § 3-501.17 (TCS Food Date Marking)",
      "citation": "Cooked ready-to-eat leftovers must be stored at 41°F or below and discarded after a maximum of 4 days."
    },
    "applianceSpecs": {
      "parameter": "Shallow Container Cooling Protocol",
      "guideline": "Refrigerate leftovers within 2 hours of cooking in containers no deeper than 2 inches to ensure rapid temperature drop below 40°F."
    }
  },
  "cookie-in-freezer": {
    "materialThermal": {
      "property": "Cold-Holding Microbial Latency Threshold",
      "threshold": "Danger Zone Threshold 40°F (4.4°C); Freezing Solidification 32°F",
      "details": "Continuous temperature control below 40°F drastically slows enzyme kinetics and microbiological spoilage rates in perishable food matrices."
    },
    "safetyStandard": {
      "organization": "FDA / USDA FSIS",
      "standard": "FDA Food Code 2022 § 3-501.16 / USDA Cold Storage Guidelines",
      "citation": "Perishable foods must be held continuously at or below 40°F (4.4°C) to maintain food safety."
    },
    "applianceSpecs": {
      "parameter": "Consistent Interior Cold Maintenance",
      "guideline": "Store on interior refrigerator shelves (34°F–38°F) in airtight sealed containers to prevent cross-contamination and moisture loss."
    }
  },
  "brownies-in-freezer": {
    "materialThermal": {
      "property": "Cold-Holding Microbial Latency Threshold",
      "threshold": "Danger Zone Threshold 40°F (4.4°C); Freezing Solidification 32°F",
      "details": "Continuous temperature control below 40°F drastically slows enzyme kinetics and microbiological spoilage rates in perishable food matrices."
    },
    "safetyStandard": {
      "organization": "FDA / USDA FSIS",
      "standard": "FDA Food Code 2022 § 3-501.16 / USDA Cold Storage Guidelines",
      "citation": "Perishable foods must be held continuously at or below 40°F (4.4°C) to maintain food safety."
    },
    "applianceSpecs": {
      "parameter": "Consistent Interior Cold Maintenance",
      "guideline": "Store on interior refrigerator shelves (34°F–38°F) in airtight sealed containers to prevent cross-contamination and moisture loss."
    }
  },
  "pie-in-freezer": {
    "materialThermal": {
      "property": "Cold-Holding Microbial Latency Threshold",
      "threshold": "Danger Zone Threshold 40°F (4.4°C); Freezing Solidification 32°F",
      "details": "Continuous temperature control below 40°F drastically slows enzyme kinetics and microbiological spoilage rates in perishable food matrices."
    },
    "safetyStandard": {
      "organization": "FDA / USDA FSIS",
      "standard": "FDA Food Code 2022 § 3-501.16 / USDA Cold Storage Guidelines",
      "citation": "Perishable foods must be held continuously at or below 40°F (4.4°C) to maintain food safety."
    },
    "applianceSpecs": {
      "parameter": "Consistent Interior Cold Maintenance",
      "guideline": "Store on interior refrigerator shelves (34°F–38°F) in airtight sealed containers to prevent cross-contamination and moisture loss."
    }
  },
  "bananas-in-counter": {
    "materialThermal": {
      "property": "Cold-Holding Microbial Latency Threshold",
      "threshold": "Danger Zone Threshold 40°F (4.4°C); Freezing Solidification 32°F",
      "details": "Continuous temperature control below 40°F drastically slows enzyme kinetics and microbiological spoilage rates in perishable food matrices."
    },
    "safetyStandard": {
      "organization": "FDA / USDA FSIS",
      "standard": "FDA Food Code 2022 § 3-501.16 / USDA Cold Storage Guidelines",
      "citation": "Perishable foods must be held continuously at or below 40°F (4.4°C) to maintain food safety."
    },
    "applianceSpecs": {
      "parameter": "Consistent Interior Cold Maintenance",
      "guideline": "Store on interior refrigerator shelves (34°F–38°F) in airtight sealed containers to prevent cross-contamination and moisture loss."
    }
  },
  "avocado-in-counter": {
    "materialThermal": {
      "property": "Cold-Holding Microbial Latency Threshold",
      "threshold": "Danger Zone Threshold 40°F (4.4°C); Freezing Solidification 32°F",
      "details": "Continuous temperature control below 40°F drastically slows enzyme kinetics and microbiological spoilage rates in perishable food matrices."
    },
    "safetyStandard": {
      "organization": "FDA / USDA FSIS",
      "standard": "FDA Food Code 2022 § 3-501.16 / USDA Cold Storage Guidelines",
      "citation": "Perishable foods must be held continuously at or below 40°F (4.4°C) to maintain food safety."
    },
    "applianceSpecs": {
      "parameter": "Consistent Interior Cold Maintenance",
      "guideline": "Store on interior refrigerator shelves (34°F–38°F) in airtight sealed containers to prevent cross-contamination and moisture loss."
    }
  },
  "tomatoes-in-counter": {
    "materialThermal": {
      "property": "Cold-Holding Microbial Latency Threshold",
      "threshold": "Danger Zone Threshold 40°F (4.4°C); Freezing Solidification 32°F",
      "details": "Continuous temperature control below 40°F drastically slows enzyme kinetics and microbiological spoilage rates in perishable food matrices."
    },
    "safetyStandard": {
      "organization": "FDA / USDA FSIS",
      "standard": "FDA Food Code 2022 § 3-501.16 / USDA Cold Storage Guidelines",
      "citation": "Perishable foods must be held continuously at or below 40°F (4.4°C) to maintain food safety."
    },
    "applianceSpecs": {
      "parameter": "Consistent Interior Cold Maintenance",
      "guideline": "Store on interior refrigerator shelves (34°F–38°F) in airtight sealed containers to prevent cross-contamination and moisture loss."
    }
  },
  "potatoes-in-pantry": {
    "materialThermal": {
      "property": "Cold-Holding Microbial Latency Threshold",
      "threshold": "Danger Zone Threshold 40°F (4.4°C); Freezing Solidification 32°F",
      "details": "Continuous temperature control below 40°F drastically slows enzyme kinetics and microbiological spoilage rates in perishable food matrices."
    },
    "safetyStandard": {
      "organization": "FDA / USDA FSIS",
      "standard": "FDA Food Code 2022 § 3-501.16 / USDA Cold Storage Guidelines",
      "citation": "Perishable foods must be held continuously at or below 40°F (4.4°C) to maintain food safety."
    },
    "applianceSpecs": {
      "parameter": "Consistent Interior Cold Maintenance",
      "guideline": "Store on interior refrigerator shelves (34°F–38°F) in airtight sealed containers to prevent cross-contamination and moisture loss."
    }
  },
  "onions-in-pantry": {
    "materialThermal": {
      "property": "Cold-Holding Microbial Latency Threshold",
      "threshold": "Danger Zone Threshold 40°F (4.4°C); Freezing Solidification 32°F",
      "details": "Continuous temperature control below 40°F drastically slows enzyme kinetics and microbiological spoilage rates in perishable food matrices."
    },
    "safetyStandard": {
      "organization": "FDA / USDA FSIS",
      "standard": "FDA Food Code 2022 § 3-501.16 / USDA Cold Storage Guidelines",
      "citation": "Perishable foods must be held continuously at or below 40°F (4.4°C) to maintain food safety."
    },
    "applianceSpecs": {
      "parameter": "Consistent Interior Cold Maintenance",
      "guideline": "Store on interior refrigerator shelves (34°F–38°F) in airtight sealed containers to prevent cross-contamination and moisture loss."
    }
  },
  "garlic-in-pantry": {
    "materialThermal": {
      "property": "Cold-Holding Microbial Latency Threshold",
      "threshold": "Danger Zone Threshold 40°F (4.4°C); Freezing Solidification 32°F",
      "details": "Continuous temperature control below 40°F drastically slows enzyme kinetics and microbiological spoilage rates in perishable food matrices."
    },
    "safetyStandard": {
      "organization": "FDA / USDA FSIS",
      "standard": "FDA Food Code 2022 § 3-501.16 / USDA Cold Storage Guidelines",
      "citation": "Perishable foods must be held continuously at or below 40°F (4.4°C) to maintain food safety."
    },
    "applianceSpecs": {
      "parameter": "Consistent Interior Cold Maintenance",
      "guideline": "Store on interior refrigerator shelves (34°F–38°F) in airtight sealed containers to prevent cross-contamination and moisture loss."
    }
  },
  "bread-in-counter": {
    "materialThermal": {
      "property": "Cold-Holding Microbial Latency Threshold",
      "threshold": "Danger Zone Threshold 40°F (4.4°C); Freezing Solidification 32°F",
      "details": "Continuous temperature control below 40°F drastically slows enzyme kinetics and microbiological spoilage rates in perishable food matrices."
    },
    "safetyStandard": {
      "organization": "FDA / USDA FSIS",
      "standard": "FDA Food Code 2022 § 3-501.16 / USDA Cold Storage Guidelines",
      "citation": "Perishable foods must be held continuously at or below 40°F (4.4°C) to maintain food safety."
    },
    "applianceSpecs": {
      "parameter": "Consistent Interior Cold Maintenance",
      "guideline": "Store on interior refrigerator shelves (34°F–38°F) in airtight sealed containers to prevent cross-contamination and moisture loss."
    }
  },
  "honey-in-pantry": {
    "materialThermal": {
      "property": "Cold-Holding Microbial Latency Threshold",
      "threshold": "Danger Zone Threshold 40°F (4.4°C); Freezing Solidification 32°F",
      "details": "Continuous temperature control below 40°F drastically slows enzyme kinetics and microbiological spoilage rates in perishable food matrices."
    },
    "safetyStandard": {
      "organization": "FDA / USDA FSIS",
      "standard": "FDA Food Code 2022 § 3-501.16 / USDA Cold Storage Guidelines",
      "citation": "Perishable foods must be held continuously at or below 40°F (4.4°C) to maintain food safety."
    },
    "applianceSpecs": {
      "parameter": "Consistent Interior Cold Maintenance",
      "guideline": "Store on interior refrigerator shelves (34°F–38°F) in airtight sealed containers to prevent cross-contamination and moisture loss."
    }
  },
  "olive-oil-in-pantry": {
    "materialThermal": {
      "property": "Cold-Holding Microbial Latency Threshold",
      "threshold": "Danger Zone Threshold 40°F (4.4°C); Freezing Solidification 32°F",
      "details": "Continuous temperature control below 40°F drastically slows enzyme kinetics and microbiological spoilage rates in perishable food matrices."
    },
    "safetyStandard": {
      "organization": "FDA / USDA FSIS",
      "standard": "FDA Food Code 2022 § 3-501.16 / USDA Cold Storage Guidelines",
      "citation": "Perishable foods must be held continuously at or below 40°F (4.4°C) to maintain food safety."
    },
    "applianceSpecs": {
      "parameter": "Consistent Interior Cold Maintenance",
      "guideline": "Store on interior refrigerator shelves (34°F–38°F) in airtight sealed containers to prevent cross-contamination and moisture loss."
    }
  },
  "coffee-beans-in-pantry": {
    "materialThermal": {
      "property": "Cold-Holding Microbial Latency Threshold",
      "threshold": "Danger Zone Threshold 40°F (4.4°C); Freezing Solidification 32°F",
      "details": "Continuous temperature control below 40°F drastically slows enzyme kinetics and microbiological spoilage rates in perishable food matrices."
    },
    "safetyStandard": {
      "organization": "FDA / USDA FSIS",
      "standard": "FDA Food Code 2022 § 3-501.16 / USDA Cold Storage Guidelines",
      "citation": "Perishable foods must be held continuously at or below 40°F (4.4°C) to maintain food safety."
    },
    "applianceSpecs": {
      "parameter": "Consistent Interior Cold Maintenance",
      "guideline": "Store on interior refrigerator shelves (34°F–38°F) in airtight sealed containers to prevent cross-contamination and moisture loss."
    }
  },
  "apples-in-counter": {
    "materialThermal": {
      "property": "Cold-Holding Microbial Latency Threshold",
      "threshold": "Danger Zone Threshold 40°F (4.4°C); Freezing Solidification 32°F",
      "details": "Continuous temperature control below 40°F drastically slows enzyme kinetics and microbiological spoilage rates in perishable food matrices."
    },
    "safetyStandard": {
      "organization": "FDA / USDA FSIS",
      "standard": "FDA Food Code 2022 § 3-501.16 / USDA Cold Storage Guidelines",
      "citation": "Perishable foods must be held continuously at or below 40°F (4.4°C) to maintain food safety."
    },
    "applianceSpecs": {
      "parameter": "Consistent Interior Cold Maintenance",
      "guideline": "Store on interior refrigerator shelves (34°F–38°F) in airtight sealed containers to prevent cross-contamination and moisture loss."
    }
  },
  "oranges-in-counter": {
    "materialThermal": {
      "property": "Cold-Holding Microbial Latency Threshold",
      "threshold": "Danger Zone Threshold 40°F (4.4°C); Freezing Solidification 32°F",
      "details": "Continuous temperature control below 40°F drastically slows enzyme kinetics and microbiological spoilage rates in perishable food matrices."
    },
    "safetyStandard": {
      "organization": "FDA / USDA FSIS",
      "standard": "FDA Food Code 2022 § 3-501.16 / USDA Cold Storage Guidelines",
      "citation": "Perishable foods must be held continuously at or below 40°F (4.4°C) to maintain food safety."
    },
    "applianceSpecs": {
      "parameter": "Consistent Interior Cold Maintenance",
      "guideline": "Store on interior refrigerator shelves (34°F–38°F) in airtight sealed containers to prevent cross-contamination and moisture loss."
    }
  },
  "lemons-in-counter": {
    "materialThermal": {
      "property": "Cold-Holding Microbial Latency Threshold",
      "threshold": "Danger Zone Threshold 40°F (4.4°C); Freezing Solidification 32°F",
      "details": "Continuous temperature control below 40°F drastically slows enzyme kinetics and microbiological spoilage rates in perishable food matrices."
    },
    "safetyStandard": {
      "organization": "FDA / USDA FSIS",
      "standard": "FDA Food Code 2022 § 3-501.16 / USDA Cold Storage Guidelines",
      "citation": "Perishable foods must be held continuously at or below 40°F (4.4°C) to maintain food safety."
    },
    "applianceSpecs": {
      "parameter": "Consistent Interior Cold Maintenance",
      "guideline": "Store on interior refrigerator shelves (34°F–38°F) in airtight sealed containers to prevent cross-contamination and moisture loss."
    }
  },
  "pineapple-in-counter": {
    "materialThermal": {
      "property": "Cold-Holding Microbial Latency Threshold",
      "threshold": "Danger Zone Threshold 40°F (4.4°C); Freezing Solidification 32°F",
      "details": "Continuous temperature control below 40°F drastically slows enzyme kinetics and microbiological spoilage rates in perishable food matrices."
    },
    "safetyStandard": {
      "organization": "FDA / USDA FSIS",
      "standard": "FDA Food Code 2022 § 3-501.16 / USDA Cold Storage Guidelines",
      "citation": "Perishable foods must be held continuously at or below 40°F (4.4°C) to maintain food safety."
    },
    "applianceSpecs": {
      "parameter": "Consistent Interior Cold Maintenance",
      "guideline": "Store on interior refrigerator shelves (34°F–38°F) in airtight sealed containers to prevent cross-contamination and moisture loss."
    }
  },
  "mangoes-in-counter": {
    "materialThermal": {
      "property": "Cold-Holding Microbial Latency Threshold",
      "threshold": "Danger Zone Threshold 40°F (4.4°C); Freezing Solidification 32°F",
      "details": "Continuous temperature control below 40°F drastically slows enzyme kinetics and microbiological spoilage rates in perishable food matrices."
    },
    "safetyStandard": {
      "organization": "FDA / USDA FSIS",
      "standard": "FDA Food Code 2022 § 3-501.16 / USDA Cold Storage Guidelines",
      "citation": "Perishable foods must be held continuously at or below 40°F (4.4°C) to maintain food safety."
    },
    "applianceSpecs": {
      "parameter": "Consistent Interior Cold Maintenance",
      "guideline": "Store on interior refrigerator shelves (34°F–38°F) in airtight sealed containers to prevent cross-contamination and moisture loss."
    }
  },
  "pork-chops-in-fridge": {
    "materialThermal": {
      "property": "Whole Muscle Myoglobin Oxidation & Microbial Latency",
      "threshold": "Browning Oxidation >38°F (3.3°C); Shelf Life: 3–5 Days",
      "details": "Intact muscle tissue has an internal sterile environment; surface bacteria are delayed at 34°F–38°F, giving intact steaks and roasts 3–5 days of safe storage."
    },
    "safetyStandard": {
      "organization": "USDA FSIS",
      "standard": "FSIS Cold Storage Specifications",
      "citation": "Raw steaks, chops, and roasts remain safe for 3–5 days at <=40°F, or 6–12 months frozen at 0°F."
    },
    "applianceSpecs": {
      "parameter": "Lowest Shelf Drip Protection",
      "guideline": "Place on the lowest shelf in original butcher wrap or rimmed plate at 34°F–36°F to contain juices."
    }
  },
  "cooked-pork-chops-in-fridge": {
    "materialThermal": {
      "property": "Cured / Cooked Meat Spoilage & Nitrate Stability",
      "threshold": "Listeria Proliferation >40°F (4.4°C); Shelf Life: 3–5 Days",
      "details": "Cooked meats are sterile initially, but exposure to room air post-cooking introduces spoilage bacteria that replicate in the 40°F–140°F Danger Zone."
    },
    "safetyStandard": {
      "organization": "USDA FSIS",
      "standard": "9 CFR § 318.23 / FSIS Leftover Storage Guidelines",
      "citation": "Refrigerate cooked meats within 2 hours at <=40°F; consume within 3–4 days (opened deli meats 3–5 days)."
    },
    "applianceSpecs": {
      "parameter": "Meat Drawer Chilling Zone",
      "guideline": "Store in a dedicated meat drawer or middle shelf (34°F–37°F) sealed in airtight containers or original resealed pouches."
    }
  },
  "ground-turkey-in-fridge": {
    "materialThermal": {
      "property": "Raw Poultry Psychrotrophic Replication Limit",
      "threshold": "Rapid Salmonella / Campylobacter Growth >40°F; Shelf Life: 1–2 Days",
      "details": "Surface moisture on raw poultry supports rapid psychrotrophic bacterial growth even at refrigerated temperatures, doubling bacterial count every 30 minutes at 50°F."
    },
    "safetyStandard": {
      "organization": "USDA FSIS",
      "standard": "FSIS Food Safety Guidelines (Poultry Storage)",
      "citation": "Raw poultry must be held at or below 40°F and prepared within 1–2 days of purchase, or frozen at 0°F for up to 9–12 months."
    },
    "applianceSpecs": {
      "parameter": "Bottom Shelf Coldest Placement (34°F–36°F)",
      "guideline": "Keep on the lowest shelf in a leak-proof container to prevent drippage onto ready-to-eat foods; cook or freeze within 48 hours."
    }
  },
  "gravy-in-fridge": {
    "materialThermal": {
      "property": "Cold-Holding Microbial Latency Threshold",
      "threshold": "Danger Zone Threshold 40°F (4.4°C); Freezing Solidification 32°F",
      "details": "Continuous temperature control below 40°F drastically slows enzyme kinetics and microbiological spoilage rates in perishable food matrices."
    },
    "safetyStandard": {
      "organization": "FDA / USDA FSIS",
      "standard": "FDA Food Code 2022 § 3-501.16 / USDA Cold Storage Guidelines",
      "citation": "Perishable foods must be held continuously at or below 40°F (4.4°C) to maintain food safety."
    },
    "applianceSpecs": {
      "parameter": "Consistent Interior Cold Maintenance",
      "guideline": "Store on interior refrigerator shelves (34°F–38°F) in airtight sealed containers to prevent cross-contamination and moisture loss."
    }
  },
  "broth-in-fridge": {
    "materialThermal": {
      "property": "Cold-Holding Microbial Latency Threshold",
      "threshold": "Danger Zone Threshold 40°F (4.4°C); Freezing Solidification 32°F",
      "details": "Continuous temperature control below 40°F drastically slows enzyme kinetics and microbiological spoilage rates in perishable food matrices."
    },
    "safetyStandard": {
      "organization": "FDA / USDA FSIS",
      "standard": "FDA Food Code 2022 § 3-501.16 / USDA Cold Storage Guidelines",
      "citation": "Perishable foods must be held continuously at or below 40°F (4.4°C) to maintain food safety."
    },
    "applianceSpecs": {
      "parameter": "Consistent Interior Cold Maintenance",
      "guideline": "Store on interior refrigerator shelves (34°F–38°F) in airtight sealed containers to prevent cross-contamination and moisture loss."
    }
  },
  "cooked-eggs-in-fridge": {
    "materialThermal": {
      "property": "Vitelline Membrane Integrity & Salmonella Dormancy",
      "threshold": "Refrigerated Dormancy <=45°F (7.2°C); Shelf Life: 3–5 Weeks",
      "details": "Intact shell eggs maintain strong albumen antimicrobial enzymes (lysozyme) and vitelline membranes for over a month when kept cold and unwashed."
    },
    "safetyStandard": {
      "organization": "FDA",
      "standard": "21 CFR Part 118 (Egg Safety Rule)",
      "citation": "Store shell eggs continuously at or below 45°F (7.2°C); hard-boiled eggs must be refrigerated and consumed within 7 days."
    },
    "applianceSpecs": {
      "parameter": "Original Carton Main Shelf Placement",
      "guideline": "Store in original cardboard carton on a middle shelf (35°F–38°F); carton shields porous shells from odors and humidity loss."
    }
  },
  "cold-cuts-in-fridge": {
    "materialThermal": {
      "property": "Cold-Holding Microbial Latency Threshold",
      "threshold": "Danger Zone Threshold 40°F (4.4°C); Freezing Solidification 32°F",
      "details": "Continuous temperature control below 40°F drastically slows enzyme kinetics and microbiological spoilage rates in perishable food matrices."
    },
    "safetyStandard": {
      "organization": "FDA / USDA FSIS",
      "standard": "FDA Food Code 2022 § 3-501.16 / USDA Cold Storage Guidelines",
      "citation": "Perishable foods must be held continuously at or below 40°F (4.4°C) to maintain food safety."
    },
    "applianceSpecs": {
      "parameter": "Consistent Interior Cold Maintenance",
      "guideline": "Store on interior refrigerator shelves (34°F–38°F) in airtight sealed containers to prevent cross-contamination and moisture loss."
    }
  },
  "sour-cream-opened-in-fridge": {
    "materialThermal": {
      "property": "Lactic Acid Bacteria Inactivation & Lipolysis",
      "threshold": "Psychrotrophic Spore Outgrowth >40°F (4.4°C); Shelf Life: 7 Days (Milk)",
      "details": "Pasteurized dairy holds cold-tolerant spore-formers that slowly metabolize lactose; steady cold suppresses souring and whey separation."
    },
    "safetyStandard": {
      "organization": "FDA",
      "standard": "Grade 'A' Pasteurized Milk Ordinance (PMO) 2019",
      "citation": "Maintain pasteurized milk at 40°F or lower; consume within 7 days of opening."
    },
    "applianceSpecs": {
      "parameter": "Main Interior Shelf (Avoid Door Bins)",
      "guideline": "Never store milk in door shelves where temperatures regularly reach 45°F; place in the coldest interior center shelf."
    }
  },
  "soft-cheese-in-fridge": {
    "materialThermal": {
      "property": "Lactic Acid Bacteria Inactivation & Lipolysis",
      "threshold": "Psychrotrophic Spore Outgrowth >40°F (4.4°C); Shelf Life: 7 Days (Milk)",
      "details": "Pasteurized dairy holds cold-tolerant spore-formers that slowly metabolize lactose; steady cold suppresses souring and whey separation."
    },
    "safetyStandard": {
      "organization": "FDA",
      "standard": "Grade 'A' Pasteurized Milk Ordinance (PMO) 2019",
      "citation": "Maintain pasteurized milk at 40°F or lower; consume within 7 days of opening."
    },
    "applianceSpecs": {
      "parameter": "Main Interior Shelf (Avoid Door Bins)",
      "guideline": "Never store milk in door shelves where temperatures regularly reach 45°F; place in the coldest interior center shelf."
    }
  },
  "cooked-tofu-in-fridge": {
    "materialThermal": {
      "property": "Cold-Holding Microbial Latency Threshold",
      "threshold": "Danger Zone Threshold 40°F (4.4°C); Freezing Solidification 32°F",
      "details": "Continuous temperature control below 40°F drastically slows enzyme kinetics and microbiological spoilage rates in perishable food matrices."
    },
    "safetyStandard": {
      "organization": "FDA / USDA FSIS",
      "standard": "FDA Food Code 2022 § 3-501.16 / USDA Cold Storage Guidelines",
      "citation": "Perishable foods must be held continuously at or below 40°F (4.4°C) to maintain food safety."
    },
    "applianceSpecs": {
      "parameter": "Consistent Interior Cold Maintenance",
      "guideline": "Store on interior refrigerator shelves (34°F–38°F) in airtight sealed containers to prevent cross-contamination and moisture loss."
    }
  },
  "opened-pesto-in-fridge": {
    "materialThermal": {
      "property": "Cold-Holding Microbial Latency Threshold",
      "threshold": "Danger Zone Threshold 40°F (4.4°C); Freezing Solidification 32°F",
      "details": "Continuous temperature control below 40°F drastically slows enzyme kinetics and microbiological spoilage rates in perishable food matrices."
    },
    "safetyStandard": {
      "organization": "FDA / USDA FSIS",
      "standard": "FDA Food Code 2022 § 3-501.16 / USDA Cold Storage Guidelines",
      "citation": "Perishable foods must be held continuously at or below 40°F (4.4°C) to maintain food safety."
    },
    "applianceSpecs": {
      "parameter": "Consistent Interior Cold Maintenance",
      "guideline": "Store on interior refrigerator shelves (34°F–38°F) in airtight sealed containers to prevent cross-contamination and moisture loss."
    }
  },
  "cooked-lentils-in-fridge": {
    "materialThermal": {
      "property": "Cold-Holding Microbial Latency Threshold",
      "threshold": "Danger Zone Threshold 40°F (4.4°C); Freezing Solidification 32°F",
      "details": "Continuous temperature control below 40°F drastically slows enzyme kinetics and microbiological spoilage rates in perishable food matrices."
    },
    "safetyStandard": {
      "organization": "FDA / USDA FSIS",
      "standard": "FDA Food Code 2022 § 3-501.16 / USDA Cold Storage Guidelines",
      "citation": "Perishable foods must be held continuously at or below 40°F (4.4°C) to maintain food safety."
    },
    "applianceSpecs": {
      "parameter": "Consistent Interior Cold Maintenance",
      "guideline": "Store on interior refrigerator shelves (34°F–38°F) in airtight sealed containers to prevent cross-contamination and moisture loss."
    }
  },
  "cut-pineapple-in-fridge": {
    "materialThermal": {
      "property": "Cold-Holding Microbial Latency Threshold",
      "threshold": "Danger Zone Threshold 40°F (4.4°C); Freezing Solidification 32°F",
      "details": "Continuous temperature control below 40°F drastically slows enzyme kinetics and microbiological spoilage rates in perishable food matrices."
    },
    "safetyStandard": {
      "organization": "FDA / USDA FSIS",
      "standard": "FDA Food Code 2022 § 3-501.16 / USDA Cold Storage Guidelines",
      "citation": "Perishable foods must be held continuously at or below 40°F (4.4°C) to maintain food safety."
    },
    "applianceSpecs": {
      "parameter": "Consistent Interior Cold Maintenance",
      "guideline": "Store on interior refrigerator shelves (34°F–38°F) in airtight sealed containers to prevent cross-contamination and moisture loss."
    }
  },
  "raspberries-in-fridge": {
    "materialThermal": {
      "property": "Cold-Holding Microbial Latency Threshold",
      "threshold": "Danger Zone Threshold 40°F (4.4°C); Freezing Solidification 32°F",
      "details": "Continuous temperature control below 40°F drastically slows enzyme kinetics and microbiological spoilage rates in perishable food matrices."
    },
    "safetyStandard": {
      "organization": "FDA / USDA FSIS",
      "standard": "FDA Food Code 2022 § 3-501.16 / USDA Cold Storage Guidelines",
      "citation": "Perishable foods must be held continuously at or below 40°F (4.4°C) to maintain food safety."
    },
    "applianceSpecs": {
      "parameter": "Consistent Interior Cold Maintenance",
      "guideline": "Store on interior refrigerator shelves (34°F–38°F) in airtight sealed containers to prevent cross-contamination and moisture loss."
    }
  },
  "pork-chops-in-freezer": {
    "materialThermal": {
      "property": "Whole Muscle Myoglobin Oxidation & Microbial Latency",
      "threshold": "Browning Oxidation >38°F (3.3°C); Shelf Life: 3–5 Days",
      "details": "Intact muscle tissue has an internal sterile environment; surface bacteria are delayed at 34°F–38°F, giving intact steaks and roasts 3–5 days of safe storage."
    },
    "safetyStandard": {
      "organization": "USDA FSIS",
      "standard": "FSIS Cold Storage Specifications",
      "citation": "Raw steaks, chops, and roasts remain safe for 3–5 days at <=40°F, or 6–12 months frozen at 0°F."
    },
    "applianceSpecs": {
      "parameter": "Lowest Shelf Drip Protection",
      "guideline": "Place on the lowest shelf in original butcher wrap or rimmed plate at 34°F–36°F to contain juices."
    }
  },
  "ground-turkey-in-freezer": {
    "materialThermal": {
      "property": "Raw Poultry Psychrotrophic Replication Limit",
      "threshold": "Rapid Salmonella / Campylobacter Growth >40°F; Shelf Life: 1–2 Days",
      "details": "Surface moisture on raw poultry supports rapid psychrotrophic bacterial growth even at refrigerated temperatures, doubling bacterial count every 30 minutes at 50°F."
    },
    "safetyStandard": {
      "organization": "USDA FSIS",
      "standard": "FSIS Food Safety Guidelines (Poultry Storage)",
      "citation": "Raw poultry must be held at or below 40°F and prepared within 1–2 days of purchase, or frozen at 0°F for up to 9–12 months."
    },
    "applianceSpecs": {
      "parameter": "Bottom Shelf Coldest Placement (34°F–36°F)",
      "guideline": "Keep on the lowest shelf in a leak-proof container to prevent drippage onto ready-to-eat foods; cook or freeze within 48 hours."
    }
  },
  "gravy-in-freezer": {
    "materialThermal": {
      "property": "Cold-Holding Microbial Latency Threshold",
      "threshold": "Danger Zone Threshold 40°F (4.4°C); Freezing Solidification 32°F",
      "details": "Continuous temperature control below 40°F drastically slows enzyme kinetics and microbiological spoilage rates in perishable food matrices."
    },
    "safetyStandard": {
      "organization": "FDA / USDA FSIS",
      "standard": "FDA Food Code 2022 § 3-501.16 / USDA Cold Storage Guidelines",
      "citation": "Perishable foods must be held continuously at or below 40°F (4.4°C) to maintain food safety."
    },
    "applianceSpecs": {
      "parameter": "Consistent Interior Cold Maintenance",
      "guideline": "Store on interior refrigerator shelves (34°F–38°F) in airtight sealed containers to prevent cross-contamination and moisture loss."
    }
  },
  "broth-in-freezer": {
    "materialThermal": {
      "property": "Cold-Holding Microbial Latency Threshold",
      "threshold": "Danger Zone Threshold 40°F (4.4°C); Freezing Solidification 32°F",
      "details": "Continuous temperature control below 40°F drastically slows enzyme kinetics and microbiological spoilage rates in perishable food matrices."
    },
    "safetyStandard": {
      "organization": "FDA / USDA FSIS",
      "standard": "FDA Food Code 2022 § 3-501.16 / USDA Cold Storage Guidelines",
      "citation": "Perishable foods must be held continuously at or below 40°F (4.4°C) to maintain food safety."
    },
    "applianceSpecs": {
      "parameter": "Consistent Interior Cold Maintenance",
      "guideline": "Store on interior refrigerator shelves (34°F–38°F) in airtight sealed containers to prevent cross-contamination and moisture loss."
    }
  },
  "pesto-in-freezer": {
    "materialThermal": {
      "property": "Cold-Holding Microbial Latency Threshold",
      "threshold": "Danger Zone Threshold 40°F (4.4°C); Freezing Solidification 32°F",
      "details": "Continuous temperature control below 40°F drastically slows enzyme kinetics and microbiological spoilage rates in perishable food matrices."
    },
    "safetyStandard": {
      "organization": "FDA / USDA FSIS",
      "standard": "FDA Food Code 2022 § 3-501.16 / USDA Cold Storage Guidelines",
      "citation": "Perishable foods must be held continuously at or below 40°F (4.4°C) to maintain food safety."
    },
    "applianceSpecs": {
      "parameter": "Consistent Interior Cold Maintenance",
      "guideline": "Store on interior refrigerator shelves (34°F–38°F) in airtight sealed containers to prevent cross-contamination and moisture loss."
    }
  },
  "waffles-frozen-in-freezer": {
    "materialThermal": {
      "property": "Cold-Holding Microbial Latency Threshold",
      "threshold": "Danger Zone Threshold 40°F (4.4°C); Freezing Solidification 32°F",
      "details": "Continuous temperature control below 40°F drastically slows enzyme kinetics and microbiological spoilage rates in perishable food matrices."
    },
    "safetyStandard": {
      "organization": "FDA / USDA FSIS",
      "standard": "FDA Food Code 2022 § 3-501.16 / USDA Cold Storage Guidelines",
      "citation": "Perishable foods must be held continuously at or below 40°F (4.4°C) to maintain food safety."
    },
    "applianceSpecs": {
      "parameter": "Consistent Interior Cold Maintenance",
      "guideline": "Store on interior refrigerator shelves (34°F–38°F) in airtight sealed containers to prevent cross-contamination and moisture loss."
    }
  },
  "pancakes-frozen-in-freezer": {
    "materialThermal": {
      "property": "Cold-Holding Microbial Latency Threshold",
      "threshold": "Danger Zone Threshold 40°F (4.4°C); Freezing Solidification 32°F",
      "details": "Continuous temperature control below 40°F drastically slows enzyme kinetics and microbiological spoilage rates in perishable food matrices."
    },
    "safetyStandard": {
      "organization": "FDA / USDA FSIS",
      "standard": "FDA Food Code 2022 § 3-501.16 / USDA Cold Storage Guidelines",
      "citation": "Perishable foods must be held continuously at or below 40°F (4.4°C) to maintain food safety."
    },
    "applianceSpecs": {
      "parameter": "Consistent Interior Cold Maintenance",
      "guideline": "Store on interior refrigerator shelves (34°F–38°F) in airtight sealed containers to prevent cross-contamination and moisture loss."
    }
  },
  "muffins-in-freezer": {
    "materialThermal": {
      "property": "Cold-Holding Microbial Latency Threshold",
      "threshold": "Danger Zone Threshold 40°F (4.4°C); Freezing Solidification 32°F",
      "details": "Continuous temperature control below 40°F drastically slows enzyme kinetics and microbiological spoilage rates in perishable food matrices."
    },
    "safetyStandard": {
      "organization": "FDA / USDA FSIS",
      "standard": "FDA Food Code 2022 § 3-501.16 / USDA Cold Storage Guidelines",
      "citation": "Perishable foods must be held continuously at or below 40°F (4.4°C) to maintain food safety."
    },
    "applianceSpecs": {
      "parameter": "Consistent Interior Cold Maintenance",
      "guideline": "Store on interior refrigerator shelves (34°F–38°F) in airtight sealed containers to prevent cross-contamination and moisture loss."
    }
  },
  "tortillas-in-freezer": {
    "materialThermal": {
      "property": "Cold-Holding Microbial Latency Threshold",
      "threshold": "Danger Zone Threshold 40°F (4.4°C); Freezing Solidification 32°F",
      "details": "Continuous temperature control below 40°F drastically slows enzyme kinetics and microbiological spoilage rates in perishable food matrices."
    },
    "safetyStandard": {
      "organization": "FDA / USDA FSIS",
      "standard": "FDA Food Code 2022 § 3-501.16 / USDA Cold Storage Guidelines",
      "citation": "Perishable foods must be held continuously at or below 40°F (4.4°C) to maintain food safety."
    },
    "applianceSpecs": {
      "parameter": "Consistent Interior Cold Maintenance",
      "guideline": "Store on interior refrigerator shelves (34°F–38°F) in airtight sealed containers to prevent cross-contamination and moisture loss."
    }
  },
  "butter-long-in-freezer": {
    "materialThermal": {
      "property": "Lactic Acid Bacteria Inactivation & Lipolysis",
      "threshold": "Psychrotrophic Spore Outgrowth >40°F (4.4°C); Shelf Life: 7 Days (Milk)",
      "details": "Pasteurized dairy holds cold-tolerant spore-formers that slowly metabolize lactose; steady cold suppresses souring and whey separation."
    },
    "safetyStandard": {
      "organization": "FDA",
      "standard": "Grade 'A' Pasteurized Milk Ordinance (PMO) 2019",
      "citation": "Maintain pasteurized milk at 40°F or lower; consume within 7 days of opening."
    },
    "applianceSpecs": {
      "parameter": "Main Interior Shelf (Avoid Door Bins)",
      "guideline": "Never store milk in door shelves where temperatures regularly reach 45°F; place in the coldest interior center shelf."
    }
  },
  "cream-cheese-opened-in-fridge": {
    "materialThermal": {
      "property": "Lactic Acid Bacteria Inactivation & Lipolysis",
      "threshold": "Psychrotrophic Spore Outgrowth >40°F (4.4°C); Shelf Life: 7 Days (Milk)",
      "details": "Pasteurized dairy holds cold-tolerant spore-formers that slowly metabolize lactose; steady cold suppresses souring and whey separation."
    },
    "safetyStandard": {
      "organization": "FDA",
      "standard": "Grade 'A' Pasteurized Milk Ordinance (PMO) 2019",
      "citation": "Maintain pasteurized milk at 40°F or lower; consume within 7 days of opening."
    },
    "applianceSpecs": {
      "parameter": "Main Interior Shelf (Avoid Door Bins)",
      "guideline": "Never store milk in door shelves where temperatures regularly reach 45°F; place in the coldest interior center shelf."
    }
  },
  "cooked-pork-fridge": {
    "materialThermal": {
      "property": "Cured / Cooked Meat Spoilage & Nitrate Stability",
      "threshold": "Listeria Proliferation >40°F (4.4°C); Shelf Life: 3–5 Days",
      "details": "Cooked meats are sterile initially, but exposure to room air post-cooking introduces spoilage bacteria that replicate in the 40°F–140°F Danger Zone."
    },
    "safetyStandard": {
      "organization": "USDA FSIS",
      "standard": "9 CFR § 318.23 / FSIS Leftover Storage Guidelines",
      "citation": "Refrigerate cooked meats within 2 hours at <=40°F; consume within 3–4 days (opened deli meats 3–5 days)."
    },
    "applianceSpecs": {
      "parameter": "Meat Drawer Chilling Zone",
      "guideline": "Store in a dedicated meat drawer or middle shelf (34°F–37°F) sealed in airtight containers or original resealed pouches."
    }
  },
  "cooked-lamb-fridge": {
    "materialThermal": {
      "property": "Cured / Cooked Meat Spoilage & Nitrate Stability",
      "threshold": "Listeria Proliferation >40°F (4.4°C); Shelf Life: 3–5 Days",
      "details": "Cooked meats are sterile initially, but exposure to room air post-cooking introduces spoilage bacteria that replicate in the 40°F–140°F Danger Zone."
    },
    "safetyStandard": {
      "organization": "USDA FSIS",
      "standard": "9 CFR § 318.23 / FSIS Leftover Storage Guidelines",
      "citation": "Refrigerate cooked meats within 2 hours at <=40°F; consume within 3–4 days (opened deli meats 3–5 days)."
    },
    "applianceSpecs": {
      "parameter": "Meat Drawer Chilling Zone",
      "guideline": "Store in a dedicated meat drawer or middle shelf (34°F–37°F) sealed in airtight containers or original resealed pouches."
    }
  },
  "cooked-fish-fridge": {
    "materialThermal": {
      "property": "Psychrotrophic Proteolysis & TMAO Breakdown",
      "threshold": "Psychrotolerant Spoilage >32°F (0°C); Shelf Life: 1–2 Days",
      "details": "Marine bacteria (Pseudomonas, Shewanella) remain active even near 32°F, breaking down trimethylamine oxide and producing ammonia-like off-odors."
    },
    "safetyStandard": {
      "organization": "FDA",
      "standard": "FDA Fish and Fishery Products Hazards and Controls Guidance",
      "citation": "Raw fresh seafood must be stored at <=38°F (ideally 32°F–34°F) and consumed within 1–2 days, or frozen at 0°F for up to 6 months."
    },
    "applianceSpecs": {
      "parameter": "Crushed Ice Drain Pan / Coldest Zone",
      "guideline": "Store on the bottom shelf resting over a bowl of crushed draining ice (32°F–34°F) to maximize freshness."
    }
  },
  "cooked-quinoa-fridge": {
    "materialThermal": {
      "property": "Cold-Holding Microbial Latency Threshold",
      "threshold": "Danger Zone Threshold 40°F (4.4°C); Freezing Solidification 32°F",
      "details": "Continuous temperature control below 40°F drastically slows enzyme kinetics and microbiological spoilage rates in perishable food matrices."
    },
    "safetyStandard": {
      "organization": "FDA / USDA FSIS",
      "standard": "FDA Food Code 2022 § 3-501.16 / USDA Cold Storage Guidelines",
      "citation": "Perishable foods must be held continuously at or below 40°F (4.4°C) to maintain food safety."
    },
    "applianceSpecs": {
      "parameter": "Consistent Interior Cold Maintenance",
      "guideline": "Store on interior refrigerator shelves (34°F–38°F) in airtight sealed containers to prevent cross-contamination and moisture loss."
    }
  },
  "cooked-oatmeal-fridge": {
    "materialThermal": {
      "property": "Cold-Holding Microbial Latency Threshold",
      "threshold": "Danger Zone Threshold 40°F (4.4°C); Freezing Solidification 32°F",
      "details": "Continuous temperature control below 40°F drastically slows enzyme kinetics and microbiological spoilage rates in perishable food matrices."
    },
    "safetyStandard": {
      "organization": "FDA / USDA FSIS",
      "standard": "FDA Food Code 2022 § 3-501.16 / USDA Cold Storage Guidelines",
      "citation": "Perishable foods must be held continuously at or below 40°F (4.4°C) to maintain food safety."
    },
    "applianceSpecs": {
      "parameter": "Consistent Interior Cold Maintenance",
      "guideline": "Store on interior refrigerator shelves (34°F–38°F) in airtight sealed containers to prevent cross-contamination and moisture loss."
    }
  },
  "smoothie-fridge": {
    "materialThermal": {
      "property": "Cold-Holding Microbial Latency Threshold",
      "threshold": "Danger Zone Threshold 40°F (4.4°C); Freezing Solidification 32°F",
      "details": "Continuous temperature control below 40°F drastically slows enzyme kinetics and microbiological spoilage rates in perishable food matrices."
    },
    "safetyStandard": {
      "organization": "FDA / USDA FSIS",
      "standard": "FDA Food Code 2022 § 3-501.16 / USDA Cold Storage Guidelines",
      "citation": "Perishable foods must be held continuously at or below 40°F (4.4°C) to maintain food safety."
    },
    "applianceSpecs": {
      "parameter": "Consistent Interior Cold Maintenance",
      "guideline": "Store on interior refrigerator shelves (34°F–38°F) in airtight sealed containers to prevent cross-contamination and moisture loss."
    }
  },
  "fresh-juice-fridge": {
    "materialThermal": {
      "property": "Cold-Holding Microbial Latency Threshold",
      "threshold": "Danger Zone Threshold 40°F (4.4°C); Freezing Solidification 32°F",
      "details": "Continuous temperature control below 40°F drastically slows enzyme kinetics and microbiological spoilage rates in perishable food matrices."
    },
    "safetyStandard": {
      "organization": "FDA / USDA FSIS",
      "standard": "FDA Food Code 2022 § 3-501.16 / USDA Cold Storage Guidelines",
      "citation": "Perishable foods must be held continuously at or below 40°F (4.4°C) to maintain food safety."
    },
    "applianceSpecs": {
      "parameter": "Consistent Interior Cold Maintenance",
      "guideline": "Store on interior refrigerator shelves (34°F–38°F) in airtight sealed containers to prevent cross-contamination and moisture loss."
    }
  },
  "bone-broth-fridge": {
    "materialThermal": {
      "property": "Cold-Holding Microbial Latency Threshold",
      "threshold": "Danger Zone Threshold 40°F (4.4°C); Freezing Solidification 32°F",
      "details": "Continuous temperature control below 40°F drastically slows enzyme kinetics and microbiological spoilage rates in perishable food matrices."
    },
    "safetyStandard": {
      "organization": "FDA / USDA FSIS",
      "standard": "FDA Food Code 2022 § 3-501.16 / USDA Cold Storage Guidelines",
      "citation": "Perishable foods must be held continuously at or below 40°F (4.4°C) to maintain food safety."
    },
    "applianceSpecs": {
      "parameter": "Consistent Interior Cold Maintenance",
      "guideline": "Store on interior refrigerator shelves (34°F–38°F) in airtight sealed containers to prevent cross-contamination and moisture loss."
    }
  },
  "hollandaise-fridge": {
    "materialThermal": {
      "property": "Cold-Holding Microbial Latency Threshold",
      "threshold": "Danger Zone Threshold 40°F (4.4°C); Freezing Solidification 32°F",
      "details": "Continuous temperature control below 40°F drastically slows enzyme kinetics and microbiological spoilage rates in perishable food matrices."
    },
    "safetyStandard": {
      "organization": "FDA / USDA FSIS",
      "standard": "FDA Food Code 2022 § 3-501.16 / USDA Cold Storage Guidelines",
      "citation": "Perishable foods must be held continuously at or below 40°F (4.4°C) to maintain food safety."
    },
    "applianceSpecs": {
      "parameter": "Consistent Interior Cold Maintenance",
      "guideline": "Store on interior refrigerator shelves (34°F–38°F) in airtight sealed containers to prevent cross-contamination and moisture loss."
    }
  },
  "caesar-dressing-fridge": {
    "materialThermal": {
      "property": "Cold-Holding Microbial Latency Threshold",
      "threshold": "Danger Zone Threshold 40°F (4.4°C); Freezing Solidification 32°F",
      "details": "Continuous temperature control below 40°F drastically slows enzyme kinetics and microbiological spoilage rates in perishable food matrices."
    },
    "safetyStandard": {
      "organization": "FDA / USDA FSIS",
      "standard": "FDA Food Code 2022 § 3-501.16 / USDA Cold Storage Guidelines",
      "citation": "Perishable foods must be held continuously at or below 40°F (4.4°C) to maintain food safety."
    },
    "applianceSpecs": {
      "parameter": "Consistent Interior Cold Maintenance",
      "guideline": "Store on interior refrigerator shelves (34°F–38°F) in airtight sealed containers to prevent cross-contamination and moisture loss."
    }
  },
  "ranch-dressing-fridge": {
    "materialThermal": {
      "property": "Cold-Holding Microbial Latency Threshold",
      "threshold": "Danger Zone Threshold 40°F (4.4°C); Freezing Solidification 32°F",
      "details": "Continuous temperature control below 40°F drastically slows enzyme kinetics and microbiological spoilage rates in perishable food matrices."
    },
    "safetyStandard": {
      "organization": "FDA / USDA FSIS",
      "standard": "FDA Food Code 2022 § 3-501.16 / USDA Cold Storage Guidelines",
      "citation": "Perishable foods must be held continuously at or below 40°F (4.4°C) to maintain food safety."
    },
    "applianceSpecs": {
      "parameter": "Consistent Interior Cold Maintenance",
      "guideline": "Store on interior refrigerator shelves (34°F–38°F) in airtight sealed containers to prevent cross-contamination and moisture loss."
    }
  },
  "tahini-fridge": {
    "materialThermal": {
      "property": "Cold-Holding Microbial Latency Threshold",
      "threshold": "Danger Zone Threshold 40°F (4.4°C); Freezing Solidification 32°F",
      "details": "Continuous temperature control below 40°F drastically slows enzyme kinetics and microbiological spoilage rates in perishable food matrices."
    },
    "safetyStandard": {
      "organization": "FDA / USDA FSIS",
      "standard": "FDA Food Code 2022 § 3-501.16 / USDA Cold Storage Guidelines",
      "citation": "Perishable foods must be held continuously at or below 40°F (4.4°C) to maintain food safety."
    },
    "applianceSpecs": {
      "parameter": "Consistent Interior Cold Maintenance",
      "guideline": "Store on interior refrigerator shelves (34°F–38°F) in airtight sealed containers to prevent cross-contamination and moisture loss."
    }
  },
  "baba-ganoush-fridge": {
    "materialThermal": {
      "property": "Cold-Holding Microbial Latency Threshold",
      "threshold": "Danger Zone Threshold 40°F (4.4°C); Freezing Solidification 32°F",
      "details": "Continuous temperature control below 40°F drastically slows enzyme kinetics and microbiological spoilage rates in perishable food matrices."
    },
    "safetyStandard": {
      "organization": "FDA / USDA FSIS",
      "standard": "FDA Food Code 2022 § 3-501.16 / USDA Cold Storage Guidelines",
      "citation": "Perishable foods must be held continuously at or below 40°F (4.4°C) to maintain food safety."
    },
    "applianceSpecs": {
      "parameter": "Consistent Interior Cold Maintenance",
      "guideline": "Store on interior refrigerator shelves (34°F–38°F) in airtight sealed containers to prevent cross-contamination and moisture loss."
    }
  },
  "tzatziki-fridge": {
    "materialThermal": {
      "property": "Cold-Holding Microbial Latency Threshold",
      "threshold": "Danger Zone Threshold 40°F (4.4°C); Freezing Solidification 32°F",
      "details": "Continuous temperature control below 40°F drastically slows enzyme kinetics and microbiological spoilage rates in perishable food matrices."
    },
    "safetyStandard": {
      "organization": "FDA / USDA FSIS",
      "standard": "FDA Food Code 2022 § 3-501.16 / USDA Cold Storage Guidelines",
      "citation": "Perishable foods must be held continuously at or below 40°F (4.4°C) to maintain food safety."
    },
    "applianceSpecs": {
      "parameter": "Consistent Interior Cold Maintenance",
      "guideline": "Store on interior refrigerator shelves (34°F–38°F) in airtight sealed containers to prevent cross-contamination and moisture loss."
    }
  },
  "pesto-fridge": {
    "materialThermal": {
      "property": "Cold-Holding Microbial Latency Threshold",
      "threshold": "Danger Zone Threshold 40°F (4.4°C); Freezing Solidification 32°F",
      "details": "Continuous temperature control below 40°F drastically slows enzyme kinetics and microbiological spoilage rates in perishable food matrices."
    },
    "safetyStandard": {
      "organization": "FDA / USDA FSIS",
      "standard": "FDA Food Code 2022 § 3-501.16 / USDA Cold Storage Guidelines",
      "citation": "Perishable foods must be held continuously at or below 40°F (4.4°C) to maintain food safety."
    },
    "applianceSpecs": {
      "parameter": "Consistent Interior Cold Maintenance",
      "guideline": "Store on interior refrigerator shelves (34°F–38°F) in airtight sealed containers to prevent cross-contamination and moisture loss."
    }
  },
  "marinara-sauce-fridge": {
    "materialThermal": {
      "property": "Cold-Holding Microbial Latency Threshold",
      "threshold": "Danger Zone Threshold 40°F (4.4°C); Freezing Solidification 32°F",
      "details": "Continuous temperature control below 40°F drastically slows enzyme kinetics and microbiological spoilage rates in perishable food matrices."
    },
    "safetyStandard": {
      "organization": "FDA / USDA FSIS",
      "standard": "FDA Food Code 2022 § 3-501.16 / USDA Cold Storage Guidelines",
      "citation": "Perishable foods must be held continuously at or below 40°F (4.4°C) to maintain food safety."
    },
    "applianceSpecs": {
      "parameter": "Consistent Interior Cold Maintenance",
      "guideline": "Store on interior refrigerator shelves (34°F–38°F) in airtight sealed containers to prevent cross-contamination and moisture loss."
    }
  },
  "alfredo-sauce-fridge": {
    "materialThermal": {
      "property": "Cold-Holding Microbial Latency Threshold",
      "threshold": "Danger Zone Threshold 40°F (4.4°C); Freezing Solidification 32°F",
      "details": "Continuous temperature control below 40°F drastically slows enzyme kinetics and microbiological spoilage rates in perishable food matrices."
    },
    "safetyStandard": {
      "organization": "FDA / USDA FSIS",
      "standard": "FDA Food Code 2022 § 3-501.16 / USDA Cold Storage Guidelines",
      "citation": "Perishable foods must be held continuously at or below 40°F (4.4°C) to maintain food safety."
    },
    "applianceSpecs": {
      "parameter": "Consistent Interior Cold Maintenance",
      "guideline": "Store on interior refrigerator shelves (34°F–38°F) in airtight sealed containers to prevent cross-contamination and moisture loss."
    }
  },
  "bbq-sauce-fridge": {
    "materialThermal": {
      "property": "Cold-Holding Microbial Latency Threshold",
      "threshold": "Danger Zone Threshold 40°F (4.4°C); Freezing Solidification 32°F",
      "details": "Continuous temperature control below 40°F drastically slows enzyme kinetics and microbiological spoilage rates in perishable food matrices."
    },
    "safetyStandard": {
      "organization": "FDA / USDA FSIS",
      "standard": "FDA Food Code 2022 § 3-501.16 / USDA Cold Storage Guidelines",
      "citation": "Perishable foods must be held continuously at or below 40°F (4.4°C) to maintain food safety."
    },
    "applianceSpecs": {
      "parameter": "Consistent Interior Cold Maintenance",
      "guideline": "Store on interior refrigerator shelves (34°F–38°F) in airtight sealed containers to prevent cross-contamination and moisture loss."
    }
  },
  "teriyaki-sauce-fridge": {
    "materialThermal": {
      "property": "Cold-Holding Microbial Latency Threshold",
      "threshold": "Danger Zone Threshold 40°F (4.4°C); Freezing Solidification 32°F",
      "details": "Continuous temperature control below 40°F drastically slows enzyme kinetics and microbiological spoilage rates in perishable food matrices."
    },
    "safetyStandard": {
      "organization": "FDA / USDA FSIS",
      "standard": "FDA Food Code 2022 § 3-501.16 / USDA Cold Storage Guidelines",
      "citation": "Perishable foods must be held continuously at or below 40°F (4.4°C) to maintain food safety."
    },
    "applianceSpecs": {
      "parameter": "Consistent Interior Cold Maintenance",
      "guideline": "Store on interior refrigerator shelves (34°F–38°F) in airtight sealed containers to prevent cross-contamination and moisture loss."
    }
  },
  "fish-sauce-fridge": {
    "materialThermal": {
      "property": "Psychrotrophic Proteolysis & TMAO Breakdown",
      "threshold": "Psychrotolerant Spoilage >32°F (0°C); Shelf Life: 1–2 Days",
      "details": "Marine bacteria (Pseudomonas, Shewanella) remain active even near 32°F, breaking down trimethylamine oxide and producing ammonia-like off-odors."
    },
    "safetyStandard": {
      "organization": "FDA",
      "standard": "FDA Fish and Fishery Products Hazards and Controls Guidance",
      "citation": "Raw fresh seafood must be stored at <=38°F (ideally 32°F–34°F) and consumed within 1–2 days, or frozen at 0°F for up to 6 months."
    },
    "applianceSpecs": {
      "parameter": "Crushed Ice Drain Pan / Coldest Zone",
      "guideline": "Store on the bottom shelf resting over a bowl of crushed draining ice (32°F–34°F) to maximize freshness."
    }
  },
  "oyster-sauce-fridge": {
    "materialThermal": {
      "property": "Cold-Holding Microbial Latency Threshold",
      "threshold": "Danger Zone Threshold 40°F (4.4°C); Freezing Solidification 32°F",
      "details": "Continuous temperature control below 40°F drastically slows enzyme kinetics and microbiological spoilage rates in perishable food matrices."
    },
    "safetyStandard": {
      "organization": "FDA / USDA FSIS",
      "standard": "FDA Food Code 2022 § 3-501.16 / USDA Cold Storage Guidelines",
      "citation": "Perishable foods must be held continuously at or below 40°F (4.4°C) to maintain food safety."
    },
    "applianceSpecs": {
      "parameter": "Consistent Interior Cold Maintenance",
      "guideline": "Store on interior refrigerator shelves (34°F–38°F) in airtight sealed containers to prevent cross-contamination and moisture loss."
    }
  },
  "hoisin-sauce-fridge": {
    "materialThermal": {
      "property": "Cold-Holding Microbial Latency Threshold",
      "threshold": "Danger Zone Threshold 40°F (4.4°C); Freezing Solidification 32°F",
      "details": "Continuous temperature control below 40°F drastically slows enzyme kinetics and microbiological spoilage rates in perishable food matrices."
    },
    "safetyStandard": {
      "organization": "FDA / USDA FSIS",
      "standard": "FDA Food Code 2022 § 3-501.16 / USDA Cold Storage Guidelines",
      "citation": "Perishable foods must be held continuously at or below 40°F (4.4°C) to maintain food safety."
    },
    "applianceSpecs": {
      "parameter": "Consistent Interior Cold Maintenance",
      "guideline": "Store on interior refrigerator shelves (34°F–38°F) in airtight sealed containers to prevent cross-contamination and moisture loss."
    }
  },
  "hot-sauce-fridge": {
    "materialThermal": {
      "property": "Cold-Holding Microbial Latency Threshold",
      "threshold": "Danger Zone Threshold 40°F (4.4°C); Freezing Solidification 32°F",
      "details": "Continuous temperature control below 40°F drastically slows enzyme kinetics and microbiological spoilage rates in perishable food matrices."
    },
    "safetyStandard": {
      "organization": "FDA / USDA FSIS",
      "standard": "FDA Food Code 2022 § 3-501.16 / USDA Cold Storage Guidelines",
      "citation": "Perishable foods must be held continuously at or below 40°F (4.4°C) to maintain food safety."
    },
    "applianceSpecs": {
      "parameter": "Consistent Interior Cold Maintenance",
      "guideline": "Store on interior refrigerator shelves (34°F–38°F) in airtight sealed containers to prevent cross-contamination and moisture loss."
    }
  },
  "sriracha-fridge": {
    "materialThermal": {
      "property": "Cold-Holding Microbial Latency Threshold",
      "threshold": "Danger Zone Threshold 40°F (4.4°C); Freezing Solidification 32°F",
      "details": "Continuous temperature control below 40°F drastically slows enzyme kinetics and microbiological spoilage rates in perishable food matrices."
    },
    "safetyStandard": {
      "organization": "FDA / USDA FSIS",
      "standard": "FDA Food Code 2022 § 3-501.16 / USDA Cold Storage Guidelines",
      "citation": "Perishable foods must be held continuously at or below 40°F (4.4°C) to maintain food safety."
    },
    "applianceSpecs": {
      "parameter": "Consistent Interior Cold Maintenance",
      "guideline": "Store on interior refrigerator shelves (34°F–38°F) in airtight sealed containers to prevent cross-contamination and moisture loss."
    }
  },
  "maple-syrup-fridge": {
    "materialThermal": {
      "property": "Cold-Holding Microbial Latency Threshold",
      "threshold": "Danger Zone Threshold 40°F (4.4°C); Freezing Solidification 32°F",
      "details": "Continuous temperature control below 40°F drastically slows enzyme kinetics and microbiological spoilage rates in perishable food matrices."
    },
    "safetyStandard": {
      "organization": "FDA / USDA FSIS",
      "standard": "FDA Food Code 2022 § 3-501.16 / USDA Cold Storage Guidelines",
      "citation": "Perishable foods must be held continuously at or below 40°F (4.4°C) to maintain food safety."
    },
    "applianceSpecs": {
      "parameter": "Consistent Interior Cold Maintenance",
      "guideline": "Store on interior refrigerator shelves (34°F–38°F) in airtight sealed containers to prevent cross-contamination and moisture loss."
    }
  },
  "jam-fridge": {
    "materialThermal": {
      "property": "Cold-Holding Microbial Latency Threshold",
      "threshold": "Danger Zone Threshold 40°F (4.4°C); Freezing Solidification 32°F",
      "details": "Continuous temperature control below 40°F drastically slows enzyme kinetics and microbiological spoilage rates in perishable food matrices."
    },
    "safetyStandard": {
      "organization": "FDA / USDA FSIS",
      "standard": "FDA Food Code 2022 § 3-501.16 / USDA Cold Storage Guidelines",
      "citation": "Perishable foods must be held continuously at or below 40°F (4.4°C) to maintain food safety."
    },
    "applianceSpecs": {
      "parameter": "Consistent Interior Cold Maintenance",
      "guideline": "Store on interior refrigerator shelves (34°F–38°F) in airtight sealed containers to prevent cross-contamination and moisture loss."
    }
  },
  "jelly-fridge": {
    "materialThermal": {
      "property": "Cold-Holding Microbial Latency Threshold",
      "threshold": "Danger Zone Threshold 40°F (4.4°C); Freezing Solidification 32°F",
      "details": "Continuous temperature control below 40°F drastically slows enzyme kinetics and microbiological spoilage rates in perishable food matrices."
    },
    "safetyStandard": {
      "organization": "FDA / USDA FSIS",
      "standard": "FDA Food Code 2022 § 3-501.16 / USDA Cold Storage Guidelines",
      "citation": "Perishable foods must be held continuously at or below 40°F (4.4°C) to maintain food safety."
    },
    "applianceSpecs": {
      "parameter": "Consistent Interior Cold Maintenance",
      "guideline": "Store on interior refrigerator shelves (34°F–38°F) in airtight sealed containers to prevent cross-contamination and moisture loss."
    }
  },
  "almond-butter-fridge": {
    "materialThermal": {
      "property": "Lactic Acid Bacteria Inactivation & Lipolysis",
      "threshold": "Psychrotrophic Spore Outgrowth >40°F (4.4°C); Shelf Life: 7 Days (Milk)",
      "details": "Pasteurized dairy holds cold-tolerant spore-formers that slowly metabolize lactose; steady cold suppresses souring and whey separation."
    },
    "safetyStandard": {
      "organization": "FDA",
      "standard": "Grade 'A' Pasteurized Milk Ordinance (PMO) 2019",
      "citation": "Maintain pasteurized milk at 40°F or lower; consume within 7 days of opening."
    },
    "applianceSpecs": {
      "parameter": "Main Interior Shelf (Avoid Door Bins)",
      "guideline": "Never store milk in door shelves where temperatures regularly reach 45°F; place in the coldest interior center shelf."
    }
  },
  "nutella-fridge": {
    "materialThermal": {
      "property": "Cold-Holding Microbial Latency Threshold",
      "threshold": "Danger Zone Threshold 40°F (4.4°C); Freezing Solidification 32°F",
      "details": "Continuous temperature control below 40°F drastically slows enzyme kinetics and microbiological spoilage rates in perishable food matrices."
    },
    "safetyStandard": {
      "organization": "FDA / USDA FSIS",
      "standard": "FDA Food Code 2022 § 3-501.16 / USDA Cold Storage Guidelines",
      "citation": "Perishable foods must be held continuously at or below 40°F (4.4°C) to maintain food safety."
    },
    "applianceSpecs": {
      "parameter": "Consistent Interior Cold Maintenance",
      "guideline": "Store on interior refrigerator shelves (34°F–38°F) in airtight sealed containers to prevent cross-contamination and moisture loss."
    }
  },
  "ricotta-fridge": {
    "materialThermal": {
      "property": "Cold-Holding Microbial Latency Threshold",
      "threshold": "Danger Zone Threshold 40°F (4.4°C); Freezing Solidification 32°F",
      "details": "Continuous temperature control below 40°F drastically slows enzyme kinetics and microbiological spoilage rates in perishable food matrices."
    },
    "safetyStandard": {
      "organization": "FDA / USDA FSIS",
      "standard": "FDA Food Code 2022 § 3-501.16 / USDA Cold Storage Guidelines",
      "citation": "Perishable foods must be held continuously at or below 40°F (4.4°C) to maintain food safety."
    },
    "applianceSpecs": {
      "parameter": "Consistent Interior Cold Maintenance",
      "guideline": "Store on interior refrigerator shelves (34°F–38°F) in airtight sealed containers to prevent cross-contamination and moisture loss."
    }
  },
  "brie-fridge": {
    "materialThermal": {
      "property": "Cold-Holding Microbial Latency Threshold",
      "threshold": "Danger Zone Threshold 40°F (4.4°C); Freezing Solidification 32°F",
      "details": "Continuous temperature control below 40°F drastically slows enzyme kinetics and microbiological spoilage rates in perishable food matrices."
    },
    "safetyStandard": {
      "organization": "FDA / USDA FSIS",
      "standard": "FDA Food Code 2022 § 3-501.16 / USDA Cold Storage Guidelines",
      "citation": "Perishable foods must be held continuously at or below 40°F (4.4°C) to maintain food safety."
    },
    "applianceSpecs": {
      "parameter": "Consistent Interior Cold Maintenance",
      "guideline": "Store on interior refrigerator shelves (34°F–38°F) in airtight sealed containers to prevent cross-contamination and moisture loss."
    }
  },
  "blue-cheese-fridge": {
    "materialThermal": {
      "property": "Lactic Acid Bacteria Inactivation & Lipolysis",
      "threshold": "Psychrotrophic Spore Outgrowth >40°F (4.4°C); Shelf Life: 7 Days (Milk)",
      "details": "Pasteurized dairy holds cold-tolerant spore-formers that slowly metabolize lactose; steady cold suppresses souring and whey separation."
    },
    "safetyStandard": {
      "organization": "FDA",
      "standard": "Grade 'A' Pasteurized Milk Ordinance (PMO) 2019",
      "citation": "Maintain pasteurized milk at 40°F or lower; consume within 7 days of opening."
    },
    "applianceSpecs": {
      "parameter": "Main Interior Shelf (Avoid Door Bins)",
      "guideline": "Never store milk in door shelves where temperatures regularly reach 45°F; place in the coldest interior center shelf."
    }
  },
  "feta-fridge": {
    "materialThermal": {
      "property": "Cold-Holding Microbial Latency Threshold",
      "threshold": "Danger Zone Threshold 40°F (4.4°C); Freezing Solidification 32°F",
      "details": "Continuous temperature control below 40°F drastically slows enzyme kinetics and microbiological spoilage rates in perishable food matrices."
    },
    "safetyStandard": {
      "organization": "FDA / USDA FSIS",
      "standard": "FDA Food Code 2022 § 3-501.16 / USDA Cold Storage Guidelines",
      "citation": "Perishable foods must be held continuously at or below 40°F (4.4°C) to maintain food safety."
    },
    "applianceSpecs": {
      "parameter": "Consistent Interior Cold Maintenance",
      "guideline": "Store on interior refrigerator shelves (34°F–38°F) in airtight sealed containers to prevent cross-contamination and moisture loss."
    }
  },
  "goat-cheese-fridge": {
    "materialThermal": {
      "property": "Lactic Acid Bacteria Inactivation & Lipolysis",
      "threshold": "Psychrotrophic Spore Outgrowth >40°F (4.4°C); Shelf Life: 7 Days (Milk)",
      "details": "Pasteurized dairy holds cold-tolerant spore-formers that slowly metabolize lactose; steady cold suppresses souring and whey separation."
    },
    "safetyStandard": {
      "organization": "FDA",
      "standard": "Grade 'A' Pasteurized Milk Ordinance (PMO) 2019",
      "citation": "Maintain pasteurized milk at 40°F or lower; consume within 7 days of opening."
    },
    "applianceSpecs": {
      "parameter": "Main Interior Shelf (Avoid Door Bins)",
      "guideline": "Never store milk in door shelves where temperatures regularly reach 45°F; place in the coldest interior center shelf."
    }
  },
  "provolone-fridge": {
    "materialThermal": {
      "property": "Cold-Holding Microbial Latency Threshold",
      "threshold": "Danger Zone Threshold 40°F (4.4°C); Freezing Solidification 32°F",
      "details": "Continuous temperature control below 40°F drastically slows enzyme kinetics and microbiological spoilage rates in perishable food matrices."
    },
    "safetyStandard": {
      "organization": "FDA / USDA FSIS",
      "standard": "FDA Food Code 2022 § 3-501.16 / USDA Cold Storage Guidelines",
      "citation": "Perishable foods must be held continuously at or below 40°F (4.4°C) to maintain food safety."
    },
    "applianceSpecs": {
      "parameter": "Consistent Interior Cold Maintenance",
      "guideline": "Store on interior refrigerator shelves (34°F–38°F) in airtight sealed containers to prevent cross-contamination and moisture loss."
    }
  },
  "swiss-cheese-fridge": {
    "materialThermal": {
      "property": "Lactic Acid Bacteria Inactivation & Lipolysis",
      "threshold": "Psychrotrophic Spore Outgrowth >40°F (4.4°C); Shelf Life: 7 Days (Milk)",
      "details": "Pasteurized dairy holds cold-tolerant spore-formers that slowly metabolize lactose; steady cold suppresses souring and whey separation."
    },
    "safetyStandard": {
      "organization": "FDA",
      "standard": "Grade 'A' Pasteurized Milk Ordinance (PMO) 2019",
      "citation": "Maintain pasteurized milk at 40°F or lower; consume within 7 days of opening."
    },
    "applianceSpecs": {
      "parameter": "Main Interior Shelf (Avoid Door Bins)",
      "guideline": "Never store milk in door shelves where temperatures regularly reach 45°F; place in the coldest interior center shelf."
    }
  },
  "tofu-fridge": {
    "materialThermal": {
      "property": "Cold-Holding Microbial Latency Threshold",
      "threshold": "Danger Zone Threshold 40°F (4.4°C); Freezing Solidification 32°F",
      "details": "Continuous temperature control below 40°F drastically slows enzyme kinetics and microbiological spoilage rates in perishable food matrices."
    },
    "safetyStandard": {
      "organization": "FDA / USDA FSIS",
      "standard": "FDA Food Code 2022 § 3-501.16 / USDA Cold Storage Guidelines",
      "citation": "Perishable foods must be held continuously at or below 40°F (4.4°C) to maintain food safety."
    },
    "applianceSpecs": {
      "parameter": "Consistent Interior Cold Maintenance",
      "guideline": "Store on interior refrigerator shelves (34°F–38°F) in airtight sealed containers to prevent cross-contamination and moisture loss."
    }
  },
  "tempeh-fridge": {
    "materialThermal": {
      "property": "Cold-Holding Microbial Latency Threshold",
      "threshold": "Danger Zone Threshold 40°F (4.4°C); Freezing Solidification 32°F",
      "details": "Continuous temperature control below 40°F drastically slows enzyme kinetics and microbiological spoilage rates in perishable food matrices."
    },
    "safetyStandard": {
      "organization": "FDA / USDA FSIS",
      "standard": "FDA Food Code 2022 § 3-501.16 / USDA Cold Storage Guidelines",
      "citation": "Perishable foods must be held continuously at or below 40°F (4.4°C) to maintain food safety."
    },
    "applianceSpecs": {
      "parameter": "Consistent Interior Cold Maintenance",
      "guideline": "Store on interior refrigerator shelves (34°F–38°F) in airtight sealed containers to prevent cross-contamination and moisture loss."
    }
  },
  "deli-turkey-fridge": {
    "materialThermal": {
      "property": "Raw Poultry Psychrotrophic Replication Limit",
      "threshold": "Rapid Salmonella / Campylobacter Growth >40°F; Shelf Life: 1–2 Days",
      "details": "Surface moisture on raw poultry supports rapid psychrotrophic bacterial growth even at refrigerated temperatures, doubling bacterial count every 30 minutes at 50°F."
    },
    "safetyStandard": {
      "organization": "USDA FSIS",
      "standard": "FSIS Food Safety Guidelines (Poultry Storage)",
      "citation": "Raw poultry must be held at or below 40°F and prepared within 1–2 days of purchase, or frozen at 0°F for up to 9–12 months."
    },
    "applianceSpecs": {
      "parameter": "Bottom Shelf Coldest Placement (34°F–36°F)",
      "guideline": "Keep on the lowest shelf in a leak-proof container to prevent drippage onto ready-to-eat foods; cook or freeze within 48 hours."
    }
  },
  "smoked-salmon-fridge": {
    "materialThermal": {
      "property": "Psychrotrophic Proteolysis & TMAO Breakdown",
      "threshold": "Psychrotolerant Spoilage >32°F (0°C); Shelf Life: 1–2 Days",
      "details": "Marine bacteria (Pseudomonas, Shewanella) remain active even near 32°F, breaking down trimethylamine oxide and producing ammonia-like off-odors."
    },
    "safetyStandard": {
      "organization": "FDA",
      "standard": "FDA Fish and Fishery Products Hazards and Controls Guidance",
      "citation": "Raw fresh seafood must be stored at <=38°F (ideally 32°F–34°F) and consumed within 1–2 days, or frozen at 0°F for up to 6 months."
    },
    "applianceSpecs": {
      "parameter": "Crushed Ice Drain Pan / Coldest Zone",
      "guideline": "Store on the bottom shelf resting over a bowl of crushed draining ice (32°F–34°F) to maximize freshness."
    }
  },
  "canned-tuna-opened-fridge": {
    "materialThermal": {
      "property": "Psychrotrophic Proteolysis & TMAO Breakdown",
      "threshold": "Psychrotolerant Spoilage >32°F (0°C); Shelf Life: 1–2 Days",
      "details": "Marine bacteria (Pseudomonas, Shewanella) remain active even near 32°F, breaking down trimethylamine oxide and producing ammonia-like off-odors."
    },
    "safetyStandard": {
      "organization": "FDA",
      "standard": "FDA Fish and Fishery Products Hazards and Controls Guidance",
      "citation": "Raw fresh seafood must be stored at <=38°F (ideally 32°F–34°F) and consumed within 1–2 days, or frozen at 0°F for up to 6 months."
    },
    "applianceSpecs": {
      "parameter": "Crushed Ice Drain Pan / Coldest Zone",
      "guideline": "Store on the bottom shelf resting over a bowl of crushed draining ice (32°F–34°F) to maximize freshness."
    }
  },
  "fresh-pasta-fridge": {
    "materialThermal": {
      "property": "Spore-Forming Bacterial Growth & Enterotoxin Production",
      "threshold": "Danger Zone 40°F–140°F (4.4°C–60°C); Safe Storage 3–4 Days",
      "details": "Bacillus cereus and Clostridium perfringens survive initial cooking. Once food cools into the Danger Zone, vegetative cells proliferate and produce toxins."
    },
    "safetyStandard": {
      "organization": "FDA",
      "standard": "FDA Food Code 2022 § 3-501.17 (TCS Food Date Marking)",
      "citation": "Cooked ready-to-eat leftovers must be stored at 41°F or below and discarded after a maximum of 4 days."
    },
    "applianceSpecs": {
      "parameter": "Shallow Container Cooling Protocol",
      "guideline": "Refrigerate leftovers within 2 hours of cooking in containers no deeper than 2 inches to ensure rapid temperature drop below 40°F."
    }
  },
  "fresh-gnocchi-fridge": {
    "materialThermal": {
      "property": "Cold-Holding Microbial Latency Threshold",
      "threshold": "Danger Zone Threshold 40°F (4.4°C); Freezing Solidification 32°F",
      "details": "Continuous temperature control below 40°F drastically slows enzyme kinetics and microbiological spoilage rates in perishable food matrices."
    },
    "safetyStandard": {
      "organization": "FDA / USDA FSIS",
      "standard": "FDA Food Code 2022 § 3-501.16 / USDA Cold Storage Guidelines",
      "citation": "Perishable foods must be held continuously at or below 40°F (4.4°C) to maintain food safety."
    },
    "applianceSpecs": {
      "parameter": "Consistent Interior Cold Maintenance",
      "guideline": "Store on interior refrigerator shelves (34°F–38°F) in airtight sealed containers to prevent cross-contamination and moisture loss."
    }
  },
  "wonton-wrappers-fridge": {
    "materialThermal": {
      "property": "Cold-Holding Microbial Latency Threshold",
      "threshold": "Danger Zone Threshold 40°F (4.4°C); Freezing Solidification 32°F",
      "details": "Continuous temperature control below 40°F drastically slows enzyme kinetics and microbiological spoilage rates in perishable food matrices."
    },
    "safetyStandard": {
      "organization": "FDA / USDA FSIS",
      "standard": "FDA Food Code 2022 § 3-501.16 / USDA Cold Storage Guidelines",
      "citation": "Perishable foods must be held continuously at or below 40°F (4.4°C) to maintain food safety."
    },
    "applianceSpecs": {
      "parameter": "Consistent Interior Cold Maintenance",
      "guideline": "Store on interior refrigerator shelves (34°F–38°F) in airtight sealed containers to prevent cross-contamination and moisture loss."
    }
  },
  "pie-crust-fridge": {
    "materialThermal": {
      "property": "Cold-Holding Microbial Latency Threshold",
      "threshold": "Danger Zone Threshold 40°F (4.4°C); Freezing Solidification 32°F",
      "details": "Continuous temperature control below 40°F drastically slows enzyme kinetics and microbiological spoilage rates in perishable food matrices."
    },
    "safetyStandard": {
      "organization": "FDA / USDA FSIS",
      "standard": "FDA Food Code 2022 § 3-501.16 / USDA Cold Storage Guidelines",
      "citation": "Perishable foods must be held continuously at or below 40°F (4.4°C) to maintain food safety."
    },
    "applianceSpecs": {
      "parameter": "Consistent Interior Cold Maintenance",
      "guideline": "Store on interior refrigerator shelves (34°F–38°F) in airtight sealed containers to prevent cross-contamination and moisture loss."
    }
  },
  "pizza-dough-fridge": {
    "materialThermal": {
      "property": "Spore-Forming Bacterial Growth & Enterotoxin Production",
      "threshold": "Danger Zone 40°F–140°F (4.4°C–60°C); Safe Storage 3–4 Days",
      "details": "Bacillus cereus and Clostridium perfringens survive initial cooking. Once food cools into the Danger Zone, vegetative cells proliferate and produce toxins."
    },
    "safetyStandard": {
      "organization": "FDA",
      "standard": "FDA Food Code 2022 § 3-501.17 (TCS Food Date Marking)",
      "citation": "Cooked ready-to-eat leftovers must be stored at 41°F or below and discarded after a maximum of 4 days."
    },
    "applianceSpecs": {
      "parameter": "Shallow Container Cooling Protocol",
      "guideline": "Refrigerate leftovers within 2 hours of cooking in containers no deeper than 2 inches to ensure rapid temperature drop below 40°F."
    }
  },
  "tortillas-fridge": {
    "materialThermal": {
      "property": "Cold-Holding Microbial Latency Threshold",
      "threshold": "Danger Zone Threshold 40°F (4.4°C); Freezing Solidification 32°F",
      "details": "Continuous temperature control below 40°F drastically slows enzyme kinetics and microbiological spoilage rates in perishable food matrices."
    },
    "safetyStandard": {
      "organization": "FDA / USDA FSIS",
      "standard": "FDA Food Code 2022 § 3-501.16 / USDA Cold Storage Guidelines",
      "citation": "Perishable foods must be held continuously at or below 40°F (4.4°C) to maintain food safety."
    },
    "applianceSpecs": {
      "parameter": "Consistent Interior Cold Maintenance",
      "guideline": "Store on interior refrigerator shelves (34°F–38°F) in airtight sealed containers to prevent cross-contamination and moisture loss."
    }
  },
  "pita-bread-fridge": {
    "materialThermal": {
      "property": "Cold-Holding Microbial Latency Threshold",
      "threshold": "Danger Zone Threshold 40°F (4.4°C); Freezing Solidification 32°F",
      "details": "Continuous temperature control below 40°F drastically slows enzyme kinetics and microbiological spoilage rates in perishable food matrices."
    },
    "safetyStandard": {
      "organization": "FDA / USDA FSIS",
      "standard": "FDA Food Code 2022 § 3-501.16 / USDA Cold Storage Guidelines",
      "citation": "Perishable foods must be held continuously at or below 40°F (4.4°C) to maintain food safety."
    },
    "applianceSpecs": {
      "parameter": "Consistent Interior Cold Maintenance",
      "guideline": "Store on interior refrigerator shelves (34°F–38°F) in airtight sealed containers to prevent cross-contamination and moisture loss."
    }
  },
  "naan-fridge": {
    "materialThermal": {
      "property": "Cold-Holding Microbial Latency Threshold",
      "threshold": "Danger Zone Threshold 40°F (4.4°C); Freezing Solidification 32°F",
      "details": "Continuous temperature control below 40°F drastically slows enzyme kinetics and microbiological spoilage rates in perishable food matrices."
    },
    "safetyStandard": {
      "organization": "FDA / USDA FSIS",
      "standard": "FDA Food Code 2022 § 3-501.16 / USDA Cold Storage Guidelines",
      "citation": "Perishable foods must be held continuously at or below 40°F (4.4°C) to maintain food safety."
    },
    "applianceSpecs": {
      "parameter": "Consistent Interior Cold Maintenance",
      "guideline": "Store on interior refrigerator shelves (34°F–38°F) in airtight sealed containers to prevent cross-contamination and moisture loss."
    }
  },
  "sourdough-fridge": {
    "materialThermal": {
      "property": "Cold-Holding Microbial Latency Threshold",
      "threshold": "Danger Zone Threshold 40°F (4.4°C); Freezing Solidification 32°F",
      "details": "Continuous temperature control below 40°F drastically slows enzyme kinetics and microbiological spoilage rates in perishable food matrices."
    },
    "safetyStandard": {
      "organization": "FDA / USDA FSIS",
      "standard": "FDA Food Code 2022 § 3-501.16 / USDA Cold Storage Guidelines",
      "citation": "Perishable foods must be held continuously at or below 40°F (4.4°C) to maintain food safety."
    },
    "applianceSpecs": {
      "parameter": "Consistent Interior Cold Maintenance",
      "guideline": "Store on interior refrigerator shelves (34°F–38°F) in airtight sealed containers to prevent cross-contamination and moisture loss."
    }
  },
  "mango-counter": {
    "materialThermal": {
      "property": "Cold-Holding Microbial Latency Threshold",
      "threshold": "Danger Zone Threshold 40°F (4.4°C); Freezing Solidification 32°F",
      "details": "Continuous temperature control below 40°F drastically slows enzyme kinetics and microbiological spoilage rates in perishable food matrices."
    },
    "safetyStandard": {
      "organization": "FDA / USDA FSIS",
      "standard": "FDA Food Code 2022 § 3-501.16 / USDA Cold Storage Guidelines",
      "citation": "Perishable foods must be held continuously at or below 40°F (4.4°C) to maintain food safety."
    },
    "applianceSpecs": {
      "parameter": "Consistent Interior Cold Maintenance",
      "guideline": "Store on interior refrigerator shelves (34°F–38°F) in airtight sealed containers to prevent cross-contamination and moisture loss."
    }
  },
  "peaches-counter": {
    "materialThermal": {
      "property": "Cold-Holding Microbial Latency Threshold",
      "threshold": "Danger Zone Threshold 40°F (4.4°C); Freezing Solidification 32°F",
      "details": "Continuous temperature control below 40°F drastically slows enzyme kinetics and microbiological spoilage rates in perishable food matrices."
    },
    "safetyStandard": {
      "organization": "FDA / USDA FSIS",
      "standard": "FDA Food Code 2022 § 3-501.16 / USDA Cold Storage Guidelines",
      "citation": "Perishable foods must be held continuously at or below 40°F (4.4°C) to maintain food safety."
    },
    "applianceSpecs": {
      "parameter": "Consistent Interior Cold Maintenance",
      "guideline": "Store on interior refrigerator shelves (34°F–38°F) in airtight sealed containers to prevent cross-contamination and moisture loss."
    }
  },
  "pears-counter": {
    "materialThermal": {
      "property": "Cold-Holding Microbial Latency Threshold",
      "threshold": "Danger Zone Threshold 40°F (4.4°C); Freezing Solidification 32°F",
      "details": "Continuous temperature control below 40°F drastically slows enzyme kinetics and microbiological spoilage rates in perishable food matrices."
    },
    "safetyStandard": {
      "organization": "FDA / USDA FSIS",
      "standard": "FDA Food Code 2022 § 3-501.16 / USDA Cold Storage Guidelines",
      "citation": "Perishable foods must be held continuously at or below 40°F (4.4°C) to maintain food safety."
    },
    "applianceSpecs": {
      "parameter": "Consistent Interior Cold Maintenance",
      "guideline": "Store on interior refrigerator shelves (34°F–38°F) in airtight sealed containers to prevent cross-contamination and moisture loss."
    }
  },
  "kiwi-counter": {
    "materialThermal": {
      "property": "Cold-Holding Microbial Latency Threshold",
      "threshold": "Danger Zone Threshold 40°F (4.4°C); Freezing Solidification 32°F",
      "details": "Continuous temperature control below 40°F drastically slows enzyme kinetics and microbiological spoilage rates in perishable food matrices."
    },
    "safetyStandard": {
      "organization": "FDA / USDA FSIS",
      "standard": "FDA Food Code 2022 § 3-501.16 / USDA Cold Storage Guidelines",
      "citation": "Perishable foods must be held continuously at or below 40°F (4.4°C) to maintain food safety."
    },
    "applianceSpecs": {
      "parameter": "Consistent Interior Cold Maintenance",
      "guideline": "Store on interior refrigerator shelves (34°F–38°F) in airtight sealed containers to prevent cross-contamination and moisture loss."
    }
  },
  "plums-counter": {
    "materialThermal": {
      "property": "Cold-Holding Microbial Latency Threshold",
      "threshold": "Danger Zone Threshold 40°F (4.4°C); Freezing Solidification 32°F",
      "details": "Continuous temperature control below 40°F drastically slows enzyme kinetics and microbiological spoilage rates in perishable food matrices."
    },
    "safetyStandard": {
      "organization": "FDA / USDA FSIS",
      "standard": "FDA Food Code 2022 § 3-501.16 / USDA Cold Storage Guidelines",
      "citation": "Perishable foods must be held continuously at or below 40°F (4.4°C) to maintain food safety."
    },
    "applianceSpecs": {
      "parameter": "Consistent Interior Cold Maintenance",
      "guideline": "Store on interior refrigerator shelves (34°F–38°F) in airtight sealed containers to prevent cross-contamination and moisture loss."
    }
  },
  "nectarines-counter": {
    "materialThermal": {
      "property": "Cold-Holding Microbial Latency Threshold",
      "threshold": "Danger Zone Threshold 40°F (4.4°C); Freezing Solidification 32°F",
      "details": "Continuous temperature control below 40°F drastically slows enzyme kinetics and microbiological spoilage rates in perishable food matrices."
    },
    "safetyStandard": {
      "organization": "FDA / USDA FSIS",
      "standard": "FDA Food Code 2022 § 3-501.16 / USDA Cold Storage Guidelines",
      "citation": "Perishable foods must be held continuously at or below 40°F (4.4°C) to maintain food safety."
    },
    "applianceSpecs": {
      "parameter": "Consistent Interior Cold Maintenance",
      "guideline": "Store on interior refrigerator shelves (34°F–38°F) in airtight sealed containers to prevent cross-contamination and moisture loss."
    }
  },
  "papaya-counter": {
    "materialThermal": {
      "property": "Cold-Holding Microbial Latency Threshold",
      "threshold": "Danger Zone Threshold 40°F (4.4°C); Freezing Solidification 32°F",
      "details": "Continuous temperature control below 40°F drastically slows enzyme kinetics and microbiological spoilage rates in perishable food matrices."
    },
    "safetyStandard": {
      "organization": "FDA / USDA FSIS",
      "standard": "FDA Food Code 2022 § 3-501.16 / USDA Cold Storage Guidelines",
      "citation": "Perishable foods must be held continuously at or below 40°F (4.4°C) to maintain food safety."
    },
    "applianceSpecs": {
      "parameter": "Consistent Interior Cold Maintenance",
      "guideline": "Store on interior refrigerator shelves (34°F–38°F) in airtight sealed containers to prevent cross-contamination and moisture loss."
    }
  },
  "watermelon-counter": {
    "materialThermal": {
      "property": "Cold-Holding Microbial Latency Threshold",
      "threshold": "Danger Zone Threshold 40°F (4.4°C); Freezing Solidification 32°F",
      "details": "Continuous temperature control below 40°F drastically slows enzyme kinetics and microbiological spoilage rates in perishable food matrices."
    },
    "safetyStandard": {
      "organization": "FDA / USDA FSIS",
      "standard": "FDA Food Code 2022 § 3-501.16 / USDA Cold Storage Guidelines",
      "citation": "Perishable foods must be held continuously at or below 40°F (4.4°C) to maintain food safety."
    },
    "applianceSpecs": {
      "parameter": "Consistent Interior Cold Maintenance",
      "guideline": "Store on interior refrigerator shelves (34°F–38°F) in airtight sealed containers to prevent cross-contamination and moisture loss."
    }
  },
  "cantaloupe-counter": {
    "materialThermal": {
      "property": "Cold-Holding Microbial Latency Threshold",
      "threshold": "Danger Zone Threshold 40°F (4.4°C); Freezing Solidification 32°F",
      "details": "Continuous temperature control below 40°F drastically slows enzyme kinetics and microbiological spoilage rates in perishable food matrices."
    },
    "safetyStandard": {
      "organization": "FDA / USDA FSIS",
      "standard": "FDA Food Code 2022 § 3-501.16 / USDA Cold Storage Guidelines",
      "citation": "Perishable foods must be held continuously at or below 40°F (4.4°C) to maintain food safety."
    },
    "applianceSpecs": {
      "parameter": "Consistent Interior Cold Maintenance",
      "guideline": "Store on interior refrigerator shelves (34°F–38°F) in airtight sealed containers to prevent cross-contamination and moisture loss."
    }
  },
  "cherries-counter": {
    "materialThermal": {
      "property": "Cold-Holding Microbial Latency Threshold",
      "threshold": "Danger Zone Threshold 40°F (4.4°C); Freezing Solidification 32°F",
      "details": "Continuous temperature control below 40°F drastically slows enzyme kinetics and microbiological spoilage rates in perishable food matrices."
    },
    "safetyStandard": {
      "organization": "FDA / USDA FSIS",
      "standard": "FDA Food Code 2022 § 3-501.16 / USDA Cold Storage Guidelines",
      "citation": "Perishable foods must be held continuously at or below 40°F (4.4°C) to maintain food safety."
    },
    "applianceSpecs": {
      "parameter": "Consistent Interior Cold Maintenance",
      "guideline": "Store on interior refrigerator shelves (34°F–38°F) in airtight sealed containers to prevent cross-contamination and moisture loss."
    }
  },
  "berries-counter": {
    "materialThermal": {
      "property": "Cold-Holding Microbial Latency Threshold",
      "threshold": "Danger Zone Threshold 40°F (4.4°C); Freezing Solidification 32°F",
      "details": "Continuous temperature control below 40°F drastically slows enzyme kinetics and microbiological spoilage rates in perishable food matrices."
    },
    "safetyStandard": {
      "organization": "FDA / USDA FSIS",
      "standard": "FDA Food Code 2022 § 3-501.16 / USDA Cold Storage Guidelines",
      "citation": "Perishable foods must be held continuously at or below 40°F (4.4°C) to maintain food safety."
    },
    "applianceSpecs": {
      "parameter": "Consistent Interior Cold Maintenance",
      "guideline": "Store on interior refrigerator shelves (34°F–38°F) in airtight sealed containers to prevent cross-contamination and moisture loss."
    }
  },
  "ground-pork-freezer": {
    "materialThermal": {
      "property": "Comminuted Meat Aerobic Spoilage Kinetics",
      "threshold": "High Surface Area Aerobic Spoilage >40°F; Shelf Life: 1–2 Days",
      "details": "Grinding incorporates air and mixes surface pathogens throughout the meat, drastically shortening microbial lag time compared to whole muscle cuts."
    },
    "safetyStandard": {
      "organization": "USDA FSIS",
      "standard": "FSIS Directive 5000.1 / Meat Storage Chart",
      "citation": "Ground beef and pork should be stored at <=40°F for no more than 1–2 days, or frozen at 0°F for 3–4 months."
    },
    "applianceSpecs": {
      "parameter": "Back of Refrigerator Cold Stability",
      "guideline": "Store raw ground meats in the coldest rear section of the bottom shelf at 33°F–36°F; never leave on door shelves."
    }
  },
  "ground-lamb-freezer": {
    "materialThermal": {
      "property": "Comminuted Meat Aerobic Spoilage Kinetics",
      "threshold": "High Surface Area Aerobic Spoilage >40°F; Shelf Life: 1–2 Days",
      "details": "Grinding incorporates air and mixes surface pathogens throughout the meat, drastically shortening microbial lag time compared to whole muscle cuts."
    },
    "safetyStandard": {
      "organization": "USDA FSIS",
      "standard": "FSIS Directive 5000.1 / Meat Storage Chart",
      "citation": "Ground beef and pork should be stored at <=40°F for no more than 1–2 days, or frozen at 0°F for 3–4 months."
    },
    "applianceSpecs": {
      "parameter": "Back of Refrigerator Cold Stability",
      "guideline": "Store raw ground meats in the coldest rear section of the bottom shelf at 33°F–36°F; never leave on door shelves."
    }
  },
  "lamb-chops-freezer": {
    "materialThermal": {
      "property": "Whole Muscle Myoglobin Oxidation & Microbial Latency",
      "threshold": "Browning Oxidation >38°F (3.3°C); Shelf Life: 3–5 Days",
      "details": "Intact muscle tissue has an internal sterile environment; surface bacteria are delayed at 34°F–38°F, giving intact steaks and roasts 3–5 days of safe storage."
    },
    "safetyStandard": {
      "organization": "USDA FSIS",
      "standard": "FSIS Cold Storage Specifications",
      "citation": "Raw steaks, chops, and roasts remain safe for 3–5 days at <=40°F, or 6–12 months frozen at 0°F."
    },
    "applianceSpecs": {
      "parameter": "Lowest Shelf Drip Protection",
      "guideline": "Place on the lowest shelf in original butcher wrap or rimmed plate at 34°F–36°F to contain juices."
    }
  },
  "duck-freezer": {
    "materialThermal": {
      "property": "Raw Poultry Psychrotrophic Replication Limit",
      "threshold": "Rapid Salmonella / Campylobacter Growth >40°F; Shelf Life: 1–2 Days",
      "details": "Surface moisture on raw poultry supports rapid psychrotrophic bacterial growth even at refrigerated temperatures, doubling bacterial count every 30 minutes at 50°F."
    },
    "safetyStandard": {
      "organization": "USDA FSIS",
      "standard": "FSIS Food Safety Guidelines (Poultry Storage)",
      "citation": "Raw poultry must be held at or below 40°F and prepared within 1–2 days of purchase, or frozen at 0°F for up to 9–12 months."
    },
    "applianceSpecs": {
      "parameter": "Bottom Shelf Coldest Placement (34°F–36°F)",
      "guideline": "Keep on the lowest shelf in a leak-proof container to prevent drippage onto ready-to-eat foods; cook or freeze within 48 hours."
    }
  },
  "crab-freezer": {
    "materialThermal": {
      "property": "Psychrotrophic Proteolysis & TMAO Breakdown",
      "threshold": "Psychrotolerant Spoilage >32°F (0°C); Shelf Life: 1–2 Days",
      "details": "Marine bacteria (Pseudomonas, Shewanella) remain active even near 32°F, breaking down trimethylamine oxide and producing ammonia-like off-odors."
    },
    "safetyStandard": {
      "organization": "FDA",
      "standard": "FDA Fish and Fishery Products Hazards and Controls Guidance",
      "citation": "Raw fresh seafood must be stored at <=38°F (ideally 32°F–34°F) and consumed within 1–2 days, or frozen at 0°F for up to 6 months."
    },
    "applianceSpecs": {
      "parameter": "Crushed Ice Drain Pan / Coldest Zone",
      "guideline": "Store on the bottom shelf resting over a bowl of crushed draining ice (32°F–34°F) to maximize freshness."
    }
  },
  "lobster-freezer": {
    "materialThermal": {
      "property": "Cold-Holding Microbial Latency Threshold",
      "threshold": "Danger Zone Threshold 40°F (4.4°C); Freezing Solidification 32°F",
      "details": "Continuous temperature control below 40°F drastically slows enzyme kinetics and microbiological spoilage rates in perishable food matrices."
    },
    "safetyStandard": {
      "organization": "FDA / USDA FSIS",
      "standard": "FDA Food Code 2022 § 3-501.16 / USDA Cold Storage Guidelines",
      "citation": "Perishable foods must be held continuously at or below 40°F (4.4°C) to maintain food safety."
    },
    "applianceSpecs": {
      "parameter": "Consistent Interior Cold Maintenance",
      "guideline": "Store on interior refrigerator shelves (34°F–38°F) in airtight sealed containers to prevent cross-contamination and moisture loss."
    }
  },
  "scallops-freezer": {
    "materialThermal": {
      "property": "Psychrotrophic Proteolysis & TMAO Breakdown",
      "threshold": "Psychrotolerant Spoilage >32°F (0°C); Shelf Life: 1–2 Days",
      "details": "Marine bacteria (Pseudomonas, Shewanella) remain active even near 32°F, breaking down trimethylamine oxide and producing ammonia-like off-odors."
    },
    "safetyStandard": {
      "organization": "FDA",
      "standard": "FDA Fish and Fishery Products Hazards and Controls Guidance",
      "citation": "Raw fresh seafood must be stored at <=38°F (ideally 32°F–34°F) and consumed within 1–2 days, or frozen at 0°F for up to 6 months."
    },
    "applianceSpecs": {
      "parameter": "Crushed Ice Drain Pan / Coldest Zone",
      "guideline": "Store on the bottom shelf resting over a bowl of crushed draining ice (32°F–34°F) to maximize freshness."
    }
  },
  "tilapia-freezer": {
    "materialThermal": {
      "property": "Cold-Holding Microbial Latency Threshold",
      "threshold": "Danger Zone Threshold 40°F (4.4°C); Freezing Solidification 32°F",
      "details": "Continuous temperature control below 40°F drastically slows enzyme kinetics and microbiological spoilage rates in perishable food matrices."
    },
    "safetyStandard": {
      "organization": "FDA / USDA FSIS",
      "standard": "FDA Food Code 2022 § 3-501.16 / USDA Cold Storage Guidelines",
      "citation": "Perishable foods must be held continuously at or below 40°F (4.4°C) to maintain food safety."
    },
    "applianceSpecs": {
      "parameter": "Consistent Interior Cold Maintenance",
      "guideline": "Store on interior refrigerator shelves (34°F–38°F) in airtight sealed containers to prevent cross-contamination and moisture loss."
    }
  },
  "cod-freezer": {
    "materialThermal": {
      "property": "Psychrotrophic Proteolysis & TMAO Breakdown",
      "threshold": "Psychrotolerant Spoilage >32°F (0°C); Shelf Life: 1–2 Days",
      "details": "Marine bacteria (Pseudomonas, Shewanella) remain active even near 32°F, breaking down trimethylamine oxide and producing ammonia-like off-odors."
    },
    "safetyStandard": {
      "organization": "FDA",
      "standard": "FDA Fish and Fishery Products Hazards and Controls Guidance",
      "citation": "Raw fresh seafood must be stored at <=38°F (ideally 32°F–34°F) and consumed within 1–2 days, or frozen at 0°F for up to 6 months."
    },
    "applianceSpecs": {
      "parameter": "Crushed Ice Drain Pan / Coldest Zone",
      "guideline": "Store on the bottom shelf resting over a bowl of crushed draining ice (32°F–34°F) to maximize freshness."
    }
  },
  "tuna-steak-freezer": {
    "materialThermal": {
      "property": "Whole Muscle Myoglobin Oxidation & Microbial Latency",
      "threshold": "Browning Oxidation >38°F (3.3°C); Shelf Life: 3–5 Days",
      "details": "Intact muscle tissue has an internal sterile environment; surface bacteria are delayed at 34°F–38°F, giving intact steaks and roasts 3–5 days of safe storage."
    },
    "safetyStandard": {
      "organization": "USDA FSIS",
      "standard": "FSIS Cold Storage Specifications",
      "citation": "Raw steaks, chops, and roasts remain safe for 3–5 days at <=40°F, or 6–12 months frozen at 0°F."
    },
    "applianceSpecs": {
      "parameter": "Lowest Shelf Drip Protection",
      "guideline": "Place on the lowest shelf in original butcher wrap or rimmed plate at 34°F–36°F to contain juices."
    }
  },
  "cooked-quinoa-freezer": {
    "materialThermal": {
      "property": "Cold-Holding Microbial Latency Threshold",
      "threshold": "Danger Zone Threshold 40°F (4.4°C); Freezing Solidification 32°F",
      "details": "Continuous temperature control below 40°F drastically slows enzyme kinetics and microbiological spoilage rates in perishable food matrices."
    },
    "safetyStandard": {
      "organization": "FDA / USDA FSIS",
      "standard": "FDA Food Code 2022 § 3-501.16 / USDA Cold Storage Guidelines",
      "citation": "Perishable foods must be held continuously at or below 40°F (4.4°C) to maintain food safety."
    },
    "applianceSpecs": {
      "parameter": "Consistent Interior Cold Maintenance",
      "guideline": "Store on interior refrigerator shelves (34°F–38°F) in airtight sealed containers to prevent cross-contamination and moisture loss."
    }
  },
  "cooked-lentils-freezer": {
    "materialThermal": {
      "property": "Cold-Holding Microbial Latency Threshold",
      "threshold": "Danger Zone Threshold 40°F (4.4°C); Freezing Solidification 32°F",
      "details": "Continuous temperature control below 40°F drastically slows enzyme kinetics and microbiological spoilage rates in perishable food matrices."
    },
    "safetyStandard": {
      "organization": "FDA / USDA FSIS",
      "standard": "FDA Food Code 2022 § 3-501.16 / USDA Cold Storage Guidelines",
      "citation": "Perishable foods must be held continuously at or below 40°F (4.4°C) to maintain food safety."
    },
    "applianceSpecs": {
      "parameter": "Consistent Interior Cold Maintenance",
      "guideline": "Store on interior refrigerator shelves (34°F–38°F) in airtight sealed containers to prevent cross-contamination and moisture loss."
    }
  },
  "cooked-oatmeal-freezer": {
    "materialThermal": {
      "property": "Cold-Holding Microbial Latency Threshold",
      "threshold": "Danger Zone Threshold 40°F (4.4°C); Freezing Solidification 32°F",
      "details": "Continuous temperature control below 40°F drastically slows enzyme kinetics and microbiological spoilage rates in perishable food matrices."
    },
    "safetyStandard": {
      "organization": "FDA / USDA FSIS",
      "standard": "FDA Food Code 2022 § 3-501.16 / USDA Cold Storage Guidelines",
      "citation": "Perishable foods must be held continuously at or below 40°F (4.4°C) to maintain food safety."
    },
    "applianceSpecs": {
      "parameter": "Consistent Interior Cold Maintenance",
      "guideline": "Store on interior refrigerator shelves (34°F–38°F) in airtight sealed containers to prevent cross-contamination and moisture loss."
    }
  },
  "soup-dumplings-freezer": {
    "materialThermal": {
      "property": "Spore-Forming Bacterial Growth & Enterotoxin Production",
      "threshold": "Danger Zone 40°F–140°F (4.4°C–60°C); Safe Storage 3–4 Days",
      "details": "Bacillus cereus and Clostridium perfringens survive initial cooking. Once food cools into the Danger Zone, vegetative cells proliferate and produce toxins."
    },
    "safetyStandard": {
      "organization": "FDA",
      "standard": "FDA Food Code 2022 § 3-501.17 (TCS Food Date Marking)",
      "citation": "Cooked ready-to-eat leftovers must be stored at 41°F or below and discarded after a maximum of 4 days."
    },
    "applianceSpecs": {
      "parameter": "Shallow Container Cooling Protocol",
      "guideline": "Refrigerate leftovers within 2 hours of cooking in containers no deeper than 2 inches to ensure rapid temperature drop below 40°F."
    }
  },
  "tamales-freezer": {
    "materialThermal": {
      "property": "Cold-Holding Microbial Latency Threshold",
      "threshold": "Danger Zone Threshold 40°F (4.4°C); Freezing Solidification 32°F",
      "details": "Continuous temperature control below 40°F drastically slows enzyme kinetics and microbiological spoilage rates in perishable food matrices."
    },
    "safetyStandard": {
      "organization": "FDA / USDA FSIS",
      "standard": "FDA Food Code 2022 § 3-501.16 / USDA Cold Storage Guidelines",
      "citation": "Perishable foods must be held continuously at or below 40°F (4.4°C) to maintain food safety."
    },
    "applianceSpecs": {
      "parameter": "Consistent Interior Cold Maintenance",
      "guideline": "Store on interior refrigerator shelves (34°F–38°F) in airtight sealed containers to prevent cross-contamination and moisture loss."
    }
  },
  "empanadas-freezer": {
    "materialThermal": {
      "property": "Cold-Holding Microbial Latency Threshold",
      "threshold": "Danger Zone Threshold 40°F (4.4°C); Freezing Solidification 32°F",
      "details": "Continuous temperature control below 40°F drastically slows enzyme kinetics and microbiological spoilage rates in perishable food matrices."
    },
    "safetyStandard": {
      "organization": "FDA / USDA FSIS",
      "standard": "FDA Food Code 2022 § 3-501.16 / USDA Cold Storage Guidelines",
      "citation": "Perishable foods must be held continuously at or below 40°F (4.4°C) to maintain food safety."
    },
    "applianceSpecs": {
      "parameter": "Consistent Interior Cold Maintenance",
      "guideline": "Store on interior refrigerator shelves (34°F–38°F) in airtight sealed containers to prevent cross-contamination and moisture loss."
    }
  },
  "pot-pies-freezer": {
    "materialThermal": {
      "property": "Cold-Holding Microbial Latency Threshold",
      "threshold": "Danger Zone Threshold 40°F (4.4°C); Freezing Solidification 32°F",
      "details": "Continuous temperature control below 40°F drastically slows enzyme kinetics and microbiological spoilage rates in perishable food matrices."
    },
    "safetyStandard": {
      "organization": "FDA / USDA FSIS",
      "standard": "FDA Food Code 2022 § 3-501.16 / USDA Cold Storage Guidelines",
      "citation": "Perishable foods must be held continuously at or below 40°F (4.4°C) to maintain food safety."
    },
    "applianceSpecs": {
      "parameter": "Consistent Interior Cold Maintenance",
      "guideline": "Store on interior refrigerator shelves (34°F–38°F) in airtight sealed containers to prevent cross-contamination and moisture loss."
    }
  },
  "quiche-freezer": {
    "materialThermal": {
      "property": "Cold-Holding Microbial Latency Threshold",
      "threshold": "Danger Zone Threshold 40°F (4.4°C); Freezing Solidification 32°F",
      "details": "Continuous temperature control below 40°F drastically slows enzyme kinetics and microbiological spoilage rates in perishable food matrices."
    },
    "safetyStandard": {
      "organization": "FDA / USDA FSIS",
      "standard": "FDA Food Code 2022 § 3-501.16 / USDA Cold Storage Guidelines",
      "citation": "Perishable foods must be held continuously at or below 40°F (4.4°C) to maintain food safety."
    },
    "applianceSpecs": {
      "parameter": "Consistent Interior Cold Maintenance",
      "guideline": "Store on interior refrigerator shelves (34°F–38°F) in airtight sealed containers to prevent cross-contamination and moisture loss."
    }
  },
  "casserole-freezer": {
    "materialThermal": {
      "property": "Cold-Holding Microbial Latency Threshold",
      "threshold": "Danger Zone Threshold 40°F (4.4°C); Freezing Solidification 32°F",
      "details": "Continuous temperature control below 40°F drastically slows enzyme kinetics and microbiological spoilage rates in perishable food matrices."
    },
    "safetyStandard": {
      "organization": "FDA / USDA FSIS",
      "standard": "FDA Food Code 2022 § 3-501.16 / USDA Cold Storage Guidelines",
      "citation": "Perishable foods must be held continuously at or below 40°F (4.4°C) to maintain food safety."
    },
    "applianceSpecs": {
      "parameter": "Consistent Interior Cold Maintenance",
      "guideline": "Store on interior refrigerator shelves (34°F–38°F) in airtight sealed containers to prevent cross-contamination and moisture loss."
    }
  },
  "meatballs-freezer": {
    "materialThermal": {
      "property": "Cold-Holding Microbial Latency Threshold",
      "threshold": "Danger Zone Threshold 40°F (4.4°C); Freezing Solidification 32°F",
      "details": "Continuous temperature control below 40°F drastically slows enzyme kinetics and microbiological spoilage rates in perishable food matrices."
    },
    "safetyStandard": {
      "organization": "FDA / USDA FSIS",
      "standard": "FDA Food Code 2022 § 3-501.16 / USDA Cold Storage Guidelines",
      "citation": "Perishable foods must be held continuously at or below 40°F (4.4°C) to maintain food safety."
    },
    "applianceSpecs": {
      "parameter": "Consistent Interior Cold Maintenance",
      "guideline": "Store on interior refrigerator shelves (34°F–38°F) in airtight sealed containers to prevent cross-contamination and moisture loss."
    }
  },
  "meatloaf-freezer": {
    "materialThermal": {
      "property": "Cold-Holding Microbial Latency Threshold",
      "threshold": "Danger Zone Threshold 40°F (4.4°C); Freezing Solidification 32°F",
      "details": "Continuous temperature control below 40°F drastically slows enzyme kinetics and microbiological spoilage rates in perishable food matrices."
    },
    "safetyStandard": {
      "organization": "FDA / USDA FSIS",
      "standard": "FDA Food Code 2022 § 3-501.16 / USDA Cold Storage Guidelines",
      "citation": "Perishable foods must be held continuously at or below 40°F (4.4°C) to maintain food safety."
    },
    "applianceSpecs": {
      "parameter": "Consistent Interior Cold Maintenance",
      "guideline": "Store on interior refrigerator shelves (34°F–38°F) in airtight sealed containers to prevent cross-contamination and moisture loss."
    }
  },
  "pulled-pork-freezer": {
    "materialThermal": {
      "property": "Whole Muscle Myoglobin Oxidation & Microbial Latency",
      "threshold": "Browning Oxidation >38°F (3.3°C); Shelf Life: 3–5 Days",
      "details": "Intact muscle tissue has an internal sterile environment; surface bacteria are delayed at 34°F–38°F, giving intact steaks and roasts 3–5 days of safe storage."
    },
    "safetyStandard": {
      "organization": "USDA FSIS",
      "standard": "FSIS Cold Storage Specifications",
      "citation": "Raw steaks, chops, and roasts remain safe for 3–5 days at <=40°F, or 6–12 months frozen at 0°F."
    },
    "applianceSpecs": {
      "parameter": "Lowest Shelf Drip Protection",
      "guideline": "Place on the lowest shelf in original butcher wrap or rimmed plate at 34°F–36°F to contain juices."
    }
  },
  "mac-and-cheese-freezer": {
    "materialThermal": {
      "property": "Lactic Acid Bacteria Inactivation & Lipolysis",
      "threshold": "Psychrotrophic Spore Outgrowth >40°F (4.4°C); Shelf Life: 7 Days (Milk)",
      "details": "Pasteurized dairy holds cold-tolerant spore-formers that slowly metabolize lactose; steady cold suppresses souring and whey separation."
    },
    "safetyStandard": {
      "organization": "FDA",
      "standard": "Grade 'A' Pasteurized Milk Ordinance (PMO) 2019",
      "citation": "Maintain pasteurized milk at 40°F or lower; consume within 7 days of opening."
    },
    "applianceSpecs": {
      "parameter": "Main Interior Shelf (Avoid Door Bins)",
      "guideline": "Never store milk in door shelves where temperatures regularly reach 45°F; place in the coldest interior center shelf."
    }
  },
  "stuffed-peppers-freezer": {
    "materialThermal": {
      "property": "Cold-Holding Microbial Latency Threshold",
      "threshold": "Danger Zone Threshold 40°F (4.4°C); Freezing Solidification 32°F",
      "details": "Continuous temperature control below 40°F drastically slows enzyme kinetics and microbiological spoilage rates in perishable food matrices."
    },
    "safetyStandard": {
      "organization": "FDA / USDA FSIS",
      "standard": "FDA Food Code 2022 § 3-501.16 / USDA Cold Storage Guidelines",
      "citation": "Perishable foods must be held continuously at or below 40°F (4.4°C) to maintain food safety."
    },
    "applianceSpecs": {
      "parameter": "Consistent Interior Cold Maintenance",
      "guideline": "Store on interior refrigerator shelves (34°F–38°F) in airtight sealed containers to prevent cross-contamination and moisture loss."
    }
  },
  "enchiladas-freezer": {
    "materialThermal": {
      "property": "Cold-Holding Microbial Latency Threshold",
      "threshold": "Danger Zone Threshold 40°F (4.4°C); Freezing Solidification 32°F",
      "details": "Continuous temperature control below 40°F drastically slows enzyme kinetics and microbiological spoilage rates in perishable food matrices."
    },
    "safetyStandard": {
      "organization": "FDA / USDA FSIS",
      "standard": "FDA Food Code 2022 § 3-501.16 / USDA Cold Storage Guidelines",
      "citation": "Perishable foods must be held continuously at or below 40°F (4.4°C) to maintain food safety."
    },
    "applianceSpecs": {
      "parameter": "Consistent Interior Cold Maintenance",
      "guideline": "Store on interior refrigerator shelves (34°F–38°F) in airtight sealed containers to prevent cross-contamination and moisture loss."
    }
  },
  "burritos-freezer": {
    "materialThermal": {
      "property": "Cold-Holding Microbial Latency Threshold",
      "threshold": "Danger Zone Threshold 40°F (4.4°C); Freezing Solidification 32°F",
      "details": "Continuous temperature control below 40°F drastically slows enzyme kinetics and microbiological spoilage rates in perishable food matrices."
    },
    "safetyStandard": {
      "organization": "FDA / USDA FSIS",
      "standard": "FDA Food Code 2022 § 3-501.16 / USDA Cold Storage Guidelines",
      "citation": "Perishable foods must be held continuously at or below 40°F (4.4°C) to maintain food safety."
    },
    "applianceSpecs": {
      "parameter": "Consistent Interior Cold Maintenance",
      "guideline": "Store on interior refrigerator shelves (34°F–38°F) in airtight sealed containers to prevent cross-contamination and moisture loss."
    }
  }
};
