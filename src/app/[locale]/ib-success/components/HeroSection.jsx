"use client";

import SimpleNavigationMenu from "@/app/[locale]/components/SimpleNavigationMenu";

export default function HeroSection() {
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
                    className="relative overflow-hidden md:mt-20 mt-8 rounded-[30px] border border-[#FFA6A6] px-10 py-10"
                    style={{
                        backgroundColor: "#C0C0C096",
                    }}
                >
                    <div className="flex items-start justify-between gap-6">
                        <div>
                            <h1 className="text-[28px] md:text-[40px] font-semibold tracking-[-0.01em]"
                                style={{
                                    background: "linear-gradient(180deg, #956E42 0%, #E9DDCF 100%)",
                                    backgroundClip: "text",
                                    WebkitBackgroundClip: "text",
                                    WebkitTextFillColor: "transparent",
                                }}
                            >
                                Welcome
                            </h1>

                            <div className="mt-6 flex flex-wrap items-center gap-3 text-[14px] md:text-[16px] text-white">
                                <span className="font-semibold text-white/75">VIP Annual Invitation 2026</span>
                                <span className="h-[2px] w-[2px] rounded-full bg-white/40" />
                                <span className="text-white/70">Your passage to the exclusive circle</span>
                            </div>

                            <p className="mt-6 text-[14px] md:text-[16px] leading-[1.9] text-white">
                                You are on your way to qualifying for our exclusive annual VIP invitation.
                            </p>
                        </div>

                        <div className="shrink-0">
                            <span className="inline-flex h-[30px] items-center rounded-full border border-white px-6 text-[11px] font-semibold text-white">
                                Qualification: In Progress
                            </span>
                        </div>
                    </div>
                </section>

                {/* STATUS ROW */}
                <section className="mt-7">
                    <div className="grid grid-cols-1 gap-3 md:grid-cols-3 border border-[#FFF1B9] text-white rounded-full  px-6 py-4">
                        <StatusPill label="Silver Status – Registered" active />
                        <StatusPill label="Gold Status – Active Trader" />
                        <StatusPill label="Platinum Status – Qualified" />
                    </div>
                </section>

                {/* TWO BIG PROGRESS CARDS */}
                <section className="mt-7 grid grid-cols-1 gap-6 md:grid-cols-2">
                    <ProgressCard
                        title="Net Deposit"
                        value="$310,000"
                        target="$500,000"
                        percent={62}
                        note="$190,000 more to reach the target"
                    />
                    <ProgressCard
                        title="Trading Volume"
                        value="$38,000,000"
                        target="$120,000,000"
                        percent={31}
                        note="$82,000,000 remaining"
                    />
                </section>

                {/* 3 SMALL CARDS */}
                <section className="mt-7 grid grid-cols-1 gap-4 md:grid-cols-3">
                    <MiniStat
                        title="CAMPAIGN ENDS IN"
                        big="67"
                        sub="days"
                        accent="text-white"
                    />
                    <MiniStat
                        title="MILESTONE"
                        big="50%"
                        sub="Halfway to VIP"
                        accent="text-[#D7B892]"
                    />
                    <MiniStat
                        title="YOUR RANK"
                        big="#18"
                        sub="among all participants"
                        accent="text-[#D7B892]"
                    />
                </section>
            </div>
        </div>
    )
}


function StatusPill({ label, active = false }) {
    return (
        <div className="">
            <div className="flex items-center text-white justify-center gap-3 text-[14px] md:text-[16px] font-semibold">
                <span
                    className={[
                        "h-[20px] w-[20px] md:h-[24px] md:w-[24px] rounded-full",
                        active ? "bg-white" : "bg-white",
                    ].join(" ")}
                />
                <span className="text-white">{label}</span>
            </div>
        </div>
    );
}

function ProgressCard({ title, value, target, percent, note }) {
    return (
        <div
            className="rounded-[18px] border border-white/10 bg-[#88888896] p-6 text-white backdrop-blur-[10px]"
            style={{ boxShadow: "0 24px 60px rgba(0,0,0,0.30)" }}
        >
            <div className="flex items-start justify-between gap-4">
                <div className="flex items-center gap-1.5">
                    <span className="h-[20px] w-[20px] md:h-[24px] md:w-[24px] rounded-full bg-white" />
                    <div className="text-[14px] md:text-[16px] font-semibold text-white">{title}</div>
                </div>

                <span className="inline-flex h-[28px] items-center rounded-full border border-white/25 bg-white/10 px-4 text-[12px] md:text-[14px] font-light text-white">
                    Target {title === "Net Deposit" ? "$500K" : "$120M"}
                </span>
            </div>

            <div className="mt-5 flex items-end justify-between">
                <div className="text-[20px] md:text-[24px] font-semibold text-white">{value}</div>
                <div className="text-[14px] md:text-[16px] font-light text-white">{target}</div>
            </div>

            {/* progress bar */}
            <div className="mt-5 h-[14px] w-full rounded-full bg-white/55">
                <div
                    className="h-[14px] rounded-full bg-[#F5A6A8]"
                    style={{ width: `${percent}%` }}
                />
            </div>

            <div className="mt-5 text-[26px] font-light text-white/90">{percent}%</div>

            {/* note pill */}
            <div className="mt-4 inline-flex items-center gap-3 rounded-full border border-[#FFFCA4] bg-white/10 px-4 py-[8px] text-[12px] md:text-[14px] text-white">
                <span className="h-[20px] w-[20px] md:h-[24px] md:w-[24px] rounded-full bg-white" />
                <span>{note}</span>
            </div>
        </div>
    );
}

function MiniStat({ title, big, sub, accent = "text-white" }) {
    return (
        <div
            className="rounded-[24px] border border-white bg-[#72727296] px-6 py-6"
        >
            <div className="flex items-start gap-4">
                <div className="mt-[2px] h-[28px] w-[28px] md:h-[32px] md:w-[32px] rounded-full bg-white" />
                <div className="flex-1">
                    <div className="text-[12px] md:text-[14px] font-semibold tracking-[0.8px] text-white">
                        {title}
                    </div>
                    <div className="flex mt-2 items-end gap-2">
                        <div className={`text-[22px] md:text-[28px] leading-[1.2] font-semibold ${accent}`}>{big}</div>
                        <div className="pb-[2px] text-[12px] md:text-[14px] text-white">{sub}</div>
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