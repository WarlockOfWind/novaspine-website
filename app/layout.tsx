import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'NovaSpine - Innovation au service de la chirurgie rachidienne',
  description: '25 ans d\'innovation au service de la chirurgie rachidienne. Nous concevons et fabriquons en France des implants et instruments de haute précision.',
  keywords: ['chirurgie rachidienne', 'implants vertébraux', 'implants lombaires', 'implants cervicaux', 'instrumentation chirurgicale', 'fusion intersomatique', 'chirurgie du dos'],
  openGraph: {
    title: 'NovaSpine - Innovation au service de la chirurgie rachidienne',
    description: '25 ans d\'innovation au service de la chirurgie rachidienne. Nous concevons et fabriquons en France des implants et instruments de haute précision.',
    url: 'https://novaspine.fr',
    siteName: 'NovaSpine',
    locale: 'fr_FR',
    type: 'website',
  },
  alternates: {
    canonical: 'https://novaspine.fr',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  )
} 