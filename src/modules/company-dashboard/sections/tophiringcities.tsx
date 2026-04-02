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
    <div className="w-[287px] h-[284px] bg-white border border-[#E5E7EB] rounded-2xl border border-gray-100 p-5 shadow-sm">
      <p className="text-xs font-black text-gray-900 uppercase tracking-widest mb-5">
        Top Hiring Cities
      </p>

      <ol className="flex flex-col divide-y divide-gray-50">
        {CITIES.map((city, i) => (
          <li key={city.name} className="flex items-center gap-4 py-3 first:pt-0 last:pb-0">
            {/* Index */}
            <span className="text-xs font-semibold text-gray-300 w-5 flex-shrink-0">
              {String(i + 1).padStart(2, "0")}
            </span>

            {/* City name */}
            <span className="flex-1 text-sm font-semibold text-gray-800">
              {city.name}
            </span>

            {/* Count */}
            <span className="text-sm font-bold text-gray-700">
              {city.count}
            </span>
          </li>
        ))}
      </ol>
    </div>
  )
}