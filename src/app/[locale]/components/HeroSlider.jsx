"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

export default function GoldenFalconHeroMobile({ activeTab = "home", onTabChange }) {
    const [isVisible, setIsVisible] = useState(false);
    const [tokenResponse, setTokenResponse] = useState(null);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    useEffect(() => {
        const ctrl = new AbortController();
        const timeout = setTimeout(() => ctrl.abort(), 15000);

        async function fetchToken() {
            try {
                const res = await fetch("/api/auth/token", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    signal: ctrl.signal,
                });
                const data = await res.json();
                if (res.ok) setTokenResponse(data);
            } catch (err) {
                if (err.name !== "AbortError") {
                    console.error("Token fetch failed:", err);
                }
            } finally {
                clearTimeout(timeout);
            }
        }
        fetchToken();
        return () => {
            clearTimeout(timeout);
            ctrl.abort();
        };
    }, []);

    return (
        <section className="w-full overflow-x-hidden">
            {/* PHONE / POSTER FRAME */}
            <div
                className="w-full mx-auto overflow-hidden bg-[url('/bg.png')] bg-[length:100%_100%] bg-center md:bg-[center_86%] bg-no-repeat md:rounded-none"
            >
                <div className="relative flex flex-col w-full container mx-auto py-10 md:py-20">


                    {/* TITLES */}
                    <div className="left-0 right-0 z-10 px-4  pt-8 md:px-6 lg:px-8 text-center animate-fade-in-up">


                        <div className="mt-[2px] font-serif text-[48px] md:text-[72px] lg:text-[96px] xl:text-[120px] leading-[0.95] text-transparent animate-fade-in-up max-w-4xl mx-auto"
                            style={{
                                background: "var(--Linear, linear-gradient(180deg, #956E42 0%, #E9DDCF 100%))",
                                WebkitBackgroundClip: "text",
                                WebkitTextFillColor: "transparent",
                                backgroundClip: "text",
                                animationDelay: "0.2s",
                                animationFillMode: "both",
                            }}
                        >
                            Golden Falcon Awards
                        </div>
                        <div className="my-[10px] italic font-serif text-[32px] leading-[1.1] md:text-[32px] lg:text-[44px] tracking-[0.4px] text-transparent animate-fade-in-up"
                            style={{
                                background: "var(--Linear, linear-gradient(180deg, #956E42 0%, #E9DDCF 100%))",
                                WebkitBackgroundClip: "text",
                                WebkitTextFillColor: "transparent",
                                backgroundClip: "text",
                                animationDelay: "0.3s",
                                animationFillMode: "both",
                            }}
                        >
                            2026 Invitation
                        </div>

                      

                        <p className="mx-auto mt-4 md:mt-5 max-w-full md:max-w-4xl lg:max-w-4xl text-sm md:text-[28px]  italic font-normal leading-[1.3] text-white/80 animate-fade-in-up" style={{ animationDelay: "0.6s", animationFillMode: "both" }}>
                        An Evening of Excellence <br/>A private awards night. Celebrating leaders. Honoring success. Building the future.
                        </p>
                    </div>

                    {/* TROPHY */}
                    <div className="flex justify-center my-6 md:my-10 animate-fade-in-up" style={{ animationDelay: "0.7s", animationFillMode: "both" }}>
                        <div className="relative h-[140px] w-[93px] md:h-[210px] md:w-[140px] lg:h-[280px] lg:w-[186px] xl:h-[1022px] xl:w-[300px] group">
                            {/* Glow effect behind trophy */}
                            <div className="absolute inset-0 bg-gradient-to-b from-[#956E42]/30 via-[#E9DDCF]/20 to-transparent blur-2xl opacity-60 group-hover:opacity-100 transition-opacity duration-500 -z-10 scale-110" />
                            {/* Subtle floating animation */}
                            <div className="relative h-full w-full animate-float">
                                <Image
                                    src="/traphy.svg"
                                    alt="trophy"
                                    fill
                                    className="object-contain drop-shadow-[0_8px_32px_rgba(149,110,66,0.4)] transition-transform duration-500 group-hover:scale-105 group-hover:drop-shadow-[0_12px_48px_rgba(149,110,66,0.6)]"
                                />
                            </div>
                        </div>
                    </div>

                    <p className="mx-auto my-4 max-w-full md:max-w-4xl lg:max-w-4xl text-sm md:text-[28px]  italic font-normal leading-[1.3] text-white/80 animate-fade-in-up" style={{ animationDelay: "0.6s", animationFillMode: "both" }}>
                    Honoring success.Building the future.
                                            </p>

                    {/* JOIN US BUTTON */}
                    <div className="mb-6 md:mb-10 lg:mb-16 flex justify-center animate-fade-in-up" style={{ animationDelay: "0.8s", animationFillMode: "both" }}>
                        <button
                            type="button"
                            className="group relative px-6 py-2 md:px-8 md:py-2 lg:px-12 lg:py-4 min-w-[160px] md:min-w-[200px] lg:min-w-[280px] text-sm md:text-[18px] lg:text-2xl xl:text-3xl font-medium text-white overflow-hidden transition-all duration-300 hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-[#956E42] focus:ring-offset-2 focus:ring-offset-transparent"
                            style={{
                                borderRadius: "9.753px",
                                background: "linear-gradient(180deg, #956E42 0%, #E9DDCF 137.5%)",
                                boxShadow: "0 4px 16px rgba(149, 110, 66, 0.3), 0 0 0 0 rgba(149, 110, 66, 0.4)",
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.boxShadow = "0 8px 32px rgba(149, 110, 66, 0.5), 0 0 0 4px rgba(149, 110, 66, 0.2)";
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.boxShadow = "0 4px 16px rgba(149, 110, 66, 0.3), 0 0 0 0 rgba(149, 110, 66, 0.4)";
                            }}
                            aria-label="Join the Golden Falcon Awards event"
                        >
                            {/* Shine effect on hover */}
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out" />
                            {/* Pulse effect */}
                            <div className="absolute inset-0 bg-gradient-to-r from-[#956E42] via-[#E9DDCF] to-[#956E42] opacity-0 group-hover:opacity-20 animate-pulse-slow" />
                            <span className="relative z-10">Join Us</span>
                        </button>
                    </div>

                    {/* BOTTOM CARDS */}
                    <div className="mb-4 md:mb-8 lg:mb-12 px-2 md:px-[14px] md:max-w-5xl md:mx-auto lg:px-6">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-[8px] lg:gap-4">
                            <div className="animate-fade-in-up" style={{ animationDelay: "0.9s", animationFillMode: "both" }}>
                                <MiniInfoCard
                                    icon="pin"
                                    title="Venue"
                                    line1="Dubai, UAE"
                                    line2="Dubai, UAE"
                                />
                            </div>
                            <div className="animate-fade-in-up" style={{ animationDelay: "1s", animationFillMode: "both" }}>
                                <MiniInfoCard
                                    icon="cup"
                                    title="Awards"
                                    line1="Awards & Recognition"
                                    line2="Honoring industry leaders"
                                />
                            </div>
                            <div className="animate-fade-in-up" style={{ animationDelay: "1.1s", animationFillMode: "both" }}>
                                <MiniInfoCard
                                    icon="spark"
                                    title="Exclusive"
                                    line1="Guest List"
                                    line2="Invitation-only 2026 Edition"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

function MiniInfoCard({ icon, title, line1, line2 }) {
    return (
        <div
            className="group relative overflow-hidden px-3 py-3 md:px-4 md:pb-4 md:pt-4 lg:px-6 lg:py-5 text-white transition-all duration-300 hover:scale-105 hover:shadow-[0_8px_32px_rgba(105,138,193,0.4)] cursor-pointer focus-within:outline-none focus-within:ring-2 focus-within:ring-white/50 focus-within:ring-offset-2 focus-within:ring-offset-transparent"
            style={{
                borderRadius: "9.488px",
                background: "linear-gradient(180deg, #698AC1 0%, #020823 100%)",
            }}
            role="article"
            aria-label={`${title}: ${line1} - ${line2}`}
            tabIndex={0}
        >
            {/* Hover glow effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#698AC1]/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

            {/* Shimmer effect on hover */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out" />

            {/* Animated border glow */}
            <div className="absolute inset-0 rounded-[9.488px] border border-transparent group-hover:border-white/20 transition-all duration-300" />

            {/* Top Section: Icon on left, Title and line1 on right */}
            <div className="flex items-start gap-2 md:gap-3 lg:gap-4 relative z-10">
                {/* Icon on left - larger and more prominent */}
                <div className="flex-shrink-0 pt-1 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3 group-focus-within:scale-110">
                    <Icon name={icon} size="large" />
                </div>

                {/* Title and line1 stacked on right */}
                <div className="flex-1">
                    <div className="text-base md:text-lg lg:text-xl xl:text-2xl font-bold text-white transition-colors duration-300 group-hover:text-white/95">{title}</div>
                    <div className="mt-1 text-xs md:text-sm lg:text-base xl:text-lg text-white/90 transition-colors duration-300 group-hover:text-white">{line1}</div>
                </div>
            </div>

            {/* Separator line */}
            <div className="my-2 md:my-3 lg:my-4 h-px w-full bg-gray-400/30 relative z-10 group-hover:bg-gray-400/50 transition-colors duration-300" />

            {/* Bottom Section: line2 centered */}
            <div className="text-center text-xs md:text-sm lg:text-base xl:text-lg text-white/90 relative z-10 transition-colors duration-300 group-hover:text-white">{line2}</div>
        </div>
    );
}

function Icon({ name, size = "small" }) {
    const iconSize = size === "large"
        ? "h-6 w-6 md:h-8 md:w-8 lg:h-10 lg:w-10 xl:h-12 xl:w-12"
        : "h-[12px] w-[12px]";
    const textColor = size === "large" ? "text-white" : "text-white/85";

    if (name === "pin") {
        if (size === "large") {
            return (
                <svg
                    viewBox="0 0 24 24"
                    className={`${iconSize} ${textColor}`}
                    fill="currentColor"
                >
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
                    <circle cx="12" cy="9" r="2.5" fill="black" />
                </svg>
            );
        }
        return (
            <svg
                viewBox="0 0 24 24"
                className={`${iconSize} ${textColor}`}
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            >
                <path d="M12 21s7-4.5 7-11a7 7 0 1 0-14 0c0 6.5 7 11 7 11Z" />
                <path d="M12 10a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" />
            </svg>
        );
    }
    if (name === "cup") {
        return (
            <svg
                viewBox="0 0 24 24"
                className={`${iconSize} ${textColor}`}
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            >
                <path d="M8 4h8v5a4 4 0 0 1-8 0V4Z" />
                <path d="M6 6H4v2a4 4 0 0 0 4 4" />
                <path d="M18 6h2v2a4 4 0 0 1-4 4" />
                <path d="M10 17h4" />
                <path d="M9 20h6" />
            </svg>
        );
    }
    // spark
    return (
        <svg
            viewBox="0 0 24 24"
            className={`${iconSize} ${textColor}`}
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M12 2l1.4 4.3L18 8l-4.6 1.7L12 14l-1.4-4.3L6 8l4.6-1.7L12 2Z" />
            <path d="M19 13l.9 2.7L23 17l-3.1 1.3L19 21l-.9-2.7L15 17l3.1-1.3L19 13Z" />
        </svg>
    );
}
