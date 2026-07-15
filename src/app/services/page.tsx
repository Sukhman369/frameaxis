import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import Badge from '@/components/ui/Badge'
import Button from '@/components/ui/Button'
import SpotlightCard from '@/components/ui/SpotlightCard'
import { 
  Youtube, 
  Smartphone, 
  Target, 
  Film, 
  Monitor, 
  Mic, 
  Check, 
  Send, 
  Sliders, 
  Sparkles, 
  Share2 
} from 'lucide-react'

const services = [
  {
    id: 'youtube',
    icon: Youtube,
    title: 'YouTube & Long-Form Editing',
    description: 'Hook viewers, increase duration metrics, and boost average percentage viewed. Optimized pacing and modern assets.',
    includes: [
      'Retention-flow sequencing',
      'Sound design & background syncing',
      'Animated text and chapters layout',
      'Color correction & level grading',
      'Thumbnail visual mockups feedback'
    ],
    idealFor: 'YouTube creators, podcasts, explainers'
  },
  {
    id: 'reels',
    icon: Smartphone,
    title: 'Social Media Reels & Shorts',
    description: 'Fast-paced, highly engaging vertical content built to trend on TikTok, IG Reels, and YouTube Shorts.',
    includes: [
      'Viral-hooks optimization',
      'Kinetic text styles & pop icons',
      'Interactive zoom-cut effects',
      'Trending audio sync',
      'Aspect ratio conversion (9:16)'
    ],
    idealFor: 'Influencers, DTC brands, newsletters'
  },
  {
    id: 'ads',
    icon: Target,
    title: 'Direct-Response Ad Creative',
    description: 'Create multi-variant hooks and UGC sequences to crush creative fatigue and scale ROAS.',
    includes: [
      'UGC structure & compilation edits',
      'Benefit-driven text overlays',
      'Scroll-stopping visual hooks setup',
      'Brand style validation',
      'Batch variations rendering'
    ],
    idealFor: 'Growth agencies, marketing directors'
  },
  {
    id: 'brand',
    icon: Film,
    title: 'Brand Film & Corporate',
    description: 'Cinematic brand outlines, events recaps, and values statements that leave a premium B2B impact.',
    includes: [
      'Professional stock compilation',
      'Chamber music scoring & vocal tune',
      'Custom visual graphics styling',
      '4K final master export',
      'Cutdowns for social shares'
    ],
    idealFor: 'Startups, corporate marketing'
  },
  {
    id: 'explainers',
    icon: Monitor,
    title: 'Product Demo & SaaS Explainers',
    description: 'Beautiful animated screencasts, UI zoom-ins, and demo videos that drive product signups.',
    includes: [
      'Slick browser frame overlays',
      'Micro-animations of dashboard widgets',
      'Voiceover leveling & timing sync',
      'Feature-benefit captions',
      'Interactive click highlights details'
    ],
    idealFor: 'SaaS founders, product teams'
  },
  {
    id: 'podcast',
    icon: Mic,
    title: 'Podcast Production',
    description: 'Turn long-form chat feeds into polished multi-cam videos and easily bite-sized social highlights.',
    includes: [
      'Multi-camera angle sync',
      'Audio denoise & dynamic leveling',
      'Branded intro/outro layouts',
      'Audiogram visualization clips',
      'Show notes formatting export'
    ],
    idealFor: 'B2B companies, podcasters'
  }
]

const processSteps = [
  {
    step: '01',
    title: 'Submit the Brief',
    description: 'Drop files and write requirements in our intake form. Link references and style standards.',
    icon: Send
  },
  {
    step: '02',
    title: 'Editor Assignment',
    description: 'We assign a professional editor trained specifically in your brand voice and style preferences.',
    icon: Sliders
  },
  {
    step: '03',
    title: 'Feedback Loop & Review',
    description: 'Verify video versions and request edits directly. We execute modifications inside 24 hours.',
    icon: Sparkles
  },
  {
    step: '04',
    title: 'Final Delivery',
    description: 'Get your fully edited assets, raw export packages, and thumbnail renders in lossless format.',
    icon: Share2
  }
]

