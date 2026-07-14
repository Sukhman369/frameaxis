'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useScrolled } from '@/hooks/useScrolled'
import { cn } from '@/lib/utils'
import { Menu, X } from 'lucide-react'
import Button from '@/components/ui/Button'

const navLinks = [
  { label: 'Work', href: '/work' },
  { label: 'Services', href: '/services' },
  { label: 'Pricing', href: '/pricing' },
  { label: 'About', href: '/about' },
]

export default function Navbar() {
  const scrolled = useScrolled(50)
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <>
      <header
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
          scrolled ? 'py-4' : 'py-6'
        )}
      >
        <div className="container-frame">
          <div
            className={cn(
              'flex items-center justify-between transition-all duration-500 rounded-2xl px-6 py-3 border',
              scrolled
                ? 'bg-bg-surface/85 backdrop-blur-md border-bg-border shadow-[0_10px_35px_rgba(15,23,42,0.06)]'
                : 'bg-transparent border-transparent'
            )}
          >
            {/* Logo */}
            <Link
              href="/"
              className="flex items-center gap-3 group"
              aria-label="FrameAxis — Home"
            >
              {/* Symbol */}
              <div className="relative w-9 h-9">
                <div className="absolute inset-0 rounded-lg bg-brand-primary/10 border border-brand-primary/30 group-hover:border-brand-accent/50 transition-all duration-300" />
                <span className="absolute inset-0 flex items-center justify-center text-brand-accent font-mono font-bold text-xs leading-none">
                  FA
                </span>
              </div>
              {/* Wordmark */}
              <span className="font-display text-2xl tracking-widest text-text-primary group-hover:scale-[1.02] transition-all">
                FRAMEAXIS
              </span>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-2" aria-label="Main navigation">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="px-4 py-2 text-sm text-text-secondary hover:text-text-primary rounded-xl hover:bg-black/5 transition-all duration-200 font-medium"
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Desktop CTA */}
            <div className="hidden md:flex items-center gap-3">
              <Button href="/contact" variant="secondary" size="sm">
                Contact
              </Button>
              <Button href="/contact" variant="primary" size="sm">
                Start a Project →
              </Button>
            </div>

            {/* Mobile Menu Toggle */}
            <button
              id="mobile-menu-toggle"
              className="md:hidden p-2 rounded-lg text-text-secondary hover:text-text-primary hover:bg-white/5 transition-all"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={menuOpen}
            >
              {menuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Drawer */}
      <div
        className={cn(
          'fixed inset-0 z-40 md:hidden transition-all duration-300',
          menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        )}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-bg-base/80 backdrop-blur-sm"
          onClick={() => setMenuOpen(false)}
        />

        {/* Drawer */}
        <div
          className={cn(
            'absolute top-0 right-0 h-full w-72 bg-bg-surface border-l border-bg-border flex flex-col transition-transform duration-300 ease-out',
            menuOpen ? 'translate-x-0' : 'translate-x-full'
          )}
        >
          {/* Drawer Header */}
          <div className="flex items-center justify-between p-6 border-b border-bg-border">
            <span className="font-display text-xl tracking-widest text-text-primary">
              FRAMEAXIS
            </span>
            <button
              onClick={() => setMenuOpen(false)}
              className="p-1.5 rounded-lg text-text-secondary hover:text-text-primary hover:bg-black/5 transition-all"
              aria-label="Close menu"
            >
              <X size={20} />
            </button>
          </div>

          {/* Drawer Links */}
          <nav className="flex flex-col p-4 gap-1 flex-1" aria-label="Mobile navigation">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="px-4 py-3 text-text-secondary hover:text-text-primary rounded-xl hover:bg-black/5 transition-all font-medium text-base"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Drawer CTA */}
          <div className="p-6 border-t border-bg-border flex flex-col gap-3">
            <Button href="/contact" variant="secondary" size="md" className="w-full justify-center">
              Contact
            </Button>
            <Button href="/contact" variant="primary" size="md" className="w-full justify-center">
              Start a Project →
            </Button>
          </div>
        </div>
      </div>
    </>
  )
}
