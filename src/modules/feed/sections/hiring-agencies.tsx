"use client"
import { Card } from "@/components/ui/card"
import { Building2 } from "lucide-react"

// 1. Define an interface for the Agency object
interface Agency {
  name: string;
  img: string;
  unlocks: string;
  bars: boolean[];
}

const agencies: Agency[] = [
  {
    name: "Vivid Vision",
    img: "https://api.dicebear.com/7.x/shapes/svg?seed=VividVision&backgroundColor=1a1a2e",
    unlocks: "18 Unlocks",
    bars: [true, true, true, true],
  },
  {
    name: "Nexus Media",
    img: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=100&h=100&fit=crop",
    unlocks: "18 Unlocks",
    bars: [true, true, true, false],
  },
  {
    name: "Growth Mind",
    img: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=100&h=100&fit=crop",
    unlocks: "18 Unlocks",
    bars: [true, true, false, false],
  },
]

interface SignalBarsProps {
  bars: boolean[];
}

const SignalBars = ({ bars }: SignalBarsProps) => {
  const heights = ["h-[6px]", "h-[10px]", "h-[14px]", "h-[18px]"] // Adjusted max height slightly for better fit
  return (
    <div className="flex items-end gap-[3px] shrink-0">
      {bars.map((active: boolean, i: number) => (
        <div
          key={i}
          className={`w-[4px] sm:w-[5px] rounded-sm ${heights[i]} ${
            active ? "bg-red-500" : "bg-red-100"
          }`}
        />
      ))}
    </div>
  )
}

export default function HiringAgencies() {
  return (
    /* Changed: w-full and removed fixed h-[300] to allow content to dictate height */
    <Card className="w-full rounded-[20px] border border-gray-200 shadow-sm bg-white overflow-hidden">
      
      {/* Header */}
      <div className="px-4 py-3 sm:px-5 flex items-center gap-3 border-b border-gray-100">
        <div className="bg-red-50 p-2 rounded-xl shrink-0">
          <Building2 className="w-5 h-5 text-red-500" strokeWidth={2.5} />
        </div>
        <h3 className="text-[15px] sm:text-[16px] font-bold text-gray-900 tracking-tight">
          Top Hiring Agencies
        </h3>
      </div>

      {/* List Container */}
      <div className="px-4 sm:px-5 py-2 flex flex-col divide-y divide-gray-100">
        {agencies.map((agency) => (
          <div key={agency.name} className="flex items-center justify-between py-3 gap-2">
            
            {/* Left: Avatar + Info */}
            <div className="flex items-center gap-3 min-w-0">
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-2xl bg-gray-100 overflow-hidden shrink-0 border border-gray-200">
                <img
                  src={agency.img}
                  alt={agency.name}
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="flex flex-col gap-1 min-w-0">
                <p className="font-bold text-gray-900 text-[13px] sm:text-[14px] leading-tight truncate">
                  {agency.name}
                </p>
                {/* Removed fixed w-[87] and h-[24] for better text scaling */}
                <span className="inline-flex items-center justify-center text-red-500 text-[10px] sm:text-[11px] font-bold border border-red-100 rounded-full px-2 py-0.5 bg-white w-fit whitespace-nowrap">
                  Hiring Now
                </span>
              </div>
            </div>

            {/* Right: Bars + Label */}
            <div className="flex flex-col items-center gap-1 shrink-0">
              <SignalBars bars={agency.bars} />
              <span className="text-[10px] font-bold text-gray-400">
                {agency.unlocks}
              </span>
            </div>

          </div>
        ))}
      </div>
    </Card>
  )
}