/**
 * UI strings and prose per locale.
 * Structural data (links, dates, stack names, org names) lives in site.js and
 * is not translated, proper nouns and technology names stay as-is.
 */

export const LOCALES = ["en", "da", "ru"];

export const LOCALE_NAMES = {
  en: "English",
  da: "Dansk",
  ru: "Русский",
};

export const translations = {
  en: {
    htmlLang: "en",
    seo: {
      title: "Bruno Laizans – Software Engineer & Web Developer, Aarhus",
      description:
        "Software engineer in Aarhus, Denmark. I build websites, web apps and web shops, and test software at Systematic. Available for freelance work and full-time roles.",
      h1Extra: "Software engineer and web developer in Aarhus, Denmark",
      imageAlt: "Bruno Laizans, software engineer in Aarhus, Denmark",
      jobTitle: "Software Engineer",
      serviceName: "Bruno Laizans – Software Development and Testing",
      serviceTypes: [
        "Website development",
        "Web application development",
        "E-commerce development",
        "Software testing and test automation",
      ],
      ogEyebrow: "SOFTWARE ENGINEER — AARHUS, DENMARK",
    },
    nav: {
      work: "Work",
      about: "About",
      experience: "Experience",
      toolset: "Toolset",
      contact: "Contact",
      menu: "Menu",
      close: "Close",
      skip: "Skip to content",
      main: "Main",
      mobile: "Mobile",
      siteMenu: "Site menu",
      language: "Language",
    },
    hero: {
      availability: "Open to new opportunities",
      pitch:
        "Full-stack engineer and test specialist. I ship web platforms that real people use every day, and I make sure they keep working after launch.",
      statement: "I build websites and web shops, test them before they ship, and support them after launch.",
      offer: {
        label: "What you get",
        items: [
          {
            title: "Built end to end",
            body: "Websites, web shops and web apps in Java, .NET and TypeScript. Riga Cup serves thousands of visitors.",
          },
          {
            title: "Tested before it ships",
            body: "Automated tests and CI, as in my two years at Systematic. The webshop is tested on Chrome, Android and iPhone.",
          },
          {
            title: "Supported after launch",
            body: "I keep what I build running. I have maintained Riga Cup, and the webshop checks its images nightly and sends alerts.",
          },
        ],
        proofLabel: "Real work",
      },
      hiringNote: "Available for full-time roles and freelance projects",
      hireMe: "Hire me",
      seeWork: "See my work",
      proof: {
        nowAt: "Status",
        nowAtValue: "Available now",
        experience: "Experience",
        experienceValue: "4+ years building",
        focus: "Focus",
        focusValue: "Testing & Backend",
        response: "Response time",
        responseValue: "Within 24 hours",
      },
      tagline: "I build and test software that holds up in production.",
      role: "Software Engineer",
      location: "Aarhus, Denmark",
      selectedWork: "Selected work",
      getInTouch: "Get in touch",
      meta: {
        company: "Company",
        focus: "Focus",
        since: "Since",
        interact: "Interact",
        interactValue: "Move your cursor",
        focusValue: "Testing & Backend",
      },
    },
    capabilities: {
      eyebrow: "What I do",
      title: "Four things I get paid to be careful about.",
      items: [
        {
          title: "Testing & QA",
          body: "Two years of mission-critical testing at Systematic. Automated test suites, regression coverage and CI pipelines for large-scale systems where defects carry real cost.",
          flag: "The specialism",
        },
        {
          title: "Backend Development",
          body: "REST APIs and service layers in Java/Spring Boot and .NET. Relational data modelling with PostgreSQL and MySQL, containerised with Docker.",
        },
        {
          title: "Frontend Development",
          body: "Production interfaces with React and Next.js. Typed, accessible, and built mobile-first, including the site you are reading.",
        },
        {
          title: "Cloud & Delivery",
          body: "Deploying and operating on Azure. Scrum delivery with Jira, UML modelling, and code review as a normal part of shipping.",
        },
      ],
    },
    about: {
      eyebrow: "About",
      title: "I'm better at coming back than at not falling.",
      intro:
        "Full-stack engineer and test specialist. I have shipped e-commerce and tournament platforms that are live and in daily use, and spent two years on test engineering and automation at Systematic, Denmark's largest privately owned IT company. Full-stack background across Java, .NET and TypeScript.",
      p2: "Before any of this I played football, goalkeeper until I was 14, then defender, midfielder, striker, whatever the team needed. I came up through Skonto's academy, then RFS and Riga FC at Latvia's top youth level, and at some point did the math on what Latvian football could actually pay and started learning to code instead.",
      p3: "The part that stuck with me is the adapting, not memorising one position well enough to coast, but actually being useful wherever the team was short. That's roughly how I approach a codebase too: I write the tests and automation that catch problems before users do, and my full-stack background means I can read the code I'm testing instead of guessing at it. Right now I am looking for my next role, and taking on freelance work.",
      cta: "Start a conversation",
      photoAlt: "Bruno playing football in a competitive match in Latvia",
      stats: [
        "Years writing code",
        "Technologies used",
        "Products in production",
        "Languages spoken",
      ],
    },
    work: {
      eyebrow: "Selected work",
      poster: "Selected work",
      title: "Products built end-to-end, from data to interface.",
      rail: {
        role: "Role",
        year: "Year",
        status: "Status",
        statusValue: "Live",
        statusValueAcademic: "Bachelor project",
        statusValueInProgress: "In progress",
        statusValueReady: "Ready to launch",
      },
      placeholderLabel: "In progress",
      otherProjects: "Other projects",
      featuresLabel: "What it does",
      builtWith: "Built with",
      allRepos: "All repositories on GitHub",
      screenshotAlt: (name) => `Screenshot of the ${name} project`,
      roles: {
        "Full-stack": "Full-stack",
        "Semester project": "Semester project",
        Backend: "Backend",
        Frontend: "Frontend",
        "Design & build": "Design & build",
      },
      bodies: {
        PNTA: "Event-discovery ecosystem built for a bachelor thesis: a React Native app for attendees, a Next.js dashboard for venue managers, a Spring Boot/PostgreSQL backend serving both, and a Python model predicting event attendance.",
        "Aarhus Webshop": "E-commerce site for an Aarhus-based entrepreneur, currently in development.",
        "Teamwear Webshop":
          "A multilingual, multi-currency webshop with a loyalty programme, a built-in finance dashboard and AI-written product pages. Built end to end and run as a real football teamwear business. Ready for a new business, with a new UI.",
        "Riga Cup":
          "Tournament platform for one of the largest youth football tournaments in the Baltics, schedules, results and team management serving thousands of visitors.",
        SyncTask:
          "Distributed task management system built across three runtimes, a .NET service, a Spring Boot API and a Blazor client sharing one domain model.",
        VIATAB:
          "Java tabloid application with full CRUD on sensational stories and a DevOps deployment pipeline.",
        "Slaughterhouse API":
          "REST API modelling full product traceability from animal intake to packaged output, with layered architecture and persistent storage.",
        Pokédex:
          "Client-side application consuming the PokéAPI with search, filtering and detail views, an exercise in clean async state handling.",
        "n-Queens Solver":
          "Backtracking solver for the n-Queens puzzle, an exercise in constraint search and algorithm design.",
        TicTacTwo:
          "The same game implemented twice, once object-oriented, once purely functional, to compare how each paradigm handles shared game state.",
        "This Portfolio":
          "Editorial single-page site with a zone-based theming system and a hand-written ~3kb interactive canvas. No animation libraries.",
      },
      links: {
        live: "Live",
        liveSite: "Live site",
        source: "Source",
        mobile: "Mobile",
        web: "Web",
        backend: "Backend",
        "ml model": "ML model",
        "admin demo": "Admin demo",
      },
      plateLabels: {
        dashboard: "Venue manager dashboard",
        promoSite: "Promo website",
        mobileApp: "Mobile app",
      },
      proofAlt: {
        "Riga Cup": "Bruno presenting medals to players at the Riga Cup awards ceremony, 2019",
      },
      proofCaptions: {
        rigaCupAwards: "Awards ceremony, Riga Cup 2019",
      },
      plateCaptions: {
        teamwearReference: "Reference build: football teamwear shop",
      },
      plateAlts: {
        "Teamwear Webshop":
          "Reference storefront for a football teamwear shop: boots, a jersey and a hoodie around the headline “Your next Level.”",
      },
      // Structure is shared across locales: two ruled lists, one quality line,
      // one closing sentence and an enquiry button. Each item is a term and one
      // sentence. No prices or packages: none exist to state.
      offers: {
        "Teamwear Webshop": {
          label: "What is included",
          shoppersLabel: "For shoppers",
          ownerLabel: "For the owner",
          shoppers: [
            {
              term: "Local by default",
              body: "Opens in English, Danish or German and prices in EUR or DKK, based on the visitor's country. The choice is remembered.",
            },
            {
              term: "Correct pricing",
              body: "VAT is calculated for the shopper's country. Sale prices are clearly marked.",
            },
            {
              term: "Loyalty points",
              body: "One point per euro, redeemable as discount codes. Points are credited only after the return window closes. First-time buyers get a €10 welcome-back credit.",
            },
            {
              term: "Checkout",
              body: "Payment runs through Stripe. The cart is a drawer that opens from any page.",
            },
            {
              term: "Returns",
              body: "An online withdrawal form handles the 14-day statutory return without email back and forth.",
            },
            {
              term: "Team orders",
              body: "Clubs can request a quote for bulk orders.",
            },
            {
              term: "No dead ends",
              body: "Back-in-stock alerts, product reviews and a “for you” section of relevant products.",
            },
          ],
          owner: [
            {
              term: "Live dashboard",
              body: "Sales, orders and trends in one place, with a demo mode on sample data.",
            },
            {
              term: "Finance built in",
              body: "Revenue, costs, Stripe fees and the profit split between partners for each month. Confirmed income is kept apart from income that could still be returned.",
            },
            {
              term: "Product texts in bulk",
              body: "AI drafts descriptions in all three languages from a style guide, and every draft is checked against the rules automatically.",
            },
            {
              term: "Image checks",
              body: "Supplier images are checked every night. Products with broken photos stay out of the recommendation sections.",
            },
            {
              term: "Private alerts",
              body: "Important events go to Telegram. No personal data is included.",
            },
          ],
          qualityLabel: "Quality",
          quality:
            "Covered by automated tests, including end-to-end tests on desktop Chrome, Android and iPhone. Localised pages, brand pages and guides help it get found in search.",
          change:
            "Built as a real business and kept as a reference. A new business needs the UI changed: brand, colours, imagery and copy. The shop itself is ready.",
          cta: "Ask about Teamwear Webshop",
          subject: "Teamwear Webshop enquiry",
        },
      },
    },
    experience: {
      eyebrow: "Track record",
      title: "Where I've worked and what I studied.",
      experienceLabel: "Experience",
      educationLabel: "Education",
      roles: {
        "Test Engineer": "Test Engineer",
        "Volunteer & Developer": "Volunteer & Developer",
        "Student Job": "Student Job",
        "BSc Software Engineering": "BSc Software Engineering",
        "IT Technology": "IT Technology",
        "Secondary Education": "Secondary Education",
      },
      bodies: {
        Systematic:
          "Test engineering and automation at Denmark's largest privately owned IT company.",
        "Riga Cup":
          "Long-running involvement with the tournament, latterly building and maintaining its web platform.",
        "REMA 1000": "Worked alongside full-time study throughout the degree.",
        "VIA University College": "Bachelor's degree in software engineering, Horsens.",
        "UCL Odense": "Foundation in IT technology and infrastructure.",
        "Riga Culture Secondary School": "Completed secondary education in Riga, Latvia.",
      },
    },
    toolset: {
      eyebrow: "Toolset",
      title: "The tools I reach for.",
      lead: "Grouped by what they're for, not by how proud I am of them.",
      groups: {
        Languages: "Languages",
        Frameworks: "Frameworks",
        Data: "Data",
        Infrastructure: "Infrastructure",
        Practice: "Practice",
      },
      items: {
        "Test Automation": "Test Automation",
        "Code Review": "Code Review",
      },
    },
    contact: {
      eyebrow: "Contact",
      titleLine1: "Let's build",
      titleLine2: "something solid.",
      lead: "Hiring, collaborating, or just want to compare notes on test automation? The fastest way to reach me is email, I answer everything.",
    },
    footer: {
      built: "Built with Next.js, no templates harmed",
      backToTop: "Back to top",
    },
  },

  da: {
    htmlLang: "da",
    seo: {
      title: "Bruno Laizans – Softwareudvikler & webudvikler i Aarhus",
      description:
        "Softwareudvikler i Aarhus. Jeg bygger hjemmesider, webapplikationer og webshops og tester software hos Systematic. Ledig til freelance og fast job.",
      h1Extra: "Softwareudvikler og webudvikler i Aarhus, Danmark",
      imageAlt: "Bruno Laizans, softwareudvikler i Aarhus, Danmark",
      jobTitle: "Softwareudvikler",
      serviceName: "Bruno Laizans – Softwareudvikling og test",
      serviceTypes: [
        "Udvikling af hjemmesider",
        "Udvikling af webapplikationer",
        "Udvikling af webshops",
        "Softwaretest og testautomatisering",
      ],
      ogEyebrow: "SOFTWAREUDVIKLER — AARHUS, DANMARK",
    },
    nav: {
      work: "Projekter",
      about: "Om mig",
      experience: "Erfaring",
      toolset: "Værktøjer",
      contact: "Kontakt",
      menu: "Menu",
      close: "Luk",
      skip: "Gå til indhold",
      main: "Hoved",
      mobile: "Mobil",
      siteMenu: "Sitemenu",
      language: "Sprog",
    },
    hero: {
      availability: "Ledig nu",
      pitch:
        "Full-stack udvikler og testspecialist. Jeg leverer webplatforme, som rigtige mennesker bruger hver dag, og sikrer at de bliver ved med at virke efter launch.",
      statement: "Jeg bygger hjemmesider og webshops, tester dem, før de går live, og står for support efter lancering.",
      offer: {
        label: "Det får du",
        items: [
          {
            title: "Bygget fra start til slut",
            body: "Hjemmesider, webshops og webapps i Java, .NET og TypeScript. Riga Cup har tusindvis af besøgende.",
          },
          {
            title: "Testet, før det går live",
            body: "Automatiserede tests og CI, som i mine to år hos Systematic. Webshoppen er testet på Chrome, Android og iPhone.",
          },
          {
            title: "Support efter lancering",
            body: "Jeg holder det, jeg bygger, kørende. Jeg har vedligeholdt Riga Cup, og webshoppen tjekker sine billeder hver nat og sender alarmer.",
          },
        ],
        proofLabel: "Rigtigt arbejde",
      },
      hiringNote: "Ledig til fuldtidsstillinger og freelanceopgaver",
      hireMe: "Ansæt mig",
      seeWork: "Se mine projekter",
      proof: {
        nowAt: "Status",
        nowAtValue: "Ledig nu",
        experience: "Erfaring",
        experienceValue: "4+ års udvikling",
        focus: "Fokus",
        focusValue: "Test & Backend",
        response: "Svartid",
        responseValue: "Inden for 24 timer",
      },
      tagline: "Jeg bygger og tester software, der holder i produktion.",
      role: "Softwareingeniør",
      location: "Aarhus, Danmark",
      selectedWork: "Udvalgte projekter",
      getInTouch: "Kontakt mig",
      meta: {
        company: "Virksomhed",
        focus: "Fokus",
        since: "Siden",
        interact: "Interaktiv",
        interactValue: "Bevæg musen",
        focusValue: "Test & Backend",
      },
    },
    capabilities: {
      eyebrow: "Hvad jeg laver",
      title: "Fire ting jeg får løn for at være omhyggelig med.",
      items: [
        {
          title: "Test & kvalitetssikring",
          body: "To år med mission-critical testarbejde hos Systematic. Automatiserede testsuiter, regressionsdækning og CI-pipelines til store systemer, hvor fejl har reelle konsekvenser.",
          flag: "Specialet",
        },
        {
          title: "Backend-udvikling",
          body: "REST API'er og servicelag i Java/Spring Boot og .NET. Relationel datamodellering med PostgreSQL og MySQL, containeriseret med Docker.",
        },
        {
          title: "Frontend-udvikling",
          body: "Produktionsklare brugerflader med React og Next.js. Typesikre, tilgængelige og bygget mobile-first, inklusive siden du læser nu.",
        },
        {
          title: "Cloud & levering",
          body: "Deployment og drift på Azure. Scrum-levering med Jira, UML-modellering og code review som en naturlig del af arbejdet.",
        },
      ],
    },
    about: {
      eyebrow: "Om mig",
      title: "Jeg er bedre til at rejse mig end til slet ikke at falde.",
      intro:
        "Full-stack udvikler og testspecialist. Jeg har leveret e-handels- og turneringsplatforme, som er i drift og bruges dagligt, og har brugt to år på testudvikling og automatisering hos Systematic, Danmarks største privatejede IT-virksomhed. Full-stack baggrund i Java, .NET og TypeScript.",
      p2: "Før alt det her spillede jeg fodbold, målmand indtil jeg var 14, derefter forsvarsspiller, midtbane, angriber, hvad end holdet manglede. Jeg kom igennem Skontos akademi, derefter RFS og Riga FC på Letlands højeste ungdomsniveau, og på et tidspunkt regnede jeg ud, hvad lettisk fodbold reelt kunne betale, og begyndte i stedet at lære at kode.",
      p3: "Det, der blev hængende, er evnen til at tilpasse sig, ikke at lære én position så godt, at man kan læne sig tilbage, men rent faktisk gøre gavn dér, hvor holdet manglede noget. Sådan cirka griber jeg også en kodebase an: jeg skriver de tests og den automatisering, der fanger problemer før brugerne gør, og min full-stack baggrund betyder, at jeg kan læse den kode, jeg tester, i stedet for at gætte. Lige nu søger jeg mit næste job og tager freelanceopgaver.",
      cta: "Start en samtale",
      photoAlt: "Bruno spiller fodbold i en konkurrencekamp i Letland",
      stats: [
        "År med kodning",
        "Teknologier anvendt",
        "Produkter i drift",
        "Sprog jeg taler",
      ],
    },
    work: {
      eyebrow: "Udvalgte projekter",
      poster: "Udvalgte projekter",
      title: "Produkter bygget end-to-end, fra data til interface.",
      rail: {
        role: "Rolle",
        year: "År",
        status: "Status",
        statusValue: "Live",
        statusValueAcademic: "Bachelorprojekt",
        statusValueInProgress: "I gang",
        statusValueReady: "Klar til lancering",
      },
      placeholderLabel: "I gang",
      otherProjects: "Andre projekter",
      featuresLabel: "Hvad den kan",
      builtWith: "Bygget med",
      allRepos: "Alle repositories på GitHub",
      screenshotAlt: (name) => `Skærmbillede af projektet ${name}`,
      roles: {
        "Full-stack": "Full-stack",
        "Semester project": "Semesterprojekt",
        Backend: "Backend",
        Frontend: "Frontend",
        "Design & build": "Design & udvikling",
      },
      bodies: {
        PNTA: "Event-discovery-økosystem bygget til et bachelorprojekt: en React Native-app til deltagere, et Next.js-dashboard til venue-managere, en Spring Boot/PostgreSQL-backend der betjener begge, og en Python-model der forudsiger fremmøde til events.",
        "Aarhus Webshop": "Webshop til en iværksætter i Aarhus, i øjeblikket under udvikling.",
        "Teamwear Webshop":
          "En flersproget webshop med flere valutaer, et loyalitetsprogram, et indbygget økonomidashboard og AI-skrevne produktsider. Bygget fra start til slut og drevet som en rigtig forretning med fodboldtøj. Klar til en ny virksomhed, med en ny brugerflade.",
        "Riga Cup":
          "Turneringsplatform til en af Baltikums største ungdomsfodboldturneringer, kampprogrammer, resultater og holdadministration for tusindvis af besøgende.",
        SyncTask:
          "Distribueret opgavestyringssystem bygget på tværs af tre runtimes, en .NET-service, et Spring Boot-API og en Blazor-klient med fælles domænemodel.",
        VIATAB:
          "Java-tabloidapplikation med fuld CRUD på sensationshistorier og en DevOps-deploymentpipeline.",
        "Slaughterhouse API":
          "REST-API der modellerer fuld produktsporbarhed fra indtag til færdigpakket vare, med lagdelt arkitektur og persistent datalagring.",
        Pokédex:
          "Klientapplikation der bruger PokéAPI med søgning, filtrering og detaljevisninger, en øvelse i ren håndtering af asynkron tilstand.",
        "n-Queens Solver":
          "Backtracking-løser til n-Queens-puslespillet, en øvelse i søgning med begrænsninger og algoritmedesign.",
        TicTacTwo:
          "Samme spil implementeret to gange, én gang objektorienteret, én gang rent funktionelt, for at sammenligne hvordan hvert paradigme håndterer delt spiltilstand.",
        "This Portfolio":
          "Redaktionel one-page-side med zonebaseret temasystem og et håndskrevet interaktivt canvas på ~3kb. Ingen animationsbiblioteker.",
      },
      links: {
        live: "Live",
        liveSite: "Se live",
        source: "Kildekode",
        mobile: "Mobil",
        web: "Web",
        backend: "Backend",
        "ml model": "ML-model",
        "admin demo": "Admin-demo",
      },
      plateLabels: {
        dashboard: "Dashboard til venue-managere",
        promoSite: "Kampagnesite",
        mobileApp: "Mobilapp",
      },
      proofAlt: {
        "Riga Cup": "Bruno overrækker medaljer til spillere ved Riga Cups medaljeceremoni, 2019",
      },
      proofCaptions: {
        rigaCupAwards: "Medaljeceremoni, Riga Cup 2019",
      },
      plateCaptions: {
        teamwearReference: "Referencebuild: webshop med fodboldtøj",
      },
      plateAlts: {
        "Teamwear Webshop":
          "Referencebutik for en webshop med fodboldtøj: støvler, en trøje og en hættetrøje omkring overskriften “Your next Level.”",
      },
      offers: {
        "Teamwear Webshop": {
          label: "Hvad er med",
          shoppersLabel: "For kunden",
          ownerLabel: "For ejeren",
          shoppers: [
            {
              term: "Lokal som standard",
              body: "Åbner på engelsk, dansk eller tysk og viser priser i EUR eller DKK ud fra den besøgendes land. Valget huskes.",
            },
            {
              term: "Korrekte priser",
              body: "Moms beregnes for kundens land. Tilbudspriser er tydeligt markeret.",
            },
            {
              term: "Loyalitetspoint",
              body: "Ét point pr. euro, som kan indløses til rabatkoder. Point krediteres først, når fortrydelsesfristen er udløbet. Førstegangskøbere får en velkomstkredit på 10 €.",
            },
            {
              term: "Betaling",
              body: "Betalingen kører via Stripe. Kurven er en skuffe, der kan åbnes fra enhver side.",
            },
            {
              term: "Returnering",
              body: "En online fortrydelsesformular håndterer den lovpligtige 14-dages fortrydelsesret uden e-mails frem og tilbage.",
            },
            {
              term: "Holdbestillinger",
              body: "Klubber kan bede om et tilbud på større ordrer.",
            },
            {
              term: "Aldrig en blindgyde",
              body: "Besked når varer er på lager igen, produktanmeldelser og en “til dig”-sektion med relevante produkter.",
            },
          ],
          owner: [
            {
              term: "Live dashboard",
              body: "Salg, ordrer og tendenser samlet ét sted, med en demotilstand på eksempeldata.",
            },
            {
              term: "Økonomi indbygget",
              body: "Omsætning, omkostninger, Stripe-gebyrer og overskudsfordelingen mellem partnere for hver måned. Bekræftet indtjening holdes adskilt fra indtjening, der stadig kan returneres.",
            },
            {
              term: "Produkttekster i bulk",
              body: "AI skriver beskrivelser på alle tre sprog ud fra en stilguide, og hvert udkast kontrolleres automatisk mod reglerne.",
            },
            {
              term: "Billedkontrol",
              body: "Leverandørbilleder tjekkes hver nat. Produkter med ødelagte billeder holdes ude af anbefalingssektionerne.",
            },
            {
              term: "Private notifikationer",
              body: "Vigtige hændelser sendes til Telegram. Der medsendes ingen persondata.",
            },
          ],
          qualityLabel: "Kvalitet",
          quality:
            "Dækket af automatiske tests, herunder end-to-end-tests på desktop-Chrome, Android og iPhone. Lokaliserede sider, mærkesider og guides gør butikken nem at finde i søgemaskiner.",
          change:
            "Bygget som en rigtig forretning og bevaret som reference. En ny virksomhed skal have ændret brugerfladen: brand, farver, billeder og tekster. Selve butikken er klar.",
          cta: "Spørg om Teamwear Webshop",
          subject: "Henvendelse om Teamwear Webshop",
        },
      },
    },
    experience: {
      eyebrow: "Baggrund",
      title: "Hvor jeg har arbejdet, og hvad jeg har studeret.",
      experienceLabel: "Erfaring",
      educationLabel: "Uddannelse",
      roles: {
        "Test Engineer": "Testingeniør",
        "Volunteer & Developer": "Frivillig & udvikler",
        "Student Job": "Studiejob",
        "BSc Software Engineering": "Diplomingeniør i softwareteknologi",
        "IT Technology": "IT-teknologi",
        "Secondary Education": "Gymnasial uddannelse",
      },
      bodies: {
        Systematic:
          "Testudvikling og automatisering hos Danmarks største privatejede IT-virksomhed.",
        "Riga Cup":
          "Mangeårig tilknytning til turneringen, senest med udvikling og drift af dens webplatform.",
        "REMA 1000": "Arbejdede sideløbende med fuldtidsstudier gennem hele uddannelsen.",
        "VIA University College": "Bacheloruddannelse i softwareteknologi, Horsens.",
        "UCL Odense": "Grundforløb i IT-teknologi og infrastruktur.",
        "Riga Culture Secondary School": "Afsluttet gymnasial uddannelse i Riga, Letland.",
      },
    },
    toolset: {
      eyebrow: "Værktøjer",
      title: "De værktøjer jeg griber efter.",
      lead: "Grupperet efter hvad de bruges til, ikke efter hvor stolt jeg er af dem.",
      groups: {
        Languages: "Sprog",
        Frameworks: "Frameworks",
        Data: "Data",
        Infrastructure: "Infrastruktur",
        Practice: "Praksis",
      },
      items: {
        "Test Automation": "Testautomatisering",
        "Code Review": "Code review",
      },
    },
    contact: {
      eyebrow: "Kontakt",
      titleLine1: "Lad os bygge",
      titleLine2: "noget solidt.",
      lead: "Skal du ansætte, samarbejde eller bare vende erfaringer om testautomatisering? Den hurtigste vej til mig er e-mail, jeg svarer på alt.",
    },
    footer: {
      built: "Bygget med Next.js, ingen skabeloner kom til skade",
      backToTop: "Til toppen",
    },
  },

  ru: {
    htmlLang: "ru",
    seo: {
      title: "Bruno Laizans – Инженер-программист и веб-разработчик, Орхус",
      description:
        "Инженер-программист в Орхусе, Дания. Создаю сайты, веб-приложения и интернет-магазины, тестирую ПО в Systematic. Открыт для фриланса и постоянной работы.",
      h1Extra: "Инженер-программист и веб-разработчик в Орхусе, Дания",
      imageAlt: "Bruno Laizans, инженер-программист в Орхусе, Дания",
      jobTitle: "Инженер-программист",
      serviceName: "Bruno Laizans – Разработка и тестирование ПО",
      serviceTypes: [
        "Разработка сайтов",
        "Разработка веб-приложений",
        "Разработка интернет-магазинов",
        "Тестирование ПО и автоматизация тестирования",
      ],
      ogEyebrow: "ИНЖЕНЕР-ПРОГРАММИСТ — ОРХУС, ДАНИЯ",
    },
    nav: {
      work: "Проекты",
      about: "Обо мне",
      experience: "Опыт",
      toolset: "Инструменты",
      contact: "Контакты",
      menu: "Меню",
      close: "Закрыть",
      skip: "Перейти к содержанию",
      main: "Основное",
      mobile: "Мобильное",
      siteMenu: "Меню сайта",
      language: "Язык",
    },
    hero: {
      availability: "Свободен сейчас",
      pitch:
        "Full-stack разработчик и специалист по тестированию. Я выпускаю веб-платформы, которыми люди пользуются каждый день, и слежу, чтобы они работали после запуска.",
      statement: "Я делаю сайты и интернет-магазины, тестирую их до запуска и поддерживаю после запуска.",
      offer: {
        label: "Что вы получите",
        items: [
          {
            title: "Сделано от начала до конца",
            body: "Сайты, интернет-магазины и веб-приложения на Java, .NET и TypeScript. Riga Cup обслуживает тысячи посетителей.",
          },
          {
            title: "Проверено до запуска",
            body: "Автотесты и CI, как в моих двух годах в Systematic. Магазин протестирован на Chrome, Android и iPhone.",
          },
          {
            title: "Поддержка после запуска",
            body: "Я слежу за тем, что построил. Я поддерживал Riga Cup, а магазин каждую ночь проверяет изображения и шлёт уведомления.",
          },
        ],
        proofLabel: "Реальные работы",
      },
      hiringNote: "Открыт для постоянной работы и проектов на фрилансе",
      hireMe: "Нанять меня",
      seeWork: "Мои работы",
      proof: {
        nowAt: "Статус",
        nowAtValue: "Свободен сейчас",
        experience: "Опыт",
        experienceValue: "4+ года разработки",
        focus: "Направление",
        focusValue: "Тестирование и бэкенд",
        response: "Время ответа",
        responseValue: "В течение 24 часов",
      },
      tagline: "Разрабатываю и тестирую софт, который выдерживает продакшн.",
      role: "Инженер-программист",
      location: "Орхус, Дания",
      selectedWork: "Избранные работы",
      getInTouch: "Связаться",
      meta: {
        company: "Компания",
        focus: "Направление",
        since: "С",
        interact: "Интерактив",
        interactValue: "Двигайте курсор",
        focusValue: "Тестирование и бэкенд",
      },
    },
    capabilities: {
      eyebrow: "Чем я занимаюсь",
      title: "Четыре вещи, за внимательность к которым мне платят.",
      items: [
        {
          title: "Тестирование и QA",
          body: "Два года занимался mission-critical тестированием в Systematic. Автоматизированные наборы тестов, регрессионное покрытие и CI-пайплайны для крупных систем, где ошибки стоят дорого.",
          flag: "Специализация",
        },
        {
          title: "Бэкенд-разработка",
          body: "REST API и сервисные слои на Java/Spring Boot и .NET. Реляционное моделирование данных на PostgreSQL и MySQL, контейнеризация через Docker.",
        },
        {
          title: "Фронтенд-разработка",
          body: "Продакшн-интерфейсы на React и Next.js. Типизированные, доступные и построенные по принципу mobile-first, включая сайт, который вы читаете.",
        },
        {
          title: "Облако и поставка",
          body: "Развёртывание и эксплуатация в Azure. Работа по Scrum с Jira, моделирование UML и код-ревью как обычная часть процесса.",
        },
      ],
    },
    about: {
      eyebrow: "Обо мне",
      title: "Я лучше умею возвращаться, чем не падать.",
      intro:
        "Full-stack разработчик и специалист по тестированию. Я выпустил платформы для электронной коммерции и турниров, которые работают в продакшне и используются каждый день, и два года занимался тестированием и автоматизацией в Systematic, крупнейшей частной IT-компании Дании. Full-stack опыт в Java, .NET и TypeScript.",
      p2: "До всего этого я играл в футбол, вратарём лет до 14, потом защитником, полузащитником, нападающим, кем нужно было команде. Прошёл через академию Skonto, затем год в RFS и два в Riga FC на высшем юношеском уровне Латвии, а потом прикинул, сколько реально может заплатить латвийский футбол, и начал вместо этого учиться программировать.",
      p3: "Что осталось со мной, так это умение подстраиваться, не отточить одну позицию до автоматизма, а реально быть полезным там, где команде чего-то не хватало. Примерно так я подхожу и к кодовой базе: пишу тесты и автоматизацию, которые находят проблемы раньше пользователей, а full-stack опыт позволяет мне читать код, который я тестирую, а не гадать. Сейчас я ищу новую работу и берусь за фриланс-проекты.",
      cta: "Начать разговор",
      photoAlt: "Бруно играет в футбол на соревновательном матче в Латвии",
      stats: [
        "Лет пишу код",
        "Использованных технологий",
        "Продукта в проде",
        "Языков в активе",
      ],
    },
    work: {
      eyebrow: "Избранные работы",
      poster: "Избранные работы",
      title: "Продукты, построенные от данных до интерфейса.",
      rail: {
        role: "Роль",
        year: "Год",
        status: "Статус",
        statusValue: "Live",
        statusValueAcademic: "Дипломный проект",
        statusValueInProgress: "В процессе",
        statusValueReady: "Готов к запуску",
      },
      placeholderLabel: "В процессе",
      otherProjects: "Другие проекты",
      featuresLabel: "Что умеет",
      builtWith: "Стек",
      allRepos: "Все репозитории на GitHub",
      screenshotAlt: (name) => `Скриншот проекта ${name}`,
      roles: {
        "Full-stack": "Full-stack",
        "Semester project": "Семестровый проект",
        Backend: "Бэкенд",
        Frontend: "Фронтенд",
        "Design & build": "Дизайн и разработка",
      },
      bodies: {
        PNTA: "Экосистема для поиска мероприятий, созданная как дипломный проект: приложение на React Native для гостей, дашборд на Next.js для менеджеров площадок, бэкенд на Spring Boot/PostgreSQL, обслуживающий оба, и модель на Python, предсказывающая посещаемость мероприятий.",
        "Aarhus Webshop": "Интернет-магазин для предпринимателя из Орхуса, сейчас в разработке.",
        "Teamwear Webshop":
          "Многоязычный интернет-магазин с несколькими валютами, программой лояльности, встроенной финансовой панелью и страницами товаров, написанными ИИ. Собран от начала до конца и работал как настоящий бизнес по продаже футбольной экипировки. Готов для нового бизнеса, с новым интерфейсом.",
        "Riga Cup":
          "Платформа для одного из крупнейших юношеских футбольных турниров Балтии, расписания, результаты и управление командами для тысяч посетителей.",
        SyncTask:
          "Распределённая система управления задачами на трёх средах исполнения, сервис .NET, API на Spring Boot и клиент Blazor с общей доменной моделью.",
        VIATAB:
          "Java-приложение в формате таблоида с полным CRUD для сенсационных историй и пайплайном DevOps-деплоя.",
        "Slaughterhouse API":
          "REST API, моделирующий полную прослеживаемость продукции от приёмки до упаковки, со слоистой архитектурой и постоянным хранением данных.",
        Pokédex:
          "Клиентское приложение на базе PokéAPI с поиском, фильтрацией и детальными карточками, упражнение в чистой работе с асинхронным состоянием.",
        "n-Queens Solver":
          "Решатель головоломки n-Queens методом backtracking, упражнение в поиске с ограничениями и разработке алгоритмов.",
        TicTacTwo:
          "Одна и та же игра, реализованная дважды, объектно-ориентированно и чисто функционально, чтобы сравнить, как каждая парадигма работает с общим состоянием.",
        "This Portfolio":
          "Редакционный одностраничный сайт с зональной системой тем и рукописным интерактивным canvas на ~3кб. Без анимационных библиотек.",
      },
      links: {
        live: "Онлайн",
        liveSite: "Открыть сайт",
        source: "Исходный код",
        mobile: "Мобильное",
        web: "Веб",
        backend: "Бэкенд",
        "ml model": "ML-модель",
        "admin demo": "Демо админки",
      },
      plateLabels: {
        dashboard: "Дашборд для менеджеров площадок",
        promoSite: "Промо-сайт",
        mobileApp: "Мобильное приложение",
      },
      proofAlt: {
        "Riga Cup": "Бруно вручает медали игрокам на церемонии награждения Riga Cup, 2019",
      },
      proofCaptions: {
        rigaCupAwards: "Церемония награждения, Riga Cup 2019",
      },
      plateCaptions: {
        teamwearReference: "Референсная сборка: магазин футбольной экипировки",
      },
      plateAlts: {
        "Teamwear Webshop":
          "Референсная витрина магазина футбольной экипировки: бутсы, футболка и худи вокруг заголовка «Your next Level.»",
      },
      offers: {
        "Teamwear Webshop": {
          label: "Что входит",
          shoppersLabel: "Для покупателей",
          ownerLabel: "Для владельца",
          shoppers: [
            {
              term: "Свой язык и валюта",
              body: "Магазин открывается на английском, датском или немецком и показывает цены в EUR или DKK в зависимости от страны посетителя. Выбор запоминается.",
            },
            {
              term: "Верные цены",
              body: "НДС считается по стране покупателя. Цены со скидкой отмечены явно.",
            },
            {
              term: "Бонусные баллы",
              body: "Один балл за евро, баллы обмениваются на промокоды. Баллы начисляются только после окончания срока возврата. Новым покупателям полагается приветственный кредит 10 €.",
            },
            {
              term: "Оплата",
              body: "Платежи проходят через Stripe. Корзина — выдвижная панель, которая открывается с любой страницы.",
            },
            {
              term: "Возвраты",
              body: "Онлайн-форма отказа оформляет законный 14-дневный возврат без переписки по почте.",
            },
            {
              term: "Заказы для команд",
              body: "Клубы могут запросить предложение на крупный заказ.",
            },
            {
              term: "Без тупиков",
              body: "Уведомления о поступлении товара, отзывы и раздел «для вас» с подходящими товарами.",
            },
          ],
          owner: [
            {
              term: "Живая панель",
              body: "Продажи, заказы и тренды в одном месте, плюс демо-режим на примерных данных.",
            },
            {
              term: "Финансы внутри",
              body: "Выручка, расходы, комиссии Stripe и распределение прибыли между партнёрами по каждому месяцу. Подтверждённый доход отделён от дохода, который ещё могут вернуть.",
            },
            {
              term: "Описания товаров пакетом",
              body: "ИИ пишет описания на всех трёх языках по руководству по стилю, и каждый черновик автоматически проверяется на соответствие правилам.",
            },
            {
              term: "Проверка изображений",
              body: "Изображения поставщиков проверяются каждую ночь. Товары с битыми фото не попадают в блоки рекомендаций.",
            },
            {
              term: "Приватные уведомления",
              body: "Важные события приходят в Telegram. Персональные данные в них не включаются.",
            },
          ],
          qualityLabel: "Качество",
          quality:
            "Покрыт автоматическими тестами, включая сквозные тесты в десктопном Chrome, Android и iPhone. Локализованные страницы, страницы брендов и руководства помогают находить магазин в поиске.",
          change:
            "Собран как настоящий бизнес и сохранён как референс. Новому бизнесу нужно сменить интерфейс: бренд, цвета, изображения и тексты. Сам магазин готов.",
          cta: "Спросить о Teamwear Webshop",
          subject: "Запрос о Teamwear Webshop",
        },
      },
    },
    experience: {
      eyebrow: "Послужной список",
      title: "Где я работал и что изучал.",
      experienceLabel: "Опыт работы",
      educationLabel: "Образование",
      roles: {
        "Test Engineer": "Инженер по тестированию",
        "Volunteer & Developer": "Волонтёр и разработчик",
        "Student Job": "Работа во время учёбы",
        "BSc Software Engineering": "Бакалавр программной инженерии",
        "IT Technology": "IT-технологии",
        "Secondary Education": "Среднее образование",
      },
      bodies: {
        Systematic:
          "Тестирование и автоматизация в крупнейшей частной IT-компании Дании.",
        "Riga Cup":
          "Многолетнее участие в турнире, в последние годы, разработка и поддержка его веб-платформы.",
        "REMA 1000": "Работал параллельно с очной учёбой на протяжении всей программы.",
        "VIA University College": "Степень бакалавра программной инженерии, Хорсенс.",
        "UCL Odense": "Базовая программа по IT-технологиям и инфраструктуре.",
        "Riga Culture Secondary School": "Окончил среднюю школу в Риге, Латвия.",
      },
    },
    toolset: {
      eyebrow: "Инструменты",
      title: "Инструменты, к которым я тянусь.",
      lead: "Сгруппированы по назначению, а не по тому, насколько я ими горжусь.",
      groups: {
        Languages: "Языки",
        Frameworks: "Фреймворки",
        Data: "Данные",
        Infrastructure: "Инфраструктура",
        Practice: "Практики",
      },
      items: {
        "Test Automation": "Автоматизация тестирования",
        "Code Review": "Код-ревью",
      },
    },
    contact: {
      eyebrow: "Контакты",
      titleLine1: "Давайте построим",
      titleLine2: "что-то надёжное.",
      lead: "Наём, сотрудничество или просто обмен опытом по автоматизации тестирования? Быстрее всего, по почте, я отвечаю на всё.",
    },
    footer: {
      built: "Сделано на Next.js, без шаблонов",
      backToTop: "Наверх",
    },
  },
};
