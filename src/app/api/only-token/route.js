import { NextResponse } from "next/server";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";



function requireEnv(name) {
  const v = process.env[name];
  if (!v) throw new Error(`Missing env: ${name}`);
  return v;
}

async function getAccessToken() {
  const base = requireEnv("GTC_BI_BASE_URL");
  const url = `${base}/api/oauth2/getToken`;

  console.log("[TOKEN] calling:", url);

  const res = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    cache: "no-store",
    body: JSON.stringify({
      appid: requireEnv("GTC_BI_APPID"),
      app_secret: requireEnv("GTC_BI_APP_SECRET"),
      userid: requireEnv("GTC_BI_USERID"),
      grant_type: requireEnv("GTC_BI_GRANT_TYPE"),
    }),
  });

  console.log("[TOKEN] status:", res.status);

  // IMPORTANT: read as text first so you can see non-JSON errors
  const raw = await res.text();
  console.log("[TOKEN] raw response:", raw);

  let data = null;
  try {
    data = JSON.parse(raw);
  } catch {
    throw new Error(`[TOKEN] Response is not JSON. Raw: ${raw}`);
  }

  if (!res.ok || !data?.result || !data.access_token) {
    throw new Error(
      `Token failed: status=${res.status} message=${data?.message ?? "unknown"}`
    );
  }

  console.log("[TOKEN] success token:", data.access_token);
  return data.access_token;
}

export async function GET() {
  try {
    console.log("[API] /api/ib-performance hit");
    const token = await getAccessToken();
    return NextResponse.json({ ok: true, token });
  } catch (e) {
    console.error("[API] ERROR:", e?.message || e);
    return NextResponse.json(
      { ok: false, error: e?.message ?? "Unknown error" },
      { status: 500 }
    );
  }
}
