# Technical Requirements Document (TRD)
## FrameAxis — Premium Video Editing Agency Website

---

> **Version:** 1.0  
> **Date:** July 14, 2026  
> **Status:** Approved for Development  
> **Author:** Antigravity (AI Architect)  
> **Companion to:** PRD v1.0

---

## 1. Architecture Overview

FrameAxis is a **static-first, performance-optimized marketing website** built with **Next.js 15 (App Router)**. The architecture prioritizes:
- Sub-2.5s LCP globally via edge delivery
- Cinematic visual experience without sacrificing Core Web Vitals
- Easy content updates without developer involvement (Phase 2)
- Modular, scalable component library for future growth

### 1.1 Architecture Diagram

```
┌─────────────────────────────────────────────────────────────┐
│                        CLIENT BROWSER                       │
│   React Components + GSAP Animations + Framer Motion       │
└────────────────────┬────────────────────────────────────────┘
                     │  HTTPS
┌────────────────────▼────────────────────────────────────────┐
│                   VERCEL EDGE NETWORK                       │
│         CDN • SSL • Global Edge Routing • ISR Cache        │
└────────────────────┬────────────────────────────────────────┘
                     │
┌────────────────────▼────────────────────────────────────────┐
│              NEXT.JS 15 APP (App Router)                    │
│                                                             │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────────┐  │
│  │  Static Pages│  │ API Routes   │  │  Server Actions  │  │
│  │  (SSG/ISR)   │  │ /api/*       │  │  (Form Submit)   │  │
│  └──────────────┘  └──────────────┘  └──────────────────┘  │
└────────────────────┬────────────────────────────────────────┘
                     │
       ┌─────────────┼──────────────┐
       │             │              │
┌──────▼─────┐ ┌─────▼──────┐ ┌────▼──────────┐
│  Brevo API │ │  GA4 / GTM │ │  Calendly API │
│  (Email)   │ │ (Analytics)│ │  (Scheduling) │
└────────────┘ └────────────┘ └───────────────┘
```

---

## 2. Technology Stack

### 2.1 Core Stack

| Layer | Technology | Version | Rationale |
|---|---|---|---|
| **Framework** | Next.js | 15.x (App Router) | SSG/ISR, SEO-perfect, Vercel-native |
| **Language** | TypeScript | 5.x | Type safety, better DX, fewer runtime errors |
| **Styling** | Tailwind CSS | 4.x | Utility-first, tree-shaken, zero runtime CSS |
| **Animation — Scroll** | GSAP + ScrollTrigger | 3.x | Industry-standard for complex scroll animations |
| **Animation — UI** | Framer Motion | 11.x | React-native micro-interactions / layout anims |
| **Package Manager** | pnpm | 9.x | Faster installs, disk-efficient |
| **Runtime** | Node.js | 20 LTS | Required by Next.js 15 |

### 2.2 UI & Component Libraries

| Library | Purpose |
|---|---|
| `@radix-ui/react-*` | Accessible component primitives (Dialog, Tabs, Accordion, etc.) |
| `react-icons` | Icon set (Phosphor Icons style) |
| `embla-carousel-react` | Performant touch-carousel for testimonials |
| `react-intersection-observer` | Viewport detection hook for animation triggers |
| `lucide-react` | Lightweight icon library for UI elements |
| `clsx` + `tailwind-merge` | Class composition utilities |

### 2.3 Video & Media

| Library | Purpose |
|---|---|
| `@next/third-parties` | YouTube/Vimeo lite embed (performance-optimized) |
| `react-player` | Flexible video player for all sources |
| `next/image` | Automatic WebP/AVIF, lazy loading, blur placeholder |

### 2.4 Forms & Communication

| Service | Purpose |
|---|---|
| `react-hook-form` | Performant, accessible form state management |
| `zod` | Schema validation (client + server) |
| `@emailjs/browser` OR Brevo SMTP | Contact form email delivery (Phase 1: EmailJS is zero-backend) |
| Calendly Embed Widget | Discovery call scheduling (via `<script>` embed) |

