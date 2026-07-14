import Link from 'next/link'
import { Instagram, Youtube, Linkedin, Twitter } from 'lucide-react'

const footerLinks = {
  Company: [
    { label: 'About', href: '/about' },
    { label: 'Work', href: '/work' },
    { label: 'Services', href: '/services' },
    { label: 'Pricing', href: '/pricing' },
  ],
  Services: [
    { label: 'YouTube Editing', href: '/services#youtube' },
    { label: 'Social Media Reels', href: '/services#reels' },
    { label: 'Ad Creative', href: '/services#ads' },
    { label: 'Brand Films', href: '/services#brand' },
    { label: 'Podcast Production', href: '/services#podcast' },
  ],
  Legal: [
    { label: 'Privacy Policy', href: '/privacy' },
    { label: 'Terms of Service', href: '/terms' },
  ],
}

const socialLinks = [
  { icon: Instagram, label: 'Instagram', href: 'https://instagram.com/frameaxis' },
  { icon: Youtube, label: 'YouTube', href: 'https://youtube.com/@frameaxis' },
  { icon: Linkedin, label: 'LinkedIn', href: 'https://linkedin.com/company/frameaxis' },
  { icon: Twitter, label: 'Twitter / X', href: 'https://twitter.com/frameaxis' },
]

export default function Footer() {
  return (
    <footer className="bg-bg-surface border-t border-white/6">
      {/* Top CTA Strip */}
      <div className="border-b border-white/6">
        <div className="container-frame py-12 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <p className="font-mono text-xs text-text-muted tracking-widest uppercase mb-2">
              Ready to scale?
            </p>
            <h2 className="font-display text-3xl md:text-4xl text-text-primary tracking-wide">
              LET'S BUILD SOMETHING GREAT
            </h2>
          </div>
          <Link
            href="/contact"
            className="shrink-0 inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-brand-primary text-white font-semibold text-sm hover:bg-[#4a3aee] shadow-[0_0_30px_rgba(91,74,255,0.4)] hover:shadow-[0_0_50px_rgba(91,74,255,0.6)] transition-all duration-200 active:scale-95"
          >
            Start a Project →
          </Link>
        </div>
      </div>

      {/* Main Footer Grid */}
      <div className="container-frame py-14">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-10">
          {/* Brand Column */}
          <div className="md:col-span-2">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2.5 mb-4 group w-fit">
              <div className="relative w-8 h-8">
                <div className="absolute inset-0 rounded-md bg-brand-primary/20 border border-brand-primary/40" />
                <span className="absolute inset-0 flex items-center justify-center text-brand-accent font-mono font-bold text-xs">
                  FA
                </span>
              </div>
              <span className="font-display text-xl tracking-widest text-text-primary">
                FRAMEAXIS
              </span>
            </Link>

            <p className="text-text-secondary text-sm leading-relaxed max-w-xs mb-6">
              Where Every Frame Drives Results. Premium video editing for creators, brands, and marketers who demand output that converts.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-3">
              {socialLinks.map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-9 h-9 rounded-lg bg-white/5 border border-white/8 flex items-center justify-center text-text-muted hover:text-text-primary hover:border-white/20 hover:bg-white/10 transition-all duration-150"
                >
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </div>

          {/* Link Columns */}
          {Object.entries(footerLinks).map(([section, links]) => (
            <div key={section}>
              <h3 className="text-text-primary font-semibold text-sm mb-4">{section}</h3>
              <ul className="flex flex-col gap-2.5">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-text-muted text-sm hover:text-text-secondary transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/5">
        <div className="container-frame py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-text-muted text-xs">
            © {new Date().getFullYear()} FrameAxis. All rights reserved.
          </p>
          <p className="text-text-muted text-xs">
            Crafted with precision.{' '}
            <span className="text-brand-accent">Every frame. Every client.</span>
          </p>
        </div>
      </div>
    </footer>
  )
}
