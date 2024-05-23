"use client";
import { TypewriterEffectSmooth } from "./ui/Typewriter-effect";
export default function TypewriterEffectSmoothDemo() {
  const words = [
    {
      text: "Get",
    },
    {
      text: "realtime",
    },
    {
      text: "updates",
    },
    {
      text: "with",
    },
    {
      text: "Student Forum.",
      className: "text-yellow-500 dark:text-yellow-500",
    },
  ];
  return (
    <div className="flex flex-col items-center justify-center h-[40rem] -mt-64 ">
      <p className="text-neutral-600 dark:text-neutral-200 text-xs sm:text-base  ">
        Want to stay informed about any university
      </p>
      <TypewriterEffectSmooth words={words} />
      <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4">
        
      </div>
    </div>
  );
}
