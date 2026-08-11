import { notFound } from 'next/navigation'
import { auth } from '@/lib/auth'
import { getBlogPostFile } from '@/lib/github'
import { PostEditor } from './_components/PostEditor'

export default async function AdminPostPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const session = await auth()
  if (!session?.accessToken) notFound()
  const file = await getBlogPostFile(session.accessToken, slug)
  return <PostEditor slug={slug} content={file?.content ?? ''} sha={file?.sha} />
}
