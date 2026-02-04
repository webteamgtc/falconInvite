"use client";

import { useState } from "react";
import SimpleNavigationMenu from "../components/SimpleNavigationMenu";
import GalleryHeading from "../components/GalleryHeading";
import VideoGalleryGrid from "../components/VideoGalleryGrid";
import { GtcfxBanner } from "./components/Banner";
import AboutTour from "./components/About";
import Meta from "../components/MetaData";
import MainFooter from "../components/MainFooter";

export default function GalleryPage() {
  const [activeNavTab, setActiveNavTab] = useState("gallery");
  const [activeGalleryTab, setActiveGalleryTab] = useState("all");

  const handleNavTabChange = (newTab) => {
    setActiveNavTab(newTab);
    // Navigate to other pages
    if (newTab !== "gallery") {
      window.location.href = `/${newTab}`;
    }
  };

  const handleGalleryTabChange = (tab) => {
    setActiveGalleryTab(tab);
    // Filter videos based on tab - can be implemented later
  };

  return (
    <div className="w-full min-h-screen bg-black">
      <Meta
        title="Golden Falcon Awards 2026 Invitation | GTC"
        description="An Evening of Excellence A private awards night. Celebrating leaders. Honoring success. Building the future."
      />
      {/* Navigation Menu */}
      <div className="relative z-10">
        <SimpleNavigationMenu activeTab={activeNavTab} onTabChange={handleNavTabChange} />
        <GtcfxBanner />
      </div>

      <AboutTour />

      {/* Gallery Content */}
      <div id="gallery-content" className="relative bg-black py-12 md:py-16 scroll-mt-24">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <GalleryHeading />
          <VideoGalleryGrid activeTab={activeGalleryTab} />
        </div>
      </div>

      {/* Footer Banner */}
      <MainFooter />
    </div>
  );
}
