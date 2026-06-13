// SEO and Content Helpers for isitkitchensafe.com

/**
 * Generates a precise meta description between 150 and 160 characters.
 * Uses natural language padding (no exclamation marks or garbage padding) to hit the limit.
 */
export function generateMetaDescription(item, appliance, safeStatus, shortAnswer) {
  const statusUpper = safeStatus.toUpperCase();
  let baseDesc = `Can you put ${item} in the ${appliance}? The answer is ${statusUpper}. ${shortAnswer}`;
  baseDesc = baseDesc.replace(/\s+/g, ' ').trim();
  
  if (baseDesc.length >= 150 && baseDesc.length <= 160) {
    return baseDesc;
  }
  
  if (baseDesc.length > 160) {
    let truncated = baseDesc.substring(0, 157);
    const lastSpace = truncated.lastIndexOf(' ');
    if (lastSpace > 120) {
      truncated = truncated.substring(0, lastSpace);
    }
    return truncated + '...';
  }
  
  // Natural padding sentences of varying lengths to hit 150-160 characters
  const paddings = [
    ` Learn about safety warnings, expert kitchen tips, and detailed appliance compatibility rules.`, // 96
    ` Read our complete breakdown of safety warnings, expert kitchen tips, and detailed appliance FAQs.`, // 99
    ` Find out the official safety guidelines, manufacturer warnings, and material care instructions.`, // 95
    ` Discover manufacturer warnings, materials safety checklists, and detailed appliance guidelines.`, // 96
    ` Get expert safety instructions, manufacturer guidelines, and appliance compatibility details.`, // 93
    ` Explore temperature guidelines, safety warnings, and appliance compatibility requirements.`, // 92
    ` Check our detailed safety analysis, manufacturer warnings, and kitchen tips.`, // 77
    ` Read safety warnings, manufacturer guidelines, and helpful tips.`, // 65
    ` Learn material safety rules, manufacturer tips, and warnings.`, // 61
    ` Get manufacturer tips, warnings, and safety guidelines.`, // 54
    ` Read expert guidelines and safety warnings.`, // 42
    ` Learn safety guidelines and warnings.`, // 37
    ` Read our complete kitchen guide.`, // 32
    ` Get safety tips and rules.`, // 26
  ];
  
  // Try to find a single padding sentence that puts us in the 150-160 range
  for (const pad of paddings) {
    const combined = baseDesc + pad;
    if (combined.length >= 150 && combined.length <= 160) {
      return combined;
    }
  }
  
  // If no single padding fits perfectly, build a custom one using words
  const fillerWords = [
    "Learn", "all", "about", "the", "recommended", "safety", "precautions", "and", "manufacturer",
    "guidelines", "to", "protect", "your", "kitchen", "utensils", "from", "damage", "and", "ensure",
    "proper", "appliance", "care", "and", "food", "safety", "standards", "according", "to", "official", "rules"
  ];
  
  let customPad = " ";
  for (const word of fillerWords) {
    if ((baseDesc + customPad + word + ".").length <= 160) {
      customPad += (customPad === " " ? "" : " ") + word;
    } else {
      break;
    }
  }
  customPad += ".";
  
  let finalDesc = (baseDesc + customPad).replace(/\s+/g, ' ').trim();
  if (finalDesc.length >= 150 && finalDesc.length <= 160) {
    return finalDesc;
  }
  
  // Absolute fallback
  finalDesc = finalDesc.padEnd(150, ' ');
  if (finalDesc.length > 160) {
    return finalDesc.substring(0, 157) + '...';
  }
  return finalDesc;
}

/**
 * Generates two paragraphs of rich, unique, USDA-aligned safety analysis.
 * Uses a deterministic hash based on item and appliance to choose different sentence structures,
 * ensuring no two pages have duplicate text.
 */
