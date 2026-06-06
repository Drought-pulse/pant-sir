"use client";

import { useState, useEffect } from "react";
import { Loader2 } from "lucide-react"; // Import Lucide icons
import Navbar from "@/app/components/navbar";
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

  return (
    <div className="h-full w-full bg-white text-black">
      <Navbar />
      <ToastContainer position="top-right" autoClose={3000} />

      <div className="pt-[140px] px-6 sm:px-12">
        <h1 className="text-3xl sm:text-5xl text-[#2060b6]">Publications and Research</h1>
        {/* Added Line */}
        <p className="mt-4 text-gray-700 text-lg">
          Explore our research contributions in the field of hydro-turbine technology and flow measurement.
        </p>
      </div>

      {fetching && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="flex flex-col items-center">
            <Loader2 className="animate-spin h-16 w-16 text-blue-500" />
            <p className="mt-4 text-white text-lg">Loading Publications...</p>
          </div>
        </div>
      )}

      <section className="px-8 sm:px-16 pt-5 mb-16">
        <div className="mt-10 space-y-8">
          {publications.length > 0 ? (
            publications.map((publication) => (
              <div
                key={publication._id}
                className="bg-white p-6 rounded-lg shadow-md"
              >
                {/* Title */}
                <h3 className="text-xl font-bold text-gray-900 break-words">
                  {publication.title}
                </h3>

                {/* Authors */}
                <p className="text-gray-700 mt-2 break-words">
                  <strong>Authors:</strong> {publication.authors}
                </p>

                {/* Journal */}
                <p className="text-gray-700 mt-2 break-words">
                  <strong>Journal:</strong> {publication.journal}
                </p>

                {/* Year */}
                {publication.year && (
                  <p className="text-gray-700 mt-2">
                    <strong>Year:</strong> {publication.year}
                  </p>
                )}

                {/* Other Info */}
                {publication.otherInfo && (
                  <p className="text-gray-700 mt-2 break-words">
                    <strong>Other Info:</strong> {publication.otherInfo}
                  </p>
                )}

                {/* DOI and PDF Buttons in the Same Line */}
                {(publication.dois || publication.pdfUrl) && (
                  <div className="mt-3 flex gap-4">
                    {publication.dois && (
                      <Link
                        href={publication.dois}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block py-2 px-5 bg-[#2060b6] text-white font-semibold rounded-lg hover:bg-transparent hover:text-black hover:border hover:border-black transition duration-300"
                      >
                        View
                      </Link>
                    )}
                    {publication.pdfUrl && (
                      <Link
                        href={publication.pdfUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block py-2 px-5 bg-[#2060b6] text-white font-semibold rounded-lg hover:bg-transparent hover:text-black hover:border hover:border-black transition duration-300"
                      >
                        View PDF
                      </Link>
                    )}
                  </div>
                )}
              </div>
            ))
          ) : (
            <p className="text-center text-gray-600 text-lg">
              No publications found.
            </p>
          )}
        </div>
      </section>
    </div>
  );
}