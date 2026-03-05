"use client";

import { useState } from "react";
import SimpleNavigationMenu from "../components/SimpleNavigationMenu";
import TicketsHeader from "./components/TicketsHeader";
import TicketsInfoCards from "./components/TicketsInfoCards";
import Image from "next/image";
import MainFooter from "../components/MainFooter";
import IBQualificationAccess from "./components/NewIbSection";
import IbSection from "./components/IbSection";

export default function TicketPage() {
  const [activeNavTab, setActiveNavTab] = useState("/ticket");

  const handleNavTabChange = (newTab) => {
    setActiveNavTab(newTab);
    if (newTab !== "/ticket") {
      window.location.href = newTab || "/";
    }
  };

  return (
    <div className="w-full relative min-h-screen bg-[#0a0a12]">
      <SimpleNavigationMenu activeTab={activeNavTab} onTabChange={handleNavTabChange} />
      <div className="absolute inset-0">
        <Image
          src="/ticket-new.webp"
          alt=""
          fill
          className="object-cover object-center"
          priority
        />
      </div>
      <main className="relative">
        <TicketsHeader />
        <IBQualificationAccess isIbPage={true}/>
        <IbSection/>
        
        <MainFooter bgColor="#0a0a12"/>
      </main>
    </div>
  );
}
