"use client";

import Navbar from "@/app/components/navbar";
import Footer from "@/app/components/footer";
import App from "@/app/components/swiperesearch"; // Assuming this is the image slider component

export default function Scopes() {
  return (
    <div className="min-h-screen bg-white text-black">
      <Navbar />

      {/* Header Section */}
      <div className="pt-[140px] px-6 sm:px-12 text-center sm:text-left">
        <h1 className="text-4xl sm:text-5xl text-[#2060b6]">Research Scopes</h1>
      </div>

      

      {/* Research Scopes */}
      <div className="px-6 sm:px-12 mt-10 ">
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            "Computational analysis of intensity of hydraulic turbine.",
            "Application research of hydraulic optimization and analysis of internal flow.",
            "Flow field display technique of hydraulic turbine.",
            "Model test and acceptance test for inland and overseas projects.",
            "Research on cavitation mechanism and anti-cavitation measures.",
            "Measurement and control technique for measurement of pressure fluctuations in hydraulic turbine.",
            "Hydraulic vibration stability test in hydraulic machinery.",
            "Measurement of dynamic pressure velocity field in hydraulic turbine.",
          ].map((text, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-lg p-6 hover:shadow-xl transition-all duration-300"
            >
              <h3 className="text-lg font-semibold text-gray-800">{text}</h3>
            </div>
          ))}
        </div>
      </div>   
      <div className="px-6 sm:px-12">
        <App /> {/* Swiper Image Carousel */}
      </div>

      <Footer />
    </div>
  );
}
