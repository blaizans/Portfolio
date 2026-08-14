import React from "react";
import { Zone, SectionHeaderCompact } from "@/components/ui/Zone";
import { toolset } from "@/data/site";
import { useLocale } from "@/i18n/LocaleContext";

/**
 * Technical inventory, not a stack of rows.
 *
 * Groups sit side by side in columns and the items run inline, separated by
 * thin rules — the density of a parts list. This is the most compressed
 * section on the page, which is what makes Work read as expansive.
 */
const Toolset = () => {
  const { t } = useLocale();

  return (
    <Zone tone="dark" density="compact" id="toolset" labelledBy="toolset-title">
      <SectionHeaderCompact
        id="toolset-title"
        eyebrow={t.toolset.eyebrow}
        title={t.toolset.lead}
      />

      <div className="shell mt-12">
        <div className="grid gap-x-12 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
          {toolset.map((group, index) => (
            <section
              key={group.group}
              className="inventory-group reveal"
              style={{ "--i": index }}
              aria-label={t.toolset.groups[group.group] ?? group.group}
            >
              <div
                className="flex items-baseline justify-between gap-4 border-b pb-2"
                style={{ borderColor: "var(--t-line)" }}
              >
                <h3 className="mono" style={{ color: "var(--t-accent)" }}>
                  {t.toolset.groups[group.group] ?? group.group}
                </h3>
                <span className="mono t-muted" aria-hidden="true">
                  {String(group.items.length).padStart(2, "0")}
                </span>
              </div>

              <ul className="inventory-list mt-4" data-count={group.items.length}>
                {group.items.map((item) => (
                  <li key={item} style={{ fontSize: "1.0625rem", lineHeight: 1.5 }}>
                    {t.toolset.items[item] ?? item}
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>
      </div>
    </Zone>
  );
};

export default Toolset;