### 2.5 Analytics & Monitoring

| Service | Purpose |
|---|---|
| Google Analytics 4 | Traffic, events, conversions |
| Google Search Console | SEO indexing, keyword data |
| Microsoft Clarity (free) | Session recordings, heatmaps |
| Sentry | Error tracking (Phase 2) |

### 2.6 Infrastructure & Deployment

| Layer | Service |
|---|---|
| **Hosting / CDN** | Vercel (Pro tier) |
| **Domain & DNS** | Cloudflare |
| **SSL** | Auto via Vercel / Cloudflare |
| **Environment Secrets** | Vercel Environment Variables |
| **CI/CD** | GitHub Actions → Vercel auto-deploy on push to `main` |
| **Repository** | GitHub (private) |

---

## 3. Project Structure

```
frameaxis/
├── public/
│   ├── fonts/                    # Self-hosted fallback fonts
│   ├── images/                   # Static image assets
│   │   ├── logo/                 # Logo variants (SVG)
│   │   ├── team/                 # Team member photos
│   │   └── clients/              # Client logos (SVG)
│   ├── videos/                   # Local video assets (trailers only)
│   ├── favicon.ico
│   ├── robots.txt
│   └── sitemap.xml               # Auto-generated or static
│
├── src/
│   ├── app/                      # Next.js App Router
│   │   ├── layout.tsx            # Root layout (fonts, metadata, GA)
│   │   ├── page.tsx              # Homepage
│   │   ├── work/
│   │   │   ├── page.tsx          # Portfolio listing
│   │   │   └── [slug]/
│   │   │       └── page.tsx      # Case study detail (generateStaticParams)
│   │   ├── services/
│   │   │   └── page.tsx
│   │   ├── pricing/
│   │   │   └── page.tsx
│   │   ├── about/
│   │   │   └── page.tsx
│   │   ├── contact/
│   │   │   └── page.tsx
│   │   ├── privacy/
│   │   │   └── page.tsx
│   │   ├── terms/
│   │   │   └── page.tsx
│   │   └── api/
│   │       └── contact/
│   │           └── route.ts      # Contact form server-side handler
│   │
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.tsx
│   │   │   └── Footer.tsx
│   │   ├── ui/                   # Reusable primitives
│   │   │   ├── Button.tsx
│   │   │   ├── Badge.tsx
│   │   │   ├── Card.tsx
│   │   │   ├── AnimatedCounter.tsx
│   │   │   ├── VideoPlayer.tsx
│   │   │   └── SectionHeading.tsx
│   │   ├── sections/             # Page-specific sections
│   │   │   ├── home/
│   │   │   │   ├── Hero.tsx
│   │   │   │   ├── LogoMarquee.tsx
│   │   │   │   ├── ProblemSolution.tsx
│   │   │   │   ├── ServicesGrid.tsx
│   │   │   │   ├── FeaturedWork.tsx
│   │   │   │   ├── Differentiators.tsx
│   │   │   │   ├── PricingTeaser.tsx
│   │   │   │   ├── Testimonials.tsx
│   │   │   │   └── CTABanner.tsx
│   │   │   ├── work/
│   │   │   │   ├── WorkGrid.tsx
│   │   │   │   ├── WorkFilter.tsx
│   │   │   │   └── CaseStudyHero.tsx
│   │   │   ├── pricing/
│   │   │   │   ├── PricingCards.tsx
│   │   │   │   ├── ComparisonTable.tsx
│   │   │   │   └── PricingFAQ.tsx
│   │   │   └── contact/
│   │   │       ├── ContactForm.tsx
│   │   │       └── CalendlyWidget.tsx
│   │   └── animations/           # GSAP/Framer wrappers
│   │       ├── FadeInView.tsx
│   │       ├── StaggerGroup.tsx
│   │       ├── ParticleBackground.tsx
│   │       └── ScrollReveal.tsx
│   │
│   ├── lib/
│   │   ├── gsap.ts               # GSAP plugin registration (client-only)
│   │   ├── metadata.ts           # Shared SEO metadata builder
│   │   ├── validations.ts        # Zod schemas (contact form)
│   │   └── utils.ts              # cn(), formatDate(), etc.
│   │
│   ├── data/
│   │   ├── case-studies.ts       # Static case study data (typed)
│   │   ├── services.ts           # Services config
│   │   ├── pricing.ts            # Pricing tiers config
│   │   ├── team.ts               # Team member data
│   │   └── testimonials.ts       # Testimonials data
│   │
│   ├── hooks/
│   │   ├── useScrolled.ts        # Navbar glassmorphism trigger
│   │   ├── useReducedMotion.ts   # prefers-reduced-motion hook
│   │   └── useGSAP.ts            # GSAP useLayoutEffect wrapper
│   │
│   ├── styles/
│   │   └── globals.css           # Tailwind directives + CSS custom props
│   │
│   └── types/
│       ├── case-study.ts
│       ├── service.ts
│       └── testimonial.ts
│
├── .env.local                    # Local environment variables
├── .env.example                  # Template for env vars (committed)
├── next.config.ts                # Next.js configuration
├── tailwind.config.ts            # Tailwind theme customization
├── tsconfig.json
├── package.json
└── README.md
```

