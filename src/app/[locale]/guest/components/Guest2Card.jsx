"use client";

export default function Guest2Card({ name, title, image = "/guest.svg", index = 0 }) {
  const gradientId = `guest2-x-${index}`;
  return (
    <div className="flex flex-col items-center text-center">
      <div className="relative w-[140px] h-[140px] md:w-[200px] md:h-[200px] lg:w-[250px] lg:h-[250px] flex-shrink-0">

        <img
          src={image}
          alt=""
          className="w-full h-full object-contain"
        />
      </div>
      {/* <h3 className="mt-6 text-white font-semibold text-base md:text-lg lg:text-xl font-sans"

      style={{
        background: "linear-gradient(180deg, #956E42 0%, #E9DDCF 100%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",
        }}
      >
      
        {name}
      </h3> */}
      <p className="text-white mt-5 text-xs md:text-sm lg:text-base font-sans mt-1 max-w-sm">
        {title}
      </p>
    </div>
  );
}
