"use client";
import Footer from "@/app/components/footer";
import Navbar from "@/app/components/navbar";
import App from "@/app/components/swipersystems"; // App component for large screens
import App2 from "@/app/components/swipersystem2";
import App3 from "@/app/components/swipersystem3";
import React, { useState } from "react";
const testRigFeatures = [
  {
    title: "Max Head",
    value: "60 m with discharge 150 lt./s. (Both pumps in series)",
  },
  {
    title: "Max Discharge",
    value: "907 lt./s. at head of 15 m (Both Pumps in parallel)",
  },
  { title: "Max Speed", value: "1600 RPM" },
  { title: "Hydro Static Bearing", value: "Voith, Germany Make" },
  { title: "VFD", value: "Siemens Make" },
  {
    title: "Universal Frequency Counter/Timer",
    value: "Agilent Make, 350 MHz, 12 digits, 100 PS",
  },
  { title: "Weights", value: "Calibrated F2-Class Standard weights" },
  { title: "Flow Calibration", value: "Gravimetric (Weighing)" },
  {
    title: "Flow Measurement",
    value: "ABB Make Electromagnetic Flow meter, Velocity Range 0-10m/s (max.)",
  },
  {
    title: "Head Measurement",
    value: "Yokogawa Make Differential Pressure Transmitter",
  },
  {
    title: "Torque Measurement",
    value:
      "HBM Make T12 torque meter capacity of 2kNm and HBM Make Z6 Load cell capacity of 10kg",
  },
  { title: "Speed Measurement", value: "HBM Make T12 torque meter" },
  {
    title: "Measuring Tank and Calibrator Tank Calibration",
    value:
      "Measuring tank: 3 Nos., 22T capacity RTN Type, HBM Make load cell | Calibrator tank: 1 No. 2T Capacity, S-type HBM Make load cell",
  },
  {
    title: "Cavitation Coefficient Measurement",
    value: "Yokogawa Make Diff. pressure transmitter for suction pressure",
  },
  {
    title: "Typical Runner Size of Turbine Model",
    values: [
      "Francis Turbine: 250 mm - 350 mm up to 385 mm",
      "Kaplan Turbine: 250-350 mm",
      "Pelton Turbine: Bucket size 80 mm - 90 mm",
      "Reversible Turbine: Inlet Diameter 250mm - 350 mm",
    ],
  },
  {
    title: "Flow Calibration Loop",
    value:
      "Can also be configured as calibration loop by bypassing the rig through a diverter unit in measuring tank/discharge tank.",
  },
  { title: "Model Testing", value: "Closed loop." },
  {
    title: "Reservoir Size and Capacity",
    value: "12.1m X 8m X 4.45m, Volume 217.8m³",
  },
  {
    title: "Sump Size and Capacity",
    value: "12.1m X 7.1m X 4.45m, Volume 300.69m³",
  },
  {
    title: "Transfer Pumps Motors - 4 Nos.",
    values: [
      "WPIL Make, Water lubricated, Speed 1450 rpm, Cap 900 m³/hr, Total head 3.0m",
      "Motor: ABB Make",
    ],
  },
  {
    title: "Main Pump-Motor - 2 Nos.",
    values: [
      "WPIL Make, Pump: Suction 400NS, Discharge 350NS, Speed 988rpm, Capacity 1440 m³/hr, Total head 24m",
      "Motor: 160 kW, 988 rpm, V415 V, Siemens Make",
    ],
  },
  {
    title: "Dynamo-Motor and Fourth Quadrant VFD",
    value: "Siemens Make 132kW AC Drive and induction motor",
  },
  {
    title: "Feed Pump-Motors - 2 Nos.",
    value: "Kirloskar Make, 415V, 50Hz, 0.85 pf, 11 kW, 1470 RPM",
  },
  {
    title: "Side Channel Pump - 1 No.",
    value: "Speck-Pumpen, Germany Make, 415V, 50Hz, 0.85 pf, 1.5 kW, 1440 RPM",
  },
  {
    title: "Energy Dissipating Valve",
    value:
      "Jash India Make, Dia-400mm inline valve with Auma Electric Actuator",
  },
  {
    title: "Liquid Chiller",
    value: "Drycool Systems Make, 40TR, Water Temp. 31°C max.",
  },
];

