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
| 1 | dark | **Hero** — name lockup over an interactive ring canvas, one-sentence statement, availability, "Hire me" CTA, "What you get" outcomes, proof strip | 20-second decision surface: who, what you get, how to reach me (section 10) |
| 2 | light | **Capabilities** — numbered rows: Backend, Frontend, Testing & QA, Cloud & DevOps | What he actually does |
| 3 | dark | **About** — short bio + stat counters (years, projects, technologies) | Credibility, quantified |
| 4 | light | **Selected Work** — two tiers: shipped products (Teamwear Webshop, Riga Cup, PNTA) with imagery, then compact repo list linked to GitHub. Teamwear Webshop also carries an offer block (section 9) | The evidence, and one product for sale |
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
Self-hosted variable fonts with `font-display: swap` + preload of the single critical weight. Zero animation libraries — the motion layer is a hand-written IntersectionObserver plus a ~3kb sky canvas, both `prefers-reduced-motion` aware and paused when off-screen or backgrounded. Drops the `flowbite` dependency (unused) and the `react-icons` barrel import in favor of inline SVG.


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
4. **Grid-mesh canvas** — a strict lattice that flexes toward the cursor. Replaced in section 10: straight lines read as a generic "tech" backdrop, and with the three column hairlines on top the hero was all rules and no message.
5. **Ring field** — see section 10. Extended into a sunrise sky in section 11 (current).

---

## 9. Teamwear Webshop: one specimen that is also an offer

The webshop built for a football teamwear business is now presented as a
ready-made storefront for new businesses ("ready, only the UI changes").
This is the one place on the page that sells something, so it gets one extra
element and nothing else changes around it.

**Decision: extend the specimen, do not add a section.** A separate "Services"
band would make the site read as a freelance agency, which `PRODUCT.md` rules
out. The offer lives inside the Teamwear Webshop specimen so the reader meets it as
evidence first and as an offer second.

### Anatomy
```
01  LAUNCHCART                       poster title (unchanged specimen pattern)
[ plate: reference build, cropped to the storefront, no brand chrome ]
reference build: football teamwear shop           mono caption under the plate
description + stack tags        |  spec rail: role / year / status
-----------------------------------------------------------------------
WHAT IS INCLUDED                                  mono label on a hairline
For shoppers            |  For the owner          two ruled lists, uneven rhythm
term  .  one line       |  term  .  one line
-----------------------------------------------------------------------
What changes for a new business: the UI.     [ ASK ABOUT LAUNCHCART -> ]
```

### Rules
- **Reuse, don't invent.** Ruled rows (`.spec-rail` idiom), mono labels, the
  existing `.btn`. No new colour, no card, no badge. One accent, as before.
- **One action.** The enquiry `.btn` is the only filled control in the block;
  there is no price, rate card or package table (not invented, per `PRODUCT.md`).
- **Honest plate.** The image is the real reference build with the previous
  brand cropped off, and a caption says so. The reference build is live at
  `teamsport-dk.vercel.app`, so the plate and a "Live site" link both go there
  and the plate carries the standard hover.
- **Status reads "Live"** (the default), matching the live link beside it.
- **Motion:** nothing new. The block joins the existing `.reveal` stagger; the
  button gains the missing `:active` press (`scale(0.97)`, 160ms) that all
  `.btn`s should have had.
- **Voice:** plain and declarative, as everywhere. Each row is a term and one
  sentence, with no superlatives. Three locales (en, da, ru) in `locales.js`.
- **Naming:** "Teamwear Webshop" is a plain two-word description rather than a
  brand (renamed from the working title "Launchcart"). It is held in a single
  data field (`site.js`) plus three locale keys, so it can be swapped in one pass.

### Responsive
Single column below `lg` (shoppers, then owner, then CTA row stacking with the
button full-width); two columns from `lg`, where each column has room for its rows.
Verified at 375px before 1440px.

### Plate on phones
The reference capture is 1831x723 (ratio 2.53). Full-width at 375px that is a
plate ~130px tall with an unreadable headline. Desktop keeps the real ratio
(nothing cropped); below `sm` the plate becomes a 4:3 centred crop
(`.plate-sized`), which keeps the headline and the central products in frame.

