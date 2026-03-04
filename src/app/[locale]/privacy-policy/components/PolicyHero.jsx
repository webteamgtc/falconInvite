"use client";

export default function PolicyHero() {
  return (
    <header className="mx-auto max-w-6xl px-4 md:px-6 mb-10 text-center">
      <h1
        className="text-[26px] md:text-[32px] lg:text-[38px] font-bold leading-tight"
        style={{
          background: "linear-gradient(180deg, #956E42 0%, #E9DDCF 100%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",
        }}
      >
        Golden Falcon Awards 2026
      </h1>
      <p className="mt-2 text-[17px] md:text-[19px] font-semibold text-[#D3C0A0]">
        Policies &amp; Conditions
      </p>
      <p className="mt-6 text-[14px] md:text-[15px] leading-relaxed mx-auto text-white max-w-3xl">
        These Policies &amp; Conditions govern participation in the Golden Falcon Awards 2026.
        They apply to all attendees, including qualified Introducing Brokers (IBs), invited guests,
        paid ticket holders, sponsors, media partners, and representatives.
        By registering for or attending this event, you confirm that you have read, understood,
        and agreed to these Policies &amp; Conditions.
      </p>
    </header>
  );
}
