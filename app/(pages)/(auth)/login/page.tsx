"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "@/app/components/navbar";
import { ToastContainer } from "react-toastify";

export default function LoginPage() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.email || !formData.password) {
      toast.error("Email and password are required");
      return;
    }

    setLoading(true);

    try {
      const res = await fetch("/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await res.json();

      if (res.ok) {
        toast.success("Login successful!");
        setTimeout(() => {
          router.push("/officialspage"); // Redirect to the official page after success
        }, 1500);
      } else {
        toast.error(result.message || "Invalid credentials");
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

      {/* Main Content */}
      <div className="flex flex-col items-center justify-center pt-32 px-6">
        <h2 className="text-3xl font-bold text-[#2060b6] mb-2">Official Login</h2>
        <p className="text-gray-700 mb-6 text-center">
          Only authorized officials can log in to access the portal.
        </p>

        <form onSubmit={handleSubmit} className="w-full max-w-lg space-y-4">
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

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-[#2060b6] text-white py-3 rounded-md hover:bg-blue-600 transition"
            disabled={loading}
          >
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>
      </div>
    </div>
  );
}
