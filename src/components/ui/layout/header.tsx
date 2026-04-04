"use client"
import * as React from "react"
import { usePathname, useRouter, useSearchParams } from "next/navigation"
import { Settings, RefreshCcw, User, Building2, Search, SlidersHorizontal } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger, SheetDescription } from "@/components/ui/sheet"
import Link from "next/link"
import Filters from "@/modules/feed/sections/filters"
import { X } from "lucide-react"
import { useEffect, useState } from "react"

export default function Header() {
  const pathname = usePathname()
  const router = useRouter()
  const searchParams = useSearchParams()
const search = searchParams.get("q") || "" 
  const searchQuery = searchParams.get("q") || ""

  const isAuthPage = pathname === "/" || pathname === "/signup" || pathname === "/post-job"
  const isSignupPage = pathname === "/signup"
  const loginType = searchParams.get("type")
  const urlQuery = searchParams.get("q") || ""
const [showHeader, setShowHeader] = useState(true)
const [lastScrollY, setLastScrollY] = useState(0)

useEffect(() => {
  const handleScroll = () => {
    // ✅ apply only on mobile screens
    if (window.innerWidth >= 768) {
      setShowHeader(true)
      return
    }

    const currentScroll = window.scrollY

    if (currentScroll > lastScrollY && currentScroll > 80) {
      setShowHeader(false)
    } else {
      setShowHeader(true)
    }

    setLastScrollY(currentScroll)
  }

  window.addEventListener("scroll", handleScroll)
  return () => window.removeEventListener("scroll", handleScroll)
}, [lastScrollY])
// ✅ local state
const [inputValue, setInputValue] = useState(urlQuery)

// ✅ sync when URL changes
useEffect(() => {
  setInputValue(urlQuery)
}, [urlQuery])

// ✅ debounce URL update
useEffect(() => {
  const delay = setTimeout(() => {
    const params = new URLSearchParams(searchParams.toString())

    if (inputValue) {
      params.set("q", inputValue)
    } else {
      params.delete("q")
    }

    router.replace(`?${params.toString()}`) // ✅ important
  }, 400)

  return () => clearTimeout(delay)
}, [inputValue])

const handleSearch = (value: string) => {
  const params = new URLSearchParams(searchParams.toString())

  if (value) {
    params.set("q", value)
  } else {
    params.delete("q")
  }

  router.push(`?${params.toString()}`)
}

  return (
<header
  className={`fixed top-0 left-0 w-full z-50 transition-transform duration-300 ${
    showHeader ? "translate-y-0" : "-translate-y-full"
  } bg-white/80 backdrop-blur-md border-b`}
>
    {/* // <header className="sticky top-0 z-50 w-full border-b border-gray-100 bg-white/80 backdrop-blur-md"> */}
      <div className="flex w-full items-center justify-between px-4 sm:px-6 md:px-12 py-3">

        {/* LEFT — LOGO */}
        <Link href="/" className="flex items-center gap-2 flex-shrink-0">
          <div className="flex h-8 w-8 md:h-10 md:w-10 items-center justify-center rounded-lg md:rounded-xl bg-[#EF4444] text-sm md:text-[15px] font-black text-white">
            SY
          </div>
          <div className={`flex-col leading-tight ${isAuthPage ? "flex" : "hidden sm:flex"}`}>
            <span className="font-bold text-gray-900 text-base">Stryce</span>
            <span className="text-[10px] text-gray-400 hidden sm:block">Leads not link</span>
          </div>
        </Link>

        {/* RIGHT — AUTH BUTTONS */}
        {isAuthPage ? (
          <div className="flex items-center gap-1.5 sm:gap-3 flex-nowrap">
            {isSignupPage ? (
              <>
                {loginType === "organization" ? (
                  <Button
                    variant="outline"
                    className="rounded-full text-[11px] sm:text-sm px-2.5 sm:px-4 h-8 sm:h-9 whitespace-nowrap"
                    onClick={() => router.push("/signup?type=individual")}
                  >
                    <User className="h-4 w-4 sm:hidden" />
                    <span className="hidden sm:inline">Individual Signup</span>
                  </Button>
                ) : (
                  <Button
                    variant="outline"
                    className="rounded-full text-[11px] sm:text-sm px-2.5 sm:px-4 h-8 sm:h-9 whitespace-nowrap"
                    onClick={() => router.push("/signup?type=organization")}
                  >
                    <Building2 className="h-4 w-4 sm:hidden" />
                    <span className="hidden sm:inline">Organization Signup</span>
                  </Button>
                )}
              </>
            ) : (
              <>
                {loginType === "organization" ? (
                  <Button
                    variant="outline"
                    className="rounded-full text-[11px] sm:text-sm px-2.5 sm:px-4 h-8 sm:h-9 whitespace-nowrap"
                    onClick={() => router.push("/?type=individual")}
                  >
                    <User className="h-4 w-4 sm:hidden" />
                    <span className="hidden sm:inline">Individual Login</span>
                  </Button>
                ) : (
                  <Button
                    variant="outline"
                    className="rounded-full text-[11px] sm:text-sm px-2.5 sm:px-4 h-8 sm:h-9 whitespace-nowrap"
                    onClick={() => router.push("/?type=organization")}
                  >
                    <Building2 className="h-4 w-4 sm:hidden" />
                    <span className="hidden sm:inline">Organization Login</span>
                  </Button>
                )}
              </>
            )}

            <Button
  onClick={() => router.push("/post-job")}
  className="bg-red-500 hover:bg-red-600 text-white rounded-full text-[11px] sm:text-sm px-2.5 sm:px-5 h-8 sm:h-9 whitespace-nowrap"
>
  Post a Job
</Button>
          </div>

        ) : (
          <>
            {/* MOBILE — search input + filter sheet */}
            <div className="flex md:hidden flex-1 items-center gap-2 px-3">
            <div className="relative flex-1">
  <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />

  <input
    type="text"
    value={inputValue}
    onChange={(e) => setInputValue(e.target.value)}
    placeholder="Search..."
    className="w-full bg-gray-100 border-none rounded-full py-2 pl-9 pr-10 text-xs focus:ring-1 focus:ring-red-200 outline-none"
  />

  {/* ✅ CLEAR BUTTON */}
  {inputValue && (
    <button
      onClick={() => setInputValue("")}
      className="absolute right-3 top-1/2 -translate-y-1/2 p-1 rounded-full hover:bg-gray-200"
    >
      <X className="h-4 w-4 text-gray-500" />
    </button>
  )}
</div>
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon" className="h-9 w-9 bg-gray-100 rounded-full flex-shrink-0">
                    <SlidersHorizontal className="h-4 w-4 text-gray-600" />
                  </Button>
                </SheetTrigger>
                <SheetContent side="bottom" className="rounded-t-[2rem] h-[80vh] p-0">
                  <SheetHeader className="p-6 border-b">
                    <SheetTitle>Filters</SheetTitle>
                    <SheetDescription className="sr-only">Adjust your feed settings</SheetDescription>
                  </SheetHeader>
                  <div className="overflow-y-auto h-full pb-20">
                    <Filters />
                  </div>
                </SheetContent>
              </Sheet>
            </div>

            {/* DESKTOP NAV — hidden on mobile */}
<nav className="hidden md:flex items-center gap-1">
  
  {/* FEED */}
  <Link href="/feed">
    <Button variant="ghost"
      className={`rounded-full px-5 text-xs font-bold h-9 ${
        pathname === "/feed"
          ? "bg-red-500 text-white"
          : "text-gray-500 hover:bg-gray-100"
      }`}
    >
      Feed
    </Button>
  </Link>

  {/* COMPANY DASHBOARD */}
  <Link href="/company-dashboard">
    <Button
      variant="ghost"
      className={`rounded-full text-xs font-semibold ${
        pathname === "/company-dashboard"
          ? "bg-red-500 text-white"
          : "text-gray-500"
      }`}
    >
      Company Dashboard
    </Button>
  </Link>

  {/* FREELANCER */}
  <Link href="/freelancer-dashboard">
    <Button
      variant="ghost"
      className={`rounded-full text-xs font-semibold ${
        pathname === "/freelancer-dashboard"
          ? "bg-red-500 text-white"
          : "text-gray-500"
      }`}
    >
      Freelancer Dashboard
    </Button>
  </Link>

  {/* ADMIN */}
  <Link href="/admin">
    <Button
      variant="ghost"
      className={`rounded-full text-xs font-semibold ${
        pathname === "/admin"
          ? "bg-red-500 text-white"
          : "text-gray-500"
      }`}
    >
      Admin
    </Button>
  </Link>

</nav>

            {/* DESKTOP RIGHT ICONS */}
            <div className="hidden md:flex items-center gap-3">
              <Settings className="h-5 w-5 text-gray-400 cursor-pointer hover:text-gray-600 transition-colors" />
              <RefreshCcw className="h-5 w-5 text-gray-400 cursor-pointer hover:text-gray-600 transition-colors" />
              <div className="h-9 w-9 rounded-full bg-gray-200" />
            </div>
          </>
        )}

      </div>
    </header>
  )
}