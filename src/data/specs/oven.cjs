// Technical Reference Specifications for Oven items
// Grounded strictly in USDA FSIS, FDA Food Code 2022, 21 CFR, ASTM, NFPA, and engineering standards.

module.exports = {
  "parchment-paper": {
    "materialThermal": {
      "property": "Cellulose Silicone Coating Thermal Threshold",
      "threshold": "420°F–450°F (215°C–232°C); Pyrolysis >450°F",
      "details": "Pure cellulose treated with cured food-grade silicone retains tensile strength and non-stick properties up to 450°F. Exposure above 450°F causes paper to brown, embrittle, and char."
    },
    "safetyStandard": {
      "organization": "FDA",
      "standard": "21 CFR § 176.170",
      "citation": "Components of paper and paperboard in contact with aqueous and fatty foods, establishing thermal extraction and safety boundaries."
    },
    "applianceSpecs": {
      "parameter": "Heating Element Proximity & Radiative Limits",
      "guideline": "Safe for standard baking up to 425°F–450°F; never allow edges to touch radiant electric elements (>1,000°F) or use under direct broiler flames."
    }
  },
  "wax-paper": {
    "materialThermal": {
      "property": "Paraffin Wax Melting & Flash Point",
      "threshold": "Melting Point 116°F–149°F (47°C–65°C); Flash Point ~390°F (199°C)",
      "details": "Petroleum paraffin coating liquefies rapidly upon mild heating, saturating underlying cellulose and vaporizing into flammable volatile hydrocarbons."
    },
    "safetyStandard": {
      "organization": "FDA / NFPA",
      "standard": "21 CFR § 175.250 / NFPA 96",
      "citation": "Paraffin wax packaging is restricted to cold and ambient storage; strictly prohibited from direct thermal cooking equipment."
    },
    "applianceSpecs": {
      "parameter": "Radiant Oven Chamber Heat Exposure",
      "guideline": "Standard oven baking temperatures (350°F–450°F) cause wax paper to liquefy, smoke profusely, and ignite if droplets reach the heating elements."
    }
  },
  "cardboard": {
    "materialThermal": {
      "property": "Cellulose Auto-Ignition Point & Toxic Ink Outgassing",
      "threshold": "Ignition Temperature 451°F (233°C); Thermal Degradation ~300°F",
      "details": "Dry unbound cellulose desiccates rapidly in oven air. Synthetic adhesives, mineral oil printing inks, and recycled pulp fibers outgas toxic fumes and ignite."
    },
    "safetyStandard": {
      "organization": "CPSC / NFPA",
      "standard": "NFPA 96 / CPSC Guidelines",
      "citation": "Combustible fibrous paper and recycled packaging materials are classified as severe fire hazards in enclosed heating appliances."
    },
    "applianceSpecs": {
      "parameter": "Oven Convection & Radiant Thermal Exposure",
      "guideline": "Radiant heat from oven elements ignites dry paper packaging in minutes. Never reheat pizza in cardboard delivery boxes or use paper plates for baking."
    }
  },
  "newspaper": {
    "materialThermal": {
      "property": "Cellulose Auto-Ignition Point & Toxic Ink Outgassing",
      "threshold": "Ignition Temperature 451°F (233°C); Thermal Degradation ~300°F",
      "details": "Dry unbound cellulose desiccates rapidly in oven air. Synthetic adhesives, mineral oil printing inks, and recycled pulp fibers outgas toxic fumes and ignite."
    },
    "safetyStandard": {
      "organization": "CPSC / NFPA",
      "standard": "NFPA 96 / CPSC Guidelines",
      "citation": "Combustible fibrous paper and recycled packaging materials are classified as severe fire hazards in enclosed heating appliances."
    },
    "applianceSpecs": {
      "parameter": "Oven Convection & Radiant Thermal Exposure",
      "guideline": "Radiant heat from oven elements ignites dry paper packaging in minutes. Never reheat pizza in cardboard delivery boxes or use paper plates for baking."
    }
  },
  "paper-plates": {
    "materialThermal": {
      "property": "Cellulose Auto-Ignition Point & Toxic Ink Outgassing",
      "threshold": "Ignition Temperature 451°F (233°C); Thermal Degradation ~300°F",
      "details": "Dry unbound cellulose desiccates rapidly in oven air. Synthetic adhesives, mineral oil printing inks, and recycled pulp fibers outgas toxic fumes and ignite."
    },
    "safetyStandard": {
      "organization": "CPSC / NFPA",
      "standard": "NFPA 96 / CPSC Guidelines",
      "citation": "Combustible fibrous paper and recycled packaging materials are classified as severe fire hazards in enclosed heating appliances."
    },
    "applianceSpecs": {
      "parameter": "Oven Convection & Radiant Thermal Exposure",
      "guideline": "Radiant heat from oven elements ignites dry paper packaging in minutes. Never reheat pizza in cardboard delivery boxes or use paper plates for baking."
    }
  },
  "paper-towels": {
    "materialThermal": {
      "property": "Cellulose Auto-Ignition Point & Toxic Ink Outgassing",
      "threshold": "Ignition Temperature 451°F (233°C); Thermal Degradation ~300°F",
      "details": "Dry unbound cellulose desiccates rapidly in oven air. Synthetic adhesives, mineral oil printing inks, and recycled pulp fibers outgas toxic fumes and ignite."
    },
    "safetyStandard": {
      "organization": "CPSC / NFPA",
      "standard": "NFPA 96 / CPSC Guidelines",
      "citation": "Combustible fibrous paper and recycled packaging materials are classified as severe fire hazards in enclosed heating appliances."
    },
    "applianceSpecs": {
      "parameter": "Oven Convection & Radiant Thermal Exposure",
      "guideline": "Radiant heat from oven elements ignites dry paper packaging in minutes. Never reheat pizza in cardboard delivery boxes or use paper plates for baking."
    }
  },
  "tissue-paper": {
    "materialThermal": {
      "property": "Cellulose Auto-Ignition Point & Toxic Ink Outgassing",
      "threshold": "Ignition Temperature 451°F (233°C); Thermal Degradation ~300°F",
      "details": "Dry unbound cellulose desiccates rapidly in oven air. Synthetic adhesives, mineral oil printing inks, and recycled pulp fibers outgas toxic fumes and ignite."
    },
    "safetyStandard": {
      "organization": "CPSC / NFPA",
      "standard": "NFPA 96 / CPSC Guidelines",
      "citation": "Combustible fibrous paper and recycled packaging materials are classified as severe fire hazards in enclosed heating appliances."
    },
    "applianceSpecs": {
      "parameter": "Oven Convection & Radiant Thermal Exposure",
      "guideline": "Radiant heat from oven elements ignites dry paper packaging in minutes. Never reheat pizza in cardboard delivery boxes or use paper plates for baking."
    }
  },
  "paper-bags": {
    "materialThermal": {
      "property": "Cellulose Auto-Ignition Point & Toxic Ink Outgassing",
      "threshold": "Ignition Temperature 451°F (233°C); Thermal Degradation ~300°F",
      "details": "Dry unbound cellulose desiccates rapidly in oven air. Synthetic adhesives, mineral oil printing inks, and recycled pulp fibers outgas toxic fumes and ignite."
    },
    "safetyStandard": {
      "organization": "CPSC / NFPA",
      "standard": "NFPA 96 / CPSC Guidelines",
      "citation": "Combustible fibrous paper and recycled packaging materials are classified as severe fire hazards in enclosed heating appliances."
    },
    "applianceSpecs": {
      "parameter": "Oven Convection & Radiant Thermal Exposure",
      "guideline": "Radiant heat from oven elements ignites dry paper packaging in minutes. Never reheat pizza in cardboard delivery boxes or use paper plates for baking."
    }
  },
  "plastic-wrap": {
    "materialThermal": {
      "property": "Thermoplastic Melting Point & Heat Deflection",
      "threshold": "PE Melts at 220°F–240°F (105°C–115°C); PP Melts at 320°F (160°C)",
      "details": "Consumer food containers (polyethylene and polypropylene) lack cross-linked molecular thermal stability, softening and melting into food under oven heat."
    },
    "safetyStandard": {
      "organization": "FDA",
      "standard": "21 CFR § 177.1520",
      "citation": "Olefin polymers for food-contact use, prohibiting exposure to dry heat baking temperatures."
    },
    "applianceSpecs": {
      "parameter": "Oven Thermal Chamber Compatibility",
      "guideline": "Never place plastic wrap, storage bags, or plasticware in the oven; radiant baking elements quickly liquefy plastics, generating toxic plasticizer fumes."
    }
  },
  "ziploc-in-oven": {
    "materialThermal": {
      "property": "Thermoplastic Melting Point & Heat Deflection",
      "threshold": "PE Melts at 220°F–240°F (105°C–115°C); PP Melts at 320°F (160°C)",
      "details": "Consumer food containers (polyethylene and polypropylene) lack cross-linked molecular thermal stability, softening and melting into food under oven heat."
    },
    "safetyStandard": {
      "organization": "FDA",
      "standard": "21 CFR § 177.1520",
      "citation": "Olefin polymers for food-contact use, prohibiting exposure to dry heat baking temperatures."
    },
    "applianceSpecs": {
      "parameter": "Oven Thermal Chamber Compatibility",
      "guideline": "Never place plastic wrap, storage bags, or plasticware in the oven; radiant baking elements quickly liquefy plastics, generating toxic plasticizer fumes."
    }
  },
  "plastic-cutting-board": {
    "materialThermal": {
      "property": "Thermoplastic Melting Point & Heat Deflection",
      "threshold": "PE Melts at 220°F–240°F (105°C–115°C); PP Melts at 320°F (160°C)",
      "details": "Consumer food containers (polyethylene and polypropylene) lack cross-linked molecular thermal stability, softening and melting into food under oven heat."
    },
    "safetyStandard": {
      "organization": "FDA",
      "standard": "21 CFR § 177.1520",
      "citation": "Olefin polymers for food-contact use, prohibiting exposure to dry heat baking temperatures."
    },
    "applianceSpecs": {
      "parameter": "Oven Thermal Chamber Compatibility",
      "guideline": "Never place plastic wrap, storage bags, or plasticware in the oven; radiant baking elements quickly liquefy plastics, generating toxic plasticizer fumes."
    }
  },
  "styrofoam-in-oven": {
    "materialThermal": {
      "property": "Polystyrene Glass Transition & Decomposition",
      "threshold": "Glass Transition 185°F–212°F (85°C–100°C); Thermal Decomposition >390°F",
      "details": "Expanded polystyrene (EPS) collapses immediately above boiling, liquefying into a sticky toxic polymer resin that releases benzene and styrene oligomers."
    },
    "safetyStandard": {
      "organization": "FDA",
      "standard": "21 CFR § 177.1640",
      "citation": "Polystyrene regulations restrict thermal food contact; prohibits high-heat oven exposure due to monomer migration."
    },
    "applianceSpecs": {
      "parameter": "Radiant Element Liquefaction Hazard",
      "guideline": "Placing styrofoam in an oven (300°F–450°F) causes catastrophic melting onto oven racks and permanent chemical contamination."
    }
  },
  "plastic-bags-in-oven": {
    "materialThermal": {
      "property": "Thermoplastic Melting Point & Heat Deflection",
      "threshold": "PE Melts at 220°F–240°F (105°C–115°C); PP Melts at 320°F (160°C)",
      "details": "Consumer food containers (polyethylene and polypropylene) lack cross-linked molecular thermal stability, softening and melting into food under oven heat."
    },
    "safetyStandard": {
      "organization": "FDA",
      "standard": "21 CFR § 177.1520",
      "citation": "Olefin polymers for food-contact use, prohibiting exposure to dry heat baking temperatures."
    },
    "applianceSpecs": {
      "parameter": "Oven Thermal Chamber Compatibility",
      "guideline": "Never place plastic wrap, storage bags, or plasticware in the oven; radiant baking elements quickly liquefy plastics, generating toxic plasticizer fumes."
    }
  },
  "glass-dish": {
    "materialThermal": {
      "property": "Vitrified Glaze Thermal Endurance",
      "threshold": "Continuous Service 450°F–500°F (232°C–260°C); Thermal Shock ΔT ~180°F",
      "details": "High-fired glazed ceramic and stoneware distribute conductive heat evenly; porous unglazed undersides can absorb water and crack if heated rapidly."
    },
    "safetyStandard": {
      "organization": "FDA",
      "standard": "Compliance Policy Guide Sec. 545.400 / 545.450",
      "citation": "Safety standards for ceramicware food-contact surfaces and heavy metal leaching under heat."
    },
    "applianceSpecs": {
      "parameter": "Slow Thermal Ramp Convection",
      "guideline": "Ensure ceramic cookware is labeled oven-safe; avoid transitioning directly from freezer to preheated 400°F oven to prevent thermal cleavage."
    }
  },
  "pyrex": {
    "materialThermal": {
      "property": "Tempered Glass Thermal Stress Limit",
      "threshold": "Continuous Rating up to 450°F (232°C); Thermal Shock ΔT ~300°F (Borosilicate)",
      "details": "Tempered borosilicate glass tolerates uniform baking heat up to 450°F, but modern tempered soda-lime Pyrex shatters if placed on wet countertops or heated dry."
    },
    "safetyStandard": {
      "organization": "ASTM / CPSC",
      "standard": "ASTM C1036 / CPSC Cookware Safety Alerts",
      "citation": "Performance specifications for tempered glass bakeware subjected to thermal cycling."
    },
    "applianceSpecs": {
      "parameter": "Preheated Oven Requirement & Quench Prevention",
      "guideline": "Always fully preheat the oven before inserting glassware (intense direct preheat radiant elements cause hotspots); always place on a dry cloth or trivet."
    }
  },
  "cast-iron-oven": {
    "materialThermal": {
      "property": "Cast Iron Melting Point & Seasoning Polymerization",
      "threshold": "Melting Point >2,000°F (1,093°C); Seasoning Stripping >500°F",
      "details": "Heavy gray cast iron holds immense thermal mass and endures extreme temperatures; sustained exposure >500°F can vaporize polymer seasoning oil layers."
    },
    "safetyStandard": {
      "organization": "FDA",
      "standard": "21 CFR § 175.300 / CPG 545.400",
      "citation": "Food-contact requirements for uncoated and vitrified enameled iron cookware."
    },
    "applianceSpecs": {
      "parameter": "Radiant & Conductive Heat Distribution",
      "guideline": "Ideal for high-heat roasting and bread baking up to 500°F; check that enameled Dutch oven lid knobs are stainless steel, not low-temp phenolic resin (rated 375°F)."
    }
  },
  "stainless-steel-oven": {
    "materialThermal": {
      "property": "Metallic Structural Service Limit",
      "threshold": "Stainless Steel >1,400°F (760°C); Aluminum >1,220°F (660°C)",
      "details": "Food-grade stainless steel and heavy-gauge aluminum conduct radiant oven heat rapidly without structural deformation or toxic chemical off-gassing."
    },
    "safetyStandard": {
      "organization": "NSF International",
      "standard": "NSF/ANSI Standard 51",
      "citation": "Food Equipment Materials specification for corrosion resistance and structural integrity under heat."
    },
    "applianceSpecs": {
      "parameter": "Oven Rack Air Circulation Clearance",
      "guideline": "Allow at least 1–2 inches of perimeter clearance around metal baking pans to maintain even convective airflow inside the oven cavity."
    }
  },
  "aluminum-pan-oven": {
    "materialThermal": {
      "property": "Metallic Structural Service Limit",
      "threshold": "Stainless Steel >1,400°F (760°C); Aluminum >1,220°F (660°C)",
      "details": "Food-grade stainless steel and heavy-gauge aluminum conduct radiant oven heat rapidly without structural deformation or toxic chemical off-gassing."
    },
    "safetyStandard": {
      "organization": "NSF International",
      "standard": "NSF/ANSI Standard 51",
      "citation": "Food Equipment Materials specification for corrosion resistance and structural integrity under heat."
    },
    "applianceSpecs": {
      "parameter": "Oven Rack Air Circulation Clearance",
      "guideline": "Allow at least 1–2 inches of perimeter clearance around metal baking pans to maintain even convective airflow inside the oven cavity."
    }
  },
  "ceramic-dish": {
    "materialThermal": {
      "property": "Vitrified Glaze Thermal Endurance",
      "threshold": "Continuous Service 450°F–500°F (232°C–260°C); Thermal Shock ΔT ~180°F",
      "details": "High-fired glazed ceramic and stoneware distribute conductive heat evenly; porous unglazed undersides can absorb water and crack if heated rapidly."
    },
    "safetyStandard": {
      "organization": "FDA",
      "standard": "Compliance Policy Guide Sec. 545.400 / 545.450",
      "citation": "Safety standards for ceramicware food-contact surfaces and heavy metal leaching under heat."
    },
    "applianceSpecs": {
      "parameter": "Slow Thermal Ramp Convection",
      "guideline": "Ensure ceramic cookware is labeled oven-safe; avoid transitioning directly from freezer to preheated 400°F oven to prevent thermal cleavage."
    }
  },
  "stoneware": {
    "materialThermal": {
      "property": "Vitrified Glaze Thermal Endurance",
      "threshold": "Continuous Service 450°F–500°F (232°C–260°C); Thermal Shock ΔT ~180°F",
      "details": "High-fired glazed ceramic and stoneware distribute conductive heat evenly; porous unglazed undersides can absorb water and crack if heated rapidly."
    },
    "safetyStandard": {
      "organization": "FDA",
      "standard": "Compliance Policy Guide Sec. 545.400 / 545.450",
      "citation": "Safety standards for ceramicware food-contact surfaces and heavy metal leaching under heat."
    },
    "applianceSpecs": {
      "parameter": "Slow Thermal Ramp Convection",
      "guideline": "Ensure ceramic cookware is labeled oven-safe; avoid transitioning directly from freezer to preheated 400°F oven to prevent thermal cleavage."
    }
  },
  "enameled-dutch-oven": {
    "materialThermal": {
      "property": "Cast Iron Melting Point & Seasoning Polymerization",
      "threshold": "Melting Point >2,000°F (1,093°C); Seasoning Stripping >500°F",
      "details": "Heavy gray cast iron holds immense thermal mass and endures extreme temperatures; sustained exposure >500°F can vaporize polymer seasoning oil layers."
    },
    "safetyStandard": {
      "organization": "FDA",
      "standard": "21 CFR § 175.300 / CPG 545.400",
      "citation": "Food-contact requirements for uncoated and vitrified enameled iron cookware."
    },
    "applianceSpecs": {
      "parameter": "Radiant & Conductive Heat Distribution",
      "guideline": "Ideal for high-heat roasting and bread baking up to 500°F; check that enameled Dutch oven lid knobs are stainless steel, not low-temp phenolic resin (rated 375°F)."
    }
  },
  "copper-pan-oven": {
    "materialThermal": {
      "property": "Metallic Structural Service Limit",
      "threshold": "Stainless Steel >1,400°F (760°C); Aluminum >1,220°F (660°C)",
      "details": "Food-grade stainless steel and heavy-gauge aluminum conduct radiant oven heat rapidly without structural deformation or toxic chemical off-gassing."
    },
    "safetyStandard": {
      "organization": "NSF International",
      "standard": "NSF/ANSI Standard 51",
      "citation": "Food Equipment Materials specification for corrosion resistance and structural integrity under heat."
    },
    "applianceSpecs": {
      "parameter": "Oven Rack Air Circulation Clearance",
      "guideline": "Allow at least 1–2 inches of perimeter clearance around metal baking pans to maintain even convective airflow inside the oven cavity."
    }
  },
  "non-stick-oven": {
    "materialThermal": {
      "property": "Polytetrafluoroethylene (PTFE) Thermal Degradation",
      "threshold": "Thermal Degradation >500°F (260°C); Pyrolysis >660°F (350°C)",
      "details": "PTFE non-stick coatings break down above 500°F, releasing toxic fluoropolymer particulate fumes that cause polymer fume fever ('Teflon flu')."
    },
    "safetyStandard": {
      "organization": "FDA",
      "standard": "21 CFR § 177.1550",
      "citation": "Perfluorocarbon resins used as food-contact surfaces; specifying maximum continuous operating temperatures."
    },
    "applianceSpecs": {
      "parameter": "Baking Temperature Limit & Broiler Prohibition",
      "guideline": "Keep non-stick pans below 450°F in standard baking modes; never use under the high-temperature broiler (500°F–550°F)."
    }
  },
  "pizza-box": {
    "materialThermal": {
      "property": "Cellulose Auto-Ignition Point & Toxic Ink Outgassing",
      "threshold": "Ignition Temperature 451°F (233°C); Thermal Degradation ~300°F",
      "details": "Dry unbound cellulose desiccates rapidly in oven air. Synthetic adhesives, mineral oil printing inks, and recycled pulp fibers outgas toxic fumes and ignite."
    },
    "safetyStandard": {
      "organization": "CPSC / NFPA",
      "standard": "NFPA 96 / CPSC Guidelines",
      "citation": "Combustible fibrous paper and recycled packaging materials are classified as severe fire hazards in enclosed heating appliances."
    },
    "applianceSpecs": {
      "parameter": "Oven Convection & Radiant Thermal Exposure",
      "guideline": "Radiant heat from oven elements ignites dry paper packaging in minutes. Never reheat pizza in cardboard delivery boxes or use paper plates for baking."
    }
  },
  "frozen-pizza-directly": {
    "materialThermal": {
      "property": "Microbiological Lethality Core Temperature",
      "threshold": "Pathogen Lethality Internal Core: 165°F (73.9°C)",
      "details": "Radiant and convective heat must penetrate food to achieve complete microbial inactivation of Salmonella, Listeria, and vegetative pathogens."
    },
    "safetyStandard": {
      "organization": "USDA FSIS / FDA",
      "standard": "FDA Food Code 2022 § 3-401.11 / USDA FSIS Guidelines",
      "citation": "Mandatory internal cooking temperatures for food safety and pathogen elimination."
    },
    "applianceSpecs": {
      "parameter": "Oven Thermal Core Verification",
      "guideline": "Bake at 350°F–400°F; always verify internal core doneness with a calibrated digital food thermometer inserted into the thickest portion."
    }
  },
  "corningware": {
    "materialThermal": {
      "property": "Microbiological Lethality Core Temperature",
      "threshold": "Pathogen Lethality Internal Core: 165°F (73.9°C)",
      "details": "Radiant and convective heat must penetrate food to achieve complete microbial inactivation of Salmonella, Listeria, and vegetative pathogens."
    },
    "safetyStandard": {
      "organization": "USDA FSIS / FDA",
      "standard": "FDA Food Code 2022 § 3-401.11 / USDA FSIS Guidelines",
      "citation": "Mandatory internal cooking temperatures for food safety and pathogen elimination."
    },
    "applianceSpecs": {
      "parameter": "Oven Thermal Core Verification",
      "guideline": "Bake at 350°F–400°F; always verify internal core doneness with a calibrated digital food thermometer inserted into the thickest portion."
    }
  },
  "le-creuset": {
    "materialThermal": {
      "property": "Microbiological Lethality Core Temperature",
      "threshold": "Pathogen Lethality Internal Core: 165°F (73.9°C)",
      "details": "Radiant and convective heat must penetrate food to achieve complete microbial inactivation of Salmonella, Listeria, and vegetative pathogens."
    },
    "safetyStandard": {
      "organization": "USDA FSIS / FDA",
      "standard": "FDA Food Code 2022 § 3-401.11 / USDA FSIS Guidelines",
      "citation": "Mandatory internal cooking temperatures for food safety and pathogen elimination."
    },
    "applianceSpecs": {
      "parameter": "Oven Thermal Core Verification",
      "guideline": "Bake at 350°F–400°F; always verify internal core doneness with a calibrated digital food thermometer inserted into the thickest portion."
    }
  },
  "pampered-chef-stoneware": {
    "materialThermal": {
      "property": "Vitrified Glaze Thermal Endurance",
      "threshold": "Continuous Service 450°F–500°F (232°C–260°C); Thermal Shock ΔT ~180°F",
      "details": "High-fired glazed ceramic and stoneware distribute conductive heat evenly; porous unglazed undersides can absorb water and crack if heated rapidly."
    },
    "safetyStandard": {
      "organization": "FDA",
      "standard": "Compliance Policy Guide Sec. 545.400 / 545.450",
      "citation": "Safety standards for ceramicware food-contact surfaces and heavy metal leaching under heat."
    },
    "applianceSpecs": {
      "parameter": "Slow Thermal Ramp Convection",
      "guideline": "Ensure ceramic cookware is labeled oven-safe; avoid transitioning directly from freezer to preheated 400°F oven to prevent thermal cleavage."
    }
  },
  "silicone-molds": {
    "materialThermal": {
      "property": "Continuous Thermal Service Range",
      "threshold": "-40°F to 450°F–500°F (-40°C to 232°C–260°C)",
      "details": "Platinum-cured food-grade silicone retains flexibility and inertness up to 450°F; direct contact with open flames or heating coils causes charring."
    },
    "safetyStandard": {
      "organization": "FDA",
      "standard": "21 CFR § 177.2600",
      "citation": "Rubber articles intended for repeated use in contact with food."
    },
    "applianceSpecs": {
      "parameter": "Radiant Coil Clearance",
      "guideline": "Safe for standard baking up to 425°F–450°F; always place on a supporting metal baking sheet and avoid direct broiler heating."
    }
  },
  "bamboo-skewers": {
    "materialThermal": {
      "property": "Cellulose Ignition Point & Delamination",
      "threshold": "Ignition Temperature 400°F–450°F (204°C–232°C); Glue Failure >140°F",
      "details": "Dry convective heat desiccates natural wood pores, warping grain, splitting glued joints, and charring cellulose fibers."
    },
    "safetyStandard": {
      "organization": "FDA / USDA",
      "standard": "USDA FSIS Skewer Advisory",
      "citation": "Guidelines on pre-soaking wooden skewers to mitigate dry thermal ignition hazards in ovens."
    },
    "applianceSpecs": {
      "parameter": "Desorption & Fire Prevention",
      "guideline": "Never bake on wooden cutting boards. Soak wooden skewers in water for at least 30 minutes before baking to prevent embering."
    }
  },
  "carbon-steel-pan": {
    "materialThermal": {
      "property": "Microbiological Lethality Core Temperature",
      "threshold": "Pathogen Lethality Internal Core: 165°F (73.9°C)",
      "details": "Radiant and convective heat must penetrate food to achieve complete microbial inactivation of Salmonella, Listeria, and vegetative pathogens."
    },
    "safetyStandard": {
      "organization": "USDA FSIS / FDA",
      "standard": "FDA Food Code 2022 § 3-401.11 / USDA FSIS Guidelines",
      "citation": "Mandatory internal cooking temperatures for food safety and pathogen elimination."
    },
    "applianceSpecs": {
      "parameter": "Oven Thermal Core Verification",
      "guideline": "Bake at 350°F–400°F; always verify internal core doneness with a calibrated digital food thermometer inserted into the thickest portion."
    }
  },
  "non-stick-baking-sheet": {
    "materialThermal": {
      "property": "Polytetrafluoroethylene (PTFE) Thermal Degradation",
      "threshold": "Thermal Degradation >500°F (260°C); Pyrolysis >660°F (350°C)",
      "details": "PTFE non-stick coatings break down above 500°F, releasing toxic fluoropolymer particulate fumes that cause polymer fume fever ('Teflon flu')."
    },
    "safetyStandard": {
      "organization": "FDA",
      "standard": "21 CFR § 177.1550",
      "citation": "Perfluorocarbon resins used as food-contact surfaces; specifying maximum continuous operating temperatures."
    },
    "applianceSpecs": {
      "parameter": "Baking Temperature Limit & Broiler Prohibition",
      "guideline": "Keep non-stick pans below 450°F in standard baking modes; never use under the high-temperature broiler (500°F–550°F)."
    }
  },
  "aluminum-baking-sheet": {
    "materialThermal": {
      "property": "Metallic Structural Service Limit",
      "threshold": "Stainless Steel >1,400°F (760°C); Aluminum >1,220°F (660°C)",
      "details": "Food-grade stainless steel and heavy-gauge aluminum conduct radiant oven heat rapidly without structural deformation or toxic chemical off-gassing."
    },
    "safetyStandard": {
      "organization": "NSF International",
      "standard": "NSF/ANSI Standard 51",
      "citation": "Food Equipment Materials specification for corrosion resistance and structural integrity under heat."
    },
    "applianceSpecs": {
      "parameter": "Oven Rack Air Circulation Clearance",
      "guideline": "Allow at least 1–2 inches of perimeter clearance around metal baking pans to maintain even convective airflow inside the oven cavity."
    }
  },
  "terracotta-pots": {
    "materialThermal": {
      "property": "Microbiological Lethality Core Temperature",
      "threshold": "Pathogen Lethality Internal Core: 165°F (73.9°C)",
      "details": "Radiant and convective heat must penetrate food to achieve complete microbial inactivation of Salmonella, Listeria, and vegetative pathogens."
    },
    "safetyStandard": {
      "organization": "USDA FSIS / FDA",
      "standard": "FDA Food Code 2022 § 3-401.11 / USDA FSIS Guidelines",
      "citation": "Mandatory internal cooking temperatures for food safety and pathogen elimination."
    },
    "applianceSpecs": {
      "parameter": "Oven Thermal Core Verification",
      "guideline": "Bake at 350°F–400°F; always verify internal core doneness with a calibrated digital food thermometer inserted into the thickest portion."
    }
  },
  "metal-skewers": {
    "materialThermal": {
      "property": "Cellulose Ignition Point & Delamination",
      "threshold": "Ignition Temperature 400°F–450°F (204°C–232°C); Glue Failure >140°F",
      "details": "Dry convective heat desiccates natural wood pores, warping grain, splitting glued joints, and charring cellulose fibers."
    },
    "safetyStandard": {
      "organization": "FDA / USDA",
      "standard": "USDA FSIS Skewer Advisory",
      "citation": "Guidelines on pre-soaking wooden skewers to mitigate dry thermal ignition hazards in ovens."
    },
    "applianceSpecs": {
      "parameter": "Desorption & Fire Prevention",
      "guideline": "Never bake on wooden cutting boards. Soak wooden skewers in water for at least 30 minutes before baking to prevent embering."
    }
  },
  "silicone-spatula": {
    "materialThermal": {
      "property": "Continuous Thermal Service Range",
      "threshold": "-40°F to 450°F–500°F (-40°C to 232°C–260°C)",
      "details": "Platinum-cured food-grade silicone retains flexibility and inertness up to 450°F; direct contact with open flames or heating coils causes charring."
    },
    "safetyStandard": {
      "organization": "FDA",
      "standard": "21 CFR § 177.2600",
      "citation": "Rubber articles intended for repeated use in contact with food."
    },
    "applianceSpecs": {
      "parameter": "Radiant Coil Clearance",
      "guideline": "Safe for standard baking up to 425°F–450°F; always place on a supporting metal baking sheet and avoid direct broiler heating."
    }
  },
  "plastic-handles": {
    "materialThermal": {
      "property": "Thermoplastic Melting Point & Heat Deflection",
      "threshold": "PE Melts at 220°F–240°F (105°C–115°C); PP Melts at 320°F (160°C)",
      "details": "Consumer food containers (polyethylene and polypropylene) lack cross-linked molecular thermal stability, softening and melting into food under oven heat."
    },
    "safetyStandard": {
      "organization": "FDA",
      "standard": "21 CFR § 177.1520",
      "citation": "Olefin polymers for food-contact use, prohibiting exposure to dry heat baking temperatures."
    },
    "applianceSpecs": {
      "parameter": "Oven Thermal Chamber Compatibility",
      "guideline": "Never place plastic wrap, storage bags, or plasticware in the oven; radiant baking elements quickly liquefy plastics, generating toxic plasticizer fumes."
    }
  },
  "wooden-skewers": {
    "materialThermal": {
      "property": "Cellulose Ignition Point & Delamination",
      "threshold": "Ignition Temperature 400°F–450°F (204°C–232°C); Glue Failure >140°F",
      "details": "Dry convective heat desiccates natural wood pores, warping grain, splitting glued joints, and charring cellulose fibers."
    },
    "safetyStandard": {
      "organization": "FDA / USDA",
      "standard": "USDA FSIS Skewer Advisory",
      "citation": "Guidelines on pre-soaking wooden skewers to mitigate dry thermal ignition hazards in ovens."
    },
    "applianceSpecs": {
      "parameter": "Desorption & Fire Prevention",
      "guideline": "Never bake on wooden cutting boards. Soak wooden skewers in water for at least 30 minutes before baking to prevent embering."
    }
  },
  "paper-baking-cups": {
    "materialThermal": {
      "property": "Microbiological Lethality Core Temperature",
      "threshold": "Pathogen Lethality Internal Core: 165°F (73.9°C)",
      "details": "Radiant and convective heat must penetrate food to achieve complete microbial inactivation of Salmonella, Listeria, and vegetative pathogens."
    },
    "safetyStandard": {
      "organization": "USDA FSIS / FDA",
      "standard": "FDA Food Code 2022 § 3-401.11 / USDA FSIS Guidelines",
      "citation": "Mandatory internal cooking temperatures for food safety and pathogen elimination."
    },
    "applianceSpecs": {
      "parameter": "Oven Thermal Core Verification",
      "guideline": "Bake at 350°F–400°F; always verify internal core doneness with a calibrated digital food thermometer inserted into the thickest portion."
    }
  },
  "foil-cupcake-liners": {
    "materialThermal": {
      "property": "Aluminum Melting Point & Acidic Dissolution",
      "threshold": "Melting Point 1,220°F (660°C); Acidic Pitting at pH <4.0",
      "details": "Pure aluminum foil is heat-impervious up to 1,200°F, but direct contact with acidic foods (tomatoes, vinegar) causes electrochemical dissolution and pinholes."
    },
    "safetyStandard": {
      "organization": "FDA",
      "standard": "21 CFR § 175.300 & § 182.274",
      "citation": "Substances generally recognized as safe (GRAS) for metallic food-contact applications."
    },
    "applianceSpecs": {
      "parameter": "Bottom Oven Liner Warning",
      "guideline": "Never line the bottom floor of an oven with foil; radiant elements reach temperatures high enough to melt foil onto the porcelain enamel, causing permanent damage."
    }
  },
  "cast-iron-skillet": {
    "materialThermal": {
      "property": "Cast Iron Melting Point & Seasoning Polymerization",
      "threshold": "Melting Point >2,000°F (1,093°C); Seasoning Stripping >500°F",
      "details": "Heavy gray cast iron holds immense thermal mass and endures extreme temperatures; sustained exposure >500°F can vaporize polymer seasoning oil layers."
    },
    "safetyStandard": {
      "organization": "FDA",
      "standard": "21 CFR § 175.300 / CPG 545.400",
      "citation": "Food-contact requirements for uncoated and vitrified enameled iron cookware."
    },
    "applianceSpecs": {
      "parameter": "Radiant & Conductive Heat Distribution",
      "guideline": "Ideal for high-heat roasting and bread baking up to 500°F; check that enameled Dutch oven lid knobs are stainless steel, not low-temp phenolic resin (rated 375°F)."
    }
  },
  "ceramic-mug": {
    "materialThermal": {
      "property": "Vitrified Glaze Thermal Endurance",
      "threshold": "Continuous Service 450°F–500°F (232°C–260°C); Thermal Shock ΔT ~180°F",
      "details": "High-fired glazed ceramic and stoneware distribute conductive heat evenly; porous unglazed undersides can absorb water and crack if heated rapidly."
    },
    "safetyStandard": {
      "organization": "FDA",
      "standard": "Compliance Policy Guide Sec. 545.400 / 545.450",
      "citation": "Safety standards for ceramicware food-contact surfaces and heavy metal leaching under heat."
    },
    "applianceSpecs": {
      "parameter": "Slow Thermal Ramp Convection",
      "guideline": "Ensure ceramic cookware is labeled oven-safe; avoid transitioning directly from freezer to preheated 400°F oven to prevent thermal cleavage."
    }
  },
  "china-plates": {
    "materialThermal": {
      "property": "Microbiological Lethality Core Temperature",
      "threshold": "Pathogen Lethality Internal Core: 165°F (73.9°C)",
      "details": "Radiant and convective heat must penetrate food to achieve complete microbial inactivation of Salmonella, Listeria, and vegetative pathogens."
    },
    "safetyStandard": {
      "organization": "USDA FSIS / FDA",
      "standard": "FDA Food Code 2022 § 3-401.11 / USDA FSIS Guidelines",
      "citation": "Mandatory internal cooking temperatures for food safety and pathogen elimination."
    },
    "applianceSpecs": {
      "parameter": "Oven Thermal Core Verification",
      "guideline": "Bake at 350°F–400°F; always verify internal core doneness with a calibrated digital food thermometer inserted into the thickest portion."
    }
  },
  "porcelain-ramekin": {
    "materialThermal": {
      "property": "Vitrified Glaze Thermal Endurance",
      "threshold": "Continuous Service 450°F–500°F (232°C–260°C); Thermal Shock ΔT ~180°F",
      "details": "High-fired glazed ceramic and stoneware distribute conductive heat evenly; porous unglazed undersides can absorb water and crack if heated rapidly."
    },
    "safetyStandard": {
      "organization": "FDA",
      "standard": "Compliance Policy Guide Sec. 545.400 / 545.450",
      "citation": "Safety standards for ceramicware food-contact surfaces and heavy metal leaching under heat."
    },
    "applianceSpecs": {
      "parameter": "Slow Thermal Ramp Convection",
      "guideline": "Ensure ceramic cookware is labeled oven-safe; avoid transitioning directly from freezer to preheated 400°F oven to prevent thermal cleavage."
    }
  },
  "bread-pan": {
    "materialThermal": {
      "property": "Microbiological Lethality Core Temperature",
      "threshold": "Pathogen Lethality Internal Core: 165°F (73.9°C)",
      "details": "Radiant and convective heat must penetrate food to achieve complete microbial inactivation of Salmonella, Listeria, and vegetative pathogens."
    },
    "safetyStandard": {
      "organization": "USDA FSIS / FDA",
      "standard": "FDA Food Code 2022 § 3-401.11 / USDA FSIS Guidelines",
      "citation": "Mandatory internal cooking temperatures for food safety and pathogen elimination."
    },
    "applianceSpecs": {
      "parameter": "Oven Thermal Core Verification",
      "guideline": "Bake at 350°F–400°F; always verify internal core doneness with a calibrated digital food thermometer inserted into the thickest portion."
    }
  },
  "springform-pan": {
    "materialThermal": {
      "property": "Metallic Structural Service Limit",
      "threshold": "Stainless Steel >1,400°F (760°C); Aluminum >1,220°F (660°C)",
      "details": "Food-grade stainless steel and heavy-gauge aluminum conduct radiant oven heat rapidly without structural deformation or toxic chemical off-gassing."
    },
    "safetyStandard": {
      "organization": "NSF International",
      "standard": "NSF/ANSI Standard 51",
      "citation": "Food Equipment Materials specification for corrosion resistance and structural integrity under heat."
    },
    "applianceSpecs": {
      "parameter": "Oven Rack Air Circulation Clearance",
      "guideline": "Allow at least 1–2 inches of perimeter clearance around metal baking pans to maintain even convective airflow inside the oven cavity."
    }
  },
  "bundt-pan": {
    "materialThermal": {
      "property": "Microbiological Lethality Core Temperature",
      "threshold": "Pathogen Lethality Internal Core: 165°F (73.9°C)",
      "details": "Radiant and convective heat must penetrate food to achieve complete microbial inactivation of Salmonella, Listeria, and vegetative pathogens."
    },
    "safetyStandard": {
      "organization": "USDA FSIS / FDA",
      "standard": "FDA Food Code 2022 § 3-401.11 / USDA FSIS Guidelines",
      "citation": "Mandatory internal cooking temperatures for food safety and pathogen elimination."
    },
    "applianceSpecs": {
      "parameter": "Oven Thermal Core Verification",
      "guideline": "Bake at 350°F–400°F; always verify internal core doneness with a calibrated digital food thermometer inserted into the thickest portion."
    }
  },
  "muffin-tin": {
    "materialThermal": {
      "property": "Metallic Structural Service Limit",
      "threshold": "Stainless Steel >1,400°F (760°C); Aluminum >1,220°F (660°C)",
      "details": "Food-grade stainless steel and heavy-gauge aluminum conduct radiant oven heat rapidly without structural deformation or toxic chemical off-gassing."
    },
    "safetyStandard": {
      "organization": "NSF International",
      "standard": "NSF/ANSI Standard 51",
      "citation": "Food Equipment Materials specification for corrosion resistance and structural integrity under heat."
    },
    "applianceSpecs": {
      "parameter": "Oven Rack Air Circulation Clearance",
      "guideline": "Allow at least 1–2 inches of perimeter clearance around metal baking pans to maintain even convective airflow inside the oven cavity."
    }
  },
  "cookie-cutters": {
    "materialThermal": {
      "property": "Microbiological Lethality Core Temperature",
      "threshold": "Pathogen Lethality Internal Core: 165°F (73.9°C)",
      "details": "Radiant and convective heat must penetrate food to achieve complete microbial inactivation of Salmonella, Listeria, and vegetative pathogens."
    },
    "safetyStandard": {
      "organization": "USDA FSIS / FDA",
      "standard": "FDA Food Code 2022 § 3-401.11 / USDA FSIS Guidelines",
      "citation": "Mandatory internal cooking temperatures for food safety and pathogen elimination."
    },
    "applianceSpecs": {
      "parameter": "Oven Thermal Core Verification",
      "guideline": "Bake at 350°F–400°F; always verify internal core doneness with a calibrated digital food thermometer inserted into the thickest portion."
    }
  },
  "pie-pan-metal": {
    "materialThermal": {
      "property": "Metallic Structural Service Limit",
      "threshold": "Stainless Steel >1,400°F (760°C); Aluminum >1,220°F (660°C)",
      "details": "Food-grade stainless steel and heavy-gauge aluminum conduct radiant oven heat rapidly without structural deformation or toxic chemical off-gassing."
    },
    "safetyStandard": {
      "organization": "NSF International",
      "standard": "NSF/ANSI Standard 51",
      "citation": "Food Equipment Materials specification for corrosion resistance and structural integrity under heat."
    },
    "applianceSpecs": {
      "parameter": "Oven Rack Air Circulation Clearance",
      "guideline": "Allow at least 1–2 inches of perimeter clearance around metal baking pans to maintain even convective airflow inside the oven cavity."
    }
  },
  "pie-pan-glass": {
    "materialThermal": {
      "property": "Vitrified Glaze Thermal Endurance",
      "threshold": "Continuous Service 450°F–500°F (232°C–260°C); Thermal Shock ΔT ~180°F",
      "details": "High-fired glazed ceramic and stoneware distribute conductive heat evenly; porous unglazed undersides can absorb water and crack if heated rapidly."
    },
    "safetyStandard": {
      "organization": "FDA",
      "standard": "Compliance Policy Guide Sec. 545.400 / 545.450",
      "citation": "Safety standards for ceramicware food-contact surfaces and heavy metal leaching under heat."
    },
    "applianceSpecs": {
      "parameter": "Slow Thermal Ramp Convection",
      "guideline": "Ensure ceramic cookware is labeled oven-safe; avoid transitioning directly from freezer to preheated 400°F oven to prevent thermal cleavage."
    }
  },
  "roasting-pan": {
    "materialThermal": {
      "property": "Metallic Structural Service Limit",
      "threshold": "Stainless Steel >1,400°F (760°C); Aluminum >1,220°F (660°C)",
      "details": "Food-grade stainless steel and heavy-gauge aluminum conduct radiant oven heat rapidly without structural deformation or toxic chemical off-gassing."
    },
    "safetyStandard": {
      "organization": "NSF International",
      "standard": "NSF/ANSI Standard 51",
      "citation": "Food Equipment Materials specification for corrosion resistance and structural integrity under heat."
    },
    "applianceSpecs": {
      "parameter": "Oven Rack Air Circulation Clearance",
      "guideline": "Allow at least 1–2 inches of perimeter clearance around metal baking pans to maintain even convective airflow inside the oven cavity."
    }
  },
  "cookie-sheet": {
    "materialThermal": {
      "property": "Microbiological Lethality Core Temperature",
      "threshold": "Pathogen Lethality Internal Core: 165°F (73.9°C)",
      "details": "Radiant and convective heat must penetrate food to achieve complete microbial inactivation of Salmonella, Listeria, and vegetative pathogens."
    },
    "safetyStandard": {
      "organization": "USDA FSIS / FDA",
      "standard": "FDA Food Code 2022 § 3-401.11 / USDA FSIS Guidelines",
      "citation": "Mandatory internal cooking temperatures for food safety and pathogen elimination."
    },
    "applianceSpecs": {
      "parameter": "Oven Thermal Core Verification",
      "guideline": "Bake at 350°F–400°F; always verify internal core doneness with a calibrated digital food thermometer inserted into the thickest portion."
    }
  },
  "dutch-oven": {
    "materialThermal": {
      "property": "Cast Iron Melting Point & Seasoning Polymerization",
      "threshold": "Melting Point >2,000°F (1,093°C); Seasoning Stripping >500°F",
      "details": "Heavy gray cast iron holds immense thermal mass and endures extreme temperatures; sustained exposure >500°F can vaporize polymer seasoning oil layers."
    },
    "safetyStandard": {
      "organization": "FDA",
      "standard": "21 CFR § 175.300 / CPG 545.400",
      "citation": "Food-contact requirements for uncoated and vitrified enameled iron cookware."
    },
    "applianceSpecs": {
      "parameter": "Radiant & Conductive Heat Distribution",
      "guideline": "Ideal for high-heat roasting and bread baking up to 500°F; check that enameled Dutch oven lid knobs are stainless steel, not low-temp phenolic resin (rated 375°F)."
    }
  },
  "enameled-cast-iron": {
    "materialThermal": {
      "property": "Cast Iron Melting Point & Seasoning Polymerization",
      "threshold": "Melting Point >2,000°F (1,093°C); Seasoning Stripping >500°F",
      "details": "Heavy gray cast iron holds immense thermal mass and endures extreme temperatures; sustained exposure >500°F can vaporize polymer seasoning oil layers."
    },
    "safetyStandard": {
      "organization": "FDA",
      "standard": "21 CFR § 175.300 / CPG 545.400",
      "citation": "Food-contact requirements for uncoated and vitrified enameled iron cookware."
    },
    "applianceSpecs": {
      "parameter": "Radiant & Conductive Heat Distribution",
      "guideline": "Ideal for high-heat roasting and bread baking up to 500°F; check that enameled Dutch oven lid knobs are stainless steel, not low-temp phenolic resin (rated 375°F)."
    }
  },
  "wire-rack": {
    "materialThermal": {
      "property": "Microbiological Lethality Core Temperature",
      "threshold": "Pathogen Lethality Internal Core: 165°F (73.9°C)",
      "details": "Radiant and convective heat must penetrate food to achieve complete microbial inactivation of Salmonella, Listeria, and vegetative pathogens."
    },
    "safetyStandard": {
      "organization": "USDA FSIS / FDA",
      "standard": "FDA Food Code 2022 § 3-401.11 / USDA FSIS Guidelines",
      "citation": "Mandatory internal cooking temperatures for food safety and pathogen elimination."
    },
    "applianceSpecs": {
      "parameter": "Oven Thermal Core Verification",
      "guideline": "Bake at 350°F–400°F; always verify internal core doneness with a calibrated digital food thermometer inserted into the thickest portion."
    }
  },
  "butter-paper": {
    "materialThermal": {
      "property": "Microbiological Lethality Core Temperature",
      "threshold": "Pathogen Lethality Internal Core: 165°F (73.9°C)",
      "details": "Radiant and convective heat must penetrate food to achieve complete microbial inactivation of Salmonella, Listeria, and vegetative pathogens."
    },
    "safetyStandard": {
      "organization": "USDA FSIS / FDA",
      "standard": "FDA Food Code 2022 § 3-401.11 / USDA FSIS Guidelines",
      "citation": "Mandatory internal cooking temperatures for food safety and pathogen elimination."
    },
    "applianceSpecs": {
      "parameter": "Oven Thermal Core Verification",
      "guideline": "Bake at 350°F–400°F; always verify internal core doneness with a calibrated digital food thermometer inserted into the thickest portion."
    }
  },
  "tin-foil": {
    "materialThermal": {
      "property": "Aluminum Melting Point & Acidic Dissolution",
      "threshold": "Melting Point 1,220°F (660°C); Acidic Pitting at pH <4.0",
      "details": "Pure aluminum foil is heat-impervious up to 1,200°F, but direct contact with acidic foods (tomatoes, vinegar) causes electrochemical dissolution and pinholes."
    },
    "safetyStandard": {
      "organization": "FDA",
      "standard": "21 CFR § 175.300 & § 182.274",
      "citation": "Substances generally recognized as safe (GRAS) for metallic food-contact applications."
    },
    "applianceSpecs": {
      "parameter": "Bottom Oven Liner Warning",
      "guideline": "Never line the bottom floor of an oven with foil; radiant elements reach temperatures high enough to melt foil onto the porcelain enamel, causing permanent damage."
    }
  },
  "butcher-block": {
    "materialThermal": {
      "property": "Microbiological Lethality Core Temperature",
      "threshold": "Pathogen Lethality Internal Core: 165°F (73.9°C)",
      "details": "Radiant and convective heat must penetrate food to achieve complete microbial inactivation of Salmonella, Listeria, and vegetative pathogens."
    },
    "safetyStandard": {
      "organization": "USDA FSIS / FDA",
      "standard": "FDA Food Code 2022 § 3-401.11 / USDA FSIS Guidelines",
      "citation": "Mandatory internal cooking temperatures for food safety and pathogen elimination."
    },
    "applianceSpecs": {
      "parameter": "Oven Thermal Core Verification",
      "guideline": "Bake at 350°F–400°F; always verify internal core doneness with a calibrated digital food thermometer inserted into the thickest portion."
    }
  },
  "wooden-cutting-board": {
    "materialThermal": {
      "property": "Cellulose Ignition Point & Delamination",
      "threshold": "Ignition Temperature 400°F–450°F (204°C–232°C); Glue Failure >140°F",
      "details": "Dry convective heat desiccates natural wood pores, warping grain, splitting glued joints, and charring cellulose fibers."
    },
    "safetyStandard": {
      "organization": "FDA / USDA",
      "standard": "USDA FSIS Skewer Advisory",
      "citation": "Guidelines on pre-soaking wooden skewers to mitigate dry thermal ignition hazards in ovens."
    },
    "applianceSpecs": {
      "parameter": "Desorption & Fire Prevention",
      "guideline": "Never bake on wooden cutting boards. Soak wooden skewers in water for at least 30 minutes before baking to prevent embering."
    }
  },
  "rubber-spatula": {
    "materialThermal": {
      "property": "Microbiological Lethality Core Temperature",
      "threshold": "Pathogen Lethality Internal Core: 165°F (73.9°C)",
      "details": "Radiant and convective heat must penetrate food to achieve complete microbial inactivation of Salmonella, Listeria, and vegetative pathogens."
    },
    "safetyStandard": {
      "organization": "USDA FSIS / FDA",
      "standard": "FDA Food Code 2022 § 3-401.11 / USDA FSIS Guidelines",
      "citation": "Mandatory internal cooking temperatures for food safety and pathogen elimination."
    },
    "applianceSpecs": {
      "parameter": "Oven Thermal Core Verification",
      "guideline": "Bake at 350°F–400°F; always verify internal core doneness with a calibrated digital food thermometer inserted into the thickest portion."
    }
  },
  "cotton-kitchen-twine": {
    "materialThermal": {
      "property": "Microbiological Lethality Core Temperature",
      "threshold": "Pathogen Lethality Internal Core: 165°F (73.9°C)",
      "details": "Radiant and convective heat must penetrate food to achieve complete microbial inactivation of Salmonella, Listeria, and vegetative pathogens."
    },
    "safetyStandard": {
      "organization": "USDA FSIS / FDA",
      "standard": "FDA Food Code 2022 § 3-401.11 / USDA FSIS Guidelines",
      "citation": "Mandatory internal cooking temperatures for food safety and pathogen elimination."
    },
    "applianceSpecs": {
      "parameter": "Oven Thermal Core Verification",
      "guideline": "Bake at 350°F–400°F; always verify internal core doneness with a calibrated digital food thermometer inserted into the thickest portion."
    }
  },
  "parchment-paper-sheets": {
    "materialThermal": {
      "property": "Microbiological Lethality Core Temperature",
      "threshold": "Pathogen Lethality Internal Core: 165°F (73.9°C)",
      "details": "Radiant and convective heat must penetrate food to achieve complete microbial inactivation of Salmonella, Listeria, and vegetative pathogens."
    },
    "safetyStandard": {
      "organization": "USDA FSIS / FDA",
      "standard": "FDA Food Code 2022 § 3-401.11 / USDA FSIS Guidelines",
      "citation": "Mandatory internal cooking temperatures for food safety and pathogen elimination."
    },
    "applianceSpecs": {
      "parameter": "Oven Thermal Core Verification",
      "guideline": "Bake at 350°F–400°F; always verify internal core doneness with a calibrated digital food thermometer inserted into the thickest portion."
    }
  },
  "baking-stone": {
    "materialThermal": {
      "property": "Microbiological Lethality Core Temperature",
      "threshold": "Pathogen Lethality Internal Core: 165°F (73.9°C)",
      "details": "Radiant and convective heat must penetrate food to achieve complete microbial inactivation of Salmonella, Listeria, and vegetative pathogens."
    },
    "safetyStandard": {
      "organization": "USDA FSIS / FDA",
      "standard": "FDA Food Code 2022 § 3-401.11 / USDA FSIS Guidelines",
      "citation": "Mandatory internal cooking temperatures for food safety and pathogen elimination."
    },
    "applianceSpecs": {
      "parameter": "Oven Thermal Core Verification",
      "guideline": "Bake at 350°F–400°F; always verify internal core doneness with a calibrated digital food thermometer inserted into the thickest portion."
    }
  },
  "steel-pan": {
    "materialThermal": {
      "property": "Microbiological Lethality Core Temperature",
      "threshold": "Pathogen Lethality Internal Core: 165°F (73.9°C)",
      "details": "Radiant and convective heat must penetrate food to achieve complete microbial inactivation of Salmonella, Listeria, and vegetative pathogens."
    },
    "safetyStandard": {
      "organization": "USDA FSIS / FDA",
      "standard": "FDA Food Code 2022 § 3-401.11 / USDA FSIS Guidelines",
      "citation": "Mandatory internal cooking temperatures for food safety and pathogen elimination."
    },
    "applianceSpecs": {
      "parameter": "Oven Thermal Core Verification",
      "guideline": "Bake at 350°F–400°F; always verify internal core doneness with a calibrated digital food thermometer inserted into the thickest portion."
    }
  },
  "bacon": {
    "materialThermal": {
      "property": "Microbiological Lethality Core Temperature",
      "threshold": "Pathogen Lethality Internal Core: 165°F (73.9°C)",
      "details": "Radiant and convective heat must penetrate food to achieve complete microbial inactivation of Salmonella, Listeria, and vegetative pathogens."
    },
    "safetyStandard": {
      "organization": "USDA FSIS / FDA",
      "standard": "FDA Food Code 2022 § 3-401.11 / USDA FSIS Guidelines",
      "citation": "Mandatory internal cooking temperatures for food safety and pathogen elimination."
    },
    "applianceSpecs": {
      "parameter": "Oven Thermal Core Verification",
      "guideline": "Bake at 350°F–400°F; always verify internal core doneness with a calibrated digital food thermometer inserted into the thickest portion."
    }
  },
  "sausage": {
    "materialThermal": {
      "property": "Microbiological Lethality Core Temperature",
      "threshold": "Pathogen Lethality Internal Core: 165°F (73.9°C)",
      "details": "Radiant and convective heat must penetrate food to achieve complete microbial inactivation of Salmonella, Listeria, and vegetative pathogens."
    },
    "safetyStandard": {
      "organization": "USDA FSIS / FDA",
      "standard": "FDA Food Code 2022 § 3-401.11 / USDA FSIS Guidelines",
      "citation": "Mandatory internal cooking temperatures for food safety and pathogen elimination."
    },
    "applianceSpecs": {
      "parameter": "Oven Thermal Core Verification",
      "guideline": "Bake at 350°F–400°F; always verify internal core doneness with a calibrated digital food thermometer inserted into the thickest portion."
    }
  },
  "pork-chop": {
    "materialThermal": {
      "property": "Microbiological Lethality Core Temperature",
      "threshold": "Pathogen Lethality Internal Core: 145°F (62.8°C) with 3-minute rest",
      "details": "Radiant and convective heat must penetrate food to achieve complete microbial inactivation of Salmonella, Listeria, and vegetative pathogens."
    },
    "safetyStandard": {
      "organization": "USDA FSIS",
      "standard": "9 CFR § 318.23 / USDA FSIS Cooking Temperature Guide",
      "citation": "Mandatory internal cooking temperatures for food safety and pathogen elimination."
    },
    "applianceSpecs": {
      "parameter": "Oven Thermal Core Verification",
      "guideline": "Bake at 350°F–400°F; always verify internal core doneness with a calibrated digital food thermometer inserted into the thickest portion."
    }
  },
  "beef-steak": {
    "materialThermal": {
      "property": "Microbiological Lethality Core Temperature",
      "threshold": "Pathogen Lethality Internal Core: 145°F (62.8°C) with 3-minute rest",
      "details": "Radiant and convective heat must penetrate food to achieve complete microbial inactivation of Salmonella, Listeria, and vegetative pathogens."
    },
    "safetyStandard": {
      "organization": "USDA FSIS",
      "standard": "9 CFR § 318.23 / USDA FSIS Cooking Temperature Guide",
      "citation": "Mandatory internal cooking temperatures for food safety and pathogen elimination."
    },
    "applianceSpecs": {
      "parameter": "Oven Thermal Core Verification",
      "guideline": "Bake at 350°F–400°F; always verify internal core doneness with a calibrated digital food thermometer inserted into the thickest portion."
    }
  },
  "ground-beef": {
    "materialThermal": {
      "property": "Microbiological Lethality Core Temperature",
      "threshold": "Pathogen Lethality Internal Core: 145°F (62.8°C) with 3-minute rest",
      "details": "Radiant and convective heat must penetrate food to achieve complete microbial inactivation of Salmonella, Listeria, and vegetative pathogens."
    },
    "safetyStandard": {
      "organization": "USDA FSIS",
      "standard": "9 CFR § 318.23 / USDA FSIS Cooking Temperature Guide",
      "citation": "Mandatory internal cooking temperatures for food safety and pathogen elimination."
    },
    "applianceSpecs": {
      "parameter": "Oven Thermal Core Verification",
      "guideline": "Bake at 350°F–400°F; always verify internal core doneness with a calibrated digital food thermometer inserted into the thickest portion."
    }
  },
  "salmon-fillet": {
    "materialThermal": {
      "property": "Microbiological Lethality Core Temperature",
      "threshold": "Pathogen Lethality Internal Core: 145°F (62.8°C)",
      "details": "Radiant and convective heat must penetrate food to achieve complete microbial inactivation of Salmonella, Listeria, and vegetative pathogens."
    },
    "safetyStandard": {
      "organization": "FDA",
      "standard": "FDA Food Code 2022 § 3-401.11(A)(1)(a)",
      "citation": "Mandatory internal cooking temperatures for food safety and pathogen elimination."
    },
    "applianceSpecs": {
      "parameter": "Oven Thermal Core Verification",
      "guideline": "Bake at 350°F–400°F; always verify internal core doneness with a calibrated digital food thermometer inserted into the thickest portion."
    }
  },
  "tuna-steak": {
    "materialThermal": {
      "property": "Microbiological Lethality Core Temperature",
      "threshold": "Pathogen Lethality Internal Core: 145°F (62.8°C) with 3-minute rest",
      "details": "Radiant and convective heat must penetrate food to achieve complete microbial inactivation of Salmonella, Listeria, and vegetative pathogens."
    },
    "safetyStandard": {
      "organization": "USDA FSIS",
      "standard": "9 CFR § 318.23 / USDA FSIS Cooking Temperature Guide",
      "citation": "Mandatory internal cooking temperatures for food safety and pathogen elimination."
    },
    "applianceSpecs": {
      "parameter": "Oven Thermal Core Verification",
      "guideline": "Bake at 350°F–400°F; always verify internal core doneness with a calibrated digital food thermometer inserted into the thickest portion."
    }
  },
  "shrimp": {
    "materialThermal": {
      "property": "Microbiological Lethality Core Temperature",
      "threshold": "Pathogen Lethality Internal Core: 165°F (73.9°C)",
      "details": "Radiant and convective heat must penetrate food to achieve complete microbial inactivation of Salmonella, Listeria, and vegetative pathogens."
    },
    "safetyStandard": {
      "organization": "USDA FSIS / FDA",
      "standard": "FDA Food Code 2022 § 3-401.11 / USDA FSIS Guidelines",
      "citation": "Mandatory internal cooking temperatures for food safety and pathogen elimination."
    },
    "applianceSpecs": {
      "parameter": "Oven Thermal Core Verification",
      "guideline": "Bake at 350°F–400°F; always verify internal core doneness with a calibrated digital food thermometer inserted into the thickest portion."
    }
  },
  "lobster-tail": {
    "materialThermal": {
      "property": "Microbiological Lethality Core Temperature",
      "threshold": "Pathogen Lethality Internal Core: 165°F (73.9°C)",
      "details": "Radiant and convective heat must penetrate food to achieve complete microbial inactivation of Salmonella, Listeria, and vegetative pathogens."
    },
    "safetyStandard": {
      "organization": "USDA FSIS / FDA",
      "standard": "FDA Food Code 2022 § 3-401.11 / USDA FSIS Guidelines",
      "citation": "Mandatory internal cooking temperatures for food safety and pathogen elimination."
    },
    "applianceSpecs": {
      "parameter": "Oven Thermal Core Verification",
      "guideline": "Bake at 350°F–400°F; always verify internal core doneness with a calibrated digital food thermometer inserted into the thickest portion."
    }
  },
  "crab-legs": {
    "materialThermal": {
      "property": "Microbiological Lethality Core Temperature",
      "threshold": "Pathogen Lethality Internal Core: 165°F (73.9°C)",
      "details": "Radiant and convective heat must penetrate food to achieve complete microbial inactivation of Salmonella, Listeria, and vegetative pathogens."
    },
    "safetyStandard": {
      "organization": "USDA FSIS / FDA",
      "standard": "FDA Food Code 2022 § 3-401.11 / USDA FSIS Guidelines",
      "citation": "Mandatory internal cooking temperatures for food safety and pathogen elimination."
    },
    "applianceSpecs": {
      "parameter": "Oven Thermal Core Verification",
      "guideline": "Bake at 350°F–400°F; always verify internal core doneness with a calibrated digital food thermometer inserted into the thickest portion."
    }
  },
  "chicken-breast": {
    "materialThermal": {
      "property": "Microbiological Lethality Core Temperature",
      "threshold": "Pathogen Lethality Internal Core: 165°F (73.9°C)",
      "details": "Radiant and convective heat must penetrate food to achieve complete microbial inactivation of Salmonella, Listeria, and vegetative pathogens."
    },
    "safetyStandard": {
      "organization": "USDA FSIS / FDA",
      "standard": "FDA Food Code 2022 § 3-401.11 / USDA FSIS Guidelines",
      "citation": "Mandatory internal cooking temperatures for food safety and pathogen elimination."
    },
    "applianceSpecs": {
      "parameter": "Oven Thermal Core Verification",
      "guideline": "Bake at 350°F–400°F; always verify internal core doneness with a calibrated digital food thermometer inserted into the thickest portion."
    }
  },
  "chicken-wings": {
    "materialThermal": {
      "property": "Microbiological Lethality Core Temperature",
      "threshold": "Pathogen Lethality Internal Core: 165°F (73.9°C)",
      "details": "Radiant and convective heat must penetrate food to achieve complete microbial inactivation of Salmonella, Listeria, and vegetative pathogens."
    },
    "safetyStandard": {
      "organization": "USDA FSIS / FDA",
      "standard": "FDA Food Code 2022 § 3-401.11 / USDA FSIS Guidelines",
      "citation": "Mandatory internal cooking temperatures for food safety and pathogen elimination."
    },
    "applianceSpecs": {
      "parameter": "Oven Thermal Core Verification",
      "guideline": "Bake at 350°F–400°F; always verify internal core doneness with a calibrated digital food thermometer inserted into the thickest portion."
    }
  },
  "turkey-breast": {
    "materialThermal": {
      "property": "Microbiological Lethality Core Temperature",
      "threshold": "Pathogen Lethality Internal Core: 165°F (73.9°C)",
      "details": "Radiant and convective heat must penetrate food to achieve complete microbial inactivation of Salmonella, Listeria, and vegetative pathogens."
    },
    "safetyStandard": {
      "organization": "USDA FSIS / FDA",
      "standard": "FDA Food Code 2022 § 3-401.11 / USDA FSIS Guidelines",
      "citation": "Mandatory internal cooking temperatures for food safety and pathogen elimination."
    },
    "applianceSpecs": {
      "parameter": "Oven Thermal Core Verification",
      "guideline": "Bake at 350°F–400°F; always verify internal core doneness with a calibrated digital food thermometer inserted into the thickest portion."
    }
  },
  "duck-breast": {
    "materialThermal": {
      "property": "Microbiological Lethality Core Temperature",
      "threshold": "Pathogen Lethality Internal Core: 165°F (73.9°C)",
      "details": "Radiant and convective heat must penetrate food to achieve complete microbial inactivation of Salmonella, Listeria, and vegetative pathogens."
    },
    "safetyStandard": {
      "organization": "USDA FSIS / FDA",
      "standard": "FDA Food Code 2022 § 3-401.11 / USDA FSIS Guidelines",
      "citation": "Mandatory internal cooking temperatures for food safety and pathogen elimination."
    },
    "applianceSpecs": {
      "parameter": "Oven Thermal Core Verification",
      "guideline": "Bake at 350°F–400°F; always verify internal core doneness with a calibrated digital food thermometer inserted into the thickest portion."
    }
  },
  "egg": {
    "materialThermal": {
      "property": "Microbiological Lethality Core Temperature",
      "threshold": "Pathogen Lethality Internal Core: 165°F (73.9°C)",
      "details": "Radiant and convective heat must penetrate food to achieve complete microbial inactivation of Salmonella, Listeria, and vegetative pathogens."
    },
    "safetyStandard": {
      "organization": "USDA FSIS / FDA",
      "standard": "FDA Food Code 2022 § 3-401.11 / USDA FSIS Guidelines",
      "citation": "Mandatory internal cooking temperatures for food safety and pathogen elimination."
    },
    "applianceSpecs": {
      "parameter": "Oven Thermal Core Verification",
      "guideline": "Bake at 350°F–400°F; always verify internal core doneness with a calibrated digital food thermometer inserted into the thickest portion."
    }
  },
  "milk": {
    "materialThermal": {
      "property": "Microbiological Lethality Core Temperature",
      "threshold": "Pathogen Lethality Internal Core: 165°F (73.9°C)",
      "details": "Radiant and convective heat must penetrate food to achieve complete microbial inactivation of Salmonella, Listeria, and vegetative pathogens."
    },
    "safetyStandard": {
      "organization": "USDA FSIS / FDA",
      "standard": "FDA Food Code 2022 § 3-401.11 / USDA FSIS Guidelines",
      "citation": "Mandatory internal cooking temperatures for food safety and pathogen elimination."
    },
    "applianceSpecs": {
      "parameter": "Oven Thermal Core Verification",
      "guideline": "Bake at 350°F–400°F; always verify internal core doneness with a calibrated digital food thermometer inserted into the thickest portion."
    }
  },
  "butter": {
    "materialThermal": {
      "property": "Microbiological Lethality Core Temperature",
      "threshold": "Pathogen Lethality Internal Core: 165°F (73.9°C)",
      "details": "Radiant and convective heat must penetrate food to achieve complete microbial inactivation of Salmonella, Listeria, and vegetative pathogens."
    },
    "safetyStandard": {
      "organization": "USDA FSIS / FDA",
      "standard": "FDA Food Code 2022 § 3-401.11 / USDA FSIS Guidelines",
      "citation": "Mandatory internal cooking temperatures for food safety and pathogen elimination."
    },
    "applianceSpecs": {
      "parameter": "Oven Thermal Core Verification",
      "guideline": "Bake at 350°F–400°F; always verify internal core doneness with a calibrated digital food thermometer inserted into the thickest portion."
    }
  },
  "cheddar-cheese": {
    "materialThermal": {
      "property": "Microbiological Lethality Core Temperature",
      "threshold": "Pathogen Lethality Internal Core: 165°F (73.9°C)",
      "details": "Radiant and convective heat must penetrate food to achieve complete microbial inactivation of Salmonella, Listeria, and vegetative pathogens."
    },
    "safetyStandard": {
      "organization": "USDA FSIS / FDA",
      "standard": "FDA Food Code 2022 § 3-401.11 / USDA FSIS Guidelines",
      "citation": "Mandatory internal cooking temperatures for food safety and pathogen elimination."
    },
    "applianceSpecs": {
      "parameter": "Oven Thermal Core Verification",
      "guideline": "Bake at 350°F–400°F; always verify internal core doneness with a calibrated digital food thermometer inserted into the thickest portion."
    }
  },
  "mozzarella-cheese": {
    "materialThermal": {
      "property": "Microbiological Lethality Core Temperature",
      "threshold": "Pathogen Lethality Internal Core: 165°F (73.9°C)",
      "details": "Radiant and convective heat must penetrate food to achieve complete microbial inactivation of Salmonella, Listeria, and vegetative pathogens."
    },
    "safetyStandard": {
      "organization": "USDA FSIS / FDA",
      "standard": "FDA Food Code 2022 § 3-401.11 / USDA FSIS Guidelines",
      "citation": "Mandatory internal cooking temperatures for food safety and pathogen elimination."
    },
    "applianceSpecs": {
      "parameter": "Oven Thermal Core Verification",
      "guideline": "Bake at 350°F–400°F; always verify internal core doneness with a calibrated digital food thermometer inserted into the thickest portion."
    }
  },
  "cream-cheese": {
    "materialThermal": {
      "property": "Microbiological Lethality Core Temperature",
      "threshold": "Pathogen Lethality Internal Core: 165°F (73.9°C)",
      "details": "Radiant and convective heat must penetrate food to achieve complete microbial inactivation of Salmonella, Listeria, and vegetative pathogens."
    },
    "safetyStandard": {
      "organization": "USDA FSIS / FDA",
      "standard": "FDA Food Code 2022 § 3-401.11 / USDA FSIS Guidelines",
      "citation": "Mandatory internal cooking temperatures for food safety and pathogen elimination."
    },
    "applianceSpecs": {
      "parameter": "Oven Thermal Core Verification",
      "guideline": "Bake at 350°F–400°F; always verify internal core doneness with a calibrated digital food thermometer inserted into the thickest portion."
    }
  },
  "yogurt": {
    "materialThermal": {
      "property": "Microbiological Lethality Core Temperature",
      "threshold": "Pathogen Lethality Internal Core: 165°F (73.9°C)",
      "details": "Radiant and convective heat must penetrate food to achieve complete microbial inactivation of Salmonella, Listeria, and vegetative pathogens."
    },
    "safetyStandard": {
      "organization": "USDA FSIS / FDA",
      "standard": "FDA Food Code 2022 § 3-401.11 / USDA FSIS Guidelines",
      "citation": "Mandatory internal cooking temperatures for food safety and pathogen elimination."
    },
    "applianceSpecs": {
      "parameter": "Oven Thermal Core Verification",
      "guideline": "Bake at 350°F–400°F; always verify internal core doneness with a calibrated digital food thermometer inserted into the thickest portion."
    }
  },
  "heavy-cream": {
    "materialThermal": {
      "property": "Microbiological Lethality Core Temperature",
      "threshold": "Pathogen Lethality Internal Core: 165°F (73.9°C)",
      "details": "Radiant and convective heat must penetrate food to achieve complete microbial inactivation of Salmonella, Listeria, and vegetative pathogens."
    },
    "safetyStandard": {
      "organization": "USDA FSIS / FDA",
      "standard": "FDA Food Code 2022 § 3-401.11 / USDA FSIS Guidelines",
      "citation": "Mandatory internal cooking temperatures for food safety and pathogen elimination."
    },
    "applianceSpecs": {
      "parameter": "Oven Thermal Core Verification",
      "guideline": "Bake at 350°F–400°F; always verify internal core doneness with a calibrated digital food thermometer inserted into the thickest portion."
    }
  },
  "sour-cream": {
    "materialThermal": {
      "property": "Microbiological Lethality Core Temperature",
      "threshold": "Pathogen Lethality Internal Core: 165°F (73.9°C)",
      "details": "Radiant and convective heat must penetrate food to achieve complete microbial inactivation of Salmonella, Listeria, and vegetative pathogens."
    },
    "safetyStandard": {
      "organization": "USDA FSIS / FDA",
      "standard": "FDA Food Code 2022 § 3-401.11 / USDA FSIS Guidelines",
      "citation": "Mandatory internal cooking temperatures for food safety and pathogen elimination."
    },
    "applianceSpecs": {
      "parameter": "Oven Thermal Core Verification",
      "guideline": "Bake at 350°F–400°F; always verify internal core doneness with a calibrated digital food thermometer inserted into the thickest portion."
    }
  },
  "tofu": {
    "materialThermal": {
      "property": "Microbiological Lethality Core Temperature",
      "threshold": "Pathogen Lethality Internal Core: 165°F (73.9°C)",
      "details": "Radiant and convective heat must penetrate food to achieve complete microbial inactivation of Salmonella, Listeria, and vegetative pathogens."
    },
    "safetyStandard": {
      "organization": "USDA FSIS / FDA",
      "standard": "FDA Food Code 2022 § 3-401.11 / USDA FSIS Guidelines",
      "citation": "Mandatory internal cooking temperatures for food safety and pathogen elimination."
    },
    "applianceSpecs": {
      "parameter": "Oven Thermal Core Verification",
      "guideline": "Bake at 350°F–400°F; always verify internal core doneness with a calibrated digital food thermometer inserted into the thickest portion."
    }
  },
  "tempeh": {
    "materialThermal": {
      "property": "Microbiological Lethality Core Temperature",
      "threshold": "Pathogen Lethality Internal Core: 165°F (73.9°C)",
      "details": "Radiant and convective heat must penetrate food to achieve complete microbial inactivation of Salmonella, Listeria, and vegetative pathogens."
    },
    "safetyStandard": {
      "organization": "USDA FSIS / FDA",
      "standard": "FDA Food Code 2022 § 3-401.11 / USDA FSIS Guidelines",
      "citation": "Mandatory internal cooking temperatures for food safety and pathogen elimination."
    },
    "applianceSpecs": {
      "parameter": "Oven Thermal Core Verification",
      "guideline": "Bake at 350°F–400°F; always verify internal core doneness with a calibrated digital food thermometer inserted into the thickest portion."
    }
  },
  "apple": {
    "materialThermal": {
      "property": "Microbiological Lethality Core Temperature",
      "threshold": "Pathogen Lethality Internal Core: 165°F (73.9°C)",
      "details": "Radiant and convective heat must penetrate food to achieve complete microbial inactivation of Salmonella, Listeria, and vegetative pathogens."
    },
    "safetyStandard": {
      "organization": "USDA FSIS / FDA",
      "standard": "FDA Food Code 2022 § 3-401.11 / USDA FSIS Guidelines",
      "citation": "Mandatory internal cooking temperatures for food safety and pathogen elimination."
    },
    "applianceSpecs": {
      "parameter": "Oven Thermal Core Verification",
      "guideline": "Bake at 350°F–400°F; always verify internal core doneness with a calibrated digital food thermometer inserted into the thickest portion."
    }
  },
  "banana": {
    "materialThermal": {
      "property": "Microbiological Lethality Core Temperature",
      "threshold": "Pathogen Lethality Internal Core: 165°F (73.9°C)",
      "details": "Radiant and convective heat must penetrate food to achieve complete microbial inactivation of Salmonella, Listeria, and vegetative pathogens."
    },
    "safetyStandard": {
      "organization": "USDA FSIS / FDA",
      "standard": "FDA Food Code 2022 § 3-401.11 / USDA FSIS Guidelines",
      "citation": "Mandatory internal cooking temperatures for food safety and pathogen elimination."
    },
    "applianceSpecs": {
      "parameter": "Oven Thermal Core Verification",
      "guideline": "Bake at 350°F–400°F; always verify internal core doneness with a calibrated digital food thermometer inserted into the thickest portion."
    }
  },
  "orange": {
    "materialThermal": {
      "property": "Microbiological Lethality Core Temperature",
      "threshold": "Pathogen Lethality Internal Core: 165°F (73.9°C)",
      "details": "Radiant and convective heat must penetrate food to achieve complete microbial inactivation of Salmonella, Listeria, and vegetative pathogens."
    },
    "safetyStandard": {
      "organization": "USDA FSIS / FDA",
      "standard": "FDA Food Code 2022 § 3-401.11 / USDA FSIS Guidelines",
      "citation": "Mandatory internal cooking temperatures for food safety and pathogen elimination."
    },
    "applianceSpecs": {
      "parameter": "Oven Thermal Core Verification",
      "guideline": "Bake at 350°F–400°F; always verify internal core doneness with a calibrated digital food thermometer inserted into the thickest portion."
    }
  },
  "strawberry": {
    "materialThermal": {
      "property": "Microbiological Lethality Core Temperature",
      "threshold": "Pathogen Lethality Internal Core: 165°F (73.9°C)",
      "details": "Radiant and convective heat must penetrate food to achieve complete microbial inactivation of Salmonella, Listeria, and vegetative pathogens."
    },
    "safetyStandard": {
      "organization": "USDA FSIS / FDA",
      "standard": "FDA Food Code 2022 § 3-401.11 / USDA FSIS Guidelines",
      "citation": "Mandatory internal cooking temperatures for food safety and pathogen elimination."
    },
    "applianceSpecs": {
      "parameter": "Oven Thermal Core Verification",
      "guideline": "Bake at 350°F–400°F; always verify internal core doneness with a calibrated digital food thermometer inserted into the thickest portion."
    }
  },
  "blueberry": {
    "materialThermal": {
      "property": "Microbiological Lethality Core Temperature",
      "threshold": "Pathogen Lethality Internal Core: 165°F (73.9°C)",
      "details": "Radiant and convective heat must penetrate food to achieve complete microbial inactivation of Salmonella, Listeria, and vegetative pathogens."
    },
    "safetyStandard": {
      "organization": "USDA FSIS / FDA",
      "standard": "FDA Food Code 2022 § 3-401.11 / USDA FSIS Guidelines",
      "citation": "Mandatory internal cooking temperatures for food safety and pathogen elimination."
    },
    "applianceSpecs": {
      "parameter": "Oven Thermal Core Verification",
      "guideline": "Bake at 350°F–400°F; always verify internal core doneness with a calibrated digital food thermometer inserted into the thickest portion."
    }
  },
  "raspberry": {
    "materialThermal": {
      "property": "Microbiological Lethality Core Temperature",
      "threshold": "Pathogen Lethality Internal Core: 165°F (73.9°C)",
      "details": "Radiant and convective heat must penetrate food to achieve complete microbial inactivation of Salmonella, Listeria, and vegetative pathogens."
    },
    "safetyStandard": {
      "organization": "USDA FSIS / FDA",
      "standard": "FDA Food Code 2022 § 3-401.11 / USDA FSIS Guidelines",
      "citation": "Mandatory internal cooking temperatures for food safety and pathogen elimination."
    },
    "applianceSpecs": {
      "parameter": "Oven Thermal Core Verification",
      "guideline": "Bake at 350°F–400°F; always verify internal core doneness with a calibrated digital food thermometer inserted into the thickest portion."
    }
  },
  "blackberry": {
    "materialThermal": {
      "property": "Microbiological Lethality Core Temperature",
      "threshold": "Pathogen Lethality Internal Core: 165°F (73.9°C)",
      "details": "Radiant and convective heat must penetrate food to achieve complete microbial inactivation of Salmonella, Listeria, and vegetative pathogens."
    },
    "safetyStandard": {
      "organization": "USDA FSIS / FDA",
      "standard": "FDA Food Code 2022 § 3-401.11 / USDA FSIS Guidelines",
      "citation": "Mandatory internal cooking temperatures for food safety and pathogen elimination."
    },
    "applianceSpecs": {
      "parameter": "Oven Thermal Core Verification",
      "guideline": "Bake at 350°F–400°F; always verify internal core doneness with a calibrated digital food thermometer inserted into the thickest portion."
    }
  },
  "grape": {
    "materialThermal": {
      "property": "Microbiological Lethality Core Temperature",
      "threshold": "Pathogen Lethality Internal Core: 165°F (73.9°C)",
      "details": "Radiant and convective heat must penetrate food to achieve complete microbial inactivation of Salmonella, Listeria, and vegetative pathogens."
    },
    "safetyStandard": {
      "organization": "USDA FSIS / FDA",
      "standard": "FDA Food Code 2022 § 3-401.11 / USDA FSIS Guidelines",
      "citation": "Mandatory internal cooking temperatures for food safety and pathogen elimination."
    },
    "applianceSpecs": {
      "parameter": "Oven Thermal Core Verification",
      "guideline": "Bake at 350°F–400°F; always verify internal core doneness with a calibrated digital food thermometer inserted into the thickest portion."
    }
  },
  "watermelon": {
    "materialThermal": {
      "property": "Microbiological Lethality Core Temperature",
      "threshold": "Pathogen Lethality Internal Core: 165°F (73.9°C)",
      "details": "Radiant and convective heat must penetrate food to achieve complete microbial inactivation of Salmonella, Listeria, and vegetative pathogens."
    },
    "safetyStandard": {
      "organization": "USDA FSIS / FDA",
      "standard": "FDA Food Code 2022 § 3-401.11 / USDA FSIS Guidelines",
      "citation": "Mandatory internal cooking temperatures for food safety and pathogen elimination."
    },
    "applianceSpecs": {
      "parameter": "Oven Thermal Core Verification",
      "guideline": "Bake at 350°F–400°F; always verify internal core doneness with a calibrated digital food thermometer inserted into the thickest portion."
    }
  },
  "cantaloupe": {
    "materialThermal": {
      "property": "Microbiological Lethality Core Temperature",
      "threshold": "Pathogen Lethality Internal Core: 165°F (73.9°C)",
      "details": "Radiant and convective heat must penetrate food to achieve complete microbial inactivation of Salmonella, Listeria, and vegetative pathogens."
    },
    "safetyStandard": {
      "organization": "USDA FSIS / FDA",
      "standard": "FDA Food Code 2022 § 3-401.11 / USDA FSIS Guidelines",
      "citation": "Mandatory internal cooking temperatures for food safety and pathogen elimination."
    },
    "applianceSpecs": {
      "parameter": "Oven Thermal Core Verification",
      "guideline": "Bake at 350°F–400°F; always verify internal core doneness with a calibrated digital food thermometer inserted into the thickest portion."
    }
  },
  "honeydew": {
    "materialThermal": {
      "property": "Microbiological Lethality Core Temperature",
      "threshold": "Pathogen Lethality Internal Core: 165°F (73.9°C)",
      "details": "Radiant and convective heat must penetrate food to achieve complete microbial inactivation of Salmonella, Listeria, and vegetative pathogens."
    },
    "safetyStandard": {
      "organization": "USDA FSIS / FDA",
      "standard": "FDA Food Code 2022 § 3-401.11 / USDA FSIS Guidelines",
      "citation": "Mandatory internal cooking temperatures for food safety and pathogen elimination."
    },
    "applianceSpecs": {
      "parameter": "Oven Thermal Core Verification",
      "guideline": "Bake at 350°F–400°F; always verify internal core doneness with a calibrated digital food thermometer inserted into the thickest portion."
    }
  },
  "peach": {
    "materialThermal": {
      "property": "Microbiological Lethality Core Temperature",
      "threshold": "Pathogen Lethality Internal Core: 165°F (73.9°C)",
      "details": "Radiant and convective heat must penetrate food to achieve complete microbial inactivation of Salmonella, Listeria, and vegetative pathogens."
    },
    "safetyStandard": {
      "organization": "USDA FSIS / FDA",
      "standard": "FDA Food Code 2022 § 3-401.11 / USDA FSIS Guidelines",
      "citation": "Mandatory internal cooking temperatures for food safety and pathogen elimination."
    },
    "applianceSpecs": {
      "parameter": "Oven Thermal Core Verification",
      "guideline": "Bake at 350°F–400°F; always verify internal core doneness with a calibrated digital food thermometer inserted into the thickest portion."
    }
  },
  "plum": {
    "materialThermal": {
      "property": "Microbiological Lethality Core Temperature",
      "threshold": "Pathogen Lethality Internal Core: 165°F (73.9°C)",
      "details": "Radiant and convective heat must penetrate food to achieve complete microbial inactivation of Salmonella, Listeria, and vegetative pathogens."
    },
    "safetyStandard": {
      "organization": "USDA FSIS / FDA",
      "standard": "FDA Food Code 2022 § 3-401.11 / USDA FSIS Guidelines",
      "citation": "Mandatory internal cooking temperatures for food safety and pathogen elimination."
    },
    "applianceSpecs": {
      "parameter": "Oven Thermal Core Verification",
      "guideline": "Bake at 350°F–400°F; always verify internal core doneness with a calibrated digital food thermometer inserted into the thickest portion."
    }
  },
  "nectarine": {
    "materialThermal": {
      "property": "Microbiological Lethality Core Temperature",
      "threshold": "Pathogen Lethality Internal Core: 165°F (73.9°C)",
      "details": "Radiant and convective heat must penetrate food to achieve complete microbial inactivation of Salmonella, Listeria, and vegetative pathogens."
    },
    "safetyStandard": {
      "organization": "USDA FSIS / FDA",
      "standard": "FDA Food Code 2022 § 3-401.11 / USDA FSIS Guidelines",
      "citation": "Mandatory internal cooking temperatures for food safety and pathogen elimination."
    },
    "applianceSpecs": {
      "parameter": "Oven Thermal Core Verification",
      "guideline": "Bake at 350°F–400°F; always verify internal core doneness with a calibrated digital food thermometer inserted into the thickest portion."
    }
  },
  "cherry": {
    "materialThermal": {
      "property": "Microbiological Lethality Core Temperature",
      "threshold": "Pathogen Lethality Internal Core: 165°F (73.9°C)",
      "details": "Radiant and convective heat must penetrate food to achieve complete microbial inactivation of Salmonella, Listeria, and vegetative pathogens."
    },
    "safetyStandard": {
      "organization": "USDA FSIS / FDA",
      "standard": "FDA Food Code 2022 § 3-401.11 / USDA FSIS Guidelines",
      "citation": "Mandatory internal cooking temperatures for food safety and pathogen elimination."
    },
    "applianceSpecs": {
      "parameter": "Oven Thermal Core Verification",
      "guideline": "Bake at 350°F–400°F; always verify internal core doneness with a calibrated digital food thermometer inserted into the thickest portion."
    }
  },
  "mango": {
    "materialThermal": {
      "property": "Microbiological Lethality Core Temperature",
      "threshold": "Pathogen Lethality Internal Core: 165°F (73.9°C)",
      "details": "Radiant and convective heat must penetrate food to achieve complete microbial inactivation of Salmonella, Listeria, and vegetative pathogens."
    },
    "safetyStandard": {
      "organization": "USDA FSIS / FDA",
      "standard": "FDA Food Code 2022 § 3-401.11 / USDA FSIS Guidelines",
      "citation": "Mandatory internal cooking temperatures for food safety and pathogen elimination."
    },
    "applianceSpecs": {
      "parameter": "Oven Thermal Core Verification",
      "guideline": "Bake at 350°F–400°F; always verify internal core doneness with a calibrated digital food thermometer inserted into the thickest portion."
    }
  },
  "pineapple": {
    "materialThermal": {
      "property": "Microbiological Lethality Core Temperature",
      "threshold": "Pathogen Lethality Internal Core: 165°F (73.9°C)",
      "details": "Radiant and convective heat must penetrate food to achieve complete microbial inactivation of Salmonella, Listeria, and vegetative pathogens."
    },
    "safetyStandard": {
      "organization": "USDA FSIS / FDA",
      "standard": "FDA Food Code 2022 § 3-401.11 / USDA FSIS Guidelines",
      "citation": "Mandatory internal cooking temperatures for food safety and pathogen elimination."
    },
    "applianceSpecs": {
      "parameter": "Oven Thermal Core Verification",
      "guideline": "Bake at 350°F–400°F; always verify internal core doneness with a calibrated digital food thermometer inserted into the thickest portion."
    }
  },
  "avocado": {
    "materialThermal": {
      "property": "Microbiological Lethality Core Temperature",
      "threshold": "Pathogen Lethality Internal Core: 165°F (73.9°C)",
      "details": "Radiant and convective heat must penetrate food to achieve complete microbial inactivation of Salmonella, Listeria, and vegetative pathogens."
    },
    "safetyStandard": {
      "organization": "USDA FSIS / FDA",
      "standard": "FDA Food Code 2022 § 3-401.11 / USDA FSIS Guidelines",
      "citation": "Mandatory internal cooking temperatures for food safety and pathogen elimination."
    },
    "applianceSpecs": {
      "parameter": "Oven Thermal Core Verification",
      "guideline": "Bake at 350°F–400°F; always verify internal core doneness with a calibrated digital food thermometer inserted into the thickest portion."
    }
  },
  "tomato": {
    "materialThermal": {
      "property": "Microbiological Lethality Core Temperature",
      "threshold": "Pathogen Lethality Internal Core: 165°F (73.9°C)",
      "details": "Radiant and convective heat must penetrate food to achieve complete microbial inactivation of Salmonella, Listeria, and vegetative pathogens."
    },
    "safetyStandard": {
      "organization": "USDA FSIS / FDA",
      "standard": "FDA Food Code 2022 § 3-401.11 / USDA FSIS Guidelines",
      "citation": "Mandatory internal cooking temperatures for food safety and pathogen elimination."
    },
    "applianceSpecs": {
      "parameter": "Oven Thermal Core Verification",
      "guideline": "Bake at 350°F–400°F; always verify internal core doneness with a calibrated digital food thermometer inserted into the thickest portion."
    }
  },
  "cucumber": {
    "materialThermal": {
      "property": "Microbiological Lethality Core Temperature",
      "threshold": "Pathogen Lethality Internal Core: 165°F (73.9°C)",
      "details": "Radiant and convective heat must penetrate food to achieve complete microbial inactivation of Salmonella, Listeria, and vegetative pathogens."
    },
    "safetyStandard": {
      "organization": "USDA FSIS / FDA",
      "standard": "FDA Food Code 2022 § 3-401.11 / USDA FSIS Guidelines",
      "citation": "Mandatory internal cooking temperatures for food safety and pathogen elimination."
    },
    "applianceSpecs": {
      "parameter": "Oven Thermal Core Verification",
      "guideline": "Bake at 350°F–400°F; always verify internal core doneness with a calibrated digital food thermometer inserted into the thickest portion."
    }
  },
  "bell-pepper": {
    "materialThermal": {
      "property": "Microbiological Lethality Core Temperature",
      "threshold": "Pathogen Lethality Internal Core: 165°F (73.9°C)",
      "details": "Radiant and convective heat must penetrate food to achieve complete microbial inactivation of Salmonella, Listeria, and vegetative pathogens."
    },
    "safetyStandard": {
      "organization": "USDA FSIS / FDA",
      "standard": "FDA Food Code 2022 § 3-401.11 / USDA FSIS Guidelines",
      "citation": "Mandatory internal cooking temperatures for food safety and pathogen elimination."
    },
    "applianceSpecs": {
      "parameter": "Oven Thermal Core Verification",
      "guideline": "Bake at 350°F–400°F; always verify internal core doneness with a calibrated digital food thermometer inserted into the thickest portion."
    }
  },
  "spinach": {
    "materialThermal": {
      "property": "Microbiological Lethality Core Temperature",
      "threshold": "Pathogen Lethality Internal Core: 165°F (73.9°C)",
      "details": "Radiant and convective heat must penetrate food to achieve complete microbial inactivation of Salmonella, Listeria, and vegetative pathogens."
    },
    "safetyStandard": {
      "organization": "USDA FSIS / FDA",
      "standard": "FDA Food Code 2022 § 3-401.11 / USDA FSIS Guidelines",
      "citation": "Mandatory internal cooking temperatures for food safety and pathogen elimination."
    },
    "applianceSpecs": {
      "parameter": "Oven Thermal Core Verification",
      "guideline": "Bake at 350°F–400°F; always verify internal core doneness with a calibrated digital food thermometer inserted into the thickest portion."
    }
  },
  "lettuce": {
    "materialThermal": {
      "property": "Microbiological Lethality Core Temperature",
      "threshold": "Pathogen Lethality Internal Core: 165°F (73.9°C)",
      "details": "Radiant and convective heat must penetrate food to achieve complete microbial inactivation of Salmonella, Listeria, and vegetative pathogens."
    },
    "safetyStandard": {
      "organization": "USDA FSIS / FDA",
      "standard": "FDA Food Code 2022 § 3-401.11 / USDA FSIS Guidelines",
      "citation": "Mandatory internal cooking temperatures for food safety and pathogen elimination."
    },
    "applianceSpecs": {
      "parameter": "Oven Thermal Core Verification",
      "guideline": "Bake at 350°F–400°F; always verify internal core doneness with a calibrated digital food thermometer inserted into the thickest portion."
    }
  },
  "broccoli": {
    "materialThermal": {
      "property": "Microbiological Lethality Core Temperature",
      "threshold": "Pathogen Lethality Internal Core: 165°F (73.9°C)",
      "details": "Radiant and convective heat must penetrate food to achieve complete microbial inactivation of Salmonella, Listeria, and vegetative pathogens."
    },
    "safetyStandard": {
      "organization": "USDA FSIS / FDA",
      "standard": "FDA Food Code 2022 § 3-401.11 / USDA FSIS Guidelines",
      "citation": "Mandatory internal cooking temperatures for food safety and pathogen elimination."
    },
    "applianceSpecs": {
      "parameter": "Oven Thermal Core Verification",
      "guideline": "Bake at 350°F–400°F; always verify internal core doneness with a calibrated digital food thermometer inserted into the thickest portion."
    }
  },
  "brussels-sprouts": {
    "materialThermal": {
      "property": "Microbiological Lethality Core Temperature",
      "threshold": "Pathogen Lethality Internal Core: 165°F (73.9°C)",
      "details": "Radiant and convective heat must penetrate food to achieve complete microbial inactivation of Salmonella, Listeria, and vegetative pathogens."
    },
    "safetyStandard": {
      "organization": "USDA FSIS / FDA",
      "standard": "FDA Food Code 2022 § 3-401.11 / USDA FSIS Guidelines",
      "citation": "Mandatory internal cooking temperatures for food safety and pathogen elimination."
    },
    "applianceSpecs": {
      "parameter": "Oven Thermal Core Verification",
      "guideline": "Bake at 350°F–400°F; always verify internal core doneness with a calibrated digital food thermometer inserted into the thickest portion."
    }
  },
  "cabbage": {
    "materialThermal": {
      "property": "Microbiological Lethality Core Temperature",
      "threshold": "Pathogen Lethality Internal Core: 165°F (73.9°C)",
      "details": "Radiant and convective heat must penetrate food to achieve complete microbial inactivation of Salmonella, Listeria, and vegetative pathogens."
    },
    "safetyStandard": {
      "organization": "USDA FSIS / FDA",
      "standard": "FDA Food Code 2022 § 3-401.11 / USDA FSIS Guidelines",
      "citation": "Mandatory internal cooking temperatures for food safety and pathogen elimination."
    },
    "applianceSpecs": {
      "parameter": "Oven Thermal Core Verification",
      "guideline": "Bake at 350°F–400°F; always verify internal core doneness with a calibrated digital food thermometer inserted into the thickest portion."
    }
  },
  "kale": {
    "materialThermal": {
      "property": "Microbiological Lethality Core Temperature",
      "threshold": "Pathogen Lethality Internal Core: 165°F (73.9°C)",
      "details": "Radiant and convective heat must penetrate food to achieve complete microbial inactivation of Salmonella, Listeria, and vegetative pathogens."
    },
    "safetyStandard": {
      "organization": "USDA FSIS / FDA",
      "standard": "FDA Food Code 2022 § 3-401.11 / USDA FSIS Guidelines",
      "citation": "Mandatory internal cooking temperatures for food safety and pathogen elimination."
    },
    "applianceSpecs": {
      "parameter": "Oven Thermal Core Verification",
      "guideline": "Bake at 350°F–400°F; always verify internal core doneness with a calibrated digital food thermometer inserted into the thickest portion."
    }
  },
  "carrot": {
    "materialThermal": {
      "property": "Microbiological Lethality Core Temperature",
      "threshold": "Pathogen Lethality Internal Core: 165°F (73.9°C)",
      "details": "Radiant and convective heat must penetrate food to achieve complete microbial inactivation of Salmonella, Listeria, and vegetative pathogens."
    },
    "safetyStandard": {
      "organization": "USDA FSIS / FDA",
      "standard": "FDA Food Code 2022 § 3-401.11 / USDA FSIS Guidelines",
      "citation": "Mandatory internal cooking temperatures for food safety and pathogen elimination."
    },
    "applianceSpecs": {
      "parameter": "Oven Thermal Core Verification",
      "guideline": "Bake at 350°F–400°F; always verify internal core doneness with a calibrated digital food thermometer inserted into the thickest portion."
    }
  },
  "celery": {
    "materialThermal": {
      "property": "Microbiological Lethality Core Temperature",
      "threshold": "Pathogen Lethality Internal Core: 165°F (73.9°C)",
      "details": "Radiant and convective heat must penetrate food to achieve complete microbial inactivation of Salmonella, Listeria, and vegetative pathogens."
    },
    "safetyStandard": {
      "organization": "USDA FSIS / FDA",
      "standard": "FDA Food Code 2022 § 3-401.11 / USDA FSIS Guidelines",
      "citation": "Mandatory internal cooking temperatures for food safety and pathogen elimination."
    },
    "applianceSpecs": {
      "parameter": "Oven Thermal Core Verification",
      "guideline": "Bake at 350°F–400°F; always verify internal core doneness with a calibrated digital food thermometer inserted into the thickest portion."
    }
  },
  "onion": {
    "materialThermal": {
      "property": "Microbiological Lethality Core Temperature",
      "threshold": "Pathogen Lethality Internal Core: 165°F (73.9°C)",
      "details": "Radiant and convective heat must penetrate food to achieve complete microbial inactivation of Salmonella, Listeria, and vegetative pathogens."
    },
    "safetyStandard": {
      "organization": "USDA FSIS / FDA",
      "standard": "FDA Food Code 2022 § 3-401.11 / USDA FSIS Guidelines",
      "citation": "Mandatory internal cooking temperatures for food safety and pathogen elimination."
    },
    "applianceSpecs": {
      "parameter": "Oven Thermal Core Verification",
      "guideline": "Bake at 350°F–400°F; always verify internal core doneness with a calibrated digital food thermometer inserted into the thickest portion."
    }
  },
  "garlic": {
    "materialThermal": {
      "property": "Microbiological Lethality Core Temperature",
      "threshold": "Pathogen Lethality Internal Core: 165°F (73.9°C)",
      "details": "Radiant and convective heat must penetrate food to achieve complete microbial inactivation of Salmonella, Listeria, and vegetative pathogens."
    },
    "safetyStandard": {
      "organization": "USDA FSIS / FDA",
      "standard": "FDA Food Code 2022 § 3-401.11 / USDA FSIS Guidelines",
      "citation": "Mandatory internal cooking temperatures for food safety and pathogen elimination."
    },
    "applianceSpecs": {
      "parameter": "Oven Thermal Core Verification",
      "guideline": "Bake at 350°F–400°F; always verify internal core doneness with a calibrated digital food thermometer inserted into the thickest portion."
    }
  },
  "potato": {
    "materialThermal": {
      "property": "Microbiological Lethality Core Temperature",
      "threshold": "Pathogen Lethality Internal Core: 165°F (73.9°C)",
      "details": "Radiant and convective heat must penetrate food to achieve complete microbial inactivation of Salmonella, Listeria, and vegetative pathogens."
    },
    "safetyStandard": {
      "organization": "USDA FSIS / FDA",
      "standard": "FDA Food Code 2022 § 3-401.11 / USDA FSIS Guidelines",
      "citation": "Mandatory internal cooking temperatures for food safety and pathogen elimination."
    },
    "applianceSpecs": {
      "parameter": "Oven Thermal Core Verification",
      "guideline": "Bake at 350°F–400°F; always verify internal core doneness with a calibrated digital food thermometer inserted into the thickest portion."
    }
  },
  "sweet-potato": {
    "materialThermal": {
      "property": "Microbiological Lethality Core Temperature",
      "threshold": "Pathogen Lethality Internal Core: 165°F (73.9°C)",
      "details": "Radiant and convective heat must penetrate food to achieve complete microbial inactivation of Salmonella, Listeria, and vegetative pathogens."
    },
    "safetyStandard": {
      "organization": "USDA FSIS / FDA",
      "standard": "FDA Food Code 2022 § 3-401.11 / USDA FSIS Guidelines",
      "citation": "Mandatory internal cooking temperatures for food safety and pathogen elimination."
    },
    "applianceSpecs": {
      "parameter": "Oven Thermal Core Verification",
      "guideline": "Bake at 350°F–400°F; always verify internal core doneness with a calibrated digital food thermometer inserted into the thickest portion."
    }
  },
  "zucchini": {
    "materialThermal": {
      "property": "Microbiological Lethality Core Temperature",
      "threshold": "Pathogen Lethality Internal Core: 165°F (73.9°C)",
      "details": "Radiant and convective heat must penetrate food to achieve complete microbial inactivation of Salmonella, Listeria, and vegetative pathogens."
    },
    "safetyStandard": {
      "organization": "USDA FSIS / FDA",
      "standard": "FDA Food Code 2022 § 3-401.11 / USDA FSIS Guidelines",
      "citation": "Mandatory internal cooking temperatures for food safety and pathogen elimination."
    },
    "applianceSpecs": {
      "parameter": "Oven Thermal Core Verification",
      "guideline": "Bake at 350°F–400°F; always verify internal core doneness with a calibrated digital food thermometer inserted into the thickest portion."
    }
  },
  "yellow-squash": {
    "materialThermal": {
      "property": "Microbiological Lethality Core Temperature",
      "threshold": "Pathogen Lethality Internal Core: 165°F (73.9°C)",
      "details": "Radiant and convective heat must penetrate food to achieve complete microbial inactivation of Salmonella, Listeria, and vegetative pathogens."
    },
    "safetyStandard": {
      "organization": "USDA FSIS / FDA",
      "standard": "FDA Food Code 2022 § 3-401.11 / USDA FSIS Guidelines",
      "citation": "Mandatory internal cooking temperatures for food safety and pathogen elimination."
    },
    "applianceSpecs": {
      "parameter": "Oven Thermal Core Verification",
      "guideline": "Bake at 350°F–400°F; always verify internal core doneness with a calibrated digital food thermometer inserted into the thickest portion."
    }
  },
  "eggplant": {
    "materialThermal": {
      "property": "Microbiological Lethality Core Temperature",
      "threshold": "Pathogen Lethality Internal Core: 165°F (73.9°C)",
      "details": "Radiant and convective heat must penetrate food to achieve complete microbial inactivation of Salmonella, Listeria, and vegetative pathogens."
    },
    "safetyStandard": {
      "organization": "USDA FSIS / FDA",
      "standard": "FDA Food Code 2022 § 3-401.11 / USDA FSIS Guidelines",
      "citation": "Mandatory internal cooking temperatures for food safety and pathogen elimination."
    },
    "applianceSpecs": {
      "parameter": "Oven Thermal Core Verification",
      "guideline": "Bake at 350°F–400°F; always verify internal core doneness with a calibrated digital food thermometer inserted into the thickest portion."
    }
  },
  "asparagus": {
    "materialThermal": {
      "property": "Microbiological Lethality Core Temperature",
      "threshold": "Pathogen Lethality Internal Core: 165°F (73.9°C)",
      "details": "Radiant and convective heat must penetrate food to achieve complete microbial inactivation of Salmonella, Listeria, and vegetative pathogens."
    },
    "safetyStandard": {
      "organization": "USDA FSIS / FDA",
      "standard": "FDA Food Code 2022 § 3-401.11 / USDA FSIS Guidelines",
      "citation": "Mandatory internal cooking temperatures for food safety and pathogen elimination."
    },
    "applianceSpecs": {
      "parameter": "Oven Thermal Core Verification",
      "guideline": "Bake at 350°F–400°F; always verify internal core doneness with a calibrated digital food thermometer inserted into the thickest portion."
    }
  },
  "green-beans": {
    "materialThermal": {
      "property": "Microbiological Lethality Core Temperature",
      "threshold": "Pathogen Lethality Internal Core: 165°F (73.9°C)",
      "details": "Radiant and convective heat must penetrate food to achieve complete microbial inactivation of Salmonella, Listeria, and vegetative pathogens."
    },
    "safetyStandard": {
      "organization": "USDA FSIS / FDA",
      "standard": "FDA Food Code 2022 § 3-401.11 / USDA FSIS Guidelines",
      "citation": "Mandatory internal cooking temperatures for food safety and pathogen elimination."
    },
    "applianceSpecs": {
      "parameter": "Oven Thermal Core Verification",
      "guideline": "Bake at 350°F–400°F; always verify internal core doneness with a calibrated digital food thermometer inserted into the thickest portion."
    }
  },
  "peas": {
    "materialThermal": {
      "property": "Microbiological Lethality Core Temperature",
      "threshold": "Pathogen Lethality Internal Core: 165°F (73.9°C)",
      "details": "Radiant and convective heat must penetrate food to achieve complete microbial inactivation of Salmonella, Listeria, and vegetative pathogens."
    },
    "safetyStandard": {
      "organization": "USDA FSIS / FDA",
      "standard": "FDA Food Code 2022 § 3-401.11 / USDA FSIS Guidelines",
      "citation": "Mandatory internal cooking temperatures for food safety and pathogen elimination."
    },
    "applianceSpecs": {
      "parameter": "Oven Thermal Core Verification",
      "guideline": "Bake at 350°F–400°F; always verify internal core doneness with a calibrated digital food thermometer inserted into the thickest portion."
    }
  },
  "corn": {
    "materialThermal": {
      "property": "Microbiological Lethality Core Temperature",
      "threshold": "Pathogen Lethality Internal Core: 165°F (73.9°C)",
      "details": "Radiant and convective heat must penetrate food to achieve complete microbial inactivation of Salmonella, Listeria, and vegetative pathogens."
    },
    "safetyStandard": {
      "organization": "USDA FSIS / FDA",
      "standard": "FDA Food Code 2022 § 3-401.11 / USDA FSIS Guidelines",
      "citation": "Mandatory internal cooking temperatures for food safety and pathogen elimination."
    },
    "applianceSpecs": {
      "parameter": "Oven Thermal Core Verification",
      "guideline": "Bake at 350°F–400°F; always verify internal core doneness with a calibrated digital food thermometer inserted into the thickest portion."
    }
  },
  "mushroom": {
    "materialThermal": {
      "property": "Microbiological Lethality Core Temperature",
      "threshold": "Pathogen Lethality Internal Core: 165°F (73.9°C)",
      "details": "Radiant and convective heat must penetrate food to achieve complete microbial inactivation of Salmonella, Listeria, and vegetative pathogens."
    },
    "safetyStandard": {
      "organization": "USDA FSIS / FDA",
      "standard": "FDA Food Code 2022 § 3-401.11 / USDA FSIS Guidelines",
      "citation": "Mandatory internal cooking temperatures for food safety and pathogen elimination."
    },
    "applianceSpecs": {
      "parameter": "Oven Thermal Core Verification",
      "guideline": "Bake at 350°F–400°F; always verify internal core doneness with a calibrated digital food thermometer inserted into the thickest portion."
    }
  },
  "ginger": {
    "materialThermal": {
      "property": "Microbiological Lethality Core Temperature",
      "threshold": "Pathogen Lethality Internal Core: 165°F (73.9°C)",
      "details": "Radiant and convective heat must penetrate food to achieve complete microbial inactivation of Salmonella, Listeria, and vegetative pathogens."
    },
    "safetyStandard": {
      "organization": "USDA FSIS / FDA",
      "standard": "FDA Food Code 2022 § 3-401.11 / USDA FSIS Guidelines",
      "citation": "Mandatory internal cooking temperatures for food safety and pathogen elimination."
    },
    "applianceSpecs": {
      "parameter": "Oven Thermal Core Verification",
      "guideline": "Bake at 350°F–400°F; always verify internal core doneness with a calibrated digital food thermometer inserted into the thickest portion."
    }
  },
  "lemon": {
    "materialThermal": {
      "property": "Microbiological Lethality Core Temperature",
      "threshold": "Pathogen Lethality Internal Core: 165°F (73.9°C)",
      "details": "Radiant and convective heat must penetrate food to achieve complete microbial inactivation of Salmonella, Listeria, and vegetative pathogens."
    },
    "safetyStandard": {
      "organization": "USDA FSIS / FDA",
      "standard": "FDA Food Code 2022 § 3-401.11 / USDA FSIS Guidelines",
      "citation": "Mandatory internal cooking temperatures for food safety and pathogen elimination."
    },
    "applianceSpecs": {
      "parameter": "Oven Thermal Core Verification",
      "guideline": "Bake at 350°F–400°F; always verify internal core doneness with a calibrated digital food thermometer inserted into the thickest portion."
    }
  },
  "lime": {
    "materialThermal": {
      "property": "Microbiological Lethality Core Temperature",
      "threshold": "Pathogen Lethality Internal Core: 165°F (73.9°C)",
      "details": "Radiant and convective heat must penetrate food to achieve complete microbial inactivation of Salmonella, Listeria, and vegetative pathogens."
    },
    "safetyStandard": {
      "organization": "USDA FSIS / FDA",
      "standard": "FDA Food Code 2022 § 3-401.11 / USDA FSIS Guidelines",
      "citation": "Mandatory internal cooking temperatures for food safety and pathogen elimination."
    },
    "applianceSpecs": {
      "parameter": "Oven Thermal Core Verification",
      "guideline": "Bake at 350°F–400°F; always verify internal core doneness with a calibrated digital food thermometer inserted into the thickest portion."
    }
  },
  "white-rice": {
    "materialThermal": {
      "property": "Microbiological Lethality Core Temperature",
      "threshold": "Pathogen Lethality Internal Core: 165°F (73.9°C)",
      "details": "Radiant and convective heat must penetrate food to achieve complete microbial inactivation of Salmonella, Listeria, and vegetative pathogens."
    },
    "safetyStandard": {
      "organization": "USDA FSIS / FDA",
      "standard": "FDA Food Code 2022 § 3-401.11 / USDA FSIS Guidelines",
      "citation": "Mandatory internal cooking temperatures for food safety and pathogen elimination."
    },
    "applianceSpecs": {
      "parameter": "Oven Thermal Core Verification",
      "guideline": "Bake at 350°F–400°F; always verify internal core doneness with a calibrated digital food thermometer inserted into the thickest portion."
    }
  },
  "brown-rice": {
    "materialThermal": {
      "property": "Microbiological Lethality Core Temperature",
      "threshold": "Pathogen Lethality Internal Core: 165°F (73.9°C)",
      "details": "Radiant and convective heat must penetrate food to achieve complete microbial inactivation of Salmonella, Listeria, and vegetative pathogens."
    },
    "safetyStandard": {
      "organization": "USDA FSIS / FDA",
      "standard": "FDA Food Code 2022 § 3-401.11 / USDA FSIS Guidelines",
      "citation": "Mandatory internal cooking temperatures for food safety and pathogen elimination."
    },
    "applianceSpecs": {
      "parameter": "Oven Thermal Core Verification",
      "guideline": "Bake at 350°F–400°F; always verify internal core doneness with a calibrated digital food thermometer inserted into the thickest portion."
    }
  },
  "quinoa": {
    "materialThermal": {
      "property": "Microbiological Lethality Core Temperature",
      "threshold": "Pathogen Lethality Internal Core: 165°F (73.9°C)",
      "details": "Radiant and convective heat must penetrate food to achieve complete microbial inactivation of Salmonella, Listeria, and vegetative pathogens."
    },
    "safetyStandard": {
      "organization": "USDA FSIS / FDA",
      "standard": "FDA Food Code 2022 § 3-401.11 / USDA FSIS Guidelines",
      "citation": "Mandatory internal cooking temperatures for food safety and pathogen elimination."
    },
    "applianceSpecs": {
      "parameter": "Oven Thermal Core Verification",
      "guideline": "Bake at 350°F–400°F; always verify internal core doneness with a calibrated digital food thermometer inserted into the thickest portion."
    }
  },
  "lentils": {
    "materialThermal": {
      "property": "Microbiological Lethality Core Temperature",
      "threshold": "Pathogen Lethality Internal Core: 165°F (73.9°C)",
      "details": "Radiant and convective heat must penetrate food to achieve complete microbial inactivation of Salmonella, Listeria, and vegetative pathogens."
    },
    "safetyStandard": {
      "organization": "USDA FSIS / FDA",
      "standard": "FDA Food Code 2022 § 3-401.11 / USDA FSIS Guidelines",
      "citation": "Mandatory internal cooking temperatures for food safety and pathogen elimination."
    },
    "applianceSpecs": {
      "parameter": "Oven Thermal Core Verification",
      "guideline": "Bake at 350°F–400°F; always verify internal core doneness with a calibrated digital food thermometer inserted into the thickest portion."
    }
  },
  "oatmeal": {
    "materialThermal": {
      "property": "Microbiological Lethality Core Temperature",
      "threshold": "Pathogen Lethality Internal Core: 165°F (73.9°C)",
      "details": "Radiant and convective heat must penetrate food to achieve complete microbial inactivation of Salmonella, Listeria, and vegetative pathogens."
    },
    "safetyStandard": {
      "organization": "USDA FSIS / FDA",
      "standard": "FDA Food Code 2022 § 3-401.11 / USDA FSIS Guidelines",
      "citation": "Mandatory internal cooking temperatures for food safety and pathogen elimination."
    },
    "applianceSpecs": {
      "parameter": "Oven Thermal Core Verification",
      "guideline": "Bake at 350°F–400°F; always verify internal core doneness with a calibrated digital food thermometer inserted into the thickest portion."
    }
  },
  "spaghetti": {
    "materialThermal": {
      "property": "Microbiological Lethality Core Temperature",
      "threshold": "Pathogen Lethality Internal Core: 165°F (73.9°C)",
      "details": "Radiant and convective heat must penetrate food to achieve complete microbial inactivation of Salmonella, Listeria, and vegetative pathogens."
    },
    "safetyStandard": {
      "organization": "USDA FSIS / FDA",
      "standard": "FDA Food Code 2022 § 3-401.11 / USDA FSIS Guidelines",
      "citation": "Mandatory internal cooking temperatures for food safety and pathogen elimination."
    },
    "applianceSpecs": {
      "parameter": "Oven Thermal Core Verification",
      "guideline": "Bake at 350°F–400°F; always verify internal core doneness with a calibrated digital food thermometer inserted into the thickest portion."
    }
  },
  "macaroni": {
    "materialThermal": {
      "property": "Microbiological Lethality Core Temperature",
      "threshold": "Pathogen Lethality Internal Core: 165°F (73.9°C)",
      "details": "Radiant and convective heat must penetrate food to achieve complete microbial inactivation of Salmonella, Listeria, and vegetative pathogens."
    },
    "safetyStandard": {
      "organization": "USDA FSIS / FDA",
      "standard": "FDA Food Code 2022 § 3-401.11 / USDA FSIS Guidelines",
      "citation": "Mandatory internal cooking temperatures for food safety and pathogen elimination."
    },
    "applianceSpecs": {
      "parameter": "Oven Thermal Core Verification",
      "guideline": "Bake at 350°F–400°F; always verify internal core doneness with a calibrated digital food thermometer inserted into the thickest portion."
    }
  },
  "white-bread": {
    "materialThermal": {
      "property": "Microbiological Lethality Core Temperature",
      "threshold": "Pathogen Lethality Internal Core: 165°F (73.9°C)",
      "details": "Radiant and convective heat must penetrate food to achieve complete microbial inactivation of Salmonella, Listeria, and vegetative pathogens."
    },
    "safetyStandard": {
      "organization": "USDA FSIS / FDA",
      "standard": "FDA Food Code 2022 § 3-401.11 / USDA FSIS Guidelines",
      "citation": "Mandatory internal cooking temperatures for food safety and pathogen elimination."
    },
    "applianceSpecs": {
      "parameter": "Oven Thermal Core Verification",
      "guideline": "Bake at 350°F–400°F; always verify internal core doneness with a calibrated digital food thermometer inserted into the thickest portion."
    }
  },
  "whole-wheat-bread": {
    "materialThermal": {
      "property": "Microbiological Lethality Core Temperature",
      "threshold": "Pathogen Lethality Internal Core: 165°F (73.9°C)",
      "details": "Radiant and convective heat must penetrate food to achieve complete microbial inactivation of Salmonella, Listeria, and vegetative pathogens."
    },
    "safetyStandard": {
      "organization": "USDA FSIS / FDA",
      "standard": "FDA Food Code 2022 § 3-401.11 / USDA FSIS Guidelines",
      "citation": "Mandatory internal cooking temperatures for food safety and pathogen elimination."
    },
    "applianceSpecs": {
      "parameter": "Oven Thermal Core Verification",
      "guideline": "Bake at 350°F–400°F; always verify internal core doneness with a calibrated digital food thermometer inserted into the thickest portion."
    }
  },
  "sourdough-bread": {
    "materialThermal": {
      "property": "Microbiological Lethality Core Temperature",
      "threshold": "Pathogen Lethality Internal Core: 165°F (73.9°C)",
      "details": "Radiant and convective heat must penetrate food to achieve complete microbial inactivation of Salmonella, Listeria, and vegetative pathogens."
    },
    "safetyStandard": {
      "organization": "USDA FSIS / FDA",
      "standard": "FDA Food Code 2022 § 3-401.11 / USDA FSIS Guidelines",
      "citation": "Mandatory internal cooking temperatures for food safety and pathogen elimination."
    },
    "applianceSpecs": {
      "parameter": "Oven Thermal Core Verification",
      "guideline": "Bake at 350°F–400°F; always verify internal core doneness with a calibrated digital food thermometer inserted into the thickest portion."
    }
  },
  "croissant": {
    "materialThermal": {
      "property": "Microbiological Lethality Core Temperature",
      "threshold": "Pathogen Lethality Internal Core: 165°F (73.9°C)",
      "details": "Radiant and convective heat must penetrate food to achieve complete microbial inactivation of Salmonella, Listeria, and vegetative pathogens."
    },
    "safetyStandard": {
      "organization": "USDA FSIS / FDA",
      "standard": "FDA Food Code 2022 § 3-401.11 / USDA FSIS Guidelines",
      "citation": "Mandatory internal cooking temperatures for food safety and pathogen elimination."
    },
    "applianceSpecs": {
      "parameter": "Oven Thermal Core Verification",
      "guideline": "Bake at 350°F–400°F; always verify internal core doneness with a calibrated digital food thermometer inserted into the thickest portion."
    }
  },
  "bagel": {
    "materialThermal": {
      "property": "Microbiological Lethality Core Temperature",
      "threshold": "Pathogen Lethality Internal Core: 165°F (73.9°C)",
      "details": "Radiant and convective heat must penetrate food to achieve complete microbial inactivation of Salmonella, Listeria, and vegetative pathogens."
    },
    "safetyStandard": {
      "organization": "USDA FSIS / FDA",
      "standard": "FDA Food Code 2022 § 3-401.11 / USDA FSIS Guidelines",
      "citation": "Mandatory internal cooking temperatures for food safety and pathogen elimination."
    },
    "applianceSpecs": {
      "parameter": "Oven Thermal Core Verification",
      "guideline": "Bake at 350°F–400°F; always verify internal core doneness with a calibrated digital food thermometer inserted into the thickest portion."
    }
  },
  "pita-bread": {
    "materialThermal": {
      "property": "Microbiological Lethality Core Temperature",
      "threshold": "Pathogen Lethality Internal Core: 165°F (73.9°C)",
      "details": "Radiant and convective heat must penetrate food to achieve complete microbial inactivation of Salmonella, Listeria, and vegetative pathogens."
    },
    "safetyStandard": {
      "organization": "USDA FSIS / FDA",
      "standard": "FDA Food Code 2022 § 3-401.11 / USDA FSIS Guidelines",
      "citation": "Mandatory internal cooking temperatures for food safety and pathogen elimination."
    },
    "applianceSpecs": {
      "parameter": "Oven Thermal Core Verification",
      "guideline": "Bake at 350°F–400°F; always verify internal core doneness with a calibrated digital food thermometer inserted into the thickest portion."
    }
  },
  "tortilla": {
    "materialThermal": {
      "property": "Microbiological Lethality Core Temperature",
      "threshold": "Pathogen Lethality Internal Core: 165°F (73.9°C)",
      "details": "Radiant and convective heat must penetrate food to achieve complete microbial inactivation of Salmonella, Listeria, and vegetative pathogens."
    },
    "safetyStandard": {
      "organization": "USDA FSIS / FDA",
      "standard": "FDA Food Code 2022 § 3-401.11 / USDA FSIS Guidelines",
      "citation": "Mandatory internal cooking temperatures for food safety and pathogen elimination."
    },
    "applianceSpecs": {
      "parameter": "Oven Thermal Core Verification",
      "guideline": "Bake at 350°F–400°F; always verify internal core doneness with a calibrated digital food thermometer inserted into the thickest portion."
    }
  },
  "pizza-dough": {
    "materialThermal": {
      "property": "Microbiological Lethality Core Temperature",
      "threshold": "Pathogen Lethality Internal Core: 165°F (73.9°C)",
      "details": "Radiant and convective heat must penetrate food to achieve complete microbial inactivation of Salmonella, Listeria, and vegetative pathogens."
    },
    "safetyStandard": {
      "organization": "USDA FSIS / FDA",
      "standard": "FDA Food Code 2022 § 3-401.11 / USDA FSIS Guidelines",
      "citation": "Mandatory internal cooking temperatures for food safety and pathogen elimination."
    },
    "applianceSpecs": {
      "parameter": "Oven Thermal Core Verification",
      "guideline": "Bake at 350°F–400°F; always verify internal core doneness with a calibrated digital food thermometer inserted into the thickest portion."
    }
  },
  "cookie-dough": {
    "materialThermal": {
      "property": "Microbiological Lethality Core Temperature",
      "threshold": "Pathogen Lethality Internal Core: 165°F (73.9°C)",
      "details": "Radiant and convective heat must penetrate food to achieve complete microbial inactivation of Salmonella, Listeria, and vegetative pathogens."
    },
    "safetyStandard": {
      "organization": "USDA FSIS / FDA",
      "standard": "FDA Food Code 2022 § 3-401.11 / USDA FSIS Guidelines",
      "citation": "Mandatory internal cooking temperatures for food safety and pathogen elimination."
    },
    "applianceSpecs": {
      "parameter": "Oven Thermal Core Verification",
      "guideline": "Bake at 350°F–400°F; always verify internal core doneness with a calibrated digital food thermometer inserted into the thickest portion."
    }
  },
  "chocolate-chip-cookies": {
    "materialThermal": {
      "property": "Microbiological Lethality Core Temperature",
      "threshold": "Pathogen Lethality Internal Core: 165°F (73.9°C)",
      "details": "Radiant and convective heat must penetrate food to achieve complete microbial inactivation of Salmonella, Listeria, and vegetative pathogens."
    },
    "safetyStandard": {
      "organization": "USDA FSIS / FDA",
      "standard": "FDA Food Code 2022 § 3-401.11 / USDA FSIS Guidelines",
      "citation": "Mandatory internal cooking temperatures for food safety and pathogen elimination."
    },
    "applianceSpecs": {
      "parameter": "Oven Thermal Core Verification",
      "guideline": "Bake at 350°F–400°F; always verify internal core doneness with a calibrated digital food thermometer inserted into the thickest portion."
    }
  },
  "cake": {
    "materialThermal": {
      "property": "Microbiological Lethality Core Temperature",
      "threshold": "Pathogen Lethality Internal Core: 165°F (73.9°C)",
      "details": "Radiant and convective heat must penetrate food to achieve complete microbial inactivation of Salmonella, Listeria, and vegetative pathogens."
    },
    "safetyStandard": {
      "organization": "USDA FSIS / FDA",
      "standard": "FDA Food Code 2022 § 3-401.11 / USDA FSIS Guidelines",
      "citation": "Mandatory internal cooking temperatures for food safety and pathogen elimination."
    },
    "applianceSpecs": {
      "parameter": "Oven Thermal Core Verification",
      "guideline": "Bake at 350°F–400°F; always verify internal core doneness with a calibrated digital food thermometer inserted into the thickest portion."
    }
  },
  "muffin": {
    "materialThermal": {
      "property": "Microbiological Lethality Core Temperature",
      "threshold": "Pathogen Lethality Internal Core: 165°F (73.9°C)",
      "details": "Radiant and convective heat must penetrate food to achieve complete microbial inactivation of Salmonella, Listeria, and vegetative pathogens."
    },
    "safetyStandard": {
      "organization": "USDA FSIS / FDA",
      "standard": "FDA Food Code 2022 § 3-401.11 / USDA FSIS Guidelines",
      "citation": "Mandatory internal cooking temperatures for food safety and pathogen elimination."
    },
    "applianceSpecs": {
      "parameter": "Oven Thermal Core Verification",
      "guideline": "Bake at 350°F–400°F; always verify internal core doneness with a calibrated digital food thermometer inserted into the thickest portion."
    }
  },
  "pie": {
    "materialThermal": {
      "property": "Microbiological Lethality Core Temperature",
      "threshold": "Pathogen Lethality Internal Core: 165°F (73.9°C)",
      "details": "Radiant and convective heat must penetrate food to achieve complete microbial inactivation of Salmonella, Listeria, and vegetative pathogens."
    },
    "safetyStandard": {
      "organization": "USDA FSIS / FDA",
      "standard": "FDA Food Code 2022 § 3-401.11 / USDA FSIS Guidelines",
      "citation": "Mandatory internal cooking temperatures for food safety and pathogen elimination."
    },
    "applianceSpecs": {
      "parameter": "Oven Thermal Core Verification",
      "guideline": "Bake at 350°F–400°F; always verify internal core doneness with a calibrated digital food thermometer inserted into the thickest portion."
    }
  },
  "brownie": {
    "materialThermal": {
      "property": "Microbiological Lethality Core Temperature",
      "threshold": "Pathogen Lethality Internal Core: 165°F (73.9°C)",
      "details": "Radiant and convective heat must penetrate food to achieve complete microbial inactivation of Salmonella, Listeria, and vegetative pathogens."
    },
    "safetyStandard": {
      "organization": "USDA FSIS / FDA",
      "standard": "FDA Food Code 2022 § 3-401.11 / USDA FSIS Guidelines",
      "citation": "Mandatory internal cooking temperatures for food safety and pathogen elimination."
    },
    "applianceSpecs": {
      "parameter": "Oven Thermal Core Verification",
      "guideline": "Bake at 350°F–400°F; always verify internal core doneness with a calibrated digital food thermometer inserted into the thickest portion."
    }
  },
  "honey": {
    "materialThermal": {
      "property": "Microbiological Lethality Core Temperature",
      "threshold": "Pathogen Lethality Internal Core: 165°F (73.9°C)",
      "details": "Radiant and convective heat must penetrate food to achieve complete microbial inactivation of Salmonella, Listeria, and vegetative pathogens."
    },
    "safetyStandard": {
      "organization": "USDA FSIS / FDA",
      "standard": "FDA Food Code 2022 § 3-401.11 / USDA FSIS Guidelines",
      "citation": "Mandatory internal cooking temperatures for food safety and pathogen elimination."
    },
    "applianceSpecs": {
      "parameter": "Oven Thermal Core Verification",
      "guideline": "Bake at 350°F–400°F; always verify internal core doneness with a calibrated digital food thermometer inserted into the thickest portion."
    }
  },
  "maple-syrup": {
    "materialThermal": {
      "property": "Microbiological Lethality Core Temperature",
      "threshold": "Pathogen Lethality Internal Core: 165°F (73.9°C)",
      "details": "Radiant and convective heat must penetrate food to achieve complete microbial inactivation of Salmonella, Listeria, and vegetative pathogens."
    },
    "safetyStandard": {
      "organization": "USDA FSIS / FDA",
      "standard": "FDA Food Code 2022 § 3-401.11 / USDA FSIS Guidelines",
      "citation": "Mandatory internal cooking temperatures for food safety and pathogen elimination."
    },
    "applianceSpecs": {
      "parameter": "Oven Thermal Core Verification",
      "guideline": "Bake at 350°F–400°F; always verify internal core doneness with a calibrated digital food thermometer inserted into the thickest portion."
    }
  },
  "olive-oil": {
    "materialThermal": {
      "property": "Microbiological Lethality Core Temperature",
      "threshold": "Pathogen Lethality Internal Core: 165°F (73.9°C)",
      "details": "Radiant and convective heat must penetrate food to achieve complete microbial inactivation of Salmonella, Listeria, and vegetative pathogens."
    },
    "safetyStandard": {
      "organization": "USDA FSIS / FDA",
      "standard": "FDA Food Code 2022 § 3-401.11 / USDA FSIS Guidelines",
      "citation": "Mandatory internal cooking temperatures for food safety and pathogen elimination."
    },
    "applianceSpecs": {
      "parameter": "Oven Thermal Core Verification",
      "guideline": "Bake at 350°F–400°F; always verify internal core doneness with a calibrated digital food thermometer inserted into the thickest portion."
    }
  },
  "vegetable-oil": {
    "materialThermal": {
      "property": "Microbiological Lethality Core Temperature",
      "threshold": "Pathogen Lethality Internal Core: 165°F (73.9°C)",
      "details": "Radiant and convective heat must penetrate food to achieve complete microbial inactivation of Salmonella, Listeria, and vegetative pathogens."
    },
    "safetyStandard": {
      "organization": "USDA FSIS / FDA",
      "standard": "FDA Food Code 2022 § 3-401.11 / USDA FSIS Guidelines",
      "citation": "Mandatory internal cooking temperatures for food safety and pathogen elimination."
    },
    "applianceSpecs": {
      "parameter": "Oven Thermal Core Verification",
      "guideline": "Bake at 350°F–400°F; always verify internal core doneness with a calibrated digital food thermometer inserted into the thickest portion."
    }
  },
  "coconut-oil": {
    "materialThermal": {
      "property": "Microbiological Lethality Core Temperature",
      "threshold": "Pathogen Lethality Internal Core: 165°F (73.9°C)",
      "details": "Radiant and convective heat must penetrate food to achieve complete microbial inactivation of Salmonella, Listeria, and vegetative pathogens."
    },
    "safetyStandard": {
      "organization": "USDA FSIS / FDA",
      "standard": "FDA Food Code 2022 § 3-401.11 / USDA FSIS Guidelines",
      "citation": "Mandatory internal cooking temperatures for food safety and pathogen elimination."
    },
    "applianceSpecs": {
      "parameter": "Oven Thermal Core Verification",
      "guideline": "Bake at 350°F–400°F; always verify internal core doneness with a calibrated digital food thermometer inserted into the thickest portion."
    }
  },
  "peanut-butter": {
    "materialThermal": {
      "property": "Microbiological Lethality Core Temperature",
      "threshold": "Pathogen Lethality Internal Core: 165°F (73.9°C)",
      "details": "Radiant and convective heat must penetrate food to achieve complete microbial inactivation of Salmonella, Listeria, and vegetative pathogens."
    },
    "safetyStandard": {
      "organization": "USDA FSIS / FDA",
      "standard": "FDA Food Code 2022 § 3-401.11 / USDA FSIS Guidelines",
      "citation": "Mandatory internal cooking temperatures for food safety and pathogen elimination."
    },
    "applianceSpecs": {
      "parameter": "Oven Thermal Core Verification",
      "guideline": "Bake at 350°F–400°F; always verify internal core doneness with a calibrated digital food thermometer inserted into the thickest portion."
    }
  },
  "almond-butter": {
    "materialThermal": {
      "property": "Microbiological Lethality Core Temperature",
      "threshold": "Pathogen Lethality Internal Core: 165°F (73.9°C)",
      "details": "Radiant and convective heat must penetrate food to achieve complete microbial inactivation of Salmonella, Listeria, and vegetative pathogens."
    },
    "safetyStandard": {
      "organization": "USDA FSIS / FDA",
      "standard": "FDA Food Code 2022 § 3-401.11 / USDA FSIS Guidelines",
      "citation": "Mandatory internal cooking temperatures for food safety and pathogen elimination."
    },
    "applianceSpecs": {
      "parameter": "Oven Thermal Core Verification",
      "guideline": "Bake at 350°F–400°F; always verify internal core doneness with a calibrated digital food thermometer inserted into the thickest portion."
    }
  },
  "nutella": {
    "materialThermal": {
      "property": "Microbiological Lethality Core Temperature",
      "threshold": "Pathogen Lethality Internal Core: 165°F (73.9°C)",
      "details": "Radiant and convective heat must penetrate food to achieve complete microbial inactivation of Salmonella, Listeria, and vegetative pathogens."
    },
    "safetyStandard": {
      "organization": "USDA FSIS / FDA",
      "standard": "FDA Food Code 2022 § 3-401.11 / USDA FSIS Guidelines",
      "citation": "Mandatory internal cooking temperatures for food safety and pathogen elimination."
    },
    "applianceSpecs": {
      "parameter": "Oven Thermal Core Verification",
      "guideline": "Bake at 350°F–400°F; always verify internal core doneness with a calibrated digital food thermometer inserted into the thickest portion."
    }
  },
  "jam": {
    "materialThermal": {
      "property": "Microbiological Lethality Core Temperature",
      "threshold": "Pathogen Lethality Internal Core: 165°F (73.9°C)",
      "details": "Radiant and convective heat must penetrate food to achieve complete microbial inactivation of Salmonella, Listeria, and vegetative pathogens."
    },
    "safetyStandard": {
      "organization": "USDA FSIS / FDA",
      "standard": "FDA Food Code 2022 § 3-401.11 / USDA FSIS Guidelines",
      "citation": "Mandatory internal cooking temperatures for food safety and pathogen elimination."
    },
    "applianceSpecs": {
      "parameter": "Oven Thermal Core Verification",
      "guideline": "Bake at 350°F–400°F; always verify internal core doneness with a calibrated digital food thermometer inserted into the thickest portion."
    }
  },
  "jelly": {
    "materialThermal": {
      "property": "Microbiological Lethality Core Temperature",
      "threshold": "Pathogen Lethality Internal Core: 165°F (73.9°C)",
      "details": "Radiant and convective heat must penetrate food to achieve complete microbial inactivation of Salmonella, Listeria, and vegetative pathogens."
    },
    "safetyStandard": {
      "organization": "USDA FSIS / FDA",
      "standard": "FDA Food Code 2022 § 3-401.11 / USDA FSIS Guidelines",
      "citation": "Mandatory internal cooking temperatures for food safety and pathogen elimination."
    },
    "applianceSpecs": {
      "parameter": "Oven Thermal Core Verification",
      "guideline": "Bake at 350°F–400°F; always verify internal core doneness with a calibrated digital food thermometer inserted into the thickest portion."
    }
  },
  "mayonnaise": {
    "materialThermal": {
      "property": "Microbiological Lethality Core Temperature",
      "threshold": "Pathogen Lethality Internal Core: 165°F (73.9°C)",
      "details": "Radiant and convective heat must penetrate food to achieve complete microbial inactivation of Salmonella, Listeria, and vegetative pathogens."
    },
    "safetyStandard": {
      "organization": "USDA FSIS / FDA",
      "standard": "FDA Food Code 2022 § 3-401.11 / USDA FSIS Guidelines",
      "citation": "Mandatory internal cooking temperatures for food safety and pathogen elimination."
    },
    "applianceSpecs": {
      "parameter": "Oven Thermal Core Verification",
      "guideline": "Bake at 350°F–400°F; always verify internal core doneness with a calibrated digital food thermometer inserted into the thickest portion."
    }
  },
  "ketchup": {
    "materialThermal": {
      "property": "Microbiological Lethality Core Temperature",
      "threshold": "Pathogen Lethality Internal Core: 165°F (73.9°C)",
      "details": "Radiant and convective heat must penetrate food to achieve complete microbial inactivation of Salmonella, Listeria, and vegetative pathogens."
    },
    "safetyStandard": {
      "organization": "USDA FSIS / FDA",
      "standard": "FDA Food Code 2022 § 3-401.11 / USDA FSIS Guidelines",
      "citation": "Mandatory internal cooking temperatures for food safety and pathogen elimination."
    },
    "applianceSpecs": {
      "parameter": "Oven Thermal Core Verification",
      "guideline": "Bake at 350°F–400°F; always verify internal core doneness with a calibrated digital food thermometer inserted into the thickest portion."
    }
  },
  "mustard": {
    "materialThermal": {
      "property": "Microbiological Lethality Core Temperature",
      "threshold": "Pathogen Lethality Internal Core: 165°F (73.9°C)",
      "details": "Radiant and convective heat must penetrate food to achieve complete microbial inactivation of Salmonella, Listeria, and vegetative pathogens."
    },
    "safetyStandard": {
      "organization": "USDA FSIS / FDA",
      "standard": "FDA Food Code 2022 § 3-401.11 / USDA FSIS Guidelines",
      "citation": "Mandatory internal cooking temperatures for food safety and pathogen elimination."
    },
    "applianceSpecs": {
      "parameter": "Oven Thermal Core Verification",
      "guideline": "Bake at 350°F–400°F; always verify internal core doneness with a calibrated digital food thermometer inserted into the thickest portion."
    }
  },
  "soy-sauce": {
    "materialThermal": {
      "property": "Microbiological Lethality Core Temperature",
      "threshold": "Pathogen Lethality Internal Core: 165°F (73.9°C)",
      "details": "Radiant and convective heat must penetrate food to achieve complete microbial inactivation of Salmonella, Listeria, and vegetative pathogens."
    },
    "safetyStandard": {
      "organization": "USDA FSIS / FDA",
      "standard": "FDA Food Code 2022 § 3-401.11 / USDA FSIS Guidelines",
      "citation": "Mandatory internal cooking temperatures for food safety and pathogen elimination."
    },
    "applianceSpecs": {
      "parameter": "Oven Thermal Core Verification",
      "guideline": "Bake at 350°F–400°F; always verify internal core doneness with a calibrated digital food thermometer inserted into the thickest portion."
    }
  },
  "hot-sauce": {
    "materialThermal": {
      "property": "Microbiological Lethality Core Temperature",
      "threshold": "Pathogen Lethality Internal Core: 165°F (73.9°C)",
      "details": "Radiant and convective heat must penetrate food to achieve complete microbial inactivation of Salmonella, Listeria, and vegetative pathogens."
    },
    "safetyStandard": {
      "organization": "USDA FSIS / FDA",
      "standard": "FDA Food Code 2022 § 3-401.11 / USDA FSIS Guidelines",
      "citation": "Mandatory internal cooking temperatures for food safety and pathogen elimination."
    },
    "applianceSpecs": {
      "parameter": "Oven Thermal Core Verification",
      "guideline": "Bake at 350°F–400°F; always verify internal core doneness with a calibrated digital food thermometer inserted into the thickest portion."
    }
  },
  "salad-dressing": {
    "materialThermal": {
      "property": "Microbiological Lethality Core Temperature",
      "threshold": "Pathogen Lethality Internal Core: 165°F (73.9°C)",
      "details": "Radiant and convective heat must penetrate food to achieve complete microbial inactivation of Salmonella, Listeria, and vegetative pathogens."
    },
    "safetyStandard": {
      "organization": "USDA FSIS / FDA",
      "standard": "FDA Food Code 2022 § 3-401.11 / USDA FSIS Guidelines",
      "citation": "Mandatory internal cooking temperatures for food safety and pathogen elimination."
    },
    "applianceSpecs": {
      "parameter": "Oven Thermal Core Verification",
      "guideline": "Bake at 350°F–400°F; always verify internal core doneness with a calibrated digital food thermometer inserted into the thickest portion."
    }
  },
  "hummus": {
    "materialThermal": {
      "property": "Microbiological Lethality Core Temperature",
      "threshold": "Pathogen Lethality Internal Core: 165°F (73.9°C)",
      "details": "Radiant and convective heat must penetrate food to achieve complete microbial inactivation of Salmonella, Listeria, and vegetative pathogens."
    },
    "safetyStandard": {
      "organization": "USDA FSIS / FDA",
      "standard": "FDA Food Code 2022 § 3-401.11 / USDA FSIS Guidelines",
      "citation": "Mandatory internal cooking temperatures for food safety and pathogen elimination."
    },
    "applianceSpecs": {
      "parameter": "Oven Thermal Core Verification",
      "guideline": "Bake at 350°F–400°F; always verify internal core doneness with a calibrated digital food thermometer inserted into the thickest portion."
    }
  },
  "guacamole": {
    "materialThermal": {
      "property": "Microbiological Lethality Core Temperature",
      "threshold": "Pathogen Lethality Internal Core: 165°F (73.9°C)",
      "details": "Radiant and convective heat must penetrate food to achieve complete microbial inactivation of Salmonella, Listeria, and vegetative pathogens."
    },
    "safetyStandard": {
      "organization": "USDA FSIS / FDA",
      "standard": "FDA Food Code 2022 § 3-401.11 / USDA FSIS Guidelines",
      "citation": "Mandatory internal cooking temperatures for food safety and pathogen elimination."
    },
    "applianceSpecs": {
      "parameter": "Oven Thermal Core Verification",
      "guideline": "Bake at 350°F–400°F; always verify internal core doneness with a calibrated digital food thermometer inserted into the thickest portion."
    }
  },
  "salsa": {
    "materialThermal": {
      "property": "Microbiological Lethality Core Temperature",
      "threshold": "Pathogen Lethality Internal Core: 165°F (73.9°C)",
      "details": "Radiant and convective heat must penetrate food to achieve complete microbial inactivation of Salmonella, Listeria, and vegetative pathogens."
    },
    "safetyStandard": {
      "organization": "USDA FSIS / FDA",
      "standard": "FDA Food Code 2022 § 3-401.11 / USDA FSIS Guidelines",
      "citation": "Mandatory internal cooking temperatures for food safety and pathogen elimination."
    },
    "applianceSpecs": {
      "parameter": "Oven Thermal Core Verification",
      "guideline": "Bake at 350°F–400°F; always verify internal core doneness with a calibrated digital food thermometer inserted into the thickest portion."
    }
  },
  "coffee": {
    "materialThermal": {
      "property": "Microbiological Lethality Core Temperature",
      "threshold": "Pathogen Lethality Internal Core: 165°F (73.9°C)",
      "details": "Radiant and convective heat must penetrate food to achieve complete microbial inactivation of Salmonella, Listeria, and vegetative pathogens."
    },
    "safetyStandard": {
      "organization": "USDA FSIS / FDA",
      "standard": "FDA Food Code 2022 § 3-401.11 / USDA FSIS Guidelines",
      "citation": "Mandatory internal cooking temperatures for food safety and pathogen elimination."
    },
    "applianceSpecs": {
      "parameter": "Oven Thermal Core Verification",
      "guideline": "Bake at 350°F–400°F; always verify internal core doneness with a calibrated digital food thermometer inserted into the thickest portion."
    }
  },
  "tea": {
    "materialThermal": {
      "property": "Microbiological Lethality Core Temperature",
      "threshold": "Pathogen Lethality Internal Core: 165°F (73.9°C)",
      "details": "Radiant and convective heat must penetrate food to achieve complete microbial inactivation of Salmonella, Listeria, and vegetative pathogens."
    },
    "safetyStandard": {
      "organization": "USDA FSIS / FDA",
      "standard": "FDA Food Code 2022 § 3-401.11 / USDA FSIS Guidelines",
      "citation": "Mandatory internal cooking temperatures for food safety and pathogen elimination."
    },
    "applianceSpecs": {
      "parameter": "Oven Thermal Core Verification",
      "guideline": "Bake at 350°F–400°F; always verify internal core doneness with a calibrated digital food thermometer inserted into the thickest portion."
    }
  },
  "soda": {
    "materialThermal": {
      "property": "Microbiological Lethality Core Temperature",
      "threshold": "Pathogen Lethality Internal Core: 165°F (73.9°C)",
      "details": "Radiant and convective heat must penetrate food to achieve complete microbial inactivation of Salmonella, Listeria, and vegetative pathogens."
    },
    "safetyStandard": {
      "organization": "USDA FSIS / FDA",
      "standard": "FDA Food Code 2022 § 3-401.11 / USDA FSIS Guidelines",
      "citation": "Mandatory internal cooking temperatures for food safety and pathogen elimination."
    },
    "applianceSpecs": {
      "parameter": "Oven Thermal Core Verification",
      "guideline": "Bake at 350°F–400°F; always verify internal core doneness with a calibrated digital food thermometer inserted into the thickest portion."
    }
  },
  "orange-juice": {
    "materialThermal": {
      "property": "Microbiological Lethality Core Temperature",
      "threshold": "Pathogen Lethality Internal Core: 165°F (73.9°C)",
      "details": "Radiant and convective heat must penetrate food to achieve complete microbial inactivation of Salmonella, Listeria, and vegetative pathogens."
    },
    "safetyStandard": {
      "organization": "USDA FSIS / FDA",
      "standard": "FDA Food Code 2022 § 3-401.11 / USDA FSIS Guidelines",
      "citation": "Mandatory internal cooking temperatures for food safety and pathogen elimination."
    },
    "applianceSpecs": {
      "parameter": "Oven Thermal Core Verification",
      "guideline": "Bake at 350°F–400°F; always verify internal core doneness with a calibrated digital food thermometer inserted into the thickest portion."
    }
  },
  "apple-juice": {
    "materialThermal": {
      "property": "Microbiological Lethality Core Temperature",
      "threshold": "Pathogen Lethality Internal Core: 165°F (73.9°C)",
      "details": "Radiant and convective heat must penetrate food to achieve complete microbial inactivation of Salmonella, Listeria, and vegetative pathogens."
    },
    "safetyStandard": {
      "organization": "USDA FSIS / FDA",
      "standard": "FDA Food Code 2022 § 3-401.11 / USDA FSIS Guidelines",
      "citation": "Mandatory internal cooking temperatures for food safety and pathogen elimination."
    },
    "applianceSpecs": {
      "parameter": "Oven Thermal Core Verification",
      "guideline": "Bake at 350°F–400°F; always verify internal core doneness with a calibrated digital food thermometer inserted into the thickest portion."
    }
  },
  "wine": {
    "materialThermal": {
      "property": "Microbiological Lethality Core Temperature",
      "threshold": "Pathogen Lethality Internal Core: 165°F (73.9°C)",
      "details": "Radiant and convective heat must penetrate food to achieve complete microbial inactivation of Salmonella, Listeria, and vegetative pathogens."
    },
    "safetyStandard": {
      "organization": "USDA FSIS / FDA",
      "standard": "FDA Food Code 2022 § 3-401.11 / USDA FSIS Guidelines",
      "citation": "Mandatory internal cooking temperatures for food safety and pathogen elimination."
    },
    "applianceSpecs": {
      "parameter": "Oven Thermal Core Verification",
      "guideline": "Bake at 350°F–400°F; always verify internal core doneness with a calibrated digital food thermometer inserted into the thickest portion."
    }
  },
  "beer": {
    "materialThermal": {
      "property": "Microbiological Lethality Core Temperature",
      "threshold": "Pathogen Lethality Internal Core: 165°F (73.9°C)",
      "details": "Radiant and convective heat must penetrate food to achieve complete microbial inactivation of Salmonella, Listeria, and vegetative pathogens."
    },
    "safetyStandard": {
      "organization": "USDA FSIS / FDA",
      "standard": "FDA Food Code 2022 § 3-401.11 / USDA FSIS Guidelines",
      "citation": "Mandatory internal cooking temperatures for food safety and pathogen elimination."
    },
    "applianceSpecs": {
      "parameter": "Oven Thermal Core Verification",
      "guideline": "Bake at 350°F–400°F; always verify internal core doneness with a calibrated digital food thermometer inserted into the thickest portion."
    }
  },
  "glass-bowl": {
    "materialThermal": {
      "property": "Vitrified Glaze Thermal Endurance",
      "threshold": "Continuous Service 450°F–500°F (232°C–260°C); Thermal Shock ΔT ~180°F",
      "details": "High-fired glazed ceramic and stoneware distribute conductive heat evenly; porous unglazed undersides can absorb water and crack if heated rapidly."
    },
    "safetyStandard": {
      "organization": "FDA",
      "standard": "Compliance Policy Guide Sec. 545.400 / 545.450",
      "citation": "Safety standards for ceramicware food-contact surfaces and heavy metal leaching under heat."
    },
    "applianceSpecs": {
      "parameter": "Slow Thermal Ramp Convection",
      "guideline": "Ensure ceramic cookware is labeled oven-safe; avoid transitioning directly from freezer to preheated 400°F oven to prevent thermal cleavage."
    }
  },
  "ceramic-plate": {
    "materialThermal": {
      "property": "Vitrified Glaze Thermal Endurance",
      "threshold": "Continuous Service 450°F–500°F (232°C–260°C); Thermal Shock ΔT ~180°F",
      "details": "High-fired glazed ceramic and stoneware distribute conductive heat evenly; porous unglazed undersides can absorb water and crack if heated rapidly."
    },
    "safetyStandard": {
      "organization": "FDA",
      "standard": "Compliance Policy Guide Sec. 545.400 / 545.450",
      "citation": "Safety standards for ceramicware food-contact surfaces and heavy metal leaching under heat."
    },
    "applianceSpecs": {
      "parameter": "Slow Thermal Ramp Convection",
      "guideline": "Ensure ceramic cookware is labeled oven-safe; avoid transitioning directly from freezer to preheated 400°F oven to prevent thermal cleavage."
    }
  },
  "paper-plate": {
    "materialThermal": {
      "property": "Cellulose Auto-Ignition Point & Toxic Ink Outgassing",
      "threshold": "Ignition Temperature 451°F (233°C); Thermal Degradation ~300°F",
      "details": "Dry unbound cellulose desiccates rapidly in oven air. Synthetic adhesives, mineral oil printing inks, and recycled pulp fibers outgas toxic fumes and ignite."
    },
    "safetyStandard": {
      "organization": "CPSC / NFPA",
      "standard": "NFPA 96 / CPSC Guidelines",
      "citation": "Combustible fibrous paper and recycled packaging materials are classified as severe fire hazards in enclosed heating appliances."
    },
    "applianceSpecs": {
      "parameter": "Oven Convection & Radiant Thermal Exposure",
      "guideline": "Radiant heat from oven elements ignites dry paper packaging in minutes. Never reheat pizza in cardboard delivery boxes or use paper plates for baking."
    }
  },
  "plastic-container": {
    "materialThermal": {
      "property": "Thermoplastic Melting Point & Heat Deflection",
      "threshold": "PE Melts at 220°F–240°F (105°C–115°C); PP Melts at 320°F (160°C)",
      "details": "Consumer food containers (polyethylene and polypropylene) lack cross-linked molecular thermal stability, softening and melting into food under oven heat."
    },
    "safetyStandard": {
      "organization": "FDA",
      "standard": "21 CFR § 177.1520",
      "citation": "Olefin polymers for food-contact use, prohibiting exposure to dry heat baking temperatures."
    },
    "applianceSpecs": {
      "parameter": "Oven Thermal Chamber Compatibility",
      "guideline": "Never place plastic wrap, storage bags, or plasticware in the oven; radiant baking elements quickly liquefy plastics, generating toxic plasticizer fumes."
    }
  },
  "styrofoam-cup": {
    "materialThermal": {
      "property": "Polystyrene Glass Transition & Decomposition",
      "threshold": "Glass Transition 185°F–212°F (85°C–100°C); Thermal Decomposition >390°F",
      "details": "Expanded polystyrene (EPS) collapses immediately above boiling, liquefying into a sticky toxic polymer resin that releases benzene and styrene oligomers."
    },
    "safetyStandard": {
      "organization": "FDA",
      "standard": "21 CFR § 177.1640",
      "citation": "Polystyrene regulations restrict thermal food contact; prohibits high-heat oven exposure due to monomer migration."
    },
    "applianceSpecs": {
      "parameter": "Radiant Element Liquefaction Hazard",
      "guideline": "Placing styrofoam in an oven (300°F–450°F) causes catastrophic melting onto oven racks and permanent chemical contamination."
    }
  },
  "aluminum-foil": {
    "materialThermal": {
      "property": "Metallic Structural Service Limit",
      "threshold": "Stainless Steel >1,400°F (760°C); Aluminum >1,220°F (660°C)",
      "details": "Food-grade stainless steel and heavy-gauge aluminum conduct radiant oven heat rapidly without structural deformation or toxic chemical off-gassing."
    },
    "safetyStandard": {
      "organization": "NSF International",
      "standard": "NSF/ANSI Standard 51",
      "citation": "Food Equipment Materials specification for corrosion resistance and structural integrity under heat."
    },
    "applianceSpecs": {
      "parameter": "Oven Rack Air Circulation Clearance",
      "guideline": "Allow at least 1–2 inches of perimeter clearance around metal baking pans to maintain even convective airflow inside the oven cavity."
    }
  },
  "stainless-steel-pan": {
    "materialThermal": {
      "property": "Metallic Structural Service Limit",
      "threshold": "Stainless Steel >1,400°F (760°C); Aluminum >1,220°F (660°C)",
      "details": "Food-grade stainless steel and heavy-gauge aluminum conduct radiant oven heat rapidly without structural deformation or toxic chemical off-gassing."
    },
    "safetyStandard": {
      "organization": "NSF International",
      "standard": "NSF/ANSI Standard 51",
      "citation": "Food Equipment Materials specification for corrosion resistance and structural integrity under heat."
    },
    "applianceSpecs": {
      "parameter": "Oven Rack Air Circulation Clearance",
      "guideline": "Allow at least 1–2 inches of perimeter clearance around metal baking pans to maintain even convective airflow inside the oven cavity."
    }
  },
  "copper-mug": {
    "materialThermal": {
      "property": "Metallic Structural Service Limit",
      "threshold": "Stainless Steel >1,400°F (760°C); Aluminum >1,220°F (660°C)",
      "details": "Food-grade stainless steel and heavy-gauge aluminum conduct radiant oven heat rapidly without structural deformation or toxic chemical off-gassing."
    },
    "safetyStandard": {
      "organization": "NSF International",
      "standard": "NSF/ANSI Standard 51",
      "citation": "Food Equipment Materials specification for corrosion resistance and structural integrity under heat."
    },
    "applianceSpecs": {
      "parameter": "Oven Rack Air Circulation Clearance",
      "guideline": "Allow at least 1–2 inches of perimeter clearance around metal baking pans to maintain even convective airflow inside the oven cavity."
    }
  },
  "wooden-spoon": {
    "materialThermal": {
      "property": "Cellulose Ignition Point & Delamination",
      "threshold": "Ignition Temperature 400°F–450°F (204°C–232°C); Glue Failure >140°F",
      "details": "Dry convective heat desiccates natural wood pores, warping grain, splitting glued joints, and charring cellulose fibers."
    },
    "safetyStandard": {
      "organization": "FDA / USDA",
      "standard": "USDA FSIS Skewer Advisory",
      "citation": "Guidelines on pre-soaking wooden skewers to mitigate dry thermal ignition hazards in ovens."
    },
    "applianceSpecs": {
      "parameter": "Desorption & Fire Prevention",
      "guideline": "Never bake on wooden cutting boards. Soak wooden skewers in water for at least 30 minutes before baking to prevent embering."
    }
  },
  "mason-jar": {
    "materialThermal": {
      "property": "Soda-Lime Glass Thermal Shock Resistance",
      "threshold": "Thermal Shock Limit ΔT = 99°F–150°F (55°C–83°C)",
      "details": "Annealed soda-lime glass has high thermal expansion; uneven heating or cold air drafts during baking cause rapid differential expansion and violent fracture."
    },
    "safetyStandard": {
      "organization": "ASTM",
      "standard": "ASTM C149-14",
      "citation": "Standard Test Method for Thermal Shock Resistance of Glass Containers."
    },
    "applianceSpecs": {
      "parameter": "Oven Radiant Element Gradients",
      "guideline": "Canning jars and non-tempered glassware are not oven-safe; localized heating from bottom elements creates stress cracks that shatter the jar."
    }
  },
  "ziploc-bag": {
    "materialThermal": {
      "property": "Thermoplastic Melting Point & Heat Deflection",
      "threshold": "PE Melts at 220°F–240°F (105°C–115°C); PP Melts at 320°F (160°C)",
      "details": "Consumer food containers (polyethylene and polypropylene) lack cross-linked molecular thermal stability, softening and melting into food under oven heat."
    },
    "safetyStandard": {
      "organization": "FDA",
      "standard": "21 CFR § 177.1520",
      "citation": "Olefin polymers for food-contact use, prohibiting exposure to dry heat baking temperatures."
    },
    "applianceSpecs": {
      "parameter": "Oven Thermal Chamber Compatibility",
      "guideline": "Never place plastic wrap, storage bags, or plasticware in the oven; radiant baking elements quickly liquefy plastics, generating toxic plasticizer fumes."
    }
  },
  "tupperware": {
    "materialThermal": {
      "property": "Thermoplastic Melting Point & Heat Deflection",
      "threshold": "PE Melts at 220°F–240°F (105°C–115°C); PP Melts at 320°F (160°C)",
      "details": "Consumer food containers (polyethylene and polypropylene) lack cross-linked molecular thermal stability, softening and melting into food under oven heat."
    },
    "safetyStandard": {
      "organization": "FDA",
      "standard": "21 CFR § 177.1520",
      "citation": "Olefin polymers for food-contact use, prohibiting exposure to dry heat baking temperatures."
    },
    "applianceSpecs": {
      "parameter": "Oven Thermal Chamber Compatibility",
      "guideline": "Never place plastic wrap, storage bags, or plasticware in the oven; radiant baking elements quickly liquefy plastics, generating toxic plasticizer fumes."
    }
  },
  "bento-box": {
    "materialThermal": {
      "property": "Microbiological Lethality Core Temperature",
      "threshold": "Pathogen Lethality Internal Core: 165°F (73.9°C)",
      "details": "Radiant and convective heat must penetrate food to achieve complete microbial inactivation of Salmonella, Listeria, and vegetative pathogens."
    },
    "safetyStandard": {
      "organization": "USDA FSIS / FDA",
      "standard": "FDA Food Code 2022 § 3-401.11 / USDA FSIS Guidelines",
      "citation": "Mandatory internal cooking temperatures for food safety and pathogen elimination."
    },
    "applianceSpecs": {
      "parameter": "Oven Thermal Core Verification",
      "guideline": "Bake at 350°F–400°F; always verify internal core doneness with a calibrated digital food thermometer inserted into the thickest portion."
    }
  },
  "travel-mug": {
    "materialThermal": {
      "property": "Microbiological Lethality Core Temperature",
      "threshold": "Pathogen Lethality Internal Core: 165°F (73.9°C)",
      "details": "Radiant and convective heat must penetrate food to achieve complete microbial inactivation of Salmonella, Listeria, and vegetative pathogens."
    },
    "safetyStandard": {
      "organization": "USDA FSIS / FDA",
      "standard": "FDA Food Code 2022 § 3-401.11 / USDA FSIS Guidelines",
      "citation": "Mandatory internal cooking temperatures for food safety and pathogen elimination."
    },
    "applianceSpecs": {
      "parameter": "Oven Thermal Core Verification",
      "guideline": "Bake at 350°F–400°F; always verify internal core doneness with a calibrated digital food thermometer inserted into the thickest portion."
    }
  },
  "yeti-tumbler": {
    "materialThermal": {
      "property": "Microbiological Lethality Core Temperature",
      "threshold": "Pathogen Lethality Internal Core: 165°F (73.9°C)",
      "details": "Radiant and convective heat must penetrate food to achieve complete microbial inactivation of Salmonella, Listeria, and vegetative pathogens."
    },
    "safetyStandard": {
      "organization": "USDA FSIS / FDA",
      "standard": "FDA Food Code 2022 § 3-401.11 / USDA FSIS Guidelines",
      "citation": "Mandatory internal cooking temperatures for food safety and pathogen elimination."
    },
    "applianceSpecs": {
      "parameter": "Oven Thermal Core Verification",
      "guideline": "Bake at 350°F–400°F; always verify internal core doneness with a calibrated digital food thermometer inserted into the thickest portion."
    }
  },
  "hydro-flask-bottle": {
    "materialThermal": {
      "property": "Microbiological Lethality Core Temperature",
      "threshold": "Pathogen Lethality Internal Core: 165°F (73.9°C)",
      "details": "Radiant and convective heat must penetrate food to achieve complete microbial inactivation of Salmonella, Listeria, and vegetative pathogens."
    },
    "safetyStandard": {
      "organization": "USDA FSIS / FDA",
      "standard": "FDA Food Code 2022 § 3-401.11 / USDA FSIS Guidelines",
      "citation": "Mandatory internal cooking temperatures for food safety and pathogen elimination."
    },
    "applianceSpecs": {
      "parameter": "Oven Thermal Core Verification",
      "guideline": "Bake at 350°F–400°F; always verify internal core doneness with a calibrated digital food thermometer inserted into the thickest portion."
    }
  },
  "stanley-cup-tumbler": {
    "materialThermal": {
      "property": "Microbiological Lethality Core Temperature",
      "threshold": "Pathogen Lethality Internal Core: 165°F (73.9°C)",
      "details": "Radiant and convective heat must penetrate food to achieve complete microbial inactivation of Salmonella, Listeria, and vegetative pathogens."
    },
    "safetyStandard": {
      "organization": "USDA FSIS / FDA",
      "standard": "FDA Food Code 2022 § 3-401.11 / USDA FSIS Guidelines",
      "citation": "Mandatory internal cooking temperatures for food safety and pathogen elimination."
    },
    "applianceSpecs": {
      "parameter": "Oven Thermal Core Verification",
      "guideline": "Bake at 350°F–400°F; always verify internal core doneness with a calibrated digital food thermometer inserted into the thickest portion."
    }
  },
  "baking-sheet": {
    "materialThermal": {
      "property": "Metallic Structural Service Limit",
      "threshold": "Stainless Steel >1,400°F (760°C); Aluminum >1,220°F (660°C)",
      "details": "Food-grade stainless steel and heavy-gauge aluminum conduct radiant oven heat rapidly without structural deformation or toxic chemical off-gassing."
    },
    "safetyStandard": {
      "organization": "NSF International",
      "standard": "NSF/ANSI Standard 51",
      "citation": "Food Equipment Materials specification for corrosion resistance and structural integrity under heat."
    },
    "applianceSpecs": {
      "parameter": "Oven Rack Air Circulation Clearance",
      "guideline": "Allow at least 1–2 inches of perimeter clearance around metal baking pans to maintain even convective airflow inside the oven cavity."
    }
  },
  "gold-silverware": {
    "materialThermal": {
      "property": "Microbiological Lethality Core Temperature",
      "threshold": "Pathogen Lethality Internal Core: 165°F (73.9°C)",
      "details": "Radiant and convective heat must penetrate food to achieve complete microbial inactivation of Salmonella, Listeria, and vegetative pathogens."
    },
    "safetyStandard": {
      "organization": "USDA FSIS / FDA",
      "standard": "FDA Food Code 2022 § 3-401.11 / USDA FSIS Guidelines",
      "citation": "Mandatory internal cooking temperatures for food safety and pathogen elimination."
    },
    "applianceSpecs": {
      "parameter": "Oven Thermal Core Verification",
      "guideline": "Bake at 350°F–400°F; always verify internal core doneness with a calibrated digital food thermometer inserted into the thickest portion."
    }
  },
  "silver-silverware": {
    "materialThermal": {
      "property": "Microbiological Lethality Core Temperature",
      "threshold": "Pathogen Lethality Internal Core: 165°F (73.9°C)",
      "details": "Radiant and convective heat must penetrate food to achieve complete microbial inactivation of Salmonella, Listeria, and vegetative pathogens."
    },
    "safetyStandard": {
      "organization": "USDA FSIS / FDA",
      "standard": "FDA Food Code 2022 § 3-401.11 / USDA FSIS Guidelines",
      "citation": "Mandatory internal cooking temperatures for food safety and pathogen elimination."
    },
    "applianceSpecs": {
      "parameter": "Oven Thermal Core Verification",
      "guideline": "Bake at 350°F–400°F; always verify internal core doneness with a calibrated digital food thermometer inserted into the thickest portion."
    }
  },
  "baby-bottles-pack": {
    "materialThermal": {
      "property": "Microbiological Lethality Core Temperature",
      "threshold": "Pathogen Lethality Internal Core: 165°F (73.9°C)",
      "details": "Radiant and convective heat must penetrate food to achieve complete microbial inactivation of Salmonella, Listeria, and vegetative pathogens."
    },
    "safetyStandard": {
      "organization": "USDA FSIS / FDA",
      "standard": "FDA Food Code 2022 § 3-401.11 / USDA FSIS Guidelines",
      "citation": "Mandatory internal cooking temperatures for food safety and pathogen elimination."
    },
    "applianceSpecs": {
      "parameter": "Oven Thermal Core Verification",
      "guideline": "Bake at 350°F–400°F; always verify internal core doneness with a calibrated digital food thermometer inserted into the thickest portion."
    }
  },
  "pacifiers-silicone": {
    "materialThermal": {
      "property": "Continuous Thermal Service Range",
      "threshold": "-40°F to 450°F–500°F (-40°C to 232°C–260°C)",
      "details": "Platinum-cured food-grade silicone retains flexibility and inertness up to 450°F; direct contact with open flames or heating coils causes charring."
    },
    "safetyStandard": {
      "organization": "FDA",
      "standard": "21 CFR § 177.2600",
      "citation": "Rubber articles intended for repeated use in contact with food."
    },
    "applianceSpecs": {
      "parameter": "Radiant Coil Clearance",
      "guideline": "Safe for standard baking up to 425°F–450°F; always place on a supporting metal baking sheet and avoid direct broiler heating."
    }
  },
  "steel-wool-scour": {
    "materialThermal": {
      "property": "Microbiological Lethality Core Temperature",
      "threshold": "Pathogen Lethality Internal Core: 165°F (73.9°C)",
      "details": "Radiant and convective heat must penetrate food to achieve complete microbial inactivation of Salmonella, Listeria, and vegetative pathogens."
    },
    "safetyStandard": {
      "organization": "USDA FSIS / FDA",
      "standard": "FDA Food Code 2022 § 3-401.11 / USDA FSIS Guidelines",
      "citation": "Mandatory internal cooking temperatures for food safety and pathogen elimination."
    },
    "applianceSpecs": {
      "parameter": "Oven Thermal Core Verification",
      "guideline": "Bake at 350°F–400°F; always verify internal core doneness with a calibrated digital food thermometer inserted into the thickest portion."
    }
  },
  "crocs-shoes": {
    "materialThermal": {
      "property": "Microbiological Lethality Core Temperature",
      "threshold": "Pathogen Lethality Internal Core: 165°F (73.9°C)",
      "details": "Radiant and convective heat must penetrate food to achieve complete microbial inactivation of Salmonella, Listeria, and vegetative pathogens."
    },
    "safetyStandard": {
      "organization": "USDA FSIS / FDA",
      "standard": "FDA Food Code 2022 § 3-401.11 / USDA FSIS Guidelines",
      "citation": "Mandatory internal cooking temperatures for food safety and pathogen elimination."
    },
    "applianceSpecs": {
      "parameter": "Oven Thermal Core Verification",
      "guideline": "Bake at 350°F–400°F; always verify internal core doneness with a calibrated digital food thermometer inserted into the thickest portion."
    }
  },
  "running-shoes": {
    "materialThermal": {
      "property": "Microbiological Lethality Core Temperature",
      "threshold": "Pathogen Lethality Internal Core: 165°F (73.9°C)",
      "details": "Radiant and convective heat must penetrate food to achieve complete microbial inactivation of Salmonella, Listeria, and vegetative pathogens."
    },
    "safetyStandard": {
      "organization": "USDA FSIS / FDA",
      "standard": "FDA Food Code 2022 § 3-401.11 / USDA FSIS Guidelines",
      "citation": "Mandatory internal cooking temperatures for food safety and pathogen elimination."
    },
    "applianceSpecs": {
      "parameter": "Oven Thermal Core Verification",
      "guideline": "Bake at 350°F–400°F; always verify internal core doneness with a calibrated digital food thermometer inserted into the thickest portion."
    }
  }
};
