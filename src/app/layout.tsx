import "./globals.css"
import { TooltipProvider } from "@/components/ui/tooltip"
import { Toaster } from "@/components/ui/sonner"
import Header from "@/components/ui/layout/header"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>

        <TooltipProvider>

          <Header />

          <main className="p-6 bg-gray-50 min-h-screen">
            {children}
          </main>

          <Toaster />

        </TooltipProvider>

      </body>
    </html>
  )
}