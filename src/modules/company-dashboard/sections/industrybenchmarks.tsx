"use client"

interface BenchmarkItem {
  label: string
  yourValue: number
  industryValue: number
  unit: string
}

interface Props {
  companyName?: string
}

const DATA: BenchmarkItem[] = [
  {
    label: "ROAS PERFORMANCE",
    yourValue: 4.8,
    industryValue: 3.2,
    unit: "x",
  },
  {
    label: "AVG. CTR",
    yourValue: 2.4,
    industryValue: 1.8,
    unit: "%",
  },
]

export default function IndustryBenchmarks({
  companyName = "Your Company",
}: Props) {
  return (
    <div className="w-full max-w-[320px] sm:max-w-[360px] md:max-w-full h-auto bg-white rounded-2xl border border-[#CBCBCB] overflow-hidden">

      {/* ── HEADER ── */}
      <div className="px-4 sm:px-5 py-3 border-b border-[#CBCBCB]">
        <p className="text-sm sm:text-base font-medium text-black">
          Industry Benchmarks
        </p>
      </div>

      {/* ── CONTENT ── */}
      <div className="p-4 sm:p-5 flex flex-col gap-5">

        {DATA.map((item) => {
          const maxValue = Math.max(item.yourValue, item.industryValue)

          return (
            <div key={item.label}>

              {/* Section Title */}
              <p className="text-[10px] sm:text-[11px] text-black/50 mb-2">
                {item.label}
              </p>

              {/* YOUR COMPANY */}
              <div className="flex justify-between items-center mb-1 gap-2">
                <span className="text-[11px] sm:text-[12px] font-medium text-black">
                  {companyName.toUpperCase()}
                </span>
                <span className="text-[11px] sm:text-[12px] font-medium text-[#ED1D25]">
                  {item.yourValue} {item.unit}
                </span>
              </div>

              <div className="w-full h-[6px] sm:h-[8px] bg-[#D9D9D9] rounded-full mb-2">
                <div
                  className="h-full bg-[#ED1D25] rounded-full"
                  style={{
                    width: `${(item.yourValue / maxValue) * 100}%`,
                  }}
                />
              </div>

              {/* INDUSTRY */}
              <div className="flex justify-between items-center mb-1 gap-2">
                <span className="text-[11px] sm:text-[12px] font-medium text-black/60">
                  INDUSTRY AVERAGE
                </span>
                <span className="text-[11px] sm:text-[12px] font-medium text-black/60">
                  {item.industryValue} {item.unit}
                </span>
              </div>

              <div className="w-full h-[6px] sm:h-[8px] bg-[#D9D9D9] rounded-full">
                <div
                  className="h-full bg-[#9E9E9E] rounded-full"
                  style={{
                    width: `${(item.industryValue / maxValue) * 100}%`,
                  }}
                />
              </div>

            </div>
          )
        })}

      </div>
    </div>
  )
}