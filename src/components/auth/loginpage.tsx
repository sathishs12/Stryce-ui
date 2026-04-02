"use client";

import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import TestimonialCarousel from "../common/TestimonialCarousel";
import { Eye, EyeOff, Mail, Lock, LogIn, Check } from "lucide-react";
import Link from "next/link";

export default function LoginPage() {
  const [loginType, setLoginType] = useState<"individual" | "organization">("individual");
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();
  const searchParams = useSearchParams();
const [email, setEmail] = useState("")
const [password, setPassword] = useState("")
const [errors, setErrors] = useState({
  email: "",
  password: "",
})
const isOrg = loginType === "organization"
  useEffect(() => {
    const type = searchParams.get("type");
    setLoginType(type === "organization" ? "organization" : "individual");
  }, [searchParams]);
const validate = () => {
  let isValid = true
  const newErrors = { email: "", password: "" }

  // Email validation
  if (!email) {
    newErrors.email = "Email is required"
    isValid = false
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    newErrors.email = "Enter a valid email"
    isValid = false
  }

  // Password validation
  if (!password) {
    newErrors.password = "Password is required"
    isValid = false
  } else if (password.length < 6) {
    newErrors.password = "Password must be at least 6 characters"
    isValid = false
  }

  setErrors(newErrors)
  return isValid
}

const handleLogin = () => {
  if (!validate()) return

  // ✅ If valid → proceed
  router.push("/feed")
}

  const testimonials = [
    {
      image: "/image/welcome-banner1.jpg",
      text: "Stryce transformed our hiring cycle from 45 days to just 12. The AI matching is remarkably accurate.",
      author: "David Chen",
      role: "Head of Talent @ TechFlow",
    },
    {
      image: "/image/welcome-banner2.jpg",
      text: "We reduced hiring costs by 40% while improving candidate quality.",
      author: "Sarah Lee",
      role: "HR Director @ Nexgen",
    },
    {
      image: "/image/welcome-banner3.jpg",
      text: "Automation saved us countless hours every week.",
      author: "Michael Ross",
      role: "CTO @ Buildfast",
    },
  ];

  return (
    <div className="bg-white">

      {/* TOP LOGIN SECTION */}
      {/* <div className="flex min-h-screen items-center justify-center px-4 sm:px-6 py-8 md:py-0"> */}
        <div className="flex items-start md:items-center justify-center px-4 sm:px-6 py-6 md:py-12">
        <div className="w-full max-w-6xl flex flex-col md:flex-row rounded-2xl overflow-hidden">

          {/* LEFT SIDE — hidden on mobile */}
          <div className="w-full md:w-1/2 p-6 sm:p-10 md:p-12 hidden md:flex flex-col justify-center">

            {/* BADGE */}
            <div className="inline-flex items-center gap-2 bg-red-50 text-red-500 px-3 py-1 rounded-full text-xs font-semibold w-fit mb-4">
              <span className="w-2 h-2 bg-red-500 rounded-full" />
              {loginType === "individual" ? "FOR INDIVIDUAL" : "FOR ORGANIZATION"}
            </div>

            {/* TITLE */}
            <h1 className="font-black text-4xl lg:text-[53px] leading-tight lg:leading-[60px] tracking-tight">
              <span className="text-red-500">
                {loginType === "individual" ? "Individual" : "Organization"}
              </span>{" "}
              <span className="text-gray-900">Login</span>
            </h1>

            {/* DESCRIPTION */}
            <p className="text-base lg:text-[18px] leading-relaxed text-gray-600 mt-4 max-w-md">
              Connect with top-tier organizations and find your next career opportunity in one seamless platform.
            </p>

            {/* FEATURES */}
            <ul className="mt-6 space-y-3 text-gray-700">
              {[
                "Access 10k+ active job listings weekly",
                "Personalized career matching",
                "Build your professional profile",
              ].map((feat) => (
                <li key={feat} className="flex items-center gap-3 text-sm lg:text-base font-medium">
                  <span className="flex items-center justify-center w-5 h-5 lg:w-6 lg:h-6 rounded-full bg-red-100 text-red-600 text-[11px] font-bold flex-shrink-0">
                   <Check className="text-red-500 w-3 h-3" />
                  </span>
                  {feat}
                </li>
              ))}
            </ul>

            {/* AVATAR + TEXT */}
            <div className="flex items-center gap-4 mt-8">
              <div className="flex -space-x-3">
                {[1, 2, 3].map((n) => (
                  <img
                    key={n}
                    src={`https://randomuser.me/api/portraits/women/${n}.jpg`}
                    className="w-10 h-10 lg:w-[52px] lg:h-[52px] rounded-full border-2 border-white"
                    alt="avatar"
                  />
                ))}
              </div>
              <p className="text-sm text-gray-600">
                Joined by{" "}
                <span className="text-red-500 font-semibold">5,000+</span>{" "}
                top tech companies
              </p>
            </div>
          </div>

          {/* RIGHT SIDE — full width on mobile */}
{/* RIGHT SIDE — full width on mobile */}
<div className="w-full md:w-1/2 flex flex-col items-center justify-center py-0 md:p-10">

  {/* ✅ Mobile-only title — ABOVE the card */}
  <div className="md:hidden w-full max-w-md mb-4 px-1">
    <div className="inline-flex items-center gap-2 bg-red-50 text-red-500 px-3 py-1 rounded-full text-xs font-semibold w-fit mb-2">
      <span className="w-2 h-2 bg-red-500 rounded-full" />
      {loginType === "individual" ? "FOR INDIVIDUAL" : "FOR ORGANIZATION"}
    </div>
    <h1 className="font-black text-2xl tracking-tight">
      <span className="text-red-500">
        {loginType === "individual" ? "Individual" : "Organization"}
      </span>{" "}
      <span className="text-gray-900">Login</span>
    </h1>
  </div>

  {/* CARD */}
  <div className="w-full max-w-md border border-gray-200 rounded-2xl p-5 sm:p-8 shadow-sm">
    {/* HEADING */}
    <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-1">Welcome Back</h2>
              <p className="text-xs sm:text-sm text-gray-500 mb-5 sm:mb-6">
                Please enter your details to sign in
              </p>

              {/* EMAIL */}
          <div className="mb-3 sm:mb-4">
<label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">
  {isOrg ? "Work Email" : "Email"}
</label>

  {/* INPUT WRAPPER */}
  <div className="relative">
    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />

    <input
  type="email"
  value={email}
  onChange={(e) => setEmail(e.target.value)}
  placeholder={isOrg ? "name@company.com" : "Enter your email"}
  className={`w-full pl-10 pr-4 py-2.5 border rounded-lg text-sm focus:outline-none transition
    ${errors.email ? "border-red-500" : "border-gray-200"}`}
/>
  </div>

  {/* ERROR OUTSIDE */}
  {errors.email && (
    <p className="text-red-500 text-xs mt-1">{errors.email}</p>
  )}
</div>

              {/* PASSWORD */}
          <div className="mb-3">
  <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">
    Password
  </label>

  <div className="relative">
    <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />

    <input
      type={showPassword ? "text" : "password"}
      value={password}
      onChange={(e) => setPassword(e.target.value)}
      placeholder="••••••••"
      className={`w-full pl-10 pr-10 py-2.5 border rounded-lg text-sm focus:outline-none transition
        ${errors.password ? "border-red-500" : "border-gray-200"}`}
    />

    <button
      type="button"
      onClick={() => setShowPassword(!showPassword)}
      className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
    >
      {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
    </button>
  </div>

  {/* ERROR OUTSIDE */}
  {errors.password && (
    <p className="text-red-500 text-xs mt-1">{errors.password}</p>
  )}
</div>

              {/* REMEMBER + FORGOT */}
              <div className="flex items-center justify-between text-xs sm:text-sm mb-4 sm:mb-5">
                <label className="flex items-center gap-1.5 text-gray-600 cursor-pointer">
                  <input type="checkbox" className="accent-red-500 w-3.5 h-3.5" />
                  Remember me
                </label>
                <span className="text-red-500 cursor-pointer hover:underline font-medium">
                  Forgot password?
                </span>
              </div>

              {/* LOGIN BUTTON */}
            <button
  onClick={handleLogin}
  className="w-full flex items-center justify-center gap-2 bg-red-500 hover:bg-red-600 text-white py-2.5 rounded-lg font-semibold text-sm transition mb-4"
>
  Log In
  <LogIn className="h-4 w-4" />
</button>

              {/* DIVIDER */}
              <div className="flex items-center gap-3 mb-4">
                <div className="flex-1 h-px bg-gray-200" />
                <span className="text-[10px] sm:text-xs text-gray-400 font-medium whitespace-nowrap">
                  OR CONTINUE WITH
                </span>
                <div className="flex-1 h-px bg-gray-200" />
              </div>

              {/* SOCIAL BUTTONS */}
              <div className="flex gap-2 sm:gap-3 mb-4 sm:mb-5">
                <button className="flex-1 flex items-center justify-center gap-1.5 sm:gap-2 border border-gray-200 rounded-lg py-2 sm:py-2.5 text-xs sm:text-sm font-medium text-gray-700 hover:bg-gray-50 transition">
                  <svg className="w-4 h-4 flex-shrink-0" viewBox="0 0 24 24">
                    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                  </svg>
                  Google
                </button>
                <button className="flex-1 flex items-center justify-center gap-1.5 sm:gap-2 border border-gray-200 rounded-lg py-2 sm:py-2.5 text-xs sm:text-sm font-medium text-gray-700 hover:bg-gray-50 transition">
                  <svg className="w-4 h-4 flex-shrink-0" viewBox="0 0 24 24" fill="#0A66C2">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                  LinkedIn
                </button>
              </div>

              {/* SIGN UP */}
              <p className="text-xs sm:text-sm text-center text-gray-500">
                Don't have an account?{" "}
                <Link href="/signup" className="text-red-500 font-semibold hover:underline">
                  Create Profile
                </Link>
              </p>

            </div>
          </div>

        </div>
      </div>

      {/* TESTIMONIAL CAROUSEL */}
      <TestimonialCarousel items={testimonials} />

      {/* FEATURE SECTION */}
      <div className="text-center mt-12 sm:mt-16 px-4 sm:px-6">
        <h2 className="text-xl sm:text-3xl font-bold">
          Designed for speed, built for precision.
        </h2>
        <p className="text-gray-500 mt-3 max-w-xl mx-auto text-sm sm:text-base">
          Stop digging through piles of resumes. Stryce does the heavy lifting so you can focus on making meaningful connections.
        </p>
      </div>

      {/* CARDS */}
    <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 mt-8 sm:mt-10 px-4 sm:px-6 pb-12 sm:pb-16">
  {[
    {
      icon: "/image/Overlay.png",
      title: "Precision Sourcing",
      desc: "Our AI analyzes millions of profiles to find candidates that exactly match your technical requirements and culture.",
    },
    {
      icon: "/image/Overlay1.png",
      title: "Automated Pipelines",
      desc: "Automate scheduling, follow-ups, and screenings. Keep your candidates engaged without lifting a finger.",
    },
    {
      icon: "/image/Overlay2.png",
      title: "Team Sync",
      desc: "Centralized feedback loops and scorecards ensure your entire team is aligned on every single hire.",
    },
  ].map((card) => (
    <div
      key={card.title}
      className="bg-gray-50 p-6 rounded-2xl border border-gray-100 hover:shadow-md transition-all duration-300"
    >
      {/* ICON BOX */}
      <div className="w-10 h-10 flex items-center justify-center rounded-lg mb-4">
        <img
          src={card.icon}
          alt={card.title}
          className="w-10 h-10 object-contain"
        />
      </div>

      {/* TITLE */}
      <h3 className="font-semibold text-[#0F172A] mb-2 text-sm sm:text-base">
        {card.title}
      </h3>

      {/* DESCRIPTION */}
      <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
        {card.desc}
      </p>
    </div>
  ))}
</div>
    </div>
  );
}