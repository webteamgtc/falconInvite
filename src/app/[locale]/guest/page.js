"use client";

import { useState } from "react";
import SimpleNavigationMenu from "../components/SimpleNavigationMenu";
import Meta from "../components/MetaData";
import MainFooter from "../components/MainFooter";
import Guest2Hero from "./components/Guest2Hero";
import OurGuestsSection from "./components/OurGuestsSection";
import Guest2Grid from "./components/Guest2Grid";

export default function Guest2Page() {
  const [activeNavTab, setActiveNavTab] = useState("/guest-2");

  const handleNavTabChange = (newTab) => {
    setActiveNavTab(newTab);
    if (newTab !== "/guest-2") {
      window.location.href = newTab || "/";
    }
  };

  return (
    <div className="w-full relative bg-[url('/guest-small-bg.webp')] bg-cover bg-center bg-no-repeat ">
      <Meta
        title="Our Guests | Golden Falcon Awards 2026 | GTC"
        description="A Day of Strategy, Recognition & Celebration. December 2026."
      />

      <main className=" z-10">
        <Guest2Hero activeNavTab={activeNavTab} handleNavTabChange={handleNavTabChange} />
        <div className="relative">

          <OurGuestsSection />
          <Guest2Grid />
          <MainFooter />
        </div>
      </main>
    </div>
  );
}
