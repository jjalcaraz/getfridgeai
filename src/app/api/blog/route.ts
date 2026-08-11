import { NextResponse } from 'next/server'
import { auth } from '@/lib/auth'
import { saveBlogPost } from '@/lib/github'

export async function POST(request: Request) {
  const session = await auth()
  if (!session?.accessToken) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }
  const { slug, content, sha } = await request.json()
  if (!slug || typeof content !== 'string') {
    return NextResponse.json({ error: 'Invalid body' }, { status: 400 })
  }
  try {
    await saveBlogPost(session.accessToken, slug, content, sha)
    return NextResponse.json({ ok: true })
  } catch {
    return NextResponse.json({ error: 'Save failed' }, { status: 500 })
  }
}
