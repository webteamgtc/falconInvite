"use client";

import SimpleNavigationMenu from "@/app/[locale]/components/SimpleNavigationMenu";
import { FiClock } from "react-icons/fi";
import { FaMedal, FaCrown, FaTrophy } from "react-icons/fa";
import { IoFlame, IoHourglassOutline } from "react-icons/io5";
import { HiOutlineCurrencyDollar } from "react-icons/hi2";
import { TbChartLine } from "react-icons/tb";
import { IoFlash } from "react-icons/io5";
import Image from "next/image";

const GOLD_BORDER = "#7C6B4C";
const GOLD_ACCENT = "#B48755";

export default function HeroSection({ userName = "Alexander Chen" }) {
    return (
        <div className="relative mx-auto ">
            <SimpleNavigationMenu activeTab="ib-success" />
            <div className="pointer-events-none absolute inset-0">
                <img
                    src="/bg-new-ib.svg"
                    alt=""
                    className="h-full w-full object-cover opacity-55"
                    draggable={false}
                />
                {/* dark overlay + warm highlights like screenshot */}
                <div className="absolute inset-0 bg-[radial-gradient(900px_520px_at_50%_12%,rgba(255,210,150,0.14),transparent_60%)]" />
                <div className="absolute inset-0 bg-[radial-gradient(620px_520px_at_22%_30%,rgba(255,180,90,0.10),transparent_68%)]" />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.30)_0%,rgba(0,0,0,0.30)_38%,rgba(0,0,0,0.30)_100%)]" />
            </div>
            <div className="mx-auto container relative z-10">
                <section
                    className="relative overflow-hidden md:mt-20 mt-6 md:rounded-[30px] rounded-2xl md:px-10 px-4 md:py-10 py-4"
                    style={{
                        border: `1px solid ${GOLD_BORDER}`,
                        background: "rgba(0, 0, 0, 0.45)",
                    }}
                >
                    {/* Subtle golden light streaks - bottom left & top right */}
                    <div className="pointer-events-none absolute inset-0 overflow-hidden rounded-[inherit]">
                        <div
                            className="absolute -bottom-20 -left-20 h-[280px] w-[280px] rounded-full opacity-80 blur-[80px]"
                            style={{ background: "radial-gradient(circle, rgba(255,210,150,0.25) 0%, transparent 70%)" }}
                        />
                        <div
                            className="absolute -right-20 -top-20 h-[260px] w-[260px] rounded-full opacity-80 blur-[70px]"
                            style={{ background: "radial-gradient(circle, rgba(255,180,90,0.2) 0%, transparent 70%)" }}
                        />
                    </div>

                    <div className="relative flex items-start flex-col md:flex-row justify-between gap-6">
                        <div>
                            <h1
                                className="text-[28px] md:text-[40px] font-semibold tracking-[-0.01em]"
                                style={{
                                    background: "linear-gradient(180deg, #956E42 0%, #E9DDCF 100%)",
                                    backgroundClip: "text",
                                    WebkitBackgroundClip: "text",
                                    WebkitTextFillColor: "transparent",
                                }}
                            >
                                Welcome, {userName}
                            </h1>

                            <div className="md:mt-6 mt-3 flex flex-wrap items-center gap-3 text-[12px] md:text-[14px]">
                                <span
                                    className="inline-flex items-center rounded-full border px-4 py-1.5 font-semibold text-white"
                                    style={{ borderColor: GOLD_BORDER, background: "rgba(0,0,0,0.4)" }}
                                >
                                    VIP Annual Invitation 2026
                                </span>
                                <span className="text-white font-light text-[12px] md:text-[14px]">• Your passage to the exclusive circle</span>
                            </div>

                            <div className="md:mt-6 mt-3 flex min-h-[3rem] overflow-hidden">
                                <div
                                    className="w-2 image.png shrink-0"
                                    style={{ background: "#C08942" }}
                                />
                                <div
                                    className="flex flex-1 items-center py-3 pl-4 pr-5"
                                    style={{
                                        background: "linear-gradient(90deg, #2b251f 0%, #29241e 45%, rgba(89, 66, 37, 0.4) 60%, rgba(0, 0, 0, 0) 100%)",
                                    }}
                                >
                                    <p className="text-[14px] md:text-[16px] font-normal leading-snug italic text-white">
                                        You are on your way to qualifying for our exclusive annual VIP invitation.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="shrink-0">
                            <span
                                className="inline-flex h-[36px] items-center gap-2 rounded-full border px-5 text-[12px] font-medium text-white"
                                style={{
                                    borderColor: GOLD_BORDER,
                                    borderRadius: "17px",
                                    background: "#1B1405",
                                }}
                            >
                                <FiClock className="h-4 w-4 shrink-0" style={{ color: "#E9DDCF" }} />
                                Qualification: In Progress
                            </span>
                        </div>
                    </div>
                </section>

                {/* STATUS ROW - horizontal capsule with golden icon circles and connectors */}
                <section className="mt-4 md:mt-7">
                    <div
                        className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-0 md:justify-between border md:rounded-full rounded-2xl md:px-10 px-5 md:py-5 py-4 text-white"
                        style={{
                            borderColor: "rgba(255, 241, 185, 0.4)",
                            background: "linear-gradient(135deg, rgba(0,0,0,0.6) 0%, rgba(20,18,15,0.8) 100%)",
                        }}
                    >
                        <StatusPill icon="medal" label="Silver Status – Registered" iconImage="/icon1.png"/>
                        <div className="hidden md:block flex-1 min-w-[24px] max-w-[120px] h-px shrink-0 bg-white" aria-hidden />
                        <StatusPill icon="flame" label="Gold Status – Active Trader" iconImage="/icon2.png" />
                        <div className="hidden md:block flex-1 min-w-[24px] max-w-[120px] h-px shrink-0 bg-white" aria-hidden />
                        <StatusPill icon="crown" label="Platinum Status – Qualified" iconImage="/icon1.png" />
                    </div>
                </section>

                {/* TWO BIG PROGRESS CARDS */}
                <section className="mt-4 md:mt-7 grid grid-cols-1 gap-6 md:grid-cols-2">
                    <ProgressCard
                        title="Net Deposit"
                        icon="deposit"
                        value="$0"
                        target="$500,000"
                        targetLabel="Target $500k"
                        percent={0}
                        note="$500,000 more to reach the target"
                    />
                    <ProgressCard
                        title="Trading Volume"
                        icon="volume"
                        value="$0"
                        target="$1,500,000"
                        targetLabel="Target $1.5M"
                        percent={0}
                        note="$1,500,000 remaining"
                    />
                </section>

                {/* 3 SMALL CARDS - two cards per image: campaign + milestone */}
                <section className="mt-4 md:mt-7 grid grid-cols-1 gap-4 md:grid-cols-2">
                    <MiniStat
                        icon="hourglass"
                        title="CAMPAIGN ENDS IN"
                        big="241"
                        sub="days"
                    />
                    <MiniStat
                        icon="trophy"
                        title="MILESTONE"
                        big="0%"
                        sub="Halfway to VIP"
                    />
                </section>
            </div>
        </div>
    )
}


