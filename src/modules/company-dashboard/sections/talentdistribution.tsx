"use client"

import { Card, CardContent } from "@/components/ui/card"

interface TalentCategory {
  label: string
  percent: number
  color: string
}

const CATEGORIES: TalentCategory[] = [
  { label: "Marketing", percent: 40, color: "#ED1D25" },
  { label: "Design", percent: 25, color: "#E24A4A" },
  { label: "Engineering", percent: 20, color: "#E07A7A" },
  { label: "Product", percent: 15, color: "#E8B4B4" },
]

export default function TalentDistribution() {
  return (
    <Card className="w-full max-w-[610px] rounded-2xl border border-[#CBCBCB] shadow-none">
      <CardContent className="p-4 sm:p-6">

        {/* Title */}
        <p className="text-sm sm:text-base font-bold text-black mb-4 sm:mb-5">
          TALENT DISTRIBUTION
        </p>

        {/* Bars */}
        <div className="flex flex-col gap-4 sm:gap-5">
          {CATEGORIES.map((cat) => (
            <div key={cat.label}>

              {/* Label Row */}
              <div className="flex justify-between items-center mb-1.5 sm:mb-2">
                <span className="text-xs sm:text-sm text-black">
                  {cat.label.toUpperCase()}
                </span>

                <span className="text-[11px] sm:text-xs text-black/50">
                  {cat.percent}%
                </span>
              </div>

              {/* Progress Bar */}
              <div className="w-full h-[8px] sm:h-[10px] bg-[#D9D9D9] rounded-full overflow-hidden">
                <div
                  className="h-full rounded-full transition-all duration-700 ease-out"
                  style={{
                    width: `${cat.percent}%`,
                    backgroundColor: cat.color,
                  }}
                />
              </div>

            </div>
          ))}
        </div>

      </CardContent>
    </Card>
  )
}