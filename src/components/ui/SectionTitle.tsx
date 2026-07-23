"use client"

import { motion } from "framer-motion"

interface SectionTitleProps {
  title: string
  subtitle?: string
  centered?: boolean
  light?: boolean
}

export default function SectionTitle({
  title,
  subtitle,
  centered = true,
  light = false,
}: SectionTitleProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6 }}
      className={cn(
        "max-w-3xl mb-16",
        centered && "mx-auto text-center"
      )}
    >
      <span className="inline-block text-sm font-semibold tracking-widest uppercase text-primary dark:text-secondary mb-4">
        {subtitle || "What I Offer"}
      </span>
      <h2
        className={cn(
          "text-4xl md:text-5xl font-display font-bold leading-tight",
          light ? "text-white" : "text-heading dark:text-heading-dark"
        )}
      >
        {title}
      </h2>
      <div
        className={cn(
          "w-20 h-1 mt-6 mx-auto rounded-full",
          centered ? "mx-auto" : ""
        )}
        style={{
          background: "linear-gradient(90deg, #2B6B4E, #C49A5C)",
        }}
      />
    </motion.div>
  )
}

function cn(...classes: (string | boolean | undefined | null)[]) {
  return classes.filter(Boolean).join(" ")
}
