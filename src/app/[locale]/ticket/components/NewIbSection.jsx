"use client";

import React from "react";

const CARDS = [
    {
        title: "First",
        sub: "Visa and Ticket Supply",
        img: "ib-img1.svg", // replace with your image
    },
    {
        title: "Second",
        sub: "Conrad Hotel, Dubai",
        img: "/ib-img2.svg",
    },
    {
        title: "Third",
        sub: "Pre Dinner with GTCFX",
        img: "/ib-img3.svg",
    },
    {
        title: "Fourth",
        sub: "Golden Falcon Awards",
        img: "/ib-img4.svg",
    },
];

export default function IBQualificationAccess({ isIbPage = false }) {
    return (
        <section className="w-full bg-[#0a0a12]">
            <div className="mx-auto max-w-6xl px-4 md:px-6">
                {/* Title */}
                <div className="text-center">
                    <h2 className="text-[24px] md:text-[56px] font-extrabold leading-[1.05] tracking-[-0.02em]"
                        style={{
                            background: "linear-gradient(180deg, #956E42 0%, #E9DDCF 100%)",
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent",
                            backgroundClip: "text",
                        }}
                    >
                        IB Qualification Access
                    </h2>
                    <p className="mx-auto mt-6 max-w-[720px] text-base md:text-[18px] font-semibold leading-[1.55] text-white">
                        This category is reserved for Introducing Brokers who have successfully
                        achieved their performance targets.
                    </p>
                </div>

                {/* Cards */}
                <div className="mt-10 grid grid-cols-2 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                    {CARDS.map((c) => (
                        <div
                            key={c.title}
                            className="relative h-[250px] md:h-[400px] overflow-hidden"
                        >
                            {/* image */}
                            <div
                                className="absolute inset-0 bg-cover bg-center"
                                style={{ backgroundImage: `url(${c.img})` }}
                            />

                            {/* content */}
                            <div className="relative flex h-full flex-col items-center justify-end md:p-5 p-3 text-center">
                                {isIbPage ?
                                    <div className="text-[16px] md:text-[24px] font-bold leading-[1.2] text-white drop-shadow">
                                        {c.sub}
                                    </div>
                                    :
                                    <div className="text-[16px] md:text-[24px] font-bold leading-none text-white drop-shadow">
                                        {c.title}
                                    </div>
                                }
                                {!isIbPage && (
                                    <div className="mt-3 whitespace-pre-line text-[16px]  font-medium leading-[1.45] text-white">
                                        {c.sub}
                                    </div>
                                )}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Bottom CTA */}
                <div className="md:mt-12 mt-6 flex items-center justify-center">
                    <button
                        type="button"
                        className="group inline-flex items-center gap-3 text-[16px] font-semibold tracking-wide text-white hover:text-white"
                    >
                        <span>Qualified IBs Receive</span>
                        <span className="inline-flex h-7 w-7 items-center justify-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="36" height="23" viewBox="0 0 36 23" fill="none">
                                <path d="M1.5 9.54593C0.671573 9.54593 0 10.2175 0 11.0459C0 11.8744 0.671573 12.5459 1.5 12.5459V11.0459V9.54593ZM35.5607 12.1066C36.1464 11.5208 36.1464 10.5711 35.5607 9.98527L26.0147 0.439327C25.4289 -0.14646 24.4792 -0.14646 23.8934 0.439327C23.3076 1.02511 23.3076 1.97486 23.8934 2.56065L32.3787 11.0459L23.8934 19.5312C23.3076 20.117 23.3076 21.0667 23.8934 21.6525C24.4792 22.2383 25.4289 22.2383 26.0147 21.6525L35.5607 12.1066ZM1.5 11.0459V12.5459H34.5V11.0459V9.54593H1.5V11.0459Z" fill="white" />
                            </svg>
                        </span>
                    </button>
                </div>
            </div>
        </section>
    );
}