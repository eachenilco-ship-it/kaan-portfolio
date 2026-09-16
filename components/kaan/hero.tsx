import Image from 'next/image'
import { ArrowDown, ArrowUpRight } from 'lucide-react'
import { Reveal } from './reveal'

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-ink pt-16">
      {/* ambient glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-0 top-10 h-[560px] w-[560px] rounded-full opacity-60 blur-3xl"
        style={{
          background:
            'radial-gradient(circle, rgba(212,162,78,0.16) 0%, rgba(212,162,78,0) 65%)',
        }}
      />
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 py-16 sm:px-8 md:grid-cols-[1.15fr_1fr] md:py-24">
        <div>
          <Reveal>
            <p className="label-eyebrow flex items-center gap-2 text-gold">
              <span className="h-1.5 w-1.5 rounded-full bg-gold" />
              Création de sites web · Bretagne &amp; à distance
            </p>
          </Reveal>
          <Reveal delay={80}>
            <h1 className="mt-6 font-display text-4xl font-bold leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-6xl">
              Je transforme les activités locales{' '}
              <span className="text-gold">difficiles à trouver</span> en ligne en
              sites qui donnent envie de les contacter.
            </h1>
          </Reveal>
          <Reveal delay={160}>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-sand">
              Pour les artisans, indépendants et petites entreprises de Bretagne
              qui ont un vrai savoir-faire, mais pas encore une présence à sa
              hauteur — sur place autour de Rennes et Fougères ou à distance.
            </p>
          </Reveal>
          <Reveal delay={240}>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-gold px-6 py-3.5 text-sm font-semibold text-ink transition-transform hover:-translate-y-0.5"
              >
                Parler de mon projet
                <ArrowUpRight className="h-4 w-4" strokeWidth={2} />
              </a>
              <a
                href="#etudes-de-cas"
                className="group inline-flex items-center justify-center gap-2 rounded-full border border-hairline px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:border-gold/50"
              >
                Voir les études de cas
                <ArrowDown className="h-4 w-4 transition-transform group-hover:translate-y-0.5" strokeWidth={2} />
              </a>
            </div>
          </Reveal>
          <Reveal delay={320}>
            <div className="mt-12 flex flex-wrap items-center gap-x-6 gap-y-2 border-t border-hairline pt-6 text-xs text-sand">
              <span className="font-display font-semibold text-gold">01</span>
              <span>Comprendre votre métier.</span>
              <span className="hidden h-3 w-px bg-hairline sm:inline-block" />
              <span>Le rendre évident en ligne.</span>
            </div>
          </Reveal>
        </div>

        <Reveal delay={160} className="relative">
          <div className="relative mx-auto aspect-square w-full max-w-md">
            <div
              aria-hidden="true"
              className="absolute inset-6 rounded-full border border-gold/15"
            />
            <div
              aria-hidden="true"
              className="absolute inset-16 rounded-full border border-gold/10"
            />
            <Image
              src="/images/panther.png"
              alt="Illustration low-poly d'une tête de panthère noire aux yeux dorés, emblème de Kaan Studio"
              fill
              priority
              sizes="(max-width: 768px) 80vw, 420px"
              className="object-contain"
            />
          </div>
          <p className="label-eyebrow mt-4 text-center text-sand">
            Kaan Studio / 01 —{' '}
            <span className="text-white">Créer. Clarifier. Convertir.</span>
          </p>
        </Reveal>
      </div>
    </section>
  )
}
