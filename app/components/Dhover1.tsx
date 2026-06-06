// "use client";

// import { useRef, useState } from "react";
// import Image from "next/image";
// import { AnimatePresence, motion } from "motion/react";
// import { cn } from "@/lib/utils";
// import { DirectionAwareHover } from "@/components/ui/direction-aware-hover";

// export function DirectionAwareHoverDemo() {
//   const imageUrl =
//     "https://images.unsplash.com/photo-1663765970236-f2acfde22237?q=80&w=3542&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
//   return (
//     <div className="h-[40rem] relative  flex items-center justify-center">
//       <DirectionAwareHover imageUrl={imageUrl}>
//         <p className="font-bold text-xl">In the mountains</p>
//         <p className="font-normal text-sm">$1299 / night</p>
//       </DirectionAwareHover>
//     </div>
//   );
// }


"use client";

import { DirectionAwareHover } from "@/components/ui/direction-aware-hover";

export function DirectionAwareHoverDemo() {
  const imageUrl =
    "https://images.unsplash.com/photo-1663765970236-f2acfde22237?q=80&w=3542&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

  return (
    <div className="relative flex items-center justify-center min-h-[300px] sm:min-h-[400px] md:h-[30rem] lg:h-[40rem] p-4">
      <div className="w-full sm:w-3/4 md:w-1/2 lg:w-1/3">
        <DirectionAwareHover imageUrl={imageUrl}>
          <p className="font-bold text-lg sm:text-xl">In the mountains</p>
          <p className="font-normal text-xs sm:text-sm">$1299 / night</p>
        </DirectionAwareHover>
      </div>
    </div>
  );
}
