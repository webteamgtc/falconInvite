"use client";

import { useState } from "react";
import SimpleNavigationMenu from "../components/SimpleNavigationMenu";
import PartnersHeader from "./components/PartnersHeader";
import MediaLogosGrid from "./components/MediaLogosGrid";
import MediaImpact from "./components/MediaImpact";
import MainFooter from "../components/MainFooter";

export default function PartnersPage() {
  const [activeNavTab, setActiveNavTab] = useState("/partners");

  const handleNavTabChange = (newTab) => {
    setActiveNavTab(newTab);
    if (newTab !== "/partners") window.location.href = newTab || "/";
  };

  return (
    <div className="w-full min-h-screen bg-[#0a0a1a]">
      <SimpleNavigationMenu activeTab={activeNavTab} onTabChange={handleNavTabChange} />

      <main className="relative">
        <PartnersHeader />
        <MediaLogosGrid />
        <MediaImpact />
        <MainFooter />
      </main>
    </div>
  );
}