---

## 4. Detailed Technical Specifications

### 4.1 Next.js Configuration (`next.config.ts`)

```typescript
import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  // Enable React strict mode for catching issues
  reactStrictMode: true,

  // Image optimization config
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      { protocol: 'https', hostname: 'img.youtube.com' },
      { protocol: 'https', hostname: 'i.vimeocdn.com' },
    ],
    // Responsive sizes for optimal delivery
    deviceSizes: [375, 768, 1024, 1280, 1440, 1920],
  },

  // Security headers
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'X-Frame-Options', value: 'DENY' },
          { key: 'X-XSS-Protection', value: '1; mode=block' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=()',
          },
        ],
      },
    ]
  },

  // Cache-control for static assets
  async redirects() {
    return [] // Define 301 redirects here if needed
  },
}

export default nextConfig
```

### 4.2 Tailwind Configuration (`tailwind.config.ts`)

```typescript
import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: '#5B4AFF',   // Electric Indigo
          accent: '#C8FF00',    // Volt / Neon Lime
          success: '#00E87A',   // Neon Green
        },
        bg: {
          base: '#080810',      // Deep Obsidian
          surface: '#111118',   // Carbon
          elevated: '#1A1A26',  // Slate
        },
        text: {
          primary: '#F0F0F5',
          secondary: '#9090A8',
          muted: '#5A5A72',
        },
      },
      fontFamily: {
        display: ['Bebas Neue', 'sans-serif'],
        sans: ['Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      fontSize: {
        'hero-xl': ['clamp(3.5rem, 8vw, 8rem)', { lineHeight: '1' }],
        'hero-lg': ['clamp(2.5rem, 6vw, 6rem)', { lineHeight: '1.05' }],
        'section': ['clamp(2rem, 4vw, 3.5rem)', { lineHeight: '1.1' }],
      },
      backgroundImage: {
        'gradient-brand': 'linear-gradient(135deg, #5B4AFF 0%, #8B5CF6 100%)',
        'gradient-accent': 'linear-gradient(135deg, #C8FF00 0%, #00E87A 100%)',
        'gradient-dark': 'linear-gradient(180deg, #080810 0%, #111118 100%)',
        'noise': "url('/images/noise.png')",
      },
      animation: {
        'marquee': 'marquee 30s linear infinite',
        'marquee-reverse': 'marquee-reverse 30s linear infinite',
        'float': 'float 6s ease-in-out infinite',
        'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'marquee-reverse': {
          '0%': { transform: 'translateX(-50%)' },
          '100%': { transform: 'translateX(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        'pulse-glow': {
          '0%, 100%': { boxShadow: '0 0 20px rgba(91, 74, 255, 0.4)' },
          '50%': { boxShadow: '0 0 40px rgba(91, 74, 255, 0.8)' },
        },
      },
      boxShadow: {
        'brand': '0 0 30px rgba(91, 74, 255, 0.3)',
        'accent': '0 0 30px rgba(200, 255, 0, 0.3)',
        'glass': '0 8px 32px rgba(0, 0, 0, 0.4)',
        'card': '0 4px 24px rgba(0, 0, 0, 0.6)',
      },
      backdropBlur: {
        'glass': '12px',
      },
      borderRadius: {
        'xl2': '1.25rem',
        'xl3': '1.5rem',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),  // For blog/case study rich text
    require('@tailwindcss/forms'),        // For form element resets
  ],
}

export default config
```

