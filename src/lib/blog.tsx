import fs from 'fs/promises'
import path from 'path'
import type { JSX } from 'react'
import {
  blogPosts as legacyPosts,
  postsBySlug,
  articleJsonLd,
  howToJsonLd,
  type BlogPost as LegacyBlogPost,
} from './blog-content'
import { parseFrontmatter, markdownToHtml } from './markdown'

const BASE_URL = 'https://www.getfridgeai.com'
const BLOG_DIR = path.join(process.cwd(), 'content', 'blog')

export type BlogPost = {
  slug: string
  title: string
  description: string
  datePublished: string
  dateModified: string
  render: () => JSX.Element
  jsonLd: Record<string, unknown>
}

function makeArticleJsonLd(
  slug: string,
  title: string,
  description: string,
  datePublished: string,
  dateModified: string,
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    '@id': `${BASE_URL}/blog/${slug}`,
    headline: title,
    description,
    image: `${BASE_URL}/blog/${slug}/opengraph-image`,
    datePublished,
    dateModified,
    author: { '@id': `${BASE_URL}/#organization` },
    publisher: { '@id': `${BASE_URL}/#organization` },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${BASE_URL}/blog/${slug}`,
    },
  }
}

async function loadMarkdownPosts(): Promise<BlogPost[]> {
  let files: string[]
  try {
    files = await fs.readdir(BLOG_DIR)
  } catch {
    files = []
  }
  const mdFiles = files.filter((f) => f.endsWith('.md'))
  const posts: BlogPost[] = []
  for (const filename of mdFiles) {
    const raw = await fs.readFile(path.join(BLOG_DIR, filename), 'utf-8')
    const { frontmatter, content } = parseFrontmatter(raw)
    const slug = filename.replace(/\.md$/, '')
    const title = frontmatter.title || slug
    const description = frontmatter.description || frontmatter.summary || ''
    const datePublished = frontmatter.datePublished || frontmatter.date || ''
    const dateModified = frontmatter.dateModified || datePublished
    const html = markdownToHtml(content)
    posts.push({
      slug,
      title,
      description,
      datePublished,
      dateModified,
      render: () => (
        <div
          className="space-y-4 text-gray-900"
          dangerouslySetInnerHTML={{ __html: html }}
        />
      ),
      jsonLd: {
        '@context': 'https://schema.org',
        '@graph': [
          makeArticleJsonLd(
            slug,
            title,
            description,
            datePublished,
            dateModified,
          ),
        ],
      },
    })
  }
  return posts
}

function legacyToBlogPost(post: LegacyBlogPost): BlogPost {
  const jsonLd: Record<string, unknown> = {
    '@context': 'https://schema.org',
    '@graph': [articleJsonLd(post)],
  }
  const howTo = howToJsonLd(post)
  if (howTo) (jsonLd['@graph'] as unknown[]).push(howTo)
  return {
    slug: post.slug,
    title: post.title,
    description: post.description,
    datePublished: post.datePublished,
    dateModified: post.dateModified,
    render: () => (
      <div className="space-y-4 text-gray-900">
        <post.Content />
      </div>
    ),
    jsonLd,
  }
}

export async function getPostBySlug(slug: string): Promise<BlogPost | null> {
  const md = await loadMarkdownPosts()
  const mdMap = new Map(md.map((p) => [p.slug, p]))
  if (mdMap.has(slug)) return mdMap.get(slug)!
  const legacy = postsBySlug[slug]
  if (legacy) return legacyToBlogPost(legacy)
  return null
}

export async function getAllPosts(): Promise<
  { slug: string; title: string; description: string; date: string; lastModified: string }[]
> {
  const md = await loadMarkdownPosts()
  const all: { slug: string; title: string; description: string; date: string; lastModified: string }[] = []
  for (const post of md) {
    all.push({
      slug: post.slug,
      title: post.title,
      description: post.description,
      date: post.datePublished,
      lastModified: post.dateModified,
    })
  }
  for (const post of legacyPosts) {
    all.push({
      slug: post.slug,
      title: post.title,
      description: post.description,
      date: post.datePublished,
      lastModified: post.dateModified,
    })
  }
  return all.sort((a, b) => {
    const da = a.date ? new Date(a.date).getTime() : 0
    const db = b.date ? new Date(b.date).getTime() : 0
    return db - da
  })
}

export async function generateStaticParams() {
  const all = await getAllPosts()
  return all.map((p) => ({ slug: p.slug }))
}
