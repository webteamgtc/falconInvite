// "use client";

import EventAgendaSection from "./components/EventCard";
import GtcFooterStrip from "./components/FooterCard";
import DistinguishedGuestsGrid from "./components/GuestCard";
import GoldenFalconHeroMobile from "./components/HeroSlider";
import PartnerOrganizationsSection from "./components/PartnerOrg";

const page = () => {
  return (
    <div className="w-full overflow-hidden">
      <GoldenFalconHeroMobile />
      <DistinguishedGuestsGrid />
      <EventAgendaSection />
      <PartnerOrganizationsSection />
      <GtcFooterStrip/>
    </div>
  );
};

export default page;