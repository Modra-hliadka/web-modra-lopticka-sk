import { useState } from 'react'
import logo from '../assets/logo/modra-lopticka-lockup.png'

const NAV_LINKS = [
  { href: '#co-to-je', label: 'Čo to je?' },
  { href: '#ako-pomaha', label: 'Ako pomáha?' },
  { href: '#ponuka', label: 'Ponuka' },
  { href: '#ohlasy', label: 'Ohlasy' },
]

export function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-navy-700/10 bg-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6">
        <a href="#top" className="flex items-center gap-2">
          <img src={logo} alt="Modrá loptička" className="h-6 w-auto sm:h-7" />
        </a>

        <nav className="hidden items-center gap-6 text-sm font-medium text-navy-800 md:flex">
          {NAV_LINKS.map((link) => (
            <a key={link.href} href={link.href} className="transition hover:text-accent-600">
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href="#objednat"
            className="hidden rounded-full bg-navy-700 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-navy-800 sm:inline-block"
          >
            Chcem objednať
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="inline-flex items-center justify-center rounded-lg p-2 text-navy-800 md:hidden"
            aria-label="Otvoriť menu"
            aria-expanded={open}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              {open ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 6l12 12M18 6L6 18" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {open && (
        <nav className="flex flex-col gap-1 border-t border-navy-700/10 bg-white px-4 py-3 md:hidden">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="rounded-lg px-3 py-2 text-base font-medium text-navy-800 hover:bg-sky-50"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#objednat"
            onClick={() => setOpen(false)}
            className="mt-2 rounded-full bg-navy-700 px-4 py-3 text-center text-base font-semibold text-white"
          >
            Chcem objednať
          </a>
        </nav>
      )}
    </header>
  )
}
