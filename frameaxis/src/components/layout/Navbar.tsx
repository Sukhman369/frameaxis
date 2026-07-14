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
  const scrolled = useScrolled(80)
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <>
      <header
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
          scrolled
            ? 'glass-dark border-b border-white/6 py-3'
            : 'bg-transparent py-5'
        )}
      >
        <div className="container-frame flex items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2.5 group"
            aria-label="FrameAxis — Home"
          >
            {/* Symbol */}
            <div className="relative w-8 h-8">
              <div className="absolute inset-0 rounded-md bg-brand-primary/20 border border-brand-primary/40 group-hover:border-brand-primary/70 transition-colors duration-200" />
              <span className="absolute inset-0 flex items-center justify-center text-brand-accent font-mono font-bold text-xs leading-none">
                FA
              </span>
            </div>
            {/* Wordmark */}
            <span className="font-display text-xl tracking-widest text-text-primary group-hover:text-white transition-colors">
              FRAMEAXIS
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1" aria-label="Main navigation">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-4 py-2 text-sm text-text-secondary hover:text-text-primary rounded-lg hover:bg-white/5 transition-all duration-150 font-medium"
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
            'absolute top-0 right-0 h-full w-72 bg-bg-surface border-l border-white/8 flex flex-col transition-transform duration-300 ease-out',
            menuOpen ? 'translate-x-0' : 'translate-x-full'
          )}
        >
          {/* Drawer Header */}
          <div className="flex items-center justify-between p-6 border-b border-white/8">
            <span className="font-display text-lg tracking-widest text-text-primary">
              FRAMEAXIS
            </span>
            <button
              onClick={() => setMenuOpen(false)}
              className="p-1.5 rounded-lg text-text-secondary hover:text-text-primary hover:bg-white/5 transition-all"
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
                className="px-4 py-3 text-text-secondary hover:text-text-primary rounded-xl hover:bg-white/5 transition-all font-medium text-base"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Drawer CTA */}
          <div className="p-6 border-t border-white/8 flex flex-col gap-3">
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
