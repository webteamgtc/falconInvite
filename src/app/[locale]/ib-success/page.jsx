"use client";

import React from "react";
import HeroSection from "./components/HeroSection";
import QualificationSection from "./components/QualificationSection";
import MainFooter from "../components/MainFooter";
export default function VipQualificationProgressPage() {
    return (
        <main className="relative min-h-screen w-full overflow-hidden bg-[#010101] text-white">

            <HeroSection />
            <div className="mt-10 md:mt-20">
                <QualificationSection />
            </div>
            {/* CTA STRIP */}
            <section className="md:mt-14 mt-8 container mx-auto">
                <div
                    className="flex flex-col items-center justify-between gap-4 rounded-[20px] border-l-6 py-4 px-4 md:flex-row md:py-6"
                    style={{
                        borderLeftColor: "#FFD382",
                        background: "#241B11",
                    }}
                >
                    <p className="text-center font-semibold text-[12px] md:text-[18px] leading-[1.6] text-white md:text-left">
                        Increase your deposit to accelerate qualification · Higher trading activity moves you closer to VIP status
                    </p>
                    <button
                        className="inline-flex h-[38px] shrink-0 items-center justify-center rounded-full px-4 md:px-6 text-[12px] md:text-[16px] font-semibold text-black"
                        style={{ background: "#FFD382" }}
                    >
                        ACT NOW
                    </button>
                </div>

            </section>

            {/* ACCOUNT MANAGER BAR */}
            <section className="md:my-14 my-6 container mx-auto">
                <div
                    className="relative overflow-hidden rounded-2xl border md:rounded-full md:px-8 px-4 md:py-5 py-4"
                    style={{
                        background: "#000",
                        borderColor: "#7C6B4C",
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
                                className="flex md:h-[42px] md:w-[42px] h-[32px] w-[32px] shrink-0 items-center justify-center rounded-full text-[12px] font-bold text-black"
                                style={{
                                    background: "#FFC66C",
                                    boxShadow: "0 0 24px rgba(255,198,108,0.5)",
                                }}
                            >
                                JD
                            </div>
                            <div className="leading-tight">
                                <div className="md:text-[20px] text-[14px] font-bold text-white">James Delaney</div>
                                <div className="mt-0.5 md:text-[14px] text-[12px] text-white">
                                    Your dedicated account manager
                                </div>
                            </div>
                        </div>
                        <button
                            className="inline-flex h-[38px] shrink-0 items-center justify-center rounded-full border px-6 md:text-[14px]  text-[12px] font-semibold text-[#FFD382] transition-colors hover:bg-white/5"
                            style={{ borderColor: "#FFD382", background: "#000" }}
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
