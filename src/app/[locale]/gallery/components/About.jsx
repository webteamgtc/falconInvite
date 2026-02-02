// "use client";

// import {
//   VerticalTimeline,
//   VerticalTimelineElement,
// } from "react-vertical-timeline-component";
// import "react-vertical-timeline-component/style.min.css";

// const timeline = [
//   {
//     year: "2022",
//     title: "Foundation of GTCFX",
//     desc: "GTCFX was established with a mission to provide secure and transparent access to global financial markets.",
//     hasCard: true,
//     imageSide: "left", // Image on left, content on right
//   },
//   {
//     year: "2019",
//     title: "Platform Launch",
//     desc: "Official launch of MT4 and MT5 trading platforms with multi-asset support.",
//     hasCard: true,
//     imageSide: "right", // Image on right, content on left
//   },
//   {
//     year: "2020",
//     title: "Global Market Expansion",
//     desc: "Expanded market access and liquidity partnerships across multiple regions.",
//     hasCard: true,
//     imageSide: "left", // Image on left, content on right
//   },
//   {
//     year: "2022",
//     title: "Technology & Infrastructure Upgrade",
//     desc: "Enhanced execution speed, stability, and trading experience.",
//     hasCard: true,
//     imageSide: "right", // Image on right, content on left
//   },
//   {
//     year: "2025",
//     title: "Brand Growth & Global Presence",
//     desc: "Strengthened global brand presence through international events, media partnerships, and community engagement.",
//     hasCard: false,
//   },
// ];

// function GreyCard({ className = "", size = "medium" }) {
//   const sizeClasses = {
//     small: "w-28 h-32 md:w-36 md:h-40",
//     medium: "w-32 h-36 md:w-40 md:h-44",
//     large: "w-36 h-40 md:w-44 md:h-48",
//   };

//   return (
//     <div className={`bg-[#808080] rounded ${sizeClasses[size]} ${className}`} />
//   );
// }

// export default function AboutTour() {
//   return (
//     <section className="relative w-full bg-black py-14">
//       {/* Soft vignette like screenshot */}
//       <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.04)_0%,rgba(0,0,0,0.55)_55%,rgba(0,0,0,0.85)_100%)]" />

//       <div className="relative max-w-6xl mx-auto px-6">
//         {/* Title row - matching image */}
//         <div className="flex items-center justify-center gap-4 md:gap-6 mb-12 md:mb-16">
//           <div className="h-px w-16 md:w-24 bg-gradient-to-r from-transparent via-[#E9DDCF] to-[#E9DDCF]" />
//           <h2 
//             className="font-serif text-2xl md:text-4xl lg:text-5xl font-semibold tracking-wide"
//             style={{
//               background: "linear-gradient(180deg, #956E42 0%, #E9DDCF 100%)",
//               WebkitBackgroundClip: "text",
//               WebkitTextFillColor: "transparent",
//               backgroundClip: "text"
//             }}
//           >
//             ABOUT THE TOUR
//           </h2>
//           <div className="h-px w-16 md:w-24 bg-gradient-to-l from-transparent via-[#E9DDCF] to-[#E9DDCF]" />
//         </div>

//         <div className="mt-10 grid grid-cols-1 gap-12 md:grid-cols-[1.05fr_0.95fr]">
//           {/* LEFT TEXT */}
//           <div className="pt-2">
//             <div className="space-y-4 md:space-y-6 text-sm md:text-base leading-relaxed text-white/80">
//               <p>
//                 Founded in 2012, GTCFX was established by a team of experienced
//                 professionals from the global financial and trading industry,
//                 driven by a shared vision to create a secure, transparent, and
//                 technology-driven trading environment for investors worldwide.
//               </p>

//               <p>
//                 From its inception, GTCFX set out to bridge the gap between
//                 institutional-grade trading infrastructure and individual
//                 traders. By combining deep market expertise, advanced trading
//                 technology, and a strong commitment to regulatory compliance, the
//                 company has continuously expanded its presence across
//                 international markets.
//               </p>

//               <p>
//                 Over the years, GTCFX has grown into a global multi-asset trading
//                 brand, serving hundreds of thousands of clients across more than
//                 100 countries. The company provides access to a diverse range of
//                 trading instruments, including Forex, CFDs, commodities, indices,
//                 stocks, and precious metals, supported by robust platforms such
//                 as MT4, MT5, and proprietary trading solutions.
//               </p>

