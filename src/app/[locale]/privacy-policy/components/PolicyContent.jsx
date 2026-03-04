"use client";

const SECTION_CLASS = "scroll-mt-28";
const SECTION_CARD_CLASS =
  "rounded-xl border border-white/10 bg-white/[0.03] p-6 md:p-7 mb-6 transition-all duration-200 hover:border-white/15 hover:bg-white/[0.05]";
const H2_CLASS = "text-[17px] md:text-[19px] font-semibold text-[#D3C0A0] mb-4 pb-2 border-b border-white/10";
const H3_CLASS = "text-[15px] md:text-[16px] font-semibold text-white/90 mt-5 mb-2";
const P_CLASS = "text-[14px] md:text-[15px] leading-[1.8] text-white/80 mb-3";
const LIST_CLASS = "list-disc pl-5 space-y-2 text-[14px] md:text-[15px] leading-[1.8] text-white/80 mb-3";
const CHECK_CLASS = "text-[14px] md:text-[15px] leading-[1.8] text-white/80 mb-2 flex items-start gap-2";

export default function PolicyContent() {
  return (
    <div className="text-left space-y-5">
      {/* 1. Event Information */}
      <section id="event-information" className={SECTION_CLASS}>
        <div className={SECTION_CARD_CLASS}>
          <h2 className={H2_CLASS}>1. Event Information</h2>
        <ul className={LIST_CLASS}>
          <li><strong className="text-white/90">Event Name:</strong> Golden Falcon Awards 2026</li>
          <li><strong className="text-white/90">Organizer:</strong> GTCFX</li>
          <li><strong className="text-white/90">Location:</strong> Dubai, United Arab Emirates</li>
          <li><strong className="text-white/90">Pre-Dinner Event:</strong> 11 December 2026</li>
          <li><strong className="text-white/90">Main Event &amp; Awards Ceremony:</strong> 12 December 2026</li>
        </ul>
        <p className={P_CLASS}>
          The event includes official meetings, networking sessions, award presentations, and a gala dinner.
        </p>
        </div>
      </section>

      {/* 2. Invitation, Eligibility & Admission */}
      <section id="invitation-eligibility" className={SECTION_CLASS}>
        <div className={SECTION_CARD_CLASS}>
        <h2 className={H2_CLASS}>2. Invitation, Eligibility &amp; Admission</h2>
        <ul className={LIST_CLASS}>
          <li>Attendance is strictly by invitation, qualification, or paid registration only.</li>
          <li>GTCFX reserves the right to approve, reject, restrict, or cancel any invitation or registration at its sole discretion.</li>
          <li>Invitations are personal and non-transferable unless written approval is provided by GTCFX.</li>
          <li>Any misuse of invitations may result in immediate cancellation without compensation.</li>
          <li>Admission decisions made by GTCFX are final.</li>
        </ul>
        </div>
      </section>

      {/* 3. Registration & Identity Verification */}
      <section id="registration-identity" className={SECTION_CLASS}>
        <div className={SECTION_CARD_CLASS}>
        <h2 className={H2_CLASS}>3. Registration &amp; Identity Verification</h2>
        <ul className={LIST_CLASS}>
          <li>All attendees must complete the official registration process accurately.</li>
          <li>Registration alone does not guarantee entry.</li>
          <li>GTCFX may request valid government-issued identification at event check-in.</li>
          <li>Incorrect, misleading, or incomplete information may result in denied access.</li>
        </ul>
        </div>
      </section>

      {/* 4. Qualified IB Eligibility Criteria */}
      <section id="qualified-ib" className={SECTION_CLASS}>
        <div className={SECTION_CARD_CLASS}>
        <h2 className={H2_CLASS}>4. Qualified IB Eligibility Criteria</h2>

        <h3 className={H3_CLASS}>4.1 IB Qualification Requirement</h3>
        <p className={P_CLASS}>
          To qualify as a Qualified IB and enjoy complimentary event benefits, the following conditions must be met:
        </p>
        <ul className={LIST_CLASS}>
          <li>Minimum client deposit amount: USD 500,000</li>
          <li>This amount must be the total net deposit of IB&apos;s referred clients</li>
          <li>The deposit must be:</li>
        </ul>
        <ul className="list-none pl-4 space-y-1.5 text-[14px] text-white/78 mb-3">
          <li className={CHECK_CLASS}><span className="text-[#B48755]" aria-hidden>✓</span> Real funds</li>
          <li className={CHECK_CLASS}><span className="text-[#B48755]" aria-hidden>✓</span> Successfully credited</li>
          <li className={CHECK_CLASS}><span className="text-[#B48755]" aria-hidden>✓</span> Maintained within the system</li>
          <li className={CHECK_CLASS}><span className="text-[#B48755]" aria-hidden>✓</span> Qualification period: 2nd February 2026 - 4th of December 2026</li>
        </ul>
        <p className={P_CLASS}>
          Internal transfers, artificial transactions, or any form of manipulation will not be counted.
          GTCFX reserves the right to verify, adjust, approve, or reject qualification results after internal review.
        </p>

        <h3 className={H3_CLASS}>4.2 Qualified IB Benefits</h3>
        <p className={P_CLASS}>
          Approved Qualified IBs may receive the following benefits:
        </p>
        <ul className={LIST_CLASS}>
          <li>Round-trip airline ticket (class determined by GTCFX)</li>
          <li>Luxury hotel Conrad accommodation (suite or premium room, subject to availability)</li>
          <li>Airport pick-up and drop-off services</li>
          <li>Full access to all official Golden Falcon Awards activities</li>
        </ul>
        <p className={P_CLASS}>All benefits:</p>
        <ul className={LIST_CLASS}>
          <li>Are non-cash</li>
          <li>Are non-transferable</li>
          <li>Cannot be exchanged, upgraded, or redeemed for money</li>
          <li>GTCFX reserves the right to modify benefit details if required.</li>
        </ul>
        </div>
      </section>

      {/* 5. Paid Tickets & Guest Access */}
      <section id="paid-tickets" className={SECTION_CLASS}>
        <div className={SECTION_CARD_CLASS}>
        <h2 className={H2_CLASS}>5. Paid Tickets &amp; Guest Access</h2>
        <ul className={LIST_CLASS}>
          <li>Paid tickets are available for guests who do not qualify as IBs.</li>
          <li>Paid tickets grant access only to areas and activities specified in the ticket package.</li>
          <li>Paid tickets do not include flights, accommodation, or transfers.</li>
          <li>All ticket purchases are non-refundable, unless otherwise stated in writing.</li>
          <li>Ticket resale or unauthorized transfer is prohibited.</li>
        </ul>
        </div>
      </section>

      {/* 6. Travel, Visa & Accommodation */}
      <section id="travel-visa" className={SECTION_CLASS}>
        <div className={SECTION_CARD_CLASS}>
        <h2 className={H2_CLASS}>6. Travel, Visa &amp; Accommodation Responsibilities</h2>
        <ul className={LIST_CLASS}>
          <li>Attendees are responsible for obtaining valid visas and travel documents.</li>
          <li>GTCFX is not responsible for visa rejections, travel delays, cancellations, or personal travel issues.</li>
          <li>Missed benefits due to travel or visa issues will not be compensated.</li>
        </ul>
        </div>
      </section>

      {/* 7. Event Schedule Changes & Force Majeure */}
      <section id="schedule-force-majeure" className={SECTION_CLASS}>
        <div className={SECTION_CARD_CLASS}>
        <h2 className={H2_CLASS}>7. Event Schedule Changes &amp; Force Majeure</h2>
        <ul className={LIST_CLASS}>
          <li>Event schedules, venues, speakers, or agendas may change without prior notice.</li>
          <li>GTCFX may modify, postpone, or cancel any part of the event if required.</li>
          <li>GTCFX is not liable for changes caused by force majeure events, including but not limited to:</li>
        </ul>
        <ul className="list-none pl-4 space-y-1.5 text-[14px] text-white/78 mb-3">
          <li className={CHECK_CLASS}><span className="text-[#B48755]" aria-hidden>✓</span> Government restrictions</li>
          <li className={CHECK_CLASS}><span className="text-[#B48755]" aria-hidden>✓</span> Travel disruptions</li>
          <li className={CHECK_CLASS}><span className="text-[#B48755]" aria-hidden>✓</span> Health or safety concerns</li>
          <li className={CHECK_CLASS}><span className="text-[#B48755]" aria-hidden>✓</span> Natural or external events</li>
        </ul>
        </div>
      </section>

      {/* 8. Conduct, Ethics & Removal Policy */}
      <section id="conduct-ethics" className={SECTION_CLASS}>
        <div className={SECTION_CARD_CLASS}>
        <h2 className={H2_CLASS}>8. Conduct, Ethics &amp; Removal Policy</h2>
        <ul className={LIST_CLASS}>
          <li>All attendees must behave in a professional, respectful, and lawful manner.</li>
          <li>Harassment, misconduct, disruption, or non-compliance is not permitted.</li>
          <li>GTCFX reserves the right to remove any individual from the event without refund or compensation.</li>
        </ul>
        </div>
      </section>

      {/* 9. Dress Code */}
      <section id="dress-code" className={SECTION_CLASS}>
        <div className={SECTION_CARD_CLASS}>
        <h2 className={H2_CLASS}>9. Dress Code</h2>
        <ul className={LIST_CLASS}>
          <li>Formal or business-formal attire is required for all official event sessions.</li>
          <li>Entry may be denied if dress standards are not met.</li>
        </ul>
        </div>
      </section>

      {/* 10. Media, Photography & Recording */}
      <section id="media-photography" className={SECTION_CLASS}>
        <div className={SECTION_CARD_CLASS}>
        <h2 className={H2_CLASS}>10. Media, Photography &amp; Recording</h2>
        <ul className={LIST_CLASS}>
          <li>The event will be photographed and recorded for documentation and promotional purposes.</li>
          <li>By attending, participants grant GTCFX permission to use images, videos, and recordings in marketing materials.</li>
          <li>Personal recording may be restricted in certain areas.</li>
          <li>Media representatives must receive prior written approval.</li>
        </ul>
        </div>
      </section>

      {/* 11. Sponsorship & Promotional Activities */}
      <section id="sponsorship" className={SECTION_CLASS}>
        <div className={SECTION_CARD_CLASS}>
        <h2 className={H2_CLASS}>11. Sponsorship &amp; Promotional Activities</h2>
        <ul className={LIST_CLASS}>
          <li>Sponsorship benefits are limited to agreed contractual terms only.</li>
          <li>Unauthorized branding, promotion, or material distribution is prohibited.</li>
          <li>All sponsor content must comply with GTCFX branding and compliance guidelines.</li>
        </ul>
        </div>
      </section>

      {/* 12. Personal Data We Collect */}
      <section id="personal-data" className={SECTION_CLASS}>
        <div className={SECTION_CARD_CLASS}>
        <h2 className={H2_CLASS}>12. Personal Data We Collect</h2>
        <p className={P_CLASS}>We may collect the following personal data:</p>
        <ul className={LIST_CLASS}>
          <li>Full name</li>
          <li>Contact details (email, phone number)</li>
          <li>Company name and role</li>
          <li>Identification information (for verification)</li>
          <li>Travel details (if benefits are provided)</li>
          <li>Event participation records</li>
        </ul>
        </div>
      </section>

      {/* 13. How We Use Your Information */}
      <section id="how-we-use" className={SECTION_CLASS}>
        <div className={SECTION_CARD_CLASS}>
        <h2 className={H2_CLASS}>13. How We Use Your Information</h2>
        <p className={P_CLASS}>Your personal data may be used to:</p>
        <ul className={LIST_CLASS}>
          <li>Process event registration and attendance</li>
          <li>Verify IB qualification and eligibility</li>
          <li>Arrange travel and accommodation (if applicable)</li>
          <li>Communicate event-related updates</li>
          <li>Manage security, access control, and compliance</li>
          <li>Conduct internal reporting and analysis</li>
        </ul>
        <p className={P_CLASS}>We do not sell personal data to third parties.</p>
        </div>
      </section>

      {/* 14. Data Protection & Security */}
      <section id="data-protection" className={SECTION_CLASS}>
        <div className={SECTION_CARD_CLASS}>
        <h2 className={H2_CLASS}>14. Data Protection &amp; Security</h2>
        <ul className={LIST_CLASS}>
          <li>Personal data is handled securely and confidentially.</li>
          <li>Access is limited to authorized personnel only.</li>
          <li>Data is processed in accordance with applicable data protection laws.</li>
          <li>Data is retained only as long as necessary for event purposes.</li>
        </ul>
        </div>
      </section>

      {/* 15. Liability Disclaimer */}
      <section id="liability" className={SECTION_CLASS}>
        <div className={SECTION_CARD_CLASS}>
        <h2 className={H2_CLASS}>15. Liability Disclaimer</h2>
        <ul className={LIST_CLASS}>
          <li>Attendance is at the participant&apos;s own risk.</li>
          <li>GTCFX is not responsible for personal injury, loss, or damage.</li>
          <li>Attendees are responsible for their personal belongings.</li>
        </ul>
        </div>
      </section>

      {/* 16. Governing Law & Final Authority */}
      <section id="governing-law" className={SECTION_CLASS}>
        <div className={SECTION_CARD_CLASS}>
        <h2 className={H2_CLASS}>16. Governing Law &amp; Final Authority</h2>
        <ul className={LIST_CLASS}>
          <li>These Policies &amp; Conditions are governed by applicable local laws.</li>
          <li>GTCFX retains final authority to interpret and enforce these terms.</li>
          <li>All decisions made by GTCFX regarding the event are final and binding.</li>
        </ul>
        </div>
      </section>

      {/* Conditions for Each Award */}
      <section id="conditions-awards" className={SECTION_CLASS}>
        <div className={SECTION_CARD_CLASS}>
        <h2 className={H2_CLASS}>Conditions for Each Award</h2>
        <ol className="list-decimal pl-5 space-y-2.5 text-[14px] md:text-[15px] leading-[1.75] text-white/78">
          <li><strong className="text-white/90">Partner Excellence Award Turkey</strong> — For exceptional annual growth and strong client portfolio expansion.</li>
          <li><strong className="text-white/90">Partner Excellence Award US/LM</strong> — For exceptional annual growth and strong client portfolio expansion.</li>
          <li><strong className="text-white/90">Partner Excellence Award CIS</strong> — For exceptional annual growth and strong client portfolio expansion.</li>
          <li><strong className="text-white/90">Partner Excellence Award Japan</strong> — For exceptional annual growth and strong client portfolio expansion.</li>
          <li><strong className="text-white/90">Partner Excellence Award UK</strong> — For exceptional annual growth and strong client portfolio expansion.</li>
          <li><strong className="text-white/90">Partner Excellence Award Southeast Asia</strong> — For exceptional annual growth and strong client portfolio expansion.</li>
          <li><strong className="text-white/90">Partner Excellence Award India</strong> — For exceptional annual growth and strong client portfolio expansion.</li>
          <li><strong className="text-white/90">Partner Excellence Award - Prop Trading</strong> — For exceptional proprietary trading growth and consistent performance results.</li>
          <li><strong className="text-white/90">Strategic Liquidity Partner</strong> — For strengthening market depth and contributing to long-term liquidity support.</li>
          <li><strong className="text-white/90">Liquidity Partner Excellence Award</strong> — For delivering reliable liquidity solutions and stable trading conditions.</li>
          <li><strong className="text-white/90">Most Trusted &amp; Long-Standing Partner Award</strong> — For demonstrating long-term loyalty, trust, and consistent collaboration.</li>
          <li><strong className="text-white/90">Inspiring Women Award</strong> — For outstanding leadership, influence, and contribution to the trading industry.</li>
          <li><strong className="text-white/90">Youngest Seven-Figure Trader of the Year 2025</strong> — For achieving verified seven-figure trading performance at a young age.</li>
          <li><strong className="text-white/90">Outstanding Gross Deposit Award</strong> — For generating the highest verified client deposit volume during the qualification period.</li>
          <li><strong className="text-white/90">Quality Customer Champion of the Year</strong> — For maintaining exceptional client satisfaction and long-term retention.</li>
          <li><strong className="text-white/90">Top Monthly ROI Award</strong> — For achieving the highest verified monthly return on investment.</li>
          <li><strong className="text-white/90">Premium Monthly Rebate Award</strong> — For generating the highest monthly rebate through strong trading activity.</li>
          <li><strong className="text-white/90">Highest Annual Rebate &amp; Trading</strong> — For achieving the highest combined annual rebate and total trading volume.</li>
          <li><strong className="text-white/90">Global Partner of the Year</strong> — For outstanding overall performance, impact, and long-term contribution across global markets.</li>
          <li><strong className="text-white/90">Highest Client Acquisition Award</strong> — For onboarding the highest number of verified new active clients during the qualification period.</li>
          <li><strong className="text-white/90">Elite IB of the Year</strong> — For achieving top-tier results in client deposits, trading activity, and consistent performance.</li>
          <li><strong className="text-white/90">Compliance &amp; Integrity Excellence Award</strong> — For maintaining the highest standards of compliance, ethics, and professional conduct throughout the year.</li>
        </ol>
        <p className="mt-6 text-[15px] font-semibold text-[#D3C0A0]">
          GTCFX reserves the right of final interpretation.
        </p>
        </div>
      </section>
    </div>
  );
}
