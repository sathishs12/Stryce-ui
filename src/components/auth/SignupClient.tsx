"use client";

import { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";

type Tab = "individual" | "organization";

const inputClass =
  "w-full px-3 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-red-100 focus:border-red-400 transition placeholder:text-gray-400";
const labelClass = "block text-xs font-medium text-gray-700 mb-1";

export default function SignupClient() {
  const [tab, setTab] = useState<Tab>("individual");
  const router = useRouter();
  const searchParams = useSearchParams();
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    jobTitle: "",
    organisation: "",
    website: "",
    email: "",
    phone: "",
    city: "",
    crn: "",
    referral: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const validate = () => {
    const newErrors: Record<string, string> = {};

    if (!form.firstName) newErrors.firstName = "First name is required";
    if (!form.lastName) newErrors.lastName = "Last name is required";
    if (!form.email) newErrors.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      newErrors.email = "Invalid email";
    if (!form.phone) newErrors.phone = "Phone number is required";
    if (!form.city) newErrors.city = "City is required";

    if (tab === "organization") {
      if (!form.jobTitle) newErrors.jobTitle = "Job title is required";
      if (!form.organisation) newErrors.organisation = "Company name is required";
      if (!form.website) newErrors.website = "Website is required";
      if (!form.crn) newErrors.crn = "CRN is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    router.push("/feed");
  };

  useEffect(() => {
    const type = searchParams.get("type");
    if (type === "organization") setTab("organization");
    else setTab("individual");
  }, [searchParams]);

  const handleTabChange = (t: Tab) => {
    setTab(t);
    setErrors({});
    router.push(`/signup?type=${t}`, { scroll: false });
  };

  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center px-4 sm:px-6 py-10">
      <h1 className="text-xl sm:text-3xl md:text-4xl font-extrabold text-center text-gray-900 mb-2 px-2">
        Create your Stryce{" "}
        <span className="text-red-500">
          {tab === "individual" ? "Individual" : "Organization"}
        </span>{" "}
        Account
      </h1>
      <p className="text-xs sm:text-sm text-gray-500 text-center mb-6 sm:mb-8 px-2">
        Join our exclusive network for top talent and world-class organizations.
      </p>

      <div className="w-full max-w-2xl border border-gray-200 rounded-2xl p-4 sm:p-6 md:p-8 shadow-sm bg-white">
        {/* TAB TOGGLE */}
        <div className="flex rounded-lg border border-gray-200 p-1 mb-6 sm:mb-8 w-full sm:w-fit mx-auto">
          {(["individual", "organization"] as Tab[]).map((t) => (
            <button
              key={t}
              onClick={() => handleTabChange(t)}
              className={`flex-1 sm:flex-none px-4 sm:px-8 py-2 rounded-md text-xs sm:text-sm font-semibold transition capitalize ${
                tab === t
                  ? "bg-red-500 text-white shadow-sm"
                  : "text-gray-400 hover:text-gray-600 bg-transparent"
              }`}
            >
              {t.charAt(0).toUpperCase() + t.slice(1)}
            </button>
          ))}
        </div>

        <form onSubmit={handleSubmit}>
          {/* ROW 1 — First + Last Name (shared) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-3 sm:mb-4">
            <div>
              <label className={labelClass}>
                First Name<span className="text-red-500">*</span>
              </label>
              <input
                name="firstName"
                value={form.firstName}
                onChange={handleChange}
                placeholder="Enter first name"
                className={`${inputClass} ${errors.firstName ? "border-red-500" : ""}`}
              />
              <p className="text-red-500 text-xs mt-1 min-h-[16px]">{errors.firstName}</p>
            </div>
            <div>
              <label className={labelClass}>
                Last Name<span className="text-red-500">*</span>
              </label>
              {/* ✅ Fix: was missing name/value/onChange */}
              <input
                name="lastName"
                value={form.lastName}
                onChange={handleChange}
                placeholder="Enter last name"
                className={`${inputClass} ${errors.lastName ? "border-red-500" : ""}`}
              />
              <p className="text-red-500 text-xs mt-1 min-h-[16px]">{errors.lastName}</p>
            </div>
          </div>

          {tab === "organization" ? (
            <>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-3 sm:mb-4">
                <div>
                  <label className={labelClass}>
                    Job Title<span className="text-red-500">*</span>
                  </label>
                  {/* ✅ Fix: was missing name/value/onChange */}
                  <input
                    name="jobTitle"
                    value={form.jobTitle}
                    onChange={handleChange}
                    placeholder="e.g. CTO"
                    className={`${inputClass} ${errors.jobTitle ? "border-red-500" : ""}`}
                  />
                  <p className="text-red-500 text-xs mt-1 min-h-[16px]">{errors.jobTitle}</p>
                </div>
                <div>
                  <label className={labelClass}>
                    Organisation<span className="text-red-500">*</span>
                  </label>
                  {/* ✅ Fix: was missing name/value/onChange */}
                  <input
                    name="organisation"
                    value={form.organisation}
                    onChange={handleChange}
                    placeholder="Company Name"
                    className={`${inputClass} ${errors.organisation ? "border-red-500" : ""}`}
                  />
                  <p className="text-red-500 text-xs mt-1 min-h-[16px]">{errors.organisation}</p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-3 sm:mb-4">
                <div>
                  <label className={labelClass}>
                    Website<span className="text-red-500">*</span>
                  </label>
                  {/* ✅ Fix: was value={form.phone} — wrong field! */}
                  <input
                    type="url"
                    name="website"
                    value={form.website}
                    onChange={handleChange}
                    placeholder="https://company.com"
                    className={`${inputClass} ${errors.website ? "border-red-500" : ""}`}
                  />
                  <p className="text-red-500 text-xs mt-1 min-h-[16px]">{errors.website}</p>
                </div>
                <div>
                  <label className={labelClass}>
                    Work Email<span className="text-red-500">*</span>
                  </label>
                  <input
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="email@company.com"
                    className={`${inputClass} ${errors.email ? "border-red-500" : ""}`}
                  />
                  <p className="text-red-500 text-xs mt-1 min-h-[16px]">{errors.email}</p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-3 sm:mb-4">
                <div>
                  <label className={labelClass}>
                    Phone Number<span className="text-red-500">*</span>
                  </label>
                  <input
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="Mobile Number"
                    className={`${inputClass} ${errors.phone ? "border-red-500" : ""}`}
                  />
                  <p className="text-red-500 text-xs mt-1 min-h-[16px]">{errors.phone}</p>
                </div>
                <div>
                  <label className={labelClass}>
                    City<span className="text-red-500">*</span>
                  </label>
                  {/* ✅ Fix: was missing name/value/onChange */}
                  <input
                    name="city"
                    value={form.city}
                    onChange={handleChange}
                    placeholder="e.g. San Francisco"
                    className={`${inputClass} ${errors.city ? "border-red-500" : ""}`}
                  />
                  <p className="text-red-500 text-xs mt-1 min-h-[16px]">{errors.city}</p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-6 sm:mb-8">
                <div>
                  <label className={labelClass}>
                    Corporate Registration Number<span className="text-red-500">*</span>
                  </label>
                  {/* ✅ Fix: was name="email" and value={form.crn} — name was wrong */}
                  <input
                    name="crn"
                    value={form.crn}
                    onChange={handleChange}
                    placeholder="CRN Number"
                    className={`${inputClass} ${errors.crn ? "border-red-500" : ""}`}
                  />
                  <p className="text-red-500 text-xs mt-1 min-h-[16px]">{errors.crn}</p>
                </div>
                <div>
                  <label className={labelClass}>Referral Code</label>
                  <input
                    name="referral"
                    value={form.referral}
                    onChange={handleChange}
                    placeholder="Optional"
                    className={inputClass}
                  />
                </div>
              </div>
            </>
          ) : (
            <>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-3 sm:mb-4">
                <div>
                  <label className={labelClass}>
                    Email<span className="text-red-500">*</span>
                  </label>
                  {/* ✅ Fix: was missing name attribute */}
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="email@company.com"
                    className={`${inputClass} ${errors.email ? "border-red-500" : ""}`}
                  />
                  <p className="text-red-500 text-xs mt-1 min-h-[16px]">{errors.email}</p>
                </div>
                <div>
                  <label className={labelClass}>
                    Phone Number<span className="text-red-500">*</span>
                  </label>
                  {/* ✅ Fix: was missing name/value/onChange */}
                  <input
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="Mobile Number"
                    className={`${inputClass} ${errors.phone ? "border-red-500" : ""}`}
                  />
                  <p className="text-red-500 text-xs mt-1 min-h-[16px]">{errors.phone}</p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-6 sm:mb-8">
                <div>
                  <label className={labelClass}>
                    City<span className="text-red-500">*</span>
                  </label>
                  {/* ✅ Fix: was missing name/value/onChange */}
                  <input
                    name="city"
                    value={form.city}
                    onChange={handleChange}
                    placeholder="London UK"
                    className={`${inputClass} ${errors.city ? "border-red-500" : ""}`}
                  />
                  <p className="text-red-500 text-xs mt-1 min-h-[16px]">{errors.city}</p>
                </div>
                <div>
                  <label className={labelClass}>Referral Code</label>
                  <input
                    name="referral"
                    value={form.referral}
                    onChange={handleChange}
                    placeholder="Enter Code (Optional)"
                    className={inputClass}
                  />
                </div>
              </div>
            </>
          )}

          {/* SUBMIT */}
          <div className="flex flex-col items-center gap-3">
            <button
              type="submit"
              className="w-full py-3 bg-red-500 hover:bg-red-600 text-white font-semibold rounded-lg text-sm transition sm:w-auto sm:px-16"
            >
              Register Account
            </button>
            <p className="text-sm text-gray-500">
              Already have an account?{" "}
              <Link href="/" className="text-red-500 font-semibold hover:underline">
                Sign In
              </Link>
            </p>
            <p className="text-xs text-gray-400 text-center">
              By registering, you agree to Stryce's{" "}
              <span className="underline cursor-pointer">Terms of Service</span> and{" "}
              <span className="underline cursor-pointer">Privacy Policy</span>.
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}