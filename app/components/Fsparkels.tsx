// "use client";
// import React from "react";
// import { SparklesCore } from "@/components/ui/sparkles";

// export function SparklesPreview() {
//   return (
//     <div className="h-[40rem] w-full bg-black flex flex-col items-center justify-center overflow-hidden rounded-md">
//       <h1 className="md:text-7xl text-3xl lg:text-9xl font-bold text-center text-white relative z-20">
//         Objectives
//       </h1>
//       <div className="w-[40rem] h-40 relative">
//         {/* Gradients */}
//         <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
//         <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
//         <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
//         <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />

//         {/* Core component */}
//         <SparklesCore
//           background="transparent"
//           minSize={0.4}
//           maxSize={1}
//           particleDensity={1200}
//           className="w-full h-full"
//           particleColor="#FFFFFF"
//         />

//         {/* Radial Gradient to prevent sharp edges */}
//         <div className="absolute inset-0 w-full h-full bg-black [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
//       </div>
//     </div>
//   );
// }


// "use client";
// import React from "react";
// import { SparklesCore } from "@/components/ui/sparkles";

// export function SparklesPreview() {
//   return (
//     <div className="relative w-fit">
//       {/* Sparkles Effect */}
//       <div className="absolute inset-0 w-full h-full">
//         <SparklesCore
//           background="transparent"
//           minSize={0.4}
//           maxSize={1}
//           particleDensity={500}  // Reduced density for a subtle effect
//           className="w-full h-full"
//           particleColor="#2060b6"
//         />
//       </div>

//       {/* Heading */}
//       <h1 className="relative text-2xl sm:text-3xl  text-[#2060b6]">
//         Objectives
//       </h1>
//     </div>
//   );
// }



// "use client";
// import React from "react";
// import { SparklesCore } from "@/components/ui/sparkles";

// export function SparklesPreview() {
//   return (
//     <div className="relative w-fit flex flex-col items-center">
//       {/* Heading with Underline */}
//       <h1 className="relative text-2xl sm:text-3xl  text-[#2060b6] pb-2 border-b-2 border-[#2060b6]">
//         Objectives
//       </h1>

//       {/* Sparkles Effect Below */}
//       <div className="relative w-full h-8 mt-1">
//         <SparklesCore
//           background="transparent"
//           minSize={0.4}
//           maxSize={1}
//           particleDensity={400}  // Reduced density for a subtle effect
//           className="w-full h-full"
//           particleColor="#2060b6"
//         />
//       </div>
//     </div>
//   );
// }


"use client";
import React from "react";
import { SparklesCore } from "@/components/ui/sparkles";

export function SparklesPreview() {
  return (
    <div className="relative w-fit flex flex-col items-center">
      {/* Heading */}
      <h1 className="relative text-3xl text-center md:text-left sm:text-4xl text-[#2060b6] pb-2">
        Objectives
      </h1>

      {/* Gradient Underline */}
      <div className="w-full h-[2px] bg-gradient-to-r from-white via-[#2060b6] to-white"></div>

      {/* Sparkles Effect Below */}
      <div className="relative w-full h-8 mt-1">
        <SparklesCore
          background="transparent"
          minSize={0.4}
          maxSize={1}
          particleDensity={400} // Subtle effect
          className="w-full h-full"
          particleColor="#2060b6"
        />
      </div>
    </div>
  );
}
