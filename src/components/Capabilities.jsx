import React from "react";
import { Zone, SectionHeader } from "@/components/ui/Zone";
import { capabilities } from "@/data/site";
import { useLocale } from "@/i18n/LocaleContext";

/**
 * Numbered capability rows — the editorial replacement for a uniform card grid.
 * Row numbers come from a CSS counter, so reordering the data renumbers itself.
 */
const Capabilities = () => {
  const { t } = useLocale();

  return (
    <Zone tone="light" density="compact" id="capabilities" labelledBy="capabilities-title">
      <SectionHeader
        id="capabilities-title"
        eyebrow={t.capabilities.eyebrow}
        title={t.capabilities.title}
      />

      <div className="shell mt-16">
        <div className="rows">
          {capabilities.map((item, index) => (
            <article
              key={item.title}
              className="row-item row-num reveal grid items-start gap-x-8 gap-y-4 py-8 md:grid-cols-[4rem_minmax(0,1fr)_minmax(0,1.15fr)]"
              style={{ "--i": index }}
            >
              {/* The lead row carries the differentiator, so it breaks the
                  uniform grid: accent flag and a step up in title scale. */}
              <h3
                className={`order-2 md:order-none ${item.lead ? "t-display" : "t-title"}`}
                style={item.lead ? { fontSize: "clamp(1.6rem, 1rem + 1.7vw, 2.6rem)" } : undefined}
              >
                {item.lead ? (
                  <span className="mono mb-3 block" style={{ color: "var(--t-accent)" }}>
                    {t.capabilities.items[index].flag}
                  </span>
                ) : null}
                {t.capabilities.items[index].title}
              </h3>

              <div className="order-3 md:order-none">
                <p className={item.lead ? "text-lg" : "t-muted"}>
                  {t.capabilities.items[index].body}
                </p>
                <ul className="mt-4 flex flex-wrap gap-x-4 gap-y-2">
                  {item.tags.map((tag) => (
                    <li key={tag} className="mono t-muted">
                      {tag}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </Zone>
  );
};

export default Capabilities;