//               <p>
//                 GTCFX's journey has been defined by continuous innovation, strong
//                 risk management practices, and a client-centric approach. Through
//                 ongoing investment in technology, liquidity partnerships, and
//                 professional support services, GTCFX remains committed to
//                 empowering traders with the tools, transparency, and confidence
//                 needed to navigate global financial markets.
//               </p>

//               <p>
//                 Today, GTCFX continues to evolve as a trusted global trading
//                 partner, guided by its core values of integrity, innovation, and
//                 long-term sustainability.
//               </p>
//             </div>
//           </div>

//           {/* RIGHT TIMELINE */}
//           <div className="relative">
//             <VerticalTimeline>
//               {timeline.map((item, index) => (
//                 <VerticalTimelineElement
//                   key={index}
//                   className="vertical-timeline-element"
//                   contentStyle={{
//                     background: 'transparent',
//                     boxShadow: 'none',
//                     padding: 0,
//                   }}
//                   contentArrowStyle={{ display: 'none' }}
//                   iconStyle={{
//                     background: 'white',
//                     border: '2px solid rgba(233, 221, 207, 0.3)',
//                     boxShadow: '0 0 0 4px rgba(233, 221, 207, 0.2)',
//                     width: '12px',
//                     height: '12px',
//                   }}
//                   icon={
//                     <div className="relative">
//                       <div className="absolute w-4 h-4 rounded-full bg-[#E9DDCF]/20 blur-sm" />
//                       <div className="relative w-3 h-3 rounded-full bg-white border border-[#E9DDCF]/30" />
//                     </div>
//                   }
//                   date=""
//                 >
//                   <div className={`flex items-start gap-4 md:gap-6 ${
//                     item.imageSide === "left" ? "flex-row" : "flex-row-reverse"
//                   }`}>
//                     {/* Image Card */}
//                     {item.hasCard && (
//                       <div className="flex-shrink-0">
//                         <GreyCard 
//                           size={index === 0 ? "medium" : index === 1 ? "large" : index === 2 ? "large" : "medium"} 
//                         />
//                       </div>
//                     )}

//                     {/* Content */}
//                     <div className="flex-1 min-w-0">
//                       {/* Year */}
//                       <p 
//                         className="text-xl md:text-2xl font-bold mb-1"
//                         style={{
//                           background: "linear-gradient(180deg, #956E42 0%, #E9DDCF 100%)",
//                           WebkitBackgroundClip: "text",
//                           WebkitTextFillColor: "transparent",
//                           backgroundClip: "text"
//                         }}
//                       >
//                         {item.year}
//                       </p>

//                       {/* Title */}
//                       <p 
//                         className="text-base md:text-lg font-bold mb-2"
//                         style={{
//                           background: "linear-gradient(180deg, #956E42 0%, #E9DDCF 100%)",
//                           WebkitBackgroundClip: "text",
//                           WebkitTextFillColor: "transparent",
//                           backgroundClip: "text"
//                         }}
//                       >
//                         {item.title}
//                       </p>

//                       {/* Description */}
//                       <p className="text-xs md:text-sm leading-relaxed text-white/70">
//                         {item.desc}
//                       </p>
//                     </div>
//                   </div>
//                 </VerticalTimelineElement>
//               ))}
//             </VerticalTimeline>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

"use client";

import Image from "next/image";

const items = [
  {
    year: "2022",
    title: "",
    desc: "GTCFX Partners Award Night 2022 celebrated success, partnership, and excellence. A memorable evening honoring those who powered our growth.",
    img: "left",
    image: "/timeline-img1.svg"
  },
  {
    year: "2023",
    title: "",
    desc: "From insightful panels to award ceremonies, GTCFX Partners Conference 2023 had it all. An inspiring event that strengthened partnerships and future vision.",
    img: "right",
    image: "/timeline-img2.svg"
  },
  {
    year: "2024",
    desc: "Golden Falcon Awards 2024 was an evening of elegance, prestige, and global distinction. A red-carpet celebration honoring excellence at the highest level.",
    img: "left",
    image: "/timeline-img3.svg"
  },
  {
    year: "2025",
    desc: "Golden Falcon Awards 2025 delivered elegance and brilliance through powerful panels, honored winners, and unforgettable lucky draw moments.",
    img: "right",
    image: "/timeline-img4.svg"
  },

];

