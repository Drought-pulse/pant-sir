// "use client";
// import React from "react";
// import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";

// export function HoverBorderGradientDemo() {
//   return (
//     <div className="m-40 flex justify-center text-center">
//       <HoverBorderGradient
//         containerClassName="rounded-full"
//         as="button"
//         className="dark:bg-black bg-white text-black dark:text-white flex items-center space-x-2"
//       >
//         <AceternityLogo />
//         <span>Aceternity UI</span>
//       </HoverBorderGradient>
//     </div>
//   );
// }

// const AceternityLogo = () => {
//   return (
//     <svg
//       width="66"
//       height="65"
//       viewBox="0 0 66 65"
//       fill="none"
//       xmlns="http://www.w3.org/2000/svg"
//       className="h-3 w-3 text-black dark:text-white"
//     >
//       <path
//         d="M8 8.05571C8 8.05571 54.9009 18.1782 57.8687 30.062C60.8365 41.9458 9.05432 57.4696 9.05432 57.4696"
//         stroke="currentColor"
//         strokeWidth="15"
//         strokeMiterlimit="3.86874"
//         strokeLinecap="round"
//       />
//     </svg>
//   );
// };



// "use client";
// import React from "react";
// import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";

// export function DynamicButton({ name, href }) {
//   return (
//     <a href={href} target="_blank" rel="noopener noreferrer">
//       <HoverBorderGradient
//         containerClassName="rounded-full"
//         as="button"
//         className="dark:bg-black bg-white text-black dark:text-white flex items-center space-x-2 px-6 py-3 font-semibold transition duration-300"
//       >
       
//         <span>{name}</span>
//       </HoverBorderGradient>
//     </a>
//   );
// }

// const AceternityLogo = () => {
//   return (
//     <svg
//       width="24"
//       height="24"
//       viewBox="0 0 66 65"
//       fill="none"
//       xmlns="http://www.w3.org/2000/svg"
//       className="h-5 w-5 text-black dark:text-white"
//     >
//       <path
//         d="M8 8.05571C8 8.05571 54.9009 18.1782 57.8687 30.062C60.8365 41.9458 9.05432 57.4696 9.05432 57.4696"
//         stroke="currentColor"
//         strokeWidth="10"
//         strokeLinecap="round"
//       />
//     </svg>
//   );
// };




"use client";
import React from "react";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";

interface DynamicButtonProps {
    name: string;
    href: string;
  }
export function DynamicButton({ name, href }: DynamicButtonProps) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer">
      <HoverBorderGradient
        containerClassName="rounded-full"
        as="button"
        className="w-full md:w-auto py-3 px-6 bg-[#2060b6] text-white text-center font-semibold 
                   hover:bg-white hover:text-black 
                   transition duration-300 flex items-center space-x-2"
      >
        <span>{name}</span>
      </HoverBorderGradient>
    </a>
  );
}
