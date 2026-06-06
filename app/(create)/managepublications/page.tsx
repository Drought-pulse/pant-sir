"use client";

import { useState, useEffect } from "react";
import { ArrowLeft, Loader2, Pencil, X } from "lucide-react"; // Import Lucide icons
import Navbar from "@/app/components/navbar";
import { UploadButton } from "@/utils/uploadthing";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; // Import Toast styles
import { useRouter } from "next/navigation";
import Link from "next/link";

interface Publication {
  _id: string;
  title: string;
  authors: string;
  journal: string;
  year?: number;
  dois?: string;
  otherInfo?: string;
  pdfUrl?: string;
}

export default function PublicationPage() {
  const [publications, setPublications] = useState<Publication[]>([]);
  const [fetching, setFetching] = useState(false);
  const [updating, setUpdating] = useState(false);
  const [editPublication, setEditPublication] = useState<Publication | null>(null);
  const [deletePublication, setDeletePublication] = useState<Publication | null>(null);
  const [isUploading, setIsUploading] = useState(false); // Track upload status

  const router = useRouter();

  // Fetch all publications on component mount
  useEffect(() => {
    fetchPublications();
  }, []);

  /** Fetch Publications */
  const fetchPublications = async () => {
    setFetching(true);
    try {
      const res = await fetch("/api/publication");
      if (!res.ok) throw new Error("Failed to fetch publications");
      const data = await res.json();
      setPublications(data);
    } catch (error) {
      toast.error("Error fetching publications");
    } finally {
      setFetching(false);
    }
  };

  /** Handle Editing */
  const handleEdit = (publication: Publication) => {
    setEditPublication({ ...publication });
  };

  /** Handle Change */
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    if (!editPublication) return;
    const { name, value } = e.target;

    setEditPublication((prev) =>
      prev
        ? {
            ...prev,
            [name]: value,
          }
        : null
    );
  };

  /** Handle Update */
  const handleUpdate = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!editPublication) return;
    setUpdating(true);
    try {
      const res = await fetch(`/api/publication/${editPublication._id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(editPublication),
      });

      if (!res.ok) throw new Error("Failed to update publication");

      setPublications((prev) =>
        prev.map((p) => (p._id === editPublication._id ? editPublication : p))
      );
      toast.success("Publication updated successfully!");
      setEditPublication(null);
    } catch (error) {
      toast.error("Failed to update publication");
    } finally {
      setUpdating(false);
    }
  };

  /** Handle Delete Confirmation */
  const confirmDelete = (publication: Publication) => {
    setDeletePublication(publication);
  };

  /** Handle Deleting */
  const handleDelete = async () => {
    if (!deletePublication) return;
    setUpdating(true);
    try {
      const res = await fetch(`/api/publication/${deletePublication._id}`, {
        method: "DELETE",
      });
      if (!res.ok) throw new Error("Failed to delete publication");

      setPublications((prev) => prev.filter((p) => p._id !== deletePublication._id));
      toast.success("Publication deleted successfully!");
      setDeletePublication(null);
    } catch (error) {
      toast.error("Failed to delete publication");
    } finally {
      setUpdating(false);
    }
  };

  /** Handle PDF Upload */
  const handlePdfUpload = (res: any) => {
    if (res.length > 0 && editPublication) {
      setEditPublication((prev) => ({
        ...prev!,
        pdfUrl: res[0].url,
      }));
      toast.success("PDF Uploaded Successfully!");
    }
  };

  return (
    <div className="h-full w-full bg-white text-black">
      <Navbar />
      <ToastContainer position="top-right" autoClose={3000} />

      <div className="pt-[140px] px-6 sm:px-12 flex items-center justify-between">
        <h1 className="text-3xl sm:text-5xl text-[#2060b6]">Manage Publications</h1>
        <Link
          href="/officialspage"
          className="flex items-center gap-2 text-[#2060b6] hover:underline"
        >
          <ArrowLeft size={20} />
          <span className="text-lg font-medium">Back</span>
        </Link>
      </div>

      {fetching && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="flex flex-col items-center">
            <Loader2 className="animate-spin h-16 w-16 text-blue-500" />
            <p className="mt-4 text-white text-lg">Loading Publications...</p>
          </div>
        </div>
      )}

      <section className="px-8 bg-white sm:px-16 pt-20 mb-16">
        <div className="mt-10 grid grid-cols-1 bg-white lg:grid-cols-2 gap-12">
          {publications.length > 0 ? (
            publications.map((publication) => (
              <div
                key={publication._id}
                className="bg-white p-6 md:p-8 rounded-2xl shadow-xl flex flex-col md:flex-row items-center w-full h-[30rem] md:h-[28rem] gap-6 transition transform hover:scale-105 hover:shadow-2xl"
              >
                {/* Publication Details - Left Side */}
                <div className="w-full md:w-1/2 h-full">
                  <h3 className="text-lg md:text-2xl font-bold text-gray-900 truncate">
                    {publication.title}
                  </h3>
                  <p className="text-gray-700 mt-3 text-md md:text-lg">
                    <strong>Authors:</strong> {publication.authors}
                  </p>
                  <p className="text-gray-700 mt-3 text-md md:text-lg">
                    <strong>Journal:</strong> {publication.journal}
                  </p>
                  {publication.year && (
                    <p className="text-gray-700 mt-3 text-md md:text-lg">
                      <strong>Year:</strong> {publication.year}
                    </p>
                  )}
                  {publication.dois && (
                    <p className="text-gray-700 mt-3 text-md md:text-lg truncate md:truncate-none">
                      <strong>DOI:</strong> {publication.dois}
                    </p>
                  )}
                  {publication.otherInfo && (
                    <p className="text-gray-700 mt-3 text-md md:text-lg">
                      <strong>Other Info:</strong> {publication.otherInfo}
                    </p>
                  )}
                  {publication.pdfUrl && (
                    <a
                      href={publication.pdfUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 underline mt-3 block"
                    >
                      View PDF
                    </a>
                  )}

                  {/* Action Buttons */}
                  <div className="flex gap-6 mt-6">
                    <button
                      onClick={() => handleEdit(publication)}
                      className="px-5 py-3 bg-blue-500 text-white text-lg rounded-lg hover:bg-blue-600 transition"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => confirmDelete(publication)}
                      className="px-5 py-3 bg-red-500 text-white text-lg rounded-lg hover:bg-red-600 transition"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center text-gray-600 text-lg">
              No publications found.
            </p>
          )}
        </div>
      </section>

      {/* Edit Publication Modal */}
      {editPublication && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg w-full max-w-4xl overflow-y-auto  max-h-[80vh]">
            <h2 className="text-xl font-bold mb-4">Edit Publication</h2>
            <form onSubmit={handleUpdate} className="space-y-4">
              <div>
                <label className="block text-gray-700 font-medium">Title</label>
                <input
                  type="text"
                  name="title"
                  value={editPublication.title}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded"
                  placeholder="Enter title"
                  required
                />
              </div>

              <div>
                <label className="block text-gray-700 font-medium">Authors</label>
                <input
                  type="text"
                  name="authors"
                  value={editPublication.authors}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded"
                  placeholder="Enter authors"
                  required
                />
              </div>

              <div>
                <label className="block text-gray-700 font-medium">Journal</label>
                <input
                  type="text"
                  name="journal"
                  value={editPublication.journal}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded"
                  placeholder="Enter journal"
                  required
                />
              </div>

              <div>
                <label className="block text-gray-700 font-medium">Year</label>
                <input
                  type="number"
                  name="year"
                  value={editPublication.year || ""}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded"
                  placeholder="Enter year (optional)"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-medium">DOI</label>
                <input
                  type="text"
                  name="dois"
                  value={editPublication.dois || ""}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded"
                  placeholder="Enter DOI (optional)"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-medium">Other Info</label>
                <textarea
                  name="otherInfo"
                  value={editPublication.otherInfo || ""}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded"
                  placeholder="Enter additional information (optional)"
                />
              </div>

              <div className="flex flex-col gap-3 items-center">
                <span>Upload PDF</span>
                <UploadButton
                  endpoint="pdfUploader"
                  onClientUploadComplete={handlePdfUpload}
                  onUploadError={(error: Error) => {
                    toast.error(`Upload Error: ${error.message}`);
                  }}
                />
              </div>

              <div className="flex justify-end gap-4">
                <button
                  type="button"
                  onClick={() => setEditPublication(null)}
                  className="px-4 py-2 bg-gray-500 text-white rounded"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-500 text-white rounded flex items-center gap-2"
                >
                  {updating && <Loader2 className="animate-spin h-5 w-5 text-white" />}
                  Update
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Delete Confirmation Modal */}
      {deletePublication && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg w-full max-w-md overflow-y-auto max-h-[80vh]">
            <h2 className="text-xl font-bold mb-4 text-red-600">
              Confirm Deletion
            </h2>
            <p className="mb-4">
              Are you sure you want to delete <strong>{deletePublication.title}</strong>?
            </p>
            <div className="flex justify-end gap-4">
              <button
                type="button"
                onClick={() => setDeletePublication(null)}
                className="px-4 py-2 bg-gray-500 text-white rounded"
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={handleDelete}
                className="px-4 py-2 bg-red-500 text-white rounded flex items-center gap-2"
              >
                {updating && <Loader2 className="animate-spin h-5 w-5 text-white" />}
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}