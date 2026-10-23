import { LOCALES } from "@/data/locales";
import { LOCALE_META, SITE_URL, localeUrl } from "@/data/seo";
import { EmptyPage, serveText } from "@/lib/serveText";

// One <url> per language version, each listing every alternate (itself included)
// as Google requires for hreflang in sitemaps.
const alternates = [
  ...LOCALES.map(
    (code) =>
      `    <xhtml:link rel="alternate" hreflang="${LOCALE_META[code].hreflang}" href="${localeUrl(code)}" />`,
  ),
  `    <xhtml:link rel="alternate" hreflang="x-default" href="${SITE_URL}/" />`,
].join("\n");

const buildSitemap = () =>
  [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">',
    ...LOCALES.map((code) =>
      [
        "  <url>",
        `    <loc>${code === "en" ? `${SITE_URL}/` : localeUrl(code)}</loc>`,
        alternates,
        "  </url>",
      ].join("\n"),
    ),
    "</urlset>",
    "",
  ].join("\n");

export const getServerSideProps = serveText("application/xml", buildSitemap);
export default EmptyPage;
