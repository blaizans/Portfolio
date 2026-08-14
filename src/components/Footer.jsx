import React from "react";
import { profile } from "@/data/site";
import { useLocale } from "@/i18n/LocaleContext";

const Footer = () => {
  const { t } = useLocale();
  const year = new Date().getFullYear();

  return (
    <footer className="ui-dark" style={{ backgroundColor: "var(--t-bg)", color: "var(--t-text)" }}>
      {/* Deliberately quiet: the page's ending is the contact CTA above, so
          the footer is a colophon rather than a third closing statement. */}
      <div className="shell flex flex-wrap items-baseline justify-between gap-x-8 gap-y-2 py-7">
        <p className="mono t-muted">
          © {year} {profile.name} — {t.footer.built}
        </p>

        <a href="#top" className="link mono t-muted">
          {t.footer.backToTop} ↑
        </a>
      </div>
    </footer>
  );
};

export default Footer;
