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
                <IBQualificationAccess />
            </div>
            {/* CTA STRIP */}
            <section className="md:mt-14 mt-8 container mx-auto">
                <div className="flex flex-col items-center justify-between gap-4 rounded-full bg-black/35 px-6 py-4 ring-1 ring-white/10 backdrop-blur-[8px] md:flex-row">
                    <p className="text-center text-[14px] md:text-[16px] leading-[1.6] text-white md:text-left">
                        Increase your deposit to accelerate qualification · Higher trading activity moves you closer to VIP status
                    </p>

                    <button className="inline-flex h-[34px] items-center justify-center rounded-full bg-white px-6 text-[11px] font-semibold text-black shadow-[0_12px_24px_rgba(0,0,0,0.35)]">
                        ACT NOW
                    </button>
                </div>

                {/* small chips below */}
                <div className="md:mt-6 mt-4 flex flex-wrap items-center justify-center gap-6">
                    <Chip label="You are 50% to qualification" />
                    <Chip label="80% - You are almost there" />
                </div>
            </section>

            {/* ACCOUNT MANAGER BAR */}
            <section className="my-8 container mx-auto">
                <div className="relative overflow-hidden md:rounded-full rounded-2xl border border-white/12 bg-white/12 md:px-6 px-4 md:py-4 py-2 backdrop-blur-[10px]">
                    {/* subtle inner shine */}
                    <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,0.10)_0%,transparent_35%,transparent_70%,rgba(255,255,255,0.06)_100%)]" />

                    <div className="relative flex flex-col items-center justify-between gap-4 md:flex-row">
                        <div className="flex items-center gap-4">
                            <div className="h-[42px] w-[42px] rounded-full bg-[#F0C9C9]" />
                            <div className="leading-tight">
                                <div className="text-[13px] font-semibold text-white">James Delaney</div>
                                <div className="mt-[2px] text-[11px] text-white/60">
                                    Your dedicated account manager
                                </div>
                            </div>
                        </div>

                        <button className="inline-flex h-[34px] items-center justify-center rounded-full border border-white/25 bg-white/10 px-6 text-[11px] font-semibold text-white hover:bg-white/15">
                            Contact Now
                        </button>
                    </div>
                </div>
            </section>
            <MainFooter bgColor="#0a0a12"/>
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