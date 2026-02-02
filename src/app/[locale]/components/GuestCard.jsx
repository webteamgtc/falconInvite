"use client";

import Image from "next/image";

const GUESTS = Array.from({ length: 12 }).map((_, i) => ({
    id: i + 1,
    name: "Hong Li",
    role1: "President",
    role2: "Shanghai Grand Finance Group",
    // replace with real headshots
    img: "/guest.svg",
}));

function GuestCard({ g, variant = "a" }) {
    const isDot = variant === "z";
    const isCorner = variant === "b";
    const isGLogo = variant === "c";

    return (
        <div className="relative overflow-hidden">
            {/* dotted pattern (like top row - first row) */}
            {isDot && (
                <>
                    {/* Left dots */}
                    <div className="pointer-events-none absolute left-[8px] md:left-2 lg:left-3 top-[8px] md:top-2 lg:top-3 flex gap-[4px] opacity-45">

                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="165" viewBox="0 0 12 165" fill="none">
                            <g opacity="0.48">
                                <path d="M11.5387 158.657C11.5387 161.843 8.95566 164.426 5.76934 164.426C2.58302 164.426 0 161.843 0 158.657C0 155.471 2.58302 152.888 5.76934 152.888C8.95566 152.888 11.5387 155.471 11.5387 158.657Z" fill="white" />
                                <path d="M11.5387 100.964C11.5387 104.15 8.95566 106.733 5.76934 106.733C2.58302 106.733 0 104.15 0 100.964C0 97.7772 2.58302 95.1942 5.76934 95.1942C8.95566 95.1942 11.5387 97.7772 11.5387 100.964Z" fill="white" />
                                <path d="M11.5387 138.464C11.5387 141.651 8.95566 144.234 5.76934 144.234C2.58302 144.234 0 141.651 0 138.464C0 135.278 2.58302 132.695 5.76934 132.695C8.95566 132.695 11.5387 135.278 11.5387 138.464Z" fill="white" />
                                <path d="M11.5387 80.7708C11.5387 83.9571 8.95566 86.5401 5.76934 86.5401C2.58302 86.5401 0 83.9571 0 80.7708C0 77.5845 2.58302 75.0015 5.76934 75.0015C8.95566 75.0015 11.5387 77.5845 11.5387 80.7708Z" fill="white" />
                                <path d="M11.5387 118.272C11.5387 121.458 8.95566 124.041 5.76934 124.041C2.58302 124.041 0 121.458 0 118.272C0 115.085 2.58302 112.502 5.76934 112.502C8.95566 112.502 11.5387 115.085 11.5387 118.272Z" fill="white" />
                                <path d="M11.5387 60.5781C11.5387 63.7644 8.95566 66.3474 5.76934 66.3474C2.58302 66.3474 0 63.7644 0 60.5781C0 57.3918 2.58302 54.8088 5.76934 54.8088C8.95566 54.8088 11.5387 57.3918 11.5387 60.5781Z" fill="white" />
                                <path d="M11.5387 40.3854C11.5387 43.5717 8.95566 46.1547 5.76934 46.1547C2.58302 46.1547 0 43.5717 0 40.3854C0 37.1991 2.58302 34.6161 5.76934 34.6161C8.95566 34.6161 11.5387 37.1991 11.5387 40.3854Z" fill="white" />
                                <path d="M11.5387 23.0774C11.5387 26.2637 8.95566 28.8467 5.76934 28.8467C2.58302 28.8467 0 26.2637 0 23.0774C0 19.8911 2.58302 17.308 5.76934 17.308C8.95566 17.308 11.5387 19.8911 11.5387 23.0774Z" fill="white" />
                                <path d="M11.5387 5.76934C11.5387 8.95566 8.95566 11.5387 5.76934 11.5387C2.58302 11.5387 0 8.95566 0 5.76934C0 2.58302 2.58302 0 5.76934 0C8.95566 0 11.5387 2.58302 11.5387 5.76934Z" fill="white" />
                            </g>
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="165" viewBox="0 0 12 165" fill="none">
                            <g opacity="0.48">
                                <path d="M11.5387 158.657C11.5387 161.843 8.95566 164.426 5.76934 164.426C2.58302 164.426 0 161.843 0 158.657C0 155.471 2.58302 152.888 5.76934 152.888C8.95566 152.888 11.5387 155.471 11.5387 158.657Z" fill="white" />
                                <path d="M11.5387 100.964C11.5387 104.15 8.95566 106.733 5.76934 106.733C2.58302 106.733 0 104.15 0 100.964C0 97.7772 2.58302 95.1942 5.76934 95.1942C8.95566 95.1942 11.5387 97.7772 11.5387 100.964Z" fill="white" />
                                <path d="M11.5387 138.464C11.5387 141.651 8.95566 144.234 5.76934 144.234C2.58302 144.234 0 141.651 0 138.464C0 135.278 2.58302 132.695 5.76934 132.695C8.95566 132.695 11.5387 135.278 11.5387 138.464Z" fill="white" />
                                <path d="M11.5387 80.7708C11.5387 83.9571 8.95566 86.5401 5.76934 86.5401C2.58302 86.5401 0 83.9571 0 80.7708C0 77.5845 2.58302 75.0015 5.76934 75.0015C8.95566 75.0015 11.5387 77.5845 11.5387 80.7708Z" fill="white" />
                                <path d="M11.5387 118.272C11.5387 121.458 8.95566 124.041 5.76934 124.041C2.58302 124.041 0 121.458 0 118.272C0 115.085 2.58302 112.502 5.76934 112.502C8.95566 112.502 11.5387 115.085 11.5387 118.272Z" fill="white" />
                                <path d="M11.5387 60.5781C11.5387 63.7644 8.95566 66.3474 5.76934 66.3474C2.58302 66.3474 0 63.7644 0 60.5781C0 57.3918 2.58302 54.8088 5.76934 54.8088C8.95566 54.8088 11.5387 57.3918 11.5387 60.5781Z" fill="white" />
                                <path d="M11.5387 40.3854C11.5387 43.5717 8.95566 46.1547 5.76934 46.1547C2.58302 46.1547 0 43.5717 0 40.3854C0 37.1991 2.58302 34.6161 5.76934 34.6161C8.95566 34.6161 11.5387 37.1991 11.5387 40.3854Z" fill="white" />
                                <path d="M11.5387 23.0774C11.5387 26.2637 8.95566 28.8467 5.76934 28.8467C2.58302 28.8467 0 26.2637 0 23.0774C0 19.8911 2.58302 17.308 5.76934 17.308C8.95566 17.308 11.5387 19.8911 11.5387 23.0774Z" fill="white" />
                                <path d="M11.5387 5.76934C11.5387 8.95566 8.95566 11.5387 5.76934 11.5387C2.58302 11.5387 0 8.95566 0 5.76934C0 2.58302 2.58302 0 5.76934 0C8.95566 0 11.5387 2.58302 11.5387 5.76934Z" fill="white" />
                            </g>
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="165" viewBox="0 0 12 165" fill="none">
                            <g opacity="0.48">
                                <path d="M11.5387 158.657C11.5387 161.843 8.95566 164.426 5.76934 164.426C2.58302 164.426 0 161.843 0 158.657C0 155.471 2.58302 152.888 5.76934 152.888C8.95566 152.888 11.5387 155.471 11.5387 158.657Z" fill="white" />
                                <path d="M11.5387 100.964C11.5387 104.15 8.95566 106.733 5.76934 106.733C2.58302 106.733 0 104.15 0 100.964C0 97.7772 2.58302 95.1942 5.76934 95.1942C8.95566 95.1942 11.5387 97.7772 11.5387 100.964Z" fill="white" />
                                <path d="M11.5387 138.464C11.5387 141.651 8.95566 144.234 5.76934 144.234C2.58302 144.234 0 141.651 0 138.464C0 135.278 2.58302 132.695 5.76934 132.695C8.95566 132.695 11.5387 135.278 11.5387 138.464Z" fill="white" />
                                <path d="M11.5387 80.7708C11.5387 83.9571 8.95566 86.5401 5.76934 86.5401C2.58302 86.5401 0 83.9571 0 80.7708C0 77.5845 2.58302 75.0015 5.76934 75.0015C8.95566 75.0015 11.5387 77.5845 11.5387 80.7708Z" fill="white" />
                                <path d="M11.5387 118.272C11.5387 121.458 8.95566 124.041 5.76934 124.041C2.58302 124.041 0 121.458 0 118.272C0 115.085 2.58302 112.502 5.76934 112.502C8.95566 112.502 11.5387 115.085 11.5387 118.272Z" fill="white" />
                                <path d="M11.5387 60.5781C11.5387 63.7644 8.95566 66.3474 5.76934 66.3474C2.58302 66.3474 0 63.7644 0 60.5781C0 57.3918 2.58302 54.8088 5.76934 54.8088C8.95566 54.8088 11.5387 57.3918 11.5387 60.5781Z" fill="white" />
                                <path d="M11.5387 40.3854C11.5387 43.5717 8.95566 46.1547 5.76934 46.1547C2.58302 46.1547 0 43.5717 0 40.3854C0 37.1991 2.58302 34.6161 5.76934 34.6161C8.95566 34.6161 11.5387 37.1991 11.5387 40.3854Z" fill="white" />
                                <path d="M11.5387 23.0774C11.5387 26.2637 8.95566 28.8467 5.76934 28.8467C2.58302 28.8467 0 26.2637 0 23.0774C0 19.8911 2.58302 17.308 5.76934 17.308C8.95566 17.308 11.5387 19.8911 11.5387 23.0774Z" fill="white" />
                                <path d="M11.5387 5.76934C11.5387 8.95566 8.95566 11.5387 5.76934 11.5387C2.58302 11.5387 0 8.95566 0 5.76934C0 2.58302 2.58302 0 5.76934 0C8.95566 0 11.5387 2.58302 11.5387 5.76934Z" fill="white" />
                            </g>
                        </svg>
                    </div>
                </>
            )}

            {/* corner background (like mid rows - second row) */}
            {isCorner && (
                <div className="pointer-events-none absolute z-10 inset-0 flex items-center justify-center">
                    <img
                        src="/corner-bg.svg"
                        alt="Corner background"
                        className="w-full h-full object-contain"
                    />
                </div>
            )}

        

            {/* photo */}
            <div className=" h-[120px] relative z-20 md:h-[250px] lg:h-[300px] xl:h-[300px] w-full overflow-hidden">
                <img src={g.img} alt={g.name} className="z-10  relative w-full h-full object-cover object-top" />
                {/* dark overlay */}
                 {isGLogo && (
                <div className="pointer-events-none z-0 absolute inset-0 flex items-center justify-center">
                    <img
                        src="/G.png"
                        alt="G logo"
                        className="w-full h-full object-contain"
                    />
                </div>
            )}

            </div>

            {/* bottom content */}
            <div className="px-2 relative z-20 md:px-3 lg:px-4 pb-2 md:pb-3 lg:pb-4 pt-[6px] md:pt-2 lg:pt-3">
                {/* name plate - blue banner */}
                <div className="rounded-[6px] md:rounded-lg  px-2 md:px-3 lg:px-4 py-[6px] md:py-2 lg:py-3 text-center"
                    style={{
                        background: "var(--Linear, linear-gradient(180deg, #698AC1 0%, #020823 100%))",
                        filter: "blur(0.5px)",
                    }}
                >
                    <div className="text-[10px] md:text-base font-bold leading-[1.1] text-white">
                        {g.name}
                    </div>
                </div>

                {/* Role lines */}
                <div className="mt-[6px] md:mt-2 lg:mt-2.5 text-center text-sm md:text-base leading-[1.25] text-white">
                    {g.role1}
                </div>
                <div className="mt-[2px] md:mt-1 text-center text-sm md:text-base leading-[1.25] text-white">
                    {g.role2}
                </div>
            </div>
        </div>
    );
}

