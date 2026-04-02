"use client"

interface WelcomeBarProps {
  freeCredits?: number
  paidCredits?: number
}

export default function WelcomeBar({
  freeCredits = 0,
  paidCredits = 0,
}: WelcomeBarProps) {
  return (
    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">

      {/* LEFT - TITLE */}
      <h1 className="text-xl sm:text-2xl md:text-3xl font-black text-gray-900 tracking-tight">
        WELCOME BACK !
      </h1>

      {/* RIGHT - CREDITS */}
      <div className="flex flex-col md:items-end gap-2">

        {/* Credit Boxes */}
        <div className="flex flex-wrap gap-2">
          <div className="flex items-center gap-1 border border-gray-200 rounded-lg px-3 py-1.5 text-xs sm:text-sm font-semibold text-gray-700 bg-white">
            Free Credits :
            <span className="text-gray-900 font-bold ml-1">
              {freeCredits}
            </span>
          </div>

          <div className="flex items-center gap-1 border border-gray-200 rounded-lg px-3 py-1.5 text-xs sm:text-sm font-semibold text-gray-700 bg-white">
            Paid Credits :
            <span className="text-gray-900 font-bold ml-1">
              {paidCredits}
            </span>
          </div>
        </div>

        {/* Info Text */}
        <p className="text-[10px] sm:text-xs text-gray-400 md:text-right">
          3 free unlocks / month per company in MVP.
        </p>
      </div>
    </div>
  )
}