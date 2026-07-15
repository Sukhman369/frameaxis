'use client'

import Link from 'next/link'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import Button from '@/components/ui/Button'
import Badge from '@/components/ui/Badge'
import SpotlightCard from '@/components/ui/SpotlightCard'
import { Monitor, Film, FileQuestion, ArrowRight } from 'lucide-react'

export default function NotFound() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-bg-base pt-36 pb-24 flex items-center justify-center relative overflow-hidden">
        
        {/* Glow Particles */}
        <div className="absolute top-[20%] left-[15%] w-96 h-96 bg-brand-primary/5 rounded-full blur-3xl opacity-50 z-0 pointer-events-none" />
        <div className="absolute bottom-[20%] right-[15%] w-96 h-96 bg-brand-accent/5 rounded-full blur-3xl opacity-50 z-0 pointer-events-none" />

        <div className="container-frame px-4 max-w-2xl relative z-10 text-center">
          <SpotlightCard 
            glowColor="rgba(217, 70, 239, 0.05)" 
            className="bg-bg-surface border border-bg-border rounded-3xl p-8 md:p-12 shadow-lg"
          >
            <div className="w-16 h-16 rounded-2xl bg-brand-primary/10 border border-brand-primary/20 flex items-center justify-center text-brand-primary mx-auto mb-6">
              <FileQuestion size={28} />
            </div>

            <Badge variant="brand" className="mb-4">404 Exception</Badge>
            
            <h1 className="font-display text-5xl md:text-7xl text-text-primary tracking-wide leading-none">
              404 <span className="gradient-text-brand">LOST.</span>
            </h1>
            
            <h2 className="font-semibold text-text-primary text-lg md:text-xl mt-6">
              Segment Not Found on Timeline
            </h2>
            
            <p className="text-text-muted text-xs md:text-sm mt-3 leading-relaxed max-w-md mx-auto">
              {"The frame you are looking for has been cut from the final release edit, or does not exist. Let us sync you back to active directories."}
            </p>

            {/* Split actions */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-10">
              <Button href="/services" variant="primary" size="md" className="justify-center w-full group py-3">
                <span className="flex items-center gap-2">
                  <Monitor size={15} />
                  Explore Services
                </span>
              </Button>
              <Button href="/work" variant="secondary" size="md" className="justify-center w-full py-3">
                <span className="flex items-center gap-2">
                  <Film size={15} />
                  Browse Portfolio
                </span>
              </Button>
            </div>

            <Link 
              href="/" 
              className="inline-flex items-center gap-1 text-xs font-semibold text-brand-primary hover:underline mt-8 transition-all"
            >
              Return to Coordinates Homepage <ArrowRight size={13} />
            </Link>

          </SpotlightCard>
        </div>
      </main>
      <Footer />
    </>
  )
}
