"use client";

import { useState } from "react";
import Image from "next/image";

function cn(...classes) {
    return classes.filter(Boolean).join(" ");
}

function getYoutubeEmbedUrl(url) {
    if (!url || typeof url !== "string") return null;
    try {
        const u = new URL(url);
        if (u.hostname === "www.youtube.com" || u.hostname === "youtube.com") {
            const v = u.searchParams.get("v");
            return v ? `https://www.youtube.com/embed/${v}?autoplay=0` : null;
        }
        if (u.hostname === "youtu.be") {
            const v = u.pathname.slice(1).split("?")[0];
            return v ? `https://www.youtube.com/embed/${v}?autoplay=0` : null;
        }
    } catch (_) { }
    return null;
}

function videoEntry(id, title, videoId) {
    const thumbUrl = `https://img.youtube.com/vi/${videoId}/mqdefault.jpg`;
    return {
        id,
        type: "video",
        title,
        thumbs: [thumbUrl],
        videoUrl: `https://www.youtube.com/watch?v=${videoId}`,
        poster: thumbUrl,
    };
}

function imageEntry(id, title, thumbs) {
    return {
        id,
        type: "image",
        title,
        thumbs: Array.isArray(thumbs) ? thumbs : [thumbs],
    };
}

// Gallery items by year: mix of images and videos
const GALLERY_BY_YEAR = {
    2025: [
        videoEntry("2025-1", "Video 1", "4iFBw0wg82w"),
        imageEntry("2025-3", "Panel Discussion", ["/events/2025-1.jpg", "/events/2025-2.jpg"]),
        imageEntry("2025-3", "Panel Discussion", ["/events/2025-2.jpg", "/events/2025-2.jpg"]),
        videoEntry("2025-2", "Video 2", "fdGXBhPZd7c"),
        imageEntry("2025-3", "Panel Discussion", ["/events/2025-3.jpg", "/events/2025-3.jpg"]),
        imageEntry("2025-3", "Panel Discussion", ["/events/2025-4.jpg", "/events/2025-4.jpg"]),
        videoEntry("2025-4", "Video 3", "kGvHQmUq5vI"),
        imageEntry("2025-3", "Panel Discussion", ["/events/2025-5.jpg", "/events/2025-5.jpg"]),
        imageEntry("2025-3", "Panel Discussion", ["/events/2025-6.jpg", "/events/2025-6.jpg"]),
        imageEntry("2025-7", "Panel Discussion", ["/events/2025-7.jpg", "/events/2025-7.jpg"]),
        imageEntry("2025-8", "Panel Discussion", ["/events/2025-8.jpg", "/events/2025-8.jpg"]),
        imageEntry("2025-9", "Panel Discussion", ["/events/2025-9.jpg", "/events/2025-9.jpg"]),
        imageEntry("2025-10", "Panel Discussion", ["/events/2025-10.jpg", "/events/2025-10.jpg"]),

    ],

    2024: [
        imageEntry("2024-1", "Panel Discussion", ["/events/2024-1.webp", "/events/2024-1.webp"]),
        imageEntry("2024-2", "Panel Discussion", ["/events/2024-2.webp", "/events/2024-2.webp"]),
        videoEntry("2024-2", "Video 1", "emWEDdPsqhY"),
        imageEntry("2024-3", "Panel Discussion", ["/events/2024-3.webp", "/events/2024-3.webp"]),
        imageEntry("2024-4", "Panel Discussion", ["/events/2024-4.webp", "/events/2024-4.webp"]),
        imageEntry("2024-5", "Panel Discussion", ["/events/2024-5.webp", "/events/2024-5.webp"]),
        imageEntry("2024-6", "Panel Discussion", ["/events/2024-6.webp", "/events/2024-6.webp"]),
    ],
    2023: [
        imageEntry("2023-1", "Panel Discussion", ["/events/2023-1.webp", "/events/2023-1.webp"]),
        videoEntry("2023-1", "Video 1", "zQmY-j1EV7Q"),
        imageEntry("2023-2", "Panel Discussion", ["/events/2023-2.webp", "/events/2023-2.webp"]),
        videoEntry("2023-3", "Video 2", "ZbD_x5pvTQE"),
        imageEntry("2023-3", "Panel Discussion", ["/events/2023-3.webp", "/events/2023-3.webp"]),
        videoEntry("2023-4", "Video 3", "3ocvGAsyV6s"),
        imageEntry("2023-4", "Panel Discussion", ["/events/2023-4.webp", "/events/2023-4.webp"]),
    ],
    2022: [
        imageEntry("2022-1", "Panel Discussion", ["/events/2022-1.webp", "/events/2022-1.webp"]),
        videoEntry("2022-1", "GTCFX Partner Awards Ceremony", "XIylpVRmLeM"),
        imageEntry("2022-2", "Panel Discussion", ["/events/2022-2.webp", "/events/2022-2.webp"]),
        imageEntry("2022-3", "Panel Discussion", ["/events/2022-3.webp", "/events/2022-3.webp"]),
        videoEntry("2022-3", "GTCFX Superstar Performer Sales 2022 - Mr. Leon", "XIylpVRmLeM"), 
        imageEntry("2022-4", "Panel Discussion", ["/events/2022-4.webp", "/events/2022-4.webp"]),
    ],
};

