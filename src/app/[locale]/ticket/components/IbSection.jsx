"use client";

import React from "react";
import NewFormDesign from "./NewForm";

const CARDS = [
    {
        title: "First",
        sub: "Luxury airline\ntickets",
        img: "ib-img1.svg", // replace with your image
    },
    {
        title: "Second",
        sub: "Airport pick-up\n& drop-off",
        img: "/ib-img2.svg",
    },
    {
        title: "Third",
        sub: "Premium hotel\nsuite",
        img: "/ib-img3.svg",
    },
    {
        title: "Fourth",
        sub: "Full access to all event\nactivities",
        img: "/ib-img4.svg",
    },
];

export default function IbSection() {
    return (
        <section className="w-full bg-[#0a0a12] md:py-14 py-4">
            <div className="mx-auto max-w-6xl px-4 md:px-6">
                {/* Title */}
                <div className="text-center">
                    <h2 className="text-[28px] md:text-[56px] font-extrabold leading-[1.05] tracking-[-0.02em]"
                        style={{
                            background: "linear-gradient(180deg, #956E42 0%, #E9DDCF 100%)",
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent",
                            backgroundClip: "text",
                        }}
                    >
                        Become an Introducing Broker and Unlock Unlimited Earning Potential!
                    </h2>
                    <p className="mx-auto mt-6 max-w-[720px] text-[18px] font-semibold leading-[1.55] text-white">
                        Power up your business expansion and client network while maximizing the advantages of our IB program.

                    </p>
                </div>

                <div className="mt-10">
                    <NewFormDesign isIb={true}/>
                </div>

            </div>
        </section>
    );
}