"use client";

import SpeakerCard from "./SpeakerCard";

export default function EventSection({ data }) {
  const { title, subtitle, date, description, sectionHeading, items, closingText } = data;

  return (
    <section className="py-14 md:py-20 relative px-4 md:px-6">
            <div
                    className="absolute inset-0 bg-[url('/bg-new.png')] bg-cover bg-center bg-no-repeat z-0"
                />
      <div className="max-w-4xl mx-auto relative z-10">
        {/* Main title */}
        <h1
          className="font-serif text-3xl md:text-4xl lg:text-6xl font-bold text-center tracking-wide uppercase"
          style={{
            background: "linear-gradient(180deg, #956E42 0%, #E9DDCF 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          {title}
        </h1>

        {/* Subtitle */}
        <p
          className="font-serif text-lg md:text-3xl italic text-center mt-3"
          style={{ color: "#fff" }}
        >
          {subtitle}
        </p>

        {/* Date with decorative lines */}
        <div className="flex items-center justify-center gap-4 md:gap-6 mt-8 md:mt-10">
          <div className="h-px flex-1 max-w-[80px] md:max-w-[120px] bg-[#E9DDCF]/40" />
          <div className="flex items-center gap-2">
            <svg className="w-4 h-4 md:w-5 md:h-5 text-[#E9DDCF]/70" fill="currentColor" viewBox="0 0 20 20" aria-hidden>
              <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
            </svg>
            <span className="font-poppins text-xl italic md:text-xl font-medium" 
            style={{
              background: "linear-gradient(359deg, #956E42 -134.13%, #E9DDCF 99.41%)",
                backgroundClip: "text",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
            >
              {date}
            </span>
          </div>
          <div className="h-px flex-1 max-w-[80px] md:max-w-[120px] bg-[#E9DDCF]/40" />
        </div>

        <p className="text-center text-xl md:text-xl italic mt-4 max-w-xl mx-auto"
        style={{
          background: "linear-gradient(0deg, #956E42 -84.42%, #E9DDCF 100%)",
          backgroundClip: "text",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
        >
          {description}
        </p>

        {/* Section heading */}
        <p
          className="font-serif text-xl md:text-4xl italic text-center mt-12 md:mt-14"
          style={{ 
            background: "linear-gradient(0deg, #956E42 -84.42%, #E9DDCF 100%)",
            backgroundClip: "text",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          {sectionHeading}
        </p>

        {/* Timeline with vertical line and cards */}
        <div className="mt-10 md:mt-14 relative">
          {/* Vertical timeline line - stops at stars, runs beside them */}
          <div
            className="absolute left-0 top-0 bottom-0 w-px"
            style={{ background: "linear-gradient(180deg, transparent, rgba(233,221,207,0.5) 10%, rgba(233,221,207,0.6) 50%, rgba(233,221,207,0.5) 90%, transparent)" }}
          />

          {items.map((item, index) => (
            <div key={item.title} className="relative pl-6 md:pl-8 pb-10 md:pb-14 last:pb-0">
              {/* Star marker - touching the line, no gap */}
              <div
                className="absolute left-[-24px] top-1 w-12 h-12"
                style={{ filter: "drop-shadow(0 0 6px rgba(233,221,207,0.6))" }}
              >
                <img src="/star.svg" alt="" className="w-full h-full object-contain" />
              </div>

              {/* Horizontal dash to title */}
              <div className="flex items-center gap-2 mb-4">
                <span
                  className="text-sm md:text-xl italic font-medium"
                  style={{ color: "#E9DDCF" }}
                >
                  {item.title}
                </span>
              </div>

              {/* Speaker card - indented below title */}
              <div className="">
                <SpeakerCard
                  name={item.speaker.name}
                  role={item.speaker.role}
                  image={item.speaker.image}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Closing text */}
        <p className="text-center text-sm md:text-xl text-white mt-12 md:mt-14">
          {closingText}
        </p>
      </div>
    </section>
  );
}
