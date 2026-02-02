"use client";

import { useState, useEffect, useRef } from "react";
import EventAgendaSection from "./components/EventCard";
import GtcFooterStrip from "./components/FooterCard";
import DistinguishedGuestsGrid from "./components/GuestCard";
import GoldenFalconHeroMobile from "./components/HeroSlider";
import PartnerOrganizationsSection from "./components/PartnerOrg";
import PartnerMediaSection from "./components/PartnerMedia";
import NavigationMenu from "./components/NavigationMenu";
import FlipBook from "./components/dummyPage";
import Image from "next/image";

const page = () => {
  const [activeTab, setActiveTab] = useState("home");
  const [isFlipping, setIsFlipping] = useState(false);
  const flipBookRef = useRef(null);
  const isNavigatingRef = useRef(false);

  // Tab order mapping to page indices
  const tabOrder = ["home", "gallery", "agenda", "guest", "media", "policy"];
  const tabToPageIndex = {
    "home": 0,
    "gallery": 1,
    "agenda": 2,
    "guest": 3,
    "media": 4,
    "policy": 5
  };

  const handleTabChange = (newTab) => {
    if (newTab === activeTab || isNavigatingRef.current) return;

    const targetPage = tabToPageIndex[newTab];
    if (flipBookRef.current && targetPage !== undefined) {
      try {
        isNavigatingRef.current = true;
        setIsFlipping(true);

        // Wait for next tick to ensure flipbook is ready
        requestAnimationFrame(() => {
          setTimeout(() => {
            try {
              const flipBook = flipBookRef.current?.pageFlip();
              if (flipBook && typeof flipBook.flip === 'function') {
                const currentPage = flipBook.getCurrentPageIndex();
                if (currentPage !== targetPage) {
                  // Use flip method - it should animate to the target page
                  flipBook.flip(targetPage);
                } else {
                  // Already on target page
                  isNavigatingRef.current = false;
                  setIsFlipping(false);
                }
              } else {
                // Retry if flipbook not ready
                setTimeout(() => {
                  const retryFlipBook = flipBookRef.current?.pageFlip();
                  if (retryFlipBook && typeof retryFlipBook.flip === 'function') {
                    retryFlipBook.flip(targetPage);
                  } else {
                    isNavigatingRef.current = false;
                    setIsFlipping(false);
                  }
                }, 200);
              }
            } catch (err) {
              console.error('Error in flip operation:', err);
              isNavigatingRef.current = false;
              setIsFlipping(false);
            }
          }, 50);
        });
      } catch (error) {
        console.error('Error flipping page:', error);
        isNavigatingRef.current = false;
        setIsFlipping(false);
      }
    }
  };

  // Handle flipbook page change
  const handlePageChange = (e) => {
    const pageIndex = typeof e === 'object' && e.data !== undefined ? e.data : e;
    const tab = tabOrder[pageIndex];
    if (tab && tab !== activeTab) {
      setActiveTab(tab);
    }
    // Reset after animation completes (1200ms flippingTime + buffer)
    setTimeout(() => {
      isNavigatingRef.current = false;
      setIsFlipping(false);
    }, 1300);
  };

  // Hide body scroll during page flip
  useEffect(() => {
    if (isFlipping) {
      // Save current scroll position
      const scrollY = window.scrollY;
      const scrollX = window.scrollX;
      // Hide scrollbars
      document.body.style.overflow = 'hidden';
      document.body.style.position = 'fixed';
      document.body.style.top = `-${scrollY}px`;
      document.body.style.left = `-${scrollX}px`;
      document.body.style.width = '100%';
      document.body.style.height = '100%';

      return () => {
        // Restore scrollbars and scroll position
        document.body.style.overflow = '';
        document.body.style.position = '';
        document.body.style.top = '';
        document.body.style.left = '';
        document.body.style.width = '';
        document.body.style.height = '';
        window.scrollTo(scrollX, scrollY);
      };
    }
  }, [isFlipping]);

  // Sync flipbook page with activeTab on initial mount only
  const isInitialMount = useRef(true);
  useEffect(() => {
    if (isInitialMount.current && flipBookRef.current) {
      isInitialMount.current = false;
      const currentPage = tabToPageIndex[activeTab];
      try {
        const flipBook = flipBookRef.current.pageFlip();
        if (flipBook && currentPage !== undefined) {
          const currentIndex = flipBook.getCurrentPageIndex();
          if (currentIndex !== currentPage) {
            flipBook.flip(currentPage);
          }
        }
      } catch (error) {
        console.error('Error syncing page:', error);
      }
    }
  }, []);

  return (
    <>
      <div
        className="w-full relative min-h-screen overflow-hidden"
        style={{
          backgroundImage: "url('/bg.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "fixed"
        }}
      >
        {/* Full background image - always visible */}
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: "url('/bg.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat"
          }}
        />

        {/* Navigation Menu - Above content */}
        <div className="relative z-50">
          <NavigationMenu activeTab={activeTab} onTabChange={handleTabChange} />
        </div>

        {/* Flipbook Content - Flips above background */}
        <div className="relative z-10">
          <div className="flex items-center justify-center py-6 animate-fade-in-down">
            <div className="relative group cursor-pointer">
              <div className="absolute inset-0 bg-gradient-to-b from-[#956E42]/20 to-transparent blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
              <Image
                className="w-[80px] h-[52px] md:w-[100px] md:h-[65px] lg:w-[140px] lg:h-[91px] xl:w-[180px] xl:h-[117px] transition-transform duration-500 group-hover:scale-105 drop-shadow-[0_4px_20px_rgba(149,110,66,0.3)]"
                src="/logo.svg"
                alt="GTCFX Logo"
                width={180}
                height={117}
                priority
              />
            </div>
          </div>
          <FlipBook
            bookRef={flipBookRef}
            onPageChange={handlePageChange}
            activeTab={activeTab}
          />
        </div>
    </div>
    </>
  );
};

export default page;


