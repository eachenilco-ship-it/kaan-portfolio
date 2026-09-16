import Image from 'next/image'
import { ArrowRight, ArrowUpRight, Check } from 'lucide-react'
import { Reveal } from './reveal'
import { SectionLabel } from './section-label'

const INCLUDED = [
  'Positionnement et structure des contenus',
  'Design personnalisé et interface responsive',
  "Site vitrine adapté au mobile, à la tablette et à l'ordinateur",
  'Formulaire de contact, mise en ligne et optimisation SEO de base',
]

export function OfferSection() {
  return (
    <section id="offre" className="bg-white text-ink">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 md:py-28">
        <SectionLabel label="Services de Kaan Studio" index="03 / 05" tone="dark" />
        <div className="mt-8 grid gap-12 md:grid-cols-[1fr_1.1fr] md:items-stretch">
          <Reveal>
            <div className="flex h-full flex-col">
              <h2 className="font-display text-3xl font-bold leading-tight tracking-tight sm:text-4xl">
                Un site vitrine qui fait{' '}
                <span className="text-gold">avancer</span> votre activité.
              </h2>
              <p className="mt-6 max-w-md text-base leading-relaxed text-ink/70">
                Une offre simple pour les professionnels qui veulent arrêter de
                bricoler leur présence en ligne et commencer à être choisis.
              </p>
              <a
                href="#contact"
                className="mt-8 inline-flex w-fit items-center gap-2 rounded-full bg-ink px-6 py-3.5 text-sm font-semibold text-white transition-transform hover:-translate-y-0.5"
              >
                Recevoir une première proposition
                <ArrowUpRight className="h-4 w-4" strokeWidth={2} />
              </a>
              <div className="relative mt-10 min-h-[220px] flex-1 overflow-hidden rounded-2xl border border-ink/10">
                <Image
                  src="/images/studio-desk.png"
                  alt="Bureau du studio de nuit avec un site web en cours de conception sur l'ordinateur"
                  fill
                  sizes="(max-width: 768px) 90vw, 480px"
                  className="object-cover"
                />
              </div>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="rounded-2xl border border-ink/10 bg-ink p-7 text-white sm:p-9">
              <div className="flex items-center justify-between gap-4 border-b border-hairline pb-5">
                <h3 className="font-display text-xl font-semibold">
                  Site vitrine sur mesure
                </h3>
                <span className="label-eyebrow text-gold">
                  Pour les activités locales
                </span>
              </div>

              <div className="mt-6 grid gap-6 sm:grid-cols-2">
                <div>
                  <p className="label-eyebrow text-sand">Inclus</p>
                  <ul className="mt-3 flex flex-col gap-3">
                    {INCLUDED.map((item) => (
                      <li key={item} className="flex gap-2.5 text-sm text-white/90">
                        <Check
                          className="mt-0.5 h-4 w-4 shrink-0 text-gold"
                          strokeWidth={2.5}
                        />
                        <span className="leading-snug">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p className="label-eyebrow text-sand">Pour qui</p>
                  <p className="mt-3 text-sm leading-relaxed text-white/70">
                    Artisans, indépendants, thérapeutes et petites entreprises qui
                    veulent être compris avant d&apos;être contactés.
                  </p>
                </div>
              </div>

              <div className="mt-7 flex flex-wrap items-center justify-between gap-3 border-t border-hairline pt-5">
                <span className="text-sm text-sand">
                  Projet sur mesure · Devis après échange
                </span>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-gold transition-colors hover:text-gold-soft"
                >
                  Parlons-en
                  <ArrowRight className="h-4 w-4" strokeWidth={2} />
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