export default function AboutTourTimeline() {
  return (
    <section className="relative w-full bg-black py-16">
      {/* soft vignette */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.04)_0%,rgba(0,0,0,0.72)_55%,rgba(0,0,0,0.92)_100%)]" />

      <div className="relative mx-auto container">
        {/* Title */}
        <div className="flex items-center justify-center gap-6 mb-12 md:mb-16">
          <span className="h-[1px] w-[240px] bg-[#D9D9D9]" />
          <h2 className="font-serif text-[42px] tracking-[2px] text-[#B08A57]">
            ABOUT THE TOUR
          </h2>
          <span className="h-[1px] w-[240px] bg-[#D9D9D9]" />
        </div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 md:grid-cols-[1.05fr_0.95fr] gap-12 mt-10">
          {/* LEFT COLUMN - Descriptive Text */}
          <div className="pt-2">
            <div className="space-y-4 md:space-y-6 text-sm md:text-base leading-relaxed text-white/80">
              <p>
                Founded in 2012, GTCFX began with one clear goal: to build a trading environment
                that combines institutional-grade infrastructure with accessibility for individual
                traders worldwide. From day one, the focus has been on security, transparency, and
                cutting-edge technology.
              </p>

              <p>
                As the years passed, GTCFX steadily expanded across global markets, forming
                strategic partnerships and continuously enhancing its trading platforms. The company
                grew from a regional player into a recognized global brand, serving clients across
                more than 100 countries.
              </p>

              <p>
                Now operating as a global multi-asset trading brand, GTCFX gives traders access to
                forex, CFDs, commodities, indices, stocks, and precious metals. Supported by robust
                platforms like MT4, MT5, and proprietary solutions, the company remains committed to
                empowering traders with the tools they need to succeed.
              </p>

              <p>
                This tour highlights the key moments and milestones that shaped the GTCFX journey
                so far—from its foundation to its current position as a trusted global trading
                partner, guided by values of integrity, innovation, and long-term sustainability.
              </p>
            </div>
          </div>

          {/* RIGHT COLUMN - Timeline */}
          <div className="relative">
            {/* center dotted line */}
            <div className="absolute left-1/2 top-0 h-full w-[1px] -translate-x-1/2 bg-[repeating-linear-gradient(to_bottom,rgba(255,255,255,0.22)_0px,rgba(255,255,255,0.22)_2px,rgba(255,255,255,0)_6px,rgba(255,255,255,0)_12px)]" />

            <div className="space-y-12">
              {items.map((it, idx) => (
                <div key={idx} className="relative grid grid-cols-[1fr_40px_1fr] items-center">
                  {/* Conditionally render based on img position */}
                  {it.img === "left" ? (
                    <>
                      {/* LEFT: Image when img is "left" */}
                      <div className="pr-10 flex justify-end">
                        <div className="relative h-[140px] w-[155px] overflow-hidden ">
                          <Image
                            src={it?.image}
                            alt=""
                            fill
                            className="object-cover"
                          />
                        </div>
                      </div>

                      {/* CENTER: glow dot */}
                      <div className="relative flex items-center justify-center">
                        <span className="relative block h-[10px] w-[10px]">
                          <span className="absolute inset-0 rounded-full bg-white shadow-[0_0_0_6px_rgba(255,255,255,0.10)]" />
                          <span className="absolute -left-[10px] -top-[10px] h-[30px] w-[30px] rounded-full bg-white/10 blur-[1px]" />
                        </span>
                      </div>

                      {/* RIGHT: Text when img is "left" */}
                      <div className="pl-10 text-left">
                        <div className="text-[16px] font-semibold text-white">{it.year}</div>
                        <div className="mt-1 text-[12px] font-semibold text-white">
                          {it.title}
                        </div>
                        <p className="mt-2 max-w-[320px] text-[12px] leading-[1.7] text-white">
                          {it.desc}
                        </p>
                      </div>
                    </>
                  ) : (
                    <>
                      {/* LEFT: Text when img is "right" */}
                      <div className="pr-10 text-right ">
                        <div className="text-[16px] font-semibold text-white">{it.year}</div>
                        <div className="mt-1 text-[12px] font-semibold text-white">
                          {it.title}
                        </div>
                        <p className="mt-2 max-w-[320px] ml-auto text-[12px] leading-[1.7] text-white">
                          {it.desc}
                        </p>
                      </div>

                      {/* CENTER: glow dot */}
                      <div className="relative flex items-center justify-center">
                        <span className="relative block h-[10px] w-[10px]">
                          <span className="absolute inset-0 rounded-full bg-white shadow-[0_0_0_6px_rgba(255,255,255,0.10)]" />
                          <span className="absolute -left-[10px] -top-[10px] h-[30px] w-[30px] rounded-full bg-white/10 blur-[1px]" />
                        </span>
                      </div>

                      {/* RIGHT: Image when img is "right" */}
                      <div className="pl-10">
                        <div className="relative h-[140px] w-[155px] overflow-hidden ">
                          <Image
                            src={it?.image}
                            alt=""
                            fill
                            className="object-cover"
                          />
                        </div>
                      </div>
                    </>
                  )}
                </div>
              ))}
            </div>

            {/* bottom fade like your screenshot */}
            <div className="pointer-events-none absolute -bottom-4 left-0 right-0 h-24 bg-gradient-to-b from-transparent to-black" />
          </div>
        </div>
      </div>
    </section>
  );
}


