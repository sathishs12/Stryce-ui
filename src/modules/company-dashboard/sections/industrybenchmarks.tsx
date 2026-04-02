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
    label: "AVG.CTR",
    yourValue: 2.4,
    industryValue: 1.8,
    unit: "%",
  },
]

export default function IndustryBenchmarks({
  companyName = "Your Company",
}: Props) {
  return (
    <div className="w-[287px] h-[290px] bg-white rounded-[20px] border border-[#CBCBCB] overflow-hidden">

      {/* Header */}
      <div className="px-4 py-3 border-b border-[#CBCBCB]">
        <p className="text-[16px] font-medium text-black">
          Industry Benchmarks
        </p>
      </div>

      {/* Content */}
      <div className="p-4 flex flex-col gap-5">

        {DATA.map((item) => {
          const maxValue = Math.max(item.yourValue, item.industryValue)

          return (
            <div key={item.label}>

              {/* Section Title */}
              <p className="text-[11px] text-black/50 mb-2">
                {item.label}
              </p>

              {/* YOUR COMPANY */}
              <div className="flex justify-between items-center mb-1">
                <span className="text-[12px] font-medium text-black">
                  {companyName.toUpperCase()}
                </span>
                <span className="text-[12px] font-medium text-[#ED1D25]">
                  {item.yourValue} {item.unit}
                </span>
              </div>

              <div className="w-full h-[8px] bg-[#D9D9D9] rounded-full mb-2">
                <div
                  className="h-full bg-[#ED1D25] rounded-full"
                  style={{
                    width: `${(item.yourValue / maxValue) * 100}%`,
                  }}
                />
              </div>

              {/* INDUSTRY */}
              <div className="flex justify-between items-center mb-1">
                <span className="text-[12px] font-medium text-black/60">
                  INDUSTRY AVERAGE
                </span>
                <span className="text-[12px] font-medium text-black/60">
                  {item.industryValue} {item.unit}
                </span>
              </div>

              <div className="w-full h-[8px] bg-[#D9D9D9] rounded-full">
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