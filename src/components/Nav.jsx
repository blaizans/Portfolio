import React, { useCallback, useEffect, useRef, useState } from "react";
import { navLinks, profile } from "@/data/site";
import { useLocale } from "@/i18n/LocaleContext";
import LanguageSwitcher from "@/components/LanguageSwitcher";

/**
 * Fixed header. Adopts the tone of the zone currently behind it so the
 * logo/links stay readable across light and dark bands.
 */
const Nav = () => {
  const { t } = useLocale();
  const [isOpen, setIsOpen] = useState(false);
  const [tone, setTone] = useState("dark");
  const [isScrolled, setIsScrolled] = useState(false);
  const panelRef = useRef(null);
  const toggleRef = useRef(null);

  const close = useCallback(() => setIsOpen(false), []);

  // Track which zone sits under the header, and whether we've left the top —
  // via IntersectionObserver rather than a scroll listener, so this never
  // forces a layout read on every scroll event. Two observers: one collapses
  // the viewport to a 1px strip at the header's probe line and reports
  // whichever zone currently crosses it; the other watches a sentinel
  // pinned to the very top of the page for the isScrolled state.
  //
  // The probe strip's rootMargin depends on window.innerHeight, so the
  // observer is torn down and rebuilt on resize/orientation change —
  // IntersectionObserver has no way to update rootMargin in place.
  useEffect(() => {
    const zones = Array.from(document.querySelectorAll(".zone"));
    if (zones.length === 0) return undefined;

    const probe = 24; // matches the header's original probe offset
    const toneOf = (zone) => {
      if (zone.classList.contains("ui-light")) return "light";
      if (zone.classList.contains("ui-gray")) return "gray";
      return "dark";
    };

    let zoneObserver;
    // Zones intersecting the probe line, keyed by index so the topmost
    // (lowest index, i.e. current in document order) always wins ties.
    let intersecting = new Set();

    const buildZoneObserver = () => {
      intersecting = new Set();
      zoneObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            const index = zones.indexOf(entry.target);
            if (entry.isIntersecting) intersecting.add(index);
            else intersecting.delete(index);
          });
          if (intersecting.size === 0) return;
          // Zones are contiguous and non-overlapping, so at most one should
          // ever match in practice; Math.max mirrors the original loop's
          // last-match-wins semantics for the boundary case.
          const winningIndex = Math.max(...intersecting);
          setTone(toneOf(zones[winningIndex]));
        },
        {
          rootMargin: `-${probe}px 0px -${window.innerHeight - probe - 1}px 0px`,
          threshold: 0,
        },
      );
      zones.forEach((zone) => zoneObserver.observe(zone));
    };

    buildZoneObserver();

    const handleResize = () => {
      zoneObserver.disconnect();
      buildZoneObserver();
    };
    window.addEventListener("resize", handleResize);

    const sentinel = document.createElement("div");
    sentinel.style.cssText = "position:absolute;top:24px;left:0;width:1px;height:1px;";
    sentinel.setAttribute("aria-hidden", "true");
    document.body.prepend(sentinel);

    const sentinelObserver = new IntersectionObserver(
      ([entry]) => setIsScrolled(!entry.isIntersecting),
      { threshold: 0 },
    );
    sentinelObserver.observe(sentinel);

    return () => {
      window.removeEventListener("resize", handleResize);
      zoneObserver.disconnect();
      sentinelObserver.disconnect();
      sentinel.remove();
    };
  }, []);

  // Lock body scroll, trap focus, and close on Escape while the drawer is open.
  useEffect(() => {
    if (!isOpen) return undefined;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        close();
        toggleRef.current?.focus();
        return;
      }
      if (event.key !== "Tab") return;

      const focusables = panelRef.current?.querySelectorAll(
        'a[href], button:not([disabled])',
      );
      if (!focusables || focusables.length === 0) return;

      const first = focusables[0];
      const last = focusables[focusables.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    panelRef.current?.querySelector("a[href]")?.focus();

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [isOpen, close]);

  const isDark = tone === "dark";

  return (
    <>
      <a className="skip-link" href="#main">
        {t.nav.skip}
      </a>

      <header
        className={`fixed inset-x-0 top-0 z-50 ui-${tone}`}
        style={{
          height: "var(--nav-h)",
          backgroundColor: isScrolled ? "var(--t-bg)" : "transparent",
          borderBottom: `1px solid ${isScrolled ? "var(--t-line)" : "transparent"}`,
          color: "var(--t-text)",
          transition:
            "background-color var(--dur-mid) var(--ease), border-color var(--dur-mid) var(--ease), color var(--dur-mid) var(--ease)",
        }}
      >
        <div className="shell flex h-full items-center justify-between gap-6">
          <a
            href="#top"
            className="link font-bold tracking-tight"
            style={{ fontFamily: "var(--display-font)", fontSize: "1.05rem" }}
          >
            {profile.name}
          </a>

          <div className="hidden items-center gap-8 md:flex">
          <nav aria-label={t.nav.main}>
            <ul className="flex items-center gap-8">
              {navLinks.map((item) => (
                <li key={item.href}>
                  <a href={item.href} className="link mono">
                    {t.nav[item.key]}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <LanguageSwitcher />
          </div>

          <button
            ref={toggleRef}
            type="button"
            onClick={() => setIsOpen((open) => !open)}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
            aria-label={isOpen ? t.nav.close : t.nav.menu}
            className="mono md:hidden -mr-3 flex items-center justify-center"
            style={{
              color: "inherit",
              background: "none",
              padding: "0.5rem 0.75rem",
              minHeight: "44px",
              minWidth: "44px",
            }}
          >
            {isOpen ? t.nav.close : t.nav.menu}
          </button>
        </div>
      </header>

      {/* Mobile drawer */}
      <div
        id="mobile-menu"
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-label={t.nav.siteMenu}
        aria-hidden={!isOpen}
        {...(isOpen ? {} : { inert: "" })}
        className={`ui-dark fixed inset-0 z-40 md:hidden ${isOpen ? "" : "pointer-events-none"}`}
        style={{
          backgroundColor: "var(--t-bg)",
          color: "var(--t-text)",
          opacity: isOpen ? 1 : 0,
          transform: isOpen ? "none" : "translate3d(0, -1.5rem, 0)",
          visibility: isOpen ? "visible" : "hidden",
          transition:
            "opacity var(--dur-mid) var(--ease), transform var(--dur-mid) var(--ease), visibility var(--dur-mid)",
        }}
      >
        <div
          className="shell flex h-full flex-col justify-center"
          style={{ paddingTop: "var(--nav-h)" }}
        >
          <nav aria-label={t.nav.mobile}>
            <ul className="rows">
              {navLinks.map((item, index) => (
                <li key={item.href} className="row-item">
                  <a
                    href={item.href}
                    onClick={close}
                    className="row-num flex items-baseline gap-5 py-5"
                    style={{ textDecoration: "none", color: "inherit" }}
                  >
                    <span className="t-title">{t.nav[item.key]}</span>
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <LanguageSwitcher className="mt-10" />

          <ul className="mt-8 flex flex-wrap gap-x-8 gap-y-3">
            {profile.socials.map((social) => (
              <li key={social.label}>
                <a
                  href={social.href}
                  className="link mono t-muted"
                  target={social.href.startsWith("http") ? "_blank" : undefined}
                  rel={social.href.startsWith("http") ? "noreferrer noopener" : undefined}
                >
                  {social.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Nav;
