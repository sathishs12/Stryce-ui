"use client";

import Image from "next/image";
import React, { useState } from "react";

const DAYS = ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"];
const earnings = [20, 28, 35, 42, 55, 72, 88];
const views    = [30, 40, 48, 60, 70, 82, 95];

function buildPath(data: number[], w: number, h: number) {
  const p = data.map((v, i) => ({
    x: (i / (data.length - 1)) * w,
    y: h - (v / 100) * h,
  }));
  let d = `M ${p[0].x} ${p[0].y}`;
  for (let i = 1; i < p.length; i++) {
    const cx = (p[i - 1].x + p[i].x) / 2;
    d += ` C ${cx} ${p[i - 1].y}, ${cx} ${p[i].y}, ${p[i].x} ${p[i].y}`;
  }
  return d;
}

function buildArea(data: number[], w: number, h: number) {
  return `${buildPath(data, w, h)} L ${w} ${h} L 0 ${h} Z`;
}

interface ActivityPerformanceProps {
  totalEarnings?:  number;
  earningsGrowth?: number;
  profileViews?:   number;
  avgRating?:      number;
  projectUnlocks?: number;
}

export default function ActivityPerformance({
  totalEarnings  = 244,
  earningsGrowth = 12,
  profileViews   = 1248,
  avgRating      = 4.7,
  projectUnlocks = 12,
}: ActivityPerformanceProps) {
  const [range, setRange] = useState("Last 7 Days");

  const W = 560;
  const H = 170;

  return (
    /**
     * Responsive strategy:
     *  mobile  (<640px)  : full-width, auto height, stacked layout
     *  sm      (≥640px)  : full-width, taller chart, still stacked
     *  lg      (≥1024px) : ✅ Exact Figma — w-[818px] h-[320px], side-by-side
     */
    <div
      className="
       w-full
        min-h-[320px] lg:h-[320px] lg:min-h-0
        bg-white border border-[#CBCBCB] rounded-[20px]
        p-4 sm:p-5 lg:px-6 lg:pt-5 lg:pb-[14px]
        flex flex-col
        box-border overflow-hidden
      "
    >
      {/* ── HEADER ── */}
      <div className="flex items-center justify-between mb-2.5 flex-shrink-0">
        <div className="flex items-center gap-2">
          <span className="text-[12px] sm:text-[13px] lg:text-[14px] font-[700] text-black tracking-wide">
            ACITVITY AND PERFORMANCE
          </span>
           <Image
                      src="/image/activityperformance/Group 19.png"
                      alt="profile"
                      width={16}
                      height={16}
                      className="w-[13px] h-[13px] sm:w-[14px] sm:h-[14px] lg:w-[16px] lg:h-[16px]"
                    />
        </div>

        <select
          value={range}
          onChange={(e) => setRange(e.target.value)}
          className="
            text-[11px] sm:text-[12px]
            font-[500] text-[#374151]
            border-none bg-transparent
            cursor-pointer outline-none
          "
        >
          <option>Last 7 Days</option>
          <option>Last 30 Days</option>
          <option>Last 90 Days</option>
        </select>
      </div>

      {/* ── LEGEND ── */}
      <div className="flex gap-4 sm:gap-5 mb-2 sm:mb-3 flex-shrink-0">
        <LegendDot color="#ED1D25" label="EARNINGS" />
        <LegendDot color="#FCA5A5" label="VIEWS"    />
      </div>

      {/* ── BODY ──
            mobile/sm : column  (chart on top → stats 2-col grid below)
            lg+       : row     (chart fills left | stats 190px column right)
      -->*/}
      <div className="flex flex-col lg:flex-row gap-3 lg:gap-4 flex-1 min-h-0">

        {/* ── CHART ── */}
        <div className="flex-1 min-w-0 min-h-0">
          <div className="h-[160px] sm:h-[190px] lg:h-full w-full">
            <svg
              viewBox={`0 0 ${W} ${H + 26}`}
              preserveAspectRatio="none"
              className="w-full h-full block"
            >
              <defs>
                <linearGradient id="eGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%"   stopColor="#ED1D25" stopOpacity="0.22" />
                  <stop offset="100%" stopColor="#ED1D25" stopOpacity="0.02" />
                </linearGradient>
                <linearGradient id="vGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%"   stopColor="#FCA5A5" stopOpacity="0.18" />
                  <stop offset="100%" stopColor="#FCA5A5" stopOpacity="0.02" />
                </linearGradient>
              </defs>

              <path d={buildArea(views,    W, H)} fill="url(#vGrad)" />
              <path d={buildArea(earnings, W, H)} fill="url(#eGrad)" />

              <path d={buildPath(views,    W, H)} stroke="#FCA5A5" strokeWidth="2"   fill="none" />
              <path d={buildPath(earnings, W, H)} stroke="#ED1D25" strokeWidth="2.5" fill="none" />

              {DAYS.map((day, i) => (
                <text
                  key={day}
                  x={(i / (DAYS.length - 1)) * W}
                  y={H + 20}
                  textAnchor="middle"
                  fontSize="12"
                  fill="#9ca3af"
                  fontFamily="DM Sans, sans-serif"
                >
                  {day}
                </text>
              ))}
            </svg>
          </div>
        </div>

        {/* ── STATS PANEL ──
              mobile/sm : 2-col grid (compact)
              lg+       : 1-col fixed 190px (Figma right panel)
        */}
        <div
          className="
            grid grid-cols-2 gap-2
            sm:gap-2.5
            lg:grid-cols-1 lg:gap-[7px]
            lg:w-[190px] lg:flex-shrink-0
          "
        >
          <StatBox
            label="Total Earnings"
            value={`$${totalEarnings}.00`}
            badge={`+${earningsGrowth}%`}
          />
          <StatBox label="Profile Views"   value={profileViews.toLocaleString()} />
          <StatBox label="Avg Ratings"     value={`${avgRating}`} sub="/ 5" />
          <StatBox label="Project Unlocks" value={`${projectUnlocks}`} />
        </div>
      </div>
    </div>
  );
}

/* ─────────────── SUB-COMPONENTS ─────────────── */

function LegendDot({ color, label }: { color: string; label: string }) {
  return (
    <div className="flex items-center gap-1.5 sm:gap-2">
      <span
        className="w-[8px] h-[8px] sm:w-[9px] sm:h-[9px] rounded-full flex-shrink-0"
        style={{ background: color }}
      />
      <span className="text-[10px] sm:text-[11px] font-[500] text-black/45">
        {label}
      </span>
    </div>
  );
}

function StatBox({
  label,
  value,
  sub,
  badge,
}: {
  label:  string;
  value:  string;
  sub?:   string;
  badge?: string;
}) {
  return (
    <div
      className="
        bg-[#fafafa] border border-[#f0f0f0]
        rounded-[8px] sm:rounded-[10px]
        px-3 py-2 sm:px-3 sm:py-2.5
        flex flex-col justify-center
        lg:flex-1 min-h-0
      "
    >
      <p className="text-[9px] sm:text-[10px] text-black/40 mb-[3px] leading-none">
        {label}
      </p>

      <div className="flex items-baseline justify-between gap-1">
        <div className="flex items-baseline gap-1">
          <span className="text-[14px] sm:text-[15px] lg:text-[17px] font-[700] text-black leading-none">
            {value}
          </span>
          {sub && (
            <span className="text-[10px] sm:text-[11px] text-[#9ca3af]">
              {sub}
            </span>
          )}
        </div>
        {badge && (
          <span className="text-[10px] sm:text-[11px] font-[600] text-[#16a34a] flex-shrink-0">
            {badge}
          </span>
        )}
      </div>
    </div>
  );
}