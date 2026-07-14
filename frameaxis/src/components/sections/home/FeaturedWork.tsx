import Link from 'next/link'
import Badge from '@/components/ui/Badge'
import { featuredCaseStudies } from '@/data/case-studies'
import { ArrowUpRight } from 'lucide-react'

const categoryColors: Record<string, string> = {
  youtube: 'text-red-400 bg-red-400/10 border-red-400/20',
  'social-ads': 'text-blue-400 bg-blue-400/10 border-blue-400/20',
  saas: 'text-brand-primary bg-brand-primary/10 border-brand-primary/20',
  podcast: 'text-purple-400 bg-purple-400/10 border-purple-400/20',
  'brand-film': 'text-amber-400 bg-amber-400/10 border-amber-400/20',
  'product-launch': 'text-green-400 bg-green-400/10 border-green-400/20',
}

export default function FeaturedWork() {
  return (
    <section id="work" className="section-padding bg-bg-surface/30">
      <div className="container-frame">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <Badge variant="muted" className="mb-4">Our Work</Badge>
            <h2 className="text-section text-text-primary">
              RESULTS THAT{' '}
              <span className="gradient-text-accent">SPEAK.</span>
            </h2>
          </div>
          <Link
            href="/work"
            className="inline-flex items-center gap-2 text-sm text-text-secondary hover:text-text-primary font-semibold transition-colors group"
          >
            View all case studies
            <ArrowUpRight size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Link>
        </div>

        {/* Case Study Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featuredCaseStudies.map((cs, index) => (
            <Link
              key={cs.slug}
              href={`/work/${cs.slug}`}
              className="group flex flex-col bg-bg-elevated rounded-2xl border border-white/8 overflow-hidden hover:border-white/20 transition-all duration-300 hover:-translate-y-1"
            >
              {/* Thumbnail */}
              <div
                className="aspect-video relative overflow-hidden"
                style={{
                  background: `linear-gradient(135deg, ${
                    index === 0
                      ? 'rgba(91,74,255,0.3) 0%, rgba(139,92,246,0.2)'
                      : index === 1
                      ? 'rgba(200,255,0,0.2) 0%, rgba(0,232,122,0.15)'
                      : 'rgba(91,74,255,0.2) 0%, rgba(200,255,0,0.1)'
                  } 100%)`,
                }}
              >
                {/* Placeholder visual */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-14 h-14 rounded-full bg-white/10 border border-white/20 flex items-center justify-center">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="text-white/60 ml-1">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>

                {/* Category pill */}
                <div className="absolute top-3 left-3">
                  <span
                    className={`px-2.5 py-1 rounded-full text-xs font-semibold border capitalize ${
                      categoryColors[cs.category] || 'text-text-muted bg-white/5 border-white/10'
                    }`}
                  >
                    {cs.category.replace('-', ' ')}
                  </span>
                </div>

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="text-white text-sm font-semibold flex items-center gap-1.5">
                    View Case Study <ArrowUpRight size={14} />
                  </span>
                </div>
              </div>

              {/* Card Content */}
              <div className="flex flex-col flex-1 p-6">
                <p className="text-xs text-text-muted font-mono uppercase tracking-wider mb-2">
                  {cs.clientAnonymized ? 'Confidential Client' : cs.client}
                </p>
                <h3 className="font-semibold text-text-primary text-base mb-3 leading-snug">
                  {cs.headline}
                </h3>
                <p className="text-text-muted text-sm leading-relaxed mb-4 line-clamp-2">
                  {cs.brief}
                </p>

                {/* Metrics */}
                <div className="mt-auto flex flex-wrap gap-2">
                  {cs.metrics.slice(0, 2).map((m) => (
                    <span
                      key={m.label}
                      className="px-2.5 py-1 rounded-lg bg-brand-success/10 border border-brand-success/20 text-brand-success text-xs font-semibold font-mono"
                    >
                      {m.value} {m.label}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
