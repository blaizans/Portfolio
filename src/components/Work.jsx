import React from "react";
import Image from "next/image";
import { Zone, Eyebrow } from "@/components/ui/Zone";
import { projects, repositories, profile } from "@/data/site";
import { useLocale } from "@/i18n/LocaleContext";

/**
 * The page's second visual peak.
 *
 * Shipped products are treated as specimens rather than list items: a
 * full-width plate in colour, a poster-scale title that steps off the plate's
 * left edge, and a spec rail carrying only facts that exist in the data.
 * No metric is displayed that isn't in `site.js`.
 *
 * The smaller repositories stay a compact list — the tier difference is the
 * point, and it only reads if the second tier stays quiet.
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

function Specimen({ project, index, t }) {
  const primaryLink = project.links[0];
  const linkLabel = primaryLink
    ? t.work.links[primaryLink.label === "Live site" ? "liveSite" : primaryLink.label.toLowerCase()] ??
      primaryLink.label
    : null;

  const rail = [
    { label: t.work.rail.role, value: t.work.roles[project.role] ?? project.role },
    { label: t.work.rail.year, value: project.year },
    {
      label: t.work.rail.status,
      value: project.status ? t.work.rail[project.status] ?? project.status : t.work.rail.statusValue,
    },
  ];

  return (
    <article className="specimen reveal" style={{ "--i": 0 }}>
      {/* Index + title, in the hero's rail idiom */}
      <div className="flex items-start gap-4 sm:gap-6">
        <span className="specimen-index shrink-0 pt-2" aria-hidden="true">
          {String(index + 1).padStart(2, "0")}
        </span>
        <h3 className="specimen-title min-w-0 flex-1">
          <span className="reveal-mask">
            <span>{project.title}</span>
          </span>
        </h3>
      </div>

      {/* Plate — full width, in colour. The evidence, at full strength.
          Most specimens are one product, one 16:9 screenshot. PNTA is three
          distinct surfaces (dashboard, promo site, mobile app) — cropping
          them into one frame would throw two thirds of the evidence away,
          so it renders as a 3-up strip instead. A `placeholder` project has
          no screenshot to show at all — an abstract blurred field stands in,
          openly labelled, rather than a fabricated product shot. Not a
          link: there is nowhere real to send a click yet. */}
      {project.placeholder ? (
        <div className="specimen-plate specimen-placeholder mt-8" aria-hidden="false">
          <span className="specimen-placeholder-label mono">{t.work.placeholderLabel}</span>
        </div>
      ) : project.images ? (
        <div className="specimen-plate-grid mt-8 grid grid-cols-1 gap-3 sm:grid-cols-3">
          {project.images.map((img) => (
            <a
              key={img.src}
              href={primaryLink.href}
              target="_blank"
              rel="noreferrer noopener"
              className="specimen-plate"
              aria-label={`${project.title} — ${t.work.plateLabels[img.labelKey] ?? img.labelKey}`}
            >
              <Image
                src={img.src}
                alt={`${t.work.screenshotAlt(project.title)} — ${
                  t.work.plateLabels[img.labelKey] ?? img.labelKey
                }`}
                width={940}
                height={527}
                className="w-full"
                style={{ aspectRatio: "16 / 10", objectFit: "cover", objectPosition: "top" }}
                sizes="(max-width: 639px) 100vw, 30vw"
                priority={index === 0}
                loading="eager"
              />
            </a>
          ))}
        </div>
      ) : (
        <a
          href={primaryLink.href}
          target="_blank"
          rel="noreferrer noopener"
          className="specimen-plate mt-8"
          aria-label={`${project.title} — ${linkLabel}`}
        >
          <Image
            src={project.image}
            alt={t.work.screenshotAlt(project.title)}
            width={1600}
            height={900}
            className="w-full"
            style={{ aspectRatio: "16 / 9", objectFit: "cover", objectPosition: "left top" }}
            sizes="(max-width: 1023px) 100vw, 90vw"
            // These plates are a large share of the section's evidence.
            // Eager-load rather than risk an empty frame on fast scroll.
            priority={index === 0}
            loading="eager"
          />
        </a>
      )}

      {/* Below the plate: description left, facts right. Uneven on purpose. */}
      <div className="mt-10 grid gap-x-12 gap-y-8 lg:grid-cols-12">
        <div className="lg:col-span-6">
          <p className="text-lg" style={{ maxWidth: "46ch" }}>
            {t.work.bodies[project.title] ?? project.body}
          </p>

          <ul className="mt-7 flex flex-wrap gap-x-5 gap-y-2">
            {project.stack.map((tech) => (
              <li key={tech} className="mono t-muted">
                {tech}
              </li>
            ))}
          </ul>

          {project.links.length > 0 ? (
            <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-2">
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
        </div>

        <div className="lg:col-span-4 lg:col-start-9">
          <SpecRail items={rail} />
        </div>
      </div>

      {/* Proof photo: real evidence of the human side of the work, not
          another product shot. Full-width, below the facts — a group photo
          needs room to read, so it doesn't fight the spec rail for a
          narrow column. Quiet by placement, not by size. */}
      {project.proofImage ? (
        <figure className="specimen-proof mt-10" style={{ maxWidth: "32rem" }}>
          <Image
            src={project.proofImage.src}
            alt={t.work.proofAlt?.[project.title] ?? ""}
            width={1411}
            height={1164}
            className="w-full"
            style={{ aspectRatio: "1411 / 1164", objectFit: "cover" }}
            sizes="(max-width: 1023px) 100vw, 60vw"
            loading="lazy"
          />
          {project.proofImage.captionKey ? (
            <figcaption className="mono t-muted mt-3 text-xs">
              {t.work.proofCaptions?.[project.proofImage.captionKey] ?? ""}
            </figcaption>
          ) : null}
        </figure>
      ) : null}
    </article>
  );
}

