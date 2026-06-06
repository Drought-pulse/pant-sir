'use client';

import Footer from "@/app/components/footer";
import Navbar from "@/app/components/navbar";
import React, { useEffect, useState } from "react";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

const Activities: React.FC = () => {
  const [modelTests, setModelTests] = useState<any[]>([]); // Store model test data
  const [loading, setLoading] = useState<boolean>(true); // Loading state
  const [error, setError] = useState<string | null>(null); // Error handling
  const [currentPage, setCurrentPage] = useState(1); // Track the current page
  const itemsPerPage = 5; // Show 5 items per page

  // Fetch model test data from API
  useEffect(() => {
    const fetchModelTests = async () => {
      try {
        const response = await fetch("/api/activities");
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await response.json();
        setModelTests(data.reverse()); // Reverse to show latest first
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchModelTests();
  }, []);

  // Calculate items for the current page
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = modelTests.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(modelTests.length / itemsPerPage);

  // Pagination handlers
  const goToNextPage = (event: React.MouseEvent) => {
    event.preventDefault(); // Prevents scrolling to the top
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const goToPreviousPage = (event: React.MouseEvent) => {
    event.preventDefault(); // Prevents scrolling to the top
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const goToPage = (event: React.MouseEvent, page: number) => {
    event.preventDefault(); // Prevents scrolling to the top
    setCurrentPage(page);
  };

  return (
    <div className="min-h-screen w-full bg-white text-black">
      <Navbar />

      <div className="py-[140px] px-6 sm:px-12">
        <h1 className="text-3xl sm:text-5xl text-[#2060b6]">Activities</h1>

        <div className="mt-10 flex flex-col lg:flex-row items-start gap-10">
          {/* Text Section */}
          <div className="flex-1">
            <h2 className="text-2xl font-bold">Turbine Model Testing of New / Refurbished Projects</h2>
            <ul className="mt-4 list-disc list-inside text-lg text-gray-700 space-y-2">
              <li>Francis Turbine</li>
              <li>Kaplan Turbine</li>
              <li>Pelton Turbine</li>
              <li>Reversible Pump Storage Turbine</li>
              <li>SCADA based Control</li>
              <li>Overall uncertainty of ±0.25 %, Repeatability ±0.15 %</li>
              <li>Main Hydraulic Performance & Additional Performance Test</li>
              <li>Design Validation through CFD Analysis</li>
              <li>Third Party Witness Consultancy/Support</li>
            </ul>
          </div>

          {/* Image Section */}
          <div className="w-full lg:w-1/2 flex justify-center">
            <img src="activities1.jpg" alt="Turbine Testing" className="w-full h-auto max-w-lg rounded-lg shadow-lg" />
          </div>
        </div>
      </div>   

      <div className="py-16 px-6 sm:px-12 bg-white">
        <h2 className="text-2xl font-bold ">International Standards & Protocol</h2>
        <ul className="mt-6 list-disc list-inside text-lg text-gray-700 space-y-4">
          <li>A difference of 0.1% efficiency for a 100 MW unit shall be a loss of 173 million units for life 40 years. At the rate of Rs 4 per unit this loss is Rs 69.2 Crore.</li>
          <li>Before turbine manufacturing, model testing of the turbine comprising of runner, guide vanes, draft tube, and spiral casing is tested in the laboratory so that design/guaranteed efficiency is achieved/validated.</li>
          <li>International Standard for model Testing is IEC 60193:2019 “Hydraulic turbines, storage pumps and pump-turbines–Model acceptance tests”, International Standard for laboratory is ISO/IEC 17025:2017 “General Requirements for the Competence of Testing and Calibration Laboratories”.</li>
          <li>Another international standard for measuring the efficiency in the power house is IEC 60041:1991 “Field acceptance tests to determine the hydraulic performance of hydraulic turbines, storage pumps and pump-turbines”. This is just to validate the guaranteed values; however, one cannot do anything to improve the efficiency if model testing is not done in the laboratory.</li>
        </ul>
      </div>

      {/* Model Test Conducted Section */}
      <div className="py-16 px-6 sm:px-12 h-[145vh] bg-white lg:h-[105vh] xl:h-[90vh] 2xl:h-[100vh] ">
        <h2 className="text-2xl font-bold">Model Test Conducted at Hydraulic Turbine R&D Laboratory HRED, IIT Roorkee</h2>

        {loading && <div>Loading...</div>}
        {error && <div className="text-red-500">{error}</div>}

        <div className="overflow-x-auto mt-6">
          <table className="w-full border-collapse border border-gray-300">
            <thead className="text-lg ">
              <tr className="bg-gray-200 text-left">
                <th className="border border-gray-300 px-4 py-2">S. No.</th>
                <th className="border border-gray-300 px-4 py-2">Name of Project</th>
                <th className="border border-gray-300 px-4 py-2">Unit Output</th>
                <th className="border border-gray-300 px-4 py-2">Customer</th>
                <th className="border border-gray-300 px-4 py-2">Type of Machine</th>
                <th className="border border-gray-300 px-4 py-2">Year of Test</th>
                <th className="border border-gray-300 px-4 py-2">Remarks</th>
              </tr>
            </thead>
            <tbody className="text-[15px]">
              {currentItems.map((test, index) => (
                <tr key={index}>
                  <td className="border border-gray-300 px-4 py-2">{indexOfFirstItem + index + 1}</td>
                  <td className="border border-gray-300 px-4 py-2">{test.projectName}</td>
                  <td className="border border-gray-300 px-4 py-2">{test.unitOutput}</td>
                  <td className="border border-gray-300 px-4 py-2">{test.customer}</td>
                  <td className="border border-gray-300 px-4 py-2">{test.machineType}</td>
                  <td className="border border-gray-300 px-4 py-2">{test.yearOfTest}</td>
                  <td className="border border-gray-300 px-4 py-2">{test.remarks}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination Component */}
        {totalPages > 1 && (
          <Pagination className="mt-6 flex justify-center">
            <PaginationContent>
              <PaginationItem>   
              
                <PaginationPrevious onClick={goToPreviousPage} className="cursor-pointer" />
              </PaginationItem>

              {[...Array(totalPages)].map((_, i) => (
                <PaginationItem key={i}>
                  <PaginationLink
                    onClick={(e) => goToPage(e, i + 1)}
                    className={currentPage === i + 1 ? "font-bold text-blue-500" : ""}
                  >
                    {i + 1}
                  </PaginationLink>
                </PaginationItem>
              ))}

              <PaginationItem>
                <PaginationNext onClick={goToNextPage} className="cursor-pointer" />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        )}
      </div>

      <Footer />
    </div>
  );
};

export default Activities;
