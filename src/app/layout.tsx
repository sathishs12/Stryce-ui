// // app/layout.tsx
// import "./globals.css"
// import { TooltipProvider } from "@/components/ui/tooltip"
// import { Toaster } from "@/components/ui/sonner"
// import Header from "@/components/ui/layout/header"
// import MobileNavbar from "@/components/ui/layout/MobileNavbar"

// export default function RootLayout({
//   children,
// }: {
//   children: React.ReactNode
// }) {
//   return (
//     <html lang="en">
//       <body className="bg-gray-50">
//         <TooltipProvider>
//           <Header />
//           {/* Removed p-6 from main to let individual pages handle padding if needed */}
//           <main className="min-h-screen pb-20 md:pb-0"> 
//             {children}
//           </main>
//           <MobileNavbar /> {/* Shows only on mobile */}
//           <Toaster />
//         </TooltipProvider>
//       </body>
//     </html>
//   )
// }
"use client";

import "./globals.css";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Toaster } from "@/components/ui/sonner";
import Header from "@/components/ui/layout/header";
import MobileNavbar from "@/components/ui/layout/MobileNavbar";
import { Suspense } from "react";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-gray-50">
        <TooltipProvider>

          {/* ✅ FIXED */}
          <Suspense fallback={null}>
            <Header />
          </Suspense>

          <main className="min-h-screen">{children}</main>

          <MobileNavbar />

          <Toaster />
        </TooltipProvider>
      </body>
    </html>
  );
}