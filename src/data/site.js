/**
 * Single source of truth for all portfolio content.
 * Sections render from this — no content hardcoded in JSX.
 */

export const profile = {
  name: "Bruno Laizans",
  role: "Software Engineer",
  location: "Aarhus, Denmark",
  email: "blaizans02@gmail.com",
  tagline: "I build and test software that holds up in production.",
  // Hero pitch: what a visitor gets, not just what I am.
  pitch:
    "Full-stack developer. I ship web platforms that real people use every day, and I keep them working after launch.",
  hiringNote: "Available 12-20 hours a week from February 2027",
  intro:
    "Full-stack developer. I have shipped e-commerce and tournament platforms that are live and in daily use. Full-stack background across Java, .NET and TypeScript.",
  availability: "From February 2027",
  github: "https://github.com/blaizans?tab=repositories",
  socials: [
    { label: "LinkedIn", href: "https://www.linkedin.com/in/bruno-laizans/" },
    { label: "GitHub", href: "https://github.com/blaizans" },
    { label: "Email", href: "mailto:blaizans02@gmail.com" },
  ],
};

/**
 * The hero's "Real work" row: named places and products a reader can check.
 * Proper nouns, so they are not translated.
 */
export const heroProof = [
  { name: "Systematic", href: "#experience" },
  { name: "Riga Cup", href: "https://rigacup.lv/winter" },
  { name: "Teamwear Webshop", href: "https://teamsport-dk.vercel.app" },
];

export const stats = [
  { value: 4, suffix: "+", label: "Years writing code" },
  { value: 20, suffix: "+", label: "Technologies used" },
  { value: 2, suffix: "", label: "Products in production" },
  { value: 3, suffix: "", label: "Languages spoken" },
];

/**
 * Order is deliberate: frontend and full-stack lead, because that is the work
 * being offered; testing comes last. `lead: true` marks the row the design
 * elevates, it is not styling metadata for every entry.
 *
 * `title`/`body` here are reference copy only: Capabilities.jsx actually
 * renders `t.capabilities.items[index]` from locales.js. Keep both in sync;
 * `tags` and `lead` are the fields consumed directly from this array.
 */
export const capabilities = [
  {
    title: "Frontend Development",
    body: "Production interfaces with React and Next.js. Typed, accessible, and built mobile-first, including the site you are reading.",
    tags: ["TypeScript", "React", "Next.js", "Tailwind"],
    lead: true,
  },
  {
    title: "Full-stack & Backend",
    body: "REST APIs and service layers in Java/Spring Boot and .NET, wired to React frontends. Relational data modelling with PostgreSQL and MySQL, containerised with Docker.",
    tags: ["Java", "Spring Boot", ".NET", "C#", "PostgreSQL"],
  },
  {
    title: "Cloud & Delivery",
    body: "Deploying and operating on Azure. Scrum delivery with Jira, UML modelling, and code review as a normal part of shipping.",
    tags: ["Azure", "Docker", "Scrum", "Jira"],
  },
  {
    title: "Testing",
    body: "End-to-end tests with Playwright on desktop Chrome, Android and iPhone for the webshop, with regression checks and test design as a normal part of delivery.",
    tags: ["Playwright", "Regression", "Test Design"],
  },
];

