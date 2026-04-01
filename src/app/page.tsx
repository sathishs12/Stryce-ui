// import { redirect } from "next/navigation";

import LoginPage from "@/components/auth/loginpage";
import { Suspense } from "react"
// export default function Home() {
//   redirect("/feed");
// }



export default function Home() {
  return (
    <Suspense fallback={null}>
      <LoginPage />
    </Suspense>
  )
}