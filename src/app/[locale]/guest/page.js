"use client";

import { useState } from "react";
import SimpleNavigationMenu from "../components/SimpleNavigationMenu";
import EventSection from "./components/EventSection";
import GuestFooter from "./components/GuestFooter";
import EventSectionLast from "./components/AnnualMeeting";

export default function GuestPage() {
  const [activeNavTab, setActiveNavTab] = useState("guest");

  const handleNavTabChange = (newTab) => {
    setActiveNavTab(newTab);
    if (newTab !== "guest") {
      window.location.href = `/${newTab}`;
    }
  };

  const preDinnerData = {
    title: "Pre-Dinner Gathering",
    subtitle: "An Elegant Evening of Networking & Connection",
    date: "11 December 2026",
    description: "An elegant pre-dinner evening dedicated to networking and connection.",
    sectionHeading: "Evening Highlights",
    closingText: "This evening will be one for the record books.",
    items: [
      {
        title: "Welcome reception",
        speaker: { name: "President", role: "President of Falcon Invest Group | A visionary leader shaping the future", image: "/guest.svg" },
      },
      {
        title: "Networking with partners & guests",
        speaker: { name: "Shen Xiangyang", role: "Chief Executive Officer | Driving innovation and excellence", image: "/guest.svg" },
      },
      {
        title: "Light refreshments & informal discussions",
        speaker: { name: "Zhang Dong", role: "Chief Strategy Officer | Shaping the future of finance", image: "/guest.svg" },
      },
      {
        title: "Exclusive pre-event interactions",
        speaker: { name: "Zhang Dong", role: "Chief Strategy Officer | Shaping the future of finance", image: "/guest.svg" },
      },
    ],
  };

  const annualMeetingData = {
    title: "Annual Meeting & Golden Falcon Awards Night",
    subtitle: "A Day of Strategy, Recognition & Celebration",
    date: "12 December 2026",
    description: "A full day dedicated to strategy, recognition, and celebration.",
    sectionHeading: "Agenda Includes",
    closingText: "An unforgettable night honouring achievements, spirit, and teamwork.",
    items: [
      {
        title: "Opening Ceremony",
        speaker: { name: "Shen Xiangyang", role: "Chief Executive Officer | Leading with vision and integrity", image: "/guest.svg" },
      },
      {
        title: "Keynote Address",
        speaker: { name: "Zhang Dong", role: "Chief Strategy Officer | Strategic insights for the future", image: "/guest.svg" },
      },
      {
        title: "Golden Falcon Awards",
        speaker: { name: "Yan Junjie", role: "Chief Operations Officer | Celebrating excellence and achievement", image: "/guest.svg" },
      },
    ],
  };

  return (
    <div className="w-full min-h-screen bg-black">
      <SimpleNavigationMenu activeTab={activeNavTab} onTabChange={handleNavTabChange} />
      <main className="relative">
        <div className="relative z-10">
          <EventSection data={preDinnerData} />
          <EventSectionLast data={annualMeetingData} />
          <GuestFooter />
        </div>
      </main>
    </div>
  );
}
