import { MessagesSquare, PencilRuler, Blocks, Rocket } from 'lucide-react'
import { Reveal } from './reveal'
import { SectionLabel } from './section-label'

const STEPS = [
  {
    n: '01',
    title: 'On échange',
    body: 'Votre activité, vos clients et ce que vous voulez obtenir.',
    Icon: MessagesSquare,
  },
  {
    n: '02',
    title: 'On structure',
    body: 'Une proposition claire pour organiser le contenu et le parcours.',
    Icon: PencilRuler,
  },
  {
    n: '03',
    title: 'Je construis',
    body: 'Un site responsive, rapide et adapté à votre image.',
    Icon: Blocks,
  },
  {
    n: '04',
    title: 'On lance',
    body: 'Derniers ajustements, mise en ligne et conseils pour la suite.',
    Icon: Rocket,
  },
]

export function ProcessSection() {
  return (
    <section id="methode" className="bg-ink text-white">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 md:py-28">
        <SectionLabel label="Un projet simple, étape par étape" index="04 / 05" />
        <Reveal>
          <h2 className="mt-8 max-w-2xl font-display text-3xl font-bold leading-tight tracking-tight sm:text-4xl">
            De l&apos;idée à la mise en ligne.
          </h2>
        </Reveal>

        <ol className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-hairline bg-hairline sm:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((step, i) => (
            <Reveal key={step.n} as="li" delay={i * 90} className="bg-ink">
              <div className="group flex h-full flex-col gap-5 p-7">
                <div className="flex items-center justify-between">
                  <span
                    className="flex h-12 w-12 items-center justify-center rounded-xl border border-gold/25 bg-gold/5 text-gold transition-colors group-hover:border-gold/50 group-hover:bg-gold/10"
                    aria-hidden="true"
                  >
                    <step.Icon className="h-5 w-5" strokeWidth={1.4} />
                  </span>
                  <span className="font-display text-2xl font-bold text-white/10">
                    {step.n}
                  </span>
                </div>
                <div>
                  <h3 className="font-display text-lg font-semibold">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-sand">
                    {step.body}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  )
}
