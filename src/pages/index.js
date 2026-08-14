import Head from "next/head";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Capabilities from "@/components/Capabilities";
import About from "@/components/About";
import Work from "@/components/Work";
import Experience from "@/components/Experience";
import Toolset from "@/components/Toolset";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { useReveal } from "@/hooks/useReveal";
import { profile, projects } from "@/data/site";

const SITE_URL = "https://blaizans.vercel.app";
const OG_IMAGE = `${SITE_URL}/og-image.svg`;
const TITLE = `${profile.name} — ${profile.role}`;
const DESCRIPTION =
  "Software engineer at Systematic, Denmark. Test engineering, automation, and full-stack development across Java, .NET and TypeScript.";
const KEYWORDS = [
  "software engineer",
  "test engineer",
  "QA automation",
  "full-stack developer",
  "Java",
  ".NET",
  "TypeScript",
  "React",
  "Next.js",
  "Aarhus",
  "Denmark",
].join(", ");

export default function Home() {
  useReveal();

  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: profile.name,
    jobTitle: profile.role,
    email: `mailto:${profile.email}`,
    url: SITE_URL,
    image: OG_IMAGE,
    address: { "@type": "PostalAddress", addressLocality: "Aarhus", addressCountry: "DK" },
    worksFor: { "@type": "Organization", name: "Systematic" },
    sameAs: profile.socials
      .filter((social) => social.href.startsWith("http"))
      .map((social) => social.href),
    knowsAbout: ["Software Testing", "Test Automation", "Java", ".NET", "TypeScript", "React", "Next.js"],
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: TITLE,
    url: SITE_URL,
    description: DESCRIPTION,
    author: { "@type": "Person", name: profile.name },
    inLanguage: ["en", "da", "ru"],
  };

  // One CreativeWork entry per featured specimen — gives crawlers a
  // structured record of the shipped/built work, not just prose.
  const projectsSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: projects.map((project, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "CreativeWork",
        name: project.title,
        description: project.body,
        creator: { "@type": "Person", name: profile.name },
        dateCreated: project.year,
        url: project.links?.[0]?.href,
        keywords: project.stack.join(", "),
      },
    })),
  };

  return (
    <>
      <Head>
        <title>{TITLE}</title>
        <meta name="description" content={DESCRIPTION} />
        <meta name="keywords" content={KEYWORDS} />
        <meta name="author" content={profile.name} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#131313" />
        <meta name="robots" content="index, follow" />
        <link rel="icon" href="/favicon.svg" />
        <link rel="canonical" href={SITE_URL} />

        <link rel="alternate" hreflang="en" href={SITE_URL} />
        <link rel="alternate" hreflang="da" href={SITE_URL} />
        <link rel="alternate" hreflang="ru" href={SITE_URL} />
        <link rel="alternate" hreflang="x-default" href={SITE_URL} />

        <meta property="og:type" content="website" />
        <meta property="og:title" content={TITLE} />
        <meta property="og:description" content={DESCRIPTION} />
        <meta property="og:url" content={SITE_URL} />
        <meta property="og:site_name" content={profile.name} />
        <meta property="og:locale" content="en_US" />
        <meta property="og:locale:alternate" content="da_DK" />
        <meta property="og:locale:alternate" content="ru_RU" />
        <meta property="og:image" content={OG_IMAGE} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content={TITLE} />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={TITLE} />
        <meta name="twitter:description" content={DESCRIPTION} />
        <meta name="twitter:image" content={OG_IMAGE} />
        <meta name="twitter:image:alt" content={TITLE} />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(projectsSchema) }}
        />
      </Head>

      <Nav />

      <main id="main">
        <Hero />
        <Capabilities />
        <About />
        <Work />
        <Experience />
        <Toolset />
        <Contact />
      </main>

      <Footer />
    </>
  );
}
