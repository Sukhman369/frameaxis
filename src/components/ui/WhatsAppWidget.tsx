'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Send, MessageCircle } from 'lucide-react'

interface WhatsAppWidgetProps {
  phoneNumber?: string
  agentName?: string
  agentRole?: string
  greetingMessage?: string
}

export default function WhatsAppWidget({
  phoneNumber = '919876543210', // Default placeholder
  agentName = 'Sukhman',
  agentRole = 'Projects Specialist',
  greetingMessage = 'Hey there! 👋 Ready to scale your brand with premium video formatting? Write your project details or questions below to chat directly with us!'
}: WhatsAppWidgetProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [message, setMessage] = useState('')
  const [hasNotification, setHasNotification] = useState(true)

  useEffect(() => {
    // Dismiss notification dot if widget is opened
    if (isOpen) {
      setHasNotification(false)
    }
  }, [isOpen])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!message.trim()) return

    const sanitizedPhone = phoneNumber.replace(/[^0-9]/g, '')
    const whatsappUrl = `https://wa.me/${sanitizedPhone}?text=${encodeURIComponent(message.trim())}`
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer')
    setMessage('')
    setIsOpen(false)
  }

  return (
    <div className="fixed bottom-6 right-6 z-50 font-sans select-none">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ type: 'spring', damping: 25, stiffness: 220 }}
            className="absolute bottom-18 right-0 w-[340px] max-w-[calc(100vw-2rem)] bg-white/90 backdrop-blur-xl border border-bg-border rounded-3xl shadow-[0_20px_50px_rgba(15,23,42,0.15)] overflow-hidden"
          >
            {/* Header */}
            <div className="relative p-5 bg-gradient-to-r from-brand-primary to-brand-accent text-white flex items-center gap-3">
              <div className="relative">
                {/* Agent Avatar Icon */}
                <div className="w-11 h-11 rounded-full bg-white/20 border border-white/35 flex items-center justify-center font-bold text-sm select-none">
                  SS
                </div>
                <span className="absolute bottom-0 right-0 w-3 h-3 rounded-full bg-brand-success border-2 border-brand-primary" />
              </div>
              <div>
                <h4 className="font-bold text-sm tracking-wide leading-tight">{agentName}</h4>
                <p className="text-[10px] text-white/80 font-medium tracking-wide uppercase mt-0.5">{agentRole}</p>
              </div>

              {/* Close Button */}
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="absolute top-4 right-4 p-1.5 rounded-full hover:bg-white/10 text-white/80 hover:text-white transition-colors cursor-pointer"
                aria-label="Close Chat"
              >
                <X size={16} />
              </button>
            </div>

            {/* Content Area */}
            <div className="p-5 space-y-4 bg-bg-base/30">
              {/* Agent Bubble message */}
              <div className="bg-white border border-bg-border rounded-2xl rounded-tl-sm p-4 text-[12px] md:text-[13px] text-text-secondary leading-relaxed shadow-sm">
                {greetingMessage}
              </div>

              {/* Form Input */}
              <form onSubmit={handleSubmit} className="space-y-2">
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Ask a question or brief your project..."
                  rows={2}
                  className="w-full bg-white border border-bg-border focus:border-brand-primary focus:ring-1 focus:ring-brand-primary outline-none transition-all rounded-xl px-3.5 py-3 text-xs md:text-sm text-text-primary placeholder:text-text-muted resize-none min-h-[60px]"
                  required
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' && !e.shiftKey) {
                      e.preventDefault()
                      handleSubmit(e)
                    }
                  }}
                />

                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl bg-brand-primary text-white font-semibold text-xs hover:bg-[#4a3aee] transition-colors cursor-pointer"
                >
                  Start Chat on WhatsApp
                  <Send size={12} />
                </button>
              </form>
            </div>

            {/* Branding Footer */}
            <div className="text-center py-2 bg-bg-base/50 border-t border-bg-border">
              <span className="text-[9px] text-text-muted uppercase tracking-widest font-semibold flex items-center justify-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-success inline-block animate-pulse" />
                Active Support Channel
              </span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating launcher Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 rounded-full bg-white hover:bg-bg-surface border border-bg-border hover:border-brand-primary/20 text-brand-primary hover:text-brand-accent shadow-[0_8px_30px_rgba(0,0,0,0.06)] hover:shadow-[0_10px_35px_rgba(79,70,229,0.15)] flex items-center justify-center cursor-pointer transition-all duration-300 active:scale-[0.95] relative group"
        aria-label="Toggle WhatsApp Chat Widget"
      >
        {/* Notification Pulse dot */}
        {hasNotification && (
          <span className="absolute -top-0.5 -right-0.5 w-4 h-4 rounded-full bg-brand-accent border-2 border-white flex items-center justify-center text-[9px] font-bold text-white leading-none z-10 animate-bounce">
            1
          </span>
        )}

        {/* Floating Icons */}
        <div className="group-hover:rotate-6 transition-transform">
          <MessageCircle size={26} className="stroke-[2.25]" />
        </div>
      </button>
    </div>
  )
}