### 4.3 Root Layout (`src/app/layout.tsx`)

```typescript
import type { Metadata } from 'next'
import { Inter, Bebas_Neue, JetBrains_Mono } from 'next/font/google'
import { GoogleAnalytics } from '@next/third-parties/google'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
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
    'FrameAxis is a premium video editing agency. We transform raw footage into high-performing content for YouTube creators, e-commerce brands, SaaS companies, and performance marketers. 48-hour turnaround. Unlimited revisions.',
  keywords: [
    'video editing agency', 'professional video editing', 'YouTube video editor',
    'social media video editing', 'ad creative production', 'video post production',
    'FrameAxis', 'motion graphics agency',
  ],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://frameaxis.com',
    siteName: 'FrameAxis',
    title: 'FrameAxis — Premium Video Editing Agency',
    description: 'Where Every Frame Drives Results. Premium video editing for creators, brands, and marketers.',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@frameaxis',
    creator: '@frameaxis',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large' },
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${bebasNeue.variable} ${jetbrainsMono.variable}`}>
      <body className="bg-bg-base text-text-primary antialiased overflow-x-hidden">
        <Navbar />
        <main>{children}</main>
        <Footer />
        <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID!} />
      </body>
    </html>
  )
}
```

---

### 4.4 SEO Metadata Builder (`src/lib/metadata.ts`)

```typescript
import type { Metadata } from 'next'

interface PageMetadataOptions {
  title: string
  description: string
  path: string
  ogImage?: string
}

export function buildMetadata({
  title,
  description,
  path,
  ogImage = '/og-image.jpg',
}: PageMetadataOptions): Metadata {
  const url = `https://frameaxis.com${path}`
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      images: [{ url: ogImage }],
    },
    twitter: { title, description, images: [ogImage] },
  }
}
```

---

### 4.5 Animation Architecture

#### GSAP Setup (`src/lib/gsap.ts`)
```typescript
// IMPORTANT: Only import on client — GSAP requires browser APIs
'use client'

import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { TextPlugin } from 'gsap/TextPlugin'
import { SplitText } from 'gsap/SplitText' // GSAP Club plugin

// Register once globally — do NOT register in individual components
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger, TextPlugin, SplitText)
}

export { gsap, ScrollTrigger, SplitText }
```

#### Scroll Reveal Component (`src/components/animations/ScrollReveal.tsx`)
```typescript
'use client'

import { useEffect, useRef } from 'react'
import { gsap } from '@/lib/gsap'
import { useReducedMotion } from '@/hooks/useReducedMotion'

interface ScrollRevealProps {
  children: React.ReactNode
  delay?: number
  direction?: 'up' | 'down' | 'left' | 'right'
  className?: string
}

export default function ScrollReveal({
  children,
  delay = 0,
  direction = 'up',
  className,
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null)
  const prefersReducedMotion = useReducedMotion()

  useEffect(() => {
    if (!ref.current || prefersReducedMotion) return

    const el = ref.current
    const axis = direction === 'left' || direction === 'right' ? 'x' : 'y'
    const value = direction === 'down' || direction === 'right' ? -40 : 40

    const ctx = gsap.context(() => {
      gsap.fromTo(
        el,
        { opacity: 0, [axis]: value },
        {
          opacity: 1,
          [axis]: 0,
          duration: 0.8,
          delay,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 88%',
            toggleActions: 'play none none none',
          },
        }
      )
    })

    return () => ctx.revert() // Cleanup on unmount
  }, [delay, direction, prefersReducedMotion])

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  )
}
```

#### Reduced Motion Hook (`src/hooks/useReducedMotion.ts`)
```typescript
import { useEffect, useState } from 'react'

