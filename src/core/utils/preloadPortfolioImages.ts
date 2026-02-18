let preloadStarted = false;

/**
 * Preloads the given image URLs in the background so they are in the browser cache.
 * Safe to call multiple times (subsequent calls with same intent are no-ops).
 */
export function preloadPortfolioImages(urls: string[]): void {
  if (preloadStarted || urls.length === 0) return;
  preloadStarted = true;

  urls.forEach((src) => {
    const img = new Image();
    img.src = src;
  });
}
