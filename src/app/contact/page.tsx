'use client'

import { useState, useEffect, type FormEvent, Suspense } from 'react'
import { useSearchParams } from 'next/navigation'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import Badge from '@/components/ui/Badge'
import Button from '@/components/ui/Button'
import SpotlightCard from '@/components/ui/SpotlightCard'
import { Mail, Clock, ShieldCheck, Send, Check } from 'lucide-react'

function ContactPageContent() {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    serviceType: 'youtube',
    projectDetails: ''
  })
  
  const [loading, setLoading] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [errorMsg, setErrorMsg] = useState('')

  const searchParams = useSearchParams()

  useEffect(() => {
    const plan = searchParams.get('plan')
    const long = searchParams.get('long')
    const short = searchParams.get('short')
    const speed = searchParams.get('speed')

    if (plan || long || short || speed) {
      let mappedService = 'custom'
      if (plan === 'creator') mappedService = 'youtube'
      else if (plan === 'growth') mappedService = 'reels'
      else if (plan === 'studio') mappedService = 'brand'

      const capitalizedPlan = plan ? plan.charAt(0).toUpperCase() + plan.slice(1) : 'Custom'
      const speedLabel = speed === 'express' ? 'Express (24h turnarounds)' : 'Standard (48-72h)'
      
      const prefillDetails = `[Pricing Estimate Brief: ${capitalizedPlan} Plan]
- Long-Form Volume: ${long ?? 0} videos/mo
- Short-Form Volume: ${short ?? 0} videos/mo
- Turnaround Speed: ${speedLabel}

Let's discuss my specific formatting cues and editing retainers...`

      setFormData(prev => ({
        ...prev,
        serviceType: mappedService,
        projectDetails: prefillDetails
      }))
    }
  }, [searchParams])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    setErrorMsg('')

    if (!formData.name.trim() || !formData.email.trim() || !formData.projectDetails.trim()) {
      setErrorMsg('Please populate all required fields (Name, Email, and Project Description).')
      return
    }

    setLoading(true)

    // Mock API trigger
    setTimeout(() => {
      setLoading(false)
      setSubmitted(true)
      setFormData({
        name: '',
        company: '',
        email: '',
        serviceType: 'youtube',
        projectDetails: ''
      })
    }, 1200)
  }

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-bg-base pt-32 pb-20">
        <div className="container-frame px-4 max-w-5xl">
          
          {/* Page Head */}
          <div className="text-center mb-14">
            <Badge variant="brand" className="mb-4">Start a Project</Badge>
            <h1 className="font-display text-5xl md:text-7xl text-text-primary tracking-wide">
              LET&apos;S BOOK A <span className="gradient-text-brand">CALL.</span>
            </h1>
            <p className="text-text-secondary max-w-xl mx-auto mt-4 text-xs md:text-sm">
              Brief us on your editing volume. We promise to review details and write back inside one business day.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
            
            {/* Left sidebar: Info badging */}
            <div className="lg:col-span-2 space-y-6">
              
              {/* Response Badge */}
              <div className="bg-bg-surface border border-bg-border rounded-2xl p-6 shadow-sm flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-brand-primary/10 border border-brand-primary/20 flex items-center justify-center text-brand-primary shrink-0">
                  <Clock size={18} />
                </div>
                <div>
                  <h3 className="font-bold text-text-primary text-sm mb-1">Fast Response Promise</h3>
                  <p className="text-xs text-text-muted leading-relaxed">
                    {"We review custom project requests and follow up with tailored estimates in under 4 business hours."}
                  </p>
                </div>
              </div>

              {/* Direct email card */}
              <div className="bg-bg-surface border border-bg-border rounded-2xl p-6 shadow-sm flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-brand-accent/10 border border-brand-accent/20 flex items-center justify-center text-brand-accent shrink-0">
                  <Mail size={18} />
                </div>
                <div>
                  <h3 className="font-bold text-text-primary text-sm mb-1">Direct Outreach</h3>
                  <p className="text-xs text-text-muted leading-relaxed">
                    Prefer direct email? Reach out straight to:
                  </p>
                  <a href="mailto:hello@frameaxis.com" className="text-brand-primary text-xs font-semibold hover:underline block mt-1.5 font-mono">
                    hello@frameaxis.com
                  </a>
                </div>
              </div>

              {/* NDA Promise badge */}
              <div className="bg-bg-surface border border-bg-border rounded-2xl p-6 shadow-sm flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-brand-success/10 border border-brand-success/20 flex items-center justify-center text-brand-success shrink-0">
                  <ShieldCheck size={18} />
                </div>
                <div>
                  <h3 className="font-bold text-text-primary text-sm mb-1">Standard NDA Coverage</h3>
                  <p className="text-xs text-text-muted leading-relaxed">
                    All conceptual ideas, shared scripts, raw materials, or products are 100% private from minute one.
                  </p>
                </div>
              </div>
            </div>

            {/* Right form submission element */}
            <div className="lg:col-span-3">
              <SpotlightCard glowColor="rgba(217, 70, 239, 0.05)" className="bg-bg-surface border border-bg-border rounded-3xl p-8 shadow-sm">
                
                {submitted ? (
                  // Success layout toast/box
                  <div className="text-center py-10 flex flex-col items-center justify-center">
                    <div className="w-14 h-14 rounded-full bg-brand-success/10 border border-brand-success/25 flex items-center justify-center text-brand-success mb-6 animate-[pulse-glow_2.5s_infinite]">
                      <Check size={28} className="stroke-[3]" />
                    </div>
                    <h3 className="font-display text-3xl text-text-primary tracking-wide mb-3">
                      BRIEF RECEIVED!
                    </h3>
                    <p className="text-sm text-text-secondary leading-relaxed max-w-sm mx-auto mb-8">
                      We have logged your project information. Our team is already drafting an editing schedule. We will reach out to you via your email in under 4 hours.
                    </p>
                    <Button onClick={() => setSubmitted(false)} variant="secondary" size="md">
                      Submit another query
                    </Button>
                  </div>
                ) : (
                  // Form UI
                  <form onSubmit={handleSubmit} className="space-y-5">
                    
                    {/* Error block */}
                    {errorMsg && (
                      <div className="p-3 text-xs bg-red-500/10 border border-red-500/20 text-red-500 rounded-xl font-medium">
                        {errorMsg}
                      </div>
                    )}

                    {/* Twin inputs row */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      <div className="flex flex-col gap-1.5">
                        <label htmlFor="name-input" className="text-xs font-bold text-text-primary uppercase tracking-wider">
                          Your Name <span className="text-brand-accent">*</span>
                        </label>
                        <input
                          type="text"
                          id="name-input"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          placeholder="Sukhman Singh"
                          className="bg-bg-base/40 border border-bg-border focus:border-brand-primary focus:bg-bg-surface focus:ring-1 focus:ring-brand-primary outline-none transition-all rounded-xl px-4 py-3 text-sm text-text-primary placeholder:text-text-muted"
                          required
                        />
                      </div>
                      <div className="flex flex-col gap-1.5">
                        <label htmlFor="email-input" className="text-xs font-bold text-text-primary uppercase tracking-wider">
                          Email Address <span className="text-brand-accent">*</span>
                        </label>
                        <input
                          type="email"
                          id="email-input"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="sukhman@example.com"
                          className="bg-bg-base/40 border border-bg-border focus:border-brand-primary focus:bg-bg-surface focus:ring-1 focus:ring-brand-primary outline-none transition-all rounded-xl px-4 py-3 text-sm text-text-primary placeholder:text-text-muted"
                          required
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      <div className="flex flex-col gap-1.5">
                        <label htmlFor="company-input" className="text-xs font-bold text-text-primary uppercase tracking-wider">
                          Company / Brand
                        </label>
                        <input
                          type="text"
                          id="company-input"
                          name="company"
                          value={formData.company}
                          onChange={handleInputChange}
                          placeholder="Scale Video Inc."
                          className="bg-bg-base/40 border border-bg-border focus:border-brand-primary focus:bg-bg-surface focus:ring-1 focus:ring-brand-primary outline-none transition-all rounded-xl px-4 py-3 text-sm text-text-primary placeholder:text-text-muted"
                        />
                      </div>
                      <div className="flex flex-col gap-1.5">
                        <label htmlFor="service-select" className="text-xs font-bold text-text-primary uppercase tracking-wider">
                          Primary Service Needs
                        </label>
                        <select
                          id="service-select"
                          name="serviceType"
                          value={formData.serviceType}
                          onChange={handleInputChange}
                          className="bg-bg-base/40 border border-bg-border focus:border-brand-primary focus:bg-bg-surface focus:ring-1 focus:ring-brand-primary outline-none transition-all rounded-xl px-4 py-3 text-sm text-text-primary"
                        >
                          <option value="youtube">YouTube & Long-Form</option>
                          <option value="reels">Shorts & Reels (Vertical)</option>
                          <option value="ads">Performance Ad Creatives</option>
                          <option value="brand">Brand Videos & Corporate</option>
                          <option value="explainers">Product Demo / SaaS</option>
                          <option value="podcast">Podcast Multi-Camera</option>
                          <option value="custom">Custom Retainer Project</option>
                        </select>
                      </div>
                    </div>

                    {/* Project text area */}
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="description-input" className="text-xs font-bold text-text-primary uppercase tracking-wider">
                        Project Description / Volume <span className="text-brand-accent">*</span>
                      </label>
                      <textarea
                        id="description-input"
                        name="projectDetails"
                        rows={5}
                        value={formData.projectDetails}
                        onChange={handleInputChange}
                        placeholder="Tell us about your raw timeline sizes, preferred style cues, weekly counts, or other requirements..."
                        className="bg-bg-base/40 border border-bg-border focus:border-brand-primary focus:bg-bg-surface focus:ring-1 focus:ring-brand-primary outline-none transition-all rounded-xl px-4 py-3 text-sm text-text-primary placeholder:text-text-muted resize-y min-h-[120px]"
                        required
                      />
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl bg-brand-primary text-white font-semibold text-sm hover:bg-[#4a3aee] shadow-[0_5px_15px_rgba(79,70,229,0.25)] transition-all duration-200 cursor-pointer active:scale-[0.98] disabled:opacity-75 disabled:cursor-not-allowed"
                    >
                      {loading ? (
                        <>Parsing brief details...</>
                      ) : (
                        <>
                          Submit Project Brief 
                          <Send size={15} />
                        </>
                      )}
                    </button>
                    
                  </form>
                )}
              </SpotlightCard>
            </div>

          </div>

        </div>
      </main>
      <Footer />
    </>
  )
}

export default function ContactPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-bg-base flex items-center justify-center text-text-muted text-sm font-medium">
        Loading project intake briefs...
      </div>
    }>
      <ContactPageContent />
    </Suspense>
  )
}
