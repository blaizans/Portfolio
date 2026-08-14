# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

**Primary: Danish hiring managers and tech leads at Danish companies.** Technical, senior, evaluating candidates between other work. They arrive from a LinkedIn profile, a job application, or a referral, usually on desktop, and decide within roughly twenty seconds whether to keep reading. They scan for role, stack, shipped work, and years of experience. They are allergic to fluff.

**Secondary: recruiters**, more often on mobile, doing a faster and shallower pass for the same signals.

**Secondary: freelance and contract enquirers**, reached mainly in English and Russian. They are a real audience but not the conversion target — the site notes availability for freelance rather than selling a freelance service. There is no rate card, service menu, or client-facing offer, and future work must not invent one.

Language priority follows the audience, not locale parity: Danish and English carry the hiring case; Russian exists for freelance reach.

## Product Purpose

A personal portfolio for Bruno Laizans that converts a technical reader into contact. The visitor's success is sending an email or a LinkedIn message.

The site is hiring-first. Bruno is employed as a Test Engineer at Systematic and is nonetheless in an **active** job search, plus taking freelance work — so the availability claim is literally true and load-bearing, not a formality. Copy may state availability plainly.

Success is a qualified enquiry from a Danish employer. Traffic, time on page, and scroll depth are not goals.

The site is itself a work sample. It is built by a software engineer, not a designer, so the argument is carried by precision, speed, accessibility, and correctness rather than by decoration. A slow, inaccessible, or sloppily built portfolio would refute its own claim.

## Positioning

A full-stack engineer whose day job is **test engineering at Systematic**, Denmark's largest privately owned IT company, on systems where correctness is not optional.

This is the claim a neighbouring junior/mid portfolio cannot truthfully copy. Most competing portfolios argue "I can build things." This one argues "I build things *and* I am paid to prove they keep working." The QA/test specialisation is the differentiator and must not be demoted to a bullet among equals.

Supporting truths: full-stack across Java, .NET and TypeScript; two products actually in production with real users; Latvian, working in Denmark, trilingual.

## Operating Context

- Read overwhelmingly in a single sitting, top to bottom, as one long scrolling page. There is no second visit to rely on and no sub-page to defer content to.
- Desktop dominates for the primary audience; mobile matters for recruiters. Mobile-first verification at 375px before 1440px is a standing requirement.
- Frequently reached from LinkedIn's in-app browser and from email links, so link previews (OG/Twitter cards) are part of the first impression.
- The CV (`public/BrunoLaizans.pdf`) is a real artefact visitors download and read outside the site.
- Evaluated alongside a stack of other candidate portfolios, which raises the value of restraint and lowers the value of novelty for its own sake.

## Capabilities and Constraints

**Stack:** Next.js 13 (Pages Router), React 18, Tailwind CSS 3. No animation libraries, no UI component library, no icon package — motion is a hand-written `IntersectionObserver` (`useReveal`) plus a canvas grid-mesh; icons are inline SVG. This zero-dependency posture is deliberate and is part of the performance argument.

**Content architecture:** all content lives in `src/data/site.js`; all prose lives in `src/data/locales.js`. Nothing is hardcoded in JSX. New content is added to the data layer, never to a component.

**Internationalisation:** three locales — `en` (default), `da`, `ru`. Locale is held in React context, persisted to `localStorage`, and falls back to `navigator.languages`. It always renders `en` on the server so hydration matches, then applies the preference on mount. Structural data (URLs, dates, technology names, organisation names) is deliberately untranslated. Any new prose must be added in all three locales or it will render as a gap.

**Deployment:** Vercel, at `https://blaizans.vercel.app`. The full Next.js runtime is available; there is no static-export constraint. Note: `src/pages/index.js` currently sets the canonical URL, OG URL, and `Person` schema `url` to `https://blaizans.github.io`, which is **stale and incorrect** and should be corrected to the Vercel domain.

**Performance budget:** LCP < 2.5s, CLS < 0.1, JS < 150kb gzipped.

**Undecided:** whether a custom domain will replace the Vercel default. Until it does, no other hostname may be written into the site.

## Brand Commitments

- Name and title: **Bruno Laizans — Software Engineer**. Not "developer", not "QA engineer" alone.
- Voice: plain, declarative, concrete. First person, short sentences, no marketing register, no exclamation marks, no superlatives. Existing copy is the reference — e.g. "I build and test software that holds up in production."
- Claims are stated as facts with verifiable backing (a live URL, a named employer, a real repository), never as adjectives.
- Real logo and identity assets: `public/favicon.svg`, `public/BrunoLaizans.pdf`, `public/Systematic-Logo.png`, `public/Riga Cup.svg`.

## Evidence on Hand

**Shipped products with real users — the strongest evidence, given full visual weight:**
- **Sport Teamline** (2025, full-stack) — football teamwear and equipment store; multi-brand catalogue, multi-currency checkout, EU-wide delivery. Live at `sport-teamline.dk`. Image: `public/sport-teamline.png`.
- **Riga Cup** (2024, full-stack) — tournament platform for one of the largest youth football tournaments in the Baltics; schedules, results, team management, thousands of visitors. Live at `rigacup.lv/winter`. Image: `public/rc.jpg`.

**Repositories** (course and side projects, listed compactly and linked to GitHub): Pokédex, SyncTask, Slaughterhouse API, TicTacTwo, and this Portfolio. Real and public, but secondary evidence.

**Verifiable history:** Systematic (Test Engineer, 2024–now), Riga Cup (volunteer and developer, 2016–now), REMA 1000 (student job, 2022–2024). Education: VIA University College BSc Software Engineering (2022–2025), UCL Odense IT Technology (2021–2022), Riga Culture Secondary School (until 2021).

**Quantified claims currently in use:** 4+ years writing code, 20+ technologies, 2 products in production, 3 languages spoken.

**Deliberate absences — do not fabricate:** no testimonials, no client quotes, no case-study metrics, no press coverage, no employer endorsements, no awards, no certifications, no analytics or traffic figures for the shipped products. If a future surface needs social proof, it must come from the user, not from invention.

## Product Principles

1. **The site is the work sample.** Correctness, speed, and accessibility are product features, not hygiene. Anything that degrades them undermines the central claim.
2. **Evidence over adjectives.** Every claim earns its place with a live link, a named employer, or a public repository. Nothing is asserted that a reader cannot check.
3. **The testing specialisation is the differentiator.** It is what separates this from every other junior/mid full-stack portfolio and must never be flattened into a peer bullet.
4. **Respect a twenty-second reader.** The role, the stack, the proof, and the way to make contact must survive a fast skim. Depth is available below, never required above.
5. **Content lives in the data layer.** Anything a reader sees belongs in `site.js` or `locales.js`, in all three locales, so the site stays maintainable and translations cannot silently drift.

## Accessibility & Inclusion

No formal standard is contractually required, but accessibility is treated as evidence of engineering quality and therefore load-bearing.

- Body text ≥ 4.5:1, large and UI text ≥ 3:1.
- Semantic landmarks throughout; every section heading a real `h2` with an `id`; skip-to-content as the first focusable element.
- Visible focus rings on every interactive element, never removed. Full keyboard operability; the mobile drawer traps focus, closes on `Escape`, and manages `aria-expanded`/`aria-hidden`.
- Meaningful `alt` on content images, `alt=""` on decorative ones.
- `prefers-reduced-motion` fully honoured — content appears instantly and fully visible, never reduced-motion-gated into invisibility.
- `<html lang>` tracks the active locale so screen readers pronounce correctly. The locale switcher is a `radiogroup` with `aria-checked`, not styled links.
