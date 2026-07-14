import type { Metadata } from 'next'
import { Inter, Bebas_Neue, JetBrains_Mono } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const bebasNeue = Bebas_Neue({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-bebas',
  display: 'swap',
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://frameaxis.com'),
  title: {
    default: 'FrameAxis — Premium Video Editing Agency',
    template: '%s | FrameAxis',
  },
  description:
    'FrameAxis is a premium video editing agency delivering cinematic edits for YouTube creators, e-commerce brands, SaaS companies, and performance marketers. 48-hour turnaround. Unlimited revisions.',
  keywords: [
    'video editing agency',
    'professional video editing',
    'YouTube video editor',
    'social media video editing',
    'ad creative production',
    'video post production',
    'FrameAxis',
    'motion graphics agency',
  ],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://frameaxis.com',
    siteName: 'FrameAxis',
    title: 'FrameAxis — Premium Video Editing Agency',
    description:
      'Where Every Frame Drives Results. Premium video editing for creators, brands, and marketers.',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@frameaxis',
    creator: '@frameaxis',
    title: 'FrameAxis — Premium Video Editing Agency',
    description: 'Where Every Frame Drives Results.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

import InteractiveCursor from '@/components/ui/InteractiveCursor'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${bebasNeue.variable} ${jetbrainsMono.variable}`}
    >
      <body
        style={{ fontFamily: 'var(--font-inter, Inter, system-ui, sans-serif)' }}
        className="bg-bg-base text-text-primary antialiased overflow-x-hidden"
      >
        <InteractiveCursor />
        {children}
      </body>
    </html>
  )
}
