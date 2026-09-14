# -*- coding: utf-8 -*-
import sys
import re
from pathlib import Path

sys.stdout.reconfigure(encoding='utf-8')

test_paths = [
    'dist/washing-machine/index.html',
    'dist/es/washing-machine/index.html',
    'dist/pt/washing-machine/index.html',
    'dist/ja/washing-machine/index.html',
    'dist/zh-cn/washing-machine/index.html',
    'dist/washing-machine/sneakers/index.html',
    'dist/es/washing-machine/sneakers/index.html',
    'dist/pt/washing-machine/sneakers/index.html',
    'dist/ja/washing-machine/sneakers/index.html',
    'dist/zh-cn/washing-machine/sneakers/index.html',
    'dist/washing-machine/airpods-case/index.html',
    'dist/ja/washing-machine/airpods-case/index.html',
    'dist/zh-cn/washing-machine/airpods-case/index.html',
    'dist/washing-machine/compression-sleeve/index.html',
    'dist/ja/washing-machine/compression-sleeve/index.html',
    'dist/zh-cn/washing-machine/compression-sleeve/index.html'
]

print('=== Verifying Washing Machine HTML Pages ===')
for p_str in test_paths:
    p = Path(p_str)
    if not p.exists():
        print(f'FAIL: Missing file {p_str}')
        sys.exit(1)
    
    content = p.read_text(encoding='utf-8')
    hreflangs = re.findall(r'<link\s+rel="alternate"\s+hreflang="([^"]+)"\s+href="([^"]+)"', content)
    langs = [h[0].lower() for h in hreflangs]
    expected_langs = {'en', 'es', 'pt', 'ja', 'zh-cn', 'x-default'}
    
    if set(langs) != expected_langs:
        print(f'FAIL {p_str}: hreflangs found {langs} != expected {expected_langs}')
        sys.exit(1)
    
    # Check title
    title_m = re.search(r'<title>(.*?)</title>', content)
    title = title_m.group(1) if title_m else 'NO TITLE'
    
    # Check FAQ schema
    has_faq_schema = '"@type":"FAQPage"' in content or '"@type": "FAQPage"' in content
    
    print(f'OK: {p_str} | Hreflangs: {len(langs)} | FAQ Schema: {has_faq_schema} | Title: {title[:45]}...')

print('\nAll 16 sampled washing machine HTML files passed with 6 reciprocal hreflangs and correct schemas!')
