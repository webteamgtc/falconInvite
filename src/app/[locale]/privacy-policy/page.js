"use client";

import { useState, useEffect } from "react";
import SimpleNavigationMenu from "../components/SimpleNavigationMenu";
import MainFooter from "../components/MainFooter";
import PolicyHero from "./components/PolicyHero";
import PolicyToc from "./components/PolicyToc";
import PolicyContent from "./components/PolicyContent";

const TOC_ITEMS = [
  { id: "event-information", label: "1. Event Information" },
  { id: "invitation-eligibility", label: "2. Invitation, Eligibility & Admission" },
  { id: "registration-identity", label: "3. Registration & Identity Verification" },
  { id: "qualified-ib", label: "4. Qualified IB Eligibility Criteria" },
  { id: "paid-tickets", label: "5. Paid Tickets & Guest Access" },
  { id: "travel-visa", label: "6. Travel, Visa & Accommodation" },
  { id: "schedule-force-majeure", label: "7. Event Schedule & Force Majeure" },
  { id: "conduct-ethics", label: "8. Conduct, Ethics & Removal Policy" },
  { id: "dress-code", label: "9. Dress Code" },
  { id: "media-photography", label: "10. Media, Photography & Recording" },
  { id: "sponsorship", label: "11. Sponsorship & Promotional Activities" },
  { id: "personal-data", label: "12. Personal Data We Collect" },
  { id: "how-we-use", label: "13. How We Use Your Information" },
  { id: "data-protection", label: "14. Data Protection & Security" },
  { id: "liability", label: "15. Liability Disclaimer" },
  { id: "governing-law", label: "16. Governing Law & Final Authority" },
  { id: "conditions-awards", label: "Conditions for Each Award" },
];

export default function PrivacyPolicyPage() {
  const [activeNavTab, setActiveNavTab] = useState("/privacy-policy");
  const [activeSectionId, setActiveSectionId] = useState(TOC_ITEMS[0]?.id ?? "");

  const handleNavTabChange = (newTab) => {
    setActiveNavTab(newTab);
    if (newTab !== "/privacy-policy") {
      window.location.href = newTab || "/";
    }
  };

  // Scroll spy: highlight TOC item when its section is in view
  useEffect(() => {
    const sectionIds = TOC_ITEMS.map((item) => item.id);
    let cleanup = null;

    const setupObserver = () => {
      const elements = sectionIds
        .map((id) => document.getElementById(id))
        .filter(Boolean);

      if (elements.length === 0) return;

      const observer = new IntersectionObserver(
        (entries) => {
          const intersecting = entries.filter((e) => e.isIntersecting);
          if (intersecting.length === 0) return;

          const byTop = [...intersecting].sort(
            (a, b) => a.boundingClientRect.top - b.boundingClientRect.top
          );
          const topmost = byTop[0];
          if (topmost?.target?.id) {
            setActiveSectionId(topmost.target.id);
          }
        },
        {
          root: null,
          rootMargin: "-120px 0px -60% 0px",
          threshold: 0,
        }
      );

      elements.forEach((el) => observer.observe(el));
      return () => elements.forEach((el) => observer.unobserve(el));
    };

    const timeoutId = setTimeout(() => {
      cleanup = setupObserver();
    }, 100);

    return () => {
      clearTimeout(timeoutId);
      if (typeof cleanup === "function") cleanup();
    };
  }, []);

  return (
    <div className="policy-page w-full min-h-screen bg-[#0B0B0B]">
      <SimpleNavigationMenu activeTab={activeNavTab} onTabChange={handleNavTabChange} />

      <main className="relative pt-24 md:pt-28 ">
        <PolicyHero />
        <div className="mx-auto w-full max-w-7xl px-4 md:px-4">
          <div className="relative rounded-xl border border-white/10 bg-[#0A0A0A]/95 shadow-xl">
            <div className="absolute inset-0 rounded-xl ring-1 ring-inset ring-white/5 pointer-events-none" aria-hidden />
            <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-0 lg:items-start">
              <aside className="lg:col-span-5 xl:col-span-4 lg:sticky lg:top-24 lg:max-h-[calc(100vh-6rem)] lg:overflow-y-auto px-4 md:px-4 py-8 lg:py-8 lg:bg-[#0A0A0A] lg:z-10 lg:rounded-l-xl policy-toc-scroll">
                <PolicyToc items={TOC_ITEMS} activeSectionId={activeSectionId} />
              </aside>
              <div className="lg:col-span-7 xl:col-span-8 px-4 md:px-4 py-8 lg:py-8 lg:rounded-r-xl">
                <PolicyContent />
              </div>
            </div>
          </div>
        </div>
      </main>

      <MainFooter showBg={true} bgColor="#050816" />
    </div>
  );
}
