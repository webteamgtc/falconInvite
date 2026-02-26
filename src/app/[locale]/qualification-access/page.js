"use client";

import { useState } from "react";
import SimpleNavigationMenu from "../components/SimpleNavigationMenu";
import TicketsHeader from "../ticket/components/TicketsHeader";
import MainFooter from "../components/MainFooter";
import IbWithForm from "./IBWithForm";
import Image from "next/image";

export default function QualificationAccessPage() {
    const [activeNavTab, setActiveNavTab] = useState("/qualification-access");

    const handleNavTabChange = (newTab) => {
        setActiveNavTab(newTab);
        if (newTab !== "/qualification-access") {
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
                <IbWithForm />
                <MainFooter bgColor="#0a0a12" />
            </main>
        </div>
    );
}
