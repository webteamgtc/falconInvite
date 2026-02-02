"use client";

import { useState } from "react";
import SimpleNavigationMenu from "../components/SimpleNavigationMenu";
import MediaHeader from "./components/MediaHeader";
import WhoCanApply from "./components/WhoCanApply";
import MediaRegistrationForm from "./components/MediaRegistrationForm";
import MediaFooter from "./components/MediaFooter";

export default function MediaPage() {
  const [activeNavTab, setActiveNavTab] = useState("media");

  const handleNavTabChange = (newTab) => {
    setActiveNavTab(newTab);
    if (newTab !== "media") {
      window.location.href = `/${newTab}`;
    }
  };

  return (
    <div className="w-full min-h-screen bg-black">
      <SimpleNavigationMenu activeTab={activeNavTab} onTabChange={handleNavTabChange} />

      <main className="relative">
        <MediaHeader />
        <WhoCanApply />
        <MediaRegistrationForm />
        <MediaFooter />
      </main>
    </div>
  );
}
