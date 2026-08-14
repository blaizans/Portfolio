import { Html, Head, Main, NextScript } from "next/document";

// Fonts are self-hosted in public/fonts, declared in src/styles/fonts.css —
// no request to Google Fonts. Preload only the two files that render above
// the fold on first paint: Anton for the hero name lockup, Instrument Sans
// for body copy. Everything else (IBM Plex Mono, Cyrillic subsets) loads
// on demand via the ordinary @font-face + font-display: swap path.
export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link
          rel="preload"
          href="/fonts/anton-latin-400.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/fonts/instrument-sans-latin-400.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
