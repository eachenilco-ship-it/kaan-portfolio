import { ArrowUpRight, Mail, Phone, Sparkles } from 'lucide-react'
import { Reveal } from './reveal'
import { SectionLabel } from './section-label'

export function ContactSection() {
  return (
    <section id="contact" className="bg-white text-ink">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 md:py-28">
        <SectionLabel label="Parlons de votre activité" index="05 / 05" tone="dark" />
        <div className="mt-8 grid gap-12 md:grid-cols-[1fr_1.05fr]">
          <Reveal>
            <h2 className="font-display text-3xl font-bold leading-tight tracking-tight sm:text-4xl">
              Prêt à devenir{' '}
              <span className="text-gold">plus facile à choisir ?</span>
            </h2>
            <p className="mt-6 max-w-md text-base leading-relaxed text-ink/70">
              Décrivez-moi votre besoin. Je vous répondrai avec une première
              proposition claire et adaptée, sans vous demander de tout savoir
              avant de commencer.
            </p>
            <p className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-ink/70">
              <Sparkles className="h-4 w-4 text-gold" strokeWidth={2} />
              Réponse personnalisée · Projet sur mesure
            </p>

            <div className="mt-10 flex flex-col gap-4 border-t border-ink/10 pt-8">
              <a
                href="tel:0765236801"
                className="group flex items-center gap-3 text-ink transition-colors hover:text-gold"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-full border border-ink/10">
                  <Phone className="h-4 w-4" strokeWidth={2} />
                </span>
                <span>
                  <span className="label-eyebrow block text-ink/40">Téléphone</span>
                  <span className="font-medium">07 65 23 68 01</span>
                </span>
              </a>
              <a
                href="mailto:eachenilco@gmail.com"
                className="group flex items-center gap-3 text-ink transition-colors hover:text-gold"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-full border border-ink/10">
                  <Mail className="h-4 w-4" strokeWidth={2} />
                </span>
                <span>
                  <span className="label-eyebrow block text-ink/40">Email</span>
                  <span className="font-medium">eachenilco@gmail.com</span>
                </span>
              </a>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <form className="rounded-2xl border border-ink/10 bg-[#faf9f6] p-7 sm:p-8">
              <div className="flex flex-col gap-5">
                <label className="flex flex-col gap-2">
                  <span className="label-eyebrow text-ink/50">Votre nom</span>
                  <input
                    type="text"
                    name="name"
                    placeholder="Ex. Marie Dupont"
                    className="rounded-lg border border-ink/15 bg-white px-4 py-3 text-sm text-ink outline-none transition-colors placeholder:text-ink/30 focus:border-gold"
                  />
                </label>
                <label className="flex flex-col gap-2">
                  <span className="label-eyebrow text-ink/50">Votre email</span>
                  <input
                    type="email"
                    name="email"
                    placeholder="vous@exemple.fr"
                    className="rounded-lg border border-ink/15 bg-white px-4 py-3 text-sm text-ink outline-none transition-colors placeholder:text-ink/30 focus:border-gold"
                  />
                </label>
                <label className="flex flex-col gap-2">
                  <span className="label-eyebrow text-ink/50">Votre projet</span>
                  <textarea
                    name="project"
                    rows={4}
                    placeholder="Parlez-moi de votre activité et de votre besoin…"
                    className="resize-none rounded-lg border border-ink/15 bg-white px-4 py-3 text-sm text-ink outline-none transition-colors placeholder:text-ink/30 focus:border-gold"
                  />
                </label>
                <button
                  type="submit"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-gold px-6 py-3.5 text-sm font-semibold text-ink transition-transform hover:-translate-y-0.5"
                >
                  Envoyer ma demande
                  <ArrowUpRight className="h-4 w-4" strokeWidth={2} />
                </button>
              </div>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
