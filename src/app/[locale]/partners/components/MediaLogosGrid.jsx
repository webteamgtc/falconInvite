"use client";

const MEDIA_LOGO_NAMES = [
  { name: "", logo: "/media-icon1.svg" },
  { name: "", logo: "/media-icon2.svg" },
  { name: "", logo: "/media-icon3.svg" },
  { name: "", logo: "/media-icon4.svg" },
  { name: "", logo: "/media-icon5.svg" },
  { name: "", logo: "/media-icon6.svg" },
  { name: "", logo: "/media-icon7.svg" },
  { name: "", logo: "/media-icon8.svg" },
  { name: "", logo: "/media-icon9.svg" },
  { name: "", logo: "/media-icon10.svg" },
];

export default function MediaLogosGrid() {
  return (
    <section className="relative py-6 md:py-10">
      <div className="relative mx-auto max-w-6xl px-4 md:px-6">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 md:gap-6">
          {MEDIA_LOGO_NAMES.map((name, idex) => (
            <div
              key={idex}
              className="flex relative items-center justify-center min-h-[72px] md:min-h-[88px] rounded-lg md:rounded-lg px-4 py-5 "
            >
              <div
                className="absolute inset-0 bg-[url('/bg-media.svg')] rounded-lg md:rounded-lg bg-cover bg-center bg-no-repeat z-0"
              />
              <img className=" relative z-10" src={name?.logo} alt="" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
