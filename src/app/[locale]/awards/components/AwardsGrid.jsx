"use client";

import Image from "next/image";

const awardsBig = [
  { img: "/awards/img-1.svg" },
  { img: "/awards/img-2.svg" },
];

const awards = [
  { img: "/awards/img-3.svg" },
  { img: "/awards/img-4.svg" },
  { img: "/awards/img-5.svg" },
  { img: "/awards/img-6.svg" },
  { img: "/awards/img-7.svg" },
  { img: "/awards/img-8.svg" },
  { img: "/awards/img-9.svg" },
  { img: "/awards/img-10.svg" },
  { img: "/awards/img-11.svg" },
  { img: "/awards/img-12.svg" },
  { img: "/awards/img-13.svg" },
  { img: "/awards/img-14.svg" },
  { img: "/awards/img-15.svg" },
  { img: "/awards/img-16.svg" },
  { img: "/awards/img-17.svg" },
  { img: "/awards/img-18.svg" },
  { img: "/awards/img-19.svg" },
  { img: "/awards/img-20.svg" },
  { img: "/awards/img-21.svg" },
  { img: "/awards/img-22.svg" },
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
      {/* <div
        className="absolute inset-0 bg-[url('/new-layer.png')] bg-cover bg-center bg-no-repeat z-0"
      /> */}

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

