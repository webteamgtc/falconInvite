"use client";

import { useState } from "react";
import SimpleNavigationMenu from "../components/SimpleNavigationMenu";
import TermsHeader from "./components/TermsHeader";
import TermsSidebar from "./components/TermsSidebar";
import TermsContent from "./components/TermsContent";
import TermsFooter from "./components/TermsFooter";
import { SECTIONS } from "./components/termsData";
import TermsConditionsSection from "./components/TermsHeader";

export default function TermAndConditionsPage() {
  const [activeNavTab, setActiveNavTab] = useState("policy");

  const handleNavTabChange = (newTab) => {
    setActiveNavTab(newTab);
    if (newTab !== "policy") {
      window.location.href = `/${newTab}`;
    }
  };

  return (
    <div className="w-full min-h-screen bg-black">
      <SimpleNavigationMenu activeTab={activeNavTab} onTabChange={handleNavTabChange} />

      <main className="relative">
        <TermsHeader />
        <TermsConditionsSection/>
        <TermsFooter />
      </main>
    </div>
  );
}
