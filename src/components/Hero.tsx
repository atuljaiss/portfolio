"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { ArrowRight, MessageCircle, TrendingUp } from "lucide-react"
import { getIcon } from "@/lib/icons"
import Button from "./ui/Button"
import data from "@/data/site-data.json"

export default function Hero() {
  const { hero, personal } = data

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.3 },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  }

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-50/80 via-white to-yellow-50/30 dark:from-bg-dark dark:via-slate-900 dark:to-bg-dark" />

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-pulse-glow" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/5 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: "1.5s" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/3 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center"
        >
          <div className="space-y-8">
            <motion.div variants={itemVariants}>
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium bg-primary/10 text-primary dark:bg-secondary/10 dark:text-secondary border border-primary/10 dark:border-secondary/10">
                <TrendingUp className="w-4 h-4" />
                {hero.badge}
              </span>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-display font-bold leading-[1.1] text-heading dark:text-heading-dark"
            >
              {hero.headline.split(hero.headlineGradient)[0]}
              <span className="gradient-text">{hero.headlineGradient}</span>
              {hero.headline.split(hero.headlineGradient)[1]}
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-lg text-text dark:text-text-light leading-relaxed max-w-xl"
            >
              {hero.subheadline}
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex flex-wrap gap-4 pt-2"
            >
              {hero.ctaButtons.map((btn) => (
                <Button
                  key={btn.label}
                  variant={btn.variant as "primary" | "outline"}
                  size="lg"
                  href={btn.href}
                  icon={btn.icon === "MessageCircle" ? <MessageCircle className="w-5 h-5" /> : <ArrowRight className="w-5 h-5" />}
                >
                  {btn.label}
                </Button>
              ))}
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="flex flex-wrap items-center gap-6 pt-4"
            >
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="w-10 h-10 rounded-full border-2 border-white dark:border-slate-800 bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white text-xs font-bold shadow-lg"
                  >
                    {String.fromCharCode(64 + i)}
                  </div>
                ))}
              </div>
              <div>
                <p className="text-sm font-semibold text-heading dark:text-heading-dark">
                  {hero.socialProof.count} {hero.socialProof.label}
                </p>
                <p className="text-xs text-text dark:text-text-light">
                  {hero.socialProof.subtext}
                </p>
              </div>
            </motion.div>
          </div>

          <motion.div
            variants={itemVariants}
            className="relative lg:pl-10"
          >
            <div className="relative">
              <div className="w-full aspect-[4/5] rounded-3xl bg-gradient-to-br from-primary/20 via-accent/10 to-secondary/20 dark:from-primary/10 dark:via-accent/5 dark:to-secondary/10 flex items-center justify-center overflow-hidden">
                <Image
                  src={personal.image}
                  alt={`${personal.name} - Financial Advisor`}
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/30 via-transparent to-transparent" />
              </div>

              {hero.floatingCards.map((card, i) => {
                const Icon = getIcon(card.icon)
                const position = hero.floatingCardPositions[i] || "-bottom-4 -right-4"
                return (
                  <motion.div
                    key={card.label}
                    initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20, y: 20 }}
                    animate={{ opacity: 1, x: 0, y: 0 }}
                    transition={{ delay: 0.8 + i * 0.15, duration: 0.5 }}
                    className={`absolute ${position} bg-white/90 dark:bg-slate-800/90 backdrop-blur-xl rounded-2xl p-4 shadow-xl flex items-center gap-3 border border-gray-100 dark:border-slate-700`}
                    style={{ animation: `float 6s ease-in-out ${i * 0.5}s infinite` }}
                  >
                    <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${card.color} flex items-center justify-center shadow-lg`}>
                      {Icon && <Icon className="w-5 h-5 text-white" />}
                    </div>
                    <span className="text-sm font-semibold text-heading dark:text-heading-dark whitespace-nowrap">
                      {card.label}
                    </span>
                  </motion.div>
                )
              })}
            </div>
          </motion.div>
        </motion.div>
      </div>

      <button
        onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce cursor-pointer"
        aria-label="Scroll to About section"
      >
        <svg className="w-6 h-6 text-text-light" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </button>
    </section>
  )
}
