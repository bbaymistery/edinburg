/**
 * Sets strict no-cache headers for server-side rendered pages.
 *
 * This disables caching both on the client and CDN (like Cloudflare),
 * ensuring the content is always freshly fetched from the server.
 *
 * - no-cache: forces client/CDN to revalidate before using cached response
 * - no-store: prevents storing the response in any cache
 * - must-revalidate: ensures stale cached content is never used without checking with the server
 *
 * Use this in getServerSideProps to avoid showing outdated content after deployment.
 *
 * For some critical pages (like the homepage), you can enable `no-store` as well by passing `true` to `useNoStore`.
 * This avoids the need to manually purge Cloudflare cache after every deployment and ensures fully fresh content.
 * 
 * However, note that using `no-store` will prevent back/forward cache (bfcache) optimizations in browsers.
 *
 * @param {import('http').ServerResponse} res - The server response object
 * @param {boolean} useNoStore - Set to true to include `no-store`, preventing any kind of caching (default: false)
 */
export const setNoCacheHeader = (res, useNoStore = false) => {
    const value = useNoStore ? 'no-cache, no-store, must-revalidate' : 'no-cache, must-revalidate';
    res.setHeader('Cache-Control', value);
};