const Work = () => {
  const { t } = useLocale();

  return (
    <Zone tone="light" density="expansive" id="work" labelledBy="work-title">
      {/* Bespoke opening: poster-scale headline, not the standard eyebrow stack */}
      <header className="shell registration">
        <div className="reveal flex flex-wrap items-baseline justify-between gap-x-8 gap-y-2">
          <Eyebrow>{t.work.eyebrow}</Eyebrow>
          <span className="mono t-muted" aria-hidden="true">
            {String(projects.length).padStart(2, "0")}
          </span>
        </div>

        {/* Poster face, used once here — short label only, so it reads as a
            masthead echo rather than a wall of condensed caps. */}
        <h2 id="work-title" className="poster-face mt-8">
          <span className="reveal-mask">
            <span>{t.work.poster}</span>
          </span>
        </h2>

        <p
          className="reveal measure t-muted mt-7 text-lg"
          style={{ "--i": 1 }}
        >
          {t.work.title}
        </p>
      </header>

      {/* Specimens: generous air between them so each owns its own screen */}
      <div className="shell mt-20 flex flex-col gap-24 md:gap-32">
        {projects.map((project, index) => (
          <Specimen key={project.title} project={project} index={index} t={t} />
        ))}
      </div>

      {/* Secondary tier — deliberately quiet, so the specimens keep their weight */}
      <div className="shell mt-32">
        <div className="reveal flex flex-wrap items-baseline justify-between gap-4 border-t pt-6"
          style={{ borderColor: "var(--t-line)" }}
        >
          <h3 className="mono t-muted">{t.work.otherProjects}</h3>
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer noopener"
            className="link link-accent mono"
          >
            {t.work.allRepos} ↗
          </a>
        </div>

        <div className="rows mt-6">
          {repositories.map((repo, index) => (
            <a
              key={repo.title}
              href={repo.href}
              target="_blank"
              rel="noreferrer noopener"
              className="row-item row-fill reveal block"
              style={{ "--i": index, textDecoration: "none", color: "inherit" }}
            >
              <div className="grid items-baseline gap-x-8 gap-y-2 px-4 py-6 md:grid-cols-[minmax(0,14rem)_minmax(0,1fr)_auto]">
                <h4 className="t-title">{repo.title}</h4>
                <p className="t-muted text-sm">{repo.body}</p>
                <span className="mono t-muted">{repo.year} ↗</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </Zone>
  );
};

export default Work;
