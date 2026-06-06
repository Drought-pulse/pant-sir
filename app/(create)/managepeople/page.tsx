"use client";

import { useState, useEffect } from "react";
import { ArrowLeft, Loader2, Pencil, X } from "lucide-react"; // Import Lucide icons
import Navbar from "@/app/components/navbar";
import { UploadButton } from "@/utils/uploadthing";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; // Import Toast styles
import { useRouter } from "next/navigation";
import Link from "next/link";

interface Person {
  _id: string;
  name: string;
  designation: string;
  imageUrl: string;
}

export default function PeoplePage() {
  const [people, setPeople] = useState<Person[]>([]);
  const [fetching, setFetching] = useState(false);
  const [updating, setUpdating] = useState(false);
  const [editPerson, setEditPerson] = useState<Person | null>(null);
  const [deletePerson, setDeletePerson] = useState<Person | null>(null);
  const [imageUploadPerson, setImageUploadPerson] = useState<Person | null>(null);
  const [isUploading, setIsUploading] = useState(false); // Track upload status

  const router = useRouter();

  useEffect(() => {
    fetchPeople();
  }, []);

  /** Fetch People */
  const fetchPeople = async () => {
    setFetching(true);
    try {
      const res = await fetch("/api/people");
      if (!res.ok) throw new Error("Failed to fetch people");
      const data = await res.json();
      setPeople(data);
    } catch (error) {
      toast.error("Error fetching people");
    } finally {
      setFetching(false);
    }
  };

  /** Handle Editing */
  const handleEdit = (person: Person) => {
    setEditPerson({ ...person });
  };

  /** Handle Change */
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!editPerson) return;
    const { name, value } = e.target;

    setEditPerson((prev) =>
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
    if (!editPerson) return;
    setUpdating(true);
    try {
      const res = await fetch(`/api/people/${editPerson._id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(editPerson),
      });

      if (!res.ok) throw new Error("Failed to update person");

      setPeople((prev) =>
        prev.map((p) => (p._id === editPerson._id ? editPerson : p))
      );
      toast.success("Person updated successfully!");
      setEditPerson(null);
    } catch (error) {
      toast.error("Failed to update person");
    } finally {
      setUpdating(false);
    }
  };

  /** Handle Delete Confirmation */
  const confirmDelete = (person: Person) => {
    setDeletePerson(person);
  };

  /** Handle Deleting */
  const handleDelete = async () => {
    if (!deletePerson) return;
    setUpdating(true);
    try {
      const res = await fetch(`/api/people/${deletePerson._id}`, {
        method: "DELETE",
      });
      if (!res.ok) throw new Error("Failed to delete person");

      setPeople((prev) => prev.filter((p) => p._id !== deletePerson._id));
      toast.success("Person deleted successfully!");
      setDeletePerson(null);
    } catch (error) {
      toast.error("Failed to delete person");
    } finally {
      setUpdating(false);
    }
  };

  /** Handle Image Upload */
  const handleEditImage = (person: Person) => {
    setImageUploadPerson(person);
  };

  return (
    <div className="h-full w-full bg-white text-black">
      <Navbar />
      <ToastContainer position="top-right" autoClose={3000} />

      <div className="pt-[140px] px-6 sm:px-12 flex items-center justify-between">
        <h1 className="text-3xl sm:text-5xl text-[#2060b6]">Manage People</h1>
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
            <p className="mt-4 text-white text-lg">Loading People...</p>
          </div>
        </div>
      )}

      <section className="px-8 sm:px-16 pt-20 mb-16">
        <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-12">
          {people.length > 0 ? (
            people.map((person) => (
              <div
                key={person._id}
                className="bg-white md:p-8 rounded-2xl shadow-xl flex flex-col md:flex-row items-center w-full h-[40rem] md:h-[28rem] gap-6 transition transform hover:scale-105 hover:shadow-2xl"
              >
                {/* Person Image - Left Side */}
                {person.imageUrl && (
                  <div className="relative w-full md:w-1/2 h-full">
                    <img
                      src={person.imageUrl}
                      alt={person.name}
                      className="w-full h-full object-cover rounded-xl shadow-md"
                    />

                    {/* Edit Image Button */}
                    <button
                      onClick={() => handleEditImage(person)}
                      className="absolute top-2 right-2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 transition"
                    >
                      <Pencil className="h-5 w-5" />
                    </button>
                  </div>
                )}

                {/* Person Info - Right Side */}
                <div className="md:w-1/2 w-[70%] text-left flex flex-col justify-between h-full overflow-hidden">
                  <div>
                    <h3 className="text-lg md:text-2xl font-bold text-gray-900 truncate">
                      {person.name}
                    </h3>
                    <p className="text-gray-700 mt-3 text-md md:text-lg">
                      <strong>Designation:</strong> {person.designation}
                    </p>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-6 mt-6">
                    <button
                      onClick={() => handleEdit(person)}
                      className="px-5 py-3 bg-blue-500 text-white text-lg rounded-lg hover:bg-blue-600 transition"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => confirmDelete(person)}
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
              No people found.
            </p>
          )}
        </div>
      </section>

      {/* Image Upload Modal */}
      {imageUploadPerson && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg w-full max-w-md text-center relative overflow-y-auto max-h-[90vh]">
            <h2 className="text-xl font-bold mb-4">Upload Person Image</h2>

            <UploadButton
              endpoint="imageUploader"
              onUploadBegin={() => setIsUploading(true)}
              onClientUploadComplete={(res) => {
                const newUrl = res[0].ufsUrl;
                setPeople((prev) =>
                  prev.map((p) =>
                    p._id === imageUploadPerson._id
                      ? { ...p, imageUrl: newUrl }
                      : p
                  )
                );
                setImageUploadPerson(null);
                setIsUploading(false);
                toast.success("Image uploaded successfully!");
              }}
              onUploadError={(error: Error) => {
                toast.error(`Upload failed: ${error.message}`);
                setIsUploading(false);
              }}
            />

            {/* Cancel Button */}
            <button
              onClick={() => setImageUploadPerson(null)}
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

      {/* Edit Person Modal */}
      {editPerson && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg w-full max-w-4xl overflow-y-auto max-h-[90vh]">
            <h2 className="text-xl font-bold mb-4">Edit Person</h2>
            <form onSubmit={handleUpdate} className="space-y-4">
              <div>
                <label className="block text-gray-700 font-medium">Name</label>
                <input
                  type="text"
                  name="name"
                  value={editPerson.name}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded"
                  placeholder="Enter name"
                  required
                />
              </div>

              <div>
                <label className="block text-gray-700 font-medium">
                  Designation
                </label>
                <input
                  type="text"
                  name="designation"
                  value={editPerson.designation}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded"
                  placeholder="Enter designation"
                  required
                />
              </div>

              <div className="flex justify-end gap-4">
                <button
                  type="button"
                  onClick={() => setEditPerson(null)}
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
      {deletePerson && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg w-full max-w-md overflow-y-auto max-h-[90vh]">
            <h2 className="text-xl font-bold mb-4 text-red-600">
              Confirm Deletion
            </h2>
            <p className="mb-4">
              Are you sure you want to delete <strong>{deletePerson.name}</strong>?
            </p>
            <div className="flex justify-end gap-4">
              <button
                type="button"
                onClick={() => setDeletePerson(null)}
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