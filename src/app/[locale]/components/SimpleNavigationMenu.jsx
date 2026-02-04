"use client";

import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import Image from "next/image";

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
    { id: "/", label: "Home" },
    { id: "/gallery", label: "Gallery" },
    // { id: "/guest", label: "Agenda" },
    { id: "/ticket", label: "Ticket" },
    { id: "/partners", label: "Media & Partners" },
    { id: "/awards", label: "Awards" },

  ];

  return (
    <nav
      className={`
        w-full sticky top-0 z-50
        transition-all duration-500 ease-in-out
        ${scrolled
          ? " backdrop-blur-xl shadow-2xl"
          : "bg-transparent"
        }
      `}
    >
      <div className="relative container mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex items-center justify-between py-2">
          {/* Logo with hover effect */}
          <div className="flex-shrink-0 group cursor-pointer">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-[#956E42]/20 to-[#E9DDCF]/20 rounded-lg blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
             <div className="flex-1">
                    <Image
                        src="https://gtcfx-bucket.s3.ap-southeast-1.amazonaws.com/img/footer-logo.webp"
                        width={200}
                        height={72}
                        alt="GTCFX"
                        className="lg:w-[150px] mx-auto lg:h-[62px] md:w-[120px] md:h-[53px] w-[130px] h-[47px] cursor-pointer"
                    />
                </div>
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
                  className="group cursor-pointer relative px-3 py-2 lg:px-4 lg:py-2.5 transition-all duration-300"
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

        {/* Mobile Navigation Menu - positioned below nav with background */}
        <div
          className={`
            md:hidden absolute left-0 right-0 top-full
            overflow-hidden transition-all duration-500 ease-in-out
            rounded-b-xl -mx-4 md:mx-0
            bg-black/95 backdrop-blur-xl border-b border-white/10 shadow-xl
            ${isMobileMenuOpen ? "max-h-96 opacity-100 py-4" : "max-h-0 opacity-0 py-0"}
          `}
        >
          <div className="pt-2 px-6 space-y-1">
            {navItems.map((item, index) => {
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => {
                    router.push(item.id);
                    setIsMobileMenuOpen(false);
                  }}
                  className="group cursor-pointer w-full relative flex items-center px-4 py-3 transition-all duration-300 text-left"
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

                 
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </nav>
  );
}
