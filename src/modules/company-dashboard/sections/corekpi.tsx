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
    <div className="w-full max-w-[320px] sm:max-w-[360px] md:max-w-full h-auto bg-white rounded-2xl border border-[#E5E7EB] flex flex-col overflow-hidden">

      {/* ── TOP SECTION ── */}
      <div className="px-4 sm:px-5 pt-4 sm:pt-5 pb-2">

        {/* CORE KPI label + bar chart */}
        <div className="flex items-start justify-between gap-2">
          <p className="text-xs sm:text-sm font-black text-gray-900 tracking-wide">
            CORE KPI
          </p>

          {/* Gradient bar chart */}
          <div className="flex items-end gap-[3px] h-6 sm:h-7">
            {[25, 42, 58, 75, 92].map((h, i) => (
              <div
                key={i}
                className="w-[4px] sm:w-[5px] rounded-sm"
                style={{
                  height: `${h}%`,
                  backgroundColor: `rgba(239,68,68,${0.25 + i * 0.18})`,
                }}
              />
            ))}
          </div>
        </div>

        {/* Number + delta */}
        <div className="flex items-center gap-2 mt-1">
          <span className="text-2xl sm:text-3xl md:text-[32px] font-black text-gray-900 leading-none">
            {total}
          </span>

          <span className="text-[10px] sm:text-[11px] font-bold text-emerald-600 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded-full">
            +{deltaPercent}%
          </span>
        </div>

        <p className="text-[10px] sm:text-xs text-gray-400">
          Active Campaigns
        </p>
      </div>

      {/* ── DIVIDER ── */}
      <div className="border-t border-gray-100 mx-4 sm:mx-5" />

      {/* ── BOTTOM SECTION ── */}
      <div className="px-4 sm:px-5 pt-4 pb-4 sm:pb-5 flex flex-col gap-3">

        {/* Running | Paused | Ring */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-2">

          {/* Running */}
          <div className="w-full sm:flex-1 border border-gray-200 rounded-xl px-3 py-2">
            <div className="flex items-center justify-between mb-1">
              <span className="text-[10px] text-gray-400 font-medium">
                Running
              </span>
              <span className="h-2 w-2 rounded-full bg-emerald-400 flex-shrink-0" />
            </div>
            <p className="text-lg sm:text-xl font-black text-gray-900 leading-none">
              {running}
            </p>
          </div>

          {/* Paused */}
          <div className="w-full sm:flex-1 border border-gray-200 rounded-xl px-3 py-2">
            <div className="flex items-center justify-between mb-1">
              <span className="text-[10px] text-gray-400 font-medium">
                Paused
              </span>
              <span className="h-2 w-2 rounded-full bg-gray-300 flex-shrink-0" />
            </div>
            <p className="text-lg sm:text-xl font-black text-gray-900 leading-none">
              {paused}
            </p>
          </div>

          {/* Fill Rate Ring */}
          <div className="relative h-10 w-10 sm:h-12 sm:w-12 flex-shrink-0">
            <svg viewBox="0 0 36 36" className="h-full w-full -rotate-90">
              <circle
                cx="18"
                cy="18"
                r={radius}
                fill="none"
                stroke="#F3F4F6"
                strokeWidth="3"
              />
              <circle
                cx="18"
                cy="18"
                r={radius}
                fill="none"
                stroke="#EF4444"
                strokeWidth="3"
                strokeDasharray={circumference}
                strokeDashoffset={dashOffset}
                strokeLinecap="round"
              />
            </svg>

            <span className="absolute inset-0 flex items-center justify-center text-[9px] sm:text-[10px] font-black text-gray-800">
              {fillRate}%
            </span>
          </div>
        </div>

        {/* Added this week */}
        <p className="text-xs font-semibold text-emerald-600 flex items-center gap-1.5 justify-center sm:justify-start text-center sm:text-left">
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