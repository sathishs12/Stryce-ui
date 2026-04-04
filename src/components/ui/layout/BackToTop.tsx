"use client"

import { useEffect, useState } from "react"
import { ArrowUp } from "lucide-react"

export default function BackToTop() {
  const [show, setShow] = useState(false)

  useEffect(() => {
    let lastScroll = 0

    const handleScroll = () => {
      const currentScroll = window.scrollY

      // ❌ hide if not scrolled enough
      if (currentScroll < 300) {
        setShow(false)
        lastScroll = currentScroll
        return
      }

      // prevent small jitter
      if (Math.abs(currentScroll - lastScroll) < 10) return

      if (currentScroll < lastScroll) {
        // ✅ scrolling UP → show
        setShow(true)
      } else {
        // ❌ scrolling DOWN → hide
        setShow(false)
      }

      lastScroll = currentScroll
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  if (!show) return null

  return (
    <button
      onClick={() =>
        window.scrollTo({ top: 0, behavior: "smooth" })
      }
      className="
  fixed right-4 bottom-18 md:bottom-6 z-50
  bg-red-500 hover:bg-red-600 text-white
  p-3 rounded-full shadow-lg
  transition-all duration-300
"
    >
      <ArrowUp className="w-5 h-5" />
    </button>
  )
}