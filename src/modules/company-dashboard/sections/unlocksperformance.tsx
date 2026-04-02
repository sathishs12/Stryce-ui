"use client"

import { TrendingUp } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const DAYS = ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"]

const DATA_POINTS = [30, 45, 35, 60, 50, 75, 65, 80, 70, 85, 72, 90]

function getSmoothPath(points: string[]) {
  return points.reduce((acc, point, i, arr) => {
    if (i === 0) return `M ${point}`

    const [x1, y1] = arr[i - 1].split(",").map(Number)
    const [x2, y2] = point.split(",").map(Number)

    const xc = (x1 + x2) / 2
    const yc = (y1 + y2) / 2

    return acc + ` Q ${x1},${y1} ${xc},${yc}`
  }, "")
}

function Sparkline() {
  const width = 600
  const height = 180

  const pointsArray = DATA_POINTS.map((val, i) => {
    const x = (i / (DATA_POINTS.length - 1)) * width
    const y = height - (val / 100) * height
    return `${x},${y}`
  })

  const pathData = getSmoothPath(pointsArray)
  const areaPath = `${pathData} L ${width},${height} L 0,${height} Z`

  return (
    <svg
      viewBox={`0 0 ${width} ${height}`}
      className="w-full h-[140px] sm:h-[160px] md:h-[180px]"
      preserveAspectRatio="none"
    >
      <defs>
        <linearGradient id="areaGradient" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#ED1D25" stopOpacity="0.2" />
          <stop offset="100%" stopColor="#ED1D25" stopOpacity="0.05" />
        </linearGradient>
      </defs>

      <path d={areaPath} fill="url(#areaGradient)" />

      <path
        d={pathData}
        fill="none"
        stroke="#ED1D25"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
    </svg>
  )
}

interface Props {
  totalUnlocks?: number
  changePercent?: number
}

export default function UnlocksPerformance({
  totalUnlocks = 342,
  changePercent = 12,
}: Props) {
  return (
    <Card className="w-full h-auto lg:h-[360px] rounded-2xl border border-[#CBCBCB] shadow-none">
      <CardContent className="p-4 sm:p-5 md:p-6">

        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-3">
          
          <div>
            <p className="text-xs sm:text-sm text-black/60 uppercase tracking-wide">
              Unlocks Performance
            </p>

            <h2 className="text-2xl sm:text-3xl md:text-[30px] font-bold text-black mt-1">
              {totalUnlocks} Unlocks
            </h2>
          </div>

          {/* Badge */}
          <div className="flex items-center gap-1 px-2.5 py-1 rounded-lg border border-[#0C996D] text-[#0C996D] text-xs sm:text-sm font-semibold w-fit">
            <TrendingUp className="w-4 h-4" />
            +{changePercent}%
          </div>
        </div>

        {/* Chart */}
        <div className="mt-4 sm:mt-5">
          <Sparkline />
        </div>

        {/* Days */}
        <div className="flex justify-between mt-2 sm:mt-3 px-1 sm:px-2 overflow-x-auto">
          {DAYS.map((d) => (
            <span
              key={d}
              className="text-[10px] sm:text-xs md:text-sm text-black/50 whitespace-nowrap"
            >
              {d}
            </span>
          ))}
        </div>

      </CardContent>
    </Card>
  )
}