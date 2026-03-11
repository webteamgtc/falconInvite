"use client";

import { useEffect, useMemo, useState } from "react";
import SimpleNavigationMenu from "@/app/[locale]/components/SimpleNavigationMenu";
import { FaMedal, FaCrown, FaTrophy } from "react-icons/fa";
import { IoFlame, IoHourglassOutline } from "react-icons/io5";
import Image from "next/image";

const GOLD_BORDER = "#7C6B4C";
const GOLD_ACCENT = "#B48755";

export default function HeroSection({ email = "Alexander" }) {
    const remainingDays = useRemainingDaysToOct31_2026();
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
                                Welcome, {email}
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

                            <div className="md:mt-6 mt-3 flex min-h-[1.5rem] overflow-hidden">
                                <div
                                    className="w-2 image.png shrink-0"
                                    style={{ background: "#C08942" }}
                                />
                                <div
                                    className="flex flex-1 items-center py-2 pl-4 pr-5"
                                    style={{
                                        background: "linear-gradient(90deg, #2b251f 0%, #29241e 45%, rgba(89, 66, 37, 0.4) 60%, rgba(0, 0, 0, 0) 100%)",
                                    }}
                                >
                                    <p className="text-[13px] md:text-[16px] font-normal leading-snug italic text-white">
                                    Your VIP invitation is waiting, achieve the target through Net Deposit or Trading Volume and watch your progress update daily as you move toward exclusive luxury benefits. 
                                    </p>
                                   
                                </div>
                                
                            </div>
                             <a href="/privacy-policy" className="flex flex-col pt-4 underline italic">Terms & Condtions Apply</a>
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
                                <svg className="h-5 w-5 shrink-0" xmlns="http://www.w3.org/2000/svg" width="21" height="23" viewBox="0 0 21 23" fill="none">
                                    <path d="M10.5 0C16.2991 0 21 4.70085 21 10.5C21 16.2991 16.2991 21 10.5 21C4.70085 21 0 16.2991 0 10.5C0 4.70085 4.70085 0 10.5 0ZM10.5 4.2C10.2215 4.2 9.95445 4.31062 9.75754 4.50754C9.56062 4.70445 9.45 4.97152 9.45 5.25V10.5C9.45006 10.7785 9.56072 11.0455 9.75765 11.2423L12.9076 14.3923C13.1057 14.5836 13.3709 14.6894 13.6462 14.6871C13.9215 14.6847 14.1849 14.5742 14.3796 14.3796C14.5742 14.1849 14.6847 13.9215 14.6871 13.6462C14.6894 13.3709 14.5836 13.1057 14.3923 12.9076L11.55 10.0653V5.25C11.55 4.97152 11.4394 4.70445 11.2425 4.50754C11.0455 4.31062 10.7785 4.2 10.5 4.2Z" fill="url(#paint0_linear_4609_408)" />
                                    <defs>
                                        <linearGradient id="paint0_linear_4609_408" x1="10.5" y1="0" x2="10.5" y2="22.9047" gradientUnits="userSpaceOnUse">
                                            <stop stop-color="#956E42" />
                                            <stop offset="1" stop-color="#E9DDCF" />
                                        </linearGradient>
                                    </defs>
                                </svg>
                                Qualification: In Progress
                            </span>
                        </div>
                    </div>
                </section>

                {/* STATUS ROW - horizontal capsule with golden icon circles and connectors */}
                <section className="mt-4 md:mt-7">
                    <div
                        className="flex flex-col md:flex-row md:items-center items-start justify-center gap-2 md:gap-0 md:justify-between border md:rounded-full rounded-2xl md:px-10 px-5 md:py-5 py-4 text-white"
                        style={{
                            borderColor: "rgba(255, 241, 185, 0.4)",
                            background: "linear-gradient(135deg, rgba(0,0,0,0.6) 0%, rgba(20,18,15,0.8) 100%)",
                        }}
                    >
                        <StatusPill icon="medal" label="Silver Status – Registered" iconImage="/icon1.png" />
                        <div className="hidden md:block flex-1 min-w-[24px] max-w-[120px] h-px shrink-0 bg-white" aria-hidden />
                        <StatusPill icon="flame" label="Gold Status – Active Trader" iconImage="/icon2.png" />
                        <div className="hidden md:block flex-1 min-w-[24px] max-w-[120px] h-px shrink-0 bg-white" aria-hidden />
                        <StatusPill icon="crown" label="Platinum Status – Qualified" iconImage="/icon3.png" />
                    </div>
                </section>

                {/* TWO BIG PROGRESS CARDS */}
                <section className="mt-4 md:mt-7 grid grid-cols-1 gap-6 md:grid-cols-2">
                    <ProgressCard
                        title="Net Deposit"
                        icon="/doller.svg"
                        value="$0"
                        target="$500,000"
                        targetLabel="Target $500k"
                        percent={0}
                        note="$500,000 more to reach the target"
                    />
                    <ProgressCard
                        title="Trading Volume"
                        icon="/trade.svg"
                        value="$0"
                        target="1,000,000,000"
                        targetLabel="Target $1 Billion"
                        percent={0}
                        note="$1,000,000,000 remaining"
                    />
                </section>

                {/* 3 SMALL CARDS - two cards per image: campaign + milestone */}
                {/* MINI STATS - single pill container with Milestone + Campaign */}
                <section className="mt-4 max-w-3xl mx-auto md:mt-10">
                    <div
                        className="flex flex-row sm:flex-row items-stretch sm:items-center justify-between gap-4 sm:gap-6 rounded-full border px-3 py-3 md:px-10 md:py-5"
                        style={{
                            borderRadius: "64px",
                            border: "1px solid #7C6B4C",
                            background: "#01010180",
                        }}
                    >
                        {/* Milestone - left */}
                        <div className="flex items-center gap-4 min-w-0">
                            <div
                                className="relative flex h-8 w-8 md:h-14 md:w-14 shrink-0 items-center justify-center rounded-full"
                                style={{
                                    background: "#010101",
                                    border: "1px solid #FFD382",
                                }}
                            >
                                <svg className="h-5 w-5 md:h-8 md:w-8 shrink-0" xmlns="http://www.w3.org/2000/svg" width="33" height="33" viewBox="0 0 33 33" fill="none">
                                    <path d="M7.33333 33V29.3333H14.6667V23.65C13.1694 23.3139 11.8329 22.6802 10.6572 21.7488C9.48139 20.8175 8.61789 19.6484 8.06667 18.2417C5.775 17.9667 3.85794 16.9663 2.3155 15.2405C0.773055 13.5147 0.00122222 11.4901 0 9.16667V7.33333C0 6.325 0.359333 5.46211 1.078 4.74467C1.79667 4.02722 2.65956 3.66789 3.66667 3.66667H7.33333V0H25.6667V3.66667H29.3333C30.3417 3.66667 31.2052 4.026 31.9238 4.74467C32.6425 5.46333 33.0012 6.32622 33 7.33333V9.16667C33 11.4889 32.2282 13.5135 30.6845 15.2405C29.1408 16.9675 27.2238 17.9679 24.9333 18.2417C24.3833 19.6472 23.5204 20.8163 22.3447 21.7488C21.1689 22.6814 19.8318 23.3151 18.3333 23.65V29.3333H25.6667V33H7.33333ZM7.33333 14.3V7.33333H3.66667V9.16667C3.66667 10.3278 4.00278 11.3746 4.675 12.3072C5.34722 13.2397 6.23333 13.904 7.33333 14.3ZM25.6667 14.3C26.7667 13.9028 27.6528 13.2379 28.325 12.3053C28.9972 11.3728 29.3333 10.3266 29.3333 9.16667V7.33333H25.6667V14.3Z" fill="#FFD382" />
                                </svg>
                            </div>
                            <div className="min-w-0">
                                <div className="text-[11px] md:text-[14px] font-medium tracking-wider leading-[1.0] uppercase text-[#666666]">
                                    MILESTONE
                                </div>
                                <div className="">
                                    <span className="text-[22px] md:text-[32px] font-bold text-white">0%</span> <br/>
                                    <span className="text-[10px] md:text-[14px] font-normal" style={{ color: "#FFD382" }}>
                                        Halfway to VIP
                                    </span>
                                </div>
                            </div>
                        </div>
                        {/* Campaign Ends In - right */}
                        <div className="flex items-center gap-4 min-w-0">
                            <div
                                className="relative flex h-8 w-8 md:h-14 md:w-14 shrink-0 items-center justify-center rounded-full"
                                style={{
                                    background: "#010101",
                                    border: "1px solid #FFD382",
                                }}
                            >
                                <svg className="h-5 w-5 md:h-8 md:w-8 shrink-0" xmlns="http://www.w3.org/2000/svg" width="31" height="33" viewBox="0 0 31 33" fill="none">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M0 1.40426C0 1.03182 0.15191 0.674646 0.422311 0.411297C0.692712 0.147948 1.05946 0 1.44186 0H29.5581C29.9405 0 30.3073 0.147948 30.5777 0.411297C30.8481 0.674646 31 1.03182 31 1.40426C31 1.77669 30.8481 2.13386 30.5777 2.39721C30.3073 2.66056 29.9405 2.80851 29.5581 2.80851H28.3621C28.6 7.18628 27.0075 10.1865 25.2736 12.3813C24.6464 13.1754 23.95 13.919 23.3798 14.5284C23.1274 14.7987 22.8982 15.0431 22.7122 15.253C22.377 15.6301 22.1535 15.9179 22.0143 16.1539C21.8788 16.3856 21.8745 16.4853 21.8745 16.5C21.8745 16.5147 21.8788 16.6144 22.0143 16.8461C22.1535 17.0821 22.377 17.3699 22.7122 17.747C22.8982 17.9576 23.1267 18.2013 23.3798 18.4709C23.95 19.0803 24.6464 19.8246 25.2736 20.6187C27.0075 22.8135 28.6 25.8137 28.3621 30.1915H29.5581C29.9405 30.1915 30.3073 30.3394 30.5777 30.6028C30.8481 30.8661 31 31.2233 31 31.5957C31 31.9682 30.8481 32.3254 30.5777 32.5887C30.3073 32.8521 29.9405 33 29.5581 33H1.44186C1.05946 33 0.692712 32.8521 0.422311 32.5887C0.15191 32.3254 0 31.9682 0 31.5957C0 31.2233 0.15191 30.8661 0.422311 30.6028C0.692712 30.3394 1.05946 30.1915 1.44186 30.1915H2.63788C2.4007 25.8137 3.99323 22.8135 5.72707 20.6187C6.35428 19.8246 7.0507 19.081 7.62095 18.4716C7.874 18.2013 8.10254 17.9569 8.28926 17.747C8.62449 17.3699 8.84798 17.0821 8.98639 16.8461C9.12265 16.6144 9.12698 16.5147 9.12698 16.5C9.12698 16.4853 9.12265 16.3856 8.98639 16.1539C8.84798 15.9179 8.62449 15.6301 8.28926 15.253C8.10254 15.0424 7.87472 14.7987 7.62167 14.5291C7.0507 13.9197 6.35428 13.1754 5.72707 12.3813C3.99323 10.1865 2.4007 7.18628 2.63788 2.80851H1.44186C1.05946 2.80851 0.692712 2.66056 0.422311 2.39721C0.15191 2.13386 0 1.77669 0 1.40426ZM5.52665 30.1915H25.4741C25.7105 26.5404 24.4215 24.1455 22.9883 22.3312C22.4303 21.6241 21.8961 21.0554 21.3698 20.4951C21.0857 20.1954 20.806 19.8918 20.5307 19.5844C20.1608 19.1681 19.7903 18.7159 19.5105 18.2392C19.2279 17.7575 18.9907 17.1719 18.9907 16.5C18.9907 15.8281 19.2287 15.2418 19.5105 14.7608C19.7903 14.2834 20.1608 13.8319 20.5307 13.4156C20.8097 13.1017 21.0886 12.8047 21.3698 12.5049C21.8961 11.9446 22.4296 11.3759 22.9883 10.6688C24.4215 8.85453 25.7105 6.46028 25.4741 2.80851H5.52593C5.29019 6.45957 6.57921 8.85453 8.01314 10.6688C8.57042 11.3752 9.10463 11.9446 9.63163 12.5049C9.91279 12.804 10.1911 13.1017 10.4701 13.4156C10.8399 13.8319 11.2105 14.2841 11.4902 14.7608C11.7728 15.2418 12.0107 15.8281 12.0107 16.5C12.0107 17.1719 11.7728 17.7582 11.4902 18.2392C11.2105 18.7166 10.8399 19.1681 10.4701 19.5844C10.1911 19.8983 9.91207 20.1953 9.63091 20.4951C9.10463 21.0554 8.57114 21.6241 8.01242 22.3312C6.57921 24.1455 5.29019 26.5397 5.52665 30.1915ZM15.5 20.2578C14.614 20.2578 13.6912 20.6018 12.8434 21.0891C11.9855 21.5827 11.1427 22.2574 10.403 23.001C9.66263 23.7446 9.00658 24.5738 8.53221 25.3896C8.06577 26.1894 7.73342 27.0438 7.73342 27.8211C7.73342 28.0073 7.80937 28.1859 7.94457 28.3176C8.07977 28.4493 8.26315 28.5232 8.45435 28.5232H22.5457C22.7369 28.5232 22.9202 28.4493 23.0554 28.3176C23.1906 28.1859 23.2666 28.0073 23.2666 27.8211C23.2666 27.0438 22.9335 26.1894 22.4678 25.3896C21.9927 24.5745 21.3374 23.7446 20.597 23.001C19.8566 22.2574 19.0145 21.5827 18.1559 21.0891C17.3081 20.6018 16.3853 20.2578 15.5 20.2578ZM15.5 6.66038C17.6044 6.66038 19.7463 6.96862 21.4044 7.61457C21.575 7.68112 21.713 7.80858 21.7903 7.97092C21.8677 8.13326 21.8784 8.31822 21.8204 8.48802C21.4109 9.68374 20.3425 10.9834 19.1984 11.9664C18.6166 12.4663 17.9887 12.9072 17.373 13.2281C16.7703 13.5412 16.1171 13.7715 15.5014 13.7715C14.8865 13.7715 14.2326 13.5412 13.6299 13.2281C13.0142 12.9072 12.3856 12.4663 11.8038 11.9664C10.659 10.9834 9.58909 9.68445 9.1796 8.48802C9.12143 8.31804 9.13217 8.13284 9.20964 7.97032C9.28711 7.80781 9.42544 7.68029 9.5963 7.61387C11.2537 6.96932 13.3949 6.66109 15.5 6.66038Z" fill="#FFD382" />
                                </svg>
                            </div>
                            <div className="min-w-0">
                            <div className="text-[11px] md:text-[14px] font-medium tracking-wider leading-[1.0] uppercase text-[#666666]">
                            CAMPAIGN ENDS IN
                                </div>
                                <div className="flex items-baseline gap-2">
                                    <span className="text-[22px] md:text-[32px] font-bold text-white">{remainingDays}</span>
                                    <span className="text-[10px] md:text-[14px] font-normal" style={{ color: "#FFD382" }}>
                                        {remainingDays === 1 ? "day" : "days"}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}

