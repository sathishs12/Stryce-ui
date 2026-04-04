"use client";

import Image from "next/image";
import React from "react";

interface WalletEarningsProps {
  balance?: number;
  withdrawalProgress?: number;
  nextPayoutAt?: number;
}

export default function WalletEarnings({
  balance = 244,
  withdrawalProgress = 70,
  nextPayoutAt = 300,
}: WalletEarningsProps) {
  const radius = 32;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (withdrawalProgress / 100) * circumference;

  return (
    /**
     * Responsive strategy:
     *  mobile  (<640px) : full-width, auto height, compact spacing
     *  sm      (≥640px) : still full-width inside its grid cell
     *  lg      (≥1024px): fixed 320px height to match Figma
     */
    <div
      className="
        w-full
        bg-white border border-[#e5e7eb] rounded-[16px]
        p-4 sm:p-5
        flex flex-col justify-between gap-4
        min-h-[260px] sm:min-h-[280px] lg:h-[320px] lg:min-h-0
      "
    >
      {/* ── HEADER ── */}
      <div className="flex items-center gap-2">
        <p className="text-[13px] sm:text-[14px] font-[700] text-black tracking-wide">
          WALLET &amp; EARNINGS
        </p>
        <Image
          src="/image/walletearnings/Wallet-icon.png"
          alt="wallet icon"
          width={14}
          height={14}
          className="w-[13px] h-[13px] sm:w-[14px] sm:h-[14px]"
        />
      </div>

      {/* ── BALANCE ── */}
      <div>
        <h1 className="text-[26px] sm:text-[28px] lg:text-[30px] font-[700] text-black leading-none">
          ${balance}
        </h1>
        <p className="text-[12px] sm:text-[13px] lg:text-[14px] text-black/50 mt-1.5">
          30% of each single unlock flows here
        </p>
      </div>

      {/* ── PROGRESS ── */}
      <div className="flex items-center gap-3 sm:gap-4">

        {/* SVG ring — scales with viewport */}
        <div className="relative flex-shrink-0 w-[58px] h-[58px] sm:w-[66px] sm:h-[66px] lg:w-[72px] lg:h-[72px]">
          <svg viewBox="0 0 72 72" className="w-full h-full">
            <circle
              cx="36" cy="36" r={radius}
              fill="none" stroke="#e5e7eb" strokeWidth="6"
            />
            <circle
              cx="36" cy="36" r={radius}
              fill="none" stroke="#ED1D25" strokeWidth="6"
              strokeDasharray={circumference}
              strokeDashoffset={offset}
              strokeLinecap="round"
              transform="rotate(-90 36 36)"
            />
          </svg>
          {/* Centered % label */}
          <div className="absolute inset-0 flex items-center justify-center text-[11px] sm:text-[12px] lg:text-[13px] font-[600] text-black">
            {withdrawalProgress}%
          </div>
        </div>

        {/* Labels */}
        <div className="flex flex-col gap-[2px]">
          <p className="text-[9px] sm:text-[10px] text-black/50 uppercase tracking-wider">
            Withdrawal Progress
          </p>
          <p className="text-[13px] sm:text-[14px] font-[600] text-black">
            {withdrawalProgress}% Completed
          </p>
          <p className="text-[11px] sm:text-[12px] text-black/50">
            Next Pay-out at ${nextPayoutAt}
          </p>
        </div>
      </div>

      {/* ── BUTTON ── */}
      <button
        className="
          w-full
          h-[38px] sm:h-[40px]
          bg-[#ED1D25] hover:bg-[#d91920] active:bg-[#c0151c]
          text-white
          text-[12px] sm:text-[13px] lg:text-[14px]
          font-[600]
          rounded-[10px]
          transition-colors duration-200
          cursor-pointer
          whitespace-nowrap overflow-hidden text-ellipsis
          px-2
        "
      >
        Request Withdrawal (Manual in MVP)
      </button>
    </div>
  );
}