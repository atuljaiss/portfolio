"use client"

import { motion } from "framer-motion"
import { MessageCircle, Phone, Mail, MapPin, Send } from "lucide-react"
import { getIcon } from "@/lib/icons"
import data from "@/data/site-data.json"

export default function Contact() {
  const { contact, personal } = data

  return (
    <section id="contact" className="relative py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-50/50 to-white dark:from-bg-dark dark:to-slate-900/50 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto mb-16 text-center"
        >
          <span className="inline-block text-sm font-semibold tracking-widest uppercase text-primary dark:text-secondary mb-4">
            {contact.sectionTag}
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-bold leading-tight text-heading dark:text-heading-dark">
            {contact.sectionTitle}
          </h2>
          <div className="w-20 h-1 mt-6 mx-auto rounded-full" style={{ background: "linear-gradient(90deg, #2B6B4E, #C49A5C)" }} />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
          >
            <form className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                {contact.formFields.slice(0, 2).map((field) => (
                  <div key={field.label}>
                    <label className="block text-sm font-medium text-heading dark:text-heading-dark mb-2">
                      {field.label}
                    </label>
                    <input
                      type={field.type}
                      placeholder={field.placeholder}
                      className="w-full px-4 py-3.5 rounded-xl bg-white dark:bg-slate-800/80 border border-gray-200 dark:border-slate-700 text-heading dark:text-heading-dark placeholder:text-text-light focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary dark:focus:border-secondary transition-all"
                    />
                  </div>
                ))}
              </div>
              {contact.formFields.slice(2).map((field) => (
                <div key={field.label}>
                  <label className="block text-sm font-medium text-heading dark:text-heading-dark mb-2">
                    {field.label}
                  </label>
                  {field.type === "textarea" ? (
                    <textarea
                      rows={field.rows || 4}
                      placeholder={field.placeholder}
                      className="w-full px-4 py-3.5 rounded-xl bg-white dark:bg-slate-800/80 border border-gray-200 dark:border-slate-700 text-heading dark:text-heading-dark placeholder:text-text-light focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary dark:focus:border-secondary transition-all resize-none"
                    />
                  ) : (
                    <input
                      type={field.type}
                      placeholder={field.placeholder}
                      className="w-full px-4 py-3.5 rounded-xl bg-white dark:bg-slate-800/80 border border-gray-200 dark:border-slate-700 text-heading dark:text-heading-dark placeholder:text-text-light focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary dark:focus:border-secondary transition-all"
                    />
                  )}
                </div>
              ))}
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-gradient-to-r from-primary to-accent text-white font-semibold shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 transition-all duration-300"
              >
                <Send className="w-4 h-4" />
                {contact.submitCta}
              </motion.button>
            </form>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="rounded-2xl bg-white dark:bg-slate-800/80 p-6 sm:p-8 border border-gray-100 dark:border-slate-700 shadow-lg">
              <h3 className="text-xl font-display font-bold text-heading dark:text-heading-dark mb-6">
                {contact.quickConnect.title}
              </h3>
              <div className="space-y-4">
                {contact.quickConnect.channels.map((channel) => {
                  if (channel.isLocation) {
                    return (
                      <div key={channel.label} className="flex items-center gap-4 p-4 rounded-xl bg-gray-50 dark:bg-slate-700/30 text-text dark:text-text-light">
                        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-secondary to-yellow-500 flex items-center justify-center shadow-lg">
                          <MapPin className="w-5 h-5 text-[#0F172A]" />
                        </div>
                        <div>
                          <p className="text-sm font-semibold text-heading dark:text-heading-dark">
                            {channel.label}
                          </p>
                          <p className="text-xs opacity-75">{channel.subtext}</p>
                        </div>
                      </div>
                    )
                  }
                  const Icon = getIcon(channel.icon)
                  return (
                    <a
                      key={channel.label}
                      href={channel.href || "#"}
                      target={channel.href?.startsWith("http") ? "_blank" : undefined}
                      rel={channel.href?.startsWith("http") ? "noopener noreferrer" : undefined}
                      className={`flex items-center gap-4 p-4 rounded-xl ${channel.bgLight} ${channel.bgDark} ${channel.textLight} ${channel.textDark} hover:opacity-90 transition-colors group`}
                    >
                      <div className={`w-12 h-12 rounded-xl ${channel.color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform`}>
                        {Icon && <Icon className="w-5 h-5 text-white" />}
                      </div>
                      <div>
                        <p className="text-sm font-semibold">{channel.label}</p>
                        <p className="text-xs opacity-75">{channel.subtext}</p>
                      </div>
                    </a>
                  )
                })}
              </div>
            </div>

            <div className="rounded-2xl bg-gradient-to-br from-primary/5 to-accent/5 dark:from-primary/10 dark:to-accent/5 p-6 sm:p-8 border border-primary/10 dark:border-primary/20 text-center">
              <p className="text-lg font-display font-bold text-heading dark:text-heading-dark mb-2">
                {contact.bottomCta.title}
              </p>
              <p className="text-sm text-text dark:text-text-light">
                {contact.bottomCta.subtext}
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
