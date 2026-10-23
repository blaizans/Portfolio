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
    "Full-stack engineer and test specialist. I ship web platforms that real people use every day, and I make sure they keep working after launch.",
  hiringNote: "Available for full-time roles and freelance projects",
  intro:
    "Full-stack engineer and test specialist. I have shipped e-commerce and tournament platforms that are live and in daily use, and spent two years doing test engineering and automation at Systematic, Denmark's largest privately owned IT company. Full-stack background across Java, .NET and TypeScript.",
  availability: "Available now",
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
  { name: "Systematic", href: "https://systematic.com/da-dk/" },
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
 * Order is deliberate: Testing & QA leads because it is the differentiator a
 * neighbouring full-stack portfolio cannot truthfully copy. `lead: true` marks
 * the row the design elevates — it is not styling metadata for every entry.
 *
 * `title`/`body` here are reference copy only — Capabilities.jsx actually
 * renders `t.capabilities.items[index]` from locales.js. Keep both in sync;
 * `tags` and `lead` are the fields consumed directly from this array.
 */
export const capabilities = [
  {
    title: "Testing & QA",
    body: "Two years of mission-critical testing at Systematic. Automated test suites, regression coverage and CI pipelines for large-scale systems where defects carry real cost.",
    tags: ["Automation", "Regression", "CI/CD", "Test Design"],
    lead: true,
  },
  {
    title: "Backend Development",
    body: "REST APIs and service layers in Java/Spring Boot and .NET. Relational data modelling with PostgreSQL and MySQL, containerised with Docker.",
    tags: ["Java", "Spring Boot", ".NET", "C#", "PostgreSQL"],
  },
  {
    title: "Frontend Development",
    body: "Production interfaces with React and Next.js. Typed, accessible, and built mobile-first, including the site you are reading.",
    tags: ["TypeScript", "React", "Next.js", "Tailwind"],
  },
  {
    title: "Cloud & Delivery",
    body: "Deploying and operating on Azure. Scrum delivery with Jira, UML modelling, and code review as a normal part of shipping.",
    tags: ["Azure", "Docker", "Scrum", "Jira"],
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
    stack: ["Next.js", "React", "Firebase", "Stripe", "Vercel", "Vitest", "Playwright"],
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
    year: "2024",
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
    title: "PNTA",
    year: "2025",
    role: "Full-stack",
    status: "statusValueAcademic",
    body: "Event-discovery ecosystem built for a bachelor thesis: a React Native app for attendees, a Next.js dashboard for venue managers, a Spring Boot/PostgreSQL backend serving both, and a Python model predicting event attendance.",
    stack: ["React Native", "Next.js", "Spring Boot", "PostgreSQL", "Python", "ML"],
    // Three distinct surfaces, not crops of one shot — rendered as a 3-up
    // plate instead of the single 16:9 image the other specimens use.
    images: [
      { src: "/pnta-dashboard.png", labelKey: "dashboard", width: 939, height: 527 },
      { src: "/pnta-web.png", labelKey: "promoSite", width: 940, height: 449 },
      { src: "/pnta-mobile.png", labelKey: "mobileApp", width: 940, height: 387 },
    ],
    links: [
      { label: "Mobile", href: "https://github.com/PNTAbach/PNTAapp" },
      { label: "Web", href: "https://github.com/PNTAbach/VenueWebApp" },
      { label: "Backend", href: "https://github.com/PNTAbach/Backend" },
      { label: "ML model", href: "https://github.com/PNTAbach/EventPredictionModel" },
    ],
  },
  {
    // No public name, link, or screenshot yet — `placeholder: true` tells
    // Specimen to render the abstract "in progress" plate instead of an
    // <Image>, and to skip the plate/links being clickable. Every other
    // fact here (year, role, status) is true today; nothing is invented.
    title: "Aarhus Webshop",
    year: "2026",
    role: "Full-stack",
    status: "statusValueInProgress",
    body: "E-commerce site for an Aarhus-based entrepreneur, currently in development.",
    stack: ["E-commerce"],
    placeholder: true,
    links: [],
  },
];

/** Smaller course and side projects, listed compactly and linked to GitHub. */
export const repositories = [
  {
    title: "VIATAB",
    year: "2023",
    body: "Java tabloid application with full CRUD on sensational stories and a DevOps deployment pipeline.",
    stack: ["Java", "REST", "DevOps"],
    href: "https://github.com/blaizans/VIATAB",
  },
  {
    title: "SyncTask",
    year: "2023",
    body: "Distributed task management across a .NET service, a Spring Boot API and a Blazor client.",
    stack: [".NET", "Spring Boot", "Blazor"],
    href: "https://github.com/blaizans/SyncTask-2.0",
  },
  {
    title: "Pokédex",
    year: "2023",
    body: "Client-side app on the PokéAPI with search, filtering and detail views. Deployed and live.",
    stack: ["JavaScript", "Tailwind", "REST"],
    href: "https://github.com/blaizans/pokedex",
  },
  {
    title: "Slaughterhouse API",
    year: "2023",
    body: "REST API modelling full product traceability from intake to packaged output.",
    stack: ["Java", "Spring Boot", "PostgreSQL"],
    href: "https://github.com/blaizans/Slaughterhouse-API",
  },
  {
    title: "n-Queens Solver",
    year: "2023",
    body: "Backtracking solver for the n-Queens puzzle, an exercise in constraint search and algorithm design.",
    stack: ["Java", "Algorithms"],
    href: "https://github.com/blaizans/nQueensProblem",
  },
  {
    title: "TicTacTwo",
    year: "2022",
    body: "One game implemented twice, object-oriented and purely functional, to compare paradigms.",
    stack: ["HTML", "CSS", "JavaScript"],
    href: "https://github.com/blaizans/TicTacTwo",
  },
  {
    title: "Portfolio",
    year: "2026",
    body: "This site. Zone-based theming and a hand-written interactive canvas, no animation libraries.",
    stack: ["Next.js", "Tailwind", "CSS"],
    href: "https://github.com/blaizans/Portfolio",
  },
];

export const experience = [
  {
    org: "Systematic",
    role: "Test Engineer",
    period: "2024–2026",
    body: "Test engineering and automation at Denmark's largest privately owned IT company.",
    href: "https://systematic.com/da-dk/",
  },
  {
    org: "Riga Cup",
    role: "Volunteer & Developer",
    period: "2016–Now",
    body: "Long-running involvement with the tournament, latterly building and maintaining its web platform.",
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
    role: "BSc Software Engineering",
    period: "2022–2025",
    body: "Bachelor's degree in software engineering, Horsens.",
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
