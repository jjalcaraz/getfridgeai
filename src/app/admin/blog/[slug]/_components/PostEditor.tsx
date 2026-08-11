'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

export function PostEditor({
  slug,
  content,
  sha,
}: {
  slug: string
  content: string
  sha?: string
}) {
  const [value, setValue] = useState(content)
  const [saving, setSaving] = useState(false)
  const router = useRouter()

  async function save() {
    setSaving(true)
    const res = await fetch('/api/blog', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ slug, content: value, sha }),
    })
    setSaving(false)
    if (res.ok) {
      router.push('/admin/blog')
    } else {
      alert('Failed to save')
    }
  }

  return (
    <main>
      <h1>{slug}</h1>
      <textarea
        value={value}
        onChange={(e) => setValue(e.target.value)}
        rows={40}
        cols={80}
      />
      <button onClick={save} disabled={saving}>
        {saving ? 'Saving...' : 'Save'}
      </button>
    </main>
  )
}
