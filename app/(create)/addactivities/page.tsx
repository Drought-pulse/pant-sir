"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation"; // For navigating back
import Navbar from "@/app/components/navbar";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Loader2 } from "lucide-react";

const AddActivitiesPage = () => {
  const [formData, setFormData] = useState({
    projectName: "",
    unitOutput: "",
    customer: "",
    machineType: "",
    yearOfTest: "",
    remarks: "",
  });
  const [loading, setLoading] = useState(false); // Loading state for button
  const router = useRouter(); // To navigate back to the previous page

  // Handle form input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("/api/activities", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok) {
        toast.success("Activity added successfully!");
        // Reset form fields after successful submission
        setFormData({
          projectName: "",
          unitOutput: "",
          customer: "",
          machineType: "",
          yearOfTest: "",
          remarks: "",
        });
      } else {
        toast.error(data.error || "Failed to add activity");
      }
    } catch (err) {
      toast.error("Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="h-screen w-full bg-white">
      <Navbar />
      <ToastContainer position="top-right" autoClose={3000} hideProgressBar />

      <div className="lg:max-w-7xl mt-[140px] md:max-w-3xl mx-auto p-6 bg-white rounded-lg shadow-lg sm:p-12">
        {/* Back Button */}
        <button
          onClick={() => router.back()}
          className="text-[#2060b6] font-semibold mb-6 hover:text-indigo-600 focus:outline-none"
        >
          ← Back
        </button>

        <h1 className="text-3xl font-bold text-center mb-6 text-[#2060b6]">
          Add New Activity
        </h1>

        {/* Form to collect data for new activity */}
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Fields for Project Name, Unit Output, Customer */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="form-group">
              <label
                htmlFor="projectName"
                className="block text-lg font-medium text-gray-700"
              >
                Project Name
              </label>
              <input
                type="text"
                id="projectName"
                name="projectName"
                value={formData.projectName}
                onChange={handleChange}
                required
                className="mt-2 w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#2060b6]"
              />
            </div>

            <div className="form-group">
              <label
                htmlFor="unitOutput"
                className="block text-lg font-medium text-gray-700"
              >
                Unit Output
              </label>
              <input
                type="text"
                id="unitOutput"
                name="unitOutput"
                value={formData.unitOutput}
                onChange={handleChange}
                required
                className="mt-2 w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#2060b6]"
              />
            </div>

            <div className="form-group">
              <label
                htmlFor="customer"
                className="block text-lg font-medium text-gray-700"
              >
                Customer
              </label>
              <input
                type="text"
                id="customer"
                name="customer"
                value={formData.customer}
                onChange={handleChange}
                required
                className="mt-2 w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#2060b6]"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="form-group">
              <label
                htmlFor="machineType"
                className="block text-lg font-medium text-gray-700"
              >
                Type of Machine
              </label>
              <input
                type="text"
                id="machineType"
                name="machineType"
                value={formData.machineType}
                onChange={handleChange}
                required
                className="mt-2 w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#2060b6]"
              />
            </div>

            <div className="form-group">
              <label
                htmlFor="yearOfTest"
                className="block text-lg font-medium text-gray-700"
              >
                Year of Test
              </label>
              <input
                type="text"
                id="yearOfTest"
                name="yearOfTest"
                value={formData.yearOfTest}
                onChange={handleChange}
                required
                className="mt-2 w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#2060b6]"
              />
            </div>

            <div className="form-group">
              <label
                htmlFor="remarks"
                className="block text-lg font-medium text-gray-700"
              >
                Remarks
              </label>
              <input
                type="text"
                id="remarks"
                name="remarks"
                value={formData.remarks}
                onChange={handleChange}
                className="mt-2 w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#2060b6]"
              />
            </div>
          </div>

          {/* Submit Button with Loader */}
          <div className="w-full flex items-center justify-center">
            <div className="lg:w-[30vw] xl:w-[25vw] 2xl:w-[20vw] w-[70vw]">
              <button
                type="submit"
                className="w-full py-3 mt-6 bg-[#2060b6] text-white font-semibold rounded-lg hover:bg-[#154c8c] focus:outline-none focus:ring-2 focus:ring-[#154c8c] flex items-center justify-center gap-2"
                disabled={loading} // Disable button when loading
              >
                {loading && (
                  <Loader2 className="animate-spin h-5 w-5 text-white" />
                )}
                {loading ? "Adding..." : "Add Activity"}
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddActivitiesPage;
