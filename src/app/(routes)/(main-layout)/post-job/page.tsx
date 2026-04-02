"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function PostJobPage() {
  const [formData, setFormData] = useState({
    title: "",
    company: "",
    location: "",
    salary: "",
    jobType: "",
    experience: "",
    skills: "",
    description: "",
    image: null as File | null,
  });
const router = useRouter();
  const [errors, setErrors] = useState<any>({});
  const [submitted, setSubmitted] = useState(false);
  const [showToast, setShowToast] = useState(false);

  const handleChange = (e: any) => {
    const { name, value, files } = e.target;

    if (name === "image") {
      setFormData({ ...formData, image: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  // ✅ VALIDATION
  const validate = () => {
    let newErrors: any = {};
    let valid = true;

    const requiredFields = [
      "title",
      "company",
      "location",
      "salary",
      "jobType",
      "experience",
    ];

    requiredFields.forEach((field) => {
      if (!formData[field as keyof typeof formData]) {
        newErrors[field] = "This field is required";
        valid = false;
      }
    });

    setErrors(newErrors);
    return valid;
  };

const handleSubmit = () => {
  if (!validate()) return;

  setShowToast(true);

  setTimeout(() => {
    setShowToast(false);
    setSubmitted(true);
  }, 1500); // 👈 delay
};

  return (
    <div className="min-h-screen bg-gray-50 py-8">

      {/* ✅ TOAST */}
      {showToast && (
        <div className="fixed top-5 right-5 bg-black text-white px-4 py-2 rounded-lg shadow z-50">
          🎉 Job Posted Successfully!
        </div>
      )}

      {!submitted ? (
        // ================= FORM =================
       <div className="max-w-5xl mx-auto px-4">
         {/* BACK BUTTON */}
 <button
  onClick={() => router.back()}
  className="mb-4 px-4 py-2 bg-red-500 text-white text-sm font-medium rounded-full hover:bg-red-600 transition duration-200"
>
  ← Back
</button>
  <div className="bg-white p-8 rounded-2xl shadow">

    <h2 className="text-2xl font-bold mb-6">Post a Job</h2>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

      {/* LEFT COLUMN */}
      <div className="space-y-4">

        <input name="title" placeholder="Job Title *"
          onChange={handleChange}
          className="w-full border p-3 rounded-lg" />

        <input name="company" placeholder="Company Name *"
          onChange={handleChange}
          className="w-full border p-3 rounded-lg" />

        <input name="location" placeholder="Location *"
          onChange={handleChange}
          className="w-full border p-3 rounded-lg" />

        <input name="salary" placeholder="Salary (e.g. 5-10 LPA) *"
          onChange={handleChange}
          className="w-full border p-3 rounded-lg" />

      </div>

      {/* RIGHT COLUMN */}
      <div className="space-y-4">

        <select name="jobType"
          onChange={handleChange}
          className="w-full border p-3 rounded-lg">
          <option value="">Select Job Type *</option>
          <option>Full-time</option>
          <option>Part-time</option>
          <option>Internship</option>
          <option>Remote</option>
        </select>

        <input name="experience"
          placeholder="Experience (e.g. 2+ years) *"
          onChange={handleChange}
          className="w-full border p-3 rounded-lg" />

        <input name="skills"
          placeholder="Skills (React, Node, etc)"
          onChange={handleChange}
          className="w-full border p-3 rounded-lg" />

      </div>

      {/* FULL WIDTH */}
      <div className="md:col-span-2 space-y-4">

        <textarea name="description"
          placeholder="Job Description"
          onChange={handleChange}
          rows={4}
          className="w-full border p-3 rounded-lg" />

        <input type="file"
          name="image"
          onChange={handleChange}
          className="w-full border p-2 rounded-lg" />

      </div>

    </div>

    {/* BUTTON */}
    <button
      onClick={handleSubmit}
      className="w-full mt-6 bg-red-500 hover:bg-red-600 text-white py-3 rounded-lg font-semibold"
    >
      Post Job
    </button>

  </div>
</div>
      ) : (
        // ================= PREVIEW =================
        <div className="max-w-4xl mx-auto px-4">
          <div className="bg-white p-6 rounded-2xl shadow space-y-4">

            <h2 className="text-2xl font-bold">{formData.title}</h2>

            <p className="text-gray-600">
              {formData.company} • {formData.location}
            </p>

            <div className="flex gap-3 flex-wrap text-sm">
              <span className="bg-gray-100 px-3 py-1 rounded">{formData.jobType}</span>
              <span className="bg-gray-100 px-3 py-1 rounded">{formData.experience}</span>
              <span className="bg-gray-100 px-3 py-1 rounded">{formData.salary}</span>
            </div>

            {/* IMAGE PREVIEW */}
            {formData.image && (
              <img
                src={URL.createObjectURL(formData.image)}
                className="w-full h-64 object-cover rounded-lg"
              />
            )}

            <p className="text-gray-700">{formData.description}</p>

            {formData.skills && (
              <p className="text-sm text-gray-500">
                Skills: {formData.skills}
              </p>
            )}

          </div>
        </div>
      )}

    </div>
  );
}