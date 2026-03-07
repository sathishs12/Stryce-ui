interface TalentBadge {
  label: string
  icon: string
  color: string
}

interface TalentBadgesProps {
  badges?: TalentBadge[]
}

export default function TalentBadges({
  badges = [
    { label: "Top 5% Performer", icon: "🏆", color: "bg-yellow-50 border-yellow-200" },
    { label: "Verified Budget Spender", icon: "💰", color: "bg-red-50 border-red-200" },
    { label: "Daily Active", icon: "⚡", color: "bg-blue-50 border-blue-200" },
  ],
}: TalentBadgesProps) {
  return (
    <div className="w-full rounded-[18px] border border-gray-100 shadow-sm bg-white p-5">
      <h2 className="font-bold text-[14px] text-gray-900 mb-4">Talent Badges</h2>

      <div className="flex flex-wrap gap-3">
        {badges.map((badge) => (
          <div
            key={badge.label}
            className={`flex flex-col items-center gap-1.5 p-3 rounded-[14px] border ${badge.color} min-w-[70px] flex-1`}
          >
            <span className="text-2xl">{badge.icon}</span>
            <span className="text-[10px] font-bold text-gray-600 text-center leading-tight">{badge.label}</span>
          </div>
        ))}
      </div>
    </div>
  )
}