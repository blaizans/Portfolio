/**
 * Everything the crawlers need to know about where the site lives and how its
 * language versions relate. Prose (titles, descriptions) lives in locales.js
 * under `seo`; this file only holds structural facts.
 *
 * The hostname is read from one place. Set NEXT_PUBLIC_SITE_URL when a custom
 * domain replaces the Vercel default and every canonical, hreflang, sitemap,
 * robots and llms.txt URL follows.
 */

export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL || "https://blaizans.vercel.app"
).replace(/\/$/, "");

export const DEFAULT_LOCALE = "en";

/** hreflang / Open Graph identifiers per locale. */
export const LOCALE_META = {
  en: { hreflang: "en", ogLocale: "en_US", path: "/" },
  da: { hreflang: "da", ogLocale: "da_DK", path: "/da" },
  ru: { hreflang: "ru", ogLocale: "ru_RU", path: "/ru" },
};

export const localeUrl = (locale) => `${SITE_URL}${LOCALE_META[locale].path}`;

/** 1200x630 PNG per locale (see scripts/generate-og-images.mjs). */
export const ogImageUrl = (locale) =>
  `${SITE_URL}/og-image${locale === DEFAULT_LOCALE ? "" : `-${locale}`}.png`;

export const OG_IMAGE_SIZE = { width: 1200, height: 630 };

/** Search Console / Bing Webmaster ownership tokens, when provided. */
export const VERIFICATION = {
  google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || "",
  bing: process.env.NEXT_PUBLIC_BING_SITE_VERIFICATION || "",
};
