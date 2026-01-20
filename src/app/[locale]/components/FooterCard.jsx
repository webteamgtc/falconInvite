"use client";

import Image from "next/image";

export default function GtcFooterStrip() {
  return (
    <section className="w-full bg-[#050816] md:pt-10">
      {/* strip height like screenshot */}
      <div className="relative mx-auto max-w-2xl lg:max-w-4xl xl:max-w-5xl 2xl:max-w-6xl px-4 md:px-6 lg:px-8 xl:px-10  py-8 md:py-14  z-10">
        <div className="text-center">
          {/* logo */}
          <div className="mx-auto mb-6 flex justify-center">
            {/* replace with your real logo */}
            <div className="relative ">
              <img
                className="w-[80px] h-[52px] md:w-[100px] md:h-[50px] lg:w-[140px] "
                src={"/logo.svg"}
                alt="GTCFX Logo"
              />
            </div>
          </div>

          {/* headline */}
          <h2 className="font-serif md:text-[34px] text-[22px] font-semibold leading-[1.05] text-white">
            Trade with Confidence. Anywhere.
          </h2>

          {/* sub line */}
          <p className="mt-5 font-serif md:text-[20px] text-[18px] leading-[1.2] text-white">
            @GTCFX, Regulated Multi-Asset Trading Platformm
          </p>

          {/* rights */}
          <p className="mt-3 font-serif md:text-[18px] text-sm leading-[1.2] text-white">
            All rights reserved.
          </p>
        </div>
      </div>
    </section>
  );
}
