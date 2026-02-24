"use client";

import React, { useRef } from "react";
import Image from "next/image";
import SimpleNavigationMenu from "./SimpleNavigationMenu";

const CARD_STEP = 252; // min-w-[240px] + gap-3 (12px)

export default function GoldenFalconHeroMobile({
  activeTab = "home",
  handleTabChange,
}) {
  const cardsScrollRef = useRef(null);

  const scrollCards = (direction) => {
    const el = cardsScrollRef.current;
    if (!el) return;
    const amount = direction === "left" ? -CARD_STEP : CARD_STEP;
    el.scrollBy({ left: amount, behavior: "smooth" });
  };

  return (
    <section className="relative w-full overflow-x-hidden bg-black">
      {/* Hero wrapper — taller on desktop so image fits without stretching */}
      <div className="relative w-full min-h-[100vh] md:min-h-[120vh] lg:min-h-[140vh] xl:min-h-[160vh] overflow-hidden">
        {/* ✅ Mobile background */}
        <div
          className="absolute inset-0 z-0 md:hidden bg-[url('/mobile-bg.png')] bg-cover bg-center bg-no-repeat"
          aria-hidden="true"
        />

        {/* ✅ Desktop background — full image visible (no crop) on md+ */}
        <div className="absolute inset-0 z-0 hidden md:block">
          <Image
            src="/1920-bg.png"
            alt=""
            fill
            className="object-cover object-center"
            priority
            sizes="100vw"
          />
        </div>

        {/* ✅ Dark overlay (to match image contrast) */}
        <div
          className="absolute inset-0 z-[1]"
          style={{
            background:
              "linear-gradient(180deg, rgba(0,0,0,0.70) 0%, rgba(0,0,0,0.28) 42%, rgba(0,0,0,0.70) 100%)",
          }}
          aria-hidden="true"
        />

        {/* Navigation */}
        <div className="relative z-20">
          <SimpleNavigationMenu
            activeTab={activeTab}
            onTabChange={handleTabChange}
          />
        </div>

        {/* Content — centered in the middle of the hero */}
        <div className="relative z-10 mx-auto flex min-h-[100vh] md:min-h-[120vh] lg:min-h-[140vh] xl:min-h-[160vh] max-w-6xl flex-col justify-center px-4 py-10 md:py-16">
          {/* Titles */}
          <div className="text-center">
            <h1 className="mx-auto max-w-[22rem] sm:max-w-[30rem] md:max-w-4xl font-serif font-black leading-[1.03] text-transparent gtc-gold-text text-[clamp(42px,6.8vw,92px)]">
              Golden Falcon Awards
            </h1>

            <div className="mt-2 sm:mt-3 italic font-serif leading-[1.12] text-transparent gtc-gold-text text-[clamp(26px,4.6vw,52px)]">
              2026 Invitation
            </div>
          </div>

          {/* Trophy — visible only on mobile */}
          <div className="mt-7 sm:mt-9 md:mt-10 flex justify-center md:hidden">
            <div className="relative w-[clamp(180px,60vw,340px)] -ml-[30px] aspect-[3/5]">
              <div className="absolute -inset-10 bg-gradient-to-b from-[#956E42]/35 via-[#E9DDCF]/15 to-transparent blur-2xl opacity-80" />
              <Image
                src="/goldren-traphy.svg"
                alt="Golden Falcon Trophy"
                fill
                priority
                sizes="(max-width: 480px) 60vw, (max-width: 768px) 50vw, (max-width: 1024px) 320px, 340px"
                className="relative object-contain drop-shadow-[0_12px_46px_rgba(149,110,66,0.45)]"
              />
            </div>
          </div>


          {/* Push cards to bottom */}
          <div className="flex-1" />

          {/* Button */}
          <div className="mt-6 sm:mt-7 flex justify-center">
            <button
              type="button"
              className="min-w-[170px] sm:min-w-[210px] md:min-w-[260px]
                         rounded-[10px] px-8 py-[10px] sm:px-10 sm:py-3
                         text-white font-medium text-[clamp(14px,2.2vw,18px)]
                         border border-[#8D8780]
                         transition-transform duration-200 hover:scale-[1.03] active:scale-[0.98]"
              style={{
                background:
                  "linear-gradient(270deg, #434343 37.16%, #434343 40%, #333 48.82%, #2A2A2A 57.31%, #222 65.8%, #1A1A1A 73.99%, #111 82.79%, #000 99.77%)",
                boxShadow: "0 6px 22px rgba(0,0,0,0.35)",
              }}
            >
              Join Us
            </button>
          </div>


          {/* Bottom cards */}
          <div className="pt-3 sm:pb-0 md:pb-0 md:pt-8">
            <div className="md:hidden relative">
              {/* Arrow nav — top right */}
              <div className="absolute -top-1 right-0 z-10 flex items-center gap-1">
                <button
                  type="button"
                  onClick={() => scrollCards("left")}
                  aria-label="Previous card"
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-[#8D8780] bg-black/60 text-white/90 transition hover:bg-[#B48755] hover:text-white hover:border-[#B48755]"
                >
                  <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <button
                  type="button"
                  onClick={() => scrollCards("right")}
                  aria-label="Next card"
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-[#8D8780] bg-black/60 text-white/90 transition hover:bg-[#B48755] hover:text-white hover:border-[#B48755]"
                >
                  <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
              <div
                ref={cardsScrollRef}
                className="no-scrollbar flex gap-3 overflow-x-auto px-1 pt-10"
              >
                <div className="min-w-[240px]">
                  <MiniInfoCard
                    icon="/location.svg"
                    title="Dubai"
                    line1="12 December 2026"
                    line2="Hosted by GTCFX"
                  />
                </div>
                <div className="min-w-[240px]">
                  <MiniInfoCard
                    icon="/traphy-icon.svg"
                    title="Golden Falcon"
                    line1="Awards 2026"
                    line2="An Evening of Excellence"
                  />
                </div>
                <div className="min-w-[240px]">
                  <MiniInfoCard
                    icon="/star-icon.svg"
                    title="A private"
                    line1="awards night"
                    line2="Celebrating leaders"
                  />
                </div>
              </div>
            </div>

            {/* Desktop: 3 columns */}
            <div className="hidden md:block">
              <div className="mx-auto grid max-w-5xl grid-cols-3 gap-3 lg:gap-4">
                <MiniInfoCard
                  icon="/location.svg"
                  title="Dubai"
                  line1="12 December 2026"
                  line2="Hosted by GTCFX"
                />
                <MiniInfoCard
                  icon="/traphy-icon.svg"
                  title="Golden Falcon"
                  line1="Awards 2026"
                  line2="An Evening of Excellence"
                />
                <MiniInfoCard
                  icon="/star-icon.svg"
                  title="A private"
                  line1="awards night"
                  line2="Celebrating leaders"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function MiniInfoCard({ icon, title, line1, line2 }) {
  return (
    <div className="group relative overflow-hidden rounded-[10px] px-4 py-4 sm:px-5 sm:py-5 shadow-[0_8px_26px_rgba(0,0,0,0.28)] ring-1 ring-black/10">
      <div className="absolute inset-0 bg-[url('/card-bg.png')] bg-cover bg-center bg-no-repeat" />
      <div className="absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/22" />

      <div className="relative z-10 flex items-start gap-3">
        <div className="mt-[2px] h-10 w-10 sm:h-11 sm:w-11 flex-shrink-0">
          {/* using img is fine for icons */}
          <img className="h-full w-full object-contain" src={icon} alt="" />
        </div>

        <div className="flex-1">
          <div className="font-extrabold leading-[1.1] text-[#25282B] transition-colors duration-300 group-hover:text-white text-[clamp(15px,2vw,20px)]">
            {title}
          </div>
          <div className="mt-1 leading-[1.2] text-[#25282B] transition-colors duration-300 group-hover:text-white/90 text-[clamp(12px,1.7vw,16px)]">
            {line1}
          </div>
        </div>
      </div>

      <div className="relative z-10 my-3 h-px w-full bg-[#25282B]/70 transition-colors duration-300 group-hover:bg-white/35" />

      <div className="relative z-10 text-center font-semibold text-[#25282B] transition-colors duration-300 group-hover:text-white/95 text-[clamp(12px,1.7vw,16px)]">
        {line2}
      </div>
    </div>
  );
}
