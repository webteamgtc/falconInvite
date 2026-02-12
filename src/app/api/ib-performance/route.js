// import axios from "axios";

// const QUERY_BASE =
//   "http://dataportal.gtcfx.group/gtcfxbi/GTC_ana/app/dataApi/ibPerformanceQuery.app/API/queryData.afl";
// const TOKEN_URL = "http://dataportal.gtcfx.group/gtcfxbi/api/oauth2/getToken";
// const TOKEN_BODY = {
//   appid: "c9fa2513df6c4a42b434dfc5e2e20012",
//   app_secret: "dc44bdb90a4242ae811885548949186a",
//   userid: "18699029939@163.com",
//   grant_type: "ip",
// };

// const USE_MOCK = process.env.USE_MOCK_TOKEN === "true";

// const REQUEST_HEADERS = {
//   "User-Agent": "PostmanRuntime/7.43.0",
//   Accept: "application/json",
//   "Accept-Language": "zh-CN",
// };

// async function getToken() {
//   const { data } = await axios.post(TOKEN_URL, TOKEN_BODY, {
//     headers: { "Content-Type": "application/json" },
//     timeout: 15000,
//     validateStatus: () => true,
//   });
//   const token = data?.access_token ?? data?.result?.access_token ?? data?.data?.access_token;
//   if (!token) throw new Error("No token in response");
//   return token;
// }

// export async function GET(request) {
//   const { searchParams } = new URL(request.url);
//   const email = searchParams.get("email") || "18699029939@163.com";
//   const startMonth = searchParams.get("startMonth") || "2025-01";
//   const endMonth = searchParams.get("endMonth") || "2025-10";

//   if (!email || !startMonth || !endMonth) {
//     return Response.json(
//       { error: "Missing required params: email, startMonth, endMonth" },
//       { status: 400 }
//     );
//   }

//   if (USE_MOCK) {
//     return Response.json({
//       data: [],
//       message: "Mock response - API unreachable",
//     });
//   }

//   try {
//     const access_token = await getToken();
//     const url = `${QUERY_BASE}?email=${encodeURIComponent(email)}&access_token=${encodeURIComponent(access_token)}&startMonth=${encodeURIComponent(startMonth)}&endMonth=${encodeURIComponent(endMonth)}`;
//     const { data, status } = await axios.get(url, {
//       timeout: 15000,
//       validateStatus: () => true,
//       headers: REQUEST_HEADERS,
//     });
//     return Response.json(data, { status });
//   } catch (err) {
//     console.error("IB Performance query failed:", err.message);
//     return Response.json(
//       { error: "request failed", detail: err.code || err.message },
//       { status: 502 }
//     );
//   }
// }


import axios from "axios";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const QUERY_BASE =
  "http://dataportal.gtcfx.group/gtcfxbi/GTC_ana/app/dataApi/ibPerformanceQuery.app/API/queryData.afl";

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const email = searchParams.get("email");
  const startMonth = searchParams.get("startMonth");
  const endMonth = searchParams.get("endMonth");

  if (!email || !startMonth || !endMonth) {
    return Response.json(
      { error: "Missing required params: email, startMonth, endMonth" },
      { status: 400 }
    );
  }

  const jsession = process.env.DATAPORTAL_JSESSIONID;
  if (!jsession) {
    return Response.json(
      { error: "Missing env DATAPORTAL_JSESSIONID" },
      { status: 500 }
    );
  }

  try {
    const upstream = await axios.get(QUERY_BASE, {
      params: { email, startMonth, endMonth },
      timeout: 15000,
      validateStatus: () => true,
      maxRedirects: 0,
      headers: {
        Accept: "application/json;charset=utf-8",
        "Accept-Language": "zh-CN",
        "User-Agent": "PostmanRuntime/7.43.0",

        // ✅ this is the key:
        Cookie: `JSESSIONID=${jsession}`,
      },
    });

    console.log("[IB] upstream status:", upstream.status);
    if (upstream.headers?.location) console.log("[IB] redirect:", upstream.headers.location);

    return Response.json(upstream.data, { status: upstream.status });
  } catch (err) {
    console.error("[IB] request failed:", err?.message);
    return Response.json(
      { error: "request failed", detail: err?.code || err?.message },
      { status: 502 }
    );
  }
}
