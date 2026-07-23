"use client"

import { motion } from "framer-motion"
import { getIcon } from "@/lib/icons"
import data from "@/data/site-data.json"

export default function SocialLinks() {
  const { socialLinks } = data

  return (
    <section className="relative py-24 md:py-32 bg-white dark:bg-slate-900/50 overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto mb-16 text-center"
        >
          <span className="inline-block text-sm font-semibold tracking-widest uppercase text-primary dark:text-secondary mb-4">
            {socialLinks.sectionTag}
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-bold leading-tight text-heading dark:text-heading-dark">
            {socialLinks.sectionTitle}
          </h2>
          <div className="w-20 h-1 mt-6 mx-auto rounded-full" style={{ background: "linear-gradient(90deg, #2B6B4E, #C49A5C)" }} />
        </motion.div>

        <div className="flex flex-wrap justify-center gap-4">
          {socialLinks.links.map((social, index) => {
            const Icon = getIcon(social.icon)
            return (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                whileHover={{ y: -4, scale: 1.05 }}
                className={`flex items-center gap-3 px-6 py-4 rounded-2xl text-white ${social.color} shadow-lg ${social.hoverColor} hover:shadow-xl transition-all duration-300`}
              >
                {Icon && <Icon className="w-5 h-5" />}
                <span className="font-semibold text-sm">{social.label}</span>
              </motion.a>
            )
          })}
        </div>
      </div>
    </section>
  )
}