export default function DistinguishedGuestsGrid() {
    return (
        <section className="w-full relative  bg-[#050816]">
            {/* match the poster width */}
             {/* Background image using absolute positioning */}
             <div
                    className="absolute inset-0 bg-[url('/bg-new.png')] bg-cover bg-center bg-no-repeat z-0"
                />
            <div className="mx-auto w-full max-w-full md:max-w-6xl relative">
               

                {/* Inner container with max-width for content */}
                <div className="relative mx-auto  px-4 md:px-6 lg:px-8 xl:px-10  py-8 md:py-14  z-10">
                    <div className="relative text-center">
                        <h2 className="font-serif text-lg md:text-[48px] font-semibold tracking-[0.2px] text-transparent"
                            style={{
                                background: "var(--Linear, linear-gradient(180deg, #956E42 0%, #E9DDCF 100%))",
                                backgroundClip: "text",
                                WebkitBackgroundClip: "text",
                                WebkitTextFillColor: "transparent",
                            }}
                        >
                            Distinguished Guests
                        </h2>
                        <p className="mt-1 md:mt-[2px] lg:mt-1 text-xs md:text-sm lg:text-[24px] tracking-[0.2px] text-transparent"
                          style={{
                            background: "var(--Linear, linear-gradient(180deg, #956E42 0%, #E9DDCF 100%))",
                            backgroundClip: "text",
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent",
                        }}
                        >
                            Lineup in particular order.
                        </p>
                    </div>

                    {/* grid - 12 cards in 3 rows x 4 columns */}
                    <div className="relative mt-4 md:mt-16 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-6">
                        {GUESTS.map((g, idx) => {
                            // Calculate row based on desktop grid (4 columns) for variant assignment
                            // The grid will automatically adjust on smaller screens
                            const desktopRow = Math.floor(idx / 4);

                            // Determine variant: first row gets 'a' (dots + triangle), second gets 'b' (dots + triangle), third gets 'c' (G logo)
                            let variant = "c";
                            if (desktopRow === 0) variant = "z";
                            else if (desktopRow === 1) variant = "b";
                            else variant = "c"; // Bottom row gets G logo

                            return (
                                <div key={g.id} className="relative">
                                    <div className="relative">
                                        <GuestCard
                                            g={g}
                                            variant={variant}
                                        />
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}
