import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { JsonLd } from '@/components/json-ld'
import {
  blogPosts,
  postsBySlug,
  articleJsonLd,
  howToJsonLd,
} from '@/lib/blog-content'

export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const post = postsBySlug[slug]
  if (!post) return {}

  return {
    alternates: { canonical: `/blog/${post.slug}` },
    title: post.title,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      url: `https://www.getfridgeai.com/blog/${post.slug}`,
      siteName: 'Fridge AI',
      locale: 'en_US',
      type: 'article',
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.description,
    },
  }
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const post = postsBySlug[slug]
  if (!post) notFound()

  const jsonLd: Record<string, unknown> = {
    '@context': 'https://schema.org',
    '@graph': [articleJsonLd(post)],
  }

  const howTo = howToJsonLd(post)
  if (howTo) {
    jsonLd['@graph'] = [...(jsonLd['@graph'] as unknown[]), howTo]
  }

  const Content = post.Content

  return (
    <main className="min-h-screen bg-white py-20 px-4">
      <article className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          {post.title}
        </h1>
        <p className="text-sm text-gray-500 mb-12">
          Published {post.datePublished}
        </p>
        <div className="space-y-4 text-gray-900">
          <Content />
        </div>
      </article>
      <JsonLd data={jsonLd} />
    </main>
  )
}
