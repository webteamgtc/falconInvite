"use client";

export default function MediaHeader() {
  return (
    <header className="relative text-center pt-20 md:pt-28 pb-10 md:pb-14">
      {/* Subtle top gradient / vignette */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#0d1520] via-black/80 to-transparent" />

      <div className="relative z-10">
        <h1
          className="font-serif text-[48px] md:text-[56px] lg:text-[60px] font-semibold tracking-wide"
          style={{
            background: "linear-gradient(180deg, #956E42 0%, #E9DDCF 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          Media Registration
        </h1>

        {/* Thin line below title - 2px high, ~200px, fade to sides */}
        <div className="flex justify-center mt-4 md:mt-5">
          <div
            className="h-[2px] w-[200px] rounded-full"
            style={{
              background: "linear-gradient(90deg, transparent 0%, rgba(225,225,225,0.5) 20%, rgba(225,225,225,0.7) 50%, rgba(225,225,225,0.5) 80%, transparent 100%)",
            }}
          />
        </div>

        <p className="mt-4 md:mt-5 text-base md:text-[18px] text-[#E0E0E0] font-normal max-w-[600px] mx-auto px-4">
          Apply for press access and official media coverage opportunities with GTCFX.
        </p>
      </div>
    </header>
  );
}
