"use client";

import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";
import SimpleNavigationMenu from "./SimpleNavigationMenu";
import { useRouter } from "next/navigation";

const CARD_GAP = 12; // gap-3
const CARD_COUNT = 3;

export default function GoldenFalconHeroMobile({
  activeTab = "home",
  handleTabChange,
}) {
  const router = useRouter();
  const cardsScrollRef = useRef(null);
  const [activeCardIndex, setActiveCardIndex] = useState(0);

  const scrollCards = (direction) => {
    const el = cardsScrollRef.current;
    if (!el?.firstElementChild) return;
    const cardWidth = el.firstElementChild.offsetWidth;
    const step = cardWidth + CARD_GAP;
    const amount = direction === "left" ? -step : step;
    el.scrollBy({ left: amount, behavior: "smooth" });
  };

  const scrollToCard = (index) => {
    const el = cardsScrollRef.current;
    if (!el?.firstElementChild) return;
    const cardWidth = el.firstElementChild.offsetWidth;
    const step = cardWidth + CARD_GAP;
    el.scrollTo({ left: index * step, behavior: "smooth" });
    setActiveCardIndex(index);
  };

  useEffect(() => {
    const el = cardsScrollRef.current;
    if (!el) return;

    const updateActiveIndex = () => {
      if (!el.firstElementChild) return;
      const cardWidth = el.firstElementChild.offsetWidth;
      const step = cardWidth + CARD_GAP;
      const scrollLeft = el.scrollLeft;
      const index = Math.round(scrollLeft / step);
      const clamped = Math.max(0, Math.min(index, CARD_COUNT - 1));
      setActiveCardIndex(clamped);
    };

    el.addEventListener("scroll", updateActiveIndex);
    updateActiveIndex();
    return () => el.removeEventListener("scroll", updateActiveIndex);
  }, []);

  return (
    <section
      className="w-full min-w-full min-h-screen mx-auto overflow-hidden bg-[url('/home-page-bg.webp')] bg-center md:bg-[center_86%] bg-no-repeat md:rounded-none"
      style={{ backgroundSize: "100% 100%" }}
    >
      <div className="relative w-full min-h-screen overflow-hidden">
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

        <div className="relative z-10 mx-auto flex max-w-6xl flex-col justify-center px-4 py-10 md:py-16">
          <div className="text-center">
            <h1 className="mx-auto max-w-[22rem] sm:max-w-[30rem] md:max-w-4xl font-serif font-black leading-[1.03] text-transparent gtc-gold-text text-[clamp(42px,6.8vw,92px)]">
              Golden Falcon Awards
            </h1>

            <div className="mt-2 sm:mt-3 italic font-serif leading-[1.12] text-transparent gtc-gold-text text-[clamp(26px,4.6vw,52px)]">
              2026 Invitation
            </div>
          </div>

          <div className="flex-1" >
            <img src="/traphy-2026.webp" alt="Golden Falcon Awards" className="w-full md:h-[700px] h-[400px] object-contain" />
          </div>

          {/* Button */}
          <div className="mt-6 sm:mt-7 text-center">
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
              onClick={() => router.push("/ticket")}
            >
              Join Us
            </button>
            <p className="text-[12px] mt-3  cursor-pointer underline md:text-[14px] text-white"
            onClick={() => router.push("/privacy-policy")}
            > T & C Apply</p>
          </div>


          {/* Bottom cards */}
          <div className="pt-3 sm:pb-0 md:pb-0 md:pt-8">
            <div className="md:hidden relative">
              {/* Arrow nav — top right */}
              {/* <div className="absolute -top-1 right-0 z-10 flex items-center gap-1">
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
              </div> */}
              <div
                ref={cardsScrollRef}
                className="no-scrollbar flex gap-3 overflow-x-auto px-1 pt-10 snap-x snap-mandatory"
              >
                <div className="min-w-full snap-center">
                  <MiniInfoCard
                    icon="/location.svg"
                    title="Dubai"
                    line1="December 2026"
                    line2="Hosted by GTCFX"
                  />
                </div>
                <div className="min-w-full snap-center">
                  <MiniInfoCard
                    icon="/traphy-icon.svg"
                    title="Golden Falcon"
                    line1="Awards 2026"
                    line2="An Evening of Excellence"
                  />
                </div>
                <div className="min-w-full snap-center">
                  <MiniInfoCard
                    icon="/star-icon.svg"
                    title="A Private"
                    line1="awards night"
                    line2="Celebrating leaders"
                  />
                </div>
              </div>
              {/* Pagination dots - mobile only */}
              <div className="flex justify-center items-center gap-2 pt-4 pb-2">
                {Array.from({ length: CARD_COUNT }).map((_, i) => (
                  <button
                    key={i}
                    type="button"
                    onClick={() => scrollToCard(i)}
                    aria-label={`Go to slide ${i + 1}`}
                    className={`rounded-full transition-all duration-300 ${
                      i === activeCardIndex
                        ? "w-6 h-2 bg-[#B48755]"
                        : "w-2 h-2 bg-white/50 hover:bg-white/70"
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Desktop: 3 columns */}
            <div className="hidden md:block">
              <div className="mx-auto grid max-w-5xl grid-cols-3 gap-3 lg:gap-4">
                <MiniInfoCard
                  icon="/location.svg"
                  title="Dubai"
                  line1="December 2026"
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
                  title="A Private"
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
