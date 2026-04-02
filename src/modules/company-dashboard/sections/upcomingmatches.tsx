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
    subtitle: "10+ years exp . Performance Expert",
    matchPercent: 98,
  },
  {
    id: "2",
    title: "Google Ads Specialist",
    subtitle: "10+ years exp . Performance Expert",
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
    <div className="bg-white rounded-[20px] border border-[#D1D5DB] h-[250px] flex flex-col">

      {/* Header */}
      <div className="flex items-center justify-between px-5 pt-3 pb-3">
        <p className="text-[14px] font-semibold text-black">
          Upcoming Matches
        </p>

        <span className="text-[10px] font-semibold bg-red-500 text-white rounded-full px-3 py-[4px]">
          HIGH-INTENT
        </span>
      </div>

      {/* Divider */}
      <div className="border-t border-[#E5E7EB]" />

      {/* List */}
      <div className="flex flex-col">

        {matches.map((match, index) => (
          <div key={match.id}>

            {/* Item */}
            <div className="px-5 py-4">

              {/* Title + % */}
              <div className="flex items-start justify-between">
                <p className="text-[14px] font-medium text-black">
                  {match.title}
                </p>

                <span className="text-[12px] text-gray-400">
                  {match.matchPercent}% Match
                </span>
              </div>

              {/* Subtitle */}
              <p className="text-[12px] text-gray-400 mt-1">
                {match.subtitle}
              </p>

              {/* Action (NOT button) */}
              <p className="text-[12px] font-medium text-red-500 mt-2 cursor-pointer">
                SET NOTIFICATION
              </p>
            </div>

            {/* Divider between items */}
            {index !== matches.length - 1 && (
              <div className="border-t border-[#E5E7EB]" />
            )}
          </div>
        ))}

      </div>
    </div>
  )
}