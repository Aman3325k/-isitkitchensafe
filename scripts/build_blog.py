# -*- coding: utf-8 -*-
"""
build_blog.py
=============
Merges English blog source with JA and ZH-CN translation batches
and writes:
  - src/data/blog.ja.json
  - src/data/blog.zh-cn.json

Run from the project root:
  python safecheck/scripts/build_blog.py
"""

import json
import os
import sys

# ---------------------------------------------------------------------------
# Paths
# ---------------------------------------------------------------------------
SCRIPT_DIR = os.path.dirname(os.path.abspath(__file__))
PROJECT_ROOT = os.path.dirname(SCRIPT_DIR)
DATA_DIR = os.path.join(PROJECT_ROOT, "src", "data")

EN_BATCH_1 = os.path.join(SCRIPT_DIR, "blog_batch_1_en.json")
EN_BATCH_2 = os.path.join(SCRIPT_DIR, "blog_batch_2_en.json")

TRANS_DIR = os.path.join(SCRIPT_DIR, "translations")

# ---------------------------------------------------------------------------
# Load translation batches via import
# ---------------------------------------------------------------------------
sys.path.insert(0, TRANS_DIR)

from blog_batch_1 import JA_BLOG_BATCH_1, ZH_BLOG_BATCH_1  # noqa: E402
from blog_batch_2 import JA_BLOG_BATCH_2, ZH_BLOG_BATCH_2  # noqa: E402

# Merge both batches into a single locale dict
JA_ALL = {**JA_BLOG_BATCH_1, **JA_BLOG_BATCH_2}
ZH_ALL = {**ZH_BLOG_BATCH_1, **ZH_BLOG_BATCH_2}

# ---------------------------------------------------------------------------
# Helpers
# ---------------------------------------------------------------------------
REQUIRED_KEYS = {"title", "excerpt", "date", "readTime", "author",
                 "intro", "sections", "conclusion", "faqs", "relatedTools"}
SECTION_KEYS  = {"title", "content", "type", "boxText"}


def validate_post(slug: str, post: dict, locale: str) -> list[str]:
    """Return a list of error strings (empty means OK)."""
    errors = []
    missing_top = REQUIRED_KEYS - set(post.keys())
    if missing_top:
        errors.append(f"[{locale}] {slug}: missing top-level keys: {missing_top}")

    sections = post.get("sections", [])
    if not isinstance(sections, list) or len(sections) == 0:
        errors.append(f"[{locale}] {slug}: 'sections' must be a non-empty list")
    else:
        for i, s in enumerate(sections):
            missing_s = SECTION_KEYS - set(s.keys())
            if missing_s:
                errors.append(f"[{locale}] {slug}: section[{i}] missing keys: {missing_s}")

    faqs = post.get("faqs", [])
    if not isinstance(faqs, list) or len(faqs) == 0:
        errors.append(f"[{locale}] {slug}: 'faqs' must be a non-empty list")
    else:
        for i, f in enumerate(faqs):
            if "question" not in f or "answer" not in f:
                errors.append(f"[{locale}] {slug}: faq[{i}] missing 'question' or 'answer'")

    return errors


def build_locale(en_posts: list[dict], translations: dict, locale: str) -> list[dict]:
    """Merge English structural data with translated text fields."""
    output = []
    all_errors = []

    for en in en_posts:
        slug = en["slug"]
        if slug not in translations:
            all_errors.append(f"[{locale}] No translation found for slug: '{slug}'")
            continue

        t = translations[slug]
        post = {
            "slug": slug,
            "title": t["title"],
            "excerpt": t["excerpt"],
            "date": t.get("date", en["date"]),
            "readTime": t.get("readTime", en["readTime"]),
            "author": t.get("author", en["author"]),
            "intro": t["intro"],
            "sections": t["sections"],
            "conclusion": t["conclusion"],
            "faqs": t["faqs"],
            "relatedTools": t["relatedTools"],
        }

        errors = validate_post(slug, post, locale)
        all_errors.extend(errors)
        output.append(post)

    return output, all_errors


# ---------------------------------------------------------------------------
# Main
# ---------------------------------------------------------------------------
def main():
    # Load English source
    with open(EN_BATCH_1, encoding="utf-8") as f:
        en_batch_1 = json.load(f)
    with open(EN_BATCH_2, encoding="utf-8") as f:
        en_batch_2 = json.load(f)
    en_posts = en_batch_1 + en_batch_2

    print(f"English posts loaded: {len(en_posts)}")

    all_errors = []

    # Build JA
    ja_posts, ja_errors = build_locale(en_posts, JA_ALL, "ja")
    all_errors.extend(ja_errors)

    # Build ZH-CN
    zh_posts, zh_errors = build_locale(en_posts, ZH_ALL, "zh-cn")
    all_errors.extend(zh_errors)

    # Report any errors before writing
    if all_errors:
        print("\n=== VALIDATION ERRORS ===")
        for e in all_errors:
            print(f"  ERROR: {e}")
        print(f"\nAborting — {len(all_errors)} error(s) found.")
        sys.exit(1)

    # Ensure output directory exists
    os.makedirs(DATA_DIR, exist_ok=True)

    # Write output files
    ja_path = os.path.join(DATA_DIR, "blog.ja.json")
    with open(ja_path, "w", encoding="utf-8") as f:
        json.dump(ja_posts, f, ensure_ascii=False, indent=2)
    print(f"Written: {ja_path}  ({len(ja_posts)} posts)")

    zh_path = os.path.join(DATA_DIR, "blog.zh-cn.json")
    with open(zh_path, "w", encoding="utf-8") as f:
        json.dump(zh_posts, f, ensure_ascii=False, indent=2)
    print(f"Written: {zh_path}  ({len(zh_posts)} posts)")

    print("\nBlog build complete — no errors.")


if __name__ == "__main__":
    main()
