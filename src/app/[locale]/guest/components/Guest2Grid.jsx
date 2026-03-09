"use client";

import Guest2Card from "./Guest2Card";

const GUESTS = [
  { name: "Oliver Schun Ph.D.", title: "Chief Analyst", image: "/jameel.webp" },

  { name: "James Wilson", title: "Chief Commercial Officer", image: "/mik.webp" },
  // { name: "Emma Rodriguez", title: "Director, Operations", image: "/guest-person.png" },
  // { name: "Michael Zhang", title: "Head of Innovation", image: "/guest-person.png" },
  // { name: "Lisa Park", title: "Director, Client Relations", image: "/guest-person.png" },
  // { name: "David Kim", title: "Senior Advisor", image: "/guest-person.png" },
  // { name: "Anna Schmidt", title: "Director, Communications", image: "/guest-person.png" },
  // { name: "Robert Brown", title: "Chief Financial Officer", image: "/guest-person.png" },
];

export default function Guest2Grid() {
  const mid = Math.ceil(GUESTS.length / 2);

  return (
    <section className="relative py-6 md:py-20 px-4">


      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-12">
          {GUESTS.map((guest, i) => (
            <Guest2Card key={i} index={i} name={guest.name} title={guest.title} image={guest.image} />
          ))}
        </div>
      </div>
    </section>
  );
}
