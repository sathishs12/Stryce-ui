"use client";

import React from "react";
import WalletEarnings     from "../sections/walletearnings";
import BoostingImpact     from "../sections/boostingimpact";
import ProfileHealth      from "../sections/profilehealth";
import ActivityPerformance from "../sections/activityperformance";
import ClientRequests     from "../sections/clientrequests";
import SuggestedActions   from "../sections/suggestedactions";
import AchievementBadges  from "../sections/achievementbadges";

interface FreelancerDashboardProps {
  userName?:   string;
  isVerified?: boolean;
}

export default function FreelancerDashboard({
  userName   = "John Doe",
  isVerified = true,
}: FreelancerDashboardProps) {
  return (
    // <div className="min-h-screen bg-[#f9fafb] px-4 sm:px-6 lg:px-8 py-6 sm:py-8 pb-24 sm:pb-8">
<div className="min-h-screen bg-[#f9fafb] px-4 sm:px-6 lg:px-8 pt-[70px] md:pt-[80px] py-6 sm:py-8 pb-24 sm:pb-8">
      {/* ── PAGE HEADER ── */}
      <div className="max-w-[1260px] mx-auto flex items-start justify-between mb-5 sm:mb-6 lg:mb-7">

        <div>
          <h1 className="text-[18px] sm:text-[20px] lg:text-[24px] font-[800] text-black uppercase tracking-wide leading-tight">
            Welcome Back {userName.toUpperCase()}!
          </h1>
          <p className="text-[12px] sm:text-[13px] text-[#6b7280] mt-1">
            Logged in as {userName}
          </p>
        </div>

        {isVerified && (
          <div
            className="
              hidden sm:flex items-center gap-2
              bg-white border border-[#e5e7eb] rounded-full
              px-3 sm:px-4 py-1.5
              text-[11px] sm:text-[12px] font-[600] text-[#374151]
              shadow-sm flex-shrink-0 ml-4
            "
          >
            <span className="w-2 h-2 rounded-full bg-[#22c55e] flex-shrink-0" />
            <span className="whitespace-nowrap">Verified · $999 one-time (active)</span>
          </div>
        )}
      </div>

      {/* ── DASHBOARD GRID ── */}
      <div className="max-w-[1260px] mx-auto flex flex-col gap-4 sm:gap-5">

        {/* ──────────────────────────────────────────────
            ROW 1 : Wallet | Boosting Impact | Profile Health
            mobile : 1 col
            sm     : 2 col
            lg     : 3 col  (each card ~400px Figma)
        ────────────────────────────────────────────── */}
        <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-3 gap-4 sm:gap-5">
          <WalletEarnings
            balance={244}
            withdrawalProgress={70}
            nextPayoutAt={300}
          />
          <BoostingImpact
            weeklyEarnings={244}
            perPostEarnings={244}
          />
          <ProfileHealth
            healthPercent={82}
            portfolioPosts={2}
            postItems={1}
            verifiedId={false}
            linkedLinkedIn={false}
            gigsToElite={2}
          />
        </div>

        {/* ──────────────────────────────────────────────
            ROW 2 : ActivityPerformance (818px) | ClientRequests (fills rest)
            mobile : 1 col stacked
            lg     : ActivityPerformance fixed 818px → ClientRequests fills 1fr
        ────────────────────────────────────────────── */}
     <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-5">

  {/* LEFT */}
  <div className="lg:col-span-8">
    <ActivityPerformance
      totalEarnings={244}
      earningsGrowth={12}
      profileViews={1248}
      avgRating={4.7}
      projectUnlocks={12}
    />
  </div>

  {/* RIGHT */}
  <div className="lg:col-span-4">
    <ClientRequests
      requests={[
        { title: "UI Design for Landing Page", price: 120 },
        { title: "Dashboard Design", price: 180 },
        { title: "Logo · Branding", price: 80 },
      ]}
      growthPercent={12.5}
    />
  </div>

</div>

        {/* ──────────────────────────────────────────────
            ROW 3 : SuggestedActions (818px) | AchievementBadges (fills rest)
            mobile : 1 col stacked
            lg     : SuggestedActions fixed 818px → AchievementBadges fills 1fr
            Height : both cards are 221px on lg (Figma spec)
        ────────────────────────────────────────────── */}
       <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-5">

  {/* LEFT */}
  <div className="lg:col-span-8">
    <SuggestedActions
      actions={[
        {
          title: "Update Portfolio",
          description: "Add samples to boost visibility by +15%.",
        },
        {
          title: "Verify Identity",
          description: "Connect socials to build trust with premium clients.",
        },
        {
          title: "Reach Elite Status",
          description: "Complete 2 more gigs to unlock the Elite badge.",
        },
      ]}
      onViewAll={() => alert("View all activity")}
    />
  </div>

  {/* RIGHT */}
  <div className="lg:col-span-4">
    <AchievementBadges />
  </div>

</div>

      </div>
    </div>
  );
}