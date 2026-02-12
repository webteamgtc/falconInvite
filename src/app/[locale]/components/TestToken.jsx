"use client";

import { useEffect, useMemo, useState } from "react";

const IB_PERFORMANCE_EMAIL = "18699029939@163.com";
const IB_PERFORMANCE_START = "2025-01";
const IB_PERFORMANCE_END = "2025-10";

export default function GoldenFalconHeroMobile() {
  const [tokenResponse, setTokenResponse] = useState(null);
  const [performanceData, setPerformanceData] = useState(null);
  const [error, setError] = useState(null);



  return (
    <div className="p-4 text-white">
      <div className="rounded-xl bg-black/40 p-4">
        <div className="text-lg font-semibold">IB Performance Debug</div>

        <div className="mt-2 text-sm opacity-80">
          Token: {tokenResponse ? "✅ loaded" : "⏳ loading..."}
        </div>

        {error && <div className="mt-3 rounded bg-red-500/20 p-3 text-sm">{error}</div>}

        {performanceData && (
          <pre className="mt-4 max-h-[320px] overflow-auto rounded bg-white/10 p-3 text-xs">
            {JSON.stringify(performanceData, null, 2)}
          </pre>
        )}
      </div>
    </div>
  );
}
