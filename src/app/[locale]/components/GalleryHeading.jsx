"use client";

export default function GalleryHeading() {
  return (
    <div className="flex items-center justify-left gap-4 mb-8 md:mb-12">
      
      <h1 
        className="font-serif text-3xl md:text-5xl lg:text-6xl font-semibold text-[#E9DDCF] tracking-wide"
        style={{
          background: "linear-gradient(180deg, #956E42 0%, #E9DDCF 100%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text"
        }}
      >
        ABOUT THE TOUR
      </h1>
      
      {/* Horizontal line */}
      <div className="h-[1px] w-16 md:w-36 bg-[#D9D9D9]" />
    </div>
  );
}
