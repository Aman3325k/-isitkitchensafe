# -*- coding: utf-8 -*-
"""
Build script to assemble src/data/refreeze.ja.json and src/data/refreeze.zh-cn.json
from translation chunks.
"""

import json
import os
import sys

# Ensure translation scripts can be imported
sys.path.append(os.path.join(os.path.dirname(__file__), 'translations'))

import rf_ja_data_1
import rf_ja_data_2
import rf_ja_data_3
import rf_ja_data_4

import rf_zh_data_1
import rf_zh_data_2
import rf_zh_data_3
import rf_zh_data_4

def main():
    base_file = os.path.join(os.path.dirname(__file__), '..', 'src', 'data', 'refreeze.json')
    with open(base_file, 'r', encoding='utf-8') as f:
        en_items = json.load(f)

    print(f"Loaded {len(en_items)} English items from refreeze.json")

    # Combine JA chunks
    all_ja = {}
    all_ja.update(rf_ja_data_1.RF_JA_1)
    all_ja.update(rf_ja_data_2.RF_JA_2)
    all_ja.update(rf_ja_data_3.RF_JA_3)
    all_ja.update(rf_ja_data_4.RF_JA_4)
    print(f"Loaded {len(all_ja)} JA translated items")

    # Combine ZH chunks
    all_zh = {}
    all_zh.update(rf_zh_data_1.RF_ZH_1)
    all_zh.update(rf_zh_data_2.RF_ZH_2)
    all_zh.update(rf_zh_data_3.RF_ZH_3)
    all_zh.update(rf_zh_data_4.RF_ZH_4)
    print(f"Loaded {len(all_zh)} ZH-CN translated items")

    ja_output = []
    zh_output = []

    for en in en_items:
        slug = en['slug']
        if slug not in all_ja:
            raise KeyError(f"Missing JA translation for slug: {slug}")
        if slug not in all_zh:
            raise KeyError(f"Missing ZH-CN translation for slug: {slug}")

        ja_entry = all_ja[slug]
        zh_entry = all_zh[slug]

        # Build JA full item
        ja_item = {
            "item": ja_entry["item"],
            "slug": slug,
            "safe": en["safe"],
            "shortAnswer": ja_entry["shortAnswer"],
            "reason": ja_entry["reason"],
            "instructions": ja_entry["instructions"],
            "warnings": ja_entry["warnings"],
            "faqs": ja_entry["faqs"],
            "relatedItems": en["relatedItems"],
            "material": ja_entry["material"],
            "keyRisk": ja_entry["keyRisk"],
            "tip": ja_entry["tip"],
            "learnMore": ja_entry["learnMore"]
        }
        ja_output.append(ja_item)

        # Build ZH-CN full item
        zh_item = {
            "item": zh_entry["item"],
            "slug": slug,
            "safe": en["safe"],
            "shortAnswer": zh_entry["shortAnswer"],
            "reason": zh_entry["reason"],
            "instructions": zh_entry["instructions"],
            "warnings": zh_entry["warnings"],
            "faqs": zh_entry["faqs"],
            "relatedItems": en["relatedItems"],
            "material": zh_entry["material"],
            "keyRisk": zh_entry["keyRisk"],
            "tip": zh_entry["tip"],
            "learnMore": zh_entry["learnMore"]
        }
        zh_output.append(zh_item)

    # Save JA JSON
    ja_path = os.path.join(os.path.dirname(__file__), '..', 'src', 'data', 'refreeze.ja.json')
    with open(ja_path, 'w', encoding='utf-8') as f:
        json.dump(ja_output, f, ensure_ascii=False, indent=2)
    print(f"Saved {len(ja_output)} items to {ja_path}")

    # Save ZH-CN JSON
    zh_path = os.path.join(os.path.dirname(__file__), '..', 'src', 'data', 'refreeze.zh-cn.json')
    with open(zh_path, 'w', encoding='utf-8') as f:
        json.dump(zh_output, f, ensure_ascii=False, indent=2)
    print(f"Saved {len(zh_output)} items to {zh_path}")

if __name__ == '__main__':
    main()
