// "use client"

// import * as React from "react"
// import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
// import { Button } from "@/components/ui/button"
// import { 
//   Settings, 
//   RefreshCcw, 
//   Menu, 
//   LayoutDashboard, 
//   UserSquare2, 
//   ShieldCheck, 
//   Rss 
// } from "lucide-react"
// import {
//   Sheet,
//   SheetContent,
//   SheetHeader,
//   SheetTitle,
//   SheetDescription, // Added this
//   SheetTrigger,
// } from "@/components/ui/sheet"
// import Link from "next/link"

// export default function Header() {
//   const [isOpen, setIsOpen] = React.useState(false)

//   const MobileNavItem = ({ icon: Icon,href, label, active = false }: any) => (
//     <Link href={href}>
//     <button className={`flex items-center gap-4 w-full p-4 rounded-2xl transition-all ${
//       active 
//       ? "bg-[#EF4444] text-white shadow-lg shadow-red-100" 
//       : "text-gray-600 hover:bg-gray-50 active:scale-95"
//     }`}>
//       <Icon className={`h-5 w-5 ${active ? "text-white" : "text-gray-400"}`} />
//       <span className="text-[15px] font-bold">{label}</span>
//     </button>
//     </Link>
//   )

//   return (
//     <header className="sticky top-0 z-50 w-full border-b border-gray-100 bg-white/80 backdrop-blur-md">
//       <div className="mx-auto flex max-w-[1400px] items-center justify-between px-4 py-3 md:px-8 md:py-4">
        
//         {/* LEFT - LOGO */}
//         <Link href="/" className="flex items-center gap-3">
//           <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#EF4444] text-lg font-black text-white shadow-sm shadow-red-200">
//             SY
//           </div>
//           <div className="flex flex-col">
//             <span className="text-base font-bold tracking-tight text-gray-900 leading-none">
//               Stryce
//             </span>
//             <span className="hidden xs:block text-[10px] font-medium text-gray-400 mt-0.5">
//               Leads not link
//             </span>
//           </div>
//        </Link>

//         {/* CENTER - NAVIGATION (DESKTOP) */}
//         <nav className="hidden items-center gap-2 md:flex">
//           <Link href="/feed">
//   <Button size="sm" className="h-9 rounded-full bg-[#EF4444] px-6 text-xs font-bold shadow-md shadow-red-100 hover:bg-red-600">
//     Feed
//   </Button>
// </Link>
//           <Button variant="ghost" className="text-xs font-bold text-gray-500 hover:text-gray-900 hover:bg-transparent">
//             Company Dashboard
//           </Button>
//           <Button variant="ghost" className="text-xs font-bold text-gray-500 hover:text-gray-900 hover:bg-transparent">
//             Freelancer Dashboard
//           </Button>
//           <Button variant="ghost" className="text-xs font-bold text-gray-500 hover:text-gray-900 hover:bg-transparent">
//             Admin
//           </Button>
//         </nav>

//         {/* RIGHT - ACTIONS */}
//         <div className="flex items-center gap-3 md:gap-6">
//           <div className="hidden sm:flex items-center gap-4 border-r border-gray-100 pr-4">
//             <button className="text-gray-400 transition-colors hover:text-gray-600">
//               <Settings className="h-5 w-5 stroke-[2.2px]" />
//             </button>
//             <button className="text-gray-400 transition-colors hover:text-gray-600">
//               <RefreshCcw className="h-5 w-5 stroke-[2.2px]" />
//             </button>
//           </div>

//           <Avatar className="h-9 w-9 ring-2 ring-gray-50 ring-offset-2">
//             <AvatarImage src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&h=100&fit=crop" />
//             <AvatarFallback className="bg-orange-100 text-xs font-bold text-orange-600">JD</AvatarFallback>
//           </Avatar>

//           {/* MOBILE MENU TRIGGER */}
//           <div className="md:hidden">
//             <Sheet open={isOpen} onOpenChange={setIsOpen}>
//               <SheetTrigger asChild>
//                 <Button variant="ghost" size="icon" className="h-10 w-10">
//                   <Menu className="h-6 w-6 text-gray-600" />
//                 </Button>
//               </SheetTrigger>
//               <SheetContent side="right" className="w-[300px] p-0 border-l-0">
                
//                 {/* FIXED SECTION: Using SheetHeader and SheetTitle to resolve error */}
//                 <SheetHeader className="p-6 border-b border-gray-50 text-left">
//                   <SheetTitle>
//                     <div className="flex items-center gap-3">
//                         <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#EF4444] text-sm font-black text-white">
//                         SY
//                         </div>
//                         <span className="text-lg font-bold text-gray-900">Stryce</span>
//                     </div>
//                   </SheetTitle>
//                   {/* Visually hidden description for screen readers (Accessibility requirement) */}
//                   <SheetDescription className="sr-only">
//                     Navigation Menu
//                   </SheetDescription>
//                 </SheetHeader>

