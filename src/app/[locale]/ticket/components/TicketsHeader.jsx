"use client";

import NewFormDesign from "./NewForm";
import TicketsInfoCards from "./TicketsInfoCards";
import IbPerformanceForm from "./IbPerformanceForm";
import IbPerformanceForm2 from "./IbPerformanceForm2";

export default function TicketsHeader() {
  return (
    <header className=" min-h-[420px] md:min-h-[520px] overflow-hidden">
      <div className="relative container flex flex-col items-center justify-center mx-auto  py-14">
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
      <div className="relative text-left  container mx-auto z-10 grid grid-cols-1 md:grid-cols-2 gap-10  pb-12 md:pb-16 px-4">
        <div className="text-left ">

          <TicketsInfoCards />
        </div>
        <IbPerformanceForm2 />
      </div>
    </header>
  );
}
