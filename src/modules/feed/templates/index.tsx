"use client"

import { useState } from "react"
import { Search } from "lucide-react"
import ProfileCard from "../sections/profile-card"
import Filters from "../sections/filters"
import HiringAgencies from "../sections/hiring-agencies"
import SuggestedLeads from "../sections/suggested-leads"
import MvpPurpose from "../sections/mvp-purpose"
import CreatorFeed from "../sections/creator-card"
import MobileNavbar from "@/components/ui/layout/MobileNavbar"

export default function FeedTemplate() {
  const [searchQuery, setSearchQuery] = useState("")

  return (
    <div className="bg-[#FAFBFC] min-h-screen px-4 py-6 md:p-8 md:pb-8">
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* SIDEBAR - HIDDEN ON MOBILE */}
        <aside className="hidden lg:flex col-span-3 flex-col gap-6">
          <ProfileCard />
          <MvpPurpose />
          <Filters />
        </aside>

        {/* CENTER FEED */}
        <main className="col-span-1 lg:col-span-6 space-y-4">
          
          {/* Search Input - Hidden on Mobile (Moved to Header) */}
          <div className="hidden md:block relative group w-full">
            <Search className="absolute left-5 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search by name, niche or platform"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-white border-none rounded-full py-4 pl-14 pr-6 shadow-sm focus:ring-2 focus:ring-red-100 outline-none transition-all text-[15px]"
            />
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

          <CreatorFeed searchQuery={searchQuery} />
        </main>

        {/* RIGHT SIDEBAR - Hidden on mobile except specific components if needed */}
        <aside className="hidden lg:block col-span-3 space-y-6">
          <HiringAgencies />
          <div className="w-full bg-[#FFF1F1] p-6 rounded-[2rem] shadow-sm">
             {/* Mission content... */}
          </div>
          <SuggestedLeads />
        </aside>
      </div>
      
      {/* Add the Mobile Navbar here */}
      <MobileNavbar />
    </div>
  )
}