//                 {/* Nav Links List */}
//                 <div className="p-4 space-y-1">
//                  <div className="p-4 space-y-1">
//   <MobileNavItem icon={Rss} label="Feed" href="/feed" active={true} />
//   <MobileNavItem icon={LayoutDashboard} label="Company Dashboard" href="/company-dashboard" />
//   <MobileNavItem icon={UserSquare2} label="Freelancer Dashboard" href="/freelancer-dashboard" />
//   <MobileNavItem icon={ShieldCheck} label="Admin" href="/admin" />
// </div>
//                 </div>

//                 {/* Footer Section */}
//                 <div className="absolute bottom-0 left-0 right-0 p-6 bg-gray-50/50 border-t border-gray-100">
//                   <div className="flex items-center justify-around">
//                     <button className="flex flex-col items-center gap-1.5 text-gray-500 hover:text-gray-900 transition-colors">
//                       <div className="p-3 bg-white rounded-2xl shadow-sm border border-gray-100">
//                         <Settings className="h-5 w-5" />
//                       </div>
//                       <span className="text-[11px] font-bold uppercase tracking-wider">Settings</span>
//                     </button>
//                     <button className="flex flex-col items-center gap-1.5 text-gray-500 hover:text-gray-900 transition-colors">
//                       <div className="p-3 bg-white rounded-2xl shadow-sm border border-gray-100">
//                         <RefreshCcw className="h-5 w-5" />
//                       </div>
//                       <span className="text-[11px] font-bold uppercase tracking-wider">Sync Data</span>
//                     </button>
//                   </div>
//                 </div>
//               </SheetContent>
//             </Sheet>
//           </div>
//         </div>

//       </div>
//     </header>
//   )
// }

"use client"

import * as React from "react"
import { Search, SlidersHorizontal, Settings, RefreshCcw, Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger, SheetDescription } from "@/components/ui/sheet"
import Link from "next/link"
import Filters from "@/modules/feed/sections/filters"

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-100 bg-white/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-[1400px] items-center justify-between px-4 py-3 md:px-8">
        
        {/* LEFT - LOGO (Visible on both) */}
        <Link href="/" className="flex items-center gap-2 shrink-0">
          <div className="flex h-8 w-8 md:h-10 md:w-10 items-center justify-center rounded-lg md:rounded-xl bg-[#EF4444] text-sm md:text-lg font-black text-white">
            SY
          </div>
          <span className="text-sm md:text-base font-bold tracking-tight text-gray-900 hidden xs:block">
            Stryce
          </span>
        </Link>

        {/* MOBILE CENTER: SEARCH & FILTERS */}
        <div className="flex flex-1 items-center gap-2 px-3 md:hidden">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search..."
              className="w-full bg-gray-100 border-none rounded-full py-2 pl-9 pr-4 text-xs focus:ring-1 focus:ring-red-200 outline-none"
            />
          </div>
          
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="h-9 w-9 bg-gray-100 rounded-full">
                <SlidersHorizontal className="h-4 w-4 text-gray-600" />
              </Button>
            </SheetTrigger>
            <SheetContent side="bottom" className="rounded-t-[2rem] h-[80vh] p-0">
              <SheetHeader className="p-6 border-b">
                <SheetTitle>Filters</SheetTitle>
                <SheetDescription className="sr-only">Adjust your feed settings</SheetDescription>
              </SheetHeader>
              <div className="overflow-y-auto h-full pb-20">
                <Filters />
              </div>
            </SheetContent>
          </Sheet>
        </div>

        {/* DESKTOP NAVIGATION (Hidden on mobile) */}
        <nav className="hidden items-center gap-2 md:flex">
          <Link href="/feed">
            <Button size="sm" className="h-9 rounded-full bg-[#EF4444] px-6 text-xs font-bold hover:bg-red-600">Feed</Button>
          </Link>
          <Button variant="ghost" className="text-xs font-bold text-gray-500">Company Dashboard</Button>
          <Button variant="ghost" className="text-xs font-bold text-gray-500">Freelancer Dashboard</Button>
          <Button variant="ghost" className="text-xs font-bold text-gray-500">Admin</Button>
        </nav>

        {/* DESKTOP RIGHT ACTIONS */}
        <div className="hidden md:flex items-center gap-4">
            <Settings className="h-5 w-5 text-gray-400 cursor-pointer" />
            <RefreshCcw className="h-5 w-5 text-gray-400 cursor-pointer" />
            <div className="h-9 w-9 rounded-full bg-gray-200" /> {/* Avatar Placeholder */}
        </div>
      </div>
    </header>
  )
}