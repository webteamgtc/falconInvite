"use client";

const morning = [
  { t: "08:30 – 09:30", title: "Registration & Check-in", sub: "Guest arrival and registration" },
  { t: "09:30 – 09:40", title: "Opening Performance" },
  { t: "09:40 – 09:50", title: "Opening Address", sub: "Welcome & opening remarks" },
  { t: "09:50 – 10:10", title: "Keynote Speech", sub: "Keynote address by a guest speaker" },
  { t: "10:10 – 10:30", title: "Keynote Speech", sub: "Keynote address by a guest speaker" },
  { t: "10:30 – 10:50", title: "Keynote Speech", sub: "Keynote address by a guest speaker" },
  { t: "10:50 – 11:30", title: "Panel Discussion", sub: "The Importance of Market Analysis,\nRisk Management and Investor Decision Making" },
  { t: "11:30 – 11:40", title: "Lucky Draw" },
  { t: "11:40 – 12:00", title: "Awards Ceremony", sub: "Trading Excellence Awards" },
  { t: "12:00 – 13:30", title: "Lunch Break & Networking" },
];

const afternoon = [
  { t: "13:30 – 13:50", title: "Keynote Speech", sub: "The role of AI in trading" },
  { t: "13:50 – 14:10", title: "Keynote Speech", sub: "Trading & risk management" },
  { t: "14:10 – 14:50", title: "Panel Discussion", sub: "Panel discussion on market impact" },
  { t: "14:50 – 15:30", title: "Panel Discussion", sub: "Trading, strategy, and psychology" },
  { t: "15:50 – 16:30", title: "Panel Discussion", sub: "Global markets & opportunities" },
  { t: "16:30 – 16:50", title: "Awards Ceremony" },
  { t: "16:50 – 17:20", title: "Awards Ceremony", sub: "Outstanding Performance Awards" },
  { t: "17:20 – 17:30", title: "Lucky Draw" },
  { t: "17:30 – 18:00", title: "Closing Ceremony &\nNetworking Session" },
];


function Dot() {
  return (
    <img className="h-[50px]" src="/1.svg" alt="" />
  );
}

function Row({ t, title, sub }) {
  return (
    <div className="flex gap-4 items-center">
      <div className="text-right text-xs md:text-base font-medium tracking-[0.25px] whitespace-pre text-white">
        {t}
      </div>

      <div className="relative flex justify-center">
        <Dot />
      </div>

      <div className="flex-1">
        <div className="whitespace-pre-line font-serif text-base md:text-lg font-semibold leading-[1.15] text-transparent"
          style={{
            background: "var(--Linear, linear-gradient(180deg, #956E42 0%, #E9DDCF 100%))",
            backgroundClip: "text",
        }}
        >
          {title}
        </div>
        {sub ? (
          <div className="mt-[2px] md:mt-1 text-xs md:text-base leading-[1.35] text-white whitespace-pre-line">
            {sub}
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default function EventAgendaSection() {
  return (
    <section className="w-full">
      {/* match poster width */}
      <div className="mx-auto w-full max-w-full md:w-screen md:max-w-none md:ml-[calc(50%-50vw)] md:mr-[calc(50%-50vw)] overflow-hidden relative">
        {/* Background image using absolute positioning */}
        <div className="absolute inset-0 bg-[#050816] z-0" />
{/* 
         <div className="pointer-events-none absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[radial-gradient(260px_200px_at_50%_0%,rgba(255,255,255,0.10),transparent_65%)]" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#050816] via-[#050816]/85 to-[#050816]" />
          <div className="absolute inset-0 opacity-[0.10] [background-image:radial-gradient(rgba(255,255,255,0.55)_1px,transparent_1px)] [background-size:3px_3px]" />
        </div> */}

        {/* Inner container with max-width for content */}
        <div className="relative mx-auto max-w-2xl lg:max-w-4xl xl:max-w-5xl 2xl:max-w-6xl px-4 md:px-6 lg:px-8 xl:px-10  py-8 md:py-14  z-10">
          {/* Heading */}
          <div className="relative text-center mb-6 md:mb-8 lg:mb-10">
            <div className="font-serif text-lg md:text-[48px] font-semibold tracking-[0.2px] text-transparent"
              style={{
                background: "var(--Linear, linear-gradient(180deg, #956E42 0%, #E9DDCF 100%))",
                backgroundClip: "text",
              }}
            >
              Event Agenda
            </div>
          </div>

          {/* Two column layout on desktop: Morning and Afternoon */}
          <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 lg:gap-6 xl:gap-8">
            {/* Morning Session */}
            <div className="relative">
              {/* Morning title */}
              <div className="relative text-center mb-4 md:mb-6 lg:mb-8">
                <div className="font-serif text-base md:text-base lg:text-[24px] font-semibold tracking-[0.2px] text-transparent"
                  style={{
                    background: "var(--Linear, linear-gradient(180deg, #956E42 0%, #E9DDCF 100%))",
                    backgroundClip: "text",
                  }}
                >
                  Morning Session
                </div>
              </div>

              {/* Morning */}
              <div className="relative pt-4 md:pt-5 lg:pt-4">
                <div className="space-y-8">
                  {morning.map((r, i) => (
                    <Row key={i} {...r} />
                  ))}
                </div>
              </div>
            </div>

            {/* Afternoon Session */}
            <div className="relative">
              {/* Afternoon title */}
              <div className="relative text-center mb-4 md:mb-6 lg:mb-8">
                <div className="font-serif text-base md:text-base lg:text-[24px] font-semibold tracking-[0.2px] text-transparent"
                  style={{
                    background: "var(--Linear, linear-gradient(180deg, #956E42 0%, #E9DDCF 100%))",
                    backgroundClip: "text",
                  }}
                >
                  Afternoon Session
                </div>
              </div>

              {/* Afternoon */}
              <div className="relative pt-4 md:pt-5 lg:pt-4">
                <div className="space-y-8">
                  {afternoon.map((r, i) => (
                    <Row key={i} {...r} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
