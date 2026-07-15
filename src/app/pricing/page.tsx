'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import Badge from '@/components/ui/Badge'
import Button from '@/components/ui/Button'
import { pricingTiers, enterpriseTier } from '@/data/pricing'
import { Check, X, ChevronDown, HelpCircle, Star } from 'lucide-react'

const faqs = [
  {
    question: 'How does the "unlimited requests" queue work?',
    answer: 'With our Studio plan, you can add as many video requests as you want to your queue. We will work through them one by one. Once a video is final and approved, we start on the very next video in your queue, delivering drafts every business day.'
  },
  {
    question: 'Is there really a 48-hour delivery turnaround?',
    answer: 'Yes! For our Growth and Studio tiers, average drafts are delivered in 48 hours or less. Complex edits (like heavy 3D motion graphics or long documentaries) might take longer, but we will outline the timeline on your queue dashboard.'
  },
  {
    question: 'What does "unlimited revisions" include?',
    answer: 'We edit until the video is exactly how you want it. Revision requests can encompass text script changes, styling adjustments, audio swaps, pacing speed-ups, or minor media insertions. We want you to be 100% satisfied.'
  },
  {
    question: 'How do I transfer large raw video files to my editor?',
    answer: 'We set up a shared Google Drive, Dropbox, or Frame.io workspace during onboarding. You drag and drop raw files, reference assets, and custom instructions, and we pull them instantly.'
  },
  {
    question: 'Can I pause or cancel my subscription at any time?',
    answer: 'Absolutely. We operate on month-to-month contracts. If you compile your edits and do not need extra videos next month, you can pause or cancel your subscription instantly with a single button click in your billing dashboard.'
  },
  {
    question: 'Do you provide voiceovers and copywriting?',
    answer: 'We assist with visual script optimization, subtitle scripts, and AI voiceover sync. However, if you require specialized professional voice acting or custom copy, we advise submitting your own recorded vocal tracks.'
  },
  {
    question: 'Are there any hidden fees or hosting charges?',
    answer: 'No. The subscription pricing is fully transparent and covers editing, sound design, color correction, basic graphic packages, and delivery. There are no rendering charges or file-transfer fees.'
  }
]

