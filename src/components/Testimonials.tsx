"use client"

import { motion } from "framer-motion"
import { Star, Quote } from "lucide-react"
import SectionTitle from "./ui/SectionTitle"
import data from "@/data/site-data.json"

export default function Testimonials() {
  const { testimonials } = data

  return (
    <section id="testimonials" className="relative py-24 md:py-32 bg-white dark:bg-slate-900/50 overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-primary/3 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle title={testimonials.sectionTitle} subtitle={testimonials.sectionSubtitle} />

        <div className="max-w-3xl mx-auto mb-12 p-4 sm:p-6 rounded-2xl bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-700/30">
          <div className="flex items-start gap-3">
            <div className="w-8 h-8 rounded-lg bg-amber-100 dark:bg-amber-800 flex items-center justify-center flex-shrink-0">
              <Quote className="w-4 h-4 text-amber-600 dark:text-amber-400" />
            </div>
            <p className="text-sm text-amber-800 dark:text-amber-200 leading-relaxed">
              <strong>Note:</strong> {testimonials.disclaimer}
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.items.map((t, index) => (
            <motion.div
              key={t.author}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -4 }}
              className="group rounded-2xl bg-white dark:bg-slate-800/80 p-6 sm:p-8 border border-gray-100 dark:border-slate-700 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="flex gap-1 mb-5">
                {[1, 2, 3, 4, 5].map((s) => (
                  <Star key={s} className="w-5 h-5 fill-secondary text-secondary" />
                ))}
              </div>

              <div className="relative mb-6">
                <Quote className="absolute -top-2 -left-1 w-8 h-8 text-primary/10 dark:text-primary/20" />
                <p className="text-text dark:text-text-light leading-relaxed italic relative z-10 pl-4">
                  &ldquo;{t.quote}&rdquo;
                </p>
              </div>

              <div className="flex items-center gap-3 pt-4 border-t border-gray-100 dark:border-slate-700">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white font-bold text-sm">
                  {t.author.charAt(0)}
                </div>
                <div>
                  <p className="text-sm font-semibold text-heading dark:text-heading-dark">
                    {t.author}
                  </p>
                  <p className="text-xs text-text dark:text-text-light">
                    {t.role}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
