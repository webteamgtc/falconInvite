"use client";

import Image from "next/image";
import NewFormDesign from "./NewForm";
import TicketsInfoCards from "./TicketsInfoCards";

export default function TicketsHeader() {
  return (
    <header className=" min-h-[420px] md:min-h-[520px] overflow-hidden">

      <div className="container mx-auto relative z-10 flex flex-col items-center justify-center h-full pt-10 md:pt-14">
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

          <p className="mt-2 md:mt-2 text-base md:text-[18px] text-[#F5F5F5] font-normal leading-relaxed">
            Apply for press access and official media coverage opportunities with GTCFX.
          </p>
      </div>
      {/* Blurred background - stage/microphone feel */}
    

      <div className="relative container mx-auto z-10  grid grid-cols-1 md:grid-cols-3 pt-10 text-center">
        <div className="text-left md:col-span-2">
     
          <TicketsInfoCards/>
        </div>
        <NewFormDesign />
      </div>
    </header>
  );
}
