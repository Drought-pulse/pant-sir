"use client";

import { useState } from "react";
import Navbar from "@/app/components/navbar";
import { UploadButton } from "@/utils/uploadthing";
import { toast, ToastContainer } from "react-toastify"; // Import Toastify
import "react-toastify/dist/ReactToastify.css"; // Import Toastify styles
import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";

interface Scholar {
  name: string;
  title: string;
  supervisors: string[];
  yearOfJoining?: number;
  yearOfCompletion?: number;
  presentAffiliation?: string;
  imageUrlOngoing?: string;
  imageUrlAwarded?: string;
  type: "ongoing" | "awarded";
}

const CreateScholar = () => {
  const [form, setForm] = useState<Scholar>({
    name: "",
    title: "",
    supervisors: [],
    yearOfJoining: undefined,
    yearOfCompletion: undefined,
    presentAffiliation: "",
    imageUrlOngoing: "",
    imageUrlAwarded: undefined,
    type: "ongoing",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    e.preventDefault();
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: name === "supervisors" ? value.split(",") : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const endpoint =
        form.type === "ongoing"
          ? "/api/scholars/ongoing"
          : "/api/scholars/awarded";

      const res = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!res.ok) throw new Error("Failed to add scholar");

      setForm({
        name: "",
        title: "",
        supervisors: [],
        yearOfJoining: undefined,
        yearOfCompletion: undefined,
        presentAffiliation: "",
        imageUrlOngoing: "",
        imageUrlAwarded: undefined,
        type: "ongoing",
      });

      toast.success("Scholar added successfully!"); // Success toast
    } catch (error: any) {
      toast.error(`Error: ${error.message}`); // Error toast
    } finally {
      setLoading(false);
    }
  };
    const router = useRouter();
  

  return (
    <div className="h-full w-full bg-white text-black">
      <Navbar />
      <ToastContainer position="top-right" autoClose={3000} closeOnClick /> {/* Fixed Toast Removal */}

      <div className="pt-[140px] px-6 sm:px-12 flex items-center justify-between">
  <h1 className="text-3xl sm:text-5xl text-[#2060b6]">
    Add Research Scholar
  </h1>
  <button 
          onClick={() => router.back()} 
          className="flex items-center gap-2 text-[#2060b6] hover:underline"
        >
          <ArrowLeft size={20} />
          <span className="text-lg font-medium">Back</span>
        </button>
</div>

      <div className="px-6 mt-14 flex flex-col item-center justify-center mb-20 sm:px-12">
        <h2 className="text-2xl sm:text-3xl font-bold text-black">
          Scholar Details
        </h2>
        <form
          className="mt-6 bg-white p-6 shadow-lg rounded-lg space-y-4"
          onSubmit={handleSubmit}
        >
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Scholar's Name"
            className="w-full p-2 border rounded"
            required
          />
          <input
            type="text"
            name="title"
            value={form.title}
            onChange={handleChange}
            placeholder="Research Title"
            className="w-full p-2 border rounded"
            required
          />
          <input
            type="text"
            name="supervisors"
            value={form.supervisors.join(",")}
            onChange={handleChange}
            placeholder="Supervisors (comma-separated)"
            className="w-full p-2 border rounded"
            required
          />
 <select
            name="type"
            value={form.type}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          >
            <option value="ongoing">Ongoing</option>
            <option value="awarded">Awarded</option>
          </select>
          {form.type === "ongoing" && (
            <input
              type="number"
              name="yearOfJoining"
              value={form.yearOfJoining || ""}
              onChange={handleChange}
              placeholder="Year of Joining"
              className="w-full p-2 border rounded"
              required
            />
          )}

          {form.type === "awarded" && (
            <>
              <input
                type="number"
                name="yearOfCompletion"
                value={form.yearOfCompletion || ""}
                onChange={handleChange}
                placeholder="Year of Completion"
                className="w-full p-2 border rounded"
                required
              />
              <input
                type="text"
                name="presentAffiliation"
                value={form.presentAffiliation}
                onChange={handleChange}
                placeholder="Present Affiliation"
                className="w-full p-2 border rounded"
                required
              />
            </>
          )}

         

          <div className="flex flex-col gap-3 items-center">
            <span>Upload Image</span>

            <UploadButton
              endpoint="imageUploader"
              onClientUploadComplete={(res) => {
                console.log("Files: ", res);

                setForm((prev) => ({
                  ...prev,
                  ...(prev.type === "ongoing"
                    ? { imageUrlOngoing: res[0].ufsUrl }
                    : { imageUrlAwarded: res[0].ufsUrl }),
                }));

                toast.success("Upload Completed!"); // Success toast for upload
              }}
              onUploadError={(error: Error) => {
                toast.error(`Upload Error: ${error.message}`); // Error toast for upload
              }}
            />
          </div>

          {/* Image Previews */}
          {form.imageUrlOngoing && form.type === "ongoing" && (
            <div className="mt-4">
              <p className="text-gray-600">Uploaded Image Preview:</p>
              <img
                src={form.imageUrlOngoing}
                alt="Uploaded Ongoing Scholar"
                className="mt-2 w-32 h-32 object-cover rounded-lg border"
              />
            </div>
          )}
          {form.imageUrlAwarded && form.type === "awarded" && (
            <div className="mt-4">
              <p className="text-gray-600">Uploaded Image Preview:</p>
              <img
                src={form.imageUrlAwarded}
                alt="Uploaded Awarded Scholar"
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
              {loading ? "Adding..." : "Add Scholar"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateScholar;
