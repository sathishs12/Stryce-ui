"use client"
import { Zap } from "lucide-react"

interface SkillsProps {
  skills?: string[]
}

export default function Skills({
  skills = [
    "Meta Ads", "Google Ads", "Funnel Strategy", "CRO",
    "Retention Marketing", "Google Ads", "Meta Ads",
    "Google Ads", "Funnel Strategy", "CRO",
  ],
}: SkillsProps) {
  return (
    <div className="w-full lg:w-[730px] lg:h-[150px] rounded-[20px] border border-[#CBCBCB] bg-white p-3 shadow-sm overflow-hidden flex flex-col">
      {/* Red Pill Header */}
      <div className="mb-5">
        <div className="inline-flex items-center gap-2 bg-[#EF4444] text-white px-4 py-1.5 rounded-full shadow-md shadow-red-100">
          <Zap className="w-3.5 h-3.5 fill-white" />
          <span className="text-[12px] font-bold">Skills</span>
        </div>
      </div>

      {/* Skill chips */}
      <div className="flex flex-wrap gap-x-3 gap-y-2.5">
        {skills.map((skill, i) => (
          <span
            key={`${skill}-${i}`}
            className="text-[11px] font-medium text-gray-700 bg-white border border-[#CBCBCB] rounded-full px-4 py-1.5 hover:bg-gray-50 transition-colors cursor-default whitespace-nowrap"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  )
}