export function useReducedMotion(): boolean {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false)

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    setPrefersReducedMotion(mediaQuery.matches)

    const handler = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches)
    mediaQuery.addEventListener('change', handler)
    return () => mediaQuery.removeEventListener('change', handler)
  }, [])

  return prefersReducedMotion
}
```

---

### 4.6 Contact Form API Route (`src/app/api/contact/route.ts`)

```typescript
import { NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'

const ContactSchema = z.object({
  name: z.string().min(2).max(100),
  company: z.string().max(100).optional(),
  email: z.string().email(),
  service: z.enum([
    'youtube-editing', 'social-reels', 'ad-creative',
    'brand-film', 'product-demo', 'podcast', 'other',
  ]),
  message: z.string().min(10).max(2000),
})

// Rate limiting: simple in-memory store (use Redis/Upstash for production)
const rateLimitStore = new Map<string, { count: number; resetAt: number }>()

function rateLimit(ip: string, limit = 5, windowMs = 60_000): boolean {
  const now = Date.now()
  const entry = rateLimitStore.get(ip)

  if (!entry || entry.resetAt < now) {
    rateLimitStore.set(ip, { count: 1, resetAt: now + windowMs })
    return true
  }
  if (entry.count >= limit) return false

  entry.count++
  return true
}

export async function POST(request: NextRequest) {
  const ip = request.headers.get('x-forwarded-for') ?? 'unknown'

  if (!rateLimit(ip)) {
    return NextResponse.json(
      { error: 'Too many requests. Please try again in a minute.' },
      { status: 429 }
    )
  }

  let body: unknown
  try {
    body = await request.json()
  } catch {
    return NextResponse.json({ error: 'Invalid request body.' }, { status: 400 })
  }

  const parse = ContactSchema.safeParse(body)
  if (!parse.success) {
    return NextResponse.json(
      { error: 'Validation failed.', issues: parse.error.flatten() },
      { status: 422 }
    )
  }

  const { name, company, email, service, message } = parse.data

  // Send via Brevo (Sendinblue) SMTP
  try {
    await fetch('https://api.brevo.com/v3/smtp/email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'api-key': process.env.BREVO_API_KEY!,
      },
      body: JSON.stringify({
        sender: { name: 'FrameAxis Contact Form', email: 'noreply@frameaxis.com' },
        to: [{ email: 'hello@frameaxis.com', name: 'FrameAxis Team' }],
        replyTo: { email, name },
        subject: `New Inquiry from ${name} — ${service}`,
        htmlContent: `
          <h2>New Project Inquiry</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Company:</strong> ${company ?? 'N/A'}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Service:</strong> ${service}</p>
          <p><strong>Message:</strong></p>
          <p>${message.replace(/\n/g, '<br>')}</p>
        `,
      }),
    })
  } catch (error) {
    console.error('[Contact Form] Email send failed:', error)
    return NextResponse.json({ error: 'Failed to send email.' }, { status: 500 })
  }

  return NextResponse.json({ success: true }, { status: 200 })
}
```

---

## 5. Data Models

### 5.1 Case Study (`src/types/case-study.ts`)

```typescript
export interface CaseStudy {
  slug: string
  client: string
  clientAnonymized?: boolean           // If true, show "E-Commerce Brand" instead of name
  category: CaseStudyCategory
  tags: string[]
  heroImage: string
  heroVideo?: string                   // YouTube or Vimeo URL
  thumbnailImage: string
  headline: string                     // Short result headline, e.g. "32% CTR Increase"
  brief: string                        // Client challenge/background
  approach: string                     // Creative direction and process
  result: string                       // Outcome summary
  metrics: CaseStudyMetric[]
  toolsUsed: string[]
  deliverables: CaseStudyDeliverable[]
  publishedAt: string                  // ISO date string
  featured: boolean
  relatedSlugs: string[]
}

