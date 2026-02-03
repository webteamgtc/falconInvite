"use client";

import { useState } from "react";
import SimpleNavigationMenu from "../components/SimpleNavigationMenu";
import TicketsHeader from "./components/TicketsHeader";
import TicketsInfoCards from "./components/TicketsInfoCards";
import TicketsFooter from "./components/TicketsFooter";
import Image from "next/image";

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
          src="/bg-ticket.svg"
          alt=""
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a12]/70 via-[#0a0a12]/50 to-[#0a0a12]" />
      </div>
      <main className="relative">
        <TicketsHeader />
        <TicketsInfoCards />
        <TicketsFooter />
      </main>
    </div>
  );
}
