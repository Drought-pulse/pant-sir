// "use client";

// import { useRouter } from "next/navigation";
// import { useState } from "react";
// import Navbar from "@/app/components/navbar";
// import Link from "next/link";
// import { toast, ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// export default function Dashboard() {
//   const router = useRouter();
//   const [loading, setLoading] = useState(false);

//   const handleLogout = async () => {
//     setLoading(true);
//     try {
//       const res = await fetch("/api/logout", { method: "POST" });

//       if (res.ok) {
//         toast.success("Logged out successfully!");

//         // Redirect after a short delay
//         setTimeout(() => router.push("/login"), 2000);
//       } else {
//         toast.error("Logout failed. Please try again.");
//       }
//     } catch (error) {
//       toast.error("An error occurred during logout.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gray-100 flex flex-col">
//       {/* Navbar */}
//       <Navbar />

//       {/* Toast Notification Container */}
//       <ToastContainer position="top-right" autoClose={3000} closeOnClick />

//       {/* Main Content */}
//       <div className="pt-[140px] px-6 sm:px-12 flex flex-col items-center flex-grow">
//         <h1 className="text-4xl font-semibold text-[#2060b6] mb-6 text-center">Dashboard</h1>

//         {/* Informational Text */}
//         <p className="text-lg text-gray-700 max-w-3xl mb-8 text-center">
//           From this page, you can access sections to <strong>create a new ID for authentication</strong> 
//           and also <strong>update data</strong> by selecting the specific data component you need.
//         </p>

//         {/* Buttons Section */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl w-full justify-center">
//           <Link
//             href="/signup"
//             className="py-3 px-6 bg-[#2060b6] text-white text-center font-semibold 
//             hover:bg-transparent hover:text-black border border-[#2060b6] transition duration-300 rounded-lg"
//           >
//             Create New User
//           </Link>

//           <Link
//             href="/addactivities"
//             className="py-3 px-6 bg-[#2060b6] text-white text-center font-semibold 
//             hover:bg-transparent hover:text-black border border-[#2060b6] transition duration-300 rounded-lg"
//           >
//             Add Activities
//           </Link>

//           <Link
//             href="/updateactivities"
//             className="py-3 px-6 bg-[#2060b6] text-white text-center font-semibold 
//             hover:bg-transparent hover:text-black border border-[#2060b6] transition duration-300 rounded-lg"
//           >
//             Update Activities
//           </Link>

//           <Link
//             href="/scholars-form/create"
//             className="py-3 px-6 bg-[#2060b6] text-white text-center font-semibold 
//             hover:bg-transparent hover:text-black border border-[#2060b6] transition duration-300 rounded-lg"
//           >
//             Add Scholars Data
//           </Link>

//           <Link
//             href="/scholars-form/manage/ongoing"
//             className="py-3 px-6 bg-[#2060b6] text-white text-center font-semibold 
//             hover:bg-transparent hover:text-black border border-[#2060b6] transition duration-300 rounded-lg"
//           >
//             Update Ongoing Scholars Data
//           </Link>

//           <Link
//             href="/scholars-form/manage/awarded"
//             className="py-3 px-6 bg-[#2060b6] text-white text-center font-semibold 
//             hover:bg-transparent hover:text-black border border-[#2060b6] transition duration-300 rounded-lg"
//           >
//             Update Awarded Scholars Data
//           </Link>

//           {/* New Links for People Data */}
//           <Link
//             href="/createpeople"
//             className="py-3 px-6 bg-[#2060b6] text-white text-center font-semibold 
//             hover:bg-transparent hover:text-black border border-[#2060b6] transition duration-300 rounded-lg"
//           >
//             Create People Data
//           </Link>

          // <Link
          //   href="/managepeople"
          //   className="py-3 px-6 bg-[#2060b6] text-white text-center font-semibold 
          //   hover:bg-transparent hover:text-black border border-[#2060b6] transition duration-300 rounded-lg"
          // >
          //   Manage People Data
          // </Link>
//         </div>
//       </div>

