export type Frontmatter = Record<string, string>

export function parseFrontmatter(raw: string) {
  const lines = raw.split('\n')
  if (lines[0]?.trim() !== '---') {
    return { frontmatter: {}, content: raw }
  }
  const end = lines.findIndex((line, i) => i > 0 && line.trim() === '---')
  if (end === -1) {
    return { frontmatter: {}, content: raw }
  }
  const frontmatter: Frontmatter = {}
  for (let i = 1; i < end; i++) {
    const line = lines[i]
    const idx = line.indexOf(':')
    if (idx === -1) continue
    const key = line.slice(0, idx).trim()
    const value = line
      .slice(idx + 1)
      .trim()
      .replace(/^["']|["']$/g, '')
    if (key) frontmatter[key] = value
  }
  const content = lines.slice(end + 1).join('\n').trimStart()
  return { frontmatter, content }
}

function escapeHtml(text: string) {
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
}

function inlineHtml(text: string) {
  let html = escapeHtml(text)
  html = html.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
  html = html.replace(/`([^`]+)`/g, '<code>$1</code>')
  html = html.replace(
    /\[([^\]]+)\]\((https?:\/\/[^\s)]+)\)/g,
    '<a href="$2" target="_blank" rel="noopener noreferrer">$1</a>',
  )
  return html
}

export function markdownToHtml(markdown: string) {
  const lines = markdown.split('\n')
  let html = ''
  let i = 0
  while (i < lines.length) {
    const line = lines[i]
    if (line.trim() === '') {
      i++
      continue
    }
    if (line.startsWith('```')) {
      const close = lines.findIndex((l, j) => j > i && l.startsWith('```'))
      if (close !== -1) {
        const code = lines.slice(i + 1, close).join('\n')
        html += `<pre><code>${escapeHtml(code)}</code></pre>\n`
        i = close + 1
        continue
      }
    }
    if (/^#{1,6}\s/.test(line)) {
      const level = line.match(/^#+/)?.[0].length ?? 1
      const text = line.replace(/^#{1,6}\s*/, '')
      html += `<h${level}>${inlineHtml(text)}</h${level}>\n`
      i++
      continue
    }
    if (line.startsWith('- ') || line.startsWith('* ')) {
      html += '<ul>'
      while (
        i < lines.length &&
        (lines[i].startsWith('- ') || lines[i].startsWith('* '))
      ) {
        html += `<li>${inlineHtml(lines[i].replace(/^[-*]\s*/, ''))}</li>`
        i++
      }
      html += '</ul>\n'
      continue
    }
    html += `<p>${inlineHtml(line)}</p>\n`
    i++
  }
  return html
}
