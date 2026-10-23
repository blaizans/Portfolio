import React, { createContext, useCallback, useContext, useEffect, useMemo } from "react";
import { useRouter } from "next/router";
import { LOCALES, translations } from "@/data/locales";

const DEFAULT_LOCALE = "en";
// Same cookie Next.js and src/proxy.js use, so an explicit choice sticks
// and the first-visit redirect never overrides it.
const LOCALE_COOKIE = "NEXT_LOCALE";
const COOKIE_MAX_AGE_SECONDS = 60 * 60 * 24 * 365;

const LocaleContext = createContext({
  locale: DEFAULT_LOCALE,
  setLocale: () => {},
  t: translations[DEFAULT_LOCALE],
});

function isSupported(value) {
  return LOCALES.includes(value);
}

/**
 * The locale is the URL (/, /da, /ru), so the server renders the right
 * language and crawlers see a separate document per language.
 */
export function LocaleProvider({ children }) {
  const router = useRouter();
  const locale = isSupported(router.locale) ? router.locale : DEFAULT_LOCALE;

  // Server sets <html lang> on first load; keep it right across client-side switches.
  useEffect(() => {
    document.documentElement.lang = translations[locale].htmlLang;
  }, [locale]);

  const setLocale = useCallback(
    (next) => {
      if (!isSupported(next) || next === locale) return;
      document.cookie = `${LOCALE_COOKIE}=${next}; path=/; max-age=${COOKIE_MAX_AGE_SECONDS}; samesite=lax`;
      router.push(router.asPath, router.asPath, { locale: next, scroll: false, shallow: true });
    },
    [locale, router],
  );

  const value = useMemo(
    () => ({ locale, setLocale, t: translations[locale] }),
    [locale, setLocale],
  );

  return <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>;
}

export function useLocale() {
  return useContext(LocaleContext);
}
