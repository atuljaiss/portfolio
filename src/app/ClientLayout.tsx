"use client"

import { useEffect, useState } from "react"
import ThemeProvider from "@/components/ThemeProvider"
import Navbar from "@/components/Navbar"
import ScrollProgress from "@/components/ScrollProgress"
import BackToTop from "@/components/BackToTop"
import StickyCTA from "@/components/StickyCTA"
import FloatingButtons from "@/components/FloatingButtons"
import LoadingScreen from "@/components/LoadingScreen"

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <ThemeProvider>
      <LoadingScreen />
      <ScrollProgress />
      <Navbar />
      <main>{children}</main>
      <BackToTop />
      <StickyCTA />
      <FloatingButtons />
    </ThemeProvider>
  )
}
