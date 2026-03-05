"use client";

import React from "react";

const GOLD_GRADIENT = "linear-gradient(180deg, #956E42 0%, #E9DDCF 100%)";

/** Replace img with your own image paths, or keep placeholder URLs for now */
const ITEMS = [
    { label: "Round-trip flight tickets", img: "/trip.svg", alt: "Flight" },
    { label: "Luxury hotel accommodation", img: "/hotel-1.svg", alt: "Hotel" },
    { label: "Visa support", img: "/passport1.svg", alt: "Visa" },
    { label: "Airport transfer", img: "/airport1.svg", alt: "Transfer" },
    { label: "VIP gala dinner access", img: "/vip1.svg", alt: "Gala" },
];

export default function QualificationSection() {
    return (
        <section className="w-full">
            <div className="mx-auto container">
                {/* Title */}
                <div className="text-center mb-8 md:mb-16">
                    <h2
                        className="text-[24px] md:text-[32px] font-semibold leading-tight tracking-tight"
                        style={{
                            background: GOLD_GRADIENT,
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent",
                            backgroundClip: "text",
                        }}
                    >
                        What You Will Receive After Qualification
                    </h2>
                </div>

                {/* Five items - horizontal row */}
                <div className="grid grid-cols-2 md:grid-cols-5 lg:grid-cols-5 gap-6 md:gap-8 lg:gap-10">
                    {ITEMS.map((item) => (
                        <div
                            key={item.label}
                            className="flex flex-col items-center text-center last:col-span-2 md:last:col-span-1"
                        >
                            {/* Dark base + icon */}
                            <div
                                className="w-full rounded-xl overflow-hidden flex flex-col items-center p-1 justify-end h-[140px] md:h-[260px]"
                                style={{
                                    border: "1px solid #7C6B4C",
                                }}
                            >
                                <img
                                    src={item.img}
                                    alt={item.alt}
                                    className="h-full w-full object-contain object-center"
                                    onError={(e) => {
                                        e.target.style.display = "none";
                                        e.target.nextSibling?.classList?.remove("hidden");
                                    }}
                                />

                            </div>
                            {/* Label */}
                            <p className="mt-4 text-[13px] md:text-[14px] font-semibold leading-snug text-white">
                                {item.label}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
