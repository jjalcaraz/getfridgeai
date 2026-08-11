import { getOgImage, OG_IMAGE_SIZE, OG_IMAGE_CONTENT_TYPE } from '@/lib/og-image'

export const alt = 'Privacy Policy - Fridge AI'
export const size = OG_IMAGE_SIZE
export const contentType = OG_IMAGE_CONTENT_TYPE

export default function Image() {
  return getOgImage('Privacy Policy', 'Fridge AI')
}
