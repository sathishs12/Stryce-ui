"use client"

import { Button } from "@/components/ui/button"

interface CreditPackage {
  label: string
  price: number
  originalPrice?: number
  savePct?: number
  isBestValue?: boolean
  isEnterpriseFair?: boolean
}

const PACKAGES: CreditPackage[] = [
  { label: "1 Unlock", price: 199 },
  { label: "10 Unlock", price: 1750, savePct: 10 },
  { label: "50 Unlock", price: 7450, originalPrice: 9950, savePct: 25, isBestValue: true },
  { label: "100 Unlock", price: 13000, savePct: 30 },
  { label: "200 Unlock", price: 24000, isEnterpriseFair: true },
]

interface CreditStoreProps {
  selected?: number
  onSelect?: (index: number) => void
}

export default function CreditStore({
  selected = 2,
  onSelect,
}: CreditStoreProps) {
  return (
    <div className="w-full max-w-[320px] sm:max-w-[360px] md:max-w-full bg-white rounded-2xl border border-gray-200 p-4 sm:p-5 md:p-6 shadow-sm flex flex-col">

      {/* ── HEADER ── */}
      <div className="mb-4 sm:mb-5">
        <p className="text-[11px] sm:text-xs font-bold text-gray-800 tracking-wide uppercase">
          Credit Store
        </p>
        <p className="text-[10px] sm:text-xs text-gray-500 mt-1">
          Bulk Unlock Packages
        </p>
      </div>

      {/* ── PACKAGES ── */}
      <div className="flex flex-col gap-3 flex-1">
        {PACKAGES.map((pkg, i) => {
          const isSelected = i === selected

          return (
            <button
              key={i}
              onClick={() => onSelect?.(i)}
              className={`relative flex items-center justify-between rounded-xl px-3 sm:px-4 py-2.5 sm:py-3 border transition-all text-left
                ${
                  isSelected
                    ? "border-red-500 bg-red-50"
                    : "border-gray-200 bg-gray-50 hover:border-gray-300"
                }`}
            >
              {/* Left */}
              <div>
                <p className="text-xs sm:text-sm font-semibold text-gray-900">
                  {pkg.label}
                </p>

                {pkg.savePct && (
                  <p className="text-[10px] sm:text-xs text-red-500 font-medium mt-0.5">
                    Save {pkg.savePct}%
                  </p>
                )}

                {pkg.isEnterpriseFair && (
                  <p className="text-[10px] sm:text-xs text-gray-400 mt-0.5">
                    Enterprise Tier
                  </p>
                )}
              </div>

              {/* Right */}
              <div className="flex flex-col items-end">
                <p className="text-xs sm:text-sm md:text-base font-bold text-gray-900">
                  ${pkg.price.toLocaleString()}
                </p>

                {pkg.originalPrice && (
                  <p className="text-[10px] sm:text-xs text-gray-400 line-through">
                    ${pkg.originalPrice.toLocaleString()}
                  </p>
                )}
              </div>

              {/* BEST VALUE BADGE */}
              {pkg.isBestValue && (
                <span className="absolute -top-2 right-3 bg-red-500 text-white text-[9px] sm:text-[10px] px-2 py-[2px] rounded-full font-semibold">
                  BEST VALUE
                </span>
              )}
            </button>
          )
        })}
      </div>

      {/* ── BUTTON ── */}
      <Button className="w-full mt-4 sm:mt-5 bg-red-500 hover:bg-red-600 text-white rounded-full text-xs sm:text-sm font-semibold h-9 sm:h-10">
        CHECK OUT
      </Button>
    </div>
  )
}