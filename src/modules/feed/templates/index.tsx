"use client"

import { useState } from "react"
import { Search } from "lucide-react"
import ProfileCard from "../sections/profile-card"
import Filters from "../sections/filters"
import HiringAgencies from "../sections/hiring-agencies"
import SuggestedLeads from "../sections/suggested-leads"
import MvpPurpose from "../sections/mvp-purpose"
import CreatorFeed from "../sections/creator-card"

export default function FeedTemplate() {
  const [searchQuery, setSearchQuery] = useState("")

  return (
    <div className="bg-[#FAFBFC] min-h-screen px-4 py-6 md:p-8">
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* LEFT SIDEBAR - Stacks on top on mobile */}
        <aside className="col-span-1 lg:col-span-3 order-1 flex flex-col gap-6">
          <ProfileCard />
          <MvpPurpose />
          <Filters />
        </aside>

        {/* CENTER FEED */}
        <main className="col-span-1 lg:col-span-6 order-2 space-y-4">
          {/* Search Input */}
          <div className="relative group w-full">
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
            <h2 className="text-[15px] font-bold text-gray-800 tracking-tight">
              Work Feed . Performers Marketers Only
            </h2>
            <div className="inline-flex h-[27px] border-[0.5px] border-[#2571FF] rounded-full items-center justify-center bg-white shadow-sm px-4">
              <span className="text-[#2571FF] text-[10px] font-bold flex items-center gap-1 uppercase">
                Media-first <span className="opacity-40">●</span> Work Only
              </span>
            </div>
          </div>

          {/* The List of Cards */}
          <CreatorFeed searchQuery={searchQuery} />
        </main>

        {/* RIGHT SIDEBAR */}
        <aside className="col-span-1 lg:col-span-3 order-3 space-y-6">
          <HiringAgencies />
          <div className="w-full bg-[#FFF1F1] p-6 rounded-[2rem] shadow-sm">
            <h4 className="font-bold text-gray-800 flex items-center gap-2 mb-3 text-[15px]">
              <span className="bg-red-500 rounded-full w-5 h-5 flex items-center justify-center text-white text-[11px] font-black shrink-0">!</span>
              The Stryce Mission
            </h4>
            <p className="text-[13px] text-gray-400 leading-relaxed">
              This is not a social network. The feed is engineered for <span className="text-gray-800 font-bold">unlock intent</span>.
            </p>
          </div>
          <SuggestedLeads />
        </aside>
      </div>
    </div>
  )
}