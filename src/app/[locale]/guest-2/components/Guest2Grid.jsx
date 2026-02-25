"use client";

import Guest2Card from "./Guest2Card";

const GUESTS = [
  { name: "Oliver Schun Ph.D.", title: "Director, Management, Training & Development", image: "/guest.svg" },
  { name: "Sarah Chen Ph.D.", title: "Director, Management, Research & Development", image: "/guest.svg" },
  { name: "James Wilson", title: "Chief Strategy Officer", image: "/guest.svg" },
  { name: "Emma Rodriguez", title: "Director, Operations", image: "/guest.svg" },
  { name: "Michael Zhang", title: "Head of Innovation", image: "/guest.svg" },
  { name: "Lisa Park", title: "Director, Client Relations", image: "/guest.svg" },
  { name: "David Kim", title: "Senior Advisor", image: "/guest.svg" },
  { name: "Anna Schmidt", title: "Director, Communications", image: "/guest.svg" },
  { name: "Robert Brown", title: "Chief Financial Officer", image: "/guest.svg" },
];

export default function Guest2Grid() {
  const mid = Math.ceil(GUESTS.length / 2);

  return (
    <section className="relative py-12 md:py-20 px-4">
      {/* Subtle sparkle / golden ambient */}
      <div
        className="absolute inset-0 pointer-events-none opacity-20"
        style={{
          backgroundImage: `radial-gradient(circle at 20% 30%, rgba(184,135,85,0.15) 0%, transparent 25%),
            radial-gradient(circle at 80% 70%, rgba(184,135,85,0.1) 0%, transparent 25%)`,
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* First row of cards */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-12">
          {GUESTS.slice(0, mid).map((guest, i) => (
            <Guest2Card key={i} index={i} name={guest.name} title={guest.title} image={guest.image} />
          ))}
        </div>

        {/* Mid-section golden X separator */}
        <div className="flex justify-center my-12 md:my-16">
          <svg
            viewBox="0 0 120 120"
            className="w-24 h-24 md:w-32 md:h-32 text-[#B48755] opacity-80"
            fill="none"
            stroke="url(#guest2-x-sep)"
            strokeWidth="2.5"
            strokeLinecap="round"
            aria-hidden
          >
            <defs>
              <linearGradient id="guest2-x-sep" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#c9a962" />
                <stop offset="50%" stopColor="#956E42" />
                <stop offset="100%" stopColor="#E9DDCF" />
              </linearGradient>
            </defs>
            <path d="M25 25 L95 95 M95 25 L25 95" />
          </svg>
        </div>

        {/* Second row of cards */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-12">
          {GUESTS.slice(mid).map((guest, i) => (
            <Guest2Card key={i} index={mid + i} name={guest.name} title={guest.title} image={guest.image} />
          ))}
        </div>
      </div>
    </section>
  );
}
