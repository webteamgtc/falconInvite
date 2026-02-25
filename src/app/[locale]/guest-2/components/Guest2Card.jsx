"use client";

export default function Guest2Card({ name, title, image = "/guest.svg", index = 0 }) {
  const gradientId = `guest2-x-${index}`;
  return (
    <div className="flex flex-col items-center text-center">
      <div className="relative w-[140px] h-[140px] md:w-[180px] md:h-[180px] flex-shrink-0">
        {/* Golden X behind */}
        <div
          className="absolute inset-0 flex items-center justify-center pointer-events-none"
          aria-hidden
        >
          <svg
            viewBox="0 0 100 100"
            className="w-[95%] h-[95%] text-[#B48755] opacity-90"
            fill="none"
            stroke={`url(#${gradientId})`}
            strokeWidth="3"
            strokeLinecap="round"
          >
            <defs>
              <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#c9a962" />
                <stop offset="50%" stopColor="#956E42" />
                <stop offset="100%" stopColor="#E9DDCF" />
              </linearGradient>
            </defs>
            <path d="M20 20 L80 80 M80 20 L20 80" />
          </svg>
        </div>
        {/* Circular profile image */}
        <div className="absolute inset-0 flex items-center justify-center p-[18%]">
          <div className="w-full h-full rounded-full overflow-hidden border-2 border-[#B48755]/60 bg-[#1a1a2e] ring-2 ring-black/30">
            <img
              src={image}
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        {/* GUEST badge */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 z-10">
          <span className="inline-block px-3 py-0.5 text-[10px] md:text-xs font-bold tracking-widest text-white bg-white/20 backdrop-blur-sm rounded border border-white/30">
            GUEST
          </span>
        </div>
      </div>
      <h3 className="mt-6 text-white font-bold text-base md:text-lg font-sans">
        {name}
      </h3>
      <p className="text-white/80 text-sm md:text-base font-sans mt-1 max-w-[200px]">
        {title}
      </p>
    </div>
  );
}
