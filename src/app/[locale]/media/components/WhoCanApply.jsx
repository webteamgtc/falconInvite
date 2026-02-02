"use client";

export default function WhoCanApply() {
  return (
    <section className="relative py-12 md:py-16">
      <div className="max-w-3xl mx-auto px-4 md:px-6 text-center">
        <h2 className="font-serif text-[28px] md:text-[32px] lg:text-[36px] font-semibold text-[#D3C0A0] mb-6 md:mb-8">
          Who Can Apply
        </h2>

        <p className="text-[14px] md:text-[16px] leading-relaxed text-[#CCCCCC] mb-6">
          This registration is intended for accredited media representatives, financial
          journalists, content creators, and industry analysts interested in covering
          GTCFX events, announcements, or related activities.
        </p>

        <p className="text-[12px] md:text-[14px] text-[#CCCCCC]">
          All applications will be reviewed by the GTCFX team prior to approval.
        </p>
      </div>
    </section>
  );
}