const ITEMS_PER_PAGE = 5;
const Page = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [showAll, setShowAll] = useState(false);

  const startIndex = currentPage * ITEMS_PER_PAGE;
  const displayedFeatures = showAll
    ? testRigFeatures
    : testRigFeatures.slice(startIndex, startIndex + ITEMS_PER_PAGE);
  return (
    <div className="min-h-screen w-full bg-white text-black">
      {/* Navbar */}
      <Navbar />

      {/* System Details Section */}
     

      {/* Calibration System Section */}
      <div className="px-6 pt-[140px] sm:px-12 pb-12 bg-white">
        {/* Heading */}
        <div className="relative">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 text-center sm:text-left mb-4">
            High Accuracy Calibration System
          </h2>
          <h3 className="text-xl  sm:text-left text-center text-gray-800 mt-8 mb-4">
            Flowmeter Calibration System
          </h3>
        </div>

        {/* Swiper App */}
        <div className="mt-[-90px]">
          <App />
        </div>

        {/* List of Items */}
        <ul className="list-disc pl-6 space-y-2 text-lg text-gray-700 mt-6">
          <li>
            Calibration tank 1.5-ton water and 1 No. 2.0 tons HBM make S40A load
            cell used, which is calibrated by the F2 class standard weights.
          </li>
          <li>
            Measuring tank capacity of 45 tons of water with 3x22 tons HBM make
            RTN load cell used, which is calibrated by the 2.0-ton calibration
            tank.
          </li>
          <li>Flow Diverter unit is operated by a compressor air.</li>
          <li>
            High accuracy precision timer used for actual time counter up-to-12
            decimal in Flowmeter calibration.
          </li>
        </ul>

        {/* Subheading and Sub-items */}
      </div> 

      {/* Torque Measurement and Calibration System */}
      <div className="px-6 sm:px-12 pb-12 bg-white">
        {/* Section Heading */}
        <h3 className="text-xl  sm:text-left text-center text-gray-800 mt-8 mb-4">
          Torque Measurement and Calibration System
        </h3>

        {/* Image and List Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          {/* First Image */}
          <div className="relative w-full">
            <img
              src="/t1.jpg"
              alt="Head Measurement Image 1"
              className="w-full h-[50vh] lg:h-[60vh] rounded-lg shadow-md object-cover"
            />
          </div>

          {/* Second Image */}
          <div className="relative w-full">
            <img
              src="/t2.jpg"
              alt="Head Measurement Image 2"
              className="w-full h-[50vh] lg:h-[60vh] rounded-lg shadow-md object-cover"
            />
          </div>
        </div>

        {/* List Items */}
        <ul className="list-disc text-lg pl-6 space-y-2 text-gray-700 mt-6">
          <li>
            Friction torque is measured by 10 kg cell and calibrated by F2 class
            standard weights. .
          </li>
          <li>
            Shaft torque is measured by 2 kNm torque meter and calibrated by F2
            class standard weights..
          </li>
        </ul>
      </div> 

        {/* Speed Measurement and Calibration System*/}
      <div className="px-6 sm:px-12 pb-12 bg-white">
        {/* Section Heading */}
        <h3 className="text-xl  sm:text-left text-center text-gray-800 mt-8 mb-4">
          Speed Measurement and Calibration System
        </h3>

        {/* Image and List Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          {/* First Image */}
          <div className="relative w-full">
            <img
              src="/speed calibration.jpg"
              alt="Head Measurement Image 1"
              className="w-full h-[50vh] lg:h-[60vh] rounded-lg shadow-md object-cover"
            />
          </div>

          {/* Second Image */}
          <div className="relative w-full">
            <img
              src="/speed measurement.jpg"
              alt="Head Measurement Image 2"
              className="w-full h-[50vh] lg:h-[60vh] rounded-lg shadow-md object-cover"
            />
          </div>
        </div>

        {/* List Items */}
      </div> 

        {/* Variable Frequency Drive with Motor*/}
      <div className="px-6 sm:px-12 pb-12 bg-white">
        {/* Section Heading */}
        <h3 className="text-xl  sm:text-left text-center text-gray-800 mt-8 mb-4">
          Variable Frequency Drive with Motor
        </h3>

        {/* Image and List Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          {/* First Image */}
          <div className="relative w-full">
            <img
              src="/generator & vfd.jpg"
              alt="Head Measurement Image 1"
              className="w-full h-[50vh] lg:h-[60vh] rounded-lg shadow-md object-cover"
            />
          </div>

          {/* Second Image */}
          <div className="relative w-full">
            <img
              src="/main pump vfd and drive.jpg"
              alt="Head Measurement Image 2"
              className="w-full h-[50vh] lg:h-[60vh] rounded-lg shadow-md object-cover"
            />
          </div>
        </div>

        {/* List Items */}
      </div>


      <div className="px-6 sm:px-12 pb-12 bg-white">
  {/* Section Heading */}
  <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 text-center sm:text-left mb-4">
    Measurement and Calibration for Head
  </h2>

  {/* Image Container */}
  <div className="relative w-full h-64 sm:h-96 md:h-[500px] lg:h-[630px] rounded-lg overflow-hidden shadow-lg">
    {/* Replace the src with your image path */}
    <img
      src="/Scada-head measurement.png" // Update with your image path
      alt="Measurement and Calibration for Head"
      className="w-full h-full object-cover"
    />
  </div>

</div>


      {/*salient features*/}
      <div className="max-w-6xl mx-auto p-6 bg-white mt-16 rounded-lg">
        <h2 className="text-2xl font-bold text-center  mb-4">
          Salient Features of Test RIG
        </h2>

        <ul className="space-y-4">
          {displayedFeatures.map((feature, index) => (
            <li key={index} className="border-b pb-2">
              <h3 className="text-lg font-semibold text-gray-800">
                {feature.title}
              </h3>
              {feature.values ? (
                <ul className="list-disc pl-5 text-gray-600">
                  {feature.values.map((val, i) => (
                    <li key={i}>{val}</li>
                  ))}
                </ul>
              ) : (
                <p className="text-gray-600">{feature.value}</p>
              )}
            </li>
          ))}
        </ul>

        <div className="flex justify-between mt-6">
          {!showAll && (
            <>
              <button
                onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 0))}
                disabled={currentPage === 0}
                className={`px-4 py-2 rounded ${
                  currentPage === 0
                    ? "bg-gray-300"
                    : "bg-[#2060b6] hover:bg-blue-700 text-white"
                }`}
              >
                Previous
              </button>

              <button
                onClick={() =>
                  setCurrentPage((prev) =>
                    Math.min(
                      prev + 1,
                      Math.ceil(testRigFeatures.length / ITEMS_PER_PAGE) - 1
                    )
                  )
                }
                disabled={startIndex + ITEMS_PER_PAGE >= testRigFeatures.length}
                className={`px-4 py-2 rounded ${
                  startIndex + ITEMS_PER_PAGE >= testRigFeatures.length
                    ? "bg-gray-300"
                    : "bg-[#2060b6] hover:bg-blue-700 text-white"
                }`}
              >
                Next
              </button>
            </>
          )}
        </div>
      </div>
      <button
        onClick={() => setShowAll((prev) => !prev)}
        className="px-4 mt-20 mx-5 xl:mx-[135px] py-2 bg-[#2060b6] hover:bg-blue-700 text-white rounded"
      >
        {showAll ? "Show Paginated" : "Show All"}
      </button>

      <div className="py-10 px-6 sm:px-12">
        <div className="max-w-7xl mx-auto">
          {/* Heading */}

          {/* Image Container */}
          <div className="relative w-full h-64 sm:h-96 md:h-[500px] lg:h-[720px] rounded-lg overflow-hidden shadow-lg">
            {/* Replace the src with your image path */}
            <img
              src="/testrig3.jpg" // Update with your image path
              alt="Featured Image"
              className=""
            />

            {/* Optional: Overlay Text */}
          </div>

          {/* Optional: Caption */}
        </div>
      </div>  

      <div className="px-6 sm:px-12 pb-12 bg-white">
        {/* Section Heading */}
        <h3 className="text-xl  sm:text-left text-center text-gray-800 mt-8 mb-4">
        Head Measurement and Calibration SCADA Screen
        </h3>

        {/* Image and List Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          {/* First Image */}
          <div className="relative w-full">
            <img
              src="/DSC09355.jpg"
              alt="Head Measurement Image 1"
              className="w-full h-[50vh] lg:h-[60vh] rounded-lg shadow-md object-cover"
            />
          </div>

          {/* Second Image */}
          <div className="relative w-full">
            <img
              src="/DSC09503.jpg"
              alt="Head Measurement Image 2"
              className="w-full h-[50vh] lg:h-[60vh] rounded-lg shadow-md object-cover"
            />
          </div>
        </div>

        {/* List Items */}
      </div>

      {/* vortex and flow observations */}
      <div className="px-6 sm:px-12 pb-12 bg-white">
        {/* Heading */}
        <div className="relative">
          <h2 className="text-2xl sm:text-3xl  text-gray-800 text-center sm:text-left mb-4">
            Vortex and Flow Pattern Observation System
          </h2>
          <h3 className="text-lg  sm:text-left text-center text-gray-800 mt-8 mb-4">
            Latest image watching instruments like High-speed camera,
            Stroboscope and Borescope are used for observation.
          </h3>
        </div>

        {/* Swiper App */}
        <div className="mt-[-150px]">
          <App2 />
        </div>
      </div>

      {/* Supervisory Control and Data Acquisition*/}
      <div className="px-6 sm:px-12 pb-12 bg-white">
        {/* Heading */}
        <div className="relative">
          <h2 className="text-2xl sm:text-3xl  text-gray-800 text-center sm:text-left mb-4">
            Supervisory Control and Data Acquisition
          </h2>
          <h3 className="text-lg  sm:text-left text-center text-gray-800 mt-8 mb-4">
            Data acquisition, control and operation of model testing are done by
            PLC based SCADA system. Results and graphs related to model as well
            as prototype are plotted simultaneously in NI-Labview System.{" "}
          </h3>
        </div>

        {/* Swiper App */}
        <div className="mt-[-150px]">
          <App3 />
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Page;
