"use client";

import Image from "next/image";
import React from "react";

interface ProfileHealthProps {
  healthPercent?: number;
  portfolioPosts?: number;
  postItems?: number;
  verifiedId?: boolean;
  linkedLinkedIn?: boolean;
  gigsToElite?: number;
}

export default function ProfileHealth({
  healthPercent = 82,
  portfolioPosts = 2,
  postItems = 1,
  verifiedId = false,
  linkedLinkedIn = false,
  gigsToElite = 2,
}: ProfileHealthProps) {
  return (
    /**
     * Responsive strategy:
     *  mobile  (<640px) : full-width, compact padding & text
     *  sm      (≥640px) : medium sizing
     *  lg      (≥1024px): fixed 320px height to match Figma
     */
    <div
      className="
        w-full
        bg-white border border-[#e5e7eb] rounded-[16px]
        p-4 sm:p-5
        flex flex-col
        min-h-[260px] sm:min-h-[280px] lg:h-[320px] lg:min-h-0
      "
    >
      {/* ── HEADER ── */}
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-1.5 sm:gap-2">
          <p className="text-[13px] sm:text-[14px] font-[700] text-black tracking-wide">
            PROFILE HEALTH
          </p>
          <Image
            src="/image/profilehealth/ix_user-profile.png"
            alt="profile"
            width={16}
            height={16}
            className="w-[13px] h-[13px] sm:w-[14px] sm:h-[14px] lg:w-[16px] lg:h-[16px]"
          />
        </div>

        <span className="text-[13px] sm:text-[14px] font-[700] text-black">
          {healthPercent}%
        </span>
      </div>

      {/* ── PROGRESS BAR ── */}
      <div className="w-full h-[6px] sm:h-[7px] lg:h-[8px] bg-[#e5e7eb] rounded-full overflow-hidden mb-4 sm:mb-5">
        <div
          className="h-full bg-[#ED1D25] rounded-full transition-all duration-500"
          style={{ width: `${healthPercent}%` }}
        />
      </div>

      {/* ── CHECKLIST ── */}
      <div className="flex flex-col gap-2.5 sm:gap-3 lg:gap-4 flex-1">
        <CheckItem label={`Portfolio: ${portfolioPosts} Posts`} checked />
        <CheckItem label={`Posts: ${postItems} items`} checked />
        <CheckItem label="Verify ID" checked={verifiedId} bonus="+12%" />
        <CheckItem label="Link LinkedIn Profile" checked={linkedLinkedIn} bonus="+8%" />
      </div>

      {/* ── FOOTER ── */}
      <p className="mt-3 sm:mt-4 text-[11px] sm:text-[12px] lg:text-[13px] text-black/50 leading-snug">
        Complete {gigsToElite} more gigs to reach Elite status
      </p>
    </div>
  );
}

/* ─────────────────────────────────────────── */

function CheckItem({
  label,
  checked,
  bonus,
}: {
  label: string;
  checked: boolean;
  bonus?: string;
}) {
  return (
    <div className="flex items-center gap-2 sm:gap-2.5">

      {/* ── ICON ── */}
      {checked ? (
        <div
          className="
            flex-shrink-0
            w-[17px] h-[17px] sm:w-[18px] sm:h-[18px] lg:w-[20px] lg:h-[20px]
            rounded-full
            border border-[#ED1D25] bg-[#fdecec]
            flex items-center justify-center
          "
        >
          <svg
            viewBox="0 0 11 9"
            fill="none"
            className="w-[8px] h-[7px] sm:w-[9px] sm:h-[8px] lg:w-[10px] lg:h-[8px]"
          >
            <path
              d="M1 4L4 7L10 1"
              stroke="#ED1D25"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      ) : (
        <div
          className="
            flex-shrink-0
            w-[17px] h-[17px] sm:w-[18px] sm:h-[18px] lg:w-[20px] lg:h-[20px]
            rounded-[4px] border border-[#d1d5db]
          "
        />
      )}

      {/* ── LABEL ── */}
      <p
        className={`
          text-[12px] sm:text-[13px] lg:text-[14px] text-black leading-none
          ${checked ? "font-[500]" : "font-[400]"}
        `}
      >
        {label}
      </p>

      {/* ── BONUS BADGE ── */}
      {bonus && (
        <span className="text-[10px] sm:text-[11px] lg:text-[12px] text-[#ED1D25] font-[600] ml-0.5">
          ({bonus})
        </span>
      )}
    </div>
  );
}