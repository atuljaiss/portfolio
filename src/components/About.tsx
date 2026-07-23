"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { TrendingUp } from "lucide-react"
import { getIcon } from "@/lib/icons"
import SectionTitle from "./ui/SectionTitle"
import data from "@/data/site-data.json"

export default function About() {
  const { about, personal } = data

  return (
    <section id="about" className="relative py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-emerald-50/30 to-transparent dark:from-emerald-900/10 dark:to-transparent pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title={about.sectionTitle}
          subtitle={about.sectionSubtitle}
        />

        <div className="grid lg:grid-cols-5 gap-12 lg:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3 space-y-6"
          >
            {personal.bio.map((paragraph, i) => (
              <p key={i} className={i === 0 ? "text-lg text-text dark:text-text-light leading-relaxed" : "text-text dark:text-text-light leading-relaxed"}>
                {i === 0 ? (
                  <>
                    Hi, I&apos;m <span className="font-semibold text-heading dark:text-heading-dark">{personal.name}</span>.
                  </>
                ) : (
                  paragraph
                )}
              </p>
            ))}

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="flex flex-wrap gap-3 pt-4"
            >
              {about.highlights.map((h) => {
                const Icon = getIcon(h.icon)
                return (
                  <span
                    key={h.label}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white dark:bg-slate-800/80 border border-gray-100 dark:border-slate-700 text-sm font-medium text-heading dark:text-heading-dark shadow-sm"
                  >
                    <div className={`w-6 h-6 rounded-lg bg-gradient-to-br ${h.color} flex items-center justify-center`}>
                      {Icon && <Icon className="w-3.5 h-3.5 text-white" />}
                    </div>
                    {h.label}
                  </span>
                )
              })}
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-2"
          >
            <div className="relative">
              <div className="aspect-square rounded-3xl bg-gradient-to-br from-primary/10 via-accent/5 to-secondary/10 dark:from-primary/5 dark:to-secondary/5 p-8 flex items-center justify-center">
                <div className="w-full h-full rounded-2xl bg-white dark:bg-slate-800/80 shadow-xl p-6 flex flex-col justify-center gap-4 border border-gray-100 dark:border-slate-700">
                  <div className="text-center mb-2">
                    <div className="w-24 h-24 mx-auto rounded-2xl overflow-hidden shadow-xl relative">
                      <Image
                        src={personal.imageSmall}
                        alt={personal.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <h3 className="font-display text-xl font-bold text-heading dark:text-heading-dark mt-4">
                      {personal.name}
                    </h3>
                    <p className="text-sm text-text dark:text-text-light">
                      {personal.title}
                    </p>
                  </div>

                  <div className="space-y-3 mt-2">
                    {about.highlights.map((h) => {
                      const Icon = getIcon(h.icon)
                      return (
                        <div key={h.label} className="flex items-center gap-3">
                          <div className={`w-8 h-8 rounded-lg bg-gradient-to-br ${h.color} flex items-center justify-center flex-shrink-0`}>
                            {Icon && <Icon className="w-4 h-4 text-white" />}
                          </div>
                          <span className="text-sm font-medium text-heading dark:text-heading-dark">
                            {h.label}
                          </span>
                        </div>
                      )
                    })}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
