"use client";

import Image from "next/image";

const Gold = "#d6b06a";

function IconPlane() {
  return (
    <svg viewBox="0 0 24 24" className="h-[16px] w-[16px]" fill="none">
      <path
        d="M21 13.2c0 .6-.5 1.1-1.1 1.1l-6.9.6-3.2 6.1c-.2.4-.6.6-1 .6-.6 0-1.1-.5-1.1-1.1l.4-5.9-4.7-1.1-1.1 1.6c-.2.3-.5.5-.9.5-.6 0-1.1-.5-1.1-1.1 0-.2.1-.4.2-.6l1.1-1.7-1.1-1.7c-.1-.2-.2-.4-.2-.6C0 9.4.5 9 1.1 9c.4 0 .7.2.9.5l1.1 1.6 4.7-1.1-.4-5.9C7.4 3.5 7.9 3 8.5 3c.4 0 .8.2 1 .6l3.2 6.1 6.9.6c.6.1 1.1.6 1.1 1.2Z"
        fill={Gold}
        opacity="0.9"
      />
    </svg>
  );
}

function IconCar() {
  return (
    <svg viewBox="0 0 24 24" className="h-[16px] w-[16px]" fill="none">
      <path
        d="M6.6 6.5c.3-.8 1.1-1.5 2-1.5h6.8c.9 0 1.7.6 2 1.5l1.2 3.5c.9.3 1.4 1 1.4 2v4c0 .6-.5 1.1-1.1 1.1h-.8c-.6 0-1.1-.5-1.1-1.1v-.7H7v.7c0 .6-.5 1.1-1.1 1.1H5c-.6 0-1.1-.5-1.1-1.1v-4c0-1 .5-1.7 1.4-2l1.3-3.5Z"
        fill={Gold}
        opacity="0.88"
      />
      <path d="M8 13.5h8" stroke="#1b1a1a" strokeOpacity="0.18" strokeWidth="1.4" strokeLinecap="round" />
      <circle cx="8" cy="15.8" r="1.2" fill="#0a0a0a" opacity="0.25" />
      <circle cx="16" cy="15.8" r="1.2" fill="#0a0a0a" opacity="0.25" />
    </svg>
  );
}

function IconBuilding() {
  return (
    <svg viewBox="0 0 24 24" className="h-[16px] w-[16px]" fill="none">
      <path d="M6 21V4.8c0-.5.4-.8.8-.8h10.4c.4 0 .8.3.8.8V21H6Z" fill={Gold} opacity="0.9" />
      <path
        d="M9 7.5h2M13 7.5h2M9 10.5h2M13 10.5h2M9 13.5h2M13 13.5h2"
        stroke="#0b0b0b"
        strokeOpacity="0.22"
        strokeWidth="1.3"
        strokeLinecap="round"
      />
      <path
        d="M10.3 21v-3.2c0-.4.3-.8.8-.8h1.8c.4 0 .8.4.8.8V21"
        stroke="#0b0b0b"
        strokeOpacity="0.18"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
    </svg>
  );
}

function IconKey() {
  return (
    <svg viewBox="0 0 24 24" className="h-[16px] w-[16px]" fill="none">
      <path
        d="M14.2 10.2a4.2 4.2 0 1 0-3.3 4.1l1.7 1.7h1.5v1.5h1.5V19h2.2l2.2-2.2-4.1-4.1Z"
        fill={Gold}
        opacity="0.9"
      />
      <circle cx="12" cy="10.2" r="1.2" fill="#0b0b0b" opacity="0.18" />
    </svg>
  );
}

const ICON_MAP = { plane: IconPlane, car: IconCar, building: IconBuilding, key: IconKey };

export default function QualificationCard({ badge, title, description, subtitle, items = [], closing }) {
  return (
    <div className="relative  max-w-full rounded-[16px] border border-white/25 overflow-hidden text-white">
      <div className="relative p-8">
        <div className="flex flex-col gap-2">
          <div className="flex w-full items-center gap-2">
            <div className="relative z-20 mt-[-20px] md:mt-[-30px]">
              {badge ? (
                <Image src={badge} alt={title} className=" w-[80px] md:w-[120px] h-[80px] md:h-[120px]" width={100} height={100} />
              ) : (
                <div className="flex h-[50px] md:h-[70px] w-[50px] md:w-[70px] items-center justify-center rounded-full bg-gradient-to-br from-[#F3D8AA] to-[#C49959] text-[#3c2911] text-2xl font-bold">
                  1
                </div>
              )}
            </div>
            <div className="flex-1">
              <h2 className="font-serif text-[24px] md:text-[30px] leading-[1.1] text-white/90">{title}</h2>
              <div className="mt-[16px] h-px w-full bg-white/25" />
            </div>
          </div>

          <p className="font-serif text-[16px] md:text-[18px] leading-[1.35] text-white/85">{description}</p>
          <p className="font-serif mt-3 text-[16px] md:text-[19px] text-white/85">{subtitle}</p>

          <div className="flex-1">
            <ul className="mt-2 space-y-[10px] font-serif text-[16px] md:text-[19px] text-white/85">
              {items.map((item, index) => {
                const IconComponent = typeof item.icon === "string" ? ICON_MAP[item.icon.replace("/", "").replace(".svg", "")] : null;
                return (
                  <li key={index} className="flex items-center gap-3">
                    {typeof item.icon === "string" ? (
                      <Image src={item.icon} alt="" width={16} height={16} className="h-4 w-4 flex-shrink-0" />
                    ) : IconComponent ? (
                      <IconComponent />
                    ) : (
                      <IconPlane />
                    )}
                    <span>{item.text}</span>
                  </li>
                );
              })}
            </ul>

            <p className="mt-[20px] font-serif italic text-[16px] md:text-[18px] text-white/70">{closing}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
