"use client"

import { Award, Wallet, Zap } from "lucide-react"

interface TalentBadge {
  label: string
  icon: React.ReactNode
  percent: string
  showStatus?: boolean
}

export default function TalentBadges() {
  const badges: TalentBadge[] = [
    {
      label: "Top 5% Performer",
      icon: <Award className="w-4 h-4 sm:w-5 sm:h-5 text-[#EE2B2B]" />,
      percent: "5%",
    },
    {
      label: "Verified Budget Handler",
      icon: <Wallet className="w-4 h-4 sm:w-5 sm:h-5 text-[#EE2B2B]" />,
      percent: "5%",
    },
    {
      label: "Daily Active",
      icon: <Zap className="w-4 h-4 sm:w-5 sm:h-5 text-[#EE2B2B]" fill="currentColor" />,
      percent: "5%",
      showStatus: true,
    },
  ]

  return (
    <div className="w-full max-w-[436px] min-h-[190px] sm:h-[213px] mx-auto rounded-[24px] sm:rounded-[32px] border border-gray-100 bg-white p-4 sm:p-6 shadow-sm overflow-hidden flex flex-col justify-center">
      {/* Header Badge */}
      <div className="mb-4 sm:mb-6">
        <span className="bg-[#ED1D25] text-white text-[12px] sm:text-[14px] font-bold px-4 py-1.5 rounded-full inline-block">
          Talent Badges
        </span>
      </div>

      {/* Badges Grid */}
      <div className="grid grid-cols-3 gap-1 sm:gap-2">
        {badges.map((badge, index) => (
          <div key={index} className="flex flex-col items-center gap-2">
            {/* Circle Construction */}
            <div className="relative flex-shrink-0">
              {/* Outer Dashed Red Ring */}
              <div className="rounded-full border-[1.2px] border-dashed border-[#EE2B2B] p-[2px] sm:p-[2.5px]">
                {/* Inner Gray Solid Circle - Smaller on mobile (w-14) larger on desktop (sm:w-[72px]) */}
                <div className="bg-[#F3F3F3] w-14 h-14 sm:w-[72px] sm:h-[72px] rounded-full flex flex-col items-center justify-center transition-all">
                  {badge.icon}
                  <span className="text-[#EE2B2B] text-[9px] sm:text-[10px] font-bold mt-0.5">
                    {badge.percent}
                  </span>
                </div>
              </div>

              {/* Status Indicator (Green Dot) */}
              {badge.showStatus && (
                <div className="absolute top-0.5 right-0.5 sm:top-1 sm:right-1 w-2.5 h-2.5 sm:w-3 sm:h-3 bg-[#22C55E] border-2 border-white rounded-full shadow-sm" />
              )}
            </div>

            {/* Label - Responsive font size */}
            <p className="text-[10px] sm:text-[11px] font-bold text-gray-900 text-center leading-tight max-w-[80px] sm:max-w-[90px]">
              {badge.label}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}