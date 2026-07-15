import Link from 'next/link'
import { notFound } from 'next/navigation'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import Badge from '@/components/ui/Badge'
import Button from '@/components/ui/Button'
import SpotlightCard from '@/components/ui/SpotlightCard'
import { caseStudies } from '@/data/case-studies'
import { ArrowLeft, ArrowRight, Check, Settings, Briefcase, CheckCircle } from 'lucide-react'

interface PageProps {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return caseStudies.map((study) => ({
    slug: study.slug,
  }))
}

export default async function CaseStudyDetailPage({ params }: PageProps) {
  const { slug } = await params
  const study = caseStudies.find((cs) => cs.slug === slug)

  if (!study) {
    notFound()
  }

  // Find related studies
  const relatedStudies = caseStudies.filter((cs) => 
    study.relatedSlugs?.includes(cs.slug)
  ).slice(0, 2)

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-bg-base pt-32 pb-20">
        <div className="container-frame px-4">
          
          {/* Breadcrumb Back link */}
          <Link
            href="/work"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-text-secondary hover:text-brand-primary mb-8 transition-colors group"
          >
            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
            Back to Case Studies
          </Link>

          {/* Hero Header */}
          <div className="max-w-4xl mb-12">
            <div className="flex flex-wrap gap-2.5 mb-5">
              <Badge variant="brand" className="uppercase font-mono tracking-wider">
                {study.category}
              </Badge>
              {study.tags.map((tag) => (
                <span key={tag} className="text-xs font-semibold px-2.5 py-1 bg-black/4 border border-bg-border rounded-lg text-text-secondary">
                  {tag}
                </span>
              ))}
            </div>

            <h1 className="font-display text-4xl md:text-6xl text-text-primary mb-6 tracking-wide leading-tight">
              {study.clientAnonymized ? `Case Study: ${study.client}` : study.client}
            </h1>
            <p className="text-brand-success font-display text-2xl md:text-4xl text-left tracking-wide font-mono">
              {study.headline}
            </p>
          </div>

          {/* Metric cards grid */}
          <section className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-14">
            {study.metrics.map((metric) => (
              <div 
                key={metric.label}
                className="bg-bg-surface border border-bg-border rounded-2xl p-6 shadow-sm flex flex-col justify-center"
              >
                <span className="font-mono text-3xl md:text-4xl font-extrabold text-brand-primary mb-1">
                  {metric.value}
                </span>
                <span className="text-xs text-text-secondary font-semibold uppercase tracking-wider">
                  {metric.label}
                </span>
              </div>
            ))}
          </section>

          {/* Main Case Study Splitscreen Details */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 mb-16">
            
            {/* Left detail columns: Brief & Approach */}
            <div className="lg:col-span-2 space-y-10">
              
              {/* Challenge Brief Card */}
              <SpotlightCard glowColor="rgba(79, 70, 229, 0.04)" className="bg-bg-surface border border-bg-border rounded-3xl p-8 shadow-sm">
                <h2 className="font-display text-2xl text-text-primary tracking-wide mb-4 flex items-center gap-2">
                  <Briefcase size={22} className="text-brand-primary" />
                  THE BRIEF
                </h2>
                <div className="text-base text-text-secondary leading-relaxed space-y-4">
                  <p>{study.brief}</p>
                </div>
              </SpotlightCard>

              {/* Approach Action Card */}
              <SpotlightCard glowColor="rgba(217, 70, 239, 0.04)" className="bg-bg-surface border border-bg-border rounded-3xl p-8 shadow-sm">
                <h2 className="font-display text-2xl text-text-primary tracking-wide mb-4 flex items-center gap-2">
                  <Settings size={22} className="text-brand-accent" />
                  OUR APPROACH
                </h2>
                <div className="text-base text-text-secondary leading-relaxed space-y-4">
                  <p>{study.approach}</p>
                </div>
              </SpotlightCard>

              {/* The Outcomes Details */}
              <SpotlightCard glowColor="rgba(16, 185, 129, 0.04)" className="bg-bg-surface border border-bg-border rounded-3xl p-8 shadow-sm">
                <h2 className="font-display text-2xl text-text-primary tracking-wide mb-4 flex items-center gap-2">
                  <CheckCircle size={22} className="text-brand-success" />
                  THE OUTCOME
                </h2>
                <div className="text-base text-text-secondary leading-relaxed">
                  <p>{study.result}</p>
                </div>
              </SpotlightCard>
            </div>

            {/* Right sidebar: Deliverables & Tech stack */}
            <div className="space-y-8">
              
              {/* Deliverables Checklist list */}
              <div className="bg-bg-surface border border-bg-border rounded-3xl p-7 shadow-sm">
                <h3 className="text-text-primary font-bold text-base mb-5 pb-3 border-b border-bg-border">
                  DELIVERABLES
                </h3>
                <ul className="flex flex-col gap-4">
                  {study.deliverables.map((deliv, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-md bg-brand-primary/10 border border-brand-primary/20 flex items-center justify-center shrink-0 mt-0.5 text-brand-primary">
                        <Check size={12} className="stroke-[3]" />
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-text-primary">
                          {deliv.count} &times; {deliv.type}
                        </p>
                        <p className="text-xs text-text-muted font-mono">{deliv.format}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tech Stack list */}
              <div className="bg-bg-surface border border-bg-border rounded-3xl p-7 shadow-sm">
                <h3 className="text-text-primary font-bold text-base mb-4 pb-3 border-b border-bg-border">
                  SOFTWARE & TOOLS
                </h3>
                <div className="flex flex-wrap gap-2">
                  {study.toolsUsed.map((tool) => (
                    <span 
                      key={tool}
                      className="text-xs font-mono font-medium px-3.5 py-1.5 bg-bg-elevated border border-bg-border rounded-lg text-text-secondary"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>

              {/* Discovery CTA widget */}
              <div className="bg-gradient-to-br from-brand-primary to-brand-accent rounded-3xl p-7 text-white shadow-lg relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-xl translate-x-10 -translate-y-10" />
                <h4 className="font-display text-xl tracking-wider mb-2">READY FOR RESULTS?</h4>
                <p className="text-xs text-white/80 leading-relaxed mb-6">
                  Let us transform your raw materials into performance assets. Book your free 15-min call.
                </p>
                <Button href="/contact" variant="accent" size="sm" className="w-full justify-center">
                  Book Free Call
                </Button>
              </div>
            </div>
          </div>

          {/* Related Case Studies Trailer */}
          {relatedStudies.length > 0 && (
            <section className="border-t border-bg-border pt-16">
              <h3 className="font-display text-3xl text-text-primary mb-8 tracking-wide">
                MORE SUCCESS STORIES
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {relatedStudies.map((rel) => (
                  <Link 
                    key={rel.slug}
                    href={`/work/${rel.slug}`}
                    className="group bg-bg-surface border border-bg-border hover:border-brand-primary/20 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300 flex items-center justify-between"
                  >
                    <div>
                      <span className="text-[9px] uppercase font-mono tracking-wider font-bold text-brand-primary px-2 py-0.5 bg-brand-primary/5 rounded border border-brand-primary/10 inline-block mb-2">
                        {rel.category}
                      </span>
                      <h4 className="font-semibold text-text-primary text-base group-hover:text-brand-primary transition-colors">
                        {rel.clientAnonymized ? `Case Study: ${rel.client}` : rel.client}
                      </h4>
                      <p className="text-brand-success text-xs font-mono mt-1 font-semibold">
                        {rel.headline}
                      </p>
                    </div>
                    <div className="w-8 h-8 rounded-full border border-bg-border group-hover:border-brand-primary flex items-center justify-center shrink-0 text-text-secondary group-hover:text-brand-primary group-hover:translate-x-1 transition-all duration-200">
                      <ArrowRight size={14} />
                    </div>
                  </Link>
                ))}
              </div>
            </section>
          )}

        </div>
      </main>
      <Footer />
    </>
  )
}
