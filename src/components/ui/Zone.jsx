import React from "react";

/**
 * A themed page band. Sets the --t-* token scope for everything inside it,
 * so child components never hardcode colors.
 *
 * `density` controls the section's vertical rhythm. It is assigned by
 * importance — the payoff sections breathe, the reference sections compress —
 * so spacing carries hierarchy instead of being one page-wide constant.
 *
 * @param {"dark"|"light"|"gray"} tone
 * @param {"compact"|"standard"|"expansive"} density
 */
export function Zone({
  tone = "dark",
  density = "standard",
  id,
  labelledBy,
  className = "",
  children,
  as = "section",
}) {
  const Tag = as;
  const densityClass = density === "standard" ? "" : `zone-${density}`;

  return (
    <Tag
      id={id}
      aria-labelledby={labelledBy}
      className={`zone ui-${tone} ${densityClass} ${className}`}
    >
      {children}
    </Tag>
  );
}

/**
 * Mono eyebrow label — the Swiss signature used above every section heading.
 */
export function Eyebrow({ children, className = "" }) {
  return (
    <span className={`mono t-muted block ${className}`}>{children}</span>
  );
}

/**
 * Section heading block: eyebrow + masked-wipe headline.
 * The heading carries the id that its Zone points to via aria-labelledby.
 */
export function SectionHeader({ id, eyebrow, title, lead, className = "" }) {
  return (
    <header className={`shell ${className}`}>
      <div className="reveal">
        <Eyebrow>{eyebrow}</Eyebrow>
      </div>
      <h2 id={id} className="t-display mt-5 max-w-[18ch]">
        <span className="reveal-mask">
          <span>{title}</span>
        </span>
      </h2>
      {lead ? (
        <p className="reveal measure t-muted mt-6 text-lg" style={{ "--i": 1 }}>
          {lead}
        </p>
      ) : null}
    </header>
  );
}

/**
 * Compact section opening for the dense reference sections.
 *
 * The eyebrow sits on the same baseline as the headline instead of stacked
 * above it, and the headline drops to title scale. Same typography system,
 * lower amplitude — so Experience and Toolset read as reference material
 * rather than announcing themselves like the payoff sections do.
 */
export function SectionHeaderCompact({ id, eyebrow, title, className = "" }) {
  return (
    <header
      className={`shell flex flex-wrap items-baseline gap-x-8 gap-y-2 border-b pb-5 ${className}`}
      style={{ borderColor: "var(--t-line)" }}
    >
      {/* The short label is the heading here; the descriptive sentence trails
          it as muted body text on the same baseline. Inverse of the standard
          header's eyebrow-above-headline stack. */}
      <h2 id={id} className="t-title reveal-mask">
        <span>{eyebrow}</span>
      </h2>
      <p className="reveal t-muted" style={{ "--i": 1 }}>
        {title}
      </p>
    </header>
  );
}
