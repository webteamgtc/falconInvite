"use client";

export default function PartnerMediaSection() {
    return (
        <section className="w-full bg-[#050816] ">
            {/* poster width like your design */}
            <div className="relative mx-auto max-w-2xl lg:max-w-4xl xl:max-w-5xl 2xl:max-w-6xl px-4 md:px-6 lg:px-8 xl:px-10  py-8 md:py-14  z-10">
                <div className="relative ">
                    {/* subtle vignette */}
                    <div className="pointer-events-none absolute inset-0">
                        <div className="absolute inset-0 bg-[radial-gradient(260px_180px_at_50%_0%,rgba(255,255,255,0.10),transparent_65%)]" />
                        <div className="absolute inset-0 bg-gradient-to-b from-[#050816] via-[#050816]/90 to-[#050816]" />
                    </div>

                    <div className="relative text-center">

                        <h2 className="font-serif text-lg md:text-[48px] font-semibold tracking-[0.2px] text-transparent"
                            style={{
                                background: "var(--Linear, linear-gradient(180deg, #956E42 0%, #E9DDCF 100%))",
                                backgroundClip: "text",
                            }}
                        >
                            Partner Media
                        </h2>
                        <p className="mt-1 md:mt-[2px] lg:mt-1 text-xs md:text-sm lg:text-[24px] tracking-[0.2px] text-transparent"
                            style={{
                                background: "var(--Linear, linear-gradient(180deg, #956E42 0%, #E9DDCF 100%))",
                                backgroundClip: "text",
                            }}
                        >
                            Official media partners providing event coverage
                            <br />
                            and industry insights.                       </p>
                    </div>

                    {/* grid */}
                    <div className="relative mt-14">
                        <div className="grid md:grid-cols-4 grid-cols-2 gap-x-[10px] gap-y-[12px]">
                            {Array.from({ length: 16 }).map((_, i) => (
                                <div
                                    key={i}
                                    className="h-[60px] rounded-[6px] bg-gradient-to-b from-[#F1E0C7] via-[#D9BF96] to-[#B48755] shadow-[0_10px_26px_rgba(0,0,0,0.55)] ring-1 ring-black/30"
                                />
                            ))}
                        </div>
                    </div>

                    {/* bottom fade like screenshot */}
                    <div className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-black/45 to-transparent" />
                </div>
            </div>
        </section>
    );
}
