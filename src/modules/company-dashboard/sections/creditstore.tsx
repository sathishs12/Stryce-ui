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
  { label: "1 Unlock", price: 199, savePct: undefined },
  { label: "10 Unlock", price: 1750, savePct: 12 },
  { label: "50 Unlock", price: 7450, originalPrice: 9950, savePct: 25, isBestValue: true },
  { label: "100 Unlock", price: 13000, savePct: 30 },
  { label: "200 Unlock", price: 24000, isEnterpriseFair: true },
]

interface CreditStoreProps {
  selected?: number
  onSelect?: (index: number) => void
}

export default function CreditStore({ selected = 2, onSelect }: CreditStoreProps) {
  return (
    <div className="bg-white rounded-2xl border border-gray-100 p-5 shadow-sm h-full flex flex-col">
      <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">
        Credit Store
      </p>
      <p className="text-xs font-semibold text-gray-600 mb-4">Bulk Unlock Packages</p>

      <div className="flex flex-col gap-2 flex-1">
        {PACKAGES.map((pkg, i) => (
          <button
            key={i}
            onClick={() => onSelect?.(i)}
            className={`flex items-center justify-between rounded-xl px-3 py-2.5 border transition-all text-left ${
              i === selected
                ? "border-red-400 bg-red-50"
                : "border-gray-100 hover:border-gray-200 bg-gray-50"
            }`}
          >
            <div>
              <p className="text-xs font-bold text-gray-800">{pkg.label}</p>
              {pkg.savePct && (
                <p className="text-[9px] text-gray-400">Save {pkg.savePct}%</p>
              )}
              {pkg.isEnterpriseFair && (
                <p className="text-[9px] text-gray-400">Enterprise Fair</p>
              )}
            </div>
            <div className="flex flex-col items-end gap-0.5">
              {pkg.isBestValue && (
                <span className="text-[8px] font-bold bg-red-500 text-white rounded px-1 py-0.5 uppercase tracking-wide">
                  Best Value
                </span>
              )}
              <p className="text-sm font-black text-gray-900">
                ${pkg.price.toLocaleString()}
              </p>
              {pkg.originalPrice && (
                <p className="text-[9px] text-gray-400 line-through">
                  ${pkg.originalPrice.toLocaleString()}
                </p>
              )}
            </div>
          </button>
        ))}
      </div>

      <Button className="w-full mt-4 bg-red-500 hover:bg-red-600 text-white rounded-full text-xs font-bold h-9">
        CHECKOUT
      </Button>
    </div>
  )
}