// Years to show as separate "Highlights" sections (newest first)
const HIGHLIGHT_YEARS = [2025, 2024, 2023, 2022];

export default function GalleryGrid() {
    const [selectedIndexByYear, setSelectedIndexByYear] = useState({});
    const [selectedThumbIndexByYear, setSelectedThumbIndexByYear] = useState({});

    const getSelectedIndex = (year) => {
        const key = String(year);
        const value = selectedIndexByYear[key];
        return typeof value === "number" ? value : 0;
    };
    const getSelectedThumbIndex = (year) => {
        const key = String(year);
        const value = selectedThumbIndexByYear[key];
        return typeof value === "number" ? value : 0;
    };

    const handleThumbClick = (year, idx) => {
        const key = String(year);
        setSelectedIndexByYear((prev) => ({ ...prev, [key]: idx }));
        setSelectedThumbIndexByYear((prev) => ({ ...prev, [key]: 0 }));
    };

    return (
        <section id="gallery-grid" className="w-full">
            <div className="relative overflow-hidden">
                <div className="relative">
                    {HIGHLIGHT_YEARS.map((year) => {
                        const gallery = GALLERY_BY_YEAR[year] ?? [];
                        const selectedIndex = Math.min(getSelectedIndex(year), Math.max(0, gallery.length - 1));
                        const selectedThumbIndex = getSelectedThumbIndex(year);
                        const item = gallery[selectedIndex];
                        const currentMediaUrl =
                            item?.type === "video"
                                ? item.videoUrl
                                : item?.thumbs?.[selectedThumbIndex] ?? item?.thumbs?.[0];
                        const isVideo = item?.type === "video";
                        const youtubeEmbedUrl = isVideo && item?.videoUrl ? getYoutubeEmbedUrl(item.videoUrl) : null;

                        return (
                            <div key={year} id={`year-${year}`} className="mb-16 last:mb-0">
                                <h2 className="text-xl md:text-2xl font-bold text-white mt-2">{year} Highlights</h2>
                                <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 pt-10">
                                    <div className="flex flex-row flex-nowrap gap-3 overflow-x-auto pb-2 px-1.5 py-1 lg:flex-col lg:flex-nowrap lg:overflow-x-visible lg:overflow-y-auto lg:max-h-[480px] lg:gap-4 lg:max-w-[240px] lg:py-1.5 no-scrollbar">
                                        {gallery.length === 0 ? (
                                            <p className="text-white/70 text-sm py-4">No items for this year.</p>
                                        ) : (
                                            gallery.map((entry, idx) => {
                                                const thumb = entry.thumbs?.[0] ?? (entry.type === "video" ? "/video-thumbnil.svg" : "/gallery-banner-img1.svg");
                                                const isSelected = idx === selectedIndex;
                                                return (
                                                    <button
                                                        key={entry.id}
                                                        type="button"
                                                        onClick={() => handleThumbClick(year, idx)}
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
                                            })
                                        )}
                                    </div>

                                    {/* RIGHT: Selected media (big) */}
                                    <div className="flex-1 min-w-0 space-y-4">
                                        <div className="relative aspect-video w-full overflow-hidden rounded-xl">
                                            {!item ? (
                                                <div className="absolute inset-0 flex items-center justify-center bg-white/5 rounded-xl text-white/60">
                                                    No item selected
                                                </div>
                                            ) : isVideo && youtubeEmbedUrl ? (
                                                <iframe
                                                    key={`${year}-${selectedIndex}-${item.id}`}
                                                    src={youtubeEmbedUrl}
                                                    title={item?.title ?? "YouTube video"}
                                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                                    allowFullScreen
                                                    className="absolute inset-0 h-full w-full"
                                                />
                                            ) : isVideo ? (
                                                <video
                                                    key={`${year}-${selectedIndex}-${item.id}`}
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
                                        {/* 
                                        {item?.type === "image" && item.thumbs && item.thumbs.length > 1 && (
                                            <div className="flex gap-2 overflow-x-auto pb-2 no-scrollbar">
                                                {item.thumbs.map((t, i) => (
                                                    <button
                                                        key={`${item.id}-thumb-${i}`}
                                                        type="button"
                                                        onClick={() => {
                                                            const key = String(year);
                                                            setSelectedThumbIndexByYear((prev) => ({ ...prev, [key]: i }));
                                                        }}
                                                        className={cn(
                                                            "relative h-14 w-20 shrink-0 overflow-hidden rounded-lg ring-1 transition md:h-16 md:w-24",
                                                            i === selectedThumbIndex
                                                                ? "ring-2 ring-[#D48755] ring-offset-2 ring-offset-[#0b153a]"
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
                                        {/* 
                                        {item?.title && (
                                            <h3 className="text-lg font-semibold text-white md:text-xl">{item.title}</h3>
                                        )} */}
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
