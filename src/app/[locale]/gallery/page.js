"use client";

import { useState } from "react";
import SimpleNavigationMenu from "../components/SimpleNavigationMenu";
import GalleryHeading from "../components/GalleryHeading";
import GalleryTabs from "../components/GalleryTabs";
import VideoGalleryGrid from "../components/VideoGalleryGrid";
import { GtcfxBanner } from "./components/Banner";
import AboutTour from "./components/About";
import FooterBanner from "./components/FooterBanner";

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
      {/* Navigation Menu */}
      <div className="relative z-10">
        <SimpleNavigationMenu activeTab={activeNavTab} onTabChange={handleNavTabChange} />
        <GtcfxBanner />
      </div>

      <AboutTour />

      {/* Gallery Content */}
      <div className="relative bg-black py-12 md:py-16">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          {/* Gallery Heading */}
          <GalleryHeading />

          {/* Gallery Tabs */}
          <GalleryTabs activeTab={activeGalleryTab} onTabChange={handleGalleryTabChange} />

          {/* Video Gallery Grid */}
          <VideoGalleryGrid activeTab={activeGalleryTab} />
        </div>
      </div>

      {/* Footer Banner */}
      <FooterBanner />
    </div>
  );
}
