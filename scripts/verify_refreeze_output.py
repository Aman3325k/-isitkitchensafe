import re
import sys
sys.stdout.reconfigure(encoding='utf-8')

def check_page(path):
    print('=== Checking:', path)
    with open(path, 'r', encoding='utf-8') as f:
        html = f.read()
    title_match = re.search(r'<title>(.*?)</title>', html, re.DOTALL)
    print('Title:', title_match.group(1).strip() if title_match else None)
    h1_match = re.search(r'<h1[^>]*>(.*?)</h1>', html, re.DOTALL)
    print('H1:', re.sub(r'<[^>]+>', '', h1_match.group(1)).strip() if h1_match else None)
    hreflangs = re.findall(r'<link[^>]*rel="alternate"[^>]*hreflang="([^"]+)"[^>]*href="([^"]+)"', html)
    print('Hreflangs count:', len(hreflangs))
    for lang, href in sorted(hreflangs):
        print(f'  {lang}: {href}')
    schemas = re.findall(r'<script[^>]*type="application/ld\+json"[^>]*>(.*?)</script>', html, re.DOTALL)
    print('JSON-LD count:', len(schemas))

check_page('dist/ja/refreeze/index.html')
check_page('dist/zh-cn/refreeze/index.html')
check_page('dist/ja/refreeze/breast-milk/index.html')
check_page('dist/zh-cn/refreeze/breast-milk/index.html')
check_page('dist/refreeze/breast-milk/index.html')
