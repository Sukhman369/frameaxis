'use client'

import { useEffect } from 'react'
import Link from 'next/link'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import Button from '@/components/ui/Button'
import Badge from '@/components/ui/Badge'
import SpotlightCard from '@/components/ui/SpotlightCard'
import { Disc, Monitor, Film, RotateCcw } from 'lucide-react'

interface ErrorProps {
  error: Error & { digest?: string }
  reset: () => void
}

export default function ErrorBoundary({ error, reset }: ErrorProps) {
  useEffect(() => {
    // Log exception safely to diagnostics dashboard console
    console.error('System Exception Detected:', error)
  }, [error])

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-bg-base pt-36 pb-24 flex items-center justify-center relative overflow-hidden">
        
        {/* Decorative Grid and Ambient Glows */}
        <div className="absolute top-[20%] right-[10%] w-[400px] h-[400px] bg-brand-primary/5 rounded-full blur-3xl opacity-40 z-0 pointer-events-none" />
        <div className="absolute bottom-[20%] left-[10%] w-[400px] h-[400px] bg-brand-accent/5 rounded-full blur-3xl opacity-40 z-0 pointer-events-none" />

        <div className="container-frame px-4 max-w-2xl relative z-10 text-center">
          <SpotlightCard 
            glowColor="rgba(79, 70, 229, 0.05)" 
            className="bg-bg-surface border border-bg-border rounded-3xl p-8 md:p-12 shadow-lg"
          >
            <div className="w-16 h-16 rounded-2xl bg-brand-accent/10 border border-brand-accent/20 flex items-center justify-center text-brand-accent mx-auto mb-6">
              <Disc size={28} className="animate-[spin_4s_linear_infinite]" />
            </div>

            <Badge variant="accent" className="mb-4 bg-brand-accent/10 border border-brand-accent/25 text-brand-accent">
              5xx Runtime Collision
            </Badge>
            
            <h1 className="font-display text-5xl md:text-7xl text-text-primary tracking-wide leading-none">
              ERR <span className="gradient-text-accent">CRASH.</span>
            </h1>
            
            <h2 className="font-semibold text-text-primary text-lg md:text-xl mt-6">
              Render Pipeline Blocked
            </h2>
            
            <p className="text-text-muted text-xs md:text-sm mt-3 leading-relaxed max-w-md mx-auto">
              {"An unexpected layout exception interrupted the rendering cycle of this timeline page. Our core modules are safe."}
            </p>

            {/* Recovery actions */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-10">
              <button
                type="button"
                onClick={() => reset()}
                className="flex items-center justify-center gap-2 py-3 px-5 rounded-xl bg-brand-primary text-white font-semibold text-sm hover:bg-[#4a3aee] shadow-[0_5px_15px_rgba(79,70,229,0.25)] transition-all duration-200 cursor-pointer active:scale-[0.98] w-full"
              >
                <RotateCcw size={15} />
                Reset Pipeline
              </button>

              <Button href="/services" variant="secondary" size="md" className="justify-center w-full py-3">
                <span className="flex items-center gap-2">
                  <Monitor size={15} />
                  Services Directory
                </span>
              </Button>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-5 mt-8 border-t border-bg-border pt-6 text-xs font-semibold">
              <Link href="/work" className="text-text-secondary hover:text-brand-primary">
                Browse Case Studies
              </Link>
              <span className="text-bg-border">|</span>
              <Link href="/contact" className="text-text-secondary hover:text-brand-primary">
                Report Code Error
              </Link>
            </div>

          </SpotlightCard>
        </div>
      </main>
      <Footer />
    </>
  )
}
