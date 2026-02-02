"use client";

export default function VideoGalleryGrid({ activeTab = "all" }) {
  // Gallery items with varying sizes - mix of videos and images
  // Heights are in arbitrary units to create masonry effect
  const galleryItems = [
    { id: 1, type: "video", height: "h-64 md:h-80" }, // Tall video
    { id: 2, type: "video", height: "h-48 md:h-64" }, // Medium video
    { id: 3, type: "image", height: "h-56 md:h-72" }, // Medium image
    { id: 4, type: "video", height: "h-52 md:h-68" }, // Medium video
    { id: 5, type: "image", height: "h-44 md:h-56" }, // Small image
    { id: 6, type: "image", height: "h-60 md:h-76" }, // Medium image
    { id: 7, type: "video", height: "h-48 md:h-64" }, // Medium video
    { id: 8, type: "image", height: "h-52 md:h-68" }, // Medium image
    { id: 9, type: "video", height: "h-64 md:h-80" }, // Tall video
    { id: 10, type: "image", height: "h-44 md:h-56" }, // Small image
  ];

  return (
    <div className="w-full px-4 md:px-6 lg:px-8">
      {/* Masonry Grid - Auto-adjusting columns */}
      <div className="columns-1 md:columns-2 gap-4 md:gap-6 lg:gap-8 max-w-7xl mx-auto">
        {galleryItems.map((item) => (
          <div
            key={item.id}
            className={`
              group relative mb-4 md:mb-6 lg:mb-8 break-inside-avoid
              bg-[#CCCCCC] rounded-xl md:rounded-2xl overflow-hidden
              cursor-pointer hover:opacity-90 transition-all duration-300
              hover:scale-[1.02] shadow-lg hover:shadow-xl
              ${item.height}
            `}
          >
            {/* Thumbnail - video-thumbnil.svg for videos, img-thumbnil.svg for images */}
            {item.type === "video" && (
              <img
                src="/video-thumbnil2.svg"
                alt="Video thumbnail"
                className="absolute inset-0 h-full w-full object-cover"
              />
            )}
            {item.type === "image" && (
              <img
                src="/img-thumbnil2.svg"
                alt="Image thumbnail"
                className="absolute inset-0 h-full w-full object-cover"
              />
            )}
            
            {/* Subtle border/outline */}
            <div className="absolute inset-0 border border-black/20 rounded-xl md:rounded-2xl pointer-events-none" />
          </div>
        ))}
      </div>
    </div>
  );
}
