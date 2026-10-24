import React from "react";
import Head from "next/head";
import { profile, projects } from "@/data/site";
import { LOCALES } from "@/data/locales";
import {
  LOCALE_META,
  OG_IMAGE_SIZE,
  SITE_URL,
  VERIFICATION,
  localeUrl,
  ogImageUrl,
} from "@/data/seo";
import { useLocale } from "@/i18n/LocaleContext";

const PERSON_ID = `${SITE_URL}/#person`;
const WEBSITE_ID = `${SITE_URL}/#website`;
const SERVICE_ID = `${SITE_URL}/#service`;

const KNOWS_ABOUT = [
  "Web development",
  "E-commerce",
  "Java",
  "Spring Boot",
  ".NET",
  "C#",
  "TypeScript",
  "React",
  "Next.js",
  "PostgreSQL",
  "Software testing",
];

function buildGraph({ locale, t, url }) {
  const { seo } = t;
  const sameAs = profile.socials
    .filter((social) => social.href.startsWith("http"))
    .map((social) => social.href);

  const person = {
    "@type": "Person",
    "@id": PERSON_ID,
    name: profile.name,
    jobTitle: seo.jobTitle,
    description: seo.description,
    email: profile.email,
    url: SITE_URL,
    image: ogImageUrl(locale),
    address: { "@type": "PostalAddress", addressLocality: "Aarhus", addressCountry: "DK" },
    worksFor: { "@type": "Organization", name: "Systematic", url: "https://systematic.com" },
    alumniOf: [
      { "@type": "CollegeOrUniversity", name: "VIA University College", url: "https://www.via.dk/" },
      { "@type": "CollegeOrUniversity", name: "UCL University College", url: "https://www.ucl.dk/" },
    ],
    sameAs,
    knowsAbout: KNOWS_ABOUT,
  };

  const website = {
    "@type": "WebSite",
    "@id": WEBSITE_ID,
    url: SITE_URL,
    name: profile.name,
    description: seo.description,
    inLanguage: LOCALES.map((code) => LOCALE_META[code].hreflang),
    publisher: { "@id": PERSON_ID },
  };

  const profilePage = {
    "@type": "ProfilePage",
    "@id": `${url}#profile`,
    url,
    name: seo.title,
    description: seo.description,
    inLanguage: LOCALE_META[locale].hreflang,
    isPartOf: { "@id": WEBSITE_ID },
    mainEntity: { "@id": PERSON_ID },
    primaryImageOfPage: { "@type": "ImageObject", url: ogImageUrl(locale), ...OG_IMAGE_SIZE },
  };

  // Describes what the freelance availability covers, without prices or packages.
  const service = {
    "@type": "ProfessionalService",
    "@id": SERVICE_ID,
    name: seo.serviceName,
    url: localeUrl(locale),
    image: ogImageUrl(locale),
    provider: { "@id": PERSON_ID },
    founder: { "@id": PERSON_ID },
    email: profile.email,
    address: { "@type": "PostalAddress", addressLocality: "Aarhus", addressCountry: "DK" },
    areaServed: { "@type": "Country", name: "Denmark" },
    serviceType: seo.serviceTypes,
    knowsAbout: KNOWS_ABOUT,
  };

  const work = {
    "@type": "ItemList",
    itemListElement: projects
      .map((project, index) => ({
        "@type": "ListItem",
        position: index + 1,
        item: {
          "@type": "CreativeWork",
          name: project.title,
          description: t.work.bodies?.[project.title] ?? project.body,
          creator: { "@id": PERSON_ID },
          dateCreated: project.year,
          url: project.links?.[0]?.href,
          keywords: project.stack.join(", "),
        },
      })),
  };

  return { "@context": "https://schema.org", "@graph": [person, website, profilePage, service, work] };
}

/**
 * All crawler-facing metadata for one language version of the page:
 * title/description, canonical, hreflang alternates, Open Graph / Twitter
 * cards and a linked JSON-LD graph (Person, WebSite, ProfilePage, service).
 */
const Seo = () => {
  const { locale, t } = useLocale();
  const { seo } = t;
  const url = localeUrl(locale);
  const image = ogImageUrl(locale);
  const graph = buildGraph({ locale, t, url });

  return (
    <Head>
      <title>{seo.title}</title>
      <meta name="description" content={seo.description} />
      <meta name="author" content={profile.name} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="theme-color" content="#131313" />
      {/* max-image-preview:large is also what makes the page eligible for large Discover cards. */}
      <meta
        name="robots"
        content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
      />
      <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
      <link rel="canonical" href={url} />

      {LOCALES.map((code) => (
        <link
          key={`hreflang-${code}`}
          rel="alternate"
          hrefLang={LOCALE_META[code].hreflang}
          href={localeUrl(code)}
        />
      ))}
      {/* Keys matter: next/head de-duplicates by key across ALL tags in the page head. */}
      <link rel="alternate" hrefLang="x-default" href={`${SITE_URL}/`} />

      <meta property="og:type" content="website" />
      <meta property="og:title" content={seo.title} />
      <meta property="og:description" content={seo.description} />
      <meta property="og:url" content={url} />
      <meta property="og:site_name" content={profile.name} />
      <meta property="og:locale" content={LOCALE_META[locale].ogLocale} />
      {LOCALES.filter((code) => code !== locale).map((code) => (
        <meta
          key={`og-locale-alt-${code}`}
          property="og:locale:alternate"
          content={LOCALE_META[code].ogLocale}
        />
      ))}
      <meta property="og:image" content={image} />
      <meta property="og:image:type" content="image/png" />
      <meta property="og:image:width" content={String(OG_IMAGE_SIZE.width)} />
      <meta property="og:image:height" content={String(OG_IMAGE_SIZE.height)} />
      <meta property="og:image:alt" content={seo.imageAlt} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={seo.title} />
      <meta name="twitter:description" content={seo.description} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:image:alt" content={seo.imageAlt} />

      {VERIFICATION.google && (
        <meta name="google-site-verification" content={VERIFICATION.google} />
      )}
      {VERIFICATION.bing && <meta name="msvalidate.01" content={VERIFICATION.bing} />}

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }}
      />
    </Head>
  );
};

export default Seo;
