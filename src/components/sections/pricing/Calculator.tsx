'use client'

import { useState, useMemo } from 'react'
import SpotlightCard from '@/components/ui/SpotlightCard'
import Badge from '@/components/ui/Badge'
import Button from '@/components/ui/Button'
import { Sparkles, Zap, ShieldAlert, ArrowRight, DollarSign, Hourglass } from 'lucide-react'

export default function Calculator() {
  const [longFormCount, setLongFormCount] = useState(4)
  const [shortFormCount, setShortFormCount] = useState(10)
  const [speed, setSpeed] = useState<'standard' | 'express'>('standard')

  // Calculate equivalent per-video market rates:
  const mathData = useMemo(() => {
    const longUnit = speed === 'express' ? 180 : 120
    const shortUnit = speed === 'express' ? 65 : 45

    const estimatedPerVideoCost = (longFormCount * longUnit) + (shortFormCount * shortUnit)
    
    // Choose matching plan recommendation & subscription fee
    let recommendedPlan = 'Creator'
    let subscriptionCost = 799
    let planId = 'creator'
    let saving = 0

    if (estimatedPerVideoCost === 0) {
      return {
        estimatedPerVideoCost: 0,
        recommendedPlan: 'None Select',
        subscriptionCost: 0,
        planId: 'none',
        saving: 0
      }
    }

    if (estimatedPerVideoCost <= 1200) {
      recommendedPlan = 'Creator Plan'
      subscriptionCost = 799
      planId = 'creator'
    } else if (estimatedPerVideoCost > 1200 && estimatedPerVideoCost <= 3200) {
      recommendedPlan = 'Growth Plan'
      subscriptionCost = 1999
      planId = 'growth'
    } else if (estimatedPerVideoCost > 3200 && estimatedPerVideoCost <= 6000) {
      recommendedPlan = 'Studio Plan'
      subscriptionCost = 4499
      planId = 'studio'
    } else {
      recommendedPlan = 'Enterprise Custom'
      subscriptionCost = -1 // Custom quote
      planId = 'enterprise'
    }

    if (subscriptionCost > 0) {
      saving = Math.max(0, estimatedPerVideoCost - subscriptionCost)
    }

    return {
      estimatedPerVideoCost,
      recommendedPlan,
      subscriptionCost,
      planId,
      saving
    }
  }, [longFormCount, shortFormCount, speed])

  return (
    <SpotlightCard
      glowColor="rgba(217, 70, 239, 0.06)"
      className="bg-bg-surface border border-bg-border rounded-3xl p-6 md:p-8 shadow-md max-w-4xl mx-auto"
    >
      <div className="text-center mb-8 border-b border-bg-border pb-6">
        <Badge variant="brand" className="mb-2 shrink-0">
          <Sparkles size={11} className="inline mr-1" /> Custom Estimator
        </Badge>
        <h3 className="font-display text-2xl md:text-3xl text-text-primary tracking-wide">
          CALCULATE YOUR SUBSCRIPTION SAVINGS
        </h3>
        <p className="text-xs text-text-muted mt-1 leading-relaxed max-w-xl mx-auto">
          Drag the sliders to project your editing volume and compare typical freelancer rates with our flat subscription plans.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start">
        
        {/* Left Side: Controls Sliders */}
        <div className="lg:col-span-3 space-y-6">
          
          {/* Long Form Slider */}
          <div className="flex flex-col gap-2.5">
            <div className="flex justify-between items-baseline">
              <label htmlFor="long-form-range" className="text-sm font-semibold text-text-primary">
                Long-Form & YouTube Videos
              </label>
              <span className="font-mono text-base font-bold text-brand-primary">
                {longFormCount} <span className="text-xs text-text-muted font-normal">/month</span>
              </span>
            </div>
            <input
              type="range"
              id="long-form-range"
              min="0"
              max="15"
              step="1"
              value={longFormCount}
              onChange={(e) => setLongFormCount(parseInt(e.target.value))}
              className="w-full h-2 bg-[#e2e8f0] rounded-lg appearance-none cursor-pointer accent-brand-primary"
            />
            <div className="flex justify-between text-[10px] text-text-muted font-mono">
              <span>0</span>
              <span>5</span>
              <span>10</span>
              <span>15 (Weekly count standard)</span>
            </div>
          </div>

          {/* Short Form Slider */}
          <div className="flex flex-col gap-2.5">
            <div className="flex justify-between items-baseline">
              <label htmlFor="short-form-range" className="text-sm font-semibold text-text-primary">
                Shorts, Reels & TikToks
              </label>
              <span className="font-mono text-base font-bold text-brand-accent">
                {shortFormCount} <span className="text-xs text-text-muted font-normal">/month</span>
              </span>
            </div>
            <input
              type="range"
              id="short-form-range"
              min="0"
              max="40"
              step="2"
              value={shortFormCount}
              onChange={(e) => setShortFormCount(parseInt(e.target.value))}
              className="w-full h-2 bg-[#e2e8f0] rounded-lg appearance-none cursor-pointer accent-brand-accent"
            />
            <div className="flex justify-between text-[10px] text-text-muted font-mono">
              <span>0</span>
              <span>10</span>
              <span>20</span>
              <span>30</span>
              <span>40</span>
            </div>
          </div>

          {/* Speed Toggle */}
          <div className="bg-bg-base/50 border border-bg-border rounded-2xl p-4 flex flex-col sm:flex-row items-center justify-between gap-3">
            <div>
              <p className="text-xs font-bold text-text-primary uppercase tracking-wider flex items-center gap-1.5">
                <Hourglass size={12} className="text-brand-accent animate-[spin_12s_linear_infinite]" />
                Turnaround Speed
              </p>
              <p className="text-[11px] text-text-muted mt-0.5 leading-relaxed">
                Standard gives 48-72h. Express guarantees 24-hour draft turnarounds.
              </p>
            </div>

            <div className="flex bg-[#e2e8f0] border border-bg-border p-1 rounded-xl shrink-0">
              <button
                type="button"
                onClick={() => setSpeed('standard')}
                className={`px-4 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                  speed === 'standard'
                    ? 'bg-white text-text-primary shadow-sm'
                    : 'text-text-secondary hover:text-text-primary'
                }`}
              >
                Standard
              </button>
              <button
                type="button"
                onClick={() => setSpeed('express')}
                className={`px-4 py-1.5 rounded-lg text-xs font-semibold transition-all flex items-center gap-1 ${
                  speed === 'express'
                    ? 'bg-brand-primary text-white shadow-sm'
                    : 'text-text-secondary hover:text-text-primary'
                }`}
              >
                <Zap size={10} fill="currentColor" /> Express
              </button>
            </div>
          </div>
          
        </div>

        {/* Right Side: Projections Output Result View */}
        <div className="lg:col-span-2 bg-gradient-to-br from-brand-primary/5 to-brand-accent/5 border border-brand-primary/10 rounded-2xl p-6 flex flex-col justify-between h-full">
          
          <div className="space-y-5">
            <div>
              <span className="text-[10px] uppercase font-bold tracking-wider text-text-secondary block mb-1">
                Typical Freelancer Rate
              </span>
              <p className="font-mono text-2xl font-semibold text-text-muted line-through flex items-center">
                <DollarSign size={18} />
                {mathData.estimatedPerVideoCost.toLocaleString()}
                <span className="text-xs font-normal text-text-muted mt-1.5 ml-1">/mo value</span>
              </p>
            </div>

            <div className="border-t border-bg-border pt-4">
              <span className="text-[10px] uppercase font-bold tracking-wider text-brand-primary block mb-1">
                Recommended Subscription
              </span>
              <h4 className="font-display text-2xl text-text-primary tracking-wide">
                {mathData.recommendedPlan.toUpperCase()}
              </h4>
              <p className="font-mono text-3xl font-extrabold text-brand-primary mt-1">
                {mathData.subscriptionCost > 0 
                  ? `$${mathData.subscriptionCost.toLocaleString()}/mo` 
                  : 'Let\'s Talks Price'}
              </p>
            </div>

            {/* Savings Indicator */}
            {mathData.saving > 0 && (
              <div className="bg-brand-success/10 border border-brand-success/20 rounded-xl p-3">
                <p className="text-[10px] font-bold text-brand-success uppercase tracking-wider">
                  🎉 Monthly Savings
                </p>
                <p className="font-mono text-xl font-bold text-brand-success mt-0.5">
                  +${mathData.saving.toLocaleString()} Saved /mo
                </p>
              </div>
            )}
            
          </div>

          <div className="mt-8 border-t border-bg-border pt-4">
            <Button 
              href={mathData.planId === 'enterprise' ? '/contact' : `/contact?plan=${mathData.planId}`}
              variant="primary" 
              size="sm" 
              className="w-full justify-center text-xs"
            >
              Get Started with matching plan &nbsp;&rarr;
            </Button>
          </div>
          
        </div>

      </div>
    </SpotlightCard>
  )
}
