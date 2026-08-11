'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

const template = `---
title: 'New post'
summary: ''
date: '${new Date().toISOString().slice(0, 10)}'
---

Write your post here.
`

export function NewPostForm() {
  const [slug, setSlug] = useState('')
  const [content, setContent] = useState(template)
  const [saving, setSaving] = useState(false)
  const router = useRouter()

  async function save() {
    if (!slug) {
      alert('Enter a slug')
      return
    }
    setSaving(true)
    const res = await fetch('/api/blog', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ slug, content }),
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
      <h1>New post</h1>
      <p>Slug (used in URL):</p>
      <input
        value={slug}
        onChange={(e) => setSlug(e.target.value)}
        placeholder="my-new-post"
      />
      <p>Markdown (including frontmatter):</p>
      <textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        rows={40}
        cols={80}
      />
      <button onClick={save} disabled={saving}>
        {saving ? 'Saving...' : 'Save'}
      </button>
    </main>
  )
}