export function getUniqueSafetyAnalysis(item, appliance, safeStatus, shortAnswer, tips, warnings) {
  const statusText = safeStatus === 'yes' ? 'completely safe' : safeStatus === 'no' ? 'strictly unsafe' : 'dependent on specific guidelines';
  
  // Generate a hash based on item + appliance
  const str = item + appliance;
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = str.charCodeAt(i) + ((hash << 5) - hash);
  }
  hash = Math.abs(hash);
  
  const p1Index = hash % 5;
  const p2Index = (hash >> 2) % 5;
  
  const p1Templates = [
    // Template 0
    `Evaluating the structural integrity of ${item} when exposed to a ${appliance} environment requires a close look at material science. The mechanics of a ${appliance} involve physical forces—whether high-temperature water jets, vacuum freezing, drying friction, or direct electromagnetic wave excitation—that stress molecular bonds. For an item like ${item}, these factors determine if the material expands, degrades, or maintains its form safely. Official testing by manufacturers and guidelines from organizations like the USDA emphasize that the chemical properties of ${item} dictate its compatibility with the operational dynamics of the ${appliance}.`,
    // Template 1
    `When deciding whether to utilize ${item} within a standard household ${appliance}, safety must remain the primary concern. Operating a ${appliance} introduces thermal energy, low-temperature stress, or moisture exposure that can lead to physical warping or accidental fires. For ${item}, safety standards from the FDA and USDA highlight how different materials respond under high-pressure conditions. Standard precautions should always be taken to avoid catastrophic failures, verifying that ${item} does not contain elements that react adversely to the ${appliance}'s cycles.`,
    // Template 2
    `The compatibility of ${item} with a standard ${appliance} cycle is a key factor in kitchen management and product longevity. Home economists and manufacturers test items like ${item} to see if they can withstand repeated cycles in a ${appliance} without losing their functional shape. Even if an item appears sturdy, the intense environment of a ${appliance} can cause micro-cracks, color fading, or internal structural degradation. Understanding these guidelines protects your investment in ${item} and ensures your ${appliance} runs efficiently without unnecessary wear.`,
    // Template 3
    `Every kitchen appliance, including the ${appliance}, creates a microclimate of temperature and moisture that can be hostile to everyday materials. Placed inside a ${appliance}, the physical structure of ${item} is subjected to forces designed to clean, heat, or preserve. Material engineers analyze these interactions to determine if ${item} will leach chemicals, warp, or crack under stress. By referencing safety manuals, home cooks can understand why certain items are safe for the ${appliance} while others present significant risks.`,
    // Template 4
    `Maintaining a sanitary and hazard-free kitchen relies on following official guidelines from the USDA and FDA regarding appliance use. When you put ${item} in a ${appliance}, you are subjecting it to extreme conditions that could compromise food safety or cause mechanical damage. For ${item}, safety profiles are carefully calculated based on how the material transfers heat or resists cold. Ensuring that ${item} is used correctly in the ${appliance} prevents contamination, preserves structural integrity, and keeps your household safe.`
  ];
  
  const p2Templates = [
    // Template 0
    `Specifically, using ${item} in the ${appliance} is classified as ${statusText}. A primary hazard to watch out for is ${warnings[0] || 'structural damage or cracking'}, which can ruin the item or create safety concerns. To avoid this, home economics experts recommend following procedures such as ${tips[0] || 'proper temperature settings'} and ensuring the item is placed correctly. Regular inspection for wear and tear is recommended before any use.`,
    // Template 1
    `With a safety status of ${statusText}, ${item} requires careful handling inside the ${appliance}. The primary issue revolves around ${warnings[0] || 'potential warping or melting under heat'}, making it critical to inspect the item beforehand. Look for explicit compatibility stamps on the bottom of the ${item}. Additionally, using settings like ${tips[0] || 'gentle or low-temperature cycles'} will help mitigate risks and extend the life of both your appliance and the item.`,
    // Template 2
    `Because the safety verdict for ${item} in the ${appliance} is ${statusText}, users must respect the material's specific temperature thresholds. Exposure to ${warnings[0] || 'abrupt thermal shock or mechanical agitation'} can lead to immediate failure. Best practices include ${tips[0] || 'allowing the item to cool down gradually'} and verifying that no thin plastic or adhesive parts are exposed to the cycle. When in doubt, hand washing or room-temperature storage is the safest alternative.`,
    // Template 3
    `The classification of ${statusText} for ${item} inside the ${appliance} highlights the importance of proper arrangement and cycle selection. Improper placement can lead to ${warnings[0] || 'excessive wear, blockage, or damage to heating elements'}. To ensure a safe cycle, make sure to ${tips[0] || 'place the item securely on the top rack'} and keep it away from direct heat sources. Always refer to your specific model's manufacturer manual for unit-specific limitations.`,
    // Template 4
    `In light of the ${statusText} safety rating for ${item} in the ${appliance}, kitchen safety protocols should be strictly enforced. The material properties of ${item} make it vulnerable to ${warnings[0] || 'chemical degradation or extreme stress'}. Implementing simple precautions, such as ${tips[0] || 'using mild detergents or moderate cycle times'}, ensures that you avoid hazards and maintain a clean, efficient cooking space.`
  ];
  
  return [
    p1Templates[p1Index],
    p2Templates[p2Index]
  ];
}
