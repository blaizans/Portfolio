import React from "react";
import { Zone, Eyebrow } from "@/components/ui/Zone";
import { profile } from "@/data/site";
import { useLocale } from "@/i18n/LocaleContext";

/**
 * One ending, one action.
 *
 * The availability flag and hiring note are already established in the hero
 * ledger, so they are not restated here — repeating them made the close read
 * as a second hero. What remains builds to a single object: the email address,
 * at the largest type on the page after the masthead itself.
 */
const Contact = () => {
  const { t } = useLocale();

  // Email is the headline action below; listing it again as a social link
  // would offer the same choice twice.
  const contactSocials = profile.socials.filter(
    (social) => !social.href.startsWith("mailto:"),
  );

  return (
    <Zone tone="light" density="expansive" id="contact" labelledBy="contact-title">
      <div className="shell registration">
        {/* Bespoke opening: the section label sits on the closing rule with the
            response time, so the header itself carries the one fact that
            matters at the decision point. */}
        <div
          className="reveal flex flex-wrap items-baseline justify-between gap-x-8 gap-y-2 border-t pt-5"
          style={{ borderColor: "var(--t-line-strong)" }}
        >
          <Eyebrow>{t.contact.eyebrow}</Eyebrow>
          <span className="mono t-muted">
            {t.hero.proof.response} — {t.hero.proof.responseValue}
          </span>
        </div>

        <h2 id="contact-title" className="t-hero mt-12 max-w-[13ch]">
          <span className="reveal-mask">
            <span>{t.contact.titleLine1}</span>
          </span>
          <span className="reveal-mask" style={{ "--i": 1 }}>
            <span>{t.contact.titleLine2}</span>
          </span>
        </h2>

        <p className="reveal measure t-muted mt-8 text-lg" style={{ "--i": 2 }}>
          {t.contact.lead}
        </p>

        {/* The single action. Largest non-hero type on the page. */}
        <div className="reveal mt-16" style={{ "--i": 3 }}>
          <a
            href={`mailto:${profile.email}`}
            className="link inline-block max-w-full"
            style={{
              fontFamily: "var(--display-font)",
              fontWeight: 600,
              // Scales down far enough to fit a long address at 320px,
              // rather than pushing the page into horizontal scroll.
              fontSize: "clamp(1.75rem, 0.4rem + 5.6vw, 5.25rem)",
              letterSpacing: "-0.04em",
              lineHeight: 1.05,
              wordBreak: "break-word",
            }}
          >
            {profile.email}
          </a>
        </div>

        {/* Everything after the action stays quiet. */}
        <ul className="hairline mt-20 flex flex-wrap gap-x-10 gap-y-3 pt-6">
          {contactSocials.map((social, index) => (
            <li key={social.label} className="reveal" style={{ "--i": index }}>
              <a
                href={social.href}
                className="link mono t-muted"
                target={social.href.startsWith("http") ? "_blank" : undefined}
                rel={social.href.startsWith("http") ? "noreferrer noopener" : undefined}
              >
                {social.label} ↗
              </a>
            </li>
          ))}
        </ul>
      </div>
    </Zone>
  );
};

export default Contact;
