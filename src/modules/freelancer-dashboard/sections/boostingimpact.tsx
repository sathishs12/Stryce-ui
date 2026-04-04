"use client";

import React from "react";
import Image from "next/image";

interface BoostingImpactProps {
  weeklyEarnings?: number;
  perPostEarnings?: number;
}

export default function BoostingImpact({
  weeklyEarnings = 244,
  perPostEarnings = 244,
}: BoostingImpactProps) {
  const bars = [
    { height: "30%", opacity: "bg-[#ED1D25]/20" },
    { height: "55%", opacity: "bg-[#ED1D25]/40" },
    { height: "75%", opacity: "bg-[#ED1D25]/60" },
    { height: "100%", opacity: "bg-[#ED1D25]" },
  ];

  return (
    /**
     * Responsive strategy:
     *  mobile  (<640px) : full-width, compact padding, smaller text & chart
     *  sm      (≥640px) : medium sizing
     *  lg      (≥1024px): fixed 320px height to match Figma
     */
    <div
      className="
        w-full
        bg-white border border-[#e5e7eb] rounded-[16px]
        p-4 sm:p-5
        flex flex-col justify-between gap-3 sm:gap-4
        min-h-[260px] sm:min-h-[280px] lg:h-[320px] lg:min-h-0
      "
    >
      {/* ── HEADER ── */}
      <div className="flex items-center gap-2">
        <p className="text-[13px] sm:text-[14px] font-[700] text-black tracking-wide">
          BOSSTING IMPACT
        </p>
        <Image
          src="/image/boostingimpact/Group.png"
          alt="rocket"
          width={16}
          height={16}
          className="w-[13px] h-[13px] sm:w-[14px] sm:h-[14px] lg:w-[16px] lg:h-[16px]"
        />
      </div>

      {/* ── SUBTITLE ── */}
      <p className="text-[11px] sm:text-[12px] lg:text-[13px] text-black/50">
        Reach Increase
      </p>

      {/* ── BAR CHART ── */}
      <div
        className="
          flex items-end gap-2 sm:gap-3
          h-[70px] sm:h-[90px] lg:h-[110px]
          flex-1
        "
      >
        {bars.map((bar, i) => (
          <div
            key={i}
            className={`
              flex-1 rounded-t-[5px] sm:rounded-t-[6px]
              transition-all duration-300
              ${bar.opacity}
            `}
            style={{ height: bar.height }}
          />
        ))}
      </div>

      {/* ── LABEL + VALUES ── */}
      <div className="flex justify-between items-end">
        <div className="flex flex-col gap-[2px]">
          <p className="text-[10px] sm:text-[11px] text-black/50">Profile Boost</p>
          <p className="text-[10px] sm:text-[11px] text-black/50">Post Boost</p>
        </div>

        <div className="text-right flex flex-col gap-[2px]">
          <p className="text-[11px] sm:text-[12px] lg:text-[13px] font-[600] text-black">
            ${weeklyEarnings}/wk
          </p>
          <p className="text-[11px] sm:text-[12px] lg:text-[13px] font-[600] text-black">
            ${perPostEarnings}/post
          </p>
        </div>
      </div>

      {/* ── BUTTON ── */}
      <button
        className="
          w-full
          h-[36px] sm:h-[38px] lg:h-[40px]
          bg-[#ED1D25] hover:bg-[#d91920] active:bg-[#c0151c]
          text-white
          text-[12px] sm:text-[13px] lg:text-[14px]
          font-[600]
          rounded-[10px]
          transition-colors duration-200
          cursor-pointer
        "
      >
        Boost Profile (Prototype)
      </button>
    </div>
  );
}