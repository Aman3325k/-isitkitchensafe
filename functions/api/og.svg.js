/**
 * Dynamic Per-Page Share (OG 1200x630) & Pinterest (1000x1500) SVG Card Generator
 * Cloudflare Pages Function: GET /api/og.svg
 *
 * Query params:
 *   - title:     Page headline (e.g. "Can You Put Cast Iron in the Dishwasher?")
 *   - verdict:   YES | NO | DEPENDS
 *   - appliance: Category or appliance label (e.g. "Dishwasher")
 *   - summary:   Optional short safety rule / takeaway
 *   - format:    "og" (1200x630, default) | "pin" (1000x1500, Pinterest vertical)
 */

const PALETTES = {
  YES: {
    key: 'YES',
    label: 'YES — SAFE',
    shortLabel: 'YES',
    bgCanvas: '#F0FDF4',
    bgAccent: '#DCFCE7',
    accent: '#059669',
    accentDark: '#065F46',
    accentBorder: '#A7F3D0',
    pillBg: '#059669',
    pillText: '#FFFFFF',
    ruleBg: '#ECFDF5',
    ruleBorder: '#6EE7B7',
    ruleText: '#064E3B',
  },
  NO: {
    key: 'NO',
    label: 'NO — NOT SAFE',
    shortLabel: 'NO',
    bgCanvas: '#FFF1F2',
    bgAccent: '#FFE4E6',
    accent: '#E11D48',
    accentDark: '#9F1239',
    accentBorder: '#FECDD3',
    pillBg: '#E11D48',
    pillText: '#FFFFFF',
    ruleBg: '#FFF1F2',
    ruleBorder: '#FDA4AF',
    ruleText: '#881337',
  },
  DEPENDS: {
    key: 'DEPENDS',
    label: 'DEPENDS — CAUTION',
    shortLabel: 'DEPENDS',
    bgCanvas: '#FFFBEB',
    bgAccent: '#FEF3C7',
    accent: '#D97706',
    accentDark: '#92400E',
    accentBorder: '#FDE68A',
    pillBg: '#D97706',
    pillText: '#FFFFFF',
    ruleBg: '#FFFBEB',
    ruleBorder: '#FCD34D',
    ruleText: '#78350F',
  },
};

/**
 * Strip ASCII control characters and safely XML-escape user input.
 */
