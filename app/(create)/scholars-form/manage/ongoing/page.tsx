"use client";

import { useState, useEffect } from "react";
import { ArrowLeft, Loader2, X } from "lucide-react"; // Import Lucide loader icon
import Navbar from "@/app/components/navbar";
import Footer from "@/app/components/footer";
import { Pencil } from "lucide-react"; // Import Lucide Pencil icon
import { UploadButton } from "@/utils/uploadthing";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; // Import Toast styles
import { useRouter } from "next/navigation";
import Link from "next/link";

interface Scholar {
  _id: string;
  name: string;
  title: string;
  supervisors: string[];
  yearOfJoining?: number;
  imageUrlOngoing: string;
  type: "ongoing";
}

export default function ManageOngoingScholars() {
  const [ongoingScholars, setOngoingScholars] = useState<Scholar[]>([]);
  const [fetching, setFetching] = useState(false);
  const [updating, setUpdating] = useState(false);
  const [editScholar, setEditScholar] = useState<Scholar | null>(null);
  const [deleteScholar, setDeleteScholar] = useState<Scholar | null>(null);
  const [message, setMessage] = useState("");
  const [imageUploadScholar, setImageUploadScholar] = useState<Scholar | null>(
    null
  );
  const [isUploading, setIsUploading] = useState(false); // Track upload status

  useEffect(() => {
    fetchOngoingScholars();
  }, []);

  /** Fetch Ongoing Scholars */
  // const fetchOngoingScholars = async () => {
  //   setFetching(true);
  //   try {
  //     const res = await fetch("/api/scholars/ongoing");

  //     if (!res.ok) throw new Error("Failed to fetch ongoing scholars");
  //     const data = await res.json();
  //     console.log(data);
  //     setOngoingScholars(data);
  //   } catch (error) {
  //     console.error(error);
  //   } finally {
  //     setFetching(false);
  //   }
  // };
  const fetchOngoingScholars = async () => {
    setFetching(true);
    try {
      const res = await fetch("/api/scholars/ongoing");
      if (!res.ok) throw new Error("Failed to fetch scholars");
      const data = await res.json();
      setOngoingScholars(data);
    } catch (error) {
      toast.error("Error fetching scholars");
    } finally {
      setFetching(false);
    }
  };
  /** Handle Editing */
  const handleEdit = (scholar: Scholar) => {
    setEditScholar({ ...scholar });
  };

  /** Handle Change */
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!editScholar) return;
    const { name, value } = e.target;

    setEditScholar((prev) =>
      prev
        ? {
            ...prev,
            [name]:
              name === "supervisors"
                ? value.split(",").map((s) => s.trim())
                : name === "yearOfJoining"
                ? value.trim() === ""
                  ? undefined
                  : Number(value)
                : value,
          }
        : null
    );
  };

  // const handleUpdate = async (e: React.FormEvent) => {
  //   e.preventDefault();
  //   if (!editScholar) return;
  //   setUpdating(true);
  //   try {
  //     const res = await fetch(`/api/scholars/ongoing/${editScholar._id}`, {
  //       method: "PUT",
  //       headers: { "Content-Type": "application/json" },
  //       body: JSON.stringify(editScholar),
  //     });

  //     if (!res.ok) throw new Error("Failed to update scholar");

  //     setOngoingScholars(
  //       ongoingScholars.map((s) =>
  //         s._id === editScholar._id ? editScholar : s
  //       )
  //     );
  //     setMessage("Scholar updated successfully!");
  //     setEditScholar(null);
  //   } catch (error: any) {
  //     setMessage(`Error: ${error.message}`);
  //   } finally {
  //     setUpdating(false);
  //   }
  // };
  const handleUpdate = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!editScholar) return;
    setUpdating(true);
    try {
      const res = await fetch(`/api/scholars/ongoing/${editScholar._id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(editScholar),
      });

      if (!res.ok) throw new Error("Failed to update scholar");

      setOngoingScholars((prev) =>
        prev.map((s) => (s._id === editScholar._id ? editScholar : s))
      );
      toast.success("Scholar updated successfully!");
      setEditScholar(null);
    } catch (error) {
      toast.error("Failed to update scholar");
    } finally {
      setUpdating(false);
    }
  };

  const confirmDelete = (scholar: Scholar) => {
    setDeleteScholar(scholar);
  };

  /** Handle Deleting */
  // const handleDelete = async () => {
  //   if (!deleteScholar) return;
  //   setUpdating(true);
  //   try {
  //     const res = await fetch(`/api/scholars/ongoing/${deleteScholar._id}`, {
  //       method: "DELETE",
  //     });
  //     if (!res.ok) throw new Error("Failed to delete scholar");

  //     setOngoingScholars(
  //       ongoingScholars.filter((s) => s._id !== deleteScholar._id)
  //     );
  //     setMessage("Scholar deleted successfully!");
  //     setDeleteScholar(null);
  //   } catch (error: any) {
  //     setMessage(`Error: ${error.message}`);
  //   } finally {
  //     setUpdating(false);
  //   }
  // };
  const handleDelete = async () => {
    if (!deleteScholar) return;
    setUpdating(true);
    try {
      const res = await fetch(`/api/scholars/ongoing/${deleteScholar._id}`, {
        method: "DELETE",
      });
      if (!res.ok) throw new Error("Failed to delete scholar");

      setOngoingScholars((prev) =>
        prev.filter((s) => s._id !== deleteScholar._id)
      );
      toast.success("Scholar deleted successfully!");
      setDeleteScholar(null);
    } catch (error) {
      toast.error("Failed to delete scholar");
    } finally {
      setUpdating(false);
    }
  };

  const handleEditImage = (scholar: Scholar) => {
    setImageUploadScholar(scholar);
  };
      const router = useRouter();

  return (
    <div className="h-full w-full bg-white text-black">
      <Navbar />
      <ToastContainer position="top-right" autoClose={3000} />
      <div className="pt-[140px] px-6 sm:px-12 flex items-center justify-between">
  <h1 className="text-3xl sm:text-5xl text-[#2060b6]">
    Manage Ongoing Scholars
  </h1>
  <Link 
          href="/officialspage"
          className="flex items-center gap-2 text-[#2060b6] hover:underline"
        >
          <ArrowLeft size={20} />
          <span className="text-lg font-medium">Back</span>
        </Link>
</div>

      {message && (
        <p className="text-center text-lg mt-10 text-green-600">{message}</p>
      )}

      {fetching && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="flex flex-col items-center">
            <Loader2 className="animate-spin h-16 w-16 text-blue-500" />
            <p className="mt-4 text-white text-lg">Loading Scholars...</p>
          </div>
        </div>
      )}

      <section className="px-8 sm:px-16 pt-20 mb-16">
        <div className="mt-10 grid grid-cols-1 lg:grid-cols-2  gap-12">
          {ongoingScholars.map((scholar) => (
            <div
              key={scholar._id}
              className="bg-white md:p-8 rounded-2xl shadow-xl flex flex-col md:flex-row items-center w-full h-[40rem] md:h-[28rem] gap-6 transition transform hover:scale-105 hover:shadow-2xl"
            >
              {scholar.imageUrlOngoing && (
                <div className="relative w-1/2 h-full">
                  <img
                    src={scholar.imageUrlOngoing}
                    alt={scholar.name}
                    className="w-full h-full object-cover rounded-xl shadow-md"
                  />

                  <button
                    onClick={() => handleEditImage(scholar)}
                    className="absolute top-2 right-2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 transition"
                  >
                    <Pencil className="h-5 w-5" />
                  </button>
                </div>
              )}

              <div className="md:w-1/2 w-[70%] text-left flex flex-col justify-center h-full overflow-hidden">
                <h3 className=" text-lg md:text-2xl font-bold text-gray-900 truncate">
                  {scholar.name}
                </h3>
                <p className="text-gray-700 mt-3 text-md md:text-lg truncate">
                  <strong>Title:</strong> {scholar.title}
                </p>
                <p className="text-gray-700 mt-3 text-md md:text-lg truncate">
                  <strong>Supervisors:</strong> {scholar.supervisors.join(", ")}
                </p>
                <p className="text-gray-700 mt-3 text-md md:text-lg truncate">
                  <strong>Year Of Joining:</strong> {scholar.yearOfJoining}
                </p>

                <div className="flex gap-6 mt-6">
                  <button
                    onClick={() => handleEdit(scholar)}
                    className="md:px-5 md:py-3 px-4 py-2 bg-blue-500 text-white text-lg rounded-lg hover:bg-blue-600 transition"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => confirmDelete(scholar)}
                    className="md:px-5 md:py-3 px-4 py-2 bg-red-500 text-white text-lg rounded-lg hover:bg-red-600 transition"
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section> 
      


      {imageUploadScholar && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg w-full max-w-md text-center relative">
            <h2 className="text-xl font-bold mb-4">Upload Scholar Image</h2>

            <UploadButton
              endpoint="imageUploader"
              onUploadBegin={() => setIsUploading(true)} // Set uploading state
              onClientUploadComplete={(res) => {
                const newUrl = res[0].ufsUrl;
                setOngoingScholars((prev) =>
                  prev.map((s) =>
                    s._id === imageUploadScholar._id
                      ? { ...s, imageUrlOngoing: newUrl }
                      : s
                  )
                );
                setImageUploadScholar(null);
                setIsUploading(false); // Reset uploading state
                toast.success("Upload Completed!"); // ✅ React Toastify Notification
              }}
              onUploadError={(error: Error) => {
                toast.error(`Upload failed: ${error.message}`); // ✅ React Toastify Notification
                setIsUploading(false); // Reset uploading state
              }}
            />

            {/* Cancel Button (Disabled While Uploading) */}
            <button
              onClick={() => setImageUploadScholar(null)}
              disabled={isUploading}
              className={`mt-4 px-4 py-2 rounded-lg transition ${
                isUploading
                  ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                  : "bg-gray-500 text-white hover:bg-gray-600"
              }`}
            >
              {isUploading ? "Uploading..." : "Cancel"}
            </button>
          </div>
        </div>
      )}

      {editScholar && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg w-full max-w-4xl">
            <h2 className="text-xl font-bold mb-4">Edit Ongoing Scholar</h2>
            <form
              onSubmit={async (e) => {
                e.preventDefault();
                try {
                  await handleUpdate(e);
                  toast.success("Scholar updated successfully!");
                  setEditScholar(null);
                } catch (error) {
                  toast.error("Failed to update scholar.");
                }
              }}
            >
              <div className="mb-4">
                <label className="block text-sm font-medium mb-1">Name</label>
                <input
                  type="text"
                  name="name"
                  value={editScholar.name}
                  onChange={handleChange}
                  className="w-full p-2 border rounded"
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium mb-1">Title</label>
                <input
                  type="text"
                  name="title"
                  value={editScholar.title}
                  onChange={handleChange}
                  className="w-full p-2 border rounded"
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium mb-1">
                  Supervisors
                </label>
                <input
                  type="text"
                  name="supervisors"
                  value={editScholar.supervisors.join(", ")}
                  onChange={handleChange}
                  className="w-full p-2 border rounded"
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium mb-1">
                  Year of Joining
                </label>
                <input
                  type="number"
                  name="yearOfJoining"
                  value={editScholar.yearOfJoining || ""}
                  onChange={handleChange}
                  className="w-full p-2 border rounded"
                />
              </div>
              <div className="flex justify-end gap-4">
                <button
                  type="button"
                  onClick={() => setEditScholar(null)}
                  className="px-4 py-2 bg-gray-500 text-white rounded"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-500 text-white rounded flex items-center gap-2"
                >
                  {updating && (
                    <Loader2 className="animate-spin h-5 w-5 text-white" />
                  )}
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {deleteScholar && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg w-full max-w-2xl">
            <h2 className="text-xl font-bold mb-4 text-red-600">
              Confirm Deletion
            </h2>
            <p className="mb-4">
              Are you sure you want to delete{" "}
              <strong>{deleteScholar.name}</strong>?
            </p>
            <div className="flex justify-end gap-4">
              <button
                type="button"
                onClick={() => setDeleteScholar(null)}
                className="px-4 py-2 bg-gray-500 text-white rounded"
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={async () => {
                  try {
                    await handleDelete();
                    toast.success("Scholar deleted successfully!");
                    setDeleteScholar(null);
                  } catch (error) {
                    toast.error("Failed to delete scholar.");
                  }
                }}
                className="px-4 py-2 bg-red-500 text-white rounded flex items-center gap-2"
              >
                {updating && (
                  <Loader2 className="animate-spin h-5 w-5 text-white" />
                )}
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
