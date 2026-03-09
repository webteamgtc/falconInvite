"use client";

export default function SpeakerCard({ name, role, image, idx }) {
  return (
    <div className={` ${idx == 0 ? "max-w-2xl" : "max-w-xl"} overflow-hidden relative `}

    >
      <div
        className="absolute inset-0 bg-[url('/card-bg.png')] bg-cover bg-center bg-no-repeat z-0 rounded-lg"
      />
      <div className="flex items-center md:gap-6 gap-2 min-h-[200px]">
        {/* Left - circular headshot with grid pattern */}
        <div className="relative flex-shrink-0 h-full">
          <div
            className="relative w-32 h-[200px] md:w-44 md:h-full overflow-hidden "

          >

            {image ? (
              <img
                src={image}
                alt={name}
                className="relative w-full h-full min-h-[200px] object-cover"
              />
            ) : (
              <span className="flex items-center justify-center w-full h-full text-2xl font-semibold text-[#E9DDCF]/80" style={{ fontFamily: 'Georgia, serif' }}>
                {name.charAt(0)}
              </span>
            )}
          </div>
        </div>

        {/* Right - text */}
        <div className="flex-1 min-w-0 relative z-10 p-6 md:p-8 text-[#25282B]">
          <p
            className="font-semibold text-lg md:text-2xl  tracking-wide"
          >
            {name}
          </p>
          <p className="mt-1.5 text-sm md:text-base leading-relaxed">
            {role}
          </p>
        </div>
      </div>
    </div>
  );
}
