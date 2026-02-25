"use client";

import { useState } from "react";
import Image from "next/image";

function cn(...classes) {
    return classes.filter(Boolean).join(" ");
}

// Dummy gallery data: mix of images and videos (no API)
const DUMMY_GALLERY = [
    {
        id: "1",
        type: "image",
        title: "Event Opening",
        thumbs: [
            "/gallery-banner-img1.svg",
            "/gallery-banner-img2.svg",
            "/gallery-banner-img3.svg",
            "/gallery-banner-img4.svg",
            "/gallery-banner-img5.svg",
        ],
    },
    {
        id: "2",
        type: "video",
        title: "Keynote Session",
        thumbs: [
            "/video-thumbnil.svg",
            "/video-thumbnil2.svg",
            "/gallery-banner-img1.svg",
        ],
        videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
        poster: "/video-thumbnil.svg",
    },
    {
        id: "3",
        type: "image",
        title: "Awards Night",
        thumbs: [
            "/gallery-banner-img2.svg",
            "/gallery-banner-img3.svg",
            "/gallery-banner-img4.svg",
        ],
    },
    {
        id: "4",
        type: "video",
        title: "Networking",
        thumbs: ["/video-thumbnil2.svg", "/gallery-banner-img5.svg"],
        videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
        poster: "/video-thumbnil2.svg",
    },
    {
        id: "5",
        type: "image",
        title: "Closing Ceremony",
        thumbs: [
            "/gallery-banner-img4.svg",
            "/gallery-banner-img5.svg",
            "/gallery-banner-img1.svg",
        ],
    },
    {
        id: "6",
        type: "image",
        title: "Event Schedule",
        thumbs: [
            "/gallery-banner-img4.svg",
        ],
    },
    {
        id: "7",
        type: "image",
        title: "Guest List",
        thumbs: [
            "/gallery-banner-img4.svg",
        ],
    },
    {
        id: "8",
        type: "video",
        title: "Networking",
        thumbs: ["/video-thumbnil2.svg", "/gallery-banner-img5.svg"],
        videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
        poster: "/video-thumbnil2.svg",
    },
    {
        id: "9",
        type: "image",
        title: "Panel Discussion",
        thumbs: ["/gallery-banner-img1.svg", "/gallery-banner-img2.svg"],
    },
    {
        id: "10",
        type: "image",
        title: "Dinner Reception",
        thumbs: ["/gallery-banner-img3.svg", "/gallery-banner-img4.svg", "/gallery-banner-img5.svg"],
    },
    {
        id: "11",
        type: "video",
        title: "Highlights Reel",
        thumbs: ["/video-thumbnil.svg"],
        videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
        poster: "/video-thumbnil.svg",
    },
    {
        id: "12",
        type: "image",
        title: "Venue & Setup",
        thumbs: ["/gallery-banner-img5.svg", "/gallery-banner-img1.svg"],
    },
];

export default function GalleryGrid() {
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [selectedThumbIndex, setSelectedThumbIndex] = useState(0);

    const item = DUMMY_GALLERY[selectedIndex];
    const currentMediaUrl =
        item?.type === "video"
            ? item.videoUrl
            : item?.thumbs?.[selectedThumbIndex] ?? item?.thumbs?.[0];
    const isVideo = item?.type === "video";

    return (
        <section id="gallery-grid" className="w-full  ">
            <div className="relative overflow-hidden">
                <div className="relative ">
                    <div>
                        <h2 className="text-2xl font-bold text-white mt-2" >2025 Highlights</h2>
                        <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 pt-10">
                            <div className="flex flex-row flex-nowrap gap-3 overflow-x-auto pb-2 px-1.5 py-1 lg:flex-col lg:flex-nowrap lg:overflow-x-visible lg:overflow-y-auto lg:max-h-[480px] lg:gap-4 lg:max-w-[240px] lg:py-1.5 no-scrollbar">
                                {DUMMY_GALLERY.map((entry, idx) => {
                                    const thumb = entry.thumbs?.[0] ?? "/gallery-banner-img1.svg";
                                    const isSelected = idx === selectedIndex;
                                    return (
                                        <button
                                            key={entry.id}
                                            type="button"
                                            onClick={() => {
                                                setSelectedIndex(idx);
                                                setSelectedThumbIndex(0);
                                            }}
                                            className={cn(
                                                "relative h-24 w-36 shrink-0 overflow-hidden rounded-xl ring-1 transition md:h-28 md:w-40 lg:h-[120px] lg:w-[220px]",
                                                isSelected
                                                    ? "ring-2 ring-[#D48755] ring-offset-2 ring-offset-[#0b153a]"
                                                    : "ring-white/20 hover:ring-white/40"
                                            )}
                                        >
                                            <Image
                                                src={thumb}
                                                alt=""
                                                fill
                                                className="object-cover"
                                                sizes="(max-width: 1024px) 160px, 220px"
                                            />
                                            {entry.type === "video" && (
                                                <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                                                    <svg className="h-8 w-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                                                        <path d="M8 5v14l11-7z" />
                                                    </svg>
                                                </div>
                                            )}
                                        </button>
                                    );
                                })}
                            </div>

                            {/* RIGHT: Selected media (big) + inner thumbs if multiple */}
                            <div className="flex-1 min-w-0 space-y-4">
                                <div className="relative aspect-video w-full overflow-hidden">
                                    {isVideo ? (
                                        <video
                                            key={currentMediaUrl}
                                            src={currentMediaUrl}
                                            poster={item?.poster}
                                            controls
                                            className="h-full w-full object-contain"
                                            playsInline
                                        />
                                    ) : (
                                        <Image
                                            src={currentMediaUrl}
                                            alt={item?.title ?? ""}
                                            fill
                                            className="object-contain"
                                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 900px"
                                        />
                                    )}
                                </div>
                                {/* {item?.thumbs && item.thumbs.length > 1 && (
                                <div className="flex gap-2 overflow-x-auto pb-2">
                                    {item.thumbs.map((t, i) => (
                                        <button
                                            key={`${item.id}-${i}`}
                                            type="button"
                                            onClick={() => setSelectedThumbIndex(i)}
                                            className={cn(
                                                "relative h-14 w-20 shrink-0 overflow-hidden rounded-lg ring-1 transition md:h-16 md:w-24",
                                                i === selectedThumbIndex
                                                    ? "ring-2 ring-[#D48755]"
                                                    : "ring-white/20 hover:ring-white/40"
                                            )}
                                        >
                                            <Image
                                                src={t}
                                                alt=""
                                                fill
                                                className="object-cover"
                                                sizes="96px"
                                            />
                                        </button>
                                    ))}
                                </div>
                            )} */}

                                {item?.title && (
                                    <h3 className="text-lg font-semibold text-white md:text-xl">{item.title}</h3>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
