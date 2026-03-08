"use client"

import { FileText, ArrowRight } from "lucide-react"

interface PortfolioItem {
  title: string
  description: string
  image: string
  link?: string
}

interface PortfolioProps {
  items?: PortfolioItem[]
}

export default function Portfolio({ items = [] }: PortfolioProps) {
  return (
    <div className="w-full max-w-[730px] h-auto lg:h-[371px] rounded-[32px] border border-gray-100 shadow-sm bg-white p-6 overflow-hidden">
      {/* 1. Pill Header */}
      <div className="mb-6">
        <div className="inline-flex items-center gap-2 bg-[#ED1D25] text-white px-4 py-2 rounded-full shadow-md shadow-red-100">
          <FileText className="w-4 h-4 fill-white text-[#EE2B2B]" />
          <span className="text-[14px] font-bold">Portfolio (MVP Sample)</span>
        </div>
      </div>

      {/* 2. Grid (Responsive: 1 col on mobile, 2 on desktop) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {items.map((item, i) => (
          <div key={i} className="flex flex-col gap-3 group">
            {/* Image Container with Red Dashed Border */}
            <div className="relative rounded-[24px] border-[1.5px] border-dashed border-[#EE2B2B]/40 p-1">
              <div className="h-[180px] w-full overflow-hidden rounded-[20px]">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>

            {/* Info Section */}
            <div className="px-1">
              <h3 className="text-[16px] font-bold text-gray-900 leading-tight">
                {item.title}
              </h3>
              <p className="text-[14px] text-gray-400 font-medium mt-1">
                {item.description}
              </p>
              {item.link && (
                <a
                  href={item.link}
                  className="inline-flex items-center gap-1.5 text-[14px] font-bold text-[#EE2B2B] mt-2 hover:underline decoration-2"
                >
                  View Portfolio <ArrowRight className="w-4 h-4" />
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}