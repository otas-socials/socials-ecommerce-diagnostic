import Link from 'next/link'

export default function Header() {
  return (
    <header className="border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-ebitda-green">
          Socials
        </Link>
        <Link 
          href="#" 
          className="text-slate-grey hover:text-white transition-colors duration-150"
        >
          O projektu
        </Link>
      </div>
    </header>
  )
}
