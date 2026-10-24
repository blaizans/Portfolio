import React from "react";
import { Zone, SectionHeaderCompact } from "@/components/ui/Zone";
import { experience, education } from "@/data/site";
import { useLocale } from "@/i18n/LocaleContext";

/**
 * Chronological spine rather than another band of `.rows`.
 *
 * Denser than Work by design: this is reference material a reader scans to
 * verify history, not the section meant to persuade them. Period sits in the
 * left column as a fixed-width mono gutter so the dates form a readable
 * vertical column of their own.
 */

/** One line renders as a paragraph, several as a short bulleted list, none as nothing. */
function EntryBody({ body }) {
  const lines = [].concat(body || []);
  if (lines.length === 0) return null;
  if (lines.length === 1) {
    return (
      <p className="t-muted mt-2.5 text-sm" style={{ maxWidth: "52ch" }}>
        {lines[0]}
      </p>
    );
  }
  return (
    <ul className="t-muted mt-2.5 list-disc space-y-1 pl-4 text-sm" style={{ maxWidth: "52ch" }}>
      {lines.map((line) => (
        <li key={line}>{line}</li>
      ))}
    </ul>
  );
}

function Timeline({ label, entries, startIndex }) {
  const { t } = useLocale();

  return (
    <div>
      <h3 className="mono t-muted reveal">{label}</h3>

      <div className="timeline mt-5">
        {entries.map((entry, index) => (
          <div key={entry.org} className="timeline-entry reveal" style={{ "--i": startIndex + index }}>
            <div className="grid gap-x-6 gap-y-1 sm:grid-cols-[7.5rem_minmax(0,1fr)]">
              <span className="mono t-muted pt-1">{t.experience.periods?.[entry.period] ?? entry.period}</span>

              <div>
                <h4 className="t-title timeline-org">
                  <a
                    href={entry.href}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="link"
                  >
                    {entry.org}
                  </a>
                </h4>
                <p className="mono t-muted mt-1.5">
                  {t.experience.roles[entry.role] ?? entry.role}
                </p>
                <EntryBody body={t.experience.bodies[entry.org] ?? entry.body} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

const Experience = () => {
  const { t } = useLocale();

  return (
    <Zone tone="gray" scene id="experience" labelledBy="experience-title">
      <SectionHeaderCompact
        id="experience-title"
        eyebrow={t.experience.eyebrow}
        title={t.experience.title}
      />

      <div
        className="shell grid gap-x-16 gap-y-10 lg:grid-cols-2"
        style={{ marginTop: "clamp(1.5rem, 5svh, 3.5rem)" }}
      >
        <div>
          <Timeline
            label={t.experience.experienceLabel}
            entries={experience}
            startIndex={0}
          />
        </div>
        <div>
          <Timeline
            label={t.experience.educationLabel}
            entries={education}
            startIndex={3}
          />
        </div>
      </div>
    </Zone>
  );
};

export default Experience;
