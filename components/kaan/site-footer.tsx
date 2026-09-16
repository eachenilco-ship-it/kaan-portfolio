import { ArrowUpRight } from 'lucide-react'

export function SiteFooter() {
  return (
    <footer className="border-t border-hairline bg-ink text-white">
      <div className="mx-auto max-w-6xl px-5 py-14 sm:px-8">
        <div className="flex flex-col justify-between gap-10 md:flex-row md:items-start">
          <div className="max-w-sm">
            <a href="#top" className="flex items-center gap-2.5 font-display text-lg font-bold">
              <span className="flex h-7 w-7 items-center justify-center rounded-full border border-gold/40 text-gold">
                <span className="h-2 w-2 rounded-full bg-gold" />
              </span>
              Kaan Studio<span className="text-gold">.</span>
            </a>
            <p className="mt-4 text-sm leading-relaxed text-sand">
              Des sites qui rendent les bons projets plus faciles à choisir.
            </p>
          </div>

          <div className="flex flex-col gap-2 text-sm">
            <a href="tel:0765236801" className="text-sand transition-colors hover:text-white">
              07 65 23 68 01
            </a>
            <a
              href="mailto:eachenilco@gmail.com"
              className="text-sand transition-colors hover:text-white"
            >
              eachenilco@gmail.com
            </a>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-4 border-t border-hairline pt-6 text-xs text-sand sm:flex-row sm:items-center">
          <span>© 2026 Kaan Studio</span>
          <a
            href="#contact"
            className="inline-flex items-center gap-1.5 font-medium text-white transition-colors hover:text-gold"
          >
            Parler de mon projet
            <ArrowUpRight className="h-3.5 w-3.5" strokeWidth={2} />
          </a>
        </div>
      </div>
    </footer>
  )
}
