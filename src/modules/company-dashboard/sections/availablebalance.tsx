"use client"

import { Clock, Plus } from "lucide-react"

interface AvailableBalanceProps {
  balance?: number
  freeCreditsLeft?: number
  expiresInDays?: number
}

export default function AvailableBalance({
  balance = 45000,
  freeCreditsLeft = 3,
  expiresInDays = 24,
}: AvailableBalanceProps) {
  return (
    <div className="w-full max-w-[320px] sm:max-w-[360px] md:max-w-full h-auto bg-white rounded-2xl border border-[#CBCBCB] p-4 flex flex-col justify-between gap-3">

      {/* ── TOP SECTION ── */}
      <div>
        {/* Title */}
        <p className="text-[11px] sm:text-[12px] font-bold text-black">
          AVAILABLE BALANCE
        </p>

        {/* Balance + Free Credits */}
        <div className="flex items-center justify-between mt-1 gap-2">
          <p className="text-lg sm:text-xl md:text-[22px] font-bold text-[#ED1D25]">
            ${balance.toLocaleString()}
          </p>

          <p className="text-[11px] sm:text-[12px] text-black/60 text-right">
            Free Credits:{" "}
            <span className="text-black font-medium">
              {freeCreditsLeft}
            </span>
          </p>
        </div>
      </div>

      {/* ── BUTTON ── */}
      <button className="w-full h-[34px] sm:h-[36px] bg-[#ED1D25] text-white rounded-xl flex items-center justify-center gap-1.5 text-[12px] sm:text-sm font-medium">
        <Plus className="w-3.5 h-3.5" />
        REFILL
      </button>

      {/* ── FOOTER ── */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 text-[11px] sm:text-[12px]">

        {/* Expiry */}
        <div className="flex items-center gap-1.5 text-black/50">
          <Clock className="w-3.5 h-3.5 text-black/40" />
          <span>Expires in {expiresInDays} days</span>
        </div>

        {/* Link */}
        <button className="text-[#ED1D25] font-medium">
          View Usage History
        </button>
      </div>

    </div>
  )
}