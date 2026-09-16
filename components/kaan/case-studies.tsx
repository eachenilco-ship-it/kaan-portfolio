import { ArrowUpRight } from 'lucide-react'
import { Reveal } from './reveal'
import { SectionLabel } from './section-label'
import { BeforeAfter } from './before-after'

type CaseStudy = {
  tags: string[]
  name: string
  problem: string
  did: string
  result: string
  url: string
  beforeSrc: string
  afterSrc: string
}

const CASES: CaseStudy[] = [
  {
    tags: ['Artisanat', 'Site vitrine'],
    name: 'Menuiserie Dupont',
    problem:
      'Un savoir-faire reconnu localement, mais une présence en ligne trop faible pour convaincre avant le premier appel.',
    did: 'Une vitrine chaleureuse qui hiérarchise les réalisations, les services et la demande de devis.',
    result:
      'Être compris plus vite et transformer les visites en demandes de devis qualifiées.',
    url: 'menuiserie-dupont.fr',
    beforeSrc: '/images/dupont-before.png',
    afterSrc: '/images/dupont-after.png',
  },
  {
    tags: ['Bien-être animal', 'Prise de rendez-vous'],
    name: "Ker'Equine",
    problem:
      "Une offre sensible et spécialisée qui avait besoin de rassurer avant d'inviter à prendre rendez-vous.",
    did: 'Une identité douce, des prestations lisibles et un parcours centré sur la confiance.',
    result:
      'Donner envie de faire le premier pas grâce à une expérience plus claire et humaine.',
    url: 'ker-equine.fr',
    beforeSrc: '/images/kerequine-before.png',
    afterSrc: '/images/kerequine-after.png',
  },
]

function DetailRow({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div>
      <p className="label-eyebrow text-gold">{label}</p>
      <p className="mt-1.5 text-sm leading-relaxed text-sand">{children}</p>
    </div>
  )
}

export function CaseStudies() {
  return (
    <section id="etudes-de-cas" className="relative bg-ink text-white">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 md:py-28">
        <SectionLabel
          label="Études de cas · Projets de démonstration"
          index="02 / 05"
        />
        <div className="mt-8 max-w-2xl">
          <Reveal>
            <h2 className="font-display text-3xl font-bold leading-tight tracking-tight sm:text-4xl">
              Deux métiers.{' '}
              <span className="text-gold">
                Deux façons de créer la confiance.
              </span>
            </h2>
          </Reveal>
          <Reveal delay={120}>
            <p className="mt-5 text-base leading-relaxed text-sand">
              Ces projets sont fictifs et servent à montrer concrètement comment
              Kaan Studio aborde un problème de visibilité, de compréhension et de
              prise de contact.
            </p>
          </Reveal>
        </div>

        <div className="mt-14 flex flex-col gap-16">
          {CASES.map((c, i) => (
            <Reveal key={c.name} as="article" delay={i * 80}>
              <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-12">
                <div className={i % 2 === 1 ? 'lg:order-2' : ''}>
                  <BeforeAfter
                    beforeSrc={c.beforeSrc}
                    afterSrc={c.afterSrc}
                    beforeAlt={`Ancien site de ${c.name}, daté et peu lisible`}
                    afterAlt={`Nouveau site de ${c.name} repensé par Kaan Studio`}
                    url={c.url}
                  />
                </div>

                <div className={i % 2 === 1 ? 'lg:order-1' : ''}>
                  <div className="flex flex-wrap items-center gap-2">
                    {c.tags.map((tag) => (
                      <span
                        key={tag}
                        className="label-eyebrow rounded-full border border-hairline px-3 py-1 text-[10px] text-sand"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h3 className="mt-5 font-display text-2xl font-bold sm:text-3xl">
                    {c.name}
                  </h3>
                  <div className="mt-6 grid gap-5 sm:grid-cols-3 lg:grid-cols-1 lg:gap-5">
                    <DetailRow label="Le problème">{c.problem}</DetailRow>
                    <DetailRow label="Ce que j'ai fait">{c.did}</DetailRow>
                    <DetailRow label="Le résultat recherché">
                      {c.result}
                    </DetailRow>
                  </div>
                  <a
                    href="#contact"
                    className="mt-7 inline-flex items-center gap-2 rounded-full border border-hairline px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:border-gold/50 hover:text-gold"
                  >
                    Ouvrir la démo
                    <ArrowUpRight className="h-4 w-4" strokeWidth={2} />
                  </a>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
