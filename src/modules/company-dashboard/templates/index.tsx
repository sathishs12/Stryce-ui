"use client"

import AvailableBalance from "../sections/availablebalance"
import CoreKPI from "../sections/corekpi"
import CreditStore from "../sections/creditstore"
import IndustryBenchmarks from "../sections/industrybenchmarks"
import RecentUnlocks from "../sections/recentunlocks"
import TalentDistribution from "../sections/talentdistribution"
import TopHiringCities from "../sections/tophiringcities"
import UnlocksPerformance from "../sections/unlocksperformance"
import UpcomingMatches from "../sections/upcomingmatches"
import WelcomeBar from "../sections/welcomebar"

export default function CompanyDashboard() {
  return (
    // <div className="min-h-screen bg-gray-50 p-4 sm:p-6 pb-[100px] md:pb-6">
    <div className="min-h-screen bg-gray-50 p-4 sm:p-6 pt-[70px] md:pt-[80px] pb-[100px] md:pb-6">
      <div className="max-w-[1200px] mx-auto">

        {/* Welcome + credits */}
        <WelcomeBar freeCredits={0} paidCredits={0} />

        {/*
          Figma measurements:
          Col 1 → 632px  (UnlocksPerf + TalentDist + RecentUnlocks)
          Col 2 → 287px  (CoreKPI + AvailableBalance + TopHiringCities)
          Col 3 → 287px  (CreditStore + UpcomingMatches + IndustryBenchmarks)
          RecentUnlocks (934px) spans col 1+2
          Right col spans all rows via row-span-2
        */}
        <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr_1fr] gap-4 items-start">

          {/* ── COL 1 — double width ── */}
          <div className="flex flex-col gap-4">
            <UnlocksPerformance 
  totalUnlocks={342} 
  changePercent={12} 
/>
            <TalentDistribution />
          </div>

          {/* ── COL 2 ── */}
          <div className="flex flex-col gap-4">
            <CoreKPI total={7} running={5} paused={2} fillRate={79} />
            <AvailableBalance balance={45000} freeCreditsLeft={3} expiresInDays={24} />
            <TopHiringCities />
          </div>

          {/* ── COL 3 — row-span-2 so it covers the RecentUnlocks row too ── */}
          <div className="flex flex-col gap-4 lg:row-span-2">
            <CreditStore />
            <UpcomingMatches />
            <IndustryBenchmarks companyName="HDFC" />
          </div>

          {/* ── RecentUnlocks — col-span-2 fills col 1 + col 2 ── */}
          <div className="lg:col-span-2">
            <RecentUnlocks />
          </div>

        </div>

      </div>
    </div>
  )
}