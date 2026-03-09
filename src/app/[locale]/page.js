"use client";

import { useState, useEffect } from "react";
import GoldenFalconHeroMobile from "./components/HeroSlider";
import SimpleNavigationMenu from "./components/SimpleNavigationMenu";
import Meta from "./components/MetaData";
import MainFooter from './components/MainFooter'


export default function NewPage() {
  const [activeTab, setActiveTab] = useState("home");

  const handleTabChange = (newTab) => {
    setActiveTab(newTab);
    // Smooth scroll to the corresponding section
    const sectionMap = {
      home: "hero",
      gallery: "guests",
      agenda: "agenda",
      guest: "guests",
      media: "media",
      policy: "footer"
    };
    const sectionId = sectionMap[newTab];
    if (sectionId) {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  };

  return (
    <>
    <Meta
        title="Golden Falcon Awards 2026 Invitation | GTC"
        description="An Evening of Excellence A private awards night. Celebrating leaders. Honoring success. Building the future."
      /> 
    <div className="w-full min-h-screen relative ">
      <div className="relative">
        <section id="hero" className="w-full">
          <GoldenFalconHeroMobile activeTab={activeTab} handleTabChange={handleTabChange} />
        </section>
      </div>
    </div>
    <MainFooter />
    </>
  );
}