export type CaseStudyCategory =
  | 'youtube'
  | 'social-ads'
  | 'brand-film'
  | 'product-launch'
  | 'saas'
  | 'podcast'

export interface CaseStudyMetric {
  label: string     // e.g. "Watch Time Increase"
  value: string     // e.g. "+40%"
  positive: boolean
}

export interface CaseStudyDeliverable {
  type: string      // e.g. "YouTube Long-Form"
  count: number     // e.g. 12
  format: string    // e.g. "1920×1080 MP4"
}
```

### 5.2 Pricing Tier (`src/types/pricing.ts`)

```typescript
export interface PricingTier {
  id: string
  name: string
  price: {
    monthly: number | null   // null = "Custom"
    annual: number | null    // null = "Custom"
  }
  badge?: 'most-popular' | 'best-value'
  description: string
  features: PricingFeature[]
  cta: {
    label: string
    href: string
  }
}

export interface PricingFeature {
  label: string
  included: boolean
  note?: string         // e.g. "Up to 10 min each"
}
```

---

## 6. API Endpoints

| Method | Endpoint | Auth | Description |
|---|---|---|---|
| `POST` | `/api/contact` | None | Contact form submission; validates, rate-limits, emails |
| `GET` | `/sitemap.xml` | None | Auto-generated sitemap (Next.js `MetadataRoute.Sitemap`) |
| `GET` | `/robots.txt` | None | Auto-generated robots.txt |

> **Note:** Phase 2 will add a `/api/newsletter` endpoint for subscribe/unsubscribe flows.

---

## 7. Performance Strategy

### 7.1 Image Optimization
- Use `next/image` with `priority` prop ONLY for above-the-fold images (hero)
- All portfolio thumbnails: `loading="lazy"`, `placeholder="blur"`, `blurDataURL` set
- All SVG logos: Inline or served as `<img>` with explicit width/height to prevent CLS
- Client logos: Hosted locally as SVG to avoid external fetch latency
- Target: WebP format for all raster images, AVIF where supported

### 7.2 Font Loading
- All fonts loaded via `next/font/google` with `display: 'swap'`
- Font CSS injected at build time — no render-blocking font requests
- Fallback font stack: `Inter → system-ui → -apple-system → sans-serif`

### 7.3 Animation Performance Rules
| Rule | Implementation |
|---|---|
| Animate only `transform` and `opacity` | Enforced in GSAP animations (no `top`, `left`, `width`) |
| `will-change: transform` | Applied dynamically by GSAP, removed after animation |
| GSAP cleanup | `ctx.revert()` in all `useEffect` cleanups |
| ScrollTrigger batch | Use `ScrollTrigger.batch()` for stagger animations on lists |
| Reduced motion | All animations behind `useReducedMotion()` hook |

### 7.4 Code Splitting
- Next.js App Router provides automatic code splitting per page/route
- Heavy libraries (GSAP, Framer Motion) loaded in `'use client'` components only
- `dynamic()` imports for heavy modals (Calendly widget, video player) with `ssr: false`
- Bundle analyzer: `@next/bundle-analyzer` run pre-deployment

### 7.5 Video Strategy
- Showreel: Self-hosted short `<video>` tag with `autoplay muted loop playsInline`; max 5MB
- Portfolio videos: YouTube/Vimeo embeds via `react-player` with `lazy` loading
- Lazy autoplay: Use `Intersection Observer` to only autoplay when hero video enters viewport
- No autoplay with sound. Ever.

---

## 8. SEO Implementation

### 8.1 Page-Level Metadata Table

| Page | Title | Description | H1 |
|---|---|---|---|
| `/` | `FrameAxis — Premium Video Editing Agency` | `FrameAxis is a premium video editing agency...` | `Where Every Frame Drives Results` |
| `/work` | `Our Work — Case Studies` | `Explore FrameAxis portfolio of video editing...` | `Work That Speaks for Itself` |
| `/services` | `Video Editing Services — What We Do` | `From YouTube long-form to social media reels...` | `Professional Video Editing Services` |
| `/pricing` | `Pricing — Transparent, Flat-Rate Plans` | `Simple, scalable video editing plans...` | `Transparent Pricing. Zero Surprises.` |
| `/about` | `About FrameAxis — Our Story & Team` | `Meet the editors behind FrameAxis...` | `Built by Editors. Driven by Results.` |
| `/contact` | `Start a Project — Contact FrameAxis` | `Ready to elevate your video content?...` | `Let's Build Something Great Together` |

