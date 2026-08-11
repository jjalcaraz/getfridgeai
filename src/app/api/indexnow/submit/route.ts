import { NextRequest, NextResponse } from 'next/server'

const HOST = process.env.INDEXNOW_HOST ?? 'www.getfridgeai.com'
const KEY = process.env.INDEXNOW_KEY

export async function POST(request: NextRequest) {
  if (!KEY) {
    return NextResponse.json(
      { error: 'INDEXNOW_KEY is not configured' },
      { status: 500 }
    )
  }

  let body: { urls?: string[] }
  try {
    body = (await request.json()) as { urls?: string[] }
  } catch {
    return NextResponse.json({ error: 'Invalid JSON body' }, { status: 400 })
  }

  const urls = body.urls
  if (!Array.isArray(urls) || urls.length === 0) {
    return NextResponse.json(
      { error: 'urls must be a non-empty array' },
      { status: 400 }
    )
  }

  for (const url of urls) {
    try {
      const parsed = new URL(url)
      if (parsed.hostname !== HOST) {
        return NextResponse.json(
          { error: `URL must be on ${HOST}: ${url}` },
          { status: 400 }
        )
      }
    } catch {
      return NextResponse.json(
        { error: `Invalid URL: ${url}` },
        { status: 400 }
      )
    }
  }

  const res = await fetch('https://api.indexnow.org/IndexNow', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      host: HOST,
      key: KEY,
      keyLocation: `https://${HOST}/${KEY}.txt`,
      urlList: urls,
    }),
  })

  const text = await res.text()
  return NextResponse.json(
    { status: res.status, response: text },
    { status: res.ok ? 200 : res.status }
  )
}
