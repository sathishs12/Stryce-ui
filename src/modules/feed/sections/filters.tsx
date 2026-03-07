"use client" // <--- Add this line at the very top

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"

// ... the rest of your code remains exactly the same
interface FilterItem {
  label: string;
  active: boolean;
}

interface FilterState {
  platform: FilterItem[];
  niche: FilterItem[];
  format: FilterItem[];
}

const initialFilters: FilterState = {
  platform: [
    { label: "Meta", active: true },
    { label: "Google", active: false },
    { label: "Tik Tok", active: false },
  ],
  niche: [
    { label: "dtc", active: false },
    { label: "Google", active: false },
    { label: "Tik Tok", active: false },
  ],
  format: [
    { label: "Video", active: true },
    { label: "Static", active: false },
    { label: "Carousel", active: false },
  ],
}

interface FilterChipProps {
  label: string;
  active: boolean;
  onClick: () => void;
}

function FilterChip({ label, active, onClick }: FilterChipProps) {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-1.5 rounded-full text-[13px] font-semibold transition-colors ${
        active
          ? "bg-red-500 text-white"
          : "bg-gray-100 text-gray-600 hover:bg-gray-200"
      }`}
    >
      {label}
    </button>
  )
}

export default function Filters() {
  const [filters, setFilters] = useState<FilterState>(initialFilters)

  const toggle = (group: keyof FilterState, index: number) => {
    setFilters((prev) => ({
      ...prev,
      [group]: prev[group].map((f, i) => ({ 
        ...f, 
        active: i === index ? !f.active : f.active 
      })),
    }))
  }

  const clearAll = () => {
    const resetFilters = Object.keys(filters).reduce((acc, key) => {
      const k = key as keyof FilterState;
      acc[k] = filters[k].map((f) => ({ ...f, active: false }));
      return acc;
    }, {} as FilterState);
    
    setFilters(resetFilters);
  }

 return (
    <Card className="rounded-2xl shadow-sm w-full">
      <CardContent className="p-5 space-y-4">
        <div className="flex justify-between items-center">
          <h4 className="font-bold text-[13px] text-gray-500 uppercase tracking-widest">
            Filters
          </h4>
          <button onClick={clearAll} className="text-red-500 text-[13px] font-bold hover:opacity-75 active:scale-95 transition-transform">
            Clear All
          </button>
        </div>
        
        <div className="border-t border-gray-100" />

        {/* Platform Section */}
        <div className="space-y-3">
          <p className="text-[13px] font-medium text-gray-400">Ad platform</p>
          <div className="flex gap-2 flex-wrap">
            {filters.platform.map((f, i) => (
              <FilterChip key={f.label} label={f.label} active={f.active} onClick={() => toggle("platform", i)} />
            ))}
          </div>
        </div>

        <div className="border-t border-gray-100" />

        {/* Niche Section */}
        <div className="space-y-3">
          <p className="text-[13px] font-medium text-gray-400">Niche</p>
          <div className="flex gap-2 flex-wrap">
            {filters.niche.map((f, i) => (
              <FilterChip key={i} label={f.label} active={f.active} onClick={() => toggle("niche", i)} />
            ))}
          </div>
        </div>

        <div className="border-t border-gray-100" />

        {/* Format Section */}
        <div className="space-y-3">
          <p className="text-[13px] font-medium text-gray-400">Ad format</p>
          <div className="flex gap-2 flex-wrap">
            {filters.format.map((f, i) => (
              <FilterChip key={f.label} label={f.label} active={f.active} onClick={() => toggle("format", i)} />
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}