### 8.2 Structured Data (`JSON-LD`)

**Organization Schema** (in root layout):
```json
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "FrameAxis",
  "url": "https://frameaxis.com",
  "logo": "https://frameaxis.com/images/logo/frameaxis-logo.svg",
  "contactPoint": {
    "@type": "ContactPoint",
    "email": "hello@frameaxis.com",
    "contactType": "customer service"
  },
  "sameAs": [
    "https://www.instagram.com/frameaxis",
    "https://www.linkedin.com/company/frameaxis",
    "https://twitter.com/frameaxis",
    "https://www.youtube.com/@frameaxis"
  ]
}
```

**FAQ Schema** (on `/pricing` FAQ section):
```json
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How does the subscription work?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "..."
      }
    }
  ]
}
```

### 8.3 Sitemap (`src/app/sitemap.ts`)

```typescript
import { MetadataRoute } from 'next'
import { caseStudies } from '@/data/case-studies'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://frameaxis.com'
  const staticRoutes = [
    '/', '/work', '/services', '/pricing', '/about', '/contact',
    '/privacy', '/terms',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: route === '/' ? 1.0 : 0.8,
  }))

  const caseStudyRoutes = caseStudies.map((cs) => ({
    url: `${baseUrl}/work/${cs.slug}`,
    lastModified: new Date(cs.publishedAt),
    changeFrequency: 'yearly' as const,
    priority: 0.6,
  }))

  return [...staticRoutes, ...caseStudyRoutes]
}
```

---

## 9. Security Requirements

### 9.1 HTTP Security Headers
Configured in `next.config.ts` (see Section 4.1):
- `X-Content-Type-Options: nosniff`
- `X-Frame-Options: DENY`
- `X-XSS-Protection: 1; mode=block`
- `Referrer-Policy: strict-origin-when-cross-origin`
- `Permissions-Policy: camera=(), microphone=(), geolocation=()`
- `Content-Security-Policy`: Define in Phase 2 after all external scripts are finalized

### 9.2 Form Security
- **Input Validation:** Zod schema enforced server-side (not just client-side)
- **Rate Limiting:** 5 submissions per IP per minute (upgrade to Upstash Redis in production)
- **Sanitization:** All user input HTML-escaped before email rendering
- **CSRF:** Next.js Server Actions + API Route — Vercel's edge enforces origin checks

### 9.3 Environment Variables

```bash
# .env.example (committed — contains no secrets)

# Analytics
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
NEXT_PUBLIC_CLARITY_ID=xxxxxxxxxx

# Email
BREVO_API_KEY=                   # Set in Vercel dashboard, never committed

# Calendly
NEXT_PUBLIC_CALENDLY_URL=https://calendly.com/frameaxis/discovery

# Monitoring (Phase 2)
SENTRY_DSN=
```

> ⚠️ **NEVER** commit `.env.local`. It is in `.gitignore` by default in Next.js.

---

## 10. Testing Strategy

### 10.1 Automated Checks (CI via GitHub Actions)

```yaml
# .github/workflows/ci.yml
name: CI
on: [push, pull_request]

jobs:
  quality:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: pnpm/action-setup@v3
      - uses: actions/setup-node@v4
        with: { node-version: '20', cache: 'pnpm' }
      - run: pnpm install --frozen-lockfile
      - run: pnpm run type-check      # tsc --noEmit
      - run: pnpm run lint            # next lint
      - run: pnpm run build           # next build (catches build errors)
```

### 10.2 Performance Testing (Pre-Launch Checklist)

