import SignupClient from "@/components/auth/SignupClient"
import { Suspense } from "react"

export default function Page() {
  return (
    <Suspense fallback={null}>
      <SignupClient />
    </Suspense>
  )
}