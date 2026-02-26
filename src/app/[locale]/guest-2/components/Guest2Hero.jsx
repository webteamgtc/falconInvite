"use client";

import SimpleNavigationMenu from "../../components/SimpleNavigationMenu";

export default function Guest2Hero({ activeNavTab, handleNavTabChange }) {
  return (
    <section className="relative overflow-hidden">
    
      <SimpleNavigationMenu activeTab={activeNavTab} onTabChange={handleNavTabChange} />

      <div className="relative z-10 max-w-5xl mx-auto px-4 pt-10 md:pt-16 text-center">
        <img src="/guest-2-bg.png" alt="Guest 2 Hero" className="w-full h-[450px] md:h-[650px] object-contain" />
      </div>
    </section>
  );
}
