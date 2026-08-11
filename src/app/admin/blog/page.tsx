import Link from 'next/link'
import { auth } from '@/lib/auth'
import { listBlogPosts } from '@/lib/github'
import { SignInButton } from './_components/SignInButton'

export default async function AdminBlogPage() {
  const session = await auth()
  if (!session?.accessToken) {
    return <SignInButton />
  }
  const posts = await listBlogPosts(session.accessToken)
  return (
    <main>
      <h1>Blog admin</h1>
      <Link href="/admin/blog/new">New post</Link>
      <ul>
        {posts.map((post) => (
          <li key={post.sha}>
            <Link href={`/admin/blog/${post.name.replace(/\.md$/, '')}`}>
              {post.name}
            </Link>
          </li>
        ))}
      </ul>
    </main>
  )
}
