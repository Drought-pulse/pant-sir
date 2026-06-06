"use client";
import Image from "next/image";
import Navbar from "./components/navbar";
import Link from "next/link";
import Footer from "./components/footer";
import { useState } from "react";
import { DirectionAwareHover } from "@/components/ui/direction-aware-hover";
import { FlipWordsDemo } from "./components/Fwords1";
import { DynamicButton } from "./components/Fhoverbutton";
import { SparklesPreview } from "./components/Fsparkels";

export default function Home() {
  return (
    <div className="h-screen bg-[#ffff] w-full">
      {/* Navbar and Image */}
      <div className="">
        <Navbar />
        {/* Image with Overlay */}
        <div className="relative h-[60vh] sm:h-[70vh] w-full">
          <img
            src="/04.jpg" // Replace with your image path
            alt="Descriptive Image"
            className="absolute inset-0 w-full h-full object-cover"
          />
          {/* Overlay Text Container */}
          <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
            <div className="text-center text-white space-y-2">
              <h1 className="text-sm sm:text-2xl font-semibold">
                Department of Hydro and Renewable Energy
              </h1>
              <h2 className="text-3xl sm:text-6xl font-bold">
                Hydraulic Turbine R & D Laboratory
              </h2>
            </div>
          </div>
        </div>
      </div>

      {/* Introduction */}
      <div className="pt-16 px-6 sm:px-12 w-full">
  <div className="max-w-8xl space-y-6">
    <h3 className="text-2xl sm:text-3xl text-center md:text-start font-semibold text-gray-800">
      INTRODUCTION
    </h3>
    <p className="text-base sm:text-lg text-justify text-gray-600 leading-relaxed">
      Real turbines can be tested at site in real conditions for which it
      is designed, only after installation and that too with relatively
      high inaccuracy. Practically no improvement can be done once the
      machine has been installed. The tests are therefore conducted on
      scaled models, on scaled hydraulic conditions. Such model tests
      process is a time-consuming job and it demands well-calibrated
      precision instruments, which are costly and often tailor-made.
      Larger turbine manufacturers such as BHEL, Andritz, Voith, GE, and
      Dongfang have their own test facilities. However, smaller developers
      and consultants concerned with hydro power cannot afford such a big
      investment. Consequently, several projects have faced surprises
      during their operation.
    </p>
    {/* Dynamic Buttons Section */}
    <div className="mt-6 h-[20vh] flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-6">
      <DynamicButton 
        name="Brochure" 
        href="https://iitr.ac.in/Departments/Hydro%20and%20Renewable%20Energy%20Department/static/labs/hydro_turbine_lab/HRED_Hydraulic_Lab_Brochurec_January_2024.pdf" 
      />
      <DynamicButton 
        name="Poster" 
        href="https://iitr.ac.in/Departments/Hydro%20and%20Renewable%20Energy%20Department/static/labs/hydro_turbine_lab/Laboratory_posters_HRED_website.pdf" 
      />
    </div>
  </div>
</div>
   

            {/* HRED Text with Image Format */}

      <div className="px-6 mt-[-30px] sm:px-12">
        <div className="max-w-7xl mx-auto mt-20 flex flex-col md:flex-row items-start md:items-center space-y-8 md:space-y-0 md:space-x-8">
          {/* Left Content: Text Section */}
          <div className="flex-1">
            <h2 className="text-2xl sm:text-3xl text-gray-800">
              Hydraulic Turbine R and D Laboratory, HRED, IIT Roorkee
            </h2>
            <p className="mt-4 text-base sm:text-lg text-gray-600 leading-relaxed text-justify">
              A fully automatic SCADA based Hydraulic Turbine R&D Laboratory
              sponsored by Ministry of New and Renewable Energy, Government of
              India has been commissioned in 2017 at HRED, IIT Roorkee,
              Uttarakhand. HRED is a center of excellence for small hydropower
              in the country, to validate the homologous hydro turbine models
              designed & fabricated by various turbine manufacturers. IIT
              Roorkee is one of the oldest technical institutes set up in 1847
              and has played an important role in the development of Water
              resources in India, both through education of competent engineers
              as well as research work.
            </p>
          </div>

          {/* Right Content: Image Section with DirectionAwareHover */}
          <div className="flex-shrink-0 w-full sm:w-3/4 md:w-1/2 lg:w-1/3"> 
           
          <DirectionAwareHover imageUrl="/lab outside photo.jpg">
    <div className="text-white">
      <h3 className="text-xl font-bold">Hydraulic Turbine Lab</h3>
      <p className="text-sm">Explore the high-tech facility</p>
    </div>
  </DirectionAwareHover>
          
  
</div>

        </div>
      </div> 

        {/* Objectives */}
        <div className="max-w-6xl mt-10 mx-auto px-6 sm:px-12 flex flex-col md:flex-row items-start md:items-center space-y-6 md:space-y-0 md:space-x-6">
  <div className="max-w-7xl mx-auto space-y-6">
    {/* Sparkles Heading */}
    <div className="text-center md:text-left">
      <SparklesPreview />
    </div>

    <p className="text-base sm:text-lg text-gray-600 leading-relaxed text-justify">
      The laboratory shall support the Indian small hydropower industry
      (government as well as independent) to grow and compete in the
      international market in various aspects of hydroelectric power
      development:
    </p>

    <ul className="list-disc pl-6 sm:pl-8 text-base sm:text-lg text-gray-600 space-y-2">
      <li>
        Spearheading research and development activity in the country for
        hydro turbine/reversible pump turbine.
      </li>
      <li>
        Developing human resources for small hydropower in respect of
        entrepreneurs, engineers, plant operators and researchers.
      </li>
      <li>
        Generating data and building expertise for solving site specific
        problems.
      </li>
      <li>
        Providing facilities for testing and certification of turbines.
      </li>
      <li>
        Providing affordable facilities to small hydro manufacturers for
        design verification.
      </li>
    </ul>
  </div>
</div>




     

      

      

      {/* High-Tech Facility */}
      <div className="pt-5 px-6 sm:px-12">
      <div className="max-w-7xl mx-auto mt-20 flex flex-col lg:flex-row items-start md:items-stretch space-y-8 md:space-y-0 md:space-x-8">
        {/* Image with Hover Effect */}
        <div className="flex-shrink-0 w-full sm:w-3/4 md:w-3/4 lg:w-1/3">
          <DirectionAwareHover imageUrl="/flow meter.png">
            <div className="text-white text-center">
              <h3 className="text-xl font-bold">Flow meter</h3>
              <p className="text-sm">Explore the advanced turbine testing lab</p>
            </div>
          </DirectionAwareHover>
        </div>

        {/* Text Content */}
        <div className="flex-1">
          <div className="text-2xl sm:text-3xl md:mt-10 text-gray-800">
            <FlipWordsDemo/>
          </div>
          <p className="mt-4 text-base sm:text-lg text-gray-600 leading-relaxed text-justify">
            Both CFD and experimental tests are carried out to validate the
            forecast performance and output test results obtained by
            calculation methods. The experimental tests are conducted for
            Francis, Kaplan, and Pelton turbines by using a scaled model of the
            turbine. This stage of the hydraulic testing process provides a
            unique opportunity to verify the complete turbine operating range,
            taking into account complex operating phenomena, which are not
            covered in the theoretical calculation and tests carried out in
            previous CFD stages. This high-tech scaled model test laboratory
            is designed to test models of Turbine/ Reversible Pump
            Turbine/Large Pumps. The test rig is capable of simulating
            conditions identical to those in a real hydropower plant.
          </p>
          <p className="mt-6 border-t border-gray-300 pt-4 text-base sm:text-lg text-gray-700">
            The guiding parameters in setting up this Lab are as follows:
          </p>
          <ul className="list-disc ml-6 mt-2 text-base sm:text-lg text-gray-700 space-y-2">
            <li>
              Excellent overall accuracy in turbine efficiency measurement
              (target better than 0.25%).
            </li>
            <li>Repeatability (target better than 0.15%).</li>
            <li>
              Limiting the normal power consumption in the Laboratory to 300
              kW level.
            </li>
            <li>
              Meeting IEC60193:2019 and ISO/IEC 17025:2017 requirements.
            </li>
            <li>
              Flexible rig to accommodate many types and designs of turbine
              models.
            </li>
            <li>Test conditions and parameters to be stable.</li>
          </ul>
        </div>
      </div>
    </div>


         {/* New Update Section */}
      {/* <div className="max-w-6xl mt-10 mx-auto px-6 sm:px-12 flex flex-col md:flex-row items-start md:items-center space-y-6 md:space-y-0 md:space-x-6">
        <div className="flex-1">
          <h3 className="text-xl sm:text-2xl md:text-3xl text-[#2060b6]">
            Training Program
          </h3>
          <p className="mt-4 text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed">
            Training on Hydro-Turbine Model Testing, Cavitation, Silt and
            Abrasive Erosion Measurements by Independent Laboratory
            Hydraulic-Turbine R&D Laboratory during January 21-23, 2025 brochure
          </p>
        </div>
        <div className="md:flex-shrink-0">
          <Link
            target="_blank"
            href="https://iitr.ac.in/Departments/Hydro%20and%20Renewable%20Energy%20Department/static/labs/hydro_turbine_lab/Brochure_HTRD_LAB_HRED_Training_21-23_jan_2025.pdf"
            className="inline-block w-full md:w-auto mt-6 py-4 px-6 bg-[#2060b6] text-white text-center font-semibold hover:bg-transparent hover:text-black hover:border-[1px] hover:border-black transition duration-300"
          >
            Learn More
          </Link>
        </div>
      </div> */}

      {/* Tests on Scaled Model */}
      <div className="px-6 pt-6 pb-20 md:mx-20 space-y-6">
        <h2 className="text-xl font-semibold">Tests on Scaled Model</h2>
        <section>
          <ul className="list-disc list-inside ml-4 space-y-1">
            <li>Weighted average efficiency and turbine output/pump input</li>
            <li>Cavitation’s performance</li>
            <li>Pressure pulsation</li>
            <li>Run-away speed</li>
          </ul>
        </section>
        <section>
          <h2 className="text-xl font-semibold">Additional Tests Conducted</h2>
          <ul className="list-disc list-inside ml-4 space-y-1">
            <li>
              Characteristic Curves for the Turbine Quadrant / Four Quadrant for
              Reversible Turbine
            </li>
            <li>Hydraulic Thrust</li>
            <li>Torque</li>
          </ul>
        </section>
        <section>
          <h2 className="text-xl font-semibold">Laboratory Equipment</h2>
          <p>
            The laboratory is equipped with a state-of-the-art SCADA-based
            automatic control system, including:
          </p>
          <ul className="list-disc list-inside ml-4 space-y-1">
            <li>Electromagnetic flow meters</li>
            <li>Pressure transducers</li>
            <li>Sensors</li>
          </ul>
        </section>
        <section>
          <h2 className="text-xl font-semibold">Measurement and Calibration</h2>
          <ul className="list-disc list-inside ml-4 space-y-1">
            <li>Flow measurement tank</li>
            <li>Calibration tank</li>
            <li>Provision to calibrate flow meter by gravimetric method</li>
          </ul>
        </section>
      </div>

      <Footer />
    </div>
  );
}