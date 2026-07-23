"use client"

import { cn } from "@/lib/utils"
import { motion } from "framer-motion"

interface ButtonProps {
  children: React.ReactNode
  variant?: "primary" | "secondary" | "outline" | "ghost" | "gold"
  size?: "sm" | "md" | "lg"
  href?: string
  onClick?: () => void
  className?: string
  type?: "button" | "submit"
  icon?: React.ReactNode
}

export default function Button({
  children,
  variant = "primary",
  size = "md",
  href,
  onClick,
  className,
  type = "button",
  icon,
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center gap-2 font-medium rounded-xl transition-all duration-300 cursor-pointer"

  const variants = {
    primary:
      "bg-primary text-white hover:bg-primary-dark shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30",
    secondary:
      "bg-secondary text-[#0F172A] hover:bg-secondary-light shadow-lg shadow-secondary/25 hover:shadow-xl hover:shadow-secondary/30",
    outline:
      "border-2 border-primary text-primary hover:bg-primary hover:text-white",
    ghost:
      "text-primary hover:bg-primary/10",
    gold:
      "bg-gradient-to-r from-secondary to-yellow-500 text-[#0F172A] font-semibold shadow-lg shadow-secondary/25 hover:shadow-xl hover:shadow-secondary/30",
  }

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-sm",
    lg: "px-8 py-4 text-base",
  }

  const content = (
    <motion.div
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={cn(base, variants[variant], sizes[size], className)}
      onClick={onClick}
    >
      {icon && <span className="w-5 h-5">{icon}</span>}
      {children}
    </motion.div>
  )

  if (href) {
    return (
      <a href={href} target={href.startsWith("http") ? "_blank" : undefined} rel={href.startsWith("http") ? "noopener noreferrer" : undefined}>
        {content}
      </a>
    )
  }

  return (
    <button type={type} onClick={onClick}>
      {content}
    </button>
  )
}
