import { NextResponse } from 'next/server'
import { cookies } from 'next/headers'
import { randomBytes } from 'crypto'

export async function GET() {
  const clientId = process.env.AUTH_GITHUB_ID
  const clientSecret = process.env.AUTH_GITHUB_SECRET
  if (!clientId || !clientSecret) {
    return NextResponse.json({ error: 'OAuth not configured' }, { status: 500 })
  }

  const state = randomBytes(16).toString('hex')
  const jar = await cookies()
  jar.set('decap_oauth_state', state, {
    httpOnly: true,
    sameSite: 'lax',
    secure: process.env.NODE_ENV === 'production',
    maxAge: 600,
    path: '/',
  })

  const redirectUri = encodeURIComponent(
    'https://www.getfridgeai.com/api/auth/decap/callback',
  )

  const url =
    'https://github.com/login/oauth/authorize' +
    `?client_id=${clientId}` +
    `&redirect_uri=${redirectUri}` +
    '&scope=repo,user' +
    `&state=${state}` +
    '&allow_signup=false'

  return NextResponse.redirect(url)
}
