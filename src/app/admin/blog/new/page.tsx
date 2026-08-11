import { auth } from '@/lib/auth'
import { SignInButton } from '../_components/SignInButton'
import { NewPostForm } from './_components/NewPostForm'

export default async function NewBlogPostPage() {
  const session = await auth()
  if (!session?.accessToken) {
    return <SignInButton />
  }
  return <NewPostForm />
}
