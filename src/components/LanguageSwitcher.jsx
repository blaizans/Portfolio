import React from "react";
import { LOCALES, LOCALE_NAMES } from "@/data/locales";
import { useLocale } from "@/i18n/LocaleContext";

/**
 * Three-way locale toggle. Rendered as a radio group so keyboard and screen
 * reader users get proper selected-state semantics, not just styled links.
 */
const LanguageSwitcher = ({ className = "" }) => {
  const { locale, setLocale, t } = useLocale();

  return (
    <div
      role="radiogroup"
      aria-label={t.nav.language}
      className={`flex items-center gap-1 ${className}`}
    >
      {LOCALES.map((code) => {
        const isActive = code === locale;
        return (
          <button
            key={code}
            type="button"
            role="radio"
            aria-checked={isActive}
            aria-label={LOCALE_NAMES[code]}
            onClick={() => setLocale(code)}
            className="mono locale-btn flex items-center justify-center px-2"
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              color: isActive ? "var(--t-text)" : "var(--t-muted)",
              textDecoration: isActive ? "underline" : "none",
              textUnderlineOffset: "0.35em",
              transition: "color var(--dur-fast) var(--ease)",
            }}
          >
            {code.toUpperCase()}
          </button>
        );
      })}
    </div>
  );
};

export default LanguageSwitcher;