// "use client";

// import Image from "next/image";
// import { GenIcon } from "react-icons";
// import {
//     VerticalTimeline,
//     VerticalTimelineElement,
// } from "react-vertical-timeline-component";

// const IMG_PLACEHOLDER = "/images/dummy.jpg"; // replace

// function GreyCard({ className = "" }) {
//     return (
//         <div
//             className={[
//                 "absolute bg-[#D9D9D9] shadow-[0_16px_40px_rgba(0,0,0,0.45)]",
//                 "overflow-hidden",
//                 className,
//             ].join(" ")}
//         >
//             <Image
//                 src={IMG_PLACEHOLDER}
//                 alt="placeholder"
//                 fill
//                 className="object-cover opacity-0" // keep grey block look
//             />
//         </div>
//     );
// }

// function GlowDot() {
//     return (
//         <span className="relative block h-[10px] w-[10px]">
//             <span className="absolute inset-0 rounded-full bg-white shadow-[0_0_0_5px_rgba(255,255,255,0.10)]" />
//             <span className="absolute -left-[7px] -top-[7px] h-[24px] w-[24px] rounded-full bg-white/10 blur-[1px]" />
//         </span>
//     );
// }

// export default function AboutTourTimeline() {
//     return (
//         <section className="relative w-full bg-black py-14">
//             {/* vignette */}
//             <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.04)_0%,rgba(0,0,0,0.55)_55%,rgba(0,0,0,0.90)_100%)]" />

//             <div className="relative max-w-6xl mx-auto px-6">
//                 {/* Title */}
//                 <div className="flex items-center justify-center gap-6">
//                     <span className="h-[1px] w-[220px] bg-white/15" />
//                     <h2 className="font-serif text-[40px] tracking-[2px] text-[#B08A57]">
//                         ABOUT THE TOUR
//                     </h2>
//                     <span className="h-[1px] w-[220px] bg-white/15" />
//                 </div>

//                 <div className="mt-10 grid grid-cols-1 gap-12 md:grid-cols-[1.05fr_0.95fr]">
//                     {/* LEFT TEXT */}
//                     <div className="pt-2">
//                         <div className="space-y-6 text-[12px] leading-[1.85] text-white/65">
//                             <p>
//                                 Founded in 2012, GTCFX was established by a team of experienced
//                                 professionals from the global financial and trading industry,
//                                 driven by a shared vision to create a secure, transparent, and
//                                 technology-driven trading environment for investors worldwide.
//                             </p>
//                             <p>
//                                 From its inception, GTCFX set out to bridge the gap between
//                                 institutional-grade trading infrastructure and individual
//                                 traders. By combining deep market expertise, advanced trading
//                                 technology, and a strong commitment to regulatory compliance, the
//                                 company has continuously expanded its presence across
//                                 international markets.
//                             </p>
//                             <p>
//                                 Over the years, GTCFX has grown into a global multi-asset trading
//                                 brand, serving hundreds of thousands of clients across more than
//                                 100 countries. The company provides access to a diverse range of
//                                 trading instruments, including Forex, CFDs, commodities, indices,
//                                 stocks, and precious metals, supported by robust platforms such
//                                 as MT4, MT5, and proprietary trading solutions.
//                             </p>
//                             <p>
//                                 GTCFX’s journey has been defined by continuous innovation, strong
//                                 risk management practices, and a client-centric approach.
//                             </p>
//                             <p>
//                                 Today, GTCFX continues to evolve as a trusted global trading
//                                 partner, guided by its core values of integrity, innovation, and
//                                 long-term sustainability.
//                             </p>
//                         </div>
//                     </div>

