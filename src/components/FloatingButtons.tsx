"use client"

import { motion } from "framer-motion"
import { MessageCircle, Phone } from "lucide-react"

export default function FloatingButtons() {
  return (
    <div className="fixed bottom-6 right-6 z-30 flex flex-col gap-3">
      <motion.a
        href="https://wa.me/91XXXXXXXXXX"
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="w-14 h-14 rounded-2xl bg-green-500 text-white shadow-xl flex items-center justify-center hover:bg-green-600 transition-colors"
        aria-label="WhatsApp"
      >
        <Phone className="w-6 h-6" />
      </motion.a>
      <motion.a
        href="https://t.me/nidhi12300"
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-500 to-blue-600 text-white shadow-xl flex items-center justify-center hover:from-blue-600 hover:to-blue-700 transition-colors"
        aria-label="Telegram"
      >
        <MessageCircle className="w-6 h-6" />
      </motion.a>
    </div>
  )
}
