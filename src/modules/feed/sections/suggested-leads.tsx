"use client"
import { Card, CardContent } from "@/components/ui/card"

const leads = [
  {
    name: "Jason Miller",
    role: "CMO @Tech Flow",
    initials: "JM",
    verified: true,
  },
  {
    name: "Lisa Steiner",
    role: "Founder @ Glow up",
    initials: "LS",
    verified: false,
  },
  {
    name: "Lisa Steiner",
    role: "Founder @ Glow up",
    initials: "LS",
    verified: false,
  },
]

export default function SuggestedLeads() {
  return (
    /* Changed: w-full ensures it fits the Sidebar on desktop and stacks on mobile */
    <Card className="w-full rounded-2xl shadow-sm border border-gray-100 bg-white overflow-hidden">
      <CardContent className="p-4 sm:p-5">
        
        {/* Header */}
        <div className="flex items-center justify-between mb-5">
          <div className="flex items-center gap-2">
            {/* Person + signal icon */}
            <div className="text-red-500 shrink-0">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z" fill="currentColor"/>
              </svg>
            </div>
            <h3 className="font-bold text-[15px] text-gray-900 tracking-tight">
              Suggested Leads
            </h3>
          </div>
          <button className="text-[12px] font-bold text-gray-400 hover:text-red-500 transition-colors">
            View all
          </button>
        </div>

        {/* Lead list */}
        <ul className="divide-y divide-gray-50">
          {leads.map((lead, i) => (
            <li key={i} className="py-3.5 flex items-start gap-3 group cursor-pointer">
              
              {/* Avatar - Slightly larger for better touch target on mobile */}
              <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center shrink-0 border border-gray-50 group-hover:bg-gray-200 transition-colors">
                <span className="text-[11px] font-bold text-gray-500">
                  {lead.initials}
                </span>
              </div>

              {/* Info container - min-w-0 helps text truncation if needed */}
              <div className="flex flex-col gap-0.5 min-w-0">
                <p className="text-[13px] sm:text-[14px] font-bold text-gray-900 leading-tight truncate group-hover:text-red-600 transition-colors">
                  {lead.name}
                </p>
                <p className="text-[12px] text-gray-400 font-medium truncate">
                  {lead.role}
                </p>
                
                {lead.verified && (
                  <div className="flex items-center gap-1.5 mt-1">
                    <div className="shrink-0">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                        <circle cx="12" cy="12" r="12" fill="#3B82F6"/>
                        <path d="M7 13l3 3 7-7" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <span className="text-[10px] sm:text-[11px] text-blue-500 font-bold whitespace-nowrap">
                      Verified Email Address
                    </span>
                  </div>
                )}
              </div>
            </li>
          ))}
        </ul>

      </CardContent>
    </Card>
  )
}