function calcRemainingDaysToOct31_2026(now = new Date()) {
    // Local timezone. Count whole days remaining until end of Oct 31, 2026.
    const target = new Date(2026, 9, 31, 23, 59, 59, 999); // months are 0-based
    const msPerDay = 24 * 60 * 60 * 1000;
    const diffMs = target.getTime() - now.getTime();
    return Math.max(0, Math.ceil(diffMs / msPerDay));
}

function useRemainingDaysToOct31_2026() {
    const initial = useMemo(() => calcRemainingDaysToOct31_2026(), []);
    const [days, setDays] = useState(initial);

    useEffect(() => {
        // Refresh periodically so it updates after midnight without a reload.
        const id = setInterval(() => setDays(calcRemainingDaysToOct31_2026()), 60 * 60 * 1000);
        return () => clearInterval(id);
    }, []);

    return days;
}


function StatusPill({ icon, label, iconImage }) {
    return (
        <div className="flex items-center gap-3 shrink-0">
            <div
                className="relative flex h-6  w-6 md:h-10 md:w-10 shrink-0 items-center justify-center rounded-full"

            >
                <Image src={iconImage} alt={icon} width={50} height={50} className="h-full w-full object-contain" />
            </div>
            <span className="text-[12px] md:text-[15px] lg:text-[16px] font-semibold text-white whitespace-nowrap">{label}</span>
        </div>
    );
}

