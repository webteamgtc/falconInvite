"use client";

import { SECTIONS } from "./termsData";

export default function TermsContent() {
  return (
    <section className="relative py-6 md:py-8 flex-1 min-w-0">
      <div className="space-y-6 md:space-y-8">
        {SECTIONS.map((sec) => (
          <article
            key={sec.id}
            id={sec.id}
            className="rounded-lg md:rounded-xl border border-[#E9DDCF] bg-black p-5 md:p-6 lg:p-8 scroll-mt-28"
          >
            <h2 className="font-serif text-[18px] md:text-[22px] font-semibold text-[#D3C0A0] mb-3 md:mb-4">
              {sec.title}
            </h2>
            <p className="text-[14px] md:text-[16px] leading-relaxed text-[#CCCCCC]">
              {sec.body}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
