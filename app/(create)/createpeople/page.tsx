"use client";

import { useState } from "react";
import Navbar from "@/app/components/navbar";
import { UploadButton } from "@/utils/uploadthing";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";
import Link from "next/link";

interface Person {
  name: string;
  designation: string;
  imageUrl: string;
}

const CreatePeople = () => {
  const [form, setForm] = useState<Person>({
    name: "",
    designation: "",
    imageUrl: "",
  });

  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("/api/people", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!res.ok) throw new Error("Failed to add person");

      setForm({ name: "", designation: "", imageUrl: "" });
      toast.success("Person added successfully!");
    } catch (error: any) {
      toast.error(`Error: ${error.message}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="h-full w-full bg-white text-black">
      <Navbar />
      <ToastContainer position="top-right" autoClose={3000} closeOnClick />

      <div className="pt-[140px] px-6 sm:px-12 flex items-center justify-between">
        <h1 className="text-3xl sm:text-5xl text-[#2060b6]">Add Person</h1>
        <Link
          href="/officialspage"
          className="flex items-center gap-2 text-[#2060b6] hover:underline"
        >
          <ArrowLeft size={20} />
          <span className="text-lg font-medium">Back</span>
        </Link>
      </div>

      <div className="px-6 mt-14 flex flex-col justify-center mb-20 sm:px-12">
        <h2 className="text-2xl sm:text-3xl font-bold text-black">Person Details</h2>
        <form
          className="mt-6 bg-white p-6 shadow-lg rounded-lg space-y-4"
          onSubmit={handleSubmit}
        >
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Person's Name"
            className="w-full p-2 border rounded"
            required
          />
          <input
            type="text"
            name="designation"
            value={form.designation}
            onChange={handleChange}
            placeholder="Designation"
            className="w-full p-2 border rounded"
            required
          />

          <div className="flex flex-col gap-3 items-center">
            <span>Upload Image</span>
            <UploadButton
              endpoint="imageUploader"
              onClientUploadComplete={(res) => {
                setForm((prev) => ({
                  ...prev,
                  imageUrl: res[0].url,
                }));
                toast.success("Upload Completed!");
              }}
              onUploadError={(error: Error) => {
                toast.error(`Upload Error: ${error.message}`);
              }}
            />
          </div>

          {form.imageUrl && (
            <div className="mt-4">
              <p className="text-gray-600">Uploaded Image Preview:</p>
              <img
                src={form.imageUrl}
                alt="Uploaded Person"
                className="mt-2 w-32 h-32 object-cover rounded-lg border"
              />
            </div>
          )}

          <div className="flex items-center justify-center">
            <button
              type="submit"
              className="px-4 py-2 mt-10 bg-[#2060b6] text-white rounded hover:bg-[#16468a]"
              disabled={loading}
            >
              {loading ? "Adding..." : "Add Person"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreatePeople;
