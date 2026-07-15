import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import Badge from '@/components/ui/Badge'
import SpotlightCard from '@/components/ui/SpotlightCard'
import { 
  Zap, 
  Award, 
  Users, 
  Target
} from 'lucide-react'

const values = [
  {
    icon: Zap,
    title: 'Speed & Consistency',
    description: 'We treat 48-hour delivery times like law. Speed keeps pipelines loaded, and consistency builds audiences.',
    colorClass: 'text-brand-accent bg-brand-accent/5 border-brand-accent/15'
  },
  {
    icon: Award,
    title: 'Exceptional Quality',
    description: 'No template cutouts. We custom design transitions, optimize color grades, and edit for peak viewer retention.',
    colorClass: 'text-brand-primary bg-brand-primary/5 border-brand-primary/15'
  },
  {
    icon: Users,
    title: 'Tight Partnerships',
    description: 'We behave like your internal editing crew. We chat in your Slack, analyze your data, and adapt to feedback.',
    colorClass: 'text-brand-success bg-brand-success/5 border-brand-success/15 font-mono'
  },
  {
    icon: Target,
    title: 'Direct-Response Impact',
    description: 'We edit for results. Whether that means growing subscribers, driving YouTube impressions, or scaling ad CTR.',
    colorClass: 'text-purple-600 bg-purple-500/5 border-purple-500/15'
  }
]

const stats = [
  { value: '7,500+', label: 'Videos Delivered' },
  { value: '45+', label: 'Country Audiences' },
  { value: '97%', label: 'Retainer Retention' },
  { value: '38 hrs', label: 'Average Delivery' }
]

const tools = [
  { name: 'Adobe Premiere Pro', category: 'NLE Editing' },
  { name: 'After Effects', category: 'Motion Graphics' },
  { name: 'DaVinci Resolve', category: 'Color & Audio' },
  { name: 'Frame.io', category: 'Review Pipeline' },
  { name: 'CapCut Pro', category: 'Short-Form Clips' },
  { name: 'Slack & Notion', category: 'Workflow Arrays' }
]

const team = [
  { 
    name: 'Sukhman Singh',
    role: 'Founder & Chief Director',
    funFact: 'Will critique vertical caption sizes on restaurant menus.',
    initial: 'SS'
  },
  { 
    name: 'Elena Rostova',
    role: 'Lead Motion Designer',
    funFact: 'Keyframes key motion flows in her dreams in 60fps.',
    initial: 'ER'
  },
  { 
    name: 'Marcus K.',
    role: 'Senior Retainer Editor',
    funFact: 'Drinks cold brew by the liter. Ex-documentary cutter.',
    initial: 'MK'
  }
]

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-bg-base pt-32 pb-20">
        
        {/* Page Head */}
        <section className="container-frame px-4 mb-16 text-center">
          <Badge variant="brand" className="mb-4">Our Narrative</Badge>
          <h1 className="font-display text-5xl md:text-7xl text-text-primary tracking-wide mb-6">
            NOT JUST EDITORS.
            <br />
            <span className="gradient-text-brand">YOUR GROWTH PARTNER.</span>
          </h1>
          <p className="text-text-secondary max-w-2xl mx-auto text-base md:text-lg">
            {"We're a team of cinematic storytelling and direct-response media specialists. We build the engine that feeds your distribution channels so you can focus on building your brand."}
          </p>
        </section>

        {/* Narrative Split blocks */}
        <section className="container-frame px-4 mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-stretch">
            
            {/* Story Text Card */}
            <div className="flex flex-col justify-center bg-bg-surface border border-bg-border rounded-3xl p-8 shadow-sm">
              <h2 className="font-display text-3xl text-text-primary tracking-wide mb-4">
                THE FRAMEAXIS STORY
              </h2>
              <div className="text-text-secondary text-sm md:text-base leading-relaxed space-y-4">
                <p>
                  {"FrameAxis was founded to solve a massive bottleneck in the creator and DTC space: the post-production traffic jam. As video content established itself as the #1 sales engine, quality editors who understood formatting algorithms, click metrics, and turnaround schedules were impossible to scale."}
                </p>
                <p>
                  {"We wanted to design a production house that combined Hollywood-level keyframe precision with productized agency reliability. No flaky freelancers. No tracking down links. No surprise invoices."}
                </p>
                <p>
                  {"Today, we support over 150 brands and creators around the globe, rendering millions of views weekly and scaling performance ad sets for leading media buyers."}
                </p>
              </div>
            </div>

            {/* Core Values grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {values.map((val) => {
                const ValIcon = val.icon
                return (
                  <SpotlightCard
                    key={val.title}
                    glowColor="rgba(79, 70, 229, 0.04)"
                    className="bg-bg-surface border border-bg-border rounded-2xl p-6 flex flex-col hover:shadow-md transition-shadow duration-300"
                  >
                    <div className={`w-9 h-9 rounded-lg border flex items-center justify-center mb-4 ${val.colorClass}`}>
                      <ValIcon size={16} />
                    </div>
                    <h3 className="font-semibold text-text-primary text-sm mb-1.5">{val.title}</h3>
                    <p className="text-text-muted text-xs leading-relaxed">{val.description}</p>
                  </SpotlightCard>
                )
              })}
            </div>
            
          </div>
        </section>

        {/* Stats strip wall */}
        <section className="bg-bg-surface border-y border-bg-border py-10 mb-20 shadow-sm">
          <div className="container-frame px-4 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {stats.map((st) => (
              <div key={st.label}>
                <span className="block font-display text-4xl md:text-5xl text-brand-primary tracking-tight">
                  {st.value}
                </span>
                <span className="text-[10px] text-text-muted font-bold uppercase tracking-widest block mt-1">
                  {st.label}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* Team Section */}
        <section className="container-frame px-4 mb-20">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl text-text-primary tracking-wide">
              THE CREATIVE <span className="gradient-text-accent">DIRECTORS</span>
            </h2>
            <p className="text-xs md:text-sm text-text-muted mt-2">
              Our core team managing your editing sprints.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {team.map((member) => (
              <div 
                key={member.name}
                className="bg-bg-surface border border-bg-border rounded-2xl p-6 text-center shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                {/* Initials badge */}
                <div className="w-16 h-16 rounded-full bg-brand-primary/10 border border-brand-primary/20 flex items-center justify-center text-brand-primary font-display text-2xl mx-auto mb-4">
                  {member.initial}
                </div>
                <h3 className="font-bold text-text-primary text-base mb-1">{member.name}</h3>
                <p className="text-brand-accent text-xs font-semibold uppercase tracking-wider mb-4">
                  {member.role}
                </p>
                <p className="text-xs text-text-muted leading-relaxed italic border-t border-bg-border pt-4">
                  &ldquo;{member.funFact}&rdquo;
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Software tools grid */}
        <section className="container-frame px-4">
          <div className="bg-bg-surface/50 border border-bg-border rounded-3xl p-8 shadow-sm">
            <div className="text-center mb-8">
              <h3 className="font-display text-2xl text-text-primary tracking-wide">
                OUR TECH STACK & PRODUCTION GEAR
              </h3>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {tools.map((tl) => (
                <div 
                  key={tl.name}
                  className="bg-bg-surface border border-bg-border rounded-xl px-4 py-3 text-center"
                >
                  <span className="block font-semibold text-text-primary text-xs mb-0.5">{tl.name}</span>
                  <span className="text-[10px] text-text-muted font-mono">{tl.category}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  )
}
