// "use client";

// import { useEffect, useState } from "react";
// import Link from "next/link";
// import Footer from "@/app/components/footer";
// import Navbar from "@/app/components/navbar";

// interface Certification {
//   title: string; // Title for the section
//   certificateLink: string; // Link to the certificate
//   pdfUrl?: string; // Optional PDF URL
// }

// export default function CertificationPage() {
//   const [certifications, setCertifications] = useState<Certification[]>([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState<string | null>(null);

//   // Fetch certification data from the API
//   useEffect(() => {
//     const fetchCertifications = async () => {
//       try {
//         const res = await fetch("/api/certifications");
//         if (!res.ok) throw new Error("Failed to fetch certification data");
//         const data = await res.json();
//         setCertifications(data);
//       } catch (error) {
//         setError("Failed to load certification data");
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchCertifications();
//   }, []);

//   if (loading) {
//     return (
//       <div className="h-screen bg-[#ffff] w-full flex items-center justify-center">
//         <p className="text-lg text-gray-600">Loading...</p>
//       </div>
//     );
//   }

//   if (error) {
//     return (
//       <div className="h-screen bg-[#ffff] w-full flex items-center justify-center">
//         <p className="text-lg text-red-600">{error}</p>
//       </div>
//     );
//   }

//   if (!certifications.length) {
//     return (
//       <div className="h-screen bg-[#ffff] w-full flex items-center justify-center">
//         <p className="text-lg text-gray-600">No certification data found.</p>
//       </div>
//     );
//   }

//   return (
//     <div className="h-screen bg-[#ffff] w-full">
//       {/* Navbar */}
//       <Navbar />

//       {/* Certifications Content */}
//       <div className="pt-[140px] px-6 sm:px-12 mb-[100px]">
//         {/* Certifications Heading */}
//         <h1 className="text-3xl sm:text-5xl  text-[#2060b6] mb-8">
//           Certifications
//         </h1>

//         <h2 className="text-2xl sm:text-4xl">
//           National Accreditation Board for Testing and Calibration Laboratories
//         </h2>
//         <h3 className="text-lg sm:text-xl text-gray-700 mt-3">
//           Accreditation Certificate
//         </h3>
//         <p className="text-md sm:text-lg text-gray-600 mt-5 max-w-6xl leading-relaxed">
//           Hydraulic Turbine R&D Laboratory is accredited by National
//           Accreditation Board for Testing and Calibration Laboratories (NABL) in
//           accordance with ISO/IEC 17025:2017 for Hydro Turbine Model Testing and
//           Fluid Flow Calibration since 2018; as per IEC 60193:2019 and ISO
//           4185:1980. Accreditation is renewed every two years. NABL is part of
//           Asia Pacific Laboratory Accreditation Cooperation (APLAC) which in
//           turn is part of International Laboratory Accreditation Cooperation
//           (ILAC).
//         </p>

//         {/* Dynamic Sections */}
//         {certifications.map((cert, index) => (
//           <div key={index} className="px-6 sm:px-12 mt-16 text-center">
//             {/* Dynamic Heading */}
//             <h2 className="text-xl sm:text-3xl text-[#2060b6] break-words">
//               {cert.title} {/* Dynamic title from the database */}
//             </h2>

//             {/* Dynamic Links */}
//             <div className="mt-6 flex flex-col sm:flex-row justify-center gap-4">
//               {/* Certificate Link */}
//               {cert.certificateLink && (
//                 <Link
//                   href={cert.certificateLink}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="inline-block py-2 px-4 sm:py-3 sm:px-6 bg-[#2060b6] text-white font-semibold rounded-lg hover:bg-transparent hover:text-black hover:border hover:border-black transition duration-300 text-sm sm:text-base"
//                 >
//                   View Certificate
//                 </Link>
//               )}

//               {/* PDF Link */}
//               {cert.pdfUrl && (
//                 <Link
//                   href={cert.pdfUrl}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="inline-block py-2 px-4 sm:py-3 sm:px-6 bg-[#2060b6] text-white font-semibold rounded-lg hover:bg-transparent hover:text-black hover:border hover:border-black transition duration-300 text-sm sm:text-base"
//                 >
//                   View Certificate(pdf)
//                 </Link>
//               )}
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* Footer */}
//       <Footer />
//     </div>
//   );
// }



// "use client";

// import { useEffect, useState } from "react";
// import Link from "next/link";
// import Footer from "@/app/components/footer";
// import Navbar from "@/app/components/navbar";

