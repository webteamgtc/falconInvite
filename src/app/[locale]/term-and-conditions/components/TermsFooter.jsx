"use client";

export default function TermsFooter() {
  return (
    <footer className="relative py-14 md:py-20">
      <div className="max-w-2xl mx-auto px-4 text-center space-y-4 md:space-y-5">
        <div>
          <p className="font-serif text-xl md:text-2xl font-semibold text-[#D3C0A0] tracking-tight">
            K GTC
          </p>
          <p className="text-[10px] md:text-xs text-[#D3C0A0]/90 tracking-widest mt-1">
            TRUSTED | REGULATED | GLOBAL
          </p>
        </div>

        <p className="text-base md:text-[18px] text-[#E0E0E0] font-normal">
          Trade with Confidence. Anywhere.
        </p>

        <p className="text-[12px] md:text-[14px] text-[#C0C0C0]">
          @GTCFX, Regulated Multi-Assest Trading Platfomm
        </p>

        <p className="text-[10px] md:text-[12px] text-[#C0C0C0] pt-2">
          All rights reserved.
        </p>
      </div>
    </footer>
  );
}
