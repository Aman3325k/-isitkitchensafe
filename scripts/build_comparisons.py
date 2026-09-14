# -*- coding: utf-8 -*-
"""Merge comparison batches and generate comparisons.ja.json and comparisons.zh-cn.json"""
import json
import sys
import os

sys.path.append(os.path.join(os.path.dirname(__file__), 'translations'))

from comp_batch_1 import JA_BATCH_1, ZH_BATCH_1
from comp_batch_2 import JA_BATCH_2, ZH_BATCH_2
from comp_batch_3 import JA_BATCH_3, ZH_BATCH_3
from comp_batch_4 import JA_BATCH_4, ZH_BATCH_4

ALL_JA = {}
ALL_JA.update(JA_BATCH_1)
ALL_JA.update(JA_BATCH_2)
ALL_JA.update(JA_BATCH_3)
ALL_JA.update(JA_BATCH_4)

ALL_ZH = {}
ALL_ZH.update(ZH_BATCH_1)
ALL_ZH.update(ZH_BATCH_2)
ALL_ZH.update(ZH_BATCH_3)
ALL_ZH.update(ZH_BATCH_4)

with open('src/data/comparisons.json', 'r', encoding='utf-8') as f:
    en_comps = json.load(f)

print(f"Total English comparisons: {len(en_comps)}")
print(f"Total JA translations: {len(ALL_JA)}")
print(f"Total ZH translations: {len(ALL_ZH)}")

ja_output = []
zh_output = []

for item in en_comps:
    slug = item['slug']
    if slug not in ALL_JA:
        raise ValueError(f"Missing JA translation for slug: {slug}")
    if slug not in ALL_ZH:
        raise ValueError(f"Missing ZH translation for slug: {slug}")
    
    ja_data = ALL_JA[slug]
    zh_data = ALL_ZH[slug]

    # Validate JA schema
    assert len(ja_data['table']) == 5, f"JA {slug} table length != 5"
    assert len(ja_data['item1Pros']) == 3, f"JA {slug} item1Pros != 3"
    assert len(ja_data['item2Pros']) == 3, f"JA {slug} item2Pros != 3"
    assert len(ja_data['useCases']) == 3, f"JA {slug} useCases != 3"
    assert len(ja_data['safetyNotes']) == 3, f"JA {slug} safetyNotes != 3"
    assert len(ja_data['faqs']) == 3, f"JA {slug} faqs != 3"

    # Validate ZH schema
    assert len(zh_data['table']) == 5, f"ZH {slug} table length != 5"
    assert len(zh_data['item1Pros']) == 3, f"ZH {slug} item1Pros != 3"
    assert len(zh_data['item2Pros']) == 3, f"ZH {slug} item2Pros != 3"
    assert len(zh_data['useCases']) == 3, f"ZH {slug} useCases != 3"
    assert len(zh_data['safetyNotes']) == 3, f"ZH {slug} safetyNotes != 3"
    assert len(zh_data['faqs']) == 3, f"ZH {slug} faqs != 3"

    ja_item = {
        "slug": slug,
        "category": item["category"],
        "item1": ja_data["item1"],
        "item2": ja_data["item2"],
        "winner": ja_data["winner"],
        "verdict": ja_data["verdict"],
        "table": ja_data["table"],
        "item1Pros": ja_data["item1Pros"],
        "item2Pros": ja_data["item2Pros"],
        "useCases": ja_data["useCases"],
        "safetyNotes": ja_data["safetyNotes"],
        "faqs": ja_data["faqs"],
        "relatedComparisons": item.get("relatedComparisons", []),
        "relatedItems": item.get("relatedItems", [])
    }
    ja_output.append(ja_item)

    zh_item = {
        "slug": slug,
        "category": item["category"],
        "item1": zh_data["item1"],
        "item2": zh_data["item2"],
        "winner": zh_data["winner"],
        "verdict": zh_data["verdict"],
        "table": zh_data["table"],
        "item1Pros": zh_data["item1Pros"],
        "item2Pros": zh_data["item2Pros"],
        "useCases": zh_data["useCases"],
        "safetyNotes": zh_data["safetyNotes"],
        "faqs": zh_data["faqs"],
        "relatedComparisons": item.get("relatedComparisons", []),
        "relatedItems": item.get("relatedItems", [])
    }
    zh_output.append(zh_item)

with open('src/data/comparisons.ja.json', 'w', encoding='utf-8') as f:
    json.dump(ja_output, f, ensure_ascii=False, indent=2)

with open('src/data/comparisons.zh-cn.json', 'w', encoding='utf-8') as f:
    json.dump(zh_output, f, ensure_ascii=False, indent=2)

print("Successfully generated src/data/comparisons.ja.json and src/data/comparisons.zh-cn.json with 50 items each!")
