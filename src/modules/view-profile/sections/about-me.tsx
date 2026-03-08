import { User } from "lucide-react"

export default function AboutMe({ bio, experience, industry, retainer }: any) {
  return (
    <div className="bg-white p-6 rounded-[20px] border border-[#CBCBCB] w-full lg:w-[730px] min-h-[170px] flex flex-col justify-between">
      <div>
        <div className="inline-flex items-center gap-2 bg-[#ED1D25] text-white px-4 py-1.5 rounded-full mb-4">
          <User className="w-3.5 h-3.5 fill-white" />
          <span className="text-[12px] font-bold">About Me</span>
        </div>
        <p className="text-[13px] text-gray-500 leading-relaxed mb-4">
          {bio}
        </p>
      </div>

      <div className="flex flex-wrap gap-2">
        {[`Experience: ${experience}`, `Industry: ${industry}`, retainer].map((tag) => (
          <span key={tag} className="text-[10px] font-bold text-gray-500 bg-gray-50 border border-[#CBCBCB] rounded-full px-3 py-1">
            {tag}
          </span>
        ))}
      </div>
    </div>
  )
}