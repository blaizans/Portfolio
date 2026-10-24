import { translations } from "@/data/locales";
import { SITE_URL, localeUrl } from "@/data/seo";
import { education, experience, profile, projects } from "@/data/site";
import { EmptyPage, serveText } from "@/lib/serveText";

// Plain-text summary for language models (llms.txt convention). Built from the
// same data layer as the page so it cannot drift from what the site says.
const link = (label, href, note) => `- [${label}](${href})${note ? `: ${note}` : ""}`;

const buildLlms = () =>
  [
    `# ${profile.name}`,
    "",
    `> ${translations.en.seo.description}`,
    "",
    `${profile.name} is a ${profile.role.toLowerCase()} based in ${profile.location}. ` +
      "Full-stack across Java, .NET and TypeScript, with two products in production. " +
      "Available 12-20 hours a week from February 2027 for a student job (studiejob) building websites, web apps and web shops.",
    "",
    `Dansk: ${translations.da.seo.description}`,
    "",
    "## Pages",
    link("English", `${SITE_URL}/`),
    link("Dansk", localeUrl("da")),
    link("Русский", localeUrl("ru")),
    link("CV (PDF)", `${SITE_URL}/BrunoLaizans.pdf`),
    "",
    "## Contact",
    ...profile.socials.map((social) => link(social.label, social.href)),
    "",
    "## Selected work",
    ...projects
      .map((project) => link(`${project.title} (${project.year})`, project.links?.[0]?.href ?? SITE_URL, project.body)),
    "",
    "## Other projects",
    link("More on GitHub", profile.github, "older course and side projects"),
    "",
    "## Experience and education",
    ...experience.map((item) => `- ${item.org}: ${item.role}, ${item.period}`),
    ...education.map((item) => `- ${item.org}: ${item.role}, ${item.period}`),
    "",
  ].join("\n");

export const getServerSideProps = serveText("text/plain", buildLlms);
export default EmptyPage;
