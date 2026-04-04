// "use client"

// import { useState } from "react"
// import { Search } from "lucide-react"
// import ProfileCard from "../sections/profile-card"
// import Filters from "../sections/filters"
// import HiringAgencies from "../sections/hiring-agencies"
// import SuggestedLeads from "../sections/suggested-leads"
// import MvpPurpose from "../sections/mvp-purpose"
// import CreatorFeed from "../sections/creator-card"
// import MobileNavbar from "@/components/ui/layout/MobileNavbar"
// import { usePathname } from "next/navigation"

// export default function FeedTemplate() {
//   const [searchQuery, setSearchQuery] = useState("")
//   const pathname = usePathname()

//   const shouldHideNavbar =
//     pathname === "/" || pathname.startsWith("/signup")


//   // const shouldHideNavbar = hideNavbarRoutes.includes(pathname)
//   return (
//     <div className="bg-[#FAFBFC] min-h-screen px-4 py-6 pb-24 md:p-8 md:pb-8">
//       <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8">
        
//         {/* SIDEBAR - HIDDEN ON MOBILE */}
//         <aside className="hidden lg:flex col-span-3 flex-col gap-6">
//           <ProfileCard />
//           <MvpPurpose />
//           <Filters />
//         </aside>

//         {/* CENTER FEED */}
//         <main className="col-span-1 lg:col-span-6 space-y-4">
          
//           {/* Search Input - Hidden on Mobile (Moved to Header) */}
//           <div className="hidden md:block relative group w-full">
//             <Search className="absolute left-5 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
//             <input
//               type="text"
//               placeholder="Search by name, niche or platform"
//               value={searchQuery}
//               onChange={(e) => setSearchQuery(e.target.value)}
//               className="w-full bg-white border-none rounded-full py-4 pl-14 pr-6 shadow-sm focus:ring-2 focus:ring-red-100 outline-none transition-all text-[15px]"
//             />
//           </div>

//           {/* Feed Header */}
//           <div className="flex flex-col md:flex-row md:items-center justify-between px-2 gap-3 mb-4">
//             <h2 className="text-[13px] md:text-[15px] font-bold text-gray-800">
//               Work Feed <span className="text-gray-400 mx-1">/</span> Performers Only
//             </h2>
//             <div className="inline-flex h-[27px] border-[0.5px] border-[#2571FF] rounded-full items-center px-4 bg-white shadow-sm">
//               <span className="text-[#2571FF] text-[9px] md:text-[10px] font-bold uppercase">
//                 Media-first ● Work Only
//               </span>
//             </div>
//           </div>

//           <CreatorFeed searchQuery={searchQuery} />
//         </main>

//         {/* RIGHT SIDEBAR - Hidden on mobile except specific components if needed */}
//         <aside className="hidden lg:block col-span-3 space-y-6">
//           <HiringAgencies />
//         <div className="w-full bg-[#FFF1F1] rounded-[24px] overflow-hidden border border-[#F3DADA]">

//   {/* HEADER */}
//   <div className="flex items-center gap-3 px-5 py-4 border-b border-[#F3DADA]">
//     <div className="h-8 w-8 rounded-full bg-[#ED1D25] flex items-center justify-center">
//       <span className="text-white font-bold text-sm">!</span>
//     </div>

//     <p className="text-[16px] font-semibold text-black">
//       The Stryce Mission
//     </p>
//   </div>

//   {/* CONTENT */}
//   <div className="px-5 py-5">
//     <p className="text-[14px] leading-relaxed text-gray-600">
//       This is not a social network. The feed is engineered for{" "}
//       <span className="text-black font-semibold">
//         unlock intent
//       </span>{" "}
//       — media-first, work-only posts that make it safe to buy.
//     </p>

//     {/* CTA */}
//     <button className="mt-5 text-[#ED1D25] font-semibold text-[15px] flex items-center gap-1 hover:gap-2 transition-all">
//       Learn More →
//     </button>
//   </div>

// </div>
//           <SuggestedLeads />
//         </aside>
//       </div>
      
//       {/* Add the Mobile Navbar here */}
//       {!shouldHideNavbar && <MobileNavbar />}
//     </div>
//   )
// }

"use client"

import { Search } from "lucide-react"
import ProfileCard from "../sections/profile-card"
import Filters from "../sections/filters"
import HiringAgencies from "../sections/hiring-agencies"
import SuggestedLeads from "../sections/suggested-leads"
import MvpPurpose from "../sections/mvp-purpose"
import CreatorFeed from "../sections/creator-card"
import MobileNavbar from "@/components/ui/layout/MobileNavbar"
import { usePathname, useSearchParams } from "next/navigation"
import { useRouter } from "next/navigation"
import { X } from "lucide-react"
import { useEffect, useState } from "react"

