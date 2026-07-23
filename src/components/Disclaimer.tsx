"use client"

import { motion } from "framer-motion"
import { AlertTriangle } from "lucide-react"
import data from "@/data/site-data.json"

export default function Disclaimer() {
  const { disclaimer } = data

  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="py-16 bg-slate-50 dark:bg-slate-900/80 border-y border-gray-200 dark:border-slate-800"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-start gap-4 p-6 sm:p-8 rounded-2xl bg-white dark:bg-slate-800/50 shadow-sm">
          <div className="w-10 h-10 rounded-xl bg-amber-100 dark:bg-amber-900/30 flex items-center justify-center flex-shrink-0">
            <AlertTriangle className="w-5 h-5 text-amber-600 dark:text-amber-400" />
          </div>
          <div>
            <h3 className="text-lg font-display font-bold text-heading dark:text-heading-dark mb-2">
              {disclaimer.heading}
            </h3>
            <p className="text-sm text-text dark:text-text-light leading-relaxed">
              {disclaimer.text}
            </p>
          </div>
        </div>
      </div>
    </motion.section>
  )
}
