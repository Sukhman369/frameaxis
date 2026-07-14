import { cn } from '@/lib/utils'
import Link from 'next/link'
import { type ComponentPropsWithoutRef } from 'react'

type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'accent'
type ButtonSize = 'sm' | 'md' | 'lg'

interface ButtonProps extends ComponentPropsWithoutRef<'button'> {
  variant?: ButtonVariant
  size?: ButtonSize
  href?: string
  external?: boolean
}

const variants: Record<ButtonVariant, string> = {
  primary:
    'bg-brand-primary text-white hover:bg-[#4a3aee] shadow-[0_0_30px_rgba(91,74,255,0.4)] hover:shadow-[0_0_50px_rgba(91,74,255,0.6)] active:scale-[0.98]',
  secondary:
    'bg-transparent text-text-primary border border-white/15 hover:border-white/35 hover:bg-white/5 active:scale-[0.98]',
  ghost:
    'bg-transparent text-text-secondary hover:text-text-primary hover:bg-white/5',
  accent:
    'bg-brand-accent text-bg-base font-bold hover:brightness-110 shadow-[0_0_30px_rgba(200,255,0,0.3)] hover:shadow-[0_0_50px_rgba(200,255,0,0.5)] active:scale-[0.98]',
}

const sizes: Record<ButtonSize, string> = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-sm',
  lg: 'px-8 py-4 text-base',
}

export default function Button({
  variant = 'primary',
  size = 'md',
  href,
  external,
  className,
  children,
  ...props
}: ButtonProps) {
  const classes = cn(
    'inline-flex items-center justify-center gap-2 font-semibold rounded-xl transition-all duration-200 cursor-pointer select-none',
    variants[variant],
    sizes[size],
    className
  )

  if (href) {
    return (
      <Link
        href={href}
        className={classes}
        target={external ? '_blank' : undefined}
        rel={external ? 'noopener noreferrer' : undefined}
      >
        {children}
      </Link>
    )
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  )
}
