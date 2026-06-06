"use client";

import { useState, useEffect } from "react";
import { ArrowLeft, Loader2, Pencil, X } from "lucide-react";
import Navbar from "@/app/components/navbar";
import { UploadButton } from "@/utils/uploadthing";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/navigation";
import Link from "next/link";

interface Certification {
  _id: string;
  title: string;
  pdfUrl?: string;
  certificateLink?: string;
}

export default function ManageCertifications() {
  const [certifications, setCertifications] = useState<Certification[]>([]);
  const [fetching, setFetching] = useState(false);
  const [updating, setUpdating] = useState(false);
  const [editCertification, setEditCertification] = useState<Certification | null>(null);
  const [deleteCertification, setDeleteCertification] = useState<Certification | null>(null);
  const [isUploading, setIsUploading] = useState(false);
  const router = useRouter();

  // Fetch certifications on component mount
  useEffect(() => {
    fetchCertifications();
  }, []);

  /** Fetch Certifications */
  const fetchCertifications = async () => {
    setFetching(true);
    try {
      const res = await fetch("/api/certifications");
      if (!res.ok) throw new Error("Failed to fetch certifications");
      const data = await res.json();
      setCertifications(data);
    } catch (error) {
      toast.error("Error fetching certifications");
    } finally {
      setFetching(false);
    }
  };

  /** Handle Editing */
  const handleEdit = (cert: Certification) => {
    setEditCertification({ ...cert });
  };

  /** Handle Change */
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!editCertification) return;
    const { name, value } = e.target;

    // Validate URL for certificateLink
    if (name === "certificateLink" && value && !isValidUrl(value)) {
      toast.error("Please enter a valid URL.");
      return;
    }

    setEditCertification((prev) => (prev ? { ...prev, [name]: value } : null));
  };

  /** Validate URL */
  const isValidUrl = (url: string) => {
    try {
      new URL(url); // This will throw an error if the URL is invalid
      return true;
    } catch (error) {
      return false;
    }
  };

  /** Handle Update */
  const handleUpdate = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!editCertification) return;
    setUpdating(true);
    try {
      const res = await fetch(`/api/certifications/${editCertification._id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(editCertification),
      });
      if (!res.ok) throw new Error("Failed to update certification");
      setCertifications((prev) =>
        prev.map((c) => (c._id === editCertification._id ? editCertification : c))
      );
      toast.success("Certification updated successfully!");
      setEditCertification(null);
    } catch (error) {
      toast.error("Failed to update certification");
    } finally {
      setUpdating(false);
    }
  };

  /** Handle Delete Confirmation */
  const confirmDelete = (cert: Certification) => {
    setDeleteCertification(cert);
  };

  /** Handle Deleting */
  const handleDelete = async () => {
    if (!deleteCertification) return;
    setUpdating(true);
    try {
      const res = await fetch(`/api/certifications/${deleteCertification._id}`, {
        method: "DELETE",
      });
      if (!res.ok) throw new Error("Failed to delete certification");
      setCertifications((prev) => prev.filter((c) => c._id !== deleteCertification._id));
      toast.success("Certification deleted successfully!");
      setDeleteCertification(null);
    } catch (error) {
      toast.error("Failed to delete certification");
    } finally {
      setUpdating(false);
    }
  };

  /** Handle PDF Upload */
  const handlePdfUpload = (res: any) => {
    if (res.length > 0 && editCertification) {
      setEditCertification((prev) => ({
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
        <h1 className="text-3xl sm:text-5xl text-[#2060b6]">Manage Certifications</h1>
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
            <p className="mt-4 text-white text-lg">Loading Certifications...</p>
          </div>
        </div>
      )}

      <section className="px-8 sm:px-16 pt-20 mb-16">
        <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-12">
          {certifications.length > 0 ? (
            certifications.map((cert) => (
              <div
                key={cert._id}
                className="bg-white p-6 md:p-8 rounded-2xl shadow-xl flex flex-col md:flex-row items-center w-full h-[20rem] md:h-[20rem] gap-6 transition transform hover:scale-105 hover:shadow-2xl"
              >
                {/* Certification Details - Left Side */}
                <div className="w-full md:w-1/2 h-full">
                  <h3 className="text-lg md:text-2xl font-bold text-gray-900 truncate">
                    {cert.title}
                  </h3>
                  {cert.certificateLink && (
                    <a
                      href={cert.certificateLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 underline mt-3 block"
                    >
                      Visit Certificate Link
                    </a>
                  )}
                  {cert.pdfUrl && (
                    <a
                      href={cert.pdfUrl}
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
                      onClick={() => handleEdit(cert)}
                      className="px-5 py-3 bg-blue-500 text-white text-lg rounded-lg hover:bg-blue-600 transition"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => confirmDelete(cert)}
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
              No certifications found.
            </p>
          )}
        </div>
      </section>

      {/* Edit Certification Modal */}
      {editCertification && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg w-full max-w-4xl overflow-y-auto max-h-[80vh]">
            <h2 className="text-xl font-bold mb-4">Edit Certification</h2>
            <form onSubmit={handleUpdate} className="space-y-4">
              <div>
                <label className="block text-gray-700 font-medium">Title</label>
                <input
                  type="text"
                  name="title"
                  value={editCertification.title}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded"
                  placeholder="Enter title"
                  required
                />
              </div>

              <div>
                <label className="block text-gray-700 font-medium">Certificate Link</label>
                <input
                  type="text"
                  name="certificateLink"
                  value={editCertification.certificateLink || ""}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded"
                  placeholder="Enter certificate link (optional)"
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
                  onClick={() => setEditCertification(null)}
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
      {deleteCertification && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg w-full max-w-md overflow-y-auto max-h-[80vh]">
            <h2 className="text-xl font-bold mb-4 text-red-600">
              Confirm Deletion
            </h2>
            <p className="mb-4">
              Are you sure you want to delete <strong>{deleteCertification.title}</strong>?
            </p>
            <div className="flex justify-end gap-4">
              <button
                type="button"
                onClick={() => setDeleteCertification(null)}
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