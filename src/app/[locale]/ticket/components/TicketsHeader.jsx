"use client";

import NewFormDesign from "./NewForm";
import TicketsInfoCards from "./TicketsInfoCards";
import IbPerformanceForm from "./IbPerformanceForm";
import IbPerformanceForm2 from "./IbPerformanceForm2";
import Image from "next/image";

export default function TicketsHeader() {
  return (
    <header className=" min-h-[300px] flex relative md:min-h-[550px] overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="/ticket-new.webp"
          alt=""
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a12]/70 via-[#0a0a12]/50 to-[#0a0a12]" />
      </div>
      <div className="relative container flex flex-col items-center justify-center mx-auto ">
        <img src="/gtcfx-logo.webp" alt="" className=" inset-0 object-cover object-center w-[80%] md:w-[50%]" />
        <div className="text-center">
          <h1
            className="font-serif font-light text-[34px] mt-4 md:text-[54px] leading-[1.2] lg:text-[60px] tracking-wide"
            style={{
              background: "linear-gradient(180deg, #956E42 0%, #E9DDCF 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Golden Falcon
          </h1>
        </div>
        <div className=" flex items-center justify-center gap-1">
          <div className="text-center">
            <h1
              className="font-serif font-light text-[34px] md:text-[54px] leading-[1.2] lg:text-[60px] tracking-wide"
              style={{
                background: "linear-gradient(180deg, #956E42 0%, #E9DDCF 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Awards
            </h1>
          </div>
          

          <div>
            <img src="/traphy-3.webp" alt="" className="md:h-[110px] h-[60px]" />
          </div>
        </div>

          <a href="/privacy-policy" className="flex flex-col pt-4 underline italic text-white">Terms & Condtions Apply</a>


      </div>
      {/* <div className="relative text-left  container mx-auto z-10 grid grid-cols-1 md:grid-cols-2 gap-10  pb-12 md:pb-16 px-4">
        <div className="text-left ">
          <TicketsInfoCards />
        </div>
        <NewFormDesign />
      </div> */}
    </header>
  );
}