export default function ServicesPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-bg-base pt-32 pb-20">
        
        {/* Page Head */}
        <section className="container-frame text-center mb-16 px-4">
          <Badge variant="brand" className="mb-4">Our Expertise</Badge>
          <h1 className="font-display text-5xl md:text-7xl text-text-primary tracking-wide mb-6">
            WHAT WE <span className="gradient-text-brand">CREATE</span> FOR YOU
          </h1>
          <p className="text-text-secondary max-w-2xl mx-auto text-base md:text-lg">
            High-performance post-production services. We don&apos;t just slice clips; we build retention-oriented edits that scale audience engagement and increase conversion rates.
          </p>
        </section>

        {/* Services Bento Grid */}
        <section className="container-frame px-4 mb-24">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((svc) => {
              const Icon = svc.icon
              return (
                <SpotlightCard
                  key={svc.title}
                  glowColor="rgba(79, 70, 229, 0.05)"
                  className="bg-bg-surface border border-bg-border rounded-3xl p-7 hover:border-brand-primary/20 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    {/* Icon header */}
                    <div className="w-11 h-11 rounded-xl bg-brand-primary/10 border border-brand-primary/20 flex items-center justify-center text-brand-primary mb-6">
                      <Icon size={20} />
                    </div>

                    <h3 className="font-display text-2xl tracking-wide text-text-primary mb-2">
                      {svc.title}
                    </h3>
                    <p className="text-sm text-text-secondary leading-relaxed mb-6">
                      {svc.description}
                    </p>

                    {/* Includes checkboxes list */}
                    <h4 className="text-xs uppercase font-bold tracking-wider text-text-primary mb-3">
                      What is included:
                    </h4>
                    <ul className="flex flex-col gap-2.5 mb-6">
                      {svc.includes.map((incl) => (
                        <li key={incl} className="flex items-start gap-2 text-xs">
                          <Check size={14} className="text-brand-success shrink-0 mt-0.5" />
                          <span className="text-text-muted">{incl}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Footer metadata */}
                  <div className="border-t border-bg-border pt-4 mt-4">
                    <p className="text-xs text-text-muted">
                      <span className="font-semibold text-text-primary">Ideal for:</span> {svc.idealFor}
                    </p>
                  </div>
                </SpotlightCard>
              )
            })}
          </div>
        </section>

        {/* Dynamic Workflow Process Sequence */}
        <section className="bg-bg-surface/30 border-y border-bg-border py-20">
          <div className="container-frame px-4">
            
            {/* Header */}
            <div className="text-center max-w-2xl mx-auto mb-16">
              <Badge variant="muted" className="mb-4">Work Process</Badge>
              <h2 className="font-display text-4xl md:text-5xl text-text-primary tracking-wide mb-4">
                HOW WE <span className="gradient-text-accent">WORK</span> STEP-BY-STEP
              </h2>
              <p className="text-text-secondary text-sm md:text-base">
                Smooth systems, high output. Our simple project flow guarantees files never get lost, changes are fast, and results remain consistently top-tier.
              </p>
            </div>

            {/* Steps Timeline Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
              
              {/* Connecting Lines for Desktop */}
              <div 
                className="absolute top-1/2 left-3 translate-y-[-14px] right-3 h-0.5 bg-bg-border hidden lg:block z-0" 
                aria-hidden="true" 
              />

              {processSteps.map((step) => {
                const StepIcon = step.icon
                return (
                  <div 
                    key={step.step}
                    className="relative bg-bg-surface border border-bg-border rounded-2xl p-6 shadow-sm z-10 flex flex-col items-center text-center hover:shadow-md transition-shadow duration-300"
                  >
                    {/* Circle badge */}
                    <div className="w-12 h-12 rounded-full border border-bg-border bg-bg-base flex items-center justify-center text-brand-primary font-mono font-bold text-sm tracking-tighter mb-4 shadow-inner relative">
                      <span className="absolute -top-1 -right-1 bg-brand-primary text-white text-[8px] px-1 py-0.5 rounded-full leading-none">
                        {step.step}
                      </span>
                      <StepIcon size={18} />
                    </div>

                    <h3 className="font-semibold text-text-primary mb-2 text-base leading-tight">
                      {step.title}
                    </h3>
                    <p className="text-xs text-text-muted leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                )
              })}
            </div>

            {/* Bottom contact push */}
            <div className="text-center mt-14">
              <Button href="/contact" variant="primary" size="md">
                Start our first brief &rarr;
              </Button>
            </div>
            
          </div>
        </section>

      </main>
      <Footer />
    </>
  )
}
