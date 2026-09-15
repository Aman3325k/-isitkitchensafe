import { redirectsMap } from './_redirects-map.js';

export async function onRequest(context) {
  const request = context.request;
  const url = new URL(request.url);
  
  const isGet = request.method === 'GET';
  const isHtml = !url.pathname.includes('.') || url.pathname.endsWith('.html');
  
  if (!isGet || !isHtml) {
    const res = await context.next();
    if (url.hostname.endsWith('.pages.dev')) {
      const response = new Response(res.body, res);
      response.headers.set('X-Robots-Tag', 'noindex, nofollow');
      return response;
    }
    return res;
  }

  // ─── Edge Redirects Fallback ───
  // Intercepts any redirect in the entire database (1,425+ rules) at the edge.
  // Guarantees zero 404s for any redirect, scaling seamlessly beyond
  // Cloudflare's 2,000-line static _redirects parser limit.
  const cleanPath = url.pathname.length > 1 ? url.pathname.replace(/\/+$/, '') : url.pathname;
  const redirectTarget = redirectsMap.get(cleanPath) || redirectsMap.get(url.pathname) || redirectsMap.get(cleanPath.toLowerCase());
  
  if (redirectTarget) {
    const targetUrl = new URL(redirectTarget, url.origin);
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
