import type { Metadata } from 'next'
import Link from 'next/link'
import { getAllPosts } from '@/lib/blog'

export const metadata: Metadata = {
  alternates: { canonical: '/blog' },
  title: 'Blog - Fridge AI',
  description:
    'Tips, guides, and ideas for reducing food waste and cooking with what you already have.',
  openGraph: {
    title: 'Blog - Fridge AI',
    description:
      'Tips, guides, and ideas for reducing food waste and cooking with what you already have.',
    url: 'https://www.getfridgeai.com/blog',
    siteName: 'Fridge AI',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Blog - Fridge AI',
    description:
      'Tips, guides, and ideas for reducing food waste and cooking with what you already have.',
  },
}

export default async function BlogIndexPage() {
  const posts = await getAllPosts()
  return (
    <main className="min-h-screen bg-white py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Fridge AI Blog
        </h1>
        <p className="text-xl text-gray-600 mb-12">
          Ideas and guides for cooking with what you already have.
        </p>
        <ul className="space-y-8">
          {posts.map((post) => (
            <li key={post.slug} className="border-b border-gray-100 pb-8">
              <Link href={`/blog/${post.slug}`} className="block group">
                <h2 className="text-2xl font-semibold text-gray-900 group-hover:text-green-600 transition-colors mb-2">
                  {post.title}
                </h2>
                {post.date && (
                  <p className="text-gray-500 text-sm mb-2">{post.date}</p>
                )}
                {post.description && (
                  <p className="text-gray-600">{post.description}</p>
                )}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </main>
  )
}
