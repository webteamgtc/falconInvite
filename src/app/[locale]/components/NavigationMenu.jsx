"use client";

import { useState } from "react";

const rightTabs = [
    { id: "home", label: "Home" },
    { id: "gallery", label: "Gallery" },
    { id: "agenda", label: "Agenda" },
    { id: "guest", label: "Guest" },
    { id: "media", label: "Media" },
     { id: "policy", label: "Policy" },
];

export default function NavigationMenu({ activeTab, onTabChange }) {
    const [isMenuOpen, setIsMenuOpen] = useState(true);

    function handleNavClick(id) {
        if (onTabChange) {
            onTabChange(id);
        }
    }

    return (
        <div className="fixed right-0 md:right-[8px] top-1/2 -translate-y-1/2 z-50 flex items-center gap-1 md:gap-2">
            {/* Toggle Arrow Button - Centered with menu */}
            <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className={[
                    "relative z-40 flex items-center justify-center flex-shrink-0",
                    "w-[26px] md:w-[36px] lg:w-[40px]",
                    "h-[40px] md:h-[54px] lg:h-[60px]",
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
                    className={`w-3.5 h-3.5 md:w-[18px] md:h-[18px] lg:w-5 lg:h-5 text-white/80 group-hover:text-white transition-all duration-500 ${
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
                
                {rightTabs.map((t, idx) => {
                    const isActive = activeTab === t.id;
                    return (
                    <button
                        key={t.id}
                        type="button"
                        onClick={() => handleNavClick(t.id)}
                        aria-current={isActive ? "page" : undefined}
                        className={[
                            "group relative transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)]",
                            "flex items-center justify-center",
                            "w-[48px] md:w-[54px] lg:w-[54px]",
                            "h-[75px] md:h-[85px] lg:h-[95px]",
                            "border-b border-white/[0.12] last:border-b-0",
                            "overflow-visible",
                            isActive
                                ? "bg-gradient-to-br from-[#7C5EFF]/20 via-[#7C5EFF]/12 to-transparent backdrop-blur-[1px]"
                                : "bg-transparent hover:bg-gradient-to-br hover:from-white/[0.08] hover:via-white/[0.04] hover:to-transparent",
                        ].join(" ")}
                        style={{
                            animationDelay: `${idx * 50}ms`,
                        }}
                    >
                        {/* Active state - Elegant premium styling */}
                        {isActive && (
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
                        {!isActive && (
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
                                    isActive 
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
                    );
                })}
            </div>
        </div>
    );
}

