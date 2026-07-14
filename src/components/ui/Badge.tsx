import { cn } from '@/lib/utils'

interface BadgeProps {
  children: React.ReactNode
  variant?: 'brand' | 'accent' | 'muted' | 'success'
  className?: string
}

const variants = {
  brand: 'bg-brand-primary/15 text-brand-primary border border-brand-primary/25',
  accent: 'bg-brand-accent/15 text-brand-accent border border-brand-accent/25',
  muted: 'bg-white/5 text-text-secondary border border-white/10',
  success: 'bg-brand-success/15 text-brand-success border border-brand-success/25',
}

export default function Badge({
  children,
  variant = 'muted',
  className,
}: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold font-mono tracking-wider uppercase',
        variants[variant],
        className
      )}
    >
      {children}
    </span>
  )
}