/** Shipped products: real users, real traffic. Given full visual weight. */
export const projects = [
  {
    // A plain descriptive name, kept in one place on purpose: the same string
    // keys the `bodies`, `plateAlts` and `offers` entries in locales.js, so
    // renaming the product means changing this field and those three keys.
    //
    // Built and run as a real football teamwear shop, now offered as a
    // ready-made storefront for new businesses. The reference build is live,
    // so the plate links to it. `offer: true` makes Specimen render the "what
    // is included" block and enquiry button.
    title: "Teamwear Webshop",
    year: "2025",
    role: "Full-stack",
    body: "A multilingual, multi-currency webshop with a loyalty programme, a built-in finance dashboard and AI-written product pages. Built end to end and run as a real football teamwear business. Ready for a new business, with a new UI.",
    stack: ["Next.js", "React", "Firebase", "Stripe", "Vercel", "Playwright"],
    // Cropped to the storefront: the original capture included the previous
    // brand's header bar, which is deliberately not shown.
    image: "/storefront-reference.png",
    imageSize: { width: 1831, height: 723 },
    plateCaptionKey: "teamwearReference",
    offer: true,
    // The first link is also the plate's destination. The admin demo runs on
    // sample data, so it is safe to show the owner side without real figures.
    links: [
      { label: "Live site", href: "https://teamsport-dk.vercel.app" },
      { label: "Admin demo", href: "https://teamsport-dk.vercel.app/admin-demo" },
    ],
  },
  {
    title: "Riga Cup",
    year: "2023",
    role: "Full-stack",
    body: "Tournament platform for one of the largest youth football tournaments in the Baltics. Schedules, results and team management serving thousands of visitors.",
    stack: ["TypeScript", "Next.js", "Firebase"],
    image: "/rc.jpg",
    imageSize: { width: 1534, height: 893 },
    // Real proof of the volunteer role behind the platform, not another
    // product shot — see t.work.proofCaptions / proofAlt in locales.js.
    proofImage: { src: "/riga-cup-awards-2019.png", captionKey: "rigaCupAwards" },
    links: [{ label: "Live site", href: "https://rigacup.lv/winter" }],
  },
  {
    title: "Party App (PNTA)",
    year: "2025",
    role: "Full-stack",
    status: "statusValueAcademic",
    body: "Event-discovery ecosystem built for a bachelor thesis: a React Native app for attendees, a Next.js dashboard for venue managers, a Spring Boot/PostgreSQL backend serving both, and a Python model predicting event attendance.",
    stack: ["React Native", "Next.js", "Spring Boot", "PostgreSQL", "Python", "ML"],
    // Three distinct surfaces, not crops of one shot, rendered as a 3-up
    // plate. Each plate links to its own repository; the promo site has no
    // repository of its own listed here, so its plate is not a link.
    images: [
      {
        src: "/pnta-dashboard.png",
        labelKey: "dashboard",
        width: 939,
        height: 527,
        href: "https://github.com/PNTAbach/VenueWebApp",
      },
      { src: "/pnta-web.png", labelKey: "promoSite", width: 940, height: 449 },
      {
        src: "/pnta-mobile.png",
        labelKey: "mobileApp",
        width: 940,
        height: 387,
        href: "https://github.com/PNTAbach/PNTAapp",
      },
    ],
    links: [
      { label: "Mobile", href: "https://github.com/PNTAbach/PNTAapp" },
      { label: "Dashboard", href: "https://github.com/PNTAbach/VenueWebApp" },
      { label: "Backend", href: "https://github.com/PNTAbach/Backend" },
      { label: "ML model", href: "https://github.com/PNTAbach/EventPredictionModel" },
    ],
  },
];

export const experience = [
  {
    org: "Systematic",
    role: "Test Engineer",
    period: "2024–2026",
    // Bullets come from the CV: set in locales.js `experience.bodies.Systematic`.
    body: "",
    href: "https://systematic.com/da-dk/",
  },
  {
    org: "Riga Cup",
    role: "Developer & Tournament Manager",
    period: "2016–Now",
    body: "Family-run and voluntary. I build and maintain the web platform, and handle ads, scheduling and logistics.",
    href: "https://rigacup.lv/winter/",
  },
  {
    org: "REMA 1000",
    role: "Student Job",
    period: "2022–2024",
    body: "Worked alongside full-time study throughout the degree.",
    href: "https://www.rema1000.dk/",
  },
];

export const education = [
  {
    org: "VIA University College",
    role: "BEng Software Technology Engineering",
    period: "Expected Feb 2027",
    body: "Bachelor of Engineering in software technology, Horsens.",
    href: "https://www.via.dk/",
  },
  {
    org: "UCL Odense",
    role: "IT Technology",
    period: "2021–2022",
    body: "Foundation in IT technology and infrastructure.",
    href: "https://www.ucl.dk/",
  },
  {
    org: "Riga Culture Secondary School",
    role: "Secondary Education",
    period: "Until 2021",
    body: "Completed secondary education in Riga, Latvia.",
    href: "https://www.rkv.lv/",
  },
];

export const toolset = [
  {
    group: "Languages",
    items: ["Java", "C#", "TypeScript", "JavaScript", "Python", "SQL", "HTML", "CSS"],
  },
  {
    group: "Frameworks",
    items: ["Spring Boot", ".NET", "React", "Next.js", "Blazor", "Tailwind", "Bootstrap"],
  },
  {
    group: "Data",
    items: ["PostgreSQL", "MySQL", "Firebase"],
  },
  {
    group: "Infrastructure",
    items: ["Docker", "Azure", "Git", "CI/CD"],
  },
  {
    group: "Practice",
    items: ["Test Automation", "Scrum", "Jira", "UML", "Code Review"],
  },
];

export const navLinks = [
  // Same order as the page.
  { key: "work", href: "#work" },
  { key: "experience", href: "#experience" },
  { key: "toolset", href: "#toolset" },
  { key: "about", href: "#about" },
  { key: "contact", href: "#contact" },
];
