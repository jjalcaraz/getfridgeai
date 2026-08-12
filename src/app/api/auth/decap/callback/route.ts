import { NextRequest, NextResponse } from 'next/server'
import { cookies } from 'next/headers'

export async function GET(request: NextRequest) {
  const clientId = process.env.AUTH_GITHUB_ID
  const clientSecret = process.env.AUTH_GITHUB_SECRET
  const code = request.nextUrl.searchParams.get('code')
  const state = request.nextUrl.searchParams.get('state')

  if (!clientId || !clientSecret || !code) {
    return new NextResponse('Missing OAuth parameters', { status: 400 })
  }

  const jar = await cookies()
  const expected = jar.get('decap_oauth_state')?.value
  if (expected && expected !== state) {
    return new NextResponse('Invalid state', { status: 403 })
  }

  const res = await fetch('https://github.com/login/oauth/access_token', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      client_id: clientId,
      client_secret: clientSecret,
      code,
      redirect_uri: 'https://www.getfridgeai.com/api/auth/decap/callback',
    }),
  })

  const data = (await res.json()) as {
    access_token?: string
    error?: string
    error_description?: string
  }

  if (!data.access_token || data.error) {
    const message = data.error_description || data.error || 'OAuth failed'
    return new NextResponse(`OAuth error: ${message}`, { status: 401 })
  }

  const token = data.access_token
  const payload = JSON.stringify({ token, provider: 'github' })

  const html = `<!doctype html>
<html>
<body>
<script>
(function() {
  const token = "${token}";
  const payload = JSON.stringify({ token: token, provider: "github" });
  const message = "authorization:github:success:" + payload;
  function send(origin) {
    if (window.opener) {
      window.opener.postMessage(message, origin);
      window.close();
    }
  }
  send("*");
  window.addEventListener("message", function(e) {
    if (e.data === "authorizing:github" && window.opener) {
      window.opener.postMessage(message, e.origin);
      window.close();
    }
  }, false);
})();
</script>
</body>
</html>`

  return new NextResponse(html, {
    headers: { 'Content-Type': 'text/html;charset=utf-8' },
  })
}
