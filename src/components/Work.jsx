import React from "react";
import Image from "next/image";
import { Zone, Eyebrow } from "@/components/ui/Zone";
import Offer from "@/components/Offer";
import { projects, profile } from "@/data/site";
import { useLocale } from "@/i18n/LocaleContext";

/**
 * The page's second visual peak, built as a sequence of scenes.
 *
 * 1. A heading scene: the section's name and an index of every project, so the
 *    reader sees the whole tour before it starts and can jump into it.
 * 2. One scene per project: title, plate, description and facts, composed to
 *    fit a single screen. The plate takes only the height left over.
 * 3. An extra scene for a project that is also an offer.
 * 4. One quiet line pointing to the older projects on GitHub.
 *
 * Shipped products are specimens rather than list items: a plate in colour, a
 * poster-scale title, and a spec rail carrying only facts that exist in the
 * data. No metric is displayed that isn't in `site.js`.
 */

/** Fact rail. Renders label/value pairs; nothing here is computed or invented. */
function SpecRail({ items }) {
  return (
    <dl className="spec-rail mono">
      {items.map((item) => (
        <div key={item.label} className="flex items-baseline justify-between gap-4">
          <dt className="t-muted">{item.label}</dt>
          <dd style={{ color: "var(--t-text)" }} className="text-right">
            {item.value}
          </dd>
        </div>
      ))}
    </dl>
  );
}

/**
 * The frame around a screenshot. A link when the project has a public URL;
 * otherwise a plain frame, since a link to nowhere would be a dead click.
 */
function Plate({ link, label, className = "", children }) {
  if (!link) {
    return <div className={`specimen-plate specimen-plate-static ${className}`}>{children}</div>;
  }
  return (
    <a
      href={link.href}
      target="_blank"
      rel="noreferrer noopener"
      className={`specimen-plate ${className}`}
      aria-label={label}
    >
      {children}
    </a>
  );
}

/** A small uppercase label over a block of a project's information. */
function InfoLabel({ children }) {
  return <h4 className="mono t-muted">{children}</h4>;
}

