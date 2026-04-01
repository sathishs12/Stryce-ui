"use client"

import { usePathname } from "next/navigation"
import Header from "./header"

export default function ConditionalHeader() {
  const pathname = usePathname()
  const authRoutes = ["/", "/signup"]
  if (authRoutes.includes(pathname)) return null
  return <Header />
}