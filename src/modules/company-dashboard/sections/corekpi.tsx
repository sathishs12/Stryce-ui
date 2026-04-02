"use client"

import Image from "next/image"

interface CoreKPIProps {
  total?: number
  deltaPercent?: number
  running?: number
  paused?: number
  fillRate?: number
  addedThisWeek?: number
}

export default function CoreKPI({
  total = 7,
  deltaPercent = 5,
  running = 5,
  paused = 2,
  fillRate = 79,
  addedThisWeek = 2,
}: CoreKPIProps) {
  const radius = 16
  const circumference = 2 * Math.PI * radius
  const dashOffset = circumference - (fillRate / 100) * circumference

  return (
    <div className="w-[287px] h-[225px] bg-white rounded-[20px] border border-[#E5E7EB] flex flex-col overflow-hidden">

      {/* ── TOP SECTION ── */}
      <div className="px-5 pt-5 pb-2">

        {/* CORE KPI label + bar chart on same row */}
        <div className="flex items-start justify-between mb-0">
          <p className="text-sm font-black text-gray-900 tracking-wide">CORE KPI</p>

          {/* Gradient bar chart */}
          <div className="flex items-end gap-[3px] h-7">
            {[25, 42, 58, 75, 92].map((h, i) => (
              <div
                key={i}
                className="w-[5px] rounded-sm"
                style={{
                  height: `${h}%`,
                  backgroundColor: `rgba(239,68,68,${0.25 + i * 0.18})`,
                }}
              />
            ))}
          </div>
        </div>

        {/* Number + delta badge */}
        <div className="flex items-center gap-2 mb-0">
          <span className="text-[32px] font-black text-gray-900 leading-none">{total}</span>
          <span className="text-[11px] font-bold text-emerald-600 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded-full">
            +{deltaPercent}%
          </span>
        </div>

        <p className="text-xs text-gray-400">Active Campaigns</p>
      </div>

      {/* ── DIVIDER ── */}
      <div className="border-t border-gray-100 mx-5" />

      {/* ── BOTTOM SECTION ── */}
      <div className="px-5 pt-4 pb-5 flex flex-col gap-3">

        {/* Running | Paused boxes + ring */}
        <div className="flex items-center justify-between gap-2">

          {/* Running box */}
          <div className="flex-1 border border-gray-200 rounded-xl px-3 py-2.5">
            <div className="flex items-center justify-between mb-1">
              <span className="text-[10px] text-gray-400 font-medium">Running</span>
              <span className="h-2 w-2 rounded-full bg-emerald-400 flex-shrink-0" />
            </div>
            <p className="text-xl font-black text-gray-900 leading-none">{running}</p>
          </div>

          {/* Paused box */}
          <div className="flex-1 border border-gray-200 rounded-xl px-3 py-2.5">
            <div className="flex items-center justify-between mb-1">
              <span className="text-[10px] text-gray-400 font-medium">Paused</span>
              <span className="h-2 w-2 rounded-full bg-gray-300 flex-shrink-0" />
            </div>
            <p className="text-xl font-black text-gray-900 leading-none">{paused}</p>
          </div>

          {/* Fill rate ring */}
          <div className="relative h-12 w-12 flex-shrink-0">
            <svg viewBox="0 0 36 36" className="h-12 w-12 -rotate-90">
              <circle
                cx="18" cy="18" r={radius}
                fill="none" stroke="#F3F4F6" strokeWidth="3"
              />
              <circle
                cx="18" cy="18" r={radius}
                fill="none"
                stroke="#EF4444"
                strokeWidth="3"
                strokeDasharray={circumference}
                strokeDashoffset={dashOffset}
                strokeLinecap="round"
              />
            </svg>
            <span className="absolute inset-0 flex items-center justify-center text-[10px] font-black text-gray-800">
              {fillRate}%
            </span>
          </div>
        </div>

        {/* Added this week */}
       <p className="text-xs font-semibold text-emerald-600 flex items-center gap-1.5">
  <Image
    src="/image/Vector.png"
    alt="trend icon"
    width={14}
    height={14}
  />
  {addedThisWeek} added this week
</p>
      </div>
    </div>
  )
}