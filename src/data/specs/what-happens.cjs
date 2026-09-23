// Technical Reference Specifications for What-Happens items
// Grounded strictly in FDA, USDA FSIS, CPSC, NFPA, and engineering failure physics.

module.exports = {
  "microwave-aluminum-foil": {
    "materialThermal": {
      "property": "Dielectric Air Breakdown & High-Voltage Electric Discharge",
      "threshold": "Air Breakdown Potential ~30 kV/cm; Microwave Frequency 2,450 MHz",
      "details": "Radio-frequency oscillating fields induce massive surface currents across thin metal and pointed edges, ionising ambient air into brilliant plasma sparks and melting plastic cavity liners."
    },
    "safetyStandard": {
      "organization": "FDA / CDRH",
      "standard": "21 CFR § 1030.10",
      "citation": "Microwave radiation performance regulations and arcing fire hazard warnings."
    },
    "applianceSpecs": {
      "parameter": "Cavity Waveguide Arc Hazard",
      "guideline": "Arcing can puncture the mica wave-guide cover and ignite adjacent interior plastic components in seconds."
    }
  },
  "microwave-nothing": {
    "materialThermal": {
      "property": "Reflected RF Energy Absorption & Magnetron Overheating",
      "threshold": "Cavity Thermal Buildup: Magnetron Anode Temperature >392°F (200°C)",
      "details": "Without water or food molecules to absorb 2,450 MHz microwave energy, 100% of RF power reflects back into the magnetron antenna, creating extreme electrical standing waves and burning out internal diodes."
    },
    "safetyStandard": {
      "organization": "FDA / CDRH",
      "standard": "21 CFR § 1030.10 / UL 923",
      "citation": "Microwave oven construction standards mandating cautionary operating warnings against empty cavity operation."
    },
    "applianceSpecs": {
      "parameter": "Magnetron Cathode Antenna Reflected Load",
      "guideline": "Running empty for even 60 seconds overheats the cavity magnetron, permanently damaging internal wave-guide seals and voiding warranty."
    }
  },
  "microwave-egg-in-shell": {
    "materialThermal": {
      "property": "Volumetric Vapor Pressure Rupture & Superheating",
      "threshold": "Steam Expansion Ratio 1,600:1; Superheated Liquid >212°F (100°C)",
      "details": "Trapped water inside shells or superheated liquid without nucleation sites rapidly accumulates hydraulic pressure, erupting in violent shockwaves."
    },
    "safetyStandard": {
      "organization": "FDA / CFSAN",
      "standard": "CFSAN Consumer Advisory on Superheated Liquids & Egg Hazards",
      "citation": "Advisory on severe facial scalding and traumatic burns caused by exploding microwaved eggs and superheated water."
    },
    "applianceSpecs": {
      "parameter": "2,450 MHz Microwave Dielectric Penetration",
      "guideline": "Instantaneous steam generation within closed boundaries causes explosive ruptures inside the oven or upon fork contact outside."
    }
  },
  "microwave-metal-spoon": {
    "materialThermal": {
      "property": "Dielectric Air Breakdown & High-Voltage Electric Discharge",
      "threshold": "Air Breakdown Potential ~30 kV/cm; Microwave Frequency 2,450 MHz",
      "details": "Radio-frequency oscillating fields induce massive surface currents across thin metal and pointed edges, ionising ambient air into brilliant plasma sparks and melting plastic cavity liners."
    },
    "safetyStandard": {
      "organization": "FDA / CDRH",
      "standard": "21 CFR § 1030.10",
      "citation": "Microwave radiation performance regulations and arcing fire hazard warnings."
    },
    "applianceSpecs": {
      "parameter": "Cavity Waveguide Arc Hazard",
      "guideline": "Arcing can puncture the mica wave-guide cover and ignite adjacent interior plastic components in seconds."
    }
  },
  "microwave-styrofoam": {
    "materialThermal": {
      "property": "Kitchen Appliance Physical Interaction Limit",
      "threshold": "Operational Safety Envelope; Exceeding Threshold Triggers Appliance/Material Failure",
      "details": "Operating appliances outside material compatibility limits triggers thermal shock, physical deformation, chemical leaching, or fire hazards."
    },
    "safetyStandard": {
      "organization": "FDA / CPSC",
      "standard": "CPSC Home Kitchen Safety Standards / FDA Food Code",
      "citation": "Guidelines on preventing kitchen appliance accidents, fire hazards, and foodborne illness outbreaks."
    },
    "applianceSpecs": {
      "parameter": "Appliance Engineering Operating Envelope",
      "guideline": "Always verify manufacturer appliance instructions and material compatibility before exposure to extreme heating, cooling, or washing cycles."
    }
  },
  "microwave-grapes": {
    "materialThermal": {
      "property": "Volumetric Vapor Pressure Rupture & Superheating",
      "threshold": "Steam Expansion Ratio 1,600:1; Superheated Liquid >212°F (100°C)",
      "details": "Trapped water inside shells or superheated liquid without nucleation sites rapidly accumulates hydraulic pressure, erupting in violent shockwaves."
    },
    "safetyStandard": {
      "organization": "FDA / CFSAN",
      "standard": "CFSAN Consumer Advisory on Superheated Liquids & Egg Hazards",
      "citation": "Advisory on severe facial scalding and traumatic burns caused by exploding microwaved eggs and superheated water."
    },
    "applianceSpecs": {
      "parameter": "2,450 MHz Microwave Dielectric Penetration",
      "guideline": "Instantaneous steam generation within closed boundaries causes explosive ruptures inside the oven or upon fork contact outside."
    }
  },
  "microwave-water-too-long": {
    "materialThermal": {
      "property": "Volumetric Vapor Pressure Rupture & Superheating",
      "threshold": "Steam Expansion Ratio 1,600:1; Superheated Liquid >212°F (100°C)",
      "details": "Trapped water inside shells or superheated liquid without nucleation sites rapidly accumulates hydraulic pressure, erupting in violent shockwaves."
    },
    "safetyStandard": {
      "organization": "FDA / CFSAN",
      "standard": "CFSAN Consumer Advisory on Superheated Liquids & Egg Hazards",
      "citation": "Advisory on severe facial scalding and traumatic burns caused by exploding microwaved eggs and superheated water."
    },
    "applianceSpecs": {
      "parameter": "2,450 MHz Microwave Dielectric Penetration",
      "guideline": "Instantaneous steam generation within closed boundaries causes explosive ruptures inside the oven or upon fork contact outside."
    }
  },
  "microwave-cd": {
    "materialThermal": {
      "property": "Dielectric Air Breakdown & High-Voltage Electric Discharge",
      "threshold": "Air Breakdown Potential ~30 kV/cm; Microwave Frequency 2,450 MHz",
      "details": "Radio-frequency oscillating fields induce massive surface currents across thin metal and pointed edges, ionising ambient air into brilliant plasma sparks and melting plastic cavity liners."
    },
    "safetyStandard": {
      "organization": "FDA / CDRH",
      "standard": "21 CFR § 1030.10",
      "citation": "Microwave radiation performance regulations and arcing fire hazard warnings."
    },
    "applianceSpecs": {
      "parameter": "Cavity Waveguide Arc Hazard",
      "guideline": "Arcing can puncture the mica wave-guide cover and ignite adjacent interior plastic components in seconds."
    }
  },
  "microwave-soap": {
    "materialThermal": {
      "property": "Volumetric Vapor Pressure Rupture & Superheating",
      "threshold": "Steam Expansion Ratio 1,600:1; Superheated Liquid >212°F (100°C)",
      "details": "Trapped water inside shells or superheated liquid without nucleation sites rapidly accumulates hydraulic pressure, erupting in violent shockwaves."
    },
    "safetyStandard": {
      "organization": "FDA / CFSAN",
      "standard": "CFSAN Consumer Advisory on Superheated Liquids & Egg Hazards",
      "citation": "Advisory on severe facial scalding and traumatic burns caused by exploding microwaved eggs and superheated water."
    },
    "applianceSpecs": {
      "parameter": "2,450 MHz Microwave Dielectric Penetration",
      "guideline": "Instantaneous steam generation within closed boundaries causes explosive ruptures inside the oven or upon fork contact outside."
    }
  },
  "microwave-plastic-bag": {
    "materialThermal": {
      "property": "Kitchen Appliance Physical Interaction Limit",
      "threshold": "Operational Safety Envelope; Exceeding Threshold Triggers Appliance/Material Failure",
      "details": "Operating appliances outside material compatibility limits triggers thermal shock, physical deformation, chemical leaching, or fire hazards."
    },
    "safetyStandard": {
      "organization": "FDA / CPSC",
      "standard": "CPSC Home Kitchen Safety Standards / FDA Food Code",
      "citation": "Guidelines on preventing kitchen appliance accidents, fire hazards, and foodborne illness outbreaks."
    },
    "applianceSpecs": {
      "parameter": "Appliance Engineering Operating Envelope",
      "guideline": "Always verify manufacturer appliance instructions and material compatibility before exposure to extreme heating, cooling, or washing cycles."
    }
  },
  "put-soap-in-dishwasher": {
    "materialThermal": {
      "property": "Anionic Surfactant Foam Hydrodynamics & Seal Failure",
      "threshold": "Sud Volume Expansion >50x Chamber Capacity; Impeller Cavitation",
      "details": "Liquid hand dish soap contains high-foaming anionic surfactants (SLS). The high-velocity wash spray whips soap into an uncontrollable wall of dense suds that breaches door gaskets and floods the kitchen floor."
    },
    "safetyStandard": {
      "organization": "AHAM / CPSC",
      "standard": "Association of Home Appliance Manufacturers (AHAM) DW-1 Guidelines",
      "citation": "Dishwashers require specialized low-foaming, non-ionic detergents; high-sudsing soaps cause pump motor burnout and water damage."
    },
    "applianceSpecs": {
      "parameter": "Circulation Pump Motor Overload",
      "guideline": "Suds trap air in the circulation pump impeller, causing cavitation, loss of water pressure, motor overheating, and basement water leaks."
    }
  },
  "put-too-much-detergent": {
    "materialThermal": {
      "property": "Kitchen Appliance Physical Interaction Limit",
      "threshold": "Operational Safety Envelope; Exceeding Threshold Triggers Appliance/Material Failure",
      "details": "Operating appliances outside material compatibility limits triggers thermal shock, physical deformation, chemical leaching, or fire hazards."
    },
    "safetyStandard": {
      "organization": "FDA / CPSC",
      "standard": "CPSC Home Kitchen Safety Standards / FDA Food Code",
      "citation": "Guidelines on preventing kitchen appliance accidents, fire hazards, and foodborne illness outbreaks."
    },
    "applianceSpecs": {
      "parameter": "Appliance Engineering Operating Envelope",
      "guideline": "Always verify manufacturer appliance instructions and material compatibility before exposure to extreme heating, cooling, or washing cycles."
    }
  },
  "run-dishwasher-without-detergent": {
    "materialThermal": {
      "property": "Anionic Surfactant Foam Hydrodynamics & Seal Failure",
      "threshold": "Sud Volume Expansion >50x Chamber Capacity; Impeller Cavitation",
      "details": "Liquid hand dish soap contains high-foaming anionic surfactants (SLS). The high-velocity wash spray whips soap into an uncontrollable wall of dense suds that breaches door gaskets and floods the kitchen floor."
    },
    "safetyStandard": {
      "organization": "AHAM / CPSC",
      "standard": "Association of Home Appliance Manufacturers (AHAM) DW-1 Guidelines",
      "citation": "Dishwashers require specialized low-foaming, non-ionic detergents; high-sudsing soaps cause pump motor burnout and water damage."
    },
    "applianceSpecs": {
      "parameter": "Circulation Pump Motor Overload",
      "guideline": "Suds trap air in the circulation pump impeller, causing cavitation, loss of water pressure, motor overheating, and basement water leaks."
    }
  },
  "put-cast-iron-in-dishwasher": {
    "materialThermal": {
      "property": "Kitchen Appliance Physical Interaction Limit",
      "threshold": "Operational Safety Envelope; Exceeding Threshold Triggers Appliance/Material Failure",
      "details": "Operating appliances outside material compatibility limits triggers thermal shock, physical deformation, chemical leaching, or fire hazards."
    },
    "safetyStandard": {
      "organization": "FDA / CPSC",
      "standard": "CPSC Home Kitchen Safety Standards / FDA Food Code",
      "citation": "Guidelines on preventing kitchen appliance accidents, fire hazards, and foodborne illness outbreaks."
    },
    "applianceSpecs": {
      "parameter": "Appliance Engineering Operating Envelope",
      "guideline": "Always verify manufacturer appliance instructions and material compatibility before exposure to extreme heating, cooling, or washing cycles."
    }
  },
  "put-wooden-spoon-in-dishwasher": {
    "materialThermal": {
      "property": "Kitchen Appliance Physical Interaction Limit",
      "threshold": "Operational Safety Envelope; Exceeding Threshold Triggers Appliance/Material Failure",
      "details": "Operating appliances outside material compatibility limits triggers thermal shock, physical deformation, chemical leaching, or fire hazards."
    },
    "safetyStandard": {
      "organization": "FDA / CPSC",
      "standard": "CPSC Home Kitchen Safety Standards / FDA Food Code",
      "citation": "Guidelines on preventing kitchen appliance accidents, fire hazards, and foodborne illness outbreaks."
    },
    "applianceSpecs": {
      "parameter": "Appliance Engineering Operating Envelope",
      "guideline": "Always verify manufacturer appliance instructions and material compatibility before exposure to extreme heating, cooling, or washing cycles."
    }
  },
  "put-crystal-in-dishwasher": {
    "materialThermal": {
      "property": "Kitchen Appliance Physical Interaction Limit",
      "threshold": "Operational Safety Envelope; Exceeding Threshold Triggers Appliance/Material Failure",
      "details": "Operating appliances outside material compatibility limits triggers thermal shock, physical deformation, chemical leaching, or fire hazards."
    },
    "safetyStandard": {
      "organization": "FDA / CPSC",
      "standard": "CPSC Home Kitchen Safety Standards / FDA Food Code",
      "citation": "Guidelines on preventing kitchen appliance accidents, fire hazards, and foodborne illness outbreaks."
    },
    "applianceSpecs": {
      "parameter": "Appliance Engineering Operating Envelope",
      "guideline": "Always verify manufacturer appliance instructions and material compatibility before exposure to extreme heating, cooling, or washing cycles."
    }
  },
  "refreeze-thawed-chicken": {
    "materialThermal": {
      "property": "Kitchen Appliance Physical Interaction Limit",
      "threshold": "Operational Safety Envelope; Exceeding Threshold Triggers Appliance/Material Failure",
      "details": "Operating appliances outside material compatibility limits triggers thermal shock, physical deformation, chemical leaching, or fire hazards."
    },
    "safetyStandard": {
      "organization": "FDA / CPSC",
      "standard": "CPSC Home Kitchen Safety Standards / FDA Food Code",
      "citation": "Guidelines on preventing kitchen appliance accidents, fire hazards, and foodborne illness outbreaks."
    },
    "applianceSpecs": {
      "parameter": "Appliance Engineering Operating Envelope",
      "guideline": "Always verify manufacturer appliance instructions and material compatibility before exposure to extreme heating, cooling, or washing cycles."
    }
  },
  "freeze-canned-food": {
    "materialThermal": {
      "property": "Phase Transition Hexagonal Ice Expansion",
      "threshold": "Volumetric Expansion +9.05% at 32°F (0°C); Hydraulic Burst Pressure >50 PSI",
      "details": "Water crystal structure expands by 9% upon solidifying. In sealed rigid containers (metal cans, glass bottles), trapped pressure breaches hermetic seals, exposing food to air and spraying glass shards."
    },
    "safetyStandard": {
      "organization": "USDA FSIS / FDA",
      "standard": "FSIS Guidelines on Freezing Canned Foods",
      "citation": "Canned food with broken seams from freezing must be discarded due to contamination and risk of botulism upon thawing."
    },
    "applianceSpecs": {
      "parameter": "Sub-Zero Pressure Vessel Failure",
      "guideline": "Deep freezer temperatures (0°F) solidify liquids within 90 minutes, leading to shattered bottles and contaminated freezer compartments."
    }
  },
  "freeze-eggs-in-shell": {
    "materialThermal": {
      "property": "Kitchen Appliance Physical Interaction Limit",
      "threshold": "Operational Safety Envelope; Exceeding Threshold Triggers Appliance/Material Failure",
      "details": "Operating appliances outside material compatibility limits triggers thermal shock, physical deformation, chemical leaching, or fire hazards."
    },
    "safetyStandard": {
      "organization": "FDA / CPSC",
      "standard": "CPSC Home Kitchen Safety Standards / FDA Food Code",
      "citation": "Guidelines on preventing kitchen appliance accidents, fire hazards, and foodborne illness outbreaks."
    },
    "applianceSpecs": {
      "parameter": "Appliance Engineering Operating Envelope",
      "guideline": "Always verify manufacturer appliance instructions and material compatibility before exposure to extreme heating, cooling, or washing cycles."
    }
  },
  "freeze-carbonated-drinks": {
    "materialThermal": {
      "property": "Phase Transition Hexagonal Ice Expansion",
      "threshold": "Volumetric Expansion +9.05% at 32°F (0°C); Hydraulic Burst Pressure >50 PSI",
      "details": "Water crystal structure expands by 9% upon solidifying. In sealed rigid containers (metal cans, glass bottles), trapped pressure breaches hermetic seals, exposing food to air and spraying glass shards."
    },
    "safetyStandard": {
      "organization": "USDA FSIS / FDA",
      "standard": "FSIS Guidelines on Freezing Canned Foods",
      "citation": "Canned food with broken seams from freezing must be discarded due to contamination and risk of botulism upon thawing."
    },
    "applianceSpecs": {
      "parameter": "Sub-Zero Pressure Vessel Failure",
      "guideline": "Deep freezer temperatures (0°F) solidify liquids within 90 minutes, leading to shattered bottles and contaminated freezer compartments."
    }
  },
  "freeze-full-wine-bottle": {
    "materialThermal": {
      "property": "Phase Transition Hexagonal Ice Expansion",
      "threshold": "Volumetric Expansion +9.05% at 32°F (0°C); Hydraulic Burst Pressure >50 PSI",
      "details": "Water crystal structure expands by 9% upon solidifying. In sealed rigid containers (metal cans, glass bottles), trapped pressure breaches hermetic seals, exposing food to air and spraying glass shards."
    },
    "safetyStandard": {
      "organization": "USDA FSIS / FDA",
      "standard": "FSIS Guidelines on Freezing Canned Foods",
      "citation": "Canned food with broken seams from freezing must be discarded due to contamination and risk of botulism upon thawing."
    },
    "applianceSpecs": {
      "parameter": "Sub-Zero Pressure Vessel Failure",
      "guideline": "Deep freezer temperatures (0°F) solidify liquids within 90 minutes, leading to shattered bottles and contaminated freezer compartments."
    }
  },
  "freeze-mayonnaise": {
    "materialThermal": {
      "property": "Kitchen Appliance Physical Interaction Limit",
      "threshold": "Operational Safety Envelope; Exceeding Threshold Triggers Appliance/Material Failure",
      "details": "Operating appliances outside material compatibility limits triggers thermal shock, physical deformation, chemical leaching, or fire hazards."
    },
    "safetyStandard": {
      "organization": "FDA / CPSC",
      "standard": "CPSC Home Kitchen Safety Standards / FDA Food Code",
      "citation": "Guidelines on preventing kitchen appliance accidents, fire hazards, and foodborne illness outbreaks."
    },
    "applianceSpecs": {
      "parameter": "Appliance Engineering Operating Envelope",
      "guideline": "Always verify manufacturer appliance instructions and material compatibility before exposure to extreme heating, cooling, or washing cycles."
    }
  },
  "leave-freezer-door-open": {
    "materialThermal": {
      "property": "Kitchen Appliance Physical Interaction Limit",
      "threshold": "Operational Safety Envelope; Exceeding Threshold Triggers Appliance/Material Failure",
      "details": "Operating appliances outside material compatibility limits triggers thermal shock, physical deformation, chemical leaching, or fire hazards."
    },
    "safetyStandard": {
      "organization": "FDA / CPSC",
      "standard": "CPSC Home Kitchen Safety Standards / FDA Food Code",
      "citation": "Guidelines on preventing kitchen appliance accidents, fire hazards, and foodborne illness outbreaks."
    },
    "applianceSpecs": {
      "parameter": "Appliance Engineering Operating Envelope",
      "guideline": "Always verify manufacturer appliance instructions and material compatibility before exposure to extreme heating, cooling, or washing cycles."
    }
  },
  "freeze-hot-food": {
    "materialThermal": {
      "property": "Kitchen Appliance Physical Interaction Limit",
      "threshold": "Operational Safety Envelope; Exceeding Threshold Triggers Appliance/Material Failure",
      "details": "Operating appliances outside material compatibility limits triggers thermal shock, physical deformation, chemical leaching, or fire hazards."
    },
    "safetyStandard": {
      "organization": "FDA / CPSC",
      "standard": "CPSC Home Kitchen Safety Standards / FDA Food Code",
      "citation": "Guidelines on preventing kitchen appliance accidents, fire hazards, and foodborne illness outbreaks."
    },
    "applianceSpecs": {
      "parameter": "Appliance Engineering Operating Envelope",
      "guideline": "Always verify manufacturer appliance instructions and material compatibility before exposure to extreme heating, cooling, or washing cycles."
    }
  },
  "put-plastic-in-oven": {
    "materialThermal": {
      "property": "Polymer Thermal Decomposition & Toxic Fume Off-Gassing",
      "threshold": "Polyolefin Melting 220°F–320°F (105°C–160°C); Decomposition >390°F",
      "details": "Standard thermoplastics liquefy on hot oven racks, releasing hazardous plasticizer vapors, dripping onto electric elements, and creating an intense chemical fire hazard."
    },
    "safetyStandard": {
      "organization": "FDA / NFPA",
      "standard": "21 CFR § 177.1520 / NFPA 96",
      "citation": "Strictly forbids high-heat exposure of non-oven-grade plastics in domestic ovens."
    },
    "applianceSpecs": {
      "parameter": "Radiant Electric Element Contamination",
      "guideline": "Molten plastic bonds to porcelain oven walls and electric elements (>1,000°F), releasing acrid smoke that ruins food and requires aggressive cleaning."
    }
  },
  "put-cardboard-in-oven": {
    "materialThermal": {
      "property": "Kitchen Appliance Physical Interaction Limit",
      "threshold": "Operational Safety Envelope; Exceeding Threshold Triggers Appliance/Material Failure",
      "details": "Operating appliances outside material compatibility limits triggers thermal shock, physical deformation, chemical leaching, or fire hazards."
    },
    "safetyStandard": {
      "organization": "FDA / CPSC",
      "standard": "CPSC Home Kitchen Safety Standards / FDA Food Code",
      "citation": "Guidelines on preventing kitchen appliance accidents, fire hazards, and foodborne illness outbreaks."
    },
    "applianceSpecs": {
      "parameter": "Appliance Engineering Operating Envelope",
      "guideline": "Always verify manufacturer appliance instructions and material compatibility before exposure to extreme heating, cooling, or washing cycles."
    }
  },
  "put-wax-paper-in-oven": {
    "materialThermal": {
      "property": "Kitchen Appliance Physical Interaction Limit",
      "threshold": "Operational Safety Envelope; Exceeding Threshold Triggers Appliance/Material Failure",
      "details": "Operating appliances outside material compatibility limits triggers thermal shock, physical deformation, chemical leaching, or fire hazards."
    },
    "safetyStandard": {
      "organization": "FDA / CPSC",
      "standard": "CPSC Home Kitchen Safety Standards / FDA Food Code",
      "citation": "Guidelines on preventing kitchen appliance accidents, fire hazards, and foodborne illness outbreaks."
    },
    "applianceSpecs": {
      "parameter": "Appliance Engineering Operating Envelope",
      "guideline": "Always verify manufacturer appliance instructions and material compatibility before exposure to extreme heating, cooling, or washing cycles."
    }
  },
  "put-paper-bag-in-oven": {
    "materialThermal": {
      "property": "Kitchen Appliance Physical Interaction Limit",
      "threshold": "Operational Safety Envelope; Exceeding Threshold Triggers Appliance/Material Failure",
      "details": "Operating appliances outside material compatibility limits triggers thermal shock, physical deformation, chemical leaching, or fire hazards."
    },
    "safetyStandard": {
      "organization": "FDA / CPSC",
      "standard": "CPSC Home Kitchen Safety Standards / FDA Food Code",
      "citation": "Guidelines on preventing kitchen appliance accidents, fire hazards, and foodborne illness outbreaks."
    },
    "applianceSpecs": {
      "parameter": "Appliance Engineering Operating Envelope",
      "guideline": "Always verify manufacturer appliance instructions and material compatibility before exposure to extreme heating, cooling, or washing cycles."
    }
  },
  "leave-oven-on-overnight": {
    "materialThermal": {
      "property": "Kitchen Appliance Physical Interaction Limit",
      "threshold": "Operational Safety Envelope; Exceeding Threshold Triggers Appliance/Material Failure",
      "details": "Operating appliances outside material compatibility limits triggers thermal shock, physical deformation, chemical leaching, or fire hazards."
    },
    "safetyStandard": {
      "organization": "FDA / CPSC",
      "standard": "CPSC Home Kitchen Safety Standards / FDA Food Code",
      "citation": "Guidelines on preventing kitchen appliance accidents, fire hazards, and foodborne illness outbreaks."
    },
    "applianceSpecs": {
      "parameter": "Appliance Engineering Operating Envelope",
      "guideline": "Always verify manufacturer appliance instructions and material compatibility before exposure to extreme heating, cooling, or washing cycles."
    }
  },
  "put-empty-pan-in-oven": {
    "materialThermal": {
      "property": "Kitchen Appliance Physical Interaction Limit",
      "threshold": "Operational Safety Envelope; Exceeding Threshold Triggers Appliance/Material Failure",
      "details": "Operating appliances outside material compatibility limits triggers thermal shock, physical deformation, chemical leaching, or fire hazards."
    },
    "safetyStandard": {
      "organization": "FDA / CPSC",
      "standard": "CPSC Home Kitchen Safety Standards / FDA Food Code",
      "citation": "Guidelines on preventing kitchen appliance accidents, fire hazards, and foodborne illness outbreaks."
    },
    "applianceSpecs": {
      "parameter": "Appliance Engineering Operating Envelope",
      "guideline": "Always verify manufacturer appliance instructions and material compatibility before exposure to extreme heating, cooling, or washing cycles."
    }
  },
  "use-aluminum-foil-on-oven-bottom": {
    "materialThermal": {
      "property": "Kitchen Appliance Physical Interaction Limit",
      "threshold": "Operational Safety Envelope; Exceeding Threshold Triggers Appliance/Material Failure",
      "details": "Operating appliances outside material compatibility limits triggers thermal shock, physical deformation, chemical leaching, or fire hazards."
    },
    "safetyStandard": {
      "organization": "FDA / CPSC",
      "standard": "CPSC Home Kitchen Safety Standards / FDA Food Code",
      "citation": "Guidelines on preventing kitchen appliance accidents, fire hazards, and foodborne illness outbreaks."
    },
    "applianceSpecs": {
      "parameter": "Appliance Engineering Operating Envelope",
      "guideline": "Always verify manufacturer appliance instructions and material compatibility before exposure to extreme heating, cooling, or washing cycles."
    }
  },
  "leave-gas-stove-on": {
    "materialThermal": {
      "property": "Kitchen Appliance Physical Interaction Limit",
      "threshold": "Operational Safety Envelope; Exceeding Threshold Triggers Appliance/Material Failure",
      "details": "Operating appliances outside material compatibility limits triggers thermal shock, physical deformation, chemical leaching, or fire hazards."
    },
    "safetyStandard": {
      "organization": "FDA / CPSC",
      "standard": "CPSC Home Kitchen Safety Standards / FDA Food Code",
      "citation": "Guidelines on preventing kitchen appliance accidents, fire hazards, and foodborne illness outbreaks."
    },
    "applianceSpecs": {
      "parameter": "Appliance Engineering Operating Envelope",
      "guideline": "Always verify manufacturer appliance instructions and material compatibility before exposure to extreme heating, cooling, or washing cycles."
    }
  },
  "boil-dry-pot": {
    "materialThermal": {
      "property": "Kitchen Appliance Physical Interaction Limit",
      "threshold": "Operational Safety Envelope; Exceeding Threshold Triggers Appliance/Material Failure",
      "details": "Operating appliances outside material compatibility limits triggers thermal shock, physical deformation, chemical leaching, or fire hazards."
    },
    "safetyStandard": {
      "organization": "FDA / CPSC",
      "standard": "CPSC Home Kitchen Safety Standards / FDA Food Code",
      "citation": "Guidelines on preventing kitchen appliance accidents, fire hazards, and foodborne illness outbreaks."
    },
    "applianceSpecs": {
      "parameter": "Appliance Engineering Operating Envelope",
      "guideline": "Always verify manufacturer appliance instructions and material compatibility before exposure to extreme heating, cooling, or washing cycles."
    }
  },
  "put-cold-glass-on-hot-stove": {
    "materialThermal": {
      "property": "Kitchen Appliance Physical Interaction Limit",
      "threshold": "Operational Safety Envelope; Exceeding Threshold Triggers Appliance/Material Failure",
      "details": "Operating appliances outside material compatibility limits triggers thermal shock, physical deformation, chemical leaching, or fire hazards."
    },
    "safetyStandard": {
      "organization": "FDA / CPSC",
      "standard": "CPSC Home Kitchen Safety Standards / FDA Food Code",
      "citation": "Guidelines on preventing kitchen appliance accidents, fire hazards, and foodborne illness outbreaks."
    },
    "applianceSpecs": {
      "parameter": "Appliance Engineering Operating Envelope",
      "guideline": "Always verify manufacturer appliance instructions and material compatibility before exposure to extreme heating, cooling, or washing cycles."
    }
  },
  "mix-bleach-and-vinegar": {
    "materialThermal": {
      "property": "Kitchen Appliance Physical Interaction Limit",
      "threshold": "Operational Safety Envelope; Exceeding Threshold Triggers Appliance/Material Failure",
      "details": "Operating appliances outside material compatibility limits triggers thermal shock, physical deformation, chemical leaching, or fire hazards."
    },
    "safetyStandard": {
      "organization": "FDA / CPSC",
      "standard": "CPSC Home Kitchen Safety Standards / FDA Food Code",
      "citation": "Guidelines on preventing kitchen appliance accidents, fire hazards, and foodborne illness outbreaks."
    },
    "applianceSpecs": {
      "parameter": "Appliance Engineering Operating Envelope",
      "guideline": "Always verify manufacturer appliance instructions and material compatibility before exposure to extreme heating, cooling, or washing cycles."
    }
  },
  "mix-bleach-and-ammonia": {
    "materialThermal": {
      "property": "Kitchen Appliance Physical Interaction Limit",
      "threshold": "Operational Safety Envelope; Exceeding Threshold Triggers Appliance/Material Failure",
      "details": "Operating appliances outside material compatibility limits triggers thermal shock, physical deformation, chemical leaching, or fire hazards."
    },
    "safetyStandard": {
      "organization": "FDA / CPSC",
      "standard": "CPSC Home Kitchen Safety Standards / FDA Food Code",
      "citation": "Guidelines on preventing kitchen appliance accidents, fire hazards, and foodborne illness outbreaks."
    },
    "applianceSpecs": {
      "parameter": "Appliance Engineering Operating Envelope",
      "guideline": "Always verify manufacturer appliance instructions and material compatibility before exposure to extreme heating, cooling, or washing cycles."
    }
  },
  "put-hot-pan-in-cold-water": {
    "materialThermal": {
      "property": "Kitchen Appliance Physical Interaction Limit",
      "threshold": "Operational Safety Envelope; Exceeding Threshold Triggers Appliance/Material Failure",
      "details": "Operating appliances outside material compatibility limits triggers thermal shock, physical deformation, chemical leaching, or fire hazards."
    },
    "safetyStandard": {
      "organization": "FDA / CPSC",
      "standard": "CPSC Home Kitchen Safety Standards / FDA Food Code",
      "citation": "Guidelines on preventing kitchen appliance accidents, fire hazards, and foodborne illness outbreaks."
    },
    "applianceSpecs": {
      "parameter": "Appliance Engineering Operating Envelope",
      "guideline": "Always verify manufacturer appliance instructions and material compatibility before exposure to extreme heating, cooling, or washing cycles."
    }
  },
  "eat-freezer-burned-meat": {
    "materialThermal": {
      "property": "Kitchen Appliance Physical Interaction Limit",
      "threshold": "Operational Safety Envelope; Exceeding Threshold Triggers Appliance/Material Failure",
      "details": "Operating appliances outside material compatibility limits triggers thermal shock, physical deformation, chemical leaching, or fire hazards."
    },
    "safetyStandard": {
      "organization": "FDA / CPSC",
      "standard": "CPSC Home Kitchen Safety Standards / FDA Food Code",
      "citation": "Guidelines on preventing kitchen appliance accidents, fire hazards, and foodborne illness outbreaks."
    },
    "applianceSpecs": {
      "parameter": "Appliance Engineering Operating Envelope",
      "guideline": "Always verify manufacturer appliance instructions and material compatibility before exposure to extreme heating, cooling, or washing cycles."
    }
  },
  "eat-food-left-out-overnight": {
    "materialThermal": {
      "property": "Kitchen Appliance Physical Interaction Limit",
      "threshold": "Operational Safety Envelope; Exceeding Threshold Triggers Appliance/Material Failure",
      "details": "Operating appliances outside material compatibility limits triggers thermal shock, physical deformation, chemical leaching, or fire hazards."
    },
    "safetyStandard": {
      "organization": "FDA / CPSC",
      "standard": "CPSC Home Kitchen Safety Standards / FDA Food Code",
      "citation": "Guidelines on preventing kitchen appliance accidents, fire hazards, and foodborne illness outbreaks."
    },
    "applianceSpecs": {
      "parameter": "Appliance Engineering Operating Envelope",
      "guideline": "Always verify manufacturer appliance instructions and material compatibility before exposure to extreme heating, cooling, or washing cycles."
    }
  },
  "eat-expired-eggs": {
    "materialThermal": {
      "property": "Kitchen Appliance Physical Interaction Limit",
      "threshold": "Operational Safety Envelope; Exceeding Threshold Triggers Appliance/Material Failure",
      "details": "Operating appliances outside material compatibility limits triggers thermal shock, physical deformation, chemical leaching, or fire hazards."
    },
    "safetyStandard": {
      "organization": "FDA / CPSC",
      "standard": "CPSC Home Kitchen Safety Standards / FDA Food Code",
      "citation": "Guidelines on preventing kitchen appliance accidents, fire hazards, and foodborne illness outbreaks."
    },
    "applianceSpecs": {
      "parameter": "Appliance Engineering Operating Envelope",
      "guideline": "Always verify manufacturer appliance instructions and material compatibility before exposure to extreme heating, cooling, or washing cycles."
    }
  },
  "drink-expired-milk": {
    "materialThermal": {
      "property": "Kitchen Appliance Physical Interaction Limit",
      "threshold": "Operational Safety Envelope; Exceeding Threshold Triggers Appliance/Material Failure",
      "details": "Operating appliances outside material compatibility limits triggers thermal shock, physical deformation, chemical leaching, or fire hazards."
    },
    "safetyStandard": {
      "organization": "FDA / CPSC",
      "standard": "CPSC Home Kitchen Safety Standards / FDA Food Code",
      "citation": "Guidelines on preventing kitchen appliance accidents, fire hazards, and foodborne illness outbreaks."
    },
    "applianceSpecs": {
      "parameter": "Appliance Engineering Operating Envelope",
      "guideline": "Always verify manufacturer appliance instructions and material compatibility before exposure to extreme heating, cooling, or washing cycles."
    }
  },
  "microwave-cardboard-box": {
    "materialThermal": {
      "property": "Kitchen Appliance Physical Interaction Limit",
      "threshold": "Operational Safety Envelope; Exceeding Threshold Triggers Appliance/Material Failure",
      "details": "Operating appliances outside material compatibility limits triggers thermal shock, physical deformation, chemical leaching, or fire hazards."
    },
    "safetyStandard": {
      "organization": "FDA / CPSC",
      "standard": "CPSC Home Kitchen Safety Standards / FDA Food Code",
      "citation": "Guidelines on preventing kitchen appliance accidents, fire hazards, and foodborne illness outbreaks."
    },
    "applianceSpecs": {
      "parameter": "Appliance Engineering Operating Envelope",
      "guideline": "Always verify manufacturer appliance instructions and material compatibility before exposure to extreme heating, cooling, or washing cycles."
    }
  },
  "microwave-travel-mug": {
    "materialThermal": {
      "property": "Kitchen Appliance Physical Interaction Limit",
      "threshold": "Operational Safety Envelope; Exceeding Threshold Triggers Appliance/Material Failure",
      "details": "Operating appliances outside material compatibility limits triggers thermal shock, physical deformation, chemical leaching, or fire hazards."
    },
    "safetyStandard": {
      "organization": "FDA / CPSC",
      "standard": "CPSC Home Kitchen Safety Standards / FDA Food Code",
      "citation": "Guidelines on preventing kitchen appliance accidents, fire hazards, and foodborne illness outbreaks."
    },
    "applianceSpecs": {
      "parameter": "Appliance Engineering Operating Envelope",
      "guideline": "Always verify manufacturer appliance instructions and material compatibility before exposure to extreme heating, cooling, or washing cycles."
    }
  },
  "microwave-tupperware-unmarked": {
    "materialThermal": {
      "property": "Kitchen Appliance Physical Interaction Limit",
      "threshold": "Operational Safety Envelope; Exceeding Threshold Triggers Appliance/Material Failure",
      "details": "Operating appliances outside material compatibility limits triggers thermal shock, physical deformation, chemical leaching, or fire hazards."
    },
    "safetyStandard": {
      "organization": "FDA / CPSC",
      "standard": "CPSC Home Kitchen Safety Standards / FDA Food Code",
      "citation": "Guidelines on preventing kitchen appliance accidents, fire hazards, and foodborne illness outbreaks."
    },
    "applianceSpecs": {
      "parameter": "Appliance Engineering Operating Envelope",
      "guideline": "Always verify manufacturer appliance instructions and material compatibility before exposure to extreme heating, cooling, or washing cycles."
    }
  },
  "put-bamboo-cutting-board-in-dishwasher": {
    "materialThermal": {
      "property": "Kitchen Appliance Physical Interaction Limit",
      "threshold": "Operational Safety Envelope; Exceeding Threshold Triggers Appliance/Material Failure",
      "details": "Operating appliances outside material compatibility limits triggers thermal shock, physical deformation, chemical leaching, or fire hazards."
    },
    "safetyStandard": {
      "organization": "FDA / CPSC",
      "standard": "CPSC Home Kitchen Safety Standards / FDA Food Code",
      "citation": "Guidelines on preventing kitchen appliance accidents, fire hazards, and foodborne illness outbreaks."
    },
    "applianceSpecs": {
      "parameter": "Appliance Engineering Operating Envelope",
      "guideline": "Always verify manufacturer appliance instructions and material compatibility before exposure to extreme heating, cooling, or washing cycles."
    }
  },
  "put-non-stick-pan-in-dishwasher": {
    "materialThermal": {
      "property": "Kitchen Appliance Physical Interaction Limit",
      "threshold": "Operational Safety Envelope; Exceeding Threshold Triggers Appliance/Material Failure",
      "details": "Operating appliances outside material compatibility limits triggers thermal shock, physical deformation, chemical leaching, or fire hazards."
    },
    "safetyStandard": {
      "organization": "FDA / CPSC",
      "standard": "CPSC Home Kitchen Safety Standards / FDA Food Code",
      "citation": "Guidelines on preventing kitchen appliance accidents, fire hazards, and foodborne illness outbreaks."
    },
    "applianceSpecs": {
      "parameter": "Appliance Engineering Operating Envelope",
      "guideline": "Always verify manufacturer appliance instructions and material compatibility before exposure to extreme heating, cooling, or washing cycles."
    }
  },
  "put-chefs-knife-in-dishwasher": {
    "materialThermal": {
      "property": "Kitchen Appliance Physical Interaction Limit",
      "threshold": "Operational Safety Envelope; Exceeding Threshold Triggers Appliance/Material Failure",
      "details": "Operating appliances outside material compatibility limits triggers thermal shock, physical deformation, chemical leaching, or fire hazards."
    },
    "safetyStandard": {
      "organization": "FDA / CPSC",
      "standard": "CPSC Home Kitchen Safety Standards / FDA Food Code",
      "citation": "Guidelines on preventing kitchen appliance accidents, fire hazards, and foodborne illness outbreaks."
    },
    "applianceSpecs": {
      "parameter": "Appliance Engineering Operating Envelope",
      "guideline": "Always verify manufacturer appliance instructions and material compatibility before exposure to extreme heating, cooling, or washing cycles."
    }
  },
  "leave-fridge-door-open": {
    "materialThermal": {
      "property": "Kitchen Appliance Physical Interaction Limit",
      "threshold": "Operational Safety Envelope; Exceeding Threshold Triggers Appliance/Material Failure",
      "details": "Operating appliances outside material compatibility limits triggers thermal shock, physical deformation, chemical leaching, or fire hazards."
    },
    "safetyStandard": {
      "organization": "FDA / CPSC",
      "standard": "CPSC Home Kitchen Safety Standards / FDA Food Code",
      "citation": "Guidelines on preventing kitchen appliance accidents, fire hazards, and foodborne illness outbreaks."
    },
    "applianceSpecs": {
      "parameter": "Appliance Engineering Operating Envelope",
      "guideline": "Always verify manufacturer appliance instructions and material compatibility before exposure to extreme heating, cooling, or washing cycles."
    }
  },
  "freeze-bananas-in-peel": {
    "materialThermal": {
      "property": "Kitchen Appliance Physical Interaction Limit",
      "threshold": "Operational Safety Envelope; Exceeding Threshold Triggers Appliance/Material Failure",
      "details": "Operating appliances outside material compatibility limits triggers thermal shock, physical deformation, chemical leaching, or fire hazards."
    },
    "safetyStandard": {
      "organization": "FDA / CPSC",
      "standard": "CPSC Home Kitchen Safety Standards / FDA Food Code",
      "citation": "Guidelines on preventing kitchen appliance accidents, fire hazards, and foodborne illness outbreaks."
    },
    "applianceSpecs": {
      "parameter": "Appliance Engineering Operating Envelope",
      "guideline": "Always verify manufacturer appliance instructions and material compatibility before exposure to extreme heating, cooling, or washing cycles."
    }
  },
  "freeze-whole-avocado": {
    "materialThermal": {
      "property": "Kitchen Appliance Physical Interaction Limit",
      "threshold": "Operational Safety Envelope; Exceeding Threshold Triggers Appliance/Material Failure",
      "details": "Operating appliances outside material compatibility limits triggers thermal shock, physical deformation, chemical leaching, or fire hazards."
    },
    "safetyStandard": {
      "organization": "FDA / CPSC",
      "standard": "CPSC Home Kitchen Safety Standards / FDA Food Code",
      "citation": "Guidelines on preventing kitchen appliance accidents, fire hazards, and foodborne illness outbreaks."
    },
    "applianceSpecs": {
      "parameter": "Appliance Engineering Operating Envelope",
      "guideline": "Always verify manufacturer appliance instructions and material compatibility before exposure to extreme heating, cooling, or washing cycles."
    }
  },
  "put-styrofoam-in-oven": {
    "materialThermal": {
      "property": "Kitchen Appliance Physical Interaction Limit",
      "threshold": "Operational Safety Envelope; Exceeding Threshold Triggers Appliance/Material Failure",
      "details": "Operating appliances outside material compatibility limits triggers thermal shock, physical deformation, chemical leaching, or fire hazards."
    },
    "safetyStandard": {
      "organization": "FDA / CPSC",
      "standard": "CPSC Home Kitchen Safety Standards / FDA Food Code",
      "citation": "Guidelines on preventing kitchen appliance accidents, fire hazards, and foodborne illness outbreaks."
    },
    "applianceSpecs": {
      "parameter": "Appliance Engineering Operating Envelope",
      "guideline": "Always verify manufacturer appliance instructions and material compatibility before exposure to extreme heating, cooling, or washing cycles."
    }
  },
  "put-plastic-cutting-board-in-oven": {
    "materialThermal": {
      "property": "Polymer Thermal Decomposition & Toxic Fume Off-Gassing",
      "threshold": "Polyolefin Melting 220°F–320°F (105°C–160°C); Decomposition >390°F",
      "details": "Standard thermoplastics liquefy on hot oven racks, releasing hazardous plasticizer vapors, dripping onto electric elements, and creating an intense chemical fire hazard."
    },
    "safetyStandard": {
      "organization": "FDA / NFPA",
      "standard": "21 CFR § 177.1520 / NFPA 96",
      "citation": "Strictly forbids high-heat exposure of non-oven-grade plastics in domestic ovens."
    },
    "applianceSpecs": {
      "parameter": "Radiant Electric Element Contamination",
      "guideline": "Molten plastic bonds to porcelain oven walls and electric elements (>1,000°F), releasing acrid smoke that ruins food and requires aggressive cleaning."
    }
  },
  "leave-electric-stove-on": {
    "materialThermal": {
      "property": "Kitchen Appliance Physical Interaction Limit",
      "threshold": "Operational Safety Envelope; Exceeding Threshold Triggers Appliance/Material Failure",
      "details": "Operating appliances outside material compatibility limits triggers thermal shock, physical deformation, chemical leaching, or fire hazards."
    },
    "safetyStandard": {
      "organization": "FDA / CPSC",
      "standard": "CPSC Home Kitchen Safety Standards / FDA Food Code",
      "citation": "Guidelines on preventing kitchen appliance accidents, fire hazards, and foodborne illness outbreaks."
    },
    "applianceSpecs": {
      "parameter": "Appliance Engineering Operating Envelope",
      "guideline": "Always verify manufacturer appliance instructions and material compatibility before exposure to extreme heating, cooling, or washing cycles."
    }
  },
  "put-hot-glass-dish-on-cold-counter": {
    "materialThermal": {
      "property": "Kitchen Appliance Physical Interaction Limit",
      "threshold": "Operational Safety Envelope; Exceeding Threshold Triggers Appliance/Material Failure",
      "details": "Operating appliances outside material compatibility limits triggers thermal shock, physical deformation, chemical leaching, or fire hazards."
    },
    "safetyStandard": {
      "organization": "FDA / CPSC",
      "standard": "CPSC Home Kitchen Safety Standards / FDA Food Code",
      "citation": "Guidelines on preventing kitchen appliance accidents, fire hazards, and foodborne illness outbreaks."
    },
    "applianceSpecs": {
      "parameter": "Appliance Engineering Operating Envelope",
      "guideline": "Always verify manufacturer appliance instructions and material compatibility before exposure to extreme heating, cooling, or washing cycles."
    }
  },
  "eat-sprouted-potatoes": {
    "materialThermal": {
      "property": "Kitchen Appliance Physical Interaction Limit",
      "threshold": "Operational Safety Envelope; Exceeding Threshold Triggers Appliance/Material Failure",
      "details": "Operating appliances outside material compatibility limits triggers thermal shock, physical deformation, chemical leaching, or fire hazards."
    },
    "safetyStandard": {
      "organization": "FDA / CPSC",
      "standard": "CPSC Home Kitchen Safety Standards / FDA Food Code",
      "citation": "Guidelines on preventing kitchen appliance accidents, fire hazards, and foodborne illness outbreaks."
    },
    "applianceSpecs": {
      "parameter": "Appliance Engineering Operating Envelope",
      "guideline": "Always verify manufacturer appliance instructions and material compatibility before exposure to extreme heating, cooling, or washing cycles."
    }
  },
  "eat-moldy-bread": {
    "materialThermal": {
      "property": "Kitchen Appliance Physical Interaction Limit",
      "threshold": "Operational Safety Envelope; Exceeding Threshold Triggers Appliance/Material Failure",
      "details": "Operating appliances outside material compatibility limits triggers thermal shock, physical deformation, chemical leaching, or fire hazards."
    },
    "safetyStandard": {
      "organization": "FDA / CPSC",
      "standard": "CPSC Home Kitchen Safety Standards / FDA Food Code",
      "citation": "Guidelines on preventing kitchen appliance accidents, fire hazards, and foodborne illness outbreaks."
    },
    "applianceSpecs": {
      "parameter": "Appliance Engineering Operating Envelope",
      "guideline": "Always verify manufacturer appliance instructions and material compatibility before exposure to extreme heating, cooling, or washing cycles."
    }
  },
  "eat-moldy-cheese": {
    "materialThermal": {
      "property": "Kitchen Appliance Physical Interaction Limit",
      "threshold": "Operational Safety Envelope; Exceeding Threshold Triggers Appliance/Material Failure",
      "details": "Operating appliances outside material compatibility limits triggers thermal shock, physical deformation, chemical leaching, or fire hazards."
    },
    "safetyStandard": {
      "organization": "FDA / CPSC",
      "standard": "CPSC Home Kitchen Safety Standards / FDA Food Code",
      "citation": "Guidelines on preventing kitchen appliance accidents, fire hazards, and foodborne illness outbreaks."
    },
    "applianceSpecs": {
      "parameter": "Appliance Engineering Operating Envelope",
      "guideline": "Always verify manufacturer appliance instructions and material compatibility before exposure to extreme heating, cooling, or washing cycles."
    }
  },
  "drink-expired-soda": {
    "materialThermal": {
      "property": "Kitchen Appliance Physical Interaction Limit",
      "threshold": "Operational Safety Envelope; Exceeding Threshold Triggers Appliance/Material Failure",
      "details": "Operating appliances outside material compatibility limits triggers thermal shock, physical deformation, chemical leaching, or fire hazards."
    },
    "safetyStandard": {
      "organization": "FDA / CPSC",
      "standard": "CPSC Home Kitchen Safety Standards / FDA Food Code",
      "citation": "Guidelines on preventing kitchen appliance accidents, fire hazards, and foodborne illness outbreaks."
    },
    "applianceSpecs": {
      "parameter": "Appliance Engineering Operating Envelope",
      "guideline": "Always verify manufacturer appliance instructions and material compatibility before exposure to extreme heating, cooling, or washing cycles."
    }
  },
  "eat-freezer-burned-ice-cream": {
    "materialThermal": {
      "property": "Kitchen Appliance Physical Interaction Limit",
      "threshold": "Operational Safety Envelope; Exceeding Threshold Triggers Appliance/Material Failure",
      "details": "Operating appliances outside material compatibility limits triggers thermal shock, physical deformation, chemical leaching, or fire hazards."
    },
    "safetyStandard": {
      "organization": "FDA / CPSC",
      "standard": "CPSC Home Kitchen Safety Standards / FDA Food Code",
      "citation": "Guidelines on preventing kitchen appliance accidents, fire hazards, and foodborne illness outbreaks."
    },
    "applianceSpecs": {
      "parameter": "Appliance Engineering Operating Envelope",
      "guideline": "Always verify manufacturer appliance instructions and material compatibility before exposure to extreme heating, cooling, or washing cycles."
    }
  },
  "eat-raw-cookie-dough": {
    "materialThermal": {
      "property": "Kitchen Appliance Physical Interaction Limit",
      "threshold": "Operational Safety Envelope; Exceeding Threshold Triggers Appliance/Material Failure",
      "details": "Operating appliances outside material compatibility limits triggers thermal shock, physical deformation, chemical leaching, or fire hazards."
    },
    "safetyStandard": {
      "organization": "FDA / CPSC",
      "standard": "CPSC Home Kitchen Safety Standards / FDA Food Code",
      "citation": "Guidelines on preventing kitchen appliance accidents, fire hazards, and foodborne illness outbreaks."
    },
    "applianceSpecs": {
      "parameter": "Appliance Engineering Operating Envelope",
      "guideline": "Always verify manufacturer appliance instructions and material compatibility before exposure to extreme heating, cooling, or washing cycles."
    }
  },
  "microwave-styrofoam-cup": {
    "materialThermal": {
      "property": "Kitchen Appliance Physical Interaction Limit",
      "threshold": "Operational Safety Envelope; Exceeding Threshold Triggers Appliance/Material Failure",
      "details": "Operating appliances outside material compatibility limits triggers thermal shock, physical deformation, chemical leaching, or fire hazards."
    },
    "safetyStandard": {
      "organization": "FDA / CPSC",
      "standard": "CPSC Home Kitchen Safety Standards / FDA Food Code",
      "citation": "Guidelines on preventing kitchen appliance accidents, fire hazards, and foodborne illness outbreaks."
    },
    "applianceSpecs": {
      "parameter": "Appliance Engineering Operating Envelope",
      "guideline": "Always verify manufacturer appliance instructions and material compatibility before exposure to extreme heating, cooling, or washing cycles."
    }
  },
  "microwave-paper-bag": {
    "materialThermal": {
      "property": "Kitchen Appliance Physical Interaction Limit",
      "threshold": "Operational Safety Envelope; Exceeding Threshold Triggers Appliance/Material Failure",
      "details": "Operating appliances outside material compatibility limits triggers thermal shock, physical deformation, chemical leaching, or fire hazards."
    },
    "safetyStandard": {
      "organization": "FDA / CPSC",
      "standard": "CPSC Home Kitchen Safety Standards / FDA Food Code",
      "citation": "Guidelines on preventing kitchen appliance accidents, fire hazards, and foodborne illness outbreaks."
    },
    "applianceSpecs": {
      "parameter": "Appliance Engineering Operating Envelope",
      "guideline": "Always verify manufacturer appliance instructions and material compatibility before exposure to extreme heating, cooling, or washing cycles."
    }
  },
  "microwave-sealed-container": {
    "materialThermal": {
      "property": "Kitchen Appliance Physical Interaction Limit",
      "threshold": "Operational Safety Envelope; Exceeding Threshold Triggers Appliance/Material Failure",
      "details": "Operating appliances outside material compatibility limits triggers thermal shock, physical deformation, chemical leaching, or fire hazards."
    },
    "safetyStandard": {
      "organization": "FDA / CPSC",
      "standard": "CPSC Home Kitchen Safety Standards / FDA Food Code",
      "citation": "Guidelines on preventing kitchen appliance accidents, fire hazards, and foodborne illness outbreaks."
    },
    "applianceSpecs": {
      "parameter": "Appliance Engineering Operating Envelope",
      "guideline": "Always verify manufacturer appliance instructions and material compatibility before exposure to extreme heating, cooling, or washing cycles."
    }
  },
  "microwave-hot-peppers": {
    "materialThermal": {
      "property": "Kitchen Appliance Physical Interaction Limit",
      "threshold": "Operational Safety Envelope; Exceeding Threshold Triggers Appliance/Material Failure",
      "details": "Operating appliances outside material compatibility limits triggers thermal shock, physical deformation, chemical leaching, or fire hazards."
    },
    "safetyStandard": {
      "organization": "FDA / CPSC",
      "standard": "CPSC Home Kitchen Safety Standards / FDA Food Code",
      "citation": "Guidelines on preventing kitchen appliance accidents, fire hazards, and foodborne illness outbreaks."
    },
    "applianceSpecs": {
      "parameter": "Appliance Engineering Operating Envelope",
      "guideline": "Always verify manufacturer appliance instructions and material compatibility before exposure to extreme heating, cooling, or washing cycles."
    }
  },
  "microwave-breast-milk": {
    "materialThermal": {
      "property": "Kitchen Appliance Physical Interaction Limit",
      "threshold": "Operational Safety Envelope; Exceeding Threshold Triggers Appliance/Material Failure",
      "details": "Operating appliances outside material compatibility limits triggers thermal shock, physical deformation, chemical leaching, or fire hazards."
    },
    "safetyStandard": {
      "organization": "FDA / CPSC",
      "standard": "CPSC Home Kitchen Safety Standards / FDA Food Code",
      "citation": "Guidelines on preventing kitchen appliance accidents, fire hazards, and foodborne illness outbreaks."
    },
    "applianceSpecs": {
      "parameter": "Appliance Engineering Operating Envelope",
      "guideline": "Always verify manufacturer appliance instructions and material compatibility before exposure to extreme heating, cooling, or washing cycles."
    }
  },
  "microwave-frozen-meat-wrong": {
    "materialThermal": {
      "property": "Kitchen Appliance Physical Interaction Limit",
      "threshold": "Operational Safety Envelope; Exceeding Threshold Triggers Appliance/Material Failure",
      "details": "Operating appliances outside material compatibility limits triggers thermal shock, physical deformation, chemical leaching, or fire hazards."
    },
    "safetyStandard": {
      "organization": "FDA / CPSC",
      "standard": "CPSC Home Kitchen Safety Standards / FDA Food Code",
      "citation": "Guidelines on preventing kitchen appliance accidents, fire hazards, and foodborne illness outbreaks."
    },
    "applianceSpecs": {
      "parameter": "Appliance Engineering Operating Envelope",
      "guideline": "Always verify manufacturer appliance instructions and material compatibility before exposure to extreme heating, cooling, or washing cycles."
    }
  },
  "run-dishwasher-empty": {
    "materialThermal": {
      "property": "Kitchen Appliance Physical Interaction Limit",
      "threshold": "Operational Safety Envelope; Exceeding Threshold Triggers Appliance/Material Failure",
      "details": "Operating appliances outside material compatibility limits triggers thermal shock, physical deformation, chemical leaching, or fire hazards."
    },
    "safetyStandard": {
      "organization": "FDA / CPSC",
      "standard": "CPSC Home Kitchen Safety Standards / FDA Food Code",
      "citation": "Guidelines on preventing kitchen appliance accidents, fire hazards, and foodborne illness outbreaks."
    },
    "applianceSpecs": {
      "parameter": "Appliance Engineering Operating Envelope",
      "guideline": "Always verify manufacturer appliance instructions and material compatibility before exposure to extreme heating, cooling, or washing cycles."
    }
  },
  "put-copper-in-dishwasher": {
    "materialThermal": {
      "property": "Kitchen Appliance Physical Interaction Limit",
      "threshold": "Operational Safety Envelope; Exceeding Threshold Triggers Appliance/Material Failure",
      "details": "Operating appliances outside material compatibility limits triggers thermal shock, physical deformation, chemical leaching, or fire hazards."
    },
    "safetyStandard": {
      "organization": "FDA / CPSC",
      "standard": "CPSC Home Kitchen Safety Standards / FDA Food Code",
      "citation": "Guidelines on preventing kitchen appliance accidents, fire hazards, and foodborne illness outbreaks."
    },
    "applianceSpecs": {
      "parameter": "Appliance Engineering Operating Envelope",
      "guideline": "Always verify manufacturer appliance instructions and material compatibility before exposure to extreme heating, cooling, or washing cycles."
    }
  },
  "put-gold-utensils-in-dishwasher": {
    "materialThermal": {
      "property": "Kitchen Appliance Physical Interaction Limit",
      "threshold": "Operational Safety Envelope; Exceeding Threshold Triggers Appliance/Material Failure",
      "details": "Operating appliances outside material compatibility limits triggers thermal shock, physical deformation, chemical leaching, or fire hazards."
    },
    "safetyStandard": {
      "organization": "FDA / CPSC",
      "standard": "CPSC Home Kitchen Safety Standards / FDA Food Code",
      "citation": "Guidelines on preventing kitchen appliance accidents, fire hazards, and foodborne illness outbreaks."
    },
    "applianceSpecs": {
      "parameter": "Appliance Engineering Operating Envelope",
      "guideline": "Always verify manufacturer appliance instructions and material compatibility before exposure to extreme heating, cooling, or washing cycles."
    }
  },
  "use-dish-soap-in-dishwasher": {
    "materialThermal": {
      "property": "Anionic Surfactant Foam Hydrodynamics & Seal Failure",
      "threshold": "Sud Volume Expansion >50x Chamber Capacity; Impeller Cavitation",
      "details": "Liquid hand dish soap contains high-foaming anionic surfactants (SLS). The high-velocity wash spray whips soap into an uncontrollable wall of dense suds that breaches door gaskets and floods the kitchen floor."
    },
    "safetyStandard": {
      "organization": "AHAM / CPSC",
      "standard": "Association of Home Appliance Manufacturers (AHAM) DW-1 Guidelines",
      "citation": "Dishwashers require specialized low-foaming, non-ionic detergents; high-sudsing soaps cause pump motor burnout and water damage."
    },
    "applianceSpecs": {
      "parameter": "Circulation Pump Motor Overload",
      "guideline": "Suds trap air in the circulation pump impeller, causing cavitation, loss of water pressure, motor overheating, and basement water leaks."
    }
  },
  "put-non-stick-in-dishwasher": {
    "materialThermal": {
      "property": "Kitchen Appliance Physical Interaction Limit",
      "threshold": "Operational Safety Envelope; Exceeding Threshold Triggers Appliance/Material Failure",
      "details": "Operating appliances outside material compatibility limits triggers thermal shock, physical deformation, chemical leaching, or fire hazards."
    },
    "safetyStandard": {
      "organization": "FDA / CPSC",
      "standard": "CPSC Home Kitchen Safety Standards / FDA Food Code",
      "citation": "Guidelines on preventing kitchen appliance accidents, fire hazards, and foodborne illness outbreaks."
    },
    "applianceSpecs": {
      "parameter": "Appliance Engineering Operating Envelope",
      "guideline": "Always verify manufacturer appliance instructions and material compatibility before exposure to extreme heating, cooling, or washing cycles."
    }
  },
  "preheat-oven-too-long": {
    "materialThermal": {
      "property": "Kitchen Appliance Physical Interaction Limit",
      "threshold": "Operational Safety Envelope; Exceeding Threshold Triggers Appliance/Material Failure",
      "details": "Operating appliances outside material compatibility limits triggers thermal shock, physical deformation, chemical leaching, or fire hazards."
    },
    "safetyStandard": {
      "organization": "FDA / CPSC",
      "standard": "CPSC Home Kitchen Safety Standards / FDA Food Code",
      "citation": "Guidelines on preventing kitchen appliance accidents, fire hazards, and foodborne illness outbreaks."
    },
    "applianceSpecs": {
      "parameter": "Appliance Engineering Operating Envelope",
      "guideline": "Always verify manufacturer appliance instructions and material compatibility before exposure to extreme heating, cooling, or washing cycles."
    }
  },
  "leave-food-in-oven-overnight": {
    "materialThermal": {
      "property": "Kitchen Appliance Physical Interaction Limit",
      "threshold": "Operational Safety Envelope; Exceeding Threshold Triggers Appliance/Material Failure",
      "details": "Operating appliances outside material compatibility limits triggers thermal shock, physical deformation, chemical leaching, or fire hazards."
    },
    "safetyStandard": {
      "organization": "FDA / CPSC",
      "standard": "CPSC Home Kitchen Safety Standards / FDA Food Code",
      "citation": "Guidelines on preventing kitchen appliance accidents, fire hazards, and foodborne illness outbreaks."
    },
    "applianceSpecs": {
      "parameter": "Appliance Engineering Operating Envelope",
      "guideline": "Always verify manufacturer appliance instructions and material compatibility before exposure to extreme heating, cooling, or washing cycles."
    }
  },
  "put-cold-dish-in-hot-oven": {
    "materialThermal": {
      "property": "Kitchen Appliance Physical Interaction Limit",
      "threshold": "Operational Safety Envelope; Exceeding Threshold Triggers Appliance/Material Failure",
      "details": "Operating appliances outside material compatibility limits triggers thermal shock, physical deformation, chemical leaching, or fire hazards."
    },
    "safetyStandard": {
      "organization": "FDA / CPSC",
      "standard": "CPSC Home Kitchen Safety Standards / FDA Food Code",
      "citation": "Guidelines on preventing kitchen appliance accidents, fire hazards, and foodborne illness outbreaks."
    },
    "applianceSpecs": {
      "parameter": "Appliance Engineering Operating Envelope",
      "guideline": "Always verify manufacturer appliance instructions and material compatibility before exposure to extreme heating, cooling, or washing cycles."
    }
  },
  "open-oven-too-often": {
    "materialThermal": {
      "property": "Kitchen Appliance Physical Interaction Limit",
      "threshold": "Operational Safety Envelope; Exceeding Threshold Triggers Appliance/Material Failure",
      "details": "Operating appliances outside material compatibility limits triggers thermal shock, physical deformation, chemical leaching, or fire hazards."
    },
    "safetyStandard": {
      "organization": "FDA / CPSC",
      "standard": "CPSC Home Kitchen Safety Standards / FDA Food Code",
      "citation": "Guidelines on preventing kitchen appliance accidents, fire hazards, and foodborne illness outbreaks."
    },
    "applianceSpecs": {
      "parameter": "Appliance Engineering Operating Envelope",
      "guideline": "Always verify manufacturer appliance instructions and material compatibility before exposure to extreme heating, cooling, or washing cycles."
    }
  },
  "freeze-food-in-original-packaging": {
    "materialThermal": {
      "property": "Kitchen Appliance Physical Interaction Limit",
      "threshold": "Operational Safety Envelope; Exceeding Threshold Triggers Appliance/Material Failure",
      "details": "Operating appliances outside material compatibility limits triggers thermal shock, physical deformation, chemical leaching, or fire hazards."
    },
    "safetyStandard": {
      "organization": "FDA / CPSC",
      "standard": "CPSC Home Kitchen Safety Standards / FDA Food Code",
      "citation": "Guidelines on preventing kitchen appliance accidents, fire hazards, and foodborne illness outbreaks."
    },
    "applianceSpecs": {
      "parameter": "Appliance Engineering Operating Envelope",
      "guideline": "Always verify manufacturer appliance instructions and material compatibility before exposure to extreme heating, cooling, or washing cycles."
    }
  },
  "freeze-wet-food": {
    "materialThermal": {
      "property": "Kitchen Appliance Physical Interaction Limit",
      "threshold": "Operational Safety Envelope; Exceeding Threshold Triggers Appliance/Material Failure",
      "details": "Operating appliances outside material compatibility limits triggers thermal shock, physical deformation, chemical leaching, or fire hazards."
    },
    "safetyStandard": {
      "organization": "FDA / CPSC",
      "standard": "CPSC Home Kitchen Safety Standards / FDA Food Code",
      "citation": "Guidelines on preventing kitchen appliance accidents, fire hazards, and foodborne illness outbreaks."
    },
    "applianceSpecs": {
      "parameter": "Appliance Engineering Operating Envelope",
      "guideline": "Always verify manufacturer appliance instructions and material compatibility before exposure to extreme heating, cooling, or washing cycles."
    }
  },
  "keep-freezer-too-full": {
    "materialThermal": {
      "property": "Kitchen Appliance Physical Interaction Limit",
      "threshold": "Operational Safety Envelope; Exceeding Threshold Triggers Appliance/Material Failure",
      "details": "Operating appliances outside material compatibility limits triggers thermal shock, physical deformation, chemical leaching, or fire hazards."
    },
    "safetyStandard": {
      "organization": "FDA / CPSC",
      "standard": "CPSC Home Kitchen Safety Standards / FDA Food Code",
      "citation": "Guidelines on preventing kitchen appliance accidents, fire hazards, and foodborne illness outbreaks."
    },
    "applianceSpecs": {
      "parameter": "Appliance Engineering Operating Envelope",
      "guideline": "Always verify manufacturer appliance instructions and material compatibility before exposure to extreme heating, cooling, or washing cycles."
    }
  },
  "keep-freezer-too-empty": {
    "materialThermal": {
      "property": "Kitchen Appliance Physical Interaction Limit",
      "threshold": "Operational Safety Envelope; Exceeding Threshold Triggers Appliance/Material Failure",
      "details": "Operating appliances outside material compatibility limits triggers thermal shock, physical deformation, chemical leaching, or fire hazards."
    },
    "safetyStandard": {
      "organization": "FDA / CPSC",
      "standard": "CPSC Home Kitchen Safety Standards / FDA Food Code",
      "citation": "Guidelines on preventing kitchen appliance accidents, fire hazards, and foodborne illness outbreaks."
    },
    "applianceSpecs": {
      "parameter": "Appliance Engineering Operating Envelope",
      "guideline": "Always verify manufacturer appliance instructions and material compatibility before exposure to extreme heating, cooling, or washing cycles."
    }
  },
  "freeze-cooked-rice-wrong": {
    "materialThermal": {
      "property": "Kitchen Appliance Physical Interaction Limit",
      "threshold": "Operational Safety Envelope; Exceeding Threshold Triggers Appliance/Material Failure",
      "details": "Operating appliances outside material compatibility limits triggers thermal shock, physical deformation, chemical leaching, or fire hazards."
    },
    "safetyStandard": {
      "organization": "FDA / CPSC",
      "standard": "CPSC Home Kitchen Safety Standards / FDA Food Code",
      "citation": "Guidelines on preventing kitchen appliance accidents, fire hazards, and foodborne illness outbreaks."
    },
    "applianceSpecs": {
      "parameter": "Appliance Engineering Operating Envelope",
      "guideline": "Always verify manufacturer appliance instructions and material compatibility before exposure to extreme heating, cooling, or washing cycles."
    }
  },
  "freeze-bread-wrong": {
    "materialThermal": {
      "property": "Kitchen Appliance Physical Interaction Limit",
      "threshold": "Operational Safety Envelope; Exceeding Threshold Triggers Appliance/Material Failure",
      "details": "Operating appliances outside material compatibility limits triggers thermal shock, physical deformation, chemical leaching, or fire hazards."
    },
    "safetyStandard": {
      "organization": "FDA / CPSC",
      "standard": "CPSC Home Kitchen Safety Standards / FDA Food Code",
      "citation": "Guidelines on preventing kitchen appliance accidents, fire hazards, and foodborne illness outbreaks."
    },
    "applianceSpecs": {
      "parameter": "Appliance Engineering Operating Envelope",
      "guideline": "Always verify manufacturer appliance instructions and material compatibility before exposure to extreme heating, cooling, or washing cycles."
    }
  },
  "eat-pink-chicken": {
    "materialThermal": {
      "property": "Kitchen Appliance Physical Interaction Limit",
      "threshold": "Operational Safety Envelope; Exceeding Threshold Triggers Appliance/Material Failure",
      "details": "Operating appliances outside material compatibility limits triggers thermal shock, physical deformation, chemical leaching, or fire hazards."
    },
    "safetyStandard": {
      "organization": "FDA / CPSC",
      "standard": "CPSC Home Kitchen Safety Standards / FDA Food Code",
      "citation": "Guidelines on preventing kitchen appliance accidents, fire hazards, and foodborne illness outbreaks."
    },
    "applianceSpecs": {
      "parameter": "Appliance Engineering Operating Envelope",
      "guideline": "Always verify manufacturer appliance instructions and material compatibility before exposure to extreme heating, cooling, or washing cycles."
    }
  },
  "eat-food-after-power-outage": {
    "materialThermal": {
      "property": "Kitchen Appliance Physical Interaction Limit",
      "threshold": "Operational Safety Envelope; Exceeding Threshold Triggers Appliance/Material Failure",
      "details": "Operating appliances outside material compatibility limits triggers thermal shock, physical deformation, chemical leaching, or fire hazards."
    },
    "safetyStandard": {
      "organization": "FDA / CPSC",
      "standard": "CPSC Home Kitchen Safety Standards / FDA Food Code",
      "citation": "Guidelines on preventing kitchen appliance accidents, fire hazards, and foodborne illness outbreaks."
    },
    "applianceSpecs": {
      "parameter": "Appliance Engineering Operating Envelope",
      "guideline": "Always verify manufacturer appliance instructions and material compatibility before exposure to extreme heating, cooling, or washing cycles."
    }
  },
  "drink-from-damaged-can": {
    "materialThermal": {
      "property": "Kitchen Appliance Physical Interaction Limit",
      "threshold": "Operational Safety Envelope; Exceeding Threshold Triggers Appliance/Material Failure",
      "details": "Operating appliances outside material compatibility limits triggers thermal shock, physical deformation, chemical leaching, or fire hazards."
    },
    "safetyStandard": {
      "organization": "FDA / CPSC",
      "standard": "CPSC Home Kitchen Safety Standards / FDA Food Code",
      "citation": "Guidelines on preventing kitchen appliance accidents, fire hazards, and foodborne illness outbreaks."
    },
    "applianceSpecs": {
      "parameter": "Appliance Engineering Operating Envelope",
      "guideline": "Always verify manufacturer appliance instructions and material compatibility before exposure to extreme heating, cooling, or washing cycles."
    }
  },
  "cross-contaminate-raw-meat": {
    "materialThermal": {
      "property": "Kitchen Appliance Physical Interaction Limit",
      "threshold": "Operational Safety Envelope; Exceeding Threshold Triggers Appliance/Material Failure",
      "details": "Operating appliances outside material compatibility limits triggers thermal shock, physical deformation, chemical leaching, or fire hazards."
    },
    "safetyStandard": {
      "organization": "FDA / CPSC",
      "standard": "CPSC Home Kitchen Safety Standards / FDA Food Code",
      "citation": "Guidelines on preventing kitchen appliance accidents, fire hazards, and foodborne illness outbreaks."
    },
    "applianceSpecs": {
      "parameter": "Appliance Engineering Operating Envelope",
      "guideline": "Always verify manufacturer appliance instructions and material compatibility before exposure to extreme heating, cooling, or washing cycles."
    }
  },
  "leave-rice-out-overnight": {
    "materialThermal": {
      "property": "Kitchen Appliance Physical Interaction Limit",
      "threshold": "Operational Safety Envelope; Exceeding Threshold Triggers Appliance/Material Failure",
      "details": "Operating appliances outside material compatibility limits triggers thermal shock, physical deformation, chemical leaching, or fire hazards."
    },
    "safetyStandard": {
      "organization": "FDA / CPSC",
      "standard": "CPSC Home Kitchen Safety Standards / FDA Food Code",
      "citation": "Guidelines on preventing kitchen appliance accidents, fire hazards, and foodborne illness outbreaks."
    },
    "applianceSpecs": {
      "parameter": "Appliance Engineering Operating Envelope",
      "guideline": "Always verify manufacturer appliance instructions and material compatibility before exposure to extreme heating, cooling, or washing cycles."
    }
  },
  "eat-undercooked-pork": {
    "materialThermal": {
      "property": "Kitchen Appliance Physical Interaction Limit",
      "threshold": "Operational Safety Envelope; Exceeding Threshold Triggers Appliance/Material Failure",
      "details": "Operating appliances outside material compatibility limits triggers thermal shock, physical deformation, chemical leaching, or fire hazards."
    },
    "safetyStandard": {
      "organization": "FDA / CPSC",
      "standard": "CPSC Home Kitchen Safety Standards / FDA Food Code",
      "citation": "Guidelines on preventing kitchen appliance accidents, fire hazards, and foodborne illness outbreaks."
    },
    "applianceSpecs": {
      "parameter": "Appliance Engineering Operating Envelope",
      "guideline": "Always verify manufacturer appliance instructions and material compatibility before exposure to extreme heating, cooling, or washing cycles."
    }
  }
};
