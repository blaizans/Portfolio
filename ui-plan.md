# Portfolio — UI/UX Plan

Design direction for the full refactor of `blaizans` portfolio.
Benchmark: [konstantinsorokin.com](https://konstantinsorokin.com) — Swiss/editorial engineering portfolio.

---

## 1. Evaluation

### Existing design (what we're replacing)
| Aspect | Current state | Verdict |
|---|---|---|
| Palette | `#344e64` slate blue bg, cyan `#22d3ee` + `indigo-300` accents everywhere | Two competing accents, no hierarchy. Cyan glow `drop-shadow` on nearly every element. |
| Type | Raleway for everything, `text-4xl→6xl` h1 | Single family, no display/body pairing, no fluid scale. |
| Depth | `shadow-xl shadow-indigo-300` on every card | Uniform shadow = zero hierarchy. Textbook vibecoded default. |
| Motion | `animate-bounce` on the h1, `hover:scale-105` on all cards | Bouncing headline undercuts credibility; scale-105 is the generic hover. |
| Layout | Centered text, `max-w-[70%] m-auto`, uniform 2-col card grids | No grid tension, no editorial rhythm. |
| Content | Copy says "6th semester/3rd year student", studies end 2025 | **Stale** — he's now a Test Engineer at Systematic. |
| Code | Content hardcoded in JSX, 6 near-identical project blocks | Unmaintainable; needs a data layer. |

### App purpose & emotion
A hiring surface for a **software engineer**, not a designer. It must evoke **precision, rigor, and craft** — the feeling of reading good technical documentation, not a marketing splash. Trust over flash. The site itself is the work sample: if it's fast, accessible, and precisely built, that's the argument.

### Brand words
"Bruno Laizans — Software Engineer." Latvian, based in Denmark, QA/test engineering at Systematic. Words that follow: *systematic, measured, structural, exact*. This points to Swiss/International typography — grids, mono labels, numbered rows — not to glassmorphism or neon.

### Target customer
Danish/EU hiring managers and tech leads, 28–50, highly technical, skimming on desktop between meetings; recruiters on mobile. They scan for: stack, shipped work, years, current role. They are **allergic to fluff**. Decision made in ~20 seconds above the fold.

### Competitive space
Most junior/mid dev portfolios are the same dark-blue Tailwind template with glowing cards — the current site is one of them. The differentiator is **editorial restraint**: alternating light/dark zones, one accent, real typographic hierarchy, and motion that reveals rather than decorates.

---

## 2. Design System

### Color — one accent, used sparingly
Borrowed structurally from the benchmark (near-black, off-white, single electric blue), not copied wholesale.

```
--c-black : #131313   ink / dark zone bg
--c-white : #f0f0f0   paper / light zone bg
--c-gray  : #e4e4e4   gray zone bg (third rhythm step)
--accent  : #1b32ff   electric blue — links, focus, counters, hover fills
--accent-light: #828eff  accent on dark bg (contrast-safe)
```

**Zone system** — the core structural idea. Sections alternate `ui-dark` / `ui-light` / `ui-gray`. Each zone redefines the same semantic tokens (`--t-bg`, `--t-text`, `--t-muted`, `--t-line`), so every component is written **once** and inherits its theme from the zone it sits in. This is what produces the editorial band rhythm and eliminates per-component color decisions.

Contrast: `#131313` on `#f0f0f0` = 15.8:1. `#f0f0f0` on `#131313` = 15.8:1. Accent `#1b32ff` on white = 8.1:1. On dark we switch to `#828eff` (7.4:1) — never the raw blue, which fails on near-black.

### Type — poster + grotesque + mono
```
--poster-font  : Anton              hero lockup only, at poster scale
--display-font : Instrument Sans 600  section headings
--body-font    : Instrument Sans      body, UI
--mono-font    : IBM Plex Mono        labels, counters, metadata
```
**Inter is deliberately avoided** — it is the default of virtually every AI-generated site and reads as generic on sight. Instrument Sans is a Swiss grotesque with a distinctly drawn `a`, `g` and `R`, giving the body copy character without shouting. Anton appears only in the hero lockup, where its heavy condensed forms carry the whole composition. IBM Plex Mono for eyebrow labels and `01/02/03` counters is the engineering signature.

Fluid scale, no arbitrary breakpoint jumps:
```
--fs-hero    : clamp(2.6rem, 1.5rem + 5.1vw, 8rem)
--fs-display : clamp(2rem, 1.2rem + 3.2vw, 4.5rem)
--fs-title   : clamp(1.3rem, 1rem + 1.2vw, 2rem)
--fs-body    : clamp(1rem, 0.96rem + 0.25vw, 1.125rem)
--fs-mono    : 0.8125rem
```

### Spacing — one scale, fluid section rhythm
```
--zone-y  : max(60px, min(9vw, 160px))   section padding (benchmark value)
--gutter  : max(20px, min(4vw, 80px))    page inset
```
Everything else on a 4px base: `4 8 12 16 24 32 48 64 96`. No mixed px/rem improvisation.

### Motion
```
--ease     : cubic-bezier(.25, .74, .22, .99)   authoritative deceleration
--dur-fast : 180ms   --dur-mid : 420ms   --dur-slow : 900ms
```
Rules:
- Animate **only** `transform`, `opacity`, `clip-path`. Never layout properties.
- Reveal-on-scroll via a single shared `IntersectionObserver` (`useReveal`), staggered by `--i` custom property — not one observer per element.
- Every motion path is wrapped in `prefers-reduced-motion: reduce` → content appears instantly, fully visible. Nothing is reduced-motion-gated into invisibility.
- **No** bouncing headline, **no** `hover:scale-105`.

### Component conventions
- **Hover**: link underlines wipe in via `transform: scaleX()` from the left; rows fill with accent and invert their text. Designed states, not raw color jumps.
- **Focus**: visible `2px` accent outline with `2px` offset on every interactive element. Never removed.
- **Numbered rows** (`counter-increment`, `decimal-leading-zero`) for capabilities and work — replaces the uniform card grid entirely.
- **Cards** only where a card is genuinely the right container (experience/education), and then flat with a hairline border, not a glow shadow.

---

## 3. Page Structure

| # | Zone | Section | Purpose |
|---|---|---|---|
| 1 | dark | **Hero** — full-bleed name lockup over an interactive grid-mesh canvas, value pitch, "Hire me" CTA, proof strip | 20-second decision surface, optimised for contact |
| 2 | light | **Capabilities** — numbered rows: Backend, Frontend, Testing & QA, Cloud & DevOps | What he actually does |
| 3 | dark | **About** — short bio + stat counters (years, projects, technologies) | Credibility, quantified |
| 4 | light | **Selected Work** — two tiers: shipped products (Sport Teamline, Riga Cup) with imagery, then compact repo list linked to GitHub | The evidence |
| 5 | gray | **Experience & Education** — two-column timeline | Verifiable history |
| 6 | dark | **Toolset** — grouped by domain as type lists, not logo cards | Stack, scannable |
| 7 | light | **Contact** — direct CTA, email, LinkedIn, GitHub, CV | Conversion |
| — | dark | **Footer** — copyright, back-to-top | Close |

Section order follows the reader's actual question sequence: *who → what → proof → history → stack → how to reach*.

---

## 4. Accessibility Baseline
- Body text ≥ 4.5:1, large/UI ≥ 3:1 — all pairs verified above.
- Semantic landmarks: `header/nav/main/section[aria-labelledby]/footer`. Every section heading is a real `h2` with an `id`.
- Skip-to-content link as first focusable element.
- Visible focus ring on all interactive elements; mobile drawer traps focus, closes on `Escape`, and sets `aria-expanded`/`aria-hidden`.
- Meaningful `alt` on content images; `alt=""` on decorative. (Current code uses `alt="/"` everywhere — a screen-reader bug being fixed.)
- Full keyboard operability; `prefers-reduced-motion` fully honored.
- Mobile-first: verified at 375px before 1440px.

---

## 5. Performance Targets
LCP < 2.5s · CLS < 0.1 · JS < 150kb gz.
Self-hosted variable fonts with `font-display: swap` + preload of the single critical weight. Zero animation libraries — the motion layer is a hand-written IntersectionObserver plus a ~3kb canvas grid-mesh, both `prefers-reduced-motion` aware and paused when off-screen or backgrounded. Drops the `flowbite` dependency (unused) and the `react-icons` barrel import in favor of inline SVG.


---

## 6. Internationalisation

Three locales: **English (default), Danish, Russian** — matching where Bruno works (DK), where he's from (LV/RU), and the international hiring market.

- All prose lives in `src/data/locales.js`, keyed by locale; structural data (URLs, dates, technology names, org names) stays untranslated in `site.js`.
- Locale is held in React context, persisted to `localStorage`, and falls back to `navigator.languages` on first visit. It always renders `en` on the server so hydration matches, then applies the preference on mount.
- `<html lang>` is updated per locale so screen readers use the right pronunciation.
- The switcher is a `radiogroup` with `aria-checked`, not styled links, so selected state is announced correctly.

## 7. Composition system (2026 revision)

The first build solved "don't look like a template" but replaced the card grid
with a single ruled-row pattern applied to every section. Seven `.rows` blocks,
five byte-identical section headers and one constant `--zone-y` made the page
uniform: consistent, but with no contrast and no second focal point after the
hero. This revision keeps the entire design system and changes **composition,
density and hierarchy** only.

### Spacing carries hierarchy
Three levels, assigned by importance rather than applied uniformly:

```
--zone-y-compact   : max(44px, min(6vw, 104px))   Capabilities, Experience, Toolset
--zone-y           : max(60px, min(9vw, 160px))   About  (unchanged default)
--zone-y-expansive : max(80px, min(12vw, 216px))  Work, Contact
```
Set via `<Zone density="compact|standard|expansive">`. The payoff sections
breathe; the reference sections compress.

### Section structure — consistency + contrast
| Section | Structure | Opening | Density |
|---|---|---|---|
| Hero | poster lockup + canvas | masthead | full-bleed |
| Capabilities | `.rows` (kept — suits enumerable items) | standard | compact |
| About | two-column + stat ledger | standard | standard |
| **Work** | **`.specimen` — poster title, full-width colour plate, spec rail** | **bespoke, poster face** | **expansive** |
| Experience | `.timeline` — spine, nodes, mono date gutter | compact inline | compact |
| Toolset | `.inventory` — two-column parts list | compact inline | compact |
| Contact | single action | bespoke, rule + response time | expansive |

`.rows` survives in exactly two places (Capabilities, Work's secondary repo
tier) where a ruled list is genuinely the right container — down from seven.

### Hero language carried into the body
Three elements only, so it reads as continuity rather than repetition:
- `.registration` — the hero's 16.66/50/83.33 column hairlines, on Work,
  About and Contact.
- Index numbers — `01/02` on specimens, in the hero's mono/accent rail idiom.
- Poster face — Anton once more, on the Work heading only.

### Work as the second peak
Shipped products are specimens, not list items: full-width plate **in colour**
(the grayscale-until-hover treatment hid the only real evidence on the page),
a poster-scale title stepping off the plate edge, and a spec rail.
**The rail renders only facts present in `site.js`** — role, year, live status.
No metric is computed or invented. When real numbers exist (traffic, users,
uptime), they drop into `t.work.rail` without any layout change.

### Closing sequence
The availability flag and hiring note were stated in the hero ledger *and*
again in Contact. Removed from Contact. The section now builds to one object —
the email at `clamp(1.75rem, 0.4rem + 5.6vw, 5.25rem)`, the largest type on the
page after the masthead — and the footer drops to a single colophon line.

### Cyrillic poster fallback
Anton ships Latin glyphs only. Translated poster text (`.poster-face`) falls
back to Instrument Sans 600 under `html:lang(ru)`, so the Russian heading still
reads as a poster line instead of a thin, wide system fallback. The name lockup
is unaffected — "Bruno Laizans" is Latin in every locale.

---

## 8. Hero Iterations (rejected directions)

Recorded so the reasoning isn't relitigated:

1. **Centred type + gradient blob** — rejected: textbook AI-generated layout.
2. **Split-screen with portrait** — rejected: photo dominated, type stranded, felt like a consultancy page.
3. **Organic flow-field particles** — rejected: the curved streaks read as sperm-like rather than engineered.
4. **Grid-mesh canvas (current)** — a strict lattice that flexes toward the cursor. Geometric, precise, on-brand for an engineer, and never organic.
