import Image from 'next/image'
import { ArrowRight } from 'lucide-react'
import { Reveal } from './reveal'
import { SectionLabel } from './section-label'

const POINTS = [
  {
    n: '01',
    title: 'Votre métier, pas un template.',
    body: 'Chaque page est construite autour de votre activité, de vos clients et de vos vraies questions.',
  },
  {
    n: '02',
    title: 'Une clarté qui rassure.',
    body: 'Votre valeur devient lisible en quelques secondes, sans jargon ni parcours compliqué.',
  },
  {
    n: '03',
    title: 'Un site qui travaille.',
    body: 'Chaque détail guide naturellement vers la bonne action : appeler, demander un devis ou réserver.',
  },
]

export function WhySection() {
  return (
    <section id="pourquoi" className="bg-white text-ink">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 md:py-28">
        <SectionLabel label="Pourquoi Kaan Studio" index="01 / 05" tone="dark" />
        <div className="mt-8 grid gap-10 md:grid-cols-[1.05fr_1fr] md:items-stretch">
          <Reveal>
            <div className="flex h-full flex-col">
              <h2 className="font-display text-3xl font-bold leading-tight tracking-tight sm:text-4xl">
                Un site n&apos;est pas une vitrine.{' '}
                <span className="text-gold">
                  C&apos;est votre premier échange.
                </span>
              </h2>
              <p className="mt-6 max-w-md text-base leading-relaxed text-ink/70">
                Je ne pars pas d&apos;un modèle. Je pars de ce que vos clients
                doivent comprendre, ressentir et faire.
              </p>
              <p className="mt-5 max-w-md text-base leading-relaxed text-ink/70">
                Quand une activité locale est difficile à trouver ou à
                comprendre en ligne, la confiance se perd avant même le premier
                contact. Kaan Studio transforme votre savoir-faire en un
                parcours clair, crédible et humain.
              </p>
              <a
                href="#offre"
                className="mt-auto inline-flex w-fit items-center gap-2 pt-8 text-sm font-semibold text-ink transition-colors hover:text-gold"
              >
                Découvrir l&apos;offre
                <ArrowRight className="h-4 w-4" strokeWidth={2} />
              </a>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <div className="relative h-full min-h-[340px] w-full overflow-hidden rounded-2xl border border-ink/10">
              <Image
                src="/images/craft-hands.png"
                alt="Mains d'un artisan local façonnant une pièce en bois dans son atelier"
                fill
                sizes="(max-width: 768px) 90vw, 520px"
                className="object-cover"
              />
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-gradient-to-t from-ink/50 via-transparent to-transparent"
              />
              <span className="label-eyebrow absolute bottom-3 left-3 rounded-full bg-black/60 px-3 py-1 text-[10px] font-semibold text-white/90 ring-1 ring-white/10">
                Un vrai savoir-faire
              </span>
            </div>
          </Reveal>
        </div>

        <div className="mt-16 grid gap-px overflow-hidden rounded-2xl border border-ink/10 bg-ink/10 sm:grid-cols-3">
          {POINTS.map((point, i) => (
            <Reveal key={point.n} delay={i * 100} className="bg-white">
              <div className="flex h-full flex-col gap-3 p-7">
                <span className="font-display text-sm font-semibold text-gold">
                  {point.n}
                </span>
                <h3 className="font-display text-lg font-semibold">
                  {point.title}
                </h3>
                <p className="text-sm leading-relaxed text-ink/60">
                  {point.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
