/**
 * Renders the 1200x630 social/Discover preview image for each locale to
 * public/og-image.png, og-image-da.png and og-image-ru.png.
 *
 * SVG is not accepted as an og:image by LinkedIn, Facebook or Google Discover,
 * so scripts/og-template.svg is rasterised with the system Chrome/Edge.
 * Text comes from src/data/locales.js; re-run after changing it:
 *
 *   node scripts/generate-og-images.mjs
 *
 * Set CHROME_PATH if the browser is not in a default location.
 */
import { execFileSync } from "node:child_process";
import { existsSync, mkdirSync, mkdtempSync, readFileSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";
import { translations } from "../src/data/locales.js";
import { SITE_URL } from "../src/data/seo.js";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const OUT_DIR = join(root, "public");

const BROWSER_CANDIDATES = [
  process.env.CHROME_PATH,
  "C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe",
  "C:/Program Files/Microsoft/Edge/Application/msedge.exe",
  "C:/Program Files/Google/Chrome/Application/chrome.exe",
  "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
  "/usr/bin/google-chrome",
  "/usr/bin/chromium",
].filter(Boolean);

const browser = BROWSER_CANDIDATES.find((path) => existsSync(path));
if (!browser) throw new Error("No Chrome/Edge found. Set CHROME_PATH.");

const fontUrl = (file) => pathToFileURL(join(root, "public/fonts", file)).href;
const escapeXml = (text) =>
  text.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

const FONT_CSS = `
@font-face { font-family: 'Anton'; src: url('${fontUrl("anton-latin-400.woff2")}'); }
@font-face { font-family: 'Instrument Sans'; src: url('${fontUrl("instrument-sans-latin-400.woff2")}'); }
@font-face { font-family: 'IBM Plex Mono'; src: url('${fontUrl("ibm-plex-mono-latin-400.woff2")}'); unicode-range: U+0000-00FF, U+2013-2014, U+00B7; }
@font-face { font-family: 'IBM Plex Mono'; src: url('${fontUrl("ibm-plex-mono-cyrillic-400.woff2")}'); unicode-range: U+0400-045F; }
html, body { margin: 0; background: #131313; }
svg { display: block; }`;

const template = readFileSync(join(root, "scripts/og-template.svg"), "utf8");
const host = new URL(SITE_URL).host;

const work = mkdtempSync(join(tmpdir(), "og-"));
mkdirSync(OUT_DIR, { recursive: true });

for (const [locale, t] of Object.entries(translations)) {
  const svg = template
    .replace("SOFTWARE ENGINEER — AARHUS, DENMARK", escapeXml(t.seo.ogEyebrow))
    .replace("I build and test software that holds up in production.", escapeXml(t.hero.tagline))
    .replace("blaizans.vercel.app", host);

  const page = join(work, `${locale}.html`);
  writeFileSync(page, `<!doctype html><meta charset="utf-8"><style>${FONT_CSS}</style>${svg}`);

  const file = join(OUT_DIR, locale === "en" ? "og-image.png" : `og-image-${locale}.png`);
  execFileSync(browser, [
    "--headless",
    "--disable-gpu",
    "--hide-scrollbars",
    "--force-device-scale-factor=1",
    "--window-size=1200,630",
    "--virtual-time-budget=4000",
    `--screenshot=${file}`,
    pathToFileURL(page).href,
  ], { stdio: "ignore" });
  console.log(`wrote ${file}`);
}
