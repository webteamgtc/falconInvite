"use client";

import Image from "next/image";

const awardsBig = [
  { img: "/turkey.svg" },
  { img: "/us.svg" },
];

const awards = [
  { img: "/cis.svg" },
  { img: "/japan.svg" },
  { img: "/uk.svg" },
  { img: "/asia.svg" },
  { img: "/india.svg" },
  { img: "/trading.svg" },
  { img: "/partner.svg" },
  { img: "/liqudity.svg" },
  { img: "/trusted.svg" },
  { img: "/women.svg" },
  { img: "/youngest.svg" },
  { img: "/outstanding.svg" },
  { img: "/customer.svg" },
  { img: "/top.svg" },
  { img: "/premium.svg" },
  { img: "/highest.svg" },

  { img: "/global.svg" },
  { img: "/client.svg" },
  { img: "/ib.svg" },
  { img: "/integrity.svg" },
];


function AwardTile({ img, imgBig = false }) {
  return (
    <div className="group relative">

      <div className={`relative mx-auto ${imgBig ? "h-[300px] md:h-[450px]" : "h-[250px] md:h-[350px]"}`}>
        <Image
          src={img}
          alt=""
          fill
          className="object-contain"
        />
      </div>

    </div>
  );
}

export default function AwardsGrid() {
  return (
    <section className="relative pb-14 md:pb-20">
      <div
        className="absolute inset-0 bg-[url('/bg-new.png')] bg-cover bg-center bg-no-repeat z-0"
      />

      <div className="relative mx-auto w-full max-w-6xl px-4 md:px-6 lg:px-8 pt-10 md:pt-12">
        <div className="grid max-w-5xl mx-auto grid-cols-2 gap-4 md:grid-cols-2 md:gap-6">
          {awardsBig.map((a, idx) => (
            <AwardTile key={idx} img={a.img} imgBig={true} />
          ))}
        </div>
        <div className="grid mt-10 grid-cols-2 gap-4 md:grid-cols-3 md:gap-6 lg:grid-cols-4">
          {awards.map((a, idx) => (
            <AwardTile key={idx} img={a.img} />
          ))}
        </div>
      </div>
    </section>
  );
}