// interface Certification {
//   title: string; // Title for the section
//   certificateLink: string; // Link to the certificate
//   pdfUrl?: string; // Optional PDF URL
// }

// export default function CertificationPage() {
//   const [certifications, setCertifications] = useState<Certification[]>([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState<string | null>(null);

//   // Fetch certification data from the API
//   useEffect(() => {
//     const fetchCertifications = async () => {
//       try {
//         const res = await fetch("/api/certifications");
//         if (!res.ok) throw new Error("Failed to fetch certification data");
//         const data = await res.json();
//         setCertifications(data);
//       } catch (error) {
//         setError("Failed to load certification data");
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchCertifications();
//   }, []);

//   if (loading) {
//     return (
//       <div className="h-screen bg-[#ffff] w-full flex items-center justify-center">
//         <p className="text-lg text-gray-600">Loading...</p>
//       </div>
//     );
//   }

//   if (error) {
//     return (
//       <div className="h-screen bg-[#ffff] w-full flex items-center justify-center">
//         <p className="text-lg text-red-600">{error}</p>
//       </div>
//     );
//   }

//   if (!certifications.length) {
//     return (
//       <div className="h-screen bg-[#ffff] w-full flex items-center justify-center">
//         <p className="text-lg text-gray-600">No certification data found.</p>
//       </div>
//     );
//   }

//   return (
//     <div className="h-screen bg-[#ffff] w-full">
//       {/* Navbar */}
//       <Navbar />

//       {/* Certifications Content */}
//       <div className="pt-[140px] px-6 sm:px-12 mb-[100px]">
//         {/* Certifications Heading */}
//         <h1 className="text-3xl sm:text-5xl  text-[#2060b6] mb-8">
//           Certifications
//         </h1>

//         <h2 className="text-2xl sm:text-4xl">
//           National Accreditation Board for Testing and Calibration Laboratories
//         </h2>
//         <h3 className="text-lg sm:text-xl text-gray-700 mt-3">
//           Accreditation Certificate
//         </h3>
//         <p className="text-md sm:text-lg text-gray-600 mt-5 max-w-6xl leading-relaxed">
//           Hydraulic Turbine R&D Laboratory is accredited by National
//           Accreditation Board for Testing and Calibration Laboratories (NABL) in
//           accordance with ISO/IEC 17025:2017 for Hydro Turbine Model Testing and
//           Fluid Flow Calibration since 2018; as per IEC 60193:2019 and ISO
//           4185:1980. Accreditation is renewed every two years. NABL is part of
//           Asia Pacific Laboratory Accreditation Cooperation (APLAC) which in
//           turn is part of International Laboratory Accreditation Cooperation
//           (ILAC).
//         </p>

//         {/* Dynamic Sections */}
//         {certifications.map((cert, index) => (
//           <div key={index} className="px-6 sm:px-12 mt-16 text-center">
//             {/* Dynamic Heading */}
//             <h2 className="text-xl sm:text-3xl text-[#2060b6] break-words">
//               {cert.title} {/* Dynamic title from the database */}
//             </h2>

//             {/* Dynamic Links */}
//             <div className="mt-6 flex flex-col sm:flex-row justify-center gap-4">
//               {/* Certificate Link */}
//               {cert.certificateLink && (
//                 <Link
//                   href={cert.certificateLink}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="inline-block py-2 px-4 sm:py-3 sm:px-6 bg-[#2060b6] text-white font-semibold rounded-lg hover:bg-transparent hover:text-black hover:border hover:border-black transition duration-300 text-sm sm:text-base animate-pop"
//                 >
//                   View Certificate
//                 </Link>
//               )}

//               {/* PDF Link */}
//               {cert.pdfUrl && (
//                 <Link
//                   href={cert.pdfUrl}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="inline-block py-2 px-4 sm:py-3 sm:px-6 bg-[#1e90ff] text-white font-semibold rounded-lg hover:bg-transparent hover:text-black hover:border hover:border-black transition duration-300 text-sm sm:text-base animate-pop"
//                 >
//                   View Certificate (PDF)
//                 </Link>
//               )}
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* Footer */}
//       <Footer />

//       {/* Custom CSS for the popping animation */}
//       <style jsx>{`
//         @keyframes pop {
//           0% {
//             transform: scale(1);
//           }
//           50% {
//             transform: scale(1.1);
//           }
//           100% {
//             transform: scale(1);
//           }
//         }
//         .animate-pop {
//           animation: pop 1.5s infinite;
//         }
//       `}</style>
//     </div>
//   );
// }