export default function PricingPage() {
  const [annual, setAnnual] = useState(false)
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index)
  }

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-bg-base pt-32 pb-20">
        
        {/* Page Head */}
        <section className="container-frame text-center mb-12 px-4">
          <Badge variant="brand" className="mb-4">Flexible Subscriptions</Badge>
          <h1 className="font-display text-5xl md:text-7xl text-text-primary tracking-wide mb-6">
            TRANSPARENT <span className="gradient-text-brand">PRICING.</span>
          </h1>
          <p className="text-text-secondary max-w-2xl mx-auto text-base md:text-lg">
            No surprise invoices. No scope creep. Hire an entire expert post-production team for a predictable monthly fee. Pause or cancel anytime.
          </p>

          {/* Billing Toggle Selector */}
          <div className="inline-flex items-center gap-3 bg-[#e2e8f0] border border-bg-border rounded-xl p-1 mt-10">
            <button
              onClick={() => setAnnual(false)}
              className={`px-5 py-2.5 rounded-lg text-sm font-semibold transition-all duration-300 ${
                !annual
                  ? 'bg-brand-primary text-white shadow-[0_5px_15px_rgba(79,70,229,0.3)]'
                  : 'text-text-secondary hover:text-text-primary'
              }`}
            >
              Monthly billing
            </button>
            <button
              onClick={() => setAnnual(true)}
              className={`px-5 py-2.5 rounded-lg text-sm font-semibold transition-all duration-300 flex items-center gap-2 ${
                annual
                  ? 'bg-brand-primary text-white shadow-[0_5px_15px_rgba(79,70,229,0.3)]'
                  : 'text-text-secondary hover:text-text-primary'
              }`}
            >
              Annual billing
              <span className="text-[10px] bg-brand-accent/25 text-brand-accent border border-brand-accent/20 px-1.5 py-0.5 rounded font-mono font-bold">
                -17% SAVE
              </span>
            </button>
          </div>
        </section>

        {/* Pricing Cards Grid */}
        <section className="container-frame px-4 mb-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            {pricingTiers.map((tier) => {
              const price = (annual ? tier.price.annual : tier.price.monthly) as number
              const isPopular = tier.badge === 'most-popular'
              const isAccent = tier.badge === 'best-value'

              return (
                <div
                  key={tier.id}
                  className={`relative flex flex-col rounded-3xl border p-8 transition-all duration-500 hover:shadow-xl ${
                    isPopular
                      ? 'bg-brand-primary/5 border-brand-primary/45 shadow-[0_15px_40px_rgba(79,70,229,0.08)] scale-[1.01]'
                      : isAccent
                      ? 'bg-brand-accent/5 border-brand-accent/35 shadow-sm'
                      : 'bg-bg-surface border-bg-border shadow-sm'
                  }`}
                >
                  {/* Floating Badge */}
                  {tier.badge && (
                    <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                      <span
                        className={`px-4 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest flex items-center gap-1 shadow-md border ${
                          isPopular
                            ? 'bg-brand-primary text-white border-brand-primary/20'
                            : 'bg-brand-accent text-white border-brand-accent/20'
                        }`}
                      >
                        <Star size={10} fill="currentColor" />
                        {isPopular ? 'Most Popular' : 'Best Value'}
                      </span>
                    </div>
                  )}

                  {/* Header info */}
                  <div className="mb-6">
                    <h3 className="font-display text-2xl tracking-wide text-text-primary mb-1.5">
                      {tier.name.toUpperCase()}
                    </h3>
                    <p className="text-text-muted text-xs leading-relaxed">{tier.description}</p>
                  </div>

                  {/* Price info */}
                  <div className="mb-6 pb-6 border-b border-bg-border">
                    <div className="flex items-baseline gap-1">
                      <span className="font-display text-5xl text-text-primary tracking-tight">
                        ${price.toLocaleString()}
                      </span>
                      <span className="text-text-muted text-sm">/month</span>
                    </div>
                    {annual && (
                      <p className="text-brand-success text-xs font-semibold mt-1">
                        Save ${((tier.price.monthly! - price) * 12).toLocaleString()} billed annually
                      </p>
                    )}
                  </div>

                  {/* Features list */}
                  <ul className="flex flex-col gap-3.5 mb-8 flex-1">
                    {tier.features.map((feat) => (
                      <li key={feat.label} className="flex items-start gap-2.5 text-xs">
                        {feat.included ? (
                          <Check size={14} className="text-brand-success mt-0.5 shrink-0" />
                        ) : (
                          <X size={14} className="text-text-muted mt-0.5 shrink-0 opacity-40" />
                        )}
                        <span className={feat.included ? 'text-text-secondary font-medium' : 'text-text-muted opacity-40 font-normal line-through'}>
                          {feat.label}
                          {feat.note && (
                            <span className="text-text-muted font-normal block mt-0.5 ml-0 text-[10px] italic">({feat.note})</span>
                          )}
                        </span>
                      </li>
                    ))}
                  </ul>

                  {/* Button Action */}
                  <Button 
                    href={tier.cta.href} 
                    variant={isPopular ? 'primary' : isAccent ? 'accent' : 'secondary'} 
                    size="md" 
                    className="w-full justify-center"
                  >
                    {tier.cta.label}
                  </Button>
                </div>
              )
            })}
          </div>

          {/* Custom Enterprise Banner */}
          <div className="bg-bg-surface border border-bg-border rounded-3xl p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm">
            <div>
              <h3 className="text-lg font-bold text-text-primary mb-1">{enterpriseTier.name} Subscription</h3>
              <p className="text-text-secondary text-sm leading-relaxed max-w-xl">
                {enterpriseTier.description} We construct dedicated workflows, offer localized servers, and construct private Slack/Teams arrays.
              </p>
            </div>
            <Button href={enterpriseTier.cta.href} variant="secondary" size="md" className="shrink-0">
              {enterpriseTier.cta.label} &rarr;
            </Button>
          </div>
        </section>

        {/* Accordion FAQ Area */}
        <section className="container-frame px-4 py-16 max-w-4xl">
          <div className="text-center mb-12">
            <Badge variant="muted" className="mb-4">Got Questions?</Badge>
            <h2 className="font-display text-4xl text-text-primary tracking-wide">
              FREQUENTLY ASKED <span className="gradient-text-brand">QUESTIONS</span>
            </h2>
          </div>

          <div className="flex flex-col gap-3">
            {faqs.map((faq, index) => {
              const isOpen = openFaq === index
              return (
                <div 
                  key={index} 
                  className="bg-bg-surface border border-bg-border rounded-2xl overflow-hidden shadow-sm transition-all"
                >
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full px-6 py-4 flex items-center justify-between text-left font-medium text-sm md:text-base text-text-primary hover:text-brand-primary transition-colors group"
                  >
                    <span className="flex items-center gap-3">
                      <HelpCircle size={16} className="text-brand-primary shrink-0 opacity-70" />
                      {faq.question}
                    </span>
                    <ChevronDown 
                      size={18} 
                      className={`text-text-muted group-hover:text-brand-primary transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} 
                    />
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25, ease: 'easeInOut' }}
                      >
                        <div className="px-6 pb-5 pt-1 text-xs md:text-sm text-text-secondary leading-relaxed border-t border-bg-border bg-bg-base/30">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              )
            })}
          </div>
        </section>

      </main>
      <Footer />
    </>
  )
}
