import { Octokit } from '@octokit/rest'

const owner = process.env.GITHUB_REPO_OWNER
const repo = process.env.GITHUB_REPO_NAME

function getBranch() {
  return process.env.GITHUB_BRANCH || 'main'
}

export async function listBlogPosts(token: string) {
  const octokit = new Octokit({ auth: token })
  const { data } = await octokit.repos.getContent({
    owner: owner!,
    repo: repo!,
    path: 'content/blog',
  })
  if (!Array.isArray(data)) return []
  return (data as any[])
    .filter((item) => item.name?.endsWith('.md'))
    .map((item) => ({ name: item.name, path: item.path, sha: item.sha }))
}

export async function getBlogPostFile(token: string, slug: string) {
  const octokit = new Octokit({ auth: token })
  try {
    const { data } = await octokit.repos.getContent({
      owner: owner!,
      repo: repo!,
      path: `content/blog/${slug}.md`,
    })
    if (Array.isArray(data) || !('content' in data)) return null
    const file = data as { content: string; sha: string }
    const content = Buffer.from(file.content, 'base64').toString('utf-8')
    return { content, sha: file.sha }
  } catch (error: any) {
    if (error.status === 404) return null
    throw error
  }
}

export async function saveBlogPost(
  token: string,
  slug: string,
  content: string,
  sha?: string,
) {
  const octokit = new Octokit({ auth: token })
  let fileSha = sha
  if (!fileSha) {
    const existing = await getBlogPostFile(token, slug)
    if (existing) fileSha = existing.sha
  }
  const encoded = Buffer.from(content).toString('base64')
  await octokit.repos.createOrUpdateFileContents({
    owner: owner!,
    repo: repo!,
    path: `content/blog/${slug}.md`,
    message: `Update content/blog/${slug}.md`,
    content: encoded,
    branch: getBranch(),
    ...(fileSha ? { sha: fileSha } : {}),
  } as any)
}
