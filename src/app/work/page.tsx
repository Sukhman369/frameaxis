'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import Badge from '@/components/ui/Badge'
import SpotlightCard from '@/components/ui/SpotlightCard'
import { caseStudies } from '@/data/case-studies'
import { ArrowRight, Play } from 'lucide-react'

const categories = [
  { value: 'all', label: 'All Projects' },
  { value: 'youtube', label: 'YouTube' },
  { value: 'social-ads', label: 'Social Ads' },
  { value: 'saas', label: 'SaaS' },
  { value: 'podcast', label: 'Podcasts' },
]

export default function WorkPage() {
  const [activeCategory, setActiveCategory] = useState('all')

  const filteredStudies = caseStudies.filter((study) => {
    if (activeCategory === 'all') return true
    return study.category === activeCategory
  })

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-bg-base pt-32 pb-20">
        {/* Page Head */}
        <section className="container-frame text-center mb-16">
          <Badge variant="brand" className="mb-4">
            Agency Portfolio
          </Badge>
          <h1 className="font-display text-5xl md:text-7xl text-text-primary tracking-wide mb-6">
            OUR <span className="gradient-text-brand">FEATURED</span> WORK
          </h1>
          <p className="text-text-secondary max-w-2xl mx-auto text-base md:text-lg">
            Inside look at how we build retention mechanics, design high-converting visual assets, and edit content that scales creators and B2B growth models.
          </p>

          {/* Categories Tab selectors */}
          <div className="flex flex-wrap justify-center gap-2 mt-10 max-w-3xl mx-auto px-4">
            {categories.map((cat) => (
              <button
                key={cat.value}
                onClick={() => setActiveCategory(cat.value)}
                className={`px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300 ${
                  activeCategory === cat.value
                    ? 'bg-brand-primary text-white shadow-[0_5px_15px_rgba(79,70,229,0.3)] scale-[1.02]'
                    : 'bg-bg-surface text-text-secondary border border-bg-border hover:bg-black/5 hover:text-text-primary'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </section>

        {/* Grid portfolio */}
        <section className="container-frame px-4">
          <motion.div 
            layout 
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            <AnimatePresence mode="popLayout">
              {filteredStudies.map((study) => (
                <motion.div
                  key={study.slug}
                  layout
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.35, ease: 'easeOut' }}
                >
                  <SpotlightCard
                    glowColor="rgba(217, 70, 239, 0.06)"
                    className="group bg-bg-surface border border-bg-border rounded-3xl overflow-hidden hover:border-brand-primary/20 shadow-sm hover:shadow-xl transition-all duration-500 h-full flex flex-col"
                  >
                    {/* Media Thumbnail Container */}
                    <div className="relative aspect-video w-full overflow-hidden bg-bg-elevated border-b border-bg-border">
                      {/* Gradient Overlay */}
                      <div className="absolute inset-0 bg-neutral-900/10 group-hover:bg-neutral-900/25 transition-all duration-300 z-10" />
                      
                      {/* Dummy Thumbnail Visual */}
                      <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-brand-primary/5 to-brand-accent/5">
                        <div className="w-16 h-16 rounded-full bg-bg-surface/90 border border-bg-border flex items-center justify-center text-brand-primary shadow-lg group-hover:scale-110 group-hover:text-brand-accent transition-all duration-300 z-20">
                          <Play size={20} fill="currentColor" className="ml-1" />
                        </div>
                        <div className="absolute bottom-4 left-4 z-20 flex gap-2">
                          <span className="text-[10px] uppercase font-mono tracking-wider font-bold bg-bg-surface/85 backdrop-blur-sm border border-bg-border px-2 py-0.5 rounded text-text-primary">
                            {study.category}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Metadata Content */}
                    <div className="p-7 flex flex-col flex-grow">
                      {/* Tag list */}
                      <div className="flex flex-wrap gap-2.5 mb-4">
                        {study.tags.slice(0, 3).map(tag => (
                          <span 
                            key={tag} 
                            className="text-xs font-semibold px-2.5 py-1 bg-black/4 border border-bg-border text-text-secondary rounded-lg"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      {/* Title / Headline */}
                      <h3 className="font-display text-2xl tracking-wide text-text-primary mb-2 group-hover:text-brand-primary transition-colors">
                        {study.clientAnonymized ? `Case Study: ${study.client}` : study.client}
                      </h3>
                      <p className="text-brand-success font-semibold text-lg font-mono mb-4">
                        {study.headline}
                      </p>
                      
                      <p className="text-text-muted text-sm leading-relaxed mb-6 flex-grow">
                        {study.brief}
                      </p>

                      {/* Performance Metric Pill Strip */}
                      <div className="grid grid-cols-3 gap-px bg-bg-border rounded-xl overflow-hidden mb-6 border border-bg-border">
                        {study.metrics.map((metric) => (
                          <div key={metric.label} className="bg-bg-base/40 px-3 py-2 text-center">
                            <span className="block font-mono text-base font-bold text-text-primary">
                              {metric.value}
                            </span>
                            <span className="text-[10px] text-text-muted tracking-wide uppercase font-medium">
                              {metric.label}
                            </span>
                          </div>
                        ))}
                      </div>

                      {/* Case Study Detail Link */}
                      <Link
                        href={`/work/${study.slug}`}
                        className="inline-flex items-center gap-1.5 font-semibold text-sm text-text-primary hover:text-brand-primary w-fit group/btn mt-auto"
                      >
                        Read Case Study 
                        <ArrowRight size={15} className="group-hover/btn:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  </SpotlightCard>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </section>
      </main>
      <Footer />
    </>
  )
}