| Tool | Target | How to Run |
|---|---|---|
| Lighthouse CI | Performance ≥ 90, LCP < 2.5s | `npx lhci autorun` against Vercel preview URL |
| WebPageTest | Confirms real-browser perf | Submit preview URL to webpagetest.org |
| GTmetrix | Load time < 3s on 4G | Submit URL |
| axe DevTools | 0 critical accessibility violations | Browser extension |

### 10.3 Cross-Browser / Device Testing

| Device | Browser | Method |
|---|---|---|
| iPhone 14 Pro | Safari 17 | BrowserStack or real device |
| Samsung Galaxy S22 | Chrome (Android) | BrowserStack |
| iPad Pro 12.9" | Safari | BrowserStack |
| MacBook 14" M3 | Chrome, Firefox, Safari | Local |
| Windows 11 | Edge, Chrome | Local |
| 4K Monitor (2560px) | Chrome | Local |

### 10.4 Form & Integration Testing
- Contact form: Submit test, verify email received, 429 on 6th submit within 1 min
- Calendly embed: Confirm booking flow opens correctly on all devices
- GA4: Use GA4 DebugView to confirm pageview and form_submit events fire
- All anchor links and CTAs: Manual click-through test on all pages

---

## 11. Deployment Configuration

### 11.1 Vercel Project Settings

| Setting | Value |
|---|---|
| **Framework** | Next.js |
| **Root Directory** | `./` (repo root) |
| **Build Command** | `pnpm run build` |
| **Output Directory** | `.next` (auto-detected) |
| **Node.js Version** | 20.x |
| **Production Branch** | `main` |
| **Preview Branches** | All other branches |
| **Auto-alias** | `frameaxis.com` + `www.frameaxis.com` → production |

### 11.2 Branch Strategy

```
main          ← Production (auto-deploy to frameaxis.com)
  └── develop ← Integration branch
        ├── feature/hero-section
        ├── feature/portfolio-page
        └── fix/mobile-navbar
```

### 11.3 Environment Variable Setup (Vercel Dashboard)

| Variable | Environment | Value |
|---|---|---|
| `NEXT_PUBLIC_GA_ID` | Production, Preview | G-XXXXXXXXXX |
| `BREVO_API_KEY` | Production only | (secret) |
| `NEXT_PUBLIC_CALENDLY_URL` | All | https://calendly.com/frameaxis/... |

---

## 12. Development Setup & Commands

```bash
# Prerequisites: Node.js 20+, pnpm 9+

# 1. Clone and install
git clone git@github.com:frameaxis/website.git
cd website
pnpm install

# 2. Set up environment
cp .env.example .env.local
# Edit .env.local with your actual values

# 3. Run development server
pnpm dev                    # → http://localhost:3000

# 4. Quality checks
pnpm type-check             # TypeScript check
pnpm lint                   # ESLint
pnpm lint:fix               # ESLint with auto-fix

# 5. Production build (verify before deploy)
pnpm build
pnpm start                  # Preview production build locally

# 6. Analyze bundle
ANALYZE=true pnpm build     # Requires @next/bundle-analyzer configured
```

---

## 13. Phase 2 Technical Additions

When the Blog and CMS are added in Phase 2, the following will be integrated:

| Addition | Technology |
|---|---|
| **Headless CMS** | Sanity.io (GROQ queries, real-time preview) |
| **Blog Post Rendering** | `next-mdx-remote` or Sanity Portable Text |
| **Image Upload** | Sanity CDN (replaces local `/public/images`) |
| **Newsletter** | Brevo list management + `/api/newsletter` endpoint |
| **Search** | Algolia DocSearch or Fuse.js (client-side for small dataset) |
| **Error Monitoring** | Sentry (Next.js SDK) |
| **Edge Rate Limiting** | Upstash Redis + `@upstash/ratelimit` |

---

*Document maintained by: FrameAxis Engineering*  
*TRD Version: 1.0 | Companion: PRD v1.0 | Next Review: Phase 2 Kickoff*
