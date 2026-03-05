"use client";

import React from "react";
import HeroSection from "./components/HeroSection";
import IBQualificationAccess from "../ticket/components/NewIbSection";
import MainFooter from "../components/MainFooter";
export default function VipQualificationProgressPage() {
    return (
        <main className="relative min-h-screen w-full overflow-hidden bg-[#010101] text-white">

            <HeroSection />
            <div className="mt-10 md:mt-20">
                <IBQualificationAccess isIbPage={true} />
            </div>
            {/* CTA STRIP */}
            <section className="md:mt-14 mt-8 container mx-auto px-4">
                <div
                    className="flex flex-col items-center justify-between gap-4 rounded-[20px] border-l-4 py-5 px-6 md:flex-row md:py-4"
                    style={{
                        borderLeftColor: "#FFC66C",
                        background: "#382A1B",
                    }}
                >
                    <p className="text-center text-[14px] md:text-[16px] leading-[1.6] text-white md:text-left">
                        Increase your deposit to accelerate qualification · Higher trading activity moves you closer to VIP status
                    </p>
                    <button
                        className="inline-flex h-[38px] shrink-0 items-center justify-center rounded-full px-8 text-[11px] font-semibold text-black shadow-[0_4px_14px_rgba(0,0,0,0.25)]"
                        style={{ background: "#FFC66C" }}
                    >
                        ACT NOW
                    </button>
                </div>

                {/* small chips below */}
                {/* <div className="md:mt-6 mt-4 flex flex-wrap items-center justify-center gap-6">
                    <Chip label="You are 50% to qualification" />
                    <Chip label="80% - You are almost there" />
                </div> */}
            </section>

            {/* ACCOUNT MANAGER BAR */}
            <section className="my-8 container mx-auto px-4">
                <div
                    className="relative overflow-hidden rounded-2xl border md:rounded-full md:px-8 px-5 md:py-5 py-4"
                    style={{
                        background: "#000",
                        borderColor: "#FFC66C",
                        boxShadow: "0 0 20px rgba(255,198,108,0.35), 0 0 40px rgba(255,198,108,0.15)",
                    }}
                >
                    {/* golden glow from left around avatar */}
                    <div
                        className="pointer-events-none absolute left-0 top-1/2 h-32 w-48 -translate-y-1/2 rounded-full opacity-60 blur-3xl"
                        style={{ background: "radial-gradient(circle, rgba(255,198,108,0.4) 0%, transparent 70%)" }}
                    />
                    <div className="relative flex flex-col items-center justify-between gap-4 md:flex-row">
                        <div className="flex items-center gap-4">
                            <div
                                className="flex h-[42px] w-[42px] shrink-0 items-center justify-center rounded-full text-[14px] font-bold text-black"
                                style={{
                                    background: "#FFC66C",
                                    boxShadow: "0 0 24px rgba(255,198,108,0.5)",
                                }}
                            >
                                JD
                            </div>
                            <div className="leading-tight">
                                <div className="text-[13px] font-bold text-white">James Delaney</div>
                                <div className="mt-0.5 text-[11px] text-white/70">
                                    Your dedicated account manager
                                </div>
                            </div>
                        </div>
                        <button
                            className="inline-flex h-[38px] shrink-0 items-center justify-center rounded-full border px-6 text-[11px] font-semibold text-white transition-colors hover:bg-white/5"
                            style={{ borderColor: "#FFC66C", background: "#000" }}
                        >
                            Contact Now
                        </button>
                    </div>
                </div>
            </section>
            <MainFooter bgColor="#0a0a12" />
        </main>
    );
}

function Chip({ label }) {
    return (
        <span className="inline-flex h-[34px] items-center px-6 text-[12px] md:text-[14px] font-light text-white"
            style={{
                borderRadius: "23.5px",
                border: "1px solid #FFCACA",
                background: "rgba(255, 227, 227, 0.26)",
            }}
        >
            {label}
        </span>
    );
}