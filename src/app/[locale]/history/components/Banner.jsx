"use client";

import Image from "next/image";

/**
 * Replace these with your real assets later.
 */
const BG_IMAGE = "/banner-bg-2.png"; // replace
const TIMELINE_CARD_IMAGE = "/images/dummy-card.jpg"; // replace

export function GtcfxBanner() {
  return (
    <section className=" w-full min-h-[400px] md:min-h-[800px] overflow-hidden">
      {/* Background - contained within section */}
      <div className="absolute inset-0 z-0">
        <Image
          src={BG_IMAGE}
          alt="Background"
          fill
          priority
        />
        {/* Optional overlay */}
        {/* <div className="absolute inset-0 bg-black/55" /> */}
      </div>

      {/* Content with proper z-index */}
      <div className="relative mx-auto w-full container pt-36">
        {/* Big Logo */}
        <div className="relative">
          <h1 className="font-poppins text-[78px] font-extrabold tracking-[2px] text-white sm:text-[92px] md:text-[110px]">
            GTCFX
          </h1>

          <p className="font-poppins mt-[-10px] max-w-2xl text-[18px] font-medium tracking-[0.2px] text-white">
            A visual journey through our milestones, events, and global presence.
          </p>
        </div>

        {/* Tabs */}
        <div className="mt-10 flex gap-4 max-w-3xl justify-end">
          {[
            { title: "Events", desc: "Global conferences & forums", image: "/gallery-banner-img1.svg" },
            { title: "Milestones", desc: "Key moments in our journey", image: "/gallery-banner-img2.svg" },
            { title: "Community", desc: "Traders, partners & media", image: "/gallery-banner-img3.svg" },
            { title: "Media Coverage", desc: "Press & official features", image: "/gallery-banner-img4.svg" },
            { title: "Behind the Scenes", desc: "Team & culture", image: "/gallery-banner-img5.svg" },
          ].map((t) => (
            <button
              key={t.title}
              type="button"
              className="group font-poppins flex-1 rounded-lg relative min-h-[210px] flex-shrink-0 overflow-hidden px-3 pb-2 pt-7 text-left shadow-[0_10px_30px_rgba(0,0,0,0.35)] transition hover:opacity-95"
            >
              {/* Background image - img tag so SVG works without Next config */}
              <img
                src={t.image}
                alt=""
                className="absolute inset-0 h-full w-full object-center rounded-lg object-cover"
              />
              {/* Overlay for text readability */}
              <div className="absolute inset-0 rounded-lg bg-black/25 pointer-events-none" />
              <p className="relative font-poppins z-10 text-[14px] font-semibold uppercase tracking-[0.8px] text-white">
                {t.title}
              </p>

              <p className="relative font-poppins z-10 mt-2 whitespace-pre-line text-[12px] font-medium leading-[1.25] text-white">
                {t.desc}
              </p>

              {/* bottom faint line */}
              <span className="absolute bottom-2 left-3 right-3 z-10 h-[1px] bg-black/10" />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}


