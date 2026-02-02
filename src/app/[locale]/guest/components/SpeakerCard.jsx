"use client";

export default function SpeakerCard({ name, role, image,idx }) {
  return (
    <div className={` ${idx==0?"max-w-2xl":"max-w-xl"} overflow-hidden `}
      style={{
        background: "linear-gradient(180deg, #698AC1 0%, #020823 100%)",
      }}
    >
      <div className="flex items-center gap-6 min-h-[200px]">
        {/* Left - circular headshot with grid pattern */}
        <div className="relative flex-shrink-0 h-full">
          <div
            className="relative w-20 h-20 md:w-44 md:h-full overflow-hidden "

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
        <div className="flex-1 min-w-0  p-6 md:p-8">
          <p
            className="font-semibold text-lg md:text-2xl  tracking-wide"
            style={{ color: "#fff" }}
          >
            {name}
          </p>
          <p className="mt-1.5 text-sm md:text-base text-white leading-relaxed">
            {role}
          </p>
        </div>
      </div>
    </div>
  );
}