function StatusPill({ icon, label ,iconImage}) {
    const IconComponent = icon === "medal" ? FaMedal : icon === "flame" ? IoFlame : FaCrown;
    return (
        <div className="flex items-center gap-3 shrink-0">
            <div
                className="relative flex h-10 w-10 md:h-11 md:w-11 shrink-0 items-center justify-center rounded-full"
                style={{
                    background: GOLD_ACCENT,
                    boxShadow: `0 0 0 2px rgba(180, 135, 85, 0.4), 0 0 16px ${GOLD_ACCENT}66`,
                }}
            >
                <Image src={iconImage} alt={icon} width={50} height={50} className="h-full w-full object-contain" />
            </div>
            <span className="text-[14px] md:text-[15px] lg:text-[16px] font-semibold text-white whitespace-nowrap">{label}</span>
        </div>
    );
}

function ProgressCard({ title, icon, value, target, targetLabel, percent, note }) {
    const TitleIcon = icon === "deposit" ? HiOutlineCurrencyDollar : TbChartLine;
    return (
        <div
            className="rounded-[18px] border md:p-6 p-4 text-white"
            style={{
                borderColor: GOLD_BORDER,
                background: "rgba(0, 0, 0, 0.5)",
                boxShadow: "0 24px 60px rgba(0,0,0,0.30)",
            }}
        >
            <div className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-2">
                    <TitleIcon className="h-5 w-5 md:h-6 md:w-6 shrink-0" style={{ color: GOLD_ACCENT }} />
                    <div className="text-[14px] md:text-[16px] font-bold text-white">{title}</div>
                </div>
                <span
                    className="inline-flex h-[28px] items-center rounded-full border px-4 text-[12px] md:text-[14px] font-medium"
                    style={{ borderColor: GOLD_BORDER, color: GOLD_ACCENT }}
                >
                    {targetLabel}
                </span>
            </div>

            <div className="mt-5 flex items-end justify-between gap-2">
                <div className="text-[20px] md:text-[24px] font-bold text-white">{value}</div>
                <div className="text-[14px] md:text-[16px] font-light text-white/90">{target}</div>
            </div>

            {/* progress bar - dark track, golden border; fill when percent > 0 */}
            <div
                className="mt-5 h-[14px] w-full overflow-hidden rounded-full border"
                style={{ borderColor: GOLD_BORDER, background: "rgba(255,255,255,0.08)" }}
            >
                <div
                    className="h-full rounded-full transition-[width]"
                    style={{
                        width: `${Math.min(100, Math.max(0, percent))}%`,
                        background: GOLD_ACCENT,
                    }}
                />
            </div>

            <div className="mt-5 text-[26px] font-bold text-white">{percent}%</div>

            {/* note pill - gold border, gold text, lightning bolt */}
            <div
                className="mt-4 inline-flex items-center gap-2 rounded-full border px-4 py-[10px] text-[12px] md:text-[14px] font-medium"
                style={{ borderColor: GOLD_BORDER, color: GOLD_ACCENT }}
            >
                <IoFlash className="h-4 w-4 shrink-0" />
                <span>{note}</span>
            </div>
        </div>
    );
}

