'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X } from 'lucide-react'
import dynamic from 'next/dynamic'

// Dynamically import ReactPlayer to prevent hydration/SSR errors in Next.js
const ReactPlayer = dynamic(() => import('react-player'), { ssr: false })

interface VideoModalProps {
  isOpen: boolean
  onClose: () => void
  videoUrl: string | null
}

export default function VideoModal({ isOpen, onClose, videoUrl }: VideoModalProps) {
  const [isLoaded, setIsLoaded] = useState(false)

  // Listen to Escape key press to close modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose()
      }
    }

    if (isOpen) {
      document.body.style.overflow = 'hidden'
      window.addEventListener('keydown', handleKeyDown)
    } else {
      document.body.style.overflow = 'unset'
    }

    return () => {
      document.body.style.overflow = 'unset'
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [isOpen, onClose])

  // Reset loading status when videoUrl changes
  useEffect(() => {
    setIsLoaded(false)
  }, [videoUrl])

  if (!isOpen || !videoUrl) return null

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center">
        {/* Backdrop overlay */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-neutral-950/85 backdrop-blur-md cursor-pointer"
        />

        {/* Modal Content Structure */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          transition={{ type: 'spring', damping: 25, stiffness: 210 }}
          className="relative w-full max-w-4xl aspect-video rounded-2xl border border-white/10 bg-neutral-900 shadow-[0_25px_65px_rgba(0,0,0,0.85)] overflow-hidden mx-4 z-10"
        >
          {/* Close Action Trigger */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-20 p-2 rounded-full bg-neutral-950/40 hover:bg-neutral-955 hover:bg-neutral-800 text-white/70 hover:text-white transition-all backdrop-blur-sm cursor-pointer shadow-md"
            aria-label="Close Playback"
          >
            <X size={18} />
          </button>

          {/* Loader Overlay */}
          {!isLoaded && (
            <div className="absolute inset-0 flex items-center justify-center bg-neutral-900 z-0">
              <span className="flex h-10 w-10 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-10 w-10 bg-brand-primary"></span>
              </span>
            </div>
          )}

          {/* Video Player Frame */}
          <div className="w-full h-full">
            <ReactPlayer
              url={videoUrl}
              className="react-player"
              width="100%"
              height="100%"
              controls
              playing
              onReady={() => setIsLoaded(true)}
              config={{
                youtube: {
                  playerVars: {
                    autoplay: 1,
                    modestbranding: 1,
                    rel: 0,
                  },
                },
              }}
            />
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  )
}
