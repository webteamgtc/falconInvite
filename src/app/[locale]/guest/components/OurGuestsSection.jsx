"use client";

export default function OurGuestsSection() {
  return (
    <>
      <section className=" py-2 md:py-3">
        <div className="relative z-10 container mx-auto text-center">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-[28px] md:text-[56px] lg:text-[72px] font-normal leading-[1.15] tracking-[-0.02em]"
              style={{
                background: "linear-gradient(180deg, #956E42 0%, #E9DDCF 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Our Guests
            </h2>
            <p className="mx-auto  italic text-[18px] lg:text-[32px] font-normal leading-[1.55] text-white">
              A Day of Strategy, Recognition & Celebration
            </p>
            
            <p className="mx-auto mt-8 italic text-[18px] lg:text-[32px] font-normal leading-[1.55]"
              style={{
                background: "linear-gradient(180deg, #956E42 0%, #E9DDCF 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              December 2026
            </p>
            <p className="mx-auto mt-2 text-[16px] lg:text-[26px] font-normal leading-[1.15]"
              style={{
                background: "linear-gradient(180deg, #956E42 0%, #E9DDCF 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              A full day dedicated to strategy, recognition, and celebration.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
