"use client";

import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";

export default function SimpleNavigationMenu({ activeTab, onTabChange }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const router = useRouter()
  // Detect scroll for nav styling
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { id: "/new-1", label: "Home" },
    { id: "/gallery", label: "Gallery" },
    { id: "/agenda", label: "Agenda" },
    { id: "/guest", label: "Guests" },
    { id: "/media", label: "Media" },
    { id: "/policy", label: "Policy" },
  ];

  return (
    <nav
      className={`
        w-full sticky top-0 z-50
        transition-all duration-500 ease-in-out
        ${scrolled
          ? "bg-gradient-to-b from-black/95 via-black/90 to-black/85 backdrop-blur-xl shadow-2xl border-b border-white/30"
          : "bg-gradient-to-b from-black/80 via-black/70 to-black/60 backdrop-blur-lg border-b border-white/20"
        }
      `}
    >
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo with hover effect */}
          <div className="flex-shrink-0 group cursor-pointer">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-[#956E42]/20 to-[#E9DDCF]/20 rounded-lg blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <img
                src="/logo.svg"
                alt="GTCFX Logo"
                className="relative h-8 md:h-10 lg:h-12 w-auto transition-transform duration-300 group-hover:scale-105"
              />
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1 lg:gap-2">
            {navItems.map((item, index) => {
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => {
                    router.push(item.id);
                    setIsMobileMenuOpen(false);
                  }}
                  className="group relative px-3 py-2 lg:px-4 lg:py-2.5 transition-all duration-300"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  {/* Label */}
                  <span
                    className={`
                      text-sm lg:text-base font-medium tracking-wide transition-all duration-300
                      ${isActive
                        ? "text-transparent bg-clip-text bg-gradient-to-r from-[#956E42] to-[#E9DDCF] font-semibold"
                        : "text-white/70 group-hover:text-white"
                      }
                    `}
                    style={isActive ? {
                      background: "linear-gradient(180deg, #956E42 0%, #E9DDCF 100%)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text"
                    } : {}}
                  >
                    {item.label}
                  </span>

                  {/* Active underline with gradient */}
                  {isActive && (
                    <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[#956E42] via-[#B48755] to-[#E9DDCF] rounded-full shadow-lg shadow-[#956E42]/50" />
                  )}

                  {/* Hover underline effect */}
                  {!isActive && (
                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-[#956E42] to-[#E9DDCF] rounded-full group-hover:w-3/4 transition-all duration-300" />
                  )}
                </button>
              );
            })}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
            className="md:hidden relative w-10 h-10 flex items-center justify-center text-white/80 hover:text-white transition-colors duration-300"
          >
            <svg
              className="w-6 h-6 transition-transform duration-300"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              viewBox="0 0 24 24"
            >
              {isMobileMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation Menu with slide animation */}
        <div
          className={`
            md:hidden overflow-hidden transition-all duration-500 ease-in-out
            ${isMobileMenuOpen ? "max-h-96 opacity-100 pb-4" : "max-h-0 opacity-0"}
          `}
        >
          <div className="pt-4 space-y-1">
            {navItems.map((item, index) => {
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => {
                    router.push(item.id);
                    setIsMobileMenuOpen(false);
                  }}
                  className="group w-full relative flex items-center px-4 py-3 transition-all duration-300 text-left"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  {/* Label */}
                  <span
                    className={`
                      text-base font-medium flex-1 transition-all duration-300
                      ${isActive
                        ? "text-transparent bg-clip-text bg-gradient-to-r from-[#956E42] to-[#E9DDCF] font-semibold"
                        : "text-white/70 group-hover:text-white"
                      }
                    `}
                    style={isActive ? {
                      background: "linear-gradient(180deg, #956E42 0%, #E9DDCF 100%)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text"
                    } : {}}
                  >
                    {item.label}
                  </span>

                  {/* Active indicator line */}
                  {isActive && (
                    <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-[#956E42] via-[#B48755] to-[#E9DDCF] rounded-r-full" />
                  )}

                  {/* Hover arrow */}
                  {!isActive && (
                    <svg
                      className="w-4 h-4 text-white/30 group-hover:text-white/60 group-hover:translate-x-1 transition-all duration-300"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                    >
                      <path d="M9 5l7 7-7 7" />
                    </svg>
                  )}
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </nav>
  );
}
