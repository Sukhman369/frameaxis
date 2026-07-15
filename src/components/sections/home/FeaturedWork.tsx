'use client'

import { useState } from 'react'
import Link from 'next/link'
import Badge from '@/components/ui/Badge'
import { featuredCaseStudies } from '@/data/case-studies'
import { ArrowUpRight, Play } from 'lucide-react'
import VideoModal from '@/components/ui/VideoModal'

const categoryColors: Record<string, string> = {
  youtube: 'text-[#ef4444] bg-[#ee4444]/5 border-[#ef4444]/15',
  'social-ads': 'text-[#3b82f6] bg-[#3b82f6]/5 border-[#3b82f6]/15',
  saas: 'text-brand-primary bg-brand-primary/5 border-brand-primary/15',
  podcast: 'text-[#a855f7] bg-[#a855f7]/5 border-[#a855f7]/15',
  'brand-film': 'text-[#f59e0b] bg-[#f59e0b]/5 border-[#f59e0b]/15',
  'product-launch': 'text-[#10b981] bg-[#10b981]/5 border-[#10b981]/15',
}

export default function FeaturedWork() {
  const [modalOpen, setModalOpen] = useState(false)
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null)

  const handlePlayVideo = (url: string) => {
    setSelectedVideo(url)
    setModalOpen(true)
  }

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
            <div
              key={cs.slug}
              className="group flex flex-col bg-bg-surface rounded-2xl border border-bg-border overflow-hidden hover:border-brand-primary/20 shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-1"
            >
              {/* Thumbnail Container (Plays video on click) */}
              <div
                onClick={() => cs.heroVideo && handlePlayVideo(cs.heroVideo)}
                className="aspect-video relative overflow-hidden cursor-pointer group/thumb"
                style={{
                  background: `linear-gradient(135deg, ${
                    index === 0
                      ? 'rgba(79,70,229,0.15) 0%, rgba(217,70,239,0.1)'
                      : index === 1
                      ? 'rgba(217,70,239,0.15) 0%, rgba(250,70,70,0.1)'
                      : 'rgba(79,70,229,0.12) 0%, rgba(0,229,255,0.08)'
                  } 100%)`,
                }}
              >
                {/* Play Button Indicator */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-14 h-14 rounded-full bg-white/95 border border-bg-border flex items-center justify-center text-brand-primary shadow-lg group-hover/thumb:scale-110 group-hover/thumb:text-brand-accent transition-all duration-300">
                    <Play size={18} fill="currentColor" className="ml-1" />
                  </div>
                </div>

                {/* Category pill */}
                <div className="absolute top-3 left-3 z-10">
                  <span
                    className={`px-2.5 py-1 rounded-full text-[10px] font-semibold border capitalize ${
                      categoryColors[cs.category] || 'text-[#9090a8] bg-[#f1f4fa] border-bg-border'
                    }`}
                  >
                    {cs.category.replace('-', ' ')}
                  </span>
                </div>

                {/* Hover overlay description */}
                <div className="absolute inset-0 bg-black/30 opacity-0 group-hover/thumb:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="text-white text-xs font-semibold flex items-center gap-1.5">
                    Play Preview Video
                  </span>
                </div>
              </div>

              {/* Card Content (Navigates to case study on click) */}
              <Link
                href={`/work/${cs.slug}`}
                className="flex flex-col flex-1 p-6 cursor-pointer"
              >
                <div className="flex flex-col flex-1">
                  <p className="text-[10px] text-text-muted font-mono uppercase tracking-wider mb-2">
                    {cs.clientAnonymized ? 'Confidential Client' : cs.client}
                  </p>
                  <h3 className="font-semibold text-text-primary text-base mb-3 leading-snug group-hover:text-brand-primary transition-colors">
                    {cs.headline}
                  </h3>
                  <p className="text-text-muted text-[13px] leading-relaxed mb-4 line-clamp-2">
                    {cs.brief}
                  </p>

                  {/* Metrics */}
                  <div className="mt-auto flex flex-wrap gap-2">
                    {cs.metrics.slice(0, 2).map((m) => (
                      <span
                        key={m.label}
                        className="px-2.5 py-1 rounded-lg bg-brand-success/15 border border-brand-success/20 text-brand-success text-[10px] font-bold font-mono"
                      >
                        {m.value} {m.label}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>

      <VideoModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        videoUrl={selectedVideo}
      />
    </section>
  )
}
