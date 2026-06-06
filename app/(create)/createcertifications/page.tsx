"use client";

import { useState } from "react";
import Navbar from "@/app/components/navbar";
import { UploadButton } from "@/utils/uploadthing";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";
import Link from "next/link";

interface Certification {
  title: string;
  pdfUrl?: string;
  certificateLink?: string;
}

const CreateCertification = () => {
  const [form, setForm] = useState<Certification>({
    title: "",
    pdfUrl: "",
    certificateLink: "",
  });

  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const isValidUrl = (url: string) => {
    try {
      new URL(url); // This will throw an error if the URL is invalid
      return true;
    } catch (error) {
      return false;
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const { name, value } = e.target;

    // Validate URL for the certificateLink field
    if (name === "certificateLink" && value && !isValidUrl(value)) {
      toast.error("Please enter a valid URL.");
      return;
    }

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("/api/certifications", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!res.ok) throw new Error("Failed to add certification");

      setForm({ title: "", pdfUrl: "", certificateLink: "" });
      toast.success("Certification added successfully!");
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
        <h1 className="text-3xl sm:text-5xl text-[#2060b6]">Add Certification</h1>
        <Link
          href="/officialspage"
          className="flex items-center gap-2 text-[#2060b6] hover:underline"
        >
          <ArrowLeft size={20} />
          <span className="text-lg font-medium">Back</span>
        </Link>
      </div>

      <div className="px-6 mt-14 flex flex-col justify-center mb-20 sm:px-12">
        <h2 className="text-2xl sm:text-3xl font-bold text-black">Certification Details</h2>
        <form
          className="mt-6 bg-white p-6 shadow-lg rounded-lg space-y-4"
          onSubmit={handleSubmit}
        >
          <input
            type="text"
            name="title"
            value={form.title}
            onChange={handleChange}
            placeholder="Certification Title"
            className="w-full p-2 border rounded"
            required
          />
          <input
            type="text"
            name="certificateLink"
            value={form.certificateLink || ""}
            onChange={handleChange}
            placeholder="Certificate Link (Optional)"
            className="w-full p-2 border rounded"
          />

          <div className="flex flex-col gap-3 items-center">
            <span>Upload Certificate PDF</span>
            <UploadButton
              endpoint="pdfUploader"
              onClientUploadComplete={(res) => {
                if (res.length > 0) {
                  setForm((prev) => ({ ...prev, pdfUrl: res[0].url }));
                  toast.success("PDF Uploaded Successfully!");
                }
              }}
              onUploadError={(error: Error) => {
                toast.error(`Upload Error: ${error.message}`);
              }}
            />
          </div>

          {form.pdfUrl && (
            <div className="mt-4">
              <p className="text-gray-600">Uploaded Certificate Preview:</p>
              <a
                href={form.pdfUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                View Uploaded Certificate
              </a>
            </div>
          )}

          <div className="flex items-center justify-center">
            <button
              type="submit"
              className="px-4 py-2 mt-10 bg-[#2060b6] text-white rounded hover:bg-[#16468a]"
              disabled={loading}
            >
              {loading ? "Adding..." : "Add Certification"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateCertification;