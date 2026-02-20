"use client";

import NewFormDesign from "./NewForm";
import TicketsInfoCards from "./TicketsInfoCards";
import IbPerformanceForm from "./IbPerformanceForm";
import IbPerformanceForm2 from "./IbPerformanceForm2";

export default function TicketsHeader() {
  return (
    <header className=" min-h-[420px] md:min-h-[520px] overflow-hidden">
      <div className="relative text-left  container mx-auto z-10 grid grid-cols-1 md:grid-cols-2 gap-10 pt-20 md:pt-28 pb-12 md:pb-16 text-center px-4">
        <div className="text-left ">
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
          <TicketsInfoCards />
          {/* <div className="mt-8">
            <IbPerformanceForm />
          </div>
          <div className="mt-10">
            <p className="text-sm font-medium text-[#E9DDCF]/90 mb-3">IB Qualification Portal (step-by-step)</p>
            <IbPerformanceForm2 />
          </div> */}
        </div>
        <IbPerformanceForm2 />
        </div>
    </header>
  );
}
