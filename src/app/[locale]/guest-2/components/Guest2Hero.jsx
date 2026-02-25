"use client";

export default function Guest2Hero() {
  return (
    <section className="relative  pb-12 md:pb-16 overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-[url('/guest-2-banner-bg.svg')] bg-cover bg-center bg-no-repeat pointer-events-none"
        aria-hidden
      />
      <div className="relative z-10 max-w-5xl mx-auto px-4 py-10 md:py-16 text-center">
        <img src="/guest-2-bg.png" alt="Guest 2 Hero" className="w-full h-[650px] object-contain" />
      </div>
    </section>
  );
}
