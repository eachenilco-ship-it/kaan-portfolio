'use client'

import { useEffect, useState } from 'react'
import { ArrowUpRight, Menu, X } from 'lucide-react'

const NAV = [
  { label: 'Pourquoi Kaan Studio', href: '#pourquoi' },
  { label: 'Études de cas', href: '#etudes-de-cas' },
  { label: "L'offre", href: '#offre' },
  { label: 'Méthode', href: '#methode' },
]

export function SiteHeader() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled ? 'border-b border-hairline bg-ink/85 backdrop-blur-md' : 'border-b border-transparent'
      }`}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8">
        <a href="#top" className="flex items-center gap-2.5 font-display text-lg font-bold text-white">
          <span className="flex h-7 w-7 items-center justify-center rounded-full border border-gold/40 text-gold">
            <span className="h-2 w-2 rounded-full bg-gold" />
          </span>
          Kaan Studio<span className="text-gold">.</span>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm text-sand transition-colors hover:text-white"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <a
          href="#contact"
          className="hidden items-center gap-2 rounded-full bg-gold px-4 py-2 text-sm font-semibold text-ink transition-transform hover:-translate-y-0.5 md:inline-flex"
        >
          Parler de mon projet
          <ArrowUpRight className="h-4 w-4" strokeWidth={2} />
        </a>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-md text-white md:hidden"
          aria-label={open ? 'Fermer le menu' : 'Ouvrir le menu'}
          aria-expanded={open}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-hairline bg-ink/95 backdrop-blur-md md:hidden">
          <nav className="mx-auto flex max-w-6xl flex-col px-5 py-4">
            {NAV.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="border-b border-hairline py-3 text-base text-sand transition-colors hover:text-white"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-4 inline-flex items-center justify-center gap-2 rounded-full bg-gold px-4 py-3 text-sm font-semibold text-ink"
            >
              Parler de mon projet
              <ArrowUpRight className="h-4 w-4" strokeWidth={2} />
            </a>
          </nav>
        </div>
      )}
    </header>
  )
}
