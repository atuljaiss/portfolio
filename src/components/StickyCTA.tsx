"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { MessageCircle, ArrowRight } from "lucide-react"

export default function StickyCTA() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600)
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          className="fixed bottom-0 left-0 right-0 z-40 lg:hidden"
        >
          <div className="bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl border-t border-gray-200 dark:border-slate-700 px-4 py-3">
            <div className="flex gap-3 max-w-lg mx-auto">
              <a
                href="https://t.me/yourtelegram"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-gradient-to-r from-primary to-accent text-white font-semibold text-sm shadow-lg"
              >
                <MessageCircle className="w-4 h-4" />
                Join Telegram
              </a>
              <a
                href="#contact"
                className="flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-secondary text-[#0F172A] font-semibold text-sm"
              >
                <ArrowRight className="w-4 h-4" />
                Book Now
              </a>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
