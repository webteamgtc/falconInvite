import { NextRequest, NextResponse } from "next/server";
import axios from "axios";
import https from "https";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

function requireEnv(name) {
    const v = process.env[name];
    if (!v) throw new Error(`Missing env: ${name}`);
    return v;
}

const httpsAgent = new https.Agent({
    rejectUnauthorized: process.env.GTC_BI_VERIFY_SSL === "true",
});

async function getSessionCookie() {
    const base = requireEnv("GTC_BI_BASE_URL");
    const res = await axios.get(base, {
        timeout: 10000,
        httpsAgent,
        maxRedirects: 0,
        validateStatus: () => true,
    });
    const setCookie = res.headers["set-cookie"];
    if (Array.isArray(setCookie)) return setCookie.map((c) => c.split(";")[0]).join("; ");
    if (setCookie) return setCookie.split(";")[0];
    return process.env.DATAPORTAL_JSESSIONID ? `JSESSIONID=${process.env.DATAPORTAL_JSESSIONID}` : null;
}

async function getAccessToken(cookieHeader) {
    const base = requireEnv("GTC_BI_BASE_URL");
    const url = `${base}/api/oauth2/getToken`;

    const res = await axios.post(
        url,
        {
            appid: requireEnv("GTC_BI_APPID"),
            app_secret: requireEnv("GTC_BI_APP_SECRET"),
            userid: requireEnv("GTC_BI_USERID"),
            grant_type: requireEnv("GTC_BI_GRANT_TYPE"),
        },
        {
            headers: {
                "Content-Type": "application/json",
                ...(cookieHeader ? { Cookie: cookieHeader } : {}),
            },
            timeout: 15000,
            httpsAgent,
            validateStatus: () => true,
        }
    );

    const { data, status } = res;
    if (status !== 200 || !data?.result || !data.access_token) {
        throw new Error(`Token failed: status=${status} message=${data?.message ?? "unknown"}`);
    }

    const setCookie = res.headers["set-cookie"];
    let sessionCookie = cookieHeader;
    if (setCookie) {
        const parts = Array.isArray(setCookie) ? setCookie : [setCookie];
        sessionCookie = parts.map((c) => c.split(";")[0]).join("; ");
    }

    console.log("sessionCookie",res);

    return { accessToken: data.access_token, cookieHeader: sessionCookie };
}

export async function GET(req) {
    try {
        const { searchParams } = new URL(req.url);

        const email = searchParams.get("email");
        const startMonth = searchParams.get("startMonth"); // e.g. 2025-01
        const endMonth = searchParams.get("endMonth"); // e.g. 2025-10

        if (!email || !startMonth || !endMonth) {
            return NextResponse.json(
                { ok: false, error: "Missing query params: email, startMonth, endMonth" },
                { status: 400 }
            );
        }

        // 1) Establish session, get token, and capture JSESSIONID from getToken response
        const initialCookie = await getSessionCookie();
        const { accessToken, cookieHeader } = await getAccessToken(initialCookie);
        console.log("cookieHeader",{cookieHeader});
        console.log("accessToken",{accessToken});
        const base = requireEnv("GTC_BI_BASE_URL");
        const queryUrl =
            `${base}/GTC_ana/app/dataApi/ibPerformanceQuery.app/API/queryData.afl` +
            `?email=${encodeURIComponent(email)}` +
            `&access_token=${encodeURIComponent(accessToken)}` +
            `&startMonth=${encodeURIComponent(startMonth)}` +
            `&endMonth=${encodeURIComponent(endMonth)}`;

        const res = await axios.get(queryUrl, {
            timeout: 15000,
            httpsAgent,
            headers: {
                "User-Agent": "PostmanRuntime/7.43.0",
                Accept: "application/json, text/plain, */*",
                ...(cookieHeader ? { Cookie: cookieHeader } : {}),
            },
            validateStatus: () => true,
            responseType: "text",
        });

        const text = res.data;
        let parsed = null;
        try {
            parsed = JSON.parse(text);
        } catch {
            parsed = { raw: text };
        }

        if (res.status !== 200) {
            console.error("Upstream query failed:", { status: res.status, parsed });
            return NextResponse.json(
                {
                    ok: false,
                    status: res.status,
                    error: "Upstream query failed",
                    upstream: parsed,
                },
                { status: 502 }
            );
        }

        return NextResponse.json({ ok: true, data: parsed });
    } catch (e) {
        return NextResponse.json(
            { ok: false, error: e?.message ?? "Unknown error" },
            { status: 500 }
        );
    }
}
