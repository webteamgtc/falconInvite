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
    <div className="w-full min-h-screen relative bg-[#0A091A]">
      <Meta
        title="Our Guests | Golden Falcon Awards 2026 | GTC"
        description="A Day of Strategy, Recognition & Celebration. 12 December 2026."
      />
      <div className="absolute inset-0 bg-[#050510] pointer-events-none z-0" />
      <div
        className="absolute inset-0 opacity-30 pointer-events-none z-0"
        style={{
          backgroundImage: `radial-gradient(ellipse 80% 50% at 50% 0%, rgba(149,110,66,0.15) 0%, transparent 50%),
            radial-gradient(ellipse 60% 40% at 50% 60%, rgba(184,135,85,0.08) 0%, transparent 50%)`,
        }}
      />
      <SimpleNavigationMenu activeTab={activeNavTab} onTabChange={handleNavTabChange} />
      <main className="relative z-10">
        <Guest2Hero />
        <OurGuestsSection />
        <Guest2Grid />
        <MainFooter />
      </main>
    </div>
  );
}
