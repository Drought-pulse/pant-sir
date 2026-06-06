"use client"
import { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Loader2 } from "lucide-react"; // Import Lucide loader icon
import Navbar from "@/app/components/navbar";

interface Person {
  _id: string;
  name: string;
  designation: string;
  imageUrl: string;
}

const PeoplePage = () => {
  const [people, setPeople] = useState<Person[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPeople = async () => {
      try {
        const res = await fetch("/api/people");
        if (!res.ok) throw new Error("Failed to fetch people");
        const data = await res.json();
        setPeople(data);
      } catch (error: any) {
        toast.error(error.message || "Something went wrong");
      } finally {
        setLoading(false);
      }
    };

    fetchPeople();
  }, []);

  return (
    <div className="min-h-screen w-full bg-white text-black">
      <Navbar />
      <ToastContainer position="top-right" autoClose={3000} closeOnClick />

      {/* Page Header */}
      <div className="pt-[140px] px-6 sm:px-12">
        <h1 className="text-3xl sm:text-5xl text-[#2060b6] ">
          People
        </h1>
        <p className="mt-2 text-lg sm:text-xl text-gray-700">
          Meet the dynamic officials of the Hydraulic Turbine Lab, dedicated to innovation and excellence.
        </p>
      </div>

      {loading ? (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="flex flex-col items-center">
            <Loader2 className="animate-spin h-16 w-16 text-blue-500" />
            <p className="mt-4 text-white text-lg">Loading People...</p>
          </div>
        </div>
      ) : (
        <section className="px-8 sm:px-16 pt-20 mb-16">
          <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-12">
            {people.length > 0 ? (
              people.map((person) => (
                <div
                  key={person._id}
                  className="bg-white mb-10 md:p-8 rounded-2xl shadow-xl flex flex-col sm:flex-row items-center w-full min-h-[28rem] gap-6 transition transform hover:scale-105 hover:shadow-2xl"
                >
                  {/* Person Image - Left Side (Tall & Full Height) */}
                  {person.imageUrl && (
                    <div className="relative w-full md:w-1/2 h-full">
                      <img
                        src={person.imageUrl}
                        alt={person.name}
                        className="w-full h-full object-cover rounded-xl shadow-md"
                      />
                    </div>
                  )}

                  {/* Person Info - Right Side */}
                  <div className="md:w-1/2 w-[70%] text-left flex flex-col justify-center h-full p-4">
                    <h3 className="md:text-2xl text-lg font-bold text-gray-900">
                      {person.name}
                    </h3>
                    <p className="text-gray-700 mt-3 text-md md:text-lg">
                      <strong>Designation:</strong> {person.designation}
                    </p>
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
      )}
    </div>
  );
};

export default PeoplePage;
