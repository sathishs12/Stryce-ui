"use client"

import { Copy, CheckCircle2 } from "lucide-react"
import { useState } from "react"

interface ProfileUrlProps {
  username?: string
}

export default function ProfileUrl({ username = "johndoe" }: ProfileUrlProps) {
  const [copied, setCopied] = useState(false)
  const url = `Stryce.com /f/ ${username}`

  const handleCopy = () => {
    // Clean URL for clipboard
    const cleanUrl = `https://stryce.com/f/${username.replace(/\s/g, '')}`
    navigator.clipboard.writeText(cleanUrl)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    // Removed fixed h-[204]. Added responsive padding and rounded corners.
    <div className="w-full max-w-[436px] rounded-[24px] sm:rounded-[32px] border border-gray-100 bg-white p-5 sm:p-6 shadow-sm transition-all">
      
      {/* 1. Red Pill Header */}
      <div className="mb-5 sm:mb-6">
        <span className="bg-[#EE2B2B] text-white text-[12px] sm:text-[14px] font-bold px-4 py-1.5 rounded-full inline-block shadow-sm shadow-red-100">
          Profile URL
        </span>
      </div>

      {/* 2. URL Input Box */}
      <div className="flex items-center border border-gray-100 rounded-[16px] sm:rounded-[20px] overflow-hidden bg-white mb-4 transition-colors focus-within:border-gray-300">
        
        {/* URL Text Area - Adjusted font size for mobile to prevent early truncation */}
        <div className="flex-1 px-4 sm:px-5 py-3 sm:py-4 text-[13px] sm:text-[15px] text-gray-400 font-medium truncate select-all">
          {url}
        </div>
        
        {/* Copy Button - shrink-0 prevents the button from squishing on small screens */}
        <button 
          onClick={handleCopy}
          className="shrink-0 px-4 sm:px-6 py-3 sm:py-4 border-l border-gray-100 hover:bg-gray-50 active:bg-gray-100 transition-all flex items-center justify-center min-w-[56px] sm:min-w-[64px]"
          title="Copy to clipboard"
        >
          {copied ? (
            <CheckCircle2 className="w-5 h-5 text-green-500 animate-in zoom-in duration-300" />
          ) : (
            <Copy className="w-5 h-5 text-[#EE2B2B] transition-transform active:scale-90" strokeWidth={2.5} />
          )}
        </button>
      </div>

      {/* 3. Footer Text */}
      <p className="text-[11px] sm:text-[13px] text-gray-400 leading-relaxed font-medium px-1">
        Public Profile URL is always <span className="text-gray-500">Viewable</span>. Only contact details behind the paywall
      </p>
    </div>
  )
}