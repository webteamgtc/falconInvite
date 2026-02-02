"use client";

const NAV = [
  "General Terms",
  "Risk Disclosure",
  "User Accounts",
  "Trading Conditions",
  "Privacy Policy",
  "Information Security",
  "Compliance",
  "Dispute Resolution",
];

export default function TermsModalLikeImage() {
  return (
    <section className="min-h-screen w-full bg-[#0B0B0B] px-4 py-10">
      {/* Frame */}
      <div className="mx-auto w-full max-w-[980px]">
        <div className="relative rounded-[6px] border border-white/12 bg-[#0A0A0A] shadow-[0_0_0_1px_rgba(255,255,255,0.05),0_30px_70px_rgba(0,0,0,0.65)]">
          {/* subtle inner border like image */}
          <div className="pointer-events-none absolute inset-[10px] rounded-[4px] border border-white/10" />

          <div className="relative grid grid-cols-12">
            {/* LEFT NAV */}
            <aside className="col-span-4 px-7 pb-10 pt-8">
              <nav className="space-y-[10px]">
                {NAV.map((item, idx) => (
                  <button
                    key={item}
                    type="button"
                    className={[
                      "group flex w-full items-center gap-3 text-left",
                      "text-[13px] leading-[1.2] text-white/75 hover:text-white",
                      idx === 0 ? "text-white" : "",
                    ].join(" ")}
                  >
                    <span className="text-white/60 group-hover:text-white/80">
                      ›
                    </span>
                    <span className="font-[Georgia]">{item}</span>
                  </button>
                ))}
              </nav>

              <div className="mt-6 h-px w-full bg-white/10" />

              <div className="mt-5 text-center">
                <p className="text-[12px] leading-[1.6] text-white/70">
                  For any questions, please
                  <br />
                  support@gtcfx.com
                </p>
              </div>
            </aside>

            {/* VERTICAL DIVIDER */}
            <div className="col-span-1 flex justify-center">
              <div className="my-7 w-px bg-white/12" />
            </div>

            {/* RIGHT CONTENT */}
            <main className="col-span-7 px-7 pb-10 pt-8">
              <div className="max-h-[520px] overflow-auto pr-3">
                <h2
                  className="text-[18px] font-semibold tracking-[0.2px]"
                  style={{ color: "#B68756", fontFamily: "Georgia, serif" }}
                >
                  General Terms
                </h2>

                <div className="mt-4 space-y-5 text-white/78">
                  <Section
                    title="Introduction"
                    text="These terms govern the access and use of GTCFX’s services. By using our website, platforms, and services, you agree to comply with these Terms & Conditions."
                  />

                  <Section
                    title="Eligibility"
                    text="Users must be of legal age and authorized to enter into binding agreements."
                  />

                  <Section
                    title="Modifications"
                    text="GTCFX reserves the right to update or modify these terms at any time. Changes will be communicated through the website."
                  />

                  <div className="pt-1">
                    <h3 className="text-[15px] font-semibold text-white/90">
                      Risk Disclosure
                    </h3>
                    <div className="mt-3 space-y-4">
                      <Row
                        label="Trading Risk"
                        value="Trading leveraged financial products involves high risk of loss and is not suitable for all investors. Please ensure you understand these risks as detailed in our Risk Disclosure Agreement."
                      />
                      <Row
                        label="No Guarantees"
                        value="Past performance is not indicative of future results. Market conditions and leverage can lead to"
                      />
                    </div>
                  </div>

                  <div className="pt-1">
                    <h3 className="text-[15px] font-semibold text-white/90">
                      User Accounts
                    </h3>
                    <div className="mt-3 space-y-4">
                      <Row
                        label="Registration"
                        value="Users must provide accurate and complete information when registering with GTCFX and maintain their account details up to date."
                      />
                      <Row
                        label="Responsibility"
                        value="Users are responsible for maintaining the confidentiality of their login credentials and for all activities conducted through"
                      />
                    </div>
                  </div>

                  <div className="pt-1">
                    <h3 className="text-[15px] font-semibold text-white/90">
                      Trading Conditions
                    </h3>
                    <div className="mt-3 space-y-4">
                      <Row
                        label="Market Volatility"
                        value="GTCFX strives to select AML and CAP/Rby aracy to present business terms, keep-spreads and quickly trades and liquidity."
                      />
                      <Row
                        label="Order Execution"
                        value="Orders are executed at the best available market price, subject to market conditions and liquidity."
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* bottom line like image */}
              <div className="mt-7 h-px w-full bg-white/10" />
            </main>
          </div>
        </div>
      </div>
    </section>
  );
}

function Section({ title, text }) {
  return (
    <div>
      <div className="grid grid-cols-12 gap-4">
        <div className="col-span-3">
          <p className="text-[13px] font-semibold text-white/85">{title}</p>
        </div>
        <div className="col-span-9">
          <p className="text-[12px] leading-[1.7] text-white/72">{text}</p>
        </div>
      </div>
    </div>
  );
}

function Row({ label, value }) {
  return (
    <div className="grid grid-cols-12 gap-4">
      <div className="col-span-3">
        <p className="text-[13px] font-semibold text-white/85">{label}</p>
      </div>
      <div className="col-span-9">
        <p className="text-[12px] leading-[1.7] text-white/72">{value}</p>
      </div>
    </div>
  );
}
