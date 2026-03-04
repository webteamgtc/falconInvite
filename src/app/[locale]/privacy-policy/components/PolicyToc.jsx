"use client";

import { useEffect } from "react";

function handleTocClick(e, id) {
  const el = document.getElementById(id);
  if (el) {
    e.preventDefault();
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

export default function PolicyToc({ items = [], activeSectionId = "" }) {
  // Scroll left TOC so the active item is visible
  useEffect(() => {
    if (!activeSectionId) return;
    const activeLink = document.querySelector(
      `a[data-toc-id="${activeSectionId}"]`
    );
    if (activeLink) {
      activeLink.scrollIntoView({ block: "nearest", behavior: "smooth" });
    }
  }, [activeSectionId]);

  return (
    <nav aria-label="Table of contents">
      <h2 className="text-[13px] font-semibold uppercase tracking-widest text-[#B48755] mb-4 shrink-0">
        Contents
      </h2>
      <ul className="space-y-2">
        {items.map((item) => {
          const isActive = activeSectionId === item.id;
          return (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                data-toc-id={item.id}
                onClick={(e) => handleTocClick(e, item.id)}
                className={`group flex items-center gap-3 py-3 px-4 rounded-lg border text-left text-[13px] md:text-[14px] leading-snug focus:outline-none transition-all duration-200 ${
                  isActive
                    ? "border-[#B48755]/70 bg-[#B48755]/10 text-[#E9DDCF]"
                    : "border-white/10 bg-white/[0.02] text-white/75 hover:text-[#E9DDCF] hover:border-[#B48755]/50 hover:bg-white/[0.06]"
                }`}
              >
                <span
                  className={`flex h-6 w-6 shrink-0 items-center justify-center rounded text-[10px] font-semibold transition-colors ${
                    isActive
                      ? "bg-[#B48755]/30 text-[#B48755]"
                      : "bg-white/5 text-white/50 group-hover:bg-[#B48755]/20 group-hover:text-[#B48755]"
                  }`}
                >
                  ›
                </span>
                <span className="font-medium">{item.label}</span>
              </a>
            </li>
          );
        })}
      </ul>
      <div className="mt-8 pt-6 border-t border-white/10">
        <p className="text-[12px] leading-relaxed text-white/50">
          Questions?
        </p>
        <a
          href="mailto:support@gtcfx.com"
          className="inline-block mt-1.5 text-[13px] text-[#B48755] hover:text-[#E9DDCF] transition-colors"
        >
          support@gtcfx.com
        </a>
      </div>
    </nav>
  );
}
