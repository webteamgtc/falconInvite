"use client";

import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import Image from "next/image";

export default function SimpleNavigationMenu({ activeTab, onTabChange }) {
  const [scrolled, setScrolled] = useState(false);
  const router = useRouter();
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
    { id: "/awards", label: "Awards" },

    { id: "/guest", label: "Guest" },
    { id: "/ticket", label: "Ticket" },
    { id: "/privacy-policy", label: "Terms & Condtions" },

  ];

  return (
<nav
  className={`
    sticky top-0 left-0 w-full z-[999]
    transition-all duration-300
    ${scrolled
      ? "bg-[#05083E]/10 backdrop-blur-lg shadow-xl"
      : "bg-transparent"}
  `}
>
      <div className="relative container mx-auto px-4 md:px-6 lg:px-8 max-w-full min-w-0">
        {/* Mobile: stacked layout — logo centered, menu always visible */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between py-2">
          {/* Logo — center on mobile, left on desktop */}
          <div className="flex-shrink-0 group cursor-pointer flex justify-center md:justify-start order-1 md:order-1"
          onClick={() => router.push("/")}
          >
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
          <div className="hidden md:flex items-center gap-1 lg:gap-2 order-2">
            {navItems.map((item, index) => {
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => router.push(item.id)}
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

          {/* Mobile Navigation — always visible, no hamburger */}
          <div className="flex md:hidden flex-wrap items-center justify-center gap-1 order-2 pt-2">
            {navItems?.slice(0,-1)?.map((item) => {
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => router.push(item.id)}
                  className="group cursor-pointer relative px-1.5 py-2 transition-all duration-300"
                >
                  <span
                    className={`
                      text-sm font-medium tracking-wide transition-all duration-300
                      ${isActive
                        ? "text-transparent bg-clip-text font-semibold"
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
                  {isActive && (
                    <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[#956E42] via-[#B48755] to-[#E9DDCF] rounded-full" />
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
