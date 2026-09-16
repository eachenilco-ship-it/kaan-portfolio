import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Inter, Space_Grotesk } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['500', '600', '700'],
  variable: '--font-space-grotesk',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Kaan Studio | Création de sites web sur mesure en Bretagne',
  description:
    "Kaan Studio transforme les activités locales difficiles à trouver en ligne en sites qui donnent envie de les contacter. Création de sites vitrines sur mesure pour artisans, indépendants et petites entreprises autour de Rennes et Fougères, ou à distance.",
  generator: 'v0.app',
  keywords: [
    'création site web',
    'site vitrine',
    'Bretagne',
    'Rennes',
    'Fougères',
    'artisan',
    'indépendant',
    'petite entreprise',
    'Kaan Studio',
  ],
  authors: [{ name: 'Kaan Studio' }],
  openGraph: {
    title: 'Kaan Studio | Création de sites web sur mesure en Bretagne',
    description:
      "Des sites qui rendent les bons projets plus faciles à choisir. Pour les artisans et petites entreprises de Bretagne.",
    locale: 'fr_FR',
    type: 'website',
  },
}

export const viewport: Viewport = {
  colorScheme: 'dark',
  themeColor: '#0b0a09',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fr" className="dark">
      <body className={`${inter.variable} ${spaceGrotesk.variable} antialiased`}>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
