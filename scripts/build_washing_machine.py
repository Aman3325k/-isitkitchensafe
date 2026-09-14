# -*- coding: utf-8 -*-
"""Assemble and validate washing machine JSON datasets for Japanese and Simplified Chinese."""

import sys
import json
from pathlib import Path

# Add translation scripts path
sys.path.append(str(Path(__file__).parent / "translations"))

from wm_ja_data_1 import ITEMS as JA_1
from wm_ja_data_2 import ITEMS as JA_2
from wm_ja_data_3 import ITEMS as JA_3
from wm_ja_data_4 import ITEMS as JA_4

from wm_zh_data_1 import ITEMS as ZH_1
from wm_zh_data_2 import ITEMS as ZH_2
from wm_zh_data_3 import ITEMS as ZH_3
from wm_zh_data_4 import ITEMS as ZH_4

def main():
    with open("src/data/washing-machine.json", "r", encoding="utf-8") as f:
        en_data = json.load(f)

    ja_items = JA_1 + JA_2 + JA_3 + JA_4
    zh_items = ZH_1 + ZH_2 + ZH_3 + ZH_4

    print(f"EN items: {len(en_data)}")
    print(f"JA items: {len(ja_items)}")
    print(f"ZH items: {len(zh_items)}")

    assert len(ja_items) == len(en_data), f"JA count mismatch: {len(ja_items)} vs {len(en_data)}"
    assert len(zh_items) == len(en_data), f"ZH count mismatch: {len(zh_items)} vs {len(en_data)}"

    en_slugs = [item["slug"] for item in en_data]

    # Validate JA
    for i, item in enumerate(ja_items):
        expected_slug = en_slugs[i]
        assert item["slug"] == expected_slug, f"JA slug mismatch at {i}: {item['slug']} != {expected_slug}"
        assert item["appliance"] == "washing-machine"
        assert item["safe"] in ("yes", "no", "depends")
        assert len(item["item"]) > 0
        assert len(item["verdict"]) > 0
        assert len(item["shortAnswer"]) > 0
        assert len(item["reason"]) > 0
        assert len(item["instructions"]) >= 2
        assert len(item["warnings"]) >= 2
        assert len(item["faqs"]) >= 3
        assert len(item["relatedItems"]) >= 3
        assert len(item["material"]) > 0
        assert len(item["keyRisk"]) > 0
        assert len(item["tip"]) > 0
        assert len(item["learnMore"]) > 0
        # Ensure tips and specific_warning are present
        if "tips" not in item:
            item["tips"] = item["instructions"]
        if "specific_warning" not in item:
            item["specific_warning"] = item["keyRisk"]

    # Validate ZH
    for i, item in enumerate(zh_items):
        expected_slug = en_slugs[i]
        assert item["slug"] == expected_slug, f"ZH slug mismatch at {i}: {item['slug']} != {expected_slug}"
        assert item["appliance"] == "washing-machine"
        assert item["safe"] in ("yes", "no", "depends")
        assert len(item["item"]) > 0
        assert len(item["verdict"]) > 0
        assert len(item["shortAnswer"]) > 0
        assert len(item["reason"]) > 0
        assert len(item["instructions"]) >= 2
        assert len(item["warnings"]) >= 2
        assert len(item["faqs"]) >= 3
        assert len(item["relatedItems"]) >= 3
        assert len(item["material"]) > 0
        assert len(item["keyRisk"]) > 0
        assert len(item["tip"]) > 0
        assert len(item["learnMore"]) > 0
        # Ensure tips and specific_warning are present
        if "tips" not in item:
            item["tips"] = item["instructions"]
        if "specific_warning" not in item:
            item["specific_warning"] = item["keyRisk"]

    # Write out JSON files
    ja_path = Path("src/data/washing-machine.ja.json")
    with open(ja_path, "w", encoding="utf-8") as f:
        json.dump(ja_items, f, ensure_ascii=False, indent=2)
    print(f"Successfully wrote {ja_path} ({len(ja_items)} items)")

    zh_path = Path("src/data/washing-machine.zh-cn.json")
    with open(zh_path, "w", encoding="utf-8") as f:
        json.dump(zh_items, f, ensure_ascii=False, indent=2)
    print(f"Successfully wrote {zh_path} ({len(zh_items)} items)")

if __name__ == "__main__":
    main()
