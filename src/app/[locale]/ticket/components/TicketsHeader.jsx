"use client";

import Image from "next/image";
import NewFormDesign from "./NewForm";

export default function TicketsHeader() {
  return (
    <header className=" min-h-[420px] md:min-h-[520px] overflow-hidden">
      {/* Blurred background - stage/microphone feel */}
    

      <div className="relative container mx-auto z-10 items-center grid grid-cols-1 md:grid-cols-3 gap-10 pt-20 md:pt-28 pb-12 md:pb-16 text-center px-4">
        <div className="text-left md:col-span-2">
          <h1
            className="font-serif text-[42px] md:text-[48px] lg:text-[56px] font-semibold tracking-wide"
            style={{
              background: "linear-gradient(180deg, #F0E68C 0%, #E9DDCF 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Tickets & Access
          </h1>

          <p className="mt-5 md:mt-6 text-base md:text-[18px] text-[#F5F5F5] font-normal leading-relaxed">
            Apply for press access and official media coverage opportunities with GTCFX.
          </p>
        </div>
        <NewFormDesign />
      </div>
    </header>
  );
}
