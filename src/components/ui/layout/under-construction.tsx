"use client"

import { Construction, ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function UnderConstruction({ title }: { title: string }) {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center px-4">
      <div className="w-20 h-20 bg-red-50 rounded-3xl flex items-center justify-center mb-6">
        <Construction className="h-10 w-10 text-red-500" />
      </div>
      
      <h1 className="text-2xl font-bold text-gray-900 mb-2">
        {title} is Under Construction
      </h1>
      
      <p className="text-gray-500 max-w-xs mx-auto mb-8 text-[15px]">
        We're working hard to bring this feature to life. Check back soon for updates!
      </p>

      <Link href="/feed">
        <Button className="rounded-full bg-[#EF4444] hover:bg-red-600 px-8 font-bold">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Feed
        </Button>
      </Link>
    </div>
  )
}