//       {/* Logout Button at the Bottom */}
//       <div className="p-6 flex justify-center">   
//         <div className="p-3">  
//           <button
//             onClick={handleLogout}
//             className="w-full max-w-xs px-6 py-4 bg-red-500 text-white font-semibold rounded-lg 
//             hover:bg-red-600 transition duration-300"
//             disabled={loading}
//           >
//             {loading ? "Logging out..." : "Logout"}
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }
"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import Navbar from "@/app/components/navbar";
import Link from "next/link";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Dashboard() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const handleLogout = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/logout", { method: "POST" });

      if (res.ok) {
        toast.success("Logged out successfully!");

        // Redirect after a short delay
        setTimeout(() => router.push("/login"), 2000);
      } else {
        toast.error("Logout failed. Please try again.");
      }
    } catch (error) {
      toast.error("An error occurred during logout.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      {/* Navbar */}
      <Navbar />

      {/* Toast Notification Container */}
      <ToastContainer position="top-right" autoClose={3000} closeOnClick />

      {/* Main Content */}
      <div className="pt-[140px] px-6 sm:px-12 flex flex-col items-center flex-grow">
        <h1 className="text-4xl font-semibold text-[#2060b6] mb-6 text-center">Dashboard</h1>

        {/* Informational Text */}
        <p className="text-lg text-gray-700 max-w-3xl mb-8 text-center">
          From this page, you can access sections to <strong>create a new ID for authentication</strong> 
          and also <strong>update data</strong> by selecting the specific data component you need.
        </p>

        {/* Buttons Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl w-full justify-center">
          <Link
            href="/signup"
            className="py-3 px-6 bg-[#2060b6] text-white text-center font-semibold 
            hover:bg-transparent hover:text-black border border-[#2060b6] transition duration-300 rounded-lg"
          >
            Create New User
          </Link>

          <Link
            href="/addactivities"
            className="py-3 px-6 bg-[#2060b6] text-white text-center font-semibold 
            hover:bg-transparent hover:text-black border border-[#2060b6] transition duration-300 rounded-lg"
          >
            Add Activities
          </Link>

          <Link
            href="/updateactivities"
            className="py-3 px-6 bg-[#2060b6] text-white text-center font-semibold 
            hover:bg-transparent hover:text-black border border-[#2060b6] transition duration-300 rounded-lg"
          >
            Update Activities
          </Link>

          <Link
            href="/scholars-form/create"
            className="py-3 px-6 bg-[#2060b6] text-white text-center font-semibold 
            hover:bg-transparent hover:text-black border border-[#2060b6] transition duration-300 rounded-lg"
          >
            Add Scholars Data
          </Link>

          <Link
            href="/scholars-form/manage/ongoing"
            className="py-3 px-6 bg-[#2060b6] text-white text-center font-semibold 
            hover:bg-transparent hover:text-black border border-[#2060b6] transition duration-300 rounded-lg"
          >
            Update Ongoing Scholars Data
          </Link>

          <Link
            href="/scholars-form/manage/awarded"
            className="py-3 px-6 bg-[#2060b6] text-white text-center font-semibold 
            hover:bg-transparent hover:text-black border border-[#2060b6] transition duration-300 rounded-lg"
          >
            Update Awarded Scholars Data
          </Link>

          <Link
            href="/createpeople"
            className="py-3 px-6 bg-[#2060b6] text-white text-center font-semibold 
            hover:bg-transparent hover:text-black border border-[#2060b6] transition duration-300 rounded-lg"
          >
            Create People Data
          </Link>

          <Link
            href="/managepeople"
            className="py-3 px-6 bg-[#2060b6] text-white text-center font-semibold 
            hover:bg-transparent hover:text-black border border-[#2060b6] transition duration-300 rounded-lg"
          >
            Manage People Data
          </Link>

          {/* Newly Added Buttons */}
          <Link
            href="/createcertifications"
            className="py-3 px-6 bg-[#2060b6] text-white text-center font-semibold 
            hover:bg-transparent hover:text-black border border-[#2060b6] transition duration-300 rounded-lg"
          >
            Create Certification Data
          </Link>

          <Link
            href="/managecertifications"
            className="py-3 px-6 bg-[#2060b6] text-white text-center font-semibold 
            hover:bg-transparent hover:text-black border border-[#2060b6] transition duration-300 rounded-lg"
          >
            Manage Certifications Data
          </Link>

          <Link
            href="/createpublications"
            className="py-3 px-6 bg-[#2060b6] text-white text-center font-semibold 
            hover:bg-transparent hover:text-black border border-[#2060b6] transition duration-300 rounded-lg"
          >
            Create Publications Data
          </Link>

          <Link
            href="/managepublications"
            className="py-3 px-6 bg-[#2060b6] text-white text-center font-semibold 
            hover:bg-transparent hover:text-black border border-[#2060b6] transition duration-300 rounded-lg"
          >
            Manage Publications Data
          </Link>
        </div>
      </div>

      {/* Logout Button at the Bottom */}
      <div className="p-6 flex justify-center">   
        <div className="p-3">  
          <button
            onClick={handleLogout}
            className="w-full max-w-xs px-6 py-4 bg-red-500 text-white font-semibold rounded-lg 
            hover:bg-red-600 transition duration-300"
            disabled={loading}
          >
            {loading ? "Logging out..." : "Logout"}
          </button>
        </div>
      </div>
    </div>
  );
}
