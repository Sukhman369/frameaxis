const clients = [
  'YouTube', 'Meta', 'TikTok', 'Shopify', 'HubSpot', 'Notion',
  'Figma', 'Webflow', 'Stripe', 'Linear', 'Vercel', 'Loom',
]

// Duplicate for seamless loop
const marqueeItems = [...clients, ...clients]

export default function LogoMarquee() {
  return (
    <section className="py-14 border-y border-white/6 overflow-hidden bg-bg-surface/40">
      <div className="container-frame mb-6 text-center">
        <p className="text-xs text-text-muted font-mono uppercase tracking-widest">
          Trusted by teams at
        </p>
      </div>

      {/* Marquee Track */}
      <div className="relative flex overflow-hidden">
        {/* Fade edges */}
        <div
          className="absolute left-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
          style={{ background: 'linear-gradient(to right, var(--bg-surface), transparent)' }}
          aria-hidden="true"
        />
        <div
          className="absolute right-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
          style={{ background: 'linear-gradient(to left, var(--bg-surface), transparent)' }}
          aria-hidden="true"
        />

        <div className="flex min-w-max animate-marquee gap-12 items-center px-6">
          {marqueeItems.map((client, i) => (
            <div
              key={`${client}-${i}`}
              className="flex items-center gap-3 text-text-muted hover:text-text-secondary transition-colors duration-200 select-none"
            >
              {/* Placeholder logo dot */}
              <div className="w-2 h-2 rounded-full bg-white/20 flex-shrink-0" />
              <span className="font-semibold text-sm tracking-wide whitespace-nowrap">
                {client}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
