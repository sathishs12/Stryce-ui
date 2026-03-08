"use client"

import { useState } from "react"
import { Lock, Mail, Phone, Share2, CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"

interface ContactDetailsProps {
  isUnlocked?: boolean
  email?: string
  phone?: string
  socials?: string
  onUnlock?: () => void
  onUseCredits?: () => void
}

export default function ContactDetails({
  isUnlocked = false,
  email = "••••••••••••@gmail.com",
  phone = "+91••••••••••",
  socials = "Hidden",
  onUnlock,
  onUseCredits,
}: ContactDetailsProps) {
  const [unlocked, setUnlocked] = useState(isUnlocked)

  const handleUnlock = () => {
    setUnlocked(true)
    onUnlock?.()
  }

  return (
    // Changed fixed w/h to w-full max-w-[436px] and removed fixed height for responsiveness
    <div className="w-full max-w-[436px] mx-auto rounded-[18px] border border-gray-100 shadow-sm bg-white p-5 sm:p-6 transition-all">
      
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2">
          <div className={`${unlocked ? 'bg-green-50' : 'bg-red-50'} p-2 rounded-lg transition-colors`}>
            {unlocked ? (
              <CheckCircle2 className="w-4 h-4 text-green-600" />
            ) : (
              <Lock className="w-4 h-4 text-red-500" />
            )}
          </div>
          <h2 className="font-bold text-[15px] text-gray-900 tracking-tight">Contact Details</h2>
        </div>
        <span className={`text-[11px] font-bold px-2 py-1 rounded-full ${
          unlocked ? "bg-green-50 text-green-600" : "bg-gray-50 text-gray-400"
        }`}>
          {unlocked ? "UNLOCKED" : "LOCKED TO MVP"}
        </span>
      </div>

      {/* Fields */}
      <div className="space-y-4 mb-8">
        {[
          { icon: Mail, label: "Email", value: unlocked ? "john.doe@gmail.com" : email },
          { icon: Phone, label: "Phone / Whatsapp", value: unlocked ? "+91 98765 43210" : phone },
          { icon: Share2, label: "Socials", value: unlocked ? "@johndoe" : socials },
        ].map(({ icon: Icon, label, value }) => (
          <div key={label} className="flex items-center gap-4 group">
            <div className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center shrink-0 group-hover:bg-gray-100 transition-colors">
              <Icon className="w-4 h-4 text-gray-400" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-[10px] uppercase tracking-wider text-gray-400 font-bold mb-0.5">{label}</p>
              <p className={`text-[14px] font-semibold truncate transition-all duration-500 ${
                unlocked ? "text-gray-800" : "text-gray-400 blur-[3px] select-none"
              }`}>
                {value}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* CTAs */}
      {!unlocked ? (
        <div className="space-y-3">
          <Button
            onClick={handleUnlock}
            className="w-full h-[48px] bg-[#ED1D25] hover:bg-red-600 rounded-xl font-bold text-[14px] text-white shadow-lg shadow-red-100 transition-all active:scale-[0.98]"
          >
            Unlock Contact
          </Button>
          <Button
            variant="outline"
            onClick={onUseCredits}
            className="w-full h-[48px] rounded-xl border-gray-200 text-gray-700 font-bold text-[14px] hover:bg-gray-50 transition-all"
          >
            Use 1 Credit
          </Button>
          <p className="px-4 text-[10px] text-gray-400 text-center leading-relaxed">
            Unlock once, keep forever. Freelancer earns 30% from single unlocks.
            Secure payments powered by <span className="font-semibold">Stryce Pay</span>.
          </p>
        </div>
      ) : (
        <div className="flex items-center justify-center gap-2 bg-green-50 border border-green-100 rounded-xl py-3 animate-in fade-in zoom-in duration-300">
          <CheckCircle2 className="w-4 h-4 text-green-600" />
          <span className="text-green-700 text-[13px] font-bold">Contact access granted</span>
        </div>
      )}
    </div>
  )
}