function Specimen({ project, index, t }) {
  const primaryLink = project.links[0];
  const linkLabel = primaryLink
    ? t.work.links[primaryLink.label === "Live site" ? "liveSite" : primaryLink.label.toLowerCase()] ??
      primaryLink.label
    : null;

  // Photos are shown whole, at their real ratio, in a column about 40% of the
  // width: they illustrate the project, the text carries it. The one exception
  // is a very wide capture on a phone, where the full-width ratio would shrink
  // its headline past legibility; `.plate-sized` (globals.css) gives that a
  // centred crop below `sm`.
  const size = project.imageSize ?? { width: 1600, height: 900 };
  const isVeryWide = size.width / size.height > 2;
  const plateImage = project.image ? (
    <Image
      src={project.image}
      alt={t.work.plateAlts?.[project.title] ?? t.work.screenshotAlt(project.title)}
      width={size.width}
      height={size.height}
      className="specimen-photo plate-sized"
      data-wide={isVeryWide ? "" : undefined}
      sizes="(max-width: 1023px) 100vw, 40vw"
      priority={index === 0}
      loading="eager"
    />
  ) : null;
  const plateCaption = project.plateCaptionKey
    ? t.work.plateCaptions?.[project.plateCaptionKey]
    : null;

  const rail = [
    { label: t.work.rail.role, value: t.work.roles[project.role] ?? project.role },
    { label: t.work.rail.year, value: project.year },
    {
      label: t.work.rail.status,
      value: project.status ? t.work.rail[project.status] ?? project.status : t.work.rail.statusValue,
    },
  ];

  // A project that is also an offer already lists what it does: its terms are
  // shown here as a quick-scan feature list. Nothing is written for the rest.
  const offer = project.offer ? t.work.offers?.[project.title] : null;
  const features = offer ? [...offer.shoppers, ...offer.owner].map((row) => row.term) : [];

  return (
    <article className="specimen" id={`work-${index + 1}`}>
      <div className="scene shell">
        {/* Index + title, in the hero's rail idiom */}
        <div className="reveal flex items-start gap-4 sm:gap-6">
          <span className="specimen-index shrink-0 pt-2" aria-hidden="true">
            {String(index + 1).padStart(2, "0")}
          </span>
          <h3 className="specimen-title min-w-0 flex-1">
            <span className="reveal-mask">
              <span>{project.title}</span>
            </span>
          </h3>
        </div>

        <div
          className="grid gap-x-14 gap-y-8 lg:grid-cols-12 lg:items-start"
          style={{ marginTop: "clamp(1rem, 3.5svh, 2.5rem)" }}
        >
          {/* Information: the main column. It comes first so a phone reader
              meets the project before the picture, and a desktop reader's eye
              lands on the text. */}
          <div className="reveal lg:col-span-7" style={{ "--i": 1 }}>
            <p className="text-lg lg:text-xl" style={{ maxWidth: "56ch", lineHeight: 1.5 }}>
              {t.work.bodies[project.title] ?? project.body}
            </p>

            {features.length > 0 ? (
              <div className="mt-6">
                <InfoLabel>{t.work.featuresLabel}</InfoLabel>
                <ul className="mt-3 flex flex-wrap gap-x-4 gap-y-2">
                  {features.map((feature) => (
                    <li key={feature} className="text-sm" style={{ color: "var(--t-text)" }}>
                      <span aria-hidden="true" className="mr-2" style={{ color: "var(--t-accent)" }}>
                        ·
                      </span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}

            <div className="mt-6">
              <InfoLabel>{t.work.builtWith}</InfoLabel>
              <ul className="mt-3 flex flex-wrap gap-x-5 gap-y-1.5">
                {project.stack.map((tech) => (
                  <li key={tech} className="mono" style={{ color: "var(--t-text)" }}>
                    {tech}
                  </li>
                ))}
              </ul>
            </div>

            {project.links.length > 0 ? (
              <ul className="mt-6 flex flex-wrap gap-x-6 gap-y-2">
                {project.links.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="link link-accent mono"
                    >
                      {t.work.links[
                        link.label === "Live site" ? "liveSite" : link.label.toLowerCase()
                      ] ?? link.label}{" "}
                      ↗
                    </a>
                  </li>
                ))}
              </ul>
            ) : null}

            {/* Real evidence of the human side of the work, small and quiet. */}
            {project.proofImage ? (
              <figure className="specimen-proof mt-8" style={{ maxWidth: "14rem" }}>
                <Image
                  src={project.proofImage.src}
                  alt={t.work.proofAlt?.[project.title] ?? ""}
                  width={1411}
                  height={1164}
                  className="w-full"
                  style={{ aspectRatio: "1411 / 1164", objectFit: "cover" }}
                  sizes="14rem"
                  loading="lazy"
                />
                {project.proofImage.captionKey ? (
                  <figcaption className="mono t-muted mt-2 text-xs">
                    {t.work.proofCaptions?.[project.proofImage.captionKey] ?? ""}
                  </figcaption>
                ) : null}
              </figure>
            ) : null}
          </div>

          {/* The picture and the facts: a modest column, not a banner. Party App
              (PNTA) is three distinct surfaces, so it shows one large and two
              small. */}
          <div className="reveal lg:col-span-5" style={{ "--i": 2 }}>
            {project.images ? (
              <div className="specimen-plate-grid grid grid-cols-2 gap-3">
                {project.images.map((img, imageIndex) => (
                  <Plate
                    key={img.src}
                    className={imageIndex === 0 ? "col-span-2" : ""}
                    link={img.href ? { href: img.href } : null}
                    label={`${project.title} — ${t.work.plateLabels[img.labelKey] ?? img.labelKey}`}
                  >
                    <Image
                      src={img.src}
                      alt={`${t.work.screenshotAlt(project.title)} — ${
                        t.work.plateLabels[img.labelKey] ?? img.labelKey
                      }`}
                      width={img.width}
                      height={img.height}
                      className="specimen-thumb"
                      sizes="(max-width: 1023px) 50vw, 20vw"
                      priority={index === 0}
                      loading="eager"
                    />
                  </Plate>
                ))}
              </div>
            ) : (
              <figure>
                <Plate link={primaryLink} label={`${project.title} — ${linkLabel}`}>
                  {plateImage}
                </Plate>
                {plateCaption ? (
                  <figcaption className="mono t-muted mt-2">{plateCaption}</figcaption>
                ) : null}
              </figure>
            )}

            <div className="mt-6">
              <SpecRail items={rail} />
            </div>
          </div>
        </div>
      </div>

      {/* A specimen that is also an offer: what is included, and one way to ask. */}
      {offer ? (
        <div className="scene shell">
          <Offer offer={offer} />
        </div>
      ) : null}
    </article>
  );
}

const Work = () => {
  const { t } = useLocale();

  return (
    <Zone tone="light" density="flush" id="work" labelledBy="work-title">
      {/* Heading scene: the section's name, then the whole tour at a glance. */}
      <header className="scene shell registration">
        <div className="reveal flex flex-wrap items-baseline justify-between gap-x-8 gap-y-2">
          <Eyebrow>{t.work.eyebrow}</Eyebrow>
          <span className="mono t-muted" aria-hidden="true">
            {String(projects.length).padStart(2, "0")}
          </span>
        </div>

        {/* Poster face, used once here: a short label, so it reads as a
            masthead echo rather than a wall of condensed caps. */}
        <h2 id="work-title" className="poster-face mt-6">
          <span className="reveal-mask">
            <span>{t.work.poster}</span>
          </span>
        </h2>

        <p className="reveal measure t-muted mt-5 text-lg" style={{ "--i": 1 }}>
          {t.work.title}
        </p>

        <ol className="rows" style={{ marginTop: "clamp(1.25rem, 5svh, 3.5rem)" }}>
          {projects.map((project, index) => (
            <li key={project.title}>
              <a
                href={`#work-${index + 1}`}
                className="row-item row-fill reveal block"
                style={{ "--i": index, textDecoration: "none", color: "inherit" }}
              >
                <div
                  className="grid items-baseline gap-x-6 gap-y-1 px-4 md:grid-cols-[3rem_minmax(0,1fr)_auto_auto]"
                  style={{ paddingBlock: "clamp(0.6rem, 1.9svh, 1.25rem)" }}
                >
                  <span className="mono t-muted" aria-hidden="true">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="t-title">{project.title}</span>
                  <span className="mono t-muted">{t.work.roles[project.role] ?? project.role}</span>
                  <span className="mono t-muted">{project.year}</span>
                </div>
              </a>
            </li>
          ))}
        </ol>
      </header>

      {/* One composed screen per project */}
      {projects.map((project, index) => (
        <Specimen key={project.title} project={project} index={index} t={t} />
      ))}

      {/* Older course and side projects: one quiet line, not seven cards */}
      <div className="scene shell">
        <div
          className="reveal flex flex-wrap items-baseline justify-between gap-x-8 gap-y-3 border-t pt-6"
          style={{ borderColor: "var(--t-line)" }}
        >
          <p className="t-muted text-sm">{t.work.otherProjects}</p>
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer noopener"
            className="link link-accent mono"
          >
            {t.work.allRepos} ↗
          </a>
        </div>
      </div>
    </Zone>
  );
};

export default Work;
