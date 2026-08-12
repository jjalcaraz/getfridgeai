import Link from 'next/link'

export default function Header() {
  return (
    <header className="bg-white border-b border-gray-100 py-4 px-4">
      <nav className="max-w-6xl mx-auto flex items-center justify-between">
        <Link href="/" className="text-xl font-bold text-gray-900 hover:text-green-600 transition-colors">
          Fridge AI
        </Link>
        <div className="flex items-center gap-4 md:gap-6 text-sm md:text-base">
          <Link href="/" className="text-gray-600 hover:text-green-600 transition-colors">Home</Link>
          <Link href="/blog" className="text-gray-600 hover:text-green-600 transition-colors">Blog</Link>
          <Link href="/support" className="text-gray-600 hover:text-green-600 transition-colors">Support</Link>
          <Link href="/privacy" className="text-gray-600 hover:text-green-600 transition-colors">Privacy</Link>
        </div>
      </nav>
    </header>
  )
}
