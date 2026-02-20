"use client";

import { useState } from "react";
import { toast } from "react-toastify";
import DatePicker from "react-datepicker";
import { shift } from "@floating-ui/react";
import "react-datepicker/dist/react-datepicker.css";

function parseYYYYMM(str) {
    if (!str || !/^\d{4}-\d{2}$/.test(str)) return null;
    const [y, m] = str.split("-").map(Number);
    return new Date(y, m - 1, 1);
}
function formatToYYYYMM(date) {
    if (!date || !(date instanceof Date)) return "";
    const y = date.getFullYear();
    const m = String(date.getMonth() + 1).padStart(2, "0");
    return `${y}-${m}`;
}

const inputClass =
    "h-[48px] w-full rounded-xl border border-[#E5E7EB] bg-white px-4 text-sm font-medium text-[#1a2256] outline-none transition placeholder:text-[#9CA3AF] focus:border-[#B48755] focus:ring-2 focus:ring-[#B48755]/20 disabled:opacity-60";
const datePickerInputClass =
    "h-[40px] w-full rounded-lg border border-[#E5E7EB] bg-white px-3 py-2 text-sm font-medium text-[#1a2256] outline-none transition placeholder:text-[#9CA3AF] focus:border-[#B48755] focus:ring-2 focus:ring-[#B48755]/20 disabled:opacity-60";

