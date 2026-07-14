'use client'

import { useEffect, useState } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

export default function InteractiveCursor() {
  const [visible, setVisible] = useState(false)
  const [hovered, setHovered] = useState(false)
  const [pressed, setPressed] = useState(false)

  const cursorX = useMotionValue(-100)
  const cursorY = useMotionValue(-100)

  const springConfig = { damping: 28, stiffness: 220, mass: 0.6 }
  const cursorXSpring = useSpring(cursorX, springConfig)
  const cursorYSpring = useSpring(cursorY, springConfig)

  // Declare center dot coordinates springs at the top level
  const dotXSpring = useSpring(cursorX, { damping: 15, stiffness: 350 })
  const dotYSpring = useSpring(cursorY, { damping: 15, stiffness: 350 })

  useEffect(() => {
    // Disable interactive cursor on touchscreens (tablets/phones) to prevent glitching
    const isTouchDevice = 
      'ontouchstart' in window || 
      navigator.maxTouchPoints > 0 || 
      window.matchMedia('(pointer: coarse)').matches
      
    if (isTouchDevice) return

    setVisible(true)

    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX - 16)
      cursorY.set(e.clientY - 16)
    }

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      if (!target) return
      
      const isClickable = 
        target.tagName === 'A' || 
        target.tagName === 'BUTTON' || 
        target.closest('a') !== null || 
        target.closest('button') !== null ||
        target.getAttribute('role') === 'button'

      if (isClickable) {
        setHovered(true)
      } else {
        setHovered(false)
      }
    }

    const handleMouseDown = () => setPressed(true)
    const handleMouseUp = () => setPressed(false)

    window.addEventListener('mousemove', moveCursor)
    window.addEventListener('mouseover', handleMouseOver)
    window.addEventListener('mousedown', handleMouseDown)
    window.addEventListener('mouseup', handleMouseUp)

    return () => {
      window.removeEventListener('mousemove', moveCursor)
      window.removeEventListener('mouseover', handleMouseOver)
      window.removeEventListener('mousedown', handleMouseDown)
      window.removeEventListener('mouseup', handleMouseUp)
    }
  }, [cursorX, cursorY])

  // React rules of hooks: Do not conditionally return until all hooks are executed
  if (!visible) return null

  return (
    <>
      {/* Trailing Outer Ring */}
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 rounded-full border-2 border-brand-primary pointer-events-none z-[9999] mix-blend-difference"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
        }}
        animate={{
          scale: hovered ? 1.6 : pressed ? 0.75 : 1,
          backgroundColor: hovered ? 'rgba(79, 70, 229, 0.15)' : 'rgba(79, 70, 229, 0)',
          borderColor: hovered ? 'rgba(217, 70, 239, 0.8)' : 'rgba(79, 70, 229, 0.85)',
        }}
        transition={{ type: 'tween', ease: 'backOut', duration: 0.25 }}
      />

      {/* Center dot */}
      <motion.div
        className="fixed top-0 left-0 w-1.5 h-1.5 rounded-full bg-brand-accent pointer-events-none z-[9999] mix-blend-difference translate-x-[13px] translate-y-[13px]"
        style={{
          x: dotXSpring,
          y: dotYSpring,
        }}
        animate={{
          scale: pressed ? 0.5 : hovered ? 0 : 1,
        }}
        transition={{ type: 'tween', duration: 0.1 }}
      />
    </>
  )
}
