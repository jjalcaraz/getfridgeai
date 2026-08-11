import { getPostBySlug } from '@/lib/blog'
import {
  getOgImage,
  OG_IMAGE_CONTENT_TYPE,
  OG_IMAGE_SIZE,
} from '@/lib/og-image'

export const alt = 'Fridge AI Blog'
export const size = OG_IMAGE_SIZE
export const contentType = OG_IMAGE_CONTENT_TYPE

export default async function Image({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const post = await getPostBySlug(slug)
  const title = post?.title || 'Fridge AI Blog'
  const description =
    post?.description || 'Guides and answers about cooking with AI'
  return getOgImage(title, description)
}
