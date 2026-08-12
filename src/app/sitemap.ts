import type { MetadataRoute } from 'next'
import { getAllPosts } from '@/lib/blog'

const BASE_URL = 'https://www.getfridgeai.com'

const routes: Array<{
  path: string
  lastModified: string
  changeFrequency: MetadataRoute.Sitemap[number]['changeFrequency']
  priority: number
}> = [
  { path: '/', lastModified: '2026-08-11', changeFrequency: 'weekly', priority: 1.0 },
  { path: '/blog', lastModified: '2026-08-11', changeFrequency: 'weekly', priority: 0.7 },
  { path: '/support', lastModified: '2026-08-11', changeFrequency: 'monthly', priority: 0.5 },
  { path: '/privacy', lastModified: '2026-08-11', changeFrequency: 'monthly', priority: 0.3 },
  { path: '/terms', lastModified: '2026-08-11', changeFrequency: 'monthly', priority: 0.3 },
]

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const posts = await getAllPosts()
  return [
    ...routes.map(({ path, lastModified, changeFrequency, priority }) => ({
      url: `${BASE_URL}${path}`,
      lastModified,
      changeFrequency,
      priority,
    })),
    ...posts.map((post) => ({
      url: `${BASE_URL}/blog/${post.slug}`,
      lastModified: post.lastModified,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    })),
  ]
}
