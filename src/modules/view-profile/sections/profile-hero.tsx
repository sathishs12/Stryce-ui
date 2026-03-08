"use client"

import { CheckCircle2 } from "lucide-react"
import { Avatar, AvatarImage } from "@/components/ui/avatar"
import Image from "next/image"

interface ProfileHeroProps {
  name: string
  role: string
  avatarImage: string
  coverImage?: string
}

export default function ProfileHero({ name, role, avatarImage, coverImage }: ProfileHeroProps) {
  return (
    <div className="w-full max-w-[1196px] mx-auto overflow-hidden rounded-[24px] sm:rounded-[2rem] bg-white shadow-sm border border-gray-100">
      {/* Aspect ratio: square-ish on mobile to show the silhouette, wide on desktop */}
      <div className="relative w-full aspect-[1/1] xs:aspect-[4/3] sm:aspect-[1196/315] bg-black">
        <Image
          src="/image/view-profile.jpg" 
          alt="cover"
          fill
          className="object-cover object-center"
          priority
        />
        
        {/* Gradient for mobile text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent sm:hidden" />

        {/* Floating Name Card */}
        <div className="absolute bottom-0 left-0 w-full sm:w-auto">
          <div 
            className="bg-white px-4 py-3 sm:px-5 sm:py-4 flex items-center gap-3 sm:gap-4 shadow-2xl 
                       w-full sm:w-auto sm:min-w-[380px] border-t border-gray-100 sm:border-r"
            style={{ 
              borderRadius: "0px 20px 0px 0px",
            }}
          >
            {/* Avatar - Slightly smaller on mobile to save space */}
            <div className="relative shrink-0">
                <Avatar className="h-11 w-11 sm:h-16 sm:w-16 rounded-xl sm:rounded-2xl border-2 sm:border-4 border-white shadow-md">
                    <AvatarImage src={avatarImage} className="object-cover" />
                </Avatar>
                <span className="absolute -bottom-0.5 -right-0.5 h-3.5 w-3.5 rounded-full bg-green-500 border-2 border-white" />
            </div>

            {/* Text Container - Removed truncate on name for mobile */}
            <div className="flex flex-col min-w-0 flex-1">
                <div className="flex items-center gap-2 flex-wrap sm:flex-nowrap">
                    <h1 className="text-[15px] sm:text-[20px] font-bold text-gray-900 whitespace-nowrap">
                      {name}
                    </h1>
                    <div className="flex items-center gap-1 px-1.5 py-0.5 rounded-full bg-[#EFF6FF] border border-blue-100 shrink-0">
                        <CheckCircle2 className="h-3 w-3 fill-[#2571FF] text-white" />
                        <span className="text-[#2571FF] text-[7px] sm:text-[10px] font-black uppercase tracking-wider">
                          Verified
                        </span>
                    </div>
                </div>
                <p className="text-[11px] sm:text-[13px] font-medium text-gray-400 truncate mt-0.5">
                  {role}
                </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}