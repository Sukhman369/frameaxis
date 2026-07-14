'use client'

import { useEffect, useRef } from 'react'
import Button from '@/components/ui/Button'
import Badge from '@/components/ui/Badge'
import { Play } from 'lucide-react'

const stats = [
  { value: '500+', label: 'Videos Edited' },
  { value: '150+', label: 'Happy Clients' },
  { value: '48hr', label: 'Avg Turnaround' },
  { value: '97%', label: 'Client Retention' },
]

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  // Particle animation
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let animId: number
    let particles: Array<{
      x: number; y: number; vx: number; vy: number; size: number; opacity: number
    }> = []

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resize()
    window.addEventListener('resize', resize)

    // Init particles
    const PARTICLE_COUNT = 80
    for (let i = 0; i < PARTICLE_COUNT; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        size: Math.random() * 2 + 0.5,
        opacity: Math.random() * 0.5 + 0.1,
      })
    }

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      particles.forEach((p) => {
        p.x += p.vx
        p.y += p.vy
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1

        ctx.beginPath()
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(91,74,255,${p.opacity})`
        ctx.fill()
      })

      // Draw connection lines between nearby particles
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x
          const dy = particles[i].y - particles[j].y
          const dist = Math.sqrt(dx * dx + dy * dy)
          if (dist < 120) {
            ctx.beginPath()
            ctx.moveTo(particles[i].x, particles[i].y)
            ctx.lineTo(particles[j].x, particles[j].y)
            ctx.strokeStyle = `rgba(91,74,255,${0.12 * (1 - dist / 120)})`
            ctx.lineWidth = 0.5
            ctx.stroke()
          }
        }
      }

      animId = requestAnimationFrame(draw)
    }
    draw()

    return () => {
      window.removeEventListener('resize', resize)
      cancelAnimationFrame(animId)
    }
  }, [])

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
    >
      {/* Canvas Particles */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none"
        aria-hidden="true"
      />

      {/* Gradient bg layers */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          background:
            'radial-gradient(ellipse 80% 60% at 50% 0%, rgba(91,74,255,0.18) 0%, transparent 70%), radial-gradient(ellipse 50% 40% at 80% 80%, rgba(200,255,0,0.06) 0%, transparent 60%)',
        }}
      />

      {/* Content */}
      <div className="container-frame relative z-10 flex flex-col items-center text-center pt-44 pb-20">
        {/* Top Badge */}
        <Badge variant="brand" className="mb-8 animate-[fade-up_0.6s_ease-out_0.1s_both]">
          <span className="w-1.5 h-1.5 rounded-full bg-brand-primary inline-block" />
          Premium Video Editing Agency
        </Badge>

        {/* Hero Headline */}
        <h1
          className="text-hero text-text-primary mb-6 animate-[fade-up_0.7s_ease-out_0.2s_both]"
          style={{ maxWidth: '1000px' }}
        >
          WHERE EVERY{' '}
          <span className="gradient-text-brand">FRAME</span>
          <br />
          DRIVES{' '}
          <span className="gradient-text-accent">RESULTS.</span>
        </h1>

        {/* Subheadline */}
        <p
          className="text-lg md:text-xl text-text-secondary max-w-2xl leading-relaxed mb-10 animate-[fade-up_0.7s_ease-out_0.35s_both]"
        >
          We transform raw footage into scroll-stopping content for YouTube creators,
          e-commerce brands, SaaS companies, and performance marketers.{' '}
          <strong className="text-text-primary font-medium">48-hour turnaround. Guaranteed.</strong>
        </p>

        {/* CTAs */}
        <div
          className="flex flex-col sm:flex-row items-center gap-4 mb-16 animate-[fade-up_0.7s_ease-out_0.45s_both]"
        >
          <Button href="/work" variant="accent" size="lg">
            See Our Work
          </Button>
          <Button href="/contact" variant="secondary" size="lg" className="gap-2.5">
            <span className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
              <Play size={12} fill="currentColor" />
            </span>
            Book Free Discovery Call
          </Button>
        </div>

        {/* Stats Strip */}
        <div
          className="w-full max-w-3xl grid grid-cols-2 md:grid-cols-4 gap-px bg-white/8 rounded-2xl overflow-hidden border border-white/8 animate-[fade-up_0.7s_ease-out_0.55s_both]"
        >
          {stats.map(({ value, label }) => (
            <div
              key={label}
              className="bg-bg-surface/70 backdrop-blur-sm px-6 py-5 text-center"
            >
              <div className="font-display text-3xl text-text-primary tracking-wide mb-0.5">
                {value}
              </div>
              <div className="text-xs text-text-muted font-medium uppercase tracking-wider">
                {label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom fade */}
      <div
        className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
        style={{
          background: 'linear-gradient(to top, var(--bg-base), transparent)',
        }}
        aria-hidden="true"
      />
    </section>
  )
}
