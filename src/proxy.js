import { NextResponse } from "next/server";

/**
 * First-visit language routing for the bare "/" (English) URL:
 *   1. an explicit choice (NEXT_LOCALE cookie) always wins
 *   2. visitors in Denmark, or whose browser ranks Danish first, get /da
 *   3. everyone else stays on English
 * Crawlers and link-preview bots are never redirected, so search engines and
 * social cards always see the English document and discover /da and /ru
 * through hreflang and the sitemap.
 */

const LOCALE_COOKIE = "NEXT_LOCALE";
const DANISH_PATH = "/da";

const BOT_PATTERN =
  /bot|crawl|spider|slurp|google|bing|duckduck|yandex|baidu|gpt|openai|claude|anthropic|perplexity|cohere|facebookexternalhit|linkedin|twitter|whatsapp|telegram|slack|discord|embedly|preview|lighthouse|pagespeed|headless/i;

export const config = { matcher: ["/"] };

/** Highest-ranked primary language subtag of an Accept-Language header. */
function topLanguage(header) {
  if (!header) return null;
  const ranked = header
    .split(",")
    .map((part, index) => {
      const [tag, ...params] = part.trim().split(";");
      const q = params.map((p) => p.trim()).find((p) => p.startsWith("q="));
      const weight = q ? Number.parseFloat(q.slice(2)) : 1;
      return { lang: tag.split("-")[0].toLowerCase(), weight, index };
    })
    .filter((entry) => entry.lang && entry.lang !== "*" && entry.weight > 0)
    .sort((a, b) => b.weight - a.weight || a.index - b.index);
  return ranked[0]?.lang ?? null;
}

export function proxy(request) {
  const { nextUrl, headers, cookies } = request;

  // Only the default-locale root is auto-routed; /da and /ru are explicit.
  if (nextUrl.locale !== "en") return NextResponse.next();
  // Client-side navigation data requests must never be redirected.
  if (headers.get("x-nextjs-data")) return NextResponse.next();
  if (cookies.get(LOCALE_COOKIE)?.value) return NextResponse.next();
  if (BOT_PATTERN.test(headers.get("user-agent") ?? "")) return NextResponse.next();

  const country = headers.get("x-vercel-ip-country") ?? request.geo?.country;
  const prefersDanish = topLanguage(headers.get("accept-language")) === "da";
  if (country !== "DK" && !prefersDanish) return NextResponse.next();

  const target = nextUrl.clone();
  target.locale = "da";
  const response = NextResponse.redirect(target, 307);
  response.headers.set("Vary", "Accept-Language, Cookie");
  return response;
}
