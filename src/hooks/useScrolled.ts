'use client'

import { useEffect, useState } from 'react'

/**
 * Returns true once the user has scrolled past `threshold` pixels.
 * Used to trigger the navbar glassmorphism effect.
 */
export function useScrolled(threshold = 80): boolean {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > threshold)
    handler() // Run once on mount
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [threshold])

  return scrolled
}
