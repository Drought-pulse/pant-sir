"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ArrowLeft } from "lucide-react";
import Navbar from "@/app/components/navbar";

export default function SignupPage() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.email || !formData.password || !formData.confirmPassword) {
      toast.error("All fields are required");
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }

    setLoading(true);

    try {
      const res = await fetch("/api/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await res.json();

      if (res.ok) {
        toast.success("User created successfully!");
        setTimeout(() => {
          router.push("/login");
        }, 1500);
      } else {
        toast.error(result.message || "Something went wrong");
      }
    } catch (err) {
      toast.error("Failed to connect to the server.");
    }

    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />

      {/* Toast Notifications */}
      <ToastContainer position="top-right" autoClose={3000} hideProgressBar />

      {/* Back Button & Heading */}
      <div className="pt-[120px] px-4 max-w-3xl mx-auto flex items-center gap-4">
        <button 
          onClick={() => router.back()} 
          className="flex items-center gap-2 text-[#2060b6] hover:underline"
        >
          <ArrowLeft size={20} />
          <span className="text-lg font-medium">Back</span>
        </button>
      </div>

      {/* Signup Heading */}
      <div className="text-center px-4 mt-4">
        <h2 className="text-3xl font-bold text-[#2060b6]">Create Official User</h2>
        <p className="text-gray-600 mt-2">
          You can create multiple official user IDs, giving officials flexibility to log in with their own credentials.
        </p>
      </div>

      {/* Signup Form */}
      <form onSubmit={handleSubmit} className="max-w-lg mx-auto mt-6 space-y-4 px-4">
        {/* Email */}
        <div>
          <label className="block text-sm font-medium">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full mt-1 p-3 border rounded-md"
            required
          />
        </div>

        {/* Password */}
        <div>
          <label className="block text-sm font-medium">Password</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="w-full mt-1 p-3 border rounded-md"
            required
            minLength={6}
          />
        </div>

        {/* Confirm Password */}
        <div>
          <label className="block text-sm font-medium">Confirm Password</label>
          <input
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            className="w-full mt-1 p-3 border rounded-md"
            required
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-[#2060b6] text-white py-3 rounded-md hover:bg-blue-600 transition"
          disabled={loading}
        >
          {loading ? "Creating..." : "Create User"}
        </button>
      </form>
    </div>
  );
}
