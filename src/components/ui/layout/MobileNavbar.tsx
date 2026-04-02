"use client"

import { Rss, LayoutDashboard, UserSquare2, ShieldCheck, User } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Sheet, SheetContent, SheetTrigger, SheetHeader, SheetTitle, SheetDescription } from "@/components/ui/sheet"
import ProfileCard from "@/modules/feed/sections/profile-card"

export default function MobileNavbar() {
  const pathname = usePathname()
  // ✅ Hide on auth pages (covers all query param variants too)
  const authRoutes = ["/", "/signup", "/post-job"]
  if (authRoutes.includes(pathname)) return null

  const NavItem = ({ icon: Icon, href, label }: any) => {
    const active = pathname === href
    return (
      <Link href={href} className="flex flex-col items-center gap-1 flex-1">
        <Icon className={`h-5 w-5 ${active ? "text-[#EF4444]" : "text-gray-400"}`} />
        <span className={`text-[10px] font-bold ${active ? "text-gray-900" : "text-gray-400"}`}>{label}</span>
      </Link>
    )
  }

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-100 px-2 py-3 z-50 flex items-center justify-around pb-safe">
      <NavItem icon={Rss} href="/feed" label="Feed" />
      <NavItem icon={LayoutDashboard} href="/company-dashboard" label="Company" />
      <NavItem icon={UserSquare2} href="/freelancer-dashboard" label="Freelancer" />
      <NavItem icon={ShieldCheck} href="/admin" label="Admin" />
      
      {/* Profile Trigger */}
      <Sheet>
       <SheetTrigger asChild>
  <div className="flex flex-col items-center gap-1 flex-1 cursor-pointer">
    <User className="h-5 w-5 text-gray-400" />
    <span className="text-[10px] font-bold text-gray-400">Profile</span>
  </div>
</SheetTrigger>
        <SheetContent side="bottom" className="rounded-t-[2rem] p-4 bg-[#FAFBFC]">
            <SheetHeader className="sr-only">
                <SheetTitle>User Profile</SheetTitle>
                <SheetDescription>View and edit your profile details</SheetDescription>
            </SheetHeader>
            <div className="py-4">
                <ProfileCard />
            </div>
        </SheetContent>
      </Sheet>
    </div>
  )
}