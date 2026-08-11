'use client'

import { signIn } from 'next-auth/react'

export function SignInButton() {
  return <button onClick={() => signIn('github')}>Sign in with GitHub</button>
}
