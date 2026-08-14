import React from "react";
import dynamic from "next/dynamic";
import { profile } from "@/data/site";
import { useLocale } from "@/i18n/LocaleContext";

// Canvas is client-only and non-critical: keep it out of the initial bundle.
const GridField = dynamic(() => import("@/components/GridField"), { ssr: false });

/**
 * Editorial masthead, built on an explicit 12-column grid.
 *
 * Deliberately not the conventional hero stack (centred headline, subhead,
 * two buttons, even stat row). Instead: an index rail down the left, the name
 * broken across two offset lines, a rotated availability flag, and a bottom
 * ledger whose columns are intentionally unequal.
 */
const Hero = () => {
  const { t } = useLocale();
  const [first, last] = profile.name.split(" ");

  return (
    <section
      id="top"
      aria-labelledby="hero-title"
      className="ui-dark noise relative min-h-[100svh] overflow-hidden"
    >
      {/* Motion layer */}
      <div className="absolute inset-0 z-0" aria-hidden="true">
        <GridField />
      </div>

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-[1]"
        style={{
          background:
            "linear-gradient(180deg, rgba(19,19,19,0.55) 0%, rgba(19,19,19,0.12) 42%, rgba(19,19,19,0.9) 100%)",
        }}
      />

      {/* Hairline rules that expose the underlying grid, like print registration marks */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-[1] hidden lg:block"
        style={{ paddingInline: "var(--gutter)" }}
      >
        <div className="relative mx-auto h-full" style={{ maxWidth: "var(--maxw)" }}>
          {["16.66%", "50%", "83.33%"].map((left) => (
            <span
              key={left}
              className="absolute top-0 h-full"
              style={{ left, width: "1px", background: "rgba(240,240,240,0.07)" }}
            />
          ))}
        </div>
      </div>

      <div
        className="relative z-[2] mx-auto flex min-h-[100svh] flex-col"
        style={{
          maxWidth: "var(--maxw)",
          paddingInline: "var(--gutter)",
          paddingTop: "calc(var(--nav-h) + clamp(1rem, 3vh, 2.5rem))",
          paddingBottom: "clamp(1.25rem, 3vh, 2.5rem)",
        }}
      >
        {/* ── Masthead: index rail + offset lockup ─────────────────── */}
        <div className="flex flex-1 flex-col justify-center">
          <div className="flex items-start gap-5 sm:gap-8">
            {/* Left rail: issue-number styling, vertical on desktop */}
            <div className="reveal shrink-0 pt-2">
              <span
                className="mono block"
                style={{ color: "var(--accent-light)", lineHeight: 1.2 }}
              >
                01
              </span>
              <span
                aria-hidden="true"
                className="mt-3 block"
                style={{ width: "1px", height: "clamp(40px, 9vh, 110px)", background: "var(--t-line-strong)" }}
              />
            </div>

            <div className="min-w-0 flex-1">
              <h1 id="hero-title" className="poster poster-lockup">
                <span className="reveal-mask block">
                  <span className="poster-line">{first}</span>
                </span>
                {/* Second line is indented into the grid, not left-aligned */}
                <span className="reveal-mask block" style={{ "--i": 1 }}>
                  <span className="poster-line poster-outline poster-indent">{last}</span>
                </span>
              </h1>
            </div>
          </div>

          {/* Pitch sits in the right two-thirds only, with the role as a runner */}
          <div className="mt-10 grid gap-x-8 gap-y-6 lg:grid-cols-12">
            <p
              className="reveal mono lg:col-span-3"
              style={{ "--i": 2, color: "var(--accent-light)" }}
            >
              {t.hero.role}
              <span className="t-muted block">{t.hero.location}</span>
            </p>

            <p
              className="reveal text-lg lg:col-span-6 lg:col-start-5"
              style={{ "--i": 3, maxWidth: "46ch" }}
            >
              {t.hero.pitch}
            </p>

            {/* CTA stack: one solid, one plain text link. Not two matching pills. */}
            <div
              className="reveal flex flex-col items-start gap-4 lg:col-span-2 lg:col-start-11"
              style={{ "--i": 4 }}
            >
              <a href="#contact" className="btn w-full justify-center">
                <span>{t.hero.hireMe}</span>
                <span aria-hidden="true">→</span>
              </a>
              <a href="#work" className="link mono">
                {t.hero.seeWork} ↓
              </a>
            </div>
          </div>
        </div>

        {/* ── Ledger: deliberately uneven columns, mono, rule above ── */}
        <dl
          className="reveal grid gap-x-8 gap-y-5 border-t pt-6 sm:grid-cols-2 lg:grid-cols-[auto_auto_auto_1fr]"
          style={{ borderColor: "var(--t-line)" }}
        >
          {[
            { term: t.hero.proof.nowAt, value: t.hero.proof.nowAtValue },
            { term: t.hero.proof.experience, value: t.hero.proof.experienceValue },
            { term: t.hero.proof.focus, value: t.hero.proof.focusValue },
          ].map((item) => (
            <div key={item.term} className="flex flex-wrap items-baseline gap-x-3">
              <dt className="mono t-muted">{item.term}</dt>
              <dd className="mono" style={{ color: "var(--t-text)" }}>
                {item.value}
              </dd>
            </div>
          ))}

          {/* Availability pushed hard right, flagged with a live dot */}
          <div className="flex items-baseline gap-3 lg:justify-self-end">
            <span
              aria-hidden="true"
              className="inline-block h-2 w-2 shrink-0 translate-y-[-1px] rounded-full"
              style={{ background: "var(--accent-light)" }}
            />
            <dt className="sr-only">{t.hero.availability}</dt>
            <dd className="mono" style={{ color: "var(--accent-light)" }}>
              {t.hero.hiringNote}
            </dd>
          </div>
        </dl>
      </div>
    </section>
  );
};

export default Hero;
