export default function MvpPurpose() {
  const items = [
    {
      icon: (
        // Stacked pages icon
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
          <rect x="4" y="6" width="13" height="15" rx="2" fill="#EF4444" opacity="0.3"/>
          <rect x="7" y="3" width="13" height="15" rx="2" fill="#EF4444"/>
          <path d="M10 8h7M10 11h7M10 14h4" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
        </svg>
      ),
      title: "Curated Ad Creators",
      desc: "Vetted performance data from top platforms.",
    },
    {
      icon: (
        // Person + magnify icon
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
          <circle cx="9" cy="7" r="3.5" stroke="#EF4444" strokeWidth="1.8"/>
          <path d="M3 19c0-3 2.5-5 6-5" stroke="#EF4444" strokeWidth="1.8" strokeLinecap="round"/>
          <circle cx="17" cy="16" r="3" stroke="#EF4444" strokeWidth="1.8"/>
          <path d="M19.5 18.5L22 21" stroke="#EF4444" strokeWidth="1.8" strokeLinecap="round"/>
        </svg>
      ),
      title: "Direct Prospecting",
      desc: "Skip the fluff and unlock verified creator details.",
    },
    {
      icon: (
        // Trending up icon
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
          <polyline points="3,17 9,11 13,15 21,7" stroke="#EF4444" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <polyline points="16,7 21,7 21,12" stroke="#EF4444" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      title: "Market Intelligence",
      desc: "Benchmarks for CTR, CPC, CPA by niche.",
    },
  ]

  return (
    <div className="bg-[#FFF1F1] w-full p-6 rounded-[2rem] space-y-5 border-l-4 border-red-500">
      <h4 className="text-[11px] font-bold text-gray-400 uppercase tracking-widest">
        MVP Purpose
      </h4>
      <div className="space-y-5">
        {items.map((item) => (
          <div key={item.title} className="flex gap-3 items-start">
            <div className="shrink-0 mt-0.5">{item.icon}</div>
            <div>
              <p className="text-[14px] font-bold text-gray-900 leading-tight mb-0.5">
                {item.title}
              </p>
              <p className="text-[12px] text-gray-400 leading-snug">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}