export default function IbPerformanceForm() {
    const [email, setEmail] = useState("");
    const [startMonth, setStartMonth] = useState("2025-01");
    const [endMonth, setEndMonth] = useState("2025-10");
    const [loading, setLoading] = useState(false);
    const [result, setResult] = useState(null);
    const [error, setError] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(null);
        setResult(null);

        if (!email?.trim()) {
            toast.error("Email is required");
            return;
        }
        if (!startMonth?.trim()) {
            toast.error("Start month is required");
            return;
        }
        if (!endMonth?.trim()) {
            toast.error("End month is required");
            return;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email.trim())) {
            toast.error("Please enter a valid email address");
            return;
        }

        const monthRegex = /^\d{4}-\d{2}$/;
        if (!monthRegex.test(startMonth) || !monthRegex.test(endMonth)) {
            toast.error("Months must be in YYYY-MM format (e.g. 2025-01)");
            return;
        }

        setLoading(true);
        try {
            const params = new URLSearchParams({
                email: email.trim(),
                startMonth: startMonth.trim(),
                endMonth: endMonth.trim(),
            });
            const res = await fetch(`/api/ib-new?${params}`, {
                method: "GET",
                credentials: "include",
            });
            const data = await res.json();

            if (!res.ok) {
                setError(data?.error || data?.upstream?.message || "Request failed");
                toast.error(data?.error || "Something went wrong");
                return;
            }

            setResult(data);
            toast.success("Data loaded successfully");
        } catch (err) {
            setError(err?.message || "Request failed");
            toast.error(err?.message || "Something went wrong");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="w-full">
            <form
                onSubmit={handleSubmit}
                className="relative overflow-hidden rounded-2xl bg-white p-5 md:p-7 shadow-lg shadow-black/10 ring-1 ring-[#E9DDCF]/40"
            >
                <div
                    className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[#956E42] via-[#B48755] to-[#E9DDCF]"
                    aria-hidden
                />
                <div className="pt-1">
                    <h3
                        className="text-xl font-bold tracking-tight"
                        style={{
                            background: "linear-gradient(135deg, #1a2256 0%, #2d3a6b 100%)",
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent",
                            backgroundClip: "text",
                        }}
                    >
                        IB Performance
                    </h3>
                    <p className="mt-1 text-sm text-[#868686]">
                        Query your performance by email and date range
                    </p>
                </div>

                <div className="mt-6 space-y-4 text-left">
                    <div>
                        <label className="mb-1.5 block text-sm font-medium text-[#1a2256]">
                            Email
                        </label>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="your@email.com"
                            className={inputClass}
                            disabled={loading}
                        />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <label className="mb-1.5 block text-sm font-medium text-[#1a2256]">
                                Start month
                            </label>
                        <DatePicker
                            selected={parseYYYYMM(startMonth)}
                            onChange={(date) => setStartMonth(formatToYYYYMM(date))}
                            dateFormat="yyyy-MM"
                            showMonthYearPicker
                            placeholderText="Select start month"
                            className={datePickerInputClass}
                            disabled={loading}
                            popperClassName="ib-datepicker-popper"
                            calendarClassName="ib-datepicker-calendar"
                            popperModifiers={[shift({ padding: 12 })]}
                        />
                        </div>

                        <div>
                            <label className="mb-1.5 block text-sm font-medium text-[#1a2256]">
                                End month
                            </label>
                        <DatePicker
                            selected={parseYYYYMM(endMonth)}
                            onChange={(date) => setEndMonth(formatToYYYYMM(date))}
                            dateFormat="yyyy-MM"
                            showMonthYearPicker
                            placeholderText="Select end month"
                            minDate={parseYYYYMM(startMonth)}
                            className={datePickerInputClass}
                            disabled={loading}
                            popperClassName="ib-datepicker-popper"
                            calendarClassName="ib-datepicker-calendar"
                            popperModifiers={[shift({ padding: 12 })]}
                        />
                        </div>
                    </div>

                </div>

                <button
                    type="submit"
                    disabled={loading}
                    className="mt-6 h-12 w-full rounded-xl font-semibold text-white shadow-md transition hover:shadow-lg hover:opacity-95 disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:shadow-md"
                    style={{
                        background: "linear-gradient(135deg, #956E42 0%, #B48755 50%, #c9a574 100%)",
                    }}
                >
                    {loading ? (
                        <span className="inline-flex items-center gap-2">
                            <span className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
                            Loading...
                        </span>
                    ) : (
                        "Get performance"
                    )}
                </button>

                {error && (
                    <div className="mt-4 rounded-xl border border-red-200 bg-red-50/80 px-4 py-3 text-sm text-red-700">
                        {error}
                    </div>
                )}

                {result?.ok && result?.data && (
                    <div className="mt-6 space-y-4">
                        {(() => {
                            const items = Array.isArray(result.data?.result)
                                ? result.data.result
                                : [];
                            const totalNet = items.reduce((sum, row) => sum + (Number(row?.NET) || 0), 0);
                            const TARGET = 500000;
                            const percentage = Math.min(Math.max((totalNet / TARGET) * 100, 0), 100);

                            return (
                                <>
                                    <div className="rounded-xl border border-[#E9DDCF]/60 bg-gradient-to-br from-[#faf8f5] to-white p-5">
                                        <p className="mb-3 text-xs font-medium uppercase tracking-wider text-[#868686]">
                                            Progress to target
                                        </p>
                                        <div className="mb-2 flex items-baseline justify-between gap-2">
                                            <span className="text-2xl font-bold text-[#1a2256]">
                                                {totalNet.toLocaleString()}
                                            </span>
                                            <span className="text-sm text-[#868686]">
                                                of {TARGET.toLocaleString()}
                                            </span>
                                        </div>
                                        <div className="h-3 w-full overflow-hidden rounded-full bg-[#E5E7EB]">
                                            <div
                                                className="h-full rounded-full transition-all duration-700 ease-out"
                                                style={{
                                                    width: `${percentage}%`,
                                                    background: "linear-gradient(90deg, #956E42 0%, #B48755 70%, #E9DDCF 100%)",
                                                }}
                                            />
                                        </div>
                                        <p className="mt-2 text-center text-sm font-semibold text-[#B48755]">
                                            {percentage.toFixed(1)}% of target
                                        </p>
                                        {(() => {
                                            let msg = "";
                                            let icon = "";
                                            if (percentage >= 100) {
                                                msg = "Outstanding! You've hit the target. Keep soaring!";
                                                icon = "🏆";
                                            } else if (percentage >= 75) {
                                                msg = "Almost there! You're in the final stretch.";
                                                icon = "🔥";
                                            } else if (percentage >= 50) {
                                                msg = "Halfway there! Great momentum—keep pushing.";
                                                icon = "⚡";
                                            } else if (percentage >= 25) {
                                                msg = "Solid start! Every step counts.";
                                                icon = "✨";
                                            } else if (percentage > 0) {
                                                msg = "You've begun the journey. Consistency wins.";
                                                icon = "🌱";
                                            } else {
                                                msg = "Ready to take off? Let's go!";
                                                icon = "🚀";
                                            }
                                            return msg ? (
                                                <div className="mt-4 flex items-center gap-3 rounded-lg border-l-4 border-[#B48755] bg-[#faf8f5] px-4 py-3 shadow-sm">
                                                    <span className="text-2xl" aria-hidden>{icon}</span>
                                                    <p className="text-sm font-semibold text-[#1a2256] leading-snug">
                                                        {msg}
                                                    </p>
                                                </div>
                                            ) : null;
                                        })()}
                                    </div>
                                </>
                            );
                        })()}
                    </div>
                )}
            </form>
        </div>
    );
}
