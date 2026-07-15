import Link from 'next/link'

// Inline SVG icons — avoids lucide version compatibility issues for brand icons
const IconInstagram = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
  </svg>
)
const IconYoutube = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z"/><polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02"/>
  </svg>
)
const IconLinkedin = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/>
  </svg>
)
const IconX = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.264 5.633L18.244 2.25zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77z"/>
  </svg>
)

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
  { icon: IconInstagram, label: 'Instagram', href: 'https://instagram.com/frameaxis' },
  { icon: IconYoutube, label: 'YouTube', href: 'https://youtube.com/@frameaxis' },
  { icon: IconLinkedin, label: 'LinkedIn', href: 'https://linkedin.com/company/frameaxis' },
  { icon: IconX, label: 'Twitter / X', href: 'https://twitter.com/frameaxis' },
]

export default function Footer() {
  return (
    <footer className="bg-bg-surface border-t border-bg-border">
      {/* Top CTA Strip */}
      <div className="border-b border-bg-border">
        <div className="container-frame py-12 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <p className="font-mono text-xs text-text-muted tracking-widest uppercase mb-2">
              Ready to scale?
            </p>
            <h2 className="font-display text-3xl md:text-4xl text-text-primary tracking-wide">
              {"LET'S BUILD SOMETHING GREAT"}
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
                  className="w-9 h-9 rounded-lg bg-black/5 border border-bg-border flex items-center justify-center text-text-secondary hover:text-text-primary hover:border-text-primary/20 hover:bg-black/8 transition-all duration-150"
                >
                  <Icon />
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
      <div className="border-t border-bg-border">
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
