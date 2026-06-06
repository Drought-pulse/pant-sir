"use client";

import { useEffect, useState } from "react";
import Navbar from "@/app/components/navbar";
import Footer from "@/app/components/footer";

interface Scholar {
  name: string;
  title: string;
  supervisors: string[];
  yearOfJoining?: number;
  yearOfCompletion?: number;
  presentAffiliation?: string;
  imageUrlAwarded?: string;
  imageUrlOngoing?: string;
}

export default function Scholars() {
  const [ongoingScholars, setOngoingScholars] = useState<Scholar[]>([]);
  const [awardedScholars, setAwardedScholars] = useState<Scholar[]>([]);
  const [loadingOngoing, setLoadingOngoing] = useState(true);
  const [loadingAwarded, setLoadingAwarded] = useState(true);

  useEffect(() => {
    const fetchOngoingScholars = async () => {
      try {
        const res = await fetch("/api/scholars/ongoing");
        if (!res.ok) throw new Error("Failed to fetch ongoing scholars");
        const data = await res.json();
        setOngoingScholars(data);
      } catch (error) {
        console.error("Error fetching ongoing scholars:", error);
      } finally {
        setLoadingOngoing(false);
      }
    };

    const fetchAwardedScholars = async () => {
      try {
        const res = await fetch("/api/scholars/awarded");
        if (!res.ok) throw new Error("Failed to fetch awarded scholars");
        const data = await res.json();
        setAwardedScholars(data);
      } catch (error) {
        console.error("Error fetching awarded scholars:", error);
      } finally {
        setLoadingAwarded(false);
      }
    };

    fetchOngoingScholars();
    fetchAwardedScholars();
  }, []);

  return (
    <div className="min-h-screen bg-white text-black">
      <Navbar />

      {/* Main Heading */}
      <div className="pt-[140px] px-6 sm:px-12 text-center sm:text-left">
        <h1 className="text-4xl sm:text-5xl text-[#2060b6]">Research Scholars</h1>
      </div>

      {/* Ongoing Research Scholars */}
      <div className="px-6 sm:px-12 mt-12">
        <h2 className="text-3xl sm:text-4xl font-semibold text-black mb-8">
          Ongoing Research Scholars
        </h2>
        {loadingOngoing ? (
          <div className="flex justify-center items-center h-40">
            <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
            {ongoingScholars.length > 0 ? (
              ongoingScholars.map((scholar, index) => (
                <div
                  key={index}
                  className="flex lg:flex-row flex-col bg-white shadow-lg rounded-xl p-8 items-center gap-8 hover:shadow-2xl transition-all duration-300"
                >
                  {scholar.imageUrlOngoing && (
                    <div className="flex-shrink-0">
                      <img
                        src={scholar.imageUrlOngoing}
                        alt={scholar.name}
                        className="w-40 h-40 rounded-xl object-cover"
                      />
                    </div>
                  )}
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">
                      {scholar.name}
                    </h3>
                    <p className="text-lg text-gray-700 mt-2">
                      <strong>Title of Thesis:</strong> {scholar.title}
                    </p>
                    <p className="text-lg text-gray-700">
                      <strong>Supervisors:</strong> {scholar.supervisors.join(", ")}
                    </p>
                    <p className="text-lg text-gray-700">
                      <strong>Year of Joining:</strong> {scholar.yearOfJoining}
                    </p>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-xl text-gray-600">No ongoing scholars available.</p>
            )}
          </div>
        )}
      </div>

      {/* Awarded Research Scholars */}
      <div className="px-6 sm:px-12 mt-12 mb-24">
        <h2 className="text-3xl sm:text-4xl font-semibold text-black mb-8">
          Awarded Research Scholars
        </h2>
        {loadingAwarded ? (
          <div className="flex justify-center items-center h-40">
            <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
            {awardedScholars.length > 0 ? (
              awardedScholars.map((scholar, index) => (
                <div
                  key={index}
                  className="flex lg:flex-row flex-col bg-white shadow-lg rounded-xl p-8 items-center gap-8 hover:shadow-2xl transition-all duration-300"
                >
                  {scholar.imageUrlAwarded && (
                    <div className="flex-shrink-0">
                      <img
                        src={scholar.imageUrlAwarded}
                        alt={scholar.name}
                        className="w-40 h-40 rounded-xl object-cover"
                      />
                    </div>
                  )}
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">
                      {scholar.name}
                    </h3>
                    <p className="text-lg text-gray-700 mt-2">
                      <strong>Title of Thesis:</strong> {scholar.title}
                    </p>
                    <p className="text-lg text-gray-700">
                      <strong>Supervisors:</strong> {scholar.supervisors.join(", ")}
                    </p>
                    <p className="text-lg text-gray-700">
                      <strong>Year of Completion:</strong> {scholar.yearOfCompletion}
                    </p>
                    <p className="text-lg text-gray-700">
                      <strong>Present Affiliation:</strong> {scholar.presentAffiliation}
                    </p>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-xl text-gray-600">No awarded scholars available.</p>
            )}
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
}
