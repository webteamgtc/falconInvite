"use client";

export default function OurGuestsSection() {
  return (
    <section className="relative py-12 md:py-20 px-4">
      <div
        className="absolute inset-0 pointer-events-none opacity-50"
        style={{
          backgroundImage: `repeating-linear-gradient(
            90deg,
            transparent,
            transparent 60px,
            rgba(184,135,85,0.03) 60px,
            rgba(184,135,85,0.03) 61px
          )`,
        }}
      />
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-wide">
          Our Guests
        </h2>
        <p className="font-serif text-lg md:text-2xl italic text-white/95 mt-3">
          A Day of Strategy, Recognition & Celebration
        </p>
        <p className="font-serif text-xl md:text-2xl italic text-white/90 mt-4">
          12 December 2026
        </p>
        <p className="text-white/80 text-base md:text-lg mt-4 max-w-xl mx-auto font-sans">
          A full day dedicated to strategy, recognition, and celebration.
        </p>
      </div>
    </section>
  );
}
