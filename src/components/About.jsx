import React from "react";
import Image from "next/image";
import { Zone, Eyebrow } from "@/components/ui/Zone";
import { Counter } from "@/components/ui/Counter";
import { profile, stats } from "@/data/site";
import { useLocale } from "@/i18n/LocaleContext";

const About = () => {
  const { t } = useLocale();

  return (
    <Zone tone="dark" scene id="about" labelledBy="about-title">
      <div className="shell registration grid gap-x-16 gap-y-12 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
        <div>
          <div className="reveal">
            <Eyebrow>{t.about.eyebrow}</Eyebrow>
          </div>
          <h2 id="about-title" className="t-display mt-5 max-w-[14ch]">
            <span className="reveal-mask">
              <span>{t.about.title}</span>
            </span>
          </h2>

          {/* One personal photo, tied directly to the football sentence in
              the bio column — a small, quiet aside, not a portrait hero. */}
          <figure
            className="about-photo reveal"
            style={{ "--i": 1, maxWidth: "min(22rem, 30svh)", marginTop: "clamp(1rem, 3.5svh, 2.5rem)" }}
          >
            <Image
              src="/bruno-football.png"
              alt={t.about.photoAlt}
              width={880}
              height={1100}
              className="w-full"
              style={{ aspectRatio: "4 / 5", objectFit: "cover" }}
              sizes="(max-width: 1023px) 60vw, 22rem"
              loading="lazy"
            />
          </figure>
        </div>

        <div>
          <p className="reveal text-lg">{t.about.intro}</p>

          <p className="reveal t-muted" style={{ "--i": 1, marginTop: "clamp(0.75rem, 2svh, 1.5rem)" }}>
            {t.about.p2}
          </p>

          <p className="reveal t-muted" style={{ "--i": 2, marginTop: "clamp(0.75rem, 2svh, 1.5rem)" }}>
            {t.about.p3}
          </p>

          <div
            className="reveal flex flex-wrap gap-4"
            style={{ "--i": 3, marginTop: "clamp(1rem, 3.5svh, 2.5rem)" }}
          >
            <a href="#contact" className="btn">
              <span>{t.about.cta}</span>
            </a>
          </div>
        </div>
      </div>

      <div className="shell" style={{ marginTop: "clamp(1.5rem, 6svh, 4rem)" }}>
        <dl
          className="hairline grid grid-cols-2 gap-8 md:grid-cols-4"
          style={{ paddingTop: "clamp(1rem, 3svh, 2.5rem)" }}
        >
          {stats.map((stat, index) => (
            <div key={stat.label} className="reveal" style={{ "--i": index }}>
              <dt className="sr-only">{t.about.stats[index]}</dt>
              <dd>
                <span
                  className="block"
                  style={{
                    fontFamily: "var(--display-font)",
                    fontSize: "clamp(2.5rem, 1.5rem + 3vw, 4.5rem)",
                    lineHeight: 1,
                    letterSpacing: "-0.04em",
                  }}
                >
                  <Counter value={stat.value} suffix={stat.suffix} />
                </span>
                <span className="mono t-muted mt-3 block">{t.about.stats[index]}</span>
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </Zone>
  );
};

export default About;
