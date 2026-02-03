"use client";

import { useState, useEffect } from "react";
import GoldenFalconHeroMobile from "../components/HeroSlider";
import SimpleNavigationMenu from "../components/SimpleNavigationMenu";

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
    <div className="w-full min-h-screen relative bg-black">

      {/* Content Sections */}
      <div className="relative">
        {/* Hero Section */}
        <SimpleNavigationMenu activeTab={activeTab} onTabChange={handleTabChange} />

        <section id="hero" className="w-full">
          <GoldenFalconHeroMobile activeTab={activeTab} />
        </section>

        {/* <section id="guests" className="w-full">
          <DistinguishedGuestsGrid />
        </section>

        <section id="agenda" className="w-full">
          <EventAgendaSection />
        </section>

        <section id="partners" className="w-full">
          <PartnerOrganizationsSection />
        </section>

        <section id="media" className="w-full">
          <PartnerMediaSection />
        </section>

        <section id="footer" className="w-full">
          <GtcFooterStrip />
        </section> */}
      </div>
    </div>
  );
}

// Enhanced Navigation Menu Component - Attractive and user-friendly
// function SimpleNavigationMenu({ activeTab, onTabChange }) {
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
//   const [scrolled, setScrolled] = useState(false);

//   // Detect scroll for nav styling
//   useEffect(() => {
//     const handleScroll = () => {
//       setScrolled(window.scrollY > 20);
//     };
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   const navItems = [
//     { id: "home", label: "Home", icon: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" },
//     { id: "gallery", label: "Gallery", icon: "M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" },
//     { id: "agenda", label: "Agenda", icon: "M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" },
//     { id: "guest", label: "Guests", icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" },
//     { id: "media", label: "Media", icon: "M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" },
//     { id: "policy", label: "Policy", icon: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" },
//   ];

//   return (
//     <nav 
//       className={`
//         w-full fixed top-0 left-0 right-0 z-50
//         transition-all duration-500 ease-in-out
//         ${scrolled 
//           ? "bg-gradient-to-b from-black/95 via-black/90 to-black/85 backdrop-blur-xl shadow-2xl border-b border-white/30" 
//           : "bg-gradient-to-b from-black/80 via-black/70 to-black/60 backdrop-blur-lg border-b border-white/20"
//         }
//       `}
//     >
//       <div className="container mx-auto px-4 md:px-6 lg:px-8">
//         <div className="flex items-center justify-between h-16 md:h-20">
//           {/* Logo with hover effect */}
//           <div className="flex-shrink-0 group cursor-pointer">
//             <div className="relative">
//               <div className="absolute inset-0 bg-gradient-to-r from-[#956E42]/20 to-[#E9DDCF]/20 rounded-lg blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
//               <img
//                 src="/logo.svg"
//                 alt="GTCFX Logo"
//                 className="relative h-8 md:h-10 lg:h-12 w-auto transition-transform duration-300 group-hover:scale-105"
//               />
//             </div>
//           </div>

//           {/* Desktop Navigation */}
//           <div className="hidden md:flex items-center gap-1 lg:gap-2">
//             {navItems.map((item, index) => {
//               const isActive = activeTab === item.id;
//               return (
//                 <button
//                   key={item.id}
//                   onClick={() => {
//                     onTabChange(item.id);
//                     setIsMobileMenuOpen(false);
//                   }}
//                   className="group relative px-3 py-2 lg:px-4 lg:py-2.5 transition-all duration-300"
//                   style={{ animationDelay: `${index * 50}ms` }}
//                 >
//                   {/* Label */}
//                   <span 
//                     className={`
//                       text-sm lg:text-base font-medium tracking-wide transition-all duration-300
//                       ${isActive 
//                         ? "text-transparent bg-clip-text bg-gradient-to-r from-[#956E42] to-[#E9DDCF] font-semibold" 
//                         : "text-white/70 group-hover:text-white"
//                       }
//                     `}
//                     style={isActive ? {
//                       background: "linear-gradient(180deg, #956E42 0%, #E9DDCF 100%)",
//                       WebkitBackgroundClip: "text",
//                       WebkitTextFillColor: "transparent",
//                       backgroundClip: "text"
//                     } : {}}
//                   >
//                     {item.label}
//                   </span>
                  
//                   {/* Active underline with gradient */}
//                   {isActive && (
//                     <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[#956E42] via-[#B48755] to-[#E9DDCF] rounded-full shadow-lg shadow-[#956E42]/50" />
//                   )}
                  
//                   {/* Hover underline effect */}
//                   {!isActive && (
//                     <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-[#956E42] to-[#E9DDCF] rounded-full group-hover:w-3/4 transition-all duration-300" />
//                   )}
//                 </button>
//               );
//             })}
//           </div>

//           {/* Mobile Menu Button */}
//           <button
//             onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
//             aria-label="Toggle menu"
//             className="md:hidden relative w-10 h-10 flex items-center justify-center text-white/80 hover:text-white transition-colors duration-300"
//           >
//             <svg
//               className="w-6 h-6 transition-transform duration-300"
//               fill="none"
//               stroke="currentColor"
//               strokeWidth="2.5"
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               viewBox="0 0 24 24"
//             >
//               {isMobileMenuOpen ? (
//                 <path d="M6 18L18 6M6 6l12 12" />
//               ) : (
//                 <path d="M4 6h16M4 12h16M4 18h16" />
//               )}
//             </svg>
//           </button>
//         </div>

//         {/* Mobile Navigation Menu with slide animation */}
//         <div
//           className={`
//             md:hidden overflow-hidden transition-all duration-500 ease-in-out
//             ${isMobileMenuOpen ? "max-h-96 opacity-100 pb-4" : "max-h-0 opacity-0"}
//           `}
//         >
//           <div className="pt-4 space-y-1">
//             {navItems.map((item, index) => {
//               const isActive = activeTab === item.id;
//               return (
//                 <button
//                   key={item.id}
//                   onClick={() => {
//                     onTabChange(item.id);
//                     setIsMobileMenuOpen(false);
//                   }}
//                   className="group w-full relative flex items-center px-4 py-3 transition-all duration-300 text-left"
//                   style={{ animationDelay: `${index * 50}ms` }}
//                 >
//                   {/* Label */}
//                   <span 
//                     className={`
//                       text-base font-medium flex-1 transition-all duration-300
//                       ${isActive 
//                         ? "text-transparent bg-clip-text bg-gradient-to-r from-[#956E42] to-[#E9DDCF] font-semibold" 
//                         : "text-white/70 group-hover:text-white"
//                       }
//                     `}
//                     style={isActive ? {
//                       background: "linear-gradient(180deg, #956E42 0%, #E9DDCF 100%)",
//                       WebkitBackgroundClip: "text",
//                       WebkitTextFillColor: "transparent",
//                       backgroundClip: "text"
//                     } : {}}
//                   >
//                     {item.label}
//                   </span>
                  
//                   {/* Active indicator line */}
//                   {isActive && (
//                     <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-[#956E42] via-[#B48755] to-[#E9DDCF] rounded-r-full" />
//                   )}
                  
//                   {/* Hover arrow */}
//                   {!isActive && (
//                     <svg
//                       className="w-4 h-4 text-white/30 group-hover:text-white/60 group-hover:translate-x-1 transition-all duration-300"
//                       fill="none"
//                       stroke="currentColor"
//                       strokeWidth="2"
//                       viewBox="0 0 24 24"
//                     >
//                       <path d="M9 5l7 7-7 7" />
//                     </svg>
//                   )}
//                 </button>
//               );
//             })}
//           </div>
//         </div>
//       </div>
//     </nav>
//   );
// }
