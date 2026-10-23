/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,

  // Locale-prefixed URLs (/, /da, /ru) so every language is a separate,
  // crawlable, server-rendered document. Detection is handled in
  // src/proxy.js (Denmark -> Danish, everyone else -> English) because
  // the built-in Accept-Language detection cannot look at the visitor's country.
  i18n: {
    locales: ["en", "da", "ru"],
    defaultLocale: "en",
    localeDetection: false,
  },

  async headers() {
    return [
      {
        // Self-hosted font files never change under the same name.
        source: "/fonts/:file*",
        headers: [{ key: "Cache-Control", value: "public, max-age=31536000, immutable" }],
      },
    ];
  },
};

module.exports = nextConfig;
