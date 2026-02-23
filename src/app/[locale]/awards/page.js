"use client";

import { useState } from "react";
import Image from "next/image";
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
    <div className="w-full min-h-screen ">


      <main className="relative">
        <div className="pointer-events-none absolute inset-0">
          <Image
            src="/long-banner-bg.png"
            alt=""
            fill
            className="object-fill object-center"
            priority
            sizes="100vw"
          />
        </div>
        <AwardsHero activeNavTab={activeNavTab} handleNavTabChange={handleNavTabChange} />
        <AwardsGrid />
        <MainFooter showBg={false} />
      </main>
    </div>
  );
}

