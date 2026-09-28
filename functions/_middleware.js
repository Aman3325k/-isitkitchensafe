import { redirectsMap } from './_redirects-map.js';

export async function onRequest(context) {
  const request = context.request;
  const url = new URL(request.url);
  
  const isGetOrHead = request.method === 'GET' || request.method === 'HEAD';
  const isHtml = !url.pathname.includes('.') || url.pathname.endsWith('.html');
  
  if (!isGetOrHead || !isHtml) {
    const res = await context.next();
    if (url.hostname.endsWith('.pages.dev')) {
      const response = new Response(res.body, res);
      response.headers.set('X-Robots-Tag', 'noindex, nofollow');
      return response;
    }
    return res;
  }

  // ─── Path & Canonical Normalization ───
  // A. /en prefix stripping & B. Lowercase normalization & C. Single-hop trailing slash
  const pathname = url.pathname;
  let normalizedPath = pathname;
  let modified = false;

  const isBypassedPath = 
    pathname.startsWith('/_astro/') ||
    pathname.startsWith('/sitemap') ||
    pathname === '/robots.txt' ||
    pathname.startsWith('/favicon');

  if (!isBypassedPath) {
    const segments = pathname.split('/').filter(Boolean);
    const lastSegment = segments[segments.length - 1] || '';
    const hasExtension = lastSegment.includes('.');

    // A. /en prefix stripping (/en, /en/, /en/anything, /EN/...)
    if (/^\/en(\/.*)?$/i.test(normalizedPath)) {
      normalizedPath = normalizedPath.replace(/^\/en(?:\/|$)/i, '/');
      if (!normalizedPath.startsWith('/')) normalizedPath = '/' + normalizedPath;
      modified = true;
    }

    // B. Lowercase normalization (page URLs only, no file extensions)
    if (!hasExtension && /[A-Z]/.test(normalizedPath)) {
      normalizedPath = normalizedPath.toLowerCase();
      modified = true;
    }

    // C. Trailing slash consistency on redirected page URLs (guarantees 1 hop)
    if (modified && !hasExtension && normalizedPath.length > 1 && !normalizedPath.endsWith('/')) {
      normalizedPath = normalizedPath + '/';
    }

    normalizedPath = normalizedPath.replace(/\/{2,}/g, '/');
  }

  // ─── Edge Redirects Fallback (redirectsMap) ───
  // Intercepts any redirect in the entire database (1,425+ rules) at the edge.
  // Guarantees zero 404s for any redirect, scaling seamlessly beyond
  // Cloudflare's 2,000-line static _redirects parser limit.
  const cleanOriginal = pathname.length > 1 ? pathname.replace(/\/+$/, '') : pathname;
  const cleanNormalized = normalizedPath.length > 1 ? normalizedPath.replace(/\/+$/, '') : normalizedPath;

  const redirectTarget = 
    redirectsMap.get(cleanOriginal) || 
    redirectsMap.get(pathname) || 
    redirectsMap.get(cleanOriginal.toLowerCase()) ||
    redirectsMap.get(cleanNormalized) ||
    redirectsMap.get(normalizedPath) ||
    redirectsMap.get(cleanNormalized.toLowerCase());
  
  if (redirectTarget) {
    const targetUrl = new URL(redirectTarget, url.origin);
    targetUrl.search = url.search;
    return Response.redirect(targetUrl.toString(), 301);
  }

  // If path was modified by /en stripping or lowercase normalization, redirect in 1 hop!
  if (modified && normalizedPath !== pathname) {
    const targetUrl = new URL(normalizedPath, url.origin);
    targetUrl.search = url.search;
    return Response.redirect(targetUrl.toString(), 301);
  }

  const country = request.cf?.country || request.headers.get('cf-ipcountry');
  
  const euCountries = new Set([
    'AT', 'BE', 'BG', 'HR', 'CY', 'CZ', 'DK', 'EE', 'FI', 'FR', 'DE', 'GR', 'HU', 'IE', 'IT', 'LV', 'LT',
    'LU', 'MT', 'NL', 'PL', 'PT', 'RO', 'SK', 'SI', 'ES', 'SE', 'IS', 'LI', 'NO', 'GB'
  ]);
  
  let region = 'eu'; // Default to eu as safe fallback
  if (country) {
    const countryUpper = country.toUpperCase();
    if (!euCountries.has(countryUpper)) {
      region = 'non-eu';
    }
  }
  
  const cacheKeyUrl = new URL(request.url);
  cacheKeyUrl.searchParams.set('__cf_region_cache', region);
  const cacheKey = new Request(cacheKeyUrl.toString(), request);
  const cache = caches.default;
  
  let response = await cache.match(cacheKey);
  
  if (!response) {
    const assetResponse = await context.next();
    const contentType = assetResponse.headers.get('content-type') || '';
    
    if (assetResponse.status === 200 && contentType.includes('text/html')) {
      const rewriter = new HTMLRewriter().on("head", {
        element(element) {
          element.prepend(
            `<script>window.__VISITOR_REGION__ = "${region}";</script>`,
            { html: true }
          );
        }
      });
      
      const transformedResponse = rewriter.transform(assetResponse);
      response = new Response(transformedResponse.body, transformedResponse);
      response.headers.set('x-visitor-region', region);
      response.headers.set('x-region-cache-status', 'MISS');
      response.headers.set('Cache-Control', 'public, max-age=0, s-maxage=3600, must-revalidate');
      
      const responseToCache = response.clone();
      context.waitUntil(cache.put(cacheKey, responseToCache));
    } else {
      response = assetResponse;
    }
  } else {
    response = new Response(response.body, response);
    response.headers.set('x-region-cache-status', 'HIT');
  }
  
  if (url.hostname.endsWith('.pages.dev')) {
    response.headers.set('X-Robots-Tag', 'noindex, nofollow');
  }
  
  return response;
}
