import { SITE_URL } from "@/data/seo";
import { EmptyPage, serveText } from "@/lib/serveText";

// Search and AI crawlers are welcome: being quoted by assistants is a goal.
// The named groups are explicit so that intent survives a future "disallow all" edit.
const AI_AND_SEARCH_CRAWLERS = [
  "Googlebot",
  "Google-Extended",
  "Bingbot",
  "GPTBot",
  "OAI-SearchBot",
  "ChatGPT-User",
  "ClaudeBot",
  "Claude-SearchBot",
  "Claude-User",
  "anthropic-ai",
  "PerplexityBot",
  "Perplexity-User",
  "Applebot",
  "Applebot-Extended",
  "CCBot",
];

const buildRobots = () =>
  [
    "User-agent: *",
    "Allow: /",
    "",
    ...AI_AND_SEARCH_CRAWLERS.flatMap((agent) => [`User-agent: ${agent}`, "Allow: /", ""]),
    `Sitemap: ${SITE_URL}/sitemap.xml`,
    "",
  ].join("\n");

export const getServerSideProps = serveText("text/plain", buildRobots);
export default EmptyPage;
