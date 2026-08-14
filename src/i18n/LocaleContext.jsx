import React, { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";
import { LOCALES, translations } from "@/data/locales";

const STORAGE_KEY = "bl-locale";
const DEFAULT_LOCALE = "en";

const LocaleContext = createContext({
  locale: DEFAULT_LOCALE,
  setLocale: () => {},
  t: translations[DEFAULT_LOCALE],
});

function isSupported(value) {
  return LOCALES.includes(value);
}

export function LocaleProvider({ children }) {
  // Always start from the default so server and first client render match;
  // the stored/browser preference is applied after mount.
  const [locale, setLocaleState] = useState(DEFAULT_LOCALE);

  useEffect(() => {
    let next = null;
    try {
      const stored = window.localStorage.getItem(STORAGE_KEY);
      if (isSupported(stored)) next = stored;
    } catch {
      // localStorage can throw in private mode; fall through to navigator.
    }

    if (!next) {
      const preferred = (navigator.languages || [navigator.language || ""])
        .map((tag) => String(tag).slice(0, 2).toLowerCase())
        .find(isSupported);
      if (preferred) next = preferred;
    }

    if (next && next !== DEFAULT_LOCALE) setLocaleState(next);
  }, []);

  // Keep <html lang> honest for screen readers and search engines.
  useEffect(() => {
    document.documentElement.lang = translations[locale].htmlLang;
  }, [locale]);

  const setLocale = useCallback((next) => {
    if (!isSupported(next)) return;
    setLocaleState(next);
    try {
      window.localStorage.setItem(STORAGE_KEY, next);
    } catch {
      // Persisting is best-effort only.
    }
  }, []);

  const value = useMemo(
    () => ({ locale, setLocale, t: translations[locale] }),
    [locale, setLocale],
  );

  return <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>;
}

export function useLocale() {
  return useContext(LocaleContext);
}
