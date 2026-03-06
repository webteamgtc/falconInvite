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


            <MainFooter bgColor="#0a0a12" />
        </main>
    );
}
