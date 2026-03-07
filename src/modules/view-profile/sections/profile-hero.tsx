"use client"
import { CheckCircle2 } from "lucide-react"
import { Avatar, AvatarImage } from "@/components/ui/avatar"

interface ProfileHeroProps {
  name: string
  role: string
  avatarImage: string
  coverImage?: string
}

export default function ProfileHero({ name, role, avatarImage, coverImage }: ProfileHeroProps) {
  return (
    <div className="w-full max-w-[1196px] mx-auto relative rounded-[2rem] overflow-hidden bg-white shadow-sm border border-gray-100">
      {/* ── Banner Image (Fixed 1196x315 Ratio) ── */}
      <div className="relative w-full h-[200px] sm:h-[315px] bg-[#000] overflow-hidden">
        <img 
          src={coverImage || "https://images.unsplash.com/photo-1557683316-973673baf926"} 
          alt="cover" 
          className="w-full h-full object-cover" 
        />
        
        {/* The Blue Silhouette Effect - Simplified CSS version */}
        <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
             <div className="w-[300px] h-[300px] bg-[#00A3FF] rounded-full blur-[100px] opacity-40 translate-x-20" />
        </div>

        {/* ── Floating Name Card ── */}
        <div className="absolute -bottom-1 left-6">
          <div className="bg-white rounded-t-[1.5rem] rounded-br-[1.5rem] px-5 py-3 flex items-center gap-4 shadow-xl border-t border-l border-r border-gray-50 min-w-[280px]">
            <div className="relative shrink-0">
                <Avatar className="h-14 w-14 rounded-2xl border-4 border-white shadow-md bg-gray-100">
                    <AvatarImage src={avatarImage} className="object-cover" />
                </Avatar>
                <span className="absolute -bottom-0.5 -right-0.5 h-3.5 w-3.5 rounded-full bg-green-500 border-2 border-white" />
            </div>

            <div className="flex flex-col">
                <div className="flex items-center gap-2">
                    <h1 className="text-[16px] font-bold text-gray-900 tracking-tight">{name}</h1>
                    <div className="flex items-center gap-1 px-2 py-0.5 rounded-full bg-[#EFF6FF] border border-blue-100">
                        <CheckCircle2 className="h-3 w-3 fill-[#2571FF] text-white" />
                        <span className="text-[#2571FF] text-[8px] font-black uppercase">Verified Profile</span>
                    </div>
                </div>
                <p className="text-[12px] font-medium text-gray-400 mt-0.5">{role}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}