---

## 10. Hero: say what you get, drop the straight-line grid

### UX test of the previous hero (1440x900 and 375x812)
| Finding | Evidence |
|---|---|
| The hero never says what is on offer | Name plus "Full-stack engineer and test specialist. I ship web platforms..." No noun a visitor can buy or hire: no website, web shop, web app, testing. |
| The proof and availability ledger sat below the fold on desktop | The name lockup was sized at 27vh (about 470px tall) and pushed the ledger off a 900px screen. |
| Straight-line grid | Canvas lattice plus three vertical hairlines. Reads as a generic backdrop and competes with the type. |
| Mobile ledger stacked five lines deep | Availability, the one line a recruiter wants, was last. |

### Changes
- **Background:** concentric rings on a canvas. Curved, never straight, never organic. Even rings are solid, odd rings are dotted and rotate in opposite directions. Each ring's centre drifts with the cursor in proportion to its index, so the set tilts like a tunnel. A ring lights up where the cursor passes near its edge. With no pointer, the rings drift slowly on their own. Static under `prefers-reduced-motion`. The three vertical hairlines and the index rail are removed from the hero (`.registration` stays on Work, About and Contact).
- **Lockup:** sized from the left column (`.poster-lockup`, 20vh cap) so it is still the dominant element but no longer eats the screen.
- **Statement:** one plain sentence in the display face, directly under the name: what I build, and that I test it. Replaces the abstract pitch.
- **Availability** (dot plus one line) sits between the statement and the CTA, so it is above the fold on both desktop and phone.
- **What you get:** right column on desktop, below the CTA on phones. Three steps of one lifecycle, each a title and one sentence that names its evidence: **built end to end** (Riga Cup, the Teamwear Webshop), **tested before it ships** (Systematic, end-to-end tests on Chrome, Android and iPhone), **supported after launch** (maintained Riga Cup, the webshop's nightly image checks and alerts). The order is the argument: quality and responsibility are shown as a sequence he owns, not a list of skills. A drawn check mark, not a number, so it does not repeat the 01-04 numbering in Capabilities and echoes the testing identity. Ruled rows, no card, no new colour.
- **Quality without superlatives:** the copy never says "highest standard" or "best practice". No certification is on record, so the claim is carried by what was done and where (two years at Systematic, named browsers and devices, named live sites), which a reader can check.
- **Ledger:** experience, focus, response time. "Status: Available now" removed because availability is now stated above.

### Rules
- Outcomes are stated as what the reader receives, not as a price list. No rates, packages or terms (still true per `PRODUCT.md`).
- Every sentence in the offer comes from facts already in the data layer. No new metrics.
- Hero offer and Capabilities must not repeat each other: the hero speaks in deliverables, Capabilities in skills and tools.
- Strings live in `hero.statement` and `hero.offer` in all three locales.

---

## 11. Hero: cosmic, with hope ("first light")

**Brief:** make the hero feel cosmic, with a feeling of hope.

**Idea:** a night sky just before sunrise. Cosmic is stars and orbits. Hope is warmth arriving: a small sun rising from below the hero's bottom edge, with its light travelling outward along the orbits. It also suits the message: a visitor with a site that has to keep working should feel steadiness and light, not a cold dark void.

### Rules
- **Warmth is rare.** One new token, `--hope: #ffc27a`, plus `--sky-top: #0b0d1f` for the deep top of the sky. Gold appears only on the sun, the inner orbits (fading to the existing periwinkle by the ninth ring) and the availability dot. Everything else keeps the single periwinkle accent. No gold on text or buttons.
- **No blob.** There is no big gradient wash. The glow is a small radial light tied to a real object (the sun) that the orbits are centred on, so the structure stays legible.
- **Stars:** a sparse random scatter, not a lattice. Three parallax layers drift against the cursor; they fade toward the horizon, where the sun's light takes over. They twinkle slowly (sine, per-star phase).
- **Orbits:** the existing rings, now centred on the sun. Three small satellites travel on three of them at different speeds and directions.
- **Rise:** on load the sun rises about 80px into place while the rings draw out. It happens once and does not repeat.
- **Placement:** desktop, sun at the lower right under the offer panel. Phones, the sun sits at the bottom of the first screen, not the bottom of the page, so it is visible without scrolling.
- **Legibility first:** the dark overlay is kept only at the top, for the nav. Text sits on the left over the darkest part of the sky. Body copy in the offer panel stays above 4.5:1 against the lit area.
- **Reduced motion:** a still sky. Stars fixed, sun in place, satellites parked. Nothing is hidden by the preference.
- **Canvas:** `CosmosField.jsx` replaces `RingField.jsx`. Dependency-free, pauses off-screen.

---

## 12. Hero: planet horizon (supersedes the orbits in section 11)

**Brief (from the user, with a reference image):** a dark cosmos with a large planet whose sunlit rim glows orange-red and fades into space. "Avoid geometry completely, step away from it."

This overrules two earlier rejections: the gradient-led atmosphere (section 8, direction 1) and the organic look (direction 3). Those were rejected as generic AI layouts; here the glow belongs to a real object (a planet lit by a rising sun) and the reference is explicit.

### Changes
- **Removed:** concentric orbits, dotted rings, satellites, the sun disc, and every straight rule in the hero (offer row dividers, ledger rule).
- **Planet:** a very large near-black body fills the lower part of the hero, and its body fills everything below the limb, so text there sits on dark. The limb peaks in the gap between the name and the offer panel on desktop. Its height is not a fixed fraction of the screen: the canvas measures the blocks marked `data-hero-avoid` (the CTA row, and the offer panel in the two-column layout) and lowers the horizon until the limb clears the bottom of each by 28px. It re-measures once fonts load and after the reveal settles. Text never crosses the rim at 1366x768, 1440x900, 375px or in Russian, which has the longest copy.
- **Light:** a thin white-hot rim, then gold, orange and red fading outward, with a faint violet far out. It is brightest at one point to the right of the limb's top and fades along the arc, as in the reference. A soft bloom sits at that point. The cursor moves the hot spot a few degrees and drifts the planet a few pixels.
- **Sunrise:** on load the planet rises about 90px and the light fades up over 2.6s, once.
- **Stars:** unchanged (random scatter, three parallax layers, slow twinkle), thinning toward the limb and hidden behind the planet.
- **Palette:** unchanged tokens. `--hope` remains the warm colour; the red-orange of the outer glow is drawn in the canvas only and appears nowhere else.
- **Still to decide:** the type and buttons are unchanged (poster lockup, square buttons). The reference uses light, centred type and pill buttons. Left alone because the lockup is the brand mark.
- **Reduced motion:** a still frame.

---

## 13. Hero: cinematic, centred, informative (supersedes the layout in sections 10 and 12)

**Feedback:** the planet hero "doesn't look impressive and breathtaking and responsibly informative".

### What was wrong
- At wide sizes the planet was a thin arc low on the screen and the top half was empty sky. No scale, no depth.
- The offer sat in a narrow column beside the name; the proof was a line of small mono text.
- The hero's content relied on an `IntersectionObserver` to become visible. A capture taken early showed the nav, buttons and offer list missing. It could not be reproduced at the same viewport, but a first screen that can sit empty is the opposite of informative.

### Changes
- **Composition:** centred, like the reference. Role line, name on one line (two stacked lines below 768px), one sentence, availability, one button and one plain link. The planet sits directly under the buttons; below its edge, on its dark surface, come the three outcomes in columns and a "Real work" row.
- **Why the offer sits on the planet:** nothing glows behind the text there, so it stays readable, and the glow stays free to be dramatic. The limb is placed from the bottom of the button row (`data-hero-avoid`), so it is as high as the copy allows and the planet fills the rest.
- **Scale:** the planet radius is 95% of the width on desktop, so it reads as a sphere. A lit crescent of atmosphere sits just inside the edge, and a soft streak of light crosses the bright point.
- **Sky:** a violet and a blue nebula and a faint Milky Way, painted once per resize; 280 stars, the brightest with a halo; the bright point drifts slowly on its own as well as following the cursor.
- **Proof:** a "Real work" row of three named, linked places a reader can check: Systematic, Riga Cup, the Teamwear Webshop. Typographic names, not logos: the Systematic logo file is no longer in `public/`, and the Riga Cup SVG has dark parts that disappear on a dark sky. Held in `heroProof` in `site.js`.
- **Copy:** each outcome shortened to at most three lines so all three fit above the planet's lower edge. The nightly checks, device list and Systematic years are unchanged facts.
- **Ledger removed:** experience, focus and response time repeat what the sections below say, and the availability line already states what a hiring manager needs.
- **Entrance:** CSS only (`.enter`, `.enter-mask` in `globals.css`). Content ends fully visible without JavaScript; reduced motion collapses the duration.
- **Known seam:** the dark planet meets the light Capabilities band with a hard edge. Worth softening next.

---

## 14. Page order

### Order (supersedes the table in section 3)
Reasoned from the reader's questions and `PRODUCT.md`: a hiring manager skims for role, stack, proof, then contact, and decides in about 20 seconds.

| # | Band | Tone | Answers |
|---|---|---|---|
| 1 | Hero | dark | Who is this, what do I get, is he available, how do I reach him |
| 2 | Work | light | Is there proof? Live products a reader can open |
| 3 | Experience | gray | Is the history verifiable? Systematic, Riga Cup, VIA |
| 4 | Capabilities | light | How deep is the testing and engineering? |
| 5 | Toolset | gray | Which stack, exactly? |
| 6 | About | dark | Who is the person? The football story, as the human close |
| 7 | Contact | light | The ask |

Changes from the previous order (Hero, Capabilities, About, Work, Experience, Toolset, Contact):
- **Work moves from 4th to 2nd.** Evidence over adjectives is a stated product principle; it was a screen and a half down.
- **Capabilities moves behind the proof.** The hero now states the three outcomes, so Capabilities led with a repeat. After the proof it reads as depth.
- **About moves from 3rd to 6th.** The football story is the strongest closer and the weakest opener: it builds trust right before "Let's build something solid", and it delayed the proof before.
- **Experience moves up to 3rd.** For Danish employers a named, checkable employer is proof of the same weight as a product.
- **Toolset becomes gray** so it no longer sits dark against dark About. The nav links follow the page order.
- **Still open:** Capabilities and the hero's three outcomes cover similar ground. If the page feels repetitive, merge Capabilities into the Toolset band.

---

## 15. Scenes: one composed screen per scroll, on every device

**Brief:** "make perfect view parts for each scroll, must be responsive on all devices."

### The scene system
- Every band is a **scene** (`data-scene`, `.scene` in `globals.css`): at least one screen tall (`100svh`), content centred, with its own padding under the fixed header. So wherever a scroll lands, the view is a heading plus the thing it introduces, with no neighbour peeking in.
- Spacing inside scenes is measured in screen **height** (`svh` clamps), so one scene recomposes on a short laptop, a tall phone and a tablet instead of overflowing.
- **Work** is a sequence of scenes: a heading scene with an index of the projects (the tour at a glance, each row a link), then one scene per project (title, photo, description, facts, links, and Riga Cup's awards photo beside the facts), a separate scene for the webshop's "what is included", and the repositories.
- **Contact and the footer share one screen** (`.scene-last`).
- The hero is a scene too. It was 849px on a 768px screen, so the first scroll moved the page 81px to a pointless second view. Its spacing is now height-based and it is exactly one screen at 1920x1080, 1440x900, 1366x768 and 1901x877.
- A scene whose content is taller than the screen (a phone, a short laptop) simply grows and scrolls natively.

### Measured fit (scene height / screen height, `audit` over all 13 scenes)
| Screen | Scenes taller than one screen |
|---|---|
| 1920x1080, 1440x900 | none |
| 1366x768 | Capabilities 1.16x, About 1.08x |
| 1280x720 | Teamwear offer 1.06x, Capabilities 1.25x, About 1.17x |
| 820x1180 tablet | Teamwear offer 1.48x, Riga Cup 1.11x, About 1.32x |
| 390x844 phone | most scenes, 1.2x to 2.2x |
No horizontal overflow at any size.

### Project views: text first, a modest photo
**Feedback:** "make the website easily viewable, less images across the screen, more information."

A full-width photo made each project a banner with a caption. Each project is now a two-column view (`Specimen` in `Work.jsx`):
- **Left, about 60% (7 of 12 columns): the information.** The description at a larger size, then "What it does" (the feature list), "Built with" (the stack), the links, and Riga Cup's awards photo kept small and quiet. On a phone this column comes first, so the reader meets the project before the picture.
- **Right, about 40% (5 of 12 columns): the photo and the facts.** The photo whole at its real ratio, 519px wide on a 1440px screen (it was 1325px), then the Role, Year and Status rail. PNTA shows its dashboard large with the web and mobile shots below, each whole.
- **What "more information" means here, and what it does not.** Nothing was invented. The Teamwear Webshop already carries a real feature list (the terms in its "what is included" block), which is now shown up front as a quick-scan list; the "what is included" scene stays below it for the detail. Riga Cup and PNTA have only a description, stack, links and facts, so they show exactly that, larger. Adding more would need real content from the owner (what Bruno built, decisions, outcomes), not a layout change.
- New labels in all three locales: `work.featuresLabel`, `work.builtWith`.
- Verified at 1800x720, 1440x900, 1024x768, 820x1180, 390x844 and 360x640, and in Danish and Russian: no horizontal overflow, no console errors.
- Photos are never cropped. The one deliberate crop left: the very wide webshop capture below 640px, where its headline would otherwise be unreadable.
- The Aarhus placeholder is a field of roughly a photo's footprint, openly labelled "In progress".

---

## 16. Scroll guidance: removed

**Decision:** "scroll behaviour is not consistent. If you cannot make it perfect, remove it." It is removed. Scrolling is the browser's own again.

**What was removed:** the wheel guide (`useGuidedScroll`, which paged the page one stop per gesture) and the touch snapping (`scroll-snap-type: proximity` for coarse pointers), with the `data-scene` and `data-view` markers that only they read.

**Why it cannot be perfect:** a script that takes over the wheel has to infer, from a stream of numbers, what each kind of mouse and trackpad is doing: where one gesture ends, whether a burst is a swipe or a coasting tail, whether a fast spin means one scene or five. The tests here were synthesised wheel events in Chromium, which cannot reproduce a real trackpad's rise, coast and noise, so "passes in tests" never meant "consistent on the reader's device". Two earlier attempts had already failed for the same reason: CSS scroll-snap bounced a one-notch wheel scroll back to the nearest edge, and a lockout after each move swallowed the next scroll so the reader had to scroll five times. Touch snapping, tested only in Chromium emulation, settled mid-scene as often as on a scene edge.

**What is kept** (none of it touches scrolling): the scene layouts (each band is at least one screen tall with its content centred and spacing measured in screen height), the Work index and one composed view per project, the whole project photos, Contact sharing its screen with the footer, the new page order, and the reveal observer fix so nothing in the bottom strip of a screen waits for another scroll. Anchor links and the nav still work and land with the section heading clear of the fixed header, because each scene pads itself for the header.

**If this is revisited:** do it only with real devices in hand (a Mac trackpad, a Windows precision touchpad, a notched mouse, an iPhone and an Android phone), and judge it by whether the reader ever has to think about scrolling.

---

## 17. Employer-facing pass (October 2026)

**Context:** the site is read by recruiters at companies such as Terma and Nitor. Availability is now 12-20 hours a week from February 2027, as a student job (studiejob).

- **Order of what I do:** frontend and full-stack first, testing last. The "specialism" flag is now "Main focus" on Frontend.
- **One place for Systematic:** the Experience entry. The hero proof row links to it (`#experience`) instead of repeating the claim.
- **Stats:** shown at their final values at all times. No count-up, so screenshots and no-JS views are correct.
- **Older projects:** one quiet line linking to GitHub instead of seven cards.
- **Footer:** the colophon is just the copyright line.
