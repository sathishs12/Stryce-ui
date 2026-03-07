import { Layers } from "lucide-react"

interface PortfolioItem {
  title: string
  description: string
  image: string
  link?: string
}

interface PortfolioProps {
  items?: PortfolioItem[]
}

export default function Portfolio({
  items = [
    {
      title: "Skincare brand scale-up",
      description: "Achieved 4.5x ROAS in 3 months",
      image: "https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=400&h=300&fit=crop",
      link: "#",
    },
    {
      title: "UGC funnel for fashion brand",
      description: "Video ad campaign resulting in 2k+ leads",
      image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=300&fit=crop",
      link: "#",
    },
  ],
}: PortfolioProps) {
  return (
    <div className="w-full rounded-[18px] border border-gray-100 shadow-sm bg-white p-5">
      {/* Header */}
      <div className="flex items-center gap-2 mb-4">
        <div className="bg-red-50 p-1.5 rounded-lg">
          <Layers className="w-4 h-4 text-red-500" />
        </div>
        <h2 className="font-bold text-[14px] text-gray-900">
          Portfolio{" "}
          <span className="text-[11px] font-normal text-gray-400 ml-1">(MVP Sample)</span>
        </h2>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {items.map((item, i) => (
          <div key={i} className="group rounded-[14px] overflow-hidden border border-gray-100 bg-gray-50">
            {/* Image */}
            <div className="h-[140px] overflow-hidden">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>

            {/* Info */}
            <div className="p-3">
              <p className="text-[13px] font-bold text-gray-800 leading-tight">{item.title}</p>
              <p className="text-[11px] text-gray-400 mt-0.5 mb-2">{item.description}</p>
              {item.link && (
                <a
                  href={item.link}
                  className="text-[11px] font-bold text-red-500 hover:underline flex items-center gap-1"
                >
                  View Portfolio →
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}