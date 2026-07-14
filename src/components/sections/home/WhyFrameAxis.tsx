import Badge from '@/components/ui/Badge'
import { Zap, UserCheck, Shield, TrendingUp } from 'lucide-react'

const differentiators = [
  {
    icon: Zap,
    title: '48-Hour Turnaround',
    description:
      'Brief us on Monday. First edit back by Wednesday. Every sprint, without exception. No chasing. No excuses.',
    stat: '48 hrs',
    statLabel: 'average delivery',
    iconColor: 'text-brand-accent',
    iconBg: 'bg-brand-accent/10 border-brand-accent/25',
  },
  {
    icon: UserCheck,
    title: 'Dedicated Editor',
    description:
      'You get one editor who learns your brand voice, your style, your audience — and gets better every single edit.',
    stat: '1 editor',
    statLabel: 'who knows your brand',
    iconColor: 'text-brand-primary',
    iconBg: 'bg-brand-primary/10 border-brand-primary/25',
  },
  {
    icon: TrendingUp,
    title: 'Performance-Driven Editing',
    description:
      "We don't just make videos look good. We edit for metrics — watch time, CTR, ROAS, and retention curves.",
    stat: '97%',
    statLabel: 'client retention rate',
    iconColor: 'text-brand-success',
    iconBg: 'bg-brand-success/10 border-brand-success/25',
  },
  {
    icon: Shield,
    title: 'NDA & IP Protected',
    description:
      'Your content, your IP. Full NDA from day one. We never share, repurpose, or reference your work without consent.',
    stat: '100%',
    statLabel: 'NDA coverage',
    iconColor: 'text-purple-600',
    iconBg: 'bg-purple-50 border-purple-200',
  },
]

export default function WhyFrameAxis() {
  return (
    <section id="why" className="section-padding">
      <div className="container-frame">
        {/* Header */}
        <div className="max-w-2xl mb-14">
          <Badge variant="muted" className="mb-4">Why FrameAxis</Badge>
          <h2 className="text-section text-text-primary mb-4">
            NOT JUST AN AGENCY.
            <br />
            <span className="gradient-text-brand">YOUR GROWTH ENGINE.</span>
          </h2>
          <p className="text-text-secondary leading-relaxed">
            Hundreds of editors exist. One that treats your content like their own business doesn't.
            Here's what makes us different.
          </p>
        </div>

        {/* Differentiators Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {differentiators.map((item, index) => {
            const Icon = item.icon
            return (
              <div
                key={item.title}
                className="group relative bg-bg-surface rounded-2xl border border-bg-border p-8 hover:border-text-primary/20 shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden"
              >
                {/* Subtle glow on hover */}
                <div
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background:
                      index === 0
                        ? 'radial-gradient(ellipse 60% 60% at 0% 100%, rgba(217,70,239,0.05) 0%, transparent 70%)'
                        : index === 1
                        ? 'radial-gradient(ellipse 60% 60% at 100% 0%, rgba(79,70,229,0.06) 0%, transparent 70%)'
                        : index === 2
                        ? 'radial-gradient(ellipse 60% 60% at 0% 0%, rgba(16,185,129,0.06) 0%, transparent 70%)'
                        : 'radial-gradient(ellipse 60% 60% at 100% 100%, rgba(147,51,234,0.05) 0%, transparent 70%)',
                  }}
                  aria-hidden="true"
                />

                <div className="relative z-10 flex gap-6">
                  {/* Icon */}
                  <div
                    className={`w-12 h-12 rounded-xl border flex items-center justify-center flex-shrink-0 ${item.iconBg} group-hover:scale-110 transition-transform duration-300`}
                  >
                    <Icon size={22} className={item.iconColor} />
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="font-semibold text-text-primary text-lg mb-2 leading-tight">
                      {item.title}
                    </h3>
                    <p className="text-text-muted text-sm leading-relaxed mb-4">
                      {item.description}
                    </p>
                    {/* Stat pill */}
                    <div className="inline-flex items-baseline gap-2">
                      <span className={`font-display text-2xl tracking-wide ${item.iconColor}`}>
                        {item.stat}
                      </span>
                      <span className="text-text-muted text-xs uppercase tracking-wider">
                        {item.statLabel}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
