import { NextRequest, NextResponse } from 'next/server'

export const dynamic = 'force-dynamic'

export async function GET(request: NextRequest) {
  const expected = process.env.INDEXNOW_KEY
  const key = request.nextUrl.searchParams.get('key') ?? ''

  if (!expected || key !== expected) {
    return new NextResponse('Not found', { status: 404 })
  }

  return new NextResponse(key, {
    headers: { 'Content-Type': 'text/plain' },
  })
}
