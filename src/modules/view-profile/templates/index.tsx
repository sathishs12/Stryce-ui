"use client"

import { useState } from "react"
import { useParams, notFound } from "next/navigation"
import ProfileHero from "../sections/profile-hero"
import AboutMe from "../sections/about-me"
import Skills from "../sections/skills"
import Certifications from "../sections/certifications"
import Portfolio from "../sections/portfolio"
import ContactDetails from "../sections/contact-details"
import ProfileUrl from "../sections/profile-url"
import TalentBadges from "../sections/talent-badges"
import { UnlockContactModal } from "@/modules/feed/sections/unlock-contact"
import { creators } from "@/modules/feed/data/creators";
// 1. Define the Interface so TypeScript knows the shape of your data
interface Creator {
  id: number;
  slug: string;
  name: string;
  role: string;
  avatarImage: string;
  profileImage: string; // Used for the large hero banner
  bio: string;
  experience: string;
  industry: string;
  retainer: string;
  metrics: string[];
  skills: string[];
  certifications: { name: string; issuer: string }[];
  portfolio: { title: string; description: string; image: string; link: string }[];
}

// 2. The Data Array (Usually you'd import this from a central data.ts file)
// const creators: Creator[] = [
//   {
//     id: 1,
//     slug: "jane-smith",
//     name: "Jane Smith",
//     role: "Performance Marketer | DTC & SaaS",
//     avatarImage: "https://api.dicebear.com/7.x/avataaars/svg?seed=Jane",
//     profileImage: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=1200&h=400&fit=crop",
//     bio: "I help DTC brands scale from ₹1L to ₹10L/month with profitable paid acquisition. My focus is on data-driven strategies that prioritise ROI over vanity metrics.",
//     experience: "5+ years",
//     industry: "DTC & SaaS",
//     retainer: "₹15,000/mo retainer",
//     metrics: ["ROAS 4.2", "CTR 3.8%", "CPC ₹9.4"],
//     skills: ["Meta Ads", "Google Ads", "Funnel Strategy", "CRO"],
//     certifications: [
//       { name: "Meta Blueprint", issuer: "Certified Media Buying Professional" }
//     ],
//     portfolio: [
//        {
//         title: "Skincare brand scale-up",
//         description: "Achieved 4.5x ROAS in 3 months",
//         image: "https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=600&fit=crop",
//         link: "#",
//       },
//       {
//         title: "UGC funnel for fashion brand",
//         description: "Video ad campaign resulting in 2k+ leads",
//         image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&fit=crop",
//         link: "#",
//       },
//     ],
//   },
//   {
//     id: 2,
//     slug: "alex-rivera",
//     name: "Alex Rivera",
//     role: "Growth Lead | E-commerce",
//     avatarImage: "https://api.dicebear.com/7.x/avataaars/svg?seed=Alex",
//     profileImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1200&h=400&fit=crop",
//     bio: "Managed $2M+ ad spend with average 5x return across Meta & Google.",
//     experience: "7+ years",
//     industry: "E-commerce",
//     retainer: "₹20,000/mo retainer",
//     metrics: ["ROAS 5.1", "CTR 4.2%", "CPC ₹12.4"],
//     skills: ["Google Ads", "TikTok Ads", "Analytics"],
//     certifications: [],
//     portfolio: [],
//   }
// ];

export default function ProfilePage() {
  const [showModal, setShowModal] = useState(false)
  const params = useParams()
  
  // Get the slug from the URL
  const slug = params?.slug as string

  // 3. Find the creator (Fixed the Error)
  const creator = creators.find((c: Creator) => c.slug === slug)

  // If no creator is found in the array, show 404
  if (!creator) {
    return notFound()
  }

return (
    // <div className="bg-[#FAFBFC] min-h-screen">
    <div className="bg-[#FAFBFC] min-h-screen pt-[70px] md:pt-[80px]">
      <div className="max-w-[1250px] mx-auto px-4 sm:px-6 py-4 sm:py-8 space-y-6">
        
        {/* Full Width Hero Banner Area */}
        {/* <div className="max-w-[1250px] mx-auto px-4 sm:px-6 py-6 space-y-6"> */}
            <ProfileHero
                name={creator.name}
                role={creator.role}
                avatarImage={creator.avatarImage}
                coverImage={creator.profileImage} 
            />
        {/* </div> */}

        {/* Responsive Grid matching design widths */}
        <div className="flex flex-col lg:flex-row gap-8 items-start">
          
          {/* Left Side: 730px */}
          <div className="flex-1 flex flex-col gap-6 max-w-[730px] w-full">
            <AboutMe
              bio={creator.bio}
              experience={creator.experience}
              industry={creator.industry}
              retainer={creator.retainer}
            />
            {/* Skills & Certifications also follow 730px width */}
            <Skills skills={creator.skills} />
            <Certifications certifications={creator.certifications} />
                {/* <Skills />
                <Certifications /> */}
                 <Portfolio items={creator.portfolio} />
          </div>

          {/* Right Side: 436px */}
          <aside className="w-full lg:w-[436px] flex flex-col gap-6">
            <ContactDetails />
            <ProfileUrl username={creator.slug} />
            
            <TalentBadges />
          </aside>
          
        </div>
      </div>
    </div>
  )
}