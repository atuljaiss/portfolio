"use client"

import { motion } from "framer-motion"
import { MessageCircle } from "lucide-react"
import { getIcon } from "@/lib/icons"
import SectionTitle from "./ui/SectionTitle"
import data from "@/data/site-data.json"

export default function Services() {
  const { services, personal } = data

  return (
    <section id="services" className="relative py-24 md:py-32 bg-white dark:bg-slate-900/50 overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/3 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/3 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle title="What I Offer" subtitle="Services" />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => {
            const Icon = getIcon(service.icon)
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                whileHover={{ y: -4 }}
                className={`group relative rounded-2xl p-6 sm:p-8 transition-all duration-300 ${
                  service.free
                    ? "bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-900/20 dark:to-teal-900/20 border-2 border-emerald-400 dark:border-emerald-500 shadow-xl shadow-emerald-200/50 dark:shadow-emerald-900/30"
                    : "bg-white dark:bg-slate-800/80 border border-gray-100 dark:border-slate-700 shadow-lg hover:shadow-xl"
                }`}
              >
                {service.free && (
                  <div className="absolute -top-3 -right-3 px-4 py-1 rounded-full bg-gradient-to-r from-emerald-500 to-green-500 text-white text-xs font-bold shadow-lg">
                    FREE
                  </div>
                )}

                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center shadow-lg mb-5 group-hover:scale-110 transition-transform duration-300`}>
                  {Icon && <Icon className="w-7 h-7 text-white" />}
                </div>

                <h3 className="text-xl font-display font-bold text-heading dark:text-heading-dark mb-1">
                  {service.title}
                </h3>
                <p className="text-sm font-medium text-primary dark:text-secondary mb-3">
                  {service.subtitle}
                </p>
                <p className="text-sm text-text dark:text-text-light leading-relaxed mb-6">
                  {service.description}
                </p>

                <div className="flex items-center justify-between pt-4 border-t border-gray-100 dark:border-slate-700">
                  <span className={`text-lg font-bold font-display ${service.free ? "text-emerald-600 dark:text-emerald-400" : "text-heading dark:text-heading-dark"}`}>
                    {service.price}
                  </span>
                  <div className="flex gap-2">
                    {service.telegram && (
                      <a
                        href={personal.telegramUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2.5 rounded-xl bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 hover:bg-blue-100 dark:hover:bg-blue-900/50 transition-colors"
                        aria-label="Telegram"
                      >
                        <MessageCircle className="w-4 h-4" />
                      </a>
                    )}
                    <button
                      className={`px-4 py-2 rounded-xl text-sm font-semibold transition-all duration-300 ${
                        service.free
                          ? "bg-gradient-to-r from-emerald-500 to-green-500 text-white shadow-lg hover:shadow-xl hover:scale-105"
                          : "bg-primary text-white shadow-lg hover:shadow-xl hover:scale-105"
                      }`}
                    >
                      {service.cta}
                    </button>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
