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
    <div className="w-[287px] h-[150px] bg-white rounded-[20px] border border-[#CBCBCB] p-4 flex flex-col justify-between">

      {/* Top Section */}
      <div>
        {/* Title */}
        <p className="text-[12px] font-bold text-black mb-0">
          AVAILABLE BALANCE
        </p>

        {/* Balance + Free Credits */}
        <div className="flex justify-between items-center">
          <p className="text-[22px] font-bold text-[#ED1D25]">
            ${balance.toLocaleString()}
          </p>

          <p className="text-[12px] text-black/60">
            Free Credits:{" "}
            <span className="text-black font-medium">
              {freeCreditsLeft}
            </span>
          </p>
        </div>
      </div>

      {/* Button */}
      <button className="w-full h-[32px] bg-[#ED1D25] text-white rounded-[12px] flex items-center justify-center gap-1.5 text-[12px] font-medium">
        <Plus className="w-3.5 h-3.5" />
        REFILL
      </button>

      {/* Footer */}
      <div className="flex justify-between items-center text-[12px]">
        <div className="flex items-center gap-1.5 text-black/50">
          <Clock className="w-3.5 h-3.5 text-black/40" />
          <span>Expires in {expiresInDays} days</span>
        </div>

        <button className="text-[#ED1D25] font-medium">
          View Usage History
        </button>
      </div>

    </div>
  )
}