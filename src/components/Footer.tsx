"use client"

import { TrendingUp, MessageCircle } from "lucide-react"
import { motion } from "framer-motion"
import { getIcon } from "@/lib/icons"
import data from "@/data/site-data.json"

export default function Footer() {
  const { footer, personal } = data

  return (
    <footer className="relative bg-slate-900 dark:bg-black text-white overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16">
          <div className="lg:col-span-1">
            <a href="#home" className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                <TrendingUp className="w-5 h-5 text-white" />
              </div>
              <span className="font-display text-xl font-bold">
                GT <span className="text-secondary">Markets</span>
              </span>
            </a>
            <p className="text-sm text-slate-400 leading-relaxed mb-6">
              {footer.description}
            </p>
            <div className="flex gap-3">
              {footer.socials?.map((s) => {
                const Icon = getIcon(s.icon)
                return (
                  <motion.a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -2 }}
                    className="w-9 h-9 rounded-xl bg-slate-800 hover:bg-primary/20 flex items-center justify-center text-slate-400 hover:text-primary transition-all"
                    aria-label={s.label}
                  >
                    {Icon && <Icon className="w-4 h-4" />}
                  </motion.a>
                )
              })}
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-300 mb-6">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {footer.quickLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-sm text-slate-400 hover:text-secondary transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-300 mb-6">
              Services
            </h4>
            <ul className="space-y-3">
              {footer.services.map((s) => (
                <li key={s.label}>
                  <a href={s.href} className="text-sm text-slate-400 hover:text-secondary transition-colors">
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-300 mb-6">
              Disclaimer
            </h4>
            <p className="text-xs text-slate-500 leading-relaxed">
              {footer.disclaimer}
            </p>
            <div className="mt-6 p-4 rounded-xl bg-slate-800/50 border border-slate-700">
              <p className="text-xs text-slate-400">
                <strong className="text-slate-300">Location:</strong> {personal.location}
              </p>
              <p className="text-xs text-slate-400 mt-1">
                <strong className="text-slate-300">Email:</strong> {personal.email}
              </p>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-slate-800 text-center">
          <p className="text-sm text-slate-500">
            &copy; {new Date().getFullYear()} {footer.copyright}
          </p>
        </div>
      </div>
    </footer>
  )
}