function escapeXml(value) {
  return String(value ?? '')
    .replace(/[\u0000-\u0008\u000B\u000C\u000E-\u001F\u007F]/g, '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

/**
 * Normalize query text, collapse whitespace, and cap length.
 */
function cleanText(raw, fallback = '', maxLen = 220) {
  const normalized = String(raw ?? '')
    .replace(/[\u0000-\u001F\u007F]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
  if (!normalized) return fallback;
  if (normalized.length <= maxLen) return normalized;
  return `${normalized.slice(0, maxLen - 1).trimEnd()}…`;
}

/**
 * Normalize verdict query parameter to YES | NO | DEPENDS.
 */
function resolveVerdict(raw) {
  const v = String(raw ?? '').trim().toUpperCase();
  if (v === 'YES' || v === 'SAFE' || v === 'TRUE') return PALETTES.YES;
  if (v === 'NO' || v === 'UNSAFE' || v === 'NEVER' || v === 'FALSE') return PALETTES.NO;
  return PALETTES.DEPENDS;
}

/**
 * Approximate visual character width (CJK / wide chars count ~1.8x Latin).
 */
function charWeight(ch) {
  const code = ch.charCodeAt(0);
  if (
    (code >= 0x1100 && code <= 0x11ff) ||
    (code >= 0x2e80 && code <= 0x9fff) ||
    (code >= 0xac00 && code <= 0xd7af) ||
    (code >= 0xf900 && code <= 0xfaff) ||
    (code >= 0xfe30 && code <= 0xfe6f) ||
    (code >= 0xff00 && code <= 0xff60)
  ) {
    return 1.8;
  }
  if ('WM@#%&'.includes(ch)) return 1.25;
  if ('ilI1|.,:;!\'"`'.includes(ch)) return 0.55;
  return 1.0;
}

function measureUnits(str) {
  let total = 0;
  for (const ch of str) total += charWeight(ch);
  return total;
}

/**
 * Wrap text cleanly into up to `maxLines` lines, supporting both Latin spaces and CJK.
 */
function wrapText(text, maxUnitsPerLine, maxLines) {
  if (!text) return [];
  const words = text.split(' ').filter(Boolean);
  const lines = [];
  let current = '';

  const pushLine = (line) => {
    if (lines.length < maxLines) {
      lines.push(line);
    }
  };

  for (let i = 0; i < words.length; i++) {
    const word = words[i];
    const candidate = current ? `${current} ${word}` : word;

    if (measureUnits(candidate) <= maxUnitsPerLine) {
      current = candidate;
      continue;
    }

    if (current) {
      pushLine(current);
      current = '';
      if (lines.length >= maxLines) {
        // Append ellipsis to last line since more text remained
        const last = lines[maxLines - 1].replace(/[.,;:\-—\s]+$/, '');
        lines[maxLines - 1] = last.endsWith('…') ? last : `${last}…`;
        return lines;
      }
    }

    // Handle long unspaced words or CJK sentences character by character
    if (measureUnits(word) > maxUnitsPerLine) {
      let chunk = '';
      for (const ch of word) {
        if (measureUnits(chunk + ch) > maxUnitsPerLine && chunk) {
          pushLine(chunk);
          chunk = ch;
          if (lines.length >= maxLines) {
            const last = lines[maxLines - 1].replace(/[.,;:\-—\s]+$/, '');
            lines[maxLines - 1] = last.endsWith('…') ? last : `${last}…`;
            return lines;
          }
        } else {
          chunk += ch;
        }
      }
      current = chunk;
    } else {
      current = word;
    }
  }

  if (current) {
    if (lines.length < maxLines) {
      lines.push(current);
    } else {
      const last = lines[maxLines - 1].replace(/[.,;:\-—\s]+$/, '');
      lines[maxLines - 1] = last.endsWith('…') ? last : `${last}…`;
    }
  }

  return lines;
}

function renderTspans(lines, x, startY, lineHeight) {
  return lines
    .map((line, index) => {
      const y = startY + index * lineHeight;
      return `<tspan x="${x}" y="${y}">${escapeXml(line)}</tspan>`;
    })
    .join('');
}

function renderVerdictIcon(verdictKey, cx, cy, size, color) {
  const half = size / 2;
  if (verdictKey === 'YES') {
    const x1 = cx - half * 0.55;
    const y1 = cy + half * 0.02;
    const x2 = cx - half * 0.12;
    const y2 = cy + half * 0.45;
    const x3 = cx + half * 0.6;
    const y3 = cy - half * 0.4;
    return `<path d="M ${x1} ${y1} L ${x2} ${y2} L ${x3} ${y3}" fill="none" stroke="${color}" stroke-width="${Math.max(3, size * 0.16)}" stroke-linecap="round" stroke-linejoin="round" />`;
  }
  if (verdictKey === 'NO') {
    const d = half * 0.46;
    return `<path d="M ${cx - d} ${cy - d} L ${cx + d} ${cy + d} M ${cx + d} ${cy - d} L ${cx - d} ${cy + d}" fill="none" stroke="${color}" stroke-width="${Math.max(3, size * 0.16)}" stroke-linecap="round" />`;
  }
  // DEPENDS: exclamation mark
  return `<path d="M ${cx} ${cy - half * 0.48} L ${cx} ${cy + half * 0.12}" fill="none" stroke="${color}" stroke-width="${Math.max(3, size * 0.16)}" stroke-linecap="round" /><circle cx="${cx}" cy="${cy + half * 0.46}" r="${Math.max(2, size * 0.09)}" fill="${color}" />`;
}

/**
 * Landscape Open Graph Card (1200 x 630)
 */
function renderOgSvg({ title, verdict, appliance, summary }) {
  const W = 1200;
  const H = 630;
  const fontStack =
    "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif";

  const titleLines = wrapText(title, 28, summary ? 3 : 4);
  const titleFontSize = titleLines.length >= 4 ? 46 : titleLines.length === 3 ? 50 : 58;
  const titleLineHeight = Math.round(titleFontSize * 1.18);
  const titleStartY = summary ? 204 : 240;

  const summaryLines = summary ? wrapText(summary, 58, 2) : [];
  const summaryBoxY = titleStartY + titleLines.length * titleLineHeight + 10;
  const summaryBoxHeight = summaryLines.length > 0 ? 28 + summaryLines.length * 30 : 0;

  const applianceUpper = appliance.toUpperCase();
  const applianceWidth = Math.min(420, Math.max(140, Math.round(measureUnits(applianceUpper) * 11.5 + 48)));
  const verdictPillWidth = Math.round(measureUnits(verdict.label) * 12.2 + 76);

  return `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}" role="img" aria-label="${escapeXml(title)} — ${escapeXml(verdict.label)}">
  <defs>
    <linearGradient id="bgGrad" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="${verdict.bgCanvas}" />
      <stop offset="100%" stop-color="#FFFFFF" />
    </linearGradient>
    <pattern id="dotGrid" width="28" height="28" patternUnits="userSpaceOnUse">
      <circle cx="2" cy="2" r="1.4" fill="${verdict.accentBorder}" opacity="0.55" />
    </pattern>
  </defs>

  <!-- Canvas background -->
  <rect width="${W}" height="${H}" fill="url(#bgGrad)" />
  <rect width="${W}" height="${H}" fill="url(#dotGrid)" />

  <!-- Decorative top accent bar -->
  <rect x="0" y="0" width="${W}" height="12" fill="${verdict.accent}" />

  <!-- Elevated main card -->
  <rect x="44" y="42" width="${W - 88}" height="${H - 84}" rx="24" fill="#FFFFFF" stroke="${verdict.accentBorder}" stroke-width="2.5" />

  <!-- Left vertical verdict stripe inside card -->
  <rect x="44" y="42" width="16" height="${H - 84}" rx="8" fill="${verdict.accent}" />
  <rect x="52" y="42" width="8" height="${H - 84}" fill="${verdict.accent}" />

  <!-- Top badges row -->
  <g transform="translate(96, 84)">
    <!-- Verdict pill badge -->
    <rect x="0" y="0" width="${verdictPillWidth}" height="52" rx="26" fill="${verdict.pillBg}" />
    <circle cx="28" cy="26" r="14" fill="rgba(255,255,255,0.22)" />
    ${renderVerdictIcon(verdict.key, 28, 26, 18, verdict.pillText)}
    <text x="54" y="33" font-family="${fontStack}" font-size="20" font-weight="800" letter-spacing="0.8" fill="${verdict.pillText}">${escapeXml(verdict.label)}</text>

    <!-- Appliance label pill -->
    <rect x="${verdictPillWidth + 18}" y="0" width="${applianceWidth}" height="52" rx="26" fill="#F1F5F9" stroke="#CBD5E1" stroke-width="1.5" />
    <text x="${verdictPillWidth + 18 + applianceWidth / 2}" y="33" text-anchor="middle" font-family="${fontStack}" font-size="18" font-weight="700" letter-spacing="1.1" fill="#334155">${escapeXml(applianceUpper)}</text>
  </g>

  <!-- Large Verdict Watermark Emblem (top right) -->
  <g opacity="0.12" transform="translate(${W - 172}, 150)">
    <circle cx="0" cy="0" r="68" fill="${verdict.accent}" />
    ${renderVerdictIcon(verdict.key, 0, 0, 66, '#FFFFFF')}
  </g>

  <!-- Main Headline -->
  <text font-family="${fontStack}" font-size="${titleFontSize}" font-weight="800" fill="#0F172A" letter-spacing="-0.8">
    ${renderTspans(titleLines, 96, titleStartY, titleLineHeight)}
  </text>

  ${
    summaryLines.length > 0
      ? `<!-- Summary Rule Callout -->
  <g>
    <rect x="96" y="${summaryBoxY}" width="${W - 192}" height="${summaryBoxHeight}" rx="14" fill="${verdict.ruleBg}" stroke="${verdict.ruleBorder}" stroke-width="1.5" />
    <text font-family="${fontStack}" font-size="22" font-weight="600" fill="${verdict.ruleText}">
      ${renderTspans(summaryLines, 120, summaryBoxY + 35, 30)}
    </text>
  </g>`
      : ''
  }

  <!-- Footer divider -->
  <line x1="96" y1="${H - 114}" x2="${W - 96}" y2="${H - 114}" stroke="#E2E8F0" stroke-width="1.5" />

  <!-- Footer watermark -->
  <g transform="translate(96, ${H - 76})">
    <rect x="0" y="-22" width="32" height="32" rx="8" fill="#0F172A" />
    ${renderVerdictIcon('YES', 16, -6, 18, '#34D399')}
    <text x="44" y="2" font-family="${fontStack}" font-size="24" font-weight="800" fill="#0F172A" letter-spacing="-0.3">isitkitchensafe.com</text>
    <text x="${W - 192}" y="1" text-anchor="end" font-family="${fontStack}" font-size="18" font-weight="600" fill="#64748B">Science-Backed Kitchen &amp; Appliance Safety</text>
  </g>
</svg>`;
}

/**
 * Vertical Pinterest Pin Card (1000 x 1500)
 */
function renderPinSvg({ title, verdict, appliance, summary }) {
  const W = 1000;
  const H = 1500;
  const fontStack =
    "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif";

  const titleLines = wrapText(title, 18, 5);
  const titleFontSize = titleLines.length >= 5 ? 60 : titleLines.length === 4 ? 66 : 74;
  const titleLineHeight = Math.round(titleFontSize * 1.2);
  const titleStartY = 580;

  const summaryLines = summary ? wrapText(summary, 32, 4) : [];
  const summaryBoxY = Math.max(950, titleStartY + titleLines.length * titleLineHeight + 36);
  const summaryBoxHeight = summaryLines.length > 0 ? 78 + summaryLines.length * 46 : 0;

  const applianceUpper = appliance.toUpperCase();
  const applianceWidth = Math.min(720, Math.max(220, Math.round(measureUnits(applianceUpper) * 16 + 72)));
  const verdictPillWidth = Math.min(760, Math.round(measureUnits(verdict.label) * 17 + 100));

  return `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}" role="img" aria-label="${escapeXml(title)} — ${escapeXml(verdict.label)}">
  <defs>
    <linearGradient id="pinBg" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="${verdict.bgAccent}" />
      <stop offset="42%" stop-color="${verdict.bgCanvas}" />
      <stop offset="100%" stop-color="#FFFFFF" />
    </linearGradient>
    <pattern id="pinDots" width="32" height="32" patternUnits="userSpaceOnUse">
      <circle cx="2" cy="2" r="1.6" fill="${verdict.accentBorder}" opacity="0.6" />
    </pattern>
  </defs>

  <!-- Canvas background -->
  <rect width="${W}" height="${H}" fill="url(#pinBg)" />
  <rect width="${W}" height="${H}" fill="url(#pinDots)" />

  <!-- Outer editorial card -->
  <rect x="44" y="44" width="${W - 88}" height="${H - 88}" rx="36" fill="#FFFFFF" stroke="${verdict.accentBorder}" stroke-width="3" />

  <!-- Top Verdict Hero Band -->
  <rect x="44" y="44" width="${W - 88}" height="340" rx="36" fill="${verdict.accent}" />
  <rect x="44" y="320" width="${W - 88}" height="64" fill="${verdict.accent}" />

  <!-- Large centered verdict circle icon -->
  <circle cx="${W / 2}" cy="170" r="78" fill="rgba(255,255,255,0.2)" />
  <circle cx="${W / 2}" cy="170" r="60" fill="#FFFFFF" />
  ${renderVerdictIcon(verdict.key, W / 2, 170, 56, verdict.accent)}

  <!-- Verdict pill text inside hero band -->
  <rect x="${(W - verdictPillWidth) / 2}" y="274" width="${verdictPillWidth}" height="68" rx="34" fill="rgba(15,23,42,0.22)" />
  <text x="${W / 2}" y="319" text-anchor="middle" font-family="${fontStack}" font-size="30" font-weight="800" letter-spacing="1.8" fill="#FFFFFF">${escapeXml(verdict.label)}</text>

  <!-- Appliance label badge -->
  <rect x="${(W - applianceWidth) / 2}" y="432" width="${applianceWidth}" height="62" rx="31" fill="#F1F5F9" stroke="#CBD5E1" stroke-width="2" />
  <text x="${W / 2}" y="472" text-anchor="middle" font-family="${fontStack}" font-size="24" font-weight="800" letter-spacing="1.8" fill="#334155">${escapeXml(applianceUpper)}</text>

  <!-- Main Title -->
  <text text-anchor="middle" font-family="${fontStack}" font-size="${titleFontSize}" font-weight="800" fill="#0F172A" letter-spacing="-1">
    ${renderTspans(titleLines, W / 2, titleStartY, titleLineHeight)}
  </text>

  ${
    summaryLines.length > 0
      ? `<!-- Safety Rule Callout Box -->
  <g>
    <rect x="96" y="${summaryBoxY}" width="${W - 192}" height="${summaryBoxHeight}" rx="24" fill="${verdict.ruleBg}" stroke="${verdict.ruleBorder}" stroke-width="2.5" />
    <text x="132" y="${summaryBoxY + 46}" font-family="${fontStack}" font-size="20" font-weight="800" letter-spacing="1.4" fill="${verdict.accentDark}">QUICK SAFETY RULE</text>
    <text font-family="${fontStack}" font-size="32" font-weight="600" fill="${verdict.ruleText}">
      ${renderTspans(summaryLines, 132, summaryBoxY + 96, 46)}
    </text>
  </g>`
      : `<line x1="360" y1="${summaryBoxY + 20}" x2="640" y2="${summaryBoxY + 20}" stroke="${verdict.accentBorder}" stroke-width="5" stroke-linecap="round" />`
  }

  <!-- Bottom branded footer bar -->
  <rect x="44" y="${H - 176}" width="${W - 88}" height="132" rx="36" fill="#0F172A" />
  <rect x="44" y="${H - 176}" width="${W - 88}" height="52" fill="#0F172A" />

  <g transform="translate(${W / 2}, ${H - 108})">
    <text x="0" y="0" text-anchor="middle" font-family="${fontStack}" font-size="34" font-weight="800" fill="#FFFFFF" letter-spacing="0.4">isitkitchensafe.com</text>
    <text x="0" y="34" text-anchor="middle" font-family="${fontStack}" font-size="20" font-weight="500" fill="#94A3B8">Save this pin • Verified Kitchen &amp; Appliance Safety Guide</text>
  </g>
</svg>`;
}

export async function onRequestGet({ request }) {
  const url = new URL(request.url);
  const params = url.searchParams;

  const title = cleanText(params.get('title'), 'Is It Kitchen Safe?', 160);
  const verdict = resolveVerdict(params.get('verdict'));
  const appliance = cleanText(params.get('appliance'), 'Kitchen Safety', 42);
  const summary = cleanText(params.get('summary'), '', 220);
  const format = String(params.get('format') ?? 'og').trim().toLowerCase() === 'pin' ? 'pin' : 'og';

  const svg =
    format === 'pin'
      ? renderPinSvg({ title, verdict, appliance, summary })
      : renderOgSvg({ title, verdict, appliance, summary });

  return new Response(svg, {
    status: 200,
    headers: {
      'Content-Type': 'image/svg+xml; charset=utf-8',
      'Cache-Control': 'public, max-age=86400, s-maxage=604800',
      'X-Content-Type-Options': 'nosniff',
      'Access-Control-Allow-Origin': '*',
    },
  });
}
