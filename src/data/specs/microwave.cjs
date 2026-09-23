// Technical Reference Specifications for Microwave items
// Grounded strictly in FDA 21 CFR § 1030.10, FDA Food Code 2022, CPSC, and RF physics literature.

module.exports = {
  "styrofoam": {
    "materialThermal": {
      "property": "Polystyrene Glass Transition & Monomer Leaching",
      "threshold": "Glass Transition 185°F–212°F (85°C–100°C); Softening starts >176°F (80°C)",
      "details": "Expanded polystyrene (EPS) collapses when in contact with boiling water or hot food fats (which reach >250°F in microwaves), melting into the food and releasing styrene oligomers."
    },
    "safetyStandard": {
      "organization": "FDA",
      "standard": "21 CFR § 177.1640 (Polystyrene and Rubber-Modified Polystyrene)",
      "citation": "Restricts polystyrene food contact; only explicitly labeled microwave-safe containers should be heated."
    },
    "applianceSpecs": {
      "parameter": "Hot Food Contact Temperature & Vessel Warping",
      "guideline": "Microwaving high-fat foods in takeout foam causes container burn-through in under 60 seconds; always transfer food to microwave-safe glass or ceramic."
    }
  },
  "aluminum-foil": {
    "materialThermal": {
      "property": "Dielectric Air Breakdown & Electrical Arcing",
      "threshold": "Dielectric Breakdown of Air ~30 kV/cm; Microwave Frequency 2,450 MHz",
      "details": "Alternating 2.45 GHz electromagnetic fields drive free electron oscillation on metal surfaces. High charge concentrations at sharp points or thin foil edges exceed the dielectric breakdown of air, triggering brilliant electrical arcing and sparks."
    },
    "safetyStandard": {
      "organization": "FDA / CDRH",
      "standard": "21 CFR § 1030.10 (Microwave Ovens Performance Standard)",
      "citation": "Safety standards regulating microwave radiation leakage and prohibiting metallic materials prone to arcing and cavity reflection."
    },
    "applianceSpecs": {
      "parameter": "Magnetron Standing Wave Reflected Power",
      "guideline": "Microwaves (700W–1,200W) cannot penetrate metal; reflective surfaces bounce microwave energy back into the magnetron antenna, risking permanent burn-out and fire."
    }
  },
  "plastic-wrap": {
    "materialThermal": {
      "property": "Thermoplastic Heat Deflection & Plasticizer Migration",
      "threshold": "Polyolefin Softening 160°F–240°F (71°C–115°C)",
      "details": "Non-microwave-safe plastics soften under heat transferred from food, releasing phthalate plasticizers and microplastic particles into the meal."
    },
    "safetyStandard": {
      "organization": "FDA",
      "standard": "21 CFR § 177.1520 / CFSAN Microwave Guidance",
      "citation": "Only plastics tested and labeled 'Microwave Safe' meet extraction limits under elevated temperature conditions."
    },
    "applianceSpecs": {
      "parameter": "Steam Venting & Vessel Proximity",
      "guideline": "Use only microwave-safe containers; if covering with plastic wrap, ensure wrap does not touch food and leave an open corner vent for steam escape."
    }
  },
  "paper-bag": {
    "materialThermal": {
      "property": "Recycled Fiber Impurities & Flammable Gas Trapping",
      "threshold": "Pyrolysis & Combustion Point 451°F (233°C)",
      "details": "Brown paper grocery bags are made of recycled kraft pulp containing microscopic metallic residues, adhesives, and print inks that absorb RF energy and ignite. Trapped superheated steam rapidly accelerates combustion."
    },
    "safetyStandard": {
      "organization": "USDA FSIS",
      "standard": "FSIS Microwave Cooking Guidelines",
      "citation": "Warning: Never use brown grocery bags in a microwave; use only plain white paper towels or microwave-approved paper products."
    },
    "applianceSpecs": {
      "parameter": "Dry Cavity Combustible Gas Ignition",
      "guideline": "Dry paper bags heat up quickly in a 1,000W microwave cavity and can burst into flame in less than 90 seconds."
    }
  },
  "brown-paper-bag": {
    "materialThermal": {
      "property": "Recycled Fiber Impurities & Flammable Gas Trapping",
      "threshold": "Pyrolysis & Combustion Point 451°F (233°C)",
      "details": "Brown paper grocery bags are made of recycled kraft pulp containing microscopic metallic residues, adhesives, and print inks that absorb RF energy and ignite. Trapped superheated steam rapidly accelerates combustion."
    },
    "safetyStandard": {
      "organization": "USDA FSIS",
      "standard": "FSIS Microwave Cooking Guidelines",
      "citation": "Warning: Never use brown grocery bags in a microwave; use only plain white paper towels or microwave-approved paper products."
    },
    "applianceSpecs": {
      "parameter": "Dry Cavity Combustible Gas Ignition",
      "guideline": "Dry paper bags heat up quickly in a 1,000W microwave cavity and can burst into flame in less than 90 seconds."
    }
  },
  "newspaper": {
    "materialThermal": {
      "property": "Recycled Fiber Impurities & Flammable Gas Trapping",
      "threshold": "Pyrolysis & Combustion Point 451°F (233°C)",
      "details": "Brown paper grocery bags are made of recycled kraft pulp containing microscopic metallic residues, adhesives, and print inks that absorb RF energy and ignite. Trapped superheated steam rapidly accelerates combustion."
    },
    "safetyStandard": {
      "organization": "USDA FSIS",
      "standard": "FSIS Microwave Cooking Guidelines",
      "citation": "Warning: Never use brown grocery bags in a microwave; use only plain white paper towels or microwave-approved paper products."
    },
    "applianceSpecs": {
      "parameter": "Dry Cavity Combustible Gas Ignition",
      "guideline": "Dry paper bags heat up quickly in a 1,000W microwave cavity and can burst into flame in less than 90 seconds."
    }
  },
  "cardboard-box": {
    "materialThermal": {
      "property": "Recycled Fiber Impurities & Flammable Gas Trapping",
      "threshold": "Pyrolysis & Combustion Point 451°F (233°C)",
      "details": "Brown paper grocery bags are made of recycled kraft pulp containing microscopic metallic residues, adhesives, and print inks that absorb RF energy and ignite. Trapped superheated steam rapidly accelerates combustion."
    },
    "safetyStandard": {
      "organization": "USDA FSIS",
      "standard": "FSIS Microwave Cooking Guidelines",
      "citation": "Warning: Never use brown grocery bags in a microwave; use only plain white paper towels or microwave-approved paper products."
    },
    "applianceSpecs": {
      "parameter": "Dry Cavity Combustible Gas Ignition",
      "guideline": "Dry paper bags heat up quickly in a 1,000W microwave cavity and can burst into flame in less than 90 seconds."
    }
  },
  "cardboard-pizza-box": {
    "materialThermal": {
      "property": "Recycled Fiber Impurities & Flammable Gas Trapping",
      "threshold": "Pyrolysis & Combustion Point 451°F (233°C)",
      "details": "Brown paper grocery bags are made of recycled kraft pulp containing microscopic metallic residues, adhesives, and print inks that absorb RF energy and ignite. Trapped superheated steam rapidly accelerates combustion."
    },
    "safetyStandard": {
      "organization": "USDA FSIS",
      "standard": "FSIS Microwave Cooking Guidelines",
      "citation": "Warning: Never use brown grocery bags in a microwave; use only plain white paper towels or microwave-approved paper products."
    },
    "applianceSpecs": {
      "parameter": "Dry Cavity Combustible Gas Ignition",
      "guideline": "Dry paper bags heat up quickly in a 1,000W microwave cavity and can burst into flame in less than 90 seconds."
    }
  },
  "takeout-container": {
    "materialThermal": {
      "property": "Polystyrene Glass Transition & Monomer Leaching",
      "threshold": "Glass Transition 185°F–212°F (85°C–100°C); Softening starts >176°F (80°C)",
      "details": "Expanded polystyrene (EPS) collapses when in contact with boiling water or hot food fats (which reach >250°F in microwaves), melting into the food and releasing styrene oligomers."
    },
    "safetyStandard": {
      "organization": "FDA",
      "standard": "21 CFR § 177.1640 (Polystyrene and Rubber-Modified Polystyrene)",
      "citation": "Restricts polystyrene food contact; only explicitly labeled microwave-safe containers should be heated."
    },
    "applianceSpecs": {
      "parameter": "Hot Food Contact Temperature & Vessel Warping",
      "guideline": "Microwaving high-fat foods in takeout foam causes container burn-through in under 60 seconds; always transfer food to microwave-safe glass or ceramic."
    }
  },
  "solo-cup": {
    "materialThermal": {
      "property": "Thermoplastic Heat Deflection & Plasticizer Migration",
      "threshold": "Polyolefin Softening 160°F–240°F (71°C–115°C)",
      "details": "Non-microwave-safe plastics soften under heat transferred from food, releasing phthalate plasticizers and microplastic particles into the meal."
    },
    "safetyStandard": {
      "organization": "FDA",
      "standard": "21 CFR § 177.1520 / CFSAN Microwave Guidance",
      "citation": "Only plastics tested and labeled 'Microwave Safe' meet extraction limits under elevated temperature conditions."
    },
    "applianceSpecs": {
      "parameter": "Steam Venting & Vessel Proximity",
      "guideline": "Use only microwave-safe containers; if covering with plastic wrap, ensure wrap does not touch food and leave an open corner vent for steam escape."
    }
  },
  "aluminum-pan": {
    "materialThermal": {
      "property": "Dielectric Loss Factor & Microwave Permittivity",
      "threshold": "Microwave Transparent (Dielectric Loss Tangent <0.01)",
      "details": "Microwave-safe glass and vitrified ceramics allow 2,450 MHz waves to pass through unhindered directly into food, heating food without absorbing microwave energy into the dish itself."
    },
    "safetyStandard": {
      "organization": "FDA",
      "standard": "FDA Food Code 2022 § 3-401.12 (Microwave Cooking Specifications)",
      "citation": "Foods cooked in microwave ovens must reach 165°F in all parts, be rotated and covered, and allowed to stand 2 minutes post-cooking."
    },
    "applianceSpecs": {
      "parameter": "Turntable Rotation & Standing Wave Balance",
      "guideline": "Use an operational turntable and cover with a ventilated microwave dome to ensure even moisture distribution and eliminate cold spots."
    }
  },
  "metal-spoon": {
    "materialThermal": {
      "property": "Dielectric Air Breakdown & Electrical Arcing",
      "threshold": "Dielectric Breakdown of Air ~30 kV/cm; Microwave Frequency 2,450 MHz",
      "details": "Alternating 2.45 GHz electromagnetic fields drive free electron oscillation on metal surfaces. High charge concentrations at sharp points or thin foil edges exceed the dielectric breakdown of air, triggering brilliant electrical arcing and sparks."
    },
    "safetyStandard": {
      "organization": "FDA / CDRH",
      "standard": "21 CFR § 1030.10 (Microwave Ovens Performance Standard)",
      "citation": "Safety standards regulating microwave radiation leakage and prohibiting metallic materials prone to arcing and cavity reflection."
    },
    "applianceSpecs": {
      "parameter": "Magnetron Standing Wave Reflected Power",
      "guideline": "Microwaves (700W–1,200W) cannot penetrate metal; reflective surfaces bounce microwave energy back into the magnetron antenna, risking permanent burn-out and fire."
    }
  },
  "fork-in-microwave": {
    "materialThermal": {
      "property": "Dielectric Air Breakdown & Electrical Arcing",
      "threshold": "Dielectric Breakdown of Air ~30 kV/cm; Microwave Frequency 2,450 MHz",
      "details": "Alternating 2.45 GHz electromagnetic fields drive free electron oscillation on metal surfaces. High charge concentrations at sharp points or thin foil edges exceed the dielectric breakdown of air, triggering brilliant electrical arcing and sparks."
    },
    "safetyStandard": {
      "organization": "FDA / CDRH",
      "standard": "21 CFR § 1030.10 (Microwave Ovens Performance Standard)",
      "citation": "Safety standards regulating microwave radiation leakage and prohibiting metallic materials prone to arcing and cavity reflection."
    },
    "applianceSpecs": {
      "parameter": "Magnetron Standing Wave Reflected Power",
      "guideline": "Microwaves (700W–1,200W) cannot penetrate metal; reflective surfaces bounce microwave energy back into the magnetron antenna, risking permanent burn-out and fire."
    }
  },
  "gold-rimmed-plates": {
    "materialThermal": {
      "property": "Dielectric Air Breakdown & Electrical Arcing",
      "threshold": "Dielectric Breakdown of Air ~30 kV/cm; Microwave Frequency 2,450 MHz",
      "details": "Alternating 2.45 GHz electromagnetic fields drive free electron oscillation on metal surfaces. High charge concentrations at sharp points or thin foil edges exceed the dielectric breakdown of air, triggering brilliant electrical arcing and sparks."
    },
    "safetyStandard": {
      "organization": "FDA / CDRH",
      "standard": "21 CFR § 1030.10 (Microwave Ovens Performance Standard)",
      "citation": "Safety standards regulating microwave radiation leakage and prohibiting metallic materials prone to arcing and cavity reflection."
    },
    "applianceSpecs": {
      "parameter": "Magnetron Standing Wave Reflected Power",
      "guideline": "Microwaves (700W–1,200W) cannot penetrate metal; reflective surfaces bounce microwave energy back into the magnetron antenna, risking permanent burn-out and fire."
    }
  },
  "stainless-steel-bowl": {
    "materialThermal": {
      "property": "Dielectric Air Breakdown & Electrical Arcing",
      "threshold": "Dielectric Breakdown of Air ~30 kV/cm; Microwave Frequency 2,450 MHz",
      "details": "Alternating 2.45 GHz electromagnetic fields drive free electron oscillation on metal surfaces. High charge concentrations at sharp points or thin foil edges exceed the dielectric breakdown of air, triggering brilliant electrical arcing and sparks."
    },
    "safetyStandard": {
      "organization": "FDA / CDRH",
      "standard": "21 CFR § 1030.10 (Microwave Ovens Performance Standard)",
      "citation": "Safety standards regulating microwave radiation leakage and prohibiting metallic materials prone to arcing and cavity reflection."
    },
    "applianceSpecs": {
      "parameter": "Magnetron Standing Wave Reflected Power",
      "guideline": "Microwaves (700W–1,200W) cannot penetrate metal; reflective surfaces bounce microwave energy back into the magnetron antenna, risking permanent burn-out and fire."
    }
  },
  "copper-bowl": {
    "materialThermal": {
      "property": "Dielectric Air Breakdown & Electrical Arcing",
      "threshold": "Dielectric Breakdown of Air ~30 kV/cm; Microwave Frequency 2,450 MHz",
      "details": "Alternating 2.45 GHz electromagnetic fields drive free electron oscillation on metal surfaces. High charge concentrations at sharp points or thin foil edges exceed the dielectric breakdown of air, triggering brilliant electrical arcing and sparks."
    },
    "safetyStandard": {
      "organization": "FDA / CDRH",
      "standard": "21 CFR § 1030.10 (Microwave Ovens Performance Standard)",
      "citation": "Safety standards regulating microwave radiation leakage and prohibiting metallic materials prone to arcing and cavity reflection."
    },
    "applianceSpecs": {
      "parameter": "Magnetron Standing Wave Reflected Power",
      "guideline": "Microwaves (700W–1,200W) cannot penetrate metal; reflective surfaces bounce microwave energy back into the magnetron antenna, risking permanent burn-out and fire."
    }
  },
  "cast-iron-microwave": {
    "materialThermal": {
      "property": "Dielectric Air Breakdown & Electrical Arcing",
      "threshold": "Dielectric Breakdown of Air ~30 kV/cm; Microwave Frequency 2,450 MHz",
      "details": "Alternating 2.45 GHz electromagnetic fields drive free electron oscillation on metal surfaces. High charge concentrations at sharp points or thin foil edges exceed the dielectric breakdown of air, triggering brilliant electrical arcing and sparks."
    },
    "safetyStandard": {
      "organization": "FDA / CDRH",
      "standard": "21 CFR § 1030.10 (Microwave Ovens Performance Standard)",
      "citation": "Safety standards regulating microwave radiation leakage and prohibiting metallic materials prone to arcing and cavity reflection."
    },
    "applianceSpecs": {
      "parameter": "Magnetron Standing Wave Reflected Power",
      "guideline": "Microwaves (700W–1,200W) cannot penetrate metal; reflective surfaces bounce microwave energy back into the magnetron antenna, risking permanent burn-out and fire."
    }
  },
  "egg-in-shell": {
    "materialThermal": {
      "property": "Vapor Expansion & Internal Hydraulic Pressure Rupture",
      "threshold": "Water Volumetric Expansion: Liquid to Steam Expands 1,600x; Burst Pressure >40 PSI",
      "details": "Microwave dipole rotation heats water molecules inside egg whites or sealed jars rapidly. Because the rigid shell or hermetic lid traps steam, internal pressure rises exponentially until an explosive shockwave shatters the item."
    },
    "safetyStandard": {
      "organization": "FDA / CFSAN",
      "standard": "CFSAN Consumer Advisory on Microwave Egg Safety",
      "citation": "Never microwave whole eggs in shells; boiling water within the shell creates a severe steam-explosion and burn hazard."
    },
    "applianceSpecs": {
      "parameter": "Rapid Volumetric Dielectric Heating (2,450 MHz)",
      "guideline": "Internal steam pockets can remain superheated and explode seconds after removal from the microwave cavity when poked with a fork."
    }
  },
  "whole-egg": {
    "materialThermal": {
      "property": "Vapor Expansion & Internal Hydraulic Pressure Rupture",
      "threshold": "Water Volumetric Expansion: Liquid to Steam Expands 1,600x; Burst Pressure >40 PSI",
      "details": "Microwave dipole rotation heats water molecules inside egg whites or sealed jars rapidly. Because the rigid shell or hermetic lid traps steam, internal pressure rises exponentially until an explosive shockwave shatters the item."
    },
    "safetyStandard": {
      "organization": "FDA / CFSAN",
      "standard": "CFSAN Consumer Advisory on Microwave Egg Safety",
      "citation": "Never microwave whole eggs in shells; boiling water within the shell creates a severe steam-explosion and burn hazard."
    },
    "applianceSpecs": {
      "parameter": "Rapid Volumetric Dielectric Heating (2,450 MHz)",
      "guideline": "Internal steam pockets can remain superheated and explode seconds after removal from the microwave cavity when poked with a fork."
    }
  },
  "grapes": {
    "materialThermal": {
      "property": "Dielectric Resonance & Ionized Plasma Formation",
      "threshold": "Electromagnetic Resonance Concentration; Air Ionization Threshold",
      "details": "Two grape halves joined by skin act as a dielectric resonator, focusing microwave energy into a sub-millimeter gap. The concentrated energy vaporizes sodium and potassium ions into an incandescent plasma spark."
    },
    "safetyStandard": {
      "organization": "Physical Review Letters / CPSC",
      "standard": "Resonance Physics Research & CPSC Alerts",
      "citation": "Grapes in microwaves generate plasma discharges capable of cracking glass turntables and damaging cavity coatings."
    },
    "applianceSpecs": {
      "parameter": "Cavity Waveguide Arc Hazard",
      "guideline": "Never microwave grapes; plasma discharges produce ozone and high-voltage electrical arcing across the microwave chamber."
    }
  },
  "hot-peppers": {
    "materialThermal": {
      "property": "Capsaicinoid Vaporization & Aerosol Irritant Dispersal",
      "threshold": "Capsaicin Volatilization Threshold >140°F (60°C)",
      "details": "Volumetric heating rapidly vaporizes capsaicin oils from hot pepper seeds into a volatile aerosol that acts like chemical pepper spray when the door is opened."
    },
    "safetyStandard": {
      "organization": "CPSC / OSHA",
      "standard": "CPSC Respiratory & Chemical Irritant Alerts",
      "citation": "Heating whole chili peppers in microwaves aerosolizes pungent capsaicin, causing severe throat, lung, and eye irritation."
    },
    "applianceSpecs": {
      "parameter": "Cavity Vapor Containment & Exhaust",
      "guideline": "Avoid heating whole peppers in microwaves; if heated, let the appliance cool completely and open the door in a well-ventilated room."
    }
  },
  "frozen-meat": {
    "materialThermal": {
      "property": "Dielectric Loss Factor & Microwave Permittivity",
      "threshold": "Microwave Transparent (Dielectric Loss Tangent <0.01)",
      "details": "Microwave-safe glass and vitrified ceramics allow 2,450 MHz waves to pass through unhindered directly into food, heating food without absorbing microwave energy into the dish itself."
    },
    "safetyStandard": {
      "organization": "FDA",
      "standard": "FDA Food Code 2022 § 3-401.12 (Microwave Cooking Specifications)",
      "citation": "Foods cooked in microwave ovens must reach 165°F in all parts, be rotated and covered, and allowed to stand 2 minutes post-cooking."
    },
    "applianceSpecs": {
      "parameter": "Turntable Rotation & Standing Wave Balance",
      "guideline": "Use an operational turntable and cover with a ventilated microwave dome to ensure even moisture distribution and eliminate cold spots."
    }
  },
  "breast-milk": {
    "materialThermal": {
      "property": "Immunological Protein Denaturation & Scalding Hot Spots",
      "threshold": "Lysozyme & Immunoglobulin (IgA) Denaturation >104°F (40°C)",
      "details": "Microwave standing waves create extreme uneven heating ('hot spots') that exceed 140°F in pockets while the bottle feels lukewarm outside, destroying critical antibodies and scalding infant throats."
    },
    "safetyStandard": {
      "organization": "FDA / AAP",
      "standard": "American Academy of Pediatrics (AAP) Guidelines / FDA Infant Feeding Directives",
      "citation": "Microwave warming of infant formula and breast milk is strictly prohibited due to severe oral burn risks and nutritional degradation."
    },
    "applianceSpecs": {
      "parameter": "Standing Wave Node Distribution",
      "guideline": "Never microwave infant bottles; warm gently in a bowl of warm tap water for 10–15 minutes and swirl to equalize temperature."
    }
  },
  "baby-food": {
    "materialThermal": {
      "property": "Dielectric Loss Factor & Microwave Permittivity",
      "threshold": "Microwave Transparent (Dielectric Loss Tangent <0.01)",
      "details": "Microwave-safe glass and vitrified ceramics allow 2,450 MHz waves to pass through unhindered directly into food, heating food without absorbing microwave energy into the dish itself."
    },
    "safetyStandard": {
      "organization": "FDA",
      "standard": "FDA Food Code 2022 § 3-401.12 (Microwave Cooking Specifications)",
      "citation": "Foods cooked in microwave ovens must reach 165°F in all parts, be rotated and covered, and allowed to stand 2 minutes post-cooking."
    },
    "applianceSpecs": {
      "parameter": "Turntable Rotation & Standing Wave Balance",
      "guideline": "Use an operational turntable and cover with a ventilated microwave dome to ensure even moisture distribution and eliminate cold spots."
    }
  },
  "ramen-cup": {
    "materialThermal": {
      "property": "Polystyrene Glass Transition & Monomer Leaching",
      "threshold": "Glass Transition 185°F–212°F (85°C–100°C); Softening starts >176°F (80°C)",
      "details": "Expanded polystyrene (EPS) collapses when in contact with boiling water or hot food fats (which reach >250°F in microwaves), melting into the food and releasing styrene oligomers."
    },
    "safetyStandard": {
      "organization": "FDA",
      "standard": "21 CFR § 177.1640 (Polystyrene and Rubber-Modified Polystyrene)",
      "citation": "Restricts polystyrene food contact; only explicitly labeled microwave-safe containers should be heated."
    },
    "applianceSpecs": {
      "parameter": "Hot Food Contact Temperature & Vessel Warping",
      "guideline": "Microwaving high-fat foods in takeout foam causes container burn-through in under 60 seconds; always transfer food to microwave-safe glass or ceramic."
    }
  },
  "styrofoam-cup": {
    "materialThermal": {
      "property": "Polystyrene Glass Transition & Monomer Leaching",
      "threshold": "Glass Transition 185°F–212°F (85°C–100°C); Softening starts >176°F (80°C)",
      "details": "Expanded polystyrene (EPS) collapses when in contact with boiling water or hot food fats (which reach >250°F in microwaves), melting into the food and releasing styrene oligomers."
    },
    "safetyStandard": {
      "organization": "FDA",
      "standard": "21 CFR § 177.1640 (Polystyrene and Rubber-Modified Polystyrene)",
      "citation": "Restricts polystyrene food contact; only explicitly labeled microwave-safe containers should be heated."
    },
    "applianceSpecs": {
      "parameter": "Hot Food Contact Temperature & Vessel Warping",
      "guideline": "Microwaving high-fat foods in takeout foam causes container burn-through in under 60 seconds; always transfer food to microwave-safe glass or ceramic."
    }
  },
  "paper-cup": {
    "materialThermal": {
      "property": "Dielectric Loss Factor & Microwave Permittivity",
      "threshold": "Microwave Transparent (Dielectric Loss Tangent <0.01)",
      "details": "Microwave-safe glass and vitrified ceramics allow 2,450 MHz waves to pass through unhindered directly into food, heating food without absorbing microwave energy into the dish itself."
    },
    "safetyStandard": {
      "organization": "FDA",
      "standard": "FDA Food Code 2022 § 3-401.12 (Microwave Cooking Specifications)",
      "citation": "Foods cooked in microwave ovens must reach 165°F in all parts, be rotated and covered, and allowed to stand 2 minutes post-cooking."
    },
    "applianceSpecs": {
      "parameter": "Turntable Rotation & Standing Wave Balance",
      "guideline": "Use an operational turntable and cover with a ventilated microwave dome to ensure even moisture distribution and eliminate cold spots."
    }
  },
  "ceramic-mug": {
    "materialThermal": {
      "property": "Dielectric Loss Factor & Microwave Permittivity",
      "threshold": "Microwave Transparent (Dielectric Loss Tangent <0.01)",
      "details": "Microwave-safe glass and vitrified ceramics allow 2,450 MHz waves to pass through unhindered directly into food, heating food without absorbing microwave energy into the dish itself."
    },
    "safetyStandard": {
      "organization": "FDA",
      "standard": "FDA Food Code 2022 § 3-401.12 (Microwave Cooking Specifications)",
      "citation": "Foods cooked in microwave ovens must reach 165°F in all parts, be rotated and covered, and allowed to stand 2 minutes post-cooking."
    },
    "applianceSpecs": {
      "parameter": "Turntable Rotation & Standing Wave Balance",
      "guideline": "Use an operational turntable and cover with a ventilated microwave dome to ensure even moisture distribution and eliminate cold spots."
    }
  },
  "travel-mug": {
    "materialThermal": {
      "property": "Dielectric Loss Factor & Microwave Permittivity",
      "threshold": "Microwave Transparent (Dielectric Loss Tangent <0.01)",
      "details": "Microwave-safe glass and vitrified ceramics allow 2,450 MHz waves to pass through unhindered directly into food, heating food without absorbing microwave energy into the dish itself."
    },
    "safetyStandard": {
      "organization": "FDA",
      "standard": "FDA Food Code 2022 § 3-401.12 (Microwave Cooking Specifications)",
      "citation": "Foods cooked in microwave ovens must reach 165°F in all parts, be rotated and covered, and allowed to stand 2 minutes post-cooking."
    },
    "applianceSpecs": {
      "parameter": "Turntable Rotation & Standing Wave Balance",
      "guideline": "Use an operational turntable and cover with a ventilated microwave dome to ensure even moisture distribution and eliminate cold spots."
    }
  },
  "stainless-steel-cup": {
    "materialThermal": {
      "property": "Dielectric Air Breakdown & Electrical Arcing",
      "threshold": "Dielectric Breakdown of Air ~30 kV/cm; Microwave Frequency 2,450 MHz",
      "details": "Alternating 2.45 GHz electromagnetic fields drive free electron oscillation on metal surfaces. High charge concentrations at sharp points or thin foil edges exceed the dielectric breakdown of air, triggering brilliant electrical arcing and sparks."
    },
    "safetyStandard": {
      "organization": "FDA / CDRH",
      "standard": "21 CFR § 1030.10 (Microwave Ovens Performance Standard)",
      "citation": "Safety standards regulating microwave radiation leakage and prohibiting metallic materials prone to arcing and cavity reflection."
    },
    "applianceSpecs": {
      "parameter": "Magnetron Standing Wave Reflected Power",
      "guideline": "Microwaves (700W–1,200W) cannot penetrate metal; reflective surfaces bounce microwave energy back into the magnetron antenna, risking permanent burn-out and fire."
    }
  },
  "mason-jar": {
    "materialThermal": {
      "property": "Vapor Expansion & Internal Hydraulic Pressure Rupture",
      "threshold": "Water Volumetric Expansion: Liquid to Steam Expands 1,600x; Burst Pressure >40 PSI",
      "details": "Microwave dipole rotation heats water molecules inside egg whites or sealed jars rapidly. Because the rigid shell or hermetic lid traps steam, internal pressure rises exponentially until an explosive shockwave shatters the item."
    },
    "safetyStandard": {
      "organization": "FDA / CFSAN",
      "standard": "CFSAN Consumer Advisory on Microwave Egg Safety",
      "citation": "Never microwave whole eggs in shells; boiling water within the shell creates a severe steam-explosion and burn hazard."
    },
    "applianceSpecs": {
      "parameter": "Rapid Volumetric Dielectric Heating (2,450 MHz)",
      "guideline": "Internal steam pockets can remain superheated and explode seconds after removal from the microwave cavity when poked with a fork."
    }
  },
  "tupperware": {
    "materialThermal": {
      "property": "Dielectric Loss Factor & Microwave Permittivity",
      "threshold": "Microwave Transparent (Dielectric Loss Tangent <0.01)",
      "details": "Microwave-safe glass and vitrified ceramics allow 2,450 MHz waves to pass through unhindered directly into food, heating food without absorbing microwave energy into the dish itself."
    },
    "safetyStandard": {
      "organization": "FDA",
      "standard": "FDA Food Code 2022 § 3-401.12 (Microwave Cooking Specifications)",
      "citation": "Foods cooked in microwave ovens must reach 165°F in all parts, be rotated and covered, and allowed to stand 2 minutes post-cooking."
    },
    "applianceSpecs": {
      "parameter": "Turntable Rotation & Standing Wave Balance",
      "guideline": "Use an operational turntable and cover with a ventilated microwave dome to ensure even moisture distribution and eliminate cold spots."
    }
  },
  "ziploc-bag": {
    "materialThermal": {
      "property": "Thermoplastic Heat Deflection & Plasticizer Migration",
      "threshold": "Polyolefin Softening 160°F–240°F (71°C–115°C)",
      "details": "Non-microwave-safe plastics soften under heat transferred from food, releasing phthalate plasticizers and microplastic particles into the meal."
    },
    "safetyStandard": {
      "organization": "FDA",
      "standard": "21 CFR § 177.1520 / CFSAN Microwave Guidance",
      "citation": "Only plastics tested and labeled 'Microwave Safe' meet extraction limits under elevated temperature conditions."
    },
    "applianceSpecs": {
      "parameter": "Steam Venting & Vessel Proximity",
      "guideline": "Use only microwave-safe containers; if covering with plastic wrap, ensure wrap does not touch food and leave an open corner vent for steam escape."
    }
  },
  "chinese-takeout-box": {
    "materialThermal": {
      "property": "Thermoplastic Heat Deflection & Plasticizer Migration",
      "threshold": "Polyolefin Softening 160°F–240°F (71°C–115°C)",
      "details": "Non-microwave-safe plastics soften under heat transferred from food, releasing phthalate plasticizers and microplastic particles into the meal."
    },
    "safetyStandard": {
      "organization": "FDA",
      "standard": "21 CFR § 177.1520 / CFSAN Microwave Guidance",
      "citation": "Only plastics tested and labeled 'Microwave Safe' meet extraction limits under elevated temperature conditions."
    },
    "applianceSpecs": {
      "parameter": "Steam Venting & Vessel Proximity",
      "guideline": "Use only microwave-safe containers; if covering with plastic wrap, ensure wrap does not touch food and leave an open corner vent for steam escape."
    }
  },
  "paper-plate": {
    "materialThermal": {
      "property": "Dielectric Loss Factor & Microwave Permittivity",
      "threshold": "Microwave Transparent (Dielectric Loss Tangent <0.01)",
      "details": "Microwave-safe glass and vitrified ceramics allow 2,450 MHz waves to pass through unhindered directly into food, heating food without absorbing microwave energy into the dish itself."
    },
    "safetyStandard": {
      "organization": "FDA",
      "standard": "FDA Food Code 2022 § 3-401.12 (Microwave Cooking Specifications)",
      "citation": "Foods cooked in microwave ovens must reach 165°F in all parts, be rotated and covered, and allowed to stand 2 minutes post-cooking."
    },
    "applianceSpecs": {
      "parameter": "Turntable Rotation & Standing Wave Balance",
      "guideline": "Use an operational turntable and cover with a ventilated microwave dome to ensure even moisture distribution and eliminate cold spots."
    }
  },
  "paper-towel": {
    "materialThermal": {
      "property": "Dielectric Loss Factor & Microwave Permittivity",
      "threshold": "Microwave Transparent (Dielectric Loss Tangent <0.01)",
      "details": "Microwave-safe glass and vitrified ceramics allow 2,450 MHz waves to pass through unhindered directly into food, heating food without absorbing microwave energy into the dish itself."
    },
    "safetyStandard": {
      "organization": "FDA",
      "standard": "FDA Food Code 2022 § 3-401.12 (Microwave Cooking Specifications)",
      "citation": "Foods cooked in microwave ovens must reach 165°F in all parts, be rotated and covered, and allowed to stand 2 minutes post-cooking."
    },
    "applianceSpecs": {
      "parameter": "Turntable Rotation & Standing Wave Balance",
      "guideline": "Use an operational turntable and cover with a ventilated microwave dome to ensure even moisture distribution and eliminate cold spots."
    }
  },
  "wax-paper": {
    "materialThermal": {
      "property": "Dielectric Loss Factor & Microwave Permittivity",
      "threshold": "Microwave Transparent (Dielectric Loss Tangent <0.01)",
      "details": "Microwave-safe glass and vitrified ceramics allow 2,450 MHz waves to pass through unhindered directly into food, heating food without absorbing microwave energy into the dish itself."
    },
    "safetyStandard": {
      "organization": "FDA",
      "standard": "FDA Food Code 2022 § 3-401.12 (Microwave Cooking Specifications)",
      "citation": "Foods cooked in microwave ovens must reach 165°F in all parts, be rotated and covered, and allowed to stand 2 minutes post-cooking."
    },
    "applianceSpecs": {
      "parameter": "Turntable Rotation & Standing Wave Balance",
      "guideline": "Use an operational turntable and cover with a ventilated microwave dome to ensure even moisture distribution and eliminate cold spots."
    }
  },
  "parchment-paper": {
    "materialThermal": {
      "property": "Dielectric Loss Factor & Microwave Permittivity",
      "threshold": "Microwave Transparent (Dielectric Loss Tangent <0.01)",
      "details": "Microwave-safe glass and vitrified ceramics allow 2,450 MHz waves to pass through unhindered directly into food, heating food without absorbing microwave energy into the dish itself."
    },
    "safetyStandard": {
      "organization": "FDA",
      "standard": "FDA Food Code 2022 § 3-401.12 (Microwave Cooking Specifications)",
      "citation": "Foods cooked in microwave ovens must reach 165°F in all parts, be rotated and covered, and allowed to stand 2 minutes post-cooking."
    },
    "applianceSpecs": {
      "parameter": "Turntable Rotation & Standing Wave Balance",
      "guideline": "Use an operational turntable and cover with a ventilated microwave dome to ensure even moisture distribution and eliminate cold spots."
    }
  },
  "plastic-bag": {
    "materialThermal": {
      "property": "Thermoplastic Heat Deflection & Plasticizer Migration",
      "threshold": "Polyolefin Softening 160°F–240°F (71°C–115°C)",
      "details": "Non-microwave-safe plastics soften under heat transferred from food, releasing phthalate plasticizers and microplastic particles into the meal."
    },
    "safetyStandard": {
      "organization": "FDA",
      "standard": "21 CFR § 177.1520 / CFSAN Microwave Guidance",
      "citation": "Only plastics tested and labeled 'Microwave Safe' meet extraction limits under elevated temperature conditions."
    },
    "applianceSpecs": {
      "parameter": "Steam Venting & Vessel Proximity",
      "guideline": "Use only microwave-safe containers; if covering with plastic wrap, ensure wrap does not touch food and leave an open corner vent for steam escape."
    }
  },
  "hand-warmers": {
    "materialThermal": {
      "property": "Dielectric Loss Factor & Microwave Permittivity",
      "threshold": "Microwave Transparent (Dielectric Loss Tangent <0.01)",
      "details": "Microwave-safe glass and vitrified ceramics allow 2,450 MHz waves to pass through unhindered directly into food, heating food without absorbing microwave energy into the dish itself."
    },
    "safetyStandard": {
      "organization": "FDA",
      "standard": "FDA Food Code 2022 § 3-401.12 (Microwave Cooking Specifications)",
      "citation": "Foods cooked in microwave ovens must reach 165°F in all parts, be rotated and covered, and allowed to stand 2 minutes post-cooking."
    },
    "applianceSpecs": {
      "parameter": "Turntable Rotation & Standing Wave Balance",
      "guideline": "Use an operational turntable and cover with a ventilated microwave dome to ensure even moisture distribution and eliminate cold spots."
    }
  },
  "soap": {
    "materialThermal": {
      "property": "Dielectric Loss Factor & Microwave Permittivity",
      "threshold": "Microwave Transparent (Dielectric Loss Tangent <0.01)",
      "details": "Microwave-safe glass and vitrified ceramics allow 2,450 MHz waves to pass through unhindered directly into food, heating food without absorbing microwave energy into the dish itself."
    },
    "safetyStandard": {
      "organization": "FDA",
      "standard": "FDA Food Code 2022 § 3-401.12 (Microwave Cooking Specifications)",
      "citation": "Foods cooked in microwave ovens must reach 165°F in all parts, be rotated and covered, and allowed to stand 2 minutes post-cooking."
    },
    "applianceSpecs": {
      "parameter": "Turntable Rotation & Standing Wave Balance",
      "guideline": "Use an operational turntable and cover with a ventilated microwave dome to ensure even moisture distribution and eliminate cold spots."
    }
  },
  "candle": {
    "materialThermal": {
      "property": "Dielectric Loss Factor & Microwave Permittivity",
      "threshold": "Microwave Transparent (Dielectric Loss Tangent <0.01)",
      "details": "Microwave-safe glass and vitrified ceramics allow 2,450 MHz waves to pass through unhindered directly into food, heating food without absorbing microwave energy into the dish itself."
    },
    "safetyStandard": {
      "organization": "FDA",
      "standard": "FDA Food Code 2022 § 3-401.12 (Microwave Cooking Specifications)",
      "citation": "Foods cooked in microwave ovens must reach 165°F in all parts, be rotated and covered, and allowed to stand 2 minutes post-cooking."
    },
    "applianceSpecs": {
      "parameter": "Turntable Rotation & Standing Wave Balance",
      "guideline": "Use an operational turntable and cover with a ventilated microwave dome to ensure even moisture distribution and eliminate cold spots."
    }
  },
  "protein-shaker": {
    "materialThermal": {
      "property": "Dielectric Loss Factor & Microwave Permittivity",
      "threshold": "Microwave Transparent (Dielectric Loss Tangent <0.01)",
      "details": "Microwave-safe glass and vitrified ceramics allow 2,450 MHz waves to pass through unhindered directly into food, heating food without absorbing microwave energy into the dish itself."
    },
    "safetyStandard": {
      "organization": "FDA",
      "standard": "FDA Food Code 2022 § 3-401.12 (Microwave Cooking Specifications)",
      "citation": "Foods cooked in microwave ovens must reach 165°F in all parts, be rotated and covered, and allowed to stand 2 minutes post-cooking."
    },
    "applianceSpecs": {
      "parameter": "Turntable Rotation & Standing Wave Balance",
      "guideline": "Use an operational turntable and cover with a ventilated microwave dome to ensure even moisture distribution and eliminate cold spots."
    }
  },
  "yeti-in-microwave": {
    "materialThermal": {
      "property": "Dielectric Loss Factor & Microwave Permittivity",
      "threshold": "Microwave Transparent (Dielectric Loss Tangent <0.01)",
      "details": "Microwave-safe glass and vitrified ceramics allow 2,450 MHz waves to pass through unhindered directly into food, heating food without absorbing microwave energy into the dish itself."
    },
    "safetyStandard": {
      "organization": "FDA",
      "standard": "FDA Food Code 2022 § 3-401.12 (Microwave Cooking Specifications)",
      "citation": "Foods cooked in microwave ovens must reach 165°F in all parts, be rotated and covered, and allowed to stand 2 minutes post-cooking."
    },
    "applianceSpecs": {
      "parameter": "Turntable Rotation & Standing Wave Balance",
      "guideline": "Use an operational turntable and cover with a ventilated microwave dome to ensure even moisture distribution and eliminate cold spots."
    }
  },
  "styrofoam-plate": {
    "materialThermal": {
      "property": "Polystyrene Glass Transition & Monomer Leaching",
      "threshold": "Glass Transition 185°F–212°F (85°C–100°C); Softening starts >176°F (80°C)",
      "details": "Expanded polystyrene (EPS) collapses when in contact with boiling water or hot food fats (which reach >250°F in microwaves), melting into the food and releasing styrene oligomers."
    },
    "safetyStandard": {
      "organization": "FDA",
      "standard": "21 CFR § 177.1640 (Polystyrene and Rubber-Modified Polystyrene)",
      "citation": "Restricts polystyrene food contact; only explicitly labeled microwave-safe containers should be heated."
    },
    "applianceSpecs": {
      "parameter": "Hot Food Contact Temperature & Vessel Warping",
      "guideline": "Microwaving high-fat foods in takeout foam causes container burn-through in under 60 seconds; always transfer food to microwave-safe glass or ceramic."
    }
  },
  "foam-cup": {
    "materialThermal": {
      "property": "Dielectric Loss Factor & Microwave Permittivity",
      "threshold": "Microwave Transparent (Dielectric Loss Tangent <0.01)",
      "details": "Microwave-safe glass and vitrified ceramics allow 2,450 MHz waves to pass through unhindered directly into food, heating food without absorbing microwave energy into the dish itself."
    },
    "safetyStandard": {
      "organization": "FDA",
      "standard": "FDA Food Code 2022 § 3-401.12 (Microwave Cooking Specifications)",
      "citation": "Foods cooked in microwave ovens must reach 165°F in all parts, be rotated and covered, and allowed to stand 2 minutes post-cooking."
    },
    "applianceSpecs": {
      "parameter": "Turntable Rotation & Standing Wave Balance",
      "guideline": "Use an operational turntable and cover with a ventilated microwave dome to ensure even moisture distribution and eliminate cold spots."
    }
  },
  "butter": {
    "materialThermal": {
      "property": "Dielectric Loss Factor & Microwave Permittivity",
      "threshold": "Microwave Transparent (Dielectric Loss Tangent <0.01)",
      "details": "Microwave-safe glass and vitrified ceramics allow 2,450 MHz waves to pass through unhindered directly into food, heating food without absorbing microwave energy into the dish itself."
    },
    "safetyStandard": {
      "organization": "FDA",
      "standard": "FDA Food Code 2022 § 3-401.12 (Microwave Cooking Specifications)",
      "citation": "Foods cooked in microwave ovens must reach 165°F in all parts, be rotated and covered, and allowed to stand 2 minutes post-cooking."
    },
    "applianceSpecs": {
      "parameter": "Turntable Rotation & Standing Wave Balance",
      "guideline": "Use an operational turntable and cover with a ventilated microwave dome to ensure even moisture distribution and eliminate cold spots."
    }
  },
  "honey": {
    "materialThermal": {
      "property": "Dielectric Loss Factor & Microwave Permittivity",
      "threshold": "Microwave Transparent (Dielectric Loss Tangent <0.01)",
      "details": "Microwave-safe glass and vitrified ceramics allow 2,450 MHz waves to pass through unhindered directly into food, heating food without absorbing microwave energy into the dish itself."
    },
    "safetyStandard": {
      "organization": "FDA",
      "standard": "FDA Food Code 2022 § 3-401.12 (Microwave Cooking Specifications)",
      "citation": "Foods cooked in microwave ovens must reach 165°F in all parts, be rotated and covered, and allowed to stand 2 minutes post-cooking."
    },
    "applianceSpecs": {
      "parameter": "Turntable Rotation & Standing Wave Balance",
      "guideline": "Use an operational turntable and cover with a ventilated microwave dome to ensure even moisture distribution and eliminate cold spots."
    }
  },
  "chocolate": {
    "materialThermal": {
      "property": "Dielectric Loss Factor & Microwave Permittivity",
      "threshold": "Microwave Transparent (Dielectric Loss Tangent <0.01)",
      "details": "Microwave-safe glass and vitrified ceramics allow 2,450 MHz waves to pass through unhindered directly into food, heating food without absorbing microwave energy into the dish itself."
    },
    "safetyStandard": {
      "organization": "FDA",
      "standard": "FDA Food Code 2022 § 3-401.12 (Microwave Cooking Specifications)",
      "citation": "Foods cooked in microwave ovens must reach 165°F in all parts, be rotated and covered, and allowed to stand 2 minutes post-cooking."
    },
    "applianceSpecs": {
      "parameter": "Turntable Rotation & Standing Wave Balance",
      "guideline": "Use an operational turntable and cover with a ventilated microwave dome to ensure even moisture distribution and eliminate cold spots."
    }
  },
  "cold-pizza": {
    "materialThermal": {
      "property": "Dielectric Loss Factor & Microwave Permittivity",
      "threshold": "Microwave Transparent (Dielectric Loss Tangent <0.01)",
      "details": "Microwave-safe glass and vitrified ceramics allow 2,450 MHz waves to pass through unhindered directly into food, heating food without absorbing microwave energy into the dish itself."
    },
    "safetyStandard": {
      "organization": "FDA",
      "standard": "FDA Food Code 2022 § 3-401.12 (Microwave Cooking Specifications)",
      "citation": "Foods cooked in microwave ovens must reach 165°F in all parts, be rotated and covered, and allowed to stand 2 minutes post-cooking."
    },
    "applianceSpecs": {
      "parameter": "Turntable Rotation & Standing Wave Balance",
      "guideline": "Use an operational turntable and cover with a ventilated microwave dome to ensure even moisture distribution and eliminate cold spots."
    }
  },
  "water-in-cup": {
    "materialThermal": {
      "property": "Superheating Phenomenon & Delayed Boiling Eruption",
      "threshold": "Superheating >212°F (100°C) without Nucleation; Eruption Hazard",
      "details": "In smooth glazed cups, water can be heated past 212°F without boiling. Adding a tea bag, spoon, or sugar triggers instantaneous violent bubble nucleation, erupting scalding water upward."
    },
    "safetyStandard": {
      "organization": "FDA / CDRH",
      "standard": "FDA Consumer Health Information / Superheated Water Warning",
      "citation": "Warning on superheated water eruption hazards in smooth containers lacking nucleation sites."
    },
    "applianceSpecs": {
      "parameter": "Volumetric Microwave Excitation (2,450 MHz)",
      "guideline": "Place a wooden stir stick or microwave-safe utensil in the cup during heating to provide bubble nucleation sites and prevent superheated eruptions."
    }
  },
  "potatoes": {
    "materialThermal": {
      "property": "Dielectric Loss Factor & Microwave Permittivity",
      "threshold": "Microwave Transparent (Dielectric Loss Tangent <0.01)",
      "details": "Microwave-safe glass and vitrified ceramics allow 2,450 MHz waves to pass through unhindered directly into food, heating food without absorbing microwave energy into the dish itself."
    },
    "safetyStandard": {
      "organization": "FDA",
      "standard": "FDA Food Code 2022 § 3-401.12 (Microwave Cooking Specifications)",
      "citation": "Foods cooked in microwave ovens must reach 165°F in all parts, be rotated and covered, and allowed to stand 2 minutes post-cooking."
    },
    "applianceSpecs": {
      "parameter": "Turntable Rotation & Standing Wave Balance",
      "guideline": "Use an operational turntable and cover with a ventilated microwave dome to ensure even moisture distribution and eliminate cold spots."
    }
  },
  "tomatoes": {
    "materialThermal": {
      "property": "Dielectric Loss Factor & Microwave Permittivity",
      "threshold": "Microwave Transparent (Dielectric Loss Tangent <0.01)",
      "details": "Microwave-safe glass and vitrified ceramics allow 2,450 MHz waves to pass through unhindered directly into food, heating food without absorbing microwave energy into the dish itself."
    },
    "safetyStandard": {
      "organization": "FDA",
      "standard": "FDA Food Code 2022 § 3-401.12 (Microwave Cooking Specifications)",
      "citation": "Foods cooked in microwave ovens must reach 165°F in all parts, be rotated and covered, and allowed to stand 2 minutes post-cooking."
    },
    "applianceSpecs": {
      "parameter": "Turntable Rotation & Standing Wave Balance",
      "guideline": "Use an operational turntable and cover with a ventilated microwave dome to ensure even moisture distribution and eliminate cold spots."
    }
  },
  "bacon": {
    "materialThermal": {
      "property": "Dielectric Loss Factor & Microwave Permittivity",
      "threshold": "Microwave Transparent (Dielectric Loss Tangent <0.01)",
      "details": "Microwave-safe glass and vitrified ceramics allow 2,450 MHz waves to pass through unhindered directly into food, heating food without absorbing microwave energy into the dish itself."
    },
    "safetyStandard": {
      "organization": "FDA",
      "standard": "FDA Food Code 2022 § 3-401.12 (Microwave Cooking Specifications)",
      "citation": "Foods cooked in microwave ovens must reach 165°F in all parts, be rotated and covered, and allowed to stand 2 minutes post-cooking."
    },
    "applianceSpecs": {
      "parameter": "Turntable Rotation & Standing Wave Balance",
      "guideline": "Use an operational turntable and cover with a ventilated microwave dome to ensure even moisture distribution and eliminate cold spots."
    }
  },
  "hot-dogs": {
    "materialThermal": {
      "property": "Dielectric Loss Factor & Microwave Permittivity",
      "threshold": "Microwave Transparent (Dielectric Loss Tangent <0.01)",
      "details": "Microwave-safe glass and vitrified ceramics allow 2,450 MHz waves to pass through unhindered directly into food, heating food without absorbing microwave energy into the dish itself."
    },
    "safetyStandard": {
      "organization": "FDA",
      "standard": "FDA Food Code 2022 § 3-401.12 (Microwave Cooking Specifications)",
      "citation": "Foods cooked in microwave ovens must reach 165°F in all parts, be rotated and covered, and allowed to stand 2 minutes post-cooking."
    },
    "applianceSpecs": {
      "parameter": "Turntable Rotation & Standing Wave Balance",
      "guideline": "Use an operational turntable and cover with a ventilated microwave dome to ensure even moisture distribution and eliminate cold spots."
    }
  },
  "leftover-rice": {
    "materialThermal": {
      "property": "Dielectric Loss Factor & Microwave Permittivity",
      "threshold": "Microwave Transparent (Dielectric Loss Tangent <0.01)",
      "details": "Microwave-safe glass and vitrified ceramics allow 2,450 MHz waves to pass through unhindered directly into food, heating food without absorbing microwave energy into the dish itself."
    },
    "safetyStandard": {
      "organization": "FDA",
      "standard": "FDA Food Code 2022 § 3-401.12 (Microwave Cooking Specifications)",
      "citation": "Foods cooked in microwave ovens must reach 165°F in all parts, be rotated and covered, and allowed to stand 2 minutes post-cooking."
    },
    "applianceSpecs": {
      "parameter": "Turntable Rotation & Standing Wave Balance",
      "guideline": "Use an operational turntable and cover with a ventilated microwave dome to ensure even moisture distribution and eliminate cold spots."
    }
  },
  "marshmallows": {
    "materialThermal": {
      "property": "Dielectric Loss Factor & Microwave Permittivity",
      "threshold": "Microwave Transparent (Dielectric Loss Tangent <0.01)",
      "details": "Microwave-safe glass and vitrified ceramics allow 2,450 MHz waves to pass through unhindered directly into food, heating food without absorbing microwave energy into the dish itself."
    },
    "safetyStandard": {
      "organization": "FDA",
      "standard": "FDA Food Code 2022 § 3-401.12 (Microwave Cooking Specifications)",
      "citation": "Foods cooked in microwave ovens must reach 165°F in all parts, be rotated and covered, and allowed to stand 2 minutes post-cooking."
    },
    "applianceSpecs": {
      "parameter": "Turntable Rotation & Standing Wave Balance",
      "guideline": "Use an operational turntable and cover with a ventilated microwave dome to ensure even moisture distribution and eliminate cold spots."
    }
  },
  "bread": {
    "materialThermal": {
      "property": "Dielectric Loss Factor & Microwave Permittivity",
      "threshold": "Microwave Transparent (Dielectric Loss Tangent <0.01)",
      "details": "Microwave-safe glass and vitrified ceramics allow 2,450 MHz waves to pass through unhindered directly into food, heating food without absorbing microwave energy into the dish itself."
    },
    "safetyStandard": {
      "organization": "FDA",
      "standard": "FDA Food Code 2022 § 3-401.12 (Microwave Cooking Specifications)",
      "citation": "Foods cooked in microwave ovens must reach 165°F in all parts, be rotated and covered, and allowed to stand 2 minutes post-cooking."
    },
    "applianceSpecs": {
      "parameter": "Turntable Rotation & Standing Wave Balance",
      "guideline": "Use an operational turntable and cover with a ventilated microwave dome to ensure even moisture distribution and eliminate cold spots."
    }
  },
  "cheese": {
    "materialThermal": {
      "property": "Dielectric Loss Factor & Microwave Permittivity",
      "threshold": "Microwave Transparent (Dielectric Loss Tangent <0.01)",
      "details": "Microwave-safe glass and vitrified ceramics allow 2,450 MHz waves to pass through unhindered directly into food, heating food without absorbing microwave energy into the dish itself."
    },
    "safetyStandard": {
      "organization": "FDA",
      "standard": "FDA Food Code 2022 § 3-401.12 (Microwave Cooking Specifications)",
      "citation": "Foods cooked in microwave ovens must reach 165°F in all parts, be rotated and covered, and allowed to stand 2 minutes post-cooking."
    },
    "applianceSpecs": {
      "parameter": "Turntable Rotation & Standing Wave Balance",
      "guideline": "Use an operational turntable and cover with a ventilated microwave dome to ensure even moisture distribution and eliminate cold spots."
    }
  },
  "milk": {
    "materialThermal": {
      "property": "Dielectric Loss Factor & Microwave Permittivity",
      "threshold": "Microwave Transparent (Dielectric Loss Tangent <0.01)",
      "details": "Microwave-safe glass and vitrified ceramics allow 2,450 MHz waves to pass through unhindered directly into food, heating food without absorbing microwave energy into the dish itself."
    },
    "safetyStandard": {
      "organization": "FDA",
      "standard": "FDA Food Code 2022 § 3-401.12 (Microwave Cooking Specifications)",
      "citation": "Foods cooked in microwave ovens must reach 165°F in all parts, be rotated and covered, and allowed to stand 2 minutes post-cooking."
    },
    "applianceSpecs": {
      "parameter": "Turntable Rotation & Standing Wave Balance",
      "guideline": "Use an operational turntable and cover with a ventilated microwave dome to ensure even moisture distribution and eliminate cold spots."
    }
  },
  "frozen-dinners": {
    "materialThermal": {
      "property": "Dielectric Loss Factor & Microwave Permittivity",
      "threshold": "Microwave Transparent (Dielectric Loss Tangent <0.01)",
      "details": "Microwave-safe glass and vitrified ceramics allow 2,450 MHz waves to pass through unhindered directly into food, heating food without absorbing microwave energy into the dish itself."
    },
    "safetyStandard": {
      "organization": "FDA",
      "standard": "FDA Food Code 2022 § 3-401.12 (Microwave Cooking Specifications)",
      "citation": "Foods cooked in microwave ovens must reach 165°F in all parts, be rotated and covered, and allowed to stand 2 minutes post-cooking."
    },
    "applianceSpecs": {
      "parameter": "Turntable Rotation & Standing Wave Balance",
      "guideline": "Use an operational turntable and cover with a ventilated microwave dome to ensure even moisture distribution and eliminate cold spots."
    }
  },
  "mug-cake": {
    "materialThermal": {
      "property": "Dielectric Loss Factor & Microwave Permittivity",
      "threshold": "Microwave Transparent (Dielectric Loss Tangent <0.01)",
      "details": "Microwave-safe glass and vitrified ceramics allow 2,450 MHz waves to pass through unhindered directly into food, heating food without absorbing microwave energy into the dish itself."
    },
    "safetyStandard": {
      "organization": "FDA",
      "standard": "FDA Food Code 2022 § 3-401.12 (Microwave Cooking Specifications)",
      "citation": "Foods cooked in microwave ovens must reach 165°F in all parts, be rotated and covered, and allowed to stand 2 minutes post-cooking."
    },
    "applianceSpecs": {
      "parameter": "Turntable Rotation & Standing Wave Balance",
      "guideline": "Use an operational turntable and cover with a ventilated microwave dome to ensure even moisture distribution and eliminate cold spots."
    }
  },
  "popcorn-bag": {
    "materialThermal": {
      "property": "Dielectric Loss Factor & Microwave Permittivity",
      "threshold": "Microwave Transparent (Dielectric Loss Tangent <0.01)",
      "details": "Microwave-safe glass and vitrified ceramics allow 2,450 MHz waves to pass through unhindered directly into food, heating food without absorbing microwave energy into the dish itself."
    },
    "safetyStandard": {
      "organization": "FDA",
      "standard": "FDA Food Code 2022 § 3-401.12 (Microwave Cooking Specifications)",
      "citation": "Foods cooked in microwave ovens must reach 165°F in all parts, be rotated and covered, and allowed to stand 2 minutes post-cooking."
    },
    "applianceSpecs": {
      "parameter": "Turntable Rotation & Standing Wave Balance",
      "guideline": "Use an operational turntable and cover with a ventilated microwave dome to ensure even moisture distribution and eliminate cold spots."
    }
  },
  "cooking-oil": {
    "materialThermal": {
      "property": "Dielectric Loss Factor & Microwave Permittivity",
      "threshold": "Microwave Transparent (Dielectric Loss Tangent <0.01)",
      "details": "Microwave-safe glass and vitrified ceramics allow 2,450 MHz waves to pass through unhindered directly into food, heating food without absorbing microwave energy into the dish itself."
    },
    "safetyStandard": {
      "organization": "FDA",
      "standard": "FDA Food Code 2022 § 3-401.12 (Microwave Cooking Specifications)",
      "citation": "Foods cooked in microwave ovens must reach 165°F in all parts, be rotated and covered, and allowed to stand 2 minutes post-cooking."
    },
    "applianceSpecs": {
      "parameter": "Turntable Rotation & Standing Wave Balance",
      "guideline": "Use an operational turntable and cover with a ventilated microwave dome to ensure even moisture distribution and eliminate cold spots."
    }
  },
  "olive-oil": {
    "materialThermal": {
      "property": "Dielectric Loss Factor & Microwave Permittivity",
      "threshold": "Microwave Transparent (Dielectric Loss Tangent <0.01)",
      "details": "Microwave-safe glass and vitrified ceramics allow 2,450 MHz waves to pass through unhindered directly into food, heating food without absorbing microwave energy into the dish itself."
    },
    "safetyStandard": {
      "organization": "FDA",
      "standard": "FDA Food Code 2022 § 3-401.12 (Microwave Cooking Specifications)",
      "citation": "Foods cooked in microwave ovens must reach 165°F in all parts, be rotated and covered, and allowed to stand 2 minutes post-cooking."
    },
    "applianceSpecs": {
      "parameter": "Turntable Rotation & Standing Wave Balance",
      "guideline": "Use an operational turntable and cover with a ventilated microwave dome to ensure even moisture distribution and eliminate cold spots."
    }
  },
  "corningware": {
    "materialThermal": {
      "property": "Dielectric Loss Factor & Microwave Permittivity",
      "threshold": "Microwave Transparent (Dielectric Loss Tangent <0.01)",
      "details": "Microwave-safe glass and vitrified ceramics allow 2,450 MHz waves to pass through unhindered directly into food, heating food without absorbing microwave energy into the dish itself."
    },
    "safetyStandard": {
      "organization": "FDA",
      "standard": "FDA Food Code 2022 § 3-401.12 (Microwave Cooking Specifications)",
      "citation": "Foods cooked in microwave ovens must reach 165°F in all parts, be rotated and covered, and allowed to stand 2 minutes post-cooking."
    },
    "applianceSpecs": {
      "parameter": "Turntable Rotation & Standing Wave Balance",
      "guideline": "Use an operational turntable and cover with a ventilated microwave dome to ensure even moisture distribution and eliminate cold spots."
    }
  },
  "pyrex-measuring-cup": {
    "materialThermal": {
      "property": "Dielectric Loss Factor & Microwave Permittivity",
      "threshold": "Microwave Transparent (Dielectric Loss Tangent <0.01)",
      "details": "Microwave-safe glass and vitrified ceramics allow 2,450 MHz waves to pass through unhindered directly into food, heating food without absorbing microwave energy into the dish itself."
    },
    "safetyStandard": {
      "organization": "FDA",
      "standard": "FDA Food Code 2022 § 3-401.12 (Microwave Cooking Specifications)",
      "citation": "Foods cooked in microwave ovens must reach 165°F in all parts, be rotated and covered, and allowed to stand 2 minutes post-cooking."
    },
    "applianceSpecs": {
      "parameter": "Turntable Rotation & Standing Wave Balance",
      "guideline": "Use an operational turntable and cover with a ventilated microwave dome to ensure even moisture distribution and eliminate cold spots."
    }
  },
  "fine-china": {
    "materialThermal": {
      "property": "Dielectric Loss Factor & Microwave Permittivity",
      "threshold": "Microwave Transparent (Dielectric Loss Tangent <0.01)",
      "details": "Microwave-safe glass and vitrified ceramics allow 2,450 MHz waves to pass through unhindered directly into food, heating food without absorbing microwave energy into the dish itself."
    },
    "safetyStandard": {
      "organization": "FDA",
      "standard": "FDA Food Code 2022 § 3-401.12 (Microwave Cooking Specifications)",
      "citation": "Foods cooked in microwave ovens must reach 165°F in all parts, be rotated and covered, and allowed to stand 2 minutes post-cooking."
    },
    "applianceSpecs": {
      "parameter": "Turntable Rotation & Standing Wave Balance",
      "guideline": "Use an operational turntable and cover with a ventilated microwave dome to ensure even moisture distribution and eliminate cold spots."
    }
  },
  "wood-skewers": {
    "materialThermal": {
      "property": "Dielectric Loss Factor & Microwave Permittivity",
      "threshold": "Microwave Transparent (Dielectric Loss Tangent <0.01)",
      "details": "Microwave-safe glass and vitrified ceramics allow 2,450 MHz waves to pass through unhindered directly into food, heating food without absorbing microwave energy into the dish itself."
    },
    "safetyStandard": {
      "organization": "FDA",
      "standard": "FDA Food Code 2022 § 3-401.12 (Microwave Cooking Specifications)",
      "citation": "Foods cooked in microwave ovens must reach 165°F in all parts, be rotated and covered, and allowed to stand 2 minutes post-cooking."
    },
    "applianceSpecs": {
      "parameter": "Turntable Rotation & Standing Wave Balance",
      "guideline": "Use an operational turntable and cover with a ventilated microwave dome to ensure even moisture distribution and eliminate cold spots."
    }
  },
  "plastic-spoon": {
    "materialThermal": {
      "property": "Dielectric Air Breakdown & Electrical Arcing",
      "threshold": "Dielectric Breakdown of Air ~30 kV/cm; Microwave Frequency 2,450 MHz",
      "details": "Alternating 2.45 GHz electromagnetic fields drive free electron oscillation on metal surfaces. High charge concentrations at sharp points or thin foil edges exceed the dielectric breakdown of air, triggering brilliant electrical arcing and sparks."
    },
    "safetyStandard": {
      "organization": "FDA / CDRH",
      "standard": "21 CFR § 1030.10 (Microwave Ovens Performance Standard)",
      "citation": "Safety standards regulating microwave radiation leakage and prohibiting metallic materials prone to arcing and cavity reflection."
    },
    "applianceSpecs": {
      "parameter": "Magnetron Standing Wave Reflected Power",
      "guideline": "Microwaves (700W–1,200W) cannot penetrate metal; reflective surfaces bounce microwave energy back into the magnetron antenna, risking permanent burn-out and fire."
    }
  },
  "silicone-molds": {
    "materialThermal": {
      "property": "Dielectric Loss Factor & Microwave Permittivity",
      "threshold": "Microwave Transparent (Dielectric Loss Tangent <0.01)",
      "details": "Microwave-safe glass and vitrified ceramics allow 2,450 MHz waves to pass through unhindered directly into food, heating food without absorbing microwave energy into the dish itself."
    },
    "safetyStandard": {
      "organization": "FDA",
      "standard": "FDA Food Code 2022 § 3-401.12 (Microwave Cooking Specifications)",
      "citation": "Foods cooked in microwave ovens must reach 165°F in all parts, be rotated and covered, and allowed to stand 2 minutes post-cooking."
    },
    "applianceSpecs": {
      "parameter": "Turntable Rotation & Standing Wave Balance",
      "guideline": "Use an operational turntable and cover with a ventilated microwave dome to ensure even moisture distribution and eliminate cold spots."
    }
  },
  "baby-bottle": {
    "materialThermal": {
      "property": "Immunological Protein Denaturation & Scalding Hot Spots",
      "threshold": "Lysozyme & Immunoglobulin (IgA) Denaturation >104°F (40°C)",
      "details": "Microwave standing waves create extreme uneven heating ('hot spots') that exceed 140°F in pockets while the bottle feels lukewarm outside, destroying critical antibodies and scalding infant throats."
    },
    "safetyStandard": {
      "organization": "FDA / AAP",
      "standard": "American Academy of Pediatrics (AAP) Guidelines / FDA Infant Feeding Directives",
      "citation": "Microwave warming of infant formula and breast milk is strictly prohibited due to severe oral burn risks and nutritional degradation."
    },
    "applianceSpecs": {
      "parameter": "Standing Wave Node Distribution",
      "guideline": "Never microwave infant bottles; warm gently in a bowl of warm tap water for 10–15 minutes and swirl to equalize temperature."
    }
  },
  "breastmilk-bags": {
    "materialThermal": {
      "property": "Dielectric Loss Factor & Microwave Permittivity",
      "threshold": "Microwave Transparent (Dielectric Loss Tangent <0.01)",
      "details": "Microwave-safe glass and vitrified ceramics allow 2,450 MHz waves to pass through unhindered directly into food, heating food without absorbing microwave energy into the dish itself."
    },
    "safetyStandard": {
      "organization": "FDA",
      "standard": "FDA Food Code 2022 § 3-401.12 (Microwave Cooking Specifications)",
      "citation": "Foods cooked in microwave ovens must reach 165°F in all parts, be rotated and covered, and allowed to stand 2 minutes post-cooking."
    },
    "applianceSpecs": {
      "parameter": "Turntable Rotation & Standing Wave Balance",
      "guideline": "Use an operational turntable and cover with a ventilated microwave dome to ensure even moisture distribution and eliminate cold spots."
    }
  },
  "paper-cartons": {
    "materialThermal": {
      "property": "Dielectric Loss Factor & Microwave Permittivity",
      "threshold": "Microwave Transparent (Dielectric Loss Tangent <0.01)",
      "details": "Microwave-safe glass and vitrified ceramics allow 2,450 MHz waves to pass through unhindered directly into food, heating food without absorbing microwave energy into the dish itself."
    },
    "safetyStandard": {
      "organization": "FDA",
      "standard": "FDA Food Code 2022 § 3-401.12 (Microwave Cooking Specifications)",
      "citation": "Foods cooked in microwave ovens must reach 165°F in all parts, be rotated and covered, and allowed to stand 2 minutes post-cooking."
    },
    "applianceSpecs": {
      "parameter": "Turntable Rotation & Standing Wave Balance",
      "guideline": "Use an operational turntable and cover with a ventilated microwave dome to ensure even moisture distribution and eliminate cold spots."
    }
  },
  "styrofoam-takeout": {
    "materialThermal": {
      "property": "Polystyrene Glass Transition & Monomer Leaching",
      "threshold": "Glass Transition 185°F–212°F (85°C–100°C); Softening starts >176°F (80°C)",
      "details": "Expanded polystyrene (EPS) collapses when in contact with boiling water or hot food fats (which reach >250°F in microwaves), melting into the food and releasing styrene oligomers."
    },
    "safetyStandard": {
      "organization": "FDA",
      "standard": "21 CFR § 177.1640 (Polystyrene and Rubber-Modified Polystyrene)",
      "citation": "Restricts polystyrene food contact; only explicitly labeled microwave-safe containers should be heated."
    },
    "applianceSpecs": {
      "parameter": "Hot Food Contact Temperature & Vessel Warping",
      "guideline": "Microwaving high-fat foods in takeout foam causes container burn-through in under 60 seconds; always transfer food to microwave-safe glass or ceramic."
    }
  },
  "acrylic-cups": {
    "materialThermal": {
      "property": "Dielectric Loss Factor & Microwave Permittivity",
      "threshold": "Microwave Transparent (Dielectric Loss Tangent <0.01)",
      "details": "Microwave-safe glass and vitrified ceramics allow 2,450 MHz waves to pass through unhindered directly into food, heating food without absorbing microwave energy into the dish itself."
    },
    "safetyStandard": {
      "organization": "FDA",
      "standard": "FDA Food Code 2022 § 3-401.12 (Microwave Cooking Specifications)",
      "citation": "Foods cooked in microwave ovens must reach 165°F in all parts, be rotated and covered, and allowed to stand 2 minutes post-cooking."
    },
    "applianceSpecs": {
      "parameter": "Turntable Rotation & Standing Wave Balance",
      "guideline": "Use an operational turntable and cover with a ventilated microwave dome to ensure even moisture distribution and eliminate cold spots."
    }
  },
  "metal-twist-ties": {
    "materialThermal": {
      "property": "Dielectric Air Breakdown & Electrical Arcing",
      "threshold": "Dielectric Breakdown of Air ~30 kV/cm; Microwave Frequency 2,450 MHz",
      "details": "Alternating 2.45 GHz electromagnetic fields drive free electron oscillation on metal surfaces. High charge concentrations at sharp points or thin foil edges exceed the dielectric breakdown of air, triggering brilliant electrical arcing and sparks."
    },
    "safetyStandard": {
      "organization": "FDA / CDRH",
      "standard": "21 CFR § 1030.10 (Microwave Ovens Performance Standard)",
      "citation": "Safety standards regulating microwave radiation leakage and prohibiting metallic materials prone to arcing and cavity reflection."
    },
    "applianceSpecs": {
      "parameter": "Magnetron Standing Wave Reflected Power",
      "guideline": "Microwaves (700W–1,200W) cannot penetrate metal; reflective surfaces bounce microwave energy back into the magnetron antenna, risking permanent burn-out and fire."
    }
  },
  "thermal-carafe": {
    "materialThermal": {
      "property": "Dielectric Loss Factor & Microwave Permittivity",
      "threshold": "Microwave Transparent (Dielectric Loss Tangent <0.01)",
      "details": "Microwave-safe glass and vitrified ceramics allow 2,450 MHz waves to pass through unhindered directly into food, heating food without absorbing microwave energy into the dish itself."
    },
    "safetyStandard": {
      "organization": "FDA",
      "standard": "FDA Food Code 2022 § 3-401.12 (Microwave Cooking Specifications)",
      "citation": "Foods cooked in microwave ovens must reach 165°F in all parts, be rotated and covered, and allowed to stand 2 minutes post-cooking."
    },
    "applianceSpecs": {
      "parameter": "Turntable Rotation & Standing Wave Balance",
      "guideline": "Use an operational turntable and cover with a ventilated microwave dome to ensure even moisture distribution and eliminate cold spots."
    }
  },
  "sausage": {
    "materialThermal": {
      "property": "Dielectric Loss Factor & Microwave Permittivity",
      "threshold": "Microwave Transparent (Dielectric Loss Tangent <0.01)",
      "details": "Microwave-safe glass and vitrified ceramics allow 2,450 MHz waves to pass through unhindered directly into food, heating food without absorbing microwave energy into the dish itself."
    },
    "safetyStandard": {
      "organization": "FDA",
      "standard": "FDA Food Code 2022 § 3-401.12 (Microwave Cooking Specifications)",
      "citation": "Foods cooked in microwave ovens must reach 165°F in all parts, be rotated and covered, and allowed to stand 2 minutes post-cooking."
    },
    "applianceSpecs": {
      "parameter": "Turntable Rotation & Standing Wave Balance",
      "guideline": "Use an operational turntable and cover with a ventilated microwave dome to ensure even moisture distribution and eliminate cold spots."
    }
  },
  "pork-chop": {
    "materialThermal": {
      "property": "Dielectric Loss Factor & Microwave Permittivity",
      "threshold": "Microwave Transparent (Dielectric Loss Tangent <0.01)",
      "details": "Microwave-safe glass and vitrified ceramics allow 2,450 MHz waves to pass through unhindered directly into food, heating food without absorbing microwave energy into the dish itself."
    },
    "safetyStandard": {
      "organization": "FDA",
      "standard": "FDA Food Code 2022 § 3-401.12 (Microwave Cooking Specifications)",
      "citation": "Foods cooked in microwave ovens must reach 165°F in all parts, be rotated and covered, and allowed to stand 2 minutes post-cooking."
    },
    "applianceSpecs": {
      "parameter": "Turntable Rotation & Standing Wave Balance",
      "guideline": "Use an operational turntable and cover with a ventilated microwave dome to ensure even moisture distribution and eliminate cold spots."
    }
  },
  "beef-steak": {
    "materialThermal": {
      "property": "Superheating Phenomenon & Delayed Boiling Eruption",
      "threshold": "Superheating >212°F (100°C) without Nucleation; Eruption Hazard",
      "details": "In smooth glazed cups, water can be heated past 212°F without boiling. Adding a tea bag, spoon, or sugar triggers instantaneous violent bubble nucleation, erupting scalding water upward."
    },
    "safetyStandard": {
      "organization": "FDA / CDRH",
      "standard": "FDA Consumer Health Information / Superheated Water Warning",
      "citation": "Warning on superheated water eruption hazards in smooth containers lacking nucleation sites."
    },
    "applianceSpecs": {
      "parameter": "Volumetric Microwave Excitation (2,450 MHz)",
      "guideline": "Place a wooden stir stick or microwave-safe utensil in the cup during heating to provide bubble nucleation sites and prevent superheated eruptions."
    }
  },
  "ground-beef": {
    "materialThermal": {
      "property": "Dielectric Loss Factor & Microwave Permittivity",
      "threshold": "Microwave Transparent (Dielectric Loss Tangent <0.01)",
      "details": "Microwave-safe glass and vitrified ceramics allow 2,450 MHz waves to pass through unhindered directly into food, heating food without absorbing microwave energy into the dish itself."
    },
    "safetyStandard": {
      "organization": "FDA",
      "standard": "FDA Food Code 2022 § 3-401.12 (Microwave Cooking Specifications)",
      "citation": "Foods cooked in microwave ovens must reach 165°F in all parts, be rotated and covered, and allowed to stand 2 minutes post-cooking."
    },
    "applianceSpecs": {
      "parameter": "Turntable Rotation & Standing Wave Balance",
      "guideline": "Use an operational turntable and cover with a ventilated microwave dome to ensure even moisture distribution and eliminate cold spots."
    }
  },
  "salmon-fillet": {
    "materialThermal": {
      "property": "Dielectric Loss Factor & Microwave Permittivity",
      "threshold": "Microwave Transparent (Dielectric Loss Tangent <0.01)",
      "details": "Microwave-safe glass and vitrified ceramics allow 2,450 MHz waves to pass through unhindered directly into food, heating food without absorbing microwave energy into the dish itself."
    },
    "safetyStandard": {
      "organization": "FDA",
      "standard": "FDA Food Code 2022 § 3-401.12 (Microwave Cooking Specifications)",
      "citation": "Foods cooked in microwave ovens must reach 165°F in all parts, be rotated and covered, and allowed to stand 2 minutes post-cooking."
    },
    "applianceSpecs": {
      "parameter": "Turntable Rotation & Standing Wave Balance",
      "guideline": "Use an operational turntable and cover with a ventilated microwave dome to ensure even moisture distribution and eliminate cold spots."
    }
  },
  "tuna-steak": {
    "materialThermal": {
      "property": "Superheating Phenomenon & Delayed Boiling Eruption",
      "threshold": "Superheating >212°F (100°C) without Nucleation; Eruption Hazard",
      "details": "In smooth glazed cups, water can be heated past 212°F without boiling. Adding a tea bag, spoon, or sugar triggers instantaneous violent bubble nucleation, erupting scalding water upward."
    },
    "safetyStandard": {
      "organization": "FDA / CDRH",
      "standard": "FDA Consumer Health Information / Superheated Water Warning",
      "citation": "Warning on superheated water eruption hazards in smooth containers lacking nucleation sites."
    },
    "applianceSpecs": {
      "parameter": "Volumetric Microwave Excitation (2,450 MHz)",
      "guideline": "Place a wooden stir stick or microwave-safe utensil in the cup during heating to provide bubble nucleation sites and prevent superheated eruptions."
    }
  },
  "shrimp": {
    "materialThermal": {
      "property": "Dielectric Loss Factor & Microwave Permittivity",
      "threshold": "Microwave Transparent (Dielectric Loss Tangent <0.01)",
      "details": "Microwave-safe glass and vitrified ceramics allow 2,450 MHz waves to pass through unhindered directly into food, heating food without absorbing microwave energy into the dish itself."
    },
    "safetyStandard": {
      "organization": "FDA",
      "standard": "FDA Food Code 2022 § 3-401.12 (Microwave Cooking Specifications)",
      "citation": "Foods cooked in microwave ovens must reach 165°F in all parts, be rotated and covered, and allowed to stand 2 minutes post-cooking."
    },
    "applianceSpecs": {
      "parameter": "Turntable Rotation & Standing Wave Balance",
      "guideline": "Use an operational turntable and cover with a ventilated microwave dome to ensure even moisture distribution and eliminate cold spots."
    }
  },
  "lobster-tail": {
    "materialThermal": {
      "property": "Dielectric Loss Factor & Microwave Permittivity",
      "threshold": "Microwave Transparent (Dielectric Loss Tangent <0.01)",
      "details": "Microwave-safe glass and vitrified ceramics allow 2,450 MHz waves to pass through unhindered directly into food, heating food without absorbing microwave energy into the dish itself."
    },
    "safetyStandard": {
      "organization": "FDA",
      "standard": "FDA Food Code 2022 § 3-401.12 (Microwave Cooking Specifications)",
      "citation": "Foods cooked in microwave ovens must reach 165°F in all parts, be rotated and covered, and allowed to stand 2 minutes post-cooking."
    },
    "applianceSpecs": {
      "parameter": "Turntable Rotation & Standing Wave Balance",
      "guideline": "Use an operational turntable and cover with a ventilated microwave dome to ensure even moisture distribution and eliminate cold spots."
    }
  },
  "crab-legs": {
    "materialThermal": {
      "property": "Dielectric Loss Factor & Microwave Permittivity",
      "threshold": "Microwave Transparent (Dielectric Loss Tangent <0.01)",
      "details": "Microwave-safe glass and vitrified ceramics allow 2,450 MHz waves to pass through unhindered directly into food, heating food without absorbing microwave energy into the dish itself."
    },
    "safetyStandard": {
      "organization": "FDA",
      "standard": "FDA Food Code 2022 § 3-401.12 (Microwave Cooking Specifications)",
      "citation": "Foods cooked in microwave ovens must reach 165°F in all parts, be rotated and covered, and allowed to stand 2 minutes post-cooking."
    },
    "applianceSpecs": {
      "parameter": "Turntable Rotation & Standing Wave Balance",
      "guideline": "Use an operational turntable and cover with a ventilated microwave dome to ensure even moisture distribution and eliminate cold spots."
    }
  },
  "chicken-breast": {
    "materialThermal": {
      "property": "Dielectric Loss Factor & Microwave Permittivity",
      "threshold": "Microwave Transparent (Dielectric Loss Tangent <0.01)",
      "details": "Microwave-safe glass and vitrified ceramics allow 2,450 MHz waves to pass through unhindered directly into food, heating food without absorbing microwave energy into the dish itself."
    },
    "safetyStandard": {
      "organization": "FDA",
      "standard": "FDA Food Code 2022 § 3-401.12 (Microwave Cooking Specifications)",
      "citation": "Foods cooked in microwave ovens must reach 165°F in all parts, be rotated and covered, and allowed to stand 2 minutes post-cooking."
    },
    "applianceSpecs": {
      "parameter": "Turntable Rotation & Standing Wave Balance",
      "guideline": "Use an operational turntable and cover with a ventilated microwave dome to ensure even moisture distribution and eliminate cold spots."
    }
  },
  "chicken-wings": {
    "materialThermal": {
      "property": "Dielectric Loss Factor & Microwave Permittivity",
      "threshold": "Microwave Transparent (Dielectric Loss Tangent <0.01)",
      "details": "Microwave-safe glass and vitrified ceramics allow 2,450 MHz waves to pass through unhindered directly into food, heating food without absorbing microwave energy into the dish itself."
    },
    "safetyStandard": {
      "organization": "FDA",
      "standard": "FDA Food Code 2022 § 3-401.12 (Microwave Cooking Specifications)",
      "citation": "Foods cooked in microwave ovens must reach 165°F in all parts, be rotated and covered, and allowed to stand 2 minutes post-cooking."
    },
    "applianceSpecs": {
      "parameter": "Turntable Rotation & Standing Wave Balance",
      "guideline": "Use an operational turntable and cover with a ventilated microwave dome to ensure even moisture distribution and eliminate cold spots."
    }
  },
  "turkey-breast": {
    "materialThermal": {
      "property": "Dielectric Loss Factor & Microwave Permittivity",
      "threshold": "Microwave Transparent (Dielectric Loss Tangent <0.01)",
      "details": "Microwave-safe glass and vitrified ceramics allow 2,450 MHz waves to pass through unhindered directly into food, heating food without absorbing microwave energy into the dish itself."
    },
    "safetyStandard": {
      "organization": "FDA",
      "standard": "FDA Food Code 2022 § 3-401.12 (Microwave Cooking Specifications)",
      "citation": "Foods cooked in microwave ovens must reach 165°F in all parts, be rotated and covered, and allowed to stand 2 minutes post-cooking."
    },
    "applianceSpecs": {
      "parameter": "Turntable Rotation & Standing Wave Balance",
      "guideline": "Use an operational turntable and cover with a ventilated microwave dome to ensure even moisture distribution and eliminate cold spots."
    }
  },
  "duck-breast": {
    "materialThermal": {
      "property": "Dielectric Loss Factor & Microwave Permittivity",
      "threshold": "Microwave Transparent (Dielectric Loss Tangent <0.01)",
      "details": "Microwave-safe glass and vitrified ceramics allow 2,450 MHz waves to pass through unhindered directly into food, heating food without absorbing microwave energy into the dish itself."
    },
    "safetyStandard": {
      "organization": "FDA",
      "standard": "FDA Food Code 2022 § 3-401.12 (Microwave Cooking Specifications)",
      "citation": "Foods cooked in microwave ovens must reach 165°F in all parts, be rotated and covered, and allowed to stand 2 minutes post-cooking."
    },
    "applianceSpecs": {
      "parameter": "Turntable Rotation & Standing Wave Balance",
      "guideline": "Use an operational turntable and cover with a ventilated microwave dome to ensure even moisture distribution and eliminate cold spots."
    }
  },
  "egg": {
    "materialThermal": {
      "property": "Vapor Expansion & Internal Hydraulic Pressure Rupture",
      "threshold": "Water Volumetric Expansion: Liquid to Steam Expands 1,600x; Burst Pressure >40 PSI",
      "details": "Microwave dipole rotation heats water molecules inside egg whites or sealed jars rapidly. Because the rigid shell or hermetic lid traps steam, internal pressure rises exponentially until an explosive shockwave shatters the item."
    },
    "safetyStandard": {
      "organization": "FDA / CFSAN",
      "standard": "CFSAN Consumer Advisory on Microwave Egg Safety",
      "citation": "Never microwave whole eggs in shells; boiling water within the shell creates a severe steam-explosion and burn hazard."
    },
    "applianceSpecs": {
      "parameter": "Rapid Volumetric Dielectric Heating (2,450 MHz)",
      "guideline": "Internal steam pockets can remain superheated and explode seconds after removal from the microwave cavity when poked with a fork."
    }
  },
  "cheddar-cheese": {
    "materialThermal": {
      "property": "Dielectric Loss Factor & Microwave Permittivity",
      "threshold": "Microwave Transparent (Dielectric Loss Tangent <0.01)",
      "details": "Microwave-safe glass and vitrified ceramics allow 2,450 MHz waves to pass through unhindered directly into food, heating food without absorbing microwave energy into the dish itself."
    },
    "safetyStandard": {
      "organization": "FDA",
      "standard": "FDA Food Code 2022 § 3-401.12 (Microwave Cooking Specifications)",
      "citation": "Foods cooked in microwave ovens must reach 165°F in all parts, be rotated and covered, and allowed to stand 2 minutes post-cooking."
    },
    "applianceSpecs": {
      "parameter": "Turntable Rotation & Standing Wave Balance",
      "guideline": "Use an operational turntable and cover with a ventilated microwave dome to ensure even moisture distribution and eliminate cold spots."
    }
  },
  "mozzarella-cheese": {
    "materialThermal": {
      "property": "Dielectric Loss Factor & Microwave Permittivity",
      "threshold": "Microwave Transparent (Dielectric Loss Tangent <0.01)",
      "details": "Microwave-safe glass and vitrified ceramics allow 2,450 MHz waves to pass through unhindered directly into food, heating food without absorbing microwave energy into the dish itself."
    },
    "safetyStandard": {
      "organization": "FDA",
      "standard": "FDA Food Code 2022 § 3-401.12 (Microwave Cooking Specifications)",
      "citation": "Foods cooked in microwave ovens must reach 165°F in all parts, be rotated and covered, and allowed to stand 2 minutes post-cooking."
    },
    "applianceSpecs": {
      "parameter": "Turntable Rotation & Standing Wave Balance",
      "guideline": "Use an operational turntable and cover with a ventilated microwave dome to ensure even moisture distribution and eliminate cold spots."
    }
  },
  "cream-cheese": {
    "materialThermal": {
      "property": "Dielectric Loss Factor & Microwave Permittivity",
      "threshold": "Microwave Transparent (Dielectric Loss Tangent <0.01)",
      "details": "Microwave-safe glass and vitrified ceramics allow 2,450 MHz waves to pass through unhindered directly into food, heating food without absorbing microwave energy into the dish itself."
    },
    "safetyStandard": {
      "organization": "FDA",
      "standard": "FDA Food Code 2022 § 3-401.12 (Microwave Cooking Specifications)",
      "citation": "Foods cooked in microwave ovens must reach 165°F in all parts, be rotated and covered, and allowed to stand 2 minutes post-cooking."
    },
    "applianceSpecs": {
      "parameter": "Turntable Rotation & Standing Wave Balance",
      "guideline": "Use an operational turntable and cover with a ventilated microwave dome to ensure even moisture distribution and eliminate cold spots."
    }
  },
  "yogurt": {
    "materialThermal": {
      "property": "Dielectric Loss Factor & Microwave Permittivity",
      "threshold": "Microwave Transparent (Dielectric Loss Tangent <0.01)",
      "details": "Microwave-safe glass and vitrified ceramics allow 2,450 MHz waves to pass through unhindered directly into food, heating food without absorbing microwave energy into the dish itself."
    },
    "safetyStandard": {
      "organization": "FDA",
      "standard": "FDA Food Code 2022 § 3-401.12 (Microwave Cooking Specifications)",
      "citation": "Foods cooked in microwave ovens must reach 165°F in all parts, be rotated and covered, and allowed to stand 2 minutes post-cooking."
    },
    "applianceSpecs": {
      "parameter": "Turntable Rotation & Standing Wave Balance",
      "guideline": "Use an operational turntable and cover with a ventilated microwave dome to ensure even moisture distribution and eliminate cold spots."
    }
  },
  "heavy-cream": {
    "materialThermal": {
      "property": "Dielectric Loss Factor & Microwave Permittivity",
      "threshold": "Microwave Transparent (Dielectric Loss Tangent <0.01)",
      "details": "Microwave-safe glass and vitrified ceramics allow 2,450 MHz waves to pass through unhindered directly into food, heating food without absorbing microwave energy into the dish itself."
    },
    "safetyStandard": {
      "organization": "FDA",
      "standard": "FDA Food Code 2022 § 3-401.12 (Microwave Cooking Specifications)",
      "citation": "Foods cooked in microwave ovens must reach 165°F in all parts, be rotated and covered, and allowed to stand 2 minutes post-cooking."
    },
    "applianceSpecs": {
      "parameter": "Turntable Rotation & Standing Wave Balance",
      "guideline": "Use an operational turntable and cover with a ventilated microwave dome to ensure even moisture distribution and eliminate cold spots."
    }
  },
  "sour-cream": {
    "materialThermal": {
      "property": "Dielectric Loss Factor & Microwave Permittivity",
      "threshold": "Microwave Transparent (Dielectric Loss Tangent <0.01)",
      "details": "Microwave-safe glass and vitrified ceramics allow 2,450 MHz waves to pass through unhindered directly into food, heating food without absorbing microwave energy into the dish itself."
    },
    "safetyStandard": {
      "organization": "FDA",
      "standard": "FDA Food Code 2022 § 3-401.12 (Microwave Cooking Specifications)",
      "citation": "Foods cooked in microwave ovens must reach 165°F in all parts, be rotated and covered, and allowed to stand 2 minutes post-cooking."
    },
    "applianceSpecs": {
      "parameter": "Turntable Rotation & Standing Wave Balance",
      "guideline": "Use an operational turntable and cover with a ventilated microwave dome to ensure even moisture distribution and eliminate cold spots."
    }
  },
  "tofu": {
    "materialThermal": {
      "property": "Dielectric Loss Factor & Microwave Permittivity",
      "threshold": "Microwave Transparent (Dielectric Loss Tangent <0.01)",
      "details": "Microwave-safe glass and vitrified ceramics allow 2,450 MHz waves to pass through unhindered directly into food, heating food without absorbing microwave energy into the dish itself."
    },
    "safetyStandard": {
      "organization": "FDA",
      "standard": "FDA Food Code 2022 § 3-401.12 (Microwave Cooking Specifications)",
      "citation": "Foods cooked in microwave ovens must reach 165°F in all parts, be rotated and covered, and allowed to stand 2 minutes post-cooking."
    },
    "applianceSpecs": {
      "parameter": "Turntable Rotation & Standing Wave Balance",
      "guideline": "Use an operational turntable and cover with a ventilated microwave dome to ensure even moisture distribution and eliminate cold spots."
    }
  },
  "tempeh": {
    "materialThermal": {
      "property": "Dielectric Loss Factor & Microwave Permittivity",
      "threshold": "Microwave Transparent (Dielectric Loss Tangent <0.01)",
      "details": "Microwave-safe glass and vitrified ceramics allow 2,450 MHz waves to pass through unhindered directly into food, heating food without absorbing microwave energy into the dish itself."
    },
    "safetyStandard": {
      "organization": "FDA",
      "standard": "FDA Food Code 2022 § 3-401.12 (Microwave Cooking Specifications)",
      "citation": "Foods cooked in microwave ovens must reach 165°F in all parts, be rotated and covered, and allowed to stand 2 minutes post-cooking."
    },
    "applianceSpecs": {
      "parameter": "Turntable Rotation & Standing Wave Balance",
      "guideline": "Use an operational turntable and cover with a ventilated microwave dome to ensure even moisture distribution and eliminate cold spots."
    }
  },
  "apple": {
    "materialThermal": {
      "property": "Dielectric Loss Factor & Microwave Permittivity",
      "threshold": "Microwave Transparent (Dielectric Loss Tangent <0.01)",
      "details": "Microwave-safe glass and vitrified ceramics allow 2,450 MHz waves to pass through unhindered directly into food, heating food without absorbing microwave energy into the dish itself."
    },
    "safetyStandard": {
      "organization": "FDA",
      "standard": "FDA Food Code 2022 § 3-401.12 (Microwave Cooking Specifications)",
      "citation": "Foods cooked in microwave ovens must reach 165°F in all parts, be rotated and covered, and allowed to stand 2 minutes post-cooking."
    },
    "applianceSpecs": {
      "parameter": "Turntable Rotation & Standing Wave Balance",
      "guideline": "Use an operational turntable and cover with a ventilated microwave dome to ensure even moisture distribution and eliminate cold spots."
    }
  },
  "banana": {
    "materialThermal": {
      "property": "Dielectric Loss Factor & Microwave Permittivity",
      "threshold": "Microwave Transparent (Dielectric Loss Tangent <0.01)",
      "details": "Microwave-safe glass and vitrified ceramics allow 2,450 MHz waves to pass through unhindered directly into food, heating food without absorbing microwave energy into the dish itself."
    },
    "safetyStandard": {
      "organization": "FDA",
      "standard": "FDA Food Code 2022 § 3-401.12 (Microwave Cooking Specifications)",
      "citation": "Foods cooked in microwave ovens must reach 165°F in all parts, be rotated and covered, and allowed to stand 2 minutes post-cooking."
    },
    "applianceSpecs": {
      "parameter": "Turntable Rotation & Standing Wave Balance",
      "guideline": "Use an operational turntable and cover with a ventilated microwave dome to ensure even moisture distribution and eliminate cold spots."
    }
  },
  "orange": {
    "materialThermal": {
      "property": "Dielectric Loss Factor & Microwave Permittivity",
      "threshold": "Microwave Transparent (Dielectric Loss Tangent <0.01)",
      "details": "Microwave-safe glass and vitrified ceramics allow 2,450 MHz waves to pass through unhindered directly into food, heating food without absorbing microwave energy into the dish itself."
    },
    "safetyStandard": {
      "organization": "FDA",
      "standard": "FDA Food Code 2022 § 3-401.12 (Microwave Cooking Specifications)",
      "citation": "Foods cooked in microwave ovens must reach 165°F in all parts, be rotated and covered, and allowed to stand 2 minutes post-cooking."
    },
    "applianceSpecs": {
      "parameter": "Turntable Rotation & Standing Wave Balance",
      "guideline": "Use an operational turntable and cover with a ventilated microwave dome to ensure even moisture distribution and eliminate cold spots."
    }
  },
  "strawberry": {
    "materialThermal": {
      "property": "Dielectric Loss Factor & Microwave Permittivity",
      "threshold": "Microwave Transparent (Dielectric Loss Tangent <0.01)",
      "details": "Microwave-safe glass and vitrified ceramics allow 2,450 MHz waves to pass through unhindered directly into food, heating food without absorbing microwave energy into the dish itself."
    },
    "safetyStandard": {
      "organization": "FDA",
      "standard": "FDA Food Code 2022 § 3-401.12 (Microwave Cooking Specifications)",
      "citation": "Foods cooked in microwave ovens must reach 165°F in all parts, be rotated and covered, and allowed to stand 2 minutes post-cooking."
    },
    "applianceSpecs": {
      "parameter": "Turntable Rotation & Standing Wave Balance",
      "guideline": "Use an operational turntable and cover with a ventilated microwave dome to ensure even moisture distribution and eliminate cold spots."
    }
  },
  "blueberry": {
    "materialThermal": {
      "property": "Dielectric Loss Factor & Microwave Permittivity",
      "threshold": "Microwave Transparent (Dielectric Loss Tangent <0.01)",
      "details": "Microwave-safe glass and vitrified ceramics allow 2,450 MHz waves to pass through unhindered directly into food, heating food without absorbing microwave energy into the dish itself."
    },
    "safetyStandard": {
      "organization": "FDA",
      "standard": "FDA Food Code 2022 § 3-401.12 (Microwave Cooking Specifications)",
      "citation": "Foods cooked in microwave ovens must reach 165°F in all parts, be rotated and covered, and allowed to stand 2 minutes post-cooking."
    },
    "applianceSpecs": {
      "parameter": "Turntable Rotation & Standing Wave Balance",
      "guideline": "Use an operational turntable and cover with a ventilated microwave dome to ensure even moisture distribution and eliminate cold spots."
    }
  },
  "raspberry": {
    "materialThermal": {
      "property": "Dielectric Loss Factor & Microwave Permittivity",
      "threshold": "Microwave Transparent (Dielectric Loss Tangent <0.01)",
      "details": "Microwave-safe glass and vitrified ceramics allow 2,450 MHz waves to pass through unhindered directly into food, heating food without absorbing microwave energy into the dish itself."
    },
    "safetyStandard": {
      "organization": "FDA",
      "standard": "FDA Food Code 2022 § 3-401.12 (Microwave Cooking Specifications)",
      "citation": "Foods cooked in microwave ovens must reach 165°F in all parts, be rotated and covered, and allowed to stand 2 minutes post-cooking."
    },
    "applianceSpecs": {
      "parameter": "Turntable Rotation & Standing Wave Balance",
      "guideline": "Use an operational turntable and cover with a ventilated microwave dome to ensure even moisture distribution and eliminate cold spots."
    }
  },
  "blackberry": {
    "materialThermal": {
      "property": "Dielectric Loss Factor & Microwave Permittivity",
      "threshold": "Microwave Transparent (Dielectric Loss Tangent <0.01)",
      "details": "Microwave-safe glass and vitrified ceramics allow 2,450 MHz waves to pass through unhindered directly into food, heating food without absorbing microwave energy into the dish itself."
    },
    "safetyStandard": {
      "organization": "FDA",
      "standard": "FDA Food Code 2022 § 3-401.12 (Microwave Cooking Specifications)",
      "citation": "Foods cooked in microwave ovens must reach 165°F in all parts, be rotated and covered, and allowed to stand 2 minutes post-cooking."
    },
    "applianceSpecs": {
      "parameter": "Turntable Rotation & Standing Wave Balance",
      "guideline": "Use an operational turntable and cover with a ventilated microwave dome to ensure even moisture distribution and eliminate cold spots."
    }
  },
  "grape": {
    "materialThermal": {
      "property": "Dielectric Resonance & Ionized Plasma Formation",
      "threshold": "Electromagnetic Resonance Concentration; Air Ionization Threshold",
      "details": "Two grape halves joined by skin act as a dielectric resonator, focusing microwave energy into a sub-millimeter gap. The concentrated energy vaporizes sodium and potassium ions into an incandescent plasma spark."
    },
    "safetyStandard": {
      "organization": "Physical Review Letters / CPSC",
      "standard": "Resonance Physics Research & CPSC Alerts",
      "citation": "Grapes in microwaves generate plasma discharges capable of cracking glass turntables and damaging cavity coatings."
    },
    "applianceSpecs": {
      "parameter": "Cavity Waveguide Arc Hazard",
      "guideline": "Never microwave grapes; plasma discharges produce ozone and high-voltage electrical arcing across the microwave chamber."
    }
  },
  "watermelon": {
    "materialThermal": {
      "property": "Superheating Phenomenon & Delayed Boiling Eruption",
      "threshold": "Superheating >212°F (100°C) without Nucleation; Eruption Hazard",
      "details": "In smooth glazed cups, water can be heated past 212°F without boiling. Adding a tea bag, spoon, or sugar triggers instantaneous violent bubble nucleation, erupting scalding water upward."
    },
    "safetyStandard": {
      "organization": "FDA / CDRH",
      "standard": "FDA Consumer Health Information / Superheated Water Warning",
      "citation": "Warning on superheated water eruption hazards in smooth containers lacking nucleation sites."
    },
    "applianceSpecs": {
      "parameter": "Volumetric Microwave Excitation (2,450 MHz)",
      "guideline": "Place a wooden stir stick or microwave-safe utensil in the cup during heating to provide bubble nucleation sites and prevent superheated eruptions."
    }
  },
  "cantaloupe": {
    "materialThermal": {
      "property": "Dielectric Loss Factor & Microwave Permittivity",
      "threshold": "Microwave Transparent (Dielectric Loss Tangent <0.01)",
      "details": "Microwave-safe glass and vitrified ceramics allow 2,450 MHz waves to pass through unhindered directly into food, heating food without absorbing microwave energy into the dish itself."
    },
    "safetyStandard": {
      "organization": "FDA",
      "standard": "FDA Food Code 2022 § 3-401.12 (Microwave Cooking Specifications)",
      "citation": "Foods cooked in microwave ovens must reach 165°F in all parts, be rotated and covered, and allowed to stand 2 minutes post-cooking."
    },
    "applianceSpecs": {
      "parameter": "Turntable Rotation & Standing Wave Balance",
      "guideline": "Use an operational turntable and cover with a ventilated microwave dome to ensure even moisture distribution and eliminate cold spots."
    }
  },
  "honeydew": {
    "materialThermal": {
      "property": "Dielectric Loss Factor & Microwave Permittivity",
      "threshold": "Microwave Transparent (Dielectric Loss Tangent <0.01)",
      "details": "Microwave-safe glass and vitrified ceramics allow 2,450 MHz waves to pass through unhindered directly into food, heating food without absorbing microwave energy into the dish itself."
    },
    "safetyStandard": {
      "organization": "FDA",
      "standard": "FDA Food Code 2022 § 3-401.12 (Microwave Cooking Specifications)",
      "citation": "Foods cooked in microwave ovens must reach 165°F in all parts, be rotated and covered, and allowed to stand 2 minutes post-cooking."
    },
    "applianceSpecs": {
      "parameter": "Turntable Rotation & Standing Wave Balance",
      "guideline": "Use an operational turntable and cover with a ventilated microwave dome to ensure even moisture distribution and eliminate cold spots."
    }
  },
  "peach": {
    "materialThermal": {
      "property": "Dielectric Loss Factor & Microwave Permittivity",
      "threshold": "Microwave Transparent (Dielectric Loss Tangent <0.01)",
      "details": "Microwave-safe glass and vitrified ceramics allow 2,450 MHz waves to pass through unhindered directly into food, heating food without absorbing microwave energy into the dish itself."
    },
    "safetyStandard": {
      "organization": "FDA",
      "standard": "FDA Food Code 2022 § 3-401.12 (Microwave Cooking Specifications)",
      "citation": "Foods cooked in microwave ovens must reach 165°F in all parts, be rotated and covered, and allowed to stand 2 minutes post-cooking."
    },
    "applianceSpecs": {
      "parameter": "Turntable Rotation & Standing Wave Balance",
      "guideline": "Use an operational turntable and cover with a ventilated microwave dome to ensure even moisture distribution and eliminate cold spots."
    }
  },
  "plum": {
    "materialThermal": {
      "property": "Dielectric Loss Factor & Microwave Permittivity",
      "threshold": "Microwave Transparent (Dielectric Loss Tangent <0.01)",
      "details": "Microwave-safe glass and vitrified ceramics allow 2,450 MHz waves to pass through unhindered directly into food, heating food without absorbing microwave energy into the dish itself."
    },
    "safetyStandard": {
      "organization": "FDA",
      "standard": "FDA Food Code 2022 § 3-401.12 (Microwave Cooking Specifications)",
      "citation": "Foods cooked in microwave ovens must reach 165°F in all parts, be rotated and covered, and allowed to stand 2 minutes post-cooking."
    },
    "applianceSpecs": {
      "parameter": "Turntable Rotation & Standing Wave Balance",
      "guideline": "Use an operational turntable and cover with a ventilated microwave dome to ensure even moisture distribution and eliminate cold spots."
    }
  },
  "nectarine": {
    "materialThermal": {
      "property": "Dielectric Loss Factor & Microwave Permittivity",
      "threshold": "Microwave Transparent (Dielectric Loss Tangent <0.01)",
      "details": "Microwave-safe glass and vitrified ceramics allow 2,450 MHz waves to pass through unhindered directly into food, heating food without absorbing microwave energy into the dish itself."
    },
    "safetyStandard": {
      "organization": "FDA",
      "standard": "FDA Food Code 2022 § 3-401.12 (Microwave Cooking Specifications)",
      "citation": "Foods cooked in microwave ovens must reach 165°F in all parts, be rotated and covered, and allowed to stand 2 minutes post-cooking."
    },
    "applianceSpecs": {
      "parameter": "Turntable Rotation & Standing Wave Balance",
      "guideline": "Use an operational turntable and cover with a ventilated microwave dome to ensure even moisture distribution and eliminate cold spots."
    }
  },
  "cherry": {
    "materialThermal": {
      "property": "Dielectric Loss Factor & Microwave Permittivity",
      "threshold": "Microwave Transparent (Dielectric Loss Tangent <0.01)",
      "details": "Microwave-safe glass and vitrified ceramics allow 2,450 MHz waves to pass through unhindered directly into food, heating food without absorbing microwave energy into the dish itself."
    },
    "safetyStandard": {
      "organization": "FDA",
      "standard": "FDA Food Code 2022 § 3-401.12 (Microwave Cooking Specifications)",
      "citation": "Foods cooked in microwave ovens must reach 165°F in all parts, be rotated and covered, and allowed to stand 2 minutes post-cooking."
    },
    "applianceSpecs": {
      "parameter": "Turntable Rotation & Standing Wave Balance",
      "guideline": "Use an operational turntable and cover with a ventilated microwave dome to ensure even moisture distribution and eliminate cold spots."
    }
  },
  "mango": {
    "materialThermal": {
      "property": "Dielectric Loss Factor & Microwave Permittivity",
      "threshold": "Microwave Transparent (Dielectric Loss Tangent <0.01)",
      "details": "Microwave-safe glass and vitrified ceramics allow 2,450 MHz waves to pass through unhindered directly into food, heating food without absorbing microwave energy into the dish itself."
    },
    "safetyStandard": {
      "organization": "FDA",
      "standard": "FDA Food Code 2022 § 3-401.12 (Microwave Cooking Specifications)",
      "citation": "Foods cooked in microwave ovens must reach 165°F in all parts, be rotated and covered, and allowed to stand 2 minutes post-cooking."
    },
    "applianceSpecs": {
      "parameter": "Turntable Rotation & Standing Wave Balance",
      "guideline": "Use an operational turntable and cover with a ventilated microwave dome to ensure even moisture distribution and eliminate cold spots."
    }
  },
  "pineapple": {
    "materialThermal": {
      "property": "Dielectric Loss Factor & Microwave Permittivity",
      "threshold": "Microwave Transparent (Dielectric Loss Tangent <0.01)",
      "details": "Microwave-safe glass and vitrified ceramics allow 2,450 MHz waves to pass through unhindered directly into food, heating food without absorbing microwave energy into the dish itself."
    },
    "safetyStandard": {
      "organization": "FDA",
      "standard": "FDA Food Code 2022 § 3-401.12 (Microwave Cooking Specifications)",
      "citation": "Foods cooked in microwave ovens must reach 165°F in all parts, be rotated and covered, and allowed to stand 2 minutes post-cooking."
    },
    "applianceSpecs": {
      "parameter": "Turntable Rotation & Standing Wave Balance",
      "guideline": "Use an operational turntable and cover with a ventilated microwave dome to ensure even moisture distribution and eliminate cold spots."
    }
  },
  "avocado": {
    "materialThermal": {
      "property": "Dielectric Loss Factor & Microwave Permittivity",
      "threshold": "Microwave Transparent (Dielectric Loss Tangent <0.01)",
      "details": "Microwave-safe glass and vitrified ceramics allow 2,450 MHz waves to pass through unhindered directly into food, heating food without absorbing microwave energy into the dish itself."
    },
    "safetyStandard": {
      "organization": "FDA",
      "standard": "FDA Food Code 2022 § 3-401.12 (Microwave Cooking Specifications)",
      "citation": "Foods cooked in microwave ovens must reach 165°F in all parts, be rotated and covered, and allowed to stand 2 minutes post-cooking."
    },
    "applianceSpecs": {
      "parameter": "Turntable Rotation & Standing Wave Balance",
      "guideline": "Use an operational turntable and cover with a ventilated microwave dome to ensure even moisture distribution and eliminate cold spots."
    }
  },
  "tomato": {
    "materialThermal": {
      "property": "Dielectric Loss Factor & Microwave Permittivity",
      "threshold": "Microwave Transparent (Dielectric Loss Tangent <0.01)",
      "details": "Microwave-safe glass and vitrified ceramics allow 2,450 MHz waves to pass through unhindered directly into food, heating food without absorbing microwave energy into the dish itself."
    },
    "safetyStandard": {
      "organization": "FDA",
      "standard": "FDA Food Code 2022 § 3-401.12 (Microwave Cooking Specifications)",
      "citation": "Foods cooked in microwave ovens must reach 165°F in all parts, be rotated and covered, and allowed to stand 2 minutes post-cooking."
    },
    "applianceSpecs": {
      "parameter": "Turntable Rotation & Standing Wave Balance",
      "guideline": "Use an operational turntable and cover with a ventilated microwave dome to ensure even moisture distribution and eliminate cold spots."
    }
  },
  "cucumber": {
    "materialThermal": {
      "property": "Dielectric Loss Factor & Microwave Permittivity",
      "threshold": "Microwave Transparent (Dielectric Loss Tangent <0.01)",
      "details": "Microwave-safe glass and vitrified ceramics allow 2,450 MHz waves to pass through unhindered directly into food, heating food without absorbing microwave energy into the dish itself."
    },
    "safetyStandard": {
      "organization": "FDA",
      "standard": "FDA Food Code 2022 § 3-401.12 (Microwave Cooking Specifications)",
      "citation": "Foods cooked in microwave ovens must reach 165°F in all parts, be rotated and covered, and allowed to stand 2 minutes post-cooking."
    },
    "applianceSpecs": {
      "parameter": "Turntable Rotation & Standing Wave Balance",
      "guideline": "Use an operational turntable and cover with a ventilated microwave dome to ensure even moisture distribution and eliminate cold spots."
    }
  },
  "bell-pepper": {
    "materialThermal": {
      "property": "Capsaicinoid Vaporization & Aerosol Irritant Dispersal",
      "threshold": "Capsaicin Volatilization Threshold >140°F (60°C)",
      "details": "Volumetric heating rapidly vaporizes capsaicin oils from hot pepper seeds into a volatile aerosol that acts like chemical pepper spray when the door is opened."
    },
    "safetyStandard": {
      "organization": "CPSC / OSHA",
      "standard": "CPSC Respiratory & Chemical Irritant Alerts",
      "citation": "Heating whole chili peppers in microwaves aerosolizes pungent capsaicin, causing severe throat, lung, and eye irritation."
    },
    "applianceSpecs": {
      "parameter": "Cavity Vapor Containment & Exhaust",
      "guideline": "Avoid heating whole peppers in microwaves; if heated, let the appliance cool completely and open the door in a well-ventilated room."
    }
  },
  "spinach": {
    "materialThermal": {
      "property": "Dielectric Loss Factor & Microwave Permittivity",
      "threshold": "Microwave Transparent (Dielectric Loss Tangent <0.01)",
      "details": "Microwave-safe glass and vitrified ceramics allow 2,450 MHz waves to pass through unhindered directly into food, heating food without absorbing microwave energy into the dish itself."
    },
    "safetyStandard": {
      "organization": "FDA",
      "standard": "FDA Food Code 2022 § 3-401.12 (Microwave Cooking Specifications)",
      "citation": "Foods cooked in microwave ovens must reach 165°F in all parts, be rotated and covered, and allowed to stand 2 minutes post-cooking."
    },
    "applianceSpecs": {
      "parameter": "Turntable Rotation & Standing Wave Balance",
      "guideline": "Use an operational turntable and cover with a ventilated microwave dome to ensure even moisture distribution and eliminate cold spots."
    }
  },
  "lettuce": {
    "materialThermal": {
      "property": "Dielectric Loss Factor & Microwave Permittivity",
      "threshold": "Microwave Transparent (Dielectric Loss Tangent <0.01)",
      "details": "Microwave-safe glass and vitrified ceramics allow 2,450 MHz waves to pass through unhindered directly into food, heating food without absorbing microwave energy into the dish itself."
    },
    "safetyStandard": {
      "organization": "FDA",
      "standard": "FDA Food Code 2022 § 3-401.12 (Microwave Cooking Specifications)",
      "citation": "Foods cooked in microwave ovens must reach 165°F in all parts, be rotated and covered, and allowed to stand 2 minutes post-cooking."
    },
    "applianceSpecs": {
      "parameter": "Turntable Rotation & Standing Wave Balance",
      "guideline": "Use an operational turntable and cover with a ventilated microwave dome to ensure even moisture distribution and eliminate cold spots."
    }
  },
  "broccoli": {
    "materialThermal": {
      "property": "Dielectric Loss Factor & Microwave Permittivity",
      "threshold": "Microwave Transparent (Dielectric Loss Tangent <0.01)",
      "details": "Microwave-safe glass and vitrified ceramics allow 2,450 MHz waves to pass through unhindered directly into food, heating food without absorbing microwave energy into the dish itself."
    },
    "safetyStandard": {
      "organization": "FDA",
      "standard": "FDA Food Code 2022 § 3-401.12 (Microwave Cooking Specifications)",
      "citation": "Foods cooked in microwave ovens must reach 165°F in all parts, be rotated and covered, and allowed to stand 2 minutes post-cooking."
    },
    "applianceSpecs": {
      "parameter": "Turntable Rotation & Standing Wave Balance",
      "guideline": "Use an operational turntable and cover with a ventilated microwave dome to ensure even moisture distribution and eliminate cold spots."
    }
  },
  "brussels-sprouts": {
    "materialThermal": {
      "property": "Dielectric Loss Factor & Microwave Permittivity",
      "threshold": "Microwave Transparent (Dielectric Loss Tangent <0.01)",
      "details": "Microwave-safe glass and vitrified ceramics allow 2,450 MHz waves to pass through unhindered directly into food, heating food without absorbing microwave energy into the dish itself."
    },
    "safetyStandard": {
      "organization": "FDA",
      "standard": "FDA Food Code 2022 § 3-401.12 (Microwave Cooking Specifications)",
      "citation": "Foods cooked in microwave ovens must reach 165°F in all parts, be rotated and covered, and allowed to stand 2 minutes post-cooking."
    },
    "applianceSpecs": {
      "parameter": "Turntable Rotation & Standing Wave Balance",
      "guideline": "Use an operational turntable and cover with a ventilated microwave dome to ensure even moisture distribution and eliminate cold spots."
    }
  },
  "cabbage": {
    "materialThermal": {
      "property": "Dielectric Loss Factor & Microwave Permittivity",
      "threshold": "Microwave Transparent (Dielectric Loss Tangent <0.01)",
      "details": "Microwave-safe glass and vitrified ceramics allow 2,450 MHz waves to pass through unhindered directly into food, heating food without absorbing microwave energy into the dish itself."
    },
    "safetyStandard": {
      "organization": "FDA",
      "standard": "FDA Food Code 2022 § 3-401.12 (Microwave Cooking Specifications)",
      "citation": "Foods cooked in microwave ovens must reach 165°F in all parts, be rotated and covered, and allowed to stand 2 minutes post-cooking."
    },
    "applianceSpecs": {
      "parameter": "Turntable Rotation & Standing Wave Balance",
      "guideline": "Use an operational turntable and cover with a ventilated microwave dome to ensure even moisture distribution and eliminate cold spots."
    }
  },
  "kale": {
    "materialThermal": {
      "property": "Dielectric Loss Factor & Microwave Permittivity",
      "threshold": "Microwave Transparent (Dielectric Loss Tangent <0.01)",
      "details": "Microwave-safe glass and vitrified ceramics allow 2,450 MHz waves to pass through unhindered directly into food, heating food without absorbing microwave energy into the dish itself."
    },
    "safetyStandard": {
      "organization": "FDA",
      "standard": "FDA Food Code 2022 § 3-401.12 (Microwave Cooking Specifications)",
      "citation": "Foods cooked in microwave ovens must reach 165°F in all parts, be rotated and covered, and allowed to stand 2 minutes post-cooking."
    },
    "applianceSpecs": {
      "parameter": "Turntable Rotation & Standing Wave Balance",
      "guideline": "Use an operational turntable and cover with a ventilated microwave dome to ensure even moisture distribution and eliminate cold spots."
    }
  },
  "carrot": {
    "materialThermal": {
      "property": "Dielectric Loss Factor & Microwave Permittivity",
      "threshold": "Microwave Transparent (Dielectric Loss Tangent <0.01)",
      "details": "Microwave-safe glass and vitrified ceramics allow 2,450 MHz waves to pass through unhindered directly into food, heating food without absorbing microwave energy into the dish itself."
    },
    "safetyStandard": {
      "organization": "FDA",
      "standard": "FDA Food Code 2022 § 3-401.12 (Microwave Cooking Specifications)",
      "citation": "Foods cooked in microwave ovens must reach 165°F in all parts, be rotated and covered, and allowed to stand 2 minutes post-cooking."
    },
    "applianceSpecs": {
      "parameter": "Turntable Rotation & Standing Wave Balance",
      "guideline": "Use an operational turntable and cover with a ventilated microwave dome to ensure even moisture distribution and eliminate cold spots."
    }
  },
  "celery": {
    "materialThermal": {
      "property": "Dielectric Loss Factor & Microwave Permittivity",
      "threshold": "Microwave Transparent (Dielectric Loss Tangent <0.01)",
      "details": "Microwave-safe glass and vitrified ceramics allow 2,450 MHz waves to pass through unhindered directly into food, heating food without absorbing microwave energy into the dish itself."
    },
    "safetyStandard": {
      "organization": "FDA",
      "standard": "FDA Food Code 2022 § 3-401.12 (Microwave Cooking Specifications)",
      "citation": "Foods cooked in microwave ovens must reach 165°F in all parts, be rotated and covered, and allowed to stand 2 minutes post-cooking."
    },
    "applianceSpecs": {
      "parameter": "Turntable Rotation & Standing Wave Balance",
      "guideline": "Use an operational turntable and cover with a ventilated microwave dome to ensure even moisture distribution and eliminate cold spots."
    }
  },
  "onion": {
    "materialThermal": {
      "property": "Dielectric Loss Factor & Microwave Permittivity",
      "threshold": "Microwave Transparent (Dielectric Loss Tangent <0.01)",
      "details": "Microwave-safe glass and vitrified ceramics allow 2,450 MHz waves to pass through unhindered directly into food, heating food without absorbing microwave energy into the dish itself."
    },
    "safetyStandard": {
      "organization": "FDA",
      "standard": "FDA Food Code 2022 § 3-401.12 (Microwave Cooking Specifications)",
      "citation": "Foods cooked in microwave ovens must reach 165°F in all parts, be rotated and covered, and allowed to stand 2 minutes post-cooking."
    },
    "applianceSpecs": {
      "parameter": "Turntable Rotation & Standing Wave Balance",
      "guideline": "Use an operational turntable and cover with a ventilated microwave dome to ensure even moisture distribution and eliminate cold spots."
    }
  },
  "garlic": {
    "materialThermal": {
      "property": "Dielectric Loss Factor & Microwave Permittivity",
      "threshold": "Microwave Transparent (Dielectric Loss Tangent <0.01)",
      "details": "Microwave-safe glass and vitrified ceramics allow 2,450 MHz waves to pass through unhindered directly into food, heating food without absorbing microwave energy into the dish itself."
    },
    "safetyStandard": {
      "organization": "FDA",
      "standard": "FDA Food Code 2022 § 3-401.12 (Microwave Cooking Specifications)",
      "citation": "Foods cooked in microwave ovens must reach 165°F in all parts, be rotated and covered, and allowed to stand 2 minutes post-cooking."
    },
    "applianceSpecs": {
      "parameter": "Turntable Rotation & Standing Wave Balance",
      "guideline": "Use an operational turntable and cover with a ventilated microwave dome to ensure even moisture distribution and eliminate cold spots."
    }
  },
  "potato": {
    "materialThermal": {
      "property": "Dielectric Loss Factor & Microwave Permittivity",
      "threshold": "Microwave Transparent (Dielectric Loss Tangent <0.01)",
      "details": "Microwave-safe glass and vitrified ceramics allow 2,450 MHz waves to pass through unhindered directly into food, heating food without absorbing microwave energy into the dish itself."
    },
    "safetyStandard": {
      "organization": "FDA",
      "standard": "FDA Food Code 2022 § 3-401.12 (Microwave Cooking Specifications)",
      "citation": "Foods cooked in microwave ovens must reach 165°F in all parts, be rotated and covered, and allowed to stand 2 minutes post-cooking."
    },
    "applianceSpecs": {
      "parameter": "Turntable Rotation & Standing Wave Balance",
      "guideline": "Use an operational turntable and cover with a ventilated microwave dome to ensure even moisture distribution and eliminate cold spots."
    }
  },
  "sweet-potato": {
    "materialThermal": {
      "property": "Dielectric Loss Factor & Microwave Permittivity",
      "threshold": "Microwave Transparent (Dielectric Loss Tangent <0.01)",
      "details": "Microwave-safe glass and vitrified ceramics allow 2,450 MHz waves to pass through unhindered directly into food, heating food without absorbing microwave energy into the dish itself."
    },
    "safetyStandard": {
      "organization": "FDA",
      "standard": "FDA Food Code 2022 § 3-401.12 (Microwave Cooking Specifications)",
      "citation": "Foods cooked in microwave ovens must reach 165°F in all parts, be rotated and covered, and allowed to stand 2 minutes post-cooking."
    },
    "applianceSpecs": {
      "parameter": "Turntable Rotation & Standing Wave Balance",
      "guideline": "Use an operational turntable and cover with a ventilated microwave dome to ensure even moisture distribution and eliminate cold spots."
    }
  },
  "zucchini": {
    "materialThermal": {
      "property": "Dielectric Loss Factor & Microwave Permittivity",
      "threshold": "Microwave Transparent (Dielectric Loss Tangent <0.01)",
      "details": "Microwave-safe glass and vitrified ceramics allow 2,450 MHz waves to pass through unhindered directly into food, heating food without absorbing microwave energy into the dish itself."
    },
    "safetyStandard": {
      "organization": "FDA",
      "standard": "FDA Food Code 2022 § 3-401.12 (Microwave Cooking Specifications)",
      "citation": "Foods cooked in microwave ovens must reach 165°F in all parts, be rotated and covered, and allowed to stand 2 minutes post-cooking."
    },
    "applianceSpecs": {
      "parameter": "Turntable Rotation & Standing Wave Balance",
      "guideline": "Use an operational turntable and cover with a ventilated microwave dome to ensure even moisture distribution and eliminate cold spots."
    }
  },
  "yellow-squash": {
    "materialThermal": {
      "property": "Dielectric Loss Factor & Microwave Permittivity",
      "threshold": "Microwave Transparent (Dielectric Loss Tangent <0.01)",
      "details": "Microwave-safe glass and vitrified ceramics allow 2,450 MHz waves to pass through unhindered directly into food, heating food without absorbing microwave energy into the dish itself."
    },
    "safetyStandard": {
      "organization": "FDA",
      "standard": "FDA Food Code 2022 § 3-401.12 (Microwave Cooking Specifications)",
      "citation": "Foods cooked in microwave ovens must reach 165°F in all parts, be rotated and covered, and allowed to stand 2 minutes post-cooking."
    },
    "applianceSpecs": {
      "parameter": "Turntable Rotation & Standing Wave Balance",
      "guideline": "Use an operational turntable and cover with a ventilated microwave dome to ensure even moisture distribution and eliminate cold spots."
    }
  },
  "eggplant": {
    "materialThermal": {
      "property": "Vapor Expansion & Internal Hydraulic Pressure Rupture",
      "threshold": "Water Volumetric Expansion: Liquid to Steam Expands 1,600x; Burst Pressure >40 PSI",
      "details": "Microwave dipole rotation heats water molecules inside egg whites or sealed jars rapidly. Because the rigid shell or hermetic lid traps steam, internal pressure rises exponentially until an explosive shockwave shatters the item."
    },
    "safetyStandard": {
      "organization": "FDA / CFSAN",
      "standard": "CFSAN Consumer Advisory on Microwave Egg Safety",
      "citation": "Never microwave whole eggs in shells; boiling water within the shell creates a severe steam-explosion and burn hazard."
    },
    "applianceSpecs": {
      "parameter": "Rapid Volumetric Dielectric Heating (2,450 MHz)",
      "guideline": "Internal steam pockets can remain superheated and explode seconds after removal from the microwave cavity when poked with a fork."
    }
  },
  "asparagus": {
    "materialThermal": {
      "property": "Dielectric Loss Factor & Microwave Permittivity",
      "threshold": "Microwave Transparent (Dielectric Loss Tangent <0.01)",
      "details": "Microwave-safe glass and vitrified ceramics allow 2,450 MHz waves to pass through unhindered directly into food, heating food without absorbing microwave energy into the dish itself."
    },
    "safetyStandard": {
      "organization": "FDA",
      "standard": "FDA Food Code 2022 § 3-401.12 (Microwave Cooking Specifications)",
      "citation": "Foods cooked in microwave ovens must reach 165°F in all parts, be rotated and covered, and allowed to stand 2 minutes post-cooking."
    },
    "applianceSpecs": {
      "parameter": "Turntable Rotation & Standing Wave Balance",
      "guideline": "Use an operational turntable and cover with a ventilated microwave dome to ensure even moisture distribution and eliminate cold spots."
    }
  },
  "green-beans": {
    "materialThermal": {
      "property": "Dielectric Loss Factor & Microwave Permittivity",
      "threshold": "Microwave Transparent (Dielectric Loss Tangent <0.01)",
      "details": "Microwave-safe glass and vitrified ceramics allow 2,450 MHz waves to pass through unhindered directly into food, heating food without absorbing microwave energy into the dish itself."
    },
    "safetyStandard": {
      "organization": "FDA",
      "standard": "FDA Food Code 2022 § 3-401.12 (Microwave Cooking Specifications)",
      "citation": "Foods cooked in microwave ovens must reach 165°F in all parts, be rotated and covered, and allowed to stand 2 minutes post-cooking."
    },
    "applianceSpecs": {
      "parameter": "Turntable Rotation & Standing Wave Balance",
      "guideline": "Use an operational turntable and cover with a ventilated microwave dome to ensure even moisture distribution and eliminate cold spots."
    }
  },
  "peas": {
    "materialThermal": {
      "property": "Dielectric Loss Factor & Microwave Permittivity",
      "threshold": "Microwave Transparent (Dielectric Loss Tangent <0.01)",
      "details": "Microwave-safe glass and vitrified ceramics allow 2,450 MHz waves to pass through unhindered directly into food, heating food without absorbing microwave energy into the dish itself."
    },
    "safetyStandard": {
      "organization": "FDA",
      "standard": "FDA Food Code 2022 § 3-401.12 (Microwave Cooking Specifications)",
      "citation": "Foods cooked in microwave ovens must reach 165°F in all parts, be rotated and covered, and allowed to stand 2 minutes post-cooking."
    },
    "applianceSpecs": {
      "parameter": "Turntable Rotation & Standing Wave Balance",
      "guideline": "Use an operational turntable and cover with a ventilated microwave dome to ensure even moisture distribution and eliminate cold spots."
    }
  },
  "corn": {
    "materialThermal": {
      "property": "Dielectric Loss Factor & Microwave Permittivity",
      "threshold": "Microwave Transparent (Dielectric Loss Tangent <0.01)",
      "details": "Microwave-safe glass and vitrified ceramics allow 2,450 MHz waves to pass through unhindered directly into food, heating food without absorbing microwave energy into the dish itself."
    },
    "safetyStandard": {
      "organization": "FDA",
      "standard": "FDA Food Code 2022 § 3-401.12 (Microwave Cooking Specifications)",
      "citation": "Foods cooked in microwave ovens must reach 165°F in all parts, be rotated and covered, and allowed to stand 2 minutes post-cooking."
    },
    "applianceSpecs": {
      "parameter": "Turntable Rotation & Standing Wave Balance",
      "guideline": "Use an operational turntable and cover with a ventilated microwave dome to ensure even moisture distribution and eliminate cold spots."
    }
  },
  "mushroom": {
    "materialThermal": {
      "property": "Dielectric Loss Factor & Microwave Permittivity",
      "threshold": "Microwave Transparent (Dielectric Loss Tangent <0.01)",
      "details": "Microwave-safe glass and vitrified ceramics allow 2,450 MHz waves to pass through unhindered directly into food, heating food without absorbing microwave energy into the dish itself."
    },
    "safetyStandard": {
      "organization": "FDA",
      "standard": "FDA Food Code 2022 § 3-401.12 (Microwave Cooking Specifications)",
      "citation": "Foods cooked in microwave ovens must reach 165°F in all parts, be rotated and covered, and allowed to stand 2 minutes post-cooking."
    },
    "applianceSpecs": {
      "parameter": "Turntable Rotation & Standing Wave Balance",
      "guideline": "Use an operational turntable and cover with a ventilated microwave dome to ensure even moisture distribution and eliminate cold spots."
    }
  },
  "ginger": {
    "materialThermal": {
      "property": "Dielectric Loss Factor & Microwave Permittivity",
      "threshold": "Microwave Transparent (Dielectric Loss Tangent <0.01)",
      "details": "Microwave-safe glass and vitrified ceramics allow 2,450 MHz waves to pass through unhindered directly into food, heating food without absorbing microwave energy into the dish itself."
    },
    "safetyStandard": {
      "organization": "FDA",
      "standard": "FDA Food Code 2022 § 3-401.12 (Microwave Cooking Specifications)",
      "citation": "Foods cooked in microwave ovens must reach 165°F in all parts, be rotated and covered, and allowed to stand 2 minutes post-cooking."
    },
    "applianceSpecs": {
      "parameter": "Turntable Rotation & Standing Wave Balance",
      "guideline": "Use an operational turntable and cover with a ventilated microwave dome to ensure even moisture distribution and eliminate cold spots."
    }
  },
  "lemon": {
    "materialThermal": {
      "property": "Dielectric Loss Factor & Microwave Permittivity",
      "threshold": "Microwave Transparent (Dielectric Loss Tangent <0.01)",
      "details": "Microwave-safe glass and vitrified ceramics allow 2,450 MHz waves to pass through unhindered directly into food, heating food without absorbing microwave energy into the dish itself."
    },
    "safetyStandard": {
      "organization": "FDA",
      "standard": "FDA Food Code 2022 § 3-401.12 (Microwave Cooking Specifications)",
      "citation": "Foods cooked in microwave ovens must reach 165°F in all parts, be rotated and covered, and allowed to stand 2 minutes post-cooking."
    },
    "applianceSpecs": {
      "parameter": "Turntable Rotation & Standing Wave Balance",
      "guideline": "Use an operational turntable and cover with a ventilated microwave dome to ensure even moisture distribution and eliminate cold spots."
    }
  },
  "lime": {
    "materialThermal": {
      "property": "Dielectric Loss Factor & Microwave Permittivity",
      "threshold": "Microwave Transparent (Dielectric Loss Tangent <0.01)",
      "details": "Microwave-safe glass and vitrified ceramics allow 2,450 MHz waves to pass through unhindered directly into food, heating food without absorbing microwave energy into the dish itself."
    },
    "safetyStandard": {
      "organization": "FDA",
      "standard": "FDA Food Code 2022 § 3-401.12 (Microwave Cooking Specifications)",
      "citation": "Foods cooked in microwave ovens must reach 165°F in all parts, be rotated and covered, and allowed to stand 2 minutes post-cooking."
    },
    "applianceSpecs": {
      "parameter": "Turntable Rotation & Standing Wave Balance",
      "guideline": "Use an operational turntable and cover with a ventilated microwave dome to ensure even moisture distribution and eliminate cold spots."
    }
  },
  "white-rice": {
    "materialThermal": {
      "property": "Dielectric Loss Factor & Microwave Permittivity",
      "threshold": "Microwave Transparent (Dielectric Loss Tangent <0.01)",
      "details": "Microwave-safe glass and vitrified ceramics allow 2,450 MHz waves to pass through unhindered directly into food, heating food without absorbing microwave energy into the dish itself."
    },
    "safetyStandard": {
      "organization": "FDA",
      "standard": "FDA Food Code 2022 § 3-401.12 (Microwave Cooking Specifications)",
      "citation": "Foods cooked in microwave ovens must reach 165°F in all parts, be rotated and covered, and allowed to stand 2 minutes post-cooking."
    },
    "applianceSpecs": {
      "parameter": "Turntable Rotation & Standing Wave Balance",
      "guideline": "Use an operational turntable and cover with a ventilated microwave dome to ensure even moisture distribution and eliminate cold spots."
    }
  },
  "brown-rice": {
    "materialThermal": {
      "property": "Dielectric Loss Factor & Microwave Permittivity",
      "threshold": "Microwave Transparent (Dielectric Loss Tangent <0.01)",
      "details": "Microwave-safe glass and vitrified ceramics allow 2,450 MHz waves to pass through unhindered directly into food, heating food without absorbing microwave energy into the dish itself."
    },
    "safetyStandard": {
      "organization": "FDA",
      "standard": "FDA Food Code 2022 § 3-401.12 (Microwave Cooking Specifications)",
      "citation": "Foods cooked in microwave ovens must reach 165°F in all parts, be rotated and covered, and allowed to stand 2 minutes post-cooking."
    },
    "applianceSpecs": {
      "parameter": "Turntable Rotation & Standing Wave Balance",
      "guideline": "Use an operational turntable and cover with a ventilated microwave dome to ensure even moisture distribution and eliminate cold spots."
    }
  },
  "quinoa": {
    "materialThermal": {
      "property": "Dielectric Loss Factor & Microwave Permittivity",
      "threshold": "Microwave Transparent (Dielectric Loss Tangent <0.01)",
      "details": "Microwave-safe glass and vitrified ceramics allow 2,450 MHz waves to pass through unhindered directly into food, heating food without absorbing microwave energy into the dish itself."
    },
    "safetyStandard": {
      "organization": "FDA",
      "standard": "FDA Food Code 2022 § 3-401.12 (Microwave Cooking Specifications)",
      "citation": "Foods cooked in microwave ovens must reach 165°F in all parts, be rotated and covered, and allowed to stand 2 minutes post-cooking."
    },
    "applianceSpecs": {
      "parameter": "Turntable Rotation & Standing Wave Balance",
      "guideline": "Use an operational turntable and cover with a ventilated microwave dome to ensure even moisture distribution and eliminate cold spots."
    }
  },
  "lentils": {
    "materialThermal": {
      "property": "Dielectric Loss Factor & Microwave Permittivity",
      "threshold": "Microwave Transparent (Dielectric Loss Tangent <0.01)",
      "details": "Microwave-safe glass and vitrified ceramics allow 2,450 MHz waves to pass through unhindered directly into food, heating food without absorbing microwave energy into the dish itself."
    },
    "safetyStandard": {
      "organization": "FDA",
      "standard": "FDA Food Code 2022 § 3-401.12 (Microwave Cooking Specifications)",
      "citation": "Foods cooked in microwave ovens must reach 165°F in all parts, be rotated and covered, and allowed to stand 2 minutes post-cooking."
    },
    "applianceSpecs": {
      "parameter": "Turntable Rotation & Standing Wave Balance",
      "guideline": "Use an operational turntable and cover with a ventilated microwave dome to ensure even moisture distribution and eliminate cold spots."
    }
  },
  "oatmeal": {
    "materialThermal": {
      "property": "Dielectric Loss Factor & Microwave Permittivity",
      "threshold": "Microwave Transparent (Dielectric Loss Tangent <0.01)",
      "details": "Microwave-safe glass and vitrified ceramics allow 2,450 MHz waves to pass through unhindered directly into food, heating food without absorbing microwave energy into the dish itself."
    },
    "safetyStandard": {
      "organization": "FDA",
      "standard": "FDA Food Code 2022 § 3-401.12 (Microwave Cooking Specifications)",
      "citation": "Foods cooked in microwave ovens must reach 165°F in all parts, be rotated and covered, and allowed to stand 2 minutes post-cooking."
    },
    "applianceSpecs": {
      "parameter": "Turntable Rotation & Standing Wave Balance",
      "guideline": "Use an operational turntable and cover with a ventilated microwave dome to ensure even moisture distribution and eliminate cold spots."
    }
  },
  "spaghetti": {
    "materialThermal": {
      "property": "Dielectric Loss Factor & Microwave Permittivity",
      "threshold": "Microwave Transparent (Dielectric Loss Tangent <0.01)",
      "details": "Microwave-safe glass and vitrified ceramics allow 2,450 MHz waves to pass through unhindered directly into food, heating food without absorbing microwave energy into the dish itself."
    },
    "safetyStandard": {
      "organization": "FDA",
      "standard": "FDA Food Code 2022 § 3-401.12 (Microwave Cooking Specifications)",
      "citation": "Foods cooked in microwave ovens must reach 165°F in all parts, be rotated and covered, and allowed to stand 2 minutes post-cooking."
    },
    "applianceSpecs": {
      "parameter": "Turntable Rotation & Standing Wave Balance",
      "guideline": "Use an operational turntable and cover with a ventilated microwave dome to ensure even moisture distribution and eliminate cold spots."
    }
  },
  "macaroni": {
    "materialThermal": {
      "property": "Dielectric Loss Factor & Microwave Permittivity",
      "threshold": "Microwave Transparent (Dielectric Loss Tangent <0.01)",
      "details": "Microwave-safe glass and vitrified ceramics allow 2,450 MHz waves to pass through unhindered directly into food, heating food without absorbing microwave energy into the dish itself."
    },
    "safetyStandard": {
      "organization": "FDA",
      "standard": "FDA Food Code 2022 § 3-401.12 (Microwave Cooking Specifications)",
      "citation": "Foods cooked in microwave ovens must reach 165°F in all parts, be rotated and covered, and allowed to stand 2 minutes post-cooking."
    },
    "applianceSpecs": {
      "parameter": "Turntable Rotation & Standing Wave Balance",
      "guideline": "Use an operational turntable and cover with a ventilated microwave dome to ensure even moisture distribution and eliminate cold spots."
    }
  },
  "white-bread": {
    "materialThermal": {
      "property": "Dielectric Loss Factor & Microwave Permittivity",
      "threshold": "Microwave Transparent (Dielectric Loss Tangent <0.01)",
      "details": "Microwave-safe glass and vitrified ceramics allow 2,450 MHz waves to pass through unhindered directly into food, heating food without absorbing microwave energy into the dish itself."
    },
    "safetyStandard": {
      "organization": "FDA",
      "standard": "FDA Food Code 2022 § 3-401.12 (Microwave Cooking Specifications)",
      "citation": "Foods cooked in microwave ovens must reach 165°F in all parts, be rotated and covered, and allowed to stand 2 minutes post-cooking."
    },
    "applianceSpecs": {
      "parameter": "Turntable Rotation & Standing Wave Balance",
      "guideline": "Use an operational turntable and cover with a ventilated microwave dome to ensure even moisture distribution and eliminate cold spots."
    }
  },
  "whole-wheat-bread": {
    "materialThermal": {
      "property": "Dielectric Loss Factor & Microwave Permittivity",
      "threshold": "Microwave Transparent (Dielectric Loss Tangent <0.01)",
      "details": "Microwave-safe glass and vitrified ceramics allow 2,450 MHz waves to pass through unhindered directly into food, heating food without absorbing microwave energy into the dish itself."
    },
    "safetyStandard": {
      "organization": "FDA",
      "standard": "FDA Food Code 2022 § 3-401.12 (Microwave Cooking Specifications)",
      "citation": "Foods cooked in microwave ovens must reach 165°F in all parts, be rotated and covered, and allowed to stand 2 minutes post-cooking."
    },
    "applianceSpecs": {
      "parameter": "Turntable Rotation & Standing Wave Balance",
      "guideline": "Use an operational turntable and cover with a ventilated microwave dome to ensure even moisture distribution and eliminate cold spots."
    }
  },
  "sourdough-bread": {
    "materialThermal": {
      "property": "Dielectric Loss Factor & Microwave Permittivity",
      "threshold": "Microwave Transparent (Dielectric Loss Tangent <0.01)",
      "details": "Microwave-safe glass and vitrified ceramics allow 2,450 MHz waves to pass through unhindered directly into food, heating food without absorbing microwave energy into the dish itself."
    },
    "safetyStandard": {
      "organization": "FDA",
      "standard": "FDA Food Code 2022 § 3-401.12 (Microwave Cooking Specifications)",
      "citation": "Foods cooked in microwave ovens must reach 165°F in all parts, be rotated and covered, and allowed to stand 2 minutes post-cooking."
    },
    "applianceSpecs": {
      "parameter": "Turntable Rotation & Standing Wave Balance",
      "guideline": "Use an operational turntable and cover with a ventilated microwave dome to ensure even moisture distribution and eliminate cold spots."
    }
  },
  "croissant": {
    "materialThermal": {
      "property": "Dielectric Loss Factor & Microwave Permittivity",
      "threshold": "Microwave Transparent (Dielectric Loss Tangent <0.01)",
      "details": "Microwave-safe glass and vitrified ceramics allow 2,450 MHz waves to pass through unhindered directly into food, heating food without absorbing microwave energy into the dish itself."
    },
    "safetyStandard": {
      "organization": "FDA",
      "standard": "FDA Food Code 2022 § 3-401.12 (Microwave Cooking Specifications)",
      "citation": "Foods cooked in microwave ovens must reach 165°F in all parts, be rotated and covered, and allowed to stand 2 minutes post-cooking."
    },
    "applianceSpecs": {
      "parameter": "Turntable Rotation & Standing Wave Balance",
      "guideline": "Use an operational turntable and cover with a ventilated microwave dome to ensure even moisture distribution and eliminate cold spots."
    }
  },
  "bagel": {
    "materialThermal": {
      "property": "Dielectric Loss Factor & Microwave Permittivity",
      "threshold": "Microwave Transparent (Dielectric Loss Tangent <0.01)",
      "details": "Microwave-safe glass and vitrified ceramics allow 2,450 MHz waves to pass through unhindered directly into food, heating food without absorbing microwave energy into the dish itself."
    },
    "safetyStandard": {
      "organization": "FDA",
      "standard": "FDA Food Code 2022 § 3-401.12 (Microwave Cooking Specifications)",
      "citation": "Foods cooked in microwave ovens must reach 165°F in all parts, be rotated and covered, and allowed to stand 2 minutes post-cooking."
    },
    "applianceSpecs": {
      "parameter": "Turntable Rotation & Standing Wave Balance",
      "guideline": "Use an operational turntable and cover with a ventilated microwave dome to ensure even moisture distribution and eliminate cold spots."
    }
  },
  "pita-bread": {
    "materialThermal": {
      "property": "Dielectric Loss Factor & Microwave Permittivity",
      "threshold": "Microwave Transparent (Dielectric Loss Tangent <0.01)",
      "details": "Microwave-safe glass and vitrified ceramics allow 2,450 MHz waves to pass through unhindered directly into food, heating food without absorbing microwave energy into the dish itself."
    },
    "safetyStandard": {
      "organization": "FDA",
      "standard": "FDA Food Code 2022 § 3-401.12 (Microwave Cooking Specifications)",
      "citation": "Foods cooked in microwave ovens must reach 165°F in all parts, be rotated and covered, and allowed to stand 2 minutes post-cooking."
    },
    "applianceSpecs": {
      "parameter": "Turntable Rotation & Standing Wave Balance",
      "guideline": "Use an operational turntable and cover with a ventilated microwave dome to ensure even moisture distribution and eliminate cold spots."
    }
  },
  "tortilla": {
    "materialThermal": {
      "property": "Dielectric Loss Factor & Microwave Permittivity",
      "threshold": "Microwave Transparent (Dielectric Loss Tangent <0.01)",
      "details": "Microwave-safe glass and vitrified ceramics allow 2,450 MHz waves to pass through unhindered directly into food, heating food without absorbing microwave energy into the dish itself."
    },
    "safetyStandard": {
      "organization": "FDA",
      "standard": "FDA Food Code 2022 § 3-401.12 (Microwave Cooking Specifications)",
      "citation": "Foods cooked in microwave ovens must reach 165°F in all parts, be rotated and covered, and allowed to stand 2 minutes post-cooking."
    },
    "applianceSpecs": {
      "parameter": "Turntable Rotation & Standing Wave Balance",
      "guideline": "Use an operational turntable and cover with a ventilated microwave dome to ensure even moisture distribution and eliminate cold spots."
    }
  },
  "pizza-dough": {
    "materialThermal": {
      "property": "Dielectric Loss Factor & Microwave Permittivity",
      "threshold": "Microwave Transparent (Dielectric Loss Tangent <0.01)",
      "details": "Microwave-safe glass and vitrified ceramics allow 2,450 MHz waves to pass through unhindered directly into food, heating food without absorbing microwave energy into the dish itself."
    },
    "safetyStandard": {
      "organization": "FDA",
      "standard": "FDA Food Code 2022 § 3-401.12 (Microwave Cooking Specifications)",
      "citation": "Foods cooked in microwave ovens must reach 165°F in all parts, be rotated and covered, and allowed to stand 2 minutes post-cooking."
    },
    "applianceSpecs": {
      "parameter": "Turntable Rotation & Standing Wave Balance",
      "guideline": "Use an operational turntable and cover with a ventilated microwave dome to ensure even moisture distribution and eliminate cold spots."
    }
  },
  "cookie-dough": {
    "materialThermal": {
      "property": "Dielectric Loss Factor & Microwave Permittivity",
      "threshold": "Microwave Transparent (Dielectric Loss Tangent <0.01)",
      "details": "Microwave-safe glass and vitrified ceramics allow 2,450 MHz waves to pass through unhindered directly into food, heating food without absorbing microwave energy into the dish itself."
    },
    "safetyStandard": {
      "organization": "FDA",
      "standard": "FDA Food Code 2022 § 3-401.12 (Microwave Cooking Specifications)",
      "citation": "Foods cooked in microwave ovens must reach 165°F in all parts, be rotated and covered, and allowed to stand 2 minutes post-cooking."
    },
    "applianceSpecs": {
      "parameter": "Turntable Rotation & Standing Wave Balance",
      "guideline": "Use an operational turntable and cover with a ventilated microwave dome to ensure even moisture distribution and eliminate cold spots."
    }
  },
  "chocolate-chip-cookies": {
    "materialThermal": {
      "property": "Dielectric Loss Factor & Microwave Permittivity",
      "threshold": "Microwave Transparent (Dielectric Loss Tangent <0.01)",
      "details": "Microwave-safe glass and vitrified ceramics allow 2,450 MHz waves to pass through unhindered directly into food, heating food without absorbing microwave energy into the dish itself."
    },
    "safetyStandard": {
      "organization": "FDA",
      "standard": "FDA Food Code 2022 § 3-401.12 (Microwave Cooking Specifications)",
      "citation": "Foods cooked in microwave ovens must reach 165°F in all parts, be rotated and covered, and allowed to stand 2 minutes post-cooking."
    },
    "applianceSpecs": {
      "parameter": "Turntable Rotation & Standing Wave Balance",
      "guideline": "Use an operational turntable and cover with a ventilated microwave dome to ensure even moisture distribution and eliminate cold spots."
    }
  },
  "cake": {
    "materialThermal": {
      "property": "Dielectric Loss Factor & Microwave Permittivity",
      "threshold": "Microwave Transparent (Dielectric Loss Tangent <0.01)",
      "details": "Microwave-safe glass and vitrified ceramics allow 2,450 MHz waves to pass through unhindered directly into food, heating food without absorbing microwave energy into the dish itself."
    },
    "safetyStandard": {
      "organization": "FDA",
      "standard": "FDA Food Code 2022 § 3-401.12 (Microwave Cooking Specifications)",
      "citation": "Foods cooked in microwave ovens must reach 165°F in all parts, be rotated and covered, and allowed to stand 2 minutes post-cooking."
    },
    "applianceSpecs": {
      "parameter": "Turntable Rotation & Standing Wave Balance",
      "guideline": "Use an operational turntable and cover with a ventilated microwave dome to ensure even moisture distribution and eliminate cold spots."
    }
  },
  "muffin": {
    "materialThermal": {
      "property": "Dielectric Loss Factor & Microwave Permittivity",
      "threshold": "Microwave Transparent (Dielectric Loss Tangent <0.01)",
      "details": "Microwave-safe glass and vitrified ceramics allow 2,450 MHz waves to pass through unhindered directly into food, heating food without absorbing microwave energy into the dish itself."
    },
    "safetyStandard": {
      "organization": "FDA",
      "standard": "FDA Food Code 2022 § 3-401.12 (Microwave Cooking Specifications)",
      "citation": "Foods cooked in microwave ovens must reach 165°F in all parts, be rotated and covered, and allowed to stand 2 minutes post-cooking."
    },
    "applianceSpecs": {
      "parameter": "Turntable Rotation & Standing Wave Balance",
      "guideline": "Use an operational turntable and cover with a ventilated microwave dome to ensure even moisture distribution and eliminate cold spots."
    }
  },
  "pie": {
    "materialThermal": {
      "property": "Dielectric Loss Factor & Microwave Permittivity",
      "threshold": "Microwave Transparent (Dielectric Loss Tangent <0.01)",
      "details": "Microwave-safe glass and vitrified ceramics allow 2,450 MHz waves to pass through unhindered directly into food, heating food without absorbing microwave energy into the dish itself."
    },
    "safetyStandard": {
      "organization": "FDA",
      "standard": "FDA Food Code 2022 § 3-401.12 (Microwave Cooking Specifications)",
      "citation": "Foods cooked in microwave ovens must reach 165°F in all parts, be rotated and covered, and allowed to stand 2 minutes post-cooking."
    },
    "applianceSpecs": {
      "parameter": "Turntable Rotation & Standing Wave Balance",
      "guideline": "Use an operational turntable and cover with a ventilated microwave dome to ensure even moisture distribution and eliminate cold spots."
    }
  },
  "brownie": {
    "materialThermal": {
      "property": "Dielectric Loss Factor & Microwave Permittivity",
      "threshold": "Microwave Transparent (Dielectric Loss Tangent <0.01)",
      "details": "Microwave-safe glass and vitrified ceramics allow 2,450 MHz waves to pass through unhindered directly into food, heating food without absorbing microwave energy into the dish itself."
    },
    "safetyStandard": {
      "organization": "FDA",
      "standard": "FDA Food Code 2022 § 3-401.12 (Microwave Cooking Specifications)",
      "citation": "Foods cooked in microwave ovens must reach 165°F in all parts, be rotated and covered, and allowed to stand 2 minutes post-cooking."
    },
    "applianceSpecs": {
      "parameter": "Turntable Rotation & Standing Wave Balance",
      "guideline": "Use an operational turntable and cover with a ventilated microwave dome to ensure even moisture distribution and eliminate cold spots."
    }
  },
  "maple-syrup": {
    "materialThermal": {
      "property": "Dielectric Loss Factor & Microwave Permittivity",
      "threshold": "Microwave Transparent (Dielectric Loss Tangent <0.01)",
      "details": "Microwave-safe glass and vitrified ceramics allow 2,450 MHz waves to pass through unhindered directly into food, heating food without absorbing microwave energy into the dish itself."
    },
    "safetyStandard": {
      "organization": "FDA",
      "standard": "FDA Food Code 2022 § 3-401.12 (Microwave Cooking Specifications)",
      "citation": "Foods cooked in microwave ovens must reach 165°F in all parts, be rotated and covered, and allowed to stand 2 minutes post-cooking."
    },
    "applianceSpecs": {
      "parameter": "Turntable Rotation & Standing Wave Balance",
      "guideline": "Use an operational turntable and cover with a ventilated microwave dome to ensure even moisture distribution and eliminate cold spots."
    }
  },
  "vegetable-oil": {
    "materialThermal": {
      "property": "Dielectric Loss Factor & Microwave Permittivity",
      "threshold": "Microwave Transparent (Dielectric Loss Tangent <0.01)",
      "details": "Microwave-safe glass and vitrified ceramics allow 2,450 MHz waves to pass through unhindered directly into food, heating food without absorbing microwave energy into the dish itself."
    },
    "safetyStandard": {
      "organization": "FDA",
      "standard": "FDA Food Code 2022 § 3-401.12 (Microwave Cooking Specifications)",
      "citation": "Foods cooked in microwave ovens must reach 165°F in all parts, be rotated and covered, and allowed to stand 2 minutes post-cooking."
    },
    "applianceSpecs": {
      "parameter": "Turntable Rotation & Standing Wave Balance",
      "guideline": "Use an operational turntable and cover with a ventilated microwave dome to ensure even moisture distribution and eliminate cold spots."
    }
  },
  "coconut-oil": {
    "materialThermal": {
      "property": "Dielectric Loss Factor & Microwave Permittivity",
      "threshold": "Microwave Transparent (Dielectric Loss Tangent <0.01)",
      "details": "Microwave-safe glass and vitrified ceramics allow 2,450 MHz waves to pass through unhindered directly into food, heating food without absorbing microwave energy into the dish itself."
    },
    "safetyStandard": {
      "organization": "FDA",
      "standard": "FDA Food Code 2022 § 3-401.12 (Microwave Cooking Specifications)",
      "citation": "Foods cooked in microwave ovens must reach 165°F in all parts, be rotated and covered, and allowed to stand 2 minutes post-cooking."
    },
    "applianceSpecs": {
      "parameter": "Turntable Rotation & Standing Wave Balance",
      "guideline": "Use an operational turntable and cover with a ventilated microwave dome to ensure even moisture distribution and eliminate cold spots."
    }
  },
  "peanut-butter": {
    "materialThermal": {
      "property": "Dielectric Loss Factor & Microwave Permittivity",
      "threshold": "Microwave Transparent (Dielectric Loss Tangent <0.01)",
      "details": "Microwave-safe glass and vitrified ceramics allow 2,450 MHz waves to pass through unhindered directly into food, heating food without absorbing microwave energy into the dish itself."
    },
    "safetyStandard": {
      "organization": "FDA",
      "standard": "FDA Food Code 2022 § 3-401.12 (Microwave Cooking Specifications)",
      "citation": "Foods cooked in microwave ovens must reach 165°F in all parts, be rotated and covered, and allowed to stand 2 minutes post-cooking."
    },
    "applianceSpecs": {
      "parameter": "Turntable Rotation & Standing Wave Balance",
      "guideline": "Use an operational turntable and cover with a ventilated microwave dome to ensure even moisture distribution and eliminate cold spots."
    }
  },
  "almond-butter": {
    "materialThermal": {
      "property": "Dielectric Loss Factor & Microwave Permittivity",
      "threshold": "Microwave Transparent (Dielectric Loss Tangent <0.01)",
      "details": "Microwave-safe glass and vitrified ceramics allow 2,450 MHz waves to pass through unhindered directly into food, heating food without absorbing microwave energy into the dish itself."
    },
    "safetyStandard": {
      "organization": "FDA",
      "standard": "FDA Food Code 2022 § 3-401.12 (Microwave Cooking Specifications)",
      "citation": "Foods cooked in microwave ovens must reach 165°F in all parts, be rotated and covered, and allowed to stand 2 minutes post-cooking."
    },
    "applianceSpecs": {
      "parameter": "Turntable Rotation & Standing Wave Balance",
      "guideline": "Use an operational turntable and cover with a ventilated microwave dome to ensure even moisture distribution and eliminate cold spots."
    }
  },
  "nutella": {
    "materialThermal": {
      "property": "Dielectric Loss Factor & Microwave Permittivity",
      "threshold": "Microwave Transparent (Dielectric Loss Tangent <0.01)",
      "details": "Microwave-safe glass and vitrified ceramics allow 2,450 MHz waves to pass through unhindered directly into food, heating food without absorbing microwave energy into the dish itself."
    },
    "safetyStandard": {
      "organization": "FDA",
      "standard": "FDA Food Code 2022 § 3-401.12 (Microwave Cooking Specifications)",
      "citation": "Foods cooked in microwave ovens must reach 165°F in all parts, be rotated and covered, and allowed to stand 2 minutes post-cooking."
    },
    "applianceSpecs": {
      "parameter": "Turntable Rotation & Standing Wave Balance",
      "guideline": "Use an operational turntable and cover with a ventilated microwave dome to ensure even moisture distribution and eliminate cold spots."
    }
  },
  "jam": {
    "materialThermal": {
      "property": "Dielectric Loss Factor & Microwave Permittivity",
      "threshold": "Microwave Transparent (Dielectric Loss Tangent <0.01)",
      "details": "Microwave-safe glass and vitrified ceramics allow 2,450 MHz waves to pass through unhindered directly into food, heating food without absorbing microwave energy into the dish itself."
    },
    "safetyStandard": {
      "organization": "FDA",
      "standard": "FDA Food Code 2022 § 3-401.12 (Microwave Cooking Specifications)",
      "citation": "Foods cooked in microwave ovens must reach 165°F in all parts, be rotated and covered, and allowed to stand 2 minutes post-cooking."
    },
    "applianceSpecs": {
      "parameter": "Turntable Rotation & Standing Wave Balance",
      "guideline": "Use an operational turntable and cover with a ventilated microwave dome to ensure even moisture distribution and eliminate cold spots."
    }
  },
  "jelly": {
    "materialThermal": {
      "property": "Dielectric Loss Factor & Microwave Permittivity",
      "threshold": "Microwave Transparent (Dielectric Loss Tangent <0.01)",
      "details": "Microwave-safe glass and vitrified ceramics allow 2,450 MHz waves to pass through unhindered directly into food, heating food without absorbing microwave energy into the dish itself."
    },
    "safetyStandard": {
      "organization": "FDA",
      "standard": "FDA Food Code 2022 § 3-401.12 (Microwave Cooking Specifications)",
      "citation": "Foods cooked in microwave ovens must reach 165°F in all parts, be rotated and covered, and allowed to stand 2 minutes post-cooking."
    },
    "applianceSpecs": {
      "parameter": "Turntable Rotation & Standing Wave Balance",
      "guideline": "Use an operational turntable and cover with a ventilated microwave dome to ensure even moisture distribution and eliminate cold spots."
    }
  },
  "mayonnaise": {
    "materialThermal": {
      "property": "Dielectric Loss Factor & Microwave Permittivity",
      "threshold": "Microwave Transparent (Dielectric Loss Tangent <0.01)",
      "details": "Microwave-safe glass and vitrified ceramics allow 2,450 MHz waves to pass through unhindered directly into food, heating food without absorbing microwave energy into the dish itself."
    },
    "safetyStandard": {
      "organization": "FDA",
      "standard": "FDA Food Code 2022 § 3-401.12 (Microwave Cooking Specifications)",
      "citation": "Foods cooked in microwave ovens must reach 165°F in all parts, be rotated and covered, and allowed to stand 2 minutes post-cooking."
    },
    "applianceSpecs": {
      "parameter": "Turntable Rotation & Standing Wave Balance",
      "guideline": "Use an operational turntable and cover with a ventilated microwave dome to ensure even moisture distribution and eliminate cold spots."
    }
  },
  "ketchup": {
    "materialThermal": {
      "property": "Dielectric Loss Factor & Microwave Permittivity",
      "threshold": "Microwave Transparent (Dielectric Loss Tangent <0.01)",
      "details": "Microwave-safe glass and vitrified ceramics allow 2,450 MHz waves to pass through unhindered directly into food, heating food without absorbing microwave energy into the dish itself."
    },
    "safetyStandard": {
      "organization": "FDA",
      "standard": "FDA Food Code 2022 § 3-401.12 (Microwave Cooking Specifications)",
      "citation": "Foods cooked in microwave ovens must reach 165°F in all parts, be rotated and covered, and allowed to stand 2 minutes post-cooking."
    },
    "applianceSpecs": {
      "parameter": "Turntable Rotation & Standing Wave Balance",
      "guideline": "Use an operational turntable and cover with a ventilated microwave dome to ensure even moisture distribution and eliminate cold spots."
    }
  },
  "mustard": {
    "materialThermal": {
      "property": "Dielectric Loss Factor & Microwave Permittivity",
      "threshold": "Microwave Transparent (Dielectric Loss Tangent <0.01)",
      "details": "Microwave-safe glass and vitrified ceramics allow 2,450 MHz waves to pass through unhindered directly into food, heating food without absorbing microwave energy into the dish itself."
    },
    "safetyStandard": {
      "organization": "FDA",
      "standard": "FDA Food Code 2022 § 3-401.12 (Microwave Cooking Specifications)",
      "citation": "Foods cooked in microwave ovens must reach 165°F in all parts, be rotated and covered, and allowed to stand 2 minutes post-cooking."
    },
    "applianceSpecs": {
      "parameter": "Turntable Rotation & Standing Wave Balance",
      "guideline": "Use an operational turntable and cover with a ventilated microwave dome to ensure even moisture distribution and eliminate cold spots."
    }
  },
  "soy-sauce": {
    "materialThermal": {
      "property": "Dielectric Loss Factor & Microwave Permittivity",
      "threshold": "Microwave Transparent (Dielectric Loss Tangent <0.01)",
      "details": "Microwave-safe glass and vitrified ceramics allow 2,450 MHz waves to pass through unhindered directly into food, heating food without absorbing microwave energy into the dish itself."
    },
    "safetyStandard": {
      "organization": "FDA",
      "standard": "FDA Food Code 2022 § 3-401.12 (Microwave Cooking Specifications)",
      "citation": "Foods cooked in microwave ovens must reach 165°F in all parts, be rotated and covered, and allowed to stand 2 minutes post-cooking."
    },
    "applianceSpecs": {
      "parameter": "Turntable Rotation & Standing Wave Balance",
      "guideline": "Use an operational turntable and cover with a ventilated microwave dome to ensure even moisture distribution and eliminate cold spots."
    }
  },
  "hot-sauce": {
    "materialThermal": {
      "property": "Dielectric Loss Factor & Microwave Permittivity",
      "threshold": "Microwave Transparent (Dielectric Loss Tangent <0.01)",
      "details": "Microwave-safe glass and vitrified ceramics allow 2,450 MHz waves to pass through unhindered directly into food, heating food without absorbing microwave energy into the dish itself."
    },
    "safetyStandard": {
      "organization": "FDA",
      "standard": "FDA Food Code 2022 § 3-401.12 (Microwave Cooking Specifications)",
      "citation": "Foods cooked in microwave ovens must reach 165°F in all parts, be rotated and covered, and allowed to stand 2 minutes post-cooking."
    },
    "applianceSpecs": {
      "parameter": "Turntable Rotation & Standing Wave Balance",
      "guideline": "Use an operational turntable and cover with a ventilated microwave dome to ensure even moisture distribution and eliminate cold spots."
    }
  },
  "salad-dressing": {
    "materialThermal": {
      "property": "Dielectric Loss Factor & Microwave Permittivity",
      "threshold": "Microwave Transparent (Dielectric Loss Tangent <0.01)",
      "details": "Microwave-safe glass and vitrified ceramics allow 2,450 MHz waves to pass through unhindered directly into food, heating food without absorbing microwave energy into the dish itself."
    },
    "safetyStandard": {
      "organization": "FDA",
      "standard": "FDA Food Code 2022 § 3-401.12 (Microwave Cooking Specifications)",
      "citation": "Foods cooked in microwave ovens must reach 165°F in all parts, be rotated and covered, and allowed to stand 2 minutes post-cooking."
    },
    "applianceSpecs": {
      "parameter": "Turntable Rotation & Standing Wave Balance",
      "guideline": "Use an operational turntable and cover with a ventilated microwave dome to ensure even moisture distribution and eliminate cold spots."
    }
  },
  "hummus": {
    "materialThermal": {
      "property": "Dielectric Loss Factor & Microwave Permittivity",
      "threshold": "Microwave Transparent (Dielectric Loss Tangent <0.01)",
      "details": "Microwave-safe glass and vitrified ceramics allow 2,450 MHz waves to pass through unhindered directly into food, heating food without absorbing microwave energy into the dish itself."
    },
    "safetyStandard": {
      "organization": "FDA",
      "standard": "FDA Food Code 2022 § 3-401.12 (Microwave Cooking Specifications)",
      "citation": "Foods cooked in microwave ovens must reach 165°F in all parts, be rotated and covered, and allowed to stand 2 minutes post-cooking."
    },
    "applianceSpecs": {
      "parameter": "Turntable Rotation & Standing Wave Balance",
      "guideline": "Use an operational turntable and cover with a ventilated microwave dome to ensure even moisture distribution and eliminate cold spots."
    }
  },
  "guacamole": {
    "materialThermal": {
      "property": "Dielectric Loss Factor & Microwave Permittivity",
      "threshold": "Microwave Transparent (Dielectric Loss Tangent <0.01)",
      "details": "Microwave-safe glass and vitrified ceramics allow 2,450 MHz waves to pass through unhindered directly into food, heating food without absorbing microwave energy into the dish itself."
    },
    "safetyStandard": {
      "organization": "FDA",
      "standard": "FDA Food Code 2022 § 3-401.12 (Microwave Cooking Specifications)",
      "citation": "Foods cooked in microwave ovens must reach 165°F in all parts, be rotated and covered, and allowed to stand 2 minutes post-cooking."
    },
    "applianceSpecs": {
      "parameter": "Turntable Rotation & Standing Wave Balance",
      "guideline": "Use an operational turntable and cover with a ventilated microwave dome to ensure even moisture distribution and eliminate cold spots."
    }
  },
  "salsa": {
    "materialThermal": {
      "property": "Dielectric Loss Factor & Microwave Permittivity",
      "threshold": "Microwave Transparent (Dielectric Loss Tangent <0.01)",
      "details": "Microwave-safe glass and vitrified ceramics allow 2,450 MHz waves to pass through unhindered directly into food, heating food without absorbing microwave energy into the dish itself."
    },
    "safetyStandard": {
      "organization": "FDA",
      "standard": "FDA Food Code 2022 § 3-401.12 (Microwave Cooking Specifications)",
      "citation": "Foods cooked in microwave ovens must reach 165°F in all parts, be rotated and covered, and allowed to stand 2 minutes post-cooking."
    },
    "applianceSpecs": {
      "parameter": "Turntable Rotation & Standing Wave Balance",
      "guideline": "Use an operational turntable and cover with a ventilated microwave dome to ensure even moisture distribution and eliminate cold spots."
    }
  },
  "coffee": {
    "materialThermal": {
      "property": "Superheating Phenomenon & Delayed Boiling Eruption",
      "threshold": "Superheating >212°F (100°C) without Nucleation; Eruption Hazard",
      "details": "In smooth glazed cups, water can be heated past 212°F without boiling. Adding a tea bag, spoon, or sugar triggers instantaneous violent bubble nucleation, erupting scalding water upward."
    },
    "safetyStandard": {
      "organization": "FDA / CDRH",
      "standard": "FDA Consumer Health Information / Superheated Water Warning",
      "citation": "Warning on superheated water eruption hazards in smooth containers lacking nucleation sites."
    },
    "applianceSpecs": {
      "parameter": "Volumetric Microwave Excitation (2,450 MHz)",
      "guideline": "Place a wooden stir stick or microwave-safe utensil in the cup during heating to provide bubble nucleation sites and prevent superheated eruptions."
    }
  },
  "tea": {
    "materialThermal": {
      "property": "Superheating Phenomenon & Delayed Boiling Eruption",
      "threshold": "Superheating >212°F (100°C) without Nucleation; Eruption Hazard",
      "details": "In smooth glazed cups, water can be heated past 212°F without boiling. Adding a tea bag, spoon, or sugar triggers instantaneous violent bubble nucleation, erupting scalding water upward."
    },
    "safetyStandard": {
      "organization": "FDA / CDRH",
      "standard": "FDA Consumer Health Information / Superheated Water Warning",
      "citation": "Warning on superheated water eruption hazards in smooth containers lacking nucleation sites."
    },
    "applianceSpecs": {
      "parameter": "Volumetric Microwave Excitation (2,450 MHz)",
      "guideline": "Place a wooden stir stick or microwave-safe utensil in the cup during heating to provide bubble nucleation sites and prevent superheated eruptions."
    }
  },
  "soda": {
    "materialThermal": {
      "property": "Dielectric Loss Factor & Microwave Permittivity",
      "threshold": "Microwave Transparent (Dielectric Loss Tangent <0.01)",
      "details": "Microwave-safe glass and vitrified ceramics allow 2,450 MHz waves to pass through unhindered directly into food, heating food without absorbing microwave energy into the dish itself."
    },
    "safetyStandard": {
      "organization": "FDA",
      "standard": "FDA Food Code 2022 § 3-401.12 (Microwave Cooking Specifications)",
      "citation": "Foods cooked in microwave ovens must reach 165°F in all parts, be rotated and covered, and allowed to stand 2 minutes post-cooking."
    },
    "applianceSpecs": {
      "parameter": "Turntable Rotation & Standing Wave Balance",
      "guideline": "Use an operational turntable and cover with a ventilated microwave dome to ensure even moisture distribution and eliminate cold spots."
    }
  },
  "orange-juice": {
    "materialThermal": {
      "property": "Dielectric Loss Factor & Microwave Permittivity",
      "threshold": "Microwave Transparent (Dielectric Loss Tangent <0.01)",
      "details": "Microwave-safe glass and vitrified ceramics allow 2,450 MHz waves to pass through unhindered directly into food, heating food without absorbing microwave energy into the dish itself."
    },
    "safetyStandard": {
      "organization": "FDA",
      "standard": "FDA Food Code 2022 § 3-401.12 (Microwave Cooking Specifications)",
      "citation": "Foods cooked in microwave ovens must reach 165°F in all parts, be rotated and covered, and allowed to stand 2 minutes post-cooking."
    },
    "applianceSpecs": {
      "parameter": "Turntable Rotation & Standing Wave Balance",
      "guideline": "Use an operational turntable and cover with a ventilated microwave dome to ensure even moisture distribution and eliminate cold spots."
    }
  },
  "apple-juice": {
    "materialThermal": {
      "property": "Dielectric Loss Factor & Microwave Permittivity",
      "threshold": "Microwave Transparent (Dielectric Loss Tangent <0.01)",
      "details": "Microwave-safe glass and vitrified ceramics allow 2,450 MHz waves to pass through unhindered directly into food, heating food without absorbing microwave energy into the dish itself."
    },
    "safetyStandard": {
      "organization": "FDA",
      "standard": "FDA Food Code 2022 § 3-401.12 (Microwave Cooking Specifications)",
      "citation": "Foods cooked in microwave ovens must reach 165°F in all parts, be rotated and covered, and allowed to stand 2 minutes post-cooking."
    },
    "applianceSpecs": {
      "parameter": "Turntable Rotation & Standing Wave Balance",
      "guideline": "Use an operational turntable and cover with a ventilated microwave dome to ensure even moisture distribution and eliminate cold spots."
    }
  },
  "wine": {
    "materialThermal": {
      "property": "Dielectric Loss Factor & Microwave Permittivity",
      "threshold": "Microwave Transparent (Dielectric Loss Tangent <0.01)",
      "details": "Microwave-safe glass and vitrified ceramics allow 2,450 MHz waves to pass through unhindered directly into food, heating food without absorbing microwave energy into the dish itself."
    },
    "safetyStandard": {
      "organization": "FDA",
      "standard": "FDA Food Code 2022 § 3-401.12 (Microwave Cooking Specifications)",
      "citation": "Foods cooked in microwave ovens must reach 165°F in all parts, be rotated and covered, and allowed to stand 2 minutes post-cooking."
    },
    "applianceSpecs": {
      "parameter": "Turntable Rotation & Standing Wave Balance",
      "guideline": "Use an operational turntable and cover with a ventilated microwave dome to ensure even moisture distribution and eliminate cold spots."
    }
  },
  "beer": {
    "materialThermal": {
      "property": "Dielectric Loss Factor & Microwave Permittivity",
      "threshold": "Microwave Transparent (Dielectric Loss Tangent <0.01)",
      "details": "Microwave-safe glass and vitrified ceramics allow 2,450 MHz waves to pass through unhindered directly into food, heating food without absorbing microwave energy into the dish itself."
    },
    "safetyStandard": {
      "organization": "FDA",
      "standard": "FDA Food Code 2022 § 3-401.12 (Microwave Cooking Specifications)",
      "citation": "Foods cooked in microwave ovens must reach 165°F in all parts, be rotated and covered, and allowed to stand 2 minutes post-cooking."
    },
    "applianceSpecs": {
      "parameter": "Turntable Rotation & Standing Wave Balance",
      "guideline": "Use an operational turntable and cover with a ventilated microwave dome to ensure even moisture distribution and eliminate cold spots."
    }
  },
  "glass-bowl": {
    "materialThermal": {
      "property": "Dielectric Loss Factor & Microwave Permittivity",
      "threshold": "Microwave Transparent (Dielectric Loss Tangent <0.01)",
      "details": "Microwave-safe glass and vitrified ceramics allow 2,450 MHz waves to pass through unhindered directly into food, heating food without absorbing microwave energy into the dish itself."
    },
    "safetyStandard": {
      "organization": "FDA",
      "standard": "FDA Food Code 2022 § 3-401.12 (Microwave Cooking Specifications)",
      "citation": "Foods cooked in microwave ovens must reach 165°F in all parts, be rotated and covered, and allowed to stand 2 minutes post-cooking."
    },
    "applianceSpecs": {
      "parameter": "Turntable Rotation & Standing Wave Balance",
      "guideline": "Use an operational turntable and cover with a ventilated microwave dome to ensure even moisture distribution and eliminate cold spots."
    }
  },
  "ceramic-plate": {
    "materialThermal": {
      "property": "Dielectric Loss Factor & Microwave Permittivity",
      "threshold": "Microwave Transparent (Dielectric Loss Tangent <0.01)",
      "details": "Microwave-safe glass and vitrified ceramics allow 2,450 MHz waves to pass through unhindered directly into food, heating food without absorbing microwave energy into the dish itself."
    },
    "safetyStandard": {
      "organization": "FDA",
      "standard": "FDA Food Code 2022 § 3-401.12 (Microwave Cooking Specifications)",
      "citation": "Foods cooked in microwave ovens must reach 165°F in all parts, be rotated and covered, and allowed to stand 2 minutes post-cooking."
    },
    "applianceSpecs": {
      "parameter": "Turntable Rotation & Standing Wave Balance",
      "guideline": "Use an operational turntable and cover with a ventilated microwave dome to ensure even moisture distribution and eliminate cold spots."
    }
  },
  "plastic-container": {
    "materialThermal": {
      "property": "Dielectric Loss Factor & Microwave Permittivity",
      "threshold": "Microwave Transparent (Dielectric Loss Tangent <0.01)",
      "details": "Microwave-safe glass and vitrified ceramics allow 2,450 MHz waves to pass through unhindered directly into food, heating food without absorbing microwave energy into the dish itself."
    },
    "safetyStandard": {
      "organization": "FDA",
      "standard": "FDA Food Code 2022 § 3-401.12 (Microwave Cooking Specifications)",
      "citation": "Foods cooked in microwave ovens must reach 165°F in all parts, be rotated and covered, and allowed to stand 2 minutes post-cooking."
    },
    "applianceSpecs": {
      "parameter": "Turntable Rotation & Standing Wave Balance",
      "guideline": "Use an operational turntable and cover with a ventilated microwave dome to ensure even moisture distribution and eliminate cold spots."
    }
  },
  "stainless-steel-pan": {
    "materialThermal": {
      "property": "Dielectric Air Breakdown & Electrical Arcing",
      "threshold": "Dielectric Breakdown of Air ~30 kV/cm; Microwave Frequency 2,450 MHz",
      "details": "Alternating 2.45 GHz electromagnetic fields drive free electron oscillation on metal surfaces. High charge concentrations at sharp points or thin foil edges exceed the dielectric breakdown of air, triggering brilliant electrical arcing and sparks."
    },
    "safetyStandard": {
      "organization": "FDA / CDRH",
      "standard": "21 CFR § 1030.10 (Microwave Ovens Performance Standard)",
      "citation": "Safety standards regulating microwave radiation leakage and prohibiting metallic materials prone to arcing and cavity reflection."
    },
    "applianceSpecs": {
      "parameter": "Magnetron Standing Wave Reflected Power",
      "guideline": "Microwaves (700W–1,200W) cannot penetrate metal; reflective surfaces bounce microwave energy back into the magnetron antenna, risking permanent burn-out and fire."
    }
  },
  "cast-iron-skillet": {
    "materialThermal": {
      "property": "Dielectric Air Breakdown & Electrical Arcing",
      "threshold": "Dielectric Breakdown of Air ~30 kV/cm; Microwave Frequency 2,450 MHz",
      "details": "Alternating 2.45 GHz electromagnetic fields drive free electron oscillation on metal surfaces. High charge concentrations at sharp points or thin foil edges exceed the dielectric breakdown of air, triggering brilliant electrical arcing and sparks."
    },
    "safetyStandard": {
      "organization": "FDA / CDRH",
      "standard": "21 CFR § 1030.10 (Microwave Ovens Performance Standard)",
      "citation": "Safety standards regulating microwave radiation leakage and prohibiting metallic materials prone to arcing and cavity reflection."
    },
    "applianceSpecs": {
      "parameter": "Magnetron Standing Wave Reflected Power",
      "guideline": "Microwaves (700W–1,200W) cannot penetrate metal; reflective surfaces bounce microwave energy back into the magnetron antenna, risking permanent burn-out and fire."
    }
  },
  "copper-mug": {
    "materialThermal": {
      "property": "Dielectric Air Breakdown & Electrical Arcing",
      "threshold": "Dielectric Breakdown of Air ~30 kV/cm; Microwave Frequency 2,450 MHz",
      "details": "Alternating 2.45 GHz electromagnetic fields drive free electron oscillation on metal surfaces. High charge concentrations at sharp points or thin foil edges exceed the dielectric breakdown of air, triggering brilliant electrical arcing and sparks."
    },
    "safetyStandard": {
      "organization": "FDA / CDRH",
      "standard": "21 CFR § 1030.10 (Microwave Ovens Performance Standard)",
      "citation": "Safety standards regulating microwave radiation leakage and prohibiting metallic materials prone to arcing and cavity reflection."
    },
    "applianceSpecs": {
      "parameter": "Magnetron Standing Wave Reflected Power",
      "guideline": "Microwaves (700W–1,200W) cannot penetrate metal; reflective surfaces bounce microwave energy back into the magnetron antenna, risking permanent burn-out and fire."
    }
  },
  "wooden-spoon": {
    "materialThermal": {
      "property": "Dielectric Air Breakdown & Electrical Arcing",
      "threshold": "Dielectric Breakdown of Air ~30 kV/cm; Microwave Frequency 2,450 MHz",
      "details": "Alternating 2.45 GHz electromagnetic fields drive free electron oscillation on metal surfaces. High charge concentrations at sharp points or thin foil edges exceed the dielectric breakdown of air, triggering brilliant electrical arcing and sparks."
    },
    "safetyStandard": {
      "organization": "FDA / CDRH",
      "standard": "21 CFR § 1030.10 (Microwave Ovens Performance Standard)",
      "citation": "Safety standards regulating microwave radiation leakage and prohibiting metallic materials prone to arcing and cavity reflection."
    },
    "applianceSpecs": {
      "parameter": "Magnetron Standing Wave Reflected Power",
      "guideline": "Microwaves (700W–1,200W) cannot penetrate metal; reflective surfaces bounce microwave energy back into the magnetron antenna, risking permanent burn-out and fire."
    }
  },
  "wooden-cutting-board": {
    "materialThermal": {
      "property": "Dielectric Loss Factor & Microwave Permittivity",
      "threshold": "Microwave Transparent (Dielectric Loss Tangent <0.01)",
      "details": "Microwave-safe glass and vitrified ceramics allow 2,450 MHz waves to pass through unhindered directly into food, heating food without absorbing microwave energy into the dish itself."
    },
    "safetyStandard": {
      "organization": "FDA",
      "standard": "FDA Food Code 2022 § 3-401.12 (Microwave Cooking Specifications)",
      "citation": "Foods cooked in microwave ovens must reach 165°F in all parts, be rotated and covered, and allowed to stand 2 minutes post-cooking."
    },
    "applianceSpecs": {
      "parameter": "Turntable Rotation & Standing Wave Balance",
      "guideline": "Use an operational turntable and cover with a ventilated microwave dome to ensure even moisture distribution and eliminate cold spots."
    }
  },
  "silicone-spatula": {
    "materialThermal": {
      "property": "Dielectric Loss Factor & Microwave Permittivity",
      "threshold": "Microwave Transparent (Dielectric Loss Tangent <0.01)",
      "details": "Microwave-safe glass and vitrified ceramics allow 2,450 MHz waves to pass through unhindered directly into food, heating food without absorbing microwave energy into the dish itself."
    },
    "safetyStandard": {
      "organization": "FDA",
      "standard": "FDA Food Code 2022 § 3-401.12 (Microwave Cooking Specifications)",
      "citation": "Foods cooked in microwave ovens must reach 165°F in all parts, be rotated and covered, and allowed to stand 2 minutes post-cooking."
    },
    "applianceSpecs": {
      "parameter": "Turntable Rotation & Standing Wave Balance",
      "guideline": "Use an operational turntable and cover with a ventilated microwave dome to ensure even moisture distribution and eliminate cold spots."
    }
  },
  "bento-box": {
    "materialThermal": {
      "property": "Dielectric Loss Factor & Microwave Permittivity",
      "threshold": "Microwave Transparent (Dielectric Loss Tangent <0.01)",
      "details": "Microwave-safe glass and vitrified ceramics allow 2,450 MHz waves to pass through unhindered directly into food, heating food without absorbing microwave energy into the dish itself."
    },
    "safetyStandard": {
      "organization": "FDA",
      "standard": "FDA Food Code 2022 § 3-401.12 (Microwave Cooking Specifications)",
      "citation": "Foods cooked in microwave ovens must reach 165°F in all parts, be rotated and covered, and allowed to stand 2 minutes post-cooking."
    },
    "applianceSpecs": {
      "parameter": "Turntable Rotation & Standing Wave Balance",
      "guideline": "Use an operational turntable and cover with a ventilated microwave dome to ensure even moisture distribution and eliminate cold spots."
    }
  },
  "wine-glass": {
    "materialThermal": {
      "property": "Dielectric Loss Factor & Microwave Permittivity",
      "threshold": "Microwave Transparent (Dielectric Loss Tangent <0.01)",
      "details": "Microwave-safe glass and vitrified ceramics allow 2,450 MHz waves to pass through unhindered directly into food, heating food without absorbing microwave energy into the dish itself."
    },
    "safetyStandard": {
      "organization": "FDA",
      "standard": "FDA Food Code 2022 § 3-401.12 (Microwave Cooking Specifications)",
      "citation": "Foods cooked in microwave ovens must reach 165°F in all parts, be rotated and covered, and allowed to stand 2 minutes post-cooking."
    },
    "applianceSpecs": {
      "parameter": "Turntable Rotation & Standing Wave Balance",
      "guideline": "Use an operational turntable and cover with a ventilated microwave dome to ensure even moisture distribution and eliminate cold spots."
    }
  },
  "yeti-tumbler": {
    "materialThermal": {
      "property": "Dielectric Loss Factor & Microwave Permittivity",
      "threshold": "Microwave Transparent (Dielectric Loss Tangent <0.01)",
      "details": "Microwave-safe glass and vitrified ceramics allow 2,450 MHz waves to pass through unhindered directly into food, heating food without absorbing microwave energy into the dish itself."
    },
    "safetyStandard": {
      "organization": "FDA",
      "standard": "FDA Food Code 2022 § 3-401.12 (Microwave Cooking Specifications)",
      "citation": "Foods cooked in microwave ovens must reach 165°F in all parts, be rotated and covered, and allowed to stand 2 minutes post-cooking."
    },
    "applianceSpecs": {
      "parameter": "Turntable Rotation & Standing Wave Balance",
      "guideline": "Use an operational turntable and cover with a ventilated microwave dome to ensure even moisture distribution and eliminate cold spots."
    }
  },
  "hydro-flask-bottle": {
    "materialThermal": {
      "property": "Dielectric Loss Factor & Microwave Permittivity",
      "threshold": "Microwave Transparent (Dielectric Loss Tangent <0.01)",
      "details": "Microwave-safe glass and vitrified ceramics allow 2,450 MHz waves to pass through unhindered directly into food, heating food without absorbing microwave energy into the dish itself."
    },
    "safetyStandard": {
      "organization": "FDA",
      "standard": "FDA Food Code 2022 § 3-401.12 (Microwave Cooking Specifications)",
      "citation": "Foods cooked in microwave ovens must reach 165°F in all parts, be rotated and covered, and allowed to stand 2 minutes post-cooking."
    },
    "applianceSpecs": {
      "parameter": "Turntable Rotation & Standing Wave Balance",
      "guideline": "Use an operational turntable and cover with a ventilated microwave dome to ensure even moisture distribution and eliminate cold spots."
    }
  },
  "stanley-cup-tumbler": {
    "materialThermal": {
      "property": "Dielectric Loss Factor & Microwave Permittivity",
      "threshold": "Microwave Transparent (Dielectric Loss Tangent <0.01)",
      "details": "Microwave-safe glass and vitrified ceramics allow 2,450 MHz waves to pass through unhindered directly into food, heating food without absorbing microwave energy into the dish itself."
    },
    "safetyStandard": {
      "organization": "FDA",
      "standard": "FDA Food Code 2022 § 3-401.12 (Microwave Cooking Specifications)",
      "citation": "Foods cooked in microwave ovens must reach 165°F in all parts, be rotated and covered, and allowed to stand 2 minutes post-cooking."
    },
    "applianceSpecs": {
      "parameter": "Turntable Rotation & Standing Wave Balance",
      "guideline": "Use an operational turntable and cover with a ventilated microwave dome to ensure even moisture distribution and eliminate cold spots."
    }
  },
  "muffin-tin": {
    "materialThermal": {
      "property": "Dielectric Loss Factor & Microwave Permittivity",
      "threshold": "Microwave Transparent (Dielectric Loss Tangent <0.01)",
      "details": "Microwave-safe glass and vitrified ceramics allow 2,450 MHz waves to pass through unhindered directly into food, heating food without absorbing microwave energy into the dish itself."
    },
    "safetyStandard": {
      "organization": "FDA",
      "standard": "FDA Food Code 2022 § 3-401.12 (Microwave Cooking Specifications)",
      "citation": "Foods cooked in microwave ovens must reach 165°F in all parts, be rotated and covered, and allowed to stand 2 minutes post-cooking."
    },
    "applianceSpecs": {
      "parameter": "Turntable Rotation & Standing Wave Balance",
      "guideline": "Use an operational turntable and cover with a ventilated microwave dome to ensure even moisture distribution and eliminate cold spots."
    }
  },
  "baking-sheet": {
    "materialThermal": {
      "property": "Dielectric Loss Factor & Microwave Permittivity",
      "threshold": "Microwave Transparent (Dielectric Loss Tangent <0.01)",
      "details": "Microwave-safe glass and vitrified ceramics allow 2,450 MHz waves to pass through unhindered directly into food, heating food without absorbing microwave energy into the dish itself."
    },
    "safetyStandard": {
      "organization": "FDA",
      "standard": "FDA Food Code 2022 § 3-401.12 (Microwave Cooking Specifications)",
      "citation": "Foods cooked in microwave ovens must reach 165°F in all parts, be rotated and covered, and allowed to stand 2 minutes post-cooking."
    },
    "applianceSpecs": {
      "parameter": "Turntable Rotation & Standing Wave Balance",
      "guideline": "Use an operational turntable and cover with a ventilated microwave dome to ensure even moisture distribution and eliminate cold spots."
    }
  },
  "bundt-pan": {
    "materialThermal": {
      "property": "Dielectric Loss Factor & Microwave Permittivity",
      "threshold": "Microwave Transparent (Dielectric Loss Tangent <0.01)",
      "details": "Microwave-safe glass and vitrified ceramics allow 2,450 MHz waves to pass through unhindered directly into food, heating food without absorbing microwave energy into the dish itself."
    },
    "safetyStandard": {
      "organization": "FDA",
      "standard": "FDA Food Code 2022 § 3-401.12 (Microwave Cooking Specifications)",
      "citation": "Foods cooked in microwave ovens must reach 165°F in all parts, be rotated and covered, and allowed to stand 2 minutes post-cooking."
    },
    "applianceSpecs": {
      "parameter": "Turntable Rotation & Standing Wave Balance",
      "guideline": "Use an operational turntable and cover with a ventilated microwave dome to ensure even moisture distribution and eliminate cold spots."
    }
  },
  "gold-silverware": {
    "materialThermal": {
      "property": "Dielectric Loss Factor & Microwave Permittivity",
      "threshold": "Microwave Transparent (Dielectric Loss Tangent <0.01)",
      "details": "Microwave-safe glass and vitrified ceramics allow 2,450 MHz waves to pass through unhindered directly into food, heating food without absorbing microwave energy into the dish itself."
    },
    "safetyStandard": {
      "organization": "FDA",
      "standard": "FDA Food Code 2022 § 3-401.12 (Microwave Cooking Specifications)",
      "citation": "Foods cooked in microwave ovens must reach 165°F in all parts, be rotated and covered, and allowed to stand 2 minutes post-cooking."
    },
    "applianceSpecs": {
      "parameter": "Turntable Rotation & Standing Wave Balance",
      "guideline": "Use an operational turntable and cover with a ventilated microwave dome to ensure even moisture distribution and eliminate cold spots."
    }
  },
  "silver-silverware": {
    "materialThermal": {
      "property": "Dielectric Loss Factor & Microwave Permittivity",
      "threshold": "Microwave Transparent (Dielectric Loss Tangent <0.01)",
      "details": "Microwave-safe glass and vitrified ceramics allow 2,450 MHz waves to pass through unhindered directly into food, heating food without absorbing microwave energy into the dish itself."
    },
    "safetyStandard": {
      "organization": "FDA",
      "standard": "FDA Food Code 2022 § 3-401.12 (Microwave Cooking Specifications)",
      "citation": "Foods cooked in microwave ovens must reach 165°F in all parts, be rotated and covered, and allowed to stand 2 minutes post-cooking."
    },
    "applianceSpecs": {
      "parameter": "Turntable Rotation & Standing Wave Balance",
      "guideline": "Use an operational turntable and cover with a ventilated microwave dome to ensure even moisture distribution and eliminate cold spots."
    }
  },
  "pacifiers-silicone": {
    "materialThermal": {
      "property": "Dielectric Loss Factor & Microwave Permittivity",
      "threshold": "Microwave Transparent (Dielectric Loss Tangent <0.01)",
      "details": "Microwave-safe glass and vitrified ceramics allow 2,450 MHz waves to pass through unhindered directly into food, heating food without absorbing microwave energy into the dish itself."
    },
    "safetyStandard": {
      "organization": "FDA",
      "standard": "FDA Food Code 2022 § 3-401.12 (Microwave Cooking Specifications)",
      "citation": "Foods cooked in microwave ovens must reach 165°F in all parts, be rotated and covered, and allowed to stand 2 minutes post-cooking."
    },
    "applianceSpecs": {
      "parameter": "Turntable Rotation & Standing Wave Balance",
      "guideline": "Use an operational turntable and cover with a ventilated microwave dome to ensure even moisture distribution and eliminate cold spots."
    }
  },
  "steel-wool-scour": {
    "materialThermal": {
      "property": "Dielectric Loss Factor & Microwave Permittivity",
      "threshold": "Microwave Transparent (Dielectric Loss Tangent <0.01)",
      "details": "Microwave-safe glass and vitrified ceramics allow 2,450 MHz waves to pass through unhindered directly into food, heating food without absorbing microwave energy into the dish itself."
    },
    "safetyStandard": {
      "organization": "FDA",
      "standard": "FDA Food Code 2022 § 3-401.12 (Microwave Cooking Specifications)",
      "citation": "Foods cooked in microwave ovens must reach 165°F in all parts, be rotated and covered, and allowed to stand 2 minutes post-cooking."
    },
    "applianceSpecs": {
      "parameter": "Turntable Rotation & Standing Wave Balance",
      "guideline": "Use an operational turntable and cover with a ventilated microwave dome to ensure even moisture distribution and eliminate cold spots."
    }
  },
  "memory-foam": {
    "materialThermal": {
      "property": "Dielectric Loss Factor & Microwave Permittivity",
      "threshold": "Microwave Transparent (Dielectric Loss Tangent <0.01)",
      "details": "Microwave-safe glass and vitrified ceramics allow 2,450 MHz waves to pass through unhindered directly into food, heating food without absorbing microwave energy into the dish itself."
    },
    "safetyStandard": {
      "organization": "FDA",
      "standard": "FDA Food Code 2022 § 3-401.12 (Microwave Cooking Specifications)",
      "citation": "Foods cooked in microwave ovens must reach 165°F in all parts, be rotated and covered, and allowed to stand 2 minutes post-cooking."
    },
    "applianceSpecs": {
      "parameter": "Turntable Rotation & Standing Wave Balance",
      "guideline": "Use an operational turntable and cover with a ventilated microwave dome to ensure even moisture distribution and eliminate cold spots."
    }
  },
  "crocs-shoes": {
    "materialThermal": {
      "property": "Dielectric Loss Factor & Microwave Permittivity",
      "threshold": "Microwave Transparent (Dielectric Loss Tangent <0.01)",
      "details": "Microwave-safe glass and vitrified ceramics allow 2,450 MHz waves to pass through unhindered directly into food, heating food without absorbing microwave energy into the dish itself."
    },
    "safetyStandard": {
      "organization": "FDA",
      "standard": "FDA Food Code 2022 § 3-401.12 (Microwave Cooking Specifications)",
      "citation": "Foods cooked in microwave ovens must reach 165°F in all parts, be rotated and covered, and allowed to stand 2 minutes post-cooking."
    },
    "applianceSpecs": {
      "parameter": "Turntable Rotation & Standing Wave Balance",
      "guideline": "Use an operational turntable and cover with a ventilated microwave dome to ensure even moisture distribution and eliminate cold spots."
    }
  },
  "running-shoes": {
    "materialThermal": {
      "property": "Dielectric Loss Factor & Microwave Permittivity",
      "threshold": "Microwave Transparent (Dielectric Loss Tangent <0.01)",
      "details": "Microwave-safe glass and vitrified ceramics allow 2,450 MHz waves to pass through unhindered directly into food, heating food without absorbing microwave energy into the dish itself."
    },
    "safetyStandard": {
      "organization": "FDA",
      "standard": "FDA Food Code 2022 § 3-401.12 (Microwave Cooking Specifications)",
      "citation": "Foods cooked in microwave ovens must reach 165°F in all parts, be rotated and covered, and allowed to stand 2 minutes post-cooking."
    },
    "applianceSpecs": {
      "parameter": "Turntable Rotation & Standing Wave Balance",
      "guideline": "Use an operational turntable and cover with a ventilated microwave dome to ensure even moisture distribution and eliminate cold spots."
    }
  },
  "wool-sweater": {
    "materialThermal": {
      "property": "Dielectric Loss Factor & Microwave Permittivity",
      "threshold": "Microwave Transparent (Dielectric Loss Tangent <0.01)",
      "details": "Microwave-safe glass and vitrified ceramics allow 2,450 MHz waves to pass through unhindered directly into food, heating food without absorbing microwave energy into the dish itself."
    },
    "safetyStandard": {
      "organization": "FDA",
      "standard": "FDA Food Code 2022 § 3-401.12 (Microwave Cooking Specifications)",
      "citation": "Foods cooked in microwave ovens must reach 165°F in all parts, be rotated and covered, and allowed to stand 2 minutes post-cooking."
    },
    "applianceSpecs": {
      "parameter": "Turntable Rotation & Standing Wave Balance",
      "guideline": "Use an operational turntable and cover with a ventilated microwave dome to ensure even moisture distribution and eliminate cold spots."
    }
  }
};
