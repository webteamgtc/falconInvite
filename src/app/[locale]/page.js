// "use client";

import EventAgendaSection from "./components/EventCard";
import GtcFooterStrip from "./components/FooterCard";
import DistinguishedGuestsGrid from "./components/GuestCard";
import GoldenFalconHeroMobile from "./components/HeroSlider";
import PartnerOrganizationsSection from "./components/PartnerOrg";
import PartnerMediaSection from "./components/PartnerMedia";

const page = () => {
  return (
    <div className="w-full overflow-hidden">
      <section id="home">
        <GoldenFalconHeroMobile />
      </section>

      {/* Treat Guests as both "gallery" and "guest" anchors */}
      <section id="gallery">
        <DistinguishedGuestsGrid />
      </section>

      <section id="agenda">
        <EventAgendaSection />
      </section>

      {/* Treat Partners as "media" */}
      <section id="guest">
        <PartnerOrganizationsSection />
      </section>

      <section id="media">
        <PartnerMediaSection />
      </section>

      {/* Footer area as "contact" and "policy" */}
      <section id="policy">
        <GtcFooterStrip />
      </section>
    </div>
  );
};

export default page;