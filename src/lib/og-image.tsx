import { ImageResponse } from 'next/og'

export const OG_IMAGE_SIZE = { width: 1200, height: 630 }
export const OG_IMAGE_CONTENT_TYPE = 'image/png'

export function getOgImage(title: string, description: string) {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundImage: 'linear-gradient(135deg, #22c55e 0%, #059669 100%)',
          color: '#ffffff',
          padding: 64,
          textAlign: 'center',
        }}
      >
        <div
          style={{
            fontSize: 72,
            fontWeight: 800,
            lineHeight: 1.1,
            marginBottom: 24,
          }}
        >
          {title}
        </div>
        <div
          style={{
            fontSize: 32,
            fontWeight: 400,
            lineHeight: 1.4,
            color: 'rgba(255, 255, 255, 0.9)',
          }}
        >
          {description}
        </div>
      </div>
    ),
    {
      ...OG_IMAGE_SIZE,
    }
  )
}
