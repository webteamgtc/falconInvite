"use client";

import Image from "next/image";
import { useState } from "react";

const rightTabs = [
    { id: "home", label: "Home", active: true },
    { id: "gallery", label: "Gallery" },
    { id: "agenda", label: "Agenda" },
    { id: "guest", label: "Guest" },
    { id: "media", label: "Media" },
    { id: "contact", label: "Contact" },
    { id: "policy", label: "Policy" },
];

export default function GoldenFalconHeroMobile() {
    const [isMenuOpen, setIsMenuOpen] = useState(true);
    return (
        <section className="w-full overflow-x-hidden">
            {/* PHONE / POSTER FRAME */}
            <div 
                className="w-full mx-auto overflow-hidden bg-[url('/bg-1.svg')] bg-cover bg-center bg-no-repeat md:rounded-none"
            >
                <div className="relative flex flex-col w-full px-4 md:px-8 lg:px-12 xl:px-16 2xl:px-20">

                    {/* RIGHT VERTICAL MENU (INSIDE IMAGE) - Sticky */}
                    <div className="fixed right-0 md:right-[1px] top-1/2 -translate-y-1/2 z-30 flex items-center gap-2">
                        {/* Toggle Arrow Button - Centered with menu */}
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className={[
                                "relative z-40 flex items-center justify-center flex-shrink-0",
                                "w-[32px] md:w-[36px] lg:w-[40px]",
                                "h-[48px] md:h-[54px] lg:h-[60px]",
                                "rounded-lg md:rounded-xl",
                                "bg-gradient-to-b from-[#000000]/90 via-[#0A0C14]/90 to-[#0B1022]/90",
                                "backdrop-blur-md border border-white/30",
                                "shadow-[0_4px_16px_rgba(0,0,0,0.8)]",
                                "hover:bg-gradient-to-b hover:from-[#7C5EFF]/20 hover:via-[#7C5EFF]/10 hover:to-transparent",
                                "hover:border-[#7C5EFF]/50",
                                "transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)]",
                                "group",
                            ].join(" ")}
                        >
                            <svg
                                className={`w-4 h-4 md:w-[18px] md:h-[18px] lg:w-5 lg:h-5 text-white/80 group-hover:text-white transition-all duration-500 ${
                                    isMenuOpen ? 'rotate-180' : 'rotate-0'
                                }`}
                                fill="none"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path d="M15 19l-7-7 7-7" />
                            </svg>
                            
                            {/* Glow effect on hover */}
                            <div className="absolute inset-0 bg-gradient-to-b from-[#7C5EFF]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg md:rounded-xl" />
                        </button>

                        {/* Main menu container - Premium Design with Slide Animation */}
                        <div
                            className={[
                                "relative flex flex-col overflow-hidden rounded-l-xl md:rounded-xl",
                                "border-l-[3px] border-white/40",
                                "shadow-[0_8px_32px_rgba(0,0,0,0.9),inset_-1px_0_0_rgba(255,255,255,0.1)]",
                                "backdrop-blur-sm",
                                "transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)]",
                                "transform-gpu",
                                isMenuOpen
                                    ? "translate-x-0 opacity-100 scale-100"
                                    : "translate-x-full opacity-0 scale-95 pointer-events-none w-0",
                            ].join(" ")}
                        >
                            {/* Sophisticated layered background */}
                            <div className="absolute inset-0 bg-gradient-to-b from-[#000000] via-[#0A0C14] to-[#0B1022]" />
                            <div className="absolute inset-0 bg-gradient-to-r from-white/[0.03] via-transparent to-transparent" />
                            <div className="absolute inset-0 bg-[radial-gradient(circle_at_left_center,rgba(124,94,255,0.08),transparent_80%)]" />
                            
                            {/* Premium vertical separator line with glow */}
                            <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-gradient-to-b from-white/50 via-white/35 to-white/25 shadow-[0_0_12px_rgba(255,255,255,0.15)]" />
                            
                            {rightTabs.map((t, idx) => (
                                <button
                                    key={t.id}
                                    type="button"
                                    className={[
                                        "group relative transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)]",
                                        "flex items-center justify-center",
                                        "w-[58px] md:w-[68px] lg:w-[78px]",
                                        "h-[75px] md:h-[85px] lg:h-[95px]",
                                        "border-b border-white/[0.12] last:border-b-0",
                                        "overflow-visible",
                                        t.active
                                            ? "bg-gradient-to-br from-[#7C5EFF]/20 via-[#7C5EFF]/12 to-transparent backdrop-blur-[1px]"
                                            : "bg-transparent hover:bg-gradient-to-br hover:from-white/[0.08] hover:via-white/[0.04] hover:to-transparent",
                                    ].join(" ")}
                                    style={{
                                        animationDelay: `${idx * 50}ms`,
                                    }}
                                >
                                    {/* Active state - Elegant premium styling */}
                                    {t.active && (
                                        <>
                                            {/* Glowing left border with multiple shadows */}
                                            <div className="absolute left-0 top-0 bottom-0 w-[4px] bg-gradient-to-b from-[#7C5EFF] via-[#9C7EFF] to-[#7C5EFF]/90 shadow-[0_0_16px_rgba(124,94,255,0.9),0_0_32px_rgba(124,94,255,0.5)]" />
                                            {/* Multiple gradient overlays for depth */}
                                            <div className="absolute inset-0 bg-gradient-to-b from-[#7C5EFF]/18 via-[#7C5EFF]/8 to-transparent" />
                                            <div className="absolute inset-0 bg-gradient-to-r from-[#7C5EFF]/10 via-transparent to-transparent" />
                                            <div className="absolute inset-0 bg-[radial-gradient(circle_at_left_center,rgba(124,94,255,0.2),transparent_70%)]" />
                                            {/* Subtle inner highlight */}
                                            <div className="absolute inset-0 bg-gradient-to-b from-white/[0.08] via-white/[0.03] to-transparent" />
                                        </>
                                    )}
                                    
                                    {/* Elegant hover effect for inactive items */}
                                    {!t.active && (
                                        <>
                                            <div className="absolute inset-0 bg-gradient-to-b from-white/[0.08] via-white/[0.04] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                            <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-white/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.05),transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                        </>
                                    )}

                                    {/* Premium rotated text label with perfect styling */}
                                    <div className="relative z-10 flex items-center justify-center w-full h-full px-1">
                                        <span
                                            className={[
                                                "inline-block whitespace-nowrap",
                                                "text-[9px] md:text-[10px] lg:text-xs xl:text-sm",
                                                "font-semibold tracking-[0.8px] md:tracking-[1px] lg:tracking-[1.2px]",
                                                "transition-all duration-500 ease-out",
                                                "select-none cursor-pointer",
                                                "transform-gpu will-change-transform",
                                                t.active 
                                                    ? "text-white font-bold drop-shadow-[0_0_20px_rgba(124,94,255,0.7),0_0_40px_rgba(124,94,255,0.4),0_2px_8px_rgba(0,0,0,0.8)]" 
                                                    : "text-white/65 group-hover:text-white/95 group-hover:drop-shadow-[0_0_12px_rgba(255,255,255,0.25)]",
                                            ].join(" ")}
                                            style={{
                                                transform: 'rotate(90deg)',
                                                transformOrigin: 'center center',
                                            }}
                                        >
                                            {t.label}
                                        </span>
                                    </div>
                                    
                                    {/* Subtle scale effect on interaction */}
                                    <div className="absolute inset-0 scale-100 group-hover:scale-[1.02] group-active:scale-[0.98] transition-transform duration-300 pointer-events-none" />
                                    
                                    {/* Ripple effect on click */}
                                    <div className="absolute inset-0 rounded-lg bg-white/15 scale-0 group-active:scale-100 opacity-0 group-active:opacity-100 transition-all duration-400 ease-out pointer-events-none" />
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* TOP LOGO */}
                    <div className="flex items-center justify-center py-6 md:py-10">
                        <div>
                            <img 
                                className="w-[80px] h-[52px] md:w-[100px] md:h-[65px] lg:w-[140px] lg:h-[91px] xl:w-[180px] xl:h-[117px]" 
                                src={"/logo.svg"} 
                                alt="GTCFX Logo" 
                            />
                        </div>
                    </div>

                    {/* TITLES */}
                    <div className="left-0 right-0 z-10 px-4 md:px-6 lg:px-8 text-center">
                        <div className="text-[32px] md:text-[50px] lg:text-[64px] xl:text-[80px] font-medium tracking-[0.6px] text-transparent"
                           style={{
                            background: "var(--Linear, linear-gradient(180deg, #956E42 0%, #E9DDCF 100%))",
                            backgroundClip: "text",
                        }}
                        >
                            2026
                        </div>

                        <div className="mt-[2px] font-serif text-[48px] md:text-[72px] lg:text-[96px] xl:text-[120px] leading-[0.95] text-transparent"
                           style={{
                            background: "var(--Linear, linear-gradient(180deg, #956E42 0%, #E9DDCF 100%))",
                            backgroundClip: "text",
                        }}
                        >
                            Golden
                        </div>
                        <div className="mt-[2px] font-serif text-[32px] md:text-[50px] lg:text-[64px] xl:text-[80px] tracking-[0.4px] text-transparent"
                           style={{
                            background: "var(--Linear, linear-gradient(180deg, #956E42 0%, #E9DDCF 100%))",
                            backgroundClip: "text",
                        }}
                        >
                            Falcon Awards
                        </div>

                        <div className="mt-4 md:mt-5 text-base md:text-[28px] lg:text-3xl xl:text-4xl font-medium tracking-[0.4px] text-white">
                            Dubai, 12 December 2026, Evening Event
                        </div>
                        <div className="mt-4 md:mt-8 text-base md:text-[28px] lg:text-3xl xl:text-4xl font-medium tracking-[0.4px] text-white">
                            Hosted by GTCFX
                        </div>

                        <p className="mx-auto mt-4 md:mt-5 max-w-full md:max-w-4xl font-[400] lg:max-w-4xl text-sm md:text-[28px] lg:text-2xl xl:text-3xl leading-[1.4] text-white">
                            GTCFX invites you to an exclusive evening celebrating excellence,
                            leadership, and innovation in global trading
                        </p>
                    </div>

                    {/* TROPHY */}
                    <div className="flex justify-center my-6 md:my-10">
                        <div className="relative h-[140px] w-[93px] md:h-[210px] md:w-[140px] lg:h-[280px] lg:w-[186px] xl:h-[350px] xl:w-[233px]">
                            <Image
                                src="/traphy.svg"
                                alt="trophy"
                                fill
                                className="object-contain"
                            />
                        </div>
                    </div>

                    {/* JOIN US BUTTON */}
                    <div className="mt-6 md:mt-0  mb-6 md:mb-10 lg:mb-16 flex justify-center">
                        <button
                            type="button"
                            className="px-6 py-2 md:px-8 md:py-2 lg:px-12 lg:py-4 min-w-[160px] md:min-w-[200px] lg:min-w-[280px] text-sm md:text-[18px] lg:text-2xl xl:text-3xl font-medium text-white"
                            style={{
                                borderRadius: "9.753px",
                                background: "linear-gradient(180deg, #956E42 0%, #E9DDCF 137.5%)"
                            }}
                        >
                            Join Us
                        </button>
                    </div>

                    {/* BOTTOM CARDS */}
                    <div className="mb-4 md:mb-8 lg:mb-12 px-2 md:px-[14px] md:max-w-5xl md:mx-auto lg:px-6">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-[8px] lg:gap-4">
                            <MiniInfoCard
                                icon="pin"
                                title="Venue"
                                line1="Dubai, UAE"
                                line2="Dubai, UAE"
                            />
                            <MiniInfoCard
                                icon="cup"
                                title="Awards"
                                line1="Awards & Recognition"
                                line2="Honoring industry leaders"
                            />
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
        </section>
    );
}

function MiniInfoCard({ icon, title, line1, line2 }) {
    return (
        <div
            className="relative overflow-hidden px-3 py-3 md:px-4 md:pb-4 md:pt-4 lg:px-6 lg:py-5 text-white"
            style={{
                borderRadius: "9.488px",
                background: "linear-gradient(180deg, #698AC1 0%, #020823 100%)"
            }}
        >
            {/* Top Section: Icon on left, Title and line1 on right */}
            <div className="flex items-start gap-2 md:gap-3 lg:gap-4">
                {/* Icon on left - larger and more prominent */}
                <div className="flex-shrink-0 pt-1">
                    <Icon name={icon} size="large" />
                </div>

                {/* Title and line1 stacked on right */}
                <div className="flex-1">
                    <div className="text-base md:text-lg lg:text-xl xl:text-2xl font-bold text-white">{title}</div>
                    <div className="mt-1 text-xs md:text-sm lg:text-base xl:text-lg text-white">{line1}</div>
                </div>
            </div>

            {/* Separator line */}
            <div className="my-2 md:my-3 lg:my-4 h-px w-full bg-gray-400/30" />

            {/* Bottom Section: line2 centered */}
            <div className="text-center text-xs md:text-sm lg:text-base xl:text-lg text-white">{line2}</div>
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
