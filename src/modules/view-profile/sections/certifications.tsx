"use client"
import { Award, CheckCircle2 } from "lucide-react"

interface Certification {
  name: string
  issuer: string
  logo?: string
}

interface CertificationsProps {
  certifications?: Certification[]
}

export default function Certifications({
  certifications = [
    { name: "Meat Blueprint", issuer: "Certified Media Buying Professional" },
    { name: "Meat Blueprint", issuer: "Certified Media Buying Professional" },
  ],
}: CertificationsProps) {
  return (
    <div className="w-full lg:w-[730px] rounded-[20px] border border-[#CBCBCB] bg-white p-6 shadow-sm">
      {/* Red Pill Header */}
      <div className="mb-3">
        <div className="inline-flex items-center gap-2 bg-[#ED1D25] text-white px-4 py-1.5 rounded-full shadow-md shadow-red-100">
          <Award className="w-3.5 h-3.5 text-white" />
          <span className="text-[12px] font-bold">Certifications</span>
        </div>
      </div>

      {/* List */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
        {certifications.map((cert, i) => (
          <div key={i} className="flex items-center gap-4">
            {/* Logo placeholder */}
            <div className="w-12 h-12 rounded-xl bg-[#E5E7EB] flex items-center justify-center shrink-0">
               {/* Replace with <img> if you have cert logos */}
               <div className="w-8 h-5 bg-white/50 rounded-sm" /> 
            </div>
            
            <div className="min-w-0">
              <p className="text-[14px] font-bold text-gray-900 leading-tight truncate">
                {cert.name}
              </p>
              <div className="flex items-center gap-1.5 mt-1">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#22C55E] fill-[#22C55E] text-white" />
                <p className="text-[11px] text-gray-400 font-medium truncate">
                  {cert.issuer}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}