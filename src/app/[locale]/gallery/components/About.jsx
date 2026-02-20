"use client";

import Image from "next/image";

const items = [
    {
    year: "2026",
    desc: "coming Soon",
    img: "left",
    image: "/timeline-img4.svg"
  },
   {
    year: "2025",
    desc: "Golden Falcon Awards 2025 delivered elegance and brilliance through powerful panels, honored winners, and unforgettable lucky draw moments.",
    img: "right",
    image: "/timeline-img4.svg"
  },

  {
    year: "2024",
    desc: "Golden Falcon Awards 2024 was an evening of elegance, prestige, and global distinction. A red-carpet celebration honoring excellence at the highest level.",
    img: "left",
    image: "/timeline-img3.svg"
  },
    {
    year: "2023",
    title: "",
    desc: "From insightful panels to award ceremonies, GTCFX Partners Conference 2023 had it all. An inspiring event that strengthened partnerships and future vision.",
    img: "right",
    image: "/timeline-img2.svg"
  },
  {
    year: "2022",
    title: "",
    desc: "GTCFX Partners Award Night 2022 celebrated success, partnership, and excellence. A memorable evening honoring those who powered our growth.",
    img: "left",
    image: "/timeline-img1.svg"
  },

 

];

export default function AboutTourTimeline() {
  const scrollToGalleryContent = () => {
    const el = document.getElementById("gallery-content");
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section className="relative w-full bg-black mt-10 md:mt-0">
      {/* soft vignette */}
      <div
                className="absolute inset-0 bg-[url('/gallay-2.png')] bg-cover bg-center bg-no-repeat z-0"
            />
 
      <div className="relative mx-auto container">
        {/* Title */}
        <div className="flex items-center justify-center gap-6 mb-2 md:mb-16">
          <span className="h-[1px] hidden md:block w-[240px] bg-[#D9D9D9]" />
          <h2 className="font-serif text-[24px] md:text-[42px] tracking-[2px] text-[#B08A57]">
            ABOUT THE TOUR
          </h2>
          <span className="h-[1px] hidden md:block w-[240px] bg-[#D9D9D9]" />
        </div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 md:grid-cols-[1.05fr_0.95fr] gap-12 mt-10">
          {/* LEFT COLUMN - Descriptive Text */}
          <div className="pt-2">
            <div className="font-poppins text-center md:text-left space-y-4 md:space-y-6 text-sm md:text-base leading-relaxed text-white">
              <p>
                Founded in 2012, GTCFX began with one clear goal: to build a trading environment
                that combines institutional-grade infrastructure with accessibility for individual
                traders worldwide. From day one, the focus has been on security, transparency, and
                cutting-edge technology.
              </p>

              <p>
                As the years passed, GTCFX steadily expanded across global markets, forming
                strategic partnerships and continuously enhancing its trading platforms. The company
                grew from a regional player into a recognized global brand, serving clients across
                more than 100 countries.
              </p>

              <p>
                Now operating as a global multi-asset trading brand, GTCFX gives traders access to
                forex, CFDs, commodities, indices, stocks, and precious metals. Supported by robust
                platforms like MT4, MT5, and proprietary solutions, the company remains committed to
                empowering traders with the tools they need to succeed.
              </p>

              <p>
                This tour highlights the key moments and milestones that shaped the GTCFX journey
                so far—from its foundation to its current position as a trusted global trading
                partner, guided by values of integrity, innovation, and long-term sustainability.
              </p>
            </div>
          </div>

          {/* RIGHT COLUMN - Timeline */}
          <div className="relative pl-0 md:pl-0">
            {/* center dotted line - left on mobile, center on desktop */}
            <div className="absolute left-[9px] md:left-1/2 top-0 h-full w-[1px] md:-translate-x-1/2 bg-[repeating-linear-gradient(to_bottom,rgba(255,255,255,0.22)_0px,rgba(255,255,255,0.22)_2px,rgba(255,255,255,0)_6px,rgba(255,255,255,0)_12px)]" />

            <div className="space-y-8 md:space-y-12">
              {items?.map((it, idx) => (
                <div
                  key={idx}
                  onClick={scrollToGalleryContent}
                  className="relative flex flex-col md:grid md:grid-cols-[1fr_40px_1fr] md:items-center gap-4 md:gap-0 pl-8 md:pl-0 cursor-pointer"
                >
                  {/* MOBILE: single column - dot left, content stacked */}
                  {/* DESKTOP: 3-col grid */}
                  {it.img === "left" ? (
                    <>
                      {/* LEFT: Image when img is "left" */}
                      <div className="order-2 md:order-1 pr-0 md:pr-10 flex justify-start md:justify-end">
                        <div className="relative h-[100px] w-[120px] md:h-[140px] md:w-[155px] overflow-hidden flex-shrink-0">
                          <Image src={it?.image} alt="" fill className="object-cover" />
                        </div>
                      </div>

                      {/* CENTER: glow dot - on mobile aligned to left line */}
                      <div className="order-1 md:order-2 absolute left-[9px] md:left-auto md:relative md:flex items-center justify-center -translate-x-1/2 md:translate-x-0 z-10" style={{ top: "0.5rem" }}>
                        <span className="relative block h-[10px] w-[10px] flex-shrink-0">
                          <span className="absolute inset-0 rounded-full bg-white shadow-[0_0_0_6px_rgba(255,255,255,0.10)]" />
                          <span className="absolute -left-[10px] -top-[10px] h-[30px] w-[30px] rounded-full bg-white/10 blur-[1px]" />
                        </span>
                      </div>

                      {/* RIGHT: Text when img is "left" */}
                      <div className="order-3 pl-0 md:pl-10 text-left">
                        <div className="text-[14px] md:text-[16px] font-semibold text-white">{it.year}</div>
                        <div className="mt-1 text-[11px] md:text-[12px] font-semibold text-white">{it.title}</div>
                        <p className="mt-2 max-w-full md:max-w-[320px] text-[11px] md:text-[12px] leading-[1.7] text-white">
                          {it.desc}
                        </p>
                      </div>
                    </>
                  ) : (
                    <>
                      {/* LEFT: Text when img is "right" */}
                      <div className="order-2 md:order-1 pr-0 md:pr-10 text-left md:text-right">
                        <div className="text-[14px] md:text-[16px] font-semibold text-white">{it.year}</div>
                        <div className="mt-1 text-[11px] md:text-[12px] font-semibold text-white">{it.title}</div>
                        <p className="mt-2 max-w-full md:max-w-[320px] md:ml-auto text-[11px] md:text-[12px] leading-[1.7] text-white">
                          {it.desc}
                        </p>
                      </div>

                      {/* CENTER: glow dot - on mobile aligned to left line */}
                      <div className="order-1 md:order-2 absolute left-[9px] md:left-auto md:relative md:flex items-center justify-center -translate-x-1/2 md:translate-x-0 z-10" style={{ top: "0.5rem" }}>
                        <span className="relative block h-[10px] w-[10px] flex-shrink-0">
                          <span className="absolute inset-0 rounded-full bg-white shadow-[0_0_0_6px_rgba(255,255,255,0.10)]" />
                          <span className="absolute -left-[10px] -top-[10px] h-[30px] w-[30px] rounded-full bg-white/10 blur-[1px]" />
                        </span>
                      </div>

                      {/* RIGHT: Image when img is "right" */}
                      <div className="order-3 pl-0 md:pl-10">
                        <div className="relative h-[100px] w-[120px] md:h-[140px] md:w-[155px] overflow-hidden flex-shrink-0">
                          <Image src={it?.image} alt="" fill className="object-cover" />
                        </div>
                      </div>
                    </>
                  )}
                </div>
              ))}
            </div>

            {/* bottom fade */}
            <div className="pointer-events-none absolute -bottom-4 left-0 right-0 h-24 bg-gradient-to-b from-transparent to-black" />
          </div>
        </div>
      </div>
    </section>
  );
}