function ProgressCard({ title, icon, value, target, targetLabel, percent, note }) {
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
                    <Image src={icon} alt={title} width={80} height={80} className="h-8 w-8 rounded-full p-1.5 bg-[#956E4233] border border-[#956E42] shrink-0" />
                    <div className="text-[16px] md:text-[20px] font-bold text-white">{title}</div>
                </div>
                <span
                    className="inline-flex h-[32px] items-center rounded-full border px-4 text-[12px] md:text-[14px] font-normal"
                    style={{
                        borderColor: GOLD_BORDER,
                        background: "linear-gradient(180deg, #956E42 0%, #E9DDCF 100%)",
                        backgroundClip: "text",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                    }}
                >
                    {targetLabel}
                </span>
            </div>

            <div className="md:mt-5 mt-3 flex items-end justify-between gap-2">
                <div className="text-[24px] md:text-[26px] font-bold text-white">{value}</div>
                <div className="text-[18px] md:text-[20px] font-light text-white/90">{target}</div>
            </div>

            {/* progress bar - dark track, golden border; fill when percent > 0 */}
            <div
                className="md:mt-5 mt-3 h-[22px] md:h-[26px] w-full overflow-hidden rounded-full border"
                style={{ borderColor: GOLD_BORDER, background: "#010101" }}
            >
                <div
                    className="h-full rounded-full transition-[width]"
                    style={{
                        width: `${Math.min(100, Math.max(0, percent))}%`,
                        background: GOLD_ACCENT,
                    }}
                />
            </div>

            <div className="md:mt-5 mt-3 text-[26px] md:text-[32px] font-normal text-white">{percent}%</div>

            {/* note pill - gold border, gold text, lightning bolt */}
            <div
                className="md:mt-4 mt-3 inline-flex items-center gap-4 rounded-full border px-5 py-[12px] text-[12px] md:text-[16px] bg-[#956E4233] font-medium"
                style={{
                    borderColor: "#7C6B4C",
                    background: "#956E4233",
                }}
            >
                <svg xmlns="http://www.w3.org/2000/svg" width="13" height="20" viewBox="0 0 13 20" fill="none">
                    <path d="M10.0624 0C10.9371 0 11.5227 0.818183 11.323 1.60253L11.272 1.7594L9.0899 7.27957H11.7005C12.725 7.27957 13.2939 8.36023 12.8446 9.18047L12.7406 9.34041L4.97114 19.6415C4.40949 20.3849 3.28515 19.8712 3.38292 19.0212L4.19939 11.9365H1.29962C0.356255 11.9365 -0.246997 10.9891 0.0983127 10.1576L0.103513 10.1463L4.16611 0.787424C4.26483 0.554559 4.4311 0.355611 4.64407 0.21553C4.85704 0.0754486 5.10723 0.000471143 5.36325 0H10.0624Z" fill="url(#paint0_linear_4594_258)" />
                    <defs>
                        <linearGradient id="paint0_linear_4594_258" x1="6.5" y1="0" x2="6.5" y2="20" gradientUnits="userSpaceOnUse">
                            <stop stop-color="#956E42" />
                            <stop offset="1" stop-color="#E9DDCF" />
                        </linearGradient>
                    </defs>
                </svg>
                <span style={{
                    background: "linear-gradient(180deg, #956E42 0%, #E9DDCF 100%)",
                    backgroundClip: "text",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                }}>{note}</span>
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