"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Footer from "@/app/components/footer";
import Navbar from "@/app/components/navbar";
import { Loader2 } from "lucide-react"; // Import Lucide loader icon
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface Certification {
  title: string; // Title for the section
  certificateLink: string; // Link to the certificate
  pdfUrl?: string; // Optional PDF URL
}

export default function CertificationPage() {
  const [certifications, setCertifications] = useState<Certification[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Fetch certification data from the API
  useEffect(() => {
    const fetchCertifications = async () => {
      try {
        const res = await fetch("/api/certifications");
        if (!res.ok) throw new Error("Failed to fetch certification data");
        const data = await res.json();
        setCertifications(data);
      } catch (error) {
        setError("Failed to load certification data");
      } finally {
        setLoading(false);
      }
    };

    fetchCertifications();
  }, []);

  if (loading) {
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
        <div className="flex flex-col items-center">
          <Loader2 className="animate-spin h-16 w-16 text-blue-500" />
          <p className="mt-4 text-white text-lg">Loading Certifications...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="h-screen bg-[#ffff] w-full flex items-center justify-center">
        <p className="text-lg text-red-600">{error}</p>
      </div>
    );
  }

  if (!certifications.length) {
    return (
      <div className="h-screen bg-[#ffff] w-full flex items-center justify-center">
        <p className="text-lg text-gray-600">No certification data found.</p>
      </div>
    );
  }

  return (
    <div className="h-screen bg-[#ffff] w-full">
      {/* Navbar */}
      <Navbar />

      {/* Certifications Content */}
      <div className="pt-[140px] px-6 sm:px-12 mb-[100px]">
        {/* Certifications Heading */}
        <h1 className="text-3xl sm:text-5xl  text-[#2060b6] mb-8">
          Certifications
        </h1>

        <h2 className="text-2xl sm:text-4xl">
          National Accreditation Board for Testing and Calibration Laboratories
        </h2>
        <h3 className="text-lg sm:text-xl text-gray-700 mt-3">
          Accreditation Certificate
        </h3>
        <p className="text-md sm:text-lg text-gray-600 mt-5 max-w-6xl leading-relaxed">
          Hydraulic Turbine R&D Laboratory is accredited by National
          Accreditation Board for Testing and Calibration Laboratories (NABL) in
          accordance with ISO/IEC 17025:2017 for Hydro Turbine Model Testing and
          Fluid Flow Calibration since 2018; as per IEC 60193:2019 and ISO
          4185:1980. Accreditation is renewed every two years. NABL is part of
          Asia Pacific Laboratory Accreditation Cooperation (APLAC) which in
          turn is part of International Laboratory Accreditation Cooperation
          (ILAC).
        </p>

        {/* Dynamic Sections */}
        {certifications.map((cert, index) => (
          <div key={index} className="px-6 sm:px-12 mt-16 text-center">
            {/* Dynamic Heading */}
            <h2 className="text-xl sm:text-3xl text-[#2060b6] break-words">
              {cert.title} {/* Dynamic title from the database */}
            </h2>

            {/* Dynamic Links */}
            <div className="mt-6 flex flex-col sm:flex-row justify-center gap-4">
              {/* Certificate Link */}
              {cert.certificateLink && (
                <Link
                  href={cert.certificateLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block py-2 px-4 sm:py-3 sm:px-6 bg-[#2060b6] text-white font-semibold rounded-lg hover:bg-transparent hover:text-black hover:border hover:border-black transition duration-300 text-sm sm:text-base animate-shine"
                >
                  View Certificate
                </Link>
              )}

              {/* PDF Link */}
              {cert.pdfUrl && (
                <Link
                  href={cert.pdfUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block py-2 px-4 sm:py-3 sm:px-6 bg-[#1e90ff] text-white font-semibold rounded-lg hover:bg-transparent hover:text-black hover:border hover:border-black transition duration-300 text-sm sm:text-base animate-shine"
                >
                  View Certificate (PDF)
                </Link>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Footer */}
      <Footer />

      {/* Custom CSS for the shining animation */}
      <style jsx>{`
        @keyframes shine {
          0% {
            box-shadow: 0 0 10px rgba(32, 96, 182, 0.5);
          }
          50% {
            box-shadow: 0 0 20px rgba(32, 96, 182, 0.8);
          }
          100% {
            box-shadow: 0 0 10px rgba(32, 96, 182, 0.5);
          }
        }
        .animate-shine {
          animation: shine 2s infinite;
        }
      `}</style>
    </div>
  );
}