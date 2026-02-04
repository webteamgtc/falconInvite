"use client";

export default function PartnersHeader() {
  return (
    <section className=" pt-20 md:pt-28 pb-12 md:pb-16">
      <div
        className="absolute inset-0 bg-[url('/media-bg.png')] bg-cover bg-center bg-no-repeat z-0"
      />
      <div className="relative mx-auto conmax-w-6xl px-4 md:px-6tainer text-center">
        <h1
          className="font-serif text-[42px] md:text-[48px] lg:text-[56px] leading-[1.3] font-semibold tracking-wide"
          style={{
            background: "linear-gradient(180deg, #956E42 0%, #E9DDCF 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          Media Partners & Coverage
        </h1>
        <p className="mt-3 md:mt-4 text-sm md:text-[18px] text-white max-w-xl mx-auto">
          Key milestones in our media collaboration history
        </p>
      </div>
    </section>
  );
}