function MiniStat({ icon, title, big, sub }) {
    const IconComponent = icon === "hourglass" ? IoHourglassOutline : FaTrophy;
    const GOLD_BEIGE = "#C9A962";
    return (
        <div
            className="relative overflow-hidden rounded-[24px] border md:px-6 px-4 md:py-6 py-4"
            style={{
                borderColor: GOLD_BORDER,
                background: "rgba(0, 0, 0, 0.6)",
                boxShadow: `0 0 24px ${GOLD_ACCENT}22, 0 0 48px ${GOLD_ACCENT}11`,
            }}
        >
            <div className="flex items-center gap-4">
                <div
                    className="relative flex h-[44px] w-[44px] md:h-[52px] md:w-[52px] shrink-0 items-center justify-center rounded-full border-2"
                    style={{
                        borderColor: GOLD_BEIGE,
                        background: "#0a0a0a",
                        boxShadow: `0 0 12px ${GOLD_ACCENT}44`,
                    }}
                >
                    <IconComponent className="h-6 w-6 md:h-7 md:w-7" style={{ color: GOLD_BEIGE }} />
                </div>
                <div className="flex-1 min-w-0">
                    <div className="text-[11px] md:text-[13px] font-semibold tracking-[0.08em] uppercase text-white/70">
                        {title}
                    </div>
                    <div className="mt-2 flex items-baseline gap-2">
                        <span className="text-[22px] md:text-[28px] font-bold leading-tight text-white">{big}</span>
                        <span className="text-[14px] md:text-[16px] text-white">{sub}</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

function RewardCard({ label }) {
    return (
        <div className="flex flex-col items-center gap-5">
            <div
                className="h-[150px] w-full rounded-[12px] bg-white/85"
                style={{ boxShadow: "0 18px 38px rgba(0,0,0,0.28)" }}
            />
            <div className="text-center text-[10px] font-semibold text-white/70">
                {label}
            </div>
        </div>
    );
}

function Chip({ label }) {
    return (
        <span className="inline-flex h-[30px] items-center rounded-full border border-white/15 bg-white/10 px-6 text-[10px] font-semibold text-white/70 backdrop-blur-[8px]">
            {label}
        </span>
    );
}