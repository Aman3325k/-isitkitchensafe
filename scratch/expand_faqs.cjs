const fs = require('fs');

const itemsPath = 'src/data/items.json';
const items = JSON.parse(fs.readFileSync(itemsPath, 'utf8'));

const newFaqsBySlug = {
  'asparagus': [
    {
      question: 'Do you need to blanch asparagus before freezing it?',
      answer: 'Yes, blanching is essential; boiling spears for 2 to 4 minutes (depending on stalk caliper) denatures catalase and peroxidase enzymes that would otherwise break down stem lignins, leaving unblanched spears unpleasantly stringy and discolored.'
    },
    {
      question: 'How do you prevent asparagus tips from becoming mushy when frozen?',
      answer: 'Flash-freeze blanched spears in a single layer on a parchment-lined baking sheet before bagging; rapid chilling creates microscopic ice crystals that protect fragile apical tip florets from mechanical crushing.'
    },
    {
      question: 'Should you thaw frozen asparagus before cooking?',
      answer: 'Never thaw asparagus prior to cooking; toss frozen spears straight into a sizzling hot skillet with olive oil or drop into boiling water to flash-evaporate surface moisture while keeping tender tips intact.'
    }
  ],
  'bell-pepper': [
    {
      question: 'Do you have to blanch bell peppers before freezing them?',
      answer: 'No, unlike most vegetables, bell peppers have low enzyme activity and freeze wonderfully raw without any blanching.'
    },
    {
      question: 'Can you freeze whole bell peppers?',
      answer: 'Yes, you can freeze whole cored bell peppers for future stuffed peppers, or slice them into strips for convenient daily cooking.'
    },
    {
      question: 'How long do frozen bell peppers last in the freezer?',
      answer: 'Diced or sliced bell peppers sealed in airtight freezer bags remain flavorful and nutritious for up to 10 to 12 months at 0°F (-18°C).'
    }
  ],
  'brussels-sprouts': [
    {
      question: 'Why is blanching necessary before freezing Brussels sprouts?',
      answer: 'Dense Brussels sprout heads trap oxidative enzymes inside their tightly layered leaves; blanching for 3 to 5 minutes deactivates myrosinase enzymes that would otherwise turn the sprouts sulfurous, bitter, and olive-brown.'
    },
    {
      question: 'How do you prepare Brussels sprouts for the freezer?',
      answer: 'Trim the tough base stem, remove yellowing outer leaves, cut an X in the base of large sprouts for even heat penetration during blanching, chill in an ice bath, and pat completely dry before freezing.'
    },
    {
      question: 'Can you roast Brussels sprouts directly from the freezer?',
      answer: 'Yes, halve frozen sprouts, toss with oil, and roast at high heat (425°F/220°C) directly on a preheated baking sheet; roasting from frozen avoids the soggy texture caused by room-temperature thawing.'
    }
  ],
  'carrot': [
    {
      question: 'Can you freeze whole, raw carrots?',
      answer: 'Freezing whole raw carrots is not recommended because ice expansion fractures their dense pectin matrix, resulting in rubbery, spongy roots upon thawing; slicing and blanching yields vastly superior texture.'
    },
    {
      question: 'How long should carrot coins or sticks be blanched before freezing?',
      answer: 'Blanch sliced or diced carrots in boiling water for 2 to 3 minutes, then shock in ice water for the same duration to halt thermal carryover and preserve sweet carotenoid flavor compounds.'
    },
    {
      question: 'Can frozen carrots be used in fresh salads?',
      answer: 'No, frozen carrots permanently lose their rigid cellular turgor and raw snap; reserve frozen carrots for simmering in soups, braises, pot roasts, and stir-fries.'
    }
  ],
  'corn': [
    {
      question: 'How do you stop sweet corn from turning starchy in the freezer?',
      answer: 'Blanch whole ears in boiling water for 7 to 11 minutes (or 4 minutes before cutting kernels off the cob) to halt invertase enzymes that rapidly convert sweet sucrose into bland, chalky starches.'
    },
    {
      question: 'Is it better to freeze corn on the cob or as cut kernels?',
      answer: 'Cut kernels freeze much better and save freezer space; freezing on the cob often leads to a soggy, waterlogged cob core that imparts a woody off-flavor to the kernels during prolonged storage.'
    },
    {
      question: 'Do you need to thaw frozen corn kernels before cooking?',
      answer: 'No, add frozen corn kernels directly to hot buttered skillets, boiling chowders, or salsa pans; their small thermal mass allows them to cook thoroughly in just 2 to 3 minutes.'
    }
  ],
  'eggplant': [
    {
      question: 'Why can\'t you freeze raw eggplant?',
      answer: 'Raw eggplant acts like an air-filled sponge; freezing collapses its delicate aerenchyma cells and triggers rapid enzymatic browning from polyphenol oxidases, leaving thawed flesh black, slimy, and bitter.'
    },
    {
      question: 'What is the best method to prep eggplant for freezing?',
      answer: 'Steam-blanch slices for 3 to 4 minutes in water with a tablespoon of lemon juice to prevent oxidation, or roast cubed eggplant until caramelized and tender before freezing in airtight containers.'
    },
    {
      question: 'Can frozen eggplant slices be used for eggplant parmesan?',
      answer: 'Yes, bread and pre-bake eggplant slices on a sheet pan before freezing; bake them straight from the freezer under marinara and cheese without thawing to prevent a soggy casserole.'
    }
  ],
  'garlic': [
    {
      question: 'Can you freeze whole, unpeeled garlic bulbs?',
      answer: 'Yes, you can freeze whole unpeeled bulbs directly in a freezer bag; individual cloves pop easily out of their papery skins when sliced while still partially frozen.'
    },
    {
      question: 'Is it safe to freeze minced garlic in oil?',
      answer: 'Freezing garlic in oil is safe and prevents Clostridium botulinum spore germination (which occurs in room-temperature garlic oil); however, store it strictly at 0°F (-18°C) and never let thawed mixtures sit at room temperature.'
    },
    {
      question: 'Does freezing diminish the pungent flavor of fresh garlic?',
      answer: 'Freezing slightly mellows sharp, fiery allicin notes while preserving rich aromatics; for intense raw pungency use fresh garlic, but for cooked sauté bases frozen garlic performs identically to fresh.'
    }
  ],
  'ginger': [
    {
      question: 'Do you need to peel fresh ginger before freezing it?',
      answer: 'No, freezing whole unpeeled ginger knobs in an airtight bag is the gold-standard method; the thin skin grates away effortlessly alongside the frozen flesh with a microplane.'
    },
    {
      question: 'Why is frozen ginger easier to grate than fresh ginger?',
      answer: 'Sub-zero temperatures solidify internal moisture within the rhizome\'s vascular bundles, allowing a microplane to slice cleanly through tough fibers without stringy clumping or juice splatter.'
    },
    {
      question: 'How long does whole frozen ginger remain potent in the freezer?',
      answer: 'Wrapped tightly in plastic wrap and stored in a freezer bag, whole ginger retains its zesty gingerol heat and aromatic essential oils for up to 6 to 9 months.'
    }
  ],
  'green-beans': [
    {
      question: 'Do green beans require blanching before freezing?',
      answer: 'Yes, blanching green beans in boiling water for 3 minutes halts catalase enzymes that cause faded olive discoloration, tough fibrous skins, and cardboard-like off-flavors during freezing.'
    },
    {
      question: 'How do you keep frozen green beans from clumping together in a block?',
      answer: 'After chilling in an ice bath, pat the beans completely dry with towels and spread in a single layer on a baking sheet to freeze solid for 1 hour before bagging.'
    },
    {
      question: 'How should frozen green beans be cooked to prevent sogginess?',
      answer: 'Steam or sauté frozen green beans directly in a hot pan with butter or garlic over medium-high heat for 4 to 6 minutes; avoid slow thawing or long boiling, which make bean pods mushy.'
    }
  ],
  'kale': [
    {
      question: 'Can you freeze kale raw without blanching?',
      answer: 'Yes, if intended for smoothies within 4 to 6 weeks, raw destemmed kale leaves can be frozen directly; however, for long-term storage or cooked dishes, blanching for 2 minutes is required to preserve deep green color and nutrients.'
    },
    {
      question: 'How do you prep kale for convenient portioning from the freezer?',
      answer: 'Strip the tough fibrous central stems, chop the leaves, flash-freeze them loose on a sheet pan, and seal in freezer bags; frozen leaves can be crushed by hand directly in the bag into cooking-ready flakes.'
    },
    {
      question: 'Can thawed kale be used in fresh kale salads?',
      answer: 'No, ice crystallization breaks down leaf cuticle stiffness, so thawed kale wilts; use frozen kale directly in simmered soups, bean stews, egg frittatas, or blended green drinks.'
    }
  ],
  'mushroom': [
    {
      question: 'Why is it better to cook mushrooms before freezing them?',
      answer: 'Mushrooms are over 90% water and contain active polyphenol oxidase enzymes; freezing raw causes heavy water loss and rubbery black discoloration, whereas sautéing in butter or oil first locks in savory umami and firm texture.'
    },
    {
      question: 'Can you steam-blanch mushrooms instead of sautéing them?',
      answer: 'Yes, soaking whole or sliced mushrooms in water with 1 teaspoon lemon juice for 5 minutes, then steam-blanching for 3 to 5 minutes, effectively halts enzymatic browning before freezing.'
    },
    {
      question: 'How do you use frozen mushrooms in recipes?',
      answer: 'Add pre-cooked frozen mushrooms directly to hot sauces, risottos, gravies, or pizza toppings while still frozen; cooking without prior thawing prevents excess water from pooling in the dish.'
    }
  ],
  'onion': [
    {
      question: 'Do you need to blanch chopped onions before freezing?',
      answer: 'No, onions have naturally low levels of deteriorative enzymes and freeze successfully raw when diced, saving significant meal-prep time.'
    },
    {
      question: 'How do you prevent onion odor from permeating the entire freezer?',
      answer: 'Double-bag diced onions in heavy-duty freezer bags or seal them inside glass freezer jars with tight gaskets; volatile sulfur compounds easily penetrate thin standard plastic wraps.'
    },
    {
      question: 'Can frozen onions be caramelized?',
      answer: 'Yes, in fact, frozen onions caramelize faster than fresh ones because ice crystal damage ruptures cell walls, allowing moisture to evaporate and natural sugars to brown more rapidly in the skillet.'
    }
  ],
  'peas': [
    {
      question: 'How long should freshly shelled garden peas be blanched before freezing?',
      answer: 'Blanch small sweet peas in boiling water for 90 seconds (2 minutes for large peas), then plunge immediately into ice water to deactivate enzymes and fix their brilliant bright green chlorophyll.'
    },
    {
      question: 'Why do commercial frozen peas taste so much sweeter than unblanched home-frozen peas?',
      answer: 'Commercial processors blanch and flash-freeze peas within hours of harvest, locking in peak sucrose; home gardeners must blanch promptly to prevent natural enzymes from turning sweet sugars into starchy flouriness.'
    },
    {
      question: 'What is the best way to reheat frozen peas without wrinkling them?',
      answer: 'Steam or gently simmer frozen peas in lightly salted water for only 2 to 3 minutes, or warm them directly in a buttered skillet; prolonged boiling ruptures skins and causes wrinkly, deflated peas.'
    }
  ],
  'spinach': [
    {
      question: 'How should fresh spinach be blanched before freezing?',
      answer: 'Steam-blanch or boil spinach leaves in a large pot of water for just 90 seconds, plunge into ice water, and firmly squeeze out every drop of excess moisture before packing into portioned freezer bags.'
    },
    {
      question: 'Why is it critical to squeeze water out of blanched spinach before freezing?',
      answer: 'Spinach leaves hold tremendous surface and cellular water; freezing loose, soggy spinach results in huge ice blocks and severe freezer burn, whereas firmly squeezed pucks thaw cleanly for dips, quiches, and pasta fillings.'
    },
    {
      question: 'Can raw unblanched spinach be frozen for smoothies?',
      answer: 'Yes, thoroughly washed and dried raw spinach leaves can be frozen raw for up to 2 months solely for blending into smoothies, where leaf texture is completely pulverized.'
    }
  ],
  'sweet-potato': [
    {
      question: 'Can you freeze raw sweet potatoes?',
      answer: 'Never freeze raw sweet potatoes; freezing raw tubers triggers severe enzymatic discoloration, breaks down internal starches into an acrid watery mess, and leaves the centers unpleasantly hard and mealy.'
    },
    {
      question: 'What is the best way to freeze sweet potatoes for meal prep?',
      answer: 'Bake whole sweet potatoes until tender, allow them to cool, wrap individually in foil and freezer bags; alternatively, mash the cooked flesh with a splash of lemon juice to freeze in recipe-sized containers.'
    },
    {
      question: 'How do you reheat frozen baked sweet potatoes?',
      answer: 'Unwrap the frozen potato and bake at 375°F (190°C) for 25 to 30 minutes until piping hot, or steam in a covered dish until tender and steaming throughout.'
    }
  ],
  'yellow-squash': [
    {
      question: 'How do you blanch summer yellow squash before freezing?',
      answer: 'Slice yellow squash into 1/2-inch rounds and blanch in boiling water for 3 minutes, then cool immediately in ice water; blanching inactivates enzymes that cause bitterness and slimy yellow flesh.'
    },
    {
      question: 'Can you freeze grated yellow squash for baking?',
      answer: 'Yes, coarsely grate yellow squash, pack into measured freezer bags without blanching, and freeze; thaw and thoroughly drain in a fine-mesh strainer before adding to quick breads, muffins, or savory fritters.'
    },
    {
      question: 'How should frozen yellow squash slices be cooked to prevent mushiness?',
      answer: 'Sauté frozen slices in a very hot skillet with olive oil or add directly to bubbling casseroles and stews without thawing; thawing at room temperature releases excessive water, collapsing slice structure.'
    }
  ]
};

console.log('Slugs to update FAQs:', Object.keys(newFaqsBySlug).length);

let updatedCount = 0;
for (const [slug, faqs] of Object.entries(newFaqsBySlug)) {
  const item = items.find(i => i.appliance === 'freezer' && i.slug === slug);
  if (!item) {
    console.error(`ERROR: Item not found: ${slug}`);
    process.exit(1);
  }
  item.faqs = faqs;
  updatedCount++;
}

fs.writeFileSync(itemsPath, JSON.stringify(items, null, 2) + '\n', 'utf8');
console.log(`Successfully updated FAQs for ${updatedCount} items.`);
