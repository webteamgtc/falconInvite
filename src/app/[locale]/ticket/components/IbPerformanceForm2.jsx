"use client";

import { useState } from "react";
import { toast } from "react-toastify";

const TARGET = 500000;
const inputClass =
    "h-[48px] w-full rounded-xl border border-[#E5E7EB] bg-white px-4 text-sm font-medium text-[#1a2256] outline-none transition placeholder:text-[#9CA3AF] focus:border-[#B48755] focus:ring-2 focus:ring-[#B48755]/20 disabled:opacity-60";

function dateToYYYYMM(dateStr) {
    if (!dateStr || !/^\d{4}-\d{2}-\d{2}$/.test(dateStr)) return "";
    return dateStr.slice(0, 7);
}

function formatMoney(n) {
    return Number(n).toLocaleString();
}

export default function IbPerformanceForm2() {
    const [step, setStep] = useState(1);
    const [ibAccount, setIbAccount] = useState("");
    const [email, setEmail] = useState("");
    const [joinDate, setJoinDate] = useState("");
    const [checkDate, setCheckDate] = useState(() => new Date().toISOString().slice(0, 10));
    const [loading, setLoading] = useState(false);
    const [errorStep1, setErrorStep1] = useState("");
    const [result, setResult] = useState(null);
    const [errorStep3, setErrorStep3] = useState("");
    const [submitted, setSubmitted] = useState(false);
    const [passportName, setPassportName] = useState("");
    const [passportNo, setPassportNo] = useState("");
    const [phone, setPhone] = useState("");

    const startMonth = dateToYYYYMM(joinDate);
    const endMonth = dateToYYYYMM(checkDate);

    const items = Array.isArray(result?.data?.result) ? result.data.result : [];
    const totalNet = items.reduce((sum, row) => sum + (Number(row?.NET) || 0), 0);
    const percentage = result?.ok ? Math.min(Math.max((totalNet / TARGET) * 100, 0), 100) : 0;
    const remaining = Math.max(TARGET - totalNet, 0);
    const qualified = percentage >= 100;

    const validateStep1 = () => {
        setErrorStep1("");
        if (!ibAccount.trim()) {
            setErrorStep1("IB Account Number is required.");
            return false;
        }
        if (!email.trim()) {
            setErrorStep1("Email is required.");
            return false;
        }
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email.trim())) {
            setErrorStep1("Please enter a valid email address.");
            return false;
        }
        if (!joinDate) {
            setErrorStep1("Join Date is required.");
            return false;
        }
        if (!checkDate) {
            setErrorStep1("Check Date is required.");
            return false;
        }
        if (startMonth > endMonth) {
            setErrorStep1("Join Date must be before or equal to Check Date.");
            return false;
        }
        return true;
    };

    const handleCheckProgress = async (e) => {
        e.preventDefault();
        if (!validateStep1()) return;
        setLoading(true);
        setResult(null);
        try {
            const params = new URLSearchParams({
                email: email.trim(),
                startMonth,
                endMonth,
            });
            const res = await fetch(`/api/ib-new?${params}`, {
                method: "GET",
                credentials: "include",
            });
            const data = await res.json();
            if (!res.ok) {
                setResult(null);
                toast.error(data?.error || "Request failed");
                setErrorStep1(data?.error || data?.upstream?.message || "Request failed");
                return;
            }
            setResult(data);
            setStep(2);
            toast.success("Data loaded successfully");
        } catch (err) {
            setResult(null);
            setErrorStep1(err?.message || "Request failed");
            toast.error(err?.message || "Something went wrong");
        } finally {
            setLoading(false);
        }
    };

    const handleBackToStep1 = () => setStep(1);
    const handleBackToStep2 = () => setStep(2);
    const handleNextToInvitation = () => {
        if (!qualified) return;
        setStep(3);
    };

    const handleSubmitInvitation = (e) => {
        e.preventDefault();
        setErrorStep3("");
        if (!passportName.trim() || !passportNo.trim() || !phone.trim()) {
            setErrorStep3("Please fill Full Name (passport), Passport Number, and Phone Number.");
            return;
        }
        setSubmitted(true);
        toast.success("Invitation details submitted (demo)");
    };

    const prefillExample = () => {
        setIbAccount("IB-200045");
        setEmail("growing.ib@example.com");
        setJoinDate("2025-06-12");
        setCheckDate(new Date().toISOString().slice(0, 10));
        setErrorStep1("");
    };

    const activeDot = "bg-[#B48755] text-white";
    const inactiveDot = "bg-[#E5E7EB] text-[#1a2256]";

    return (
        <div className="w-full max-w-2xl mx-auto">
            <div className="relative overflow-hidden rounded-2xl bg-white p-5 md:p-7 shadow-lg shadow-black/10 ring-1 ring-[#E9DDCF]/40">
                <div
                    className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[#956E42] via-[#B48755] to-[#E9DDCF]"
                    aria-hidden
                />

                {/* Stepper */}
                <div className="mb-6 flex items-center justify-between gap-3">
                    <div className="flex items-center gap-3">
                        <div
                            className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-sm font-semibold ${step === 1 ? activeDot : inactiveDot}`}
                        >
                            1
                        </div>
                        <div>
                            <p className="text-sm font-semibold text-[#1a2256]">IB Details</p>
                            <p className="text-xs text-[#868686]">Enter details to check progress</p>
                        </div>
                    </div>
                    <div className="hidden h-px flex-1 max-w-[40px] bg-[#E9DDCF] sm:block" />
                    <div className="flex items-center gap-3">
                        <div
                            className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-sm font-semibold ${step === 2 ? activeDot : inactiveDot}`}
                        >
                            2
                        </div>
                        <div>
                            <p className="text-sm font-semibold text-[#1a2256]">Progress</p>
                            <p className="text-xs text-[#868686]">View target completion</p>
                        </div>
                    </div>
                    <div className="hidden h-px flex-1 max-w-[40px] bg-[#E9DDCF] sm:block" />
                    <div className="flex items-center gap-3">
                        <div
                            className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-sm font-semibold ${step === 3 ? activeDot : inactiveDot}`}
                        >
                            3
                        </div>
                        <div>
                            <p className="text-sm font-semibold text-[#1a2256]">Invitation</p>
                            <p className="text-xs text-[#868686]">Shown only at 100%</p>
                        </div>
                    </div>
                </div>

                {/* Step 1 — IB Details */}
                {step === 1 && (
                    <div>
                        <h2 className="text-lg font-bold text-[#1a2256]">Step 1 — Enter IB Details</h2>
                        <p className="mt-1 text-sm text-[#868686]">
                            Enter your details; we’ll fetch your performance for the selected period.
                        </p>

                        <form onSubmit={handleCheckProgress} className="mt-5 space-y-4">
                            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                                <div>
                                    <label className="mb-1.5 block text-sm font-medium text-[#1a2256]">IB Account Number</label>
                                    <input
                                        type="text"
                                        value={ibAccount}
                                        onChange={(e) => setIbAccount(e.target.value)}
                                        placeholder="e.g., 123456"
                                        className={inputClass}
                                        disabled={loading}
                                    />
                                </div>
                                <div>
                                    <label className="mb-1.5 block text-sm font-medium text-[#1a2256]">Email</label>
                                    <input
                                        type="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        placeholder="name@company.com"
                                        className={inputClass}
                                        disabled={loading}
                                    />
                                </div>
                                <div>
                                    <label className="mb-1.5 block text-sm font-medium text-[#1a2256]">Join Date</label>
                                    <input
                                        type="date"
                                        value={joinDate}
                                        onChange={(e) => setJoinDate(e.target.value)}
                                        className={inputClass}
                                        disabled={loading}
                                    />
                                </div>
                                <div>
                                    <label className="mb-1.5 block text-sm font-medium text-[#1a2256]">Check Date</label>
                                    <input
                                        type="date"
                                        value={checkDate}
                                        onChange={(e) => setCheckDate(e.target.value)}
                                        className={inputClass}
                                        disabled={loading}
                                    />
                                    <p className="mt-1 text-xs text-[#868686]">Performance is calculated from join month to check month.</p>
                                </div>
                            </div>

                            <div className="rounded-xl border border-amber-200 bg-amber-50/80 p-4">
                                <p className="text-sm text-amber-900">
                                    <span className="font-semibold">Rule:</span> Only referred client activity is counted. IB’s own activity is excluded.
                                </p>
                            </div>

                            <div className="flex flex-col gap-3 sm:flex-row">
                                <button
                                    type="submit"
                                    disabled={loading}
                                    className="inline-flex items-center justify-center rounded-xl px-5 py-3 text-sm font-semibold text-white shadow-md transition hover:opacity-95 disabled:opacity-60"
                                    style={{ background: "linear-gradient(135deg, #956E42 0%, #B48755 50%, #c9a574 100%)" }}
                                >
                                    {loading ? (
                                        <span className="inline-flex items-center gap-2">
                                            <span className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
                                            Checking...
                                        </span>
                                    ) : (
                                        "Check My Progress"
                                    )}
                                </button>
                                <button
                                    type="button"
                                    onClick={prefillExample}
                                    disabled={loading}
                                    className="inline-flex items-center justify-center rounded-xl border border-[#E9DDCF] bg-white px-5 py-3 text-sm font-semibold text-[#1a2256] hover:bg-[#faf8f5] disabled:opacity-60"
                                >
                                    Prefill Example
                                </button>
                            </div>
                            {errorStep1 && <p className="text-sm text-red-600">{errorStep1}</p>}
                        </form>
                    </div>
                )}

                {/* Step 2 — Progress */}
                {step === 2 && (
                    <div>
                        <div className="mb-4 flex flex-wrap items-start justify-between gap-4">
                            <div>
                                <h2 className="text-lg font-bold text-[#1a2256]">Step 2 — Your Progress</h2>
                                <p className="mt-1 text-sm text-[#868686]">
                                    Progress to annual target (client activity only).
                                </p>
                            </div>
                            <button
                                type="button"
                                onClick={handleBackToStep1}
                                className="shrink-0 rounded-xl border border-[#E9DDCF] bg-white px-4 py-2 text-sm font-semibold text-[#1a2256] hover:bg-[#faf8f5]"
                            >
                                Back
                            </button>
                        </div>

                        <div className="rounded-2xl border border-[#E9DDCF]/60 bg-gradient-to-br from-[#faf8f5] to-white p-5">
                            <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
                                <div>
                                    <p className="text-sm text-[#868686]">Annual Target (Client Activity)</p>
                                    <p className="mt-1 text-2xl font-bold text-[#1a2256]">{formatMoney(TARGET)}</p>
                                </div>
                                <div className="text-left sm:text-right">
                                    <p className="text-sm text-[#868686]">Achieved</p>
                                    <p className="mt-1 text-2xl font-bold text-[#1a2256]">{formatMoney(totalNet)}</p>
                                </div>
                            </div>

                            <div className="mt-4">
                                <div className="flex items-center justify-between text-xs text-[#868686]">
                                    <span>Progress</span>
                                    <span>{percentage.toFixed(1)}%</span>
                                </div>
                                <div className="mt-2 h-3 w-full overflow-hidden rounded-full bg-[#E5E7EB]">
                                    <div
                                        className="h-full rounded-full transition-all duration-700 ease-out"
                                        style={{
                                            width: `${percentage}%`,
                                            background: "linear-gradient(90deg, #956E42 0%, #B48755 70%, #E9DDCF 100%)",
                                        }}
                                    />
                                </div>
                            </div>

                            <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-3">
                                <div className="rounded-xl bg-[#faf8f5] p-4">
                                    <p className="text-xs text-[#868686]">Remaining</p>
                                    <p className="mt-1 text-sm font-semibold text-[#1a2256]">{formatMoney(remaining)}</p>
                                </div>
                                <div className="rounded-xl bg-[#faf8f5] p-4">
                                    <p className="text-xs text-[#868686]">Check Date</p>
                                    <p className="mt-1 text-sm font-semibold text-[#1a2256]">{checkDate || "—"}</p>
                                </div>
                                <div className="rounded-xl bg-[#faf8f5] p-4">
                                    <p className="text-xs text-[#868686]">Included Rows</p>
                                    <p className="mt-1 text-sm font-semibold text-[#1a2256]">{items.length} rows</p>
                                </div>
                            </div>

                            {/* Motivational message */}
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
                                        <p className="text-sm font-semibold text-[#1a2256] leading-snug">{msg}</p>
                                    </div>
                                ) : null;
                            })()}

                            <div className="mt-4 rounded-xl border border-[#E9DDCF]/60 bg-white p-4">
                                <p className="text-sm text-[#1a2256]">
                                    <span className="font-semibold">Important:</span> Only referred client activity is counted; IB-owned activity is excluded.
                                </p>
                            </div>
                        </div>

                        {!qualified && (
                            <div className="mt-5 rounded-2xl border border-amber-200 bg-amber-50/80 p-5">
                                <p className="text-sm font-semibold text-amber-900">You’re not qualified yet.</p>
                                <p className="mt-1 text-sm text-amber-900">
                                    Keep growing client activity to reach 100%. Once you reach the target, you can continue to invitation details.
                                </p>
                            </div>
                        )}

                        {qualified && (
                            <div className="mt-5 rounded-2xl border border-emerald-200 bg-emerald-50/80 p-5">
                                <p className="text-sm font-semibold text-emerald-900">Congratulations — You are qualified!</p>
                                <p className="mt-1 text-sm text-emerald-900">
                                    Complete the next step to process your annual event invitation.
                                </p>
                                <div className="mt-4">
                                    <button
                                        type="button"
                                        onClick={handleNextToInvitation}
                                        className="inline-flex w-full items-center justify-center rounded-xl bg-emerald-600 px-5 py-3 text-sm font-semibold text-white hover:bg-emerald-700"
                                    >
                                        Continue to Invitation Details
                                    </button>
                                </div>
                            </div>
                        )}

                        {/* Optional: raw data table */}
                        {items.length > 0 && (
                            <div className="mt-5">
                                <h3 className="text-sm font-bold text-[#1a2256]">Performance data</h3>
                                <div className="mt-3 overflow-hidden rounded-2xl border border-[#E9DDCF]">
                                    <table className="w-full text-left text-sm">
                                        <thead className="bg-[#faf8f5] text-xs text-[#868686]">
                                            <tr>
                                                <th className="px-4 py-3">Month / Label</th>
                                                <th className="px-4 py-3">NET</th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-[#E9DDCF] bg-white">
                                            {items.slice(0, 12).map((row, i) => (
                                                <tr key={i}>
                                                    <td className="px-4 py-3 text-[#1a2256]">{row?.label ?? row?.month ?? "—"}</td>
                                                    <td className="px-4 py-3 font-medium text-[#1a2256]">{formatMoney(row?.NET ?? 0)}</td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        )}
                    </div>
                )}

                {/* Step 3 — Invitation Details */}
                {step === 3 && (
                    <div>
                        <div className="mb-4 flex flex-wrap items-start justify-between gap-4">
                            <div>
                                <h2 className="text-lg font-bold text-[#1a2256]">Step 3 — Invitation Details</h2>
                                <p className="mt-1 text-sm text-[#868686]">
                                    This section is shown when progress is 100%.
                                </p>
                            </div>
                            <button
                                type="button"
                                onClick={handleBackToStep2}
                                className="shrink-0 rounded-xl border border-[#E9DDCF] bg-white px-4 py-2 text-sm font-semibold text-[#1a2256] hover:bg-[#faf8f5]"
                            >
                                Back
                            </button>
                        </div>

                        {!submitted ? (
                            <form onSubmit={handleSubmitInvitation} className="rounded-2xl border border-[#E9DDCF]/60 p-5 space-y-4">
                                <div className="sm:col-span-2">
                                    <label className="mb-1.5 block text-sm font-medium text-[#1a2256]">Full Name (as per Passport)</label>
                                    <input
                                        type="text"
                                        value={passportName}
                                        onChange={(e) => setPassportName(e.target.value)}
                                        placeholder="Enter full name exactly as passport"
                                        className={inputClass}
                                    />
                                </div>
                                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                                    <div>
                                        <label className="mb-1.5 block text-sm font-medium text-[#1a2256]">Passport Number</label>
                                        <input
                                            type="text"
                                            value={passportNo}
                                            onChange={(e) => setPassportNo(e.target.value)}
                                            placeholder="e.g., A1234567"
                                            className={inputClass}
                                        />
                                    </div>
                                    <div>
                                        <label className="mb-1.5 block text-sm font-medium text-[#1a2256]">Phone Number</label>
                                        <input
                                            type="tel"
                                            value={phone}
                                            onChange={(e) => setPhone(e.target.value)}
                                            placeholder="e.g., +9715xxxxxxx"
                                            className={inputClass}
                                        />
                                    </div>
                                </div>
                                <button
                                    type="submit"
                                    className="mt-4 h-12 w-full rounded-xl font-semibold text-white shadow-md transition hover:opacity-95"
                                    style={{ background: "linear-gradient(135deg, #956E42 0%, #B48755 50%, #c9a574 100%)" }}
                                >
                                    Submit Invitation Details
                                </button>
                                {errorStep3 && <p className="mt-3 text-sm text-red-600">{errorStep3}</p>}
                            </form>
                        ) : (
                            <div className="rounded-2xl border border-emerald-200 bg-emerald-50/80 p-5">
                                <p className="text-sm font-semibold text-emerald-900">Submitted successfully (Demo)</p>
                                <p className="mt-1 text-sm text-emerald-900">
                                    In production, this would be sent to CRM/Marketing for invitation processing.
                                </p>
                            </div>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
}
