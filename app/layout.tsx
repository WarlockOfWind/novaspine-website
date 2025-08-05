import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'AccessAbility - Mobilité pour tous',
  description: 'Des solutions de mobilité pour l\'autonomie. Spécialiste de l\'aménagement de véhicules accessibles PMR.',
  keywords: ['véhicule accessible', 'aménagement PMR', 'fauteuil roulant', 'véhicule adapté', 'transport PMR', 'mobilité', 'autonomie'],
  openGraph: {
    title: 'AccessAbility - Mobilité pour tous',
    description: 'Des solutions de mobilité pour l\'autonomie. Spécialiste de l\'aménagement de véhicules accessibles PMR.',
    url: 'https://access-ability.fr',
    siteName: 'AccessAbility',
    locale: 'fr_FR',
    type: 'website',
  },
  alternates: {
    canonical: 'https://access-ability.fr',
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