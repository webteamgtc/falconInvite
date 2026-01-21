"use client";

import { useState } from "react";
import EventAgendaSection from "./components/EventCard";
import GtcFooterStrip from "./components/FooterCard";
import DistinguishedGuestsGrid from "./components/GuestCard";
import GoldenFalconHeroMobile from "./components/HeroSlider";
import PartnerOrganizationsSection from "./components/PartnerOrg";
import PartnerMediaSection from "./components/PartnerMedia";
import NavigationMenu from "./components/NavigationMenu";

const page = () => {
  const [activeTab, setActiveTab] = useState("home");
  const [prevTab, setPrevTab] = useState("home");
  const [isTransitioning, setIsTransitioning] = useState(false);

  const handleTabChange = (newTab) => {
    if (newTab === activeTab || isTransitioning) return;
    
    setPrevTab(activeTab);
    setIsTransitioning(true);
    
      // Smooth transition
      setTimeout(() => {
        setActiveTab(newTab);
        // End transition after animation completes
        setTimeout(() => {
          setIsTransitioning(false);
        }, 1000); // Match animation duration (800ms + 200ms buffer)
      }, 0);
  };

  const getTabContent = (tabId) => {
    switch (tabId) {
      case "home":
        return <GoldenFalconHeroMobile activeTab={activeTab} onTabChange={handleTabChange} />;
      case "gallery":
        return <DistinguishedGuestsGrid />;
      case "agenda":
        return <EventAgendaSection />;
      case "guest":
        return <PartnerOrganizationsSection />;
      case "media":
        return <PartnerMediaSection />;
      case "contact":
      case "policy":
        return <GtcFooterStrip />;
      default:
        return <GoldenFalconHeroMobile activeTab={activeTab} onTabChange={handleTabChange} />;
    }
  };

  // Determine animation direction
  const tabOrder = ["home", "gallery", "agenda", "guest", "media", "contact", "policy"];
  const currentIndex = tabOrder.indexOf(activeTab);
  const prevIndex = tabOrder.indexOf(prevTab);
  const isNext = currentIndex > prevIndex;
  const animationClass = isNext ? "page-turn-next" : "page-turn-prev";

  return (
    <div className="w-full overflow-hidden relative" style={{ minHeight: "100vh" }}>
      {/* Navigation Menu - Always Visible */}
      <NavigationMenu activeTab={activeTab} onTabChange={handleTabChange} />
      
      {/* Page Container with Slide Transition */}
      <div 
        className="relative w-full h-screen overflow-hidden" 
        style={{ 
          scrollBehavior: "smooth",
          backgroundColor: "#000000",
          background: "linear-gradient(180deg, #000000 0%, #0A0C14 50%, #0B1022 100%)"
        }}
      >
        {/* Background layer - always visible */}
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundColor: "#000000",
            background: "linear-gradient(180deg, #000000 0%, #0A0C14 50%, #0B1022 100%)"
          }}
        />

        {/* Previous Page (sliding out) */}
        {isTransitioning && (
          <div
            className={`absolute inset-0 z-20 ${animationClass}`}
            style={{
              willChange: "transform, opacity",
            }}
          >
            <div className="w-full h-full bg-gradient-to-b from-[#000000] via-[#0A0C14] to-[#0B1022] overflow-y-auto overflow-x-hidden">
              <div className="min-h-full">
                {getTabContent(prevTab)}
              </div>
            </div>
          </div>
        )}

        {/* Current Page (sliding in) */}
        <div
          className={`absolute inset-0 z-10 ${isTransitioning ? `${animationClass}-incoming` : ""}`}
          style={{
            willChange: "transform, opacity",
          }}
        >
          <div className="w-full h-full bg-gradient-to-b from-[#000000] via-[#0A0C14] to-[#0B1022] overflow-y-auto overflow-x-hidden">
            <div className="min-h-full">
              {getTabContent(activeTab)}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;


