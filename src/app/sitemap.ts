import type { MetadataRoute } from 'next'

/**
 * Sitemap, generated at build time.
 *
 * This replaces the old hand-maintained public/sitemap.xml. That file went stale
 * the moment /terms shipped (2026-08-02) — the page was live and linked from the
 * app's paywall, but Google was never told it existed. Generating the sitemap
 * from a list that lives next to the routes makes "add a page, forget the
 * sitemap" harder to do.
 *
 * Every URL here MUST use the www host. The apex and both http hosts 301 to www,
 * and a sitemap full of redirecting URLs is exactly what Search Console reports
 * as "Page with redirect".
 */
const BASE_URL = 'https://www.getfridgeai.com'

const routes: Array<{
  path: string
  lastModified: string
  changeFrequency: MetadataRoute.Sitemap[number]['changeFrequency']
  priority: number
}> = [
  { path: '/', lastModified: '2026-08-11', changeFrequency: 'weekly', priority: 1.0 },
  { path: '/support', lastModified: '2026-08-11', changeFrequency: 'monthly', priority: 0.5 },
  { path: '/privacy', lastModified: '2026-08-11', changeFrequency: 'monthly', priority: 0.3 },
  { path: '/terms', lastModified: '2026-08-11', changeFrequency: 'monthly', priority: 0.3 },
  { path: '/blog/what-to-cook-with-what-you-have', lastModified: '2026-08-11', changeFrequency: 'monthly', priority: 0.7 },
  { path: '/blog/how-much-food-the-average-household-wastes', lastModified: '2026-08-11', changeFrequency: 'monthly', priority: 0.7 },
  { path: '/blog/how-ai-ingredient-recognition-from-a-photo-works', lastModified: '2026-08-11', changeFrequency: 'monthly', priority: 0.7 },
  { path: '/blog/fridge-ai-vs-manual-meal-planning', lastModified: '2026-08-11', changeFrequency: 'monthly', priority: 0.7 },
]

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map(({ path, lastModified, changeFrequency, priority }) => ({
    url: `${BASE_URL}${path}`,
    lastModified,
    changeFrequency,
    priority,
  }))
}
