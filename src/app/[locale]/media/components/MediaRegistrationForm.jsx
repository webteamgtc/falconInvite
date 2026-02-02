"use client";

import { useState } from "react";

const MEDIA_TYPES = [
  "Online Media",
  "Print Media",
  "Broadcast Media",
  "Financial Blog/ Influencer",
  "Other",
];

const PURPOSE_OPTIONS = [
  "Event Coverage",
  "Interview Request",
  "Press Release Access",
  "General Media Inquiry",
];

export default function MediaRegistrationForm() {
  const [mediaType, setMediaType] = useState("");
  const [purpose, setPurpose] = useState([]);
  const [confirmAccurate, setConfirmAccurate] = useState(false);
  const [confirmGuidelines, setConfirmGuidelines] = useState(false);

  const togglePurpose = (opt) => {
    setPurpose((prev) =>
      prev.includes(opt) ? prev.filter((o) => o !== opt) : [...prev, opt]
    );
  };

  return (
    <section className="relative py-10 md:py-14">
      <div className="max-w-3xl mx-auto px-4 md:px-6">
        {/* Form container - black bg, golden border, rounded */}
        <div className="rounded-lg md:rounded-xl border border-[#E9DDCF] bg-black p-6 md:p-8 lg:p-10">
          <h2 className="font-serif text-[28px] md:text-[32px] lg:text-[36px] font-semibold text-[#D3C0A0] text-center mb-8 md:mb-10">
            Media Registration Form
          </h2>

          <form className="space-y-6 md:space-y-8">
            {/* Two-column row: Full Name, Email */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-[12px] md:text-[14px] text-[#E0E0E0] mb-1.5">
                  Full Name<span className="text-[#E9DDCF]">*</span>
                </label>
                <input
                  type="text"
                  className="w-full h-10 md:h-11 px-3 rounded bg-[#1A1A1A] border border-[#555555] text-[#E0E0E0] text-sm placeholder:text-[#888] focus:outline-none focus:border-[#E9DDCF]/60"
                  placeholder=""
                />
              </div>
              <div>
                <label className="block text-[12px] md:text-[14px] text-[#E0E0E0] mb-1.5">
                  Email Address<span className="text-[#E9DDCF]">*</span>
                </label>
                <input
                  type="email"
                  className="w-full h-10 md:h-11 px-3 rounded bg-[#1A1A1A] border border-[#555555] text-[#E0E0E0] text-sm placeholder:text-[#888] focus:outline-none focus:border-[#E9DDCF]/60"
                  placeholder=""
                />
              </div>
            </div>

            {/* Full width: Media Organization Name */}
            <div>
              <label className="block text-[12px] md:text-[14px] text-[#E0E0E0] mb-1.5">
                Media Organization Name<span className="text-[#E9DDCF]">*</span>
              </label>
              <input
                type="text"
                className="w-full h-10 md:h-11 px-3 rounded bg-[#1A1A1A] border border-[#555555] text-[#E0E0E0] text-sm placeholder:text-[#888] focus:outline-none focus:border-[#E9DDCF]/60"
                placeholder=""
              />
            </div>

            {/* Media Type* - button-like options */}
            <div>
              <label className="block text-[12px] md:text-[14px] text-[#E0E0E0] mb-3">
                Media Type<span className="text-[#E9DDCF]">*</span>
              </label>
              <div className="space-y-2">
                {MEDIA_TYPES.map((opt) => (
                  <button
                    key={opt}
                    type="button"
                    onClick={() => setMediaType(opt)}
                    className={`block w-full text-left py-2.5 px-4 rounded border text-sm text-[#E0E0E0] transition-colors ${
                      mediaType === opt
                        ? "bg-[#2a2a2a] border-[#E9DDCF]/50"
                        : "bg-[#1A1A1A] border-[#555555] hover:border-[#666]"
                    }`}
                  >
                    {opt}
                  </button>
                ))}
              </div>
            </div>

            {/* Purpose of Coverage* - checkboxes */}
            <div>
              <label className="block text-[12px] md:text-[14px] text-[#E0E0E0] mb-3">
                Purpose of Coverage<span className="text-[#E9DDCF]">*</span>
              </label>
              <div className="space-y-3">
                {PURPOSE_OPTIONS.map((opt) => (
                  <label
                    key={opt}
                    className="flex items-center gap-3 cursor-pointer text-[14px] text-[#E0E0E0]"
                  >
                    <input
                      type="checkbox"
                      checked={purpose.includes(opt)}
                      onChange={() => togglePurpose(opt)}
                      className="w-4 h-4 rounded border-[#555555] bg-[#1A1A1A] text-[#E9DDCF] focus:ring-[#E9DDCF]/30"
                    />
                    <span>{opt}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Additional Notes - textarea */}
            <div>
              <label className="block text-[12px] md:text-[14px] text-[#E0E0E0] mb-1.5">
                Additional Notes
              </label>
              <textarea
                rows={4}
                className="w-full px-3 py-2.5 rounded bg-[#1A1A1A] border border-[#555555] text-[#E0E0E0] text-sm placeholder:text-[#888] focus:outline-none focus:border-[#E9DDCF]/60 resize-y"
                placeholder=""
              />
            </div>

            {/* Confirmation checkboxes */}
            <div className="space-y-4 pt-2">
              <label className="flex items-start gap-3 cursor-pointer text-[12px] md:text-[14px] text-[#CCCCCC]">
                <input
                  type="checkbox"
                  checked={confirmAccurate}
                  onChange={(e) => setConfirmAccurate(e.target.checked)}
                  className="mt-0.5 w-4 h-4 rounded border-[#555555] bg-[#1A1A1A] text-[#E9DDCF] focus:ring-[#E9DDCF]/30"
                />
                <span>I confirm that the information provided is accurate and truthful.</span>
              </label>
              <label className="flex items-start gap-3 cursor-pointer text-[12px] md:text-[14px] text-[#CCCCCC]">
                <input
                  type="checkbox"
                  checked={confirmGuidelines}
                  onChange={(e) => setConfirmGuidelines(e.target.checked)}
                  className="mt-0.5 w-4 h-4 rounded border-[#555555] bg-[#1A1A1A] text-[#E9DDCF] focus:ring-[#E9DDCF]/30"
                />
                <span>I agree to comply with GTCFX media guidelines and event policies.</span>
              </label>
            </div>

            {/* Submit button */}
            <div className="flex justify-center pt-4 md:pt-6">
              <button
                type="submit"
                className="px-8 md:px-12 py-3 md:py-3.5 rounded border border-[#E9DDCF] bg-black text-[#E9DDCF] text-sm md:text-base font-medium hover:bg-[#E9DDCF]/10 transition-colors"
              >
                Submit Application
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
