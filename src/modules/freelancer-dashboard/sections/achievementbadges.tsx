"use client";

import { Star, Zap, CheckCircle, Heart } from "lucide-react";
import Image from "next/image";

export default function AchievementBadges() {
 const badges = [
    {
      icon: "/image/achievementbadges/material-symbols_star-rounded.png",
      title: "Top Rated",
      subtitle: "Freelancer",
      detail: "Maintained 4.8+ rating",
    },
    {
      icon: "/image/achievementbadges/Group 241.png",
      title: "Fast Delivery",
      subtitle: "(Under 24h)",
      detail: "Avg response time 2h",
    },
    {
      icon: "/image/achievementbadges/simple-icons_ticktick.png",
      title: "100% Gigs",
      subtitle: "Completed",
      detail: "0% cancellation",
    },
    {
      icon: "/image/achievementbadges/Group 242.png",
      title: "95% Client",
      subtitle: "Retention",
      detail: "Strong repeat clients",
    },
  ];

  return (
    <div className="
      w-full
      h-auto lg:h-[221px]
      bg-white border border-gray-200 rounded-2xl
      p-4 sm:p-5
      flex flex-col
    ">
      {/* Header */}
      <h3 className="text-sm font-bold uppercase mb-3">
        Achievement Badges
      </h3>

      {/* Grid */}
      <div className="grid grid-cols-2 gap-3 flex-1">
        {badges.map((b, i) => (
          <div
            key={i}
            className="flex items-center gap-3 bg-red-50 rounded-lg p-2"
          >
            <div className="w-9 h-9 flex items-center justify-center rounded-full border border-dashed border-red-400">
              <Image
                src={b.icon}
                alt={b.title}
                width={20}
                height={20}
                className="object-contain"
              />
            </div>

            <div className="min-w-0">
              <p className="text-xs font-semibold truncate">{b.title}</p>
              <p className="text-[10px] text-gray-500">{b.subtitle}</p>
              <p className="text-[9px] text-gray-400">{b.detail}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}