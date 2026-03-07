import { Card } from "@/components/ui/card"
import { Avatar, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { CheckCircle2 } from "lucide-react"
import Image from "next/image"

export default function ProfileCard() {
  return (
    <Card className="w-full h-auto min-h-[300px] overflow-hidden rounded-[1.5rem] border-none shadow-sm flex flex-col bg-white">
      {/* Banner Section */}
      <div className="relative h-[105px] w-full shrink-0">
        <Image
          src="/image/Rectangle 8.png"
          alt="cover"
          fill // Changed to fill for responsiveness
          className="object-cover"
          priority
        />
        <div className="absolute -bottom-10 left-5">
          <div className="relative">
            <Avatar className="h-20 w-20 md:h-24 md:w-24 border-[5px] border-white bg-[#C7D2FE] shadow-sm">
              <AvatarImage src="https://api.dicebear.com/7.x/avataaars/svg?seed=Nexus" />
            </Avatar>
            <span className="absolute bottom-1 right-1.5 h-3.5 w-3.5 md:h-4 md:w-4 rounded-full border-[3px] border-white bg-[#22C55E]"></span>
          </div>
        </div>
      </div>

      {/* Middle Info Section */}
      <div className="px-5 md:px-6 pt-12 pb-4 flex-1 flex flex-col justify-center">
        <div className="flex items-center gap-1.5 mb-0.5 flex-wrap">
          <h3 className="text-base md:text-[18px] font-bold text-[#111827] tracking-tight">Nexus Growth</h3>
          <Badge variant="secondary" className="flex items-center gap-1 rounded-full border-none bg-[#EFF6FF] px-2 py-0.5 text-[10px] font-bold text-[#3B82F6]">
            <CheckCircle2 className="h-3 w-3 fill-[#3B82F6] text-white" />
            Verified
          </Badge>
        </div>
        <p className="text-[12px] md:text-[13px] font-medium text-slate-400 leading-tight">
          Elite Performance Marketing Partner
        </p>
      </div>

      {/* Stats Footer Section */}
      <div className="h-[80px] grid grid-cols-2 bg-[#FEF2F2] border-t border-pink-50/30 shrink-0">
        <div className="flex flex-col items-center justify-center border-r border-red-100/40">
          <span className="text-xl md:text-2xl font-black text-[#111827] leading-none">12.4k</span>
          <span className="text-[10px] md:text-[11px] font-bold text-slate-400 mt-1 uppercase tracking-tight">Followers</span>
        </div>
        <div className="flex flex-col items-center justify-center">
          <span className="text-xl md:text-2xl font-black text-[#111827] leading-none">48</span>
          <span className="text-[10px] md:text-[11px] font-bold text-slate-400 mt-1 uppercase tracking-tight">Active Jobs</span>
        </div>
      </div>
    </Card>
  )
}