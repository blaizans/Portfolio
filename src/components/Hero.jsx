import React from "react";
import dynamic from "next/dynamic";
import { profile, heroProof } from "@/data/site";
import { useLocale } from "@/i18n/LocaleContext";

// Canvas is client-only and non-critical: keep it out of the initial bundle.
const CosmosField = dynamic(() => import("@/components/CosmosField"), { ssr: false });

const Check = () => (
  <svg
    aria-hidden="true"
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="square"
  >
    <path d="M2.5 8.5l3.5 3.5 7.5-8" />
  </svg>
);

/**
 * A title over a planet at first light. Above the limb: role, name, one plain
 * sentence, availability and the call to action. Below it, on the planet's
 * dark surface where nothing glows behind the text: what you get, in three
 * columns, and the real work it rests on.
 *
 * The entrance is CSS only (`.enter`), so the first screen can never be left
 * hidden by a script that has not run.
 */
const Hero = () => {
  const { t } = useLocale();
  const [first, last] = profile.name.split(" ");

  return (
    <section
      id="top"
      aria-labelledby="hero-title"
      className="ui-dark noise relative min-h-svh overflow-hidden"
      // Deep night at the top; the planet in the canvas supplies the light.
      style={{
        backgroundImage: "linear-gradient(180deg, var(--sky-top) 0%, #050507 70%)",
      }}
    >
      {/* Motion layer */}
      <div className="absolute inset-0 z-0" aria-hidden="true">
        <CosmosField />
      </div>

      {/* Darkens only the top, so the nav stays legible over the stars */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 z-1 h-40"
        style={{
          background: "linear-gradient(180deg, rgba(11,13,31,0.7) 0%, rgba(11,13,31,0) 100%)",
        }}
      />

      <div
        className="relative z-2 mx-auto flex min-h-svh flex-col"
        style={{
          maxWidth: "var(--maxw)",
          paddingInline: "var(--gutter)",
          paddingTop: "calc(var(--nav-h) + clamp(0.5rem, 2vh, 1.5rem))",
          paddingBottom: "clamp(1rem, 3svh, 3rem)",
        }}
      >
        {/* ── Above the limb: who, and what I do ───────────────────── */}
        <div className="flex flex-1 flex-col items-center justify-center py-2 text-center">
          <p
            className="enter mono"
            style={{ "--i": 0, color: "var(--accent-light)", marginBottom: "clamp(0.75rem, 2svh, 1.25rem)" }}
          >
            {t.hero.role}, {t.hero.location}
          </p>

          <h1 id="hero-title" className="poster poster-lockup">
            <span className="enter-mask">
              <span className="poster-line">{first}</span>
            </span>
            <span className="enter-mask" style={{ "--i": 1 }}>
              <span className="poster-line poster-outline">{last}</span>
            </span>
            <span className="sr-only">, {t.seo.h1Extra}</span>
          </h1>

          <p
            className="enter"
            style={{
              "--i": 2,
              marginTop: "clamp(1rem, 3svh, 1.75rem)",
              fontFamily: "var(--display-font)",
              fontSize: "clamp(1.4rem, 1rem + 1.3vw, 2.15rem)",
              fontWeight: 500,
              lineHeight: 1.2,
              letterSpacing: "-0.02em",
              maxWidth: "40ch",
              textWrap: "balance",
            }}
          >
            {t.hero.statement}
          </p>

          <p
            className="enter mono flex items-baseline justify-center gap-3"
            style={{ "--i": 3, color: "var(--accent-light)", marginTop: "clamp(0.75rem, 2svh, 1.25rem)" }}
          >
            <span
              aria-hidden="true"
              className="inline-block h-2 w-2 shrink-0 -translate-y-px rounded-full"
              style={{ background: "var(--hope)" }}
            />
            {t.hero.hiringNote}
          </p>

          {/* One solid action and one plain link, not two matching pills */}
          <div
            data-hero-avoid
            className="enter flex flex-wrap items-center justify-center gap-x-8 gap-y-4 sm:w-fit"
            style={{ "--i": 4, marginTop: "clamp(1rem, 3svh, 1.75rem)" }}
          >
            <a href="#contact" className="btn w-full justify-center sm:w-auto">
              <span>{t.hero.hireMe}</span>
            </a>
            <a href="#work" className="link mono">
              {t.hero.seeWork}
            </a>
          </div>
        </div>

        {/* ── On the planet: what you get, and the work behind it ───── */}
        <aside
          aria-labelledby="hero-offer-title"
          className="mx-auto w-full"
          style={{ maxWidth: "1100px", marginTop: "min(clamp(6rem, 9.5vw, 9rem), 11svh)" }}
        >
          <h2
            id="hero-offer-title"
            className="enter mono t-muted text-center"
            style={{ "--i": 5, fontWeight: 400, letterSpacing: "0.1em", marginBottom: "clamp(0.75rem, 2.4svh, 1.5rem)" }}
          >
            {t.hero.offer.label}
          </h2>

          <ul className="grid gap-x-12 gap-y-8 md:grid-cols-3">
            {t.hero.offer.items.map((item, index) => (
              <li
                key={item.title}
                className="enter grid grid-cols-[1.75rem_minmax(0,1fr)] gap-x-3"
                style={{ "--i": 6 + index }}
              >
                <span className="pt-1" style={{ color: "var(--hope)" }}>
                  <Check />
                </span>
                <div>
                  <h3
                    style={{
                      fontSize: "clamp(1.15rem, 1rem + 0.5vw, 1.5rem)",
                      letterSpacing: "-0.02em",
                      lineHeight: 1.15,
                    }}
                  >
                    {item.title}
                  </h3>
                  <p className="t-muted mt-2" style={{ fontSize: "0.9375rem", lineHeight: 1.5 }}>
                    {item.body}
                  </p>
                </div>
              </li>
            ))}
          </ul>

          <div
            className="enter flex flex-wrap items-baseline justify-center gap-x-10 gap-y-3"
            style={{ "--i": 9, marginTop: "clamp(1.25rem, 4svh, 2.5rem)" }}
          >
            <p className="mono t-muted">{t.hero.offer.proofLabel}</p>
            <ul className="flex flex-wrap justify-center gap-x-10 gap-y-3">
              {heroProof.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    {...(item.href.startsWith("http")
                      ? { target: "_blank", rel: "noreferrer noopener" }
                      : {})}
                    className="link"
                    style={{
                      fontFamily: "var(--display-font)",
                      fontSize: "1.25rem",
                      fontWeight: 600,
                      letterSpacing: "-0.02em",
                    }}
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </aside>
      </div>
    </section>
  );
};

export default Hero;
