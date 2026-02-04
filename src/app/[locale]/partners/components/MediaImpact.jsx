"use client";

const IMPACT_CARDS = [
  {
    icon: "document",
    title: "Editorial Coverage",
    desc: "Flagship media exposure in top-tier publications and news outlets, strengthening brand visibility and industry credibility.",
  },
  {
    icon: "handshake",
    title: "Strategic Partnerships",
    desc: "Key collaborations with leading media outlets and industry bodies to drive awareness and thought leadership.",
  },
  {
    icon: "trophy",
    title: "Industry Events",
    desc: "Active participation in major industry conferences and awards, showcasing innovation and excellence.",
  },
];

function IconDocument() {
  return (
<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
  <path d="M19.9987 24H13.332" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M23.9987 18.6666H13.332" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M5.33464 29.3333H26.668C27.3752 29.3333 28.0535 29.0523 28.5536 28.5522C29.0537 28.0521 29.3346 27.3739 29.3346 26.6666V5.33329C29.3346 4.62605 29.0537 3.94777 28.5536 3.44767C28.0535 2.94758 27.3752 2.66663 26.668 2.66663H10.668C9.96072 2.66663 9.28245 2.94758 8.78235 3.44767C8.28225 3.94777 8.0013 4.62605 8.0013 5.33329V26.6666C8.0013 27.3739 7.72035 28.0521 7.22025 28.5522C6.72016 29.0523 6.04188 29.3333 5.33464 29.3333ZM5.33464 29.3333C4.62739 29.3333 3.94911 29.0523 3.44902 28.5522C2.94892 28.0521 2.66797 27.3739 2.66797 26.6666V14.6666C2.66797 13.9594 2.94892 13.2811 3.44902 12.781C3.94911 12.2809 4.62739 12 5.33464 12H8.0013" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M22.6654 8H14.6654C13.929 8 13.332 8.59695 13.332 9.33333V12C13.332 12.7364 13.929 13.3333 14.6654 13.3333H22.6654C23.4017 13.3333 23.9987 12.7364 23.9987 12V9.33333C23.9987 8.59695 23.4017 8 22.6654 8Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
  );
}

function IconHandshake() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
    <path d="M21.3346 27.9999V25.3333C21.3346 23.9188 20.7727 22.5622 19.7725 21.562C18.7723 20.5618 17.4158 19.9999 16.0013 19.9999H8.0013C6.58681 19.9999 5.23026 20.5618 4.23007 21.562C3.22987 22.5622 2.66797 23.9188 2.66797 25.3333V27.9999" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M21.332 4.17059C22.4757 4.46709 23.4886 5.13495 24.2116 6.06934C24.9347 7.00374 25.327 8.15178 25.327 9.33326C25.327 10.5147 24.9347 11.6628 24.2116 12.5972C23.4886 13.5316 22.4757 14.1994 21.332 14.4959" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M29.332 27.9999V25.3333C29.3311 24.1516 28.9378 23.0036 28.2139 22.0697C27.4899 21.1358 26.4762 20.4687 25.332 20.1733" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M12.0013 14.6666C14.9468 14.6666 17.3346 12.2788 17.3346 9.33327C17.3346 6.38775 14.9468 3.99994 12.0013 3.99994C9.05578 3.99994 6.66797 6.38775 6.66797 9.33327C6.66797 12.2788 9.05578 14.6666 12.0013 14.6666Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>
  );
}

function IconTrophy() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
    <path d="M13.332 19.5466V21.7146C13.327 22.1715 13.2047 22.6193 12.9768 23.0153C12.7489 23.4113 12.4232 23.7421 12.0307 23.976C11.1976 24.593 10.5198 25.3959 10.0513 26.3209C9.58287 27.2458 9.33658 28.2672 9.33203 29.304" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M18.668 19.5466V21.7146C18.673 22.1715 18.7953 22.6193 19.0232 23.0153C19.2511 23.4113 19.5768 23.7421 19.9693 23.976C20.8024 24.593 21.4802 25.3959 21.9487 26.3209C22.4171 27.2458 22.6634 28.2672 22.668 29.304" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M24 12H26C26.8841 12 27.7319 11.6488 28.357 11.0237C28.9821 10.3985 29.3333 9.5507 29.3333 8.66665C29.3333 7.78259 28.9821 6.93474 28.357 6.30962C27.7319 5.6845 26.8841 5.33331 26 5.33331H24" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M8.0013 12H6.0013C5.11725 12 4.2694 11.6489 3.64428 11.0237C3.01916 10.3986 2.66797 9.55076 2.66797 8.66671C2.66797 7.78265 3.01916 6.93481 3.64428 6.30968C4.2694 5.68456 5.11725 5.33337 6.0013 5.33337H8.0013" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M5.33203 29.3334H26.6654" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M8 12C8 14.1218 8.84286 16.1566 10.3431 17.6569C11.8434 19.1572 13.8783 20 16 20C18.1217 20 20.1566 19.1572 21.6569 17.6569C23.1571 16.1566 24 14.1218 24 12V4.00002C24 3.6464 23.8595 3.30726 23.6095 3.05721C23.3594 2.80716 23.0203 2.66669 22.6667 2.66669H9.33333C8.97971 2.66669 8.64057 2.80716 8.39052 3.05721C8.14048 3.30726 8 3.6464 8 4.00002V12Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>
  );
}

const ICON_MAP = { document: IconDocument, handshake: IconHandshake, trophy: IconTrophy };

export default function MediaImpact() {
  return (
    <section className="relative py-14 md:py-20">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-[#0a0a1a]/50 to-[#0a0a1a]" />

      <div className="relative mx-auto max-w-6xl px-4 md:px-6">
        <h2
          className="font-serif text-[42px] md:text-[48px] lg:text-[56px] font-semibold tracking-wide text-center mb-10 md:mb-14"
          style={{
            background: "linear-gradient(180deg, #956E42 0%, #E9DDCF 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          Our Media Impact
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {IMPACT_CARDS.map((card) => {
            const Icon = ICON_MAP[card.icon] || IconDocument;
            return (
              <div
                key={card.title}
                className="p-6 md:p-8"
                style={{
                  borderRadius: "10px",
                  background: "var(--Linear, linear-gradient(180deg, #698AC1 0%, #020823 100%))"
                }}
              >
                <div className="mb-4">
                  <Icon />
                </div>
                <h3 className="text-base md:text-lg font-semibold text-white mb-3">
                  {card.title}
                </h3>
                <p className="text-[13px] md:text-[16px] text-white leading-relaxed">
                  {card.desc}
                </p>
              </div>
            );
          })}
        </div>

        <p className="mt-10 md:mt-14 text-center text-sm md:text-[22px] text-white">
          And many more global media collaborations to come.
        </p>
      </div>
    </section>
  );
}
