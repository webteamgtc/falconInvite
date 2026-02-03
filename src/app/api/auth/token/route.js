import axios from "axios";

const API_TOKEN_URL = "http://dataportal.gtcfx.group/gtcfxbi/api/oauth2/getToken";

const REQUEST_BODY = {
  appid: "c9fa2513df6c4a42b434dfc5e2e20012",
  app_secret: "dc44bdb90a4242ae811885548949186a",
  userid: "marketing",
  grant_type: "ip",
};

/** Set USE_MOCK_TOKEN=true in .env.local when API is unreachable (e.g. dev without VPN) */
const USE_MOCK_TOKEN = process.env.USE_MOCK_TOKEN === "true";

export async function POST() {
  if (USE_MOCK_TOKEN) {
    return Response.json({
      access_token: "mock-token-for-development",
      token_type: "Bearer",
      expires_in: 3600,
    });
  }

  try {
    const { data, status } = await axios.post(API_TOKEN_URL, REQUEST_BODY, {
      headers: { "Content-Type": "application/json" },
      timeout: 15000,
      validateStatus: () => true,
    });
    return Response.json(data, { status });
  } catch (err) {
    const detail = err.code || err.message;
    const cause = err.response?.data || (err.request ? "No response from server" : null);
    console.error("Token proxy failed:", err.message);
    return Response.json(
      {
        error: "request failed",
        detail,
        cause: cause || null,
      },
      { status: 502 }
    );
  }
}
