"use client"

interface City {
  name: string
  count: number
}

const CITIES: City[] = [
  { name: "Bengaluru", count: 124 },
  { name: "Mumbai", count: 84 },
  { name: "Delhi", count: 52 },
  { name: "Hyderabad", count: 31 },
  { name: "Pune", count: 18 },
]

export default function TopHiringCities() {
  return (
    <div className="w-full max-w-[320px] sm:max-w-[360px] md:max-w-full h-auto bg-white border border-[#E5E7EB] rounded-2xl p-4 sm:p-5 shadow-sm">

      {/* ── TITLE ── */}
      <p className="text-[10px] sm:text-xs font-black text-gray-900 uppercase tracking-widest mb-4 sm:mb-5">
        Top Hiring Cities
      </p>

      {/* ── LIST ── */}
      <ol className="flex flex-col divide-y divide-gray-100">
        {CITIES.map((city, i) => (
          <li
            key={city.name}
            className="flex items-center gap-3 sm:gap-4 py-2.5 sm:py-3 first:pt-0 last:pb-0"
          >
            {/* Index */}
            <span className="text-[10px] sm:text-xs font-semibold text-gray-300 w-5 flex-shrink-0">
              {String(i + 1).padStart(2, "0")}
            </span>

            {/* City name */}
            <span className="flex-1 text-xs sm:text-sm md:text-[15px] font-semibold text-gray-800 truncate">
              {city.name}
            </span>

            {/* Count */}
            <span className="text-xs sm:text-sm md:text-base font-bold text-gray-700">
              {city.count}
            </span>
          </li>
        ))}
      </ol>

    </div>
  )
}