//                     <div className="relative">

//                         <div className="relative">
//                             {/* This CSS makes line thin + dotted + centered similar to screenshot */}
//                             <div
//                                 className="timeline-skin"
//                                 style={{
//                                     // reserve height close to screenshot
//                                     minHeight: 560,
//                                 }}
//                             >
//                                 <VerticalTimeline>
//                                     <VerticalTimelineElement
//                                         className="vertical-timeline-element--work"
//                                         contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
//                                         contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
//                                         date="2011 - present"
//                                         iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
//                                         icon={<GenIcon icon="school" />}
//                                     >
//                                         <h3 className="vertical-timeline-element-title">Creative Director</h3>
//                                         <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4>
//                                         <p>
//                                             Creative Direction, User Experience, Visual Design, Project Management, Team Leading
//                                         </p>
//                                     </VerticalTimelineElement>
//                                     <VerticalTimelineElement
//                                         className="vertical-timeline-element--work"
//                                         date="2010 - 2011"
//                                         iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
//                                         icon={<GenIcon icon="school" />}
//                                     >
//                                         <h3 className="vertical-timeline-element-title">Art Director</h3>
//                                         <h4 className="vertical-timeline-element-subtitle">San Francisco, CA</h4>
//                                         <p>
//                                             Creative Direction, User Experience, Visual Design, SEO, Online Marketing
//                                         </p>
//                                     </VerticalTimelineElement>
//                                     <VerticalTimelineElement
//                                         className="vertical-timeline-element--work"
//                                         date="2008 - 2010"
//                                         iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
//                                         icon={<GenIcon icon="school" />}
//                                     >
//                                         <h3 className="vertical-timeline-element-title">Web Designer</h3>
//                                         <h4 className="vertical-timeline-element-subtitle">Los Angeles, CA</h4>
//                                         <p>
//                                             User Experience, Visual Design
//                                         </p>
//                                     </VerticalTimelineElement>
//                                     <VerticalTimelineElement
//                                         className="vertical-timeline-element--work"
//                                         date="2006 - 2008"
//                                         iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
//                                         icon={<GenIcon icon="school" />}
//                                     >
//                                         <h3 className="vertical-timeline-element-title">Web Designer</h3>
//                                         <h4 className="vertical-timeline-element-subtitle">San Francisco, CA</h4>
//                                         <p>
//                                             User Experience, Visual Design
//                                         </p>
//                                     </VerticalTimelineElement>
//                                     <VerticalTimelineElement
//                                         className="vertical-timeline-element--education"
//                                         date="April 2013"
//                                         iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
//                                         icon={<GenIcon icon="school" />}
//                                     >
//                                         <h3 className="vertical-timeline-element-title">Content Marketing for Web, Mobile and Social Media</h3>
//                                         <h4 className="vertical-timeline-element-subtitle">Online Course</h4>
//                                         <p>
//                                             Strategy, Social Media
//                                         </p>
//                                     </VerticalTimelineElement>
//                                     <VerticalTimelineElement
//                                         className="vertical-timeline-element--education"
//                                         date="November 2012"
//                                         iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
//                                         icon={<GenIcon icon="school" />}
//                                     >
//                                         <h3 className="vertical-timeline-element-title">Agile Development Scrum Master</h3>
//                                         <h4 className="vertical-timeline-element-subtitle">Certification</h4>
//                                         <p>
//                                             Creative Direction, User Experience, Visual Design
//                                         </p>
//                                     </VerticalTimelineElement>
//                                     <VerticalTimelineElement
//                                         className="vertical-timeline-element--education"
//                                         date="2002 - 2006"
//                                         iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
//                                         icon={<GenIcon icon="school" />}
//                                     >
//                                         <h3 className="vertical-timeline-element-title">Bachelor of Science in Interactive Digital Media Visual Imaging</h3>
//                                         <h4 className="vertical-timeline-element-subtitle">Bachelor Degree</h4>
//                                         <p>
//                                             Creative Direction, Visual Design
//                                         </p>
//                                     </VerticalTimelineElement>
//                                     <VerticalTimelineElement
//                                         iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
//                                         icon={<GenIcon icon="star" />}
//                                     />
//                                 </VerticalTimeline>
//                             </div>


//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </section>
//     );
// }
