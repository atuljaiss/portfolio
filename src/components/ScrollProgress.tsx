"use client"

import { useEffect, useRef } from "react"

export default function ScrollProgress() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const onScroll = () => {
      if (!ref.current) return
      const scrollTop = window.scrollY
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      const progress = docHeight > 0 ? scrollTop / docHeight : 0
      ref.current.style.transform = `scaleX(${progress})`
    }
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <div
      ref={ref}
      className="fixed top-0 left-0 right-0 z-[60] h-[3px] bg-gradient-to-r from-primary via-secondary to-accent origin-left"
      style={{ transform: "scaleX(0)" }}
    />
  )
}
