import axios from "axios";

const QUERY_BASE =
  "http://dataportal.gtcfx.group/gtcfxbi/GTC_ana/app/dataApi/ibPerformanceQuery.app/API/queryData.afl";

const USE_MOCK = process.env.USE_MOCK_TOKEN === "true";

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const email = searchParams.get("email");
  const access_token = searchParams.get("access_token");
  const startMonth = searchParams.get("startMonth");
  const endMonth = searchParams.get("endMonth");

  if (!email || !access_token || !startMonth || !endMonth) {
    return Response.json(
      { error: "Missing required params: email, access_token, startMonth, endMonth" },
      { status: 400 }
    );
  }

  if (USE_MOCK) {
    return Response.json({
      data: [],
      message: "Mock response - API unreachable",
    });
  }

  try {
    const url = `${QUERY_BASE}?email=${encodeURIComponent(email)}&access_token=${encodeURIComponent(access_token)}&startMonth=${encodeURIComponent(startMonth)}&endMonth=${encodeURIComponent(endMonth)}`;
    const { data, status } = await axios.get(url, {
      timeout: 15000,
      validateStatus: () => true,
    });
    return Response.json(data, { status });
  } catch (err) {
    console.error("IB Performance query failed:", err.message);
    return Response.json(
      { error: "request failed", detail: err.code || err.message },
      { status: 502 }
    );
  }
}
