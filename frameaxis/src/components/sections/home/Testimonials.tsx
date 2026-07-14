import Badge from '@/components/ui/Badge'
import { testimonials } from '@/data/testimonials'
import { Star } from 'lucide-react'

export default function Testimonials() {
  return (
    <section id="testimonials" className="section-padding overflow-hidden">
      <div className="container-frame">
        {/* Header */}
        <div className="text-center mb-12">
          <Badge variant="muted" className="mb-4">Client Stories</Badge>
          <h2 className="text-section text-text-primary">
            DON'T TAKE{' '}
            <span className="gradient-text-brand">OUR WORD</span>
            <br />
            FOR IT.
          </h2>
        </div>

        {/* Scrollable Testimonial Row */}
        <div className="relative">
          {/* Fade edges */}
          <div
            className="absolute left-0 top-0 bottom-0 w-16 z-10 pointer-events-none hidden md:block"
            style={{ background: 'linear-gradient(to right, var(--bg-base), transparent)' }}
            aria-hidden="true"
          />
          <div
            className="absolute right-0 top-0 bottom-0 w-16 z-10 pointer-events-none hidden md:block"
            style={{ background: 'linear-gradient(to left, var(--bg-base), transparent)' }}
            aria-hidden="true"
          />

          <div className="flex gap-5 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide md:-mx-8 md:px-8">
            {testimonials.map((t) => (
              <div
                key={t.id}
                className="flex-shrink-0 w-80 snap-start bg-bg-elevated rounded-2xl border border-white/8 p-6 flex flex-col gap-4"
              >
                {/* Stars */}
                <div className="flex gap-0.5">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star
                      key={i}
                      size={14}
                      className="text-brand-accent fill-brand-accent"
                    />
                  ))}
                </div>

                {/* Quote */}
                <blockquote className="text-text-secondary text-sm leading-relaxed flex-1">
                  "{t.quote}"
                </blockquote>

                {/* Metric highlight */}
                <div className="px-3 py-2 rounded-lg bg-brand-success/8 border border-brand-success/20">
                  <p className="text-brand-success text-xs font-semibold font-mono">
                    ↑ {t.metric}
                  </p>
                </div>

                {/* Avatar & Info */}
                <div className="flex items-center gap-3 pt-2 border-t border-white/8">
                  {/* Avatar placeholder */}
                  <div className="w-9 h-9 rounded-full bg-brand-primary/20 border border-brand-primary/30 flex items-center justify-center text-brand-primary font-bold text-sm flex-shrink-0">
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <p className="text-text-primary text-sm font-semibold leading-tight">{t.name}</p>
                    <p className="text-text-muted text-xs">{t.role}, {t.company}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Trust bar */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-8 mt-12 text-center">
          <div>
            <div className="font-display text-3xl text-text-primary">150+</div>
            <div className="text-xs text-text-muted uppercase tracking-wider mt-0.5">Clients Served</div>
          </div>
          <div className="w-px h-10 bg-white/10 hidden sm:block" aria-hidden="true" />
          <div>
            <div className="font-display text-3xl text-text-primary">4.9 / 5</div>
            <div className="text-xs text-text-muted uppercase tracking-wider mt-0.5">Average Rating</div>
          </div>
          <div className="w-px h-10 bg-white/10 hidden sm:block" aria-hidden="true" />
          <div>
            <div className="font-display text-3xl text-text-primary">97%</div>
            <div className="text-xs text-text-muted uppercase tracking-wider mt-0.5">Client Retention</div>
          </div>
        </div>
      </div>
    </section>
  )
}
