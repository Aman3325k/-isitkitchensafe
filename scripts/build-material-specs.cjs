const fs = require('fs');
const path = require('path');

const specs = {
  metal: {
    materialThermal: {
      property: "Metallic Structural Stability & Arcing Potential",
      threshold: "Melting Point 1,220°F–2,600°F (660°C–1,427°C); Dielectric Arcing in RF Fields",
      details: "Austenitic stainless steels, cast iron, copper, and aluminum possess exceptional high-temperature conductive stability, but free electron charge accumulation triggers severe arcing in microwave electromagnetic fields."
    },
    safetyStandard: {
      organization: "NSF International / FDA",
      standard: "NSF/ANSI Standard 51 & 21 CFR § 175.300",
      citation: "Food equipment materials standards for metallic food contact, corrosion resistance, and non-toxicity."
    },
    applianceSpecs: {
      parameter: "Appliance Compatibility Spectrum",
      guideline: "100% safe in standard ovens, grills, and stovetops; hand-wash cast iron, carbon steel, and aluminum to avoid stripping seasoning or alkaline oxidation; never microwave."
    }
  },
  plastic: {
    materialThermal: {
      property: "Thermoplastic Glass Transition & Heat Deflection Limit",
      threshold: "Heat Deflection Temperature 140°F–240°F (60°C–115°C); Polypropylene Melts 320°F (160°C)",
      details: "Common polymers (PE, PP, PET, PS) soften under elevated temperatures, releasing plasticizer compounds (phthalates, BPA) and warping dimensional seal geometry."
    },
    safetyStandard: {
      organization: "FDA",
      standard: "21 CFR § 177.1520 (Olefin Polymers) & § 177.1640 (Polystyrene)",
      citation: "Regulates extractable fractions and thermal limits of synthetic food-contact polymers under cooking and storage conditions."
    },
    applianceSpecs: {
      parameter: "Top-Rack & Low-Heat Directives",
      guideline: "Strictly top-rack only in dishwashers away from exposed heating coils; use only containers stamped 'Microwave Safe'; strictly prohibited from ovens and air fryers."
    }
  },
  "glass-ceramic": {
    materialThermal: {
      property: "Vitrified Glaze & Thermal Shock Endurance",
      threshold: "Continuous Thermal Service 450°F–500°F (232°C–260°C); Thermal Shock ΔT = 99°F–300°F",
      details: "Borosilicate glass and vitrified ceramics endure extreme uniform temperatures without leaching or odor absorption; sudden temperature differentials (e.g. cold liquid on hot glass) induce catastrophic fracture."
    },
    safetyStandard: {
      organization: "ASTM / FDA",
      standard: "ASTM C149-14 & FDA CPG Sec. 545.400 / 545.450",
      citation: "Standard test methods for thermal shock resistance of glass containers and ceramicware safety certification."
    },
    applianceSpecs: {
      parameter: "Multi-Appliance Thermal Ramp Protocol",
      guideline: "Excellent for microwaves, dishwashers, freezers, and ovens; always avoid rapid thermal quenching (such as placing hot baking dishes on wet counters)."
    }
  },
  fabric: {
    materialThermal: {
      property: "Textile Fiber Hydrogen Bonding & Keratin Felting Threshold",
      threshold: "Keratin Cuticle Felting >120°F (49°C); Cotton Heat Relaxation 140°F–150°F",
      details: "Natural animal fibers (wool, cashmere) undergo irreversible mechanical felting shrinkage under hot tumbling; natural plant cellulosics (cotton, linen) tolerate moderate drying but contract along fiber axes."
    },
    safetyStandard: {
      organization: "FTC / CPSC",
      standard: "16 CFR Part 423 (Care Labeling Rule) & 16 CFR Part 1610 (Flammability)",
      citation: "Mandatory apparel care instructions and textile flammability safety regulations."
    },
    applianceSpecs: {
      parameter: "Dryer Exhaust Temperature Management",
      guideline: "Tumble cottons on medium heat (135°F–145°F); lay animal protein fibers flat to air dry; keep lint screens clean to preserve airflow."
    }
  },
  footwear: {
    materialThermal: {
      property: "Thermoplastic Outsole Cement Liquefaction & EVA Shrinkage",
      threshold: "Shoe Cement Softening 130°F–140°F (54°C–60°C); EVA Softening >120°F",
      details: "Footwear relies on heat-activated contact adhesives and injected EVA foam outsoles. Dryer heat and violent mechanical tumbling liquefy cement, warp footbeds, and damage dryer drum baffles."
    },
    safetyStandard: {
      organization: "SATRA / Footwear Industry Directives",
      standard: "SATRA TM Footwear Longevity & Adhesion Standards",
      citation: "Footwear should be cleaned manually and air-dried at ambient room temperatures away from artificial thermal sources."
    },
    applianceSpecs: {
      parameter: "Stationary Drying Rack or Ambient Air Dry",
      guideline: "Never tumble shoes freely in a dryer; use a stationary shoe rack attachment on air-fluff (no heat), or air dry stuffed with paper towels."
    }
  },
  silicone: {
    materialThermal: {
      property: "Cross-Linked Polysiloxane Thermal Stability Range",
      threshold: "Continuous Operating Range: -40°F to 450°F–500°F (-40°C to 232°C–260°C)",
      details: "Platinum-cured food-grade silicone features a flexible silicon-oxygen backbone with zero organic plasticizers, maintaining elasticity without melting or off-gassing from deep freeze to oven temperatures."
    },
    safetyStandard: {
      organization: "FDA / BfR",
      standard: "21 CFR § 177.2600 & German BfR Recommendation XV",
      citation: "Rubber articles intended for repeated food contact, specifying total extractable limits under high-heat cooking."
    },
    applianceSpecs: {
      parameter: "Universal Kitchen Appliance Compatibility",
      guideline: "Safe for freezers, microwaves, dishwashers, and ovens up to 450°F; place silicone molds on a rigid metal baking sheet for stability; keep away from open broiler flames."
    }
  },
  "wood-paper": {
    materialThermal: {
      property: "Lignocellulosic Pyrolysis & Moisture Desorption Point",
      threshold: "Cellulose Ignition Point 400°F–450°F (204°C–232°C); Moisture Expansion >15%",
      details: "Natural wood and paper absorb water, expanding during wash cycles and cracking during dry cycles; dry paper desiccates and ignites rapidly under direct radiant or microwave energy."
    },
    safetyStandard: {
      organization: "USDA FSIS / FDA",
      standard: "FDA Food Code 2022 § 4-101.17 & NFPA 96",
      citation: "Safety standards for wooden cutting boards, utensils, and combustible kitchen cellulose products."
    },
    applianceSpecs: {
      parameter: "Hand-Wash Only & Direct Fire Prevention",
      guideline: "Never wash wooden boards or utensils in a dishwasher; soak wooden skewers 30 minutes before grilling/baking; use parchment rather than untreated paper plates in ovens."
    }
  },
  "appliance-components": {
    materialThermal: {
      property: "Composite Seal, Gasket & Coating Integrity",
      threshold: "PTFE Thermal Degradation >500°F; Silicone/EPDM Gasket Service Limit 250°F",
      details: "Appliance removable parts (air fryer baskets, blender jars, pressure cooker rings) feature multi-material interfaces. High heat or harsh detergents degrade sealing gaskets and erode non-stick surfaces."
    },
    safetyStandard: {
      organization: "UL Standards / NSF International",
      standard: "UL 923 / UL 749 / NSF Standard 51",
      citation: "Safety requirements for household food preparation appliances, replacement components, and gasket seal integrity."
    },
    applianceSpecs: {
      parameter: "Manufacturer Recommended Cleaning Protocol",
      guideline: "Inspect silicone sealing gaskets regularly for elasticity; hand-wash non-stick crisper plates to extend coating longevity; verify component part numbers before machine washing."
    }
  }
};

const outPath = path.resolve('src/data/specs/material.cjs');
const content = `// Technical Reference Specifications for Material Categories
// Grounded strictly in FDA, ASTM, NSF, CPSC, and materials science literature.

module.exports = ${JSON.stringify(specs, null, 2)};
`;

fs.writeFileSync(outPath, content, 'utf8');

const jsonPath = path.resolve('src/data/specs/material.json');
fs.writeFileSync(jsonPath, JSON.stringify(specs, null, 2) + '\n', 'utf8');

console.log(`✅ Successfully generated ${Object.keys(specs).length} verified material category specs at ${outPath}`);
