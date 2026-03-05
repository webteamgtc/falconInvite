"use client";

import SimpleNavigationMenu from "@/app/[locale]/components/SimpleNavigationMenu";

export default function AwardsHero({ activeNavTab, handleNavTabChange }) {
  return (
    <section className="relative overflow-hidden ">
      {/* background spotlight + waves */}

      <SimpleNavigationMenu
        activeTab={activeNavTab}
        onTabChange={handleNavTabChange}
      />

      <div className="relative mx-auto w-full max-w-6xl px-4 md:px-6 lg:px-8 pt-14 md:pt-18">
        <div className="text-center">
          <h1
            className="font-serif text-[34px] font-black md:text-[54px] leading-[1.2] lg:text-[60px] tracking-wide"
            style={{
              background: "linear-gradient(180deg, #956E42 0%, #E9DDCF 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Golden Falcon <br /> Awards 2026
          </h1>
          <p className="mt-1 text-[12px] md:text-[14px] tracking-[1.8px] uppercase text-white/70">
            Awards
          </p>
        </div>

        {/* Hero trophy block */}
        <div className="mt-8 md:mt-10 grid items-center  grid-cols-1 gap-4 relative">
          {/* left laurel text (hidden on mobile like screenshot crop) */}
          <div className="flex justify-center gap-12 items-center">
            <div className=" justify-end md:flex hidden">
              <img src="/award-hero.svg" alt="Golden Falcon Trophy" className="h-[260px] w-[220px] md:h-[360px] md:w-[300px]" />
            </div>
            <div className=" relative h-[260px] md:h-[600px] w-full max-w-[320px] md:max-w-[200px]">
              <img
                src="/trr.png"
                alt="Golden Falcon Trophy"
                className="h-full w-full object-contain drop-shadow-[0_18px_70px_rgba(105,138,193,0.55)]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

