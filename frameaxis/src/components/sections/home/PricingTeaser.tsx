'use client'

import { useState } from 'react'
import Link from 'next/link'
import Badge from '@/components/ui/Badge'
import { pricingTiers, enterpriseTier } from '@/data/pricing'
import { Check, X } from 'lucide-react'

export default function PricingTeaser() {
  const [annual, setAnnual] = useState(false)

  return (
    <section id="pricing" className="section-padding bg-bg-surface/30">
      <div className="container-frame">
        {/* Header */}
        <div className="text-center mb-12">
          <Badge variant="muted" className="mb-4">Pricing</Badge>
          <h2 className="text-section text-text-primary mb-4">
            TRANSPARENT.{' '}
            <span className="gradient-text-brand">PREDICTABLE.</span>
          </h2>
          <p className="text-text-secondary max-w-xl mx-auto mb-8">
            No surprise invoices. No scope creep. Pick a plan, brief your editor, get results.
          </p>

          {/* Billing Toggle */}
          <div className="inline-flex items-center gap-3 bg-bg-elevated border border-white/8 rounded-xl p-1">
            <button
              onClick={() => setAnnual(false)}
              className={`px-5 py-2 rounded-lg text-sm font-semibold transition-all ${
                !annual
                  ? 'bg-brand-primary text-white shadow-[0_0_20px_rgba(91,74,255,0.4)]'
                  : 'text-text-muted hover:text-text-secondary'
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setAnnual(true)}
              className={`px-5 py-2 rounded-lg text-sm font-semibold transition-all flex items-center gap-2 ${
                annual
                  ? 'bg-brand-primary text-white shadow-[0_0_20px_rgba(91,74,255,0.4)]'
                  : 'text-text-muted hover:text-text-secondary'
              }`}
            >
              Annual
              <span className="text-xs bg-brand-accent/20 text-brand-accent border border-brand-accent/30 px-1.5 py-0.5 rounded-md font-mono">
                -17%
              </span>
            </button>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-6">
          {pricingTiers.map((tier) => {
            const price = annual ? tier.price.annual : tier.price.monthly
            const isPopular = tier.badge === 'most-popular'
            const isBestValue = tier.badge === 'best-value'

            return (
              <div
                key={tier.id}
                className={`relative flex flex-col rounded-2xl border p-7 transition-all duration-300 ${
                  isPopular
                    ? 'bg-brand-primary/8 border-brand-primary/50 shadow-[0_0_40px_rgba(91,74,255,0.15)]'
                    : 'bg-bg-elevated border-white/8 hover:border-white/18'
                }`}
              >
                {/* Badge */}
                {tier.badge && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span
                      className={`px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${
                        isPopular
                          ? 'bg-brand-primary text-white shadow-[0_0_20px_rgba(91,74,255,0.5)]'
                          : 'bg-brand-accent text-bg-base'
                      }`}
                    >
                      {isPopular ? 'Most Popular' : 'Best Value'}
                    </span>
                  </div>
                )}

                {/* Tier Name */}
                <div className="mb-5">
                  <h3 className="font-display text-xl tracking-wide text-text-primary mb-1">
                    {tier.name.toUpperCase()}
                  </h3>
                  <p className="text-text-muted text-sm">{tier.description}</p>
                </div>

                {/* Price */}
                <div className="mb-6 pb-6 border-b border-white/8">
                  {price !== null ? (
                    <div className="flex items-baseline gap-1">
                      <span className="font-display text-5xl text-text-primary tracking-tight">
                        ${price.toLocaleString()}
                      </span>
                      <span className="text-text-muted text-sm">/mo</span>
                    </div>
                  ) : (
                    <div className="font-display text-4xl text-text-primary">Custom</div>
                  )}
                  {annual && price && (
                    <p className="text-brand-success text-xs mt-1 font-semibold">
                      Saves ${((tier.price.monthly! - price) * 12).toLocaleString()}/yr
                    </p>
                  )}
                </div>

                {/* Features */}
                <ul className="flex flex-col gap-2.5 mb-8 flex-1">
                  {tier.features.map((f) => (
                    <li key={f.label} className="flex items-start gap-2.5 text-sm">
                      {f.included ? (
                        <Check size={15} className="text-brand-success mt-0.5 flex-shrink-0" />
                      ) : (
                        <X size={15} className="text-text-muted mt-0.5 flex-shrink-0 opacity-40" />
                      )}
                      <span className={f.included ? 'text-text-secondary' : 'text-text-muted opacity-50'}>
                        {f.label}
                        {f.note && (
                          <span className="text-text-muted ml-1">({f.note})</span>
                        )}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <Link
                  href={tier.cta.href}
                  className={`w-full py-3 rounded-xl text-sm font-semibold text-center transition-all duration-200 active:scale-95 ${
                    isPopular
                      ? 'bg-brand-primary text-white hover:bg-[#4a3aee] shadow-[0_0_25px_rgba(91,74,255,0.4)]'
                      : 'bg-white/8 text-text-primary border border-white/12 hover:bg-white/12 hover:border-white/22'
                  }`}
                >
                  {tier.cta.label}
                </Link>
              </div>
            )
          })}
        </div>

        {/* Enterprise Row */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 rounded-2xl bg-bg-elevated border border-white/8 px-8 py-5">
          <div>
            <h3 className="font-semibold text-text-primary mb-0.5">{enterpriseTier.name}</h3>
            <p className="text-text-muted text-sm">{enterpriseTier.description}</p>
          </div>
          <Link
            href={enterpriseTier.cta.href}
            className="shrink-0 px-6 py-2.5 rounded-xl text-sm font-semibold border border-white/15 text-text-primary hover:border-white/30 hover:bg-white/5 transition-all"
          >
            {enterpriseTier.cta.label}
          </Link>
        </div>
      </div>
    </section>
  )
}
