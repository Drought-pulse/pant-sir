"use client";

import { useState } from "react";
import Navbar from "@/app/components/navbar";
import { UploadButton } from "@/utils/uploadthing";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";
import Link from "next/link";

interface Publication {
  title: string;
  authors: string;
  journal: string;
  year?: number; // Make year optional
  dois?: string;
  otherInfo?: string;
  pdfUrl?: string;
}

// ✅ URL Validation Function
const isValidURL = (url: string) => {
  try {
    new URL(url);
    return true;
  } catch (_) {
    return false;
  }
};

const CreatePublication = () => {
  const [form, setForm] = useState<Publication>({
    title: "",
    authors: "",
    journal: "",
    year: undefined, // Set year to undefined initially
    dois: "",
    otherInfo: "",
    pdfUrl: "",
  });

  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
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

    // ✅ Validate DOIS & PDF URL if provided
    if (form.dois && !isValidURL(form.dois)) {
      toast.error("Invalid DOI link. Please enter a valid URL.");
      setLoading(false);
      return;
    }

    if (form.pdfUrl && !isValidURL(form.pdfUrl)) {
      toast.error("Invalid PDF URL. Please enter a valid URL.");
      setLoading(false);
      return;
    }

    try {
      const res = await fetch("/api/publication", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!res.ok) throw new Error("Failed to add publication");

      setForm({
        title: "",
        authors: "",
        journal: "",
        year: undefined, // Reset year to undefined
        dois: "",
        otherInfo: "",
        pdfUrl: "",
      });

      toast.success("Publication added successfully!");
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
        <h1 className="text-3xl sm:text-5xl text-[#2060b6]">Add Publication</h1>
        <Link href="/officialspage" className="flex items-center gap-2 text-[#2060b6] hover:underline">
          <ArrowLeft size={20} />
          <span className="text-lg font-medium">Back</span>
        </Link>
      </div>

      <div className="px-6 mt-14 flex flex-col justify-center mb-20 sm:px-12">
        <h2 className="text-2xl sm:text-3xl font-bold text-black">Publication Details</h2>
        <form className="mt-6 bg-white p-6 shadow-lg rounded-lg space-y-4" onSubmit={handleSubmit}>
          <input
            type="text"
            name="title"
            value={form.title}
            onChange={handleChange}
            placeholder="Publication Title"
            className="w-full p-2 border rounded"
            required
          />
          <input
            type="text"
            name="authors"
            value={form.authors}
            onChange={handleChange}
            placeholder="Authors"
            className="w-full p-2 border rounded"
            required
          />
          <input
            type="text"
            name="journal"
            value={form.journal}
            onChange={handleChange}
            placeholder="Journal Name"
            className="w-full p-2 border rounded"
            required
          />
          <input
            type="number"
            name="year"
            value={form.year || ""} // Allow empty value
            onChange={handleChange}
            placeholder="Publication Year (Optional)"
            className="w-full p-2 border rounded"
          />
          <input
            type="text"
            name="dois"
            value={form.dois || ""}
            onChange={handleChange}
            placeholder="DOI (Optional)"
            className="w-full p-2 border rounded"
          />
          <textarea
            name="otherInfo"
            value={form.otherInfo || ""}
            onChange={handleChange}
            placeholder="Additional Information (Volume, Issue, Pages, etc.)"
            className="w-full p-2 border rounded"
          />

          <div className="flex flex-col gap-3 items-center">
            <span>Upload PDF</span>
            <UploadButton
              endpoint="pdfUploader"
              onClientUploadComplete={(res) => {
                if (res.length > 0) {
                  setForm((prev) => ({
                    ...prev,
                    pdfUrl: res[0].url,
                  }));
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
              <p className="text-gray-600">Uploaded PDF:</p>
              <a href={form.pdfUrl} target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">
                View PDF
              </a>
            </div>
          )}

          <div className="flex items-center justify-center">
            <button
              type="submit"
              className="px-4 py-2 mt-10 bg-[#2060b6] text-white rounded hover:bg-[#16468a]"
              disabled={loading}
            >
              {loading ? "Adding..." : "Add Publication"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreatePublication;