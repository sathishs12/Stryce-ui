"use client"
import { X, CheckCircle2, ShieldCheck } from "lucide-react"

interface UnlockContactModalProps {
  creator: {
    name: string;
    avatarImage: string;
    role: string;
  };
  onClose: () => void;
}

export function UnlockContactModal({ creator, onClose }: UnlockContactModalProps) {
  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 sm:p-6"
      onClick={onClose}
    >
      <div
        className="relative bg-white rounded-[24px] shadow-2xl w-full max-w-[700px] max-h-[90vh] overflow-y-auto sm:overflow-hidden animate-in fade-in zoom-in duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button - Moved slightly for better touch target */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-gray-400 hover:text-gray-700 transition-colors z-20 p-1"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex flex-col sm:flex-row h-full">
          
          {/* LEFT COLUMN - Main Info */}
          <div className="flex-1 p-6 lg:p-10 border-b sm:border-b-0 sm:border-r border-gray-100">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 md:w-16 md:h-16 rounded-full overflow-hidden border-2 border-gray-100 shrink-0 shadow-sm">
                <img src={creator.avatarImage} alt={creator.name} className="w-full h-full object-cover" />
              </div>
              <div className="min-w-0 pr-6"> {/* pr-6 to avoid X button on small screens */}
                <div className="flex flex-col xs:flex-row xs:items-center gap-1.5 xs:gap-2 mb-1">
                  <span className="font-black text-[17px] md:text-[19px] text-gray-900 truncate">
                    {creator.name}
                  </span>
                  <span className="inline-flex w-fit items-center gap-1 px-2 py-0.5 rounded-full bg-blue-50 border border-blue-200 text-blue-600 text-[9px] font-bold uppercase tracking-wider shrink-0">
                    <CheckCircle2 className="w-3 h-3 fill-blue-500 text-white" />
                    Verified
                  </span>
                </div>
                <p className="text-gray-400 text-[13px] font-medium leading-tight truncate">
                    {creator.role}
                </p>
              </div>
            </div>

            <p className="font-bold text-[14px] text-gray-900 mb-4">Unlock Contact Details:</p>
            <ul className="space-y-3.5 mb-8">
              {["Primary email address", "Direct Phone / WhatsApp", "Social links (LinkedIn, Twitter)"].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                  <span className="text-[13.5px] text-gray-600 font-medium leading-tight">{item}</span>
                </li>
              ))}
            </ul>

            <div className="space-y-3">
                <p className="font-bold text-[13px] text-gray-900">Unlock Once, Keep Forever</p>
                <div className="inline-flex items-center gap-2 px-3.5 py-2 rounded-full border border-green-200 bg-green-50/50 text-green-700 text-[11px] font-bold">
                <ShieldCheck className="w-4 h-4" />
                Safe to connect · Used by verified buyers
                </div>
            </div>
          </div>

          {/* RIGHT COLUMN - Pricing & CTA */}
          <div className="w-full sm:w-[280px] p-6 lg:p-10 flex flex-col justify-between gap-8 bg-gray-50/80">
            <div>
              <p className="text-[12px] font-bold text-gray-400 uppercase tracking-widest mb-2">Premium access</p>
              <div className="flex items-baseline gap-2">
                <p className="text-gray-400 line-through text-[16px]">₹199</p>
                <p className="text-[42px] font-black text-gray-900 leading-none">₹149</p>
              </div>
              <p className="text-[13px] font-medium text-gray-400 mt-2">One-time payment</p>

              <div className="mt-6 rounded-2xl border border-gray-200 bg-white p-4 text-[12px] text-gray-500 space-y-2 shadow-sm">
                <p className="leading-snug">
                    Freelancer earns <span className="font-bold text-gray-900">30%</span> per unlock.
                </p>
                <div className="flex gap-4 pt-1 border-t border-gray-50 mt-1">
                  <span className="flex items-center gap-1.5 font-medium">Free: <b className="text-gray-900">3</b></span>
                  <span className="flex items-center gap-1.5 font-medium">Paid: <b className="text-gray-900">0</b></span>
                </div>
              </div>
            </div>

            <div className="space-y-3">
              <button className="w-full h-[52px] rounded-full bg-[#ED1D25] hover:bg-red-700 text-white font-bold text-[15px] transition-all active:scale-95 shadow-lg shadow-red-200/50">
                Unlock Contact
              </button>
              <button className="w-full h-[52px] rounded-full border border-gray-200 bg-white hover:bg-gray-50 text-gray-700 font-bold text-[14px] flex items-center justify-center gap-2 transition-all active:scale-95">
                Pay With Razorpay
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}