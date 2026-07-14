import Link from 'next/link'
import Badge from '@/components/ui/Badge'
import {
  Youtube, Smartphone, Megaphone, Film, MonitorPlay, Mic
} from 'lucide-react'

const services = [
  {
    icon: Youtube,
    title: 'YouTube & Long-Form',
    tagline: 'Keep viewers hooked from second one.',
    description:
      'Chapters, motion graphics, L-cuts, color grading, and thumbnail strategy — everything to maximize retention and growth.',
    href: '/services#youtube',
    accent: 'brand',
    size: 'large',
  },
  {
    icon: Smartphone,
    title: 'Reels & Shorts',
    tagline: 'Platform-native. Thumb-stopping.',
    description:
      'TikTok, Instagram Reels, YouTube Shorts — edited for the algorithm of each platform.',
    href: '/services#reels',
    accent: 'accent',
    size: 'normal',
  },
  {
    icon: Megaphone,
    title: 'Ad Creative Production',
    tagline: '10 variants. 48 hours.',
    description:
      'Meta, TikTok, YouTube ads — direct-response creatives that stop the scroll and drive conversions.',
    href: '/services#ads',
    accent: 'normal',
    size: 'normal',
  },
  {
    icon: Film,
    title: 'Brand Films',
    tagline: 'Cinematic. Unforgettable.',
    description:
      'Hero brand films, company culture videos, and investor decks that tell your story at the highest level.',
    href: '/services#brand',
    accent: 'normal',
    size: 'normal',
  },
  {
    icon: MonitorPlay,
    title: 'SaaS Product Demos',
    tagline: 'From bland to conversion machine.',
    description:
      'Animated UI walkthroughs, screen recordings, and voiceover sync that turn demos into deals.',
    href: '/services#saas',
    accent: 'normal',
    size: 'normal',
  },
  {
    icon: Mic,
    title: 'Podcast Production',
    tagline: 'One recording. 10 pieces of content.',
    description:
      'Multi-cam sync, lower thirds, chapters, and clip extraction for every major platform.',
    href: '/services#podcast',
    accent: 'normal',
    size: 'normal',
  },
]

export default function ServicesGrid() {
  return (
    <section id="services" className="section-padding">
      <div className="container-frame">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <Badge variant="muted" className="mb-4">What We Do</Badge>
            <h2 className="text-section text-text-primary">
              EVERY FORMAT.
              <br />
              <span className="gradient-text-brand">EVERY PLATFORM.</span>
            </h2>
          </div>
          <p className="text-text-secondary max-w-sm text-sm leading-relaxed md:text-right">
            From 60-second Reels to 60-minute documentaries — we edit content that performs, not just content that exists.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Large featured card */}
          <Link
            href={services[0].href}
            className="md:col-span-2 group relative bg-bg-elevated rounded-2xl border border-white/8 p-8 overflow-hidden hover:border-brand-primary/40 transition-all duration-300"
          >
            <div
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              style={{
                background: 'radial-gradient(ellipse 80% 80% at 0% 0%, rgba(91,74,255,0.1) 0%, transparent 60%)',
              }}
              aria-hidden="true"
            />
            <div className="relative z-10">
              <div className="w-12 h-12 rounded-xl bg-brand-primary/15 border border-brand-primary/25 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Youtube size={22} className="text-brand-primary" />
              </div>
              <Badge variant="brand" className="mb-4">Most Requested</Badge>
              <h3 className="font-display text-2xl md:text-3xl text-text-primary tracking-wide mb-3">
                YOUTUBE & LONG-FORM
              </h3>
              <p className="text-text-secondary leading-relaxed max-w-md">
                {services[0].description}
              </p>
              <div className="mt-6 flex items-center gap-2 text-brand-primary text-sm font-semibold group-hover:gap-3 transition-all">
                Learn more <span>→</span>
              </div>
            </div>
          </Link>

          {/* Accent card */}
          <Link
            href={services[1].href}
            className="group relative bg-bg-elevated rounded-2xl border border-white/8 p-7 overflow-hidden hover:border-brand-accent/40 transition-all duration-300"
          >
            <div
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              style={{
                background: 'radial-gradient(ellipse 80% 80% at 100% 0%, rgba(200,255,0,0.08) 0%, transparent 60%)',
              }}
              aria-hidden="true"
            />
            <div className="relative z-10">
              <div className="w-11 h-11 rounded-xl bg-brand-accent/10 border border-brand-accent/25 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                <Smartphone size={20} className="text-brand-accent" />
              </div>
              <h3 className="font-display text-xl text-text-primary tracking-wide mb-2">
                REELS & SHORTS
              </h3>
              <p className="text-text-secondary text-sm leading-relaxed">
                {services[1].description}
              </p>
              <div className="mt-4 text-brand-accent text-sm font-semibold group-hover:underline">
                Learn more →
              </div>
            </div>
          </Link>

          {/* Remaining 4 cards */}
          {services.slice(2).map((service) => {
            const Icon = service.icon
            return (
              <Link
                key={service.title}
                href={service.href}
                className="group bg-bg-elevated rounded-2xl border border-white/8 p-7 hover:border-white/20 hover:bg-bg-elevated/80 transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Icon size={18} className="text-text-secondary group-hover:text-text-primary transition-colors" />
                </div>
                <h3 className="font-semibold text-text-primary mb-2">{service.title}</h3>
                <p className="text-text-muted text-sm leading-relaxed">{service.description}</p>
                <div className="mt-4 text-text-muted text-xs font-semibold group-hover:text-text-secondary transition-colors">
                  Learn more →
                </div>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}
