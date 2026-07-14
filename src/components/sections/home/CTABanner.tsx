import Link from 'next/link'

export default function CTABanner() {
  return (
    <section id="cta" className="section-padding">
      <div className="container-frame">
        <div
          className="relative rounded-3xl overflow-hidden border border-brand-primary/20 p-12 md:p-16 text-center shadow-lg"
          style={{
            background:
              'radial-gradient(ellipse 100% 100% at 50% 0%, rgba(79,70,229,0.06) 0%, rgba(255,255,255,0.95) 75%), linear-gradient(180deg, rgba(217,70,239,0.04) 0%, transparent 100%)',
          }}
        >
          {/* Top Glow */}
          <div
            className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-1 rounded-full"
            style={{
              background: 'linear-gradient(90deg, transparent, rgba(79,70,229,0.7), rgba(217,70,239,0.5), transparent)',
            }}
            aria-hidden="true"
          />

          {/* Grid pattern */}
          <div
            className="absolute inset-0 opacity-[0.02] pointer-events-none"
            style={{
              backgroundImage: 'linear-gradient(rgba(15,23,42,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(15,23,42,0.1) 1px, transparent 1px)',
              backgroundSize: '40px 40px',
            }}
            aria-hidden="true"
          />

          <div className="relative z-10">
            <p className="font-mono text-xs text-brand-primary uppercase tracking-widest mb-5 font-semibold">
              Limited spots available this month
            </p>

            <h2 className="text-hero text-text-primary mb-6" style={{ fontSize: 'clamp(2.5rem, 6vw, 6rem)' }}>
              READY TO SCALE
              <br />
              YOUR CONTENT?
            </h2>

            <p className="text-text-secondary text-lg max-w-xl mx-auto mb-10">
              Join 150+ brands and creators who trust FrameAxis to turn raw footage into results.
              First edit delivered within 48 hours.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact"
                className="px-8 py-4 rounded-xl bg-brand-primary text-white font-semibold text-base hover:bg-[#4a3aee] shadow-[0_8px_30px_rgba(79,70,229,0.25)] hover:shadow-[0_12px_40px_rgba(79,70,229,0.35)] transition-all duration-200 active:scale-95"
              >
                Book Your Free Discovery Call →
              </Link>
              <Link
                href="/pricing"
                className="px-8 py-4 rounded-xl border border-bg-border text-text-primary font-semibold text-base hover:border-text-primary/20 hover:bg-black/5 transition-all duration-200"
              >
                View Pricing
              </Link>
            </div>

            <p className="text-text-muted text-xs mt-6">
              No commitment required. Response within 4 hours.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
