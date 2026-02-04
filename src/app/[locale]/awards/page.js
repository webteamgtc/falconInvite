"use client";

import { useState } from "react";
import SimpleNavigationMenu from "../components/SimpleNavigationMenu";
import AwardsHero from "./components/AwardsHero";
import AwardsGrid from "./components/AwardsGrid";
import MainFooter from "../components/MainFooter";

export default function AwardsPage() {
  const [activeNavTab, setActiveNavTab] = useState("/awards");

  const handleNavTabChange = (newTab) => {
    setActiveNavTab(newTab);
    if (newTab !== "/awards") window.location.href = newTab || "/";
  };

  return (
    <div className="w-full min-h-screen bg-[#02040d]">
      <SimpleNavigationMenu
        activeTab={activeNavTab}
        onTabChange={handleNavTabChange}
      />

      <main className="relative">
        <AwardsHero />
        <AwardsGrid />
        <MainFooter />
      </main>
    </div>
  );
}

