"use client";

export default function GalleryTabs({ activeTab, onTabChange }) {
  const tabs = ["All", "Stage", "Guests", "Networking", "Videos"];

  return (
    <div className="flex justify-center max-w-4xl mx-auto w-full mb-8 md:mb-12">
      {/* Single container bar - dark with thin light border */}
      <div
        className="inline-flex items-center w-full gap-1 px-1.5 py-1.5 overflow-auto"
        style={{borderRadius: "8px",
          border: "1px solid rgba(255, 255, 255, 0.50)",
          background: "rgba(255, 255, 255, 0.10)",
          backdropFilter: "blur(28.200000762939453px)" }}
      >
        {tabs.map((tab) => {
          const isActive = activeTab === tab.toLowerCase();
          return (
            <button
              key={tab}
              onClick={() => onTabChange(tab.toLowerCase())}
              className={`
                px-5 py-2.5 flex-1 md:px-6 md:py-3 rounded-lg whitespace-nowrap
                text-sm md:text-[15px] font-medium
                transition-all duration-200 ease-out
                ${
                  isActive
                    ? "text-[#1a1a1a] shadow-sm"
                    : "text-white/70 hover:text-white/90"
                }
              `}
              style={{
                backgroundColor: isActive ? "#E9DDCF" : "transparent",
              }}
            >
              {tab}
            </button>
          );
        })}
      </div>
    </div>
  );
}