export default function FeedTemplate() {

const router = useRouter()

  const pathname = usePathname()
  const searchParams = useSearchParams()
  // ✅ ONLY ONE SOURCE OF TRUTH
  const searchQuery = searchParams.get("q") || ""
const handleSearch = (value: string) => {
  const params = new URLSearchParams(searchParams.toString())

  if (value) {
    params.set("q", value)
  } else {
    params.delete("q")
  }

  router.push(`?${params.toString()}`)
}
// ✅ get value from URL
const urlQuery = searchParams.get("q") || ""

// ✅ local state (for smooth typing)
const [inputValue, setInputValue] = useState(urlQuery)

// ✅ sync when URL changes (important)
useEffect(() => {
  setInputValue(urlQuery)
}, [urlQuery])

// ✅ debounce effect
useEffect(() => {
  const delayDebounce = setTimeout(() => {
    const params = new URLSearchParams(searchParams.toString())

    if (inputValue) {
      params.set("q", inputValue)
    } else {
      params.delete("q")
    }

    router.replace(`?${params.toString()}`) // ✅ no history spam
  }, 400) // ⏱ debounce time

  return () => clearTimeout(delayDebounce)
}, [inputValue])
  const shouldHideNavbar =
    pathname === "/" || pathname.startsWith("/signup")

  return (
    // <div className="bg-[#FAFBFC] min-h-screen px-4 py-6 pb-24 md:p-8 md:pb-8">
    <div className="bg-[#FAFBFC] min-h-screen px-4 pt-[70px] py-6 pb-24 md:p-8 md:pt-[80px] md:pb-8">
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* SIDEBAR */}
        <aside className="hidden lg:flex col-span-3 flex-col gap-6">
          <ProfileCard />
          <MvpPurpose />
          <Filters />
        </aside>

        {/* CENTER FEED */}
        <main className="col-span-1 lg:col-span-6 space-y-4">
          
          {/* ✅ DESKTOP SEARCH (SYNCED WITH URL) */}
         <div className="hidden md:block relative w-full">
  <Search className="absolute left-5 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />

  <input
    type="text"
    value={inputValue}
    onChange={(e) => setInputValue(e.target.value)}
    placeholder="Search by name, niche or platform"
    className="w-full bg-white border-none rounded-full py-4 pl-14 pr-12 shadow-sm focus:ring-2 focus:ring-red-100 outline-none text-[15px]"
  />

  {inputValue && (
    <button
      onClick={() => setInputValue("")}
      className="absolute right-4 top-1/2 -translate-y-1/2 p-1 rounded-full hover:bg-gray-100"
    >
      <X className="h-4 w-4 text-gray-500" />
    </button>
  )}
</div>

          {/* Feed Header */}
          <div className="flex flex-col md:flex-row md:items-center justify-between px-2 gap-3 mb-4">
            <h2 className="text-[13px] md:text-[15px] font-bold text-gray-800">
              Work Feed <span className="text-gray-400 mx-1">/</span> Performers Only
            </h2>
            <div className="inline-flex h-[27px] border-[0.5px] border-[#2571FF] rounded-full items-center px-4 bg-white shadow-sm">
              <span className="text-[#2571FF] text-[9px] md:text-[10px] font-bold uppercase">
                Media-first ● Work Only
              </span>
            </div>
          </div>

          {/* ✅ SEARCH WORKS HERE */}
          <CreatorFeed searchQuery={searchQuery} />
        </main>

        {/* RIGHT SIDEBAR */}
        <aside className="hidden lg:block col-span-3 space-y-6">
          <HiringAgencies />

          <div className="w-full bg-[#FFF1F1] rounded-[24px] overflow-hidden border border-[#F3DADA]">
            <div className="flex items-center gap-3 px-5 py-4 border-b border-[#F3DADA]">
              <div className="h-8 w-8 rounded-full bg-[#ED1D25] flex items-center justify-center">
                <span className="text-white font-bold text-sm">!</span>
              </div>

              <p className="text-[16px] font-semibold text-black">
                The Stryce Mission
              </p>
            </div>

            <div className="px-5 py-5">
              <p className="text-[14px] leading-relaxed text-gray-600">
                This is not a social network. The feed is engineered for{" "}
                <span className="text-black font-semibold">
                  unlock intent
                </span>{" "}
                — media-first, work-only posts that make it safe to buy.
              </p>

              <button className="mt-5 text-[#ED1D25] font-semibold text-[15px] flex items-center gap-1 hover:gap-2 transition-all">
                Learn More →
              </button>
            </div>
          </div>

          <SuggestedLeads />
        </aside>
      </div>

      {/* MOBILE NAVBAR */}
      {!shouldHideNavbar && <MobileNavbar />}
    </div>
  )
}