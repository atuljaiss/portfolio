"use client"

import { motion } from "framer-motion"
import { getIcon } from "@/lib/icons"
import SectionTitle from "./ui/SectionTitle"
import data from "@/data/site-data.json"

export default function WhyChooseMe() {
  const { whyChooseMe } = data

  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-emerald-50/30 to-transparent dark:from-emerald-900/10 dark:to-transparent pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle title={whyChooseMe.sectionTitle} subtitle={whyChooseMe.sectionSubtitle} />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {whyChooseMe.reasons.map((item, index) => {
            const Icon = getIcon(item.icon)
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                whileHover={{ y: -4 }}
                className="group rounded-2xl bg-white dark:bg-slate-800/80 p-6 sm:p-8 border border-gray-100 dark:border-slate-700 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center shadow-lg mb-5 group-hover:scale-110 transition-transform duration-300`}>
                  {Icon && <Icon className="w-6 h-6 text-white" />}
                </div>
                <h3 className="text-lg font-display font-bold text-heading dark:text-heading-dark mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-text dark:text-text-light leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
