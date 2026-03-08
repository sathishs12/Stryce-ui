"use client"

import { useState, useMemo } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { CheckCircle2, SearchX } from "lucide-react"
import { Avatar, AvatarImage } from "@/components/ui/avatar"
import { UnlockContactModal } from "./unlock-contact"
import Link from "next/link"

interface Creator {
  id: number;
  name: string;
  slug: string;
  role: string;
  description: string;
  metrics: string[];
  profileImage: string;
  avatarImage: string;
}

const creators: Creator[] = [
  {
    id: 1,
    slug: "jane-smith",
    name: "Jane Smith",
    role: "Performance Marketer | DTC & SaaS",
    description: "Scaled ROAS from 1.5 to 4.2 in 60 days for a DTC skincare brand.",
    metrics: ["ROAS 4.2", "CTR 3.8%", "CPC ₹9.4"],
    profileImage: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=600&h=800&fit=crop",
    avatarImage: "https://api.dicebear.com/7.x/avataaars/svg?seed=Jane",
  },
  {
    id: 2,
     slug: "alex-rivera",
    name: "Alex Rivera",
    role: "Growth Lead | E-commerce",
    description: "Managed $2M+ ad spend with average 5x return across Meta & Google.",
    metrics: ["ROAS 5.1", "CTR 4.2%", "CPC ₹12.4"],
    profileImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=800&fit=crop",
    avatarImage: "https://api.dicebear.com/7.x/avataaars/svg?seed=Alex",
  },
  {
    id: 3,
     slug: "alex-rivera",
    name: "Sarah Chen",
    role: "UGC Specialist | Beauty",
    description: "Created viral hooks that reduced CPA by 40% for top beauty brands.",
    metrics: ["CPA -40%", "CTR 5.5%", "ROAS 3.9"],
    profileImage: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=600&h=800&fit=crop",
    avatarImage: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah",
  },
]

export default function CreatorFeed({ searchQuery }: { searchQuery: string }) {
  const [selectedCreator, setSelectedCreator] = useState<Creator | null>(null)

  // Filtering Logic: Name, Role, Description, or Metrics
  const filteredCreators = useMemo(() => {
    const query = searchQuery.toLowerCase()
    return creators.filter((c) => 
      c.name.toLowerCase().includes(query) ||
      c.role.toLowerCase().includes(query) ||
      c.description.toLowerCase().includes(query) ||
      c.metrics.some(m => m.toLowerCase().includes(query))
    )
  }, [searchQuery])

  return (
    <div className="w-full flex flex-col gap-6">
      {filteredCreators.length > 0 ? (
        filteredCreators.map((item) => (
          <CreatorCard 
            key={item.id} 
            creator={item} 
            onUnlock={() => setSelectedCreator(item)} 
          />
        ))
      ) : (
        /* Empty Search State */
        <div className="flex flex-col items-center justify-center py-20 bg-white rounded-[2rem] border-2 border-dashed border-gray-100">
          <SearchX className="h-12 w-12 text-gray-200 mb-4" />
          <p className="text-gray-500 font-bold">No results for "{searchQuery}"</p>
          <p className="text-gray-400 text-sm">Try searching by a different niche or role.</p>
        </div>
      )}

      {selectedCreator && (
        <UnlockContactModal 
          creator={selectedCreator} 
          onClose={() => setSelectedCreator(null)} 
        />
      )}
    </div>
  )
}

function CreatorCard({ creator, onUnlock }: { creator: Creator; onUnlock: () => void }) {
  return (
    <Card className="w-full max-w-[620px] rounded-[2rem] border border-gray-100 shadow-sm overflow-hidden bg-white mx-auto transition-transform active:scale-[0.99]">
      <div className="flex flex-col md:flex-row min-h-[240px]">
        
        {/* Profile Banner Image */}
        <div className="relative w-full h-[200px] md:w-[220px] md:h-auto shrink-0">
          <img
            src={creator.profileImage}
            className="w-full h-full object-cover object-top md:object-center"
            alt={creator.name}
          />
        </div>

        {/* Content Area */}
        <div className="p-5 flex flex-col flex-1">
          <div className="flex-1">
           <div className="flex items-center gap-3 mb-3">
              <Avatar className="h-10 w-10 md:h-12 md:w-12 border border-gray-100 shrink-0">
                <AvatarImage src={creator.avatarImage} />
              </Avatar>
              <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2">
                <h3 className="font-bold text-[15px] text-black leading-tight">{creator.name}</h3>
                <div className="inline-flex w-fit h-[18px] border-[0.5px] border-[#2571FF] rounded-full bg-[#EFF6FF] items-center px-2 gap-1">
                  <CheckCircle2 className="h-2.5 w-2.5 fill-[#2571FF] text-white" />
                  <span className="text-[#2571FF] text-[8px] font-bold uppercase">Verified</span>
                </div>
              </div>
            </div>

            <p className="text-[14px] font-bold text-slate-400 leading-tight">
              {creator.role}
            </p>

            <p className="text-[13.5px] text-slate-500 mt-2.5 leading-snug">
              {creator.description}
            </p>

            {/* Metrics */}
            <div className="flex flex-wrap gap-2 mt-4">
              {creator.metrics.map((metric) => (
                <div
                  key={metric}
                  className="px-3 h-[28px] border-[0.5px] border-red-500 rounded-full flex items-center justify-center bg-white"
                >
                  <span className="text-slate-800 font-bold text-[9px] md:text-[10px] whitespace-nowrap">{metric}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Buttons - Stacked on tiny phones, row on tablets+ */}
          <div className="flex flex-col sm:flex-row gap-3 mt-6 md:mt-auto">
            <Button
              variant="outline"
              asChild // This prop allows the Button to act as the Link
              className="w-full sm:flex-1 h-11 rounded-full border-red-500 text-red-500 font-bold text-[14px] hover:bg-red-50 transition-all"
            >
              <Link href={`/profile/${creator.slug}`}>
                View Profile
              </Link>
            </Button>
            <Button
              onClick={onUnlock}
              className="w-full sm:flex-1 h-11 bg-red-500 hover:bg-red-600 rounded-full font-bold text-[14px] text-white shadow-lg shadow-red-100 transition-all"
            >
              Unlock Contact
            </Button>
          </div>
        </div>
      </div>
    </Card>
  )
}