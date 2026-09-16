import { SiteHeader } from '@/components/kaan/site-header'
import { Hero } from '@/components/kaan/hero'
import { WhySection } from '@/components/kaan/why-section'
import { CaseStudies } from '@/components/kaan/case-studies'
import { OfferSection } from '@/components/kaan/offer-section'
import { ProcessSection } from '@/components/kaan/process-section'
import { ContactSection } from '@/components/kaan/contact-section'
import { SiteFooter } from '@/components/kaan/site-footer'

export default function Page() {
  return (
    <div className="min-h-screen bg-ink">
      <SiteHeader />
      <main>
        <Hero />
        <WhySection />
        <CaseStudies />
        <OfferSection />
        <ProcessSection />
        <ContactSection />
      </main>
      <SiteFooter />
    </div>
  )
}
