"use client"

interface Match {
  id: string
  title: string
  subtitle: string
  matchPercent: number
}

const MOCK_MATCHES: Match[] = [
  {
    id: "1",
    title: "Google Ads Specialist",
    subtitle: "10+ years exp · Performance Expert",
    matchPercent: 98,
  },
  {
    id: "2",
    title: "Google Ads Specialist",
    subtitle: "10+ years exp · Performance Expert",
    matchPercent: 98,
  },
]

interface UpcomingMatchesProps {
  matches?: Match[]
}

export default function UpcomingMatches({
  matches = MOCK_MATCHES,
}: UpcomingMatchesProps) {
  return (
    <div className="w-full max-w-[320px] sm:max-w-[360px] md:max-w-full bg-white rounded-2xl border border-[#D1D5DB] flex flex-col">

      {/* ── HEADER ── */}
      <div className="flex items-center justify-between px-4 sm:px-5 pt-3 pb-3">
        <p className="text-sm sm:text-base font-semibold text-black">
          Upcoming Matches
        </p>

        <span className="text-[10px] sm:text-xs font-semibold bg-red-500 text-white rounded-full px-2.5 sm:px-3 py-[3px] sm:py-[4px]">
          HIGH-INTENT
        </span>
      </div>

      {/* Divider */}
      <div className="border-t border-[#E5E7EB]" />

      {/* ── LIST ── */}
      <div className="flex flex-col divide-y">

        {matches.map((match) => (
          <div key={match.id} className="px-4 sm:px-5 py-3 sm:py-4">

            {/* Title + Match % */}
            <div className="flex items-start justify-between gap-2">
              <p className="text-sm sm:text-[15px] font-medium text-black leading-snug">
                {match.title}
              </p>

              <span className="text-[10px] sm:text-xs text-gray-400 whitespace-nowrap">
                {match.matchPercent}% Match
              </span>
            </div>

            {/* Subtitle */}
            <p className="text-[11px] sm:text-xs text-gray-400 mt-1 leading-snug">
              {match.subtitle}
            </p>

            {/* Action */}
            <p className="text-[11px] sm:text-xs font-medium text-red-500 mt-2 cursor-pointer hover:underline">
              SET NOTIFICATION
            </p>

          </div>
        ))}

      </div>
    </div>
  )
}